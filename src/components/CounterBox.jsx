// src/components/CounterBox.jsx
import React, { useEffect, useState } from 'react';

const CounterBox = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16)); // approx 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className='border bg-gradient-to-b from-[#F2E7FE] via-[#EEE7FE] to-[#FFFFFF] border-white text-center rounded-3xl py-4'>
      <h1 className='text-[50px] font-medium'>{count}+</h1>
      <p className='text-[18px] pb-4 text-[#4D4D4D]'>{label}</p>
    </div>
  );
};

export default CounterBox;
