import * as actions from "./../actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    /*case actions.CHANGE_PARCEL_SIZE:
      return {
        ...state,
        parcelSize: action.payload
      };

    case actions.CHANGE_SITE_COVERAGE:
      return {
        ...state,
        siteCoverage: action.payload
      };*/

    case actions.FIND_PARCELS:
      return {
        ...state,
        parcelSize: action.payload.parcelSize,
        siteCoverage: action.payload.siteCoverage,
        delta: action.payload.delta
      };

    case actions.TOGGLE_SIDEBAR:
      if (state.isSidebarVisible) {
        return {
          ...state,
          isSidebarVisible: false,
          parcelSize: "",
          siteCoverage: "",
          delta: ""
        };
      } else {
        return {
          ...state,
          isSidebarVisible: true
        };
      }
    /*return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible
      };*/

    default:
      return state;
  }
};

export default appReducer;
