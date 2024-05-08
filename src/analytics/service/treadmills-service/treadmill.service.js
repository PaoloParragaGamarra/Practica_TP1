import axios  from "axios";

export class TreadmillService {
    baseUrl = "http://localhost:3000/api/v1/treadmills";
    getTreadmills() {
        return axios.get(this.baseUrl)
    }
}