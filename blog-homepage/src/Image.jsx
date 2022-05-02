import React from 'react';

function Image({src, alt}){
    return <img className='image' src={src} alt={alt}/>;
}

// function Image(src){
//     return <div className='image'><img src={src}/></div>;
// }

export default Image;