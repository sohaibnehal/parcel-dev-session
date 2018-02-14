import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="app">
            <h1>This is a React Application</h1>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));