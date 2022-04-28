import React from 'react';

function ForYouSection ({ imageUrl }) {
  return (
      <div>
          <img src = { imageUrl } alt = "image loading..." className = "foryou-image" />
      </div>
  );
}

export default ForYouSection;