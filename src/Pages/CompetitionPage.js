import React from 'react';
import TableComponent from "../Components/table";
import './competitionPage.css'
import {Button} from "react-bootstrap";

const CompetitionPage = ({competitions, selectedCompetition, loading}) => {
    return (
        <div className={'block'}>
            <Button variant="outline-secondary">+Додати змагання</Button>
            <TableComponent competitions={competitions} selectedCompetition={selectedCompetition}/>
        </div>
    );
};

export default CompetitionPage;