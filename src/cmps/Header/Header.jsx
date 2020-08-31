import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
// import './Header.scss'



class Header extends Component {
    render() {
        return (
            <header className="header">
                <section className="container flex space-between">

                    <ul className="first-nav nav-bar clean-list flex ">
                        {/* <li><NavLink to="/" exact>x</NavLink></li> */}
                        <li>Home</li>
                        <li>Boards</li>
                    </ul>

                    <section className="logo">
                        <h1>Trello</h1>
                    </section>

                    <ul className="second-nav nav-bar clean-list flex ">
                        <li>+</li>
                        <li>User</li>
                    </ul>
                </section>
            </header>
        );
    }
}

export default Header;