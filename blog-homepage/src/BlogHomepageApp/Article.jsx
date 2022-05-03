import React from 'react';
import PropTypes from 'prop-types';

function Article({article}) {

    const date = new Date(article.postedDate);
    const shortDate = date.toString().slice(4, 10);
    let audio = ''; 
    let member = ''; 

    if (article.hasAudioAvailable === true) {
        audio = 'Audio Available';
    }
    if (article.memberPreview === true) {
        member = 'Member Preview';
    }

    return (
        <div className='container'>
            <img className='bigImage' src={article.image} alt=""></img>
            <div className='text' align= 'right'>
                <p>{audio}</p>
                <p>{member}</p>
                <h2 className='title'>{article.title}</h2>
                <p className='description'>{article.description}</p>
                <div className='text' align= 'right'>
                    <img className='roundImage' src={article.author.image} alt=""></img>
                    <b className='text'>{article.author.name}</b>
                    <p className='text'> {shortDate} - {article.minutesToRead} min read</p>
                </div>
                <div class="bookmark">Bookmark</div>
            </div>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.any.isRequired
}

export default Article;