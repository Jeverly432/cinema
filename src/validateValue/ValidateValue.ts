
export const delay = (callback: any, ms: any) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms)
    })
}