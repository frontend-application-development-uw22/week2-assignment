import React from "react";

const PostTitle = (props) => {
  return (
    <header>
      <h3 className="header">{props.title}</h3>
    </header>
  );
};

export default PostTitle;
