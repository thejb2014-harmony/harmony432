import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function BlogArticle() {
  const [, setLocation] = useLocation();

  // SEO Meta Tags
  const seoData = {
    title: "Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)",
    description: "Prueba ciega A/B comparando 432 Hz vs 440 Hz. Resultados reales, metodología justa y conclusiones honestas sobre la percepción de afinación.",
    image: "https://harmony432.es/blog-article-1-hero.jpg",
    url: "https://harmony432.es/blog/prueba-ciega-432-vs-440",
    canonical: "https://harmony432.es/blog/prueba-ciega-432-vs-440",
    publishedDate: "2026-01-22",
    modifiedDate: "2026-01-22",
    richSnippets: {
      headline: "Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)",
      description: "Prueba ciega A/B comparando 432 Hz vs 440 Hz. Resultados reales, metodología justa y conclusiones honestas sobre la percepción de afinación.",
      image: "https://harmony432.es/blog-article-1-hero.jpg",
      datePublished: "2026-01-22",
      dateModified: "2026-01-22",
      author: "Harmony432",
    },
  };

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)",
    "description": "Prueba ciega A/B comparando 432 Hz vs 440 Hz. Resultados reales, metodología justa y conclusiones honestas sobre la percepción de afinación.",
    "image": "/blog-article-1-hero.jpg",
    "datePublished": "2026-01-22",
    "dateModified": "2026-01-22",
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
      "@id": "https://harmony432.manus.space/blog/prueba-ciega-432-vs-440"
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
          src="/blog-article-1-hero.jpg"
          alt="Prueba ciega 432 vs 440 Hz"
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
              Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 22 de Enero, 2026</span>
              <span>⏱️ 8 min lectura</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
            <img
              src="/blog-article-1.jpg"
              alt="Prueba ciega 432 vs 440"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              Hay un debate eterno entre músicos: "432 suena mejor", "no cambia nada", "es puro placebo"… En vez de discutirlo, hicimos algo más útil: una prueba ciega (A/B) con el mínimo de rigor y la máxima honestidad.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Qué probamos (diseño simple pero justo)</h2>
            <p className="text-purple-100 leading-relaxed">
              <strong>Objetivo:</strong> Comparar la percepción entre música afinada a A=440 y la misma música en A=432 sin que la gente supiera cuál era cuál.
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-bold text-purple-100 mb-3">Qué usamos:</h3>
                <ul className="space-y-2 text-purple-100 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>3 fragmentos de 25–35 segundos:</strong> guitarra sola, voz + guitarra, pad/sinte sostenido</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Dos versiones por fragmento:</strong> A (440 Hz) y B (432 Hz, ~−31,8 cents)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span><strong>Regla clave:</strong> Nadie veía etiquetas; solo elegían cuál les gustaba más</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Cómo lo hicimos (para que no hubiera "truco")</h2>
            <p className="text-purple-100 leading-relaxed">
              Para que la comparación fuera justa, intentamos que todo lo demás fuera igual:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
              <ul className="space-y-2 text-purple-100">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Mismo volumen aproximado</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Mismo fragmento musical</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Misma reproducción (mismo altavoz o auriculares)</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-purple-500/20">
                <p className="font-bold text-purple-100 mb-2">Dos rondas por fragmento:</p>
                <ul className="space-y-2 text-purple-100 ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>"Elige cuál te gusta más"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>"¿Notas cuál está más grave?"</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-100">Resultados (lo que pasó de verdad)</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-100">1) Mucha gente sí notó que una versión estaba más grave</h3>
              <p className="text-purple-100 leading-relaxed">
                En los fragmentos de voz y guitarra, bastantes personas dijeron: "Esta suena un poco más baja", "Esta se siente más suave", "Esta parece más oscura".
              </p>
              <p className="text-sm text-purple-100 italic border-l-4 border-primary pl-4">
                <strong>Aprendizaje:</strong> El oído detecta mejor la diferencia cuando hay armónicos acústicos (voz/cuerdas) que con timbres sintéticos.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-100">2) La preferencia no fue "432 arrasa"</h3>
              <p className="text-purple-100 leading-relaxed">
                Lo más interesante: <strong>no hubo una victoria aplastante de 432.</strong> En temas lentos, muchas prefirieron la versión más baja. En fragmentos brillantes, varios prefirieron 440.
              </p>
              <p className="text-sm text-purple-100 italic border-l-4 border-primary pl-4">
                <strong>Aprendizaje:</strong> La preferencia depende más del estilo y emoción que de una "superioridad universal".
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-100">3) La frase más repetida fue: "me gusta porque se siente…"</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                  <p className="font-bold text-purple-100 mb-3">Cuando alguien eligió 432:</p>
                  <ul className="space-y-2 text-purple-100 ml-4">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>"Más cálida"</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>"Más redonda"</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>"Menos agresiva"</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                  <p className="font-bold text-purple-100 mb-3">Cuando alguien eligió 440:</p>
                  <ul className="space-y-2 text-purple-100 ml-4">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>"Más viva"</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>"Más clara"</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>"Con más presencia"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Lo que NO aprendimos (y está bien decirlo)</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <p className="text-purple-100">Esto <strong>NO</strong> demuestra que:</p>
              <ul className="space-y-2 text-purple-100 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary">✗</span>
                  <span>432 "cura" nada</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✗</span>
                  <span>440 sea "malo"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✗</span>
                  <span>Haya una afinación "correcta universal"</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-purple-500/20">
                <p className="text-purple-100 font-bold">Lo que sí demuestra:</p>
                <p className="text-lg text-primary mt-2">
                  👉 Hay un cambio audible y puede influir en la percepción, pero no siempre y no igual para todos.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">¿Quieres experimentar por ti mismo?</h3>
              <p className="text-purple-100">
                Usa nuestro afinador y conversor para comparar 432 Hz vs 440 Hz en tu música favorita.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Afinador de Precisión
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" className="bg-primary/20 hover:bg-primary/30 text-primary-foreground border border-primary/50" onClick={() => setLocation("/converter")}>
                Convertir Audio
              </Button>
            </div>
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
