import React from 'react';
import propTypes from "prop-types";
import { FaAudible, FaRegBookmark, FaCheck, FaStar, FaTimes } from 'react-icons/fa'

function ArticleItem({article, onBookmarkClick}) {
    // console.log(article);
    const safeNewDate = function(localDateTimeStr) {

        var match = localDateTimeStr.match(
          /(\d{4})-(\d{2})-(\d{2})[\sT](\d{2}):(\d{2}):(\d{2})(.(\d+))?/,
        )
        if (!match) throw new Error('Invalid format.')
      
        // var [, year, month, date, hours, minutes, seconds, , millseconds] = match
        var [, , month, date, , , , , ] = match

        return Number(month) - 1 + '/' + date;
    }

    const showAudioAvailable = function(hasAudioAvailable) {
        if (hasAudioAvailable)
            return (<div className='audioDiv'>
                <div><FaAudible /></div>
                <div>Audio avaialble</div>
                <div><FaStar /></div>
            </div>);
    }

    const showMemberPreviewCheck = function(isMemberPreview) {
        if (isMemberPreview) {
            return (<span>Member preview&nbsp;<FaCheck /></span>);
        } else {
            return (<span>Member preview&nbsp;<FaTimes /></span>);
        }
    }
    // console.log(article);
    return(
        <div className="articleDiv">
            <a href={article.link} target='_blank' className='card'><img className="imgArticle" src={article.image} width="280" height="280"></img></a>
            <div className="articleContent">
                {showAudioAvailable(article.hasAudioAvailable)}
                <h2><a href={article.link} target='_blank' className='card'>{article.title}</a></h2>
                <a href={article.link} target='_blank' className='card'>{article.description}</a>
                <div className="authorDiv">
                    <div>
                        <img alt={article.author.name} className={'imgAuthor ' + (article.author.isMediumMember ? 'authorOutlineOn' : 'authorOutlineOff')}
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
                                {safeNewDate(article.postedDate)} - {article.minutesToRead} min read; {showMemberPreviewCheck(article.memberPreview)}
                            </div>
                    </div>
                    <div><FaRegBookmark onClick={onBookmarkClick}/></div>
                </div>
            </div>
        </div>
    );
}

ArticleItem.prototype = {
    article: propTypes.object.isRequired
}

export default ArticleItem;