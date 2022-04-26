import { useState } from "react";
import AuthorImage from "./AuthorImage";
import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const SubCard = ({ article }) => {
  // use this hook to set behavior for bookmark icon's color
  const [turnGreen, setTurnGreen] = useState(false);
  const author = article.author;
  const postedDate = new Date(article.postedDate);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const posted = `${months[postedDate.getMonth()]} ${postedDate.getDate()}`

  return (
    <div className="sub-card">
        {/* Display author's image */}
        <AuthorImage
          src={author.image}
          // if the author is a medium member, the image has a green border
          classImg={`author-image ${author.isMediumMember && 'medium-member'}`}
        />
        <div className='text-container'>
          {/* author's name */}
          <div className='author-name'>{author.name}</div>
          <div>
            {/* bookmark icon with the toggle-color function when it's clicked */}
            <FaBookmark
              className={`icon-right ${turnGreen && 'turn-green'}`} 
              onClick={() => setTurnGreen(!turnGreen)}
            />
          </div>
          {/* Display posted date and the number of minutes to read the article */}
          <div className='content'>{`${posted} - ${article.minutesToRead} min read`}</div>
        </div>
    </div>
  )
}

SubCard.propTypes = {
  article: PropTypes.object.isRequired
}

export default SubCard
