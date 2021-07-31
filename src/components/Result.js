import React from "react";
import "./Result.css";

const Result = (props) => {
  return (
    <div id={props.id} className="row result m-2">
      <div className="row">
        <div className="col-6 text-left">
          {props.country} - {props.city}
        </div>
        <div className="col-6 text-left">Email: {props.mail}</div>
        <div className="col-12 text-left">
          <small>
            {props.name} - {props.date}
          </small>
        </div>
        <hr className="line" />
      </div>
    </div>
  );
};

export default Result;
