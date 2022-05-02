import React from 'react';
import yourArticles from './_data/your-articles'
import ArticlesForYouApp from './ArticlesForYou';
import missedArticles from './_data/missed-articles'
import MissedArticlesApp from './missedArticles/MissedArticles';
import './App.css'

function App() {
  const articlesCard = yourArticles.map((item, index) =>
    <ArticlesForYouApp key={index}
      title={item.title}
      description={item.description}
      author={item.author.name}
      image={item.image}
      authorImage={item.author.image}
      minutes={item.minutesToRead}
      postedDate={item.postedDate}
    />
  )
  const missedArticlesCard = missedArticles.map((missedItem, index) =>
    <MissedArticlesApp key={index}
      missedTitle={missedItem.title}
      missedDescription={missedItem.description}
      missedAuthor={missedItem.author.name}
      missedImage={missedItem.image}
      missedAuthorImage={missedItem.author.image}
      missedMinutes={missedItem.minutesToRead}
      missedPostedDate={missedItem.postedDate}
    />
  )
  return (
    <div>
      <h3>For you</h3>
      {articlesCard}
      <h3>In case you missed it</h3>
      {missedArticlesCard}
    </div>
  );
}

export default App;
