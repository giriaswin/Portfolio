import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  path?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({ title, description, keywords, type = 'website', path = '', structuredData }: SEOProps) {
  const siteUrl = 'https://giriaswin.vercel.app'; // Replace with actual domain when deployed
  const url = `${siteUrl}${path}`;

  // Default Person structured data (Enhanced for AEO/GEO)
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Giri Aswin",
    "url": siteUrl,
    "jobTitle": "Full Stack Developer & Data Scientist",
    "description": "Giri Aswin is a Full Stack Developer and Data Scientist specializing in building web applications that handle user activity smoothly and data-driven systems that reduce manual work.",
    "knowsAbout": [
      "Web Development",
      "Data Science",
      "Machine Learning",
      "React",
      "Python",
      "Full Stack Engineering"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "SRM Institute of Science and Technology"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://linkedin.com/in/giriaswin",
      "https://github.com/giriaswin",
      "https://instagram.com/_ashy.04_"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Giri Aswin" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Giri Aswin Portfolio" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@giriaswin" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
}
