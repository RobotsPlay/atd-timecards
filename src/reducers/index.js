const initialState = {
    cards: [
        {
            id: 0,
            title: 'Test Card',
            titleEditable: false,
            totalTime: '0.0h',
            entries: []
        }
    ],
    cardStackGrid: true
}

function timeCardsApp(state = initialState, action) {
    let cards = [];
    switch(action.type) {
        case 'ADD_CARD':
            return Object.assign({}, state, {
                cards: [
                    ...state.cards,
                    {
                        id: action.id,
                        title: action.title,
                        titleEditable: false,
                        totalTime: '0.0h',
                        entries: []
                    }
                ]
            })
        case 'UPDATE_CARD_TITLE': 
            state.cards.map(
                (card) => {
                    card.titleEditable = false;
                    cards.push((card.id === action.id && action.title.length) ? {...card, title: action.title} : card);
                }
            );
            return Object.assign({}, state, {cards});
        case 'ADD_ENTRY': 
            state.cards.map(
                (card) => {
                    if(card.id === action.cardId && action.description.length && action.time) {
                        card.entries.push({
                            description: action.description, 
                            time: action.time
                        });

                        card.totalTime = 0;
                        card.entries.forEach((entry) => {
                            card.totalTime += parseFloat(entry.time);
                        });
                        card.totalTime += 'h';
                    }
                    cards.push(card);
                }
            );
            return Object.assign({}, state, {cards});
        case 'TOGGLE_CARD_TITLE_EDITABLE':
            state.cards.map(
                (card) => {
                    cards.push(card.id === action.id ? {...card, titleEditable: !card.titleEditable} : card);
                }
            );
            return Object.assign({}, state, {cards});
        case 'TOGGLE_CARDSTACK_LAYOUT': 
            return Object.assign({}, state, {
                cardStackGrid: !state.cardStackGrid 
            })
        default:
            return state;
    }
};

export default timeCardsApp;