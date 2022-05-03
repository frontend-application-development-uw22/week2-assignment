import './App.css';
import ArticleList from './ArticleList.js';
import React from 'react';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json'

function App() {

  return (
    <div className="App">

      <h2>
        <em>For you</em>
      </h2>
      <ArticleList data={yourArticles} topic="for-you" />

      <h2>
        <em>In case you missed it</em>
      </h2>
      <ArticleList data={missedArticles} topic="missed-articles" />

    </div>
  );

}

export default App;
