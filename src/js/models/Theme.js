function renderPalettes() {
  const el = document.getElementById('paletteGrid');
  if(!el) return;
  el.innerHTML = Object.values(MODELS).map(m=>`
    <div class="palette-card ${G.theme===m.id?'selected':''}" onclick="selectTheme('${m.id}')" id="pal-${m.id}">
      <div class="palette-preview">${m.preview.map(c=>`<span style="background:${c}"></span>`).join('')}</div>
      <div class="palette-name">${m.name}</div>
      <div class="palette-desc">${m.desc}</div>
    </div>
  `).join('');
}

function renderThemeBig() {
  const el = document.getElementById('themeBigGrid');
  if(!el) return;
  el.innerHTML = Object.values(MODELS).map(m=>`
    <div class="palette-card ${G.theme===m.id?'selected':''}" onclick="selectTheme('${m.id}')" id="bigpal-${m.id}" style="border-radius:14px;overflow:hidden;cursor:pointer;border:2px solid ${G.theme===m.id?'var(--a3)':'var(--border)'}">
      <div class="palette-preview" style="height:60px">${m.preview.map(c=>`<span style="background:${c}"></span>`).join('')}</div>
      <div style="padding:.75rem 1rem;background:var(--bg2)">
        <div class="font-syne" style="font-size:.9rem;font-weight:700;margin-bottom:.2rem">${m.name}</div>
        <div style="font-size:.72rem;color:var(--muted)">${m.desc}</div>
      </div>
    </div>
  `).join('');
}

function selectTheme(id) {
  G.theme = id;
  renderPalettes();
  renderThemeBig();
  renderSelectedTheme();
  toast('Tema "'+MODELS[id].name+'" selecionado','ok');
}

function renderSelectedTheme() {
  const el = document.getElementById('selectedThemeInfo');
  if(!el) return;
  const m = MODELS[G.theme];
  if(!m) return;
  el.innerHTML = `
    <div class="palette-preview" style="height:24px;border-radius:6px;overflow:hidden;margin-bottom:.6rem">${m.preview.map(c=>`<span style="background:${c}"></span>`).join('')}</div>
    <div class="font-syne" style="font-size:.85rem;font-weight:700">${m.name}</div>
    <div style="font-size:.72rem;color:var(--muted);margin-top:.2rem">${m.desc}</div>
  `;
}