import logo from './logo.svg';
import './App.css';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json'; 
import ArticleItems from './ArticleItems';
import React from 'react';

function App() {
  // console.log(yourArticles);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ArticleItems articleList={yourArticles} Title="For you" numberOfCols="2"></ArticleItems>
      <ArticleItems articleList={missedArticles} Title="In case you missed it" numberOfCols="3"></ArticleItems>
    </div>
  );
}

export default App;
