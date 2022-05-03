import React from "react";
// Data
import missed from "../_data/missed-articles.json";
// my Components
import Picture from "./pictures";
import DateBuild from "./dateBuild";


// BootStrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import MissedArticles from "./dArticles";


const MissedArticles = ()=>{
  const preview = (isPreview)=>{
    if(isPreview===true){
      return "⭐ Member Preview";
    }
  };
  const member = (isMember)=>{
    if(isMember===true){
      return "missedTitleImgMember";
    }else{
      return "missedTitleImg";
    }
  };
  return(
    <div className="missedArticles">
    {
      missed.map((article, index)=>(
        <Card className="missedCard" key={index}>
        <Card.Body className="missedCardBody">
          <Picture className="missedTitleImg" src={article.image} alt="404"/>
          <Card.Text className="missedPreview">{preview(article.memberPreview)}</Card.Text>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text className="missedDescription">{article.description}</Card.Text>
          <Picture className={member(article.author.isMediumMember)} src={article.author.image} alt="404"/>
          <Card.Text className="missedAuthorName">{article.author.name}</Card.Text>
          <Card.Text className="missedPostedDate"><DateBuild date={article.postedDate}/></Card.Text>
          <Card.Text className="missedMinToRead"> - {article.minutesToRead} min</Card.Text>
          <Card.Text className="missedAudio">{article.hasAudioAvailable}</Card.Text>
          <Button className="missedButton" variant="primary" href={article.link}>View Article</Button>
        </Card.Body>
      </Card>
      ))
    }
    </div>
  );
};

export default MissedArticles;