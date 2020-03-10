import axios from 'axios';
import { GET_SERVICES, GET_SERVICE, CREATE_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from '../actionTypes';

export const getAllServices = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/services');
        if (data.success) {
            dispatch({ type: GET_SERVICES, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneService = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/services/${id}`);
        if (data.success) {
            dispatch({ type: GET_SERVICE, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createService = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post('/services', body);
        if (data.success) {
            dispatch({ type: CREATE_SERVICE, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateService = (body) => async (dispatch) => {
    try {
        const { data } = await axios.put('/services', body);
        if (data.success) {
            dispatch({ type: UPDATE_SERVICE, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteService = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/services/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_SERVICE })
        }
    } catch (e) {
        Promise.reject(e)
    }
}