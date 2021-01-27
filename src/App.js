import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";

import Map from "./Map";
import Search from "./Map/Search";

import { toggleSearchPanel } from "./actions";

class App extends Component {
  hideSidebar = () => {
    console.log("hideSidebar");
    this.props.dispatch(toggleSearchPanel());
  };

  render = () => {
    const { dispatch, app, map } = this.props;
    /*console.log(
      "App render: sidebar visible?",
      app.isSidebarVisible,
      "google maps loading?",
      map.isGoogleMapsLoading,
      "layers",
      map.layers
    );*/
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          animation="overlay"
          direction="top"
          icon="labeled"
          // onHide={this.hideSidebar}
          visible={app.isSidebarVisible}
          width="thin"
        >
          <Search dispatch={dispatch} />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Map
              dispatch={dispatch}
              layers={map.layers}
              address={app.address}
              parcelSize={app.parcelSize}
              siteCoverage={app.siteCoverage}
              delta={app.delta}
              isGoogleMapsLoading={map.isGoogleMapsLoading}
            />
            {map.tooltip.content !== "" && (
              <div
                className="tooltip"
                style={{
                  left: map.tooltip.x + "px",
                  top: map.tooltip.y + "px"
                }}
              >
                {map.tooltip.content}
              </div>
            )}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  };
}

const mapStateToProps = state => ({
  app: state.app,
  map: state.map
});

export default connect(mapStateToProps)(App);
