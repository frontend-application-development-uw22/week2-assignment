//prop todos is coming from parent prop
import React from 'react';
import PropTypes from 'prop-types';

function MissedBlog({ missedImage, missedTitle, missedDescription, missedAuthorImage, missedAuthorName, missedAuthorMedMem, missedPostedDate, missedMinutesToRead }) {
   
    let date = new Date(missedPostedDate); 
    let month = date.toLocaleString('en-us', { month: 'short' }); 
    let day = date.getDate();
    let newDate = month + " " + day;
   
    return (
        <article className="missed-article, column">
            <div className="blog-article-image">
                <img
                    src={missedImage}
                    alt={missedTitle}
                    className="blog-article-image"
                />
            </div>
            <div className="info-div">
                <h3>{missedTitle}</h3>
                <p>{missedDescription}</p>
                <div className="author, row">
                    <img className={`author-img ${missedAuthorMedMem ? "authorMedMem" : ""}`}
                        src={missedAuthorImage}
                        alt="The author" />
                    <div className="author-info">
                        <p>{missedAuthorName}</p>
                        <div className="article-data, row">
                            <p className="posted-date">{newDate}</p>
                            <p>{missedMinutesToRead} min read</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
MissedBlog.propTypes = {
    missedImage: PropTypes.string.isRequired,
    missedTitle: PropTypes.string.isRequired,
    missedDescription: PropTypes.string.isRequired,
    missedAuthorImage: PropTypes.string.isRequired,
    missedAuthorName: PropTypes.string.isRequired,
    missedAuthorMedMem: PropTypes.bool,
    missedPostedDate: PropTypes.string.isRequired,
    missedMinutesToRead: PropTypes.number.isRequired,
}

export default MissedBlog