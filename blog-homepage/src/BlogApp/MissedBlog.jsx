//prop todos is coming from parent prop
import React from 'react';
import PropTypes from 'prop-types';

function MissedBlog({ missedImage, missedTitle, missedDescription, missedAuthorImage, missedAuthorName, missedAuthorMedMem, missedPostedDate, missedMinutesToRead }) {
    return (
        <article>
            <div>
                <img
                    src={missedImage}
                    alt={missedTitle}
                    className="article-image"
                />
            </div>
            <div>
                <h3>{missedTitle}</h3>
                <p>{missedDescription}</p>
                <div className="author">
                    <img className="author-img"
                        src={missedAuthorImage}
                        alt="The author" />
                    <div className="author-info">
                        <p>{missedAuthorName}</p>
                        <div className="article-data">
                            <p>{missedPostedDate}</p>
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
    missedAuthorMedMem: PropTypes.bool.isRequired,
    missedPostedDate: PropTypes.string.isRequired,
    missedMinutesToRead: PropTypes.string.isRequired,
}

export default MissedBlog