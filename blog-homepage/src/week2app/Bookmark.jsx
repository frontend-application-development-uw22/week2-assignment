import React from 'react';
import PropTypes from 'prop-types';

function Bookmark({ cname })
{
  return (
    <div className={cname}>
      <p>B</p>
    </div>
  )
}

Bookmark.propTypes =
  {
    cname: PropTypes.string.isRequired
  }

export default Bookmark;
