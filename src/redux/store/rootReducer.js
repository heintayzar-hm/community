import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// store in redux persist
import { persistReducer } from 'redux-persist';
import { whitelist, SLICES } from '../constants';
import userSlice from '../slices/userSlice';
const persistConfig = {
  // Root
  key: SLICES.ROOT_SLICE.NAME,
  storage,
  whitelist: whitelist
};

const rootReducer = combineReducers({
  [SLICES.USER_SLICE.NAME]: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
