// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import navbarReducer from './navbarSlice';
import userReducer from './userSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    navbar: navbarReducer,
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
