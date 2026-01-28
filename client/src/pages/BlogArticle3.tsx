import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export default function BlogArticle3() {
  const [, setLocation] = useLocation();

  const seoData = {
    title: "¿De verdad 432 'relaja'? Qué dice la evidencia y qué dice la experiencia",
    description: "Análisis honesto de la evidencia científica sobre 432 Hz y relajación. Estudios, limitaciones y cómo probarlo tú mismo sin hype.",
    image: "https://harmony432.es/blog-article-3.jpg",
    url: "https://harmony432.es/blog/evidencia-432-relaja",
    canonical: "https://harmony432.es/blog/evidencia-432-relaja",
    publishedDate: "2026-01-22",
    modifiedDate: "2026-01-22",
    richSnippets: {
      headline: "¿De verdad 432 'relaja'? Qué dice la evidencia y qué dice la experiencia",
      description: "Análisis honesto de la evidencia científica sobre 432 Hz y relajación. Estudios, limitaciones y cómo probarlo tú mismo sin hype.",
      image: "https://harmony432.es/blog-article-3.jpg",
      datePublished: "2026-01-22",
      dateModified: "2026-01-22",
      author: "Harmony432",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "¿De verdad 432 'relaja'? Qué dice la evidencia y qué dice la experiencia",
    "description": "Análisis honesto de la evidencia científica sobre 432 Hz y relajación. Estudios, limitaciones y cómo probarlo tú mismo sin hype.",
    "image": "/blog-article-3-hero.jpg",
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
      "@id": "https://harmony432.manus.space/blog/432-relaja-evidencia"
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
          src="/blog-article-3-hero.jpg"
          alt="Evidencia científica de 432 Hz"
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
              ¿De verdad 432 "relaja"? Qué dice la evidencia y qué dice la experiencia
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 22 de Enero, 2026</span>
              <span>⏱️ 12 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              La afinación A=432 Hz suele venir acompañada de una idea muy popular: "relaja más que 440 Hz". La realidad es más interesante (y más útil) que el debate de "sí/no": hay estudios, pero son pocos, a menudo pequeños, y los efectos —cuando aparecen— suelen ser modestos y dependientes del contexto.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Antes de nada: 432 vs 440 no es "otra música"</h2>
            <p className="text-purple-100 leading-relaxed">
              Pasar de A=440 a A=432 baja la altura global aproximadamente <strong>−31,8 cents</strong> (casi un tercio de semitono). Esto es suficiente para notarse como "un poco más grave", pero no es un cambio enorme.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-100">Qué dice la evidencia (lo más relevante)</h2>
            
            <div className="space-y-4">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-100 mb-3">Estudio piloto: doble ciego en personas sanas</h3>
                <p className="text-purple-100 leading-relaxed">
                  Un estudio piloto comparó música afinada a 432 vs 440 y reportó que 432 se asoció con una reducción mayor de la frecuencia cardiaca que 440.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-100 mb-3">Ensayo clínico: ansiedad dental</h3>
                <p className="text-purple-100 leading-relaxed">
                  En un ensayo aleatorizado, tanto 432 como 440 redujeron la ansiedad comparados con no escuchar música. El grupo 432 mostró niveles de cortisol salival más bajos que 440.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-100 mb-3">Personal sanitario durante COVID-19</h3>
                <p className="text-purple-100 leading-relaxed">
                  En enfermeras de urgencias, un estudio piloto concluye que escuchar música a 432 Hz puede ayudar a manejar ansiedad/estrés, pero subraya la necesidad de más estudios.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Lo que NO puede afirmarse con honestidad</h2>
            <p className="text-purple-100 leading-relaxed">Con lo que hay publicado, no es serio decir que:</p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-2">
              <div className="flex gap-3">
                <span className="text-primary">✗</span>
                <span className="text-purple-100">"432 relaja a todo el mundo"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">✗</span>
                <span className="text-purple-100">"440 es dañino"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">✗</span>
                <span className="text-purple-100">"432 cura/terapia"</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Por qué puede "sentirse" más relajante</h2>
            <p className="text-purple-100 leading-relaxed">Hay explicaciones plausibles sin necesidad de mitología:</p>
            <div className="space-y-3">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <p className="font-bold text-purple-100 mb-2">Más grave = diferente color emocional</p>
                <p className="text-purple-100 text-sm">Una bajada de ~32 cents puede percibirse como más "cálida/oscura".</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <p className="font-bold text-purple-100 mb-2">Expectativa / efecto placebo</p>
                <p className="text-purple-100 text-sm">Si alguien espera relajarse con 432, su atención y respiración suelen acompañar.</p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <p className="font-bold text-purple-100 mb-2">La música manda más que la afinación</p>
                <p className="text-purple-100 text-sm">Tempo, arreglo, dinámica, volumen… suelen tener mayor impacto que mover la referencia unos cents.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Cómo probarlo tú (mini test "ciego")</h2>
            <p className="text-purple-100 leading-relaxed">Si quieres salir de opiniones y quedarte con lo que te sirve:</p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <ol className="space-y-3 text-purple-100">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">1.</span>
                  <span>Elige 2 fragmentos (30–45 s): uno acústico/voz y otro con pads o ambiente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">2.</span>
                  <span>Ten dos versiones: una en 440 y otra en 432 (la misma música).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">3.</span>
                  <span>Iguala volumen.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">4.</span>
                  <span>Pídele a alguien que ponga A/B al azar (sin decirte cuál es cuál).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">5.</span>
                  <span>Anota: cuál prefieres, si te cambia la respiración, si notas el cambio de altura.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">Experimenta con Harmony432</h3>
              <p className="text-purple-100">
                Prueba tú mismo con nuestro afinador, conversor y sintetizador para comparar 432 Hz vs 440 Hz.
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
  );
}
