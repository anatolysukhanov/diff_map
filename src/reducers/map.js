import * as actions from "./../actions";

const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GOOGLE_MAPS_LOADED:
      return {
        ...state,
        isGoogleMapsLoading: false
      };

    case actions.LAYERS_LOADING:
      return {
        ...state,
        isLayersLoading: true
      };

    case actions.LAYERS_LOADED:
      return {
        ...state,
        isLayersLoading: false
      };

    default:
      return state;
  }
};

export default mapReducer;
