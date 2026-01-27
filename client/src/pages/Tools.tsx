import { useEffect } from "react";

/**
 * Página integrada de las tres herramientas: Afinador, Sintetizador y Conversor
 * Con soporte completo para dispositivos MIDI externos
 */
export default function Tools() {
  useEffect(() => {
    // El script se ejecutará automáticamente cuando el componente se monte
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Harmony 432 — Afinador · Sintetizador · Conversor</title>
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
    .tabs{
      display:flex; gap:8px; padding:12px 16px;
      border-bottom:1px solid rgba(255,255,255,.06);
      flex-wrap:wrap;
    }
    .tab{
      border:none; cursor:pointer;
      padding:10px 14px;
      border-radius:999px;
      font-weight:600; font-size:.95rem;
      color:#e5e7eb;
      background: rgba(255,255,255,.06);
      transition: transform .12s ease, background .12s ease;
    }
    .tab:hover{ transform: translateY(-1px); background: rgba(255,255,255,.09); }
    .tab.active{
      background: linear-gradient(135deg, #7c3aed, #4f46e5);
      box-shadow: 0 10px 25px rgba(79,70,229,.35);
    }
    .content{ padding:18px 18px 22px; display:grid; gap:16px; }
    .panel{
      display:none;
      grid-template-columns: 1fr 1fr;
      gap:16px;
    }
    .panel.active{ display:grid; }
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
    .btn.danger{
      background: linear-gradient(135deg, #ef4444, #b91c1c);
      box-shadow: 0 10px 25px rgba(239,68,68,.22);
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
    input[type="file"]{ color:#9ca3af; }
    .kbd{
      display:grid;
      grid-template-columns: repeat(14, 1fr);
      gap:8px;
      margin-top:12px;
    }
    .key{
      padding:14px 10px;
      border-radius:14px;
      border:1px solid rgba(255,255,255,.07);
      background: rgba(255,255,255,.05);
      color:#e5e7eb;
      font-weight:700;
      cursor:pointer;
      user-select:none;
      outline:none;
    }
    .key:active{ transform: translateY(1px); }
    .key.on{ background: rgba(124,58,237,.35); border-color: rgba(124,58,237,.55); }
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
    .midi-status{
      display:inline-flex; align-items:center; gap:6px;
      padding:6px 10px; border-radius:999px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      font-weight:600; font-size:.85rem;
    }
    .midi-status.connected{
      background: rgba(34,197,94,.15);
      border-color: rgba(34,197,94,.3);
      color:#86efac;
    }
    .midi-dot{
      width:8px; height:8px; border-radius:50%;
      background: currentColor;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @media (max-width: 860px){
      .panel.active{ grid-template-columns: 1fr; }
      input[type="range"]{ width: 100%; }
    }
  </style>
</head>

<body>
  <div class="app">
    <header>
      <h1>Harmony 432 — Herramientas</h1>
      <div class="hint">Afinador · Sintetizador · Conversor + MIDI</div>
    </header>

    <div class="tabs">
      <button class="tab active" data-tab="tuner">Afinador</button>
      <button class="tab" data-tab="synth">Sintetizador</button>
      <button class="tab" data-tab="converter">Conversor</button>
      <span style="margin-left:auto">
        <span class="midi-status" id="midiStatus">
          <span class="midi-dot"></span>
          <span>MIDI: No conectado</span>
        </span>
      </span>
    </div>

    <div class="content">

      <!-- AFINADOR -->
      <div class="panel active" id="panel-tuner">
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

      <!-- SINTETIZADOR -->
      <div class="panel" id="panel-synth">
        <div class="card">
          <h2>Sintetizador (anti-notas colgadas)</h2>
          <div class="muted">
            El botón <b>Panic</b> corta <b>todas</b> las voces. Usa el teclado, ratón o conecta un controlador MIDI.
          </div>

          <div class="row" style="margin-top:12px">
            <button class="btn" id="synthInit">Activar audio</button>
            <button class="btn danger" id="panicBtn" disabled>⚠ Panic (All Notes Off)</button>
            <span class="pill">Wave:
              <select id="waveSel" class="mono" style="background:transparent;color:#e5e7eb;border:none;outline:none">
                <option value="sine">sine</option>
                <option value="triangle">triangle</option>
                <option value="sawtooth" selected>sawtooth</option>
                <option value="square">square</option>
              </select>
            </span>
          </div>

          <div class="row" style="margin-top:10px">
            <label class="pill">Volumen
              <input id="volSlider" type="range" min="0" max="1" step="0.01" value="0.8" />
              <span class="mono" id="volVal">0.80</span>
            </label>
          </div>

          <div class="kbd" id="kbd"></div>
          <div class="muted" style="margin-top:10px">Notas activas: <span class="mono" id="activeCount">0</span></div>
        </div>

        <div class="card">
          <h2>Entrada MIDI</h2>
          <div id="synthMidiStatus" class="warn">
            Buscando dispositivos MIDI...
          </div>
          <div style="margin-top:10px" class="muted">
            Dispositivos conectados: <span class="mono" id="synthMidiInputCount">0</span>
          </div>
          <div style="margin-top:10px">
            <select id="synthMidiInputSelect" class="mono" style="padding:8px; border-radius:8px; background:rgba(255,255,255,.08); color:#e5e7eb; border:1px solid rgba(255,255,255,.08);">
              <option>Selecciona un dispositivo MIDI...</option>
            </select>
          </div>
          <div style="margin-top:10px" class="muted">
            Eventos MIDI: <span class="mono" id="midiEventCount">0</span>
          </div>
        </div>
      </div>

      <!-- CONVERSOR -->
      <div class="panel" id="panel-converter">
        <div class="card">
          <h2>Conversor (A=440 → A=432)</h2>
          <div class="muted">
            Para "convertir" audio hay dos enfoques:
            <br><br>
            <b>Modo Rápido</b> (sin librerías): cambia el tono pero puede alterar timbre/duración.
            <br>
            <b>Modo Pro</b> (recomendado): usa un motor tipo SoundTouch / RubberBand (requiere librería).
          </div>

          <div class="row" style="margin-top:12px">
            <input type="file" id="fileIn" accept="audio/*" />
          </div>

          <div class="row" style="margin-top:10px">
            <span class="pill">Factor 440→432: <span class="mono" id="ratioVal">0.981818</span></span>
            <button class="btn secondary" id="playOrig" disabled>▶ Original</button>
            <button class="btn secondary" id="playConv" disabled>▶ Convertido</button>
          </div>

          <div class="row" style="margin-top:10px">
            <button class="btn" id="convertFast" disabled>Convertir (rápido)</button>
            <button class="btn secondary" id="downloadWav" disabled>Descargar WAV</button>
          </div>

          <div class="muted" style="margin-top:10px" id="convStatus">Carga un archivo para empezar.</div>
        </div>

        <div class="card">
          <h2>Modo Pro (lo dejamos preparado)</h2>
          <div class="warn">
            Para conversión de calidad (preservar transitorios/formantes) necesitas un motor dedicado (SoundTouch/RubberBand).
            Si quieres, te lo integro en el siguiente paso con una librería por CDN o WASM.
          </div>
          <div class="muted" style="margin-top:10px">
            Mientras tanto, el modo "rápido" sirve para validar flujo y UI.
          </div>
        </div>
      </div>

    </div>
  </div>

<script>
/* =========================
   MIDI SUPPORT
========================= */
let midiAccess = null;
let midiInputs = [];
let tunerMidiInput = null;
let synthMidiInput = null;
let midiEventCounter = 0;

async function initMIDI() {
  try {
    midiAccess = await navigator.requestMIDIAccess();
    console.log("MIDI Access granted");
    
    updateMIDIInputs();
    
    midiAccess.addEventListener("statechange", updateMIDIInputs);
  } catch (e) {
    console.warn("MIDI not supported or denied:", e);
    document.getElementById("midiStatus").innerHTML = '<span class="midi-dot"></span><span>MIDI: No disponible</span>';
  }
}

function updateMIDIInputs() {
  midiInputs = Array.from(midiAccess.inputs.values());
  
  // Update tuner MIDI inputs
  const tunerSelect = document.getElementById("midiInputSelect");
  const tunerCount = document.getElementById("midiInputCount");
  tunerSelect.innerHTML = '<option>Selecciona un dispositivo MIDI...</option>';
  midiInputs.forEach((input, idx) => {
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = input.name || "Dispositivo MIDI " + (idx + 1);
    tunerSelect.appendChild(option);
  });
  tunerCount.textContent = String(midiInputs.length);
  
  // Update synth MIDI inputs
  const synthSelect = document.getElementById("synthMidiInputSelect");
  const synthCount = document.getElementById("synthMidiInputCount");
  synthSelect.innerHTML = '<option>Selecciona un dispositivo MIDI...</option>';
  midiInputs.forEach((input, idx) => {
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = input.name || "Dispositivo MIDI " + (idx + 1);
    synthSelect.appendChild(option);
  });
  synthCount.textContent = String(midiInputs.length);
  
  // Update status
  const status = document.getElementById("midiStatus");
  if (midiInputs.length > 0) {
    status.classList.add("connected");
    status.innerHTML = '<span class="midi-dot"></span><span>MIDI: ' + midiInputs.length + ' dispositivo(s) conectado(s)</span>';
  } else {
    status.classList.remove("connected");
    status.innerHTML = '<span class="midi-dot"></span><span>MIDI: No conectado</span>';
  }
}

document.getElementById("midiInputSelect").addEventListener("change", (e) => {
  const idx = parseInt(e.target.value);
  if (isNaN(idx)) {
    tunerMidiInput = null;
    document.getElementById("midiInputStatus").innerHTML = '<div class="warn">Dispositivo desconectado</div>';
    return;
  }
  
  tunerMidiInput = midiInputs[idx];
  tunerMidiInput.onmidimessage = handleTunerMIDI;
  document.getElementById("midiInputStatus").innerHTML = '<div class="success">✓ Conectado a: ' + tunerMidiInput.name + '</div>';
});

document.getElementById("synthMidiInputSelect").addEventListener("change", (e) => {
  const idx = parseInt(e.target.value);
  if (isNaN(idx)) {
    synthMidiInput = null;
    document.getElementById("synthMidiStatus").innerHTML = '<div class="warn">Dispositivo desconectado</div>';
    return;
  }
  
  synthMidiInput = midiInputs[idx];
  synthMidiInput.onmidimessage = handleSynthMIDI;
  document.getElementById("synthMidiStatus").innerHTML = '<div class="success">✓ Conectado a: ' + synthMidiInput.name + '</div>';
});

function handleTunerMIDI(msg) {
  const [cmd, note, vel] = msg.data;
  
  // Note On (0x90) o Note Off (0x80)
  if (cmd === 0x90 || cmd === 0x80) {
    // Convertir MIDI note a frecuencia (A4 = 69 = 432 Hz)
    const freq = 432 * Math.pow(2, (note - 69) / 12);
    updatePitch(freq);
  }
}

function handleSynthMIDI(msg) {
  const [cmd, note, vel] = msg.data;
  midiEventCounter++;
  document.getElementById("midiEventCount").textContent = String(midiEventCounter);
  
  // Note On (0x90)
  if (cmd === 0x90 && vel > 0) {
    const freq = 432 * Math.pow(2, (note - 69) / 12);
    noteOn("midi_" + note, freq);
  }
  // Note Off (0x80) o Note On con vel=0
  else if (cmd === 0x80 || (cmd === 0x90 && vel === 0)) {
    noteOff("midi_" + note);
  }
}

// Initialize MIDI on page load
if (navigator.requestMIDIAccess) {
  initMIDI();
}

/* =========================
   TABS
========================= */
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const tab = btn.dataset.tab;
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    document.getElementById("panel-"+tab).classList.add("active");
  });
});

/* =========================
   AFINADOR
========================= */
let T_A4 = 432;
const noteNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
let tAudioCtx = null, tAnalyser = null, tBuf = null, tStream = null;
let tRunning = false;

const tStart = document.getElementById("tunerStart");
const tStop  = document.getElementById("tunerStop");
const tNote  = document.getElementById("tNote");
const tCents = document.getElementById("tCents");
const tStatus= document.getElementById("tStatus");
const rmsVal = document.getElementById("rmsVal");

const a4Slider = document.getElementById("a4Slider");
const a4Val    = document.getElementById("a4Val");
const refA4    = document.getElementById("refA4");

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
    tStop.disabled  = false;
    tStatus.textContent = "Escuchando…";
    tickTuner();
  } catch (e) {
    console.error(e);
    tStatus.textContent = "No se pudo acceder al micrófono. Usa https:// o http://localhost y permite el permiso.";
    tStart.disabled = false;
  }
});

tStop.addEventListener("click", () => stopTuner());

function stopTuner(){
  tRunning = false;
  tStop.disabled = true;

  if (tStream) {
    tStream.getTracks().forEach(tr => tr.stop());
    tStream = null;
  }
  if (tAudioCtx) {
    tAudioCtx.close();
    tAudioCtx = null;
  }
  tNote.textContent = "–";
  tCents.textContent = "";
  tStatus.textContent = "Detenido.";
  rmsVal.textContent = "0.000";
}

function tickTuner(){
  if (!tRunning || !tAnalyser || !tAudioCtx) return;
  tAnalyser.getFloatTimeDomainData(tBuf);

  let rms = 0;
  for (let i=0;i<tBuf.length;i++) rms += tBuf[i]*tBuf[i];
  rms = Math.sqrt(rms/tBuf.length);
  rmsVal.textContent = rms.toFixed(3);

  const f = autoCorrelate(tBuf, tAudioCtx.sampleRate);
  if (f !== -1) updatePitch(f);

  requestAnimationFrame(tickTuner);
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
  let lastCorr = 1;

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

    if (bestOffset !== -1 && corr < lastCorr && corr < bestCorr*0.7) {
    }
    lastCorr = corr;
  }

  if (bestOffset === -1) return -1;
  return sampleRate / bestOffset;
}

/* =========================
   SINTETIZADOR + PANIC REAL
========================= */
let sAudioCtx = null;
let master = null;
const voices = new Map();
let synthReady = false;

const synthInit = document.getElementById("synthInit");
const panicBtn  = document.getElementById("panicBtn");
const waveSel   = document.getElementById("waveSel");
const volSlider = document.getElementById("volSlider");
const volVal    = document.getElementById("volVal");
const activeCount = document.getElementById("activeCount");
const kbd = document.getElementById("kbd");

volSlider.addEventListener("input", () => {
  volVal.textContent = Number(volSlider.value).toFixed(2);
  if (master) master.gain.value = Number(volSlider.value);
});

synthInit.addEventListener("click", async () => {
  if (synthReady) return;
  sAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  await sAudioCtx.resume();
  master = sAudioCtx.createGain();
  master.gain.value = Number(volSlider.value);
  master.connect(sAudioCtx.destination);
  synthReady = true;
  panicBtn.disabled = false;
  synthInit.textContent = "Audio activo";
  synthInit.disabled = true;
});

panicBtn.addEventListener("click", () => panicAllNotesOff());

function noteOn(noteId, freq){
  if (!sAudioCtx || !master) return;
  if (voices.has(noteId)) return;

  const osc = sAudioCtx.createOscillator();
  const gain= sAudioCtx.createGain();

  osc.type = waveSel.value;
  osc.frequency.value = freq;

  const t = sAudioCtx.currentTime;
  gain.gain.cancelScheduledValues(t);
  gain.gain.setValueAtTime(0.0, t);
  gain.gain.linearRampToValueAtTime(0.22, t + 0.01);

  osc.connect(gain);
  gain.connect(master);
  osc.start(t);

  voices.set(noteId, {osc, gain});
  updateActive();
}

function noteOff(noteId){
  const v = voices.get(noteId);
  if (!v || !sAudioCtx) return;

  const t = sAudioCtx.currentTime;
  v.gain.gain.cancelScheduledValues(t);
  v.gain.gain.setTargetAtTime(0.0001, t, 0.03);
  try { v.osc.stop(t + 0.12); } catch(_) {}
  voices.delete(noteId);
  updateActive();
}

function panicAllNotesOff(){
  if (!sAudioCtx) return;
  const t = sAudioCtx.currentTime;
  for (const [noteId, v] of voices){
    v.gain.gain.cancelScheduledValues(t);
    v.gain.gain.setValueAtTime(0.0, t);
    try { v.osc.stop(t + 0.02); } catch(_) {}
    voices.delete(noteId);
  }
  updateActive();
}

function updateActive(){
  activeCount.textContent = String(voices.size);
  document.querySelectorAll(".key").forEach(k => {
    if (voices.has(k.dataset.note)) k.classList.add("on");
    else k.classList.remove("on");
  });
}

window.addEventListener("pointerup", () => panicAllNotesOff(), {passive:true});
window.addEventListener("pointercancel", () => panicAllNotesOff(), {passive:true});
window.addEventListener("blur", () => panicAllNotesOff());
document.addEventListener("visibilitychange", () => { if (document.hidden) panicAllNotesOff(); });

const baseNotes = [
  ["C4",261.63],["D4",293.66],["E4",329.63],["F4",349.23],["G4",392.00],["A4",432.00],["B4",493.88],
  ["C5",523.25],["D5",587.33],["E5",659.25],["F5",698.46],["G5",784.00],["A5",864.00],["B5",987.77],
];

baseNotes.forEach(([id,f]) => {
  const b = document.createElement("button");
  b.className = "key";
  b.textContent = id;
  b.dataset.note = id;
  b.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    if (!synthReady) return;
    noteOn(id, f);
  });
  b.addEventListener("pointerup", (e) => {
    e.preventDefault();
    noteOff(id);
  });
  b.addEventListener("pointerleave", (e) => {
    noteOff(id);
  });
  kbd.appendChild(b);
});

/* =========================
   CONVERSOR (MODO RÁPIDO)
========================= */
const RATIO_440_432 = 432/440;
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

fileIn.addEventListener("change", async () => {
  const f = fileIn.files?.[0];
  if (!f) return;

  convStatus.textContent = "Cargando y decodificando…";
  cAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  await cAudioCtx.resume();

  const arr = await f.arrayBuffer();
  originalBuffer = await cAudioCtx.decodeAudioData(arr);

  convertedBuffer = null;
  playOrig.disabled = false;
  playConv.disabled = true;
  convertFast.disabled = false;
  downloadWav.disabled = true;

  convStatus.textContent = "Archivo listo. Puedes escuchar el original o convertir.";
});

playOrig.addEventListener("click", () => playBuffer(originalBuffer));
playConv.addEventListener("click", () => playBuffer(convertedBuffer));

function playBuffer(buf){
  if (!cAudioCtx || !buf) return;
  const src = cAudioCtx.createBufferSource();
  src.buffer = buf;
  src.connect(cAudioCtx.destination);
  src.start();
}

convertFast.addEventListener("click", async () => {
  if (!originalBuffer) return;
  convStatus.textContent = "Convirtiendo (modo rápido)…";

  const sr = originalBuffer.sampleRate;
  const ch = originalBuffer.numberOfChannels;

  const newLength = Math.ceil(originalBuffer.length / RATIO_440_432);
  const off = new OfflineAudioContext(ch, newLength, sr);

  const src = off.createBufferSource();
  src.buffer = originalBuffer;
  src.playbackRate.value = RATIO_440_432;
  src.connect(off.destination);
  src.start(0);

  convertedBuffer = await off.startRendering();

  playConv.disabled = false;
  downloadWav.disabled = false;
  convStatus.textContent = "Convertido (rápido). Para calidad pro, hay que usar SoundTouch/RubberBand.";
});

downloadWav.addEventListener("click", () => {
  if (!convertedBuffer) return;
  const wav = audioBufferToWav(convertedBuffer);
  const blob = new Blob([wav], {type:"audio/wav"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "converted_432.wav";
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 2000);
});

function audioBufferToWav(buffer){
  const numCh = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const length = buffer.length * numCh * 2;
  const ab = new ArrayBuffer(44 + length);
  const dv = new DataView(ab);

  let offset = 0;
  function writeString(s){
    for (let i=0;i<s.length;i++) dv.setUint8(offset++, s.charCodeAt(i));
  }
  function writeUint32(v){ dv.setUint32(offset, v, true); offset += 4; }
  function writeUint16(v){ dv.setUint16(offset, v, true); offset += 2; }

  writeString("RIFF");
  writeUint32(36 + length);
  writeString("WAVE");
  writeString("fmt ");
  writeUint32(16);
  writeUint16(1);
  writeUint16(numCh);
  writeUint32(sampleRate);
  writeUint32(sampleRate * numCh * 2);
  writeUint16(numCh * 2);
  writeUint16(16);
  writeString("data");
  writeUint32(length);

  const channels = [];
  for (let c=0;c<numCh;c++) channels.push(buffer.getChannelData(c));
  for (let i=0;i<buffer.length;i++){
    for (let c=0;c<numCh;c++){
      let s = Math.max(-1, Math.min(1, channels[c][i]));
      dv.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      offset += 2;
    }
  }
  return ab;
}
</script>
</body>
</html>
        `,
      }}
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "block",
      }}
    />
  );
}
