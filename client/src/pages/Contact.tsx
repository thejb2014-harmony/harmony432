import { useState } from "react";
import { useLocation } from "wouter";
import { Mail, Send, Heart, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const newsletterMutation = trpc.newsletter.subscribe.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) return;

    try {
      const result = await newsletterMutation.mutateAsync({ email });
      if (result.success) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Error al suscribirse. Por favor intenta de nuevo.");
      console.error("Newsletter subscription error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-purple-500/30 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 font-semibold text-sm transition-colors border border-purple-500/50"
          >
            ← Volver
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-purple-300 text-sm font-semibold">
                ✨ Conecta con Harmony432
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Únete a Nuestra Comunidad
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Recibe actualizaciones sobre nuevas herramientas, artículos educativos y descubrimientos sobre la afinación a 432 Hz.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-purple-200 mb-6">Suscribirse a Newsletter</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-purple-300 mb-2">
                    Tu Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    disabled={newsletterMutation.isPending}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/30 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-sm text-purple-300">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded bg-purple-500/20 border-purple-500 cursor-pointer"
                    />
                    Artículos sobre teoría musical
                  </label>
                  <label className="flex items-center gap-3 text-sm text-purple-300">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded bg-purple-500/20 border-purple-500 cursor-pointer"
                    />
                    Nuevas funcionalidades de herramientas
                  </label>
                  <label className="flex items-center gap-3 text-sm text-purple-300">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded bg-purple-500/20 border-purple-500 cursor-pointer"
                    />
                    Eventos y colaboraciones
                  </label>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm">
                    ¡Suscripción exitosa! Revisa tu email para confirmar.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={newsletterMutation.isPending || submitted}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {newsletterMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Suscribiendo...
                    </>
                  ) : submitted ? (
                    <>
                      <Send className="w-4 h-4" />
                      ¡Suscrito!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Suscribirse
                    </>
                  )}
                </button>

                <p className="text-xs text-purple-400 text-center">
                  Nos comprometemos a proteger tu privacidad. Nunca compartiremos tu email.
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-200">Contacto Directo</h3>
                </div>
                <p className="text-blue-300 mb-4">
                  ¿Preguntas o sugerencias? Escríbenos directamente:
                </p>
                <a
                  href="mailto:thejb2014@gmail.com"
                  className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all transform hover:scale-105"
                >
                  thejb2014@gmail.com
                </a>
              </div>

              {/* Why Subscribe */}
              <div className="bg-gradient-to-br from-pink-900/40 to-slate-900/40 border border-pink-500/30 rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-pink-200 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  ¿Por qué suscribirse?
                </h3>
                <ul className="space-y-3 text-pink-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold mt-1">→</span>
                    <span>Acceso a contenido exclusivo sobre 432 Hz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold mt-1">→</span>
                    <span>Notificaciones de nuevas herramientas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold mt-1">→</span>
                    <span>Invitaciones a eventos y webinars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold mt-1">→</span>
                    <span>Comunidad de músicos y productores</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/30 py-8 mt-20 relative z-10">
        <div className="container max-w-4xl mx-auto px-4 text-center text-purple-400 text-sm">
          <p>© 2024 Harmony432. Vibrando en la frecuencia de la armonía universal.</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
