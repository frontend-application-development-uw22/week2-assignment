import React from 'react';

function Section ({ srcUrl, divClicked }) {
    return (
        <div onClick = { divClicked }>
           <img src = { srcUrl } alt = "image loading..." className = "section-image"/>
        </div>
    );
}

export default Section;