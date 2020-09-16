import React from 'react';
import classes from './Homepage.module.css';

class Homepage extends React.Component {
    state = {
        todoList: [
            {
                id: 1,
                message: 'Buy Apples'
            },
            {
                id: 2,
                message: 'Buy Apples'
            },
            {
                id: 3,
                message: 'Buy Apples'
            },
        ]
    }

    render() {
        return(
            <div className={classes.MainContainer}>
                <button onClick={this.props.onLikeIncrement}>Like ++</button>
                <button onClick={this.props.onLikeDecrement}>Like --</button>

                {
                    this.state.todoList.map(item => {
                        return <p key={item.id} className={classes.TodoItem}>{item.message}</p>
                    })
                }
            </div>
        );
    }
}

export default Homepage;