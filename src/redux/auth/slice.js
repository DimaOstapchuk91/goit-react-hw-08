import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logaut, login, refreshUser, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const sliсe = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logaut.fulfilled, () => initialState)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, () => initialState)
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logaut.pending,
          refreshUser.pending
        ),
        state => {
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logaut.rejected),
        state => {
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logaut.fulfilled,
          refreshUser.fulfilled
        ),
        state => {
          state.error = false;
        }
      );
  },
});

export const authReducer = sliсe.reducer;
