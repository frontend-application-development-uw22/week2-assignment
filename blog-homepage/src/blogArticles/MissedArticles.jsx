import React from 'react'
import Item from "./Item";
// import item from "./Item";

function MissedArticles({missedArticles}){
  console.log(missedArticles)
  const items = missedArticles.map((item, idx)=>

    <Item key={idx} item={item}/>)

    // <li key={idx}>
    //   {item.title}
    // </li>)


  return(
    <ul>

      {items}

    </ul>

  )

  // return(
  //
  //   <ul>
  //     {missedArticles.map((item, idx) => (
  //       <Item key={idx} item={item} />
  //     ))}
  //   </ul>
  //
  // )

}


// function MissedArticles(props){
//
//   return(
//     <ul>{props.missedArticles.map((item, idx)=>(<Item key={idx} item={item}/>
//     ))}
//     </ul>
//
//   )
//
// }


// const MissedArticles = (props) => (
//   <ul>
//     {props.missedArticles.map((item, idx) => (
//       <Item key={idx} item={item} />
//     ))}
//   </ul>
// );

// function missedArticles(props){
//
//   return(
//     <ul>{props.missedArticles.map((item, idx)=>(
//       <Item key={idx} item={item}/>
//     ))}</ul>
//   )
//
// }

//   return (
//     <ul>{props.map(function(item){
//         <Item item={item} />
//     })
//     </ul>)
// }

  //console.log(items)

export default MissedArticles
