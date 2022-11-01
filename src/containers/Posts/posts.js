import React from 'react'; 
import './Posts.css';

//import { useSelector } from 'react-redux';
//import { Post } from '../../components/post/Post.js';

//import { selectPostsData } from './postsCommentsSlice';


export const Post = () => {
    const posts = useSelector(selectPostsData);

    return (
        <div className='Posts-container'>
            {posts.map(post => {
                return (
                    <Post title={post.title} picture={post.img} karma={post.karma} />
                )
            })}
        </div>
    )
}