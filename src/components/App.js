import React, { Component } from 'react';
import Widget from '../components/Widget';
import NumberDisplay from '../components/NumberDisplay';

// Import widgets being used in this component

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Widget heading="Open ticket total">
                    <NumberDisplay max={9} value={5} />
                </Widget>
            </div>
        );
    }
}

export default App;
