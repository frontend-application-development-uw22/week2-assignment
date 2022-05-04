import React from "react";
// Data
import missed from "../_data/missed-articles.json";
// my Components
import Picture from "./pictures";
import DateBuild from "./dateBuild";

// NPM Components 

// BootStrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const MissedArticles = ()=>{
  // check if preview exist
  const preview = (isPreview)=>{
    if(isPreview===true){
      return "⭐ Member Preview";
    }else{
      return "";
    }
  };
  // check if is author member
  const member = (isMember)=>{
    if(isMember===true){
      return "missedTitleImgMember";
    }else{
      return "missedTitleImg";
    }
  };
  const buttonID = (id)=>{
    if(id>=0){
      return `missedButtonID_${id}`;
    }
  };
  const pictureID= (id)=>{
    if(id>=0){
      return `missedAuthorPictureID_${id}`;
    }
  };
  const nameID =(id)=>{
    if(id>=0){
      return `missedAuthorNameID_${id}`;
    }
  };
  const dateID = (id)=>{
    if(id>=0){
      return `missedDateID_${id}`;
    }
  };
  const minID = (id)=>{
    if(id>=0){
      return `missedMinToReadID_${id}`;
    }
  };
  const addBookMark = (value)=>{
    let article = missed[value].title;
    let articleAuthor = missed[value].author.name;
    alert(`New Book Mark: 
      ${article}
      by: ${articleAuthor} `);
  };
  const descriptionID = (id)=>{
    return `missedDescriptionID_${id}`;
  };
  return(
    <div className="missedArticles">
      {
        missed.map((article, index)=>(
          <Card className="missedCard" key={index}>
          <Card.Body className="missedCardBody">
            <Picture  className="missedTitleImg" src={article.image} alt="404"/>
            <Card.Text className="missedPreview">{preview(article.memberPreview)}</Card.Text>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text id={descriptionID(index)} className="missedDescription">{article.description}</Card.Text>
            <Picture id={pictureID(index)} className={member(article.author.isMediumMember)} src={article.author.image} alt="404"/>
            <Card.Text className="missedAuthorName" id={nameID(index)}>{article.author.name}</Card.Text>
            <Card.Text className="missedPostedDate" id={dateID(index)}><DateBuild date={article.postedDate}/></Card.Text>
            <Card.Text className="missedMinToRead" id={minID(index)}> - {article.minutesToRead} min</Card.Text>
            <Card.Text onClick={(e)=>addBookMark(index)} ><Picture className="missedBookMark" src="https://www.clipartmax.com/png/full/174-1749142_instagram-bookmark-icon-transparent-png-bookmark.png" alt="bookMark"/></Card.Text>
            <Card.Text className="missedAudio">{article.hasAudioAvailable}</Card.Text>
            <Button className="missedButton" id={buttonID(index)} variant="primary" href={article.link}>View Article</Button>
          </Card.Body>
        </Card>
        ))
      }
    </div>
  );
};
// There is no proptypes since theres no params in this function
export default MissedArticles;