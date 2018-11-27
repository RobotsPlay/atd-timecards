import React from 'react';
import { connect } from 'react-redux';
import {addCard, addEntry, toggleCardTitleEditable, toggleCardstackLayout, updateCardTitle} from '../actions';
import Card from '../components/Card';

const CardLlist = ({cards, cardStackGrid, onUpdateCardTitle, onToggleCardTitleEditable, onAddEntry}) => (
    <div className={`card-stack ${cardStackGrid ? 'grid' : 'stack'}`}>
        {cards.map((card, index) => (
            <Card 
                key={index} 
                card={card} 
                onToggleCardTitleEditable={onToggleCardTitleEditable}
                onUpdateCardTitle={onUpdateCardTitle}
                onAddEntry={onAddEntry}
            />
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        cardStackGrid: state.cardStackGrid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCard: (id) => {
            dispatch(addCard(id));
        },
        onToggleCardTitleEditable: (id) => {
            dispatch(toggleCardTitleEditable(id));
        },
        onAddEntry: (cardId, description, time) => {
            dispatch(addEntry(cardId, description, time));
        },
        onUpdateCardTitle: (id, title) => {
            dispatch(updateCardTitle(id, title));
        },
        onToggleCardstackLayout: () => {
            dispatch(toggleCardstackLayout());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardLlist)
