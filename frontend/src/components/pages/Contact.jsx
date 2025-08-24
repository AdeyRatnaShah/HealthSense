import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const theme = "light";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wvjp9c",
        "template_jpdr3te",
        form.current,
        "wsvViLXGrtUIskxnK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-950 text-white"
      } min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-20 py-12`}
      id="connect"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold uppercase mb-10 text-center md:text-left">
        Contact
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-20 lg:gap-32">
        
        {/* Left Side - Intro Text */}
        <div className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left leading-snug md:leading-relaxed max-w-xl">
          We'd love to hear from you!  
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md lg:max-w-lg">
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`${
              theme === "light" ? "bg-gray-100" : "bg-gray-700"
            } p-6 sm:p-8 rounded-xl shadow-md`}
          >
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-black"
              >
                Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="bg-white w-full p-3 rounded-md border text-black focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-black"
              >
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="bg-white w-full p-3 rounded-md border text-black focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-black"
              >
                Message <span className="text-red-700">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="5"
                className="bg-white text-black w-full p-3 rounded-md border focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-gray-800 text-white px-5 py-3 rounded-lg w-full hover:bg-gray-950 transition duration-300 font-semibold"
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
