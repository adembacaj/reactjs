import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actionTypes';

export const getAllProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/products');
        if (data.success) {
            dispatch({ type: GET_PRODUCTS, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}`);
        if (data.success) {
            dispatch({ type: GET_PRODUCT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createProduct = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post('/products', body);
        if (data.success) {
            dispatch({ type: CREATE_PRODUCT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateProduct = (body) => async (dispatch) => {
    try {
        const { data } = await axios.put('/products', body);
        if (data.success) {
            dispatch({ type: UPDATE_PRODUCT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/products/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_PRODUCT })
        }
    } catch (e) {
        Promise.reject(e)
    }
}