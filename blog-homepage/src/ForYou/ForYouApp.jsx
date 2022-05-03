import React from 'react';
import ForYouSection from './ForYouSection';
import Articles from '../Card/Articles';
import AuthorDetails from '../Card/AuthorDetails';
import './ForYou.css';
import Proptypes from 'prop-types';

function ForYouApp ({ imageUrl, title, description, authorImage, authorName, minutesToRead, hasAudioAvailable, month, todayDate }) {
  return (
    <div className = "first-container">
        <ForYouSection 
          imageUrl = { imageUrl } />
      <div>
        <Articles 
          title = { title } 
          description = { description } 
          hasAudioAvailable = { hasAudioAvailable } />
        <AuthorDetails 
          authorImage = { authorImage } 
          authorName = { authorName }
          minutesToRead = { minutesToRead } 
          month = { month }
          todayDate = { todayDate }
         />
      </div>
    </div>
  );
}

ForYouApp.propTypes = {
  ForYouApp: Proptypes.arrayOf(
    Proptypes.object
  ).isRequired
}

export default ForYouApp;