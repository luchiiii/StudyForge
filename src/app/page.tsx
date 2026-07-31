import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AlternatingSection from "@/components/landing/AlternatingSection";
import FeatureTabs from "@/components/landing/FeatureTabs";
import Testimonials from "@/components/landing/Testimonials";
import FeatureGrid from "@/components/landing/FeatureGrid";
import Faq from "@/components/landing/FAQ";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <AlternatingSection
        eyebrow="Talk therapy for your notes"
        heading="Get your study time back."
        body="StudyForge reads your lecture notes and pulls out what actually matters. No more re-reading 50 pages before you can even start revising."
        reverse={false}
      />
      <AlternatingSection
        eyebrow="Grounded in your material"
        heading="More personalized than a generic study guide."
        body="Every summary, quiz, and flashcard is generated from your own uploaded notes, not from the internet. If it's not in your notes, it's not in your quiz."
        reverse={true}
      />
      <FeatureTabs />
      <Testimonials />
      <FeatureGrid />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
