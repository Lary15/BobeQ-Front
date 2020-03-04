import api from './api';

export const signIn = (email, password) => {
  return api.post('/auth/login', {
    email,
    password,
  });
};

export const signUp = user => {
  return api.post('/users', user);
};
