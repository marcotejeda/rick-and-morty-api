import React from 'react';
import './App.css';

import Api from './../../api/api';
import Header from './../../componets/header/Header';
import Slider from './../../componets/slider/Slider';
import Detail from './../../componets/character/CharacterDetail';

 
class App extends React.Component {
  
  constructor() {
    super()

    this.state = {
      characters: [],
      characterDetail: {},
      showSlider: false,
      showDetail: false
    }

  }

  componentDidMount() {

    Api.getAllCharacters().then(({results}) => {
      const ch = results.map(({id, name, image}) => {
        return {id, name, image}
      })

      this.setState({
        characters: ch,
        showSlider: true
      })
    })

  }

  showCharacterDetail(data) {
      this.setState({
      showDetail: true,
      characterDetail: data
    })
    
  }

  closeCharacterDetail() {
    this.setState({
      characterDetail: {},
      showDetail: false
    })
  }

  render() {
    
    const { characters, showSlider, showDetail, characterDetail } = this.state

    return (
      <div className="App">
        <section className="App-secction">
          <Header />
          { showSlider ? ( <Slider  listItems={characters} callbackCharacterDetail={this.showCharacterDetail.bind(this)} /> ) : null }
        </section>
        { showDetail ? ( <Detail characterDetail={characterDetail}  callbackCloseCharacter={this.closeCharacterDetail.bind(this)} /> ) : null }
      </div>
    )

  }

}

export default App;
