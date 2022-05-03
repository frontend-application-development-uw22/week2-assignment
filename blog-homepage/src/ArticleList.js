// ArticleList ////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList ({data, topic}) {

  // Generate array of <Article />s given each [article]'s data from [data].
  const articles = data.map((article) => {
    return <Article article={article} />
  });

  return (
    <div className="article-list" id={topic}>
      {articles}
    </div>
  );

}

Article.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ArticleList;