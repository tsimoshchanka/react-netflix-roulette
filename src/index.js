import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

let persistor = persistStore(store);

ReactDOM.render(<ErrorBoundary>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
</ErrorBoundary>, document.getElementById('root'));
