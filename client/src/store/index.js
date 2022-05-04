import { createStore } from 'redux';
import credentials  from './reducers/credentials';
import memories  from './reducers/memories';

import { combineReducers } from "redux";

export default createStore(
   combineReducers({
       credentials,
       memories
   }),
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)