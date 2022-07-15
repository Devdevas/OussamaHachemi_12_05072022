const performanceMapper = {
    "1": "Cardio",
      "2": "Energie",
      "3": "Endurance",
      "4": "Force",
      "5": "Vitesse",
      "6": "Intensité"
}

/**
 * 
 * @param {*} performanceData
 * @returns {Array<Performance>}
 */
export function mapPerformance(performanceData) {
    return performanceData.data.data.map((element) => {
        return {
            ...element,
            kind: performanceMapper[element.kind]
        }
    })
}

/**
 * @typedef Performance
 * @prop {Number} value - Value
 * @prop {String} kind - Type of performance
 */