import React, {useState} from 'react'; 
import './Post.css';



export const Post = (props) => {
    const { title, score, permalink } = props;
    const [showComments, setShowComments] = useState(false);

    const handleClick = (e) => {
        if (!showComments) {
           /*if (!comments.length) {
                const link = e.target.value;
                dispatch(getAllComments(link)); 
            } */
            setShowComments(true);
        } else {
            setShowComments(false);
        };
    };
    
    return (
        <div className='Post-individual'>
            <h1>{title}</h1>
            <h2>{score}</h2>
            <button onClick={handleClick} 
            value={permalink}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && <p>Hello</p> }
            {/* {showComments && <Comments />} */}
        </div>
    )
};