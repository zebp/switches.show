const data = [
  [
    "Esc",
    "!\n1",
    "@\n2",
    "#\n3",
    "$\n4",
    "%\n5",
    "^\n6",
    "&\n7",
    "*\n8",
    "(\n9",
    ")\n0",
    "_\n-",
    "+\n=",
    { w: 2 },
    "Backspace",
    "Home",
  ],
  [
    { w: 1.5 },
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{\n[",
    "}\n]",
    { w: 1.5 },
    "|\n\\",
    "PgUp",
  ],
  [
    { w: 1.75 },
    "Caps Lock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":\n;",
    "\"\n'",
    { w: 2.25 },
    "Enter",
    "PgDn",
  ],
  [
    { w: 2.25 },
    "Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "<\n,",
    ">\n.",
    "?\n/",
    { w: 1.75 },
    "Shift",
    "Up",
    "End",
  ],
  [
    { w: 1.25 },
    "Ctrl",
    { w: 1.25 },
    "Win",
    { w: 1.25 },
    "Alt",
    { w: 6.25 },
    "Space",
    "Alt",
    "Menu",
    "Ctrl",
    "Left",
    "Down",
    "Right",
  ],
];

const output = [];

for (const row of data) {
  const line = [];

  for (let i = 0; i < row.length; i++) {
    const item = row[i];

    if (typeof item === "string") {
      line.push(item.split("\n").slice(-1)[0]);
    } else if (typeof item === "object") {
      const keyMeta = item;
      const keyLabel = row[i + 1];
      let width = keyMeta.w || 1;

      i += 1;

      line.push([keyLabel.split("\n").slice(-1)[0], width]);
    }
  }

  output.push(line);
}

console.log(output);
