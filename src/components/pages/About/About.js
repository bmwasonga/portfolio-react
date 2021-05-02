import React from 'react';
import './styles.css';
import { know, learning } from './aboutData';

function About() {
  return (
    <div className="abt-container">
      <h2>about me</h2>

      <p>
        I am based in Nairobi Kenya and I have sourced all my knowledge from the
        internet
      </p>
      <h2>Here's what I know:</h2>
      <ul className="pack-icons">
        {know.map((packIcon) => {
          const { id, icon } = packIcon;
          return <li key={id}>{icon}</li>;
        })}
      </ul>

      <h2>Here's what I am learning:</h2>
      <ul className="pack-icons">
        {learning.map((packIcon) => {
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

export default About;
