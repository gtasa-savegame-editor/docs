import React, { Component } from 'react';

class Android extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1>Android Savegames</h1>
          <p>
            GTA:SA for Android has a savegame folder at{' '}
            <code>&lt;internal-storage&gt;/Android/data/com.rockstargames.gtasa*/files</code> where <code>*</code> seems
            to be a i18n handle.
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
                  Savegame files (1-10), 9 & 10 seem to be cloud synced because they are present with a valid size even
                  when they were never used.
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>gtasatelem.set</dt>
                <dd>
                  Starts with{' '}
                  <code>
                    telemv001, contains binary data along the String <code>Usage</code>. Seems like analytics.
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
              Block 00 contains something that fits the version (from position 0/0 to 0/4) but the title seems to
              contain level ids instead of the savegame title (The ingame title being "Ryder" while the value saved in
              the file is <code>INTRO_2</code>).
              <br />
              Additionally, there is also the filename of the savefile in block 00 (at position 168/10). The Android
              block 00 is ~116 bytes bigger than the PC version.
            </p>
            <h3>Block 01</h3>
            <p>
              Block 01 also seems to be different to the PC version. It contains some keywords like <code>BEARD</code>,{' '}
              <code>CORNROW</code>, etc. that are not present in the PC savegame. Additionally, the mission names and
              the positions are different (for example <code>INTRO2</code> in the Android save opposed to{' '}
              <code>INT2</code> in the PC save. The mission names also seem to not match the savegame title in Block 00.
              There are also multiple occurrences of passages that look like charsets:
            </p>
            {/* prettier-ignore */}
            <div style={{maxWidth: '100%', overflowX: 'scroll'}}>
                            <pre><code style={{color:"#000000"}}>017068   31 00 02 00 32 00 02 00 33 00 02 00 34 00 02 00 35 00 02 00 36 00 02 00 37 00 02 00 38 00 02 00 39 00 02 00 3A 00 02 00 3B 00   1...2...3...4...5...6...7...8...9...:...;.<br/>
017110   02 00 3C 00 02 00 3D 00 02 00 3E 00 02 00 3F 00 02 00 40 00 02 00 41 00 02 00 42 00 02 00 43 00 02 00 44 00 02 00 45 00 02 00   ..&lt;...=...&gt;...?...@...A...B...C...D...E...<br/>
                017152   46 00 02 00 47 00 02 00 48 00 02 00 49 00 02 00 4A 00 02 00 4B 00 02 00 4C 00 02 00 4D 00 02 00 4E 00 02 00 4F 00 02 00 50 00   F...G...H...I...J...K...L...M...N...O...P.<br/>
                017194   02 00 51 00 02 00 52 00 02 00 53 00 02 00 54 00 02 00 55 00 02 00 56 00 02 00 57 00 02 00 58 00 02 00 59 00 02 00 5A 00 02 00   ..Q...R...S...T...U...V...W...X...Y...Z...<br/>
                017236   5B 00 02 00 5C 00 02 00 5D 00 02 00 5E 00 02 00 5F 00 02 00 60 00 02 00 61 00 02 00 62 00 02 00 63 00 02 00 64 00 02 00 65 00   [...\...]...^..._...`...a...b...c...d...e.<br/>
                017278   02 00 66 00 02 00 67 00 02 00 68 00 02 00 69 00 02 00 6A 00 02 00 6B 00 02 00 6C 00 02 00 6D 00 02 00 6E 00 02 00 6F 00 02 00   ..f...g...h...i...j...k...l...m...n...o...<br/>
                017320   70 00 02 00 71 00 02 00 72 00 02 00 73 00 02 00 74 00 02 00 75 00 02 00 76 00 02 00 77 00 02 00 78 00 02 00 79 00 02 00 7A 00   p...q...r...s...t...u...v...w...x...y...z.<br/>
                017362   02 00 7B 00 02 00 7C 00 02 00 7D 00 02 00 7E 00 02                                                                              ..{'{...|...}'}...~..<br/>
</code></pre>
            </div>
            <span style={{ fontSize: '10px' }}>
              Generated by <a href="http://www.wxHexEditor.org/">wxHexEditor</a>
            </span>
          </p>
          <h3>Block 02</h3>
          <p>Block 02 seems similar to the PC version, both contain no human readable text.</p>
        </div>
      </div>
    );
  }
}

export default Android;
