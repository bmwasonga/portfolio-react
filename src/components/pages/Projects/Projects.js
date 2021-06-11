import React from 'react';
import { projList } from './projectData';

function Projects() {
  return (
    <div id="projects" className="bg-indigo-900 w-full h-full pt-10 pb-20">
      <h1 className="text-gray-100 font-bold xl:text-6xl md:text-6xl sm:text-5xl text-center">
        I have worked on the following projects:
      </h1>
      <div className="">
        <div className="flex xl:flex-row lg:flex-row md:flex-row md:flex-wrap sm:flex-col flex-wrap m-12 mb-10">
          {projList.map((project) => {
            const { id, url, text, image, desc } = project;
            return (
              <a
                key={id}
                href={url}
                target="blank"
                className="shadow-lg p-10 hover:shadow-sm hover:transform  xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full "
              >
                <img
                  src={image}
                  alt={text}
                  className="xl:w-full lg:w-full md:w-1/2 sm:w-full"
                />
                <h3 className="text-gray-100 xl:text-4xl md:text-4xl sm:text-3xl text-center hover:text-gray-800 p-5">
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
