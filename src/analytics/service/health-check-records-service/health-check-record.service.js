import axios  from "axios";

export class HealthCheckRecordService {
    baseUrl = "http://localhost:3000/api/v1/health-checks";
    getRecords() {
        return axios.get(this.baseUrl)
    }
}