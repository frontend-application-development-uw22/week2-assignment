import React from 'react';

function MissedImage({src, alt}){
    return <img className='missed-image' src={src} alt={alt}/>;
}

// function Image(src){
//     return <div className='image'><img src={src}/></div>;
// }

export default MissedImage;