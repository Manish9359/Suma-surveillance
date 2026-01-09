import { SEOHead, generateBreadcrumbSchema, generateFAQSchema } from "@/components/seo/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ListChecks, Smartphone, Wifi, Mic, Lock, Settings, Lightbulb, UserCog } from "lucide-react";

export default function Help() {
    const faqs = [
        {
            question: "What is home automation?",
            answer: "Your home is automated when the devices at your home are connected to the internet and you can control these devices from anywhere in the world."
        },
        {
            question: "Why do I need Smart Touch Switches?",
            answer: "Smart touch switches are switches that operate through capacitive touch technology and Wi-Fi chips. They allow you to control your devices such as lights, fans, ACs and geysers over the internet from anywhere in the world."
        },
        {
            question: "How do I choose the right switch for my room?",
            answer: "To choose the right switch, consider: How many lights and fans do you need to control? How many ACs or Geysers? How many switch panels are present and their size? We can help you select the best configuration based on your layout."
        },
        {
            question: "What happens if there is a power cut?",
            answer: "The switch will stop functioning if there is a power cut. Once the power is back on, the switch will return to its original function (last state or default off, depending on settings)."
        },
        {
            question: "What is the difference between touch switches and normal switches?",
            answer: "Touch switches are electronic devices working with capacitive touch technology. A light touch of a human finger triggers the on or off state, unlike mechanical rockers in normal switches."
        },
        {
            question: "What is the life expectancy of a smart switch?",
            answer: "Relays used in smart switches have been tested for more than 100,000 (one lakh) on/off cycles, so the life expectancy is very high."
        },
        {
            question: "Can we touch the switch with wet hands?",
            answer: "Yes, you can safely touch the glass panel with wet hands."
        },
        {
            question: "Can I connect dimmer lights to the fan switch?",
            answer: "No, you cannot use the fan switch as a dimmer. However, you can dim incandescent bulbs with specific dimmer-capable switches."
        },
        {
            question: "Are the switches made in India or China?",
            answer: "These switches are designed, developed, and manufactured in Tamil Nadu, India. The complete know-how and intellectual property, from electronics to cloud technology, has been created by in-house engineers."
        }
    ];

    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Help Center", url: "/help" },
    ]);

    return (
        <>
            <SEOHead
                title="Help Center | IOTICS Support - Suma Surveillance Tech"
                description="Get help with IOTICS smart switches. Mobile app setup, remote configuration, voice control guides, and FAQs."
                canonicalUrl="/help"
                keywords="smart switch help, IOTICS configuration, smart home support, wifi switch troubleshooting"
                structuredData={[faqSchema, breadcrumbSchema]}
            />

            <div className="min-h-screen flex flex-col bg-background">
                <Header />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="bg-muted/50 py-12 border-b border-border">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                All the help you need with our smart touch switches for home automation.
                                Find guides for installation, configuration, and troubleshooting.
                            </p>
                        </div>
                    </section>

                    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-12">

                        {/* Contact Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <UserCog className="h-5 w-5 text-primary" />
                                        Support Contact
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold mb-1">Email Us</h3>
                                        <p className="text-muted-foreground">support@sumasurveillance.com</p>
                                        <p className="text-sm text-muted-foreground mt-1">(Official Brand Support: support@iotics.io)</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Call Us</h3>
                                        <p className="text-muted-foreground">+91 9011333736</p>
                                        <p className="text-sm text-muted-foreground mt-1">(Brand Support: +91 94870 44355)</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <ListChecks className="h-5 w-5 text-primary" />
                                        Quick Key Features
                                    </CardTitle>
                                    <CardDescription>Button combinations for configuration</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                        <li>Touch & hold 1st button (20s) - Reset/Config mode</li>
                                        <li>Touch & hold 2nd button (10s) - Secondary Config</li>
                                        <li>Remote: Press & hold 1st button (30s) - Pair Remote</li>
                                        <li>Remote: Long press Master ON (2s) - Master Control</li>
                                        <li>Touch & hold 3rd button (5s) + Remote button - Custom Pair</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Mobile App Configuration */}
                        <section id="mobile-app" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Smartphone className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold">Mobile App Configuration</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        step: "01",
                                        title: "Install App",
                                        desc: "Install the 'iotics' app from Play Store or App Store and open it.",
                                        image: "https://www.iotics.io/cdn/shop/files/Group_594_medium.png?v=1726139900"
                                    },
                                    {
                                        step: "02",
                                        title: "Register",
                                        desc: "To register, enter your email ID, choose a secure password, and click the Register button.",
                                        image: "https://www.iotics.io/cdn/shop/files/Group_590_medium.png?v=1726139838"
                                    },
                                    {
                                        step: "03",
                                        title: "Add Device",
                                        desc: "Click the burger menu (top right), select 'Add Device', and follow the in-app instructions.",
                                        image: "https://www.iotics.io/cdn/shop/files/Menu_Bar_medium.png?v=1726139837"
                                    }
                                ].map((item) => (
                                    <Card key={item.step} className="relative overflow-hidden flex flex-col h-full">
                                        <div className="absolute top-2 right-2 p-2 opacity-10 font-bold text-6xl">
                                            {item.step}
                                        </div>
                                        <CardHeader>
                                            <CardTitle>Step {item.step}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col items-center text-center gap-4">
                                            <div className="relative w-full h-32 flex items-center justify-center bg-muted/50 rounded-lg overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={`Step ${item.step} illustration`}
                                                    className="object-contain max-h-full max-w-full"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Remote & Voice Configuration */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <section id="remote-config">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Wifi className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Remote Configuration</h2>
                                </div>
                                <Card className="h-full">
                                    <CardContent className="pt-6 space-y-4">
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src="https://cdn.shopify.com/s/files/1/0890/5582/2142/files/17_Key_Remote.png?v=1727181252"
                                                alt="IOTICS Remote Control"
                                                className="h-48 object-contain"
                                            />
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed text-center">
                                            The IR remote allows control up to 25 feet. It is pre-programmed, but can be re-paired easily.
                                        </p>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold flex items-center gap-2 mb-2">
                                                <Settings className="h-4 w-4" />
                                                How to Pair
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Long press (5 seconds) the button on the switch panel until it blinks/beeps, then press the desired button on the remote.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            <section id="voice-control">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Mic className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Voice Control</h2>
                                </div>
                                <Card className="h-full">
                                    <CardContent className="pt-6 space-y-4">
                                        <div className="flex justify-center gap-6 mb-4 items-center h-48 bg-muted/30 rounded-lg">
                                            <img
                                                src="https://www.iotics.io/cdn/shop/files/Group_537_2_800x.png?v=1727241527"
                                                alt="Works with Alexa"
                                                className="h-16 object-contain"
                                            />
                                            <img
                                                src="https://www.iotics.io/cdn/shop/files/Group_537_1_800x.png?v=1727241527"
                                                alt="Works with Google Assistant"
                                                className="h-16 object-contain"
                                            />
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed text-center">
                                            Control devices using Google Assistant or Amazon Alexa. Just enable the "IOTICS" skill in your assistant app.
                                        </p>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Example Commands:</h4>
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                                <li>"Ok Google, turn on Bedroom light"</li>
                                                <li>"Alexa, set Living Room Fan to 3"</li>
                                                <li>"Ok Google, turn off All Switches"</li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>
                        </div>

                        {/* General FAQs */}
                        <section id="faq">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Lightbulb className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold">General FAQ</h2>
                            </div>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left font-medium">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
