import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(types.ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(types.DELETE_CONTACT);
const addFilter = createAction(types.ADD_FILTER);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, addFilter };
// export const addContact = (id, name, phone) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id,
//     name,
//     phone,
//   },
// });

// export const deleteContact = (id) => ({
//   type: types.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const addFilter = (text) => ({
//   type: types.ADD_FILTER,
//   payload: {
//     text,
//   },
// });
