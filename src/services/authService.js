/* eslint-disable no-undef */
import store from "../store/index";
import axios from "axios";
import jwt from "jsonwebtoken";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function login(user) {
  return axios.post("/api/users/login", user).then(res => {
    if (res) {
      setToken(res.data.token);
    }
  });
}

export function logout() {
  localStorage.clear();
  store.dispatch("authenticate");
}

function setToken(token) {
  localStorage.setItem("token", token);
  store.dispatch("authenticate");
}

export function getEmail() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.email;
}

export function getUserId() {
  const token = decodeToken();
  if (!token) {
    return null;
  }
  return token.user.id;
}

export function registerUser(user) {
  return http().post("/api/register", user);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function decodeToken() {
  const token = getToken();

  if (!token) {
    return null;
  }
  return jwt.decode(token);
}
