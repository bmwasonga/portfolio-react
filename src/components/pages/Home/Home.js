import React from 'react';
import emoji from 'react-easy-emoji';
import man from '../../assets/manOnTable1.svg';
import SocialMedia from '../../SocialMedia';

export default function About() {
  return (
    <div className="bg-indigo-900 flex flex-row justify-center bg-blue- max-w-full h-full xl:py-44 lg:py-44">
      <div className="flex flex-row  bg-indigo-900 w-10/12 h-4/5 mt-16  items-center justify-center">
        <div className="flex lg:flex-row xl:flex-row md:flex-col sm:flex-col items-center justify-center sm:flex-wrap">
          <div className=" bg-indigo-900 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full xl:m-5 md:m-5  sm:mt-24">
            <h1 className=" text-gray-100 font-bold xl:text-6xl md:text-6xl sm:text-5xl  mb-8">
              {' '}
              Hi there, I am Ben{' '}
              <span className="animate-wave inline-block">{emoji('👋')}</span>
            </h1>

            <p className="text-gray-100 lg:text5xl md:text-4xl sm:text-3xl">
              I am a self-taught Software Developer with experience in building
              Web applications with Reactjs and Nodejs. I am also still learning
              some other cool libraries.
            </p>
            <SocialMedia />
          </div>

          <div className="flex items-center justify-center bg-indigo-900 xl:w-4/12 lg:w-4/12 md:w-full sm:w-full xl:h-ful md:h-full">
            <img
              className="bg-indigo-900p-10 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full xl:h-4/5 lg:h-4/5 "
              src={man}
              alt="man sitting on a table"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
