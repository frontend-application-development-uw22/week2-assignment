import React from 'react';
import MissedArticles from './MissedArticlesLayout';


function MissedArticlesApp ({ missedTitle, missedDescription, missedImage, missedAuthor, missedAuthorImage, missedPostedDate, missedMinutes}) {
    return (
            <MissedArticles 
            missedTitle = {missedTitle}
            missedDescription = {missedDescription}
            missedImage = {missedImage}
            missedAuthor = {missedAuthor}
            missedAuthorImage = {missedAuthorImage}
            missedMinutes = {missedMinutes}
            missedPostedDate = {missedPostedDate}
            />
    )
};

export default MissedArticlesApp;