/* eslint-disable no-undef */
import store from '../store/index';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function isLoggedIn() {
  const token = localStorage.getItem('token');
  return token != null;
}

export async function login(user) {
  const res = await axios.post('/api/users/login', user);
  if (res) {
    setToken(res.data.token);
  }
}

export function logout() {
  localStorage.clear();
  store.dispatch('authenticate');
}

function setToken(token) {
  setTimeout(function() {
    localStorage.removeItem('token');
  }, 1000 * 60 * 3);
  localStorage.setItem('token', token);
  store.dispatch('authenticate');
}

export function getEmail() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.email;
}

export function getUsername() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.username;
}

export function getUserId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user._id;
}

export function getUser() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user;
}

export async function registerUser(user) {
  return await axios.post('/api/users/register', user);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function decodeToken() {
  const token = getToken();

  if (!token) {
    return null;
  }
  return jwt.decode(token);
}
