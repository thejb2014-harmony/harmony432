import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";

export default function BlogPost3() {
  const [, setLocation] = useLocation();

  const seoData = {
    title: "432 Hz vs 440 Hz: qué cambia realmente",
    description: "Análisis detallado de las diferencias reales entre 432 Hz y 440 Hz con números, mediciones y experiencia práctica.",
    image: "https://harmony432.es/blog-post-3.jpg",
    url: "https://harmony432.es/blog/432hz-vs-440hz-cents",
    canonical: "https://harmony432.es/blog/432hz-vs-440hz-cents",
    publishedDate: "2024-01-05",
    modifiedDate: "2024-01-05",
    richSnippets: {
      headline: "432 Hz vs 440 Hz: qué cambia realmente",
      description: "Análisis detallado de las diferencias reales entre 432 Hz y 440 Hz con números, mediciones y experiencia práctica.",
      image: "https://harmony432.es/blog-post-3.jpg",
      datePublished: "2024-01-05",
      dateModified: "2024-01-05",
      author: "Harmony432",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "432 Hz vs 440 Hz: qué cambia realmente",
    "description": "Análisis detallado de las diferencias reales entre 432 Hz y 440 Hz con números, mediciones y experiencia práctica.",
    "image": "/blog-post-3-hero.jpg",
    "datePublished": "2024-01-05",
    "dateModified": "2024-01-05",
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
      "@id": "https://harmony432.es/blog/432hz-vs-440hz-cents"
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
          src="/blog-post-3-hero.jpg"
          alt="432 Hz vs 440 Hz"
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
              432 Hz vs 440 Hz: qué cambia realmente
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 5 de Enero, 2024</span>
              <span>⏱️ 12 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              Si alguna vez has pensado "quiero probar 432 Hz" y alguien te respondió con misticismo o con burla, estás en el punto perfecto para hacer esto bien: con números, oído y práctica musical.
            </p>
            <p className="text-lg text-purple-100 leading-relaxed">
              La diferencia entre <strong>A4 = 440 Hz</strong> (estándar moderno) y <strong>A4 = 432 Hz</strong> (referencia alternativa) no es una idea abstracta: es una cantidad medible.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Qué significa "A4 = 440 Hz" (y qué significa "A4 = 432 Hz")</h2>
            
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <p className="text-purple-100 leading-relaxed">
                <strong>A4</strong> es el "La" por encima del Do central (la nota que muchas orquestas usan como referencia).
              </p>
              <p className="text-purple-100 leading-relaxed">
                Cuando decimos <strong>A4 = 440 Hz</strong>, estamos diciendo: "el La de la cuarta octava vibra 440 veces por segundo".
              </p>
              <p className="text-purple-100 leading-relaxed">
                Si lo cambias a <strong>A4 = 432 Hz</strong>, ese mismo La vibra 432 veces por segundo.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">La cifra clave: 432 vs 440 en cents</h2>
            <p className="text-purple-100 leading-relaxed">
              En música, comparar Hz directamente puede confundir, porque el oído percibe la altura de forma logarítmica. Para eso usamos <strong>cents</strong>:
            </p>

            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-purple-100"><strong>1 semitono</strong> = 100 cents</p>
                <p className="text-purple-100"><strong>1 octava</strong> = 1200 cents</p>
              </div>
              
              <div className="bg-purple-600/20 border border-purple-500/30 rounded p-4">
                <p className="text-purple-100 text-center font-mono">
                  cents = 1200 · log₂(f₂ / f₁)
                </p>
              </div>

              <p className="text-purple-100 leading-relaxed">
                Si comparas 432 con 440:
              </p>
              <div className="space-y-2 text-purple-100">
                <p>• 432/440 = 0,981818…</p>
                <p>• log₂(0,981818) = −0.0265</p>
                <p>• 1200 × (−0.0265) = <strong>−31.8 cents</strong></p>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed">
              Esto significa que <strong>432 Hz está 31.8 cents más grave que 440 Hz</strong>. Es casi un tercio de semitono.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿Se nota esa diferencia?</h2>
            <p className="text-purple-100 leading-relaxed">
              Sí, se nota. La mayoría de músicos entrenados detectan diferencias de 5-10 cents. 31.8 cents es bastante perceptible:
            </p>

            <div className="space-y-3">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <p className="font-bold text-purple-100 mb-2">En guitarra:</p>
                <p className="text-purple-200 text-sm">Menos tensión en las cuerdas, tacto más blando, timbre algo más oscuro</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <p className="font-bold text-purple-100 mb-2">En voz:</p>
                <p className="text-purple-200 text-sm">La voz suena un poco más grave, menos "brillante"</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <p className="font-bold text-purple-100 mb-2">En sintetizadores:</p>
                <p className="text-purple-200 text-sm">El cambio es evidente si comparas A/B con el mismo sonido</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿Cuál es mejor?</h2>
            <p className="text-purple-100 leading-relaxed">
              Aquí es donde la ciencia se detiene y comienza la preferencia personal. No hay una respuesta universal. Lo que sí sabemos:
            </p>

            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <div>
                <p className="font-bold text-purple-100 mb-2">440 Hz (Estándar):</p>
                <p className="text-purple-200 text-sm">Es el estándar internacional. Permite tocar con otros músicos sin problemas. Sonido más brillante.</p>
              </div>
              <div className="border-t border-purple-500/20 pt-4">
                <p className="font-bold text-purple-100 mb-2">432 Hz (Alternativa):</p>
                <p className="text-purple-200 text-sm">Muchos músicos reportan preferencia personal. Sonido más grave y cálido. Requiere acuerdo grupal para tocar juntos.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">Prueba la diferencia tú mismo</h3>
              <p className="text-purple-100">
                Usa nuestro afinador con referencia 432 Hz y conversor de audio para experimentar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Afinador 432 Hz
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
  );
}
