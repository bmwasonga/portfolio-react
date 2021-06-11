import React from 'react';
import emoji from 'react-easy-emoji';
import man from '../../assets/manOnTable1.svg';

export default function About() {
  return (
    <div className="flex flex-row justify-center bg-blue-500 max-w-full h-screen">
      <div className="bg-red-400 w-4/5 h-4/5 p-5 m-0 mt-16 ">
        <div className="flex flex-row md:flex-col sm:flex-col">
          <div className="bg-gray-100 w-2/4 m-5">
            <h1 className="md:text-6xl mb-8">
              {' '}
              Hi there, I am Ben{' '}
              <span className="animate-wave inline-block">{emoji('👋')}</span>
            </h1>

            <p className="md:text-4xl">
              I am a passionate Software Developer with experience in building
              Web applixations with Reactjs and Nodejs. I am also still learning
              some other cool libraries.
            </p>
          </div>

          <div className="w-2/4 bg-gray-400 m-10 flex justify-center">
            <img
              className="h-2/3 mx-auto "
              src={man}
              alt="man sitting on a table"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
