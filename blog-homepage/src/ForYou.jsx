import React from 'react';
import yourArticles from './your-articles.json';

function ForYou() {
  return(
    <div>
      {yourArticles.map((article) => (
      <div key={article.id}>
        <p>{article.title}</p>
        <p>{article.description}</p>
        <p>{article.image}</p>
        <p>{article.link}</p>
        <p>{article.author.name}</p>
        {/* <img>{article.author.image}</img> */}
        <p>{article.postedDate}</p>
        <p>{article.minutesToRead}-minute read</p>
      </div>))
      }
    </div>
  )
}
export default ForYou;
