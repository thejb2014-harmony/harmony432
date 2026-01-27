import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function BlogArticle3() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/blog")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Volver al Blog
          </button>
          <h1 className="text-lg font-bold text-foreground">Harmony432 Blog</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Article Content */}
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span>22 de Enero, 2026</span>
          <span>•</span>
          <span>12 min lectura</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          ¿De verdad 432 "relaja"? Qué dice la evidencia y qué dice la experiencia (sin promesas mágicas)
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-muted-foreground mb-12">
          La afinación A=432 Hz suele venir acompañada de una idea muy popular: "relaja más que 440 Hz". La realidad es más interesante (y más útil) que el debate de "sí/no": hay estudios, pero son pocos, a menudo pequeños, y los efectos —cuando aparecen— suelen ser modestos y dependientes del contexto.
        </p>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1) Antes de nada: 432 vs 440 no es "otra música", es la misma música un poco más baja</h2>
            <p>
              Pasar de A=440 a A=432 baja la altura global aproximadamente −31,8 cents (casi un tercio de semitono). Esto es suficiente para notarse como "un poco más grave", pero no es un cambio enorme. (Esa sensación más "oscura" o "suave" puede influir en la percepción, pero no implica automáticamente un efecto terapéutico).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2) Qué dice la evidencia (lo más relevante y con matices)</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Estudio piloto (doble ciego, cruzado) en personas sanas</h3>
                <p>
                  Un estudio piloto comparó música afinada a 432 vs 440 y reportó que 432 se asoció con una reducción mayor de la frecuencia cardiaca que 440, y sugiere repetir con muestras más grandes y ensayos más robustos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ensayo clínico en ansiedad dental (extracción de muela)</h3>
                <p>
                  En un ensayo aleatorizado, tanto 432 como 440 redujeron la ansiedad comparados con no escuchar música. Además, el grupo 432 mostró niveles de cortisol salival más bajos que 440 y el control antes del procedimiento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Personal sanitario (estudio piloto aleatorizado, doble ciego)</h3>
                <p>
                  En enfermeras de urgencias durante COVID-19, un estudio piloto concluye que escuchar música a 432 Hz puede ser una intervención breve y de bajo coste para ayudar a manejar ansiedad/estrés, pero subraya la necesidad de más estudios (duración, muestras y seguimiento).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pacientes con cáncer: 432 vs 443 (ojo: no es 440)</h3>
                <p>
                  Un ensayo cruzado más reciente comparó intervenciones sonoras en 432 vs 443 Hz y encontró mejoras psicológicas en ambos momentos (bienestar emocional, fatiga, etc.) y algunos cambios cardiovasculares más marcados con 432, aunque no siempre con diferencias claras entre condiciones y con limitaciones (efectos a corto plazo, valores basales bajos en ansiedad/estrés para muchos participantes, etc.).
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3) Lo que NO puede afirmarse con honestidad</h2>
            <p>Con lo que hay publicado, no es serio decir que:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>"432 relaja a todo el mundo"</li>
              <li>"440 es dañino"</li>
              <li>"432 cura/terapia"</li>
            </ul>
            <p>
              Los resultados existentes apuntan, como mucho, a posibles diferencias pequeñas en ciertos marcadores (p. ej., frecuencia cardiaca o cortisol en contextos concretos) y a que la música en general —independientemente del número— puede ayudar a bajar activación en situaciones estresantes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4) Por qué puede "sentirse" más relajante (aunque no sea magia)</h2>
            <p>Hay explicaciones plausibles sin necesidad de mitología:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Más grave = diferente color emocional:</strong> una bajada de ~32 cents puede percibirse como más "cálida/oscura".</li>
              <li><strong>Expectativa / efecto placebo:</strong> si alguien espera relajarse con 432, su atención y respiración suelen acompañar.</li>
              <li><strong>La música manda más que la afinación:</strong> tempo, arreglo, dinámica, volumen, familiaridad… suelen tener un impacto mayor que mover la referencia unos cents.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5) Cómo probarlo tú (mini test "ciego" de 10 minutos)</h2>
            <p>Si quieres salir de opiniones y quedarte con lo que te sirve:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Elige 2 fragmentos (30–45 s): uno acústico/voz y otro con pads o ambiente.</li>
              <li>Ten dos versiones: una en 440 y otra en 432 (la misma música).</li>
              <li>Igualar volumen.</li>
              <li>Pídele a alguien que ponga A/B al azar (sin decirte cuál es cuál).</li>
              <li>Anota:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>cuál prefieres</li>
                  <li>si te cambia la respiración o la "tensión" del cuerpo</li>
                  <li>si notas el cambio de altura o solo "sensación"</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="space-y-4 pt-8 border-t border-border">
            <p className="text-lg">
              Este post te resume lo que se sabe hasta ahora, y cómo probarlo tú de forma honesta.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Experimenta con Harmony432
          </h3>
          <p className="text-muted-foreground">
            Prueba tú mismo con nuestro afinador, conversor y sintetizador
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setLocation("/tuner")}
          >
            Ir al Afinador
          </Button>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => setLocation("/blog")}
          >
            ← Volver al Blog
          </Button>
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
          >
            Ir a Inicio
          </Button>
        </div>
      </article>
    </div>
  );
}
