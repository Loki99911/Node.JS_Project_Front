import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  signUp,
  logOut,
  updateUserInfo,
  getCurrentUser,
} from './authOperations';

const pending = state => {
  state.isUserFetching = true;
};
const rejected = state => {
  state.isUserFetching = false;
  state.isLoggedIn = false;
};

const initialState = {
  accessToken: null,
  isLoggedIn: false,
  isUserFetching: false,
  userData: {
    email: null,
    name: null,
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData.email = payload.user.email;
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatar;

        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isUserFetching = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userData.email = payload.user.email;
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatarURL;

        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isUserFetching = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatarURL;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.userData.name = payload.user.name;
        state.userData.avatar = payload.user.avatarURL;
        state.accessToken = payload.accessToken;
        state.isUserFetching = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))

      .addCase(signUp.pending, pending)
      .addCase(logIn.pending, pending)
      .addCase(getCurrentUser.pending, pending)

      .addCase(signUp.rejected, rejected)
      .addCase(getCurrentUser.rejected, () => ({ ...initialState }))
      .addCase(logIn.rejected, rejected),
});

export default authSlice.reducer;
