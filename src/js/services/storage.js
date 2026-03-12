export const storage = {
    save(key, data) {
        localStorage.setItem(`wren_${key}`, JSON.stringify(data));
    },

    load(key, defaultValue = null) {
        const data = localStorage.getItem(`wren_${key}`);
        return data ? JSON.parse(data) : defaultValue;
    },

    exportDraft(data, filename) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || `wren_draft_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
};
