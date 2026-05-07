import { ElementType, ReactNode } from "react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  as?: ElementType;
  charClassName?: string;
}

export function SplitText({ text, className, delay = 0, step = 0.025, as = "span", charClassName }: Props) {
  const Tag: any = as;
  const words = text.split(" ");
  let idx = 0;
  const out: ReactNode[] = [];
  words.forEach((w, wi) => {
    const chars: ReactNode[] = [];
    for (const ch of w) {
      const d = delay + idx * step;
      chars.push(
        <span key={`${wi}-${idx}`} className={`split-char ${charClassName ?? ""}`} style={{ animationDelay: `${d}s` }}>
          {ch}
        </span>
      );
      idx++;
    }
    out.push(<span key={`w-${wi}`} className="split-word">{chars}</span>);
    if (wi < words.length - 1) {
      out.push(<span key={`s-${wi}`} style={{ display: "inline-block", width: "0.32em" }} />);
      idx++;
    }
  });
  return <Tag className={className}>{out}</Tag>;
}
