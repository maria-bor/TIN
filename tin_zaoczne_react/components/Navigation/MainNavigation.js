import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation_logo">
            <h1>TIN React.js</h1>
        </div>
        <nav className="main-navigation_items">
            <ul>
                <li>
                    <NavLink to="/task1">Task 1</NavLink>
                </li>
                <li>
                    <NavLink to="/task2">Task 2</NavLink>
                </li>
                <li>
                    <NavLink to="/task3">Task 3</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default mainNavigation;