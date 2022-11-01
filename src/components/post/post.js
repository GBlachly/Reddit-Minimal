import React from 'react'; 
import './Post.css';

export const Post = (props) => {
    const { title, picture, karma } = props;
    return (
        <div className='Post-individual'>
            <h1>{title}</h1>
            <h2>{karma}</h2>
            <img src={picture} />
        </div>
    )
}