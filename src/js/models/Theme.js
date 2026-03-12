export class Theme {
    constructor(id, name, colors) {
        this.id = id;
        this.name = name;
        this.colors = colors;
    }

    apply() {
        document.documentElement.style.setProperty('--a1', this.colors[1]);
        document.documentElement.style.setProperty('--a2', this.colors[2]);
        document.documentElement.style.setProperty('--a3', this.colors[3]);
    }

    static getAll() {
        return [
            new Theme('oceano', 'Oceano', ['#0A1929', '#1D4ED8', '#06B6D4', '#10FFCB']),
            new Theme('aurora', 'Aurora', ['#0F0720', '#6D28D9', '#DB2777', '#F0ABFC']),
            new Theme('minimal', 'Minimal', ['#F8FAFC', '#0F172A', '#3B82F6', '#818CF8']),
        ];
    }
}
