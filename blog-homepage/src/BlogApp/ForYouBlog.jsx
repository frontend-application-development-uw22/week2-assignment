import React from 'react';
import PropTypes from 'prop-types'

function ForYouBlog({image, title, description, authorImage, authorName, postedDate, minutesToRead}) {
    let date = new Date(postedDate); 
    let month = date.toLocaleString('en-us', { month: 'short' }); 
    let day = date.getDate();
    let newDate = month + " " + day;
    return (

        <article className="for-you row">
            <img className="blog1-img" src={image} alt={title}></img>
            <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="row author">
                    <img className="round" src={authorImage} alt="Author"></img>
                    <div>
                        <p>{authorName}</p>
                        <div className="row">
                            <p className="date">{newDate}</p>
                            <p>{minutesToRead} min read</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

ForYouBlog.propTypes={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    authorImage:PropTypes.string.isRequired,
    authorName:PropTypes.string.isRequired,
    postedDate:PropTypes.instanceOf(Date).isRequired,
    minutesToRead:PropTypes.number.isRequired,
}
export default ForYouBlog;