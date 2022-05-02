import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleItems({articleList, Title, numberOfCols}) {
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

export default ArticleItems;