import React from "react";
import './comment.css';

export const Comment = (props) => {
    const { comment } = props;

    return (
        <div className='Comment-individual'>
           <p>{comment}</p>
           <hr />
        </div>
    );
};