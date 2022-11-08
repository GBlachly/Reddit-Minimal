import React from 'react'; 
import './post.css';

import { Comment } from '../Comment/Comment';

export const Post = (props) => {
    const { post, index, onToggleComments } = props;


    const renderComments = () => {
        if (post.errorComments) {
          return (
            <div>
              <h3>Error loading comments</h3>
            </div>
          );
        }
    
        if (post.loadingComments) {
          return (
            <div>
              <h1>Loading</h1>
            </div>
          );
        }
    
        if (post.showingComments) {
          return (
            <div>
              {post.comments.map((comment) => (
                <Comment comment={comment.body} />
              ))}
            </div>
          );
        }
    
        return null;
      };
    
    return (
        <div className='Post-individual'>
            
            <h1>{post.title}</h1>
            <h1>{post.score}</h1>
            <h1>{post.id}</h1>
            <h1>{index}</h1>
            <h1>{post.permalink}</h1>
            <button onClick={() => onToggleComments(post.permalink)}>Show Comments</button>
            
            {renderComments()}

        </div>
    );
};