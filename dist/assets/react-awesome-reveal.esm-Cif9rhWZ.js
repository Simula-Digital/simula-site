import{a3 as Jn,v as Ve,r as _,$ as $e}from"./index-j2bBgTE7.js";function Xn(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function Yn(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var Zn=(function(){function e(t){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Yn(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Xn(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)}),this.tags=[],this.ctr=0},e})(),N="-ms-",fe="-moz-",g="-webkit-",jn="comm",Ie="rule",je="decl",Qn="@import",Rn="@keyframes",et="@layer",nt=Math.abs,ue=String.fromCharCode,tt=Object.assign;function rt(e,n){return j(e,0)^45?(((n<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}function Nn(e){return e.trim()}function at(e,n){return(e=n.exec(e))?e[0]:e}function b(e,n,t){return e.replace(n,t)}function xe(e,n){return e.indexOf(n)}function j(e,n){return e.charCodeAt(n)|0}function Q(e,n,t){return e.slice(n,t)}function T(e){return e.length}function Re(e){return e.length}function re(e,n){return n.push(e),e}function it(e,n){return e.map(n).join("")}var le=1,H=1,An=0,V=0,C=0,J="";function de(e,n,t,r,a,i,s){return{value:e,root:n,parent:t,type:r,props:a,children:i,line:le,column:H,length:s,return:""}}function Y(e,n){return tt(de("",null,null,"",null,null,0),e,{length:-e.length},n)}function st(){return C}function ot(){return C=V>0?j(J,--V):0,H--,C===10&&(H=1,le--),C}function M(){return C=V<An?j(J,V++):0,H++,C===10&&(H=1,le++),C}function z(){return j(J,V)}function se(){return V}function te(e,n){return Q(J,e,n)}function ee(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pn(e){return le=H=1,An=T(J=e),V=0,[]}function Vn(e){return J="",e}function oe(e){return Nn(te(V-1,Ce(e===91?e+2:e===40?e+1:e)))}function ct(e){for(;(C=z())&&C<33;)M();return ee(e)>2||ee(C)>3?"":" "}function ft(e,n){for(;--n&&M()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return te(e,se()+(n<6&&z()==32&&M()==32))}function Ce(e){for(;M();)switch(C){case e:return V;case 34:case 39:e!==34&&e!==39&&Ce(C);break;case 40:e===41&&Ce(e);break;case 92:M();break}return V}function ut(e,n){for(;M()&&e+C!==57;)if(e+C===84&&z()===47)break;return"/*"+te(n,V-1)+"*"+ue(e===47?e:M())}function lt(e){for(;!ee(z());)M();return te(e,V)}function dt(e){return Vn(ce("",null,null,null,[""],e=Pn(e),0,[0],e))}function ce(e,n,t,r,a,i,s,o,u){for(var f=0,l=0,p=s,P=0,k=0,S=0,y=1,$=1,d=1,h=0,E="",L=a,R=i,I=r,w=E;$;)switch(S=h,h=M()){case 40:if(S!=108&&j(w,p-1)==58){xe(w+=b(oe(h),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:w+=oe(h);break;case 9:case 10:case 13:case 32:w+=ct(S);break;case 92:w+=ft(se()-1,7);continue;case 47:switch(z()){case 42:case 47:re(pt(ut(M(),se()),n,t),u);break;default:w+="/"}break;case 123*y:o[f++]=T(w)*d;case 125*y:case 59:case 0:switch(h){case 0:case 125:$=0;case 59+l:d==-1&&(w=b(w,/\f/g,"")),k>0&&T(w)-p&&re(k>32?Le(w+";",r,t,p-1):Le(b(w," ","")+";",r,t,p-2),u);break;case 59:w+=";";default:if(re(I=Me(w,n,t,f,l,a,o,E,L=[],R=[],p),i),h===123)if(l===0)ce(w,n,I,I,L,i,p,o,R);else switch(P===99&&j(w,3)===110?100:P){case 100:case 108:case 109:case 115:ce(e,I,I,r&&re(Me(e,I,I,0,0,a,o,E,a,L=[],p),R),a,R,p,o,r?L:R);break;default:ce(w,I,I,I,[""],R,0,o,R)}}f=l=k=0,y=d=1,E=w="",p=s;break;case 58:p=1+T(w),k=S;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&ot()==125)continue}switch(w+=ue(h),h*y){case 38:d=l>0?1:(w+="\f",-1);break;case 44:o[f++]=(T(w)-1)*d,d=1;break;case 64:z()===45&&(w+=oe(M())),P=z(),l=p=T(E=w+=lt(se())),h++;break;case 45:S===45&&T(w)==2&&(y=0)}}return i}function Me(e,n,t,r,a,i,s,o,u,f,l){for(var p=a-1,P=a===0?i:[""],k=Re(P),S=0,y=0,$=0;S<r;++S)for(var d=0,h=Q(e,p+1,p=nt(y=s[S])),E=e;d<k;++d)(E=Nn(y>0?P[d]+" "+h:b(h,/&\f/g,P[d])))&&(u[$++]=E);return de(e,n,t,a===0?Ie:o,u,f,l)}function pt(e,n,t){return de(e,n,t,jn,ue(st()),Q(e,2,-2),0)}function Le(e,n,t,r){return de(e,n,t,je,Q(e,0,r),Q(e,r+1,-1),r)}function K(e,n){for(var t="",r=Re(e),a=0;a<r;a++)t+=n(e[a],a,e,n)||"";return t}function mt(e,n,t,r){switch(e.type){case et:if(e.children.length)break;case Qn:case je:return e.return=e.return||e.value;case jn:return"";case Rn:return e.return=e.value+"{"+K(e.children,r)+"}";case Ie:e.value=e.props.join(",")}return T(t=K(e.children,r))?e.return=e.value+"{"+t+"}":""}function ht(e){var n=Re(e);return function(t,r,a,i){for(var s="",o=0;o<n;o++)s+=e[o](t,r,a,i)||"";return s}}function vt(e){return function(n){n.root||(n=n.return)&&e(n)}}var yt=function(n,t,r){for(var a=0,i=0;a=i,i=z(),a===38&&i===12&&(t[r]=1),!ee(i);)M();return te(n,V)},gt=function(n,t){var r=-1,a=44;do switch(ee(a)){case 0:a===38&&z()===12&&(t[r]=1),n[r]+=yt(V-1,t,r);break;case 2:n[r]+=oe(a);break;case 4:if(a===44){n[++r]=z()===58?"&\f":"",t[r]=n[r].length;break}default:n[r]+=ue(a)}while(a=M());return n},bt=function(n,t){return Vn(gt(Pn(n),t))},Te=new WeakMap,wt=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var t=n.value,r=n.parent,a=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&t.charCodeAt(0)!==58&&!Te.get(r))&&!a){Te.set(n,!0);for(var i=[],s=bt(t,i),o=r.props,u=0,f=0;u<s.length;u++)for(var l=0;l<o.length;l++,f++)n.props[f]=i[u]?s[u].replace(/&\f/g,o[l]):o[l]+" "+s[u]}}},Ot=function(n){if(n.type==="decl"){var t=n.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(n.return="",n.value="")}};function Mn(e,n){switch(rt(e,n)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+fe+e+N+e+e;case 6828:case 4268:return g+e+N+e+e;case 6165:return g+e+N+"flex-"+e+e;case 5187:return g+e+b(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return g+e+N+"flex-item-"+b(e,/flex-|-self/,"")+e;case 4675:return g+e+N+"flex-line-pack"+b(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+N+b(e,"shrink","negative")+e;case 5292:return g+e+N+b(e,"basis","preferred-size")+e;case 6060:return g+"box-"+b(e,"-grow","")+g+e+N+b(e,"grow","positive")+e;case 4554:return g+b(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-n>6)switch(j(e,n+1)){case 109:if(j(e,n+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+fe+(j(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~xe(e,"stretch")?Mn(b(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(j(e,n+1)!==115)break;case 6444:switch(j(e,T(e)-3-(~xe(e,"!important")&&10))){case 107:return b(e,":",":"+g)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+(j(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(j(e,n+11)){case 114:return g+e+N+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+N+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+N+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+N+e+e}return e}var $t=function(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case je:n.return=Mn(n.value,n.length);break;case Rn:return K([Y(n,{value:b(n.value,"@","@"+g)})],a);case Ie:if(n.length)return it(n.props,function(i){switch(at(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([Y(n,{props:[b(i,/:(read-\w+)/,":"+fe+"$1")]})],a);case"::placeholder":return K([Y(n,{props:[b(i,/:(plac\w+)/,":"+g+"input-$1")]}),Y(n,{props:[b(i,/:(plac\w+)/,":"+fe+"$1")]}),Y(n,{props:[b(i,/:(plac\w+)/,N+"input-$1")]})],a)}return""})}},xt=[$t],Ct=function(n){var t=n.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var $=y.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var a=n.stylisPlugins||xt,i={},s,o=[];s=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(y){for(var $=y.getAttribute("data-emotion").split(" "),d=1;d<$.length;d++)i[$[d]]=!0;o.push(y)});var u,f=[wt,Ot];{var l,p=[mt,vt(function(y){l.insert(y)})],P=ht(f.concat(a,p)),k=function($){return K(dt($),P)};u=function($,d,h,E){l=h,k($?$+"{"+d.styles+"}":d.styles),E&&(S.inserted[d.name]=!0)}}var S={key:t,sheet:new Zn({key:t,container:s,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:i,registered:{},insert:u};return S.sheet.hydrate(o),S},St=!0;function Ln(e,n,t){var r="";return t.split(" ").forEach(function(a){e[a]!==void 0?n.push(e[a]+";"):a&&(r+=a+" ")}),r}var Ne=function(n,t,r){var a=n.key+"-"+t.name;(r===!1||St===!1)&&n.registered[a]===void 0&&(n.registered[a]=t.styles)},Tn=function(n,t,r){Ne(n,t,r);var a=n.key+"-"+t.name;if(n.inserted[t.name]===void 0){var i=t;do n.insert(t===i?"."+a:"",i,n.sheet,!0),i=i.next;while(i!==void 0)}};function _t(e){for(var n=0,t,r=0,a=e.length;a>=4;++r,a-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var kt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et=/[A-Z]|^ms/g,It=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Fn=function(n){return n.charCodeAt(1)===45},Fe=function(n){return n!=null&&typeof n!="boolean"},ge=Jn(function(e){return Fn(e)?e:e.replace(Et,"-$&").toLowerCase()}),Be=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(It,function(r,a,i){return F={name:a,styles:i,next:F},a})}return kt[n]!==1&&!Fn(n)&&typeof t=="number"&&t!==0?t+"px":t};function ne(e,n,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return F={name:a.name,styles:a.styles,next:F},a.name;var i=t;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)F={name:s.name,styles:s.styles,next:F},s=s.next;var o=i.styles+";";return o}return jt(e,n,t)}case"function":{if(e!==void 0){var u=F,f=t(e);return F=u,ne(e,n,f)}break}}var l=t;if(n==null)return l;var p=n[l];return p!==void 0?p:l}function jt(e,n,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=ne(e,n,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object"){var o=s;n!=null&&n[o]!==void 0?r+=i+"{"+n[o]+"}":Fe(o)&&(r+=ge(i)+":"+Be(i,o)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(n==null||n[s[0]]===void 0))for(var u=0;u<s.length;u++)Fe(s[u])&&(r+=ge(i)+":"+Be(i,s[u])+";");else{var f=ne(e,n,s);switch(i){case"animation":case"animationName":{r+=ge(i)+":"+f+";";break}default:r+=i+"{"+f+"}"}}}return r}var ze=/label:\s*([^\s;{]+)\s*(;|$)/g,F;function Ae(e,n,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,a="";F=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,a+=ne(t,n,i);else{var s=i;a+=s[0]}for(var o=1;o<e.length;o++)if(a+=ne(t,n,e[o]),r){var u=i;a+=u[o]}ze.lastIndex=0;for(var f="",l;(l=ze.exec(a))!==null;)f+="-"+l[1];var p=_t(a)+f;return{name:p,styles:a,next:F}}var Rt=function(n){return n()},Nt=Ve.useInsertionEffect?Ve.useInsertionEffect:!1,Bn=Nt||Rt,zn=_.createContext(typeof HTMLElement<"u"?Ct({key:"css"}):null);zn.Provider;var Wn=function(n){return _.forwardRef(function(t,r){var a=_.useContext(zn);return n(t,a,r)})},Dn=_.createContext({}),pe={}.hasOwnProperty,Se="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Un=function(n,t){var r={};for(var a in t)pe.call(t,a)&&(r[a]=t[a]);return r[Se]=n,r},At=function(n){var t=n.cache,r=n.serialized,a=n.isStringTag;return Ne(t,r,a),Bn(function(){return Tn(t,r,a)}),null},Pt=Wn(function(e,n,t){var r=e.css;typeof r=="string"&&n.registered[r]!==void 0&&(r=n.registered[r]);var a=e[Se],i=[r],s="";typeof e.className=="string"?s=Ln(n.registered,i,e.className):e.className!=null&&(s=e.className+" ");var o=Ae(i,void 0,_.useContext(Dn));s+=n.key+"-"+o.name;var u={};for(var f in e)pe.call(e,f)&&f!=="css"&&f!==Se&&(u[f]=e[f]);return u.className=s,t&&(u.ref=t),_.createElement(_.Fragment,null,_.createElement(At,{cache:n,serialized:o,isStringTag:typeof a=="string"}),_.createElement(a,u))}),Gn=Pt,Z=function(n,t){var r=arguments;if(t==null||!pe.call(t,"css"))return _.createElement.apply(void 0,r);var a=r.length,i=new Array(a);i[0]=Gn,i[1]=Un(n,t);for(var s=2;s<a;s++)i[s]=r[s];return _.createElement.apply(null,i)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(Z||(Z={}));function me(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Ae(n)}function v(){var e=me.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Vt=function e(n){for(var t=n.length,r=0,a="";r<t;r++){var i=n[r];if(i!=null){var s=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))s=e(i);else{s="";for(var o in i)i[o]&&o&&(s&&(s+=" "),s+=o)}break}default:s=i}s&&(a&&(a+=" "),a+=s)}}return a};function Mt(e,n,t){var r=[],a=Ln(e,r,t);return r.length<2?t:a+n(r)}var Lt=function(n){var t=n.cache,r=n.serializedArr;return Bn(function(){for(var a=0;a<r.length;a++)Tn(t,r[a],!1)}),null},be=Wn(function(e,n){var t=[],r=function(){for(var u=arguments.length,f=new Array(u),l=0;l<u;l++)f[l]=arguments[l];var p=Ae(f,n.registered);return t.push(p),Ne(n,p,!1),n.key+"-"+p.name},a=function(){for(var u=arguments.length,f=new Array(u),l=0;l<u;l++)f[l]=arguments[l];return Mt(n.registered,r,Vt(f))},i={css:r,cx:a,theme:_.useContext(Dn)},s=e.children(i);return _.createElement(_.Fragment,null,_.createElement(Lt,{cache:n,serializedArr:t}),s)});function _e(){return _e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_e.apply(this,arguments)}function Tt(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,ke(e,n)}function ke(e,n){return ke=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},ke(e,n)}function Ft(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Ee=new Map,ae=new WeakMap,We=0,Bt=void 0;function zt(e){return e?(ae.has(e)||(We+=1,ae.set(e,We.toString())),ae.get(e)):"0"}function Wt(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?zt(e.root):e[n])}).toString()}function Dt(e){var n=Wt(e),t=Ee.get(n);if(!t){var r=new Map,a,i=new IntersectionObserver(function(s){s.forEach(function(o){var u,f=o.isIntersecting&&a.some(function(l){return o.intersectionRatio>=l});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=f),(u=r.get(o.target))==null||u.forEach(function(l){l(f,o)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:i,elements:r},Ee.set(n,t)}return t}function Ut(e,n,t,r){if(t===void 0&&(t={}),r===void 0&&(r=Bt),typeof window.IntersectionObserver>"u"&&r!==void 0){var a=e.getBoundingClientRect();return n(r,{isIntersecting:r,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=Dt(t),s=i.id,o=i.observer,u=i.elements,f=u.get(e)||[];return u.has(e)||u.set(e,f),f.push(n),o.observe(e),function(){f.splice(f.indexOf(n),1),f.length===0&&(u.delete(e),o.unobserve(e)),u.size===0&&(o.disconnect(),Ee.delete(s))}}var Gt=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function De(e){return typeof e.children!="function"}var q=(function(e){Tt(n,e);function n(r){var a;return a=e.call(this,r)||this,a.node=null,a._unobserveCb=null,a.handleNode=function(i){a.node&&(a.unobserve(),!i&&!a.props.triggerOnce&&!a.props.skip&&a.setState({inView:!!a.props.initialInView,entry:void 0})),a.node=i||null,a.observeNode()},a.handleChange=function(i,s){i&&a.props.triggerOnce&&a.unobserve(),De(a.props)||a.setState({inView:i,entry:s}),a.props.onChange&&a.props.onChange(i,s)},a.state={inView:!!r.initialInView,entry:void 0},a}var t=n.prototype;return t.componentDidUpdate=function(a){(a.rootMargin!==this.props.rootMargin||a.root!==this.props.root||a.threshold!==this.props.threshold||a.skip!==this.props.skip||a.trackVisibility!==this.props.trackVisibility||a.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},t.componentWillUnmount=function(){this.unobserve(),this.node=null},t.observeNode=function(){if(!(!this.node||this.props.skip)){var a=this.props,i=a.threshold,s=a.root,o=a.rootMargin,u=a.trackVisibility,f=a.delay,l=a.fallbackInView;this._unobserveCb=Ut(this.node,this.handleChange,{threshold:i,root:s,rootMargin:o,trackVisibility:u,delay:f},l)}},t.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},t.render=function(){if(!De(this.props)){var a=this.state,i=a.inView,s=a.entry;return this.props.children({inView:i,entry:s,ref:this.handleNode})}var o=this.props,u=o.children,f=o.as,l=Ft(o,Gt);return _.createElement(f||"div",_e({ref:this.handleNode},l),u)},n})(_.Component);q.displayName="InView";q.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var we={exports:{}},O={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function qt(){if(Ue)return O;Ue=1;var e=60103,n=60106,t=60107,r=60108,a=60114,i=60109,s=60110,o=60112,u=60113,f=60120,l=60115,p=60116,P=60121,k=60122,S=60117,y=60129,$=60131;if(typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;e=d("react.element"),n=d("react.portal"),t=d("react.fragment"),r=d("react.strict_mode"),a=d("react.profiler"),i=d("react.provider"),s=d("react.context"),o=d("react.forward_ref"),u=d("react.suspense"),f=d("react.suspense_list"),l=d("react.memo"),p=d("react.lazy"),P=d("react.block"),k=d("react.server.block"),S=d("react.fundamental"),y=d("react.debug_trace_mode"),$=d("react.legacy_hidden")}function h(c){if(typeof c=="object"&&c!==null){var U=c.$$typeof;switch(U){case e:switch(c=c.type,c){case t:case a:case r:case u:case f:return c;default:switch(c=c&&c.$$typeof,c){case s:case o:case p:case l:case i:return c;default:return U}}case n:return U}}}var E=i,L=e,R=o,I=t,w=p,X=l,W=n,x=a,D=r,G=u;return O.ContextConsumer=s,O.ContextProvider=E,O.Element=L,O.ForwardRef=R,O.Fragment=I,O.Lazy=w,O.Memo=X,O.Portal=W,O.Profiler=x,O.StrictMode=D,O.Suspense=G,O.isAsyncMode=function(){return!1},O.isConcurrentMode=function(){return!1},O.isContextConsumer=function(c){return h(c)===s},O.isContextProvider=function(c){return h(c)===i},O.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===e},O.isForwardRef=function(c){return h(c)===o},O.isFragment=function(c){return h(c)===t},O.isLazy=function(c){return h(c)===p},O.isMemo=function(c){return h(c)===l},O.isPortal=function(c){return h(c)===n},O.isProfiler=function(c){return h(c)===a},O.isStrictMode=function(c){return h(c)===r},O.isSuspense=function(c){return h(c)===u},O.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===t||c===a||c===y||c===r||c===u||c===f||c===$||typeof c=="object"&&c!==null&&(c.$$typeof===p||c.$$typeof===l||c.$$typeof===i||c.$$typeof===s||c.$$typeof===o||c.$$typeof===S||c.$$typeof===P||c[0]===k)},O.typeOf=h,O}var Ge;function Kt(){return Ge||(Ge=1,we.exports=qt()),we.exports}var Ht=Kt(),Jt=$e.Fragment,A=function(n,t,r){return pe.call(t,"css")?$e.jsx(Gn,Un(n,t),r):$e.jsx(n,t,r)};function B(){return B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B.apply(this,arguments)}function qn(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function m(e,n){return n||(n=e.slice(0)),e.raw=n,e}var qe,Pe=v(qe||(qe=m([`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Ke;function Oe(e){var n=e.duration,t=n===void 0?1e3:n,r=e.delay,a=r===void 0?0:r,i=e.timingFunction,s=i===void 0?"ease":i,o=e.keyframes,u=o===void 0?Pe:o,f=e.iterationCount,l=f===void 0?1:f;return me(Ke||(Ke=m([`
    animation-duration: `,`ms;
    animation-timing-function: `,`;
    animation-delay: `,`ms;
    animation-name: `,`;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: `,`;
  `])),t,s,a,u,l)}function Xt(e){return e==null}function Yt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}var He,Je,ie=me(He||(He=m([`
  opacity: 0;
`]))),Zt=me(Je||(Je=m([`
  display: inline-block;
  white-space: pre;
`]))),Kn=function e(n){var t=n.cascade,r=t===void 0?!1:t,a=n.damping,i=a===void 0?.5:a,s=n.delay,o=s===void 0?0:s,u=n.duration,f=u===void 0?1e3:u,l=n.fraction,p=l===void 0?0:l,P=n.keyframes,k=P===void 0?Pe:P,S=n.triggerOnce,y=S===void 0?!1:S,$=n.css,d=n.className,h=n.style,E=n.childClassName,L=n.childStyle,R=n.children,I=n.onVisibilityChange;if(Xt(R))return null;if(Yt(R)){var w=String(R);return r?A(q,{threshold:p,triggerOnce:y,onChange:I,children:function(W){var x=W.inView,D=W.ref;return A("div",{ref:D,css:[$,Zt],className:d,style:h,children:w.split("").map(function(G,c){return A("span",{css:x?Oe({keyframes:k,delay:o+c*f*i,duration:f}):ie,className:E,style:L,children:G},c)})})}}):A(e,{delay:o,duration:f,fraction:p,keyframes:k,triggerOnce:y,css:$,className:d,style:h,children:w})}return Ht.isFragment(R)?A(q,{threshold:p,triggerOnce:y,onChange:I,children:function(W){var x=W.inView,D=W.ref;return A("div",{ref:D,css:x?[$,Oe({keyframes:k,delay:o,duration:f})]:ie,className:d,style:h,children:R})}}):A(Jt,{children:_.Children.map(R,function(X,W){var x=X,D=x.props.css?[x.props.css]:[];switch(D.push(Oe({keyframes:k,delay:o+(r?W*f*i:0),duration:f})),x.type){case"ol":case"ul":return A(be,{children:function(c){var U=c.cx;return Z(x.type,B({},x.props,{className:U(d,x.props.className),style:B({},h,x.props.style)}),A(e,{cascade:r,damping:i,delay:o,duration:f,fraction:p,keyframes:k,triggerOnce:y,css:$,childClassName:E,childStyle:L,children:x.props.children}))}});case"li":return A(q,{threshold:p,triggerOnce:y,onChange:I,children:function(c){var U=c.inView,he=c.ref;return A(be,{children:function(ve){var ye=ve.cx;return Z(x.type,B({},x.props,{ref:he,css:U?[$].concat(D):ie,className:ye(E,x.props.className),style:B({},L,x.props.style)}))}})}});default:return A(q,{threshold:p,triggerOnce:y,onChange:I,children:function(c){var U=c.inView,he=c.ref;return A("div",{ref:he,css:U?[$].concat(D):ie,className:d,style:h,children:A(be,{children:function(ve){var ye=ve.cx;return Z(x.type,B({},x.props,{className:ye(E,x.props.className),style:B({},L,x.props.style)}))}})})}})}})})},Xe,Qt=v(Xe||(Xe=m([`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`]))),Ye,er=v(Ye||(Ye=m([`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Ze,nr=v(Ze||(Ze=m([`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Qe,tr=v(Qe||(Qe=m([`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),en,rr=v(en||(en=m([`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),nn,ar=v(nn||(nn=m([`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),tn,ir=v(tn||(tn=m([`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),rn,sr=v(rn||(rn=m([`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),an,or=v(an||(an=m([`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),sn,cr=v(sn||(sn=m([`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),on,fr=v(on||(on=m([`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),cn,ur=v(cn||(cn=m([`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),fn,lr=v(fn||(fn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`]))),un,dr=v(un||(un=m([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`]))),ln,pr=v(ln||(ln=m([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`]))),dn,mr=v(dn||(dn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`]))),pn,hr=v(pn||(pn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`]))),mn,vr=v(mn||(mn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`]))),hn,yr=v(hn||(hn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`]))),vn,gr=v(vn||(vn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`]))),yn,br=v(yn||(yn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`]))),gn,wr=v(gn||(gn=m([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`]))),bn,Or=v(bn||(bn=m([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`]))),wn,$r=v(wn||(wn=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`]))),On,xr=v(On||(On=m([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`]))),Cr=["big","direction","reverse"];function Sr(e,n,t){switch(t){case"bottom-left":return n?dr:er;case"bottom-right":return n?pr:nr;case"down":return e?n?hr:rr:n?mr:tr;case"left":return e?n?yr:ar:n?vr:Pe;case"right":return e?n?br:sr:n?gr:ir;case"top-left":return n?wr:or;case"top-right":return n?Or:cr;case"up":return e?n?xr:ur:n?$r:fr;default:return n?lr:Qt}}var Lr=function(n){var t=n.big,r=t===void 0?!1:t,a=n.direction,i=n.reverse,s=i===void 0?!1:i,o=qn(n,Cr);return A(Kn,B({keyframes:Sr(r,s,a)},o))},$n,_r=v($n||($n=m([`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`]))),xn,kr=v(xn||(xn=m([`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`]))),Cn,Er=v(Cn||(Cn=m([`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`]))),Sn,Ir=v(Sn||(Sn=m([`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`]))),_n,jr=v(_n||(_n=m([`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`]))),kn,Rr=v(kn||(kn=m([`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`]))),En,Nr=v(En||(En=m([`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`]))),In,Ar=v(In||(In=m([`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`]))),Pr=["direction","reverse"];function Vr(e,n){switch(n){case"down":return e?jr:_r;case"right":return e?Nr:Er;case"up":return e?Ar:Ir;case"left":default:return e?Rr:kr}}var Tr=function(n){var t=n.direction,r=n.reverse,a=r===void 0?!1:r,i=qn(n,Pr);return A(Kn,B({keyframes:Vr(a,t)},i))};export{Lr as F,Tr as S};
