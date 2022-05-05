import React, { useState } from "react";
import Child from "./childComponent";
const Parent = () => {
  const [msg, setmsg] = useState("hi");
  const [name, setname] = useState("vicky");

  const changeName = () => {
    setname("vignesh");
  };

  return (
    <div>
      {console.log("parent")}
      <Child msg={msg}></Child>
      <h2>my name is{name}</h2>
      <button onClick={changeName}>changeit</button>
    </div>
  );
};

export default Parent;
