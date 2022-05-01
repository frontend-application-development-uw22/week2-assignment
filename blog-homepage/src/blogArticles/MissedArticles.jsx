import React from 'react'
import MissedItem from "./MissedItem";

function MissedArticles({missedArticles}){
  console.log(missedArticles)
  const items = missedArticles.map((item, idx)=>

    <MissedItem key={idx} item={item}/>)

  return(
    <ul>

      {items}

    </ul>

  )


}

export default MissedArticles
