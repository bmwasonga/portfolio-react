import React from 'react';
import { projList } from './projectData';
import './styles.css';

function Projects() {
  return (
    <div className="container">
      <h1>I have worked on the following projects:</h1>
      <div className="proj-list">
        {projList.map((project) => {
          const { id, url, text, image, desc } = project;
          return (
            <li key={id}>
              <a href={url} target="blank">
                <img src={image} alt={text} />
                <h3>{text}</h3>
                <p>{desc}</p>
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
