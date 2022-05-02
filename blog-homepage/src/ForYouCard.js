import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

export default function ForYouCard({article}) {

  const cardAudio = article.hasAudioAvailable ? "Audio available" : "";
  const memberPreview = article.memberPreview ? "*" : "";
 
  return (
    <Card sx={{ minWidth: 275 }}>
       <div style={{display:"flex"}}> 
           <CardMedia
              component="img"
              sx={{ width: 125,height: 140 }}
              image={article.image}
              alt="No image"
            />
           <CardContent>
              {cardAudio} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <font size="+3">{memberPreview} </font>
              <Typography  style={{ fontWeight: 600 }} sx={{ mb: 1.5 }} color="text.secondary">
                 <br />
                 {article.title}
              </Typography>
              <p> {article.description}</p>    
              <div style={{display:"flex"}}>         
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <img src={article.author.image} width="35" height = "35" ></img>  &nbsp; &nbsp; 
                    {article.author.name} <br/> {dateFormat(article.postedDate, "mmm dd")} {"-"} {article.minutesToRead} min read  
                  </Typography>
              </div>
           </CardContent>
        </div>
    </Card>   
  );
}

ForYouCard.propTypes = {
  article: PropTypes.shape({
  author: PropTypes.shape({
    image: PropTypes.string.isRequired,
    isMediumMember: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired,
  hasAudioAvailable: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  memberPreview: PropTypes.bool.isRequired,
  minutesToRead: PropTypes.number.isRequired,
  postedDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
 }) 
}
