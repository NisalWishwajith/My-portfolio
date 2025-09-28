import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export default function Contact() {

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
      <h2 className="contact--heading lg:text-[50px]">Contact Me</h2>
      <p className="text-lg mt-3">
        You can contact me through the form below or by sending me an email
      </p>
      <form className="contact--form--container py-10" ref={form} onSubmit={sendEmail}>
        <label htmlFor="first-name" className="contact--label">
          <span className="text-md"> <p className='text-indigo-900'>Name :  </p> </span>
          <input
            type="text"
            className="contact--input text-md text-indigo-950 placeholder-gray-200"
            name="name"
            id="name"
            placeholder='Ex: Nisal Wishwajith'
            required
          />
        </label>

        <label htmlFor="email" className="contact--label">
          <span className="text-md"> <p className='text-indigo-900'> Email :  </p></span>
          <input
            type="email"
            className="contact--input text-md text-indigo-950 placeholder-gray-200"
            name="email"
            id="email"
            placeholder="Ex: example@gmail.com"
            required
          />
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md"> <p className='text-indigo-900'> Message :  </p> </span>
          <textarea
            className="contact--input text-md text-indigo-950 placeholder-gray-200"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <input type="submit" value="Send" className="btn btn-primary contact--form--btn" />
        </div>
        <p> OR </p>
        <div className="space-y-4">
          <Link
            to="https://mail.google.com/mail/?view=cm&fs=1&to=wishwajithnisal@gmail.com"
            target='_blank'
            className="flex justify-center items-center gap-3 px-6 py-2 rounded-lg bg-red-50 text-red-700 font-medium border border-red-500 hover:bg-red-500 hover:text-white transition duration-300"
          >
            <MdEmail size={22} />
            wishwajithnisal@gmail.com
          </Link>

          <Link
            to="tel:+94715714175"
            target='_blank'
            className="flex justify-center items-center gap-3 px-6 py-2 rounded-lg bg-green-50 text-green-700 font-medium border border-green-500 hover:bg-green-500 hover:text-white transition duration-300"
          >
            <FaPhone size={20} />
            +94 71 571 4175
          </Link>
        </div>
      </form>
    </section>
  );
}
