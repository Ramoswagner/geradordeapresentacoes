// ════════════════════════════════════════════════════
// MODELS
// ════════════════════════════════════════════════════
const MODELS = {
  default: { id:'default', name:'Oceano',    desc:'Azul profundo · Aqua',       preview:['#070C14','#1D4ED8','#06B6D4','#10FFCB'],
    pptx:{ bg:'070C14',bg2:'0D1420',a1:'1D4ED8',a2:'06B6D4',a3:'10FFCB',txt:'FFFFFF',muted:'8A9BB5',cover:'0A2463',danger:'EF4444',teal:'0D9488' }},
  aurora:  { id:'aurora',  name:'Aurora',    desc:'Violeta · Rosa · Premium',    preview:['#0F0A1E','#7C3AED','#EC4899','#F0ABFC'],
    pptx:{ bg:'0F0A1E',bg2:'160D2E',a1:'7C3AED',a2:'EC4899',a3:'F0ABFC',txt:'FFFFFF',muted:'A89EC0',cover:'1E1040',danger:'F43F5E',teal:'7C3AED' }},
  clean:   { id:'clean',   name:'Minimal',   desc:'Branco · Carbono · Clean',    preview:['#F8F9FA','#111827','#6366F1','#818CF8'],
    pptx:{ bg:'F8F9FA',bg2:'FFFFFF',a1:'111827',a2:'6366F1',a3:'818CF8',txt:'111827',muted:'6B7280',cover:'111827',danger:'EF4444',teal:'6366F1' }},
  forest:  { id:'forest',  name:'Floresta',  desc:'Verde escuro · Dourado',      preview:['#0A1A0F','#166534','#D97706','#FCD34D'],
    pptx:{ bg:'0A1A0F',bg2:'0F2318',a1:'166534',a2:'D97706',a3:'FCD34D',txt:'FFFFFF',muted:'86A892',cover:'052E16',danger:'EF4444',teal:'166534' }},
  terra:   { id:'terra',   name:'Terra',     desc:'Terracota · Laranja · Quente', preview:['#1C0F0A','#B45309','#F97316','#FED7AA'],
    pptx:{ bg:'1C0F0A',bg2:'251409',a1:'B45309',a2:'F97316',a3:'FED7AA',txt:'FFFFFF',muted:'C4A882',cover:'431407',danger:'EF4444',teal:'B45309' }},
};

// ════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════
function init() {
  addProject();
  renderBlockToggles();
  renderPalettes();
  renderThemeBig();
  updateGenChecklist();
}