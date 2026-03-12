// Wren Core App
const Wren = {
    state: {
        projects: [],
        activeProject: null,
        theme: 'oceano'
    },

    init() {
        console.log('Wren iniciado');
        this.loadState();
    },

    loadState() {
        const saved = localStorage.getItem('wren_state');
        if (saved) {
            try {
                this.state = JSON.parse(saved);
            } catch (e) {
                console.error('Erro ao carregar estado');
            }
        }
    },

    saveState() {
        localStorage.setItem('wren_state', JSON.stringify(this.state));
    },

    toast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    }
};

document.addEventListener('DOMContentLoaded', () => Wren.init());
