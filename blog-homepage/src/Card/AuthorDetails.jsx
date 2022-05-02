import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import Proptypes from 'prop-types';

function AuthorDetails ({ authorImage, authorName, minutesToRead, link, month, todayDate }) {
  const [ bookmark, setBookMark ]  = useState( false );

  const bookmarkFunc = () => {
    setBookMark(!bookmark); 
  } 
  return (
      <div className = "author-details">
        <div className = "inner-first">
          <img src = { authorImage } alt = "image loading..." className = "author-image" />
        </div>

        <div className = "inner-second">
          <div className = "author-description">
            <p className = "author-name"> { authorName } </p>
           {bookmark ? <FontAwesomeIcon size="2x" icon={faBookmarkSolid} onClick = { bookmarkFunc } /> : <FontAwesomeIcon size="2x" icon={faBookmark} onClick = { bookmarkFunc }/>}
          
          </div>
          <p className = "duration">{ month } { todayDate } . { minutesToRead } min read</p>
        </div>
      </div>
    );
}

AuthorDetails.propTypes = {
  AuthorDetails: Proptypes.arrayOf(
    Proptypes.object
  ).isRequired
}
export default AuthorDetails;