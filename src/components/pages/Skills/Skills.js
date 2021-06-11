import React from 'react';
import { front, back } from './skilldata';
import man from '../../assets/programmer.svg';

function Skills() {
  return (
    <div className="bg-indigo-500 max-w-full h-screen">
      <div className="">
        <div className="flex content-center justify-center">
          <h1 className="flex content-center justify-center text-gray-100 xl:text-6xl md:text-6xl sm:text-5xl  mb-8">
            What I do
          </h1>
        </div>
        <div className="flex bg-gray-400 w-100 ml-10 mr-10 lg:flex-row xl:flex-row md:flex-col sm:flex-col items-center justify-center">
          <div className="flex items-center justify-center bg-indigo-100 xl:w-4/12 lg:w-4/12 md:w-full sm:w-full xl:h-ful md:h-full m-5">
            <img
              className="flex items-center justify-center bg-indigo-900p-10 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full xl:h-4/5 lg:h-4/5 "
              src={man}
              alt="man sitting on a table"
            />
          </div>
          <div className="bg-red-700 m-5 xl:w-4/6">
            <h2 className="text-gray-100 lg:text5xl md:text-4xl sm:text-3xl p-2 text-center">
              I am currently working and exploring with the following:
            </h2>

            <h3 className="text-gray-100 lg:text5xl md:text-4xl sm:text-3xl p-2 text-center">
              Front-end:
            </h3>

            <ul className="flex justify-center content-center">
              {front.map((packIcon) => {
                const { id, icon } = packIcon;
                return (
                  <li
                    className="text-gray-400 hover:text-gray-700 text-5xl p-2"
                    key={id}
                  >
                    {icon}
                  </li>
                );
              })}
            </ul>
            <h3 className="text-gray-100 lg:text5xl md:text-4xl sm:text-3xl p-2 text-center">
              Back-end:
            </h3>
            <ul className="flex justify-center content-center">
              {back.map((packIcon) => {
                const { id, icon } = packIcon;
                return (
                  <li
                    className="text-gray-400 hover:text-gray-700 text-5xl p-2"
                    key={id}
                  >
                    {icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
