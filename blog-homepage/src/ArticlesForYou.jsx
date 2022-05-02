import React from 'react';
import Articles from './ArticlesForYouLayout';

function ArticlesForYouApp ({image, title, description, author, authorImage, postedDate, minutes}) {
    return (
            <Articles 
            title = {title}
            description = {description}
            image = {image}
            author = {author}
            authorImage = {authorImage}
            minutes = {minutes}
            postedDate = {postedDate}
            />
    )
};

export default ArticlesForYouApp;