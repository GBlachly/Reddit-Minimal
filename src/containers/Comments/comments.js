import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllComments, selectCommentObjs } from './commentsSlice';
import { Comment } from '../../components/Comment/Comment';



export const Comments = (props) => {
    const { /*postId,*/ permalink } = props;
    const commentObjs = useSelector(selectCommentObjs)
    //const comments = [];
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllComments(permalink))
    }, [dispatch, permalink]);

    return (
        <div className='Comments-container'>
            {commentObjs.map(commentObj => {
                return (
                    <Comment comment={commentObj.body} />
                )
            })}
        </div>
    )
};