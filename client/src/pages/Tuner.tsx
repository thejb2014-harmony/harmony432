import { useEffect } from "react";  // eslint-disable-line @typescript-eslint/no-unused-vars

export default function Tuner() {
  useEffect(() => {
    // MIDI initialization happens in the HTML script
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Harmony 432 — Afinador</title>
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
    .big{
      font-size:3rem; font-weight:750; letter-spacing:2px;
      margin:10px 0 2px;
    }
    .mid{
      font-size:1.35rem; font-weight:650;
      margin:0;
    }
    .pill{
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 12px; border-radius:999px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      font-weight:600; font-size:.95rem;
    }
    input[type="range"]{ width:240px; }
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
    select{
      width: 100%;
    }
    @media (max-width: 860px){
      .content{ grid-template-columns: 1fr; }
      input[type="range"]{ width: 100%; }
    }
  </style>
</head>
<body>
  <div class="app">
    <header>
      <div style="display:flex; align-items:center; gap:10px;">
        <a href="/" class="back-btn" style="display:inline-flex; align-items:center; gap:6px; padding:8px 12px; border-radius:999px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.08); color:#e5e7eb; cursor:pointer; text-decoration:none; font-weight:600; font-size:.9rem; transition:all .2s ease;">← Volver</a>
        <h1>Afinador 432 Hz</h1>
      </div>
      <div class="hint">Micrófono + MIDI</div>
    </header>
    <div class="content">
      <div class="card">
        <h2>Afinador (A4 = 432 Hz)</h2>
        <div class="muted">
          Necesita micrófono. También puedes conectar un instrumento MIDI para afinar notas externas.
        </div>
        <div style="margin-top:12px" class="row">
          <button class="btn" id="tunerStart">Iniciar Micrófono</button>
          <button class="btn secondary" id="tunerStop" disabled>Detener</button>
          <span class="pill">Referencia: <span class="mono" id="refA4">432</span> Hz</span>
        </div>
        <div class="row" style="margin-top:12px">
          <label class="pill">A4:
            <input id="a4Slider" type="range" min="400" max="460" value="432" />
            <span class="mono" id="a4Val">432</span>
          </label>
        </div>
        <div class="big" id="tNote">–</div>
        <p class="mid" id="tCents"></p>
        <div class="muted" id="tStatus">Pulsa "Iniciar Micrófono" o conecta un dispositivo MIDI.</div>
        <div style="margin-top:16px; padding:12px; background:rgba(0,0,0,.3); border-radius:12px; border:1px solid rgba(255,255,255,.08);">
          <div class="muted" style="margin-bottom:8px;">Espectro de Frecuencias (FFT):</div>
          <canvas id="spectrumCanvas" style="width:100%; height:120px; background:rgba(0,0,0,.5); border-radius:8px; border:1px solid rgba(255,255,255,.06);"></canvas>
        </div>
      </div>
      <div class="card">
        <h2>Entrada MIDI</h2>
        <div id="midiInputStatus" class="warn">
          Buscando dispositivos MIDI...
        </div>
        <div style="margin-top:10px" class="muted">
          Dispositivos conectados: <span class="mono" id="midiInputCount">0</span>
        </div>
        <div style="margin-top:10px">
          <select id="midiInputSelect" class="mono" style="padding:8px; border-radius:8px; background:rgba(255,255,255,.08); color:#e5e7eb; border:1px solid rgba(255,255,255,.08);">
            <option>Selecciona un dispositivo MIDI...</option>
          </select>
        </div>
        <div style="margin-top:10px" class="muted">
          Entrada (RMS): <span class="mono" id="rmsVal">0.000</span>
        </div>
      </div>
    </div>
  </div>
<script>
let midiAccess = null;
let midiInputs = [];
let tunerMidiInput = null;

async function initMIDI() {
  try {
    midiAccess = await navigator.requestMIDIAccess();
    updateMIDIInputs();
    midiAccess.addEventListener("statechange", updateMIDIInputs);
  } catch (e) {
    console.warn("MIDI not supported:", e);
  }
}

function updateMIDIInputs() {
  if (!midiAccess) return;
  midiInputs = Array.from(midiAccess.inputs.values());
  const select = document.getElementById("midiInputSelect");
  const count = document.getElementById("midiInputCount");
  
  select.innerHTML = '<option>Selecciona un dispositivo MIDI...</option>';
  midiInputs.forEach((input, idx) => {
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = input.name || "Dispositivo MIDI " + (idx + 1);
    select.appendChild(option);
  });
  count.textContent = String(midiInputs.length);
}

document.getElementById("midiInputSelect").addEventListener("change", (e) => {
  const idx = parseInt(e.target.value);
  if (isNaN(idx)) {
    tunerMidiInput = null;
    document.getElementById("midiInputStatus").innerHTML = '<div class="warn">Dispositivo desconectado</div>';
    return;
  }
  tunerMidiInput = midiInputs[idx];
  tunerMidiInput.onmidimessage = handleMIDI;
  document.getElementById("midiInputStatus").innerHTML = '<div class="success">✓ Conectado a: ' + tunerMidiInput.name + '</div>';
});

function handleMIDI(msg) {
  const [cmd, note, vel] = msg.data;
  if (cmd === 0x90 || cmd === 0x80) {
    const freq = 432 * Math.pow(2, (note - 69) / 12);
    updatePitch(freq);
  }
}

let T_A4 = 432;
const noteNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
let tAudioCtx = null, tAnalyser = null, tBuf = null, tStream = null;
let tRunning = false;

const tStart = document.getElementById("tunerStart");
const tStop = document.getElementById("tunerStop");
const tNote = document.getElementById("tNote");
const tCents = document.getElementById("tCents");
const tStatus = document.getElementById("tStatus");
const rmsVal = document.getElementById("rmsVal");
const a4Slider = document.getElementById("a4Slider");
const a4Val = document.getElementById("a4Val");
const refA4 = document.getElementById("refA4");

a4Slider.addEventListener("input", () => {
  T_A4 = Number(a4Slider.value);
  a4Val.textContent = String(T_A4);
  refA4.textContent = String(T_A4);
});

tStart.addEventListener("click", async () => {
  if (tRunning) return;
  tStart.disabled = true;
  tStatus.textContent = "Solicitando micrófono…";
  try {
    tStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation:false, noiseSuppression:false, autoGainControl:false }
    });
    tAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    await tAudioCtx.resume();
    const src = tAudioCtx.createMediaStreamSource(tStream);
    tAnalyser = tAudioCtx.createAnalyser();
    tAnalyser.fftSize = 4096;
    tBuf = new Float32Array(tAnalyser.fftSize);
    src.connect(tAnalyser);
    tRunning = true;
    tStart.disabled = false;
    tStop.disabled = false;
    tStatus.textContent = "Escuchando…";
    tickTuner();
  } catch (e) {
    console.error(e);
    tStatus.textContent = "No se pudo acceder al micrófono.";
    tStart.disabled = false;
  }
});

tStop.addEventListener("click", () => {
  tRunning = false;
  tStop.disabled = true;
  if (tStream) tStream.getTracks().forEach(tr => tr.stop());
  if (tAudioCtx) tAudioCtx.close();
  tNote.textContent = "–";
  tCents.textContent = "";
  tStatus.textContent = "Detenido.";
  rmsVal.textContent = "0.000";
});

function tickTuner(){
  if (!tRunning || !tAnalyser) return;
  tAnalyser.getFloatTimeDomainData(tBuf);
  let rms = 0;
  for (let i=0;i<tBuf.length;i++) rms += tBuf[i]*tBuf[i];
  rms = Math.sqrt(rms/tBuf.length);
  rmsVal.textContent = rms.toFixed(3);
  const f = autoCorrelate(tBuf, tAudioCtx.sampleRate);
  if (f !== -1) updatePitch(f);
  drawSpectrum();
  requestAnimationFrame(tickTuner);
}

function drawSpectrum(){
  const canvas = document.getElementById('spectrumCanvas');
  if (!canvas || !tAnalyser) return;
  const ctx = canvas.getContext('2d');
  const freqData = new Uint8Array(tAnalyser.frequencyBinCount);
  tAnalyser.getByteFrequencyData(freqData);
  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = 'rgba(11, 15, 20, 0.5)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#7c3aed';
  ctx.strokeStyle = '#4f46e5';
  ctx.lineWidth = 1;
  const barWidth = w / freqData.length;
  for (let i=0; i<freqData.length; i++){
    const barHeight = (freqData[i] / 255) * h;
    ctx.fillRect(i * barWidth, h - barHeight, barWidth - 1, barHeight);
  }
}

function updatePitch(freq){
  const semitone = 12 * Math.log2(freq / T_A4);
  const noteNumber = semitone + 9;
  const nearest = Math.round(noteNumber);
  const cents = (noteNumber - nearest) * 100;
  const noteIndex = ((nearest % 12) + 12) % 12;
  const octave = Math.floor(nearest/12) + 4;
  tNote.textContent = noteNames[noteIndex] + octave;
  const c = Math.round(cents);
  tCents.textContent = (c>0?"+":"") + c + " cents";
  tCents.style.color = Math.abs(c) < 5 ? "#22c55e" : "#ef4444";
}

function autoCorrelate(buf, sampleRate){
  const SIZE = buf.length;
  let rms = 0;
  for (let i=0;i<SIZE;i++) rms += buf[i]*buf[i];
  rms = Math.sqrt(rms/SIZE);
  if (rms < 0.01) return -1;
  let bestOffset = -1;
  let bestCorr = 0;
  for (let offset = 8; offset < 1000; offset++){
    let corr = 0;
    for (let i=0; i<SIZE-offset; i++){
      corr += buf[i] * buf[i+offset];
    }
    corr = corr / (SIZE-offset);
    if (corr > bestCorr && corr > 0.2){
      bestCorr = corr;
      bestOffset = offset;
    }
  }
  if (bestOffset === -1) return -1;
  return sampleRate / bestOffset;
}

if (navigator.requestMIDIAccess) {
  initMIDI();
}

const canvas = document.getElementById('spectrumCanvas');
if (canvas) {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
</script>
</body>
</html>
        `,
      }}
      style={{ width: "100%", minHeight: "100vh", display: "block" }}
    />
  );
}
