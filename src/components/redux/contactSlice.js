import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactsUser: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contactsUser = [...state.contactsUser, action.payload];
    },

    deleteContact: (state, action) => {
      state.contactsUser = state.contactsUser.filter(
        el => el.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function

export const { addContact, deleteContact } = contactSlice.actions;

// export default addCotactSlice.reducer
