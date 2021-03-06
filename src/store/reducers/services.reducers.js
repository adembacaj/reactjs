import { GET_SERVICES, GET_SERVICE } from '../actionTypes';

export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SERVICES:
            return payload;
        case GET_SERVICE:
            return payload;
        default:
            return state;
    }
}