import React from "react";
import PropTypes from "prop-types";

// Data
import your from "../_data/your-articles.json";
// my Components
import Picture from "./pictures";
import DateBuild from "./dateBuild";


// BootStrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import MissedArticles from "./dArticles";


const YourArticles = ()=>{
  // check if preview exist
  const preview = (isPreview, hasAudioAvailable)=>{
    if(isPreview===true && hasAudioAvailable===true){
      return "🔊 Audio Available ⭐";
    }
    if(isPreview===true){
      return "⭐ Member Preview";
    }else{
      return "";
    }
  };
  // check if is author member
  const member = (isMember)=>{
    if(isMember===true){
      return "forYouTitleImgMember";
    }else{
      return "forYouAuthorImg";
    }
  };
  const buttonID = (id)=>{
    if(id>=0){
      return `forYouButtonID_${id}`;
    }
  };
  const pictureID= (id)=>{
    if(id>=0){
      return `forYouAuthorPictureID_${id}`;
    }
  };
  const nameID =(id)=>{
    if(id>=0){
      return `forYouAuthorNameID_${id}`;
    }
  };
  const dateID = (id)=>{
    if(id>=0){
      return `forYouPostedDateID_${id}`;
    }
  };
  const minID = (id)=>{
    if(id>=0){
      return `forYouMinToReadID_${id}`;
    }
  };
  const addBookMark = (value)=>{
    let article = your[value].title;
    let articleAuthor = your[value].author.name;
    alert(`New Book Mark: 
      ${article}
      by: ${articleAuthor} `);
  };
  const titleID = (id)=>{
    return `forYouArticleTitleID_${id}`;
  };
  const cardID = (id)=>{
    if(id>=0){
      return`forYouCardID_${id}`;
    }
  };
  const descriptionID = (id)=>{
    return `forYouArticleDescriptionID_${id}`;
  };
  return(
    <div className="forYouArticles">
    {
      your.map((article, index)=>(
        <Card className="forYouCard" id={cardID(index)} key={index}>
        <Card.Body className="forYouCardBody">
          <Picture className="forYouTitleImg" src={article.image} alt="404"/>
          <Card.Text className="forYouPreview">{preview(article.memberPreview, article.hasAudioAvailable)}</Card.Text>
          <Card.Title id={titleID(index)} className="forYouArticleTitle">{article.title}</Card.Title>
          <Card.Text id={descriptionID(index)} className="forYouArticleDescription">{article.description}</Card.Text>
          <Picture id={pictureID(index)} className={member(article.author.isMediumMember)} src={article.author.image} alt="404"/>
          <Card.Text className="forYouAuthorName" id={nameID(index)}>{article.author.name}</Card.Text>
          <Card.Text className="forYouPostedDate" id={dateID(index)}><DateBuild date={article.postedDate}/></Card.Text>
          <Card.Text className="forYouMinToRead" id={minID(index)}> - {article.minutesToRead} min</Card.Text>
          <Card.Text onClick={(e)=>addBookMark(index)} className="forYouBookMark"  ><Picture className="forYouBookMarkIMG" src="https://www.clipartmax.com/png/full/174-1749142_instagram-bookmark-icon-transparent-png-bookmark.png" alt="bookMark"/></Card.Text>
          <Card.Text className="forYouAudio">{article.hasAudioAvailable}</Card.Text>
          <Button className="forYouButton" id={buttonID(index)} variant="primary" href={article.link}>View Article</Button>
        </Card.Body>
      </Card>
      ))
    }
    </div>
  );
};
// There is no proptypes since theres no params in this function
export default YourArticles;