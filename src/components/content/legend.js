import React, {Component} from 'react';

class Legend extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <table>
                        <tbody><tr><td className="header center">Type</td><td className="header">Notes</td></tr>
                        <tr><td className="int">Integer</td><td /></tr>
                        <tr><td className="float">Float</td><td /></tr>
                        <tr><td className="bool">Boolean</td><td /></tr>
                        <tr><td className="string">String</td><td>Null-terminated unless otherwise specified</td></tr>
                        <tr><td className="struct">Struct</td><td>The size of this item in a table might be different than the real size</td></tr>
                        <tr><td className="unknown">Unknown meaning</td><td /></tr>
                        </tbody></table>
                </div>

            </div>
        );
    }
}

export default Legend;