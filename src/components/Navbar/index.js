import React from 'react';
import { categories } from '../../data';
import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
    return(
        <header>
            <nav>
                <ul className="nav-bar">
                    {categories.map(categorie => (
                        <li key={categorie.id}>
                            <Link className='nav-item' to={`/categories/${categorie.id}`}>{categorie.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;