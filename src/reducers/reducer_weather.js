import { FETCH_WEATHER } from './../actions/index';

export default function(state = [], action) {
    // console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([ action.payload.data ]); // We don't mutate our state
            // We dont manipulate our data, we create new and return it then
            return [ action.payload.data, ...state ];
    }

    return state;
};