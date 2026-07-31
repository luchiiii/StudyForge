export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
        <div>
          <p className="font-bold text-slate-900">StudyForge AI</p>
          <p className="mt-2 text-sm text-slate-500">
            © 2026 StudyForge AI. All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Product</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-500">
            <li>Summarize</li>
            <li>Quiz</li>
            <li>Flashcards</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <p className="mt-2 text-sm text-slate-500">team@studyforge.ai</p>
        </div>
      </div>
    </footer>
  );
}
