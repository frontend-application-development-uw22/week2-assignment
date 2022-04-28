import React from 'react';

function Articles ({ title, description, memberPreview }) {
  const divClicked = () => {
    window.alert ( `Title: ${ title } \n Description: ${ description }`);
  };
  return (
    <div className = "article-outer" onClick = { divClicked }>
      <p className = "member-para" id = "member-preview">{ memberPreview }</p>
        <h3 className = "header-title">{ title }</h3>
        <p className = "article-para">{ description }</p>
    </div>
  );
}

export default Articles;