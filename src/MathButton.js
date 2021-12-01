import React from 'react';
import Button from '@mui/material/Button'
import { Alert } from '@mui/material';

const MathButton = ( { variant, color, className, calcBuffer, setCalcBuffer, func } ) => {

    const getAns = () => {
        if ( calcBuffer[calcBuffer.length - 1] !== "+" && calcBuffer[calcBuffer.length - 1] !== '-' && calcBuffer[calcBuffer.length - 1] !== '*' && calcBuffer[calcBuffer.length - 1] !== '/') {
            setCalcBuffer(eval(calcBuffer));
        }
        else if ( calcBuffer[calcBuffer.length - 1] === "+" && calcBuffer[calcBuffer.length - 1] === '-' && calcBuffer[calcBuffer.length - 1] === '*' && calcBuffer[calcBuffer.length - 1] === '/' ) {
            alert("You need to enter one more number");
        }
    }

    return (
        <Button variant={variant} color={color} onClick={getAns} className={className}>
            {func}
        </Button>
    )
}

export default MathButton;