import React from "react";
import 'font-awesome/css/font-awesome.css';
import { rhythm } from "../utils/typography";

export default (props) => {
  const { date, timeToRead } = props;
  const itemStyle = {
    marginRight: `${rhythm(0.75)}`,
    color: "#ABABAB",
    fontSize: `${rhythm(0.5)}`
  }

  return (
    <div>
      <span style={itemStyle}>
        <i className="fa fa-calendar"></i>{" "}
        {date}
      </span>

      <span style={itemStyle}>
        <i className="fa fa-clock-o"></i>{" "}
        {`${timeToRead} ${timeToRead > 1 ? `minutes read` : `minute read`}`}
      </span>
    </div>
  )
}