import React from 'react';
import './App.css';

import BlogHomepageApp from './BlogHomepageApp/BlogHomepageApp.jsx';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';

function App() {
  return (
    <div className="App">
      <BlogHomepageApp />
    </div>
  );
}

export default App;
