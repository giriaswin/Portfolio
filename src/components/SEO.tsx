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
  const siteUrl = 'https://giriaswin.vercel.app'; 
  const url = `${siteUrl}${path}`;

  const defaultKeywords = "Giri Aswin, full-stack developer, data-driven systems, product engineering, data pipelines, API architecture, workflow automation, web application development, system design, backend engineering, frontend engineering, React, TypeScript, Node.js, Python, Flask, SQL, NoSQL, machine learning, data analytics, dashboard systems, REST APIs, cloud deployment, AWS, GCP, scalable systems, performance optimization";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Extremely Rich JSON-LD Structured Data for AEO/GEO integration 
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Giri Aswin",
        "url": siteUrl,
        "jobTitle": ["Full Stack Developer", "Data Systems Engineer", "Software Engineer"],
        "description": "Designs data-driven systems through full-stack engineering, focusing on clarity, performance, and reliable real-world deployment.",
        "knowsAbout": [
            "Full-Stack Development",
            "Data Systems",
            "Product Engineering",
            "Data Pipelines",
            "API Architecture",
            "Workflow Automation",
            "System Design",
            "Backend Engineering",
            "Frontend Engineering",
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "Flask",
            "SQL",
            "NoSQL",
            "Machine Learning",
            "Data Analytics",
            "Dashboard Systems",
            "REST APIs",
            "Cloud Deployment",
            "AWS",
            "GCP",
            "Performance Optimization",
            "Scalability",
            "Reliability",
            "Git",
            "GitHub",
            "CI/CD"
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
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Giri Aswin - Full-Stack Developer & Data Systems Engineer",
        "description": "Portfolio of Giri Aswin, building data-driven systems with full-stack execution.",
        "publisher": {
          "@id": `${siteUrl}/#person`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#person`
        },
        "inLanguage": "en-US"
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Giri Aswin" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#7C5CFF" />

      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Giri Aswin | Full-Stack & Data Systems Engineer" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.webp`} />
      <meta property="og:image:alt" content="Giri Aswin Portfolio Preview" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@giriaswin" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.webp`} />
      <meta name="twitter:image:alt" content="Giri Aswin Portfolio Preview" />
      
      {/* Canonical URL for strict SEO indexing */}
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      {/* Advanced Structured Data for AEO / GEO */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
}
