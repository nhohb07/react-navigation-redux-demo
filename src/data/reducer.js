import { combineReducers } from 'redux';
import { reducer as navigationReducer } from './navigation/reducer';

export const reducer = combineReducers({
  navigation: navigationReducer,
});
