import React, { useEffect } from 'react'; 
import './posts.css';
import { useSelector, useDispatch } from 'react-redux';

import { Post } from '../../components/post/post.js'
import { selectPosts, getAllComments, getAllPosts, selectedSelectedSub } from './postsSlice';


export const Posts = () => {
    const posts = useSelector(selectPosts);
    const selectedSub = useSelector(selectedSelectedSub);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts('r/pics'));
    }, [dispatch])

    const onToggleComments = (index) => {
        const getCommentsByIndex = (permalink) => {
            dispatch(getAllComments(index, permalink))
        };
        return getCommentsByIndex;
    };

    return (
        <div className='Posts-container'>
            <h1 className='sub-title'>{selectedSub}</h1>
            {posts.map((post, index) => {
                return (
                    <Post post={post} index={index} onToggleComments={onToggleComments(index)}/>
                )
            })}
        </div>
    );
};