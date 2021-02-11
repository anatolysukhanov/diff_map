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
        zoneType: action.payload.zoneType,
        buildingType: action.payload.buildingType,
        isLoading:
          action.payload.address !== state.address ||
          action.payload.parcelSize !== state.parcelSize ||
          action.payload.siteCoverage !== state.siteCoverage ||
          action.payload.delta !== state.delta ||
          action.payload.zoneType !== state.zoneType ||
          action.payload.buildingType !== state.buildingType
      };

    case actions.LAYERS_LOADED:
      return {
        ...state,
        isLoading: false
      };

    case actions.CHANGE_BUILDING_TYPE:
      return {
        ...state,
        isLoading: true
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
          zoneType: "",
          buildingType: "",
          isLoading:
            state.address !== "" ||
            state.parcelSize !== "" ||
            state.siteCoverage !== "" ||
            state.delta !== "" ||
            state.zoneType !== "" ||
            state.buildingType !== ""
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
