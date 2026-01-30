import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export default function BlogArticle2() {
  const [, setLocation] = useLocation();

  const seoData = {
    title: "Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz",
    description: "Combina afinaciones alternativas con 432 Hz sin liarte. Tabla de referencia, soluciones prácticas y recomendaciones por estilo.",
    image: "https://harmony432.es/blog-article-2.jpg",
    url: "https://harmony432.es/blog/afinaciones-alternativas-432",
    canonical: "https://harmony432.es/blog/afinaciones-alternativas-432",
    publishedDate: "2026-01-22",
    modifiedDate: "2026-01-22",
    richSnippets: {
      headline: "Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz",
      description: "Combina afinaciones alternativas con 432 Hz sin liarte. Tabla de referencia, soluciones prácticas y recomendaciones por estilo.",
      image: "https://harmony432.es/blog-article-2.jpg",
      datePublished: "2026-01-22",
      dateModified: "2026-01-22",
      author: "Harmony432",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz",
    "description": "Cómo combinar afinaciones alternativas con 432 Hz sin complicaciones. Tabla de referencia, soluciones prácticas y recomendaciones por estilo.",
    "image": "/blog-article-2-hero.jpg",
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
      "@id": "https://harmony432.manus.space/blog/afinaciones-alternativas-432"
    }
  };

  return (
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
          src="/blog-article-2-hero.jpg"
          alt="Guía de afinaciones alternativas en guitarra"
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
              Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 22 de Enero, 2026</span>
              <span>⏱️ 10 min lectura</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
            <img
              src="/blog-article-2.jpg"
              alt="Guía de afinaciones alternativas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              Si te gusta experimentar con la guitarra, seguramente ya has probado alguna afinación alternativa: Drop D, Open G, DADGAD, Open D, etc. Ahora bien: cuando además quieres usar A = 432 Hz, aparece la pregunta clave: ¿Cómo combino afinaciones alternativas con 432 sin liarme y sin sonar "raro" con otros músicos?
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Lo básico: 432 Hz no es una afinación "de cuerdas", es una referencia</h2>
            <p className="text-purple-100 leading-relaxed">
              A = 432 Hz significa que tu nota La (A4) está calibrada a 432 en vez de 440. Eso baja todo aproximadamente <strong>−31,8 cents</strong>, o sea, casi 1/3 de semitono.
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <p className="font-bold text-purple-100 mb-2">✅ Importante:</p>
              <p className="text-purple-100">
                Puedes usar 432 con cualquier afinación (standard, drop, open…). Lo único que cambia es la referencia global.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Orden correcto: primero decide el "mapa" de cuerdas, luego la referencia</h2>
            <p className="text-purple-100 leading-relaxed">Siempre sigue este orden:</p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">1.</span>
                <p className="text-purple-100">Elige tu afinación de cuerdas (Drop D, DADGAD, Open G…)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">2.</span>
                <p className="text-purple-100">Ajusta tu afinador a A = 432 Hz</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">3.</span>
                <p className="text-purple-100">Afina las cuerdas a sus notas objetivo usando esa referencia</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Tabla rápida: afinaciones populares</h2>
            <div className="space-y-3">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h3 className="font-bold text-purple-100 mb-2">Standard (E A D G B E)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-purple-100">
                  <div>6ª: E2</div>
                  <div>5ª: A2</div>
                  <div>4ª: D3</div>
                  <div>3ª: G3</div>
                  <div>2ª: B3</div>
                  <div>1ª: E4</div>
                </div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h3 className="font-bold text-purple-100 mb-2">Drop D (D A D G B E)</h3>
                <p className="text-sm text-purple-100">6ª baja un tono: <strong>D2</strong> | Las demás igual que Standard</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h3 className="font-bold text-purple-100 mb-2">DADGAD (D A D G A D)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-purple-100">
                  <div>6ª: D2</div>
                  <div>5ª: A2</div>
                  <div>4ª: D3</div>
                  <div>3ª: G3</div>
                  <div>2ª: A3</div>
                  <div>1ª: D4</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿Qué pasa cuando bajas a 432?</h2>
            <p className="text-purple-100 leading-relaxed">
              Bajar de 440 a 432 equivale a afinar todo un poco más grave. En guitarra se nota en:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-2">
              <div className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-purple-100">Menos tensión en las cuerdas</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-purple-100">Tacto algo más blando</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-purple-100">Timbre algo más oscuro (a veces)</span>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">El problema real: 432 + tocar con otros</h2>
            <p className="text-purple-100 leading-relaxed italic border-l-4 border-primary pl-4">
              Si tú estás en 432 y el resto en 440, estarás fuera (≈ −31,8 cents).
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
              <p className="font-bold text-purple-100 mb-3">Soluciones reales (elige una):</p>
              <div className="flex gap-3">
                <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                <p className="text-purple-100"><strong>Todo el grupo adopta 432</strong> (ideal)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">•</span>
                <p className="text-purple-100"><strong>Tú vuelves a 440</strong> para ensayos/conciertos</p>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <p className="text-purple-100"><strong>Usas un proyecto paralelo</strong> donde manda 432</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">¿Necesitas afinar con precisión?</h3>
              <p className="text-purple-100">
                Usa nuestro afinador profesional con soporte para afinaciones alternativas y referencia 432 Hz.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Afinador de Precisión
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" className="bg-primary/20 hover:bg-primary/30 text-primary-foreground border border-primary/50" onClick={() => setLocation("/synthesizer")}>
                Sintetizador
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
  );
}
