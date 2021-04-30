import React from 'react';
import './styles.css';

function Profile() {
  return (
    <div className="container">
      <h1>My CV</h1>
      <div className="prof-btn">
        <a
          href="https://drive.google.com/file/d/1ZPOlhl9NHMBbHD9059X_9Thj-S-c94XQ/view?usp=sharing"
          download="true"
        >
          My cv
        </a>
      </div>
    </div>
  );
}

export default Profile;
