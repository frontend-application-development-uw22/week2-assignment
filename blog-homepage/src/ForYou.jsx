import React from 'react';
import yourArticles from './your-articles.json';

function ForYou() {
  return(
    <>
      {yourArticles.map((article) => (
        <div key={article.id} className="col">
          <div key={article.id} className="card h-100 mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img 
                  src={article.image} 
                  className="img-fluid crop" 
                  alt="Article image"/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <a 
                    className="card-title Title" 
                    href={article.link}>{article.title}
                  </a>
                  <p className="card-text">{article.description}</p>
                  <div className="card-footer row">
                    <div className="col-md-4 Author-info">
                      <img 
                      className="Author-pic img-fluid" 
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

            </div>
          </div>
        </div>
    ))}
    </>
  )
}
export default ForYou;
