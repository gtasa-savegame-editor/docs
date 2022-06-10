import * as React from 'react';
import { FunctionComponent } from 'react';

type Props = {
  visible: boolean;
  closeLegend: () => void;
}

const Legend: FunctionComponent<Props> = ({visible, closeLegend}) => {
  return (
      <div
          className="legend"
          style={{display: visible ? 'block' : 'none'}}>
        <table>
          <tbody>
          <tr>
            <th className="header center">Type</th>
            <th className="header center">Notes</th>
            <td onClick={closeLegend}
                style={{cursor: 'pointer'}}>x</td>
          </tr>
          <tr>
            <td className="int">Integer</td>
            <td/>
          </tr>
          <tr>
            <td className="float">Float</td>
            <td/>
          </tr>
          <tr>
            <td className="bool">Boolean</td>
            <td/>
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
            <td/>
          </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Legend;
