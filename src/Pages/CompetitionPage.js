import React, {useState} from 'react';
import TableComponent from "../Components/table";
import './competitionPage.css'
import {Button} from "react-bootstrap";
import Modal from "../Components/modal";
import CompetitionForm from "../Components/competitionForm";
import {competitionsAPI} from "../Api/Api";

const CompetitionPage = ({competitions, selectedCompetition, gameTypes,startApp}) => {
    let [showModal, setShowModal] = useState(false)
    console.log('gameTypes:', gameTypes)
    const deleteCompetition = (CompetitionId)=> {
        competitionsAPI.deleteCompetition(CompetitionId).then(data=>{
            console.log('data after delete competition:', data)
            startApp()
        })

    }

    return (
        <div className={'block'}>
            <Button variant="outline-secondary"
                    onClick={() => {
                        setShowModal(true)
                    }}
            >+Додати змагання</Button>
            <TableComponent competitions={competitions} selectedCompetition={selectedCompetition} deleteCompetition={deleteCompetition}/>
            <Modal active={showModal} setActive={setShowModal} >
                {gameTypes.length>1 && <CompetitionForm gameTypes={gameTypes} setActive={setShowModal} startApp={startApp}/>}
            </Modal>
        </div>
    );
};

export default CompetitionPage;