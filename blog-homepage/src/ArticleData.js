// ArticleData ////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function ArticleData ({authorImg, authorName, authorIsMediumMember, date, minutesToRead}) {

  // Format the [postedMonth] and [postedDate] of the article.
  const posted = new Date(Date.parse(date));
  const months =
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov",
    "Dec"];
  const postedMonth = months[posted.getMonth()];
  const postedDate = posted.getDate();

  // Determine whether the [author-img] will have a [mediumAuthorRing].
  const mediumAuthorRing = 
    authorIsMediumMember ? "author-img medium-author" : "author-img";

  return (
    <div className="article-data">
        <img
          className={mediumAuthorRing}
          src={authorImg}
          alt="Portrait of this article's author." 
        />
        <div>
          <p className="author-name">{authorName}</p>
          <p className="article-date-minutes">{postedMonth} {postedDate} • {minutesToRead} min read</p>
        </div>
        <div className="article-bookmark">
          🔖
        </div>
    </div>
  );

}

ArticleData.propTypes = {
  authorImg: PropTypes.string,
  authorName: PropTypes.string.isRequired,
  authorIsMediumMember: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number
}

export default ArticleData;