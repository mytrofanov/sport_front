import React from 'react';
import {Button, Table} from "react-bootstrap";
import Line from "./line";

const TableComponent = ({competitions, selectedCompetition}) => {
    console.log(competitions)

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Змагання </th>
                    <th>Тип змагання</th>
                    <th>Ігрок1/Команда1</th>
                    <th>Ігрок2/Команда2</th>
                    <th>Рахунок</th>
                    <th>Коментарі</th>
                    <th>Відбувається зараз</th>
                </tr>
                </thead>
                <tbody>

                {competitions.map((item, index) =>
                    <tr key={index + item.name} >
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.player1}</td>
                        <td>{item.player2}</td>
                        <td>{item.score}</td>
                        <td>{item.description}</td>
                        <td>{item.active}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;