import React from 'react';
import ForYouSection from './ForYouSection';
import Articles from '../Card/Articles';
import AuthorDetails from '../Card/AuthorDetails';
import './ForYou.css'

function ForYouApp ({ imageUrl, title, description, authorImage, authorName, minutesToRead, link, memberPreview, month, todayDate, bookmarkBtn }) {
  return (
    <div className = "first-container">
        <ForYouSection 
          imageUrl = { imageUrl } />
      <div>
        <Articles 
          title = { title } 
          description = { description } 
          memberPreview = { memberPreview } />
        <AuthorDetails 
          authorImage = { authorImage } 
          authorName = { authorName }
          minutesToRead = { minutesToRead } 
          month = { month }
          bookmarkBtn = { bookmarkBtn }
          todayDate = { todayDate }
          link = { link }/>
      </div>
    </div>
  );
}

export default ForYouApp;