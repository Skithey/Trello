import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <section className=" flex space-between">

                    <ul className="first-nav nav-bar clean-list flex ">
                        {/* <li><NavLink to="/" exact>x</NavLink></li> */}
                        <li className="nav-button">
                            <FontAwesomeIcon icon={['fas', 'home']} />
                            
                                </li>
                        <li className="nav-button">
                            <FontAwesomeIcon icon={['fas', 'chalkboard']} />
                            </li>
                        <li className="nav-button"><input type="text" />  
                         <FontAwesomeIcon icon={['fas', 'search']} className="search-icon" />
                         </li>
                    </ul>

                    <section className="logo flex align-center">
                        <h1>Trello</h1>
                    </section>

                    <ul className="second-nav nav-bar clean-list flex ">
                        <li className="nav-button"> 
                        <FontAwesomeIcon icon={['fas', 'plus']} />
                        </li>
                        <li className="nav-button">
                            <FontAwesomeIcon icon={['far', 'user']} />
                        </li>
                    </ul>
                </section>
            </header>
        );
    }
}

export default Header;