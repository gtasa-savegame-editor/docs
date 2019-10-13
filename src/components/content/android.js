import React, { Component } from 'react';

class Android extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1>Android Savegames</h1>
          <p>
            GTA:SA for Android has a savegame folder at{' '}
            <code>
              &lt;internal-storage&gt;/Android/data/com.rockstargames.gtasa*/files
            </code>{' '}
            where <code>*</code> seems to be a i18n handle.
            <br />
            This folder usually contains:
          </p>
          <ul>
            <li>
              <dl>
                <dt>CINFO.BIN</dt>
                <dd>Contains a lot of binary stuff as the name suggests.</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>gta_sa.set</dt>
                <dd>Contains binary data, probably game settings.</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>GTASAsf*.b</dt>
                <dd>
                  Savegame files (1-10), 9 & 10 seem to be cloud synced because
                  they are present with a valid size even when they were never
                  used.
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>gtasatelem.set</dt>
                <dd>
                  Starts with{' '}
                  <code>
                    telemv001, contains binary data along the String{' '}
                    <code>Usage</code>. Seems like analytics.
                  </code>
                </dd>
              </dl>
            </li>
          </ul>
          <h2>Savegame Layout (and differences to the PC Version)</h2>
          <p>
            The savegame layout seems to differ to the PC version in some ways.
            <ul>
              <li>
                Only 31 occurrences of <code>BLOCK</code> instead of 34
              </li>
              <li>Size of 195000 bytes</li>
              <li>
                Id: <code>0x53AD8157</code>
              </li>
            </ul>
            <h3>Block 00</h3>
            <p>
              Block 00 contains something that fits the version (from position
              0/0 to 0/4) but the title seems to contain level ids instead of
              the savegame title (The ingame title being "Ryder" while the value
              saved in the file is <code>INTRO_2</code>).
              <br />
              Additionally, there is also the filename of the savefile in block
              00 (at position 168/10). The Android block 00 is ~116 bytes bigger
              than the PC version.
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default Android;
