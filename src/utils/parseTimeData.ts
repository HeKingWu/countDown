import type { TimeData } from "../types"
export function parseTimeData(ms: number): Readonly<TimeData> {
    ms = Math.max(0, ms)

    const totalSeconds = Math.floor(ms / 1000)
    const milliseconds = ms % 1000

    const seconds = totalSeconds % 60
    const totalMinutes = Math.floor(totalSeconds / 60)

    const minutes = totalMinutes % 60
    const totalHours = Math.floor(totalMinutes / 60)

    const hours = totalHours % 24
    const days = Math.floor(totalHours / 24)

    return Object.freeze({
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    })
}