import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, authSlice);

// add recipe reducer
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
