// import { ADD, DELETE, CHANGE_FILTER } from './types';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, filtredContacts } from './actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer(initialState, {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const contacts = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [filtredContacts]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({ contacts, filter });
