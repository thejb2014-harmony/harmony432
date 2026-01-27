import { useLocation } from "wouter";
import { CheckCircle, Zap, Music, Radio } from "lucide-react";

interface Guide {
  title: string;
  description: string;
  steps: string[];
  icon: React.ReactNode;
  color: string;
}

const guides: Guide[] = [
  {
    title: "Afinador Básico",
    description: "Aprende a afinar tus instrumentos a 432 Hz en minutos",
    icon: <Radio className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-600",
    steps: [
      "Abre el Afinador desde la página principal",
      "Permite acceso al micrófono de tu dispositivo",
      "Toca una nota en tu instrumento",
      "Observa la frecuencia detectada en Hz",
      "Ajusta tu instrumento hasta alcanzar 432 Hz",
      "¡Listo! Tu instrumento está afinado a 432 Hz",
    ],
  },
  {
    title: "Conversor de Audio",
    description: "Convierte tus canciones favoritas a 432 Hz",
    icon: <Music className="w-8 h-8" />,
    color: "from-purple-600 to-pink-600",
    steps: [
      "Accede al Conversor desde las herramientas",
      "Carga un archivo de audio (MP3, WAV, etc.)",
      "El conversor detectará automáticamente 440 Hz",
      "Haz clic en 'Convertir a 432 Hz'",
      "Espera a que se complete la conversión",
      "Descarga el archivo convertido en formato WAV",
    ],
  },
  {
    title: "Sintetizador Interactivo",
    description: "Crea tonos y melodías a 432 Hz",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-600 to-emerald-600",
    steps: [
      "Abre el Sintetizador desde las herramientas",
      "Selecciona una forma de onda (sine, triangle, etc.)",
      "Haz clic en las teclas del teclado para tocar",
      "Ajusta el volumen con el slider",
      "Experimenta con diferentes ondas y notas",
      "Graba tu sesión y exporta como MIDI",
    ],
  },
  {
    title: "Grabación MIDI",
    description: "Graba y exporta tus composiciones",
    icon: <Music className="w-8 h-8" />,
    color: "from-orange-600 to-red-600",
    steps: [
      "En el Sintetizador, haz clic en 'Grabar'",
      "Toca tu composición en el teclado",
      "Haz clic en 'Detener grabación' cuando termines",
      "Haz clic en 'Exportar .mid' para descargar",
      "Abre el archivo en tu DAW favorito",
      "¡Continúa produciendo con tus herramientas habituales!",
    ],
  },
];

export default function QuickStart() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="border-b border-emerald-500/30 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 font-semibold text-sm transition-colors border border-emerald-500/50"
          >
            ← Volver
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Hero */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 text-emerald-300 text-sm font-semibold">
              🚀 Comienza en 5 Minutos
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Guía de Inicio Rápido
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Aprende a usar cada herramienta de Harmony432 con estos sencillos pasos.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-emerald-900/40 to-slate-900/40 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-xl hover:border-cyan-500/50 transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${guide.color} text-white`}
                >
                  {guide.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-200">
                    {guide.title}
                  </h2>
                  <p className="text-emerald-400 text-sm mt-1">
                    {guide.description}
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {guide.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="flex items-start gap-3 text-emerald-200"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <p className="text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setLocation("/tuner")}
                className="mt-6 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold transition-all transform hover:scale-105"
              >
                Comenzar Ahora
              </button>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-emerald-200 mb-6">
            💡 Consejos Útiles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-cyan-300">Para Músicos</h3>
              <ul className="space-y-2 text-emerald-300 text-sm">
                <li>• Afina todos tus instrumentos a 432 Hz para máxima coherencia</li>
                <li>• Usa el sintetizador como referencia de tono durante ensayos</li>
                <li>• Graba tus composiciones en MIDI para usar en tu DAW</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-cyan-300">Para Productores</h3>
              <ul className="space-y-2 text-emerald-300 text-sm">
                <li>• Convierte pistas existentes para experimentar con 432 Hz</li>
                <li>• Usa el afinador para verificar frecuencias en tiempo real</li>
                <li>• Exporta grabaciones MIDI para integrar en tus proyectos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-emerald-200 mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
              <p className="font-semibold text-emerald-200 mb-2">
                ¿Necesito permisos especiales?
              </p>
              <p className="text-emerald-400 text-sm">
                Solo necesitas permitir acceso al micrófono para el afinador. Todo funciona en tu navegador.
              </p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
              <p className="font-semibold text-emerald-200 mb-2">
                ¿Puedo usar MIDI?
              </p>
              <p className="text-emerald-400 text-sm">
                Sí, conecta tu controlador MIDI al sintetizador y afinador para máxima flexibilidad.
              </p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
              <p className="font-semibold text-emerald-200 mb-2">
                ¿Qué formatos soporta el conversor?
              </p>
              <p className="text-emerald-400 text-sm">
                MP3, WAV, FLAC y otros formatos comunes. Descarga en WAV de alta calidad.
              </p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
              <p className="font-semibold text-emerald-200 mb-2">
                ¿Dónde se guardan mis grabaciones?
              </p>
              <p className="text-emerald-400 text-sm">
                Las grabaciones se guardan localmente en tu navegador. Puedes exportarlas como archivos .mid.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/30 py-8 mt-20 relative z-10">
        <div className="container max-w-6xl mx-auto px-4 text-center text-emerald-400 text-sm">
          <p>© 2024 Harmony432. Tu guía hacia la afinación consciente.</p>
        </div>
      </footer>
    </div>
  );
}
