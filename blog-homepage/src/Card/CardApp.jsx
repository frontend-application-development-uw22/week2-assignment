import React from 'react';
import AuthorDetails from './AuthorDetails';
import Section from './Section';
import Articles from './Articles';
import './Picture.css';
import PropTypes from 'prop-types';

function CardApp ({ srcUrl, title, description, authorImage, authorName, month, todayDate, minutesToRead, hasAudioAvailable }) {
  return (
      <div className = "container">
       <Section 
         srcUrl = { srcUrl } 
        />
       <Articles 
         title = { title } 
         description = { description } 
         hasAudioAvailable = { hasAudioAvailable }
         />
       <AuthorDetails 
         authorImage = { authorImage } 
         authorName = { authorName }
         month = { month }
         todayDate = { todayDate }
         minutesToRead = { minutesToRead } 
        />
      </div>
  );
}

CardApp.prototype = {
  srcUrl: PropTypes.string.isRequired
}

export default CardApp;
