import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: `http://localhost:5000/api/competition/`
})

export const competitionsAPI = {
    allCompetitions() {
        return instance.get (`competitions`)
            .then(response => {
                // console.log('API: ', response)
                return response.data
            });
    },

}
