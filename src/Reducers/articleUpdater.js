import { SET_LOADING_STATUS, GET_POST } from "../Actions/actionType";
export const initState = {
  articles: [],
  loading: false,
};

const articleUpdater = (state = initState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};
export default articleUpdater;
