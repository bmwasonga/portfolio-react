import React from 'react';
import './styles.css';

function Contact() {
  return (
    <div className="contact-form">
      <h1>Get in touch with me</h1>
      <br />
      <br />
      <form
        name="contact v2"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact v2" />

        <div hidden>
          <input name="bot-field" />
        </div>

        <div>
          <label>
            First name
            <br />
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label>
            Last name
            <br />
            <input type="text" name="last-name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label>
            Any Comments?
            <br />
            <textarea name="comments"></textarea>
          </label>
        </div>

        <button type="submit">Submit The Results</button>
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
