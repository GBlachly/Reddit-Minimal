import React from 'react'; 
import './Posts.css';

import { useSelector } from 'react-redux';
import { Post } from '../../components/Post/Post'

import { selectPosts } from './postsCommentsSlice';


export const Posts = () => {
    const posts = useSelector(selectPosts);

    return (
        <div className='Posts-container'>
            {posts.map(post => {
                return (
                    <Post title={post.title} score={post.score} permalink={post.permalink}/>
                )
            })}
        </div>
    )
}