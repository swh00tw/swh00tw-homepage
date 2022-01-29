// store the redux store
import { createStore } from 'redux'
import reducer from '../reducers/index'

const store = createStore(
    reducer
);

// for debugging purpose
store.subscribe(() => {
    console.log(store.getState());
})

export default store;