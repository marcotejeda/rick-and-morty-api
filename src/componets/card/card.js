import React from 'react'
import './card.css'
import Api from './../../api/api'

function Card(props) {

  function handlerCard(id) {
    Api.getCharacterById(id).then((data) => {
      props.onClick(data)
    })
  }

  return(
    <div className="Card" onClick={() => handlerCard(props.character.id)}>
      <picture className="Card-image">
        <img src={props.character.image} alt="description"/>
      </picture>
    </div>
  )

}

export default Card;