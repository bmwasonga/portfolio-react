import React from 'react';
import './styles.css';
import { front, back } from './skilldata';

function Skills() {
  return (
    <div className="bg-indigo-900 max-w-full h-screen">
      <h2>What I do</h2>

      <p>I am currently learning and exploring the following:</p>
      <h2>Here's what I know:</h2>
      <ul className="pack-icons">
        {front.map((packIcon) => {
          const { id, icon } = packIcon;
          return <li key={id}>{icon}</li>;
        })}
      </ul>

      <h2>Here's what I am learning:</h2>
      <ul className="pack-icons">
        {back.map((packIcon) => {
          const { id, icon } = packIcon;
          return <li key={id}>{icon}</li>;
        })}
      </ul>
      <h2>What do i want to do next? </h2>
      <p>
        I aspire to be a fullstack Developer and I am working on that everyday.
      </p>
    </div>
  );
}

export default Skills;
