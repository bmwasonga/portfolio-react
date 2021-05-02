import React from 'react';
import './styles.css';

function Contact() {
  return (
    <div className="contact-form">
      <h1>Get in touch with me</h1>
      <br />
      <br />
      <form
        name="portfoliocontact"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="portfoliocontact" />
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />

        <input
          name="email"
          type="text"
          className=" feedback-input"
          placeholder="Email"
        />

        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>

        <button type="submit" id="button-blue">
          SEND
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Contact;
