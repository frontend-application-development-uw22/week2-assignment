import React from 'react'

function Item({item, idx}){

  // return (
  //   <li>
  //     <span>{item.title}</span>
  //     {/*<span><a href={item.link}>{item.title}</a></span>*/}
  //     {/*<span>{item.author}</span>*/}
  //     {/*<span>{item.minutesToRead}</span>*/}
  //   </li>
  //   )

  return <li key={idx}>
    <span>{item.title}</span></li>

}

export default Item
