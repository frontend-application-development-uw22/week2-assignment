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
                        image={yourArticle.image}
                        alt='placeholder'
                        title={yourArticle.title}
                        description={yourArticle.description}
                        authorPicture={yourArticle.author.image}
                        authorName={yourArticle.author.name}
                        publishedDate={yourArticle.postedDate}
                        articleLength={yourArticle.minutesToRead}
                        audioAvl={yourArticle.hasAudioAvailable}
                        memberPrev={yourArticle.memberPreview}
                    />
                )}
            </div>

            <SectionHeader header="In case you missed it" />

            <div className='article-container'>
                {displayMissedArticles.map(missedArticle => 
                    <ArticleContainer 
                        articleClass="missed-articles"
                        image={missedArticle.image}
                        alt='placeholder'
                        title={missedArticle.title}
                        description={missedArticle.description}
                        authorPicture={missedArticle.author.image}
                        authorName={missedArticle.author.name}
                        publishedDate={missedArticle.postedDate}
                        articleLength={missedArticle.minutesToRead}
                        audioAvl={missedArticle.hasAudioAvailable}
                        memberPrev={missedArticle.memberPreview}
                    />
                )}
            </div>
        </main>
    );
}

export default Container