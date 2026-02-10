import type { CountDownFormat, CountDownOptions } from './types'
import { parseFormat, parseTimeData, isSameSecond } from './utils'

class CountDown {
    private initialTime: number
    private remain: number
    private millisecond: boolean
    private format: CountDownFormat
    private autoStart: boolean
    private onChange?: CountDownOptions['onChange']
    private onFinish?: CountDownOptions['onFinish']

    private counting = false
    private tid: ReturnType<typeof setTimeout> | null = null
    private endTime = 0

    constructor(options: CountDownOptions = {}) {
        const {
            time = 0,
            millisecond = false,
            format = 'HH:mm:ss',
            autoStart = true,
            onChange,
            onFinish,
        } = options

        this.initialTime = Math.max(0, time)
        this.remain = time
        this.millisecond = millisecond
        this.format = format
        this.autoStart = autoStart
        this.onChange = onChange
        this.onFinish = onFinish

        this.setRemain(this.remain)

        if (this.autoStart) {
            this.start()
        }
    }
    start(): void {
        if (this.counting)
            return

        this.counting = true
        this.endTime = Date.now() + this.remain
        this.tick()
    }

    pause(): void {
        this.counting = false
        if (this.tid) {
            clearTimeout(this.tid)
            this.tid = null
        }
    }

    reset(time: number = this.initialTime): void {
        this.pause()
        this.remain = time
        this.initialTime = time
        this.setRemain(this.remain)

        if (this.autoStart) {
            this.start()
        }
    }

    destroy(): void {
        this.pause()
        this.onChange = undefined
        this.onFinish = undefined
    }

    /* ================== 内部逻辑 ================== */

    private tick(): void {
        this.millisecond ? this.microTick() : this.macroTick()
    }

    private microTick(): void {
        this.tid = setTimeout(() => {
            this.setRemain(this.getRemain())

            if (this.remain !== 0) {
                this.microTick()
            }
        }, 30)
    }

    private macroTick(): void {
        this.tid = setTimeout(() => {
            const remain = this.getRemain()

            if (!isSameSecond(remain, this.remain) || remain === 0) {
                this.setRemain(remain)
            }

            if (this.remain !== 0) {
                this.macroTick()
            }
        }, 30)
    }

    private getRemain(): number {
        return Math.max(this.endTime - Date.now(), 0)
    }

    private setRemain(remain: number): void {
        this.remain = remain
        const timeData = parseTimeData(remain)
        const formatted = parseFormat(this.format, timeData)

        this.onChange?.(timeData, formatted)

        if (remain === 0) {
            this.pause()
            this.onFinish?.()
        }
    }
}

export { CountDown }
export default CountDown
export type {
    CountDownOptions,
    CountDownFormat,
    TimeData,
} from './types'