import React from "react";
import PropTypes from "prop-types";
// // This library allows props to be null
// import BetterPropTypes from "better-prop-types";

const Picture = ({src, alt, className, id})=>{
  
  return <img className={className} id={id} src={src} alt = {alt}/>;
    
};
Picture.propTypes ={
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // id: BetterPropTypes.string.isRequiredButNullable

  // the proptype isnt required since i'm using id as a css tool when needed
  // but if the ID is passed it's required to be a string
  id:PropTypes.string
};

export default Picture;