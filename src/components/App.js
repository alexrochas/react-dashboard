import React, { Component } from 'react';
import NumberWidgetContainer from '../components/NumberWidgetContainer';

// Import widgets being used in this component

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NumberWidgetContainer href='http://localhost:3001/tickets/open' heading="Open ticket total" />
            </div>
        );
    }
}

export default App;
