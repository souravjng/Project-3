import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        coordinates: { longitude: '', latitude: '' },
        Markers: { longitude: '', latitude: '' },
        Checker:false,
    },
    reducers: {
        setCoordinates(state, action) {
            const { longitude, latitude } = action.payload;
            state.coordinates = { longitude, latitude };
            
        },
        setMarkersfun(state, action) {
            const { lat, lng } = action.payload;
            state.Markers = { longitude: lng,latitude: lat };
            state.Checker=true;
        },
    },
});

export const { setCoordinates, setMarkersfun } = locationSlice.actions;

export default locationSlice.reducer;
