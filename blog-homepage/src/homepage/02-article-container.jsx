import React from 'react'

function ArticleContainer ({ articleClass, src, alt, articleTitle, description, authorPicture, authorName, publishedDate, articleLength }) {
    return (
        <article className={articleClass}>
            <div className="image-container">
                <img
                    src={src}
                    alt={alt}
                />
            </div>

            <div className="content-container">
                
                <div className="article-description">
                    <h1>{articleTitle}</h1>
                    <p>{description}</p>
                </div>
                <div className="author-info">
                    <div className="author-picture">
                        <img
                            src={authorPicture}
                            alt={alt}
                        />
                    </div>

                    <div className="author-details">
                        <p>{authorName}</p>
                        <p>{publishedDate}</p>
                        <p>{articleLength} min read</p>
                    </div>

                </div>
            </div>

        </article>
    );
}

export default ArticleContainer