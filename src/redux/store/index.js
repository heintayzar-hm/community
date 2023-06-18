import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import persistStore from 'redux-persist/es/persistStore';

const middleware = [thunk];
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware]
});

const persistor = persistStore(store);

export { store, persistor };
