import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
  
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }
  
    componentDidCatch(error, info) {
        // TODO 
    }
  
    render() {
        if (this.state.hasError) {
            return (<>
                <h1>Something wrong with the App</h1>
                <h2>Sorry for that. We are investigating the problem.</h2>
            </>);
        }
  
        return this.props.children; 
    }
}

export default ErrorBoundary;
