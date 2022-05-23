import React from 'react'
import {
    fetchCompetitionsFromServer,
    fetchGameTypesFromServer,
    setSelectedCompetition
} from "./features/competitions/competitionSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from './App.module.css'
import CompetitionPage from "./Pages/CompetitionPage";
import Spinner from "./Components/spinner";

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const competitions = useSelector(state => state.competitionsStore.competitions)
    const gameTypes = useSelector(state => state.competitionsStore.gameTypes)
    const selectedCompetition = useSelector(state => state.competitionsStore.selectedCompetition)


    const startApp = () => {
        dispatch(fetchCompetitionsFromServer())
        dispatch(fetchGameTypesFromServer())
    }

    useEffect(() => {
        if (competitions.length < 1) {
            setLoading(true)
            startApp()
        }
    }, [])

    useEffect(() => {
        if (competitions.length > 1) {
            setLoading(false)
        }
    }, [competitions])


    return (
        <div className={styles.app}>

            {loading ? <Spinner/> :
                <CompetitionPage competitions={competitions}
                                 gameTypes={gameTypes}
                                 selectedCompetition={selectedCompetition}
                                 startApp={startApp}
                />}
        </div>
    );
}

export default App;
