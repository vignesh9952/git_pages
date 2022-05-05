import { useEffect, useState } from "react";
import React from "react";

const Effects = (props) => {
  const [Msg, setMsg] = useState("vicky");
  const [city, setcity] = useState("chennai");

  useEffect(() => {
    console.log("this is useEffect");
    setMsg(props.prop1);
  }, [Msg]);

  //   useEffect(() => {
  //     console.log("this is useEffect 2");
  //     setcity("hyderabad");
  //   }, [setcity]);

  const Changes = () => {
    setMsg("vicky R");
    setcity("bangalore");
  };
  return (
    <div>
      {console.log("render")}
      <h1>useEffect</h1>
      <h2>{Msg}</h2>
      <h2>{city}</h2>
      <button onClick={Changes}>change</button>
    </div>
  );
};

export default Effects;
