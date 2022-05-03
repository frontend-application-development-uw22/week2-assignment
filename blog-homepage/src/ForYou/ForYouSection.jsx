import React from 'react';
import Proptypes from 'prop-types';

function ForYouSection ({ imageUrl }) {
  return (
      <div>
          <img src = { imageUrl } alt = "image loading..." className = "foryou-image" />
      </div>
  );
}

ForYouSection.prototypes = {
  imageUrl: Proptypes.string.isRequired
}

export default ForYouSection;