import React, { useState} from 'react';
import Prototypes from 'prop-types';

function Articles ({ title, description, hasAudioAvailable }) {
  return (
    <div className = "article-outer">
      <p className = "audio-availability">{ hasAudioAvailable ? "Audio Available" : ""}</p>
        <h3 className = "header-title">{ title }</h3>
        <p className = "article-para">{ description }</p>
    </div>
  );
}

Articles.Prototypes = {
  title : Prototypes.string.isRequired,
  description: Prototypes.string.isRequired,
  yourArticles: Prototypes.bool.isRequired
}
 
export default Articles;