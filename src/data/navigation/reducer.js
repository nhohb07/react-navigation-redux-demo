/* eslint-disable indent */
import * as actionTypes from './actionTypes';
import _ from 'lodash';

const initialState = {
  screenKeys: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_SCREEN: {
      let screenKeys = state.screenKeys;
      _.remove(screenKeys, item => item.name === payload.name);

      screenKeys.push(payload);

      return {
        screenKeys
      };
    }

    case actionTypes.REMOVE_SCREEN: {
      let screenKeys = state.screenKeys;
      const deleteCount = payload.deleteCount || 1;
      screenKeys.splice(payload.from, deleteCount);

      return {
        screenKeys
      };
    }

    default:
      return state;
  }
};
