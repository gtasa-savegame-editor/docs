import React, {Component} from 'react';

class Block04
    extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <table>
                        <tbody><tr>
                            <td className="noborder">
                            </td><td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                            <td className="postop">4</td><td className="postop">5</td><td className="postop">6</td><td className="postop">7</td>
                            <td className="postop">8</td><td className="postop">9</td><td className="postop">A</td><td className="postop">B</td>
                            <td className="postop">C</td><td className="postop">D</td><td className="postop">E</td><td className="postop">F</td>
                        </tr>
                        <tr>
                            <td className="posleft">0000</td>
                            <td className="unknown">00</td><td className="unknown">00</td><td className="unknown">00</td><td className="unknown">00</td>
                            <td className="bool">W</td><td className="bool">B</td><td className="unknown">00</td><td className="unknown">00</td>
                            <td className="unknown">00</td><td className="unknown">00</td><td className="unknown">00</td>
                            <td /><td /><td /><td /><td>
                        </td></tr>
                        </tbody></table>
                    <ul>
                        <li><b>W</b> = lose stuff after wasted</li>
                        <li><b>B</b> = lose stuff after busted</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Block04;