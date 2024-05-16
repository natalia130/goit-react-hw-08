import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations.js";
import { logOut } from '../auth/operations';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const isPending = (action) => typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = (action) => typeof action.type === 'string' && action.type.endsWith('/rejected');

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.error = null;
                state.loading = false;
            })
            .addMatcher(isPending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isRejected, (action, state) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const contactsReducer = contactsSlice.reducer;
