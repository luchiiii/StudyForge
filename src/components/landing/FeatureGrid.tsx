import {
  Clock,
  MessageCircleOff,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import Reveal from "./reveal";

const features = [
  {
    icon: Clock,
    title: "Available anytime.",
    body: "Study at 2am or 2pm, StudyForge doesn't sleep.",
  },
  {
    icon: MessageCircleOff,
    title: "No jargon overload.",
    body: "Difficult topics explained in plain language.",
  },
  {
    icon: ShieldCheck,
    title: "Grounded in your notes.",
    body: "Answers come from what you uploaded, not the open internet.",
  },
  {
    icon: UploadCloud,
    title: "Upload once, use everywhere.",
    body: "One document powers summaries, quizzes, and flashcards.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/10">
                  <f.icon className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
