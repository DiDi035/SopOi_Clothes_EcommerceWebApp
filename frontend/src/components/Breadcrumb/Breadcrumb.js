import "./Breadcrumb.css";
import React from "react";

const Breadcrumb = ({ cumbs }) => {
  let str = "";
  for (let i = 0; i < cumbs.length; ++i) {
    if (cumbs[i]) {
      str += cumbs[i];
      if (i < cumbs.length - 1) str += " / ";
    }
  }
  return <div className="title">{str}</div>;
};

export default Breadcrumb;
