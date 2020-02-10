import { createStore } from 'redux';
import indexReducer from './reducer';

let store = createStore(indexReducer, window.STATE_FROM_SERVE);

export default store;
