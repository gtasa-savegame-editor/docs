import React, {Component} from 'react';

class Block10
    extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="section">
                        There are 378 different zones.<br />
                        Because the zone <b>MONINT</b> consists of two rectangles, there are 379 instead of 378 structs A.<br />
                        There are also two lines for MONINT in <b>info.zon</b>.
                    </div>
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
                            </td><td className="unknown" /><td className="unknown" /><td className="unknown" /><td className="unknown">
                            </td><td className="unknown" /><td className="unknown">
                            </td><td className="struct" colSpan={22}>379 structs A</td>
                            </tr>
                            <tr>
                                <td className="posleft">.</td>
                                <td className="struct" colSpan={32}>378 structs B</td>
                            </tr>
                            <tr>
                                <td className="posleft">.</td>
                                <td className="struct" colSpan={32}>7 structs C</td>
                            </tr>
                            <tr>
                                <td className="posleft">.</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                            </tr>
                            <tr>
                                <td className="posleft">.</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                            </tr>
                            <tr>
                                <td className="posleft">.</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                            </tr>
                            <tr>
                                <td className="posleft">.</td>
                                <td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td><td className="bool">Z</td>
                                <td className="int" colSpan={4}>Zones</td>
                                <td /><td /><td /><td /><td /><td /><td /><td>
                            </td><td /><td /><td /><td /><td /><td /><td /><td>
                            </td><td /><td /><td /><td /><td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li>
                                <b>Z</b> is a zone. It is true when it is discovered.<br />
                                The first zone is at the north west, the second zone is below it.
                            </li>
                            <li><b>Zones</b> is the number of zones discovered.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Struct B</h2>
                        <p>
                            Struct B contains information about an area.<br />
                            The structs B start at <b>2F6A</b>.
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
                                <td className="int">G0</td><td className="int">G1</td><td className="int">G2</td><td className="int">G3</td>
                                <td className="int">G4</td><td className="int">G5</td><td className="int">G6</td><td className="int">G7</td>
                                <td className="int">G8</td><td className="int">G9</td><td className="int">D</td>
                                <td className="int" colSpan={4}>Color</td>
                                <td className="int">Po</td>
                                <td className="unknown">
                                </td><td /><td /><td /><td /><td /><td /><td /><td>
                            </td><td /><td /><td /><td /><td /><td /><td>
                            </td></tr>
                            </tbody></table>
                        <ul>
                            <li>
                                The <b>G</b>s in the table indicate the gang density of a gang.<br />
                                It is usually between 0 and 40, but higher values are possible.<br />
                                <table>
                                    <tbody><tr><td className="header center">Gang</td><td className="header">Description</td><td className="header">Color</td></tr>
                                    <tr><td className="center">0</td><td>Ballas</td><td><span style={{backgroundColor: '#C800C8'}}>C800C8</span></td></tr>
                                    <tr><td className="center">1</td><td>Grove Street</td><td><span style={{backgroundColor: '#46C800'}}>46C800</span></td></tr>
                                    <tr><td className="center">2</td><td>Los Santos Vagos</td><td><span style={{backgroundColor: '#FFC800'}}>FFC800</span></td></tr>
                                    <tr><td className="center">3</td><td>San Fierro Rifa</td><td /></tr>
                                    <tr><td className="center">4</td><td>Da Nang Boys</td><td /></tr>
                                    <tr><td className="center">5</td><td>Italian Mafia</td><td /></tr>
                                    <tr><td className="center">6</td><td>Triads</td><td /></tr>
                                    <tr><td className="center">7</td><td>Varrio Los Aztecas</td><td /></tr>
                                    <tr><td className="center">8</td><td>(unused)</td><td /></tr>
                                    <tr><td className="center">9</td><td>(unused)</td><td /></tr>
                                    </tbody></table>
                            </li>
                            <li>
                                <b>D</b> is the dealer density.
                            </li>
                            <li>
                                <b>Po</b> is the popcycle group, indicating what peds walk around and what vehicles drive around:<br />
                                <table>
                                    <tbody><tr><td className="header center">Byte</td><td className="header">Description</td></tr>
                                    <tr><td className="center">00</td><td>Business</td></tr>
                                    <tr><td className="center">01</td><td>Desert</td></tr>
                                    <tr><td className="center">02</td><td>Entertainment</td></tr>
                                    <tr><td className="center">03</td><td>Countryside</td></tr>
                                    <tr><td className="center">04</td><td>Residential rich</td></tr>
                                    <tr><td className="center">05</td><td>Residential average</td></tr>
                                    <tr><td className="center">06</td><td>Residential poor</td></tr>
                                    <tr><td className="center">07</td><td>Gangland</td></tr>
                                    <tr><td className="center">08</td><td>Beach</td></tr>
                                    <tr><td className="center">09</td><td>Shopping</td></tr>
                                    <tr><td className="center">0A</td><td>Park</td></tr>
                                    <tr><td className="center">0B</td><td>Industry</td></tr>
                                    <tr><td className="center">0C</td><td>Entertainment busy</td></tr>
                                    <tr><td className="center">0D</td><td>Shopping busy</td></tr>
                                    <tr><td className="center">0E</td><td>Shopping posh</td></tr>
                                    <tr><td className="center">0F</td><td>Residential rich secluded</td></tr>
                                    <tr><td className="center">10</td><td>Airport</td></tr>
                                    <tr><td className="center">11</td><td>Golf club</td></tr>
                                    <tr><td className="center">12</td><td>Out of town factory</td></tr>
                                    <tr><td className="center">13</td><td>Airport runway</td></tr>
                                    </tbody></table>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Block10;