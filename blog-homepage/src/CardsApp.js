import React from 'react';
import ForYouCards from './ForYouCards';
import MissedCards from './MissedCards';

function CardsApp(){
    
return(
        <div>
          <h3> For you </h3>
            <ForYouCards 
            />
          <h3> In case you missed it </h3>
          <br></br>
            <MissedCards
                />
        </div>);
}
export default CardsApp;