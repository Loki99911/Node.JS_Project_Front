import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  signUpUserAPI,
  logInUserAPI,
  logOutUserAPI,
  updateUserInfoAPI,
  getCurrentUserAPI,
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
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
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
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (user, { rejectWithValue }) => {
    try {
      const data = await updateUserInfoAPI(user);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getCurrentUserAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
