import { RotateCw } from "lucide-react";
import BrowserFrame from "./browser-frame";

export default function FlashcardMockup() {
  return (
    <BrowserFrame>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-cream/60 px-6 py-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-mauve">
          Flashcard 3 / 12
        </p>
        <p className="mt-3 text-base font-semibold text-brand-dark">
          What is the function of mitochondria?
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-dark/50">
          <RotateCw className="h-3.5 w-3.5" /> Tap to flip
        </span>
      </div>
    </BrowserFrame>
  );
}
