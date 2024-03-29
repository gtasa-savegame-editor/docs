import React from 'react';

const Overview = () => (
    <div>
      <div className="section">
        <p>
          This documentation can be edited on{' '}
          <a href="https://github.com/gtasa-savegame-editor/docs">GitHub</a>.
        </p>
        <p>A lot of further documentation can be found at:</p>
        <ul>
          <li>
            <a href="https://www.gtamodding.com/index.php?title=Saves_%28GTA_SA%29">
              gtamodding.com (<abbr title="Currently down.">⚠</abbr>)
            </a>
          </li>
          <li>
            <a href="https://gta.fandom.com/wiki/Category:GTA_San_Andreas">
              fandom.com
            </a>
          </li>
          <li>
            <a href="https://www.grandtheftwiki.com/Category:GTA_San_Andreas">
              grandtheftwiki.com
            </a>
          </li>
          <li>
            <a href="https://wiki.sa-mp.com/wiki/Category:General_Information">
              SA-MP Wiki
            </a>
          </li>
          <li>
            <a href="https://dev.prineside.com/gtasa_samp_model_id/?devtools_locale=en">
              GTA SA and SA-MP model ID (Prineside DevTools)
            </a>
          </li>
        </ul>
        <hr/>
        <h2>Savegame Locations</h2>
        <p>
          The savegame files are stored in files named{' '}
          <code>
            GTASAsf
            <b>
              <i>n</i>
            </b>
            .b
          </code>{' '}
          with{' '}
          <code>
            <b>
              <i>n</i>
            </b>
          </code>{' '}
          from 1 to 8.
        </p>
        <dl>
          <dt>Windows</dt>
          <dd>
            <ul>
              <li>
                Default:{' '}
                <code>
                  %UserProfile%\My Documents\GTA San Andreas User Files
                </code>
              </li>
              <li>
                The location of the <code>My Documents</code> folder can also
                be found in the registry:{' '}
                <code>
                  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell
                  Folders\Personal
                </code>
              </li>
            </ul>
          </dd>
          <dt>
            macOS <i>(Steam)</i>
          </dt>
          <dd>
            <code>
              $HOME/Documents/Rockstar Games/GTA San Andreas User Files
            </code>
          </dd>
          <dt>
            Linux <i>(Steam Play)</i>
          </dt>
          <dd>
            <ul>
              <li>
                <code>
                  $HOME/.steam/steam/steamapps/compatdata/12120/pfx/drive_c/users/steamuser/My
                  Documents/GTA San Andreas User Files
                </code>
              </li>
              <li>
                It's worth noting that while the <code>drive_c</code> folder
                contains the savegames, the game is launched from the regular{' '}
                <code>steamapps/common</code> path.
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className="section">
        <h2>Savegame layout</h2>
        <ol>
          <li>Block 0 to 29 (inclusive)</li>
          <li>Block 15, 16 and 17</li>
          <li>Block 30</li>
          <li>A 4-byte integer with the sum of all the preceding bytes</li>
        </ol>
        <p>
          Before every block in the file is the ascii string "BLOCK", so the
          file contains 34 times "BLOCK".
        </p>
        <table>
          <tbody>
          <tr>
            <th className="header">Block</th>
            <th className="header right">Size</th>
            <th className="header">Description</th>
          </tr>
          <tr>
            <td className="center">00</td>
            <td className="right">312</td>
            <td>First block</td>
          </tr>
          <tr>
            <td className="center">01</td>
            <td className="right">var</td>
            <td>Script</td>
          </tr>
          <tr>
            <td className="center">02</td>
            <td className="right">var</td>
            <td>Objects</td>
          </tr>
          <tr>
            <td className="center">03</td>
            <td className="right">9159</td>
            <td>Garages</td>
          </tr>
          <tr>
            <td className="center">04</td>
            <td className="right">11</td>
            <td>?</td>
          </tr>
          <tr>
            <td className="center">05</td>
            <td className="right">var</td>
            <td>?</td>
          </tr>
          <tr>
            <td className="center">06</td>
            <td className="right">19923</td>
            <td>Pickups</td>
          </tr>
          <tr>
            <td className="center">07</td>
            <td className="right">0</td>
            <td/>
          </tr>
          <tr>
            <td className="center">08</td>
            <td className="right">359</td>
            <td>Respawn locations</td>
          </tr>
          <tr>
            <td className="center">09</td>
            <td className="right">7000</td>
            <td>Radar blibs</td>
          </tr>
          <tr>
            <td className="center">10</td>
            <td className="right">18892</td>
            <td>Zones</td>
          </tr>
          <tr>
            <td className="center">11</td>
            <td className="right">160</td>
            <td>Gang Weapons</td>
          </tr>
          <tr>
            <td className="center">12</td>
            <td className="right">var</td>
            <td>Car Generator</td>
          </tr>
          <tr>
            <td className="center">13</td>
            <td className="right">0</td>
            <td/>
          </tr>
          <tr>
            <td className="center">14</td>
            <td className="right">0</td>
            <td/>
          </tr>
          <tr>
            <td className="center">15</td>
            <td className="right">44</td>
            <td>Money</td>
          </tr>
          <tr>
            <td className="center">16</td>
            <td className="right">1940</td>
            <td>Stats</td>
          </tr>
          <tr>
            <td className="center">17</td>
            <td className="right">6724</td>
            <td>?</td>
          </tr>
          <tr>
            <td className="center">18</td>
            <td className="right">26316</td>
            <td>Crap</td>
          </tr>
          <tr>
            <td className="center">19</td>
            <td className="right">640</td>
            <td>?</td>
          </tr>
          <tr>
            <td className="center">20</td>
            <td className="right">104</td>
            <td>Tags</td>
          </tr>
          <tr>
            <td className="center">21</td>
            <td className="right">259</td>
            <td>Roadblocks</td>
          </tr>
          <tr>
            <td className="center">22</td>
            <td className="right">552</td>
            <td>Clothes</td>
          </tr>
          <tr>
            <td className="center">23</td>
            <td className="right">92</td>
            <td>Gang wars</td>
          </tr>
          <tr>
            <td className="center">24</td>
            <td className="right">4764</td>
            <td>Unique Jumps</td>
          </tr>
          <tr>
            <td className="center">25</td>
            <td className="right">var</td>
            <td>Teleport</td>
          </tr>
          <tr>
            <td className="center">26</td>
            <td className="right">3836</td>
            <td>Crap</td>
          </tr>
          <tr>
            <td className="center">27</td>
            <td className="right">3590 / 3592</td>
            <td>?</td>
          </tr>
          <tr>
            <td className="center">28</td>
            <td className="right">0</td>
            <td/>
          </tr>
          <tr>
            <td className="center">29</td>
            <td className="right">0</td>
            <td/>
          </tr>
          <tr>
            <td className="center">30</td>
            <td className="right">var</td>
            <td>Crap / Padding</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
);

export default Overview;
