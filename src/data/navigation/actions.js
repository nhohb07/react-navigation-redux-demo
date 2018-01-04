import * as actionTypes from './actionTypes';

export const addScreen = (payload) => ({
  type: actionTypes.ADD_SCREEN,
  payload
});

export const removeScreen = (payload) => ({
  type: actionTypes.REMOVE_SCREEN,
  payload
});
