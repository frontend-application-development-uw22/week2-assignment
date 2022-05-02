//prop todos is coming from parent prop
import React from 'react';
import PropTypes from 'prop-types';


function YourBlog({ image, title, description, authorImage, authorName, authorMedMem, postedDate, minutesToRead }) {
    return (
        <article className="your-article, row">
            <img
                    src={image}
                    alt={title}
                    className="article-image"
                />
            <div className="info-div">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="author, row">
                    <img className="author-img"
                        src={authorImage}
                        alt="The author" />
                    <div className="author-info, column">
                        <p>{authorName}</p>
                        <div className="article-data, row">
                            <p>{postedDate}</p>
                            <p>{minutesToRead} min read</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
YourBlog.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorMedMem: PropTypes.bool,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired,
}
export default YourBlog