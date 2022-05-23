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
    createNewCompetition(newName,newType,newPlayer1,newPlayer2,newScore,newDescription,newActive ) {
        return instance.post (`createCompetition`, {},
            {params:{competition:newName , type:newType, player1:newPlayer1, player2:newPlayer2,
                    score:newScore, description:newDescription, active:newActive}})
            .then(response => {
                console.log(response)
                return response.data
            });
    },
    updateNewCompetition(selectedId, newName,newType,newPlayer1,newPlayer2,newScore,newDescription,newActive ) {
        return instance.post (`updateCompetition`, {},
            {params:{CompetitionId: selectedId, competition:newName , type:newType, player1:newPlayer1,
                    player2:newPlayer2,score:newScore, description:newDescription, active:newActive}})
            .then(response => {
                console.log(response)
                return response.data
            });
    },
    deleteCompetition(CompetitionId) {
        return instance.post (`deleteCompetition`, {},
            {params:{CompetitionId:CompetitionId}})
            .then(response => {
                console.log(response)
                return response.data
            });
    },


}
