import React, {useState} from 'react'; 
import './Post.css';

import { Comments } from '../../containers/Comments/Comments';

export const Post = (props) => {
    const { title, score, id, permalink } = props;
    const [showComments, setShowComments] = useState(false);

    const handleClick = (e) => {
        if (!showComments) {
            setShowComments(true);
        } else {
            setShowComments(false);
        };
    };
    
    return (
        <div className='Post-individual'>
            
            <h1>{title}</h1>
            <h1>{score}</h1>
            <h1>{id}</h1>
            <h1>{permalink}</h1>
            <button onClick={handleClick}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            
            {/* {showComments && <p>Hello</p> } */}
            {showComments && <Comments postId={id} permalink={permalink} />}

        </div>
    );
};