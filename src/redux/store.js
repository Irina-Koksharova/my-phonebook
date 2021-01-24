import { configureStore } from '@reduxjs/toolkit';
import { getState, saveState } from '../services/useLocalStorage';
import { itemsReducer, filterReducer } from './reducers';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: {
    items: getState().contacts,
    filter: '',
  },
});

store.subscribe(() => {
  saveState({
    contacts: store.getState().items,
  });
});

export default store;
