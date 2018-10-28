import React, { Component } from 'react';

class Savehouses extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <p>
            This table shows all the variables relating to your location.
            <br />
            This variables are also in the block documentation pages.
            <br />
            If you save a game outside, block 25 will be two bytes smaller and
            block 27 two bytes larger.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="header">Block</td>
                <td className="header">Address</td>
                <td className="header">Size</td>
                <td className="header center">Value</td>
                <td className="header">Notes</td>
              </tr>
              <tr>
                <td className="type" rowSpan="6">
                  <a href="?page=block00">00</a>
                </td>
                <td className="float">0070</td>
                <td className="center">4</td>
                <td className="center">X</td>
                <td className="middle" rowSpan="3">
                  Camera position
                </td>
              </tr>
              <tr>
                <td className="float">0074</td>
                <td className="center">4</td>
                <td className="center">Y</td>
              </tr>
              <tr>
                <td className="float">0078</td>
                <td className="center">4</td>
                <td className="center">Z</td>
              </tr>
              <tr>
                <td className="int">00C4</td>
                <td className="center">4</td>
                <td className="center">Heaven</td>
                <td>Use to detect location, first step</td>
              </tr>
              <tr>
                <td className="bool">00D0</td>
                <td className="center">1</td>
                <td className="center">Inside</td>
                <td />
              </tr>
              <tr>
                <td className="float">00D4</td>
                <td className="center">4</td>
                <td className="center">Inside</td>
                <td>1.0 when inside, 0.0 when outside</td>
              </tr>
              <tr>
                <td className="type" rowSpan="2">
                  <a href="?page=block01">01</a>
                </td>
                <td className="bool">00A0</td>
                <td className="center">1</td>
                <td className="center">Outside</td>
                <td />
              </tr>
              <tr>
                <td className="int">0DD0</td>
                <td className="center">4</td>
                <td className="center">House</td>
                <td>Use to detect location, second step if saved outside</td>
              </tr>
              <tr>
                <td className="type" rowSpan="2">
                  <a href="?page=block02">02</a>
                </td>
                <td className="int">0196</td>
                <td className="center">1</td>
                <td className="center">Heaven</td>
                <td />
              </tr>
              <tr>
                <td className="int">0198</td>
                <td className="center">4</td>
                <td className="center">Location</td>
                <td />
              </tr>
              <tr>
                <td className="type" rowSpan="3">
                  <a href="?page=block25">25</a>
                </td>
                <td className="bool">0000</td>
                <td className="center">1</td>
                <td className="center">Inside</td>
                <td />
              </tr>
              <tr>
                <td className="int middle">0004</td>
                <td className="center middle">2</td>
                <td className="center middle">Location</td>
                <td>
                  These bytes don't exist if saved outside.
                  <br />
                  Use to detect location, second step if saved inside.
                </td>
              </tr>
              <tr>
                <td className="int middle">Teleport</td>
                <td className="center middle">2</td>
                <td className="center middle">Location</td>
                <td>
                  The address is in the teleport column of the savehouse table.
                  <br />
                  If the cell is empty, don't set these bytes.
                </td>
              </tr>
              <tr>
                <td className="type">
                  <a href="?page=block27">27</a>
                </td>
                <td className="int middle">008C</td>
                <td className="center middle">2</td>
                <td className="center middle">0</td>
                <td className="middle">
                  These bytes don't exist if saved inside.
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <b>Location</b> is the <a href="?page=locations">location</a>{' '}
              after leaving the house.
              <br />
              This is usually an outside location.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Savehouses</h2>
          <table>
            <tbody>
              <tr>
                <td className="header int">House</td>
                <td className="header int">Heaven</td>
                <td className="header int">Location inside</td>
                <td className="header int">Teleport</td>
                <td className="header int">Times used</td>
                <td className="header float">X</td>
                <td className="header float">Y</td>
                <td className="header float">Z</td>
                <td className="header string">Used in save places</td>
              </tr>
              <tr>
                <td className="right">0</td>
                <td className="right">3</td>
                <td className="center">219</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">42021C45</td>
                <td className="mono">D446D5C4</td>
                <td className="mono">D8057E44</td>
                <td>Home</td>
              </tr>
              <tr>
                <td className="right">1</td>
                <td className="right">5</td>
                <td className="center">222</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">59F29D44</td>
                <td className="mono">B1F342C4</td>
                <td className="mono">9FAB8844</td>
                <td>Madd Dogg</td>
              </tr>
              <tr>
                <td className="right">2</td>
                <td className="right">10</td>
                <td className="center">186</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">50ECD143</td>
                <td className="mono">0E8B1E45</td>
                <td className="mono">B6843241</td>
                <td>Desert Airport</td>
              </tr>
              <tr>
                <td className="right">3</td>
                <td className="right">8</td>
                <td className="center">370</td>
                <td className="center">08B6</td>
                <td className="right">6</td>
                <td className="mono">29E61345</td>
                <td className="mono">AE668CC4</td>
                <td className="mono">0C7F8344</td>
                <td />
              </tr>
              <tr>
                <td className="right">4</td>
                <td className="right">9</td>
                <td className="center">348</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">C1081145</td>
                <td className="mono">DCB27DC4</td>
                <td className="mono">39868344</td>
                <td>Prickle Pine</td>
              </tr>
              <tr>
                <td className="right">5</td>
                <td className="right">6</td>
                <td className="center">356</td>
                <td className="center">0862</td>
                <td className="right">8</td>
                <td className="mono">14411245</td>
                <td className="mono">7A0D85C4</td>
                <td className="mono">484D8344</td>
                <td />
              </tr>
              <tr>
                <td className="right">6</td>
                <td className="right">6</td>
                <td className="center">369</td>
                <td className="center">08B0</td>
                <td className="right">3</td>
                <td className="mono">BAB70845</td>
                <td className="mono">2B9C96C4</td>
                <td className="mono">9C428344</td>
                <td />
              </tr>
              <tr>
                <td className="right">7</td>
                <td className="right">6</td>
                <td className="center">349</td>
                <td className="center">0838</td>
                <td className="right">3</td>
                <td className="mono">F7551045</td>
                <td className="mono">002997C4</td>
                <td className="mono">305A8344</td>
                <td />
              </tr>
              <tr>
                <td className="right">8</td>
                <td className="right">10</td>
                <td className="center">351</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">99C10C45</td>
                <td className="mono">091197C4</td>
                <td className="mono">5B4F8344</td>
                <td>Hashbury</td>
              </tr>
              <tr>
                <td className="right">9</td>
                <td className="right">2</td>
                <td className="center">355</td>
                <td className="center">085C</td>
                <td className="right">2</td>
                <td className="mono">CE060C45</td>
                <td className="mono">B3B086C4</td>
                <td className="mono">FD4D8344</td>
                <td>Old Venturas Strip / Pirates in Men's Pants</td>
              </tr>
              <tr>
                <td className="right">10</td>
                <td className="right">1</td>
                <td className="center">354</td>
                <td className="center">0856</td>
                <td className="right">2</td>
                <td className="mono">202B0A45</td>
                <td className="mono">003D86C4</td>
                <td className="mono">DD738344</td>
                <td>The Clown's Pocket / The Camel's Toe</td>
              </tr>
              <tr>
                <td className="right">11</td>
                <td className="right">5</td>
                <td className="center">353</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">42880B45</td>
                <td className="mono">C3A18AC4</td>
                <td className="mono">52948344</td>
                <td>Queens</td>
              </tr>
              <tr>
                <td className="right">12</td>
                <td className="right">11</td>
                <td className="center">352</td>
                <td className="center">084A</td>
                <td className="right">2</td>
                <td className="mono">B1790E45</td>
                <td className="mono">CC6D8EC4</td>
                <td className="mono">FB788344</td>
                <td>Willowfield / Jefferson</td>
              </tr>
              <tr>
                <td className="right">13</td>
                <td className="right">0</td>
                <td rowSpan="5" className="middle center">
                  Outside
                </td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">D9C9FEC4</td>
                <td className="mono">B5D11DC5</td>
                <td className="mono">1904FE41</td>
                <td>Angel Pine</td>
              </tr>
              <tr>
                <td className="right">14</td>
                <td className="right">0</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">CD1F5B44</td>
                <td className="mono">5C4F00C2</td>
                <td className="mono">E5418242</td>
                <td>Fern Ridge</td>
              </tr>
              <tr>
                <td className="right">15</td>
                <td className="right">0</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">279CFCC4</td>
                <td className="mono">BA5A1C43</td>
                <td className="mono">8184F241</td>
                <td>Doherty</td>
              </tr>
              <tr>
                <td className="right">16</td>
                <td className="right">0</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">05682DC4</td>
                <td className="mono">BD4B6E44</td>
                <td className="mono">E6AE5B41</td>
                <td>Tierra Robada</td>
              </tr>
              <tr>
                <td className="right">17</td>
                <td className="right">0</td>
                <td className="center" />
                <td className="right">1</td>
                <td className="mono">3CC9FC44</td>
                <td className="mono">55017944</td>
                <td className="mono">C9763941</td>
                <td>The Strip</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <b>Location inside</b> is the location at the other side of the
              door of <b>Location</b>.<br />
              This information is important, because in the case a house is used
              for more than one save place, you have to change the teleport.
              <br />
              Because I put the corresponding teleport addresses in the column
              next to it, you can forget about this numbers.
            </li>
            <li>
              If you use savehouse 1, set byte 053D of block 25 to 0x60.
              <br />
              Otherwise you can't leave the house.
            </li>
            <li>
              Savehouse 2 (desert airport) seems to act different than the other
              savehouses.
              <br />
              You will notice that when you try to go to other locations from
              this savehouse.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Save Places</h2>
          <table>
            <tbody>
              <tr>
                <td className="header int">ID</td>
                <td className="header int">House</td>
                <td className="header int">Location</td>
                <td className="header int">Map X</td>
                <td className="header int">Map Y</td>
                <td className="header string">Hood</td>
                <td className="header string">Notes</td>
              </tr>
              <tr>
                <td className="right">0</td>
                <td className="right">13</td>
                <td className="right">-1</td>
                <td className="right">105</td>
                <td className="right">563</td>
                <td>Angel Pine</td>
                <td />
              </tr>
              <tr>
                <td className="right">1</td>
                <td className="right">14</td>
                <td className="right">-1</td>
                <td className="right">398</td>
                <td className="right">312</td>
                <td>Fern Ridge</td>
                <td>Catalina</td>
              </tr>
              <tr>
                <td className="right">2</td>
                <td className="right">15</td>
                <td className="right">-1</td>
                <td className="right">106</td>
                <td className="right">294</td>
                <td>Doherty</td>
                <td />
              </tr>
              <tr>
                <td className="right">3</td>
                <td className="right">16</td>
                <td className="right">-1</td>
                <td className="right">240</td>
                <td className="right">214</td>
                <td>Tierra Robada</td>
                <td>Toreno</td>
              </tr>
              <tr>
                <td className="right">4</td>
                <td className="right">17</td>
                <td className="right">-1</td>
                <td className="right">513</td>
                <td className="right">210</td>
                <td>The Strip</td>
                <td>The Four Dragons</td>
              </tr>
              <tr>
                <td className="right">5</td>
                <td className="right">3</td>
                <td className="right">10</td>
                <td className="right">479</td>
                <td className="right">520</td>
                <td>Verdant Bluffs</td>
                <td>Cesar Vialpando</td>
              </tr>
              <tr>
                <td className="right">6</td>
                <td className="right">12</td>
                <td className="right">15</td>
                <td className="right">559</td>
                <td className="right">510</td>
                <td>Willowfield</td>
                <td />
              </tr>
              <tr>
                <td className="right">7</td>
                <td className="right">12</td>
                <td className="right">18</td>
                <td className="right">521</td>
                <td className="right">439</td>
                <td>Jefferson</td>
                <td />
              </tr>
              <tr>
                <td className="right">8</td>
                <td className="right">0</td>
                <td className="right">28</td>
                <td className="right">560</td>
                <td className="right">481</td>
                <td>Ganton</td>
                <td>Home</td>
              </tr>
              <tr>
                <td className="right">9</td>
                <td className="right">3</td>
                <td className="right">36</td>
                <td className="right">399</td>
                <td className="right">474</td>
                <td>Verona Beach</td>
                <td>OG Loc</td>
              </tr>
              <tr>
                <td className="right">10</td>
                <td className="right">3</td>
                <td className="right">46</td>
                <td className="right">341</td>
                <td className="right">487</td>
                <td>Santa Maria Beach</td>
                <td />
              </tr>
              <tr>
                <td className="right">11</td>
                <td className="right">6</td>
                <td className="right">47</td>
                <td className="right">443</td>
                <td className="right">373</td>
                <td>Mulholland</td>
                <td />
              </tr>
              <tr>
                <td className="right">12</td>
                <td className="right">1</td>
                <td className="right">48</td>
                <td className="right">436</td>
                <td className="right">387</td>
                <td>Mulholland</td>
                <td>Madd Dogg</td>
              </tr>
              <tr>
                <td className="right">13</td>
                <td className="right">8</td>
                <td className="right">57</td>
                <td className="right">63</td>
                <td className="right">323</td>
                <td>Hashbury</td>
                <td />
              </tr>
              <tr>
                <td className="right">14</td>
                <td className="right">11</td>
                <td className="right">58</td>
                <td className="right">67</td>
                <td className="right">276</td>
                <td>Queens</td>
                <td />
              </tr>
              <tr>
                <td className="right">15</td>
                <td className="right">6</td>
                <td className="right">70</td>
                <td className="right">106</td>
                <td className="right">314</td>
                <td>Doherty</td>
                <td>Driving School</td>
              </tr>
              <tr>
                <td className="right">16</td>
                <td className="right">6</td>
                <td className="right">74</td>
                <td className="right">98</td>
                <td className="right">219</td>
                <td>Calton Heights</td>
                <td />
              </tr>
              <tr>
                <td className="right">17</td>
                <td className="right">7</td>
                <td className="right">75</td>
                <td className="right">87</td>
                <td className="right">237</td>
                <td>Chinatown</td>
                <td />
              </tr>
              <tr>
                <td className="right">18</td>
                <td className="right">7</td>
                <td className="right">100</td>
                <td className="right">39</td>
                <td className="right">227</td>
                <td>Paradiso</td>
                <td />
              </tr>
              <tr>
                <td className="right">19</td>
                <td className="right">10</td>
                <td className="right">137</td>
                <td className="right">533</td>
                <td className="right">125</td>
                <td>The Clown's Pocket</td>
                <td />
              </tr>
              <tr>
                <td className="right">20</td>
                <td className="right">9</td>
                <td className="right">138</td>
                <td className="right">548</td>
                <td className="right">92</td>
                <td>Old Venturas Strip</td>
                <td />
              </tr>
              <tr>
                <td className="right">21</td>
                <td className="right">7</td>
                <td className="right">139</td>
                <td className="right">592</td>
                <td className="right">94</td>
                <td>Creek</td>
                <td />
              </tr>
              <tr>
                <td className="right">22</td>
                <td className="right">9</td>
                <td className="right">146</td>
                <td className="right">507</td>
                <td className="right">147</td>
                <td>Pirates in Men's Pants</td>
                <td />
              </tr>
              <tr>
                <td className="right">23</td>
                <td className="right">10</td>
                <td className="right">148</td>
                <td className="right">534</td>
                <td className="right">181</td>
                <td>The Camel's Toe</td>
                <td />
              </tr>
              <tr>
                <td className="right">24</td>
                <td className="right">3</td>
                <td className="right">151</td>
                <td className="right">554</td>
                <td className="right">240</td>
                <td>Rockshore West</td>
                <td />
              </tr>
              <tr>
                <td className="right">25</td>
                <td className="right">3</td>
                <td className="right">171</td>
                <td className="right">450</td>
                <td className="right">119</td>
                <td>Redsands West</td>
                <td />
              </tr>
              <tr>
                <td className="right">26</td>
                <td className="right">4</td>
                <td className="right">172</td>
                <td className="right">439</td>
                <td className="right">56</td>
                <td>Prickle Pine</td>
                <td />
              </tr>
              <tr>
                <td className="right">27</td>
                <td className="right">3</td>
                <td className="right">173</td>
                <td className="right">402</td>
                <td className="right">108</td>
                <td>Whitewood Estates</td>
                <td />
              </tr>
              <tr>
                <td className="right">28</td>
                <td className="right">5</td>
                <td className="right">176</td>
                <td className="right">156</td>
                <td className="right">44</td>
                <td>El Quesbrados</td>
                <td />
              </tr>
              <tr>
                <td className="right">29</td>
                <td className="right">5</td>
                <td className="right">177</td>
                <td className="right">205</td>
                <td className="right">154</td>
                <td>Tierra Robada</td>
                <td />
              </tr>
              <tr>
                <td className="right">30</td>
                <td className="right">2</td>
                <td className="right">190</td>
                <td className="right">352</td>
                <td className="right">55</td>
                <td>Verdant Meadows</td>
                <td>Desert Airport</td>
              </tr>
              <tr>
                <td className="right">31</td>
                <td className="right">5</td>
                <td className="right">194</td>
                <td className="right">273</td>
                <td className="right">193</td>
                <td>Fort Carson</td>
                <td />
              </tr>
              <tr>
                <td className="right">32</td>
                <td className="right">5</td>
                <td className="right">202</td>
                <td className="right">101</td>
                <td className="right">541</td>
                <td>Angel Pine</td>
                <td />
              </tr>
              <tr>
                <td className="right">33</td>
                <td className="right">5</td>
                <td className="right">204</td>
                <td className="right">389</td>
                <td className="right">361</td>
                <td>Dillimore</td>
                <td />
              </tr>
              <tr>
                <td className="right">34</td>
                <td className="right">5</td>
                <td className="right">205</td>
                <td className="right">534</td>
                <td className="right">293</td>
                <td>Palomino Creek</td>
                <td />
              </tr>
              <tr>
                <td className="right">35</td>
                <td className="right">5</td>
                <td className="right">210</td>
                <td className="right">330</td>
                <td className="right">321</td>
                <td>Blueberry</td>
                <td />
              </tr>
              <tr>
                <td className="right">36</td>
                <td className="right">5</td>
                <td className="right">218</td>
                <td className="right">165</td>
                <td className="right">464</td>
                <td>Whetstone</td>
                <td />
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <b>ID</b> has no meaning in San Andreas, I gave the locations a
              number.
            </li>
            <li>
              <b>Map X</b> and <b>Map Y</b> are coordinates on{' '}
              <a href="?page=map">this map</a>.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Savehouses;
