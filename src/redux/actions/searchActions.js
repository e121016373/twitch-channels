import { ActionTypes } from "./action-types";

export const setSearch = (searchString) => {
  return {
    type: ActionTypes.SET_SEARCH,
    payload: searchString,
  };
};
