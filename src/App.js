import React from "react";
import Box from './components/box.component';

import { ValueContext } from "./context/value.context";

export default () => {
  return(
  <ValueContext.Provider value="42">
    <h1>Welcome to context api testing project!</h1>
    <p>This React App created to implement a basic context using useContext hook.</p>
    <Box/>
  </ValueContext.Provider>
);
}
