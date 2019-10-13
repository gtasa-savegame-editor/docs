import React, { Component } from 'react';

class Block09 extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="section">
            <p>
              Block 09 consists of <b>175</b> radar blip blocks.
              <br />
              The first four bytes of a block can be <b>0</b>, <b>7</b> or{' '}
              <b>8</b>.<br />
              Block 09 starts with the blocks that start with 8, then the ones
              with 7 and then the ones with 0.
            </p>
          </div>
          <div className="section">
            <h2>Radar blip</h2>
            <table>
              <tbody>
                <tr>
                  <td className="noborder" />
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                </tr>
                <tr>
                  <td className="posleft">0000</td>
                  <td className="int" colSpan={4}>
                    8
                  </td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="float" colSpan={4}>
                    X
                  </td>
                  <td className="float" colSpan={4}>
                    Y
                  </td>
                  <td className="float" colSpan={4}>
                    Z
                  </td>
                  <td className="int" colSpan={2}>
                    ID
                  </td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown" colSpan={4}>
                    1.0
                  </td>
                  <td className="unknown">01</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                </tr>
                <tr>
                  <td className="posleft">0020</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="int">Sp</td>
                  <td className="int">Vis</td>
                  <td className="int">M</td>
                  <td className="unknown">00</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <b>ID</b> is used when other blocks refer to a blip. (see below)
              </li>
              <li>
                <b>Sp</b> is the sprite.
              </li>
              <li>
                <b>Vis</b> is the visibility: 07 means normal visibility, 03
                means visible everywhere. 03 is used for missions.
              </li>
              <li>
                <b>M</b> is the marker. This can be 13, 16 and 17 (hex).
                <br />
                17 indicates the red marker used in missions.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Weird radar blip</h2>
            <p>
              I call these weird, because I don't know the meaning of them. They
              don't appear on the map.
            </p>
            <table>
              <tbody>
                <tr>
                  <td className="noborder" />
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                </tr>
                <tr>
                  <td className="posleft">0000</td>
                  <td className="int" colSpan={4}>
                    7
                  </td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="float" colSpan={4}>
                    X
                  </td>
                  <td className="float" colSpan={4}>
                    Y
                  </td>
                  <td className="float" colSpan={4}>
                    Z
                  </td>
                  <td className="int" colSpan={2}>
                    ID
                  </td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown" colSpan={4}>
                    1.0
                  </td>
                  <td className="unknown">01</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                </tr>
                <tr>
                  <td className="posleft">0020</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">01</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <b>X</b>, <b>Y</b> and <b>Z</b> are often zero.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Empty radar blip</h2>
            <table>
              <tbody>
                <tr>
                  <td className="noborder" />
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                </tr>
                <tr>
                  <td className="posleft">0000</td>
                  <td className="int" colSpan={4}>
                    0
                  </td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">01</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown" colSpan={4}>
                    1.0
                  </td>
                  <td className="unknown">01</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                </tr>
                <tr>
                  <td className="posleft">0020</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">01</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h2>Blip link</h2>
            <p>
              A blip link is used in other blocks to refer to an item in this
              block.
            </p>
            <table>
              <tbody>
                <tr>
                  <td className="noborder" />
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                </tr>
                <tr>
                  <td className="posleft">0000</td>
                  <td className="int" colSpan={2}>
                    Index
                  </td>
                  <td className="int" colSpan={2}>
                    ID
                  </td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <b>Index</b> is the position in this array. Multiply this value
                by 40 to get the address of the first byte.
              </li>
              <li>
                <b>ID</b> is a number that must be the same as the ID in the
                radar blip in this block.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Block09;
