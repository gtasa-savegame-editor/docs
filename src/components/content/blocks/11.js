import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Block11 extends Component {
  render() {
    return (
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
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Ballas</td>
              </tr>
              <tr>
                <td className="posleft">0010</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Grove Street</td>
              </tr>
              <tr>
                <td className="posleft">0020</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Los Santos Vagos</td>
              </tr>
              <tr>
                <td className="posleft">0030</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">San Fierro Rifa</td>
              </tr>
              <tr>
                <td className="posleft">0040</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Da Nang Boys</td>
              </tr>
              <tr>
                <td className="posleft">0050</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Italian Mafia</td>
              </tr>
              <tr>
                <td className="posleft">0060</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Triads</td>
              </tr>
              <tr>
                <td className="posleft">0070</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">Varrio Los Aztecas</td>
              </tr>
              <tr>
                <td className="posleft">0080</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">(unused gang)</td>
              </tr>
              <tr>
                <td className="posleft">0090</td>
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="unknown" />
                <td className="int" colSpan={4}>
                  Weapon id 1
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 2
                </td>
                <td className="int" colSpan={4}>
                  Weapon id 3
                </td>
                <td className="noborder spaceleft">(unused gang)</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              Look for the weapon ids at the page{' '}
              <Link to={'/weapons'}>weapons</Link>.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Block11;
