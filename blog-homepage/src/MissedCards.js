import React from 'react';
import MissedCard from './MissedCard';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import missedReadArticles from './_data/missed-articles.json';

import Grid from '@mui/material/Grid';

function MissedCards() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secßndary,
      }));
 
let missedArticles = []

missedReadArticles.forEach((article)=> {
    missedArticles.push(<Grid item={true}  Item xs={3}><Item><MissedCard article={article}></MissedCard></Item></Grid>)
});

return(
  <Grid container spacing={2}>
     {missedArticles}
  </Grid>
  );  
}

export default MissedCards;