import PropTypes from 'prop-types';

const AuthorImage = ({ src, classImg }) => {
  return (
    <img src={src} alt='' className={classImg} />
  )
}

AuthorImage.propTypes = {
  src: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired
}

export default AuthorImage
