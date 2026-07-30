import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between px-6 py-20">
      {/* Left */}
      <div className="max-w-xl">
        <span className="rounded-full border px-4 py-2 text-sm font-medium">
          AI-Powered Study Assistant
        </span>

        <h1 className="mt-6 text-6xl font-bold leading-tight">
          Turn your lecture notes into summaries, quizzes and flashcards.
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Upload your notes once and let AI help you study faster, stay
          organized and prepare for exams with less stress.
        </p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:flex h-[550px] w-[500px] items-center justify-center rounded-3xl border bg-muted">
        <p className="text-muted-foreground">Dashboard Preview</p>
      </div>
    </section>
  );
}
