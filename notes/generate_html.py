"""
Generate static HTML page using pseudo-markdown.
It also generates a table of contents at the beginning based on Level 1 headings.

Note: to produce a newline, only a single one is needed, instead of two (as seen in regular Markdown).

Ie..,
'This is
separate lines'

---

Supported features:
* Headings of any size (e.g., #### This is a heading).
* Bold text (e.g., **This is bold**)
* Italic text (e.g., *This is italic*).

Not supported:
* Lists - idk how to efficiently wrap <li> (list item) tags with <ul> (unordered list).
* Tables - not needed yet.
"""
import logging
import os
import re
from typing import Generator


class TextToHtml:
    def __init__(
        self,
        filepath_input: str = "./input.md",
        filepath_output: str = "./index.html",
        strip_empty_newlines: bool = True,
    ) -> None:
        # use paths relative to the script, not user's pwd
        script_dir: str = os.path.realpath(os.path.dirname(__file__))
        logging.debug(f"found script's directory: {script_dir}")
        self.filepath_input: str = os.path.join(script_dir, filepath_input)
        self.filepath_output: str = os.path.join(script_dir, filepath_output)
        self.strip_empty_newlines: bool = strip_empty_newlines
        self._html_head = """<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <meta charset="UTF-8">
  <title>Meeting Notes</title>
  <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico">
  <link rel="stylesheet" href="/styles/notes.css">
  <meta name="description" content="Internal Weekly Meeting Notes (OPUS-19)">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    /* prevent Firefox FOUC (Flash of unstyled content) warning */
    let FF_FOUC_FIX;
  </script>
</head>"""
        return None

    def _read_md_as_generator(self) -> Generator:
        """
        Open text file and return it as a generator.

        Each item is a single line from the file.

        Yields:
            Generator: a string corresponding to a single line.
        """
        with open(
            file=self.filepath_input,
            mode="r",
            encoding="utf-8",
            newline=None,
        ) as f:
            for line in f:
                yield line.strip()

    @staticmethod
    def _strip_heading(text: str) -> str:
        """
        Replace spaces with underscores, remove all characters except for
        ASCII letters and digits.

        Args:
            text (str): string to process.

        Returns:
            str: string without problematic characters.
        """
        text = text.replace(" ", "_")
        return "".join(
            [i for i in text.lower() if i.isalpha() or i.isdigit() or i == "_"]
        )

    def _generate_body_html_from_text(self) -> str:
        """
        Open locally stored text file, and return formatted HTML content.

        Each line in the string corresponds to a full HTML tag, e.g., <h1>This is a heading<h2>

        Returns:
            str: HTML bodu (e.g., <p>Hello</p>).
        """
        heading_count: int = 0
        line_length: int = 0
        to_append: str = str()
        stripped_name: str = str()
        r: list() = list()
        r_toc: list = list()
        for line in self._read_md_as_generator():
            line_length = len(line)
            # if newline, add empty string, will be useful for combining p tags
            if line_length == 0:
                if self.strip_empty_newlines:
                    logging.debug(
                        f"found empty line, ignoring because 'strip_empty_newlines' is True: '{line}'"
                    )
                    continue
                else:
                    to_append = ""
                    logging.debug(f"found empty line, setting to '': '{line}'")
            else:
                # reset heading counter
                heading_count = 0
                # count headings based on hash symbol
                for index, letter in enumerate(line, start=1):
                    if letter == "#" and index < 7:
                        logging.debug(f"found heading '{index}' in '{line}'")
                        heading_count = index
                    # break as soon as letter is not hash, do not try any further
                    else:
                        break
                # if found headings, add heading HTMl tag with number and stripped anchor link
                if heading_count > 0:
                    # remove initial hash symbols
                    to_append = line[heading_count + 1 :]
                    stripped_name = self._strip_heading(to_append)
                    # if level 1 heading, create h tag and add to table of contents
                    if heading_count == 1:
                        logging.debug(
                            f"found lvl1 heading '{index}' in '{line}', adding to ToC"
                        )
                        r_toc.append(
                            f'<li><a href="#{stripped_name}">{to_append}</a></li>'
                        )
                        to_append = f'<h{heading_count}><a id="{stripped_name}">{to_append}</a></h{heading_count}>'
                    # if NOT level 1 heading, only create h tag
                    else:
                        logging.debug(f"found non lvl1 heading '{index}' in '{line}'")
                        to_append = f"<h{heading_count}>{to_append}</h{heading_count}>"
                else:
                    to_append = f"<p>{line}</p>"
                    # add <b> for bold text marked using "**"
                    to_append = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", to_append)
                    # add <em> for italic text marked using "*"
                    to_append = re.sub(r"\*(.+?)\*", r"<em>\1</em>", to_append)
            logging.debug(f"created '{to_append}' using line '{line}'")
            r.append(to_append)
        # turn to string, remove empty strings, no longer needed
        logging.info(f"OK: generated '{len(r_toc)}' items in the table of contents")
        logging.info(
            f"OK: generated '{len(r)}' items in the notes (incl. newlines, which will be discarded)"
        )
        table_of_contents: str = "\n".join(r_toc)
        notes: str = "\n".join([i for i in r if i != ""])
        final: str = f"<nav>\n<p>Table of contents</p>\n<ul>\n{table_of_contents}\n</ul>\n</nav>\n\n{notes}"
        return final

    def run(self) -> bool:
        """
        Generate HTML from TXT file.

        Returns:
            bool: True if suceeded, False if Failed.
        """
        try:
            html = self._html_head + "\n\n<body>\n\n"
            html += self._generate_body_html_from_text()
            html += "\n\n</body>"
            with open(file=self.filepath_output, mode="w", encoding="utf-8") as f:
                f.write(html)
        except Exception as e:
            logging.exception(f"error: {e}")
            return False
        else:
            return True


def main() -> None:
    # setup logger
    logging.basicConfig(
        datefmt="%G-%m-%d %T",
        format="%(asctime)s [%(levelname)s] %(filename)s : %(funcName)s() (%(lineno)d) - %(message)s",
        level=logging.DEBUG,
    )
    app = TextToHtml()
    r: bool = app.run()
    logging.info(f"Output status: {r}")
    return None


if __name__ == "__main__":
    main()
