import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Harmony432 - Blog Post 1
 * El origen de la afinación 432 Hz y su relación con Pitágoras
 * Minimalismo Científico Moderno
 */

export default function BlogPost1() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setLocation("/blog")}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al Blog</span>
          </button>
          <h1 className="font-display font-bold text-lg">Harmony432</h1>
          <div className="w-32" />
        </div>
      </nav>

      {/* Article Container */}
      <article className="container py-12 md:py-20 max-w-3xl">
        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                Historia
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime="2024-01-15">15 de enero de 2024</time>
              </div>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">8 min de lectura</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              El origen de la afinación 432 Hz y su relación con Pitágoras
            </h1>

            <p className="text-xl text-muted-foreground">
              Descubre cómo el antiguo filósofo griego sentó las bases matemáticas de la música
              y por qué 432 Hz representa una reinterpretación moderna de un concepto antiguo.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">Introducción</h2>
            <p>
              La afinación a 432 Hz ha despertado un gran interés en músicos y oyentes por su
              supuesta conexión con la naturaleza, la matemática y la armonía universal. Aunque
              hoy el estándar es 440 Hz, la historia de la música nos lleva mucho más atrás,
              hasta Pitágoras, para entender por qué la afinación nunca ha sido un tema neutro.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">
              Pitágoras y la base matemática del sonido
            </h2>
            <p>
              Pitágoras descubrió que los intervalos musicales más consonantes se basan en
              proporciones simples. Esta revelación revolucionó la forma en que entendemos la
              música, demostrando que no es solo arte, sino también ciencia exacta.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-foreground">Proporciones Pitagóricas Fundamentales:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Octava → 2:1</strong> - El intervalo más consonante, donde la
                    frecuencia se duplica
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Quinta → 3:2</strong> - La base del sistema pitagórico, fundamental
                    en la construcción de escalas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Cuarta → 4:3</strong> - Complemento de la quinta, también altamente
                    consonante
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Estas relaciones dieron lugar al sistema pitagórico, donde la música no era solo
              arte, sino también ciencia y reflejo del orden natural. Para Pitágoras, la música
              era una manifestación de las leyes matemáticas que gobiernan el universo.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">
              ¿De dónde sale el 432 Hz?
            </h2>
            <p>
              El valor de 432 Hz no aparece como cifra directa en la Antigüedad, pero sí encaja
              con la idea pitagórica de que la música debe respetar proporciones armónicas.
              Defensores de esta afinación sostienen que:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-3">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    Produce una sensación sonora más cálida y estable, cercana a la naturaleza
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    Se percibe como más cercana al ritmo natural del cuerpo humano y sus ciclos
                    biológicos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>
                    Facilita la afinación basada en relaciones simples entre frecuencias,
                    siguiendo el principio pitagórico
                  </span>
                </li>
              </ul>
            </div>

            <p>
              En contraste, el estándar de 440 Hz fue adoptado oficialmente en el siglo XX por
              razones prácticas, no musicales. Fue una decisión de conveniencia para estandarizar
              la industria musical, no una elección basada en criterios acústicos o naturales.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">432 Hz frente a 440 Hz</h2>
            <p>
              La diferencia es mínima en cifras, pero perceptible en sensación. Aunque solo son
              8 Hz de diferencia, esta variación tiene un impacto significativo en la experiencia
              auditiva:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground">440 Hz (Estándar Actual)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Sonido más brillante y tenso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Mayor energía en frecuencias agudas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    <span>Percibido como más "artificial"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground">432 Hz (Afinación Natural)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Sonido ligeramente más grave y relajado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Mejor distribución de armónicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Percibido como más "natural" y resonante</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="pt-4">
              No es una cuestión de "mejor o peor", sino de criterio estético y filosófico. La
              elección entre 432 Hz y 440 Hz refleja una preferencia personal sobre cómo queremos
              que la música nos afecte.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">Conclusión</h2>
            <p>
              La afinación a 432 Hz no es un mito moderno: es una reinterpretación actual de una
              idea antigua, la de que la música debe alinearse con las leyes matemáticas y
              naturales. Su vínculo con Pitágoras no es literal en números, pero sí profundo en
              concepto: la música como expresión del orden universal.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Palabras clave SEO:</p>
              <p className="text-sm text-muted-foreground">
                afinación 432 Hz, Pitágoras y música, frecuencia 432, afinación natural, historia
                de la afinación, temperamento pitagórico, consonancia musical
              </p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="border-t border-border mt-12 pt-12 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setLocation("/blog")}
            className="border-primary text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Button>
          <Button
            onClick={() => setLocation("/tuner")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Probar el Afinador
          </Button>
        </div>
      </article>
    </div>
  );
}
