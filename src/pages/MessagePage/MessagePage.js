import React from 'react';
import SearchFormContainer from '../../containers/SearchFormContainer';
import ResultsMessage from '../../components/ResultsMessage';
import Footer from '../../components/Footer';

const MessageScreen = ({ history, message }) => {
    const submitHandler = searchString => {
        history.push(`/search/${searchString}`);
    };

    return (
        <>
            <SearchFormContainer 
                submitHandler={submitHandler}
            />
            <ResultsMessage message={message} />
            <Footer />
        </>
    );
};

export default MessageScreen;
