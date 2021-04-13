import React from "react";
import "./Pagination.css";
import Text from "../Text/Text";

const Pagination = ({ totalPage, currentPage }) => {
  return (
    <div>
      <span className="icon-downArrow arrowLeft"></span>
      <div className="pageCon">
        <Text color="black">
          {" "}
          {currentPage + 1}/{totalPage}{" "}
        </Text>
      </div>
      <span className="icon-downArrow arrowRight"></span>
    </div>
  );
};

export default Pagination;
