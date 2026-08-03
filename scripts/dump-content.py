from pathlib import Path

path = Path(r"C:\Users\jack\memaw website\src\lib\content.ts")
text = path.read_text(encoding="utf-8")
out = []
for i, line in enumerate(text.splitlines(), 1):
    if any(ord(c) in {0x2013, 0x2014, 0x2012, 0x2015} or (c == "-" and "detail" in line.lower()) for c in line):
        out.append(f"{i}: {line.encode('unicode_escape').decode()}")
    if "detail:" in line or (line.strip().startswith('"') and "vitality" in line):
        out.append(f"{i}: {line.encode('unicode_escape').decode()}")

Path(r"C:\Users\jack\memaw website\scripts\content-escape.txt").write_text("\n".join(out), encoding="utf-8")
print("done", len(out))
