import React from 'react';

const Weapons = () => (
    <div>
      <div className="section">
        <table>
          <tbody>
          <tr>
            <th className="header int">Slot</th>
            <th className="header int">ID</th>
            <th className="header string">Name</th>
            <th className="header bool">Ammo</th>
            <th className="header float">Skill (block 16)</th>
          </tr>
          <tr>
            <td className="type" rowSpan={2}>
              0
            </td>
            <td className="right">00</td>
            <td>Unarmed</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">01</td>
            <td>Brass Knuckles</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={9}>
              1
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">02</td>
            <td>Golf Club</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">03</td>
            <td>Nightstick</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">04</td>
            <td>Knife</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">05</td>
            <td>Baseball Bat</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">06</td>
            <td>Shovel</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">07</td>
            <td>Pool Cue</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">08</td>
            <td>Katana</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">09</td>
            <td>Chainsaw</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={4}>
              2
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">16</td>
            <td>9mm</td>
            <td className="center">Yes</td>
            <td className="center">0114</td>
          </tr>
          <tr>
            <td className="right">17</td>
            <td>Silenced 9mm</td>
            <td className="center">Yes</td>
            <td className="center">0118</td>
          </tr>
          <tr>
            <td className="right">18</td>
            <td>Desert Eagle</td>
            <td className="center">Yes</td>
            <td className="center">011C</td>
          </tr>
          <tr>
            <td className="type" rowSpan={4}>
              3
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">19</td>
            <td>Shotgun</td>
            <td className="center">Yes</td>
            <td className="center">0120</td>
          </tr>
          <tr>
            <td className="right">1A</td>
            <td>Sawnoff Shotgun</td>
            <td className="center">Yes</td>
            <td className="center">0124</td>
          </tr>
          <tr>
            <td className="right">1B</td>
            <td>Combat Shotgun</td>
            <td className="center">Yes</td>
            <td className="center">0128</td>
          </tr>
          <tr>
            <td className="type" rowSpan={4}>
              4
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">20</td>
            <td>Tec-9</td>
            <td className="center">Yes</td>
            <td className="center middle" rowSpan={2}>
              012C
            </td>
          </tr>
          <tr>
            <td className="right">1C</td>
            <td>Micro SMG</td>
            <td className="center">Yes</td>
          </tr>
          <tr>
            <td className="right">1D</td>
            <td>SMG</td>
            <td className="center">Yes</td>
            <td className="center">0130</td>
          </tr>
          <tr>
            <td className="type" rowSpan={3}>
              5
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">1E</td>
            <td>AK47</td>
            <td className="center">Yes</td>
            <td className="center">0134</td>
          </tr>
          <tr>
            <td className="right">1F</td>
            <td>M4</td>
            <td className="center">Yes</td>
            <td className="center">0138</td>
          </tr>
          <tr>
            <td className="type" rowSpan={3}>
              6
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">21</td>
            <td>Rifle</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">22</td>
            <td>Sniper Rifle</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={5}>
              7
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">23</td>
            <td>Rocket Launcher</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">24</td>
            <td>Heet Seeking Rocket Launcher</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">25</td>
            <td>Flame Thrower</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">26</td>
            <td>Vulcan Mini Gun</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={5}>
              8
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">10</td>
            <td>Grenade</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">11</td>
            <td>Tear Gas</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">12</td>
            <td>Molotov Cocktail</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">27</td>
            <td>Remote Explosives</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={4}>
              9
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">29</td>
            <td>Spraycan</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">2A</td>
            <td>Fire Extinguisher</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="right">2B</td>
            <td>Camera</td>
            <td className="center">Yes</td>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={7}>
              10
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">0A</td>
            <td>Dildo 1</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">0B</td>
            <td>Dildo 2</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">0C</td>
            <td>Vibrator 1</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">0D</td>
            <td>Vibrator 2</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">0E</td>
            <td>Flowers</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">0F</td>
            <td>Cane</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={4}>
              11
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">2C</td>
            <td>Night-Vision Goggles</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">2D</td>
            <td>Thermal Goggles</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">2E</td>
            <td>Parachute</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="type" rowSpan={2}>
              12
            </td>
            <td className="right">00</td>
            <td>No</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className="right">28</td>
            <td>Remote Detonator</td>
            <td/>
            <td/>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
);

export default Weapons;
