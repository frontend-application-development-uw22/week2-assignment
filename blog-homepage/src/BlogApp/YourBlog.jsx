//prop todos is coming from parent prop
import React from 'react';
import PropTypes from 'prop-types';


function YourBlog(image, title) {
    // const yourBlogs = forYouBlogs.map((forYouBlog, idx) => <li key={idx}>{forYouBlog}</li>);
    return (
        <article>
            <div>
                <img 
                src={image}
                alt={title}
                />
            </div>
        </article>
)
}
YourBlog.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
export default YourBlog