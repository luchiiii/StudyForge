import StepCard from "./StepCard";
import { Upload, Sparkles, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold">How it works</h2>

        <p className="mt-4 text-lg text-muted-foreground">
          Study smarter in three simple steps.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StepCard
          icon={<Upload size={28} />}
          step="Step 1"
          title="Upload your notes"
          description="Upload lecture notes, PDFs or slides."
        />

        <StepCard
          icon={<Sparkles size={28} />}
          step="Step 2"
          title="Choose an AI tool"
          description="Generate summaries, flashcards or quizzes."
        />

        <StepCard
          icon={<GraduationCap size={28} />}
          step="Step 3"
          title="Start studying"
          description="Revise faster with personalized study materials."
        />
      </div>
    </section>
  );
}
