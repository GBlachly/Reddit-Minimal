import React from 'react'; 
import './Posts.css';
import { useSelector, useDispatch } from 'react-redux';

import { Post } from '../../components/Post/post'
import { selectPosts, getAllComments } from './postsSlice';


export const Posts = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    const onToggleComments = (index) => {
        return (permalink) => {
            dispatch(getAllComments(index, permalink))
        };
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