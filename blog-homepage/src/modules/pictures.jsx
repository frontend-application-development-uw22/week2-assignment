import React from "react";
import ProtoType from "prop-types";

const Picture = ({src, alt, className})=>{
  return <img className={className} src={src} alt = {alt}/>;
    
};
Picture.ProtoTypes ={
  src: ProtoType.string.isRequired,
  alt: ProtoType.string.isRequired,
  className: ProtoType.string.isRequired
};

export default Picture;