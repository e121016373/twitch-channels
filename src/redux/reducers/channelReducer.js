import { ActionTypes } from "../actions/action-types";

const initialState = {
  channels: {},
};

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CHANNELS:
      return { ...state, channels: action.payload };
    default:
      return state;
  }
};
