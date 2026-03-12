function triggerUpload(id){ document.getElementById(id)?.click(); }

function handleUpload(key, input) {
  const file = input.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = e => {
    G.identity[key] = e.target.result;
    const prev = document.getElementById('prev-'+key);
    if(prev){ prev.src=e.target.result; prev.classList.add('show'); }
    const rmv = document.getElementById('rmv-'+key);
    if(rmv) rmv.classList.add('show');
    toast(file.name+' carregado','ok');
  };
  r.readAsDataURL(file);
}

function handleGlobal(key, input) {
  handleUpload(key, input);
}

function removeImg(evt, key) {
  evt.stopPropagation();
  G.identity[key]=null;
  const prev=document.getElementById('prev-'+key);
  if(prev){ prev.src=''; prev.classList.remove('show'); }
  const rmv=document.getElementById('rmv-'+key);
  if(rmv) rmv.classList.remove('show');
}

function handleEvImg(pid, idx, input) {
  const p=getProj(pid); if(!p) return;
  const file=input.files[0]; if(!file) return;
  const r=new FileReader();
  r.onload=e=>{
    p.evidencias[idx]=e.target.result;
    const prev=document.getElementById(`prev-ev-${pid}-${idx}`);
    if(prev){prev.src=e.target.result;prev.classList.add('show');}
    const rmv=document.getElementById(`rmv-ev-${pid}-${idx}`);
    if(rmv) rmv.classList.add('show');
  };
  r.readAsDataURL(file);
}
function removeEvImg(evt,pid,idx){
  evt.stopPropagation();
  const p=getProj(pid);if(!p)return;
  p.evidencias[idx]=null;
  const prev=document.getElementById(`prev-ev-${pid}-${idx}`);
  if(prev){prev.src='';prev.classList.remove('show');}
  const rmv=document.getElementById(`rmv-ev-${pid}-${idx}`);
  if(rmv)rmv.classList.remove('show');
}
function handleBAImg(pid,side,input){
  const p=getProj(pid);if(!p)return;
  const file=input.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=e=>{
    p.antesdepois[side+'_img']=e.target.result;
    const prev=document.getElementById(`prev-BA-${side}-${pid}`);
    if(prev){prev.src=e.target.result;prev.classList.add('show');}
    const rmv=document.getElementById(`rmv-BA-${side}-${pid}`);
    if(rmv)rmv.classList.add('show');
  };
  r.readAsDataURL(file);
}
function removeBAImg(evt,pid,side){
  evt.stopPropagation();
  const p=getProj(pid);if(!p)return;
  p.antesdepois[side+'_img']=null;
  const prev=document.getElementById(`prev-BA-${side}-${pid}`);
  if(prev){prev.src='';prev.classList.remove('show');}
  const rmv=document.getElementById(`rmv-BA-${side}-${pid}`);
  if(rmv)rmv.classList.remove('show');
}