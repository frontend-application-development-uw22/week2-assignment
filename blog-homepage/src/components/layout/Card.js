import Image from "./Image";
import SubCard from "./SubCard";
import { FaStar, FaVolumeUp } from "react-icons/fa";
import PropTypes from 'prop-types';

const Card = ({ article, cardClass, classImg, classTextContainer }) => {
  // classMemberPreview is used to set icon for member preview
  const classMemberPreview = `${cardClass==='card'? 'icon-right': 'icon-left'} ${article.memberPreview ? 'show': 'hide'}`;
  // this function is used to open the link of the clicked article 
  const openLink = () => {
    window.open(article.link, "_blank");
  }
  
  return (
    <div className={cardClass}>
      {/* show image of the article */}
      <Image
        src={article.image}
        classImg={classImg}
        onClick={openLink} 
      />
      <div className={classTextContainer}>
        {/* volumn icon with its coment and member preview icon with its text */}
        <div>
          <FaVolumeUp className={`icon-left ${article.hasAudioAvailable && 'show'}`} />
          <div className={`comment ${article.hasAudioAvailable && 'show'}`}>{'Audio Available'}</div>
          <FaStar className={classMemberPreview}/>
          <div className={`comment ${article.memberPreview && cardClass==='miss-card' && 'show'}`}>{'Member preview'}</div>
        </div>
        {/* Show article's title  */}
        <div className='title pointer' onClick={openLink}>
          {article.title}
        </div>
        {/* Show article description */}
        <div className="pointer" onClick={openLink}>
          {article.description}
        </div>
        {/* Use SubCard component to display author image, name, posted date, etc inside the card element */}
        <SubCard article={article} />
      </div>
    </div>
  )
}
// Define props types
Card.propTypes = {
  article: PropTypes.object.isRequired,
  cardClass: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  classTextContainer: PropTypes.string.isRequired
}

export default Card
