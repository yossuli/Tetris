(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(o,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(439)}])},439:function(o,e,r){"use strict";r.r(e),r.d(e,{default:function(){return w}});var t=r(5893),l=r(7294);let c=(o,e)=>e.every(r=>(console.table(e),void 0!==o[r.top]&&0===o[r.top][r.left])),n=(o,e,r)=>{let t=[];for(let l=0;l<e;l++){let e=[];for(let t=0;t<o;t++)e.push(r);t.push(e)}return t},a=(o,e)=>e.filter(function(e){return e===o}).length,s=[{type:1,shape:[[0,0],[0,-1],[0,1],[-1,0]],color:"#93338f"},{type:2,shape:[[0,0],[-1,-1],[0,1],[-1,0]],color:"#7dba50"},{type:3,shape:[[0,0],[0,-1],[-1,1],[-1,0]],color:"#cc2828"},{type:4,shape:[[0,0],[0,-1],[0,1],[-1,-1]],color:"#1c76bb"},{type:5,shape:[[0,0],[0,-1],[0,1],[-1,1]],color:"#e98e30"},{type:6,shape:[[.5,-1.5],[.5,-.5],[.5,.5],[.5,1.5]],color:"#37bcec"},{type:7,shape:[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]],color:"#fbdb43"}],_=o=>{let e=(a(1,o)+3*a(3,o))%4,r=a(6,o)-a(4,o),t=s[1].shape,l=s[1].color;return console.log(a(2,o)),t.map(t=>({top:a(2,o)+Math.floor(t[e%2]*((-1)**Math.floor(e/2)*(-1)**e)),left:4+(r+Math.ceil(t[1-e%2]*(-1)**Math.floor(e/2))),backgroundColor:l,borderColor:l}))},d={90:1,67:3,37:4,38:5,39:6,40:2},i=()=>{let[o,e]=(0,l.useState)(n(10,20,0)),[r,t]=(0,l.useState)([2]);return(0,l.useEffect)(()=>{let o=setInterval(()=>{},1e3);return()=>{clearInterval(o)}},[]),(0,l.useEffect)(()=>{let l=l=>{Object.keys(d).map(n=>{if(String(l.keyCode)===n){let l=[...r,d[Number(n)]];if(c(o,_(l))||2!==l[l.length-1])c(o,_(l))&&(console.log("iiiiii"),t(l));else{console.log("aaaaaa");let l=[...o],c=[...r];_(c).map(o=>{l[o.top][o.left]=1}),e(l),t([2])}}})};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[r]),{exBoard:o,exInputs:r}};var u=r(3532),p=r.n(u);let f=()=>{let o=i().exInputs,e=_(o);return(0,t.jsx)(t.Fragment,{children:e.map((o,e)=>(0,t.jsx)("div",{className:p().block,style:{top:(o.top-1)*30+30,left:30*o.left,backgroundColor:o.backgroundColor,borderColor:o.borderColor}},"".concat(e)))})};var b=r(2005),h=r.n(b);let k=()=>{let o=i().exBoard;return(0,t.jsx)("div",{className:h().board,children:o.map((e,r)=>e.map((e,l)=>(0,t.jsx)("div",{className:"".concat(h().cell," ").concat(h()["color-".concat(o[r][l])])},"".concat(l,"_").concat(r))))})};var x=r(2729),v=r.n(x);let m=()=>(0,t.jsxs)("div",{className:v().container,children:[(0,t.jsx)(f,{}),(0,t.jsx)(k,{})]});var w=m},2005:function(o){o.exports={board:"board_board__OJkEn",cell:"board_cell__GzIE0","color-1":"board_color-1__xIquU","color-2":"board_color-2__U_IJi","color-3":"board_color-3__nSpTe","color-4":"board_color-4__psSac","color-5":"board_color-5__kOusG","color-6":"board_color-6__ss_lI","color-7":"board_color-7__HDqXB"}},3532:function(o){o.exports={block:"floartMIno_block__wVxkG"}},2729:function(o){o.exports={container:"index_container__gnN1f"}}},function(o){o.O(0,[774,888,179],function(){return o(o.s=8312)}),_N_E=o.O()}]);