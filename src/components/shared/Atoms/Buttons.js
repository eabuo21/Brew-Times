import React from "react";
import Link from "next/link";

export default function Buttons({ onClick, text, link, className }) {
  return (
    <div className="w-[fixed] bg-blue-900 ">
      <Link href={link}>
        <button
          onClick={onClick}
          className={`  w-[200px] h-[90px] bg-black text-white hover:transform hover:duration-700 hover:ease-in-out  transform  hover:bg-gray-900 hover:text-white ${className}    `}
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
