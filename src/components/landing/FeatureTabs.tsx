"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reveal from "./reveal";

const tabs = [
  {
    value: "summary",
    label: "Summarize",
    heading: "Say yes to shorter reading lists.",
    body: "Turn a 50-page document into a summary you can actually get through before an exam.",
  },
  {
    value: "quiz",
    label: "Quiz",
    heading: "Test yourself before the exam does.",
    body: "Generate quiz questions straight from your notes, so you find the gaps early.",
  },
  {
    value: "flashcards",
    label: "Flashcards",
    heading: "Review on the go.",
    body: "Flip through flashcards generated from your own material, anywhere.",
  },
];

export default function FeatureTabs() {
  return (
    <section id="product" className="bg-brand-midnight py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="mx-auto mb-12 flex w-fit gap-1 bg-white/10">
              {tabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="data-[state=active]:bg-brand-mint data-[state=active]:text-brand-midnight"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((t) => (
              <TabsContent key={t.value} value={t.value}>
                <div className="flex flex-col items-center gap-12 md:flex-row">
                  <div className="h-64 w-full flex-1 rounded-3xl bg-white/[0.06] ring-1 ring-white/10" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {t.heading}
                    </h3>
                    <p className="mt-3 text-slate-300">{t.body}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
