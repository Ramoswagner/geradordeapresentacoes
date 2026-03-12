import { Theme } from '../models/Theme.js';

export class ThemePicker {
    constructor(container, onSelect) {
        this.container = container;
        this.onSelect = onSelect;
        this.themes = Theme.getAll();
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="card">
                <div class="card-title">🎨 Escolha o Tema</div>
                <div class="theme-grid">
                    ${this.themes.map(theme => `
                        <div class="theme-card" data-theme="${theme.id}">
                            <div class="theme-preview">
                                ${theme.colors.map(c => `<span style="background: ${c}"></span>`).join('')}
                            </div>
                            <div class="theme-name">${theme.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        this.attachEvents();
    }

    attachEvents() {
        this.container.querySelectorAll('.theme-card').forEach(card => {
            card.addEventListener('click', () => {
                const themeId = card.dataset.theme;
                const theme = this.themes.find(t => t.id === themeId);
                if (theme) {
                    theme.apply();
                    this.onSelect?.(theme);
                }
            });
        });
    }
}
