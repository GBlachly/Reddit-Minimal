import React from "react";
import './comment.css';
//import moment from 'moment';

export const Comment = (props) => {
    const { comment/*, time*/ } = props;

    return (
        <div className='Comment-individual'>
           <p>{comment}</p>
           {/* <p>{moment.unix(post.created_utc).fromNow()}</p> have to install moment package to use this */}
           <hr />
        </div>
    );
};