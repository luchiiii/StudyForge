import Reveal from "./reveal";

const testimonials = [
  {
    quote:
      "I finally stopped rewriting my notes into flashcards by hand. This did it in seconds.",
    name: "Chidinma A.",
    opacity: "",
  },
  {
    quote:
      "Turned my 40-page module PDF into a quiz I actually used the night before my exam.",
    name: "Femi O.",
    opacity: "/80",
  },
  {
    quote:
      "It only answers from what I uploaded, so I'm not studying random internet facts.",
    name: "Grace U.",
    opacity: "/60",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-dark">
          Students have spoken.
        </h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className="h-full rounded-2xl bg-brand-cream p-6 ring-1 ring-brand-dark/5 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-brand-dark/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-brand-mauve${t.opacity} text-xs font-semibold text-white`}
                >
                  {t.name[0]}
                </div>
                <p className="text-sm font-semibold text-brand-dark/60">
                  {t.name}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
