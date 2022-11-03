import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllComments } from './commentsSlice';
import { Comment } from '../../components/Comment/Comment';



export const Comments = (props) => {
    const { postId, permalink } = props;
    //const comments = useSelector()
    //const comments = [];
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllComments(permalink))
    }, [dispatch]);

    return (
        <div className='Comments-container'>
            {comments.map(comment => {
                return (
                    <Comment text={comment} />
                )
            })}
        </div>
    )
};