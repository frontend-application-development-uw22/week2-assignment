import React from 'react';
import MissedBlog from './MissedBlog';
import ForYouBlog from './ForYouBlog';
import missedArticles from '../data/missed-articles.json';
import yourArticles from '../data/your-articles.json';
import '../App.css';

function BlogApp() {
    return (
        <div>
            <section>
                <h2>For You</h2>
                <div class="row">
                {yourArticles.map((yourArticle, idx) =>
                    <ForYouBlog
                        key={idx}
                        image={yourArticle.image}
                        title={yourArticle.title}
                        description={yourArticle.description}
                        authorImage={yourArticle.author.image}
                        authorName={yourArticle.author.name}
                        isMediumMember={yourArticle.isMediumMember}
                        postedDate={yourArticle.postedDate}
                        minutesToRead={yourArticle.minutesToRead}
                        hasAudioAvailable={yourArticle.hasAudioAvailable}
                        memberPreview={yourArticle.memberPreview}
                    />
                )}</div>
            </section>

            <section>
                <h2>In case you missed it</h2>
                <div class="row missed">
                {missedArticles.map((missedArticle, idx) =>
                    <MissedBlog
                        key={idx}
                        image={missedArticle.image}
                        title={missedArticle.title}
                        description={missedArticle.description}
                        authorImage={missedArticle.author.image}
                        authorName={missedArticle.author.name}
                        isMediumMember={missedArticle.isMediumMember}
                        postedDate={missedArticle.postedDate}
                        minutesToRead={missedArticle.minutesToRead}
                        hasAudioAvailable={missedArticle.hasAudioAvailable}
                        memberPreview={missedArticle.memberPreview}
                    />
                )}</div>
            </section>
        </div>


    );
}


export default BlogApp;