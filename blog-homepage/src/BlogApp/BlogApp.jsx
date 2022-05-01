import React from 'react';
// import Prototypes from 'prop-types';
import missedArticles from '../data/missed-articles.json';
import yourArticles from '../data/your-articles.json'
import MissedBlog from './MissedBlog';
import YourBlog from './YourBlog';


function BlogApp() {
    // const [{ title, description, image, link, authorName, authorImage, authorMedMem, postedDate, minutesToRead, hasAudioAvailable, memberPreview }] = yourArticles;

    return (
        <div>
            <section className="your-blog">
                <h2>For You</h2>
                {yourArticles.map((yourArticle, idx) =>
                    <YourBlog
                        key={idx}
                        image={yourArticle.image}
                        title={yourArticle.title}
                        description={yourArticle.description}
                        authorImage={yourArticle.author.image}
                        authorName={yourArticle.author.name}
                        authorMedMem={yourArticle.authorMedMem}
                        postedDate={yourArticle.postedDate}
                        minutesToRead={yourArticle.minutesToRead}
                        hasAudioAvailable={yourArticle.hasAudioAvailable}
                        memberPreview={yourArticle.memberPreview}
                    />
                )}
            </section>

            <section className="missing-blog">
                <h2>In Case You Missed It</h2>
                {missedArticles.map((missedArticle, idx) =>
                    <MissedBlog
                        key={idx}
                        missedImage={missedArticle.image}
                        missedTitle={missedArticle.title}
                        missedDescription={missedArticle.description}
                        missedAuthorImage={missedArticle.author.image}
                        missedAuthorName={missedArticle.author.name}
                        missedAuthorMedMem={missedArticle.authorMedMem}
                        missedPostedDate={missedArticle.postedDate}
                        missedMinutesToRead={missedArticle.minutesToRead}
                        missedHasAudioAvailable={missedArticle.hasAudioAvailable}
                        missedMemberPreview={missedArticle.memberPreview}
                    />
                )}

            </section>

        </div>

    );
}

export default BlogApp

