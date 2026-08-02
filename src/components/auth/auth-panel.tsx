import { FileText, ListChecks, Sparkles } from "lucide-react";
import Logo from "@/components/shared/logo";

const points = [
  { icon: Sparkles, label: "Grounded in your own notes, not the internet" },
  { icon: ListChecks, label: "Quizzes and flashcards generated in seconds" },
];

export default function AuthPanel() {
  return (
    <div className="relative hidden overflow-hidden bg-brand-dark md:flex md:w-1/2 md:flex-col md:justify-between md:p-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-mauve/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-brand-cream/10 blur-[100px]" />

      <div className="relative">
        <Logo />
      </div>

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-brand-cream">
          <Sparkles className="h-3.5 w-3.5" /> AI-powered exam prep
        </span>

        <h2 className="mt-5 max-w-sm text-3xl font-bold leading-tight text-brand-cream">
          Notes in. Clarity out.
        </h2>
        <p className="mt-3 max-w-sm text-brand-cream/60">
          Upload your lecture notes and get summaries, quizzes, and flashcards
          in seconds.
        </p>

        <div className="mt-8 rounded-3xl bg-white/[0.07] p-5 ring-1 ring-white/10 backdrop-blur">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <FileText className="h-4 w-4 text-brand-mauve" />
            <span className="text-xs font-medium text-brand-cream">
              Intro to Cell Biology.pdf
            </span>
          </div>
          <ul className="mt-4 space-y-3">
            {points.map((p) => (
              <li key={p.label} className="flex items-start gap-2.5">
                <p.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-mauve" />
                <span className="text-xs text-brand-cream/70">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="relative text-xs text-brand-cream/40">
        © 2026 StudyForge AI
      </p>
    </div>
  );
}
