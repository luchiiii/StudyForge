import FeatureCard from "./FeatureCard";
import { FileText, Brain, Layers3, CircleHelp } from "lucide-react";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold">
          Everything you need to study smarter
        </h2>

        <p className="mt-4 text-lg text-muted-foreground">
          StudyForge turns your lecture notes into powerful study materials in
          seconds.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          icon={<FileText size={28} />}
          title="Upload Notes"
          description="Upload PDFs or lecture slides and keep everything in one place."
        />

        <FeatureCard
          icon={<Brain size={28} />}
          title="AI Summaries"
          description="Generate concise summaries from lengthy lecture materials."
        />

        <FeatureCard
          icon={<Layers3 size={28} />}
          title="Flashcards"
          description="Create revision flashcards automatically from your notes."
        />

        <FeatureCard
          icon={<CircleHelp size={28} />}
          title="Practice Quiz"
          description="Generate practice questions to test your understanding."
        />
      </div>
    </section>
  );
}
