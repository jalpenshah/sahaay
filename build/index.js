/*!
 * 
 * yee
 *
 */
!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.MyLibrary=r():t.MyLibrary=r()}(self,(()=>(()=>{"use strict";var t={d:(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){f=!0,u=t},f:function(){try{a||null==e.return||e.return()}finally{if(f)throw u}}}}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}t.r(r),t.d(r,{capitalize:()=>f,take:()=>a,uniq:()=>i});var i=function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=[],u=Number(o),a=new Set,f=n(t);try{for(f.s();!(r=f.n()).done;){var y=r.value;if("object"===e(y)&&null!==y&&"string"==typeof o&&""!==o&&!1===Array.isArray(y))a.has(y[o])||(i.push(y),a.add(y[o]));else if(Array.isArray(y)&&!1===isNaN(u)&&Number(y.length)>Number(o)){var l=Number(o);a.has(y[l])||(i.push(y),a.add(y[l]))}else a.has(JSON.stringify(y))||(i.push(y),a.add(JSON.stringify(y)))}}catch(t){f.e(t)}finally{f.f()}return i};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}var a=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=[],o=Number(r);return Array.isArray(t)&&t.length>=1&&("object"===u(t[0])&&null!==t[0]&&"string"==typeof r&&Object.keys(t[0]).includes(r)?(n=t.map((function(t){return t[r]})),"uniq"===e&&(n=Array.from(new Set(n)))):Array.isArray(t[0])&&!1===isNaN(o)?(n=t.map((function(t){return t[o]})),"uniq"===e&&(n=Array.from(new Set(n)))):"function"==typeof r&&(n=t.filter((function(t){return r(t)})),""!==e&&(n=n.map((function(t){return t[e]}))))),n},f=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=t;return e="multiple"===r?e.toLowerCase().replace(/\w\S*/g,(function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()}))})):"single"===r?e.toLowerCase().trimStart().replace(/^\w/,(function(t){return t.toUpperCase()})):e.trimStart().replace(/^\w/,(function(t){return t.toUpperCase()}))};return r})()));
//# sourceMappingURL=index.js.map