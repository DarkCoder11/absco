import { createStore, combineReducers } from 'redux';
import increment from './reducers/increment';

const rootReducer = combineReducers({
  increment: increment
});

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;