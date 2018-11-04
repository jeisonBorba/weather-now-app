import { FETCH_CITY, CREATE_CITY, DELETE_CITY } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CITY:
            return [ ...action.payload ];
        case CREATE_CITY:
            return [ ...Array.of(action.payload) ];
        case DELETE_CITY:
            const cityId = action.payload;
            return  state.filter(city => city.id !== cityId);
        default:
            return state;
    }
}