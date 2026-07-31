import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What file types can I upload?",
    a: "PDF for now. We're evaluating support for other formats after MVP.",
  },
  {
    q: "Is my uploaded material private?",
    a: "Yes. Your documents and generated study material are only visible to your account.",
  },
  {
    q: "Does StudyForge make things up?",
    a: "It's built to answer only from the content you upload, not from general internet knowledge.",
  },
  { q: "Is there a free plan?", a: "Yes, you can get started for free." },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
        FAQs
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
