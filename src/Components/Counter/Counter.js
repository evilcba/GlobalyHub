import React, { useState } from 'react'
// import { useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {

    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1 className='p-4'>Counter</h1>
      <div className='flex mx-auto'>
        <button onClick={handleDecrement} className="m-4 p-4 rounded-md  bg-[#1D7874] py-2 text-center text-white drop-shadow-lg">-</button>
        <button className="m-4 p-4 rounded-md  bg-[#e5eeedc2] py-2 text-center text-black drop-shadow-lg">{count}</button>
        <button onClick={handleIncrement} className="m-4 p-4 rounded-md  bg-[#1D7874] py-2 text-center text-white drop-shadow-lg">+</button>

      </div>
      <button onClick={reset} className=" px-20  m-2 pr-r rounded-md  bg-[#1D7874] shadow-black py-2 text-center text-white drop-shadow-lg">Reset</button>
    </div>
  )
}

export default Counter