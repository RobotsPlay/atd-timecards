export const ADD_CARD =  'ADD_CARD';
export const UPDATE_CARD_TITLE = 'UPDATE_CARD_TITLE';
export const ADD_ENTRY =  'ADD_ENTRY';
export const TOGGLE_CARD_TITLE_EDITABLE =  'TOGGLE_CARD_TITLE_EDITABLE';
export const TOGGLE_CARDSTACK_LAYOUT = 'TOGGLE_CARDSTACK_LAYOUT';

let nextCardId = 1;
let nextEntryId = 0;
export const addCard = (title) => {
    return { type: ADD_CARD, id: nextCardId++, title}
}

export const addEntry = (cardId, description, time) => {
    return { type: ADD_ENTRY, cardId, entryID: nextEntryId++, description, time}
}

export const updateCardTitle = (id, title) => {
    return { type: UPDATE_CARD_TITLE, id, title}
}

export const toggleCardTitleEditable = (id) => {
    return {type: TOGGLE_CARD_TITLE_EDITABLE, id }
}

export const toggleCardstackLayout = () => {
    return {type: TOGGLE_CARDSTACK_LAYOUT}
}

