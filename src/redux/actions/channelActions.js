import { ActionTypes } from "./action-types";

export const setChannels = (channels) => {
  return {
    type: ActionTypes.SET_CHANNELS,
    payload: channels,
  };
};
