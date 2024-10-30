(()=>{var t={28:t=>{t.exports={buildGameboard:function(t){const e=t.getBoard(),n=document.createElement("div");return n.classList.add("gameboard"),e.gameboard.forEach(((t,r)=>{t.forEach(((t,a)=>{const o=document.createElement("div");o.textContent=t?.getLength(),o.classList.add("cell"),o.setAttribute("x",r),o.setAttribute("y",a),"object"==typeof e.getGameboard()[r][a]&&null!=e.getGameboard()[r][a]&&o.classList.add("ship"),-1==e.getHitBoard()[r][a]?o.classList.add("missed"):1==e.getHitBoard()[r][a]&&o.classList.add("hit"),e.getGameboard()[r][a]?.isSunk()&&o.classList.add("sunk"),n.appendChild(o)}))})),n},buildHitBoard:function(t){const e=t.getBoard(),n=document.createElement("div");return n.classList.add("hitboard"),e.getHitBoard().forEach(((t,r)=>{t.forEach(((t,a)=>{const o=document.createElement("div");o.classList.add("cell"),o.setAttribute("x",r),o.setAttribute("y",a),-1==e.getHitBoard()[r][a]?o.classList.add("missed"):1==e.getHitBoard()[r][a]&&o.classList.add("hit"),e.getGameboard()[r][a]?.isSunk()&&o.classList.add("sunk"),o.addEventListener("click",(t=>{if(t.preventDefault(),e.getHitBoard()[r][a])return;e.receiveAttack(r,a);const o=new CustomEvent("rebuild",{bubbles:!0});n.dispatchEvent(o),console.log(`clicked ${[r,a]}`),e.isGameOver()&&alert("Game Over!")})),n.appendChild(o)}))})),n}}},225:t=>{t.exports={Gameboard:function(t){function e(t){return Array.from({length:t},(()=>Array(t).fill(null)))}const n=e(t),r=e(t);return{gameboard:n,placeShip:function(t,e,r,a=!0){if(a){if(!(e+t.getLength()<=n.length))return"invalid placement";for(i=e;i<e+t.getLength();i++)n[e][i]=t}},receiveAttack:function(t,e){return null==n[t][e]?(r[t][e]=Number(-1),"miss"):null===r[t][e]?(n[t][e].hit(),r[t][e]=Number(1),n[t][e].hitPoints()):"already hit"},getGameboard:function(){return n},isGameOver:function(){return n.every((t=>t.every((t=>null==t||t.isSunk()))))},getHitBoard:function(){return r},getLength:function(){return t}}}}},386:(t,e,n)=>{const r=n(225);t.exports={Player:function(t,e=!1){let n=r.Gameboard(10);return{name:t,getBoard:function(){return n}}}}},337:t=>{t.exports={Ship:function(t){let e=0;function n(){return t-e}return{getLength:function(){return t},hitPoints:n,isSunk:function(){return n()<=0},hit:function(){e++}}}}},208:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,".container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: repeat(2, 1fr);\n}\n.cell {\n\twidth: 32px;\n\theight: 32px;\n\tborder: solid 1px black;\n}\n.ship {\n\tbackground-color: lightblue;\n}\n\n.gameboard,\n.hitboard {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\tgap: 1px;\n\tjustify-content: start;\n\twidth: 320px;\n}\n\n.missed {\n\tbackground-color: red;\n}\n.hit {\n\tbackground-color: green;\n}\n.sunk {\n\tbackground-color: gray;\n}\n",""]);const c=i},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=r(t,a),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),a=n.n(r),o=n(659),i=n.n(o),c=n(56),s=n.n(c),d=n(540),u=n.n(d),l=n(113),p=n.n(l),f=n(208),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;var g=n(28),m=n(386),v=n(337);function b(){const t=(0,m.Player)("Player 1"),e=(0,m.Player)("Player 2",!0);let n=!0;function r(t){let e=Math.floor(Math.random()*t.getLength()),n=Math.floor(Math.random()*t.getLength());return null!=t.getHitBoard()[e][n]&&r(t),{x:e,y:n}}return window.addEventListener("rebuild",(()=>{if(n=!n,console.log(`Player ${n?"1":"2"}'s turn.`),!n){let e=t.getBoard(),n=r(e);e.receiveAttack(n.x,n.y),console.log(`computer attacking ${n.x} , ${n.y}`);const a=new CustomEvent("rebuild",{bubbles:!0});window.dispatchEvent(a)}})),{getPlayers:function(){return[t,e]},populatePlayerBoard:function(){t.getBoard().placeShip((0,v.Ship)(5),0,0),t.getBoard().placeShip((0,v.Ship)(4),1,0),t.getBoard().placeShip((0,v.Ship)(3),2,0),t.getBoard().placeShip((0,v.Ship)(2),3,0),e.getBoard().placeShip((0,v.Ship)(5),5,5),e.getBoard().placeShip((0,v.Ship)(4),6,5),e.getBoard().placeShip((0,v.Ship)(3),7,5),e.getBoard().placeShip((0,v.Ship)(2),8,5)}}}document.body.appendChild(function(){const t=document.createElement("div");t.classList.add("container");const e=b(),n=e.getPlayers();return t.addEventListener("rebuild",(e=>{t.textContent="",t.appendChild(g.buildGameboard(n[0])),t.appendChild(g.buildHitBoard(n[1]))})),t.appendChild(g.buildGameboard(n[0])),t.appendChild(g.buildHitBoard(n[1])),e.populatePlayerBoard(),t.textContent="",t.appendChild(g.buildGameboard(n[0])),t.appendChild(g.buildHitBoard(n[1])),console.table(n[0].getBoard().getGameboard()),t}())})()})();