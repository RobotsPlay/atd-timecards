const initialState = {
    cards: [
        {
            title: 'Test Card'
        }
    ]
}

function timeCardsApp(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CARD':
            return Object.assign({}, state, {
                cards: [
                    ...state.cards,
                    {
                        title: action.title
                    }
                ]
            })
        default:
            return state;
    }
};

export default timeCardsApp;