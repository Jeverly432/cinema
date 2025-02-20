export const delay = (callback: any, ms: any) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(callback());
    }, ms);
});
