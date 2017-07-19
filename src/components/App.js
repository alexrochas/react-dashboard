import React, { Component } from 'react';
import NumberWidgetContainer from '../components/NumberWidgetContainer';
import ListWidgetContainer from '../components/ListWidgetContainer';

// Import widgets being used in this component

// Add in styles
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ListWidgetContainer
                  href="http://localhost:3001/stats/top"
                  heading="Top Ticket Answerers"
                  rowspan={3} />
                <NumberWidgetContainer href='http://localhost:3001/tickets/open' heading="Open ticket total" />
            </div>
        );
    }
}

export default App;
