import { SEOHead, generateFAQSchema, generateBreadcrumbSchema } from "@/components/seo/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are the products genuine and warranty covered?",
    answer: "Yes. As an authorized dealer, we provide genuine IOTICS products and help you with warranty/service coordination as per the brand's policy."
  },
  {
    question: "Do you help with installation?",
    answer: "We can guide your electrician on wiring basics and setup. For complex requirements, we'll suggest the right configuration before purchase."
  },
  {
    question: "Do smart switches require internet to work?",
    answer: "They use WiFi for remote access (app/voice control). However, they function perfectly as normal touch switches manually even without an internet connection."
  },
  {
    question: "Can I control them with my phone or voice?",
    answer: "Yes! You can control everything via the IOTICS mobile app (Android/iOS) or use voice commands with Amazon Alexa, Google Assistant, and Siri."
  },
  {
    question: "Will it fit my existing switch box?",
    answer: "Yes, IOTICS switches are designed to retrofit into standard Indian switch boxes without requiring major civil work or additional rewiring."
  },
  {
    question: "How does it help with security?",
    answer: "You can schedule lights to turn on/off at specific times to simulate presence when you're away, adding an extra layer of security to your home."
  },
  {
    question: "What if I need support after buying?",
    answer: "You can contact us for troubleshooting, usage help, and service/warranty assistance."
  },
  {
    question: "Which switch should I choose for my home?",
    answer: "Tell us your room/house layout and requirements (lights/fans/heavy appliances), and we'll recommend the best-fit IOTICS model configuration."
  }
];

export default function About() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <SEOHead
        title="About Suma Surveillance Tech | Authorized IOTICS Dealer Pune"
        description="Suma Surveillance Tech is an authorized IOTICS dealer in Pune, India. We offer genuine smart WiFi switches, expert guidance, installation support & warranty coordination."
        canonicalUrl="/about"
        keywords="about Suma Surveillance Tech, IOTICS dealer Pune, authorized smart switch dealer, home automation Pune"
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <header className="bg-card border-b border-border">
            <div className="container mx-auto px-4 py-10 sm:py-14">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-primary">Authorized IOTICS Dealer</p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
                  About Suma Surveillance Tech
                </h1>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  <strong>Suma Surveillance Tech</strong> is an authorized dealer of{" "}
                  <strong>IOTICS Smart Switches</strong>, providing genuine products, guidance, and
                  support for reliable smart home automation.
                </p>
              </div>
            </div>
          </header>

          {/* Story + Dealer */}
          <section className="container mx-auto px-4 py-10 sm:py-14" aria-labelledby="our-story">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 id="our-story" className="text-xl font-semibold">Our Story</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We help homeowners and businesses upgrade to modern, convenient, and efficient
                  electrical control—without complexity. Our focus is on clear product guidance,
                  neat installation support, and dependable after-sales service.
                </p>
              </article>

              <article className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold">What We Do</h2>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>• IOTICS smart switches & accessories</li>
                  <li>• Product selection assistance for your home layout</li>
                  <li>• Basic installation guidance & usage support</li>
                  <li>• Warranty and service coordination</li>
                </ul>
              </article>
            </div>
          </section>



          {/* FAQs */}
          <section className="container mx-auto px-4 pb-14" aria-labelledby="faq-heading">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h2 id="faq-heading" className="text-xl font-semibold">Frequently Asked Questions</h2>
              <p className="mt-2 text-muted-foreground">
                Quick answers about IOTICS smart switches, warranty, and support.
              </p>

              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
