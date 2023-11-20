"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92661],{28671:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-5825346c","path":"/devices/SEA801-Zigbee_SEA802-Zigbee.html","title":"Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT","description":"Integrate your Saswell SEA801-Zigbee/SEA802-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-30T11:31:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Weekly Schedule","slug":"weekly-schedule","link":"#weekly-schedule","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Away mode (switch)","slug":"away-mode-switch","link":"#away-mode-switch","children":[]},{"level":3,"title":"Heating (binary)","slug":"heating-binary","link":"#heating-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1700505403000},"filePathRelative":"devices/SEA801-Zigbee_SEA802-Zigbee.md"}')},744398:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var a=o(166252);const i=(0,a._)("h1",{id:"saswell-sea801-zigbee-sea802-zigbee",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#saswell-sea801-zigbee-sea802-zigbee","aria-hidden":"true"},"#"),(0,a.Uk)(" Saswell SEA801-Zigbee/SEA802-Zigbee")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SEA801-Zigbee/SEA802-Zigbee")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Thermostatic radiator valve")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery_low, switch (state), lock (state), heating, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration), linkquality")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SEA801-Zigbee-SEA802-Zigbee.jpg",alt:"Saswell SEA801-Zigbee/SEA802-Zigbee"})])],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"White-label"),(0,a._)("td",null,"HiHome WZB-TRVL, Hama 00176592, RTX ZB-RT1, SETTI+ TRV001")],-1),p=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ul><li>SEA801-Zigbee (LCD display on the front, several buttons): Long hold the &quot;AUTO/MANU&quot; and &quot;+&quot; Button until the LCD display shows &quot;----&quot;</li><li>SEA802-Z01 (white LED display on the side, rotary plate): Turn the rotary plate to decrease the temperature until the LED dots show &quot;OF&quot;, then long press until the display changes to &quot;--&quot;</li></ul><h3 id="weekly-schedule" tabindex="-1"><a class="header-anchor" href="#weekly-schedule" aria-hidden="true">#</a> Weekly Schedule</h3><p>It&#39;s not possible to read (<code>/get</code>) this value. To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload</p><p><code>dayofweek</code> 1-7, 1=sunday <code>transitionTime</code> Minutes after midnight <code>numoftrans</code> It seems that the maximum number of transitions is 4</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;weekly_schedule&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;dayofweek&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;numoftrans&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;transitionTime&quot;</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;heatSetpoint&quot;</span><span class="token operator">:</span> <span class="token number">23</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;transitionTime&quot;</span><span class="token operator">:</span> <span class="token number">570</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;heatSetpoint&quot;</span><span class="token operator">:</span> <span class="token number">2200</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),b=(0,a.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch" aria-hidden="true">#</a> Window detection (switch)</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="away-mode-switch" tabindex="-1"><a class="header-anchor" href="#away-mode-switch" aria-hidden="true">#</a> Away mode (switch)</h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="heating-binary" tabindex="-1"><a class="header-anchor" href="#heating-binary" aria-hidden="true">#</a> Heating (binary)</h3><p>Device valve is open or closed (heating or not). Value can be found in the published state on the <code>heating</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> heating is ON, if <code>OFF</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-6</code> and the maximum value is <code>6</code> with a step size of <code>1</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),m={},g=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[n,(0,a._)("tbody",null,[s,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Saswell"},{default:(0,a.w5)((()=>[(0,a.Uk)("Saswell")])),_:1})])]),d,c,r,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),p,(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);