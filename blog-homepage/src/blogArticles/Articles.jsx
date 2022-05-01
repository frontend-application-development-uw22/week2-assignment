import React from 'react'

function Articles({articles}){
  console.log(articles)
  const items = articles.map((item, idx)=><li key={idx}>{item.title}</li>)
  return(
    <ul>

      {items}

    </ul>

  )

}

export default Articles
