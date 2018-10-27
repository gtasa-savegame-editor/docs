import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Overview from "./components/content/overview";
import Block30 from "./components/content/blocks/30";
import Block27 from "./components/content/blocks/27";
import Block26 from "./components/content/blocks/26";
import Block25 from "./components/content/blocks/25";
import Block24 from "./components/content/blocks/24";
import Block23 from "./components/content/blocks/23";
import Block22 from "./components/content/blocks/22";
import Block21 from "./components/content/blocks/21";
import Block20 from "./components/content/blocks/20";
import Block19 from "./components/content/blocks/19";
import Block18 from "./components/content/blocks/18";
import Block17 from "./components/content/blocks/17";
import Block16 from "./components/content/blocks/16";
import Block15 from "./components/content/blocks/15";
import Block12 from "./components/content/blocks/12";
import Block11 from "./components/content/blocks/11";
import Block10 from "./components/content/blocks/10";
import Block09 from "./components/content/blocks/09";
import Block08 from "./components/content/blocks/08";
import Block06 from "./components/content/blocks/06";
import Block05 from "./components/content/blocks/05";
import Block04 from "./components/content/blocks/04";
import Block03 from "./components/content/blocks/03";
import Block02 from "./components/content/blocks/02";
import Block01 from "./components/content/blocks/01";
import Block00 from "./components/content/blocks/00";
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

class App extends Component {
  render() {
    return (
        <div id={"content"}>
          <Nav/>
          <Route exact={true} path={"/"} component={Overview} />
          <Route path={"/block00"} component={Block00} />
          <Route path={"/block01"} component={Block01} />
          <Route path={"/block02"} component={Block02} />
          <Route path={"/block03"} component={Block03} />
          <Route path={"/block04"} component={Block04} />
          <Route path={"/block05"} component={Block05} />
          <Route path={"/block06"} component={Block06} />
          <Route path={"/block08"} component={Block08} />
          <Route path={"/block09"} component={Block09} />
          <Route path={"/block10"} component={Block10} />
          <Route path={"/block11"} component={Block11} />
          <Route path={"/block12"} component={Block12} />
          <Route path={"/block15"} component={Block15} />
          <Route path={"/block16"} component={Block16} />
          <Route path={"/block17"} component={Block17} />
          <Route path={"/block18"} component={Block18} />
          <Route path={"/block19"} component={Block19} />
          <Route path={"/block20"} component={Block20} />
          <Route path={"/block21"} component={Block21} />
          <Route path={"/block22"} component={Block22} />
          <Route path={"/block23"} component={Block23} />
          <Route path={"/block24"} component={Block24} />
          <Route path={"/block25"} component={Block25} />
          <Route path={"/block26"} component={Block26} />
          <Route path={"/block27"} component={Block27} />
          <Route path={"/block30"} component={Block30} />
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
          <Route path={"/legend"} component={Legend} />
        </div>
    );
  }
}

export default App;