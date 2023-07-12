import Cookies from 'js-cookie'
import http from "./httpService";
import { apiUrl } from "../config";
const apiEndpoint = apiUrl;

export  function login() {
    // return localStorage.setItem('isAuthenticated', true)
      Cookies.set('isAuthenticated', true);
}

export  function logout() {
      Cookies.remove('isAuthenticated');
    // return localStorage.clear('isAuthenticated')

}