export default function Synthesizer() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "block" }}>
      <iframe
        srcDoc={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Harmony 432 — Sintetizador</title>
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
      width:1200px; max-width:100%;
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
    .btn.danger{
      background: linear-gradient(135deg, #ef4444, #b91c1c);
      box-shadow: 0 10px 25px rgba(239,68,68,.22);
    }
    .btn:disabled{ opacity:.55; cursor:default; transform:none; }
    .pill{
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 12px; border-radius:999px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      font-weight:600; font-size:.95rem;
    }
    input[type="range"]{ width:240px; }
    .mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono"; }
    .success{
      padding:10px 12px;
      border-radius:12px;
      background: rgba(34,197,94,.10);
      border:1px solid rgba(34,197,94,.18);
      color:#86efac;
      font-size:.92rem;
      line-height:1.35;
    }
    .keyboard{
      display:flex; gap:2px; margin-top:16px; padding:12px;
      background:rgba(0,0,0,.3); border-radius:14px; border:1px solid rgba(255,255,255,.08);
      overflow-x:auto;
    }
    .white-key{
      width:60px; height:160px;
      background:linear-gradient(180deg, #f5f5f5, #e0e0e0);
      border:1px solid #999; border-radius:0 0 8px 8px;
      cursor:pointer; user-select:none;
      display:flex; align-items:flex-end; justify-content:center;
      padding-bottom:8px; font-weight:700; font-size:11px;
      color:#333; position:relative;
    }
    .white-key:active{ background:linear-gradient(180deg, #d0d0d0, #b0b0b0); }
    .black-key{
      width:40px; height:100px;
      background:linear-gradient(180deg, #1a1a1a, #000);
      border:1px solid #000; border-radius:0 0 6px 6px;
      cursor:pointer; user-select:none;
      display:flex; align-items:flex-end; justify-content:center;
      padding-bottom:6px; font-weight:700; font-size:10px;
      color:#fff; position:relative;
      margin-left:-20px; margin-right:-20px; z-index:2;
    }
    .black-key:active{ background:linear-gradient(180deg, #333, #111); }
    .key.on{ box-shadow:inset 0 0 20px rgba(124,58,237,.5); }
    .back-btn{
      display:inline-flex; align-items:center; gap:6px; padding:8px 12px; border-radius:999px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.08); color:#e5e7eb; cursor:pointer; text-decoration:none; font-weight:600; font-size:.9rem; transition:all .2s ease;
    }
    .back-btn:hover{background:rgba(255,255,255,.12); transform:translateX(-2px);}
    select{ width: 100%; }
    @media (max-width: 860px){ .content{ grid-template-columns: 1fr; }input[type="range"]{ width: 100%; }.keyboard{ flex-direction:column; }.white-key{ width:100%; }.black-key{ margin:0; width:100%; }}
  </style>
</head>
<body>
  <div class="app">
    <header>
      <div style="display:flex; align-items:center; gap:10px;">
        <a href="/" class="back-btn">← Volver</a>
        <h1>Sintetizador 432 Hz</h1>
      </div>
      <div class="hint">Teclado + MIDI</div>
    </header>
    <div class="content">
      <div class="card">
        <h2>Sintetizador (anti-notas colgadas)</h2>
        <div class="muted">El botón <b>Panic</b> corta <b>todas</b> las voces. Usa el teclado, ratón o conecta un controlador MIDI.</div>
        <div style="margin-top:12px" class="row">
          <button class="btn" id="synthInit">Activar audio</button>
          <button class="btn danger" id="panicBtn" disabled>⚠ Panic (All Notes Off)</button>
          <span class="pill">Wave:<select id="waveSel" class="mono" style="background:transparent;color:#e5e7eb;border:none;outline:none"><option value="sine">sine</option><option value="triangle">triangle</option><option value="sawtooth" selected>sawtooth</option><option value="square">square</option></select></span>
        </div>
        <div class="row" style="margin-top:10px">
          <label class="pill">Volumen<input id="volSlider" type="range" min="0" max="1" step="0.01" value="0.8" /><span class="mono" id="volVal">0.80</span></label>
        </div>
        <div class="row" style="margin-top:10px">
          <button class="btn secondary" id="recordBtn" disabled>● Grabar MIDI</button>
          <button class="btn secondary" id="stopRecordBtn" disabled>⏹ Detener</button>
          <button class="btn secondary" id="playbackBtn" disabled>▶ Reproducir</button>
          <button class="btn secondary" id="exportMidiBtn" disabled style="background: linear-gradient(135deg, #059669, #10b981);">Exportar .mid</button>
          <span class="pill mono" id="recordStatus">Grabación: 0 eventos</span>
        </div>
        <div class="row" style="margin-top:10px">
          <input type="text" id="presetName" placeholder="Nombre del preset" style="padding:8px;border-radius:8px;background:rgba(255,255,255,.08);color:#e5e7eb;border:1px solid rgba(255,255,255,.08);width:180px">
          <button class="btn secondary" id="savePresetBtn" disabled>💾 Guardar Preset</button>
          <select id="presetSelect" class="mono" style="padding:8px;border-radius:8px;background:rgba(255,255,255,.08);color:#e5e7eb;border:1px solid rgba(255,255,255,.08);width:200px"><option>Cargar preset...</option></select>
        </div>
        <div class="keyboard" id="kbd"></div>
        <div class="muted" style="margin-top:10px">Notas activas: <span class="mono" id="activeCount">0</span></div>
      </div>
      <div class="card">
        <h2>Entrada MIDI</h2>
        <div class="success">✓ Soporte Web MIDI API</div>
        <div style="margin-top:10px" class="muted">Dispositivos conectados: <span class="mono" id="synthMidiInputCount">0</span></div>
        <div style="margin-top:10px">
          <select id="synthMidiInputSelect" class="mono" style="padding:8px; border-radius:8px; background:rgba(255,255,255,.08); color:#e5e7eb; border:1px solid rgba(255,255,255,.08);"><option>Selecciona un dispositivo MIDI...</option></select>
        </div>
        <div style="margin-top:10px" class="muted">Eventos MIDI: <span class="mono" id="midiEventCount">0</span></div>
      </div>
    </div>
  </div>

  <script>
    let midiAccess = null, midiInputs = [], synthMidiInput = null, midiEventCounter = 0;
    
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
      document.getElementById("synthMidiInputSelect").innerHTML = '<option>Selecciona un dispositivo MIDI...</option>';
      midiInputs.forEach((input, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = input.name || "Dispositivo MIDI " + (idx + 1);
        document.getElementById("synthMidiInputSelect").appendChild(opt);
      });
      document.getElementById("synthMidiInputCount").textContent = String(midiInputs.length);
    }

    document.getElementById("synthMidiInputSelect").addEventListener("change", (e) => {
      const idx = parseInt(e.target.value);
      if (isNaN(idx) || idx < 0 || idx >= midiInputs.length) {
        synthMidiInput = null;
        document.getElementById("synthMidiInputCount").textContent = "Desconectado";
      } else {
        synthMidiInput = midiInputs[idx];
        synthMidiInput.onmidimessage = handleSynthMIDI;
        document.getElementById("synthMidiInputCount").textContent = "Conectado: " + synthMidiInput.name;
      }
    });

    function handleSynthMIDI(e) {
      const [status, note, velocity] = e.data;
      midiEventCounter++;
      document.getElementById("midiEventCount").textContent = String(midiEventCounter);
      
      const freq = 432 * Math.pow(2, (note - 69) / 12);
      if (status === 144 && velocity > 0) {
        noteOn("midi_" + note, freq);
        if (isRecording) {
          recordedEvents.push({
            type: "noteOn",
            note: note,
            freq: freq,
            time: sAudioCtx.currentTime - recordStartTime
          });
        }
      } else if (status === 128 || (status === 144 && velocity === 0)) {
        noteOff("midi_" + note);
        if (isRecording) {
          recordedEvents.push({
            type: "noteOff",
            note: note,
            time: sAudioCtx.currentTime - recordStartTime
          });
        }
      }
    }

    let sAudioCtx = null, master = null, synthReady = false;
    const voices = new Map();
    const synthInit = document.getElementById("synthInit");
    const panicBtn = document.getElementById("panicBtn");
    const waveSel = document.getElementById("waveSel");
    const volSlider = document.getElementById("volSlider");
    const volVal = document.getElementById("volVal");
    const activeCount = document.getElementById("activeCount");
    const kbd = document.getElementById("kbd");
    const recordBtn = document.getElementById("recordBtn");
    const stopRecordBtn = document.getElementById("stopRecordBtn");
    const playbackBtn = document.getElementById("playbackBtn");
    const recordStatus = document.getElementById("recordStatus");
    const presetName = document.getElementById("presetName");
    const savePresetBtn = document.getElementById("savePresetBtn");
    const presetSelect = document.getElementById("presetSelect");
    
    let recordedEvents = [];
    let isRecording = false;
    let recordStartTime = 0;

    function noteOn(id, freq) {
      if (!sAudioCtx || !master || voices.has(id)) return;
      const osc = sAudioCtx.createOscillator();
      const gain = sAudioCtx.createGain();
      const waveType = waveSel.value || 'sawtooth';
      try {
        osc.type = waveType;
      } catch (e) {
        osc.type = 'sine';
      }
      osc.frequency.value = freq;
      const now = sAudioCtx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(0, now);
      const ampBoost = (waveType === 'sine' || waveType === 'triangle') ? 0.25 : 0.15;
      gain.gain.linearRampToValueAtTime(ampBoost, now + 0.01);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now);
      voices.set(id, { osc, gain, startTime: now });
      updateActive();
    }

    function noteOff(id) {
      const voice = voices.get(id);
      if (!voice || !sAudioCtx) return;
      const now = sAudioCtx.currentTime;
      voice.gain.gain.cancelScheduledValues(now);
      voice.gain.gain.setTargetAtTime(1e-4, now, 0.03);
      try { voice.osc.stop(now + 0.12); } catch (e) {}
      voices.delete(id);
      updateActive();
    }

    function panicAllNotesOff() {
      if (!sAudioCtx) return;
      const now = sAudioCtx.currentTime;
      for (const [id, voice] of voices) {
        voice.gain.gain.cancelScheduledValues(now);
        voice.gain.gain.setValueAtTime(0, now);
        try { voice.osc.stop(now + 0.02); } catch (e) {}
        voices.delete(id);
      }
      updateActive();
    }

    function updateActive() {
      activeCount.textContent = String(voices.size);
      document.querySelectorAll(".key").forEach(el => {
        voices.has(el.dataset.note) ? el.classList.add("on") : el.classList.remove("on");
      });
    }

    volSlider.addEventListener("input", () => {
      volVal.textContent = Number(volSlider.value).toFixed(2);
      if (master) master.gain.value = Number(volSlider.value);
    });

    synthInit.addEventListener("click", async () => {
      if (!synthReady) {
        sAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        await sAudioCtx.resume();
        master = sAudioCtx.createGain();
        master.gain.value = Number(volSlider.value);
        master.connect(sAudioCtx.destination);
        synthReady = true;
        panicBtn.disabled = false;
        recordBtn.disabled = false;
        savePresetBtn.disabled = false;
        synthInit.textContent = "Audio activo";
        synthInit.disabled = true;
        loadPresetsFromStorage();
        if (navigator.requestMIDIAccess) initMIDI();
      }
    });

    recordBtn.addEventListener("click", () => {
      isRecording = true;
      recordedEvents = [];
      recordStartTime = sAudioCtx.currentTime;
      recordBtn.disabled = true;
      stopRecordBtn.disabled = false;
      playbackBtn.disabled = true;
      recordStatus.textContent = "Grabando...";
    });

    stopRecordBtn.addEventListener("click", () => {
      isRecording = false;
      recordBtn.disabled = false;
      stopRecordBtn.disabled = true;
      playbackBtn.disabled = recordedEvents.length === 0;
      const exportBtn = document.getElementById("exportMidiBtn");
      if (exportBtn) exportBtn.disabled = recordedEvents.length === 0;
      recordStatus.textContent = "Grabación: " + recordedEvents.length + " eventos";
    });

    function exportMidiFile() {
      if (recordedEvents.length === 0) return;
      const midiData = createMidiFile(recordedEvents);
      const blob = new Blob([midiData], { type: 'audio/midi' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'harmony432_' + new Date().getTime() + '.mid';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    function createMidiFile(events) {
      const trackData = [];
      let currentTime = 0;
      events.forEach(event => {
        const deltaTime = Math.round((event.time - currentTime) * 1000);
        currentTime = event.time;
        if (event.type === 'noteOn') {
          const note = Math.round(69 + 12 * Math.log2(event.freq / 432));
          trackData.push(...encodeVariableLength(deltaTime));
          trackData.push(0x90, Math.max(0, Math.min(127, note)), 100);
        } else if (event.type === 'noteOff') {
          const note = Math.round(69 + 12 * Math.log2(event.freq / 432));
          trackData.push(...encodeVariableLength(deltaTime));
          trackData.push(0x80, Math.max(0, Math.min(127, note)), 0);
        }
      });
      trackData.push(...encodeVariableLength(0));
      trackData.push(0xFF, 0x2F, 0x00);
      return createMidiHeader([trackData]);
    }

    function encodeVariableLength(value) {
      let result = [value & 0x7F];
      value >>= 7;
      while (value > 0) {
        result.unshift((value & 0x7F) | 0x80);
        value >>= 7;
      }
      return result;
    }

    function createMidiHeader(tracks) {
      const headerChunk = new Uint8Array(14);
      headerChunk.set([0x4D, 0x54, 0x68, 0x64], 0);
      headerChunk.set([0x00, 0x00, 0x00, 0x06], 4);
      headerChunk.set([0x00, 0x00], 8);
      headerChunk.set([0x00, tracks.length], 10);
      headerChunk.set([0x03, 0xC0], 12);
      let midiData = Array.from(headerChunk);
      tracks.forEach(track => {
        const trackChunk = new Uint8Array(8 + track.length);
        trackChunk.set([0x4D, 0x54, 0x72, 0x6B], 0);
        const length = track.length;
        trackChunk[4] = (length >> 24) & 0xFF;
        trackChunk[5] = (length >> 16) & 0xFF;
        trackChunk[6] = (length >> 8) & 0xFF;
        trackChunk[7] = length & 0xFF;
        trackChunk.set(track, 8);
        midiData = midiData.concat(Array.from(trackChunk));
      });
      return new Uint8Array(midiData);
    }

    const exportMidiBtn = document.getElementById("exportMidiBtn");
    if (exportMidiBtn) {
      exportMidiBtn.addEventListener("click", exportMidiFile);
    }

    playbackBtn.addEventListener("click", () => {
      if (recordedEvents.length === 0) return;
      recordBtn.disabled = true;
      playbackBtn.disabled = true;
      const playbackStartTime = sAudioCtx.currentTime;
      recordedEvents.forEach(event => {
        const delay = event.time;
        setTimeout(() => {
          if (event.type === "noteOn") {
            noteOn("playback_" + event.note, event.freq);
          } else if (event.type === "noteOff") {
            noteOff("playback_" + event.note);
          }
        }, delay * 1000);
      });
      setTimeout(() => {
        recordBtn.disabled = false;
        playbackBtn.disabled = false;
      }, (recordedEvents[recordedEvents.length - 1]?.time || 0) * 1000 + 500);
    });

    function savePresetsToStorage() {
      const presets = JSON.parse(localStorage.getItem("h432_presets") || "{}");
      const name = presetName.value.trim() || "Preset " + new Date().toLocaleTimeString();
      presets[name] = {
        wave: waveSel.value,
        volume: volSlider.value,
        recordedEvents: recordedEvents
      };
      localStorage.setItem("h432_presets", JSON.stringify(presets));
      presetName.value = "";
      loadPresetsFromStorage();
    }

    function loadPresetsFromStorage() {
      const presets = JSON.parse(localStorage.getItem("h432_presets") || "{}");
      presetSelect.innerHTML = '<option>Cargar preset...</option>';
      Object.keys(presets).forEach(name => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        presetSelect.appendChild(opt);
      });
    }

    savePresetBtn.addEventListener("click", savePresetsToStorage);

    presetSelect.addEventListener("change", (e) => {
      if (e.target.value === "") return;
      const presets = JSON.parse(localStorage.getItem("h432_presets") || "{}");
      const preset = presets[e.target.value];
      if (preset) {
        waveSel.value = preset.wave;
        volSlider.value = preset.volume;
        volVal.textContent = Number(preset.volume).toFixed(2);
        if (master) master.gain.value = Number(preset.volume);
        recordedEvents = preset.recordedEvents || [];
        playbackBtn.disabled = recordedEvents.length === 0;
        recordStatus.textContent = "Grabación: " + recordedEvents.length + " eventos";
        e.target.value = "";
      }
    });

    panicBtn.addEventListener("click", () => panicAllNotesOff());
    window.addEventListener("pointerup", () => panicAllNotesOff(), { passive: true });
    window.addEventListener("pointercancel", () => panicAllNotesOff(), { passive: true });
    window.addEventListener("blur", () => panicAllNotesOff());
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) panicAllNotesOff();
    });

    const baseNotes = [
      ["C3", 130.81], ["D3", 146.83], ["E3", 164.81], ["F3", 174.61], ["G3", 196.00], ["A3", 216], ["B3", 243.94],
      ["C4", 261.63], ["D4", 293.66], ["E4", 329.63], ["F4", 349.23], ["G4", 392.00], ["A4", 432.00], ["B4", 493.88],
      ["C5", 523.25], ["D5", 587.33], ["E5", 659.25], ["F5", 698.46], ["G5", 784.00], ["A5", 864.00], ["B5", 987.77]
    ];

    baseNotes.forEach(([name, freq]) => {
      const isWhite = "CDEFGAB".includes(name[0]);
      const btn = document.createElement("button");
      btn.className = "key " + (isWhite ? "white-key" : "black-key");
      btn.textContent = name;
      btn.dataset.note = name;
      btn.addEventListener("pointerdown", (e) => { e.preventDefault(); if (synthReady) noteOn(e.target, freq); });
      btn.addEventListener("pointerup", (e) => { e.preventDefault(); noteOff(e.target); });
      btn.addEventListener("pointerleave", (e) => { noteOff(e.target); });
      kbd.appendChild(btn);
    });
  </script>
</body>
</html>`}
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Sintetizador 432 Hz"
      />
    </div>
  );
}
