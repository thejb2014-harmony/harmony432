import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";

export default function BlogPost2() {
  const [, setLocation] = useLocation();

  const seoData = {
    title: "La Quinta del Lobo: el error inevitable del Círculo de Quintas",
    description: "Comprende por qué el Círculo de Quintas tiene un error inevitable y cómo la Quinta del Lobo afecta la afinación.",
    image: "https://harmony432.es/blog-post-2.jpg",
    url: "https://harmony432.es/blog/quinta-lobo-circulo-quintas",
    canonical: "https://harmony432.es/blog/quinta-lobo-circulo-quintas",
    publishedDate: "2024-01-10",
    modifiedDate: "2024-01-10",
    richSnippets: {
      headline: "La Quinta del Lobo: el error inevitable del Círculo de Quintas",
      description: "Comprende por qué el Círculo de Quintas tiene un error inevitable y cómo la Quinta del Lobo afecta la afinación.",
      image: "https://harmony432.es/blog-post-2.jpg",
      datePublished: "2024-01-10",
      dateModified: "2024-01-10",
      author: "Harmony432",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "La Quinta del Lobo: el error inevitable del Círculo de Quintas",
    "description": "Explora cómo un problema matemático fundamental en la afinación pitagórica llevó a uno de los fenómenos más curiosos de la teoría musical.",
    "image": "/blog-post-2-hero.jpg",
    "datePublished": "2024-01-10",
    "dateModified": "2024-01-10",
    "author": {
      "@type": "Organization",
      "name": "Harmony432"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harmony432",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/harmony432-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://harmony432.es/blog/quinta-lobo-circulo-quintas"
    }
  };

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        image={seoData.image}
        url={seoData.url}
        canonical={seoData.canonical}
        publishedDate={seoData.publishedDate}
        modifiedDate={seoData.modifiedDate}
        richSnippets={seoData.richSnippets}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-foreground overflow-hidden">
        {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-purple-500/30">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => setLocation("/blog")} className="flex items-center gap-2 text-purple-200 hover:text-purple-100 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </button>
          <span className="text-lg font-bold text-purple-100">Harmony432 Blog</span>
          <div className="w-32" />
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="/blog-post-2-hero.jpg"
          alt="La Quinta del Lobo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <article className="container py-12 max-w-3xl mx-auto relative z-10">
        <div className="space-y-8">
          {/* Header */}
          <header className="space-y-4 border-b border-purple-500/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-100 leading-tight">
              La Quinta del Lobo: el error inevitable del Círculo de Quintas
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 10 de Enero, 2024</span>
              <span>⏱️ 10 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              Cuando se construye el sistema musical a base de quintas justas, aparece un problema inevitable: doce quintas no encajan exactamente en siete octavas. Este pequeño desfase dio lugar a uno de los fenómenos más curiosos de la teoría musical: la Quinta del Lobo.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">El problema matemático</h2>
            <p className="text-purple-100 leading-relaxed">
              La afinación pitagórica se construye sobre la base de quintas justas (relación 3:2). Sin embargo, existe un problema fundamental que los antiguos músicos descubrieron con el tiempo:
            </p>

            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-purple-100">La Paradoja del Círculo de Quintas</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="font-bold text-purple-100">12 quintas justas ≠ 7 octavas exactas</p>
                    <p className="text-purple-200 text-sm">Si multiplicas 12 veces la relación 3:2, no obtienes el mismo resultado que 7 octavas (2^7)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="font-bold text-purple-100">La diferencia es pequeña, pero acumulativa</p>
                    <p className="text-purple-200 text-sm">Cada quinta introduce un pequeño error que se suma al siguiente</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="font-bold text-purple-100">Al cerrar el círculo aparece un intervalo muy desafinado</p>
                    <p className="text-purple-200 text-sm">Ese intervalo "imposible" es la Quinta del Lobo</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-600/20 border border-purple-500/30 rounded p-4 mt-4">
                <p className="text-sm text-purple-100">
                  <strong>Matemáticamente:</strong> (3/2)^12 = 129.746 mientras que 2^7 = 128. Esta diferencia de ~1.36% es lo que genera la Quinta del Lobo.
                </p>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed">
              Ese intervalo "imposible" es lo que se llamó históricamente la Quinta del Lobo, porque sonaba tan mal que recordaba a un aullido. Los músicos medievales lo describían como un sonido casi insoportable de escuchar.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿Dónde aparece la Quinta del Lobo?</h2>
            <p className="text-purple-100 leading-relaxed">
              La Quinta del Lobo es un problema específico de los instrumentos de afinación fija, donde las notas no pueden ajustarse continuamente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-100 mb-3">Instrumentos Afectados</h3>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Clavicémbalo</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Órgano</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Clave</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Piano (en sistemas antiguos)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-100 mb-3">Impacto en la Música</h3>
                <p className="text-purple-200 text-sm">
                  Había siempre una tonalidad "prohibida" que los músicos evitaban porque contenía ese intervalo defectuoso. Los compositores tenían que ser cuidadosos con sus modulaciones.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Soluciones históricas</h2>
            <p className="text-purple-100 leading-relaxed">
              Para evitar este problema surgieron varios sistemas de afinación a lo largo de la historia:
            </p>

            <div className="space-y-3">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h3 className="font-bold text-purple-100 mb-2">1. Temperamento Mesotónico</h3>
                <p className="text-purple-200 text-sm">
                  Mejora algunas tonalidades (especialmente las más comunes), pero sacrifica otras. Fue muy popular en el Renacimiento.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h3 className="font-bold text-purple-100 mb-2">2. Temperamentos Irregulares</h3>
                <p className="text-purple-200 text-sm">
                  Reparten el error de forma desigual entre las diferentes quintas, optimizando para diferentes grupos de tonalidades.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h3 className="font-bold text-purple-100 mb-2">3. Temperamento Igual (Actual)</h3>
                <p className="text-purple-200 text-sm mb-3">
                  Divide la octava en 12 partes exactas, distribuyendo el error uniformemente.
                </p>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Desaparece la Quinta del Lobo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Permite modular a cualquier tonalidad libremente</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">Experimenta con Harmony432</h3>
              <p className="text-purple-100">
                Comprende mejor los temperamentos y afinaciones con nuestro sintetizador y afinador profesional.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto" onClick={() => setLocation("/synthesizer")}>
              Probar el Sintetizador
            </Button>
          </section>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-purple-500/20">
            <Button variant="outline" className="border-purple-500/30 text-purple-100 hover:bg-purple-500/10" onClick={() => setLocation("/blog")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver todos los artículos
            </Button>
            <Button variant="outline" className="border-purple-500/30 text-purple-100 hover:bg-purple-500/10">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
