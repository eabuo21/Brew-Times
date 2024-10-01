import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FadeLoader } from "react-spinners";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const templateParams = {
    email: email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_id", "template_id", templateParams, "user_id")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmail("");
        alert("Thanks for Subscribing");
        setLoading(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setLoading(false);
        alert("Failed to subscribe. Please try again.");
      });
  };

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5 justify-center items-center p-2 ">
      <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-bold ">
        News As Fresh As Our Coffee
      </h3>
      <form
        onSubmit={handleSubmit}
        className="w-full  h-[fixed] p-2 flex flex-row justify-center items-center "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[300px] p-4 text-white bg-transparent border-2 border-white   focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-white flex justify-center items-center w-[80px] h-[60px] ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-black text-4xl" />
        </button>
      </form>

      <div className="w-full flex gap-x-4 justify-center items-center mx-auto">
        {loading ? (
          <b>
            <FadeLoader color="white" size={50} />
          </b>
        ) : null}
      </div>
    </div>
  );
}
