"use client"
import React, {useState} from "react";

const Header = () => {
  const [title, settitle] = useState("");
  const [isSubmit, setisSubmit] = useState(false);


  const handlesubmit = (event)=>{
    event.preventDefault();
    setisSubmit(true)
  }
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handlesubmit}>
        <textarea
          className="bg-black text-white rounded mb-8"
          value={title}
          onChange = {(e)=>settitle(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-400 text-white flex justify-center items-center rounded border-none p-2 font-bold"
        >
          Convert
        </button>
        {isSubmit && <h2 className="mt-5 font-bold">{title.toUpperCase()}</h2>}
      </form>
    </div>
  );
};

export default Header;
