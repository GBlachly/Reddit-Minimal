import React from 'react'; 
import './posts.css';
import { useSelector, useDispatch } from 'react-redux';

import { Post } from '../../components/post/post.js'
import { selectPosts, getAllComments } from './postsSlice';


export const Posts = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    const onToggleComments = (index) => {
        const getCommentsByIndex = (permalink) => {
            dispatch(getAllComments(index, permalink))
        };
        return getCommentsByIndex;
    };

    return (
        <div className='Posts-container'>
            {posts.map((post, index) => {
                return (
                    <Post post={post} index={index} onToggleComments={onToggleComments(index)}/>
                )
            })}
        </div>
    );
};