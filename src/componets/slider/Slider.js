import React from 'react';
import './../slider/Slider.css';

import Card from './../../componets/card/Card';

class Slider extends React.Component {
    
    constructor() {
        super()
        
        this.state = {
            currentIndex: 0
        }

    }

    handlerSliderArrow(arrow) {

        const { currentIndex } = this.state
        const { listItems } = this.props

        const lastIndex = listItems.length - 1
        const listCard = document.querySelectorAll('.Card')
        let index = null;
        
        if(arrow !== 1) {
            index = (currentIndex === 0) ? lastIndex : currentIndex - 1;
            listCard[index].scrollIntoView({behavior: 'smooth', inline: 'end'})
        } else {
            index = (currentIndex === lastIndex) ? 0 : currentIndex + 1;
            listCard[index].scrollIntoView({behavior: 'smooth', inline: 'start'})
        }

        this.setState({
          currentIndex: index
        })   

    }

    render() {

        const { listItems, callbackCharacterDetail}  = this.props
        const cardList = listItems.map((e, i) => <Card key={e.id} character={listItems[i]} callbackCharacterDetail={callbackCharacterDetail} />);

        return(
            <div className="Slider">
                <div className='Slider-list'>
                    {cardList}
                </div>
                <button className="Slider-arrows Slider-prev" onClick={() => this.handlerSliderArrow(0)}>&lt;</button>
                <button className="Slider-arrows Slider-next" onClick={() => this.handlerSliderArrow(1)}>&gt;</button>
            </div>
        )

    }

}

export default Slider;