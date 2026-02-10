export type FormatToken = 'DD' | 'HH' | 'mm' | 'ss' | 'SSS'

export type CountDownFormat = `${string}${FormatToken}${string}` | string

export interface TimeData {
    totalSeconds: number
    days: number
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
}

export interface CountDownOptions {
    time?: number
    millisecond?: boolean
    format?: CountDownFormat
    autoStart?: boolean
    onChange?: (timeData: Readonly<TimeData>, formatted: string) => void
    onFinish?: () => void
}
