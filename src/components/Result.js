import React from "react";
import "./Result.css";

const Result = () => {
  return (
    <div className="row">
      <div className="row offset-2">
        <div className="col-6 text-left">Turkey - Ankara</div>
        <div className="col-6 text-left">Email: abc@xyz.com</div>
        <div className="col-12 text-left">
          <small>Jane Doe - 2016</small>
        </div>
        <hr className="line" />
      </div>
    </div>
  );
};

export default Result;
