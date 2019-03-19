export function saveValue(key, value) {
    localStorage.setItem(key, value);
    return Promise.resolve();
}

export function getValue(key) {
    return Promise.resolve(localStorage.getItem(key));
}
