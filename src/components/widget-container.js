import React from "react";
import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <div 
    style = {{
      padding: `${rhythm(1 / 2)}`, 
      marginTop:`${rhythm(1 / 2)}`,  
      backgroundColor: "#FFFFFF",
      boxShadow: `inset 0 -1px 0 0 #fff, 0 1px 5px rgba(0,0,0,.1)`
    }}
  >
    {children}
  </div>
);