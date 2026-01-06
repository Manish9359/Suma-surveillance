import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Features } from "@/components/home/Features";
import { PromoBanner } from "@/components/home/PromoBanner";
import {
  SEOHead,
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/components/seo/SEOHead";

const Index = () => {
  const structuredData = [organizationSchema, websiteSchema, localBusinessSchema];

  return (
    <>
      <SEOHead
        title="Suma Surveillance Tech | IOTICS Smart WiFi Switches in Pune"
        description="Authorized IOTICS dealer in Pune. Shop premium smart WiFi touch switches, fan regulators & home automation. Voice control with Alexa & Google. Free shipping above ₹500."
        canonicalUrl="/"
        keywords="smart switches, WiFi switches, IOTICS, home automation, touch switches, smart home, Pune, fan regulator, dimmer, smart plug"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroBanner />
          <Features />
          <CategoryGrid />
          <PromoBanner />
          <FeaturedProducts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
