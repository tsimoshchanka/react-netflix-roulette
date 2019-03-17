import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { Results } from './Results';
import { Footer } from './Footer';
import './index.css';

// class App extends React.Component {
//     render() {
//         return (
//             <>
//                 <Header />
//                 <Results />
//                 <Footer />
//             </>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// Didn't manage to render components of different types into one in the way above

ReactDOM.render(<Header />, document.getElementById('header-container'));
ReactDOM.render(Results, document.getElementById('results-container'));
ReactDOM.render(<Footer />, document.getElementById('footer-container'));
