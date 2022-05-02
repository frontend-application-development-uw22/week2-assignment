import React from 'react'
import SectionHeader from './01-section-header'
import ArticleContainer from './02-article-container'
import displayYourArticles from '../your-articles.json'
import displayMissedArticles from '../missed-articles.json'


function Container() {
    return(
        <main>
            <SectionHeader header="For you" />
            
            <div className='article-container'>
                {displayYourArticles.map(yourArticle => 
                    <ArticleContainer 
                        articleClass="your-articles"
                        src={yourArticle.image}
                        alt='to be determined'
                        articleTitle={yourArticle.title}
                        description={yourArticle.description}
                        authorPicture={yourArticle.author.image}
                        authorName={yourArticle.author.name}
                        publishedDate={yourArticle.postedDate}
                        articleLength={yourArticle.minutesToRead}
                    />
                )}
            </div>

            <SectionHeader header="In case you missed it" />

            <div className='article-container'>
                {displayMissedArticles.map(missedArticle => 
                    <ArticleContainer 
                        articleClass="missed-articles"
                        src={missedArticle.image}
                        alt='to be determined'
                        articleTitle={missedArticle.title}
                        description={missedArticle.description}
                        authorPicture={missedArticle.author.image}
                        authorName={missedArticle.author.name}
                        publishedDate={missedArticle.postedDate}
                        articleLength={missedArticle.minutesToRead}
                    />
                )}
            </div>
        </main>
    );
}

export default Container