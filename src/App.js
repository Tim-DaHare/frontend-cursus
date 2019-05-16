import React, { Component } from 'react';
import TodoList from './components/TodoList'

class App extends Component {
    constructor(props) {
        super(props)

        // Dit is de state van de app als de app net begint
        this.state = {
            filterId: 0,
            todos: [
                {
                    id: 0,
                    title: 'TODO',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 1,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 2,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 3,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 4,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 5,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 6,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 7,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                },
                {
                    id: 8,
                    title: 'TODO',
                    description: 'description',
                    dueDate: '01-07-1997',
                    status: 0,
                    isOpen: false
                }
            ]
        }
    }

    // Deze past het filterId aan
    setTodolistFilter(filterId) {
        this.setState({filterId})
    }

    //Deze functie klapt een todo open.
    toggleTodoOpen(todoId, isOpen) {
        const { todos } = this.state

        this.setState({
            todos: todos.map(todo => {
                if (todo.id !== todoId) return todo
                return {
                    ...todo,
                    isOpen
                }
            })
        })
    }

    // Deze functie past de status van een todo aan
    setTodoStatus(todoId, statusId) {
        const { todos } = this.state

        this.setState({
            todos: todos.map(todo => {
                if (todo.id !== todoId) return todo
                return {
                    ...todo,
                    status: statusId
                }
            })
        })
    }

    render() {
        // Hier halen we de variabelen uit de state
        const { todos, filterId } = this.state
        // Hier filteren we de array als het filterId lager is dan 0
        const filteredTodos = filterId < 0 ? todos : todos.filter(todo => todo.status === filterId)

        return (
            <div className="app">
                {/* Hier renderen we het TodoList component en geven wij de todos mee.
                we geven ook drie functies die worden aangeroepen in de knoppen binnen in de TodoList */}
                <TodoList
                    todos={filteredTodos}
                    // Deze prop bevat een referentie naar de setTodoStatus functie
                    setTodoStatus={(todoId, statusId) => this.setTodoStatus(todoId, statusId)}
                    // Deze prop bevat een referentie naar de setTodolistFilter functie
                    setTodolistFilter={filterId => this.setTodolistFilter(filterId)}
                    // Deze prop bevat een referentie naar de toggleTodoOpen functie
                    toggleTodoOpen={(todoId, isOpen) => this.toggleTodoOpen(todoId, isOpen)}
                />
            </div>
        )
    }
}

export default App;
