import React from 'react';
import './Styles/Styles.css';
import { packs } from '../Data';

function About() {
  return (
    <div className="container">
      <h1>This is the About page</h1>
      <ul className="pack-icons">
        {packs.map((packIcon) => {
          const { id, icon } = packIcon;
          return <li key={id}>{icon}</li>;
        })}
      </ul>
    </div>
  );
}

export default About;
