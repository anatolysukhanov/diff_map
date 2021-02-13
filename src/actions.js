export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const GOOGLE_MAPS_LOADED = "GOOGLE_MAPS_LOADED";
export const FIND_PARCELS = "FIND_PARCELS";
export const LAYERS_LOADED = "LAYERS_LOADED";
export const TOGGLE_LAYER = "TOGGLE_LAYER";
export const CHANGE_BUILDING_TYPE = "CHANGE_BUILDING_TYPE";
export const SHOW_TOOLTIP = "SHOW_TOOLTIP";

export const FIT_MAP = "FIT_MAP";

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

export const layersLoaded = () => ({
  type: LAYERS_LOADED
});

export const toggleLayer = (layer, checked) => ({
  type: TOGGLE_LAYER,
  payload: {
    layer,
    checked
  }
});

export const changeBuildingType = type => ({
  type: CHANGE_BUILDING_TYPE,
  payload: type
});

export const showTooltip = tooltip => ({
  type: SHOW_TOOLTIP,
  payload: tooltip
});

export const fitMap = data => ({
  type: FIT_MAP,
  payload: data
});
