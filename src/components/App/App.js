import React from 'react';
import MessagePage from '../../pages/MessagePage';
import SearchPage from '../../pages/SearchPage';
import FilmsPage from '../../pages/FilmsPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 

const App = () => (
    <Router>
        <Switch>
            <Route path='/' exact render={props => <MessagePage message='No films found' {...props} />} />
            <Route path='/search' component={SearchPage} />
            <Route path='/film' component={FilmsPage} />
            <Route path='/404' render={props => <MessagePage message='404. Invalid URL, sorry for that' {...props} />} />
            <Redirect to="/404"/>
        </Switch>
    </Router>
);

export default App;
