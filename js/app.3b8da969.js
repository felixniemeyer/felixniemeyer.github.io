(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"938e1cdd","chunk-2d2133a2":"77c8cd32"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2e01":function(e,t,n){"use strict";n("d27f")},"48b1":function(e,t,n){"use strict";n("8b0e")},"8b0e":function(e,t,n){},ae3e:function(e,t,n){"use strict";n("eb0a")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},a=Object(r["e"])("gallery"),c=Object(r["e"])(" | "),i=Object(r["e"])("about");function u(e,t){var n=Object(r["v"])("router-link"),u=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["f"])(n,{to:"/"},{default:Object(r["A"])((function(){return[a]})),_:1}),c,Object(r["f"])(n,{to:"/about"},{default:Object(r["A"])((function(){return[i]})),_:1})]),Object(r["f"])(u)],64)}n("ae3e");const l={};l.render=u;var f=l,s=(n("d3b7"),n("6c02")),d={class:"gallery"},b={class:"previews"};function p(e,t,n,o,a,c){var i=Object(r["v"])("ProjectPreview");return Object(r["o"])(),Object(r["d"])("div",d,[Object(r["f"])("div",b,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.projects,(function(e,t){return Object(r["o"])(),Object(r["d"])("div",{class:["box ",{horizontal:e.horizontal}],key:t},[Object(r["f"])(i,e,null,16)],2)})),128))])])}n("a4d3"),n("e01a");var j=Object(r["B"])("data-v-16b683de");Object(r["r"])("data-v-16b683de");var v={class:"label"};Object(r["p"])();var h=j((function(e,t,n,o,a,c){return Object(r["o"])(),Object(r["d"])("div",{class:["project-preview",{horizontal:e.horizontal}],style:{left:e.offset.x,top:e.offset.y}},[Object(r["f"])("img",{alt:e.title,src:e.thumbnail},null,8,["alt","src"]),Object(r["f"])("div",v,[Object(r["f"])("h2",null,Object(r["x"])(e.title),1),Object(r["f"])("p",null,Object(r["x"])(e.description),1)])],6)})),O=Object(r["g"])({name:"ProjectPreview",props:{title:String,thumbnail:String,description:String,horizontal:Boolean},data:function(){var e=80,t=3,n=function(){return Math.floor(Math.random()*(100-e+.999-2*t))+t+"%"};return{offset:{x:n(),y:n()}}}});n("2e01");O.render=h,O.__scopeId="data-v-16b683de";var m=O,y=Object(r["g"])({name:"Gallery",data:function(){for(var e=[],t=.5,r=0;r<100;r++){var o=Math.random()>t;t=o?(t+1)/2:t/2,e.push({title:"Mindalys",thumbnail:n("d1f4"),description:"I analyzed my own diary for words that are used disproportionately in certain periods. \n            The output is a graph with words like 'Sex', 'Love', 'Adventure'. It's in German.",date:"2019-01-01",horizontal:o})}return{projects:e}},components:{ProjectPreview:m}});n("48b1");y.render=p;var g=y,w=[{path:"/",name:"Gallery",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/project/mindalys",name:"Project",component:function(){return n.e("chunk-2d2133a2").then(n.bind(null,"ac7a"))}}],P=Object(s["a"])({history:Object(s["b"])(),routes:w}),x=P;Object(r["c"])(f).use(x).mount("#app")},d1f4:function(e,t,n){e.exports=n.p+"img/mindalys.d2b9f04e.png"},d27f:function(e,t,n){},eb0a:function(e,t,n){}});