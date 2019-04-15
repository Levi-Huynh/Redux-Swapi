import {FETCHING, SUCCESS, ERROR} from "../actions";

const initialState = {
  characters: [],
  error: "",
  loading: false
  // Array characters, Boolean fetching, null error.
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return {...state, loading: true};
    case SUCCESS:
    return {...state, loading: false, characters: action.payload, error: ""};
    case ERROR:
    return {...state, loading: false, characters: [], error: action.payload};
    default:
      return state;
  }
};
