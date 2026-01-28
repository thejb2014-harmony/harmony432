import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";

export default function BlogPost1() {
  const [, setLocation] = useLocation();

  const seoData = {
    title: "El origen de la afinación 432 Hz y su relación con Pitágoras",
    description: "Descubre cómo el antiguo filósofo griego sentó las bases matemáticas de la música y por qué 432 Hz representa una reinterpretación moderna de un concepto antiguo.",
    image: "https://harmony432.es/blog-post-1-hero.jpg",
    url: "https://harmony432.es/blog/origen-432hz-pitagoras",
    publishedDate: "2024-01-15",
    modifiedDate: "2024-01-15",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "El origen de la afinación 432 Hz y su relación con Pitágoras",
    "description": "Descubre cómo el antiguo filósofo griego sentó las bases matemáticas de la música y por qué 432 Hz representa una reinterpretación moderna de un concepto antiguo.",
    "image": "/blog-post-1-hero.jpg",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
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
      "@id": "https://harmony432.es/blog/origen-432hz-pitagoras"
    }
  };

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        image={seoData.image}
        url={seoData.url}
        publishedDate={seoData.publishedDate}
        modifiedDate={seoData.modifiedDate}
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
          src="/blog-post-1-hero.jpg"
          alt="Pitágoras y 432 Hz"
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
              El origen de la afinación 432 Hz y su relación con Pitágoras
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 15 de Enero, 2024</span>
              <span>⏱️ 8 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              La afinación a 432 Hz ha despertado un gran interés en músicos y oyentes por su supuesta conexión con la naturaleza, la matemática y la armonía universal. Aunque hoy el estándar es 440 Hz, la historia de la música nos lleva mucho más atrás, hasta Pitágoras, para entender por qué la afinación nunca ha sido un tema neutro.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Pitágoras y la base matemática del sonido</h2>
            <p className="text-purple-100 leading-relaxed">
              Pitágoras descubrió que los intervalos musicales más consonantes se basan en proporciones simples. Esta revelación revolucionó la forma en que entendemos la música, demostrando que no es solo arte, sino también ciencia exacta.
            </p>

            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-purple-100">Proporciones Pitagóricas Fundamentales:</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <div>
                    <p className="font-bold text-purple-100">Octava → 2:1</p>
                    <p className="text-purple-200 text-sm">El intervalo más consonante, donde la frecuencia se duplica</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <div>
                    <p className="font-bold text-purple-100">Quinta → 3:2</p>
                    <p className="text-purple-200 text-sm">La base del sistema pitagórico, fundamental en la construcción de escalas</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <div>
                    <p className="font-bold text-purple-100">Cuarta → 4:3</p>
                    <p className="text-purple-200 text-sm">Complemento de la quinta, también altamente consonante</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed">
              Estas relaciones dieron lugar al sistema pitagórico, donde la música no era solo arte, sino también ciencia y reflejo del orden natural. Para Pitágoras, la música era una manifestación de las leyes matemáticas que gobiernan el universo.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿De dónde sale el 432 Hz?</h2>
            <p className="text-purple-100 leading-relaxed">
              El valor de 432 Hz no aparece como cifra directa en la Antigüedad, pero sí encaja con la idea pitagórica de que la música debe respetar proporciones armónicas. Defensores de esta afinación sostienen que:
            </p>

            <div className="space-y-3">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <p className="text-purple-100">Produce una sensación sonora más cálida y estable, cercana a la naturaleza</p>
                </div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <p className="text-purple-100">Se percibe como más cercana al ritmo natural del cuerpo humano y sus ciclos biológicos</p>
                </div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <p className="text-purple-100">Facilita la afinación basada en relaciones simples entre frecuencias, siguiendo el principio pitagórico</p>
                </div>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed">
              En contraste, el estándar de 440 Hz fue adoptado oficialmente en el siglo XX por razones prácticas, no musicales. Fue una decisión de conveniencia para estandarizar la industria musical, no una elección basada en criterios acústicos o naturales.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">432 Hz frente a 440 Hz</h2>
            <p className="text-purple-100 leading-relaxed">
              La diferencia es mínima en cifras, pero perceptible en sensación. Aunque solo son 8 Hz de diferencia, esta variación tiene un impacto significativo en la experiencia auditiva:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-purple-100">440 Hz (Estándar Actual)</h3>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Sonido más brillante y tenso</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Mayor energía en frecuencias agudas</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Percibido como más "artificial"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-purple-100">432 Hz (Afinación Natural)</h3>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Sonido ligeramente más grave y relajado</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Mejor distribución de armónicos</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Percibido como más "natural" y resonante</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed">
              No es una cuestión de "mejor o peor", sino de criterio estético y filosófico. La elección entre 432 Hz y 440 Hz refleja una preferencia personal sobre cómo queremos que la música nos afecte.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">Experimenta con Harmony432</h3>
              <p className="text-purple-100">
                Prueba tú mismo la diferencia entre 432 Hz y 440 Hz con nuestro afinador profesional.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto" onClick={() => setLocation("/tuner")}>
              Probar el Afinador
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
