import React, { useState } from 'react'
import DisplayScreen from '../DisplayScr/DisplayScreen';
import { FaDeleteLeft } from "react-icons/fa6";






const Buttons = () => {


  const [value, setValue] = useState('0');        // Current display value
  const [prevValue, setPrevValue] = useState(null); // Previous value before operator
  const [operator, setOperator] = useState(null);   // Stores the operator (+, -, etc.)

  const display = (val) => {
    setValue((prevValue) => {
      // If the display shows "0" or an operator was just pressed, replace the display with the new value
      if (operator) {
        return val;
      } else if (prevValue === '0') {
        return val;
      }
      // Otherwise, concatenate the new value to the current one
      return prevValue + val;
    });
  };

  const handleOperator = (op) => {
    if (prevValue === null) {
      setPrevValue(value); // Store the current value before the operator is pressed
    } else {
      calculate(); // Perform any pending calculations
    }
    setOperator(op); // Set the new operator
  };

  const calculate = () => {
    if (prevValue === null || operator === null) return; // Don't calculate if we don't have previous values or an operator

    const current = parseFloat(value);
    const previous = parseFloat(prevValue);
    let result = 0;

    // Perform the operation based on the operator
    switch (operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        break;
    }

    // Set the result as the new value, and clear the previous value and operator
    setValue(result.toString());
    setPrevValue(null);
    setOperator(null);
  };

  const clearDisplay = () => {
    setValue('0');
    setPrevValue(null);
    setOperator(null);
  };
  const removeLast = () => {
    setValue((prevValue) => {
      if (prevValue.length === 1) {
        // If only one character is left, reset to "0"
        return '0';
      } else {
        // Otherwise, remove the last character
        return prevValue.slice(0, -1);
      }
    });
  };

  return (
    <>
        <DisplayScreen value={value} />
        <div className='w-[260px] h-[300px]  '>
          <div className='w-full h-[100%] bg-pink-100 p-2  bg-transparent  grid grid-cols-4 '>
            <button onClick={() => display('1')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 z-10   px-2 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>1</button>
            <button onClick={() => display('2')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 z-10 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>2</button>
            <button onClick={() => display('3')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600 z-10'>3</button>
            <button onClick={clearDisplay} className='w-[50px] h-[50px]  rounded-full text-[20px] font-medium m-1 text-white bg-yellow-600'>Del</button>
            <button onClick={() => display('4')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>4</button>
            <button onClick={() => display('5')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>5</button>
            <button onClick={() => display('6')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>6</button>
            <button onClick={removeLast} className='w-[50px]  h-[50px] flex items-center justify-center  text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'><FaDeleteLeft /></button>
            <button onClick={() => display('7')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>7</button>
            <button onClick={() => display('8')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>8</button>
            <button onClick={() => display('9')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>9</button>
            <button onClick={() => handleOperator('/')} className='w-[50px] h-[50px] text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'>/</button>
            <button onClick={() => display('0')} className=' w-[117px] h-[50px] col-span-2 bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>0</button>
            <button onClick={() => display('.')} className='w-[50px] h-[50px] bg-gray-200 rounded-full text-[20px] font-medium m-1 bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600'>.</button>
            <button onClick={() => handleOperator('*')} className='w-[50px] h-[50px] text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'>*</button>
            <button onClick={() => handleOperator('+')} className='w-[50px] h-[50px] text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'>+</button>
            <button onClick={() => handleOperator('-')} className='w-[50px] h-[50px] text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'>-</button>
            <button onClick={() => handleOperator('%')} className='w-[50px] h-[50px] text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'>%</button>
            <button onClick={calculate} className='w-[50px] h-[50px] text-white bg-yellow-600 rounded-full text-[20px] font-medium m-1'>=</button>
          </div>
        </div>
    
    </>
  )
}

export default Buttons
