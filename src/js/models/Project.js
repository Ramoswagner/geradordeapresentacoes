let projIdCounter = 0;

function addProject() {
  const id = 'p'+(++projIdCounter);
  const colorIdx = (G.projects.length) % PROJ_COLORS.length;
  const proj = {
    id, color: PROJ_COLORS[colorIdx],
    name:'', leader:'', status:'Concluído',
    periodo_inicio:'', periodo_fim:'',
    objetivo:'',
    etapas:    [{titulo:'',descricao:''},{titulo:'',descricao:''},{titulo:'',descricao:''},{titulo:'',descricao:''}],
    marcos:    [{data:'',entrega:''},{data:'',entrega:''},{data:'',entrega:''},{data:'',entrega:''}],
    indicadores:[{nome:'',meta:'',realizado:''},{nome:'',meta:'',realizado:''},{nome:'',meta:'',realizado:''}],
    resultados: [{metrica:'',absoluto:'',percentual:''},{metrica:'',absoluto:'',percentual:''},{metrica:'',absoluto:'',percentual:''},{metrica:'',absoluto:'',percentual:''}],
    riscos:[{texto:''}], licoes:[{texto:''}],
    antesdepois:{ antes_titulo:'', antes_desc:'', antes_img:null, depois_titulo:'', depois_desc:'', depois_img:null },
    evidencias:[null,null,null,null],
    desafios:'',
    team:[{nome:'',cargo:''}],
  };
  G.projects.push(proj);
  G.activeProjectId = id;
  renderProjectList();
  renderAllProjectForms();
  selectProject(id);
}

function removeProject(id) {
  if(G.projects.length <= 1) { toast('Precisa de pelo menos 1 projeto','err'); return; }
  G.projects = G.projects.filter(p => p.id !== id);
  if(G.activeProjectId === id) G.activeProjectId = G.projects[0].id;
  renderProjectList();
  renderAllProjectForms();
  selectProject(G.activeProjectId);
}

function selectProject(id) {
  G.activeProjectId = id;
  renderProjectList();
  document.querySelectorAll('.proj-form-wrap').forEach(el => {
    el.style.display = el.dataset.pid === id ? '' : 'none';
  });
}

function renderProjectList() {
  const list = document.getElementById('projList');
  if(!list) return;
  list.innerHTML = G.projects.map(p => `
    <div class="proj-card ${p.id===G.activeProjectId?'active':''}" onclick="selectProject('${p.id}');showView('projects');railNav('projects')" data-pid="${p.id}">
      <div class="proj-color-dot" style="background:${p.color}"></div>
      <div class="proj-info">
        <div class="proj-name">${p.name||'Projeto sem nome'}</div>
        <div class="proj-leader">${p.leader||'Líder não definido'}</div>
      </div>
      <div class="proj-status-dot ${p.name&&p.objetivo?'filled':''}"></div>
    </div>
  `).join('');
  const sub = document.getElementById('projPanelSub');
  if(sub) sub.textContent = G.projects.length + (G.projects.length===1?' projeto':' projetos');
}