import React from "react";

const Breadcrumb = ({ cumbs }) => {
  return (
    <nav className="row justify-content-center">
      <ol className="breadcrumb">
        {cumbs.map((item) => {
          return (
            <li key={new Date().toString()} className="breadcrums-item "></li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrums;
