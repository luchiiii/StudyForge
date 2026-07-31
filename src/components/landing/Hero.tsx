"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-midnight px-6 pb-24 pt-20 text-center md:pt-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-teal/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-brand-mint/20 blur-[100px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-brand-mint ring-1 ring-white/10">
          <Sparkles className="h-3.5 w-3.5" /> AI-powered exam prep
        </span>

        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
          Notes in. <span className="text-brand-mint">Clarity out.</span>
        </h1>

        <p className="max-w-xl text-lg text-slate-300">
          Upload your lecture notes and StudyForge turns them into summaries,
          quizzes, and flashcards, so you spend less time organizing and more
          time actually learning.
        </p>

        <Button
          size="lg"
          className="bg-brand-mint text-brand-midnight hover:bg-brand-mint/90"
          asChild
        >
          <Link href="/sign-up">Try it out</Link>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 mx-auto mt-14 w-full max-w-2xl rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <FileText className="h-5 w-5 text-brand-mint" />
          <span className="text-sm font-medium text-white">
            Intro to Cell Biology.pdf
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {["Summary", "Quiz", "Flashcards"].map((t) => (
            <div
              key={t}
              className="rounded-xl bg-white/5 px-3 py-4 text-center text-xs font-medium text-slate-200 ring-1 ring-white/5"
            >
              {t}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
