import React, {useEffect} from 'react'; 
import './Subreddits.css'; 
import { useSelector, useDispatch } from 'react-redux';

import { selectSubreddits, selectIsLoading, selectHasError, getAllSubreddits } from './subredditsSlice';
import { getAllPosts } from '../Posts/postsSlice';

export const Subreddits = () => {
    const subs = useSelector(selectSubreddits);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectHasError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSubreddits())
    }, [dispatch]);                          //terminal gives warning when 'dispatch' is not in the dependancy array, but it seems that the app still works (for now)

    const handleClick = (e) => {
        const subName = e.target.value;
        dispatch(getAllPosts(subName));
    };

    if (loading) {
        return (<h1>Currently Loading</h1>)
    };

    if (error) {
        return (<h1>Error Occurred</h1>)
    };

    return (
        <div className='Subreddits-container'>
            {subs.map(sub => {
                return (
                    <div className='Subreddit-individual' >
                        <button onClick={handleClick} value={sub.display_name_prefixed}>{sub.display_name_prefixed}</button>
                        <p>{sub.subscribers}</p>
                    </div>
                )
            })}
        </div>
    );
};