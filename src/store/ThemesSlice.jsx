import { createSlice } from "@reduxjs/toolkit";

const ThemesSlice = createSlice({
    name: 'themes',
    initialState:{
        Themecolor:['#82ce32'],
        Buttoncolor:['#3498db'],
    },
    reducers: {
        setThemeColor(state, action) {
            state.Themecolor[0]=action.payload;
        },
        setButtonColor(state, action) {
            state.Buttoncolor[0]=action.payload;
        },
    }
});

export const { setThemeColor,setButtonColor } = ThemesSlice.actions;

export default ThemesSlice.reducer;

