import { ActionTypes } from "../actions/action-types";

const initialState = {
  channels: {},
  channel: {},
  showChannelModal: false,
};

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CHANNELS:
      return { ...state, channels: action.payload };
    case ActionTypes.SELECT_CHANNEL:
      return { ...state, channel: action.payload };
    case ActionTypes.OPEN_MODAL:
      return { ...state, showChannelModal: action.payload };
    case ActionTypes.RESET_CHANNELS:
      return initialState;
    default:
      return state;
  }
};
