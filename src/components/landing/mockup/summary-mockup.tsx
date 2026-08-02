import { FileText } from "lucide-react";
import BrowserFrame from "./browser-frame";

const points = [
  "Cells are the basic structural unit of all living organisms.",
  "Mitochondria generate most of the cell's ATP energy supply.",
  "The nucleus stores genetic information as DNA.",
];

export default function SummaryMockup() {
  return (
    <BrowserFrame>
      <div className="flex items-center gap-2 border-b border-brand-dark/5 pb-3">
        <FileText className="h-4 w-4 text-brand-mauve" />
        <span className="text-xs font-medium text-brand-dark">
          Intro to Cell Biology.pdf
        </span>
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-mauve">
        Summary
      </p>
      <ul className="mt-2 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mauve" />
            <span className="text-sm text-brand-dark/70">{p}</span>
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}
