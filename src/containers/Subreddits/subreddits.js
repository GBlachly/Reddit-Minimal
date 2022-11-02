import React, {useEffect} from 'react'; 
import './Subreddits.css'; 

import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, selectIsLoading, selectHasError, fetchAllSubreddits } from './subredditsSlice';

export const Subreddits = () => {
    const subs = useSelector(selectSubreddits);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectHasError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSubreddits())
    }, [dispatch])                          //terminal gives warning when 'dispatch' is not in the dependancy array, but it seems that the app still works (for now)

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
                    <div className='Subreddit-individual'>
                        <p>{sub.display_name_prefixed}</p>
                        <p>{sub.subscribers}</p>
                    </div>
                )
            })}
        </div>
    )
}