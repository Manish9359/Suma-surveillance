import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  keywords?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "/suma-logo.png",
  keywords,
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl + (typeof window !== "undefined" ? window.location.pathname : "");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Suma Surveillance Tech" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
}

// Organization Schema for use across pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Suma Surveillance Tech",
  "alternateName": "Suma Smart Switches",
  "url": "https://sumasurveillance.com",
  "logo": "https://sumasurveillance.com/suma-logo.png",
  "description": "Authorized dealer of IOTICS Smart Switches in Pune, India. Premium WiFi-enabled smart switches for home automation.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9011333736",
    "contactType": "sales",
    "email": "sumacctvservices@gmail.com",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.instagram.com/sumasurveillancetech/"
  ]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Suma Surveillance Tech",
  "url": "https://sumasurveillance.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sumasurveillance.com/shop?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Suma Surveillance Tech",
  "image": "https://sumasurveillance.com/suma-logo.png",
  "@id": "https://sumasurveillance.com",
  "url": "https://sumasurveillance.com",
  "telephone": "+91-9011333736",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.6001327,
    "longitude": 73.813759
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ]
};

// Helper to generate Product Schema
export function generateProductSchema(product: {
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  id: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || `${product.name} - Premium IOTICS Smart WiFi Switch`,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "IOTICS"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": `https://sumasurveillance.com/product/${product.id}`,
      "priceCurrency": "INR",
      "price": product.price,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      "availability": product.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Suma Surveillance Tech"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews,
      "bestRating": 5,
      "worstRating": 1
    }
  };
}

// BreadcrumbList Schema generator
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://sumasurveillance.com${item.url}`
    }))
  };
}

// FAQ Schema generator
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
