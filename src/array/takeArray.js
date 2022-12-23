export const take = (fromArray, byProp, cbProp = '') => {
    let newArray = [];
    const byNumber = Number(byProp);
    if (Array.isArray(fromArray) && fromArray.length >= 1) {
        if (typeof fromArray[0] === 'object' && fromArray[0] !== null && typeof byProp === 'string' && Object.keys(fromArray[0]).includes(byProp)) {
            newArray = fromArray.map((item) => {
                return item[byProp];
            });
            if (cbProp === 'uniq') {
                newArray = Array.from(new Set(newArray));
            }
        }
        else if (Array.isArray(fromArray[0]) && isNaN(byNumber) === false) {
            newArray = fromArray.map((item) => {
                return item[byNumber];
            });
            if (cbProp === 'uniq') {
                newArray = Array.from(new Set(newArray));
            }
        }
        else if (typeof byProp === 'function') {
            newArray = fromArray.filter((item) => {
                return byProp(item);
            });
            if (cbProp !== '') {
                newArray = newArray.map((item) => item[cbProp]);
            }
        }
    }
    return newArray;
};
//# sourceMappingURL=takeArray.js.map