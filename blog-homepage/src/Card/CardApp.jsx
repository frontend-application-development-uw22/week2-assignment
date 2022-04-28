import React from 'react';
import AuthorDetails from './AuthorDetails';
import Section from './Section';
import Articles from './Articles';
import './Picture.css';
import PropTypes from 'prop-types';

function CardApp ({ srcUrl, title, description, authorImage, authorName, month, todayDate, minutesToRead, link, memberPreview, bookmarkBtn }) {
  return (
      <div className = "container">
       <Section 
         srcUrl = { srcUrl } 
        />
       <Articles 
         title = { title } 
         description = { description } 
         memberPreview = { memberPreview }
         />
       <AuthorDetails 
         authorImage = { authorImage } 
         authorName = { authorName }
         month = { month }
         bookmarkBtn = { bookmarkBtn }
         todayDate = { todayDate }
         minutesToRead = { minutesToRead } 
         link = { link }/>
      </div>
  );
}

CardApp.prototype = {
  srcUrl: PropTypes.string.isRequired
}

export default CardApp;
