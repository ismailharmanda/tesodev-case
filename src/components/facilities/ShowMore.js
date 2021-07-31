import React from "react";
import "./ShowMore.css";

const ShowMore = (props) => {
  return (
    <div className="row m-2">
      <a
        onClick={props.onClick}
        className="twelve showmorelink text-center"
        href="/#"
      >
        Show more...
      </a>
    </div>
  );
};

export default ShowMore;
