import React from 'react';

function ArticleItem({article}) {
    console.log(article);
    const safeNewDate = function(localDateTimeStr) {

        var match = localDateTimeStr.match(
          /(\d{4})-(\d{2})-(\d{2})[\sT](\d{2}):(\d{2}):(\d{2})(.(\d+))?/,
        )
        if (!match) throw new Error('Invalid format.')
      
        var [, year, month, date, hours, minutes, seconds, , millseconds] = match

        return Number(month) - 1 + '/' + date;
    }

    return(
        <div className="articleDiv">
            <img class="imgArticle" src={article.image} width="280" height="280"></img>
            <div className="articleContent">
                <h2>{article.title}</h2>
                {article.description}
                <div className="authorDiv">
                    <div>
                    <img alt={article.author.name} class="imgAuthor" 
                            src={article.author.image}
                            width="24" 
                            height="24">
                    </img>
                    </div>
                    <div>
                            <div>
                                {article.author.name}
                            </div>
                            <div>
                                {safeNewDate(article.postedDate)} - {article.minutesToRead} min read
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleItem;