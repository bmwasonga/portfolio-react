import React from 'react';
import { projList } from './projectData';

function Projects() {
  return (
    <div className="bg-indigo-900 max-w-full h-full pt-10 pb-20">
      <h1 className="text-gray-100 xl:text-6xl md:text-6xl sm:text-5xl text-center">
        I have worked on the following projects:
      </h1>
      <div className="">
        <div className="grid grid-flow-col xl:grid-cols-3 xl:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-3  sm:grid-cols-1 sm:grid-rows-6 m-10">
          {projList.map((project) => {
            const { id, url, text, image, desc } = project;
            return (
              <a
                key={id}
                href={url}
                target="blank"
                className="shadow-lg p-5 hover:shadow-sm hover:transform hover:scale-50"
              >
                <img src={image} alt={text} className="" />
                <h3 className="text-gray-100 xl:text-4xl md:text-4xl sm:text-3xl text-center hover:text-gray-800">
                  {text}
                </h3>
                <p className="text-gray-100 lg:text3xl md:text-2xl sm:text-2xl">
                  {desc}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
