import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { taskMiddleware } from "react-palm/tasks";

import appReducer from "./reducers/app";
import mapReducer from "./reducers/map";

const initialState = {
  app: {
    isSidebarVisible: false,
    address: "",
    parcelSize: "",
    siteCoverage: "",
    delta: "",
    zoneType: "",
    buildingType: "",
    isLoading: true
  },
  map: {
    isGoogleMapsLoading: true,
    layers: ["parcels", "buildings", "zoning", "ocp"],
    buildingType: "",
    tooltip: {
      content: null,
      x: 0,
      y: 0
    }
  }
};

const reducers = combineReducers({
  app: appReducer,
  map: mapReducer
});

const store = createStore(
  reducers,
  initialState
  //compose(applyMiddleware(taskMiddleware, thunk))
);

export default store;
