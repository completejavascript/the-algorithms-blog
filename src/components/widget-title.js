import React from "react";
import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <p
    style={{
      fontStyle: `normal`,
      fontSize: `${rhythm(0.8)}`,
      borderBottom: `1px solid hsla(0,0%,0%,0.07)`,
      fontWeight: `600`
    }}
  >
    {children}
  </p>
);