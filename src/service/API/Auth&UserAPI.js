import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy.onrender.com';

export const signUpUserAPI = user => {
  return axios.post('/auth/signup', user).then(({ data }) => {
    return data;
  });
};

export const logInUserAPI = user => {
  return axios.post('/auth/login', user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = () => {
  return axios.post('/auth/logout').then(({ data }) => {
    console.log('data in API', data);
    return data;
  });
};

export const getUserInfoAPI = () => {};

export const updateUserInfoAPI = body => {};
