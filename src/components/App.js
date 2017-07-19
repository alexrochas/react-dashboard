import React, { Component } from 'react';
import NumberWidget from '../components/NumberWidget';

// Import widgets being used in this component

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NumberWidget heading="Open ticket total" max={9} value={5} />
            </div>
        );
    }
}

export default App;
