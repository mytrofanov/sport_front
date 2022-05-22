import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: `http://localhost:5000/api/competition/`
})

export const competitionsAPI = {
    allCompetitions() {
        return instance.get (`competitions`)
            .then(response => {
                return response.data
            });
    },
    gameTypes() {
        return instance.get (`games`)
            .then(response => {
                return response.data
            });
    },
    createNewCompetition(newCompetition) {
        return instance.post (`createCompetition`,newCompetition)
            .then(response => {
                console.log(response)
                return response.data
            });
    },


}
