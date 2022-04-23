import React from "react";

const Image = (props) => {
  return (
    <figure>
      <img className={props.class} src={props.src} alt={props.alt} />
    </figure>
  );
};

export default Image;
