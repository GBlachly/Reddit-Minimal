import React from 'react'; 
import './Subreddits.css'; 

export const Subreddits = () => {
    const subs = [{id: 'r/sub1', img: 'insert pic'}, {id: 'r/sub2', img: 'insert pic'}, {id: 'r/sub3', img: 'insert pic'}];
    
    return (
        <div className='Subreddits-container'>
            {subs.map(sub => {
                return (
                    <div className='Subreddit-individual'>
                        <p>{sub.id}</p>
                        <p>{sub.img}</p>
                    </div>
                )
            })}
        </div>
    )
}