import React, { Component } from 'react';

class Block24 extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="section">
            <table>
              <tbody>
                <tr>
                  <td className="noborder" />
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                  <td className="postop">.</td>
                </tr>
                <tr>
                  <td className="posleft">0000</td>
                  <td className="int" colSpan={4}>
                    70
                  </td>
                  <td className="struct" colSpan={28}>
                    70 unique jump structs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h2>Unique Jump</h2>
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
                  <td className="float" colSpan={4}>
                    Start X
                  </td>
                  <td className="float" colSpan={4}>
                    Start Y
                  </td>
                  <td className="float" colSpan={4}>
                    Start Z
                  </td>
                  <td className="float" colSpan={4}>
                    Start X
                  </td>
                  <td className="float" colSpan={4}>
                    Start Y
                  </td>
                  <td className="float" colSpan={4}>
                    Start Z
                  </td>
                  <td className="float" colSpan={4}>
                    Land X
                  </td>
                  <td className="float" colSpan={4}>
                    Land Y
                  </td>
                </tr>
                <tr>
                  <td className="posleft">0020</td>
                  <td className="float" colSpan={4}>
                    Land Z
                  </td>
                  <td className="float" colSpan={4}>
                    Land X
                  </td>
                  <td className="float" colSpan={4}>
                    Land Y
                  </td>
                  <td className="float" colSpan={4}>
                    Land Z
                  </td>
                  <td className="float" colSpan={4}>
                    Camera X
                  </td>
                  <td className="float" colSpan={4}>
                    Camera Y
                  </td>
                  <td className="float" colSpan={4}>
                    Camera Z
                  </td>
                  <td className="int" colSpan={4}>
                    $500
                  </td>
                </tr>
                <tr>
                  <td className="posleft">0040</td>
                  <td className="bool">C</td>
                  <td className="bool">F</td>
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
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <b>C</b> means completed.
              </li>
              <li>
                <b>F</b> means found.
              </li>
              <li>
                The number of unique jumps found and done is saved in block 16
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Block24;
