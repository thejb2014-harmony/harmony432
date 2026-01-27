import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-8 text-purple-300">Política de Privacidad</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del Tratamiento</h2>
            <p>
              <strong>Nombre:</strong> Jesús Becerra Sánchez Prieto<br />
              <strong>DNI:</strong> 05244508W<br />
              <strong>Email:</strong> thejb2014@gmail.com<br />
              <strong>Dominio:</strong> harmony432.es
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recopilamos</h2>
            <p>En Harmony432 recopilamos los siguientes datos personales:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Dirección de correo electrónico:</strong> Recopilada a través del formulario de suscripción a newsletter</li>
              <li><strong>Archivos de audio:</strong> Subidos voluntariamente por el usuario para procesamiento en la herramienta de conversión</li>
              <li><strong>Datos de navegación:</strong> Información de uso recopilada por Google Analytics</li>
              <li><strong>Cookies:</strong> Identificadores técnicos para mejorar la experiencia del usuario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Base Legal del Tratamiento</h2>
            <p>
              El tratamiento de sus datos se realiza bajo las siguientes bases legales conforme al RGPD:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Consentimiento:</strong> Para la suscripción a newsletter (Art. 6.1.a RGPD)</li>
              <li><strong>Interés legítimo:</strong> Para Google Analytics y mejora del servicio (Art. 6.1.f RGPD)</li>
              <li><strong>Ejecución de contrato:</strong> Para el procesamiento de archivos de audio (Art. 6.1.b RGPD)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Finalidad del Tratamiento</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Envío de información y contenido relacionado con afinación a 432 Hz</li>
              <li>Mejora de la experiencia del usuario mediante Google Analytics</li>
              <li>Procesamiento de archivos de audio para conversión de frecuencia</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Prevención de fraude y seguridad de la plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Almacenamiento de Datos</h2>
            <p>
              Los datos se almacenan en:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Base de datos:</strong> PostgreSQL alojada en infraestructura segura</li>
              <li><strong>Archivos de audio:</strong> Amazon S3 con encriptación</li>
              <li><strong>Análisis:</strong> Google Analytics (sujeto a su política de privacidad)</li>
            </ul>
            <p className="mt-3">
              Los datos se conservarán durante el tiempo necesario para cumplir con las finalidades indicadas. Los suscriptores pueden solicitar la eliminación en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Derechos del Usuario</h2>
            <p>
              Conforme al RGPD, tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Acceso:</strong> Solicitar acceso a sus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos ("derecho al olvido")</li>
              <li><strong>Limitación:</strong> Limitar el tratamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, contacte a: <strong>thejb2014@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger sus datos:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Encriptación SSL/TLS en todas las transmisiones</li>
              <li>Almacenamiento seguro en servidores protegidos</li>
              <li>Acceso restringido a personal autorizado</li>
              <li>Monitoreo continuo de seguridad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Terceros y Transferencias</h2>
            <p>
              Sus datos pueden ser compartidos con:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Google:</strong> Para Analytics y publicidad (AdSense)</li>
              <li><strong>Resend:</strong> Para envío de emails de newsletter</li>
              <li><strong>Amazon Web Services:</strong> Para almacenamiento de archivos</li>
            </ul>
            <p className="mt-3">
              No realizamos transferencias internacionales fuera del EEE sin garantías adecuadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies</h2>
            <p>
              Utilizamos cookies técnicas y de análisis. Consulte nuestra <button onClick={() => setLocation("/cookies")} className="text-primary hover:underline">Política de Cookies</button> para más información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Cambios en esta Política</h2>
            <p>
              Nos reservamos el derecho a modificar esta política en cualquier momento. Los cambios serán notificados en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contacto</h2>
            <p>
              Para consultas sobre privacidad, contacte a: <strong>thejb2014@gmail.com</strong>
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
