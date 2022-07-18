"use strict";(self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[]).push([[179],{315:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(81),r=a.n(n),o=a(645),i=a.n(o)()(r());i.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}html{height:-webkit-fill-available}body{height:100vh;min-height:100vh;min-height:-webkit-fill-available;display:flex;flex-direction:column;align-items:center;font-family:"Roboto",sans-serif;color:#929292;background-color:#f4ecdf}header{flex:0 1 auto;padding:2em 0;padding-bottom:2.5em;display:flex;justify-content:space-evenly;gap:2vw}header img{height:4rem}header .buttonsWrapper{display:flex;justify-content:space-between;align-items:center;gap:2vw}header .buttonsWrapper label{font-family:"Roboto",sans-serif;color:#1c0805;font-size:1.2rem;border-bottom:2px rgba(0,0,0,0) solid;padding:0 .4em;transition:border .2s ease;cursor:pointer}header .buttonsWrapper label:hover{border-bottom:2px rgba(197,44,30,.4) solid}header .buttonsWrapper input[type=radio]:checked+label{border-bottom:2px #c52c1e solid}header .buttonsWrapper input[type=radio]{display:none}main{width:100vw;flex:1 1 auto;display:flex}main .homeWrapper,main .aboutWrapper,main .familyWrapper,main .factsWrapper,main .fact{flex:1 1 auto;display:flex;flex-direction:column;align-items:center}main .phoneEmailWrapper,main .adressWrapper,main .hoursWrapper{display:flex;flex-direction:column;align-items:center}main .homeWrapper{gap:2rem}main .homeWrapper p{padding:0 2rem}main .homeWrapper .familyWrapper{gap:1rem}main .homeWrapper .factsWrapper{gap:1rem}main .homeWrapper .factsWrapper .fact{gap:.3rem}main .menuWrapper{flex:1 1 auto;padding:0 2rem;color:#1c0805}main .menuWrapper h2{margin-bottom:1rem}main .menuWrapper ol{display:flex;flex-direction:column;gap:.9rem}main .menuWrapper ol li{display:grid;grid-template-rows:1rem auto;grid-template-columns:1.8rem auto 3.5rem;row-gap:.3rem}main .menuWrapper ol li .num,main .menuWrapper ol li .name,main .menuWrapper ol li .price{font-weight:700;text-transform:uppercase}main .menuWrapper ol li .price{justify-self:end}main .menuWrapper ol li .ingredients{grid-column:2/3;font-style:italic}main .aboutWrapper{gap:3rem}main .aboutWrapper .hoursWrapper,main .aboutWrapper .phoneEmailWrapper,main .aboutWrapper .adressWrapper{gap:.4rem}main .aboutWrapper .hoursWrapper>p:nth-child(3){border-bottom:2px #929292 solid;padding-bottom:.4em;align-self:stretch;text-align:center}main .aboutWrapper a{color:#c52c1e}main h2,main h3{color:#c52c1e}main img{height:7rem}footer{flex:0 1 auto;text-align:center;padding:.8rem;padding-top:1.5rem;font-size:.8rem}footer a{text-decoration:none;color:#c52c1e}@media(min-width: 800px){main{width:800px}}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);n&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),a&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=a):s[2]=a),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var o={},i=[],c=0;c<e.length;c++){var p=e[c],d=n.base?p[0]+n.base:p[0],s=o[d]||0,l="".concat(d," ").concat(s);o[d]=s+1;var m=a(l),u={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=r(u,n);n.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,r){var o=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=a(o[i]);t[c].references--}for(var p=n(e,r),d=0;d<o.length;d++){var s=a(o[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=p}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var r=void 0!==a.layer;r&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,r&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},620:(e,t,a)=>{var n=a(379),r=a.n(n),o=a(795),i=a.n(o),c=a(569),p=a.n(c),d=a(565),s=a.n(d),l=a(216),m=a.n(l),u=a(589),h=a.n(u),f=a(315),g={};g.styleTagTransform=h(),g.setAttributes=s(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const v=a.p+"edd2fef0fd863a4b1a7d.svg",C=a.p+"4a9ac18d09c69ad6bb19.svg",b=a.p+"173271e14bfe355ff08c.svg",y=function(){const e=document.createElement("div");e.classList.add("homeWrapper");const t=document.createElement("div");t.classList.add("familyWrapper"),e.appendChild(t);const a=document.createElement("h2");a.textContent="Family Tradition",t.appendChild(a);const n=document.createElement("p");n.textContent="Welcome to our little Italy in the middle of Liberec! We prepare authentic Neapolitan pizza. Crispy, with a fluffy edge and an uplifting taste. Baked on beech wood in a real Italian oven. Both our pizzas, our pasta and other specialties come from ancient traditional recipes that have been passed down in our family from generation to generation.",t.appendChild(n);const r=document.createElement("div");return r.classList.add("factsWrapper"),e.appendChild(r),[[v,"The Secrets of Baking","Big heat and the smell of beech wood - that's what a real Neapolitan pizza tastes like. Heat the oven to 300 °C and serve within a few minutes."],[C,"The Flavour of Naples","Our love for pizza and sense of quality is in our blood.   That's why we add a touch of Neapolitan character to the dough. Just like at home under Vesuvius."],[b,"Family Tradition","Our mamma was always happy from the heart when others ate well. We've been cooking for you just like she did for over 20 years."]].forEach((e=>{!function(e,t,a){const n=document.createElement("div");n.classList.add("fact");const o=new Image;o.src=e,n.appendChild(o);const i=document.createElement("h3");i.textContent=t,n.appendChild(i);const c=document.createElement("p");c.textContent=a,n.appendChild(c),r.appendChild(n)}(e[0],e[1],e[2])})),e},x=a.p+"81741e10efed3e40248d.svg",W=document.querySelector("main"),E=document.querySelector("header"),w=document.querySelector("#home"),z=document.querySelector("#menu"),T=document.querySelector("#about");function M(){W.textContent=""}w.addEventListener("click",(()=>{M(),W.appendChild(y())})),z.addEventListener("click",(()=>{M(),W.appendChild(function(){const e=document.createElement("div");e.classList.add("menuWrapper");const t=document.createElement("h2");t.textContent="Pizza menu",e.appendChild(t);const a=document.createElement("ol");return e.appendChild(a),[["Marinara","6.00","Tomatoes, Garlic, Oregano "],["Margherita","6.00","Tomatoes, Mozzarella"],["Napoli","7.00","Tomatoes, Mozzarella, Sardines, Oregano"],["Al Funghi","8.00","Tomatoes, Mozzarella, Mushrooms"],["Al Prosciutto","6.00","Tomatoes, Mozzarella, Ham"],["Al Prosciutto Crudo","9.00","Tomatoes, Mozzarella, Raw Ham"],["Prosciutto E Funghi","9.00","Tomatoes, Mozzarella, Ham, Mushrooms"],["Capricciosa","7.00","Tomatoes, Mozzarella, Spicy Salami, Mushrooms, Artichokes, Olives"],["Quattro Stagioni","7.00","Tomatoes, Mozzarella, Ham, Mushrooms, Artichokes, Sea Food"],["Alla Diavola","12.00","Tomatoes, Mozzarella, Spicy Salami"]].forEach(((e,t)=>{!function(e,t,n,r){const o=document.createElement("li");a.appendChild(o);const i=document.createElement("div");i.classList.add("num"),i.textContent=e+".",o.appendChild(i);const c=document.createElement("div");c.classList.add("name"),c.textContent=t,o.appendChild(c);const p=document.createElement("div");p.classList.add("price"),p.textContent=n+" $",o.appendChild(p);const d=document.createElement("div");d.classList.add("ingredients"),d.textContent=r,o.appendChild(d)}(t+1,e[0],e[1],e[2])})),e}())})),T.addEventListener("click",(()=>{M(),W.appendChild(function(){const e=document.createElement("div");e.classList.add("aboutWrapper");const t=document.createElement("div");t.classList.add("hoursWrapper"),e.appendChild(t);const a=document.createElement("h2");a.textContent="Opening Hours",t.appendChild(a);const n=document.createElement("p");n.textContent="Monday - Friday",t.appendChild(n);const r=document.createElement("p");r.textContent="9:00am - 5:30pm",t.appendChild(r);const o=document.createElement("p");o.textContent="Saturday & Sunday",t.appendChild(o);const i=document.createElement("p");i.textContent="10:00am - 4:00pm",t.appendChild(i);const c=document.createElement("div");c.classList.add("phoneEmailWrapper"),e.appendChild(c);const p=document.createElement("h2");p.textContent="Contact and reservations",c.appendChild(p);const d=document.createElement("p");d.textContent="Phone: ",c.appendChild(d);const s=document.createElement("span");s.textContent="785 459 123",d.appendChild(s);const l=document.createElement("a");l.textContent="somemail@email.com",l.setAttribute("href","https://youtu.be/dQw4w9WgXcQ"),c.appendChild(l);const m=document.createElement("div");m.classList.add("adressWrapper"),e.appendChild(m);const u=document.createElement("h2");u.textContent="Adress",m.appendChild(u);const h=document.createElement("p");h.textContent="Some street 86",m.appendChild(h);const f=document.createElement("p");return f.textContent="85462 Big City",m.appendChild(f),e}())}));const S=new Image;S.src=x,E.insertBefore(S,E.firstChild),W.appendChild(y())}},e=>{e(e.s=620)}]);