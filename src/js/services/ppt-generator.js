export class PPTGenerator {
    constructor(projects, theme) {
        this.projects = projects;
        this.theme = theme;
    }

    async generate() {
        const PptxGenJS = window.PptxGenJS;
        const pres = new PptxGenJS();
        pres.layout = 'LAYOUT_16x9';

        // Capa
        const slide = pres.addSlide();
        slide.addText('Wren Presentation', {
            x: 0.5, y: 2, w: 9, h: 1,
            fontSize: 48,
            color: this.theme.colors[1].replace('#', ''),
            bold: true,
            align: 'center'
        });

        return pres;
    }
}
