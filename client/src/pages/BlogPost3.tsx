import { useLocation } from "wouter";

export default function BlogPost3() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/blog")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            ← Volver al Blog
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
          {/* Article Header */}
          <div className="mb-8 pb-8 border-b border-slate-200">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              432 Hz vs 440 Hz: qué cambia realmente
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 Publicado en Harmony432</span>
              <span>⏱️ Lectura: 12 min</span>
              <span>🎵 Categoría: Teoría Musical</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed space-y-6">
            <p>
              Si alguna vez has pensado "quiero probar 432 Hz" y alguien te respondió con misticismo o con burla, estás en el punto perfecto para hacer esto bien: con números, oído y práctica musical.
            </p>

            <p>
              La diferencia entre <strong>A4 = 440 Hz</strong> (estándar moderno más común) y <strong>A4 = 432 Hz</strong> (referencia alternativa muy popular) no es una idea abstracta: es una cantidad medible. Y lo mejor: se puede comprobar en minutos con un afinador que permita cambiar la referencia.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Qué significa "A4 = 440 Hz" (y qué significa "A4 = 432 Hz")
            </h2>

            <p>
              <strong>A4</strong> es el "La" por encima del Do central (la nota que muchas orquestas usan como referencia).
            </p>

            <p>
              Cuando decimos <strong>A4 = 440 Hz</strong>, estamos diciendo: "el La de la cuarta octava vibra 440 veces por segundo".
            </p>

            <p>
              Si lo cambias a <strong>A4 = 432 Hz</strong>, ese mismo La vibra 432 veces por segundo.
            </p>

            <p>
              Esto no "cambia la música" por arte de magia: cambia la altura global de todo lo que afines usando esa referencia.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              La cifra clave: 432 vs 440 en cents
            </h2>

            <p>
              En música, comparar Hz directamente puede confundir, porque el oído percibe la altura de forma logarítmica. Para eso usamos <strong>cents</strong>:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>1 semitono</strong> = 100 cents</li>
              <li><strong>1 octava</strong> = 1200 cents</li>
            </ul>

            <p>
              La fórmula es:
            </p>

            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
              cents = 1200 · log₂(f₂ / f₁)
            </div>

            <p>
              Si comparas 432 con 440:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>432/440 = 0,981818…</li>
              <li><strong>Diferencia en cents: −31,77 cents (aprox.)</strong></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold text-blue-900 mb-2">Traducción práctica:</p>
              <ul className="space-y-2 text-blue-800">
                <li>• 432 está unos <strong>31,8 cents por debajo de 440</strong></li>
                <li>• Eso es casi 1/3 de semitono (porque 1 semitono son 100 cents)</li>
              </ul>
            </div>

            <p className="font-semibold text-slate-900">
              Y aquí viene una confusión muy común:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No es "un poquito" tipo 2 o 3 cents (casi imperceptible)</li>
              <li>Tampoco es "medio tono" (100 cents)</li>
              <li>Es una bajada clara, pero no enorme: <strong>~32 cents</strong></li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Entonces… ¿por qué hay gente que lo nota "mucho"?
            </h2>

            <p>
              Porque no solo cambia la altura: cambian sensaciones físicas y musicales asociadas.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              1) Tensión de cuerdas (guitarra, bajo, violín…)
            </h3>

            <p>
              Al bajar la afinación, baja la tensión. En instrumentos de cuerda, la tensión es aproximadamente proporcional al cuadrado de la frecuencia. Si bajas de 440 a 432:
            </p>

            <div className="bg-slate-100 p-4 rounded-lg my-4">
              <ul className="space-y-2 font-mono text-sm">
                <li>Ratio de frecuencia: 0,9818</li>
                <li>Ratio de tensión aproximado: 0,9818² ≈ 0,964</li>
                <li><strong>→ ~3,6% menos tensión</strong></li>
              </ul>
            </div>

            <p>
              Eso se siente: un pelín más "blando" y, según el instrumento, puede percibirse como más cómodo o "más oscuro".
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              2) Timbre y resonancia (pero ojo: depende del instrumento)
            </h3>

            <p>
              Bajar afinación puede:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mover dónde "caen" formantes y resonancias</li>
              <li>Cambiar cómo excitas el cuerpo del instrumento</li>
              <li>Alterar cómo vibra una sala o una caja acústica</li>
            </ul>

            <p>
              Pero esto no garantiza que "suene mejor": a veces sí, a veces no. Depende de:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Escala del instrumento</li>
              <li>Calibre de cuerdas</li>
              <li>Construcción</li>
              <li>Intérprete</li>
              <li>Contexto musical</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              3) Voz y confort
            </h3>

            <p>
              Algunos cantantes sienten alivio porque todo queda un poco más bajo. Pero esto no es universal:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>32 cents pueden ser "un descanso" en un pasaje agudo</li>
              <li>O pueden ser irrelevantes si la canción ya está en una tesitura cómoda</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Qué NO cambia (o no como la gente cree)
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              "432 es curativo / 440 es dañino"
            </h3>

            <p>
              Aquí conviene ser serio: la afinación por sí sola no es una terapia. Puede cambiar tu percepción, tu comodidad, el color general… pero atribuirle efectos médicos o universales es otro terreno.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
              "432 está 'en armonía con el universo'"
            </h3>

            <p>
              Musicalmente, lo único cierto es:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Es una referencia más baja</li>
              <li>Implica un desplazamiento fijo en cents</li>
              <li>Y requiere coherencia si tocas con otros</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Problema real #1: tocar con otros músicos
            </h2>

            <p>
              Este es el punto práctico que separa "experimento casero" de "uso real":
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold text-yellow-900">
                Si tú vas en 432 y el grupo en 440, vais a estar desafinados entre sí.
              </p>
              <p className="text-yellow-800 mt-2">
                La diferencia (−31,8 cents) es suficiente para que se note claramente.
              </p>
            </div>

            <p>
              <strong>Soluciones posibles:</strong>
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Todo el grupo adopta 432 (ideal si es tu proyecto)</li>
              <li>Tú te adaptas a 440 cuando toque</li>
              <li>Usas pistas/DAW y ajustas todo a una referencia común</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Problema real #2: convertir audio de 440 a 432 (sin estropearlo)
            </h2>

            <p>
              Si quieres pasar una canción ya grabada de 440 a 432, hay dos caminos:
            </p>

            <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
              A) Cambiar "playback rate" (rápido, pero cambia tempo)
            </h3>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Funciona como prueba rápida</li>
              <li>Pero también cambia la duración: la canción se alarga un poco</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
              B) Pitch shift "de verdad" (calidad)
            </h3>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mantiene el tempo, cambia la afinación</li>
              <li>Requiere un algoritmo mejor (y más CPU)</li>
              <li>Es el camino correcto si quieres una conversión usable</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
              <p className="font-semibold text-green-900">Regla práctica:</p>
              <ul className="space-y-2 text-green-800 mt-2">
                <li>• Para escuchar y comparar: método rápido vale</li>
                <li>• Para publicar, mezclar o trabajar con detalle: usa conversión de calidad</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Cómo comprobarlo por ti mismo (en 5 minutos)
            </h2>

            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>Afina tu guitarra en 440 (estándar)</li>
              <li>Toca un acorde abierto (por ejemplo, Em o G)</li>
              <li>Cambia el afinador a A4 = 432 y vuelve a afinar</li>
              <li>Toca el mismo acorde</li>
            </ol>

            <p className="mt-4">
              <strong>No busques "magia": busca estas cosas:</strong>
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>¿Se siente distinta la tensión?</li>
              <li>¿Cambió tu comodidad al cantar encima?</li>
              <li>¿El color general te resulta más "cálido" o "oscuro"?</li>
              <li>¿Te inspira más para cierto estilo?</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
              <p className="font-semibold text-purple-900">💡 Tip útil:</p>
              <p className="text-purple-800 mt-2">
                Grábate 20 segundos en 440 y 20 en 432, sin mirar cuál es cuál, y escucha luego (idealmente a volumen moderado).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Qué aporta una app como Harmony432 (y por qué importa)
            </h2>

            <p>
              Para experimentar de forma seria, necesitas 3 cosas:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="font-bold text-slate-900">1. Afinador con referencia configurable</p>
                <p className="text-slate-700 mt-1">A4 = 432, 440, 442… lo que tú decidas.</p>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="font-bold text-slate-900">2. Sintetizador o generador de tonos a 432</p>
                <p className="text-slate-700 mt-1">Para entrenar oído, entonación, drones, etc.</p>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="font-bold text-slate-900">3. Conversor de audio</p>
                <p className="text-slate-700 mt-1">Para llevar canciones grabadas a tu referencia sin depender de trucos.</p>
              </div>
            </div>

            <p>
              La clave no es "creer": es poder probar y quedarte con lo que te sirve musicalmente.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Conclusión: lo que cambia "de verdad"
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>432 Hz no es un secreto místico, es una afinación alternativa</li>
              <li>La diferencia respecto a 440 es −31,77 cents: lo bastante grande para notarse</li>
              <li>Puede afectar tensión, color y comodidad, pero no es universal</li>
              <li>Si tocas con otros, necesitas coherencia de referencia</li>
              <li>Para audio ya grabado, la conversión "pro" marca la diferencia</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-blue-900 font-semibold">
                Si te interesa, el siguiente post puede ser una guía 100% práctica:
              </p>
              <p className="text-blue-800 mt-2 italic">
                "Cómo afinar guitarra, voz y sintetizadores a 432 sin problemas en ensayos y directos"
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Teoría Musical
              </span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Afinación
              </span>
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                432 Hz
              </span>
            </div>
          </div>
        </article>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setLocation("/blog")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            ← Volver al Blog
          </button>
        </div>
      </main>
    </div>
  );
}
