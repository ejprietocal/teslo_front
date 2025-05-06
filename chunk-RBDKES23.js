import{e as ae}from"./chunk-XEUE5Q3F.js";import{d as ie}from"./chunk-IELTSNR6.js";import{$a as Jt,Fa as qt,Ka as Kt,La as F,M as ft,N as Ut,Qa as ut,Ra as Zt,S as Gt,Sa as Qt,Y as Z,ja as Xt,qb as te,vb as ee,wb as ne}from"./chunk-F6KDSXUI.js";function wn(e,i,t){return(i=Cn(i))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function re(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?re(Object(t),!0).forEach(function(n){wn(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Sn(e,i){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,i||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function Cn(e){var i=Sn(e,"string");return typeof i=="symbol"?i:i+""}var se=()=>{},Lt={},Ne={},Me=null,Le={mark:se,measure:se};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(Ne=document),typeof MutationObserver<"u"&&(Me=MutationObserver),typeof performance<"u"&&(Le=performance)}catch{}var{userAgent:oe=""}=Lt.navigator||{},N=Lt,g=Ne,le=Me,Q=Le,Da=!!N.document,P=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",De=~oe.indexOf("MSIE")||~oe.indexOf("Trident/"),En=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,An=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ze={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},In={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Re=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],x="classic",at="duotone",kn="sharp",On="sharp-duotone",_e=[x,at,kn,On],Pn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Fn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Tn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Nn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Mn=["fak","fa-kit","fakd","fa-kit-duotone"],ce={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ln=["kit"],Dn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},zn=["fak","fakd"],Rn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},fe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_n=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Wn=["fak","fa-kit","fakd","fa-kit-duotone"],jn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Hn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},$n={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Bn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],bt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._n,...Bn],Yn=["solid","regular","light","thin","duotone","brands"],We=[1,2,3,4,5,6,7,8,9,10],Vn=We.concat([11,12,13,14,15,16,17,18,19,20]),Un=[...Object.keys($n),...Yn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY].concat(We.map(e=>"".concat(e,"x"))).concat(Vn.map(e=>"w-".concat(e))),Gn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},k="___FONT_AWESOME___",vt=16,je="fa",He="svg-inline--fa",z="data-fa-i2svg",xt="data-fa-pseudo-element",Xn="data-fa-pseudo-element-pending",Dt="data-prefix",zt="data-icon",ue="fontawesome-i2svg",qn="async",Kn=["HTML","HEAD","STYLE","SCRIPT"],$e=(()=>{try{return!0}catch{return!1}})();function q(e){return new Proxy(e,{get(i,t){return t in i?i[t]:i[x]}})}var Be=l({},ze);Be[x]=l(l(l(l({},{"fa-duotone":"duotone"}),ze[x]),ce.kit),ce["kit-duotone"]);var Zn=q(Be),wt=l({},Nn);wt[x]=l(l(l(l({},{duotone:"fad"}),wt[x]),fe.kit),fe["kit-duotone"]);var de=q(wt),St=l({},yt);St[x]=l(l({},St[x]),Rn.kit);var Rt=q(St),Ct=l({},Hn);Ct[x]=l(l({},Ct[x]),Dn.kit);var za=q(Ct),Qn=En,Ye="fa-layers-text",Jn=An,ti=l({},Pn),Ra=q(ti),ei=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=In,ni=[...Ln,...Un],V=N.FontAwesomeConfig||{};function ii(e){var i=g.querySelector("script["+e+"]");if(i)return i.getAttribute(e)}function ai(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(i=>{let[t,n]=i,a=ai(ii(t));a!=null&&(V[n]=a)});var Ve={styleDefault:"solid",familyDefault:x,cssPrefix:je,replacementClass:He,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var $=l(l({},Ve),V);$.autoReplaceSvg||($.observeMutations=!1);var d={};Object.keys(Ve).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(i){$[e]=i,U.forEach(t=>t(d))},get:function(){return $[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){$.cssPrefix=e,U.forEach(i=>i(d))},get:function(){return $.cssPrefix}});N.FontAwesomeConfig=d;var U=[];function ri(e){return U.push(e),()=>{U.splice(U.indexOf(e),1)}}var T=vt,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function si(e){if(!e||!P)return;let i=g.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=e;let t=g.head.childNodes,n=null;for(let a=t.length-1;a>-1;a--){let r=t[a],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=r)}return g.head.insertBefore(i,n),e}var oi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function G(){let e=12,i="";for(;e-- >0;)i+=oi[Math.random()*62|0];return i}function B(e){let i=[];for(let t=(e||[]).length>>>0;t--;)i[t]=e[t];return i}function _t(e){return e.classList?B(e.classList):(e.getAttribute("class")||"").split(" ").filter(i=>i)}function Ue(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function li(e){return Object.keys(e||{}).reduce((i,t)=>i+"".concat(t,'="').concat(Ue(e[t]),'" '),"").trim()}function rt(e){return Object.keys(e||{}).reduce((i,t)=>i+"".concat(t,": ").concat(e[t].trim(),";"),"")}function Wt(e){return e.size!==A.size||e.x!==A.x||e.y!==A.y||e.rotate!==A.rotate||e.flipX||e.flipY}function ci(e){let{transform:i,containerWidth:t,iconWidth:n}=e,a={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(i.x*32,", ").concat(i.y*32,") "),s="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),o="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(r," ").concat(s," ").concat(o)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:c,path:f}}function fi(e){let{transform:i,width:t=vt,height:n=vt,startCentered:a=!1}=e,r="";return a&&De?r+="translate(".concat(i.x/T-t/2,"em, ").concat(i.y/T-n/2,"em) "):a?r+="translate(calc(-50% + ".concat(i.x/T,"em), calc(-50% + ").concat(i.y/T,"em)) "):r+="translate(".concat(i.x/T,"em, ").concat(i.y/T,"em) "),r+="scale(".concat(i.size/T*(i.flipX?-1:1),", ").concat(i.size/T*(i.flipY?-1:1),") "),r+="rotate(".concat(i.rotate,"deg) "),r}var ui=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ge(){let e=je,i=He,t=d.cssPrefix,n=d.replacementClass,a=ui;if(t!==e||n!==i){let r=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(i),"g");a=a.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(o,".".concat(n))}return a}var me=!1;function mt(){d.autoAddCss&&!me&&(si(Ge()),me=!0)}var di={mixout(){return{dom:{css:Ge,insertCss:mt}}},hooks(){return{beforeDOMElementCreation(){mt()},beforeI2svg(){mt()}}}},O=N||{};O[k]||(O[k]={});O[k].styles||(O[k].styles={});O[k].hooks||(O[k].hooks={});O[k].shims||(O[k].shims=[]);var I=O[k],Xe=[],qe=function(){g.removeEventListener("DOMContentLoaded",qe),nt=1,Xe.map(e=>e())},nt=!1;P&&(nt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),nt||g.addEventListener("DOMContentLoaded",qe));function mi(e){P&&(nt?setTimeout(e,0):Xe.push(e))}function K(e){let{tag:i,attributes:t={},children:n=[]}=e;return typeof e=="string"?Ue(e):"<".concat(i," ").concat(li(t),">").concat(n.map(K).join(""),"</").concat(i,">")}function he(e,i,t){if(e&&e[i]&&e[i][t])return{prefix:i,iconName:t,icon:e[i][t]}}var hi=function(i,t){return function(n,a,r,s){return i.call(t,n,a,r,s)}},ht=function(i,t,n,a){var r=Object.keys(i),s=r.length,o=a!==void 0?hi(t,a):t,c,f,u;for(n===void 0?(c=1,u=i[r[0]]):(c=0,u=n);c<s;c++)f=r[c],u=o(u,i[f],f,i);return u};function pi(e){let i=[],t=0,n=e.length;for(;t<n;){let a=e.charCodeAt(t++);if(a>=55296&&a<=56319&&t<n){let r=e.charCodeAt(t++);(r&64512)==56320?i.push(((a&1023)<<10)+(r&1023)+65536):(i.push(a),t--)}else i.push(a)}return i}function Et(e){let i=pi(e);return i.length===1?i[0].toString(16):null}function gi(e,i){let t=e.length,n=e.charCodeAt(i),a;return n>=55296&&n<=56319&&t>i+1&&(a=e.charCodeAt(i+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function pe(e){return Object.keys(e).reduce((i,t)=>{let n=e[t];return!!n.icon?i[n.iconName]=n.icon:i[t]=n,i},{})}function At(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=t,a=pe(i);typeof I.hooks.addPack=="function"&&!n?I.hooks.addPack(e,pe(i)):I.styles[e]=l(l({},I.styles[e]||{}),a),e==="fas"&&At("fa",i)}var{styles:X,shims:yi}=I,Ke=Object.keys(Rt),bi=Ke.reduce((e,i)=>(e[i]=Object.keys(Rt[i]),e),{}),jt=null,Ze={},Qe={},Je={},tn={},en={};function vi(e){return~ni.indexOf(e)}function xi(e,i){let t=i.split("-"),n=t[0],a=t.slice(1).join("-");return n===e&&a!==""&&!vi(a)?a:null}var nn=()=>{let e=n=>ht(X,(a,r,s)=>(a[s]=ht(r,n,{}),a),{});Ze=e((n,a,r)=>(a[3]&&(n[a[3]]=r),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=r}),n)),Qe=e((n,a,r)=>(n[r]=r,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=r}),n)),en=e((n,a,r)=>{let s=a[2];return n[r]=r,s.forEach(o=>{n[o]=r}),n});let i="far"in X||d.autoFetchSvg,t=ht(yi,(n,a)=>{let r=a[0],s=a[1],o=a[2];return s==="far"&&!i&&(s="fas"),typeof r=="string"&&(n.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(n.unicodes[r.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});Je=t.names,tn=t.unicodes,jt=st(d.styleDefault,{family:d.familyDefault})};ri(e=>{jt=st(e.styleDefault,{family:d.familyDefault})});nn();function Ht(e,i){return(Ze[e]||{})[i]}function wi(e,i){return(Qe[e]||{})[i]}function D(e,i){return(en[e]||{})[i]}function an(e){return Je[e]||{prefix:null,iconName:null}}function Si(e){let i=tn[e],t=Ht("fas",e);return i||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function M(){return jt}var rn=()=>({prefix:null,iconName:null,rest:[]});function Ci(e){let i=x,t=Ke.reduce((n,a)=>(n[a]="".concat(d.cssPrefix,"-").concat(a),n),{});return _e.forEach(n=>{(e.includes(t[n])||e.some(a=>bi[n].includes(a)))&&(i=n)}),i}function st(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=x}=i,n=Zn[t][e];if(t===at&&!e)return"fad";let a=de[t][e]||de[t][n],r=e in I.styles?e:null;return a||r||null}function Ei(e){let i=[],t=null;return e.forEach(n=>{let a=xi(d.cssPrefix,n);a?t=a:n&&i.push(n)}),{iconName:t,rest:i}}function ge(e){return e.sort().filter((i,t,n)=>n.indexOf(i)===t)}function ot(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=i,n=null,a=bt.concat(Wn),r=ge(e.filter(m=>a.includes(m))),s=ge(e.filter(m=>!bt.includes(m))),o=r.filter(m=>(n=m,!Re.includes(m))),[c=null]=o,f=Ci(r),u=l(l({},Ei(s)),{},{prefix:st(c,{family:f})});return l(l(l({},u),Oi({values:e,family:f,styles:X,config:d,canonical:u,givenPrefix:n})),Ai(t,n,u))}function Ai(e,i,t){let{prefix:n,iconName:a}=t;if(e||!n||!a)return{prefix:n,iconName:a};let r=i==="fa"?an(a):{},s=D(n,a);return a=r.iconName||s||a,n=r.prefix||n,n==="far"&&!X.far&&X.fas&&!d.autoFetchSvg&&(n="fas"),{prefix:n,iconName:a}}var Ii=_e.filter(e=>e!==x||e!==at),ki=Object.keys(yt).filter(e=>e!==x).map(e=>Object.keys(yt[e])).flat();function Oi(e){let{values:i,family:t,canonical:n,givenPrefix:a="",styles:r={},config:s={}}=e,o=t===at,c=i.includes("fa-duotone")||i.includes("fad"),f=s.familyDefault==="duotone",u=n.prefix==="fad"||n.prefix==="fa-duotone";if(!o&&(c||f||u)&&(n.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Ii.includes(t)&&(Object.keys(r).find(h=>ki.includes(h))||s.autoFetchSvg)){let h=Tn.get(t).defaultShortPrefixId;n.prefix=h,n.iconName=D(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||a==="fa")&&(n.prefix=M()||"fas"),n}var It=class{constructor(){this.definitions={}}add(){for(var i=arguments.length,t=new Array(i),n=0;n<i;n++)t[n]=arguments[n];let a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(r=>{this.definitions[r]=l(l({},this.definitions[r]||{}),a[r]),At(r,a[r]);let s=Rt[x][r];s&&At(s,a[r]),nn()})}reset(){this.definitions={}}_pullDefinitions(i,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(a=>{let{prefix:r,iconName:s,icon:o}=n[a],c=o[2];i[r]||(i[r]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(i[r][f]=o)}),i[r][s]=o}),i}},ye=[],j={},H={},Pi=Object.keys(H);function Fi(e,i){let{mixoutsTo:t}=i;return ye=e,j={},Object.keys(H).forEach(n=>{Pi.indexOf(n)===-1&&delete H[n]}),ye.forEach(n=>{let a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(r=>{typeof a[r]=="function"&&(t[r]=a[r]),typeof a[r]=="object"&&Object.keys(a[r]).forEach(s=>{t[r]||(t[r]={}),t[r][s]=a[r][s]})}),n.hooks){let r=n.hooks();Object.keys(r).forEach(s=>{j[s]||(j[s]=[]),j[s].push(r[s])})}n.provides&&n.provides(H)}),t}function kt(e,i){for(var t=arguments.length,n=new Array(t>2?t-2:0),a=2;a<t;a++)n[a-2]=arguments[a];return(j[e]||[]).forEach(s=>{i=s.apply(null,[i,...n])}),i}function R(e){for(var i=arguments.length,t=new Array(i>1?i-1:0),n=1;n<i;n++)t[n-1]=arguments[n];(j[e]||[]).forEach(r=>{r.apply(null,t)})}function L(){let e=arguments[0],i=Array.prototype.slice.call(arguments,1);return H[e]?H[e].apply(null,i):void 0}function Ot(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:i}=e,t=e.prefix||M();if(i)return i=D(t,i)||i,he(sn.definitions,t,i)||he(I.styles,t,i)}var sn=new It,Ti=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,R("noAuto")},Ni={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(R("beforeI2svg",e),L("pseudoElements2svg",e),L("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:i}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,mi(()=>{Li({autoReplaceSvgRoot:i}),R("watch",e)})}},Mi={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:D(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=st(e[0]);return{prefix:t,iconName:D(t,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Qn))){let i=ot(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||M(),iconName:D(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){let i=M();return{prefix:i,iconName:D(i,e)||e}}}},S={noAuto:Ti,config:d,dom:Ni,parse:Mi,library:sn,findIconDefinition:Ot,toHtml:K},Li=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:i=g}=e;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&P&&d.autoReplaceSvg&&S.dom.i2svg({node:i})};function lt(e,i){return Object.defineProperty(e,"abstract",{get:i}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>K(t))}}),Object.defineProperty(e,"node",{get:function(){if(!P)return;let t=g.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Di(e){let{children:i,main:t,mask:n,attributes:a,styles:r,transform:s}=e;if(Wt(s)&&t.found&&!n.found){let{width:o,height:c}=t,f={x:o/c/2,y:.5};a.style=rt(l(l({},r),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:i}]}function zi(e){let{prefix:i,iconName:t,children:n,attributes:a,symbol:r}=e,s=r===!0?"".concat(i,"-").concat(d.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},a),{},{id:s}),children:n}]}]}function $t(e){let{icons:{main:i,mask:t},prefix:n,iconName:a,transform:r,symbol:s,title:o,maskId:c,titleId:f,extra:u,watchable:m=!1}=e,{width:h,height:p}=t.found?t:i,y=zn.includes(n),v=[d.replacementClass,a?"".concat(d.cssPrefix,"-").concat(a):""].filter(W=>u.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(u.classes).join(" "),w={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":n,"data-icon":a,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(p)})},C=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/p*16*.0625,"em")}:{};m&&(w.attributes[z]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||G())},children:[o]}),delete w.attributes.title);let b=l(l({},w),{},{prefix:n,iconName:a,main:i,mask:t,maskId:c,transform:r,symbol:s,styles:l(l({},C),u.styles)}),{children:E,attributes:_}=t.found&&i.found?L("generateAbstractMask",b)||{children:[],attributes:{}}:L("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=E,b.attributes=_,s?zi(b):Di(b)}function be(e){let{content:i,width:t,height:n,transform:a,title:r,extra:s,watchable:o=!1}=e,c=l(l(l({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(c[z]="");let f=l({},s.styles);Wt(a)&&(f.transform=fi({transform:a,startCentered:!0,width:t,height:n}),f["-webkit-transform"]=f.transform);let u=rt(f);u.length>0&&(c.style=u);let m=[];return m.push({tag:"span",attributes:c,children:[i]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function Ri(e){let{content:i,title:t,extra:n}=e,a=l(l(l({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),r=rt(n.styles);r.length>0&&(a.style=r);let s=[];return s.push({tag:"span",attributes:a,children:[i]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var{styles:pt}=I;function Pt(e){let i=e[0],t=e[1],[n]=e.slice(4),a=null;return Array.isArray(n)?a={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:n[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:i,height:t,icon:a}}var _i={found:!1,width:512,height:512};function Wi(e,i){!$e&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(i,'" is missing.'))}function Ft(e,i){let t=i;return i==="fa"&&d.styleDefault!==null&&(i=M()),new Promise((n,a)=>{if(t==="fa"){let r=an(e)||{};e=r.iconName||e,i=r.prefix||i}if(e&&i&&pt[i]&&pt[i][e]){let r=pt[i][e];return n(Pt(r))}Wi(e,i),n(l(l({},_i),{},{icon:d.showMissingIcons&&e?L("missingIconAbstract")||{}:{}}))})}var ve=()=>{},Tt=d.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:ve,measure:ve},Y='FA "6.7.2"',ji=e=>(Tt.mark("".concat(Y," ").concat(e," begins")),()=>on(e)),on=e=>{Tt.mark("".concat(Y," ").concat(e," ends")),Tt.measure("".concat(Y," ").concat(e),"".concat(Y," ").concat(e," begins"),"".concat(Y," ").concat(e," ends"))},Bt={begin:ji,end:on},tt=()=>{};function xe(e){return typeof(e.getAttribute?e.getAttribute(z):null)=="string"}function Hi(e){let i=e.getAttribute?e.getAttribute(Dt):null,t=e.getAttribute?e.getAttribute(zt):null;return i&&t}function $i(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function Bi(){return d.autoReplaceSvg===!0?et.replace:et[d.autoReplaceSvg]||et.replace}function Yi(e){return g.createElementNS("http://www.w3.org/2000/svg",e)}function Vi(e){return g.createElement(e)}function ln(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?Yi:Vi}=i;if(typeof e=="string")return g.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(r){n.setAttribute(r,e.attributes[r])}),(e.children||[]).forEach(function(r){n.appendChild(ln(r,{ceFn:t}))}),n}function Ui(e){let i=" ".concat(e.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var et={replace:function(e){let i=e[0];if(i.parentNode)if(e[1].forEach(t=>{i.parentNode.insertBefore(ln(t),i)}),i.getAttribute(z)===null&&d.keepOriginalSource){let t=g.createComment(Ui(i));i.parentNode.replaceChild(t,i)}else i.remove()},nest:function(e){let i=e[0],t=e[1];if(~_t(i).indexOf(d.replacementClass))return et.replace(e);let n=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let r=t[0].attributes.class.split(" ").reduce((s,o)=>(o===d.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});t[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",r.toNode.join(" "))}let a=t.map(r=>K(r)).join(`
`);i.setAttribute(z,""),i.innerHTML=a}};function we(e){e()}function cn(e,i){let t=typeof i=="function"?i:tt;if(e.length===0)t();else{let n=we;d.mutateApproach===qn&&(n=N.requestAnimationFrame||we),n(()=>{let a=Bi(),r=Bt.begin("mutate");e.map(a),r(),t()})}}var Yt=!1;function fn(){Yt=!0}function Nt(){Yt=!1}var it=null;function Se(e){if(!le||!d.observeMutations)return;let{treeCallback:i=tt,nodeCallback:t=tt,pseudoElementsCallback:n=tt,observeMutationsRoot:a=g}=e;it=new le(r=>{if(Yt)return;let s=M();B(r).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!xe(o.addedNodes[0])&&(d.searchPseudoElements&&n(o.target),i(o.target)),o.type==="attributes"&&o.target.parentNode&&d.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&xe(o.target)&&~ei.indexOf(o.attributeName))if(o.attributeName==="class"&&Hi(o.target)){let{prefix:c,iconName:f}=ot(_t(o.target));o.target.setAttribute(Dt,c||s),f&&o.target.setAttribute(zt,f)}else $i(o.target)&&t(o.target)})}),P&&it.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Gi(){it&&it.disconnect()}function Xi(e){let i=e.getAttribute("style"),t=[];return i&&(t=i.split(";").reduce((n,a)=>{let r=a.split(":"),s=r[0],o=r.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),t}function qi(e){let i=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",a=ot(_t(e));return a.prefix||(a.prefix=M()),i&&t&&(a.prefix=i,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=wi(a.prefix,e.innerText)||Ht(a.prefix,Et(e.innerText))),!a.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ki(e){let i=B(e.attributes).reduce((a,r)=>(a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a),{}),t=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return d.autoA11y&&(t?i["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(n||G()):(i["aria-hidden"]="true",i.focusable="false")),i}function Zi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ce(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:n,rest:a}=qi(e),r=Ki(e),s=kt("parseNodeAttributes",{},e),o=i.styleParser?Xi(e):[];return l({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:r}},s)}var{styles:Qi}=I;function un(e){let i=d.autoReplaceSvg==="nest"?Ce(e,{styleParser:!1}):Ce(e);return~i.extra.classes.indexOf(Ye)?L("generateLayersText",e,i):L("generateSvgReplacementMutation",e,i)}function Ji(){return[...Mn,...bt]}function Ee(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();let t=g.documentElement.classList,n=u=>t.add("".concat(ue,"-").concat(u)),a=u=>t.remove("".concat(ue,"-").concat(u)),r=d.autoFetchSvg?Ji():Re.concat(Object.keys(Qi));r.includes("fa")||r.push("fa");let s=[".".concat(Ye,":not([").concat(z,"])")].concat(r.map(u=>".".concat(u,":not([").concat(z,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=B(e.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),a("complete");else return Promise.resolve();let c=Bt.begin("onTree"),f=o.reduce((u,m)=>{try{let h=un(m);h&&u.push(h)}catch(h){$e||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,m)=>{Promise.all(f).then(h=>{cn(h,()=>{n("active"),n("complete"),a("pending"),typeof i=="function"&&i(),c(),u()})}).catch(h=>{c(),m(h)})})}function ta(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(e).then(t=>{t&&cn([t],i)})}function ea(e){return function(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(i||{}).icon?i:Ot(i||{}),{mask:a}=t;return a&&(a=(a||{}).icon?a:Ot(a||{})),e(n,l(l({},t),{},{mask:a}))}}var na=function(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=A,symbol:n=!1,mask:a=null,maskId:r=null,title:s=null,titleId:o=null,classes:c=[],attributes:f={},styles:u={}}=i;if(!e)return;let{prefix:m,iconName:h,icon:p}=e;return lt(l({type:"icon"},e),()=>(R("beforeDOMElementCreation",{iconDefinition:e,params:i}),d.autoA11y&&(s?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(o||G()):(f["aria-hidden"]="true",f.focusable="false")),$t({icons:{main:Pt(p),mask:a?Pt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:h,transform:l(l({},A),t),symbol:n,title:s,maskId:r,titleId:o,extra:{attributes:f,styles:u,classes:c}})))},ia={mixout(){return{icon:ea(na)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ee,e.nodeCallback=ta,e}}},provides(e){e.i2svg=function(i){let{node:t=g,callback:n=()=>{}}=i;return Ee(t,n)},e.generateSvgReplacementMutation=function(i,t){let{iconName:n,title:a,titleId:r,prefix:s,transform:o,symbol:c,mask:f,maskId:u,extra:m}=t;return new Promise((h,p)=>{Promise.all([Ft(n,s),f.iconName?Ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[v,w]=y;h([i,$t({icons:{main:v,mask:w},prefix:s,iconName:n,transform:o,symbol:c,maskId:u,title:a,titleId:r,extra:m,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(i){let{children:t,attributes:n,main:a,transform:r,styles:s}=i,o=rt(s);o.length>0&&(n.style=o);let c;return Wt(r)&&(c=L("generateAbstractTransformGrouping",{main:a,transform:r,containerWidth:a.width,iconWidth:a.width})),t.push(c||a.icon),{children:t,attributes:n}}}},aa={mixout(){return{layer(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=i;return lt({type:"layer"},()=>{R("beforeDOMElementCreation",{assembler:e,params:i});let n=[];return e(a=>{Array.isArray(a)?a.map(r=>{n=n.concat(r.abstract)}):n=n.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...t].join(" ")},children:n}]})}}}},ra={mixout(){return{counter(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:n=[],attributes:a={},styles:r={}}=i;return lt({type:"counter",content:e},()=>(R("beforeDOMElementCreation",{content:e,params:i}),Ri({content:e.toString(),title:t,extra:{attributes:a,styles:r,classes:["".concat(d.cssPrefix,"-layers-counter"),...n]}})))}}}},sa={mixout(){return{text(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=A,title:n=null,classes:a=[],attributes:r={},styles:s={}}=i;return lt({type:"text",content:e},()=>(R("beforeDOMElementCreation",{content:e,params:i}),be({content:e,transform:l(l({},A),t),title:n,extra:{attributes:r,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(i,t){let{title:n,transform:a,extra:r}=t,s=null,o=null;if(De){let c=parseInt(getComputedStyle(i).fontSize,10),f=i.getBoundingClientRect();s=f.width/c,o=f.height/c}return d.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([i,be({content:i.innerHTML,width:s,height:o,transform:a,title:n,extra:r,watchable:!0})])}}},oa=new RegExp('"',"ug"),Ae=[1105920,1112319],Ie=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Fn),Gn),jn),Mt=Object.keys(Ie).reduce((e,i)=>(e[i.toLowerCase()]=Ie[i],e),{}),la=Object.keys(Mt).reduce((e,i)=>{let t=Mt[i];return e[i]=t[900]||[...Object.entries(t)][0][1],e},{});function ca(e){let i=e.replace(oa,""),t=gi(i,0),n=t>=Ae[0]&&t<=Ae[1],a=i.length===2?i[0]===i[1]:!1;return{value:Et(a?i[0]:i),isSecondary:n||a}}function fa(e,i){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(i),a=isNaN(n)?"normal":n;return(Mt[t]||{})[a]||la[t]}function ke(e,i){let t="".concat(Xn).concat(i.replace(":","-"));return new Promise((n,a)=>{if(e.getAttribute(t)!==null)return n();let s=B(e.children).filter(h=>h.getAttribute(xt)===i)[0],o=N.getComputedStyle(e,i),c=o.getPropertyValue("font-family"),f=c.match(Jn),u=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(s&&!f)return e.removeChild(s),n();if(f&&m!=="none"&&m!==""){let h=o.getPropertyValue("content"),p=fa(c,u),{value:y,isSecondary:v}=ca(h),w=f[0].startsWith("FontAwesome"),C=Ht(p,y),b=C;if(w){let E=Si(y);E.iconName&&E.prefix&&(C=E.iconName,p=E.prefix)}if(C&&!v&&(!s||s.getAttribute(Dt)!==p||s.getAttribute(zt)!==b)){e.setAttribute(t,b),s&&e.removeChild(s);let E=Zi(),{extra:_}=E;_.attributes[xt]=i,Ft(C,p).then(W=>{let vn=$t(l(l({},E),{},{icons:{main:W,mask:rn()},prefix:p,iconName:b,extra:_,watchable:!0})),ct=g.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?e.insertBefore(ct,e.firstChild):e.appendChild(ct),ct.outerHTML=vn.map(xn=>K(xn)).join(`
`),e.removeAttribute(t),n()}).catch(a)}else n()}else n()})}function ua(e){return Promise.all([ke(e,"::before"),ke(e,"::after")])}function da(e){return e.parentNode!==document.head&&!~Kn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(xt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oe(e){if(P)return new Promise((i,t)=>{let n=B(e.querySelectorAll("*")).filter(da).map(ua),a=Bt.begin("searchPseudoElements");fn(),Promise.all(n).then(()=>{a(),Nt(),i()}).catch(()=>{a(),Nt(),t()})})}var ma={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Oe,e}}},provides(e){e.pseudoElements2svg=function(i){let{node:t=g}=i;d.searchPseudoElements&&Oe(t)}}},Pe=!1,ha={mixout(){return{dom:{unwatch(){fn(),Pe=!0}}}},hooks(){return{bootstrap(){Se(kt("mutationObserverCallbacks",{}))},noAuto(){Gi()},watch(e){let{observeMutationsRoot:i}=e;Pe?Nt():Se(kt("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Fe=e=>{let i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,n)=>{let a=n.toLowerCase().split("-"),r=a[0],s=a.slice(1).join("-");if(r&&s==="h")return t.flipX=!0,t;if(r&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(r){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},i)},pa={mixout(){return{parse:{transform:e=>Fe(e)}}},hooks(){return{parseNodeAttributes(e,i){let t=i.getAttribute("data-fa-transform");return t&&(e.transform=Fe(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(i){let{main:t,transform:n,containerWidth:a,iconWidth:r}=i,s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")},h={outer:s,inner:u,path:m};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:l(l({},t.icon.attributes),h.path)}]}]}}}},gt={x:0,y:0,width:"100%",height:"100%"};function Te(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||i)&&(e.attributes.fill="black"),e}function ga(e){return e.tag==="g"?e.children:[e]}var ya={hooks(){return{parseNodeAttributes(e,i){let t=i.getAttribute("data-fa-mask"),n=t?ot(t.split(" ").map(a=>a.trim())):rn();return n.prefix||(n.prefix=M()),e.mask=n,e.maskId=i.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(i){let{children:t,attributes:n,main:a,mask:r,maskId:s,transform:o}=i,{width:c,icon:f}=a,{width:u,icon:m}=r,h=ci({transform:o,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:l(l({},gt),{},{fill:"white"})},y=f.children?{children:f.children.map(Te)}:{},v={tag:"g",attributes:l({},h.inner),children:[Te(l({tag:f.tag,attributes:l(l({},f.attributes),h.path)},y))]},w={tag:"g",attributes:l({},h.outer),children:[v]},C="mask-".concat(s||G()),b="clip-".concat(s||G()),E={tag:"mask",attributes:l(l({},gt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,w]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:ga(m)},E]};return t.push(_,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(C,")")},gt)}),{children:t,attributes:n}}}},ba={provides(e){let i=!1;N.matchMedia&&(i=N.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:l(l({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=l(l({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||s.children.push({tag:"animate",attributes:l(l({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},r),{},{values:"1;0;1;1;0;1;"})}),t.push(s),t.push({tag:"path",attributes:l(l({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:l(l({},r),{},{values:"1;0;0;0;0;1;"})}]}),i||t.push({tag:"path",attributes:l(l({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},va={hooks(){return{parseNodeAttributes(e,i){let t=i.getAttribute("data-fa-symbol"),n=t===null?!1:t===""?!0:t;return e.symbol=n,e}}}},xa=[di,ia,aa,ra,sa,ma,ha,pa,ya,ba,va];Fi(xa,{mixoutsTo:S});var _a=S.noAuto,dn=S.config,Wa=S.library,mn=S.dom,hn=S.parse,ja=S.findIconDefinition,Ha=S.toHtml,pn=S.icon,$a=S.layer,wa=S.text,Sa=S.counter;var Ca=["*"],Ea=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},Aa=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},yn=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),Ia=e=>{let i=yn(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:i,"fa-rotate-by":e.rotate!=null&&!i,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(n=>t[n]?n:null).filter(n=>n)},Vt=new WeakSet,gn="fa-auto-css";function ka(e,i){if(!i.autoAddCss||Vt.has(e))return;if(e.getElementById(gn)!=null){i.autoAddCss=!1,Vt.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",gn),t.innerHTML=mn.css();let n=e.head.childNodes,a=null;for(let r=n.length-1;r>-1;r--){let s=n[r],o=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=s)}e.head.insertBefore(t,a),i.autoAddCss=!1,Vt.add(e)}var Oa=e=>e.prefix!==void 0&&e.iconName!==void 0,Pa=(e,i)=>Oa(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:i,iconName:e},Fa=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(t){dn.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ta=(()=>{class e{constructor(){this.definitions={}}addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let a of n.icon[2])typeof a=="string"&&(this.definitions[n.prefix][a]=n)}}addIconPacks(...t){for(let n of t){let a=Object.keys(n).map(r=>n[r]);this.addIcons(...a)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Na=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=Qt({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Z]})}}return e})(),Ma=(()=>{class e{constructor(t,n){this.renderer=t,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}static{this.\u0275fac=function(n){return new(n||e)(F(Kt),F(Xt))}}static{this.\u0275cmp=ut({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Z],ngContentSelectors:Ca,decls:1,vars:0,template:function(n,a){n&1&&(ee(),ne(0))},encapsulation:2})}}return e})(),rr=(()=>{class e{constructor(t,n,a,r,s){this.sanitizer=t,this.config=n,this.iconLibrary=a,this.stackItem=r,this.document=Gt(ie),s!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){Aa();return}if(t){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let a=this.buildParams();ka(this.document,this.config);let r=pn(n,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(t){let n=Pa(t,this.config.defaultPrefix);if("icon"in n)return n;let a=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return a??(Ea(n),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?hn.transform(this.transform):this.transform,a={};return t.rotate!=null&&!yn(t.rotate)&&(a["--fa-rotate-angle"]=`${t.rotate}`),{title:this.title,transform:n,classes:Ia(t),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:a}}static{this.\u0275fac=function(n){return new(n||e)(F(ae),F(Fa),F(Ta),F(Na,8),F(Ma,8))}}static{this.\u0275cmp=ut({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,a){n&2&&(te("innerHTML",a.renderedIconHTML,qt),Jt("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[Z],decls:0,vars:0,template:function(n,a){},encapsulation:2})}}return e})();var sr=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=Zt({type:e})}static{this.\u0275inj=Ut({})}}return e})();var La=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let a=n.trim().split(" ");for(let r=0;r<a.length;r++)t.classList.add(a[r])}else{let a=n.split(" ");for(let r=0;r<a.length;r++)t.className+=" "+a[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(a=>a.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,a=0;for(var r=0;r<n.length;r++){if(n[r]==t)return a;n[r].nodeType==1&&a++}return-1}static indexWithinGroup(t,n){let a=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<a.length;s++){if(a[s]==t)return r;a[s].attributes&&a[s].attributes[n]&&a[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,a="self"){a!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,a="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),a==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,a=!0){let r=b=>{if(b)return getComputedStyle(b).getPropertyValue("position")==="relative"?b:r(b.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),o=n.offsetHeight,c=n.getBoundingClientRect(),f=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),m=this.getViewport(),p=r(t)?.getBoundingClientRect()||{top:-1*f,left:-1*u},y,v;c.top+o+s.height>m.height?(y=c.top-p.top-s.height,t.style.transformOrigin="bottom",c.top+y<0&&(y=-1*c.top)):(y=o+c.top-p.top,t.style.transformOrigin="top");let w=c.left+s.width-m.width,C=c.left-p.left;s.width>m.width?v=(c.left-p.left)*-1:w>0?v=C-w:v=c.left-p.left,t.style.top=y+"px",t.style.left=v+"px",a&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,a=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,o=r.width,c=n.offsetHeight,f=n.offsetWidth,u=n.getBoundingClientRect(),m=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),y,v;u.top+c+s>p.height?(y=u.top+m-s,t.style.transformOrigin="bottom",y<0&&(y=m)):(y=c+u.top+m,t.style.transformOrigin="top"),u.left+o>p.width?v=Math.max(0,u.left+h+f-o):v=u.left+h,t.style.top=y+"px",t.style.left=v+"px",a&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let a=this.getParents(t),r=/(auto|scroll)/,s=o=>{let c=window.getComputedStyle(o,null);return r.test(c.getPropertyValue("overflow"))||r.test(c.getPropertyValue("overflowX"))||r.test(c.getPropertyValue("overflowY"))};for(let o of a){let c=o.nodeType===1&&o.dataset.scrollselectors;if(c){let f=c.split(",");for(let u of f){let m=this.findSingle(o,u);m&&s(m)&&n.push(m)}}o.nodeType!==9&&s(o)&&n.push(o)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let a=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=a?parseFloat(a):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),o=s?parseFloat(s):0,c=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-r-o,m=t.scrollTop,h=t.clientHeight,p=this.getOuterHeight(n);u<0?t.scrollTop=m+u:u+p>h&&(t.scrollTop=m+u-h+p)}static fadeIn(t,n){t.style.opacity=0;let a=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-a)/n,t.style.opacity=r,a=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var a=1,r=50,s=n,o=r/s;let c=setInterval(()=>{a=a-o,a<=0&&(a=0,clearInterval(c)),t.style.opacity=a},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var a=Element.prototype,r=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let a=t.offsetWidth;if(n){let r=getComputedStyle(t);a+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return a}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,a=getComputedStyle(t);return n+=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight),n}static width(t){let n=t.offsetWidth,a=getComputedStyle(t);return n-=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,a=getComputedStyle(t);return n+=parseFloat(a.paddingTop)+parseFloat(a.paddingBottom),n}static getOuterHeight(t,n){let a=t.offsetHeight;if(n){let r=getComputedStyle(t);a+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return a}static getHeight(t){let n=t.offsetHeight,a=getComputedStyle(t);return n-=parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)+parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,a=getComputedStyle(t);return n-=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight)+parseFloat(a.borderLeftWidth)+parseFloat(a.borderRightWidth),n}static getViewport(){let t=window,n=document,a=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||a.clientWidth||r.clientWidth,o=t.innerHeight||a.clientHeight||r.clientHeight;return{width:s,height:o}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let a=t.parentNode;if(!a)throw"Can't replace element";return a.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var a=t.indexOf("Trident/");if(a>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let a=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=a,a}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,a){t[n].apply(t,a)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let a=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of a){let o=getComputedStyle(s);this.isVisible(s)&&o.display!="none"&&o.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let a=this.findSingle(t,this.getFocusableSelectorString(n));if(a){let r=getComputedStyle(a);if(this.isVisible(a)&&r.display!="none"&&r.visibility!="hidden")return a}return null}static getFirstFocusableElement(t,n=""){let a=this.getFocusableElements(t,n);return a.length>0?a[0]:null}static getLastFocusableElement(t,n){let a=this.getFocusableElements(t,n);return a.length>0?a[a.length-1]:null}static getNextFocusableElement(t,n=!1){let a=e.getFocusableElements(t),r=0;if(a&&a.length>0){let s=a.indexOf(a[0].ownerDocument.activeElement);n?s==-1||s===0?r=a.length-1:r=s-1:s!=-1&&s!==a.length-1&&(r=s+1)}return a[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let a=typeof t;if(a==="string")return document.querySelector(t);if(a==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let a=t.getAttribute(n);return isNaN(a)?a==="true"||a==="false"?a==="true":a:+a}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...a){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...a),r}}static setAttribute(t,n="",a){this.isElement(t)&&a!==null&&a!==void 0&&t.setAttribute(n,a)}static setAttributes(t,n={}){if(this.isElement(t)){let a=(r,s)=>{let o=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((c,f)=>{if(f!=null){let u=typeof f;if(u==="string"||u==="number")c.push(f);else if(u==="object"){let m=Array.isArray(f)?a(r,f):Object.entries(f).map(([h,p])=>r==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);c=m.length?c.concat(m.filter(h=>!!h)):c}}return c},o)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let o=r.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(a("class",s))].join(" ").trim():r==="style"?a("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),bn=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=La.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};export{La as a,bn as b,rr as c,sr as d};
