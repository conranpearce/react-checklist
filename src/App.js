import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import About from './components/pages/About';
import './Stylesheets/App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3') // '?_limit=5' is a query parameter to only return 5 values
      .then(res => this.setState({ todos: res.data }))
    }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }

  // Delete To Do
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add To Do
  addTodo = (title) => {
    // Post request to only return false to do's
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo }/>
                <Todos todos={ this.state.todos } markComplete={ this.markComplete }
                delTodo={ this.delTodo }/>
              </React.Fragment>
            )} />
            {/* <Route path="/about" component={About} /> */}
            <Link style={linkStyle}to="/About">About</Link>

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}


const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}


export default App;
