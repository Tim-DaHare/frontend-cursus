import React from 'react'

class TodoRow extends React.Component {

    render() {
        const { id, title, description, dueDate, status, isOpen, setTodoStatus, toggleOpen } = this.props

        return (
            <React.Fragment>
                <tr>
                    <td>{title}</td>
                    <td>{dueDate}</td>
                    <td>
                        {status === 0 && 'Open'}
                        {status === 1 && 'Verwijdert'}
                        {status === 2 && 'Gearchiveert'}
                        {status === 3 && 'Compleet'}
                    </td>
                    <td className="cell--right">
                        <span onClick={() => toggleOpen(id, !isOpen)}>
                            {isOpen ? '-' : '+'}
                        </span>
                    </td>
                </tr>
                {isOpen &&
                    <tr>
                        <td colSpan={4}>
                            <div className="todo-info__container">
                                <p>
                                    <strong>Beschrijving</strong><br />
                                    {description}
                                </p>
                                {status !== 3 && <button className="button--green" onClick={() => setTodoStatus(id, 3)}>Compleet</button>}
                                {status !== 2 && <button className="button--yellow" onClick={() => setTodoStatus(id, 2)}>Archiveer</button>}
                                {status !== 1 && <button className="button--red" onClick={() => setTodoStatus(id, 1)}>Verwijder</button>}
                            </div>
                        </td>
                    </tr>
                }
            </React.Fragment>
        )
    }
}

export default TodoRow