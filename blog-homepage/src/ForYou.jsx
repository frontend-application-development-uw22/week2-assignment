import React from 'react';
import Proptypes from 'prop-types';
import yourArticles from './your-articles.json';
import moment from 'moment';
import bkmrk from './bkmrk.png';

// function hasAudio() {
//   return (hasAudioAvailable ? "Audio Available" : "");
// }

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
                  className="img-fluid" 
                  alt="Article image"/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <a 
                    className="card-title Title" 
                    href={article.link}>{article.title}
                  </a>
                  <p className="card-text">{article.description}</p>
                  {/* <p>{hasAudio()}</p> */}
                  <div className="row float-end">
                    <div className="col-md-4 Author-info">
                      <img 
                      className="Author-pic img-fluid" 
                      src={article.author.image} 
                      alt="Image of author"/>
                    </div>
                    <div className="col-md-8"> 
                      <small className="text-muted">
                        <p className="fw-bold">{article.author.name} 
                        <img className="Bkmrk-pic ms-3" src={bkmrk}/></p>
                        <p>{moment(article.postedDate).format("MMM Do")} · {article.minutesToRead} min read</p>
                        <p></p>
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

ForYou.propTypes = {
  id: Proptypes.number,
  image: Proptypes.string,
  link: Proptypes.string,
  title: Proptypes.string,
  description: Proptypes.string,
  // author.image: Proptypes.string,
  // author.name: Proptypes.string,
  bkmrk: Proptypes.string,
  postedDate: Proptypes.string,
  minutesToRead: Proptypes.number,
}

export default ForYou;
