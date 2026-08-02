import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-full border border-white/50 bg-white/30 px-4 py-1.5 text-sm font-bold text-brand-mauve backdrop-blur-md transition hover:bg-white/50"
    >
      StudyForge<span className="opacity-70">AI</span>
    </Link>
  );
}
