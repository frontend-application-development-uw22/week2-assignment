import React from "react";
import missedArticles from './missed-articles.json'

function Missed() {
  return (
      <div>
        {missedArticles.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          <p>{article.description}</p>
          <img src={article.image}/>
          <p>{article.link}</p>
          <p>{article.author.name}</p>
          <img src={article.author.image} alt="Image of the author"/>
          <p>{article.postedDate}</p>
          <p>{article.minutesToRead}</p>
        </div>))
        }
        </div>
  )
}

export default Missed;
