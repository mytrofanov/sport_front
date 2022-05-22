import React from 'react';

const Line = ({active,name, type, player1, player2, score,description }) => {
    return (
        <tr style={ active === true && {backgroundColor:'red'} }>
            <td>{name}</td>
            <td>{type}</td>
            <td>{player1}</td>
            <td>{player2}</td>
            <td>{score}</td>
            <td>{description}</td>
            <td>{active}</td>
        </tr>
    );
};

export default Line;