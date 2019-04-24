import React from 'react';

const dStyle = { 
    marginBottom: '1.5rem'
};

const hStyle = {
    display: 'inline',
    fontSize: '1.1rem',
    marginBottom: '1.5rem'
};

const pStyle = {
    display: 'inline'
};

const label = (props) =>{
        return (
            <div style={dStyle}>
                <h3 style={hStyle}>{props.name}</h3>
                <p style={pStyle}>{props.value}</p>
            </div>
        )
}

export default label;