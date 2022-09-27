import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <nav>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/showBook" className='nav-link'>Show Book</Link>
            <Link to="/addBook" className='nav-link'>Add Book</Link>
        </nav>
    );
};

export default Navber;