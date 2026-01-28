import React from "react";

/**
 * SEOHead Component
 * Agrega meta tags Open Graph, Twitter Card, Canonical URLs y Rich Snippets Schema
 * para optimizar SEO y compartir correctamente en redes sociales
 */

interface SEOHeadProps {
  title: string;
  description: string;
  image: string;
  url: string;
  canonical?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  richSnippets?: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: string;
  };
}

export function SEOHead({
  title,
  description,
  image,
  url,
  canonical,
  author = "Harmony432",
  publishedDate,
  modifiedDate,
  richSnippets,
}: SEOHeadProps) {
  // Usar useEffect para actualizar el document head
  React.useEffect(() => {
    // Actualizar título
    document.title = `${title} | Harmony432`;

    // Agregar canonical link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Función helper para crear o actualizar meta tags
    const setMeta = (name: string, content: string, property?: boolean) => {
      let element = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Meta tags estándar
    setMeta("description", description);
    setMeta("author", author);

    // Open Graph (Facebook, LinkedIn, etc.)
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", image, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "article", true);
    setMeta("og:site_name", "Harmony432", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // Article meta tags
    if (publishedDate) {
      setMeta("article:published_time", publishedDate, true);
    }
    if (modifiedDate) {
      setMeta("article:modified_time", modifiedDate, true);
    }
    setMeta("article:author", author, true);

    // Rich Snippets Schema (Article)
    if (richSnippets) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: richSnippets.headline,
        description: richSnippets.description,
        image: richSnippets.image,
        datePublished: richSnippets.datePublished,
        dateModified: richSnippets.dateModified,
        author: {
          "@type": "Organization",
          name: richSnippets.author,
        },
        publisher: {
          "@type": "Organization",
          name: "Harmony432",
          logo: {
            "@type": "ImageObject",
            url: "https://harmony432.es/images/harmony432-logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      };

      let schemaScript = document.querySelector(
        'script[type="application/ld+json"][data-seo-schema]'
      );
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.setAttribute("data-seo-schema", "true");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup: retornar función que restaure los meta tags originales
    return () => {
      // Opcional: restaurar meta tags originales si es necesario
    };
  }, [title, description, image, url, canonical, author, publishedDate, modifiedDate, richSnippets]);

  return null; // Este componente solo maneja meta tags, no renderiza nada
}

export default SEOHead;
