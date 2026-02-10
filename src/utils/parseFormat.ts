import type { CountDownFormat, TimeData } from '../types'

export function parseFormat(format: CountDownFormat, timeData: TimeData): string {
    const pad = (n: number, l = 2) => String(n).padStart(l, '0')
    return format
        .replace('DD', pad(timeData.days))
        .replace('HH', pad(timeData.hours))
        .replace('mm', pad(timeData.minutes))
        .replace('ss', pad(timeData.seconds))
        .replace('SSS', pad(timeData.milliseconds, 3))
}