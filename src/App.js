import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import Todos from './components/pages/todos/Todos';
// import AddTodo from './components/pages/todos/AddTodo';
import Aims from './components/pages/Aims';
import Checklist from './components/pages/Checklist';
import Reflect from './components/pages/Reflect';
import NotFound from './components/pages/404';
import Home from './components/pages/Home';
import './Stylesheets/App.css';
import { Switch, Link } from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/aims" component={Aims} />
              <Route path="/checklist" component={Checklist} />
              <Route path="/reflect" component={Reflect} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
