import React from 'react'
import { connect } from 'react-redux'
import { toggleCardstackLayout} from '../actions';

const ToggleCardstackLayout = ({dispatch}) => {
    let input;
    return (
        <div>
            <button onClick={ (e) => {
                e.preventDefault();
                dispatch(toggleCardstackLayout());
            }}>Toggle Layout</button>
        </div>
    )
}

export default connect()(ToggleCardstackLayout)