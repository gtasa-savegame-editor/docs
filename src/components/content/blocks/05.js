import React, {Component} from 'react';

class Block05
    extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="section">
                        <p>
                            The meaning of the data in this block is unknown, but I know the format.
                        </p>
                        <table>
                            <tbody><tr>
                                <td className="noborder">
                                </td><td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                                <td className="postop">4</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                                <td className="postop">.</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                                <td className="postop">.</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                                <td className="postop">.</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                                <td className="postop">.</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                                <td className="postop">.</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                                <td className="postop">.</td><td className="postop">.</td><td className="postop">.</td><td className="postop">.</td>
                            </tr>
                            <tr>
                                <td className="posleft">0000</td>
                                <td className="int" colSpan={4}>Count</td>
                                <td className="struct" colSpan={28}>Count objects</td>
                            </tr>
                            </tbody></table>
                    </div>
                    <div className="section">
                        <h2>Object</h2>
                        <p>
                            Maybe the floats represent X, Y and Z coordinates.
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
                                <td className="float" colSpan={4} /><td className="float" colSpan={4}>
                            </td><td className="float" colSpan={4} /><td className="float" colSpan={4}>
                            </td><td className="float" colSpan={4} /><td className="float" colSpan={4}>
                            </td><td className="bool" /><td className="bool">
                            </td><td className="unknown">00</td><td className="unknown">00</td>
                                <td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                    </div>
                </div>

            </div>
        );
    }
}

export default Block05;