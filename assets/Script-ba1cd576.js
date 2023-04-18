import{j as y,a as q,F as Je}from"./jsx-runtime-670450c2.js";import{N as Z,Y as At,m as Pt,Z as pe,E as en,o as tn,W as kt,g as It,u as nn}from"./index.es-b01cda33.js";import{R as he,r as g}from"./index-f1f749bf.js";import{S as yt}from"./SeparatorCircle-d21c9afb.js";import{P as rn}from"./ProgressBar-7f4e0ee3.js";import{D as xt}from"./Divider-e8bc3265.js";import{c as Me}from"./index-2e4736b8.js";import"./Reminder-a4c4f408.js";import"./NewsletterBlock-37d3f186.js";import"./NotFoundBlock-7dfe2c97.js";import"./Blockquote-342637d7.js";import{_ as xe}from"./SyntaxHighlighter-64dc7600.js";import{_ as b}from"./extends-98964cd2.js";import{p as o}from"./index-4d501b15.js";import{g as un}from"./assetHelper-cdd8887d.js";const bt=e=>y(Z,{...e,className:Me("container",e.className)});try{bt.displayName="Container",bt.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}}}}}catch{}const Ze=({title:e,excerpt:t,date:n,readingTime:r,authors:i,link:u={},hasMask:a,isRelated:l,...w})=>q(Z,{as:"article",className:Me("post-preview",{"post-preview--mask":a},{"post-preview--related":l}),...w,children:[y(At,{as:"h2",color:"amaranth",size:"s",mb:{xs:"xxs-3",md:"xxs"},children:a?e:y(Pt,{...u,children:e})}),y(pe,{size:"s",className:"post-preview__excerpt",children:t}),q(Z,{mt:{xs:"xs",md:"s"},textSize:"xs",children:[y(pe,{as:"span",children:n}),y(yt,{}),y(pe,{as:"span",children:r}),y(yt,{}),i.map((p,h)=>q(pe,{as:"span",children:[p,h!==i.length-1?" & ":""]},h))]})]});try{Ze.displayName="PostPreview",Ze.__docgenInfo={description:"",displayName:"PostPreview",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (ReactFragment & string) | (ReactPortal & string)"}},excerpt:{defaultValue:null,description:"",name:"excerpt",required:!0,type:{name:"ReactNode"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"ReactNode"}},readingTime:{defaultValue:null,description:"",name:"readingTime",required:!0,type:{name:"ReactNode"}},authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:"string[]"}},link:{defaultValue:{value:"{}"},description:"",name:"link",required:!1,type:{name:'AsProps<"a">'}},hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},isRelated:{defaultValue:null,description:"",name:"isRelated",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}}}}}catch{}const wt=({posts:e,pagination:t})=>q(Je,{children:[e.map((n,r)=>q(he.Fragment,{children:[y(Ze,{hasMask:Boolean(t&&r===e.length-1),...n}),e.length-1!==r&&y(xt,{my:"m",bg:"light-grey"}),e.length-1===r&&t&&y(xt,{size:"m",my:"m",mx:{md:"xl"},bg:"azure"})]},r)),t&&y(Je,{children:q(en,{flexDirection:"column",justifyContent:"center",alignItems:"center",children:[y(pe,{size:"s",children:t.textNumberOfPosts}),y(rn,{mt:"xxs",value:t.numberOfPosts,max:t.maxNumberOfPosts}),y(tn,{my:"s",onClick:t.onLoadMore,children:t.loadMoreButtonLabel})]})})]});try{wt.displayName="PostPreviewList",wt.__docgenInfo={description:"",displayName:"PostPreviewList",props:{posts:{defaultValue:null,description:"",name:"posts",required:!0,type:{name:"PostPreviewProps[]"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"{ textNumberOfPosts: ReactNode; numberOfPosts: number; maxNumberOfPosts: number; loadMoreButtonLabel: ReactNode; onLoadMore: () => void; }"}}}}}catch{}var Mt={},an={get exports(){return Mt},set exports(e){Mt=e}},I={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=60103,We=60106,Ce=60107,Oe=60108,Ee=60114,Re=60109,Ve=60110,Ae=60112,Pe=60113,nt=60120,ke=60115,De=60116,Dt=60121,Nt=60122,Ft=60117,Lt=60129,Tt=60131;if(typeof Symbol=="function"&&Symbol.for){var R=Symbol.for;qe=R("react.element"),We=R("react.portal"),Ce=R("react.fragment"),Oe=R("react.strict_mode"),Ee=R("react.profiler"),Re=R("react.provider"),Ve=R("react.context"),Ae=R("react.forward_ref"),Pe=R("react.suspense"),nt=R("react.suspense_list"),ke=R("react.memo"),De=R("react.lazy"),Dt=R("react.block"),Nt=R("react.server.block"),Ft=R("react.fundamental"),Lt=R("react.debug_trace_mode"),Tt=R("react.legacy_hidden")}function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qe:switch(e=e.type,e){case Ce:case Ee:case Oe:case Pe:case nt:return e;default:switch(e=e&&e.$$typeof,e){case Ve:case Ae:case De:case ke:case Re:return e;default:return t}}case We:return t}}}var on=Re,ln=qe,sn=Ae,dn=Ce,cn=De,fn=ke,gn=We,mn=Ee,pn=Oe,hn=Pe;I.ContextConsumer=Ve;I.ContextProvider=on;I.Element=ln;I.ForwardRef=sn;I.Fragment=dn;I.Lazy=cn;I.Memo=fn;I.Portal=gn;I.Profiler=mn;I.StrictMode=pn;I.Suspense=hn;I.isAsyncMode=function(){return!1};I.isConcurrentMode=function(){return!1};I.isContextConsumer=function(e){return W(e)===Ve};I.isContextProvider=function(e){return W(e)===Re};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qe};I.isForwardRef=function(e){return W(e)===Ae};I.isFragment=function(e){return W(e)===Ce};I.isLazy=function(e){return W(e)===De};I.isMemo=function(e){return W(e)===ke};I.isPortal=function(e){return W(e)===We};I.isProfiler=function(e){return W(e)===Ee};I.isStrictMode=function(e){return W(e)===Oe};I.isSuspense=function(e){return W(e)===Pe};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===Ee||e===Lt||e===Oe||e===Pe||e===nt||e===Tt||typeof e=="object"&&e!==null&&(e.$$typeof===De||e.$$typeof===ke||e.$$typeof===Re||e.$$typeof===Ve||e.$$typeof===Ae||e.$$typeof===Ft||e.$$typeof===Dt||e[0]===Nt)};I.typeOf=W;(function(e){e.exports=I})(an);let St=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Ct=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ge=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return Ct(n.overflowY,t)||Ct(n.overflowX,t)||(r=>{let i=(u=>{if(!u.ownerDocument||!u.ownerDocument.defaultView)return null;try{return u.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!i&&(i.clientHeight<r.scrollHeight||i.clientWidth<r.scrollWidth)})(e)}return!1},Le=(e,t,n,r,i,u,a,l)=>u<e&&a>t||u>e&&a<t?0:u<=e&&l<=n||a>=t&&l>=n?u-e-r:a>t&&l<n||u<e&&l>n?a-t+i:0,vn=e=>{let t=e.parentElement;return t??(e.getRootNode().host||null)};var In=(e,t)=>{var n,r,i,u,a,l;if(typeof document>"u")return[];let{scrollMode:w,block:p,inline:h,boundary:S,skipOverflowHiddenElements:v}=t,d=typeof S=="function"?S:Y=>Y!==S;if(!St(e))throw new TypeError("Invalid target");let V=document.scrollingElement||document.documentElement,N=[],O=e;for(;St(O)&&d(O);){if(O=vn(O),O===V){N.push(O);break}O!=null&&O===document.body&&Ge(O)&&!Ge(document.documentElement)||O!=null&&Ge(O,v)&&N.push(O)}let H=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,_=(u=(i=window.visualViewport)==null?void 0:i.height)!=null?u:innerHeight,F=(a=window.scrollX)!=null?a:pageXOffset,C=(l=window.scrollY)!=null?l:pageYOffset,{height:j,width:L,top:x,right:ee,bottom:E,left:A}=e.getBoundingClientRect(),P=p==="start"||p==="nearest"?x:p==="end"?E:x+j/2,k=h==="center"?A+L/2:h==="end"?ee:A,re=[];for(let Y=0;Y<N.length;Y++){let M=N[Y],{height:ie,width:ue,top:ae,right:ve,bottom:Ie,left:oe}=M.getBoundingClientRect();if(w==="if-needed"&&x>=0&&A>=0&&E<=_&&ee<=H&&x>=ae&&E<=Ie&&A>=oe&&ee<=ve)return re;let le=getComputedStyle(M),se=parseInt(le.borderLeftWidth,10),de=parseInt(le.borderTopWidth,10),ce=parseInt(le.borderRightWidth,10),fe=parseInt(le.borderBottomWidth,10),c=0,s=0,f="offsetWidth"in M?M.offsetWidth-M.clientWidth-se-ce:0,m="offsetHeight"in M?M.offsetHeight-M.clientHeight-de-fe:0,$="offsetWidth"in M?M.offsetWidth===0?0:ue/M.offsetWidth:0,D="offsetHeight"in M?M.offsetHeight===0?0:ie/M.offsetHeight:0;if(V===M)c=p==="start"?P:p==="end"?P-_:p==="nearest"?Le(C,C+_,_,de,fe,C+P,C+P+j,j):P-_/2,s=h==="start"?k:h==="center"?k-H/2:h==="end"?k-H:Le(F,F+H,H,se,ce,F+k,F+k+L,L),c=Math.max(0,c+C),s=Math.max(0,s+F);else{c=p==="start"?P-ae-de:p==="end"?P-Ie+fe+m:p==="nearest"?Le(ae,Ie,ie,de,fe+m,P,P+j,j):P-(ae+ie/2)+m/2,s=h==="start"?k-oe-se:h==="center"?k-(oe+ue/2)+f/2:h==="end"?k-ve+ce+f:Le(oe,ve,ue,se,ce+f,k,k+L,L);let{scrollLeft:K,scrollTop:B}=M;c=Math.max(0,Math.min(B+c/D,M.scrollHeight-ie/D+m)),s=Math.max(0,Math.min(K+s/$,M.scrollWidth-ue/$+f)),P+=B-c,k+=K-s}re.push({el:M,top:c,left:s})}return re},$e=function(){return $e=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},$e.apply(this,arguments)},yn=0;function rt(){}function xn(e,t){if(e){var n=In(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(r){var i=r.el,u=r.top,a=r.left;i.scrollTop=u,i.scrollLeft=a})}}function Ot(e,t,n){var r=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return r}function Ht(e,t){var n;function r(){n&&clearTimeout(n)}function i(){for(var u=arguments.length,a=new Array(u),l=0;l<u;l++)a[l]=arguments[l];r(),n=setTimeout(function(){n=null,e.apply(void 0,a)},t)}return i.cancel=r,i}function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var i=arguments.length,u=new Array(i>1?i-1:0),a=1;a<i;a++)u[a-1]=arguments[a];return t.some(function(l){return l&&l.apply(void 0,[r].concat(u)),r.preventDownshiftDefault||r.hasOwnProperty("nativeEvent")&&r.nativeEvent.preventDownshiftDefault})}}function Te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){t.forEach(function(i){typeof i=="function"?i(r):i&&(i.current=r)})}}function bn(){return String(yn++)}function wn(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function et(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=_t(t,r)?t[r]:e[r],n},{})}function _t(e,t){return e[t]!==void 0}function Mn(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function He(e,t,n,r,i){if(i===void 0&&(i=!0),n===0)return-1;var u=n-1;(typeof t!="number"||t<0||t>=n)&&(t=e>0?-1:u+1);var a=t+e;a<0?a=i?u:0:a>u&&(a=i?0:u);var l=Se(e,a,n,r,i);return l===-1?t>=n?-1:t:l}function Se(e,t,n,r,i){var u=r(t);if(!u||!u.hasAttribute("disabled"))return t;if(e>0){for(var a=t+1;a<n;a++)if(!r(a).hasAttribute("disabled"))return a}else for(var l=t-1;l>=0;l--)if(!r(l).hasAttribute("disabled"))return l;return i?e>0?Se(1,0,n,r,!1):Se(-1,n-1,n,r,!1):-1}function Et(e,t,n,r){return r===void 0&&(r=!0),t.some(function(i){return i&&(Ot(i,e,n)||r&&Ot(i,n.document.activeElement,n))})}var Sn=Ht(function(e){$t(e).textContent=""},500);function Cn(e,t){var n=$t(t);e&&(n.textContent=e,Sn(t))}function $t(e){e===void 0&&(e=document);var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var On=["isInitialMount","highlightedIndex","items","environment"],Kt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function En(e,t,n){var r=e.props,i=e.type,u={};Object.keys(t).forEach(function(a){Rn(a,e,t,n),n[a]!==t[a]&&(u[a]=n[a])}),r.onStateChange&&Object.keys(u).length&&r.onStateChange(b({type:i},u))}function Rn(e,t,n,r){var i=t.props,u=t.type,a="on"+it(e)+"Change";i[a]&&r[e]!==void 0&&r[e]!==n[e]&&i[a](b({type:u},r))}function Vn(e,t){return t.changes}function An(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var Pn=Ht(function(e,t){Cn(e(),t)},200),kn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?g.useLayoutEffect:g.useEffect;function Dn(e){var t=e.id,n=t===void 0?"downshift-"+bn():t,r=e.labelId,i=e.menuId,u=e.getItemId,a=e.toggleButtonId,l=e.inputId,w=g.useRef({labelId:r||n+"-label",menuId:i||n+"-menu",getItemId:u||function(p){return n+"-item-"+p},toggleButtonId:a||n+"-toggle-button",inputId:l||n+"-input"});return w.current}function Nn(e,t,n){return e!==void 0?e:n.length===0?-1:n.indexOf(t)}function Fn(e){return e?String(e):""}function it(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function Bt(e){var t=g.useRef(e);return t.current=e,t}function Ln(e,t,n){var r=g.useRef(),i=g.useRef(),u=g.useCallback(function(v,d){i.current=d,v=et(v,d.props);var V=e(v,d),N=d.props.stateReducer(v,b({},d,{changes:V}));return N},[e]),a=g.useReducer(u,t),l=a[0],w=a[1],p=Bt(n),h=g.useCallback(function(v){return w(b({props:p.current},v))},[p]),S=i.current;return g.useEffect(function(){S&&r.current&&r.current!==l&&En(S,et(r.current,S.props),l),r.current=l},[l,n,S]),[l,h]}var be={itemToString:Fn,stateReducer:Vn,getA11ySelectionMessage:An,scrollIntoView:xn,environment:typeof window>"u"?{}:window};function T(e,t,n){n===void 0&&(n=Kt);var r=e["default"+it(t)];return r!==void 0?r:n[t]}function _e(e,t,n){n===void 0&&(n=Kt);var r=e[t];if(r!==void 0)return r;var i=e["initial"+it(t)];return i!==void 0?i:T(e,t,n)}function Tn(e){var t=_e(e,"selectedItem"),n=_e(e,"isOpen"),r=_e(e,"highlightedIndex"),i=_e(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:i}}function we(e,t,n){var r=e.items,i=e.initialHighlightedIndex,u=e.defaultHighlightedIndex,a=t.selectedItem,l=t.highlightedIndex;return r.length===0?-1:i!==void 0&&l===i?i:u!==void 0?u:a?r.indexOf(a):n===0?-1:n<0?r.length-1:0}function Hn(e,t,n,r){var i=g.useRef({isMouseDown:!1,isTouchMove:!1});return g.useEffect(function(){if((n==null?void 0:n.addEventListener)!=null){var u=function(){i.current.isMouseDown=!0},a=function(S){i.current.isMouseDown=!1,e&&!Et(S.target,t.map(function(v){return v.current}),n)&&r()},l=function(){i.current.isTouchMove=!1},w=function(){i.current.isTouchMove=!0},p=function(S){e&&!i.current.isTouchMove&&!Et(S.target,t.map(function(v){return v.current}),n,!1)&&r()};return n.addEventListener("mousedown",u),n.addEventListener("mouseup",a),n.addEventListener("touchstart",l),n.addEventListener("touchmove",w),n.addEventListener("touchend",p),function(){n.removeEventListener("mousedown",u),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",l),n.removeEventListener("touchmove",w),n.removeEventListener("touchend",p)}}},[e,n]),i}var _n=function(){return rt};function Rt(e,t,n){var r=n.isInitialMount,i=n.highlightedIndex,u=n.items,a=n.environment,l=xe(n,On);g.useEffect(function(){r||Pn(function(){return e(b({highlightedIndex:i,highlightedItem:u[i],resultCount:u.length},l))},a.document)},t)}function $n(e){var t=e.highlightedIndex,n=e.isOpen,r=e.itemRefs,i=e.getItemNodeFromIndex,u=e.menuElement,a=e.scrollIntoView,l=g.useRef(!0);return kn(function(){t<0||!n||!Object.keys(r.current).length||(l.current===!1?l.current=!0:a(i(t),u))},[t]),l}var Kn=rt;function Bn(e,t,n){var r=t.type,i=t.props,u;switch(r){case n.ItemMouseMove:u={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:u={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:u={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:we(i,e,0)};break;case n.FunctionOpenMenu:u={isOpen:!0,highlightedIndex:we(i,e,0)};break;case n.FunctionCloseMenu:u={isOpen:!1};break;case n.FunctionSetHighlightedIndex:u={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:u={inputValue:t.inputValue};break;case n.FunctionReset:u={highlightedIndex:T(i,"highlightedIndex"),isOpen:T(i,"isOpen"),selectedItem:T(i,"selectedItem"),inputValue:T(i,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return b({},e,u)}o.array.isRequired,o.func,o.func,o.func,o.number,o.number,o.number,o.bool,o.bool,o.bool,o.any,o.any,o.any,o.string,o.string,o.string,o.func,o.string,o.func,o.func,o.func,o.func,o.func,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});function qn(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}$e($e({},be),{getA11yStatusMessage:qn});var ut=0,at=1,ot=2,lt=3,st=4,dt=5,ct=6,ft=7,gt=8,Ke=9,mt=10,qt=11,Wt=12,pt=13,jt=14,zt=15,Ut=16,Yt=17,Xt=18,ht=19,Gt=20,Qt=21,vt=22,Jt=Object.freeze({__proto__:null,InputKeyDownArrowDown:ut,InputKeyDownArrowUp:at,InputKeyDownEscape:ot,InputKeyDownHome:lt,InputKeyDownEnd:st,InputKeyDownPageUp:dt,InputKeyDownPageDown:ct,InputKeyDownEnter:ft,InputChange:gt,InputBlur:Ke,InputFocus:mt,MenuMouseLeave:qt,ItemMouseMove:Wt,ItemClick:pt,ToggleButtonClick:jt,FunctionToggleMenu:zt,FunctionOpenMenu:Ut,FunctionCloseMenu:Yt,FunctionSetHighlightedIndex:Xt,FunctionSelectItem:ht,FunctionSetInputValue:Gt,FunctionReset:Qt,ControlledPropUpdatedSelectedItem:vt});function Wn(e){var t=Tn(e),n=t.selectedItem,r=t.inputValue;return r===""&&n&&e.defaultInputValue===void 0&&e.initialInputValue===void 0&&e.inputValue===void 0&&(r=e.itemToString(n)),b({},t,{inputValue:r})}o.array.isRequired,o.func,o.func,o.func,o.number,o.number,o.number,o.bool,o.bool,o.bool,o.any,o.any,o.any,o.string,o.string,o.string,o.string,o.string,o.string,o.func,o.string,o.string,o.func,o.func,o.func,o.func,o.func,o.func,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});function jn(e,t,n){var r=g.useRef(),i=Ln(e,t,n),u=i[0],a=i[1];return g.useEffect(function(){_t(n,"selectedItem")&&(r.current!==n.selectedItem&&a({type:vt,inputValue:n.itemToString(n.selectedItem)}),r.current=u.selectedItem===r.current?n.selectedItem:u.selectedItem)}),[et(u,n),a]}var zn=rt,Un=b({},be,{getA11yStatusMessage:wn});function Yn(e,t){var n=t.type,r=t.props,i=t.altKey,u;switch(n){case pt:u={isOpen:T(r,"isOpen"),highlightedIndex:T(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case ut:e.isOpen?u={highlightedIndex:He(1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,!0)}:u={highlightedIndex:i&&e.selectedItem==null?-1:we(r,e,1,t.getItemNodeFromIndex),isOpen:r.items.length>=0};break;case at:e.isOpen?i?u=b({isOpen:T(r,"isOpen"),highlightedIndex:T(r,"highlightedIndex")},e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])}):u={highlightedIndex:He(-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,!0)}:u={highlightedIndex:we(r,e,-1,t.getItemNodeFromIndex),isOpen:r.items.length>=0};break;case ft:u=b({isOpen:T(r,"isOpen"),highlightedIndex:T(r,"highlightedIndex")},e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case ot:u=b({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case dt:u={highlightedIndex:He(-10,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,!1)};break;case ct:u={highlightedIndex:He(10,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,!1)};break;case lt:u={highlightedIndex:Se(1,0,r.items.length,t.getItemNodeFromIndex,!1)};break;case st:u={highlightedIndex:Se(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)};break;case Ke:u=b({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case gt:u={isOpen:!0,highlightedIndex:T(r,"highlightedIndex"),inputValue:t.inputValue};break;case mt:u={isOpen:!0,highlightedIndex:we(r,e,0)};break;case ht:u={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)};break;case vt:u={inputValue:t.inputValue};break;default:return Bn(e,t,Jt)}return b({},e,u)}var Xn=["onMouseLeave","refKey","ref"],Gn=["item","index","refKey","ref","onMouseMove","onMouseDown","onClick","onPress","disabled"],Qn=["onClick","onPress","refKey","ref"],Jn=["onKeyDown","onChange","onInput","onFocus","onBlur","onChangeText","refKey","ref"];Zt.stateChangeTypes=Jt;function Zt(e){e===void 0&&(e={}),zn();var t=b({},Un,e),n=t.initialIsOpen,r=t.defaultIsOpen,i=t.items,u=t.scrollIntoView,a=t.environment,l=t.getA11yStatusMessage,w=t.getA11ySelectionMessage,p=t.itemToString,h=Wn(t),S=jn(Yn,h,t),v=S[0],d=S[1],V=v.isOpen,N=v.highlightedIndex,O=v.selectedItem,H=v.inputValue,_=g.useRef(null),F=g.useRef({}),C=g.useRef(null),j=g.useRef(null),L=g.useRef(!0),x=Dn(t),ee=g.useRef(),E=Bt({state:v,props:t}),A=g.useCallback(function(c){return F.current[x.getItemId(c)]},[x]);Rt(l,[V,N,H,i],b({isInitialMount:L.current,previousResultCount:ee.current,items:i,environment:a,itemToString:p},v)),Rt(w,[O],b({isInitialMount:L.current,previousResultCount:ee.current,items:i,environment:a,itemToString:p},v));var P=$n({menuElement:_.current,highlightedIndex:N,isOpen:V,itemRefs:F,scrollIntoView:u,getItemNodeFromIndex:A});Kn({isInitialMount:L.current,props:t,state:v}),g.useEffect(function(){var c=n||r||V;c&&C.current&&C.current.focus()},[]),g.useEffect(function(){L.current||(ee.current=i.length)});var k=Hn(V,[C,_,j],a,function(){d({type:Ke,selectItem:!1})}),re=_n();g.useEffect(function(){return L.current=!1,function(){L.current=!0}},[]),g.useEffect(function(){var c;if(!V)F.current={};else if(((c=a.document)==null?void 0:c.activeElement)!==C.current){var s;C==null||(s=C.current)==null||s.focus()}},[V,a]);var Y=g.useMemo(function(){return{ArrowDown:function(s){s.preventDefault(),d({type:ut,altKey:s.altKey,getItemNodeFromIndex:A})},ArrowUp:function(s){s.preventDefault(),d({type:at,altKey:s.altKey,getItemNodeFromIndex:A})},Home:function(s){E.current.state.isOpen&&(s.preventDefault(),d({type:lt,getItemNodeFromIndex:A}))},End:function(s){E.current.state.isOpen&&(s.preventDefault(),d({type:st,getItemNodeFromIndex:A}))},Escape:function(s){var f=E.current.state;(f.isOpen||f.inputValue||f.selectedItem||f.highlightedIndex>-1)&&(s.preventDefault(),d({type:ot}))},Enter:function(s){var f=E.current.state;!f.isOpen||s.which===229||(s.preventDefault(),d({type:ft,getItemNodeFromIndex:A}))},PageUp:function(s){E.current.state.isOpen&&(s.preventDefault(),d({type:dt,getItemNodeFromIndex:A}))},PageDown:function(s){E.current.state.isOpen&&(s.preventDefault(),d({type:ct,getItemNodeFromIndex:A}))}}},[d,E,A]),M=g.useCallback(function(c){return b({id:x.labelId,htmlFor:x.inputId},c)},[x]),ie=g.useCallback(function(c,s){var f,m=c===void 0?{}:c,$=m.onMouseLeave,D=m.refKey,K=D===void 0?"ref":D,B=m.ref,te=xe(m,Xn),G=s===void 0?{}:s;return G.suppressRefError,b((f={},f[K]=Te(B,function(Q){_.current=Q}),f.id=x.menuId,f.role="listbox",f["aria-labelledby"]=x.labelId,f.onMouseLeave=X($,function(){d({type:qt})}),f),te)},[d,re,x]),ue=g.useCallback(function(c){var s,f,m=c===void 0?{}:c,$=m.item,D=m.index,K=m.refKey,B=K===void 0?"ref":K,te=m.ref,G=m.onMouseMove,Q=m.onMouseDown,je=m.onClick;m.onPress;var ge=m.disabled,ze=xe(m,Gn),z=E.current,Ue=z.props,Ne=z.state,me=Nn(D,$,Ue.items);if(me<0)throw new Error("Pass either item or item index in getItemProps!");var Ye="onClick",Xe=je,Fe=function(){D!==Ne.highlightedIndex&&(P.current=!1,d({type:Wt,index:D,disabled:ge}))},J=function(){d({type:pt,index:D})},ne=function(ye){return ye.preventDefault()};return b((s={},s[B]=Te(te,function(U){U&&(F.current[x.getItemId(me)]=U)}),s.disabled=ge,s.role="option",s["aria-selected"]=""+(me===Ne.highlightedIndex),s.id=x.getItemId(me),s),!ge&&(f={},f[Ye]=X(Xe,J),f),{onMouseMove:X(G,Fe),onMouseDown:X(Q,ne)},ze)},[d,E,P,x]),ae=g.useCallback(function(c){var s,f=c===void 0?{}:c,m=f.onClick;f.onPress;var $=f.refKey,D=$===void 0?"ref":$,K=f.ref,B=xe(f,Qn),te=E.current.state,G=function(){d({type:jt})};return b((s={},s[D]=Te(K,function(Q){j.current=Q}),s["aria-controls"]=x.menuId,s["aria-expanded"]=te.isOpen,s.id=x.toggleButtonId,s.tabIndex=-1,s),!B.disabled&&b({},{onClick:X(m,G)}),B)},[d,E,x]),ve=g.useCallback(function(c,s){var f,m=c===void 0?{}:c,$=m.onKeyDown,D=m.onChange,K=m.onInput,B=m.onFocus,te=m.onBlur;m.onChangeText;var G=m.refKey,Q=G===void 0?"ref":G,je=m.ref,ge=xe(m,Jn),ze=s===void 0?{}:s;ze.suppressRefError;var z=E.current.state,Ue=function(U){var ye=Mn(U);ye&&Y[ye]&&Y[ye](U)},Ne=function(U){d({type:gt,inputValue:U.target.value})},me=function(){z.isOpen&&!k.current.isMouseDown&&d({type:Ke,selectItem:!0})},Ye=function(){z.isOpen||d({type:mt})},Xe="onChange",Fe={};if(!ge.disabled){var J;Fe=(J={},J[Xe]=X(D,K,Ne),J.onKeyDown=X($,Ue),J.onBlur=X(te,me),J.onFocus=X(B,Ye),J)}return b((f={},f[Q]=Te(je,function(ne){C.current=ne}),f["aria-activedescendant"]=z.isOpen&&z.highlightedIndex>-1?x.getItemId(z.highlightedIndex):"",f["aria-autocomplete"]="list",f["aria-controls"]=x.menuId,f["aria-expanded"]=z.isOpen,f["aria-labelledby"]=x.labelId,f.autoComplete="off",f.id=x.inputId,f.role="combobox",f.value=z.inputValue,f),Fe,ge)},[d,Y,E,k,re,x]),Ie=g.useCallback(function(){d({type:zt})},[d]),oe=g.useCallback(function(){d({type:Yt})},[d]),le=g.useCallback(function(){d({type:Ut})},[d]),se=g.useCallback(function(c){d({type:Xt,highlightedIndex:c})},[d]),de=g.useCallback(function(c){d({type:ht,selectedItem:c})},[d]),ce=g.useCallback(function(c){d({type:Gt,inputValue:c})},[d]),fe=g.useCallback(function(){d({type:Qt})},[d]);return{getItemProps:ue,getLabelProps:M,getMenuProps:ie,getInputProps:ve,getToggleButtonProps:ae,toggleMenu:Ie,openMenu:le,closeMenu:oe,setHighlightedIndex:se,setInputValue:ce,selectItem:de,reset:fe,highlightedIndex:N,isOpen:V,selectedItem:O,inputValue:H}}function Zn(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}o.array,o.array,o.array,o.func,o.func,o.func,o.number,o.number,o.number,o.func,o.func,o.string,o.string,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});be.itemToString,be.stateReducer,be.environment;const Be=kt(({isOpen:e=!1,items:t,searchValue:n,searchLink:{label:r,...i}={},searchNotFound:u,highlightedIndex:a=0,...l},w)=>q(Z,{className:Me("autocomplete-result",l.className),ref:w,hidden:!e,children:[t.length>0&&q(Je,{children:[t.map(({title:p,description:h,...S},v)=>{const d=a===v;return y(he.Fragment,{children:q(Z,{...S,pt:{xs:"xxs"},pb:{xs:"xs"},px:{xs:"m"},className:Me("autocomplete-result__item",{"autocomplete-result__item--is-highlighted":d}),children:[y(It,{size:"s",text:p,textQuery:n}),y(It,{size:"xs",text:h,textQuery:n,hiddenBelow:"sm"})]})},v)}),i&&r&&y(Z,{pt:{xs:"s",md:"m"},pb:{xs:"m",md:"l"},textSize:"s",fontWeight:"medium",textAlign:"center",children:y(Pt,{...i,children:r})})]}),t.length===0&&u&&q(Z,{textAlign:"center",px:"xl",py:"m",children:[y("img",{src:un("/imgs/not-found.png"),alt:"not-found"}),y(At,{size:"m",mt:"s",children:u.title}),y(pe,{size:"xs",mt:"xxs",children:u.description})]})]}));Be.displayName="AutocompleteResult";try{Be.displayName="AutocompleteResult",Be.__docgenInfo={description:"",displayName:"AutocompleteResult",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As<any>) | ("object" & As<any>) | ("a" & As<any>) | ("abbr" & As<any>) | ("address" & As<any>) | ("area" & As<any>) | ("article" & As<any>) | ... 171 more ...'}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; } & AutocompleteItem)[]'}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},searchLink:{defaultValue:null,description:"",name:"searchLink",required:!1,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any>; } & { label: string; })'}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"{ title: string; description: string; }"}},highlightedIndex:{defaultValue:{value:"0"},description:"",name:"highlightedIndex",required:!1,type:{name:"number"}}}}}catch{}const tt=kt(({placeholder:e,defaultValue:t,items:n=[],searchLink:{label:r,...i},searchNotFound:u,onInputValueChange:a,onSelectedItemChange:l,...w},p)=>{const{getInputProps:h,getMenuProps:S,getItemProps:v,selectItem:d,toggleMenu:V,isOpen:N,inputValue:O,highlightedIndex:H}=Zt({defaultInputValue:t,onInputValueChange:a,onSelectedItemChange:l,items:n,itemToString:C=>C?C.title:""}),_=()=>d(null),F=he.useMemo(()=>n.map((C,j)=>({...C,...v({item:C,index:j})})),[n,v]);return q(Z,{className:Me("autocomplete-field",w.className),ref:p,children:[y(nn,{input:h({placeholder:e}),buttonSearch:i,buttonClose:{onClick:_},className:"autocomplete-field__input"}),y(Be,{isOpen:N&&O.length>0,...S(),items:F,highlightedIndex:H===-1?0:H,searchValue:O,searchLink:{label:r,...i,onClick:V},searchNotFound:u})]})});tt.displayName="AutocompleteField";try{tt.displayName="AutocompleteField",tt.__docgenInfo={description:"",displayName:"AutocompleteField",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As<any>) | ("object" & As<any>) | ("a" & As<any>) | ("abbr" & As<any>) | ("address" & As<any>) | ("area" & As<any>) | ("article" & As<any>) | ... 171 more ...'}},searchLink:{defaultValue:null,description:"",name:"searchLink",required:!0,type:{name:'Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; } & { label: string; }'}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"{ title: string; description: string; }"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any>; } & AutocompleteItem)[]'}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}}}}}catch{}const Qe={},er=e=>{const t=document.querySelector(`script[src="${e}"]`),n=t==null?void 0:t.getAttribute("data-status");return{node:t,status:n}},tr=(e,t)=>{const[n,r]=he.useState(()=>!e||t!=null&&t.shouldPreventLoad?"idle":typeof window>"u"?"loading":Qe[e]??"loading");return he.useEffect(()=>{if(!e||t!=null&&t.shouldPreventLoad)return;const i=Qe[e];if(i==="ready"||i==="error"){r(i);return}const u=er(e);let a=u.node;if(a)r(u.status??i??"loading");else{a=document.createElement("script"),a.src=e,a.async=!0,a.setAttribute("data-status","loading"),document.body.appendChild(a);const w=p=>{const h=p.type==="load"?"ready":"error";a==null||a.setAttribute("data-status",h)};a.addEventListener("load",w),a.addEventListener("error",w)}const l=w=>{const p=w.type==="load"?"ready":"error";r(p),Qe[e]=p};return a.addEventListener("load",l),a.addEventListener("error",l),()=>{a&&(a.removeEventListener("load",l),a.removeEventListener("error",l)),a&&(t!=null&&t.removeOnUnmount)&&a.remove()}},[e,t==null?void 0:t.shouldPreventLoad,t==null?void 0:t.removeOnUnmount]),n},Vt=e=>{const t=tr(e.src,{removeOnUnmount:!1});return he.useEffect(()=>{t==="ready"&&/twitter/.test(e.src)&&window.twttr.widgets.load()},[t,e.src]),null};try{Vt.displayName="Script",Vt.__docgenInfo={description:"",displayName:"Script",props:{}}}catch{}export{tt as A,bt as C,Ze as P,Vt as S,wt as a};
//# sourceMappingURL=Script-ba1cd576.js.map
