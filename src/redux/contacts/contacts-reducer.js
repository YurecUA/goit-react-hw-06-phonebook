import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-action';

const { addContact, deleteContact, addFilter } = actions;

const items = createReducer([], {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// function itemsReducer(state = [], { type, payload }) {
//   switch (type) {
//     case actionTypes.ADD_CONTACT:
//       return [payload, ...state];

//     case actionTypes.DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== payload.id);

//     default:
//       return state;
//   }
// }

// function filterReducer(state = '', { type, payload }) {
//   switch (type) {
//     case actionTypes.ADD_FILTER:
//       return payload.text;

//     default:
//       return state;
//   }
// }
