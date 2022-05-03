import React from 'react';
import MissedArticles from './missed-articles.json';
import Bookmark from './icons8-bookmark.svg';
import PropTypes from 'prop-types';

MissedArticles.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

function MissedArticle() {
  return (
    <div>
      {MissedArticles.map((missedArticle) => {
        return (
          <div>
            <div className='container'>
              <div className='img-col'>
                <img src={missedArticle.image} className='img' alt={missedArticle.imageDescription} />
                <div className='text-col'>
                  <h3>{missedArticle.title}</h3>
                  <p>{missedArticle.description}</p>
                  <img src={missedArticle.author.image} className='author-image' alt={missedArticle.author.name} />
                  <h4>{missedArticle.author.name}</h4>
                  <p>{missedArticle.postedDate} - {missedArticle.minutesToRead} mins</p>
                  <img src={Bookmark} alt='Bookmark' />
                  <div>{missedArticle.memberPreview}</div>
                </div>

              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MissedArticle;
