import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Heart, Zap, Music, Users } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-foreground overflow-hidden">
      {/* Animated mystical background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => setLocation("/")} className="text-sm text-purple-200 hover:text-purple-100 transition-colors font-semibold">
            ← Volver a Inicio
          </button>
          <h1 className="text-lg font-bold text-purple-100">Sobre Nosotros</h1>
          <div className="w-24" />
        </div>
      </nav>

      {/* Main Content */}
      <article className="container py-12 max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Sobre Harmony432
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Una plataforma creada por un músico, para músicos. Herramientas prácticas para explorar la afinación A = 432 Hz sin complicaciones.
            </p>
          </section>

          {/* Origin Story */}
          <section className="space-y-4 bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-purple-100">Cómo nace Harmony432</h2>
            <p className="text-purple-100 leading-relaxed">
              Harmony432 nace de una idea sencilla: ayudar a músicos y amantes del sonido a explorar la afinación A = 432 Hz de forma práctica, clara y sin complicaciones.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Detrás de harmony432.es no hay una gran empresa ni un equipo numeroso. Soy una sola persona: músico de toda la vida y creador del proyecto. He construido esta plataforma para que cualquier guitarrista, cantante, productor o curioso pueda probar, comparar y trabajar con 432 Hz desde herramientas reales, no desde teorías.
            </p>
          </section>

          {/* What We Do */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-100">Qué hacemos</h2>
            <p className="text-purple-100 leading-relaxed">
              En Harmony432 encontrarás recursos pensados para el día a día del músico:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tuner */}
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg text-purple-100">Afinador de Precisión</h3>
                </div>
                <p className="text-sm text-purple-100">
                  Referencia configurable para ajustar A4 a 432 Hz (u otras referencias) con precisión de centavos.
                </p>
              </div>

              {/* Synthesizer */}
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Music className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg text-purple-100">Sintetizador/Generador</h3>
                </div>
                <p className="text-sm text-purple-100">
                  Ideal para práctica, drones, entrenamiento de oído y entonación con soporte MIDI completo.
                </p>
              </div>

              {/* Converter */}
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg text-purple-100">Conversión de Audio</h3>
                </div>
                <p className="text-sm text-purple-100">
                  Experimenta con material grabado y llévalo a tu referencia preferida manteniendo calidad.
                </p>
              </div>

              {/* Community */}
              <div className="bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg text-purple-100">Comunidad</h3>
                </div>
                <p className="text-sm text-purple-100">
                  Todo está diseñado con una idea central: que puedas comprobar por ti mismo cómo se siente.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="space-y-6 bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-purple-100">Nuestra Filosofía</h2>
            <p className="text-purple-100 leading-relaxed">
              En un tema con tantas opiniones, mi enfoque es directo:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-purple-100 mb-1">Respeto por la música y por el oído</h3>
                  <p className="text-sm text-purple-100">
                    Entendemos que cada persona experimenta el sonido de manera única.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-purple-100 mb-1">Herramientas por encima de creencias</h3>
                  <p className="text-sm text-purple-100">
                    Nos enfocamos en proporcionar instrumentos reales para experimentación.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-purple-100 mb-1">Experimentación y resultados antes que promesas</h3>
                  <p className="text-sm text-purple-100">
                    Queremos que descubras tus propias conclusiones a través de la práctica.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-purple-100 leading-relaxed italic pt-4 border-t border-purple-500/20">
              432 Hz no es "magia", pero para muchas personas es una referencia inspiradora. Mi objetivo es darte un entorno donde puedas explorarlo de manera seria, útil y creativa.
            </p>
          </section>

          {/* Evolution */}
          <section className="space-y-4 bg-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-purple-100">Un proyecto vivo</h2>
            <p className="text-purple-100 leading-relaxed">
              Harmony432 está en evolución constante. Voy mejorando las herramientas, afinando la experiencia y añadiendo funciones según lo que van necesitando los usuarios.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Si te apetece participar, sugerir mejoras o reportar fallos, estaré encantado de leerte. Tu feedback es fundamental para hacer de Harmony432 una plataforma cada vez mejor.
            </p>
          </section>

          {/* CTA */}
          <section className="space-y-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-purple-100">¿Listo para explorar 432 Hz?</h2>
            <p className="text-purple-100">
              Comienza ahora mismo con nuestras herramientas profesionales. Totalmente gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                Usar Afinador Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => setLocation("/")}>
                Volver a Inicio
              </Button>
            </div>
          </section>

          {/* Signature */}
          <section className="text-center space-y-2 pt-8 border-t border-purple-500/20">
            <p className="text-purple-100">
              Gracias por estar aquí y por formar parte de esta comunidad.
            </p>
            <p className="text-purple-100 font-semibold">
              —Jesús Becerra Sánchez Prieto, creador de Harmony432
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
