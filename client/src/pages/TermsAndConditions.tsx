import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-bold mb-8 text-purple-300">Términos y Condiciones</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar Harmony432, usted acepta estar vinculado por estos Términos y Condiciones. Si no acepta estos términos, no debe utilizar el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción del Servicio</h2>
            <p>
              Harmony432 proporciona herramientas digitales para:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Afinación musical a 432 Hz</li>
              <li>Conversión de archivos de audio</li>
              <li>Síntesis de sonido con Temperamento Elíptico</li>
              <li>Información educativa sobre afinación</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso Aceptable</h2>
            <p>
              Usted se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Usar el servicio de manera legal y ética</li>
              <li>No interferir con el funcionamiento del sitio</li>
              <li>No intentar acceder a sistemas no autorizados</li>
              <li>No distribuir malware o código malicioso</li>
              <li>No usar para actividades ilícitas</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cuenta de Usuario</h2>
            <p>
              Si crea una cuenta en Harmony432:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Usted es responsable de mantener la confidencialidad de sus credenciales</li>
              <li>Usted es responsable de todas las actividades bajo su cuenta</li>
              <li>Debe proporcionar información precisa y actualizada</li>
              <li>Debe notificarnos de acceso no autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contenido del Usuario</h2>
            <p>
              Respecto a archivos de audio y contenido que suba:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Usted retiene la propiedad de su contenido</li>
              <li>Nos otorga licencia para procesar y almacenar temporalmente</li>
              <li>Usted garantiza que tiene derechos sobre el contenido</li>
              <li>Usted es responsable de cumplir derechos de autor</li>
              <li>No nos responsabilizamos por pérdida de datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Suscripción a Newsletter</h2>
            <p>
              Al suscribirse a nuestro newsletter:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Acepta recibir comunicaciones por email</li>
              <li>Puede desuscribirse en cualquier momento</li>
              <li>Sus datos se tratan conforme a nuestra Política de Privacidad</li>
              <li>No compartiremos su email con terceros sin consentimiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Garantías y Limitaciones</h2>
            <p>
              <strong>Harmony432 se proporciona "tal cual" sin garantías.</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>No garantizamos disponibilidad continua</li>
              <li>No garantizamos precisión absoluta</li>
              <li>No garantizamos ausencia de errores</li>
              <li>No somos responsables por daños indirectos</li>
            </ul>
            <p className="mt-3">
              <strong>Descargo de Responsabilidad Médica:</strong> Harmony432 es una herramienta educativa y musical. No constituye consejo médico. No nos responsabilizamos por resultados de salud o bienestar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso seremos responsables por:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Pérdida de datos o archivos</li>
              <li>Daños indirectos o consecuentes</li>
              <li>Lucro cesante</li>
              <li>Daños por uso incorrecto del servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnización</h2>
            <p>
              Usted acepta indemnizar y eximir de responsabilidad a Harmony432 por:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Violación de estos términos</li>
              <li>Violación de derechos de terceros</li>
              <li>Uso indebido del servicio</li>
              <li>Contenido que suba o distribuya</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Suspensión de Servicio</h2>
            <p>
              Nos reservamos el derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Suspender o terminar su acceso sin previo aviso</li>
              <li>Modificar o descontinuar servicios</li>
              <li>Bloquear acceso por violación de términos</li>
              <li>Eliminar contenido que viole derechos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Modificación de Términos</h2>
            <p>
              Nos reservamos el derecho a modificar estos términos en cualquier momento. El uso continuado del sitio implica aceptación de cambios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Ley Aplicable</h2>
            <p>
              Estos términos se rigen por la legislación española y la normativa de la Unión Europea. Cualquier disputa será resuelta conforme a las leyes de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contacto</h2>
            <p>
              Para consultas sobre estos términos, contacte a: <strong>thejb2014@gmail.com</strong>
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
