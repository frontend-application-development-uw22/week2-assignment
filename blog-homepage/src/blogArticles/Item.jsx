import React from 'react'

function Item({item, idx}){

  const date = Date.parse(item.postedDate)
  const dateObject = new Date(date)

  return (
    <div key={idx}>
      <img src={item.image} className="article-img"/>
      <span>
        <a href={item.link}>{item.title} </a>
        <p>{item.description}</p>

        <div>

          <img src={item.author.image} className="author-img"/>

          <span>

            <span className="author-name"> {item.author.name} </span>

            <div>

              <span>{dateObject.toLocaleString('en-US', {
                            day: 'numeric',
                            month: 'long',
                          })}
              </span>
              <span> · </span>
              <span>{item.minutesToRead} Minute Read</span>

            </div>



          </span>

        </div>

      </span>


    </div>

    )


}

export default Item
