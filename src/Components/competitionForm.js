import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const CompetitionForm = ({name,type, player1, player2, score, description, active, gameTypes}) => {
    const [newCompetition, setNewCompetition] = useState({name:'', type:'', player1:'',
        player2:'', score:'', description:'', active:false})

    return (
        <Form>
            <Form.Group className="mb-3" controlId="Name">
                <Form.Label>Змагання</Form.Label>
                <Form.Control type="text" placeholder="Назва змагання" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Name">
                <Form.Label>Тип змагання</Form.Label>


            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CompetitionForm;