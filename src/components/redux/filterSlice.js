import { createSlice } from '@reduxjs/toolkit';

export const filterSlice= createSlice({
    name: 'filter',
    //initialState:{filter:''},
    initialState:'',
     reducers: {
      setFilter(state, action) {
        if (action.payload) {
            console.log('state', state)
         //state.contactsUser = state.contactsUser.filter((contact)=>contact.includes(action.payload)) ;
        }
      },
    },
  });

  export const { setFilter} = filterSlice.actions;