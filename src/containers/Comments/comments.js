import React, { useEffect } from 'react';
import './Comments.css';

import { useSelector, useDispatch } from 'react-redux';
import { getAllComments, selectCommentObjs, selectIsLoading, selectHasError } from './commentsSlice';
import { Comment } from '../../components/Comment/Comment';



export const Comments = (props) => {
    const { /*postId,*/ permalink } = props;

    const commentObjs = useSelector(selectCommentObjs);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectHasError);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllComments(permalink))
    }, [dispatch, permalink]);
    
    if (isLoading) {
        return (<h1>Currently Loading</h1>);
    };

    if (hasError) {
        return (<h1>Error Occured</h1>);
    };

    return (
        <div className='Comments-container'>
            {commentObjs.map(commentObj => {
                return (
                    <Comment comment={commentObj.body} />
                )
            })}
        </div>
    );
};