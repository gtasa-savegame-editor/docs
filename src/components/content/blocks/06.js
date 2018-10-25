import React, {Component} from 'react';

class Block06
    extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="section">
                        <table>
                            <tbody><tr>
                                <td className="noborder">
                                </td><td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                                <td className="postop">4</td><td className="postop">5</td><td className="postop">6</td><td className="postop">7</td>
                                <td className="postop">8</td><td className="postop">9</td><td className="postop">A</td><td className="postop">B</td>
                                <td className="postop">C</td><td className="postop">D</td><td className="postop">E</td><td className="postop">F</td>
                                <td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                                <td className="postop">4</td><td className="postop">5</td><td className="postop">6</td><td className="postop">7</td>
                                <td className="postop">8</td><td className="postop">9</td><td className="postop">A</td><td className="postop">B</td>
                                <td className="postop">C</td><td className="postop">D</td><td className="postop">E</td><td className="postop">F</td>
                            </tr>
                            <tr>
                                <td className="posleft">0000</td>
                                <td className="struct" colSpan={32}>620 pickup structs</td>
                            </tr>
                            <tr>
                                <td className="posleft">4D80</td>
                                <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td></tr>
                            <tr>
                                <td className="posleft">4DA0</td>
                                <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td></tr>
                            <tr>
                                <td className="posleft">4DC0</td>
                                <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td /><td /><td /><td /><td /><td /><td /><td>
                            </td><td /><td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li>Some items in pickup array can't be moved.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Pickup</h2>
                        <table>
                            <tbody><tr>
                                <td className="noborder">
                                </td><td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                                <td className="postop">4</td><td className="postop">5</td><td className="postop">6</td><td className="postop">7</td>
                                <td className="postop">8</td><td className="postop">9</td><td className="postop">A</td><td className="postop">B</td>
                                <td className="postop">C</td><td className="postop">D</td><td className="postop">E</td><td className="postop">F</td>
                                <td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                                <td className="postop">4</td><td className="postop">5</td><td className="postop">6</td><td className="postop">7</td>
                                <td className="postop">8</td><td className="postop">9</td><td className="postop">A</td><td className="postop">B</td>
                                <td className="postop">C</td><td className="postop">D</td><td className="postop">E</td><td className="postop">F</td>
                            </tr>
                            <tr>
                                <td className="posleft">0000</td>
                                <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="int" colSpan={4}>Value</td>
                                <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="int" colSpan={2}>X</td><td className="int" colSpan={2}>Y</td><td className="int" colSpan={2}>Z</td>
                                <td className="unknown" /><td className="unknown">
                            </td><td className="int" colSpan={2}>Object</td>
                                <td className="int" colSpan={2}>Ref</td>
                                <td className="int">T</td><td className="int">A</td>
                                <td className="unknown" /><td className="unknown">
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li>
                                <b>Value</b> can be:<br />
                                <ul>
                                    <li>The amount of ammo for a weapon (should be 1 for night vision and thermal gogs)</li>
                                    <li>Price of a green house icon</li>
                                    <li>The amount of cash for a $ symbol pickup</li>
                                </ul>
                            </li>
                            <li>
                                <b>X</b>, <b>Y</b> and <b>Z</b> are the coordinates multiplied by 8.<br />
                                Pickups with a Z location of around 1000 (GTASA co-ord) will only appear in the interior map.
                            </li>
                            <li>
                                <b>Object</b> is the ID of a pickup object.
                                <ul>
                                    <li>Oyster = 953</li>
                                    <li>Snapshot = 1253</li>
                                    <li>Horseshoe = 954</li>
                                </ul>
                            </li>
                            <li><b>Ref</b> is when the object was added to the pool, don't need to edit, just use any number greater that 0.</li>
                            <li><b>Type</b> and <b>Availability</b> define the presence and re-spawning characteristics of the pickup.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Type and availability examples</h2>
                        <table>
                            <tbody><tr><td className="header">Object</td><td className="header">Before pickup</td><td className="header">After pickup</td><td className="header">Notes</td></tr>
                            <tr><td>Weapons</td><td className="center">0F / 00</td><td className="center">0F / 01</td><td /></tr>
                            <tr><td>Weapons</td><td className="center">0F / 00</td><td className="center">0F / 05</td><td>Some weapons</td></tr>
                            <tr><td>Weapons</td><td className="center">02 / 00</td><td className="center">02 / 01</td><td>Some weapons</td></tr>
                            <tr><td>Oysters and horseshoes</td><td className="center">03 / 00</td><td className="center">00 / 09</td><td /></tr>
                            <tr><td>Snapshots</td><td className="center">14 / 00</td><td className="center">00 / 09</td><td /></tr>
                            <tr><td>Blue House</td><td className="center">11 / 20</td><td className="center">11 / 24</td><td /></tr>
                            <tr><td>Green House</td><td className="center">12 / 10</td><td className="center">00 / 09</td><td /></tr>
                            <tr><td>Info</td><td className="center">03 / 00</td><td className="center">00 / 09</td><td /></tr>
                            <tr><td>Disk</td><td className="center">03 / 00</td><td /><td /></tr>
                            </tbody></table>
                        <ul>
                            <li>Oysters, horseshoes and snapshots might disappear after they are collected.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Types</h2>
                        <table>
                            <tbody><tr><td className="header center">Byte</td><td className="header">Replaceable</td><td className="header">Definition</td></tr>
                            <tr><td className="center">00</td><td className="center">Yes</td><td>Unused</td></tr>
                            <tr><td className="center">01</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">02</td><td /><td>Item pickup, respawn time 30s, respawn distance 15m</td></tr>
                            <tr><td className="center">03</td><td /><td>Item Pickup, does not respawn.</td></tr>
                            <tr><td className="center">04</td><td className="center">Yes</td><td>Item picked-up, does not respawn.</td></tr>
                            <tr><td className="center">05</td><td className="center">Yes</td><td>Item picked-up, does not respawn.</td></tr>
                            <tr><td className="center">06</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">07</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">08</td><td className="center">Yes</td><td>Item has been picked-up, will not respawn.</td></tr>
                            <tr><td className="center">09</td><td /><td>Proximity bomb?, selfdestruct when player driving in proximity 20m, explodes upon contact with vehs</td></tr>
                            <tr><td className="center">0A</td><td /><td>Proximity bomb?, selfdestruct when player driving in proximity 20m, explodes upon contact with vehs</td></tr>
                            <tr><td className="center">0B</td><td /><td>Proximity bomb?, selfdestruct when player driving in proximity 20m, explodes upon contact with vehs</td></tr>
                            <tr><td className="center">0C</td><td /><td>Proximity bomb?, selfdestruct when player in proximity 40m, explodes upon contact with vehs</td></tr>
                            <tr><td className="center">0D</td><td /><td>Item photo-op, fake pickup drops slowly down, real visible when photographed.</td></tr>
                            <tr><td className="center">0E</td><td /><td>Vehicle pickup, drive thru it to make it disappear, does not respawn.</td></tr>
                            <tr><td className="center">0F</td><td /><td>Item pickup that respawns after time.</td></tr>
                            <tr><td className="center">10</td><td /><td>Un-Pickable, (originally property)</td></tr>
                            <tr><td className="center">11</td><td /><td>Shows cancel popup. (originally property)</td></tr>
                            <tr><td className="center">12</td><td /><td>Pay-Cash pickup, pay amount to make it disappear. (originally property)</td></tr>
                            <tr><td className="center">13</td><td /><td>Get-Cash pickup, get amount to make it disappear.</td></tr>
                            <tr><td className="center">14</td><td /><td>Snapshot pickup, photograph it to make it disappear. Adds 1 snapshot collected.</td></tr>
                            <tr><td className="center">15</td><td /><td>2nd player pickup.</td></tr>
                            <tr><td className="center">16</td><td /><td>Invisible</td></tr>
                            <tr><td className="center">17</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">18</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">19</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">1A</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">1B</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">1C</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">1D</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">1E</td><td /><td>Un-Pickable</td></tr>
                            <tr><td className="center">1F</td><td /><td>Un-Pickable</td></tr>
                            </tbody></table>
                    </div>
                </div>

            </div>
        );
    }
}

export default Block06;