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
      if (action.payload.checked === true) {
        layers.push(action.payload.layer);
      } else {
        const index = state.layers.indexOf(action.payload.layer);
        layers.splice(index, 1);
      }
      /*const index = state.layers.indexOf(action.payload.layer);
      if (index === -1) {
        layers.push(action.payload);
      } else {
        layers.splice(index, 1);
      }*/
      return {
        ...state,
        ...(action.payload.layer === "buildings" &&
          action.payload.checked === false && { buildingType: "" }),
        layers
      };

    case actions.CHANGE_BUILDING_TYPE:
      return {
        ...state,
        buildingType: action.payload
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
