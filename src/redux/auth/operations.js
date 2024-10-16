import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectToken } from './selectors';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

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
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logaut = createAsyncThunk('auth/logaut', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const token = selectToken(state);

  try {
    const { data } = await goitApi.post(
      '/users/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = selectToken(state);
    if (!token) {
      return;
    }

    try {
      const { data } = await goitApi.get('/users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

// horsethebest@mail.com  123456789 Khal Drogo
