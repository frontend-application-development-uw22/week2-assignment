import Card from "./layout/Card"
import PropTypes from 'prop-types'

const Article = ({ article, columnClass, cardClass, classImg, classTextContainer }) => {
  return (
    <div className={columnClass}>
      {/* Use Card component to display each article */}
      <Card
        article={article}
        cardClass={cardClass}
        classImg={classImg}
        classTextContainer={classTextContainer}
      />
    </div>
  )
}
// Define props types
Article.propTypes = {
  article: PropTypes.object.isRequired,
  columnClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  classTextContainer: PropTypes.string.isRequired
}

export default Article
