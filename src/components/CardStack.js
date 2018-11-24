import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({cards, cardStackGrid}) => (
    <div className={`card-stack ${cardStackGrid ? 'grid' : 'stack'}`}>
        {cards.map((card, index) => (
            <Card key={index} title={card.title} totalTime={card.totalTime}></Card>
        ))}
    </div>
)

export default CardList