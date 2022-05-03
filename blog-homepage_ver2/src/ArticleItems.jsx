import React, {useState} from "react";
import ArticleItem from './ArticleItem';
import propTypes from 'prop-types';

function ArticleItems ({articleList, Title, numberOfCols, turnGreen}) {
    const [itemToBookmark, turnGreenBookmark] = useState('');

    // console.log(itemToBookmark);
    // console.log(turnGreenBookmark);
    const articles = articleList.map((article, idx) => {
        // console.log(article);
        return (
            <ArticleItem
                key={idx}
                article={article}
                onBookmarkClick={(idx) => turnGreen(idx)}>
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