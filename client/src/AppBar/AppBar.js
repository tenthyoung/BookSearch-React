import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

class AppBar extends Component {
  render() {
    return (
      <div>
        <nav>
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
      </div>
    );
  }
}

export default AppBar;

