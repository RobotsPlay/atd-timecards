const initialState = {
    cards: [
        {
            title: 'Test Card',
            totalTime: '6.25'
        }
    ],
    cardStackGrid: false
}

function timeCardsApp(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CARD':
            return Object.assign({}, state, {
                cards: [
                    ...state.cards,
                    {
                        title: action.title,
                        totalTime: '0.0h'
                    }
                ]
            })
        case 'TOGGLE_CARDSTACK_LAYOUT': 
            return Object.assign({}, state, {
                cardStackGrid: !state.cardStackGrid 
            })
        default:
            return state;
    }
};

export default timeCardsApp;