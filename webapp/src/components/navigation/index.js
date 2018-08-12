import React, { Component } from 'react';
import logo from '../../logo.svg';
import NavLink from '../navigation_link';

export default class Navigation extends Component {
    state = {
    }

    render() {
      return (
        <nav className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#">
            <img src={logo} className="App-logo" className="webapp-logo" alt="wiggling app"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <img className="toggler-icon" src="/img/hamburger.svg" alt="menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <NavLink href='/' name='Home' activeClassName="active" />
              <NavLink href='/about' name='About' />
              <NavLink href='/events' name='Events' />
              <NavLink href='/hello-event-host' name='Hello Event Host!' />
              <NavLink href='/contact' name='Contact' />
            </ul>
          </div>
        </nav>
      )
    }
}