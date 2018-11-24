import { connect } from 'react-redux';
import CardStack from '../components/CardStack';
import {addCard} from '../actions';

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCard: (id) => {
            dispatch(addCard(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardStack)
