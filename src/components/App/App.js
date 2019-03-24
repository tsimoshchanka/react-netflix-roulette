import React from 'react';
import Header from '../Header';
import Results from '../Results';
import Footer from '../Footer';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<>
            <Header />
            <Results />
            <Footer />
        </>)
    }
}

export default App;
