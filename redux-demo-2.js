let redux = require('redux');

let initialState = {
    stack: [],
}

let mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "PUSH":
            return {...state, stack: [...state.stack, action.val]}
        case "POP":
            state.stack.pop()
            const updatedArr = state.stack;
            return {...state, stack: [...updatedArr]};
        default:
            return {...state}
    }
}

let globalStore = redux.createStore(mainReducer);

globalStore.subscribe(() => {
    console.log(globalStore.getState());
})

globalStore.dispatch({type: 'PUSH', val: 10});
globalStore.dispatch({type: 'PUSH', val: 9});
globalStore.dispatch({type: 'PUSH', val: 8});
globalStore.dispatch({type: 'PUSH', val: 20});
globalStore.dispatch({type: 'PUSH', val: 7});
globalStore.dispatch({type: 'POP'});