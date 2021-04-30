import React from 'react';
import './styles.css';

function Contact() {
  return (
    <div className="container">
      <h1>Get in touch with me</h1>
      <form className="form" id="form1">
        <input
          name="name"
          type="text"
          className="validate[required,custom[onlyLetter],length[0,20]] feedback-input"
          placeholder="Name"
          id="name"
        />

        <input
          name="email"
          type="text"
          className="validate[required,custom[email]] feedback-input"
          id="email"
          placeholder="Email"
        />

        <textarea
          name="text"
          className="validate[required,length[6,300]] feedback-input"
          id="comment"
          placeholder="Comment"
        ></textarea>

        <input type="submit" value="SEND" id="button-blue" />
      </form>
    </div>
  );
}

export default Contact;
