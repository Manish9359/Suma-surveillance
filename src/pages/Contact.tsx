import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9011333736", "+91 94870 44355"],
      href: "tel:+919011333736",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@sumasurveillance.com", "sales@sumasurveillance.com"],
      href: "mailto:support@sumasurveillance.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Suma Surveillance Tech", "Pune, Maharashtra, India"],
      href: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      href: "#",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Suma Surveillance Tech | Smart Switch Support</title>
        <meta name="description" content="Get in touch with Suma Surveillance Tech for smart WiFi switches, home automation products, and customer support. We're here to help!" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions about our smart switches or need assistance? We're here to help!
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="bg-card border border-border rounded-xl p-5 hover:shadow-card-hover transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Quick Response on WhatsApp</h3>
                  <p className="text-green-100 mb-4">
                    Get instant support and product inquiries via WhatsApp
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=%2B919487044355&text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Smart%20Switches."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>

                {/* FAQ Link */}
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Find answers to common questions about our products, shipping, and returns.
                  </p>
                  <Button variant="outline" size="sm">
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
