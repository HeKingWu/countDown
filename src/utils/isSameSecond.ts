export function isSameSecond(t1: number, t2: number): boolean {
    return Math.floor(t1 / 1000) === Math.floor(t2 / 1000)
}