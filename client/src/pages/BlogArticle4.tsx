import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export default function BlogArticle4() {
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
          src="/images/blog-historia-estandares.jpg"
          alt="Historia de los estándares de afinación"
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
              Historia real de los estándares de afinación: ¿por qué 440 Hz y por qué 432 Hz vuelve?
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-300">
              <span>📅 Enero 2026</span>
              <span>⏱️ 8 min lectura</span>
            </div>
          </header>

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg text-purple-100 leading-relaxed">
              La afinación A=440 Hz no siempre fue el estándar mundial. Ni es "natural" ni fue elegida por razones musicales. Es el resultado de decisiones políticas, industriales y técnicas del siglo XX. Entender esta historia es clave para comprender por qué hoy muchos músicos exploran alternativas como 432 Hz.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Antes de 440: un caos de afinaciones</h2>
            <p className="text-purple-100 leading-relaxed">
              Hasta el siglo XIX, no había un estándar internacional de afinación. Cada región, cada teatro, cada compositor trabajaba con referencias distintas:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Italia (siglo XVIII):</strong> A≈415 Hz era común en algunos teatros</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Francia (siglo XIX):</strong> A≈435 Hz se popularizó como referencia "moderadora" para proteger la voz</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Alemania:</strong> A≈440 Hz comenzó a usarse en algunos contextos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Reino Unido:</strong> A≈452 Hz era frecuente en orquestas</span>
              </li>
            </ul>
            <p className="text-purple-100 leading-relaxed mt-4">
              Esta variedad no era un problema menor. Una diferencia de 20 Hz entre afinaciones significaba cambios audibles en el color, la tensión instrumental y el confort vocal. Los músicos que viajaban tenían que readaptarse constantemente.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">El movimiento hacia la estandarización (1859-1939)</h2>
            <p className="text-purple-100 leading-relaxed">
              A mediados del siglo XIX, la comunidad musical europea reconoció la necesidad de un estándar común. Se celebraron varias conferencias internacionales:
            </p>
            <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-bold text-purple-100 mb-2">1859 - Conferencia de París</h3>
                <p className="text-sm text-purple-100">Se propuso A=435 Hz como estándar europeo. Francia lo adoptó oficialmente.</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-100 mb-2">1885 - Conferencia de Viena</h3>
                <p className="text-sm text-purple-100">A=435 Hz se consolidó como referencia europea para ópera y música clásica.</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-100 mb-2">1939 - Conferencia de Londres</h3>
                <p className="text-sm text-purple-100">A=440 Hz fue adoptado como estándar internacional. ¿Por qué 440 y no 435?</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿Por qué 440 Hz? Las razones reales (y las que no lo son)</h2>
            <p className="text-purple-100 leading-relaxed">
              La decisión de 1939 no fue musical, sino <strong>técnica e industrial</strong>:
            </p>
            <div className="space-y-4">
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-100 mb-2">✓ La razón real: compatibilidad con la electricidad</h3>
                <p className="text-sm text-purple-100">
                  En 1939, la electricidad comenzaba a usarse para generar referencias de afinación (diapasones electrónicos, metrónomos, sintetizadores). En Europa, la corriente alterna funcionaba a 50 Hz. En EE.UU., a 60 Hz. 440 Hz es múltiplo conveniente de ambas frecuencias, facilitando la generación de referencias precisas con circuitos eléctricos.
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="font-bold text-purple-100 mb-2">✗ Lo que NO es cierto: que sea "natural" o "armónico"</h3>
                <p className="text-sm text-purple-100">
                  A menudo se lee que 440 Hz fue elegido por ser "más brillante" o "más energético". No. Fue elegido por conveniencia técnica. 435 Hz habría funcionado igual musicalmente, pero 440 Hz era más fácil de generar con tecnología de la época.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">¿Dónde entra 432 Hz en esta historia?</h2>
            <p className="text-purple-100 leading-relaxed">
              432 Hz no es una invención moderna. Aparece en debates históricos, especialmente en Italia en el siglo XIX, como propuesta alternativa a 435 Hz. Algunos músicos y teóricos consideraban que 432 Hz era aún más cómodo para la voz que 435 Hz.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Sin embargo, 432 Hz nunca fue un estándar oficial internacional. Fue parte de discusiones locales, no de una imposición global.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Lo que sí es cierto: <strong>la diferencia entre 432 y 440 Hz (~31,8 cents) es musicalmente perceptible</strong>. Es casi un tercio de semitono. Muchos músicos notan cambios en el color, la resonancia y la sensación al cambiar entre estas referencias.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">El resurgimiento moderno de 432 Hz</h2>
            <p className="text-purple-100 leading-relaxed">
              A partir de los años 2000, 432 Hz ganó popularidad en comunidades de música alternativa, sonoterapia y biohacking. Las razones:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Acceso a herramientas digitales que permiten cambiar afinaciones fácilmente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Investigaciones (algunas rigurosas, otras especulativas) sobre efectos biológicos de frecuencias</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Búsqueda de alternativas al estándar industrial 440 Hz</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Interés en "resonancia natural" y alineación con ciclos biológicos</span>
              </li>
            </ul>
            <p className="text-purple-100 leading-relaxed mt-4">
              Esto no significa que 432 Hz sea "mejor" que 440 Hz. Significa que es <strong>diferente</strong>, y esa diferencia es perceptible y explorable.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-100">Conclusión: contexto para una decisión informada</h2>
            <p className="text-purple-100 leading-relaxed">
              Entender la historia de los estándares de afinación nos ayuda a:
            </p>
            <ul className="space-y-3 text-purple-100 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Desmontar mitos:</strong> 440 Hz no es "incorrecto" ni fue elegido por razones místicas. Es una decisión técnica del siglo XX.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Respetar la experimentación:</strong> 432 Hz tiene raíces históricas y es musicalmente diferente. Vale la pena explorar.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Mantener la consistencia:</strong> Lo importante es que todos los instrumentos/pistas usen la misma referencia, sea 432, 440 o cualquier otra.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Confiar en el oído:</strong> Más que en teorías, confía en lo que escuchas y cómo te sientes con cada afinación.</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">¿Listo para explorar 432 Hz?</h3>
              <p className="text-purple-100">
                Usa nuestras herramientas para comparar afinaciones y descubrir qué funciona mejor para ti.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Usar Afinador
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
