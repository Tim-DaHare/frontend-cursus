import React from 'react'
import TodoRow from './TodoRow'

class TodoList extends React.Component {
    render() {
        const { todos = [], setTodoStatus, setTodolistFilter, toggleTodoOpen } = this.props
        return (
            <table className="todo-list">
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Datum</th>
                        <th>Status</th>
                        <th className="cell--right">
                            <select
                                name="filter"
                                defaultValue={0}
                                onChange={e => setTodolistFilter(parseInt(e.target.value))}
                            >
                                <option value={0}>Open</option>
                                <option value={3}>Compleet</option>
                                <option value={2}>Gearchiveerd</option>
                                <option value={1}>Verwijdert</option>
                                <option value={-1}>Alle</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <TodoRow
                            key={i}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            dueDate={todo.dueDate}
                            status={todo.status}
                            setTodoStatus={setTodoStatus}
                            isOpen={todo.isOpen}
                            toggleOpen={(todoId, isOpen) => toggleTodoOpen(todoId, isOpen)}
                        />
                    ))}
                </tbody>
            </table >
        )
    }
}

export default TodoList