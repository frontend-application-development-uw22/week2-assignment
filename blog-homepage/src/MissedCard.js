import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

export default function MissedCard({article}) {
  const cardAudio = article.hasAudioAvailable ? "Audio available" : "";
  const memberPreview = article.memberPreview ? "*" : "";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={article.image}
        alt="green iguana"
      />
    <CardContent>

       {cardAudio} &nbsp;&nbsp;&nbsp; {memberPreview}          
       <Typography  style={{ fontWeight: 600 }} sx={{ mb: 1.5 }} color="text.secondary"> <br />
       {article.title}<br /> 
       </Typography>
          {article.description}
          <div style={{display:"flex"}}>  
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 <img src={article.author.image} width="35" height = "35" ></img>  &nbsp; &nbsp; 
                 {article.author.name} <br/> {dateFormat(article.postedDate, "mmm dd")} {"-"} {article.minutesToRead} min read  
             </Typography>
          </div>

      </CardContent>
    </Card>
  );
}

MissedCard.propTypes = {
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