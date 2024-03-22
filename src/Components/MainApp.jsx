import React, { useState } from "react";

function Main({ value }) {
  const [data, setData] = useState(Array(value.length).fill(false));

  const btnHandler = (index) => {
    const newData = [...data];
    newData[index] = !newData[index]
    setData(newData)
  };
  return (
    <div className="flex gap-5">
      {value.map((item, index) => (
        <div className="w-[300px] bg-white rounded-xl" key={index}>
          <img
            src={item.image}
            alt=""
            className="w-full h-[200px] object-cover object-center rounded-xl rounded-b-none"
          />
          <div className="p-3 flex flex-col gap-2 ">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <h2 className="text-lg">{item.work}</h2>
            <button className="bg-blue-400 p-2" onClick={() => btnHandler(index)}>
             {data[index]?'Remove Friend':'Add Friend'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
