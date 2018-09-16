import React from "react";
import "./grid.css";

export function GridContainerFull( {children}) {
  return (
    <div className="gr-container-full">
      {children}
    </div>
  )
}

export function GridContainer({ children }) {
  return (
    <div className="gr-container">
      {children}
    </div>
  )
}

export function GridRow({ children }) {
  return (
    <div className="gr-row">
      {children}
    </div>
  )
}

export function GridColumn({ xs, sm, md, lg, children, className }) {
  let colClassName = className;
  
  xs && (colClassName += ` gr-col-xs-${xs}`);
  sm && (colClassName += ` gr-col-sm-${sm}`);
  md && (colClassName += ` gr-col-md-${md}`);
  lg && (colClassName += ` gr-col-lg-${lg}`);

  return (
    <div className={colClassName}>
      {children}
    </div>
  )
}