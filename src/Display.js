import React from 'react';

const Display = (props) => {
    return (
        <p className={props.className} >
            {props.calcBuffer}
        </p>
    )
}

export default Display;