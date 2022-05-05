import React from "react";

const Child = (props) => {
  return (
    <div>
      {console.log("child one")}
      <h2>{props.msg}</h2>
    </div>
  );
};

export default React.memo(Child);
