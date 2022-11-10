import React, {useState} from "react";
import './header.css';

import { useDispatch } from "react-redux";
import { setSearchTerm } from '../Posts/postsSlice';

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

    return (
    <header className="header">
        <h1>Welcome to my app</h1>
        <nav>
          <ul>
            <li>HOME</li>
            <li>REDDIT</li>
            <li>SUBREDDITS</li>
          </ul>
        </nav> 
        <section className='header-search-bar' >
            <form onSubmit={handleSubmit}>
                <input id='search-bar-input' type='text' value={localSearchTerm} onChange={handleChange}/>
                <input id='submit-search' type='submit' value='Search Posts'/>
            </form>
        </section>
    </header>
    )
};