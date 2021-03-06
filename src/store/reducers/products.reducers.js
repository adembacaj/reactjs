import { GET_PRODUCTS, GET_PRODUCT } from '../actionTypes';

export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            return payload;
        case GET_PRODUCT:
            return payload;
        default:
            return state;
    }
}