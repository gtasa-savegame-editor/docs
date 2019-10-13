import React, { Component } from 'react';
import map from '../map.png';

class Map extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <img
            src={map}
            width="620"
            height="620"
            style={{ border: 'solid 1px black' }}
            alt="Map"
          />
          <ul>
            <li>
              Convert San Andreas coordinates to coordinates on this map:
              <br />x = 0.1 * x + 310
              <br />y = 310 - 0.1 * y
            </li>
            <li>
              Convert short coordinates to coordinates on this map:
              <br />x = 0.0125 * x + 310
              <br />y = 310 - 0.0125 * y
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Map;
