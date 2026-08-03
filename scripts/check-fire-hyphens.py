from pathlib import Path
import re

page = Path(r"C:\Users\jack\memaw website\src\app\fire-framework\page.tsx").read_text(encoding="utf-8")
content = Path(r"C:\Users\jack\memaw website\src\lib\content.ts").read_text(encoding="utf-8")
chunk = "\n".join(content.splitlines()[:43])

print("PAGE STRINGS WITH HYPHEN:")
for m in re.finditer(r'"([^"]*)"', page):
    s = m.group(1)
    if "-" in s and not s.startswith("@/") and "rgba" not in s:
        print(repr(s))

print("FIRE_PILLARS STRINGS WITH HYPHEN:")
for m in re.finditer(r'"([^"]*)"', chunk):
    s = m.group(1)
    if "-" in s:
        print(repr(s))
