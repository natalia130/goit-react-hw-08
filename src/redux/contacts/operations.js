import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', async (arg, thunkApi) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', async (id, thunkApi) => { 
        try {
            await axios.delete(`/contacts/${id}`);
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact', async (item, thunkApi) => { 
        try {
            await axios.post('/contacts', item);
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);