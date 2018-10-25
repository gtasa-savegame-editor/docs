import React, {Component} from 'react';

class Block08
    extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="section">
                        <p>
                            This block is about respawn locations.
                        </p>
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
                                <td className="int" colSpan={2}>8</td>
                                <td className="struct" style={{borderBottom: 'none'}} colSpan={30}>
                                </td></tr>
                            <tr>
                                <td className="posleft">0020</td>
                                <td className="struct" style={{borderStyle: 'none solid none solid'}} colSpan={32} rowSpan={4}>8 Wasted spawn structs</td>
                            </tr>
                            <tr>
                                <td className="posleft">0040</td>
                            </tr>
                            <tr>
                                <td className="posleft">0060</td>
                            </tr>
                            <tr>
                                <td className="posleft">0080</td>
                            </tr>
                            <tr>
                                <td className="posleft">00A0</td>
                                <td className="struct" style={{borderTop: 'none'}} colSpan={2}>
                                </td><td className="int" colSpan={2}>7</td>
                                <td className="struct" style={{borderBottom: 'none'}} colSpan={28}>
                                </td></tr>
                            <tr>
                                <td className="posleft">00C0</td>
                                <td className="struct" style={{borderStyle: 'none solid none solid'}} colSpan={32} rowSpan={3}>7 Busted spawn structs</td>
                            </tr>
                            <tr>
                                <td className="posleft">00E0</td>
                            </tr>
                            <tr>
                                <td className="posleft">0100</td>
                            </tr>
                            <tr>
                                <td className="posleft">0120</td>
                                <td className="struct" style={{borderTop: 'none'}} colSpan={16}>
                                </td><td className="unknown">00</td>
                                <td className="float" colSpan={4}>X</td>
                                <td className="float" colSpan={4}>Y</td>
                                <td className="float" colSpan={4}>Z</td>
                                <td className="unknown">01</td><td className="unknown">01</td><td className="struct">
                            </td></tr>
                            <tr>
                                <td className="posleft">0140</td>
                                <td className="struct" colSpan={19}>Katie spawn struct</td>
                                <td className="struct" colSpan={13}>Barbara spawn struct</td>
                            </tr>
                            <tr>
                                <td className="posleft">0160</td>
                                <td className="struct" colSpan={7}>
                                </td><td /><td /><td /><td /><td /><td /><td /><td /><td>
                            </td><td /><td /><td /><td /><td /><td /><td /><td>
                            </td><td /><td /><td /><td /><td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li>
                                <b>X</b>, <b>Y</b> and <b>Z</b> are often all zero.<br />
                                I'm not sure if they are really X, Y and Z coordinates.
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Wasted/Busted spawn</h2>
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
                                <td className="float" colSpan={4}>X</td>
                                <td className="float" colSpan={4}>Y</td>
                                <td className="float" colSpan={4}>Z</td>
                                <td className="float" colSpan={4}>Heading</td>
                                <td className="int" colSpan={2}>Island</td>
                                <td className="unknown">00</td><td className="unknown">00</td>
                                <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li>
                                <b>Heading</b> is in degrees.<br />
                                0 = North, 64 = West, 128 = South, 192 = East (not checked)
                            </li>
                            <li><b>Island</b> is 0, 1 or 2.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Girlfriend spawn</h2>
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
                                <td className="float" colSpan={4}>X</td>
                                <td className="float" colSpan={4}>Y</td>
                                <td className="float" colSpan={4}>Z</td>
                                <td className="float" colSpan={4}>?</td>
                                <td className="float" colSpan={4}>Heading</td>
                                <td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li><b>?</b> is 1500 in a savegame of mine. It is often zero.</li>
                            <li>The two girlfriend structs can be filled with all zeros.</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Block08;