import React from 'react';

function AuthorDetails ({ authorImage, authorName, minutesToRead, link, month, todayDate }) {
  const bookmarkBtn = () => {
    window.alert (`Bookmark Added for ${ authorName }`);
  }

  return (
      <div className = "author-details">
        <div className = "inner-first">
          <img src = { authorImage } alt = "image loading..." className = "author-image" />
        </div>
        <div className = "inner-second">
          <div className = "author-description">
            <p className = "author-name"> { authorName } </p>
            <button className = "bookmark" onClick = { bookmarkBtn }>Image</button>
          </div>
          <p className = "duration">{ month } { todayDate } . { minutesToRead } min read</p>
        </div>
      </div>
    );
}

export default AuthorDetails;