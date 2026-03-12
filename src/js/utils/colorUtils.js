export function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '0, 0, 0';
}

export function isDark(hex) {
    const rgb = hexToRgb(hex).split(', ').map(Number);
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) < 128;
}
