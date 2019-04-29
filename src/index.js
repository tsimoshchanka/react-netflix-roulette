import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<ErrorBoundary>
    <Provider store={store}>
        <App />
    </Provider>
</ErrorBoundary>, document.getElementById('root'));
