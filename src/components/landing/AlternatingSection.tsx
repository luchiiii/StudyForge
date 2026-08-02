import Reveal from "./reveal";

interface Props {
  eyebrow: string;
  heading: string;
  body: string;
  reverse?: boolean;
  visual: React.ReactNode;
}

export default function AlternatingSection({
  eyebrow,
  heading,
  body,
  reverse,
  visual,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div
          className={`flex flex-col items-center gap-12 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
        >
          <div className="w-full flex-1">{visual}</div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-mauve">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-dark">
              {heading}
            </h2>
            <p className="mt-4 text-base text-brand-dark/70">{body}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
