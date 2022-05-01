import React from 'react'

function Item({item, idx}){

  const date = Date.parse(item.postedDate)
  const dateObject = new Date(date)

  return (
    <li key={idx}>
      <span>
        <a href={item.link}>{item.title} </a>
      </span>
      <span>{item.author.name}</span>
      <img src={item.image}/>
      <p>{item.description}</p>
      {/*<span>{item.title}</span>*/}
      <span>{dateObject.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
      })}</span>
      <span> · </span>
      <span>{item.minutesToRead} Minute Read</span>

    </li>

    )


}

export default Item
