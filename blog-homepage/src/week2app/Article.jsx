import React from 'react';
import PropTypes from 'prop-types';
import TitleDesc from "./TitleDesc";
import Info from "./Info";
import Bookmark from "./Bookmark";


function Article({ cname, cnamePrefix, article})
{
  return (
    <div className={`${cnamePrefix}${cname}`}>
      <a className={`${cnamePrefix}article_img`}
         href={article.link}><img
        className={`${cnamePrefix}article_img`} src={article.image}
        alt=""/></a>
      <TitleDesc cname={`${cnamePrefix}article_title_desc`} title={article.title} description={article.description} audioAvailable={article.hasAudioAvailable} memberPreview={article.memberPreview}/>
      <div className={`${cnamePrefix}article_info`}>
        <img className={`${cnamePrefix}article_info_img`} src={article.author.image} alt="" />
        <Info cname={`${cnamePrefix}article_info_author_detail`} author={article.author.name}
              postedDate={`${new Date(article.postedDate).toLocaleString('default', {month: 'short'} )} ${new Date(article.postedDate).getDate()}` }
              minutesToRead={article.minutesToRead}/>
        <Bookmark cname={`${cnamePrefix}article_info_bookmark`} />
      </div>
    </div>
  )
}

Article.propTypes =
  {
    cname: PropTypes.string.isRequired,
    cnamePrefix: PropTypes.string.isRequired,
    article: PropTypes.object.isRequired
  }

export default Article;
