import React from "react";
import ContactForm from "./Contact-Form";
import ContactElements from "./Contact-Elements";

export default function Holder() {
  return (
    <div className="w-full h-[fixed] grid grid-cols-1  gap-y-8 gap-x-5  md:grid-cols-2 ">
      <ContactElements />
      <ContactForm />
    </div>
  );
}
