import React, {useState} from 'react';
import TableComponent from "../Components/table";
import './competitionPage.css'
import {Button} from "react-bootstrap";
import Modal from "../Components/modal";
import CompetitionForm from "../Components/competitionForm";
import {competitionsAPI} from "../Api/Api";
import {setSelectedCompetition} from "../features/competitions/competitionSlice";
import {useDispatch} from "react-redux";

const CompetitionPage = ({competitions, selectedCompetition, gameTypes, startApp}) => {
    let [showModal, setShowModal] = useState(false)
    let [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch();

    console.log('competitions:', competitions)
    console.log('gameTypes:', gameTypes)
    console.log('selectedCompetition:', selectedCompetition)

    const deleteCompetition = (CompetitionId) => {
        competitionsAPI.deleteCompetition(CompetitionId).then(data => {
            console.log('data after delete competition:', data)
            startApp()
        })

    }
    const editCompetition = (CompetitionId) => {
        const selectedCompetition = competitions.filter(item=>{
            return item._id === CompetitionId
        })
        dispatch(setSelectedCompetition(selectedCompetition))
        setEditMode(true)
        setShowModal(true)
    }


    return (
        <div className={'block'}>
            <Button variant="outline-secondary"
                    onClick={() => {
                        setShowModal(true)
                        setEditMode(false)
                    }}
            >+Додати змагання</Button>
            <TableComponent competitions={competitions} selectedCompetition={selectedCompetition}
                            deleteCompetition={deleteCompetition} editCompetition={editCompetition}/>
            <Modal active={showModal} setActive={setShowModal}>
                {gameTypes.length > 1 &&
                    <CompetitionForm gameTypes={gameTypes}
                                     setActive={setShowModal}
                                     startApp={startApp}
                                     editMode={editMode}
                                     selectedCompetition={selectedCompetition}
                                     name={selectedCompetition.name}
                                     active={selectedCompetition.active} type={selectedCompetition.type}
                                     score={selectedCompetition.score} player1={selectedCompetition.player1}
                                     player2={selectedCompetition.player2} description={selectedCompetition.description}
                    />}
            </Modal>
        </div>
    );
};

export default CompetitionPage;