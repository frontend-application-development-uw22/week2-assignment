import React from 'react';
import Article from './CurrentArticle.jsx';
import MissedArticle from './MissedArticles.jsx';

function BlogApp() {
  return (
    <div>
      <h2>For you</h2>
      <hr></hr>
      <Article />
      <h2>In case you missed it</h2>
      <hr></hr>
      <MissedArticle />
    </div>
  );
}

export default BlogApp;
