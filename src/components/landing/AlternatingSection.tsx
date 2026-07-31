import Reveal from "./reveal";
import { Sparkles } from "lucide-react";

interface Props {
  eyebrow: string;
  heading: string;
  body: string;
  reverse?: boolean;
}

export default function AlternatingSection({
  eyebrow,
  heading,
  body,
  reverse,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div
          className={`flex flex-col items-center gap-12 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex h-72 w-full flex-1 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-teal/10 via-white to-brand-mint/10 ring-1 ring-slate-100">
            <Sparkles className="h-12 w-12 text-brand-teal/40" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {heading}
            </h2>
            <p className="mt-4 text-base text-slate-600">{body}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
