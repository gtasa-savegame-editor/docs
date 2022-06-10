import * as React from 'react';
import {FunctionComponent} from 'react';
import {Link, NavLink} from "react-router-dom";

type Props = {
    legendOpen: boolean;
    toggleLegend: () => void;
}

const nav: FunctionComponent<Props> = ({legendOpen, toggleLegend}) => {
    return (
        <div>
            <ul id="toc">
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/'}>
                        overview
                    </NavLink>
                    <p/>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/00'}>
                        block 00
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/01'}>
                        block 01
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/02'}>
                        block 02
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/03'}>
                        block 03
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/04'}>
                        block 04
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/05'}>
                        block 05
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/06'}>
                        block 06
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/08'}>
                        block 08
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/09'}>
                        block 09
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/10'}>
                        block 10
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/11'}>
                        block 11
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/12'}>
                        block 12
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/15'}>
                        block 15
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/16'}>
                        block 16
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/17'}>
                        block 17
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/18'}>
                        block 18
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/19'}>
                        block 19
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/20'}>
                        block 20
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/21'}>
                        block 21
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/22'}>
                        block 22
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/23'}>
                        block 23
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/24'}>
                        block 24
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/25'}>
                        block 25
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/26'}>
                        block 26
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/27'}>
                        block 27
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/block/30'}>
                        block 30
                    </NavLink>
                    <p/>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/threads'}>
                        threads
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/weapons'}>
                        weapons
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/pickups'}>
                        pickups
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/sprites'}>
                        sprites
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/vcolors'}>
                        vehicle colors
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/vtypes'}>
                        vehicle types
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/vmods'}>
                        vehicle mods
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/garages'}>
                        garages
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/locations'}>
                        locations
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/savehouses'}>
                        savehouses
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'active' : undefined} to={'/map'}>
                        map
                    </NavLink>
                </li>
                <li>
                    <Link
                        onClick={toggleLegend}
                        className={legendOpen ? 'open' : ''}
                        to={'#'}>
                        legend
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default nav;
