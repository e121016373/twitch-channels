import { ActionTypes } from "../actions/action-types";

const initialState = {
  searchString: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};
