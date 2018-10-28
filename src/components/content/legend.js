import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Legend extends Component {
  render() {
    return (
      <div
        className="legend"
        style={{ display: this.props.visible ? 'block' : 'none' }}
      >
        <table>
          <tbody>
            <tr>
              <td className="header center">Type</td>
              <td className="header">Notes</td>
              <td
                onClick={this.props.closeLegend}
                style={{ cursor: 'pointer' }}
              >
                x
              </td>
            </tr>
            <tr>
              <td className="int">Integer</td>
              <td />
            </tr>
            <tr>
              <td className="float">Float</td>
              <td />
            </tr>
            <tr>
              <td className="bool">Boolean</td>
              <td />
            </tr>
            <tr>
              <td className="string">String</td>
              <td>Null-terminated unless otherwise specified</td>
            </tr>
            <tr>
              <td className="struct">Struct</td>
              <td>
                The size of this item in a table might be different than the
                real size
              </td>
            </tr>
            <tr>
              <td className="unknown">Unknown meaning</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Legend.propTypes = {
  closeLegend: PropTypes.func.required,
  visible: PropTypes.bool.required
};

export default Legend;
