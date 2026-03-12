function saveDraft(){
  try{
    const snap={mode:G.mode,theme:G.theme,identity:{...G.identity,logoInst:null,logoProg:null,bi2025:null,bi2026:null},
      projects:G.projects.map(p=>({...p,evidencias:[null,null,null,null],antesdepois:{...p.antesdepois,antes_img:null,depois_img:null}})),
      blocks:G.blocks, ts:new Date().toISOString()};
    const blob=new Blob([JSON.stringify(snap,null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download='wren-rascunho.json';a.click();
    toast('Rascunho salvo (imagens não incluídas)','ok');
  }catch(e){toast('Erro ao salvar','err');}
}