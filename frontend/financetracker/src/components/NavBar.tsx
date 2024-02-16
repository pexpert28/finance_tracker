import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/income">Income List</Link>
                </li>
                <li>
                    <Link to="/expense">Expense List</Link>
                </li>
                <li>
                    <Link to="/summary">Summary</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;