export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

// export const CHANGE_PARCEL_SIZE = "CHANGE_PARCEL_SIZE";
// export const CHANGE_SITE_COVERAGE = "CHANGE_SITE_COVERAGE";
export const FIND_PARCELS = "FIND_PARCELS";

export const GOOGLE_MAPS_LOADED = "GOOGLE_MAPS_LOADED";
export const LAYERS_LOADING = "LAYERS_LOADING";
export const LAYERS_LOADED = "LAYERS_LOADED";

/*export const changeParcelSize = (data) => ({
  type: CHANGE_PARCEL_SIZE,
  payload: data
});

export const changeSiteCoverage = (data) => ({
  type: CHANGE_SITE_COVERAGE,
  payload: data
});*/

export const findParcels = data => ({
  type: FIND_PARCELS,
  payload: data
});

export const toggleSearchPanel = () => ({
  type: TOGGLE_SIDEBAR
});

export const googleMapsLoaded = () => ({
  type: GOOGLE_MAPS_LOADED
});

export const layersLoading = () => ({
  type: LAYERS_LOADING
});

export const layersLoaded = () => ({
  type: LAYERS_LOADED
});
