import { COUNTER } from '../constants/action-types'

export function increaseCounter(currentCount) {
    return { type: COUNTER.INCREASED, count: ++currentCount }
}

export function decreaseCounter(currentCount) {
    return { type: COUNTER.DECREASED, count: --currentCount }
}

export function setCounter(number) {
    return { type: COUNTER.SET, number }
}

export function resetCounter() {
    return { type: COUNTER.RESET }
}