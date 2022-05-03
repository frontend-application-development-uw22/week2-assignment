import React from 'react'
import Item from "./Item";
import PropTypes from "prop-types"

function MyArticles({articles}){
  console.log(articles)
  const items = articles.map((item, idx)=>


    <Item key={idx} item={item}/>)

  return(

    <div className="grid">
      {items}
      console.log(items)
    </div>
  )

}

MyArticles.propTypes = {

  articles: PropTypes.arrayOf(PropTypes.object).isRequired

}

export default MyArticles
