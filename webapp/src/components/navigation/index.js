import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class Navigation extends Component {
    state = {
    }
    render () {
        return(
            <nav className="navbar navbar-expand-md fixed-top">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="App-logo" className="webapp-logo" alt="wiggling app"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <img className="toggler-icon" src="/img/hamburger.svg" alt="menu" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hello Event Host!</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

