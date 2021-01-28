import * as actions from "./../actions";

const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GOOGLE_MAPS_LOADED:
      return {
        ...state,
        isGoogleMapsLoading: false
      };

    case actions.TOGGLE_LAYER:
      let layers = [...state.layers];
      const index = state.layers.indexOf(action.payload);
      if (index === -1) {
        layers.push(action.payload);
      } else {
        layers.splice(index, 1);
      }
      return {
        ...state,
        layers
      };

    case actions.SHOW_TOOLTIP:
      return {
        ...state,
        tooltip: action.payload
      };

    default:
      return state;
  }
};

export default mapReducer;
