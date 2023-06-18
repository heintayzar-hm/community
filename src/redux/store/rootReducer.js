import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// store in redux persist
import { persistReducer } from 'redux-persist';
import { whitelist, SLICES, blacklist } from '../constants';
import userSlice from '../slices/userSlice/userSlice';
import postSlice from '../slices/PostSlice/PostSlice';
import encryptor from '../../services/EncryptionService';
const persistConfig = {
  // Root
  key: SLICES.ROOT_SLICE.NAME,
  storage,
  whitelist: whitelist,
  blacklist: blacklist,
  transforms: [encryptor]
};

const rootReducer = combineReducers({
  [SLICES.USER_SLICE.NAME]: userSlice,
  [SLICES.POST_SLICE.NAME]: postSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
