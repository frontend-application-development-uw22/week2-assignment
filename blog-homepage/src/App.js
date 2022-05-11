import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import Article from './Article';
import Picture from './Picture';

function missed() {
  const newArticle = missedArticles.map((data) => {
    return <Article article={data}></Article>;
  });
  return newArticle;
}

function your() {
  const newdata = yourArticles.map((data) => {
    return <Picture article={data}></Picture>;
  });
  return newdata;
}

function main(){
  return (
    <div>
      <div className='section-1'>
          <h3>For You</h3>
          <div className='col-md-3'>{your()}</div>
      </div>
      <div className='section-2'>
          <h3>In case you missed it</h3>
          <div className='col-md-6'>{missed()}</div>
      </div>
    </div>
  );
  // const page = your().concat(missed());
  // return page;
}


export default (main);
