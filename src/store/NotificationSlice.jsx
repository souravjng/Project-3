import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';



const NotificationSlice = createSlice({
    name: 'Notification',
    initialState:{
    Submissions: [
        {
            title: 'Garbage collection is irregular.(CLICK ME)',
            about: 'Random About Info 1',
            subject: 'Random Subject 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor eget lectus ac venenatis. Nullam volutpat est ut libero pharetra hendrerit. In hac habitasse platea dictumst. Nulla facilisi. Sed finibus felis sit amet congue. Fusce a aliquam dui, eget ultrices justo. Sed euismod vestibulum ipsum, vel efficitur nisl sagittis sit amet. Sed luctus, purus in volutpat dignissim, mi urna ultricies purus, non condimentum est eros at purus. Nulla a tristique turpis. Phasellus et vehicula turpis, vel volutpat arcu. Sed rhoncus orci auctor tellus bibendum, at varius dolor convallis. Suspendisse potenti. In id sem vel.',
            image1: 'https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            image2: 'https://images.unsplash.com/photo-1631174721289-6656e7f3353c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            location: 'Random Coordinates 1',
            date: 'Random Date 1',
            email: 'randomemail1@example.com',
            username: 'randomusername1'
          },
          {
            title: 'Roads are filled with potholes.(CLICK ME)',
            about: 'Random About Info 2',
            subject: 'Random Subject 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor eget lectus ac venenatis. Nullam volutpat est ut libero pharetra hendrerit. In hac habitasse platea dictumst. Nulla facilisi. Sed finibus felis sit amet congue. Fusce a aliquam dui, eget ultrices justo. Sed euismod vestibulum ipsum, vel efficitur nisl sagittis sit amet. Sed luctus, purus in volutpat dignissim, mi urna ultricies purus, non condimentum est eros at purus. Nulla a tristique turpis. Phasellus et vehicula turpis, vel volutpat arcu. Sed rhoncus orci auctor tellus bibendum, at varius dolor convallis. Suspendisse potenti. In id sem vel.',
            image1: 'https://images.moneycontrol.com/static-mcnews/2017/09/bad-road-666x435.jpg?impolicy=website&width=770&height=431',
            image2: 'https://images.hindustantimes.com/img/2022/09/17/550x309/5d939434-36b7-11ed-8444-8bd3a43ea4de_1663439709640.jpg',
            location: 'Random Coordinates 2',
            date: 'Random Date 2',
            email: 'randomemail2@example.com',
            username: 'randomusername2'
          },
          {
            title: 'Public transportation is unreliable.',
            about: 'Random About Info 3',
            subject: 'Random Subject 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor eget lectus ac venenatis. Nullam volutpat est ut libero pharetra hendrerit. In hac habitasse platea dictumst. Nulla facilisi. Sed finibus felis sit amet congue. Fusce a aliquam dui, eget ultrices justo. Sed euismod vestibulum ipsum, vel efficitur nisl sagittis sit amet. Sed luctus, purus in volutpat dignissim, mi urna ultricies purus, non condimentum est eros at purus. Nulla a tristique turpis. Phasellus et vehicula turpis, vel volutpat arcu. Sed rhoncus orci auctor tellus bibendum, at varius dolor convallis. Suspendisse potenti. In id sem vel.',
            image1: 'https://plus.unsplash.com/premium_photo-1666955143719-9a6d767254c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            image2: 'https://plus.unsplash.com/premium_photo-1666955143719-9a6d767254c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80https://plus.unsplash.com/premium_photo-1666955143719-9a6d767254c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            location: 'Random Coordinates 3',
            date: 'Random Date 3',
            email: 'randomemail3@example.com',
            username: 'randomusername3'
          },
          {
            title: 'Water supply is inconsistent.',
            about: 'Random About Info 4',
            subject: 'Random Subject 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor eget lectus ac venenatis. Nullam volutpat est ut libero pharetra hendrerit. In hac habitasse platea dictumst. Nulla facilisi. Sed finibus felis sit amet congue. Fusce a aliquam dui, eget ultrices justo. Sed euismod vestibulum ipsum, vel efficitur nisl sagittis sit amet. Sed luctus, purus in volutpat dignissim, mi urna ultricies purus, non condimentum est eros at purus. Nulla a tristique turpis. Phasellus et vehicula turpis, vel volutpat arcu. Sed rhoncus orci auctor tellus bibendum, at varius dolor convallis. Suspendisse potenti. In id sem vel.',
            image1: 'https://plus.unsplash.com/premium_photo-1666955143719-9a6d767254c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            image2: 'https://plus.unsplash.com/premium_photo-1666955143719-9a6d767254c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80https://plus.unsplash.com/premium_photo-1666955143719-9a6d767254c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            location: 'Random Coordinates 4',
            date: 'Random Date 4',
            email: 'randomemail4@example.com',
            username: 'randomusername4'
          },],
    Reward: [{ Subject: 'Fund Transfer', date: '02-10-23', amount:'₹ 300',method:'UPI'},],
    Payment: { name: '', date: '', id:'' },
    },
    reducers: {
        setSubmissionNotification(state, action) {
            const { title,about,subject,description,image1,image2,coordinates,date,email,username } = action.payload;
            state.Submissions = [ { title:title,about:about,subject:subject,description:description,image1:image1,image2:image2,location:coordinates,date:date,email:email,username:username  },...state.Submissions,];
                   },
        setRewardNotification(state, action) {
            const { name, date, id } = action.payload;
            state.Reward = { name, date, amount,method };
        },
        setPaymentNotification(state, action) {
            const { name, date, id } = action.payload;
            state.Payment = { name, date, id };
        },
    },
});

export const { setSubmissionNotification,setRewardNotification,setPaymentNotification } = NotificationSlice.actions;

export default NotificationSlice.reducer;

export const uploadnewcomplaint = (Alldata) => async (dispatch) => {
  try {
        await axios.post('https://6576bdcf424e2adad5b49459.mockapi.io/Complains', Alldata);
     
  } catch (error) {
      console.error('Error posting data to MockAPI:', error);
  }
};
