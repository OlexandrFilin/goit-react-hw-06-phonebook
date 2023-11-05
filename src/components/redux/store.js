import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedContactReducer = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
  contactsUser: persistedContactReducer,
  filterUser:   filterSlice.reducer,
  },
});




export const persistor = persistStore(store)