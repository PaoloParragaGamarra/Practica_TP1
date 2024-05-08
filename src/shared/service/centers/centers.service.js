import axios  from "axios";

export class CentersService {
    baseUrl = "http://localhost:3000/api/v1/centers";
    getCenters() {
        return axios.get(this.baseUrl)
    }
}