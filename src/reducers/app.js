import * as actions from "./../actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.FIND_PARCELS:
      return {
        ...state,
        address: action.payload.address,
        parcelSize: action.payload.parcelSize,
        siteCoverage: action.payload.siteCoverage,
        delta: action.payload.delta,
        zoneType: action.payload.zoneType
      };

    case actions.TOGGLE_SIDEBAR:
      if (state.isSidebarVisible) {
        return {
          ...state,
          isSidebarVisible: false,
          address: "",
          parcelSize: "",
          siteCoverage: "",
          delta: "",
          zoneType: ""
        };
      } else {
        return {
          ...state,
          isSidebarVisible: true
        };
      }

    default:
      return state;
  }
};

export default appReducer;
