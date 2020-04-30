export const getDataCallback = (callback) => {
    const name = 'Sebastian';

    setTimeout(() => {
        callback(name);7
    }, 2000);
}
