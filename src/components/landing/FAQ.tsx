import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
      </div>

      <Accordion defaultValue={["1"]}>
        <AccordionItem value="1">
          <AccordionTrigger>Can I upload PDF notes?</AccordionTrigger>
          <AccordionContent>
            Yes. StudyForge supports PDF lecture notes and study materials.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger>Is StudyForge free?</AccordionTrigger>
          <AccordionContent>
            Yes. A free version will be available with premium features later.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="3">
          <AccordionTrigger>Will my documents be secure?</AccordionTrigger>
          <AccordionContent>
            Your uploaded documents will only be used to generate your study
            materials.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
