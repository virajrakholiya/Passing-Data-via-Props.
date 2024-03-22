import React, { useState } from "react";
import Main from "./Components/MainApp";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Viraj Rakholiya",
      work: "Full-Stack Devloper",

    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Prit Vaghni",
      work: "MERN-Stack Devloper",

    },
    {
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vivek Ramani",
      work: "React Devloper",
    },
  ];


  
  return (
    <div className="w-full h-[100vh] bg-slate-400 flex justify-center items-center">
      <Main value={data} />
    </div>
  );
}

export default App;
