import React from "react";

export const Comment = (props) => {
    const { comment } = props;

    return (
        <div className='Comment-individual'>
           <p>{comment}</p>
        </div>
    )
};