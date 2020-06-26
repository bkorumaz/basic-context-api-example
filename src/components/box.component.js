import React from "react";
import { ValueContext } from "../context/value.context";

const Box = () => {
  const value = React.useContext(ValueContext);
  return (
    <>
      <span>Hello this is a box. And the value is:{value}</span>
    </>
  );
};

export default Box;
