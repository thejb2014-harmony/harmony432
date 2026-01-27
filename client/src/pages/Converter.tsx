export default function Converter() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "block" }}>
      <iframe
        srcDoc={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Harmony 432 — Conversor</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; }
    body{
      margin:0; min-height:100vh;
      font-family:"Inter","Segoe UI",system-ui,-apple-system,sans-serif;
      background: radial-gradient(circle at top, #1f2933 0%, #0b0f14 70%);
      display:flex; align-items:center; justify-content:center;
      color:#e5e7eb;
      padding:24px;
    }
    .app{
      width:980px; max-width:100%;
      background: linear-gradient(180deg, #0f172a, #0b0f14);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 18px;
      box-shadow: 0 20px 50px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.05);
      overflow:hidden;
    }
    header{
      padding:18px 20px 12px;
      display:flex; gap:12px; align-items:center; justify-content:space-between;
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    header h1{ margin:0; font-size:1.05rem; font-weight:650; letter-spacing:.3px; }
    header .hint{ color:#9ca3af; font-size:.9rem; }
    .content{ padding:18px 18px 22px; display:grid; grid-template-columns: 1fr 1fr; gap:16px; }
    .card{
      background: rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.06);
      border-radius:16px;
      padding:16px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
    }
    .card h2{ margin:0 0 10px; font-size:1.05rem; }
    .muted{ color:#9ca3af; font-size:.92rem; line-height:1.35; }
    .row{ display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
    .btn{
      appearance:none; border:none; outline:none; cursor:pointer;
      padding:10px 16px; border-radius:999px;
      color:white; font-weight:650; letter-spacing:.2px;
      background: linear-gradient(135deg, #7c3aed, #4f46e5);
      box-shadow: 0 10px 25px rgba(79,70,229,.35), inset 0 1px 0 rgba(255,255,255,.22);
      transition: transform .12s ease;
    }
    .btn:hover{ transform: translateY(-1px); }
    .btn.secondary{
      background: rgba(255,255,255,.08);
      box-shadow:none;
      color:#e5e7eb;
      border:1px solid rgba(255,255,255,.08);
    }
    .btn:disabled{ opacity:.55; cursor:default; transform:none; }
    .pill{
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 12px; border-radius:999px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      font-weight:600; font-size:.95rem;
    }
    input[type="file"]{
      color:#9ca3af;
      padding:8px;
      border:1px solid rgba(255,255,255,.12);
      border-radius:8px;
      background:rgba(0,0,0,.2);
    }
    .mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono"; }
    .warn{
      padding:10px 12px;
      border-radius:12px;
      background: rgba(245,158,11,.10);
      border:1px solid rgba(245,158,11,.18);
      color:#fbbf24;
      font-size:.92rem;
      line-height:1.35;
    }
    .success{
      padding:10px 12px;
      border-radius:12px;
      background: rgba(34,197,94,.10);
      border:1px solid rgba(34,197,94,.18);
      color:#86efac;
      font-size:.92rem;
      line-height:1.35;
    }
    .back-btn{
      display:inline-flex; align-items:center; gap:6px; padding:8px 12px; border-radius:999px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.08); color:#e5e7eb; cursor:pointer; text-decoration:none; font-weight:600; font-size:.9rem; transition:all .2s ease;
    }
    .back-btn:hover{background:rgba(255,255,255,.12); transform:translateX(-2px);}
    @media (max-width: 860px){ .content{ grid-template-columns: 1fr; }}
  </style>
</head>
<body>
  <div class="app">
    <header>
      <div style="display:flex; align-items:center; gap:10px;">
        <a href="/" class="back-btn">← Volver</a>
        <h1>Conversor 432 Hz</h1>
      </div>
      <div class="hint">440 Hz → 432 Hz</div>
    </header>
    <div class="content">
      <div class="card">
        <h2>Conversor (A=440 → A=432)</h2>
        <div class="muted">
          Carga un archivo de audio y convierte la afinación de 440 Hz a 432 Hz.
        </div>
        <div style="margin-top:12px" class="row">
          <input type="file" id="fileIn" accept="audio/*" />
        </div>
        <div class="row" style="margin-top:10px">
          <span class="pill">Factor 440→432: <span class="mono" id="ratioVal">0.981818</span></span>
        </div>
        <div class="row" style="margin-top:10px">
          <button class="btn secondary" id="playOrig" disabled>▶ Original</button>
          <button class="btn secondary" id="playConv" disabled>▶ Convertido</button>
        </div>
        <div class="row" style="margin-top:10px">
          <button class="btn" id="convertFast" disabled>Convertir</button>
          <button class="btn secondary" id="downloadWav" disabled>⬇ Descargar WAV</button>
        </div>
        <div class="muted" style="margin-top:10px" id="convStatus">Carga un archivo para empezar.</div>
      </div>
      <div class="card">
        <h2>Información</h2>
        <div class="success">✓ Conversión de audio a 432 Hz</div>
        <div class="muted" style="margin-top:10px">
          Formatos soportados: MP3, WAV, OGG, M4A, FLAC y otros que tu navegador pueda decodificar.
        </div>
      </div>
    </div>
  </div>

  <script>
    const RATIO_440_432 = 432 / 440;
    document.getElementById("ratioVal").textContent = RATIO_440_432.toFixed(6);

    let cAudioCtx = null;
    let originalBuffer = null;
    let convertedBuffer = null;

    const fileIn = document.getElementById("fileIn");
    const playOrig = document.getElementById("playOrig");
    const playConv = document.getElementById("playConv");
    const convertFast = document.getElementById("convertFast");
    const downloadWav = document.getElementById("downloadWav");
    const convStatus = document.getElementById("convStatus");

    function playBuffer(buffer) {
      if (!cAudioCtx || !buffer) return;
      const source = cAudioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(cAudioCtx.destination);
      source.start();
    }

    fileIn.addEventListener("change", async () => {
      const file = fileIn.files?.[0];
      if (!file) return;

      convStatus.textContent = "Cargando y decodificando…";
      cAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      await cAudioCtx.resume();

      const arrayBuffer = await file.arrayBuffer();
      originalBuffer = await cAudioCtx.decodeAudioData(arrayBuffer);
      convertedBuffer = null;

      playOrig.disabled = false;
      playConv.disabled = true;
      convertFast.disabled = false;
      downloadWav.disabled = true;
      convStatus.textContent = "Archivo listo. Puedes escuchar el original o convertir.";
    });

    playOrig.addEventListener("click", () => playBuffer(originalBuffer));
    playConv.addEventListener("click", () => playBuffer(convertedBuffer));

    convertFast.addEventListener("click", async () => {
      if (!originalBuffer) return;
      convStatus.textContent = "Convirtiendo…";

      try {
        const sampleRate = originalBuffer.sampleRate;
        const channels = originalBuffer.numberOfChannels;
        const newLength = Math.ceil(originalBuffer.length / RATIO_440_432);

        const offlineCtx = new OfflineAudioContext(channels, newLength, sampleRate);
        const source = offlineCtx.createBufferSource();
        source.buffer = originalBuffer;
        source.playbackRate.value = RATIO_440_432;
        source.connect(offlineCtx.destination);
        source.start(0);

        convertedBuffer = await offlineCtx.startRendering();
        playConv.disabled = false;
        downloadWav.disabled = false;
        convStatus.textContent = "✓ Convertido. Puedes escuchar o descargar.";
      } catch (e) {
        convStatus.textContent = "Error: " + e.message;
      }
    });

    downloadWav.addEventListener("click", () => {
      if (!convertedBuffer) return;
      const wav = audioBufferToWav(convertedBuffer);
      const blob = new Blob([wav], { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "converted_432.wav";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    });

    function audioBufferToWav(buffer) {
      const channels = buffer.numberOfChannels;
      const sampleRate = buffer.sampleRate;
      const format = 1;
      const bitDepth = 16;

      const bytesPerSample = bitDepth / 8;
      const blockAlign = channels * bytesPerSample;

      const wavLength = 36 + buffer.length * blockAlign;
      const arrayBuffer = new ArrayBuffer(44 + wavLength);
      const view = new DataView(arrayBuffer);

      const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      };

      writeString(0, "RIFF");
      view.setUint32(4, 36 + wavLength, true);
      writeString(8, "WAVE");
      writeString(12, "fmt ");
      view.setUint32(16, 16, true);
      view.setUint16(20, format, true);
      view.setUint16(22, channels, true);
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * blockAlign, true);
      view.setUint16(32, blockAlign, true);
      view.setUint16(34, bitDepth, true);
      writeString(36, "data");
      view.setUint32(40, buffer.length * blockAlign, true);

      const channelData = [];
      for (let c = 0; c < channels; c++) {
        channelData.push(buffer.getChannelData(c));
      }

      let offset = 44;
      for (let i = 0; i < buffer.length; i++) {
        for (let c = 0; c < channels; c++) {
          let sample = Math.max(-1, Math.min(1, channelData[c][i]));
          sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
          view.setInt16(offset, sample, true);
          offset += 2;
        }
      }

      return arrayBuffer;
    }
  </script>
</body>
</html>`}
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Conversor 432 Hz"
      />
    </div>
  );
}
