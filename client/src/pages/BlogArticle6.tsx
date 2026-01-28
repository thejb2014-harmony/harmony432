import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export default function BlogArticle6() {
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
          src="/images/blog-verdi-a432.jpg"
          alt="Verdi A=432: Historia y realidad"
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
              Verdi A=432: qué es y qué NO es
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 Enero 2026</span>
              <span>⏱️ 7 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              "Verdi A=432" es una etiqueta popular para hablar de una afinación más baja asociada al contexto operístico del siglo XIX y a la preocupación por el confort vocal. El problema es que, en internet, se simplifica hasta convertirse en mito. Aquí lo dejamos claro: qué parte es histórica y qué parte es interpretación moderna.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Qué es "Verdi A"</h2>
            <p className="text-purple-100 leading-relaxed">
              En esencia, "Verdi A" se refiere a la idea de que una referencia más baja que la que se estaba imponiendo en algunos teatros podía ser más razonable para la voz. En ese debate, A≈435 fue muy influyente en Europa, y A=432 aparece en determinados momentos y contextos italianos como propuesta o preferencia.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Contexto histórico: por qué el tema importaba</h2>
            <p className="text-purple-100 leading-relaxed">
              En ópera, pequeños aumentos de pitch pueden tener impacto real:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>el repertorio se vuelve más exigente para el cantante,</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>se altera el balance tímbrico con la orquesta,</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>cambian tensiones y respuestas en instrumentos.</span>
              </li>
            </ul>
            <p className="text-purple-100 leading-relaxed mt-4">
              La discusión no era "mística": era logística y musical.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Cronología resumida (sin mitos)</h2>
            
            <h3 className="text-xl font-bold text-purple-100">El estándar europeo de referencia baja (A≈435)</h3>
            <p className="text-purple-100 leading-relaxed">
              Francia promovió A≈435 como referencia "moderadora" en el siglo XIX, influyendo en Europa.
            </p>

            <h3 className="text-xl font-bold text-purple-100 mt-4">La discusión italiana y la idea de 432</h3>
            <p className="text-purple-100 leading-relaxed">
              En Italia se debatió intensamente la conveniencia de fijar una referencia nacional. En ese entorno, 432 aparece como una afinación propuesta o defendida por algunos como aún más cómoda.
            </p>

            <h3 className="text-xl font-bold text-purple-100 mt-4">El cierre del siglo XIX y la convergencia europea</h3>
            <p className="text-purple-100 leading-relaxed">
              Con el tiempo, la tendencia europea fue converger hacia una referencia común (primero alrededor de 435 y posteriormente hacia 440 en el siglo XX por razones industriales y técnicas).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Qué NO es "Verdi A" (los errores típicos)</h2>
            
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-bold text-purple-100 mb-2">✗ No significa que 432 fuese un estándar mundial "oficial" permanente</h3>
                <p className="text-sm text-purple-100">
                  Fue parte de debates y propuestas en un contexto concreto, no una imposición global.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-purple-100 mb-2">✗ No prueba que 440 sea "incorrecto" o "dañino"</h3>
                <p className="text-sm text-purple-100">
                  440 se consolida después por necesidades técnicas e industriales. No es un "capricho" moderno sin razones.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-purple-100 mb-2">✗ No implica efectos médicos automáticos</h3>
                <p className="text-sm text-purple-100">
                  La afinación puede influir en sensación, comodidad y color, pero no es un sustituto de evidencia clínica ni una terapia.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Cómo aplicarlo hoy de forma útil</h2>
            <p className="text-purple-100 leading-relaxed">
              Si te interesa "Verdi A" como concepto:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>úsalo como criterio musical</strong> (comodidad y color),</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>define una referencia para todo el proyecto</strong> (432 o 440, pero consistente),</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>si trabajas con audio grabado, convierte con calidad</strong> (no con atajos si es material final).</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Conclusión: contexto histórico, decisión personal</h2>
            <p className="text-purple-100 leading-relaxed">
              "Verdi A" es un recordatorio de que la afinación ha sido siempre un tema de negociación entre comodidad, estética y practicidad. No es una "verdad universal", sino un contexto histórico que hoy podemos explorar si nos interesa.
            </p>
            <p className="text-purple-100 leading-relaxed mt-4">
              Lo importante es que entiendas la diferencia entre:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Hechos históricos:</strong> 432 fue discutido en Italia en el siglo XIX</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Interpretaciones modernas:</strong> la idea de que 432 Hz tiene propiedades "mágicas" o "universales"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Realidad musical:</strong> 432 Hz es diferente a 440 Hz, perceptible y explorable</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">¿Quieres explorar 432 Hz?</h3>
              <p className="text-purple-100">
                Descubre por ti mismo cómo se siente trabajar con esta afinación alternativa usando nuestras herramientas profesionales.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Afinador 432 Hz
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
