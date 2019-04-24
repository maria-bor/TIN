import React from 'react';

const text = (props) => {
    return (
        <div style={props.style}>
            <p>{props.name}</p>
        </div>
    )
}
export default text;