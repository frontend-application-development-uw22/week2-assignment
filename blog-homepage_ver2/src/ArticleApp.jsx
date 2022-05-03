import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json'; 
import ArticleItems from './ArticleItems';
import React from 'react';

function ArticleApp () {
    const turnGreenBookmark = (event) => {
        event.preventDefault();
        // console.log(event.target);
        //  window.alert("hello " + event.target.style.color);
        if (event.target.style.color === "green")
            event.target.style.color = "black";
        else
            event.target.style.color = "green";
    }
    return (
        <form>
            <ArticleItems articleList={yourArticles} Title="For you" numberOfCols="2" turnGreen={turnGreenBookmark}></ArticleItems>
            <ArticleItems articleList={missedArticles} Title="In case you missed it" numberOfCols="3" turnGreen={turnGreenBookmark}></ArticleItems>
        </form>
    );
}

export default ArticleApp;