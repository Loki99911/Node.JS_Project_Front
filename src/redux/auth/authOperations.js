import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  signUpUserAPI,
  logInUserAPI,
  logOutUserAPI,
} from 'service/API/Auth&UserAPI';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { email, password } = user;
      await signUpUserAPI(user);
      const data = await logInUserAPI({ email, password });
      token.set(data.accessToken);
      console.log('successful registration');
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await logInUserAPI(user);
      token.set(data.accessToken);
      console.log('logged in');
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

// ----------- not active for now !!!!!!!!

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);
