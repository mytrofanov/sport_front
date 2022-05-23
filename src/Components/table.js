import React from 'react';
import {Button, Table} from "react-bootstrap";
import './table.css'

const TableComponent = ({competitions, selectedCompetition, deleteCompetition,editCompetition}) => {


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
                        <td className={'buttonsInTable'}>{item.name}
                            <span>
                                <Button variant="outline-secondary" onClick={()=>{deleteCompetition(item._id)}}>DEL</Button>
                                <Button variant="outline-secondary" onClick={()=>{editCompetition(item._id)}}>EDIT</Button>
                            </span>
                        </td>
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