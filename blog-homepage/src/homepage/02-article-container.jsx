import React from 'react'
import PropTypes from 'prop-types';

// Converts ISO Date Into Mon Day format.
function reformatDate(iso) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let reformatMe = new Date(iso);
    let day = reformatMe.getDate();

    // ReformatMe.getMonth() gives index that is used to find
    // proper month in months array.
    let month = months[reformatMe.getMonth()]

    return `${month} ${day}`;
}



function ArticleContainer ({
    articleClass,
    image,
    alt,
    title,
    description,
    authorPicture,
    authorName,
    publishedDate,
    articleLength,
    audioAvl,
    memberPrev }) {
    return (
        <article className={articleClass}>
            <div className="image-container">
                <img
                    src={image}
                    alt={alt}
                />
            </div>

            <div className="content-container">

                { audioAvl === true && <h3 style={{ color:'red' }}>Audio available</h3>}
                { memberPrev === true && <h3 style={{ color:'orange' }}>Member Preview</h3>}

                <div className="article-description">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="author-info">
                    <div className="author-picture">
                        <img
                            src={authorPicture}
                            alt={alt}
                        />
                    </div>

                    <div className="author-details">
                        <p>{authorName}</p>
                        <p>{reformatDate(publishedDate)} • {articleLength} min read</p>
                    </div>

                    <div className="bookmark">

                    </div>
                </div>
            </div>

        </article>
    );
}

ArticleContainer.propTypes = {
    articleClass: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorPicture: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    articleLength: PropTypes.number.isRequired,
    audioAvl: PropTypes.bool.isRequired,
    memberPrev: PropTypes.bool.isRequired
}

export default ArticleContainer