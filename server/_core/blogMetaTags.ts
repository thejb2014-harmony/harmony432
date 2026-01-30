// Blog articles metadata for OG tags
export const blogArticles = {
  'origen-432hz-pitagoras': {
    title: 'Origen de 432 Hz: Pitágoras, matemática y resonancia natural',
    description: 'Historia completa de 432 Hz desde Pitágoras hasta hoy. Matemática, ciencia y por qué es diferente a 440 Hz.',
    image: '/blog-post-1-hero.jpg'
  },
  'quinta-lobo-circulo-quintas': {
    title: 'La Quinta del Lobo: el error de la afinación temperada que nadie quería',
    description: 'Qué es la quinta del lobo, por qué existe en la afinación temperada y cómo 432 Hz lo resuelve.',
    image: '/blog-post-2-hero.jpg'
  },
  '432hz-vs-440hz-cents': {
    title: '432 Hz vs 440 Hz: diferencia en cents, percepción y ciencia',
    description: 'Comparativa exacta entre 432 Hz y 440 Hz. Diferencia en cents, cómo se percibe y por qué importa.',
    image: '/blog-post-3-hero.jpg'
  },
  'prueba-ciega-432-vs-440': {
    title: 'Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)',
    description: 'Prueba ciega A/B comparando 432 Hz vs 440 Hz. Resultados reales, metodología justa y conclusiones honestas.',
    image: '/blog-article-1-hero.jpg'
  },
  'afinaciones-alternativas-432': {
    title: 'Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz',
    description: 'Combina afinaciones alternativas con 432 Hz sin liarte. Tabla de referencia, soluciones prácticas.',
    image: '/blog-article-2-hero.jpg'
  },
  'evidencia-432-relaja': {
    title: '¿432 Hz relaja? Evidencia científica, estudios y qué dice la investigación',
    description: 'Análisis de estudios científicos sobre 432 Hz y relajación. Qué dice la investigación real.',
    image: '/blog-article-3-hero.jpg'
  },
  'historia-estandares-afinacion': {
    title: 'Historia real de los estándares de afinación: 440 Hz no fue siempre el estándar',
    description: 'Cómo 440 Hz se convirtió en estándar internacional. Política, industria y decisiones que cambiaron la música.',
    image: '/blog-article-4-hero.jpg'
  },
  'hz-vs-cents-explicado': {
    title: 'Hz vs Cents explicado fácil: diferencia musical y cómo medirla',
    description: 'Diferencia entre Hz y cents. Cómo medir cambios de afinación y entender la precisión musical.',
    image: '/blog-article-5-hero.jpg'
  },
  'verdi-a-432-historia': {
    title: 'Verdi A=432: qué es y qué NO es (desmitificación histórica)',
    description: 'La historia real de Verdi A=432. Contexto operístico italiano y por qué es importante.',
    image: '/blog-article-6-hero.jpg'
  }
};

export function generateBlogHTML(slug: string, baseURL: string): string | null {
  const article = blogArticles[slug as keyof typeof blogArticles];
  if (!article) return null;

  const url = `${baseURL}/blog/${slug}`;
  const imageUrl = `${baseURL}${article.image}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>${article.title} | Harmony432 Blog</title>
    <meta name="description" content="${article.description}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${article.title}" />
    <meta property="og:description" content="${article.description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:site_name" content="Harmony432" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${article.title}" />
    <meta property="twitter:description" content="${article.description}" />
    <meta property="twitter:image" content="${imageUrl}" />
    
    <!-- Canonical -->
    <link rel="canonical" href="${url}" />
    
    <!-- Redirect to actual app -->
    <meta http-equiv="refresh" content="0; url=${url}" />
    
    <script>
      window.location.href = '${url}';
    </script>
  </head>
  <body>
    <p>Redirecting to article...</p>
  </body>
</html>`;
}
