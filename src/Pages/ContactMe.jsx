import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const form = useRef();
  const [result, setResult] = useState(''); // State for showing success or error messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ej4amzk', 'template_wge6cbw', form.current, 'LVxQ_cMmq6jTA5snN')
      .then(
        () => {
          setResult('Message sent successfully!');
          alert('Your message has been sent successfully!'); // Alert on success
          form.current.reset();
        },
        (error) => {
          setResult('Failed to send message, please try again.');
          alert('Failed to send the message, please try again.'); // Alert on failure
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          For career opportunities and shaping the future of the web
        </p>
      </div>
      <form className="contact--form--container" onSubmit={sendEmail} ref={form}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>

        {/* Display form submission result */}
        <span>{result}</span>
      </form>
    </section>
  );
}

export default ContactMe