import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('action received', action);
  switch (action.type) {
  case FETCH_WEATHER:
    // don't use state.push(action.payload.data)  -- this manipulates state

    // concat doesn't change the existing array. It creates a new array with
    // the old stuff and new stuff
    // return state.concat([action.payload.data]);

    // ...state will take entries in state and insert it into the outside
    // array. It flattens it 
    return [ action.payload.data, ...state ];
  }

  return state;
}