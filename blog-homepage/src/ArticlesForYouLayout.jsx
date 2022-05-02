import React from 'react';
import bookmark from './bookmark-favicon.ico'

function Articles({ image, title, description, author, authorImage, postedDate, minutes }) {
    return (
            <div className='container'>
                <div className='articleImage'>
                    <img src={image} width="210" height="200" />
                </div>
                <div className='articleCard'>
                <div className='summary'>                
                    <p className='title'>{title}</p>
                    <p className='description'>{description}</p></div>
                <div className='articleInformation'>
                    <img src={authorImage} width="40" height="40" className='authorImage'/>
                    <div className ='authorInformation'>
                    <p className='author'>{author}</p>
                    <span className='postedDate'>{postedDate} &#x25CF; </span>
                    <span className='minutes'>{minutes} min read</span>
                    </div>
                    </div>
                    <img src ={bookmark} width="10" height="15"/>
                </div>
            </div>

    )
}

export default Articles;