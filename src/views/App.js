import React, {useEffect, useState} from 'react';
import './App.css';
import Api from './../api/api';
import Header from './../componets/header/header'
import Slider from './../componets/slider/slider'
import Detail from './../componets/character/character-detail'

function App() {
  
  const [characterList, setCharacterList] = useState([])
  const [characterDetail, setCharacterDetail] = useState({})
  const [showSlider, setShowSlider] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    Api.getAllCharacters().then(({results}) => {
      const ch = results.map(({id, name, image}) => {
        return {id, name, image}
      })
      setCharacterList(ch)
      setShowSlider(true) 
    })
  })

  function showCharacterDetail(data) {
    setCharacterDetail(data)
    //setShowSlider(false)
    setShowDetail(true)
  }

  function closeCharacterDetail() {
    setCharacterDetail({})
    setShowDetail(false)
    //setShowSlider(true)
  }

  return (
    <div className="App">
      <section className="App-secction">
        <Header />
        { showSlider ? (
          <Slider 
            items={characterList}
            onClick={(data) => showCharacterDetail(data)}
          /> 
        ) : null }
      </section>
      { showDetail ? (
          <Detail
            characterDetail={characterDetail}
            onClick={closeCharacterDetail}
          />
      ) : null }
    </div>
  )

}

export default App;
