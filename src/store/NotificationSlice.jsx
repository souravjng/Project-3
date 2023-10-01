import { createSlice } from "@reduxjs/toolkit";




const NotificationSlice = createSlice({
    name: 'Notification',
    initialState:{
    Submissions: [
        { Subject: 'Garbage collection is irregular.' },
        { Subject: 'Roads are filled with potholes.' },
        { Subject: 'Public transportation is unreliable.' },
        { Subject: 'Water supply is inconsistent.' },
        { Subject: 'Air quality is poor due to industrial emissions.' },
        { Subject: 'There is a lack of street lighting in many areas.' },
        { Subject: 'Government services are slow and inefficient.' },
        { Subject: 'The education system needs improvement.' },
        { Subject: 'Road condition is deteriorating.' }],
    Reward: { name: '', date: '', id:''},
    Payment: { name: '', date: '', id:'' },
    },
    reducers: {
        setSubmissionNotification(state, action) {
            const { title } = action.payload;
            state.Submissions = [ { Subject: title },...state.Submissions];
        },
        setRewardNotification(state, action) {
            const { name, date, id } = action.payload;
            state.Reward = { name, date, id };
        },
        setPaymentNotification(state, action) {
            const { name, date, id } = action.payload;
            state.Payment = { name, date, id };
        },
    },
});

export const { setSubmissionNotification,setRewardNotification,setPaymentNotification } = NotificationSlice.actions;

export default NotificationSlice.reducer;
