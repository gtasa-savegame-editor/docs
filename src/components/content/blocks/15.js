import React, {Component} from 'react';

class Block15
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
                            <td className="postop">0</td><td className="postop">1</td><td className="postop">2</td><td className="postop">3</td>
                            <td className="postop">4</td><td className="postop">5</td><td className="postop">6</td><td className="postop">7</td>
                            <td className="postop">8</td><td className="postop">9</td><td className="postop">A</td><td className="postop">B</td>
                            <td className="postop">C</td><td className="postop">D</td><td className="postop">E</td><td className="postop">F</td>
                        </tr>
                        <tr>
                            <td className="posleft">0000</td>
                            <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td><td className="int" colSpan={4}>Money</td>
                            <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td><td className="int" colSpan={4}>Counted $</td>
                            <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td></tr>
                        <tr>
                            <td className="posleft">0020</td>
                            <td className="bool">IR</td><td className="bool">FR</td><td className="bool">Fi</td><td className="bool">MH</td>
                            <td className="bool">MA</td><td className="bool">FB</td><td className="bool">FW</td><td className="bool">Dr</td>
                            <td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                        </td><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td /><td>
                        </td><td /><td /><td /><td /><td /><td /><td /><td>
                        </td></tr>
                        </tbody></table>
                    <ul>
                        <li><b>IR</b> = Infinite run</li>
                        <li><b>FR</b> = Fast reload</li>
                        <li><b>Fi</b> = Fireproof</li>
                        <li><b>MH</b> = Max health</li>
                        <li><b>MA</b> = Max armor</li>
                        <li><b>FB</b> = Free busted once</li>
                        <li><b>FW</b> = Free wasted once</li>
                        <li><b>Dr</b> = Enable driveby</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Block15;