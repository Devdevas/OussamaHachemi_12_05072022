/**
 * @class
 * @classdesc Contains methods that fetches data from the Api
 */

import { mapActivity } from "../Mappers/activity";
import { mapMain } from "../Mappers/main";
import { mapPerformance } from "../Mappers/performance";
import { mapSessions } from "../Mappers/sessions";

export class ApiDataSource {

    constructor(id) {
        this.id = id
    }

    /**
     * Fetch main data from Api
     * @return {Function(<Array>): Array<Main>} - Transformed main data 
    */

    async fetchMainData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}`);
        const data = await response.json();
        return mapMain(data)
    }

    /**
     * Fetch activity data from Api
     * @return {Function(<Array>): Array<Activity>} - Transformed activity data 
    */

    async fetchActivityData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}/activity`)
        const data = await response.json();
        return mapActivity(data)
    }

    /**
     * Fetch performance data from Api
     * @return {Function(<Array>): Array<Performance>} - Transformed performance data 
    */
   
    async fetchPerformanceData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}/performance`)
        const data = await response.json();
        return mapPerformance(data)
    }

    /**
     * Fetch sessions data from Api
     * @return {Function(<Array>): Array<Sessions>} - Transformed sessions data 
    */

    async fetchSessionsData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}/average-sessions`)
        const data = await response.json();
        return mapSessions(data)
    }
}
