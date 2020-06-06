import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#282c34',
            color: '#5cb9d3',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={ bntStyle }>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const bntStyle = {
    background: '#9986ca',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
