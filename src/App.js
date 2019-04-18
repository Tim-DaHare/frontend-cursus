import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {
    render() {
        return (
            <div className="app">
                {/* <div className="inner"> */}
                    <TodoList className="todolist"/>
                {/* </div> */}
            </div>
        );
    }
}

export default App;
