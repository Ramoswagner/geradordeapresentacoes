describe('Project Model', () => {
    test('should create new project', () => {
        const project = new Project();
        expect(project.name).toBe('Novo Projeto');
    });
});
