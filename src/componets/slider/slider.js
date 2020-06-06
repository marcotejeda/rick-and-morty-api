import React, {useState} from 'react'
import './slider.css'
import Card from './../card/card'

function Slider(props) {
    
  const [position, setPosition] = useState(0)
  const {listItems, callbackCharacterDetail} = props

  const cardList = listItems.map((e, i) => 
    <Card 
      key={e.id} 
      character={listItems[i]} 
      callbackCharacterDetail={callbackCharacterDetail} />
  );

  function handlerSliderArrow(arrow) {
    const lastIndex = listItems.length - 1
    const listCard = document.querySelectorAll('.Card')
    let index = null;
    
    if(arrow !== 1) {
        index = (position === 0) ? lastIndex : position - 1;
        listCard[index].scrollIntoView({behavior: 'smooth', inline: 'end'})
    } else {
        index = (position === lastIndex) ? 0 : position + 1;
        listCard[index].scrollIntoView({behavior: 'smooth', inline: 'start'})
    }
    setPosition(index)
  }

  return(
    <div className="Slider">
      <div className='Slider-list'>
        {cardList}
      </div>
      <button 
        className="Slider-arrows Slider-prev" 
        onClick={() => handlerSliderArrow(0)}>
          &lt;
      </button>
      <button 
        className="Slider-arrows Slider-next" 
        onClick={() => handlerSliderArrow(1)}>
          &gt;
      </button>
    </div>
  )

}

export default Slider;