export const capitalize = (str, opt = '') => {
    let capStr = str;
    if (opt === 'multiple') {
        capStr = capStr.toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }
    else if (opt === 'single') {
        capStr = capStr.toLowerCase().trimStart().replace(/^\w/, (c) => c.toUpperCase());
    }
    else {
        capStr = capStr.trimStart().replace(/^\w/, (c) => c.toUpperCase());
    }
    return capStr;
};
//# sourceMappingURL=capitalizeString.js.map