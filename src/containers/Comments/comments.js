import React, { useEffect } from 'react';
import './Comments.css';
import { useSelector, useDispatch } from 'react-redux';
import { Comment } from '../../components/Comment/Comment';

import { getAllComments, selectCommentObjs, selectIsLoading, selectHasError } from './commentsSlice';
//import { getAllComments, selectCommentsLoading, selectCommentsError } from '../Posts/postsCommentsSlice';

export const Comments = (props) => {
    
    /*
    const { postId, permalink } = props;
    const commentObjs = useSelector((state) => state.postsComments.posts.find(post => post.id === postId).commentObjs);
    const loading = useSelector(selectCommentsLoading);
    const error = useSelector(selectCommentsError);
    */
    
    const { permalink } = props;
    const commentObjs = useSelector(selectCommentObjs);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectHasError);
    
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllComments(permalink))
    }, [dispatch, permalink]);
    
    if (loading) {
        return (<h1>Currently Loading</h1>);
    };

    if (error) {
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