import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pb7prtf', 'template_egydbq6', form.current, {
        publicKey: 'lpm_hKo86prgugZUq',
      })
      .then(
        () => {
          alert('Your message was sent successfully. I will get back to you soon.');
        },
        (error) => {
          alert('Failed to send message Try Again or Send me email ("wishwajithnisal@gmail.com")', error.text);
        },
      );
  };


  return (
    <section id="Contact" className="contact--section">
      <div>
        
        <h2>Contact Me</h2>
        <p className="text-lg">
          You can contact me through the form below or by sending me an email
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="user_email"
              required
              
            />
          </label>
          </div>
          <div className="container">
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
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          {/* set submit button to send email */}
          <input type="submit" value="submit" className="btn btn-primary contact--form--btn" />
          {/* <button className="btn btn-primary contact--form--btn">Submit</button> */}
        </div>
        <p> OR </p>
        <p className="my-5"> Email to <a href="mailto:wishwajithnisal@gmail.com" className="underline text-indigo-600"> wishwajithnisal@gmail.com </a> </p>
      </form>
    </section>
  );
}
