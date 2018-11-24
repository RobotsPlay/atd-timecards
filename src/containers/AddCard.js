import React from 'react'
import { connect } from 'react-redux'
import { addCard} from '../actions';

const AddCard = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => (input = node)} />
            <button onClick={ (e) => {
                e.preventDefault();
                if(input.value.length) {
                    dispatch(addCard(input.value));
                    input.value = '';
                }
            }}>Add Card</button>
        </div>
    )
}

export default connect()(AddCard)