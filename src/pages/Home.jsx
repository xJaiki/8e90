import React from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import AnimatedLogo from '../components/ui/AnimatedLogo';

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
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Eureka, it works! <span className="text-sm font-medium text-gray-600">i hope</span>
          </h1>
          <AnimatedLogo width="8" height="8" />
          <div className="p-6 bg-green-100 rounded-lg my-8">
            <p className="text-lg text-green-700 font-medium">
              Excellent! The template has been configured correctly. <br /> 
              You can proceed by deleting the content of this page and start building your app.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-left border-4 border-l-rose-600 border-t-0 border-r-0 border-b-0">
            <h2 className="text-xl font-bold mb-4 text-rose-600">
              Project Information
            </h2>
            <p className="text-gray-700 mb-4">
              This is a minimal React + Tailwind CSS template. It includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>React 19 with optimized Vite configuration</li>
              <li>Tailwind CSS 4.0 preconfigured</li>
              <li>React Router for navigation</li>
              <li>
                <button className="text-white bg-rose-600 p-2 rounded-xl hover:bg-rose-800 cursor-pointer" onClick={() => {
                  // random toast between toast, toast.success, toast.error, toast.loading
                  const toasts = [toast, toast.success, toast.error];
                  const randomToast = toasts[Math.floor(Math.random() * toasts.length)];
                  randomToast("I'm not a bread slice 🍞, I'm a toast 🥪!");

                }}>
                  React Hot Toast
                </button>{' '}
                for notifications
              </li>
              <li>
                <button className='text-white bg-rose-600 p-2 rounded-xl hover:bg-rose-800 cursor-pointer' onClick={() => handleClick()}>
                  React Error Boundary
                </button>{' '}
                - Click 5 times to generate an error, now you are at {counter}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;