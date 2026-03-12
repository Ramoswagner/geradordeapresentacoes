// ════════════════════════════════════════════════════
// GLOBAL STATE
// ════════════════════════════════════════════════════
const G = {
  mode: 'single',    // single | portfolio | program
  theme: 'default',
  identity: {
    instName:'', instDept:'', presTitle:'', presDate:'', presSub:'',
    logoInst: null, logoProg: null,
    bi2025: null, bi2026: null,
  },
  blocks: {
    cover:      { enabled:true,  required:true,  label:'Capa',              icon:'🏷️' },
    panorama:   { enabled:false, required:false, label:'Panorama Anterior', icon:'📊' },
    team:       { enabled:false, required:false, label:'Equipe',            icon:'👥' },
    objetivo:   { enabled:true,  required:true,  label:'Objetivo',          icon:'🎯' },
    etapas:     { enabled:true,  required:false, label:'Etapas',            icon:'🪜' },
    marcos:     { enabled:true,  required:false, label:'Marcos / Timeline', icon:'📍' },
    indicadores:{ enabled:true,  required:false, label:'Indicadores KPI',   icon:'📊' },
    resultados: { enabled:true,  required:false, label:'Resultados',        icon:'🏆' },
    riscos:     { enabled:false, required:false, label:'Riscos & Atenção',  icon:'⚠️' },
    licoes:     { enabled:false, required:false, label:'Lições Aprendidas', icon:'💡' },
    antesdepois:{ enabled:false, required:false, label:'Antes & Depois',    icon:'🔄' },
    evidencias: { enabled:true,  required:false, label:'Evidências',        icon:'📸' },
    desafios:   { enabled:false, required:false, label:'Desafios Futuros',  icon:'🚀' },
    closing:    { enabled:true,  required:false, label:'Encerramento',      icon:'🙏' },
  },
  projects: [],
  activeProjectId: null,
};

// Project colors pool
const PROJ_COLORS = ['#1D4ED8','#7C3AED','#0D9488','#D97706','#DC2626','#059669','#DB2777','#0369A1'];