import { ExternalLink, Instagram, Calendar, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead, generateBreadcrumbSchema } from "@/components/seo/SEOHead";

const blogPosts = [
  {
    id: 1,
    title: "Smart Home Automation: A Complete Guide",
    excerpt: "Learn how IOTICS smart switches can transform your home into a connected living space with voice control and app integration.",
    date: "2024-12-15",
    category: "Guides",
    image: "/suma-logo.png",
  },
  {
    id: 2,
    title: "Why Choose Wi-Fi Touch Switches?",
    excerpt: "Discover the benefits of upgrading to Wi-Fi enabled touch switches for your home. Control lights, fans, and appliances from anywhere.",
    date: "2024-12-10",
    category: "Tips",
    image: "/suma-logo.png",
  },
  {
    id: 3,
    title: "Installation Tips for Smart Switches",
    excerpt: "Professional tips for installing IOTICS smart switches. Safety guidelines and best practices for DIY installation.",
    date: "2024-12-05",
    category: "Installation",
    image: "/suma-logo.png",
  },
  {
    id: 4,
    title: "Voice Control with Alexa & Google Home",
    excerpt: "Step-by-step guide to connect your IOTICS smart switches with Alexa and Google Home for hands-free control.",
    date: "2024-11-28",
    category: "Tutorials",
    image: "/suma-logo.png",
  },
];

export default function Blog() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Suma Surveillance Tech Blog",
    "description": "Tips, guides, and news about smart home automation and IOTICS smart switches",
    "url": "https://sumasurveillance.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Suma Surveillance Tech"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "image": "/suma-logo.png",
      "author": {
        "@type": "Organization",
        "name": "Suma Surveillance Tech"
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Blog & Smart Home Tips | Suma Surveillance Tech"
        description="Stay updated with smart home automation tips, IOTICS switch installation guides, and the latest news. Learn about WiFi switches, voice control & more."
        canonicalUrl="/blog"
        keywords="smart home blog, IOTICS tips, smart switch guide, home automation tutorial, WiFi switch installation"
        structuredData={[blogSchema, breadcrumbSchema]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <header className="bg-muted py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Blog & Updates</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest tips, guides, and news about smart home automation
              </p>
            </div>
          </header>

          {/* Instagram Section */}
          <section className="py-12 border-b" aria-labelledby="instagram-heading">
            <div className="container mx-auto px-4">
              <Card className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border-none">
                <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
                      <Instagram className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 id="instagram-heading" className="text-xl font-bold text-foreground">Follow Us on Instagram</h2>
                      <p className="text-muted-foreground">@sumasurveillancetech</p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href="https://www.instagram.com/sumasurveillancetech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Suma Surveillance Tech on Instagram"
                    >
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                      Follow on Instagram
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-12" aria-labelledby="articles-heading">
            <div className="container mx-auto px-4">
              <h2 id="articles-heading" className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.id} className="group" itemScope itemType="https://schema.org/BlogPosting">
                    <Card className="hover:shadow-lg transition-shadow overflow-hidden h-full">
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="sm:w-1/3 bg-muted flex items-center justify-center p-6">
                          <img
                            src={post.image}
                            alt={`${post.title} article thumbnail`}
                            className="w-24 h-24 object-contain opacity-50 group-hover:opacity-70 transition-opacity"
                            loading="lazy"
                            itemProp="image"
                          />
                        </div>
                        <div className="sm:w-2/3">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{post.category}</Badge>
                              <time 
                                className="text-xs text-muted-foreground flex items-center gap-1"
                                dateTime={post.date}
                                itemProp="datePublished"
                              >
                                <Calendar className="h-3 w-3" aria-hidden="true" />
                                {new Date(post.date).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </time>
                            </div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors" itemProp="headline">
                              {post.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="line-clamp-2 mb-3" itemProp="description">{post.excerpt}</CardDescription>
                            <Button variant="link" className="p-0 h-auto text-primary gap-1">
                              Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Button>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-muted" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4 text-center">
              <h2 id="cta-heading" className="text-2xl font-bold text-foreground mb-4">Want More Updates?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Follow us on Instagram for daily updates, installation videos, customer stories, and exclusive offers!
              </p>
              <Button asChild size="lg" variant="default" className="gap-2">
                <a
                  href="https://www.instagram.com/sumasurveillancetech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow @sumasurveillancetech on Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                  @sumasurveillancetech
                </a>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
