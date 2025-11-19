"use client";

import Image from "next/image";
import {useState } from "react";



export default function Home() {


    const handleButtonPress = () => {
      window.location.href = "/home"
    };


      return (

    <div className="flex flex-col space-y-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    
    <div>
        <h1> Welcome to typeracer</h1>
    </div>
                
          <button 
          onClick={handleButtonPress}
          className ="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           get started
          </button>
   </div>
  );
}
