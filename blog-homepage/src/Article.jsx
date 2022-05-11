import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Article({article}) {
    return (
        <div className='layout'>
            <div className='card'>
                <div className='card-img'>
                    <img src={article.image}></img>
                </div>  
                <div className='card-body'>
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <div className='author-description'>
                        <img src={article.author.image} className='author-img'></img>
                        <span>{article.author.name}</span>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Article;

//doubts: how to use bootstrap in react