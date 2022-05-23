import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {competitionsAPI} from "../Api/Api";


const CompetitionForm = ({   gameTypes,
                             setActive,
                             startApp,
                             editMode,
                             selectedCompetition
                         }) => {

    const [newName, setNewName] = useState('')
    const [newType, setNewType] = useState(gameTypes[0].game)
    const [newPlayer1, setNewPlayer1] = useState('')
    const [newPlayer2, setNewPlayer2] = useState('')
    const [newScore, setNewScore] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newActive, setNewActive] = useState(false)

    const createNewCompetition = () => {
        competitionsAPI.createNewCompetition(newName, newType, newPlayer1, newPlayer2,
            newScore, newDescription, newActive).then(data => {
            startApp()
            console.log('data from competitionForm:', data)
        })
    }

    const onFormSubmit = (event) => {
        createNewCompetition()
        event.preventDefault();
        setActive(false)
    }
    console.log('editMode:', editMode)


    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="Name">
                <Form.Control type="text" placeholder="Назва змагання"
                              required={true}
                              defaultValue={editMode?selectedCompetition[0].name :newName}
                              onChange={e => setNewName(e.target.value)}

                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Тип змагання</Form.Label>
                <Form.Select
                    onChange={e => setNewType(e.target.value)}>
                    <option >{editMode?selectedCompetition[0].type :''}</option>
                    {gameTypes.map((item, index) =>
                        <option key={index + item._id}>{item.game}</option>
                    )}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="player1">
                <Form.Control type="text" placeholder="Ігрок1/Команда1" required={true}
                              defaultValue={editMode? selectedCompetition[0].player1 :newPlayer1}
                              onChange={e => setNewPlayer1(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="player2">
                <Form.Control type="text" placeholder="Ігрок2/Команда2" required={true}
                              defaultValue={editMode? selectedCompetition[0].player2 :newPlayer2}
                              onChange={e => setNewPlayer2(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="score">
                <Form.Control type="text" placeholder="Рахунок" required={true}
                              defaultValue={editMode? selectedCompetition[0].score :newScore}
                              onChange={e => setNewScore(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Control type="text" placeholder="Коментарі"
                              defaultValue={editMode? selectedCompetition[0].description :newDescription}
                              onChange={e => setNewDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="active">
                <Form.Label>Відбувається зараз</Form.Label>
                <Form.Select
                    onChange={e => setNewActive(e.target.value)}
                >
                    <option>{editMode?selectedCompetition[0].active :''} </option>
                    <option>{editMode?'false' :'false'} </option>
                    <option>{editMode?'true' :'true'} </option>
                </Form.Select>


            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CompetitionForm;