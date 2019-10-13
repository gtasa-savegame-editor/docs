import React, { Component } from 'react';
import icon05 from '../../icon/05.gif';
import icon08 from '../../icon/08.gif';
import icon0C from '../../icon/0C.gif';
import icon0D from '../../icon/0D.gif';
import icon0F from '../../icon/0F.gif';
import icon10 from '../../icon/10.gif';
import icon17 from '../../icon/17.gif';
import icon18 from '../../icon/18.gif';
import icon19 from '../../icon/19.gif';
import icon1C from '../../icon/1C.gif';
import icon22 from '../../icon/22.gif';
import icon24 from '../../icon/24.gif';
import icon25 from '../../icon/25.gif';
import icon26 from '../../icon/26.gif';
import icon28 from '../../icon/28.gif';
import icon2A from '../../icon/2A.gif';
import icon2B from '../../icon/2B.gif';
import icon2C from '../../icon/2C.gif';
import icon2E from '../../icon/2E.gif';
import icon2F from '../../icon/2F.gif';
import icon34 from '../../icon/34.gif';
import { Link } from 'react-router-dom';
class Block01 extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="section">
            <h2>Missions</h2>
            <p>
              The bytes in the following table indicate what mission you are
              going to do.
              <br />
              After you played the mission, the byte will be increased by one.
            </p>
            <table>
              <tbody>
                <tr>
                  <th className="header">Position</th>
                  <th className="header">Byte</th>
                  <th className="header">Mission</th>
                  <th className="header">Thread</th>
                  <th className="header center">Target</th>
                  <th className="header center">Location XYZ</th>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    0704
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Big Smoke
                  </td>
                  <td rowSpan={2}>int</td>
                  <td className="center" rowSpan={2}>
                    06E0
                  </td>
                  <td>00F41B45 5AECD2C4 EA3E5841</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon22}
                      alt="Mission Icon: Ryder"
                      className="icon"
                    />{' '}
                    Ryder
                  </td>
                  <td>CDB81945 00F8D2C4 C3F54841</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={9}>
                    0714
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Tagging up Turf
                  </td>
                  <td rowSpan={9}>sweet</td>
                  <td className="center" rowSpan={9}>
                    06D0
                  </td>
                  <td rowSpan={7}>1F311D45 5C3FD1C4 295C4B41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Cleaning The Hood
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Drive-thru
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Nines and AK's
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Drive-By
                  </td>
                </tr>
                <tr>
                  <td className="center">05</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Sweet's Girl
                  </td>
                </tr>
                <tr>
                  <td className="center">06</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Cesar Vialpando
                  </td>
                </tr>
                <tr>
                  <td className="center">07</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Doberman
                  </td>
                  <td>06A8AA44 D703A0C4 1AC04841</td>
                </tr>
                <tr>
                  <td className="center">08</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Los Sepulcros
                  </td>
                  <td>1F311D45 5C3FD1C4 295C4B41</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={3}>
                    0718
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon22}
                      alt="Mission Icon: Ryder"
                      className="icon"
                    />{' '}
                    Home Invasion
                  </td>
                  <td rowSpan={3}>ryder</td>
                  <td className="center" rowSpan={3}>
                    06D4
                  </td>
                  <td rowSpan={3}>CDB81945 00F8D2C4 C3F54841</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon22}
                      alt="Mission Icon: Ryder"
                      className="icon"
                    />{' '}
                    Catalyst
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon22}
                      alt="Mission Icon: Ryder"
                      className="icon"
                    />{' '}
                    Robbing Uncle Sam
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={4}>
                    071C
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon08}
                      alt="Mission Icon: Big Smoke"
                      className="icon"
                    />{' '}
                    OG Loc
                  </td>
                  <td rowSpan={4}>smoke</td>
                  <td className="center" rowSpan={4}>
                    06CC
                  </td>
                  <td rowSpan={4}>EC6D0145 52E0D4C4 CDCC4841</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon08}
                      alt="Mission Icon: Big Smoke"
                      className="icon"
                    />{' '}
                    Running Dog
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon08}
                      alt="Mission Icon: Big Smoke"
                      className="icon"
                    />{' '}
                    Wrong Side of the Tracks
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon08}
                      alt="Mission Icon: Big Smoke"
                      className="icon"
                    />{' '}
                    Just Business
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={5}>
                    0720
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon1C}
                      alt="Mission Icon: OG Loc"
                      className="icon"
                    />{' '}
                    Life's a Beach
                  </td>
                  <td rowSpan={5}>strap</td>
                  <td className="center" rowSpan={5}>
                    06D8
                  </td>
                  <td rowSpan={4}>8FA24544 1F7DCBC4 713D4641</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon1C}
                      alt="Mission Icon: OG Loc"
                      className="icon"
                    />{' '}
                    Madd Dogg's Rhymes
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon1C}
                      alt="Mission Icon: OG Loc"
                      className="icon"
                    />{' '}
                    Management Issues
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon1C}
                      alt="Mission Icon: OG Loc"
                      className="icon"
                    />{' '}
                    House Party (prepare for party)
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon1C}
                      alt="Mission Icon: OG Loc"
                      className="icon"
                    />{' '}
                    House Party
                  </td>
                  <td>C3691B45 712DCEC4 14AE4741</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    0724
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon10}
                      alt="Mission Icon: C.R.A.S.H."
                      className="icon"
                    />{' '}
                    Burning Desire
                  </td>
                  <td rowSpan={2}>crash</td>
                  <td className="center" rowSpan={2}>
                    06DC
                  </td>
                  <td rowSpan={2}>335B8244 D753A7C4 CDCC4841</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon10}
                      alt="Mission Icon: C.R.A.S.H."
                      className="icon"
                    />{' '}
                    Gray Imports
                  </td>
                </tr>
                <tr>
                  <td className="int">0728</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    High Stakes, Low-rider
                  </td>
                  <td>cesar</td>
                  <td className="center">06E4</td>
                  <td>8F22E144 B85E04C5 C3F54841</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    072C
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Reuniting the Families
                  </td>
                  <td rowSpan={2}>la1fin</td>
                  <td className="center" rowSpan={2}>
                    06D0
                  </td>
                  <td rowSpan={2}>1F311D45 5C3FD1C4 295C4B41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    The Green Sabre
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    07B0
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon28}
                      alt="Mission Icon: The Truth"
                      className="icon"
                    />{' '}
                    Body Harvest
                  </td>
                  <td rowSpan={2}>tru</td>
                  <td className="center" rowSpan={2}>
                    079C
                  </td>
                  <td>EA6D09C5 3D530DC5 9C22ED41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon28}
                      alt="Mission Icon: The Truth"
                      className="icon"
                    />{' '}
                    Are you going to San Fierro?
                  </td>
                  <td>C6A066C4 A5ECD6C4 FE239942</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    07B4
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    Wu Zi Mu
                  </td>
                  <td rowSpan={2}>bcesar</td>
                  <td className="center" rowSpan={2}>
                    0798
                  </td>
                  <td>F818C244 60361D42 F027B941</td>
                </tr>
                <tr>
                  <td className="center">05</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    Farewell, my love...
                  </td>
                  <td>E17B00C4 62503CC3 78EB9A42</td>
                </tr>
                <tr>
                  <td className="int">07B8</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon10}
                      alt="Mission Icon: C.R.A.S.H."
                      className="icon"
                    />{' '}
                    Badlands
                  </td>
                  <td>bcrash</td>
                  <td className="center">0794</td>
                  <td>E16AFFC4 D7DF1DC5 C3F5EC41</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    0878
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Wear Flowers in your Hair
                  </td>
                  <td rowSpan={2}>garage</td>
                  <td className="center" rowSpan={2}>
                    0858
                  </td>
                  <td rowSpan={2}>DCCCFDC4 F1D31443 ECAFDE41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Deconstruction
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={3}>
                    087C
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon2F}
                      alt="Mission Icon: Zero"
                      className="icon"
                    />{' '}
                    Air Raid
                  </td>
                  <td rowSpan={3}>zero</td>
                  <td className="center" rowSpan={3}>
                    0840
                  </td>
                  <td>EC390CC5 33330543 33330B42</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon2F}
                      alt="Mission Icon: Zero"
                      className="icon"
                    />{' '}
                    Supply Lines...
                  </td>
                  <td rowSpan={2}>9C5A0CC5 8FE30043 FD470942</td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon2F}
                      alt="Mission Icon: Zero"
                      className="icon"
                    />{' '}
                    New Model Army
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={5}>
                    0880
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon2E}
                      alt="Mission Icon: Wu Zi Mu"
                      className="icon"
                    />{' '}
                    Mountain Cloud Boys
                  </td>
                  <td rowSpan={5}>wuzi</td>
                  <td className="center" rowSpan={5}>
                    0834
                  </td>
                  <td rowSpan={5}>54A306C5 CE542144 0A684D42</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon2E}
                      alt="Mission Icon: Wu Zi Mu"
                      className="icon"
                    />{' '}
                    Ran Fa Li
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon2E}
                      alt="Mission Icon: Wu Zi Mu"
                      className="icon"
                    />{' '}
                    Lure
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon2E}
                      alt="Mission Icon: Wu Zi Mu"
                      className="icon"
                    />{' '}
                    Amphibious Assault
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon2E}
                      alt="Mission Icon: Wu Zi Mu"
                      className="icon"
                    />{' '}
                    The Da Nang Thang
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={4}>
                    0884
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    Zeroing In
                  </td>
                  <td rowSpan={4}>steal</td>
                  <td className="center" rowSpan={4}>
                    0838
                  </td>
                  <td rowSpan={4}>5CE8FDC4 B13F3343 ECAFDE41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    Test Drive
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    Customs Fast Track
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon0D}
                      alt="Mission Icon: Wang Cars"
                      className="icon"
                    />{' '}
                    Puncture Wounds
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={10}>
                    0888
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Photo Opportunity
                  </td>
                  <td rowSpan={10}>synd</td>
                  <td className="center" rowSpan={10}>
                    0858
                  </td>
                  <td rowSpan={2}>DCCCFDC4 F1D31443 ECAFDE41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Jizzy (only a cutscene)
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon17}
                      alt="Mission Icon: Loco Syndicate"
                      className="icon"
                    />{' '}
                    Jizzy
                  </td>
                  <td rowSpan={3}>F4F723C5 20B5AF44 4F40C340</td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon17}
                      alt="Mission Icon: Loco Syndicate"
                      className="icon"
                    />{' '}
                    T-Bone Mendez
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon17}
                      alt="Mission Icon: Loco Syndicate"
                      className="icon"
                    />{' '}
                    Mike Toreno
                  </td>
                </tr>
                <tr>
                  <td className="center">05</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Outrider
                  </td>
                  <td rowSpan={2}>DCCCFDC4 F1D31443 ECAFDE41</td>
                </tr>
                <tr>
                  <td className="center">06</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Ice Cold Killa
                  </td>
                </tr>
                <tr>
                  <td className="center">07</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Pier 69
                  </td>
                  <td>9AA1D6C4 1F1DA044 295CC740</td>
                </tr>
                <tr>
                  <td className="center">08</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Toreno's Last Flight
                  </td>
                  <td rowSpan={4}>DCCCFDC4 F1D31443 ECAFDE41</td>
                </tr>
                <tr>
                  <td className="center">09</td>
                  <td>
                    <img
                      src={icon2B}
                      alt="Mission Icon: Triads"
                      className="icon"
                    />{' '}
                    Yay Ka-Boom-Boom
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    088C
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    555 WE TIP
                  </td>
                  <td rowSpan={2}>scrash</td>
                  <td className="center" rowSpan={2}>
                    0858
                  </td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon10}
                      alt="Mission Icon: C.R.A.S.H."
                      className="icon"
                    />{' '}
                    Snail Trail
                  </td>
                </tr>
                <tr>
                  <td className="int">-</td>
                  <td className="center">-</td>
                  <td>
                    <img
                      src={icon05}
                      alt="Mission Icon: Verdant Meadows Aircraft Graveyard"
                      className="icon"
                    />{' '}
                    (buy the airfield)
                  </td>
                  <td>buy3</td>
                  <td className="center">0918</td>
                  <td>66C6CF43 1F591E45 A4709941</td>
                </tr>
                <tr>
                  <td className="int">-</td>
                  <td className="center">-</td>
                  <td>
                    <img
                      src={icon24}
                      alt="Mission Icon: Flight School"
                      className="icon"
                    />{' '}
                    Learning to Fly
                  </td>
                  <td>psch</td>
                  <td className="center">0944</td>
                  <td>66C6CF43 1F591E45 A4709941</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={9}>
                    0948
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon25}
                      alt="Mission Icon: Onbekende"
                      className="icon"
                    />{' '}
                    Monster
                  </td>
                  <td rowSpan={9}>desert</td>
                  <td className="center" rowSpan={9}>
                    0914
                  </td>
                  <td rowSpan={4}>CC4D2BC4 06CE6644 19733241</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon25}
                      alt="Mission Icon: Onbekende"
                      className="icon"
                    />{' '}
                    Highjack
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon2A}
                      alt="Mission Icon: Mike Toreno"
                      className="icon"
                    />{' '}
                    Interdiction
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon2A}
                      alt="Mission Icon: Mike Toreno"
                      className="icon"
                    />{' '}
                    Verdant Meadows
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon24}
                      alt="Mission Icon: Flight School"
                      className="icon"
                    />{' '}
                    (buy the airfield) / Learning to Fly
                  </td>
                  <td />
                </tr>
                <tr>
                  <td className="center">05</td>
                  <td>
                    <img
                      src={icon05}
                      alt="Mission Icon: Verdant Meadows Aircraft Graveyard"
                      className="icon"
                    />{' '}
                    N.O.E.
                  </td>
                  <td rowSpan={4}>58B9A343 85211E45 D5E77C41</td>
                </tr>
                <tr>
                  <td className="center">06</td>
                  <td>
                    <img
                      src={icon05}
                      alt="Mission Icon: Verdant Meadows Aircraft Graveyard"
                      className="icon"
                    />{' '}
                    Stowaway
                  </td>
                </tr>
                <tr>
                  <td className="center">07</td>
                  <td>
                    <img
                      src={icon05}
                      alt="Mission Icon: Verdant Meadows Aircraft Graveyard"
                      className="icon"
                    />{' '}
                    Black Project
                  </td>
                </tr>
                <tr>
                  <td className="center">08</td>
                  <td>
                    <img
                      src={icon05}
                      alt="Mission Icon: Verdant Meadows Aircraft Graveyard"
                      className="icon"
                    />{' '}
                    Green Goo
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={9}>
                    0958
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon2C}
                      alt="Mission Icon: The Four Dragons Casino"
                      className="icon"
                    />{' '}
                    Fender Ketchup
                  </td>
                  <td rowSpan={9}>casino</td>
                  <td className="center" rowSpan={9}>
                    091C
                  </td>
                  <td rowSpan={3}>D04DF544 33AB7344 015E7844</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon2C}
                      alt="Mission Icon: The Four Dragons Casino"
                      className="icon"
                    />{' '}
                    Explosive Situation
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon2C}
                      alt="Mission Icon: The Four Dragons Casino"
                      className="icon"
                    />{' '}
                    You've had your Chips
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon2C}
                      alt="Mission Icon: The Four Dragons Casino"
                      className="icon"
                    />{' '}
                    Don Peyote
                  </td>
                  <td>4A53FD44 0FEF7B44 D2001D41</td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon19}
                      alt="Mission Icon: Caligula's Palace"
                      className="icon"
                    />{' '}
                    Intensive Care
                  </td>
                  <td rowSpan={2}>23EA0D45 2D73CC44 80D77B44</td>
                </tr>
                <tr>
                  <td className="center">05</td>
                  <td>
                    <img
                      src={icon19}
                      alt="Mission Icon: Caligula's Palace"
                      className="icon"
                    />{' '}
                    The Meat Business
                  </td>
                </tr>
                <tr>
                  <td className="center">06</td>
                  <td>
                    <img
                      src={icon2C}
                      alt="Mission Icon: The Four Dragons Casino"
                      className="icon"
                    />{' '}
                    Fish in a Barrel
                  </td>
                  <td>D04DF544 33AB7344 015E7844</td>
                </tr>
                <tr>
                  <td className="center">07</td>
                  <td>
                    <img
                      src={icon19}
                      alt="Mission Icon: Caligula's Palace"
                      className="icon"
                    />{' '}
                    Freefall
                  </td>
                  <td rowSpan={2}>23EA0D45 2D73CC44 80D77B44</td>
                </tr>
                <tr>
                  <td className="center">08</td>
                  <td>
                    <img
                      src={icon19}
                      alt="Mission Icon: Caligula's Palace"
                      className="icon"
                    />{' '}
                    Saint Mark's Bistro
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    095C
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon10}
                      alt="Mission Icon: C.R.A.S.H."
                      className="icon"
                    />{' '}
                    Misappropriation
                  </td>
                  <td rowSpan={2}>vcrash</td>
                  <td className="center" rowSpan={2}>
                    0920
                  </td>
                  <td>D5D1C744 46BD2645 F31F1D41</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon10}
                      alt="Mission Icon: C.R.A.S.H."
                      className="icon"
                    />{' '}
                    High Noon
                  </td>
                  <td>3B61BDC3 C0BD0B45 17B72542</td>
                </tr>
                <tr>
                  <td className="int">0960</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon18}
                      alt="Mission Icon: Madd Dogg"
                      className="icon"
                    />{' '}
                    Madd Dogg
                  </td>
                  <td>doc</td>
                  <td className="center">0924</td>
                  <td>00A00245 0060B544 CDCC1C41</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={6}>
                    0964
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon34}
                      alt="Mission Icon: Bankroof"
                      className="icon"
                    />{' '}
                    Architectural Espionage
                  </td>
                  <td rowSpan={6}>heist</td>
                  <td className="center" rowSpan={6}>
                    0950
                  </td>
                  <td rowSpan={6}>C04CF544 CB9E8444 015E7844</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon34}
                      alt="Mission Icon: Bankroof"
                      className="icon"
                    />{' '}
                    Key to her Heart
                  </td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon34}
                      alt="Mission Icon: Bankroof"
                      className="icon"
                    />{' '}
                    Dam and Blast
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon34}
                      alt="Mission Icon: Bankroof"
                      className="icon"
                    />{' '}
                    Cop Wheels
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon34}
                      alt="Mission Icon: Bankroof"
                      className="icon"
                    />{' '}
                    Up, Up and Away!
                  </td>
                </tr>
                <tr>
                  <td className="center">05</td>
                  <td>
                    <img
                      src={icon34}
                      alt="Mission Icon: Bankroof"
                      className="icon"
                    />{' '}
                    Breaking the Bank at Caligula's
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={4}>
                    09CC
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon2C}
                      alt="Mission Icon: The Four Dragons Casino"
                      className="icon"
                    />{' '}
                    A Home In The Hills
                  </td>
                  <td rowSpan={4}>mansion</td>
                  <td className="center" rowSpan={4}>
                    091C
                  </td>
                  <td>D04DF5443 3AB7344 015E7844</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Vertical Bird
                  </td>
                  <td rowSpan={3}>37B99C44 9A5044C4 0710B642</td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Home Coming
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Cut Throat Business
                  </td>
                </tr>
                <tr>
                  <td className="int" rowSpan={2}>
                    09D0
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Beat Down on B Dup
                  </td>
                  <td rowSpan={2}>grove</td>
                  <td className="center" rowSpan={2}>
                    09C0
                  </td>
                  <td>6EF31B45 F4E0D2C4 FB3A4841</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Grove 4 Life
                  </td>
                  <td>1F311D45 5C3FD1C4 295C4B41</td>
                </tr>
                <tr>
                  <td className="int" rowSpan={5}>
                    09D8
                  </td>
                  <td className="center">00</td>
                  <td>
                    <img src={icon0F} alt="Mission Icon: CJ" className="icon" />{' '}
                    Riot
                  </td>
                  <td rowSpan={5}>riot</td>
                  <td className="center">09BC</td>
                  <td>37B99C44 9A5044C4 0710B642</td>
                </tr>
                <tr>
                  <td className="center">01</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    Los Desperados
                  </td>
                  <td className="center" rowSpan={4}>
                    06D0
                  </td>
                  <td rowSpan={4}>1F311D45 5C3FD1C4 295C4B41</td>
                </tr>
                <tr>
                  <td className="center">02</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    End Of The Line
                  </td>
                </tr>
                <tr>
                  <td className="center">03</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    End Of The Line (escape from the building)
                  </td>
                </tr>
                <tr>
                  <td className="center">04</td>
                  <td>
                    <img
                      src={icon26}
                      alt="Mission Icon: Sweet"
                      className="icon"
                    />{' '}
                    End Of The Line (follow Tenpenny)
                  </td>
                </tr>
                <tr>
                  <td className="int">0B2C</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0C}
                      alt="Mission Icon: Catalina"
                      className="icon"
                    />{' '}
                    Local Liquor Store
                  </td>
                  <td rowSpan={4}>cat</td>
                  <td className="center" rowSpan={4}>
                    0790
                  </td>
                  <td rowSpan={4}>7E155944 576CECC1 764F7942</td>
                </tr>
                <tr>
                  <td className="int">0B30</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0C}
                      alt="Mission Icon: Catalina"
                      className="icon"
                    />{' '}
                    Small Town Bank
                  </td>
                </tr>
                <tr>
                  <td className="int">0B34</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0C}
                      alt="Mission Icon: Catalina"
                      className="icon"
                    />{' '}
                    Tanker Commander
                  </td>
                </tr>
                <tr>
                  <td className="int">0B38</td>
                  <td className="center">00</td>
                  <td>
                    <img
                      src={icon0C}
                      alt="Mission Icon: Catalina"
                      className="icon"
                    />{' '}
                    Against All Odds
                  </td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                After the mission "Farewell, my love...", 07B4 goes to 0A.
              </li>
              <li>
                <b>Target</b> is the <b>address</b> of the blip link (see block
                9) to the blip on the radar.
                <br />
                This is for deleting the radar blib after the mission is
                completed.
              </li>
              <li>
                Some mission blocks have the same target value:
                <br />
                "Tagging up Turf", "Reuniting the Families", "Los Desperados"
                <br />
                "Wear Flowers in your Hair", "Photo Opportunity", "555 WE TIP"
                <br />
                "Fender Ketchup", "A Home In The Hills"
              </li>
              <li>
                The Catalina missions can be done in any order.
                <br />
                The first mission has location 14662A44 3C65EFC3 E63F7541 and
                has a question mark as symbol.
                <br />
                In 01.0104, the number of completed missions is saved.
                <br />
                This number also increases when completed the mission Wu Zi Mu.
              </li>
              <li>
                After the phone call that enables the Doberman mission, 150C is
                set to true.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Threads</h2>
            <table>
              <tbody>
                <tr>
                  <td className="int">B426</td>
                  <td>
                    The number of structs of 262 bytes that will follow.
                    <br />
                    These structs are the last bytes of this block.
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td className="noborder" />
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                  <td className="postop">0</td>
                  <td className="postop">1</td>
                  <td className="postop">2</td>
                  <td className="postop">3</td>
                  <td className="postop">4</td>
                  <td className="postop">5</td>
                  <td className="postop">6</td>
                  <td className="postop">7</td>
                  <td className="postop">8</td>
                  <td className="postop">9</td>
                  <td className="postop">A</td>
                  <td className="postop">B</td>
                  <td className="postop">C</td>
                  <td className="postop">D</td>
                  <td className="postop">E</td>
                  <td className="postop">F</td>
                </tr>
                <tr>
                  <td className="posleft">0000</td>
                  <td className="int">F</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="string" colSpan={8}>
                    Name
                  </td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">0020</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">0040</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">0060</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">0080</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">00A0</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">00C0</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown">01</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="int" colSpan={4}>
                    Activate time
                  </td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">00E0</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="int" colSpan={4}>
                    Code
                  </td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                </tr>
                <tr>
                  <td className="posleft">0100</td>
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td className="unknown" />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                The struct gets active on <b>Activate Time</b>. Make sure it is
                less than the global timer. 0 works fine.
              </li>
              <li>
                Look for the values of <b>F</b>, <b>Name</b> and <b>Code</b> in
                the <Link to={'/threads'}>thread table</Link>.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Schools</h2>
            <table>
              <tbody>
                <tr>
                  <th className="header">Position</th>
                  <th className="header center">School</th>
                  <th className="header">Exercise</th>
                  <th className="header center">Unit</th>
                  <th className="header right">Default</th>
                  <th className="header right">Target</th>
                  <th className="header">Number</th>
                </tr>
                <tr>
                  <td className="int">01B0</td>
                  <td rowSpan={12} className="type">
                    Driving
                  </td>
                  <td>The 360</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">1</td>
                </tr>
                <tr>
                  <td className="int">01A8</td>
                  <td>The 180</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">2</td>
                </tr>
                <tr>
                  <td className="int">018C</td>
                  <td>Whip and Terminate</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">3 / 4</td>
                </tr>
                <tr>
                  <td className="int">0184</td>
                  <td>Pop and Control</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">5</td>
                </tr>
                <tr>
                  <td className="int">017C</td>
                  <td>Burn and Lap</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">6 / 7</td>
                </tr>
                <tr>
                  <td className="int">01A0</td>
                  <td>Cone Coil</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">8 / 9</td>
                </tr>
                <tr>
                  <td className="int">0170</td>
                  <td>The '90'</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">10</td>
                </tr>
                <tr>
                  <td className="int">0198</td>
                  <td>Wheelie Weave</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">11</td>
                </tr>
                <tr>
                  <td className="int">0174</td>
                  <td>Spin and Go</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">12 / 13</td>
                </tr>
                <tr>
                  <td className="int">019C</td>
                  <td>P.I.T. Maneuver</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">14</td>
                </tr>
                <tr>
                  <td className="int">0194</td>
                  <td>Alley Oop</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">15</td>
                </tr>
                <tr>
                  <td className="int">0188</td>
                  <td>City Slicking</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">16</td>
                </tr>
                <tr>
                  <td className="int">1E5C</td>
                  <td rowSpan={10} className="type">
                    Flying
                  </td>
                  <td>Takeoff</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">1</td>
                </tr>
                <tr>
                  <td className="int">1E60</td>
                  <td>Land Plane</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">2</td>
                </tr>
                <tr>
                  <td className="int">1E64</td>
                  <td>Circle Airstrip</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">3 / 4</td>
                </tr>
                <tr>
                  <td className="int">1E68</td>
                  <td>Circle Airstrip and Land</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">5 / 6</td>
                </tr>
                <tr>
                  <td className="int">1E6C</td>
                  <td>Helicopter Takeoff</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">7</td>
                </tr>
                <tr>
                  <td className="int">1E70</td>
                  <td>Land Helicopter</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">8</td>
                </tr>
                <tr>
                  <td className="int">1E74</td>
                  <td>Destroy Targets</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">9</td>
                </tr>
                <tr>
                  <td className="int">1E78</td>
                  <td>Loop the Loop</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">10</td>
                </tr>
                <tr>
                  <td className="int">1E7C</td>
                  <td>Barrel Roll</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">11</td>
                </tr>
                <tr>
                  <td className="int">1E80</td>
                  <td>Parachute onto Target</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">12</td>
                </tr>
                <tr>
                  <td className="int">1EB0</td>
                  <td rowSpan={5} className="type">
                    Boat
                  </td>
                  <td>Basic Seamanship</td>
                  <td className="center">ms</td>
                  <td className="right">60000</td>
                  <td className="right">&lt; 12000</td>
                  <td className="right">1</td>
                </tr>
                <tr>
                  <td className="int">1EB4</td>
                  <td>Plot a Course</td>
                  <td className="center">ms</td>
                  <td className="right">80000</td>
                  <td className="right">&lt; 40000</td>
                  <td className="right">2</td>
                </tr>
                <tr>
                  <td className="int">1EB8</td>
                  <td>Fresh Slalom</td>
                  <td className="center">ms</td>
                  <td className="right">180000</td>
                  <td className="right">&lt; 120000</td>
                  <td className="right">3</td>
                </tr>
                <tr>
                  <td className="int">1EBC</td>
                  <td>Flying Fish</td>
                  <td className="center">m</td>
                  <td className="right">10</td>
                  <td className="right">&gt; 55</td>
                  <td className="right">4</td>
                </tr>
                <tr>
                  <td className="int">1EC0</td>
                  <td>Land, Sea and Air</td>
                  <td className="center">ms</td>
                  <td className="right">200000</td>
                  <td className="right">&lt; 180000</td>
                  <td className="right">5</td>
                </tr>
                <tr>
                  <td className="int">21DC</td>
                  <td rowSpan={6} className="type">
                    Bike
                  </td>
                  <td>The 360</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">1</td>
                </tr>
                <tr>
                  <td className="int">21E0</td>
                  <td>The 180</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">2</td>
                </tr>
                <tr>
                  <td className="int">21D4</td>
                  <td>The Wheelie</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">3</td>
                </tr>
                <tr>
                  <td className="int">21E4</td>
                  <td>Jump &amp; Stop</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">4</td>
                </tr>
                <tr>
                  <td className="int">21D8</td>
                  <td>The Stoppie</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">5</td>
                </tr>
                <tr>
                  <td className="int">21E8</td>
                  <td>Jump &amp; Stoppie</td>
                  <td className="center">%</td>
                  <td className="right">0</td>
                  <td className="right">&gt; 69</td>
                  <td className="right">6</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <th className="header">Position</th>
                  <th className="header center">School</th>
                  <th className="header">Size</th>
                  <th className="header">Describtion</th>
                </tr>
                <tr>
                  <td className="int middle">00D8</td>
                  <td rowSpan={2} className="type">
                    Driving
                  </td>
                  <td className="center middle">4</td>
                  <td>
                    Exercise available (0 - 16)
                    <br />
                    The value is 0 if you never have visited the driving school.
                  </td>
                </tr>
                <tr>
                  <td className="bool middle">015C</td>
                  <td className="center middle">1</td>
                  <td>Completed the driving school</td>
                </tr>
                <tr>
                  <td className="int">1E84</td>
                  <td rowSpan={4} className="type">
                    Flying
                  </td>
                  <td className="center">4</td>
                  <td>Exercise available (1 - 12)</td>
                </tr>
                <tr>
                  <td className="int">1E88</td>
                  <td className="center">4</td>
                  <td>Exercise displayed (1 - 12)</td>
                </tr>
                <tr>
                  <td className="bool">1E8C</td>
                  <td className="center">1</td>
                  <td>Got intro phone call from Toreno</td>
                </tr>
                <tr>
                  <td className="bool">
                    1EA0
                    <br />
                    1EA4
                  </td>
                  <td className="center">1</td>
                  <td>Flying school completed (not sure)</td>
                </tr>
                <tr>
                  <td className="int">1EAC</td>
                  <td rowSpan={2} className="type">
                    Boat
                  </td>
                  <td className="center">4</td>
                  <td>Exercise available (1 - 5)</td>
                </tr>
                <tr>
                  <td className="bool">1EC8</td>
                  <td className="center">1</td>
                  <td>Boat school completed</td>
                </tr>
                <tr>
                  <td className="int middle">21CC</td>
                  <td className="type">Bike</td>
                  <td className="center middle">4</td>
                  <td>
                    Exercise available (0 - 6)
                    <br />
                    There is no difference between the values 0 and 1.
                  </td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                Some exercises have two numbers, because you can do them
                clockwise and counter clockwise.
                <br />
                If an exercise has two numbers, use both for detecting, but use
                the highest for saving.
              </li>
              <li>
                The user chooses what exercises are available.
                <br />
                The last exercise available and the exercises following must be
                0 and disabled for editing.
                <br />
                The exception is when the last exercise is selected, then the
                user can edit everything.
              </li>
              <li>
                If a user sets a percentage value to less than 70, set it to 0.
              </li>
              <li>
                Driving School:
                <ul>
                  <li>
                    If 00D8 equals 0, set every exercise to 0 and don't let the
                    user change anything.
                    <br />
                    This is because GTA sets 00D8 to 1 when you walk into the
                    red marker.
                  </li>
                  <li>
                    If 015C is false, suggest the user to keep the last exercise
                    at 0.
                    <br />
                    Otherwise you can't complete the driving school.
                  </li>
                </ul>
              </li>
              <li>
                Flying School:
                <ul>
                  <li>
                    If 0948 is less than 5, the last exercise must be 0,
                    otherwise you can't complete the mission Learning to Fly.
                  </li>
                  <li>
                    Set the displayed exercise to the same as the available
                    exercises, to make it easy.
                  </li>
                  <li>
                    It is possible to change the values before the flying
                    mission is available.
                  </li>
                  <li>
                    <a href="http://www.gtasanandreas.net/schools/flight.php">
                      More about the flying school here
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Boat School:
                <ul>
                  <li>
                    If the boat school isn't completed, suggest the user to
                    don't change the value of the last exercise.
                  </li>
                  <li>
                    It is possible to change the values before the boat school
                    is available.
                  </li>
                </ul>
              </li>
              <li>
                Bike School:
                <ul>
                  <li>
                    It is possible to change the values before the bike school
                    is available.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Other</h2>
            <table>
              <tbody>
                <tr>
                  <th className="header">Position</th>
                  <th className="header">Size</th>
                  <th className="header">Describtion</th>
                </tr>
                <tr>
                  <td className="bool">00A0</td>
                  <td className="center">1</td>
                  <td>Position outside</td>
                </tr>
                <tr>
                  <td className="bool">0158</td>
                  <td className="center">1</td>
                  <td>Help car</td>
                </tr>
                <tr>
                  <td className="bool">01E0</td>
                  <td className="center">1</td>
                  <td>Help wasted</td>
                </tr>
                <tr>
                  <td className="bool">01FC</td>
                  <td className="center">1</td>
                  <td>Help busted</td>
                </tr>
                <tr>
                  <td className="int">03E4</td>
                  <td className="center">1</td>
                  <td>Help swimming (0 - 7)</td>
                </tr>
                <tr>
                  <td className="int">0C88</td>
                  <td className="center">4</td>
                  <td>
                    Number of <Link to={'/block20'}>tags</Link> sprayed
                  </td>
                </tr>
                <tr>
                  <td className="int">0DD0</td>
                  <td className="center">4</td>
                  <td>
                    Position house (<Link to={'/savehouses'}>savehouses</Link>)
                  </td>
                </tr>
                <tr>
                  <td className="bool">1310</td>
                  <td className="center">1</td>
                  <td>Hot Coffee disabled</td>
                </tr>
                <tr>
                  <td className="bool">1514</td>
                  <td className="center">1</td>
                  <td>Help gym</td>
                </tr>
                <tr>
                  <td className="bool">27D8</td>
                  <td className="center">1</td>
                  <td>Clothing Shop: Binco</td>
                </tr>
                <tr>
                  <td className="bool">27DC</td>
                  <td className="center">1</td>
                  <td>Clothing Shop: Pro-Laps</td>
                </tr>
                <tr>
                  <td className="bool">27E0</td>
                  <td className="center">1</td>
                  <td>Clothing Shop: Sub Urban</td>
                </tr>
                <tr>
                  <td className="bool">27E4</td>
                  <td className="center">1</td>
                  <td>Clothing Shop: Zip</td>
                </tr>
                <tr>
                  <td className="bool">27E8</td>
                  <td className="center">1</td>
                  <td>Clothing Shop: Victim</td>
                </tr>
                <tr>
                  <td className="bool">27EC</td>
                  <td className="center">1</td>
                  <td>Clothing Shop: Didier Sachs</td>
                </tr>
                <tr>
                  <td className="bool">27F0</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Gimp Suit</td>
                </tr>
                <tr>
                  <td className="bool">27F4</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Valet Uniform</td>
                </tr>
                <tr>
                  <td className="bool">27F8</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Croupier</td>
                </tr>
                <tr>
                  <td className="bool">27FC</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Cop</td>
                </tr>
                <tr>
                  <td className="bool">2800</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Rural Clothes</td>
                </tr>
                <tr>
                  <td className="bool">2804</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Racing Suit</td>
                </tr>
                <tr>
                  <td className="bool">2808</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Medic Uniform</td>
                </tr>
                <tr>
                  <td className="bool">280C</td>
                  <td className="center">1</td>
                  <td>Special Clothes: Pimp Suit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Block01;
