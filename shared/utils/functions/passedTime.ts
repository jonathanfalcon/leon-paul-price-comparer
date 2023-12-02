/**
 * An object representing a certain amount of time.
 * @property days The number of days.
 * @property hours The number of hours.
 * @property minutes The number of minutes.
 * @property seconds The number of seconds.
 * @property milliseconds The number of milliseconds.
 */
type ElapsedTime = {
    days?: number
    hours?: number
    minutes?: number
    seconds?: number
    milliseconds?: number
}

/**
 * Check if a certain amount of time has passed since a certain timestamp.
 * @param timestamp The timestamp to compare to the current time.
 * @param elapsedTime The amount of time to check has elapsed.
 * @returns Whether or not the elapsed time has passed.
 */
export const passedTime = (
    timestamp: number,
    elapsedTime: ElapsedTime = { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 },
) => {
    const totalMilliseconds = (() => {
        let total = 0
        if (elapsedTime.days) total += elapsedTime.days * 24 * 60 * 60 * 1000
        if (elapsedTime.hours) total += elapsedTime.hours * 60 * 60 * 1000
        if (elapsedTime.minutes) total += elapsedTime.minutes * 60 * 1000
        if (elapsedTime.seconds) total += elapsedTime.seconds * 1000
        if (elapsedTime.milliseconds) total += elapsedTime.milliseconds
        return total
    })()

    return Date.now() - timestamp > totalMilliseconds
}
