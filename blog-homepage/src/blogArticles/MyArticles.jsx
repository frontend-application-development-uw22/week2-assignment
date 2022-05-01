import React from 'react'
import Item from "./Item";

function MyArticles({articles}){
  console.log(articles)
  const items = articles.map((item, idx)=>

    <Item key={idx} item={item}/>)

  return(
    <ul>

      {items}

    </ul>

  )


}

export default MyArticles
