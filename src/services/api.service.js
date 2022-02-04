import axios from 'axios';
import { API_URL } from '../constants/api.constants';

export const API = {
    GET_FORM: (...args) => axios.get(API_URL.FORM, ...args),
    POST_FORM: (...args) => axios.post(API_URL.FORM, ...args)
}