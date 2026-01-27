import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Harmony432 - Blog Post 2
 * La Quinta del Lobo: el error inevitable del Círculo de Quintas
 * Minimalismo Científico Moderno
 */

export default function BlogPost2() {
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
                Teoría Musical
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime="2024-01-10">10 de enero de 2024</time>
              </div>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">10 min de lectura</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              La Quinta del Lobo: el error inevitable del Círculo de Quintas
            </h1>

            <p className="text-xl text-muted-foreground">
              Explora cómo un problema matemático fundamental en la afinación pitagórica llevó a
              uno de los fenómenos más curiosos de la teoría musical y revolucionó el sistema de
              temperamentos.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">Introducción</h2>
            <p>
              Cuando se construye el sistema musical a base de quintas justas, aparece un
              problema inevitable: doce quintas no encajan exactamente en siete octavas. Este
              pequeño desfase dio lugar a uno de los fenómenos más curiosos de la teoría musical:
              la Quinta del Lobo, un intervalo tan desafinado que su sonido recordaba al aullido
              de un lobo.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">El problema matemático</h2>
            <p>
              La afinación pitagórica se construye sobre la base de quintas justas (relación 3:2).
              Sin embargo, existe un problema fundamental que los antiguos músicos descubrieron
              con el tiempo:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-foreground">La Paradoja del Círculo de Quintas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1</span>
                  <span>
                    <strong>12 quintas justas ≠ 7 octavas exactas</strong> - Si multiplicas 12
                    veces la relación 3:2, no obtienes el mismo resultado que 7 octavas (2^7)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2</span>
                  <span>
                    <strong>La diferencia es pequeña, pero acumulativa</strong> - Cada quinta
                    introduce un pequeño error que se suma al siguiente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3</span>
                  <span>
                    <strong>Al cerrar el círculo aparece un intervalo muy desafinado</strong> -
                    Ese intervalo "imposible" es la Quinta del Lobo
                  </span>
                </li>
              </ul>

              <div className="bg-destructive/10 border border-destructive/20 rounded p-4 mt-4">
                <p className="text-sm">
                  <strong>Matemáticamente:</strong> (3/2)^12 = 129.746 mientras que 2^7 = 128.
                  Esta diferencia de ~1.36% es lo que genera la Quinta del Lobo.
                </p>
              </div>
            </div>

            <p>
              Ese intervalo "imposible" es lo que se llamó históricamente la Quinta del Lobo,
              porque sonaba tan mal que recordaba a un aullido. Los músicos medievales lo
              describían como un sonido casi insoportable de escuchar.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">
              ¿Dónde aparece la Quinta del Lobo?
            </h2>
            <p>
              La Quinta del Lobo es un problema específico de los instrumentos de afinación fija,
              donde las notas no pueden ajustarse continuamente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Instrumentos Afectados</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Clavicémbalo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Órgano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Clave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Piano (en sistemas antiguos)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Impacto en la Música</h3>
                <p className="text-sm">
                  Había siempre una tonalidad "prohibida" que los músicos evitaban porque
                  contenía ese intervalo defectuoso. Los compositores tenían que ser cuidadosos
                  con sus modulaciones.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">Soluciones históricas</h2>
            <p>
              Para evitar este problema surgieron varios sistemas de afinación a lo largo de la
              historia, cada uno con sus ventajas y desventajas:
            </p>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">1. Temperamento Mesotónico</h3>
                <p className="text-sm">
                  Mejora algunas tonalidades (especialmente las más comunes), pero sacrifica otras.
                  Fue muy popular en el Renacimiento porque hacía que las terceras mayores fueran
                  perfectas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">2. Temperamentos Irregulares</h3>
                <p className="text-sm">
                  Reparten el error de forma desigual entre las diferentes quintas. Cada
                  temperamento irregular tiene su propia distribución, optimizando para diferentes
                  grupos de tonalidades.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">3. Temperamento Igual (Actual)</h3>
                <p className="text-sm mb-3">
                  Divide la octava en 12 partes exactas, distribuyendo el error uniformemente.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Desaparece la Quinta del Lobo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Permite modular a cualquier tonalidad libremente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>Ninguna quinta es totalmente pura</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">
              Relación con el Círculo de Quintas
            </h2>
            <p>
              El Círculo de Quintas es una herramienta fundamental en la teoría musical moderna,
              pero su relación con la acústica real es más compleja de lo que parece:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">En Teoría</h3>
                <p className="text-sm">
                  El Círculo de Quintas es perfecto: cada nota está a una quinta justa de la
                  siguiente, y el círculo se cierra perfectamente.
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">En la Práctica Acústica</h3>
                <p className="text-sm">
                  Nunca fue del todo así hasta la llegada del temperamento igual. Por eso, en el
                  sistema pitagórico, el círculo no se cierra de forma circular sino elíptica:
                  siempre queda un punto de fricción sonora.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded p-4 mt-4">
                <p className="text-sm font-semibold text-foreground mb-2">
                  La Geometría de la Afinación
                </p>
                <p className="text-sm">
                  Esta es la razón por la que el Temperamento Elíptico es conceptualmente tan
                  importante: reconoce que la afinación perfecta es una elipse, no un círculo
                  perfecto.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-foreground">Conclusión</h2>
            <p>
              La Quinta del Lobo demuestra que la música es el resultado de un equilibrio entre
              matemáticas y oído. Resolverla implicó renunciar a la pureza absoluta de algunos
              intervalos para ganar libertad tonal.
            </p>

            <p>
              Gracias a la evolución de los temperamentos, hoy podemos tocar en cualquier
              tonalidad sin miedo a "aullidos" inesperados. Sin embargo, este viaje histórico nos
              enseña una lección importante: no existe una solución perfecta, solo diferentes
              compromisos entre pureza acústica y flexibilidad musical.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Palabras clave SEO:</p>
              <p className="text-sm text-muted-foreground">
                quinta del lobo, círculo de quintas, afinación pitagórica, temperamento igual,
                historia de la afinación, temperamento mesotónico, consonancia musical, acústica
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
