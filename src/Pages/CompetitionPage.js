import React, {useEffect, useState} from 'react';
import TableComponent from "../Components/table";
import './competitionPage.css'
import {Button} from "react-bootstrap";
import Modal from "../Components/modal";
import CompetitionForm from "../Components/competitionForm";
import {competitionsAPI} from "../Api/Api";
import {setFilteredCompetitions, setSelectedCompetition} from "../features/competitions/competitionSlice";
import {useDispatch} from "react-redux";

const CompetitionPage = ({competitions, selectedCompetition, gameTypes, startApp, filteredCompetitions}) => {
    const dispatch = useDispatch();
    console.log('competitions:', competitions)
    console.log('gameTypes:', gameTypes)
    console.log('selectedCompetition:', selectedCompetition)
    let defaultGameType = 'football' || gameTypes[0].game
    let [showModal, setShowModal] = useState(false)
    let [editMode, setEditMode] = useState(false)
    const [newName, setNewName] = useState('')
    const [newType, setNewType] = useState(defaultGameType)
    const [newPlayer1, setNewPlayer1] = useState('')
    const [newPlayer2, setNewPlayer2] = useState('')
    const [newScore, setNewScore] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newActive, setNewActive] = useState(false)
    const competitionsToShow = filteredCompetitions.length <1 ? competitions :filteredCompetitions

    const deleteCompetition = (CompetitionId) => {
        competitionsAPI.deleteCompetition(CompetitionId).then(data => {
            console.log('data after delete competition:', data)
            startApp()
        })

    }
    const editCompetition = (CompetitionId) => {
        const selectedCompetition = competitions.filter(item => {
            return item._id === CompetitionId
        })
        dispatch(setSelectedCompetition(selectedCompetition))
        setEditMode(true)
        setShowModal(true)
    }
    const selectCompetition = (CompetitionId) => {
        const selectedCompetition = competitions.filter(item => {
            return item._id === CompetitionId
        })
        dispatch(setSelectedCompetition(selectedCompetition))
    }

    const createNewCompetition = () => {
        competitionsAPI.createNewCompetition(newName, newType, newPlayer1, newPlayer2,
            newScore, newDescription, newActive).then(data => {
            startApp()
            console.log('data from competitionForm:', data)
        })
    }
    const updateNewCompetition = () => {
        competitionsAPI.updateNewCompetition(selectedCompetition[0]._id, newName, newType, newPlayer1, newPlayer2,
            newScore, newDescription, newActive).then(data => {
            startApp()
            console.log('data from competitionForm:', data)
        })
    }
    useEffect(() => {
        if (editMode) {
            setNewName(selectedCompetition[0].name)
            setNewType(selectedCompetition[0].type)
            setNewPlayer1(selectedCompetition[0].player1)
            setNewPlayer2(selectedCompetition[0].player2)
            setNewScore(selectedCompetition[0].score)
            setNewDescription(selectedCompetition[0].description)
            setNewActive(selectedCompetition[0].active)
        } else {
            setNewName('')
            setNewType(defaultGameType)
            setNewPlayer1('')
            setNewPlayer2('')
            setNewScore('')
            setNewDescription('')
            setNewActive(false)
        }
    }, [selectedCompetition, editMode])
    const filter = (gameType) => {
        const filtered = competitions.filter(item=>{
        return item.type === gameType
        })
        dispatch(setFilteredCompetitions(filtered))
    }

    console.log('editMode:', editMode)
    console.log('filteredCompetitions:', filteredCompetitions)

    return (
        <div className={'block'}>
            <div className={'realTime'}>
                Текстова трансляція
            </div>
            <div className={'buttonsOnTop'}>
                <Button variant="outline-secondary"
                        onClick={() => {
                            setShowModal(true)
                            setEditMode(false)
                        }}
                >+Додати змагання</Button>
                <span>
                    {gameTypes.map(item =>
                        <Button
                            style={{marginRight:'5px'}}
                            key={item._id}
                            variant="outline-secondary"
                            onClick={() => {
                            filter(item.game)
                            }}
                        >{item.game}</Button>
                    )}
                    <Button
                       variant="outline-secondary"
                        onClick={() => {
                            filter('')
                        }}
                    >ALL</Button>
                </span>

            </div>


            <TableComponent competitions={competitionsToShow} selectedCompetition={selectedCompetition}
                            deleteCompetition={deleteCompetition} editCompetition={editCompetition}
                            selectCompetition={selectCompetition}
            />
            <Modal active={showModal} setActive={setShowModal} setEditMode={setEditMode}>
                {gameTypes.length > 1 &&
                    <CompetitionForm gameTypes={gameTypes}
                                     setActive={setShowModal}
                                     editMode={editMode}
                                     selectedCompetition={selectedCompetition}
                                     createNewCompetition={createNewCompetition}
                                     updateNewCompetition={updateNewCompetition}
                                     newName={newName}
                                     setNewName={setNewName}
                                     setNewType={setNewType}
                                     setNewPlayer1={setNewPlayer1}
                                     newPlayer1={newPlayer1}
                                     setNewPlayer2={setNewPlayer2}
                                     newPlayer2={newPlayer2}
                                     setNewScore={setNewScore}
                                     newScore={newScore}
                                     setNewDescription={setNewDescription}
                                     newDescription={newDescription}
                                     setNewActive={setNewActive}
                    />}
            </Modal>
        </div>
    );
};

export default CompetitionPage;