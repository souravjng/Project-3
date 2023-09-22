import { createSlice } from "@reduxjs/toolkit";

const ThemesSlice = createSlice({
    name: 'themes',
    initialState:{
        Themecolor:[{name: 'Green', color: '#82ce32'}],
        Buttoncolor:[{name: 'Blue', color: '#1e88e5'}],
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

