import React from 'react'
import './character-detail.css'

function CharacterDetail(props) {

  const {characterDetail} = props

  function handlerClose() {
    props.onClick()
  }

  return (
    <div className="Character-detail">
      <div className="Character-content">
        <button className="Character-close" onClick={handlerClose}>X</button>
        <picture className="Character-avatar">
          <img src={characterDetail.image} alt={characterDetail.name}></img>
        </picture>
        <div className="Character-information">
          <div className="Character-information-content">
            <h2>{characterDetail.name}</h2>
            <p><b>Estado:</b> {characterDetail.status}</p>
            <p><b>Especie:</b> {characterDetail.species}</p>
            <p><b>Género:</b> {characterDetail.gender}</p>
            <p><b>Origen:</b> {characterDetail.origin.name}</p>
            <p><b>Ubicación:</b> {characterDetail.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CharacterDetail;