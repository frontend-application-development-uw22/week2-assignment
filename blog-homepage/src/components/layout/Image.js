import PropTypes from 'prop-types';

const Image = ({ src, classImg, onClick }) => {
  return (
    <img src={src} alt='' className={classImg} onClick={() => onClick()} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Image
