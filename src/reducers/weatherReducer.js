import { FETCH_WEATHER, UPDATE_WEATHER } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ ...action.payload.weather ];
        case UPDATE_WEATHER:
            return action.payload;
        default:
            return state;
    }
}