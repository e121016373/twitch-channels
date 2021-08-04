import { ActionTypes } from "./action-types";

export const setChannels = (channels) => {
  return {
    type: ActionTypes.SET_CHANNELS,
    payload: channels,
  };
};

export const selectChannel = (channel) => {
  return {
    type: ActionTypes.SELECT_CHANNEL,
    payload: channel,
  };
};

export const resetChannels = () => {
  return {
    type: ActionTypes.RESET_CHANNELS,
    payload: null,
  };
};

export const openModal = (open) => {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: open,
  };
};
