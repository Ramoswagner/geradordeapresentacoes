export class ProjectForm {
    constructor(project, container, onUpdate) {
        this.project = project;
        this.container = container;
        this.onUpdate = onUpdate;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="card">
                <div class="card-title">📋 Dados do Projeto</div>
                <div class="field">
                    <label>Nome do Projeto</label>
                    <input type="text" id="project-name" value="${this.project.name}">
                </div>
                <div class="field">
                    <label>Líder</label>
                    <input type="text" id="project-leader" value="${this.project.leader}">
                </div>
                <div class="field">
                    <label>Objetivo</label>
                    <textarea id="project-objective" rows="4">${this.project.objective}</textarea>
                </div>
            </div>
        `;
        this.attachEvents();
    }

    attachEvents() {
        document.getElementById('project-name')?.addEventListener('input', (e) => {
            this.project.name = e.target.value;
            this.onUpdate?.();
        });
        document.getElementById('project-leader')?.addEventListener('input', (e) => {
            this.project.leader = e.target.value;
            this.onUpdate?.();
        });
        document.getElementById('project-objective')?.addEventListener('input', (e) => {
            this.project.objective = e.target.value;
            this.onUpdate?.();
        });
    }
}
