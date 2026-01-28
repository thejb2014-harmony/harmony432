import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export default function BlogArticle5() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-foreground overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

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
          src="/images/blog-hz-vs-cents.jpg"
          alt="Hz vs Cents en música"
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
              ¿Por qué "8 Hz" no es "8 Hz" en música? Hz vs cents explicado fácil
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 Enero 2026</span>
              <span>⏱️ 6 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              Una frase común es: "de 440 a 432 solo hay 8 Hz, eso no es nada". Suena lógica, pero musicalmente está mal planteada. En música, lo que importa no es la diferencia absoluta en Hz, sino la proporción entre frecuencias. Por eso usamos cents.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">El error: pensar que Hz se comporta igual en todas las octavas</h2>
            <p className="text-purple-100 leading-relaxed">
              Ejemplo claro por octavas. Si mantienes el mismo "cambio de referencia" (432/440), la diferencia en Hz no es constante:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-100"><strong>A3 (≈220 Hz):</strong></span>
                <span className="text-primary">baja ~4 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100"><strong>A4 (440 Hz):</strong></span>
                <span className="text-primary">baja 8 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100"><strong>A5 (880 Hz):</strong></span>
                <span className="text-primary">baja ~16 Hz</span>
              </div>
            </div>
            <p className="text-purple-100 leading-relaxed mt-4">
              <strong>Conclusión:</strong> "8 Hz" solo describe un punto (A4). No describe el fenómeno musical completo.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Lo que sí se mantiene constante: el ratio</h2>
            <p className="text-purple-100 leading-relaxed">
              Cambiar 440 → 432 aplica esta proporción a todo:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <p className="text-purple-100 font-mono text-center text-lg">
                ratio = 432 / 440 = 0,981818…
              </p>
            </div>
            <p className="text-purple-100 leading-relaxed mt-4">
              Ese ratio es lo musicalmente relevante porque la música (y el oído) operan por relaciones multiplicativas.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Qué son los cents y por qué son la unidad correcta</h2>
            <p className="text-purple-100 leading-relaxed">
              Los cents miden distancia musical de forma logarítmica:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>1 semitono</strong> = 100 cents</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>1 octava</strong> = 1200 cents</span>
              </li>
            </ul>
            <p className="text-purple-100 leading-relaxed mt-4">
              La fórmula (por si quieres calcularlo) es:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <p className="text-purple-100 font-mono text-center">
                cents = 1200 × log₂(f₂ / f₁)
              </p>
            </div>
            <p className="text-purple-100 leading-relaxed mt-4">
              Para 432 vs 440:
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <p className="text-purple-100 font-semibold text-center">
                diferencia ≈ −31,8 cents (aprox.)
              </p>
              <p className="text-purple-100 text-center text-sm mt-2">
                Eso es casi un tercio de semitono: suficiente para notarse en muchos contextos.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Por qué el oído "entiende" proporciones</h2>
            <p className="text-purple-100 leading-relaxed">
              La escala temperada se construye con multiplicaciones: cada semitono es un factor fijo (2^(1/12)). Por eso:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>la distancia musical equivalente no tiene una resta fija en Hz,</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>pero sí tiene una distancia constante en cents.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Aplicación práctica: afinación y conversión de audio</h2>
            
            <h3 className="text-xl font-bold text-purple-100">Si afinas instrumentos</h3>
            <p className="text-purple-100 leading-relaxed">
              No pienses "8 Hz". Piensa:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <p className="text-purple-100 italic">
                "voy a bajar ~31,8 cents respecto a 440"
              </p>
            </div>
            <p className="text-purple-100 leading-relaxed mt-4">
              y asegúrate de que todos (instrumentos/pistas/sintes) usan la misma referencia.
            </p>

            <h3 className="text-xl font-bold text-purple-100 mt-6">Si conviertes una canción grabada</h3>
            <p className="text-purple-100 leading-relaxed">
              Un conversor serio debe aplicar el ratio 432/440 y, si quieres calidad, hacerlo con un algoritmo de pitch-shift que preserve el audio (no solo "reproducir más lento/rápido" si el resultado es final).
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Mini test de oído (útil)</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
              <p className="text-purple-100">1. Genera un La continuo en 440.</p>
              <p className="text-purple-100">2. Genera el mismo La en 432.</p>
              <p className="text-purple-100">3. Alterna sin mirar y anota:</p>
              <ul className="space-y-2 text-purple-100 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>¿cuál percibes más grave?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>¿cuál te resulta más cómodo para cantar o tocar encima?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>¿qué cambia en un acorde sostenido?</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">¿Quieres experimentar con cents?</h3>
              <p className="text-purple-100">
                Usa nuestro afinador de precisión para entender exactamente cómo se comportan las diferencias musicales.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Usar Afinador
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
