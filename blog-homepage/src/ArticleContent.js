// ArticleContent /////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function ArticleContent ({title, description, hasAudioAvailable, memberPreview}) {

  // Determine whether to display the "🔊 Audio available" element.
  const audioAvailableClasses =
    hasAudioAvailable ? "audio-is-available" : "audio-is-available hidden";

  // Determine whether to display the "★ Member preview" element.
  const memberPreviewClasses =
    memberPreview ? "member-preview" : "member-preview hidden";

  return (
      <div className="article-content">
        <p className={audioAvailableClasses}>🔊 Audio available</p>
        <p className={memberPreviewClasses}>★ Member preview</p>
        <h3>
          {title}
        </h3>
        <p className="article-description">
          {description}
        </p>
      </div>
  );

}

ArticleContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  hasAudioAvailable: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired
}

export default ArticleContent;