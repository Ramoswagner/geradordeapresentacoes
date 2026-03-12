function getProj(id){ return G.projects.find(p=>p.id===id); }
function pset(id,k,v){ const p=getProj(id); if(p) p[k]=v; }
function psetDeep(id,obj,k,v){ const p=getProj(id); if(p) p[obj][k]=v; }
function setRepItem(pid,field,i,k,v){ const p=getProj(pid); if(p&&p[field][i]) p[field][i][k]=v; }
function esc(s){ return (s||'').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function addRep(pid, field, template) {
  const p = getProj(pid); if(!p) return;
  p[field].push({...template});
  const list = document.getElementById(field+'-'+pid);
  if(!list) return;
  const i = p[field].length-1;
  let html='';
  if(field==='team') html=buildTeamItem(pid,i);
  else if(field==='etapas') html=buildEtapaItem(pid,i);
  else if(field==='marcos') html=buildMarcoItem(pid,i);
  else if(field==='indicadores') html=buildIndicItem(pid,i);
  else if(field==='resultados') html=buildResultItem(pid,i);
  else if(field==='riscos') html=buildTextoItem(pid,'riscos',i,'Risco ou ponto de atenção...');
  else if(field==='licoes') html=buildTextoItem(pid,'licoes',i,'Lição aprendida...');
  list.insertAdjacentHTML('beforeend',html);
}

function removeRep(pid, field, idx) {
  const p = getProj(pid); if(!p) return;
  if(p[field].length<=1) return;
  p[field].splice(idx,1);
  const list = document.getElementById(field+'-'+pid);
  if(!list) return;
  const builders = {
    team:buildTeamItem, etapas:buildEtapaItem, marcos:buildMarcoItem,
    indicadores:buildIndicItem, resultados:buildResultItem,
  };
  if(builders[field]) list.innerHTML = p[field].map((_,i)=>builders[field](pid,i)).join('');
  else if(field==='riscos') list.innerHTML = p.riscos.map((_,i)=>buildTextoItem(pid,'riscos',i,'Risco...')).join('');
  else if(field==='licoes') list.innerHTML = p.licoes.map((_,i)=>buildTextoItem(pid,'licoes',i,'Lição...')).join('');
}