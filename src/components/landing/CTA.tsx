import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl bg-primary px-10 py-20 text-center text-primary-foreground">
        <h2 className="text-5xl font-bold">Ready to study smarter?</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          Upload your lecture notes once and let AI generate summaries,
          flashcards and quizzes in seconds.
        </p>

        <Button variant="secondary" size="lg" className="mt-10">
          Get Started
        </Button>
      </div>
    </section>
  );
}
