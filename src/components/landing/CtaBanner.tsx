import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "./reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-mauve/20 blur-[100px]" />
      <Reveal>
        <div className="relative mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold text-brand-cream">
            Get StudyForge for free.
          </h2>
          <p className="mt-3 text-brand-cream/70">
            Upload your first document and see what it turns into.
          </p>
          <Button size="lg" asChild className="mt-6">
            <Link href="/sign-up">Get started</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
