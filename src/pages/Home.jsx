import React from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  if (counter === 5) {
    // When the counter reaches 5, we generate an error
    throw new Error('I crashed when counter reached 5!');
  }

  return (
    <div className="">
      8e90
    </div>
  );
};

export default Home;