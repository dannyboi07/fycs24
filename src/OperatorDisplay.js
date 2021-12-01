import React from 'react';

const OperatorDisplay = (props) => {
    return (
        <p className={props.className}>
            {props.operator}
        </p>
    )
}

export default OperatorDisplay;
