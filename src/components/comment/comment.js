import React from "react";
import './comment.css';

export const Comment = (props) => {
    const { comment/*, time*/ } = props;

    return (
        <div className='Comment-individual'>
           <p>{comment}</p>
           {/* <p>{time} use Date() to show time since posted </p> */}
           <hr />
        </div>
    );
};