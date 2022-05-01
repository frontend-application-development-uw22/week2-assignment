import React from 'react'

function MissedItem({item, idx}){

  return <li key={idx}>
    <span>{item.title}</span></li>

}

export default MissedItem
