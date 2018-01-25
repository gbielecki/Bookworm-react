import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn} from './actions/auth';

const logger = createLogger();

const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(logger,thunk)));

if(localStorage.bookwormJWT){
    const user = {token: localStorage.bookwormJWT}
    store.dispatch(userLoggedIn(user));
}


ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <Route component={App} />
    </Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
