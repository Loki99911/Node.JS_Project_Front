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

export const getUserInfoAPI = id => {
  return axios.get(`/auth/user-data/${id}`).then(({ data }) => {
    return data;
  });
};

export const updateUserInfoAPI = body => {
  return axios.patch('/auth/user-data', body).then(({ data }) => {
    return data;
  });
};

export const getCurrentUserAPI = () => {
  return axios.get('/auth/user-data').then(({ data }) => {
    return data;
  });
};

export const subscribeEmail = email => {
  return axios.post('/auth/user-data/subscribe', email).then(({ data }) => {
    return data;
  });
};

export const subscribeEmailConfirmation = token => {
  console.log("Запрос>",token);
  return axios
    .get(`auth/user-data/subscribe?token=${token}`)
    .then(({ data }) => {
      console.log('Ответ>', data);
      return data;
    });
};
