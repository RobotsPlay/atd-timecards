export const ADD_CARD =  'ADD_CARD';
export const TOGGLE_CARDSTACK_LAYOUT = 'TOGGLE_CARDSTACK_LAYOUT';

export const addCard = (title) => {
    return { type: ADD_CARD, title}
}

export const toggleCardstackLayout = () => {
    return {type: TOGGLE_CARDSTACK_LAYOUT}
}

