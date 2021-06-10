import React from 'react';
function Home() {
  return (
    <div className="container">
      <h2> Hello, My name is Ben Wasonga.</h2>
      <div className="home-cont">
        <div className="back-of-img"></div>
        <img src="/images/me.png" alt="Ben Wasonga" />
      </div>
      <div className="home-desc ">
        <h3 className="text-green-700">
          I am a self-taught developer.
          <br />
          <span></span>
          <br />
          from Nairobi -Kenya
        </h3>
      </div>
    </div>
  );
}

export default Home;
