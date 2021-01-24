import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
  changeContact,
} from './actions';
import { initialContacts } from '../initial/contacts.js';

const itemsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [changeContact]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export { itemsReducer, filterReducer };
