import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Overview from './components/content/overview';
import Nav from './components/nav';
import Threads from './components/content/threads';
import Weapons from './components/content/weapons';
import Pickups from './components/content/pickups';
import Sprites from './components/content/sprites';
import VehicleColors from './components/content/vehicle_colors';
import VehicleTypes from './components/content/vehicle_types';
import VehicleMods from './components/content/vehicle_mods';
import Locations from './components/content/locations';
import Savehouses from './components/content/savehouses';
import Map from './components/content/map';
import Legend from './components/content/legend';
import Garages from './components/content/garages';
import BlockRoute from "./components/BlockRoute";

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
          <Routes>
            <Route path={'/'} element={<Overview />} />
            <Route path={'/block/:id'} element={<BlockRoute />} />
            <Route path={'/threads'} element={<Threads />} />
            <Route path={'/weapons'} element={<Weapons />} />
            <Route path={'/pickups'} element={<Pickups />} />
            <Route path={'/sprites'} element={<Sprites />} />
            <Route path={'/vcolors'} element={<VehicleColors />} />
            <Route path={'/vtypes'} element={<VehicleTypes />} />
            <Route path={'/vmods'} element={<VehicleMods />} />
            <Route path={'/garages'} element={<Garages />} />
            <Route path={'/locations'} element={<Locations />} />
            <Route path={'/savehouses'} element={<Savehouses />} />
            <Route path={'/map'} element={<Map />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
