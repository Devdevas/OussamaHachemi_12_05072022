/**
 * 
 * @param {*} mainData
 * @returns {Array<Main>}
 */
export function mapMain(mainData) {
    if (mainData.data.todayScore) {
        const score = mainData.data.todayScore
        delete mainData.data.todayScore
        return { ...mainData.data, score: score }
    } else {
        return { ...mainData.data }
    }
}
/**
 * @typedef Main
 * @prop {Number} id - Id value
 * @prop {Number} score - Decimal number
 * @prop {Object} userInfos - {firstName: String, lastName: string, age: Number}
 * @prop {Object} keyData - {calorieCount: Number, proteinCount: Number, carbohydrateCount: Number, lipidCount: Number}
 */