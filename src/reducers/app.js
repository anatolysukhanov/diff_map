import * as actions from "./../actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.FIND_PARCELS:
      return {
        ...state,
        search: action.payload
      };

    default:
      return state;
  }
};

export default appReducer;
