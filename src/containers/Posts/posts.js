import React from 'react'; 
import './Posts.css';
import { useSelector } from 'react-redux';

import { Post } from '../../components/Post/post'


import { selectPosts } from './postsSlice';
//import { selectPosts } from './postsCommentsSlice';


export const Posts = () => {
    const posts = useSelector(selectPosts);

    return (
        <div className='Posts-container'>
            {posts.map((post/*, index*/) => {
                return (
                    <Post title={post.title} score={post.score} id={post.id} permalink={post.permalink}/>
                )
            })}
        </div>
    );
};