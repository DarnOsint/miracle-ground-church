const NUMBERED = /^(\d+)[.)]\s+(.*)$/;
const SUBHEADING = /^#{1,3}\s+(.*)$/;

interface Point {
  number: string;
  lead: string;
  lines: string[];
}

type Block =
  | { kind: "subheading"; text: string }
  | { kind: "paragraph"; lines: string[] }
  | { kind: "points"; items: Point[] };

function parseBody(body: string): Block[] {
  const blocks: Block[] = [];

  for (const raw of body.split(/\n{2,}/)) {
    const block = raw.trim();
    if (!block) continue;

    const lines = block.split("\n").map((line) => line.trim());

    if (lines.length === 1) {
      const subheading = lines[0].match(SUBHEADING);
      if (subheading) {
        blocks.push({ kind: "subheading", text: subheading[1] });
        continue;
      }
    }

    const numbered = lines.map((line) => line.match(NUMBERED));
    if (numbered[0]) {
      const items: Point[] = [];
      lines.forEach((line, i) => {
        const match = numbered[i];
        if (match) {
          items.push({ number: match[1], lead: match[2], lines: [] });
        } else if (items.length) {
          items[items.length - 1].lines.push(line);
        }
      });
      blocks.push({ kind: "points", items });
      continue;
    }

    blocks.push({ kind: "paragraph", lines });
  }

  return blocks;
}

export function BlogPostBody({ body }: { body: string }) {
  const blocks = parseBody(body);

  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        if (block.kind === "subheading") {
          return (
            <h3
              key={i}
              className="pt-4 text-center font-serif text-2xl font-semibold leading-snug text-night-900 sm:text-3xl"
            >
              {block.text}
            </h3>
          );
        }

        if (block.kind === "points") {
          return (
            <ol key={i} className="space-y-5">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-4 rounded-3xl border border-night-900/10 bg-white p-6 shadow-sm sm:p-7"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-rose-500 font-serif text-lg font-bold text-white shadow-md shadow-rose-500/25">
                    {item.number}
                  </span>
                  <div className="space-y-4 text-[1.0625rem] leading-[1.8] text-night-900/80 sm:text-lg">
                    <p>
                      <span className="font-semibold text-night-900">{item.lead}</span>
                    </p>
                    {item.lines.map((line, k) => (
                      <p key={k}>{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          );
        }

        return (
          <div key={i} className="space-y-4 text-[1.0625rem] leading-[1.8] text-night-900/80 sm:text-lg">
            {block.lines.map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
