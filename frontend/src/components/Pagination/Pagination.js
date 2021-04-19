import React from "react";
import "./Pagination.css";
import Text from "../Text/Text";

const Pagination = ({ totalPage, currentPage, inc, dec }) => {
  return (
    <div>
      <span onClick={dec} className="icon-downArrow arrowLeft"></span>
      <div className="pageCon">
        <Text color="black">
          {" "}
          {currentPage + 1}/{totalPage}{" "}
        </Text>
      </div>
      <span onClick={inc} className="icon-downArrow arrowRight"></span>
    </div>
  );
};

export default Pagination;
