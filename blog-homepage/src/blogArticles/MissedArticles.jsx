import React from 'react'
import MissedItem from "./MissedItem";
import PropTypes from "prop-types";

function MissedArticles({missedArticles}){
  console.log(missedArticles)
  const items = missedArticles.map((item, idx)=>

    <MissedItem key={idx} item={item}/>)

  return(

    <div className="grid-container">
      {items}
    </div>

  )

}

MissedArticles.propTypes = {

  missedArticles: PropTypes.arrayOf(PropTypes.object).isRequired

}

export default MissedArticles
