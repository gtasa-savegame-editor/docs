import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Overview from './content/overview';
import Nav from './components/nav';
import Threads from './content/threads';
import Weapons from './content/weapons';
import Pickups from './content/pickups';
import Sprites from './content/sprites';
import VehicleColors from './content/vehicle_colors';
import VehicleTypes from './content/vehicle_types';
import VehicleMods from './content/vehicle_mods';
import Locations from './content/locations';
import Savehouses from './content/savehouses';
import Map from './content/map';
import Legend from './content/legend';
import { BlockRoute } from './components/BlockRoute';
import Garages from './content/garages';
import Android from './content/android';

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
      <HashRouter>
        <div id={'content'}>
          <Nav
            legendOpen={this.state.legendOpen}
            toggleLegend={this.toggleLegend}
          />
          <Legend
            closeLegend={this.closeLegend}
            visible={this.state.legendOpen}
          />
          <Route exact={true} path={'/'} component={Overview} />
          <Route path={'/block*'} component={BlockRoute} />
          <Route path={'/threads'} component={Threads} />
          <Route path={'/weapons'} component={Weapons} />
          <Route path={'/pickups'} component={Pickups} />
          <Route path={'/sprites'} component={Sprites} />
          <Route path={'/vcolors'} component={VehicleColors} />
          <Route path={'/vtypes'} component={VehicleTypes} />
          <Route path={'/vmods'} component={VehicleMods} />
          <Route path={'/garages'} component={Garages} />
          <Route path={'/android'} component={Android} />
          <Route path={'/locations'} component={Locations} />
          <Route path={'/savehouses'} component={Savehouses} />
          <Route path={'/map'} component={Map} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
