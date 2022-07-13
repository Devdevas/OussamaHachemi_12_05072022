export class ApiDataSource {

    constructor(id) {
        this.id = id
    }

    async getMainData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}`);
        const data = await response.json();
        return data
    }

    async getActivityData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}/activity`)
        const data = await response.json();
        return data
    }

    async getPerformanceData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}/performance`)
        const data = await response.json();
        return data
    }

    async getSessionsData() {
        const response = await fetch(`http://localhost:3000/user/${this.id}/average-sessions`)
        const data = await response.json();
        return data
    }
}