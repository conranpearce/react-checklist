import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import Todos from './components/pages/todos/Todos';
// import AddTodo from './components/pages/todos/AddTodo';
import Aims from './components/pages/Aims';
import Checklist from './components/pages/Checklist';
import NotFound from './components/pages/404';
import Home from './components/pages/Home';
import './Stylesheets/App.css';
import axios from 'axios';
import { Switch, Link } from 'react-router-dom';

class App extends Component {

  // state = {
  //   todos: []
  // }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3') // '?_limit=5' is a query parameter to only return 5 values
  //     .then(res => this.setState({ todos: res.data }))
  //   }

  // // Toggle Complete
  // markComplete = (id) => {
  //   this.setState({ todos: this.state.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   }) });
  // }

  // // Delete To Do
  // delTodo = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  // }

  // // Add To Do
  // addTodo = (title) => {
  //   // Post request to only return false to do's
  //   axios.post('https://jsonplaceholder.typicode.com/todos', {
  //     title,
  //     completed: false
  //   })
  //     .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  // }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* I need to move this app.js to a home.js so that I can have a 404 page */}
            {/* <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo }/>
                <Todos todos={ this.state.todos } markComplete={ this.markComplete }
                delTodo={ this.delTodo }/>
              </React.Fragment>
            )} /> */}

            {/* <Link style={linkStyle}to="/About">About</Link> */}


            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/aims" component={Aims} />
              <Route path="/checklist" component={Checklist} />

              <Route path="*" component={NotFound} />
            </Switch>


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
