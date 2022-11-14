import React, {useState} from "react";
import './header.css';

import { useDispatch } from "react-redux";
import { setSearchTerm } from '../posts/postsSlice';

export const Header = () => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setLocalSearchTerm(searchTerm);
        //dispatch(setSearchTerm(localSearchTerm));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(localSearchTerm));
    };

    const clearSearch = () => {
        setLocalSearchTerm('');
        dispatch(setSearchTerm(localSearchTerm));
    };

    return (
    <header className="header">
        <h1><span>RED</span>DIT MINIMAL</h1>
        {/*<nav>
          <ul>
            <li>HOME</li>
            <li>REDDIT</li>
            <li>SUBREDDITS</li>
          </ul>
        </nav> */}
        <section className='header-search-bar' >
            <form onSubmit={handleSubmit}>
                <input id='search-bar-input' type='text' value={localSearchTerm} onChange={handleChange}/>
                <input className='search-buttons' type='submit' value='Search Posts'/>
                <button className='search-buttons' onClick={clearSearch} >Clear Search</button>
            </form>
        </section>
    </header>
    )
};