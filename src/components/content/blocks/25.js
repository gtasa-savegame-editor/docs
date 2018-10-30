import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Block25 extends Component {
  handleClick() {
    // check if the user entered something
    let trimmedValue = this.state.inputValue.trim();
    if (trimmedValue === '') {
      alert('Enter a location value');
      return;
    }

    // convert it to a number
    let valueAsNumber = Number(trimmedValue);
    if (valueAsNumber === NaN) {
      alert('Value is not a number');
      return;
    }

    // check if number is in the allowed range
    if (valueAsNumber < 0 || valueAsNumber > 375) {
      alert('Value not in the allowed range: 0 - 375');
      return;
    }

    // taken from converts the given number to a hey byte array
    // nl.paulinternet.gtasaveedit.model.savegame.SavegameData#writeInt(int, int, int, int)
    let bytes = [2];
    for (let i = 0; i < 2; i++) {
      bytes[i] = (valueAsNumber >> (i * 8))
        .toString(16)
        .toUpperCase()
        .padStart(2, '0');
    }

    // set to the outputValue
    this.setState({ outputValue: bytes.join('') });

    /*
    // for debug when not needed comment out
    // nl.paulinternet.gtasaveedit.model.savegame.SavegameData#readInt(int, int, int)
    let bytesAsNumber = 0;
    for(let i=0; i<2; i++) {
      bytesAsNumber |= (parseInt(bytes[i],16) & 0xff) << i * 8;
    }
    console.error(`Number ${valueAsNumber} as bytes: ${bytes.map(byte => '0x'+byte)}`);
    console.error(`Bytes [${bytes.map(byte => '0x'+byte)}] as number: ${bytesAsNumber}`);
    */
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      outputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="section">
            <p>
              This block is about the yellow things you walk in and send you to
              somewhere else.
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
                  <td className="bool">In</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="unknown">00</td>
                  <td className="int" colSpan={2} style={{ borderWidth: 3 }}>
                    Loca
                  </td>
                  <td
                    className="struct middle"
                    style={{ borderStyle: 'solid none solid none' }}
                    colSpan={24}
                    rowSpan={2}
                  >
                    Teleports (no constant count)
                  </td>
                  <td
                    className="struct"
                    style={{ borderLeft: 'none' }}
                    colSpan={2}
                  />
                </tr>
                <tr>
                  <td className="posleft">.</td>
                  <td
                    className="struct"
                    style={{ borderRight: 'none' }}
                    colSpan={6}
                  />
                  <td className="unknown">FF</td>
                  <td className="unknown">FF</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <b>In</b> is true when saved inside.
              </li>
              <li>
                <b>Loca</b> is the location. These bytes don't exists when saved
                outside.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Teleport</h2>
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
                  <td className="int" colSpan={2}>
                    Source
                  </td>
                  <td className="int">A</td>
                  <td className="int">B</td>
                  <td className="int" colSpan={2}>
                    Target
                  </td>
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
                <b>Source</b> is the source{' '}
                <Link to={'/locations'}>location</Link>. This starts with 0 and
                counts up.
              </li>
              <li>
                <b>A</b> is often 04, but it can be anything. It doesn't seem to
                affect anything.
              </li>
              <li>
                If <b>B</b> has the 0x40 bit set, there is a yellow thing.
                Otherwise there is no teleport. Common values are 00, 20, 40 and
                60.
              </li>
              <li>
                The <b>target</b> is the location where it teleports to. -1
                (FFFF) means teleport back to the previous location.
              </li>
              <li>
                You can here convert a location ID to an address in the block.
                <br />
                The address is a hexidecimal offset.
                <br />
                <br />
                <input
                  type="number"
                  min="0"
                  max="375"
                  value={this.state.inputValue}
                  onChange={evt => this.updateInputValue(evt)}
                />
                <input
                  type="button"
                  defaultValue=">"
                  onClick={e => this.handleClick(e)}
                />
                <input
                  type="text"
                  disabled={true}
                  value={this.state.outputValue}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Block25;
