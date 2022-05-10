import React from 'react';
import Articles from './your-articles.json';
import Bookmark from './icons8-bookmark.svg';
import PropTypes from 'prop-types';

Articles.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

function Article() {
  return (
    <div>
      {Articles.map((article) => {
        return (
          <div>
            <div className='container'>
              <div className='img-col'>
                <img src={article.image} className='img' alt={article.imageDescription} />
                <div className='text-col'>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <img src={article.author.image} className='author-image' alt={article.author.name} />
                  <h4>{article.author.name}</h4>
                  <p>{article.postedDate} - {article.minutesToRead} mins</p>
                  <img src={Bookmark} alt='Bookmark' />
                  <div>{article.memberPreview}</div>
                </div>

              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Article;
