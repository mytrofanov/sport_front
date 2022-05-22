import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const SpinnerComponent = () => {
    return (
        <Spinner animation="grow" size="sm"  style={{width:'10%', height:'10vh', marginTop:'10%',marginLeft:'40%'}}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default SpinnerComponent;
