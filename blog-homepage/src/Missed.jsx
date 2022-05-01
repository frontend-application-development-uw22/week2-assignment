import React from "react";
import missedArticles from './missed-articles.json'

function Missed() {
  return (
    <>
      {missedArticles.map((article) => (
        <div key={article.id} className="col">
          <div key={article.id} className="card h-100">
            <img 
              src={article.image} 
              className="img-fluid" 
              alt="Article image"/>
            <div className="card-body">
              <a 
                className="card-title Title" 
                href={article.link}>{article.title}</a>
              <p className="card-text">{article.description}</p>
            </div>
            <div className="card-footer row">
              <div className="col-md-4">
                <img 
                  className="Author-pic" 
                  src={article.author.image} 
                  alt="Image of author"/>
              </div>
              <div className="col-md-8"> 
                <small className="text-muted">
                  <p >{article.author.name}</p>
                  <p>{article.postedDate}</p>
                  <p>{article.minutesToRead}-minute read</p>
                </small>
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default Missed;
