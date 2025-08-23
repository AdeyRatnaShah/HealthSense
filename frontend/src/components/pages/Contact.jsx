import React, { useContext, useRef } from 'react'
// import { themeContext } from '../components/ThemeContext'
import emailjs from 'emailjs-com';

const Contact = () => {
  // const { theme } = useContext(themeContext);
  const theme = 'light';
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4wvjp9c',
        'template_jpdr3te',
        form.current,
        'wsvViLXGrtUIskxnK'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div
      className={`${theme === 'light' ? 'bg-white' : 'bg-gray-950'} ${theme === 'light' ? 'text-black' : 'text-white'
        } min-h-screen flex flex-col justify-center px-6 md:px-20`}
      id="connect"
    >
      <h2 className="text-5xl md:text-8xl font-semibold uppercase mb-10 md:mb-16">
        CONTACT
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-40">
        <div className="text-3xl md:text-5xl text-center md:text-left">
          We'd love to hear from you! 
        </div>

        <div className="w-full max-w-md">
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
              } p-6 rounded-lg shadow-md text-black dark:text-white`}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1 text-black "
              >
                Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="bg-white w-full p-2 border rounded text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1 text-black "
              >
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="bg-white w-full p-2 border rounded text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1 text-black "
              >
                Message <span className="text-red-700">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="4"
                className="bg-white text-black w-full p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-950 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
