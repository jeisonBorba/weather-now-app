import { FETCH_FORECAST } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_FORECAST:
            const { forecast, city } = action.payload;
            return { ...state, forecast, city };
        default:
            return state;
    }
}