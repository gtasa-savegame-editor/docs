import React, { Component } from 'react';

class VehicleColors extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <p>
            All the colors and their connections to vehicles are persisted in <pre>carcols.dat</pre>.<br />
            The <pre>colors</pre> section describes all the colors with their id and rgb values (a comment containing their names, too).<br />
            The <pre>car</pre> section describes their connection to cars.<br />
            More info <a href="https://www.grandtheftwiki.com/Car_Colours#car">on GrandTheftWiki</a>.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="right header">ID</td>
                <td className="header">Color</td>
              </tr>
              <tr>
                <td className="right">0</td>
                <td style={{ backgroundColor: 'rgb(0,0,0)' }} />
              </tr>
              <tr>
                <td className="right">40</td>
                <td style={{ backgroundColor: 'rgb(34,25,24)' }} />
              </tr>
              <tr>
                <td className="right">75</td>
                <td style={{ backgroundColor: 'rgb(32,32,44)' }} />
              </tr>
              <tr>
                <td className="right">66</td>
                <td style={{ backgroundColor: 'rgb(52,26,30)' }} />
              </tr>
              <tr>
                <td className="right">36</td>
                <td style={{ backgroundColor: 'rgb(37,37,39)' }} />
              </tr>
              <tr>
                <td className="right">44</td>
                <td style={{ backgroundColor: 'rgb(25,56,38)' }} />
              </tr>
              <tr>
                <td className="right">83</td>
                <td style={{ backgroundColor: 'rgb(30,46,50)' }} />
              </tr>
              <tr>
                <td className="right">43</td>
                <td style={{ backgroundColor: 'rgb(95,10,21)' }} />
              </tr>
              <tr>
                <td className="right">101</td>
                <td style={{ backgroundColor: 'rgb(31,37,59)' }} />
              </tr>
              <tr>
                <td className="right">53</td>
                <td style={{ backgroundColor: 'rgb(22,34,72)' }} />
              </tr>
              <tr>
                <td className="right">30</td>
                <td style={{ backgroundColor: 'rgb(66,31,33)' }} />
              </tr>
              <tr>
                <td className="right">121</td>
                <td style={{ backgroundColor: 'rgb(98,11,28)' }} />
              </tr>
              <tr>
                <td className="right">117</td>
                <td style={{ backgroundColor: 'rgb(100,13,27)' }} />
              </tr>
              <tr>
                <td className="right">4</td>
                <td style={{ backgroundColor: 'rgb(38,55,57)' }} />
              </tr>
              <tr>
                <td className="right">45</td>
                <td style={{ backgroundColor: 'rgb(93,27,32)' }} />
              </tr>
              <tr>
                <td className="right">3</td>
                <td style={{ backgroundColor: 'rgb(132,4,16)' }} />
              </tr>
              <tr>
                <td className="right">17</td>
                <td style={{ backgroundColor: 'rgb(115,14,26)' }} />
              </tr>
              <tr>
                <td className="right">37</td>
                <td style={{ backgroundColor: 'rgb(45,58,53)' }} />
              </tr>
              <tr>
                <td className="right">74</td>
                <td style={{ backgroundColor: 'rgb(96,26,35)' }} />
              </tr>
              <tr>
                <td className="right">54</td>
                <td style={{ backgroundColor: 'rgb(39,47,75)' }} />
              </tr>
              <tr>
                <td className="right">115</td>
                <td style={{ backgroundColor: 'rgb(115,10,39)' }} />
              </tr>
              <tr>
                <td className="right">58</td>
                <td style={{ backgroundColor: 'rgb(109,24,34)' }} />
              </tr>
              <tr>
                <td className="right">62</td>
                <td style={{ backgroundColor: 'rgb(102,28,38)' }} />
              </tr>
              <tr>
                <td className="right">86</td>
                <td style={{ backgroundColor: 'rgb(46,91,32)' }} />
              </tr>
              <tr>
                <td className="right">79</td>
                <td style={{ backgroundColor: 'rgb(14,49,109)' }} />
              </tr>
              <tr>
                <td className="right">116</td>
                <td style={{ backgroundColor: 'rgb(34,52,87)' }} />
              </tr>
              <tr>
                <td className="right">84</td>
                <td style={{ backgroundColor: 'rgb(77,50,47)' }} />
              </tr>
              <tr>
                <td className="right">113</td>
                <td style={{ backgroundColor: 'rgb(71,53,50)' }} />
              </tr>
              <tr>
                <td className="right">18</td>
                <td style={{ backgroundColor: 'rgb(123,10,42)' }} />
              </tr>
              <tr>
                <td className="right">31</td>
                <td style={{ backgroundColor: 'rgb(95,39,43)' }} />
              </tr>
              <tr>
                <td className="right">124</td>
                <td style={{ backgroundColor: 'rgb(115,24,39)' }} />
              </tr>
              <tr>
                <td className="right">82</td>
                <td style={{ backgroundColor: 'rgb(116,29,40)' }} />
              </tr>
              <tr>
                <td className="right">125</td>
                <td style={{ backgroundColor: 'rgb(27,55,109)' }} />
              </tr>
              <tr>
                <td className="right">95</td>
                <td style={{ backgroundColor: 'rgb(43,62,87)' }} />
              </tr>
              <tr>
                <td className="right">42</td>
                <td style={{ backgroundColor: 'rgb(124,28,42)' }} />
              </tr>
              <tr>
                <td className="right">22</td>
                <td style={{ backgroundColor: 'rgb(105,30,59)' }} />
              </tr>
              <tr>
                <td className="right">25</td>
                <td style={{ backgroundColor: 'rgb(63,62,69)' }} />
              </tr>
              <tr>
                <td className="right">51</td>
                <td style={{ backgroundColor: 'rgb(48,79,69)' }} />
              </tr>
              <tr>
                <td className="right">78</td>
                <td style={{ backgroundColor: 'rgb(120,34,43)' }} />
              </tr>
              <tr>
                <td className="right">103</td>
                <td style={{ backgroundColor: 'rgb(19,69,115)' }} />
              </tr>
              <tr>
                <td className="right">88</td>
                <td style={{ backgroundColor: 'rgb(109,40,55)' }} />
              </tr>
              <tr>
                <td className="right">91</td>
                <td style={{ backgroundColor: 'rgb(54,65,85)' }} />
              </tr>
              <tr>
                <td className="right">123</td>
                <td style={{ backgroundColor: 'rgb(98,68,40)' }} />
              </tr>
              <tr>
                <td className="right">16</td>
                <td style={{ backgroundColor: 'rgb(51,95,63)' }} />
              </tr>
              <tr>
                <td className="right">70</td>
                <td style={{ backgroundColor: 'rgb(133,31,46)' }} />
              </tr>
              <tr>
                <td className="right">94</td>
                <td style={{ backgroundColor: 'rgb(32,75,107)' }} />
              </tr>
              <tr>
                <td className="right">85</td>
                <td style={{ backgroundColor: 'rgb(124,27,68)' }} />
              </tr>
              <tr>
                <td className="right">80</td>
                <td style={{ backgroundColor: 'rgb(114,42,63)' }} />
              </tr>
              <tr>
                <td className="right">21</td>
                <td style={{ backgroundColor: 'rgb(115,46,62)' }} />
              </tr>
              <tr>
                <td className="right">106</td>
                <td style={{ backgroundColor: 'rgb(16,80,130)' }} />
              </tr>
              <tr>
                <td className="right">28</td>
                <td style={{ backgroundColor: 'rgb(61,74,104)' }} />
              </tr>
              <tr>
                <td className="right">114</td>
                <td style={{ backgroundColor: 'rgb(68,98,79)' }} />
              </tr>
              <tr>
                <td className="right">24</td>
                <td style={{ backgroundColor: 'rgb(81,84,89)' }} />
              </tr>
              <tr>
                <td className="right">20</td>
                <td style={{ backgroundColor: 'rgb(59,78,120)' }} />
              </tr>
              <tr>
                <td className="right">93</td>
                <td style={{ backgroundColor: 'rgb(15,106,137)' }} />
              </tr>
              <tr>
                <td className="right">72</td>
                <td style={{ backgroundColor: 'rgb(88,88,83)' }} />
              </tr>
              <tr>
                <td className="right">35</td>
                <td style={{ backgroundColor: 'rgb(90,87,82)' }} />
              </tr>
              <tr>
                <td className="right">109</td>
                <td style={{ backgroundColor: 'rgb(82,86,97)' }} />
              </tr>
              <tr>
                <td className="right">98</td>
                <td style={{ backgroundColor: 'rgb(77,93,96)' }} />
              </tr>
              <tr>
                <td className="right">13</td>
                <td style={{ backgroundColor: 'rgb(88,89,90)' }} />
              </tr>
              <tr>
                <td className="right">119</td>
                <td style={{ backgroundColor: 'rgb(105,88,83)' }} />
              </tr>
              <tr>
                <td className="right">122</td>
                <td style={{ backgroundColor: 'rgb(91,93,94)' }} />
              </tr>
              <tr>
                <td className="right">87</td>
                <td style={{ backgroundColor: 'rgb(57,90,131)' }} />
              </tr>
              <tr>
                <td className="right">52</td>
                <td style={{ backgroundColor: 'rgb(77,98,104)' }} />
              </tr>
              <tr>
                <td className="right">27</td>
                <td style={{ backgroundColor: 'rgb(99,92,90)' }} />
              </tr>
              <tr>
                <td className="right">10</td>
                <td style={{ backgroundColor: 'rgb(70,89,122)' }} />
              </tr>
              <tr>
                <td className="right">108</td>
                <td style={{ backgroundColor: 'rgb(56,86,148)' }} />
              </tr>
              <tr>
                <td className="right">34</td>
                <td style={{ backgroundColor: 'rgb(100,100,100)' }} />
              </tr>
              <tr>
                <td className="right">55</td>
                <td style={{ backgroundColor: 'rgb(125,98,86)' }} />
              </tr>
              <tr>
                <td className="right">41</td>
                <td style={{ backgroundColor: 'rgb(111,103,95)' }} />
              </tr>
              <tr>
                <td className="right">105</td>
                <td style={{ backgroundColor: 'rgb(100,104,106)' }} />
              </tr>
              <tr>
                <td className="right">59</td>
                <td style={{ backgroundColor: 'rgb(78,104,129)' }} />
              </tr>
              <tr>
                <td className="right">5</td>
                <td style={{ backgroundColor: 'rgb(134,68,110)' }} />
              </tr>
              <tr>
                <td className="right">100</td>
                <td style={{ backgroundColor: 'rgb(64,108,143)' }} />
              </tr>
              <tr>
                <td className="right">110</td>
                <td style={{ backgroundColor: 'rgb(127,105,86)' }} />
              </tr>
              <tr>
                <td className="right">9</td>
                <td style={{ backgroundColor: 'rgb(94,112,114)' }} />
              </tr>
              <tr>
                <td className="right">2</td>
                <td style={{ backgroundColor: 'rgb(42,119,161)' }} />
              </tr>
              <tr>
                <td className="right">92</td>
                <td style={{ backgroundColor: 'rgb(109,108,110)' }} />
              </tr>
              <tr>
                <td className="right">11</td>
                <td style={{ backgroundColor: 'rgb(101,106,121)' }} />
              </tr>
              <tr>
                <td className="right">81</td>
                <td style={{ backgroundColor: 'rgb(123,113,94)' }} />
              </tr>
              <tr>
                <td className="right">61</td>
                <td style={{ backgroundColor: 'rgb(145,115,71)' }} />
              </tr>
              <tr>
                <td className="right">112</td>
                <td style={{ backgroundColor: 'rgb(89,110,135)' }} />
              </tr>
              <tr>
                <td className="right">47</td>
                <td style={{ backgroundColor: 'rgb(122,117,96)' }} />
              </tr>
              <tr>
                <td className="right">65</td>
                <td style={{ backgroundColor: 'rgb(142,140,70)' }} />
              </tr>
              <tr>
                <td className="right">12</td>
                <td style={{ backgroundColor: 'rgb(93,126,141)' }} />
              </tr>
              <tr>
                <td className="right">33</td>
                <td style={{ backgroundColor: 'rgb(118,123,124)' }} />
              </tr>
              <tr>
                <td className="right">39</td>
                <td style={{ backgroundColor: 'rgb(109,122,136)' }} />
              </tr>
              <tr>
                <td className="right">67</td>
                <td style={{ backgroundColor: 'rgb(106,122,140)' }} />
              </tr>
              <tr>
                <td className="right">6</td>
                <td style={{ backgroundColor: 'rgb(215,142,16)' }} />
              </tr>
              <tr>
                <td className="right">7</td>
                <td style={{ backgroundColor: 'rgb(76,117,183)' }} />
              </tr>
              <tr>
                <td className="right">104</td>
                <td style={{ backgroundColor: 'rgb(150,129,108)' }} />
              </tr>
              <tr>
                <td className="right">97</td>
                <td style={{ backgroundColor: 'rgb(108,132,149)' }} />
              </tr>
              <tr>
                <td className="right">71</td>
                <td style={{ backgroundColor: 'rgb(111,130,151)' }} />
              </tr>
              <tr>
                <td className="right">50</td>
                <td style={{ backgroundColor: 'rgb(132,137,136)' }} />
              </tr>
              <tr>
                <td className="right">57</td>
                <td style={{ backgroundColor: 'rgb(156,141,113)' }} />
              </tr>
              <tr>
                <td className="right">120</td>
                <td style={{ backgroundColor: 'rgb(155,139,128)' }} />
              </tr>
              <tr>
                <td className="right">46</td>
                <td style={{ backgroundColor: 'rgb(157,152,114)' }} />
              </tr>
              <tr>
                <td className="right">23</td>
                <td style={{ backgroundColor: 'rgb(150,145,140)' }} />
              </tr>
              <tr>
                <td className="right">102</td>
                <td style={{ backgroundColor: 'rgb(171,146,118)' }} />
              </tr>
              <tr>
                <td className="right">48</td>
                <td style={{ backgroundColor: 'rgb(152,149,134)' }} />
              </tr>
              <tr>
                <td className="right">111</td>
                <td style={{ backgroundColor: 'rgb(140,146,154)' }} />
              </tr>
              <tr>
                <td className="right">107</td>
                <td style={{ backgroundColor: 'rgb(161,153,131)' }} />
              </tr>
              <tr>
                <td className="right">29</td>
                <td style={{ backgroundColor: 'rgb(151,149,146)' }} />
              </tr>
              <tr>
                <td className="right">32</td>
                <td style={{ backgroundColor: 'rgb(132,148,171)' }} />
              </tr>
              <tr>
                <td className="right">99</td>
                <td style={{ backgroundColor: 'rgb(174,155,127)' }} />
              </tr>
              <tr>
                <td className="right">77</td>
                <td style={{ backgroundColor: 'rgb(170,157,132)' }} />
              </tr>
              <tr>
                <td className="right">38</td>
                <td style={{ backgroundColor: 'rgb(147,163,150)' }} />
              </tr>
              <tr>
                <td className="right">63</td>
                <td style={{ backgroundColor: 'rgb(148,157,159)' }} />
              </tr>
              <tr>
                <td className="right">60</td>
                <td style={{ backgroundColor: 'rgb(156,156,152)' }} />
              </tr>
              <tr>
                <td className="right">19</td>
                <td style={{ backgroundColor: 'rgb(159,157,148)' }} />
              </tr>
              <tr>
                <td className="right">73</td>
                <td style={{ backgroundColor: 'rgb(154,167,144)' }} />
              </tr>
              <tr>
                <td className="right">69</td>
                <td style={{ backgroundColor: 'rgb(171,152,143)' }} />
              </tr>
              <tr>
                <td className="right">96</td>
                <td style={{ backgroundColor: 'rgb(155,159,157)' }} />
              </tr>
              <tr>
                <td className="right">89</td>
                <td style={{ backgroundColor: 'rgb(167,162,143)' }} />
              </tr>
              <tr>
                <td className="right">76</td>
                <td style={{ backgroundColor: 'rgb(164,160,150)' }} />
              </tr>
              <tr>
                <td className="right">15</td>
                <td style={{ backgroundColor: 'rgb(156,161,163)' }} />
              </tr>
              <tr>
                <td className="right">68</td>
                <td style={{ backgroundColor: 'rgb(170,173,142)' }} />
              </tr>
              <tr>
                <td className="right">56</td>
                <td style={{ backgroundColor: 'rgb(158,164,171)' }} />
              </tr>
              <tr>
                <td className="right">64</td>
                <td style={{ backgroundColor: 'rgb(164,167,165)' }} />
              </tr>
              <tr>
                <td className="right">26</td>
                <td style={{ backgroundColor: 'rgb(165,169,167)' }} />
              </tr>
              <tr>
                <td className="right">126</td>
                <td style={{ backgroundColor: 'rgb(236,106,174)' }} />
              </tr>
              <tr>
                <td className="right">49</td>
                <td style={{ backgroundColor: 'rgb(173,176,176)' }} />
              </tr>
              <tr>
                <td className="right">90</td>
                <td style={{ backgroundColor: 'rgb(175,177,177)' }} />
              </tr>
              <tr>
                <td className="right">118</td>
                <td style={{ backgroundColor: 'rgb(163,173,198)' }} />
              </tr>
              <tr>
                <td className="right">8</td>
                <td style={{ backgroundColor: 'rgb(189,190,198)' }} />
              </tr>
              <tr>
                <td className="right">14</td>
                <td style={{ backgroundColor: 'rgb(214,218,214)' }} />
              </tr>
              <tr>
                <td className="right">1</td>
                <td style={{ backgroundColor: 'rgb(245,245,245)' }} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VehicleColors;
