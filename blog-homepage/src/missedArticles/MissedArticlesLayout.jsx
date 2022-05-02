import React from 'react';
import bookmark from '../bookmark-favicon.ico'

function MissedArticles({ missedImage, missedTitle, missedDescription, missedAuthor, missedAuthorImage, missedPostedDate, missedMinutes }) {
    return (
            <div className='container'>
                <div className='articleImage'>
                    <img src={missedImage} width="210" height="200" />
                </div>
                <div className='articleCard'>
                <div className='summary'>                
                    <p className='title'>{missedTitle}</p>
                    <p className='description'>{missedDescription}</p></div>
                <div className='articleInformation'>
                    <img src={missedAuthorImage} width="40" height="40" className='authorImage'/>
                    <div className ='authorInformation'>
                    <p className='author'>{missedAuthor}</p>
                    <span className='postedDate'>{missedPostedDate} &#x25CF; </span>
                    <span className='minutes'>{missedMinutes} min read</span>
                    </div>
                    </div>
                    <img src ={bookmark} width="10" height="15"/>
                </div>
            </div>

    )
}

export default MissedArticles;