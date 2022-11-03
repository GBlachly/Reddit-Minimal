import React from 'react'; 
import './Post.css';

export const Post = (props) => {
    const { title, score } = props;
    
    return (
        <div className='Post-individual'>
            <h1>{title}</h1>
            <h2>{score}</h2>
        </div>
    )
};