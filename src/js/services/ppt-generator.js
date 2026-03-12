async function generatePptx() {
  updateGenChecklist();
  const C = MODELS[G.theme]?.pptx || MODELS.default.pptx;
  const W=10, H=5.625;

  setProgress(true,0,'Iniciando...');
  const pres = new PptxGenJS();
  pres.layout='LAYOUT_16x9';
  pres.title = G.identity.presTitle||'Apresentação Wren';

  setProgress(true,5,'Capa...');
  buildCover(pres,C,W,H);

  if(G.mode!=='single') { setProgress(true,10,'Sumário...'); buildSummary(pres,C,W,H); }
  if(G.blocks.panorama?.enabled) { setProgress(true,14,'Panorama...'); buildPanorama(pres,C,W,H); }

  const step = 80/Math.max(G.projects.length,1);
  for(let i=0;i<G.projects.length;i++){
    const p=G.projects[i];
    setProgress(true,18+i*step,`Projeto: ${p.name||'Sem nome'}...`);
    buildProjectDivider(pres,C,W,H,p,i+1);
    if(G.blocks.objetivo?.enabled)    buildObjSlide(pres,C,W,H,p);
    if(G.blocks.team?.enabled)        buildTeamSlide(pres,C,W,H,p);
    if(G.blocks.etapas?.enabled)      buildEtapasSlide(pres,C,W,H,p);
    if(G.blocks.marcos?.enabled)      buildMarcosSlide(pres,C,W,H,p);
    if(G.blocks.indicadores?.enabled) buildIndicSlide(pres,C,W,H,p);
    if(G.blocks.resultados?.enabled)  buildResultSlide(pres,C,W,H,p);
    if(G.blocks.antesdepois?.enabled) buildBASlide(pres,C,W,H,p);
    if(G.blocks.evidencias?.enabled)  buildEvSlide(pres,C,W,H,p);
    if(G.blocks.riscos?.enabled)      buildRiscosSlide(pres,C,W,H,p);
    if(G.blocks.licoes?.enabled)      buildLicoesSlide(pres,C,W,H,p);
    if(G.blocks.desafios?.enabled)    buildDesafiosSlide(pres,C,W,H,p);
  }

  if(G.blocks.closing?.enabled) { setProgress(true,96,'Encerramento...'); buildClosing(pres,C,W,H); }

  setProgress(true,99,'Escrevendo arquivo...');
  const fname = (G.identity.presTitle||'Wren-Apresentacao').replace(/\s+/g,'-')+'.pptx';
  await pres.writeFile({fileName:fname});
  setProgress(true,100,'Concluído! ✓');
  toast('PPTX gerado com sucesso!','ok');
  setTimeout(()=>setProgress(false),2500);
}