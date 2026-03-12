function renderAllProjectForms() {
  const container = document.getElementById('projectForms');
  if(!container) return;
  container.innerHTML = '';
  G.projects.forEach(p => {
    const wrap = document.createElement('div');
    wrap.className = 'proj-form-wrap';
    wrap.dataset.pid = p.id;
    wrap.style.display = p.id === G.activeProjectId ? '' : 'none';
    wrap.innerHTML = buildProjectForm(p);
    container.appendChild(wrap);
  });
}

function buildProjectForm(p) {
  const num = G.projects.findIndex(x=>x.id===p.id)+1;
  return `
  <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1.75rem;padding:.85rem 1.1rem;background:var(--bg2);border-radius:var(--r);border:1px solid var(--border)">
    <div style="width:40px;height:40px;border-radius:10px;background:${p.color};display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-size:1rem;font-weight:800;color:#fff;flex-shrink:0">${String(num).padStart(2,'0')}</div>
    <div style="flex:1">
      <div style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700" id="formTitle-${p.id}">${p.name||'Novo Projeto'}</div>
      <div style="font-size:.72rem;color:var(--muted);margin-top:.15rem">Preencha todas as seções abaixo</div>
    </div>
    ${G.mode!=='single'?`<button class="btn btn-danger btn-xs" onclick="removeProject('${p.id}')">✕ Remover</button>`:''}
  </div>

  ${buildSection(p,'ident','🏷️ Identificação',true,`
    <div class="field-row c2">
      <div class="field"><label>Nome do Projeto</label>
        <input value="${esc(p.name)}" placeholder="Ex: Lean no Bloco Cirúrgico" oninput="pset('${p.id}','name',this.value);document.getElementById('formTitle-${p.id}').textContent=this.value||'Novo Projeto';renderProjectList()">
      </div>
      <div class="field"><label>Líder / Responsável</label>
        <input value="${esc(p.leader)}" placeholder="Nome do líder" oninput="pset('${p.id}','leader',this.value);renderProjectList()">
      </div>
      <div class="field"><label>Data de Início</label>
        <input type="date" value="${p.periodo_inicio}" oninput="pset('${p.id}','periodo_inicio',this.value)">
      </div>
      <div class="field"><label>Data de Conclusão</label>
        <input type="date" value="${p.periodo_fim}" oninput="pset('${p.id}','periodo_fim',this.value)">
      </div>
      <div class="field"><label>Status</label>
        <select oninput="pset('${p.id}','status',this.value)">
          <option ${p.status==='Concluído'?'selected':''}>Concluído</option>
          <option ${p.status==='Em andamento'?'selected':''}>Em andamento</option>
          <option ${p.status==='Pausado'?'selected':''}>Pausado</option>
          <option ${p.status==='Cancelado'?'selected':''}>Cancelado</option>
        </select>
      </div>
    </div>
  `)}

  ${buildSection(p,'objetivo','🎯 Objetivo',true,`
    <div class="field">
      <label>Qual problema ou oportunidade o projeto buscou resolver?</label>
      <textarea rows="4" placeholder="Descreva o contexto, o problema identificado e o que o projeto buscou alcançar..." oninput="pset('${p.id}','objetivo',this.value);renderProjectList()">${esc(p.objetivo)}</textarea>
    </div>
  `)}

  ${buildSection(p,'team','👥 Equipe',false,`
    <div class="rep-list" id="team-${p.id}">
      ${p.team.map((t,i)=>buildTeamItem(p.id,i)).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','team',{nome:'',cargo:''})">+ Adicionar membro</button>
  `)}

  ${buildSection(p,'etapas','🪜 Etapas do Projeto',false,`
    <div class="rep-list" id="etapas-${p.id}">
      ${p.etapas.map((e,i)=>buildEtapaItem(p.id,i)).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','etapas',{titulo:'',descricao:''})">+ Adicionar etapa</button>
  `)}

  ${buildSection(p,'marcos','📍 Marcos do Projeto',false,`
    <div class="rep-list" id="marcos-${p.id}">
      ${p.marcos.map((m,i)=>buildMarcoItem(p.id,i)).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','marcos',{data:'',entrega:''})">+ Adicionar marco</button>
  `)}

  ${buildSection(p,'indicadores','📊 Indicadores KPI',false,`
    <div class="rep-list" id="indicadores-${p.id}">
      ${p.indicadores.map((ind,i)=>buildIndicItem(p.id,i)).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','indicadores',{nome:'',meta:'',realizado:''})">+ Adicionar indicador</button>
  `)}

  ${buildSection(p,'resultados','🏆 Resultados',false,`
    <div class="rep-list" id="resultados-${p.id}">
      ${p.resultados.map((r,i)=>buildResultItem(p.id,i)).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','resultados',{metrica:'',absoluto:'',percentual:''})">+ Adicionar resultado</button>
  `)}

  ${buildSection(p,'riscos','⚠️ Riscos & Atenção',false,`
    <div class="rep-list" id="riscos-${p.id}">
      ${p.riscos.map((r,i)=>buildTextoItem(p.id,'riscos',i,'Risco ou ponto de atenção identificado...')).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','riscos',{texto:''})">+ Adicionar risco</button>
  `)}

  ${buildSection(p,'licoes','💡 Lições Aprendidas',false,`
    <div class="rep-list" id="licoes-${p.id}">
      ${p.licoes.map((l,i)=>buildTextoItem(p.id,'licoes',i,'Lição aprendida durante a execução...')).join('')}
    </div>
    <button class="add-row" onclick="addRep('${p.id}','licoes',{texto:''})">+ Adicionar lição</button>
  `)}

  ${buildSection(p,'antesdepois','🔄 Antes & Depois',false,`
    <div class="ba-grid">
      <div class="ba-slot">
        <div class="ba-slot-head before">⬅ Antes</div>
        <div class="ba-slot-body">
          <div class="field" style="margin-bottom:.75rem"><label>Título</label>
            <input value="${esc(p.antesdepois.antes_titulo)}" placeholder="Ex: Situação anterior" oninput="psetDeep('${p.id}','antesdepois','antes_titulo',this.value)">
          </div>
          <div class="field" style="margin-bottom:.75rem"><label>Descrição</label>
            <textarea rows="2" placeholder="Descreva o estado anterior..." oninput="psetDeep('${p.id}','antesdepois','antes_desc',this.value)">${esc(p.antesdepois.antes_desc)}</textarea>
          </div>
          <div class="img-slot" onclick="triggerUpload('uBA-antes-${p.id}')">
            <input type="file" id="uBA-antes-${p.id}" accept="image/*" onchange="handleBAImg('${p.id}','antes',this)">
            <img class="prev" id="prev-BA-antes-${p.id}">
            <div class="img-slot-icon">🖼️</div><div class="img-slot-label">Foto Antes</div>
            <button class="img-remove" id="rmv-BA-antes-${p.id}" onclick="removeBAImg(event,'${p.id}','antes')">✕</button>
          </div>
        </div>
      </div>
      <div class="ba-slot">
        <div class="ba-slot-head after">➡ Depois</div>
        <div class="ba-slot-body">
          <div class="field" style="margin-bottom:.75rem"><label>Título</label>
            <input value="${esc(p.antesdepois.depois_titulo)}" placeholder="Ex: Situação atual" oninput="psetDeep('${p.id}','antesdepois','depois_titulo',this.value)">
          </div>
          <div class="field" style="margin-bottom:.75rem"><label>Descrição</label>
            <textarea rows="2" placeholder="Descreva o estado atual..." oninput="psetDeep('${p.id}','antesdepois','depois_desc',this.value)">${esc(p.antesdepois.depois_desc)}</textarea>
          </div>
          <div class="img-slot" onclick="triggerUpload('uBA-depois-${p.id}')">
            <input type="file" id="uBA-depois-${p.id}" accept="image/*" onchange="handleBAImg('${p.id}','depois',this)">
            <img class="prev" id="prev-BA-depois-${p.id}">
            <div class="img-slot-icon">🖼️</div><div class="img-slot-label">Foto Depois</div>
            <button class="img-remove" id="rmv-BA-depois-${p.id}" onclick="removeBAImg(event,'${p.id}','depois')">✕</button>
          </div>
        </div>
      </div>
    </div>
  `)}

  ${buildSection(p,'evidencias','📸 Evidências',false,`
    <div class="img-grid g4">
      ${[0,1,2,3].map(i=>`
        <div class="img-slot" onclick="triggerUpload('uEv-${p.id}-${i}')">
          <input type="file" id="uEv-${p.id}-${i}" accept="image/*" onchange="handleEvImg('${p.id}',${i},this)">
          <img class="prev" id="prev-ev-${p.id}-${i}">
          <div class="img-slot-icon">🖼️</div><div class="img-slot-label">Evidência ${i+1}</div>
          <button class="img-remove" id="rmv-ev-${p.id}-${i}" onclick="removeEvImg(event,'${p.id}',${i})">✕</button>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:.6rem;font-size:.68rem;color:var(--muted)">Até 4 imagens por projeto.</div>
  `)}

  ${buildSection(p,'desafios','🚀 Desafios Futuros',false,`
    <div class="field">
      <label>Continuidade, acompanhamento e desdobramentos estratégicos</label>
      <textarea rows="4" placeholder="Descreva os próximos passos, riscos remanescentes e possíveis novos desdobramentos deste projeto..." oninput="pset('${p.id}','desafios',this.value)">${esc(p.desafios)}</textarea>
    </div>
  `)}

  ${buildSection(p,'panorama','📊 Panorama Anterior (BI)',false,`
    <div class="field-row c2" style="margin-bottom:1rem">
      <div class="img-slot" onclick="triggerUpload('uBI2025-${p.id}')">
        <input type="file" id="uBI2025-${p.id}" accept="image/*" onchange="handleGlobal('bi2025',this)">
        <img class="prev" id="prev-bi2025">
        <div class="img-slot-icon">📊</div><div class="img-slot-label">Dashboard BI Ano Anterior</div>
        <button class="img-remove" id="rmv-bi2025" onclick="removeImg(event,'bi2025')">✕</button>
      </div>
      <div class="img-slot" onclick="triggerUpload('uBI2026-${p.id}')">
        <input type="file" id="uBI2026-${p.id}" accept="image/*" onchange="handleGlobal('bi2026',this)">
        <img class="prev" id="prev-bi2026">
        <div class="img-slot-icon">📈</div><div class="img-slot-label">Dashboard BI Atual</div>
        <button class="img-remove" id="rmv-bi2026" onclick="removeImg(event,'bi2026')">✕</button>
      </div>
    </div>
    <div style="font-size:.7rem;color:var(--muted)">Esses prints aparecerão no slide de Panorama, antes dos projetos.</div>
  `)}
  `;
}