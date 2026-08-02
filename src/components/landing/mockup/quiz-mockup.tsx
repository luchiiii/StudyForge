import { ListChecks } from "lucide-react";
import BrowserFrame from "./browser-frame";

const options = ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"];

export default function QuizMockup() {
  return (
    <BrowserFrame>
      <div className="flex items-center gap-2 border-b border-brand-dark/5 pb-3">
        <ListChecks className="h-4 w-4 text-brand-mauve" />
        <span className="text-xs font-medium text-brand-dark">
          Quiz · Question 2 of 8
        </span>
      </div>
      <p className="mt-3 text-sm font-semibold text-brand-dark">
        Which organelle is known as the powerhouse of the cell?
      </p>
      <div className="mt-3 space-y-2">
        {options.map((o, i) => (
          <div
            key={o}
            className={`rounded-xl border px-3 py-2 text-sm ${
              i === 1
                ? "border-brand-mauve bg-brand-mauve/10 font-medium text-brand-dark"
                : "border-brand-dark/10 text-brand-dark/60"
            }`}
          >
            {o}
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}
