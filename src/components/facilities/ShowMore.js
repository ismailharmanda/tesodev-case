import React from "react";
import "./ShowMore.css";
import { Link } from "react-router-dom";

const ShowMore = (props) => {
  return (
    <div className="row m-2">
      <Link
        onClick={props.onClick}
        className="twelve showmorelink text-center"
        to="/list"
      >
        Show more...
      </Link>
    </div>
  );
};

export default ShowMore;
