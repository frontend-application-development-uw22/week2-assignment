import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeUp} from '@fortawesome/free-solid-svg-icons'

const faIcon = <FontAwesomeIcon icon={faVolumeUp} />

function Titles({title, subtitle, audio}){

  let audioDiv = '';

  if(audio === true){
    audioDiv = <div className="audio">{faIcon} Audio Available</div>
  }
    
    return <div className='title-container'>
             {audioDiv}
             <div className='title'>{title}</div>
             <div className='subtitle'>{subtitle}</div>
           </div>
}


export default Titles;