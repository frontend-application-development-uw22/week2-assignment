import React from "react";
import PropTypes from "prop-types";



const DateBuild = ({date})=>{
  const stringDate = new Date(date);
  return(
    <p>{stringDate.toLocaleDateString("en-us",{month:"short", day:"numeric"})}</p>
  );
};
DateBuild.propTypes={
  date: PropTypes.string.isRequired
};
export default DateBuild;