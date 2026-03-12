export class HomeView {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="header">
                <h1 class="grad-text">Wren</h1>
                <p>Gerador de apresentações estratégicas</p>
            </div>
        `;
    }
}
