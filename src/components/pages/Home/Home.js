import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import './styles.css';
function Home() {
  return (
    <div className="container">
      <h1> Hello, My name is Ben Wasonga.</h1>
      <div className="home-cont">
        <div className="back-of-img"></div>
        <img src="/images/me.png" alt="Ben Wasonga" />
      </div>
      <div className="home-desc">
        <h3>
          I am a self-taught developer.
          <br />
          <span>
            <FaLocationArrow />
          </span>
          <br />
          from Nairobi -Kenya
        </h3>
      </div>
    </div>
  );
}

export default Home;
