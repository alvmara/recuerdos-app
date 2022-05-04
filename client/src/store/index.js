import { createStore, compose } from 'redux';
import credentials  from './reducers/credentials';
import memories  from './reducers/memories';

import persistState from 'redux-localstorage'
import { combineReducers } from "redux";

const middlewares = compose(persistState());


export default createStore(
   combineReducers({
       credentials,
       memories
   }),
   middlewares,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)