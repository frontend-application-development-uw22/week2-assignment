import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Picture({article}) {
    return (
        <div className='layout'>
            <div className='picture-card'>
                <div className='picture-card-img'>
                    <img src={article.image} className='picture-img'></img>
                </div>  
                <div className='card-body'>
                    <div className='card-body-description'>
                        <h4>{article.title}</h4>
                        <p>{article.description}</p> 
                    </div>
                    <div className='author-description'>
                        <div>
                            <img src={article.author.image} className='author-img'></img>
                        </div>
                        <div>
                            <span>{article.author.name}</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}
export default Picture;

//doubts: how to use bootstrap in react