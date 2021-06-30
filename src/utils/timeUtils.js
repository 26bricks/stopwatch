export const formatTimeDifference = (time) => {
    const miliseconds = Math.round(time / 100) % 10
    const seconds = Math.floor(time / 1000) % 60
    const minutes = Math.floor(time / 1000 / 60) % 60
    const hours = Math.floor(time / 1000 / 60 / 60) % 24
    const days = Math.floor(time / 1000 / 60 / 60 / 24)

    const secondsAsString = normalizeNumber(seconds)
    const minutesAsString = normalizeNumber(minutes)
    const hoursAsString = normalizeNumber(hours)
    const daysAsString = normalizeNumber(days)

    return `${daysAsString}:${hoursAsString}:${minutesAsString}:${secondsAsString}.${miliseconds}`
}

export const formatTime = (time) => {

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const secondsAsString = normalizeNumber(seconds)
    const minutesAsString = normalizeNumber(minutes)
    const hoursAsString = normalizeNumber(hours)

    return `${hoursAsString}:${minutesAsString}:${secondsAsString}`
}

const normalizeNumber = (number) => {
    return number < 10 ? "0" + number : number;
}