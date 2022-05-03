import React from 'react';
import PropTypes from 'prop-types';

function Section({ sectionName})
{
  return (
    <div>
      <h2>{sectionName}</h2>
    </div>
  )
}

Section.propTypes =
  {
    sectionName: PropTypes.string.isRequired
  }

export default Section;
