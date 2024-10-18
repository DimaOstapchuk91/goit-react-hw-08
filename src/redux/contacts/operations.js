import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi, setAuthHeader } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAuthHeader(token);

    try {
      const { data } = await goitApi.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAuthHeader(token);
    try {
      const { data } = await goitApi.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAuthHeader(token);
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAuthHeader(token);

    try {
      const { data } = await goitApi.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
