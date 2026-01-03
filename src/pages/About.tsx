import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Suma Surveillance Tech</title>
        <meta
          name="description"
          content="Learn about Suma Surveillance Tech—an authorized dealer of IOTICS smart switches. Explore our story, dealer credentials, and FAQs."
        />
        <link rel="canonical" href={`${window.location.origin}/about`} />
      </Helmet>

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
          <section className="container mx-auto px-4 py-10 sm:py-14">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Our Story</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We help homeowners and businesses upgrade to modern, convenient, and efficient
                  electrical control—without complexity. Our focus is on clear product guidance,
                  neat installation support, and dependable after-sales service.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold">What We Do</h2>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>• IOTICS smart switches & accessories</li>
                  <li>• Product selection assistance for your home layout</li>
                  <li>• Basic installation guidance & usage support</li>
                  <li>• Warranty and service coordination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dealer certificate */}
          <section className="container mx-auto px-4 pb-10 sm:pb-14">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">Dealer Certificate</h2>
                  <p className="mt-2 text-muted-foreground">
                    We are an authorized dealer of IOTICS smart switches. Share your certificate
                    file and we can display it here.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-muted p-6">
                <div className="text-center">
                  <p className="font-medium">Certificate placeholder</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Upload an image/PDF of the dealer certificate to replace this section.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="container mx-auto px-4 pb-14">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold">FAQs</h2>
              <p className="mt-2 text-muted-foreground">
                Quick answers about IOTICS smart switches, warranty, and support.
              </p>

              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Are the products genuine and warranty covered?</AccordionTrigger>
                    <AccordionContent>
                      Yes. As an authorized dealer, we provide genuine IOTICS products and help you
                      with warranty/service coordination as per the brand’s policy.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do you help with installation?</AccordionTrigger>
                    <AccordionContent>
                      We can guide your electrician on wiring basics and setup. For complex
                      requirements, we’ll suggest the right configuration before purchase.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if I need support after buying?</AccordionTrigger>
                    <AccordionContent>
                      You can contact us for troubleshooting, usage help, and service/warranty
                      assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Which switch should I choose for my home?</AccordionTrigger>
                    <AccordionContent>
                      Tell us your room-wise load (lights/fans) and requirements (WiFi/scene control),
                      and we’ll recommend the best-fit IOTICS model.
                    </AccordionContent>
                  </AccordionItem>
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
