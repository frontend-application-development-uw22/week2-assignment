import React from "react";
import ArticleItem from './ArticleItem';
import propTypes from 'prop-types';

function ArticleItems ({articleList, Title, numberOfCols}) {
    // console.log({articleList});
    const articles = articleList.map((article, idx) => {
        // console.log(article);
        return (
            <ArticleItem
                key={idx}
                article={article}>
            </ArticleItem>
        );
    })

    return (
        <div>
            <div className="sectionTitle">
            {Title}
            </div>
            <hr />
            <div className={'article-container article-container-' + numberOfCols}>
                {articles}
            </div>        
        </div>
    );
}

ArticleItems.prototype = {
    articleList: propTypes.arrayOf(propTypes.object).isRequired,
    Title: propTypes.string.isRequired,
    numberOfCols: propTypes.string.isRequired
};

export default ArticleItems;