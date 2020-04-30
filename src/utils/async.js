export const getDataCallback = (callback) => {
    const name = 'Sebastian';

    setTimeout(() => {
        callback(name);7
    }, 300);
}

export const getDataPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sebastian');
    }, 300);
});

export const getDataPromiseError = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error!');
    }, 300);
});

export const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const user = await res.json();

    return user;
}