import { configureStore } from '@reduxjs/toolkit';
import themesReducer from './ThemesSlice';
import locationReducer from './locationSlice';

const store = configureStore({
    reducer: {
        themes: themesReducer,
        Location: locationReducer,
    },
});

export default store;
