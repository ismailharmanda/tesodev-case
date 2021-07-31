import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="col-12 col-md-2 d-flex justify-content-center">
      <button onClick={props.onClick} type="button" className="btn darkBlue">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
