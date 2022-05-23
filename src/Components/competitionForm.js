import React from 'react';
import {Button, Form} from "react-bootstrap";

const CompetitionForm = ({   gameTypes,
                             setActive,
                             editMode,
                             selectedCompetition, createNewCompetition, newName, setNewName,
                             setNewType,setNewPlayer1, newDescription, newPlayer2, newPlayer1, newScore,
                             setNewActive, setNewDescription, setNewPlayer2, setNewScore,updateNewCompetition
                         }) => {
    const onFormSubmit = (event) => {
        if (!editMode) {
            createNewCompetition()
        }
        if (editMode) {
            const updatedName = event.target.elements.controlId("Name")
            updateNewCompetition()
        }
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