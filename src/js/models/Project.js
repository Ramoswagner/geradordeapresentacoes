export class Project {
    constructor(data = {}) {
        this.id = data.id || Date.now();
        this.name = data.name || 'Novo Projeto';
        this.leader = data.leader || 'Líder';
        this.objective = data.objective || '';
        this.status = data.status || 'Em andamento';
        this.startDate = data.startDate || '';
        this.endDate = data.endDate || '';
        this.color = data.color || this.getRandomColor();
    }

    getRandomColor() {
        const colors = ['#1D4ED8', '#7C3AED', '#0D9488', '#D97706'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    isFilled() {
        return this.name && this.objective && this.objective.length > 10;
    }
}
