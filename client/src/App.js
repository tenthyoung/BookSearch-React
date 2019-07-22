import React, { Component } from "react";
import "./App.css";
import Search from './Search/Search';
import MyBooks from './MyBooks/MyBooks';
import { NavLink, Route, Switch } from 'react-router-dom';
// import AppBar from "./AppBar/AppBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="NavBar">
          <div className="nav-wrapper white">
            <a href="#!" className="brand-logo black-text center">
              <i className="material-icons">book</i> BookSearch</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink className="black-text" to='/'>
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink className="black-text" to='/mybooks'>
                  My Books
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <NavLink className="black-text" to='/'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className="black-text" to='/mybooks'>
              My Books
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/mybooks' component={MyBooks} />
        </Switch>

      </div>


    );
  }
}

export default App;
