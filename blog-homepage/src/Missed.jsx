import React from "react";
import missedArticles from './missed-articles.json'

function Missed() {
  return (
    missedArticles.forEach(article => {
      <div>
        <div>{article.title}</div>
        <div>{article.description}</div>
        <div>{article.image}</div>
        <div>{article.link}</div>
        <div>{article.author.name}</div>
        <div>{article.author.image}</div>
        <div>{article.postedDate}</div>
        <div>{article.minutesToRead}</div>
      </div>
    })
  )
}