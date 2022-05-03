import React from "react";
import ProtoType from "prop-types";


const DateBuild = ({date})=>{
  const stringDate = new Date(date);
  return(
    <p>{stringDate.toLocaleDateString("en-us",{month:"short", day:"numeric"})}</p>
  );
};
DateBuild.ProtoType ={
  date: ProtoType.string.isRequired
};
export default DateBuild;