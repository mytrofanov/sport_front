import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {competitionsAPI} from "../Api/Api";

const CompetitionForm = ({name, type, player1, player2, score, description, active, gameTypes}) => {
    const [newCompetition, setNewCompetition] = useState({
        name: '', type: '', player1: '',
        player2: '', score: '', description: '', active: false
    })
    const [newName, setNewName] = useState('')
    const [newType, setNewType] = useState(gameTypes[0].game || null)
    const [newPlayer1, setNewPlayer1] = useState('')
    const [newPlayer2, setNewPlayer2] = useState('')
    const [newScore, setNewScore] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newActive, setNewActive] = useState(false)

    const createNewCompetition = () => {
        competitionsAPI.createNewCompetition(newName, newType, newPlayer1, newPlayer2,
            newScore, newDescription, newActive).then(data => {
            console.log('data from competitionForm:', data)
        })
    }


    const onFormSubmit = (event) => {
        createNewCompetition()
        event.preventDefault();
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="Name">
                <Form.Control type="text" placeholder="Назва змагання"
                              required={true}
                              onChange={e => setNewName(e.target.value)}

                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Тип змагання</Form.Label>
                <Form.Select
                    onChange={e => setNewType(e.target.value)}>
                    {gameTypes.map((item, index) =>
                        <option key={index + item._id}>{item.game}</option>
                    )}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="player1">
                <Form.Control type="text" placeholder="Ігрок1/Команда1" required={true}
                              onChange={e => setNewPlayer1(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="player2">
                <Form.Control type="text" placeholder="Ігрок2/Команда2" required={true}
                              onChange={e => setNewPlayer2(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="score">
                <Form.Control type="text" placeholder="Рахунок" required={true}
                              onChange={e => setNewScore(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Control type="text" placeholder="Коментарі"
                              onChange={e => setNewDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="active">
                <Form.Label>Відбувається зараз</Form.Label>
                <Form.Select
                    onChange={e => setNewActive(e.target.value)}
                >
                    <option>false</option>
                    <option>true</option>
                </Form.Select>


            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CompetitionForm;