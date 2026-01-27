import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function BlogArticle() {
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
              Hicimos una prueba ciega 432 vs 440: resultados y qué aprendimos (sin humo)
            </h1>
            <p className="text-lg text-muted-foreground">
              Hay un debate eterno entre músicos: "432 suena mejor", "no cambia nada", "es puro placebo"…
              En vez de discutirlo, hicimos algo más útil: una prueba ciega (A/B) con el mínimo de rigor y la máxima honestidad.
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              No es un estudio científico con 500 personas, pero sí es una experiencia replicable que te puede dar una idea muy clara de dos cosas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Qué tanto notas realmente el cambio</li>
              <li>Cuándo es relevante musicalmente (y cuándo no)</li>
            </ul>
          </div>

          {/* Section 1: Design */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Qué probamos (diseño simple pero justo)</h2>
            <p className="text-muted-foreground">
              <strong>Objetivo:</strong> Comparar la percepción entre música afinada a A=440 y la misma música en A=432 sin que la gente supiera cuál era cuál.
            </p>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Qué usamos:</h3>
              <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                <p className="text-sm text-muted-foreground"><strong>3 fragmentos de 25–35 segundos cada uno:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-sm text-muted-foreground">
                  <li>Guitarra sola (acordes abiertos)</li>
                  <li>Voz + guitarra</li>
                  <li>Un pad/sinte sostenido (tipo drone)</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                <p className="text-sm text-muted-foreground"><strong>Dos versiones por fragmento:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-sm text-muted-foreground">
                  <li>Versión A: referencia 440</li>
                  <li>Versión B: referencia 432 (el cambio equivale a ~−31,8 cents, casi un tercio de semitono)</li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground italic">
                <strong>Regla clave:</strong> Nadie veía "A" o "B" como 432 o 440; solo elegían cuál les gustaba más.
              </p>
            </div>
          </section>

          {/* Section 2: Methodology */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Cómo lo hicimos (para que no hubiera "truco")</h2>
            <p className="text-muted-foreground">
              Para que la comparación fuera justa, intentamos que todo lo demás fuera igual:
            </p>

            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Mismo volumen aproximado</li>
                <li>✓ Mismo fragmento musical</li>
                <li>✓ Misma reproducción (mismo altavoz o auriculares por persona)</li>
              </ul>

              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-foreground text-sm mb-2">Dos rondas por fragmento:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• "Elige cuál te gusta más"</li>
                  <li>• "¿Notas cuál está más grave?"</li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground italic pt-2">
                Además, mezclamos el orden: a veces A era 440, a veces era 432. Eso evita que la gente "aprenda" un patrón.
              </p>
            </div>
          </section>

          {/* Section 3: Results */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Resultados (lo que pasó de verdad)</h2>

            {/* Result 1 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">1) Mucha gente sí notó que una versión estaba más grave… pero no siempre</h3>
              <p className="text-muted-foreground">
                En los fragmentos de voz y guitarra, bastantes personas dijeron:
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                <p className="text-sm text-foreground italic">"Esta suena un poco más baja"</p>
                <p className="text-sm text-foreground italic">"Esta se siente más suave"</p>
                <p className="text-sm text-foreground italic">"Esta parece más oscura"</p>
              </div>
              <p className="text-muted-foreground">
                En cambio, con el pad/sinte, algunos no notaron nada hasta que les dijimos "una está más baja".
              </p>
              <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                <strong>Aprendizaje:</strong> El oído detecta mejor la diferencia cuando hay armónicos acústicos y "cuerpo" natural (voz/cuerdas) que cuando hay un timbre muy estable y sintético.
              </p>
            </div>

            {/* Result 2 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">2) La preferencia no fue "432 arrasa" (y esto es importante)</h3>
              <p className="text-muted-foreground">
                Lo más interesante: <strong>no hubo una victoria aplastante de 432.</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• En temas lentos/íntimos, muchas personas prefirieron la versión más baja.</li>
                <li>• En fragmentos más "brillantes" o con energía, varios prefirieron 440.</li>
              </ul>
              <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                <strong>Aprendizaje:</strong> La preferencia parece depender más del estilo y la emoción del fragmento que de una "superioridad" universal de una afinación.
              </p>
            </div>

            {/* Result 3 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">3) La frase más repetida fue: "me gusta porque se siente…"</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground text-sm mb-3">Cuando alguien eligió 432:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• "Más cálida"</li>
                    <li>• "Más redonda"</li>
                    <li>• "Menos agresiva"</li>
                    <li>• "Más relajada"</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground text-sm mb-3">Cuando alguien eligió 440:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• "Más viva"</li>
                    <li>• "Más clara"</li>
                    <li>• "Con más presencia"</li>
                    <li>• "Me empuja más"</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                <strong>Aprendizaje:</strong> Mucha gente describe el cambio en términos de sensación (color, emoción), no como "está afinado o desafinado".
              </p>
            </div>
          </section>

          {/* Section 4: What We Didn't Learn */}
          <section className="space-y-4 bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground">Lo que NO aprendimos (y está bien decirlo)</h2>
            <p className="text-muted-foreground">Esto <strong>NO</strong> demuestra que:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✗ 432 "cura" nada</li>
              <li>✗ 440 sea "malo"</li>
              <li>✗ Haya una afinación "correcta universal"</li>
            </ul>
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground">Lo que sí demuestra es algo más útil:</p>
              <p className="text-lg font-semibold text-foreground mt-2">
                👉 Hay un cambio audible y puede influir en la percepción, pero no siempre y no igual para todos.
              </p>
            </div>
          </section>

          {/* Section 5: DIY Test */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Si quieres repetir la prueba en tu casa (en 10 minutos)</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Elige un fragmento de 20–30 segundos (guitarra o voz ideal).</li>
                <li>Ten dos versiones:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Una afinada a 440</li>
                    <li>Otra a 432 (o convertida)</li>
                  </ul>
                </li>
                <li>Ponlas al mismo volumen aproximado.</li>
                <li>Reprodúcelas en orden aleatorio y apunta:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>"Me gusta más A o B"</li>
                    <li>"¿Cuál crees que está más grave?"</li>
                  </ul>
                </li>
                <li>Repite con 2–3 fragmentos distintos.</li>
              </ol>
              <p className="text-sm italic pt-2 border-t border-primary/20">
                <strong>Consejo:</strong> Si puedes, pide a otra persona que ponga las pistas para que tú no sepas cuál es cuál.
              </p>
            </div>
          </section>

          {/* Section 6: Conclusion */}
          <section className="space-y-4 bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground">Conclusión honesta</h2>
            <p className="text-muted-foreground">Después de la prueba, nuestra conclusión fue sencilla:</p>
            <div className="space-y-2 mt-4">
              <p className="text-foreground"><span className="text-green-500">✅</span> Sí, se nota (en muchos casos)</p>
              <p className="text-foreground"><span className="text-green-500">✅</span> Sí, puede cambiar la sensación (sobre todo en voz y acústicos)</p>
              <p className="text-foreground"><span className="text-red-500">❌</span> No es magia</p>
              <p className="text-foreground"><span className="text-red-500">❌</span> No es universal</p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground">
                La afinación es una herramienta creativa más. A veces 432 te da un color que te gusta. Otras veces 440 te da el brillo que necesitas.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="space-y-4 bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground">¿Quieres probarlo tú ahora mismo?</h2>
            <p className="text-muted-foreground">
              Si te apetece hacer tu propia prueba ciega, lo más cómodo es tener:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Un afinador con referencia ajustable (432/440)</li>
              <li>• Un sintetizador para generar un tono base en 432</li>
              <li>• Un conversor para crear una versión alternativa de un audio</li>
            </ul>
            <p className="font-semibold text-foreground pt-2">
              Eso es exactamente lo que estamos construyendo en Harmony432.
            </p>
            <Button 
              size="lg" 
              className="mt-4 bg-primary hover:bg-primary/90"
              onClick={() => setLocation("/tuner")}
            >
              Probar Harmony432 Ahora
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
