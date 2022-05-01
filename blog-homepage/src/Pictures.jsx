import React from 'react'
// import PropTypes from 'prop-types'

// import articles from './_data/your-articles.json'

function Pictures(list){

  // const articles = list.map(function(article, idx){
  //
  //   return <li key={idx}>{article.title}</li>;
  //
  // })

  return (

    <div>

      <ul>

        {
          list.map(function(item){
            return <li>{item.title}</li>
          })

        }


      </ul>



    </div>


  )






  // articles.forEach((article) =>{
  //   const {image} = article
  //
  // })

  // const images = list.map((image, idx) => <li key={idx}><img src = {image.image} alt={image.image}></img></li>)

  // return (
  //   <ul>
  //     {/*{articles}*/}
  //
  //     {/*{images}*/}
  //
  //     {/*<li>*/}
  //
  //       {/*<img src={src} alt{alt}/>*/}
  //
  //     {/*</li>*/}
  //
  //   </ul> )

}

export default Pictures
