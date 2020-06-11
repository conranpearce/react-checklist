import React, { Component } from 'react';
import PropTypes from 'prop-types';

var FontAwesome = require('react-fontawesome')

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#282c34',
            color: '#5cb9d3',
            padding: '10px',
            borderBottom: '1px #ccc solid',
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
                    <button onClick={this.props.delTodo.bind(this, id)} style={ btnStyle }>
                        <FontAwesome
                            name="times-circle"
                            size="2x"
                        />
                    </button>
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

const btnStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    color: '#9986ca'
}

export default TodoItem;
