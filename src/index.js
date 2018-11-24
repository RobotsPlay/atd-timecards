import React     from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import timeCardsApp from './reducers';
import AddCard from './containers/AddCard';
import CardList from './containers/CardList';

import './sass/main.scss';


const store = createStore(timeCardsApp);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AddCard />
            <CardList />
        </div>
    </Provider>,
    document.getElementById('root')
);