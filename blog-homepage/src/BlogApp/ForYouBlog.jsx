import React from 'react';
import PropTypes from 'prop-types'

function ForYouBlog({image, title, description, authorImage, authorName, postedDate, minutesToRead}) {

    return (

        <article className="for-you">
            <img src={image} alt="picture"></img>
            <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    <img src={authorImage} alt="picture"></img>
                    <div>
                        <p>{authorName}</p>
                        <div>
                            <p>{postedDate}</p>
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