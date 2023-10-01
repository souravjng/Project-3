import { configureStore } from '@reduxjs/toolkit';
import themesReducer from './ThemesSlice';
import locationReducer from './locationSlice';
import NotificationReducer from './NotificationSlice';

const store = configureStore({
    reducer: {
        themes: themesReducer,
        Location: locationReducer,
        Notification:NotificationReducer,
    },
});

export default store;
