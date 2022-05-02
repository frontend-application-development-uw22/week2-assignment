import React from 'react'

function Item({item, idx}){

  const date = Date.parse(item.postedDate)
  const dateObject = new Date(date)

  return (

    <div key={idx} className="parent">

      <div className="child">

        <img src={item.image} className="article-img"/>

      </div>

      <div className="child">

        <div id="link-article" className="parent-two">

          <div className="child-two">

            <a href={item.link} className="link-style"><strong>{item.title} </strong></a>

          </div>

          <div className="child-two">

            <p>{item.description}</p>

          </div>

        </div>

        <div className="parent-two-prime">

          <div className="child-three">

            <img src={item.author.image} className="author-img"/>

          </div>

          <div className="child-three">

            <div className="child-four">

              <p className="author-name"> {item.author.name} </p>

            </div>

            <div className="child-four">

              <p>{dateObject.toLocaleString('en-US', {
                                      day: 'numeric',
                                      month: 'long',
                                    })}
              </p>

            </div>

          </div>


        </div>


      </div>

    </div>


    // <div key={idx}>
    //   <img src={item.image} className="article-img"/>
    //   <span>
    //     <a href={item.link}>{item.title} </a>
    //     <p>{item.description}</p>
    //
    //     <div>
    //
    //       <img src={item.author.image} className="author-img"/>
    //
    //       <span>
    //
    //         <span className="author-name"> {item.author.name} </span>
    //
    //         <div>
    //
    //           <span>{dateObject.toLocaleString('en-US', {
    //                         day: 'numeric',
    //                         month: 'long',
    //                       })}
    //           </span>
    //           <span> · </span>
    //           <span>{item.minutesToRead} Minute Read</span>
    //
    //         </div>
    //
    //
    //
    //       </span>
    //
    //     </div>
    //
    //   </span>
    //
    //
    // </div>

    )


}

export default Item