import React from 'react';
import ForYouCard from './ForYouCard';
import yourarticles from './_data/your-articles.json';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
function ForYouCards() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secßndary,
      }));
 
let forYouArticles = []

yourarticles.forEach((article)=> {
    forYouArticles.push(<Grid  item={true}  Item xs={3}><Item ><ForYouCard article={article}></ForYouCard></Item></Grid>)
});

return(
  <Grid container spacing={2}>
        {forYouArticles}
  </Grid>
);   
}

export default ForYouCards;