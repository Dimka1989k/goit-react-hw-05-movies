"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[519],{519:function(n,t,e){e.r(t);var r=e(885),a=e(791),c=e(689),u=e(237),o=e(184);t.default=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],i=t[1],s=(0,c.UO)().movieId;if((0,a.useEffect)((function(){u.tx(s).then((function(n){i(n)})).catch(console.log)}),[s]),e)return(0,o.jsx)(o.Fragment,{children:e.length>0?(0,o.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,o.jsxs)("li",{children:["Author: ",(0,o.jsx)("b",{children:e}),(0,o.jsx)("p",{children:r})]},t)}))}):(0,o.jsx)("div",{children:"Reviews not found"})})}},237:function(n,t,e){e.d(t,{GC:function(){return f},M1:function(){return v},Pg:function(){return p},rj:function(){return s},tx:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(44),o="be52fa0532462bc2974fc292bc9f022b",i="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=519.8086bcef.chunk.js.map