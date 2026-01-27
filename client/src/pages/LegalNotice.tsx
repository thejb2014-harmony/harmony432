import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function LegalNotice() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/images/harmony432-logo.png" alt="Harmony432" className="w-10 h-10" />
            <span className="font-bold text-lg text-purple-200">Harmony432</span>
          </button>
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
          >
            ← Volver
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-purple-300">Aviso Legal</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Información del Titular</h2>
            <p>
              <strong>Nombre:</strong> Jesús Becerra Sánchez Prieto<br />
              <strong>DNI:</strong> 05244508W<br />
              <strong>Email:</strong> thejb2014@gmail.com<br />
              <strong>Dominio:</strong> harmony432.es<br />
              <strong>Ubicación:</strong> España
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Objeto del Sitio Web</h2>
            <p>
              Harmony432 es una plataforma digital que ofrece herramientas profesionales para la afinación musical a 432 Hz, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Afinador de precisión con detección de frecuencia en tiempo real</li>
              <li>Conversor de audio de 440 Hz a 432 Hz</li>
              <li>Sintetizador con soporte MIDI y Temperamento Elíptico</li>
              <li>Información educativa sobre afinación y sonoterapia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Condiciones de Uso</h2>
            <p>
              El acceso y uso de Harmony432 está sujeto a las siguientes condiciones:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>El usuario acepta utilizar el sitio de manera legal y responsable</li>
              <li>Se prohíbe el uso para actividades ilícitas o fraudulentas</li>
              <li>El usuario no debe interferir con el funcionamiento del sitio</li>
              <li>Se prohíbe la reproducción no autorizada de contenidos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio (textos, imágenes, código, diseño) están protegidos por derechos de autor. Se prohíbe:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Copiar o reproducir contenidos sin autorización</li>
              <li>Modificar o adaptar los contenidos</li>
              <li>Usar contenidos para fines comerciales sin permiso</li>
              <li>Distribuir contenidos a terceros</li>
            </ul>
            <p className="mt-3">
              © {new Date().getFullYear()} Harmony432. Todos los derechos reservados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitación de Responsabilidad</h2>
            <p>
              Harmony432 se proporciona "tal cual". No garantizamos:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Disponibilidad continua del servicio</li>
              <li>Ausencia de errores o interrupciones</li>
              <li>Precisión absoluta de las herramientas</li>
              <li>Resultados específicos de salud o bienestar</li>
            </ul>
            <p className="mt-3">
              <strong>Descargo:</strong> Las herramientas de Harmony432 son para uso educativo y musical. No constituyen consejo médico. Consulte a un profesional de la salud antes de usar para fines terapéuticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Archivos de Audio</h2>
            <p>
              Respecto a los archivos de audio subidos a través de la herramienta de conversión:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Los archivos se procesan de forma segura</li>
              <li>Se almacenan temporalmente para el procesamiento</li>
              <li>El usuario mantiene la propiedad de sus archivos</li>
              <li>Se recomienda hacer copias de seguridad</li>
              <li>No nos responsabilizamos por pérdida de datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Enlaces Externos</h2>
            <p>
              Harmony432 puede contener enlaces a sitios web de terceros. No somos responsables por:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Contenido de sitios externos</li>
              <li>Disponibilidad de enlaces</li>
              <li>Políticas de privacidad de terceros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificación de Contenidos</h2>
            <p>
              Nos reservamos el derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Modificar o actualizar contenidos sin previo aviso</li>
              <li>Cambiar características de las herramientas</li>
              <li>Suspender o eliminar servicios</li>
              <li>Actualizar esta política legal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Ley Aplicable</h2>
            <p>
              Este aviso legal se rige por la legislación española y la normativa de la Unión Europea, incluyendo el RGPD. Cualquier disputa será resuelta según las leyes de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
            <p>
              Para consultas legales, contacte a: <strong>thejb2014@gmail.com</strong>
            </p>
            <p className="mt-3 text-sm">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Button onClick={() => setLocation("/")} className="w-full">
            Volver a Inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
