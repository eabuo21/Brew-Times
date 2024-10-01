import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_y20u204g",
        templateParams,
        "user_c5X4c9479d5f88d10"
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="w-full h-[fixed] flex flex-col justify-center items-center p-2 ">
      <section className="w-full h-[fixed] justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full   md:grid   md:grid-cols-2 gap-x-5  gap-y-5  justify-center  items-start      md:items-center  p-2  md:px-3 "
        >
          <label
            className="block text-gray-800 text-base md:text-lg lg:text-xl  font-passion  font-medium mb-2 w-full "
            for="name"
          >
            Name
            <input
              className="appearance-none flex flex-col gap-y-4  py-2  px-2    bg-transparent  w-full  h-[60px] text-black  border border-gray-800  focus:outline-none"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="enter your full name "
            />
          </label>
          <label
            className="block text-gray-800 text-base md:text-lg lg:text-xl  font-passion  font-medium mb-2 w-full "
            for="name"
          >
            Email
            <input
              className="appearance-none flex flex-col gap-y-4  py-2  px-2    bg-transparent  w-full  h-[60px] text-black  border border-gray-800  focus:outline-none"
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="enter your email address"
            />
          </label>
          <label
            className="block text-gray-800 text-base md:text-lg lg:text-xl  font-passion  font-medium mb-2 w-full "
            for="name"
          >
            Message
            <textarea
              className="appearance-none flex flex-col gap-y-4  py-2  px-2    bg-transparent  w-full  md:w-[400px] lg:w-[600px]  h-[250px] text-black  border border-gray-800  focus:outline-none"
              id="name"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="enter your message "
            ></textarea>
          </label>
          <button
            className={` col-span-2 w-full       md:w-[200px] h-[90px] bg-black text-white hover:transform hover:duration-700 hover:ease-in-out  transform  hover:bg-gray-900 hover:text-white     `}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
