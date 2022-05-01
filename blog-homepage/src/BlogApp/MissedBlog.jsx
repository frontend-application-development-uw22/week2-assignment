//prop todos is coming from parent prop
import React from 'react';
import PropTypes from 'prop-types';

function MissedBlog(missedImage, missedTitle) {
    // const yourBlogs = forYouBlogs.map((forYouBlog, idx) => <li key={idx}>{forYouBlog}</li>);
    return (
        <article>
            <div>
                <img 
                src={missedImage}
                alt={missedTitle}
                />
            </div>
        </article>
)
}
MissedBlog.propTypes = {
    missedImage: PropTypes.string.isRequired,
    missedTitle: PropTypes.string.isRequired,
}


export default MissedBlog