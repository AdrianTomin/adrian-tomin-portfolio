var Lg=Object.defineProperty;var Rg=(qt,vt,Ct)=>vt in qt?Lg(qt,vt,{enumerable:!0,configurable:!0,writable:!0,value:Ct}):qt[vt]=Ct;var q=(qt,vt,Ct)=>(Rg(qt,typeof vt!="symbol"?vt+"":vt,Ct),Ct);(async()=>{(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const qt="149",vt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ct={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tl=0,Ys=1,El=2,Ks=1,Zs=2,yr=3,Xt=0,Mt=1,Yt=2,oi=0,Fi=1,Js=2,Qs=3,$s=4,Al=5,Bi=100,Cl=101,Ll=102,ea=103,ta=104,Rl=200,Pl=201,Il=202,Dl=203,ia=204,ra=205,Nl=206,Ol=207,kl=208,zl=209,Ul=210,Fl=0,Bl=1,Gl=2,Cn=3,Hl=4,Vl=5,Wl=6,jl=7,na=0,ql=1,Xl=2,Kt=0,Yl=1,Kl=2,sa=3,Zl=4,Jl=5,aa=300,Gi=301,Hi=302,Ln=303,Rn=304,Vr=306,Vi=1e3,Lt=1001,Wr=1002,$e=1003,Pn=1004,jr=1005,xt=1006,oa=1007,_i=1008,vi=1009,Ql=1010,$l=1011,la=1012,ec=1013,xi=1014,li=1015,Mr=1016,tc=1017,ic=1018,Wi=1020,rc=1021,Rt=1023,nc=1024,sc=1025,yi=1026,ji=1027,ac=1028,oc=1029,lc=1030,cc=1031,hc=1033,In=33776,Dn=33777,Nn=33778,On=33779,ca=35840,ha=35841,ua=35842,da=35843,uc=36196,pa=37492,ma=37496,fa=37808,ga=37809,_a=37810,va=37811,xa=37812,ya=37813,Ma=37814,ba=37815,Sa=37816,wa=37817,Ta=37818,Ea=37819,Aa=37820,Ca=37821,kn=36492,dc=36283,La=36284,Ra=36285,Pa=36286,pc=2200,mc=2201,fc=2202,br=2300,qi=2301,zn=2302,Xi=2400,Yi=2401,qr=2402,Un=2500,gc=2501,_c=0,Ia=1,Fn=2,Mi=3e3,ke=3001,vc=3200,xc=3201,Da=0,yc=1,Ht="srgb",Xr="srgb-linear",Bn=7680,Mc=519,Gn=35044,Na="300 es",Hn=1035;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oa=1234567;const Sr=Math.PI/180,wr=180/Math.PI;function kt(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ot[o&255]+ot[o>>8&255]+ot[o>>16&255]+ot[o>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[i&255]+ot[i>>8&255]+ot[i>>16&255]+ot[i>>24&255]).toLowerCase()}function lt(o,e,t){return Math.max(e,Math.min(t,o))}function Vn(o,e){return(o%e+e)%e}function bc(o,e,t,i,r){return i+(o-e)*(r-i)/(t-e)}function Sc(o,e,t){return o!==e?(t-o)/(e-o):0}function Tr(o,e,t){return(1-t)*o+t*e}function wc(o,e,t,i){return Tr(o,e,1-Math.exp(-t*i))}function Tc(o,e=1){return e-Math.abs(Vn(o,e*2)-e)}function Ec(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Ac(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Cc(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Lc(o,e){return o+Math.random()*(e-o)}function Rc(o){return o*(.5-Math.random())}function Pc(o){o!==void 0&&(Oa=o);let e=Oa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ic(o){return o*Sr}function Dc(o){return o*wr}function Wn(o){return(o&o-1)===0&&o!==0}function ka(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Yr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Nc(o,e,t,i,r){const n=Math.cos,s=Math.sin,a=n(t/2),l=s(t/2),c=n((e+i)/2),h=s((e+i)/2),u=n((e-i)/2),d=s((e-i)/2),f=n((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Be(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Oc=Object.freeze({__proto__:null,DEG2RAD:Sr,RAD2DEG:wr,ceilPowerOfTwo:ka,clamp:lt,damp:wc,degToRad:Ic,denormalize:Zt,euclideanModulo:Vn,floorPowerOfTwo:Yr,generateUUID:kt,inverseLerp:Sc,isPowerOfTwo:Wn,lerp:Tr,mapLinear:bc,normalize:Be,pingpong:Tc,radToDeg:Dc,randFloat:Lc,randFloatSpread:Rc,randInt:Cc,seededRandom:Pc,setQuaternionFromProperEuler:Nc,smootherstep:Ac,smoothstep:Ec});class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,s,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],m=r[0],p=r[3],_=r[6],S=r[1],x=r[4],M=r[7],w=r[2],L=r[5],P=r[8];return n[0]=s*m+a*S+l*w,n[3]=s*p+a*x+l*L,n[6]=s*_+a*M+l*P,n[1]=c*m+h*S+u*w,n[4]=c*p+h*x+u*L,n[7]=c*_+h*M+u*P,n[2]=d*m+f*S+g*w,n[5]=d*p+f*x+g*L,n[8]=d*_+f*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-i*n*h+i*a*l+r*n*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*s-a*c,d=a*l-h*n,f=c*n-s*l,g=t*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(r*c-h*i)*m,e[2]=(a*i-r*s)*m,e[3]=d*m,e[4]=(h*t-r*l)*m,e[5]=(r*n-a*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(s*t-i*n)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,a){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jn.makeScale(e,t)),this}rotate(e){return this.premultiply(jn.makeRotation(-e)),this}translate(e,t){return this.premultiply(jn.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jn=new bt;function za(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Er(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const qn={[Ht]:{[Xr]:bi},[Xr]:{[Ht]:Kr}},dt={legacyMode:!0,get workingColorSpace(){return Xr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(qn[e]&&qn[e][t]!==void 0){const i=qn[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={r:0,g:0,b:0},zt={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Xn(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Jr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=Vn(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Xn(s,n,e+1/3),this.g=Xn(s,n,e),this.b=Xn(s,n,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ht){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,dt.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,dt.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(n[1])/360,c=parseFloat(n[2])/100,h=parseFloat(n[3])/100;return i(n[4]),this.setHSL(l,c,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],s=n.length;if(s===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,dt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,dt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ht){const i=Ua[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return dt.fromWorkingColorSpace(Jr(this,Ze),e),lt(Ze.r*255,0,255)<<16^lt(Ze.g*255,0,255)<<8^lt(Ze.b*255,0,255)<<0}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Jr(this,Ze),t);const i=Ze.r,r=Ze.g,n=Ze.b,s=Math.max(i,r,n),a=Math.min(i,r,n);let l,c;const h=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case i:l=(r-n)/u+(r<n?6:0);break;case r:l=(n-i)/u+2;break;case n:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Jr(this,Ze),t),e.r=Ze.r,e.g=Ze.g,e.b=Ze.b,e}getStyle(e=Ht){return dt.fromWorkingColorSpace(Jr(this,Ze),e),e!==Ht?`color(${e} ${Ze.r} ${Ze.g} ${Ze.b})`:`rgb(${Ze.r*255|0},${Ze.g*255|0},${Ze.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=i,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Zr);const i=Tr(zt.h,Zr.h,t),r=Tr(zt.s,Zr.s,t),n=Tr(zt.l,Zr.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ee.NAMES=Ua;let Ki;class Fa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=Er("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=bi(n[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ba{constructor(e=null){this.isSource=!0,this.uuid=kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?n.push(Yn(r[s].image)):n.push(Yn(r[s]))}else n=Yn(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function Yn(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fa.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kc=0;class st extends ci{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,i=Lt,r=Lt,n=xt,s=_i,a=Rt,l=vi,c=st.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=kt(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}st.DEFAULT_IMAGE=null,st.DEFAULT_MAPPING=aa,st.DEFAULT_ANISOTROPY=1;class Ge{constructor(e=0,t=0,i=0,r=1){Ge.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const s=e.elements,a=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],f=s[2],g=s[6],m=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(a+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(a+1)/2,S=(u+1)/2,x=(m+1)/2,M=(l+h)/4,w=(c+f)/4,L=(d+g)/4;return _>S&&_>x?_<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(_),r=M/i,n=w/i):S>x?S<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(S),i=M/r,n=L/r):x<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(x),i=w/n,r=L/n),this.set(i,r,n,t),this}let p=Math.sqrt((g-d)*(g-d)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(p)<.001&&(p=1),this.x=(g-d)/p,this.y=(c-f)/p,this.z=(h-l)/p,this.w=Math.acos((a+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Si extends ci{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new st(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga extends st{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends st{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class et{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,s,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=n[s+0],f=n[s+1],g=n[s+2],m=n[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==d||c!==f||h!==g){let p=1-a;const _=l*d+c*f+h*g+u*m,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const w=Math.sqrt(x),L=Math.atan2(w,_*S);p=Math.sin(p*L)/w,a=Math.sin(a*L)/w}const M=a*S;if(l=l*p+d*M,c=c*p+f*M,h=h*p+g*M,u=u*p+m*M,p===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,s){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=n[s],d=n[s+1],f=n[s+2],g=n[s+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(n/2),d=l(i/2),f=l(r/2),g=l(n/2);switch(s){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(n-c)*f,this._z=(s-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(n+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(n-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(s-r)/f,this._x=(n+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*a+r*c-n*l,this._y=r*h+s*l+n*a-i*c,this._z=n*h+s*c+i*l-r*a,this._w=s*h-i*a-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=n,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=n*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*r-a*i,h=l*i+a*t-n*r,u=l*r+n*i-s*t,d=-n*t-s*i-a*r;return this.x=c*l+d*-n+h*-a-u*-s,this.y=h*l+d*-s+u*-n-c*-a,this.z=u*l+d*-a+c*-s-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-n*a,this.y=n*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kn.copy(this).projectOnVector(e),this.sub(Kn)}reflect(e){return this.sub(Kn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kn=new C,Ha=new et;class Zi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>s&&(s=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(n,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>s&&(s=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(n,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let s=0,a=n.count;s<a;s++)wi.fromBufferAttribute(n,s).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else i.boundingBox===null&&i.computeBoundingBox(),Zn.copy(i.boundingBox),Zn.applyMatrix4(e.matrixWorld),this.union(Zn);const r=e.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Qr.subVectors(this.max,Ar),Ji.subVectors(e.a,Ar),Qi.subVectors(e.b,Ar),$i.subVectors(e.c,Ar),hi.subVectors(Qi,Ji),ui.subVectors($i,Qi),Ti.subVectors(Ji,$i);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ti.y,Ti.x,0];return!Jn(t,Ji,Qi,$i,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Jn(t,Ji,Qi,$i,Qr))?!1:($r.crossVectors(hi,ui),t=[$r.x,$r.y,$r.z],Jn(t,Ji,Qi,$i,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new C,new C,new C,new C,new C,new C,new C,new C],wi=new C,Zn=new Zi,Ji=new C,Qi=new C,$i=new C,hi=new C,ui=new C,Ti=new C,Ar=new C,Qr=new C,$r=new C,Ei=new C;function Jn(o,e,t,i,r){for(let n=0,s=o.length-3;n<=s;n+=3){Ei.fromArray(o,n);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Uc=new Zi,Cr=new C,Qn=new C;class er{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uc.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Qn)),this.expandByPoint(Cr.copy(e.center).sub(Qn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new C,$n=new C,en=new C,di=new C,es=new C,tn=new C,ts=new C;class is{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.direction).multiplyScalar(t).add(this.origin),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$n.copy(e).add(t).multiplyScalar(.5),en.copy(t).sub(e).normalize(),di.copy(this.origin).sub($n);const n=e.distanceTo(t)*.5,s=-this.direction.dot(en),a=di.dot(this.direction),l=-di.dot(en),c=di.lengthSq(),h=Math.abs(1-s*s);let u,d,f,g;if(h>0)if(u=s*l-a,d=s*a-l,g=n*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,f=u*(u+s*d+2*a)+d*(s*u+d+2*l)+c}else d=n,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;else d=-n,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-s*n+a)),d=u>0?-n:Math.min(Math.max(-n,-l),n),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-n,-l),n),f=d*(d+2*l)+c):(u=Math.max(0,-(s*n+a)),d=u>0?n:Math.min(Math.max(-n,-l),n),f=-u*u+d*(d+2*l)+c);else d=s>0?-n:n,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(en).multiplyScalar(d).add($n),f}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const i=Qt.dot(this.direction),r=Qt.dot(Qt)-i*i,n=e.radius*e.radius;if(r>n)return null;const s=Math.sqrt(n-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(n=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||n>r||((n>i||isNaN(i))&&(i=n),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,i,r,n){es.subVectors(t,e),tn.subVectors(i,e),ts.crossVectors(es,tn);let s=this.direction.dot(ts),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(tn.crossVectors(di,tn));if(l<0)return null;const c=a*this.direction.dot(es.cross(di));if(c<0||l+c>s)return null;const h=-a*di.dot(ts);return h<0?null:this.at(h/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,s,a,l,c,h,u,d,f,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=n,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),n=1/tr.setFromMatrixColumn(e,1).length(),s=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const d=s*h,f=s*u,g=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,m=c*u;t[0]=d+m*a,t[4]=g*a-f,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=f*a-g,t[6]=m+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,m=c*u;t[0]=d-m*a,t[4]=-s*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=s*h,t[9]=m-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,f=s*u,g=a*h,m=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,g=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=g*u+f,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=s*l,f=s*c,g=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=s*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fc,e,Bc)}lookAt(e,t,i){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),pi.crossVectors(i,St),pi.lengthSq()===0&&(Math.abs(i.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),pi.crossVectors(i,St)),pi.normalize(),rn.crossVectors(St,pi),r[0]=pi.x,r[4]=rn.x,r[8]=St.x,r[1]=pi.y,r[5]=rn.y,r[9]=St.y,r[2]=pi.z,r[6]=rn.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],m=i[6],p=i[10],_=i[14],S=i[3],x=i[7],M=i[11],w=i[15],L=r[0],P=r[4],y=r[8],E=r[12],N=r[1],X=r[5],K=r[9],k=r[13],D=r[2],W=r[6],Z=r[10],te=r[14],j=r[3],ee=r[7],J=r[11],_e=r[15];return n[0]=s*L+a*N+l*D+c*j,n[4]=s*P+a*X+l*W+c*ee,n[8]=s*y+a*K+l*Z+c*J,n[12]=s*E+a*k+l*te+c*_e,n[1]=h*L+u*N+d*D+f*j,n[5]=h*P+u*X+d*W+f*ee,n[9]=h*y+u*K+d*Z+f*J,n[13]=h*E+u*k+d*te+f*_e,n[2]=g*L+m*N+p*D+_*j,n[6]=g*P+m*X+p*W+_*ee,n[10]=g*y+m*K+p*Z+_*J,n[14]=g*E+m*k+p*te+_*_e,n[3]=S*L+x*N+M*D+w*j,n[7]=S*P+x*X+M*W+w*ee,n[11]=S*y+x*K+M*Z+w*J,n[15]=S*E+x*k+M*te+w*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+n*l*u-r*c*u-n*a*d+i*c*d+r*a*f-i*l*f)+m*(+t*l*f-t*c*d+n*s*d-r*s*f+r*c*h-n*l*h)+p*(+t*c*u-t*a*f-n*s*u+i*s*f+n*a*h-i*c*h)+_*(-r*a*h-t*l*u+t*a*d+r*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],m=e[13],p=e[14],_=e[15],S=u*p*c-m*d*c+m*l*f-a*p*f-u*l*_+a*d*_,x=g*d*c-h*p*c-g*l*f+s*p*f+h*l*_-s*d*_,M=h*m*c-g*u*c+g*a*f-s*m*f-h*a*_+s*u*_,w=g*u*l-h*m*l-g*a*d+s*m*d+h*a*p-s*u*p,L=t*S+i*x+r*M+n*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=S*P,e[1]=(m*d*n-u*p*n-m*r*f+i*p*f+u*r*_-i*d*_)*P,e[2]=(a*p*n-m*l*n+m*r*c-i*p*c-a*r*_+i*l*_)*P,e[3]=(u*l*n-a*d*n-u*r*c+i*d*c+a*r*f-i*l*f)*P,e[4]=x*P,e[5]=(h*p*n-g*d*n+g*r*f-t*p*f-h*r*_+t*d*_)*P,e[6]=(g*l*n-s*p*n-g*r*c+t*p*c+s*r*_-t*l*_)*P,e[7]=(s*d*n-h*l*n+h*r*c-t*d*c-s*r*f+t*l*f)*P,e[8]=M*P,e[9]=(g*u*n-h*m*n-g*i*f+t*m*f+h*i*_-t*u*_)*P,e[10]=(s*m*n-g*a*n+g*i*c-t*m*c-s*i*_+t*a*_)*P,e[11]=(h*a*n-s*u*n-h*i*c+t*u*c+s*i*f-t*a*f)*P,e[12]=w*P,e[13]=(h*m*r-g*u*r+g*i*d-t*m*d-h*i*p+t*u*p)*P,e[14]=(g*a*r-s*m*r-g*i*l+t*m*l+s*i*p-t*a*p)*P,e[15]=(s*u*r-h*a*r+h*i*l-t*u*l-s*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,s=e.x,a=e.y,l=e.z,c=n*s,h=n*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*s,0,c*l-r*a,h*l+r*s,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,s=t._y,a=t._z,l=t._w,c=n+n,h=s+s,u=a+a,d=n*c,f=n*h,g=n*u,m=s*h,p=s*u,_=a*u,S=l*c,x=l*h,M=l*u,w=i.x,L=i.y,P=i.z;return r[0]=(1-(m+_))*w,r[1]=(f+M)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(f-M)*L,r[5]=(1-(d+_))*L,r[6]=(p+S)*L,r[7]=0,r[8]=(g+x)*P,r[9]=(p-S)*P,r[10]=(1-(d+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=tr.set(r[0],r[1],r[2]).length();const s=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Ut.copy(this);const l=1/n,c=1/s,h=1/a;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=c,Ut.elements[5]*=c,Ut.elements[6]*=c,Ut.elements[8]*=h,Ut.elements[9]*=h,Ut.elements[10]*=h,t.setFromRotationMatrix(Ut),i.x=n,i.y=s,i.z=a,this}makePerspective(e,t,i,r,n,s){const a=this.elements,l=2*n/(t-e),c=2*n/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(s+n)/(s-n),f=-2*s*n/(s-n);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,n,s){const a=this.elements,l=1/(t-e),c=1/(i-r),h=1/(s-n),u=(t+e)*l,d=(i+r)*c,f=(s+n)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new C,Ut=new Ae,Fc=new C(0,0,0),Bc=new C(1,1,1),pi=new C,rn=new C,St=new C,Va=new Ae,Wa=new et;class nn{constructor(e=0,t=0,i=0,r=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gc=0;const qa=new C,ir=new et,$t=new Ae,sn=new C,Lr=new C,Hc=new C,Vc=new et,Xa=new C(1,0,0),Ya=new C(0,1,0),Ka=new C(0,0,1),Wc={type:"added"},Za={type:"removed"};class je extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const e=new C,t=new nn,i=new et,r=new C(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new bt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(Ya,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return qa.copy(e).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(Ya,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sn.copy(e):sn.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Lr,sn,this.up):$t.lookAt(sn,Lr,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),ir.setFromRotationMatrix($t),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Za)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Za)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,s=r.length;n<s;n++){const a=r[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(n(e.materials,this.material[l]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(n(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),f=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}je.DEFAULT_UP=new C(0,1,0),je.DEFAULT_MATRIX_AUTO_UPDATE=!0,je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new C,ei=new C,rs=new C,ti=new C,rr=new C,nr=new C,Ja=new C,ns=new C,ss=new C,as=new C;class ii{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ft.subVectors(e,t),r.cross(Ft);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Ft.subVectors(r,t),ei.subVectors(i,t),rs.subVectors(e,t);const s=Ft.dot(Ft),a=Ft.dot(ei),l=Ft.dot(rs),c=ei.dot(ei),h=ei.dot(rs),u=s*c-a*a;if(u===0)return n.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(s*h-a*l)*d;return n.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,i,r,n,s,a,l){return this.getBarycoord(e,t,i,r,ti),l.set(0,0),l.addScaledVector(n,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,t,i,r){return Ft.subVectors(i,t),ei.subVectors(e,t),Ft.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ft.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return ii.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let s,a;rr.subVectors(r,i),nr.subVectors(n,i),ns.subVectors(e,i);const l=rr.dot(ns),c=nr.dot(ns);if(l<=0&&c<=0)return t.copy(i);ss.subVectors(e,r);const h=rr.dot(ss),u=nr.dot(ss);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(rr,s);as.subVectors(e,n);const f=rr.dot(as),g=nr.dot(as);if(g>=0&&f<=g)return t.copy(n);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(nr,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ja.subVectors(n,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Ja,a);const _=1/(p+m+d);return s=m*_,a=d*_,t.copy(i).addScaledVector(rr,s).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jc=0;class Vt extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=kt(),this.name="",this.type="Material",this.blending=Fi,this.side=Xt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ia,this.blendDst=ra,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Xt&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const s=[];for(const a in n){const l=n[a];delete l.metadata,s.push(l)}return s}if(t){const n=r(e.textures),s=r(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ai extends Vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new C,an=new be;class at{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gn,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXY(t,an.x,an.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),i=Be(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),i=Be(i,this.array),r=Be(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),i=Be(i,this.array),r=Be(r,this.array),n=Be(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gn&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qa extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $a extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qc=0;const Pt=new Ae,os=new je,sr=new C,wt=new Zi,Rr=new Zi,tt=new C;class Bt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(za(e)?$a:Qa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new bt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,i){return Pt.makeTranslation(e,t,i),this.applyMatrix4(Pt),this}scale(e,t,i){return Pt.makeScale(e,t,i),this.applyMatrix4(Pt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];wt.setFromBufferAttribute(n),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(wt.min,Rr.min),wt.expandByPoint(tt),tt.addVectors(wt.max,Rr.max),wt.expandByPoint(tt)):(wt.expandByPoint(Rr.min),wt.expandByPoint(Rr.max))}wt.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)tt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(tt));if(t)for(let n=0,s=t.length;n<s;n++){const a=t[n],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tt.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),tt.add(sr)),r=Math.max(r,i.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let N=0;N<a;N++)c[N]=new C,h[N]=new C;const u=new C,d=new C,f=new C,g=new be,m=new be,p=new be,_=new C,S=new C;function x(N,X,K){u.fromArray(r,N*3),d.fromArray(r,X*3),f.fromArray(r,K*3),g.fromArray(s,N*2),m.fromArray(s,X*2),p.fromArray(s,K*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);const k=1/(m.x*p.y-p.x*m.y);isFinite(k)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(k),S.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(k),c[N].add(_),c[X].add(_),c[K].add(_),h[N].add(S),h[X].add(S),h[K].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let N=0,X=M.length;N<X;++N){const K=M[N],k=K.start,D=K.count;for(let W=k,Z=k+D;W<Z;W+=3)x(i[W+0],i[W+1],i[W+2])}const w=new C,L=new C,P=new C,y=new C;function E(N){P.fromArray(n,N*3),y.copy(P);const X=c[N];w.copy(X),w.sub(P.multiplyScalar(P.dot(X))).normalize(),L.crossVectors(y,X);const K=L.dot(h[N])<0?-1:1;l[N*4]=w.x,l[N*4+1]=w.y,l[N*4+2]=w.z,l[N*4+3]=K}for(let N=0,X=M.length;N<X;++N){const K=M[N],k=K.start,D=K.count;for(let W=k,Z=k+D;W<Z;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new C,n=new C,s=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),h.subVectors(s,n),u.subVectors(r,n),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,n),u.subVectors(r,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let _=0;_<h;_++)d[g++]=c[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const n=this.morphAttributes;for(const a in n){const l=[],c=n[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],u=n[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const eo=new Ae,ar=new is,ls=new er,Pr=new C,Ir=new C,Dr=new C,cs=new C,on=new C,ln=new be,cn=new be,hn=new be,hs=new C,un=new C;class Tt extends je{constructor(e=new Bt,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(n&&a){on.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=a[l],u=n[l];h!==0&&(cs.fromBufferAttribute(u,e),s?on.addScaledVector(cs,h):on.addScaledVector(cs.sub(t),h))}t.add(on)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(n),e.ray.intersectsSphere(ls)===!1)||(eo.copy(n).invert(),ar.copy(e.ray).applyMatrix4(eo),i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv2,u=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,g=u.length;f<g;f++){const m=u[f],p=r[m.materialIndex],_=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,M=S;x<M;x+=3){const w=a.getX(x),L=a.getX(x+1),P=a.getX(x+2);s=dn(this,p,e,ar,c,h,w,L,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const f=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=f,p=g;m<p;m+=3){const _=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=dn(this,r,e,ar,c,h,_,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,g=u.length;f<g;f++){const m=u[f],p=r[m.materialIndex],_=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,M=S;x<M;x+=3){const w=x,L=x+1,P=x+2;s=dn(this,p,e,ar,c,h,w,L,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const f=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=f,p=g;m<p;m+=3){const _=m,S=m+1,x=m+2;s=dn(this,r,e,ar,c,h,_,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Xc(o,e,t,i,r,n,s,a){let l;if(e.side===Mt?l=i.intersectTriangle(s,n,r,!0,a):l=i.intersectTriangle(r,n,s,e.side===Xt,a),l===null)return null;un.copy(a),un.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(un);return c<t.near||c>t.far?null:{distance:c,point:un.clone(),object:o}}function dn(o,e,t,i,r,n,s,a,l){o.getVertexPosition(s,Pr),o.getVertexPosition(a,Ir),o.getVertexPosition(l,Dr);const c=Xc(o,e,t,i,Pr,Ir,Dr,hs);if(c){r&&(ln.fromBufferAttribute(r,s),cn.fromBufferAttribute(r,a),hn.fromBufferAttribute(r,l),c.uv=ii.getUV(hs,Pr,Ir,Dr,ln,cn,hn,new be)),n&&(ln.fromBufferAttribute(n,s),cn.fromBufferAttribute(n,a),hn.fromBufferAttribute(n,l),c.uv2=ii.getUV(hs,Pr,Ir,Dr,ln,cn,hn,new be));const h={a:s,b:a,c:l,normal:new C,materialIndex:0};ii.getNormal(Pr,Ir,Dr,h.normal),c.face=h}return c}class or extends Bt{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};const a=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,s,n,0),g("z","y","x",1,-1,i,t,-e,s,n,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(u,2));function g(m,p,_,S,x,M,w,L,P,y,E){const N=M/P,X=w/y,K=M/2,k=w/2,D=L/2,W=P+1,Z=y+1;let te=0,j=0;const ee=new C;for(let J=0;J<Z;J++){const _e=J*X-k;for(let U=0;U<W;U++){const Y=U*N-K;ee[m]=Y*S,ee[p]=_e*x,ee[_]=D,c.push(ee.x,ee.y,ee.z),ee[m]=0,ee[p]=0,ee[_]=L>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(U/P),u.push(1-J/y),te+=1}}for(let J=0;J<y;J++)for(let _e=0;_e<P;_e++){const U=d+_e+W*J,Y=d+_e+W*(J+1),re=d+(_e+1)+W*(J+1),he=d+(_e+1)+W*J;l.push(U,Y,he),l.push(Y,re,he),j+=6}a.addGroup(f,j,E),f+=j,d+=te}}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const r=o[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pt(o){const e={};for(let t=0;t<o.length;t++){const i=lr(o[t]);for(const r in i)e[r]=i[r]}return e}function Yc(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function to(o){return o.getRenderTarget()===null&&o.outputEncoding===ke?Ht:Xr}const Kc={clone:lr,merge:pt};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Vt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Yc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let io=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(o,e){return super.copy(o,e),this.matrixWorldInverse.copy(o.matrixWorldInverse),this.projectionMatrix.copy(o.projectionMatrix),this.projectionMatrixInverse.copy(o.projectionMatrixInverse),this}getWorldDirection(o){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return o.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(o){super.updateMatrixWorld(o),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(o,e){super.updateWorldMatrix(o,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class mt extends io{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,hr=1;class Qc extends je{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new mt(cr,hr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new mt(cr,hr,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const s=new mt(cr,hr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new mt(cr,hr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new mt(cr,hr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new mt(cr,hr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,s,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Kt,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ro extends st{constructor(e,t,i,r,n,s,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,i,r,n,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $c extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ro(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new or(5,5,5),n=new Ci({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mt,blending:oi});n.uniforms.tEquirect.value=t;const s=new Tt(r,n),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=xt),new Qc(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}const us=new C,eh=new C,th=new bt;class Li{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=us.subVectors(i,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(us),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||th.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new er,pn=new C;class ds{constructor(e=new Li,t=new Li,i=new Li,r=new Li,n=new Li,s=new Li){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],s=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],g=i[10],m=i[11],p=i[12],_=i[13],S=i[14],x=i[15];return t[0].setComponents(a-r,u-l,m-d,x-p).normalize(),t[1].setComponents(a+r,u+l,m+d,x+p).normalize(),t[2].setComponents(a+n,u+c,m+f,x+_).normalize(),t[3].setComponents(a-n,u-c,m-f,x-_).normalize(),t[4].setComponents(a-s,u-h,m-g,x-S).normalize(),t[5].setComponents(a+s,u+h,m+g,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pn.x=r.normal.x>0?e.max.x:e.min.x,pn.y=r.normal.y>0?e.max.y:e.min.y,pn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function no(){let o=null,e=!1,t=null,i=null;function r(n,s){t(n,s),i=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){o=n}}}function ih(o,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(o.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,h)):u.version<c.version&&(n(u.buffer,c,h),u.version=c.version)}return{get:s,remove:a,update:l}}class ps extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],m=[],p=[];for(let _=0;_<h;_++){const S=_*d-s;for(let x=0;x<c;x++){const M=x*u-n;g.push(M,-S,0),m.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const x=S+c*_,M=S+c*(_+1),w=S+1+c*(_+1),L=S+1+c*_;f.push(x,M,L),f.push(M,w,L)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(m,3)),this.setAttribute("uv",new ri(p,2))}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch="vec3 transformed = vec3( position );",hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,dh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$h=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_u=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Au=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Du=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Xu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Yu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ku=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ju=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$u=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,od=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ed=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:rh,alphamap_pars_fragment:nh,alphatest_fragment:sh,alphatest_pars_fragment:ah,aomap_fragment:oh,aomap_pars_fragment:lh,begin_vertex:ch,beginnormal_vertex:hh,bsdfs:uh,iridescence_fragment:dh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:yh,color_vertex:Mh,common:bh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:wh,displacementmap_pars_vertex:Th,displacementmap_vertex:Eh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Ch,encodings_fragment:Lh,encodings_pars_fragment:Rh,envmap_fragment:Ph,envmap_common_pars_fragment:Ih,envmap_pars_fragment:Dh,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:qh,envmap_vertex:Oh,fog_vertex:kh,fog_pars_vertex:zh,fog_fragment:Uh,fog_pars_fragment:Fh,gradientmap_pars_fragment:Bh,lightmap_fragment:Gh,lightmap_pars_fragment:Hh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Wh,lights_pars_begin:jh,lights_toon_fragment:Xh,lights_toon_pars_fragment:Yh,lights_phong_fragment:Kh,lights_phong_pars_fragment:Zh,lights_physical_fragment:Jh,lights_physical_pars_fragment:Qh,lights_fragment_begin:$h,lights_fragment_maps:eu,lights_fragment_end:tu,logdepthbuf_fragment:iu,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:nu,logdepthbuf_vertex:su,map_fragment:au,map_pars_fragment:ou,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphcolor_vertex:du,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:fu,normal_fragment_begin:gu,normal_fragment_maps:_u,normal_pars_fragment:vu,normal_pars_vertex:xu,normal_vertex:yu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Tu,output_fragment:Eu,packing:Au,premultiplied_alpha_fragment:Cu,project_vertex:Lu,dithering_fragment:Ru,dithering_pars_fragment:Pu,roughnessmap_fragment:Iu,roughnessmap_pars_fragment:Du,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Ou,shadowmap_vertex:ku,shadowmask_pars_fragment:zu,skinbase_vertex:Uu,skinning_pars_vertex:Fu,skinning_vertex:Bu,skinnormal_vertex:Gu,specularmap_fragment:Hu,specularmap_pars_fragment:Vu,tonemapping_fragment:Wu,tonemapping_pars_fragment:ju,transmission_fragment:qu,transmission_pars_fragment:Xu,uv_pars_fragment:Yu,uv_pars_vertex:Ku,uv_vertex:Zu,uv2_pars_fragment:Ju,uv2_pars_vertex:Qu,uv2_vertex:$u,worldpos_vertex:ed,background_vert:td,background_frag:id,backgroundCube_vert:rd,backgroundCube_frag:nd,cube_vert:sd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:fd,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:vd,meshmatcap_vert:xd,meshmatcap_frag:yd,meshnormal_vert:Md,meshnormal_frag:bd,meshphong_vert:Sd,meshphong_frag:wd,meshphysical_vert:Td,meshphysical_frag:Ed,meshtoon_vert:Ad,meshtoon_frag:Cd,points_vert:Ld,points_frag:Rd,shadow_vert:Pd,shadow_frag:Id,sprite_vert:Dd,sprite_frag:Nd},ne={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new bt},uv2Transform:{value:new bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}}},Wt={basic:{uniforms:pt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:pt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:pt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:pt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:pt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:pt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:pt([ne.points,ne.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:pt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:pt([ne.common,ne.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:pt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:pt([ne.sprite,ne.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:pt([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:pt([ne.lights,ne.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Wt.physical={uniforms:pt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const mn={r:0,b:0,g:0};function Od(o,e,t,i,r,n,s){const a=new Ee(0);let l=n===!0?0:1,c,h,u=null,d=0,f=null;function g(p,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const M=o.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),S=!0),(o.autoClear||S)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vr)?(h===void 0&&(h=new Tt(new or(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:lr(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==ke,(u!==x||d!==x.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Tt(new ps(2,2),new Ci({name:"BackgroundMaterial",uniforms:lr(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){p.getRGB(mn,to(o)),i.buffers.color.setClear(mn.r,mn.g,mn.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function kd(o,e,t,i){const r=o.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||n!==null,a={},l=p(null);let c=l,h=!1;function u(D,W,Z,te,j){let ee=!1;if(s){const J=m(te,Z,W);c!==J&&(c=J,f(c.object)),ee=_(D,te,Z,j),ee&&S(D,te,Z,j)}else{const J=W.wireframe===!0;(c.geometry!==te.id||c.program!==Z.id||c.wireframe!==J)&&(c.geometry=te.id,c.program=Z.id,c.wireframe=J,ee=!0)}j!==null&&t.update(j,34963),(ee||h)&&(h=!1,y(D,W,Z,te),j!==null&&o.bindBuffer(34963,t.get(j).buffer))}function d(){return i.isWebGL2?o.createVertexArray():n.createVertexArrayOES()}function f(D){return i.isWebGL2?o.bindVertexArray(D):n.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?o.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function m(D,W,Z){const te=Z.wireframe===!0;let j=a[D.id];j===void 0&&(j={},a[D.id]=j);let ee=j[W.id];ee===void 0&&(ee={},j[W.id]=ee);let J=ee[te];return J===void 0&&(J=p(d()),ee[te]=J),J}function p(D){const W=[],Z=[],te=[];for(let j=0;j<r;j++)W[j]=0,Z[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:te,object:D,attributes:{},index:null}}function _(D,W,Z,te){const j=c.attributes,ee=W.attributes;let J=0;const _e=Z.getAttributes();for(const U in _e)if(_e[U].location>=0){const Y=j[U];let re=ee[U];if(re===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;J++}return c.attributesNum!==J||c.index!==te}function S(D,W,Z,te){const j={},ee=W.attributes;let J=0;const _e=Z.getAttributes();for(const U in _e)if(_e[U].location>=0){let Y=ee[U];Y===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),j[U]=re,J++}c.attributes=j,c.attributesNum=J,c.index=te}function x(){const D=c.newAttributes;for(let W=0,Z=D.length;W<Z;W++)D[W]=0}function M(D){w(D,0)}function w(D,W){const Z=c.newAttributes,te=c.enabledAttributes,j=c.attributeDivisors;Z[D]=1,te[D]===0&&(o.enableVertexAttribArray(D),te[D]=1),j[D]!==W&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,W),j[D]=W)}function L(){const D=c.newAttributes,W=c.enabledAttributes;for(let Z=0,te=W.length;Z<te;Z++)W[Z]!==D[Z]&&(o.disableVertexAttribArray(Z),W[Z]=0)}function P(D,W,Z,te,j,ee){i.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(D,W,Z,j,ee):o.vertexAttribPointer(D,W,Z,te,j,ee)}function y(D,W,Z,te){if(i.isWebGL2===!1&&(D.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=te.attributes,ee=Z.getAttributes(),J=W.defaultAttributeValues;for(const _e in ee){const U=ee[_e];if(U.location>=0){let Y=j[_e];if(Y===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){const re=Y.normalized,he=Y.itemSize,F=t.get(Y);if(F===void 0)continue;const Me=F.buffer,fe=F.type,me=F.bytesPerElement;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Ve=ae.stride,Te=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<U.locationSize;ve++)w(U.location+ve,ae.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<U.locationSize;ve++)M(U.location+ve);o.bindBuffer(34962,Me);for(let ve=0;ve<U.locationSize;ve++)P(U.location+ve,he/U.locationSize,fe,re,Ve*me,(Te+he/U.locationSize*ve)*me)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<U.locationSize;ae++)w(U.location+ae,Y.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<U.locationSize;ae++)M(U.location+ae);o.bindBuffer(34962,Me);for(let ae=0;ae<U.locationSize;ae++)P(U.location+ae,he/U.locationSize,fe,re,he*me,he/U.locationSize*ae*me)}}else if(J!==void 0){const re=J[_e];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(U.location,re);break;case 3:o.vertexAttrib3fv(U.location,re);break;case 4:o.vertexAttrib4fv(U.location,re);break;default:o.vertexAttrib1fv(U.location,re)}}}}L()}function E(){K();for(const D in a){const W=a[D];for(const Z in W){const te=W[Z];for(const j in te)g(te[j].object),delete te[j];delete W[Z]}delete a[D]}}function N(D){if(a[D.id]===void 0)return;const W=a[D.id];for(const Z in W){const te=W[Z];for(const j in te)g(te[j].object),delete te[j];delete W[Z]}delete a[D.id]}function X(D){for(const W in a){const Z=a[W];if(Z[D.id]===void 0)continue;const te=Z[D.id];for(const j in te)g(te[j].object),delete te[j];delete Z[D.id]}}function K(){k(),h=!0,c!==l&&(c=l,f(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:N,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:M,disableUnusedAttributes:L}}function zd(o,e,t,i){const r=i.isWebGL2;let n;function s(c){n=c}function a(c,h){o.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,u){if(u===0)return;let d,f;if(r)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](n,c,h,u),t.update(h,n,u)}this.setMode=s,this.render=a,this.renderInstances=l}function Ud(o,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=n(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),S=o.getParameter(36349),x=d>0,M=s||e.has("OES_texture_float"),w=x&&M,L=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:L}}function Fd(o){const e=this;let t=null,i=0,r=!1,n=!1;const s=new Li,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,_=o.get(u);if(!r||g===null||g.length===0||n&&!p)n?h(null):c();else{const S=n?0:i,x=S*4;let M=_.clippingState||null;l.value=M,M=h(g,d,x,f);for(let w=0;w!==x;++w)M[w]=t[w];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=f+m*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,M=f;x!==m;++x,M+=4)s.copy(u[x]).applyMatrix4(S,a),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Bd(o){let e=new WeakMap;function t(s,a){return a===Ln?s.mapping=Gi:a===Rn&&(s.mapping=Hi),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ln||a===Rn)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new $c(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class ms extends io{constructor(e=-1,t=1,i=1,r=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,s=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,so=[.125,.215,.35,.446,.526,.582],Ri=20,fs=new ms,ao=new Ee;let gs=null;const Pi=(1+Math.sqrt(5))/2,pr=1/Pi,oo=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Pi,pr),new C(0,Pi,-pr),new C(pr,0,Pi),new C(-pr,0,Pi),new C(Pi,pr,0),new C(-Pi,pr,0)];class lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){gs=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gs),e.scissorTest=!1,fn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gs=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:Mr,format:Rt,encoding:Mi,depthBuffer:!1},r=co(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=co(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(n)),this._blurMaterial=Hd(n,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,i,r){const n=new mt(90,1,t,i),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(ao),l.toneMapping=Kt,l.autoClear=!1;const u=new Ai({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),d=new Tt(new or,u);let f=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,f=!0):(u.color.copy(ao),f=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(n.up.set(0,s[m],0),n.lookAt(a[m],0,0)):p===1?(n.up.set(0,0,s[m]),n.lookAt(0,a[m],0)):(n.up.set(0,s[m],0),n.lookAt(0,0,a[m]));const _=this._cubeSize;fn(r,p*_,m>2?_:0,_,_),l.setRenderTarget(r),f&&l.render(d,n),l.render(e,n)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const n=r?this._cubemapMaterial:this._equirectMaterial,s=new Tt(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const l=this._cubeSize;fn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,fs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=oo[(r-1)%oo.length];this._blur(e,r-1,r,n,s)}t.autoClear=i}_blur(e,t,i,r,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",n),this._halfBlur(s,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),m=n/g,p=isFinite(n)?1+Math.floor(h*m):Ri;p>Ri&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const _=[];let S=0;for(let P=0;P<Ri;++P){const y=P/m,E=Math.exp(-y*y/2);_.push(E),P===0?S+=E:P<p&&(S+=2*E)}for(let P=0;P<_.length;P++)_[P]=_[P]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const M=this._sizeLods[r],w=3*M*(r>x-dr?r-x+dr:0),L=4*(this._cubeSize-M);fn(t,w,L,3*M,2*M),l.setRenderTarget(t),l.render(u,fs)}}function Gd(o){const e=[],t=[],i=[];let r=o;const n=o-dr+1+so.length;for(let s=0;s<n;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>o-dr?l=so[s-o+dr-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,p=2,_=1,S=new Float32Array(m*g*f),x=new Float32Array(p*g*f),M=new Float32Array(_*g*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,y=L>2?0:-1,E=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];S.set(E,m*g*L),x.set(d,p*g*L);const N=[L,L,L,L,L,L];M.set(N,_*g*L)}const w=new Bt;w.setAttribute("position",new at(S,m)),w.setAttribute("uv",new at(x,p)),w.setAttribute("faceIndex",new at(M,_)),e.push(w),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function co(o,e,t){const i=new Si(o,e,t);return i.texture.mapping=Vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fn(o,e,t,i,r){o.viewport.set(e,t,i,r),o.scissor.set(e,t,i,r)}function Hd(o,e,t){const i=new Float32Array(Ri),r=new C(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ho(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function uo(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function _s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vd(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ln||l===Rn,h=l===Gi||l===Hi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new lo(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new lo(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",n),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function n(a){const l=a.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Wd(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jd(o,e,t,i){const r={},n=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete r[d.id];const f=n.get(d);f&&(e.remove(f),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const m=f[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let m=0;if(f!==null){const S=f.array;m=f.version;for(let x=0,M=S.length;x<M;x+=3){const w=S[x+0],L=S[x+1],P=S[x+2];d.push(w,L,L,P,P,w)}}else{const S=g.array;m=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const w=x+0,L=x+1,P=x+2;d.push(w,L,L,P,P,w)}}const p=new(za(d)?$a:Qa)(d,1);p.version=m;const _=n.get(u);_&&e.remove(_),n.set(u,p)}function h(u){const d=n.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return n.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qd(o,e,t,i){const r=i.isWebGL2;let n;function s(d){n=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(n,f,a,d*l),t.update(f,n,1)}function u(d,f,g){if(g===0)return;let m,p;if(r)m=o,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](n,f,a,d*l,g),t.update(f,n,g)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function Xd(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(n/3);break;case 1:t.lines+=a*(n/2);break;case 3:t.lines+=a*(n-1);break;case 2:t.lines+=a*n;break;case 0:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yd(o,e){return o[0]-e[0]}function Kd(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Zd(o,e,t){const i={},r=new Float32Array(8),n=new WeakMap,s=new Ge,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let p=n.get(h);if(p===void 0||p.count!==m){let x=function(){D.dispose(),n.delete(h),h.removeEventListener("dispose",x)};p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let N=0;M===!0&&(N=1),w===!0&&(N=2),L===!0&&(N=3);let X=h.attributes.position.count*N,K=1;X>e.maxTextureSize&&(K=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const k=new Float32Array(X*K*4*m),D=new Ga(k,X,K,m);D.type=li,D.needsUpdate=!0;const W=N*4;for(let Z=0;Z<m;Z++){const te=P[Z],j=y[Z],ee=E[Z],J=X*K*4*Z;for(let _e=0;_e<te.count;_e++){const U=_e*W;M===!0&&(s.fromBufferAttribute(te,_e),k[J+U+0]=s.x,k[J+U+1]=s.y,k[J+U+2]=s.z,k[J+U+3]=0),w===!0&&(s.fromBufferAttribute(j,_e),k[J+U+4]=s.x,k[J+U+5]=s.y,k[J+U+6]=s.z,k[J+U+7]=0),L===!0&&(s.fromBufferAttribute(ee,_e),k[J+U+8]=s.x,k[J+U+9]=s.y,k[J+U+10]=s.z,k[J+U+11]=ee.itemSize===4?s.w:1)}}p={count:m,texture:D,size:new be(X,K)},n.set(h,p),h.addEventListener("dispose",x)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const S=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",S),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let m=i[h.id];if(m===void 0||m.length!==g){m=[];for(let M=0;M<g;M++)m[M]=[M,0];i[h.id]=m}for(let M=0;M<g;M++){const w=m[M];w[0]=M,w[1]=f[M]}m.sort(Kd);for(let M=0;M<8;M++)M<g&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Yd);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const w=a[M],L=w[0],P=w[1];L!==Number.MAX_SAFE_INTEGER&&P?(p&&h.getAttribute("morphTarget"+M)!==p[L]&&h.setAttribute("morphTarget"+M,p[L]),_&&h.getAttribute("morphNormal"+M)!==_[L]&&h.setAttribute("morphNormal"+M,_[L]),r[M]=P,S+=P):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),_&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const x=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(o,"morphTargetBaseInfluence",x),d.getUniforms().setValue(o,"morphTargetInfluences",r)}}return{update:l}}function Jd(o,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}const po=new st,mo=new Ga,fo=new zc,go=new ro,_o=[],vo=[],xo=new Float32Array(16),yo=new Float32Array(9),Mo=new Float32Array(4);function mr(o,e,t){const i=o[0];if(i<=0||i>0)return o;const r=e*t;let n=_o[r];if(n===void 0&&(n=new Float32Array(r),_o[r]=n),e!==0){i.toArray(n,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(n,a)}return n}function Je(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function Qe(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function gn(o,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function Qd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function $d(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;o.uniform2fv(this.addr,e),Qe(t,e)}}function ep(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;o.uniform3fv(this.addr,e),Qe(t,e)}}function tp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;o.uniform4fv(this.addr,e),Qe(t,e)}}function ip(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Je(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,i))return;Mo.set(i),o.uniformMatrix2fv(this.addr,!1,Mo),Qe(t,i)}}function rp(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Je(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,i))return;yo.set(i),o.uniformMatrix3fv(this.addr,!1,yo),Qe(t,i)}}function np(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Je(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,i))return;xo.set(i),o.uniformMatrix4fv(this.addr,!1,xo),Qe(t,i)}}function sp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ap(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;o.uniform2iv(this.addr,e),Qe(t,e)}}function op(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;o.uniform3iv(this.addr,e),Qe(t,e)}}function lp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;o.uniform4iv(this.addr,e),Qe(t,e)}}function cp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function hp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;o.uniform2uiv(this.addr,e),Qe(t,e)}}function up(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;o.uniform3uiv(this.addr,e),Qe(t,e)}}function dp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;o.uniform4uiv(this.addr,e),Qe(t,e)}}function pp(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||po,r)}function mp(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fo,r)}function fp(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||go,r)}function gp(o,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mo,r)}function _p(o){switch(o){case 5126:return Qd;case 35664:return $d;case 35665:return ep;case 35666:return tp;case 35674:return ip;case 35675:return rp;case 35676:return np;case 5124:case 35670:return sp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return gp}}function vp(o,e){o.uniform1fv(this.addr,e)}function xp(o,e){const t=mr(e,this.size,2);o.uniform2fv(this.addr,t)}function yp(o,e){const t=mr(e,this.size,3);o.uniform3fv(this.addr,t)}function Mp(o,e){const t=mr(e,this.size,4);o.uniform4fv(this.addr,t)}function bp(o,e){const t=mr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Sp(o,e){const t=mr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function wp(o,e){const t=mr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Tp(o,e){o.uniform1iv(this.addr,e)}function Ep(o,e){o.uniform2iv(this.addr,e)}function Ap(o,e){o.uniform3iv(this.addr,e)}function Cp(o,e){o.uniform4iv(this.addr,e)}function Lp(o,e){o.uniform1uiv(this.addr,e)}function Rp(o,e){o.uniform2uiv(this.addr,e)}function Pp(o,e){o.uniform3uiv(this.addr,e)}function Ip(o,e){o.uniform4uiv(this.addr,e)}function Dp(o,e,t){const i=this.cache,r=e.length,n=gn(t,r);Je(i,n)||(o.uniform1iv(this.addr,n),Qe(i,n));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||po,n[s])}function Np(o,e,t){const i=this.cache,r=e.length,n=gn(t,r);Je(i,n)||(o.uniform1iv(this.addr,n),Qe(i,n));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||fo,n[s])}function Op(o,e,t){const i=this.cache,r=e.length,n=gn(t,r);Je(i,n)||(o.uniform1iv(this.addr,n),Qe(i,n));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||go,n[s])}function kp(o,e,t){const i=this.cache,r=e.length,n=gn(t,r);Je(i,n)||(o.uniform1iv(this.addr,n),Qe(i,n));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||mo,n[s])}function zp(o){switch(o){case 5126:return vp;case 35664:return xp;case 35665:return yp;case 35666:return Mp;case 35674:return bp;case 35675:return Sp;case 35676:return wp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ep;case 35668:case 35672:return Ap;case 35669:case 35673:return Cp;case 5125:return Lp;case 36294:return Rp;case 36295:return Pp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return kp}}class Up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=_p(t.type)}}class Fp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=zp(t.type)}}class Bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,s=r.length;n!==s;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const vs=/(\w+)(\])?(\[|\.)?/g;function bo(o,e){o.seq.push(e),o.map[e.id]=e}function Gp(o,e,t){const i=o.name,r=i.length;for(vs.lastIndex=0;;){const n=vs.exec(i),s=vs.lastIndex;let a=n[1];const l=n[2]==="]",c=n[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){bo(t,c===void 0?new Up(a,o,e):new Fp(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new Bp(a),bo(t,h)),t=h}}}class _n{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),s=e.getUniformLocation(t,n.name);Gp(n,s,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,s=t.length;n!==s;++n){const a=t[n],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function So(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let Hp=0;function Vp(o,e){const t=o.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=r;s<n;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function Wp(o){switch(o){case Mi:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function wo(o,e,t){const i=o.getShaderParameter(e,35713),r=o.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Vp(o.getShaderSource(e),s)}else return r}function jp(o,e){const t=Wp(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qp(o,e){let t;switch(e){case Yl:t="Linear";break;case Kl:t="Reinhard";break;case sa:t="OptimizedCineon";break;case Zl:t="ACESFilmic";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xp(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function Yp(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kp(o,e){const t={},i=o.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=o.getActiveAttrib(e,r),s=n.name;let a=1;n.type===35674&&(a=2),n.type===35675&&(a=3),n.type===35676&&(a=4),t[s]={type:n.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function Nr(o){return o!==""}function To(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function xs(o){return o.replace(Zp,Jp)}function Jp(o,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xs(t)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(o){return o.replace(Qp,$p)}function $p(o,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Co(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function em(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ks?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Zs?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===yr&&(e="SHADOWMAP_TYPE_VSM"),e}function tm(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Gi:case Hi:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function im(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function rm(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function nm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sm(o,e,t,i){const r=o.getContext(),n=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=em(t),c=tm(t),h=im(t),u=rm(t),d=nm(t),f=t.isWebGL2?"":Xp(t),g=Yp(n),m=r.createProgram();let p,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Nr).join(`
`),p.length>0&&(p+=`
`),_=[f,g].filter(Nr).join(`
`),_.length>0&&(_+=`
`)):(p=[Co(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),_=[f,Co(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kt?"#define TONE_MAPPING":"",t.toneMapping!==Kt?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Kt?qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,jp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),s=xs(s),s=To(s,t),s=Eo(s,t),a=xs(a),a=To(a,t),a=Eo(a,t),s=Ao(s),a=Ao(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=S+p+s,M=S+_+a,w=So(r,35633,x),L=So(r,35632,M);if(r.attachShader(m,w),r.attachShader(m,L),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),o.debug.checkShaderErrors){const E=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(w).trim(),X=r.getShaderInfoLog(L).trim();let K=!0,k=!0;if(r.getProgramParameter(m,35714)===!1){K=!1;const D=wo(r,w,"vertex"),W=wo(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+D+`
`+W)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(N===""||X==="")&&(k=!1);k&&(this.diagnostics={runnable:K,programLog:E,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:_}})}r.deleteShader(w),r.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new _n(r,m)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=Kp(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Hp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=L,this}let am=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lm(e),t.set(e,i)),i}}class lm{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function cm(o,e,t,i,r,n,s){const a=new ja,l=new om,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,E,N,X,K){const k=X.fog,D=K.geometry,W=y.isMeshStandardMaterial?X.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),te=Z&&Z.mapping===Vr?Z.image.height:null,j=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=ee!==void 0?ee.length:0;let _e=0;D.morphAttributes.position!==void 0&&(_e=1),D.morphAttributes.normal!==void 0&&(_e=2),D.morphAttributes.color!==void 0&&(_e=3);let U,Y,re,he;if(j){const ae=Wt[j];U=ae.vertexShader,Y=ae.fragmentShader}else U=y.vertexShader,Y=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const F=o.getRenderTarget(),Me=y.alphaTest>0,fe=y.clearcoat>0,me=y.iridescence>0;return{isWebGL2:h,shaderID:j,shaderName:y.type,vertexShader:U,fragmentShader:Y,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?o.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Mi,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:te,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===yc,tangentSpaceNormalMap:y.normalMapType===Da,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ke,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!y.iridescenceMap,iridescenceThicknessMap:me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Fi,alphaMap:!!y.alphaMap,alphaTest:Me,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:_e,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:Kt,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yt,flipSided:y.side===Mt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(E,y),S(E,y),E.push(o.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.combine),y.push(E.vertexUvs),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),y.push(a.mask)}function x(y){const E=g[y.type];let N;if(E){const X=Wt[E];N=Kc.clone(X.uniforms)}else N=y.uniforms;return N}function M(y,E){let N;for(let X=0,K=c.length;X<K;X++){const k=c[X];if(k.cacheKey===E){N=k,++N.usedTimes;break}}return N===void 0&&(N=new sm(o,E,y,n),c.push(N)),N}function w(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:L,programs:c,dispose:P}}function hm(){let o=new WeakMap;function e(n){let s=o.get(n);return s===void 0&&(s={},o.set(n,s)),s}function t(n){o.delete(n)}function i(n,s,a){o.get(n)[s]=a}function r(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function um(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Lo(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ro(){const o=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function s(u,d,f,g,m,p){let _=o[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},o[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=p),e++,_}function a(u,d,f,g,m,p){const _=s(u,d,f,g,m,p);f.transmission>0?i.push(_):f.transparent===!0?r.push(_):t.push(_)}function l(u,d,f,g,m,p){const _=s(u,d,f,g,m,p);f.transmission>0?i.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||um),i.length>1&&i.sort(d||Lo),r.length>1&&r.sort(d||Lo)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:l,finish:h,sort:c}}function dm(){let o=new WeakMap;function e(i,r){const n=o.get(i);let s;return n===void 0?(s=new Ro,o.set(i,[s])):r>=n.length?(s=new Ro,n.push(s)):s=n[r],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function pm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return o[e.id]=t,t}}}function mm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let fm=0;function gm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function _m(o,e){const t=new pm,i=mm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new C);const n=new C,s=new Ae,a=new Ae;function l(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let m=0,p=0,_=0,S=0,x=0,M=0,w=0,L=0,P=0,y=0;h.sort(gm);const E=u!==!0?Math.PI:1;for(let X=0,K=h.length;X<K;X++){const k=h[X],D=k.color,W=k.intensity,Z=k.distance,te=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=D.r*W*E,f+=D.g*W*E,g+=D.b*W*E;else if(k.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(k.sh.coefficients[j],W);else if(k.isDirectionalLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*E),k.castShadow){const ee=k.shadow,J=i.get(k);J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,r.directionalShadow[m]=J,r.directionalShadowMap[m]=te,r.directionalShadowMatrix[m]=k.shadow.matrix,M++}r.directional[m]=j,m++}else if(k.isSpotLight){const j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(D).multiplyScalar(W*E),j.distance=Z,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,r.spot[_]=j;const ee=k.shadow;if(k.map&&(r.spotLightMap[P]=k.map,P++,ee.updateMatrices(k),k.castShadow&&y++),r.spotLightMatrix[_]=ee.matrix,k.castShadow){const J=i.get(k);J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,r.spotShadow[_]=J,r.spotShadowMap[_]=te,L++}_++}else if(k.isRectAreaLight){const j=t.get(k);j.color.copy(D).multiplyScalar(W),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=j,S++}else if(k.isPointLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*E),j.distance=k.distance,j.decay=k.decay,k.castShadow){const ee=k.shadow,J=i.get(k);J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,J.shadowCameraNear=ee.camera.near,J.shadowCameraFar=ee.camera.far,r.pointShadow[p]=J,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=k.shadow.matrix,w++}r.point[p]=j,p++}else if(k.isHemisphereLight){const j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(W*E),j.groundColor.copy(k.groundColor).multiplyScalar(W*E),r.hemi[x]=j,x++}}S>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==m||N.pointLength!==p||N.spotLength!==_||N.rectAreaLength!==S||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==w||N.numSpotShadows!==L||N.numSpotMaps!==P)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=S,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=L+P-y,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=y,N.directionalLength=m,N.pointLength=p,N.spotLength=_,N.rectAreaLength=S,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=w,N.numSpotShadows=L,N.numSpotMaps=P,r.version=fm++)}function c(h,u){let d=0,f=0,g=0,m=0,p=0;const _=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const M=h[S];if(M.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(_),d++}else if(M.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const w=r.rectArea[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),a.identity(),s.copy(M.matrixWorld),s.premultiply(_),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const w=r.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:r}}function Po(o,e){const t=new _m(o,e),i=[],r=[];function n(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function vm(o,e){let t=new WeakMap;function i(n,s=0){const a=t.get(n);let l;return a===void 0?(l=new Po(o,e),t.set(n,[l])):s>=a.length?(l=new Po(o,e),a.push(l)):l=a[s],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class xm extends Vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ym extends Vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sm(o,e,t){let i=new ds;const r=new be,n=new be,s=new Ge,a=new xm({depthPacking:xc}),l=new ym,c={},h=t.maxTextureSize,u={[Xt]:Mt,[Mt]:Xt,[Yt]:Yt},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Mm,fragmentShader:bm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Tt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks,this.render=function(M,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const P=o.getRenderTarget(),y=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),N=o.state;N.setBlending(oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let X=0,K=M.length;X<K;X++){const k=M[X],D=k.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const W=D.getFrameExtents();if(r.multiply(W),n.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/W.x),r.x=n.x*W.x,D.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/W.y),r.y=n.y*W.y,D.mapSize.y=n.y)),D.map===null){const te=this.type!==yr?{minFilter:$e,magFilter:$e}:{};D.map=new Si(r.x,r.y,te),D.map.texture.name=k.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const Z=D.getViewportCount();for(let te=0;te<Z;te++){const j=D.getViewport(te);s.set(n.x*j.x,n.y*j.y,n.x*j.z,n.y*j.w),N.viewport(s),D.updateMatrices(k,te),i=D.getFrustum(),x(w,L,D.camera,k,this.type)}D.isPointLightShadow!==!0&&this.type===yr&&_(D,L),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(P,y,E)};function _(M,w){const L=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(w,null,L,d,m,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(w,null,L,f,m,null)}function S(M,w,L,P,y,E){let N=null;const X=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(X!==void 0)N=X;else if(N=L.isPointLight===!0?l:a,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=N.uuid,k=w.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let W=D[k];W===void 0&&(W=N.clone(),D[k]=W),N=W}return N.visible=w.visible,N.wireframe=w.wireframe,E===yr?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:u[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,L.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(L.matrixWorld),N.nearDistance=P,N.farDistance=y),N}function x(M,w,L,P,y){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===yr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const N=e.update(M),X=M.material;if(Array.isArray(X)){const K=N.groups;for(let k=0,D=K.length;k<D;k++){const W=K[k],Z=X[W.materialIndex];if(Z&&Z.visible){const te=S(M,Z,P,L.near,L.far,y);o.renderBufferDirect(L,null,N,te,M,W)}}}else if(X.visible){const K=S(M,X,P,L.near,L.far,y);o.renderBufferDirect(L,null,N,K,M,null)}}const E=M.children;for(let N=0,X=E.length;N<X;N++)x(E[N],w,L,P,y)}}function wm(o,e,t){const i=t.isWebGL2;function r(){let R=!1;const G=new Ge;let Q=null;const le=new Ge(0,0,0,0);return{setMask:function(xe){Q!==xe&&!R&&(o.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){R=xe},setClear:function(xe,Fe,nt,ht,Oi){Oi===!0&&(xe*=ht,Fe*=ht,nt*=ht),G.set(xe,Fe,nt,ht),le.equals(G)===!1&&(o.clearColor(xe,Fe,nt,ht),le.copy(G))},reset:function(){R=!1,Q=null,le.set(-1,0,0,0)}}}function n(){let R=!1,G=null,Q=null,le=null;return{setTest:function(xe){xe?Me(2929):fe(2929)},setMask:function(xe){G!==xe&&!R&&(o.depthMask(xe),G=xe)},setFunc:function(xe){if(Q!==xe){switch(xe){case Fl:o.depthFunc(512);break;case Bl:o.depthFunc(519);break;case Gl:o.depthFunc(513);break;case Cn:o.depthFunc(515);break;case Hl:o.depthFunc(514);break;case Vl:o.depthFunc(518);break;case Wl:o.depthFunc(516);break;case jl:o.depthFunc(517);break;default:o.depthFunc(515)}Q=xe}},setLocked:function(xe){R=xe},setClear:function(xe){le!==xe&&(o.clearDepth(xe),le=xe)},reset:function(){R=!1,G=null,Q=null,le=null}}}function s(){let R=!1,G=null,Q=null,le=null,xe=null,Fe=null,nt=null,ht=null,Oi=null;return{setTest:function(We){R||(We?Me(2960):fe(2960))},setMask:function(We){G!==We&&!R&&(o.stencilMask(We),G=We)},setFunc:function(We,si,Ot){(Q!==We||le!==si||xe!==Ot)&&(o.stencilFunc(We,si,Ot),Q=We,le=si,xe=Ot)},setOp:function(We,si,Ot){(Fe!==We||nt!==si||ht!==Ot)&&(o.stencilOp(We,si,Ot),Fe=We,nt=si,ht=Ot)},setLocked:function(We){R=We},setClear:function(We){Oi!==We&&(o.clearStencil(We),Oi=We)},reset:function(){R=!1,G=null,Q=null,le=null,xe=null,Fe=null,nt=null,ht=null,Oi=null}}}const a=new r,l=new n,c=new s,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,m=[],p=null,_=!1,S=null,x=null,M=null,w=null,L=null,P=null,y=null,E=!1,N=null,X=null,K=null,k=null,D=null;const W=o.getParameter(35661);let Z=!1,te=0;const j=o.getParameter(7938);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=te>=2);let ee=null,J={};const _e=o.getParameter(3088),U=o.getParameter(2978),Y=new Ge().fromArray(_e),re=new Ge().fromArray(U);function he(R,G,Q){const le=new Uint8Array(4),xe=o.createTexture();o.bindTexture(R,xe),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Fe=0;Fe<Q;Fe++)o.texImage2D(G+Fe,0,6408,1,1,0,6408,5121,le);return xe}const F={};F[3553]=he(3553,3553,1),F[34067]=he(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(Cn),Ye(!1),gt(Ys),Me(2884),it(oi);function Me(R){d[R]!==!0&&(o.enable(R),d[R]=!0)}function fe(R){d[R]!==!1&&(o.disable(R),d[R]=!1)}function me(R,G){return f[R]!==G?(o.bindFramebuffer(R,G),f[R]=G,i&&(R===36009&&(f[36160]=G),R===36160&&(f[36009]=G)),!0):!1}function ae(R,G){let Q=m,le=!1;if(R)if(Q=g.get(G),Q===void 0&&(Q=[],g.set(G,Q)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(Q.length!==xe.length||Q[0]!==36064){for(let Fe=0,nt=xe.length;Fe<nt;Fe++)Q[Fe]=36064+Fe;Q.length=xe.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?o.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ve(R){return p!==R?(o.useProgram(R),p=R,!0):!1}const Te={[Bi]:32774,[Cl]:32778,[Ll]:32779};if(i)Te[ea]=32775,Te[ta]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Te[ea]=R.MIN_EXT,Te[ta]=R.MAX_EXT)}const ve={[Rl]:0,[Pl]:1,[Il]:768,[ia]:770,[Ul]:776,[kl]:774,[Nl]:772,[Dl]:769,[ra]:771,[zl]:775,[Ol]:773};function it(R,G,Q,le,xe,Fe,nt,ht){if(R===oi){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Me(3042),_=!0),R!==Al){if(R!==S||ht!==E){if((x!==Bi||L!==Bi)&&(o.blendEquation(32774),x=Bi,L=Bi),ht)switch(R){case Fi:o.blendFuncSeparate(1,771,1,771);break;case Js:o.blendFunc(1,1);break;case Qs:o.blendFuncSeparate(0,769,0,1);break;case $s:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Fi:o.blendFuncSeparate(770,771,1,771);break;case Js:o.blendFunc(770,1);break;case Qs:o.blendFuncSeparate(0,769,0,1);break;case $s:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,w=null,P=null,y=null,S=R,E=ht}return}xe=xe||G,Fe=Fe||Q,nt=nt||le,(G!==x||xe!==L)&&(o.blendEquationSeparate(Te[G],Te[xe]),x=G,L=xe),(Q!==M||le!==w||Fe!==P||nt!==y)&&(o.blendFuncSeparate(ve[Q],ve[le],ve[Fe],ve[nt]),M=Q,w=le,P=Fe,y=nt),S=R,E=!1}function ct(R,G){R.side===Yt?fe(2884):Me(2884);let Q=R.side===Mt;G&&(Q=!Q),Ye(Q),R.blending===Fi&&R.transparent===!1?it(oi):it(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const le=R.stencilWrite;c.setTest(le),le&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ze(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Me(32926):fe(32926)}function Ye(R){N!==R&&(R?o.frontFace(2304):o.frontFace(2305),N=R)}function gt(R){R!==Tl?(Me(2884),R!==X&&(R===Ys?o.cullFace(1029):R===El?o.cullFace(1028):o.cullFace(1032))):fe(2884),X=R}function qe(R){R!==K&&(Z&&o.lineWidth(R),K=R)}function ze(R,G,Q){R?(Me(32823),(k!==G||D!==Q)&&(o.polygonOffset(G,Q),k=G,D=Q)):fe(32823)}function Nt(R){R?Me(3089):fe(3089)}function yt(R){R===void 0&&(R=33984+W-1),ee!==R&&(o.activeTexture(R),ee=R)}function T(R,G,Q){Q===void 0&&(ee===null?Q=33984+W-1:Q=ee);let le=J[Q];le===void 0&&(le={type:void 0,texture:void 0},J[Q]=le),(le.type!==R||le.texture!==G)&&(ee!==Q&&(o.activeTexture(Q),ee=Q),o.bindTexture(R,G||F[R]),le.type=R,le.texture=G)}function v(){const R=J[ee];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function B(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function I(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(R){Y.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function ge(R){re.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function we(R,G){let Q=u.get(G);Q===void 0&&(Q=new WeakMap,u.set(G,Q));let le=Q.get(R);le===void 0&&(le=o.getUniformBlockIndex(G,R.name),Q.set(R,le))}function Pe(R,G){const Q=u.get(G).get(R);h.get(G)!==Q&&(o.uniformBlockBinding(G,Q,R.__bindingPointIndex),h.set(G,Q))}function rt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},ee=null,J={},f={},g=new WeakMap,m=[],p=null,_=!1,S=null,x=null,M=null,w=null,L=null,P=null,y=null,E=!1,N=null,X=null,K=null,k=null,D=null,Y.set(0,0,o.canvas.width,o.canvas.height),re.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:fe,bindFramebuffer:me,drawBuffers:ae,useProgram:Ve,setBlending:it,setMaterial:ct,setFlipSided:Ye,setCullFace:gt,setLineWidth:qe,setPolygonOffset:ze,setScissorTest:Nt,activeTexture:yt,bindTexture:T,unbindTexture:v,compressedTexImage2D:B,compressedTexImage3D:$,texImage2D:ue,texImage3D:ce,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:I,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ye,compressedTexSubImage3D:A,scissor:de,viewport:ge,reset:rt}}function Tm(o,e,t,i,r,n,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,v){return _?new OffscreenCanvas(T,v):Er("canvas")}function x(T,v,B,$){let ie=1;if((T.width>$||T.height>$)&&(ie=$/Math.max(T.width,T.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=v?Yr:Math.floor,ye=se(ie*T.width),A=se(ie*T.height);m===void 0&&(m=S(ye,A));const I=B?S(ye,A):m;return I.width=ye,I.height=A,I.getContext("2d").drawImage(T,0,0,ye,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+A+")."),I}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Wn(T.width)&&Wn(T.height)}function w(T){return a?!1:T.wrapS!==Lt||T.wrapT!==Lt||T.minFilter!==$e&&T.minFilter!==xt}function L(T,v){return T.generateMipmaps&&v&&T.minFilter!==$e&&T.minFilter!==xt}function P(T){o.generateMipmap(T)}function y(T,v,B,$,ie=!1){if(a===!1)return v;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=v;return v===6403&&(B===5126&&(se=33326),B===5131&&(se=33325),B===5121&&(se=33321)),v===33319&&(B===5126&&(se=33328),B===5131&&(se=33327),B===5121&&(se=33323)),v===6408&&(B===5126&&(se=34836),B===5131&&(se=34842),B===5121&&(se=$===ke&&ie===!1?35907:32856),B===32819&&(se=32854),B===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function E(T,v,B){return L(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==$e&&T.minFilter!==xt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function N(T){return T===$e||T===Pn||T===jr?9728:9729}function X(T){const v=T.target;v.removeEventListener("dispose",X),k(v),v.isVideoTexture&&g.delete(v)}function K(T){const v=T.target;v.removeEventListener("dispose",K),W(v)}function k(T){const v=i.get(T);if(v.__webglInit===void 0)return;const B=T.source,$=p.get(B);if($){const ie=$[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(T),Object.keys($).length===0&&p.delete(B)}i.remove(T)}function D(T){const v=i.get(T);o.deleteTexture(v.__webglTexture);const B=T.source,$=p.get(B);delete $[v.__cacheKey],s.memory.textures--}function W(T){const v=T.texture,B=i.get(T),$=i.get(v);if($.__webglTexture!==void 0&&(o.deleteTexture($.__webglTexture),s.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(B.__webglFramebuffer[ie]),B.__webglDepthbuffer&&o.deleteRenderbuffer(B.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&o.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&o.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ie=0;ie<B.__webglColorRenderbuffer.length;ie++)B.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(B.__webglColorRenderbuffer[ie]);B.__webglDepthRenderbuffer&&o.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,se=v.length;ie<se;ie++){const ye=i.get(v[ie]);ye.__webglTexture&&(o.deleteTexture(ye.__webglTexture),s.memory.textures--),i.remove(v[ie])}i.remove(v),i.remove(T)}let Z=0;function te(){Z=0}function j(){const T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function ee(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.encoding),v.join()}function J(T,v){const B=i.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(B,T,v);return}}t.bindTexture(3553,B.__webglTexture,33984+v)}function _e(T,v){const B=i.get(T);if(T.version>0&&B.__version!==T.version){fe(B,T,v);return}t.bindTexture(35866,B.__webglTexture,33984+v)}function U(T,v){const B=i.get(T);if(T.version>0&&B.__version!==T.version){fe(B,T,v);return}t.bindTexture(32879,B.__webglTexture,33984+v)}function Y(T,v){const B=i.get(T);if(T.version>0&&B.__version!==T.version){me(B,T,v);return}t.bindTexture(34067,B.__webglTexture,33984+v)}const re={[Vi]:10497,[Lt]:33071,[Wr]:33648},he={[$e]:9728,[Pn]:9984,[jr]:9986,[xt]:9729,[oa]:9985,[_i]:9987};function F(T,v,B){if(B?(o.texParameteri(T,10242,re[v.wrapS]),o.texParameteri(T,10243,re[v.wrapT]),(T===32879||T===35866)&&o.texParameteri(T,32882,re[v.wrapR]),o.texParameteri(T,10240,he[v.magFilter]),o.texParameteri(T,10241,he[v.minFilter])):(o.texParameteri(T,10242,33071),o.texParameteri(T,10243,33071),(T===32879||T===35866)&&o.texParameteri(T,32882,33071),(v.wrapS!==Lt||v.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,10240,N(v.magFilter)),o.texParameteri(T,10241,N(v.minFilter)),v.minFilter!==$e&&v.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===$e||v.minFilter!==jr&&v.minFilter!==_i||v.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(o.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Me(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",X));const $=v.source;let ie=p.get($);ie===void 0&&(ie={},p.set($,ie));const se=ee(v);if(se!==T.__cacheKey){ie[se]===void 0&&(ie[se]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,B=!0),ie[se].usedTimes++;const ye=ie[T.__cacheKey];ye!==void 0&&(ie[T.__cacheKey].usedTimes--,ye.usedTimes===0&&D(v)),T.__cacheKey=se,T.__webglTexture=ie[se].texture}return B}function fe(T,v,B){let $=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=35866),v.isData3DTexture&&($=32879);const ie=Me(T,v),se=v.source;t.bindTexture($,T.__webglTexture,33984+B);const ye=i.get(se);if(se.version!==ye.__version||ie===!0){t.activeTexture(33984+B),o.pixelStorei(37440,v.flipY),o.pixelStorei(37441,v.premultiplyAlpha),o.pixelStorei(3317,v.unpackAlignment),o.pixelStorei(37443,0);const A=w(v)&&M(v.image)===!1;let I=x(v.image,A,!1,h);I=yt(v,I);const oe=M(I)||a,ue=n.convert(v.format,v.encoding);let ce=n.convert(v.type),de=y(v.internalFormat,ue,ce,v.encoding,v.isVideoTexture);F($,v,oe);let ge;const we=v.mipmaps,Pe=a&&v.isVideoTexture!==!0,rt=ye.__version===void 0||ie===!0,R=E(v,I,oe);if(v.isDepthTexture)de=6402,a?v.type===li?de=36012:v.type===xi?de=33190:v.type===Wi?de=35056:de=33189:v.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===yi&&de===6402&&v.type!==la&&v.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=xi,ce=n.convert(v.type)),v.format===ji&&de===6402&&(de=34041,v.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Wi,ce=n.convert(v.type))),rt&&(Pe?t.texStorage2D(3553,1,de,I.width,I.height):t.texImage2D(3553,0,de,I.width,I.height,0,ue,ce,null));else if(v.isDataTexture)if(we.length>0&&oe){Pe&&rt&&t.texStorage2D(3553,R,de,we[0].width,we[0].height);for(let G=0,Q=we.length;G<Q;G++)ge=we[G],Pe?t.texSubImage2D(3553,G,0,0,ge.width,ge.height,ue,ce,ge.data):t.texImage2D(3553,G,de,ge.width,ge.height,0,ue,ce,ge.data);v.generateMipmaps=!1}else Pe?(rt&&t.texStorage2D(3553,R,de,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,ue,ce,I.data)):t.texImage2D(3553,0,de,I.width,I.height,0,ue,ce,I.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&rt&&t.texStorage3D(35866,R,de,we[0].width,we[0].height,I.depth);for(let G=0,Q=we.length;G<Q;G++)ge=we[G],v.format!==Rt?ue!==null?Pe?t.compressedTexSubImage3D(35866,G,0,0,0,ge.width,ge.height,I.depth,ue,ge.data,0,0):t.compressedTexImage3D(35866,G,de,ge.width,ge.height,I.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,G,0,0,0,ge.width,ge.height,I.depth,ue,ce,ge.data):t.texImage3D(35866,G,de,ge.width,ge.height,I.depth,0,ue,ce,ge.data)}else{Pe&&rt&&t.texStorage2D(3553,R,de,we[0].width,we[0].height);for(let G=0,Q=we.length;G<Q;G++)ge=we[G],v.format!==Rt?ue!==null?Pe?t.compressedTexSubImage2D(3553,G,0,0,ge.width,ge.height,ue,ge.data):t.compressedTexImage2D(3553,G,de,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,G,0,0,ge.width,ge.height,ue,ce,ge.data):t.texImage2D(3553,G,de,ge.width,ge.height,0,ue,ce,ge.data)}else if(v.isDataArrayTexture)Pe?(rt&&t.texStorage3D(35866,R,de,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,ue,ce,I.data)):t.texImage3D(35866,0,de,I.width,I.height,I.depth,0,ue,ce,I.data);else if(v.isData3DTexture)Pe?(rt&&t.texStorage3D(32879,R,de,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,ue,ce,I.data)):t.texImage3D(32879,0,de,I.width,I.height,I.depth,0,ue,ce,I.data);else if(v.isFramebufferTexture){if(rt)if(Pe)t.texStorage2D(3553,R,de,I.width,I.height);else{let G=I.width,Q=I.height;for(let le=0;le<R;le++)t.texImage2D(3553,le,de,G,Q,0,ue,ce,null),G>>=1,Q>>=1}}else if(we.length>0&&oe){Pe&&rt&&t.texStorage2D(3553,R,de,we[0].width,we[0].height);for(let G=0,Q=we.length;G<Q;G++)ge=we[G],Pe?t.texSubImage2D(3553,G,0,0,ue,ce,ge):t.texImage2D(3553,G,de,ue,ce,ge);v.generateMipmaps=!1}else Pe?(rt&&t.texStorage2D(3553,R,de,I.width,I.height),t.texSubImage2D(3553,0,0,0,ue,ce,I)):t.texImage2D(3553,0,de,ue,ce,I);L(v,oe)&&P($),ye.__version=se.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function me(T,v,B){if(v.image.length!==6)return;const $=Me(T,v),ie=v.source;t.bindTexture(34067,T.__webglTexture,33984+B);const se=i.get(ie);if(ie.version!==se.__version||$===!0){t.activeTexture(33984+B),o.pixelStorei(37440,v.flipY),o.pixelStorei(37441,v.premultiplyAlpha),o.pixelStorei(3317,v.unpackAlignment),o.pixelStorei(37443,0);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,I=[];for(let G=0;G<6;G++)!ye&&!A?I[G]=x(v.image[G],!1,!0,c):I[G]=A?v.image[G].image:v.image[G],I[G]=yt(v,I[G]);const oe=I[0],ue=M(oe)||a,ce=n.convert(v.format,v.encoding),de=n.convert(v.type),ge=y(v.internalFormat,ce,de,v.encoding),we=a&&v.isVideoTexture!==!0,Pe=se.__version===void 0||$===!0;let rt=E(v,oe,ue);F(34067,v,ue);let R;if(ye){we&&Pe&&t.texStorage2D(34067,rt,ge,oe.width,oe.height);for(let G=0;G<6;G++){R=I[G].mipmaps;for(let Q=0;Q<R.length;Q++){const le=R[Q];v.format!==Rt?ce!==null?we?t.compressedTexSubImage2D(34069+G,Q,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(34069+G,Q,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+G,Q,0,0,le.width,le.height,ce,de,le.data):t.texImage2D(34069+G,Q,ge,le.width,le.height,0,ce,de,le.data)}}}else{R=v.mipmaps,we&&Pe&&(R.length>0&&rt++,t.texStorage2D(34067,rt,ge,I[0].width,I[0].height));for(let G=0;G<6;G++)if(A){we?t.texSubImage2D(34069+G,0,0,0,I[G].width,I[G].height,ce,de,I[G].data):t.texImage2D(34069+G,0,ge,I[G].width,I[G].height,0,ce,de,I[G].data);for(let Q=0;Q<R.length;Q++){const le=R[Q].image[G].image;we?t.texSubImage2D(34069+G,Q+1,0,0,le.width,le.height,ce,de,le.data):t.texImage2D(34069+G,Q+1,ge,le.width,le.height,0,ce,de,le.data)}}else{we?t.texSubImage2D(34069+G,0,0,0,ce,de,I[G]):t.texImage2D(34069+G,0,ge,ce,de,I[G]);for(let Q=0;Q<R.length;Q++){const le=R[Q];we?t.texSubImage2D(34069+G,Q+1,0,0,ce,de,le.image[G]):t.texImage2D(34069+G,Q+1,ge,ce,de,le.image[G])}}}L(v,ue)&&P(34067),se.__version=ie.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ae(T,v,B,$,ie){const se=n.convert(B.format,B.encoding),ye=n.convert(B.type),A=y(B.internalFormat,se,ye,B.encoding);i.get(v).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,A,v.width,v.height,v.depth,0,se,ye,null):t.texImage2D(ie,0,A,v.width,v.height,0,se,ye,null)),t.bindFramebuffer(36160,T),ze(v)?d.framebufferTexture2DMultisampleEXT(36160,$,ie,i.get(B).__webglTexture,0,qe(v)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,$,ie,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(T,v,B){if(o.bindRenderbuffer(36161,T),v.depthBuffer&&!v.stencilBuffer){let $=33189;if(B||ze(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===li?$=36012:ie.type===xi&&($=33190));const se=qe(v);ze(v)?d.renderbufferStorageMultisampleEXT(36161,se,$,v.width,v.height):o.renderbufferStorageMultisample(36161,se,$,v.width,v.height)}else o.renderbufferStorage(36161,$,v.width,v.height);o.framebufferRenderbuffer(36160,36096,36161,T)}else if(v.depthBuffer&&v.stencilBuffer){const $=qe(v);B&&ze(v)===!1?o.renderbufferStorageMultisample(36161,$,35056,v.width,v.height):ze(v)?d.renderbufferStorageMultisampleEXT(36161,$,35056,v.width,v.height):o.renderbufferStorage(36161,34041,v.width,v.height),o.framebufferRenderbuffer(36160,33306,36161,T)}else{const $=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<$.length;ie++){const se=$[ie],ye=n.convert(se.format,se.encoding),A=n.convert(se.type),I=y(se.internalFormat,ye,A,se.encoding),oe=qe(v);B&&ze(v)===!1?o.renderbufferStorageMultisample(36161,oe,I,v.width,v.height):ze(v)?d.renderbufferStorageMultisampleEXT(36161,oe,I,v.width,v.height):o.renderbufferStorage(36161,I,v.width,v.height)}}o.bindRenderbuffer(36161,null)}function Te(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const B=i.get(v.depthTexture).__webglTexture,$=qe(v);if(v.depthTexture.format===yi)ze(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,$):o.framebufferTexture2D(36160,36096,3553,B,0);else if(v.depthTexture.format===ji)ze(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,$):o.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function ve(T){const v=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Te(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=o.createRenderbuffer(),Ve(v.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=o.createRenderbuffer(),Ve(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function it(T,v,B){const $=i.get(T);v!==void 0&&ae($.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&ve(T)}function ct(T){const v=T.texture,B=i.get(T),$=i.get(v);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=v.version,s.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,ye=M(T)||a;if(ie){B.__webglFramebuffer=[];for(let A=0;A<6;A++)B.__webglFramebuffer[A]=o.createFramebuffer()}else{if(B.__webglFramebuffer=o.createFramebuffer(),se)if(r.drawBuffers){const A=T.texture;for(let I=0,oe=A.length;I<oe;I++){const ue=i.get(A[I]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ze(T)===!1){const A=se?v:[v];B.__webglMultisampledFramebuffer=o.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let I=0;I<A.length;I++){const oe=A[I];B.__webglColorRenderbuffer[I]=o.createRenderbuffer(),o.bindRenderbuffer(36161,B.__webglColorRenderbuffer[I]);const ue=n.convert(oe.format,oe.encoding),ce=n.convert(oe.type),de=y(oe.internalFormat,ue,ce,oe.encoding,T.isXRRenderTarget===!0),ge=qe(T);o.renderbufferStorageMultisample(36161,ge,de,T.width,T.height),o.framebufferRenderbuffer(36160,36064+I,36161,B.__webglColorRenderbuffer[I])}o.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=o.createRenderbuffer(),Ve(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,$.__webglTexture),F(34067,v,ye);for(let A=0;A<6;A++)ae(B.__webglFramebuffer[A],T,v,36064,34069+A);L(v,ye)&&P(34067),t.unbindTexture()}else if(se){const A=T.texture;for(let I=0,oe=A.length;I<oe;I++){const ue=A[I],ce=i.get(ue);t.bindTexture(3553,ce.__webglTexture),F(3553,ue,ye),ae(B.__webglFramebuffer,T,ue,36064+I,3553),L(ue,ye)&&P(3553)}t.unbindTexture()}else{let A=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?A=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,$.__webglTexture),F(A,v,ye),ae(B.__webglFramebuffer,T,v,36064,A),L(v,ye)&&P(A),t.unbindTexture()}T.depthBuffer&&ve(T)}function Ye(T){const v=M(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,ie=B.length;$<ie;$++){const se=B[$];if(L(se,v)){const ye=T.isWebGLCubeRenderTarget?34067:3553,A=i.get(se).__webglTexture;t.bindTexture(ye,A),P(ye),t.unbindTexture()}}}function gt(T){if(a&&T.samples>0&&ze(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,$=T.height;let ie=16384;const se=[],ye=T.stencilBuffer?33306:36096,A=i.get(T),I=T.isWebGLMultipleRenderTargets===!0;if(I)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){se.push(36064+oe),T.depthBuffer&&se.push(ye);const ue=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(ue===!1&&(T.depthBuffer&&(ie|=256),T.stencilBuffer&&(ie|=1024)),I&&o.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[oe]),ue===!0&&(o.invalidateFramebuffer(36008,[ye]),o.invalidateFramebuffer(36009,[ye])),I){const ce=i.get(v[oe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ce,0)}o.blitFramebuffer(0,0,B,$,0,0,B,$,ie,9728),f&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,A.__webglColorRenderbuffer[oe]);const ue=i.get(v[oe]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,ue,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function qe(T){return Math.min(u,T.samples)}function ze(T){const v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(T){const v=s.render.frame;g.get(T)!==v&&(g.set(T,v),T.update())}function yt(T,v){const B=T.encoding,$=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Hn||B!==Mi&&(B===ke?a===!1?e.has("EXT_sRGB")===!0&&$===Rt?(T.format=Hn,T.minFilter=xt,T.generateMipmaps=!1):v=Fa.sRGBToLinear(v):($!==Rt||ie!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),v}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=_e,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ze}function Em(o,e,t){const i=t.isWebGL2;function r(n,s=null){let a;if(n===vi)return 5121;if(n===tc)return 32819;if(n===ic)return 32820;if(n===Ql)return 5120;if(n===$l)return 5122;if(n===la)return 5123;if(n===ec)return 5124;if(n===xi)return 5125;if(n===li)return 5126;if(n===Mr)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===rc)return 6406;if(n===Rt)return 6408;if(n===nc)return 6409;if(n===sc)return 6410;if(n===yi)return 6402;if(n===ji)return 34041;if(n===Hn)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===ac)return 6403;if(n===oc)return 36244;if(n===lc)return 33319;if(n===cc)return 33320;if(n===hc)return 36249;if(n===In||n===Dn||n===Nn||n===On)if(s===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===In)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===On)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===In)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===On)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ca)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===pa||n===ma)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===pa)return s===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ma)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===ba||n===Sa||n===wa||n===Ta||n===Ea||n===Aa||n===Ca)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===fa)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return s===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kn)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===kn)return s===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(n===dc||n===La||n===Ra||n===Pa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===kn)return a.COMPRESSED_RED_RGTC1_EXT;if(n===La)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[n]!==void 0?o[n]:null}return{convert:r}}class Am extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cm={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lm extends st{constructor(e,t,i,r,n,s,a,l,c,h){if(h=h!==void 0?h:yi,h!==yi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yi&&(i=xi),i===void 0&&h===ji&&(i=Wi),super(null,r,n,s,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1}}class Rm extends ci{constructor(e,t){super();const i=this;let r=null,n=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const m=t.getContextAttributes();let p=null,_=null;const S=[],x=[],M=new Set,w=new Map,L=new mt;L.layers.enable(1),L.viewport=new Ge;const P=new mt;P.layers.enable(2),P.viewport=new Ge;const y=[L,P],E=new Am;E.layers.enable(1),E.layers.enable(2);let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Y=S[U];return Y===void 0&&(Y=new ys,S[U]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(U){let Y=S[U];return Y===void 0&&(Y=new ys,S[U]=Y),Y.getGripSpace()},this.getHand=function(U){let Y=S[U];return Y===void 0&&(Y=new ys,S[U]=Y),Y.getHandSpace()};function K(U){const Y=x.indexOf(U.inputSource);if(Y===-1)return;const re=S[Y];re!==void 0&&re.dispatchEvent({type:U.type,data:U.inputSource})}function k(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",D);for(let U=0;U<S.length;U++){const Y=x[U];Y!==null&&(x[U]=null,S[U].disconnect(Y))}N=null,X=null,e.setRenderTarget(p),f=null,d=null,u=null,r=null,_=null,_e.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){n=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",k),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:f}),_=new Si(f.framebufferWidth,f.framebufferHeight,{format:Rt,type:vi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let Y=null,re=null,he=null;m.depth&&(he=m.stencil?35056:33190,Y=m.stencil?ji:yi,re=m.stencil?Wi:xi);const F={colorFormat:32856,depthFormat:he,scaleFactor:n};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(F),r.updateRenderState({layers:[d]}),_=new Si(d.textureWidth,d.textureHeight,{format:Rt,type:vi,depthTexture:new Lm(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const Me=e.properties.get(_);Me.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(U){for(let Y=0;Y<U.removed.length;Y++){const re=U.removed[Y],he=x.indexOf(re);he>=0&&(x[he]=null,S[he].disconnect(re))}for(let Y=0;Y<U.added.length;Y++){const re=U.added[Y];let he=x.indexOf(re);if(he===-1){for(let Me=0;Me<S.length;Me++)if(Me>=x.length){x.push(re),he=Me;break}else if(x[Me]===null){x[Me]=re,he=Me;break}if(he===-1)break}const F=S[he];F&&F.connect(re)}}const W=new C,Z=new C;function te(U,Y,re){W.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const he=W.distanceTo(Z),F=Y.projectionMatrix.elements,Me=re.projectionMatrix.elements,fe=F[14]/(F[10]-1),me=F[14]/(F[10]+1),ae=(F[9]+1)/F[5],Ve=(F[9]-1)/F[5],Te=(F[8]-1)/F[0],ve=(Me[8]+1)/Me[0],it=fe*Te,ct=fe*ve,Ye=he/(-Te+ve),gt=Ye*-Te;Y.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(gt),U.translateZ(Ye),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const qe=fe+Ye,ze=me+Ye,Nt=it-gt,yt=ct+(he-gt),T=ae*me/ze*qe,v=Ve*me/ze*qe;U.projectionMatrix.makePerspective(Nt,yt,T,v,qe,ze)}function j(U,Y){Y===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Y.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;E.near=P.near=L.near=U.near,E.far=P.far=L.far=U.far,(N!==E.near||X!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,X=E.far);const Y=U.parent,re=E.cameras;j(E,Y);for(let F=0;F<re.length;F++)j(re[F],Y);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),U.matrix.copy(E.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const he=U.children;for(let F=0,Me=he.length;F<Me;F++)he[F].updateMatrixWorld(!0);re.length===2?te(E,L,P):E.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return M};let ee=null;function J(U,Y){if(h=Y.getViewerPose(c||s),g=Y,h!==null){const re=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let he=!1;re.length!==E.cameras.length&&(E.cameras.length=0,he=!0);for(let F=0;F<re.length;F++){const Me=re[F];let fe=null;if(f!==null)fe=f.getViewport(Me);else{const ae=u.getViewSubImage(d,Me);fe=ae.viewport,F===0&&(e.setRenderTargetTextures(_,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(_))}let me=y[F];me===void 0&&(me=new mt,me.layers.enable(F),me.viewport=new Ge,y[F]=me),me.matrix.fromArray(Me.transform.matrix),me.projectionMatrix.fromArray(Me.projectionMatrix),me.viewport.set(fe.x,fe.y,fe.width,fe.height),F===0&&E.matrix.copy(me.matrix),he===!0&&E.cameras.push(me)}}for(let re=0;re<S.length;re++){const he=x[re],F=S[re];he!==null&&F!==void 0&&F.update(he,Y,c||s)}if(ee&&ee(U,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let re=null;for(const he of M)Y.detectedPlanes.has(he)||(re===null&&(re=[]),re.push(he));if(re!==null)for(const he of re)M.delete(he),w.delete(he),i.dispatchEvent({type:"planeremoved",data:he});for(const he of Y.detectedPlanes)if(!M.has(he))M.add(he),w.set(he,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:he});else{const F=w.get(he);he.lastChangedTime>F&&(w.set(he,he.lastChangedTime),i.dispatchEvent({type:"planechanged",data:he}))}}g=null}const _e=new no;_e.setAnimationLoop(J),this.setAnimationLoop=function(U){ee=U},this.dispose=function(){}}}function Pm(o,e){function t(m,p){p.color.getRGB(m.fogColor.value,to(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(n(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?a(m,p,_,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Mt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Mt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function n(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Mt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Im(o,e,t,i){let r={},n={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(S,x){const M=x.program;i.uniformBlockBinding(S,M)}function c(S,x){let M=r[S.id];M===void 0&&(g(S),M=h(S),r[S.id]=M,S.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(S,w);const L=e.render.frame;n[S.id]!==L&&(d(S),n[S.id]=L)}function h(S){const x=u();S.__bindingPointIndex=x;const M=o.createBuffer(),w=S.__size,L=S.usage;return o.bindBuffer(35345,M),o.bufferData(35345,w,L),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,M),M}function u(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=r[S.id],M=S.uniforms,w=S.__cache;o.bindBuffer(35345,x);for(let L=0,P=M.length;L<P;L++){const y=M[L];if(f(y,L,w)===!0){const E=y.__offset,N=Array.isArray(y.value)?y.value:[y.value];let X=0;for(let K=0;K<N.length;K++){const k=N[K],D=m(k);typeof k=="number"?(y.__data[0]=k,o.bufferSubData(35345,E+X,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=k.elements[0],y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=k.elements[0],y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=k.elements[0]):(k.toArray(y.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,E,y.__data)}}o.bindBuffer(35345,null)}function f(S,x,M){const w=S.value;if(M[x]===void 0){if(typeof w=="number")M[x]=w;else{const L=Array.isArray(w)?w:[w],P=[];for(let y=0;y<L.length;y++)P.push(L[y].clone());M[x]=P}return!0}else if(typeof w=="number"){if(M[x]!==w)return M[x]=w,!0}else{const L=Array.isArray(M[x])?M[x]:[M[x]],P=Array.isArray(w)?w:[w];for(let y=0;y<L.length;y++){const E=L[y];if(E.equals(P[y])===!1)return E.copy(P[y]),!0}}return!1}function g(S){const x=S.uniforms;let M=0;const w=16;let L=0;for(let P=0,y=x.length;P<y;P++){const E=x[P],N={boundary:0,storage:0},X=Array.isArray(E.value)?E.value:[E.value];for(let K=0,k=X.length;K<k;K++){const D=X[K],W=m(D);N.boundary+=W.boundary,N.storage+=W.storage}if(E.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,P>0){L=M%w;const K=w-L;L!==0&&K-N.boundary<0&&(M+=w-L,E.__offset=M)}M+=N.storage}return L=M%w,L>0&&(M+=w-L),S.__size=M,S.__cache={},this}function m(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),o.deleteBuffer(r[x.id]),delete r[x.id],delete n[x.id]}function _(){for(const S in r)o.deleteBuffer(r[S]);s=[],r={},n={}}return{bind:l,update:c,dispose:_}}function Dm(){const o=Er("canvas");return o.style.display="block",o}function Io(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Dm(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,n=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mi,this.physicallyCorrectLights=!1,this.toneMapping=Kt,this.toneMappingExposure=1;const m=this;let p=!1,_=0,S=0,x=null,M=-1,w=null;const L=new Ge,P=new Ge;let y=null,E=e.width,N=e.height,X=1,K=null,k=null;const D=new Ge(0,0,E,N),W=new Ge(0,0,E,N);let Z=!1;const te=new ds;let j=!1,ee=!1,J=null;const _e=new Ae,U=new be,Y=new C,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return x===null?X:1}let F=t;function Me(b,z){for(let H=0;H<b.length;H++){const O=b[H],V=e.getContext(O,z);if(V!==null)return V}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qt}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",we,!1),F===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),F=Me(z,b),F===null)throw Me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let fe,me,ae,Ve,Te,ve,it,ct,Ye,gt,qe,ze,Nt,yt,T,v,B,$,ie,se,ye,A,I,oe;function ue(){fe=new Wd(F),me=new Ud(F,fe,o),fe.init(me),A=new Em(F,fe,me),ae=new wm(F,fe,me),Ve=new Xd,Te=new hm,ve=new Tm(F,fe,ae,Te,me,A,Ve),it=new Bd(m),ct=new Vd(m),Ye=new ih(F,me),I=new kd(F,fe,Ye,me),gt=new jd(F,Ye,Ve,I),qe=new Jd(F,gt,Ye,Ve),ie=new Zd(F,me,ve),v=new Fd(Te),ze=new cm(m,it,ct,fe,me,I,v),Nt=new Pm(m,Te),yt=new dm,T=new vm(fe,me),$=new Od(m,it,ct,ae,qe,h,s),B=new Sm(m,qe,me),oe=new Im(F,Ve,me,ae),se=new zd(F,fe,Ve,me),ye=new qd(F,fe,Ve,me),Ve.programs=ze.programs,m.capabilities=me,m.extensions=fe,m.properties=Te,m.renderLists=yt,m.shadowMap=B,m.state=ae,m.info=Ve}ue();const ce=new Rm(m,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(E,N,!1))},this.getSize=function(b){return b.set(E,N)},this.setSize=function(b,z,H){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=b,N=z,e.width=Math.floor(b*X),e.height=Math.floor(z*X),H!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(E*X,N*X).floor()},this.setDrawingBufferSize=function(b,z,H){E=b,N=z,X=H,e.width=Math.floor(b*H),e.height=Math.floor(z*H),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,z,H,O){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,z,H,O),ae.viewport(L.copy(D).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(W)},this.setScissor=function(b,z,H,O){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,z,H,O),ae.scissor(P.copy(W).multiplyScalar(X).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(b){ae.setScissorTest(Z=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){k=b},this.getClearColor=function(b){return b.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(b=!0,z=!0,H=!0){let O=0;b&&(O|=16384),z&&(O|=256),H&&(O|=1024),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",we,!1),yt.dispose(),T.dispose(),Te.dispose(),it.dispose(),ct.dispose(),qe.dispose(),I.dispose(),oe.dispose(),ze.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",le),ce.removeEventListener("sessionend",xe),J&&(J.dispose(),J=null),Fe.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Ve.autoReset,z=B.enabled,H=B.autoUpdate,O=B.needsUpdate,V=B.type;ue(),Ve.autoReset=b,B.enabled=z,B.autoUpdate=H,B.needsUpdate=O,B.type=V}function we(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const z=b.target;z.removeEventListener("dispose",Pe),rt(z)}function rt(b){R(b),Te.remove(b)}function R(b){const z=Te.get(b).programs;z!==void 0&&(z.forEach(function(H){ze.releaseProgram(H)}),b.isShaderMaterial&&ze.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,H,O,V,pe){z===null&&(z=re);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Le=Tg(b,z,H,O,V);ae.setMaterial(O,Se);let Re=H.index,He=1;O.wireframe===!0&&(Re=gt.getWireframeAttribute(H),He=2);const Oe=H.drawRange,Ie=H.attributes.position;let ut=Oe.start*He,Et=(Oe.start+Oe.count)*He;pe!==null&&(ut=Math.max(ut,pe.start*He),Et=Math.min(Et,(pe.start+pe.count)*He)),Re!==null?(ut=Math.max(ut,0),Et=Math.min(Et,Re.count)):Ie!=null&&(ut=Math.max(ut,0),Et=Math.min(Et,Ie.count));const ai=Et-ut;if(ai<0||ai===1/0)return;I.setup(V,O,Le,H,Re);let ki,Ke=se;if(Re!==null&&(ki=Ye.get(Re),Ke=ye,Ke.setIndex(ki)),V.isMesh)O.wireframe===!0?(ae.setLineWidth(O.wireframeLinewidth*he()),Ke.setMode(1)):Ke.setMode(4);else if(V.isLine){let De=O.linewidth;De===void 0&&(De=1),ae.setLineWidth(De*he()),V.isLineSegments?Ke.setMode(1):V.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else V.isPoints?Ke.setMode(0):V.isSprite&&Ke.setMode(4);if(V.isInstancedMesh)Ke.renderInstances(ut,ai,V.count);else if(H.isInstancedBufferGeometry){const De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Vs=Math.min(H.instanceCount,De);Ke.renderInstances(ut,ai,Vs)}else Ke.render(ut,ai)},this.compile=function(b,z){function H(O,V,pe){O.transparent===!0&&O.side===Yt&&O.forceSinglePass===!1?(O.side=Mt,O.needsUpdate=!0,Ot(O,V,pe),O.side=Xt,O.needsUpdate=!0,Ot(O,V,pe),O.side=Yt):Ot(O,V,pe)}d=T.get(b),d.init(),g.push(d),b.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(m.physicallyCorrectLights),b.traverse(function(O){const V=O.material;if(V)if(Array.isArray(V))for(let pe=0;pe<V.length;pe++){const Se=V[pe];H(Se,b,O)}else H(V,b,O)}),g.pop(),d=null};let G=null;function Q(b){G&&G(b)}function le(){Fe.stop()}function xe(){Fe.start()}const Fe=new no;Fe.setAnimationLoop(Q),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(b){G=b,ce.setAnimationLoop(b),b===null?Fe.stop():Fe.start()},ce.addEventListener("sessionstart",le),ce.addEventListener("sessionend",xe),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,z,x),d=T.get(b,g.length),d.init(),g.push(d),_e.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,j=v.init(this.clippingPlanes,ee),u=yt.get(b,f.length),u.init(),f.push(u),nt(b,z,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(K,k),j===!0&&v.beginShadows();const H=d.state.shadowsArray;if(B.render(H,b,z),j===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(u,b),d.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let V=0,pe=O.length;V<pe;V++){const Se=O[V];ht(u,b,Se,Se.viewport)}}else ht(u,b,z);x!==null&&(ve.updateMultisampleRenderTarget(x),ve.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(m,b,z),I.resetDefaultState(),M=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function nt(b,z,H,O){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){O&&Y.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const pe=qe.update(b),Se=b.material;Se.visible&&u.push(b,pe,Se,H,Y.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ve.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ve.render.frame),!b.frustumCulled||te.intersectsObject(b))){O&&Y.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const pe=qe.update(b),Se=b.material;if(Array.isArray(Se)){const Le=pe.groups;for(let Re=0,He=Le.length;Re<He;Re++){const Oe=Le[Re],Ie=Se[Oe.materialIndex];Ie&&Ie.visible&&u.push(b,pe,Ie,H,Y.z,Oe)}}else Se.visible&&u.push(b,pe,Se,H,Y.z,null)}}const V=b.children;for(let pe=0,Se=V.length;pe<Se;pe++)nt(V[pe],z,H,O)}function ht(b,z,H,O){const V=b.opaque,pe=b.transmissive,Se=b.transparent;d.setupLightsView(H),j===!0&&v.setGlobalState(m.clippingPlanes,H),pe.length>0&&Oi(V,z,H),O&&ae.viewport(L.copy(O)),V.length>0&&We(V,z,H),pe.length>0&&We(pe,z,H),Se.length>0&&We(Se,z,H),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Oi(b,z,H){const O=me.isWebGL2;J===null&&(J=new Si(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Mr:vi,minFilter:_i,samples:O&&n===!0?4:0})),m.getDrawingBufferSize(U),O?J.setSize(U.x,U.y):J.setSize(Yr(U.x),Yr(U.y));const V=m.getRenderTarget();m.setRenderTarget(J),m.clear();const pe=m.toneMapping;m.toneMapping=Kt,We(b,z,H),m.toneMapping=pe,ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J),m.setRenderTarget(V)}function We(b,z,H){const O=z.isScene===!0?z.overrideMaterial:null;for(let V=0,pe=b.length;V<pe;V++){const Se=b[V],Le=Se.object,Re=Se.geometry,He=O===null?Se.material:O,Oe=Se.group;Le.layers.test(H.layers)&&si(Le,z,H,Re,He,Oe)}}function si(b,z,H,O,V,pe){b.onBeforeRender(m,z,H,O,V,pe),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(m,z,H,O,b,pe),V.transparent===!0&&V.side===Yt&&V.forceSinglePass===!1?(V.side=Mt,V.needsUpdate=!0,m.renderBufferDirect(H,z,O,V,b,pe),V.side=Xt,V.needsUpdate=!0,m.renderBufferDirect(H,z,O,V,b,pe),V.side=Yt):m.renderBufferDirect(H,z,O,V,b,pe),b.onAfterRender(m,z,H,O,V,pe)}function Ot(b,z,H){z.isScene!==!0&&(z=re);const O=Te.get(b),V=d.state.lights,pe=d.state.shadowsArray,Se=V.state.version,Le=ze.getParameters(b,V.state,pe,z,H),Re=ze.getProgramCacheKey(Le);let He=O.programs;O.environment=b.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(b.isMeshStandardMaterial?ct:it).get(b.envMap||O.environment),He===void 0&&(b.addEventListener("dispose",Pe),He=new Map,O.programs=He);let Oe=He.get(Re);if(Oe!==void 0){if(O.currentProgram===Oe&&O.lightsStateVersion===Se)return bl(b,Le),Oe}else Le.uniforms=ze.getUniforms(b),b.onBuild(H,Le,m),b.onBeforeCompile(Le,m),Oe=ze.acquireProgram(Le,Re),He.set(Re,Oe),O.uniforms=Le.uniforms;const Ie=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=v.uniform),bl(b,Le),O.needsLights=Ag(b),O.lightsStateVersion=Se,O.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix);const ut=Oe.getUniforms(),Et=_n.seqWithValue(ut.seq,Ie);return O.currentProgram=Oe,O.uniformsList=Et,Oe}function bl(b,z){const H=Te.get(b);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function Tg(b,z,H,O,V){z.isScene!==!0&&(z=re),ve.resetTextureUnits();const pe=z.fog,Se=O.isMeshStandardMaterial?z.environment:null,Le=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Mi,Re=(O.isMeshStandardMaterial?ct:it).get(O.envMap||Se),He=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!O.normalMap&&!!H.attributes.tangent,Ie=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color,ai=O.toneMapped?m.toneMapping:Kt,ki=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=ki!==void 0?ki.length:0,De=Te.get(O),Vs=d.state.lights;if(j===!0&&(ee===!0||b!==w)){const At=b===w&&O.id===M;v.setState(O,b,At)}let Ws=!1;O.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Vs.state.version||De.outputEncoding!==Le||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||De.envMap!==Re||O.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==v.numPlanes||De.numIntersection!==v.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==Oe||De.morphTargets!==Ie||De.morphNormals!==ut||De.morphColors!==Et||De.toneMapping!==ai||me.isWebGL2===!0&&De.morphTargetsCount!==Ke)&&(Ws=!0):(Ws=!0,De.__version=O.version);let zi=De.currentProgram;Ws===!0&&(zi=Ot(O,z,V));let Sl=!1,Hr=!1,js=!1;const _t=zi.getUniforms(),Ui=De.uniforms;if(ae.useProgram(zi.program)&&(Sl=!0,Hr=!0,js=!0),O.id!==M&&(M=O.id,Hr=!0),Sl||w!==b){if(_t.setValue(F,"projectionMatrix",b.projectionMatrix),me.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Hr=!0,js=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const At=_t.map.cameraPosition;At!==void 0&&At.setValue(F,Y.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||V.isSkinnedMesh)&&_t.setValue(F,"viewMatrix",b.matrixWorldInverse)}if(V.isSkinnedMesh){_t.setOptional(F,V,"bindMatrix"),_t.setOptional(F,V,"bindMatrixInverse");const At=V.skeleton;At&&(me.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),_t.setValue(F,"boneTexture",At.boneTexture,ve),_t.setValue(F,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=H.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&me.isWebGL2===!0)&&ie.update(V,H,O,zi),(Hr||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,_t.setValue(F,"receiveShadow",V.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ui.envMap.value=Re,Ui.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Hr&&(_t.setValue(F,"toneMappingExposure",m.toneMappingExposure),De.needsLights&&Eg(Ui,js),pe&&O.fog===!0&&Nt.refreshFogUniforms(Ui,pe),Nt.refreshMaterialUniforms(Ui,O,X,N,J),_n.upload(F,De.uniformsList,Ui,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_n.upload(F,De.uniformsList,Ui,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(F,"center",V.center),_t.setValue(F,"modelViewMatrix",V.modelViewMatrix),_t.setValue(F,"normalMatrix",V.normalMatrix),_t.setValue(F,"modelMatrix",V.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const At=O.uniformsGroups;for(let Xs=0,Cg=At.length;Xs<Cg;Xs++)if(me.isWebGL2){const wl=At[Xs];oe.update(wl,zi),oe.bind(wl,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function Eg(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Ag(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,z,H){Te.get(b.texture).__webglTexture=z,Te.get(b.depthTexture).__webglTexture=H;const O=Te.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const H=Te.get(b);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,H=0){x=b,_=z,S=H;let O=!0,V=null,pe=!1,Se=!1;if(b){const Le=Te.get(b);Le.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),O=!1):Le.__webglFramebuffer===void 0?ve.setupRenderTarget(b):Le.__hasExternalTextures&&ve.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const He=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(V=He[z],pe=!0):me.isWebGL2&&b.samples>0&&ve.useMultisampledRTT(b)===!1?V=Te.get(b).__webglMultisampledFramebuffer:V=He,L.copy(b.viewport),P.copy(b.scissor),y=b.scissorTest}else L.copy(D).multiplyScalar(X).floor(),P.copy(W).multiplyScalar(X).floor(),y=Z;if(ae.bindFramebuffer(36160,V)&&me.drawBuffers&&O&&ae.drawBuffers(b,V),ae.viewport(L),ae.scissor(P),ae.setScissorTest(y),pe){const Le=Te.get(b.texture);F.framebufferTexture2D(36160,36064,34069+z,Le.__webglTexture,H)}else if(Se){const Le=Te.get(b.texture),Re=z||0;F.framebufferTextureLayer(36160,36064,Le.__webglTexture,H||0,Re)}M=-1},this.readRenderTargetPixels=function(b,z,H,O,V,pe,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){ae.bindFramebuffer(36160,Le);try{const Re=b.texture,He=Re.format,Oe=Re.type;if(He!==Rt&&A.convert(He)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Oe===Mr&&(fe.has("EXT_color_buffer_half_float")||me.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Oe!==vi&&A.convert(Oe)!==F.getParameter(35738)&&!(Oe===li&&(me.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-O&&H>=0&&H<=b.height-V&&F.readPixels(z,H,O,V,A.convert(He),A.convert(Oe),pe)}finally{const Re=x!==null?Te.get(x).__webglFramebuffer:null;ae.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(b,z,H=0){const O=Math.pow(2,-H),V=Math.floor(z.image.width*O),pe=Math.floor(z.image.height*O);ve.setTexture2D(z,0),F.copyTexSubImage2D(3553,H,0,0,b.x,b.y,V,pe),ae.unbindTexture()},this.copyTextureToTexture=function(b,z,H,O=0){const V=z.image.width,pe=z.image.height,Se=A.convert(H.format),Le=A.convert(H.type);ve.setTexture2D(H,0),F.pixelStorei(37440,H.flipY),F.pixelStorei(37441,H.premultiplyAlpha),F.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?F.texSubImage2D(3553,O,b.x,b.y,V,pe,Se,Le,z.image.data):z.isCompressedTexture?F.compressedTexSubImage2D(3553,O,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Se,z.mipmaps[0].data):F.texSubImage2D(3553,O,b.x,b.y,Se,Le,z.image),O===0&&H.generateMipmaps&&F.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(b,z,H,O,V=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=b.max.x-b.min.x+1,Se=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,Re=A.convert(O.format),He=A.convert(O.type);let Oe;if(O.isData3DTexture)ve.setTexture3D(O,0),Oe=32879;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,O.flipY),F.pixelStorei(37441,O.premultiplyAlpha),F.pixelStorei(3317,O.unpackAlignment);const Ie=F.getParameter(3314),ut=F.getParameter(32878),Et=F.getParameter(3316),ai=F.getParameter(3315),ki=F.getParameter(32877),Ke=H.isCompressedTexture?H.mipmaps[0]:H.image;F.pixelStorei(3314,Ke.width),F.pixelStorei(32878,Ke.height),F.pixelStorei(3316,b.min.x),F.pixelStorei(3315,b.min.y),F.pixelStorei(32877,b.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(Oe,V,z.x,z.y,z.z,pe,Se,Le,Re,He,Ke.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Oe,V,z.x,z.y,z.z,pe,Se,Le,Re,Ke.data)):F.texSubImage3D(Oe,V,z.x,z.y,z.z,pe,Se,Le,Re,He,Ke),F.pixelStorei(3314,Ie),F.pixelStorei(32878,ut),F.pixelStorei(3316,Et),F.pixelStorei(3315,ai),F.pixelStorei(32877,ki),V===0&&O.generateMipmaps&&F.generateMipmap(Oe),ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ve.setTextureCube(b,0):b.isData3DTexture?ve.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ve.setTexture2DArray(b,0):ve.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){_=0,S=0,x=null,ae.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Nm extends Io{}Nm.prototype.isWebGL1Renderer=!0;class Om extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class km{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gn,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ft=new C;class Ms{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Be(t,this.array),i=Be(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Be(t,this.array),i=Be(i,this.array),r=Be(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Be(t,this.array),i=Be(i,this.array),r=Be(r,this.array),n=Be(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Do=new C,No=new Ge,Oo=new Ge,zm=new C,ko=new Ae;class Um extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ge,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;No.fromBufferAttribute(r.attributes.skinIndex,e),Oo.fromBufferAttribute(r.attributes.skinWeight,e),Do.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const s=Oo.getComponent(n);if(s!==0){const a=No.getComponent(n);ko.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(zm.copy(Do).applyMatrix4(ko),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zo extends je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fm extends st{constructor(e=null,t=1,i=1,r,n,s,a,l,c=$e,h=$e,u,d){super(null,s,a,l,c,h,r,n,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uo=new Ae,Bm=new Ae;class bs{constructor(e=[],t=[]){this.uuid=kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ae;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,s=e.length;n<s;n++){const a=e[n]?e[n].matrixWorld:Bm;Uo.multiplyMatrices(a,t[n]),Uo.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new bs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ka(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Fm(t,e,e,Rt,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let s=t[n];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new zo),this.bones.push(s),this.boneInverses.push(new Ae().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const s=t[r];e.bones.push(s.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Fo extends at{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bo=new Ae,Go=new Ae,vn=[],Gm=new Ae,Or=new Tt;class Hm extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,Gm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,Bo),Go.multiplyMatrices(i,Bo),Or.matrixWorld=Go,Or.raycast(e,vn);for(let s=0,a=vn.length;s<a;s++){const l=vn[s];l.instanceId=n,l.object=this,t.push(l)}vn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho extends Vt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new C,Wo=new C,jo=new Ae,Ss=new is,xn=new er;class ws extends je{constructor(e=new Bt,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)Vo.fromBufferAttribute(t,r-1),Wo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Vo.distanceTo(Wo);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xn.copy(i.boundingSphere),xn.applyMatrix4(r),xn.radius+=n,e.ray.intersectsSphere(xn)===!1)return;jo.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(jo);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,s.start),_=Math.min(g.count,s.start+s.count);for(let S=p,x=_-1;S<x;S+=f){const M=g.getX(S),w=g.getX(S+1);if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,w),Ss.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let S=p,x=_-1;S<x;S+=f){if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,S+1),Ss.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const qo=new C,Xo=new C;class Vm extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)qo.fromBufferAttribute(t,r),Xo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qo.distanceTo(Xo);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wm extends ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yo extends Vt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ko=new Ae,Ts=new is,yn=new er,Mn=new C;class jm extends je{constructor(e=new Bt,t=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yn.copy(i.boundingSphere),yn.applyMatrix4(r),yn.radius+=n,e.ray.intersectsSphere(yn)===!1)return;Ko.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Ko);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let f=u,g=d;f<g;f++){const m=c.getX(f);Mn.fromBufferAttribute(h,m),Zo(Mn,m,l,r,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let f=u,g=d;f<g;f++)Mn.fromBufferAttribute(h,f),Zo(Mn,f,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Zo(o,e,t,i,r,n,s){const a=Ts.distanceSqToPoint(o);if(a<t){const l=new C;Ts.closestPointToPoint(o,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;n.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class bn extends Vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Di extends bn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mi(o,e,t){return Jo(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Sn(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Jo(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function qm(o){function e(r,n){return o[r]-o[n]}const t=o.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Qo(o,e,t){const i=o.length,r=new o.constructor(i);for(let n=0,s=0;s!==i;++n){const a=t[n]*e;for(let l=0;l!==e;++l)r[s++]=o[a+l]}return r}function $o(o,e,t,i){let r=1,n=o[0];for(;n!==void 0&&n[i]===void 0;)n=o[r++];if(n===void 0)return;let s=n[i];if(s!==void 0)if(Array.isArray(s))do s=n[i],s!==void 0&&(e.push(n.time),t.push.apply(t,s)),n=o[r++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[i],s!==void 0&&(e.push(n.time),s.toArray(t,t.length)),n=o[r++];while(n!==void 0);else do s=n[i],s!==void 0&&(e.push(n.time),t.push(s)),n=o[r++];while(n!==void 0)}class kr{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(n=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=n)){const a=t[1];e<a&&(i=2,n=a);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=n,n=t[--i-1],e>=n)break t}s=i,i=0;break i}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xm extends kr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,s=e+1,a=r[n],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Yi:n=e,a=2*t-i;break;case qr:n=r.length-2,a=t+r[n]-r[n+1];break;default:n=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yi:s=e,l=2*i-t;break;case qr:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=s*h}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),m=g*g,p=m*g,_=-d*p+2*d*m-d*g,S=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*m+.5*g,M=f*p-f*m;for(let w=0;w!==a;++w)n[w]=_*s[h+w]+S*s[c+w]+x*s[l+w]+M*s[u+w];return n}}class el extends kr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)n[d]=s[c+d]*u+s[l+d]*h;return n}}class Ym extends kr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class jt{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sn(t,this.TimeBufferType),this.values=Sn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sn(e.times,Array),values:Sn(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case qi:t=this.InterpolantFactoryMethodLinear;break;case zn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return qi;case this.InterpolantFactoryMethodSmooth:return zn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,s=r-1;for(;n!==r&&i[n]<e;)++n;for(;s!==-1&&i[s]>t;)--s;if(++s,n!==0||s!==r){n>=s&&(s=Math.max(s,1),n=s-1);const a=this.getValueSize();this.times=mi(i,n,s),this.values=mi(this.values,n*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==n;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&Jo(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=mi(this.times),t=mi(this.values),i=this.getValueSize(),r=this.getInterpolation()===zn,n=e.length-1;let s=1;for(let a=1;a<n;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const m=t[u+g];if(m!==t[d+g]||m!==t[f+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const u=a*i,d=s*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++s}}if(n>0){e[s]=e[n];for(let a=n*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=mi(e,0,s),this.values=mi(t,0,s*i)):(this.times=e,this.values=t),this}clone(){const e=mi(this.times,0),t=mi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}jt.prototype.TimeBufferType=Float32Array,jt.prototype.ValueBufferType=Float32Array,jt.prototype.DefaultInterpolation=qi;class fr extends jt{}fr.prototype.ValueTypeName="bool",fr.prototype.ValueBufferType=Array,fr.prototype.DefaultInterpolation=br,fr.prototype.InterpolantFactoryMethodLinear=void 0,fr.prototype.InterpolantFactoryMethodSmooth=void 0;class tl extends jt{}tl.prototype.ValueTypeName="color";class zr extends jt{}zr.prototype.ValueTypeName="number";class Km extends kr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let h=c+a;c!==h;c+=4)et.slerpFlat(n,0,s,c-a,s,c,l);return n}}class Ni extends jt{InterpolantFactoryMethodLinear(e){return new Km(this.times,this.values,this.getValueSize(),e)}}Ni.prototype.ValueTypeName="quaternion",Ni.prototype.DefaultInterpolation=qi,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends jt{}gr.prototype.ValueTypeName="string",gr.prototype.ValueBufferType=Array,gr.prototype.DefaultInterpolation=br,gr.prototype.InterpolantFactoryMethodLinear=void 0,gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends jt{}Ur.prototype.ValueTypeName="vector";class Es{constructor(e,t=-1,i,r=Un){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(Jm(i[s]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,s=i.length;n!==s;++n)t.push(jt.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,s=[];for(let a=0;a<n;a++){let l=[],c=[];l.push((a+n-1)%n,a,(a+1)%n),c.push(0,1,0);const h=qm(l);l=Qo(l,1,h),c=Qo(c,1,h),!r&&l[0]===0&&(l.push(n),c.push(c[0])),s.push(new zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(n);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const s=[];for(const a in r)s.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,f,g){if(d.length!==0){const m=[],p=[];$o(d,m,p,f),m.length!==0&&g.push(new h(u,m,p))}},r=[],n=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let f;for(f=0;f<u.length;f++)if(u[f].morphTargets)for(let g=0;g<u[f].morphTargets.length;g++)d[u[f].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let _=0;_!==u[f].morphTargets.length;++_){const S=u[f];m.push(S.time),p.push(S.morphTarget===g?1:0)}r.push(new zr(".morphTargetInfluence["+g+"]",m,p))}l=d.length*s}else{const d=".bones["+t[h].name+"]";i(Ur,d+".position",u,"pos",r),i(Ni,d+".quaternion",u,"rot",r),i(Ur,d+".scale",u,"scl",r)}}return r.length===0?null:new this(n,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zm(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zr;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return tl;case"quaternion":return Ni;case"bool":case"boolean":return fr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Jm(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zm(o.type);if(o.times===void 0){const t=[],i=[];$o(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const _r={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Qm{constructor(e,t,i){const r=this;let n=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,a),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const $m=new Qm;class vr{constructor(e){this.manager=e!==void 0?e:$m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ni={};class ef extends Error{constructor(e,t){super(e),this.response=t}}class wn extends vr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=_r.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:r});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ni[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(_){S();function S(){u.read().then(({done:x,value:M})=>{if(x)_.close();else{m+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let L=0,P=h.length;L<P;L++){const y=h[L];y.onProgress&&y.onProgress(w)}_.enqueue(M),S()}})}}});return new Response(p)}else throw new ef(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(f=>d.decode(f))}}}).then(c=>{_r.add(e,c);const h=ni[e];delete ni[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tf extends vr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=_r.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const a=Er("img");function l(){h(),_r.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(u){h(),r&&r(u),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class il extends vr{constructor(e){super(e)}load(e,t,i,r){const n=new st,s=new tf(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Tn extends je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const As=new Ae,rl=new C,nl=new C;class Cs{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(rl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),As.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(As),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(As)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rf extends Cs{constructor(){super(new mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nf extends Tn{constructor(e,t,i=0,r=Math.PI/3,n=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new rf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sl=new Ae,Fr=new C,Ls=new C;class sf extends Cs{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),Ls.copy(i.position),Ls.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ls),i.updateMatrixWorld(),r.makeTranslation(-Fr.x,-Fr.y,-Fr.z),sl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl)}}class af extends Tn{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class of extends Cs{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class al extends Tn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lf extends Tn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cf extends vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=_r.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){_r.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){r&&r(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}class hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ol(){return(typeof performance>"u"?Date:performance).now()}class uf{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,n,s;switch(t){case"quaternion":r=this._slerp,n=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,n=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,n=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=n,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,n=e*r+r;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==r;++a)i[n+a]=i[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(i,n,0,a,r)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,n=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-n,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let n=i,s=r;n!==s;++n)t[n]=t[r+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,n){if(r>=.5)for(let s=0;s!==n;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){et.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,n){const s=this._workIndex*n;et.multiplyQuaternionsFlat(e,s,e,t,e,i),et.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,n){const s=1-r;for(let a=0;a!==n;++a){const l=t+a;e[l]=e[l]*s+e[i+a]*r}}_lerpAdditive(e,t,i,r,n){for(let s=0;s!==n;++s){const a=t+s;e[a]=e[a]+e[i+s]*r}}}const Ps="\\[\\]\\.:\\/",df=new RegExp("["+Ps+"]","g"),Is="[^"+Ps+"]",pf="[^"+Ps.replace("\\.","")+"]",mf=/((?:WC+[\/:])*)/.source.replace("WC",Is),ff=/(WCOD+)?/.source.replace("WCOD",pf),gf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Is),_f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Is),vf=new RegExp("^"+mf+ff+gf+_f+"$"),xf=["material","materials","bones","map"];class yf{constructor(e,t,i){const r=i||Ue.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ue{constructor(e,t,i){this.path=t,this.parsedPath=i||Ue.parseTrackName(t),this.node=Ue.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ue.Composite(e,t,i):new Ue(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(df,"")}static parseTrackName(e){const t=vf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);xf.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let s=0;s<n.length;s++){const a=n[s];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=Ue.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=yf,Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray],Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mf{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const n=t.tracks,s=n.length,a=new Array(s),l={endingStart:Xi,endingEnd:Xi};for(let c=0;c!==s;++c){const h=n[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,n=e._clip.duration,s=n/r,a=r/n;e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,n=r.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(a);break;case Un:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,n=this._loopCount;const s=i===fc;if(e===0)return n===-1?r:s&&(n&1)===1?t-r:r;if(i===pc){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,n+=Math.abs(a);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=n,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(s&&(n&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Yi,r.endingEnd=Yi):(e?r.endingStart=this.zeroSlopeAtStart?Yi:Xi:r.endingStart=qr,t?r.endingEnd=this.zeroSlopeAtEnd?Yi:Xi:r.endingEnd=qr)}_scheduleFading(e,t,i){const r=this._mixer,n=r.time;let s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,l=s.sampleValues;return a[0]=n,l[0]=t,a[1]=n+e,l[1]=i,this}}const bf=new Float32Array(1);class Sf extends ci{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,n=r.length,s=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==n;++u){const d=r[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,s[u]=g;else{if(g=s[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const m=t&&t._propertyBindings[u].binding.parsedPath;g=new uf(Ue.create(i,f,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),s[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,n=this._actionsByClip[r];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,n=this._actionsByClip;let s=n[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,s=this._actionsByClip,a=s[n],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,n=this._bindings;let s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,n=i.path,s=this._bindingsByRootAndName,a=s[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[n],Object.keys(a).length===0&&delete s[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new el(new Float32Array(2),new Float32Array(2),1,bf),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,n=t[r];e.__cacheIndex=r,t[r]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){const r=t||this._root,n=r.uuid;let s=typeof e=="string"?Es.findByName(r,e):e;const a=s!==null?s.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=Un),l!==void 0){const u=l.actionByRoot[n];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new Mf(this,s,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,n),h}existingAction(e,t){const i=t||this._root,r=i.uuid,n=typeof e=="string"?Es.findByName(i,e):e,s=n?n.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,n=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,n,s);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,n=r[i];if(n!==void 0){const s=n.knownActions;for(let a=0,l=s.length;a!==l;++a){const c=s[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const a=i[s].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,n=r[t];if(n!==void 0)for(const s in n){const a=n[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class ll{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qt}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qt);const cl={type:"change"},Ds={type:"start"},hl={type:"end"};class wf extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vt.ROTATE,MIDDLE:vt.DOLLY,RIGHT:vt.PAN},this.touches={ONE:Ct.ROTATE,TWO:Ct.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",yt),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cl),i.update(),n=r.NONE},this.update=function(){const A=new C,I=new et().setFromUnitVectors(e.up,new C(0,1,0)),oe=I.clone().invert(),ue=new C,ce=new et,de=2*Math.PI;return function(){const ge=i.object.position;A.copy(ge).sub(i.target),A.applyQuaternion(I),a.setFromVector3(A),i.autoRotate&&n===r.NONE&&E(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=i.minAzimuthAngle,Pe=i.maxAzimuthAngle;return isFinite(we)&&isFinite(Pe)&&(we<-Math.PI?we+=de:we>Math.PI&&(we-=de),Pe<-Math.PI?Pe+=de:Pe>Math.PI&&(Pe-=de),we<=Pe?a.theta=Math.max(we,Math.min(Pe,a.theta)):a.theta=a.theta>(we+Pe)/2?Math.max(we,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),A.setFromSpherical(a),A.applyQuaternion(oe),ge.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||ue.distanceToSquared(i.object.position)>s||8*(1-ce.dot(i.object.quaternion))>s?(i.dispatchEvent(cl),ue.copy(i.object.position),ce.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",it),i.domElement.removeEventListener("pointercancel",gt),i.domElement.removeEventListener("wheel",Nt),i.domElement.removeEventListener("pointermove",ct),i.domElement.removeEventListener("pointerup",Ye),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",yt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=r.NONE;const s=1e-6,a=new ll,l=new ll;let c=1;const h=new C;let u=!1;const d=new be,f=new be,g=new be,m=new be,p=new be,_=new be,S=new be,x=new be,M=new be,w=[],L={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function E(A){l.theta-=A}function N(A){l.phi-=A}const X=function(){const A=new C;return function(I,oe){A.setFromMatrixColumn(oe,0),A.multiplyScalar(-I),h.add(A)}}(),K=function(){const A=new C;return function(I,oe){i.screenSpacePanning===!0?A.setFromMatrixColumn(oe,1):(A.setFromMatrixColumn(oe,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(I),h.add(A)}}(),k=function(){const A=new C;return function(I,oe){const ue=i.domElement;if(i.object.isPerspectiveCamera){const ce=i.object.position;A.copy(ce).sub(i.target);let de=A.length();de*=Math.tan(i.object.fov/2*Math.PI/180),X(2*I*de/ue.clientHeight,i.object.matrix),K(2*oe*de/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(I*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),K(oe*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(A){i.object.isPerspectiveCamera?c/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(A){i.object.isPerspectiveCamera?c*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(A){d.set(A.clientX,A.clientY)}function te(A){S.set(A.clientX,A.clientY)}function j(A){m.set(A.clientX,A.clientY)}function ee(A){f.set(A.clientX,A.clientY),g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const I=i.domElement;E(2*Math.PI*g.x/I.clientHeight),N(2*Math.PI*g.y/I.clientHeight),d.copy(f),i.update()}function J(A){x.set(A.clientX,A.clientY),M.subVectors(x,S),M.y>0?D(y()):M.y<0&&W(y()),S.copy(x),i.update()}function _e(A){p.set(A.clientX,A.clientY),_.subVectors(p,m).multiplyScalar(i.panSpeed),k(_.x,_.y),m.copy(p),i.update()}function U(A){A.deltaY<0?W(y()):A.deltaY>0&&D(y()),i.update()}function Y(A){let I=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),I=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),I=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),I=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),I=!0;break}I&&(A.preventDefault(),i.update())}function re(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),I=.5*(w[0].pageY+w[1].pageY);d.set(A,I)}}function he(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),I=.5*(w[0].pageY+w[1].pageY);m.set(A,I)}}function F(){const A=w[0].pageX-w[1].pageX,I=w[0].pageY-w[1].pageY,oe=Math.sqrt(A*A+I*I);S.set(0,oe)}function Me(){i.enableZoom&&F(),i.enablePan&&he()}function fe(){i.enableZoom&&F(),i.enableRotate&&re()}function me(A){if(w.length==1)f.set(A.pageX,A.pageY);else{const oe=ye(A),ue=.5*(A.pageX+oe.x),ce=.5*(A.pageY+oe.y);f.set(ue,ce)}g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const I=i.domElement;E(2*Math.PI*g.x/I.clientHeight),N(2*Math.PI*g.y/I.clientHeight),d.copy(f)}function ae(A){if(w.length===1)p.set(A.pageX,A.pageY);else{const I=ye(A),oe=.5*(A.pageX+I.x),ue=.5*(A.pageY+I.y);p.set(oe,ue)}_.subVectors(p,m).multiplyScalar(i.panSpeed),k(_.x,_.y),m.copy(p)}function Ve(A){const I=ye(A),oe=A.pageX-I.x,ue=A.pageY-I.y,ce=Math.sqrt(oe*oe+ue*ue);x.set(0,ce),M.set(0,Math.pow(x.y/S.y,i.zoomSpeed)),D(M.y),S.copy(x)}function Te(A){i.enableZoom&&Ve(A),i.enablePan&&ae(A)}function ve(A){i.enableZoom&&Ve(A),i.enableRotate&&me(A)}function it(A){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",ct),i.domElement.addEventListener("pointerup",Ye)),$(A),A.pointerType==="touch"?T(A):qe(A))}function ct(A){i.enabled!==!1&&(A.pointerType==="touch"?v(A):ze(A))}function Ye(A){ie(A),w.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",ct),i.domElement.removeEventListener("pointerup",Ye)),i.dispatchEvent(hl),n=r.NONE}function gt(A){ie(A)}function qe(A){let I;switch(A.button){case 0:I=i.mouseButtons.LEFT;break;case 1:I=i.mouseButtons.MIDDLE;break;case 2:I=i.mouseButtons.RIGHT;break;default:I=-1}switch(I){case vt.DOLLY:if(i.enableZoom===!1)return;te(A),n=r.DOLLY;break;case vt.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;j(A),n=r.PAN}else{if(i.enableRotate===!1)return;Z(A),n=r.ROTATE}break;case vt.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;Z(A),n=r.ROTATE}else{if(i.enablePan===!1)return;j(A),n=r.PAN}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(Ds)}function ze(A){switch(n){case r.ROTATE:if(i.enableRotate===!1)return;ee(A);break;case r.DOLLY:if(i.enableZoom===!1)return;J(A);break;case r.PAN:if(i.enablePan===!1)return;_e(A);break}}function Nt(A){i.enabled===!1||i.enableZoom===!1||n!==r.NONE||(A.preventDefault(),i.dispatchEvent(Ds),U(A),i.dispatchEvent(hl))}function yt(A){i.enabled===!1||i.enablePan===!1||Y(A)}function T(A){switch(se(A),w.length){case 1:switch(i.touches.ONE){case Ct.ROTATE:if(i.enableRotate===!1)return;re(),n=r.TOUCH_ROTATE;break;case Ct.PAN:if(i.enablePan===!1)return;he(),n=r.TOUCH_PAN;break;default:n=r.NONE}break;case 2:switch(i.touches.TWO){case Ct.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(),n=r.TOUCH_DOLLY_PAN;break;case Ct.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(),n=r.TOUCH_DOLLY_ROTATE;break;default:n=r.NONE}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(Ds)}function v(A){switch(se(A),n){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;me(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ae(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(A),i.update();break;default:n=r.NONE}}function B(A){i.enabled!==!1&&A.preventDefault()}function $(A){w.push(A)}function ie(A){delete L[A.pointerId];for(let I=0;I<w.length;I++)if(w[I].pointerId==A.pointerId){w.splice(I,1);return}}function se(A){let I=L[A.pointerId];I===void 0&&(I=new be,L[A.pointerId]=I),I.set(A.pageX,A.pageY)}function ye(A){const I=A.pointerId===w[0].pointerId?w[1]:w[0];return L[I.pointerId]}i.domElement.addEventListener("contextmenu",B),i.domElement.addEventListener("pointerdown",it),i.domElement.addEventListener("pointercancel",gt),i.domElement.addEventListener("wheel",Nt,{passive:!1}),this.update()}}const ul=o=>{let e;const t=new Set,i=(a,l)=>{const c=typeof a=="function"?a(e):a;if(!Object.is(c,e)){const h=e;e=l??(typeof c!="object"||c===null)?c:Object.assign({},e,c),t.forEach(u=>u(e,h))}},r=()=>e,n={setState:i,getState:r,getInitialState:()=>s,subscribe:a=>(t.add(a),()=>t.delete(a)),destroy:()=>{t.clear()}},s=e=o(i,r,n);return n},En=o=>o?ul(o):ul,Ns=En(()=>({width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)})),Os=En(()=>({physicsReady:!1,assetsReady:!1})),It=En(()=>({forward:!1,backward:!1,left:!1,right:!1}));class Tf{constructor(){q(this,"app");q(this,"canvas");q(this,"sizesStore");q(this,"sizes");q(this,"instance");q(this,"controls");q(this,"characterController");this.app=new Gt,this.canvas=this.app.canvas,this.sizesStore=Ns,this.sizes=this.sizesStore.getState(),this.setInstance(),this.setControls(),this.setResizeLister()}setInstance(){this.instance=new mt(35,this.sizes.width/this.sizes.height,1,600),this.instance.position.z=100,this.instance.position.y=20}setControls(){this.controls=new wf(this.instance,this.canvas),this.controls.enableDamping=!0}setResizeLister(){this.sizesStore.subscribe(e=>{this.instance.aspect=e.width/e.height,this.instance.updateProjectionMatrix()})}loop(){var e;if(this.controls.update(),this.characterController=(e=this.app.world.characterController)==null?void 0:e.rigidBody,this.characterController){const t=this.characterController.translation(),i=this.characterController.rotation(),r=new C(0,25,45);r.applyQuaternion(i),r.add(t);const n=new C(0,0,-1);n.applyQuaternion(i),n.add(t),this.instance.position.lerp(r,.1),this.controls.target.lerp(n,.1)}}}class Ef{constructor(){q(this,"app");q(this,"audio");q(this,"canvas");q(this,"camera");q(this,"scene");q(this,"sizesStore");q(this,"sizes");q(this,"instance");this.app=new Gt,this.audio=new Audio,this.canvas=this.app.canvas,this.camera=this.app.camera,this.scene=this.app.scene,this.sizesStore=Ns,this.sizes=this.sizesStore.getState(),this.setInstance(),this.setResizeLister()}setInstance(){this.instance=new Io({canvas:this.canvas,antialias:!0}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.outputEncoding=ke,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Zs,this.instance.toneMapping=sa,this.instance.toneMappingExposure=.8}setResizeLister(){this.sizesStore.subscribe(e=>{this.instance.setSize(e.width,e.height),this.instance.setPixelRatio(e.pixelRatio)})}loop(){this.instance.render(this.scene,this.camera.instance)}}class Af{constructor(){q(this,"app");q(this,"camera");q(this,"renderer");q(this,"world");q(this,"clock");q(this,"previousElapsedTime");this.app=new Gt,this.camera=this.app.camera,this.renderer=this.app.renderer,this.world=this.app.world,this.clock=new hf,this.previousElapsedTime=0,this.loop()}loop(){const e=this.clock.getElapsedTime(),t=e-this.previousElapsedTime;this.previousElapsedTime=e,this.world.loop(t),this.camera.loop(),this.renderer.loop(),window.requestAnimationFrame(()=>this.loop())}}const Cf="modulepreload",Lf=function(o,e){return new URL(o,e).href},dl={},Rf=function(o,e,t){if(!e||e.length===0)return o();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=Lf(r,t),r in dl)return;dl[r]=!0;const n=r.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(t)for(let l=i.length-1;l>=0;l--){const c=i[l];if(c.href===r&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":Cf,n||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),n)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>o()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};class Pf{constructor(){q(this,"app");q(this,"scene");q(this,"meshMap");q(this,"world");q(this,"rapier");q(this,"rapierLoaded");q(this,"rigidBody");this.app=new Gt,this.scene=this.app.scene,this.meshMap=new Map,Rf(()=>import("./rapier-b2bfc001.js").then(async e=>(await e.__tla,e)),[],import.meta.url).then(e=>{const t={x:0,y:-9.81,z:0};this.world=new e.World(t),this.rapier=e,this.rapierLoaded=!0,Os.setState({physicsReady:!0})})}add(e,t,i,r=2,n=2,s=2){let a;switch(t){case"dynamic":a=this.rapier.RigidBodyDesc.dynamic();break;case"fixed":a=this.rapier.RigidBodyDesc.fixed();break;case"kinematic":a=this.rapier.RigidBodyDesc.kinematicPositionBased();break}a&&(this.rigidBody=this.world.createRigidBody(a));let l;switch(i){case"cuboid":const u=this.computeCuboidDimensions(e);l=this.rapier.ColliderDesc.cuboid(u.x/s,u.y/r,u.z/n),this.world.createCollider(l,this.rigidBody);break;case"ball":const d=this.computeBallDimensions(e);l=this.rapier.ColliderDesc.ball(d),this.world.createCollider(l,this.rigidBody);break;case"trimesh":const{scaledVertices:f,indices:g}=this.computeTrimeshDimensions(e);l=this.rapier.ColliderDesc.trimesh(f,g),this.world.createCollider(l,this.rigidBody);break}const c=e.getWorldPosition(new C),h=e.getWorldQuaternion(new et);return this.rigidBody.setTranslation(c,!1),this.rigidBody.setRotation(h,!1),this.meshMap.set(e,this.rigidBody),this.rigidBody}computeCuboidDimensions(e){e.geometry.computeBoundingBox();const t=e.geometry.boundingBox.getSize(new C),i=e.getWorldScale(new C);return t.multiply(i),t}computeBallDimensions(e){e.geometry.computeBoundingSphere();const t=e.geometry.boundingSphere.radius,i=e.getWorldScale(new C),r=Math.max(i.x,i.y,i.z);return t*r}computeTrimeshDimensions(e){const t=e.geometry.attributes.position.array,i=e.geometry.index.array,r=e.getWorldScale(new C);return{scaledVertices:t.map((n,s)=>n*r.getComponent(s%3)),indices:i}}loop(){this.rapierLoaded&&(this.world.step(),this.meshMap.forEach((e,t)=>{const i=new C().copy(e.translation()),r=new et().copy(e.rotation());i.applyMatrix4(new Ae().copy(t.parent.matrixWorld).invert());const n=new Ae().extractRotation(t.parent.matrixWorld).invert(),s=new et().setFromRotationMatrix(n);r.premultiply(s),t.position.copy(i),t.quaternion.copy(r)}))}}const If=[{id:"avatar",path:"/models/avatar.glb",type:"model"},{id:"environment",path:"/models/environment.glb",type:"model"}],An=En(o=>({assetsToLoad:If,loadedAssets:{},addLoadedAsset:(e,t)=>o(i=>({loadedAssets:{...i.loadedAssets,[t]:e}}))})),Df=[{name:"TypeScript",logo:"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"},{name:"React",logo:"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"},{name:"NextJS",logo:"https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"},{name:"Python",logo:"https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"},{name:"Apollo Graphql",logo:"https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql"},{name:"ExpressJS",logo:"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"},{name:"MongoDB",logo:"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"},{name:"ThreeJS",logo:"https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"},{name:"NodeJS",logo:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"},{name:"Java",logo:"https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"}],Nf=[{name:"LinkedIn",logo:"https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white",url:"https://linkedin.com/in/adriantomin"},{name:"GitHub",logo:"https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white",url:"https://github.com/AdrianTomin/"}],Of=[{name:"Smart Brain",description:"Smart Brain is a web application where the main functionality revolves around utilizing the Clarifai API for general image recognition.",image:["/smart-brain-pictures/home-page.png","/smart-brain-pictures/login.png","/smart-brain-pictures/results.png","/smart-brain-pictures/settings.png","/smart-brain-pictures/signup.png"],link:"https://github.com/AdrianTomin/smart-brain-public",techStack:[{name:"React",logo:"/icons/react-icon.svg"},{name:"Node.js",logo:"/icons/node-icon.svg"},{name:"NextJS",logo:"/icons/next-icon.svg"},{name:"Apollo GraphQL",logo:"/icons/apollo-icon.svg"},{name:"MongoDB",logo:"/icons/mongodb-icon.svg"},{name:"TypeScript",logo:"/icons/ts-icon.svg"},{name:"ExpressJS",logo:"/icons/express-icon.svg"},{name:"SASS",logo:"/icons/sass-icon.svg"},{name:"MUI",logo:"/icons/mui-icon.svg"},{name:"Cypress",logo:"/icons/cypress-icon.svg"}]},{name:"Verbano",description:`Verbano is a cutting-edge AI-powered application designed to revolutionize the way audio recordings
		 and transcriptions are integrated and utilized. Verbano uniquely combines audio recording capabilities, transcription services, 
		 and document linking to produce contextually rich summaries.`,image:["/verbano-pictures/verbano.png","/verbano-pictures/login.png","/verbano-pictures/darkmode.png"],link:"https://github.com/CouloirStudio/verbano",techStack:[{name:"React",logo:"/icons/react-icon.svg"},{name:"Node.js",logo:"/icons/node-icon.svg"},{name:"NextJS",logo:"/icons/next-icon.svg"},{name:"Apollo GraphQL",logo:"/icons/apollo-icon.svg"},{name:"MongoDB",logo:"/icons/mongodb-icon.svg"},{name:"TypeScript",logo:"/icons/ts-icon.svg"},{name:"ExpressJS",logo:"/icons/express-icon.svg"},{name:"SASS",logo:"/icons/sass-icon.svg"},{name:"MUI",logo:"/icons/mui-icon.svg"},{name:"Cypress",logo:"/icons/cypress-icon.svg"}]},{name:"ThreeJS Solar System",description:"A simple and interactive model of our Solar System built with ThreeJS.",image:["/threejs-solar-system-pictures/solar-system-1.png","/threejs-solar-system-pictures/solar-system-2.png"],link:"https://github.com/AdrianTomin/threejs-solar-system",techStack:[{name:"TypeScript",logo:"/icons/ts-icon.svg"},{name:"Vite",logo:"/icons/vite-icon.svg"},{name:"ThreeJS",logo:"/icons/threejs-icon.svg"}]},{name:"Portfolio Site",description:"Welcome to my interactive portfolio site! Dive into a unique experience where you control a character navigating through a vibrant scene, exploring various projects and contact information. Built with ThreeJS, this site blends creativity and technology, offering an engaging way to discover my work and connect with me.",image:["portfolio-pictures/portfolio.png","portfolio-pictures/contact-me.png","portfolio-pictures/about-me.png","portfolio-pictures/projects.png"],link:"",techStack:[{name:"TypeScript",logo:"/icons/ts-icon.svg"},{name:"Vite",logo:"/icons/vite-icon.svg"},{name:"ThreeJS",logo:"/icons/threejs-icon.svg"}]}];class pl{constructor(){q(this,"modal");q(this,"close");q(this,"cardModal",null);q(this,"currentImageIndex",0);this.modal=document.getElementById("myModal"),this.close=document.getElementsByClassName("close")[0],this.close.onclick=()=>{this.closeModal()}}openModal(e,t){var s;const i=document.getElementById("modalTitle"),r=document.getElementById("modalDescription"),n=(s=this.modal)==null?void 0:s.querySelector(".modal-content");if(i&&(i.textContent=e),r&&(r.textContent=t),n)for(;n.firstChild&&!n.firstChild.isSameNode(i)&&!n.firstChild.isSameNode(r);)n.removeChild(n.firstChild);if(e==="\u{1F4AB} About Me"&&n){r&&(r.hidden=!1),this.removeId(n);const a=document.createElement("div");a.className="languages-container",Df.forEach(u=>{const d=document.createElement("img");d.src=u.logo,d.alt=`${u.name} Logo`,d.style.margin="5px",a.appendChild(d)}),n.appendChild(a);const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="center",l.style.alignItems="center",l.style.height="100%";const c=document.createElement("div");c.className="loader",n.appendChild(c);const h=document.createElement("img");h.className="stats-image",h.src="https://camo.githubusercontent.com/16ffb49c08a63128cf75b481dcff67089534ea943e96578406c604cacbe4de33/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d41647269616e546f6d696e267468656d653d7261646963616c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374",h.alt="GitHub Language Stats",h.style.marginTop="10px",h.style.display="none",l.appendChild(h),n.appendChild(l),h.onload=function(){c.style.display="none",h.style.display="block"},h.onerror=()=>{c.style.display="none";const u=document.createElement("p");u.textContent="Error loading image",n.appendChild(u)}}if(e==="\u{1F310} Contact Me"&&n){r&&(r.hidden=!0),this.removeId(n);const a=document.createElement("div");a.className="contact-container";const l=document.createElement("img");l.src="/avatar-selfie.jpeg",l.className="avatar-selfie",a.appendChild(l);const c=document.createElement("p");c.textContent=t,a.appendChild(c);const h=document.createElement("div");h.className="icon-container",Nf.forEach(u=>{const d=document.createElement("a");d.href=u.url,d.target="_blank";const f=document.createElement("img");f.src=u.logo,f.alt=`${u.name} Logo`,f.className="contact-icon",d.appendChild(f),h.appendChild(d)}),a.appendChild(h),n.appendChild(a)}if(e==="\u{1F4BB} Projects"&&n){r&&(r.hidden=!1),n.id="projects-id";const a=document.createElement("div");a.className="project-container",Of.forEach(l=>{const c=document.createElement("div");c.className="project-card";const h=document.createElement("img");h.className="card-image",h.src=l.image[0],h.alt=l.name,c.appendChild(h);const u=document.createElement("div");u.className="project-details";const d=document.createElement("h3");d.textContent=l.name,u.appendChild(d),c.appendChild(u),a.appendChild(c),c.addEventListener("click",()=>{this.openCardModal(l.name,l.description,l.image,l.link,l.techStack)})}),n.appendChild(a)}this.modal&&(this.modal.style.display="block",this.modal.classList.remove("fadeOut"),this.modal.classList.add("fadeIn"))}openCardModal(e,t,i,r,n){this.currentImageIndex=0,this.modal&&(this.modal.style.display="none"),this.cardModal=document.createElement("div"),this.cardModal.className="modal card-modal",document.body.appendChild(this.cardModal);const s=document.createElement("div");s.className="modal-content";const a=document.createElement("div");a.className="modal-header";const l=document.createElement("span");l.className="close",l.textContent="x",l.onclick=()=>{var P;(P=this.cardModal)==null||P.remove(),this.cardModal=null,this.modal&&(this.modal.style.display="block")},a.appendChild(l);const c=document.createElement("h2");c.textContent=e,c.className="centered-title",a.appendChild(c),s.appendChild(a);const h=document.createElement("div");h.className="modal-body";const u=document.createElement("div");u.className="project-details";const d=document.createElement("p");d.textContent=t,u.appendChild(d),h.appendChild(u),s.appendChild(h);const f=document.createElement("div");f.className="carousel-container";const g=document.createElement("button");g.className="carousel-nav prev",g.textContent="\u2039",g.onclick=()=>{this.showPreviousImage(i)},f.appendChild(g);const m=document.createElement("div");m.className="carousel-image-container";const p=document.createElement("img");p.className="project-image",p.src=i[this.currentImageIndex],p.onload=()=>{p.style.width="100%",p.style.height="100%",p.style.objectFit="contain"},m.appendChild(p),f.appendChild(m);const _=document.createElement("button");_.className="carousel-nav next",_.textContent="\u203A",_.onclick=()=>{this.showNextImage(i)},f.appendChild(_),u.appendChild(f);const S=document.createElement("h3");S.textContent="Tech Stack",S.className="centered-title",u.appendChild(S);const x=document.createElement("div");x.className="tech-stack-container",n.forEach(P=>{const y=document.createElement("div");y.className="tech-item";const E=document.createElement("img");E.src=P.logo,E.alt=`${P.name} Logo`,E.className="\u222Bo",y.appendChild(E),x.appendChild(y)}),u.appendChild(x);const M=document.createElement("h3");M.textContent="View Here",M.className="centered-title",u.appendChild(M);const w=document.createElement("a");w.href=r,w.target="_blank";const L=document.createElement("img");L.src="/github.svg",L.alt="View Icon",L.className="view-here-icon",w.appendChild(L),u.appendChild(w),this.cardModal.appendChild(s),this.cardModal.style.display="block",this.cardModal.classList.add("fadeIn")}showPreviousImage(e){this.currentImageIndex=(this.currentImageIndex-1+e.length)%e.length,this.updateCarouselImage(e)}showNextImage(e){this.currentImageIndex=(this.currentImageIndex+1)%e.length,this.updateCarouselImage(e)}updateCarouselImage(e){var i;const t=(i=this.cardModal)==null?void 0:i.querySelector(".carousel-image-container img");t&&(t.src=e[this.currentImageIndex]),this.updateCarouselIndicators()}updateCarouselIndicators(){var e;((e=this.cardModal)==null?void 0:e.querySelectorAll(".indicator")).forEach((t,i)=>{i===this.currentImageIndex?t.classList.add("active"):t.classList.remove("active")})}closeModal(){this.modal&&(this.modal.classList.remove("fadeIn"),this.modal.classList.add("fadeOut"),setTimeout(()=>{if(this.modal){this.modal.style.display="none";const e=this.modal.querySelector(".languages-container");e&&e.remove();const t=this.modal.querySelector(".stats-image");t&&t.remove();const i=this.modal.querySelector(".contact-container");i&&i.remove();const r=this.modal.querySelector(".project-container");r&&r.remove()}},600)),this.cardModal&&(this.cardModal.remove(),this.cardModal=null)}removeId(e){e.removeAttribute("id")}}class ks{constructor(e,t){q(this,"app");q(this,"portalMesh");q(this,"modalInfo");q(this,"modalManager");q(this,"prevIsNear");q(this,"character");q(this,"world");this.app=new Gt,this.portalMesh=e,this.modalInfo=t,this.modalManager=new pl,this.prevIsNear=!1}loop(){if(this.character=this.app.world.character.instance,this.character){const e=new C;this.portalMesh.getWorldPosition(e),this.character.position.distanceTo(e)<3?(this.prevIsNear||this.modalManager.openModal(this.modalInfo.title,this.modalInfo.description),this.prevIsNear=!0):(this.prevIsNear&&this.modalManager.closeModal(),this.prevIsNear=!1)}}}class kf{constructor(){q(this,"modalContents");this.modalContents={aboutMe:{title:"\u{1F4AB} About Me",description:`Hello! I'm Adrian Tomin, 
				a passionate developer currently focused on building my portfolio site, 
				exploring the world of three.js, and focusing on machine learning + AI.
				
				My Tech Stack Includes:
				`},contactMe:{title:"\u{1F310} Contact Me",description:`Thank you for visiting my portfolio! 
				If you have any questions, comments, or just want to connect, 
				feel free to reach out to me through any of the following channels:`},projects:{title:"\u{1F4BB} Projects",description:"Here are the various projects that I've worked on:"}}}getModalInfo(e){return this.modalContents[e]}}class zf{constructor(){q(this,"app");q(this,"scene");q(this,"physics");q(this,"assetStore");q(this,"environment");q(this,"world");q(this,"directionalLight");q(this,"portal1");q(this,"portal2");q(this,"portal3");this.app=new Gt,this.scene=this.app.scene,this.physics=this.app.world.physics,this.assetStore=An.getState(),this.environment=this.assetStore.loadedAssets.environment,this.loadEnvironment(),this.addLights(),this.addPortals()}loadEnvironment(){const e=this.environment.scene;e.rotation.set(0,-.4,0),e.traverse(r=>{r.isMesh&&(r.name.includes("base")?r.name.includes("013")||r.name.includes("014")||r.name.includes("015")||r.name.includes("016")||r.name.includes("017")||r.name.includes("018")||r.name.includes("019")?this.physics.add(r,"fixed","trimesh",2.229,6,2.229):this.physics.add(r,"fixed","cuboid",2.229):r.name.includes("bushes")?this.physics.add(r,"fixed","ball",2.229):r.name.includes("trees")?this.physics.add(r,"fixed","trimesh",2.229):this.physics.add(r,"fixed","cuboid"))});const t=["trees","terrain","rocks","stairs","gates","bushes","border"],i=["base","terrain"];for(const r of e.children)t.some(n=>r.name.includes(n))&&r.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),i.some(n=>r.name.includes(n))&&r.traverse(n=>{n.isMesh&&(n.receiveShadow=!0)});this.scene.add(e)}addLights(){const e=new lf(16777215,.5);this.scene.add(e),this.directionalLight=new al(16777215,.5),this.directionalLight.position.set(.15,.44,.8),this.directionalLight.castShadow=!0,this.directionalLight.shadow.camera.top=30,this.directionalLight.shadow.camera.bottom=-30,this.directionalLight.shadow.camera.right=30,this.directionalLight.shadow.camera.left=-30,this.directionalLight.shadow.bias=-.002,this.directionalLight.shadow.normalBias=.072,this.scene.add(this.directionalLight)}addPortals(){const e=this.environment.scene.getObjectByName("portals"),t=this.environment.scene.getObjectByName("portals001"),i=this.environment.scene.getObjectByName("portals002"),r=new kf;e&&t&&i&&(this.portal1=new ks(t,r.getModalInfo("aboutMe")),this.portal2=new ks(e,r.getModalInfo("contactMe")),this.portal3=new ks(i,r.getModalInfo("projects")))}loop(){this.portal1.loop(),this.portal2.loop(),this.portal3.loop()}}class Uf{constructor(){q(this,"app");q(this,"scene");q(this,"assetStore");q(this,"avatar");q(this,"instance");this.app=new Gt,this.scene=this.app.scene,this.assetStore=An.getState(),this.avatar=this.assetStore.loadedAssets.avatar,this.instantiateCharacter()}instantiateCharacter(){const e=new or(.6,2,.6),t=new bn({color:65280,wireframe:!0,visible:!1});this.instance=new Tt(e,t),this.instance.position.set(0,10,0),this.scene.add(this.instance);const i=this.avatar.scene;i.rotation.y=Math.PI,i.position.y=-1,this.instance.add(i)}}class Ff{constructor(){q(this,"app");q(this,"scene");q(this,"physics");q(this,"character");q(this,"forward");q(this,"backward");q(this,"right");q(this,"left");q(this,"rigidBodyType");q(this,"rigidBody");q(this,"colliderType");q(this,"collider");q(this,"characterController");this.app=new Gt,this.scene=this.app.scene,this.physics=this.app.world.physics,this.character=this.app.world.character.instance,It.subscribe(e=>{this.forward=e.forward,this.backward=e.backward,this.left=e.left,this.right=e.right}),this.instantiateController(),this.addEventListeners()}instantiateController(){this.rigidBodyType=this.physics.rapier.RigidBodyDesc.kinematicPositionBased(),this.rigidBody=this.physics.world.createRigidBody(this.rigidBodyType),this.colliderType=this.physics.rapier.ColliderDesc.cuboid(.3,1,.3),this.collider=this.physics.world.createCollider(this.colliderType,this.rigidBody);const e=this.character.getWorldPosition(new C),t=this.character.getWorldQuaternion(new et);this.rigidBody.setTranslation(e),this.rigidBody.setRotation(t),this.characterController=this.physics.world.createCharacterController(.01),this.characterController.setApplyImpulsesToDynamicBodies(!0),this.characterController.enableAutostep(2,.1,!1),this.characterController.enableSnapToGround(.1)}loop(){const e=new C;if(this.forward&&(e.z-=1),this.backward&&(e.z+=1),this.left&&(e.x-=1),this.right&&(e.x+=1),e.length()!==0){const i=Math.atan2(e.x,e.z)+Math.PI,r=new et().setFromAxisAngle(new C(0,1,0),i);this.character.quaternion.slerp(r,.1)}e.normalize().multiplyScalar(.1),e.y=-1,this.characterController.computeColliderMovement(this.collider,e);const t=new C().copy(this.rigidBody.translation()).add(this.characterController.computedMovement());this.rigidBody.setNextKinematicTranslation(t),this.character.position.lerp(this.rigidBody.translation(),.1)}addEventListeners(){document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".controls");(()=>window.matchMedia("(pointer: fine)").matches)()||(i.style.display="flex")});const e=i=>{It.setState({[i]:!0})},t=i=>{It.setState({[i]:!1})};document.querySelectorAll(".control-button").forEach(i=>{i.addEventListener("touchstart",r=>{r.preventDefault();const n=r.target;n&&n.id&&e(n.id)}),i.addEventListener("touchend",r=>{r.preventDefault();const n=r.target;n&&n.id&&t(n.id)}),i.addEventListener("mousedown",r=>{r.preventDefault();const n=r.target;n&&n.id&&e(n.id)}),i.addEventListener("mouseup",r=>{r.preventDefault();const n=r.target;n&&n.id&&t(n.id)})})}}class Bf{constructor(){q(this,"app");q(this,"scene");q(this,"avatar");q(this,"mixer");q(this,"animations");q(this,"currentAction");this.app=new Gt,this.scene=this.app.scene,this.avatar=this.app.world.character.avatar,It.subscribe(e=>this.onInput(e)),this.instantiatedAnimations()}instantiatedAnimations(){this.mixer=new Sf(this.avatar.scene),this.animations=new Map,this.avatar.animations.forEach(e=>{this.animations.set(e.name,this.mixer.clipAction(e))}),this.currentAction=this.animations.get("idle"),this.currentAction.play()}playAnimation(e){if(this.currentAction===this.animations.get(e))return;const t=this.animations.get(e);t==null||t.reset(),t==null||t.play(),t==null||t.crossFadeFrom(this.currentAction,.2,!0),this.currentAction=t}onInput(e){e.forward||e.backward||e.left||e.right?this.playAnimation("run"):this.playAnimation("idle")}loop(e){this.mixer.update(e)}}class Gf{constructor(){q(this,"app");q(this,"scene");q(this,"physics");q(this,"environment");q(this,"character");q(this,"characterController");q(this,"animationController");this.app=new Gt,this.scene=this.app.scene,this.physics=new Pf;const e=Os.subscribe(t=>{t.physicsReady&&t.assetsReady&&(this.environment=new zf,this.character=new Uf,this.characterController=new Ff,this.animationController=new Bf,e())});this.loop()}loop(e){this.physics.loop(),this.environment&&this.environment.loop(),this.characterController&&this.characterController.loop(),this.animationController&&e&&this.animationController.loop(e)}}class Hf{constructor(){const{setState:e}=Ns;window.addEventListener("resize",()=>{e({width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)})})}}function ml(o,e){if(e===_c)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Fn||e===Ia){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,r=[];if(e===Fn)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=o.clone();return n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Vf extends vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yf(t)}),this.register(function(t){return new tg(t)}),this.register(function(t){return new ig(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new eg(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new rg(t)}),this.register(function(t){return new ng(t)})}load(e,t,i,r){const n=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Rs.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),n.manager.itemError(e),n.manager.itemEnd(e)},l=new wn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{n.parse(c,s,function(h){t(h),n.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;const s={},a={},l=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fl){try{s[Ne.KHR_BINARY_GLTF]=new sg(e)}catch(h){r&&r(h);return}n=JSON.parse(s[Ne.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vg(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,s[u.name]=!0}if(n.extensionsUsed)for(let h=0;h<n.extensionsUsed.length;++h){const u=n.extensionsUsed[h],d=n.extensionsRequired||[];switch(u){case Ne.KHR_MATERIALS_UNLIT:s[u]=new qf;break;case Ne.KHR_DRACO_MESH_COMPRESSION:s[u]=new ag(n,this.dracoLoader);break;case Ne.KHR_TEXTURE_TRANSFORM:s[u]=new og;break;case Ne.KHR_MESH_QUANTIZATION:s[u]=new lg;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,n){i.parse(e,t,r,n)})}}function Wf(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jf{constructor(e){this.parser=e,this.name=Ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const n=t.json,s=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let a;const l=new Ee(16777215);s.color!==void 0&&l.fromArray(s.color);const c=s.range!==void 0?s.range:0;switch(s.type){case"directional":a=new al(l),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new af(l),a.distance=c;break;case"spot":a=new nf(l),a.distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,a.angle=s.spot.outerConeAngle,a.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return a.position.set(0,0,0),a.decay=2,gi(a,s),s.intensity!==void 0&&(a.intensity=s.intensity),a.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(a),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(s){return i._getNodeRef(t.cache,n,s)})}}class qf{constructor(){this.name=Ne.KHR_MATERIALS_UNLIT}getMaterialType(){return Ai}extendParams(e,t,i){const r=[];e.color=new Ee(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const s=n.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}n.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",n.baseColorTexture,ke))}return Promise.all(r)}}class Xf{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Yf{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(n)}}class Kf{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(n)}}class Zf{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ke)),s.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(n)}}class Jf{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(n)}}class Qf{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ee(a[0],a[1],a[2]),Promise.all(n)}}class $f{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class eg{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Ee(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,ke)),Promise.all(n)}}class tg{constructor(e){this.parser=e,this.name=Ne.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const n=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,s)}}class ig{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;const s=n.extensions[t],a=r.images[s.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rg{constructor(e){this.name=Ne.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],n=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(f),h,u,d,r.mode,r.filter),f})})}else return null}}class ng{constructor(e){this.name=Ne.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==Dt.TRIANGLES&&l.mode!==Dt.TRIANGLE_STRIP&&l.mode!==Dt.TRIANGLE_FAN&&l.mode!==void 0)return null;const n=i.extensions[this.name].attributes,s=[],a={};for(const l in n)s.push(this.parser.getDependency("accessor",n[l]).then(c=>(a[l]=c,a[l])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const f of h){const g=new Ae,m=new C,p=new et,_=new C(1,1,1),S=new Hm(f.geometry,f.material,u);for(let x=0;x<u;x++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,x),a.ROTATION&&p.fromBufferAttribute(a.ROTATION,x),a.SCALE&&_.fromBufferAttribute(a.SCALE,x),S.setMatrixAt(x,g.compose(m,p,_));for(const x in a)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&f.geometry.setAttribute(x,a[x]);je.prototype.copy.call(S,f),S.frustumCulled=!1,this.parser.assignFinalMaterial(S),d.push(S)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const fl="glTF",Br=12,gl={JSON:1313821514,BIN:5130562};class sg{constructor(e){this.name=Ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Br),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Br,n=new DataView(e,Br);let s=0;for(;s<r;){const a=n.getUint32(s,!0);s+=4;const l=n.getUint32(s,!0);if(s+=4,l===gl.JSON){const c=new Uint8Array(e,Br+s,a);this.content=i.decode(c)}else if(l===gl.BIN){const c=Br+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ag{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ne.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const h in s){const u=Us[h]||h.toLowerCase();a[u]=s[h]}for(const h in e.attributes){const u=Us[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],f=xr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}u(d)},a,c)})})}}class og{constructor(){this.name=Ne.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class lg{constructor(){this.name=Ne.KHR_MESH_QUANTIZATION}}class _l extends kr{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[n+s];return t}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=r-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,m=g-c,p=-2*f+3*d,_=f-d,S=1-p,x=_-d+u;for(let M=0;M!==a;M++){const w=s[m+M+a],L=s[m+M+l]*h,P=s[g+M+a],y=s[g+M]*h;n[M]=S*w+x*L+p*P+_*y}return n}}const cg=new et;class hg extends _l{interpolate_(e,t,i,r){const n=super.interpolate_(e,t,i,r);return cg.fromArray(n).normalize().toArray(n),n}}const Dt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vl={9728:$e,9729:xt,9984:Pn,9985:oa,9986:jr,9987:_i},xl={33071:Lt,33648:Wr,10497:Vi},zs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Us={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ug={CUBICSPLINE:void 0,LINEAR:qi,STEP:br},Fs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dg(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new bn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xt})),o.DefaultMaterial}function Gr(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function gi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pg(o,e,t){let i=!1,r=!1,n=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(n=!0),i&&r&&n)break}if(!i&&!r&&!n)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;s.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(n){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(o.morphAttributes.position=h),r&&(o.morphAttributes.normal=u),n&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function mg(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fg(o){const e=o.extensions&&o.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+yl(e.attributes):t=o.indices+":"+yl(o.attributes)+":"+o.mode,t}function yl(o){let e="";const t=Object.keys(o).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Bs(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gg(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _g=new Ae;class vg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wf,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,n=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,n=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&n<98?this.textureLoader=new il(this.options.manager):this.textureLoader=new cf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};Gr(n,a,r),gi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){const s=t[r].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let r=0,n=e.length;r<n;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),n=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,h]of s.children.entries())n(h,a.children[c])};return n(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const n=e(t[r]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":r=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(n,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(n,s){i.load(Rs.resolveURL(t.uri,r.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=zs[r.type],a=xr[r.componentType],l=r.normalized===!0,c=new a(r.count*s);return Promise.resolve(new at(c,s,l))}const n=[];return r.bufferView!==void 0?n.push(this.getDependency("bufferView",r.bufferView)):n.push(null),r.sparse!==void 0&&(n.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(n).then(function(s){const a=s[0],l=zs[r.type],c=xr[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,p;if(f&&f!==u){const _=Math.floor(d/f),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let x=t.cache.get(S);x||(m=new c(a,_*f,r.count*f/h),x=new km(m,f/h),t.cache.add(S,x)),p=new Ms(x,l,d%f/h,g)}else a===null?m=new c(r.count*l):m=new c(a,d,r.count*l),p=new at(m,l,g);if(r.sparse!==void 0){const _=zs.SCALAR,S=xr[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,w=new S(s[1],x,r.sparse.count*_),L=new c(s[2],M,r.sparse.count*l);a!==null&&(p=new at(p.array.slice(),p.itemSize,p.normalized));for(let P=0,y=w.length;P<y;P++){const E=w[P];if(p.setX(E,L[P*l]),l>=2&&p.setY(E,L[P*l+1]),l>=3&&p.setZ(E,L[P*l+2]),l>=4&&p.setW(E,L[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,n=t.images[r];let s=this.textureLoader;if(n.uri){const a=i.manager.getHandler(n.uri);a!==null&&(s=a)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,i){const r=this,n=this.json,s=n.textures[e],a=n.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||a.name||"";const u=(n.samplers||{})[s.sampler]||{};return h.magFilter=vl[u.magFilter]||xt,h.minFilter=vl[u.minFilter]||_i,h.wrapS=xl[u.wrapS]||Vi,h.wrapT=xl[u.wrapT]||Vi,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=r.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const p=new st(m);p.needsUpdate=!0,d(p)}),t.load(Rs.resolveURL(u,n.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=s.mimeType||gg(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const n=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),n.extensions[Ne.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ne.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=n.associations.get(s);s=n.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),n.associations.set(s,l)}}return r!==void 0&&(s.encoding=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Yo,Vt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ho,Vt.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(r||n||s){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),n&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),n&&(l.vertexColors=!0),s&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return bn}loadMaterial(e){const t=this,i=this.json,r=this.extensions,n=i.materials[e];let s;const a={},l=n.extensions||{},c=[];if(l[Ne.KHR_MATERIALS_UNLIT]){const u=r[Ne.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(a,n,t))}else{const u=n.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ke)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}n.doubleSided===!0&&(a.side=Yt);const h=n.alphaMode||Fs.OPAQUE;if(h===Fs.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fs.MASK&&(a.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==Ai&&(c.push(t.assignTexture(a,"normalMap",n.normalTexture)),a.normalScale=new be(1,1),n.normalTexture.scale!==void 0)){const u=n.normalTexture.scale;a.normalScale.set(u,u)}return n.occlusionTexture!==void 0&&s!==Ai&&(c.push(t.assignTexture(a,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==Ai&&(a.emissive=new Ee().fromArray(n.emissiveFactor)),n.emissiveTexture!==void 0&&s!==Ai&&c.push(t.assignTexture(a,"emissiveMap",n.emissiveTexture,ke)),Promise.all(c).then(function(){const u=new s(a);return n.name&&(u.name=n.name),gi(u,n),t.associations.set(u,{materials:e}),n.extensions&&Gr(r,u,n),u})}createUniqueName(e){const t=Ue.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function n(a){return i[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ml(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=fg(c),u=r[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[Ne.KHR_DRACO_MESH_COMPRESSION]?d=n(c):d=Ml(new Bt,c,t),r[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,n=i.meshes[e],s=n.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?dg(this.cache):this.getDependency("material",s[l].material);a.push(h)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const m=h[f],p=s[f];let _;const S=c[f];if(p.mode===Dt.TRIANGLES||p.mode===Dt.TRIANGLE_STRIP||p.mode===Dt.TRIANGLE_FAN||p.mode===void 0)_=n.isSkinnedMesh===!0?new Um(m,S):new Tt(m,S),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Dt.TRIANGLE_STRIP?_.geometry=ml(_.geometry,Ia):p.mode===Dt.TRIANGLE_FAN&&(_.geometry=ml(_.geometry,Fn));else if(p.mode===Dt.LINES)_=new Vm(m,S);else if(p.mode===Dt.LINE_STRIP)_=new ws(m,S);else if(p.mode===Dt.LINE_LOOP)_=new Wm(m,S);else if(p.mode===Dt.POINTS)_=new jm(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&mg(_,n),_.name=t.createUniqueName(n.name||"mesh_"+e),gi(_,n),p.extensions&&Gr(r,_,p),t.assignFinalMaterial(_),u.push(_)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Ii;t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new mt(Oc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ms(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),gi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,n=t.joints.length;r<n;r++)i.push(this.getDependency("node",t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const n=r.pop(),s=r,a=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){a.push(u);const d=new Ae;n!==null&&d.fromArray(n.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bs(a,l)})}loadAnimation(e){const t=this.json.animations[e],i=[],r=[],n=[],s=[],a=[];for(let l=0,c=t.channels.length;l<c;l++){const h=t.channels[l],u=t.samplers[h.sampler],d=h.target,f=d.node,g=t.parameters!==void 0?t.parameters[u.input]:u.input,m=t.parameters!==void 0?t.parameters[u.output]:u.output;i.push(this.getDependency("node",f)),r.push(this.getDependency("accessor",g)),n.push(this.getDependency("accessor",m)),s.push(u),a.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(s),Promise.all(a)]).then(function(l){const c=l[0],h=l[1],u=l[2],d=l[3],f=l[4],g=[];for(let p=0,_=c.length;p<_;p++){const S=c[p],x=h[p],M=u[p],w=d[p],L=f[p];if(S===void 0)continue;S.updateMatrix();let P;switch(fi[L.path]){case fi.weights:P=zr;break;case fi.rotation:P=Ni;break;case fi.position:case fi.scale:default:P=Ur;break}const y=S.name?S.name:S.uuid,E=w.interpolation!==void 0?ug[w.interpolation]:qi,N=[];fi[L.path]===fi.weights?S.traverse(function(K){K.morphTargetInfluences&&N.push(K.name?K.name:K.uuid)}):N.push(y);let X=M.array;if(M.normalized){const K=Bs(X.constructor),k=new Float32Array(X.length);for(let D=0,W=X.length;D<W;D++)k[D]=X[D]*K;X=k}for(let K=0,k=N.length;K<k;K++){const D=new P(N[K]+"."+fi[L.path],x.array,X,E);w.interpolation==="CUBICSPLINE"&&(D.createInterpolant=function(W){const Z=this instanceof Ni?hg:_l;return new Z(this.times,this.values,this.getValueSize()/3,W)},D.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(D)}}const m=t.name?t.name:"animation_"+e;return new Es(m,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(n){const s=i._getNodeRef(i.meshCache,r.mesh,n);return r.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(e){const t=this.json,i=this.extensions,r=this,n=t.nodes[e],s=n.name?r.createUniqueName(n.name):"";return function(){const a=[],l=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});l&&a.push(l),n.camera!==void 0&&a.push(r.getDependency("camera",n.camera).then(function(d){return r._getNodeRef(r.cameraCache,n.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){a.push(d)});const c=[],h=n.children||[];for(let d=0,f=h.length;d<f;d++)c.push(r.getDependency("node",h[d]));const u=n.skin===void 0?Promise.resolve(null):r.getDependency("skin",n.skin);return Promise.all([Promise.all(a),Promise.all(c),u])}().then(function(a){const l=a[0],c=a[1],h=a[2];let u;if(n.isBone===!0?u=new zo:l.length>1?u=new Ii:l.length===1?u=l[0]:u=new je,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(n.name&&(u.userData.name=n.name,u.name=s),gi(u,n),n.extensions&&Gr(i,u,n),n.matrix!==void 0){const d=new Ae;d.fromArray(n.matrix),u.applyMatrix4(d)}else n.translation!==void 0&&u.position.fromArray(n.translation),n.rotation!==void 0&&u.quaternion.fromArray(n.rotation),n.scale!==void 0&&u.scale.fromArray(n.scale);r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,_g)});for(let d=0,f=c.length;d<f;d++)u.add(c[d]);return u})}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,n=new Ii;i.name&&(n.name=r.createUniqueName(i.name)),gi(n,i),i.extensions&&Gr(t,n,i);const s=i.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(r.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)n.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of r.associations)(d instanceof Vt||d instanceof st)&&u.set(d,f);return h.traverse(d=>{const f=r.associations.get(d);f!=null&&u.set(d,f)}),u};return r.associations=c(n),n})}}function xg(o,e,t){const i=e.attributes,r=new Zi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=Bs(xr[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const a=new C,l=new C;for(let c=0,h=n.length;c<h;c++){const u=n[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const m=Bs(xr[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}o.boundingBox=r;const s=new er;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=s}function Ml(o,e,t){const i=e.attributes,r=[];function n(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in i){const a=Us[s]||s.toLowerCase();a in o.attributes||r.push(n(i[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});r.push(s)}return gi(o,e),xg(o,e,t),Promise.all(r).then(function(){return e.targets!==void 0?pg(o,e.targets,t):o})}const Gs=new WeakMap;class yg extends vr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const n=new wn(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,s=>{this.decodeDracoFile(s,t).catch(r)},i,r)}decodeDracoFile(e,t,i,r){const n={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i};return this.decodeGeometry(e,n).then(t)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Gs.has(e)){const l=Gs.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const n=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(n,s).then(l=>(r=l,new Promise((c,h)=>{r._callbacks[n]={resolve:c,reject:h},r.postMessage({type:"decode",id:n,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&n&&this._releaseTask(r,n)}),Gs.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Bt;e.index&&t.setIndex(new at(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const r=e.attributes[i],n=r.name,s=r.array,a=r.itemSize;t.setAttribute(n,new at(s,a))}return t}_loadLibrary(e,t){const i=new wn(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,n)=>{i.load(e,r,void 0,n)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const n=Mg.toString(),s=["/* draco decoder */",r,"","/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(n){const s=n.data;switch(s.type){case"decode":r._callbacks[s.id].resolve(s);break;case"error":r._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,n){return r._taskLoad>n._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Mg(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder,f=new u.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(u,d,f,c),m=g.attributes.map(p=>p.array.buffer);g.index&&m.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},m)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{u.destroy(f),u.destroy(d)}});break}};function t(s,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===s.TRIANGULAR_MESH)d=new s.Mesh,f=a.DecodeBufferToMesh(l,d);else if(g===s.POINT_CLOUD)d=new s.PointCloud,f=a.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const p in h){const _=self[u[p]];let S,x;if(c.useUniqueIDs)x=h[p],S=a.GetAttributeByUniqueId(d,x);else{if(x=a.GetAttributeId(d,s[h[p]]),x===-1)continue;S=a.GetAttribute(d,x)}m.attributes.push(r(s,a,d,p,_,S))}return g===s.TRIANGULAR_MESH&&(m.index=i(s,a,d)),s.destroy(d),m}function i(s,a,l){const c=l.num_faces()*3,h=c*4,u=s._malloc(h);a.GetTrianglesUInt32Array(l,h,u);const d=new Uint32Array(s.HEAPF32.buffer,u,c).slice();return s._free(u),{array:d,itemSize:1}}function r(s,a,l,c,h,u){const d=u.num_components(),f=l.num_points()*d,g=f*h.BYTES_PER_ELEMENT,m=n(s,h),p=s._malloc(g);a.GetAttributeDataArrayForAllPoints(l,u,m,g,p);const _=new h(s.HEAPF32.buffer,p,f).slice();return s._free(p),{name:c,array:_,itemSize:d}}function n(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}class bg{constructor(){q(this,"assetStore");q(this,"assetsToLoad");q(this,"addLoadedAsset");q(this,"gltfLoader");q(this,"textureLoader");this.assetStore=An.getState(),this.assetsToLoad=this.assetStore.assetsToLoad,this.addLoadedAsset=this.assetStore.addLoadedAsset,this.instantiateLoaders(),this.startLoading()}instantiateLoaders(){const e=new yg;e.setDecoderPath("/draco/"),this.gltfLoader=new Vf,this.gltfLoader.setDRACOLoader(e),this.textureLoader=new il}startLoading(){this.assetsToLoad.forEach(e=>{e.type==="texture"&&this.textureLoader.load(e.path,t=>{this.addLoadedAsset(t,e.id)}),e.type==="model"&&this.gltfLoader.load(e.path,t=>{this.addLoadedAsset(t,e.id)})})}}class Sg{constructor(){q(this,"assetStore");q(this,"overlay");q(this,"loading");q(this,"startButton");q(this,"numberOfLoadedAssets");q(this,"numberOfAssetsToLoad");q(this,"progress");this.assetStore=An,this.overlay=document.querySelector(".overlay"),this.loading=document.querySelector(".loading"),this.startButton=document.querySelector(".start"),this.assetStore.subscribe(e=>{var i;this.numberOfLoadedAssets=Object.keys(e.loadedAssets).length,this.numberOfAssetsToLoad=e.assetsToLoad.length,this.progress=this.numberOfLoadedAssets/this.numberOfAssetsToLoad,this.progress=Math.trunc(this.progress*100);const t=document.getElementById("progressPercentage");t&&(t.textContent=String(this.progress)),this.progress===100&&(Os.setState({assetsReady:!0}),(i=this.loading)==null||i.classList.add("fade"),window.setTimeout(()=>this.ready(),1200))})}ready(){var e,t,i;(e=this.loading)==null||e.remove(),this.startButton&&(this.startButton.style.display="inline"),(t=this.startButton)==null||t.classList.add("fadeIn"),(i=this.startButton)==null||i.addEventListener("click",()=>{var r,n;(r=this.overlay)==null||r.classList.add("fade"),(n=this.startButton)==null||n.classList.add("fadeOut"),window.setTimeout(()=>{var s,a;(s=this.overlay)==null||s.remove(),(a=this.startButton)==null||a.remove()},2e3)},{once:!0})}}class wg{constructor(){q(this,"keyPressed");this.startListening(),this.keyPressed={}}startListening(){window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("keyup",e=>this.onKeyUp(e))}onKeyDown(e){if(!this.keyPressed[e.code]){switch(e.code){case"KeyW":case"ArrowUp":It.setState({forward:!0});break;case"KeyA":case"ArrowLeft":It.setState({left:!0});break;case"KeyS":case"ArrowDown":It.setState({backward:!0});break;case"KeyD":case"ArrowRight":It.setState({right:!0});break}this.keyPressed[e.code]=!0}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":It.setState({forward:!1});break;case"KeyA":case"ArrowLeft":It.setState({left:!1});break;case"KeyS":case"ArrowDown":It.setState({backward:!1});break;case"KeyD":case"ArrowRight":It.setState({right:!1});break}this.keyPressed[e.code]=!1}}let Hs=null;class Gt{constructor(){q(this,"canvas");q(this,"scene");q(this,"assetLoader");q(this,"preloader");q(this,"inputController");q(this,"world");q(this,"camera");q(this,"renderer");q(this,"loop");q(this,"resize");q(this,"audio");if(Hs)return Hs;Hs=this;const e=document.querySelector("canvas.threejs");e&&(this.canvas=e),this.scene=new Om,this.scene.background=new Ee("lightblue"),window.modalManager=new pl,this.assetLoader=new bg,this.preloader=new Sg,this.inputController=new wg,this.world=new Gf,this.camera=new Tf,this.renderer=new Ef,document.addEventListener("click",async()=>{this.audio=new Audio,this.audio.src="/audio.mp3",this.audio.loop=!0,await this.audio.play()},{once:!0}),this.loop=new Af,this.resize=new Hf}}new Gt})();
