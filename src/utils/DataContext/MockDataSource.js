export class MockDataSource {
    constructor(id) {
        this.id = id
    }

    async getMainData() {
        const response = await fetch(`/id${this.id}_main_data.json`);
        const data = await response.json();
        return data
    }
    async getActivityData() {
        const response = await fetch(`/id${this.id}_activity_data.json`)
        const data = await response.json();
        return data
    }
    async getPerformanceData() {
        const response = await fetch(`/id${this.id}_performance_data.json`)
        const data = await response.json();
        return data
    }
    async getSessionsData() {
        const response = await fetch(`/id${this.id}_sessions_data.json`)
        const data = await response.json();
        return data
    }
}