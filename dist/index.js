(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>o});var n=function(e,t){t.forEach((function(t){var n=e.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),e.document.getElementsByTagName("head")[0].appendChild(n)}))};const o={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.prototype.$htmlToPaper=function(e,o){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},r="_blank",i=["fullscreen=yes","titlebar=yes","scrollbars=yes"],a=[],s=t.name,c=void 0===s?r:s,d=t.specs,u=void 0===d?i:d,m=t.styles,y=void 0===m?a:m;null!=o&&o.name&&(c=o.name),null!=o&&o.specs&&(u=o.specs),null!=o&&o.styles&&(y=o.styles),u=u.length?u.join(","):"";var p=window.document.getElementById(e);if(p){var f="",b=window.open(f,c,u);return b.document.write("\n        <html>\n          <head>\n            <title>".concat(window.document.title,"</title>\n          </head>\n          <body>\n            ").concat(p.innerHTML,"\n          </body>\n        </html>\n      ")),n(b,y),setTimeout((function(){b.document.close(),b.focus(),b.print(),b.close(),l()}),1e3),!0}alert("Element to print #".concat(e," not found!"))}}};module.exports.VueHtmlToPaper=t})();