import React from 'react';
import PropTypes from 'prop-types';

function TitleDesc({ cname, title, description, audioAvailable, memberPreview})
{
  return (
    <div className={cname}>
      {audioAvailable &&
      <p>Audio availble</p>}
      {memberPreview &&
      <p>Member preview</p>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

TitleDesc.propTypes =
{
  cname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  audioAvailable: PropTypes.bool,
  memberPreview: PropTypes.bool
}

export default TitleDesc;
