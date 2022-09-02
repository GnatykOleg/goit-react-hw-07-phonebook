import { createReducer } from '@reduxjs/toolkit';
import {
  setFilter,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

export const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loadingReducer = createReducer(false, {
  [addContactsSuccess]: () => false,
  [addContactsRequest]: () => true,
  [addContactsError]: () => false,
  [deleteContactsSuccess]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsError]: () => false,
  [fetchContactsSuccess]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsError]: () => false,
});

export const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
