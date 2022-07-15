const activityMapper = {
    "2020-07-01": "1",
    "2020-07-02": "2",
    "2020-07-03": "3",
    "2020-07-04": "4",
    "2020-07-05": "5",
    "2020-07-06": "6",
    "2020-07-07": "7"
}

/**
 * 
 * @param {*} activityData
 * @returns {Array<Activity>}
 */
export function mapActivity(activityData) {
    return activityData.data.sessions.map((element, index) => {
        return {
            ...element,
            day: activityMapper[element.day]
        }
    })
}

/**
 * @typedef Activity
 * @prop {Number} day - Day of the week
 * @prop {Number} kilogram - value (kg)
 * @prop {Number} calories - value (kCal)
 */