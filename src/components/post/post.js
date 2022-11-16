import React, { useState, useEffect } from 'react'; 
import './post.css';
import { useSelector } from 'react-redux';

//import moment from 'moment';
import {TiArrowDownOutline, TiArrowUpOutline} from 'react-icons/ti';

import { Comment } from '../comment/comment';
import {selectSearchTerm} from '../../containers/Posts/postsSlice';

export const Post = (props) => {
    const { post, /*index,*/ onToggleComments } = props;
    const searchTerm = useSelector(selectSearchTerm);
    const [upVoted, setUpVoted] = useState(false);
    const [downVoted, setDownVoted] = useState(false);
    const [score, setScore] = useState(Number(post.score));

    useEffect(()=>{
      setUpVoted(false);
      setDownVoted(false);
      setScore(Number(post.score));
    }, [post]);

    const handleUpVote = () => {
      setUpVoted(prev => !prev);
      if (!upVoted) {
        setScore(Number(post.score) + 1)
      };
      if (upVoted) {
        setScore(Number(post.score))
      };
      setDownVoted(false);
    };

    const handleDownVote = () => {
      setDownVoted(prev => !prev);
      if (!downVoted) {
        setScore(Number(post.score) - 1)
      };
      if (downVoted) {
        setScore(Number(post.score))
      };
      setUpVoted(false);
    };


    const renderImage = () => {
      if (post.thumbnail.length >= 5) {
        return (
          <div className='post-img' >
            <img src={post.url} alt='' />
          </div>
        )
      };

      return null;
    }; 


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
            <div className='comments-loading'>
              <h1>Loading</h1>
            </div>
          );
        }
    
        if (post.showingComments) {
          return (
            <div>
              {post.comments.map((comment) => (
                <Comment comment={comment.body} time={comment.created_utc}/>
              ))}
            </div>
          );
        }
    
        return null;
    };
    
    if (searchTerm.length) {
      if (!post.title.toLowerCase().includes(searchTerm)) {
        return null;
      }
    };

    return (
        <div className='Post-individual'>
          <div className='post-no-comments' >
              <div className='post-karma'>
                <TiArrowUpOutline className='vote-icon-up' style={upVoted && {color: 'green'} } onClick={handleUpVote} />
                <h1>{score}</h1>
                <TiArrowDownOutline className='vote-icon-down' style={downVoted && {color: 'red'} } onClick={handleDownVote}/>
              </div>

              <div className='post-title' >
                <h1>{post.title}</h1>
                {/*<h1>{post.score}</h1>
                <h1>{post.id}</h1>
                <h1>{index}</h1> 
                <h1>{post.permalink}</h1> */}
              </div>

              {/* <div className='post-img' >
                <img src={post.url} alt='' />
              </div> */}
              {renderImage()}

          </div>

          <div className='post-comments' >
            {/* <span>{moment.unix(post.created_utc).fromNow()}</span> */}
            <button onClick={() => onToggleComments(post.permalink)}>{!post.showingComments ? 'Show Comments' : 'Hide Comments'}</button>
            
            {renderComments()}
          </div>
          
        </div>
    );
};