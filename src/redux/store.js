import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Bu `localStorage` uchun kerak

// Redux persist konfiguratsiyasi
const persistConfig = {
    key: 'root',   // Bu holatni saqlash uchun asosiy kalit
    storage,       // Brauzerning localStorage yoki sessionStorage'ida ma'lumotlarni saqlash
};

const persistedReducer = persistReducer(persistConfig, navbarReducer);

const store = configureStore({
    reducer: {
        navbar: persistedReducer,
    },
});

export const persistor = persistStore(store);

export default store;
