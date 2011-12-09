(function(){function g(a){return a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()})}function l(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function e(a){var b=/\S/;a.each(function(a){for(var j=a.firstChild,d=-1,A;j;)A=j.nextSibling,j.nodeType==3&&!b.test(j.nodeValue)?a.removeChild(j):j.nodeIndex=++d,j=A})}function d(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++d.id}function f(a,b){var c=q[a]=q[a]||{};return c[b]=c[b]||[]}function h(a,b,c){var j=
d(a),b=f(j,b),j=function(b){c.call(a,b)===!1&&(b.preventDefault(),b.stopPropagation())};j.guid=c.guid=c.guid||++d.id;j.handler=c;b.push(j);return j}function p(a){return(a||"").replace(E,"")}var i,m=this,r=new String("string"),n=m.document,w=/^#?([\w-]+)$/,F=/^#/,t=/<([\w:]+)/,s=function(a){return[].slice.call(a,0)};try{s(n.documentElement.childNodes)}catch(H){s=function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}m.x$=m.xui=i=function(a,b){return new i.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=
function(a,b){var c=this.length||0,j=0;if(typeof a=="function")for(;j<c;j++)a.call(b,this[j],j,this)};i.fn=i.prototype={extend:function(a){for(var b in a)i.fn[b]=a[b]},find:function(a,b){var c=[],j;if(a)if(b==void 0&&this.length)c=this.each(function(b){c=c.concat(s(i(a,b)))}).reduce(c);else if(b=b||n,typeof a==r)w.test(a)&&b.getElementById&&b.getElementsByTagName?(c=F.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),c[0]==null&&(c=[])):t.test(a)?(j=n.createElement("i"),j.innerHTML=
a,s(j.childNodes).forEach(function(a){c.push(a)})):c=m.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),c=s(c);else if(a instanceof Array)c=a;else if(a.nodeName||a===m)c=[a];else{if(a.toString()=="[object NodeList]"||a.toString()=="[object HTMLCollection]"||typeof a.length=="number")c=s(a)}else return this;return this.set(c)},set:function(a){var b=i();b.cache=s(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[],a=a||s(this);a.forEach(function(a){c.indexOf(a,
0,b)<0&&c.push(a)});return c},has:function(a){var b=i(a);return this.filter(function(){var a=this,j=null;b.each(function(b){j=j||b==a});return j})},filter:function(a){var b=[];return this.each(function(c,j){a.call(c,j)&&b.push(c)}).set(b)},not:function(a){var b=s(this),c=i(a);if(!c.length)return this;return this.filter(function(a){var d;c.each(function(c){return d=b[a]!=c});return d})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};i.fn.find.prototype=
i.fn;i.extend=i.fn.extend;i.extend({html:function(a,b){e(this);if(arguments.length==0){var c=[];this.each(function(a){c.push(a.innerHTML)});return c}arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var j=n.createElement("p");b.each(function(a){j.appendChild(a)});this.each(function(a){a.innerHTML=j.innerHTML})}else{var d=this;b.each(function(b){d.html(a,b)})}return this}return this.each(function(c){var j,d=0;if(a=="inner")if(typeof b==
r||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(j=c.length;d<j;d++)eval(c[d].text)}else c.innerHTML="",c.appendChild(b);else if(a=="remove")c.parentNode.removeChild(c);else{d=b;["outer","top","bottom"].indexOf(a);typeof d==r?(j=n.createElement("div"),j.innerHTML=d):(j=n.createElement("div"),j.appendChild(d));d=j;j=d.childNodes;a=="outer"?c.parentNode.replaceChild(d,c):a=="top"?c.insertBefore(d,c.firstChild):a=="bottom"?c.insertBefore(d,null):a=="before"?c.parentNode.insertBefore(d,
c):a=="after"&&c.parentNode.insertBefore(d,c.nextSibling);for(c=d.parentNode;j.length;)c.insertBefore(j[0],d);c.removeChild(d)}})},attr:function(a,b){if(arguments.length==2)return this.each(function(c){c.tagName&&c.tagName.toLowerCase()=="input"&&a=="value"?c.value=b:c.setAttribute&&(a=="checked"&&(b==""||b==!1||typeof b=="undefined")?c.removeAttribute(a):c.setAttribute(a,b))});else{var c=[];this.each(function(b){b.tagName&&b.tagName.toLowerCase()=="input"&&a=="value"?c.push(b.value):b.getAttribute&&
b.getAttribute(a)&&c.push(b.getAttribute(a))});return c}}});"inner outer top bottom remove before after".split(" ").forEach(function(a){i.fn[a]=function(a){return function(c){return this.html(a,c)}}(a)});i.events={};var q={};i.extend({on:function(a,b,c){return this.each(function(j){if(i.events[a]){var e=d(j),e=f(e,a);c=c||{};c.handler=function(c,b){i.fn.fire.call(i(this),a,b)};e.length||i.events[a].call(j,c)}j.addEventListener(a,h(j,a,b),!1)})},un:function(a,b){return this.each(function(c){for(var j=
d(c),e=f(j,a),g=e.length;g--;)if(b===void 0||b.guid===e[g].guid){c.removeEventListener(a,e[g],!1);var h=q[j][a],y=g,x=h.slice(2);h.length=y<0?h.length+y:y;h.push.apply(h,x)}q[j][a].length===0&&delete q[j][a];for(var i in q[j])return;delete q[j]})},fire:function(a,b){return this.each(function(c){if(c==n&&!c.dispatchEvent)c=n.documentElement;var d=n.createEvent("HTMLEvents");d.initEvent(a,!0,!0);d.data=b||{};d.eventName=a;c.dispatchEvent(d)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(a){i.fn[a]=
function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(a)});i(m).on("load",function(){"onorientationchange"in n.body||function(a,b){i(m).on("resize",function(){var c=m.innerWidth<a&&m.innerHeight>b&&m.innerWidth<m.innerHeight,d=m.innerWidth>a&&m.innerHeight<b&&m.innerWidth>m.innerHeight;if(c||d)m.orientation=c?0:90,i("body").fire("orientationchange"),a=m.innerWidth,b=m.innerHeight})}(m.innerWidth,m.innerHeight)});var z;try{z=!!n.createEvent("TouchEvent").initTouchEvent}catch(I){z=!1}i.touch=
z;i.ready=function(a){domReady(a)};d.id=1;i.extend({tween:function(a,b){var c=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),d=function(a){var c=[],b;if(typeof a!=r){for(b in a)c.push(l(b)+":"+a[b]);c=c.join(";")}else c=a;return c}(a);return this.each(function(a){emile(a,d,c,b)})}});var E=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;i.extend({setStyle:function(a,b){a=g(a);return this.each(function(c){c.style[a]=b})},getStyle:function(a,b){if(b===
void 0){var c=[];this.each(function(b){c.push(n.defaultView.getComputedStyle(b,"").getPropertyValue(l(a)))});return c}else return this.each(function(c){b(n.defaultView.getComputedStyle(c,"").getPropertyValue(l(a)))})},addClass:function(a){var b=a.split(" ");return this.each(function(a){b.forEach(function(b){if(u(b).test(a.className)===!1)a.className=p(a.className+" "+b)})})},hasClass:function(a,b){var c=this,d=a.split(" ");return this.length&&function(){var a=!0;c.each(function(c){d.forEach(function(d){u(d).test(c.className)?
b&&b(c):a=!1})});return a}()},removeClass:function(a){if(a===void 0)this.each(function(a){a.className=""});else{var b=a.split(" ");this.each(function(a){b.forEach(function(b){a.className=p(a.className.replace(u(b),"$1"))})})}return this},toggleClass:function(a){var b=a.split(" ");return this.each(function(a){b.forEach(function(b){a.className=u(b).test(a.className)?p(a.className.replace(u(b),"$1")):p(a.className+" "+b)})})},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var B=
{},u=function(a){var b=B[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),B[a]=b);return b};i.extend({xhr:function(a,b,c){function d(){g.readyState==4&&(delete e.xmlHttpRequest,(g.status===0||g.status==200)&&g.handleResp(),/^[45]/.test(g.status)&&g.handleError())}/^(inner|outer|top|bottom|before|after)$/.test(a)||(c=b,b=a,a="inner");var f=c?c:{};if(typeof c=="function")f={},f.callback=c;var e=this,g=new XMLHttpRequest,c=f.method||"get",h=typeof f.async!="undefined"?f.async:!0,x=f.data||null,i;g.queryString=
x;g.open(c,b,h);g.setRequestHeader("X-Requested-With","XMLHttpRequest");c.toLowerCase()=="post"&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(i in f.headers)f.headers.hasOwnProperty(i)&&g.setRequestHeader(i,f.headers[i]);g.handleResp=f.callback!=null?f.callback:function(){e.html(a,g.responseText)};g.handleError=f.error&&typeof f.error=="function"?f.error:function(){};if(h)g.onreadystatechange=d,this.xmlHttpRequest=g;g.send(x);h||d();return this}});(function(a,b){function c(a,
b,c){return(a+(b-a)*c).toFixed(3)}function d(a,b,c){for(var f=2,g,e,h=[],j=[];g=3,e=arguments[f-1],f--;)if(e.substr(0,1)=="r")for(e=e.match(/\d+/g);g--;)h.push(~~e[g]);else for(e.length==4&&(e="#"+e.substr(1,1)+e.substr(1,1)+e.substr(2,1)+e.substr(2,1)+e.substr(3,1)+e.substr(3,1));g--;)h.push(parseInt(e.substr(1+g*2,2),16));for(;g--;)f=~~(h[g+3]+(h[g]-h[g+3])*c),j.push(f<0?0:f>255?255:f);return"rgb("+j.join(",")+")"}function f(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,
f:d,u:""}:{v:b,f:c,u:a}}function g(a){var b={},c=h.length,d;e.innerHTML='<div style="'+a+'"></div>';for(a=e.childNodes[0].style;c--;)if(d=a[h[c]])b[h[c]]=f(d);return b}var e=n.createElement("div"),h="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,c,d){var a=typeof a=="string"?n.getElementById(a):a,c=c||{},e=g(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),h,j={},i=+new Date,k=c.duration||200,C=i+k,D,G=c.easing||function(k){return-Math.cos(k*Math.PI)/2+0.5};for(h in e)j[h]=f(b[h]);D=setInterval(function(){var b=+new Date,o=b>C?1:(b-i)/k;for(h in e)a.style[h]=e[h].f(j[h].v,e[h].v,G(o))+e[h].u;b>C&&(clearInterval(D),c.after&&c.after(),d&&setTimeout(d,1))},10)}})("emile",this);(function(){function a(k,a,b,c,d,h){for(var d=
0,g=c.length;d<g;d++){var i=c[d];if(i){for(var i=i[k],e=!1;i;){if(i.sizcache===b){e=c[i.sizset];break}if(i.nodeType===1&&!h)i.sizcache=b,i.sizset=d;if(i.nodeName.toLowerCase()===a){e=i;break}i=i[k]}c[d]=e}}}function b(k,a,b,c,d,i){for(var d=0,g=c.length;d<g;d++){var e=c[d];if(e){for(var e=e[k],f=!1;e;){if(e.sizcache===b){f=c[e.sizset];break}if(e.nodeType===1){if(!i)e.sizcache=b,e.sizset=d;if(typeof a!=="string"){if(e===a){f=!0;break}}else if(h.filter(a,[e]).length>0){f=e;break}}e=e[k]}c[d]=f}}}var c=
/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,f=!0;[0,0].sort(function(){f=!1;return 0});var h=function(k,a,b,d){var b=b||[],g=a=a||n;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!k||typeof k!=="string")return b;var o=[],f,j,p,m,r=!0,q=h.isXML(a),s=k,v;do if(c.exec(""),f=c.exec(s))if(s=f[3],o.push(f[1]),f[2]){m=f[3];break}while(f);if(o.length>1&&l.exec(k))if(o.length===2&&
i.relative[o[0]])j=w(o[0]+o[1],a);else for(j=i.relative[o[0]]?[a]:h(o.shift(),a);o.length;)k=o.shift(),i.relative[k]&&(k+=o.shift()),j=w(k,j);else if(!d&&o.length>1&&a.nodeType===9&&!q&&i.match.ID.test(o[0])&&!i.match.ID.test(o[o.length-1])&&(f=h.find(o.shift(),a,q),a=f.expr?h.filter(f.expr,f.set)[0]:f.set[0]),a){f=d?{expr:o.pop(),set:t(d)}:h.find(o.pop(),o.length===1&&(o[0]==="~"||o[0]==="+")&&a.parentNode?a.parentNode:a,q);j=f.expr?h.filter(f.expr,f.set):f.set;for(o.length>0?p=t(j):r=!1;o.length;)f=
v=o.pop(),i.relative[v]?f=o.pop():v="",f==null&&(f=a),i.relative[v](p,f,q)}else p=[];p||(p=j);p||h.error(v||k);if(e.call(p)==="[object Array]")if(r)if(a&&a.nodeType===1)for(k=0;p[k]!=null;k++)p[k]&&(p[k]===!0||p[k].nodeType===1&&h.contains(a,p[k]))&&b.push(j[k]);else for(k=0;p[k]!=null;k++)p[k]&&p[k].nodeType===1&&b.push(j[k]);else b.push.apply(b,p);else t(p,b);m&&(h(m,g,b,d),h.uniqueSort(b));return b};h.uniqueSort=function(k){if(q&&(g=f,k.sort(q),g))for(var a=1;a<k.length;a++)k[a]===k[a-1]&&k.splice(a--,
1);return k};h.matches=function(k,a){return h(k,null,null,a)};h.find=function(k,a,b){var c;if(!k)return[];for(var d=0,h=i.order.length;d<h;d++){var f=i.order[d],e;if(e=i.leftMatch[f].exec(k)){var g=e[1];e.splice(1,1);if(g.substr(g.length-1)!=="\\"&&(e[1]=(e[1]||"").replace(/\\/g,""),c=i.find[f](e,a,b),c!=null)){k=k.replace(i.match[f],"");break}}}c||(c=a.getElementsByTagName("*"));return{set:c,expr:k}};h.filter=function(k,a,b,c){for(var d=k,f=[],e=a,g,j,p=a&&a[0]&&h.isXML(a[0]);k&&a.length;){for(var l in i.filter)if((g=
i.leftMatch[l].exec(k))!=null&&g[2]){var n=i.filter[l],m,r;r=g[1];j=!1;g.splice(1,1);if(r.substr(r.length-1)!=="\\"){e===f&&(f=[]);if(i.preFilter[l])if(g=i.preFilter[l](g,e,b,f,c,p)){if(g===!0)continue}else j=m=!0;if(g)for(var q=0;(r=e[q])!=null;q++)if(r){m=n(r,g,q,e);var t=c^!!m;b&&m!=null?t?j=!0:e[q]=!1:t&&(f.push(r),j=!0)}if(m!==void 0){b||(e=f);k=k.replace(i.match[l],"");if(!j)return[];break}}}if(k===d)if(j==null)h.error(k);else break;d=k}return e};h.error=function(k){throw"Syntax error, unrecognized expression: "+
k;};var i=h.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(k){return k.getAttribute("href")}},relative:{"+":function(k,a){var b=typeof a==="string",c=b&&!/\W/.test(a),b=b&&!c;c&&(a=a.toLowerCase());for(var c=0,d=k.length,f;c<d;c++)if(f=k[c]){for(;(f=f.previousSibling)&&f.nodeType!==1;);k[c]=b||f&&f.nodeName.toLowerCase()===a?f||!1:f===a}b&&h.filter(a,k,!0)},">":function(k,a){var b=typeof a==="string",c,d=0,f=k.length;if(b&&!/\W/.test(a))for(a=a.toLowerCase();d<f;d++){if(c=
k[d])b=c.parentNode,k[d]=b.nodeName.toLowerCase()===a?b:!1}else{for(;d<f;d++)(c=k[d])&&(k[d]=b?c.parentNode:c.parentNode===a);b&&h.filter(a,k,!0)}},"":function(k,c,f){var e=d++,h=b,g;typeof c==="string"&&!/\W/.test(c)&&(g=c=c.toLowerCase(),h=a);h("parentNode",c,e,k,g,f)},"~":function(k,c,f){var e=d++,h=b,g;typeof c==="string"&&!/\W/.test(c)&&(g=c=c.toLowerCase(),h=a);h("previousSibling",c,e,k,g,f)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))?
[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){for(var c=[],d=b.getElementsByName(a[1]),f=0,e=d.length;f<e;f++)d[f].getAttribute("name")===a[1]&&c.push(d[f]);return c.length===0?null:c}},TAG:function(a,b){return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,f,e){a=" "+a[1].replace(/\\/g,"")+" ";if(e)return a;for(var e=0,h;(h=b[e])!=null;e++)h&&(f^(h.className&&(" "+h.className+" ").replace(/[\t\n]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[e]=!1));return!1},
ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){var b=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}a[0]=d++;return a},ATTR:function(a,b,c,d,f,e){b=a[1].replace(/\\/g,"");!e&&i.attrMap[b]&&(a[1]=i.attrMap[b]);a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,d,f,e){if(a[1]==="not")if((c.exec(a[3])||"").length>1||
/^\w/.test(a[3]))a[3]=h(a[3],null,null,b);else return a=h.filter(a[3],b,d,1^e),d||f.push.apply(f,a),!1;else if(i.match.POS.test(a[0])||i.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!h(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()===
"button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var f=b[1],e=i.filters[f];if(e)return e(a,c,b,d);else if(f==="contains")return(a.textContent||
a.innerText||h.getText([a])||"").indexOf(b[3])>=0;else if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else h.error("Syntax error, unrecognized expression: "+f)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":var c=b[2],f=b[3];if(c===1&&f===0)return!0;var e=b[0],h=a.parentNode;if(h&&(h.sizcache!==
e||!a.nodeIndex)){for(var g=0,d=h.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++g;h.sizcache=e}d=a.nodeIndex-f;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=i.attrHandle[c]?i.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=
c+"",f=b[2],e=b[4];return c==null?f==="!=":f==="="?d===e:f==="*="?d.indexOf(e)>=0:f==="~="?(" "+d+" ").indexOf(e)>=0:!e?d&&c!==!1:f==="!="?d!==e:f==="^="?d.indexOf(e)===0:f==="$="?d.substr(d.length-e.length)===e:f==="|="?d===e||d.substr(0,e.length+1)===e+"-":!1},POS:function(a,b,c,d){var f=i.setFilters[b[2]];if(f)return f(a,c,b,d)}}},l=i.match.POS,p=function(a,b){return"\\"+(b-0+1)},r;for(r in i.match)i.match[r]=RegExp(i.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),i.leftMatch[r]=RegExp(/(^(?:.|\r|\n)*?)/.source+
i.match[r].source.replace(/\\(\d+)/g,p));var t=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(n.documentElement.childNodes,0)}catch(s){t=function(a,b){var c=b||[],d=0;if(e.call(a)==="[object Array]")Array.prototype.push.apply(c,a);else if(typeof a.length==="number")for(var f=a.length;d<f;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var q;n.documentElement.compareDocumentPosition?q=function(a,b){if(!a.compareDocumentPosition||
!b.compareDocumentPosition)return a==b&&(g=!0),a.compareDocumentPosition?-1:1;var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;c===0&&(g=!0);return c}:"sourceIndex"in n.documentElement?q=function(a,b){if(!a.sourceIndex||!b.sourceIndex)return a==b&&(g=!0),a.sourceIndex?-1:1;var c=a.sourceIndex-b.sourceIndex;c===0&&(g=!0);return c}:n.createRange&&(q=function(a,b){if(!a.ownerDocument||!b.ownerDocument)return a==b&&(g=!0),a.ownerDocument?-1:1;var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();
c.setStart(a,0);c.setEnd(a,0);d.setStart(b,0);d.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,d);c===0&&(g=!0);return c});h.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=h.getText(c.childNodes));return b};(function(){var a=n.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=n.documentElement;c.insertBefore(a,c.firstChild);if(n.getElementById(b))i.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},i.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=n.createElement("div");a.appendChild(n.createComment(""));if(a.getElementsByTagName("*").length>0)i.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){for(var d=[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")i.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();n.querySelectorAll&&function(){var a=h,b=n.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){h=function(b,c,d,f){c=c||n;if(!f&&c.nodeType===
9&&!h.isXML(c))try{return t(c.querySelectorAll(b),d)}catch(e){}return a(b,c,d,f)};for(var c in a)h[c]=a[c];b=null}}();(function(){var a=n.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))i.order.splice(1,0,"CLASS"),i.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},
a=null})();h.contains=n.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):!0)};h.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var w=function(a,b){for(var c=[],d="",f,e=b.nodeType?[b]:b;f=i.match.PSEUDO.exec(a);)d+=f[0],a=a.replace(i.match.PSEUDO,"");a=i.relative[a]?a+"*":a;f=0;for(var g=e.length;f<g;f++)h(a,e[f],c);return h.filter(d,c)};m.Sizzle=h})();(function(a,b){function c(a){for(i=
1;a=d.shift();)a()}var d=[],f,e,h=b.documentElement,g=h.doScroll,i=/^loade|c/.test(b.readyState);b.addEventListener&&b.addEventListener("DOMContentLoaded",e=function(){b.removeEventListener("DOMContentLoaded",e,!1);c()},!1);g&&b.attachEvent("onreadystatechange",f=function(){/^c/.test(b.readyState)&&(b.detachEvent("onreadystatechange",f),c())});a.domReady=g?function(b){self!=top?i?b():d.push(b):function(){try{h.doScroll("left")}catch(c){return setTimeout(function(){a.domReady(b)},50)}b()}()}:function(a){i?
a():d.push(a)}})(this,n)})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(g){Ur.initialize({type:"DOMContentLoaded"},g);Ur.loaded?Ur.initialize({type:"load"},g):window.addEventListener("load",function(l){Ur.initialize(l,g)},!1)},initialize:function(g,l){var e=g.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(l===void 0)l=document.body;for(var d in e)(new e[d]).initialize(l);if(g.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(g){g()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(g,l){if(g!==void 0){var e=g.length||0,d=0;if(typeof l=="function")for(;d<e;d++)l.call(l,g[d],d,g)}},offset:function(g){typeof(g=="undefined")&&(g=this[0]);for(cumulative_left=cumulative_top=0;g.offsetParent;)cumulative_top+=g.offsetTop,cumulative_left+=g.offsetLeft,g=g.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(g,l){return g.parentNode!=window.document?x$().find_set_ancestor(g.parentNode,l):null},find_set_ancestor:function(g,
l){var e=x$(g).attr("data-ur-set")[0];return e!==void 0?l==void 0?g:e==l?g:x$().find_next_ancestor(g,l):x$().find_next_ancestor(g,l)},get_unique_uranium_id:function(){var g=0;return function(){g+=1;return g}}(),find_elements:function(g,l){var e={};this.each(function(d,f,e){return function(){x$().helper_find(this,d,f,e)}}(g,l,e));return e},helper_find:function(g,l,e,d){x$(g).find("*[data-ur-"+l+"-component]").each(function(){var f=!0,h=x$(this).attr("data-ur-id")[0];if(h!==void 0)d[h]===void 0&&(d[h]=
{});else{var g=x$().find_set_ancestor(this,l);if(x$(g).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;g!==null?(h=x$(g).attr("data-ur-id")[0],h===void 0&&(h=x$().get_unique_uranium_id(),x$(g).attr("data-ur-id",h)),d[h]===void 0&&(d[h]={}),d[h].set=g):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),f=!1)}g=x$(this).attr("data-ur-"+l+"-component");g===void 0&&(f=!1);if(f)if(e!==void 0&&e[g]!==void 0)e[g](d[h],this,g);else d[h][g]=this});return d}};xui.extend(mixins);Ur.QuickLoaders.toggler=function(){function g(e,d){e.content===void 0&&(e.content=[]);e.content.push(d)}function l(){this.component_constructors={content:g}}l.prototype.find=function(e){var e=x$(e).find_elements("toggler",this.component_constructors),d;for(d in e){var f=e[d];if(f.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+d);else{var h=x$(f.button).attr("data-ur-state")[0];h===void 0&&(x$(f.button).attr("data-ur-state","disabled"),h="disabled");f.content===
void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+d):x$().iterate(f.content,function(d){x$(d).attr("data-ur-state")[0]===void 0&&x$(d).attr("data-ur-state",h)})}}return e};l.prototype.construct_button_callback=function(e,d){return function(f){var f=f.currentTarget,h=x$(f).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(f).attr("data-ur-state",h);x$(d).attr("data-ur-state",h);x$().iterate(e,function(d){var f=x$(d).attr("data-ur-state")[0]==="enabled"?
"disabled":"enabled";x$(d).attr("data-ur-state",f)})}};l.prototype.initialize=function(e){var e=this.find(e),d;for(d in e){var f=e[d];x$(f.button).click(this.construct_button_callback(f.content,f.set));x$(f.set).attr("data-ur-state","enabled")}};return l}();Ur.QuickLoaders.tabs=function(){function g(d){this.elements=d;this.setup_callbacks()}function l(){}g.prototype.setup_callbacks=function(){var d=null,f;for(f in this.elements.buttons){var e=this.elements.buttons[f],g=this.elements.contents[f];d===null&&(d=f);if(g===void 0){console.log("Ur error -- no matching tab content for tab button");break}g=x$(e).attr("data-ur-state")[0];g!==void 0&&g=="enabled"&&(d=-1);var i=x$(this.elements.set).attr("data-ur-closeable")[0],i=i!==void 0&&i=="true"?!0:!1;console.log("closeable? "+
i);var l=this;x$(e).on("click",function(d){var d=x$(d.currentTarget).attr("data-ur-tab-id")[0],f;for(f in l.elements.buttons){var e=l.elements.buttons[f],g=l.elements.contents[f];if(f!==d)x$(e).attr("data-ur-state","disabled"),x$(g).attr("data-ur-state","disabled");else{var h="enabled";i&&(h=x$(e).attr("data-ur-state")[0],h=h===void 0?"disabled":h,h=h=="enabled"?"disabled":"enabled");x$(e).attr("data-ur-state",h);x$(g).attr("data-ur-state",h)}}})}};var e={button:function(d,f){d.buttons===void 0&&
(d.buttons={});var e=x$(f).attr("data-ur-tab-id")[0];e===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.buttons[e]=f},content:function(d,f){d.contents===void 0&&(d.contents={});var e=x$(f).attr("data-ur-tab-id")[0];e===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.contents[e]=f}};l.prototype.initialize=function(d){d=x$(d).find_elements("tabs",e);Ur.Widgets.tabs={};for(var f in d)Ur.Widgets.tabs[f]=new g(d[f])};return l}();Ur.QuickLoaders["select-list"]=function(){function g(d,e){this.select=d;this.list=e;this.initialize()}function l(d,e){x$().iterate(d.list.children,function(d){var f=d.getAttribute("value"),g=e.getAttribute("value");f==g?(x$(d).attr("data-ur-state","enabled"),value=x$(d).attr("value")):x$(d).attr("data-ur-state","disabled")})}function e(d){var e;x$(d).find("option").each(function(){x$(this).attr("selected")[0]!==void 0&&(e=this)});l(d,e)}function d(){this.SelectLists={}}g.prototype.initialize=function(){x$(this.list).click(function(d){return function(e){d.trigger_option(e)}}(this))};
g.prototype.trigger_option=function(d){l(this,d.target);this.select.value="";return!0};d.prototype.initialize=function(d){var d=x$(d).find_elements("select-list"),h;for(h in d){var l=d[h];this.SelectLists[h]=new g(d[h].select,d[h].content);x$(l.set).attr("data-ur-state","enabled");e(this.SelectLists[h])}};return d}();Ur.QuickLoaders["select-buttons"]=function(){function g(e){this.select=e.select;this.increment=e.increment;this.decrement=e.decrement;this.initialize()}function l(){}g.prototype.initialize=function(){x$(this.increment).click(function(e){return function(d){e.trigger_option(d,1)}}(this));x$(this.decrement).click(function(e){return function(d){e.trigger_option(d,-1)}}(this))};g.prototype.trigger_option=function(e,d){if(x$(e.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var f={},g=this.select.value,
l={prev:null,next:null};x$().iterate(this.select.children,function(d,e){x$(d).attr("value")[0]==g&&(f={element:d,index:e});typeof f.index=="undefined"&&(l.prev=x$(d).attr("value")[0]);e==f.index+1&&(l.next=x$(d).attr("value")[0])});var i=this.select.children.length,m=f.index+d;m==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");m==i-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(m<
0||m==i)return!1;this.select.value=l[d==1?"next":"prev"];return!0};l.prototype.initialize=function(e){var e=x$(e).find_elements("select-buttons"),d;for(d in e)new g(e[d]),x$(e[d].set).attr("data-ur-state","enabled")};return l}();
