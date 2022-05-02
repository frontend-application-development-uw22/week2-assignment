import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const faIcon = <FontAwesomeIcon icon={faBookmark} />

function Byline({authorName, date, readTime, authorImg, isMember}){
  
  let imgClassNames = 'author-img';

    if(isMember === true){
      imgClassNames = 'author-img is-member';
    };

  let dateObj = new Date(date);

  let monthNum = dateObj.getMonth();
  let month= '';
  let day = dateObj.getDate();

  switch (monthNum) {
    case 0:
      month = 'Jan';
      break;
    case 1:
      month = 'Feb';
      break;
    case 2:
      month = 'Mar';
      break;
    case 3:
      month = 'Apr';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'Jun';
      break;
    case 6:
      month = 'Jul';
      break;
    case 7:
      month = 'Aug';
      break;
    case 8:
      month = 'Sep';
      break;
    case 9:
      month = 'Oct';
      break;
    case 10:
      month = 'Nov';
      break;
    case 11:
      month = 'Dec';
      break;
    default:
      break;
  }

  let styledDate = `${month} ${day}`

    return <div className='byline-container'>
             <div style={{backgroundImage:`url(${authorImg})`}} className= {imgClassNames}></div>
             <div className='author-date-read-time-container'>
                <div className='author-name'>{authorName}</div>
                <div className='date-and-read-time'>{styledDate} &#8226; {readTime} min read</div>
            </div>
             <div className='bookmark'>{faIcon}</div>
           </div>;
}

export default Byline