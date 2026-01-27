import { useLocation } from "wouter";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "Productora Musical",
    content:
      "Harmony432 cambió completamente mi flujo de trabajo. La conversión de audio a 432 Hz es impecable y el sintetizador es increíblemente intuitivo. Mis composiciones suenan más resonantes y armoniosas.",
    rating: 5,
    image: "🎵",
  },
  {
    name: "Carlos Rodríguez",
    role: "Guitarrista Profesional",
    content:
      "El afinador con soporte MIDI es exactamente lo que necesitaba. Ahora puedo experimentar con 432 Hz en mis ensayos sin complicaciones. La precisión es impresionante.",
    rating: 5,
    image: "🎸",
  },
  {
    name: "Elena Martínez",
    role: "Terapeuta de Sonido",
    content:
      "Como terapeuta, la capacidad de trabajar con 432 Hz de manera científica y precisa es fundamental. Harmony432 me ha permitido crear sesiones de sonoterapia más efectivas.",
    rating: 5,
    image: "🧘",
  },
  {
    name: "David López",
    role: "Músico Compositor",
    content:
      "La grabación y exportación MIDI del sintetizador es revolucionaria. Puedo crear ideas en 432 Hz y llevarlas a mi DAW sin perder calidad. Excelente herramienta.",
    rating: 5,
    image: "🎹",
  },
  {
    name: "Laura Fernández",
    role: "Educadora Musical",
    content:
      "He incorporado Harmony432 en mis clases. Los estudiantes entienden mejor la teoría musical gracias a las herramientas visuales y el análisis de espectro. Altamente recomendado.",
    rating: 5,
    image: "📚",
  },
  {
    name: "Miguel Sánchez",
    role: "Productor de Audio",
    content:
      "El conversor de audio con SoundTouch integrado es profesional. He convertido cientos de tracks sin perder calidad. Harmony432 es mi herramienta de confianza.",
    rating: 5,
    image: "🎚️",
  },
];

export default function Testimonials() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="border-b border-indigo-500/30 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 font-semibold text-sm transition-colors border border-indigo-500/50"
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
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/50 text-indigo-300 text-sm font-semibold">
              ⭐ Historias de Nuestros Usuarios
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Testimonios de Harmony432
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Descubre cómo músicos, productores y terapeutas de sonido están transformando su trabajo con 432 Hz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-indigo-200 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-indigo-500/20">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-indigo-100">{testimonial.name}</p>
                  <p className="text-sm text-indigo-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-3xl p-12 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-indigo-200 mb-4">
            ¿Listo para tu propia historia?
          </h2>
          <p className="text-indigo-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de músicos y productores que ya están experimentando los beneficios de la afinación a 432 Hz.
          </p>
          <button
            onClick={() => setLocation("/tuner")}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105"
          >
            Explorar Herramientas
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-500/30 py-8 mt-20 relative z-10">
        <div className="container max-w-6xl mx-auto px-4 text-center text-indigo-400 text-sm">
          <p>© 2024 Harmony432. Transformando la música a través de la afinación consciente.</p>
        </div>
      </footer>
    </div>
  );
}
