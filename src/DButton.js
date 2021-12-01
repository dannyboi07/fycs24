import React from 'react';
import Button from '@mui/material/Button';
//import { PropTypes } from 'prop-types';

function DButton( { func, className, variant, color, calcBuffer, setCalcBuffer } ) {

    const buttonFunction = () => {
        if (calcBuffer === '0' && (func !== 'C' && func !== '+' && func !== '-' && func !== '*' && func !== '/')) {
            setCalcBuffer('' + func);
            console.log(calcBuffer[calcBuffer.length - 1]);
        }
        else if (func === 'C') {
            setCalcBuffer('0');
        }
        else if ( (calcBuffer[calcBuffer - 1] === '+' && calcBuffer[calcBuffer - 1] === '-' 
        && calcBuffer[calcBuffer - 1] === '*' && calcBuffer[calcBuffer - 1] === '/' 
        && calcBuffer[calcBuffer - 1] === '1'
        && calcBuffer[calcBuffer - 1] === '2'
        && calcBuffer[calcBuffer - 1] === '3'
        && calcBuffer[calcBuffer - 1] === '4'
        && calcBuffer[calcBuffer - 1] === '5') ||
        (func !== '+' && func !== '-' 
        && func !== '*' && func !== '/') ) {
            setCalcBuffer(calcBuffer + func);
            console.log("HI") 
        }
        else if ( (calcBuffer[calcBuffer.length - 1] !== "+" 
        && calcBuffer[calcBuffer.length - 1] !== '-' 
        && calcBuffer[calcBuffer.length - 1] !== '*' 
        && calcBuffer[calcBuffer.length - 1] !== '/') || (func === '+' && func === '-' && func === '*' && func === '/')) {
            setCalcBuffer(calcBuffer + func);
            console.log("hi", "func:", func, "calc:", calcBuffer);
        }
    };

    return (
        <Button variant={variant} color={color} onClick={buttonFunction} className={className}>
            {func}
        </Button>
    );
    
}

/*DButton.propTypes = {
    calcBuffer: PropTypes.string.isRequired,
    func: PropTypes.string.isRequired
};*/

export default DButton;