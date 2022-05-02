import React from 'react';
// import Prototypes from 'prop-types';
import missedArticles from '../data/missed-articles.json';
import yourArticles from '../data/your-articles.json'
import MissedBlog from './MissedBlog';
import YourBlog from './YourBlog';

import '../App.css';
function BlogApp() {
    // const [{ title, description, image, link, authorName, authorImage, authorMedMem, postedDate, minutesToRead, hasAudioAvailable, memberPreview }] = yourArticles;
    // console.log(yourArticles);
    // console.log(missedArticles);
    // console.log(yourArticles[0].image)
    return (
        <div>
            <section className="your-blog, column">
                <h2>For You</h2>
                <div className="your-article, row">
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
                </div>
                {/* end of your-articles div */}

            </section>
            {/* end of your-blog section */}

            <section className="missed-blog, column">
                <h2>In Case You Missed It</h2>
                <div className="missed-articles, row">
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
                </div>
                {/* end of missed-articles div */}

            </section>
            {/* end of missed-blog section */}

        </div>

    );
}

export default BlogApp

