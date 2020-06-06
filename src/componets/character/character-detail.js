import React from 'react'
import './character-detail.css'

function CharacterDetail(props) {

  function handlerClose() {
    props.callbackCloseCharacter()
  }

  const detail = props.characterDetail

  return (
    <div className="Character-detail">
      <div className="Character-content">
        <button className="Character-close" onClick={() => handlerClose()}>X</button>
        <picture className="Character-avatar">
          <img src={detail.image} alt={detail.name}></img>
        </picture>
        <div className="Character-information">
          <div className="Character-information-content">
            <h2>{detail.name}</h2>
            <p><b>Estado:</b> {detail.status}</p>
            <p><b>Especie:</b> {detail.species}</p>
            <p><b>Género:</b> {detail.gender}</p>
            <p><b>Origen:</b> {detail.origin.name}</p>
            <p><b>Ubicación:</b> {detail.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CharacterDetail;