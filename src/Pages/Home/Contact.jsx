import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export default function Contact() {

  const form = useRef();

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    success: true
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pb7prtf', 'template_egydbq6', form.current, {
        publicKey: 'QR24V_5Z1wH4TFdP9',
      })
      .then(
        () => {
          setPopup({
            show: true,
            message: "Your message was sent successfully. Will get back to you soon.",
            success: true
          });
          form.current.reset();
        },
        (error) => {
          setPopup({
            show: true,
            message: "Failed to send message. Please try again or send me an email.",
            success: false
          });
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
          <input type="submit" value="Send Message" className="btn btn-primary w-full contact--form--btn" />
        </div>
        <p> OR </p>
        <div className="space-y-4">
          <Link
            to={`mailto:wishwajithnisal@gmail.com`}
            target='_blank'
            className="flex justify-center items-center gap-3 px-6 py-2 rounded-lg bg-red-50 text-red-700 font-medium border border-red-500 hover:bg-red-500 hover:text-white transition duration-300"
          >
            <MdEmail size={22} />
            wishwajithnisal@gmail.com
          </Link>

          <Link
            to={`tel:+94715714175`}
            target='_blank'
            className="flex justify-center items-center gap-3 px-6 py-2 rounded-lg bg-green-50 text-green-700 font-medium border border-green-500 hover:bg-green-500 hover:text-white transition duration-300"
          >
            <FaPhone size={20} />
            +94 71 571 4175
          </Link>
        </div>
      </form>

      {popup.show && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${popup.success ? 'bg-neutral-800' : 'bg-black-500'} bg-opacity-90`}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className={`text-center text-lg ${popup.success ? 'text-indigo-800' : 'text-red-700'}`}>
              {popup.message}
            </p>
            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="mt-4 w-full py-2 px-4 bg-indigo-800 text-white rounded hover:bg-transparent hover:text-indigo-800 hover:border border-indigo-800 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
