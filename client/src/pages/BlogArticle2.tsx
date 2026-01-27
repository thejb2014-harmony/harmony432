import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function BlogArticle2() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Volver a Inicio
          </button>
          <h1 className="text-lg font-bold text-foreground">Harmony432 Blog</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Article Content */}
      <article className="container py-12 max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Guía: afinación alternativa en guitarras (Drop, Open Tunings) + A=432 Hz
            </h1>
            <p className="text-lg text-muted-foreground">
              Si te gusta experimentar con la guitarra, seguramente ya has probado alguna afinación alternativa: Drop D, Open G, DADGAD, Open D, etc. Ahora bien: cuando además quieres usar A = 432 Hz, aparece la pregunta clave: ¿Cómo combino afinaciones alternativas con 432 sin liarme y sin sonar "raro" con otros músicos?
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Esta guía te lo deja claro, paso a paso y con criterios prácticos.
            </p>
          </div>

          {/* Section 1: The Basics */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1) Lo básico: 432 Hz no es una afinación "de cuerdas", es una referencia</h2>
            <p className="text-muted-foreground">
              A = 432 Hz significa que tu nota La (A4) está calibrada a 432 en vez de 440. Eso baja todo aproximadamente <strong>−31,8 cents</strong>, o sea, casi 1/3 de semitono.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">✅ Importante:</p>
              <p className="text-muted-foreground">
                Puedes usar 432 con cualquier afinación (standard, drop, open…). Lo único que cambia es la referencia global.
              </p>
            </div>
          </section>

          {/* Section 2: Correct Order */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2) Orden correcto: primero decide el "mapa" de cuerdas, luego la referencia</h2>
            <p className="text-muted-foreground">Siempre sigue este orden:</p>
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">1.</span>
                <p className="text-muted-foreground">Elige tu afinación de cuerdas (Drop D, DADGAD, Open G…)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">2.</span>
                <p className="text-muted-foreground">Ajusta tu afinador a A = 432 Hz</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">3.</span>
                <p className="text-muted-foreground">Afina las cuerdas a sus notas objetivo usando esa referencia</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">Eso es todo.</p>
          </section>

          {/* Section 3: Quick Reference Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3) Tabla rápida: afinaciones populares (en notas)</h2>
            
            <div className="space-y-4">
              {/* Standard */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Standard (E A D G B E)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>6ª: E2</div>
                  <div>5ª: A2</div>
                  <div>4ª: D3</div>
                  <div>3ª: G3</div>
                  <div>2ª: B3</div>
                  <div>1ª: E4</div>
                </div>
              </div>

              {/* Drop D */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Drop D (D A D G B E)</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>6ª baja un tono: <strong>D2</strong></p>
                  <p>Las demás igual que Standard</p>
                </div>
              </div>

              {/* DADGAD */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">DADGAD (D A D G A D)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>6ª: D2</div>
                  <div>5ª: A2</div>
                  <div>4ª: D3</div>
                  <div>3ª: G3</div>
                  <div>2ª: A3</div>
                  <div>1ª: D4</div>
                </div>
              </div>

              {/* Open G */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Open G (D G D G B D)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>6ª: D2</div>
                  <div>5ª: G2</div>
                  <div>4ª: D3</div>
                  <div>3ª: G3</div>
                  <div>2ª: B3</div>
                  <div>1ª: D4</div>
                </div>
              </div>

              {/* Open D */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Open D (D A D F# A D)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>6ª: D2</div>
                  <div>5ª: A2</div>
                  <div>4ª: D3</div>
                  <div>3ª: F#3</div>
                  <div>2ª: A3</div>
                  <div>1ª: D4</div>
                </div>
              </div>

              {/* Open E */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Open E (E B E G# B E) ⚠️ ¡Ojo tensión!</h3>
                <p className="text-sm text-muted-foreground">Es Open D subido un tono: más tensión en las cuerdas</p>
              </div>
            </div>
          </section>

          {/* Section 4: What Happens */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4) ¿Qué pasa cuando bajas a 432? (en la práctica)</h2>
            <p className="text-muted-foreground">
              Bajar de 440 a 432 equivale a afinar todo un poco más grave. En guitarra se nota en:
            </p>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Menos tensión</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Tacto algo más blando</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Tendencia a "trastear" si estabas al límite</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Timbre algo más oscuro (a veces)</span>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground text-sm mb-2">Consejo práctico:</p>
              <p className="text-sm text-muted-foreground">
                Si usas Open tunings y bajas a 432, normalmente es más cómodo. Pero si además bajas cuerdas (Drop/Barítono), puede quedar demasiado flojo.
              </p>
            </div>
          </section>

          {/* Section 5: The Real Problem */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5) El problema real: afinaciones alternativas + 432 + tocar con otros</h2>
            <p className="text-muted-foreground">
              Aquí es donde la gente se atasca:
            </p>
            <p className="text-muted-foreground italic border-l-4 border-red-500 pl-4">
              Si tú estás en 432 y el resto en 440, estarás fuera (≈ −31,8 cents). Y si además vas en Open G o DADGAD, el lío se multiplica.
            </p>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Soluciones reales (elige una):</h3>
              <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                <div className="flex gap-3">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                  <p className="text-muted-foreground"><strong>Todo el grupo adopta 432</strong> (ideal)</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-500 font-bold flex-shrink-0">•</span>
                  <p className="text-muted-foreground"><strong>Tú vuelves a 440</strong> para ensayos/conciertos</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <p className="text-muted-foreground"><strong>Usas un proyecto paralelo</strong> (tu música/tu banda) donde manda 432</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                  <p className="text-muted-foreground"><strong>Si hay pistas o secuencias:</strong> todo debe quedar en la misma referencia</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground text-sm mb-2">Regla de oro:</p>
              <p className="text-foreground font-bold">No es "432 vs 440": es "todos igual o caos".</p>
            </div>
          </section>

          {/* Section 6: Calibration Trick */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6) Afinaciones alternativas y calibración: el truco que evita errores</h2>
            <p className="text-muted-foreground">
              Cuando cambias de afinación, muchos afinadores se vuelven locos por:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Ruido de mano derecha</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Armónicos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Detección errónea de octava</span>
              </li>
            </ul>

            <div className="bg-card border border-border rounded-lg p-4 space-y-3 mt-4">
              <p className="font-semibold text-foreground text-sm">Método "pro" para afinar rápido y limpio:</p>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Toca la cuerda muy cerca del traste 12 (sonido más claro)</li>
                <li>Evita vibratos</li>
                <li>Afina primero grave → agudo</li>
                <li>Luego repasa agudo → grave (la tensión general cambia)</li>
              </ol>
            </div>
          </section>

          {/* Section 7: Recommendations by Style */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7) Recomendaciones por estilo (para elegir tuning + 432)</h2>
            
            <div className="space-y-3">
              {/* Fingerstyle */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Para fingerstyle / acústica</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>DADGAD en 432:</strong> muy agradable</li>
                  <li>• <strong>Open D en 432:</strong> profundo y resonante</li>
                </ul>
              </div>

              {/* Rock/Blues */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Para rock/blues</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Standard en 432:</strong> cómodo</li>
                  <li>• <strong>Drop D en 432:</strong> genial si no queda demasiado flojo</li>
                </ul>
              </div>

              {/* Slide */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Para slide</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Open G / Open D en 432:</strong> suena gordo y con menos "chirri"</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Loose Guitar */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8) ¿Y si mi guitarra queda demasiado floja en 432 + Drop/Open?</h2>
            <p className="text-muted-foreground">
              Esto pasa mucho. Soluciones:
            </p>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <div className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <p className="text-muted-foreground">Sube calibre de cuerdas</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <p className="text-muted-foreground">Ajusta acción y alma</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <p className="text-muted-foreground">Usa una guitarra dedicada para afinaciones bajas</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <p className="text-muted-foreground">O usa 432 solo en standard/open moderados</p>
              </div>
            </div>
          </section>

          {/* Section 9: Tools */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9) Cómo hacerlo aún más fácil con herramientas (lo que debe tener una app)</h2>
            <p className="text-muted-foreground">
              Si haces esto a menudo, necesitas:
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Afinador con A4 configurable (432/440)</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Modo de afinaciones predefinidas (Drop D, DADGAD…)</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Calibración y lectura estable (filtro + precisión)</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-green-500">✅</span>
                <span>Generador de tono (para comprobar oído, drones, etc.)</span>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-4 bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground">Conclusión</h2>
            <p className="text-muted-foreground">
              Combinar afinaciones alternativas con A = 432 Hz es sencillo si lo piensas así:
            </p>
            <div className="space-y-3 pt-4 border-t border-border">
              <p className="text-muted-foreground">
                <strong>La afinación alternativa</strong> define qué notas van en cada cuerda
              </p>
              <p className="text-muted-foreground">
                <strong>432</strong> define desde qué referencia afinas esas notas
              </p>
              <p className="text-foreground font-semibold">
                Y lo más importante: si tocas con otros, todos deben compartir la misma referencia.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="space-y-4 bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground">¿Listo para experimentar?</h2>
            <p className="text-muted-foreground">
              Harmony432 tiene todas las herramientas que necesitas: afinador con referencia 432/440, afinaciones predefinidas y generador de tonos.
            </p>
            <Button 
              size="lg" 
              className="mt-4 bg-primary hover:bg-primary/90"
              onClick={() => setLocation("/tuner")}
            >
              Ir al Afinador Harmony432
            </Button>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
          >
            ← Volver a Inicio
          </Button>
        </div>
      </article>
    </div>
  );
}
