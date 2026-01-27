import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CookiesPolicy() {
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
        <h1 className="text-4xl font-bold mb-8 text-purple-300">Política de Cookies</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Se utilizan para recordar preferencias, mejorar la experiencia del usuario y recopilar información sobre el uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies Técnicas (Esenciales)</h3>
            <p>
              Necesarias para el funcionamiento básico del sitio:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Autenticación de sesión</li>
              <li>Preferencias de idioma</li>
              <li>Configuración de seguridad</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de Análisis</h3>
            <p>
              Utilizadas para entender cómo los usuarios interactúan con nuestro sitio:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Google Analytics:</strong> Recopila datos sobre páginas visitadas, tiempo de permanencia, ubicación geográfica</li>
              <li>Identificadores únicos de sesión</li>
              <li>Información de dispositivo y navegador</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de Publicidad</h3>
            <p>
              Utilizadas para mostrar anuncios relevantes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Google AdSense:</strong> Cookies para personalización de anuncios</li>
              <li>Seguimiento de conversiones</li>
              <li>Preferencias de publicidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Google Analytics</h2>
            <p>
              Utilizamos Google Analytics para analizar el tráfico del sitio. Google puede usar sus datos para:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Analizar el uso del sitio</li>
              <li>Compilar informes sobre actividad del sitio</li>
              <li>Proporcionar otros servicios relacionados con la actividad del sitio e Internet</li>
            </ul>
            <p className="mt-3">
              Puede optar por no participar en Google Analytics instalando el <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">complemento de exclusión de Google Analytics</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Google AdSense</h2>
            <p>
              Utilizamos Google AdSense para mostrar anuncios. Google puede:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Mostrar anuncios basados en su historial de navegación</li>
              <li>Usar información de cookies para personalizar anuncios</li>
              <li>Recopilar datos sobre interacciones con anuncios</li>
            </ul>
            <p className="mt-3">
              Puede controlar la personalización de anuncios en <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Duración de las Cookies</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra el navegador</li>
              <li><strong>Cookies persistentes:</strong> Permanecen hasta 2 años</li>
              <li><strong>Cookies de terceros:</strong> Según las políticas de Google y otros proveedores</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Control de Cookies</h2>
            <p>
              Puede controlar las cookies a través de:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Configuración del navegador:</strong> Aceptar, rechazar o eliminar cookies</li>
              <li><strong>Google Ad Settings:</strong> Controlar anuncios personalizados</li>
              <li><strong>Herramientas de privacidad:</strong> Extensiones de navegador para bloquear cookies</li>
            </ul>
            <p className="mt-3">
              <strong>Nota:</strong> Desactivar cookies puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Consentimiento de Cookies</h2>
            <p>
              Al utilizar Harmony432, usted acepta el uso de cookies según se describe en esta política. Si no acepta el uso de cookies, puede desactivarlas en la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Cambios en esta Política</h2>
            <p>
              Nos reservamos el derecho a actualizar esta política de cookies. Los cambios entrarán en vigor inmediatamente después de su publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
            <p>
              Para preguntas sobre cookies, contacte a: <strong>thejb2014@gmail.com</strong>
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
