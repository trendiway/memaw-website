from pathlib import Path

ROOT = Path(r"C:\Users\jack\memaw website\src")
DASHES = {
    "\u2014": "EM",
    "\u2013": "EN",
    "\u2012": "FIG",
    "\u2015": "HORIZ",
    "\u2212": "MINUS",
    "\u2500": "BOX",
    "\u2501": "BOXH",
}

out = Path(r"C:\Users\jack\memaw website\scripts\dash-report.txt")
lines = []
for p in ROOT.rglob("*"):
    if p.suffix not in {".tsx", ".ts", ".css", ".md", ".jsx", ".js"}:
        continue
    text = p.read_text(encoding="utf-8", errors="replace")
    found = []
    for i, line in enumerate(text.splitlines(), 1):
        hits = []
        for ch, name in DASHES.items():
            if ch in line:
                hits.append(f"{name}x{line.count(ch)}")
        if hits:
            safe = line.strip().encode("unicode_escape").decode()
            found.append(f"  {i}: [{','.join(hits)}] {safe}")
    if found:
        lines.append(f"\n{p}")
        lines.extend(found[:40])

out.write_text("\n".join(lines) if lines else "NO DASHES FOUND", encoding="utf-8")
print(f"wrote {out} lines={len(lines)}")
