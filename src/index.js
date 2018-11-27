import React     from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import timeCardsApp from './reducers';
import AddCard from './containers/AddCard';
import CardStack from './containers/CardStack';
import ToggleCardstackLayout from './containers/ToggleCardstackLayout';

import './sass/main.scss';


const store = createStore(timeCardsApp);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ToggleCardstackLayout />
            <AddCard />
            <CardStack />
        </div>
    </Provider>,
    document.getElementById('root')
);