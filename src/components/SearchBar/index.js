import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SearchBar = () => {
    const [ word, setWord ] = useState('');
    
    return(
        <div className='searchBar'>
            <input placeholder='Buscar' value={word} onChange={event => setWord(event.target.value)} type='text'/>
            <Link to={`/categories/search/${word}`}>
                <button className='btn' type="button">
                    🔍
                </button>
            </Link>
        </div>
        
    );
}

export default SearchBar;