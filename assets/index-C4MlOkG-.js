var fc=Object.defineProperty;var uc=(i,t,e)=>t in i?fc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var b=(i,t,e)=>uc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="170",dc=0,zo=1,pc=2,gl=1,El=2,wn=3,pn=0,we=1,Rn=2,Gn=0,Qi=1,Xn=2,Oo=3,Vo=4,mc=5,si=100,xc=101,gc=102,Ec=103,Sc=104,yc=200,Mc=201,vc=202,_c=203,mr=204,xr=205,Bc=206,Hc=207,wc=208,Rc=209,bc=210,Ic=211,Tc=212,Dc=213,Cc=214,gr=0,Er=1,Sr=2,Ni=3,yr=4,Mr=5,vr=6,_r=7,Sl=0,kc=1,Uc=2,jn=0,Qc=1,Pc=2,Fc=3,yl=4,Nc=5,Lc=6,zc=7,Ml=300,Li=301,zi=302,Br=303,Hr=304,da=306,Tn=1e3,ri=1001,wr=1002,je=1003,Oc=1004,ws=1005,fn=1006,ya=1007,oi=1008,Dn=1009,vl=1010,_l=1011,ps=1012,ho=1013,Ai=1014,un=1015,ys=1016,fo=1017,uo=1018,Oi=1020,Bl=35902,Hl=1021,wl=1022,rn=1023,Rl=1024,bl=1025,Pi=1026,Vi=1027,po=1028,mo=1029,Il=1030,xo=1031,go=1033,sa=33776,aa=33777,ra=33778,oa=33779,Rr=35840,br=35841,Ir=35842,Tr=35843,Dr=36196,Cr=37492,kr=37496,Ur=37808,Qr=37809,Pr=37810,Fr=37811,Nr=37812,Lr=37813,zr=37814,Or=37815,Vr=37816,Gr=37817,jr=37818,Xr=37819,Yr=37820,Wr=37821,Aa=36492,Zr=36494,Kr=36495,Tl=36283,Jr=36284,qr=36285,$r=36286,Vc=3200,Gc=3201,Dl=0,jc=1,Vn="",Ae="srgb",Xi="srgb-linear",pa="linear",oe="srgb",pi=7680,Go=519,Xc=512,Yc=513,Wc=514,Cl=515,Zc=516,Kc=517,Jc=518,qc=519,jo=35044,Xo="300 es",bn=2e3,fa=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yo=1234567;const cs=Math.PI/180,Gi=180/Math.PI;function hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Eo(i,t){return(i%t+t)%t}function $c(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function th(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function eh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function nh(i,t=1){return t-Math.abs(Eo(i,t*2)-t)}function ih(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ah(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rh(i,t){return i+Math.random()*(t-i)}function oh(i){return i*(.5-Math.random())}function Ah(i){i!==void 0&&(Yo=i);let t=Yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lh(i){return i*cs}function ch(i){return i*Gi}function hh(i){return(i&i-1)===0&&i!==0}function fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dh(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),A=r(e/2),l=a((t+n)/2),c=r((t+n)/2),h=a((t-n)/2),f=r((t-n)/2),u=a((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(o*c,A*h,A*f,o*l);break;case"YZY":i.set(A*f,o*c,A*h,o*l);break;case"ZXZ":i.set(A*h,A*f,o*c,o*l);break;case"XZX":i.set(o*c,A*m,A*u,o*l);break;case"YXY":i.set(A*u,o*c,A*m,o*l);break;case"ZYZ":i.set(A*m,A*u,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wo={DEG2RAD:cs,RAD2DEG:Gi,generateUUID:hi,clamp:_e,euclideanModulo:Eo,mapLinear:$c,inverseLerp:th,lerp:hs,damp:eh,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:ah,randFloat:rh,randFloatSpread:oh,seededRandom:Ah,degToRad:lh,radToDeg:ch,isPowerOfTwo:hh,ceilPowerOfTwo:fh,floorPowerOfTwo:uh,setQuaternionFromProperEuler:dh,normalize:ke,denormalize:Di};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,a,r,o,A,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,A,l)}set(t,e,n,s,a,r,o,A,l){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=a,c[5]=A,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],A=n[6],l=n[1],c=n[4],h=n[7],f=n[2],u=n[5],m=n[8],x=s[0],p=s[3],d=s[6],B=s[1],M=s[4],E=s[7],Q=s[2],R=s[5],w=s[8];return a[0]=r*x+o*B+A*Q,a[3]=r*p+o*M+A*R,a[6]=r*d+o*E+A*w,a[1]=l*x+c*B+h*Q,a[4]=l*p+c*M+h*R,a[7]=l*d+c*E+h*w,a[2]=f*x+u*B+m*Q,a[5]=f*p+u*M+m*R,a[8]=f*d+u*E+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],A=t[6],l=t[7],c=t[8];return e*r*c-e*o*l-n*a*c+n*o*A+s*a*l-s*r*A}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],A=t[6],l=t[7],c=t[8],h=c*r-o*l,f=o*A-c*a,u=l*a-r*A,m=e*h+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=h*x,t[1]=(s*l-c*n)*x,t[2]=(o*n-s*r)*x,t[3]=f*x,t[4]=(c*e-s*A)*x,t[5]=(s*a-o*e)*x,t[6]=u*x,t[7]=(n*A-l*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const A=Math.cos(a),l=Math.sin(a);return this.set(n*A,n*l,-n*(A*r+l*o)+r+t,-s*l,s*A,-s*(-l*r+A*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Yt;function kl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ph(){const i=ms("canvas");return i.style.display="block",i}const Zo={};function as(i){i in Zo||(Zo[i]=!0,console.warn(i))}function mh(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function xh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ko=[.64,.33,.3,.6,.15,.06],Jo=[.2126,.7152,.0722],qo=[.3127,.329],$o=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tA=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Xi]:{primaries:Ko,whitePoint:qo,transfer:pa,toXYZ:$o,fromXYZ:tA,luminanceCoefficients:Jo,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:Ko,whitePoint:qo,transfer:oe,toXYZ:$o,fromXYZ:tA,luminanceCoefficients:Jo,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let mi;class Eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=ms("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=In(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class Ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(va(s[r].image)):a.push(va(s[r]))}else a=va(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Re extends Yi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=ri,s=ri,a=fn,r=oi,o=rn,A=Dn,l=Re.DEFAULT_ANISOTROPY,c=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=hi(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=A,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tn:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tn:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Ml;Re.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const A=t.elements,l=A[0],c=A[4],h=A[8],f=A[1],u=A[5],m=A[9],x=A[2],p=A[6],d=A[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,E=(u+1)/2,Q=(d+1)/2,R=(c+f)/4,w=(h+x)/4,D=(m+p)/4;return M>E&&M>Q?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=R/n,a=w/n):E>Q?E<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(E),n=R/s,a=D/s):Q<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(Q),n=w/a,s=D/a),this.set(n,s,a,e),this}let B=Math.sqrt((p-m)*(p-m)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(B)<.001&&(B=1),this.x=(p-m)/B,this.y=(h-x)/B,this.z=(f-c)/B,this.w=Math.acos((l+u+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mh extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Mh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ql extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let A=n[s+0],l=n[s+1],c=n[s+2],h=n[s+3];const f=a[r+0],u=a[r+1],m=a[r+2],x=a[r+3];if(o===0){t[e+0]=A,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=m,t[e+3]=x;return}if(h!==x||A!==f||l!==u||c!==m){let p=1-o;const d=A*f+l*u+c*m+h*x,B=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const Q=Math.sqrt(M),R=Math.atan2(Q,d*B);p=Math.sin(p*R)/Q,o=Math.sin(o*R)/Q}const E=o*B;if(A=A*p+f*E,l=l*p+u*E,c=c*p+m*E,h=h*p+x*E,p===1-o){const Q=1/Math.sqrt(A*A+l*l+c*c+h*h);A*=Q,l*=Q,c*=Q,h*=Q}}t[e]=A,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],A=n[s+1],l=n[s+2],c=n[s+3],h=a[r],f=a[r+1],u=a[r+2],m=a[r+3];return t[e]=o*m+c*h+A*u-l*f,t[e+1]=A*m+c*f+l*h-o*u,t[e+2]=l*m+c*u+o*f-A*h,t[e+3]=c*m-o*h-A*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,A=Math.sin,l=o(n/2),c=o(s/2),h=o(a/2),f=A(n/2),u=A(s/2),m=A(a/2);switch(r){case"XYZ":this._x=f*c*h+l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h-f*u*m;break;case"YXZ":this._x=f*c*h+l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h+f*u*m;break;case"ZXY":this._x=f*c*h-l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h-f*u*m;break;case"ZYX":this._x=f*c*h-l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h+f*u*m;break;case"YZX":this._x=f*c*h+l*u*m,this._y=l*u*h+f*c*m,this._z=l*c*m-f*u*h,this._w=l*c*h-f*u*m;break;case"XZY":this._x=f*c*h-l*u*m,this._y=l*u*h-f*c*m,this._z=l*c*m+f*u*h,this._w=l*c*h+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],A=e[9],l=e[2],c=e[6],h=e[10],f=n+o+h;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(c-A)*u,this._y=(a-l)*u,this._z=(r-s)*u}else if(n>o&&n>h){const u=2*Math.sqrt(1+n-o-h);this._w=(c-A)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(a+l)/u}else if(o>h){const u=2*Math.sqrt(1+o-n-h);this._w=(a-l)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(A+c)/u}else{const u=2*Math.sqrt(1+h-n-o);this._w=(r-s)/u,this._x=(a+l)/u,this._y=(A+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,A=e._y,l=e._z,c=e._w;return this._x=n*c+r*o+s*l-a*A,this._y=s*c+r*A+a*o-n*l,this._z=a*c+r*l+n*A-s*o,this._w=r*c-n*o-s*A-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const A=1-o*o;if(A<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*a+e*this._z,this.normalize(),this}const l=Math.sqrt(A),c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eA.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eA.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,A=t.w,l=2*(r*s-o*n),c=2*(o*e-a*s),h=2*(a*n-r*e);return this.x=e+A*l+r*h-o*c,this.y=n+A*c+o*l-a*h,this.z=s+A*h+a*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,A=e.z;return this.x=s*A-a*o,this.y=a*r-n*A,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new T,eA=new Ms;class fi{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,tn):tn.fromBufferAttribute(a,r),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),bs.subVectors(this.max,qi),xi.subVectors(t.a,qi),gi.subVectors(t.b,qi),Ei.subVectors(t.c,qi),Qn.subVectors(gi,xi),Pn.subVectors(Ei,gi),Zn.subVectors(xi,Ei);let e=[0,-Qn.z,Qn.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,Qn.z,0,-Qn.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-Qn.y,Qn.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!Ba(e,xi,gi,Ei,bs)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,xi,gi,Ei,bs))?!1:(Is.crossVectors(Qn,Pn),e=[Is.x,Is.y,Is.z],Ba(e,xi,gi,Ei,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new T,new T,new T,new T,new T,new T,new T,new T],tn=new T,Rs=new fi,xi=new T,gi=new T,Ei=new T,Qn=new T,Pn=new T,Zn=new T,qi=new T,bs=new T,Is=new T,Kn=new T;function Ba(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Kn.fromArray(i,a);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),A=t.dot(Kn),l=e.dot(Kn),c=n.dot(Kn);if(Math.max(-Math.max(A,l,c),Math.min(A,l,c))>o)return!1}return!0}const _h=new fi,$i=new T,Ha=new T;class ui{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_h.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Ha)),this.expandByPoint($i.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new T,wa=new T,Ts=new T,Fn=new T,Ra=new T,Ds=new T,ba=new T;class So{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wa.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(wa);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Ts),o=Fn.dot(this.direction),A=-Fn.dot(Ts),l=Fn.lengthSq(),c=Math.abs(1-r*r);let h,f,u,m;if(c>0)if(h=r*A-o,f=r*o-A,m=a*c,h>=0)if(f>=-m)if(f<=m){const x=1/c;h*=x,f*=x,u=h*(h+r*f+2*o)+f*(r*h+f+2*A)+l}else f=a,h=Math.max(0,-(r*f+o)),u=-h*h+f*(f+2*A)+l;else f=-a,h=Math.max(0,-(r*f+o)),u=-h*h+f*(f+2*A)+l;else f<=-m?(h=Math.max(0,-(-r*a+o)),f=h>0?-a:Math.min(Math.max(-a,-A),a),u=-h*h+f*(f+2*A)+l):f<=m?(h=0,f=Math.min(Math.max(-a,-A),a),u=f*(f+2*A)+l):(h=Math.max(0,-(r*a+o)),f=h>0?a:Math.min(Math.max(-a,-A),a),u=-h*h+f*(f+2*A)+l);else f=r>0?-a:a,h=Math.max(0,-(r*f+o)),u=-h*h+f*(f+2*A)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wa).addScaledVector(Ts,f),u}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,A=n+r;return A<0?null:o<0?this.at(A,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,A;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),c>=0?(a=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(a=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),h>=0?(o=(t.min.z-f.z)*h,A=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,A=(t.min.z-f.z)*h),n>A||o>s)||((o>n||n!==n)&&(n=o),(A<s||s!==s)&&(s=A),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,a){Ra.subVectors(e,t),Ds.subVectors(n,t),ba.crossVectors(Ra,Ds);let r=this.direction.dot(ba),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Fn.subVectors(this.origin,t);const A=o*this.direction.dot(Ds.crossVectors(Fn,Ds));if(A<0)return null;const l=o*this.direction.dot(Ra.cross(Fn));if(l<0||A+l>r)return null;const c=-o*Fn.dot(ba);return c<0?null:this.at(c/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,a,r,o,A,l,c,h,f,u,m,x,p){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,A,l,c,h,f,u,m,x,p)}set(t,e,n,s,a,r,o,A,l,c,h,f,u,m,x,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=A,d[2]=l,d[6]=c,d[10]=h,d[14]=f,d[3]=u,d[7]=m,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),a=1/Si.setFromMatrixColumn(t,1).length(),r=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),A=Math.cos(s),l=Math.sin(s),c=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const f=r*c,u=r*h,m=o*c,x=o*h;e[0]=A*c,e[4]=-A*h,e[8]=l,e[1]=u+m*l,e[5]=f-x*l,e[9]=-o*A,e[2]=x-f*l,e[6]=m+u*l,e[10]=r*A}else if(t.order==="YXZ"){const f=A*c,u=A*h,m=l*c,x=l*h;e[0]=f+x*o,e[4]=m*o-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-o,e[2]=u*o-m,e[6]=x+f*o,e[10]=r*A}else if(t.order==="ZXY"){const f=A*c,u=A*h,m=l*c,x=l*h;e[0]=f-x*o,e[4]=-r*h,e[8]=m+u*o,e[1]=u+m*o,e[5]=r*c,e[9]=x-f*o,e[2]=-r*l,e[6]=o,e[10]=r*A}else if(t.order==="ZYX"){const f=r*c,u=r*h,m=o*c,x=o*h;e[0]=A*c,e[4]=m*l-u,e[8]=f*l+x,e[1]=A*h,e[5]=x*l+f,e[9]=u*l-m,e[2]=-l,e[6]=o*A,e[10]=r*A}else if(t.order==="YZX"){const f=r*A,u=r*l,m=o*A,x=o*l;e[0]=A*c,e[4]=x-f*h,e[8]=m*h+u,e[1]=h,e[5]=r*c,e[9]=-o*c,e[2]=-l*c,e[6]=u*h+m,e[10]=f-x*h}else if(t.order==="XZY"){const f=r*A,u=r*l,m=o*A,x=o*l;e[0]=A*c,e[4]=-h,e[8]=l*c,e[1]=f*h+x,e[5]=r*c,e[9]=u*h-m,e[2]=m*h-u,e[6]=o*c,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bh,t,Hh)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Nn.crossVectors(n,ze),Nn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Nn.crossVectors(n,ze)),Nn.normalize(),Cs.crossVectors(ze,Nn),s[0]=Nn.x,s[4]=Cs.x,s[8]=ze.x,s[1]=Nn.y,s[5]=Cs.y,s[9]=ze.y,s[2]=Nn.z,s[6]=Cs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],A=n[8],l=n[12],c=n[1],h=n[5],f=n[9],u=n[13],m=n[2],x=n[6],p=n[10],d=n[14],B=n[3],M=n[7],E=n[11],Q=n[15],R=s[0],w=s[4],D=s[8],v=s[12],S=s[1],I=s[5],V=s[9],P=s[13],G=s[2],Y=s[6],j=s[10],W=s[14],F=s[3],at=s[7],ft=s[11],ut=s[15];return a[0]=r*R+o*S+A*G+l*F,a[4]=r*w+o*I+A*Y+l*at,a[8]=r*D+o*V+A*j+l*ft,a[12]=r*v+o*P+A*W+l*ut,a[1]=c*R+h*S+f*G+u*F,a[5]=c*w+h*I+f*Y+u*at,a[9]=c*D+h*V+f*j+u*ft,a[13]=c*v+h*P+f*W+u*ut,a[2]=m*R+x*S+p*G+d*F,a[6]=m*w+x*I+p*Y+d*at,a[10]=m*D+x*V+p*j+d*ft,a[14]=m*v+x*P+p*W+d*ut,a[3]=B*R+M*S+E*G+Q*F,a[7]=B*w+M*I+E*Y+Q*at,a[11]=B*D+M*V+E*j+Q*ft,a[15]=B*v+M*P+E*W+Q*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],A=t[9],l=t[13],c=t[2],h=t[6],f=t[10],u=t[14],m=t[3],x=t[7],p=t[11],d=t[15];return m*(+a*A*h-s*l*h-a*o*f+n*l*f+s*o*u-n*A*u)+x*(+e*A*u-e*l*f+a*r*f-s*r*u+s*l*c-a*A*c)+p*(+e*l*h-e*o*u-a*r*h+n*r*u+a*o*c-n*l*c)+d*(-s*o*c-e*A*h+e*o*f+s*r*h-n*r*f+n*A*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],A=t[6],l=t[7],c=t[8],h=t[9],f=t[10],u=t[11],m=t[12],x=t[13],p=t[14],d=t[15],B=h*p*l-x*f*l+x*A*u-o*p*u-h*A*d+o*f*d,M=m*f*l-c*p*l-m*A*u+r*p*u+c*A*d-r*f*d,E=c*x*l-m*h*l+m*o*u-r*x*u-c*o*d+r*h*d,Q=m*h*A-c*x*A-m*o*f+r*x*f+c*o*p-r*h*p,R=e*B+n*M+s*E+a*Q;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=B*w,t[1]=(x*f*a-h*p*a-x*s*u+n*p*u+h*s*d-n*f*d)*w,t[2]=(o*p*a-x*A*a+x*s*l-n*p*l-o*s*d+n*A*d)*w,t[3]=(h*A*a-o*f*a-h*s*l+n*f*l+o*s*u-n*A*u)*w,t[4]=M*w,t[5]=(c*p*a-m*f*a+m*s*u-e*p*u-c*s*d+e*f*d)*w,t[6]=(m*A*a-r*p*a-m*s*l+e*p*l+r*s*d-e*A*d)*w,t[7]=(r*f*a-c*A*a+c*s*l-e*f*l-r*s*u+e*A*u)*w,t[8]=E*w,t[9]=(m*h*a-c*x*a-m*n*u+e*x*u+c*n*d-e*h*d)*w,t[10]=(r*x*a-m*o*a+m*n*l-e*x*l-r*n*d+e*o*d)*w,t[11]=(c*o*a-r*h*a-c*n*l+e*h*l+r*n*u-e*o*u)*w,t[12]=Q*w,t[13]=(c*x*s-m*h*s+m*n*f-e*x*f-c*n*p+e*h*p)*w,t[14]=(m*o*s-r*x*s-m*n*A+e*x*A+r*n*p-e*o*p)*w,t[15]=(r*h*s-c*o*s+c*n*A-e*h*A-r*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,A=t.z,l=a*r,c=a*o;return this.set(l*r+n,l*o-s*A,l*A+s*o,0,l*o+s*A,c*o+n,c*A-s*r,0,l*A-s*o,c*A+s*r,a*A*A+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,A=e._w,l=a+a,c=r+r,h=o+o,f=a*l,u=a*c,m=a*h,x=r*c,p=r*h,d=o*h,B=A*l,M=A*c,E=A*h,Q=n.x,R=n.y,w=n.z;return s[0]=(1-(x+d))*Q,s[1]=(u+E)*Q,s[2]=(m-M)*Q,s[3]=0,s[4]=(u-E)*R,s[5]=(1-(f+d))*R,s[6]=(p+B)*R,s[7]=0,s[8]=(m+M)*w,s[9]=(p-B)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Si.set(s[0],s[1],s[2]).length();const r=Si.set(s[4],s[5],s[6]).length(),o=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const l=1/a,c=1/r,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=c,en.elements[5]*=c,en.elements[6]*=c,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,e.setFromRotationMatrix(en),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=bn){const A=this.elements,l=2*a/(e-t),c=2*a/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let u,m;if(o===bn)u=-(r+a)/(r-a),m=-2*r*a/(r-a);else if(o===fa)u=-r/(r-a),m=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return A[0]=l,A[4]=0,A[8]=h,A[12]=0,A[1]=0,A[5]=c,A[9]=f,A[13]=0,A[2]=0,A[6]=0,A[10]=u,A[14]=m,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=bn){const A=this.elements,l=1/(e-t),c=1/(n-s),h=1/(r-a),f=(e+t)*l,u=(n+s)*c;let m,x;if(o===bn)m=(r+a)*h,x=-2*h;else if(o===fa)m=a*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return A[0]=2*l,A[4]=0,A[8]=0,A[12]=-f,A[1]=0,A[5]=2*c,A[9]=0,A[13]=-u,A[2]=0,A[6]=0,A[10]=x,A[14]=-m,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new T,en=new re,Bh=new T(0,0,0),Hh=new T(1,1,1),Nn=new T,Cs=new T,ze=new T,nA=new re,iA=new Ms;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],A=s[1],l=s[5],c=s[9],h=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(A,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(A,a));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(A,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_e(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-_e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nA.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nA,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iA.setFromEuler(this),this.setFromQuaternion(iA,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wh=0;const sA=new T,yi=new Ms,Mn=new re,ks=new T,ts=new T,Rh=new T,bh=new Ms,aA=new T(1,0,0),rA=new T(0,1,0),oA=new T(0,0,1),AA={type:"added"},Ih={type:"removed"},Mi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class ge extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new T,e=new mn,n=new Ms,s=new T(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Yt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(aA,t)}rotateY(t){return this.rotateOnAxis(rA,t)}rotateZ(t){return this.rotateOnAxis(oA,t)}translateOnAxis(t,e){return sA.copy(t).applyQuaternion(this.quaternion),this.position.add(sA.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(aA,t)}translateY(t){return this.translateOnAxis(rA,t)}translateZ(t){return this.translateOnAxis(oA,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ts,ks,this.up):Mn.lookAt(ks,ts,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(AA),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ih),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(AA),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,A){return o[A.uuid]===void 0&&(o[A.uuid]=A.toJSON(t)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const A=o.shapes;if(Array.isArray(A))for(let l=0,c=A.length;l<c;l++){const h=A[l];a(t.shapes,h)}else a(t.shapes,A)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let A=0,l=this.material.length;A<l;A++)o.push(a(t.materials,this.material[A]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const A=this.animations[o];s.animations.push(a(t.animations,A))}}if(e){const o=r(t.geometries),A=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),f=r(t.skeletons),u=r(t.animations),m=r(t.nodes);o.length>0&&(n.geometries=o),A.length>0&&(n.materials=A),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(o){const A=[];for(const l in o){const c=o[l];delete c.metadata,A.push(c)}return A}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new T(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new T,vn=new T,Ta=new T,_n=new T,vi=new T,_i=new T,lA=new T,Da=new T,Ca=new T,ka=new T,Ua=new le,Qa=new le,Pa=new le;class an{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){nn.subVectors(s,e),vn.subVectors(n,e),Ta.subVectors(t,e);const r=nn.dot(nn),o=nn.dot(vn),A=nn.dot(Ta),l=vn.dot(vn),c=vn.dot(Ta),h=r*l-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,u=(l*A-o*c)*f,m=(r*c-o*A)*f;return a.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,a,r,o,A){return this.getBarycoord(t,e,n,s,_n)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(a,_n.x),A.addScaledVector(r,_n.y),A.addScaledVector(o,_n.z),A)}static getInterpolatedAttribute(t,e,n,s,a,r){return Ua.setScalar(0),Qa.setScalar(0),Pa.setScalar(0),Ua.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ua,a.x),r.addScaledVector(Qa,a.y),r.addScaledVector(Pa,a.z),r}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),vn.subVectors(t,e),nn.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;vi.subVectors(s,n),_i.subVectors(a,n),Da.subVectors(t,n);const A=vi.dot(Da),l=_i.dot(Da);if(A<=0&&l<=0)return e.copy(n);Ca.subVectors(t,s);const c=vi.dot(Ca),h=_i.dot(Ca);if(c>=0&&h<=c)return e.copy(s);const f=A*h-c*l;if(f<=0&&A>=0&&c<=0)return r=A/(A-c),e.copy(n).addScaledVector(vi,r);ka.subVectors(t,a);const u=vi.dot(ka),m=_i.dot(ka);if(m>=0&&u<=m)return e.copy(a);const x=u*l-A*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(_i,o);const p=c*m-u*h;if(p<=0&&h-c>=0&&u-m>=0)return lA.subVectors(a,s),o=(h-c)/(h-c+(u-m)),e.copy(s).addScaledVector(lA,o);const d=1/(p+x+f);return r=x*d,o=f*d,e.copy(n).addScaledVector(vi,r).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Eo(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Fa(r,a,t+1/3),this.g=Fa(r,a,t),this.b=Fa(r,a,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return te.fromWorkingColorSpace(Te.copy(this),t),Math.round(_e(Te.r*255,0,255))*65536+Math.round(_e(Te.g*255,0,255))*256+Math.round(_e(Te.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,a=Te.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let A,l;const c=(o+r)/2;if(o===r)A=0,l=0;else{const h=r-o;switch(l=c<=.5?h/(r+o):h/(2-r-o),r){case n:A=(s-a)/h+(s<a?6:0);break;case s:A=(a-n)/h+2;break;case a:A=(n-s)/h+4;break}A/=6}return t.h=A,t.s=l,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ae){te.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Us);const n=hs(Ln.h,Us.h,e),s=hs(Ln.s,Us.s,e),a=hs(Ln.l,Us.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ot;Ot.NAMES=Pl;let Th=0;class Wi extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=hi(),this.name="",this.blending=Qi,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=xr,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==xr&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const A=a[o];delete A.metadata,r.push(A)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Be extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new T,Qs=new ct;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),a=ke(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class Fl extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dh=0;const Ye=new re,Na=new ge,Bi=new T,Oe=new fi,es=new fi,ve=new T;class Ne extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kl(t)?Nl:Fl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Yt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Oe.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];es.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,es.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,es.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(es.min),Oe.expandByPoint(es.max))}Oe.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)ve.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],A=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)ve.fromBufferAttribute(o,l),A&&(Bi.fromBufferAttribute(t,l),ve.add(Bi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],A=[];for(let D=0;D<n.count;D++)o[D]=new T,A[D]=new T;const l=new T,c=new T,h=new T,f=new ct,u=new ct,m=new ct,x=new T,p=new T;function d(D,v,S){l.fromBufferAttribute(n,D),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),f.fromBufferAttribute(a,D),u.fromBufferAttribute(a,v),m.fromBufferAttribute(a,S),c.sub(l),h.sub(l),u.sub(f),m.sub(f);const I=1/(u.x*m.y-m.x*u.y);isFinite(I)&&(x.copy(c).multiplyScalar(m.y).addScaledVector(h,-u.y).multiplyScalar(I),p.copy(h).multiplyScalar(u.x).addScaledVector(c,-m.x).multiplyScalar(I),o[D].add(x),o[v].add(x),o[S].add(x),A[D].add(p),A[v].add(p),A[S].add(p))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let D=0,v=B.length;D<v;++D){const S=B[D],I=S.start,V=S.count;for(let P=I,G=I+V;P<G;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new T,E=new T,Q=new T,R=new T;function w(D){Q.fromBufferAttribute(s,D),R.copy(Q);const v=o[D];M.copy(v),M.sub(Q.multiplyScalar(Q.dot(v))).normalize(),E.crossVectors(R,v);const I=E.dot(A[D])<0?-1:1;r.setXYZW(D,M.x,M.y,M.z,I)}for(let D=0,v=B.length;D<v;++D){const S=B[D],I=S.start,V=S.count;for(let P=I,G=I+V;P<G;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new T,a=new T,r=new T,o=new T,A=new T,l=new T,c=new T,h=new T;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),c.subVectors(r,a),h.subVectors(s,a),c.cross(h),o.fromBufferAttribute(n,m),A.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(c),A.add(c),l.add(c),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,A.x,A.y,A.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,a),h.subVectors(s,a),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,A){const l=o.array,c=o.itemSize,h=o.normalized,f=new l.constructor(A.length*c);let u=0,m=0;for(let x=0,p=A.length;x<p;x++){o.isInterleavedBufferAttribute?u=A[x]*o.data.stride+o.offset:u=A[x]*c;for(let d=0;d<c;d++)f[m++]=l[u++]}return new Pe(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const A=s[o],l=t(A,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const A=[],l=a[o];for(let c=0,h=l.length;c<h;c++){const f=l[c],u=t(f,n);A.push(u)}e.morphAttributes[o]=A}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,A=r.length;o<A;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const A=this.parameters;for(const l in A)A[l]!==void 0&&(t[l]=A[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const A in n){const l=n[A];t.data.attributes[A]=l.toJSON(t.data)}const s={};let a=!1;for(const A in this.morphAttributes){const l=this.morphAttributes[A],c=[];for(let h=0,f=l.length;h<f;h++){const u=l[h];c.push(u.toJSON(t.data))}c.length>0&&(s[A]=c,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(e))}const a=t.morphAttributes;for(const l in a){const c=[],h=a[l];for(let f=0,u=h.length;f<u;f++)c.push(h[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,c=r.length;l<c;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const A=t.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cA=new re,Jn=new So,Ps=new ui,hA=new T,Fs=new T,Ns=new T,Ls=new T,La=new T,zs=new T,fA=new T,Os=new T;class rt extends ge{constructor(t=new Ne,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){zs.set(0,0,0);for(let A=0,l=a.length;A<l;A++){const c=o[A],h=a[A];c!==0&&(La.fromBufferAttribute(h,t),r?zs.addScaledVector(La,c):zs.addScaledVector(La.sub(e),c))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(a),Jn.copy(t.ray).recast(t.near),!(Ps.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ps,hA)===null||Jn.origin.distanceToSquared(hA)>(t.far-t.near)**2))&&(cA.copy(a).invert(),Jn.copy(t.ray).applyMatrix4(cA),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,A=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,f=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],B=Math.max(p.start,u.start),M=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let E=B,Q=M;E<Q;E+=3){const R=o.getX(E),w=o.getX(E+1),D=o.getX(E+2);s=Vs(this,d,t,n,l,c,h,R,w,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=m,d=x;p<d;p+=3){const B=o.getX(p),M=o.getX(p+1),E=o.getX(p+2);s=Vs(this,r,t,n,l,c,h,B,M,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(A!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],B=Math.max(p.start,u.start),M=Math.min(A.count,Math.min(p.start+p.count,u.start+u.count));for(let E=B,Q=M;E<Q;E+=3){const R=E,w=E+1,D=E+2;s=Vs(this,d,t,n,l,c,h,R,w,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(A.count,u.start+u.count);for(let p=m,d=x;p<d;p+=3){const B=p,M=p+1,E=p+2;s=Vs(this,r,t,n,l,c,h,B,M,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ch(i,t,e,n,s,a,r,o){let A;if(t.side===we?A=n.intersectTriangle(r,a,s,!0,o):A=n.intersectTriangle(s,a,r,t.side===pn,o),A===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Os);return l<e.near||l>e.far?null:{distance:l,point:Os.clone(),object:i}}function Vs(i,t,e,n,s,a,r,o,A,l){i.getVertexPosition(o,Fs),i.getVertexPosition(A,Ns),i.getVertexPosition(l,Ls);const c=Ch(i,t,e,n,Fs,Ns,Ls,fA);if(c){const h=new T;an.getBarycoord(fA,Fs,Ns,Ls,h),s&&(c.uv=an.getInterpolatedAttribute(s,o,A,l,h,new ct)),a&&(c.uv1=an.getInterpolatedAttribute(a,o,A,l,h,new ct)),r&&(c.normal=an.getInterpolatedAttribute(r,o,A,l,h,new T),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:A,c:l,normal:new T,materialIndex:0};an.getNormal(Fs,Ns,Ls,f.normal),c.face=f,c.barycoord=h}return c}class Qt extends Ne{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const A=[],l=[],c=[],h=[];let f=0,u=0;m("z","y","x",-1,-1,n,e,t,r,a,0),m("z","y","x",1,-1,n,e,-t,r,a,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,a,4),m("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(A),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2));function m(x,p,d,B,M,E,Q,R,w,D,v){const S=E/w,I=Q/D,V=E/2,P=Q/2,G=R/2,Y=w+1,j=D+1;let W=0,F=0;const at=new T;for(let ft=0;ft<j;ft++){const ut=ft*I-P;for(let Ut=0;Ut<Y;Ut++){const Jt=Ut*S-V;at[x]=Jt*B,at[p]=ut*M,at[d]=G,l.push(at.x,at.y,at.z),at[x]=0,at[p]=0,at[d]=R>0?1:-1,c.push(at.x,at.y,at.z),h.push(Ut/w),h.push(1-ft/D),W+=1}}for(let ft=0;ft<D;ft++)for(let ut=0;ut<w;ut++){const Ut=f+ut+Y*ft,Jt=f+ut+Y*(ft+1),L=f+(ut+1)+Y*(ft+1),q=f+(ut+1)+Y*ft;A.push(Ut,Jt,q),A.push(Jt,L,q),F+=6}o.addGroup(u,F,v),u+=F,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function kh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Uh={clone:ji,merge:Ue};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new T,uA=new ct,dA=new ct;class De extends zl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,uA,dA),e.subVectors(dA,uA)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const A=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/A,e-=r.offsetY*n/l,s*=r.width/A,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,wi=1;class Fh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new De(Hi,wi,t,e);s.layers=this.layers,this.add(s);const a=new De(Hi,wi,t,e);a.layers=this.layers,this.add(a);const r=new De(Hi,wi,t,e);r.layers=this.layers,this.add(r);const o=new De(Hi,wi,t,e);o.layers=this.layers,this.add(o);const A=new De(Hi,wi,t,e);A.layers=this.layers,this.add(A);const l=new De(Hi,wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,A]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,A,l,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,A),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(h,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ol extends Re{constructor(t,e,n,s,a,r,o,A,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,a,r,o,A,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nh extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),a=new Cn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Gn});a.uniforms.tEquirect.value=e;const r=new rt(s,a),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=fn),new Fh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const za=new T,Lh=new T,zh=new Yt;class ni{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=za.subVectors(n,e).cross(Lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ui,Gs=new T;class Mo{constructor(t=new ni,e=new ni,n=new ni,s=new ni,a=new ni,r=new ni){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],A=s[3],l=s[4],c=s[5],h=s[6],f=s[7],u=s[8],m=s[9],x=s[10],p=s[11],d=s[12],B=s[13],M=s[14],E=s[15];if(n[0].setComponents(A-a,f-l,p-u,E-d).normalize(),n[1].setComponents(A+a,f+l,p+u,E+d).normalize(),n[2].setComponents(A+r,f+c,p+m,E+B).normalize(),n[3].setComponents(A-r,f-c,p-m,E-B).normalize(),n[4].setComponents(A-o,f-h,p-x,E-M).normalize(),e===bn)n[5].setComponents(A+o,f+h,p+x,E+M).normalize();else if(e===fa)n[5].setComponents(o,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Oh(i){const t=new WeakMap;function e(o,A){const l=o.array,c=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(A,f),i.bufferData(A,l,c),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,A,l){const c=A.array,h=A.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,c);else{h.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<h.length;u++){const m=h[f],x=h[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let u=0,m=h.length;u<m;u++){const x=h[u];i.bufferSubData(l,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}A.clearUpdateRanges()}A.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const A=t.get(o);A&&(i.deleteBuffer(A.buffer),t.delete(o))}function r(o,A){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,A));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,A),l.version=o.version}}return{get:s,remove:a,update:r}}class pe extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),A=Math.floor(s),l=o+1,c=A+1,h=t/o,f=e/A,u=[],m=[],x=[],p=[];for(let d=0;d<c;d++){const B=d*f-r;for(let M=0;M<l;M++){const E=M*h-a;m.push(E,-B,0),x.push(0,0,1),p.push(M/o),p.push(1-d/A)}}for(let d=0;d<A;d++)for(let B=0;B<o;B++){const M=B+l*d,E=B+l*(d+1),Q=B+1+l*(d+1),R=B+1+l*d;u.push(M,E,R),u.push(E,Q,R)}this.setIndex(u),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,au=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ru=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Du=`#ifdef USE_SKINNING
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
#endif`,Cu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ju=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,qu=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ad=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fd=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,md=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Vh,alphahash_pars_fragment:Gh,alphamap_fragment:jh,alphamap_pars_fragment:Xh,alphatest_fragment:Yh,alphatest_pars_fragment:Wh,aomap_fragment:Zh,aomap_pars_fragment:Kh,batching_pars_vertex:Jh,batching_vertex:qh,begin_vertex:$h,beginnormal_vertex:tf,bsdfs:ef,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:af,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:of,clipping_planes_vertex:Af,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:ff,common:uf,cube_uv_reflection_fragment:df,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:xf,emissivemap_fragment:gf,emissivemap_pars_fragment:Ef,colorspace_fragment:Sf,colorspace_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:vf,envmap_pars_fragment:_f,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Qf,envmap_vertex:Hf,fog_vertex:wf,fog_pars_vertex:Rf,fog_fragment:bf,fog_pars_fragment:If,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Df,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:kf,lights_pars_begin:Uf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Nf,lights_phong_pars_fragment:Lf,lights_physical_fragment:zf,lights_physical_pars_fragment:Of,lights_fragment_begin:Vf,lights_fragment_maps:Gf,lights_fragment_end:jf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Zf,map_fragment:Kf,map_pars_fragment:Jf,map_particle_fragment:qf,map_particle_pars_fragment:$f,metalnessmap_fragment:tu,metalnessmap_pars_fragment:eu,morphinstance_vertex:nu,morphcolor_vertex:iu,morphnormal_vertex:su,morphtarget_pars_vertex:au,morphtarget_vertex:ru,normal_fragment_begin:ou,normal_fragment_maps:Au,normal_pars_fragment:lu,normal_pars_vertex:cu,normal_vertex:hu,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:pu,iridescence_pars_fragment:mu,opaque_fragment:xu,packing:gu,premultiplied_alpha_fragment:Eu,project_vertex:Su,dithering_fragment:yu,dithering_pars_fragment:Mu,roughnessmap_fragment:vu,roughnessmap_pars_fragment:_u,shadowmap_pars_fragment:Bu,shadowmap_pars_vertex:Hu,shadowmap_vertex:wu,shadowmask_pars_fragment:Ru,skinbase_vertex:bu,skinning_pars_vertex:Iu,skinning_vertex:Tu,skinnormal_vertex:Du,specularmap_fragment:Cu,specularmap_pars_fragment:ku,tonemapping_fragment:Uu,tonemapping_pars_fragment:Qu,transmission_fragment:Pu,transmission_pars_fragment:Fu,uv_pars_fragment:Nu,uv_pars_vertex:Lu,uv_vertex:zu,worldpos_vertex:Ou,background_vert:Vu,background_frag:Gu,backgroundCube_vert:ju,backgroundCube_frag:Xu,cube_vert:Yu,cube_frag:Wu,depth_vert:Zu,depth_frag:Ku,distanceRGBA_vert:Ju,distanceRGBA_frag:qu,equirect_vert:$u,equirect_frag:td,linedashed_vert:ed,linedashed_frag:nd,meshbasic_vert:id,meshbasic_frag:sd,meshlambert_vert:ad,meshlambert_frag:rd,meshmatcap_vert:od,meshmatcap_frag:Ad,meshnormal_vert:ld,meshnormal_frag:cd,meshphong_vert:hd,meshphong_frag:fd,meshphysical_vert:ud,meshphysical_frag:dd,meshtoon_vert:pd,meshtoon_frag:md,points_vert:xd,points_frag:gd,shadow_vert:Ed,shadow_frag:Sd,sprite_vert:yd,sprite_frag:Md},pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},hn={basic:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ue([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ue([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ue([pt.points,pt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ue([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ue([pt.common,pt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ue([pt.sprite,pt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ue([pt.common,pt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ue([pt.lights,pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};hn.physical={uniforms:Ue([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const js={r:0,b:0,g:0},$n=new mn,vd=new re;function _d(i,t,e,n,s,a,r){const o=new Ot(0);let A=a===!0?0:1,l,c,h=null,f=0,u=null;function m(B){let M=B.isScene===!0?B.background:null;return M&&M.isTexture&&(M=(B.backgroundBlurriness>0?e:t).get(M)),M}function x(B){let M=!1;const E=m(B);E===null?d(o,A):E&&E.isColor&&(d(E,1),M=!0);const Q=i.xr.getEnvironmentBlendMode();Q==="additive"?n.buffers.color.setClear(0,0,0,1,r):Q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(B,M){const E=m(M);E&&(E.isCubeTexture||E.mapping===da)?(c===void 0&&(c=new rt(new Qt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ji(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(Q,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),$n.copy(M.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vd.makeRotationFromEuler($n)),c.material.toneMapped=te.getTransfer(E.colorSpace)!==oe,(h!==E||f!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,u=i.toneMapping),c.layers.enableAll(),B.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new rt(new pe(2,2),new Cn({name:"BackgroundMaterial",uniforms:ji(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=te.getTransfer(E.colorSpace)!==oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,u=i.toneMapping),l.layers.enableAll(),B.unshift(l,l.geometry,l.material,0,0,null))}function d(B,M){B.getRGB(js,Ll(i)),n.buffers.color.setClear(js.r,js.g,js.b,M,r)}return{getClearColor:function(){return o},setClearColor:function(B,M=1){o.set(B),A=M,d(o,A)},getClearAlpha:function(){return A},setClearAlpha:function(B){A=B,d(o,A)},render:x,addToRenderList:p}}function Bd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let a=s,r=!1;function o(S,I,V,P,G){let Y=!1;const j=h(P,V,I);a!==j&&(a=j,l(a.object)),Y=u(S,P,V,G),Y&&m(S,P,V,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,E(S,I,V,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function A(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function c(S){return i.deleteVertexArray(S)}function h(S,I,V){const P=V.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let Y=G[I.id];Y===void 0&&(Y={},G[I.id]=Y);let j=Y[P];return j===void 0&&(j=f(A()),Y[P]=j),j}function f(S){const I=[],V=[],P=[];for(let G=0;G<e;G++)I[G]=0,V[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:P,object:S,attributes:{},index:null}}function u(S,I,V,P){const G=a.attributes,Y=I.attributes;let j=0;const W=V.getAttributes();for(const F in W)if(W[F].location>=0){const ft=G[F];let ut=Y[F];if(ut===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ft===void 0||ft.attribute!==ut||ut&&ft.data!==ut.data)return!0;j++}return a.attributesNum!==j||a.index!==P}function m(S,I,V,P){const G={},Y=I.attributes;let j=0;const W=V.getAttributes();for(const F in W)if(W[F].location>=0){let ft=Y[F];ft===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));const ut={};ut.attribute=ft,ft&&ft.data&&(ut.data=ft.data),G[F]=ut,j++}a.attributes=G,a.attributesNum=j,a.index=P}function x(){const S=a.newAttributes;for(let I=0,V=S.length;I<V;I++)S[I]=0}function p(S){d(S,0)}function d(S,I){const V=a.newAttributes,P=a.enabledAttributes,G=a.attributeDivisors;V[S]=1,P[S]===0&&(i.enableVertexAttribArray(S),P[S]=1),G[S]!==I&&(i.vertexAttribDivisor(S,I),G[S]=I)}function B(){const S=a.newAttributes,I=a.enabledAttributes;for(let V=0,P=I.length;V<P;V++)I[V]!==S[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function M(S,I,V,P,G,Y,j){j===!0?i.vertexAttribIPointer(S,I,V,G,Y):i.vertexAttribPointer(S,I,V,P,G,Y)}function E(S,I,V,P){x();const G=P.attributes,Y=V.getAttributes(),j=I.defaultAttributeValues;for(const W in Y){const F=Y[W];if(F.location>=0){let at=G[W];if(at===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const ft=at.normalized,ut=at.itemSize,Ut=t.get(at);if(Ut===void 0)continue;const Jt=Ut.buffer,L=Ut.type,q=Ut.bytesPerElement,dt=L===i.INT||L===i.UNSIGNED_INT||at.gpuType===ho;if(at.isInterleavedBufferAttribute){const tt=at.data,gt=tt.stride,Ft=at.offset;if(tt.isInstancedInterleavedBuffer){for(let it=0;it<F.locationSize;it++)d(F.location+it,tt.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let it=0;it<F.locationSize;it++)p(F.location+it);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let it=0;it<F.locationSize;it++)M(F.location+it,ut/F.locationSize,L,ft,gt*q,(Ft+ut/F.locationSize*it)*q,dt)}else{if(at.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)d(F.location+tt,at.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let tt=0;tt<F.locationSize;tt++)p(F.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let tt=0;tt<F.locationSize;tt++)M(F.location+tt,ut/F.locationSize,L,ft,ut*q,ut/F.locationSize*tt*q,dt)}}else if(j!==void 0){const ft=j[W];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(F.location,ft);break;case 3:i.vertexAttrib3fv(F.location,ft);break;case 4:i.vertexAttrib4fv(F.location,ft);break;default:i.vertexAttrib1fv(F.location,ft)}}}}B()}function Q(){D();for(const S in n){const I=n[S];for(const V in I){const P=I[V];for(const G in P)c(P[G].object),delete P[G];delete I[V]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const V in I){const P=I[V];for(const G in P)c(P[G].object),delete P[G];delete I[V]}delete n[S.id]}function w(S){for(const I in n){const V=n[I];if(V[S.id]===void 0)continue;const P=V[S.id];for(const G in P)c(P[G].object),delete P[G];delete V[S.id]}}function D(){v(),r=!0,a!==s&&(a=s,l(a.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:v,dispose:Q,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:B}}function Hd(i,t,e){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}function A(l,c,h,f){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)r(l[m],c[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=c[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=A}function wd(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==un&&!D)}function A(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=A(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Q=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:A,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:B,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:Q,maxSamples:R}}function Rd(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new ni,o=new Yt,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const u=h.length!==0||f||n!==0||s;return s=f,n=h.length,u},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,u){const m=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||a&&!p)a?c(null):l();else{const B=a?0:n,M=B*4;let E=d.clippingState||null;A.value=E,E=c(m,f,M,u);for(let Q=0;Q!==M;++Q)E[Q]=e[Q];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=B}};function l(){A.value!==e&&(A.value=e,A.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,f,u,m){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=A.value,m!==!0||p===null){const d=u+x*4,B=f.matrixWorldInverse;o.getNormalMatrix(B),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,E=u;M!==x;++M,E+=4)r.copy(h[M]).applyMatrix4(B,o),r.normal.toArray(p,E),p[E+3]=r.constant}A.value=p,A.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function bd(i){let t=new WeakMap;function e(r,o){return o===Br?r.mapping=Li:o===Hr&&(r.mapping=zi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Br||o===Hr)if(t.has(r)){const A=t.get(r).texture;return e(A,r.mapping)}else{const A=r.image;if(A&&A.height>0){const l=new Nh(A.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const A=t.get(o);A!==void 0&&(t.delete(o),A.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Gl extends zl{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,A=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=c*this.view.offsetY,A=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,A,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ci=4,pA=[.125,.215,.35,.446,.526,.582],ai=20,Oa=new Gl,mA=new Ot;let Va=null,Ga=0,ja=0,Xa=!1;const ii=(1+Math.sqrt(5))/2,Ri=1/ii,xA=[new T(-ii,Ri,0),new T(ii,Ri,0),new T(-Ri,0,ii),new T(Ri,0,ii),new T(0,ii,-Ri),new T(0,ii,Ri),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class xs{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=SA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=EA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ga,ja),this._renderer.xr.enabled=Xa,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ys,format:rn,colorSpace:Xi,depthBuffer:!1},s=gA(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gA(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(a)),this._blurMaterial=Td(a,t,e)}return s}_compileMaterial(t){const e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){const o=new De(90,1,e,n),A=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(mA),c.toneMapping=jn,c.autoClear=!1;const u=new Be({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),m=new rt(new Qt,u);let x=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,x=!0):(u.color.copy(mA),x=!0);for(let d=0;d<6;d++){const B=d%3;B===0?(o.up.set(0,A[d],0),o.lookAt(l[d],0,0)):B===1?(o.up.set(0,0,A[d]),o.lookAt(0,l[d],0)):(o.up.set(0,A[d],0),o.lookAt(0,0,l[d]));const M=this._cubeSize;Xs(s,B*M,d>2?M:0,M,M),c.setRenderTarget(s),x&&c.render(m,o),c.render(t,o)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=SA()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=EA());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new rt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const A=this._cubeSize;Xs(e,0,0,3*A,2*A),n.setRenderTarget(e),n.render(r,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=xA[(s-a-1)%xA.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const A=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new rt(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*ai-1),x=a/m,p=isFinite(a)?1+Math.floor(c*x):ai;p>ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const d=[];let B=0;for(let w=0;w<ai;++w){const D=w/x,v=Math.exp(-D*D/2);d.push(v),w===0?B+=v:w<p&&(B+=2*v)}for(let w=0;w<d.length;w++)d[w]=d[w]/B;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const E=this._sizeLods[s],Q=3*E*(s>M-Ci?s-M+Ci:0),R=4*(this._cubeSize-E);Xs(e,Q,R,3*E,2*E),A.setRenderTarget(e),A.render(h,Oa)}}function Id(i){const t=[],e=[],n=[];let s=i;const a=i-Ci+1+pA.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let A=1/o;r>i-Ci?A=pA[r-i+Ci-1]:r===0&&(A=0),n.push(A);const l=1/(o-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],u=6,m=6,x=3,p=2,d=1,B=new Float32Array(x*m*u),M=new Float32Array(p*m*u),E=new Float32Array(d*m*u);for(let R=0;R<u;R++){const w=R%3*2/3-1,D=R>2?0:-1,v=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];B.set(v,x*m*R),M.set(f,p*m*R);const S=[R,R,R,R,R,R];E.set(S,d*m*R)}const Q=new Ne;Q.setAttribute("position",new Pe(B,x)),Q.setAttribute("uv",new Pe(M,p)),Q.setAttribute("faceIndex",new Pe(E,d)),t.push(Q),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gA(i,t,e){const n=new li(i,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Td(i,t,e){const n=new Float32Array(ai),s=new T(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function EA(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function SA(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function Dd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const A=o.mapping,l=A===Br||A===Hr,c=A===Li||A===zi;if(l||c){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new xs(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const u=o.image;return l&&u&&u.height>0||c&&u&&s(u)?(e===null&&(e=new xs(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function s(o){let A=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&A++;return A===l}function a(o){const A=o.target;A.removeEventListener("dispose",a);const l=t.get(A);l!==void 0&&(t.delete(A),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Cd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kd(i,t,e,n){const s={},a=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const x=f.morphAttributes[m];for(let p=0,d=x.length;p<d;p++)t.remove(x[p])}f.removeEventListener("dispose",r),delete s[f.id];const u=a.get(f);u&&(t.remove(u),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function A(h){const f=h.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const u=h.morphAttributes;for(const m in u){const x=u[m];for(let p=0,d=x.length;p<d;p++)t.update(x[p],i.ARRAY_BUFFER)}}function l(h){const f=[],u=h.index,m=h.attributes.position;let x=0;if(u!==null){const B=u.array;x=u.version;for(let M=0,E=B.length;M<E;M+=3){const Q=B[M+0],R=B[M+1],w=B[M+2];f.push(Q,R,R,w,w,Q)}}else if(m!==void 0){const B=m.array;x=m.version;for(let M=0,E=B.length/3-1;M<E;M+=3){const Q=M+0,R=M+1,w=M+2;f.push(Q,R,R,w,w,Q)}}else return;const p=new(kl(f)?Nl:Fl)(f,1);p.version=x;const d=a.get(h);d&&t.remove(d),a.set(h,p)}function c(h){const f=a.get(h);if(f){const u=h.index;u!==null&&f.version<u.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:A,getWireframeAttribute:c}}function Ud(i,t,e){let n;function s(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function A(f,u){i.drawElements(n,u,a,f*r),e.update(u,n,1)}function l(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,a,f*r,m),e.update(u,n,m))}function c(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,m);let p=0;for(let d=0;d<m;d++)p+=u[d];e.update(p,n,1)}function h(f,u,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/r,u[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,a,f,0,x,0,m);let d=0;for(let B=0;B<m;B++)d+=u[B]*x[B];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=A,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Qd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pd(i,t,e){const n=new WeakMap,s=new le;function a(r,o,A){const l=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var u=S;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],B=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let Q=o.attributes.position.count*E,R=1;Q>t.maxTextureSize&&(R=Math.ceil(Q/t.maxTextureSize),Q=t.maxTextureSize);const w=new Float32Array(Q*R*4*h),D=new Ql(w,Q,R,h);D.type=un,D.needsUpdate=!0;const v=E*4;for(let I=0;I<h;I++){const V=d[I],P=B[I],G=M[I],Y=Q*R*4*I;for(let j=0;j<V.count;j++){const W=j*v;m===!0&&(s.fromBufferAttribute(V,j),w[Y+W+0]=s.x,w[Y+W+1]=s.y,w[Y+W+2]=s.z,w[Y+W+3]=0),x===!0&&(s.fromBufferAttribute(P,j),w[Y+W+4]=s.x,w[Y+W+5]=s.y,w[Y+W+6]=s.z,w[Y+W+7]=0),p===!0&&(s.fromBufferAttribute(G,j),w[Y+W+8]=s.x,w[Y+W+9]=s.y,w[Y+W+10]=s.z,w[Y+W+11]=G.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new ct(Q,R)},n.set(o,f),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)A.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const x=o.morphTargetsRelative?1:1-m;A.getUniforms().setValue(i,"morphTargetBaseInfluence",x),A.getUniforms().setValue(i,"morphTargetInfluences",l)}A.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),A.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Fd(i,t,e,n){let s=new WeakMap;function a(A){const l=n.render.frame,c=A.geometry,h=t.get(A,c);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),A.isInstancedMesh&&(A.hasEventListener("dispose",o)===!1&&A.addEventListener("dispose",o),s.get(A)!==l&&(e.update(A.instanceMatrix,i.ARRAY_BUFFER),A.instanceColor!==null&&e.update(A.instanceColor,i.ARRAY_BUFFER),s.set(A,l))),A.isSkinnedMesh){const f=A.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function r(){s=new WeakMap}function o(A){const l=A.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class jl extends Re{constructor(t,e,n,s,a,r,o,A,l,c=Pi){if(c!==Pi&&c!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Pi&&(n=Ai),n===void 0&&c===Vi&&(n=Oi),super(null,s,a,r,o,A,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=A!==void 0?A:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xl=new Re,yA=new jl(1,1),Yl=new Ql,Wl=new vh,Zl=new Ol,MA=[],vA=[],_A=new Float32Array(16),BA=new Float32Array(9),HA=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=MA[s];if(a===void 0&&(a=new Float32Array(s),MA[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=vA[t];e===void 0&&(e=new Int32Array(t),vA[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;HA.set(n),i.uniformMatrix2fv(this.addr,!1,HA),Me(e,n)}}function Gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;BA.set(n),i.uniformMatrix3fv(this.addr,!1,BA),Me(e,n)}}function jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;_A.set(n),i.uniformMatrix4fv(this.addr,!1,_A),Me(e,n)}}function Xd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(yA.compareFunction=Cl,a=yA):a=Xl,e.setTexture2D(t||a,s)}function ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wl,s)}function np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zl,s)}function ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yl,s)}function sp(i){switch(i){case 5126:return Nd;case 35664:return Ld;case 35665:return zd;case 35666:return Od;case 35674:return Vd;case 35675:return Gd;case 35676:return jd;case 5124:case 35670:return Xd;case 35667:case 35671:return Yd;case 35668:case 35672:return Wd;case 35669:case 35673:return Zd;case 5125:return Kd;case 36294:return Jd;case 36295:return qd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function ap(i,t){i.uniform1fv(this.addr,t)}function rp(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function op(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ap(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function lp(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cp(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hp(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fp(i,t){i.uniform1iv(this.addr,t)}function up(i,t){i.uniform2iv(this.addr,t)}function dp(i,t){i.uniform3iv(this.addr,t)}function pp(i,t){i.uniform4iv(this.addr,t)}function mp(i,t){i.uniform1uiv(this.addr,t)}function xp(i,t){i.uniform2uiv(this.addr,t)}function gp(i,t){i.uniform3uiv(this.addr,t)}function Ep(i,t){i.uniform4uiv(this.addr,t)}function Sp(i,t,e){const n=this.cache,s=t.length,a=ma(e,s);ye(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Xl,a[r])}function yp(i,t,e){const n=this.cache,s=t.length,a=ma(e,s);ye(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Wl,a[r])}function Mp(i,t,e){const n=this.cache,s=t.length,a=ma(e,s);ye(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Zl,a[r])}function vp(i,t,e){const n=this.cache,s=t.length,a=ma(e,s);ye(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Yl,a[r])}function _p(i){switch(i){case 5126:return ap;case 35664:return rp;case 35665:return op;case 35666:return Ap;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return fp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return xp;case 36295:return gp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return vp}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sp(e.type)}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_p(e.type)}}class wp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function wA(i,t){i.seq.push(t),i.map[t.id]=t}function Rp(i,t,e){const n=i.name,s=n.length;for(Ya.lastIndex=0;;){const a=Ya.exec(n),r=Ya.lastIndex;let o=a[1];const A=a[2]==="]",l=a[3];if(A&&(o=o|0),l===void 0||l==="["&&r+2===s){wA(e,l===void 0?new Bp(o,i,t):new Hp(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new wp(o),wA(e,h)),e=h}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);Rp(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],A=n[o.id];A.needsUpdate!==!1&&o.setValue(t,A.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function RA(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bp=37297;let Ip=0;function Tp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const bA=new Yt;function Dp(i){te._getMatrix(bA,te.workingColorSpace,i);const t=`mat3( ${bA.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case pa:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function IA(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Tp(i.getShaderSource(t),r)}else return s}function Cp(i,t){const e=Dp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kp(i,t){let e;switch(t){case Qc:e="Linear";break;case Pc:e="Reinhard";break;case Fc:e="Cineon";break;case yl:e="ACESFilmic";break;case Lc:e="AgX";break;case zc:e="Neutral";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new T;function Up(){te.getLuminanceCoefficients(Ys);const i=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function Pp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function rs(i){return i!==""}function TA(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function DA(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(Np,zp)}const Lp=new Map;function zp(i,t){let e=Zt[t];if(e===void 0){const n=Lp.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function CA(i){return i.replace(Op,Vp)}function Vp(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function kA(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function jp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case zi:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Yp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sl:t="ENVMAP_BLENDING_MULTIPLY";break;case kc:t="ENVMAP_BLENDING_MIX";break;case Uc:t="ENVMAP_BLENDING_ADD";break}return t}function Wp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zp(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const A=Gp(e),l=jp(e),c=Xp(e),h=Yp(e),f=Wp(e),u=Qp(e),m=Pp(a),x=s.createProgram();let p,d,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rs).join(`
`),d.length>0&&(d+=`
`)):(p=[kA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+A:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),d=[kA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+A:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==jn?kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Cp("linearToOutputTexel",e.outputColorSpace),Up(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),r=to(r),r=TA(r,e),r=DA(r,e),o=to(o),o=TA(o,e),o=DA(o,e),r=CA(r),o=CA(o),e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=B+p+r,E=B+d+o,Q=RA(s,s.VERTEX_SHADER,M),R=RA(s,s.FRAGMENT_SHADER,E);s.attachShader(x,Q),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(Q).trim(),G=s.getShaderInfoLog(R).trim();let Y=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,Q,R);else{const W=IA(s,Q,"vertex"),F=IA(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+W+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(P===""||G==="")&&(j=!1);j&&(I.diagnostics={runnable:Y,programLog:V,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:d}})}s.deleteShader(Q),s.deleteShader(R),D=new la(s,x),v=Fp(s,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,bp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=Q,this.fragmentShader=R,this}let Kp=0;class Jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qp(t),e.set(t,n)),n}}class qp{constructor(t){this.id=Kp++,this.code=t,this.usedTimes=0}}function $p(i,t,e,n,s,a,r){const o=new yo,A=new Jp,l=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,I,V,P){const G=V.fog,Y=P.geometry,j=v.isMeshStandardMaterial?V.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||j),F=W&&W.mapping===da?W.image.height:null,at=m[v.type];v.precision!==null&&(u=s.getMaxPrecision(v.precision),u!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=ft!==void 0?ft.length:0;let Ut=0;Y.morphAttributes.position!==void 0&&(Ut=1),Y.morphAttributes.normal!==void 0&&(Ut=2),Y.morphAttributes.color!==void 0&&(Ut=3);let Jt,L,q,dt;if(at){const se=hn[at];Jt=se.vertexShader,L=se.fragmentShader}else Jt=v.vertexShader,L=v.fragmentShader,A.update(v),q=A.getVertexShaderID(v),dt=A.getFragmentShaderID(v);const tt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ft=P.isInstancedMesh===!0,it=P.isBatchedMesh===!0,bt=!!v.map,Z=!!v.matcap,nt=!!W,H=!!v.aoMap,Rt=!!v.lightMap,st=!!v.bumpMap,Bt=!!v.normalMap,ht=!!v.displacementMap,Lt=!!v.emissiveMap,vt=!!v.metalnessMap,_=!!v.roughnessMap,g=v.anisotropy>0,N=v.clearcoat>0,K=v.dispersion>0,et=v.iridescence>0,J=v.sheen>0,It=v.transmission>0,mt=g&&!!v.anisotropyMap,_t=N&&!!v.clearcoatMap,Kt=N&&!!v.clearcoatNormalMap,ot=N&&!!v.clearcoatRoughnessMap,Ht=et&&!!v.iridescenceMap,zt=et&&!!v.iridescenceThicknessMap,Vt=J&&!!v.sheenColorMap,wt=J&&!!v.sheenRoughnessMap,qt=!!v.specularMap,Wt=!!v.specularColorMap,ce=!!v.specularIntensityMap,C=It&&!!v.transmissionMap,xt=It&&!!v.thicknessMap,X=!!v.gradientMap,$=!!v.alphaMap,yt=v.alphaTest>0,Et=!!v.alphaHash,jt=!!v.extensions;let xe=jn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(xe=i.toneMapping);const be={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:Jt,fragmentShader:L,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:it,batchingColor:it&&P._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&P.instanceColor!==null,instancingMorph:Ft&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Xi,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:Z,envMap:nt,envMapMode:nt&&W.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:Rt,bumpMap:st,normalMap:Bt,displacementMap:f&&ht,emissiveMap:Lt,normalMapObjectSpace:Bt&&v.normalMapType===jc,normalMapTangentSpace:Bt&&v.normalMapType===Dl,metalnessMap:vt,roughnessMap:_,anisotropy:g,anisotropyMap:mt,clearcoat:N,clearcoatMap:_t,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ot,dispersion:K,iridescence:et,iridescenceMap:Ht,iridescenceThicknessMap:zt,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:wt,specularMap:qt,specularColorMap:Wt,specularIntensityMap:ce,transmission:It,transmissionMap:C,thicknessMap:xt,gradientMap:X,opaque:v.transparent===!1&&v.blending===Qi&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:yt,alphaHash:Et,combine:v.combine,mapUv:bt&&x(v.map.channel),aoMapUv:H&&x(v.aoMap.channel),lightMapUv:Rt&&x(v.lightMap.channel),bumpMapUv:st&&x(v.bumpMap.channel),normalMapUv:Bt&&x(v.normalMap.channel),displacementMapUv:ht&&x(v.displacementMap.channel),emissiveMapUv:Lt&&x(v.emissiveMap.channel),metalnessMapUv:vt&&x(v.metalnessMap.channel),roughnessMapUv:_&&x(v.roughnessMap.channel),anisotropyMapUv:mt&&x(v.anisotropyMap.channel),clearcoatMapUv:_t&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(v.sheenRoughnessMap.channel),specularMapUv:qt&&x(v.specularMap.channel),specularColorMapUv:Wt&&x(v.specularColorMap.channel),specularIntensityMapUv:ce&&x(v.specularIntensityMap.channel),transmissionMapUv:C&&x(v.transmissionMap.channel),thicknessMapUv:xt&&x(v.thicknessMap.channel),alphaMapUv:$&&x(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Bt||g),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!Y.attributes.uv&&(bt||$),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:gt,skinning:P.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===we,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:jt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&v.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(B(S,v),M(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function B(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const S=m[v.type];let I;if(S){const V=hn[S];I=Uh.clone(V.uniforms)}else I=v.uniforms;return I}function Q(v,S){let I;for(let V=0,P=c.length;V<P;V++){const G=c[V];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Zp(i,S,v,a),c.push(I)),I}function R(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function w(v){A.remove(v)}function D(){A.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:Q,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:D}}function tm(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,A){i.get(r)[o]=A}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function UA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function QA(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(h,f,u,m,x,p){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:u,groupOrder:m,renderOrder:h.renderOrder,z:x,group:p},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=u,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=x,d.group=p),t++,d}function o(h,f,u,m,x,p){const d=r(h,f,u,m,x,p);u.transmission>0?n.push(d):u.transparent===!0?s.push(d):e.push(d)}function A(h,f,u,m,x,p){const d=r(h,f,u,m,x,p);u.transmission>0?n.unshift(d):u.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||em),n.length>1&&n.sort(f||UA),s.length>1&&s.sort(f||UA)}function c(){for(let h=t,f=i.length;h<f;h++){const u=i[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:A,finish:c,sort:l}}function nm(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new QA,i.set(n,[r])):s>=a.length?(r=new QA,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function im(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ot};break;case"SpotLight":e={position:new T,direction:new T,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function sm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let am=0;function rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function om(i){const t=new im,e=sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,a=new re,r=new re;function o(l){let c=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let u=0,m=0,x=0,p=0,d=0,B=0,M=0,E=0,Q=0,R=0,w=0;l.sort(rm);for(let v=0,S=l.length;v<S;v++){const I=l[v],V=I.color,P=I.intensity,G=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=V.r*P,h+=V.g*P,f+=V.b*P;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],P);w++}else if(I.isDirectionalLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,F=e.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.directionalShadow[u]=F,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=I.shadow.matrix,B++}n.directional[u]=j,u++}else if(I.isSpotLight){const j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(V).multiplyScalar(P),j.distance=G,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[x]=j;const W=I.shadow;if(I.map&&(n.spotLightMap[Q]=I.map,Q++,W.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[x]=W.matrix,I.castShadow){const F=e.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=Y,E++}x++}else if(I.isRectAreaLight){const j=t.get(I);j.color.copy(V).multiplyScalar(P),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=j,p++}else if(I.isPointLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const W=I.shadow,F=e.get(I);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=j,m++}else if(I.isHemisphereLight){const j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(P),j.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[d]=j,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==u||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==B||D.numPointShadows!==M||D.numSpotShadows!==E||D.numSpotMaps!==Q||D.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=B,n.directionalShadowMap.length=B,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=B,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+Q-R,n.spotLightMap.length=Q,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,D.directionalLength=u,D.pointLength=m,D.spotLength=x,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=B,D.numPointShadows=M,D.numSpotShadows=E,D.numSpotMaps=Q,D.numLightProbes=w,n.version=am++)}function A(l,c){let h=0,f=0,u=0,m=0,x=0;const p=c.matrixWorldInverse;for(let d=0,B=l.length;d<B;d++){const M=l[d];if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){const E=n.spot[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(M.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),r.identity(),a.copy(M.matrixWorld),a.premultiply(p),r.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:A,state:n}}function PA(i){const t=new om(i),e=[],n=[];function s(c){l.camera=c,e.length=0,n.length=0}function a(c){e.push(c)}function r(c){n.push(c)}function o(){t.setup(e)}function A(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:A,pushLight:a,pushShadow:r}}function Am(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new PA(i),t.set(s,[o])):a>=r.length?(o=new PA(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class lm extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cm extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
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
}`;function um(i,t,e){let n=new Mo;const s=new ct,a=new ct,r=new le,o=new lm({depthPacking:Gc}),A=new cm,l={},c=e.maxTextureSize,h={[pn]:we,[we]:pn,[Rn]:Rn},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:hm,fragmentShader:fm}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new Ne;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let d=this.type;this.render=function(R,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const v=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const P=d!==wn&&this.type===wn,G=d===wn&&this.type!==wn;for(let Y=0,j=R.length;Y<j;Y++){const W=R[Y],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const at=F.getFrameExtents();if(s.multiply(at),a.copy(F.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/at.x),s.x=a.x*at.x,F.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/at.y),s.y=a.y*at.y,F.mapSize.y=a.y)),F.map===null||P===!0||G===!0){const ut=this.type!==wn?{minFilter:je,magFilter:je}:{};F.map!==null&&F.map.dispose(),F.map=new li(s.x,s.y,ut),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const ft=F.getViewportCount();for(let ut=0;ut<ft;ut++){const Ut=F.getViewport(ut);r.set(a.x*Ut.x,a.y*Ut.y,a.x*Ut.z,a.y*Ut.w),V.viewport(r),F.updateMatrices(W,ut),n=F.getFrustum(),E(w,D,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===wn&&B(F,D),F.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(v,S,I)};function B(R,w){const D=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new li(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,D,f,x,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,D,u,x,null)}function M(R,w,D,v){let S=null;const I=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?A:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=S.uuid,P=w.uuid;let G=l[V];G===void 0&&(G={},l[V]=G);let Y=G[P];Y===void 0&&(Y=S.clone(),G[P]=Y,w.addEventListener("dispose",Q)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,v===wn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=D}return S}function E(R,w,D,v,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const P=t.update(R),G=R.material;if(Array.isArray(G)){const Y=P.groups;for(let j=0,W=Y.length;j<W;j++){const F=Y[j],at=G[F.materialIndex];if(at&&at.visible){const ft=M(R,at,v,S);R.onBeforeShadow(i,R,w,D,P,ft,F),i.renderBufferDirect(D,null,P,ft,R,F),R.onAfterShadow(i,R,w,D,P,ft,F)}}}else if(G.visible){const Y=M(R,G,v,S);R.onBeforeShadow(i,R,w,D,P,Y,null),i.renderBufferDirect(D,null,P,Y,R,null),R.onAfterShadow(i,R,w,D,P,Y,null)}}const V=R.children;for(let P=0,G=V.length;P<G;P++)E(V[P],w,D,v,S)}function Q(R){R.target.removeEventListener("dispose",Q);for(const D in l){const v=l[D],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const dm={[gr]:Er,[Sr]:vr,[yr]:_r,[Ni]:Mr,[Er]:gr,[vr]:Sr,[_r]:yr,[Mr]:Ni};function pm(i,t){function e(){let C=!1;const xt=new le;let X=null;const $=new le(0,0,0,0);return{setMask:function(yt){X!==yt&&!C&&(i.colorMask(yt,yt,yt,yt),X=yt)},setLocked:function(yt){C=yt},setClear:function(yt,Et,jt,xe,be){be===!0&&(yt*=xe,Et*=xe,jt*=xe),xt.set(yt,Et,jt,xe),$.equals(xt)===!1&&(i.clearColor(yt,Et,jt,xe),$.copy(xt))},reset:function(){C=!1,X=null,$.set(-1,0,0,0)}}}function n(){let C=!1,xt=!1,X=null,$=null,yt=null;return{setReversed:function(Et){if(xt!==Et){const jt=t.get("EXT_clip_control");xt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const xe=yt;yt=null,this.setClear(xe)}xt=Et},getReversed:function(){return xt},setTest:function(Et){Et?tt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Et){X!==Et&&!C&&(i.depthMask(Et),X=Et)},setFunc:function(Et){if(xt&&(Et=dm[Et]),$!==Et){switch(Et){case gr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Sr:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case vr:i.depthFunc(i.GREATER);break;case _r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=Et}},setLocked:function(Et){C=Et},setClear:function(Et){yt!==Et&&(xt&&(Et=1-Et),i.clearDepth(Et),yt=Et)},reset:function(){C=!1,X=null,$=null,yt=null,xt=!1}}}function s(){let C=!1,xt=null,X=null,$=null,yt=null,Et=null,jt=null,xe=null,be=null;return{setTest:function(se){C||(se?tt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(se){xt!==se&&!C&&(i.stencilMask(se),xt=se)},setFunc:function(se,qe,gn){(X!==se||$!==qe||yt!==gn)&&(i.stencilFunc(se,qe,gn),X=se,$=qe,yt=gn)},setOp:function(se,qe,gn){(Et!==se||jt!==qe||xe!==gn)&&(i.stencilOp(se,qe,gn),Et=se,jt=qe,xe=gn)},setLocked:function(se){C=se},setClear:function(se){be!==se&&(i.clearStencil(se),be=se)},reset:function(){C=!1,xt=null,X=null,$=null,yt=null,Et=null,jt=null,xe=null,be=null}}}const a=new e,r=new n,o=new s,A=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],m=null,x=!1,p=null,d=null,B=null,M=null,E=null,Q=null,R=null,w=new Ot(0,0,0),D=0,v=!1,S=null,I=null,V=null,P=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),j=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),j=W>=2);let at=null,ft={};const ut=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Jt=new le().fromArray(ut),L=new le().fromArray(Ut);function q(C,xt,X,$){const yt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(C,Et),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<X;jt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(xt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Et}const dt={};dt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),r.setFunc(Ni),st(!1),Bt(zo),tt(i.CULL_FACE),H(Gn);function tt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function gt(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function Ft(C,xt){return h[C]!==xt?(i.bindFramebuffer(C,xt),h[C]=xt,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function it(C,xt){let X=u,$=!1;if(C){X=f.get(xt),X===void 0&&(X=[],f.set(xt,X));const yt=C.textures;if(X.length!==yt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,jt=yt.length;Et<jt;Et++)X[Et]=i.COLOR_ATTACHMENT0+Et;X.length=yt.length,$=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,$=!0);$&&i.drawBuffers(X)}function bt(C){return m!==C?(i.useProgram(C),m=C,!0):!1}const Z={[si]:i.FUNC_ADD,[xc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};Z[Ec]=i.MIN,Z[Sc]=i.MAX;const nt={[yc]:i.ZERO,[Mc]:i.ONE,[vc]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[wc]:i.DST_COLOR,[Bc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[xr]:i.ONE_MINUS_SRC_ALPHA,[Rc]:i.ONE_MINUS_DST_COLOR,[Hc]:i.ONE_MINUS_DST_ALPHA,[Ic]:i.CONSTANT_COLOR,[Tc]:i.ONE_MINUS_CONSTANT_COLOR,[Dc]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function H(C,xt,X,$,yt,Et,jt,xe,be,se){if(C===Gn){x===!0&&(gt(i.BLEND),x=!1);return}if(x===!1&&(tt(i.BLEND),x=!0),C!==mc){if(C!==p||se!==v){if((d!==si||E!==si)&&(i.blendEquation(i.FUNC_ADD),d=si,E=si),se)switch(C){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}B=null,M=null,Q=null,R=null,w.set(0,0,0),D=0,p=C,v=se}return}yt=yt||xt,Et=Et||X,jt=jt||$,(xt!==d||yt!==E)&&(i.blendEquationSeparate(Z[xt],Z[yt]),d=xt,E=yt),(X!==B||$!==M||Et!==Q||jt!==R)&&(i.blendFuncSeparate(nt[X],nt[$],nt[Et],nt[jt]),B=X,M=$,Q=Et,R=jt),(xe.equals(w)===!1||be!==D)&&(i.blendColor(xe.r,xe.g,xe.b,be),w.copy(xe),D=be),p=C,v=!1}function Rt(C,xt){C.side===Rn?gt(i.CULL_FACE):tt(i.CULL_FACE);let X=C.side===we;xt&&(X=!X),st(X),C.blending===Qi&&C.transparent===!1?H(Gn):H(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);const $=C.stencilWrite;o.setTest($),$&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Lt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(C){S!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),S=C)}function Bt(C){C!==dc?(tt(i.CULL_FACE),C!==I&&(C===zo?i.cullFace(i.BACK):C===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),I=C}function ht(C){C!==V&&(j&&i.lineWidth(C),V=C)}function Lt(C,xt,X){C?(tt(i.POLYGON_OFFSET_FILL),(P!==xt||G!==X)&&(i.polygonOffset(xt,X),P=xt,G=X)):gt(i.POLYGON_OFFSET_FILL)}function vt(C){C?tt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function _(C){C===void 0&&(C=i.TEXTURE0+Y-1),at!==C&&(i.activeTexture(C),at=C)}function g(C,xt,X){X===void 0&&(at===null?X=i.TEXTURE0+Y-1:X=at);let $=ft[X];$===void 0&&($={type:void 0,texture:void 0},ft[X]=$),($.type!==C||$.texture!==xt)&&(at!==X&&(i.activeTexture(X),at=X),i.bindTexture(C,xt||dt[C]),$.type=C,$.texture=xt)}function N(){const C=ft[at];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(C){Jt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Jt.copy(C))}function wt(C){L.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),L.copy(C))}function qt(C,xt){let X=l.get(xt);X===void 0&&(X=new WeakMap,l.set(xt,X));let $=X.get(C);$===void 0&&($=i.getUniformBlockIndex(xt,C.name),X.set(C,$))}function Wt(C,xt){const $=l.get(xt).get(C);A.get(xt)!==$&&(i.uniformBlockBinding(xt,$,C.__bindingPointIndex),A.set(xt,$))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},at=null,ft={},h={},f=new WeakMap,u=[],m=null,x=!1,p=null,d=null,B=null,M=null,E=null,Q=null,R=null,w=new Ot(0,0,0),D=0,v=!1,S=null,I=null,V=null,P=null,G=null,Jt.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:gt,bindFramebuffer:Ft,drawBuffers:it,useProgram:bt,setBlending:H,setMaterial:Rt,setFlipSided:st,setCullFace:Bt,setLineWidth:ht,setPolygonOffset:Lt,setScissorTest:vt,activeTexture:_,bindTexture:g,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:Ht,texImage3D:zt,updateUBOMapping:qt,uniformBlockBinding:Wt,texStorage2D:Kt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:It,compressedTexSubImage2D:mt,compressedTexSubImage3D:_t,scissor:Vt,viewport:wt,reset:ce}}function FA(i,t,e,n){const s=mm(n);switch(e){case Hl:return i*t;case Rl:return i*t;case bl:return i*t*2;case po:return i*t/s.components*s.byteLength;case mo:return i*t/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case wl:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case go:return i*t*4/s.components*s.byteLength;case sa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case br:case Tr:return Math.max(i,16)*Math.max(t,8)/4;case Rr:case Ir:return Math.max(i,8)*Math.max(t,8)/2;case Dr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Or:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Aa:case Zr:case Kr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tl:case Jr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mm(i){switch(i){case Dn:case vl:return{byteLength:1,components:1};case ps:case _l:case ys:return{byteLength:2,components:1};case fo:case uo:return{byteLength:2,components:4};case Ai:case ho:case un:return{byteLength:4,components:1};case Bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xm(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,c=new WeakMap;let h;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(_,g){return u?new OffscreenCanvas(_,g):ms("canvas")}function x(_,g,N){let K=1;const et=vt(_);if((et.width>N||et.height>N)&&(K=N/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const J=Math.floor(K*et.width),It=Math.floor(K*et.height);h===void 0&&(h=m(J,It));const mt=g?m(J,It):h;return mt.width=J,mt.height=It,mt.getContext("2d").drawImage(_,0,0,J,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+It+")."),mt}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),_;return _}function p(_){return _.generateMipmaps}function d(_){i.generateMipmap(_)}function B(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(_,g,N,K,et=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let J=g;if(g===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),g===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RG8UI),N===i.UNSIGNED_SHORT&&(J=i.RG16UI),N===i.UNSIGNED_INT&&(J=i.RG32UI),N===i.BYTE&&(J=i.RG8I),N===i.SHORT&&(J=i.RG16I),N===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RGB8UI),N===i.UNSIGNED_SHORT&&(J=i.RGB16UI),N===i.UNSIGNED_INT&&(J=i.RGB32UI),N===i.BYTE&&(J=i.RGB8I),N===i.SHORT&&(J=i.RGB16I),N===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),N===i.UNSIGNED_INT&&(J=i.RGBA32UI),N===i.BYTE&&(J=i.RGBA8I),N===i.SHORT&&(J=i.RGBA16I),N===i.INT&&(J=i.RGBA32I)),g===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),g===i.RGBA){const It=et?pa:te.getTransfer(K);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=It===oe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(_,g){let N;return _?g===null||g===Ai||g===Oi?N=i.DEPTH24_STENCIL8:g===un?N=i.DEPTH32F_STENCIL8:g===ps&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ai||g===Oi?N=i.DEPTH_COMPONENT24:g===un?N=i.DEPTH_COMPONENT32F:g===ps&&(N=i.DEPTH_COMPONENT16),N}function Q(_,g){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==je&&_.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function R(_){const g=_.target;g.removeEventListener("dispose",R),D(g),g.isVideoTexture&&c.delete(g)}function w(_){const g=_.target;g.removeEventListener("dispose",w),S(g)}function D(_){const g=n.get(_);if(g.__webglInit===void 0)return;const N=_.source,K=f.get(N);if(K){const et=K[g.__cacheKey];et.usedTimes--,et.usedTimes===0&&v(_),Object.keys(K).length===0&&f.delete(N)}n.remove(_)}function v(_){const g=n.get(_);i.deleteTexture(g.__webglTexture);const N=_.source,K=f.get(N);delete K[g.__cacheKey],r.memory.textures--}function S(_){const g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let et=0;et<g.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(g.__webglFramebuffer[K][et]);else i.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)i.deleteFramebuffer(g.__webglFramebuffer[K]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=_.textures;for(let K=0,et=N.length;K<et;K++){const J=n.get(N[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(N[K])}n.remove(_)}let I=0;function V(){I=0}function P(){const _=I;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),I+=1,_}function G(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function Y(_,g){const N=n.get(_);if(_.isVideoTexture&&ht(_),_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){const K=_.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(N,_,g);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function j(_,g){const N=n.get(_);if(_.version>0&&N.__version!==_.version){L(N,_,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function W(_,g){const N=n.get(_);if(_.version>0&&N.__version!==_.version){L(N,_,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function F(_,g){const N=n.get(_);if(_.version>0&&N.__version!==_.version){q(N,_,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const at={[Tn]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},ft={[je]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ut={[Xc]:i.NEVER,[qc]:i.ALWAYS,[Yc]:i.LESS,[Cl]:i.LEQUAL,[Wc]:i.EQUAL,[Jc]:i.GEQUAL,[Zc]:i.GREATER,[Kc]:i.NOTEQUAL};function Ut(_,g){if(g.type===un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===ya||g.magFilter===ws||g.magFilter===oi||g.minFilter===fn||g.minFilter===ya||g.minFilter===ws||g.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,at[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,at[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,at[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,ft[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,ft[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,ut[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===je||g.minFilter!==ws&&g.minFilter!==oi||g.type===un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(_,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Jt(_,g){let N=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",R));const K=g.source;let et=f.get(K);et===void 0&&(et={},f.set(K,et));const J=G(g);if(J!==_.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,N=!0),et[J].usedTimes++;const It=et[_.__cacheKey];It!==void 0&&(et[_.__cacheKey].usedTimes--,It.usedTimes===0&&v(g)),_.__cacheKey=J,_.__webglTexture=et[J].texture}return N}function L(_,g,N){let K=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=i.TEXTURE_3D);const et=Jt(_,g),J=g.source;e.bindTexture(K,_.__webglTexture,i.TEXTURE0+N);const It=n.get(J);if(J.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+N);const mt=te.getPrimaries(te.workingColorSpace),_t=g.colorSpace===Vn?null:te.getPrimaries(g.colorSpace),Kt=g.colorSpace===Vn||mt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ot=x(g.image,!1,s.maxTextureSize);ot=Lt(g,ot);const Ht=a.convert(g.format,g.colorSpace),zt=a.convert(g.type);let Vt=M(g.internalFormat,Ht,zt,g.colorSpace,g.isVideoTexture);Ut(K,g);let wt;const qt=g.mipmaps,Wt=g.isVideoTexture!==!0,ce=It.__version===void 0||et===!0,C=J.dataReady,xt=Q(g,ot);if(g.isDepthTexture)Vt=E(g.format===Vi,g.type),ce&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Ht,zt,null));else if(g.isDataTexture)if(qt.length>0){Wt&&ce&&e.texStorage2D(i.TEXTURE_2D,xt,Vt,qt[0].width,qt[0].height);for(let X=0,$=qt.length;X<$;X++)wt=qt[X],Wt?C&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Ht,zt,wt.data):e.texImage2D(i.TEXTURE_2D,X,Vt,wt.width,wt.height,0,Ht,zt,wt.data);g.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(i.TEXTURE_2D,xt,Vt,ot.width,ot.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Ht,zt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Ht,zt,ot.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Vt,qt[0].width,qt[0].height,ot.depth);for(let X=0,$=qt.length;X<$;X++)if(wt=qt[X],g.format!==rn)if(Ht!==null)if(Wt){if(C)if(g.layerUpdates.size>0){const yt=FA(wt.width,wt.height,g.format,g.type);for(const Et of g.layerUpdates){const jt=wt.data.subarray(Et*yt/wt.data.BYTES_PER_ELEMENT,(Et+1)*yt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Et,wt.width,wt.height,1,Ht,jt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,ot.depth,Ht,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Vt,wt.width,wt.height,ot.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,ot.depth,Ht,zt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Vt,wt.width,wt.height,ot.depth,0,Ht,zt,wt.data)}else{Wt&&ce&&e.texStorage2D(i.TEXTURE_2D,xt,Vt,qt[0].width,qt[0].height);for(let X=0,$=qt.length;X<$;X++)wt=qt[X],g.format!==rn?Ht!==null?Wt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Ht,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Vt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?C&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,Ht,zt,wt.data):e.texImage2D(i.TEXTURE_2D,X,Vt,wt.width,wt.height,0,Ht,zt,wt.data)}else if(g.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Vt,ot.width,ot.height,ot.depth),C)if(g.layerUpdates.size>0){const X=FA(ot.width,ot.height,g.format,g.type);for(const $ of g.layerUpdates){const yt=ot.data.subarray($*X/ot.data.BYTES_PER_ELEMENT,($+1)*X/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ot.width,ot.height,1,Ht,zt,yt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Ht,zt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ot.width,ot.height,ot.depth,0,Ht,zt,ot.data);else if(g.isData3DTexture)Wt?(ce&&e.texStorage3D(i.TEXTURE_3D,xt,Vt,ot.width,ot.height,ot.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Ht,zt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ot.width,ot.height,ot.depth,0,Ht,zt,ot.data);else if(g.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(i.TEXTURE_2D,xt,Vt,ot.width,ot.height);else{let X=ot.width,$=ot.height;for(let yt=0;yt<xt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Vt,X,$,0,Ht,zt,null),X>>=1,$>>=1}}else if(qt.length>0){if(Wt&&ce){const X=vt(qt[0]);e.texStorage2D(i.TEXTURE_2D,xt,Vt,X.width,X.height)}for(let X=0,$=qt.length;X<$;X++)wt=qt[X],Wt?C&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Ht,zt,wt):e.texImage2D(i.TEXTURE_2D,X,Vt,Ht,zt,wt);g.generateMipmaps=!1}else if(Wt){if(ce){const X=vt(ot);e.texStorage2D(i.TEXTURE_2D,xt,Vt,X.width,X.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,zt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Ht,zt,ot);p(g)&&d(K),It.__version=J.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function q(_,g,N){if(g.image.length!==6)return;const K=Jt(_,g),et=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+N);const J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+N);const It=te.getPrimaries(te.workingColorSpace),mt=g.colorSpace===Vn?null:te.getPrimaries(g.colorSpace),_t=g.colorSpace===Vn||It===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Kt=g.isCompressedTexture||g.image[0].isCompressedTexture,ot=g.image[0]&&g.image[0].isDataTexture,Ht=[];for(let $=0;$<6;$++)!Kt&&!ot?Ht[$]=x(g.image[$],!0,s.maxCubemapSize):Ht[$]=ot?g.image[$].image:g.image[$],Ht[$]=Lt(g,Ht[$]);const zt=Ht[0],Vt=a.convert(g.format,g.colorSpace),wt=a.convert(g.type),qt=M(g.internalFormat,Vt,wt,g.colorSpace),Wt=g.isVideoTexture!==!0,ce=J.__version===void 0||K===!0,C=et.dataReady;let xt=Q(g,zt);Ut(i.TEXTURE_CUBE_MAP,g);let X;if(Kt){Wt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,qt,zt.width,zt.height);for(let $=0;$<6;$++){X=Ht[$].mipmaps;for(let yt=0;yt<X.length;yt++){const Et=X[yt];g.format!==rn?Vt!==null?Wt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Et.width,Et.height,Vt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,qt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Et.width,Et.height,Vt,wt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,qt,Et.width,Et.height,0,Vt,wt,Et.data)}}}else{if(X=g.mipmaps,Wt&&ce){X.length>0&&xt++;const $=vt(Ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,qt,$.width,$.height)}for(let $=0;$<6;$++)if(ot){Wt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ht[$].width,Ht[$].height,Vt,wt,Ht[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Ht[$].width,Ht[$].height,0,Vt,wt,Ht[$].data);for(let yt=0;yt<X.length;yt++){const jt=X[yt].image[$].image;Wt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,jt.width,jt.height,Vt,wt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,qt,jt.width,jt.height,0,Vt,wt,jt.data)}}else{Wt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Vt,wt,Ht[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Vt,wt,Ht[$]);for(let yt=0;yt<X.length;yt++){const Et=X[yt];Wt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,Vt,wt,Et.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,qt,Vt,wt,Et.image[$])}}}p(g)&&d(i.TEXTURE_CUBE_MAP),J.__version=et.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function dt(_,g,N,K,et,J){const It=a.convert(N.format,N.colorSpace),mt=a.convert(N.type),_t=M(N.internalFormat,It,mt,N.colorSpace),Kt=n.get(g),ot=n.get(N);if(ot.__renderTarget=g,!Kt.__hasExternalTextures){const Ht=Math.max(1,g.width>>J),zt=Math.max(1,g.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,_t,Ht,zt,g.depth,0,It,mt,null):e.texImage2D(et,J,_t,Ht,zt,0,It,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,_),Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,ot.__webglTexture,0,st(g)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,ot.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(_,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){const K=g.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=E(g.stencilBuffer,et),It=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=st(g);Bt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,_)}else{const K=g.textures;for(let et=0;et<K.length;et++){const J=K[et],It=a.convert(J.format,J.colorSpace),mt=a.convert(J.type),_t=M(J.internalFormat,It,mt,J.colorSpace),Kt=st(g);N&&Bt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,_t,g.width,g.height):Bt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,_t,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_t,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(g.depthTexture);K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const et=K.__webglTexture,J=st(g);if(g.depthTexture.format===Pi)Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(g.depthTexture.format===Vi)Bt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ft(_){const g=n.get(_),N=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const K=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const et=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),g.__depthDisposeCallback=et}g.__boundDepthTexture=K}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");gt(g.__webglFramebuffer,_)}else if(N){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=i.createRenderbuffer(),tt(g.__webglDepthbuffer[K],_,!1);else{const et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),tt(g.__webglDepthbuffer,_,!1);else{const K=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(_,g,N){const K=n.get(_);g!==void 0&&dt(K.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ft(_)}function bt(_){const g=_.texture,N=n.get(_),K=n.get(g);_.addEventListener("dispose",w);const et=_.textures,J=_.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=g.version,r.memory.textures++),J){N.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[mt]=[];for(let _t=0;_t<g.mipmaps.length;_t++)N.__webglFramebuffer[mt][_t]=i.createFramebuffer()}else N.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let mt=0;mt<g.mipmaps.length;mt++)N.__webglFramebuffer[mt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(It)for(let mt=0,_t=et.length;mt<_t;mt++){const Kt=n.get(et[mt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),r.memory.textures++)}if(_.samples>0&&Bt(_)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const _t=et[mt];N.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[mt]);const Kt=a.convert(_t.format,_t.colorSpace),ot=a.convert(_t.type),Ht=M(_t.internalFormat,Kt,ot,_t.colorSpace,_.isXRRenderTarget===!0),zt=st(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Ht,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,N.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(N.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,g);for(let mt=0;mt<6;mt++)if(g.mipmaps&&g.mipmaps.length>0)for(let _t=0;_t<g.mipmaps.length;_t++)dt(N.__webglFramebuffer[mt][_t],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,_t);else dt(N.__webglFramebuffer[mt],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let mt=0,_t=et.length;mt<_t;mt++){const Kt=et[mt],ot=n.get(Kt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Ut(i.TEXTURE_2D,Kt),dt(N.__webglFramebuffer,_,Kt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(Kt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(mt=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,K.__webglTexture),Ut(mt,g),g.mipmaps&&g.mipmaps.length>0)for(let _t=0;_t<g.mipmaps.length;_t++)dt(N.__webglFramebuffer[_t],_,g,i.COLOR_ATTACHMENT0,mt,_t);else dt(N.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,mt,0);p(g)&&d(mt),e.unbindTexture()}_.depthBuffer&&Ft(_)}function Z(_){const g=_.textures;for(let N=0,K=g.length;N<K;N++){const et=g[N];if(p(et)){const J=B(_),It=n.get(et).__webglTexture;e.bindTexture(J,It),d(J),e.unbindTexture()}}}const nt=[],H=[];function Rt(_){if(_.samples>0){if(Bt(_)===!1){const g=_.textures,N=_.width,K=_.height;let et=i.COLOR_BUFFER_BIT;const J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(_),mt=g.length>1;if(mt)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);const Kt=n.get(g[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,N,K,0,0,N,K,et,i.NEAREST),A===!0&&(nt.length=0,H.length=0,nt.push(i.COLOR_ATTACHMENT0+_t),_.depthBuffer&&_.resolveDepthBuffer===!1&&(nt.push(J),H.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);const Kt=n.get(g[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&A){const g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function st(_){return Math.min(s.maxSamples,_.samples)}function Bt(_){const g=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ht(_){const g=r.render.frame;c.get(_)!==g&&(c.set(_,g),_.update())}function Lt(_,g){const N=_.colorSpace,K=_.format,et=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||N!==Xi&&N!==Vn&&(te.getTransfer(N)===oe?(K!==rn||et!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function vt(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=it,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Bt}function gm(i,t){function e(n,s=Vn){let a;const r=te.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return i.BYTE;if(n===_l)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===Hl)return i.ALPHA;if(n===wl)return i.RGB;if(n===rn)return i.RGBA;if(n===Rl)return i.LUMINANCE;if(n===bl)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===po)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===Il)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===sa||n===aa||n===ra||n===oa)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===br||n===Ir||n===Tr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Rr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===br)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Cr||n===kr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Dr||n===Cr)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===kr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ur||n===Qr||n===Pr||n===Fr||n===Nr||n===Lr||n===zr||n===Or||n===Vr||n===Gr||n===jr||n===Xr||n===Yr||n===Wr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ur)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Or)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Zr||n===Kr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Aa)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Jr||n===qr||n===$r)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Jr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Em extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class de extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,A=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else A!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(A.matrix.fromArray(a.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,a.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(a.linearVelocity)):A.hasLinearVelocity=!1,a.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(a.angularVelocity)):A.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=s!==null),A!==null&&(A.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:ym,fragmentShader:Mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _m extends Yi{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",A=1,l=null,c=null,h=null,f=null,u=null,m=null;const x=new vm,p=e.getContextAttributes();let d=null,B=null;const M=[],E=[],Q=new ct;let R=null;const w=new De;w.viewport=new le;const D=new De;D.viewport=new le;const v=[w,D],S=new Em;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let q=M[L];return q===void 0&&(q=new Wa,M[L]=q),q.getTargetRaySpace()},this.getControllerGrip=function(L){let q=M[L];return q===void 0&&(q=new Wa,M[L]=q),q.getGripSpace()},this.getHand=function(L){let q=M[L];return q===void 0&&(q=new Wa,M[L]=q),q.getHandSpace()};function P(L){const q=E.indexOf(L.inputSource);if(q===-1)return;const dt=M[q];dt!==void 0&&(dt.update(L.inputSource,L.frame,l||r),dt.dispatchEvent({type:L.type,data:L.inputSource}))}function G(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let L=0;L<M.length;L++){const q=E[L];q!==null&&(E[L]=null,M[L].disconnect(q))}I=null,V=null,x.reset(),t.setRenderTarget(d),u=null,f=null,h=null,s=null,B=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(Q.width,Q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(Q),s.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),B=new li(u.framebufferWidth,u.framebufferHeight,{format:rn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,dt=null,tt=null;p.depth&&(tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=p.stencil?Vi:Pi,dt=p.stencil?Oi:Ai);const gt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:a};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),B=new li(f.textureWidth,f.textureHeight,{format:rn,type:Dn,depthTexture:new jl(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(A),l=null,r=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(L){for(let q=0;q<L.removed.length;q++){const dt=L.removed[q],tt=E.indexOf(dt);tt>=0&&(E[tt]=null,M[tt].disconnect(dt))}for(let q=0;q<L.added.length;q++){const dt=L.added[q];let tt=E.indexOf(dt);if(tt===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=E.length){E.push(dt),tt=Ft;break}else if(E[Ft]===null){E[Ft]=dt,tt=Ft;break}if(tt===-1)break}const gt=M[tt];gt&&gt.connect(dt)}}const j=new T,W=new T;function F(L,q,dt){j.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(dt.matrixWorld);const tt=j.distanceTo(W),gt=q.projectionMatrix.elements,Ft=dt.projectionMatrix.elements,it=gt[14]/(gt[10]-1),bt=gt[14]/(gt[10]+1),Z=(gt[9]+1)/gt[5],nt=(gt[9]-1)/gt[5],H=(gt[8]-1)/gt[0],Rt=(Ft[8]+1)/Ft[0],st=it*H,Bt=it*Rt,ht=tt/(-H+Rt),Lt=ht*-H;if(q.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Lt),L.translateZ(ht),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),gt[10]===-1)L.projectionMatrix.copy(q.projectionMatrix),L.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const vt=it+ht,_=bt+ht,g=st-Lt,N=Bt+(tt-Lt),K=Z*bt/_*vt,et=nt*bt/_*vt;L.projectionMatrix.makePerspective(g,N,K,et,vt,_),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function at(L,q){q===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(q.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let q=L.near,dt=L.far;x.texture!==null&&(x.depthNear>0&&(q=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),S.near=D.near=w.near=q,S.far=D.far=w.far=dt,(I!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,V=S.far),w.layers.mask=L.layers.mask|2,D.layers.mask=L.layers.mask|4,S.layers.mask=w.layers.mask|D.layers.mask;const tt=L.parent,gt=S.cameras;at(S,tt);for(let Ft=0;Ft<gt.length;Ft++)at(gt[Ft],tt);gt.length===2?F(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),ft(L,S,tt)};function ft(L,q,dt){dt===null?L.matrix.copy(q.matrixWorld):(L.matrix.copy(dt.matrixWorld),L.matrix.invert(),L.matrix.multiply(q.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(q.projectionMatrix),L.projectionMatrixInverse.copy(q.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Gi*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&u===null))return A},this.setFoveation=function(L){A=L,f!==null&&(f.fixedFoveation=L),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=L)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ut=null;function Ut(L,q){if(c=q.getViewerPose(l||r),m=q,c!==null){const dt=c.views;u!==null&&(t.setRenderTargetFramebuffer(B,u.framebuffer),t.setRenderTarget(B));let tt=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,tt=!0);for(let Ft=0;Ft<dt.length;Ft++){const it=dt[Ft];let bt=null;if(u!==null)bt=u.getViewport(it);else{const nt=h.getViewSubImage(f,it);bt=nt.viewport,Ft===0&&(t.setRenderTargetTextures(B,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(B))}let Z=v[Ft];Z===void 0&&(Z=new De,Z.layers.enable(Ft),Z.viewport=new le,v[Ft]=Z),Z.matrix.fromArray(it.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(it.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(bt.x,bt.y,bt.width,bt.height),Ft===0&&(S.matrix.copy(Z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),tt===!0&&S.cameras.push(Z)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Ft=h.getDepthInformation(dt[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(t,Ft,s.renderState)}}for(let dt=0;dt<M.length;dt++){const tt=E[dt],gt=M[dt];tt!==null&&gt!==void 0&&gt.update(tt,q,l||r)}ut&&ut(L,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),m=null}const Jt=new Vl;Jt.setAnimationLoop(Ut),this.setAnimationLoop=function(L){ut=L},this.dispose=function(){}}}const ti=new mn,Bm=new re;function Hm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ll(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,B,M,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),h(p,d)):d.isMeshPhongMaterial?(a(p,d),c(p,d)):d.isMeshStandardMaterial?(a(p,d),f(p,d),d.isMeshPhysicalMaterial&&u(p,d,E)):d.isMeshMatcapMaterial?(a(p,d),m(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),x(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?A(p,d,B,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===we&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===we&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const B=t.get(d),M=B.envMap,E=B.envMapRotation;M&&(p.envMap.value=M,ti.copy(E),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),p.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(ti)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function A(p,d,B,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*B,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,B){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===we&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=B.texture,p.transmissionSamplerSize.value.set(B.width,B.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const B=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(B.matrixWorld),p.nearDistance.value=B.shadow.camera.near,p.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wm(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function A(B,M){const E=M.program;n.uniformBlockBinding(B,E)}function l(B,M){let E=s[B.id];E===void 0&&(m(B),E=c(B),s[B.id]=E,B.addEventListener("dispose",p));const Q=M.program;n.updateUBOMapping(B,Q);const R=t.render.frame;a[B.id]!==R&&(f(B),a[B.id]=R)}function c(B){const M=h();B.__bindingPointIndex=M;const E=i.createBuffer(),Q=B.__size,R=B.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,Q,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function h(){for(let B=0;B<o;B++)if(r.indexOf(B)===-1)return r.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(B){const M=s[B.id],E=B.uniforms,Q=B.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,w=E.length;R<w;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,S=D.length;v<S;v++){const I=D[v];if(u(I,R,v,Q)===!0){const V=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let Y=0;Y<P.length;Y++){const j=P[Y],W=x(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+G,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(B,M,E,Q){const R=B.value,w=M+"_"+E;if(Q[w]===void 0)return typeof R=="number"||typeof R=="boolean"?Q[w]=R:Q[w]=R.clone(),!0;{const D=Q[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return Q[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(B){const M=B.uniforms;let E=0;const Q=16;for(let w=0,D=M.length;w<D;w++){const v=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,I=v.length;S<I;S++){const V=v[S],P=Array.isArray(V.value)?V.value:[V.value];for(let G=0,Y=P.length;G<Y;G++){const j=P[G],W=x(j),F=E%Q,at=F%W.boundary,ft=F+at;E+=at,ft!==0&&Q-ft<W.storage&&(E+=Q-ft),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=W.storage}}}const R=E%Q;return R>0&&(E+=Q-R),B.__size=E,B.__cache={},this}function x(B){const M={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(M.boundary=4,M.storage=4):B.isVector2?(M.boundary=8,M.storage=8):B.isVector3||B.isColor?(M.boundary=16,M.storage=12):B.isVector4?(M.boundary=16,M.storage=16):B.isMatrix3?(M.boundary=48,M.storage=48):B.isMatrix4?(M.boundary=64,M.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),M}function p(B){const M=B.target;M.removeEventListener("dispose",p);const E=r.indexOf(M.__bindingPointIndex);r.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function d(){for(const B in s)i.deleteBuffer(s[B]);r=[],s={},a={}}return{bind:A,update:l,dispose:d}}class Rm{constructor(t={}){const{canvas:e=ph(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const m=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const B=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=jn,this.toneMappingExposure=1;const E=this;let Q=!1,R=0,w=0,D=null,v=-1,S=null;const I=new le,V=new le;let P=null;const G=new Ot(0);let Y=0,j=e.width,W=e.height,F=1,at=null,ft=null;const ut=new le(0,0,j,W),Ut=new le(0,0,j,W);let Jt=!1;const L=new Mo;let q=!1,dt=!1;const tt=new re,gt=new re,Ft=new T,it=new le,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function nt(){return D===null?F:1}let H=n;function Rt(y,k){return e.getContext(y,k)}try{const y={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:A,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),H===null){const k="webgl2";if(H=Rt(k,y),H===null)throw Rt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let st,Bt,ht,Lt,vt,_,g,N,K,et,J,It,mt,_t,Kt,ot,Ht,zt,Vt,wt,qt,Wt,ce,C;function xt(){st=new Cd(H),st.init(),Wt=new gm(H,st),Bt=new wd(H,st,t,Wt),ht=new pm(H,st),Bt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Lt=new Qd(H),vt=new tm,_=new xm(H,st,ht,vt,Bt,Wt,Lt),g=new bd(E),N=new Dd(E),K=new Oh(H),ce=new Bd(H,K),et=new kd(H,K,Lt,ce),J=new Fd(H,et,K,Lt),Vt=new Pd(H,Bt,_),ot=new Rd(vt),It=new $p(E,g,N,st,Bt,ce,ot),mt=new Hm(E,vt),_t=new nm,Kt=new Am(st),zt=new _d(E,g,N,ht,J,u,A),Ht=new um(E,J,Bt),C=new wm(H,Lt,Bt,ht),wt=new Hd(H,st,Lt),qt=new Ud(H,st,Lt),Lt.programs=It.programs,E.capabilities=Bt,E.extensions=st,E.properties=vt,E.renderLists=_t,E.shadowMap=Ht,E.state=ht,E.info=Lt}xt();const X=new _m(E,H);this.xr=X,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(y){y!==void 0&&(F=y,this.setSize(j,W,!1))},this.getSize=function(y){return y.set(j,W)},this.setSize=function(y,k,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,W=k,e.width=Math.floor(y*F),e.height=Math.floor(k*F),z===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(j*F,W*F).floor()},this.setDrawingBufferSize=function(y,k,z){j=y,W=k,F=z,e.width=Math.floor(y*z),e.height=Math.floor(k*z),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,k,z,O){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,k,z,O),ht.viewport(I.copy(ut).multiplyScalar(F).round())},this.getScissor=function(y){return y.copy(Ut)},this.setScissor=function(y,k,z,O){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,k,z,O),ht.scissor(V.copy(Ut).multiplyScalar(F).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(y){ht.setScissorTest(Jt=y)},this.setOpaqueSort=function(y){at=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(y=!0,k=!0,z=!0){let O=0;if(y){let U=!1;if(D!==null){const lt=D.texture.format;U=lt===go||lt===xo||lt===mo}if(U){const lt=D.texture.type,St=lt===Dn||lt===Ai||lt===ps||lt===Oi||lt===fo||lt===uo,Tt=zt.getClearColor(),Dt=zt.getClearAlpha(),Gt=Tt.r,Xt=Tt.g,Ct=Tt.b;St?(m[0]=Gt,m[1]=Xt,m[2]=Ct,m[3]=Dt,H.clearBufferuiv(H.COLOR,0,m)):(x[0]=Gt,x[1]=Xt,x[2]=Ct,x[3]=Dt,H.clearBufferiv(H.COLOR,0,x))}else O|=H.COLOR_BUFFER_BIT}k&&(O|=H.DEPTH_BUFFER_BIT),z&&(O|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),Kt.dispose(),vt.dispose(),g.dispose(),N.dispose(),J.dispose(),ce.dispose(),C.dispose(),It.dispose(),X.dispose(),X.removeEventListener("sessionstart",Co),X.removeEventListener("sessionend",ko),Wn.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const y=Lt.autoReset,k=Ht.enabled,z=Ht.autoUpdate,O=Ht.needsUpdate,U=Ht.type;xt(),Lt.autoReset=y,Ht.enabled=k,Ht.autoUpdate=z,Ht.needsUpdate=O,Ht.type=U}function Et(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jt(y){const k=y.target;k.removeEventListener("dispose",jt),xe(k)}function xe(y){be(y),vt.remove(y)}function be(y){const k=vt.get(y).programs;k!==void 0&&(k.forEach(function(z){It.releaseProgram(z)}),y.isShaderMaterial&&It.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,z,O,U,lt){k===null&&(k=bt);const St=U.isMesh&&U.matrixWorld.determinant()<0,Tt=lc(y,k,z,O,U);ht.setMaterial(O,St);let Dt=z.index,Gt=1;if(O.wireframe===!0){if(Dt=et.getWireframeAttribute(z),Dt===void 0)return;Gt=2}const Xt=z.drawRange,Ct=z.attributes.position;let ee=Xt.start*Gt,he=(Xt.start+Xt.count)*Gt;lt!==null&&(ee=Math.max(ee,lt.start*Gt),he=Math.min(he,(lt.start+lt.count)*Gt)),Dt!==null?(ee=Math.max(ee,0),he=Math.min(he,Dt.count)):Ct!=null&&(ee=Math.max(ee,0),he=Math.min(he,Ct.count));const fe=he-ee;if(fe<0||fe===1/0)return;ce.setup(U,O,Tt,z,Dt);let Fe,ne=wt;if(Dt!==null&&(Fe=K.get(Dt),ne=qt,ne.setIndex(Fe)),U.isMesh)O.wireframe===!0?(ht.setLineWidth(O.wireframeLinewidth*nt()),ne.setMode(H.LINES)):ne.setMode(H.TRIANGLES);else if(U.isLine){let kt=O.linewidth;kt===void 0&&(kt=1),ht.setLineWidth(kt*nt()),U.isLineSegments?ne.setMode(H.LINES):U.isLineLoop?ne.setMode(H.LINE_LOOP):ne.setMode(H.LINE_STRIP)}else U.isPoints?ne.setMode(H.POINTS):U.isSprite&&ne.setMode(H.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const kt=U._multiDrawStarts,En=U._multiDrawCounts,ie=U._multiDrawCount,$e=Dt?K.get(Dt).bytesPerElement:1,di=vt.get(O).currentProgram.getUniforms();for(let Le=0;Le<ie;Le++)di.setValue(H,"_gl_DrawID",Le),ne.render(kt[Le]/$e,En[Le])}else if(U.isInstancedMesh)ne.renderInstances(ee,fe,U.count);else if(z.isInstancedBufferGeometry){const kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,En=Math.min(z.instanceCount,kt);ne.renderInstances(ee,fe,En)}else ne.render(ee,fe)};function se(y,k,z){y.transparent===!0&&y.side===Rn&&y.forceSinglePass===!1?(y.side=we,y.needsUpdate=!0,Hs(y,k,z),y.side=pn,y.needsUpdate=!0,Hs(y,k,z),y.side=Rn):Hs(y,k,z)}this.compile=function(y,k,z=null){z===null&&(z=y),d=Kt.get(z),d.init(k),M.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const O=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const lt=U.material;if(lt)if(Array.isArray(lt))for(let St=0;St<lt.length;St++){const Tt=lt[St];se(Tt,z,U),O.add(Tt)}else se(lt,z,U),O.add(lt)}),M.pop(),d=null,O},this.compileAsync=function(y,k,z=null){const O=this.compile(y,k,z);return new Promise(U=>{function lt(){if(O.forEach(function(St){vt.get(St).currentProgram.isReady()&&O.delete(St)}),O.size===0){U(y);return}setTimeout(lt,10)}st.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let qe=null;function gn(y){qe&&qe(y)}function Co(){Wn.stop()}function ko(){Wn.start()}const Wn=new Vl;Wn.setAnimationLoop(gn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(y){qe=y,X.setAnimationLoop(y),y===null?Wn.stop():Wn.start()},X.addEventListener("sessionstart",Co),X.addEventListener("sessionend",ko),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(k),k=X.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,k,D),d=Kt.get(y,M.length),d.init(k),M.push(d),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),L.setFromProjectionMatrix(gt),dt=this.localClippingEnabled,q=ot.init(this.clippingPlanes,dt),p=_t.get(y,B.length),p.init(),B.push(p),X.enabled===!0&&X.isPresenting===!0){const lt=E.xr.getDepthSensingMesh();lt!==null&&Sa(lt,k,-1/0,E.sortObjects)}Sa(y,k,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(at,ft),Z=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Z&&zt.addToRenderList(p,y),this.info.render.frame++,q===!0&&ot.beginShadows();const z=d.state.shadowsArray;Ht.render(z,y,k),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,U=p.transmissive;if(d.setupLights(),k.isArrayCamera){const lt=k.cameras;if(U.length>0)for(let St=0,Tt=lt.length;St<Tt;St++){const Dt=lt[St];Qo(O,U,y,Dt)}Z&&zt.render(y);for(let St=0,Tt=lt.length;St<Tt;St++){const Dt=lt[St];Uo(p,y,Dt,Dt.viewport)}}else U.length>0&&Qo(O,U,y,k),Z&&zt.render(y),Uo(p,y,k);D!==null&&(_.updateMultisampleRenderTarget(D),_.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(E,y,k),ce.resetDefaultState(),v=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],q===!0&&ot.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,B.pop(),B.length>0?p=B[B.length-1]:p=null};function Sa(y,k,z,O){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||L.intersectsSprite(y)){O&&it.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);const St=J.update(y),Tt=y.material;Tt.visible&&p.push(y,St,Tt,z,it.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||L.intersectsObject(y))){const St=J.update(y),Tt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),it.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),it.copy(St.boundingSphere.center)),it.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(Tt)){const Dt=St.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){const Ct=Dt[Gt],ee=Tt[Ct.materialIndex];ee&&ee.visible&&p.push(y,St,ee,z,it.z,Ct)}}else Tt.visible&&p.push(y,St,Tt,z,it.z,null)}}const lt=y.children;for(let St=0,Tt=lt.length;St<Tt;St++)Sa(lt[St],k,z,O)}function Uo(y,k,z,O){const U=y.opaque,lt=y.transmissive,St=y.transparent;d.setupLightsView(z),q===!0&&ot.setGlobalState(E.clippingPlanes,z),O&&ht.viewport(I.copy(O)),U.length>0&&Bs(U,k,z),lt.length>0&&Bs(lt,k,z),St.length>0&&Bs(St,k,z),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Qo(y,k,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new li(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ys:Dn,minFilter:oi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const lt=d.state.transmissionRenderTarget[O.id],St=O.viewport||I;lt.setSize(St.z,St.w);const Tt=E.getRenderTarget();E.setRenderTarget(lt),E.getClearColor(G),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),Z&&zt.render(z);const Dt=E.toneMapping;E.toneMapping=jn;const Gt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),q===!0&&ot.setGlobalState(E.clippingPlanes,O),Bs(y,z,O),_.updateMultisampleRenderTarget(lt),_.updateRenderTargetMipmap(lt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ct=0,ee=k.length;Ct<ee;Ct++){const he=k[Ct],fe=he.object,Fe=he.geometry,ne=he.material,kt=he.group;if(ne.side===Rn&&fe.layers.test(O.layers)){const En=ne.side;ne.side=we,ne.needsUpdate=!0,Po(fe,z,O,Fe,ne,kt),ne.side=En,ne.needsUpdate=!0,Xt=!0}}Xt===!0&&(_.updateMultisampleRenderTarget(lt),_.updateRenderTargetMipmap(lt))}E.setRenderTarget(Tt),E.setClearColor(G,Y),Gt!==void 0&&(O.viewport=Gt),E.toneMapping=Dt}function Bs(y,k,z){const O=k.isScene===!0?k.overrideMaterial:null;for(let U=0,lt=y.length;U<lt;U++){const St=y[U],Tt=St.object,Dt=St.geometry,Gt=O===null?St.material:O,Xt=St.group;Tt.layers.test(z.layers)&&Po(Tt,k,z,Dt,Gt,Xt)}}function Po(y,k,z,O,U,lt){y.onBeforeRender(E,k,z,O,U,lt),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(E,k,z,O,y,lt),U.transparent===!0&&U.side===Rn&&U.forceSinglePass===!1?(U.side=we,U.needsUpdate=!0,E.renderBufferDirect(z,k,O,U,y,lt),U.side=pn,U.needsUpdate=!0,E.renderBufferDirect(z,k,O,U,y,lt),U.side=Rn):E.renderBufferDirect(z,k,O,U,y,lt),y.onAfterRender(E,k,z,O,U,lt)}function Hs(y,k,z){k.isScene!==!0&&(k=bt);const O=vt.get(y),U=d.state.lights,lt=d.state.shadowsArray,St=U.state.version,Tt=It.getParameters(y,U.state,lt,k,z),Dt=It.getProgramCacheKey(Tt);let Gt=O.programs;O.environment=y.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(y.isMeshStandardMaterial?N:g).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Gt===void 0&&(y.addEventListener("dispose",jt),Gt=new Map,O.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(O.currentProgram===Xt&&O.lightsStateVersion===St)return No(y,Tt),Xt}else Tt.uniforms=It.getUniforms(y),y.onBeforeCompile(Tt,E),Xt=It.acquireProgram(Tt,Dt),Gt.set(Dt,Xt),O.uniforms=Tt.uniforms;const Ct=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),No(y,Tt),O.needsLights=hc(y),O.lightsStateVersion=St,O.needsLights&&(Ct.ambientLightColor.value=U.state.ambient,Ct.lightProbe.value=U.state.probe,Ct.directionalLights.value=U.state.directional,Ct.directionalLightShadows.value=U.state.directionalShadow,Ct.spotLights.value=U.state.spot,Ct.spotLightShadows.value=U.state.spotShadow,Ct.rectAreaLights.value=U.state.rectArea,Ct.ltc_1.value=U.state.rectAreaLTC1,Ct.ltc_2.value=U.state.rectAreaLTC2,Ct.pointLights.value=U.state.point,Ct.pointLightShadows.value=U.state.pointShadow,Ct.hemisphereLights.value=U.state.hemi,Ct.directionalShadowMap.value=U.state.directionalShadowMap,Ct.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ct.spotShadowMap.value=U.state.spotShadowMap,Ct.spotLightMatrix.value=U.state.spotLightMatrix,Ct.spotLightMap.value=U.state.spotLightMap,Ct.pointShadowMap.value=U.state.pointShadowMap,Ct.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Xt,O.uniformsList=null,Xt}function Fo(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=la.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function No(y,k){const z=vt.get(y);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.batchingColor=k.batchingColor,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.instancingMorph=k.instancingMorph,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function lc(y,k,z,O,U){k.isScene!==!0&&(k=bt),_.resetTextureUnits();const lt=k.fog,St=O.isMeshStandardMaterial?k.environment:null,Tt=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Xi,Dt=(O.isMeshStandardMaterial?N:g).get(O.envMap||St),Gt=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Xt=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ct=!!z.morphAttributes.position,ee=!!z.morphAttributes.normal,he=!!z.morphAttributes.color;let fe=jn;O.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=E.toneMapping);const Fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=Fe!==void 0?Fe.length:0,kt=vt.get(O),En=d.state.lights;if(q===!0&&(dt===!0||y!==S)){const Xe=y===S&&O.id===v;ot.setState(O,y,Xe)}let ie=!1;O.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==En.state.version||kt.outputColorSpace!==Tt||U.isBatchedMesh&&kt.batching===!1||!U.isBatchedMesh&&kt.batching===!0||U.isBatchedMesh&&kt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&kt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&kt.instancing===!1||!U.isInstancedMesh&&kt.instancing===!0||U.isSkinnedMesh&&kt.skinning===!1||!U.isSkinnedMesh&&kt.skinning===!0||U.isInstancedMesh&&kt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&kt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&kt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&kt.instancingMorph===!1&&U.morphTexture!==null||kt.envMap!==Dt||O.fog===!0&&kt.fog!==lt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ot.numPlanes||kt.numIntersection!==ot.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Xt||kt.morphTargets!==Ct||kt.morphNormals!==ee||kt.morphColors!==he||kt.toneMapping!==fe||kt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,kt.__version=O.version);let $e=kt.currentProgram;ie===!0&&($e=Hs(O,k,U));let di=!1,Le=!1,Ki=!1;const ue=$e.getUniforms(),cn=kt.uniforms;if(ht.useProgram($e.program)&&(di=!0,Le=!0,Ki=!0),O.id!==v&&(v=O.id,Le=!0),di||S!==y){ht.buffers.depth.getReversed()?(tt.copy(y.projectionMatrix),xh(tt),gh(tt),ue.setValue(H,"projectionMatrix",tt)):ue.setValue(H,"projectionMatrix",y.projectionMatrix),ue.setValue(H,"viewMatrix",y.matrixWorldInverse);const kn=ue.map.cameraPosition;kn!==void 0&&kn.setValue(H,Ft.setFromMatrixPosition(y.matrixWorld)),Bt.logarithmicDepthBuffer&&ue.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ue.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Le=!0,Ki=!0)}if(U.isSkinnedMesh){ue.setOptional(H,U,"bindMatrix"),ue.setOptional(H,U,"bindMatrixInverse");const Xe=U.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ue.setValue(H,"boneTexture",Xe.boneTexture,_))}U.isBatchedMesh&&(ue.setOptional(H,U,"batchingTexture"),ue.setValue(H,"batchingTexture",U._matricesTexture,_),ue.setOptional(H,U,"batchingIdTexture"),ue.setValue(H,"batchingIdTexture",U._indirectTexture,_),ue.setOptional(H,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(H,"batchingColorTexture",U._colorsTexture,_));const Ji=z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Vt.update(U,z,$e),(Le||kt.receiveShadow!==U.receiveShadow)&&(kt.receiveShadow=U.receiveShadow,ue.setValue(H,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(cn.envMap.value=Dt,cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&k.environment!==null&&(cn.envMapIntensity.value=k.environmentIntensity),Le&&(ue.setValue(H,"toneMappingExposure",E.toneMappingExposure),kt.needsLights&&cc(cn,Ki),lt&&O.fog===!0&&mt.refreshFogUniforms(cn,lt),mt.refreshMaterialUniforms(cn,O,F,W,d.state.transmissionRenderTarget[y.id]),la.upload(H,Fo(kt),cn,_)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(la.upload(H,Fo(kt),cn,_),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ue.setValue(H,"center",U.center),ue.setValue(H,"modelViewMatrix",U.modelViewMatrix),ue.setValue(H,"normalMatrix",U.normalMatrix),ue.setValue(H,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Xe=O.uniformsGroups;for(let kn=0,Un=Xe.length;kn<Un;kn++){const Lo=Xe[kn];C.update(Lo,$e),C.bind(Lo,$e)}}return $e}function cc(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function hc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,k,z){vt.get(y.texture).__webglTexture=k,vt.get(y.depthTexture).__webglTexture=z;const O=vt.get(y);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=z===void 0,O.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){const z=vt.get(y);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,z=0){D=y,R=k,w=z;let O=!0,U=null,lt=!1,St=!1;if(y){const Dt=vt.get(y);if(Dt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(H.FRAMEBUFFER,null),O=!1;else if(Dt.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(Dt.__hasExternalTextures)_.rebindTextures(y,vt.get(y.texture).__webglTexture,vt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ct=y.depthTexture;if(Dt.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(y.width!==Ct.image.width||y.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}const Gt=y.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);const Xt=vt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?U=Xt[k][z]:U=Xt[k],lt=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?U=vt.get(y).__webglMultisampledFramebuffer:Array.isArray(Xt)?U=Xt[z]:U=Xt,I.copy(y.viewport),V.copy(y.scissor),P=y.scissorTest}else I.copy(ut).multiplyScalar(F).floor(),V.copy(Ut).multiplyScalar(F).floor(),P=Jt;if(ht.bindFramebuffer(H.FRAMEBUFFER,U)&&O&&ht.drawBuffers(y,U),ht.viewport(I),ht.scissor(V),ht.setScissorTest(P),lt){const Dt=vt.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,z)}else if(St){const Dt=vt.get(y.texture),Gt=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dt.__webglTexture,z||0,Gt)}v=-1},this.readRenderTargetPixels=function(y,k,z,O,U,lt,St){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){ht.bindFramebuffer(H.FRAMEBUFFER,Tt);try{const Dt=y.texture,Gt=Dt.format,Xt=Dt.type;if(!Bt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-O&&z>=0&&z<=y.height-U&&H.readPixels(k,z,O,U,Wt.convert(Gt),Wt.convert(Xt),lt)}finally{const Dt=D!==null?vt.get(D).__webglFramebuffer:null;ht.bindFramebuffer(H.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,k,z,O,U,lt,St){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){const Dt=y.texture,Gt=Dt.format,Xt=Dt.type;if(!Bt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-O&&z>=0&&z<=y.height-U){ht.bindFramebuffer(H.FRAMEBUFFER,Tt);const Ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ct),H.bufferData(H.PIXEL_PACK_BUFFER,lt.byteLength,H.STREAM_READ),H.readPixels(k,z,O,U,Wt.convert(Gt),Wt.convert(Xt),0);const ee=D!==null?vt.get(D).__webglFramebuffer:null;ht.bindFramebuffer(H.FRAMEBUFFER,ee);const he=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mh(H,he,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,lt),H.deleteBuffer(Ct),H.deleteSync(he),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,z=0){y.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);const O=Math.pow(2,-z),U=Math.floor(y.image.width*O),lt=Math.floor(y.image.height*O),St=k!==null?k.x:0,Tt=k!==null?k.y:0;_.setTexture2D(y,0),H.copyTexSubImage2D(H.TEXTURE_2D,z,0,0,St,Tt,U,lt),ht.unbindTexture()},this.copyTextureToTexture=function(y,k,z=null,O=null,U=0){y.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1],k=arguments[2],U=arguments[3]||0,z=null);let lt,St,Tt,Dt,Gt,Xt,Ct,ee,he;const fe=y.isCompressedTexture?y.mipmaps[U]:y.image;z!==null?(lt=z.max.x-z.min.x,St=z.max.y-z.min.y,Tt=z.isBox3?z.max.z-z.min.z:1,Dt=z.min.x,Gt=z.min.y,Xt=z.isBox3?z.min.z:0):(lt=fe.width,St=fe.height,Tt=fe.depth||1,Dt=0,Gt=0,Xt=0),O!==null?(Ct=O.x,ee=O.y,he=O.z):(Ct=0,ee=0,he=0);const Fe=Wt.convert(k.format),ne=Wt.convert(k.type);let kt;k.isData3DTexture?(_.setTexture3D(k,0),kt=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(_.setTexture2DArray(k,0),kt=H.TEXTURE_2D_ARRAY):(_.setTexture2D(k,0),kt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);const En=H.getParameter(H.UNPACK_ROW_LENGTH),ie=H.getParameter(H.UNPACK_IMAGE_HEIGHT),$e=H.getParameter(H.UNPACK_SKIP_PIXELS),di=H.getParameter(H.UNPACK_SKIP_ROWS),Le=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,fe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,fe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Dt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const Ki=y.isDataArrayTexture||y.isData3DTexture,ue=k.isDataArrayTexture||k.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const cn=vt.get(y),Ji=vt.get(k),Xe=vt.get(cn.__renderTarget),kn=vt.get(Ji.__renderTarget);ht.bindFramebuffer(H.READ_FRAMEBUFFER,Xe.__webglFramebuffer),ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Un=0;Un<Tt;Un++)Ki&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vt.get(y).__webglTexture,U,Xt+Un),y.isDepthTexture?(ue&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vt.get(k).__webglTexture,U,he+Un),H.blitFramebuffer(Dt,Gt,lt,St,Ct,ee,lt,St,H.DEPTH_BUFFER_BIT,H.NEAREST)):ue?H.copyTexSubImage3D(kt,U,Ct,ee,he+Un,Dt,Gt,lt,St):H.copyTexSubImage2D(kt,U,Ct,ee,he+Un,Dt,Gt,lt,St);ht.bindFramebuffer(H.READ_FRAMEBUFFER,null),ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?H.texSubImage3D(kt,U,Ct,ee,he,lt,St,Tt,Fe,ne,fe.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(kt,U,Ct,ee,he,lt,St,Tt,Fe,fe.data):H.texSubImage3D(kt,U,Ct,ee,he,lt,St,Tt,Fe,ne,fe):y.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,U,Ct,ee,lt,St,Fe,ne,fe.data):y.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,U,Ct,ee,fe.width,fe.height,Fe,fe.data):H.texSubImage2D(H.TEXTURE_2D,U,Ct,ee,lt,St,Fe,ne,fe);H.pixelStorei(H.UNPACK_ROW_LENGTH,En),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ie),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,di),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Le),U===0&&k.generateMipmaps&&H.generateMipmap(kt),ht.unbindTexture()},this.copyTextureToTexture3D=function(y,k,z=null,O=null,U=0){return y.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,O=arguments[1]||null,y=arguments[2],k=arguments[3],U=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,k,z,O,U)},this.initRenderTarget=function(y){vt.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),ht.unbindTexture()},this.resetState=function(){R=0,w=0,D=null,ht.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class vs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new vs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xa extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bm extends Re{constructor(t=null,e=1,n=1,s,a,r,o,A,l=je,c=je,h,f){super(null,r,o,A,l,c,s,a,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NA extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new re,LA=new re,Ws=[],zA=new fi,Im=new re,ns=new rt,is=new ui;class Ii extends rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new NA(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Im)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),zA.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(zA)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),is.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,bi),LA.multiplyMatrices(n,bi),ns.matrixWorld=LA,ns.raycast(t,Ws);for(let r=0,o=Ws.length;r<o;r++){const A=Ws[r];A.instanceId=a,A.object=this,e.push(A)}Ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new NA(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bm(new Float32Array(s*this.count),s,this.count,po,un));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,A=s*t;a[A]=o,a.set(n,A+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Tm extends Wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const OA=new re,eo=new So,Zs=new ui,Ks=new T;class Dm extends ge{constructor(t=new Ne,e=new Tm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=a,t.ray.intersectsSphere(Zs)===!1)return;OA.copy(s).invert(),eo.copy(t.ray).applyMatrix4(OA);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),A=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let m=f,x=u;m<x;m++){const p=l.getX(m);Ks.fromBufferAttribute(h,p),VA(Ks,p,A,s,t,e,this)}}else{const f=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let m=f,x=u;m<x;m++)Ks.fromBufferAttribute(h,m),VA(Ks,m,A,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function VA(i,t,e,n,s,a,r){const o=eo.distanceSqToPoint(i);if(o<e){const A=new T;eo.closestPointToPoint(i,A),A.applyMatrix4(n);const l=s.ray.origin.distanceTo(A);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:A,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ze extends Re{constructor(t,e,n,s,a,r,o,A,l){super(t,e,n,s,a,r,o,A,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,A=a-1,l;for(;o<=A;)if(s=Math.floor(o+(A-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)A=s-1;else{A=s;break}if(s=A,n[s]===r)return s/(a-1);const c=n[s],f=n[s+1]-c,u=(r-c)/f;return(s+u)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),A=e||(r.isVector2?new ct:new T);return A.copy(o).sub(r).normalize(),A}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],a=[],r=[],o=new T,A=new re;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new T)}a[0]=new T,r[0]=new T;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let u=1;u<=t;u++){if(a[u]=a[u-1].clone(),r[u]=r[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(_e(s[u-1].dot(s[u]),-1,1));a[u].applyMatrix4(A.makeRotationAxis(o,m))}r[u].crossVectors(s[u],a[u])}if(e===!0){let u=Math.acos(_e(a[0].dot(a[t]),-1,1));u/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(u=-u);for(let m=1;m<=t;m++)a[m].applyMatrix4(A.makeRotationAxis(s[m],u*m)),r[m].crossVectors(s[m],a[m])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _o extends xn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,A=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=A}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let A=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=A-this.aX,u=l-this.aY;A=f*c-u*h+this.aX,l=f*h+u*c+this.aY}return n.set(A,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cm extends _o{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Bo(){let i=0,t=0,e=0,n=0;function s(a,r,o,A){i=a,t=o,e=-3*a+3*r-2*o-A,n=2*a-2*r+o+A}return{initCatmullRom:function(a,r,o,A,l){s(r,o,l*(o-a),l*(A-r))},initNonuniformCatmullRom:function(a,r,o,A,l,c,h){let f=(r-a)/l-(o-a)/(l+c)+(o-r)/c,u=(o-r)/c-(A-r)/(c+h)+(A-o)/h;f*=c,u*=c,s(r,o,f,u)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const Js=new T,Za=new Bo,Ka=new Bo,Ja=new Bo;class os extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),A=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:A===0&&o===a-1&&(o=a-2,A=1);let l,c;this.closed||o>0?l=s[(o-1)%a]:(Js.subVectors(s[0],s[1]).add(s[0]),l=Js);const h=s[o%a],f=s[(o+1)%a];if(this.closed||o+2<a?c=s[(o+2)%a]:(Js.subVectors(s[a-1],s[a-2]).add(s[a-1]),c=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),u),x=Math.pow(h.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(c),u);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Za.initNonuniformCatmullRom(l.x,h.x,f.x,c.x,m,x,p),Ka.initNonuniformCatmullRom(l.y,h.y,f.y,c.y,m,x,p),Ja.initNonuniformCatmullRom(l.z,h.z,f.z,c.z,m,x,p)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,h.x,f.x,c.x,this.tension),Ka.initCatmullRom(l.y,h.y,f.y,c.y,this.tension),Ja.initCatmullRom(l.z,h.z,f.z,c.z,this.tension));return n.set(Za.calc(A),Ka.calc(A),Ja.calc(A)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function GA(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,A=i*o;return(2*e-2*n+a+r)*A+(-3*e+3*n-2*a-r)*o+a*i+e}function km(i,t){const e=1-i;return e*e*t}function Um(i,t){return 2*(1-i)*i*t}function Qm(i,t){return i*i*t}function fs(i,t,e,n){return km(i,t)+Um(i,e)+Qm(i,n)}function Pm(i,t){const e=1-i;return e*e*e*t}function Fm(i,t){const e=1-i;return 3*e*e*i*t}function Nm(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function us(i,t,e,n,s){return Pm(i,t)+Fm(i,e)+Nm(i,n)+Lm(i,s)}class Kl extends xn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(us(t,s.x,a.x,r.x,o.x),us(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zm extends xn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(us(t,s.x,a.x,r.x,o.x),us(t,s.y,a.y,r.y,o.y),us(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jl extends xn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Om extends xn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ql extends xn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(fs(t,s.x,a.x,r.x),fs(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vm extends xn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(fs(t,s.x,a.x,r.x),fs(t,s.y,a.y,r.y),fs(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,A=s[r===0?r:r-1],l=s[r],c=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(GA(o,A.x,l.x,c.x,h.x),GA(o,A.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:Cm,CatmullRomCurve3:os,CubicBezierCurve:Kl,CubicBezierCurve3:zm,EllipseCurve:_o,LineCurve:Jl,LineCurve3:Om,QuadraticBezierCurve:ql,QuadraticBezierCurve3:Vm,SplineCurve:$l});class Gm extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],A=o.getLength(),l=A===0?0:1-r/A;return o.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,A=r.getPoints(o);for(let l=0;l<A.length;l++){const c=A[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new no[s.type]().fromJSON(s))}return this}}class io extends Gm{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jl(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new ql(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new Kl(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,A=this.currentPoint.y;return this.absarc(t+o,e+A,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,A){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,s,a,r,o,A),this}absellipse(t,e,n,s,a,r,o,A){const l=new _o(t,e,n,s,a,r,o,A);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ho extends Ne{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);const a=[],r=[],o=[],A=[],l=[],c=1/e,h=new T,f=new ct,u=new T,m=new T,x=new T;let p=0,d=0;for(let B=0;B<=t.length-1;B++)switch(B){case 0:p=t[B+1].x-t[B].x,d=t[B+1].y-t[B].y,u.x=d*1,u.y=-p,u.z=d*0,x.copy(u),u.normalize(),A.push(u.x,u.y,u.z);break;case t.length-1:A.push(x.x,x.y,x.z);break;default:p=t[B+1].x-t[B].x,d=t[B+1].y-t[B].y,u.x=d*1,u.y=-p,u.z=d*0,m.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),A.push(u.x,u.y,u.z),x.copy(m)}for(let B=0;B<=e;B++){const M=n+B*c*s,E=Math.sin(M),Q=Math.cos(M);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*E,h.y=t[R].y,h.z=t[R].x*Q,r.push(h.x,h.y,h.z),f.x=B/e,f.y=R/(t.length-1),o.push(f.x,f.y);const w=A[3*R+0]*E,D=A[3*R+1],v=A[3*R+0]*Q;l.push(w,D,v)}}for(let B=0;B<e;B++)for(let M=0;M<t.length-1;M++){const E=M+B*t.length,Q=E,R=E+t.length,w=E+t.length+1,D=E+1;a.push(Q,R,D),a.push(w,D,R)}this.setIndex(a),this.setAttribute("position",new Ee(r,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.points,t.segments,t.phiStart,t.phiLength)}}class $t extends Ho{constructor(t=1,e=1,n=4,s=8){const a=new io;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new $t(t.radius,t.length,t.capSegments,t.radialSegments)}}class on extends Ne{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,A=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:A};const l=this;s=Math.floor(s),a=Math.floor(a);const c=[],h=[],f=[],u=[];let m=0;const x=[],p=n/2;let d=0;B(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(u,2));function B(){const E=new T,Q=new T;let R=0;const w=(e-t)/n;for(let D=0;D<=a;D++){const v=[],S=D/a,I=S*(e-t)+t;for(let V=0;V<=s;V++){const P=V/s,G=P*A+o,Y=Math.sin(G),j=Math.cos(G);Q.x=I*Y,Q.y=-S*n+p,Q.z=I*j,h.push(Q.x,Q.y,Q.z),E.set(Y,w,j).normalize(),f.push(E.x,E.y,E.z),u.push(P,1-S),v.push(m++)}x.push(v)}for(let D=0;D<s;D++)for(let v=0;v<a;v++){const S=x[v][D],I=x[v+1][D],V=x[v+1][D+1],P=x[v][D+1];(t>0||v!==0)&&(c.push(S,I,P),R+=3),(e>0||v!==a-1)&&(c.push(I,V,P),R+=3)}l.addGroup(d,R,0),d+=R}function M(E){const Q=m,R=new ct,w=new T;let D=0;const v=E===!0?t:e,S=E===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,p*S,0),f.push(0,S,0),u.push(.5,.5),m++;const I=m;for(let V=0;V<=s;V++){const G=V/s*A+o,Y=Math.cos(G),j=Math.sin(G);w.x=v*j,w.y=p*S,w.z=v*Y,h.push(w.x,w.y,w.z),f.push(0,S,0),R.x=Y*.5+.5,R.y=j*.5*S+.5,u.push(R.x,R.y),m++}for(let V=0;V<s;V++){const P=Q+V,G=I+V;E===!0?c.push(G,G+1,P):c.push(G+1,G,P),D+=3}l.addGroup(d,D,E===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tc extends io{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new io().fromJSON(s))}return this}}const jm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let a=ec(i,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,A,l,c,h,f,u;if(n&&(a=Km(i,t,a,e)),i.length>80*e){o=l=i[0],A=c=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<o&&(o=h),f<A&&(A=f),h>l&&(l=h),f>c&&(c=f);u=Math.max(l-o,c-A),u=u!==0?32767/u:0}return gs(a,r,e,o,A,u,0),r}};function ec(i,t,e,n,s){let a,r;if(s===o0(i,t,e,n)>0)for(a=t;a<e;a+=n)r=jA(a,i[a],i[a+1],r);else for(a=e-n;a>=t;a-=n)r=jA(a,i[a],i[a+1],r);return r&&ga(r,r.next)&&(Ss(r),r=r.next),r}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ga(e,e.next)||me(e.prev,e,e.next)===0)){if(Ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gs(i,t,e,n,s,a,r){if(!i)return;!r&&a&&e0(i,n,s,a);let o=i,A,l;for(;i.prev!==i.next;){if(A=i.prev,l=i.next,a?Ym(i,n,s,a):Xm(i)){t.push(A.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ss(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=Wm(ci(i),t,e),gs(i,t,e,n,s,a,2)):r===2&&Zm(i,t,e,n,s,a):gs(ci(i),t,e,n,s,a,1);break}}}function Xm(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,a=e.x,r=n.x,o=t.y,A=e.y,l=n.y,c=s<a?s<r?s:r:a<r?a:r,h=o<A?o<l?o:l:A<l?A:l,f=s>a?s>r?s:r:a>r?a:r,u=o>A?o>l?o:l:A>l?A:l;let m=n.next;for(;m!==t;){if(m.x>=c&&m.x<=f&&m.y>=h&&m.y<=u&&ki(s,o,a,A,r,l,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ym(i,t,e,n){const s=i.prev,a=i,r=i.next;if(me(s,a,r)>=0)return!1;const o=s.x,A=a.x,l=r.x,c=s.y,h=a.y,f=r.y,u=o<A?o<l?o:l:A<l?A:l,m=c<h?c<f?c:f:h<f?h:f,x=o>A?o>l?o:l:A>l?A:l,p=c>h?c>f?c:f:h>f?h:f,d=so(u,m,t,e,n),B=so(x,p,t,e,n);let M=i.prevZ,E=i.nextZ;for(;M&&M.z>=d&&E&&E.z<=B;){if(M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==r&&ki(o,c,A,h,l,f,M.x,M.y)&&me(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=u&&E.x<=x&&E.y>=m&&E.y<=p&&E!==s&&E!==r&&ki(o,c,A,h,l,f,E.x,E.y)&&me(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=d;){if(M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==r&&ki(o,c,A,h,l,f,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=B;){if(E.x>=u&&E.x<=x&&E.y>=m&&E.y<=p&&E!==s&&E!==r&&ki(o,c,A,h,l,f,E.x,E.y)&&me(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Wm(i,t,e){let n=i;do{const s=n.prev,a=n.next.next;!ga(s,a)&&nc(s,n,n.next,a)&&Es(s,a)&&Es(a,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(a.i/e|0),Ss(n),Ss(n.next),n=i=a),n=n.next}while(n!==i);return ci(n)}function Zm(i,t,e,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&s0(r,o)){let A=ic(r,o);r=ci(r,r.next),A=ci(A,A.next),gs(r,t,e,n,s,a,0),gs(A,t,e,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function Km(i,t,e,n){const s=[];let a,r,o,A,l;for(a=0,r=t.length;a<r;a++)o=t[a]*n,A=a<r-1?t[a+1]*n:i.length,l=ec(i,o,A,n,!1),l===l.next&&(l.steiner=!0),s.push(i0(l));for(s.sort(Jm),a=0;a<s.length;a++)e=qm(s[a],e);return e}function Jm(i,t){return i.x-t.x}function qm(i,t){const e=$m(i,t);if(!e)return t;const n=ic(e,i);return ci(n,n.next),ci(e,e.next)}function $m(i,t){let e=t,n=-1/0,s;const a=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=a&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===a))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,A=s.x,l=s.y;let c=1/0,h;e=s;do a>=e.x&&e.x>=A&&a!==e.x&&ki(r<l?a:n,r,A,l,r<l?n:a,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(a-e.x),Es(e,i)&&(h<c||h===c&&(e.x>s.x||e.x===s.x&&t0(s,e)))&&(s=e,c=h)),e=e.next;while(e!==o);return s}function t0(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function e0(i,t,e,n){let s=i;do s.z===0&&(s.z=so(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,n0(s)}function n0(i){let t,e,n,s,a,r,o,A,l=1;do{for(e=i,i=null,a=null,r=0;e;){for(r++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(A=l;o>0||A>0&&n;)o!==0&&(A===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,A--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;e=n}a.nextZ=null,l*=2}while(r>1);return i}function so(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function i0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ki(i,t,e,n,s,a,r,o){return(s-r)*(t-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(n-o)}function s0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!a0(i,t)&&(Es(i,t)&&Es(t,i)&&r0(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||ga(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ga(i,t){return i.x===t.x&&i.y===t.y}function nc(i,t,e,n){const s=$s(me(i,t,e)),a=$s(me(i,t,n)),r=$s(me(e,n,i)),o=$s(me(e,n,t));return!!(s!==a&&r!==o||s===0&&qs(i,e,t)||a===0&&qs(i,n,t)||r===0&&qs(e,i,n)||o===0&&qs(e,t,n))}function qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $s(i){return i>0?1:i<0?-1:0}function a0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Es(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function r0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,a=(i.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ic(i,t){const e=new ao(i.i,i.x,i.y),n=new ao(t.i,t.x,t.y),s=i.next,a=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function jA(i,t,e,n){const s=new ao(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ao(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o0(i,t,e,n){let s=0;for(let a=t,r=e-n;a<e;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class ds{static area(t){const e=t.length;let n=0;for(let s=e-1,a=0;a<e;s=a++)n+=t[s].x*t[a].y-t[a].x*t[s].y;return n*.5}static isClockWise(t){return ds.area(t)<0}static triangulateShape(t,e){const n=[],s=[],a=[];XA(t),YA(n,t);let r=t.length;e.forEach(XA);for(let A=0;A<e.length;A++)s.push(r),r+=e[A].length,YA(n,e[A]);const o=jm.triangulate(n,s);for(let A=0;A<o.length;A+=3)a.push(o.slice(A,A+3));return a}}function XA(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function YA(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class wo extends Ne{constructor(t=new tc([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],a=[];for(let o=0,A=t.length;o<A;o++){const l=t[o];r(l)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(a,2)),this.computeVertexNormals();function r(o){const A=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,B=e.UVGenerator!==void 0?e.UVGenerator:A0;let M,E=!1,Q,R,w,D;d&&(M=d.getSpacedPoints(c),E=!0,f=!1,Q=d.computeFrenetFrames(c,!1),R=new T,w=new T,D=new T),f||(p=0,u=0,m=0,x=0);const v=o.extractPoints(l);let S=v.shape;const I=v.holes;if(!ds.isClockWise(S)){S=S.reverse();for(let Z=0,nt=I.length;Z<nt;Z++){const H=I[Z];ds.isClockWise(H)&&(I[Z]=H.reverse())}}const P=ds.triangulateShape(S,I),G=S;for(let Z=0,nt=I.length;Z<nt;Z++){const H=I[Z];S=S.concat(H)}function Y(Z,nt,H){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(nt,H)}const j=S.length,W=P.length;function F(Z,nt,H){let Rt,st,Bt;const ht=Z.x-nt.x,Lt=Z.y-nt.y,vt=H.x-Z.x,_=H.y-Z.y,g=ht*ht+Lt*Lt,N=ht*_-Lt*vt;if(Math.abs(N)>Number.EPSILON){const K=Math.sqrt(g),et=Math.sqrt(vt*vt+_*_),J=nt.x-Lt/K,It=nt.y+ht/K,mt=H.x-_/et,_t=H.y+vt/et,Kt=((mt-J)*_-(_t-It)*vt)/(ht*_-Lt*vt);Rt=J+ht*Kt-Z.x,st=It+Lt*Kt-Z.y;const ot=Rt*Rt+st*st;if(ot<=2)return new ct(Rt,st);Bt=Math.sqrt(ot/2)}else{let K=!1;ht>Number.EPSILON?vt>Number.EPSILON&&(K=!0):ht<-Number.EPSILON?vt<-Number.EPSILON&&(K=!0):Math.sign(Lt)===Math.sign(_)&&(K=!0),K?(Rt=-Lt,st=ht,Bt=Math.sqrt(g)):(Rt=ht,st=Lt,Bt=Math.sqrt(g/2))}return new ct(Rt/Bt,st/Bt)}const at=[];for(let Z=0,nt=G.length,H=nt-1,Rt=Z+1;Z<nt;Z++,H++,Rt++)H===nt&&(H=0),Rt===nt&&(Rt=0),at[Z]=F(G[Z],G[H],G[Rt]);const ft=[];let ut,Ut=at.concat();for(let Z=0,nt=I.length;Z<nt;Z++){const H=I[Z];ut=[];for(let Rt=0,st=H.length,Bt=st-1,ht=Rt+1;Rt<st;Rt++,Bt++,ht++)Bt===st&&(Bt=0),ht===st&&(ht=0),ut[Rt]=F(H[Rt],H[Bt],H[ht]);ft.push(ut),Ut=Ut.concat(ut)}for(let Z=0;Z<p;Z++){const nt=Z/p,H=u*Math.cos(nt*Math.PI/2),Rt=m*Math.sin(nt*Math.PI/2)+x;for(let st=0,Bt=G.length;st<Bt;st++){const ht=Y(G[st],at[st],Rt);tt(ht.x,ht.y,-H)}for(let st=0,Bt=I.length;st<Bt;st++){const ht=I[st];ut=ft[st];for(let Lt=0,vt=ht.length;Lt<vt;Lt++){const _=Y(ht[Lt],ut[Lt],Rt);tt(_.x,_.y,-H)}}}const Jt=m+x;for(let Z=0;Z<j;Z++){const nt=f?Y(S[Z],Ut[Z],Jt):S[Z];E?(w.copy(Q.normals[0]).multiplyScalar(nt.x),R.copy(Q.binormals[0]).multiplyScalar(nt.y),D.copy(M[0]).add(w).add(R),tt(D.x,D.y,D.z)):tt(nt.x,nt.y,0)}for(let Z=1;Z<=c;Z++)for(let nt=0;nt<j;nt++){const H=f?Y(S[nt],Ut[nt],Jt):S[nt];E?(w.copy(Q.normals[Z]).multiplyScalar(H.x),R.copy(Q.binormals[Z]).multiplyScalar(H.y),D.copy(M[Z]).add(w).add(R),tt(D.x,D.y,D.z)):tt(H.x,H.y,h/c*Z)}for(let Z=p-1;Z>=0;Z--){const nt=Z/p,H=u*Math.cos(nt*Math.PI/2),Rt=m*Math.sin(nt*Math.PI/2)+x;for(let st=0,Bt=G.length;st<Bt;st++){const ht=Y(G[st],at[st],Rt);tt(ht.x,ht.y,h+H)}for(let st=0,Bt=I.length;st<Bt;st++){const ht=I[st];ut=ft[st];for(let Lt=0,vt=ht.length;Lt<vt;Lt++){const _=Y(ht[Lt],ut[Lt],Rt);E?tt(_.x,_.y+M[c-1].y,M[c-1].x+H):tt(_.x,_.y,h+H)}}}L(),q();function L(){const Z=s.length/3;if(f){let nt=0,H=j*nt;for(let Rt=0;Rt<W;Rt++){const st=P[Rt];gt(st[2]+H,st[1]+H,st[0]+H)}nt=c+p*2,H=j*nt;for(let Rt=0;Rt<W;Rt++){const st=P[Rt];gt(st[0]+H,st[1]+H,st[2]+H)}}else{for(let nt=0;nt<W;nt++){const H=P[nt];gt(H[2],H[1],H[0])}for(let nt=0;nt<W;nt++){const H=P[nt];gt(H[0]+j*c,H[1]+j*c,H[2]+j*c)}}n.addGroup(Z,s.length/3-Z,0)}function q(){const Z=s.length/3;let nt=0;dt(G,nt),nt+=G.length;for(let H=0,Rt=I.length;H<Rt;H++){const st=I[H];dt(st,nt),nt+=st.length}n.addGroup(Z,s.length/3-Z,1)}function dt(Z,nt){let H=Z.length;for(;--H>=0;){const Rt=H;let st=H-1;st<0&&(st=Z.length-1);for(let Bt=0,ht=c+p*2;Bt<ht;Bt++){const Lt=j*Bt,vt=j*(Bt+1),_=nt+Rt+Lt,g=nt+st+Lt,N=nt+st+vt,K=nt+Rt+vt;Ft(_,g,N,K)}}}function tt(Z,nt,H){A.push(Z),A.push(nt),A.push(H)}function gt(Z,nt,H){it(Z),it(nt),it(H);const Rt=s.length/3,st=B.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);bt(st[0]),bt(st[1]),bt(st[2])}function Ft(Z,nt,H,Rt){it(Z),it(nt),it(Rt),it(nt),it(H),it(Rt);const st=s.length/3,Bt=B.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);bt(Bt[0]),bt(Bt[1]),bt(Bt[3]),bt(Bt[1]),bt(Bt[2]),bt(Bt[3])}function it(Z){s.push(A[Z*3+0]),s.push(A[Z*3+1]),s.push(A[Z*3+2])}function bt(Z){a.push(Z.x),a.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return l0(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new no[s.type]().fromJSON(s)),new wo(n,t.options)}}const A0={generateTopUV:function(i,t,e,n,s){const a=t[e*3],r=t[e*3+1],o=t[n*3],A=t[n*3+1],l=t[s*3],c=t[s*3+1];return[new ct(a,r),new ct(o,A),new ct(l,c)]},generateSideWallUV:function(i,t,e,n,s,a){const r=t[e*3],o=t[e*3+1],A=t[e*3+2],l=t[n*3],c=t[n*3+1],h=t[n*3+2],f=t[s*3],u=t[s*3+1],m=t[s*3+2],x=t[a*3],p=t[a*3+1],d=t[a*3+2];return Math.abs(o-c)<Math.abs(r-l)?[new ct(r,1-A),new ct(l,1-h),new ct(f,1-m),new ct(x,1-d)]:[new ct(o,1-A),new ct(c,1-h),new ct(u,1-m),new ct(p,1-d)]}};function l0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sn extends Ne{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const A=Math.min(r+o,Math.PI);let l=0;const c=[],h=new T,f=new T,u=[],m=[],x=[],p=[];for(let d=0;d<=n;d++){const B=[],M=d/n;let E=0;d===0&&r===0?E=.5/e:d===n&&A===Math.PI&&(E=-.5/e);for(let Q=0;Q<=e;Q++){const R=Q/e;h.x=-t*Math.cos(s+R*a)*Math.sin(r+M*o),h.y=t*Math.cos(r+M*o),h.z=t*Math.sin(s+R*a)*Math.sin(r+M*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(R+E,1-M),B.push(l++)}c.push(B)}for(let d=0;d<n;d++)for(let B=0;B<e;B++){const M=c[d][B+1],E=c[d][B],Q=c[d+1][B],R=c[d+1][B+1];(d!==0||r>0)&&u.push(M,E,R),(d!==n-1||A<Math.PI)&&u.push(E,Q,R)}this.setIndex(u),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dn extends Ne{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],A=[],l=[],c=new T,h=new T,f=new T;for(let u=0;u<=n;u++)for(let m=0;m<=s;m++){const x=m/s*a,p=u/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(x),h.y=(t+e*Math.cos(p))*Math.sin(x),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(h,c).normalize(),A.push(f.x,f.y,f.z),l.push(m/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=s;m++){const x=(s+1)*u+m-1,p=(s+1)*(u-1)+m-1,d=(s+1)*(u-1)+m,B=(s+1)*u+m;r.push(x,p,B),r.push(p,d,B)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(A,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pt extends Wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const WA={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class c0{constructor(t,e,n){const s=this;let a=!1,r=0,o=0,A;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,a===!1&&s.onStart!==void 0&&s.onStart(c,r,o),a=!0},this.itemEnd=function(c){r++,s.onProgress!==void 0&&s.onProgress(c,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return A?A(c):c},this.setURLModifier=function(c){return A=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){const u=l[h],m=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return m}return null}}}const h0=new c0;class Ro{constructor(t){this.manager=t!==void 0?t:h0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";class f0 extends Ro{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=WA.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=ms("img");function A(){c(),WA.add(t,this),e&&e(this),a.manager.itemEnd(t)}function l(h){c(),s&&s(h),a.manager.itemError(t),a.manager.itemEnd(t)}function c(){o.removeEventListener("load",A,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",A,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class u0 extends Ro{constructor(t){super(t)}load(t,e,n,s){const a=new Re,r=new f0(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},n,s),a}}class _s extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class d0 extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qa=new re,ZA=new T,KA=new T;class bo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ZA.setFromMatrixPosition(t.matrixWorld),e.position.copy(ZA),KA.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(KA),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p0 extends bo{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Gi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class m0 extends _s{constructor(t,e,n=0,s=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new p0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const JA=new re,ss=new T,$a=new T;class x0 extends bo{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-ss.x,-ss.y,-ss.z),JA.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(JA)}}class ln extends _s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new x0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class g0 extends bo{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new g0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sc extends _s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qA=new re;class S0{constructor(t,e,n=0,s=1/0){this.ray=new So(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qA.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qA),this}intersectObject(t,e=!0,n=[]){return ro(t,this,n,e),n.sort($A),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)ro(t[s],this,n,e);return n.sort($A),n}}function $A(i,t){return i.distance-t.distance}function ro(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)ro(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const Mt={acilis:{ustBaslik:"Sana ait",baslik:"Anı Defterimiz"},kilit:{baslik:"Kalbimin Şifresi",aciklama:"Bu defterin anahtarı yalnızca sende.",yerTutucu:"Şifreyi yaz",dugme:"Kilidi Aç",ipucuMetni:"İpucu ver",ipucu:"Bize ait dört rakam. Ya da o iki kelime.",hataMetni:"Anahtar dönmedi. Bir daha dene, acelemiz yok.",basariMetni:"Kilit açıldı. Hoş geldin.",kazima:"30 · 09 · 2022",kabulEdilenler:["1416","aşkpozitifi","aşk pozitifi","aşkpozitif","aşk pozitif"]},hikaye:{istasyonAdi:"TOPKAPI - ULUBATLI",hatKodu:"M1",yonYazisi:"AKSARAY YÖNÜ",tarihYazisi:"30 EYLÜL 2022",kaydirmaIpucu:"Kaydır",altyazilar:[{p:.03,sure:.075,metin:"İstanbul’a geliyordun…"},{p:.115,sure:.075,metin:"…ve artık kavuşuyorduk."},{p:.21,sure:.095,metin:"Tünelin sonunda bir ışık belirdi."},{p:.42,sure:.08,metin:"Ve tren yavaşladı."},{p:.55,sure:.08,metin:"Kapılar açıldı."},{p:.66,sure:.08,metin:"İçeriden sen çıktın."},{p:.78,sure:.08,metin:"Kalabalık bir anda sustu."}],finalYazilari:["Bir metro kapısı açıldı.","Ve hayatımızın en güzel yolculuğu başladı."],defterDavet:"Anı defterimizi aç"},defter:{kapakUstu:"ilk günden bugüne",kapakBaslik:"Anı Defterimiz",kapanisBaslik:"Buradan sonrası şimdilik boş",kapanisMetin:"Birlikte biriktireceğimiz güzel anılar için bekliyor.",tekrarIzle:"Başa dön",detayIpucu:"Fotoğrafa dokun",kaydirmaIpucu:"Kaydır"},ses:{ac:"Müziği aç",kapat:"Müziği kapat"},gezinme:{deftereGit:"Anı Defteri",hikayeyeGit:"Hikâye"},renkler:{istasyonIsik:14998732,hatVurgusu:14173242,metroGovde:12173511,metroIc:16767392,kadinKiyafet:15921388,kadinAlt:2828848,kadinCanta:2040102,kadinSac:3810848,erkekKiyafet:12172480,erkekAlt:2962240,erkekSac:8216381,ten:14069392,sicakFinal:16758903,defterVurgu:15250592},isik:{ortam:.85,tavan:1.05,metroIc:4.2,farlar:3,finalSicak:1.5},kaydirma:{hikayeVh:780,defterAniBasinaVh:46,defterEkVh:220},kalite:{masaustu:{pixelRatio:2,golgeler:!0,golgeCozunurluk:1024,tozParcacik:1400,bokehParcacik:900,trenYolcu:7,antialias:!0},mobil:{pixelRatio:1.7,golgeler:!0,golgeCozunurluk:512,tozParcacik:420,bokehParcacik:340,trenYolcu:4,antialias:!1}}};class y0{constructor(){b(this,"durum");b(this,"kalite");b(this,"azHareket");b(this,"dinleyiciler",new Set);b(this,"zamanlayici",0);b(this,"planla",()=>{window.clearTimeout(this.zamanlayici),this.zamanlayici=window.setTimeout(()=>{const t=this.olc(),e=t.mobil!==this.durum.mobil;this.durum=t,e&&(this.kalite=this.kaliteSec()),this.dinleyiciler.forEach(n=>n(this.durum))},120)});this.azHareket=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.durum=this.olc(),this.kalite=this.kaliteSec(),window.addEventListener("resize",this.planla,{passive:!0}),window.addEventListener("orientationchange",this.planla,{passive:!0}),"ResizeObserver"in window&&new ResizeObserver(this.planla).observe(document.documentElement)}olc(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=window.matchMedia("(pointer: coarse)").matches,s=t/Math.max(1,e);return{genislik:t,yukseklik:e,enBoy:s,mobil:n||t<820,yatay:t>e,dar:t<560,darKadraj:s<1.15}}kaliteSec(){const t=this.durum.mobil?Mt.kalite.mobil:Mt.kalite.masaustu;return(navigator.hardwareConcurrency??4)<=4&&!this.durum.mobil?{...Mt.kalite.mobil}:{...t}}dinle(t){return this.dinleyiciler.add(t),()=>this.dinleyiciler.delete(t)}pikselOrani(){return Math.min(window.devicePixelRatio||1,this.kalite.pixelRatio)}}class M0{constructor(t,e){b(this,"renderer");b(this,"canvas");b(this,"ekran");b(this,"gorunur",!0);this.canvas=t,this.ekran=e,this.renderer=new Rm({canvas:t,antialias:e.kalite.antialias,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setClearColor(328970,1),this.renderer.outputColorSpace=Ae,this.renderer.toneMapping=yl,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=e.kalite.golgeler,this.renderer.shadowMap.type=El,this.renderer.info.autoReset=!0,this.boyutla(),e.dinle(()=>this.boyutla()),document.addEventListener("visibilitychange",()=>{this.gorunur=document.visibilityState==="visible"}),this.renderer.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault()})}get cizilebilir(){return this.gorunur}boyutla(){const{genislik:t,yukseklik:e}=this.ekran.durum;this.renderer.setPixelRatio(this.ekran.pikselOrani()),this.renderer.setSize(t,e,!1)}ciz(t,e){this.renderer.render(t,e)}}const Nt=i=>i<0?0:i>1?1:i,tl=(i,t,e)=>i<t?t:i>e?e:i,ae=(i,t,e)=>i+(t-i)*e,Yn=(i,t,e)=>i===t?0:(e-i)/(t-i),On=(i,t,e,n,s)=>ae(n,s,Nt(Yn(t,e,i))),ca=i=>{const t=Nt(i);return t*t*(3-2*t)},Qe=i=>{const t=Nt(i);return t*t*t*(t*(t*6-15)+10)},Ui=i=>{const t=Nt(i);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},ac=i=>1-Math.pow(1-Nt(i),3),v0=i=>Math.pow(Nt(i),3),ha=i=>-(Math.cos(Math.PI*Nt(i))-1)/2,ua=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),We=(i,t,e)=>Nt(Yn(t,e,i));class _0{constructor(t){b(this,"ham",0);b(this,"yumusak",0);b(this,"hiz",0);b(this,"alan");b(this,"kilitli",!1);b(this,"takipHizi",7.5);this.alan=t}uzunlukAyarla(t){this.alan.style.height=`${t}vh`}sifirla(){window.scrollTo(0,0),this.ham=0,this.yumusak=0,this.hiz=0}kilitle(t){this.kilitli=t,document.documentElement.classList.toggle("kaydirma-kilitli",t)}get kilitliMi(){return this.kilitli}takipHiziAyarla(t){this.takipHizi=t}guncelle(t){if(!this.kilitli){const n=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);this.ham=Nt(window.scrollY/n)}const e=this.yumusak;this.yumusak=ua(this.yumusak,this.ham,this.takipHizi,t),Math.abs(this.yumusak-this.ham)<5e-5&&(this.yumusak=this.ham),this.hiz=t>0?(this.yumusak-e)/t:0}anindaOturt(){const t=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);this.ham=Nt(window.scrollY/t),this.yumusak=this.ham,this.hiz=0}}class Io extends xa{constructor(){super();const t=new Qt;t.deleteAttribute("uv");const e=new Pt({side:we}),n=new Pt,s=new ln(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const a=new rt(t,e);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new rt(t,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new rt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const A=new rt(t,n);A.position.set(6.167,.857,7.803),A.rotation.set(0,.561,0),A.scale.set(3.927,6.285,3.687),this.add(A);const l=new rt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const c=new rt(t,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const h=new rt(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new rt(t,Ti(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const u=new rt(t,Ti(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const m=new rt(t,Ti(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const x=new rt(t,Ti(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new rt(t,Ti(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const d=new rt(t,Ti(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ti(i){const t=new Be;return t.color.setScalar(i),t}const B0=`
  uniform float uZaman;
  uniform vec3 uAlan;
  uniform vec3 uMerkez;
  uniform float uBoyut;
  uniform float uPikselOrani;
  attribute float aFaz;
  attribute float aHiz;
  attribute float aBoyut;
  varying float vSonme;

  void main() {
    vec3 p = position;
    // Dikey sürüklenme: alan yüksekliğinde sarmalanır, birikme olmaz.
    float y = mod(p.y - uZaman * aHiz + uAlan.y * 0.5, uAlan.y) - uAlan.y * 0.5;
    p.y = y;
    p.x += sin(uZaman * 0.32 + aFaz) * 0.42;
    p.z += cos(uZaman * 0.24 + aFaz * 1.7) * 0.42;
    p += uMerkez;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uBoyut * aBoyut * uPikselOrani * (14.0 / max(1.0, -mv.z));
    // Uzaktakiler söner, kameraya çok yakın olanlar da yumuşar.
    vSonme = smoothstep(90.0, 12.0, -mv.z) * smoothstep(0.6, 3.0, -mv.z);
  }
`,H0=`
  uniform vec3 uRenk;
  uniform float uOpaklik;
  varying float vSonme;

  void main() {
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = dot(d, d);
    if (r > 0.25) discard;
    float a = smoothstep(0.25, 0.0, r);
    gl_FragColor = vec4(uRenk, a * uOpaklik * vSonme);
  }
`;class To{constructor(t,e){b(this,"nesne");b(this,"mat");b(this,"geo");const n=t.sayi,s=new Float32Array(n*3),a=new Float32Array(n),r=new Float32Array(n),o=new Float32Array(n);for(let A=0;A<n;A++)s[A*3]=(Math.random()-.5)*t.alan.x,s[A*3+1]=(Math.random()-.5)*t.alan.y,s[A*3+2]=(Math.random()-.5)*t.alan.z,a[A]=Math.random()*Math.PI*2,r[A]=t.dusmeHizi*(.4+Math.random()*1.2),o[A]=.5+Math.random()*1.1;this.geo=new Ne,this.geo.setAttribute("position",new Pe(s,3)),this.geo.setAttribute("aFaz",new Pe(a,1)),this.geo.setAttribute("aHiz",new Pe(r,1)),this.geo.setAttribute("aBoyut",new Pe(o,1)),this.geo.boundingSphere=new ui(t.merkez.clone(),Math.max(t.alan.x,t.alan.y,t.alan.z)),this.mat=new Cn({uniforms:{uZaman:{value:0},uAlan:{value:t.alan.clone()},uMerkez:{value:t.merkez.clone()},uRenk:{value:new Ot(t.renk)},uBoyut:{value:t.boyut},uOpaklik:{value:t.opaklik},uPikselOrani:{value:e}},vertexShader:B0,fragmentShader:H0,transparent:!0,depthWrite:!1,blending:Xn}),this.nesne=new Dm(this.geo,this.mat),this.nesne.frustumCulled=!1,this.nesne.renderOrder=5}guncelle(t,e){this.mat.uniforms.uZaman.value=t,e!==void 0&&(this.mat.uniforms.uOpaklik.value=e)}pikselOraniAyarla(t){this.mat.uniforms.uPikselOrani.value=t}birak(){this.geo.dispose(),this.mat.dispose()}}const oo=[];function Ke(i){return oo.push(i),i}function w0(){oo.forEach(i=>i.dispose()),oo.length=0}function Je(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");if(!n)throw new Error("2D bağlamı alınamadı");return{c:e,ctx:n}}function As(i,t={}){const e=t.genislik??1024,n=t.yukseklik??256,{c:s,ctx:a}=Je(e,n);a.fillStyle=t.arkaPlan??"#0f1620",a.fillRect(0,0,e,n),t.cerceve&&(a.strokeStyle=t.cerceve,a.lineWidth=Math.max(3,n*.03),a.strokeRect(a.lineWidth/2,a.lineWidth/2,e-a.lineWidth,n-a.lineWidth));const r=t.fontBoyu??n*.42;a.fillStyle=t.renk??"#e9f1f7",a.font=`${t.kalinlik??500} ${r}px ${t.fontAilesi??"Helvetica, Arial, sans-serif"}`,a.textBaseline="middle",a.textAlign=t.hizala??"center";const o=t.harfAraligi??0,A=r*1.25,l=n/2-(i.length-1)*A/2;i.forEach((h,f)=>{const u=l+f*A;if(o===0){const m=t.hizala==="left"?e*.06:t.hizala==="right"?e*.94:e/2;a.fillText(h,m,u)}else{const m=[...h],x=m.reduce((d,B)=>d+a.measureText(B).width+o,-o);let p=e/2-x/2;a.textAlign="left";for(const d of m)a.fillText(d,p,u),p+=a.measureText(d).width+o;a.textAlign=t.hizala??"center"}});const c=new Ze(s);return c.colorSpace=Ae,c.anisotropy=4,c.needsUpdate=!0,Ke(c)}function Ea(i=1){const{c:e,ctx:n}=Je(128,128),s=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,`rgba(255,255,255,${i})`),s.addColorStop(.25,`rgba(255,255,255,${.45*i})`),s.addColorStop(.6,`rgba(255,255,255,${.09*i})`),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const a=new Ze(e);return a.colorSpace=Ae,Ke(a)}function R0(){const{c:e,ctx:n}=Je(512,512);n.fillStyle="#8e8471",n.fillRect(0,0,512,512);const s=26,a=512/s,r=512/6;for(let c=0;c<s;c++){const h=c%2===0?0:r/2;for(let f=-1;f<7;f++){const u=f*r+h,m=.86+(c*7+f*13)%13*.021;n.fillStyle=`rgb(${Math.round(178*m)},${Math.round(166*m)},${Math.round(144*m)})`,n.fillRect(u+1,c*a+1,r-2,a-2)}}const o=n.getImageData(0,0,512,512),A=o.data;for(let c=0;c<A.length;c+=4){const h=(Math.random()-.5)*26;A[c]+=h,A[c+1]+=h,A[c+2]+=h}n.putImageData(o,0,0);const l=new Ze(e);return l.colorSpace=Ae,l.wrapS=Tn,l.wrapT=Tn,l.anisotropy=8,Ke(l)}function b0(){const{c:t,ctx:e}=Je(512,512);e.fillStyle="#a9a396",e.fillRect(0,0,512,512);const n=4,s=512/n;for(let A=0;A<n;A++)for(let l=0;l<n;l++){const c=.94+(A*5+l*11)%7*.017;e.fillStyle=`rgba(255,255,255,${(c-.94)*2.6})`,e.fillRect(l*s,A*s,s,s),e.fillStyle=(A+l)%2===0?"rgba(70,66,60,0.5)":"rgba(90,86,78,0.34)",e.beginPath(),e.moveTo(l*s+s/2,A*s+s*.16),e.lineTo(l*s+s*.84,A*s+s/2),e.lineTo(l*s+s/2,A*s+s*.84),e.lineTo(l*s+s*.16,A*s+s/2),e.closePath(),e.fill()}e.strokeStyle="rgba(50,46,42,0.32)",e.lineWidth=2;for(let A=0;A<=n;A++)e.beginPath(),e.moveTo(0,A*s),e.lineTo(512,A*s),e.stroke(),e.beginPath(),e.moveTo(A*s,0),e.lineTo(A*s,512),e.stroke();const a=e.getImageData(0,0,512,512),r=a.data;for(let A=0;A<r.length;A+=4){const l=(Math.random()-.5)*20;r[A]+=l,r[A+1]+=l,r[A+2]+=l}e.putImageData(a,0,0);const o=new Ze(t);return o.colorSpace=Ae,o.wrapS=Tn,o.wrapT=Tn,o.anisotropy=8,Ke(o)}function I0(){const{c:t,ctx:e}=Je(256,256);e.fillStyle="#4b4842",e.fillRect(0,0,256,256);for(let s=0;s<16;s++){const a=.86+s%3*.05;e.fillStyle=`rgba(255,255,255,${.05*a})`,e.fillRect(0,s*16,256,13),e.fillStyle="rgba(0,0,0,0.32)",e.fillRect(0,s*16+13,256,3)}const n=new Ze(t);return n.colorSpace=Ae,n.wrapS=Tn,n.wrapT=Tn,n.anisotropy=4,Ke(n)}function el(i){const{c:n,ctx:s}=Je(1024,288);s.fillStyle="#f2f1ee",s.fillRect(0,0,1024,288),s.fillStyle="#c0392b",s.fillRect(0,0,1024,288*.3),s.strokeStyle="#b9b6ae",s.lineWidth=6,s.strokeRect(3,3,1018,282),s.fillStyle="#23272b",s.textAlign="center",s.textBaseline="middle";const a=288*.34;s.font=`600 ${a}px Helvetica, Arial, sans-serif`;const r=[...i],o=a*.06,A=r.reduce((h,f)=>h+s.measureText(f).width+o,-o);let l=1024/2-A/2;s.textAlign="left";for(const h of r)s.fillText(h,l,288*.66),l+=s.measureText(h).width+o;const c=new Ze(n);return c.colorSpace=Ae,c.anisotropy=8,Ke(c)}function T0(i){const{c:n,ctx:s}=Je(256,384),a=[["#2b4a6f","#7fa8c9"],["#6d2b3a","#d99a86"],["#2f5c4a","#9fc9a8"],["#5a4a2b","#d8c08a"]],[r,o]=a[i%a.length],A=s.createLinearGradient(0,0,256,384);A.addColorStop(0,r),A.addColorStop(1,o),s.fillStyle=A,s.fillRect(0,0,256,384),s.fillStyle="rgba(255,255,255,0.22)",s.fillRect(256*.12,384*.62,256*.76,384*.05),s.fillRect(256*.12,384*.72,256*.5,384*.035),s.fillStyle="rgba(0,0,0,0.2)",s.fillRect(0,0,256,384*.06);const l=new Ze(n);return l.colorSpace=Ae,Ke(l)}const Do=(async()=>{if("fonts"in document)try{await Promise.all([document.fonts.load("400 64px Caveat"),document.fonts.load("600 64px Caveat")]),await document.fonts.ready}catch{}})();function tr(i,t={}){const e=t.genislik??768,n=t.yukseklik??256,{c:s,ctx:a}=Je(e,n),r=()=>{a.clearRect(0,0,e,n);const A=t.fontBoyu??n*.5;a.font=`500 ${A}px Caveat, "Segoe Script", "Bradley Hand", cursive`,a.textBaseline="middle",a.textAlign=t.hizala??"center";const l=e*.92,c=[];for(const u of i){if(a.measureText(u).width<=l){c.push(u);continue}let m="";for(const x of u.split(" ")){const p=m?`${m} ${x}`:x;a.measureText(p).width>l&&m?(c.push(m),m=x):m=p}m&&c.push(m)}const h=A*1.12,f=n/2-(c.length-1)*h/2;c.forEach((u,m)=>{const x=t.hizala==="left"?e*.04:e/2,p=f+m*h;a.save(),a.translate(x,p),a.rotate(t.egim??-.018),a.fillStyle=t.renk??"rgba(41, 52, 78, 0.34)",a.fillText(u,1.5,1.5),a.fillStyle=t.renk??"rgba(31, 42, 68, 0.92)",a.fillText(u,0,0),a.restore()})};r();const o=new Ze(s);return o.colorSpace=Ae,o.anisotropy=8,Do.then(()=>{r(),o.needsUpdate=!0}),Ke(o)}function D0(i=0){const{c:n,ctx:s}=Je(512,700);s.fillStyle="#f2ead8",s.fillRect(0,0,512,700);const a=s.getImageData(0,0,512,700),r=a.data;for(let c=0;c<r.length;c+=4){const h=(Math.random()-.5)*15;r[c]+=h,r[c+1]+=h*.95,r[c+2]+=h*.8}s.putImageData(a,0,0);for(let c=0;c<26;c++){const h=Math.random()*512,f=Math.random()*700,u=20+Math.random()*80,m=s.createRadialGradient(h,f,0,h,f,u);m.addColorStop(0,`rgba(196,170,124,${.03+Math.random()*.04})`),m.addColorStop(1,"rgba(196,170,124,0)"),s.fillStyle=m,s.fillRect(h-u,f-u,u*2,u*2)}const o=s.createLinearGradient(0,0,512,0);o.addColorStop(0,"rgba(150,124,88,0.16)"),o.addColorStop(.12,"rgba(150,124,88,0)"),o.addColorStop(.88,"rgba(150,124,88,0)"),o.addColorStop(1,"rgba(150,124,88,0.16)"),s.fillStyle=o,s.fillRect(0,0,512,700);const A=s.createLinearGradient(0,0,0,700);A.addColorStop(0,"rgba(150,124,88,0.14)"),A.addColorStop(.1,"rgba(150,124,88,0)"),A.addColorStop(.9,"rgba(150,124,88,0)"),A.addColorStop(1,"rgba(150,124,88,0.14)"),s.fillStyle=A,s.fillRect(0,0,512,700);const l=new Ze(n);return l.colorSpace=Ae,l.anisotropy=8,Ke(l)}function C0(){const{c:e,ctx:n}=Je(128,64);n.fillStyle="rgba(226, 210, 176, 0.62)",n.fillRect(0,0,128,64);for(let a=0;a<9;a++)n.fillStyle=`rgba(255,255,255,${.05+Math.random()*.09})`,n.fillRect(Math.random()*128,0,2+Math.random()*5,64);n.fillStyle="rgba(160,140,104,0.28)",n.fillRect(0,0,128,2),n.fillRect(0,62,128,2);const s=new Ze(e);return s.colorSpace=Ae,Ke(s)}function nl(i,t){const{c:s,ctx:a}=Je(700,950);a.fillStyle="#5d2130",a.fillRect(0,0,700,950),a.globalAlpha=.16;for(let f=-950;f<700;f+=3)a.strokeStyle=f%6===0?"#000000":"#ffffff",a.lineWidth=1,a.beginPath(),a.moveTo(f,0),a.lineTo(f+950,950),a.stroke();for(let f=0;f<1650;f+=3)a.strokeStyle=f%6===0?"#ffffff":"#000000",a.beginPath(),a.moveTo(f,0),a.lineTo(f-950,950),a.stroke();a.globalAlpha=1;const r=a.getImageData(0,0,700,950),o=r.data;for(let f=0;f<o.length;f+=4){const u=(Math.random()-.5)*22;o[f]+=u,o[f+1]+=u*.8,o[f+2]+=u*.8}a.putImageData(r,0,0);for(const[f,u]of[[0,0],[700,0],[0,950],[700,950]]){const m=a.createRadialGradient(f,u,0,f,u,210);m.addColorStop(0,"rgba(255,220,190,0.16)"),m.addColorStop(1,"rgba(255,220,190,0)"),a.fillStyle=m,a.fillRect(f-210,u-210,420,420)}const A=700*.075;a.strokeStyle="rgba(214, 178, 122, 0.72)",a.lineWidth=3,a.strokeRect(A,A,700-A*2,950-A*2),a.strokeStyle="rgba(214, 178, 122, 0.34)",a.lineWidth=1.5,a.strokeRect(A+9,A+9,700-(A+9)*2,950-(A+9)*2),a.strokeStyle="rgba(0,0,0,0.3)",a.lineWidth=2,a.strokeRect(A+2.5,A+2.5,700-A*2,950-A*2);const l=a.getImageData(0,0,700,950),c=()=>{a.putImageData(l,0,0),a.save(),a.textAlign="center",a.textBaseline="middle",a.translate(700/2,950*.44),a.rotate(-.02),a.font=`600 ${700*.155}px Caveat, "Segoe Script", cursive`,a.fillStyle="rgba(0,0,0,0.42)",a.fillText(i,3,4);const f=a.createLinearGradient(-700/2,-40,700/2,40);f.addColorStop(0,"#c79a5c"),f.addColorStop(.45,"#f0d59a"),f.addColorStop(.6,"#e3c286"),f.addColorStop(1,"#b98d52"),a.fillStyle=f,a.fillText(i,0,0),a.restore(),a.save(),a.textAlign="center",a.textBaseline="middle",a.font=`400 ${700*.052}px Caveat, "Segoe Script", cursive`,a.fillStyle="rgba(226, 196, 148, 0.72)",a.fillText(t,700/2,950*.56),a.restore()};c();const h=new Ze(s);return h.colorSpace=Ae,h.anisotropy=8,Do.then(()=>{c(),h.needsUpdate=!0}),Ke(h)}class k0{constructor(t,e=1320,n=520){b(this,"doku");b(this,"ctx");b(this,"g");b(this,"y");b(this,"satirlar");b(this,"duzenCache",null);b(this,"toplamGenislik",0);b(this,"cizilenPiksel",-1);b(this,"sonOran",0);this.satirlar=t,this.g=e,this.y=n;const{c:s,ctx:a}=Je(e,n);this.ctx=a,this.doku=new Ze(s),this.doku.colorSpace=Ae,this.doku.anisotropy=8,Ke(this.doku),this.ciz(0),Do.then(()=>{this.duzenCache=null,this.cizilenPiksel=-1,this.ciz(this.sonOran)})}font(t){return`500 ${t.fontBoyu}px Caveat, "Segoe Script", "Bradley Hand", cursive`}duzen(){if(this.duzenCache)return this.duzenCache;const t=this.g*.94,e=[];for(const r of this.satirlar){if(this.ctx.font=this.font(r),this.ctx.measureText(r.metin).width<=t){e.push({metin:r.metin,satir:r,ilk:!0});continue}let o="",A=!0;for(const l of r.metin.split(" ")){const c=o?`${o} ${l}`:l;this.ctx.measureText(c).width>t&&o?(e.push({metin:o,satir:r,ilk:A}),A=!1,o=l):o=c}o&&e.push({metin:o,satir:r,ilk:A})}let n=0;e.forEach((r,o)=>{n+=r.satir.fontBoyu*1.2,o>0&&r.ilk&&(n+=r.satir.ustBosluk??0)});let s=this.y/2-n/2;const a=e.map((r,o)=>{o>0&&r.ilk&&(s+=r.satir.ustBosluk??0),s+=r.satir.fontBoyu*1.2,this.ctx.font=this.font(r.satir);const A=this.ctx.measureText(r.metin).width;return{metin:r.metin,x:(this.g-A)/2,y:s-r.satir.fontBoyu*.34,genislik:A,satir:r.satir}});return this.toplamGenislik=a.reduce((r,o)=>r+o.genislik,0),this.duzenCache=a,a}get toplamUzunluk(){return this.duzen(),this.toplamGenislik}ciz(t){const e=this.duzen(),n=Nt(t)*this.toplamGenislik;if(this.cizilenPiksel>=0&&Math.abs(n-this.cizilenPiksel)<1.2&&t<1)return;this.cizilenPiksel=n,this.ctx.clearRect(0,0,this.g,this.y),this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic";let s=0;for(const a of e){if(s>=n)break;const r=Math.min(a.genislik,n-s),o=r>=a.genislik-.01;this.ctx.save(),o||(this.ctx.beginPath(),this.ctx.rect(a.x-4,a.y-a.satir.fontBoyu*1.05,r+1.5,a.satir.fontBoyu*1.6),this.ctx.clip()),this.ctx.translate(a.x,a.y),this.ctx.rotate(-.014),this.ctx.font=this.font(a.satir),this.ctx.fillStyle="rgba(41, 52, 78, 0.28)",this.ctx.fillText(a.metin,1.4,1.4),this.ctx.fillStyle=a.satir.renk??"rgba(31, 42, 68, 0.92)",this.ctx.fillText(a.metin,0,0),this.ctx.restore(),!o&&r>1&&(this.ctx.save(),this.ctx.fillStyle="rgba(31, 42, 68, 0.5)",this.ctx.beginPath(),this.ctx.arc(a.x+r,a.y-a.satir.fontBoyu*.16,a.satir.fontBoyu*.028,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()),s+=a.genislik}this.doku.needsUpdate=!0}ayarla(t){const e=this.cizilenPiksel<0?0:this.cizilenPiksel;return this.sonOran=Nt(t),this.ciz(this.sonOran),Math.max(0,this.cizilenPiksel-e)}}function U0(){const i=new tc;return i.moveTo(0,.52),i.bezierCurveTo(0,.84,-.36,1.08,-.72,1.08),i.bezierCurveTo(-1.28,1.08,-1.28,.36,-1.28,.36),i.bezierCurveTo(-1.28,-.12,-.82,-.62,0,-1.18),i.bezierCurveTo(.82,-.62,1.28,-.12,1.28,.36),i.bezierCurveTo(1.28,.36,1.28,1.08,.72,1.08),i.bezierCurveTo(.36,1.08,0,.84,0,.52),i}const er=[{p:.44,guc:.55},{p:.6,guc:1},{p:.74,guc:.7}];class Q0{constructor(t,e){b(this,"sahne",new xa);b(this,"kamera");b(this,"tikCagrisi",null);b(this,"kilitGrup",new de);b(this,"govdeGrup",new de);b(this,"kancaGrup",new de);b(this,"anahtar",new de);b(this,"hale");b(this,"haleMat");b(this,"metalMat");b(this,"anahtarMat");b(this,"kazimaMat");b(this,"zerre");b(this,"ekran");b(this,"pmrem");b(this,"ortamHedef");b(this,"atilanlar",[]);b(this,"fareHedef",new ct);b(this,"fare",new ct);b(this,"sarsinti",0);b(this,"basari",0);b(this,"calinanTik",0);b(this,"fareOku",t=>{this.fareHedef.set(t.clientX/window.innerWidth*2-1,t.clientY/window.innerHeight*2-1)});this.ekran=t,this.sahne.background=new Ot(657161),this.sahne.fog=new vs(657161,.055),this.pmrem=new xs(e);const n=new Io;this.ortamHedef=this.pmrem.fromScene(n,.02),this.sahne.environment=this.ortamHedef.texture,this.sahne.environmentIntensity=.75,n.traverse(ut=>{ut instanceof rt&&(ut.geometry.dispose(),Array.isArray(ut.material)?ut.material.forEach(Ut=>Ut.dispose()):ut.material.dispose())}),this.kamera=new De(42,t.durum.enBoy,.1,60),this.kamera.position.set(0,0,6.2),this.metalMat=new Pt({color:12159566,roughness:.28,metalness:.95,emissive:new Ot(2757644),emissiveIntensity:.35}),this.anahtarMat=new Pt({color:11040831,roughness:.34,metalness:.92});const s=new Pt({color:1445644,roughness:.55,metalness:.4});this.atilanlar.push(this.metalMat,this.anahtarMat,s);const a=new wo(U0(),{depth:.5,bevelEnabled:!0,bevelSegments:5,bevelSize:.14,bevelThickness:.12,curveSegments:24});a.center(),a.computeVertexNormals();const r=new rt(a,this.metalMat);r.scale.setScalar(.6),this.govdeGrup.add(r),this.atilanlar.push(a);const o=1.08*.6,A=(.5/2+.12)*.6,l=new on(.075,.075,.05,20),c=new rt(l,s);c.rotation.x=Math.PI/2,c.position.set(0,-.1,A),this.govdeGrup.add(c);const h=new Qt(.055,.13,.05),f=new rt(h,s);f.position.set(0,-.19,A),this.govdeGrup.add(f),this.atilanlar.push(l,h);const u=new dn(.1,.014,8,24),m=new rt(u,this.metalMat);m.position.set(0,-.1,A),this.govdeGrup.add(m),this.atilanlar.push(u);const x=As([Mt.kilit.kazima],{genislik:512,yukseklik:128,arkaPlan:"rgba(0,0,0,0)",renk:"rgba(38, 20, 10, 0.9)",fontBoyu:80,harfAraligi:4});this.kazimaMat=new Be({map:x,transparent:!0,depthWrite:!1,opacity:.8});const p=new pe(.8,.2),d=new rt(p,this.kazimaMat);d.position.set(0,.3,A+.002),this.govdeGrup.add(d),this.atilanlar.push(p,this.kazimaMat);const B=.056,M=.27,E=new on(B,B,.42,16),Q=new dn(M,B,12,32,Math.PI);this.atilanlar.push(E,Q);const R=new rt(E,this.metalMat);R.position.set(0,.21,0);const w=new rt(Q,this.metalMat);w.position.set(M,.42,0);const D=new rt(E,this.metalMat);D.position.set(M*2,.26,0),D.scale.y=.76,this.kancaGrup.add(R,w,D),this.kancaGrup.position.set(-M,o-.3,0),this.govdeGrup.add(this.kancaGrup),this.kilitGrup.add(this.govdeGrup),this.sahne.add(this.kilitGrup);const v=new on(.021,.021,.52,12),S=new rt(v,this.anahtarMat);S.rotation.x=Math.PI/2,S.position.z=.03,this.anahtar.add(S);const I=new dn(.098,.026,10,26),V=new rt(I,this.anahtarMat);V.position.z=.36,this.anahtar.add(V);const P=new on(.038,.038,.05,12),G=new rt(P,this.anahtarMat);G.rotation.x=Math.PI/2,G.position.z=.22,this.anahtar.add(G);const Y=new Qt(.02,.085,.045);for(const ut of[-.14,-.21]){const Ut=new rt(Y,this.anahtarMat);Ut.position.set(0,-.052,ut),this.anahtar.add(Ut)}this.atilanlar.push(v,I,P,Y),this.anahtar.scale.setScalar(1.15),this.sahne.add(this.anahtar);const j=Ea(.8);this.haleMat=new Be({map:j,transparent:!0,blending:Xn,depthWrite:!1,color:16754807,opacity:.34});const W=new pe(7,7);this.hale=new rt(W,this.haleMat),this.hale.position.z=-1.5,this.kilitGrup.add(this.hale),this.atilanlar.push(W,this.haleMat),this.zerre=new To({sayi:Math.round(t.kalite.bokehParcacik*.7),alan:new T(15,11,9),merkez:new T(0,0,-1),renk:16763296,boyut:2.1,opaklik:.42,dusmeHizi:-.07},t.pikselOrani()),this.sahne.add(this.zerre.nesne);const F=new ln(16757880,24,20,2);F.position.set(-2.8,2.4,3.2);const at=new ln(16743808,14,18,2);at.position.set(3.2,-1.2,2);const ft=new ln(8165119,10,18,2);ft.position.set(.8,1.4,-2.6),this.sahne.add(F,at,ft,new sc(2825498,1.2)),this.kilidiYerlestir(),window.addEventListener("pointermove",this.fareOku,{passive:!0})}kilidiYerlestir(){const t=window.innerHeight<640;this.kilitGrup.position.y=t?.36:1.66,this.kilitGrup.scale.setScalar(t?.62:.9),this.kamera.lookAt(0,this.kilitGrup.position.y*.4,0)}hataVer(){this.sarsinti=1}basariAyarla(t){const e=Nt(t);for(;this.calinanTik<er.length&&e>=er[this.calinanTik].p;)this.tikCagrisi?.(er[this.calinanTik].guc),this.calinanTik++;e<.01&&(this.calinanTik=0),this.basari=e}guncelle(t,e){const n=this.ekran.azHareket;this.fare.x=ua(this.fare.x,this.fareHedef.x,4,t),this.fare.y=ua(this.fare.y,this.fareHedef.y,4,t),this.sarsinti=Math.max(0,this.sarsinti-t*2.4);const s=this.sarsinti*this.sarsinti,a=this.basari,r=n?0:1,o=Math.sin(e*.5)*.05*r;this.govdeGrup.rotation.y=(n?.22:Math.sin(e*.32)*.3)+this.fare.x*.3+s*Math.sin(e*44)*.14,this.govdeGrup.rotation.x=(n?0:Math.sin(e*.24)*.07)+this.fare.y*.12,this.govdeGrup.rotation.z=s*Math.sin(e*38)*.1,this.govdeGrup.position.set(s*Math.sin(e*41)*.09,o,0);const A=Qe(On(a,.6,.78,0,1));this.kancaGrup.rotation.y=-1.55*A,this.kancaGrup.position.y=1.08*.6-.3+A*.14;const l=ac(On(a,.76,1,0,1));this.kilitGrup.scale.setScalar((window.innerHeight<640?.62:.9)*(1+l*1.5)),this.kilitGrup.position.z=l*2.6,this.metalMat.emissiveIntensity=.35+l*5,this.metalMat.opacity=1-Qe(On(a,.82,1,0,1));const c=a>.8;this.metalMat.transparent!==c&&(this.metalMat.transparent=c,this.metalMat.needsUpdate=!0),this.kazimaMat.opacity=.8*(1-l);const h=new T(.92,-.52,.72),f=Ui(On(a,0,.32,0,1)),u=Ui(On(a,.32,.45,0,1)),m=Ui(On(a,.46,.62,0,1)),x=Ui(On(a,.78,1,0,1)),p=ae(.68,.42,u);this.anahtar.position.set(ae(h.x+s*Math.sin(e*37)*.1,0,f),ae(h.y+(n?0:Math.sin(e*.62)*.05),-.1,f)+this.kilitGrup.position.y,ae(h.z,p,f)),this.anahtar.rotation.set(ae(n?.1:Math.sin(e*.4)*.16,0,f),ae(.55,0,f),ae(.4,-Math.PI/2*m,f)),this.anahtar.scale.setScalar(1.15*(1-x*.85)*(window.innerHeight<640?.62:.9)),this.anahtarMat.opacity=1-x;const d=x>.01;this.anahtarMat.transparent!==d&&(this.anahtarMat.transparent=d,this.anahtarMat.needsUpdate=!0),this.haleMat.opacity=(.3+s*.3+l*.7)*(1-Qe(On(a,.9,1,0,1))),this.hale.scale.setScalar(1+l*1.6),this.zerre.guncelle(n?0:e,ae(.42,.95,l)),this.kamera.position.x=this.fare.x*.4,this.kamera.position.y=-this.fare.y*.26,this.kamera.position.z=ae(6.2,4.4,l),this.kamera.lookAt(0,this.kilitGrup.position.y*.4*(1-l),0)}boyutlandir(){this.kamera.aspect=this.ekran.durum.enBoy,this.kamera.updateProjectionMatrix(),this.kilidiYerlestir(),this.zerre.pikselOraniAyarla(this.ekran.pikselOrani())}birak(){window.removeEventListener("pointermove",this.fareOku),this.atilanlar.forEach(t=>t.dispose()),this.zerre.birak(),this.ortamHedef.dispose(),this.pmrem.dispose(),this.sahne.clear()}}const At={rayZ:.7175,balastY:-1.15,rayUstY:-1,peronY:0,peronKenarZ:1.8,peronArkaZ:11,tavanY:4.4,hatAZ:0,ortaKolonZ:-2.9,hatBZ:-5.8,karsiPeronOnZ:-7.7,karsiPeronArkaZ:-14.6,karsiTavanY:3.25,xBas:-46,xSon:78,tunelAgziX:78,tunelSonX:250,arkaTunelX:-46,arkaTunelSonX:-200,tunelYaricap:2.55,tunelMerkezY:.75};class P0{constructor(t){b(this,"grup",new de);b(this,"tunelIsikMesh",[]);b(this,"tunelIsikMat");b(this,"tabelaMat",[]);b(this,"rayMat");b(this,"atilanlar",[]);b(this,"gecici",new ge);this.grup.name="istasyon";const e=At.xSon-At.xBas,n=(At.xSon+At.xBas)/2,s=At.tunelSonX-At.arkaTunelSonX,a=(At.tunelSonX+At.arkaTunelSonX)/2,r=R0();r.repeat.set(22,1.6);const o=new Pt({map:r,color:16183524,roughness:.82,metalness:.02}),A=b0();A.repeat.set(34,3);const l=new Pt({map:A,color:15920351,roughness:.66,metalness:.03}),c=I0();c.repeat.set(1,40);const h=new Pt({map:c,color:14209732,roughness:.9,metalness:.05,emissive:1841686,emissiveIntensity:1}),f=new Pt({color:11906719,roughness:.86}),u=new Pt({color:3355182,roughness:.88});this.atilanlar.push(o,l,h,f,u);const m=At.peronArkaZ-At.peronKenarZ;this.kutu(new Qt(e,1.2,m),l,n,-.6,At.peronKenarZ+m/2,{golgeAl:t.golgeler}),this.serit(e,n,At.peronKenarZ+.26),this.kutu(new Qt(e,1.2,.06),u,n,-.6,At.peronKenarZ-.03);const x=At.karsiPeronArkaZ-At.karsiPeronOnZ;this.kutu(new Qt(e,1.2,Math.abs(x)),l,n,-.6,At.karsiPeronOnZ+x/2),this.serit(e,n,At.karsiPeronOnZ-.26),this.kutu(new Qt(e,1.2,.06),u,n,-.6,At.karsiPeronOnZ+.03),this.rayMat=new Pt({color:9278618,roughness:.24,metalness:.9}),this.atilanlar.push(this.rayMat);const p=new Pt({color:2894632,roughness:.96});this.atilanlar.push(p);const d=new Pt({color:4866617,roughness:.92}),B=new Qt(.26,.14,2.5);this.atilanlar.push(d,B);for(const it of[At.hatAZ,At.hatBZ]){this.kutu(new Qt(s,.5,4.2),p,a,At.balastY-.25,it);const bt=.68,Z=Math.floor(s/bt),nt=new Ii(B,d,Z);for(let H=0;H<Z;H++)this.gecici.position.set(At.arkaTunelSonX+H*bt,At.balastY+.07,it),this.gecici.rotation.set(0,0,0),this.gecici.updateMatrix(),nt.setMatrixAt(H,this.gecici.matrix);nt.instanceMatrix.needsUpdate=!0,this.grup.add(nt);for(const H of[-.7175,At.rayZ])this.kutu(new Qt(s,.15,.09),this.rayMat,a,At.rayUstY-.075,it+H)}this.kutu(new Qt(e,5.6,.4),o,n,2.2,At.peronArkaZ,{golgeAl:t.golgeler}),this.kutu(new Qt(e,5.6,.4),o,n,2.2,At.karsiPeronArkaZ);const M=new Pt({color:3112070,roughness:.5,metalness:.15});this.atilanlar.push(M);const E=new Qt(.16,4,.06);this.atilanlar.push(E);const Q=Math.floor(e/9),R=new Ii(E,M,Q*2);let w=0;for(let it=0;it<Q;it++)for(const bt of[At.peronArkaZ-.23,At.karsiPeronArkaZ+.23])this.gecici.position.set(At.xBas+4+it*9,2,bt),this.gecici.rotation.set(0,0,0),this.gecici.updateMatrix(),R.setMatrixAt(w++,this.gecici.matrix);R.instanceMatrix.needsUpdate=!0,this.grup.add(R),this.kutu(new Qt(e,.5,.1),u,n,.25,At.peronArkaZ-.22);const D=At.peronArkaZ-At.ortaKolonZ+1;this.kutu(new Qt(e,.5,D),h,n,At.tavanY+.25,(At.peronArkaZ+At.ortaKolonZ-1)/2),this.kutu(new Qt(e,.4,Math.abs(At.karsiPeronArkaZ-At.ortaKolonZ)),h,n,At.karsiTavanY+.2,(At.karsiPeronArkaZ+At.ortaKolonZ)/2),this.kutu(new Qt(e,.55,.35),f,n,At.karsiTavanY-.05,At.ortaKolonZ+.2);const v=new Qt(.62,At.karsiTavanY+1.2,.62);this.atilanlar.push(v);const S=Math.floor(e/6),I=new Ii(v,f,S);for(let it=0;it<S;it++)this.gecici.position.set(At.xBas+4+it*6,(At.karsiTavanY+1.2)/2-1.2,At.ortaKolonZ),this.gecici.rotation.set(0,0,0),this.gecici.updateMatrix(),I.setMatrixAt(it,this.gecici.matrix);I.instanceMatrix.needsUpdate=!0,I.castShadow=t.golgeler,this.grup.add(I),this.kutu(new Qt(e,.85,1.1),f,n,-.72,At.ortaKolonZ);const V=new Qt(.66,.09,.66),P=new Pt({color:Mt.renkler.hatVurgusu,roughness:.55,emissive:new Ot(Mt.renkler.hatVurgusu).multiplyScalar(.1)});this.atilanlar.push(V,P);const G=new Ii(V,P,S);for(let it=0;it<S;it++)this.gecici.position.set(At.xBas+4+it*6,2.25,At.ortaKolonZ),this.gecici.updateMatrix(),G.setMatrixAt(it,this.gecici.matrix);G.instanceMatrix.needsUpdate=!0,this.grup.add(G);const Y=new Be({color:14273968});this.atilanlar.push(Y);const j=new Qt(e-2,.07,.26),W=new Qt(e-1.6,.22,.52);this.atilanlar.push(j,W);for(const[it,bt]of[[At.peronKenarZ+1.1,At.tavanY-.18],[At.peronArkaZ-2.4,At.tavanY-.18],[At.karsiPeronOnZ-1.4,At.karsiTavanY-.13]])this.kutu(W,f,n,bt+.09,it,{paylas:!0}),this.kutu(j,Y,n,bt,it,{paylas:!0});const F=Ea(.5),at=new Be({map:F,transparent:!0,blending:Xn,depthWrite:!1,opacity:.42}),ft=new pe(6,3.2);this.atilanlar.push(ft,at);const ut=Math.floor(e/6),Ut=new Ii(ft,at,ut*2);let Jt=0;for(let it=0;it<ut;it++)for(const bt of[At.peronKenarZ+1,At.peronArkaZ-2.2])this.gecici.position.set(At.xBas+3+it*6,At.tavanY-.32,bt),this.gecici.rotation.set(-Math.PI/2,0,0),this.gecici.updateMatrix(),Ut.setMatrixAt(Jt++,this.gecici.matrix);Ut.instanceMatrix.needsUpdate=!0,Ut.renderOrder=2,this.grup.add(Ut);const L=new Pt({color:1645599,roughness:.96,side:we});this.atilanlar.push(L),this.tunelIsikMat=new Be({map:F,transparent:!0,blending:Xn,depthWrite:!1,opacity:.16,color:13153423}),this.atilanlar.push(this.tunelIsikMat);const q=new Pt({color:7038556,roughness:.9});this.atilanlar.push(q);for(const it of[At.hatAZ,At.hatBZ]){for(const[Z,nt]of[[At.tunelAgziX,At.tunelSonX],[At.arkaTunelX,At.arkaTunelSonX]]){const H=Math.abs(nt-Z),Rt=new rt(new on(At.tunelYaricap,At.tunelYaricap,H,16,1,!0),L);Rt.rotation.z=Math.PI/2,Rt.position.set((Z+nt)/2,At.tunelMerkezY,it),this.grup.add(Rt),this.atilanlar.push(Rt.geometry);const st=new rt(new dn(At.tunelYaricap+.2,.3,6,18),q);st.rotation.y=Math.PI/2,st.position.set(Z,At.tunelMerkezY,it),this.grup.add(st),this.atilanlar.push(st.geometry)}const bt=new rt(new pe(6,6),this.tunelIsikMat);bt.position.set(At.tunelAgziX+6,At.tunelMerkezY,it),bt.rotation.y=-Math.PI/2,bt.renderOrder=3,this.grup.add(bt),this.tunelIsikMesh.push(bt),this.atilanlar.push(bt.geometry)}const dt=el(Mt.hikaye.istasyonAdi);this.tabela(dt,new T(5.5,2.9,At.peronArkaZ-.24),5.6,1.58,Math.PI),this.tabela(dt,new T(-13,2.9,At.peronArkaZ-.24),5.6,1.58,Math.PI),this.tabela(el(Mt.hikaye.istasyonAdi),new T(2,2.6,At.karsiPeronArkaZ+.24),5.6,1.58,0),this.tabela(As([Mt.hikaye.yonYazisi],{genislik:1024,yukseklik:256,arkaPlan:"#1b2026",renk:"#dfe6ea",fontBoyu:88,harfAraligi:6}),new T(14.5,3.35,At.peronArkaZ-.24),4.6,1.15,Math.PI),this.tabela(As([Mt.hikaye.hatKodu],{genislik:256,yukseklik:256,arkaPlan:"#c0392b",renk:"#ffffff",fontBoyu:150,kalinlik:700}),new T(1.1,3.35,At.peronArkaZ-.24),1.2,1.2,Math.PI),this.tabela(As([Mt.hikaye.tarihYazisi],{genislik:768,yukseklik:192,arkaPlan:"#1b2026",renk:"#a9b6bd",fontBoyu:66,harfAraligi:8}),new T(-4.5,3.35,At.peronArkaZ-.24),3.4,.85,Math.PI),this.tabela(As([`${Mt.hikaye.hatKodu} · ${Mt.hikaye.yonYazisi}`],{genislik:1024,yukseklik:200,arkaPlan:"#161b21",renk:"#dde8f0",fontBoyu:74,harfAraligi:5}),new T(12,3.55,6.4),5,.98,Math.PI);for(let it=0;it<5;it++){const bt=T0(it),Z=new Pt({map:bt,roughness:.6,emissiveMap:bt,emissive:16777215,emissiveIntensity:.12}),nt=new rt(new pe(1.5,2.2),Z);nt.position.set(-16+it*9,1.6,At.karsiPeronArkaZ+.24),this.grup.add(nt),this.atilanlar.push(nt.geometry,Z)}for(const it of[-14,8,26])this.grup.add(this.bankYap(it,At.peronArkaZ-.85,Math.PI,t.golgeler));for(const it of[-6,18])this.grup.add(this.bankYap(it,At.karsiPeronArkaZ+.85,0,!1));const tt=new $t(.21,1,4,8),gt=new Pt({color:3025712,roughness:.95});this.atilanlar.push(tt,gt);const Ft=new Ii(tt,gt,9);for(let it=0;it<9;it++)this.gecici.position.set(-20+it*6.5+it*17%5*.6,.82,At.karsiPeronOnZ-1.4-it*13%4*.7),this.gecici.rotation.set(0,it*29%7*.4,0),this.gecici.updateMatrix(),Ft.setMatrixAt(it,this.gecici.matrix);Ft.instanceMatrix.needsUpdate=!0,this.grup.add(Ft),this.grup.updateMatrixWorld(!0)}kutu(t,e,n,s,a,r={}){const o=new rt(t,e);return o.position.set(n,s,a),r.golgeAl&&(o.receiveShadow=!0),o.matrixAutoUpdate=!1,o.updateMatrix(),this.grup.add(o),r.paylas||this.atilanlar.push(t),o}serit(t,e,n){const s=new Pt({color:14070335,roughness:.8,metalness:.02});this.atilanlar.push(s),this.kutu(new Qt(t,.03,.5),s,e,.005,n)}tabela(t,e,n,s,a){const r=new Pt({map:t,roughness:.45,metalness:.05,emissiveMap:t,emissive:16777215,emissiveIntensity:.24}),o=new rt(new pe(n,s),r);o.position.copy(e),o.rotation.y=a,this.grup.add(o),this.tabelaMat.push(r),this.atilanlar.push(o.geometry,r)}bankYap(t,e,n,s){const a=new de,r=new Pt({color:7032632,roughness:.72}),o=new Pt({color:3949644,roughness:.42,metalness:.7});this.atilanlar.push(r,o);const A=new Qt(2.6,.1,.55),l=new Qt(2.6,.5,.08),c=new Qt(.09,.46,.5);this.atilanlar.push(A,l,c);const h=new rt(A,r);h.position.set(0,.46,0),h.castShadow=s;const f=new rt(l,r);f.position.set(0,.74,-.24),a.add(h,f);for(const u of[-1.1,1.1]){const m=new rt(c,o);m.position.set(u,.23,0),a.add(m)}return a.position.set(t,At.peronY,e),a.rotation.y=n,a}guncelle(t,e){const n=Nt(t);this.tunelIsikMat.opacity=.13+n*.5;const s=1+n*1.4;for(const r of this.tunelIsikMesh)r.scale.setScalar(s);this.rayMat.roughness=.26-n*.1;const a=.985+Math.sin(e*11.3)*.008+Math.sin(e*3.1)*.007;this.tabelaMat.forEach(r=>r.emissiveIntensity=.24*a)}birak(){this.atilanlar.forEach(t=>t.dispose()),this.atilanlar.length=0}}const Bn=17.6,nr=18.2,Ve=1.4,Ce=1.05,Ge=3.05,ir=.75,sr=3.55,ta=.42,ea=[-5.5,5.5],ar=.76,F0=.76,rr=.75,or=[[-7.525,2.55],[0,9.5],[7.525,2.55]],il=[[-7.525,1.9],[-3.1,2.5],[0,2.5],[3.1,2.5],[7.525,1.9]];class sl{constructor(t){b(this,"grup",new de);b(this,"anaKapiYerel",ea[0]);b(this,"paneller",[]);b(this,"tekerlekler",[]);b(this,"icIsik");b(this,"farIsik");b(this,"farMesh",[]);b(this,"farParlak",[]);b(this,"icMat");b(this,"camMat");b(this,"govdeGrup",new de);b(this,"atilanlar",[]);const e=t.vagonSayisi??3;this.grup.name="metro",this.grup.position.set(0,At.rayUstY,0),this.grup.add(this.govdeGrup);const n=new Pt({color:Mt.renkler.metroGovde,roughness:.36,metalness:.72}),s=new Pt({color:1777444,roughness:.5,metalness:.4});this.camMat=new Pt({color:988444,roughness:.18,metalness:.9,emissive:new Ot(Mt.renkler.metroIc),emissiveIntensity:.012});const a=new Pt({color:Mt.renkler.hatVurgusu,roughness:.42,metalness:.3});this.icMat=new Pt({color:14073237,roughness:.9,emissive:new Ot(Mt.renkler.metroIc),emissiveIntensity:.13,side:we});const r=new Pt({color:10463409,roughness:.32,metalness:.68}),o=new Pt({color:1185824,roughness:.16,metalness:.5,emissive:new Ot(Mt.renkler.metroIc),emissiveIntensity:.05});this.atilanlar.push(n,s,this.camMat,a,this.icMat,r,o);const A=new Qt(Bn,Ce-ir,Ve*2),l=new Qt(Bn,sr-Ge,Ve*2),c=new Qt(Bn-.5,.22,Ve*2-.28),h=new Qt(Bn-.4,.45,Ve*2-.2),f=new Qt(Bn-.4,Ge-Ce,2.5),u=new on(ta,ta,.2,14),m=new Qt(3,.42,2),x=new Qt(ar,Ge-Ce,.07),p=new Qt(ar-.24,.95,.02),d=new Qt(.16,Ge-Ce,Ve*2);this.atilanlar.push(A,l,c,h,f,u,m,x,p,d);const B=or.map(([,W])=>new Qt(W,Ge-Ce,.14)),M=il.map(([,W])=>new Qt(W,.95,.05)),E=or.map(([,W])=>new Qt(W-.08,.18,.04));this.atilanlar.push(...B,...M,...E);const Q=new $t(.2,.75,4,8),R=new Pt({color:3352620,roughness:.95});this.atilanlar.push(Q,R);for(let W=0;W<e;W++){const F=new de;F.position.x=W*nr;const at=new rt(f,this.icMat);at.position.y=(Ce+Ge)/2,F.add(at);const ft=new rt(A,n);ft.position.y=(ir+Ce)/2,ft.castShadow=t.golgeler;const ut=new rt(l,n);ut.position.y=(Ge+sr)/2,ut.castShadow=t.golgeler;const Ut=new rt(c,s);Ut.position.y=sr+.1;const Jt=new rt(h,s);Jt.position.y=ir-.2,F.add(ft,ut,Ut,Jt);for(const L of[-Bn/2+.08,Bn/2-.08]){const q=new rt(d,s);q.position.set(L,(Ce+Ge)/2,0),F.add(q)}or.forEach(([L],q)=>{for(const dt of[Ve-.07,-Ve+.07]){const tt=new rt(B[q],n);tt.position.set(L,(Ce+Ge)/2,dt),tt.castShadow=t.golgeler,F.add(tt);const gt=new rt(E[q],a);gt.position.set(L,1.52,dt+Math.sign(dt)*.09),F.add(gt)}}),il.forEach(([L],q)=>{for(const dt of[Ve+.03,-Ve-.03]){const tt=new rt(M[q],this.camMat);tt.position.set(L,2.55,dt),F.add(tt)}});for(const L of ea)for(const q of[Ve+.04,-Ve-.04]){const dt=new Qt(.09,Ge-Ce,.1);for(const it of[L-rr-.045,L+rr+.045]){const bt=new rt(dt,s);bt.position.set(it,(Ce+Ge)/2,q-Math.sign(q)*.05),F.add(bt)}const tt=new Qt(rr*2+.18,.09,.1),gt=new rt(tt,s);gt.position.set(L,Ge-.045,q-Math.sign(q)*.05);const Ft=new rt(tt,s);Ft.position.set(L,Ce+.045,q-Math.sign(q)*.05),F.add(gt,Ft),this.atilanlar.push(dt,tt);for(const it of[-1,1]){const bt=new rt(x,r),Z=L+it*ar/2;bt.position.set(Z,(Ce+Ge)/2,q);const nt=new rt(p,o);nt.position.set(0,.5,Math.sign(q)*.045),bt.add(nt),F.add(bt),this.paneller.push({mesh:bt,kapaliX:Z,yon:it})}}for(const L of[-6.2,6.2]){const q=new rt(m,s);q.position.set(L,.62,0),F.add(q);for(const dt of[L-1.1,L+1.1])for(const tt of[-.78,.78]){const gt=new rt(u,s);gt.position.set(dt,ta,tt),gt.rotation.x=Math.PI/2,F.add(gt),this.tekerlekler.push(gt)}}for(let L=0;L<t.yolcuSayisi;L++){const q=new rt(Q,R);let tt=-7.6+(L+.5)/t.yolcuSayisi*15.2+L*37%5*.28;for(const gt of ea)Math.abs(tt-gt)<1.9&&(tt=gt+(tt>gt?2.1:-2.1));q.position.set(tt,Ce+.95,(L%3-1)*.62-.25),F.add(q)}if(W>0){const L=new Qt(nr-Bn+.2,2.2,Ve*2-.5),q=new rt(L,s);q.position.set(-nr/2,2.2,0),F.add(q),this.atilanlar.push(L)}this.govdeGrup.add(F)}const w=-Bn/2,D=new Qt(.12,1.3,2.3),v=new rt(D,this.camMat);v.position.set(w-.08,2.6,0),v.rotation.z=-.13,this.govdeGrup.add(v),this.atilanlar.push(D);const S=new Qt(.5,1.5,Ve*2),I=new rt(S,n);I.position.set(w-.22,1.55,0),this.govdeGrup.add(I),this.atilanlar.push(S);const V=new Be({color:16774365}),P=new sn(.16,10,8),G=Ea(.95),Y=new Be({map:G,transparent:!0,blending:Xn,depthWrite:!1,color:16772812}),j=new pe(1.5,1.5);this.atilanlar.push(V,P,Y,j);for(const W of[-.92,.92]){const F=new rt(P,V);F.position.set(w-.4,1.55,W),this.govdeGrup.add(F),this.farMesh.push(F);const at=new rt(j,Y);at.position.set(w-.55,1.55,W),at.rotation.y=-Math.PI/2,at.renderOrder=4,this.govdeGrup.add(at),this.farParlak.push(at)}this.farIsik=new m0(16773336,0,90,Math.PI/7,.55,1.1),this.farIsik.position.set(w-.5,1.6,0),this.farIsik.target.position.set(w-40,.2,0),this.govdeGrup.add(this.farIsik,this.farIsik.target),this.icIsik=new ln(Mt.renkler.metroIc,0,12,1.65),this.icIsik.position.set(ea[0],Ce+1.3,.4),this.govdeGrup.add(this.icIsik),this.setDoorOpenProgress(0)}setDoorOpenProgress(t){const e=Nt(t);for(const n of this.paneller)n.mesh.position.x=n.kapaliX+n.yon*F0*e;this.icIsik.intensity=Mt.isik.metroIc*e,this.icMat.emissiveIntensity=.13+e*.22,this.camMat.emissiveIntensity=.012+e*.06}setPozisyon(t){this.grup.position.x=t;const e=-t/ta;for(const n of this.tekerlekler)n.rotation.y=e}anaKapiDunyaX(){return this.grup.position.x+this.anaKapiYerel}guncelle(t,e,n,s=0){const a=Math.min(1,Math.abs(t)/22),r=n?0:a*.012;this.govdeGrup.position.y=Math.sin(e*24)*r-.035*Nt(s),this.govdeGrup.position.z=Math.sin(e*17.3)*r*.6,this.govdeGrup.rotation.z=Math.sin(e*9.1)*r*.35;const o=Nt(.25+a);this.farIsik.intensity=Mt.isik.farlar*o;const A=.55+o*.45;for(const l of this.farParlak)l.scale.setScalar(A);for(const l of this.farMesh)l.material.color.setScalar(.7+o*.3)}birak(){this.atilanlar.forEach(t=>t.dispose()),this.atilanlar.length=0}}const Ar=.45,lr=.43,cr=.27,hr=.25,al=.93,rl=.74;function Hn(i=0,t=0,e=0){const n=new de;return n.rotation.set(i,t,e),{grup:n,temelX:i,temelY:t,temelZ:e}}class ol{constructor(t){b(this,"kok",new de);b(this,"kalca",new de);b(this,"govde",Hn());b(this,"boyun",Hn());b(this,"kafa",Hn());b(this,"omuz");b(this,"bacak");b(this,"secenek");b(this,"atilanlar",[]);this.secenek=t;const e=t.siluet==="ince",n=e?.163:.188,s=e?.145:.17,a=new Pt({color:t.ustRengi,roughness:.86,metalness:0}),r=new Pt({color:t.altRengi,roughness:.9}),o=new Pt({color:t.tenRengi,roughness:.72}),A=new Pt({color:t.sacRengi,roughness:.62}),l=new Pt({color:1841694,roughness:.6}),c=new Pt({color:1315866,roughness:.55,metalness:.1});this.atilanlar.push(a,r,o,A,l,c),this.kok.add(this.kalca),this.kalca.position.y=al,this.kalca.add(this.govde.grup);const h=this.mesh(new $t(s,.32,6,20),a,0,.26,0);h.scale.set(1,1,e?.72:.78),this.govde.grup.add(h);const f=this.mesh(new on(s*1.02,s*1.12,.28,20),a,0,-.02,0);f.scale.set(1,1,e?.74:.8),this.govde.grup.add(f);const u=this.mesh(new $t(.078,n*2-.03,6,16),a,0,.43,0);u.rotation.z=Math.PI/2,u.scale.set(1,1,.85),this.govde.grup.add(u);const m=this.mesh(new on(.062,.082,.06,16),a,0,.5,0);this.govde.grup.add(m);const x=this.mesh(new $t(s*.94,.1,5,18),r,0,-.05,0);x.scale.set(1,1,.76),this.kalca.add(x),this.govde.grup.add(this.boyun.grup),this.boyun.grup.position.y=.5,this.boyun.grup.add(this.mesh(new on(.052,.06,.1,14),o,0,.05,0)),this.boyun.grup.add(this.kafa.grup),this.kafa.grup.position.y=.11;const p=this.mesh(new sn(.112,24,18),o,0,.1,0);p.scale.set(.94,1.08,1),this.kafa.grup.add(p),this.gozYap(),this.sacYap(A),t.sakal&&this.sakalYap(A),t.gozluk&&this.gozlukYap(c),t.kupe&&this.kupeYap(),this.omuz={sol:this.kolYap(-n,a,o),sag:this.kolYap(n,a,o)},this.bacak={sol:this.bacakYap(-.1,r,l),sag:this.bacakYap(.1,r,l)},t.sirtCantasi!==void 0&&this.cantaYap(t.sirtCantasi,s),t.omuzAskisi!==void 0&&this.belCantasiYap(t.omuzAskisi,n,s),t.golgeler&&this.kok.traverse(d=>{d instanceof rt&&(d.castShadow=!0)})}mesh(t,e,n,s,a){const r=new rt(t,e);return r.position.set(n,s,a),this.atilanlar.push(t),r}gozYap(){const t=new Pt({color:15985894,roughness:.35}),e=new Pt({color:2759964,roughness:.3}),n=new Pt({color:this.secenek.sacRengi,roughness:.7});this.atilanlar.push(t,e,n);for(const s of[-1,1]){const a=this.mesh(new sn(.0195,16,12),t,s*.043,.109,.089);a.scale.set(1.15,.78,.5),this.kafa.grup.add(a);const r=this.mesh(new sn(.0105,14,12),e,s*.043,.107,.098);r.scale.set(1,1,.55),this.kafa.grup.add(r);const o=this.mesh(new $t(.0075,.036,4,10),n,s*.044,.136,.094);o.rotation.z=Math.PI/2+s*.14,o.scale.set(1,1,.55),this.kafa.grup.add(o)}}sacYap(t){if(this.secenek.sacTarzi==="uzunDalgali"){const e=this.mesh(new sn(.126,22,16),t,0,.132,-.016);e.scale.set(1.03,.98,1),this.kafa.grup.add(e);for(const s of[-1,1]){const a=this.mesh(new $t(.062,.16,5,14),t,s*.093,.02,-.018);a.scale.set(.95,1.15,1.05),a.rotation.z=s*.12,this.kafa.grup.add(a)}const n=this.mesh(new $t(.088,.2,6,16),t,0,-.01,-.072);n.scale.set(1.35,1.05,.82),this.kafa.grup.add(n);for(const[s,a,r]of[[-.085,-.08,-.055],[.085,-.08,-.055],[0,-.12,-.06]]){const o=this.mesh(new sn(.055,14,12),t,s,a,r);o.scale.set(1.15,.95,1),this.kafa.grup.add(o)}}else{const e=this.mesh(new sn(.119,24,18),t,0,.138,-.018);e.scale.set(1.02,.96,1.04),this.kafa.grup.add(e);for(const o of[-1,1]){const A=this.mesh(new $t(.05,.14,5,14),t,o*.093,.028,-.035);A.scale.set(.85,1.1,1.05),A.rotation.z=o*.1,this.kafa.grup.add(A)}const n=this.mesh(new $t(.082,.16,6,16),t,0,.005,-.078);n.scale.set(1.25,1,.8),this.kafa.grup.add(n);const s=this.mesh(new dn(.048,.013,8,16),t,0,-.055,-.12);s.rotation.x=Math.PI/2,this.kafa.grup.add(s);const a=this.mesh(new $t(.047,.22,6,16),t,0,-.145,-.145);a.rotation.x=-.3,a.scale.set(1,1,.88),this.kafa.grup.add(a);const r=this.mesh(new $t(.032,.1,5,12),t,0,-.27,-.175);r.rotation.x=-.2,this.kafa.grup.add(r)}}sakalYap(t){const e=this.mesh(new sn(.079,18,14),t,0,.032,.038);e.scale.set(1.24,.82,.95),this.kafa.grup.add(e);for(const s of[-1,1]){const a=this.mesh(new $t(.022,.05,4,10),t,s*.088,.072,.014);a.scale.set(.9,1,.8),this.kafa.grup.add(a)}const n=this.mesh(new $t(.014,.045,4,10),t,0,.077,.093);n.rotation.z=Math.PI/2,n.scale.set(1,1,.7),this.kafa.grup.add(n)}gozlukYap(t){for(const n of[-1,1]){const s=this.mesh(new dn(.034,.006,8,20),t,n*.043,.108,.088);this.kafa.grup.add(s);const a=this.mesh(new Qt(.008,.008,.09),t,n*.076,.108,.04);this.kafa.grup.add(a)}const e=this.mesh(new Qt(.022,.007,.007),t,0,.115,.09);this.kafa.grup.add(e)}kupeYap(){const t=new Pt({color:14206090,roughness:.28,metalness:.85});this.atilanlar.push(t);for(const e of[-1,1]){const n=this.mesh(new dn(.021,.0045,6,16),t,e*.101,.062,.004);n.rotation.y=Math.PI/2,this.kafa.grup.add(n)}}cantaYap(t,e){const n=new Pt({color:t,roughness:.78}),s=new Pt({color:new Ot(t).multiplyScalar(1.25),roughness:.8});this.atilanlar.push(n,s);const a=this.mesh(new $t(.128,.24,8,20),n,0,.23,-e-.115);a.scale.set(1.1,1.02,.78),this.govde.grup.add(a);const r=this.mesh(new $t(.082,.11,6,16),n,0,.15,-e-.21);r.scale.set(1.1,1,.55),this.govde.grup.add(r);const o=this.mesh(new $t(.006,.15,4,8),s,0,.255,-e-.215);o.rotation.z=Math.PI/2,this.govde.grup.add(o);const A=this.mesh(new dn(.042,.011,8,18,Math.PI),s,0,.4,-e-.1);A.rotation.x=Math.PI/2,this.govde.grup.add(A);for(const l of[-1,1]){const c=this.mesh(new $t(.026,.2,6,14),s,l*.088,.31,e*.82);c.rotation.z=l*.2,c.rotation.x=-.12,c.scale.set(1.1,1,.55),this.govde.grup.add(c);const h=this.mesh(new $t(.026,.14,6,14),s,l*.104,.45,.005);h.rotation.x=Math.PI/2-.15,h.scale.set(1.05,1,.6),this.govde.grup.add(h)}}belCantasiYap(t,e,n){const s=new Pt({color:t,roughness:.72}),a=new Pt({color:new Ot(t).multiplyScalar(1.35),roughness:.8});this.atilanlar.push(s,a);const r=this.mesh(new $t(.021,.42,6,14),a,-.015,.23,n*.88);r.rotation.z=.5,r.scale.set(1.05,1,.5),this.govde.grup.add(r);const o=this.mesh(new $t(.021,.4,6,14),a,-.015,.23,-n*.88);o.rotation.z=-.5,o.scale.set(1.05,1,.5),this.govde.grup.add(o);const A=this.mesh(new $t(.022,.16,6,14),a,e*.58,.44,0);A.rotation.x=Math.PI/2,A.scale.set(1.05,1,.55),this.govde.grup.add(A);const l=this.mesh(new $t(.055,.13,7,18),s,-.155,-.06,n*.62);l.rotation.z=Math.PI/2,l.scale.set(1,1.15,.52),this.govde.grup.add(l);const c=this.mesh(new $t(.045,.12,6,16),a,-.155,.015,n*.68);c.rotation.z=Math.PI/2,c.scale.set(1,1,.42),this.govde.grup.add(c);const h=this.mesh(new Qt(.03,.022,.014),a,-.155,-.045,n*.74);this.govde.grup.add(h)}kolYap(t,e,n){const s=Hn();s.grup.position.set(t,.42,0),this.govde.grup.add(s.grup);const a=this.mesh(new $t(.063,.085,6,18),e,0,-.062,0);s.grup.add(a);const r=this.mesh(new $t(.051,cr-.1,6,18),n,0,-cr/2-.005,0);s.grup.add(r);const o=Hn();o.grup.position.y=-cr,s.grup.add(o.grup),o.grup.add(this.mesh(new $t(.045,hr-.06,6,18),n,0,-hr/2+.01,0));const A=Hn();A.grup.position.y=-hr,o.grup.add(A.grup);const l=this.mesh(new sn(.048,14,12),n,0,-.03,0);return l.scale.set(.86,1.12,.72),A.grup.add(l),{ust:s,alt:o,el:A}}bacakYap(t,e,n){const s=Hn();s.grup.position.set(t,0,0),this.kalca.add(s.grup),s.grup.add(this.mesh(new $t(.072,Ar-.1,6,18),e,0,-Ar/2+.01,0));const a=Hn();a.grup.position.y=-Ar,s.grup.add(a.grup),a.grup.add(this.mesh(new $t(.059,lr-.09,6,18),e,0,-lr/2+.005,0));const r=Hn();r.grup.position.y=-lr,a.grup.add(r.grup);const o=this.mesh(new $t(.056,.15,6,16),n,0,-.035,.05);o.rotation.x=Math.PI/2,o.scale.set(.94,1,.78),r.grup.add(o);const A=this.mesh(new $t(.05,.16,4,14),n,0,-.068,.05);A.rotation.x=Math.PI/2,A.scale.set(1.06,1,.42),r.grup.add(A);const l=this.mesh(new $t(.048,.05,5,14),n,0,-.008,-.008);return r.grup.add(l),{ust:s,alt:a,ayak:r}}sifirla(){const t=[this.govde,this.boyun,this.kafa,this.omuz.sol.ust,this.omuz.sol.alt,this.omuz.sol.el,this.omuz.sag.ust,this.omuz.sag.alt,this.omuz.sag.el,this.bacak.sol.ust,this.bacak.sol.alt,this.bacak.sol.ayak,this.bacak.sag.ust,this.bacak.sag.alt,this.bacak.sag.ayak];for(const e of t)e.grup.rotation.set(e.temelX,e.temelY,e.temelZ);this.kalca.position.set(0,al,0),this.kalca.rotation.set(0,0,0),this.govde.grup.position.set(0,0,0)}nefes(t,e){if(e<=0)return;const n=Math.sin(t*1.35);this.govde.grup.rotation.x+=n*.012*e,this.kalca.position.y+=Math.sin(t*1.35+.4)*.006*e,this.kalca.rotation.z+=Math.sin(t*.42)*.02*e,this.boyun.grup.rotation.y+=Math.sin(t*.31)*.06*e}yuru(t,e){if(e<=0)return;const n=.44*e,s=Math.sin(t);this.kalca.position.y+=-Math.cos(t*2)*.022*e-.012*e,this.kalca.rotation.y+=s*.055*e,this.govde.grup.rotation.y+=-s*.045*e,this.govde.grup.rotation.x+=.06*e;for(const{b:a,f:r}of[{b:this.bacak.sol,f:t},{b:this.bacak.sag,f:t+Math.PI}]){const o=Math.sin(r);a.ust.grup.rotation.x+=-o*n;const A=Math.max(0,Math.sin(r-.9));a.alt.grup.rotation.x+=A*1.05*e,a.ayak.grup.rotation.x+=(-o*.22-A*.35)*e}for(const{k:a,f:r}of[{k:this.omuz.sol,f:t+Math.PI},{k:this.omuz.sag,f:t}])a.ust.grup.rotation.x+=-Math.sin(r)*.38*e,a.alt.grup.rotation.x+=(.25+Math.max(0,Math.sin(r))*.35)*e;this.omuz.sol.ust.grup.rotation.z+=-.1*e,this.omuz.sag.ust.grup.rotation.z+=.1*e}dinlenme(t){t<=0||(this.omuz.sol.ust.grup.rotation.z+=-.13*t,this.omuz.sag.ust.grup.rotation.z+=.13*t,this.omuz.sol.ust.grup.rotation.x+=.06*t,this.omuz.sag.ust.grup.rotation.x+=.06*t,this.omuz.sol.alt.grup.rotation.x+=.24*t,this.omuz.sag.alt.grup.rotation.x+=.24*t)}tanima(t){if(t<=0)return;const e=this.secenek.tanimaYonu;this.kafa.grup.rotation.y+=.34*t*e,this.boyun.grup.rotation.y+=.16*t*e,this.govde.grup.rotation.y+=.12*t*e,this.kafa.grup.rotation.z+=.05*t*e,this.govde.grup.rotation.x+=.03*t;const n=e>0?this.omuz.sag:this.omuz.sol;n.ust.grup.rotation.x+=-.2*t,n.alt.grup.rotation.x+=.5*t}sarilmaPozu(t){if(t<=0)return;const e=Nt(t/.5),n=Nt((t-.35)/.65),s=this.secenek.sarilmaStili==="ust",a=s?-1.88:-1.18,r=s?1.05:-.5,o=s?.78:.92;for(const[A,l]of Object.entries(this.omuz)){const c=A==="sol"?-1:1;l.ust.grup.rotation.x+=a*e,l.ust.grup.rotation.z+=c*(s?.3:.16)*e,l.alt.grup.rotation.x+=r*n,l.alt.grup.rotation.z+=-c*o*n,l.el.grup.rotation.x+=-.25*n}this.govde.grup.rotation.x+=.15*n,this.kafa.grup.rotation.z+=(s?.22:-.19)*n,this.kafa.grup.rotation.y+=(s?-.22:.22)*n,this.kafa.grup.rotation.x+=.12*n,this.kalca.position.y+=-.022*n,this.govde.grup.position.y=-.012*n}uygula(t){this.sifirla();const e=Nt(t.yurumeSiddet);this.dinlenme(1-e),this.nefes(t.zaman,(1-e)*(1-Nt(t.sarilma)*.7)),this.yuru(t.yurumeFaz,e),this.tanima(Nt(t.tanima)*(1-Nt(t.sarilma))),this.sarilmaPozu(Nt(t.sarilma)),this.boyun.grup.rotation.y+=t.bakisY*.45,this.kafa.grup.rotation.y+=t.bakisY*.55;const n=Nt(t.rahatlik);this.omuz.sol.ust.grup.rotation.z+=-.04*n,this.omuz.sag.ust.grup.rotation.z+=.04*n,this.govde.grup.rotation.x+=.02*n}birak(){this.atilanlar.forEach(t=>t.dispose()),this.atilanlar.length=0}}class N0{constructor(t,e){b(this,"grup",new de);b(this,"ortam");b(this,"tavan");b(this,"sicak");b(this,"dolgu");b(this,"seritIsiklari",[]);if(this.ortam=new d0(Mt.renkler.istasyonIsik,6971986,Mt.isik.ortam),this.grup.add(this.ortam),this.tavan=new E0(15853524,Mt.isik.tavan),this.tavan.position.set(4,9,7),this.tavan.target.position.set(-1,0,4),t){this.tavan.castShadow=!0,this.tavan.shadow.mapSize.set(e,e);const n=this.tavan.shadow.camera;n.left=-14,n.right=14,n.top=14,n.bottom=-8,n.near=1,n.far=30,n.updateProjectionMatrix(),this.tavan.shadow.bias=-.0012,this.tavan.shadow.normalBias=.02}this.grup.add(this.tavan,this.tavan.target),this.sicak=new ln(Mt.renkler.sicakFinal,0,16,1.6),this.sicak.position.set(-1.6,2.6,6.6),this.grup.add(this.sicak),this.dolgu=new ln(14208438,1.1,26,1.7),this.dolgu.position.set(0,3.4,6),this.grup.add(this.dolgu);for(const n of[-6,14]){const s=new ln(15787212,12,34,1.5);s.position.set(n,At.tavanY-.6,4.6),this.grup.add(s),this.seritIsiklari.push(s)}}guncelle(t,e){const n=ca(Nt((t-.78)/.2));this.sicak.intensity=Mt.isik.finalSicak*n*2.2,this.ortam.intensity=ae(Mt.isik.ortam,Mt.isik.ortam*1.25,n),this.ortam.color.setHex(Mt.renkler.istasyonIsik).lerp(new Ot(16764836),n*.45),this.tavan.intensity=ae(Mt.isik.tavan,Mt.isik.tavan*.82,n),this.dolgu.color.setHex(14208438).lerp(new Ot(16767400),Nt(e)*.45),this.dolgu.intensity=1.1+Nt(e)*.5}birak(){this.seritIsiklari.forEach(t=>t.dispose()),this.tavan.dispose(),this.sicak.dispose(),this.dolgu.dispose(),this.ortam.dispose()}}class L0{constructor(t,e){b(this,"kamera");b(this,"anahtarlar");b(this,"konumEgri");b(this,"hedefEgri");b(this,"mobilKonumEgri");b(this,"mobilHedefEgri");b(this,"gecici",new T);b(this,"geciciHedef",new T);b(this,"mobilGecici",new T);b(this,"mobilHedefGecici",new T);this.anahtarlar=[...t].sort((o,A)=>o.p-A.p),this.kamera=new De(45,e,.1,400);const n=this.anahtarlar.map(o=>new T(...o.konum)),s=this.anahtarlar.map(o=>new T(...o.hedef)),a=this.anahtarlar.map(o=>new T(...o.mobilKonum??o.konum)),r=this.anahtarlar.map(o=>new T(...o.hedef));this.konumEgri=new os(n,!1,"catmullrom",.35),this.hedefEgri=new os(s,!1,"catmullrom",.35),this.mobilKonumEgri=new os(a,!1,"catmullrom",.35),this.mobilHedefEgri=new os(r,!1,"catmullrom",.35)}egriParametresi(t){const e=this.anahtarlar.length;if(t<=this.anahtarlar[0].p)return 0;if(t>=this.anahtarlar[e-1].p)return 1;for(let n=0;n<e-1;n++){const s=this.anahtarlar[n],a=this.anahtarlar[n+1];if(t>=s.p&&t<=a.p){const r=Yn(s.p,a.p,t);return(n+r)/(e-1)}}return 1}fovHesapla(t,e){const n=this.anahtarlar.length,s=a=>e?a.mobilFov??a.fov:a.fov;if(t<=this.anahtarlar[0].p)return s(this.anahtarlar[0]);if(t>=this.anahtarlar[n-1].p)return s(this.anahtarlar[n-1]);for(let a=0;a<n-1;a++){const r=this.anahtarlar[a],o=this.anahtarlar[a+1];if(t>=r.p&&t<=o.p)return ae(s(r),s(o),Yn(r.p,o.p,t))}return s(this.anahtarlar[n-1])}guvenliyeAl(t){t.y=tl(t.y,.85,3.7),t.z=tl(t.z,2.6,9.8),t.z<2.55&&(t.z=2.55)}guncelle(t,e,n,s){const a=e,r=this.egriParametresi(Nt(t));a?(this.mobilKonumEgri.getPoint(r,this.mobilGecici),this.mobilHedefEgri.getPoint(r,this.mobilHedefGecici),this.gecici.copy(this.mobilGecici),this.geciciHedef.copy(this.mobilHedefGecici)):(this.konumEgri.getPoint(r,this.gecici),this.hedefEgri.getPoint(r,this.geciciHedef)),a&&(this.geciciHedef.y+=.32),n>0&&(this.gecici.x+=Math.sin(s*.7)*.035*n,this.gecici.y+=Math.sin(s*.93+1.2)*.028*n,this.gecici.z+=Math.cos(s*.61)*.03*n),this.guvenliyeAl(this.gecici),this.kamera.position.copy(this.gecici),this.kamera.lookAt(this.geciciHedef);const o=this.fovHesapla(Nt(t),a);Math.abs(this.kamera.fov-o)>.01&&(this.kamera.fov=o,this.kamera.updateProjectionMatrix())}enBoyAyarla(t){this.kamera.aspect=t,this.kamera.updateProjectionMatrix()}}const z0=168,O0=5.5,Al=[.11,.47],Ao=[{p0:.6,p1:.672,bas:[0,-.25],son:[.06,2.2],yumusatma:ha},{p0:.672,p1:.708,bas:[.06,2.2],son:[.16,3],yumusatma:ha},{p0:.748,p1:.885,bas:[.16,3],son:[-1.42,4.62],yumusatma:ha}],V0=[{p0:.778,p1:.885,bas:[-3.6,5.6],son:[-1.98,4.62],yumusatma:ha}],G0=[[0,0],[.71,0],[.748,-.34],[.8,-.78],[.868,-1.35],[.9,-Math.PI/2]],j0=[[0,Math.PI/2],[.72,Math.PI/2],[.782,2.13],[.84,2.13],[.878,1.72],[.9,Math.PI/2]];function ll(i,t){if(t<=i[0][0])return i[0][1];const e=i[i.length-1];if(t>=e[0])return e[1];for(let n=0;n<i.length-1;n++){const s=i[n],a=i[n+1];if(t>=s[0]&&t<=a[0])return ae(s[1],a[1],Qe(Yn(s[0],a[0],t)))}return e[1]}function cl(i,t){let e=0,n=i[0].bas[0],s=i[0].bas[1],a=0;for(const r of i){const o=Math.hypot(r.son[0]-r.bas[0],r.son[1]-r.bas[1]);if(t<=r.p0){e===0&&t<=i[0].p0&&(n=i[0].bas[0],s=i[0].bas[1]);break}if(t>=r.p1){e+=o,n=r.son[0],s=r.son[1];continue}const A=Yn(r.p0,r.p1,t),l=r.yumusatma(A);n=ae(r.bas[0],r.son[0],l),s=ae(r.bas[1],r.son[1],l),e+=o*l;const c=.004,h=r.yumusatma(Nt(A+c));a=o*(h-l)/(c*(r.p1-r.p0));break}return{x:n,z:s,mesafe:e,hiz:a}}function hl(i){const t=ac(We(i,Al[0],Al[1]));return ae(z0,O0,t)}function X0(i){const t=v0(We(i,.005,.17));return ae(-2,210,t)}function fl(i){const t=hl(i),e=X0(i),n=.002,s=Math.abs(hl(Math.min(1,i+n))-t)/n,a=Qe(We(i,.5,.6)),r=ca(We(i,.42,.53)),o=Nt(Yn(140,18,t)),A=Qe(We(i,.9,1)),l=Qe(We(i,.872,.955)),c=cl(Ao,i),h=Qe(We(i,.706,.744))*(1-Qe(We(i,.79,.86))),f={x:c.x,z:c.z,y:ae(.05,0,Nt(Yn(.6,.664,i))),donme:ll(G0,i),yurumeFaz:c.mesafe/rl*Math.PI,yurumeSiddet:Nt(c.hiz/15)*(1-l),tanima:h*(1-l),sarilma:l,bakisY:0,rahatlik:l,gorunur:i>.465},u=cl(V0,i),m=Qe(We(i,.722,.78))*(1-Qe(We(i,.8,.87))),x={x:u.x,z:u.z,y:0,donme:ll(j0,i),yurumeFaz:u.mesafe/rl*Math.PI,yurumeSiddet:Nt(u.hiz/15)*(1-l),tanima:m*(1-l),sarilma:l,bakisY:ca(We(i,.1,.22))*.18*(1-ca(We(i,.6,.72))),rahatlik:l,gorunur:!0};return{trenX:t,kalkanX:e,trenHizP:s,kapiAcik:a,oturma:r,tunelYakinlik:o,finalGuc:A,kadin:f,erkek:x}}new ct(Ao[0].bas[0],Ao[0].bas[1]);const Y0=[{p:0,konum:[-8.8,1.66,7.8],hedef:[10,1.45,3.2],fov:44,mobilKonum:[-7.4,1.6,6.9],mobilFov:52},{p:.12,konum:[-8.2,1.72,7.6],hedef:[30,1.5,1.6],fov:40,mobilKonum:[-6.6,1.66,6.6],mobilFov:50},{p:.26,konum:[-3,1.6,6.6],hedef:[46,1.5,.9],fov:36,mobilKonum:[-3.2,1.6,6.4],mobilFov:46},{p:.38,konum:[3.6,1.5,6.8],hedef:[20,1.7,.9],fov:40,mobilKonum:[3,1.62,7.6],mobilFov:54},{p:.5,konum:[5.6,1.74,9.2],hedef:[.4,1.5,2.1],fov:44,mobilKonum:[6,1.82,9.5],mobilFov:58},{p:.58,konum:[3.8,1.55,7.6],hedef:[0,1.3,1.6],fov:42,mobilKonum:[4.3,1.66,8.4],mobilFov:56},{p:.67,konum:[3.9,1.5,7.4],hedef:[.2,1.1,2.5],fov:43,mobilKonum:[4.4,1.62,8.2],mobilFov:57},{p:.75,konum:[3.2,1.55,7.8],hedef:[-.5,1.15,3.4],fov:44,mobilKonum:[3.7,1.68,8.6],mobilFov:58},{p:.82,konum:[.6,1.6,8.6],hedef:[-1.8,1.15,4.3],fov:45,mobilKonum:[1,1.72,9],mobilFov:59},{p:.89,konum:[-4.2,1.5,7.4],hedef:[-1.95,1.25,4.6],fov:42,mobilKonum:[-4.6,1.62,7.9],mobilFov:56},{p:.95,konum:[-5.2,1.58,7.6],hedef:[-1.8,1.25,4.6],fov:43,mobilKonum:[-5.5,1.7,8.1],mobilFov:57},{p:1,konum:[-6.8,2.05,8.2],hedef:[-1.78,1.22,4.6],fov:45,mobilKonum:[-7.1,2.2,8.6],mobilFov:59}];class W0{constructor(t,e){b(this,"sahne",new xa);b(this,"yonetmen");b(this,"istasyon");b(this,"tren");b(this,"kalkanTren");b(this,"kadin");b(this,"erkek");b(this,"toz");b(this,"isik");b(this,"ekran");b(this,"pmrem");b(this,"ortamHedef");b(this,"oncekiTrenX",0);b(this,"oncekiKalkanX",0);b(this,"durum");this.ekran=t;const n=t.kalite;this.sahne.background=new Ot(855050),this.sahne.fog=new vs(1315342,.0125),this.pmrem=new xs(e);const s=new Io;this.ortamHedef=this.pmrem.fromScene(s,.04),this.sahne.environment=this.ortamHedef.texture,this.sahne.environmentIntensity=.28,s.traverse(a=>{a instanceof rt&&(a.geometry.dispose(),Array.isArray(a.material)?a.material.forEach(r=>r.dispose()):a.material.dispose())}),this.istasyon=new P0({golgeler:n.golgeler}),this.sahne.add(this.istasyon.grup),this.tren=new sl({yolcuSayisi:n.trenYolcu,golgeler:n.golgeler}),this.sahne.add(this.tren.grup),this.kalkanTren=new sl({vagonSayisi:2,yolcuSayisi:Math.max(2,Math.round(n.trenYolcu*.5)),golgeler:!1}),this.kalkanTren.grup.rotation.y=Math.PI,this.kalkanTren.grup.position.z=At.hatBZ,this.sahne.add(this.kalkanTren.grup),this.kadin=new ol({ustRengi:Mt.renkler.kadinKiyafet,altRengi:Mt.renkler.kadinAlt,sacRengi:Mt.renkler.kadinSac,tenRengi:Mt.renkler.ten,siluet:"ince",sarilmaStili:"alt",tanimaYonu:-1,sacTarzi:"uzunDalgali",gozluk:!0,kupe:!0,sirtCantasi:Mt.renkler.kadinCanta,golgeler:n.golgeler}),this.erkek=new ol({ustRengi:Mt.renkler.erkekKiyafet,altRengi:Mt.renkler.erkekAlt,sacRengi:Mt.renkler.erkekSac,tenRengi:Mt.renkler.ten,siluet:"genis",sarilmaStili:"ust",tanimaYonu:1,sacTarzi:"atkuyrugu",sakal:!0,omuzAskisi:3816244,golgeler:n.golgeler}),this.kadin.kok.scale.setScalar(.985),this.erkek.kok.scale.setScalar(1.045),this.sahne.add(this.kadin.kok,this.erkek.kok),this.toz=new To({sayi:n.tozParcacik,alan:new T(70,5,16),merkez:new T(6,2.2,4),renk:15129798,boyut:1.05,opaklik:.2,dusmeHizi:.05},t.pikselOrani()),this.sahne.add(this.toz.nesne),this.isik=new N0(n.golgeler,n.golgeCozunurluk),this.sahne.add(this.isik.grup),this.yonetmen=new L0(Y0,t.durum.enBoy),this.durum=fl(0),this.uygula(0,0)}uygula(t,e){const n=fl(t);this.durum=n,this.tren.setPozisyon(n.trenX),this.tren.setDoorOpenProgress(n.kapiAcik);const s=Math.abs(n.trenX-this.oncekiTrenX);this.oncekiTrenX=n.trenX,this.tren.guncelle(s*60,e,this.ekran.azHareket,n.oturma);const a=n.kalkanX<150;if(this.kalkanTren.grup.visible=a,a){const A=Math.abs(n.kalkanX-this.oncekiKalkanX);this.kalkanTren.setPozisyon(n.kalkanX),this.kalkanTren.guncelle(A*60,e,this.ekran.azHareket)}this.oncekiKalkanX=n.kalkanX,this.istasyon.guncelle(n.tunelYakinlik,e),this.isik.guncelle(t,n.kapiAcik);const r=this.ekran.azHareket?0:e;this.kadin.kok.visible=n.kadin.gorunur,this.kadin.kok.position.set(n.kadin.x,n.kadin.y,n.kadin.z),this.kadin.kok.rotation.y=n.kadin.donme,this.kadin.uygula({yurumeFaz:n.kadin.yurumeFaz,yurumeSiddet:n.kadin.yurumeSiddet,tanima:n.kadin.tanima,sarilma:n.kadin.sarilma,zaman:r,bakisY:n.kadin.bakisY,rahatlik:n.kadin.rahatlik}),this.erkek.kok.position.set(n.erkek.x,n.erkek.y,n.erkek.z),this.erkek.kok.rotation.y=n.erkek.donme,this.erkek.uygula({yurumeFaz:n.erkek.yurumeFaz,yurumeSiddet:n.erkek.yurumeSiddet,tanima:n.erkek.tanima,sarilma:n.erkek.sarilma,zaman:r,bakisY:n.erkek.bakisY,rahatlik:n.erkek.rahatlik});const o=this.sahne.fog;o.color.setHex(1315342).lerp(new Ot(2364944),n.finalGuc*.7),this.sahne.background.copy(o.color),this.sahne.environmentIntensity=.28+n.finalGuc*.1,this.toz.guncelle(this.ekran.azHareket?0:e,.3+n.tunelYakinlik*.12)}guncelle(t,e){this.uygula(t,e);const n=this.ekran.azHareket?0:1;this.yonetmen.guncelle(t,this.ekran.durum.darKadraj,n,e)}get sonDurum(){return this.durum}boyutlandir(){this.yonetmen.enBoyAyarla(this.ekran.durum.enBoy),this.toz.pikselOraniAyarla(this.ekran.pikselOrani())}birak(){this.istasyon.birak(),this.tren.birak(),this.kalkanTren.birak(),this.kadin.birak(),this.erkek.birak(),this.toz.birak(),this.isik.birak(),this.ortamHedef?.dispose(),this.pmrem?.dispose(),this.sahne.clear()}}const Z0=[{id:"2022-02-23",src:"anilar/2022-02-23.jpg",thumb:"anilar/2022-02-23-s.jpg",date:{gun:23,ay:2,yil:2022},width:1202,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAlEAABAwQBBAIDAAAAAAAAAAABAAIDBBESIRMFMUGBIjJRoeH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECIRESUWH/2gAMAwEAAhEDEQA/APKiYRBNFMwtLQcbN+pHe5V3TXywMMEcbuUnzoez4Vj208HPCC3L4kOvs63criamIGGcPBdmQQDvY/gUm+FlE4SdTrmyODoASCQTne6KhzqdziXRuLibk5dyiL4bp6RVMzp6nmkJxtZrHb12WOGLI2Hr8IiaVInF2YNRiSOBptq+Tt/tERLljn//2Q=="},{id:"2022-03-23",src:"anilar/2022-03-23.jpg",thumb:"anilar/2022-03-23-s.jpg",date:{gun:23,ay:3,yil:2022},width:1202,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAApEAACAQMCBAUFAAAAAAAAAAABAgMABBESIQUTMVEUYXGBoSIyQUWx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIA/8QAGhEAAwADAQAAAAAAAAAAAAAAAAEhETFRYf/aAAwDAQACEQMRAD8A56JBjW4ZVG+RW7w2SKWAIiWwOvOuXdsenX5q3dcmHh726IGQp9ClMHPcH81R4dwu6NqVZAkTkNHKSMqfT2NGvBGumpuNuYvtbLj+0qPwDn9uR5cobUqqRCCFNcqrOxk5f2IzbDt51aa9lWDQWjXGRgL0HalKNwtXZnNfx6jkITnrlt/mlKUhsI//2Q=="},{id:"2022-03-24",src:"anilar/2022-03-24.jpg",thumb:"anilar/2022-03-24-s.jpg",date:{gun:24,ay:3,yil:2022},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAoEAABBAAEAwkAAAAAAAAAAAABAAIDEQQSITEyQXEFEyNhY4GRobH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQACAwAAAAAAAAAAAAAAAAECYQMSE//aAAwDAQACEQMRAD8Asns4DKXvAadyNaU7u4w8AijySgm9qPus2SeaPDykl5OXS+aqYeUtx7og90sRhadDW9WPshXeS0pjI1S42dIh5UEWa7DOc4nxdTfG1Eemi67dyslIe0ta4kcjZ2/VXggnjxD5HNtjowOIUHdOiIs1p8x9P5REQT//2Q=="},{id:"2022-03-24-2",src:"anilar/2022-03-24-2.jpg",thumb:"anilar/2022-03-24-2-s.jpg",date:{gun:24,ay:3,yil:2022},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBQQG/8QAJBAAAQMCBgIDAAAAAAAAAAAAAQACAwQREhMhMUGRBRQiUVL/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHBEAAgICAwAAAAAAAAAAAAAAAAEDEQITITFx/9oADAMBAAIRAxEAPwDqYwTMxM1+1GSRxdUVEx8dR42uDHna4uOlR46uljqHmZ5vIBcAck/HtXU2VdCOJJmhkP8AwekWl7VtLjREd/gNZ5ebOmmM0sTDJyWkkqWOkE2ORjrOsHHYkDbpEWYc2RSYhcEEHW+NERZeSlH/2Q=="},{id:"2022-09-30",src:"anilar/2022-09-30.jpg",thumb:"anilar/2022-09-30-s.jpg",date:{gun:30,ay:9,yil:2022},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQBAwL/xAAlEAACAgEEAQMFAAAAAAAAAAABAgADEQQSIVExBRNxMkFyocH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAbEQACAgMBAAAAAAAAAAAAAAAAAQJBERNRIf/aAAwDAQACEQMRAD8ApWlQo3Mx/JvM5iukahdrlXQlj1iTa85R7QrP7a7cD7d4/UzTC+tkstyCVAsIOM9jENuiqKstOrqUkbbOOPpiehQhALIST5IPETW+fDOpdOnqNatQlSgAFlZvgHP8kl257jTlSAAxBGM88c/MRGfRRpvszzTYT3kRESZB/9k="},{id:"2022-10-01",src:"anilar/2022-10-01.jpg",thumb:"anilar/2022-10-01-s.jpg",date:{gun:1,ay:10,yil:2022},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMFBP/EACQQAAIBBAIBBAMAAAAAAAAAAAECAwAEESEFEhMxQWGBMlFi/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8A7OSiSSACWUqCdEjO6guDGM3jt1bP5H1381zc3NGBAsKgBpACwXX1UeRhS18ccDMkkpLRhzrGfQn9+/3isa00BBMwB81wc7z3pV4L3FvGHjIbqMj5xSrYyLki4uojIyEK3bqTikNsLzkoxdo00CxNtnzv22DqlKQjTHHWQAAaYAf3SlKo/9k="},{id:"2022-10-03",src:"anilar/2022-10-03.jpg",thumb:"anilar/2022-10-03-s.jpg",date:{gun:3,ay:10,yil:2022},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAUCBAb/xAAmEAACAgIBAgUFAAAAAAAAAAABAgADBBEhElEFEyNhgSQxMkLw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/8QAHBEBAQABBQEAAAAAAAAAAAAAAQASAgMTITFh/9oADAMBAAIRAxEAPwDJvFR5aWsNUsxVX2CfkfeU6spFZVfmchlXDyK0YhhxoldFe8q1Xh7bLKw3pfioBO19+xh3NSW4B5WmyW620eN8RJozSwB3Vz3URJ5PlONK8A+oybrr7N9CgAMoIO/b4m/j0mzNDUv0C6wdY/Uj+ERCd1DVWwcQsd2c77xETZf/2Q=="},{id:"2022-10-09",src:"anilar/2022-10-09.jpg",thumb:"anilar/2022-10-09-s.jpg",date:{gun:9,ay:10,yil:2022},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBgIF/8QAIxAAAgICAgIBBQAAAAAAAAAAAQIAAwQREiEFMRUUI0Fxkf/EABcBAQADAAAAAAAAAAAAAAAAAAIAAQP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAASERMf/aAAwDAQACEQMRAD8Ah+bo5MtuPZW29c6+pZx6+eehB3pdsWPc8nGxq7M21rkLBetb17Pud0ZJ+3crEiosbVDaJ76P661M/TxrQvUSGryOFZUj/VVDkoOi2iIh5V4y4tSjyWSj6CkEnf8ARKuDhPmoqqwUuxXZ3ERwas/CsPeXQD+QT6iIiR//2Q=="},{id:"2022-10-09-2",src:"anilar/2022-10-09-2.jpg",thumb:"anilar/2022-10-09-2-s.jpg",date:{gun:9,ay:10,yil:2022},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAQP/xAAjEAABBAICAQUBAAAAAAAAAAABAAIDEQQhEjEFEzJBUXGB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABoRAQEBAAMBAAAAAAAAAAAAAAEAAhIxMkH/2gAMAwEAAhEDEQA/ANs/lcV3IMLnyDQ1om67XnDnSQZhhfxeyQUHEAFpq618KJNPjuEkcbSACCXDvtdy8iZmRDlBgkgANNquX2m07IYMvdWz/Mem8RsgLT0RVgikUvMlgnayRshdK4bY2+LB+lEnLVkBpuHuR972FtynHgBZoQtoX1pEVX0Q+Nnj9v8AERFOF//Z"},{id:"2022-10-20",src:"anilar/2022-10-20.jpg",thumb:"anilar/2022-10-20-s.jpg",date:{gun:20,ay:10,yil:2022},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAQIE/8QAJhAAAgICAQIFBQAAAAAAAAAAAQIDBAAREiExIjJBUXEFExRh0f/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8Age+ZRHVL6aaUKW15Vxf4RXYIokjVZCUZQTonXtm+61iRZhCoKEFSPfK2xWnt3Wk+8eX66lfgfzDKrUliuanBk4guNgIeoGMgSyZrMEcrLJHw8asNEN27999BjHoyO6t5GHzmCB+Dak0Oat4W9R0HY4xjQqqoDfUE5DeyN79euMYwhf/Z"},{id:"2022-10-22",src:"anilar/2022-10-22.jpg",thumb:"anilar/2022-10-22-s.jpg",date:{gun:22,ay:10,yil:2022},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQGAgMF/8QAIhAAAgIBAwUBAQAAAAAAAAAAAQIAAxEEITEFEhNBUSKR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQADAQEBAAAAAAAAAAAAAAAAASECAxH/2gAMAwEAAhEDEQA/AJd3UH0dBZ3yeFVuSZD0XUrF7rNZZlWOVG2PfziVnzO7r5XZgDnc5xN9VotuOTjOw2l60/YGcryl2rsoYKWPb3cE8f2JzNH1GkPVRcAg8YAPrI2iC6ysHzsKieZlWcOuPsRAolVEtrB3En9e4iIIWf/Z"},{id:"2022-10-22-2",src:"anilar/2022-10-22-2.jpg",thumb:"anilar/2022-10-22-2-s.jpg",date:{gun:22,ay:10,yil:2022},width:900,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAiEAABBAIBBAMAAAAAAAAAAAABAgMREgAhBQQTMVFhcbH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A5CpGbJ6R5TPeDau2TW0an1lPkSmjJUlCu2gI9fnn7xpCHTxbbIEIveggmY8zjqyJIAKrKE7mN441yDraKAJIB0SNj4wwwg//2Q=="},{id:"2022-11-11",src:"anilar/2022-11-11.jpg",thumb:"anilar/2022-11-11-s.jpg",date:{gun:11,ay:11,yil:2022},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJRAAAQQBAgUFAAAAAAAAAAAAAQACAxEEITEFEhNBURQiQlNh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhIv/aAAwDAQACEQMRAD8A8PEx+rG5wIG9X8q3pZyMYYRI0fhNd1RuU6HHMbXudYugdKPlc3Ve5oG/Lqik6LCbRW9Qz6Y0T0JOLjzziRsEZfYpxrZbPx5eGEPeHB5OmntI8G0RBvqCSynMch5JNNF9g1ERVgT/2Q=="},{id:"2022-11-21",src:"anilar/2022-11-21.jpg",thumb:"anilar/2022-11-21-s.jpg",date:{gun:21,ay:11,yil:2022},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUGAwT/xAAkEAABBAIBBAIDAAAAAAAAAAABAAIDBBEhEhQxMlEicYGxwf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//EABkRAQEBAAMAAAAAAAAAAAAAAAABEQIxUf/aAAwDAQACEQMRAD8A88l6erPIY5n8RstdsbKqV54LNmMcg1zXEYBzk4UCzNmOTDjkAHyGtrm6xDLBCGtdHOwAF2sOHv7WUjW9a3mB6RRK9m108XmfgN4PpEsDUeWk3pJniQumb3a1uiBs9++PwpzIXRvj5Yw9oe36OR/ERULl43NaWwa0R4jwH6REVov/2Q=="},{id:"2022-11-21-2",src:"anilar/2022-11-21-2.jpg",thumb:"anilar/2022-11-21-2-s.jpg",date:{gun:21,ay:11,yil:2022},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAgP/xAAmEAACAgIABQMFAAAAAAAAAAABAgADERIEITFBURMUIjVhcaHB/8QAGAEAAgMAAAAAAAAAAAAAAAAAAgMAAQT/xAAbEQACAwADAAAAAAAAAAAAAAAAAQIRMRJBkf/aAAwDAQACEQMRAD8A6SvQbYCqBk55ZH8nkll9nDe421Y4KVleTL25+ZJv4tizqzfM8nPY/mUG40JVXQKmd/TXTU42P3PgYEB2N4JFW25KlrZdiVwCGXsekTNTxNQvorYaJn5p1APYxJG2rBlSdECgA1M2BnfrKdn1SoeKTj9xEqWMf14ZVJLZJyc9YiI9YZHp/9k="},{id:"2022-12-15",src:"anilar/2022-12-15.jpg",thumb:"anilar/2022-12-15-s.jpg",date:{gun:15,ay:12,yil:2022},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMFAgQG/8QAIxABAAEEAQQCAwAAAAAAAAAAAQIAAxEhBAUSQVEUYTEzgf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAP/EABoRAQEAAgMAAAAAAAAAAAAAAAABAiIyQYH/2gAMAwEAAhEDEQA/ANnldQhf5rxxWFoyxwve+dHoqA52ONcO/UVO9grF8GXeqpWXy7jcRhLxPOM/dY8eyWpylC/JiOXuM5+6FO6u2t3GdmEn8sR1SqHp/U0kCyYGmONY90pTKAqb/wC1PHqpOKDbmJrRj+0pU+lLzvqSyBC4GsJjFKUrRJ//2Q=="},{id:"2022-12-24",src:"anilar/2022-12-24.jpg",thumb:"anilar/2022-12-24-s.jpg",date:{gun:24,ay:12,yil:2022},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgADBBEhBRIxQRRRFSIj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQExQf/aAAwDAQACEQMRAD8AuZmSuKFHZ3Fhvk6AEnjqT3aNIK79E8b+pyfkF6vm7r/ktaaO+T59TPOx/gVrc1q3LY/teVEGlki8mXSyKzWgEgEju8RPEHKLEkLoHnURQa06VX2LZe5K7/Vfr73Nsu1bsO1UckDnk79xEHp5xMHiIiUB/9k="},{id:"2022-12-25",src:"anilar/2022-12-25.jpg",thumb:"anilar/2022-12-25-s.jpg",date:{gun:25,ay:12,yil:2022},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAjEAACAQQCAQUBAAAAAAAAAAABAgADBBEhEkFREyJhcYHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQEAAwEBAAAAAAAAAAAAAAAAARESAiH/2gAMAwEAAhEDEQA/AKVnTdypClznYB68yepTojjw2V2294/k4S+o271Q/tOBhsE5x+9ypVv6L0qPo5Lh+ZU9edw3Nn5TR4v0mvnMSVOJQEPgEdqIi1AZlgXBDqCwzgya3t6KnIXPLf1EQSXCyahBICHUREKj/9k="},{id:"2023-01-01",src:"anilar/2023-01-01.jpg",thumb:"anilar/2023-01-01-s.jpg",date:{gun:1,ay:1,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUBAgMG/8QAIRAAAgICAQQDAAAAAAAAAAAAAQIAAxESIQQyUpFCUaH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwDyy9Oy7G0FVXg54JP1OuuprWK1jJnPa20fJsSvVVWiJoFBZcZHGYdsKTUU9PaCRoYlotVnsb1EuliZXaBUirngfs17Nwi+OYiIGbv5N7iIk1//2Q=="},{id:"2023-01-06",src:"anilar/2023-01-06.jpg",thumb:"anilar/2023-01-06-s.jpg",date:{gun:6,ay:1,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMFAgT/xAAoEAACAQIEAwkAAAAAAAAAAAABAgADEQQSIUEFEyIjMTJCUVKh4fH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwD/xAAaEQADAAMBAAAAAAAAAAAAAAAAAQIREiET/9oADAMBAAIRAxEAPwC/MZaS1CzK1s4BXQDa87TEU8WEQplNwy3O4nixmKtgkZS9R1AzAHp02IklrqOXVoAAAglW20/ZldvhnMcNBqbZj4u/1iZr8aqZ26N/d9RHRhlEKnLurjzmzAC5tJhuzYobFT83iIkkXHCKzAFsQgY6kaxESXpRTB//2Q=="},{id:"2023-01-07",src:"anilar/2023-01-07.jpg",thumb:"anilar/2023-01-07-s.jpg",date:{gun:7,ay:1,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EACQQAAIBAwQCAgMAAAAAAAAAAAECAwAEERIUITEiQQVhI0Lw/8QAGAEBAAMBAAAAAAAAAAAAAAAAAwABAgT/xAAaEQACAwEBAAAAAAAAAAAAAAAAAQIREjEi/9oADAMBAAIRAxEAPwDIuRe3O1VyIUXW4POvB649VmCcR301urFYjhkAbhc/2cVNs41k3EDspydJz1xXOy+Lud0JGuDFIzE6s5yKw5Wxc5XC26utxEbWJQWjk88e8dGldrdZYrt5JJVbnSuBgd9/dKuXmg4PVlEKrs18R2vr6qf5slAhU6SJfXH6mlKM6Xw3ZfkuH1+WlBjPOKUpUQcj/9k="},{id:"2023-01-08",src:"anilar/2023-01-08.jpg",thumb:"anilar/2023-01-08-s.jpg",date:{gun:8,ay:1,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUG/8QAJBAAAgEDBAICAwAAAAAAAAAAAQIDAAQREiEiMQVBUXETUpH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8AxH5qYX7AElM6Qnoj5NVvDaXYLBTbSH5HA/zavOeOLNK0zqTFupJ6z6FXR3GbNVViBHkcSAc5o3rCnOzVB8NNk4EZ+pBSuEyS6jxbv9qUtiOjYzwKHtwhj0niZO/s1qyx3F0VQCMKN8DelKybW+Kl/EihdQ2GOqUpUB//2Q=="},{id:"2023-01-11",src:"anilar/2023-01-11.jpg",thumb:"anilar/2023-01-11-s.jpg",date:{gun:11,ay:1,yil:2023},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgL/xAAjEAACAgEEAgIDAAAAAAAAAAABAgADEQQSITEFQRNhIjJx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAbEQEAAgIDAAAAAAAAAAAAAAAAAQIRIRIxMv/aAAwDAQACEQMRAD8AkajyjjU21X1h6VJO/PKiKdurFZG/O8gq7c9SstvHzPk/uWUgH1nucOH09tb6bUtYpwzKH/IN7P0JKNqW1GWxFKAABRx9RKlPMsEAKKTjk57iPCfKGeUko7g9t69SFk/JYy5BzkRENezv5SA5wMu+f7ERGi//2Q=="},{id:"2023-01-17",src:"anilar/2023-01-17.jpg",thumb:"anilar/2023-01-17-s.jpg",date:{gun:17,ay:1,yil:2023},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBQb/xAAhEAABBAEEAwEAAAAAAAAAAAABAAIDEVEEEiExEyJBYf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/EABURAQEAAAAAAAAAAAAAAAAAAABB/9oADAMBAAIRAxEAPwDz7Y/Vx30R8ysEurhxWZZAHW0kHrhVkliMLDREnO7BwiSVuyUWPKMosimlETpQ6cOcy6LWdlU1WmIa+RgGwWO7I/URSrHNRETF/9k="},{id:"2023-02-12",src:"anilar/2023-02-12.jpg",thumb:"anilar/2023-02-12-s.jpg",date:{gun:12,ay:2,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EACUQAAIBAwMCBwAAAAAAAAAAAAECAwAEEQUSMSFBFCJhcYHR4f/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAAMBAAMAAAAAAAAAAAAAAAABAgMSITH/2gAMAwEAAhEDEQA/ABngjkVGkjjYr1A82P2tmSHAHiMtzz9VA4d9OmkJWRjmQgEZHXkiqWjF/axyJsl3HK7Xwyjg9OwpWrXQ1lL8LNT0+0YpbpbBTMgIccrgk/Fc5LaO3yltNJGe7KefQ9j70pUowunyP//Z"},{id:"2023-02-13",src:"anilar/2023-02-13.jpg",thumb:"anilar/2023-02-13-s.jpg",date:{gun:13,ay:2,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAlEAACAgICAQIHAAAAAAAAAAABAgADBBESITFBYQUTMnGBkaH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwL/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRA//aAAwDAQACEQMRAD8As5FyPS9aWaYEsewN+P36yHGvRqFUksprPDewOifJ9plZF3PG5KQCmx/ZyXvusoxaW4lVCKR799zDkpN4bIzlw2QXc3RvDFdRMH4hk5RtfGus+YFfRbWuWohc9D6YVLfr/MmuJC2kEggjRH3iJVkUVaSTbsknv1iIgM//2Q=="},{id:"2023-03-21",src:"anilar/2023-03-21.jpg",thumb:"anilar/2023-03-21-s.jpg",date:{gun:21,ay:3,yil:2023},width:326,height:580,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA0DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAQL/xAAlEAABBAIBAQkAAAAAAAAAAAABAgMEEQAhFBIFE0FRUlOBkZL/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAQEBAQEAAAAAAAAAAAAAAAEAAhFR/9oADAMBAAIRAxEAPwCT5j/uq+80TZASB3hoZSSYUeK062yvrKE0eoefjdb+M55ymmWrIUopF23dYFPK5nXOjLu1Zyp0dlpI02Sd1rQxXx3B6f0MMMdG/9k="},{id:"2023-04-08",src:"anilar/2023-04-08.jpg",thumb:"anilar/2023-04-08-s.jpg",date:{gun:8,ay:4,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAnEAABAwMDAwQDAAAAAAAAAAABAAIDBBEhBRIxIjJBE1GR0WGhsf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAf/EABkRAQADAQEAAAAAAAAAAAAAAAABERICUf/aAAwDAQACEQMRAD8AuUkkswJDg5jAbC/zZSUtc+chwiDY3YaS8X+PCzoKtkWmxyTujjsw2Ab3XPF/pS0L44omu2nIBb09w4U79Up0I0/A3TyX824RYj9WnL3FtRKGk4Fhj9IqaHEset9E0z4o3A7DkDwfdXKGRlRp43u2vg4P4J+/6iIy3lC+ii3u65Bk4B4REWXJ1D//2Q=="},{id:"2023-04-13",src:"anilar/2023-04-13.jpg",thumb:"anilar/2023-04-13-s.jpg",date:{gun:13,ay:4,yil:2023},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQb/xAAoEAACAQMCAwkBAAAAAAAAAAABAgADBCERE0FRkQYSFBUxMkJTYXH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEh/9oADAMBAAIRAxEAPwDo6gCoxPoBriZ1hcpdvWKqy6aahuEw/N617a1EuUIUe0sCO9jjzzLOzhNKsDUrhS6ncUnX+annBpzjoDSyYlviKH2p1iUFgvWpvhmQkcDmQG2DjbH6BETCS30HwHQREST/2Q=="},{id:"2023-04-13-2",src:"anilar/2023-04-13-2.jpg",thumb:"anilar/2023-04-13-2-s.jpg",date:{gun:13,ay:4,yil:2023},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMFAQQGB//EACQQAAIBAwMFAAMAAAAAAAAAAAECAAMEEQUhMRITQVGRIoHw/8QAGAEAAgMAAAAAAAAAAAAAAAAAAQIAAwT/xAAaEQACAwEBAAAAAAAAAAAAAAAAARESITEC/9oADAMBAAIRAxEAPwCO5undwleiAnX1kuc8r/fJDSe3tdUtqgfChyzBd8DxM6jbVWtmdKJZg+SU8frmUikpjq2J+wedGeHoa31sVBFdNx7icH329n7EaqFk2rrWrum7GkwXPG3ErO+Kr5Yfkc7mIg48J0vqOgpUo03NdgWUEjt8ZEREuhGezP/Z"},{id:"2023-04-17",src:"anilar/2023-04-17.jpg",thumb:"anilar/2023-04-17-s.jpg",date:{gun:17,ay:4,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EACEQAAEEAwACAwEAAAAAAAAAAAECAwQRABIhMYEFE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwL/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIREiH/2gAMAwEAAhEDEQA/AGfKTkypAbYKyOcA6o3WAlodjOBC2bXXTfnFzW2UrZC1tg79F1r5/feCH1Ce42vYEIBGxrl856wW1LpeaRyJElT8orXtoomjmVhutgVEn+5ZYwB//9k="},{id:"2023-04-20",src:"anilar/2023-04-20.jpg",thumb:"anilar/2023-04-20-s.jpg",date:{gun:20,ay:4,yil:2023},width:769,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAJRAAAgIBAwMEAwAAAAAAAAAAAQIAAxEEEkETITEUUWFykcHh/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EABsRAAEFAQEAAAAAAAAAAAAAAAABERITIQJR/9oADAMBAAIRAxEAPwDQ2h2pkEseQB4haQiFycAccyd2ptppZ1stLAdhkH9TKluq11Svay7kJBVhL345CBrGpXAyq5+38iZPTX+y/mJK9fRo8luphsb8Dk48SVRKvacg7nz2iJnRcYYp1PkxEQMA/9k="},{id:"2023-04-21",src:"anilar/2023-04-21.jpg",thumb:"anilar/2023-04-21-s.jpg",date:{gun:21,ay:4,yil:2023},width:769,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAnEAACAgEDAgUFAAAAAAAAAAABAwACBBEhMQUSExQiQZFRYnGB8f/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/EABcRAQEBAQAAAAAAAAAAAAAAAAAhARH/2gAMAwEAAhEDEQA/ALTE4uP0q2Y0kGunpJ5Mjx7dOzLvqu9j2amhHFhoPf8AcsXStywpovdIFhYcew+nzMQOOFlXKVClSAGEHYV/EhSfwjE2QtBAIWCD9piO4Ir5DFd1Fp117id+ToAPnec/1RWb5plVVaVmo2B2I/sRGRro8dZGOoWPqFBrzzpERJrY/9k="},{id:"2023-04-22",src:"anilar/2023-04-22.jpg",thumb:"anilar/2023-04-22-s.jpg",date:{gun:22,ay:4,yil:2023},width:769,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EACYQAAICAQMDAwUAAAAAAAAAAAECAAMRBAUSITFhE0FRFCIycfD/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAAMBAAAAAAAAAAAAAAABAAIREkH/2gAMAwEAAhEDEQA/ADEoHXHFSR3PadKnUvdp2pdmrIPRgv5eJHqE9PTCy2sVZuXj92fnGcyenUJTVksQvAPWWXIbx/exj2rBgaqRt6MM+pYc9e0SP6+s9SCPAiV0xyWd7Nuu3arb6zxQEciewJ9z+hM7sUR6KUzxROK5+BgREyx8Kmi4xETSm//Z"},{id:"2023-04-24",src:"anilar/2023-04-24.jpg",thumb:"anilar/2023-04-24-s.jpg",date:{gun:24,ay:4,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAwQG/8QAJxAAAgIBAgUDBQAAAAAAAAAAAQIAAxEEIQUSIjEyEzNxQVFSgbH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAASECEf/aAAwDAQACEQMRAD8AcNC2LZqbEyF6UY+Of33mDVdqKnuopJVjkAL4iQaNfcaGo9UrU/cfifvLNeovGjHISyt1NjqOw3/kzvJzcaqVvckumRnOCO8TqrR3rBYkEgHbbES2e+JObrylHkfiWdOzLw88rEYdgMH6REYxaX2h8CIiE3//2Q=="},{id:"2023-04-24-2",src:"anilar/2023-04-24-2.jpg",thumb:"anilar/2023-04-24-2-s.jpg",date:{gun:24,ay:4,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUCA//EACoQAAEDAwEECwAAAAAAAAAAAAIAAQMEERIhBRNBwQYUFSIxNFJzdKHC/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//EABgRAQEBAQEAAAAAAAAAAAAAAAEAEQIx/9oADAMBAAIRAxEAPwCVQQFOUoy9zB24WW5oXgrwhgJyZ2uQE31dVNqylRbt91wcXkvqVudlJqYuq7QlYJCICDJid7vi7XRNWWgVN6B8MgE8vTZFFo6k4phJpCez+GT2dFphCudJ/JD7v5Uza2lRB8cOaIjx4VN0pxHsKrLFssx1tqiInS//2Q=="},{id:"2023-04-25",src:"anilar/2023-04-25.jpg",thumb:"anilar/2023-04-25-s.jpg",date:{gun:25,ay:4,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAJhAAAQMDAgYDAQAAAAAAAAAAAQACAwQRIRITBRQxQVHBImGBof/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABgRAQEBAQEAAAAAAAAAAAAAAAARASEC/9oADAMBAAIRAxEAPwCzHR05u0kboHboqJpwx5GLA+VfrH7e5umMNIy9o6Wzb9We7jThA0NayHQTcABznWHf6KGNPWR60R+P6ihPHoXOJ5cZPm3pEuhxnVFVJUyXe46RgNJvZcNRHDGDy8UjyT8ngn2iJwbqHmoDk0rLnrYkBERRa//Z"},{id:"2023-05-03",src:"anilar/2023-05-03.jpg",thumb:"anilar/2023-05-03-s.jpg",date:{gun:3,ay:5,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBQT/xAAkEAACAgEDAwUBAAAAAAAAAAABAgADEQQFIRJRYRMiIzFBcf/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/EABkRAAMBAQEAAAAAAAAAAAAAAAABEhExAv/aAAwDAQACEQMRAD8A4KdTY+z6klXL2v77CMjPk95Gh2O6+ss7CkhuAf2To6LtVtgqqp6TjHqOwVCc5HPfxLdusIddPw7Zz8mQEI7Y/vMnS0lpadMVPSXbI4+omkdwsBINCk9wwwYk0JMi9jqlJb46VHTUgHAErXba16SXYY/QeSPMRC4Z66bCXIiKoV8AY+xERMlCmf/Z"},{id:"2023-05-09",src:"anilar/2023-05-09.jpg",thumb:"anilar/2023-05-09-s.jpg",date:{gun:9,ay:5,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUG/8QAIhAAAgICAQMFAAAAAAAAAAAAAQIDEQAhBAUxcRITUYGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAdEQABAgcAAAAAAAAAAAAAAAAAATEDBBESISJB/9oADAMBAAIRAxEAPwDc4vV0KyNMyhUFmjvzXxi5OtQvp/UhB7CwR5znW5SuEjjDyFnoq+yFG77V94tOQ80srxJewAGAJoecOelLasUuWXVEdLDCxYNZLiOfbDG93f7hhjisVk13P//Z"},{id:"2023-05-15",src:"anilar/2023-05-15.jpg",thumb:"anilar/2023-05-15-s.jpg",date:{gun:15,ay:5,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAkEAABBAICAQQDAAAAAAAAAAABAAIDEQQhEjEFEyJhcSNBUf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/xAAZEQADAQEBAAAAAAAAAAAAAAAAARECIRL/2gAMAwEAAhEDEQA/ANTFmbDE+NtumO2tAVeXKx2Pc2zYoOIaaaT0Cb0q8szYYvUlfTSdHjdVqie7WdkZULo5eNuDz3eyD+/tT6ZaxVw7iOMGNmz0EXHHykTjyHk5GA7DeDvb8dorrMoRyY7xl5H5XODfcQerI7pRY8Mb4ZXNpsmOaOu/v4REbXB56zGcJC4nhVn+oiJwVP/Z"},{id:"2023-05-20",src:"anilar/2023-05-20.jpg",thumb:"anilar/2023-05-20-s.jpg",date:{gun:20,ay:5,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMBBAX/xAAlEAACAQMCBQUAAAAAAAAAAAABAgMAESEEYRIiMUFRExQyodH/xAAYAQACAwAAAAAAAAAAAAAAAAABAgADBP/EABwRAAICAgMAAAAAAAAAAAAAAAABERICAyExQf/aAAwDAQACEQMRAD8AtqJzpITgo1zxANe5PnvUoZZdPZppCGkuxCj4/viptE2o1avOCxAtwXyO4ztWwgQsDK5YFbNk8463O4pKsbJpcM6PWdsiU2ORyUrvVHCgLawGMUpaoEo8gyH3IKtzGQdNq2QLHM8YAVxhd/B+6Uq5dA3eFxqOEAHBGLW6UpSpCM8s/9k="},{id:"2023-05-25",src:"anilar/2023-05-25.jpg",thumb:"anilar/2023-05-25-s.jpg",date:{gun:25,ay:5,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAhEAACAQMEAwEAAAAAAAAAAAABAgMAESEEEjFRBUFxE//EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/AOXNA4YyAsYg2wuwwhPonutmfEhWU/rFJi4utmHdLqIW0sEkLRlHYhQbXHPNWfRwa+COKaR4mjyWD4z6+0Zb3Ua5nBpvJSTaW5QbAdpIFzf79qqRrFGGcnc3IB5PdFFUCs//2Q=="},{id:"2023-05-31",src:"anilar/2023-05-31.jpg",thumb:"anilar/2023-05-31-s.jpg",date:{gun:31,ay:5,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAQP/xAAnEAACAQMDAwMFAAAAAAAAAAABAgMABBESEyEiMTIUQVFhgZHR4f/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAf/EABkRAQEBAAMAAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8A0RSQgqOULN5ntk/IrFdYvpZHm3EKHRGy8qPj+1TXNpJfLv3GlEOpiEP4IFd9TDb25uEVjh+kMR1ZOB+6HfpycdTHPDtpqhTVgZpUi7sEGllYsOCdPvSqZQ2MMduBHGZONzOT25xwK85VYZiRjtqA7nHh7cfWlKrZE4oQXJAISLB7am5+9KUrWP/Z"},{id:"2023-06-01",src:"anilar/2023-06-01.jpg",thumb:"anilar/2023-06-01-s.jpg",date:{gun:1,ay:6,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBP/EACIQAAIBAwQCAwAAAAAAAAAAAAEDAgAREgQhMUEFEzNRYv/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAECQf/aAAwDAQACEQMRAD8ASxpnpdOwj41Yz/JyNqu+GVByjESxMeQRvULBhS1So3cyNhEC2Vzzc9U6Opboor9qcNjE2Pf1cVEq7lliWabyapwVIyxOxvuOKrialKEg1kFNJmMej2KKKKM9f//Z"},{id:"2023-06-08",src:"anilar/2023-06-08.jpg",thumb:"anilar/2023-06-08-s.jpg",date:{gun:8,ay:6,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEBgP/xAAnEAABAwMDAQkAAAAAAAAAAAABAAIDBBESITFBUQUTFBUyQoGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8A21xDZwHEtbve9gTwLrIZi4PMbBjcAa6A868K3PHFVMAkGQ+woU1L4etJpg2SkcxwdkbiO3qb+KZF8zHrFJkwE6EopNO9s84fHODjbFp3+USh0sJNzr7wuRZI/wAv7RGbrd5tfqdURComcRnnqiIkR//Z"},{id:"2023-06-19",src:"anilar/2023-06-19.jpg",thumb:"anilar/2023-06-19-s.jpg",date:{gun:19,ay:6,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAJBAAAgEEAQQCAwAAAAAAAAAAAQIDAAQRITEFEiJhE0FCseH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECITESQf/aAAwDAQACEQMRAD8A83tw9xdrAsgZcBnK+J51UFwxDiL5B3B1XDfkpGQatS9Oi+aCe0lIcthlJ1jPFZd5aNDczm47nJfKupxv1UldD80XTBGbsZDdilEJBG+Sd0rtnEZIkMPaI4dFG2eP7SjxLwVtLSK5YgjBI2v37qe9308535j9UpQHRm27FWOCR4ng+qUpWiOEpaf/2Q=="},{id:"2023-06-20",src:"anilar/2023-06-20.jpg",thumb:"anilar/2023-06-20-s.jpg",date:{gun:20,ay:6,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQDBQb/xAAhEAACAQUAAQUAAAAAAAAAAAABAgMABBESIUEFEyJRgf/EABUBAQEAAAAAAAAAAAAAAAAAAAMC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIRAxEAPwCwhvY4/SpPcQl5iWxjxztJSq0AAVC+ejoBANKTXNrILe3e6CRaBS+pOp+yKZEyZ3WWNgw5ldjj8qK3STMs3JtNIAkfT4FSRwylmKllxz4nFFFIJ//Z"},{id:"2023-06-21",src:"anilar/2023-06-21.jpg",thumb:"anilar/2023-06-21-s.jpg",date:{gun:21,ay:6,yil:2023},width:1600,height:1202,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMFBP/EACUQAAICAQMEAQUAAAAAAAAAAAECAAMRBBIhBRMjMVFxgZGi8P/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/EABkRAAMBAQEAAAAAAAAAAAAAAAABAiERMf/aAAwDAQACEQMRAD8A5U16uxV2KEZbOOCJWm+xrUAwA58bHjMxqLLnJDVB9ox8YHxNXUHu9OSsUs+3GF2k7fvn+zCm5HDNem0WZXejsPZQ5BiZWj6si9o18sSQ9b4P1P5iaJttaiNQu4QwB05CAASTyJOix11ejCuwBtTIB98REiMnUANdqyAB5XH7RESs+BZ//9k="},{id:"2023-06-22",src:"anilar/2023-06-22.jpg",thumb:"anilar/2023-06-22-s.jpg",date:{gun:22,ay:6,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAoEAACAgIBAQYHAAAAAAAAAAABAgMRAAQhEgUTFSIxYSMzYnGRwdH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/xAAZEQEBAQADAAAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEQA/ACF2iaVRcYNE/v7ZFpY7bzBSos85z09tZtQIY3Zq6SF9R+ObynPuy6bXFo92rxkHqFmyeCRhlpWRrrqyOoboTkX8wYzCXc2wo+EfT6v7jEPC12YxBLwxh3sXT9Jr298tiYJFI7MIZgfKjAgkA2BeMZNTss+J+Ja7cmNrPJpsYxmR/9k="},{id:"2023-06-22-2",src:"anilar/2023-06-22-2.jpg",thumb:"anilar/2023-06-22-2-s.jpg",date:{gun:22,ay:6,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYCAwX/xAAnEAABBAEDAQkBAAAAAAAAAAABAAIDEQQFEjFRBiEjMjVBYXGRwf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAAMBAAAAAAAAAAAAAAABAAIREjH/2gAMAwEAAhEDEQA/APSyNVdCwOc6M2aFNNErDdYEjmNbsO/ynaaJ6cqfk1OOWOpC4bXXXUE8j6Cyc3GxpYiPFYH2NpANJiw4mqlfnSD2j/EXLGZi5mMJcd7nMPdR5B6FE+yjloiTgrkERUzrHsv6c/5k/iIixfay/9k="},{id:"2023-06-26",src:"anilar/2023-06-26.jpg",thumb:"anilar/2023-06-26-s.jpg",date:{gun:26,ay:6,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAnEAACAQMEAQIHAAAAAAAAAAABAgADERIEBSExQRMUIiNRYXGBwf/EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/EABoRAAMAAwEAAAAAAAAAAAAAAAABAhExMkH/2gAMAwEAAhEDEQA/AKFX19yNIqwBYm/V/NprbVVjVag7FqIXIKxyxN7d9ylq9VNTiAQRc4jm4ktDXpOcKygOxIRivf2kuWvSpwaWumldagLElQfzz5iYN53Fae4UVxD0WQFwOwQSIjgCxyRrWIPP1/UbQM21OXxfO88+YiL5Qz0zibuT7miL8Cn/AExETTol7P/Z"},{id:"2023-08-08",src:"anilar/2023-08-08.jpg",thumb:"anilar/2023-08-08-s.jpg",date:{gun:8,ay:8,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBv/EAB8QAAEEAgIDAAAAAAAAAAAAAAEAAgMRBBITIUFRkv/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAASFB/9oADAMBAAIRAxEAPwDlzkZAF88v2Vbk5r3YUDYppOQAbUT6UeO0SSHq6HVrSciFrRtYPiu0UyYnZIWG2pubu0RJ4//Z"},{id:"2023-09-14",src:"anilar/2023-09-14.jpg",thumb:"anilar/2023-09-14-s.jpg",date:{gun:14,ay:9,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EACEQAAICAgICAwEAAAAAAAAAAAEDAhEABBIhBSITMWFR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERITEC/9oADAMBAAIRAxEAPwBDZ05sQYpYIzsUTdYXraXkI7c/k5BfEgHn0TY+sU3NicCta+XtZkYiyAP5nIjdah04vLGJ74SlRkCP0fYxWBc1IZreS8jtETlBZVdEx6lX5mW7BUfRDGgnsGVVllkemlkH/9k="},{id:"2023-10-16",src:"anilar/2023-10-16.jpg",thumb:"anilar/2023-10-16-s.jpg",date:{gun:16,ay:10,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAiEAACAgEDBAMAAAAAAAAAAAABAgARAwQSISIxQVETcYH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/xAAYEQEBAAMAAAAAAAAAAAAAAAAAAREhQf/aAAwDAQACEQMRAD8A45z4wwL6NUer5Jo/kx6vM+R9zC6HgcATTr9ViGRU56QfElordnG3pdbonvDJjZdcyxEm2E7jRHf1EaL82MahxbhT3LGXH4VwKUysXPFeoiFYo3fURETP/9k="},{id:"2023-10-20",src:"anilar/2023-10-20.jpg",thumb:"anilar/2023-10-20-s.jpg",date:{gun:20,ay:10,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgIE/8QAIhAAAgICAgICAwAAAAAAAAAAAQIAAwQhERITQVFhBTHw/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABsRAAICAwEAAAAAAAAAAAAAAAARARICIUFR/9oADAMBAAIRAxEAPwDN2MVA9k/M6x7qyR5BuaZ/xGJjXG3JtS/hQvr9/JEhx6MO62xGoqZBWSHTXDDev7cTqKPTK4LSRE9RwquTzmVj6MRqyC+PpPS6W5Fz2DsqPwgLdQdcGQKniybFx1astyOpfsrD6iIV0zcoomWwMRrR9xERyR//2Q=="},{id:"2023-10-20-2",src:"anilar/2023-10-20-2.jpg",thumb:"anilar/2023-10-20-2-s.jpg",date:{gun:20,ay:10,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEBv/EACYQAAICAgEDAgcAAAAAAAAAAAECAxEABAUSITETYRQiMkFxgeH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRMf/aAAwDAQACEQMRAD8AscxttqaTyIQHoKp9znNiR9WCPejkmLOxu2JDV5vOg5Y0iyFVcRyXR/GSDv7CyO4RilfQwHSuZvpcymi3HtwSRq4cUwBxkxeP9RQ4SNQwsANVYw2iMMHI7mxcQaZyjH5hfb941mlSbqkNxL3YN4I98Yxo1NqcvaKfhx4+zfzGMZQYj//Z"},{id:"2023-10-21",src:"anilar/2023-10-21.jpg",thumb:"anilar/2023-10-21-s.jpg",date:{gun:21,ay:10,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EACcQAAIBAwMDAwUAAAAAAAAAAAECAAMEEQUSIRMxQRQi4SNRUmGB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREAAgEEAwAAAAAAAAAAAAAAAAECAxITMSEiYf/aAAwDAQACEQMRAD8ApuLxKLohpFmbwDiDUtbqp0GQkfkfE5189lc1muKVVekqnaxBHPYj9TDSnpenauzNikM9xkcn4jlklyONPRe2m6aGINVsg88fETBSSoJpNkjwxxEm9+BYyBra1udR6SArSRfft4BPJnbo6Wi2iUiFKOuxtvYHja0RM5bNqa6kXpdRpfTBOE9vB+38iIgUf//Z"},{id:"2023-10-21-2",src:"anilar/2023-10-21-2.jpg",thumb:"anilar/2023-10-21-2-s.jpg",date:{gun:21,ay:10,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAlEAACAgIBAgYDAAAAAAAAAAABAgARAwQhBRMSFCIxMkFikuH/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAB/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAEDEQISURP/2gAMAwEAAhEDEQA/AKT4VbxdsFgvBI9hK76rc2tAGoG8i9OslQbIoDm5xubOFlw4/mpqweKEtz5t0ZRYpXZP5DB97B/X+xK3Y0TzZ5/OIPpl0TRcM5cYZ1BuiZtHp4zHHtHIAAo9P3YiJyR0VGrJ26fqsxY4lsmzERC2Y2q4f//Z"},{id:"2023-11-05",src:"anilar/2023-11-05.jpg",thumb:"anilar/2023-11-05-s.jpg",date:{gun:5,ay:11,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQH/xAAkEAACAgIBAwQDAAAAAAAAAAABAgMRACEEEkFRBRMxMoGRof/EABcBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAdEQACAQQDAAAAAAAAAAAAAAAAAQIREhNRIjEy/9oADAMBAAIRAxEAPwC3xOQwswXLHsGxX6yo3MePUTRCjss+x+M576clI2lZFmDHpP1snxvWSLx1njhhDgkWy3RLecFJxG1NVJQ0jAMJwQdikxle3XRZxWvnGHPZRYtGVz+lAZKFn+nJPSmkm6pZJGJjpEvsMYzUujil4NwT2LIF99DGMZOpDJPZ/9k="},{id:"2023-11-07",src:"anilar/2023-11-07.jpg",thumb:"anilar/2023-11-07-s.jpg",date:{gun:7,ay:11,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUGAv/EACMQAAIDAAEEAQUAAAAAAAAAAAECAAMRBBMhQVEFImFxgaL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERAjFh/9oADAMBAAIRAxEAPwDSN9Ssu5ozZm7q249QpusZlXBgzO3mXbuQlFT2O2Ko0zNcj5O+2xnAVAwzsukTNmuFTs18Xe9Q/cSYXsJJwnfMRRlzwuczp102VXAEjAuMWY/cyCltS1qDYCxJBX1+IiGQbnDvqL7/AKMREodP/9k="},{id:"2023-11-10",src:"anilar/2023-11-10.jpg",thumb:"anilar/2023-11-10-s.jpg",date:{gun:10,ay:11,yil:2023},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAlEAACAQMDAgcAAAAAAAAAAAABAgMABBEFEyEy0RIiQVGRseH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIhA//aAAwDAQACEQMRAD8AWpo9zOzmGc7anCszHze9SR2FxKTbqWV4uvn1/auWYV1RoJZFjdTjB4PamVnAFJlGcsoBJOTxnvRNYmoEzWi3Sx+Nd0qBg4P3RNqd2tzK1tcOqMekngfNFFRxm3KpY2f/2Q=="},{id:"2023-11-13",src:"anilar/2023-11-13.jpg",thumb:"anilar/2023-11-13-s.jpg",date:{gun:13,ay:11,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EACUQAAICAQMDBAMAAAAAAAAAAAECAAMRBAUxIVFhExUiM0Fxcv/EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/EABgRAQEAAwAAAAAAAAAAAAAAAAABETFR/9oADAMBAAIRAxEAPwAtiuoYEEHtIdZq7krb4ioHgMcMw8eJgusD2PW4xWfwoxia0UncrDl8Vgj1AT18Y8QHOpq3BNZfLWFck9h3idDdbFo0600IAzKFLAcL2ibBSuNXy37Er2cn3IdeQ2YiUaq3T7V/iIiU5p//2Q=="},{id:"2023-11-16",src:"anilar/2023-11-16.jpg",thumb:"anilar/2023-11-16-s.jpg",date:{gun:16,ay:11,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACYQAAICAQMDAwUAAAAAAAAAAAECAAMRBBIhBRMxBiMyUWFxc9H/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/xAAaEQEAAwADAAAAAAAAAAAAAAAAAREhAhIx/9oADAMBAAIRAxEAPwCroulUMm+yoFy2AD/JbfQ16le3bWvHK4bBEIawWsrsL7Gxux4H5kfdam2iy29yGfBPn68gSG+rZSUemUxzRz+2J0h1qkDB1d2R59oREGvIOLCpRW+WBMag3VMjEsyVgKpMRHIcGx1W4kkvk/eIib1grl//2Q=="},{id:"2023-11-21",src:"anilar/2023-11-21.jpg",thumb:"anilar/2023-11-21-s.jpg",date:{gun:21,ay:11,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAApEAACAgECBAQHAAAAAAAAAAABAgADBBExEiEiQQUTUWEUFTIzgcHR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwCXArzcdBatbvR7/qayMquzNGSysy6c003MusyVodhXa5B0QdPQp9zIH8unCu4uAcepYnhJHpp37dpMq7l3+a5J5qj6Hb6v5ExX4jWtaA3W8gB9wxFCfN8Rc0WUooZa+kWLyB/HrPJ+FZlKpqzbgHeIhBq3rITIIBFbaHaIiX0v/9k="},{id:"2023-11-25",src:"anilar/2023-11-25.jpg",thumb:"anilar/2023-11-25-s.jpg",date:{gun:25,ay:11,yil:2023},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgP/xAAlEAABBAEDAwUBAAAAAAAAAAABAAIDBBEFEjEUITIiI0FhcZL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwC+qXeqYXsIGB3BXGGx079RlefSx4cf5Cqq8k8MeyMHJPfOQHfYUazblNayDHtLgC7dyCEarFzR1p1mw2GRjY9/gc5z9FFkW6q8SROaMbSHc/KJyi41IaCJMgHER5UHUQG6NYIAHtjj9CIonVVkmeQ/URFszf/Z"},{id:"2023-12-04",src:"anilar/2023-12-04.jpg",thumb:"anilar/2023-12-04-s.jpg",date:{gun:4,ay:12,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQGAQL/xAAlEAACAgICAAUFAAAAAAAAAAABAgADBBESIRMxQVFhIiRxgcH/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgAB/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERAiES/9oADAMBAAIRAxEAPwCmzKuvyrFS62vgSFVANHXvvzMqXM+0FzAK3YYa12JHc3G16yyr9ZJPv+xJM3N4hqFfmvXIj0MPNbhbiVNLXbQ9at4ijYB1vyiYU2OCQD1+Yi+Q6e8G1GLiy0K7PvTesnyrGqzX4NsE7Pzrr+RE6ubqM+o6EBGzvZ+YiIhJ/9k="},{id:"2023-12-11",src:"anilar/2023-12-11.jpg",thumb:"anilar/2023-12-11-s.jpg",date:{gun:11,ay:12,yil:2023},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAgb/xAAmEAACAQMCBgIDAAAAAAAAAAABAgMABBESIQUiMUFRYYGRsdHw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECESESMf/aAAwDAQACEQMRAD8A2GeOEFmbSF65PSuxIGXUuNx19VNsxHdJNJcESMqrhRykN5/vdY1uZYJpIJH5WOnzRS2hNpIuCcEAiK4IPcRn9UqC1txdWKgXRAOMq+3xSnzENso2yJa8PaWXAcI0px57fgfdRp3xPIpfmR9zjvSlGPpSWHrYeJWzQxsZnBKgkaTtSlKNG2f/2Q=="},{id:"2023-12-26",src:"anilar/2023-12-26.jpg",thumb:"anilar/2023-12-26-s.jpg",date:{gun:26,ay:12,yil:2023},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgP/xAAkEAACAQQCAQQDAAAAAAAAAAABAgADBBEhBRJhFBUxQVFiwf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABEjECEf/aAAwDAQACEQMRAD8AcRfuvIKlTS1RjA+D5mkaoEUszBVAySToTMVhTcKalRUrA5XoNL4k64uF5HjgncU3LdWA3hh/JMLcTDzVoCR3bX6mJRegpjRAYj7JO4htBUlRi6dmJJ0J3W9dB2VsYGNxEcjzp7tdflYiIfIbP//Z"},{id:"2023-12-26-2",src:"anilar/2023-12-26-2.jpg",thumb:"anilar/2023-12-26-2-s.jpg",date:{gun:26,ay:12,yil:2023},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQGAgMF/8QAKhAAAQQBAgMHBQAAAAAAAAAAAQACAwQREiEFBjETIiNCUVJxgZGSwdH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwAB/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERMQID/9oADAMBAAIRAxEAPwCVbtCO7DW7Jz9bBpkYcEdf4sq7Y5rvhEFrB3iSck/VQ+YHCC1Dp1BoZ5TvjO6j8CthnEbLWlz43tBbqO+Af1lSSbQ6qWkM26Itobt1RaM6VrmTBtVm+8Fo+4XN4HC2OR80zywR5aDjYn0z8IifngOtLkLlcjIsRfmERFaBp//Z"},{id:"2024-01-14",src:"anilar/2024-01-14.jpg",thumb:"anilar/2024-01-14-s.jpg",date:{gun:14,ay:1,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQGAgMF/8QAJRAAAgEDBAIBBQAAAAAAAAAAAQIDAAQRBRIhQRMxIgZRYYGx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCS+qzLqstsxQRqAQxHPoVMgklmV2crgEhdo6/NVvW5fBqtwI+DtAyehtxW36Zu5DNLC7sykAgE5wc81nF1Yn1WON2Qhfice/tSuPcWcpuJTs9uf7SpqoyvY0XUrmSZB43VPk/IJHQqNokTpezBVRo1l2kjjHf7pSmS1b6UpQH/2Q=="},{id:"2024-01-15",src:"anilar/2024-01-15.jpg",thumb:"anilar/2024-01-15-s.jpg",date:{gun:15,ay:1,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAmEAACAQMDAwQDAAAAAAAAAAABAgMABBEFEiETIjEUIyRhccHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AKVje2twghvMpPuI4Q4P9rR0828ciRIu4liNxGDUJthamSTow9ViGyTuyfzUHqkdxLlUdVPaOCM/qhSjqfPNKox6jCI1Dl9wAz2HzSrqOUTVJG9t497HgFOCaah8G5WNe87A2WHj6pSlUjVit5pIkczOCyg4CjjNKUoE/9k="},{id:"2024-01-15-2",src:"anilar/2024-01-15-2.jpg",thumb:"anilar/2024-01-15-2-s.jpg",date:{gun:15,ay:1,yil:2024},width:886,height:886,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAlEAACAQQBAwQDAAAAAAAAAAABAgMABBEhEgUTQSIxUWFScYH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAQEBAQAAAAAAAAAAAAAAAAABETH/2gAMAwEAAhEDEQA/APRMCONqPbO1rPtQwXChhlm0pUkVL1OV5o4sxskcb8mGc51rI+KlWSS74FNmMcYw2+Xyf5RvCiu7EjOWhuHIzvO8HP3SukjdY2D8eS++NeBShp4zfqVvNO2ciKQeknxUF1dKX7VkWT8mXRP6+qUqt4kqt3dI4UZiRy35J0aUpUzf/9k="},{id:"2024-01-22",src:"anilar/2024-01-22.jpg",thumb:"anilar/2024-01-22-s.jpg",date:{gun:22,ay:1,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACYQAAEEAAUCBwAAAAAAAAAAAAEAAgMRBAUSMVEhkRMUQVJz0eH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/8QAGREBAAMBAQAAAAAAAAAAAAAAAAECESEx/9oADAMBAAIRAxEAPwDtMzzCwRNYS5zmijTelKKbPXPOiGJpvbUd+y5kMzGQEjS15cbt1ON/Sw2aGKGjPqZC8AVQIN8JdNFdjdW/O4n2x9wi38XAnd0RPz/iI9Jx5zMQ2PS4HqdhxyqjC0bGgSLHoURUhOvifpyiIsL/2Q=="},{id:"2024-02-14",src:"anilar/2024-02-14.jpg",thumb:"anilar/2024-02-14-s.jpg",date:{gun:14,ay:2,yil:2024},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEBv/EACMQAAIBBAEDBQAAAAAAAAAAAAECAAMEERIhBRMxBhQiYcH/xAAXAQEBAQEAAAAAAAAAAAAAAAACBAAB/8QAGxEBAAEFAQAAAAAAAAAAAAAAAAECAyIxUXH/2gAMAwEAAhEDEQA/AK3WbpmuqVqrFUI2bkgt9TBYDe/uBUbbSiCuTnA54nLvfO1bcuxbOc55muwrVj7hk7rmoupZeTgzk+lGlg3NGmrVAcrVwqAHziJOr9MZGU0H3TPjUgiIcOllxFYeJ1HpUDsucDOx/Iia7oaG7JLOSc/OIiSKX//Z"},{id:"2024-02-14-2",src:"anilar/2024-02-14-2.jpg",thumb:"anilar/2024-02-14-2-s.jpg",date:{gun:14,ay:2,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EACcQAAICAgEDAQkAAAAAAAAAAAECAAMEESIFEiExExUyQUJRU3Gh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECESEDEv/aAAwDAQACEQMRAD8A1nyO/EtFdzOCh2D+pj33IcSlCw7/AF1vzObZrC1nUqQeHxcfIImVk5hfGUJW61l9h2PzEi3JCKKiUn1iRDOXXlTuJNM20X0dOerFfKsr9oKiVKPvl95ys6eLKtopCDlofTuIi9M0jnuMm92N+T+REQPbF8o//9k="},{id:"2024-02-24",src:"anilar/2024-02-24.jpg",thumb:"anilar/2024-02-24-s.jpg",date:{gun:24,ay:2,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACUQAAEEAgIBAwUAAAAAAAAAAAEAAgMRBBIFIUETMVEjocHR4f/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABoRAQEAAgMAAAAAAAAAAAAAAAABESESMUH/2gAMAwEAAhEDEQA/AJcjGOdPJtI2JrTVge5PhcTIxqyWxPpodYDz0018FdhvJxOM2txtLrjaygCPB/iyONfmwnFkGhvYSa2B34P4RxZotWNY+L4Qxt2yG7UL+rXaKkeH5Fpr0A6ur2HaKcamUPKNEbMaBjdXtb2Pva9XhyethxSe5eAf2iLS9D6t2PhERFX/2Q=="},{id:"2024-02-25",src:"anilar/2024-02-25.jpg",thumb:"anilar/2024-02-25-s.jpg",date:{gun:25,ay:2,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMEBf/EACcQAAICAgECBAcAAAAAAAAAAAEDAAIEESESMQUVQWETFCNUcZGh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABBP/EABoRAQEBAAMBAAAAAAAAAAAAAAEAEQISITH/2gAMAwEAAhEDEQA/ANJjsdV+hjaVsfQmQ59b1xrXWwU6e/HeVcg1VjWFbAMdvr52bE+x7+gHtIzn1XRiTX4mSQKEVOwTrW/zB2Y459s/zF44+YZ+4loeHL1yzI36/SMS0rq2Y/Mdmpopqwy9dCt9cgSmpzMN5sm5WyuxxETo5geEIr7T+b533bP5ERDwt1v/2Q=="},{id:"2024-03-02",src:"anilar/2024-03-02.jpg",thumb:"anilar/2024-03-02-s.jpg",date:{gun:2,ay:3,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAJRAAAQMEAQIHAAAAAAAAAAAAAQACAwQREiFBBRMUJDFhgZGS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAYEQEAAwEAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8AtU/TvCTmbuhwxItjZcY7z8TjyCD9LxPWyCodkGNZHJhi91r+6imnJrR24nMxscW2JBKGnnONrJg1v9Isg9ZiaS12nDR3yiWB1n0ZklphOxzJZGXEgeb3tsb+VVo6uQ0stTLIGlp0cdg8BEStWFrMoDPkSTe536hERLIF/9k="},{id:"2024-03-10",src:"anilar/2024-03-10.jpg",thumb:"anilar/2024-03-10-s.jpg",date:{gun:10,ay:3,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgL/xAAjEAACAgEEAgIDAAAAAAAAAAABAgADBAUREiExQRMiRFFx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/EABgRAQEBAQEAAAAAAAAAAAAAAAABETJB/9oADAMBAAIRAxEAPwCZjZzZFBuyURWUEbjsmSMH7/K56Jbx+pQVbU6BkXGwh2H0b2vfgf2TdOyzTqCUtY1qZCKys3XE+hJSWqXF9xidgHaIZWMBj23qtmNT+UnA7noDzLHRsP4tQqpubcgjsH36iJSdYTxsuMREYP/Z"},{id:"2024-03-11",src:"anilar/2024-03-11.jpg",thumb:"anilar/2024-03-11-s.jpg",date:{gun:11,ay:3,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAwb/xAAkEAACAQMCBgMAAAAAAAAAAAABAgADBBEFIRITFCIxQVKBkf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEUH/2gAMAwEAAhEDEQA/ANnpEyIFqM5Vj9GTX2o8irSt6eC9TyT6EhOoNp9dlemxXYg57W9bTONGt0zfNv2JxXVrZlB4mGRnGIhCrzN4731/V5ZySvCudpKlWqAy1XLFTw9xz7iJepUCtt4iIiD/2Q=="},{id:"2024-03-24",src:"anilar/2024-03-24.jpg",thumb:"anilar/2024-03-24-s.jpg",date:{gun:24,ay:3,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAjEAACAgEEAgIDAAAAAAAAAAABAgADEQQSITEFExUiUWJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAMAwEAAhEDEQA/ANX5L2WuNOisinl2bAJ/Almq9b0yPqwOCpPU53SBLPHjezJYjEsOieZBcBqbwVveusYbB7ByeP7AdckgG3YRKaeT0wQAsWwOyvcRYx2wLtbW9LX1hRbjDA9zJay2/eFJ3HnAiITkl0ox7gMb+v2iIj1jl//Z"},{id:"2024-03-27",src:"anilar/2024-03-27.jpg",thumb:"anilar/2024-03-27-s.jpg",date:{gun:27,ay:3,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAgMG/8QAJxAAAgIBAwIFBQAAAAAAAAAAAQIAAyEEERIFURMUIqHRFTEyQWH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwCjDV2F2TS3cFGSh3A9phRSdSrOiWcF/JtsCdD0VlXo/Kpio4vz+2Dv8TZWal6Uun0hDMw3Crk/0mHo+VD9Ov8A0hI77j5iSTa6kqW2IxE3qswuVvIeFQAqXsA42z2x7St0eqt0i31ISPE9LL2iI7IGpS3HiPWRiIiWJ//Z"},{id:"2024-04-15",src:"anilar/2024-04-15.jpg",thumb:"anilar/2024-04-15-s.jpg",date:{gun:15,ay:4,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBgX/xAAiEAACAwACAgEFAAAAAAAAAAABAgADERIhBDETIkFRoeH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAaEQEBAAIDAAAAAAAAAAAAAAAAARESAgNB/9oADAMBAAIRAxEAPwCzUu+YvxsGw/UVbc/cugB2etXDMmBl/H3mbquFVHBeYZCd49aJC2746hYpZWAGH1spzrV6/WjNT6dsIO+gv8ic1bkZQR5NI0b2GiO1Z1Zq7zLL7eRAHWYJAlgAG9b1EQwcpAnIiJF//9k="},{id:"2024-05-02",src:"anilar/2024-05-02.jpg",thumb:"anilar/2024-05-02-s.jpg",date:{gun:2,ay:5,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEBgP/xAAmEAACAQMDAgcBAAAAAAAAAAABAgMABBESITEFUQYTIiNBYXGx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAwDAQACEQMRAD8A9el2UlpFKJBuWGfraqHT7y2894FnQyNwuecdqmTSARKyI/t53L6c5zvWIyI1ph32UFkbUFI7Y7mp1TLsaVxqeKb8IoKxsQOSu5pTQjHczyv1JbeVyYg+FDAZAPH9q2ljLLaMLMgFwNWoDBx+/NKUNS2sJwxDRyagd/TSlKpSR//Z"},{id:"2024-05-10",src:"anilar/2024-05-10.jpg",thumb:"anilar/2024-05-10-s.jpg",date:{gun:10,ay:5,yil:2024},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EACUQAAIBAwQBBAMAAAAAAAAAAAECAAMREgQFIVFBFCIxYVOBwf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABkRAQEBAAMAAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8Atz1WWPrh7uuOOwZzeq1ElamurC1ssbkL0SfEmqIdvKq5yzupIAP6t3JqO4U6iatSt2UE2PGYt9GZd0pJZ231SpiL6yuR9NEydmevV29FLAvTFrH5tEQOW4m9FL/kX+zH3EAbw4A4DREU9S6k7JSyVipBHINvIiIi5BH/2Q=="},{id:"2024-05-18",src:"anilar/2024-05-18.jpg",thumb:"anilar/2024-05-18-s.jpg",date:{gun:18,ay:5,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgIE/8QAIxAAAgICAQIHAAAAAAAAAAAAAQIDEQAEIRJxBRMUMVKR4f/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwH/xAAYEQEBAQEBAAAAAAAAAAAAAAABABECA//aAAwDAQACEQMRAD8AstXfh3Yy8JYqDRsVRyWeRFQ9TBb4BJq8zfhrxa2oV86RWJ6mFEc/WdbtbUMhmkVWFkFrBArJ7WfNDdrwRcDGY5N6VUVRsy0BQofuMfKVYpsQ7YLpG8VtyS132yWKLVCgCzXzNjGMfkMlV283p3PKgdJ9u2MYwsv/2Q=="},{id:"2024-06-07",src:"anilar/2024-06-07.jpg",thumb:"anilar/2024-06-07-s.jpg",date:{gun:7,ay:6,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAKRAAAQMDAgUDBQAAAAAAAAAAAQACAwQRIQUSExQiMUEVI1EyYYGTof/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABgRAQEBAQEAAAAAAAAAAAAAAAEAERNR/9oADAMBAAIRAxEAPwCHSI+WL6l3FadhAdYWAwtGm1aYul5lh4bCLOaMAfJWfqTNR0iozOeWlf0uGR3+D2Kpo64S7jNZ0m4Eg3Fx+EVSQDXeuMP0xkjwd4yixn0TS9xEJtfxJhFdplZr9PFTVrampqZJQ8dMIw7H38BZ1dJSyui4EI3vt2P8REiD5XjQa2w9tn7AiIs+jPmX/9k="},{id:"2024-06-18",src:"anilar/2024-06-18.jpg",thumb:"anilar/2024-06-18-s.jpg",date:{gun:18,ay:6,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIFAQMGBP/EACUQAAEDAgYBBQAAAAAAAAAAAAEAAgMRIQQFEhNBUTEGI1OR4f/EABcBAAMBAAAAAAAAAAAAAAAAAAABAwT/xAAbEQEAAQUBAAAAAAAAAAAAAAAAAQIREhMhMf/aAAwDAQACEQMRAD8A1bNPKk2E9LMcGMxjHtbtEE2ZW55sq2bMJ8rnMEkNCDqLXcV6V9vfEsOLTZPSKDcY97Q5r2aSKirP1E91JYS9mDiijbFKNOkmopzdc7nEhn9Qynz7jQObWoiLPC0umrB8DfsIiJWgXf/Z"},{id:"2024-06-28",src:"anilar/2024-06-28.jpg",thumb:"anilar/2024-06-28-s.jpg",date:{gun:28,ay:6,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAUG/8QAJhAAAgICAQMCBwAAAAAAAAAAAQIAAwQRIQUSQRMiMUJRYXGB8P/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEAAwEAAAAAAAAAAAAAAAABERIxQf/aAAwDAQACEQMRAD8AwPl3reaAq2BQCWs47R+purdkqBQIHPI+YH7yOSjHLAqTmwBdjyf7UqyMinAyloe0eoqAMxGwCfoZHVST1A9UywSCE3+Im1VxO0e9Tx8dDmI7HSLRdUtPFoA1yfJnLHSk6nZbYLWRwNBQu/HmIhmwSZedO1JB2COCIiJsh//Z"},{id:"2024-07-05",src:"anilar/2024-07-05.jpg",thumb:"anilar/2024-07-05-s.jpg",date:{gun:5,ay:7,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAgb/xAAmEAACAQQBAwMFAAAAAAAAAAABAgMABBEhEjFBUQUTIhQVI9Hh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgEA/8QAGREBAAMBAQAAAAAAAAAAAAAAAAECETEh/9oADAMBAAIRAxEAPwCf9tgS2L++UZXCuuCMnHY1T9DS3EimKVS2wOpJ11zWdwyNMIn9gs5JKhcHOPPfVaPGtrb8HtwkfLXy647Y/dDSmPchT+pUaKRk+QuaVH4sx5C1iwdj8X9pW1chIsZuF3A0rlkjOiewr1VpLA9qq3A+RPPGPO6Up36NeOzLakk8H6+DSlKCv//Z"},{id:"2024-07-08",src:"anilar/2024-07-08.jpg",thumb:"anilar/2024-07-08-s.jpg",date:{gun:8,ay:7,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUCAwQG/8QAJBAAAQQBBAAHAAAAAAAAAAAAAQACAxEEBRMxURIhM0FhcpH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGxEAAgEFAAAAAAAAAAAAAAAAAAERAhITITH/2gAMAwEAAhEDEQA/AKMkRhcAXB19cra3ivfpSG6418zzkNADuC0E0ssaRmRLuwPa4sNkA0Um2ilTJXo9H8Rcpnnv1pR8eSIvDGeRkjyWEh0MoI7YVR0LYdLMMo+FgZZN1VIifUNLZ3nUNOBoS5NfUIiKINoP/9k="},{id:"2024-07-08-2",src:"anilar/2024-07-08-2.jpg",thumb:"anilar/2024-07-08-2-s.jpg",date:{gun:8,ay:7,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFBv/EACUQAAIBAwMEAgMAAAAAAAAAAAECAwAEERIhMQUjQVEUYSJxof/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAAICAwEAAAAAAAAAAAAAAAABAhIDESFB/9oADAMBAAIRAxEAPwCTpNkGuRJduVVTqUBgQTnirutXDTQSpausgYKoCcjfJJ/lSWF3LawKmUYDkHx9j3VVtOkksfaRmd8ZVRgD1jGQcUKeuC8fpifCuBsTGP3JSugeyuS7FZLcKTsNPApTZE1Je3AskEkYLtwTg6RVPTIokkZ5mCu4/AY2H3SlEki0yw6gxGng+KUpWYn/2Q=="},{id:"2024-07-09",src:"anilar/2024-07-09.jpg",thumb:"anilar/2024-07-09-s.jpg",date:{gun:9,ay:7,yil:2024},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAUGAQIE/8QAIhAAAgIBBAEFAAAAAAAAAAAAAQIAAyEEBRESQRQiM3Hh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgQBA//EABkRAQEAAwEAAAAAAAAAAAAAAAABAgMRMf/aAAwDAQACEQMRAD8AymnTT7nWR2CixrGCv2y2ADzJKpEsut6jAPMru1Xkawra/PcYL5yPyTHradLbXy2MqzQR02Y3G8dradc+0RNLUXUWU3JdYq18nlGHVufBERAqCfMn3Jq1QdsBIBPUnMRBPVW828kVADANeQPOYiJtTx//2Q=="},{id:"2024-07-11",src:"anilar/2024-07-11.jpg",thumb:"anilar/2024-07-11-s.jpg",date:{gun:11,ay:7,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAwYE/8QAJxAAAgEDAwMDBQAAAAAAAAAAAQIAAwQRBRIxEyFBBlFxImGBocH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwD2UNZt7ltqM1CseEcEhj9pvSrXesVdhtAz9K4/E5jT06l8uWZFGWJ9u2P7LFoXGrJtDNTYbCwOQPkeDMtaSavNXZWIzwcRJNxebbiqPZyP3ECXodB7elWq3FIqWAKEjkTOkPUHqDpu3gk7eCMZGYiJ1Ndb0qZ7lFz8RESj/9k="},{id:"2024-07-30",src:"anilar/2024-07-30.jpg",thumb:"anilar/2024-07-30-s.jpg",date:{gun:30,ay:7,yil:2024},width:576,height:1280,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAAsDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBv/EACAQAAIABgMBAQAAAAAAAAAAAAECAAMEERIhBTFBIoH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARMf/aAAwDAQACEQMRAD8AtqWVmDgrhvZtb9iaqV+Ius8n0ltmM+YLmtUr9rNGDDwaPcV8m6FiALXBiF45uXyclkJmVErIkmwbqCctTYDOo+vbQhCK/9k="},{id:"2024-09-19",src:"anilar/2024-09-19.jpg",thumb:"anilar/2024-09-19-s.jpg",date:{gun:19,ay:9,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwYF/8QAJxAAAgEDAgQHAQAAAAAAAAAAAQIAAwQRITESQVGBBhMUFSIjMnH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREgL/2gAMAwEAAhEDEQA/ANlr9owd12BGMmVteUbZGFsnmVsjjrMNFI5AdBIwStMaBSCSCzakdpPbV7Y2bO7Dg5jXiO8hdGmEe+tndOof3d/kM6KMROcS+qhFGRt1iXpkRFHiek1CzU02IVqmCO05qnc1aVNqQ/Da4I2/kRHEKsz9S3SIiECn/9k="},{id:"2024-09-23",src:"anilar/2024-09-23.jpg",thumb:"anilar/2024-09-23-s.jpg",date:{gun:23,ay:9,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAYF/8QAJBAAAgICAgAGAwAAAAAAAAAAAQIAEQMEEiEFExUxUWFBgZH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIQL/2gAMAwEAAhEDEQA/AJtSizIHLjGRsTMUcLdEVYlGlvjdyYKQ4jy77uz9fuZPG9jI+YO5Ifmy0RVAHqot0Zc5TYN3WI62k/sTnvLEQgh0e4mtpY1waq8QPdj73838zzHwnZzM2RuTv1d/mIkUypZ6W33ERGrNEf/Z"},{id:"2024-09-27",src:"anilar/2024-09-27.jpg",thumb:"anilar/2024-09-27-s.jpg",date:{gun:27,ay:9,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgQG/8QAJhAAAQQBAgQHAAAAAAAAAAAAAQACAxEEEiETMUFxBSIjMlORwf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/EABoRAQEAAgMAAAAAAAAAAAAAAAEAERMDEiH/2gAMAwEAAhEDEQA/AK/oXWsWtXcEC9ba7ry3hDnjJbJI6tVgOeeZ7qlkF2OYXm7J8xJ3I6JvKkdXmarrx/kaikcdvVptEd7TWUCTMcY2RPIcxu4r9WJM+aeVpGlgZyAG1IiqEs3cMoUPZ9IiIdS1/9k="},{id:"2024-10-07",src:"anilar/2024-10-07.jpg",thumb:"anilar/2024-10-07-s.jpg",date:{gun:7,ay:10,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgEE/8QAJBAAAQQBAgYDAAAAAAAAAAAAAQACAxEEEkEFIjEyUWETI1L/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAZEQEAAwEBAAAAAAAAAAAAAAAAAREhAjH/2gAMAwEAAhEDEQA/AIIMVrXTyNaN6OvuoC6Felxs/wAZifMGhknSrJafBCh4hmuw8YwhsgsuDL7a39quyc+UxxROoaKJA3OyOlUNS3IxdI+zb8lFlxksIB1kIqhXmTiszxqmnGlr6AEdkWFUyT4EDXQy4rZXw8tgkE0fKIsjepPyHkPEHXysYBsK6IiJ0L//2Q=="},{id:"2024-10-13",src:"anilar/2024-10-13.jpg",thumb:"anilar/2024-10-13-s.jpg",date:{gun:13,ay:10,yil:2024},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAsEAABAwIDAw0AAAAAAAAAAAADAAECBBEFEiEjMUETFCIyUVJhYnGRocHR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AIxarpqwjhCTI93hpe3hoqBwMOo2gCNOz2z7mUCVhIFqiRlK0ZdZ3tHR+H4tGnC5JPVvUxI2XLkjut2/Kirjgdz3fZx90WlbysiGZL4cA1DItQScZzI8oZH0ZvRVSKMOH0BqYvSvyRIvxtr9oioOjnjd1ERDP//Z"},{id:"2024-10-13-2",src:"anilar/2024-10-13-2.jpg",thumb:"anilar/2024-10-13-2-s.jpg",date:{gun:13,ay:10,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJBAAAgEEAQMFAQAAAAAAAAAAAQIAAxESIQQjQWEFEzEyUXH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAwDAQACEQMRAD8A8Uen1X4/vKoKAa2QTN44/GWktMoGYj7d7yunVpjioQemBY3PeYKnMYrcMUv8LbVolW1ALj0SrsASQDa8TP1DvIb8xHrTymOQEXEbVhvwZRWqtVwyN8FxH8iJVFHNv2IiE7//2Q=="},{id:"2024-10-13-3",src:"anilar/2024-10-13-3.jpg",thumb:"anilar/2024-10-13-3-s.jpg",date:{gun:13,ay:10,yil:2024},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJBAAAgEDAQkBAAAAAAAAAAAAAQIAAxEhBAUSEyIxQVFhcTL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAERMQL/2gAMAwEAAhEDEQA/AO7O1D0C1NLPfxmW63WM9N0ZRvHsBmeDQqBXFOpUC4Py8vOrUtV4ZIuLC/b1J1NqUjuLzHiLfqfX2Jkro3MUvbuIm4Jkb9n7NuzObX0w2RnrEQ6wRqdTJa/kxERB/9k="},{id:"2024-10-16",src:"anilar/2024-10-16.jpg",thumb:"anilar/2024-10-16-s.jpg",date:{gun:16,ay:10,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgb/xAAiEAACAgEEAgMBAAAAAAAAAAABAgADEQQSITEiQRQyYYH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwD/xAAZEQADAQEBAAAAAAAAAAAAAAAAARExAhL/2gAMAwEAAhEDEQA/APOLTc1RtWvKD3nuanTbqFYMd7DIWV6YB9EQCfEnOeh75k/yqXyuSpX64OM/snWy65SRAWcEgjkRKClzEkVvg89RHQeTjTat0fYT4uCp/swtramwq3roxE2MOorFhIzuPP7ERDB0/9k="},{id:"2024-11-17",src:"anilar/2024-11-17.jpg",thumb:"anilar/2024-11-17-s.jpg",date:{gun:17,ay:11,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAwQG/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhEyIxQVFh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//EABsRAAIDAAMAAAAAAAAAAAAAAAABAhESISIx/9oADAMBAAIRAxEAPwDmv783dr07xld1HaqZGSfBx99Vq0mBIY2lnBxGcthSef38FYuI45JNrID28116fLbJZvE7EOjdyEHlfVJugw7FIamxAIkYj0cjmleOkmXqP02cJk7RnwKVbNkvaRJv1VQF3ZUjPzg81QbS4bW7e4jBkMo5RvHNKVPWGPCI76FMXYgYBJwMUpSumUHTP//Z"},{id:"2024-12-20",src:"anilar/2024-12-20.jpg",thumb:"anilar/2024-12-20-s.jpg",date:{gun:20,ay:12,yil:2024},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAQT/xAAlEAACAQMCBQUAAAAAAAAAAAABAgMABBESIQUiMUFRMoGRodH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAaEQEBAAIDAAAAAAAAAAAAAAABABIxESFB/9oADAMBAAIRAxEAPwD1Xdy+lFjb1E6iDggDJ69q5aTTOzoJcqCAhPO2/Y/FRJn4jNMskVtIiJvpUYz+1mt+0V8UlRyHIAMmVwfaoiatHHtbfic0cjI0IJUkEhtqViYLFjlpX1Hc83elZyriVp0jZsEDxtU7jMdvFZOJGUyEZjU9c+aUoHdHVJEgIHJ90pSkv//Z"},{id:"2025-01-11",src:"anilar/2025-01-11.jpg",thumb:"anilar/2025-01-11-s.jpg",date:{gun:11,ay:1,yil:2025},width:736,height:1068,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAhACEAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABEDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECBQME/8QAKhAAAQMDAQQLAAAAAAAAAAAAAQACAxESE1EEUnGRFCEiIzEyQVNhkvD/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQQD/8QAHBEBAAIBBQAAAAAAAAAAAAAAAAEUAhEVUmGh/9oADAMBAAIRAxEAPwDabBHQnPXg5SImkHvgBpVGzQMiAa1oeRUHVQyaGwscGl1BaePgo7s9elXh0wx+4Psi82WPfHNFnuOfE62LL7VkFW7RXE4+Yaenwq2uNgHSAaRAdY1/URFOqVsfvS8moiJ6h//Z"},{id:"2025-01-18",src:"anilar/2025-01-18.jpg",thumb:"anilar/2025-01-18-s.jpg",date:{gun:18,ay:1,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAgP/xAAlEAACAgEDBAEFAAAAAAAAAAABAgADEQQSIQUiMUETFDJRodH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/xAAYEQEBAAMAAAAAAAAAAAAAAAABAAIREv/aAAwDAQACEQMRAD8ArogQZOAPyZqrIkTrOpal6CqlkRyXIP2nHbOOlal3Y6nNuxydwJyMnxgfwSYzSvs6hiM+4k972Z2Kq5BOQQh5/URwpNlynW312t2ux5nqv01FbKqDxxtPOfcRJjUyLQt2o2jZ8u3HHd6iIh0W9N//2Q=="},{id:"2025-01-18-2",src:"anilar/2025-01-18-2.jpg",thumb:"anilar/2025-01-18-2-s.jpg",date:{gun:18,ay:1,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQb/xAAiEAABAwQCAgMAAAAAAAAAAAABAAIDBBETIQVBEhQxUWH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/ANSFtgrkRCyeRqMVKcbS4+QDrH4CxWciJKhlS0yexnDd9j6P5ZRVO4B0igDcAjtEhzUcrhNuzmEXII7UoKenZE44m5CwyNcd3O0RRdwxYjr5cbbNJ0N2REWrKP/Z"},{id:"2025-01-25",src:"anilar/2025-01-25.jpg",thumb:"anilar/2025-01-25-s.jpg",date:{gun:25,ay:1,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIDAQQF/8QAJRAAAgEEAAUFAQAAAAAAAAAAAQIAAxESMQQFEyFBFCJScYHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIREiEx/9oADAMBAAIRAxEAPwDHXpg2LgH7kmJFrgi+rjchRUJyhi6tT6rE1Mh3/tSXGcSz0KCgEuccB+eYZ2B0yRaJWahUkHG47biOqkrIX39Xx1UU2DGl7sDpj4mjV5s2TVDQDH4DQOrmIhZ1SjuHCZWdixdrsb9tRERgP//Z"},{id:"2025-01-30",src:"anilar/2025-01-30.jpg",thumb:"anilar/2025-01-30-s.jpg",date:{gun:30,ay:1,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAQX/xAAlEAABAwIFBAMAAAAAAAAAAAABAAIDBBEFEiEyYRMiMVEUQdH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/8QAGREBAAMBAQAAAAAAAAAAAAAAAAECERIx/9oADAMBAAIRAxEAPwCFXTmJvaLg21+gPa7T07ZCxkb3vd5DnbT7Gn6tdRDYGLMzNHctza24WKmcHENlmLI2bSDq1SicUiuqmmqmHL8R/bpuCLYMWAFhKDbhEeg5Rrpp873dCMRkWd4Li0qdHg7aqa8gLqbfG5x15B4RFqmt49wYRQgAdJunKIibEtl//9k="},{id:"2025-02-21",src:"anilar/2025-02-21.jpg",thumb:"anilar/2025-02-21-s.jpg",date:{gun:21,ay:2,yil:2025},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAjEAABAwMDBQEAAAAAAAAAAAABAgMRAAQSBSExBhMiUVKS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhEv/aAAwDAQACEQMRAD8A5YPO/a/0aeZvgmxDRI7gcJkySRFO6JbW6mCt9ptwrnEqXBEeqnapaCzvFISQUEBSTPINTjyXnDaj0+46l1TQZDoTuCdsQeaw1dvO+dyPkFQI4xjaiikBrFXC/9k="},{id:"2025-03-28",src:"anilar/2025-03-28.jpg",thumb:"anilar/2025-03-28-s.jpg",date:{gun:28,ay:3,yil:2025},width:665,height:1182,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYAA4DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFBP/EACgQAAIBAwICCwAAAAAAAAAAAAECAwAEERIhBhMVIiUxUWFxgZGxwf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwCx07i55IVWO+Tv1TSScQkMVSJCQcHDE1Ggtw1ii6AkgXUZRktnzP5WlJYHjVbgcuNRgFI8DPr3/NHomDvadoSICQHxKnhkbEfR96icSrLHcoRIdLjcDbcUUUtQO5f/2Q=="},{id:"2025-04-01",src:"anilar/2025-04-01.jpg",thumb:"anilar/2025-04-01-s.jpg",date:{gun:1,ay:4,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QALBAAAQMCAgYLAAAAAAAAAAAAAQACAwQREhQFEyExUZIjJDNBUlOBgpGTsv/EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARYf/aAAwDAQACEQMRAD8A9BtdQuvgNvZZRzNI52E2uATtb3LPDDBbsmn0SRkXShkQBDQBwuiazmf0f4R9aLBq5fIHyilSptJUDd+lNkFU073cyIppW9a4u5kRFi//2Q=="},{id:"2025-04-20",src:"anilar/2025-04-20.jpg",thumb:"anilar/2025-04-20-s.jpg",date:{gun:20,ay:4,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EACYQAAEEAQIEBwAAAAAAAAAAAAEAAgMRBBIhE0FRsRQxYXGRodH/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/EABoRAAMAAwEAAAAAAAAAAAAAAAABERITUUH/2gAMAwEAAhEDEQA/AKs2N8DpBFpe5h5uqx+qOKYyCLKfA/giydxfvXRdn5cb4XzaHaWE2K2KnwJw/Gj06SRYDHXd+iK+jYqQ3GMjewODgQRYI5osqNxZG1vgyaAFgiuyJtj4BgugvAifBwwSfjdS4cDI8rSL01ub8uvf6RESQlNbhy9QiIkIP//Z"},{id:"2025-05-18",src:"anilar/2025-05-18.jpg",thumb:"anilar/2025-05-18-s.jpg",date:{gun:18,ay:5,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EACYQAAICAgAFAwUAAAAAAAAAAAECAxEABAUSIUFhBhMiFDEyUZH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAaEQEAAwADAAAAAAAAAAAAAAAAARESAjFh/9oADAMBAAIRAxEAPwDtGZGiaVFJRQSTYvp475PNs8te6WQNRBV7q/3X2xv7A143jcxq8XwChepB7g5ltxJ/ojBTfIBSBXLXfCjiS2idGQn85v4cZCu0gUAxkmups4zc+s058aSSPaLSFm5zdsbOSawEm1FGxpHcKb84xiR0NsN6a3AxAdOh84xjJW//2Q=="},{id:"2025-05-18-2",src:"anilar/2025-05-18-2.jpg",thumb:"anilar/2025-05-18-2-s.jpg",date:{gun:18,ay:5,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAlEAABAwQBBAIDAAAAAAAAAAABAAIDBBESIQUUMUFRE9EikrH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/xAAXEQEAAwAAAAAAAAAAAAAAAAAAESEx/9oADAMBAAIRAxEAPwChSUwpKB4kdm4ZPI9gef4uaqb1kFP05GZuSwkEjsPK5K/kDDyTS4uLTEWgWxG791viGxviMsbci2+jrf0oxTAoZyARSk387+0VUfPYaH7ItRS+coXz1LJYWfiI8Tb3uwXlw9JPBNlIxwte4vrxZETKVzN3pERBf//Z"},{id:"2025-05-28",src:"anilar/2025-05-28.jpg",thumb:"anilar/2025-05-28-s.jpg",date:{gun:28,ay:5,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAv/EACQQAAIBAwMDBQAAAAAAAAAAAAECAwAEERIhMQUiURVBYXGB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgABA//EABoRAAMAAwEAAAAAAAAAAAAAAAACEQESUQP/2gAMAwEAAhEDEQA/AKpJi9xLDAsZaIAsXbGTzgVHf3Mi28M0D6Bqw6nYj4NcKZbJZZtRnZyHdTtv5GKhXqTSMsd0gdXPai+7Hipn9LBKqSlg6wQBlhn6FK39EtU7GVmZdidXNKzdulrjhoNLgsr5GNjyKj6paFLeKe3hQGF9WUG/75pSm5zUjLoxLCIYO47qUpREf//Z"},{id:"2025-05-28-2",src:"anilar/2025-05-28-2.jpg",thumb:"anilar/2025-05-28-2-s.jpg",date:{gun:28,ay:5,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYEBQP/xAAkEAACAgEDBAIDAAAAAAAAAAABAgARAwQFEhMhQVEiMWGS4f/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAAMBAAAAAAAAAAAAAAAAARIhMQL/2gAMAwEAAhEDEQA/AOhody0mrLjGWUIORZxQqbNLkw6pS+ndcgBolfElwi7dpHx5kas2OjZ7ch4nrtGux5MwslSUpifJvsPz/Y8rRjJFb0h7MTn829P+piG06S+75eW5kGx8e63YBP3Uz48nQZWFB7ogex9RE188TeqpDhdFYobIB7M0RERv/9k="},{id:"2025-06-13",src:"anilar/2025-06-13.jpg",thumb:"anilar/2025-06-13-s.jpg",date:{gun:13,ay:6,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAkEAACAgECBgMBAAAAAAAAAAABAgADEQQTBRIVITFBFFFxYf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/xAAXEQADAQAAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwCDBrFtsWoNXWMHDDPbzge8SSmyk7rblS2oOVivmUqeK/F4cKnRtxDgAgYbJJmjdYt+lXDAhiApORg/WDJSDZUM1npViDY2QcGJ16Zae4ruwf5E1QkZQuALWBwPsSzpNdsUi/UNvFVISs+CfQ/PZiJRDMj13VHvy0j8QREQxArP/9k="},{id:"2025-06-14",src:"anilar/2025-06-14.jpg",thumb:"anilar/2025-06-14-s.jpg",date:{gun:14,ay:6,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAmEAACAgEDAwMFAAAAAAAAAAABAgMRAAQSIRMjMQUUFUFCUWFx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//EABsRAAICAwEAAAAAAAAAAAAAAAABEiICETFR/9oADAMBAAIRAxEAPwDgqOqxv62BluBImXu2EPBrjKntJWY9zcCb81X6oZJ8gQrxQ7dtcM33/wAywi7CltVNFYyVBTS6cJXAKHxjII5o2jUkMCQDVeMY6nKxjQ+sSqbaJKv81xl3TwmXqSNHHCpG4EGxjGbJvLpUtcNKNtIsaKQWIAF9TzjGMcMfASZ//9k="},{id:"2025-06-22",src:"anilar/2025-06-22.jpg",thumb:"anilar/2025-06-22-s.jpg",date:{gun:22,ay:6,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAJBAAAgICAQMEAwAAAAAAAAAAAQIAAwQREiExYRMUIkEVUZH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAP/xAAcEQABBAMBAAAAAAAAAAAAAAAAAQIREhMhUQP/2gAMAwEAAhEDEQA/AJcbM18bVYD9EdRLUWzItKYxTioBLt2O/qarab/xttDUWPdWSeAHUHe+W5NhlsepHuata7joKz9R51FldWCTzbY6BoygSPRB19iJWM8KAPcY514MTPM/o8TS++/VTCh1NrDS77DyZ4TMr9PKejIUNYD1IMRExdwFU1JmuZlooVbzxA0Pivb+RER1TgbKf//Z"},{id:"2025-07-27",src:"anilar/2025-07-27.jpg",thumb:"anilar/2025-07-27-s.jpg",date:{gun:27,ay:7,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQIG/8QAJBAAAQQBAwMFAAAAAAAAAAAAAQACAxEhBAUxIlFhEhMyYtH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/xAAYEQEBAQEBAAAAAAAAAAAAAAAAAREhMf/aAAwDAQACEQMRAD8Ars3/AFT8O9HnpH4p4d/EbaMbe56AvPxyGnBpwRmlP7dj5USOKRLG+N+cRYhbn6hFlMADGjsEUbFHSUA4OsOPjCtCJ5IDM0OL5RFL6cnHJkINFpBCIiQv/9k="},{id:"2025-08-02",src:"anilar/2025-08-02.jpg",thumb:"anilar/2025-08-02-s.jpg",date:{gun:2,ay:8,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQBAwX/xAAmEAACAQMDAwQDAAAAAAAAAAABAgADBBEFEjETIVEiQlJiodHw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBQf/aAAwDAQACEQMRAD8A3aookmo6q/Y4758TLXT8FmV0YEcFsSeyBuKFFOptY5Izxj+E17hbWq1BqmD8iMA7uDCqmLiGBI3L2+7RPJNy2T6zEK0ddOPVt7MUwCyHa/nn9Zk41CpR1Csr0lrAOy0y3tyT+IiB6pTTBURXIILDOMcRESaX/9k="},{id:"2025-08-03",src:"anilar/2025-08-03.jpg",thumb:"anilar/2025-08-03-s.jpg",date:{gun:3,ay:8,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EACUQAAIBBAEDBAMAAAAAAAAAAAECAAMEERIhBSIxEzJBsVGR0f/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAGREBAQEAAwAAAAAAAAAAAAAAABEBEiEx/9oADAMBAAIRAxEAPwCVZGqKOyOBz+SDNhc3KnDurDPAfDfYnd061pU7UNcY2roddl9sx6hRShQt3p+W4Y8jbjzDey46l+lv3YHdz4iU6FpmhTJB5UfURUYnPd3d5b0bJFZ9M+zksPj9TnIrrcLbVUIdTqFPkE/ERJvpYrpa9bVFVUqAAYA2H9iIgpx//9k="},{id:"2025-08-16",src:"anilar/2025-08-16.jpg",thumb:"anilar/2025-08-16-s.jpg",date:{gun:16,ay:8,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBv/EACUQAAIBBAIBAwUAAAAAAAAAAAECAwAEESESE0EFIlExMmGxwf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//EABkRAQEAAwEAAAAAAAAAAAAAAAABERJRIf/aAAwDAQACEQMRAD8AxEQv7ZJpQ8aj2qck6rY29tb2zKbhguQcEgcjWIdxbiCQuY1wrDicN8bH6qKH0/By0oWISlW5HPFR9cUM9OTF8W9yjQVdfilQcUH2TEr4OPFKmm946T1NxHYTSRDBK4J4486Nc/btN0JEknWEJIKje/5SlVZxZ0WZ2Yhk/BpSlE3/2Q=="},{id:"2025-08-24",src:"anilar/2025-08-24.jpg",thumb:"anilar/2025-08-24-s.jpg",date:{gun:24,ay:8,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQP/xAAjEAACAgIBAwUBAAAAAAAAAAABAgADBBEhBRNREjEyM6HB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERMf/aAAwDAQACEQMRAD8AoS/LoqBNqBdeopvTa8ztudcio95YJZ8ST7yLqWeiEbtRyWVSFUHag8H+yPquVW5CVkks2w2taEiWryNl8pA7DwYmJ3lblnOzyYlaMZWMrW3gFuQOCZflWd6xWKhFUaAH7ETXrTjyA4+wREQL/9k="},{id:"2025-10-03",src:"anilar/2025-10-03.jpg",thumb:"anilar/2025-10-03-s.jpg",date:{gun:3,ay:10,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAlEAACAgIBAgYDAAAAAAAAAAABAgADBBEhEhMFFCJBUZEjMXH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAGxEBAQADAAMAAAAAAAAAAAAAAQACESEDEhP/2gAMAwEAAhEDEQA/AOUXFbVRUlSS2z7Ae5+5X8Q8pi9s0r1hhs7XREkbFSuykqSyKSH6iPuRZFXlqb2Wssja7RJ5AB2TFRxdM5rLpateDgNWjN3QxAJHHETCGdYRsk7/ALEHZvnSo/UHLlv3scyhZn2lVpt9SD1aI+fmIlczdHxqPIHUgfjeIiStfs3/2Q=="},{id:"2025-10-05",src:"anilar/2025-10-05.jpg",thumb:"anilar/2025-10-05-s.jpg",date:{gun:5,ay:10,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAjEAACAgICAgEFAAAAAAAAAAABAgADBBESITFBEyIkYXHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAABABECAxL/2gAMAwEAAhEDEQA/ALGFTAEhDtdnS9t+tTmjEwySS11bg9hW/sUUp8aVOo5AceXsb8kSg4nO/kl/25YlkB7U61CdfThJDk1pZcMMRuw9+7ImCzBvW1wHUgMRsnzEWMdLfZaVqa1iwbX0/nqZMPKDVNXaERiuzYOi3fuIg85d1lova12RAVLEg8vIiIl6N//Z"},{id:"2025-10-24",src:"anilar/2025-10-24.jpg",thumb:"anilar/2025-10-24-s.jpg",date:{gun:24,ay:10,yil:2025},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUCAwQG/8QAKBAAAQQBAgMJAQAAAAAAAAAAAQACAxEEEiEFIjEUJEJSYXFyobHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAZEQEAAwEBAAAAAAAAAAAAAAAAAREhMQL/2gAMAwEAAhEDEQA/AMTYWIZnRBgaa1ctco9bXJj4OK2EvZKw2PHGCfsKfFmvyOINjfYbMaJBoAUu4WSMkkhLqBA0bddr/qOzNLlWsR8NwnRtJgabANot48o7PF8B+IkjxEDnDJjABJojYWqneseR0Mjdeg1uensiK+ejPFaB5MEd+UfiIiJP/9k="},{id:"2025-11-20",src:"anilar/2025-11-20.jpg",thumb:"anilar/2025-11-20-s.jpg",date:{gun:20,ay:11,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMFAQIEBv/EACcQAAICAgECBAcAAAAAAAAAAAECAAMEESEFQRIiUYETFUJhcbHB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/8QAGxEAAwACAwAAAAAAAAAAAAAAAAEREiEiMWH/2gAMAwEAAhEDEQA/AKvFwKbcYNYjF3BKkMPXQ4mqYFL4R8zC0A+Xw7BI+8ko+M+MLMSk2gLzpfEVM5Uy7UrdWS1LexOx7aMNbFoq4k+6e68/mI6ZPT0PR6wuDR2L7JPps6/QaZ6zdZbj11HbO7bAP08b/uvaIkn2WnEq/lFp52kRE3Jkof/Z"},{id:"2025-11-22",src:"anilar/2025-11-22.jpg",thumb:"anilar/2025-11-22-s.jpg",date:{gun:22,ay:11,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFBv/EACkQAAEDAgMGBwAAAAAAAAAAAAEAAgMEEQUSIRMjMUFRoRUWUmFxkdH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A3HSU9LGHTTMZfgDxUfjMZqBuCabNYSg97dFgVmLtqqpz3t2bWtswanTmpoKxoaeDbXFiL6fKJZHfWHpP0i5PzbUDRtNDblfN+ollFJLhM7qndwuynQFwsL9VLiUDaXZQ6F4BJKIpFqPP7dkRExf/2Q=="},{id:"2025-12-04",src:"anilar/2025-12-04.jpg",thumb:"anilar/2025-12-04-s.jpg",date:{gun:4,ay:12,yil:2025},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEEBQYC/8QAJxAAAQQBAQYHAAAAAAAAAAAAAQACAxEEEhMhIzFBUQUUMlJhgbH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/EABkRAQACAwAAAAAAAAAAAAAAAAABEgIRIf/aAAwDAQACEQMRAD8AmBwbGJHFrA+qBPzv/Voy4wETnbWMF1EdaWF5uMxuMb3vIPNzhZHZeZ8l5jj2ZJkFGgDZ+uyz1O2vua3UeEefuRWo5sUxtLsGTVQvcUVcTriGvp4JFjsulwMnHxcJukcQ+o9SUROzjYMZSfETe5jkREFYHaX/2Q=="},{id:"2025-12-31",src:"anilar/2025-12-31.jpg",thumb:"anilar/2025-12-31-s.jpg",date:{gun:31,ay:12,yil:2025},width:1202,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYFAwT/xAAjEAABBAIBBAMBAAAAAAAAAAABAAIDEQQhEgUUMUEiQlFh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EABoRAAICAwAAAAAAAAAAAAAAAAABAiEREhP/2gAMAwEAAhEDEQA/AOvSsCLtGSZMbXvk2A/6j0F6MjpOJkQuEcEcUtW1zR4P9UnhyZE2QwROeZSaBB2qGLNnjfwLuYa8R3dXf56U5NplFZkuw8priOINGtBFVdtA7ZisnZ2ieoaEJG4wvEkbnNI8Uapa/SJg8tbM4GnXVbcb9/qItzSwEXZUN5cR8gNeERFyFT//2Q=="},{id:"2026-02-20",src:"anilar/2026-02-20.jpg",thumb:"anilar/2026-02-20-s.jpg",date:{gun:20,ay:2,yil:2026},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQP/xAAlEAACAQMDAgcAAAAAAAAAAAABAgADBBEFEiFBURMiMWFicdH/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EABsRAQEAAgMBAAAAAAAAAAAAAAEAAhEDEiET/9oADAMBAAIRAxEAPwDDNT4HOeeOBPcWlatbvVp8KvfjP1K9MKNpfncAMT4uSB1/J20da1qaFJd7MoUleAB3PvJ5cq7Lox4Q0tglWJJ3RNN7Cgjsu26ODjOBEHeHzp2o1F3tTI2uvIl+l3ANmBSG1/QnrERH0Z3xNVW0xESdr//Z"},{id:"2026-03-23",src:"anilar/2026-03-23.jpg",thumb:"anilar/2026-03-23-s.jpg",date:{gun:23,ay:3,yil:2026},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEEBQID/8QAJRAAAgIBAwMEAwAAAAAAAAAAAQIDEQAEEjEFIUETIjJxFFFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAQADAQEAAAAAAAAAAAAAAAABESECEv/aAAwDAQACEQMRAD8ASjXBk3yMTLe2OLsVrkHIj0sZiMkkoEwvcJO4X+fu840HUE1ZXUSMI5ImKmO/lYqx5yOuSuuneTT2GcBXryuDTyJZ5nUGl9w8GucZl+m54qvvGOgXFnggiPpKC5PyLe6vqu2e2h6r+NOsuwvXKtjGHzZT0qTiOWeSRYkUOxYLuPazxjGMQv/Z"},{id:"2026-03-26",src:"anilar/2026-03-26.jpg",thumb:"anilar/2026-03-26-s.jpg",date:{gun:26,ay:3,yil:2026},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAkEAACAgIBAgcBAAAAAAAAAAABAgADBBIREyEFFCJBUnGx4f/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8AxYuJXbg2vo7Wc6qQvI5l0Y2Nb4YprRuuQSWJAAI9v7MPmnqrtVAp9QK8juDGBlVIBTk6gdyXP4JOqQ6cTq1+JsdVvI57HlYjEeYtmx1X7YydgbePjEQgvqREQs//2Q=="},{id:"2026-03-27",src:"anilar/2026-03-27.jpg",thumb:"anilar/2026-03-27-s.jpg",date:{gun:27,ay:3,yil:2026},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAQP/xAAmEAACAQMCBgIDAAAAAAAAAAABAgADBBESIQUTFDFRYSIjQZHx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABoRAAIDAQEAAAAAAAAAAAAAAAABAhExEkH/2gAMAwEAAhEDEQA/APRNd1b9SKpSs2WD6zhcE7Y7Y2nKnGV6fU40l13x7kG1vtNjcWzk4YEoR58H1N9mFubak9MOtVCVLrjY/wAk7rSjp1RuTitOjdrvzeWmAS2MExMHQU7p3qJdKa2flhcA+/URlOPrByyBSlXgZP2bnuDEQTw0NKF+oFJagA5mcavz+4iIgT//2Q=="},{id:"2026-04-12",src:"anilar/2026-04-12.jpg",thumb:"anilar/2026-04-12-s.jpg",date:{gun:12,ay:4,yil:2026},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEG/8QAIRAAAgICAgIDAQAAAAAAAAAAAQIDEQAEEiExUQUTYRX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/xAAaEQEAAgMBAAAAAAAAAAAAAAAAARECEjEh/9oADAMBAAIRAxEAPwDbULdWL/O8qH5Lhssh1mMKtxMl9+rr1kG7HG29LwYXXFuLEUf0jKGvtRRqxkbmYyQeRNscnalePTHa1wauPr2+Mwv6MLd/WRffkYx6hcINTWXd2Z9tZiiu5tQOjmBMPqnkUMGUMaK+MYzMey3LkOic15xjGUB//9k="},{id:"2026-04-13",src:"anilar/2026-04-13.jpg",thumb:"anilar/2026-04-13-s.jpg",date:{gun:13,ay:4,yil:2026},width:1202,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACQQAAIBBAIBBAMAAAAAAAAAAAECAwAEESESUTEFEyJhI3Gh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECESH/2gAMAwEAAhEDEQA/AMt6i4iZuFsibyNnNVHkuVUSmKNkYcuI2cfqrllcRywvcJEUkI+SoMgjffdUU9UFr7sajiq54CMaY/Z6+qi21cxmetlltHUMZ41JGcex4/tK5YDkZwd9UpxnEaXE6fggkI5ar1NpbG0hMUqIxMPno78UpTREEcMKxqCE0AKUpUtf/9k="},{id:"2026-04-28",src:"anilar/2026-04-28.jpg",thumb:"anilar/2026-04-28-s.jpg",date:{gun:28,ay:4,yil:2026},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAf/EACYQAAEEAgEDAwUAAAAAAAAAAAEAAgMRBBIhIjFBBRQ0YWKR0eH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/8QAGhEBAQACAwAAAAAAAAAAAAAAAAERMQISIf/aAAwDAQACEQMRAD8ATYUMEjQ1peQ23HbUD+8LVj5QdWk0moHSx7u4o8gWoODlzzZLISHPjc7qBJJaPJvwqE0Zj9SJaahbHbL82OyF2aTOnBM6vkyD6bFFOdHLsaa48olVwy4WUcd7uohsgoqlkZEhOxIkbs4UDyOf0iJqnxvjJ7mL7vyiIsHav//Z"},{id:"2026-06-18",src:"anilar/2026-06-18.jpg",thumb:"anilar/2026-06-18-s.jpg",date:{gun:18,ay:6,yil:2026},width:1024,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAoEAABAwMCBAcBAAAAAAAAAAABAAIDBBEhEjEFQVGBExQiMzQ1YfD/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/8QAGREAAwEBAQAAAAAAAAAAAAAAAAECMQNB/9oADAMBAAIRAxEAPwC3TBJ7U8T82sHWWaWSMtfpcHaWk72uNsX37JR0rKqOR8jhFHcNB03JPRZqykdBMIcloAZG7a/9ZVrpWCTC1nRbSnSDysiGmjj8oTJJ4oy8F3pxnsiz6tAUEOH/AF1EOtQb/uVLi5JipLnaRESelVhfU/AmPPU9ERBgP//Z"},{id:"2026-06-19",src:"anilar/2026-06-19.jpg",thumb:"anilar/2026-06-19-s.jpg",date:{gun:19,ay:6,yil:2026},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAlEAACAQMEAQQDAAAAAAAAAAABAhEAAwQFEiExFRNBgaEiU5H/xAAXAQEBAQEAAAAAAAAAAAAAAAACAAED/8QAHBEAAgICAwAAAAAAAAAAAAAAAAECESFREhMx/9oADAMBAAIRAxEAPwDFx8u9gFkDMoRtkAzzFdF1XLhnMR3+QHR6rU9A5LGApI5O5QePf5qLWLduoItjkAhSIgew+BVmLqwqpKwmpoEXfjndHMMO6VZOjXGMllk88saU+yWzOK0W/GoMhWRBctiCdz9fyo1DLvYgAtWUBidzD64pSuYljwq+dxv0N9UpSoR//9k="},{id:"2026-06-20",src:"anilar/2026-06-20.jpg",thumb:"anilar/2026-06-20-s.jpg",date:{gun:20,ay:6,yil:2026},width:768,height:1022,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAoEAABAwIDBwUAAAAAAAAAAAABAAIDBBEFEyESFDFBUZGhBiIjUmH/xAAXAQEBAQEAAAAAAAAAAAAAAAADAQAC/8QAGhEBAQADAQEAAAAAAAAAAAAAAQACERIDMf/aAAwDAQACEQMRAD8A3RYhVSwGUlkkbTYucwX8FdkOI5mjBH5UVtTT0VNltDSyUWaB1/VszXq6aJl9qNpDjraxGg7qmb8auBrZXN8k6R9kXDnP+wRJshpXqCHSCWNrQC47Ra23uXnhdQ0zfM4uc7iSeCIiZfOsbjV8oHEdRzREXHTbkv/Z"},{id:"2026-06-20-2",src:"anilar/2026-06-20-2.jpg",thumb:"anilar/2026-06-20-2-s.jpg",date:{gun:20,ay:6,yil:2026},width:768,height:1024,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDBQb/xAAoEAACAgEDAQcFAAAAAAAAAAABAgADEQQFIUESEyIxMjNxUWGBodH/xAAYAQACAwAAAAAAAAAAAAAAAAACAwABBP/EABsRAAMAAgMAAAAAAAAAAAAAAAABAhNRERIx/9oADAMBAAIRAxEAPwDa7SpVuCWqxWwJyv1BlqFbcAMCwHIzz8yO+y0vVqK1DsFIIYZ4wcfuR7drrA+qapVCgh3BHQKe18cy4py+USp7L06LarSqxVtTWCDgjPlE5g221wG7pvFz6ojM1aBwrZvudpXbHUEgs6gEfY5/kn2+2y1LXvcMbCK2Y4GRjrERSQZ6AU8e5b+HiImgWf/Z"},{id:"2026-06-20-3",src:"anilar/2026-06-20-3.jpg",thumb:"anilar/2026-06-20-3-s.jpg",date:{gun:20,ay:6,yil:2026},width:1200,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQFBgL/xAAkEAABAwIFBQEAAAAAAAAAAAABAAIRAwQFEhMhUSIxQWGBU//EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAAIDAAMAAAAAAAAAAAAAAAABAhESEyFR/9oADAMBAAIRAxEAPwDP1RFQRT0HOncnYoxta1e2lcEspuGYg+Rz9Uuxw4XdxBraf5zuHHhdY7hl3bu17lzC1xhsHwl2mbyuLsi69AbZWn3HdFByH2irbHml4W+GB9VodUeS5xLgOYhX2NMpXVmaYPW8BgPDu7Z+iPqIs2+g02kjIZI2MAjwiIrok//Z"},{id:"2026-08-22",src:"anilar/2026-08-22.jpg",thumb:"anilar/2026-08-22-s.jpg",date:{gun:22,ay:8,yil:2026},width:1022,height:768,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQYB/8QAJBAAAQMCBgIDAAAAAAAAAAAAAQACAwQRBRITITFBFCJhkcH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAaEQADAAMBAAAAAAAAAAAAAAAAAQIRIjFB/9oADAMBAAIRAxEAPwDFw+i8mMvkdI0G+XIL/a9giqNQRuPqb2Nrnmy2sPwurgoj6jUbctF+FFBQMimhuHufISH7Ha/d+t0TsxppIsGjEbGlmqCRw5o/EVLzq6nkMbpnkt5uA8IrDMnR4I5zsNiLnEkOIFz0o6jauIHGdEWo6FcOcq3OyVG55d38lERPpH//2Q=="},{id:"2026-08-22-2",src:"anilar/2026-08-22-2.jpg",thumb:"anilar/2026-08-22-2-s.jpg",date:{gun:22,ay:8,yil:2026},width:1600,height:1200,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EACcQAAEDAgUCBwAAAAAAAAAAAAEAAgMEEQUGEiExEyI0QVFykaGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIxAxEhQVH/2gAMAwEAAhEDEQA/AM1VVNFVyxxkWFtI9TZaQ4jUSDcNG9uFZTUEFNA+R7jpYOFUVEUlGIpnaS7uJFjzz9WTuUuUGoqz0LYHG2yKuwuCDEYXSPa5kjSA4BxI4RVeVroksS9OmYSRSx2J3eL/AAomYSenGLnzRFPGWlRJy54ab3j8RERKwjR//9k="},{id:"2026-08-22-3",src:"anilar/2026-08-22-3.jpg",thumb:"anilar/2026-08-22-3-s.jpg",date:{gun:22,ay:8,yil:2026},width:1200,height:1600,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABIDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAEEAgMFBv/EACEQAAICAgIBBQAAAAAAAAAAAAECAAMRIQQSMUFCgZLR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwQBAv/EABoRAAMBAQEBAAAAAAAAAAAAAAABAiERAxL/2gAMAwEAAhEDEQA/AIpTE6XHZUBJUHXrOe/I49BIZ+zD2ps/k208yh9MWqYeQ4xiNVS8JvObneFgtsxJwp2GX7CJnEdfVHksnqpYHOdriX+RcttxaldEkkj4iIDWFaemIdMeBERCF6f/2Q=="},{id:"2026-08-22-4",src:"anilar/2026-08-22-4.jpg",thumb:"anilar/2026-08-22-4-s.jpg",date:{gun:22,ay:8,yil:2026},width:1600,height:1200,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAL/xAAmEAABAwMCBgMBAAAAAAAAAAABAAIDBBIhETEFEyIjQVFygcGR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwIAAf/EABoRAQEAAgMAAAAAAAAAAAAAAAABIUICQVH/2gAMAwEAAhEDEQA/AKFlOyXnTQhx094Uosg5hshdaT0gyDb+Lkp6yWVrRHPK2NrTdgDQegt4oKivlMcLm9uEm551O++qLlO4SeVSBiihc6MBrbS5oJ3OhP4ijcUkqKJ0ULsmzPUSCPG6LSYdyypcUE2mMfq7eGuLaibQkdnx8giKtanZ5lF5ku6sDf7REQlr/9k="},{id:"2026-08-23",src:"anilar/2026-08-23.jpg",thumb:"anilar/2026-08-23-s.jpg",date:{gun:23,ay:8,yil:2026},width:1600,height:1200,blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEBgP/xAAlEAABBAIBAwQDAAAAAAAAAAABAAIDEQQSIQUTURQiMXFBQoH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwQF/8QAHxEAAgICAQUAAAAAAAAAAAAAAAECEQQxMgMhQXGR/9oADAMBAAIRAxEAPwDpMQn0sO5t3bbZ8mlKn6xKJpImMYygS1zgTZH6kcV9r1wepwvOjyyPVoHJ5scVSw9bjihY/KilbuRdUDYscf1Su9FlHvTLjD3I43kal4BrxaLisTqOSzJYY5Ts9/xftRJJvSFPpKG5L7RoxgH5/uG1a/P0VchhiIFxsNuo20eERT8DntEfLgiZksLYmNN/hoREW7F4s5ufyj6P/9k="}],ul={"2022-02-23":{baslik:"İlk kare",not:"Her şeyin başladığı gün."}},rc=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];function K0(i){return`${i.date.gun} ${rc[i.date.ay-1]} ${i.date.yil}`}const An=Z0.map((i,t)=>({...i,tarihYazisi:K0(i),gunAyYazisi:`${i.date.gun} ${rc[i.date.ay-1]}`,yilYazisi:String(i.date.yil),baslik:ul[i.id]?.baslik,not:ul[i.id]?.not,sira:t}));function lo(i){return`./${i}`.replace(/([^:]\/)\/+/g,"$1")}const na=1.58,dl=.055,fr=new u0;let ur=null;class J0{constructor(t){b(this,"grup",new de);b(this,"ani");b(this,"genislik");b(this,"yukseklik");b(this,"hedefMesh");b(this,"fotoMat");b(this,"cerceveMat");b(this,"kucukYuklendi",!1);b(this,"tamYuklendi",!1);b(this,"tamDoku",null);b(this,"dokular",[]);b(this,"atilanlar",[]);this.ani=t;const e=t.width/t.height,n=e>=1?na:na*e,s=e>=1?na/e:na;this.genislik=n+dl*2,this.yukseklik=s+dl*2,this.cerceveMat=new Pt({color:16447214,roughness:.78,metalness:0});const a=new pe(this.genislik,this.yukseklik),r=new rt(a,this.cerceveMat);r.position.z=.004,this.grup.add(r),this.hedefMesh=r,this.atilanlar.push(a,this.cerceveMat);const o=fr.load(t.blur);o.colorSpace=Ae,this.dokular.push(o),this.fotoMat=new Pt({map:o,roughness:.52,metalness:0});const A=new pe(n,s),l=new rt(A,this.fotoMat);l.position.z=.006,this.grup.add(l),this.atilanlar.push(A,this.fotoMat),ur||(ur=C0());const c=new Pt({map:ur,transparent:!0,opacity:.9,roughness:.85,depthWrite:!1}),h=new pe(.24,.085);this.atilanlar.push(h,c);for(const[f,u,m]of[[-1,1,.78],[1,-1,.78]]){const x=new rt(h,c);x.position.set(f*this.genislik/2,u*this.yukseklik/2,.009),x.rotation.z=m*f*u,this.grup.add(x)}r.userData.foto=this}kucukYukle(){this.kucukYuklendi||(this.kucukYuklendi=!0,fr.load(lo(this.ani.thumb),t=>{t.colorSpace=Ae,t.anisotropy=8,this.tamDoku||(this.fotoMat.map=t,this.fotoMat.needsUpdate=!0),this.dokular.push(t)}))}tamYukle(t){if(this.tamDoku){t?.(this.tamDoku);return}this.tamYuklendi||(this.tamYuklendi=!0,fr.load(lo(this.ani.src),e=>{e.colorSpace=Ae,e.anisotropy=8,this.tamDoku=e,this.fotoMat.map=e,this.fotoMat.needsUpdate=!0,this.dokular.push(e),t?.(e)}))}get mevcutDoku(){return this.fotoMat.map}birak(){this.dokular.forEach(t=>t.dispose()),this.atilanlar.forEach(t=>t.dispose()),this.dokular.length=0,this.atilanlar.length=0}}const He=2.15,ls=2.92,ei=.16,dr=-.03,pr=.012,oc=.93,pl=oc,q0=.985;class $0{constructor(t){b(this,"grup",new de);b(this,"fotograflar",[]);b(this,"hedefMeshler",[]);b(this,"yaprakSayisi");b(this,"yapraklar",[]);b(this,"kapakMat");b(this,"sayfaMat");b(this,"sirt");b(this,"solYigin");b(this,"sagYigin");b(this,"fotoYaprak",new Map);b(this,"kapanisYazi",null);b(this,"kapanisYaprak",null);b(this,"kapanisT",0);b(this,"ortalamaAdim",.01);b(this,"arkaKapak",new de);b(this,"atilanlar",[]);const e=An.length,n=2+e+1;this.yaprakSayisi=Math.ceil(n/2);const s=D0();this.sayfaMat=new Pt({map:s,color:15985882,roughness:.95,metalness:0,side:pn}),this.kapakMat=new Pt({map:nl(Mt.defter.kapakBaslik,Mt.defter.kapakUstu),roughness:.72,metalness:.05,side:pn});const a=new Pt({color:8008e3,roughness:.88}),r=new Pt({color:5053480,roughness:.8});this.atilanlar.push(this.sayfaMat,this.kapakMat,r,a);const o=new pe(He,ls);this.atilanlar.push(o);const A=Math.floor((2+e)/2),l=Array.from({length:this.yaprakSayisi},(M,E)=>E===A?5:1),c=l.reduce((M,E)=>M+E,0);this.ortalamaAdim=(oc-pr)/c;const h=[pr];for(const M of l)h.push(h[h.length-1]+M*this.ortalamaAdim);const f=l.map(M=>Math.max(0,M-1)*this.ortalamaAdim);for(let M=0;M<this.yaprakSayisi;M++){const E=new de,Q=M===0,R=new de;R.position.set(He/2,0,.0035);const w=new de;w.position.set(He/2,0,-.0035),w.rotation.y=Math.PI,E.add(R,w);const D=new rt(o,Q?this.kapakMat:this.sayfaMat);D.position.z=-.001,D.castShadow=t&&Q,R.add(D);const v=new rt(o,Q?a:this.sayfaMat);v.position.z=-.001,w.add(v);const S={pivot:E,onYuz:R,arkaYuz:w,bas:h[M],son:h[M+1],p0:h[M]+f[M]+this.ortalamaAdim*.12,p1:h[M]+f[M]+this.ortalamaAdim*.62,index:M};this.yapraklar.push(S),this.grup.add(E),this.yuzDoldur(S,2*M,R,Q),this.yuzDoldur(S,2*M+1,w,!1)}const u=new Qt(.22,ls+.1,.2);this.sirt=new rt(u,r),this.sirt.position.set(0,0,0),this.grup.add(this.sirt),this.atilanlar.push(u);const m=new Qt(He-.05,ls-.05,.1),x=new Pt({color:15129796,roughness:.95});this.atilanlar.push(m,x),this.solYigin=new rt(m,x),this.solYigin.position.set(-He/2,0,-.06),this.sagYigin=new rt(m,x),this.sagYigin.position.set(He/2,0,-.06),this.grup.add(this.solYigin,this.sagYigin);const p=new Pt({map:nl("",""),roughness:.72,metalness:.05});this.atilanlar.push(p);const d=new Qt(He+.06,ls+.06,.05),B=new rt(d,[r,r,r,r,a,p]);B.position.set(He/2,0,0),B.receiveShadow=t,this.arkaKapak.add(B),this.arkaKapak.position.z=dr,this.grup.add(this.arkaKapak),this.atilanlar.push(d),this.setIlerleme(0)}yuzDoldur(t,e,n,s){if(s)return;const a=An.length;if(e===1){this.icKapak(n);return}const r=e-2;if(r>=0&&r<a){this.fotoSayfasi(t,n,An[r]);return}r===a&&this.kapanisSayfasi(t,n)}icKapak(t){const e=tr([Mt.defter.kapakBaslik],{genislik:1024,yukseklik:256,fontBoyu:132,renk:"rgba(238, 214, 172, 0.92)"}),n=new Be({map:e,transparent:!0,depthWrite:!1}),s=new pe(1.72,.43),a=new rt(s,n);a.position.set(0,.5,.002),t.add(a),this.atilanlar.push(s,n);const r=tr([Mt.defter.kapakUstu],{genislik:1024,yukseklik:190,fontBoyu:76,renk:"rgba(226, 194, 150, 0.78)"}),o=new Be({map:r,transparent:!0,depthWrite:!1}),A=new pe(1.62,.3),l=new rt(A,o);l.position.set(0,.14,.002),t.add(l),this.atilanlar.push(A,o);const c=new Be({color:14267527,transparent:!0,opacity:.55}),h=new pe(.9,.006),f=new rt(h,c);f.position.set(0,-.06,.002),t.add(f),this.atilanlar.push(h,c)}fotoSayfasi(t,e,n){const s=new J0(n);s.grup.position.set(0,.24,.002),s.grup.rotation.z=(n.sira%5-2)*.014,e.add(s.grup),this.fotograflar.push(s),this.hedefMeshler.push(s.hedefMesh),this.fotoYaprak.set(s,t);const a=tr([n.tarihYazisi],{genislik:900,yukseklik:210,fontBoyu:132}),r=new Be({map:a,transparent:!0,depthWrite:!1}),o=new rt(new pe(1.6,.373),r);o.position.set(.02,-.94,.002),o.rotation.z=-.012,e.add(o),this.atilanlar.push(o.geometry,r)}kapanisSayfasi(t,e){this.kapanisYaprak=t,this.kapanisYazi=new k0([{metin:Mt.defter.kapanisBaslik,fontBoyu:108},{metin:Mt.defter.kapanisMetin,fontBoyu:78,renk:"rgba(72, 64, 58, 0.88)",ustBosluk:58}],1320,520);const n=new Be({map:this.kapanisYazi.doku,transparent:!0,depthWrite:!1}),s=new rt(new pe(1.96,.772),n);s.position.set(0,.16,.002),e.add(s),this.atilanlar.push(s.geometry,n)}kapanisYaziyiSur(t,e,n){if(!this.kapanisYazi||!this.kapanisYaprak)return 0;const s=this.kapanisYaprak,a=this.yapraklar[s.index-1],r=a?a.son-this.ortalamaAdim*.12:s.bas;if(!(t>=r&&t<=s.p0+.002))return this.kapanisT!==0&&(this.kapanisT=0,this.kapanisYazi.ayarla(0)),0;if(n){const A=this.kapanisYazi.ayarla(1);return this.kapanisT=1,A}return this.kapanisT=Math.min(1,this.kapanisT+e/3.8),this.kapanisYazi.ayarla(this.kapanisT)}setIlerleme(t){const e=this.yaprakSayisi,n=this.kapanmaIlerlemesi(t);if(n>.001){const A=this.yapraklar[e-1];for(const l of this.yapraklar)l.pivot.visible=!1;A.pivot.visible=n<.6,A.pivot.rotation.set(0,-Math.PI,0),A.pivot.position.z=ei,A.onYuz.visible=!1,A.arkaYuz.visible=!0,this.arkaKapak.rotation.y=-Math.PI*n,this.arkaKapak.position.z=ae(dr,ei+.045,n)+Math.sin(n*Math.PI)*.07,this.solYigin.visible=!0,this.solYigin.scale.z=ei/.1,this.solYigin.position.z=ei/2-.11,this.sagYigin.visible=!1,this.sirt.visible=!0;return}this.arkaKapak.rotation.y=0,this.arkaKapak.position.z=dr;const s=this.aktifYaprak(t).index;for(const A of this.yapraklar){const l=A.index>=s-1&&A.index<=s+1;if(A.pivot.visible=l,!l)continue;const c=Nt((t-A.p0)/(A.p1-A.p0)),h=Ui(c);A.pivot.rotation.y=-Math.PI*h;const f=ei/e,u=f*(e-A.index),m=f*(A.index+1),x=-Math.abs(A.index-s)*.012,p=Math.sin(h*Math.PI)*.055;A.pivot.position.z=ae(u,m,h)+p+x,A.pivot.rotation.z=Math.sin(h*Math.PI)*.035,A.index===0&&(A.pivot.position.z+=.012),A.onYuz.visible=h<.5,A.arkaYuz.visible=h>=.5}const a=this.yapraklar.filter(A=>t>(A.p0+A.p1)/2).length,r=Math.max(.02,a*ei/e),o=Math.max(.02,(e-a)*ei/e);this.solYigin.scale.z=r/.1,this.solYigin.position.z=r/2-.11,this.sagYigin.scale.z=o/.1,this.sagYigin.position.z=o/2-.11,this.solYigin.visible=a>0,this.sirt.visible=t>pr*.4}kapanmaIlerlemesi(t){return Qe(Nt((t-pl)/(q0-pl)))}kapakAcilmasi(t){const e=this.yapraklar[0];return Ui(Nt((t-e.p0)/(e.p1-e.p0)))}odakSirasi(t){const e=An.length,n=this.aktifYaprak(t),s=(n.index-1)*2+(t>n.p1?1:0);return Math.max(0,Math.min(e-1,s))}gorunurMu(t,e){const n=this.fotoYaprak.get(t);if(!n)return!1;const s=this.ortalamaAdim*1.6,a=this.yapraklar[n.index+1],r=(a?a.son:n.son)+s;return e>=n.bas-s&&e<=r}aktifYaprak(t){for(const e of this.yapraklar)if(t<e.son)return e;return this.yapraklar[this.yapraklar.length-1]}odakX(t){const e=this.aktifYaprak(t),n=this.ortalamaAdim*.18;let s;if(t<e.p0)s=0;else if(t<e.p1)s=Qe((t-e.p0)/(e.p1-e.p0));else{const a=e.son-n;s=t<a?1:1-Qe((t-a)/n)}return ae(He/2,-He/2,s)}cevirmeVurgusu(t){const e=this.aktifYaprak(t);return t<e.p0||t>e.p1?0:Math.sin((t-e.p0)/(e.p1-e.p0)*Math.PI)}kapanisSonrasi(t){return Nt((this.kapanmaIlerlemesi(t)-.55)/.35)}birak(){this.fotograflar.forEach(t=>t.birak()),this.atilanlar.forEach(t=>t.dispose()),this.atilanlar.length=0}}class tx{constructor(t,e){b(this,"sahne",new xa);b(this,"kamera");b(this,"kartDegisti",null);b(this,"kalemSesi",null);b(this,"ekran");b(this,"defter");b(this,"zerre");b(this,"masaIsik");b(this,"yanIsik");b(this,"pmrem");b(this,"ortamHedef");b(this,"atilanlar",[]);b(this,"isin",new S0);b(this,"buyukGrup",new de);b(this,"buyukFoto");b(this,"buyukCerceve");b(this,"buyukMat");b(this,"cerceveMat");b(this,"acikFoto",null);b(this,"acilma",0);b(this,"acilmaHedef",0);b(this,"gecici",new T);b(this,"sonP",0);b(this,"harfSayaci",0);this.ekran=t,this.sahne.background=new Ot(722953),this.sahne.fog=new vs(722953,.07),this.pmrem=new xs(e);const n=new Io;this.ortamHedef=this.pmrem.fromScene(n,.03),this.sahne.environment=this.ortamHedef.texture,this.sahne.environmentIntensity=.32,n.traverse(f=>{f instanceof rt&&(f.geometry.dispose(),Array.isArray(f.material)?f.material.forEach(u=>u.dispose()):f.material.dispose())}),this.kamera=new De(t.durum.mobil?52:44,t.durum.enBoy,.05,40),this.defter=new $0(t.kalite.golgeler),this.defter.grup.rotation.x=-.14;const s=new de;s.add(this.defter.grup),this.sahne.add(s),this.masaIsik=new ln(16769981,26,14,1.7),this.masaIsik.position.set(-.6,2.1,2.6),this.yanIsik=new ln(16760736,9,14,2),this.yanIsik.position.set(2.4,-1.2,1.6);const a=new ln(9414911,5,12,2);a.position.set(-2.6,.6,-2.2),this.sahne.add(this.masaIsik,this.yanIsik,a,new sc(4207674,1.4)),this.zerre=new To({sayi:Math.round(t.kalite.bokehParcacik*.8),alan:new T(12,8,7),merkez:new T(0,0,.5),renk:Mt.renkler.defterVurgu,boyut:2.2,opaklik:.32,dusmeHizi:-.05},t.pikselOrani()),this.sahne.add(this.zerre.nesne);const r=Ea(.7),o=new Be({map:r,transparent:!0,blending:Xn,depthWrite:!1,color:16759180,opacity:.3}),A=new pe(9,7),l=new rt(A,o);l.position.set(0,0,-1.4),this.sahne.add(l),this.atilanlar.push(A,o),this.cerceveMat=new Be({color:16447214,transparent:!0,opacity:0}),this.buyukMat=new Be({transparent:!0,opacity:0});const c=new pe(1,1),h=new pe(1,1);this.buyukCerceve=new rt(c,this.cerceveMat),this.buyukFoto=new rt(h,this.buyukMat),this.buyukFoto.position.z=.002,this.buyukGrup.add(this.buyukCerceve,this.buyukFoto),this.buyukGrup.visible=!1,this.buyukGrup.renderOrder=10,this.sahne.add(this.buyukGrup),this.atilanlar.push(c,h,this.cerceveMat,this.buyukMat),this.guncelle(0,.016,0)}kamerayiKur(t,e){const n=this.ekran.durum.mobil,s=this.ekran.azHareket,a=this.defter.cevirmeVurgusu(t),r=this.defter.kapakAcilmasi(t),o=this.defter.kapanmaIlerlemesi(t),A=r*(1-o),l=Wo.degToRad(this.kamera.fov)/2,c=n?He*1.1:He*2*1.06,h=ae(He*1.18,c,A),u=ls*1.19/2/Math.tan(l),m=h/2/(Math.tan(l)*this.kamera.aspect),p=Math.max(u,m)*(1+a*.07),d=this.defter.odakX(t),B=n?d*.92:d*.18,M=ae(ae(He/2,B,r),-He/2,o),E=ae(.24,.06,A),Q=s?0:1;this.kamera.position.set(M+Math.sin(e*.21)*.045*Q,E+Math.sin(e*.17)*.03*Q,p);const R=ae(He/2,n?d*.96:d*.16,r);this.gecici.set(ae(R,-He/2,o),-.02,0),this.kamera.lookAt(this.gecici)}guncelle(t,e,n){this.sonP=t,this.defter.setIlerleme(t),this.kamerayiKur(t,n);for(const a of this.defter.fotograflar)this.defter.gorunurMu(a,t)&&a.kucukYukle();if(this.masaIsik.position.set(this.kamera.position.x-.4,2,2.4),this.acilma=ua(this.acilma,this.acilmaHedef,7,e),this.acilma<.002&&this.acilmaHedef===0&&(this.buyukGrup.visible=!1,this.acikFoto=null),this.buyukGrup.visible&&this.acikFoto){const a=Qe(this.acilma),r=this.buyukMesafe();this.gecici.set(0,0,-r).applyQuaternion(this.kamera.quaternion).add(this.kamera.position),this.buyukGrup.position.copy(this.gecici),this.buyukGrup.quaternion.copy(this.kamera.quaternion),this.buyukGrup.rotateY((1-a)*-.55),this.buyukGrup.scale.setScalar(ae(.62,1,a)),this.cerceveMat.opacity=a,this.buyukMat.opacity=a}const s=this.defter.kapanisYaziyiSur(t,e,this.ekran.azHareket);s>0&&(this.harfSayaci+=s,this.harfSayaci>=26&&(this.harfSayaci=0,this.kalemSesi?.())),this.zerre.guncelle(this.ekran.azHareket?0:n,.24)}buyukMesafe(){const t=Wo.degToRad(this.kamera.fov)/2,e=this.buyukCerceve.scale.x,n=this.buyukCerceve.scale.y,s=this.ekran.durum.mobil?.82:.76,a=n/2/Math.tan(t)/s,r=e/2/(Math.tan(t)*this.kamera.aspect)/s;return Math.max(a,r)}dokunma(t,e){if(this.acikFoto&&this.acilmaHedef>0)return this.kapat(),!0;this.isin.setFromCamera(new ct(t,e),this.kamera);const n=this.isin.intersectObjects(this.defter.hedefMeshler,!1);for(const s of n){const a=s.object.userData.foto;if(a&&this.defter.gorunurMu(a,this.sonP))return this.ac(a),!0}return!1}ac(t){this.acikFoto=t,this.acilmaHedef=1,this.buyukGrup.visible=!0;const e=t.ani.width/t.ani.height,n=2.4,s=e>=1?n:n*e,a=e>=1?n/e:n;this.buyukFoto.scale.set(s,a,1),this.buyukCerceve.scale.set(s+.14,a+.14,1);const r=t.mevcutDoku;r&&(this.buyukMat.map=r),this.buyukMat.needsUpdate=!0,t.tamYukle(o=>{this.acikFoto===t&&(this.buyukMat.map=o,this.buyukMat.needsUpdate=!0)}),this.kartDegisti?.({tarih:t.ani.tarihYazisi,baslik:t.ani.baslik,not:t.ani.not,sira:t.ani.sira+1,toplam:An.length})}kapat(){this.acilmaHedef=0,this.kartDegisti?.(null)}get acikMi(){return this.acikFoto!==null&&this.acilmaHedef>0}aktifSira(t){return this.defter.odakSirasi(t)}kapanisSonrasi(t){return this.defter.kapanisSonrasi(t)}boyutlandir(){const t=this.ekran.durum.mobil;this.kamera.aspect=this.ekran.durum.enBoy,this.kamera.fov=t?52:44,this.kamera.updateProjectionMatrix(),this.zerre.pikselOraniAyarla(this.ekran.pikselOrani())}birak(){this.defter.birak(),this.atilanlar.forEach(t=>t.dispose()),this.zerre.birak(),this.ortamHedef.dispose(),this.pmrem.dispose(),this.sahne.clear()}}const ex={İ:"i",I:"i",ı:"i",Ş:"s",ş:"s",Ğ:"g",ğ:"g",Ü:"u",ü:"u",Ö:"o",ö:"o",Ç:"c",ç:"c",Â:"a",â:"a"};function Ac(i){return[...i].map(t=>ex[t]??t.toLowerCase()).join("").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"")}const nx=Mt.kilit.kabulEdilenler.map(Ac);function ix(i){const t=Ac(i);return t.length>0&&nx.includes(t)}class sx{constructor(){b(this,"kok");b(this,"acildi",null);b(this,"hataOldu",null);b(this,"basariIlerleme",null);b(this,"giris");b(this,"hata");b(this,"form");b(this,"kart");b(this,"kilitli",!1);const t=Mt.kilit;this.kok=document.createElement("section"),this.kok.className="kilit",this.kok.innerHTML=`
      <div class="kilit-kart">
        <p class="kilit-ust">${Mt.acilis.ustBaslik}</p>
        <h1 class="kilit-baslik">${Mt.acilis.baslik}</h1>
        <p class="kilit-aciklama">${t.aciklama}</p>
        <form class="kilit-form" autocomplete="off" novalidate>
          <label class="kilit-etiket" for="sifre-girdi">${t.baslik}</label>
          <div class="kilit-satir">
            <input id="sifre-girdi" class="kilit-girdi" type="password" name="sifre"
              placeholder="${t.yerTutucu}" autocomplete="off" autocapitalize="off"
              autocorrect="off" spellcheck="false" enterkeyhint="go" />
            <button class="kilit-dugme" type="submit">${t.dugme}</button>
          </div>
        </form>
        <p class="kilit-hata" role="alert" aria-live="polite"></p>
        <button class="kilit-ipucu" type="button">${t.ipucuMetni}</button>
      </div>
    `,this.kart=this.kok.querySelector(".kilit-kart"),this.giris=this.kok.querySelector(".kilit-girdi"),this.hata=this.kok.querySelector(".kilit-hata"),this.form=this.kok.querySelector(".kilit-form"),this.form.addEventListener("submit",e=>{e.preventDefault(),this.dene()}),this.giris.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),this.dene())}),this.giris.addEventListener("input",()=>{this.kart.classList.remove("hatali"),this.hata.textContent=""}),this.kok.querySelector(".kilit-ipucu").addEventListener("click",()=>{this.hata.textContent=t.ipucu,this.hata.classList.add("ipucu")})}odaklan(){window.setTimeout(()=>this.giris.focus({preventScroll:!0}),500)}dene(){if(this.kilitli)return;const t=Mt.kilit;if(!ix(this.giris.value)){this.hata.classList.remove("ipucu"),this.hata.textContent=t.hataMetni,this.kart.classList.remove("hatali"),this.kart.offsetWidth,this.kart.classList.add("hatali"),this.hataOldu?.();return}this.kilitli=!0,this.giris.blur(),this.hata.classList.remove("ipucu"),this.hata.textContent=t.basariMetni,this.kart.classList.add("acildi");const e=2400,n=performance.now();let s=!1;const a=()=>{s||(s=!0,this.basariIlerleme?.(1),this.acildi?.())},r=()=>{if(s)return;const o=Math.min(1,(performance.now()-n)/e);this.basariIlerleme?.(o),o<1?requestAnimationFrame(r):a()};requestAnimationFrame(r),window.setTimeout(a,e+200)}goster(){this.kok.classList.add("gorunur")}gizle(){this.kok.classList.remove("gorunur")}}class ax{constructor(){b(this,"kok");b(this,"defteriAc",null);b(this,"ipucu");b(this,"altyaziKutu");b(this,"altyaziParcalari",[]);b(this,"finalKutu");b(this,"finalSatirlari",[]);b(this,"davet");b(this,"cizgi");b(this,"sonAktif",-1);const t=Mt.hikaye;this.kok=document.createElement("section"),this.kok.className="hikaye-ui",this.kok.innerHTML=`
      <div class="kaydir-ipucu"><span>${t.kaydirmaIpucu}</span><i class="ok"></i></div>
      <div class="altyazi"></div>
      <div class="final">
        ${t.finalYazilari.map(e=>`<p class="final-satir">${e}</p>`).join("")}
        <button class="davet" type="button">${t.defterDavet}</button>
      </div>
      <div class="ilerleme"><i></i></div>
    `,this.ipucu=this.kok.querySelector(".kaydir-ipucu"),this.altyaziKutu=this.kok.querySelector(".altyazi"),this.finalKutu=this.kok.querySelector(".final"),this.davet=this.kok.querySelector(".davet"),this.cizgi=this.kok.querySelector(".ilerleme i");for(const e of t.altyazilar){const n=document.createElement("p");n.className="altyazi-satir",n.textContent=e.metin,this.altyaziKutu.appendChild(n),this.altyaziParcalari.push(n)}this.finalSatirlari=Array.from(this.kok.querySelectorAll(".final-satir")),this.davet.addEventListener("click",()=>this.defteriAc?.())}guncelle(t){this.ipucu.style.opacity=String(Nt(1-t/.035)),this.ipucu.style.visibility=t>.04?"hidden":"visible",this.cizgi.style.transform=`scaleX(${t})`;let e=-1;Mt.hikaye.altyazilar.forEach((r,o)=>{const A=this.altyaziParcalari[o],l=(t-r.p)/r.sure,c=Nt(l/.28),h=Nt((1-l)/.28),f=Math.min(c,h)*(l>=0&&l<=1?1:0);A.style.opacity=String(f),A.style.transform=`translateY(${(1-f)*12}px)`,f>.5&&(e=o)}),e!==this.sonAktif&&(this.sonAktif=e);const n=Nt((t-.952)/.02),s=Nt((t-.974)/.02);this.finalSatirlari[0]&&(this.finalSatirlari[0].style.opacity=String(n),this.finalSatirlari[0].style.transform=`translateY(${(1-n)*14}px)`),this.finalSatirlari[1]&&(this.finalSatirlari[1].style.opacity=String(s),this.finalSatirlari[1].style.transform=`translateY(${(1-s)*14}px)`);const a=Nt((t-.972)/.013);this.davet.style.opacity=String(a),this.davet.style.pointerEvents=a>.8?"auto":"none",this.finalKutu.style.visibility=t>.94?"visible":"hidden"}goster(){this.kok.classList.add("gorunur")}gizle(){this.kok.classList.remove("gorunur")}}class rx{constructor(){b(this,"kok");b(this,"kapatIstendi",null);b(this,"hikayeTekrar",null);b(this,"kapak");b(this,"sayac");b(this,"yil");b(this,"ipucu");b(this,"detay");b(this,"detayTarih");b(this,"detayBaslik");b(this,"detayNot");b(this,"detaySayac");b(this,"kapanis");b(this,"ipucuGoruldu",!1);const t=Mt.defter;this.kok=document.createElement("section"),this.kok.className="defter-ui",this.kok.innerHTML=`
      <div class="kaydir-ipucu defter-kaydir"><span>${t.kaydirmaIpucu}</span><i class="ok"></i></div>
      <div class="defter-bar">
        <span class="defter-sayac">1 / ${An.length}</span>
        <span class="defter-yil"></span>
      </div>
      <p class="defter-ipucu">${t.detayIpucu}</p>
      <div class="detay" aria-hidden="true">
        <div class="detay-ic">
          <p class="detay-tarih"></p>
          <h2 class="detay-baslik"></h2>
          <p class="detay-not"></p>
          <p class="detay-sayac"></p>
        </div>
        <button class="detay-kapat" type="button" aria-label="Kapat">×</button>
      </div>
      <div class="kapanis">
        <button class="tekrar" type="button">${t.tekrarIzle}</button>
      </div>
    `,this.kapak=this.kok.querySelector(".defter-kaydir"),this.sayac=this.kok.querySelector(".defter-sayac"),this.yil=this.kok.querySelector(".defter-yil"),this.ipucu=this.kok.querySelector(".defter-ipucu"),this.detay=this.kok.querySelector(".detay"),this.detayTarih=this.kok.querySelector(".detay-tarih"),this.detayBaslik=this.kok.querySelector(".detay-baslik"),this.detayNot=this.kok.querySelector(".detay-not"),this.detaySayac=this.kok.querySelector(".detay-sayac"),this.kapanis=this.kok.querySelector(".kapanis"),this.kok.querySelector(".detay-kapat").addEventListener("click",()=>this.kapatIstendi?.()),this.kok.querySelector(".tekrar").addEventListener("click",()=>this.hikayeTekrar?.())}guncelle(t,e,n,s){const a=Nt(1-t/.02);if(this.kapak.style.opacity=String(a),this.kapak.style.visibility=a>.01?"visible":"hidden",this.sayac.textContent=`${Math.min(An.length,e+1)} / ${An.length}`,this.yil.textContent=n,!this.ipucuGoruldu){const o=Nt((t-.09)/.03)*Nt(1-(t-.2)/.05);this.ipucu.style.opacity=String(o)}const r=Nt(s);this.kapanis.style.opacity=String(r),this.kapanis.style.visibility=r>.01?"visible":"hidden",this.kapanis.style.pointerEvents=r>.7?"auto":"none"}detayGoster(t){if(!t){this.detay.classList.remove("acik"),this.detay.setAttribute("aria-hidden","true");return}this.ipucuGoruldu=!0,this.ipucu.style.opacity="0",this.detayTarih.textContent=t.tarih,this.detayBaslik.textContent=t.baslik??"",this.detayBaslik.style.display=t.baslik?"":"none",this.detayNot.textContent=t.not??"",this.detayNot.style.display=t.not?"":"none",this.detaySayac.textContent=`${t.sira} / ${t.toplam}`,this.detay.classList.add("acik"),this.detay.setAttribute("aria-hidden","false")}goster(){this.kok.classList.add("gorunur")}gizle(){this.kok.classList.remove("gorunur")}}const ml="ani-defteri-ses",ox=.34;class Ax{constructor(){b(this,"ses",new Audio);b(this,"acik");b(this,"hedef",0);b(this,"zamanlayici",0);b(this,"baglam",null);this.ses.src=lo("muzik/ani-defteri.mp3"),this.ses.loop=!0,this.ses.preload="auto",this.ses.volume=0,this.ses.addEventListener("error",()=>this.ses.pause()),this.acik=localStorage.getItem(ml)!=="kapali"}baglamAl(){try{const t=window.AudioContext??window.webkitAudioContext;return t?(this.baglam||(this.baglam=new t),this.baglam.state==="suspended"&&this.baglam.resume(),this.baglam):null}catch{return null}}get acikMi(){return this.acik}baslat(){this.acik&&this.calmayaBasla()}async calmayaBasla(){try{await this.ses.play(),this.sesGecisi(ox,2400)}catch{}}degistir(){return this.acik=!this.acik,localStorage.setItem(ml,this.acik?"acik":"kapali"),this.acik?this.calmayaBasla():this.sesGecisi(0,700,()=>this.ses.pause()),this.acik}sesGecisi(t,e,n){window.clearInterval(this.zamanlayici);const s=this.ses.volume;this.hedef=t;const a=performance.now();this.zamanlayici=window.setInterval(()=>{const r=Nt((performance.now()-a)/e);this.ses.volume=s+(this.hedef-s)*r,r>=1&&(window.clearInterval(this.zamanlayici),n?.())},40)}tik(t=1){const e=this.baglamAl();if(e)try{const n=e.currentTime,s=Math.floor(e.sampleRate*.05),a=e.createBuffer(1,s,e.sampleRate),r=a.getChannelData(0);for(let f=0;f<s;f++)r[f]=(Math.random()*2-1)*Math.pow(1-f/s,6);const o=e.createBufferSource();o.buffer=a;const A=e.createBiquadFilter();A.type="bandpass",A.frequency.value=2600,A.Q.value=1.6;const l=e.createGain();l.gain.setValueAtTime(.26*t,n),l.gain.exponentialRampToValueAtTime(1e-4,n+.08),o.connect(A).connect(l).connect(e.destination),o.start(n);const c=e.createOscillator();c.type="sine",c.frequency.setValueAtTime(210,n),c.frequency.exponentialRampToValueAtTime(90,n+.1);const h=e.createGain();h.gain.setValueAtTime(.18*t,n),h.gain.exponentialRampToValueAtTime(1e-4,n+.13),c.connect(h).connect(e.destination),c.start(n),c.stop(n+.15)}catch{}}kalem(){const t=this.baglamAl();if(t)try{const e=t.currentTime,n=Math.floor(t.sampleRate*.055),s=t.createBuffer(1,n,t.sampleRate),a=s.getChannelData(0);for(let l=0;l<n;l++){const c=Math.sin(l/n*Math.PI);a[l]=(Math.random()*2-1)*c*c}const r=t.createBufferSource();r.buffer=s,r.playbackRate.value=.85+Math.random()*.4;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=3800+Math.random()*2200,o.Q.value=.9;const A=t.createGain();A.gain.setValueAtTime(.055+Math.random()*.03,e),A.gain.exponentialRampToValueAtTime(1e-4,e+.075),r.connect(o).connect(A).connect(t.destination),r.start(e)}catch{}}durdur(){window.clearInterval(this.zamanlayici),this.ses.pause()}}const ia="ani-defteri-asama";class lx{constructor(t){b(this,"ekran",new y0);b(this,"cizer");b(this,"kaydirma");b(this,"uiKatman");b(this,"perde");b(this,"gecis");b(this,"kilitSahne");b(this,"hikayeSahne",null);b(this,"defterSahne",null);b(this,"ses",new Ax);b(this,"sesDugmesi");b(this,"gezinmeDugmesi");b(this,"kilitUI",new sx);b(this,"hikayeUI",new ax);b(this,"defterUI",new rx);b(this,"asama","kilit");b(this,"zaman",0);b(this,"sonKare",0);b(this,"basladi",!1);b(this,"dokunBaslangic",{x:0,y:0,t:0});b(this,"sonKayitP",-1);b(this,"dongu",t=>{requestAnimationFrame(this.dongu),this.basladi||(this.sonKare=t,this.basladi=!0);const e=Math.min(.05,(t-this.sonKare)/1e3);if(this.sonKare=t,this.zaman+=e,!this.cizer.cizilebilir)return;this.kaydirma.guncelle(e);const n=this.kaydirma.yumusak;if(this.asama==="kilit")this.kilitSahne.guncelle(e,this.zaman),this.cizer.ciz(this.kilitSahne.sahne,this.kilitSahne.kamera);else if(this.asama==="hikaye"&&this.hikayeSahne)this.hikayeSahne.guncelle(n,this.zaman),this.hikayeUI.guncelle(n),this.cizer.ciz(this.hikayeSahne.sahne,this.hikayeSahne.yonetmen.kamera);else if(this.asama==="defter"&&this.defterSahne){this.defterSahne.guncelle(n,e,this.zaman);const s=this.defterSahne.aktifSira(n);this.defterUI.guncelle(n,s,An[s]?.yilYazisi??"",this.defterSahne.kapanisSonrasi(n)),this.cizer.ciz(this.defterSahne.sahne,this.defterSahne.kamera)}this.konumuKaydet(n)});this.cizer=new M0(t,this.ekran),this.kaydirma=new _0(document.getElementById("kaydirma-alani")),this.uiKatman=document.getElementById("ui-katmani"),this.perde=document.createElement("div"),this.perde.className="perde",this.perde.innerHTML=`<span class="perde-yazi">${Mt.acilis.baslik}</span>`,document.body.appendChild(this.perde),this.gecis=document.createElement("div"),this.gecis.className="gecis",document.body.appendChild(this.gecis),this.kilitSahne=new Q0(this.ekran,this.cizer.renderer),this.uiKatman.append(this.kilitUI.kok,this.hikayeUI.kok,this.defterUI.kok),this.sesDugmesiKur(),this.gezinmeDugmesiKur(),this.baglantilar(),this.ekran.dinle(()=>this.boyutlandir()),history.scrollRestoration&&(history.scrollRestoration="manual");const e=()=>{this.asama!=="kilit"&&this.ses.baslat()};window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),window.addEventListener("wheel",e,{once:!0,passive:!0}),window.addEventListener("touchstart",e,{once:!0,passive:!0});const n=sessionStorage.getItem(ia);n==="hikaye"||n==="defter"?this.asamaKur(n,!1):this.asamaKur("kilit",!1),requestAnimationFrame(this.dongu),window.setTimeout(()=>this.perdeyiAc(),420)}baglantilar(){this.kilitUI.hataOldu=()=>this.kilitSahne.hataVer(),this.kilitUI.basariIlerleme=e=>this.kilitSahne.basariAyarla(e),this.kilitSahne.tikCagrisi=e=>this.ses.tik(e),this.kilitUI.acildi=()=>{this.ses.baslat(),this.gecisYap("hikaye")},this.hikayeUI.defteriAc=()=>this.gecisYap("defter"),this.defterUI.kapatIstendi=()=>this.defterSahne?.kapat(),this.defterUI.hikayeTekrar=()=>this.basaDon();const t=this.cizer.canvas;t.addEventListener("pointerdown",e=>{this.dokunBaslangic={x:e.clientX,y:e.clientY,t:performance.now()}},{passive:!0}),t.addEventListener("pointerup",e=>{if(this.asama!=="defter"||!this.defterSahne)return;const n=e.clientX-this.dokunBaslangic.x,s=e.clientY-this.dokunBaslangic.y;if(Math.hypot(n,s)>12||performance.now()-this.dokunBaslangic.t>600)return;const a=e.clientX/window.innerWidth*2-1,r=-(e.clientY/window.innerHeight)*2+1;this.defterSahne.dokunma(a,r)&&this.kaydirma.kilitle(this.defterSahne.acikMi)},{passive:!0}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.asama==="defter"&&this.defterSahne?.acikMi&&(this.defterSahne.kapat(),this.kaydirma.kilitle(!1))})}sesDugmesiKur(){const t=document.createElement("button");t.className="ses-dugmesi",t.type="button",t.innerHTML='<span class="ses-ikon"></span>',t.setAttribute("aria-label",Mt.ses.kapat),t.addEventListener("click",()=>{const e=this.ses.degistir();t.classList.toggle("kapali",!e),t.setAttribute("aria-label",e?Mt.ses.kapat:Mt.ses.ac)}),t.classList.toggle("kapali",!this.ses.acikMi),document.body.appendChild(t),this.sesDugmesi=t}gezinmeDugmesiKur(){const t=document.createElement("button");t.className="gezinme-dugmesi",t.type="button",t.addEventListener("click",()=>{this.asama==="hikaye"?this.gecisYap("defter"):this.asama==="defter"&&this.gecisYap("hikaye")}),document.body.appendChild(t),this.gezinmeDugmesi=t}perdeyiAc(){this.perde.classList.add("acik"),window.setTimeout(()=>this.perde.remove(),1400),this.asama==="kilit"&&this.kilitUI.odaklan()}asamaKur(t,e){if(this.asama=t,sessionStorage.setItem(ia,t),this.kilitUI.gizle(),this.hikayeUI.gizle(),this.defterUI.gizle(),document.body.dataset.asama=t,this.sesDugmesi?.classList.toggle("gorunur",t!=="kilit"),this.gezinmeDugmesi&&(this.gezinmeDugmesi.classList.toggle("gorunur",t!=="kilit"),this.gezinmeDugmesi.textContent=t==="hikaye"?Mt.gezinme.deftereGit:Mt.gezinme.hikayeyeGit),t==="kilit"?(this.kaydirma.uzunlukAyarla(100),this.kaydirma.kilitle(!0),this.kilitUI.goster(),this.kilitSahne.basariAyarla(0)):t==="hikaye"?(this.hikayeSahne||(this.hikayeSahne=new W0(this.ekran,this.cizer.renderer)),this.kaydirma.kilitle(!1),this.kaydirma.uzunlukAyarla(Mt.kaydirma.hikayeVh),this.kaydirma.sifirla(),this.kaydirma.takipHiziAyarla(6.5),this.hikayeUI.goster(),this.hikayeUI.guncelle(0)):(this.defterSahne||(this.defterSahne=new tx(this.ekran,this.cizer.renderer),this.defterSahne.kartDegisti=n=>{this.defterUI.detayGoster(n),this.kaydirma.kilitle(n!==null)},this.defterSahne.kalemSesi=()=>this.ses.kalem()),this.kaydirma.kilitle(!1),this.kaydirma.uzunlukAyarla(Mt.kaydirma.defterEkVh+An.length*Mt.kaydirma.defterAniBasinaVh),this.kaydirma.sifirla(),this.kaydirma.takipHiziAyarla(8),this.defterUI.goster()),this.sonKayitP=-1,t!=="kilit"){const n=e?null:sessionStorage.getItem(`${ia}-p-${t}`),s=n===null?0:Math.min(.995,Math.max(0,Number(n)));s>.001&&(window.requestAnimationFrame(()=>{const a=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo(0,a*s),this.kaydirma.anindaOturt()}),window.setTimeout(()=>{const a=document.documentElement.scrollHeight-window.innerHeight;window.scrollY<1&&a>0&&(window.scrollTo(0,a*s),this.kaydirma.anindaOturt())},120)),this.sonKayitP=s}e||this.kaydirma.anindaOturt()}basaDon(){this.gecis.classList.add("kapali"),window.setTimeout(()=>{window.scrollTo(0,0),this.kaydirma.anindaOturt(),this.sonKayitP=0,window.setTimeout(()=>this.gecis.classList.remove("kapali"),80)},500)}gecisYap(t){this.gecis.classList.add("kapali"),window.setTimeout(()=>{this.asamaKur(t,!0),window.setTimeout(()=>this.gecis.classList.remove("kapali"),60)},620)}boyutlandir(){this.cizer.boyutla(),this.kilitSahne.boyutlandir(),this.hikayeSahne?.boyutlandir(),this.defterSahne?.boyutlandir()}konumuKaydet(t){this.asama==="kilit"||this.kaydirma.kilitliMi||Math.abs(t-this.sonKayitP)<.004||(this.sonKayitP=t,sessionStorage.setItem(`${ia}-p-${this.asama}`,t.toFixed(4)))}testKare(t,e,n=4){if(this.zaman=n,t!==this.asama&&this.asamaKur(t,!1),t==="kilit")this.kilitSahne.guncelle(.016,n),this.cizer.ciz(this.kilitSahne.sahne,this.kilitSahne.kamera);else if(t==="hikaye"&&this.hikayeSahne)this.hikayeSahne.guncelle(e,n),this.hikayeUI.guncelle(e),this.cizer.ciz(this.hikayeSahne.sahne,this.hikayeSahne.yonetmen.kamera);else if(t==="defter"&&this.defterSahne){this.defterSahne.guncelle(e,.016,n);const s=this.defterSahne.aktifSira(e);this.defterUI.guncelle(e,s,An[s]?.yilYazisi??"",this.defterSahne.kapanisSonrasi(e)),this.cizer.ciz(this.defterSahne.sahne,this.defterSahne.kamera)}}birak(){this.ses.durdur(),this.kilitSahne.birak(),this.hikayeSahne?.birak(),this.defterSahne?.birak(),w0(),this.cizer.renderer.dispose()}}function cx(){try{const i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}const xl=document.getElementById("sahne");if(cx()){const i=new lx(xl);window.addEventListener("pagehide",()=>i.birak(),{once:!0})}else{xl.remove();const i=document.createElement("div");i.className="yedek",i.innerHTML=`
    <p class="yedek-ust">${Mt.acilis.ustBaslik}</p>
    <h1>${Mt.acilis.baslik}</h1>
    ${Mt.hikaye.finalYazilari.map(t=>`<p>${t}</p>`).join("")}
    <p class="yedek-not">Bu cihaz 3B çizimi desteklemiyor. Tarayıcını güncellersen defter tüm derinliğiyle açılır.</p>
  `,document.getElementById("ui-katmani").appendChild(i)}
