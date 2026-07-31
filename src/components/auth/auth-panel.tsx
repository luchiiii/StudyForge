import { Sparkles } from "lucide-react";

export default function AuthPanel() {
  return (
    <div className="relative hidden overflow-hidden bg-brand-midnight md:flex md:w-1/2 md:flex-col md:justify-between md:p-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-brand-teal/30 blur-[110px]" />

      <span className="relative text-lg font-bold text-white">
        StudyForge<span className="text-brand-mint">AI</span>
      </span>

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-brand-mint ring-1 ring-white/10">
          <Sparkles className="h-3.5 w-3.5" /> AI-powered exam prep
        </span>
        <h2 className="mt-4 max-w-sm text-3xl font-bold leading-tight text-white">
          Notes in. Clarity out.
        </h2>
        <p className="mt-3 max-w-sm text-slate-300">
          Upload your lecture notes and get summaries, quizzes, and flashcards
          in seconds.
        </p>
      </div>

      <p className="relative text-xs text-slate-500">© 2026 StudyForge AI</p>
    </div>
  );
}
