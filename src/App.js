import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Overview from "./components/content/overview";
import Nav from "./components/nav";
import Threads from "./components/content/threads";
import Weapons from "./components/content/weapons";
import Pickups from "./components/content/pickups";
import Sprites from "./components/content/sprites";
import VehicleColors from "./components/content/vehicle_colors";
import VehicleTypes from "./components/content/vehicle_types";
import VehicleMods from "./components/content/vehicle_mods";
import Locations from "./components/content/locations";
import Savehouses from "./components/content/savehouses";
import Map from "./components/content/map";
import Legend from "./components/content/legend";
import { BlockRoute } from "./components/BlockRoute";

class App extends Component {
  state = {
    legendOpen: false
  };

  closeLegend = () => {
    this.setState({ legendOpen: false });
  };

  toggleLegend = () => {
    this.setState({ legendOpen: !this.state.legendOpen });
  };

  render() {
    return (
      <div id={"content"}>
        <Nav
          legendOpen={this.state.legendOpen}
          toggleLegend={this.toggleLegend}
        />
        <Legend
          closeLegend={this.closeLegend}
          visible={this.state.legendOpen}
        />
        <Route exact={true} path={"/"} component={Overview} />
        <Route path={"/block*"} component={BlockRoute} />
        <Route path={"/threads"} component={Threads} />
        <Route path={"/weapons"} component={Weapons} />
        <Route path={"/pickups"} component={Pickups} />
        <Route path={"/sprites"} component={Sprites} />
        <Route path={"/vcolors"} component={VehicleColors} />
        <Route path={"/vtypes"} component={VehicleTypes} />
        <Route path={"/vmods"} component={VehicleMods} />
        <Route path={"/locations"} component={Locations} />
        <Route path={"/savehouses"} component={Savehouses} />
        <Route path={"/map"} component={Map} />
      </div>
    );
  }
}

export default App;
