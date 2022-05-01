import React from 'react'
import Item from "./Item";

function MyArticles({articles}){
  console.log(articles)
  const items = articles.map((item, idx)=>

    <Item key={idx} item={item}/>)

  return(
    // <ul class="grid">
    //   {items}
    // </ul>

    <div className="grid">
      {items}
    </div>
  )

}

export default MyArticles
