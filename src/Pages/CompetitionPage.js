import React, {useState} from 'react';
import TableComponent from "../Components/table";
import './competitionPage.css'
import {Button} from "react-bootstrap";
import Modal from "../Components/modal";
import CompetitionForm from "../Components/competitionForm";

const CompetitionPage = ({competitions, selectedCompetition, gameTypes}) => {
    let [showModal, setShowModal] = useState(false)
    console.log('gameTypes:', gameTypes)

    return (
        <div className={'block'}>
            <Button variant="outline-secondary"
                    onClick={() => {
                        setShowModal(true)
                    }}
            >+Додати змагання</Button>
            <TableComponent competitions={competitions} selectedCompetition={selectedCompetition}/>
            <Modal active={showModal} setActive={setShowModal} >
                {gameTypes.length>1 && <CompetitionForm gameTypes={gameTypes}/>}

            </Modal>
        </div>
    );
};

export default CompetitionPage;