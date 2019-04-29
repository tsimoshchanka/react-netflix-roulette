import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import ResultsContainer from '../../containers/ResultsContainer';
import Footer from '../Footer';

class App extends React.Component {
    render() {
        return (
            <>
                <HeaderContainer />
                <ResultsContainer />
                <Footer />
            </>
        )
    }
}

export default App;
