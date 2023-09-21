import { configureStore } from '@reduxjs/toolkit';
import themesReducer from './ThemesSlice';




const store = configureStore({
    reducer: {
        themes: themesReducer,
    },
});

export default store;
