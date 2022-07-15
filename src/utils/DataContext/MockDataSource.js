/**
 * @class
 * @classdesc Contains methods that fetches data from json's files (Mock)
 */

import { mapActivity } from "../Mappers/activity";
import { mapMain } from "../Mappers/main";
import { mapPerformance } from "../Mappers/performance";
import { mapSessions } from "../Mappers/sessions";

export class MockDataSource {
    constructor(id) {
        this.id = id
    }

    
    /**
     * Fetch main data from json file
     * @return {Function(<Array>): Array<Main>} - Transformed main data 
    */

    async fetchMainData() {
        const response = await fetch(`/id${this.id}_main_data.json`);
        const data = await response.json();
        return mapMain(data)
    }

    /**
     * Fetch activity data from json file
     * @return {Function(<Array>): Array<Activity>} - Transformed activity data 
    */

    async fetchActivityData() {
        const response = await fetch(`/id${this.id}_activity_data.json`)
        const data = await response.json();
        return mapActivity(data)
    }

    /**
     * Fetch performance data from json file
     * @return {Function(<Array>): Array<Performance>} - Transformed performance data 
    */

    async fetchPerformanceData() {
        const response = await fetch(`/id${this.id}_performance_data.json`)
        const data = await response.json();
        return mapPerformance(data)
    }

    /**
     * Fetch sessions data from json file
     * @return {Function(<Array>): Array<Sessions>} - Transformed sessions data 
    */

    async fetchSessionsData() {
        const response = await fetch(`/id${this.id}_sessions_data.json`)
        const data = await response.json();
        return mapSessions(data)
    }
}