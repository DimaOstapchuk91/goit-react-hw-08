import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post('/users/signup', credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userLogin, thunkApi) => {
    try {
      const { data } = await goitApi.post('/users/login', userLogin);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logaut = createAsyncThunk('auth/logaut', async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;

  setAuthHeader(token);

  try {
    const { data } = await goitApi.post('/users/logout');
    return data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (!token) {
      return thunkApi.rejectWithValue('token not found');
    }

    setAuthHeader(token);

    try {
      const { data } = await goitApi.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
