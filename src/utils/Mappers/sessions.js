const sessionsMapper = {
    "1": "L",
    "2": "M",
    "3": "M",
    "4": "J",
    "5": "V",
    "6": "S",
    "7": "D"
}

/**
 * 
 * @param {*} sessionsData
 * @returns {Array<Sessions>}
 */
export function mapSessions(sessionsData) {
    return sessionsData.data.sessions.map((element) => {
        return {
            ...element,
            day: sessionsMapper[element.day]
        }
    })
}

/**
 * @typedef Sessions
 * @prop {String} day - Day of the week
 * @prop {Number} sessionLength - session's length in minutes
 */