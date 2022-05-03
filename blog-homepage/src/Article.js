// Article ////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import ArticleContent from './ArticleContent.js';
import ArticleImage from './ArticleImage.js';
import ArticleData from './ArticleData.js';

function Article ({article}) {

  return (
    <div className="article">
      <ArticleImage
        imageURL={article.image}
      />
      <ArticleContent 
        title={article.title}
        description={article.description}
        hasAudioAvailable={article.hasAudioAvailable}
        memberPreview={article.memberPreview}
      />
      <ArticleData
        authorImg={article.author.image}
        authorName={article.author.name}
        authorIsMediumMember={article.author.isMediumMember}
        date={article.postedDate}
        minutesToRead={article.minutesToRead}
      />
    </div>
  );

}

Article.propTypes = {
  article: PropTypes.object.isRequired
}

export default Article;