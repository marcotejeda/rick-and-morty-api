import React from 'react';
import './Card.css';

import Api from './../../api/api';

class Card extends React.Component {

    
    handlerCard(id) {
        Api.getCharacterById(id).then((data) => {
            this.props.callbackCharacterDetail(data)
        })
    }

    render() {

        return(
            <div className="Card" onClick={() => this.handlerCard(this.props.character.id)}>
                <picture className="Card-image">
                    <img src={this.props.character.image} alt="description"/>
                </picture>
            </div>
        )

    }

}

export default Card;