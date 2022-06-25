import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Homepage.module.css';

const Homepage = () => {
    const dispatch = useDispatch();

    return(
        <div className={classes.MainContainer}>
            <section className={classes.First} onClick={() => dispatch({ type: "UPDATE_LIKES_COUNT", updateByValue: 1 })}>Likes Increment</section>
            <section className={classes.Second} onClick={() => dispatch({ type: "UPDATE_LIKES_COUNT", updateByValue: -1 })}>Likes Decrement</section>
            <section className={classes.Third} onClick={() => dispatch({ type: "UPDATE_DISLIKES_COUNT", updateByValue: 1 })}>Dislikes Increment</section>
            <section className={classes.Fourth} onClick={() => dispatch({ type: "UPDATE_DISLIKES_COUNT", updateByValue: -1 })}>Dislikes Decrement</section>
        </div>
    );
}

export default Homepage;