import React from 'react';
import Article from './Article';

function BlogHomepageApp({ missedArticles , yourArticles }) {    
    const forYou = yourArticles.map((yourArticle,index) =>
        <Article
            key = {index}
            article = {yourArticle}
        />
    )
    const missed = missedArticles.map((missedArticles,index) =>
        <Article
            key = {index}
            article = {missedArticles}
        />
    )
    return (
        <div>
            <h2>For you</h2>
            <hr></hr>
            {forYou}
            <h2>In Case You Missed It</h2>
            <hr></hr>
            {missed}
        </div>
    );
};

export default BlogHomepageApp;