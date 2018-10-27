import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <ul id="toc">
                    <li><NavLink activeClassName={"active"} exact={true} to={"/"}>overview</NavLink><p/></li>
                    <li><NavLink activeClassName={"active"} to={"/block00"}>block 00</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block01"}>block 01</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block02"}>block 02</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block03"}>block 03</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block04"}>block 04</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block05"}>block 05</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block06"}>block 06</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block08"}>block 08</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block09"}>block 09</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block10"}>block 10</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block11"}>block 11</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block12"}>block 12</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block15"}>block 15</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block16"}>block 16</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block17"}>block 17</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block18"}>block 18</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block19"}>block 19</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block20"}>block 20</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block21"}>block 21</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block22"}>block 22</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block23"}>block 23</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block24"}>block 24</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block25"}>block 25</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block26"}>block 26</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block27"}>block 27</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/block30"}>block 30</NavLink><p/></li>
                    <li><NavLink activeClassName={"active"} to={"/threads"}>threads</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/weapons"}>weapons</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/pickups"}>pickups</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/sprites"}>sprites</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/vcolors"}>vehicle colors</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/vtypes"}>vehicle types</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/vmods"}>vehicle mods</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/locations"}>locations</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/savehouses"}>savehouses</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/map"}>map</NavLink></li>
                    <li><NavLink activeClassName={"active"} to={"/legend"}>legend</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;