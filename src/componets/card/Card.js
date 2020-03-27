import React from 'react';
import './Card.css';

import api from './../../api/api';

class Card extends React.Component {

    
    handlerCard(id) {
        api.getCharacterById(id).then((data) => {
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