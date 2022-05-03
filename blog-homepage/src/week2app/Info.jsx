import React from 'react';
import PropTypes from 'prop-types';

function Info({ cname, author, postedDate, minutesToRead})
{
  return (
    <div className={cname}>
      <h5>{author}</h5>
      <p>{`${postedDate} - ${minutesToRead} min read`}</p>
    </div>
  )
}

Info.propTypes =
  {
    cname: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    postedDate: PropTypes.string,
    minutesToRead: PropTypes.string
  }

export default Info;

