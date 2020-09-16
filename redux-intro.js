let redux = require('redux'); //import redux from 'redux';

let initialState = {
    totalLikes: 0,
    totalDislike: 0
}

let mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_LIKE':
            return {...state, totalLikes: state.totalLikes + 1}
        case 'DECREMENT_LIKE':
            return {...state, totalLikes: state.totalLikes - 1}
        case 'INCREMENT_BY_CUSTOM_VALUE':
            return {...state, totalLikes: state.totalLikes + action.incVal}
        default:
            return {...state};
    }
}

//Global State
let globalStore = redux.createStore(mainReducer); //Creates a global store with default {} value

globalStore.subscribe(() => {
    console.log(globalStore.getState());
})

globalStore.dispatch({type: 'INCREMENT_LIKE'});
globalStore.dispatch({type: 'DECREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_LIKE'});
globalStore.dispatch({type: 'DECREMENT_LIKE'});
globalStore.dispatch({type: 'DECREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_BY_CUSTOM_VALUE', incVal: 10});