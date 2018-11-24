import { connect } from 'react-redux';
import CardStack from '../components/CardStack';
import {addCard} from '../actions';

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
        onToggleCardstackLayout: () => {
            dispatch(toggleCardstackLayout());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardStack)
