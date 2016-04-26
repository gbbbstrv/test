// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 4
(function(w,g){w[g]=w[g]||{};})(window,'google_tag_manager');(function(){



var ya=this,za=function(){var a=YT.Player,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},Aa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ba=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Da=function(a){if(null==a)return String(a);var b=Ba.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ma=function(a){if(!a||"object"!=Da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ea(a,"constructor")&&!Ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ea(a,b)},Fa=function(a,b){var c=b||("array"==Da(a)?[]:{}),d;for(d in a)if(Ea(a,d)){var e=a[d];"array"==Da(e)?("array"!=Da(c[d])&&(c[d]=[]),c[d]=Fa(e,c[d])):ma(e)?(ma(c[d])||(c[d]={}),c[d]=Fa(e,c[d])):c[d]=e}return c};var qa=null,Ga=Math.random(),Ha=null,Ia=null,Ja={};var Ka,La,Ma,Na,Oa,Pa,Qa,Sa,Ua,Va,Wa,Xa,Q,Ya,Za,$a,ab,bb,cb,db,eb,fb,gb,ib,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Bb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,R,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,ad,bd,cd,dd,ed,hd,id,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,
ae,be,ce,de,ee,fe,ge,he,ie,je,ke,le,me,ne,oe,pe,qe,re,se,te,ue,ve,we,xe,ye,ze,Ae,Be,Ce,De,Ee,Fe,Ge,He,Ie,Je,Ke,Le,Me,Ne,Oe,Pe,Qe,Re,Se;
(function(){var a=function(a){return{toString:function(){return a}}};Ka=a("");La=a("");Ma="";Na=a("");Oa=a("");Pa=a("");Qa=a("");Sa=a("");Ua=a("");Va=a("");Wa=a("");Xa=a("0");Q=a("1");Ya=a("");Za=a("");$a=a("");
ab=a("");bb=a("");cb=a("");db=a("");eb=a("");fb=a("");gb=a("");ib=a("");kb=a("");lb=a("");mb=a("");nb=a("");ob=a("");pb=
a("");qb=a("");rb=a("");sb=a("");tb=a("");ub=a("");vb=a("");wb=a("2");xb=a("");yb=a("");zb=a("");Bb=a("");Db=a("");Eb=a("");Fb=a("");Gb=a("");Hb=a("");Ib=a("");
Jb=a("");Kb=a("");Lb=a("");Mb=a("");Nb=a("");Ob=a("");Pb=a("");Qb=a("");Rb=a("");Sb=a("");Tb=a("");Ub=a("");Vb=a("");Wb=a("");Xb=a("");Yb=a("");Zb=a("");
$b=a("");ac=a("");bc=a("");cc=a("");dc=a("");ec=a("");fc=a("");gc=a("");hc=a("");ic=a("");jc=a("");kc=a("");lc=a("");nc=a("");oc=a("");pc=a("");
qc=a("");rc=a("");sc=a("");tc=a("");uc=a("");vc=a("");wc=a("");xc=a("");yc=a("");zc=a("");Ac=a("3");Bc=a("");Cc=a("8");Dc=a("9");Ec=a("");Fc=a("4");R=a("");Gc=a("");
Hc=a("");Ic=a("");Jc=a("");Kc=a("5");Lc=a("");Mc=a("");Nc=a("");Oc=a("");Pc=a("");Qc=a("");Rc=a("");Sc=a("");Tc=a("");Uc=a("");Vc=a("");Wc=a("");Xc=a("");Yc=a("");Zc=a("");
$c=a("");ad=a("");bd=a("");cd=a("");dd=a("");ed=a("");hd=a("");id=a("");ld=a("");md=a("");nd=a("");od=a("");pd=a("");qd=a("");rd=a("");sd=a("");td=a("");ud=a("");vd=a("");
wd=a("");xd=a("");yd=a("");zd=a("");Ad=a("");Bd=a("");Cd=a("");Dd=a("");Ed=a("");Fd=a("");Gd=a("");Hd=a("");Id=a("");Jd=a("");Kd=a("");Ld=a("");Md=a("");Nd=a("");Od=a("");
Pd=a("");Qd=a("");Rd=a("");Sd=a("");Td=a("");Ud=a("");Vd=a("");Wd=a("");Xd=a("");Yd=a("");Zd=a("");$d=a("");ae=a("");be=a("");ce=a("");
de=a("7");ee=a("");fe=a("");ge=a("");he=a("");ie=a("");je=a("");ke=a("");le=a("");me=a("");ne=a("");oe=a("");pe=a("");qe=a("");re=a("");se=a("");te=a("");
ue=a("");ve=a("");we=a("");xe=a("");ye=a("");ze=a("");Ae=a("");Be="";Ce=a("");De=a("");Ee=a("");Fe=a("");Ge=a("");He=a("");Ie=a("");Je=a("");Ke=a("");
Le=a("");Me=a("");Ne=a("");Oe=a("");Pe=a("");Qe=a("");Re=a("");Se=a("")})();var Te=function(){},M=function(a){return"function"==typeof a},S=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ue=function(a){return"number"==Da(a)&&!isNaN(a)},Ve=function(a){return/^[0-9]+$/.test(a)},We=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Xe=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},N=function(a){return Math.round(Number(a))||0},oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ye=function(a){var b=[];if(S(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},L=function(){return new Date},Ze=function(a,b){if(!Ue(a)||!Ue(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},$e=function(){this.prefix="gtm.";this.values={}};$e.prototype.set=function(a,b){this.values[this.prefix+a]=b};$e.prototype.get=function(a){return this.values[this.prefix+a]};$e.prototype.contains=function(a){return void 0!==this.get(a)};
var af=function(a,b,c){try{if(!a[$c])return a[Ac](a,b||Te,c||Te);c&&c()}catch(d){}return!1},bf=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Xe(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},cf=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},df=function(a){for(var b=0;b<a.length;b++)a[b]()},ka=L().getTime(),na=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ef=function(a,
b,c){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=c},ff=function(a){return null!==a&&void 0!==a&&void 0!==a.length},la=function(a,b,c){if(!(b&&c&&ff(a)&&S(a)&&0!=a.length))return null;for(var d={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(c)&&(d[a[e][b]]=a[e][c]);return d},gf=function(a,b){0==b?a.Na=!0:a.complete=!0;var c=a.g;a.i&&(a.i.ka[c]=b);Ja[c]&&(Ja[c].state=b)},hf=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var A=window,P=document,rf=navigator,I=function(a,b,c){var d=A[a];A[a]=void 0===d||c?b:d;return A[a]},O=function(a,b,c,d){return(d||"http:"!=A.location.protocol?a:b)+c},sf=function(a){var b=P.getElementsByTagName("script")[0]||P.body||P.head;b.parentNode.insertBefore(a,b)},pa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},p=function(a,b,c){var d=P.createElement("script");d.type="text/javascript";
d.async=!0;d.src=a;pa(d,b);c&&(d.onerror=c);sf(d)},ha=function(a,b){var c=P.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";sf(c);pa(c,b);void 0!==a&&(c.src=a);return c},C=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},T=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},q=function(a){A.setTimeout(a,0)},sa=!1,
ta=[],tf=function(a){if(!sa){var b=P.createEventObject,c="complete"==P.readyState,d="interactive"==P.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){sa=!0;for(var e=0;e<ta.length;e++)ta[e]()}}},uf=0,vf=function(){if(!sa&&140>uf){uf++;try{P.documentElement.doScroll("left"),tf()}catch(a){A.setTimeout(vf,50)}}},xf=function(a){var b=P.getElementById(a);if(b&&wf(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(wf(document.all[a][c],"id")==a)return document.all[a][c];return b},wf=function(a,
b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},yf=function(a){return a.target||a.srcElement||{}},wa=function(a){var b=P.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},zf=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},Af=!1,Bf=[],
Cf=function(){if(!Af){Af=!0;for(var a=0;a<Bf.length;a++)Bf[a]()}},Df=function(a){a=a||A;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},ua=function(a){window.console&&window.console.log&&window.console.log(a)};var Ef=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||A.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||A.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:A.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var k=f.split("/");0<=We(d||[],k[k.length-
1])&&(k[k.length-1]="");f=k.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var m=f.split("&"),l=0;l<m.length;l++){var n=m[l].split("=");if(decodeURIComponent(n[0]).replace(/\+/g," ")==e){f=decodeURIComponent(n.slice(1).join("=")).replace(/\+/g," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ff=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},xa=function(a){var b=P.createElement("a");
a&&(b.href=a);return b};var ga=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ba=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=Ef(xa(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};var fa=function(a,b){p("//bat.bing.com/bat.js",a,b)},u=A,da=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]};var Gf=new $e,Hf={},Jf={set:function(a,b){Fa(If(a,b),Hf)},get:function(a){return H(a,2)},reset:function(){Gf=new $e;Hf={}}},H=function(a,b){if(2==b){for(var c=Hf,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Gf.get(a)},If=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Kf=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Lf={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Mf={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Nf=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Of=function(){var a=H("gtm.whitelist");
var b=a&&Nf(Ye(a),Lf),c=H("gtm.blacklist")||H("tagTypeBlacklist")||[];Kf.test(A.location&&A.location.hostname)&&(c=Ye(c),c.push("nonGooglePixels","nonGoogleScripts"));var d=c&&Nf(Ye(c),Mf),e={};return function(f){var g=f&&f[Ac];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)a:{if(0>We(b,g.a))if(g.b&&0<g.b.length)for(var k=0;k<g.b.length;k++){if(0>We(b,
g.b[k])){h=!1;break a}}else{h=!1;break a}h=!0}var m=!1;if(c){var l;if(!(l=0<=We(d,g.a)))a:{for(var n=g.b||[],r=new $e,t=0;t<d.length;t++)r.set(d[t],!0);for(t=0;t<n.length;t++)if(r.get(n[t])){l=!0;break a}l=!1}m=l}return e[g.a]=!h||m}};var jf=function(a){var b=P;return Pf?b.querySelectorAll(a):null},Qf=!1;if(P.querySelectorAll)try{var Rf=P.querySelectorAll(":root");Rf&&1==Rf.length&&Rf[0]==P.documentElement&&(Qf=!0)}catch(a){}var Pf=Qf;var _eu=function(a){var b=String(H("gtm.elementUrl")||a[Xb]||""),c=xa(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Ia};_e.a="e";_e.b=["google"];var Wf=/(^|\.)doubleclick\.net$/i,Xf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Yf=function(a){for(var b=String(P.cookie).split(";"),c=[],d=0;d<b.length;d++){var e=b[d].split("="),f=Xe(e[0]);if(f&&f==a){var g=Xe(e.slice(1).join("="));g&&(g=decodeURIComponent(g));c.push(g)}}return c},Zf=function(a,b,c,d,e){if(Wf.test(P.location.hostname)||"/"==c&&Xf.test(d))return!1;var f=a+"="+b+"; ";c&&(f+="path="+c+"; ");e&&(f+="expires="+e.toGMTString()+"; ");d&&(f+="domain="+d+";");var g=P.cookie;P.cookie=f;return g!=
P.cookie||0<=We(Yf(a),b)},$f=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},ag=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length},bg=function(){var a=Ef(A.location,"host",!0).split(".");if(4==a.length&&/^[0-9]*$/.exec(a[3]))return["none"];for(var b=[],c=a.length-2;0<=c;c--)b.push(a.slice(c).join("."));b.push("none");return b};var cg=function(a,b){this.f=a;this.j=b};cg.prototype.toString=function(){var a=""+this.f;1<this.j&&(a=a+"-"+this.j);return a};var dg=function(a,b){this.za=a;this.ba=b};dg.prototype.toString=function(){return""+this.ba+"."+this.za};var gg=function(a,b){var c=new eg(null,a,b);fg(c);return c},eg=function(a,b,c){this.Ga=Math.floor(L().getTime()/864E5);this.aa=b||"auto";this.T=c||"/";var d=$f(this.aa),e=ag(this.T);this.C=a||new cg(d,e);this.h=[];this.A=new $e},ig=function(a,b,c){b&&(""==c.za?hg(a,b):(a.A.contains(b)||a.h.push(b),a.A.set(b,c)))},jg=function(a,b){for(var c=0;c<b.length;c++)ig(a,b[c][0],b[c][1])},hg=function(a,b){var c=We(a.h,b);0<=c&&a.h.splice(c,1);a.A.set(b,void 0)},kg=function(a){for(var b=[],c=0;c<a.h.length;c++){var d=
a.h[c];b.push([d,a.A.get(d)])}return b},lg=function(a){for(var b=0,c=0;c<a.h.length;c++)b=Math.max(b,a.A.get(a.h[c]).ba);return 864E5*b};eg.prototype.toString=function(){if(0==this.h.length)return"";for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];a.push(""+c+"."+this.A.get(c).toString())}return"GAX1."+this.C.toString()+"."+a.join("!")};
var mg=function(a,b){for(var c=new Date,d=ag(a.T),e=[],f=0;f<a.h.length;f++){var g=a.h[f];a.A.get(g).ba<a.Ga&&e.push(g)}for(f=0;f<e.length;f++)hg(a,e[f]);if(a.h.length>(b||10))return!1;c.setTime(lg(a));if("auto"!=a.aa)return Zf("_gaexp",a.toString(),a.T,a.aa,c);for(var h=bg(),k=0;k<h.length;k++)if("none"!=h[k]&&(a.C=new cg($f(h[k]),d),Zf("_gaexp",a.toString(),a.T,h[k],c)))return!0;return!1},fg=function(a){for(var b=a.C.f,c=a.C.j,d=Yf("_gaexp"),e=[],f=0;f<d.length;f++){var g=ng(a,d[f]);g&&e.push(g)}hf(e,
function(a,d){var e=a.C,f=d.C;return e.f==f.f&&e.j==f.j?!1:e.f==b&&e.j==c?!0:f.f==b&&f.j==c?!1:e.f==b?f.f!=b||e.j<f.j:f.f==b?!1:e.j==c?f.f!=b&&(f.j!=c||e.f<f.f):f.j==c?!1:e.f<f.f||e.f==f.f&&e.j<f.j});a.C=0<e.length?e[0].C:new cg(b,c);for(f=e.length-1;0<=f;f--)jg(a,kg(e[f]))},ng=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=Xe(e[0]);if(0!=f.length){var g=2==e.length?Xe(e[1]):"1";if(Ve(f)&&Ve(g)){d=new cg(N(f),N(g));
break a}}}d=void 0}if(d){for(var h=new eg(d,a.aa,a.T),k=(c[2]||"").split("!"),m=0;m<k.length;m++){var l=k[m].split(".");if(3==l.length){if(!Ve(l[1]))return;ig(h,l[0],new dg(l[2],N(l[1])))}}return h}}};var _f=function(a){var b=String(H("gtm.referrer")||P.referrer);if(!b)return b;var c=xa(b);return b};_f.a="f";_f.b=["google"];var ja=function(a){var b=A.location,c;(c=a[Mb]?a[Mb]:H("gtm.url"))&&(b=xa(String(c)));var d=b.href,e=d.indexOf("#"),f=0>e?d:d.substr(0,e);a[wb]&&(f=Ef(b,a[wb],a[Yd],a[Wb],a[Ld]));return f},_u=ja;_u.a="u";_u.b=["google"];var _cn=function(a){return 0<=String(a[Xa]).indexOf(String(a[Q]))};_cn.a="cn";_cn.b=["google"];var _eq=function(a){return String(a[Xa])==String(a[Q])};_eq.a="eq";_eq.b=["google"];var Bg=Math.random(),Cg="1.000000">Bg;var Dg=Te;var Eg=Te,Fg=[],Gg=!1,Hg=function(a){return A["dataLayer"].push(a)},Ig=function(a){var b=!1;return function(){!b&&M(a)&&q(a);b=!0}},Og=function(){for(var a=!1;!Gg&&0<Fg.length;){Gg=!0;var b=Fg.shift();if(M(b))try{b.call(Jf)}catch(Ta){}else if(S(b))a:{var c=b;if("string"==Da(c[0])){for(var d=c[0].split("."),e=d.pop(),f=c.slice(1),g=Hf,h=0;h<d.length;h++){if(void 0===g[d[h]])break a;g=g[d[h]]}try{g[e].apply(g,f)}catch(Ta){}}}else{var k=b,m=void 0;for(m in k)if(k.hasOwnProperty(m)){var l=m,n=k[m];
Gf.set(l,n);Fa(If(l,n),Hf)}var r=!1,t=k.event,v=void 0;if(t){v=ka++;Ia=t;if(!k["gtm.uniqueEventId"]){var x=v;Gf.set("gtm.uniqueEventId",x);Fa(If("gtm.uniqueEventId",x),Hf)}var z=Ig(k.eventCallback),D=k.eventTimeout;D&&A.setTimeout(z,Number(D));r=Eg(v,t,z,k.eventReporter)}Ha||(Ha=k["gtm.start"])&&Dg();var E=k,F=v,y=t,B=Hf;if(!r){var G=v,J=t;}Ia=null;a=r||a}var X=b,K=Hf;Ng();Gg=!1}return!a};var Pg,Qg,Rg,Sg=/(Firefox\D28\D)/g.test(rf.userAgent),Yg=function(a,b){return function(c){c=c||A.event;var d=yf(c),e=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(d=zf(d,["a","area"]),e=!d||!d.href||Tg(d.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var f="FORM_SUBMIT"==a?Rg:Qg;if(c.defaultPrevented||!1===c.returnValue||c.oa&&c.oa()){if(d){var g={simulateDefault:!1},h=Ug(f,["wnc","nwnc"]);h&&Vg(a,d,g,f.wt,h)}}else{if(d){var g={},k=!0,m=Ug(f,
["wnc","nwnc","nwc","wc"]);(k=Vg(a,d,g,f.wt,m))||(Wg(g.eventReport,f)?b=!0:e=!0);e=e||k||"LINK_CLICK"==a&&Sg;g.simulateDefault=!k&&b&&!e;g.simulateDefault&&(e=Xg(d,g)||e,!e&&c.preventDefault&&c.preventDefault());c.returnValue=k||!b||e;return c.returnValue}return!0}}}},Vg=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||wf(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event=
"gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Zg(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=$g(b);g.eventTimeout=f;g.eventCallback=ah(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=(b.attributes&&b.attributes.formaction?b.formAction:"")||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return Hg(g)},
$g=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},bh=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Xg=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(rf.userAgent),e=bh(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=A.frames&&A.frames[f]||A[f];break;case "_blank":d?(b.simulateDefault=!1,c=!0):(b.targetWindowName=
"gtm_autoEvent_"+L().getTime(),b.targetWindow=A.open("",b.targetWindowName));break;default:d&&!A.frames[e]?(b.simulateDefault=!1,c=!0):(A.frames[e]||(b.targetWindowName=e),b.targetWindow=A.frames[e]||A.open("",e))}return c},Zg=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||L().getTime(),500>L().getTime()-c&&A.setTimeout(Zg(a,b,c),25)))}},ah=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&
(d=a.target,a.target=b.targetWindowName);P.gtmSubmitFormNow=!0;ch(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||L().getTime(),500>L().getTime()-c&&A.setTimeout(ah(a,b,c),25)}},Ug=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},dh=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},Wg=function(a,b){if(b.wnc["0"]||b.wc["0"])return!0;
for(var c=0;c<eh.length;c++)if(a.passingRules[c]){var d=eh[c],e=fh[c],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=d[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},gh=function(a,b,c,d,e){var f,g,h=!1;switch(a){case "CLICK":if(P.gtmHasClickListenerTag)return;P.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=yf(a);b&&Vg("CLICK",b,{},d)};h=!0;break;case "LINK_CLICK":b&&!Pg&&(Pg=Ff(P.location));dh(Qg,b||!1,c||!1,d,e);if(P.gtmHasLinkClickListenerTag)return;
P.gtmHasLinkClickListenerTag=!0;f="click";g=Yg(a,b||!1);break;case "FORM_SUBMIT":dh(Rg,b||!1,c||!1,d,e);if(P.gtmHasFormSubmitListenerTag)return;P.gtmHasFormSubmitListenerTag=!0;f="submit";g=Yg(a,b||!1);break;default:return}T(P,f,g,h)},Tg=function(a){if(!Pg)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=xa(a);return Pg==Ff(c)},ch=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
P.gtmFormElementSubmitter||(P.gtmFormElementSubmitter=P.createElement("form"));return P.gtmFormElementSubmitter.submit.call?P.gtmFormElementSubmitter.submit:a.submit};var og=new String("undefined"),oh=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===og?b:a[d]);return c.join("")}};oh.prototype.toString=function(){return this.resolve("undefined")};oh.prototype.valueOf=oh.prototype.toString;var ph={},qh=function(a,b){var c=ka++;ph[c]=[a,b];return c},rh=function(a){var b=a?0:1;return function(a){var d=ph[a];if(d&&M(d[b]))d[b]();ph[a]=void 0}};var sh=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},th=function(a,b){return a<b?-1:a>b?1:0};var uh;a:{var vh=ya.navigator;if(vh){var wh=vh.userAgent;if(wh){uh=wh;break a}}uh=""}var V=function(a){return-1!=uh.indexOf(a)};var xh=V("Opera"),yh=V("Trident")||V("MSIE"),zh=V("Edge"),Ah;if(Ah=V("Gecko"))Ah=!(-1!=uh.toLowerCase().indexOf("webkit")&&!V("Edge"));var Bh=Ah&&!(V("Trident")||V("MSIE"))&&!V("Edge"),Ch=-1!=uh.toLowerCase().indexOf("webkit")&&!V("Edge");Ch&&V("Mobile");V("Macintosh");V("Windows");V("Linux")||V("CrOS");var Dh=ya.navigator||null;Dh&&(Dh.appVersion||"").indexOf("X11");V("Android");!V("iPhone")||V("iPod")||V("iPad");V("iPad");var Eh=function(){var a=ya.document;return a?a.documentMode:void 0},Fh;
a:{var Gh="",Hh=function(){var a=uh;if(Bh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(zh)return/Edge\/([\d\.]+)/.exec(a);if(yh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ch)return/WebKit\/(\S+)/.exec(a);if(xh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Hh&&(Gh=Hh?Hh[1]:"");if(yh){var Ih=Eh();if(null!=Ih&&Ih>parseFloat(Gh)){Fh=String(Ih);break a}}Fh=Gh}
var Jh=Fh,Kh={},Lh=function(a){var b;if(!(b=Kh[a])){for(var c=0,d=sh(String(Jh)).split("."),e=sh(String(a)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",m=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=m.exec(h)||["","",""],r=l.exec(k)||["","",""];if(0==n[0].length&&0==r[0].length)break;c=th(0==n[1].length?0:parseInt(n[1],10),0==r[1].length?0:parseInt(r[1],10))||th(0==n[2].length,0==r[2].length)||th(n[2],r[2])}while(0==c)}b=Kh[a]=0<=c}return b},
Mh=ya.document,Nh=Mh&&yh?Eh()||("CSS1Compat"==Mh.compatMode?parseInt(Jh,10):5):void 0;var Oh;if(!(Oh=!Bh&&!yh)){var Ph;if(Ph=yh)Ph=9<=Number(Nh);Oh=Ph}Oh||Bh&&Lh("1.9.1");yh&&Lh("9");var Qh=function(a){Qh[" "](a);return a};Qh[" "]=function(){};var va=function(a,b){var c="";yh&&!Rh(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Sh)a.srcdoc=d;else if(Th){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Uh(a,d)},Sh=Ch&&"srcdoc"in document.createElement("iframe"),Th=Bh||Ch||yh&&Lh(11),Uh=function(a,b){yh&&Lh(7)&&!Lh(10)&&6>Vh()&&Wh(b)&&(b=Xh(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};yh&&!Rh(a)?Yh(a,c):c()},Vh=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Rh=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{Qh(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(e){b=!1}return b}catch(e){return!1}},Zh=0,Yh=function(a,b){var c="goog_rendering_callback"+Zh++;window[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Wh=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Xh=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ai=function(a,b,c,d){return function(){try{if(0<b.length){var e=b.shift(),f=ai(a,b,c,d);if("SCRIPT"==String(e.nodeName).toUpperCase()&&"text/gtmscript"==e.type){var g=P.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,pa(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var k=[];e.firstChild;)k.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);ai(e,k,f,d)()}else a.insertBefore(e,null),f()}else c()}catch(m){q(d)}}};var ci=function(a,b,c){if(P.body){var d=
a[Fc];d instanceof oh&&(d=d.resolve(qh(b,c)),b=Te);if(a[Ie])try{va(ha(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+d),q(b)}catch(e){q(c)}else a[Ke]?bi(d,b,c):ai(P.body,wa(d),b,c)()}else A.setTimeout(function(){ci(a,b,c)},200)},_html=ci;_html.a="html";_html.b=["customScripts"];
var oi=function(a,b,c,d){var e=b+": "+c+(d?" !important":""),f=document;if(f.createStyleSheet){var g=li(f),h=g.rules.length;g.addRule(a,e);return function(){g.removeRule?g.removeRule(h):g.deleteRule(h);g.addRule("x","-",h)}}var k=mi(a+"{"+e+"}",f);ni(k,f);var m=k.parentNode;return function(){m.removeChild(k)}},pi=null,li=function(a){if(pi)return pi;for(var b=a.styleSheets.length-1;0<=b;b--){var c=a.styleSheets[b],d=c.ownerNode;if(d&&d.parentNode&&"HEAD"==d.parentNode.tagName)return pi=c}0==a.styleSheets.length&&
a.createStyleSheet();return pi=a.styleSheets[0]},mi=function(a,b){var c=(b||document).createElement("style");void 0!==c.cssText?c.cssText=a:c.innerHTML=a;return c},ni=function(a,b){var c=b||document,d=c.getElementsByTagName("head")[0];d||(d=c.createElement("head"),c.body.parentNode.insertBefore(d,c.body));d.appendChild(a)};var wi={},W=void 0,xi=function(a){var b=wi[a];b||(b={id:a,s:[],O:0,Ba:null,ua:void 0,ya:!1},wi[a]=b);W=b},zi=function(a,b,c,d){var e=W;if(!Pf||!e)return!1;var f={id:e.id+":"+e.s.length,Va:b,M:[],Qa:c,D:a,ma:0,ja:d||null,Fa:0,N:!1};e.s.push(f);null===a?(f.N=!0,b(null)):yi(e);return!0},Ai=function(a){var b=oi(a,"visibility","hidden",!0);return function(){M(b)&&b.apply();b=null}},Bi=function(a,b,c,d){var e=b;if(!sa){var f=Ai(a.v);ta.push(f);e=function(a,c){var d=b(a,c);f();return d}}return zi(a,e,c,
d)},yi=function(a){if(!a.ya){for(var b=a.O;b<a.s.length;b++){var c=a.s[b],d=b==a.O;if(!c.N&&!Ci(d,c))break;c.N&&d&&a.O++}a.s.length>a.O?(a.Ba||(a.Ba=A.setTimeout(function(){a.Ba=null;yi(a)},80)),sa||a.ua||(a.ua=function(){q(function(){yi(a)})},T(P,"DOMContentLoaded",a.ua))):Di(a)}},Di=function(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];if(c.D)for(var d=jf(c.D.v)||[],e=0;e<d.length;e++){var f=d[e];f.gtmProgressiveApplied&&f.gtmProgressiveApplied[c.id]||(Ei(f,c.id),c.M.push(Fi(f,c.id)))}}},Ci=function(a,
b){var c=[];if(b.D){var d=Gi(b.D,b.id),e=null;b.ja&&(e=Gi(b.ja,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!sa&&(null===b.ja.o||b.Fa+c.length<b.ja.o)))break;c.push({element:g,vb:h})}}if(!sa&&b.Qa&&(!a||null==b.D.o||b.D.o!=b.ma+c.length))return!1;for(var k=0;k<c.length;k++){var m=c[k].element,l=c[k].vb,n;b.ma++;Ei(m,b.id);l&&(b.Fa++,n=b.id+"-t",Ei(l,n));var r=b.Va(m,l);M(r)&&b.M.push(r);b.M.push(Fi(m,b.id));l&&n&&b.M.push(Fi(l,n))}if(b.D.o&&b.D.o==b.ma||
sa)b.N=!0;return!0},Ei=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=!0},Fi=function(a,b){return function(){a.gtmProgressiveApplied&&delete a.gtmProgressiveApplied[b]}},Gi=function(a,b){for(var c=jf(a.v)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.B&&!Hi(f))break;d.push(f)}}return d},Hi=function(a){if(sa)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1};var Ki,Li;var Vi=function(a){return function(){}},Wi=function(a){return function(){}};var uj=function(a){var b=A||ya,c=b.onerror,d=!1;Ch&&!Lh("535.3")&&(d=!d);b.onerror=function(b,f,g,h,k){c&&c(b,f,g,h,k);a({message:b,fileName:f,ob:g,Lb:h,error:k});return d}};var Qj=23,Rj=[],Sj=[],Tj=[],Uj=new $e,Vj=[],Z=[],eh=[],fh=[],Wj=function(){this.G=[]};Wj.prototype.set=function(a,b){this.G.push([a,b]);return this};Wj.prototype.resolve=function(a,b){for(var c={},d=0;d<this.G.length;d++){var e=Xj(this.G[d][0],a,b),f=Xj(this.G[d][1],a,b);c[e]=f}return c};var Yj=function(a){this.index=a};Yj.prototype.resolve=function(a,b){var c=Tj[this.index];if(c&&!b(c)){var d=c[Kc];if(a){if(a.get(d))return;a.set(d,!0)}c=Xj(c,a,b);a&&a.set(d,!1);return af(c)}};
var _M=function(a){return new Yj(a)},Zj=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=Xj(Rj[a[f]],b,c);g===og&&(e=!0);d.push(g)}return e?new oh(d):d.join("")}},_T=function(a){return new Zj(arguments)},ak=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=
function(c,d){var e=Xj(a[0],c,d);if(a[0]instanceof Yj&&b(8)&&b(16)){if(e===og)return e;var f="gtm"+ka++;Uj.set(f,e);return'google_tag_manager["GTM-MLBVG3"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=Y[a[g]](e);return e}},_E=function(a,b){return new ak(arguments)},bk=function(a,b){this.u=a;this.ia=b},_R=function(a,b){return new bk(a,b)},ck=function(a,b){return Xj(a,new $e,b)},Xj=function(a,b,c){var d=a;if(a instanceof Yj||a instanceof Wj||a instanceof Zj||a instanceof ak)return a.resolve(b,
c);if(!(a instanceof bk))if(S(a))for(var d=[],e=0;e<a.length;e++)d[e]=Xj(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=Xj(a[f],b,c))}return d},dk=function(a,b){var c=b[a],d=c;if(c instanceof Yj||c instanceof ak||c instanceof Zj||c instanceof bk)d=c;else if(S(c))for(var d=[],e=0;e<c.length;e++)d[e]=dk(c[e],b);else if("object"==typeof c){var d=new Wj,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],dk(c[f],b))}return d},fk=function(a,b){for(var c=b?b.split(","):
[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=Rj[e[1]]);if(1==a)for(var f=ek(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=Sj[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=ek(e[g]);3==a&&(c[d]=Rj[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var k=0;k<e[g].length;k++)e[g][k]=Rj[e[g][k]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},ek=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<Qj;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},gk=function(a,b,c){a.push.apply(a,fk(b,c))};
var Kg=function(){},ok=function(a){},Ng=function(){},pk=function(a){},qk=function(a,b){},rk=function(a,b){},Lg=function(a){};var sk=function(a){var b=this;this.g=a;this.complete=this.Na=!1;this.ha=[];this.ca=[];this.S=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||df(b.ha);gf(b,1)};this.R=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||df(b.ca);gf(b,2)};this.w=Te},tk=function(a,b){a.ha.push(b)},
uk=function(a,b){a.ca.push(b)},vk=function(a){this.H=[];this.Aa=[];this.Ha={};this.sa=[];this.P=0;this.La={};this.Oa={};this.ka={};this.event=a};vk.prototype.addListener=function(a){this.sa.push(a)};
var wk=function(a,b,c,d,e,f){if(!c.complete){a.H[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=S(d)?d.slice():["or",d];e=S(e)?e.slice():[e];f=S(f)?f.slice():[f];a.Ha[b]=d;a.La[b]=0<e.length;a.Oa[b]=0<f.length;a.P++;var g=function(){0<a.P&&a.P--;0<a.P||df(a.sa)};tk(c,g);uk(c,g)}},xk=function(a,b,c){a.H[b]&&(tk(a.H[b],function(){c(b,!0)}),uk(a.H[b],function(){c(b,!1)}))},yk=function(a,b){var c=!1;return function(d,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof bk&&a[g].u===
d||a[g]===d){f=g;break a}f=-1}c||0>f||("or"==a[0]?e?(c=!0,b()):(a.splice(f,1),1==a.length&&(c=!0)):e?(a.splice(f,1),1==a.length&&(c=!0,b())):c=!0)}},Ck=function(a,b){var c=[],d=!1,e=function(b){var f,g,h=Z[b];if(a.event.c(h)){}else g=zk(h,b,a);if(f=g){var k=Ak(b,!0);0<k.length&&e(k[0].u);c.push(f);var l=Ak(b,!1);0<l.length&&e(l[0].u)}else d=
!0};e(b);if(!d){for(var f=0;f<c.length;f++){var g=c[f],h=Ak(g.g,!0);if(0<h.length){var k=c[f-1],m=Bk(g);tk(k,m);0==h[0].ia&&uk(k,m)}var l=Ak(g.g,!1);0<l.length&&(m=Bk(c[f+1]),tk(g,m),0==l[0].ia&&uk(g,m))}a.Aa.push(c)}},Ak=function(a,b){var c=b?Vd:le,d=Z[a],e=void 0===d[c]?[]:d[c];return S(e)?e:[e]},Bk=function(a){return function(){a.w()}},Ek=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=Ak(a,!0);0<b.length&&f(b[0].u);e.push(a);var c=Ak(a,!1);0<c.length&&f(c[0].u)};
f(d.g);b[d.g]=e}Dk(a,b);return b},Dk=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].g,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<We(b[e],d)){delete b[d];break}}};var Gk=function(a,b){return function(){a[Cc]=b.S;a[Dc]=b.R;var c=b.g,d=b.i&&b.i.ka[c],e=Ja[c]&&Ja[c].state,f=d?void 0!==d:b.Na,g=Ja[c]&&Ja[c].firingOption,h=g&&2==g,k=g&&1==g;if((f||e&&0!=e)&&(f||h)&&(h||k))h&&Ja[c]&&1==Ja[c].state||k&&b.i&&1==b.i.ka[c]?b.S():b.R();else{var m=b.i?b.i.event:void 0;a=Fk(a,m?m.c:Of());gf(b,0);if(m){var l=a;qk(m,c)}af(a,b.S,b.R)}}},Fk=function(a,b){a=ck(a,b);return a},zk=function(a,b,c){var d=new sk(b);d.i=c;tk(d,Vi(a));uk(d,Wi(a));d.w=Gk(a,d);return d};var Lk,Mk;var Vk=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Vj[b]&&ck(Vj[b],c),e=d;if(d)if(d[Wa]&&S(d[Q]))for(var f=d[Q],e=!1,g=0;!e&&g<f.length;g++)d[Q]=f[g],e=af(d);else e=af(d);a[b]=[e,d]}return a[b]}},nk=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.K(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.K(e[d],a.c)[0])return!1;return!0},Wk=!1,Eg=function(a,b,c,d){switch(b){case "gtm.js":if(Wk)return!1;Wk=!0;break;case "gtm.sync":if(H("gtm.snippet")!=Ga)return!1}H("tagTypeBlacklist");
for(var e={id:a,name:b,Y:c||Te,X:ek(),ga:ek(),K:Vk(),c:Of()},f=[],g=0;g<eh.length;g++)if(nk(e,eh[g])){f[g]=!0;for(var h=e,k=eh[g],m=k[1],l=0;l<m.length;l++)h.X[m[l]]=!0;for(var n=k[3],l=0;l<n.length;l++)h.ga[n[l]]=!0}else f[g]=!1;qk(e);var t=[];for(var v=0;v<Qj;v++)if(e.X[v]&&!e.ga[v])if(e.c(Z[v])){}else{t[v]=Z[v];}e.L=t;for(var x=new vk(e),z=0;z<Qj;z++)if(e.X[z]&&!e.ga[z])if(e.c(Z[z])){}else{var D=e.L[z],E=zk(D,z,x);wk(x,z,E,D[Yb],D[Vd],D[le]);if(D[Ka])break}x.addListener(e.Y);for(var F=[],y=
0;y<x.H.length;y++){var B=x.H[y];if(B){var w=x.Ha[y],G=x.La[y],J=x.Oa[y];if(0!=w.length||G||J){if(0<w.length)for(var X=yk(w,B.w),K=0;K<w.length;K++)w[K]instanceof bk&&w[K].u!=y&&xk(x,w[K].u,X);(G||J)&&Ck(x,y)}else F.push(y)}}for(y=0;y<F.length;y++)x.H[F[y]].w();for(y=0;y<x.Aa.length;y++){for(var Ta=x.Aa[y],aa=Ta,ea=[],ca=0;ca<aa.length;ca++){var jb=aa[ca],hb=jb.g,Cb=Ja[hb],jd=Cb.firingOption;0!=jd&&(1==jd&&void 0!==jb.i.ka[hb]||2==jd&&void 0!==Cb.state)&&ea.push(jb)}var kd=Ek(ea),mc=void 0;for(mc in kd)if(kd.hasOwnProperty(mc)){for(var lf=
void 0,hj=void 0,fd=kd[mc],il=fd[0],ij=fd[fd.length-1],jj,Ca=0;Ca<aa.length;Ca++){var gd=aa[Ca];!lf&&gd.g==il&&0<Ca&&(lf=aa[Ca-1]);gd.g==ij&&Ca<aa.length-1&&(hj=aa[Ca+1]);if(-1<We(fd,gd.g))if(jj=aa.splice(Ca,1)[0],gd.g==ij)break;else Ca--}if(jj){var kj=Number(mc),ia=lf,mf=hj;if(ia){var jl=ia.ha[0],kl=ia.ca[0],lj=ia;lj.ha=[];lj.ca=[];tk(ia,jl);uk(ia,kl)}if(ia&&mf){var nf=Bk(mf);tk(ia,nf);var of=Ak(ia.g,!1);0<of.length&&of[0].u!=kj&&0==of[0].ia&&uk(ia,nf);var pf=Ak(mf.g,!0);0<pf.length&&pf[0].u!=kj&&
0==pf[0].ia&&uk(ia,nf)}}}0<Ta.length&&Ta[0].w()}0<x.P||df(x.sa);d&&M(d)&&d({passingRules:f,
resolvedTags:e.L});for(var mj in e.L)if(e.L.hasOwnProperty(mj)){var nj=e.L[mj],qf;if(!(qf=void 0==nj[Kc])){var oj=nj[Kc];qf=!("function"!=typeof String.prototype.startsWith?0===oj.indexOf("_implicit"):oj.startsWith("_implicit"))}if(qf)return!0}return!1};var Xk={macro:function(a){if(Uj.contains(a))return Uj.get(a)}};Xk.dataLayer=Jf;Xk.onHtmlSuccess=rh(!0);Xk.onHtmlFailure=rh(!1);Xk.Za=function(){var a=A.google_tag_manager;a||(a=A.google_tag_manager={});a["GTM-MLBVG3"]||(a["GTM-MLBVG3"]=Xk);qa=a};(function(){var a=function(a){var c=I("google_tag_manager",{},!1),d=c[a];d||(d=c[a]={},d.nwnc={},d.nwc={},d.wnc={},d.wc={},d.wt=null,d.l=!1);return d};Qg=a("linkClickMap");Rg=a("formSubmitMap")})();
Rj.push.apply(Rj,function(){for(var a=[_cn,_u,'Page Path','path',_M(0),'display/Purchasing/Introducing',_eq,_e,'_event',_M(1),'gtm.js','1451797_5','/servicedeskcloud/receiving-requests-by-email','1451797_6','/alldoc/atlassian-documentation','1451797_7',_html,true,'\n\x3cscript type\x3d\x22text/gtmscript\x22 id\x3d\x22__nls_script\x22\x3ewindow.__nls\x3dwindow.__nls||[];__nls.push([\x22memberId\x22,1084]);__nls.push([\x22projectId\x22,1159]);(function(){var a\x3ddocument.createElement(\x22script\x22);a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.id\x3d\x22__nls_script_async\x22;a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https\x22:\x22http\x22)+\x22://www.navilytics.com/nls.js\x22;var b\x3ddocument.getElementsByTagName(\x22script\x22)[0];b.parentNode.insertBefore(a,b)})();\x3c/script\x3e\n',1,'Page URL','Page Hostname','host',_f,'Referrer','Event'],b=[],c=0;c<a.length;c++)b[c]=dk(c,a);return b}());gk(Sj,0,"3:0,3:1,5:2,2:3,0:4,1:5,3:6,3:7,5:8,0:9,1:10,1:12,1:14,3:16,6:17,4:18,7:19,5:20,5:21,2:22,3:23,5:24,5:25");gk(Tj,1,"O,AG,CAg,CAAD,AAAM,ACAQ");gk(Vj,1,"x,AZ,Rg,RAB");gk(Z,1,"AAe");gk(eh,2,"D:B::,G:B::,K:B::");gk(fh,4,"11:,13:,15:");for(var Yk=0;Yk<Z.length;Yk++){var Zk=Z[Yk],$k=1;Zk[qd]?$k=2:Zk[Ee]&&($k=0);Ja[Yk]={firingOption:$k,state:void 0}}Xk.Za();
(function(a){})("async");
(function(){var a=I("dataLayer",[],!1),b=I("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};ta.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bf.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Fg.push.apply(Fg,b);300<this.length;)this.shift();return Og()};Fg.push.apply(Fg,a.slice(0));q(Og)})();
if("interactive"==P.readyState&&!P.createEventObject||"complete"==P.readyState)tf();else{T(P,"DOMContentLoaded",tf);T(P,"readystatechange",tf);if(P.createEventObject&&P.documentElement.doScroll){var hl=!0;try{hl=!A.frameElement}catch(a){}hl&&vf()}T(A,"load",tf)}"complete"===P.readyState?Cf():T(A,"load",Cf);
(function(a){})("async");(function(){})();var _vs="res_ts:1453494130756000,srv_cl:119932188,ds:live,cv:4";
})()
