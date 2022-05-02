import React from 'react'

function Item({item, idx}){

  // const hasAudio = item.hasAudioAvailable

  // if(item.hasAudioAvailable){
  //   console.log(`article has audio available: ${item.hasAudioAvailable}`)
  // }

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

            {/*{item.hasAudioAvailable ? (<p>Audio Available</p>): (<p></p>)*/}

            {/*}*/}

            {item.hasAudioAvailable ? (<span><i className="fas fa-volume-off"></i><span> Audio Available</span><br></br></span>): (<span></span>)

            }

            {item.memberPreview ? (<span><i className="fa fa-star"></i><span> Member Preview</span><br></br></span>): (<span></span>)

            }

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

              <div className="child-five">

                <p className="author-name"> {item.author.name} </p>

              </div>
              <div className="child-six">

                <button aria-controls="addToCatalogBookmarkButton" aria-expanded="false" aria-label="Add to list bookmark button" className="ay ki ba bb bc bd be bf bg mz">

                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" className="tp">
                    <path d="M 17.5 1.25 a 0.5 0.5 0 0 1 1 0 v 2.5 H 21 a 0.5 0.5 0 0 1 0 1 h -2.5 v 2.5 a 0.5 0.5 0 0 1 -1 0 v -2.5 H 15 a 0.5 0.5 0 0 1 0 -1 h 2.5 v -2.5 Z m -11 4.5 a 1 1 0 0 1 1 -1 H 11 a 0.5 0.5 0 0 0 0 -1 H 7.5 a 2 2 0 0 0 -2 2 v 14 a 0.5 0.5 0 0 0 0.8 0.4 l 5.7 -4.4 l 5.7 4.4 a 0.5 0.5 0 0 0 0.8 -0.4 v -8.5 a 0.5 0.5 0 0 0 -1 0 v 7.48 l -5.2 -4 a 0.5 0.5 0 0 0 -0.6 0 l -5.2 4 V 5.75 Z" fill="#000">

                    </path>

                  </svg>

                </button>

                {/*<p className="bookmark-style">Bookmark</p>*/}


              </div>




            </div>

            <div className="child-four">

              <span>{dateObject.toLocaleString('en-US', {
                                      day: 'numeric',
                                      month: 'long',
                                    })}
              </span>
              <span> · </span>
              <span>{item.minutesToRead} Minute Read</span>

            </div>

            {/*<span className="child-four">*/}

            {/*  <p>Bookmark</p>*/}

            {/*</span>*/}

          </div>


        </div>


      </div>

    </div>

    )


}

export default Item
