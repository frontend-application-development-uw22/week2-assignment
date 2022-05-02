import React from 'react'
import MissedItem from "./MissedItem";

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

export default MissedArticles
