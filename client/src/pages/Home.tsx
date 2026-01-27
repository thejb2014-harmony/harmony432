import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Zap, Radio } from "lucide-react";
import { useLocation } from "wouter";
import { getLoginUrl } from "@/const";

/**
 * Harmony432 - Landing Page
 * Minimalismo Científico Moderno
 * Paleta: Azul profundo (oklch(0.45 0.2 260)) + Oro sutil (oklch(0.7 0.1 60))
 * Tipografía: Poppins (display) + Inter (body)
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-foreground overflow-hidden">
      {/* Animated mystical background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Mystical grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/images/harmony432-logo.png" alt="Harmony432" className="w-10 h-10" />
            <span className="font-display font-bold text-lg text-purple-200 hover:text-purple-100 transition-colors">Harmony432</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLocation("/blog")} className="text-sm text-purple-200 hover:text-purple-100 transition-colors font-semibold">
              Blog
            </button>
            <button onClick={() => setLocation("/quick-start")} className="text-sm text-purple-200 hover:text-purple-100 transition-colors">
              Guía
            </button>
            <button onClick={() => setLocation("/testimonials")} className="text-sm text-purple-200 hover:text-purple-100 transition-colors">
              Testimonios
            </button>
            <button onClick={() => setLocation("/contact")} className="text-sm text-purple-200 hover:text-purple-100 transition-colors">
              Contacto
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Comenzar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                  Afinación a 432 Hz
                </h1>
                <p className="text-xl text-muted-foreground">
                  Descubre la frecuencia de la armonía universal. Harmony432 te ofrece herramientas profesionales para explorar el Temperamento Elíptico, afinación científica y resonancia natural. Afinador de precisión, conversor de audio y sintetizador con soporte MIDI.
                </p>
              </div>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebApplication",
                  "name": "Harmony432",
                  "description": "Herramientas profesionales para afinación 432 Hz: afinador, conversor de audio y sintetizador",
                  "url": "https://harmony432.manus.space",
                  "applicationCategory": "MusicApplication",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                })}
              </script>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setLocation("/tuner")}>
                  Comenzar Ahora - Afinador Gratis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => setLocation("/quick-start")}>
                  Ver Guía de Inicio
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/images/hero-432hz.jpg"
                alt="Visualización de 432 Hz"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-4">Herramientas Profesionales para Afinación 432 Hz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Suite completa de herramientas para músicos, productores y entusiastas de la sonoterapia. Afinador de precisión, conversor de audio y sintetizador con soporte MIDI y análisis de espectro FFT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Tuner */}
            <button
              onClick={() => setLocation("/tuner")}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3">Afinador de Precisión 432 Hz</h3>
              <p className="text-muted-foreground mb-4">
                Afinador profesional con detección de frecuencia en tiempo real, soporte MIDI, microtonalidad y visualización de armónicos. Precisión de centavos con espectro FFT integrado. Ideal para guitarristas, productores y músicos profesionales.
              </p>
              <img
                src="/images/feature-tuner.jpg"
                alt="Afinador de Precisión"
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            </button>

            {/* Feature 2: Converter */}
            <button
              onClick={() => setLocation("/converter")}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3">Conversor de Audio 440Hz→432Hz</h3>
              <p className="text-muted-foreground mb-4">
                Convierte tus canciones favoritas de 440 Hz a 432 Hz manteniendo timbre y calidad. Soporta MP3, WAV, M4A. Procesamiento rápido con SoundTouch para preservación profesional de audio.
              </p>
              <img
                src="/images/feature-converter.jpg"
                alt="Conversor de Audio"
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            </button>

            {/* Feature 3: Synthesizer */}
            <button
              onClick={() => setLocation("/synthesizer")}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3">Sintetizador con Quintas Elípticas</h3>
              <p className="text-muted-foreground mb-4">
                Experimenta con el Temperamento Elíptico y quintas elípticas en tiempo real. Soporte MIDI completo, grabación/playback, presets guardados y exportación a .mid. Genera tonos puros a 432 Hz con formas de onda personalizables.
              </p>
              <img
                src="/images/feature-synthesizer.jpg"
                alt="Sintetizador Integrado"
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            </button>
          </div>
        </div>
      </section>

      {/* About 432 Hz Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-foreground">La Ciencia de 432 Hz: Afinación Armónica Universal</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  La frecuencia de 432 Hz es conocida como la "frecuencia de la armonía universal". A diferencia del estándar de 440 Hz (establecido en 1939), 432 Hz se alinea naturalmente con ciclos biológicos humanos como el ritmo cardíaco, ciclos circadianos y patrones de ondas cerebrales.
                </p>
                <p>
                  Investigaciones sugieren que la música afinada a 432 Hz produce una experiencia de escucha más profunda, relajante y terapéutica. Muchos músicos profesionales, productores de sonoterapia y entusiastas del biohacking reportan beneficios significativos al cambiar a esta afinación alternativa.
                </p>
                <p>
                  El <strong>Temperamento Elíptico</strong> es una innovación revolucionaria que optimiza aún más esta afinación, utilizando quintas elípticas para crear una resonancia armónica superior. Harmony432 te permite explorar esta tecnología de forma accesible y profesional.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Resonancia Natural</h4>
                    <p className="text-sm text-muted-foreground">Alineada con ritmo cardíaco y ciclos biológicos humanos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Armonía Matemática</h4>
                    <p className="text-sm text-muted-foreground">Temperamento Elíptico con quintas armónicas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Experiencia Transformadora</h4>
                    <p className="text-sm text-muted-foreground">Escucha profunda, relajación y bienestar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Temperamento Elíptico</h4>
                    <p className="text-sm text-muted-foreground">Optimización avanzada de quintas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-primary-foreground">Comienza tu Viaje a la Afinación 432 Hz Hoy</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Accede gratis a herramientas profesionales: afinador de precisión, conversor de audio y sintetizador con soporte MIDI. Descubre la resonancia natural y armónica de la música.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => setLocation("/tuner")}>
              Usar Afinador Gratis Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setLocation("/quick-start")}
            >
              Ver Guía Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold mb-4">Harmony432</h4>
              <p className="text-sm text-muted-foreground">
                Herramientas profesionales para afinación 432 Hz: afinador, conversor y sintetizador con Temperamento Elíptico.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm mb-4">Herramientas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setLocation("/tuner")} className="hover:text-primary transition-colors text-left">Afinador</button></li>
                <li><button onClick={() => setLocation("/converter")} className="hover:text-primary transition-colors text-left">Conversor</button></li>
                <li><button onClick={() => setLocation("/synthesizer")} className="hover:text-primary transition-colors text-left">Sintetizador</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setLocation("/blog")} className="hover:text-primary transition-colors text-left">Blog</button></li>
                <li><button onClick={() => setLocation("/quick-start")} className="hover:text-primary transition-colors text-left">Guía de Inicio</button></li>
                <li><button onClick={() => setLocation("/contact")} className="hover:text-primary transition-colors text-left">Contacto</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setLocation("/privacy")} className="hover:text-primary transition-colors text-left">Privacidad</button></li>
                <li><button onClick={() => setLocation("/cookies")} className="hover:text-primary transition-colors text-left">Cookies</button></li>
                <li><button onClick={() => setLocation("/terms")} className="hover:text-primary transition-colors text-left">Términos</button></li>
                <li><button onClick={() => setLocation("/legal")} className="hover:text-primary transition-colors text-left">Aviso Legal</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Harmony432. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
