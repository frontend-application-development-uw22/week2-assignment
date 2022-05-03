// ArticleImage ///////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function ArticleImage ({imageURL}) {

  return (
    <div className="article-img">
      <img 
        src={imageURL} 
        alt="An illustration of this article's topic." 
      />
    </div>
  );

}

ArticleImage.propTypes = {
  imageURL: PropTypes.string.isRequired
}

export default ArticleImage;