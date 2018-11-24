import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({cards}) => (
    <div className="card-list">
        {cards.map((card, index) => (
            <Card key={index} title={card.title}></Card>
        ))}
    </div>
)

export default CardList