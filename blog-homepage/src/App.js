import React from 'react';
import './App.css';
import CardApp from './Card/CardApp'
import missedArticles from './_data/missed-articles.json';
import ForYouApp from './ForYou/ForYouApp';
import yourArticles from './_data/your-articles.json';
import Prototypes from 'prop-types';

function App() {
  const [{ title: fyTitle, description: fyDescription, image: fyImage, author: fyAuthor, postedDate: fyPostDate, minutesToRead: fyMinutesToRead, hasAudioAvailable }]= yourArticles;
  const { name: fyAuthorName, image: fyAuthorImage} = fyAuthor;
  const [{ title, description, image, author, postedDate, minutesToRead, hasAudioAvailable: hasMissedAudioAvailable }]= missedArticles;
  const { name: authorName, image: authorImage} = author;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const forYouCard = yourArticles.map((card, idx) => 
  <ForYouApp key = { idx }
  imageUrl = { card.image } 
    title = { card.title }
    description = { card.description } 
    authorImage = { card.author.image } 
    authorName = { card.author.name } 
    month = { months[new Date( card.postedDate ).getMonth()] }
    todayDate = { new Date( card.postedDate).getUTCDate() }
    minutesToRead = { card.minutesToRead } 
    hasAudioAvailable = { card.hasAudioAvailable }
    /> 
);
 
  const missedArticlesCard = missedArticles.map( (item, idx) => <CardApp key = { idx }
    srcUrl = { item.image } 
    title = { item.title }
    description = { item.description } 
    authorImage = { item.author.image } 
    authorName = { item.author.name } 
    month = { months[new Date( item.postedDate ).getMonth()] }
    todayDate = { new Date( item.postedDate).getUTCDate() }
    minutesToRead = { item.minutesToRead } 
    hasAudioAvailable = { item.hasMissedAudioAvailable }
    /> );

  return (
    <div className="App">
      <div className = "card-container">
        <header className = "box-title">For you</header>
        <hr></hr>
        <div className = "main-div">
          { forYouCard }
        </div>
      </div>
      <div className = "card-container">
        <header className = "box-title">In case you missed it</header>
        <hr></hr>
        <div className = "card-div">
          { missedArticlesCard }
        </div>
      </div>
   </div>
  );
}


export default App;
