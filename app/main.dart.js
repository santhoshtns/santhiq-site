(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.Nq(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Ck(b)
return new s(c,this)}:function(){if(s===null)s=A.Ck(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Ck(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
Cy(a,b,c,d){return{i:a,p:b,e:c,x:d}},
yH(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Cu==null){A.Mh()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.l(A.j0("Return interceptor for "+A.j(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.uP
if(o==null)o=$.uP=A.yG(n)
p=q[o]}if(p!=null)return p
p=A.Mu(a)
if(p!=null)return p
if(typeof a=="function")return B.fs
s=Object.getPrototypeOf(a)
if(s==null)return B.dV
if(s===Object.prototype)return B.dV
if(typeof q=="function"){o=$.uP
if(o==null)o=$.uP=A.yG(n)
Object.defineProperty(q,o,{value:B.cj,enumerable:false,writable:true,configurable:true})
return B.cj}return B.cj},
Dt(a,b){if(a<0||a>4294967295)throw A.l(A.aK(a,0,4294967295,"length",null))
return J.Il(new Array(a),b)},
Du(a,b){if(a<0)throw A.l(A.b0("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
Ds(a,b){if(a<0)throw A.l(A.b0("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
Il(a,b){var s=A.c(a,b.i("u<0>"))
s.$flags=1
return s},
Im(a,b){var s=t.hO
return J.Bq(s.a(a),s.a(b))},
Dv(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Io(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Dv(r))break;++b}return b},
Ip(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.Dv(q))break}return b},
eP(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ij.prototype
return J.kM.prototype}if(typeof a=="string")return J.dF.prototype
if(a==null)return J.fY.prototype
if(typeof a=="boolean")return J.kL.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dG.prototype
if(typeof a=="symbol")return J.h_.prototype
if(typeof a=="bigint")return J.fZ.prototype
return a}if(a instanceof A.a_)return a
return J.yH(a)},
ar(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dG.prototype
if(typeof a=="symbol")return J.h_.prototype
if(typeof a=="bigint")return J.fZ.prototype
return a}if(a instanceof A.a_)return a
return J.yH(a)},
b1(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dG.prototype
if(typeof a=="symbol")return J.h_.prototype
if(typeof a=="bigint")return J.fZ.prototype
return a}if(a instanceof A.a_)return a
return J.yH(a)},
Ma(a){if(typeof a=="number")return J.fb.prototype
if(a==null)return a
if(!(a instanceof A.a_))return J.eG.prototype
return a},
Fn(a){if(typeof a=="number")return J.fb.prototype
if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.a_))return J.eG.prototype
return a},
Co(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.a_))return J.eG.prototype
return a},
fF(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dG.prototype
if(typeof a=="symbol")return J.h_.prototype
if(typeof a=="bigint")return J.fZ.prototype
return a}if(a instanceof A.a_)return a
return J.yH(a)},
HE(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Fn(a).C(a,b)},
a2(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eP(a).J(a,b)},
HF(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.Ma(a).a8(a,b)},
as(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Mp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ar(a).h(a,b)},
CX(a,b,c){return J.b1(a).j(a,b,c)},
bU(a,b){return J.b1(a).m(a,b)},
CY(a,b){return J.Co(a).aM(a,b)},
HG(a,b,c){return J.Co(a).d3(a,b,c)},
CZ(a,b){return J.b1(a).N(a,b)},
jM(a){return J.fF(a).fZ(a)},
jN(a,b,c){return J.fF(a).dK(a,b,c)},
mN(a,b,c){return J.fF(a).eK(a,b,c)},
HH(a){return J.fF(a).h_(a)},
bq(a,b,c){return J.fF(a).cC(a,b,c)},
dg(a,b){return J.b1(a).dM(a,b)},
Bq(a,b){return J.Fn(a).l(a,b)},
D_(a,b){return J.ar(a).v(a,b)},
jO(a,b){return J.b1(a).af(a,b)},
HI(a,b,c,d){return J.b1(a).aO(a,b,c,d)},
HJ(a,b,c,d){return J.b1(a).a5(a,b,c,d)},
Br(a){return J.b1(a).ga0(a)},
bZ(a){return J.eP(a).gP(a)},
jP(a){return J.ar(a).ga4(a)},
D0(a){return J.ar(a).gan(a)},
S(a){return J.b1(a).gB(a)},
Bs(a){return J.b1(a).gau(a)},
aD(a){return J.ar(a).gq(a)},
HK(a){return J.eP(a).gaz(a)},
HL(a,b,c){return J.b1(a).dm(a,b,c)},
D1(a,b,c){return J.b1(a).cM(a,b,c)},
HM(a,b,c){return J.Co(a).hk(a,b,c)},
HN(a,b){return J.ar(a).sq(a,b)},
D2(a,b,c){return J.fF(a).aZ(a,b,c)},
HO(a,b,c,d,e){return J.b1(a).aV(a,b,c,d,e)},
hP(a,b){return J.b1(a).b8(a,b)},
mO(a,b){return J.b1(a).E(a,b)},
Bt(a,b,c){return J.b1(a).aL(a,b,c)},
mP(a,b){return J.b1(a).bf(a,b)},
HP(a){return J.b1(a).e4(a)},
hQ(a){return J.eP(a).k(a)},
mQ(a,b){return J.b1(a).c_(a,b)},
kJ:function kJ(){},
kL:function kL(){},
fY:function fY(){},
ik:function ik(){},
eo:function eo(){},
lb:function lb(){},
eG:function eG(){},
dG:function dG(){},
fZ:function fZ(){},
h_:function h_(){},
u:function u(a){this.$ti=a},
kK:function kK(){},
nW:function nW(a){this.$ti=a},
eW:function eW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fb:function fb(){},
ij:function ij(){},
kM:function kM(){},
dF:function dF(){}},A={BI:function BI(){},
f_(a,b,c){if(t.he.b(a))return new A.j9(a,b.i("@<0>").a3(c).i("j9<1,2>"))
return new A.eZ(a,b.i("@<0>").a3(c).i("eZ<1,2>"))},
Dz(a){return new A.fg("Field '"+a+"' has been assigned during initialization.")},
DA(a){return new A.fg("Field '"+a+"' has not been initialized.")},
Ir(a){return new A.fg("Field '"+a+"' has already been initialized.")},
Fs(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
dX(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
u6(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cM(a,b,c){return a},
Cv(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
bF(a,b,c,d){A.ba(b,"start")
if(c!=null){A.ba(c,"end")
if(b>c)A.h(A.aK(b,0,c,"start",null))}return new A.fr(a,b,c,d.i("fr<0>"))},
DF(a,b,c,d){if(t.he.b(a))return new A.i9(a,b,c.i("@<0>").a3(d).i("i9<1,2>"))
return new A.c2(a,b,c.i("@<0>").a3(d).i("c2<1,2>"))},
E0(a,b,c){var s="takeCount"
A.ef(b,s,t.S)
A.ba(b,s)
if(t.he.b(a))return new A.ia(a,b,c.i("ia<0>"))
return new A.ft(a,b,c.i("ft<0>"))},
DX(a,b,c){var s="count"
if(t.he.b(a)){A.ef(b,s,t.S)
A.ba(b,s)
return new A.fU(a,b,c.i("fU<0>"))}A.ef(b,s,t.S)
A.ba(b,s)
return new A.dR(a,b,c.i("dR<0>"))},
bO(a,b,c){return new A.f3(a,b,c.i("f3<0>"))},
ao(){return new A.dT("No element")},
Dr(){return new A.dT("Too many elements")},
Dq(){return new A.dT("Too few elements")},
lt(a,b,c,d,e){if(c-b<=32)A.IV(a,b,c,d,e)
else A.IU(a,b,c,d,e)},
IV(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ar(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.b7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
IU(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.u(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.u(a4+a5,2),f=g-j,e=g+j,d=J.ar(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b7()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a2(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.h(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.j(a3,o,d.h(a3,r))
d.j(a3,r,n)}++r}else for(;;){m=a6.$2(d.h(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.j(a3,o,d.h(a3,r))
k=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,n)
q=l
r=k
break}else{d.j(a3,o,d.h(a3,q))
d.j(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.j(a3,o,d.h(a3,r))
d.j(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,o,d.h(a3,r))
k=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,n)
r=k}else{d.j(a3,o,d.h(a3,q))
d.j(a3,q,n)}q=l
break}}a2=r-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=q+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
A.lt(a3,a4,r-2,a6,a7)
A.lt(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a2(a6.$2(d.h(a3,r),b),0))++r
while(J.a2(a6.$2(d.h(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.h(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.j(a3,o,d.h(a3,r))
d.j(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.h(a3,q),b)<0){d.j(a3,o,d.h(a3,r))
k=r+1
d.j(a3,r,d.h(a3,q))
d.j(a3,q,n)
r=k}else{d.j(a3,o,d.h(a3,q))
d.j(a3,q,n)}q=l
break}}A.lt(a3,r,q,a6,a7)}else A.lt(a3,r,q,a6,a7)},
j8:function j8(a){this.a=0
this.b=a},
hr:function hr(a){this.a=0
this.b=a},
eH:function eH(){},
hY:function hY(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
j9:function j9(a,b){this.a=a
this.$ti=b},
j7:function j7(){},
uw:function uw(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b){this.a=a
this.$ti=b},
ne:function ne(a,b){this.a=a
this.b=b},
nd:function nd(a){this.a=a},
fg:function fg(a){this.a=a},
k9:function k9(a){this.a=a},
tP:function tP(){},
U:function U(){},
a5:function a5(){},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.$ti=c},
iv:function iv(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aj:function aj(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
f4:function f4(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ft:function ft(a,b,c){this.a=a
this.b=b
this.$ti=c},
ia:function ia(a,b,c){this.a=a
this.b=b
this.$ti=c},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dR:function dR(a,b,c){this.a=a
this.b=b
this.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
iV:function iV(a,b,c){this.a=a
this.b=b
this.$ti=c},
ib:function ib(a){this.$ti=a},
ic:function ic(a){this.$ti=a},
j4:function j4(a,b){this.a=a
this.$ti=b},
j5:function j5(a,b){this.a=a
this.$ti=b},
p9:function p9(a,b){this.a=a
this.$ti=b},
fi:function fi(a,b){this.a=a
this.b=null
this.$ti=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.$ti=c},
f3:function f3(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aU:function aU(){},
cq:function cq(){},
hm:function hm(){},
aP:function aP(a,b){this.a=a
this.$ti=b},
jz:function jz(){},
a6(a,b,c){var s,r,q,p,o,n,m,l=A.d_(a.gag(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.m)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.d_(a.gS(),!0,c)
m=new A.aZ(q,n,b.i("@<0>").a3(c).i("aZ<1,2>"))
m.$keys=l
return m}return new A.hZ(A.Iu(a,b,c),b.i("@<0>").a3(c).i("hZ<1,2>"))},
Dc(){throw A.l(A.az("Cannot modify unmodifiable Map"))},
Dd(){throw A.l(A.az("Cannot modify constant Set"))},
G9(a){var s=A.G8(a)
if(s!=null)return s
return"minified:"+a},
Mp(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
j(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.hQ(a)
return s},
c5(a){var s,r=$.DI
if(r==null)r=$.DI=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
le(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.a(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.l(A.aK(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
ld(a){var s,r,q,p
if(a instanceof A.a_)return A.bS(A.aT(a),null)
s=J.eP(a)
if(s===B.fp||s===B.ft||t.qF.b(a)){r=B.cB(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bS(A.aT(a),null)},
DL(a){var s,r,q
if(a==null||typeof a=="number"||A.ea(a))return J.hQ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bL)return a.k(0)
if(a instanceof A.bj)return a.fU(!0)
s=$.Hv()
for(r=0;r<1;++r){q=s[r].mT(a)
if(q!=null)return q}return"Instance of '"+A.ld(a)+"'"},
DH(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
IJ(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r){q=a[r]
if(!A.cL(q))throw A.l(A.eO(q))
if(q<=65535)B.a.m(p,q)
else if(q<=1114111){B.a.m(p,55296+(B.d.am(q-65536,10)&1023))
B.a.m(p,56320+(q&1023))}else throw A.l(A.eO(q))}return A.DH(p)},
DM(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.cL(q))throw A.l(A.eO(q))
if(q<0)throw A.l(A.eO(q))
if(q>65535)return A.IJ(a)}return A.DH(a)},
IK(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aW(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.am(s,10)|55296)>>>0,s&1023|56320)}}throw A.l(A.aK(a,0,1114111,null,null))},
DO(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.d.T(h,1000)
g+=B.d.u(h-s,1000)
r=i?Date.UTC(a,p,c,d,e,f,g):new Date(a,p,c,d,e,f,g).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
c4(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
b_(a){return a.c?A.c4(a).getUTCFullYear()+0:A.c4(a).getFullYear()+0},
b4(a){return a.c?A.c4(a).getUTCMonth()+1:A.c4(a).getMonth()+1},
av(a){return a.c?A.c4(a).getUTCDate()+0:A.c4(a).getDate()+0},
BQ(a){return a.c?A.c4(a).getUTCHours()+0:A.c4(a).getHours()+0},
BR(a){return a.c?A.c4(a).getUTCMinutes()+0:A.c4(a).getMinutes()+0},
DK(a){return a.c?A.c4(a).getUTCSeconds()+0:A.c4(a).getSeconds()+0},
DJ(a){return a.c?A.c4(a).getUTCMilliseconds()+0:A.c4(a).getMilliseconds()+0},
II(a){var s=a.$thrownJsError
if(s==null)return null
return A.eQ(s)},
DN(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.b2(a,s)
a.$thrownJsError=s
s.stack=b.k(0)}},
Ct(a){throw A.l(A.eO(a))},
a(a,b){if(a==null)J.aD(a)
throw A.l(A.xV(a,b))},
xV(a,b){var s,r="index"
if(!A.cL(b))return new A.cc(!0,b,r,null)
s=J.aD(a)
if(b<0||b>=s)return A.nO(b,s,a,r)
return A.ts(b,r)},
M_(a,b,c){if(a>c)return A.aK(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aK(b,a,c,"end",null)
return new A.cc(!0,b,"end",null)},
eO(a){return new A.cc(!0,a,null,null)},
l(a){return A.b2(a,new Error())},
b2(a,b){var s
if(a==null)a=new A.e_()
b.dartException=a
s=A.Ns
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Ns(){return J.hQ(this.dartException)},
h(a,b){throw A.b2(a,b==null?new Error():b)},
E(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.Ka(a,b,c),s)},
Ka(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.j2("'"+s+"': Cannot "+o+" "+l+k+n)},
m(a){throw A.l(A.aI(a))},
e0(a){var s,r,q,p,o,n
a=A.hI(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ub(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
uc(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
E3(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
BJ(a,b){var s=b==null,r=s?null:b.method
return new A.kN(a,r,s?null:b.receiver)},
aw(a){var s
if(a==null)return new A.pb(a)
if(a instanceof A.id){s=a.a
return A.eS(a,s==null?A.de(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eS(a,a.dartException)
return A.L4(a)},
eS(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
L4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.am(r,16)&8191)===10)switch(q){case 438:return A.eS(a,A.BJ(A.j(s)+" (Error "+q+")",null))
case 445:case 5007:A.j(s)
return A.eS(a,new A.iI())}}if(a instanceof TypeError){p=$.GC()
o=$.GD()
n=$.GE()
m=$.GF()
l=$.GI()
k=$.GJ()
j=$.GH()
$.GG()
i=$.GL()
h=$.GK()
g=p.bw(s)
if(g!=null)return A.eS(a,A.BJ(A.d(s),g))
else{g=o.bw(s)
if(g!=null){g.method="call"
return A.eS(a,A.BJ(A.d(s),g))}else if(n.bw(s)!=null||m.bw(s)!=null||l.bw(s)!=null||k.bw(s)!=null||j.bw(s)!=null||m.bw(s)!=null||i.bw(s)!=null||h.bw(s)!=null){A.d(s)
return A.eS(a,new A.iI())}}return A.eS(a,new A.lG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.iX()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eS(a,new A.cc(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.iX()
return a},
eQ(a){var s
if(a instanceof A.id)return a.b
if(a==null)return new A.jn(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jn(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
CD(a){if(a==null)return J.bZ(a)
if(typeof a=="object")return A.c5(a)
return J.bZ(a)},
LN(a){if(typeof a=="number")return B.O.gP(a)
if(a instanceof A.mo)return A.c5(a)
if(a instanceof A.bj)return a.gP(a)
return A.CD(a)},
Fm(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
M5(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
Kt(a,b,c,d,e,f){t.BO.a(a)
switch(A.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.l(new A.uA("Unsupported number of arguments for wrapped closure"))},
fE(a,b){var s=a.$identity
if(!!s)return s
s=A.LP(a,b)
a.$identity=s
return s},
LP(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Kt)},
I3(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ly().constructor.prototype):Object.create(new A.fI(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Da(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.I_(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Da(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
I_(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.l("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.HT)}throw A.l("Error in functionType of tearoff")},
I0(a,b,c,d){var s=A.D7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Da(a,b,c,d){if(c)return A.I2(a,b,d)
return A.I0(b.length,d,a,b)},
I1(a,b,c,d){var s=A.D7,r=A.HU
switch(b?-1:a){case 0:throw A.l(new A.ln("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
I2(a,b,c){var s,r
if($.D5==null)$.D5=A.D4("interceptor")
if($.D6==null)$.D6=A.D4("receiver")
s=b.length
r=A.I1(s,c,a,b)
return r},
Ck(a){return A.I3(a)},
HT(a,b){return A.js(v.typeUniverse,A.aT(a.a),b)},
D7(a){return a.a},
HU(a){return a.b},
D4(a){var s,r,q,p=new A.fI("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.l(A.b0("Field name "+a+" not found.",null))},
yG(a){return v.getIsolateTag(a)},
G4(){return v.G},
Px(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Mu(a){var s,r,q,p,o,n=A.d($.Fo.$1(a)),m=$.xX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.yW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.n($.Fa.$2(a,n))
if(q!=null){m=$.xX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.yW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.z9(s)
$.xX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.yW[n]=s
return s}if(p==="-"){o=A.z9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.FW(a,s)
if(p==="*")throw A.l(A.j0(n))
if(v.leafTags[n]===true){o=A.z9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.FW(a,s)},
FW(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Cy(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
z9(a){return J.Cy(a,!1,null,!!a.$ic1)},
Mv(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.z9(s)
else return J.Cy(s,c,null,null)},
Mh(){if(!0===$.Cu)return
$.Cu=!0
A.Mi()},
Mi(){var s,r,q,p,o,n,m,l
$.xX=Object.create(null)
$.yW=Object.create(null)
A.Mg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.FY.$1(o)
if(n!=null){m=A.Mv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Mg(){var s,r,q,p,o,n,m=B.eq()
m=A.hA(B.er,A.hA(B.es,A.hA(B.cC,A.hA(B.cC,A.hA(B.et,A.hA(B.eu,A.hA(B.ev(B.cB),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Fo=new A.yT(p)
$.Fa=new A.yU(o)
$.FY=new A.yV(n)},
hA(a,b){return a(b)||b},
Jx(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.a2(r,b[s]))return!1}return!0},
LV(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
BH(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.l(A.y("Illegal RegExp pattern ("+String(o)+")",a,null))},
Nh(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Cl(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Nl(a,b,c,d){var s=b.fB(a,d)
if(s==null)return a
return A.CF(a,s.b.index,s.gca(),c)},
hI(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
a8(a,b,c){var s
if(typeof b=="string")return A.Nj(a,b,c)
if(b instanceof A.en){s=b.gfI()
s.lastIndex=0
return a.replace(s,A.Cl(c))}return A.Ni(a,b,c)},
Ni(a,b,c){var s,r,q,p
for(s=J.CY(b,a),s=s.gB(s),r=0,q="";s.n();){p=s.gt()
q=q+a.substring(r,p.gds())+c
r=p.gca()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Nj(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hI(b),"g"),A.Cl(c))},
F2(a){return a},
hK(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.aM(0,a),s=new A.fv(s.a,s.b,s.c),r=t.ez,q=0,p="";s.n();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.j(A.F2(B.b.X(a,q,m)))+A.j(c.$1(o))
q=m+n[0].length}s=p+A.j(A.F2(B.b.ac(a,q)))
return s.charCodeAt(0)==0?s:s},
G5(a,b,c,d){var s,r,q,p
if(typeof b=="string"){s=a.indexOf(b,d)
if(s<0)return a
return A.CF(a,s,s+b.length,c)}if(b instanceof A.en)return d===0?a.replace(b.b,A.Cl(c)):A.Nl(a,b,c,d)
r=J.HG(b,a,d)
q=r.gB(r)
if(!q.n())return a
p=q.gt()
return B.b.hz(a,p.gds(),p.gca(),c)},
Nk(a,b,c,d){var s,r,q=b.d3(0,a,d),p=new A.fv(q.a,q.b,q.c)
if(!p.n())return a
s=p.d
if(s==null)s=t.ez.a(s)
r=A.j(c.$1(s))
return B.b.hz(a,s.b.index,s.gca(),r)},
CF(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
r:function r(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
hZ:function hZ(a,b){this.a=a
this.$ti=b},
fL:function fL(){},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b){this.a=a
this.$ti=b},
e4:function e4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cj:function cj(a,b){this.a=a
this.$ti=b},
fM:function fM(){},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b){this.a=a
this.$ti=b},
kG:function kG(){},
f7:function f7(a,b){this.a=a
this.$ti=b},
iR:function iR(){},
ub:function ub(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iI:function iI(){},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(a){this.a=a},
pb:function pb(a){this.a=a},
id:function id(a,b){this.a=a
this.b=b},
jn:function jn(a){this.a=a
this.b=null},
bL:function bL(){},
k7:function k7(){},
k8:function k8(){},
lB:function lB(){},
ly:function ly(){},
fI:function fI(a,b){this.a=a
this.b=b},
ln:function ln(a){this.a=a},
cx:function cx(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nY:function nY(a){this.a=a},
oZ:function oZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
au:function au(a,b){this.a=a
this.$ti=b},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
N:function N(a,b){this.a=a
this.$ti=b},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ac:function ac(a,b){this.a=a
this.$ti=b},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fc:function fc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
yT:function yT(a){this.a=a},
yU:function yU(a){this.a=a},
yV:function yV(a){this.a=a},
bj:function bj(){},
e6:function e6(){},
fA:function fA(){},
dc:function dc(){},
en:function en(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hs:function hs(a){this.b=a},
lK:function lK(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hk:function hk(a,b){this.a=a
this.c=b},
ml:function ml(a,b,c){this.a=a
this.b=b
this.c=c},
mm:function mm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Nq(a){throw A.b2(A.Dz(a),new Error())},
mK(){throw A.b2(A.DA(""),new Error())},
G6(){throw A.b2(A.Ir(""),new Error())},
hL(){throw A.b2(A.Dz(""),new Error())},
ux(){var s=new A.lS("")
return s.b=s},
uy(a){var s=new A.lS(a)
return s.b=s},
lS:function lS(a){this.a=a
this.b=null},
jA(a,b,c){},
aH(a){var s,r,q
if(t.rw.b(a))return a
s=J.ar(a)
r=A.it(s.gq(a),null,!1,t.z)
for(q=0;q<s.gq(a);++q)B.a.j(r,q,s.h(a,q))
return r},
Iw(a){return new DataView(new ArrayBuffer(a))},
Ix(a,b,c){A.jA(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
Iy(a){return new Int8Array(a)},
Iz(a){return new Uint16Array(a)},
IA(a){return new Uint32Array(a)},
IB(a){return new Uint32Array(A.aH(a))},
IC(a,b,c){A.jA(a,b,c)
if(c==null)c=B.d.u(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
p8(a){return new Uint8Array(a)},
ID(a){return new Uint8Array(A.aH(a))},
iE(a,b,c){A.jA(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
e9(a,b,c){if(a>>>0!==a||a>=c)throw A.l(A.xV(b,a))},
eL(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.l(A.M_(a,b,c))
if(b==null)return c
return b},
eq:function eq(){},
h7:function h7(){},
iA:function iA(){},
mp:function mp(a){this.a=a},
iy:function iy(){},
bw:function bw(){},
er:function er(){},
c3:function c3(){},
kX:function kX(){},
kY:function kY(){},
kZ:function kZ(){},
iz:function iz(){},
l_:function l_(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
fh:function fh(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
jf:function jf(){},
BS(a,b){var s=b.c
return s==null?b.c=A.jq(a,"b9",[b.x]):s},
DT(a){var s=a.w
if(s===6||s===7)return A.DT(a.x)
return s===11||s===12},
IQ(a){return a.as},
mG(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a0(a){return A.v_(v.typeUniverse,a,!1)},
Mk(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.eM(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
eM(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eM(a1,s,a3,a4)
if(r===s)return a2
return A.Ep(a1,r,!0)
case 7:s=a2.x
r=A.eM(a1,s,a3,a4)
if(r===s)return a2
return A.Eo(a1,r,!0)
case 8:q=a2.y
p=A.hz(a1,q,a3,a4)
if(p===q)return a2
return A.jq(a1,a2.x,p)
case 9:o=a2.x
n=A.eM(a1,o,a3,a4)
m=a2.y
l=A.hz(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.C4(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hz(a1,j,a3,a4)
if(i===j)return a2
return A.Eq(a1,k,i)
case 11:h=a2.x
g=A.eM(a1,h,a3,a4)
f=a2.y
e=A.L1(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.En(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hz(a1,d,a3,a4)
o=a2.x
n=A.eM(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.C5(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.l(A.jT("Attempted to substitute unexpected RTI kind "+a0))}},
hz(a,b,c,d){var s,r,q,p,o=b.length,n=A.v7(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eM(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
L2(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.v7(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eM(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
L1(a,b,c,d){var s,r=b.a,q=A.hz(a,r,c,d),p=b.b,o=A.hz(a,p,c,d),n=b.c,m=A.L2(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.m6()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
xE(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Mb(s)
return a.$S()}return null},
Mj(a,b){var s
if(A.DT(b))if(a instanceof A.bL){s=A.xE(a)
if(s!=null)return s}return A.aT(a)},
aT(a){if(a instanceof A.a_)return A.p(a)
if(Array.isArray(a))return A.L(a)
return A.Cc(J.eP(a))},
L(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
p(a){var s=a.$ti
return s!=null?s:A.Cc(a)},
Cc(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Kp(a,s)},
Kp(a,b){var s=a instanceof A.bL?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.JI(v.typeUniverse,s.name)
b.$ccache=r
return r},
Mb(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.v_(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
bd(a){return A.df(A.p(a))},
Cq(a){var s=A.xE(a)
return A.df(s==null?A.aT(a):s)},
Ce(a){var s
if(a instanceof A.bj)return A.M3(a.$r,a.dD())
s=a instanceof A.bL?A.xE(a):null
if(s!=null)return s
if(t.sg.b(a))return J.HK(a).a
if(Array.isArray(a))return A.L(a)
return A.aT(a)},
df(a){var s=a.r
return s==null?a.r=new A.mo(a):s},
M3(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.a(q,0)
s=A.js(v.typeUniverse,A.Ce(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.Es(v.typeUniverse,s,A.Ce(q[r]))}return A.js(v.typeUniverse,s,a)},
bA(a){return A.df(A.v_(v.typeUniverse,a,!1))},
Ko(a){var s=this
s.b=A.L_(s)
return s.b(a)},
L_(a){var s,r,q,p,o
if(a===t.K)return A.Kz
if(A.fG(a))return A.KD
s=a.w
if(s===6)return A.Kk
if(s===1)return A.ES
if(s===7)return A.Ku
r=A.KZ(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fG)){a.f="$i"+q
if(q==="A")return A.Kx
if(a===t.m)return A.Kw
return A.KC}}else if(s===10){p=A.LV(a.x,a.y)
o=p==null?A.ES:p
return o==null?A.de(o):o}return A.Ki},
KZ(a){if(a.w===8){if(a===t.S)return A.cL
if(a===t.pR||a===t.r)return A.Ky
if(a===t.N)return A.KB
if(a===t.y)return A.ea}return null},
Kn(a){var s=this,r=A.Kh
if(A.fG(s))r=A.K4
else if(s===t.K)r=A.de
else if(A.hH(s)){r=A.Kj
if(s===t.lo)r=A.aG
else if(s===t.T)r=A.n
else if(s===t.k7)r=A.hx
else if(s===t.s7)r=A.Cb
else if(s===t.u6)r=A.K3
else if(s===t.uh)r=A.aS}else if(s===t.S)r=A.R
else if(s===t.N)r=A.d
else if(s===t.y)r=A.cK
else if(s===t.r)r=A.v9
else if(s===t.pR)r=A.Ca
else if(s===t.m)r=A.z
s.a=r
return s.a(a)},
Ki(a){var s=this
if(a==null)return A.hH(s)
return A.Fv(v.typeUniverse,A.Mj(a,s),s)},
Kk(a){if(a==null)return!0
return this.x.b(a)},
KC(a){var s,r=this
if(a==null)return A.hH(r)
s=r.f
if(a instanceof A.a_)return!!a[s]
return!!J.eP(a)[s]},
Kx(a){var s,r=this
if(a==null)return A.hH(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a_)return!!a[s]
return!!J.eP(a)[s]},
Kw(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a_)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ER(a){if(typeof a=="object"){if(a instanceof A.a_)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Kh(a){var s=this
if(a==null){if(A.hH(s))return a}else if(s.b(a))return a
throw A.b2(A.EK(a,s),new Error())},
Kj(a){var s=this
if(a==null||s.b(a))return a
throw A.b2(A.EK(a,s),new Error())},
EK(a,b){return new A.hv("TypeError: "+A.Ei(a,A.bS(b,null)))},
Fi(a,b,c,d){if(A.Fv(v.typeUniverse,a,b))return a
throw A.b2(A.JA("The type argument '"+A.bS(a,null)+"' is not a subtype of the type variable bound '"+A.bS(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
Ei(a,b){return A.ks(a)+": type '"+A.bS(A.Ce(a),null)+"' is not a subtype of type '"+b+"'"},
JA(a){return new A.hv("TypeError: "+a)},
cr(a,b){return new A.hv("TypeError: "+A.Ei(a,b))},
Ku(a){var s=this
return s.x.b(a)||A.BS(v.typeUniverse,s).b(a)},
Kz(a){return a!=null},
de(a){if(a!=null)return a
throw A.b2(A.cr(a,"Object"),new Error())},
KD(a){return!0},
K4(a){return a},
ES(a){return!1},
ea(a){return!0===a||!1===a},
cK(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b2(A.cr(a,"bool"),new Error())},
hx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b2(A.cr(a,"bool?"),new Error())},
Ca(a){if(typeof a=="number")return a
throw A.b2(A.cr(a,"double"),new Error())},
K3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b2(A.cr(a,"double?"),new Error())},
cL(a){return typeof a=="number"&&Math.floor(a)===a},
R(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b2(A.cr(a,"int"),new Error())},
aG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b2(A.cr(a,"int?"),new Error())},
Ky(a){return typeof a=="number"},
v9(a){if(typeof a=="number")return a
throw A.b2(A.cr(a,"num"),new Error())},
Cb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b2(A.cr(a,"num?"),new Error())},
KB(a){return typeof a=="string"},
d(a){if(typeof a=="string")return a
throw A.b2(A.cr(a,"String"),new Error())},
n(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b2(A.cr(a,"String?"),new Error())},
z(a){if(A.ER(a))return a
throw A.b2(A.cr(a,"JSObject"),new Error())},
aS(a){if(a==null)return a
if(A.ER(a))return a
throw A.b2(A.cr(a,"JSObject?"),new Error())},
F_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bS(a[q],b)
return s},
KV(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.F_(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bS(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
EN(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.m(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bS(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bS(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bS(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bS(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bS(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bS(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bS(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bS(a.x,b)+">"
if(l===8){p=A.L3(a.x)
o=a.y
return o.length>0?p+("<"+A.F_(o,b)+">"):p}if(l===10)return A.KV(a,b)
if(l===11)return A.EN(a,b,null)
if(l===12)return A.EN(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
L3(a){var s=A.G8(a)
if(s!=null)return s
return"minified:"+a},
JJ(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
JI(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.v_(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jr(a,5,"#")
q=A.v7(s)
for(p=0;p<s;++p)q[p]=r
o=A.jq(a,b,q)
n[b]=o
return o}else return m},
JH(a,b){return A.EC(a.tR,b)},
JG(a,b){return A.EC(a.eT,b)},
v_(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Er(a,null,b,!1)
r.set(b,s)
return s},
js(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Er(a,b,c,!0)
q.set(c,r)
return r},
Es(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.C4(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Er(a,b,c,d){return A.Jv(A.Jp(a,b,c,d))},
eJ(a,b){b.a=A.Kn
b.b=A.Ko
return b},
jr(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cD(null,null)
s.w=b
s.as=c
r=A.eJ(a,s)
a.eC.set(c,r)
return r},
Ep(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.JE(a,b,r,c)
a.eC.set(r,s)
return s},
JE(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fG(b))if(!(b===t.aU||b===t.Be))if(s!==6)r=s===7&&A.hH(b.x)
if(r)return b
else if(s===1)return t.aU}q=new A.cD(null,null)
q.w=6
q.x=b
q.as=c
return A.eJ(a,q)},
Eo(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.JC(a,b,r,c)
a.eC.set(r,s)
return s},
JC(a,b,c,d){var s,r
if(d){s=b.w
if(A.fG(b)||b===t.K)return b
else if(s===1)return A.jq(a,"b9",[b])
else if(b===t.aU||b===t.Be)return t.eZ}r=new A.cD(null,null)
r.w=7
r.x=b
r.as=c
return A.eJ(a,r)},
JF(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cD(null,null)
s.w=13
s.x=b
s.as=q
r=A.eJ(a,s)
a.eC.set(q,r)
return r},
jp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
JB(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jq(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cD(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eJ(a,r)
a.eC.set(p,q)
return q},
C4(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cD(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eJ(a,o)
a.eC.set(q,n)
return n},
Eq(a,b,c){var s,r,q="+"+(b+"("+A.jp(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cD(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eJ(a,s)
a.eC.set(q,r)
return r},
En(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jp(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jp(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.JB(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cD(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eJ(a,p)
a.eC.set(r,o)
return o},
C5(a,b,c,d){var s,r=b.as+("<"+A.jp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.JD(a,b,c,r,d)
a.eC.set(r,s)
return s},
JD(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.v7(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eM(a,b,r,0)
m=A.hz(a,c,r,0)
return A.C5(a,n,m,c!==m)}}l=new A.cD(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eJ(a,l)},
Jp(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Jv(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Jr(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Ek(a,r,l,k,!1)
else if(q===46)r=A.Ek(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fz(a.u,a.e,k.pop()))
break
case 94:k.push(A.JF(a.u,k.pop()))
break
case 35:k.push(A.jr(a.u,5,"#"))
break
case 64:k.push(A.jr(a.u,2,"@"))
break
case 126:k.push(A.jr(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Jt(a,k)
break
case 38:A.Js(a,k)
break
case 63:p=a.u
k.push(A.Ep(p,A.fz(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Eo(p,A.fz(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Jq(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.El(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Jw(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.fz(a.u,a.e,m)},
Jr(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Ek(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.JJ(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.IQ(o)+'"')
d.push(A.js(s,o,n))}else d.push(p)
return m},
Jt(a,b){var s,r=a.u,q=A.Ej(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jq(r,p,q))
else{s=A.fz(r,a.e,p)
switch(s.w){case 11:b.push(A.C5(r,s,q,a.n))
break
default:b.push(A.C4(r,s,q))
break}}},
Jq(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Ej(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fz(p,a.e,o)
q=new A.m6()
q.a=s
q.b=n
q.c=m
b.push(A.En(p,r,q))
return
case-4:b.push(A.Eq(p,b.pop(),s))
return
default:throw A.l(A.jT("Unexpected state under `()`: "+A.j(o)))}},
Js(a,b){var s=b.pop()
if(0===s){b.push(A.jr(a.u,1,"0&"))
return}if(1===s){b.push(A.jr(a.u,4,"1&"))
return}throw A.l(A.jT("Unexpected extended operation "+A.j(s)))},
Ej(a,b){var s=b.splice(a.p)
A.El(a.u,a.e,s)
a.p=b.pop()
return s},
fz(a,b,c){if(typeof c=="string")return A.jq(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Ju(a,b,c)}else return c},
El(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fz(a,b,c[s])},
Jw(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fz(a,b,c[s])},
Ju(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.l(A.jT("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.l(A.jT("Bad index "+c+" for "+b.k(0)))},
Fv(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.bl(a,b,null,c,null)
r.set(c,s)}return s},
bl(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fG(d))return!0
s=b.w
if(s===4)return!0
if(A.fG(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.bl(a,c[b.x],c,d,e))return!0
q=d.w
p=t.aU
if(b===p||b===t.Be){if(q===7)return A.bl(a,b,c,d.x,e)
return d===p||d===t.Be||q===6}if(d===t.K){if(s===7)return A.bl(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.bl(a,b.x,c,d,e))return!1
return A.bl(a,A.BS(a,b),c,d,e)}if(s===6)return A.bl(a,p,c,d,e)&&A.bl(a,b.x,c,d,e)
if(q===7){if(A.bl(a,b,c,d.x,e))return!0
return A.bl(a,b,c,A.BS(a,d),e)}if(q===6)return A.bl(a,b,c,p,e)||A.bl(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.BO)return!0
o=s===10
if(o&&d===t.op)return!0
if(q===12){if(b===t.g9)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.bl(a,j,c,i,e)||!A.bl(a,i,e,j,c))return!1}return A.EQ(a,b.x,c,d.x,e)}if(q===11){if(b===t.g9)return!0
if(p)return!1
return A.EQ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Kv(a,b,c,d,e)}if(o&&q===10)return A.KA(a,b,c,d,e)
return!1},
EQ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.bl(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.bl(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.bl(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.bl(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.bl(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Kv(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.js(a,b,r[o])
return A.EE(a,p,null,c,d.y,e)}return A.EE(a,b.y,null,c,d.y,e)},
EE(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.bl(a,b[s],d,e[s],f))return!1
return!0},
KA(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.bl(a,r[s],c,q[s],e))return!1
return!0},
hH(a){var s=a.w,r=!0
if(!(a===t.aU||a===t.Be))if(!A.fG(a))if(s!==6)r=s===7&&A.hH(a.x)
return r},
fG(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
EC(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
v7(a){return a>0?new Array(a):v.typeUniverse.sEA},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
m6:function m6(){this.c=this.b=this.a=null},
mo:function mo(a){this.a=a},
m5:function m5(){},
hv:function hv(a){this.a=a},
J7(){var s,r,q
if(self.scheduleImmediate!=null)return A.Lh()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fE(new A.ul(s),1)).observe(r,{childList:true})
return new A.uk(s,r,q)}else if(self.setImmediate!=null)return A.Li()
return A.Lj()},
J8(a){self.scheduleImmediate(A.fE(new A.um(t.O.a(a)),0))},
J9(a){self.setImmediate(A.fE(new A.un(t.O.a(a)),0))},
Ja(a){A.BW(B.eR,t.O.a(a))},
BW(a,b){var s=B.d.u(a.a,1000)
return A.Jy(s<0?0:s,b)},
E2(a,b){var s=B.d.u(a.a,1000)
return A.Jz(s<0?0:s,b)},
Jy(a,b){var s=new A.jo(!0)
s.is(a,b)
return s},
Jz(a,b){var s=new A.jo(!1)
s.it(a,b)
return s},
J(a){return new A.lL(new A.an($.al,a.i("an<0>")),a.i("lL<0>"))},
I(a,b){a.$2(0,null)
b.b=!0
return b.a},
t(a,b){A.K5(a,b)},
H(a,b){b.cF(a)},
G(a,b){b.eM(A.aw(a),A.eQ(a))},
K5(a,b){var s,r,q=new A.va(b),p=new A.vb(b)
if(a instanceof A.an)a.fT(q,p,t.z)
else{s=t.z
if(a instanceof A.an)a.e3(q,p,s)
else{r=new A.an($.al,t.hR)
r.a=8
r.c=a
r.fT(q,p,s)}}},
K(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.al.hx(new A.vG(s),t.H,t.S,t.z)},
Em(a,b,c){return 0},
mZ(a){var s
if(t.yt.b(a)){s=a.gco()
if(s!=null)return s}return B.aF},
aV(a,b){var s=new A.an($.al,b.i("an<0>"))
s.bn(a)
return s},
Ie(a,b){var s
if(!b.b(null))throw A.l(A.x(null,"computation","The type parameter is not nullable"))
s=new A.an($.al,b.i("an<0>"))
A.E1(a,new A.nJ(null,s,b))
return s},
Kq(a,b){if($.al===B.W)return null
return null},
Kr(a,b){if($.al!==B.W)A.Kq(a,b)
if(b==null)if(t.yt.b(a)){b=a.gco()
if(b==null){A.DN(a,B.aF)
b=B.aF}}else b=B.aF
else if(t.yt.b(a))A.DN(a,b)
return new A.bV(a,b)},
Jm(a,b){var s=new A.an($.al,b.i("an<0>"))
b.a(a)
s.a=8
s.c=a
return s},
uE(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.IW()
b.ed(new A.bV(new A.cc(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.f7.a(b.c)
b.a=b.a&1|4
b.c=n
n.fK(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.d1()
b.dC(o.a)
A.fw(b,p)
return}b.a^=2
A.mu(null,null,b.b,t.O.a(new A.uF(o,b)))},
fw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.w,r=t.f7;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.vw(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fw(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.vw(j.a,j.b)
return}g=$.al
if(g!==h)$.al=h
else g=null
c=c.c
if((c&15)===8)new A.uJ(q,d,n).$0()
else if(o){if((c&1)!==0)new A.uI(q,j).$0()}else if((c&2)!==0)new A.uH(d,q).$0()
if(g!=null)$.al=g
c=q.c
if(c instanceof A.an){p=q.a.$ti
p=p.i("b9<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dF(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.uE(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.dF(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
KW(a,b){var s
if(t.nW.b(a))return b.hx(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.l(A.x(a,"onError",u.w))},
KI(){var s,r
for(s=$.hy;s!=null;s=$.hy){$.jC=null
r=s.b
$.hy=r
if(r==null)$.jB=null
s.a.$0()}},
L0(){$.Cd=!0
try{A.KI()}finally{$.jC=null
$.Cd=!1
if($.hy!=null)$.CN().$1(A.Fc())}},
F1(a){var s=new A.lM(a),r=$.jB
if(r==null){$.hy=$.jB=s
if(!$.Cd)$.CN().$1(A.Fc())}else $.jB=r.b=s},
KY(a){var s,r,q,p=$.hy
if(p==null){A.F1(a)
$.jC=$.jB
return}s=new A.lM(a)
r=$.jC
if(r==null){s.b=p
$.hy=$.jC=s}else{q=r.b
s.b=q
$.jC=r.b=s
if(q==null)$.jB=s}},
O7(a,b){A.cM(a,"stream",t.K)
return new A.mk(b.i("mk<0>"))},
E1(a,b){var s=$.al
if(s===B.W)return A.BW(a,t.O.a(b))
return A.BW(a,t.O.a(s.h0(b)))},
J2(a,b){var s=$.al
if(s===B.W)return A.E2(a,t.uH.a(b))
return A.E2(a,t.uH.a(s.l0(b,t.hz)))},
vw(a,b){A.KY(new A.vx(a,b))},
EY(a,b,c,d,e){var s,r=$.al
if(r===c)return d.$0()
$.al=c
s=r
try{r=d.$0()
return r}finally{$.al=s}},
EZ(a,b,c,d,e,f,g){var s,r=$.al
if(r===c)return d.$1(e)
$.al=c
s=r
try{r=d.$1(e)
return r}finally{$.al=s}},
KX(a,b,c,d,e,f,g,h,i){var s,r=$.al
if(r===c)return d.$2(e,f)
$.al=c
s=r
try{r=d.$2(e,f)
return r}finally{$.al=s}},
mu(a,b,c,d){t.O.a(d)
if(B.W!==c){d=c.h0(d)
d=d}A.F1(d)},
ul:function ul(a){this.a=a},
uk:function uk(a,b,c){this.a=a
this.b=b
this.c=c},
um:function um(a){this.a=a},
un:function un(a){this.a=a},
jo:function jo(a){this.a=a
this.b=null
this.c=0},
uZ:function uZ(a,b){this.a=a
this.b=b},
uY:function uY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lL:function lL(a,b){this.a=a
this.b=!1
this.$ti=b},
va:function va(a){this.a=a},
vb:function vb(a){this.a=a},
vG:function vG(a){this.a=a},
e8:function e8(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
dd:function dd(a,b){this.a=a
this.$ti=b},
bV:function bV(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b,c){this.a=a
this.b=b
this.c=c},
lT:function lT(){},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
e3:function e3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
an:function an(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
uB:function uB(a,b){this.a=a
this.b=b},
uG:function uG(a,b){this.a=a
this.b=b},
uF:function uF(a,b){this.a=a
this.b=b},
uD:function uD(a,b){this.a=a
this.b=b},
uC:function uC(a,b){this.a=a
this.b=b},
uJ:function uJ(a,b,c){this.a=a
this.b=b
this.c=c},
uK:function uK(a,b){this.a=a
this.b=b},
uL:function uL(a){this.a=a},
uI:function uI(a,b){this.a=a
this.b=b},
uH:function uH(a,b){this.a=a
this.b=b},
uM:function uM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uN:function uN(a,b,c){this.a=a
this.b=b
this.c=c},
uO:function uO(a,b){this.a=a
this.b=b},
lM:function lM(a){this.a=a
this.b=null},
mk:function mk(a){this.$ti=a},
jy:function jy(){},
me:function me(){},
uW:function uW(a,b){this.a=a
this.b=b},
uX:function uX(a,b,c){this.a=a
this.b=b
this.c=c},
vx:function vx(a,b){this.a=a
this.b=b},
is(a,b){return new A.cx(a.i("@<0>").a3(b).i("cx<1,2>"))},
T(a,b,c){return b.i("@<0>").a3(c).i("BL<1,2>").a(A.Fm(a,new A.cx(b.i("@<0>").a3(c).i("cx<1,2>"))))},
w(a,b){return new A.cx(a.i("@<0>").a3(b).i("cx<1,2>"))},
BM(a){return new A.db(a.i("db<0>"))},
a4(a){return new A.db(a.i("db<0>"))},
kT(a,b){return b.i("DD<0>").a(A.M5(a,new A.db(b.i("db<0>"))))},
C3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
e5(a,b,c){var s=new A.fy(a,b,c.i("fy<0>"))
s.c=a.e
return s},
aN(a,b){var s=J.S(a)
if(s.n())return s.gt()
return null},
BF(a,b){var s,r
if(t.he.b(a)){if(a.length===0)return null
return B.a.gau(a)}s=J.S(a)
if(!s.n())return null
do r=s.gt()
while(s.n())
return r},
Iu(a,b,c){var s=A.is(b,c)
a.a2(0,new A.p_(s,b,c))
return s},
kS(a,b,c){var s=A.is(b,c)
s.a1(0,a)
return s},
BN(a,b){var s,r,q=A.BM(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r)q.m(0,b.a(a[r]))
return q},
kU(a,b){var s=A.BM(b)
s.a1(0,a)
return s},
Iv(a,b){var s=t.hO
return J.Bq(s.a(a),s.a(b))},
BP(a){var s,r
if(A.Cv(a))return"{...}"
s=new A.bE("")
try{r={}
B.a.m($.c8,a)
s.a+="{"
r.a=!0
a.a2(0,new A.p3(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.a($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Et(){throw A.l(A.az("Cannot change an unmodifiable set"))},
db:function db(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mb:function mb(a){this.a=a
this.c=this.b=null},
fy:function fy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p_:function p_(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function Q(){},
a9:function a9(){},
p2:function p2(a){this.a=a},
p3:function p3(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.$ti=b},
jb:function jb(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jt:function jt(){},
h4:function h4(){},
e2:function e2(a,b){this.a=a
this.$ti=b},
cF:function cF(){},
jm:function jm(){},
mq:function mq(){},
j1:function j1(a,b){this.a=a
this.$ti=b},
hw:function hw(){},
ju:function ju(){},
KR(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aw(r)
q=A.y(String(s),null,null)
throw A.l(q)}q=A.vi(p)
return q},
vi(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.m9(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.vi(a[s])
return a},
K0(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.GU()
else s=new Uint8Array(o)
for(r=J.ar(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
K_(a,b,c,d){var s=a?$.GT():$.GS()
if(s==null)return null
if(0===c&&d===b.length)return A.EB(s,b)
return A.EB(s,b.subarray(c,d))},
EB(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Je(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=J.ar(b),r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){n=s.h(b,p)
o=(o|n)>>>0
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.a(a,l)
q&2&&A.E(f)
k=f.length
if(!(g<k))return A.a(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=i>>>12&63
if(!(l<r))return A.a(a,l)
if(!(m<k))return A.a(f,m)
f[m]=a.charCodeAt(l)
m=g+1
l=i>>>6&63
if(!(l<r))return A.a(a,l)
if(!(g<k))return A.a(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=i&63
if(!(l<r))return A.a(a,l)
if(!(m<k))return A.a(f,m)
f[m]=a.charCodeAt(l)
i=0
h=3}}if(o>=0&&o<=255){if(h<3){m=g+1
j=m+1
if(3-h===1){s=i>>>2&63
if(!(s<r))return A.a(a,s)
q&2&&A.E(f)
q=f.length
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(s)
s=i<<4&63
if(!(s<r))return A.a(a,s)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(s)
g=j+1
if(!(j<q))return A.a(f,j)
f[j]=61
if(!(g<q))return A.a(f,g)
f[g]=61}else{s=i>>>10&63
if(!(s<r))return A.a(a,s)
q&2&&A.E(f)
q=f.length
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(s)
s=i>>>4&63
if(!(s<r))return A.a(a,s)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(s)
g=j+1
s=i<<2&63
if(!(s<r))return A.a(a,s)
if(!(j<q))return A.a(f,j)
f[j]=a.charCodeAt(s)
if(!(g<q))return A.a(f,g)
f[g]=61}return 0}return(i<<2|3-h)>>>0}for(p=c;p<d;){n=s.h(b,p)
if(n<0||n>255)break;++p}throw A.l(A.x(b,"Not a byte value at index "+p+": 0x"+B.d.bI(s.h(b,p),16),null))},
Jd(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.am(a1,2),f=a1&3,e=$.GN()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.a(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.a(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.E(d)
m=d.length
if(!(a0<m))return A.a(d,a0)
d[a0]=g>>>16&255
a0=k+1
if(!(k<m))return A.a(d,k)
d[k]=g>>>8&255
k=a0+1
if(!(a0<m))return A.a(d,a0)
d[a0]=g&255
a0=k
g=0}continue}else if(l===-1&&f>1){if(o>127)break
if(f===3){if((g&3)!==0)throw A.l(A.y(i,a,p))
k=a0+1
q&2&&A.E(d)
s=d.length
if(!(a0<s))return A.a(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.a(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.l(A.y(i,a,p))
q&2&&A.E(d)
if(!(a0<d.length))return A.a(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.E8(a,p+1,c,-j-1)}throw A.l(A.y(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.a(a,p)
if(a.charCodeAt(p)>127)break}throw A.l(A.y(h,a,p))},
Jb(a,b,c,d){var s=A.Jc(a,b,c),r=(d&3)+(s-b),q=B.d.am(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.GM()},
Jc(a,b,c){var s,r=a.length,q=c,p=q,o=0
for(;;){if(!(p>b&&o<2))break
A:{--p
if(!(p>=0&&p<r))return A.a(a,p)
s=a.charCodeAt(p)
if(s===61){++o
q=p
break A}if((s|32)===100){if(p===b)break;--p
if(!(p>=0&&p<r))return A.a(a,p)
s=a.charCodeAt(p)}if(s===51){if(p===b)break;--p
if(!(p>=0&&p<r))return A.a(a,p)
s=a.charCodeAt(p)}if(s===37){++o
q=p
break A}break}}return q},
E8(a,b,c,d){var s,r,q
if(b===c)return d
s=-d-1
for(r=a.length;s>0;){if(!(b<r))return A.a(a,b)
q=a.charCodeAt(b)
if(s===3){if(q===61){s-=3;++b
break}if(q===37){--s;++b
if(b===c)break
if(!(b<r))return A.a(a,b)
q=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(q!==51)break;++b;--s
if(b===c)break
if(!(b<r))return A.a(a,b)
q=a.charCodeAt(b)}if((q|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.l(A.y("Invalid padding character",a,b))
return-s-1},
Dw(a,b,c){return new A.im(a,b)},
K9(a){return a.M()},
Jn(a,b){return new A.uR(a,[],A.LQ())},
Jo(a,b,c){var s,r=new A.bE(""),q=A.Jn(r,b)
q.e7(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
K1(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
m9:function m9(a,b){this.a=a
this.b=b
this.c=null},
uQ:function uQ(a){this.a=a},
ma:function ma(a){this.a=a},
v5:function v5(){},
v4:function v4(){},
fH:function fH(a){this.a=a},
hT:function hT(a){this.a=a},
up:function up(a){this.a=0
this.b=a},
jV:function jV(){},
uo:function uo(){this.a=0},
be:function be(){},
bf:function bf(){},
b7:function b7(){},
kq:function kq(){},
im:function im(a,b){this.a=a
this.b=b},
kP:function kP(a,b){this.a=a
this.b=b},
kO:function kO(){},
kR:function kR(a){this.b=a},
kQ:function kQ(a){this.a=a},
uS:function uS(){},
uT:function uT(a,b){this.a=a
this.b=b},
uR:function uR(a,b,c){this.c=a
this.a=b
this.b=c},
lI:function lI(){},
lJ:function lJ(){},
v6:function v6(a){this.b=0
this.c=a},
j3:function j3(a){this.a=a},
eK:function eK(a){this.a=a
this.b=16
this.c=0},
HS(a){var s=A.Eg(a,null)
if(s==null)A.h(A.y("Could not parse BigInt",a,null))
return s},
ut(a,b){var s=A.Eg(a,b)
if(s==null)throw A.l(A.y("Could not parse BigInt",a,null))
return s},
Jj(a,b){var s,r,q=$.bm(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a_(0,$.CO()).C(0,A.hq(s))
s=0
o=0}}if(b)return q.R(0)
return q},
E9(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Jk(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.O.h4(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.a(a,s)
o=A.E9(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0&&h<j))return A.a(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.a(a,s)
o=A.E9(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0&&n<j))return A.a(i,n)
i[n]=r}if(j===1){if(0>=j)return A.a(i,0)
l=i[0]===0}else l=!1
if(l)return $.bm()
l=A.bi(j,i)
return new A.aR(l===0?!1:c,i,l)},
Eg(a,b){var s,r,q,p,o,n
if(a==="")return null
s=$.GP().aj(a)
if(s==null)return null
r=s.b
q=r.length
if(1>=q)return A.a(r,1)
p=r[1]==="-"
if(4>=q)return A.a(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.a(r,5)
if(o!=null)return A.Jj(o,p)
if(n!=null)return A.Jk(n,2,p)
return null},
bi(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
C0(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
aL(a){var s
if(a===0)return $.bm()
if(a===1)return $.bJ()
if(a===2)return $.Bp()
if(Math.abs(a)<4294967296)return A.hq(B.d.aE(a))
s=A.Jf(a)
return s},
hq(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bi(4,s)
return new A.aR(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bi(1,s)
return new A.aR(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.d.am(a,16)
r=A.bi(2,s)
return new A.aR(r===0?!1:o,s,r)}r=B.d.u(B.d.gbS(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.d.u(a,65536)}r=A.bi(r,s)
return new A.aR(r===0?!1:o,s,r)},
Jf(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.l(A.b0("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.bm()
r=$.GO()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.E(r)
if(!(p<8))return A.a(r,p)
r[p]=0}q=J.jM(B.i.ga9(r))
q.$flags&2&&A.E(q,13)
q.setFloat64(0,a,!0)
o=(r[7]<<4>>>0)+(r[6]>>>4)-1075
n=new Uint16Array(4)
n[0]=(r[1]<<8>>>0)+r[0]
n[1]=(r[3]<<8>>>0)+r[2]
n[2]=(r[5]<<8>>>0)+r[4]
n[3]=r[6]&15|16
m=new A.aR(!1,n,4)
if(o<0)l=m.c2(0,-o)
else l=o>0?m.b_(0,o):m
if(s)return l.R(0)
return l},
C1(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.a(a,s)
o=a[s]
q&2&&A.E(d)
if(!(p>=0&&p<d.length))return A.a(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.E(d)
if(!(s<d.length))return A.a(d,s)
d[s]=0}return b+c},
Ef(a,b,c,d){var s,r,q,p,o,n,m,l=B.d.u(c,16),k=B.d.T(c,16),j=16-k,i=B.d.b_(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.d.dH(o,j)
q&2&&A.E(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.d.b_(o&i,k)}q&2&&A.E(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
Ea(a,b,c,d){var s,r,q,p=B.d.u(c,16)
if(B.d.T(c,16)===0)return A.C1(a,b,p,d)
s=b+p+1
A.Ef(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.E(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
Jl(a,b,c,d){var s,r,q,p,o,n,m=B.d.u(c,16),l=B.d.T(c,16),k=16-l,j=B.d.b_(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.d.dH(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.d.b_(n&j,k)
q&2&&A.E(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o|s)>>>0
s=B.d.dH(n,l)}q&2&&A.E(d)
if(!(r>=0&&r<d.length))return A.a(d,r)
d[r]=s},
lO(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.a(a,s)
p=a[s]
if(!(s<q))return A.a(c,s)
o=p-c[s]
if(o!==0)return o}return o},
Jg(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n+c[o]
q&2&&A.E(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.E(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.E(e)
if(!(b>=0&&b<e.length))return A.a(e,b)
e[b]=p},
lN(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n-c[o]
q&2&&A.E(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.am(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.E(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.am(p,16)&1)}},
C2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.a(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.a(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.E(d)
d[e]=m&65535
p=B.d.u(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.a(d,e)
k=d[e]+p
l=e+1
q&2&&A.E(d)
d[e]=k&65535
p=B.d.u(k,65536)}},
Ji(a,b,c,d,e){var s,r,q=b+d
for(s=e.$flags|0,r=q;--r,r>=0;){s&2&&A.E(e)
if(!(r<e.length))return A.a(e,r)
e[r]=0}for(s=c.length,r=0;r<d;){if(!(r<s))return A.a(c,r)
A.C2(c[r],a,0,e,r,b);++r}return q},
Jh(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.d.aA((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
Z(a,b,c){var s
A.d(a)
A.aG(c)
t.lF.a(b)
s=A.le(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.l(A.y(a,null,null))},
Ia(a,b){a=A.b2(a,new Error())
if(a==null)a=A.de(a)
a.stack=b.k(0)
throw a},
it(a,b,c,d){var s,r=c?J.Du(a,d):J.Dt(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
d_(a,b,c){var s,r=A.c([],c.i("u<0>"))
for(s=J.S(a);s.n();)B.a.m(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
D(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("u<0>"))
s=A.c([],b.i("u<0>"))
for(r=J.S(a);r.n();)B.a.m(s,r.gt())
return s},
aE(a,b){var s=A.d_(a,!1,b)
s.$flags=3
return s},
iY(a,b,c){var s,r,q,p,o
A.ba(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.l(A.aK(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.DM(b>0||c<o?p.slice(b,c):p)}if(t.iT.b(a))return A.J_(a,b,c)
if(r)a=J.mP(a,c)
if(b>0)a=J.hP(a,b)
s=A.D(a,t.S)
return A.DM(s)},
J_(a,b,c){var s=a.length
if(b>=s)return""
return A.IK(a,b,c==null||c>s?s:c)},
C(a,b,c){return new A.en(a,A.BH(a,!1,b,c,!1,""))},
BU(a,b,c){var s=J.S(b)
if(!s.n())return a
if(c.length===0){do a+=A.j(s.gt())
while(s.n())}else{a+=A.j(s.gt())
while(s.n())a=a+c+A.j(s.gt())}return a},
C9(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.R){s=$.GQ()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.E.O(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.aW(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
JS(a){var s,r,q
if(!$.GR())return A.JT(a)
s=new URLSearchParams()
a.a2(0,new A.v3(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.b.X(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
IW(){return A.eQ(new Error())},
I7(a,b,c,d,e,f,g,h,i){var s=A.DO(a,b,c,d,e,f,g,h,i)
if(s==null)return null
return new A.aa(A.Dk(s,h,i),h,i)},
b(a,b,c){var s=A.DO(a,b,c,0,0,0,0,0,!0)
return new A.aa(s==null?new A.ns(a,b,c,0,0,0,0,0).$0():s,0,!0)},
I6(){return new A.aa(Date.now(),0,!1)},
c_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=$.Gh().aj(a)
if(b!=null){s=new A.nu()
r=b.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
p=A.Z(q,c,c)
if(2>=r.length)return A.a(r,2)
q=r[2]
q.toString
o=A.Z(q,c,c)
if(3>=r.length)return A.a(r,3)
q=r[3]
q.toString
n=A.Z(q,c,c)
if(4>=r.length)return A.a(r,4)
m=s.$1(r[4])
if(5>=r.length)return A.a(r,5)
l=s.$1(r[5])
if(6>=r.length)return A.a(r,6)
k=s.$1(r[6])
if(7>=r.length)return A.a(r,7)
j=new A.nv().$1(r[7])
i=B.d.u(j,1000)
q=r.length
if(8>=q)return A.a(r,8)
h=r[8]!=null
if(h){if(9>=q)return A.a(r,9)
g=r[9]
if(g!=null){f=g==="-"?-1:1
if(10>=q)return A.a(r,10)
q=r[10]
q.toString
e=A.Z(q,c,c)
if(11>=r.length)return A.a(r,11)
l-=f*(s.$1(r[11])+60*e)}}d=A.I7(p,o,n,m,l,k,i,j%1000,h)
if(d==null)throw A.l(A.y("Time out of range",a,c))
return d}else throw A.l(A.y("Invalid date format",a,c))},
Dl(a){var s,r
try{s=A.c_(a)
return s}catch(r){if(A.aw(r) instanceof A.b8)return null
else throw r}},
Dk(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.l(A.aK(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.l(A.aK(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.l(A.x(b,s,"Time including microseconds is outside valid range"))
A.cM(c,"isUtc",t.y)
return a},
Dj(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
I8(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
nt(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dq(a){if(a>=10)return""+a
return"0"+a},
BC(a,b,c,d){return new A.ci(b+1000*c+1e6*d+864e8*a)},
ai(a,b,c){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.l(A.x(b,"name","No enum value with that name"))},
BD(a,b){var s,r,q,p=A.w(t.N,b)
for(s=a.length,r=0;r<s;++r){q=a[r]
p.j(0,q.b,q)}return p},
ks(a){if(typeof a=="number"||A.ea(a)||a==null)return J.hQ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.DL(a)},
Ib(a,b){A.cM(a,"error",t.K)
A.cM(b,"stackTrace",t.l)
A.Ia(a,b)},
jT(a){return new A.jS(a)},
b0(a,b){return new A.cc(!1,null,b,a)},
x(a,b,c){return new A.cc(!0,a,b,c)},
ef(a,b,c){return a},
ts(a,b){return new A.hb(null,null,!0,a,b,"Value not in range")},
aK(a,b,c,d,e){return new A.hb(b,c,!0,a,d,"Invalid value")},
DP(a,b,c,d){if(a<b||a>c)throw A.l(A.aK(a,b,c,d,null))
return a},
bQ(a,b,c){if(0>a||a>c)throw A.l(A.aK(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.l(A.aK(b,a,c,"end",null))
return b}return c},
ba(a,b){if(a<0)throw A.l(A.aK(a,0,null,b,null))
return a},
nO(a,b,c,d){return new A.kC(b,!0,a,d,"Index out of range")},
az(a){return new A.j2(a)},
j0(a){return new A.lF(a)},
aq(a){return new A.dT(a)},
aI(a){return new A.ka(a)},
y(a,b,c){return new A.b8(a,b,c)},
Ik(a,b,c){var s,r
if(A.Cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.m($.c8,a)
try{A.KF(a,s)}finally{if(0>=$.c8.length)return A.a($.c8,-1)
$.c8.pop()}r=A.BU(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
BG(a,b,c){var s,r
if(A.Cv(a))return b+"..."+c
s=new A.bE(b)
B.a.m($.c8,a)
try{r=s
r.a=A.BU(r.a,a,", ")}finally{if(0>=$.c8.length)return A.a($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
KF(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.j(l.gt())
B.a.m(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.n()){if(j<=4){B.a.m(b,A.j(p))
return}r=A.j(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.n();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.j(p)
r=A.j(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
DE(a,b,c,d,e){return new A.f0(a,b.i("@<0>").a3(c).a3(d).a3(e).i("f0<1,2,3,4>"))},
bx(a,b,c,d){var s
if(B.t===c){s=J.bZ(a)
b=J.bZ(b)
return A.u6(A.dX(A.dX($.mM(),s),b))}if(B.t===d){s=J.bZ(a)
b=J.bZ(b)
c=J.bZ(c)
return A.u6(A.dX(A.dX(A.dX($.mM(),s),b),c))}s=J.bZ(a)
b=J.bZ(b)
c=J.bZ(c)
d=J.bZ(d)
d=A.u6(A.dX(A.dX(A.dX(A.dX($.mM(),s),b),c),d))
return d},
DG(a){var s,r,q=$.mM()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r)q=A.dX(q,J.bZ(a[r]))
return A.u6(q)},
DW(a,b){return new A.j1(A.kU(a,b),b.i("j1<0>"))},
J6(a){var s=t.N
return B.a.a5(A.c(a.split("&"),t.s),A.w(s,s),new A.ug(B.R),t.yz)},
lH(a,b,c){throw A.l(A.y("Illegal IPv4 address, "+a,b,c))},
J4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q<s))return A.a(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lH("each part must be in the range 0..255",a,r)}A.lH("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lH(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.E(d)
if(!(k<16))return A.a(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lH(j,a,q)
p=l}A.lH("IPv4 address should contain exactly 4 parts",a,q)},
E4(a,b,c){var s
if(b===c)throw A.l(A.y("Empty IP address",a,b))
if(!(b<a.length))return A.a(a,b)
if(a.charCodeAt(b)===118){s=A.J5(a,b,c)
if(s!=null)throw A.l(s)
return!1}A.E5(a,b,c)
return!0},
J5(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.b8(n,a,q)
r=q
break}return new A.b8("Unexpected character",a,q-1)}if(r-1===b)return new A.b8(n,a,r)
return new A.b8("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.b8("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.a(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.b8("Invalid IPvFuture address character",a,r)}},
E5(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uf(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4<r))return A.a(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.a(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.a(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.J4(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.am(l,8)
if(!(o<16))return A.a(s,o)
s[o]=e;++o
if(!(o<16))return A.a(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.i.aV(s,a0,16,s,a)
B.i.aO(s,a,a0,0)}}return s},
Eu(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
jw(a,b,c){throw A.l(A.y(c,a,b))},
jx(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.length,c="",b=e
if(d!==0){r=0
for(;;){if(!(r<d)){s=0
break}if(a0.charCodeAt(r)===64){c=B.b.X(a0,0,r)
s=r+1
break}++r}if(s<d&&a0.charCodeAt(s)===91){for(q=s,p=-1;q<d;++q){o=a0.charCodeAt(q)
if(o===37&&p<0){n=B.b.c3(a0,"25",q+1)?q+2:q
p=q
q=n}else if(o===93)break}if(q===d)throw A.l(A.y("Invalid IPv6 host entry.",a0,s))
m=p<0?q:p
A.E4(a0,s+1,m);++q
if(q!==d){if(!(q<d))return A.a(a0,q)
m=a0.charCodeAt(q)!==58}else m=!1
if(m)throw A.l(A.y("Invalid end of authority",a0,q))}else q=s
for(;q<d;++q)if(a0.charCodeAt(q)===58){l=B.b.ac(a0,q+1)
b=l.length!==0?A.Z(l,e,e):e
break}k=B.b.X(a0,s,q)}else k=e
d=A.c(a1.split("/"),t.s)
a=A.JU(a,0,a.length)
c=A.JV(c,0,c.length)
k=A.JO(k,0,k==null?0:k.length,!1)
j=A.JR(e,0,0,a2)
i=A.JN(e,0,0)
b=A.JQ(b,a)
h=a==="file"
if(k==null)m=c.length!==0||b!=null||h
else m=!1
if(m)k=""
m=k==null
g=!m
f=A.JP(e,0,0,d,a,g)
d=a.length===0
if(d&&m&&!B.b.ak(f,"/"))f=A.Ey(f,!d||g)
else f=A.EA(f)
return new A.jv(a,c,m&&B.b.ak(f,"//")?"":k,b,f,j,i)},
JQ(a,b){if(a!=null&&a===A.Eu(b))return null
return a},
JO(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.a(a,r)
if(a.charCodeAt(r)!==93)A.jw(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.a(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.JL(a,q,r)
if(o<r){n=o+1
p=A.Ez(a,B.b.c3(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.E4(a,q,o)
l=B.b.X(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.a(a,k)
if(a.charCodeAt(k)===58){o=B.b.cb(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Ez(a,B.b.c3(a,"25",n)?o+3:n,c,"%25")}else p=""
A.E5(a,b,o)
return"["+B.b.X(a,b,o)+p+"]"}}return A.JZ(a,b,c)},
JL(a,b,c){var s=B.b.cb(a,"%",b)
return s>=b&&s<c?s:c},
Ez(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bE(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.a(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.C7(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bE("")
l=h.a+=B.b.X(a,q,r)
if(m)n=B.b.X(a,r,r+3)
else if(n==="%")A.jw(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bE("")
if(q<r){h.a+=B.b.X(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.a(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.X(a,q,r)
if(h==null){h=new A.bE("")
m=h}else m=h
m.a+=i
l=A.C6(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.X(a,b,c)
if(q<c){i=B.b.X(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
JZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r<s))return A.a(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.C7(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bE("")
k=B.b.X(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.X(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bE("")
if(q<r){p.a+=B.b.X(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.jw(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.a(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.X(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bE("")
l=p}else l=p
l.a+=k
j=A.C6(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.X(a,b,c)
if(q<c){k=B.b.X(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
JU(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(!A.Ew(a.charCodeAt(b)))A.jw(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.jw(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.X(a,b,c)
return A.JK(q?a.toLowerCase():a)},
JK(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
JV(a,b,c){return A.JX(a,b,c,16,!1,!1)},
JP(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.L(d),p=new A.aj(d,q.i("f(1)").a(new A.v0()),q.i("aj<1,f>")).Z(0,"/")
if(p.length===0){if(s)return"/"}else if(r&&!B.b.ak(p,"/"))p="/"+p
return A.JY(p,e,f)},
JY(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.ak(a,"/")&&!B.b.ak(a,"\\"))return A.Ey(a,!s||c)
return A.EA(a)},
JR(a,b,c,d){if(d==null)return null
return A.JS(d)},
JT(a){var s={},r=new A.bE("")
s.a=""
a.a2(0,new A.v1(new A.v2(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
JN(a,b,c){return null},
C7(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.a(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.a(a,l)
q=a.charCodeAt(l)
p=A.Fs(r)
o=A.Fs(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.a(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aW(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.X(a,b,b+3).toUpperCase()
return null},
C6(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.a(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.d.dH(a,6*p)&63|q
if(!(o<r))return A.a(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.a(k,l)
if(!(m<r))return A.a(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.a(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.iY(s,0,null)},
JX(a,b,c,d,e,f){var s=A.JW(a,b,c,d,e,f)
return s==null?B.b.X(a,b,c):s},
JW(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.a(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.C7(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.jw(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.a(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.C6(n)}if(o==null){o=new A.bE("")
k=o}else k=o
k.a=(k.a+=B.b.X(a,p,q))+l
if(typeof m!=="number")return A.Ct(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.X(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
Ex(a){if(B.b.ak(a,"."))return!0
return B.b.bX(a,"/.")!==-1},
EA(a){var s,r,q,p,o,n,m
if(!A.Ex(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.a(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.Z(s,"/")},
Ey(a,b){var s,r,q,p,o,n
if(!A.Ex(a))return!b?A.Ev(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gau(s)!==".."){if(0>=s.length)return A.a(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.a(s,0)
B.a.j(s,0,A.Ev(s[0]))}return B.a.Z(s,"/")},
Ev(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.Ew(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.X(a,0,s)+"%3A"+B.b.ac(a,s+1)
if(r<=127){if(!(r<128))return A.a(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
JM(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.l(A.b0("Invalid URL encoding",null))}}return r},
C8(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.R===d)return B.b.X(a,b,c)
else p=new A.k9(B.b.X(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.l(A.b0("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.l(A.b0("Truncated URI",null))
B.a.m(p,A.JM(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}return d.c8(p)},
Ew(a){var s=a|32
return 97<=s&&s<=122},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
ur:function ur(){},
us:function us(){},
uu:function uu(a,b){this.a=a
this.b=b},
uv:function uv(a){this.a=a},
uq:function uq(a,b){this.a=a
this.b=b},
v3:function v3(a){this.a=a},
ns:function ns(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
nu:function nu(){},
nv:function nv(){},
ci:function ci(a){this.a=a},
m4:function m4(){},
aC:function aC(){},
jS:function jS(a){this.a=a},
e_:function e_(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kC:function kC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j2:function j2(a){this.a=a},
lF:function lF(a){this.a=a},
dT:function dT(a){this.a=a},
ka:function ka(a){this.a=a},
l5:function l5(){},
iX:function iX(){},
uA:function uA(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(){},
i:function i(){},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
bh:function bh(){},
a_:function a_(){},
mn:function mn(){},
bE:function bE(a){this.a=a},
ug:function ug(a){this.a=a},
uf:function uf(a){this.a=a},
jv:function jv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.w=$},
v0:function v0(){},
v2:function v2(a,b){this.a=a
this.b=b},
v1:function v1(a){this.a=a},
kt:function kt(a,b){this.a=a
this.$ti=b},
In(a){return a},
BV(a){return a},
IE(a){return a},
pa:function pa(a){this.a=a},
bk(a){var s
if(typeof a=="function")throw A.l(A.b0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.K7,a)
s[$.CH()]=a
return s},
K7(a,b,c){t.BO.a(a)
if(A.R(c)>=1)return a.$1(b)
return a.$0()},
Cp(a,b,c){return c.a(a[b])},
EO(a,b){return a[b]},
Fg(a,b,c,d){return d.a(a[b].apply(a,c))},
bI(a,b){var s=new A.an($.al,b.i("an<0>")),r=new A.cJ(s,b.i("cJ<0>"))
a.then(A.fE(new A.Ax(r,b),1),A.fE(new A.Ay(r),1))
return s},
Ax:function Ax(a,b){this.a=a
this.b=b},
Ay:function Ay(a){this.a=a},
FI(a,b,c){A.Fi(c,t.r,"T","min")
return Math.min(c.a(a),c.a(b))},
FH(a,b,c){A.Fi(c,t.r,"T","max")
return Math.max(c.a(a),c.a(b))},
IM(){return $.jJ()},
m8:function m8(a){this.a=a},
HY(a,b,c){return J.jN(a,b,c)},
fu(a,b,c){var s=a.BYTES_PER_ELEMENT
c=A.bQ(b,c,B.d.aA(a.byteLength,s))
return J.bq(B.i.ga9(a),a.byteOffset+b*s,(c-b)*s)},
kr:function kr(){},
kl:function kl(a){this.$ti=a},
kV:function kV(a){this.$ti=a},
vo(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=n*2,l=new Uint8Array(m)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
if(!(r<m))return A.a(l,r)
l[r]=o.charCodeAt(q>>>4&15)
r=p+1
if(!(p<m))return A.a(l,p)
l[p]=o.charCodeAt(q&15)}return A.iY(l,0,null)},
ch:function ch(a){this.a=a},
km:function km(){this.a=null},
fV:function fV(){},
ky:function ky(){},
mf:function mf(){},
mh:function mh(){},
mg:function mg(a,b,c,d,e,f,g,h){var _=this
_.y=a
_.z=b
_.a=c
_.b=d
_.c=e
_.d=f
_.e=0
_.f=g
_.r=0
_.w=!1
_.x=h},
mi:function mi(){},
mj:function mj(){},
lr:function lr(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.z=b
_.Q=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=0
_.f=h
_.r=0
_.w=!1
_.x=i},
jY:function jY(a,b,c){this.c=a
this.d=b
this.a=c},
HV(){var s=$.ed()
return s},
n1:function n1(a){this.a=a},
jZ:function jZ(a,b){this.b=a
this.a=b},
D8(a){if(a instanceof A.tR)return"SHA-1"
if(a instanceof A.ez)return"SHA-256"
if(a instanceof A.tS)return"SHA-384"
if(a instanceof A.d6)return"SHA-512"
return null},
fJ:function fJ(){},
k1:function k1(){},
k2:function k2(){},
lQ:function lQ(){},
lR:function lR(){},
n2:function n2(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
n3:function n3(a){this.a=a},
D3(){return $.b6().eI(12,32)},
I9(){return $.b6().cG()},
If(a,b){return $.b6().cK(a,b)},
Ig(){var s=$.b6().cn()
return $.b6().cL(s)},
E6(){return $.b6().dj()},
eV:function eV(){},
hR:function hR(){},
hV:function hV(){},
i8:function i8(){},
kA:function kA(){},
el:function el(){},
tR:function tR(){},
ez:function ez(){},
tS:function tS(){},
d6:function d6(){},
uj:function uj(){},
ng:function ng(){},
ni:function ni(){},
ek:function ek(a){this.a=a},
cv:function cv(){},
kz:function kz(){},
m7:function m7(a){this.b=a
this.c=!1},
nZ:function nZ(){},
o1:function o1(){},
h0:function h0(){},
io:function io(){},
lf:function lf(){},
ip:function ip(a,b){this.a=a
this.$ti=b},
DV(){return new A.iT()},
d1:function d1(a){this.a=a},
iT:function iT(){},
d2:function d2(){},
cz:function cz(){},
mc:function mc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
uU:function uU(a){this.a=a},
ms:function ms(){},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(){},
tO:function tO(){},
bp:function bp(a,b){this.b=a
this.c=b},
bs:function bs(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
ls:function ls(){},
d7:function d7(a,b,c){this.d=a
this.f=b
this.b=c},
bD:function bD(a,b){this.a=a
this.b=b},
l6:function l6(){this.a=null},
pe:function pe(){},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=!1
_.f=d},
bT(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
ke(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bT(a5[0])
r=A.bT(a5[1])
q=A.bT(a5[2])
p=A.bT(a5[3])
o=a6[0]
n=a6[1]
m=a6[2]
l=a6[3]
for(k=a7.length,j=0;j<k;j=i,p=a,q=b,r=c,s=d){i=j+16
if(i<=k)for(h=0;h<16;++h){g=j+h
if(!(g<k))return A.a(a7,g)
a4.setUint8(h,a7[g])}else{a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
f=B.d.T(k,16)
for(h=0;h<f;++h){g=j+h
if(!(g<k))return A.a(a7,g)
a4.setUint8(h,a7[g])}}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(e=o,d=0,c=0,b=0,a=0,j=0;j<128;++j,p=a3,q=a2,r=a1){g=B.d.T(j,32)
if(g===0&&j!==0)if(j===32)e=n
else e=j===64?m:l
if((e&B.d.b_(1,31-g))>>>0!==0){d=(d^s)>>>0
c=(c^r)>>>0
b=(b^q)>>>0
a=(a^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bT(s)
a5.$flags&2&&A.E(a5)
if(0>=4)return A.a(a5,0)
a5[0]=k
k=A.bT(r)
a5.$flags&2&&A.E(a5)
if(1>=4)return A.a(a5,1)
a5[1]=k
k=A.bT(q)
a5.$flags&2&&A.E(a5)
if(2>=4)return A.a(a5,2)
a5[2]=k
k=A.bT(p)
a5.$flags&2&&A.E(a5)
if(3>=4)return A.a(a5,3)
a5[3]=k},
De(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.i.aZ(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.d.u(q,n),!1)
r.setUint32(12,B.d.T(q,n),!1)
p=J.bq(B.az.ga9(r),0,null)
o=new Uint32Array(4)
A.ke(o,a,b)
A.ke(o,a,p)
return J.bq(B.D.ga9(o),0,null)},
kd:function kd(a,b,c){this.c=a
this.d=b
this.a=c},
ki:function ki(){},
lU:function lU(){},
lX:function lX(){},
mw(b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b2.length
if(!(b3<a9))return A.a(b2,b3)
s=b2[b3]
r=b3+1
if(!(r<a9))return A.a(b2,r)
q=b2[r]
r=b3+2
if(!(r<a9))return A.a(b2,r)
p=b2[r]
r=b3+3
if(!(r<a9))return A.a(b2,r)
o=b2[r]
if($.eT()===B.a1){s=A.fB(s)
q=A.fB(q)
p=A.fB(p)
o=A.fB(o)}a9=b4.length
if(0>=a9)return A.a(b4,0)
s^=b4[0]
if(1>=a9)return A.a(b4,1)
q^=b4[1]
if(2>=a9)return A.a(b4,2)
p^=b4[2]
if(3>=a9)return A.a(b4,3)
o^=b4[3]
n=(a9/4|0)-1
for(m=4,l=1;l<n;++l,o=k,p=r,q=f,s=h){r=B.aY[s>>>24&255]
k=B.aW[q>>>16&255]
j=B.aX[p>>>8&255]
i=B.b_[o&255]
if(!(m<a9))return A.a(b4,m)
h=r^k^j^i^b4[m]
i=B.aY[q>>>24&255]
j=B.aW[p>>>16&255]
k=B.aX[o>>>8&255]
r=B.b_[s&255]
g=m+1
if(!(g<a9))return A.a(b4,g)
f=i^j^k^r^b4[g]
g=B.aY[p>>>24&255]
r=B.aW[o>>>16&255]
k=B.aX[s>>>8&255]
j=B.b_[q&255]
i=m+2
if(!(i<a9))return A.a(b4,i)
r=g^r^k^j^b4[i]
i=B.aY[o>>>24&255]
j=B.aW[s>>>16&255]
k=B.aX[q>>>8&255]
g=B.b_[p&255]
e=m+3
if(!(e<a9))return A.a(b4,e)
k=i^j^k^g^b4[e]
m+=4}r=B.C[s>>>24&255]
k=B.C[q>>>16&255]
j=B.C[p>>>8&255]
i=B.C[o&255]
g=B.C[q>>>24&255]
e=B.C[p>>>16&255]
d=B.C[o>>>8&255]
c=B.C[s&255]
f=B.C[p>>>24&255]
b=B.C[o>>>16&255]
a=B.C[s>>>8&255]
a0=B.C[q&255]
a1=B.C[o>>>24&255]
a2=B.C[s>>>16&255]
a3=B.C[q>>>8&255]
a4=B.C[p&255]
if(!(m<a9))return A.a(b4,m)
a5=(((r&255)<<24|(k&255)<<16|(j&255)<<8|i&255)^b4[m])>>>0
i=m+1
if(!(i<a9))return A.a(b4,i)
a6=(((g&255)<<24|(e&255)<<16|(d&255)<<8|c&255)^b4[i])>>>0
i=m+2
if(!(i<a9))return A.a(b4,i)
a7=(((f&255)<<24|(b&255)<<16|(a&255)<<8|a0&255)^b4[i])>>>0
i=m+3
if(!(i<a9))return A.a(b4,i)
a8=(((a1&255)<<24|(a2&255)<<16|(a3&255)<<8|a4&255)^b4[i])>>>0
if($.eT()===B.a1){a5=A.fB(a5)
a6=A.fB(a6)
a7=A.fB(a7)
a8=A.fB(a8)}b0.$flags&2&&A.E(b0)
a9=b0.length
if(!(b1<a9))return A.a(b0,b1)
b0[b1]=a5
r=b1+1
if(!(r<a9))return A.a(b0,r)
b0[r]=a6
r=b1+2
if(!(r<a9))return A.a(b0,r)
b0[r]=a7
r=b1+3
if(!(r<a9))return A.a(b0,r)
b0[r]=a8},
F8(a){var s,r,q,p,o,n,m,l,k,j="The bytes have been destroyed",i=a.gaN(),h=B.ky.h(0,i.gq(0))
if(h==null)throw A.l(A.b0("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.jN(B.D.ga9(r),r.byteOffset,i.gq(0))
p=q.$flags|0
o=0
for(;;){n=i.a
if(n==null)A.h(A.az(j))
if(!(o<J.aD(n)))break
n=i.a
if(n==null)A.h(A.aq(j))
m=J.as(n,o)
p&2&&A.E(q,9)
q.setUint8(o,m);++o}l=B.d.u(i.gq(0),4)
if($.eT()===B.a1)for(o=0;o<l;++o){p=q.getUint32(4*o,!1)
if(!(o<s))return A.a(r,o)
r[o]=p}for(p=l>6,o=l;o<s;++o){m=o-1
if(!(m>=0))return A.a(r,m)
k=r[m]
m=B.d.T(o,l)
if(m===0){k=A.F3((k<<8|k>>>24)>>>0)
m=B.d.aA(o,l)-1
if(!(m>=0&&m<30))return A.a(B.dy,m)
k^=B.dy[m]<<24}else if(p&&m===4)k=A.F3(k)
m=o-l
if(!(m<s))return A.a(r,m)
m=r[m]
if(!(o>=0&&o<s))return A.a(r,o)
r[o]=(k^m)>>>0}return r},
F3(a){return(B.C[a>>>24&255]<<24|B.C[a>>>16&255]<<16|B.C[a>>>8&255]<<8|B.C[a&255])>>>0},
fB(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
nj:function nj(){},
nl(a,b,c){var s,r=J.ar(c),q=r.gq(c)
a.$flags&2&&A.E(a,11)
a.setUint32(b,q,!0)
b+=4
for(s=0;s<r.gq(c);++s)a.setUint8(b+s,r.h(c,s))
return b+r.gq(c)},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a,b){this.a=a
this.b=b},
kf:function kf(){},
nm:function nm(a){this.a=a},
nk:function nk(a,b,c,d,e,f,g,h,i,j){var _=this
_.ch=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.as=null
_.at=$
_.ax=null
_.ay=!1},
f1:function f1(a){this.a=a},
lV:function lV(){},
lW:function lW(){},
n_(a){var s=new Uint32Array(16),r=new Uint32Array(32)
s=new A.jW(s,r,new Uint32Array(32),a)
if($.eT()!==B.a1)A.h(A.j0("The platform should be little-endian."))
if(a<1||a>64)A.h(A.x(a,null,null))
s.d_(null)
return s},
eY(a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=4294967296
a6*=2
a7*=2
if(!(a1<32))return A.a(a0,a1)
s=a0[a1]
r=a1+1
if(!(r<32))return A.a(a0,r)
q=a0[r]
if(!(a2<32))return A.a(a0,a2)
p=a0[a2]
o=a2+1
if(!(o<32))return A.a(a0,o)
n=a0[o]
if(!(a3<32))return A.a(a0,a3)
m=a0[a3]
l=a3+1
if(!(l<32))return A.a(a0,l)
k=a0[l]
if(!(a4<32))return A.a(a0,a4)
j=a0[a4]
i=a4+1
if(!(i<32))return A.a(a0,i)
h=a0[i]
if(!(a6<32))return A.a(a5,a6)
g=s+p+a5[a6]
s=g>>>0
f=B.d.u(g,a)
e=a6+1
if(!(e<32))return A.a(a5,e)
q=f+q+n+a5[e]>>>0
g=(j^s)>>>0
d=(h^q)>>>0
c=m+d
m=c>>>0
k=B.d.u(c,a)+k+g>>>0
c=p^m
b=n^k
p=(b<<8|c>>>24)>>>0
n=(c<<8|b>>>24)>>>0
if(!(a7<32))return A.a(a5,a7)
c=s+p+a5[a7]
s=c>>>0
e=B.d.u(c,a)
f=a7+1
if(!(f<32))return A.a(a5,f)
q=e+q+n+a5[f]>>>0
c=d^s
d=g^q
j=(d<<16|c>>>16)>>>0
h=(c<<16|d>>>16)>>>0
g=m+j
m=g>>>0
k=B.d.u(g,a)+k+h>>>0
g=p^m
d=n^k
a0.$flags&2&&A.E(a0)
a0[a1]=s
a0[r]=q
a0[a2]=(g<<1|d>>>31)>>>0
a0[o]=(d<<1|g>>>31)>>>0
a0[a3]=m
a0[l]=k
a0[a4]=j
a0[i]=h},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=$
_.c=b
_.d=$
_.e=0
_.f=!1
_.r=c
_.w=d},
lP:function lP(){},
I5(a){return new A.i0(a)},
i0:function i0(a){this.a=a},
i1:function i1(){},
f2:function f2(){},
np:function np(){},
i3:function i3(){},
cR:function cR(){},
Df(a){var s=$.b6().eb()
return new A.kg(s,a)},
Bw(a){var s,r,q,p,o=B.a.a5(a,0,new A.nn(),t.S),n=new Uint8Array(o)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,A.m)(a),++q){p=a[q]
B.i.aZ(n,r,p)
r+=p.length}return n},
Bx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
if(d==null)d=A.kp()
s=a.a
r=a.b
q=a.c
p=a.d
o=d.a
n=d.b
m=d.c
l=d.d
k=b.b
j=b.a
s.bl(k,j)
i=c.b
h=c.a
r.bl(i,h)
s.ai(s,r)
r.d2(0,k,j)
q.d2(0,i,h)
r.ai(r,q)
h=$.Gs()
q.ai(h,b.d)
q.ai(q,c.d)
q.ai(q,$.CJ())
p.ai(h,b.c)
p.ai(p,c.c)
o.bl(r,s)
n.bl(p,q)
m.d2(0,p,q)
l.d2(0,r,s)
s.ai(o,n)
r.ai(m,l)
q.ai(n,m)
p.ai(o,l)},
By(a){var s,r,q,p=new Int32Array(16),o=new A.aF(p)
p=new Int32Array(16)
s=new Int32Array(16)
r=new A.aF(s)
o.f0(a.c,$.CK())
new A.aF(p).ai(a.a,o)
r.ai(a.b,o)
if(15>=s.length)return A.a(s,15)
q=s[15]
if(0>=p.length)return A.a(p,0)
p=p[0]
s.$flags&2&&A.E(s)
s[15]=(q|(p&1)<<15)>>>0
return r.hD(new Uint8Array(32))},
Dg(a){var s,r,q,p,o,n,m,l,k,j=null,i=new Uint8Array(A.aH(a))
if(31>=i.length)return A.a(i,31)
s=i[31]
r=s>>>7&1
i.$flags&2&&A.E(i)
i[31]=s&127
s=new Int32Array(16)
q=new A.aF(s)
q.dr(i)
s=$.mL()
if(q.hh(s))return j
p=new Int32Array(16)
o=new A.aF(p)
n=new Int32Array(16)
m=new A.aF(n)
o.ai(q,q)
n=$.CL()
o.bl(o,n)
m.ai(q,q)
m.ai(m,$.CJ())
m.d2(0,m,n)
m.f0(m,$.CK())
l=new Int32Array(16)
k=new A.aF(l)
k.ai(o,m)
if(k.gdd())if(r===1)return j
else{s=$.Gt()
return new A.dt(s,q,n,s)}o.c1($.Gp().aD())
o.f0(k,o)
m.ai(o,o)
m.bl(m,k)
if(!m.gdd())o.ai(o,$.Gq())
m.ai(o,o)
m.bl(m,k)
if(!m.gdd())return j
if(0>=p.length)return A.a(p,0)
if((p[0]&1)!==r)o.bl(s,o)
m.ai(o,q)
return new A.dt(o,q,n,m)},
kh(a,b){var s,r,q,p,o,n,m,l=A.kp(),k=l.b.a
k.$flags&2&&A.E(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=l.c.a
k.$flags&2&&A.E(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=new Int32Array(A.aH(b.a.a))
s=new Int32Array(A.aH(b.b.a))
r=new Int32Array(A.aH(b.c.a))
q=new Int32Array(A.aH(b.d.a))
b=new A.dt(new A.aF(k),new A.aF(s),new A.aF(r),new A.aF(q))
p=A.kp()
o=A.kp()
for(k=a.a,s=k.length,n=0;n<256;++n,m=p,p=b,b=m){r=B.d.u(n,16)
if(!(r<s))return A.a(k,r)
if((B.d.am(k[r],B.d.T(n,16))&1)===1){A.Bx(p,l,b,o)
m=p
p=l
l=m}A.Bx(p,b,b,o)}return l},
Dh(a){var s,r=a.length
if(0>=r)return A.a(a,0)
s=a[0]
a.$flags&2&&A.E(a)
a[0]=s&248
if(31>=r)return A.a(a,31)
a[31]=a[31]&127
a[31]=a[31]|64},
kg:function kg(a,b){this.b=a
this.a=b},
nn:function nn(){},
kp(){var s=null,r=new Int32Array(16),q=new Int32Array(16),p=new Int32Array(16),o=new Int32Array(16)
return new A.dt(new A.aF(r),new A.aF(q),new A.aF(p),new A.aF(o))},
fm(a){var s
if(a==null)s=new Int32Array(16)
else s=a
return new A.aF(s)},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nA:function nA(){},
aF:function aF(a){this.a=a},
tC:function tC(){},
lj:function lj(){this.a=null},
no:function no(a,b){this.a=a
this.b=b},
Eh(a,b,c){var s,r,q,p
for(s=a.length,r=J.ar(b),q=0;q<s;++q){p=q<r.gq(b)?(r.h(b,q)^c)>>>0:c
a.$flags&2&&A.E(a)
a[q]=p}},
i2:function i2(a){this.a=a},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
lZ:function lZ(){},
mr:function mr(){},
i4:function i4(){},
m_:function m_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=!1
_.w=_.r=0
_.x=e},
m0:function m0(){},
kj:function kj(){},
m1:function m1(){},
m2:function m2(){},
Bz(a){var s,r,q
if(J.aD(a)!==32)throw A.l(A.b0("Seed must be 32 bytes",null))
s=new Uint8Array(A.aH(a))
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
s.$flags&2&&A.E(s)
s[0]=q&248
if(31>=r)return A.a(s,31)
s[31]=s[31]|64
s[31]=s[31]&127
return s},
Di(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new Int32Array(16)
new A.aF(a3).dr(a6)
s=a3.length
if(15>=s)return A.a(a3,15)
r=a3[15]
a3.$flags&2&&A.E(a3)
a3[15]=r&32767
q=new Int32Array(16)
p=new Int32Array(16)
o=new Int32Array(16)
n=new Int32Array(16)
m=new Int32Array(16)
l=new Int32Array(16)
q[0]=1
n[0]=1
for(k=0;k<16;++k){if(!(k<s))return A.a(a3,k)
r=a3[k]
if(!(k<16))return A.a(p,k)
p[k]=r}for(s=a5.length,j=254;j>=0;--j){r=B.d.am(j,3)
if(!(r<s))return A.a(a5,r)
i=a5[r]>>>(j&7)&1
A.kk(q,p,i)
A.kk(o,n,i)
for(k=0;k<16;++k){h=q[k]
g=p[k]
f=o[k]
e=n[k]
if(!(k<16))return A.a(m,k)
m[k]=h+f
if(!(k<16))return A.a(q,k)
q[k]=h-f
if(!(k<16))return A.a(o,k)
o[k]=g+e
if(!(k<16))return A.a(p,k)
p[k]=g-e}A.ca(n,m,m)
A.ca(l,q,q)
A.ca(q,o,q)
A.ca(o,p,m)
for(k=0;k<16;++k){h=q[k]
f=o[k]
if(!(k<16))return A.a(m,k)
m[k]=h+f
if(!(k<16))return A.a(q,k)
q[k]=h-f
r=n[k]
d=l[k]
if(!(k<16))return A.a(o,k)
o[k]=r-d}A.ca(p,q,q)
A.ca(q,$.Gf(),o)
for(k=0;k<16;++k){r=q[k]
d=n[k]
if(!(k<16))return A.a(q,k)
q[k]=r+d}A.ca(o,q,o)
A.ca(q,n,l)
A.ca(n,a3,p)
A.ca(p,m,m)
A.kk(q,p,i)
A.kk(o,n,i)}for(k=0;k<16;++k){a3=o[k]
if(!(k<16))return A.a(n,k)
n[k]=a3}for(k=253;k>=0;--k){A.ca(o,o,o)
if(k!==2&&k!==4)A.ca(o,o,n)}A.ca(q,q,o)
for(k=0;k<3;++k){for(c=1,b=0;b<16;++b){a=65535+q[b]+c
c=B.d.u(a,65536)
if(!(b<16))return A.a(q,b)
q[b]=a-65536*c}a3=q[0]
if(0>=16)return A.a(q,0)
q[0]=a3+38*(c-1)}for(k=0;k<2;++k){a0=q[0]-65517
if(0>=16)return A.a(p,0)
p[0]=a0&65535
for(a1=1;a1<15;++a1,a0=a2){a2=q[a1]-65535-(B.d.am(a0,16)&1)
if(!(a1<16))return A.a(p,a1)
p[a1]=a2&65535}a3=q[15]
s=B.d.am(a0,16)
if(15>=16)return A.a(p,15)
p[15]=a3-32767-(s&1)
A.kk(q,p,1-(B.d.am(p[15],16)&1))}new A.aF(q).hD(a4)},
kk(a,b,c){var s,r,q,p,o,n=~(c-1)
for(s=a.$flags|0,r=b.$flags|0,q=0;q<16;++q){p=a[q]
o=n&(p^b[q])
s&2&&A.E(a)
if(!(q<16))return A.a(a,q)
a[q]=(p^o)>>>0
p=b[q]
r&2&&A.E(b)
if(!(q<16))return A.a(b,q)
b[q]=(p^o)>>>0}},
i5:function i5(a){this.a=a},
nr:function nr(){},
nq:function nq(){},
m3:function m3(){},
uz:function uz(){},
BA(a){return new A.P(A.aL(a),0)},
ah(a){var s,r,q,p,o,n,m,l=null,k=$.Gi().aj(a)
if(k==null)throw A.l(A.y(a+" is not a valid format",l,l))
s=k.b
r=s.length
if(1>=r)return A.a(s,1)
q=s[1]
if(2>=r)return A.a(s,2)
p=s[2]
if(p==null)p=""
if(3>=r)return A.a(s,3)
o=s[3]
n=A.ut(A.j(q)+p,l)
m=o==null?0:-A.Z(o,l,l)
return new A.P(n,m+p.length)},
dr(a){var s,r
try{s=A.ah(a)
return s}catch(r){if(A.aw(r) instanceof A.b8)return null
else throw r}},
Dm(a,b){var s,r=a.b,q=b.b
A:{if(r>q){s=new A.r(a,new A.P(b.a.a_(0,$.cO().aU(r-q)),r))
break A}if(r<q){s=new A.r(new A.P(a.a.a_(0,$.cO().aU(q-r)),q),b)
break A}s=new A.r(a,b)
break A}return s},
DQ(a,b){var s,r,q
if(A.IO(a)){s=A.IN(a)
r=a.a_(0,A.bY($.cO().aU(s),null))
return new A.P(r.a.aA(0,r.b),s)}q=$.CV().aU(b)
return new A.P(new A.tt().$1(a.a_(0,q)),b)},
IO(a){var s,r,q,p=a.b
for(;;){s=$.H6()
r=p.T(0,s)
q=$.CS()
r=r.l(0,q)
if(!(r===0))break
if(s.c===0)A.h(B.Y)
p=p.bA(s)}for(;;){s=$.CT()
r=p.T(0,s).l(0,q)
if(!(r===0))break
if(s.c===0)A.h(B.Y)
p=p.bA(s)}s=p.l(0,$.jL())
return s===0},
IN(a){var s,r,q=a,p=0
for(;;){s=q.b
r=s.l(0,$.hO())
if(!(r!==0))break;++p
r=$.CV()
q=A.bY(q.a.a_(0,r.a),s.a_(0,r.b))}return p},
P:function P(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
nw:function nw(a){this.a=a},
tt:function tt(){},
hu:function hu(a,b){this.a=a
this.b=b},
Kg(a,b){var s,r
for(;;){s=b.l(0,$.hN())
if(!(s!==0))break
r=a.T(0,b)
a=b
b=r}return a},
bY(a,b){var s,r,q
if(b==null)return new A.cB(a,$.hO())
s=$.hN()
r=b.l(0,s)
if(r===0)throw A.l(A.b0("zero can not be used as denominator",null))
r=a.l(0,s)
if(r===0)return new A.cB(s,$.hO())
if(b.l(0,s)<0){a=a.R(0)
b=b.R(0)}s=a.a?a.R(0):a
q=A.Kg(s,b.a?b.R(0):b)
return new A.cB(a.aA(0,q),b.aA(0,q))},
tu(a){return A.bY(A.aL(a),A.aL(1))},
cB:function cB(a,b){this.a=a
this.b=b},
jQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){return new A.br(k,c,m,n,h,j,e,a4,d,a3,a,b,o,q,a6,a5,i,g,a1,a2,s,a0,a7,l,p,f,r)},
Bu(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="minimumBalance",a7="statement",a8="startFrom",a9="driveFolder",b0="closedAfter",b1="replacedFrom",b2="ownStartDate",b3="ownStartFrom",b4=b5.h(0,"id")
b4.toString
A.d(b4)
s=b5.h(0,"alias")
s.toString
A.d(s)
r=b5.h(0,"institution")
r.toString
A.d(r)
q=b5.h(0,"kind")
q.toString
q=A.ai(B.dI,A.d(q),t.jN)
p=b5.h(0,"currency")
p.toString
A.d(p)
o=b5.h(0,"holder")
o.toString
A.d(o)
n=b5.h(0,"bookId")
n.toString
A.d(n)
m=b5.h(0,"startDate")
m.toString
m=A.ax(A.d(m))
l=A.aG(b5.h(0,"billingCycleDay"))
k=A.aG(b5.h(0,"staleAfterDays"))
j=A.n(b5.h(0,"alertEmail"))
i=A.n(b5.h(0,"alertPhone"))
if(b5.h(0,"loan")==null)h=a5
else{h=b5.h(0,"loan")
h.toString
h=A.BO(t.J.a(h))}if(b5.h(0,a6)==null)g=a5
else{g=b5.h(0,a6)
g.toString
g=A.aO(t.J.a(g))}if(b5.h(0,a7)==null)f=a5
else{f=b5.h(0,a7)
f.toString
f=A.DZ(t.J.a(f))}if(b5.h(0,a8)==null)e=a5
else{e=b5.h(0,a8)
e.toString
e=A.tW(t.f.a(e).G(0,t.N,t.X))}if(b5.h(0,a9)==null)d=a5
else{d=b5.h(0,a9)
d.toString
d=A.Dn(t.f.a(d).G(0,t.N,t.X))}if(b5.h(0,b0)==null)c=a5
else{c=b5.h(0,b0)
c.toString
c=A.ax(A.d(c))}b=A.n(b5.h(0,"replacedBy"))
if(b5.h(0,b1)==null)a=a5
else{a=b5.h(0,b1)
a.toString
a=A.ax(A.d(a))}if(b5.h(0,b2)==null)a0=a5
else{a0=b5.h(0,b2)
a0.toString
a0=A.ax(A.d(a0))}if(b5.h(0,b3)==null)a1=a5
else{a1=b5.h(0,b3)
a1.toString
a1=A.tW(t.f.a(a1).G(0,t.N,t.X))}if(b5.h(0,"subtype")==null)a2=a5
else{a2=b5.h(0,"subtype")
a2.toString
a2=A.ai(B.dw,A.d(a2),t.vi)}a3=A.n(b5.h(0,"ifsc"))
a4=A.n(b5.h(0,"micr"))
return A.jQ(j,i,s,l,n,A.n(b5.h(0,"branch")),c,p,d,o,b4,a3,r,q,h,a4,g,A.n(b5.h(0,"numberShown")),a0,a1,b,a,k,m,e,f,a2)},
Mt(a){A.d(a)
return $.eU().aM(0,a).gq(0)>=9},
Fe(a,b,c,d){var s,r
if(b!=null){s=$.H8()
s=!s.b.test(b)}else s=!1
if(s)return"an IFSC is 4 letters, a 0 and 6 letters or digits"
if(c!=null){s=$.Hj()
s=!s.b.test(c)}else s=!1
if(s)return"a MICR code is 9 digits"
if(a!=null)s=B.b.H(a).length===0||a.length>80
else s=!1
if(s)return"a branch name is 1 to 80 characters"
if(d!=null){r=A.C("\\d",!0,!1).aM(0,d).gq(0)
if(r>6)return"the number as statements show it keeps at most 6 digits; type X for the rest"
s=$.Hp()
if(!s.b.test(d)||r===0)return"the number as statements show it is its digits shown, with X for each hidden one"}return null},
eN(a){var s,r,q,p,o,n,m,l,k,j,i,h="the alias must look like EXAMPLEBANK-CC-1234 (last 4 digits only)",g=a.b,f=A.c([a.a,g,a.c,a.f],t.s),e=a.z
if(e!=null)f.push(e)
e=a.fy
if(e!=null)f.push(e)
if(B.a.N(f,A.F7()))return"an entry looks like a full card or account number; only the last 4 digits are kept"
f=a.d
s=f===B.x
r=$.H_()
if(s!==r.b.test(g))return s?"a cash wallet is named CASH and its currency":h
if(!s){s=$.Hi()
g=!s.b.test(g)}else g=!1
if(g)return h
g=a.e
if(!B.e.D(g))return"currency "+g+" is not supported"
q=A.Fe(e,a.fr,a.fx,a.go)
if(q!=null)return q
A:{p=a.dy
if(B.cq===p||B.cr===p)e=f!==B.M||g!=="INR"
else e=!1
if(e)return p.c+" is a savings account in INR"
if(B.be===p&&f!==B.a5)return"SRS is a retirement account"
break A}o=a.x
if(o!=null)e=f!==B.y||o<1||o>31
else e=!1
if(e)return"a billing day is 1 to 31 and only for a credit card"
n=a.as
if(n!=null){if(f!==B.o)return"loan details are only for a loan"
m=A.FE(n,g)
if(m!=null)return m}l=a.at
if(l!=null){if(!a.gaS())return"a minimum balance is only for a savings or current account"
if(l.b!==g)return"the minimum balance must be in "+g
if(l.a.l(0,$.M())<0)return"a minimum balance is zero or more"}k=a.ax
if(k!=null){m=A.Nf(k,f)
if(m!=null)return m}j=a.y
if(j!=null&&j<1)return"the stale window is at least 1 day"
g=a.db==null
i=g?a.ay:a.dx
f=i==null
if(!f&&i.a===B.al&&g){if(a.gaS())return"a start from a folder year is only for a card or a loan"
g=i.b
g.toString
if(!a.w.J(0,new A.B(g,1,1)))return"a folder-year start is 1 January of that year"
if(a.ch==null)return"a folder-year start needs the account's Drive folder"}g=f?null:i.c
f=a.ch
if(B.a.N(A.c([g,f==null?null:f.b],t.q),new A.vH()))return"a folder path looks like it holds a full card or account number"
return null},
cb:function cb(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c){this.c=a
this.a=b
this.b=c},
br:function br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6
_.go=a7},
vH:function vH(){},
IY(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a7.h(0,"currency")
a6.toString
A.d(a6)
s=A.n(a7.h(0,"reconciledAtUtc"))
r=A.n(a7.h(0,"minimumDue"))
q=A.n(a7.h(0,"dueDate"))
p=a7.h(0,"statementId")
p.toString
A.d(p)
o=a7.h(0,"accountId")
o.toString
A.d(o)
n=a7.h(0,"periodStart")
n.toString
n=A.ax(A.d(n))
m=a7.h(0,"periodEnd")
m.toString
m=A.ax(A.d(m))
l=a7.h(0,"opening")
l.toString
l=A.a3(A.ah(A.d(l)),a6)
k=a7.h(0,"closing")
k.toString
k=A.a3(A.ah(A.d(k)),a6)
j=s==null?a5:A.c_(s).F()
a6=r==null?a5:A.a3(A.ah(r),a6)
i=q==null?a5:A.ax(q)
h=A.n(a7.h(0,"ocrEngine"))
g=a7.h(0,"ocrRowsChecked")
A:{if(t.j.b(g)){f=A.c([],t.Dk)
for(e=J.S(g),d=t.f,c=t.N,b=t.X;e.n();){a=e.gt()
a.toString
a0=d.a(a).G(0,c,b)
a1=a0.h(0,"lineId")
a1.toString
A.d(a1)
a2=a0.h(0,"field")
a2.toString
A.d(a2)
a3=a0.h(0,"ocr")
a3.toString
A.d(a3)
a0=a0.h(0,"owner")
a0.toString
f.push(new A.l4(a1,a2,a3,A.d(a0)))}break A}f=a5
break A}e=A.c([],t.Ev)
d=t.jS.a(a7.h(0,"loans"))
d=J.S(d==null?B.aZ:d)
c=t.f
b=t.N
a0=t.X
while(d.n()){a4=d.gt()
a4.toString
e.push(A.DY(c.a(a4).G(0,b,a0)))}return new A.c7(p,o,n,m,l,k,j,a6,i,h,f,e)},
Fr(a,b,c){var s=c.aG(-30)
return a.ce(b).N(0,new A.yS(s))},
Nc(a,b){var s,r,q,p,o,n,m=a.ax
switch(m==null?null:m.c){case B.cb:return 31
case B.cc:return 92
case B.cd:return 184
case B.ce:return 366
case null:case void 0:break}m=J.HP(b)
s=A.D(m,A.p(m).c)
B.a.E(s,new A.AT())
m=s.length
r=m>7?B.a.du(s,m-6-1):s
if(r.length<2)return 31
m=A.c([],t.t)
for(q=1;q<r.length;++q){p=r[q-1]
o=r[q]
o=A.b(o.a,o.b,o.c)
p=A.b(p.a,p.b,p.c)
m.push(B.d.u(o.b-p.b+1000*(o.a-p.a),864e8))}B.a.b9(m)
n=m.length
p=B.d.u(n-1,2)
if(!(p>=0&&p<n))return A.a(m,p)
p=m[p]
o=n/2|0
if(!(o<n))return A.a(m,o)
return B.d.u(p+m[o]+1,2)},
Fd(a,b,c,d,e){var s,r,q,p
for(s=J.S(c),r=null;s.n();){q=s.gt()
if(r==null||A.b(q.a,q.b,q.c).l(0,A.b(r.a,r.b,r.c))>0)r=q}if(r==null)return!0
p=B.d.u(A.b(e.a,e.b,e.c).ar(A.b(r.a,r.b,r.c)).a,864e8)
if(d){s=a.y
return p>(s==null?b:s)}return p>A.Nc(a,c)+10},
Nn(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=a5.fx,a0=t.v,a1=A.aE(a,a0),a2=A.L(a1),a3=a2.i("o<1>"),a4=A.D(new A.o(a1,a2.i("k(1)").a(new A.B_(a6)),a3),a3.i("i.E"))
B.a.E(a4,new A.B0())
s=a4.length===0?d:B.a.gau(a4)
for(a=A.aE(a,a0),a0=A.L(a),a1=a0.i("k(1)").a(new A.B1(a6)),a=B.a.gB(a),a0=new A.O(a,a1,a0.i("O<1>")),r=d;a0.n();){a1=a.gt()
a2=!0
if(r!=null){a3=a1.r
q=a3.a
p=r.a
if(q<=p)a2=q===p&&a3.b>r.b}if(a2)r=a1.r}a=a6.a
a0=a5.ce(a)
o=A.D(a0,a0.$ti.i("i.E"))
for(a0=a5.hm(a,!0),a1=J.S(a0.a),a0=new A.O(a1,a0.b,a0.$ti.i("O<1>")),n=d;a0.n();){m=a1.gt().y.c
a2=!0
if(n!=null){a3=m.a
q=n.a
if(a3<=q)a2=a3===q&&m.b>n.b}if(a2)n=m}a0=a6.e
a1=$.M()
l=A.a3(a1,a0)
k=A.a3(a1,a0)
for(a1=a5.ce(a),a2=a1.$ti,a3=a2.i("k(i.E)").a(new A.B2(a6)),a1=a1.gB(0),a2=new A.O(a1,a3,a2.i("O<i.E>")),j=0,i=0;a2.n();){a3=a1.gt()
if(A.jH(a3)!==B.ak)continue;++j
q=a3.f
p=q.b
if(p!==a0)++i
else if(a3.e===B.j){a3=l.b
if(p!==a3)A.h(A.a7(a3,p))
q=l.a.C(0,q.a)
l=new A.q(q,a3)
h=B.e.h(0,a3)
if(h==null)A.h(A.x(a3,c,b))
if((q.b<=0?0:Math.max(q.gA().b,0))>h)A.h(A.y(a3+" allows "+A.j(h)+" decimal places",q.k(0),d))}else{a3=k.b
if(p!==a3)A.h(A.a7(a3,p))
q=k.a.C(0,q.a)
k=new A.q(q,a3)
h=B.e.h(0,a3)
if(h==null)A.h(A.x(a3,c,b))
if((q.b<=0?0:Math.max(q.gA().b,0))>h)A.h(A.y(a3+" allows "+A.j(h)+" decimal places",q.k(0),d))}}g=A.aB(a8,B.q)
a0=s==null
f=a0?d:s.d
a0=a0?d:s.f
a1=A.c([],t.xQ)
for(a2=a4.length,e=0;e<a4.length;a4.length===a2||(0,A.m)(a4),++e)a1.push(a4[e].d)
a=A.Fd(a6,a7,a1,A.Fr(a5,a,g),g)
if(f!=null){a1=A.L(o)
new A.o(o,a1.i("k(1)").a(new A.B3(f)),a1.i("o<1>")).gq(0)}return new A.mT(a0,f,a,j,l,k)},
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
mT:function mT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.f=c
_.w=d
_.x=e
_.y=f},
yS:function yS(a){this.a=a},
AT:function AT(){},
B_:function B_(a){this.a=a},
B0:function B0(){},
B1:function B1(a){this.a=a},
B2:function B2(a){this.a=a},
B3:function B3(a){this.a=a},
Nu(a){var s,r,q=A.w(t.N,t.S)
for(s=J.S(a);s.n();){r=s.gt()
if(r.d!==B.x)q.mU(r.f,new A.Be(),new A.Bf())}if(q.a===0)return null
s=q.$ti.i("ac<1,2>")
s=A.D(new A.ac(q,s),s.i("i.E"))
B.a.E(s,new A.Bg())
return B.a.ga0(s).a},
cl:function cl(a,b){this.a=a
this.b=b},
Be:function Be(){},
Bf:function Bf(){},
Bg:function Bg(){},
tW(a){var s,r=null,q=a.h(0,"kind")
q.toString
switch(A.ai(B.ke,A.d(q),t.qe)){case B.al:q=a.h(0,"year")
q.toString
A.R(q)
s=a.h(0,"folder")
s.toString
s=new A.hi(B.al,q,A.d(s),r)
q=s
break
case B.c9:q=a.h(0,"statementId")
q.toString
q=new A.hi(B.c9,r,r,A.d(q))
break
case B.ca:q=B.me
break
default:q=r}return q},
Dn(a){var s,r=a.h(0,"id")
r.toString
A.d(r)
s=a.h(0,"path")
s.toString
return new A.ko(r,A.d(s))},
eC:function eC(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a,b){this.a=a
this.b=b},
DZ(a){var s,r,q
if(a.h(0,"source")==null)s=null
else{s=a.h(0,"source")
s.toString
s=A.ai(B.jB,A.d(s),t.u4)}if(a.h(0,"format")==null)r=null
else{r=a.h(0,"format")
r.toString
r=A.ai(B.jc,A.d(r),t.nT)}if(a.h(0,"cycle")==null)q=null
else{q=a.h(0,"cycle")
q.toString
q=A.ai(B.iU,A.d(q),t.Bu)}return new A.lx(s,r,q,A.aG(a.h(0,"day")))},
Nf(a,b){var s=a.d
if(s==null)return null
if(b===B.y)return"a card has no statement day; its billing cycle day is the closing day"
if(s<1||s>31)return"the statement day is 1 to 31"
return null},
eE:function eE(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
lx:function lx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M4(a){var s
if(!B.a.N(B.jb,new A.y8(a)))return"a fact is an identity or a helper fact"
s=a.d
if(B.b.H(s).length===0)return"a fact has a value"
if(B.a.N(A.c([a.b,a.c,s,a.f.c],t.s),new A.y9()))return"a fact looks like it holds a full number; only the last 4 characters are kept"
return null},
du:function du(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
y8:function y8(a){this.a=a},
y9:function y9(){},
ET(a){var s,r,q,p={}
p.a=4
s=t.q6
r=s.i("aj<a5.E,f>")
q=A.D(new A.aj(new A.aP(A.c(a.split(""),t.s),s),s.i("f(a5.E)").a(new A.vp(p)),r),r.i("a5.E"))
return new A.aP(q,A.L(q).i("aP<1>")).cd(0)},
EU(a){return A.hK(a,$.H0(),t.tj.a(t.n.a(new A.vs())),null)},
za(a){var s,r,q,p,o,n,m,l,k,j
for(s=$.H7(),r=t.n,q=t.tj,p=a,o=0;o<3;++o)p=A.hK(p,s[o],q.a(r.a(new A.zb())),null)
for(s=$.Hu().aM(0,p),s=new A.fv(s.a,s.b,s.c),r=t.ez,n=0,q="";s.n();q=j){m=s.d
l=(m==null?r.a(m):m).b
k=l.index
j=A.EU(B.b.X(p,n,k))
if(0>=l.length)return A.a(l,0)
j=q+j+A.j(l[0])
n=k+l[0].length}s=q+A.EU(B.b.ac(p,n))
return s.charCodeAt(0)==0?s:s},
vp:function vp(a){this.a=a},
vs:function vs(){},
zb:function zb(){},
tr:function tr(a,b,c){this.a=a
this.b=b
this.c=c},
Lm(a,b){var s
switch(b){case null:case void 0:s=a===B.cu||a===B.bj
break
case B.bf:s=B.ma.v(0,a)
break
case B.cs:s=a!==B.bi&&a!==B.bj
break
default:s=null}return s},
Ch(c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="currency",c1="is not a supported currency",c2=A.c([],t.eR),c3=c7.gK().gS(),c4=A.p(c3),c5=c4.i("o<i.E>"),c6=A.D(new A.o(c3,c4.i("k(i.E)").a(new A.xs(c8)),c5),c5.i("i.E"))
B.a.E(c6,new A.xt())
for(c3=c6.length,c4=c7.x2,c5=t.N,s=t.d6,r=t.s,q=t.h,p=c7.fy,o=t.dh,n=t.W,m=c7.fx,l=t.v,k=0;k<c6.length;c6.length===c3||(0,A.m)(c6),++k){j=c6[k]
i=A.d_(m,!1,l)
i.$flags=3
h=i
g=A.L(h)
f=g.i("o<1>")
e=A.D(new A.o(h,g.i("k(1)").a(new A.xu(j)),f),f.i("i.E"))
B.a.E(e,new A.xv())
h=j.a
g=c7.ce(h)
f=g.$ti
g=A.D(new A.o(g,f.i("k(i.E)").a(new A.xw()),f.i("o<i.E>")),n)
B.a.a1(g,A.K6(c7,j))
B.a.E(g,new A.xx())
i=A.d_(p,!1,o)
i.$flags=3
f=i
d=A.L(f)
c=d.i("o<1>")
b=A.D(new A.o(f,d.i("k(1)").a(new A.xy(j,c7)),c),c.i("i.E"))
f=A.a4(q)
for(d=e.length,a=0;a<e.length;e.length===d||(0,A.m)(e),++a)f.m(0,e[a].d)
for(d=b.length,a=0;a<b.length;b.length===d||(0,A.m)(b),++a){a0=b[a]
c=a0.d
f.m(0,c==null?a0.c:c)}a1=A.D(f,f.$ti.c)
B.a.b9(a1)
a2=new A.xA(a1)
a3=A.LZ(j)
for(f=e.length,a=0;a<e.length;e.length===f||(0,A.m)(e),++a){a4=e[a]
d=a4.d
c=a4.f
a5=c.b
a6=A.EG(g,d,a2.$1(d),a5)
a7=A.F4(a6,a5)
c=c.a
a8=c.a
if(a8.ga7(0)<0){c=c.b
a8=new A.P(a8.R(0),c)
a9=new A.q(a8,a5)
b0=B.e.h(0,a5)
if(b0==null)A.h(A.x(a5,c0,c1))
if((c<=0?0:Math.max(a8.gA().b,0))>b0)A.h(A.y(a5+" allows "+A.j(b0)+" decimal places",a8.k(0),b9))}else{c=$.M()
a9=new A.q(c,a5)
b0=B.e.h(0,a5)
if(b0==null)A.h(A.x(a5,c0,c1))
if((c.b<=0?0:Math.max(c.gA().b,0))>b0)A.h(A.y(a5+" allows "+A.j(b0)+" decimal places",c.k(0),b9))}c="statement:"+a4.a
a5=a7.b
a8=a9.b
if(a5!==a8)A.h(A.a7(a8,a5))
a5=a7.a
a5=a9.a.C(0,new A.P(a5.a.R(0),a5.b))
b1=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.h(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b0)A.h(A.y(a8+" allows "+A.j(b0)+" decimal places",a5.k(0),b9))
if(a5.a.ga7(0)<0){a5=$.M()
b2=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.h(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b0)A.h(A.y(a8+" allows "+A.j(b0)+" decimal places",a5.k(0),b9))
a5=b2}else a5=b1
a8=A.c([],r)
for(b2=a6.length,b3=0;b3<a6.length;a6.length===b2||(0,A.m)(a6),++b3)a8.push(a6[b3].a)
B.a.m(c2,new A.ce(c,h,d,a9,a4.x,a7,a5,!0,a8,A.a6(c4,c5,s).h(0,c),a2.$1(d)==null,a3))}for(f=b.length,b4=j.e,a=0;a<b.length;b.length===f||(0,A.m)(b),++a){a0=b[a]
b5=a0.e
b6=a0.d
b7=b6==null?a0.c:b6
d=b5==null
b8=d?b9:b5.b
if(b8==null)b8=b4
a6=A.EG(g,b7,a2.$1(b7),b8)
a7=A.F4(a6,b8)
c="notice:"+a0.a
if(d)d=b9
else{d=b5.a
a5=a7.b
a8=b5.b
if(a5!==a8)A.h(A.a7(a8,a5))
a5=a7.a
a5=d.C(0,new A.P(a5.a.R(0),a5.b))
b1=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.h(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b0)A.h(A.y(a8+" allows "+A.j(b0)+" decimal places",a5.k(0),b9))
if(a5.a.ga7(0)<0){d=$.M()
a5=new A.q(d,a8)
b0=B.e.h(0,a8)
if(b0==null)A.h(A.x(a8,c0,c1))
if((d.b<=0?0:Math.max(d.gA().b,0))>b0)A.h(A.y(a8+" allows "+A.j(b0)+" decimal places",d.k(0),b9))
d=a5}else d=b1}a5=A.c([],r)
for(a8=a6.length,b3=0;b3<a6.length;a6.length===a8||(0,A.m)(a6),++b3)a5.push(a6[b3].a)
B.a.m(c2,new A.ce(c,h,b6,b5,a0.r,a7,d,a0.w,a5,A.a6(c4,c5,s).h(0,c),a2.$1(b7)==null,a3))}}B.a.E(c2,new A.xz())
return c2},
LZ(a){var s=a.ax,r=s==null?null:s.c
A:{if(B.cc===r){s=93
break A}if(B.cd===r){s=186
break A}if(B.ce===r){s=372
break A}if(B.cb===r||r==null){s=31
break A}s=null}return s},
EG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=A.c([],t.A)
for(s=a.length,r=b.a,q=b.b,p=b.c,o=c!=null,n=0;n<a.length;a.length===s||(0,A.m)(a),++n){m=a[n]
l=!1
if(m.f.b===d){k=m.w
j=k.a
i=k.b
k=k.c
if(A.b(j,i,k).l(0,A.b(r,q,p))>0)l=!o||A.b(j,i,k).l(0,A.b(c.a,c.b,c.c))<=0}if(l)h.push(m)}return h},
F4(a,b){return B.a.a5(a,A.a3($.M(),b),new A.vB(),t.B)},
K6(a,b){var s,r,q,p=A.C("[^A-Z0-9]",!0,!1),o=A.a8(b.c.toUpperCase(),p,"")
if(o.length===0)return B.aa
p=a.gK().gS()
s=A.p(p)
r=s.i("o<i.E>")
q=A.D(new A.o(p,s.i("k(i.E)").a(new A.vg(o)),r),r.i("i.E"))
p=a.b1()
s=p.$ti
return new A.o(p,s.i("k(i.E)").a(new A.vh(a,q,b,o)),s.i("o<i.E>"))},
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l},
cd:function cd(a,b){this.a=a
this.b=b},
eg:function eg(a,b){this.a=a
this.b=b},
xs:function xs(a){this.a=a},
xt:function xt(){},
xu:function xu(a){this.a=a},
xv:function xv(){},
xw:function xw(){},
xx:function xx(){},
xy:function xy(a,b){this.a=a
this.b=b},
xA:function xA(a){this.a=a},
xz:function xz(){},
vB:function vB(){},
vg:function vg(a){this.a=a},
vh:function vh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vd:function vd(a){this.a=a},
ve:function ve(){},
vf:function vf(a){this.a=a},
IX(a){var s,r,q,p,o=a.h(0,"currency")
o.toString
o=new A.u_(a,A.d(o))
s=new A.tZ(a)
r=a.h(0,"noticeId")
r.toString
A.d(r)
q=a.h(0,"accountId")
q.toString
A.d(q)
p=a.h(0,"receivedOn")
p.toString
return new A.cG(r,q,A.ax(A.d(p)),s.$1("statementDate"),o.$1("balance"),o.$1("minimumDue"),s.$1("dueDate"),!1)},
cG:function cG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
u_:function u_(a,b){this.a=a
this.b=b},
tZ:function tZ(a){this.a=a},
cN(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Hb().aj(a):m
if(l==null)return m
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.Z(r,m,m)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.Z(r,m,m)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.Z(s,m,m)
n=A.b(q,p,o)
return A.b_(n)===q&&A.b4(n)===p&&A.av(n)===o?new A.B(q,p,o):m},
La(e1,e2,e3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8="bookId",c9="currency",d0=null,d1="yearStartMonth",d2="id",d3="accountId",d4="source",d5="rent",d6="an amount in rupees, zero or more",d7="deposited",d8="withdrawnOn",d9=e3.e,e0=new A.vM(e1)
switch(e3.d){case"book.settings":s=d9.h(0,c8)
if(!e0.$1(s))return"no book "+A.j(s)
r=e2.a
q=r.h(0,s)
if(d9.D(c9))p=A.n(d9.h(0,c9))
else p=q==null?d0:q.b
if(d9.D(d1))o=A.aG(d9.h(0,d1))
else o=q==null?d0:q.c
if(p!=null&&!B.e.D(p))return"currency "+p+" is not supported"
if(o!=null)n=o<1||o>12
else n=!1
if(n)return"a financial year starts in month 1 to 12"
r.j(0,A.d(s),new A.jX(p,o))
break
case"subscription.set":r=d9.h(0,d2)
r.toString
A.d(r)
n=d9.h(0,c8)
n.toString
A.d(n)
m=d9.h(0,"vendor")
m.toString
m=B.b.H(A.d(m))
l=d9.h(0,"item")
l.toString
l=B.b.H(A.d(l))
k=d9.h(0,"kind")
k.toString
A.ai(B.j0,A.d(k),t.lG)
k=d9.h(0,"cycle")
k.toString
A.ai(B.jl,A.d(k),t.e4)
k=d9.h(0,"autoRenews")
k.toString
A.cK(k)
k=A.aG(d9.h(0,"quantity"))
if(d9.h(0,"price")==null)j=d0
else{j=d9.h(0,"price")
j.toString
j=A.aO(t.f.a(j).G(0,t.N,t.X))}A.cN(d9.h(0,"renewsOn"))
i=A.n(d9.h(0,d3))
if(!e0.$1(n)||n==="personal")return"a subscription is in a company's or the property's book"
if(m.length===0||l.length===0)return"a subscription names its vendor and item"
if((k==null?1:k)<1)return"a quantity is 1 or more"
if(j!=null&&j.a.a.ga7(0)<0)return"a price is zero or more"
h=i==null
g=h?d0:e1.gK().h(0,i)
if(!h)h=g==null||g.d===B.o
else h=!1
if(h)return"it is paid from a card or account"
e2.b.j(0,r,new A.hl(r,n,m,l,k,j,i))
break
case"subscription.remove":if(e2.b.Y(0,d9.h(0,d2))==null)return"no subscription "+A.j(d9.h(0,d2))
break
case"invoice.record":r=d9.h(0,d2)
r.toString
A.d(r)
n=A.n(d9.h(0,c8))
m=d9.h(0,"vendor")
m.toString
m=B.b.H(A.d(m))
l=A.n(d9.h(0,"number"))
k=A.cN(d9.h(0,"date"))
k.toString
j=d9.h(0,"total")
j.toString
i=t.f
h=t.N
f=t.X
j=A.aO(i.a(j).G(0,h,f))
e=A.n(d9.h(0,"categoryId"))
d=d9.h(0,d4)
d.toString
A.d(d)
c=A.n(d9.h(0,"parserVersion"))
if(d9.h(0,d5)==null)b=d0
else{a=d9.h(0,d5)
a.toString
a=i.a(a).G(0,h,f)
a0=a.h(0,d5)
a0.toString
a0=A.aO(i.a(a0).G(0,h,f))
a1=a.h(0,"gst")
a1.toString
a1=A.aO(i.a(a1).G(0,h,f))
a=a.h(0,"tds")
a.toString
b=new A.iP(a0,a1,A.aO(i.a(a).G(0,h,f)))}i=n!=null
if(i&&!e0.$1(n))return"no book "+n
if(m.length===0)return"an invoice names its vendor"
if(j.a.a.ga7(0)<=0)return"an invoice total is more than zero"
f=e==null
a2=f?d0:A.a6(e1.d,h,t.G).h(0,e)
if(!f)if(a2!=null)i=i&&a2.b!==e1.bT(n)
else i=!0
else i=!1
if(i)return"an invoice's category belongs to its book"
if(b!=null){i=b.a
h=b.b
if(B.a.N(A.c([i,h,b.c],t.g),new A.vN(j.b)))return"a rent invoice's parts are zero or more, in its currency"
if(!i.C(0,h).J(0,j))return"rent and GST add up to the invoice (PH-08)"
if(a2!=null&&!A.hG(a2))return"rent is filed under an income category"}else if(a2!=null&&A.hG(a2))return"a vendor's invoice is filed under a spending category"
e2.c.j(0,r,new A.fa(r,n,m,l,k,j,e,d,c,b))
break
case"date.entered":s=d9.h(0,d2)
if(typeof s!="string")return"a date needs an id"
if(J.a2(d9.h(0,"removed"),!0)){if(e2.e.Y(0,s)==null)return"no date "+s
return d0}a3=A.cN(d9.h(0,"date"))
a4=d9.h(0,"title")
a5=d9.h(0,d4)
if(!e0.$1(d9.h(0,c8))||a3==null||typeof a4!="string"||B.b.H(a4).length===0)return"a date needs a book, a title and a real date"
if(typeof a5!="string"||B.b.H(a5).length===0)return"a date states its source (PH-04)"
r=d9.h(0,c8)
r.toString
A.d(r)
n=B.b.H(a4)
B.b.H(a5)
e2.e.j(0,s,new A.cV(r,n,a3,A.n(d9.h(0,"topic"))))
break
case"remittance.confirm":s=d9.h(0,"outflowId")
a6=A.dr(A.j(d9.h(0,"rate")))
a7=typeof s=="string"?e1.b.a.h(0,s):d0
if(a7==null||a7.ch==null)return"a confirmation is for a paired remittance"
if(a6==null||a6.l(0,$.M())<=0)return"a rate is more than zero"
if(d9.h(0,"fee")==null)a8=d0
else{r=d9.h(0,"fee")
r.toString
a8=A.aO(t.f.a(r).G(0,t.N,t.X))}if(a8!=null&&a8.a.a.ga7(0)<0)return"a fee is zero or more"
e2.f.j(0,a7.a,new A.lk())
break
case"indiaTax.entry":s=d9.h(0,d2)
a9=d9.h(0,"fyStart")
a5=d9.h(0,d4)
b0=A.aN(new A.o(B.jE,t.wx.a(new A.vO(d9)),t.km),t.nq)
if(typeof s!="string"||!A.cL(a9)||b0==null||typeof a5!="string"||B.b.H(a5).length===0)return"an entry needs its year, what it is and its source"
if(d9.h(0,"amount")==null)b1=d0
else{r=d9.h(0,"amount")
r.toString
b1=A.aO(t.f.a(r).G(0,t.N,t.X))}b2=A.n(d9.h(0,"document"))
r=b0===B.cQ
if(r)n=b2==null||B.b.H(b2).length===0
else n=b1==null
if(n)return r?"name the document":"an amount from the certificate"
if(b1!=null)r=b1.b!=="INR"||b1.a.a.ga7(0)<0
else r=!1
if(r)return d6
if(b0===B.cR){b3=A.n(d9.h(0,"deductor"))
b4=A.aG(d9.h(0,"quarter"))
b5=A.n(d9.h(0,"certificateLast4"))
if(d9.h(0,"paid")==null)b6=d0
else{r=d9.h(0,"paid")
r.toString
b6=A.aO(t.f.a(r).G(0,t.N,t.X))}if(d9.h(0,d7)==null)b7=d0
else{r=d9.h(0,d7)
r.toString
b7=A.aO(t.f.a(r).G(0,t.N,t.X))}r=!0
if(b3!=null)if(B.b.H(b3).length!==0){r=A.C("\\d{5}",!0,!1)
r=r.b.test(b3)}if(r)return"name the deductor"
if(b4==null||b4<1||b4>4)return"a quarter from 1 to 4"
if(b5!=null){r=A.C("^[A-Za-z0-9]{1,4}$",!0,!1)
r=!r.b.test(b5)}else r=!0
if(r)return"a certificate keeps its number's last 4"
for(r=[b6,b7],b8=0;b8<2;++b8){b9=r[b8]
if(b9==null||b9.b!=="INR"||b9.a.a.ga7(0)<0)return d6}}else b3=d0
B.b.H(a5)
if(b2!=null)B.b.H(b2)
A.cN(d9.h(0,"on"))
if(b3!=null)B.b.H(b3)
e2.r.j(0,s,new A.kE())
break
case"account.sourceOnly":g=e1.gK().h(0,d9.h(0,d3))
c0=d9.h(0,"memberId")
c1=A.cN(d9.h(0,"consentOn"))
if(g!=null){r=g.d
r=r===B.o||r===B.x}else r=!0
if(r)return"a source-only account is a bank account"
if(typeof c0!="string"||!A.a6(e1.p3,t.N,t.o).D(c0))return"name the holder as a household member"
if(c1==null)return"the date the holder agreed (PH-07)"
c2=A.cN(d9.h(0,d8))
if(d9.h(0,d8)!=null)r=c2==null||A.b(c2.a,c2.b,c2.c).l(0,A.b(c1.a,c1.b,c1.c))<0
else r=!1
if(r)return"a withdrawal is on or after the consent"
e2.w.j(0,g.a,new A.lu())
break
case"loan.joint":g=e1.gK().h(0,d9.h(0,d3))
c3=d9.h(0,"joint")
if(g==null||g.d!==B.o||!A.ea(c3))return"only a loan is jointly held"
r=e2.x
n=g.a
if(c3)r.m(0,n)
else r.Y(0,n)
break
case"statement.sourceRead":s=d9.h(0,"statementId")
c4=A.cN(d9.h(0,"periodStart"))
c5=A.cN(d9.h(0,"periodEnd"))
c6=d9.h(0,d3)
if(typeof s!="string"||typeof c6!="string"||!e2.w.D(c6)||c4==null||c5==null)return"a source-only statement names its account and period"
r=e2.z
if(r.D(s))return"statement "+s+" is already read"
r.j(0,s,new A.jh(c6,c4,c5))
break
case"book.owedMentioned":s=d9.h(0,c8)
c7=d9.h(0,"month")
if(!e0.$1(s)||typeof c7!="string")return"a book and a month"
e2.Q.m(0,A.j(s)+"|"+c7)
break
default:return"not a book record operation"}return d0},
jX:function jX(a,b){this.b=a
this.c=b},
eF:function eF(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.w=e
_.x=f
_.z=g},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
cV:function cV(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.f=d},
lk:function lk(){},
bW:function bW(a,b){this.a=a
this.b=b},
kE:function kE(){},
lu:function lu(){},
lv:function lv(){},
n0:function n0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
vM:function vM(a){this.a=a},
vN:function vN(a){this.a=a},
vO:function vO(a){this.a=a},
G1(a){var s=a<0?"-":"",r=Math.abs(a)
return A.a3(A.ah(s+B.d.u(r,100)+"."+B.b.aa(""+B.d.T(r,100),2,"0")),"SGD")},
Db(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){return new A.dp(j,e,g,i,k,a2,a1,s,q,n,m,h,f,c,a0,r,l,p,o,a3,a,d,b)},
I4(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a5.c,a4=a3.h(0,"draftId")
a4.toString
A.d(a4)
s=a3.h(0,"bookId")
s.toString
A.d(s)
r=a3.h(0,"customerId")
r.toString
A.d(r)
q=A.aA(a3.h(0,"date"))
q.toString
p=A.aA(a3.h(0,"due"))
p.toString
o=a3.h(0,"seriesId")
o.toString
A.d(o)
n=a3.h(0,"seq")
n.toString
A.R(n)
m=a3.h(0,"number")
m.toString
A.d(m)
l=A.c([],t.Aq)
k=a3.h(0,"lines")
k.toString
k=J.dg(t.j.a(k),t.mE)
j=k.$ti
k=new A.ad(k,k.gq(0),j.i("ad<Q.E>"))
i=t.N
h=t.X
j=j.i("Q.E")
while(k.n()){g=k.d
g=(g==null?j.a(g):g).G(0,i,h)
f=g.h(0,"description")
f.toString
A.d(f)
e=g.h(0,"quantity")
e.toString
e=A.ah(A.d(e))
d=g.h(0,"unitPrice")
d.toString
A.R(d)
c=g.h(0,"amount")
c.toString
l.push(new A.cf(f,e,d,A.R(c),A.n(g.h(0,"gst"))))}k=A.aG(a3.h(0,"gstPercent"))
j=a3.h(0,"gst")
j.toString
A.R(j)
i=a3.h(0,"customerName")
i.toString
A.d(i)
h=a3.h(0,"customerAddress")
h.toString
A.d(h)
g=A.n(a3.h(0,"attention"))
f=A.n(a3.h(0,"reference"))
e=A.n(a3.h(0,"note"))
d=A.n(a3.h(0,"footer"))
c=a3.h(0,"issuerName")
c.toString
A.d(c)
b=a3.h(0,"issuerAddress")
b.toString
A.d(b)
a=a3.h(0,"uenLast4")
a.toString
A.d(a)
a0=a3.h(0,"accountId")
a0.toString
A.d(a0)
a1=a3.h(0,"bankName")
a1.toString
A.d(a1)
a2=a3.h(0,"accountLast4")
a2.toString
return A.Db(a0,A.d(a2),g,a1,s,h,r,i,q,a4,p,d,j,k,b,c,l,e,m,f,n,o,a)},
mB(a,b){var s,r,q,p,o=A.c([],t.Z)
for(s=a.ab.b2(B.aq),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
if(A.n(p.c.h(0,"draftId"))===b)o.push(p)}B.a.E(o,new A.y3())
return o},
Ml(a,b){var s,r,q,p,o,n=A.c([],t.Z)
for(s=a.ab.b2(B.a8),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=A.n(p.c.h(0,"bookId"))
if(o===b)n.push(p)}B.a.E(n,new A.yX())
return n},
LK(a,b){var s,r,q,p,o,n=A.c([],t.h5)
for(s=a.ab.b2(B.a7),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=A.n(p.c.h(0,"bookId"))
if(o===b)n.push(A.I4(p))}B.a.E(n,new A.xG())
return n},
LJ(a,b){var s,r,q,p=a.ab,o=p.a6(B.a8,b)
if(o==null)return B.k_
s=o.c
r=A.n(s.h(0,"bookId"))
r.toString
q=A.c([],t.s)
if(p.a6(B.ar,r)==null)q.push("The company's invoice issuer")
s=A.n(s.h(0,"customerId"))
s.toString
if(p.a6(B.a4,s)==null)q.push("The customer")
if(A.mB(a,b).length===0)q.push("At least one line")
return q},
Fk(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8="quantity",a9="unitPrice",b0="currency",b1="is not a supported currency",b2="paymentDays",b3=A.LJ(b4,b5)
if(b3.length!==0)return new A.r(a7,b3)
s=b4.ab
r=s.a6(B.a8,b5).c
q=A.n(r.h(0,"bookId"))
q.toString
p=s.a6(B.ar,q)
p.toString
o=A.n(r.h(0,"customerId"))
o.toString
o=s.a6(B.a4,o)
o.toString
p=p.c
n=J.a2(p.h(0,"gstRegistered"),!0)
m=A.c([],t.Aq)
for(l=A.mB(b4,b5),k=l.length,j=t.f,i=t.N,h=t.X,g=0;g<l.length;l.length===k||(0,A.m)(l),++g){f=l[g].c
e=A.n(f.h(0,"description"))
e.toString
if(typeof f.h(0,a8)=="string"){d=f.h(0,a8)
d.toString
d=A.dr(A.d(d))}else d=a7
d.toString
if(j.b(f.h(0,a9))){c=f.h(0,a9)
c.toString
c=j.a(c).G(0,i,h)
b=c.h(0,"amount")
b.toString
b=A.ah(A.d(b))
c=c.h(0,b0)
c.toString
A.d(c)
a=new A.q(b,c)
a0=B.e.h(0,c)
if(a0==null)A.h(A.x(c,b0,b1))
if((b.b<=0?0:Math.max(b.gA().b,0))>a0)A.h(A.y(c+" allows "+A.j(a0)+" decimal places",b.k(0),a7))
c=a}else c=a7
b=c.a
c=c.b
a0=B.e.h(0,c)
if(a0==null)A.h(A.x(c,b0,b1))
c=new A.P(b.a,b.b-a0).aD().aE(0)
if(typeof f.h(0,a8)=="string"){b=f.h(0,a8)
b.toString
b=A.dr(A.d(b))}else b=a7
b.toString
if(j.b(f.h(0,a9))){a=f.h(0,a9)
a.toString
a=j.a(a).G(0,i,h)
a1=a.h(0,"amount")
a1.toString
a1=A.ah(A.d(a1))
a=a.h(0,b0)
a.toString
A.d(a)
a2=new A.q(a1,a)
a0=B.e.h(0,a)
if(a0==null)A.h(A.x(a,b0,b1))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>a0)A.h(A.y(a+" allows "+A.j(a0)+" decimal places",a1.k(0),a7))
a=a2}else a=a7
a1=a.a
a=a.b
a0=B.e.h(0,a)
if(a0==null)A.h(A.x(a,b0,b1))
b=new A.P(b.a.a_(0,A.aL(new A.P(a1.a,a1.b-a0).aD().aE(0))),b.b).C(0,A.ah("0.5")).cz(0,B.cn).aD().aE(0)
if(n){f=A.n(f.h(0,"gst"))
if(f==null)f="standard"}else f=a7
m.push(new A.cf(e,d,c,b,f))}a3=new A.o(m,t.qB.a(new A.xZ()),t.rb).a5(0,0,new A.y_(),t.S)
l=A.aA(r.h(0,"date"))
l.toString
k=A.n(p.h(0,"seriesId"))
k.toString
a4=A.CB(b4,k,l)
j=o.c
i=A.aG(j.h(0,b2))
a5=i==null?A.aG(p.h(0,b2)):i
if(a5==null)a5=30
i=b4.gK().h(0,A.n(p.h(0,"accountId")))
i.toString
h=l.aG(a5)
s=A.n(s.a6(B.ag,k).c.h(0,"pattern"))
s.toString
s=A.Cn(s,a4,A.hD(A.mD(l),"{fy}"),l.a)
f=n?9:a7
e=n?B.d.u(a3*9+50,100):0
d=A.n(j.h(0,"name"))
d.toString
c=A.n(j.h(0,"address"))
c.toString
j=A.n(j.h(0,"attention"))
b=A.n(r.h(0,"reference"))
r=A.n(r.h(0,"note"))
a=A.n(p.h(0,"footer"))
a1=A.n(p.h(0,"name"))
a1.toString
a2=A.n(p.h(0,"address"))
a2.toString
p=A.n(p.h(0,"uenLast4"))
p.toString
a6=i.b
return new A.r(A.Db(i.a,B.b.ac(a6,a6.length-4),j,i.c,q,c,o.b,d,l,b5,h,a,e,f,a2,a1,m,r,s,b,a4,k,p),B.c)},
Lb(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="company-invoice:",b="personal",a="company.income",a0=a3.e,a1=a0.h(0,"draftId")
if(typeof a1!="string")return"an invoice names its draft"
s=a2.ab
if(s.a6(B.a7,c+a1)!=null)return"that draft is already issued"
r=A.Fk(a2,a1)
q=r.a
if(q==null)return"not issued: "+B.a.Z(r.b,", ").toLowerCase()
p=q.w
if(p!==a0.h(0,"number")||q.gdv()+q.z!==a0.h(0,"total"))return"the invoice changed since it was shown; issue it again"
a0=A.c([],t.s)
for(o=t.N,n=A.a6(a2.d,o,t.G).gS(),n=n.gB(n),m=q.b,l=a2.f,k=m==="personal";n.n();){j=n.gt()
i=j.b
h=l.h(0,m)
if(h==null)h=k?b:d
g=!1
if(i===(h==="member"?b:h)){i=j.a
if(!(i==="income"||B.b.bF(i,".income"))){i=j.d
if(i!=null)i=i==="income"||B.b.bF(i,".income")
else i=g}else i=!0}else i=g
if(i)a0.push(j.a)}B.a.b9(a0)
n=c+q.a
s.f2(new A.b3(B.a7,n,q.f9()))
for(l=A.mB(a2,a1),k=l.length,j=s.a,f=0;f<l.length;l.length===k||(0,A.m)(l),++f){e=l[f]
i=j.h(0,B.aq)
if(i!=null)i.Y(0,e.b)}s.lL(B.a8,a1)
s=q.Q
l=q.d
k=A.G1(q.gdv()+q.z)
a0=B.a.v(a0,a)?a:A.aN(a0,o)
a2.aJ.c.j(0,n,new A.fa(n,m,s,p,l,k,a0,"owner",d,d))
return d},
cf:function cf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dp:function dp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3},
nh:function nh(){},
y3:function y3(){},
yX:function yX(){},
xG:function xG(){},
xZ:function xZ(){},
y_:function y_(){},
LX(a){var s,r,q,p,o,n=A.w(t.N,t.C)
for(s=a.b1(),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>"));s.n();){q=r.gt()
p=q.ch
if(p!=null)J.bU(n.aK(p,new A.xQ()),q)}n.mJ(0,new A.xR())
o=A.c([],t.xI)
n.a2(0,new A.xS(o))
return o},
fN:function fN(a,b){this.a=a
this.b=b},
xQ:function xQ(){},
xR:function xR(){},
xP:function xP(){},
xS:function xS(a){this.a=a},
xM:function xM(){},
xN:function xN(){},
xO:function xO(){},
Fu(a,b){var s,r,q,p,o,n,m,l,k,j=A.c([],t.A),i=b.a,h=a.aJ.d.h(0,i)
h=J.S(h==null?B.c:h)
s=a.b.a
while(h.n()){r=s.h(0,h.gt())
if(r!=null)j.push(r)}q=b.f
p=A.a3($.M(),q.b)
for(h=j.length,o=0;o<j.length;j.length===h||(0,A.m)(j),++o){s=j[o].f
r=p.b
if(s.b===r){s=p.a.C(0,s.a)
p=new A.q(s,r)
n=B.e.h(0,r)
if(n==null)A.h(A.x(r,"currency","is not a supported currency"))
if((s.b<=0?0:Math.max(s.gA().b,0))>n)A.h(A.y(r+" allows "+A.j(n)+" decimal places",s.k(0),null))}}h=b.y
s=h==null
m=s?null:h.glT()
q=m==null?q:m
l=p.a.l(0,q.a)
if(b.b==null)k=B.cW
else if(j.length===0)k=B.fq
else{if(!s){if(l!==0)i=l>0&&A.K8(a,i)
else i=!0
i=i?B.bA:B.cY}else if(l<0)i=B.bz
else i=l===0?B.bA:B.cX
k=i}return new A.dE(b,p,k,B.a.N(j,new A.yY()))},
Mo(a){var s,r,q=A.c([],t.aW)
for(s=a.aJ.c,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>"));s.n();){r=s.d
q.push(A.Fu(a,r))}B.a.E(q,new A.yZ())
return q},
F5(a){var s,r,q=A.C("\\s+",!0,!1)
q=B.b.bN(B.b.H(A.a8(a.toUpperCase(),q," ")),A.C("[^A-Z0-9]+",!0,!1))
s=A.L(q)
r=s.i("o<1>")
q=A.D(new A.o(q,s.i("k(1)").a(new A.vE()),r),r.i("i.E"))
return q},
Nv(a,b){var s=A.aN(A.F5(a),t.N)
if(s==null||b==null)return!1
return B.a.v(A.F5(b),s)},
Mn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="currency",f="is not a supported currency",e=A.c([],t.M)
for(s=A.Mo(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.d
A:{if(B.cW===o){n="No rule places this bill in a book: pick its book."
break A}if(B.cX===o){n="Paid "+p.c.k(0)+" against an invoice of "+p.a.f.k(0)+"."
break A}if(B.cY===o){n=p.c.k(0)
m=p.a.y
l=m.a
k=m.b
j=k.b
i=l.b
if(j!==i)A.h(A.a7(i,j))
l=l.a.C(0,k.a)
h=B.e.h(0,i)
if(h==null)A.h(A.x(i,g,f))
if((l.b<=0?0:Math.max(l.gA().b,0))>h)A.h(A.y(i+" allows "+A.j(h)+" decimal places",l.k(0),null))
m=m.c
k=m.b
if(k!==i)A.h(A.a7(i,k))
m=m.a
m=l.C(0,new A.P(m.a.R(0),m.b))
h=B.e.h(0,i)
if(h==null)A.h(A.x(i,g,f))
if((m.b<=0?0:Math.max(m.gA().b,0))>h)A.h(A.y(i+" allows "+A.j(h)+" decimal places",m.k(0),null))
n="Received "+n+"; the invoice expects "+new A.q(m,i).k(0)+" (rent and GST, less the tax withheld)."
break A}if(B.bz===o&&p.e){n="The shares come to "+p.c.k(0)+" of "+p.a.f.k(0)+"."
break A}n=null
break A}if(n!=null){m=p.a
l=m.a
k=m.d
if(k==null)k=""
j=m.e.k(0)
e.push(new A.W("invoice:"+l,B.c3,l,A.a8(m.c+" "+k+" of "+j+": "+n,"  "," ")))}}return e},
K8(a,b){return B.a.N(a.ab.b2(B.ai),new A.vj(b))},
dD:function dD(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
yY:function yY(){},
yZ:function yZ(){},
vE:function vE(){},
vj:function vj(a){this.a=a},
LY(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.M)
for(s=A.LX(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.a
j.push(new A.W("cross-book:"+o,B.ad,o,"The two sides of a payment for another book disagree: "+p.b+"."))}s=A.w(t.N,t.W)
for(r=a.b1(),o=J.S(r.a),r=new A.O(o,r.b,r.$ti.i("O<1>"));r.n();){n=o.gt()
if(n.d===B.n&&n.ch!=null&&n.at!=null){m=n.ch
m.toString
s.j(0,m,n)}}for(r=a.b1(),o=r.$ti,n=o.i("k(i.E)").a(new A.xT()),r=r.gB(0),o=new A.O(r,n,o.i("O<i.E>"));o.n();){n=r.gt()
m=n.ch
l=s.h(0,m)
if(l!=null)k=l.b===n.at&&l.at===n.b
else k=!0
if(k)continue
m.toString
B.a.m(j,new A.W("cross-book-book:"+A.j(m),B.ad,m,"The advance names "+A.j(n.at)+", but its expense is in "+l.b+"."))}return j},
xT:function xT(){},
hG(a){var s=a.a
if(!(s==="income"||B.b.bF(s,".income"))){s=a.d
if(s!=null)s=s==="income"||B.b.bF(s,".income")
else s=!1}else s=!0
return s},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
MO(c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9=t.N,c0=t.cl,c1=A.w(b9,c0)
for(c0=A.aE(c2.ax,c0),s=c0.length,r=0;r<s;++r){q=c0[r]
p=q.a+":"+q.b
if(q.c===B.dW)c1.Y(0,p)
else c1.j(0,p,q)}c0=A.kU(c6,b9)
for(s=new A.a1(c1,c1.r,c1.e,c1.$ti.i("a1<2>"));s.n();){o=s.d.d
if(o!=null)c0.m(0,o)}n=A.c([],t.ev)
s=c2.ghu()
o=A.p(s).i("au<1>")
m=A.D(new A.au(s,o),o.i("i.E"))
B.a.b9(m)
for(s=m.length,o=c4.a,l=c4.b,k=c4.c,j=c3.a,i=c3.b,h=c3.c,g=c2.b.a,f=t.W,e=c2.at,r=0;r<m.length;m.length===s||(0,A.m)(m),++r){d=m[r]
c=c2.ghu().h(0,d)
c.toString
b=A.a6(e,b9,b9).h(0,d)
for(a=b!=null,a0=d+":",a1=i,a2=j;;){a3=""+a2+"-"+B.b.aa(B.d.k(a1),2,"0")
a4=a1+1
a5=A.b(a2,a4,0)
a6=B.a.mk(c,new A.Ar(a3),new A.As(c))
a5=Math.min(a6.f,A.av(a5))
a7=new A.B(a2,a1,a5)
if(A.b(a2,a1,a5).l(0,A.b(o,l,k))>0)break
a8=a6.x
if(a8===a3)a8=0
else a8=a8<a3?-1:1
if(a8<=0)if(a){if(a3===b)a8=0
else a8=a3<b?-1:1
a8=a8<0
a9=a8}else a9=!0
else a9=!1
if(a9&&A.b(a2,a1,a5).l(0,A.b(j,i,h))>=0){q=c1.h(0,a0+a3)
a5=q==null
if((a5?b8:q.d)==null)b0=b8
else{a8=q.d
a8.toString
b0=g.h(0,a8)}b1=a6.w
if(b0==null&&a5&&b1!=null){b2=a6.b===B.b4?B.m:B.j
a8=B.b.bN(b1.toUpperCase(),A.C("[^A-Z0-9]+",!0,!1))
b3=A.L(a8)
b4=b3.i("o<1>")
b5=A.D(new A.o(a8,b3.i("k(1)").a(new A.At()),b4),b4.i("i.E"))
a8=c2.bq()
b3=a8.$ti
b4=b3.i("o<i.E>")
b6=A.D(new A.o(a8,b3.i("k(i.E)").a(new A.Au(a6,b2,c0,a7,c5,b5)),b4),b4.i("i.E"))
B.a.E(b6,new A.Av(a7))
b0=A.aN(b6,f)}a8=b0==null
if(!a8)c0.m(0,b0.a)
b3=!a5&&a8
if(a8)a5=a5?b8:q.c
else a5=b8
B.a.m(n,new A.lc(a6,a2,a1,a7,b0,b3,a5))}b7=a1===12?new A.r(a2+1,1):new A.r(a2,a4)
a2=b7.a
a1=b7.b}}return n},
Mq(a,b){var s,r,q,p,o,n,m,l=A.Ch(a,b),k=A.L(l).i("aP<1>"),j=new A.aP(l,k)
for(l=new A.ad(j,j.gq(0),k.i("ad<a5.E>")),s=a.b.a,k=k.i("a5.E");l.n();){r=l.d
for(r=(r==null?k.a(r):r).y,q=A.L(r).i("aP<1>"),r=new A.aP(r,q),r=new A.ad(r,r.gq(0),q.i("ad<a5.E>")),q=q.i("a5.E");r.n();){p=r.d
p=s.h(0,p==null?q.a(p):p)
if(p==null)continue
o=a.gK()
n=p.c
o=o.h(0,n)
if(o==null)o=null
else{o=o.d
o=o===B.M||o===B.Q||o===B.x}if(o===!0)return n
m=p.ch
if(m!=null&&B.b.ak(m,"bill:")){p=s.h(0,B.b.ac(m,5))
if(p!=null)return p.c}}}return null},
M9(f1,f2,f3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="currency",e4="is not a supported currency",e5=A.Fq(f1,f2,31,B.bn,e2,e2),e6=f2.aG(30),e7=f1.gK().gS(),e8=A.p(e7),e9=e8.i("o<i.E>"),f0=A.D(new A.o(e7,e8.i("k(i.E)").a(new A.yw()),e9),e9.i("i.E"))
B.a.E(f0,new A.yx())
e7=t.N
e8=A.a4(e7)
for(e9=f0.length,s=0;s<f0.length;f0.length===e9||(0,A.m)(f0),++s)e8.m(0,f0[s].a)
e9=t.v
r=A.w(e7,e9)
q=A.w(e7,t.aF)
for(e9=A.aE(f1.fx,e9),p=e9.length,o=f2.a,n=f2.b,m=f2.c,s=0;s<p;++s){l=e9[s]
k=f1.gK().h(0,l.b)
j=!0
if(k!=null)if(e8.v(0,k.a)){j=l.d
i=k.w
h=j.a
g=j.b
j=j.c
j=A.b(h,g,j).l(0,A.b(i.a,i.b,i.c))<0||A.b(h,g,j).l(0,A.b(o,n,m))>0}if(j)continue
j=k.a
i=l.d
J.bU(q.aK(j,new A.yy()),i)
f=r.h(0,j)
if(f!=null){h=f.d
h=A.b(i.a,i.b,i.c).l(0,A.b(h.a,h.b,h.c))>0
i=h}else i=!0
if(i)r.j(0,j,l)}e=new A.yC(r)
e9=t.dZ
d=A.c([],e9)
c=A.c([],e9)
b=A.c([],t.ic)
for(p=e5.a,j=p.length,i=e6.a,h=e6.b,g=e6.c,s=0;s<p.length;p.length===j||(0,A.m)(p),++s){a=p[s]
a0=a.d
a1=a0.a
a2=a0.b
a3=a0.c
if(A.b(a1,a2,a3).l(0,A.b(i,h,g))>0||!e8.v(0,a.a.c))continue
a4=a.f
a5=a4===B.cM
a6=a5&&e.$2(a.a.c,a0)
if((a4===B.cL||a5||a4===B.cN)&&!a6)continue
a7=a.r
if(a7==null){B.a.m(b,new A.bN())
continue}B.b.aa(B.d.k(a.c),2,"0")
A.b(a1,a2,a3).l(0,A.b(o,n,m))
B.a.m(d,new A.bn(B.eX,a.a.c,a0,a7,B.j,!0))}for(j=e5.b,a0=j.length,s=0;s<j.length;j.length===a0||(0,A.m)(j),++s)if(e8.v(0,j[s].c))B.a.m(b,new A.bN())
for(j=A.Fx(f1),a0=j.length,s=0;s<j.length;j.length===a0||(0,A.m)(j),++s){a8=j[s]
a9=f1.gK().h(0,a8.b)
if(a9.r!=="personal")continue
b0=a8.dt(f2)
b1=a8.w
if(b0===B.ct){B.a.m(b,new A.bN())
continue}if(b0===B.bk){B.a.m(b,new A.bN())
continue}if(!B.e7.v(0,b0)||b1==null||b1.a.a.ga7(0)<=0)continue
b2=a8.f
if(b2==null){B.a.m(b,new A.bN())
continue}a1=b2.a
a2=b2.b
a3=b2.c
if(A.b(a1,a2,a3).l(0,A.b(i,h,g))>0)continue
b3=A.Mq(f1,a9.a)
b4=b3!=null&&e8.v(0,b3)&&f1.gK().h(0,b3).e===b1.b
a4=b4?b3:e2
A.b(a1,a2,a3).l(0,A.b(o,n,m))
a1=b4?d:c
B.a.m(a1,new A.bn(B.eY,a4,b2,b1,B.j,!0))}j=f1.gK().gS()
a0=A.p(j)
a1=a0.i("o<i.E>")
b5=A.D(new A.o(j,a0.i("k(i.E)").a(new A.yz()),a1),a1.i("i.E"))
B.a.E(b5,new A.yA())
for(j=b5.length,a0=t.h,a1=t.pt,a2=t.xQ,s=0;s<b5.length;b5.length===j||(0,A.m)(b5),++s){b6=b5[s]
if(b6.r!=="personal")continue
a3=b6.as
a3.toString
b7=A.Cx(b6,f2).w
b8=A.c([],a2)
if(b7 instanceof A.ei){b9=b7.a
for(a4=a3.d;a5=b9.a,c0=b9.b,A.b(a5,c0,b9.c).l(0,A.b(i,h,g))<=0;){B.a.m(b8,b9)
c1=c0===12?new A.r(a5+1,1):new A.r(a5,c0+1)
c2=c1.a
a=c1.b
a4.toString
if(a4>A.av(A.b(c2,a+1,0)))break
b9=new A.B(c2,a,a4)}}else if(b7 instanceof A.fK)B.a.m(b,new A.bN())
b3=a3.w
a4=A.w(a0,a1)
for(a5=A.FD(f1,b6,f2).c,c0=a5.length,c3=0;c3<a5.length;a5.length===c0||(0,A.m)(a5),++c3){c4=a5[c3]
a4.j(0,c4.b,c4)}a3=a3.r
c0=a3!=null
if(c0&&b3!=null&&e8.v(0,b3)&&f1.gK().h(0,b3).e===a3.b)for(c5=a5.length,c3=0;c3<a5.length;a5.length===c5||(0,A.m)(a5),++c3){c4=a5[c3]
c6=c4.b
if(A.b(c6.a,c6.b,c6.c).l(0,A.b(o,n,m))>=0)continue
c7=c4.d
A:{if(B.by===c7){c8=c4.c
break A}if(B.bx===c7){c8=c4.r
break A}c8=e2
break A}if(c8==null)continue
c6.k(0)
B.a.m(d,new A.bn(B.cH,b3,c6,c8,B.j,!0))}for(a5=b8.length,c3=0;c3<b8.length;b8.length===a5||(0,A.m)(b8),++c3){b9=b8[c3]
c9=a4.h(0,b9)
if(c9!=null){c5=c9.d
c5=c5===B.aL||c5===B.aM}else c5=!1
if(c5)continue
if(!c0||b3==null||!e8.v(0,b3)){B.a.m(b,new A.bN())
continue}if(f1.gK().h(0,b3).e!==a3.b){B.a.m(b,new A.bN())
continue}b9.k(0)
B.a.m(d,new A.bn(B.cH,b3,b9,a3,B.j,!0))}}e7=A.a4(e7)
for(j=p.length,s=0;s<p.length;p.length===j||(0,A.m)(p),++s){i=p[s].x
i=i==null?e2:i.a
if(i!=null)e7.m(0,i)}for(e7=A.MO(f1,f2.aG(-45),e6,B.bn,e7),p=e7.length,s=0;s<e7.length;e7.length===p||(0,A.m)(e7),++s){d0=e7[s]
d1=d0.a
j=d1.d
if(!e8.v(0,j))continue
a6=d0.r===B.bX&&e.$2(j,d0.d)
if((d0.e!=null||d0.f)&&!a6)continue
a7=d1.r
if(a7==null){B.a.m(b,new A.bN())
continue}i=d0.d
d2=A.b(i.a,i.b,i.c).l(0,A.b(o,n,m))<0
h=d1.b
switch(h.a){case 0:g=B.eZ
break
case 1:g=B.f_
break
case 2:g=B.cI
break
default:g=e2}a0=d0.c
B.b.aa(B.d.k(a0),2,"0")
a1=h===B.b4
a2=a1?B.m:B.j
a3=!a6
if(a3)a1=!(d2&&a1)
else a1=!0
B.a.m(d,new A.bn(g,j,i,a7,a2,a1))
d3=d1.e
if(h===B.bW&&d3!=null&&e8.v(0,d3)){B.b.aa(B.d.k(a0),2,"0")
B.a.m(d,new A.bn(g,d3,i,a7,B.m,!a3||!d2))}}for(e7=A.MR(f1,f2.aG(-45),e6),p=e7.length,s=0;s<e7.length;e7.length===p||(0,A.m)(e7),++s){d4=e7[s]
if(d4.c!=null||d4.d!=null)continue
d0=d4.a
d5=d0.gh3()
if(d5==null||d5.a.a.ga7(0)<=0)continue
j=d0.ch
d6=j==null?e2:f1.gK().h(0,j)
if(d6==null||!e8.v(0,d6.a)){B.a.m(b,new A.bN())
continue}if(d6.e!==d5.b){B.a.m(b,new A.bN())
continue}j=d4.b
j.k(0)
i=d6.a
A.b(j.a,j.b,j.c).l(0,A.b(o,n,m))
B.a.m(d,new A.bn(B.f0,i,j,d5,B.j,!0))}d7=A.c([],t.uD)
for(e7=f0.length,s=0;s<f0.length;f0.length===e7||(0,A.m)(f0),++s){k=f0[s]
e8=k.a
d8=r.h(0,e8)
p=k.e
j=$.M()
c9=new A.q(j,p)
d9=B.e.h(0,p)
if(d9==null)A.h(A.x(p,e3,e4))
if((j.b<=0?0:Math.max(j.gA().b,0))>d9)A.h(A.y(p+" allows "+A.j(d9)+" decimal places",j.k(0),e2))
j=d8==null
e0=0
if(!j)for(i=f1.bq(),h=J.S(i.a),i=new A.O(h,i.b,i.$ti.i("O<1>")),g=d8.d,a0=g.a,a1=g.b,g=g.c,a2=p+" allows ";i.n();){a3=h.gt()
if(a3.c===e8){a4=a3.w
a5=a4.a
c0=a4.b
a4=a4.c
a4=A.b(a5,c0,a4).l(0,A.b(a0,a1,g))<=0||A.b(a5,c0,a4).l(0,A.b(o,n,m))>0}else a4=!0
if(a4)continue
a4=a3.f
if(a4.b!==p)continue
if(a3.e===B.m)a3=a4
else{a3=$.M()
d9=B.e.h(0,p)
if(d9==null)A.h(A.x(p,e3,e4))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>d9)A.h(A.y(a2+A.j(d9)+" decimal places",a3.k(0),e2))
a4=a4.a
a4=a3.C(0,new A.P(a4.a.R(0),a4.b))
a3=new A.q(a4,p)
d9=B.e.h(0,p)
if(d9==null)A.h(A.x(p,e3,e4))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>d9)A.h(A.y(a2+A.j(d9)+" decimal places",a4.k(0),e2))}a4=a3.b
a5=c9.b
if(a4!==a5)A.h(A.a7(a5,a4))
a3=c9.a.C(0,a3.a)
c9=new A.q(a3,a5)
d9=B.e.h(0,a5)
if(d9==null)A.h(A.x(a5,e3,e4))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>d9)A.h(A.y(a5+" allows "+A.j(d9)+" decimal places",a3.k(0),e2));++e0}else B.a.m(b,new A.bN())
e1=j?e2:d8.d
p=j?e2:d8.f
j=j?e2:d8.r
i=q.h(0,e8)
if(i==null)i=B.dC
i=A.Fd(k,f3,i,A.Fr(f1,e8,f2),f2)
h=A.c([],e9)
for(g=d.length,c3=0;c3<d.length;d.length===g||(0,A.m)(d),++c3){c4=d[c3]
if(c4.d===e8)h.push(c4)}B.a.E(h,new A.yB(f2))
e8=new A.dh(k,f2,p,c9,i,h,B.jL)
e8.il(k,h,j!=null,e0,c9,i,p,e1,f2)
B.a.m(d7,e8)}return new A.nD(f2,A.M2(f1,f2),d7,c)},
M2(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=A.c([],t.Q)
for(s=a3.gK().gS(),s=s.gB(s);s.n();){r=s.gt()
q=!1
if(r.r==="personal")if(r.e==="SGD"){q=r.d
q=q===B.M||q===B.Q}if(q)a2.push(r)}if(a2.length===0)return a1
p=a4.a
o=a4.b
s=t.hy
n=A.c([],s)
for(m=0;m<3;++m){l=o===1?new A.r(p-1,12):new A.r(p,o-1)
p=l.a
o=l.b
B.a.mc(n,0,new A.r(new A.B(p,o,1),new A.B(p,o,A.av(A.b(p,o+1,0)))))}if(B.a.b5(a2,new A.y6(n)))return a1
s=A.c([],s)
for(r=n.length,k=0;k<n.length;n.length===r||(0,A.m)(n),++k){j=n[k]
q=j.a
if(A.FL(a3,"personal",q.b,q.a))s.push(j)}if(s.length===0)return a1
i=B.a.ga0(s).a
h=B.a.gau(s).b
r=t.N
q=A.a4(r)
for(g=A.Fq(a3,h,0,B.bn,i.aG(-31),h.aG(31)).a,f=g.length,k=0;k<g.length;g.length===f||(0,A.m)(g),++k){e=g[k].x
e=e==null?a1:e.a
if(e!=null)q.m(0,e)}r=A.a4(r)
for(g=a2.length,k=0;k<a2.length;a2.length===g||(0,A.m)(a2),++k)r.m(0,a2[k].a)
d=A.a3($.M(),"SGD")
for(a2=a3.bq(),g=J.S(a2.a),a2=new A.O(g,a2.b,a2.$ti.i("O<1>"));a2.n();){f=g.gt()
if(!r.v(0,f.c)||f.d!==B.n||f.e!==B.j)continue
e=f.f
c=e.b
if(c!=="SGD"||!B.a.N(s,new A.y7(f)))continue
if(f.cy===B.dS||q.v(0,f.a))continue
f=d.b
if(c!==f)A.h(A.a7(f,c))
e=d.a.C(0,e.a)
d=new A.q(e,f)
b=B.e.h(0,f)
if(b==null)A.h(A.x(f,"currency","is not a supported currency"))
if((e.b<=0?0:Math.max(e.gA().b,0))>b)A.h(A.y(f+" allows "+A.j(b)+" decimal places",e.k(0),a1))}a=s.length
a2=d.a.a_(0,new A.P(A.aL(100),0))
r=A.aL(a)
a0=A.a3(new A.P(A.aL(a2.gbR().dl(0,new A.P(r,0).gbR()).f5(0).aE(0)),0- -A.ix("SGD")),"SGD")
if(a===3){a2=i.b-1
if(!(a2>=0&&a2<12))return A.a(B.l,a2)
a2=h.b-1
if(!(a2>=0&&a2<12))return A.a(B.l,a2)}else{a2=A.c([],t.s)
for(r=s.length,k=0;k<s.length;s.length===r||(0,A.m)(s),++k){q=s[k].a.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
a2.push(B.l[q])}B.a.Z(a2,", ")}return new A.nB(a0)},
cW:function cW(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
bN:function bN(){},
nB:function nB(a){this.a=a},
dh:function dh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.w=e
_.x=f
_.y=g},
nD:function nD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nE:function nE(a){this.a=a},
nF:function nF(a){this.a=a},
nG:function nG(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function nH(){},
nI:function nI(a){this.a=a},
lc:function lc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Ar:function Ar(a){this.a=a},
As:function As(a){this.a=a},
At:function At(){},
Au:function Au(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Av:function Av(a){this.a=a},
yw:function yw(){},
yx:function yx(){},
yy:function yy(){},
yC:function yC(a){this.a=a},
yz:function yz(){},
yA:function yA(){},
yB:function yB(a){this.a=a},
y6:function y6(a){this.a=a},
y7:function y7(a){this.a=a},
MP(a,b){var s,r,q,p,o=a.c
if(B.b.H(o).length===0)return"give it a name"
s=$.eU()
if(s.aM(0,o).gq(0)<9){o=a.w
o=o!=null&&s.aM(0,o).gq(0)>=9}else o=!0
if(o)return"the name or words look like a full account number"
o=b.a
r=o.h(0,a.d)
if(r==null||!r.gaS()||r.d===B.x)return"the account must be a savings or current account"
if(a.b===B.bW){q=o.h(0,a.e)
if(q==null||!q.gaS()||q.d===B.x||q.a===r.a)return"a move goes to another savings or current account"
if(q.e!==r.e)return"a move between currencies is not planned here"}else if(a.e!=null)return"only a move has a receiving account"
o=a.f
if(o<1||o>31)return"Day of month is a whole number, 1 to 31"
p=a.r
o=p!=null
if(o&&p.b!==r.e)return"the amount must be in "+r.e
if(o&&p.a.l(0,$.M())<=0)return"the amount must be more than 0"
if(A.mH(a.x)==null)return"the first month is YYYY-MM"
if(a.y<1)return"the version starts at 1"
return null},
ev:function ev(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a,b){this.a=a
this.b=b},
Do(a){var s,r,q,p,o="typicalAmount",n=a.h(0,"id")
n.toString
A.d(n)
s=a.h(0,"payee")
s.toString
A.d(s)
r=a.h(0,"fromAccountId")
r.toString
A.d(r)
q=A.aG(a.h(0,"dayOfMonth"))
if(a.h(0,o)==null)p=null
else{p=a.h(0,o)
p.toString
p=A.aO(t.J.a(p))}return new A.c0(n,s,r,q,p,A.n(a.h(0,"categoryId")))},
Fp(a,b){var s,r,q
if($.eU().aM(0,a.b).gq(0)>=9)return"the payee looks like a full account number; give a name instead"
if(!b.gaS())return"From account must be a savings or current account"
s=a.d
if(s!=null)r=s<1||s>31
else r=!1
if(r)return"Day of month is a whole number, 1 to 31"
q=a.e
r=q!=null
if(r&&q.b!==b.e)return"the amount must be in "+b.e
if(r&&q.a.l(0,$.M())<=0)return"the amount must be more than 0"
return null},
c0:function c0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mH(a){var s,r,q,p=null,o=$.Hl().aj(a)
if(o==null)return p
s=o.b
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
q=A.Z(r,p,p)
if(q<1||q>12)s=p
else{if(1>=s.length)return A.a(s,1)
s=s[1]
s.toString
s=new A.r(A.Z(s,p,p),q)}return s},
dx:function dx(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
F6(a){var s=B.b.bN(a.toUpperCase(),$.Hn()),r=A.L(s),q=r.i("o<1>")
s=A.D(new A.o(s,r.i("k(1)").a(new A.vF()),q),q.i("i.E"))
return s},
KS(a,b){var s,r,q,p,o
if(a.length===0)return!1
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.m)(b),++r){q=b[r]
if(q==null)continue
p=A.F6(q)
o=A.BN(p,A.L(p).c)
if(B.a.b5(a,o.geN(o)))return!0}return!1},
Mc(a,b,c){var s,r=a.d
if(r==null)return null
s=A.av(A.b(b,c+1,0))
return r>s?new A.r(new A.B(b,c,s),!0):new A.r(new A.B(b,c,r),!1)},
Fq(d7,d8,d9,e0,e1,e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3=null,d4=t.N,d5=A.a6(d7.w,d4,t.rv).gS(),d6=A.D(d5,A.p(d5).i("i.E"))
B.a.E(d6,new A.yI())
s=e1==null?d8.aG(-45):e1
r=e2==null?d8.aG(d9):e2
d5=t.cE
q=A.w(d4,d5)
p=A.a4(d4)
for(d5=A.aE(d7.Q,d5),o=d5.length,n=0;n<o;++n){m=d5[n]
l=m.a+":"+m.b
if(m.d)p.m(0,l)
else if(m.c===B.cK)q.Y(0,l)
else q.j(0,l,m)}d5=A.a4(d4)
for(o=new A.a1(q,q.r,q.e,q.$ti.i("a1<2>"));o.n();){k=o.d.e
if(k!=null)d5.m(0,k)}j=A.w(d4,t.iP)
if(d6.length!==0)for(d4=d7.mq(!0),o=J.S(d4.a),d4=new A.O(o,d4.b,d4.$ti.i("O<1>")),k=t.q;d4.n();){i=o.gt()
h=i.cx
if(h!=null){g=j.h(0,h)
if(g==null){g=A.c([],k)
j.j(0,h,g)}B.a.m(g,i.z)}}f=A.c([],t.lN)
e=A.c([],t.y0)
for(d4=d6.length,o=d8.a,k=d8.b,i=d8.c,d=s.a,c=s.b,g=s.c,b=r.a,a=r.b,a0=r.c,a1=d7.b.a,a2=t.W,a3=t.Ai,n=0;n<d6.length;d6.length===d4||(0,A.m)(d6),++n){a4=d6[n]
if(a4.d==null){B.a.m(e,a4)
continue}a5=A.F6(a4.b)
a6=d7.bq()
a7=a6.$ti
a8=a7.i("o<i.E>")
a9=a8.i("o<i.E>")
b0=A.D(new A.o(new A.o(a6,a7.i("k(i.E)").a(new A.yJ(a4)),a8),a8.i("k(i.E)").a(new A.yK(a5,j)),a9),a9.i("i.E"))
b1=A.c([],a3)
for(a6=a4.a+":",a7=A.L(b0),a8=a7.i("k(1)"),a7=a7.i("o<1>"),a9=a7.i("i.E"),b2=c,b3=d;;){b4={}
b4.a=null
b5=A.Mc(a4,b3,b2)
b6=b4.a=b5.a
b7=b5.b
b8=b6.a
b9=b6.b
c0=b6.c
if(A.b(b8,b9,c0).l(0,A.b(b,a,a0))>0)break
if(A.b(b8,b9,c0).l(0,A.b(d,c,g))>=0){m=q.h(0,a6+(""+b3+"-"+B.b.aa(B.d.k(b2),2,"0")))
if((m==null?d3:m.e)==null)c1=d3
else{b8=m.e
b8.toString
c1=a1.h(0,b8)}if(c1==null){c2=A.D(new A.o(b0,a8.a(new A.yL(b4,d5,e0)),a7),a9)
B.a.E(c2,new A.yM(b4))
c1=A.aN(c2,a2)
if(c1!=null)d5.m(0,c1.a)}B.a.m(b1,new A.jj([b3,b2,b4.a,b7,c1]))}c3=b2===12?new A.r(b3+1,1):new A.r(b3,b2+1)
b3=c3.a
b2=c3.b}for(a7=b1.length,c4=d3,c5=0;a8=b1.length,c5<a8;b1.length===a7||(0,A.m)(b1),++c5){c1=b1[c5].a[4]
if(c1!=null){a8=c1.w
a8=A.b(a8.a,a8.b,a8.c).l(0,A.b(o,k,i))<=0}else a8=!1
if(a8)c4=c1}for(a7=c4!=null,c6=a4.e,a9=c6!=null,c5=0;c5<b1.length;b1.length===a8||(0,A.m)(b1),++c5){b4=b1[c5].a
c7=b4[0]
c8=b4[1]
b6=b4[2]
c1=b4[4]
l=a6+(""+c7+"-"+B.b.aa(B.d.k(c8),2,"0"))
m=q.h(0,l)
c9=p.v(0,l)
b4=m==null
d0=(b4?d3:m.c)===B.bv
b8=c1!=null
if(b8)d1=B.cL
else if((b4?d3:m.c)===B.bu)d1=B.cM
else if((b4?d3:m.c)===B.cJ)d1=B.cN
else if(c9||d0)d1=B.fa
else d1=A.b(b6.a,b6.b,b6.c).l(0,A.b(o,k,i))<0?B.fb:B.f9
if(b8){d2=c1.f
e1=B.f5}else if(a9){d2=c6
e1=B.f6}else if(a7){d2=c4.f
e1=B.f7}else{d2=d3
e1=B.f8}B.a.m(f,new A.dw(a4,c7,c8,b6,d1,d2,e1,c1))}}B.a.E(f,new A.yN())
return new A.nL(f,e)},
nK:function nK(){},
dy:function dy(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h},
nL:function nL(a,b){this.a=a
this.b=b},
vF:function vF(){},
yI:function yI(){},
yJ:function yJ(a){this.a=a},
yK:function yK(a,b){this.a=a
this.b=b},
yL:function yL(a,b,c){this.a=a
this.b=b
this.c=c},
yM:function yM(a){this.a=a},
yN:function yN(){},
Np(a,b){var s,r,q=a.a
if(q<2000||q>2100)return"the Year of Assessment is a year"
q=a.b
if(q.a.l(0,$.M())<0)return"the amount assessed is zero or more"
if(b!=null&&q.b!==b.e)return"the amount must be in "+b.e
q=a.d
s=a.e
r=[a.c,q,s]
if(B.a.N(r,new A.B4())&&B.a.N(r,new A.B5()))return"a GIRO plan needs its GIRO, its first month and the number of instalments"
if(q!=null&&A.mH(q)==null)return"the first month is YYYY-MM"
if(s!=null)q=s<1||s>24
else q=!1
if(q)return"instalments are 1 to 24"
return null},
lA:function lA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B4:function B4(){},
B5:function B5(){},
ty:function ty(a,b){this.a=a
this.b=b},
L9(a){var s,r,q,p,o,n,m,l=A.c([],t.s)
for(s=A.a6(a.x,t.N,t.p0).gS(),r=A.p(s),q=r.i("k(i.E)").a(new A.vJ()),s=s.gB(s),r=new A.O(s,q,r.i("O<i.E>"));r.n();){q=s.gt()
p=a.gK().gS()
o=A.p(p)
n=o.i("o<i.E>")
m=A.D(new A.o(p,o.i("k(i.E)").a(new A.vK(a,q)),n),n.i("i.E"))
if(!(m.length!==0&&B.a.b5(m,new A.vL(a))))B.a.m(l,q.b)}return new A.mV(l.length===0,l)},
mV:function mV(a,b){this.a=a
this.b=b},
vJ:function vJ(){},
vK:function vK(a,b){this.a=a
this.b=b},
vL:function vL(a){this.a=a},
vI:function vI(a){this.a=a},
LT(a,b){var s,r,q
if(!b)return"no profile for "+A.j(a.h(0,"institution"))
s=t.yq.a(a.h(0,"threshold"))
if(s==null)return null
if(!J.a2(a.h(0,"level"),"aboveThreshold"))return"a threshold is only for aboveThreshold"
r=A.n(s.h(0,"currency"))
if(r==null||!B.e.D(r))return"currency "+A.j(r)+" is not supported"
q=s.h(0,"amount")
q.toString
if(A.ah(A.d(q)).l(0,$.M())<=0)return"a threshold is more than 0"
return null},
dk:function dk(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k6:function k6(a,b,c){this.a=a
this.b=b
this.r=c},
Dp(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.n(a0.h(0,"amount")),d=A.n(a0.h(0,"occurredAtUtc")),c=A.n(a0.h(0,"receivedAtUtc")),b=A.n(a0.h(0,"balance")),a=a0.h(0,"eventKey")
a.toString
A.d(a)
s=a0.h(0,"channel")
s.toString
s=A.ai(B.jx,A.d(s),t.lj)
r=a0.h(0,"sourceId")
r.toString
A.d(r)
r=A.n(a0.h(0,"institution"))
q=A.n(a0.h(0,"eventType"))
p=A.n(a0.h(0,"accountAlias"))
if(e==null)o=f
else{o=a0.h(0,"currency")
o.toString
A.d(o)
o=A.a3(A.ah(e),o)}n=d==null?f:A.c_(d).F()
m=c==null?f:A.c_(c).F()
l=A.n(a0.h(0,"payee"))
A.Cb(a0.h(0,"confidence"))
k=a0.h(0,"verified")
k.toString
A.cK(k)
A.n(a0.h(0,"parserVersion"))
k=a0.h(0,"status")
k.toString
A.ai(B.j4,A.d(k),t.gy)
k=A.n(a0.h(0,"suspicion"))
j=A.n(a0.h(0,"sender"))
i=A.n(a0.h(0,"accountLast4"))
h=A.n(a0.h(0,"occurredOn"))
h=h==null?f:A.ax(h)
if(b!=null){g=a0.h(0,"balanceCurrency")
g.toString
A.d(g)
A.a3(A.ah(b),g)}g=A.n(a0.h(0,"dueOn"))
if(g!=null)A.ax(g)
return new A.f9(a,s,r,q,p,o,n,m,l,k,j,i,h)},
fk:function fk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
cw:function cw(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.ax=j
_.ay=k
_.ch=l
_.CW=m},
K2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.f
if(f!=null){s=A.a4(t.N)
for(r=a.r.a,q=new A.a1(r,r.r,r.e,A.p(r).i("a1<2>"));q.n();){p=q.d
if(p.b===f)s.m(0,a.aX(p.a))}return s.a===1?r.h(0,s.gaQ(0)):g}o=b.d
n=b.ch
s=n==null
m=g
if(!s){r=A.C("\\d+$",!0,!1).aj(n)
if(!(r==null)){r=r.b
if(0>=r.length)return A.a(r,0)
r=r[0]
m=r}}if(o==null||s||m==null||m.length<2)return g
s=t.b
l=A.w(t.N,s)
for(r=a.r.a,q=new A.a1(r,r.r,r.e,A.p(r).i("a1<2>"));q.n();){p=q.d
if(B.b.bF(p.b,m)){k=p.c
j=a.hf(k)
j=j==null?g:j.a
if(j==null){j=A.C("[^A-Z0-9]",!0,!1)
j=A.a8(k.toUpperCase(),j,"")}k=!(j===o||A.hF(k)===A.hF(o))}else k=!0
if(k)continue
p=r.h(0,a.aX(p.a))
if(p!=null)l.j(0,p.a,p)}r=A.c([],t.Q)
for(q=new A.a1(l,l.r,l.e,l.$ti.i("a1<2>")),p=b.e,k=b.r;q.n();){j=q.d
i=!1
if(j.CW==null)if(A.KG(p,j.d)){i=j.e
i=i===(k==null?g:k.b)}if(i)r.push(j)}q=A.C("^\\d{4}$",!0,!1)
if(q.b.test(n))return r.length===1&&l.a===1?B.a.gaQ(r):g
q=a.k2.h(0,A.hF(o)+"|"+n)
h=q==null?g:q.c
return h==null?g:A.aN(new A.o(r,t.cP.a(new A.v8(a,h)),t.qK),s)},
LU(a,b,c){var s=a.aX(b)
return B.a.N(A.aE(a.fx,t.v),new A.xJ(a,s,c))},
KG(a,b){var s
A:{if("card-purchase"===a||"card-refund"===a||"card-payment-received"===a){s=b===B.y
break A}s=b!==B.y&&b!==B.x
break A}return s},
v8:function v8(a,b){this.a=a
this.b=b},
xJ:function xJ(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b){this.a=a
this.b=b},
Dx(a){var s,r,q,p,o=a.h(0,"algorithm")
o.toString
A.d(o)
s=a.h(0,"memoryKiB")
s.toString
A.R(s)
r=a.h(0,"iterations")
r.toString
A.R(r)
q=a.h(0,"parallelism")
q.toString
A.R(q)
p=a.h(0,"salt")
p.toString
return new A.o_(o,s,r,q,B.B.O(A.d(p)))},
o_:function o_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
DU(a){var s,r,q=a.h(0,"nonce")
q.toString
q=B.B.O(A.d(q))
s=a.h(0,"cipherText")
s.toString
s=B.B.O(A.d(s))
r=a.h(0,"mac")
r.toString
return new A.tN(q,s,B.B.O(A.d(r)))},
Dy(a){var s,r,q,p,o,n,m=a.h(0,"passphraseKdf")
m.toString
s=t.f
r=t.N
q=t.X
m=A.Dx(s.a(m).G(0,r,q))
p=a.h(0,"recoveryKdf")
p.toString
p=A.Dx(s.a(p).G(0,r,q))
o=a.h(0,"byPassphrase")
o.toString
o=A.DU(s.a(o).G(0,r,q))
n=a.h(0,"byRecovery")
n.toString
return new A.o0(m,p,o,A.DU(s.a(n).G(0,r,q)))},
vt(a,b){return A.KM(a,b)},
KM(a,b){var s=0,r=A.J(t.c),q,p=2,o=[],n,m,l
var $async$vt=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.t($.GW().br(new A.ey(a.b,new A.d1(a.c),a.a),$.Hy(),b),$async$vt)
case 7:n=d
q=new A.bp(new A.bs(n,!1),null)
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
if(A.aw(l) instanceof A.iT)throw A.l(new A.hp())
else throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$vt,r)},
zT(a,b){var s=0,r=A.J(t.c),q,p,o,n,m
var $async$zT=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:p=a.a
o=p.a
if(o!=="argon2id")A.h(A.x(o,"algorithm","unsupported"))
$.b6()
n=A
m=a.c
s=3
return A.t(new A.i_(p.d,p.b,p.c,32).d7(p.e,new A.bp(new A.bs(B.E.O(b),!1),null)),$async$zT)
case 3:q=n.vt(m,d)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$zT,r)},
hp:function hp(){},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vY(a,b){var s,r,q,p=a.aJ.a.h(0,b),o=p==null?null:p.b
if(o!=null)return o
p=a.gK().gS()
s=A.p(p)
r=s.i("o<i.E>")
q=A.D(new A.o(p,s.i("k(i.E)").a(new A.vZ(b)),r),r.i("i.E"))
if(q.length===0||B.a.N(q,new A.w_()))return"SGD"
return B.a.ga0(q).e},
vZ:function vZ(a){this.a=a},
w_:function w_(){},
ku:function ku(){},
It(a){var s,r=t.N,q=t.S,p=t.p_,o=t.h,n=new A.h1(A.a4(r),new A.md(A.w(r,t.B),A.w(r,t.Dm),A.a4(r),A.w(r,t.W)),A.c([],t.M),new A.ag(A.w(r,t.G),t.rE),new A.ag(A.w(r,t.R),t.AJ),A.w(r,r),new A.ag(A.w(r,t.b),t.zs),new A.ag(A.w(r,t.rv),t.DF),new A.ag(A.w(r,t.p0),t.hl),A.w(t.g5,t.xr),A.a4(r),A.c([],t.zA),new A.ag(A.w(r,t.to),t.n7),A.w(r,r),A.c([],t.yT),A.w(q,t.EL),A.w(r,r),A.w(r,t.ca),A.w(r,t.zc),A.w(r,t.c5),new A.u5(A.c([],t.e3),A.w(r,t.xt),A.a4(r)),A.c([],t.k6),A.c([],t.Ec),A.c([],t.ew),A.w(r,t.A9),A.c([],t.sv),A.w(r,t.ch),A.w(r,t.Ap),A.a4(r),A.c([],t.ey),A.w(r,t.pp),new A.ag(A.w(r,t.o),t.F4),new A.tQ(A.a4(p)),new A.j_(A.a4(r),t.ur),A.c([],t.xz),new A.ag(A.w(r,t.y6),t.BK),A.w(r,q),new A.ag(A.w(t.Dt,t.AD),t.dB),A.c([],t.aV),new A.ag(A.w(r,t.d6),t.l4),A.a4(r),A.w(r,o),A.a4(r),A.a4(r),A.w(r,t.nX),A.a4(r),new A.u9(A.w(r,t.d),A.c([],t.lt),A.w(t.d3,t.cZ),A.w(o,t.y),A.w(p,t.fK),A.w(r,t.mg),A.w(r,t.jF)),new A.tv(A.w(r,t.l9),A.a4(r),A.a4(r),A.w(r,t.ud),A.c([],t.os)),new A.oW(A.w(t.P,t.Cu)),A.a4(r),new A.n0(A.w(r,t.Cv),A.w(r,t.tD),A.w(r,t.eX),A.w(r,t.a),A.w(r,t.w5),A.w(r,t.xM),A.w(r,t.aB),A.w(r,t.Ba),A.a4(r),A.w(r,t.DV),A.w(r,t.Bf),A.a4(r)))
r=a.a
q=A.p(r).i("N<2>")
r=A.D(new A.N(r,q),q.i("i.E"))
q=r.length
s=0
for(;s<r.length;r.length===q||(0,A.m)(r),++s)n.eJ(r[s])
return n},
og(a,b){return B.b.l(a,b)<0?a+"|"+b:b+"|"+a},
DC(a,b,c){var s=b===B.M||b===B.Q
return a.ly(b!==B.y,b!==B.o,!s,c==null,b,c)},
DB(a,b){var s,r,q,p
A:{s=B.y===a
if(s){r=B.y===b
q=b}else{q=null
r=!1}p=!0
if(r){r=p
break A}if(B.M!==a)r=B.Q===a
else r=!0
if(r){if(s)r=q
else{r=b
q=r
s=!0}if(B.M!==r)r=B.Q===(s?q:b)
else r=!0}else r=!1
if(r){r=p
break A}r=!1
break A}return r},
BK(a){var s=a.d
return(s==null||s===B.L)&&a.ch==null&&a.ay==null&&a.cx==null},
Is(a,b){var s,r,q,p
if(a.length===b.length){s=A.c([],t.sj)
for(r=0;r<a.length;++r){q=a[r]
if(!(r<b.length))return A.a(b,r)
p=b[r]
s.push(p.a===q.a&&p.b===q.b&&p.c===q.c)}s=B.a.b5(s,new A.oo())}else s=!1
return s},
mY:function mY(){},
F:function F(){},
nz:function nz(){},
bu:function bu(){},
tD:function tD(){},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.db=_.cy=null
_.dx=s
_.dy=a0
_.fr=a1
_.fx=a2
_.fy=a3
_.go=a4
_.id=a5
_.k1=a6
_.k2=a7
_.k3=a8
_.k4=a9
_.ok=b0
_.p1=b1
_.p3=b2
_.p4=b3
_.R8=b4
_.RG=b5
_.rx=b6
_.ry=b7
_.to=b8
_.x1=b9
_.x2=c0
_.xr=c1
_.y1=c2
_.lV=c3
_.lW=c4
_.lX=c5
_.dT=c6
_.dU=c7
_.bW=c8
_.ab=c9
_.hb=d0
_.aJ=d1},
oy:function oy(a){this.a=a},
ol:function ol(){},
ow:function ow(){},
ox:function ox(a){this.a=a},
oV:function oV(a){this.a=a},
oU:function oU(a){this.a=a},
ov:function ov(a){this.a=a},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
oF:function oF(a){this.a=a},
o3:function o3(a){this.a=a},
o4:function o4(){},
of:function of(){},
ot:function ot(a){this.a=a},
or:function or(a){this.a=a},
os:function os(a){this.a=a},
oq:function oq(a){this.a=a},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
oD:function oD(){},
oE:function oE(a){this.a=a},
o2:function o2(a,b){this.a=a
this.b=b},
ok:function ok(a,b){this.a=a
this.b=b},
oi:function oi(a){this.a=a},
oj:function oj(){},
oT:function oT(){},
oH:function oH(a){this.a=a},
oI:function oI(a){this.a=a},
oJ:function oJ(a){this.a=a},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
oN:function oN(a){this.a=a},
oO:function oO(){},
oP:function oP(a){this.a=a},
oQ:function oQ(a){this.a=a},
oR:function oR(a){this.a=a},
oS:function oS(a){this.a=a},
oK:function oK(a){this.a=a},
o7:function o7(){},
ou:function ou(a){this.a=a},
o8:function o8(a,b){this.a=a
this.b=b},
oa:function oa(a){this.a=a},
ob:function ob(a){this.a=a},
on:function on(a){this.a=a},
o5:function o5(a){this.a=a},
om:function om(a){this.a=a},
oo:function oo(){},
oe:function oe(a,b){this.a=a
this.b=b},
od:function od(a){this.a=a},
op:function op(a){this.a=a},
oh:function oh(){},
o9:function o9(a){this.a=a},
o6:function o6(){},
oc:function oc(){},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lo:function lo(){},
md:function md(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
CA(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=a1*12+a0-1,g=t.S,f=A.w(g,t.Fu)
for(s=A.AO(a,b),r=s.length,q=t.bD,p=0;p<s.length;s.length===r||(0,A.m)(s),++p){o=s[p]
n=o.b
m=n==null
l=m?null:n.x
if(l==null)l=o.a.x
n=m?null:n.x
if(n==null)n=o.a.x
n=l.a*12+n.b-1
l=f.h(0,n)
if(l==null){m=A.c([],q)
f.j(0,n,m)
n=m}else n=l
B.a.m(n,o)}k=A.w(g,t.C)
for(g=a.bq(),s=J.S(g.a),g=new A.O(s,g.b,g.$ti.i("O<1>")),r=t.A;g.n();){q=s.gt()
if(q.b===b){n=q.x
n=n.a*12+n.b-1
m=k.h(0,n)
if(m==null){m=A.c([],r)
k.j(0,n,m)
n=m}else n=m
B.a.m(n,q)}}g=A.c([],t.aH)
for(j=h-c+1;j<=h;++j){s=B.d.u(j,12)
r=B.d.T(j,12)+1
q=k.h(0,j)
if(q==null)q=B.aa
i=A.b(s,r+1,1).av(-864e8)
q=A.Ft(q,b,d,new A.B(s,r,1),new A.B(A.b_(i),A.b4(i),A.av(i)))
n=f.h(0,j)
if(n==null)n=B.jM
m=k.h(0,j)
g.push(new A.h6(s,r,q,A.FO(a,n,m==null?B.aa:m,b,d,e,r,s)))}return g},
FM(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=new A.B(f,e,1),k=new A.B(f,e+1,1).aG(-1),j=new A.zy(l,k),i=A.c([],t.bD)
for(s=A.AO(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.b
o=o==null?null:o.x
if(j.$1(o==null?p.a.x:o))i.push(p)}s=A.c([],t.A)
for(r=a.bq(),o=J.S(r.a),r=new A.O(o,r.b,r.$ti.i("O<1>"));r.n();){n=o.gt()
if(n.b===b&&j.$1(n.x))s.push(n)}r=t.N
o=A.kU(c,r)
for(n=i.length,q=0;q<i.length;i.length===n||(0,A.m)(i),++q)o.m(0,i[q].a.f.b)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.m)(s),++q)o.m(0,s[q].f.b)
r=A.w(r,t.wy)
for(o=A.e5(o,o.r,A.p(o).c),n=o.$ti.c;o.n();){m=o.d
if(m==null)m=n.a(m)
r.j(0,m,new A.h6(f,e,A.Ft(s,b,m,l,k),A.FO(a,i,s,b,m,d,e,f)))}return r},
FN(a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=new A.B(b1,a9,1),a1=new A.B(b1,a9+1,1).aG(-1),a2=A.c([],t.Dy),a3=a7.gK().gS(),a4=A.p(a3),a5=a4.i("o<i.E>"),a6=A.D(new A.o(a3,a4.i("k(i.E)").a(new A.zz(a8,a1)),a5),a5.i("i.E"))
B.a.E(a6,new A.zA())
for(a3=a6.length,a4=a1.a,a5=a1.b,s=a1.c,r=a7.RG,q=t.lA,p=a7.fx,o=t.v,n=t.hy,m=0;m<a6.length;a6.length===a3||(0,A.m)(a6),++m){l=a6[m]
k=A.c([],n)
j=A.d_(p,!1,o)
j.$flags=3
i=j
h=i.length
g=l.a
f=0
for(;f<h;++f){e=i[f]
if(e.b===g&&e.r!=null)k.push(new A.r(e.c,e.d))}j=A.d_(r,!1,q)
j.$flags=3
i=j
h=i.length
f=0
for(;f<h;++f){d=i[f]
if(d.a===g)k.push(new A.r(d.b,d.c))}d=l.w
d=A.b(d.a,d.b,d.c).l(0,A.b(b1,a9,1))>0?d:a0
for(;i=d.a,h=d.b,g=d.c,A.b(i,h,g).l(0,A.b(a4,a5,s))<=0;d=A.b(i,h,g).av(864e8),d=new A.B(A.b_(d),A.b4(d),A.av(d)))if(!B.a.N(k,new A.zB(d))){B.a.m(a2,new A.jR())
break}}c=A.b(b0.a,b0.b,b0.c).l(0,A.b(a4,a5,s))>0
b=A.a6(a7.ry,t.N,t.S).h(0,""+b1+"-"+B.b.aa(B.d.k(a9),2,"0"))
if(!c)a=B.b5
else if(a2.length===0)a=B.e1
else{a3=b!=null?B.e2:B.b5
a=a3}return new A.p5(a,c,a2,b)},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zy:function zy(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
jR:function jR(){},
p5:function p5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zz:function zz(a,b){this.a=a
this.b=b},
zA:function zA(){},
zB:function zB(a){this.a=a},
G7(a,b){var s,r,q
A:{s=B.n===a
if(s){r=B.m===b
q=b}else{q=null
r=!1}if(!r)if(B.w===a)r=B.j===(s?q:b)
else r=!1
else r=!0
break A}return!r},
bP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){if(b.a.a.ga7(0)<0)A.h(A.x(b,"amount","is stored positive (LED-12)"))
return new A.X(j,d,a,a1,h,b,n,c,i,r,p,e,l,f,g,k,o,a0,s,q,m,a2)},
bg:function bg(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2},
jH(a){if(a.CW!=null)return B.dX
if(B.e5.v(0,a.y.a))return B.ak
return null},
iN:function iN(a,b){this.a=a
this.b=b},
HZ(a){var s,r,q,p,o,n,m,l,k=t.yq.a(a.h(0,"flags")),j=k==null?null:k.G(0,t.N,t.X)
if(j==null)j=B.kD
k=t.d
s=A.w(t.N,k)
for(r=j.gbs(),r=r.gB(r),q=t.ns,p=t.rK;r.n();){o={}
n=r.gt()
o.a=null
m=n.a
o.a=n.b
l=A.aN(new A.o(B.dF,q.a(new A.nf(o)),p),k)
if(l==null)throw A.l(A.y("category "+m+" has an unknown flag",o.a,null))
s.j(0,m,l)}return new A.k5(s)},
AO(a,b){var s,r,q,p,o,n,m=A.w(t.N,t.W)
for(s=a.bq(),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>"));s.n();){q=r.gt()
m.j(0,q.a,q)}p=A.c([],t.bD)
for(s=new A.a1(m,m.r,m.e,m.$ti.i("a1<2>"));s.n();){r=s.d
if(r.b===b){q=r.ch
q=q==null?null:B.b.ak(q,"cancel:")
q=q===!0}else q=!0
if(q)continue
q=r.d
if(q===B.n&&r.e===B.j)B.a.m(p,new A.d8(r,null,!1))
else{q=q===B.G
if(q&&r.e===B.m){o=r.ay
n=m.h(0,o)
if(n!=null)B.a.m(p,new A.d8(r,n,!1))
else if(q&&r.e===B.m&&o==null&&r.Q!=null)B.a.m(p,new A.d8(r,null,!0))}}}return p},
KU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h="currency",g="is not a supported currency",f=A.w(t.T,t.B)
for(s=a.length,r=c+" allows ",q=0;q<a.length;a.length===s||(0,A.m)(a),++q){p=a[q]
o=p.a
n=o.Q
if(n==null){n=p.b
n=n==null?i:n.Q}if(n==null)m=i
else{l=b.h(0,n)
l=l==null?i:l.d
m=l==null?n:l}n=f.h(0,m)
if(n==null){n=$.M()
l=new A.q(n,c)
k=B.e.h(0,c)
if(k==null)A.h(A.x(c,h,g))
if((n.b<=0?0:Math.max(n.gA().b,0))>k)A.h(A.y(r+A.j(k)+" decimal places",n.k(0),i))
n=l}l=p.c||p.b!=null
o=o.f
if(l){l=o.b
j=$.M()
k=B.e.h(0,l)
if(k==null)A.h(A.x(l,h,g))
if((j.b<=0?0:Math.max(j.gA().b,0))>k)A.h(A.y(l+" allows "+A.j(k)+" decimal places",j.k(0),i))
o=o.a
o=j.C(0,new A.P(o.a.R(0),o.b))
j=new A.q(o,l)
k=B.e.h(0,l)
if(k==null)A.h(A.x(l,h,g))
if((o.b<=0?0:Math.max(o.gA().b,0))>k)A.h(A.y(l+" allows "+A.j(k)+" decimal places",o.k(0),i))
o=j}l=o.b
j=n.b
if(l!==j)A.h(A.a7(j,l))
o=n.a.C(0,o.a)
k=B.e.h(0,j)
if(k==null)A.h(A.x(j,h,g))
if((o.b<=0?0:Math.max(o.gA().b,0))>k)A.h(A.y(j+" allows "+A.j(k)+" decimal places",o.k(0),i))
f.j(0,m,new A.q(o,j))}s=A.c([],t.Dz)
for(r=new A.ac(f,f.$ti.i("ac<1,2>")).gB(0);r.n();){o=r.d
s.push(new A.dn(o.a,o.b))}B.a.E(s,new A.vv())
return s},
KO(a,b){var s,r,q,p,o,n,m,l,k,j=null,i="currency",h="is not a supported currency",g=t.N,f=t.B,e=A.w(g,f)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r){q=a[r]
p=q.a.f
o=p.b
if(o===b)continue
n=e.h(0,o)
if(n==null){n=$.M()
m=new A.q(n,o)
l=B.e.h(0,o)
if(l==null)A.h(A.x(o,i,h))
if((n.b<=0?0:Math.max(n.gA().b,0))>l)A.h(A.y(o+" allows "+A.j(l)+" decimal places",n.k(0),j))
n=m}if(q.c||q.b!=null){m=$.M()
l=B.e.h(0,o)
if(l==null)A.h(A.x(o,i,h))
if((m.b<=0?0:Math.max(m.gA().b,0))>l)A.h(A.y(o+" allows "+A.j(l)+" decimal places",m.k(0),j))
p=p.a
p=m.C(0,new A.P(p.a.R(0),p.b))
m=new A.q(p,o)
l=B.e.h(0,o)
if(l==null)A.h(A.x(o,i,h))
if((p.b<=0?0:Math.max(p.gA().b,0))>l)A.h(A.y(o+" allows "+A.j(l)+" decimal places",p.k(0),j))
p=m}m=p.b
k=n.b
if(m!==k)A.h(A.a7(k,m))
p=n.a.C(0,p.a)
l=B.e.h(0,k)
if(l==null)A.h(A.x(k,i,h))
if((p.b<=0?0:Math.max(p.gA().b,0))>l)A.h(A.y(k+" allows "+A.j(l)+" decimal places",p.k(0),j))
e.j(0,o,new A.q(p,k))}g=A.w(g,f)
f=e.$ti.i("au<1>")
f=A.D(new A.au(e,f),f.i("i.E"))
B.a.b9(f)
s=f.length
r=0
for(;r<f.length;f.length===s||(0,A.m)(f),++r){o=f[r]
p=e.h(0,o)
p.toString
g.j(0,o,p)}return g},
FO(c2,c3,c4,c5,c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6="currency",b7="is not a supported currency",b8=A.av(A.b(c9,c8+1,0)),b9=t.N,c0=A.a6(c2.d,b9,t.G),c1=t.sw.a(c2.dU.a)
if(c1.a===0)s=c7
else{b9=A.kS(c7.a,b9,t.d)
b9.a1(0,c1)
s=new A.k5(b9)}b9=A.L(c3)
c1=b9.i("o<1>")
r=A.D(new A.o(c3,b9.i("k(1)").a(new A.zC(new A.B(c9,c8,1),new A.B(c9,c8,b8))),c1),c1.i("i.E"))
b9=A.L(r)
c1=b9.i("o<1>")
q=A.D(new A.o(r,b9.i("k(1)").a(new A.zD(c6)),c1),c1.i("i.E"))
p=A.a3($.M(),c6)
b9=t.B
o=A.w(t.d,b9)
n=A.it(b8,p,!1,b9)
for(b9=q.length,c1=t.Ez,m=p,l=m,k=l,j=k,i=0,h=0;h<q.length;q.length===b9||(0,A.m)(q),++h){g=q[h]
f=!g.c
e=!f||g.b!=null
d=g.a
c=d.f
if(e){e=c.b
b=k.b
if(e!==b)A.h(A.a7(b,e))
e=k.a.C(0,c.a)
k=new A.q(e,b)
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,b6,b7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",e.k(0),b5))}else{e=c.b
b=j.b
if(e!==b)A.h(A.a7(b,e))
a0=c.a
a1=j.a.C(0,a0)
j=new A.q(a1,b)
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,b6,b7))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",a1.k(0),b5))
if(A.jH(d)===B.ak){b=l.b
if(e!==b)A.h(A.a7(b,e))
e=l.a.C(0,a0)
l=new A.q(e,b)
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,b6,b7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",e.k(0),b5));++i}}a2=d.Q
if(a2==null){e=g.b
a2=e==null?b5:e.Q}if(a2==null){if(!f||g.b!=null){e=c.b
b=$.M()
a=B.e.h(0,e)
if(a==null)A.h(A.x(e,b6,b7))
if((b.b<=0?0:Math.max(b.gA().b,0))>a)A.h(A.y(e+" allows "+A.j(a)+" decimal places",b.k(0),b5))
a0=c.a
a0=b.C(0,new A.P(a0.a.R(0),a0.b))
b=new A.q(a0,e)
a=B.e.h(0,e)
if(a==null)A.h(A.x(e,b6,b7))
if((a0.b<=0?0:Math.max(a0.gA().b,0))>a)A.h(A.y(e+" allows "+A.j(a)+" decimal places",a0.k(0),b5))
e=b}else e=c
b=e.b
a0=m.b
if(b!==a0)A.h(A.a7(a0,b))
e=m.a.C(0,e.a)
m=new A.q(e,a0)
a=B.e.h(0,a0)
if(a==null)A.h(A.x(a0,b6,b7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.h(A.y(a0+" allows "+A.j(a)+" decimal places",e.k(0),b5))}else{a3=s.jy(a2,c1.a(c0))
if(a3===B.b8)a3=B.aB
e=o.h(0,a3)
if(e==null)e=p
if(!f||g.b!=null){b=c.b
a0=$.M()
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,b6,b7))
if((a0.b<=0?0:Math.max(a0.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",a0.k(0),b5))
a1=c.a
a1=a0.C(0,new A.P(a1.a.R(0),a1.b))
a0=new A.q(a1,b)
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,b6,b7))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",a1.k(0),b5))
b=a0}else b=c
a0=b.b
a1=e.b
if(a0!==a1)A.h(A.a7(a1,a0))
e=e.a.C(0,b.a)
a=B.e.h(0,a1)
if(a==null)A.h(A.x(a1,b6,b7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.h(A.y(a1+" allows "+A.j(a)+" decimal places",e.k(0),b5))
o.j(0,a3,new A.q(e,a1))}e=g.b
b=e==null
e=b?b5:e.x
e=(e==null?d.x:e).c-1
if(!(e>=0&&e<b8))return A.a(n,e)
d=n[e]
if(!f||!b){f=c.b
b=$.M()
a=B.e.h(0,f)
if(a==null)A.h(A.x(f,b6,b7))
if((b.b<=0?0:Math.max(b.gA().b,0))>a)A.h(A.y(f+" allows "+A.j(a)+" decimal places",b.k(0),b5))
c=c.a
c=b.C(0,new A.P(c.a.R(0),c.b))
b=new A.q(c,f)
a=B.e.h(0,f)
if(a==null)A.h(A.x(f,b6,b7))
if((c.b<=0?0:Math.max(c.gA().b,0))>a)A.h(A.y(f+" allows "+A.j(a)+" decimal places",c.k(0),b5))
f=b}else f=c
c=f.b
b=d.b
if(c!==b)A.h(A.a7(b,c))
f=d.a.C(0,f.a)
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,b6,b7))
if((f.b<=0?0:Math.max(f.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",f.k(0),b5))
B.a.j(n,e,new A.q(f,b))}a4=A.c([],t.g)
for(a5=p,h=0;h<b8;++h){a6=n[h]
b9=a6.b
c1=a5.b
if(b9!==c1)A.h(A.a7(c1,b9))
b9=a5.a.C(0,a6.a)
a5=new A.q(b9,c1)
a=B.e.h(0,c1)
if(a==null)A.h(A.x(c1,b6,b7))
if((b9.b<=0?0:Math.max(b9.gA().b,0))>a)A.h(A.y(c1+" allows "+A.j(a)+" decimal places",b9.k(0),b5))
B.a.m(a4,a5)}for(b9=c4.length,a7=0,h=0;h<c4.length;c4.length===b9||(0,A.m)(c4),++h){a8=c4[h]
if(a8.b===c5){c1=a8.x
f=c1.a
e=c1.b
c1=c1.c
c1=A.b(f,e,c1).l(0,A.b(c9,c8,1))<0||A.b(f,e,c1).l(0,A.b(c9,c8,b8))>0}else c1=!0
if(c1)continue
a9=a8.d
b0=a8.e
A:{b1=a9==null
if(b1){c1=B.j===b0
b2=b0}else{b2=b5
c1=!1}b3=b5
if(!c1){b4=B.n===a9
if(b4){if(b1)c1=b2
else{c1=b0
b2=c1
b1=!0}b3=B.m===c1
c1=b3}else c1=!1}else{b4=!1
c1=!0}if(c1){c1=!0
break A}if(B.G===a9)if(b4)c1=b3
else{b3=B.m===(b1?b2:b0)
c1=b3}else c1=!1
if(c1){c1=a8.ay==null&&a8.Q==null
break A}c1=!1
break A}if(c1)++a7}return new A.p6(j.a8(0,k),k,A.KU(q,c0,c6),o,m,l,i,a7,A.KO(r,c6))},
bt:function bt(a,b){this.a=a
this.b=b},
k5:function k5(a){this.a=a},
nf:function nf(a){this.a=a},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b){this.a=a
this.b=b},
vv:function vv(){},
p6:function p6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
zC:function zC(a,b){this.a=a
this.b=b},
zD:function zD(a){this.a=a},
MT(a){var s,r,q,p,o=A.p(a).i("au<1>"),n=A.D(new A.au(a,o),o.i("i.E"))
B.a.E(n,new A.AD(a))
o=A.w(t.N,t.B)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.m)(n),++r){q=n[r]
p=a.h(0,q)
p.toString
o.j(0,q,p)}return o},
Ft(a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="currency",a1="is not a supported currency",a2=$.M(),a3=A.a3(a2,a8),a4=A.w(t.N,t.B),a5=A.a3(a2,a8)
for(a2=a6.length,s=a9.a,r=a9.b,q=a9.c,p=b0.a,o=b0.b,n=b0.c,m=a8+" allows ",l=0,k=0,j=0,i=0;i<a6.length;a6.length===a2||(0,A.m)(a6),++i){h=a6[i]
if(h.b===a7){g=h.x
f=g.a
e=g.b
g=g.c
g=A.b(f,e,g).l(0,A.b(s,r,q))<0||A.b(f,e,g).l(0,A.b(p,o,n))>0}else g=!0
if(g)continue
if(h.e!==B.m)continue
g=h.f
f=g.b
if(f!==a8){++k
continue}switch(h.d){case null:case void 0:++l
break
case B.w:e=a3.b
if(f!==e)A.h(A.a7(e,f))
g=g.a
d=a3.a.C(0,g)
a3=new A.q(d,e)
c=B.e.h(0,e)
if(c==null)A.h(A.x(e,a0,a1))
if((d.b<=0?0:Math.max(d.gA().b,0))>c)A.h(A.y(e+" allows "+A.j(c)+" decimal places",d.k(0),a))
if(A.jH(h)===B.ak){e=a5.b
if(f!==e)A.h(A.a7(e,f))
d=a5.a.C(0,g)
a5=new A.q(d,e)
c=B.e.h(0,e)
if(c==null)A.h(A.x(e,a0,a1))
if((d.b<=0?0:Math.max(d.gA().b,0))>c)A.h(A.y(e+" allows "+A.j(c)+" decimal places",d.k(0),a));++j}b=h.Q
if(b==null)++l
else{e=a4.h(0,b)
if(e==null){e=$.M()
d=new A.q(e,a8)
c=B.e.h(0,a8)
if(c==null)A.h(A.x(a8,a0,a1))
if((e.b<=0?0:Math.max(e.gA().b,0))>c)A.h(A.y(m+A.j(c)+" decimal places",e.k(0),a))
e=d}d=e.b
if(f!==d)A.h(A.a7(d,f))
g=e.a.C(0,g)
c=B.e.h(0,d)
if(c==null)A.h(A.x(d,a0,a1))
if((g.b<=0?0:Math.max(g.gA().b,0))>c)A.h(A.y(d+" allows "+A.j(c)+" decimal places",g.k(0),a))
a4.j(0,b,new A.q(g,d))}break
default:break}}A.MT(a4)
return new A.nN(a3,j)},
nN:function nN(a,b){this.a=a
this.c=b},
AD:function AD(a){this.a=a},
ag:function ag(a,b){this.a=a
this.$ti=b},
j_:function j_(a,b){this.a=a
this.$ti=b},
FU(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
if(a8.d!==B.o)return a6
for(s=A.aE(a7.fx,t.v),r=s.length,q=a8.a,p=a6,o=0;o<r;++o){n=s[o]
if(n.b===q)if(p!=null){m=n.d
l=p.d
l=A.b(m.a,m.b,m.c).l(0,A.b(l.a,l.b,l.c))>0
m=l}else m=!0
else m=!1
if(m)p=n}if(p==null||p.Q.length===0)return a6
for(s=a7.ce(q),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>")),q=p.c,m=q.a,l=q.b,q=q.c,k=p.d,j=k.a,i=k.b,h=k.c,g=a6,f=g;s.n();){e=r.gt()
d=e.w
c=d.a
b=d.b
d=d.c
if(A.b(c,b,d).l(0,A.b(m,l,q))<0||A.b(c,b,d).l(0,A.b(j,i,h))>0)continue
a=$.H9()
a0=e.z
a1=a.aj(a0==null?"":a0)
if(a1!=null)if(f!=null){a=f.w
a=A.b(c,b,d).l(0,A.b(a.a,a.b,a.c))>0
d=a}else d=!0
else d=!1
if(d){g=a1
f=e}}if(f==null||g==null)return a6
s=g.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
a2=A.Z(r,a6,a6)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
a3=A.Z(s,a6,a6)
s=A.c([],t.Ev)
for(r=p.Q,q=r.length,m=a3-a2,o=0;l=r.length,o<l;r.length===q||(0,A.m)(r),++o){a4=r[o]
if(a4.e===m)s.push(a4)}if(s.length===1)a5=B.a.gaQ(s)
else a5=l===1?B.a.gaQ(r):a6
return a5==null?a6:new A.pd(a5,k,a3,f.f)},
Cj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.w(d,t.qD)
for(s=A.aE(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
n=c.h(0,o)
if(n!=null){m=p.d
l=n.a
l=A.b(m.a,m.b,m.c).l(0,A.b(l.a,l.b,l.c))>0
m=l}else m=!0
if(m)c.j(0,o,new A.jg(p.d,p.Q))}k=A.c([],t.sA)
d=A.a4(d)
for(s=a.gK().gS(),s=s.gB(s);s.n();){j=A.FU(a,s.gt())
if(j!=null)d.m(0,j.a.bi(""))}for(s=new A.ac(c,c.$ti.i("ac<1,2>")).gB(0),r=t.b;s.n();){o=s.d
i=o.a
h=o.b
g=a.gK().h(0,i)
if(g!=null){o=g.d
o=o!==B.y&&o!==B.o}else o=!0
if(o)continue
for(o=J.S(h.b),m=h.a,l=g.a;o.n();){f=o.gt()
if(d.v(0,f.bi("")))continue
e=A.BF(a.c9(l),r)
e=e==null?null:e.a
B.a.m(k,new A.ct(g,f,m,e==null?l:e))}}B.a.E(k,new A.xC())
return k},
FC(a,b){var s=a.gK().gS(),r=A.p(s)
return A.aN(new A.o(s,r.i("k(i.E)").a(new A.z2(b)),r.i("o<i.E>")),t.b)},
Ci(a,b){var s=A.Cj(a),r=A.L(s)
return A.aN(new A.o(s,r.i("k(1)").a(new A.xB(b)),r.i("o<1>")),t.eY)},
LF(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.c([],t.M)
for(s=A.Cj(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.b
n=o.c
m=n.a.l(0,$.M())
if(m!==0&&A.FC(a,o.bi(p.d))==null){m=o.bi(p.d)
l=p.a
k=o.a===B.cf?"personal loan":"instalment plan"
j=o.b.k(0)
i=p.c.k(0)
n=n.k(0)
o=o.e
o=o==null?"":", "+A.j(o)+" instalments left"
h.push(new A.W("card-loan:"+m,B.c5,l.a,l.c+" "+k+" of "+j+" is on the "+l.b+" statement to "+i+": "+n+" outstanding"+o+". Add it as a loan so each statement keeps its figures."))}}return h},
FB(a,b){var s,r,q,p,o,n,m=A.c([],t.Q)
for(s=a.gK().gS(),s=s.gB(s),r=b.a,q=r.c,p=r.e,r=r.r;s.n();){o=s.gt()
n=!1
if(o.d===B.o)if(o.CW==null)if(o.c===q)if(o.e===p)if(o.r===r){n=o.as
n=(n==null?null:n.x)==null}if(n)m.push(o)}B.a.E(m,new A.z1())
return m},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pd:function pd(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
xC:function xC(){},
z2:function z2(a){this.a=a},
xB:function xB(a){this.a=a},
z1:function z1(){},
Mr(a){var s,r,q,p,o,n=A.a4(t.N)
for(s=B.b.bN((a.c+" "+a.b).toLowerCase(),A.C("[^a-z0-9]+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
if(p.length>=3){o=A.C("^[0-9]+$",!0,!1)
o=!o.b.test(p)&&!B.m9.v(0,p)}else o=!1
if(o)n.m(0,p)}return n},
FD(e0,e1,e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=null,d6=864e8,d7="statement",d8=e1.as,d9=d8==null
if((d9?d5:d8.x)==null)s=d5
else{r=d8.x
r.toString
s=A.Ci(e0,r)}r=s==null
q=r?A.FU(e0,e1):d5
p=r?d5:s.b
if(p==null)p=q==null?d5:q.a
o=r?d5:s.c
if(o==null)o=q==null?d5:q.b
r=p!=null
n=!1
if(r)if(p.e!=null){if((d9?d5:d8.f)!=null){o.toString
m=d8.f
m.toString
m=A.b(o.a,o.b,o.c).l(0,A.b(m.a,m.b,m.c))>0}else m=!0
n=m}l=d9?d5:d8.c
if(l==null)l=q==null?d5:q.d
k=d9?d5:d8.d
if(n)j=p.e
else j=d9?d5:d8.e
if(n)i=o
else i=d9?d5:d8.f
h=d9?d5:d8.r
if(h==null)h=q==null?d5:q.e
g=d9?d5:d8.w
f=A.c([],t.xQ)
if(i!=null&&k!=null&&j!=null){e=i.a
d=i.b
for(d9=i.c,m=e2.a,c=e2.b,b=e2.c,a=d,a0=e;f.length<j;){a1=a+1
if(k<=A.av(A.b(a0,a1,0)))if(A.b(a0,a,k).l(0,A.b(e,d,d9))>0){B.a.m(f,new A.B(a0,a,k))
if(A.b(a0,a,k).l(0,A.b(m,c,b))>0)break}a2=a===12?new A.r(a0+1,1):new A.r(a0,a1)
a0=a2.a
a=a2.b}}d9=A.c([],t.A)
m=g==null
if(!m)for(c=e0.bq(),b=J.S(c.a),c=new A.O(b,c.b,c.$ti.i("O<1>"));c.n();){a1=b.gt()
if(a1.c===g&&a1.e===B.j)d9.push(a1)}B.a.E(d9,new A.z3())
a3=A.Mr(e1)
a4=A.a4(t.N)
c=A.c([],t.k6)
for(b=A.aE(e0.fx,t.v),a1=b.length,a5=0;a5<a1;++a5){a6=b[a5]
if(a6.b===g)c.push(a6)}a7=A.c([],t.iF)
for(b=A.bO(f,0,t.h),a1=J.S(b.a),a8=b.b,b=new A.at(a1,a8,A.p(b).i("at<1>")),a9=e2.a,b0=e2.b,b1=e2.c,b2="loan:"+e1.a+":",b3=e0.ab.a,b4=j==null,b5=l==null;b.n();){b6={}
b7=b.c
b7=b7>=0?new A.r(a8+b7,a1.gt()):A.h(A.ao())
b6.a=null
b6.a=b7.b
b8=b5?0:l
b9=b8-(b4?0:j)+b7.a+1
c0=d5
if(h!=null)for(b7=[!0,!1],b8=h.a,c1=h.b,a5=0;a5<2;++a5){c2=b7[a5]
for(c3=d9.length,c4=0;c4<d9.length;d9.length===c3||(0,A.m)(d9),++c4){d=d9[c4]
if(a4.v(0,d.a)||d.f.b!==c1)continue
c5=b6.a
c6=d.x
c6=A.b(c6.a,c6.b,c6.c)
c5=A.b(c5.a,c5.b,c5.c)
if(Math.abs(B.d.u(c6.b-c5.b+1000*(c6.a-c5.a),d6))>5)continue
c7=!1
if(c2){c5=d.f
if(c1===c5.b)c5=b8.l(0,c5.a)===0
else c5=c7
c7=c5}else if(d.f.a.l(0,b8)<0){if(d.d!==B.b2){c5=d.z
if(c5==null)c5=""
c5=B.a.N(B.b.bN(c5.toLowerCase(),A.C("[^a-z0-9]+",!0,!1)),a3.geN(a3))}else c5=!0
c7=c5}if(c7){c0=d
break}}if(c0!=null)break}if(c0!=null){a4.m(0,c0.a)
b7=c0.f
b8=h.a
c1=b7.b
c3=h.b
if(c1!==c3)A.h(A.a7(c3,c1))
b7=b7.a
b7=b8.C(0,new A.P(b7.a.R(0),b7.b))
c8=new A.q(b7,c3)
c9=B.e.h(0,c3)
if(c9==null)A.h(A.x(c3,"currency","is not a supported currency"))
if((b7.b<=0?0:Math.max(b7.gA().b,0))>c9)A.h(A.y(c3+" allows "+A.j(c9)+" decimal places",b7.k(0),d5))
b8=b6.a
c1=$.M()
c3=b7.l(0,c1)
c3=c3===0?B.aL:B.bx
b7=b7.l(0,c1)
B.a.m(a7,new A.d0(b9,b8,h,c3,b7===0?d5:c8))
continue}b7=b6.a.k(0)
b8=b3.h(0,B.bF)
b7=b8==null?d5:b8.h(0,b2+b7)
b8=b6.a
b8=A.b(b8.a,b8.b,b8.c)
c1=A.b(a9,b0,b1)
d0=B.d.u(b8.b-c1.b+1000*(b8.a-c1.a),d6)
if(b7!=null)d1=B.aM
else if(d0>3)d1=B.cS
else{if(d0>0)b7=B.cT
else if(d0===0)b7=B.cU
else b7=B.a.N(c,new A.z4(b6))?B.by:B.cV
d1=b7}B.a.m(a7,new A.d0(b9,b6.a,h,d1,d5))}d2=A.Cf(e0,e1,e2,A.Fy(e0,e1.r,e2))
if(r)if(d2!=null){d9=d2.c
d9=A.b(o.a,o.b,o.c).l(0,A.b(d9.a,d9.b,d9.c))>=0
d3=d9}else d3=!0
else d3=!1
if(d3)d4=p.c
else if(d2==null)d4=d5
else{d9=d2.b
r=d9.a
c=r.a
if(c.a)c=c.R(0)
d9=A.a3(new A.P(c,r.b),d9.b)
d4=d9}d9=t.jM.a(new A.z5())
d9=b5||b4?d5:l-j+new A.o(a7,d9,t.dL).gq(0)
if(d3)r=o
else r=d2==null?d5:d2.c
if(d3)c=d7
else if(d2==null)c=""
else c=d2.d===B.cl?"you said":d7
b=A.c([],t.s)
if(h==null)b.push("instalment amount")
if(m)b.push("paying account")
if(d4==null)b.push("outstanding balance")
return new A.p0(d9,l,a7,d4,r,c,b)},
ck:function ck(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e},
p0:function p0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
z3:function z3(){},
z4:function z4(a){this.a=a},
z5:function z5(){},
Cx(a,b){var s,r,q,p,o,n,m,l,k=a.as
if(k==null)throw A.l(A.x(a.a,"loan","has no loan terms"))
s=k.d
r=k.f
q=s==null
p=!q
o=!p||r==null?0:A.EJ(s,r,b)
if(o>0&&k.e!=null){n=k.e
n.toString
Math.max(0,n-o)}m=k.e
l=!p||r==null?0:A.EJ(s,r,b.aG(-1))
p=k.a
if(q)q=B.cA
else if(m===0)q=B.ew
else q=m!=null&&m-l<=0?new A.iG(o):A.KK(s,b)
return new A.p1(p,q)},
EW(a,b){return new A.dd(A.KJ(a,b),t.dU)},
KJ(a,b){return function(){var s=a,r=b
var q=0,p=1,o=[],n,m,l,k,j,i
return function $async$EW(c,d,e){if(d===1){o.push(e)
q=p}for(;;)switch(q){case 0:l=s.a
k=s.b
j=r.a
i=r.b
case 2:if(l>=j)n=l===j&&k<=i
else n=!0
if(!n){q=3
break}q=4
return c.b=new A.r(l,k),1
case 4:m=k===12?new A.r(l+1,1):new A.r(l,k+1)
l=m.a
k=m.b
q=2
break
case 3:return 0
case 1:return c.c=o.at(-1),3}}}},
EJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.EW(b,c),r=s.$ti,s=new A.e8(s.a(),r.i("e8<1>")),q=b.a,p=b.b,r=r.c,o=c.a,n=c.b,m=b.c,l=c.c,k=0;s.n();){j=s.b
if(j==null)j=r.a(j)
i=j.a
h=j.b
if(a<=A.av(A.b(i,h+1,0))){if(A.b(i,h,a).l(0,A.b(q,p,m))>0&&A.b(i,h,a).l(0,A.b(o,n,l))<=0)++k}else{if(!(new A.r(i,h).$s===new A.r(q,p).$s&&i===q&&h===p))j=!(new A.r(i,h).$s===new A.r(o,n).$s&&i===o&&h===n)
else j=!1
if(j)++k}}return k},
KK(a,b){var s,r,q,p,o,n,m=b.a,l=b.b
for(s=b.c,r=l,q=m;;){p=r+1
if(a>A.av(A.b(q,p,0)))return new A.fK(q,r)
o=new A.B(q,r,a)
if(A.b(q,r,a).l(0,A.b(m,l,s))>=0)return new A.ei(o)
n=r===12?new A.r(q+1,1):new A.r(q,p)
q=n.a
r=n.b}},
es:function es(){},
ei:function ei(a){this.a=a},
fK:function fK(a,b){this.a=a
this.b=b},
iH:function iH(){},
iG:function iG(a){this.a=a},
i7:function i7(){},
p1:function p1(a,b){this.a=a
this.w=b},
BO(a){var s,r,q,p,o,n,m,l=null,k="instalment",j=t.c_.a(a.h(0,"principal")),i=A.n(a.h(0,"pendingAsOf"))
if(a.h(0,"type")==null)s=l
else{s=a.h(0,"type")
s.toString
s=A.ai(B.bL,A.d(s),t.gd)}if(j==null)r=l
else{r=j.h(0,"amount")
r.toString
r=A.ah(A.d(r))
q=j.h(0,"currency")
q.toString
q=A.a3(r,A.d(q))
r=q}q=A.aG(a.h(0,"instalmentCount"))
p=A.aG(a.h(0,"paymentDay"))
o=A.aG(a.h(0,"pendingInstalments"))
n=i==null?l:A.ax(i)
if(a.h(0,k)==null)m=l
else{m=a.h(0,k)
m.toString
m=A.aO(t.f.a(m).G(0,t.N,t.X))}return new A.h3(s,r,q,p,o,n,m,A.n(a.h(0,"payingAccountId")),A.n(a.h(0,"cardLoan")))},
FE(a,b){var s,r,q,p,o,n=a.b,m=n!=null
if(m&&n.b!==b)return"the loan amount must be in "+b
if(m&&n.a.l(0,$.M())<=0)return"the loan amount must be more than 0"
s=a.r
m=s!=null
if(m&&s.b!==b)return"the instalment must be in "+b
if(m&&s.a.l(0,$.M())<=0)return"the instalment must be more than 0"
r=a.c
m=r!=null
if(m&&r<1)return"the number of instalments is at least 1"
q=a.d
if(q!=null)p=q<1||q>31
else p=!1
if(p)return"the payment day is 1 to 31"
p=a.e
o=p==null
if(o!==(a.f==null))return"pending instalments and their as of date go together"
o=!o
if(o&&p<0)return"pending instalments cannot be below 0"
if(o&&m&&p>r)return"pending instalments cannot be more than the instalments over the loan"
return null},
dI:function dI(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Ms(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.z6()
if(B.a.N(A.c([d,a0,a2],t.s),A.F7())||A.Fb(a3)||A.Fb(c))return B.lP
p=new A.z8(f)
for(o=[new A.r(d,"Instalments"),new A.r(a0,"Payment day"),new A.r(a2,"Pending instalments")],n=0;n<3;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null&&p.$1(l)==null)return new A.r(g,k+" is a whole number")}s=new A.z7(f,b)
r=null
q=null
for(o=[new A.r(a3,"Loan amount"),new A.r(c,"Instalment")],n=0;n<2;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null){m=f.$1(l)
m.toString
m=A.FZ(m)==null}else m=!1
if(m)return new A.r(g,k+" is an amount: digits, commas and one point")}try{r=f.$1(a3)==null?g:s.$1(a3)}catch(j){if(A.aw(j) instanceof A.b8)return new A.r(g,"Loan amount has more decimal places than "+b+" allows")
else throw j}try{q=f.$1(c)==null?g:s.$1(c)}catch(j){if(A.aw(j) instanceof A.b8)return new A.r(g,"Instalment has more decimal places than "+b+" allows")
else throw j}i=new A.h3(a4,r,p.$1(d),p.$1(a0),p.$1(a2),a1,q,e,a)
h=A.FE(i,b)
return h==null?new A.r(i,g):new A.r(g,h)},
z6:function z6(){},
z8:function z8(a){this.a=a},
z7:function z7(a,b){this.a=a
this.b=b},
DY(a){var s,r,q,p,o,n,m,l,k=a.h(0,"kind")
k.toString
k=A.ai(B.jD,A.d(k),t.iL)
s=a.h(0,"started")
s.toString
s=A.ax(A.d(s))
r=a.h(0,"outstanding")
r.toString
q=t.f
p=t.N
o=t.X
r=A.aO(q.a(r).G(0,p,o))
if(a.h(0,"ends")==null)n=null
else{n=a.h(0,"ends")
n.toString
n=A.ax(A.d(n))}m=A.aG(a.h(0,"remaining"))
if(a.h(0,"amount")==null)q=null
else{l=a.h(0,"amount")
l.toString
o=A.aO(q.a(l).G(0,p,o))
q=o}return new A.hj(k,s,r,n,m,q,A.n(a.h(0,"reference")))},
hj:function hj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fq:function fq(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a,b){this.a=a
this.b=b},
aB(a,b){var s,r=a.F()
a.F()
s=r.av(288e8)
return new A.B(A.b_(s),A.b4(s),A.av(s))},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
Cs(a,b){var s
if(b!=="INR"||a.length<=3)return A.hK(a,A.C("\\B(?=(\\d{3})+(?!\\d))",!0,!1),t.tj.a(t.n.a(new A.yP())),null)
s=a.length-3
return A.hK(B.b.X(a,0,s),A.C("\\B(?=(\\d{2})+(?!\\d))",!0,!1),t.tj.a(t.n.a(new A.yQ())),null)+","+B.b.ac(a,s)},
yP:function yP(){},
yQ:function yQ(){},
nC:function nC(){},
a7(a,b){return new A.kc(a,b)},
a3(a,b){var s=A.ix(b)
if(a.ge8()>s)A.h(A.y(b+" allows "+s+" decimal places",a.k(0),null))
return new A.q(a,b)},
aO(a){var s,r=a.h(0,"amount")
r.toString
r=A.ah(A.d(r))
s=a.h(0,"currency")
s.toString
return A.a3(r,A.d(s))},
ix(a){var s=B.e.h(0,a)
if(s==null)throw A.l(A.x(a,"currency","is not a supported currency"))
return s},
kc:function kc(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
ak:function ak(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
MI(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=864e8,b7=" or ",b8=c2.b1(),b9=b8.$ti,c0=b9.i("o<i.E>"),c1=A.D(new A.o(b8,b9.i("k(i.E)").a(new A.A5()),c0),c0.i("i.E"))
B.a.E(c1,new A.zX())
b8=A.L(c1)
b9=b8.i("k(1)")
b8=b8.i("o<1>")
c0=b8.i("i.E")
s=A.D(new A.o(c1,b9.a(new A.zY(c2)),b8),c0)
r=A.D(new A.o(c1,b9.a(new A.zZ(c2)),b8),c0)
b8=t.C
q=A.w(t.B,b8)
for(b9=r.length,p=0;p<r.length;r.length===b9||(0,A.m)(r),++p){o=r[p]
J.bU(q.aK(o.f,new A.A_()),o)}b9=t.N
n=A.w(b9,b8)
m=A.w(b9,b8)
for(c0=s.length,l=t.tx,k=t.BA,j=t.fx,i=t.yL,h=i.i("i.E"),g=t.q,f=t.A,p=0;e=s.length,p<e;s.length===c0||(0,A.m)(s),++p){d=s[p]
e=A.c([],f)
c=q.h(0,d.f)
c=J.S(c==null?B.aa:c)
b=d.w
a=b.a
a0=b.b
b=b.c
while(c.n()){a1=c.gt()
a2=a1.w
a3=a2.a
a4=a2.b
a2=a2.c
a5=A.b(a3,a4,a2)
a6=A.b(a,a0,b)
a7=!1
if(B.d.u(a5.b-a6.b+1000*(a5.a-a6.a),b6)>=0){a5=A.b(a3,a4,a2)
a6=A.b(a,a0,b)
if(B.d.u(a5.b-a6.b+1000*(a5.a-a6.a),b6)>=0){a2=A.b(a3,a4,a2)
a3=A.b(a,a0,b)
a3=B.d.u(a2.b-a3.b+1000*(a2.a-a3.a),b6)<=5
a2=a3}else a2=a7}else a2=a7
if(a2)e.push(a1)}if(e.length===0)continue
c=A.c([d.z],g)
for(b=d.a,a=c2.e_(b),a0=J.S(a.a),a=new A.O(a0,a.b,a.$ti.i("O<1>"));a.n();)c.push(a0.gt().z)
a8=A.D(new A.o(e,j.a(new A.A0(c2,new A.aj(c,l.a(new A.A1()),k))),i),h)
if(a8.length===0)m.j(0,b,e)
else n.j(0,b,a8)}a9=A.w(b9,b8)
for(p=0;p<s.length;s.length===e||(0,A.m)(s),++p){d=s[p]
b8=n.h(0,d.a)
if(b8==null)b8=B.aa
c0=b8.length
b0=0
for(;b0<b8.length;b8.length===c0||(0,A.m)(b8),++b0)J.bU(a9.aK(b8[b0].a,new A.A2()),d)}b1=new A.zW(c2)
b2=A.c([],t.nt)
b3=A.c([],t.M)
for(b8=s.length,p=0;p<s.length;s.length===b8||(0,A.m)(s),++p){d=s[p]
c0=d.a
b4=m.h(0,c0)
if(b4!=null){l=d.f.k(0)
k=A.j(b1.$1(d))
j=d.w.k(0)
i=A.L(b4)
i=new A.aj(b4,i.i("f(1)").a(b1),i.i("aj<1,f>")).Z(0,b7)
h=b4.length===1?"that card's bank":"their banks"
B.a.m(b3,new A.W("card-bill?:"+c0,B.P,c0,l+" left "+k+" on "+j+": it may pay "+i+", but nothing names "+h+"."))
continue}b5=n.h(0,c0)
if(b5==null)continue
if(b5.length>1){l=A.L(b5)
B.a.m(b3,new A.W("card-bill?:"+c0,B.P,c0,d.f.k(0)+" left "+A.j(b1.$1(d))+" on "+d.w.k(0)+": it may pay "+new A.aj(b5,l.i("f(1)").a(b1),l.i("aj<1,f>")).Z(0,b7)+"."))}else{c0=a9.h(0,B.a.gaQ(b5).a)
c0.toString
if(J.aD(c0)===1){B.a.gaQ(b5)
B.a.m(b2,new A.k4())}}}for(b8=r.length,p=0;p<r.length;r.length===b8||(0,A.m)(r),++p){o=r[p]
c0=o.a
b5=a9.h(0,c0)
if(b5==null||J.aD(b5)<2)continue
B.a.m(b3,new A.W("card-bill?:"+c0,B.P,c0,o.f.k(0)+" paid to "+A.j(b1.$1(o))+" on "+o.w.k(0)+" may come from "+J.D1(b5,new A.A3(b1),b9).Z(0,b7)+"."))}B.a.E(b3,new A.A4())
return new A.nc(b3)},
nb:function nb(){},
k4:function k4(){},
nc:function nc(a){this.b=a},
A5:function A5(){},
zX:function zX(){},
zY:function zY(a){this.a=a},
zZ:function zZ(a){this.a=a},
A_:function A_(){},
A1:function A1(){},
A0:function A0(a,b){this.a=a
this.b=b},
zV:function zV(a){this.a=a},
A2:function A2(){},
zW:function zW(a){this.a=a},
A3:function A3(a){this.a=a},
A4:function A4(){},
Ng(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
a=A.b(a.a,a.b,a.c).l(0,A.b(a2.a,a2.b,a2.c))>0?a:a2
s=a1.CW
r=s!=null&&A.b(s.a,s.b,s.c).l(0,A.b(a3.a,a3.b,a3.c))<0?s:a3
q=r.a
p=r.b
o=r.c
if(A.b(a.a,a.b,a.c).l(0,A.b(q,p,o))>0)return!0
n=A.c([],t.hy)
for(m=A.aE(a0.fx,t.v),l=m.length,k=a1.a,j=0;j<l;++j){i=m[j]
if(i.b===k&&i.r!=null)n.push(new A.r(i.c,i.d))}for(m=A.aE(a0.RG,t.lA),l=m.length,j=0;j<l;++j){h=m[j]
if(h.a===k)n.push(new A.r(h.b,h.c))}B.a.E(n,new A.AY())
for(m=n.length,g=a,j=0;j<n.length;n.length===m||(0,A.m)(n),++j){l=n[j]
i=l.a
f=l.b
l=g.a
k=g.b
e=g.c
if(A.b(i.a,i.b,i.c).l(0,A.b(l,k,e))>0)break
d=f.a
c=f.b
b=f.c
if(A.b(d,c,b).l(0,A.b(l,k,e))>=0){h=A.b(d,c,b).av(864e8)
g=new A.B(A.b_(h),A.b4(h),A.av(h))}if(A.b(g.a,g.b,g.c).l(0,A.b(q,p,o))>0)return!0}return A.b(g.a,g.b,g.c).l(0,A.b(q,p,o))>0},
MB(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=864e8,a9=A.c([],t.lz),b0=b4.gK().gS(),b1=A.p(b0),b2=b1.i("o<i.E>"),b3=A.D(new A.o(b0,b1.i("k(i.E)").a(new A.zk(b4)),b2),b2.i("i.E"))
B.a.E(b3,new A.zl())
for(b0=b3.length,b1=b4.RG,b2=t.lA,s=b4.fx,r=t.v,q=t.hy,p=b6.a,o=b6.b,n=b6.c,m=0;m<b3.length;b3.length===b0||(0,A.m)(b3),++m){l=b3[m]
k=new A.zn(b4,l)
j=A.c([],q)
i=A.d_(s,!1,r)
i.$flags=3
h=i
g=h.length
f=l.a
e=l.w
d=e.a
c=e.b
b=e.c
a=0
for(;a<g;++a){a0=h[a]
if(a0.b===f){a1=a0.d
a1=A.b(a1.a,a1.b,a1.c).l(0,A.b(d,c,b))>=0}else a1=!1
if(a1)j.push(new A.r(a0.c,a0.d))}i=A.d_(b1,!1,b2)
i.$flags=3
h=i
g=h.length
a=0
for(;a<g;++a){a2=h[a]
if(a2.a===f){a1=a2.c
a1=A.b(a1.a,a1.b,a1.c).l(0,A.b(d,c,b))>=0}else a1=!1
if(a1)j.push(new A.r(a2.b,a2.c))}B.a.E(j,new A.zm())
for(h=j.length,a=0;a<j.length;j.length===h||(0,A.m)(j),++a){g=j[a]
a3=g.a
a4=g.b
g=a3.a
d=a3.b
c=a3.c
b=e.a
a1=e.b
a5=e.c
if(A.b(g,d,c).l(0,A.b(b,a1,a5))>0){a2=A.b(g,d,c).av(-864e8)
a6=new A.B(A.b_(a2),A.b4(a2),A.av(a2))
B.a.m(a9,new A.iw(f,e,a6,k.$2(e,a6)))}a2=A.b(a4.a,a4.b,a4.c).av(a8)
g=A.b_(a2)
d=A.b4(a2)
c=A.av(a2)
a7=new A.B(g,d,c)
if(A.b(g,d,c).l(0,A.b(b,a1,a5))>0)e=a7}if(l.CW==null){j=A.b(p,o,n)
h=A.b(e.a,e.b,e.c)
h=B.d.u(j.b-h.b+1000*(j.a-h.a),a8)>45
j=h}else j=!1
if(j)B.a.m(a9,new A.iw(f,e,null,k.$2(e,b6)))}return a9},
MA(a,b){var s,r,q,p,o,n,m,l=A.c([],t.M)
for(s=A.MB(a,B.ez,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.a
n=p.b.k(0)
m=a.gK().h(0,o)
m.toString
l.push(new A.W("missing-statement:"+o+":"+n,B.bZ,o,A.Kd(a,m,p,b)))}return l},
Kd(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="No statement for ",d=A.c([],t.k6)
for(s=A.aE(a.fx,t.v),r=s.length,q=b.a,p=b.w,o=p.a,n=p.b,m=p.c,l=0;l<r;++l){k=s[l]
if(k.b===q){j=k.d
j=A.b(j.a,j.b,j.c).l(0,A.b(o,n,m))>=0}else j=!1
if(j)d.push(k)}i=B.a.N(d,new A.vl(c))?"between two that were read":"before the first one read"
h=c.c
if(h!=null)g=e+b.b+" covers "+c.b.k(0)+" to "+h.k(0)+", "+i+"."
else{d=d.length===0&&c.b.J(0,p)
s=c.b
r=e+b.b
g=d?r+" has been read since its history start, "+s.k(0)+".":r+" covers the "+B.d.u(A.b(a0.a,a0.b,a0.c).ar(A.b(s.a,s.b,s.c)).a,864e8)+" days from "+s.k(0)+"."}f=c.d
A:{if(0===f){d=""
break A}if(1===f){d=" 1 alert in that time waits for it."
break A}d=" "+f+" alerts in that time wait for it."
break A}return g+d+" Add it from Statements, or say the bank sent none."},
Mz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.k6)
for(s=A.aE(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)f.push(p)}if(f.length<2)return B.jO
s=A.c([],t.hy)
for(r=f.length,q=0;q<f.length;f.length===r||(0,A.m)(f),++q){p=f[q]
s.push(new A.r(p.c,p.d))}for(r=A.aE(a.RG,t.lA),o=r.length,q=0;q<o;++q){n=r[q]
if(n.a===b)s.push(new A.r(n.b,n.c))}B.a.E(s,new A.zf())
r=A.a4(t.l1)
for(o=f.length,q=0;q<f.length;f.length===o||(0,A.m)(f),++q){m=f[q].d
r.m(0,new A.ht(m.b,m.a))}l=new A.zi()
k=new A.zj()
j=A.D(r,r.$ti.c)
B.a.E(j,new A.zg(l))
i=new A.zh(s)
f=A.c([],t.l7)
s=l.$1(B.a.ga0(j))
if(typeof s!=="number")return s.C()
h=s+1
for(;;){s=l.$1(B.a.gau(j))
if(typeof s!=="number")return A.Ct(s)
if(!(h<s))break
g=k.$1(h)
s=r.v(0,g)
if(!s){s=g.b
o=g.a
n=A.b(s,o+1,1).av(-864e8)
if(!i.$2(new A.B(s,o,1),new A.B(A.b_(n),A.b4(n),A.av(n))))f.push(g)}++h}return f},
tY:function tY(){},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AY:function AY(){},
zk:function zk(a){this.a=a},
zl:function zl(){},
zn:function zn(a,b){this.a=a
this.b=b},
zo:function zo(a,b){this.a=a
this.b=b},
zm:function zm(){},
vl:function vl(a){this.a=a},
zf:function zf(){},
zi:function zi(){},
zj:function zj(){},
zg:function zg(a){this.a=a},
zh:function zh(a){this.a=a},
ME(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="currency",b0="is not a supported currency",b1=A.c([],t.fB),b2=A.w(t.N,t.C)
for(s=b3.b1(),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>"));s.n();){q=r.gt()
J.bU(b2.aK(q.c,new A.zt()),q)}for(s=new A.a1(b2,b2.r,b2.e,b2.$ti.i("a1<2>"));s.n();)J.mO(s.d,new A.zu())
p=new A.zw()
for(s=A.aE(b3.fx,t.v),r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
m=b3.gK().h(0,q)
if(m!=null){l=n.d
k=m.w
k=A.b(l.a,l.b,l.c).l(0,A.b(k.a,k.b,k.c))<0
l=k}else l=!0
if(l)continue
l=n.f
j=l.b
k=$.M()
i=new A.q(k,j)
h=B.e.h(0,j)
if(h==null)A.h(A.x(j,a9,b0))
g=k.b<=0
if((g?0:Math.max(k.gA().b,0))>h)A.h(A.y(j+" allows "+A.j(h)+" decimal places",k.k(0),a8))
f=new A.q(k,j)
h=B.e.h(0,j)
if(h==null)A.h(A.x(j,a9,b0))
if((g?0:Math.max(k.gA().b,0))>h)A.h(A.y(j+" allows "+A.j(h)+" decimal places",k.k(0),a8))
e=b2.h(0,q)
if(e==null)e=B.aa
k=n.c
d=p.$2(e,k)
g=J.ar(e)
c=n.d
b=c.a
a=c.b
a0=c.c
a1=j+" allows "
a2=0
a3=0
for(;;){if(d<g.gq(e)){a4=g.h(e,d).w
a4=A.b(a4.a,a4.b,a4.c).l(0,A.b(b,a,a0))<=0}else a4=!1
if(!a4)break
A:{a5=g.h(e,d)
a6=a5.f
if(a6.b!==j){++a3
break A}if(!(a5.e===B.m)){a4=$.M()
h=B.e.h(0,j)
if(h==null)A.h(A.x(j,a9,b0))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>h)A.h(A.y(a1+A.j(h)+" decimal places",a4.k(0),a8))
a7=a6.a
a7=a4.C(0,new A.P(a7.a.R(0),a7.b))
a6=new A.q(a7,j)
h=B.e.h(0,j)
if(h==null)A.h(A.x(j,a9,b0))
if((a7.b<=0?0:Math.max(a7.gA().b,0))>h)A.h(A.y(a1+A.j(h)+" decimal places",a7.k(0),a8))}a4=a5.d
if(a4!=null)a4=(a4===B.n||a4===B.w)&&a5.Q==null
else a4=!0
if(a4){++a2
a4=a6.b
a7=f.b
if(a4!==a7)A.h(A.a7(a7,a4))
a4=f.a.C(0,a6.a)
f=new A.q(a4,a7)
h=B.e.h(0,a7)
if(h==null)A.h(A.x(a7,a9,b0))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>h)A.h(A.y(a7+" allows "+A.j(h)+" decimal places",a4.k(0),a8))}else{a4=a6.b
a7=i.b
if(a4!==a7)A.h(A.a7(a7,a4))
a4=i.a.C(0,a6.a)
i=new A.q(a4,a7)
h=B.e.h(0,a7)
if(h==null)A.h(A.x(a7,a9,b0))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>h)A.h(A.y(a7+" allows "+A.j(h)+" decimal places",a4.k(0),a8))}}++d}g=n.e
b=g.b
if(b!==j)A.h(A.a7(j,b))
g=g.a
g=l.a.C(0,new A.P(g.a.R(0),g.b))
h=B.e.h(0,j)
if(h==null)A.h(A.x(j,a9,b0))
if((g.b<=0?0:Math.max(g.gA().b,0))>h)A.h(A.y(a1+A.j(h)+" decimal places",g.k(0),a8))
B.a.m(b1,new A.dJ(q,n.a,k,c,new A.q(g,j),i,a2,a3))}s=t.wg
r=A.w(s,t.S)
for(s=A.bO(b1,0,s),q=J.S(s.a),l=s.b,s=new A.at(q,l,A.p(s).i("at<1>"));s.n();){k=s.c
k=k>=0?new A.r(l+k,q.gt()):A.h(A.ao())
r.j(0,k.b,k.a)}B.a.E(b1,new A.zv(r))
return b1},
MD(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=A.c([],t.M)
for(s=A.ME(a0),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=!1
if(p.r===0)if(p.x===0){o=p.f
n=p.e
m=n.b
l=o.b
if(m!==l)A.h(A.a7(l,m))
n=n.a
n=o.a.C(0,new A.P(n.a.R(0),n.b))
k=B.e.h(0,l)
if(k==null)A.h(A.x(l,c,b))
if((n.b<=0?0:Math.max(n.gA().b,0))>k)A.h(A.y(l+" allows "+A.j(k)+" decimal places",n.k(0),d))
o=n.l(0,$.M())
o=o!==0}if(o){o=p.b
n=p.a
m=a0.gK().h(0,n)
m=m==null?d:m.b
n=m==null?n:m
m=p.c.k(0)
l=p.d.k(0)
j=p.f
i=j.k(0)
h=p.e
g=h.k(0)
f=h.b
e=j.b
if(f!==e)A.h(A.a7(e,f))
h=h.a
h=j.a.C(0,new A.P(h.a.R(0),h.b))
k=B.e.h(0,e)
if(k==null)A.h(A.x(e,c,b))
j=h.b
f=j<=0
if((f?0:Math.max(h.gA().b,0))>k)A.h(A.y(e+" allows "+A.j(k)+" decimal places",h.k(0),d))
h=h.a
j=new A.P(h.a?h.R(0):h,j)
k=B.e.h(0,e)
if(k==null)A.h(A.x(e,c,b))
if((f?0:Math.max(j.gA().b,0))>k)A.h(A.y(e+" allows "+A.j(k)+" decimal places",j.k(0),d))
a.push(new A.W("month-check:"+o,B.b6,o,"The transactions filed on "+n+" from "+m+" to "+l+" come to "+i+", but the statement moved "+g+" (off by "+new A.q(j,e).k(0)+"). A transaction is missing, extra or has the wrong amount."))}}return a},
dJ:function dJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
zt:function zt(){},
zu:function zu(){},
zw:function zw(){},
zv:function zv(a){this.a=a},
M6(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=null,b8="currency",b9="is not a supported currency",c0=864e8,c1=t.A,c2=A.c([],c1),c3=A.c([],c1)
for(s=c4.b1(),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>"));s.n();){q=r.gt()
p=q.d
if(p==null&&q.e===B.m&&q.ay==null)B.a.m(c2,q)
if(p===B.a_){o=q.ch
o=o==null?b7:B.b.ak(o,"forbook:")
n=o===!0}else n=!1
if((p===B.n||n)&&q.e===B.j)B.a.m(c3,q)}B.a.E(c2,new A.ya())
s=A.a4(t.p_)
for(r=c2.length,m=0;m<c2.length;c2.length===r||(0,A.m)(c2),++m){l=c2[m]
s.m(0,new A.r(l.c,l.f.b))}k=A.w(t.ER,t.C)
for(r=c3.length,m=0;m<c3.length;c3.length===r||(0,A.m)(c3),++m){j=c3[m]
q=j.c
p=j.f.b
if(!s.v(0,new A.r(q,p)))continue
o=j.z
if(o==null)o=""
i=A.C("\\s+",!0,!1)
J.bU(k.aK(new A.bz(q,p,B.b.H(A.a8(o.toUpperCase(),i," "))),new A.yb()),j)}for(r=new A.a1(k,k.r,k.e,k.$ti.i("a1<2>"));r.n();)J.mO(r.d,new A.yc())
r=t.N
q=t.B
p=A.w(r,q)
for(o=c3.length,m=0;m<c3.length;c3.length===o||(0,A.m)(c3),++m){j=c3[m]
if(j.d===B.a_&&s.v(0,new A.r(j.c,j.f.b))){i=j.f.b
h=$.M()
g=B.e.h(0,i)
if(g==null)A.h(A.x(i,b8,b9))
if((h.b<=0?0:Math.max(h.gA().b,0))>g)A.h(A.y(i+" allows "+A.j(g)+" decimal places",h.k(0),b7))
p.j(0,j.a,new A.q(h,i))}}if(p.a!==0)for(s=c4.b1(),o=J.S(s.a),s=new A.O(o,s.b,s.$ti.i("O<1>"));s.n();){i=o.gt()
f=i.ay
if(i.d===B.Z&&f!=null&&p.D(f)){h=p.h(0,f)
i=i.f
e=h.a
d=i.b
h=h.b
if(d!==h)A.h(A.a7(h,d))
i=e.C(0,i.a)
g=B.e.h(0,h)
if(g==null)A.h(A.x(h,b8,b9))
if((i.b<=0?0:Math.max(i.gA().b,0))>g)A.h(A.y(h+" allows "+A.j(g)+" decimal places",i.k(0),b7))
p.j(0,f,new A.q(i,h))}}c=new A.yh(p,new A.e2(c4.b.c,t.iB))
b=A.w(r,q)
a=A.c([],t.sx)
a0=A.c([],t.M)
for(s=c2.length,r=t.fx,q=t.yL,p=q.i("i.E"),m=0;m<c2.length;c2.length===s||(0,A.m)(c2),++m){l=c2[m]
o=l.z
i=o==null?"":o
h=A.C("\\s+",!0,!1)
a1=B.b.H(A.a8(i.toUpperCase(),h," "))
if(a1.length===0)continue
a2=new A.yg(c,b)
i=l.f
h=i.b
a3=k.h(0,new A.bz(l.c,h,a1))
if(a3==null)a3=B.aa
e=J.ar(a3)
a4=e.gq(a3)
for(d=l.w,a5=d.a,a6=d.b,a7=d.c,a8=0;a8<a4;){a9=B.d.am(a8+a4,1)
b0=e.h(a3,a9).w
b1=A.b(a5,a6,a7)
b0=A.b(b0.a,b0.b,b0.c)
if(B.d.u(b1.b-b0.b+1000*(b1.a-b0.a),c0)>90)a8=a9+1
else a4=a9}b0=A.c([],c1)
b1=i.a
b2=a8
for(;;){if(b2<e.gq(a3)){b3=e.h(a3,b2).w
b4=A.b(a5,a6,a7)
b3=A.b(b3.a,b3.b,b3.c)
b3=B.d.u(b4.b-b3.b+1000*(b4.a-b3.a),c0)>=0}else b3=!1
if(!b3)break
if(a2.$1(e.h(a3,b2)).a.l(0,b1)>=0)b0.push(e.h(a3,b2));++b2}B.a.E(b0,new A.yd())
if(b0.length>1){b5=A.D(new A.o(b0,r.a(new A.ye(l)),q),p)
b6=b5.length!==0?b5:b0}else b6=b0
e=b6.length
if(e===0)continue
if(e>1){h=l.a
e=A.L(b6)
B.a.m(a0,new A.W("refund?:"+h,B.P,h,i.k(0)+" back from "+A.j(o)+" on "+d.k(0)+" may refund the purchase of "+new A.aj(b6,e.i("f(1)").a(new A.yf()),e.i("aj<1,f>")).Z(0," or of ")+"."))
continue}j=B.a.gaQ(b6)
if(j.d===B.n){o=j.f
i=!1
if(o.b===h)o=o.a.l(0,b1)===0
else o=i
if(o){o=j.w
a7=A.b(a5,a6,a7)
o=A.b(o.a,o.b,o.c)
if(B.d.u(a7.b-o.b+1000*(a7.a-o.a),c0)<=7){o=c.$1(j).a.l(0,$.M())
if(o===0)b.h(0,j.a)}}}o=j.a
i=b.h(0,o)
if(i==null){i=j.f.b
e=$.M()
d=new A.q(e,i)
g=B.e.h(0,i)
if(g==null)A.h(A.x(i,b8,b9))
if((e.b<=0?0:Math.max(e.gA().b,0))>g)A.h(A.y(i+" allows "+A.j(g)+" decimal places",e.k(0),b7))
i=d}e=i.b
if(h!==e)A.h(A.a7(e,h))
i=i.a.C(0,b1)
g=B.e.h(0,e)
if(g==null)A.h(A.x(e,b8,b9))
if((i.b<=0?0:Math.max(i.gA().b,0))>g)A.h(A.y(e+" allows "+A.j(g)+" decimal places",i.k(0),b7))
b.j(0,o,new A.q(i,e))
B.a.m(a,new A.lg())}return new A.tA(a0)},
tz:function tz(){},
lg:function lg(){},
tA:function tA(a){this.b=a},
ya:function ya(){},
yb:function yb(){},
yc:function yc(){},
yh:function yh(a,b){this.a=a
this.b=b},
yg:function yg(a,b){this.a=a
this.b=b},
yd:function yd(){},
ye:function ye(a){this.a=a},
yf:function yf(){},
M7(c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=c7.b1(),c6=A.D(c5,c5.$ti.i("i.E"))
B.a.E(c6,new A.yj())
s=A.w(t.bY,t.L)
for(r=0;r<c6.length;++r){c5=c6[r]
J.bU(s.aK(new A.bz(c5.c,c5.e,c5.f),new A.yk()),r)}q=A.c([],t.Dg)
for(c5=new A.a1(s,s.r,s.e,s.$ti.i("a1<2>"));c5.n();){p=c5.d
for(o=J.ar(p),n=0;n<o.gq(p);n=m)for(m=n+1,l=m;l<o.gq(p);++l){k=o.h(p,n)
if(!(k>=0&&k<c6.length))return A.a(c6,k)
k=c6[k]
j=o.h(p,l)
if(!(j>=0&&j<c6.length))return A.a(c6,j)
i=A.KQ(c7,k,c6[j],B.ey)
if(i!=null)B.a.m(q,new A.bz(o.h(p,n),o.h(p,l),i))}}B.a.E(q,new A.yl())
c5=A.c([],t.hK)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.m)(q),++h){o=q[h]
r=o.a
g=o.b
k=c6.length
if(!(r>=0&&r<k))return A.a(c6,r)
j=c6[r]
if(!(g>=0&&g<k))return A.a(c6,g)
c5.push(new A.bz(j,c6[g],o.c))}p=t.N
f=A.w(p,p)
e=new A.yt(f)
for(o=c5.length,h=0;k=c5.length,h<k;c5.length===o||(0,A.m)(c5),++h){k=c5[h]
if(k.c!==B.b9)continue
d=e.$1(k.a.a)
c=e.$1(k.b.a)
if(d!==c){k=d<c?-1:1
k=k<0?c:d
j=d<c?-1:1
f.j(0,k,j<0?d:c)}}b=A.w(p,t.C)
for(h=0;h<c5.length;c5.length===k||(0,A.m)(c5),++h){o=c5[h]
if(o.c!==B.b9)continue
for(o=[o.a,o.b],a=0;a<2;++a){a0=o[a]
a1=b.aK(e.$1(a0.a),new A.ym())
j=J.ar(a1)
if(!j.v(a1,a0))j.m(a1,a0)}}a2=A.c([],t.st)
a3=A.c([],t.M)
a4=A.a4(p)
for(o=new A.a1(b,b.r,b.e,b.$ti.i("a1<2>")),k=t.W,j=t.A;o.n();){a5=o.d
a6=A.a4(p)
for(a7=J.b1(a5),a8=a7.gB(a5);a8.n();)a6.m(0,a8.gt().a)
a8=A.c([],j)
for(a9=a7.gB(a5);a9.n();){b0=a9.gt()
for(b1=a7.gB(a5),b2=b0.a,b3=b0.y,b4=b3.a,b3=b3.b;b1.n();){b5=b1.gt()
b6=b5.a
if(b2===b6)b6=0
else b6=b2<b6?-1:1
if(b6<0){b5=b5.y
b5=b4===b5.a&&b3!==b5.b}else b5=!1
if(b5)a8.push(b0)}}a8=a8.length
b7=B.a.N(c5,new A.yn(a6))
b8=a7.c_(a5,A.N4()).gq(0)
a9=a7.c_(a5,new A.yo(c7))
b9=A.D(a9,a9.$ti.i("i.E"))
c0=b9.length!==0&&a7.N(a5,new A.yp(b9))
c1=a7.N(a5,new A.yq(a5,c7))
if(a8!==0||b7||b8>1||b9.length>1||c0||c1){a4.a1(0,a6)
continue}if(b9.length!==0)c2=B.a.gaQ(b9)
else{a6=A.D(a5,k)
B.a.E(a6,A.N5())
c2=B.a.ga0(a6)}for(a5=a7.gB(a5),a6=c2.a;a5.n();){a7=a5.gt().a
if(a7!==a6)B.a.m(a2,new A.dQ(a6,a7))}}for(p=c5.length,h=0;h<c5.length;c5.length===p||(0,A.m)(c5),++h){o=c5[h]
c3=o.a
c4=o.b
if(o.c===B.cm||a4.v(0,c3.a)){o=c3.a
B.a.m(a3,new A.W("same-event?:"+o+":"+c4.a,B.v,o,c3.f.k(0)+" on "+c3.w.k(0)+" by "+c3.y.a+" and "+c4.y.a+" may be one payment."))}}B.a.E(a2,new A.yr())
B.a.E(a3,new A.ys())
return new A.tM(a3)},
KQ(a,b,c,d){var s,r,q,p,o,n=null
if(b.c!==c.c||b.e!==c.e||!b.f.J(0,c.f))return n
if(a.dT.v(0,A.og(b.a,c.a)))return n
s=b.y
r=c.y
q=s.b===r.b
if(!q&&s.a===r.a)return n
if(q)return B.b9
p=b.r
o=c.r
if(p!=null&&o!=null&&Math.abs(B.d.u(p.ar(o).a,6e7))<=120)return B.b9
s=b.w
r=c.w
if(Math.abs(B.d.u(A.b(r.a,r.b,r.c).ar(A.b(s.a,s.b,s.c)).a,864e8))<=1)return B.cm
return n},
KE(a){t.W.a(a)
return a.CW!=null||a.y.d},
KT(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=b.CW!=null||b.y.d?1:0
s=q-(a.CW!=null||a.y.d?1:0)
if(s!==0)return s
r=a.y.c.l(0,b.y.c)
return r!==0?r:B.b.l(a.a,b.a)},
tL:function tL(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
tM:function tM(a){this.b=a},
bR:function bR(a,b){this.a=a
this.b=b},
yj:function yj(){},
yk:function yk(){},
yl:function yl(){},
yt:function yt(a){this.a=a},
ym:function ym(){},
yn:function yn(a){this.a=a},
yo:function yo(a){this.a=a},
yp:function yp(a){this.a=a},
yq:function yq(a,b){this.a=a
this.b=b},
yi:function yi(a,b){this.a=a
this.b=b},
yr:function yr(){},
ys:function ys(){},
G3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.c([],t.g0)
for(s=a.gK().gS(),s=s.gB(s),r=a.fx,q=t.v,p=t.k6;s.n();){o=s.gt()
n=o.ay
if(n==null||n.a!==B.al)continue
m=A.c([],p)
l=A.d_(r,!1,q)
l.$flags=3
k=l
j=k.length
i=o.a
o=o.w
h=o.a
g=o.b
f=o.c
e=0
for(;e<j;++e){d=k[e]
if(d.b===i){c=d.d
c=A.b(c.a,c.b,c.c).l(0,A.b(h,g,f))>=0}else c=!1
if(c)m.push(d)}B.a.E(m,new A.AP())
k=!0
if(m.length!==0){j=B.a.ga0(m)
c=n.b
c.toString
if(j.c.a<=c){k=B.a.ga0(m).c
k=h===k.a&&g===k.b&&f===k.c}}if(k)continue
k=n.b
k.toString
B.a.m(b,new A.dS(i,o,k,B.a.ga0(m)))}B.a.E(b,new A.AQ())
return b},
N9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.M)
for(s=A.G3(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.a
n=p.d
m=a.gK().h(0,o).b
l=p.b
k=l.k(0)
j=n.c
i=j.k(0)
h=n.d.k(0)
l=A.b(j.a,j.b,j.c).l(0,A.b(l.a,l.b,l.c))>0?" No statement covers the days before it.":""
g.push(new A.W("start-from:"+o+":"+n.a,B.c2,o,m+"'s history starts "+k+", from its Drive year folder "+p.c+", not from a statement. The first statement read covers "+i+" to "+h+"."+l))}return g},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AP:function AP(){},
AQ:function AQ(){},
MJ(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=864e8,b0="; pair it by hand.",b1=b5.$ti,b2=b1.i("o<i.E>"),b3=b2.i("o<i.E>"),b4=A.D(new A.o(new A.o(b5,b1.i("k(i.E)").a(new A.A7(b8)),b2),b2.i("k(i.E)").a(new A.A8()),b3),b3.i("i.E"))
B.a.E(b4,new A.A9())
b1=A.L(b4)
b2=b1.i("k(1)")
b1=b1.i("o<1>")
b3=b1.i("i.E")
s=A.D(new A.o(b4,b2.a(new A.Aa()),b1),b3)
r=A.D(new A.o(b4,b2.a(new A.Ab()),b1),b3)
q=new A.Af()
p=new A.Ad(b7,q)
o=new A.Ae()
b1=t.N
b2=t.C
b3=A.w(b1,b2)
for(n=s.length,m=t.A,l=0;l<s.length;s.length===n||(0,A.m)(s),++l){k=s[l]
j=A.c([],m)
i=k.w
h=o.$2(r,i)
g=i.a
f=i.b
i=i.c
for(;;){e=r.length
if(h<e){if(!(h>=0))return A.a(r,h)
e=r[h].w
e=A.b(e.a,e.b,e.c)
d=A.b(g,f,i)
d=B.d.u(e.b-d.b+1000*(e.a-d.a),a9)<=5
e=d}else e=!1
if(!e)break
if(!(h>=0&&h<r.length))return A.a(r,h)
if(p.$2(k,r[h])){if(!(h<r.length))return A.a(r,h)
j.push(r[h])}++h}b3.j(0,k.a,j)}b2=A.w(b1,b2)
for(n=r.length,l=0;l<r.length;r.length===n||(0,A.m)(r),++l){c=r[l]
j=A.c([],m)
i=c.w
g=i.a
f=i.b
i=i.c
b=A.b(g,f,i).av(-432e9)
h=o.$2(s,new A.B(A.b_(b),A.b4(b),A.av(b)))
for(;;){e=s.length
if(h<e){if(!(h>=0))return A.a(s,h)
e=s[h].w
e=A.b(e.a,e.b,e.c).l(0,A.b(g,f,i))<=0}else e=!1
if(!e)break
if(!(h>=0&&h<s.length))return A.a(s,h)
if(p.$2(s[h],c)){if(!(h<s.length))return A.a(s,h)
j.push(s[h])}++h}b2.j(0,c.a,j)}n=t.xw
a=A.c([],n)
a0=A.c([],n)
a1=A.a4(b1)
for(b1=s.length,l=0;l<s.length;s.length===b1||(0,A.m)(s),++l){k=s[l]
n=k.a
b5=b3.h(0,n)
if(b5.length!==1||b2.h(0,B.a.gaQ(b5).a).length!==1)continue
c=B.a.gaQ(b5)
a1.m(0,n)
m=c.a
a1.m(0,m)
if(k.f.b===c.f.b)j=q.$1(k)||q.$1(c)
else j=!1
j=j?a:a0
B.a.m(j,new A.lD(n,m))}a2=new A.A6(b6)
a3=A.c([],t.M)
for(b1=b4.length,n=b9.a,m=b9.b,j=b9.c,l=0;l<b4.length;b4.length===b1||(0,A.m)(b4),++l){a4=b4[l]
i=a4.a
if(a1.v(0,i)||!q.$1(a4))continue
a5=a4.e===B.j
if(a5){g=b3.h(0,i)
g.toString
b5=g}else{g=b2.h(0,i)
g.toString
b5=g}if(b5.length!==0){g=A.L(b5)
a6=new A.aj(b5,g.i("f(1)").a(new A.Ac(a2)),g.i("aj<1,f>")).Z(0," or ")
a7=b5.length===1?", which another transaction also fits":""
g=a4.f
f=a4.w
g=a5?g.k(0)+" left "+A.j(a2.$1(a4))+" on "+f.k(0)+": it may have reached "+a6+a7+b0:g.k(0)+" reached "+A.j(a2.$1(a4))+" on "+f.k(0)+": it may have come from "+a6+a7+b0
B.a.m(a3,new A.W("transfer?:"+i,B.P,i,g))
continue}g=a4.w
f=A.b(n,m,j)
e=A.b(g.a,g.b,g.c)
a8=B.d.u(f.b-e.b+1000*(f.a-e.a),a9)
if(a8<=5)continue
f=""+a8
e=a4.f
g=a5?e.k(0)+" left "+A.j(a2.$1(a4))+" on "+g.k(0)+"; the other side has not arrived after "+f+" days.":e.k(0)+" reached "+A.j(a2.$1(a4))+" on "+g.k(0)+"; the side it came from has not arrived after "+f+" days."
B.a.m(a3,new A.W("in-transit:"+i,B.c6,i,g))}return new A.u8(a0,a3)},
M8(a,b){var s=a.gK().gS(),r=A.p(s),q=r.i("k(i.E)").a(new A.yu()),p=a.b1(),o=p.$ti,n=o.i("k(i.E)").a(new A.yv()),m=t.N,l=A.a4(m)
for(s=s.gB(s),r=new A.O(s,q,r.i("O<i.E>"));r.n();)l.m(0,s.gt().a)
s=A.w(m,m)
for(r=a.gK().gS(),r=r.gB(r);r.n();){q=r.gt()
s.j(0,q.a,q.b)}return A.MJ(new A.o(p,n,o.i("o<i.E>")),s,B.eA,l,b)},
u7:function u7(){},
lD:function lD(a,b){this.a=a
this.b=b},
u8:function u8(a,b){this.b=a
this.c=b},
A7:function A7(a){this.a=a},
A8:function A8(){},
A9:function A9(){},
Aa:function Aa(){},
Ab:function Ab(){},
Af:function Af(){},
Ad:function Ad(a,b){this.a=a
this.b=b},
Ae:function Ae(){},
A6:function A6(a){this.a=a},
Ac:function Ac(a){this.a=a},
yu:function yu(){},
yv:function yv(){},
MG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b==="personal"
if(f)s="personal"
else{r=a.ab.a6(B.aS,b)
s=r==null?null:A.n(r.c.h(0,"country"))}r=A.c([],t.I)
q=B.kw.h(0,s)
if(q!=null)B.a.a1(r,q)
q=a.aJ.e
p=A.p(q).i("N<2>")
o=p.i("o<i.E>")
n=A.D(new A.o(new A.N(q,p),p.i("k(i.E)").a(new A.zO(b)),o),o.i("i.E"))
B.a.E(n,new A.zP())
m=f?"personal-tax:":"compliance:"
for(f=n.length,q=m.length,l=0;l<n.length;n.length===f||(0,A.m)(n),++l){k=n[l]
p=k.f
p.toString
if(!B.b.ak(p,m))continue
j=B.b.ac(p,q)
if(!B.a.N(r,new A.zQ(j)))B.a.m(r,new A.r(j,k.c))}f=A.c([],t.cp)
for(q=r.length,p=A.L(n),o=p.i("k(1)"),p=p.i("o<1>"),i=t.w5,l=0;l<r.length;r.length===q||(0,A.m)(r),++l){h={}
g=r[l]
h.a=null
j=g.a
h.a=j
f.push(new A.l3(j,g.b,A.aN(new A.o(n,o.a(new A.zR(h,m,c)),p),i),A.BF(new A.o(n,o.a(new A.zS(h,m,c)),p),i)))}return f},
LL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.M),f=a.gcD(),e=A.p(f).i("ac<1,2>"),d=e.i("c2<i.E,f>"),c=A.D(new A.c2(new A.o(new A.ac(f,e),e.i("k(i.E)").a(new A.xH()),e.i("o<i.E>")),e.i("f(i.E)").a(new A.xI()),d),d.i("i.E"))
B.a.b9(c)
for(f=c.length,e=a.aJ.a,d=t.s,s=a.ab.a,r=0;r<c.length;c.length===f||(0,A.m)(c),++r){q=c[r]
p=s.h(0,B.aS)
o=p==null?null:p.h(0,q)
if(o==null)continue
p=A.c([],d)
n=o.c
if(A.aA(n.h(0,"incorporated"))==null)p.push("its incorporation date")
if(A.n(n.h(0,"last4"))==null)p.push("its registration number")
n=e.h(0,q)
if((n==null?null:n.c)==null)p.push("its financial year end")
if(p.length!==0){n=q.length
if(n===0)n=q
else{if(0>=n)return A.a(q,0)
n=q[0].toUpperCase()+B.b.ac(q,1)}B.a.m(g,new A.W("company-setup:"+q,B.ac,q,n+" still needs "+B.a.Z(p,", ")+". Nothing is reminded until it is entered."))}for(p=A.MG(a,q,b),n=p.length,m=q.length,l=m===0,k="company-date:"+q+":",j=0;j<p.length;p.length===n||(0,A.m)(p),++j){i=p[j]
if(i.c==null&&i.d!=null){if(l)h=q
else{if(0>=m)return A.a(q,0)
h=q[0].toUpperCase()+B.b.ac(q,1)}B.a.m(g,new A.W(k+i.a,B.ac,q,h+"'s "+i.b+" date "+i.d.d.k(0)+" has passed and no new date is entered. Add the next one from the notice or the accountant."))}}}return g},
l3:function l3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zO:function zO(a){this.a=a},
zP:function zP(){},
zQ:function zQ(a){this.a=a},
zR:function zR(a,b,c){this.a=a
this.b=b
this.c=c},
zS:function zS(a,b,c){this.a=a
this.b=b
this.c=c},
xH:function xH(){},
xI:function xI(){},
BB(a){var s=a.h(0,"name")
s.toString
return new A.nx(A.d(s),A.n(a.h(0,"driveFileId")),A.n(a.h(0,"localId")))},
aA(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Ha().aj(a):m
if(l==null)return m
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.Z(r,m,m)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.Z(r,m,m)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.Z(s,m,m)
n=A.b(q,p,o)
return A.b_(n)===q&&A.b4(n)===p&&A.av(n)===o?new A.B(q,p,o):m},
bM:function bM(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
bC:function bC(a,b,c){this.c=a
this.a=b
this.b=c},
d4:function d4(a,b,c){this.c=a
this.a=b
this.b=c},
nx:function nx(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
em:function em(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r},
Kf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=b.b.toLowerCase()
A:{q=b.c
if(B.k===q||B.a2===q){if(typeof c!="string"||B.b.H(c).length===0)return A.j(e)+" is words"
p=q===B.k?80:300
if(c.length>p||B.b.v(c,"\n"))return A.j(e)+" is one line of at most "+p+" characters"
if($.eU().aM(0,c).gq(0)>=9||A.za(c)!==c)return A.j(e)+" looks like it holds a full number; only the last 4 characters are kept"
break A}if(B.r===q){if(A.aA(c)==null)return A.j(e)+" is written YYYY-MM-DD and is a real day"
break A}if(B.aJ===q){if(typeof c=="string"){o=$.Hw()
o=!o.b.test(c)}else o=!0
if(o)return A.j(e)+" is written HH:MM"
break A}if(B.ao===q){if(typeof c=="string"){o=$.Hk()
o=!o.b.test(c)}else o=!0
if(o)return A.j(e)+" is written YYYY-MM"
break A}if(B.u===q){s=null
try{s=A.aO(t.f.a(c).G(0,t.N,t.X))}catch(n){o=A.j(e)
return o+" is an amount"}if(!B.e.D(s.b))return"currency "+s.b+" is not supported"
if(s.a.l(0,$.M())<=0)return A.j(e)+" is more than zero"
break A}if(B.aK===q){r=typeof c=="string"?A.dr(c):f
if(r==null||r.l(0,$.M())<=0)return A.j(e)+" is a number more than zero"
break A}if(B.I===q){o=!0
if(A.cL(c)){m=b.r
if(!(m!=null&&c<m)){o=b.w
o=o!=null&&c>o}}if(o){o=A.j(e)
m=b.r
m=m==null?"":", "+A.j(m)+" to "+A.j(b.w)
return o+" is a whole number"+m}break A}if(B.N===q){o=b.e
if(!B.a.v(o,c))return A.j(e)+" is one of "+B.a.Z(o,", ")
break A}if(B.ap===q){if(typeof c=="string")o=c!=="me"&&!A.a6(a.p3,t.N,t.o).D(c)
else o=!0
if(o)return"no member "+A.j(c)
break A}if(B.bq===q){if(t.j.b(c)){o=J.ar(c)
o=o.ga4(c)||o.e4(c).a!==o.gq(c)}else o=!0
if(o)return A.j(e)+" names each person once"
for(o=J.S(c),m=a.p3,l=t.N,k=t.o;o.n();){j=o.gt()
if(typeof j=="string")i=j!=="me"&&!A.a6(m,l,k).D(j)
else i=!0
if(i)return"no member "+A.j(j)}break A}if(B.a3===q){if(typeof c!="string"||!a.gK().D(c))return"no account "+A.j(c)
break A}if(B.ae===q){h=typeof c=="string"?a.aH(c):f
if(h==null)return"no book "+A.j(c)
o=b.x
if(o.length!==0&&!B.a.v(o,h)){m=A.L(o)
return A.j(e)+" is a "+new A.aj(o,m.i("f(1)").a(new A.vm()),m.i("aj<1,f>")).Z(0," or ")+" book"}break A}if(B.F===q){if(typeof c=="string"){o=b.f
o.toString
o=a.ab.a6(A.ai(B.ab,o,t.P),c)==null}else o=!0
if(o)return"no "+A.j(b.f)+" "+A.j(c)
break A}if(B.aG===q){if(typeof c!="string"||!A.a6(a.bW.d,t.N,t.ud).D(c))return"no policy "+A.j(c)
break A}if(B.br===q){if(typeof c!="string"||a.bW.gbC().h(0,c)==null)return"no document "+A.j(c)
break A}if(B.am===q){if(typeof c!="string"||a.b.a.h(0,c)==null)return"no transaction "+A.j(c)
break A}if(B.bs===q){if(typeof c!="string"||!a.aJ.c.D(c))return"no invoice "+A.j(c)
break A}if(B.aH===q){r=null
try{r=A.BB(t.f.a(c).G(0,t.N,t.X))}catch(n){o=A.j(e)
return o+" is a file"}o=r.a
if($.eU().aM(0,o).gq(0)>=9||A.za(o)!==o)return"the file name looks like it holds a full number"
break A}if(B.a6===q){if(typeof c=="string"){o=$.He()
o=!o.b.test(c)}else o=!0
if(o)return u.M
break A}if(B.a0===q){if(!A.ea(c))return A.j(e)+" is yes or no"
break A}if(B.an===q){if(typeof c!="string"||B.b.H(c).length===0)return A.j(e)+" is words"
g=A.c(c.split("\n"),t.s)
if(g.length>4||B.a.N(g,new A.vn()))return A.j(e)+" is at most 4 lines of 80 characters"
if(A.L8(c))return A.j(e)+" looks like it holds an account, PAN or GSTIN; those are kept apart"
break A}if(B.aI===q){r=typeof c=="string"?A.dr(c):f
if(r==null||r.l(0,$.M())<0||r.l(0,new A.P(A.aL(100),0))>0||r.ge8()>2)return A.j(e)+" is a percentage from 0 to 100, at most 2 decimals"
break A}if(B.bt===q){if(typeof c=="string"){o=$.HD()
o=!o.b.test(c)}else o=!0
if(o)return A.j(e)+" is 11 characters like ABCD0123456"}}return f},
Cw(a,b){var s,r,q,p,o,n,m,l=b.b
if(B.b.H(l).length===0||l.length>120)return"a record needs an id"
for(l=b.c,s=l.gag(),s=s.gB(s),r=b.a;s.n();){q=s.gt()
if(r.lU(q)==null)return r.c.toLowerCase()+" has no field "+q}for(s=r.d,q=s.length,p=0;p<q;++p){o=s[p]
n=l.h(0,o.a)
if(n==null){if(o.d)return r.c.toLowerCase()+" needs "+o.b.toLowerCase()
continue}m=A.Kf(a,o,n)
if(m!=null)return m}return A.KH(a,b)},
mv(a){var s,r,q,p,o=A.a4(t.N)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r){q=a[r]
p=q==null?null:q.b
if(p!=null)o.m(0,p)}return o.a>1?"the amounts are in one currency":null},
KH(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="invoiceId",c1="medisave",c2="currency",c3="is not a supported currency",c4="bookId",c5="amount",c6="accountId",c7="propertyId",c8="the year of the next number is written like 26/27",c9="tenancyId",d0="unitPrice",d1="a mark is named by what it marks"
A:{s=d3.a
if(B.ax===s){r=A.n(d3.c.h(0,"loanAccountId"))
if(r!=null){q=d2.gK().h(0,r)
q=(q==null?b9:q.d)!==B.o}else q=!1
if(q)return"the loan is one of your loans"
break A}if(B.as===s){q=d3.c
p=A.aA(q.h(0,"starts"))
q=A.aA(q.h(0,"ends"))
if(p!=null&&q!=null&&A.b(q.a,q.b,q.c).l(0,A.b(p.a,p.b,p.c))<0)return"a lease ends after it starts"
o=A.mv(A.c([d3.aw("rent"),d3.aw("deposit")],t.dr))
if(o!=null)return o
break A}if(B.de===s){if(d3.b!==A.n(d3.c.h(0,c0)))return"an invoice has one document record, named by the invoice"
break A}if(B.db===s){q=d3.c
p=A.aA(q.h(0,"departs"))
q=A.aA(q.h(0,"returns"))
if(p!=null&&q!=null&&A.b(q.a,q.b,q.c).l(0,A.b(p.a,p.b,p.c))<0)return"a trip comes back after it leaves"
break A}if(B.dj===s){q=d3.c
if(d3.b!==A.j(A.n(q.h(0,"tripId")))+":"+A.j(A.n(q.h(0,"movementId"))))return"a trip line is named by its trip and line"
n=d3.aw("sgd")
q=n==null
if(!q&&n.b!=="SGD")return"the SGD amount is in SGD"
if(q!==(d3.eP("rate")==null))return"an SGD amount comes with its rate (LED-09)"
break A}if(B.dg===s){q=d3.aw("total")
q.toString
m=d3.aw(c1)
l=d3.aw("insurance")
k=A.mv(A.c([q,m,l],t.dr))
if(k!=null)return k
j=A.a3($.M(),q.b)
for(p=[m,l],i=0;i<2;++i){h=p[i]
if(h!=null){g=h.b
f=j.b
if(g!==f)A.h(A.a7(f,g))
g=j.a.C(0,h.a)
j=new A.q(g,f)
e=B.e.h(0,f)
if(e==null)A.h(A.x(f,c2,c3))
if((g.b<=0?0:Math.max(g.gA().b,0))>e)A.h(A.y(f+" allows "+A.j(e)+" decimal places",g.k(0),b9))}}if(j.a.l(0,q.a)>0)return"MediSave and insurance are not more than the bill"
break A}if(B.bG===s){d=A.mv(A.c([d3.aw("claimed"),d3.aw("paid")],t.dr))
if(d!=null)return d
q=d3.c
if(A.n(q.h(0,"status"))==="paid"&&d3.aw("paid")==null)return"a paid claim says what was paid"
c=A.n(q.h(0,"creditMovementId"))
if(c!=null){q=d2.b.a
if(q.h(0,c).e!==B.m)return"a claim credit is money coming in"
if(q.h(0,c).d===B.w)return"a claim payout is a claim credit, never income"
q=d2.ab.b2(B.bG)
p=A.L(q)
if(!new A.o(q,p.i("k(1)").a(new A.vq(d3,c)),p.i("o<1>")).ga4(0))return"that transaction is the payout of another claim"}break A}if(B.df===s){q=d3.c
p=A.n(q.h(0,"personId"))
p.toString
if(p==="me")return"the helper is a household member"
b=A.n(q.h(0,"permitId"))
if(b!=null){a=d2.bW.gbC().h(0,b)
if(a.b!==B.cG||a.c!==p)return"the permit is her work permit"}if(B.a.N(A.c(["renewalDate","medicalDue","contractEnds"],t.s),new A.vr(d3))&&A.n(q.h(0,"source"))==null)return"each date comes from the permit, policy or MOM notice: say which"
break A}if(B.aS===s){if(d3.b!==A.n(d3.c.h(0,c4)))return"a company has one record, named by its book"
break A}if(B.bJ===s){q=A.c([],t.dr)
for(p=d3.c,g=t.f,f=t.N,a0=t.X,i=0;i<7;++i){a1=B.j7[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).G(0,f,a0)
a3=a2.h(0,c5)
a3.toString
a3=A.ah(A.d(a3))
a2=a2.h(0,c2)
a2.toString
A.d(a2)
a4=new A.q(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.h(A.x(a2,c2,c3))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>e)A.h(A.y(a2+" allows "+A.j(e)+" decimal places",a3.k(0),b9))
a2=a4}else a2=b9
q.push(a2)}a5=A.mv(q)
if(a5!=null)return a5
a6=A.n(p.h(0,c6))
if(a6!=null&&!d2.gK().h(0,a6).gaS())return"the pay goes into a savings or current account"
break A}if(B.dc===s||B.dh===s){for(q=["employee","employer","amount"],p=d3.c,g=t.f,f=t.N,a0=t.X,i=0;i<3;++i){a1=q[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).G(0,f,a0)
a3=a2.h(0,c5)
a3.toString
a3=A.ah(A.d(a3))
a2=a2.h(0,c2)
a2.toString
A.d(a2)
a7=new A.q(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.h(A.x(a2,c2,c3))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>e)A.h(A.y(a2+" allows "+A.j(e)+" decimal places",a3.k(0),b9))}else a7=b9
if(a7!=null)a2=a7.b!=="SGD"
else a2=!1
if(a2)return"CPF is in SGD"}break A}if(B.aU===s){q=d3.c
if(d3.b!==A.j(A.n(q.h(0,"policyId")))+":"+A.j(A.n(q.h(0,"dueOn"))))return"a premium is named by its policy and due date"
if(d3.aw("cash")==null&&d3.aw(c1)==null)return"say what was paid"
a8=A.mv(A.c([d3.aw("cash"),d3.aw(c1)],t.dr))
if(a8!=null)return a8
break A}if(B.dl===s){q=d3.c
p=A.aA(q.h(0,"anchor"))
p.toString
g=A.n(q.h(0,"offset"))
g.toString
a9=A.MZ(p,g)
if(a9==null)return'the offset is like "1 month before", "2 weeks after" or "on the day"'
if(!a9.J(0,A.aA(q.h(0,"date"))))return"the date is worked out from the anchor and the offset"
b0=A.n(q.h(0,"repeat"))
b1=A.aG(q.h(0,"every"))
b2=A.aA(q.h(0,"until"))
if(b0==null)p=b1!=null||b2!=null||A.aG(q.h(0,"times"))!=null
else p=!1
if(p)return"say how it repeats before when it ends"
p=b0==="every-n-months"||b0==="every-n-weeks"
if(p!==(b1!=null))return"every how many is said only for every N months or weeks"
p=b2!=null
if(p&&A.aG(q.h(0,"times"))!=null)return"it ends on one of a date or a number of times"
if(p&&A.b(b2.a,b2.b,b2.c).l(0,A.b(a9.a,a9.b,a9.c))<0)return"until is on or after the first date"
break A}if(B.bI===s||B.dk===s||B.di===s||B.dd===s)break A
if(B.aR===s){if(d3.b!==A.n(d3.c.h(0,c7)))return"a property has one issuer record, named by the property"
break A}if(B.ag===s){q=d3.c
b3=A.n(q.h(0,"startYear"))
p=b3!=null
if(p){g=$.H4()
g=!g.b.test(b3)}else g=!1
if(g)return c8
if(p&&B.d.T(A.Z(B.b.X(b3,0,2),b9,b9)+1,100)!==A.Z(B.b.ac(b3,3),b9,b9))return c8
q=A.n(q.h(0,"pattern"))
q.toString
return A.N7(q)}if(B.aQ===s){q=d3.c
if(d3.b!==A.n(q.h(0,c9)))return"a tenancy has one invoicing record, named by the tenancy"
p=A.n(q.h(0,c9))
p.toString
p=d2.ab.a6(B.as,p)
if((p==null?b9:A.n(p.c.h(0,"role")))!=="landlord")return"invoices are made for a tenancy where you are the landlord"
a6=d2.gK().h(0,A.n(q.h(0,c6)))
if(!a6.gaS()||a6.e!=="INR")return"rent is paid into a rupee savings or current account"
break A}if(B.bH===s){if(d3.aw(c5).b!=="INR")return"an invoice line is in rupees"
break A}if(B.ah===s||B.ai===s||B.a7===s)break A
if(B.ar===s){q=d3.b
p=d3.c
if(q!==A.n(p.h(0,c4)))return"a company has one issuer record, named by its book"
if(d2.aH(q)!=="company")return"invoices are issued by a company book"
a6=d2.gK().h(0,A.n(p.h(0,c6)))
if(a6==null||!a6.gaS()||a6.e!=="SGD"||a6.r!==q)return"the company's invoices are paid into one of its Singapore dollar bank accounts"
if(J.a2(p.h(0,"gstRegistered"),!0)!==(A.n(p.h(0,"gstRegLast4"))!=null))return"a GST registered company gives the last 4 of its GST registration number, and only then"
break A}if(B.a4===s){q=A.n(d3.c.h(0,c4))
q.toString
if(d2.aH(q)!=="company")return"a customer belongs to a company book"
break A}if(B.a8===s){q=d3.c
p=A.n(q.h(0,"customerId"))
p.toString
p=d2.ab.a6(B.a4,p)
p=p==null?b9:A.n(p.c.h(0,c4))
if(p!=A.n(q.h(0,c4)))return"the customer is one of the company's own"
break A}if(B.aq===s){if(d3.aw(d0).b!=="SGD")return"an invoice line is in Singapore dollars"
if(d3.aw(d0).a.a.ga7(0)<0)return"a unit price is not below zero"
if(d3.eP("quantity").ge8()>4)return"a quantity has at most 4 decimals"
break A}if(B.bF===s){q=d3.c
r=d2.gK().h(0,A.n(q.h(0,"loanId")))
if(r==null||r.d!==B.o)return"an instalment is confirmed on a loan"
if(d3.b!=="loan:"+r.a+":"+A.j(A.n(q.h(0,"due"))))return"a confirmation is named by its loan and due date"
break A}b4=B.aT===s
if(b4&&A.n(d3.c.h(0,"what"))==="tds-certificate"){q=d3.c
b5=A.n(q.h(0,c9))
b6=A.n(q.h(0,"quarter"))
q=!0
if(b5!=null)if(b6!=null){q=A.C("^\\d{4}-Q[1-4]$",!0,!1)
q=!q.b.test(b6)}if(q)return"a TDS certificate names its tenancy and quarter"
if(d3.b!=="tds-certificate:"+b5+":"+b6)return d1
break A}if(b4){q=d3.c
p=A.n(q.h(0,"what"))
p.toString
b7=A.n(q.h(0,c0))
b8=A.n(q.h(0,c7))!=null&&A.n(q.h(0,"month"))!=null
g=p==="sent"
if(g)f=b7==null||b8
else f=b7!=null||!b8
if(f)return g?"a sent mark names its invoice":"a GST mark names the property and the month"
q=g?"sent:"+A.j(b7):p+":"+A.j(A.n(q.h(0,c7)))+":"+A.j(A.n(q.h(0,"month")))
if(d3.b!==q)return d1
if(p==="gst-itc"){q=d3.aw(c5)
q=(q==null?b9:q.b)!=="INR"}else q=!1
if(q)return"an input tax credit is in rupees"}}return b9},
L8(a){var s=a.toUpperCase(),r=A.C("[A-Z]{5}\\d{4}[A-Z]",!0,!1)
if(r.b.test(s))return!0
r=A.C("\\d(?:[\\s.\\-]*\\d){10,}",!0,!1)
return r.b.test(s)},
N7(a){var s,r,q,p,o=A.C("\\{(n+)\\}",!0,!1).aM(0,a),n=A.D(o,A.p(o).i("i.E"))
if(n.length!==1)return"the pattern holds the number once, as {nnn}"
o=$.CW()
s=A.D(o.aM(0,a),t.lQ)
B.a.a1(s,B.b.aM("{yyyy}",a))
if(s.length>1)return"the pattern holds the year at most once"
r=A.C("\\{n+\\}",!0,!1)
r=A.a8(a,r,"")
o=A.a8(r,o,"")
q=A.a8(o,"{yyyy}","")
o=A.C("^[A-Za-z0-9/._-]*$",!0,!1)
if(!o.b.test(q))return"the pattern holds letters, digits and - / . _ only"
o=B.a.gaQ(n).b
if(1>=o.length)return A.a(o,1)
p=o[1].length
o=p<4?4:p
if(s.length===0)s=0
else{s=B.a.gaQ(s).h(0,0)
s.toString
s=A.hD(2026,s).length}if(q.length+o+s>16)return"an invoice number is at most 16 characters"
return null},
MK(a){var s,r,q,p,o=B.b.H(a).toLowerCase()
if(o==="on the day"||o==="on the date")return new A.e7(0,0)
s=A.C("^(a|an|one|two|three|four|six|\\d{1,3}) (day|week|month|year)s? (before|after)$",!0,!1).aj(o)
if(s==null)return null
r=s.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
A:{if("a"===q||"an"===q||"one"===q){q=1
break A}if("two"===q){q=2
break A}if("three"===q){q=3
break A}if("four"===q){q=4
break A}if("six"===q){q=6
break A}q=A.Z(q,null,null)
break A}if(3>=r.length)return A.a(r,3)
p=r[3]==="before"?-1:1
r=r[2]
r.toString
B:{if("day"===r){r=new A.e7(p*q,0)
break B}if("week"===r){r=new A.e7(p*7*q,0)
break B}if("month"===r){r=new A.e7(0,p*q)
break B}r=new A.e7(0,p*12*q)
break B}return r},
MZ(a,b){var s=A.MK(b)
if(s==null)return null
return A.FP(a,s.b).aG(s.a)},
FP(a,b){var s=a.a*12+(a.b-1)+b,r=B.d.u(s,12),q=B.d.T(s,12)+1,p=A.av(A.b(r,q+1,0)),o=a.c
return new A.B(r,q,o>p?p:o)},
Lc(a,b,c){var s,r,q,p,o,n,m,l,k=c.e,j=t.P,i=A.aN(new A.o(B.ab,t.Ab.a(new A.vP(k)),t.rx),j)
if(i==null)return"no record kind "+A.j(J.as(k,"kind"))
r=J.as(k,"id")
if(typeof r!="string")return"a record needs an id"
if(i===B.ah)return"a rent invoice is made once by Make invoice and never changed"
if(i===B.ai)return"a credit note is made once by Issue credit note and never changed"
if(i===B.a7)return"a company invoice is made once by Issue invoice and never changed"
if(c.d==="life.remove"){if(b.a6(i,r)==null)return"no "+i.c.toLowerCase()+" "+r
if(b.mW(i,r).length!==0)return"another record uses it; remove that first"
b.a.h(0,i).Y(0,r)
return null}s=null
try{q=k
p=q.h(0,"kind")
p.toString
j=A.ai(B.ab,A.d(p),j)
p=q.h(0,"id")
p.toString
A.d(p)
q=q.h(0,"fields")
q.toString
o=t.N
n=t.X
s=new A.b3(j,p,A.a6(t.f.a(q).G(0,o,n),o,n))}catch(m){return"a record is its kind, id and fields"}l=A.Cw(a,s)
if(l!=null)return l
j=b.a
q=j.h(0,i)
if(q==null){q=A.w(t.N,t.u)
j.j(0,i,q)
j=q}else j=q
j.j(0,r,s)
return null},
aJ:function aJ(a,b){this.a=a
this.b=b},
v:function v(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
ae:function ae(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
oY:function oY(a){this.a=a},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
oW:function oW(a){this.a=a},
oX:function oX(){},
vm:function vm(){},
vn:function vn(){},
vq:function vq(a,b){this.a=a
this.b=b},
vr:function vr(a){this.a=a},
vP:function vP(a){this.a=a},
ML(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2="currency",a3="is not a supported currency",a4=t.N,a5=A.a4(a4),a6=A.c([],t.uE),a7=a8.ab.b2(B.bJ)
B.a.E(a7,new A.Ai())
for(s=a7.length,r=a9.a,q=a9.b,p=a9.c,o=t.W,n=t.f,m=t.X,l=0;l<a7.length;a7.length===s||(0,A.m)(a7),++l){k=a7[l]
j=k.c
i=A.n(j.h(0,"accountId"))
if(n.b(j.h(0,"net"))){h=j.h(0,"net")
h.toString
h=n.a(h).G(0,a4,m)
g=h.h(0,"amount")
g.toString
g=A.ah(A.d(g))
h=h.h(0,a2)
h.toString
A.d(h)
f=new A.q(g,h)
e=B.e.h(0,h)
if(e==null)A.h(A.x(h,a2,a3))
if((g.b<=0?0:Math.max(g.gA().b,0))>e)A.h(A.y(h+" allows "+A.j(e)+" decimal places",g.k(0),a1))
h=f}else h=a1
h.toString
g=A.aA(j.h(0,"payDate"))
g.toString
if(i==null){B.a.m(a6,new A.fl(k,B.l1,a1))
continue}f=a8.bq()
d=f.$ti
c=d.i("o<i.E>")
b=A.D(new A.o(f,d.i("k(i.E)").a(new A.Ao(i,a5,g)),c),c.i("i.E"))
B.a.E(b,new A.Aj(g))
f=A.L(b)
d=f.i("k(1)")
f=f.i("o<1>")
a=A.aN(new A.o(b,d.a(new A.Ak(h)),f),o)
if(a!=null){a5.m(0,a.a)
B.a.m(a6,new A.fl(k,B.l_,a1))
continue}a0=A.aN(new A.o(b,d.a(new A.Al(h,B.a.m1(B.b.bN(A.n(j.h(0,"employer")).toUpperCase(),A.C("[^A-Z0-9]+",!0,!1)),new A.Am(),new A.An()))),f),o)
if(a0!=null){a5.m(0,a0.a)
j=a0.f
g=h.b
f=j.b
if(g!==f)A.h(A.a7(f,g))
h=h.a
h=j.a.C(0,new A.P(h.a.R(0),h.b))
e=B.e.h(0,f)
if(e==null)A.h(A.x(f,a2,a3))
if((h.b<=0?0:Math.max(h.gA().b,0))>e)A.h(A.y(f+" allows "+A.j(e)+" decimal places",h.k(0),a1))
B.a.m(a6,new A.fl(k,B.dT,new A.q(h,f)))}else{j=A.b(g.a,g.b,g.c)
h=A.b(r,q,p)
B.a.m(a6,new A.fl(k,B.d.u(j.b-h.b+1000*(j.a-h.a),864e8)<-5?B.dU:B.l0,a1))}}return a6},
MM(a,b){var s,r,q,p,o,n,m,l=A.c([],t.M)
for(s=A.ML(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.b
n=o===B.dT
if(n||o===B.dU){o=p.a
m=o.b
o=o.c
o=n?"The "+A.j(A.n(o.h(0,"period")))+" salary credit differs from the payslip's net pay by "+A.j(p.d)+".":"No salary credit for the "+A.j(A.n(o.h(0,"period")))+" payslip was seen by 5 days after its pay date."
l.push(new A.W("payslip:"+m,B.ac,m,o))}}return l},
eu:function eu(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c){this.a=a
this.b=b
this.d=c},
Ai:function Ai(){},
Ao:function Ao(a,b,c){this.a=a
this.b=b
this.c=c},
Aj:function Aj(a){this.a=a},
Ak:function Ak(a){this.a=a},
Am:function Am(){},
An:function An(){},
Al:function Al(a,b){this.a=a
this.b=b},
MQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.ax,e=a.as
if(f==null||e==null||a.Q==null)return B.dC
switch(e.a){case 0:s=1
break
case 1:s=3
break
case 2:s=6
break
case 3:s=12
break
case 4:s=0
break
default:s=null}r=A.c([],t.xQ)
for(q=s===0,p=b.a,o=b.b,n=b.c,m=a.z,l=m!=null,k=0;k<400;++k){j=A.FP(f,s*k)
i=j.a
h=j.b
g=j.c
if(A.b(i,h,g).l(0,A.b(p,o,n))<=0)i=l&&A.b(i,h,g).l(0,A.b(m.a,m.b,m.c))>0
else i=!0
if(i)break
B.a.m(r,j)
if(q)break}return r},
KP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=b.gh3(),g=b.ch
if(h==null||g==null)return null
for(s=a.bq(),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>")),q=c.a,p=c.b,o=c.c,n=h.b,m=h.a,l=b.b;s.n();){k=r.gt()
j=!0
if(k.c===g)if(k.e===B.j){j=k.f
i=!1
if(n===j.b)j=m.l(0,j.a)===0
else j=i
j=!j||d.v(0,k.a)}if(j)continue
j=k.x
j=A.b(j.a,j.b,j.c)
i=A.b(q,p,o)
if(Math.abs(B.d.u(j.b-i.b+1000*(j.a-i.a),864e8))>7||!A.Nv(l,k.z))continue
return k}return null},
MR(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.c([],t.tJ),a2=t.N,a3=A.a4(a2)
for(s=a4.ab,r=s.b2(B.aU),q=r.length,p=0;p<r.length;r.length===q||(0,A.m)(r),++p){o=A.n(r[p].c.h(0,"movementId"))
if(o!=null)a3.m(0,o)}r=a4.bW.d
q=t.ud
o=A.a6(r,a2,q).gag()
n=A.D(o,A.p(o).i("i.E"))
B.a.b9(n)
for(o=n.length,s=s.a,m=a5.a,l=a5.b,k=a5.c,p=0;p<n.length;n.length===o||(0,A.m)(n),++p){j=n[p]
i=A.a6(r,a2,q).h(0,j)
i.toString
for(h=A.MQ(i,a6),g=h.length,f=i.a+":",e=0;e<h.length;h.length===g||(0,A.m)(h),++e){d=h[e]
if(A.b(d.a,d.b,d.c).l(0,A.b(m,l,k))<0)continue
c=d.k(0)
b=s.h(0,B.aU)
a=b==null?null:b.h(0,f+c)
a0=a==null?A.KP(a4,i,d,a3):null
if(a0!=null)a3.m(0,a0.a)
B.a.m(a1,new A.dK(i,d,a,a0))}}B.a.E(a1,new A.Aw())
return a1},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Aw:function Aw(){},
Km(a){var s
A.n(a)
if(a!=null)s=$.eU().aM(0,a).gq(0)>=9||A.za(a)!==a
else s=!1
return s},
EH(a,b,c,d,e){var s,r,q,p
if(b!=="me"&&!A.a6(a.p3,t.N,t.o).D(b))return"no member "+b
if(c!=null){s=$.Hf()
s=!s.b.test(c)}else s=!1
if(s)return u.M
s=A.D(d,t.T)
s.push(e==null?null:e.a)
if(B.a.N(s,A.MX()))return"an entry looks like it holds a full number; only the last 4 characters are kept"
for(s=d.length,r=0;r<s;++r){q=d[r]
if(q!=null)p=q.length>80||B.b.v(q,"\n")
else p=!1
if(p)return"an entry is one line of at most 80 characters"}return null},
Ld(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="id",b5="personId",b6="file",b7="a date is written YYYY-MM-DD and is a real day",b8="sumAssured",b9="frequency",c0="medisave",c1=c4.e
switch(c4.d){case"document.set":r={}
r.a=null
try{q=c1
p=q.h(0,b4)
p.toString
A.d(p)
o=q.h(0,"kind")
o.toString
o=A.ai(B.k8,A.d(o),t.il)
n=q.h(0,b5)
n.toString
A.d(n)
m=A.aA(q.h(0,"addedOn"))
m.toString
l=A.n(q.h(0,"label"))
k=A.n(q.h(0,"country"))
j=A.n(q.h(0,"last4"))
i=A.aA(q.h(0,"issued"))
h=A.aA(q.h(0,"expires"))
if(q.h(0,b6)==null)g=b3
else{g=q.h(0,b6)
g.toString
g=A.BB(t.f.a(g).G(0,t.N,t.X))}r.a=new A.cU(p,o,n,m,l,k,j,i,h,g,A.n(q.h(0,"replaces")),A.n(q.h(0,"fromProposal")))}catch(f){return"a document needs its kind, person and dates written YYYY-MM-DD"}for(q=["issued","expires"],e=0;e<2;++e){d=q[e]
if(J.as(c1,d)!=null&&A.aA(J.as(c1,d))==null)return b7}q=r.a
c=A.EH(c2,q.c,q.r,A.c([q.e,q.f],t.q),r.a.y)
if(c!=null)return c
q=r.a
if(q.b===B.bp){p=q.e
p=p==null||B.b.H(p).length===0}else p=!1
if(p)return"a document of another kind needs a name"
p=q.w
if(p!=null){q=q.x
q=q!=null&&A.b(q.a,q.b,q.c).l(0,A.b(p.a,p.b,p.c))<0}else q=!1
if(q)return"a document expires after it is issued"
q=r.a
p=q.b
if(p.d===!1&&q.x!=null)return p.c+" has no expiry date"
b=q.z
if(b!=null){a=c3.gbC().h(0,b)
if(a==null||b===r.a.a)return"no document "+b+" to renew"
q=a.b
p=r.a
if(q!==p.b||a.c!==p.c)return"a renewal is the same kind for the same person"
q=c3.gbC()
p=A.p(q).i("N<2>")
if(!new A.o(new A.N(q,p),p.i("k(i.E)").a(new A.vQ(r,b)),p.i("o<i.E>")).ga4(0))return"that document was renewed already"}q=r.a
c3.a.j(0,q.a,q)
c3.b.Y(0,r.a.a)
break
case"document.remove":a0=J.as(c1,b4)
if(typeof a0!="string"||!c3.gbC().D(a0))return"no document "+A.j(a0)
c3.b.m(0,a0)
break
case"document.retrieve":a0=J.as(c1,"recordId")
a1=A.aN(new A.o(B.k1,t.rt.a(new A.vR(c1)),t.vL),t.hn)
if(typeof J.as(c1,"atUtc")=="string"){q=J.as(c1,"atUtc")
q.toString
a2=A.Dl(A.d(q))}else a2=b3
if(typeof a0!="string"||a1==null||a2==null||c1.gag().N(0,new A.vS()))return"a retrieval holds only which record, what and when"
if(!c3.a.D(a0)&&!c3.d.D(a0)&&c2.ab.l5(a0)==null)return"no record "+a0
a2.F()
B.a.m(c3.e,new A.ll())
break
case"document.source":a0=J.as(c1,b4)
a3=J.as(c1,"gone")
if(typeof a0!="string"||!A.ea(a3)||!c3.a.D(a0))return"a source mark is a record and yes or no"
q=c3.c
if(a3)q.m(0,a0)
else q.Y(0,a0)
break
case"policy.set":s=null
try{q=c1
p=q.h(0,b4)
p.toString
A.d(p)
o=q.h(0,"insurer")
o.toString
A.d(o)
n=q.h(0,"type")
n.toString
n=A.ai(B.ko,A.d(n),t.gv)
m=q.h(0,b5)
m.toString
A.d(m)
l=A.n(q.h(0,"plan"))
k=A.n(q.h(0,"ownerId"))
j=A.n(q.h(0,"last4"))
if(q.h(0,b8)==null)i=b3
else{i=q.h(0,b8)
i.toString
i=A.aO(t.f.a(i).G(0,t.N,t.X))}h=A.n(q.h(0,"riders"))
g=A.aA(q.h(0,"starts"))
a4=A.aA(q.h(0,"ends"))
if(q.h(0,"premium")==null)a5=b3
else{a5=q.h(0,"premium")
a5.toString
a5=A.aO(t.f.a(a5).G(0,t.N,t.X))}if(q.h(0,b9)==null)a6=b3
else{a6=q.h(0,b9)
a6.toString
a6=A.ai(B.j6,A.d(a6),t.C5)}a7=A.n(q.h(0,"paymentMethod"))
a8=A.aA(q.h(0,"nextDue"))
if(q.h(0,b6)==null)a9=b3
else{a9=q.h(0,b6)
a9.toString
a9=A.BB(t.f.a(a9).G(0,t.N,t.X))}b0=A.n(q.h(0,"accountId"))
if(q.h(0,c0)==null)q=b3
else{q=q.h(0,c0)
q.toString
q=A.aO(t.f.a(q).G(0,t.N,t.X))}s=new A.em(p,o,n,m,l,k,j,i,h,g,a4,a5,a6,a7,a8,a9,b0,q)}catch(f){return"a policy needs its insurer, type, person and dates written YYYY-MM-DD"}for(q=["starts","ends","nextDue"],e=0;e<3;++e){d=q[e]
if(J.as(c1,d)!=null&&A.aA(J.as(c1,d))==null)return b7}if(B.b.H(s.b).length===0)return"a policy needs its insurer"
c=A.EH(c2,s.d,s.r,A.c([s.b,s.e,s.x,s.at],t.q),s.ay)
if(c!=null)return c
if(s.f!=null&&s.f!=="me"&&!A.a6(c2.p3,t.N,t.o).D(s.f))return"no member "+A.j(s.f)
for(q=[s.w,s.Q],e=0;e<2;++e){b1=q[e]
if(b1!=null&&b1.a.l(0,$.M())<=0)return"an amount is more than zero"}q=!1
if(s.y!=null)if(s.z!=null){q=s.z
q.toString
p=s.y
p.toString
p=A.b(q.a,q.b,q.c).l(0,A.b(p.a,p.b,p.c))<0
q=p}if(q)return"a policy ends after it starts"
if(s.ch!=null&&!c2.gK().D(s.ch))return"no account "+A.j(s.ch)
b2=s.CW
if(b2!=null){if(s.Q==null||b2.b!==s.Q.b)return"the MediSave part is part of the premium"
q=b2.a
if(q.l(0,$.M())<=0||q.l(0,s.Q.a)>0)return"the MediSave part is more than zero and not more than the premium"}c3.d.j(0,s.a,s)
break
case"policy.remove":if(c3.d.Y(0,J.as(c1,b4))==null)return"no policy "+A.j(J.as(c1,b4))
break
default:return"not a record operation"}return b3},
Ap(a,b){var s
if(b==="me")s="Me"
else{s=A.a6(a.p3,t.N,t.o).h(0,b)
s=s==null?null:s.b
if(s==null)s="someone removed"}return s},
cn:function cn(a,b){this.a=a
this.b=b},
ll:function ll(){},
tv:function tv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tw:function tw(a){this.a=a},
tx:function tx(){},
vQ:function vQ(a,b){this.a=a
this.b=b},
vR:function vR(a){this.a=a},
vS:function vS(){},
Fl(a,b,c){var s=a.gK().h(0,b),r=s==null?null:s.r
s=r==null||a.aH(r)!=="member"
return s},
Fx(a){var s,r,q,p,o,n,m,l,k=A.w(t.N,t.ok)
for(s=A.Ch(a,null),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=p.c
if(o==null)continue
n=p.b
m=k.h(0,n)
if(m!=null){l=m.c
l.toString
l=A.b(o.a,o.b,o.c).l(0,A.b(l.a,l.b,l.c))>0
o=l}else o=!0
if(o)k.j(0,n,p)}s=k.$ti.i("N<2>")
s=A.D(new A.N(k,s),s.i("i.E"))
B.a.E(s,new A.z_())
return s},
Ga(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a3.aG(a4),a1=A.c([],t.DO)
for(s=A.Fx(a2),r=s.length,q=a0.a,p=a0.b,o=a0.c,n=a3.a,m=a3.b,l=a3.c,k=0;k<s.length;s.length===r||(0,A.m)(s),++k){j=s[k]
i=j.f
h=!1
if(i!=null){g=j.b
if(A.Fl(a2,g,a)){g=a2.gK().h(0,g)
g=g==null?a:g.CW!=null
if(g!==!0){g=i.a
f=i.b
e=i.c
if(A.b(g,f,e).l(0,A.b(q,p,o))<=0)if(B.e7.v(0,j.dt(a3)))h=A.b(g,f,e).l(0,A.b(n,m,l))>=0||j.dt(a3)===B.aC}}}if(h)a1.push(new A.d9(j.b,i,j))}s=a2.gK().gS()
r=A.p(s)
n=r.i("o<i.E>")
d=A.D(new A.o(s,r.i("k(i.E)").a(new A.Bb(a2,a)),n),n.i("i.E"))
B.a.E(d,new A.Bc())
for(s=d.length,k=0;k<d.length;d.length===s||(0,A.m)(d),++k){c=d[k]
b=A.Cx(c,a3).w
if(b instanceof A.ei){r=b.a
r=A.b(r.a,r.b,r.c).l(0,A.b(q,p,o))<=0}else r=!1
if(r)B.a.m(a1,new A.d9(c.a,b.a,a))}B.a.E(a1,new A.Bd())
return a1},
z_:function z_(){},
d9:function d9(a,b,c){this.c=a
this.d=b
this.e=c},
Bb:function Bb(a,b){this.a=a
this.b=b},
Bc:function Bc(){},
Bd:function Bd(){},
Fj(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="invoiceId",a=A.c([],t.au)
for(s=a0.ab.b2(B.ai),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q].c
o=A.n(p.h(0,b))
if(o===a1){o=p.h(0,b)
o.toString
A.d(o)
n=p.h(0,"tenancyId")
n.toString
A.d(n)
m=p.h(0,"propertyId")
m.toString
A.d(m)
l=p.h(0,"invoiceNumber")
l.toString
A.d(l)
k=A.aA(p.h(0,"invoiceDate"))
k.toString
j=A.aA(p.h(0,"date"))
j.toString
i=p.h(0,"seriesId")
i.toString
A.d(i)
h=p.h(0,"seq")
h.toString
A.R(h)
g=p.h(0,"number")
g.toString
A.d(g)
f=p.h(0,"reason")
f.toString
A.d(f)
e=p.h(0,"taxable")
e.toString
A.R(e)
d=p.h(0,"cgst")
d.toString
A.R(d)
c=p.h(0,"sgst")
c.toString
A.R(c)
p=p.h(0,"tds")
p.toString
a.push(new A.cg(o,n,m,l,k,j,i,h,g,f,e,d,c,A.R(p)))}}B.a.E(a,new A.xK())
return a},
LW(a,b){return b.gf8()-B.a.a5(A.Fj(a,"rental:"+b.a+":"+(""+b.c+"-"+B.b.aa(B.d.k(b.d),2,"0"))),0,new A.xL(),t.S)},
M0(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.s),f=a.ab,e=b.b,d=f.a6(B.ax,e),c=d==null?null:A.n(d.c.h(0,"creditSeriesId"))
if(c==null||f.a6(B.ag,c)==null)B.a.m(g,"The property's credit note series")
d=B.b.H(a1)
if(d.length===0)B.a.m(g,"Why it is credited")
s=b.e
r=a0.a
q=a0.b
if(A.b(r,q,a0.c).l(0,A.b(s.a,s.b,s.c))<0)B.a.m(g,"A date on or after the invoice")
p=e+":"+(""+r+"-"+B.b.aa(B.d.k(q),2,"0"))
if(f.a6(B.aT,"gstr1-filed:"+p)!=null||f.a6(B.aT,"gst-filed:"+p)!=null)B.a.m(g,"A date in a month whose GSTR-1 is not filed yet")
o=A.LW(a,b)
if(a2<=0||a2>o)B.a.m(g,"An amount above 0 and at most the "+A.eR(o).k(0)+" not credited yet")
if(g.length!==0)return new A.r(null,g)
c.toString
f=f.a6(B.ag,c)
f.toString
r=b.a
q=b.d
n="rental:"+r+":"
m=""+b.c+"-"
l=A.Fj(a,n+(m+B.b.aa(B.d.k(q),2,"0")))
k=A.CB(a,c,a0)
q=B.b.aa(B.d.k(q),2,"0")
f=A.n(f.c.h(0,"pattern"))
f.toString
f=A.Cn(f,k,A.hD(A.mD(a0),"{fy}"),null)
j=a2===o
i=j?b.geL()-B.a.a5(l,0,new A.y0(),t.S):A.jG(a2,new A.P(A.aL(9),0))
h=j?b.gea()-B.a.a5(l,0,new A.y1(),t.S):A.jG(a2,new A.P(A.aL(9),0))
j=j?b.z-B.a.a5(l,0,new A.y2(),t.S):A.jG(a2,b.y)
return new A.r(new A.cg(n+(m+q),r,e,b.w,s,a0,c,k,f,d,a2,i,h,j),B.c)},
Le(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8.e,a3=a2.h(0,"invoiceId"),a4=A.cN(a2.h(0,"date")),a5=a2.h(0,"taxable"),a6=a2.h(0,"reason")
if(typeof a3!="string"||a4==null||!A.cL(a5)||typeof a6!="string")return"a credit note names its invoice, date, amount and reason"
s=a7.ab
r=s.a6(B.ah,a3)
if(r==null)return"no invoice "+a3
q=A.M0(a7,A.DS(r),a4,a6,a5)
p=q.a
if(p==null)return"not credited: "+B.a.Z(q.b,", ").toLowerCase()
o=p.x
if(o!==a2.h(0,"number")||p.gdi()!==a2.h(0,"total"))return"the credit note changed since it was shown; make it again"
n=p.r
m=p.f
l=A.hD(A.mD(m),"{fy}")
k=p.w
j=p.a
i=p.b
h=p.c
g=p.d
f=p.e.k(0)
m=m.k(0)
e=p.y
d=p.z
c=p.Q
b=p.as
a=p.at
s.f2(new A.b3(B.ai,"credit:"+n+":"+l+":"+k,A.T(["invoiceId",j,"tenancyId",i,"propertyId",h,"invoiceNumber",g,"invoiceDate",f,"date",m,"seriesId",n,"seq",k,"number",o,"reason",e,"taxable",d,"cgst",c,"sgst",b,"tds",a],t.N,t.X)))
e=a7.aJ.c
a0=e.h(0,a3)
s=a0==null
a1=s?null:a0.y
if(!s&&a1!=null){s=a0.a
o=a0.c
n=a0.e
m=a0.f.a8(0,A.eR(p.gdi()))
l=a0.w
e.j(0,a3,new A.fa(s,a0.b,o,a0.d,n,m,a0.r,l,a0.x,new A.iP(a1.a.a8(0,A.eR(d)),a1.b.a8(0,A.eR(c+b)),a1.c.a8(0,A.eR(a)))))}return null},
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n},
xK:function xK(){},
xL:function xL(){},
y0:function y0(){},
y1:function y1(){},
y2:function y2(){},
eR(a){var s=a<0?"-":"",r=Math.abs(a)
return A.a3(A.ah(s+B.d.u(r,100)+"."+B.b.aa(""+B.d.T(r,100),2,"0")),"INR")},
jG(a,b){return B.d.u(a*b.a_(0,new A.P(A.aL(100),0)).aD().aE(0)+5000,1e4)},
mD(a){var s=a.a
return a.b>=4?s:s-1},
hD(a,b){var s,r=new A.yF(),q=B.b.v(b,"-")?"-":"/"
A:{if("{yyyy-yyyy}"===b||"{yyyy/yyyy}"===b){s=""+a+q+(a+1)
break A}if("{yyyy-yy}"===b||"{yyyy/yy}"===b){s=""+a+q+A.j(r.$1(a+1))
break A}s=A.j(r.$1(a))+q+A.j(r.$1(a+1))
break A}return s},
Cn(a,b,c,d){var s=null,r=2000+A.Z(B.b.X(c,0,2),s,s),q=d==null?r:d,p=t.n,o=t.tj
return A.hK(A.hK(A.a8(a,"{yyyy}",""+q),A.C("\\{(n+)\\}",!0,!1),o.a(p.a(new A.yD(b))),s),$.CW(),o.a(p.a(new A.yE(r))),s)},
Ij(a,b,c){return new A.dC(a,b,c,A.jG(c,new A.P(A.aL(9),0)),A.jG(c,new A.P(A.aL(9),0)))},
DR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){return new A.tE(a1,p,a3,m,f,r,q,n,l,a0,s,a2,k,d,o,j,i,h,a,e,b,g,c)},
DS(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a5.c,a4=a3.h(0,"month")
a4.toString
s=A.Z(B.b.X(A.d(a4),0,4),a2,a2)
a4=a3.h(0,"month")
a4.toString
r=A.Z(B.b.ac(A.d(a4),5),a2,a2)
a4=a3.h(0,"tenancyId")
a4.toString
A.d(a4)
q=a3.h(0,"propertyId")
q.toString
A.d(q)
p=A.aA(a3.h(0,"date"))
p.toString
o=a3.h(0,"seriesId")
o.toString
A.d(o)
n=a3.h(0,"seq")
n.toString
A.R(n)
m=a3.h(0,"number")
m.toString
A.d(m)
l=A.c([],t.t7)
k=a3.h(0,"lines")
k.toString
k=J.dg(t.j.a(k),t.mE)
j=k.$ti
k=new A.ad(k,k.gq(0),j.i("ad<Q.E>"))
i=t.N
h=t.X
j=j.i("Q.E")
while(k.n()){g=k.d
g=(g==null?j.a(g):g).G(0,i,h)
f=g.h(0,"description")
f.toString
A.d(f)
e=g.h(0,"sac")
e.toString
A.R(e)
d=g.h(0,"taxable")
d.toString
A.R(d)
c=g.h(0,"cgst")
c.toString
A.R(c)
g=g.h(0,"sgst")
g.toString
l.push(new A.dC(f,e,d,c,A.R(g)))}k=a3.h(0,"tdsPercent")
k.toString
k=A.ah(A.d(k))
j=a3.h(0,"tds")
j.toString
A.R(j)
i=a3.h(0,"tenantName")
i.toString
A.d(i)
h=a3.h(0,"legalName")
h.toString
A.d(h)
g=a3.h(0,"address")
g.toString
A.d(g)
f=a3.h(0,"placeOfSupply")
f.toString
A.d(f)
e=a3.h(0,"layout")
e.toString
A.d(e)
d=a3.h(0,"issuerName")
d.toString
A.d(d)
c=a3.h(0,"issuerAddress")
c.toString
A.d(c)
b=a3.h(0,"accountId")
b.toString
A.d(b)
a=a3.h(0,"bankName")
a.toString
A.d(a)
a0=a3.h(0,"accountLast4")
a0.toString
A.d(a0)
a1=a3.h(0,"ifsc")
a1.toString
A.d(a1)
return A.DR(b,a0,A.n(a3.h(0,"accountNote")),g,a,p,a1,c,d,e,h,l,r,m,f,q,n,o,j,k,a4,i,s)},
Fw(a,b,c,d){var s=a.ab.a6(B.ah,"rental:"+b+":"+(""+c+"-"+B.b.aa(B.d.k(d),2,"0")))
return s==null?null:A.DS(s)},
CB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.ab,h=i.a6(B.ag,b).c,g=J.a2(h.h(0,"yearly"),!0),f=A.n(h.h(0,"pattern"))
f.toString
s=new A.zN(B.b.v(f,"{yyyy}"))
r=s.$1(c)
f=t.Z
q=A.c([],f)
for(p=0;p<3;++p)for(o=i.b2(B.iW[p]),n=o.length,m=0;m<o.length;o.length===n||(0,A.m)(o),++m){l=o[m]
if(A.n(l.c.h(0,"seriesId"))===b)q.push(l)}if(g){i=A.c([],f)
for(f=q.length,p=0;p<q.length;q.length===f||(0,A.m)(q),++p){l=q[p]
o=A.aA(l.c.h(0,"date"))
o.toString
if(J.a2(s.$1(o),r))i.push(l)}k=i}else k=q
if(k.length!==0){i=A.L(k)
return new A.aj(k,i.i("e(1)").a(new A.zL()),i.i("aj<1,e>")).e2(0,new A.zM())+1}if(q.length!==0)return 1
j=A.n(h.h(0,"startYear"))
if(g&&j!=null&&j!==r)i=1
else{i=A.aG(h.h(0,"startNumber"))
i.toString}return i},
Mm(a,b){var s,r,q,p,o,n=a.ab,m=n.a6(B.as,b)
if(m==null)return B.k3
s=n.a6(B.aQ,b)
r=m.c
q=A.n(r.h(0,"propertyId"))
q.toString
p=n.a6(B.ax,q)
o=m.aw("rent")
q=A.c([],t.s)
if(A.n(r.h(0,"role"))!=="landlord")q.push("You are not the landlord of this tenancy")
r=o==null
if(r)q.push("The tenancy's rent")
if(!r&&o.b!=="INR")q.push("The rent in rupees")
if(s==null)q.push("The invoicing details")
r=p==null
if((r?null:A.n(p.c.h(0,"bookId")))==null)q.push("The property's book")
if(!r&&n.a6(B.aR,p.b)==null)q.push("The invoice issuer")
return q},
M1(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=" for the month of ",b0="description",b1="amount",b2="currency",b3="is not a supported currency",b4=A.Fw(b5,b6,b7,b8)
if(b4!=null)return new A.r(b4,B.c)
s=A.Mm(b5,b6)
if(s.length!==0)return new A.r(a8,s)
r=b5.ab
q=r.a6(B.as,b6)
q.toString
p=r.a6(B.aQ,b6)
p.toString
o=q.c
n=A.n(o.h(0,"propertyId"))
n.toString
m=r.a6(B.aR,n)
m.toString
l=p.c
k=A.n(l.h(0,"layout"))
k.toString
j=b8-1
if(!(j>=0&&j<12))return A.a(B.V,j)
i=B.V[j]+" "+b7
j=A.c([],t.Z)
for(h=r.b2(B.bH),g=h.length,f=0;f<h.length;h.length===g||(0,A.m)(h),++f){e=h[f]
if(A.n(e.c.h(0,"tenancyId"))===b6)j.push(e)}h=A.n(l.h(0,"service"))
g=A.aG(l.h(0,"sac"))
if(g==null)g=997212
q=A.c([A.Ij(A.j(h)+a9+i,g,q.aw("rent").ghl())],t.t7)
for(h=j.length,g=t.f,d=k==="2",c=t.N,b=t.X,f=0;f<j.length;j.length===h||(0,A.m)(j),++f){a=j[f].c
a0=d?A.j(A.n(a.h(0,b0)))+" "+i:A.j(A.n(a.h(0,b0)))+a9+i
a1=A.aG(a.h(0,"sac"))
a1.toString
if(g.b(a.h(0,b1))){a=a.h(0,b1)
a.toString
a=g.a(a).G(0,c,b)
a2=a.h(0,b1)
a2.toString
a2=A.ah(A.d(a2))
a=a.h(0,b2)
a.toString
A.d(a)
a3=new A.q(a2,a)
a4=B.e.h(0,a)
if(a4==null)A.h(A.x(a,b2,b3))
if((a2.b<=0?0:Math.max(a2.gA().b,0))>a4)A.h(A.y(a+" allows "+A.j(a4)+" decimal places",a2.k(0),a8))
a=a3}else a=a8
a2=a.a
a=a.b
a4=B.e.h(0,a)
if(a4==null)A.h(A.x(a,b2,b3))
a=new A.P(a2.a,a2.b-a4).aD().aE(0)
q.push(new A.dC(a0,a1,a,B.d.u(a*new A.P(A.aL(9).a_(0,A.aL(100)),0).aD().aE(0)+5000,1e4),B.d.u(a*new A.P(A.aL(9).a_(0,A.aL(100)),0).aD().aE(0)+5000,1e4)))}j=A.n(l.h(0,"seriesId"))
j.toString
a5=A.CB(b5,j,b9)
a6=p.eP("tdsPercent")
if(a6==null)a6=$.HB()
a7=B.a.a5(q,0,new A.y4(),t.S)
p=b5.gK().h(0,A.n(l.h(0,"accountId")))
p.toString
r=A.n(r.a6(B.ag,j).c.h(0,"pattern"))
r.toString
r=A.Cn(r,a5,A.hD(A.mD(b9),"{fy}"),a8)
h=A.jG(a7,a6)
o=A.n(o.h(0,"otherParty"))
o.toString
g=A.n(l.h(0,"legalName"))
g.toString
d=A.n(l.h(0,"address"))
d.toString
c=A.n(l.h(0,"placeOfSupply"))
c.toString
m=m.c
b=A.n(m.h(0,"name"))
b.toString
m=A.n(m.h(0,"address"))
m.toString
a=p.b
a=B.b.ac(a,a.length-4)
a0=A.n(l.h(0,"ifsc"))
a0.toString
l=k==="3"?a8:A.n(l.h(0,"accountNote"))
return new A.r(A.DR(p.a,a,l,d,p.c,b9,a0,m,b,k,g,q,b8,r,c,n,a5,j,h,a6,b6,o,b7),B.c)},
Lf(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="personal",a0="prop.income",a1=a7.e,a2=a1.h(0,"tenancyId"),a3=a1.h(0,"month"),a4=A.cN(a1.h(0,"date")),a5=typeof a3=="string"?A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1).aj(a3):b
if(typeof a2!="string"||a5==null||a4==null)return"an invoice names its tenancy, month and date"
s=a5.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.Z(r,b,b)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
p=A.Z(s,b,b)
if(A.Fw(a6,a2,q,p)!=null)return"that month is already invoiced"
o=A.M1(a6,a2,q,p,a4)
n=o.a
if(n==null)return"not invoiced: "+B.a.Z(o.b,", ").toLowerCase()
s=n.w
if(s!==a1.h(0,"number")||n.gdi()!==a1.h(0,"total"))return"the invoice changed since it was shown; make it again"
r=a6.ab
m=r.a6(B.as,a2)
m.toString
l=A.n(r.a6(B.ax,n.b).c.h(0,"bookId"))
l.toString
k=A.c([],t.s)
for(j=t.N,i=A.a6(a6.d,j,t.G).gS(),i=i.gB(i),h=a6.f,g=l==="personal";i.n();){f=i.gt()
e=f.b
d=h.h(0,l)
if(d==null)d=g?a:b
c=!1
if(e===(d==="member"?a:d)){e=f.a
if(!(e==="income"||B.b.bF(e,".income"))){e=f.d
if(e!=null)e=e==="income"||B.b.bF(e,".income")
else e=c}else e=!0}else e=c
if(e)k.push(f.a)}B.a.b9(k)
i=n.a
h=n.c
g=n.d
i="rental:"+i+":"
h=""+h+"-"
r.f2(new A.b3(B.ah,i+(h+B.b.aa(B.d.k(g),2,"0")),n.f9()))
r=B.b.aa(B.d.k(g),2,"0")
g=B.b.aa(B.d.k(g),2,"0")
m=A.n(m.c.h(0,"otherParty"))
m.toString
f=n.e
e=A.eR(n.gdi())
k=B.a.v(k,a0)?a0:A.aN(k,j)
a6.aJ.c.j(0,i+(h+r),new A.fa(i+(h+g),l,m,s,f,e,k,"owner",b,new A.iP(A.eR(n.gf8()),A.eR(n.geL()+n.gea()),A.eR(n.z))))
return b},
yF:function yF(){},
yD:function yD(a){this.a=a},
yE:function yE(a){this.a=a},
dC:function dC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tE:function tE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3},
tH:function tH(){},
tF:function tF(){},
tG:function tG(){},
zN:function zN(a){this.a=a},
zL:function zL(){},
zM:function zM(){},
y4:function y4(){},
Iq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.h(0,"bookId")
h.toString
A.d(h)
s=a.h(0,"period")
s.toString
A.d(s)
r=a.h(0,"version")
r.toString
A.R(r)
q=a.h(0,"title")
q.toString
A.d(q)
q=A.c([],t.D6)
p=a.h(0,"rows")
p.toString
o=t.j
p=J.S(o.a(p))
n=t.N
while(p.n()){m=p.gt()
m.toString
l=J.dg(o.a(m),n)
k=l.a
j=J.ar(k)
i=l.$ti.y[1]
q.push(new A.iQ(i.a(j.h(k,0)),i.a(j.h(k,1)),i.a(j.h(k,2))))}return new A.fd(h,s,r,q)},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=d},
MC(a){var s=a.d,r=A.a3($.M(),s.a.b),q=new A.zq(s,r),p=new A.zs(B.dM,r)
return new A.p4(a.c.a,B.dM.gS().a5(0,r,new A.zr(),t.B),J.HE(q.$1(B.aB),q.$1(B.b8)).a8(0,p.$1(B.aB)).a8(0,p.$1(B.b8)),J.HF(q.$1(B.c8),p.$1(B.c8)),s.f.a8(0,p.$1(null)))},
p4:function p4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zq:function zq(a,b){this.a=a
this.b=b},
zs:function zs(a,b){this.a=a
this.b=b},
zr:function zr(){},
Fy(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.AD,h=A.w(t.N,i)
for(s=a.to.a,i=A.aE(new A.N(s,A.p(s).i("N<2>")),i),s=i.length,r=c.a,q=c.b,p=c.c,o=0;o<s;++o){n=i[o]
if(n.d===b){m=n.f
m=A.b(m.a,m.b,m.c).l(0,A.b(r,q,p))>0}else m=!0
if(m)continue
m=n.a
l=h.h(0,m)
if(l!=null){k=n.f
j=l.f
j=A.b(k.a,k.b,k.c).l(0,A.b(j.a,j.b,j.c))>0
k=j}else k=!0
if(k)h.j(0,m,n)}return h},
Cf(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="currency",a="is not a supported currency"
for(s=A.aE(a0.fx,t.v),r=s.length,q=a1.b,p=a1.a,o=a2.a,n=a2.b,m=a2.c,l=a1.w,k=l.a,j=l.b,l=l.c,i=null,h=0;h<r;++h){g=s[h]
if(g.b===p){f=g.d
e=f.a
d=f.b
f=f.c
f=A.b(e,d,f).l(0,A.b(o,n,m))>0||A.b(e,d,f).l(0,A.b(k,j,l))<0}else f=!0
if(f)continue
if(i!=null){f=g.d
e=i.c
e=A.b(f.a,f.b,f.c).l(0,A.b(e.a,e.b,e.c))<=0
f=e}else f=!1
if(f)continue
f=g.r!=null?B.mY:B.mZ
i=new A.by(q,g.f,g.d,f,a1)}if(a1.d===B.o)for(s=a3.gS(),s=s.gB(s);s.n();){r=s.gt()
if(r.r!==p)continue
if(i!=null){o=r.f
n=i.c
n=A.b(o.a,o.b,o.c).l(0,A.b(n.a,n.b,n.c))<=0
o=n}else o=!1
if(o)continue
o=r.e
n=o.b
m=$.M()
c=B.e.h(0,n)
if(c==null)A.h(A.x(n,b,a))
if((m.b<=0?0:Math.max(m.gA().b,0))>c)A.h(A.y(n+" allows "+A.j(c)+" decimal places",m.k(0),null))
o=o.a
o=m.C(0,new A.P(o.a.R(0),o.b))
c=B.e.h(0,n)
if(c==null)A.h(A.x(n,b,a))
if((o.b<=0?0:Math.max(o.gA().b,0))>c)A.h(A.y(n+" allows "+A.j(c)+" decimal places",o.k(0),null))
i=new A.by(q,new A.q(o,n),r.f,B.cl,a1)}return i},
FQ(a,b,c,d){var s,r,q,p,o,n=A.Fy(a,b,d),m=A.c([],t.oc),l=A.c([],t.Q),k=a.gK().gS(),j=A.p(k),i=j.i("o<i.E>"),h=A.D(new A.o(k,j.i("k(i.E)").a(new A.zE(b,d)),i),i.i("i.E"))
B.a.E(h,new A.zF())
for(k=h.length,s=0;s<h.length;h.length===k||(0,A.m)(h),++s){r=h[s]
q=r.d===B.x?null:A.Cf(a,r,d,n)
if(q==null)B.a.m(l,r)
else B.a.m(m,q)}for(k=new A.a1(n,n.r,n.e,A.p(n).i("a1<2>"));k.n();){j=k.d
if(j.c!==B.ck)i=j.e.a.l(0,$.M())===0
else i=!0
if(i)continue
B.a.m(m,new A.by(B.b.H(j.b),j.e,j.f,B.cl,null))}p=new A.zG(m)
k=A.a4(t.N)
for(j=m.length,s=0;s<m.length;m.length===j||(0,A.m)(m),++s)k.m(0,m[s].b.b)
k.Y(0,c)
j=p.$1(c)
i=A.c([],t.C7)
k=A.D(k,k.$ti.c)
B.a.b9(k)
o=k.length
s=0
for(;s<k.length;k.length===o||(0,A.m)(k),++s)i.push(p.$1(k[s]))
return new A.l0(j,i,l)},
FR(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=g*12+e-1,i=A.c([],t.sp)
for(s=j-c+1,r=f.a,q=f.b,p=f.c;s<=j;++s){o=A.b(B.d.u(s,12),B.d.T(s,12)+1+1,1).av(-864e8)
n=A.b_(o)
m=A.b4(o)
l=A.av(o)
k=new A.B(n,m,l)
i.push(A.FQ(a,b,d,A.b(n,m,l).l(0,A.b(r,q,p))>0?f:k))}return i},
ho:function ho(a,b){this.a=a
this.b=b},
by:function by(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
uh:function uh(){},
ui:function ui(){},
l0:function l0(a,b,c){this.b=a
this.c=b
this.d=c},
zE:function zE(a,b){this.a=a
this.b=b},
zF:function zF(){},
zG:function zG(a){this.a=a},
zH:function zH(){},
zI:function zI(a){this.a=a},
zJ:function zJ(){},
zK:function zK(){},
Nb(a,b,c,d,e){var s,r,q,p,o,n,m=B.b.H(a.b)
if(B.b.H(a.a).length===0)return"a value needs its holding"
s=m.length
if(s===0)return"give the value a name"
if(s>60)return"the name is at most 60 characters"
if($.eU().aM(0,m).gq(0)>=9)return"the name looks like it holds a full account number; leave the number out"
s=a.d
if(!c.a.D(s))return"no book "+s
r=a.e
q=r.b
if(!B.e.D(q))return"currency "+q+" is not supported"
if(r.a.l(0,$.M())<0)return"a value is zero or more"
r=a.f
if(A.b(r.a,r.b,r.c).l(0,A.b(e.a,e.b,e.c))>0)return"the as of date cannot be in the future"
p=a.r
r=a.c
if(r===B.ck){o=p==null?null:b.a.h(0,p)
if(o==null||o.d!==B.o)return"a loan balance is for one of your loans"
n=o.e
if(n!==q)return"the loan balance must be in "+n
if(o.r!==s)return"the loan is in another book"}else if(p!=null)return"only a loan balance names an account"
if(d!=null)s=d.c!==r||d.e.b!==q||d.r!=p
else s=!1
if(s)return"this holding is a "+d.c.b+" in "+d.e.b+"; add a new one instead"
return null},
cI:function cI(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Nm(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=t.xG,a0=A.a4(a)
for(s=a2.length,r=0;r<a2.length;a2.length===s||(0,A.m)(a2),++r){q=a2[r]
a0.m(0,new A.bz(q.a,q.b,q.c))}p=A.w(a,t.W)
for(a=a1.b1(),s=J.S(a.a),a=new A.O(s,a.b,a.$ti.i("O<1>"));a.n();){o=s.gt()
if(o.Q!=null){n=o.d
n=n!==B.n&&n!==B.w}else n=!0
if(n)continue
n=o.b
m=o.z
if(m==null)m=""
l=A.C("\\s+",!0,!1)
k=new A.bz(n,B.b.H(A.a8(m.toUpperCase(),l," ")),o.e)
if(!a0.v(0,k))continue
j=p.h(0,k)
if(j==null)i=1
else{n=o.x
m=j.x
i=A.b(n.a,n.b,n.c).l(0,A.b(m.a,m.b,m.c))}if(i<=0)if(i===0){n=o.a
m=j.a
if(n===m)n=0
else n=n<m?-1:1
n=n>0}else n=!1
else n=!0
if(n)p.j(0,k,o)}a=A.c([],t.qt)
for(a0=a2.length,s=a1.e,o=t.N,n=t.R,m=a1.b.a,r=0;r<a2.length;a2.length===a0||(0,A.m)(a2),++r){q=a2[r]
l=A.a4(o)
for(h=q.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.m)(h),++f){e=m.h(0,h[f])
e=e==null?b:e.c
if(e!=null)l.m(0,e)}l=A.Nw(q,l,A.a6(s,o,n).gS())
if(l==null){d=p.h(0,new A.bz(q.a,q.b,q.c))
A:{if(d!=null){l=B.a.N(h,new A.AZ(a1))
c=d}else{c=b
l=!1}if(l){l=c.d
l.toString
h=c.Q
h.toString
h=new A.ig(l,h,b)
l=h
break A}l=b
break A}}a.push(l)}return a},
Nw(a,b,c){var s,r,q,p
if(b.a===0)return null
s=A.p(c)
r=s.i("o<i.E>")
q=A.D(new A.o(c,s.i("k(i.E)").a(new A.Bj(a,b)),r),r.i("i.E"))
B.a.E(q,new A.Bk())
if(q.length===0||!B.a.b5(q,new A.Bl(q)))return null
p=B.a.ga0(q)
return new A.ig(p.d,p.e,p.a)},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
AZ:function AZ(a){this.a=a},
Bj:function Bj(a,b){this.a=a
this.b=b},
Bi:function Bi(a,b){this.a=a
this.b=b},
Bk:function Bk(){},
Bl:function Bl(a){this.a=a},
Nt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.w(t.xG,t.C)
for(s=a.eY(b),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>"));s.n();){q=r.gt()
p=q.d
if(p!=null)p=(p===B.n||p===B.w)&&q.Q==null
else p=!0
if(!p)continue
p=q.z
if(p==null)p=""
o=A.C("\\s+",!0,!1)
n=B.b.H(A.a8(p.toUpperCase(),o," "))
if(n.length===0)continue
J.bU(f.aK(new A.bz(n,q.f.b,q.e),new A.B8()),q)}for(s=f.$ti,r=new A.a1(f,f.r,f.e,s.i("a1<2>"));r.n();)J.mO(r.d,new A.B9())
r=A.c([],t.wp)
for(s=new A.ac(f,s.i("ac<1,2>")).gB(0),q=t.B,p=t.s;s.n();){o=s.d
m=o.a
l=m.b
k=o.b
o=J.b1(k)
j=o.ga0(k).z
j.toString
j=B.b.H(j)
i=A.c([],p)
for(h=o.gB(k);h.n();)i.push(h.gt().a)
h=$.M()
g=B.e.h(0,l)
if(g==null)A.h(A.x(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gA().b,0))>g)A.h(A.y(l+" allows "+A.j(g)+" decimal places",h.k(0),null))
r.push(new A.cC(b,m.a,m.c,j,i,o.a5(k,new A.q(h,l),new A.Ba(),q)))}B.a.E(r,A.N1())
return r},
LM(a,b){var s,r,q,p=t.t5
p.a(a)
p.a(b)
s=B.d.l(b.e.length,a.e.length)
if(s!==0)return s
r=B.b.l(a.b,b.b)
if(r!==0)return r
q=B.b.l(a.f.b,b.f.b)
return q!==0?q:B.d.l(b.c.a,a.c.a)},
Ff(a0,a1,a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="categoryId",a={}
a.a=a7
s=new A.xq(a,a4,a5)
r=t.Y
q=A.c([],r)
for(p=a1.e,o=p.length,n=a0.b.a,m="bulk:"+a2,l=m+":",k=t.N,j=t.X,i=a8.b,h="bulk."+a2,g=0;g<p.length;p.length===o||(0,A.m)(p),++g){f=p[g]
e=n.h(0,f)
d=!1
if(e!=null){d=e.d
if(d!=null)d=(d===B.n||d===B.w)&&e.Q==null
else d=!0}else e=null
if(d){d=e.dx
c=A.w(k,j)
c.j(0,"movementId",f)
c.j(0,"type",i)
c.j(0,b,a3)
c.j(0,"baseVersion",d)
if(a6)c.j(0,"ruleId",h)
else c.j(0,"actionId",a2)
q.push(s.$3(l+f+":v"+d,"movement.classify",c))}}if(a6){p=A.w(k,j)
p.j(0,"id",h)
p.j(0,"bookId",a1.a)
p.j(0,"pattern",a1.b)
p.j(0,"accountAlias",null)
p.j(0,"direction",a1.c.b)
p.j(0,"type",i)
p.j(0,b,a3)
B.a.a1(q,A.c([s.$3(m+":rule","rule.propose",p),s.$3(m+":confirm","rule.confirm",A.T(["id",h],k,j))],r))}return q},
LE(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.Y)
for(s=b.e,r=s.length,q=a.b.a,p="bulk:"+c+":",o=t.N,n=t.X,m=f,l=0;l<s.length;s.length===r||(0,A.m)(s),++l){k=s[l]
j=q.h(0,k)
if(j!=null)i=j.d==null
else{j=null
i=!1}if(i){i=j.dx
h=m+1
g.push(new A.ak(p+k+":v"+i,d,m,"movement.markTransfer",A.T(["movementId",k,"baseVersion",i],o,n),e))
m=h}}return g},
cC:function cC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
B8:function B8(){},
B9:function B9(){},
Ba:function Ba(){},
xq:function xq(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b){this.a=a
this.b=b},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N_(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=288e8,a6=t.N,a7=t.k,a8=A.w(a6,a7),a9=new A.AG(b1),b0=new A.AE(a8)
B.a.a2(A.aE(b1.c,a7),b0)
for(a7=b1.gm8(),s=a7.length,r=t.s,q=0;q<s;++q){p=a7[q]
o=A.K2(b1,p)
if(o!=null){n=o.a
m=p.CW
if(m==null){m=p.w
l=m.F()
m.F()
k=l.av(a5)
l=new A.B(A.b_(k),A.b4(k),A.av(k))
m=l}m=A.LU(b1,n,m)
n=m}else n=!1
if(n)continue
n=A.c([],r)
m=p.r
if(m!=null)n.push(m.k(0))
m=p.y
if(m!=null)n.push(m)
j=B.a.Z(n,", ")
n=p.ch
m=n==null
if(m)i=null
else{l=p.d
if(l==null){h=p.ay
l=h==null?l:h
if(l==null)l=p.b.b}i=l+" \u2022\u2022"+n}if(!m){m=A.C("^\\d{4}$",!0,!1)
g=!m.b.test(n)}else g=!1
n=p.f
m=n==null
f=m?i:n
if(f==null)f="an unknown account"
n=!m
if(n){m=b1.gK().gS()
l=A.p(m)
e=new A.o(m,l.i("k(i.E)").a(new A.AH(p)),l.i("o<i.E>")).gq(0)>1}else e=!1
m=p.a
l=j.length===0?"":" ("+j+")"
if(e)n=": two accounts are called "+f+"; change one alias."
else if(n)n=" for that account to be added."
else if(g)n=": it shows only part of the number, so pick its account."
else n=i!=null?" for one account of that bank and currency ending in those digits.":": it does not say which account; the statement shows it."
b0.$1(new A.W("held:"+m,B.aA,m,"A message for "+f+l+" waits"+n))}for(a7=b1.gik(),s=a7.length,q=0;q<s;++q){p=a7[q]
d=p.x
if(d==null)d=p.w
r=p.a
n=p.ay
if(n==null)n=p.d
if(n==null)n=p.b.b
if(d==null)m=""
else{m=d.F()
d.F()
k=m.av(a5)
m=" on "+new A.B(A.b_(k),A.b4(k),A.av(k)).k(0)}b0.$1(new A.W("suspect:"+r,B.c_,r,"A message from "+n+m+" may not be from the bank: "+A.j(p.ax)+". Check it in the bank app, not through anything in the message. Nothing from it was recorded."))}for(a7=A.aE(b1.ok,t.pL),s=a7.length,q=0;q<s;++q){c=a7[q]
o=c.c
if(o==null)o="an account it does not name"
r=c.f
b=r==null?"":" on "+r.k(0)
r=c.a
n=c.r
m=n?B.c4:B.c0
if(n){n=c.d
n=n==null?"":" of "+n.k(0)
n=c.b+" says a payment"+n+" for "+o+" failed"+b+". Check it in the bank app; nothing was recorded."}else{n=c.d
l=c.b
n=(n==null?l+" sent a payment reminder for "+o+b+".":l+" reminds you of "+n.k(0)+" due on "+o+b+".")+" A reminder is not a payment: nothing is marked paid."}b0.$1(new A.W("reminder:"+r,m,r,n))}for(a7=A.a6(b1.rx,a6,t.y6).gS(),a7=a7.gB(a7),s=b1.b,r=s.a,s=s.c;a7.n();){n=a7.gt()
m=r.h(0,n.a)
if(m!=null){l=s.h(0,m.a)
if(l==null){l=m.f.b
h=$.M()
a=new A.q(h,l)
a0=B.e.h(0,l)
if(a0==null)A.h(A.x(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gA().b,0))>a0)A.h(A.y(l+" allows "+A.j(a0)+" decimal places",h.k(0),null))
l=a}l=l.a.l(0,m.f.a)>=0}else l=!0
if(l)continue
l=m.f.k(0)
h=m.z
h=h==null?"":" at "+B.b.H(h)
j=l+h+" on "+m.w.k(0)
a1=n.d
n=m.a
if(a1==null)m="You do not recognise "+j+" on "+A.j(a9.$1(m.c))+". Check it in the bank's app and report it there if it is not yours; SanthIQ does not dispute anything. It counts as spending until the bank reverses it."
else{m=a1.F()
a1.F()
k=m.av(a5)
m="You reported "+j+" to the bank on "+new A.B(A.b_(k),A.b4(k),A.av(k)).k(0)+". It counts as spending until the reversal arrives and is linked."}b0.$1(new A.W("flag:"+n,B.c1,n,m))}B.a.a2(A.Nd(b1),b0)
B.a.a2(A.Ne(b1),b0)
B.a.a2(A.M7(b1).b,b0)
B.a.a2(A.M6(b1).b,b0)
B.a.a2(A.MI(b1).b,b0)
a2=A.M8(b1,b2)
B.a.a2(a2.c,b0)
for(a7=a2.b,s=a7.length,q=0;q<a7.length;a7.length===s||(0,A.m)(a7),++q){a3=a7[q]
n=r.h(0,a3.a)
n.toString
m=r.h(0,a3.b)
l=n.a
b0.$1(new A.W("transfer?:"+l+":"+m.a,B.P,l,n.f.k(0)+" left "+A.j(a9.$1(n.c))+" on "+n.w.k(0)+" and "+m.f.k(0)+" reached "+A.j(a9.$1(m.c))+" on "+m.w.k(0)+": if this is a move between your own accounts, pair them."))}B.a.a2(A.N3(b1),b0)
B.a.a2(A.LY(b1),b0)
B.a.a2(A.Mn(b1),b0)
B.a.a2(A.MD(b1),b0)
B.a.a2(A.N9(b1),b0)
a7=A.a4(a6)
for(s=A.G3(b1),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){a4=s[q]
a7.m(0,"missing-statement:"+a4.a+":"+a4.b.k(0))}s=A.MA(b1,b2)
r=A.L(s)
new A.o(s,r.i("k(1)").a(new A.AI(a7)),r.i("o<1>")).a2(0,b0)
B.a.a2(A.MW(b1),b0)
B.a.a2(A.LL(b1,b2),b0)
B.a.a2(A.MM(b1,b2),b0)
B.a.a2(A.My(b1),b0)
B.a.a2(A.LF(b1),b0)
r=a8.$ti.i("N<2>")
a7=r.i("o<i.E>")
a6=A.D(new A.o(new A.N(a8,r),r.i("k(i.E)").a(new A.AJ(b1,A.a6(b1.y1,a6,t.h),b2)),a7),a7.i("i.E"))
B.a.E(a6,new A.AK())
return a6},
AG:function AG(a){this.a=a},
AE:function AE(a){this.a=a},
AF:function AF(a){this.a=a},
AH:function AH(a){this.a=a},
AI:function AI(a){this.a=a},
AJ:function AJ(a,b,c){this.a=a
this.b=b
this.c=c},
AK:function AK(){},
FA(a,b,c){var s,r=null
A:{s=A.G7(a,b)
if(!s){s=b===B.m?"money coming in is never an expense: file it as income or link it as a refund (INC-03)":"money going out is never income (INC-03)"
break A}if(B.G===a&&b!==B.m){s="a refund is money coming back"
break A}if(B.L===a){if(c==null)s=r
else s=c.gaS()||c.d===B.a5
s=s!==!0}else s=!1
if(s){s="a transfer is on a bank account"
break A}if(B.X===a){if(b===B.j){s=c==null?r:c.gaS()
s=s===!0}else s=(c==null?r:c.d)===B.y
s=!s}else s=!1
if(s){s="a card bill payment is a bank debit or a card credit"
break A}s=r
break A}return s},
MF(a){var s
t.W.a(a)
s=a.d
if(s!=null)s=(s===B.n||s===B.w)&&a.Q==null
else s=!0
return s},
bb:function bb(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
Cz(a,b,c,d,e){var s=J.mQ(b,new A.zc(a,d,c,e)),r=A.D(s,s.$ti.i("i.E"))
B.a.E(r,new A.zd())
if(r.length===0)return new A.h8()
return B.a.b5(r,new A.ze(B.a.ga0(r)))?new A.iJ(B.a.ga0(r)):new A.hd(r)},
LG(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.c([],t.Y)
for(s=a0.b1(),r=s.$ti,r.i("k(i.E)").a(A.jI()),s=s.gB(0),r=new A.O(s,A.jI(),r.i("O<i.E>")),q=t.N,p=t.X,o=a0.r.a,n=a0.e,m=t.R,l=a3;r.n();){k=s.gt()
j=A.a6(n,q,m).gS()
i=k.z
if(i==null)h=new A.h8()
else{g=i.toUpperCase()
f=A.C("\\s+",!0,!1)
g=B.b.H(A.a8(g,f," "))
f=k.b
h=A.Cz(g,j,k.c,f,k.e)}if(!(h instanceof A.iJ))continue
j=h.a
g=j.d
f=k.e
if(A.FA(g,f,o.h(0,k.c))!=null)continue
if(!A.N2(j,k))continue
e=j.y
if(e!=null){if(f!==B.j||k.b===e)continue
g=j.a
f=k.a
k=k.dx
d=l+1
B.a.m(a,new A.ak("rule:"+g+":"+f+":v"+k,a1,l,"movement.forBook",A.T(["movementId",f,"baseVersion",k,"bookId",e,"categoryId",j.e,"ruleId",g],q,p),a2))
l=d
continue}f=j.a
c=k.a
k=k.dx
d=l+1
b=A.w(q,p)
b.j(0,"movementId",c)
b.j(0,"type",g.b)
b.j(0,"categoryId",j.e)
b.j(0,"baseVersion",k)
b.j(0,"ruleId",f)
j=j.x
if(j!=null)b.j(0,"memberId",j)
B.a.m(a,new A.ak("rule:"+f+":"+c+":v"+k,a1,l,"movement.classify",b,a2))
l=d}return a},
N3(a){var s,r,q,p,o,n,m,l,k=A.c([],t.kz)
for(s=A.a6(a.e,t.N,t.R).gS(),s=s.gB(s);s.n();){r=s.gt()
if(r.f)k.push(r)}if(k.length<2)return B.jN
q=new A.AM(A.w(t.Cw,t.cT),k)
k=A.c([],t.M)
for(s=a.b1(),r=s.$ti,r.i("k(i.E)").a(A.jI()),s=s.gB(0),r=new A.O(s,A.jI(),r.i("O<i.E>"));r.n();){p=s.gt()
o=q.$1(p)
if(o instanceof A.hd){n=o.a
m=p.a
l=A.L(n)
k.push(new A.W("rules-disagree:"+m,B.bY,m,"Rules "+new A.aj(n,l.i("f(1)").a(new A.AL()),l.i("aj<1,f>")).Z(0," and ")+" disagree about "+A.j(p.z)+"; choose one or change a rule."))}}return k},
N2(a,b){var s,r=b.z,q=r==null?null:A.Na(r,b.e)
if(q!=null&&q!==a.d)return!1
s=a.Q
if(!a.z&&s!=null&&b.y.c.hg(s))return!1
return!0},
cE:function cE(){},
h8:function h8(){},
iJ:function iJ(a){this.a=a},
hd:function hd(a){this.a=a},
zc:function zc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zd:function zd(){},
ze:function ze(a){this.a=a},
AM:function AM(a,b){this.a=a
this.b=b},
AN:function AN(a,b,c){this.a=a
this.b=b
this.c=c},
AL:function AL(){},
Na(a,b){var s,r,q,p=A.C("[^A-Za-z0-9]+",!0,!1)
p=A.a8(a,p," ")
s=A.C("\\s+",!0,!1)
r=B.b.H(A.a8(p.toUpperCase(),s," "))
p=new A.AR(r)
if(!p.$1(B.jr)){s=A.C("(?:^| )"+A.hI("FUNDS TRANSFER")+"(?: |$)",!0,!1)
if(s.b.test(r)){s=A.C("(?:^| )"+A.hI("OWN")+"(?: |$)",!0,!1)
s=s.b.test(r)}else s=!1}else s=!0
if(s)return B.L
if(p.$1(B.kf))return B.X
q=b===B.m
if(q&&p.$1(B.kh))return B.G
if(!q&&p.$1(B.kl))return B.n
if(q){p=A.C("(?:^| )"+A.hI("INTEREST")+"(?: |$)",!0,!1)
p=p.b.test(r)}else p=!1
if(p)return B.w
return null},
AR:function AR(a){this.a=a},
AS:function AS(a){this.a=a},
HR(a){var s=new A.mX(a)
s.$1("backupKeepManual")
s.$1("backupKeepDaily")
s.$1("passphraseIntervalDays")
return new A.mW(s.$1("staleBalanceDays"))},
mW:function mW(a){this.d=a},
mX:function mX(a){this.a=a},
IS(a){var s,r,q,p,o,n,m=a.h(0,"id")
m.toString
A.d(m)
s=a.h(0,"title")
s.toString
A.d(s)
r=A.c([],t.EP)
q=a.h(0,"items")
q.toString
q=J.dg(t.j.a(q),t.J)
p=q.$ti
q=new A.ad(q,q.gq(0),p.i("ad<Q.E>"))
p=p.i("Q.E")
while(q.n()){o=q.d
if(o==null)o=p.a(o)
n=o.h(0,"id")
n.toString
A.d(n)
o=o.h(0,"text")
o.toString
r.push(new A.lp(n,A.d(o)))}q=a.h(0,"check")
q.toString
A.d(q)
return new A.lq(m,s,r)},
lp:function lp(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
tQ:function tQ(a){this.a=a},
FS(a){var s,r=B.b.H(a).toUpperCase(),q=A.C("[ -]",!0,!1),p=A.a8(r,q,"")
q=$.Ho()
if(q.b.test(p))return p
s=B.b.f4(B.b.f4(r,$.H1(),""),$.H2(),"")
q=$.GX()
return q.b.test(s)?s:null},
IT(a){var s=t.c5,r=A.D(a,s)
B.a.E(r,new A.tV())
return new A.tU(A.aE(r,s))},
N8(a,b,c,d,e,f){var s,r=t.N,q=t.X,p=A.w(r,q)
p.j(0,"id",a.a)
p.j(0,"kind",a.b.b)
s=a.c
if(s!=null)p.j(0,"institution",s)
r=A.kS(p,r,q)
if(f)r.j(0,"removed",!0)
return new A.ak(d,c,b,"sms.sender",r,e.F())},
c6:function c6(a,b,c){this.c=a
this.a=b
this.b=c},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
tU:function tU(a){this.a=a},
tV:function tV(){},
l4:function l4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ne(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.w(d,t.C)
for(s=a.b1(),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>"));s.n();){q=r.gt()
if(q.CW==null)J.bU(c.aK(q.c,new A.AU()),q)}d=A.w(d,t.sO)
for(s=new A.ac(c,c.$ti.i("ac<1,2>")).gB(0),r=t.W,q=t.qM;s.n();){p=s.d
o=p.a
n=p.b
p=A.c([],q)
for(m=A.bO(n,0,r),l=J.S(m.a),k=m.b,m=new A.at(l,k,A.p(m).i("at<1>"));m.n();){j=m.c
j=j>=0?new A.r(k+j,l.gt()):A.h(A.ao())
p.push(new A.r(j.a,j.b))}B.a.E(p,new A.AV())
d.j(0,o,p)}i=new A.AW(d)
d=A.c([],t.M)
for(s=A.aE(a.fx,t.v),r=s.length,h=0;h<r;++h){g=s[h]
for(q=g.d,p=i.$3(g.b,g.c,q),m=p.$ti,p=new A.e8(p.a(),m.i("e8<1>")),l="unmatched:"+g.a+":",m=m.c;p.n();){k=p.b
if(k==null)k=m.a(k)
j=k.a
f=k.f.k(0)
e=k.z
e=e==null?"":" at "+e
d.push(new A.W(l+j,B.aA,j,"An alert for "+f+e+" on "+k.w.k(0)+" is not on the statement to "+q.k(0)+". It may post on the next one; otherwise check it in the bank app."))}}return d},
Nd(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.M)
for(s=a.id,s=A.aE(new A.N(s,A.p(s).i("N<2>")),t.A9),r=s.length,q=0;q<r;++q){p=s[q]
o=p.r
n=!1
if(o!=null){n=o.a
n=!(n==="read"||n==="alreadyRead")
m=o}else m=null
if(n){n=p.a
l=m.a==="totalsMismatch"?B.b6:B.b7
k=p.b
j=a.gK().h(0,k)
j=j==null?null:j.b
i.push(new A.W("statement-file:"+n,l,n,A.Ke(p,m,j==null?k:j)))}}return i},
Ke(a,b,c){var s,r=b.a
A:{if("needsPassword"===r){s=a.c+" for "+c+" needs its password. Set it on the account, then try again."
break A}if("wrongPassword"===r){s="The password for "+c+" did not open "+a.c+". Change it and try again."
break A}if("noReader"===r){s=b.c
if(s==null)s="there is no reader for it yet"
s=a.c+" for "+c+" is kept; "+s+"."
break A}if("partlyRead"===r){s=b.c
if(s==null)s="it holds an account not added yet"
s=a.c+" for "+c+" is read, but "+s+"."
break A}if("accountMissing"===r){s=b.c
if(s==null)s="its account is not added yet"
s=a.c+" is kept; "+s+"."
break A}if("totalsMismatch"===r){s=b.c
if(s==null)s="its transactions do not add up to its balances"
s=a.c+" for "+c+": "+s
break A}if("layoutChanged"===r){s=a.c+" for "+c+" was not read: its layout is not one SanthIQ reads (the bank may have changed it, or this kind of statement has no reader yet). Nothing from it was counted; the file is kept."
break A}s=b.c
if(s==null)s="unknown reason"
s=a.c+" for "+c+" could not be read: "+s+"."
break A}return s},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tX:function tX(a,b){this.a=a
this.c=b},
dV:function dV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AU:function AU(){},
AV:function AV(){},
AW:function AW(a){this.a=a},
AX:function AX(){},
nX(a){var s=0,r=A.J(t.nm),q,p,o,n,m,l
var $async$nX=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:l=a.h(0,"deviceId")
l.toString
A.d(l)
p=a.h(0,"keys")
p.toString
s=3
return A.t(A.fP(t.f.a(p).G(0,t.N,t.X)),$async$nX)
case 3:p=c
o=a.h(0,"primary")
o.toString
o=B.B.O(A.d(o))
n=a.h(0,"name")
n.toString
A.d(n)
m=a.h(0,"kind")
m.toString
q=new A.il(l,p,o,n,A.d(m))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$nX,r)},
E_(a,b){var s=t.Y
return new A.u0(a,b,A.w(t.S,t.c),A.c([],s),A.c([],s))},
cH(a,b,c,d,e){return A.J0(a,b,c,d,e)},
J0(a7,a8,a9,b0,b1){var s=0,r=A.J(t.nm),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cH=A.K(function(b2,b3){if(b2===1){o.push(b3)
s=p}for(;;)switch(s){case 0:a5=J
s=3
return A.t(a7.bj(),$async$cH)
case 3:a2=a5.mQ(b3,$.Gw().ghd())
a3=A.D(a2,a2.$ti.i("i.E"))
a2=a3.length
if(a2===0)throw A.l(new A.l2())
m=null
h=t.bs,g=t.L,f=t.f,e=t.N,d=t.X,c=0
case 4:if(!(c<a3.length)){s=6
break}l=a3[c]
p=8
a5=g
s=11
return A.t(a7.bZ(l),$async$cH)
case 11:b=a5.a(b3)
k=f.a(B.z.bh(new A.eK(!1).ct(b,0,null,!0),null)).G(0,e,d)
s=12
return A.t(A.zT(A.Dy(k),b1),$async$cH)
case 12:m=b3
s=6
break
p=2
s=10
break
case 8:p=7
a4=o.pop()
b=A.aw(a4)
if(b instanceof A.hp){s=5
break}else if(b instanceof A.b8){s=5
break}else if(h.b(b)){s=5
break}else throw a4
s=10
break
case 7:s=2
break
case 10:case 5:a3.length===a2||(0,A.m)(a3),++c
s=4
break
case 6:if(m==null)throw A.l(new A.hp())
j=null
i=null
p=13
s=17
return A.t(A.mI(m),$async$cH)
case 17:s=16
return A.t(b3.bu(),$async$cH)
case 16:j=b3.a
s=18
return A.t(A.mt(m,"santhiq/sync/join/v1"),$async$cH)
case 18:i=b3
n.push(15)
s=14
break
case 13:n=[2]
case 14:p=2
a2=m
a2.b.dR()
a2.ec()
s=n.pop()
break
case 15:s=19
return A.t(A.fQ(),$async$cH)
case 19:a0=b3
a1="dev"+A.Kl(A.No(8))
a2=A.T(["formatVersion",1,"deviceId",a1],e,d)
h=t.D.i("bf.S")
g=h.a(a0.c)
g=B.K.gaI().O(g)
h=h.a(a0.d)
e=B.E.O(B.z.bc(A.T(["deviceId",a1,"name",a9,"kind",a8,"x25519",g,"ed25519",B.K.gaI().O(h),"createdAtUtc",b0.F().dg()],e,e),null))
a5=a7
a6="j-"+a1+".sqj"
s=21
return A.t(A.hM(a2,i,B.mo,e,a0.b),$async$cH)
case 21:s=20
return A.t(a5.c0(a6,b3),$async$cH)
case 20:q=new A.il(a1,a0,j,a9,a8)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cH,r)},
l2:function l2(){},
cS:function cS(){},
il:function il(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fs:function fs(a,b){this.a=a
this.b=b},
u0:function u0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.w=_.r=0},
u2:function u2(){},
u1:function u1(){},
u3:function u3(){},
eX(a){return new A.hS(a)},
hM(a,b,c,d,e){var s=0,r=A.J(t.p),q,p,o,n,m,l,k,j
var $async$hM=A.K(function(f,g){if(f===1)return A.G(g,r)
for(;;)switch(s){case 0:m=B.E.O("SANTHIQ-SYNC "+c.b+" 1\n"+B.z.bc(a,null)+"\n")
s=3
return A.t($.CQ().bE(d,m,b),$async$hM)
case 3:l=g
k=t.eE
j=new A.hr(A.c([],k))
j.m(0,l.c)
j.m(0,l.b.a)
j.m(0,l.a)
p=j.f7()
j=$.CR()
o=A.D(m,t.S)
B.a.a1(o,p)
s=4
return A.t(j.aW(0,o,e),$async$hM)
case 4:n=g
k=new A.hr(A.c([],k))
k.m(0,m)
j=t.D.i("bf.S").a(n.a)
k.m(0,B.E.O(B.K.gaI().O(j)+"\n"))
k.m(0,p)
q=k.f7()
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hM,r)},
CE(a,b){var s,r,q,p,o,n,m,l=B.i.bX(a,10),k=l
if(typeof k!=="number")return k.fd()
if(k<0||B.R.ha(A.fu(a,0,l),!0)!=="SANTHIQ-SYNC "+b.b+" 1")throw A.l(A.eX("not a "+b.b+" file"))
k=l
if(typeof k!=="number")return k.C()
s=B.i.cb(a,10,k+1)
k=s
if(typeof k!=="number")return k.fd()
if(k<0)o=-1
else{k=s
if(typeof k!=="number")return k.C()
o=B.i.cb(a,10,k+1)}r=o
k=r
if(typeof k!=="number")return k.fd()
if(k<0)throw A.l(A.eX("the file is incomplete"))
try{k=l
if(typeof k!=="number")return k.C()
q=t.f.a(B.z.bh(B.R.c8(A.fu(a,k+1,s)),null)).G(0,t.N,t.X)
if(!J.a2(J.as(q,"formatVersion"),1))throw A.l(B.f2)
k=s
if(typeof k!=="number")return k.C()
p=B.B.O(B.R.c8(A.fu(a,k+1,r)))
k=s
if(typeof k!=="number")return k.C()
k=A.fu(a,0,k+1)
n=r
if(typeof n!=="number")return n.C()
n=A.fu(a,n+1,null)
return new A.u4(q,k,p,n)}catch(m){k=A.eX("the header cannot be read")
throw A.l(k)}},
mF(a,b){var s=0,r=A.J(t.c),q,p,o,n,m
var $async$mF=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.t($.Hz().b3(a,new A.bD(b,B.U)),$async$mF)
case 3:o=d
s=4
return A.t(a.bu(),$async$mF)
case 4:n=d.a
m=$.b6().cn()
m=$.b6().cL(m)
m=$.b6().cK(m,32)
p=A.D(b,t.S)
B.a.a1(p,n)
q=m.aY(B.E.O("santhiq/sync/grant/v1"),p,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mF,r)},
dW:function dW(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
u4:function u4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mt(a,b){var s=0,r=A.J(t.c),q,p,o
var $async$mt=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:p=$.H5()
o=$.b6().cn()
o=$.b6().cL(o)
s=3
return A.t($.b6().cK(o,32).aY(B.E.O("santhiq/sync/v1"),B.A,a),$async$mt)
case 3:o=d
q=p.aY(B.E.O(b),B.A,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mt,r)},
mI(a){var s=0,r=A.J(t.gZ),q,p
var $async$mI=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=$.b6().cG()
s=4
return A.t(A.mt(a,"santhiq/sync/sign/v1"),$async$mI)
case 4:s=3
return A.t(c.cH(),$async$mI)
case 3:q=p.aP(c)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mI,r)},
No(a){var s,r=$.jJ(),q=A.c([],t.t)
for(s=0;s<a;++s)q.push(r.cP(256))
return q},
Kl(a){var s,r,q=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r)q.push(B.b.aa(B.d.bI(a[r],16),2,"0"))
return B.a.cd(q)},
fQ(){var s=0,r=A.J(t.rU),q,p,o,n,m,l,k
var $async$fQ=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=3
return A.t($.b6().dj().aT(),$async$fQ)
case 3:p=b
s=4
return A.t($.b6().cG().aT(),$async$fQ)
case 4:o=b
n=A
m=p
l=o
s=5
return A.t(p.bu(),$async$fQ)
case 5:k=b.a
s=6
return A.t(o.bu(),$async$fQ)
case 6:q=new n.i6(m,l,k,b.a)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$fQ,r)},
fP(a){var s=0,r=A.J(t.rU),q,p,o,n,m,l,k,j,i
var $async$fP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=$.b6().dj()
m=a.h(0,"x25519")
m.toString
s=3
return A.t(n.aP(B.B.O(A.d(m))),$async$fP)
case 3:p=c
m=$.b6().cG()
n=a.h(0,"ed25519")
n.toString
s=4
return A.t(m.aP(B.B.O(A.d(n))),$async$fP)
case 4:o=c
l=A
k=p
j=o
s=5
return A.t(p.bu(),$async$fP)
case 5:i=c.a
s=6
return A.t(o.bu(),$async$fP)
case 6:q=new l.i6(k,j,i,c.a)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$fP,r)},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
IR(a){var s,r,q,p,o=null,n=$.GA().aj(a)
if(n==null)return o
s=n.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.Z(r,o,o)
if(2>=s.length)return A.a(s,2)
q=s[2]
q.toString
q=A.Z(q,o,o)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
s=A.Z(s,o,o)
p=new A.iU(a,r,q,s)
return s<q?o:p},
LO(a,b,c){var s,r,q,p,o,n=A.w(t.S,t.aA)
for(s=J.S(a);s.n();){r=A.IR(s.gt())
if(r==null||r.b!==b)continue
q=r.c
p=n.h(0,q)
if(p==null||r.d>p.d)n.j(0,q,r)}o=A.c([],t.EA)
for(r=n.h(0,c);r!=null;r=n.h(0,r.d+1))B.a.m(o,r)
return o},
iq:function iq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lz:function lz(a,b){this.a=a
this.b=b},
u5:function u5(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.f=null
_.r=0},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Fh(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="currency",c="is not a supported currency",b=A.av(A.b(a4,a3+1,0)),a=A.w(t.T,t.B)
for(s=A.AO(a0,a1),r=s.length,q=a0.d,p=t.N,o=t.G,n=a2+" allows ",m=0;m<s.length;s.length===r||(0,A.m)(s),++m){l=s[m]
k=l.b
j=k==null
i=j?e:k.x
if(i==null)i=l.a.x
if(A.b(i.a,i.b,i.c).l(0,A.b(a4,a3,1))>=0){i=j?e:k.x
if(i==null)i=l.a.x
i=A.b(i.a,i.b,i.c).l(0,A.b(a4,a3,b))>0||l.a.f.b!==a2}else i=!0
if(i)continue
i=l.a
h=i.Q
if(h==null)k=j?e:k.Q
else k=h
h=A.a6(q,p,o)
if(k==null)g=e
else{h=h.h(0,k)
h=h==null?e:h.d
g=h==null?k:h}k=a.h(0,g)
if(k==null){k=$.M()
h=new A.q(k,a2)
f=B.e.h(0,a2)
if(f==null)A.h(A.x(a2,d,c))
if((k.b<=0?0:Math.max(k.gA().b,0))>f)A.h(A.y(n+A.j(f)+" decimal places",k.k(0),e))
k=h}j=l.c||!j
i=i.f
if(j){j=i.b
h=$.M()
f=B.e.h(0,j)
if(f==null)A.h(A.x(j,d,c))
if((h.b<=0?0:Math.max(h.gA().b,0))>f)A.h(A.y(j+" allows "+A.j(f)+" decimal places",h.k(0),e))
i=i.a
i=h.C(0,new A.P(i.a.R(0),i.b))
h=new A.q(i,j)
f=B.e.h(0,j)
if(f==null)A.h(A.x(j,d,c))
if((i.b<=0?0:Math.max(i.gA().b,0))>f)A.h(A.y(j+" allows "+A.j(f)+" decimal places",i.k(0),e))
j=h}else j=i
i=j.b
h=k.b
if(i!==h)A.h(A.a7(h,i))
k=k.a.C(0,j.a)
f=B.e.h(0,h)
if(f==null)A.h(A.x(h,d,c))
if((k.b<=0?0:Math.max(k.gA().b,0))>f)A.h(A.y(h+" allows "+A.j(f)+" decimal places",k.k(0),e))
a.j(0,g,new A.q(k,h))}return a},
FK(a,b,c){var s=a*12+b-1-c
return new A.r(B.d.u(s,12),B.d.T(s,12)+1)},
FL(a,b,c,d){var s,r,q,p,o=A.av(A.b(d,c+1,0)),n=A.c([],t.Q)
for(s=a.gK().gS(),s=s.gB(s);s.n();){r=s.gt()
q=!1
if(r.r===b){p=r.d
if(p!==B.o&&p!==B.x){p=r.w
if(A.b(p.a,p.b,p.c).l(0,A.b(d,c,o))<=0){q=r.CW
q=q==null?null:A.b(q.a,q.b,q.c).l(0,A.b(d,c,1))<0
q=q!==!0}}}if(q)n.push(r)}if(n.length===0)return!1
return B.a.b5(n,new A.zx(a,new A.B(d,c,1),new A.B(d,c,o)))},
MS(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=A.c([],t.kY)
for(s=3;s>=1;--s)a4.push(new A.Az(a8,s,a5,a6,a7).$0())
r=new A.o(a4,t.jb.a(new A.AA()),t.yF).gq(0)
if(r===0)return B.kB
q=A.a4(t.T)
for(p=a4.length,o=0;o<a4.length;a4.length===p||(0,A.m)(a4),++o)for(n=a4[o].a[3].gag(),n=n.gB(n);n.n();)q.m(0,A.n(n.gt()))
m=A.w(t.N,t.la)
for(q=new A.fi(A.e5(q,q.r,q.$ti.c),t.kx),p=t.nn,n=t.dN,l=t.B,k=t.xj,j=a7+" allows ";q.n();){i=q.b
if(i==null)i=A.h(A.ao())
h=$.M()
g=new A.q(h,a7)
f=B.e.h(0,a7)
if(f==null)A.h(A.x(a7,a2,a3))
if((h.b<=0?0:Math.max(h.gA().b,0))>f)A.h(A.y(j+A.j(f)+" decimal places",h.k(0),null))
h=A.c([],k)
for(e=a4.length,o=0;o<a4.length;a4.length===e||(0,A.m)(a4),++o){d=a4[o].a
c=d[0]
b=d[1]
a=d[2]
d=d[3].h(0,i)
h.push(new A.ji([a,b,d==null?g:d,c]))}e=new A.o(h,p.a(new A.AB()),n).a5(0,g,new A.AC(),l).a
if(e.l(0,$.M())<=0)continue
d=A.aL(r)
e=e.gbR()
d=new A.P(d,0).gbR()
d=A.bY(e.a.a_(0,d.b),e.b.a_(0,d.a))
e=d.b
a0=$.hO()
a1=e.l(0,a0)
if(a1===0){if(e.c===0)A.h(B.Y)
e=d.a.bA(e)}else{d=d.a
if(d.l(0,$.hN())<0){if(e.c===0)A.h(B.Y)
e=d.bA(e)}else{if(e.c===0)A.h(B.Y)
e=d.bA(e).C(0,a0)}}if(B.e.h(0,a7)==null)A.h(A.x(a7,a2,a3))
m.j(0,i,new A.hW(new A.q(new A.P(e,0),a7),h,r))}return m},
Lp(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="currency",a7="is not a supported currency",a8=b1.dU.l4(b2,b6,b4),a9=A.Fh(b1,b2,b3,b4,b6),b0=b5.a===b6&&b5.b===b4
if(b0){s=A.FK(b6,b4,1)
r=s.a
q=s.b
p=A.av(A.b(r,q+1,0))
o=A.w(t.T,t.B)
for(n=A.AO(b1,b2),m=n.length,l=b1.d,k=t.N,j=t.G,i=b5.c,h=b3+" allows ",g=0;g<n.length;n.length===m||(0,A.m)(n),++g){f=n[g]
e=f.b
d=e==null
c=d?a5:e.x
if(c==null)c=f.a.x
b=c.a
a=c.b
a0=c.c
if(A.b(b,a,a0).l(0,A.b(r,q,1))<0||A.b(b,a,a0).l(0,A.b(r,q,p))>0||a0<=i||f.a.f.b!==b3)continue
b=f.a
a=b.Q
if(a==null)e=d?a5:e.Q
else e=a
a=A.a6(l,k,j)
if(e==null)a1=a5
else{a=a.h(0,e)
a=a==null?a5:a.d
a1=a==null?e:a}e=o.h(0,a1)
if(e==null){e=$.M()
a=new A.q(e,b3)
a2=B.e.h(0,b3)
if(a2==null)A.h(A.x(b3,a6,a7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a2)A.h(A.y(h+A.j(a2)+" decimal places",e.k(0),a5))
e=a}d=f.c||!d
b=b.f
if(d){d=b.b
a=$.M()
a2=B.e.h(0,d)
if(a2==null)A.h(A.x(d,a6,a7))
if((a.b<=0?0:Math.max(a.gA().b,0))>a2)A.h(A.y(d+" allows "+A.j(a2)+" decimal places",a.k(0),a5))
b=b.a
b=a.C(0,new A.P(b.a.R(0),b.b))
a=new A.q(b,d)
a2=B.e.h(0,d)
if(a2==null)A.h(A.x(d,a6,a7))
if((b.b<=0?0:Math.max(b.gA().b,0))>a2)A.h(A.y(d+" allows "+A.j(a2)+" decimal places",b.k(0),a5))
d=a}else d=b
b=d.b
a=e.b
if(b!==a)A.h(A.a7(a,b))
e=e.a.C(0,d.a)
a2=B.e.h(0,a)
if(a2==null)A.h(A.x(a,a6,a7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a2)A.h(A.y(a+" allows "+A.j(a2)+" decimal places",e.k(0),a5))
o.j(0,a1,new A.q(e,a))}}else o=B.kC
p=A.c([],t.cs)
for(n=new A.ac(a8,A.p(a8).i("ac<1,2>")).gB(0),m=b3+" allows ";n.n();){l=n.d
a3=l.a
a4=l.b
if(a4.b===b3){l=a9.h(0,a3)
if(l==null){l=$.M()
k=new A.q(l,b3)
a2=B.e.h(0,b3)
if(a2==null)A.h(A.x(b3,a6,a7))
if((l.b<=0?0:Math.max(l.gA().b,0))>a2)A.h(A.y(m+A.j(a2)+" decimal places",l.k(0),a5))
l=k}if(b0){k=a9.h(0,a3)
if(k==null){k=$.M()
j=new A.q(k,b3)
a2=B.e.h(0,b3)
if(a2==null)A.h(A.x(b3,a6,a7))
if((k.b<=0?0:Math.max(k.gA().b,0))>a2)A.h(A.y(m+A.j(a2)+" decimal places",k.k(0),a5))
k=j}j=o.h(0,a3)
if(j==null){j=$.M()
i=new A.q(j,b3)
a2=B.e.h(0,b3)
if(a2==null)A.h(A.x(b3,a6,a7))
if((j.b<=0?0:Math.max(j.gA().b,0))>a2)A.h(A.y(m+A.j(a2)+" decimal places",j.k(0),a5))
j=i}i=j.b
h=k.b
if(i!==h)A.h(A.a7(h,i))
k=k.a.C(0,j.a)
j=new A.q(k,h)
a2=B.e.h(0,h)
if(a2==null)A.h(A.x(h,a6,a7))
if((k.b<=0?0:Math.max(k.gA().b,0))>a2)A.h(A.y(h+" allows "+A.j(a2)+" decimal places",k.k(0),a5))
k=j}else k=a5
p.push(new A.bB(a3,a4,l,k))}}B.a.E(p,new A.w2(b1))
return new A.n4(p,b3)},
EX(a,b){var s=A.a6(a.d,t.N,t.G).h(0,b)
s=s==null?null:s.c
return s==null?b:s},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
zx:function zx(a,b,c){this.a=a
this.b=b
this.c=c},
Az:function Az(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AA:function AA(){},
AB:function AB(){},
AC:function AC(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4:function n4(a,b){this.a=a
this.b=b},
n5:function n5(a){this.a=a},
n6:function n6(){},
n9:function n9(){},
n8:function n8(){},
n7:function n7(){},
w2:function w2(a){this.a=a},
Md(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=A.c([],t.Fq)
for(s=a.dU.f,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>")),r=b.a,q=b.b,p=r*12+q,o=b.c;s.n();){n=s.d
m=n.e
l=m==null?e:a.gK().h(0,m)
k=l==null?e:A.Cf(a,l,b,B.kA)
m=n.d
j=m.a
i=m.b
m=m.c
h=A.b(r,q,o).l(0,A.b(j,i,m))>0?0:j*12+i-p
g=k==null
f=g?e:k.b
g=g?e:k.c
B.a.m(d,new A.dz(n,f,g,h===0&&A.b(r,q,o).l(0,A.b(j,i,m))<=0?1:h))}B.a.E(d,new A.yO())
return d},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yO:function yO(){},
FV(a){var s,r,q=null,p=typeof a=="string"?$.Hq().aj(a):q
if(p==null)s=q
else{s=p.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.Z(r,q,q)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
s=new A.r(r,A.Z(s,q,q))}return s},
IP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="capSpend",f="currency",e="minSpend",d=a.h(0,"accountId")
d.toString
A.d(d)
s=a.h(0,"unit")
s.toString
A.ai(B.j1,A.d(s),t.cy)
s=A.c([],t.j2)
r=a.h(0,"rates")
r.toString
r=J.S(t.j.a(r))
q=t.f
p=t.N
o=t.X
while(r.n()){n=q.a(r.gt()).G(0,p,o)
m=A.n(n.h(0,"categoryId"))
l=n.h(0,"rate")
l.toString
l=A.ah(A.d(l))
if(n.h(0,g)==null)k=null
else{k=n.h(0,g)
k.toString
k=q.a(k).G(0,p,o)
j=k.h(0,"amount")
j.toString
j=A.ah(A.d(j))
k=k.h(0,f)
k.toString
A.d(k)
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.h(A.x(k,f,"is not a supported currency"))
if((j.b<=0?0:Math.max(j.gA().b,0))>h)A.h(A.y(k+" allows "+A.j(h)+" decimal places",j.k(0),null))
k=i}if(n.h(0,"capEarn")==null)n=null
else{n=n.h(0,"capEarn")
n.toString
n=A.ah(A.d(n))}s.push(new A.fn(m,l,k,n))}if(a.h(0,e)!=null){r=a.h(0,e)
r.toString
A.aO(q.a(r).G(0,p,o))}return new A.lm(d,s)},
Lg(b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="categoryId",b0="bookId",b1=b5.e,b2=new A.vT(b3)
switch(b5.d){case"category.flag":s=A.aN(new A.o(B.dF,t.ns.a(new A.vU(b1)),t.rK),t.d)
r=b2.$1(b1.h(0,a9))
if(r==null||s==null||A.hG(r))return"a flag is for a spending category"
b4.a.j(0,r.a,s)
break
case"budget.set":q=b1.h(0,b0)
p=A.FV(b1.h(0,"from"))
r=b2.$1(b1.h(0,a9))
if(typeof q!="string"||b3.aH(q)==null||p==null)return"a budget needs a book and a month"
if(r==null||r.d!=null||A.hG(r)||r.b!==b3.bT(q))return"a budget is for a top-level spending category of the book's kind"
if(b1.h(0,"amount")==null)o=null
else{n=b1.h(0,"amount")
n.toString
o=A.aO(t.f.a(n).G(0,t.N,t.X))}if(o!=null&&o.a.l(0,$.M())<=0)return"a budget is more than zero"
B.a.m(b4.b,new A.k3(q,r.a,o,p.a,p.b))
break
case"period.note":q=b1.h(0,b0)
m=b1.h(0,"period")
l=b1.h(0,"text")
k=b1.h(0,a9)
if(typeof q!="string"||b3.aH(q)==null||A.FV(m)==null||typeof l!="string")return"a note needs a book, a month and its text"
if(k!=null&&b2.$1(k)==null)return"no category "+A.j(k)
j=B.b.H(l)
n=j.length
if(n>120||B.b.v(j,"\n"))return"a note is one line of at most 120 characters"
i=new A.bz(q,A.d(m),A.n(k))
h=b4.c
if(n===0)h.Y(0,i)
else h.j(0,i,new A.la())
break
case"officeDay.mark":g=A.EI(b1.h(0,"date"))
f=b1.h(0,"office")
if(g==null||!A.ea(f))return"an office day mark is a date and yes or no"
b4.d.j(0,g,f)
break
case"recurring.mark":q=b1.h(0,b0)
e=b1.h(0,"payeeKey")
d=A.aN(new A.o(B.jG,t.AH.a(new A.vV(b1)),t.o_),t.fK)
if(typeof q!="string"||typeof e!="string"||e.length===0||d==null)return"a recurring mark is a book, a payee and what it is"
b4.e.j(0,new A.r(q,e),d)
break
case"goal.set":c=b1.h(0,"id")
b=b1.h(0,"name")
a=A.EI(b1.h(0,"by"))
a0=b1.h(0,"accountId")
if(typeof c!="string"||typeof b!="string"||B.b.H(b).length===0||a==null||!t.f.b(b1.h(0,"target")))return"a goal needs a name, a target and a date"
n=b1.h(0,"target")
n.toString
a1=A.aO(t.f.a(n).G(0,t.N,t.X))
if(a1.a.l(0,$.M())<=0)return"a target is more than zero"
if(a0!=null){a2=b3.gK().h(0,a0)
if(a2==null||a2.e!==a1.b||a2.d===B.o)return"a goal's account holds savings in the target's currency"}b4.f.j(0,c,new A.iS(c,B.b.H(b),a1,a,A.n(a0)))
break
case"goal.remove":if(b4.f.Y(0,b1.h(0,"id"))==null)return"no goal "+A.j(b1.h(0,"id"))
break
case"reward.rules":a3=A.IP(b1)
n=a3.a
a2=b3.gK().h(0,n)
if(a2==null||a2.d!==B.y)return"reward rules are for a card"
h=a3.c
a4=h.length
if(a4===0){b4.r.Y(0,n)
return null}for(a5=0;a5<h.length;h.length===a4||(0,A.m)(h),++a5){a6=h[a5]
if(a6.b.l(0,$.M())>=0){a7=a6.a
a7=a7!=null&&b2.$1(a7)==null}else a7=!0
if(a7)return"a reward rate is zero or more, for a known category"}a4=A.L(h)
if(new A.o(h,a4.i("k(1)").a(new A.vW()),a4.i("o<1>")).gq(0)<=1){a4=A.a4(t.T)
for(a7=h.length,a5=0;a8=h.length,a5<a8;h.length===a7||(0,A.m)(h),++a5)a4.m(0,h[a5].a)
h=a4.a!==a8}else h=!0
if(h)return"one rate per category"
b4.r.j(0,n,a3)
break
default:return"not a trend operation"}return null},
EI(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Hc().aj(a):m
if(l==null)return m
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.Z(r,m,m)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.Z(r,m,m)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.Z(s,m,m)
n=A.b(q,p,o)
return A.b_(n)===q&&A.b4(n)===p&&A.av(n)===o?new A.B(q,p,o):m},
k3:function k3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
la:function la(){},
cm:function cm(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ex:function ex(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lm:function lm(a,b){this.a=a
this.c=b},
u9:function u9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vT:function vT(a){this.a=a},
vU:function vU(a){this.a=a},
vV:function vV(a){this.a=a},
vW:function vW(){},
HQ(a,b,c,d){var s=new A.di(a,b)
s.im(a,b,c,d)
return s},
Cg(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aB(a2.F(),B.q),b=A.w(t.N,t.S)
for(s=A.aE(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q].b
o=b.h(0,p)
b.j(0,p,(o==null?0:o)+1)}n=new A.w5(a,a2,a3,a1,c,b)
s=a.gK().gS()
r=A.p(s)
p=r.i("o<i.E>")
m=A.D(new A.o(s,r.i("k(i.E)").a(new A.w3(a0)),p),p.i("i.E"))
B.a.E(m,new A.w4())
A.fC(a0,a)
s=A.c([],t.zM)
for(r=A.fD(a,a0,B.c),p=r.length,o=t.kd,l=t.eF,q=0;q<r.length;r.length===p||(0,A.m)(r),++q){k=r[q]
j=A.c([],l)
for(i=0;i<3;++i){h=B.j2[i]
g=A.c([],o)
for(f=m.length,e=0;e<m.length;m.length===f||(0,A.m)(m),++e){d=m[e]
if(d.e===k&&A.L6(d)===h)g.push(n.$1(d))}f=g.length
if(f!==0)j.push(A.HQ(h,g,k,a1))}s.push(new A.dN(k,j))}return new A.mU(s)},
LB(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aB(a1.F(),B.q),d=a.aX(b),c=A.c([],t.k6)
for(s=A.aE(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(a.aX(p.b)===d)c.push(p)}B.a.E(c,new A.xi())
s=A.c([],t.CL)
for(r=c.length,o=e.a,q=0;q<c.length;c.length===r||(0,A.m)(c),++q){p=c[q]
n=p.c
m=n.b-1
if(!(m>=0&&m<12))return A.a(B.l,m)
m=B.l[m]
l=n.a
l=l===o?"":" "+l
k=p.d
j=k.b-1
if(!(j>=0&&j<12))return A.a(B.l,j)
j=B.l[j]
i=k.a
i=i===o?"":" "+i
h=A.aM(p.e,a0)
g=A.aM(p.f,a0)
f=p.r==null?"Recorded, not reconciled":"Reconciled"
s.push(new A.lw(""+n.c+" "+m+l+" to "+(""+k.c+" "+j+i),h,g,f))}return s},
aX:function aX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
mR:function mR(){},
mS:function mS(){},
dN:function dN(a,b){this.a=a
this.b=b},
mU:function mU(a){this.b=a},
w5:function w5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w3:function w3(a){this.a=a},
w4:function w4(){},
xi:function xi(){},
BE(a){var s,r,q={}
for(s=new A.ac(a,A.p(a).i("ac<1,2>")).gB(0);s.n();){r=s.d
q[r.a]=r.b}return q},
kD:function kD(){},
nR:function nR(a){this.a=a},
nS:function nS(a,b){this.a=a
this.b=b},
nT:function nT(a){this.a=a},
nP:function nP(a,b){this.a=a
this.b=b},
nQ:function nQ(a){this.a=a},
eb(a,b,c){var s=A.z(A.z(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
b.a2(0,new A.vy(s))
if(c!=null)s.textContent=c
return s},
F0(a){var s,r,q
if(a<=0)return B.lT
s=a/4
r=Math.pow(10,B.O.m2(Math.log(s)/2.302585092994046))
q=new A.aj(A.c([1,2,5,10],t.t),t.oe.a(new A.vz(r)),t.FC).m0(0,new A.vA(s))
return new A.r(B.O.h4(a/q)*q,q)},
LI(a){var s=Math.abs(a),r=new A.xF()
if(s>=1e6)return A.j(r.$1(a/1e6))+"M"
if(s>=1000)return A.j(r.$1(a/1000))+"k"
return r.$1(a)},
EF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=-b
r=A.F0(Math.max(c,s))
i.a=r.a
q=r.b
p=b<0?-A.F0(s).a:0
o=new A.vc(i,p)
for(s=q/2,n=t.N,m=t.K,l=p;l<=i.a+s;l+=q){k=o.$1(l)
j=o.$1(l)
a.append(A.eb("line",A.T(["x1",64,"x2",948,"y1",k,"y2",j,"class",l===0?"zero":"grid"],n,m),null))
k=o.$1(l)
if(typeof k!=="number")return k.C()
a.append(A.eb("text",A.T(["x",56,"y",k+4,"text-anchor","end","class","tick"],n,m),d+A.LI(l)))}return o},
EV(a,b,c){var s,r,q,p,o,n
for(s=t.N,r=A.bO(b,0,s),q=J.S(r.a),p=r.b,r=new A.at(q,p,A.p(r).i("at<1>")),o=t.K;r.n();){n=r.c
n=n>=0?new A.r(p+n,q.gt()):A.h(A.ao())
a.append(A.eb("text",A.T(["x",c.$1(n.a),"y",252,"text-anchor","middle","class","tick"],s,o),n.b))}},
EM(a){return A.eb("svg",A.T(["viewBox","0 0 960 260","class","chart","role","img","aria-label",a],t.N,t.K),null)},
Me(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.EM(b1),b0=A.c([],t.zp)
for(s=0;s<2;++s)B.a.a1(b0,b3[s].b)
r=t.pR
q=A.EF(a9,Math.min(0,B.a.a5(b0,0,B.cv,r)),B.a.a5(b0,0,B.cw,r),b5)
p=884/b2.length
o=Math.min(28,(p*0.7-2)/2)
n=new A.yR(p)
for(b0=t.jg,r=t.N,m=t.K,l=o/2,k=(o*2+2)/2,j=o+2,i=0;i<b2.length;++i)for(h=A.bO(b3,0,b0),g=J.S(h.a),f=h.b,h=new A.at(g,f,A.p(h).i("at<1>"));h.n();){e=h.c
e=e>=0?new A.r(f+e,g.gt()):A.h(A.ao())
d=e.a
c=e.b
e=n.$1(i)
if(typeof e!=="number")return e.a8()
b=e-k+d*j
a=J.as(c.b,i)
if(a===0)continue
e=q.$1(0)
a0=q.$1(a)
a1=Math.min(4,Math.min(l,Math.abs(e-a0)))
a2=A.j(b)
a3=A.j(e)
a4=A.j(a0)
a5=b+o
a6="M"+a2
a7=A.j(b+a1)
a8=A.j(a5)
a5-=a1
if(a0<e){e=A.j(a0+a1)
a3=a6+" "+a3+" V"+e+" Q"+a2+" "+a4+" "+a7+" "+a4+" H"+A.j(a5)+" Q"+a8+" "+a4+" "+a8+" "+e+" V"+a3+" Z"
e=a3}else{e=A.j(a0-a1)
a3=a6+" "+a3+" V"+e+" Q"+a2+" "+a4+" "+a7+" "+a4+" H"+A.j(a5)+" Q"+a8+" "+a4+" "+a8+" "+e+" V"+a3+" Z"
e=a3}e=A.eb("path",A.T(["d",e,"class","series-"+(d+1)],r,m),null)
if(!(i<b2.length))return A.a(b2,i)
e.append(A.eb("title",A.w(r,m),b4.$3(b2[i],c.a,a)))
a9.append(e)}A.EV(a9,b2,n)
return a9},
Fz(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.EM(a),e=A.c([],t.zp)
for(s=c.length,r=0;r<c.length;c.length===s||(0,A.m)(c),++r){q=c[r]
if(q!=null)e.push(q)}s=t.pR
p=A.EF(f,Math.min(0,B.a.a5(e,0,B.cv,s)),B.a.a5(e,0,B.cw,s),a1)
o=new A.z0(884/b.length)
for(e=t.u6,s=A.bO(c,0,e),n=J.S(s.a),m=s.b,s=new A.at(n,m,A.p(s).i("at<1>")),l="",k=!1;s.n();k=!i){j=s.c
j=j>=0?new A.r(m+j,n.gt()):A.h(A.ao())
q=j.b
i=q==null
if(i)continue
h=k?"L":"M"
l+=h+A.j(o.$1(j.a))+" "+A.j(p.$1(q))+" "}if(l.length!==0)f.append(A.eb("path",A.T(["d",l,"class","line series-1"],t.N,t.K),null))
for(e=A.bO(c,0,e),s=J.S(e.a),n=e.b,e=new A.at(s,n,A.p(e).i("at<1>")),m=t.N,j=t.K,i=!d;e.n();){h=e.c
h=h>=0?new A.r(n+h,s.gt()):A.h(A.ao())
g=h.a
q=h.b
if(q==null)continue
if(!i||g===0)f.append(A.eb("circle",A.T(["cx",o.$1(g),"cy",p.$1(q),"r",4,"class","dot series-1"],m,j),null))
h=A.eb("circle",A.T(["cx",o.$1(g),"cy",p.$1(q),"r",12,"class","hit"],m,j),null)
if(!(g>=0&&g<b.length))return A.a(b,g)
h.append(A.eb("title",A.w(m,j),a0.$2(b[g],q)))
f.append(h)}A.EV(f,b,o)
return f},
vy:function vy(a){this.a=a},
vz:function vz(a){this.a=a},
vA:function vA(a){this.a=a},
xF:function xF(){},
vc:function vc(a,b){this.a=a
this.b=b},
yR:function yR(a){this.a=a},
z0:function z0(a){this.a=a},
EP(a){var s,r=v.G,q=A.z(A.z(r.document).createElementNS("http://www.w3.org/2000/svg","svg"))
q.setAttribute("viewBox","0 0 24 24")
q.setAttribute("class","icon")
q.setAttribute("aria-hidden","true")
r=A.z(A.z(r.document).createElementNS("http://www.w3.org/2000/svg","path"))
s=B.kF.h(0,a)
if(s==null)s=""
r.setAttribute("d",s)
q.append(r)
return q},
hB(a,b,c,d){return A.Lo(a,b,c,t.yz.a(d))},
Lo(a,b,c,d){var s=0,r=A.J(t.l3),q,p,o,n,m,l,k,j,i
var $async$hB=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:k=v.G
j=A.z(new k.Headers())
d.a2(0,new A.w1(j))
p=A.z(k.window)
o=b.gdJ()
n=c==null?null:c
s=3
return A.t(A.bI(A.z(p.fetch(o,{method:a,headers:j,body:n,referrerPolicy:"no-referrer",credentials:"omit",cache:"no-store",signal:A.z(k.AbortSignal.timeout(6e4))})),t.m),$async$hB)
case 3:m=f
i=A
s=4
return A.t(A.bI(A.z(m.arrayBuffer()),t.i),$async$hB)
case 4:l=i.iE(f,0,null)
q=new A.ha(A.R(m.status),l)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hB,r)},
Mf(){var s,r,q=v.G,p=A.d(A.z(A.z(q.window).location).hash)
if(!B.b.v(p,"access_token=")&&!B.b.v(p,"error="))return!1
s=A.z(new q.BroadcastChannel("santhiq-sign-in"))
s.postMessage(B.b.ac(p,1))
s.close()
A.z(A.z(q.window).history).replaceState(null,"",A.d(A.z(A.z(q.window).location).pathname))
r=A.aS(A.z(q.document).body)
r.toString
r.textContent="Signed in. This window can be closed."
A.z(q.window).close()
return!0},
KL(){var s,r=$.jJ(),q=A.c([],t.s)
for(s=0;s<16;++s)q.push(B.b.aa(B.d.bI(r.cP(256),16),2,"0"))
return B.a.cd(q)},
IF(a){var s,r=A.z(new v.G.BroadcastChannel("santhiq-sign-in"))
A.cM(!1,"isUtc",t.y)
s=t.N
s=new A.l8(a,r,new A.aa(0,0,!1),B.co,A.a4(s),B.mu,A.w(s,s),A.w(s,t.sF))
s.ip(a)
return s},
bc:function bc(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
w1:function w1(a){this.a=a},
l8:function l8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1
_.f=c
_.r=null
_.w="personal"
_.x="SGD"
_.y=""
_.z=25
_.as=_.Q=$
_.at=d
_.ax=e
_.ch=_.ay=null
_.CW=f
_.cx=g
_.cy=3
_.db=null
_.dx=h},
rI:function rI(a){this.a=a},
rJ:function rJ(a){this.a=a},
rK:function rK(a){this.a=a},
rL:function rL(a){this.a=a},
pi:function pi(a,b){this.a=a
this.b=b},
po:function po(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
rN:function rN(a,b){this.a=a
this.b=b},
rO:function rO(a){this.a=a},
rP:function rP(a){this.a=a},
rQ:function rQ(a,b){this.a=a
this.b=b},
rR:function rR(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
q2:function q2(a,b){this.a=a
this.b=b},
qh:function qh(a){this.a=a},
qk:function qk(a){this.a=a},
ql:function ql(a,b){this.a=a
this.b=b},
qi:function qi(a){this.a=a},
qj:function qj(a){this.a=a},
pj:function pj(a,b){this.a=a
this.b=b},
pk:function pk(a){this.a=a},
pl:function pl(a){this.a=a},
pm:function pm(a){this.a=a},
pn:function pn(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
qc:function qc(){},
qd:function qd(){},
qe:function qe(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
rv:function rv(a,b){this.a=a
this.b=b},
rw:function rw(a,b){this.a=a
this.b=b},
rx:function rx(){},
rr:function rr(a){this.a=a},
rs:function rs(){},
ru:function ru(){},
rt:function rt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
rp:function rp(){},
rq:function rq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ro:function ro(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
rf:function rf(a,b){this.a=a
this.b=b},
r4:function r4(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(){},
qT:function qT(){},
r3:function r3(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
qQ:function qQ(a){this.a=a},
qY:function qY(a,b){this.a=a
this.b=b},
qP:function qP(a){this.a=a},
qM:function qM(a){this.a=a},
qZ:function qZ(a,b){this.a=a
this.b=b},
qO:function qO(a){this.a=a},
qL:function qL(a){this.a=a},
r_:function r_(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
qN:function qN(a){this.a=a},
r1:function r1(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
q0:function q0(a,b){this.a=a
this.b=b},
q1:function q1(a,b){this.a=a
this.b=b},
pP:function pP(a){this.a=a},
pQ:function pQ(a,b){this.a=a
this.b=b},
pT:function pT(a,b){this.a=a
this.b=b},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
pW:function pW(a){this.a=a},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(a,b){this.a=a
this.b=b},
pZ:function pZ(a){this.a=a},
q_:function q_(a){this.a=a},
pR:function pR(a){this.a=a},
pS:function pS(a,b){this.a=a
this.b=b},
pL:function pL(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b){this.a=a
this.b=b},
qK:function qK(){},
qo:function qo(a){this.a=a},
qp:function qp(a){this.a=a},
pH:function pH(a,b){this.a=a
this.b=b},
pK:function pK(a){this.a=a},
pI:function pI(a){this.a=a},
pJ:function pJ(a){this.a=a},
q5:function q5(){},
q6:function q6(a){this.a=a},
q7:function q7(a,b){this.a=a
this.b=b},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b,c){this.a=a
this.b=b
this.c=c},
q4:function q4(a,b){this.a=a
this.b=b},
rn:function rn(a){this.a=a},
rh:function rh(){},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
rm:function rm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rg:function rg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qx:function qx(a){this.a=a},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(){},
qt:function qt(){},
qu:function qu(a,b){this.a=a
this.b=b},
qv:function qv(a,b,c){this.a=a
this.b=b
this.c=c},
qr:function qr(a,b){this.a=a
this.b=b},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a,b){this.a=a
this.b=b},
ph:function ph(a,b){this.a=a
this.b=b},
pg:function pg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pf:function pf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qB:function qB(){},
qC:function qC(){},
qD:function qD(a,b){this.a=a
this.b=b},
qA:function qA(a,b){this.a=a
this.b=b},
qE:function qE(a){this.a=a},
qF:function qF(a){this.a=a},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
rG:function rG(a){this.a=a},
rH:function rH(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
rC:function rC(){},
rD:function rD(a){this.a=a},
rE:function rE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rA:function rA(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rz:function rz(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a){this.a=a},
pG:function pG(a,b){this.a=a
this.b=b},
pE:function pE(){},
pw:function pw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pv:function pv(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a,b){this.a=a
this.b=b},
py:function py(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(a,b){this.a=a
this.b=b},
pA:function pA(a){this.a=a},
pB:function pB(){},
pC:function pC(a){this.a=a},
pD:function pD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pr:function pr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rd:function rd(a,b){this.a=a
this.b=b},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a){this.a=a},
r9:function r9(){},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r5:function r5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pq:function pq(a){this.a=a},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
Lq(c1,c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="currency",b2="is not a supported currency",b3=new A.w8(c3),b4=new A.w9(c1),b5=A.aB(c4.F(),B.q),b6=A.vY(c1,c2),b7=b5.a,b8=b5.b,b9=A.Lp(c1,c2,b6,b8,b5,b7),c0=A.a4(t.N)
for(s=b9.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q)c0.m(0,s[q].a)
p=A.MS(c1,c2,b6,b5)
o=b9.gmA();--b8
if(!(b8>=0&&b8<12))return A.a(B.V,b8)
b8=B.V[b8]
r=A.c([],t.gI)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.m)(s),++q){m=s[q]
l=m.a
k=b4.$1(l)
j=m.b
i=b3.$1(j)
h=m.c
g=b3.$1(h)
f=j.a
e=h.b
j=j.b
if(e!==j)A.h(A.a7(j,e))
h=h.a
e=f.C(0,new A.P(h.a.R(0),h.b))
d=B.e.h(0,j)
if(d==null)A.h(A.x(j,b1,b2))
if((e.b<=0?0:Math.max(e.gA().b,0))>d)A.h(A.y(j+" allows "+A.j(d)+" decimal places",e.k(0),b0))
j=b3.$1(new A.q(e,j))
e=m.d
c=e==null
b=c?"":b3.$1(e)
h=h.l(0,f)
f=!c&&e.a.l(0,f)>0
r.push(new A.dl(l,k,i,g,j,b,h>0,f))}B.a.E(r,new A.w6())
if(s.length===0)s=""
else{s=A.j(b3.$1(b9.gl2()))
n=A.j(b3.$1(b9.gi1()))
l=o==null?"":", heading for "+A.j(b3.$1(o))
k=b9.ghq()===0?"":"; "+b9.ghq()+" over"
k="Budgets "+s+", spent "+n+l+k
s=k}n=b5.c
l=A.KN(n)
k=A.c([],t.EQ)
for(j=p.gbs(),j=j.gB(j);j.n();){i=j.gt()
a=i.a
a0=i.b
if(!c0.v(0,a)){i=b4.$1(a)
h=a0.a
g=b3.$1(h)
f=h.a
h=h.b
d=B.e.h(0,h)
if(d==null)A.h(A.x(h,b1,b2))
h=new A.P(f.a,f.b-d).aD().aE(0)
f=a0.c
e=f===1?"":"s"
k.push(new A.dL(a,i,g,h,"From "+f+" complete month"+e+" of "+a0.b.length))}}B.a.E(k,new A.w7())
c0=A.c([],t.jw)
for(j=A.Md(c1,b5),i=j.length,q=0;q<j.length;j.length===i||(0,A.m)(j),++q){a1=j[q]
h=a1.a
g=h.c
f=b3.$1(g)
e=h.d
c=e.b-1
if(!(c>=0&&c<12))return A.a(B.l,c)
c=B.l[c]
b=e.a
b=b===b7?"":" "+b
a2=a1.b
a3=a2==null
if(a3)a4=h.e==null?"Not known: link an account to it on the phone":"Not known: its account has no balance yet"
else{a4=A.j(b3.$1(a2))
a5=a1.c
if(a5==null)a5=""
else{a6=a5.c
a7=a5.b-1
if(!(a7>=0&&a7<12))return A.a(B.l,a7)
a7=B.l[a7]
a5=a5.a
a5=a5===b7?"":" "+a5
a5=" ("+(""+a6+" "+a7+a5)+")"}a5=a4+a5
a4=a5}if(a3)a5=b0
else{a5=a2.b
a6=g.b
if(a5!==a6)A.h(A.a7(a6,a5))
a5=a2.a
a5=g.a.C(0,new A.P(a5.a.R(0),a5.b))
a7=new A.q(a5,a6)
d=B.e.h(0,a6)
if(d==null)A.h(A.x(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>d)A.h(A.y(a6+" allows "+A.j(d)+" decimal places",a5.k(0),b0))
a5=a7}if(a5==null)a5=""
else{if(a3)a5=b0
else{a5=a2.b
a6=g.b
if(a5!==a6)A.h(A.a7(a6,a5))
a5=a2.a
a5=g.a.C(0,new A.P(a5.a.R(0),a5.b))
a7=new A.q(a5,a6)
d=B.e.h(0,a6)
if(d==null)A.h(A.x(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>d)A.h(A.y(a6+" allows "+A.j(d)+" decimal places",a5.k(0),b0))
a5=a7}a5.toString
a5=b3.$1(a5)}if(a1.ghs()==null)a6=""
else{a6=a1.ghs()
a6.toString
a6=b3.$1(a6)}if(a3)a7=b0
else{a7=a2.b
a8=g.b
if(a7!==a8)A.h(A.a7(a8,a7))
a7=a2.a
a7=g.a.C(0,new A.P(a7.a.R(0),a7.b))
a9=new A.q(a7,a8)
d=B.e.h(0,a8)
if(d==null)A.h(A.x(a8,b1,b2))
if((a7.b<=0?0:Math.max(a7.gA().b,0))>d)A.h(A.y(a8+" allows "+A.j(d)+" decimal places",a7.k(0),b0))
a7=a9}if(a7!=null){if(a3)g=b0
else{a3=a2.b
a7=g.b
if(a3!==a7)A.h(A.a7(a7,a3))
a2=a2.a
a2=g.a.C(0,new A.P(a2.a.R(0),a2.b))
g=new A.q(a2,a7)
d=B.e.h(0,a7)
if(d==null)A.h(A.x(a7,b1,b2))
if((a2.b<=0?0:Math.max(a2.gA().b,0))>d)A.h(A.y(a7+" allows "+A.j(d)+" decimal places",a2.k(0),b0))}g=g.a.l(0,$.M())<=0}else g=!1
if(g)g="Reached"
else{g=a1.d
if(g===0)g="Date passed"
else{a2=g===1?"":"s"
a2=""+g+" month"+a2+" left"
g=a2}}c0.push(new A.kv(h,f,""+e.c+" "+c+b,a4,a5,a6,g))}return new A.na("Spent counts filed transactions only; ones still to file in Review are not in it. Heading for is spent so far plus what was spent after the "+n+l+" last month.",b8+" "+b7,b6,r,s,k,c0)},
KN(a){var s,r="th"
if(!(a>=11&&a<=13)){s=B.d.T(a,10)
A:{if(1===s){r="st"
break A}if(2===s){r="nd"
break A}if(3===s){r="rd"
break A}break A}}return r},
dl:function dl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
dL:function dL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kv:function kv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
na:function na(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w8:function w8(a){this.a=a},
w9:function w9(a){this.a=a},
w6:function w6(){},
w7:function w7(){},
l1:function l1(){},
fT:function fT(a,b,c){var _=this
_.a=a
_.b=b
_.d=null
_.e=c},
ny:function ny(a){this.a=a},
Ls(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=new A.wb(b5),a5=A.aB(b6.F(),B.q),a6=A.FQ(b2,b3,b7,a5),a7=a5.a,a8=a5.b,a9=A.CA(b2,b3,12,b7,b4,a8,a7),b0=A.FR(b2,b3,12,b7,a8,a5,a7),b1=new A.wc(a5,a4)
a7=a6.b
a8=a7.b
s=A.L(a8)
a8=A.D(new A.aj(a8,s.i("da(1)").a(b1),s.i("aj<1,da>")),t.q9)
s=a7.c
r=A.L(s)
B.a.a1(a8,new A.aj(s,r.i("da(1)").a(b1),r.i("aj<1,da>")))
r=a4.$1(a7.gdL())
s=a4.$1(a7.gdP())
a7=a4.$1(a7.gdL().a8(0,a7.gdP()))
q=A.a4(t.N)
for(p=a6.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.m)(p),++n)q.m(0,p[n].a)
p=A.c([],t.s)
for(o=a6.d,m=o.length,n=0;n<o.length;o.length===m||(0,A.m)(o),++n){l=o[n]
if(l.e===b7)p.push(A.c9(l))}o=A.c([],t.Fn)
m=A.bO(a9,0,t.wy)
m=A.D(m,A.p(m).i("i.E"))
k=A.L(m).i("aP<1>")
m=new A.aP(m,k)
m=new A.ad(m,m.gq(0),k.i("ad<a5.E>"))
k=k.i("a5.E")
while(m.n()){j=m.d
if(j==null)j=k.a(j)
i=j.a
h=j.b
j=h.b-1
if(!(j>=0&&j<12))return A.a(B.l,j)
j=B.l[j]
g=h.c.a
f=a4.$1(g)
e=h.d.a
d=a4.$1(e)
c=e.b
b=g.b
if(c!==b)A.h(A.a7(b,c))
e=e.a
e=g.a.C(0,new A.P(e.a.R(0),e.b))
a=B.e.h(0,b)
if(a==null)A.h(A.x(b,a2,a3))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.h(A.y(b+" allows "+A.j(a)+" decimal places",e.k(0),null))
g=a4.$1(new A.q(e,b))
if(b5)e=""
else{e=A.G0(h)
if(e==null)e=""}if(!(i>=0&&i<b0.length))return A.a(b0,i)
c=b0[i].b
if(c.b.length===0&&c.c.length===0)c=""
else{b=c.gdL()
c=c.gdP()
a0=c.b
a1=b.b
if(a0!==a1)A.h(A.a7(a1,a0))
c=c.a
c=b.a.C(0,new A.P(c.a.R(0),c.b))
a=B.e.h(0,a1)
if(a==null)A.h(A.x(a1,a2,a3))
if((c.b<=0?0:Math.max(c.gA().b,0))>a)A.h(A.y(a1+" allows "+A.j(a)+" decimal places",c.k(0),null))
c=a4.$1(new A.q(c,a1))}o.push(new A.kW(j+" "+h.a,f,d,g,e,c))}return new A.ii(b7,a8,r,s,a7,q,p,o)},
Lr(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i=A.aB(a0.F(),B.q),h=i.a,g=i.b,f=A.CA(a,b,12,a1,c,g,h),e=A.FR(a,b,12,a1,g,i,h),d=new A.wa()
h=A.c([],t.s)
for(g=f.length,s=0;s<f.length;f.length===g||(0,A.m)(f),++s){r=f[s]
q=r.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
h.push(B.l[q]+" "+B.d.T(r.a,100))}g=t.zp
q=A.c([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.m)(f),++s)q.push(d.$1(f[s].c.a))
g=A.c([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.m)(f),++s)g.push(d.$1(f[s].d.a))
p=A.c([],t.wF)
for(o=e.length,s=0;s<e.length;e.length===o||(0,A.m)(e),++s){n=e[s].b
if(n.b.length===0&&n.c.length===0)n=null
else{m=n.gdL()
n=n.gdP()
l=n.b
k=m.b
if(l!==k)A.h(A.a7(k,l))
n=n.a
n=m.a.C(0,new A.P(n.a.R(0),n.b))
j=B.e.h(0,k)
if(j==null)A.h(A.x(k,"currency","is not a supported currency"))
if((n.b<=0?0:Math.max(n.gA().b,0))>j)A.h(A.y(k+" allows "+A.j(j)+" decimal places",n.k(0),null))
n=d.$1(new A.q(n,k))}p.push(n)}return new A.nU(a1,h,q,g,p)},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kW:function kW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ii:function ii(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wb:function wb(a){this.a=a},
wc:function wc(a,b){this.a=a
this.b=b},
nU:function nU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wa:function wa(){},
vk(a){var s=a.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return""+a.c+" "+B.l[s]+" "+a.a},
Lt(a,b,c,d){var s,r,q,p,o,n=new A.wh(c),m=a.ab,l=m.a6(B.ar,b),k=l==null,j=k?null:J.a2(l.c.h(0,"gstRegistered"),!0),i=j===!0,h=new A.wg(a)
k=k?null:A.n(l.c.h(0,"name"))
j=A.c([],t.Z)
for(m=m.b2(B.a4),s=m.length,r=0;r<m.length;m.length===s||(0,A.m)(m),++r){q=m[r]
if(A.n(q.c.h(0,"bookId"))===b)j.push(q)}B.a.E(j,new A.wd())
m=A.c([],t.eO)
for(s=A.Ml(a,b),p=s.length,r=0;r<s.length;s.length===p||(0,A.m)(s),++r)m.push(new A.we(a,s[r],h,c,n,i).$0())
s=A.c([],t.p9)
for(p=A.LK(a,b),o=p.length,r=0;r<p.length;p.length===o||(0,A.m)(p),++r)s.push(new A.wf(a,p[r],n,d).$0())
return new A.nV(k,i,j,m,s)},
kn:function kn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fS:function fS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fX:function fX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nV:function nV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wh:function wh(a){this.a=a},
wg:function wg(a){this.a=a},
wd:function wd(){},
we:function we(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wf:function wf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Lu(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aB(a3.F(),B.q),d=new A.wq(e,a2,a1,new A.wo(a1)),c=new A.wn(a1),b=new A.wm(e),a=a1.bW,a0=a.gt()
a=A.a6(a.d,t.N,t.ud).gS()
s=A.D(a,A.p(a).i("i.E"))
B.a.E(s,new A.wj())
a=A.c([],t.AM)
if(a0.length!==0){r=A.c([],t.tZ)
for(q=a0.length,p=t.s,o=0;o<a0.length;a0.length===q||(0,A.m)(a0),++o){n=a0[o]
m=A.Kb(n)
l=c.$1(n.c)
k=n.f
if(k==null)k=""
j=n.r
j=j==null?"":"\u2022\u2022"+j
i=b.$1(n.w)
h=b.$1(n.x)
r.push(A.c([m,l,k,j,i,h,n.y==null?"":"Attached"],p))}a.push(new A.dH("Documents",B.jz,r,null,B.dE))}if(s.length!==0){r=A.c([],t.tZ)
for(q=s.length,p=t.s,o=0;o<s.length;s.length===q||(0,A.m)(s),++o){g=s[o]
m=g.e
l=m==null||m.length===0
k=g.b
m=l?g.c.c+", "+k:m+", "+k
l=c.$1(g.d)
k=g.r
k=k==null?"":"\u2022\u2022"+k
j=g.w
j=j==null?"":A.aM(j,a2)
i=g.Q
if(i==null)i=""
else{i=A.aM(i,a2)
h=g.as
i+=h==null?"":" "+h.c}r.push(A.c([m,l,k,j,i,b.$1(g.y),b.$1(g.z)],p))}a.push(new A.dH("Insurance policies",B.jJ,r,null,B.dE))}for(r=t.Ab.a(new A.wk()),q=B.a.gB(B.ab),r=new A.O(q,r,t.m5),p=a1.ab;r.n();){m=q.gt()
f=p.b2(m)
l={}
l.a=null
l.a=f
k=f.length
if(k!==0)a.push(new A.wl(l,m,d).$0())}return A.L5(a)},
L5(a){var s,r,q=A.c([],t.AM)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.m)(a),++r)q.push(new A.vD(a[r]).$0())
return q},
Kb(a){var s=a.e
if(s!=null&&B.b.v(s.toLowerCase(),a.b.c.toLowerCase()))return s
return a.gcj()},
dH:function dH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wo:function wo(a){this.a=a},
wp:function wp(a){this.a=a},
wq:function wq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wn:function wn(a){this.a=a},
wm:function wm(a){this.a=a},
wj:function wj(){},
wk:function wk(){},
wl:function wl(a,b,c){this.a=a
this.b=b
this.c=c},
wi:function wi(a){this.a=a},
vD:function vD(a){this.a=a},
vC:function vC(a){this.a=a},
Lv(a,b,c,d){var s,r=new A.wv(c),q=A.fD(a,b,B.c),p=a.gK().gS(),o=A.p(p),n=o.i("o<i.E>"),m=A.D(new A.o(p,o.i("k(i.E)").a(new A.ws(b)),n),n.i("i.E"))
B.a.E(m,new A.wt(q,new A.ww()))
p=A.c([],t.q0)
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.m)(m),++s)p.push(new A.wu(a,m[s],d,r).$0())
return p},
kF:function kF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wv:function wv(a){this.a=a},
ww:function ww(){},
ws:function ws(a){this.a=a},
wt:function wt(a,b){this.a=a
this.b=b},
wu:function wu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wr:function wr(a){this.a=a},
aM(a,b){var s,r,q,p,o,n,m,l,k,j=a.b,i=B.kx.h(0,j)
if(i==null)i=j+" "
if(b)return i+"\u2022\u2022\u2022\u2022\u2022"
s=a.a
r=s.a
q=r.a?r.R(0):r
p=new A.P(q,s.b).k(0)
o=B.b.bX(p,".")
s=o<0
n=s?p:B.b.X(p,0,o)
m=j==="JPY"?0:2
l=B.b.my(s?"":B.b.ac(p,o+1),m,"0")
k=A.Cs(n,j)
j=r.ga7(0)<0?"-":""
s=m>0?"."+l:""
return j+i+k+s},
cs(a,b){var s,r=a.b-1
if(!(r>=0&&r<12))return A.a(B.l,r)
r=B.l[r]
s=a.a
s=s===b.a?"":" "+s
return""+a.c+" "+r+s},
FJ(a){var s=a.F().av(288e8),r=new A.zp(),q=A.b4(s)-1
if(!(q>=0&&q<12))return A.a(B.l,q)
return""+A.av(s)+" "+B.l[q]+" "+A.b_(s)+", "+A.j(r.$1(A.BQ(s)))+":"+A.j(r.$1(A.BR(s)))+" SGT"},
zp:function zp(){},
fC(a,b){var s,r
if(a==="personal")return"Personal"
s=null
if(b.aH(a)==="member"){r=A.a6(b.p3,t.N,t.o).h(0,a)
r=r==null?null:r.b
s=r}if(s!=null)return s
r=a.length
if(r===0)r=a
else{if(0>=r)return A.a(a,0)
r=a[0].toUpperCase()+B.b.ac(a,1)}return r},
Lw(d3,d4,d5,d6,d7,d8,d9,e0,e1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=null,c9=" no statement has posted yet.",d0=new A.wz(d7),d1=A.aB(d9.F(),B.q),d2=d8-1
if(!(d2>=0&&d2<12))return A.a(B.V,d2)
s=B.V[d2]+" "+e1
r=A.FN(d3,d4,d8,d1,e1)
q=A.vY(d3,d4)
p=A.Cg(d3,d4,d7,d9,e0)
d2=t.s
o=A.FM(d3,d4,A.fD(d3,d4,A.c([q],d2)),d6,d8,e1)
n=o.h(0,q).d.x
m=r.a
A:{if(B.e1===m){l="Final: every checked account is reconciled for the month."
break A}if(B.e2===m){l="Finalised on the phone with "+A.j(r.d)+" items open."
break A}k=B.b5===m
if(k&&!r.b){l="Draft: the month has not ended."
break A}if(k){l="Draft: "+r.c.length+" statements are not reconciled yet."
break A}l=c8}l=A.c([l],d2)
j=n>0
if(j){i=n===1?"":"s"
l.push(""+n+" transaction"+i+" of the month wait in Review and are not counted.")}h=A.c([],t.cM)
for(i=A.fD(d3,d4,new A.au(o,A.p(o).i("au<1>"))),g=i.length,f=t.jL,e=!r.b,d="No spending filed for "+s+" yet.",c=d3.d,b=t.N,a=t.G,a0=p.b,a1=A.L(a0),a2=a1.i("k(1)"),a3=a1.i("o<1>"),a4=a3.i("i<di>(i.E)"),a5=n===1,a6=""+n+" transaction",a7=0;a7<i.length;i.length===g||(0,A.m)(i),++a7){a8=i[a7]
a9=o.h(0,a8)
b0=a9.d
b1=A.N6(a9,d7)
b2=a2.a(new A.wx(a8))
b3=a4.a(new A.wy())
b4=a9.c
b5=b4.a
b6=d0.$1(b5)
b7=b0.a
b8=d0.$1(b7)
b9=b0.c
b9=b9.a.a.ga7(0)===0?c8:"after "+A.j(d0.$1(b9))+" of refunds"
c0=b7.b
c1=b5.b
if(c0!==c1)A.h(A.a7(c1,c0))
b7=b7.a
b7=b5.a.C(0,new A.P(b7.a.R(0),b7.b))
c2=B.e.h(0,c1)
if(c2==null)A.h(A.x(c1,"currency","is not a supported currency"))
if((b7.b<=0?0:Math.max(b7.gA().b,0))>c2)A.h(A.y(c1+" allows "+A.j(c2)+" decimal places",b7.k(0),c8))
b5=A.c([new A.ej("Money in",b6,c8),new A.ej("Spent",b8,b9),new A.ej("Saved",d0.$1(new A.q(b7,c1)),b1)],f)
b6=A.c([],f)
for(b7=b0.d,b8=b7.length,c3=0;b9=b7.length,c3<b9;b7.length===b8||(0,A.m)(b7),++c3){c4=b7[c3]
b9=c4.a
if(b9==null)b9="No category yet"
else{c0=A.a6(c,b,a).h(0,b9)
c0=c0==null?c8:c0.c
b9=A.hC(c0==null?b9:c0)}b6.push(new A.ej(b9,d0.$1(c4.b),c8))}if(b9!==0)b7=c8
else{b7=A.c([d],d2)
if(j)b7.push(a6+(a5?"":"s")+" of the month wait in Review.")
if(e)b7.push("Statements for the month come after it ends.")
b7=B.a.Z(b7," ")}b8=A.c([],d2)
b9=b0.w
if(b9>0){c0=A.j(d0.$1(b0.r))
c1=b9===1?"":"s"
b8.push("Spent includes "+c0+" from "+b9+" alert"+c1+c9)}b4=b4.c
if(b4>0){b9=b4===1?"":"s"
b8.push("Money in includes "+b4+" alert"+b9+c9)}b4=A.c([],f)
for(b9=a3.i("@<i.E>").a3(a1.i("di")),b3=new A.f5(new A.o(a0,b2,a3).gB(0),b3,B.bm,b9.i("f5<1,2>")),b9=b9.y[1];b3.n();){b2=b3.d
if(b2==null)b2=b9.a(b2)
c0=b2.a
c1=b2.gf_()
c5=b2.c
c5===$&&A.mK()
if(c5==null)c5="No balance yet"
c6=b2.d
c6===$&&A.mK()
b2=c6===b2.gf_()?c8:""+(b2.gf_()-c6)+" with no balance yet, not in the total"
b4.push(new A.ej(c0.c+" ("+c1+")",c5,b2))}B.a.m(h,new A.lh(a8,b5,b6,b7,b8))}A.fC(d4,d3)
if(d5!=null)A.FJ(d5)
d2=A.c([],t.nK)
for(j=a0.length,a7=0;a7<a0.length;a0.length===j||(0,A.m)(a0),++a7)for(i=a0[a7].b,g=i.length,c3=0;c3<i.length;i.length===g||(0,A.m)(i),++c3)for(f=i[c3].b,e=f.length,c7=0;c7<f.length;f.length===e||(0,A.m)(f),++c7)if(f[c7].as!=null)d2.push(new A.jU())
return new A.p7(s,l,h)},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function lh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jU:function jU(){},
p7:function p7(a,b,c){this.b=a
this.d=b
this.e=c},
wz:function wz(a){this.a=a},
wx:function wx(a){this.a=a},
wy:function wy(){},
Lx(f4,f5,f6,f7,f8,f9,g0,g1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=null,e0="currency",e1="is not a supported currency",e2="From the latest statements",e3=" with no balance yet",e4="s",e5=A.aB(f9.F(),B.q),e6=new A.wR(f7),e7=A.Cg(f4,f5,f7,f9,g0),e8=A.FM(f4,f5,A.fD(f4,f5,B.c),f6,f8,g1),e9=g1===e5.a&&f8===e5.b,f0=A.FX(f4,f5,e5,f7),f1=f5==="personal",f2=f1?A.M9(f4,e5,g0):d9,f3=A.c([],t.be)
for(s=A.fD(f4,f5,new A.au(e8,A.p(e8).i("au<1>"))),r=s.length,q=t.k1,p=t.B,o=f8-1,n=g1,m=f2==null,l=t.g,k=A.L(f0),j=k.i("k(1)"),k=k.i("o<1>"),i=k.i("i.E"),h=t.kd,g=e7.b,f=A.L(g),e=f.i("k(1)"),f=f.i("O<1>"),d=t.i6,c=t.bL,b=t.zp,a=0;a<s.length;s.length===r||(0,A.m)(s),++a){a0=s[a]
a1=A.w(d,c)
for(a2=e.a(new A.wB(a0)),a3=B.a.gB(g),a2=new A.O(a3,a2,f);a2.n();)for(a4=a3.gt().b,a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.m)(a4),++a6){a7=a4[a6]
a1.j(0,a7.a,a7)}a8=new A.x0(a0)
a9=new A.wS()
b0=new A.wP()
b1=new A.wU()
a2=a1.h(0,B.bc)
b2=a2==null?d9:a2.b
if(b2==null)b2=B.jP
a2=A.c([],h)
a3=a1.h(0,B.bb)
a3=a3==null?d9:a3.b
if(a3!=null)B.a.a1(a2,a3)
a1=a1.h(0,B.bd)
a1=a1==null?d9:a1.b
if(a1!=null)B.a.a1(a2,a1)
b3=b1.$1(b2)
b4=b1.$1(a2)
a1=$.M()
b5=B.e.h(0,a0)
if(b5==null)A.h(A.x(a0,e0,e1))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>b5)A.h(A.y(a0+" allows "+A.j(b5)+" decimal places",a1.k(0),d9))
a3=p.a(a8.$1(a2))
a4=a3.b
if(a4!==a0)A.h(A.a7(a0,a4))
a3=a3.a
a3=a1.C(0,new A.P(a3.a.R(0),a3.b))
b5=B.e.h(0,a0)
if(b5==null)A.h(A.x(a0,e0,e1))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>b5)A.h(A.y(a0+" allows "+A.j(b5)+" decimal places",a3.k(0),d9))
b6=e8.h(0,a0)
a1=b6==null
if(a1)b7=d9
else{a4=b6.c.a
a5=b6.d.a
b8=a5.b
b9=a4.b
if(b8!==b9)A.h(A.a7(b9,b8))
a5=a5.a
a5=a4.a.C(0,new A.P(a5.a.R(0),a5.b))
b7=new A.q(a5,b9)
b5=B.e.h(0,b9)
if(b5==null)A.h(A.x(b9,e0,e1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b5)A.h(A.y(b9+" allows "+A.j(b5)+" decimal places",a5.k(0),d9))}c0=A.D(new A.o(f0,j.a(new A.wC(a0)),k),i)
a4=A.c([],l)
for(a5=A.Kc(f4,f5,e5),b8=a5.length,a6=0;a6<a5.length;a5.length===b8||(0,A.m)(a5),++a6){c1=a5[a6]
if(c1.b===a0)a4.push(c1)}a5=A.L(c0)
b8=a5.i("k(1)")
a5=a5.i("o<1>")
c2=new A.o(c0,b8.a(new A.wD()),a5).gq(0)
c3=new A.wA(e5)
b9=m?d9:B.a.N(f2.c,new A.wH(a0))
if(b9===!0){b9=A.c([],b)
for(c4=f2.la(a0),c5=c4.length,a6=0;a6<c4.length;c4.length===c5||(0,A.m)(c4),++a6)b9.push(c4[a6].a.ck(0))
c6=b9}else c6=d9
if(b2.length===0)b9="None"
else b9=b0.$1(b2)?e6.$1(a8.$1(b2)):d9
if(b2.length===0)c4="No bank account in this book"
else{c4=A.j(c3.$1(b3))
c5=J.a2(a9.$1(b2),0)?"":"; "+A.j(a9.$1(b2))+e3
c5=e2+c4+c5
c4=c5}if(a2.length===0)c5="None"
else c5=b0.$1(a2)?e6.$1(new A.q(a3,a0)):d9
if(a2.length===0)a2="No card or loan in this book"
else{c7=A.j(c3.$1(b4))
a2=J.a2(a9.$1(a2),0)?"":"; "+A.j(a9.$1(a2))+e3
a2=e2+c7+a2}a3=a3.a.ga7(0)>0?B.fx:B.aN
c7=b7==null
c8=c7?d9:e6.$1(b7)
if(!(o>=0&&o<12))return A.a(B.V,o)
c9=B.V[o]
d0=e9?", in progress":""
a1=a1?d9:b6.d.x
a1=(a1==null?0:a1)>0?"; "+b6.d.x+" transactions still to file":""
if(c7||b7.a.a.ga7(0)===0)c7=B.aN
else c7=b7.a.a.ga7(0)>0?B.fw:B.cZ
if(c0.length===0){a4=$.M()
b5=B.e.h(0,a0)
if(b5==null)A.h(A.x(a0,e0,e1))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>b5)A.h(A.y(a0+" allows "+A.j(b5)+" decimal places",a4.k(0),d9))
a4=e6.$1(new A.q(a4,a0))}else{d1=$.M()
b5=B.e.h(0,a0)
if(b5==null)A.h(A.x(a0,e0,e1))
if((d1.b<=0?0:Math.max(d1.gA().b,0))>b5)A.h(A.y(a0+" allows "+A.j(b5)+" decimal places",d1.k(0),d9))
a4=e6.$1(B.a.a5(a4,new A.q(d1,a0),new A.wI(),p))}d1=c0.length
if(d1===0)a5="No card bill or loan instalment due"
else{d2=d1===1?"":e4
a5=B.a.N(c0,new A.wJ())?", "+new A.o(c0,b8.a(new A.wK()),a5).gq(0)+" overdue":""
if(c2===0)b8=""
else{b8=c2===1?"":e4
b8="; "+c2+" amount"+b8+" not known, not in the total"}b8=""+d1+" payment"+d2+a5+b8
a5=b8}b8=B.a.N(c0,new A.wL())?B.cZ:B.aN
b8=A.c([new A.fe("Cash in bank accounts",b9,c4,B.aN),new A.fe("Owed on cards and loans",c5,a2,a3),new A.fe("Money in less spent",c8,c9+" "+n+d0+a1,c7),new A.fe("Payments due in 30 days",a4,a5,b8)],q)
if(c6==null)a1=f1?"No forecast: no bank account here has a balance yet.":d9
else a1="Known payments and income only, from each account's latest statement"+(f2.ma(a0)?"; some accounts have no balance or an out-of-date one, so it is incomplete":"")+"."
B.a.m(f3,new A.li(a0,b8,c6,a1))}f1=A.c([],h)
for(s=g.length,a=0;a<g.length;g.length===s||(0,A.m)(g),++a)for(r=g[a].b,q=r.length,a6=0;a6<r.length;r.length===q||(0,A.m)(r),++a6){p=r[a6].b
n=A.L(p)
B.a.a1(f1,new A.o(p,n.i("k(1)").a(new A.wM()),n.i("o<1>")))}d3=A.D(new A.o(f0,j.a(new A.wN()),k),i)
s=t.vu
r=t.gF
q=r.i("i.E")
d4=A.D(new A.o(f1,s.a(new A.wO()),r),q)
d5=A.D(new A.o(f1,s.a(new A.wE()),r),q)
d6=A.D(new A.o(f1,s.a(new A.wF(d5)),r),q)
d7=A.D(new A.o(f1,s.a(new A.wG(d5)),r),q)
f1=A.c([],t.oT)
s=d3.length
if(s!==0){r=s===1?"":e4
q=A.c([],t.I)
for(p=d3.length,a=0;a<d3.length;d3.length===p||(0,A.m)(d3),++a){c1=d3[a]
q.push(new A.r(c1.b,c1.c+" due "+c1.a))}f1.push(new A.cY(B.bw,""+s+" payment"+r+" overdue","Check the bank app; the app pays nothing itself.",q))}s=d6.length
if(s!==0){r=s===1?" needs":"s need"
q=new A.wV().$1(d6)
q.toString
q=A.cs(q,e5)
p=A.c([],t.I)
for(n=d6.length,a=0;a<d6.length;d6.length===n||(0,A.m)(d6),++a){d8=d6[a]
p.push(new A.r(d8.b,d8.r))}f1.push(new A.cY(B.cO,""+s+" account"+r+" a newer statement","Oldest latest statement "+q+". Add the statements on the phone.",p))}s=d4.length
if(s!==0){r=s===1?" has":"s have"
q=A.c([],t.I)
for(p=d4.length,a=0;a<d4.length;d4.length===p||(0,A.m)(d4),++a){d8=d4[a]
q.push(new A.r(d8.b,d8.d))}f1.push(new A.cY(B.cO,""+s+" account"+r+" no statement yet","Add a first statement on the phone, or mark the account closed if it is.",q))}s=d5.length
if(s!==0){r=s===1?"":e4
q=A.c([],t.I)
for(p=d5.length,a=0;a<d5.length;d5.length===p||(0,A.m)(d5),++a){d8=d5[a]
q.push(new A.r(d8.b,d8.r))}f1.push(new A.cY(B.cP,""+s+" account"+r+" with no statement for over a year","Probably closed: mark them closed on the phone so they stop counting as out of date.",q))}s=d7.length
if(s!==0){r=s===1?"":e4
q=A.c([],t.I)
for(p=d7.length,a=0;a<d7.length;d7.length===p||(0,A.m)(d7),++a){d8=d7[a]
n=d8.y
m=n.length
l=m===1?"":e4
q.push(new A.r(d8.b,""+m+" month"+l+", from "+B.a.ga0(n)))}f1.push(new A.cY(B.cP,"Statement gaps on "+s+" account"+r,"Earlier months with no statement. Matters only for complete history.",q))}if(!(o>=0&&o<12))return A.a(B.V,o)
return new A.pc(e9,f3,f1,f0)},
FX(a,b,c,d){var s,r,q,p,o,n,m,l=A.c([],t.m1)
for(s=A.Ga(a,c,30),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=a.gK().h(0,p.c)
n={}
n.a=null
if(o!=null){n.a=o
m=o.r===b}else m=!1
if(m)l.push(new A.Ah(n,a,p,d,c).$0())}return l},
Kc(a,b,c){var s,r,q,p,o,n=A.c([],t.g)
for(s=A.Ga(a,c,30),r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
o=a.gK().h(0,p.c)
if((o==null?null:o.r)===b){o=A.ED(a,p)
if(o!=null)n.push(o)}}return n},
ED(a,b){var s,r,q=b.e
if(q!=null){s=q.w
if(s==null)s=q.d
if(s==null)r=null
else if(s.a.a.ga7(0)<0){r=s.b
r=A.a3($.M(),r).a8(0,s)}else r=s
return r}r=a.gK().h(0,b.c)
if(r==null)r=null
else{r=r.as
r=r==null?null:r.r}return r},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a,b){this.a=a
this.b=b},
li:function li(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f},
pc:function pc(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
wR:function wR(a){this.a=a},
wB:function wB(a){this.a=a},
x0:function x0(a){this.a=a},
x1:function x1(){},
x2:function x2(){},
wS:function wS(){},
wT:function wT(){},
wP:function wP(){},
wQ:function wQ(){},
wU:function wU(){},
wY:function wY(){},
wZ:function wZ(){},
x_:function x_(){},
wC:function wC(a){this.a=a},
wD:function wD(){},
wA:function wA(a){this.a=a},
wH:function wH(a){this.a=a},
wI:function wI(){},
wJ:function wJ(){},
wK:function wK(){},
wL:function wL(){},
wM:function wM(){},
wN:function wN(){},
wO:function wO(){},
wE:function wE(){},
wF:function wF(a){this.a=a},
wG:function wG(a){this.a=a},
wV:function wV(){},
wW:function wW(){},
wX:function wX(){},
Ah:function Ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nM(a,b){return new A.kw(a,b)},
Nr(a){return new A.B7(a,B.eU)},
ha:function ha(a,b){this.a=a
this.b=b},
hf:function hf(){},
kw:function kw(a,b){this.a=a
this.b=b},
kx:function kx(){},
B7:function B7(a,b){this.a=a
this.b=b},
B6:function B6(){},
IH(a){t.k2.a(a)
return B.c7.v(0,a.c)&&a.a!=="fromEvent"},
IG(a){return B.a.b5(a.d,new A.t0())},
jD(a){var s
A:{if(a instanceof A.hp){s="That passphrase did not open SanthIQ's key. Type it again."
break A}if(a instanceof A.l2){s="Sync is not on yet. On the phone: Settings, Devices, turn sync on, then try again."
break A}if(a instanceof A.l1){s="SanthIQ/Sync was not found in this account. Turn sync on on the phone; if it is on, the page may not be allowed to see the phone's files (see the setup guide, W1)."
break A}if(a instanceof A.hf){s="Google's sign-in ended (it lasts about an hour). Sign in again; nothing is lost."
break A}if(a instanceof A.kw){s="Google answered with an error (HTTP "+a.a+"). Try again in a minute."
break A}if(a instanceof A.kx){s="Google took too long to answer. Check the connection and try again; nothing is lost."
break A}if(a instanceof A.b8||t.bs.b(a)){s="Something in the sync folder could not be read."
break A}s="Could not reach Google. Check the connection and try again."
break A}return s},
MU(a,b){var s,r,q,p=t.f,o=t.N,n=t.X,m=p.a(B.z.bh(a,null)).G(0,o,n),l=m.h(0,"clientId")
l.toString
A.d(l)
s=m.h(0,"categoryFlags")
s.toString
s=A.HZ(p.a(s).G(0,o,n))
r=m.h(0,"settings")
r.toString
n=A.HR(p.a(r).G(0,o,n))
o=A.c([],t.mt)
r=m.h(0,"setupSteps")
r.toString
r=p.a(r).h(0,"steps")
r.toString
r=J.dg(t.j.a(r),t.J)
p=r.$ti
r=new A.ad(r,r.gq(0),p.i("ad<Q.E>"))
p=p.i("Q.E")
while(r.n()){q=r.d
o.push(A.IS(q==null?p.a(q):q))}return new A.rS(l,b,s,n.d,o)},
Cr(a){var s=A.D(a.e,t.N)
B.a.b9(s)
return B.b.X(A.vo(B.aE.O(B.E.O(a.b+"\n"+B.a.Z(s,"\n"))).a),0,16)},
rS:function rS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
et:function et(a,b){this.a=a
this.b=b},
l9:function l9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=_.r=_.f=null
_.x=!1
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=null
_.ch=!0
_.CW=!1
_.cx=e
_.cy=f},
rU:function rU(a){this.a=a},
rT:function rT(a){this.a=a},
td:function td(){},
te:function te(){},
t7:function t7(a,b){this.a=a
this.b=b},
tb:function tb(){},
tc:function tc(){},
t6:function t6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rX:function rX(a,b){this.a=a
this.b=b},
t5:function t5(){},
t4:function t4(){},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
t9:function t9(a,b){this.a=a
this.b=b},
ta:function ta(){},
t_:function t_(a,b,c){this.a=a
this.b=b
this.c=c},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t8:function t8(a,b){this.a=a
this.b=b},
tq:function tq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rV:function rV(){},
tn:function tn(){},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tj:function tj(a){this.a=a},
t1:function t1(a,b,c){this.a=a
this.b=b
this.c=c},
tm:function tm(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rZ:function rZ(a){this.a=a},
tf:function tf(a){this.a=a},
t0:function t0(){},
tl:function tl(a){this.a=a},
tk:function tk(a,b){this.a=a
this.b=b},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
rW:function rW(a){this.a=a},
t2:function t2(a,b){this.a=a
this.b=b},
ti:function ti(a,b){this.a=a
this.b=b},
ec(a){var s
A:{if("SGD"===a){s="Singapore"
break A}if("INR"===a){s="India"
break A}s="Other"
break A}return s},
MY(a,b){A.d(a)
A.d(b)
return A.vu(a)!==A.vu(b)?A.vu(a)-A.vu(b):B.b.l(a,b)},
vu(a){var s
A:{if("SGD"===a){s=0
break A}if("INR"===a){s=1
break A}s=2
break A}return s},
fD(a,b,c){var s,r,q=A.a4(t.N)
for(s=a.gK().gS(),s=s.gB(s);s.n();){r=s.gt()
if(r.r===b&&r.d!==B.x)q.m(0,r.e)}q.a1(0,c)
if(q.a===0)q.m(0,A.vY(a,b))
q=A.D(q,q.$ti.c)
B.a.E(q,A.G_())
return q},
L6(a){var s,r=a.d
A:{if(B.y===r){s=B.bb
break A}if(B.o===r){s=B.bd
break A}s=B.bc
break A}return s},
FF(a){var s=a.as
switch(s==null?null:s.a){case B.bP:s="Home loan"
break
case B.b0:s="Personal loan"
break
case B.bQ:s="Commercial loan"
break
case B.bR:s="Other loan"
break
case null:case void 0:s="Loan, type not set"
break
default:s=null}return s},
F9(a,b){var s,r=B.d.u(A.b(b.a,b.b,b.c).ar(A.b(a.a,a.b,a.c)).a,864e8)
if(r<=0)s="today"
else s=r===1?"yesterday":""+r+" days ago"
return s},
Lk(a,b,c,d){var s,r,q
if(a==null)return"No statement yet"
s=A.b(d.a,d.b,d.c)
r=a.a
q=a.b
if(B.d.u(s.ar(A.b(r,q,a.c)).a,864e8)>365){s=q-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return"No statement since "+B.l[s]+" "+r+": if it is closed, mark it closed on the phone"}s=A.c([],t.s)
if(c)s.push("Out of date: statement to "+A.cs(a,d)+", "+A.F9(a,d))
if(b.length!==0)s.push("Statements missing: "+B.a.Z(b,", "))
return s.length===0?null:B.a.Z(s,". ")},
hC(a){if(a.toUpperCase()!==a||a.toLowerCase()===a)return a
return new A.aj(A.c(a.split(" "),t.s),t.ff.a(new A.xY()),t.zK).Z(0," ")},
G0(a){var s,r=A.MC(a),q=r.gff(),p=r.a,o=p.a
q=o.a.ga7(0)<=0?null:A.DQ(q.a.gbR().dl(0,o.gbR()),4)
s=q==null?null:q.a_(0,new A.P(A.aL(100),0)).cz(0,B.ba).aD().k(0)+"%"
if(s==null)return null
return r.gff().C(0,p).a.a.ga7(0)<0?"not shown":s},
N6(a,b){var s,r=A.G0(a)
A:{if(r==null){s=null
break A}if("not shown"===r){s="savings rate not shown: spent is over twice the money in recorded"
break A}s=b?"savings rate hidden":"savings rate "+r
break A}return s},
Ag(a){var s,r,q,p,o,n,m,l=null,k=B.b.H(a).toLowerCase(),j=A.C("^(\\d{4})-(\\d{1,2})-(\\d{1,2})$",!0,!1).aj(k)
if(j!=null){s=j.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.Z(r,l,l)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.Z(r,l,l)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.Z(s,l,l)}else{n=A.C("^(\\d{1,2})[/.-](\\d{1,2})[/.-](\\d{4})$",!0,!1).aj(k)
if(n!=null){s=n.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
o=A.Z(r,l,l)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.Z(r,l,l)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
q=A.Z(s,l,l)}else{m=A.C("^(\\d{1,2})\\s+([a-z]{3})[a-z]*\\s+(\\d{4})$",!0,!1).aj(k)
if(m!=null){s=m.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
o=A.Z(r,l,l)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=B.kz.h(0,r)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
q=A.Z(s,l,l)}else{o=l
p=o
q=p}}}if(q==null||p==null||o==null||p<1||p>12||o<1||o>A.av(A.b(q,p+1,0)))return l
return new A.B(q,p,o)},
mz(a){return a==null?"":""+a.c+"/"+a.b+"/"+a.a},
ee:function ee(a,b,c){this.c=a
this.a=b
this.b=c},
xY:function xY(){},
N0(a){var s
A:{if(B.b7===a){s="Could not be read"
break A}if(B.aA===a){s="Waiting for its account"
break A}if(B.v===a||B.P===a){s="Possible match to check"
break A}if(B.c6===a){s="Money in transit"
break A}if(B.b6===a){s="Statement doesn't add up"
break A}if(B.H===a){s="Changed in two places"
break A}if(B.ad===a){s="Books disagree"
break A}if(B.bY===a){s="Rules disagree"
break A}if(B.f===a||B.h===a){s="Change not applied"
break A}if(B.e3===a||B.e4===a){s="Needs a category"
break A}if(B.bZ===a){s="Statement missing"
break A}if(B.c_===a){s="May not be from the bank"
break A}if(B.c0===a){s="Payment reminder"
break A}if(B.c1===a){s="Charge not recognised"
break A}if(B.c2===a){s="History start to check"
break A}if(B.ac===a){s="Document to check"
break A}if(B.c3===a){s="Invoice to check"
break A}if(B.c4===a){s="Payment failed"
break A}if(B.c5===a){s="Loan on a card statement"
break A}s=null}return s},
MN(a,b,c){var s,r=A.hK(a,$.Hd(),t.tj.a(t.n.a(new A.Aq(c))),null)
if(b){s=$.GY()
s=A.a8(r,s,"\u2022\u2022\u2022\u2022\u2022")}else s=r
return s},
Ly(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aB(a9.F(),B.q),a2=A.Nt(a6,a7),a3=A.Nm(a6,a2),a4=t.N,a5=A.w(a4,t.Bz)
for(s=A.N_(a6,a1),r=s.length,q=t.M,p=0;p<s.length;s.length===r||(0,A.m)(s),++p){o=s[p]
n=A.N0(o.b)
m=a5.h(0,n)
if(m==null){m=A.c([],q)
a5.j(0,n,m)
n=m}else n=m
J.bU(n,o)}s=A.c([],t.kW)
for(r=A.bO(a2,0,t.t5),q=J.S(r.a),n=r.b,r=new A.at(q,n,A.p(r).i("at<1>")),m=t.s,l=a6.d,k=t.G;r.n();){j=r.c
j=j>=0?new A.r(n+j,q.gt()):A.h(A.ao())
o=j.a
i=j.b
j=i.d
if(j.length===0)j="(no payee)"
h=i.c===B.j?"Money out":"Money in"
g=i.e.length
f=A.aM(i.f,a8)
if(!(o>=0&&o<a3.length))return A.a(a3,o)
e=a3[o]
A:{if(e==null){d=null
break A}d=B.ay.h(0,e.a)
d.toString
d=A.c([d],m)
c=e.b
if(c!=null){b=A.a6(l,a4,k).h(0,c)
b=b==null?null:b.c
d.push(A.hC(b==null?c:b))}d=B.a.Z(d,", ")
break A}s.push(new A.ie(j,i,e,d,h,g,f))}a4=B.a.a5(a2,0,new A.x3(),t.S)
r=A.c([],t.qH)
for(q=new A.ac(a5,a5.$ti.i("ac<1,2>")).gB(0);q.n();){n=q.d
a=n.a
a0=n.b
n=A.c([],m)
for(l=J.b1(a0),k=l.bf(a0,100),j=k.$ti,k=new A.ad(k,k.gq(0),j.i("ad<a5.E>")),j=j.i("a5.E");k.n();){h=k.d
n.push(A.MN((h==null?j.a(h):h).d,a8,a1))}l=l.gq(a0)
r.push(new A.dO(a,n,l))}B.a.E(r,new A.x4())
return new A.tI(s,a4,r)},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(a,b,c){this.a=a
this.b=b
this.c=c},
Aq:function Aq(a){this.a=a},
x3:function x3(){},
x4:function x4(){},
Lz(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="currency",a4="is not a supported currency",a5=b2.e,a6=t.N,a7=t.R,a8=A.a6(a5,a6,a7).gS(),a9=A.p(a8),b0=a9.i("o<i.E>"),b1=A.D(new A.o(a8,a9.i("k(i.E)").a(new A.x5(b3)),b0),b0.i("i.E"))
B.a.E(b1,new A.x6())
s=A.w(a6,t.S)
r=A.w(a6,t.xC)
q=A.w(t.xG,t.C)
for(a8=b2.eY(b3),a9=a8.$ti,a9.i("k(i.E)").a(A.jI()),a8=a8.gB(0),a9=new A.O(a8,A.jI(),a9.i("O<i.E>")),b0=t.A;a9.n();){p=a8.gt()
o=p.z
if(o==null)o=""
n=A.C("\\s+",!0,!1)
o=new A.bz(B.b.H(A.a8(o.toUpperCase(),n," ")),p.c,p.e)
n=q.h(0,o)
if(n==null){n=A.c([],b0)
q.j(0,o,n)
o=n}else o=n
J.bU(o,p)}for(a8=new A.ac(q,q.$ti.i("ac<1,2>")).gB(0),a9=t.s;a8.n();){b0=a8.d
m=b0.a
l=m.a
k=m.b
j=m.c
i=b0.b
for(b0=b1.length,p=J.ar(i),h=0;h<b1.length;b1.length===b0||(0,A.m)(b1),++h){g=b1[h]
if(g.eX(l,k,b3,j)){o=g.a
n=s.h(0,o)
if(n==null)n=0
s.j(0,o,n+p.gq(i))}}f=A.Cz(l,A.a6(a5,a6,a7).gS(),k,b3,j)
if(f instanceof A.hd){e=f.a
for(b0=p.gB(i);b0.n();){p=b0.gt()
d=p.z
if(d==null)d=""
c=r.h(0,d)
if(c==null){o=p.f.b
n=$.M()
b=B.e.h(0,o)
if(b==null)A.h(A.x(o,a3,a4))
if((n.b<=0?0:Math.max(n.gA().b,0))>b)A.h(A.y(o+" allows "+A.j(b)+" decimal places",n.k(0),null))
c=new A.bz(0,new A.q(n,o),A.a4(a6))}a=c.b
a0=c.c
o=a.b
p=p.f
n=p.b
if(o===n){if(n!==o)A.h(A.a7(o,n))
p=a.a.C(0,p.a)
n=new A.q(p,o)
b=B.e.h(0,o)
if(b==null)A.h(A.x(o,a3,a4))
if((p.b<=0?0:Math.max(p.gA().b,0))>b)A.h(A.y(o+" allows "+A.j(b)+" decimal places",p.k(0),null))
p=n}else p=a
o=A.c([],a9)
for(n=e.length,h=0;h<e.length;e.length===n||(0,A.m)(e),++h){g=e[h]
o.push('"'+g.c+'" as '+A.EL(b2,g))}a0.a1(0,o)
r.j(0,d,new A.bz(c.a+1,p,a0))}}}a1=new A.xa(b2,s)
a5=t.vV
a6=A.c([],a5)
for(a7=A.L(b1),a8=a7.i("k(1)"),a9=a8.a(new A.x7()),b0=B.a.gB(b1),a7=a7.i("O<1>"),a9=new A.O(b0,a9,a7);a9.n();)a6.push(a1.$1(b0.gt()))
a5=A.c([],a5)
for(a8=a8.a(new A.x8()),a9=B.a.gB(b1),a7=new A.O(a9,a8,a7);a7.n();)a5.push(a1.$1(a9.gt()))
a7=A.c([],t.yk)
for(a8=new A.ac(r,r.$ti.i("ac<1,2>")).gB(0);a8.n();){a2=a8.d
a9=a2.a
b0=a2.b
p=A.aM(b0.b,b4)
o=b0.c
o=A.D(o,A.p(o).c)
B.a.b9(o)
a7.push(new A.cu(a9,b0.a,p,o))}B.a.E(a7,new A.x9())
return new A.tK(a6,a5,a7)},
EL(a,b){var s,r,q=B.ay.h(0,b.d)
q.toString
q=A.c([q],t.s)
s=b.e
if(s!=null){r=A.a6(a.d,t.N,t.G).h(0,s)
r=r==null?null:r.c
q.push(A.hC(r==null?s:r))}return B.a.Z(q,", ")},
dP:function dP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tK:function tK(a,b,c){this.a=a
this.b=b
this.c=c},
x5:function x5(a){this.a=a},
x6:function x6(){},
xa:function xa(a,b){this.a=a
this.b=b},
x7:function x7(){},
x8:function x8(){},
x9:function x9(){},
MV(a,b){var s,r,q,p,o="access_token",n="error"
if(a.length===0)return new A.iF()
s=null
try{s=A.J6(a)}catch(r){return new A.eA("The answer from Google could not be read.")}if(!s.D(o)&&!s.D(n))return new A.iF()
if(b==null||J.as(s,"state")!==b)return new A.eA("That sign-in was not started from this tab. Sign in again.")
if(J.as(s,n)!=null)return new A.eA(J.as(s,n)==="access_denied"?"Sign-in was cancelled.":"Google refused the sign-in.")
q=J.as(s,o)
if(q==null||q.length===0)return new A.eA("Google sent no token.")
p=J.as(s,"scope")
if(!B.a.v(A.c((p==null?"":p).split(" "),t.s),B.a.ga0(B.dz)))return new A.eA("Access to SanthIQ's own Drive files was not allowed, so the page cannot read them.")
p=J.as(s,"expires_in")
p=A.le(p==null?"":p,null)
return new A.hg(q,A.BC(0,0,0,p==null?3600:p))},
FG(a){var s,r,q,p=B.b.H(a).toLowerCase(),o=B.b.eU(p,"@")
if(o<1)return"\u2022\u2022\u2022"
s=B.b.X(p,0,o)
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
r=r>1?s[r-1]:""
return q+"\u2022\u2022\u2022"+r+B.b.ac(p,o)},
xD(a,b){var s=0,r=A.J(t.eM),q,p,o,n,m,l
var $async$xD=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:m=t.N
s=3
return A.t(a.$3$headers("GET",A.jx("https","openidconnect.googleapis.com","/v1/userinfo",null),A.T(["authorization","Bearer "+b],m,m)),$async$xD)
case 3:l=d
m=l.a
if(m===401)throw A.l(new A.hf())
if(m!==200)throw A.l(A.nM(m,"account check"))
p=t.f.a(B.z.bh(B.R.c8(l.b),null))
o=p.h(0,"email")
if(typeof o!="string"||o.length===0)throw A.l(A.nM(m,"account check"))
n=p.h(0,"hd")
if(typeof n=="string"&&n.length!==0){q=new A.iK(A.FG(o))
s=1
break}q=new A.iL(A.vo(B.aE.O(B.E.O(B.b.H(o).toLowerCase())).a),A.FG(o))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$xD,r)},
L7(a,b){var s=b.cy
if(s==null)return"The phone has not recorded SanthIQ's Google account yet."
if(s.a!==a.a)return"This is not SanthIQ's Google account ("+s.b+"). Sign in with that account."
return null},
Ln(a,b){var s,r,q,p,o=new A.w0(a)
if(o.$1("Edg/"))s="Edge"
else if(o.$1("OPR/"))s="Opera"
else{if(o.$1("Firefox/"))r="Firefox"
else if(o.$1("Chrome/"))r="Chrome"
else r=o.$1("Safari/")?"Safari":"A browser"
s=r}if(o.$1("Windows"))q="Windows"
else if(o.$1("Android"))q="Android"
else{if(o.$1("iPhone")||o.$1("iPad"))o="iOS"
else if(o.$1("CrOS"))o="ChromeOS"
else if(o.$1("Mac OS X"))o="macOS"
else o=o.$1("Linux")?"Linux":null
q=o}p=b==="localhost"||b==="127.0.0.1"?"local page":"web page"
return s+(q==null?"":" on "+q)+" ("+p+")"},
tT:function tT(){},
iF:function iF(){},
hg:function hg(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
h9:function h9(){},
iL:function iL(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
w0:function w0(a){this.a=a},
LA(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.a3($.M(),a5),b=A.CA(a0,a1,12,a5,a2,a4,a6),a=A.w(t.T,t.r9)
for(s=A.bO(b,0,t.wy),r=J.S(s.a),q=s.b,s=new A.at(r,q,A.p(s).i("at<1>")),p=t.B;s.n();){o=s.c
o=o>=0?new A.r(q+o,r.gt()):A.h(A.ao())
n=o.a
for(o=o.b.d.d,m=o.length,l=0;l<o.length;o.length===m||(0,A.m)(o),++l){k=o[l]
j=k.a
i=a.h(0,j)
if(i==null){i=A.it(b.length,c,!1,p)
a.j(0,j,i)
j=i}else j=i
J.CX(j,n,k.b)}}h=new A.xe(c,new A.xd(a3),a5)
s=a.$ti.i("ac<1,2>")
g=A.D(new A.ac(a,s),s.i("i.E"))
B.a.E(g,new A.xb(new A.xg(c)))
f=new A.xc(b)
s=t.s
r=A.c([],s)
for(n=b.length-1;n>=0;--n)r.push(f.$1(n))
q=A.c([],t.vk)
for(p=g.length,o=a0.d,m=t.N,j=t.G,l=0;l<g.length;g.length===p||(0,A.m)(g),++l){e=g[l]
i=e.a
if(i==null)i="No category yet"
else{d=A.a6(o,m,j).h(0,i)
d=d==null?null:d.c
i=A.hC(d==null?i:d)}q.push(h.$2(i,e.b))}p=A.c([],t.g)
for(o=b.length,l=0;l<b.length;b.length===o||(0,A.m)(b),++l)p.push(b[l].d.a)
p=h.$2("Spent, after refunds",p)
o=A.c([],s)
for(j=A.L(b).i("aP<1>"),i=new A.aP(b,j),i=new A.ad(i,i.gq(0),j.i("ad<a5.E>")),j=j.i("a5.E");i.n();){d=i.d
d=(d==null?j.a(d):d).d.x
o.push(d===0?"":""+d)}s=A.c(["Each month in "+a5+", as the phone counts it; a refund lowers its category."],s)
m=A.a4(m)
for(j=b.length,l=0;l<b.length;b.length===j||(0,A.m)(b),++l)for(i=b[l].d.y,i=new A.cy(i,i.r,i.e,A.p(i).i("cy<1>"));i.n();)m.m(0,A.d(i.d))
return new A.iW(a5,r,q,p,o,s,m)},
hh:function hh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xd:function xd(a){this.a=a},
xe:function xe(a,b,c){this.a=a
this.b=b
this.c=c},
xf:function xf(){},
xg:function xg(a){this.a=a},
xh:function xh(){},
xb:function xb(a){this.a=a},
xc:function xc(a){this.a=a},
LC(b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="currency",b5="is not a supported currency",b6=A.aB(c2.F(),B.q),b7=B.b.H(c0.e).toLowerCase(),b8=A.c([],t.A)
for(s=b9.mr(c0.b,c0.a),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>")),q=b7.length!==0,p=c0.r,o=p!=null,n=c0.f.a,m=c0.d,l=m!=null,k=c0.c,j=k!=null;s.n();){i=r.gt()
if(j){h=i.w
h=A.b(h.a,h.b,h.c).l(0,A.b(k.a,k.b,k.c))<0}else h=!1
if(h)continue
if(l){h=i.w
h=A.b(h.a,h.b,h.c).l(0,A.b(m.a,m.b,m.c))>0}else h=!1
if(h)continue
h=!0
switch(n){case 0:break
case 1:g=i.d
if(g!=null)h=(g===B.n||g===B.w)&&i.Q==null
break
case 2:h=A.jH(i)===B.ak
break
case 3:h=i.d
if(h!=null)h=(h===B.n||h===B.w)&&i.Q==null
else h=!0
h=!h
break
default:h=b3}if(!h)continue
if(o){h=i.Q
h=(h==null?"-":h)!==p}else h=!1
if(h)continue
h=!1
if(q){g=i.z
if(g==null)g=""
if(!B.b.v(g.toLowerCase(),b7)){h=i.db
if(h==null)h=""
h=!B.b.v(h.toLowerCase(),b7)}}if(h)continue
B.a.m(b8,i)}s=new A.xl()
r=new A.xk(s)
switch(c0.w.a){case 0:s=new A.xm(s)
break
case 1:break
case 2:s=new A.xn(r)
break
case 3:s=r
break
default:s=b3}B.a.E(b8,s)
s=t.N
r=t.B
f=A.w(s,r)
e=A.w(s,r)
for(r=b8.length,d=0;q=b8.length,d<q;b8.length===r||(0,A.m)(b8),++d){c=b8[d]
b=c.e===B.m?f:e
q=c.f
p=q.b
o=b.h(0,p)
if(o==null){o=$.M()
n=new A.q(o,p)
a=B.e.h(0,p)
if(a==null)A.h(A.x(p,b4,b5))
if((o.b<=0?0:Math.max(o.gA().b,0))>a)A.h(A.y(p+" allows "+A.j(a)+" decimal places",o.k(0),b3))
o=n}n=o.b
if(p!==n)A.h(A.a7(n,p))
q=o.a.C(0,q.a)
a=B.e.h(0,n)
if(a==null)A.h(A.x(n,b4,b5))
if((q.b<=0?0:Math.max(q.gA().b,0))>a)A.h(A.y(n+" allows "+A.j(a)+" decimal places",q.k(0),b3))
b.j(0,p,new A.q(q,n))}a0=q===0?1:B.d.u(q+100-1,100)
a1=B.d.l9(c0.x,0,a0-1)
a2=new A.xj(b9)
r=b8.length
q=A.c([],t.s)
p=A.kU(new A.au(f,f.$ti.i("au<1>")),s)
p.a1(0,new A.au(e,e.$ti.i("au<1>")))
p=A.D(p,A.p(p).c)
B.a.E(p,A.G_())
o=p.length
d=0
for(;d<p.length;p.length===o||(0,A.m)(p),++d){a3=p[d]
n=A.ec(a3)
m=f.h(0,a3)
if(m==null){m=$.M()
l=new A.q(m,a3)
a=B.e.h(0,a3)
if(a==null)A.h(A.x(a3,b4,b5))
if((m.b<=0?0:Math.max(m.gA().b,0))>a)A.h(A.y(a3+" allows "+A.j(a)+" decimal places",m.k(0),b3))
m=l}m=A.aM(m,c1)
l=e.h(0,a3)
if(l==null){l=$.M()
k=new A.q(l,a3)
a=B.e.h(0,a3)
if(a==null)A.h(A.x(a3,b4,b5))
if((l.b<=0?0:Math.max(l.gA().b,0))>a)A.h(A.y(a3+" allows "+A.j(a)+" decimal places",l.k(0),b3))
l=k}q.push(n+" ("+a3+"): "+m+" in, "+A.aM(l,c1)+" out")}p=A.c([],t.nS)
for(o=A.bF(b8,a1*100,b3,t.W).bf(0,100),n=o.$ti,o=new A.ad(o,o.gq(0),n.i("ad<a5.E>")),m=b6.a,n=n.i("a5.E"),l=b9.d,k=t.G;o.n();){j=o.d
if(j==null)j=n.a(j)
i=j.a
h=j.w
g=h.b-1
if(!(g>=0&&g<12))return A.a(B.l,g)
g=B.l[g]
a4=h.a
a4=a4===m?"":" "+a4
a5=a2.$1(j.c)
a6=j.z
if(a6==null)a6=""
a7=j.e===B.j?"-":""
a8=A.aM(j.f,c1)
a9=j.d
b0=a9==null
if(b0)b1="Not filed yet"
else{b1=B.ay.h(0,a9)
b1.toString}b2=j.Q
if(b2!=null){a9=A.a6(l,s,k).h(0,b2)
a9=a9==null?b3:a9.c
a9=A.hC(a9==null?b2:a9)}else{if(!b0)a9=a9===B.n||a9===B.w
else a9=!1
a9=a9?"No category yet":""}b0=A.jH(j)===B.ak?"Alert, not posted":""
j=j.db
if(j==null)j=""
p.push(new A.lE(i,""+h.c+" "+g+a4,a5,a6,a7+a8,b1,a9,b0,j))}return new A.ua(p,r,a1,a0,q)},
G2(a){var s
A:{if("sms"===a){s="SMS alert"
break A}if("email"===a){s="Email alert"
break A}if("statement"===a){s="Statement transaction"
break A}if("manual"===a){s="Entered by you"
break A}if("operation"===a){s="Made in SanthIQ"
break A}s="Other source ("+a+")"
break A}return s},
LD(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.b.a,c=d.h(0,b)
if(c==null)return e
s=A.aB(a1.F(),B.q)
r=new A.xo(a0)
q=t.s
p=A.c([],q)
for(o=c.c,n=a.hm(o,!0),m=J.S(n.a),n=new A.O(m,n.b,n.$ti.i("O<1>")),l=c.a,k=s.a;n.n();){j=m.gt()
if(j.cx===l){i=A.G2(j.y.a)
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
p.push(i+", "+(""+j.c+" "+h+g))}}q=A.c([],q)
for(n=a.ce(o),m=J.S(n.a),n=new A.O(m,n.b,n.$ti.i("O<1>"));n.n();){j=m.gt()
if(j.ay===l&&j.d===B.G){i=A.j(r.$1(j.f))
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
q.push(i+" on "+(""+j.c+" "+h+g))}}n=c.ay
f=n==null?e:d.h(0,n)
d=c.w
n=A.cs(d,s)
m=c.x
d=m.J(0,d)?"":" ("+A.cs(m,s)+", Singapore date)"
o=new A.xp(a).$1(o)
m=c.z
if(m==null)m=""
k=c.e===B.j?"Money out":"Money in"
j=A.j(r.$1(c.f))
i=c.d
if(i==null)i="To file"
else{i=B.ay.h(0,i)
i.toString}i=A.c([new A.r("Date",n+d),new A.r("Account",o),new A.r("Payee",m),new A.r("Amount",k+", "+j),new A.r("Filed as",i)],t.I)
d=c.Q
if(d!=null){o=A.a6(a.d,t.N,t.G).h(0,d)
o=o==null?e:o.c
i.push(new A.r("Category",A.hC(o==null?d:o)))}d=c.as
if(d!=null)i.push(new A.r("For",A.Ap(a,d)))
switch(A.jH(c)){case B.dX:d="Posted: a statement shows it"
break
case B.ak:d="From an alert, no statement has posted it yet"
break
case null:case void 0:d=c.y.d?"Verified":"Not verified"
break
default:d=e}i.push(new A.r("State",d))
i.push(new A.r("Came from",A.G2(c.y.a)))
if(p.length!==0)i.push(new A.r("The same payment, also as",B.a.Z(p,"; ")))
if(f!=null){d=f.z
if(d==null)d=""
i.push(new A.r("Refund of",d+" "+A.j(r.$1(f.f))+" on "+A.cs(f.w,s)))}if(q.length!==0)i.push(new A.r("Refunded",B.a.Z(q,"; ")))
if(A.a6(a.rx,t.N,t.y6).D(l))i.push(B.ln)
d=c.db
i.push(new A.r("Note",d==null?"":d))
return i},
dZ:function dZ(a,b,c){this.c=a
this.a=b
this.b=c},
dY:function dY(a,b,c){this.c=a
this.a=b
this.b=c},
cp:function cp(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lE:function lE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ua:function ua(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xl:function xl(){},
xk:function xk(a){this.a=a},
xm:function xm(a){this.a=a},
xn:function xn(a){this.a=a},
xj:function xj(a){this.a=a},
xo:function xo(a){this.a=a},
xp:function xp(a){this.a=a},
G8(a){return v.mangledGlobalNames[a]},
my(a){var s,r=$.bm()
for(s=a.length-1;s>=0;--s)r=r.b_(0,8).C(0,A.aL(a[s]))
return r},
Ll(a,b){var s,r,q
for(s=a,r=0;r<32;++r){q=$.GZ()
s.toString
q=q.dk(0,s).aE(0)
b.$flags&2&&A.E(b)
if(!(r<32))return A.a(b,r)
b[r]=q
s=s.c2(0,8)}if(!J.a2(s,$.bm()))throw A.l(A.x(a,null,null))
return b},
vX(a){switch(B.d.T(a.length,4)){case 1:return B.B.O(a+"===")
case 2:return B.B.O(a+"==")
case 3:return B.B.O(a+"=")
default:return B.B.O(a)}},
mx(a){var s,r,q
t.D.i("bf.S").a(a)
s=B.eh.gaI().O(a)
r=s.length
for(;q=r-1,B.b.c3(s,"=",q);r=q);return B.b.X(s,0,r)},
xU(a,b,c){var s=0,r=A.J(t.l2),q
var $async$xU=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.decrypt(a,b,c)),t.i),$async$xU)
case 3:q=e
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$xU,r)},
mA(a,b,c){var s=0,r=A.J(t.p),q,p
var $async$mA=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.deriveBits(a,b,c)),t.i),$async$mA)
case 3:q=p.iE(e,0,null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mA,r)},
xW(a,b){var s=0,r=A.J(t.l2),q
var $async$xW=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.digest(a,b)),t.i),$async$xW)
case 3:q=d
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$xW,r)},
y5(a,b,c){var s=0,r=A.J(t.l2),q
var $async$y5=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.encrypt(a,b,c)),t.i),$async$y5)
case 3:q=e
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$y5,r)},
mC(a){var s=0,r=A.J(t.m),q,p
var $async$mC=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=A
s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.exportKey("jwk",a)),t.X),$async$mC)
case 3:q=p.z(c)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mC,r)},
mE(a,b,c){var s=0,r=A.J(t.m),q,p
var $async$mE=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.generateKey(a,b,c)),t.X),$async$mE)
case 3:q=p.z(e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mE,r)},
jE(a,b,c,d){var s=0,r=A.J(t.m),q,p
var $async$jE=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.t(A.bI(A.Fg(v.G.crypto.subtle,"importKey",["jwk",a,b,c,d],p),p),$async$jE)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$jE,r)},
hE(a,b,c,d){var s=0,r=A.J(t.m),q,p
var $async$hE=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.t(A.bI(A.Fg(v.G.crypto.subtle,"importKey",["raw",a,b,c,d],p),p),$async$hE)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hE,r)},
bG(a){if(t.p.b(a))return a
return new Uint8Array(A.aH(a))},
mJ(a,b,c){var s=0,r=A.J(t.p),q,p
var $async$mJ=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.sign(a,b,c)),t.i),$async$mJ)
case 3:q=p.iE(e,0,null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mJ,r)},
Bh(a,b,c,d){var s=0,r=A.J(t.y),q
var $async$Bh=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:s=3
return A.t(A.bI(A.z(v.G.crypto.subtle.verify(a,b,c,d)),t.y),$async$Bh)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$Bh,r)},
k0(a,b,c,d,e,f){var s=0,r=A.J(t.m),q,p,o,n,m
var $async$k0=A.K(function(g,h){if(g===1)return A.G(h,r)
for(;;)switch(s){case 0:s=3
return A.t(a.cH(),$async$k0)
case 3:n=h
m=J.aD(n)
if(m!==e)throw A.l(A.HX(m,e))
p=A.bG(n)
o=A.c([],t.s)
if(c)o.push("encrypt")
if(b)o.push("decrypt")
q=A.hE(p,f,!1,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$k0,r)},
HX(a,b){return new A.cc(!1,null,null,"Secret key is "+a*8+" bits, expected "+b*8+" bits.")},
ca(e6,e7,e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=65536,e5=e8.length
if(0>=e5)return A.a(e8,0)
s=e8[0]
if(1>=e5)return A.a(e8,1)
r=e8[1]
if(2>=e5)return A.a(e8,2)
q=e8[2]
if(3>=e5)return A.a(e8,3)
p=e8[3]
if(4>=e5)return A.a(e8,4)
o=e8[4]
if(5>=e5)return A.a(e8,5)
n=e8[5]
if(6>=e5)return A.a(e8,6)
m=e8[6]
if(7>=e5)return A.a(e8,7)
l=e8[7]
if(8>=e5)return A.a(e8,8)
k=e8[8]
if(9>=e5)return A.a(e8,9)
j=e8[9]
if(10>=e5)return A.a(e8,10)
i=e8[10]
if(11>=e5)return A.a(e8,11)
h=e8[11]
if(12>=e5)return A.a(e8,12)
g=e8[12]
if(13>=e5)return A.a(e8,13)
f=e8[13]
if(14>=e5)return A.a(e8,14)
e=e8[14]
if(15>=e5)return A.a(e8,15)
d=e8[15]
e5=e7.length
if(0>=e5)return A.a(e7,0)
c=e7[0]
if(1>=e5)return A.a(e7,1)
b=e7[1]
if(2>=e5)return A.a(e7,2)
a=e7[2]
if(3>=e5)return A.a(e7,3)
a0=e7[3]
if(4>=e5)return A.a(e7,4)
a1=e7[4]
if(5>=e5)return A.a(e7,5)
a2=e7[5]
if(6>=e5)return A.a(e7,6)
a3=e7[6]
if(7>=e5)return A.a(e7,7)
a4=e7[7]
if(8>=e5)return A.a(e7,8)
a5=e7[8]
if(9>=e5)return A.a(e7,9)
a6=e7[9]
if(10>=e5)return A.a(e7,10)
a7=e7[10]
if(11>=e5)return A.a(e7,11)
a8=e7[11]
if(12>=e5)return A.a(e7,12)
a9=e7[12]
if(13>=e5)return A.a(e7,13)
b0=e7[13]
if(14>=e5)return A.a(e7,14)
b1=e7[14]
if(15>=e5)return A.a(e7,15)
b2=e7[15]
b3=c*s+38*(b*d+a*e+a0*f+a1*g+a2*h+a3*i+a4*j+a5*k+a6*l+a7*m+a8*n+a9*o+b0*p+b1*q+b2*r)+1+65535
b4=B.d.u(b3,e4)
b5=c*r+b*s+38*(a*d+a0*e+a1*f+a2*g+a3*h+a4*i+a5*j+a6*k+a7*l+a8*m+a9*n+b0*o+b1*p+b2*q)+b4+65535
b6=B.d.u(b5,e4)
b7=c*q+b*r+a*s+38*(a0*d+a1*e+a2*f+a3*g+a4*h+a5*i+a6*j+a7*k+a8*l+a9*m+b0*n+b1*o+b2*p)+b6+65535
b8=B.d.u(b7,e4)
b9=c*p+b*q+a*r+a0*s+38*(a1*d+a2*e+a3*f+a4*g+a5*h+a6*i+a7*j+a8*k+a9*l+b0*m+b1*n+b2*o)+b8+65535
c0=B.d.u(b9,e4)
c1=c*o+b*p+a*q+a0*r+a1*s+38*(a2*d+a3*e+a4*f+a5*g+a6*h+a7*i+a8*j+a9*k+b0*l+b1*m+b2*n)+c0+65535
c2=B.d.u(c1,e4)
c3=c*n+b*o+a*p+a0*q+a1*r+a2*s+38*(a3*d+a4*e+a5*f+a6*g+a7*h+a8*i+a9*j+b0*k+b1*l+b2*m)+c2+65535
c4=B.d.u(c3,e4)
c5=c*m+b*n+a*o+a0*p+a1*q+a2*r+a3*s+38*(a4*d+a5*e+a6*f+a7*g+a8*h+a9*i+b0*j+b1*k+b2*l)+c4+65535
c6=B.d.u(c5,e4)
c7=c*l+b*m+a*n+a0*o+a1*p+a2*q+a3*r+a4*s+38*(a5*d+a6*e+a7*f+a8*g+a9*h+b0*i+b1*j+b2*k)+c6+65535
c8=B.d.u(c7,e4)
c9=c*k+b*l+a*m+a0*n+a1*o+a2*p+a3*q+a4*r+a5*s+38*(a6*d+a7*e+a8*f+a9*g+b0*h+b1*i+b2*j)+c8+65535
d0=B.d.u(c9,e4)
d1=c*j+b*k+a*l+a0*m+a1*n+a2*o+a3*p+a4*q+a5*r+a6*s+38*(a7*d+a8*e+a9*f+b0*g+b1*h+b2*i)+d0+65535
d2=B.d.u(d1,e4)
d3=c*i+b*j+a*k+a0*l+a1*m+a2*n+a3*o+a4*p+a5*q+a6*r+a7*s+38*(a8*d+a9*e+b0*f+b1*g+b2*h)+d2+65535
d4=B.d.u(d3,e4)
d5=c*h+b*i+a*j+a0*k+a1*l+a2*m+a3*n+a4*o+a5*p+a6*q+a7*r+a8*s+38*(a9*d+b0*e+b1*f+b2*g)+d4+65535
d6=B.d.u(d5,e4)
d7=c*g+b*h+a*i+a0*j+a1*k+a2*l+a3*m+a4*n+a5*o+a6*p+a7*q+a8*r+a9*s+38*(b0*d+b1*e+b2*f)+d6+65535
d8=B.d.u(d7,e4)
d9=c*f+b*g+a*h+a0*i+a1*j+a2*k+a3*l+a4*m+a5*n+a6*o+a7*p+a8*q+a9*r+b0*s+38*(b1*d+b2*e)+d8+65535
e0=B.d.u(d9,e4)
e1=c*e+b*f+a*g+a0*h+a1*i+a2*j+a3*k+a4*l+a5*m+a6*n+a7*o+a8*p+a9*q+b0*r+b1*s+38*(b2*d)+e0+65535
e2=B.d.u(e1,e4)
c=c*d+b*e+a*f+a0*g+a1*h+a2*i+a3*j+a4*k+a5*l+a6*m+a7*n+a8*o+a9*p+b0*q+b1*r+b2*s+e2+65535
e3=B.d.u(c,e4)
b=b3-b4*65536+38*(e3-1)+1+65535
b4=B.d.u(b,e4)
a=b5-b6*65536+b4+65535
b6=B.d.u(a,e4)
a0=b7-b8*65536+b6+65535
b8=B.d.u(a0,e4)
a1=b9-c0*65536+b8+65535
c0=B.d.u(a1,e4)
a2=c1-c2*65536+c0+65535
c2=B.d.u(a2,e4)
a3=c3-c4*65536+c2+65535
c4=B.d.u(a3,e4)
a4=c5-c6*65536+c4+65535
c6=B.d.u(a4,e4)
a5=c7-c8*65536+c6+65535
c8=B.d.u(a5,e4)
a6=c9-d0*65536+c8+65535
d0=B.d.u(a6,e4)
a7=d1-d2*65536+d0+65535
d2=B.d.u(a7,e4)
a8=d3-d4*65536+d2+65535
d4=B.d.u(a8,e4)
a9=d5-d6*65536+d4+65535
d6=B.d.u(a9,e4)
b0=d7-d8*65536+d6+65535
d8=B.d.u(b0,e4)
b1=d9-e0*65536+d8+65535
e0=B.d.u(b1,e4)
b2=e1-e2*65536+e0+65535
e2=B.d.u(b2,e4)
c=c-e3*65536+e2+65535
e3=B.d.u(c,e4)
e6.$flags&2&&A.E(e6)
e5=e6.length
if(0>=e5)return A.a(e6,0)
e6[0]=b-b4*65536+38*(e3-1)
if(1>=e5)return A.a(e6,1)
e6[1]=a-b6*65536
if(2>=e5)return A.a(e6,2)
e6[2]=a0-b8*65536
if(3>=e5)return A.a(e6,3)
e6[3]=a1-c0*65536
if(4>=e5)return A.a(e6,4)
e6[4]=a2-c2*65536
if(5>=e5)return A.a(e6,5)
e6[5]=a3-c4*65536
if(6>=e5)return A.a(e6,6)
e6[6]=a4-c6*65536
if(7>=e5)return A.a(e6,7)
e6[7]=a5-c8*65536
if(8>=e5)return A.a(e6,8)
e6[8]=a6-d0*65536
if(9>=e5)return A.a(e6,9)
e6[9]=a7-d2*65536
if(10>=e5)return A.a(e6,10)
e6[10]=a8-d4*65536
if(11>=e5)return A.a(e6,11)
e6[11]=a9-d6*65536
if(12>=e5)return A.a(e6,12)
e6[12]=b0-d8*65536
if(13>=e5)return A.a(e6,13)
e6[13]=b1-e0*65536
if(14>=e5)return A.a(e6,14)
e6[14]=b2-e2*65536
if(15>=e5)return A.a(e6,15)
e6[15]=c-e3*65536},
CG(a){var s,r
try{s=J.eP(a)
if(s.gaz(a)===$.Hx())s.aO(a,0,s.gq(a),0)}catch(r){}},
xr(a,b){var s,r=a.length,q=r-1,p=a.$flags|0
for(;;){if(!(b!==0&&q>=0))break
if(!(q>=0))return A.a(a,q)
s=a[q]+b
p&2&&A.E(a)
a[q]=s&255
b=s/256|0;--q}},
Cm(a,b){var s,r,q,p,o,n,m=$.ed()
if(m){v.G.window.crypto.getRandomValues(a)
return}b=$.Gu()
for(m=a.length,s=a.$flags|0,r=0;r<m;){q=r+3
p=r+1
if(q<m){o=b.cP(4294967296)
s&2&&A.E(a)
a[r]=o>>>24
if(!(p<m))return A.a(a,p)
a[p]=o>>>16&255
n=r+2
if(!(n<m))return A.a(a,n)
a[n]=o>>>8&255
a[q]=o&255
r+=4}else{q=b.cP(256)
s&2&&A.E(a)
a[r]=q
r=p}}},
c9(a){var s,r,q,p=a.d
if(p===B.x)return"Cash ("+a.e+")"
s=A.C("(\\d{4})$",!0,!1).aj(a.b)
if(s==null)r=null
else{s=s.b
if(1>=s.length)return A.a(s,1)
r=s[1]}q=a.dy
A:{if(B.be===q){p="SRS"
break A}if(q instanceof A.dj){p=q.c+" "+A.j(B.dL.h(0,p))
break A}if(q==null){p=B.dL.h(0,p)
break A}p=null}s=r==null?"":" \u2022\u2022"+r
return a.c+" "+A.j(p)+s},
My(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.M)
for(s=a1.ab.b2(B.bI),r=s.length,q=a1.bW,p=q.d,o=t.N,n=t.ud,m=0;m<s.length;s.length===r||(0,A.m)(s),++m){l=s[m]
k=l.c
j=A.n(k.h(0,"recordId"))
i=A.aA(k.h(0,"date"))
if(j==null||i==null)continue
h=q.gbC().h(0,j)
g=A.a6(p,o,n).h(0,j)
f=h==null
e=f?null:h.x
if(e==null)e=g==null?null:g.z
if(e!=null)d=i.a===e.a&&i.b===e.b&&i.c===e.c
else d=!0
if(d)continue
d=l.b
k=A.n(k.h(0,"text"))
c=i.k(0)
f=f?null:h.gcj()
if(f==null){f=g.e
b=f==null||f.length===0
a=g.b
f=b?g.c.c+", "+a:f+", "+a}B.a.m(a0,new A.W("memory:"+d,B.ac,d,'Memory "'+A.j(k)+'" says '+c+"; "+f+" says "+e.k(0)+". The register is kept; check which is right."))}return a0},
FZ(a){var s=B.b.H(a),r=A.C("^\\d[\\d,]*(\\.\\d+)?$",!0,!1)
if(!r.b.test(s)||B.b.v(s,",."))return null
if(B.b.bF(B.a.ga0(s.split(".")),","))return null
return A.ah(A.a8(s,",",""))},
Fb(a){var s,r,q=B.b.H(a),p=A.C("\\D",!0,!1),o=A.a8(q,p,"")
p=B.a.ga0(q.split("."))
s=A.C("\\D",!0,!1)
r=A.a8(p,s,"")
return!B.b.v(q,",")&&!B.b.v(q,".")&&o.length>=9||r.length>=13},
ax(a){var s,r,q=t.wL,p=A.D(new A.aj(A.c(a.split("-"),t.s),t.aY.a(A.LS()),q),q.i("a5.E"))
q=p.length
if(0>=q)return A.a(p,0)
s=p[0]
if(1>=q)return A.a(p,1)
r=p[1]
if(2>=q)return A.a(p,2)
return new A.B(s,r,p[2])},
FT(a){var s,r,q=A.CC(a)
if(q==null)return null
if(B.b.v(q,"\n")||B.b.v(q,"\r"))return"A note is one line."
if(q.length>200)return"A note is at most 200 characters."
s=$.CU()
r=A.C("[\\s-]",!0,!1)
r=A.a8(q,r,"")
if(s.b.test(r))return"A note may not hold a full number (9 or more digits in a row)."
return null},
CC(a){var s=a==null?null:B.b.H(a)
return s==null||s.length===0?null:s},
MW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="someone removed",f=A.c([],t.M)
for(s=a.bW,r=s.gt(),q=r.length,p=a.p3,o=t.N,n=t.o,m=0;m<r.length;r.length===q||(0,A.m)(r),++m){l=r[m]
if(l.b.d===!0&&l.x==null){k=l.a
j=l.gcj()
i=l.c
if(i==="me")i="Me"
else{i=A.a6(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-expiry:"+k,B.ac,k,j+" for "+i+" has no expiry date. Add it from the document so its reminders can start."))}}for(r=A.DW(s.c,o).a,r=A.e5(r,r.r,A.p(r).c),q=r.$ti.c;r.n();){k=r.d
if(k==null)k=q.a(k)
h=s.gbC().h(0,k)
if(h!=null){j=h.gcj()
i=h.c
if(i==="me")i="Me"
else{i=A.a6(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-source:"+k,B.ac,k,"The file of "+j+" for "+i+" was deleted from SanthIQ/Documents. The copy on this phone is kept."))}}return f},
hF(a){var s,r,q,p=a.toUpperCase()
for(s=0;s<8;++s){r=B.jF[s]
q=r.b
r=A.C(r.a,!0,!1)
if(r.b.test(p))return q}return B.b.H(a)},
hJ(a,b,c,d,e,f,g){var s=0,r=A.J(t.p),q,p,o,n,m,l,k,j,i,h
var $async$hJ=A.K(function(a0,a1){if(a0===1)return A.G(a1,r)
for(;;)switch(s){case 0:m=$.HA()
s=3
return A.t(m.aT(),$async$hJ)
case 3:l=a1
s=4
return A.t(l.bu(),$async$hJ)
case 4:k=a1.a
s=5
return A.t(m.b3(l,b),$async$hJ)
case 5:j=a1
t.D.i("bf.S").a(k)
m=t.N
p=A.T(["formatVersion",1,"deviceId",c,"n",d,"ephemeral",B.K.gaI().O(k)],m,t.X)
m=B.E.O(B.z.bc(A.T(["deviceId",c,"kind","statementPassword","accountId",a,"value",g,"createdAtUtc",e.F().dg()],m,m),null))
o=$.b6().cn()
o=$.b6().cL(o)
o=$.b6().cK(o,32)
n=A.D(k,t.S)
B.a.a1(n,b.a)
i=A
h=p
s=6
return A.t(o.aY(B.E.O("santhiq/sync/secret/v1"),n,j),$async$hJ)
case 6:q=i.hM(h,a1,B.mt,m,f)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hJ,r)},
jF(){var s=0,r=A.J(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$jF=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(A.Mf()){s=1
break}j=v.G
i=A.aS(A.z(j.document).querySelector("#app"))
i.toString
n=i
p=4
s=7
return A.t(A.bI(A.z(A.z(j.window).fetch("config.json",{cache:"no-store"})),t.m),$async$jF)
case 7:m=b
if(!A.cK(m.ok)){j=A.aq("config.json: HTTP "+A.j(A.Cp(m,"status",t.S)))
throw A.l(j)}i=t.N
s=8
return A.t(A.bI(A.z(m.text()),i),$async$jF)
case 8:h=b
g=A.d(A.z(A.z(j.window).location).pathname)
l=A.MU(h,A.d(A.z(A.z(j.window).location).origin)+B.b.X(g,0,B.b.eU(g,"/")+1))
k=new A.l9(A.Nr(A.MH()),A.LR(),l,new A.kD(),B.bT,A.a4(i))
s=9
return A.t(k.ci(),$async$jF)
case 9:A.IF(k).ae()
p=2
s=6
break
case 4:p=3
e=o.pop()
n.textContent="The page could not read its configuration. Start it with tool/web_page.sh."
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$jF,r)}},B={}
var w=[A,J,B]
var $={}
A.BI.prototype={}
J.kJ.prototype={
J(a,b){return a===b},
gP(a){return A.c5(a)},
k(a){return"Instance of '"+A.ld(a)+"'"},
gaz(a){return A.df(A.Cc(this))}}
J.kL.prototype={
k(a){return String(a)},
gP(a){return a?519018:218159},
gaz(a){return A.df(t.y)},
$iay:1,
$ik:1}
J.fY.prototype={
J(a,b){return null==b},
k(a){return"null"},
gP(a){return 0},
$iay:1,
$ibh:1}
J.ik.prototype={$iab:1}
J.eo.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.lb.prototype={}
J.eG.prototype={}
J.dG.prototype={
k(a){var s=a[$.Gd()]
if(s==null)s=a[$.CH()]
if(s==null)return this.ih(a)
return"JavaScript function for "+J.hQ(s)},
$idv:1}
J.fZ.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.h_.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.u.prototype={
dM(a,b){return new A.dm(a,A.L(a).i("@<1>").a3(b).i("dm<1,2>"))},
m(a,b){A.L(a).c.a(b)
a.$flags&1&&A.E(a,29)
a.push(b)},
mc(a,b,c){var s
A.L(a).c.a(c)
a.$flags&1&&A.E(a,"insert",2)
s=a.length
if(b>s)throw A.l(A.ts(b,null))
a.splice(b,0,c)},
c_(a,b){var s=A.L(a)
return new A.o(a,s.i("k(1)").a(b),s.i("o<1>"))},
a1(a,b){var s
A.L(a).i("i<1>").a(b)
a.$flags&1&&A.E(a,"addAll",2)
if(Array.isArray(b)){this.iE(a,b)
return}for(s=J.S(b);s.n();)a.push(s.gt())},
iE(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.l(A.aI(a))
for(r=0;r<s;++r)a.push(b[r])},
ap(a){a.$flags&1&&A.E(a,"clear","clear")
a.length=0},
a2(a,b){var s,r
A.L(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.l(A.aI(a))}},
cM(a,b,c){var s=A.L(a)
return new A.aj(a,s.a3(c).i("1(2)").a(b),s.i("@<1>").a3(c).i("aj<1,2>"))},
Z(a,b){var s,r=A.it(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.j(a[s]))
return r.join(b)},
cd(a){return this.Z(a,"")},
bf(a,b){return A.bF(a,0,A.cM(b,"count",t.S),A.L(a).c)},
b8(a,b){return A.bF(a,b,null,A.L(a).c)},
a5(a,b,c,d){var s,r,q
d.a(b)
A.L(a).a3(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.l(A.aI(a))}return r},
m1(a,b,c){var s,r,q,p=A.L(a)
p.i("k(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.l(A.aI(a))}p=c.$0()
return p},
mk(a,b,c){var s,r,q,p=A.L(a)
p.i("k(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=s-1;r>=0;--r){q=a[r]
if(b.$1(q))return q
if(s!==a.length)throw A.l(A.aI(a))}if(c!=null)return c.$0()
throw A.l(A.ao())},
af(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
aL(a,b,c){if(b<0||b>a.length)throw A.l(A.aK(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.l(A.aK(c,b,a.length,"end",null))
if(b===c)return A.c([],A.L(a))
return A.c(a.slice(b,c),A.L(a))},
du(a,b){return this.aL(a,b,null)},
dm(a,b,c){A.bQ(b,c,a.length)
return A.bF(a,b,c,A.L(a).c)},
ga0(a){if(a.length>0)return a[0]
throw A.l(A.ao())},
gau(a){var s=a.length
if(s>0)return a[s-1]
throw A.l(A.ao())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.a(a,0)
return a[0]}if(s===0)throw A.l(A.ao())
throw A.l(A.Dr())},
aV(a,b,c,d,e){var s,r,q,p
A.L(a).i("i<1>").a(d)
a.$flags&2&&A.E(a,5)
A.bQ(b,c,a.length)
s=c-b
if(s===0)return
A.ba(e,"skipCount")
r=A.p(d)
r=A.f_(J.hP(d.a,e),r.c,r.y[1])
r=A.D(r,A.p(r).i("i.E"))
r.$flags=1
q=r
if(s>q.length)throw A.l(A.Dq())
if(0<b)for(p=s-1;p>=0;--p){if(!(p>=0&&p<q.length))return A.a(q,p)
a[b+p]=q[p]}else for(p=0;p<s;++p){if(!(p>=0&&p<q.length))return A.a(q,p)
a[b+p]=q[p]}},
aO(a,b,c,d){var s
A.L(a).i("1?").a(d)
a.$flags&2&&A.E(a,"fillRange")
A.bQ(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
N(a,b){var s,r
A.L(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.l(A.aI(a))}return!1},
b5(a,b){var s,r
A.L(a).i("k(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.l(A.aI(a))}return!0},
ghA(a){return new A.aP(a,A.L(a).i("aP<1>"))},
E(a,b){var s,r,q,p,o,n=A.L(a)
n.i("e(1,1)?").a(b)
a.$flags&2&&A.E(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Ks()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.b7()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fE(b,2))
if(p>0)this.kd(a,p)},
b9(a){return this.E(a,null)},
kd(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bX(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.a2(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.a2(a[s],b))return!0
return!1},
ga4(a){return a.length===0},
gan(a){return a.length!==0},
k(a){return A.BG(a,"[","]")},
e4(a){return A.BN(a,A.L(a).c)},
gB(a){return new J.eW(a,a.length,A.L(a).i("eW<1>"))},
gP(a){return A.c5(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.E(a,"set length","change the length of")
if(b<0)throw A.l(A.aK(b,0,null,"newLength",null))
if(b>a.length)A.L(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.l(A.xV(a,b))
return a[b]},
j(a,b,c){A.L(a).c.a(c)
a.$flags&2&&A.E(a)
if(!(b>=0&&b<a.length))throw A.l(A.xV(a,b))
a[b]=c},
eR(a,b){var s
A.L(a).i("k(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaz(a){return A.df(A.L(a))},
$ibv:1,
$iU:1,
$ii:1,
$iA:1}
J.kK.prototype={
mT(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ld(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.nW.prototype={}
J.eW.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.m(q)
throw A.l(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iam:1}
J.fb.prototype={
l(a,b){var s
A.v9(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdc(b)
if(this.gdc(a)===s)return 0
if(this.gdc(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdc(a){return a===0?1/a<0:a<0},
aE(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.l(A.az(""+a+".toInt()"))},
h4(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.l(A.az(""+a+".ceil()"))},
m2(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.l(A.az(""+a+".floor()"))},
f5(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.l(A.az(""+a+".round()"))},
mL(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
l9(a,b,c){if(B.d.l(b,c)>0)throw A.l(A.eO(b))
if(this.l(a,b)<0)return b
if(this.l(a,c)>0)return c
return a},
by(a,b){var s
if(b>20)throw A.l(A.aK(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gdc(a))return"-"+s
return s},
bI(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.l(A.aK(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.h(A.az("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a_("0",o)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
T(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aA(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fR(a,b)},
u(a,b){return(a|0)===a?a/b|0:this.fR(a,b)},
fR(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.l(A.az("Result of truncating division is "+A.j(s)+": "+A.j(a)+" ~/ "+b))},
b_(a,b){if(b<0)throw A.l(A.eO(b))
return b>31?0:a<<b>>>0},
kw(a,b){return b>31?0:a<<b>>>0},
c2(a,b){var s
if(b<0)throw A.l(A.eO(b))
if(a>0)s=this.eC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
am(a,b){var s
if(a>0)s=this.eC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dH(a,b){if(0>b)throw A.l(A.eO(b))
return this.eC(a,b)},
eC(a,b){return b>31?0:a>>>b},
b7(a,b){return a>b},
gaz(a){return A.df(t.r)},
$iaY:1,
$iV:1,
$ibH:1}
J.ij.prototype={
gbS(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.u(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaz(a){return A.df(t.S)},
$iay:1,
$ie:1}
J.kM.prototype={
gaz(a){return A.df(t.pR)},
$iay:1}
J.dF.prototype={
d3(a,b,c){var s=b.length
if(c>s)throw A.l(A.aK(c,0,s,null,null))
return new A.ml(b,a,c)},
aM(a,b){return this.d3(a,b,0)},
hk(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.l(A.aK(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.a(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.hk(c,a)},
bF(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ac(a,r-s)},
f4(a,b,c){A.DP(0,0,a.length,"startIndex")
return A.G5(a,b,c,0)},
bN(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.en){s=b.e
s=!(s==null?b.e=b.j3():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.j6(a,b)}},
hz(a,b,c,d){var s=A.bQ(b,c,a.length)
return A.CF(a,b,s,d)},
j6(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.CY(b,a),s=s.gB(s),r=0,q=1;s.n();){p=s.gt()
o=p.gds()
n=p.gca()
q=n-o
if(q===0&&r===o)continue
B.a.m(m,this.X(a,r,o))
r=n}if(r<a.length||q>0)B.a.m(m,this.ac(a,r))
return m},
c3(a,b,c){var s
t.cL.a(b)
if(c<0||c>a.length)throw A.l(A.aK(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.HM(b,a,c)!=null},
ak(a,b){return this.c3(a,b,0)},
X(a,b,c){return a.substring(b,A.bQ(b,c,a.length))},
ac(a,b){return this.X(a,b,null)},
H(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.Io(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.Ip(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.l(B.ex)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aa(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a_(c,s)+a},
my(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.a_(c,s)},
cb(a,b,c){var s=a.length
if(c>s)throw A.l(A.aK(c,0,s,null,null))
s=a.indexOf(b,c)
return s},
bX(a,b){return this.cb(a,b,0)},
eU(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
v(a,b){return A.Nh(a,b,0)},
l(a,b){var s
A.d(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gP(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaz(a){return A.df(t.N)},
gq(a){return a.length},
$ibv:1,
$iay:1,
$iaY:1,
$ifj:1,
$if:1}
A.j8.prototype={
m(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.L.a(b)
s=J.ar(b)
r=s.gq(b)
if(r===0)return
q=i.a+r
p=i.b
o=p.length
if(o<q){n=q*2
if(n<1024)n=1024
else{m=n-1
m|=B.d.am(m,1)
m|=m>>>2
m|=m>>>4
m|=m>>>8
n=((m|m>>>16)>>>0)+1}l=new Uint8Array(n)
B.i.bk(l,0,o,p)
i.b=l
p=l}if(t.p.b(b))B.i.bk(p,i.a,q,b)
else for(k=0;k<r;++k){p=i.b
o=i.a+k
j=s.h(b,k)
p.$flags&2&&A.E(p)
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=j}i.a=q},
hC(){var s=this
if(s.a===0)return $.jK()
return new Uint8Array(A.aH(J.bq(B.i.ga9(s.b),s.b.byteOffset,s.a)))},
gq(a){return this.a},
$iBv:1}
A.hr.prototype={
m(a,b){var s
t.L.a(b)
s=t.p.b(b)?b:new Uint8Array(A.aH(b))
B.a.m(this.b,s)
this.a=this.a+s.length},
f7(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.jK()
s=l.b
r=s.length
if(r===1){if(0>=r)return A.a(s,0)
q=s[0]
l.a=0
B.a.ap(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.m)(s),++o,p=m){n=s[o]
m=p+n.length
B.i.bk(q,p,m,n)}l.a=0
B.a.ap(s)
return q},
hC(){var s,r,q,p,o,n,m=this.a
if(m===0)return $.jK()
s=new Uint8Array(m)
for(m=this.b,r=m.length,q=0,p=0;p<m.length;m.length===r||(0,A.m)(m),++p,q=n){o=m[p]
n=q+o.length
B.i.bk(s,q,n,o)}return s},
gq(a){return this.a},
$iBv:1}
A.eH.prototype={
gB(a){return new A.hY(J.S(this.gbb()),A.p(this).i("hY<1,2>"))},
gq(a){return J.aD(this.gbb())},
ga4(a){return J.jP(this.gbb())},
gan(a){return J.D0(this.gbb())},
b8(a,b){var s=A.p(this)
return A.f_(J.hP(this.gbb(),b),s.c,s.y[1])},
bf(a,b){var s=A.p(this)
return A.f_(J.mP(this.gbb(),b),s.c,s.y[1])},
af(a,b){return A.p(this).y[1].a(J.jO(this.gbb(),b))},
ga0(a){return A.p(this).y[1].a(J.Br(this.gbb()))},
gau(a){return A.p(this).y[1].a(J.Bs(this.gbb()))},
v(a,b){return J.D_(this.gbb(),b)},
k(a){return J.hQ(this.gbb())}}
A.hY.prototype={
n(){return this.a.n()},
gt(){return this.$ti.y[1].a(this.a.gt())},
$iam:1}
A.eZ.prototype={
gbb(){return this.a}}
A.j9.prototype={$iU:1}
A.j7.prototype={
h(a,b){return this.$ti.y[1].a(J.as(this.a,b))},
j(a,b,c){var s=this.$ti
J.CX(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.HN(this.a,b)},
m(a,b){var s=this.$ti
J.bU(this.a,s.c.a(s.y[1].a(b)))},
E(a,b){var s
this.$ti.i("e(2,2)?").a(b)
s=b==null?null:new A.uw(this,b)
J.mO(this.a,s)},
dm(a,b,c){var s=this.$ti
return A.f_(J.HL(this.a,b,c),s.c,s.y[1])},
aV(a,b,c,d,e){var s=this.$ti
J.HO(this.a,b,c,A.f_(s.i("i<2>").a(d),s.y[1],s.c),e)},
bk(a,b,c,d){return this.aV(0,b,c,d,0)},
aO(a,b,c,d){var s=this.$ti
J.HI(this.a,b,c,s.c.a(s.i("2?").a(d)))},
$iU:1,
$iA:1}
A.uw.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("e(1,1)")}}
A.dm.prototype={
dM(a,b){return new A.dm(this.a,this.$ti.i("@<1>").a3(b).i("dm<1,2>"))},
gbb(){return this.a}}
A.f0.prototype={
G(a,b,c){return new A.f0(this.a,this.$ti.i("@<1,2>").a3(b).a3(c).i("f0<1,2,3,4>"))},
D(a){return this.a.D(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
Y(a,b){return this.$ti.i("4?").a(this.a.Y(0,b))},
a2(a,b){this.a.a2(0,new A.ne(this,this.$ti.i("~(3,4)").a(b)))},
gag(){var s=this.$ti
return A.f_(this.a.gag(),s.c,s.y[2])},
gS(){var s=this.$ti
return A.f_(this.a.gS(),s.y[1],s.y[3])},
gq(a){var s=this.a
return s.gq(s)},
ga4(a){var s=this.a
return s.ga4(s)},
gan(a){var s=this.a
return s.gan(s)},
gbs(){return this.a.gbs().cM(0,new A.nd(this),this.$ti.i("ap<3,4>"))}}
A.ne.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.nd.prototype={
$1(a){var s=this.a.$ti
s.i("ap<1,2>").a(a)
return new A.ap(s.y[2].a(a.a),s.y[3].a(a.b),s.i("ap<3,4>"))},
$S(){return this.a.$ti.i("ap<3,4>(ap<1,2>)")}}
A.fg.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.k9.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.tP.prototype={}
A.U.prototype={}
A.a5.prototype={
gB(a){var s=this
return new A.ad(s,s.gq(s),A.p(s).i("ad<a5.E>"))},
ga4(a){return this.gq(this)===0},
ga0(a){if(this.gq(this)===0)throw A.l(A.ao())
return this.af(0,0)},
gau(a){var s=this
if(s.gq(s)===0)throw A.l(A.ao())
return s.af(0,s.gq(s)-1)},
v(a,b){var s,r=this,q=r.gq(r)
for(s=0;s<q;++s){if(J.a2(r.af(0,s),b))return!0
if(q!==r.gq(r))throw A.l(A.aI(r))}return!1},
N(a,b){var s,r,q=this
A.p(q).i("k(a5.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.af(0,r)))return!0
if(s!==q.gq(q))throw A.l(A.aI(q))}return!1},
m0(a,b){var s,r,q,p=this
A.p(p).i("k(a5.E)").a(b)
s=p.gq(p)
for(r=0;r<s;++r){q=p.af(0,r)
if(b.$1(q))return q
if(s!==p.gq(p))throw A.l(A.aI(p))}throw A.l(A.ao())},
Z(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.j(p.af(0,0))
if(o!==p.gq(p))throw A.l(A.aI(p))
for(r=s,q=1;q<o;++q){r=r+b+A.j(p.af(0,q))
if(o!==p.gq(p))throw A.l(A.aI(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.j(p.af(0,q))
if(o!==p.gq(p))throw A.l(A.aI(p))}return r.charCodeAt(0)==0?r:r}},
cd(a){return this.Z(0,"")},
cM(a,b,c){var s=A.p(this)
return new A.aj(this,s.a3(c).i("1(a5.E)").a(b),s.i("@<a5.E>").a3(c).i("aj<1,2>"))},
e2(a,b){var s,r,q,p=this
A.p(p).i("a5.E(a5.E,a5.E)").a(b)
s=p.gq(p)
if(s===0)throw A.l(A.ao())
r=p.af(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.af(0,q))
if(s!==p.gq(p))throw A.l(A.aI(p))}return r},
a5(a,b,c,d){var s,r,q,p=this
d.a(b)
A.p(p).a3(d).i("1(1,a5.E)").a(c)
s=p.gq(p)
for(r=b,q=0;q<s;++q){r=c.$2(r,p.af(0,q))
if(s!==p.gq(p))throw A.l(A.aI(p))}return r},
b8(a,b){return A.bF(this,b,null,A.p(this).i("a5.E"))},
bf(a,b){return A.bF(this,0,A.cM(b,"count",t.S),A.p(this).i("a5.E"))}}
A.fr.prototype={
iq(a,b,c,d){var s,r=this.b
A.ba(r,"start")
s=this.c
if(s!=null){A.ba(s,"end")
if(r>s)throw A.l(A.aK(r,0,s,"start",null))}},
gjp(){var s=J.aD(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkA(){var s=J.aD(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aD(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
af(a,b){var s=this,r=s.gkA()+b
if(b<0||r>=s.gjp())throw A.l(A.nO(b,s.gq(0),s,"index"))
return J.jO(s.a,r)},
b8(a,b){var s,r,q=this
A.ba(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ib(q.$ti.i("ib<1>"))
return A.bF(q.a,s,r,q.$ti.c)},
bf(a,b){var s,r,q,p=this
A.ba(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.bF(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.bF(p.a,r,q,p.$ti.c)}},
hE(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ar(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Du(0,n):J.Dt(0,n)}r=A.it(s,m.af(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.j(r,q,m.af(n,o+q))
if(m.gq(n)<l)throw A.l(A.aI(p))}return r}}
A.ad.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.ar(q),o=p.gq(q)
if(r.b!==o)throw A.l(A.aI(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.af(q,s);++r.c
return!0},
$iam:1}
A.c2.prototype={
gB(a){return new A.iv(J.S(this.a),this.b,A.p(this).i("iv<1,2>"))},
gq(a){return J.aD(this.a)},
ga4(a){return J.jP(this.a)},
ga0(a){return this.b.$1(J.Br(this.a))},
gau(a){return this.b.$1(J.Bs(this.a))},
af(a,b){return this.b.$1(J.jO(this.a,b))}}
A.i9.prototype={$iU:1}
A.iv.prototype={
n(){var s=this,r=s.b
if(r.n()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iam:1}
A.aj.prototype={
gq(a){return J.aD(this.a)},
af(a,b){return this.b.$1(J.jO(this.a,b))}}
A.o.prototype={
gB(a){return new A.O(J.S(this.a),this.b,this.$ti.i("O<1>"))}}
A.O.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$iam:1}
A.f4.prototype={
gB(a){return new A.f5(J.S(this.a),this.b,B.bm,this.$ti.i("f5<1,2>"))}}
A.f5.prototype={
gt(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
n(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.n();){q.d=null
if(s.n()){q.c=null
p=J.S(r.$1(s.gt()))
q.c=p}else return!1}q.d=q.c.gt()
return!0},
$iam:1}
A.ft.prototype={
gB(a){var s=this.a
return new A.iZ(s.gB(s),this.b,A.p(this).i("iZ<1>"))}}
A.ia.prototype={
gq(a){var s=this.a,r=s.gq(s)
s=this.b
if(B.d.b7(r,s))return s
return r},
$iU:1}
A.iZ.prototype={
n(){if(--this.b>=0)return this.a.n()
this.b=-1
return!1},
gt(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gt()},
$iam:1}
A.dR.prototype={
b8(a,b){A.ef(b,"count",t.S)
A.ba(b,"count")
return new A.dR(this.a,this.b+b,A.p(this).i("dR<1>"))},
gB(a){var s=this.a
return new A.iV(s.gB(s),this.b,A.p(this).i("iV<1>"))}}
A.fU.prototype={
gq(a){var s=this.a,r=s.gq(s)-this.b
if(r>=0)return r
return 0},
b8(a,b){A.ef(b,"count",t.S)
A.ba(b,"count")
return new A.fU(this.a,this.b+b,this.$ti)},
$iU:1}
A.iV.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gt(){return this.a.gt()},
$iam:1}
A.ib.prototype={
gB(a){return B.bm},
ga4(a){return!0},
gq(a){return 0},
ga0(a){throw A.l(A.ao())},
gau(a){throw A.l(A.ao())},
af(a,b){throw A.l(A.aK(b,0,0,"index",null))},
v(a,b){return!1},
b8(a,b){A.ba(b,"count")
return this},
bf(a,b){A.ba(b,"count")
return this}}
A.ic.prototype={
n(){return!1},
gt(){throw A.l(A.ao())},
$iam:1}
A.j4.prototype={
gB(a){return new A.j5(J.S(this.a),this.$ti.i("j5<1>"))}}
A.j5.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gt()))return!0
return!1},
gt(){return this.$ti.c.a(this.a.gt())},
$iam:1}
A.p9.prototype={
gep(){var s,r,q
for(s=this.a,s=A.e5(s,s.r,A.p(s).c),r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null)return q}return null},
ga4(a){return this.gep()==null},
gan(a){return this.gep()!=null},
ga0(a){var s=this.gep()
return s==null?A.h(A.ao()):s},
gB(a){var s=this.a
return new A.fi(A.e5(s,s.r,A.p(s).c),this.$ti.i("fi<1>"))}}
A.fi.prototype={
n(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gt(){var s=this.b
return s==null?A.h(A.ao()):s},
$iam:1}
A.dA.prototype={
gq(a){return J.aD(this.a)},
ga4(a){return J.jP(this.a)},
gan(a){return J.D0(this.a)},
ga0(a){return new A.r(this.b,J.Br(this.a))},
af(a,b){return new A.r(b+this.b,J.jO(this.a,b))},
v(a,b){return!1},
bf(a,b){A.ef(b,"count",t.S)
A.ba(b,"count")
return new A.dA(J.mP(this.a,b),this.b,A.p(this).i("dA<1>"))},
b8(a,b){A.ef(b,"count",t.S)
A.ba(b,"count")
return new A.dA(J.hP(this.a,b),b+this.b,A.p(this).i("dA<1>"))},
gB(a){return new A.at(J.S(this.a),this.b,A.p(this).i("at<1>"))}}
A.f3.prototype={
gau(a){var s,r=this.a,q=J.ar(r),p=q.gq(r)
if(p<=0)throw A.l(A.ao())
s=q.gau(r)
if(p!==q.gq(r))throw A.l(A.aI(this))
return new A.r(p-1+this.b,s)},
v(a,b){return!1},
bf(a,b){A.ef(b,"count",t.S)
A.ba(b,"count")
return new A.f3(J.mP(this.a,b),this.b,this.$ti)},
b8(a,b){A.ef(b,"count",t.S)
A.ba(b,"count")
return new A.f3(J.hP(this.a,b),this.b+b,this.$ti)},
$iU:1}
A.at.prototype={
n(){if(++this.c>=0&&this.a.n())return!0
this.c=-2
return!1},
gt(){var s=this.c
return s>=0?new A.r(this.b+s,this.a.gt()):A.h(A.ao())},
$iam:1}
A.aU.prototype={
sq(a,b){throw A.l(A.az("Cannot change the length of a fixed-length list"))},
m(a,b){A.aT(a).i("aU.E").a(b)
throw A.l(A.az("Cannot add to a fixed-length list"))}}
A.cq.prototype={
j(a,b,c){A.p(this).i("cq.E").a(c)
throw A.l(A.az("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.l(A.az("Cannot change the length of an unmodifiable list"))},
m(a,b){A.p(this).i("cq.E").a(b)
throw A.l(A.az("Cannot add to an unmodifiable list"))},
E(a,b){A.p(this).i("e(cq.E,cq.E)?").a(b)
throw A.l(A.az("Cannot modify an unmodifiable list"))},
aV(a,b,c,d,e){A.p(this).i("i<cq.E>").a(d)
throw A.l(A.az("Cannot modify an unmodifiable list"))},
bk(a,b,c,d){return this.aV(0,b,c,d,0)},
aO(a,b,c,d){A.p(this).i("cq.E?").a(d)
throw A.l(A.az("Cannot modify an unmodifiable list"))}}
A.hm.prototype={}
A.aP.prototype={
gq(a){return J.aD(this.a)},
af(a,b){var s=this.a,r=J.ar(s)
return r.af(s,r.gq(s)-1-b)}}
A.jz.prototype={}
A.r.prototype={$r:"+(1,2)",$s:1}
A.e7.prototype={$r:"+days,months(1,2)",$s:2}
A.jg.prototype={$r:"+end,loans(1,2)",$s:3}
A.ht.prototype={$r:"+month,year(1,2)",$s:4}
A.bz.prototype={$r:"+(1,2,3)",$s:5}
A.jh.prototype={$r:"+accountId,from,to(1,2,3)",$s:6}
A.eI.prototype={$r:"+(1,2,3,4)",$s:8}
A.ji.prototype={$r:"+complete,month,spent,year(1,2,3,4)",$s:9}
A.jj.prototype={$r:"+(1,2,3,4,5)",$s:10}
A.jk.prototype={$r:"+date,eventId,hash,n,removed(1,2,3,4,5)",$s:11}
A.jl.prototype={$r:"+instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type(1,2,3,4,5,6,7,8)",$s:12}
A.hZ.prototype={}
A.fL.prototype={
G(a,b,c){var s=A.p(this)
return A.DE(this,s.c,s.y[1],b,c)},
ga4(a){return this.gq(this)===0},
gan(a){return this.gq(this)!==0},
k(a){return A.BP(this)},
j(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
A.Dc()},
Y(a,b){A.Dc()},
gbs(){return new A.dd(this.lR(),A.p(this).i("dd<ap<1,2>>"))},
lR(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gbs(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gag(),o=o.gB(o),n=A.p(s),m=n.y[1],n=n.i("ap<1,2>")
case 2:if(!o.n()){r=3
break}l=o.gt()
k=s.h(0,l)
r=4
return a.b=new A.ap(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iaf:1}
A.aZ.prototype={
gq(a){return this.b.length},
gfG(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
D(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.D(b))return null
return this.b[this.a[b]]},
a2(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfG()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gag(){return new A.fx(this.gfG(),this.$ti.i("fx<1>"))},
gS(){return new A.fx(this.b,this.$ti.i("fx<2>"))}}
A.fx.prototype={
gq(a){return this.a.length},
ga4(a){return 0===this.a.length},
gan(a){return 0!==this.a.length},
gB(a){var s=this.a
return new A.e4(s,s.length,this.$ti.i("e4<1>"))}}
A.e4.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iam:1}
A.cj.prototype={
bO(){var s=this,r=s.$map
if(r==null){r=new A.fc(s.$ti.i("fc<1,2>"))
A.Fm(s.a,r)
s.$map=r}return r},
D(a){return this.bO().D(a)},
h(a,b){return this.bO().h(0,b)},
a2(a,b){this.$ti.i("~(1,2)").a(b)
this.bO().a2(0,b)},
gag(){var s=this.bO()
return new A.au(s,A.p(s).i("au<1>"))},
gS(){var s=this.bO()
return new A.N(s,A.p(s).i("N<2>"))},
gq(a){return this.bO().a}}
A.fM.prototype={
m(a,b){A.p(this).c.a(b)
A.Dd()},
a1(a,b){A.p(this).i("i<1>").a(b)
A.Dd()}}
A.cP.prototype={
gq(a){return this.b},
ga4(a){return this.b===0},
gan(a){return this.b!==0},
gB(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.e4(s,s.length,r.$ti.i("e4<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cX.prototype={
gq(a){return this.a.length},
ga4(a){return this.a.length===0},
gan(a){return this.a.length!==0},
gB(a){var s=this.a
return new A.e4(s,s.length,this.$ti.i("e4<1>"))},
bO(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.fc(o.$ti.i("fc<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
n.j(0,p,p)}o.$map=n}return n},
v(a,b){return this.bO().D(b)}}
A.kG.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.f7&&this.a.J(0,b.a)&&A.Cq(this)===A.Cq(b)},
gP(a){return A.bx(this.a,A.Cq(this),B.t,B.t)},
k(a){var s=B.a.Z([A.df(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.f7.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.Mk(A.xE(this.a),this.$ti)}}
A.iR.prototype={}
A.ub.prototype={
bw(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.iI.prototype={
k(a){return"Null check operator used on a null value"}}
A.kN.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lG.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pb.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.id.prototype={}
A.jn.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ieB:1}
A.bL.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.G9(r==null?"unknown":r)+"'"},
$idv:1,
gn2(){return this},
$C:"$1",
$R:1,
$D:null}
A.k7.prototype={$C:"$0",$R:0}
A.k8.prototype={$C:"$2",$R:2}
A.lB.prototype={}
A.ly.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.G9(s)+"'"}}
A.fI.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fI))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.CD(this.a)^A.c5(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ld(this.a)+"'")}}
A.ln.prototype={
k(a){return"RuntimeError: "+this.a}}
A.cx.prototype={
gq(a){return this.a},
ga4(a){return this.a===0},
gan(a){return this.a!==0},
gag(){return new A.au(this,A.p(this).i("au<1>"))},
gS(){return new A.N(this,A.p(this).i("N<2>"))},
gbs(){return new A.ac(this,A.p(this).i("ac<1,2>"))},
D(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.md(a)},
md(a){var s=this.d
if(s==null)return!1
return this.da(this.fC(s,a),a)>=0},
a1(a,b){A.p(this).i("af<1,2>").a(b).a2(0,new A.nY(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.me(b)},
me(a){var s,r,q=this.d
if(q==null)return null
s=this.fC(q,a)
r=this.da(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.p(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fl(s==null?q.b=q.eu():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fl(r==null?q.c=q.eu():r,b,c)}else q.mg(b,c)},
mg(a,b){var s,r,q,p,o=this,n=A.p(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.eu()
r=o.dY(a)
q=s[r]
if(q==null)s[r]=[o.ev(a,b)]
else{p=o.da(q,a)
if(p>=0)q[p].b=b
else q.push(o.ev(a,b))}},
aK(a,b){var s,r,q=this,p=A.p(q)
p.c.a(a)
p.i("2()").a(b)
if(q.D(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
Y(a,b){var s=this
if(typeof b=="string")return s.fM(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fM(s.c,b)
else return s.mf(b)},
mf(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dY(a)
r=n[s]
q=o.da(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fV(p)
if(r.length===0)delete n[s]
return p.b},
ap(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.es()}},
a2(a,b){var s,r,q=this
A.p(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.l(A.aI(q))
s=s.c}},
fl(a,b,c){var s,r=A.p(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ev(b,c)
else s.b=c},
fM(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fV(s)
delete a[b]
return s.b},
es(){this.r=this.r+1&1073741823},
ev(a,b){var s=this,r=A.p(s),q=new A.oZ(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.es()
return q},
fV(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.es()},
dY(a){return J.bZ(a)&1073741823},
fC(a,b){return a[this.dY(b)]},
da(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
k(a){return A.BP(this)},
eu(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iBL:1}
A.nY.prototype={
$2(a,b){var s=this.a,r=A.p(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.p(this.a).i("~(1,2)")}}
A.oZ.prototype={}
A.au.prototype={
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gB(a){var s=this.a
return new A.cy(s,s.r,s.e,this.$ti.i("cy<1>"))},
v(a,b){return this.a.D(b)}}
A.cy.prototype={
gt(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iam:1}
A.N.prototype={
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gB(a){var s=this.a
return new A.a1(s,s.r,s.e,this.$ti.i("a1<1>"))}}
A.a1.prototype={
gt(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iam:1}
A.ac.prototype={
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gB(a){var s=this.a
return new A.ir(s,s.r,s.e,this.$ti.i("ir<1,2>"))}}
A.ir.prototype={
gt(){var s=this.d
s.toString
return s},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.ap(s.a,s.b,r.$ti.i("ap<1,2>"))
r.c=s.c
return!0}},
$iam:1}
A.fc.prototype={
dY(a){return A.LN(a)&1073741823},
da(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1}}
A.yT.prototype={
$1(a){return this.a(a)},
$S:90}
A.yU.prototype={
$2(a,b){return this.a(a,b)},
$S:214}
A.yV.prototype={
$1(a){return this.a(A.d(a))},
$S:63}
A.bj.prototype={
k(a){return this.fU(!1)},
fU(a){var s,r,q,p,o,n=this.js(),m=this.dD(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.DL(o):l+A.j(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
js(){var s,r=this.$s
while($.uV.length<=r)B.a.m($.uV,null)
s=$.uV[r]
if(s==null){s=this.j2()
B.a.j($.uV,r,s)}return s},
j2(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Ds(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.j(j,q,r[s])}}return A.aE(j,k)}}
A.e6.prototype={
dD(){return[this.a,this.b]},
J(a,b){if(b==null)return!1
return b instanceof A.e6&&this.$s===b.$s&&J.a2(this.a,b.a)&&J.a2(this.b,b.b)},
gP(a){return A.bx(this.$s,this.a,this.b,B.t)}}
A.fA.prototype={
dD(){return[this.a,this.b,this.c]},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.fA&&s.$s===b.$s&&J.a2(s.a,b.a)&&J.a2(s.b,b.b)&&J.a2(s.c,b.c)},
gP(a){var s=this
return A.bx(s.$s,s.a,s.b,s.c)}}
A.dc.prototype={
dD(){return this.a},
J(a,b){if(b==null)return!1
return b instanceof A.dc&&this.$s===b.$s&&A.Jx(this.a,b.a)},
gP(a){return A.bx(this.$s,A.DG(this.a),B.t,B.t)}}
A.en.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfI(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.BH(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gjV(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.BH(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
j3(){var s,r=this.a
if(!B.b.v(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
aj(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hs(s)},
m5(a){A.d(a)
return this.b.test(a)},
d3(a,b,c){var s=b.length
if(c>s)throw A.l(A.aK(c,0,s,null,null))
return new A.lK(this,b,c)},
aM(a,b){return this.d3(0,b,0)},
fB(a,b){var s,r=this.gfI()
if(r==null)r=A.de(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hs(s)},
jq(a,b){var s,r=this.gjV()
if(r==null)r=A.de(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hs(s)},
hk(a,b,c){if(c<0||c>b.length)throw A.l(A.aK(c,0,b.length,null,null))
return this.jq(b,c)},
$ifj:1,
$itB:1}
A.hs.prototype={
gds(){return this.b.index},
gca(){var s=this.b
return s.index+s[0].length},
dn(a){var s=this.b
if(!(a<s.length))return A.a(s,a)
return s[a]},
h(a,b){var s=this.b
if(!(b<s.length))return A.a(s,b)
return s[b]},
$icA:1,
$iiO:1}
A.lK.prototype={
gB(a){return new A.fv(this.a,this.b,this.c)}}
A.fv.prototype={
gt(){var s=this.d
return s==null?t.ez.a(s):s},
n(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fB(l,s)
if(p!=null){m.d=p
o=p.gca()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.a(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.a(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iam:1}
A.hk.prototype={
gca(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.l(A.ts(b,null))
return this.c},
dn(a){if(a!==0)A.h(A.ts(a,null))
return this.c},
$icA:1,
gds(){return this.a}}
A.ml.prototype={
gB(a){return new A.mm(this.a,this.b,this.c)},
ga0(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hk(r,s)
throw A.l(A.ao())}}
A.mm.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hk(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$iam:1}
A.lS.prototype={
cv(){var s=this.b
if(s===this)throw A.l(new A.fg("Local '"+this.a+"' has not been initialized."))
return s},
bg(){var s=this.b
if(s===this)throw A.l(A.DA(this.a))
return s}}
A.eq.prototype={
gaz(a){return B.mD},
cC(a,b,c){A.jA(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
h_(a){return this.cC(a,0,null)},
eK(a,b,c){A.jA(a,b,c)
if(c==null)c=B.d.u(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
dK(a,b,c){A.jA(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
fZ(a){return this.dK(a,0,null)},
$iay:1,
$ieq:1,
$ihX:1}
A.h7.prototype={$ih7:1}
A.iA.prototype={
ga9(a){if(((a.$flags|0)&2)!==0)return new A.mp(a.buffer)
else return a.buffer},
jJ(a,b,c,d){var s=A.aK(b,0,c,d,null)
throw A.l(s)},
fq(a,b,c,d){if(b>>>0!==b||b>c)this.jJ(a,b,c,d)}}
A.mp.prototype={
cC(a,b,c){var s=A.iE(this.a,b,c)
s.$flags=3
return s},
h_(a){return this.cC(0,0,null)},
eK(a,b,c){var s=A.IC(this.a,b,c)
s.$flags=3
return s},
dK(a,b,c){var s=A.Ix(this.a,b,c)
s.$flags=3
return s},
fZ(a){return this.dK(0,0,null)},
$ihX:1}
A.iy.prototype={
gaz(a){return B.mE},
$iay:1,
$iD9:1}
A.bw.prototype={
gq(a){return a.length},
fQ(a,b,c,d,e){var s,r,q=a.length
this.fq(a,b,q,"start")
this.fq(a,c,q,"end")
if(b>c)throw A.l(A.aK(b,0,c,null,null))
s=c-b
if(e<0)throw A.l(A.b0(e,null))
r=d.length
if(r-e<s)throw A.l(A.aq("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibv:1,
$ic1:1}
A.er.prototype={
h(a,b){A.e9(b,a,a.length)
return a[b]},
j(a,b,c){A.Ca(c)
a.$flags&2&&A.E(a)
A.e9(b,a,a.length)
a[b]=c},
aV(a,b,c,d,e){t.oJ.a(d)
a.$flags&2&&A.E(a,5)
if(t.Eg.b(d)){this.fQ(a,b,c,d,e)
return}this.fg(a,b,c,d,e)},
bk(a,b,c,d){return this.aV(a,b,c,d,0)},
$iU:1,
$ii:1,
$iA:1}
A.c3.prototype={
j(a,b,c){A.R(c)
a.$flags&2&&A.E(a)
A.e9(b,a,a.length)
a[b]=c},
aV(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.E(a,5)
if(t.Ag.b(d)){this.fQ(a,b,c,d,e)
return}this.fg(a,b,c,d,e)},
bk(a,b,c,d){return this.aV(a,b,c,d,0)},
$iU:1,
$ii:1,
$iA:1}
A.kX.prototype={
gaz(a){return B.mF},
aL(a,b,c){return new Float32Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1}
A.kY.prototype={
gaz(a){return B.mG},
aL(a,b,c){return new Float64Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1}
A.kZ.prototype={
gaz(a){return B.mH},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Int16Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1}
A.iz.prototype={
gaz(a){return B.mI},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Int32Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1,
$ikH:1}
A.l_.prototype={
gaz(a){return B.mJ},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Int8Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1}
A.iB.prototype={
gaz(a){return B.mO},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Uint16Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1,
$iBX:1}
A.iC.prototype={
gaz(a){return B.mP},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Uint32Array(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1,
$iud:1}
A.iD.prototype={
gaz(a){return B.mQ},
gq(a){return a.length},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.eL(b,c,a.length)))},
$iay:1}
A.fh.prototype={
gaz(a){return B.eb},
gq(a){return a.length},
h(a,b){A.e9(b,a,a.length)
return a[b]},
aL(a,b,c){return new Uint8Array(a.subarray(b,A.eL(b,c,a.length)))},
du(a,b){return this.aL(a,b,null)},
$iay:1,
$ifh:1,
$ie1:1}
A.jc.prototype={}
A.jd.prototype={}
A.je.prototype={}
A.jf.prototype={}
A.cD.prototype={
i(a){return A.js(v.typeUniverse,this,a)},
a3(a){return A.Es(v.typeUniverse,this,a)}}
A.m6.prototype={}
A.mo.prototype={
k(a){return A.bS(this.a,null)}}
A.m5.prototype={
k(a){return this.a}}
A.hv.prototype={$ie_:1}
A.ul.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:88}
A.uk.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:215}
A.um.prototype={
$0(){this.a.$0()},
$S:27}
A.un.prototype={
$0(){this.a.$0()},
$S:27}
A.jo.prototype={
is(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.fE(new A.uZ(this,b),0),a)
else throw A.l(A.az("`setTimeout()` not found."))},
it(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.fE(new A.uY(this,a,Date.now(),b),0),a)
else throw A.l(A.az("Periodic timer."))},
h2(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.l(A.az("Canceling a timer."))},
$ilC:1}
A.uZ.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.uY.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.aA(s,o)}q.c=p
r.d.$1(q)},
$S:27}
A.lL.prototype={
cF(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bn(a)
else{s=r.a
if(q.i("b9<1>").b(a))s.fp(a)
else s.ei(a)}},
eM(a,b){var s=this.a
if(this.b)s.cX(new A.bV(a,b))
else s.ed(new A.bV(a,b))}}
A.va.prototype={
$1(a){return this.a.$2(0,a)},
$S:34}
A.vb.prototype={
$2(a,b){this.a.$2(1,new A.id(a,t.l.a(b)))},
$S:190}
A.vG.prototype={
$2(a,b){this.a(A.R(a),b)},
$S:145}
A.e8.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
kg(a,b){var s,r,q
a=A.R(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
n(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.n()){o.b=s.gt()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.kg(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Em
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Em
throw n
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=1
continue}throw A.l(A.aq("sync*"))}return!1},
n3(a){var s,r,q=this
if(a instanceof A.dd){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.S(a)
return 2}},
$iam:1}
A.dd.prototype={
gB(a){return new A.e8(this.a(),this.$ti.i("e8<1>"))}}
A.bV.prototype={
k(a){return A.j(this.a)},
$iaC:1,
gco(){return this.b}}
A.nJ.prototype={
$0(){this.c.a(null)
this.b.fv(null)},
$S:0}
A.lT.prototype={
eM(a,b){var s=this.a
if((s.a&30)!==0)throw A.l(A.aq("Future already completed"))
s.ed(A.Kr(a,b))},
dN(a){return this.eM(a,null)}}
A.cJ.prototype={
cF(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.l(A.aq("Future already completed"))
s.bn(r.i("1/").a(a))},
lb(){return this.cF(null)}}
A.e3.prototype={
mn(a){if((this.c&15)!==6)return!0
return this.b.b.f6(t.bl.a(this.d),a.a,t.y,t.K)},
m4(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mM(q,m,a.b,o,n,t.l)
else p=l.f6(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.aw(s))){if((r.c&1)!==0)throw A.l(A.b0("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.l(A.b0("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.an.prototype={
e3(a,b,c){var s,r,q,p=this.$ti
p.a3(c).i("1/(2)").a(a)
s=$.al
if(s===B.W){if(b!=null&&!t.nW.b(b)&&!t.h_.b(b))throw A.l(A.x(b,"onError",u.w))}else{c.i("@<0/>").a3(p.c).i("1(2)").a(a)
if(b!=null)b=A.KW(b,s)}r=new A.an(s,c.i("an<0>"))
q=b==null?1:3
this.dz(new A.e3(r,q,a,b,p.i("@<1>").a3(c).i("e3<1,2>")))
return r},
mP(a,b){return this.e3(a,null,b)},
fT(a,b,c){var s,r=this.$ti
r.a3(c).i("1/(2)").a(a)
s=new A.an($.al,c.i("an<0>"))
this.dz(new A.e3(s,19,a,b,r.i("@<1>").a3(c).i("e3<1,2>")))
return s},
ku(a){this.a=this.a&1|16
this.c=a},
dC(a){this.a=a.a&30|this.a&1
this.c=a.c},
dz(a){var s,r=this,q=r.a
if(q<=3){a.a=t.f7.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dz(a)
return}r.dC(s)}A.mu(null,null,r.b,t.O.a(new A.uB(r,a)))}},
fK(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.f7.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fK(a)
return}m.dC(n)}l.a=m.dF(a)
A.mu(null,null,m.b,t.O.a(new A.uG(l,m)))}},
d1(){var s=t.f7.a(this.c)
this.c=null
return this.dF(s)},
dF(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fv(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("b9<1>").b(a))A.uE(a,r,!0)
else{s=r.d1()
q.c.a(a)
r.a=8
r.c=a
A.fw(r,s)}},
ei(a){var s,r=this
r.$ti.c.a(a)
s=r.d1()
r.a=8
r.c=a
A.fw(r,s)},
j1(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.d1()
q.dC(a)
A.fw(q,r)},
cX(a){var s=this.d1()
this.ku(a)
A.fw(this,s)},
bn(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("b9<1>").b(a)){this.fp(a)
return}this.iI(a)},
iI(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mu(null,null,s.b,t.O.a(new A.uD(s,a)))},
fp(a){A.uE(this.$ti.i("b9<1>").a(a),this,!1)
return},
ed(a){this.a^=2
A.mu(null,null,this.b,t.O.a(new A.uC(this,a)))},
mQ(a,b){var s,r,q=this,p={},o=q.$ti
o.i("1/()?").a(b)
if((q.a&24)!==0){p=new A.an($.al,o)
p.bn(q)
return p}s=$.al
r=new A.an(s,o)
p.a=null
p.a=A.E1(a,new A.uM(q,r,s,o.i("1/()").a(b)))
q.e3(new A.uN(p,q,r),new A.uO(p,r),t.aU)
return r},
$ib9:1}
A.uB.prototype={
$0(){A.fw(this.a,this.b)},
$S:0}
A.uG.prototype={
$0(){A.fw(this.b,this.a.a)},
$S:0}
A.uF.prototype={
$0(){A.uE(this.a.a,this.b,!0)},
$S:0}
A.uD.prototype={
$0(){this.a.ei(this.b)},
$S:0}
A.uC.prototype={
$0(){this.a.cX(this.b)},
$S:0}
A.uJ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.hB(t.pF.a(q.d),t.z)}catch(p){s=A.aw(p)
r=A.eQ(p)
if(k.c&&t.w.a(k.b.a.c).a===s){q=k.a
q.c=t.w.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mZ(q)
n=k.a
n.c=new A.bV(q,o)
q=n}q.b=!0
return}if(j instanceof A.an&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.w.a(j.c)
q.b=!0}return}if(j instanceof A.an){m=k.b.a
l=new A.an(m.b,m.$ti)
j.e3(new A.uK(l,m),new A.uL(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uK.prototype={
$1(a){this.a.j1(this.b)},
$S:88}
A.uL.prototype={
$2(a,b){A.de(a)
t.l.a(b)
this.a.cX(new A.bV(a,b))},
$S:83}
A.uI.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.f6(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aw(l)
r=A.eQ(l)
q=s
p=r
if(p==null)p=A.mZ(q)
o=this.a
o.c=new A.bV(q,p)
o.b=!0}},
$S:0}
A.uH.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.w.a(l.a.a.c)
p=l.b
if(p.a.mn(s)&&p.a.e!=null){p.c=p.a.m4(s)
p.b=!1}}catch(o){r=A.aw(o)
q=A.eQ(o)
p=t.w.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mZ(p)
m=l.b
m.c=new A.bV(p,n)
p=m}p.b=!0}},
$S:0}
A.uM.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.fv(n.c.hB(n.d,n.a.$ti.i("1/")))}catch(q){s=A.aw(q)
r=A.eQ(q)
p=s
o=r
if(o==null)o=A.mZ(p)
n.b.cX(new A.bV(p,o))}},
$S:0}
A.uN.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.h2()
this.c.ei(a)}},
$S(){return this.b.$ti.i("bh(1)")}}
A.uO.prototype={
$2(a,b){var s
A.de(a)
t.l.a(b)
s=this.a.a
if(s.b!=null){s.h2()
this.b.cX(new A.bV(a,b))}},
$S:83}
A.lM.prototype={}
A.mk.prototype={}
A.jy.prototype={$iE7:1}
A.me.prototype={
mN(a){var s,r,q
t.O.a(a)
try{if(B.W===$.al){a.$0()
return}A.EY(null,null,this,a,t.H)}catch(q){s=A.aw(q)
r=A.eQ(q)
A.vw(A.de(s),t.l.a(r))}},
mO(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.W===$.al){a.$1(b)
return}A.EZ(null,null,this,a,b,t.H,c)}catch(q){s=A.aw(q)
r=A.eQ(q)
A.vw(A.de(s),t.l.a(r))}},
h0(a){return new A.uW(this,t.O.a(a))},
l0(a,b){return new A.uX(this,b.i("~(0)").a(a),b)},
hB(a,b){b.i("0()").a(a)
if($.al===B.W)return a.$0()
return A.EY(null,null,this,a,b)},
f6(a,b,c,d){c.i("@<0>").a3(d).i("1(2)").a(a)
d.a(b)
if($.al===B.W)return a.$1(b)
return A.EZ(null,null,this,a,b,c,d)},
mM(a,b,c,d,e,f){d.i("@<0>").a3(e).a3(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.al===B.W)return a.$2(b,c)
return A.KX(null,null,this,a,b,c,d,e,f)},
hx(a,b,c,d){return b.i("@<0>").a3(c).a3(d).i("1(2,3)").a(a)}}
A.uW.prototype={
$0(){return this.a.mN(this.b)},
$S:0}
A.uX.prototype={
$1(a){var s=this.c
return this.a.mO(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.vx.prototype={
$0(){A.Ib(this.a,this.b)},
$S:0}
A.db.prototype={
gB(a){var s=this,r=new A.fy(s,s.r,A.p(s).i("fy<1>"))
r.c=s.e
return r},
gq(a){return this.a},
ga4(a){return this.a===0},
gan(a){return this.a!==0},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.j4(b)},
j4(a){var s=this.d
if(s==null)return!1
return this.eo(s[this.ej(a)],a)>=0},
ga0(a){var s=this.e
if(s==null)throw A.l(A.aq("No elements"))
return A.p(this).c.a(s.a)},
gau(a){var s=this.f
if(s==null)throw A.l(A.aq("No elements"))
return A.p(this).c.a(s.a)},
m(a,b){var s,r,q=this
A.p(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fs(s==null?q.b=A.C3():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fs(r==null?q.c=A.C3():r,b)}else return q.iD(b)},
iD(a){var s,r,q,p=this
A.p(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.C3()
r=p.ej(a)
q=s[r]
if(q==null)s[r]=[p.eh(a)]
else{if(p.eo(q,a)>=0)return!1
q.push(p.eh(a))}return!0},
Y(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ft(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ft(s.c,b)
else return s.kc(b)},
kc(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ej(a)
r=n[s]
q=o.eo(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fu(p)
return!0},
ap(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eg()}},
fs(a,b){A.p(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.eh(b)
return!0},
ft(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fu(s)
delete a[b]
return!0},
eg(){this.r=this.r+1&1073741823},
eh(a){var s,r=this,q=new A.mb(A.p(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.eg()
return q},
fu(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.eg()},
ej(a){return J.bZ(a)&1073741823},
eo(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
$iDD:1}
A.mb.prototype={}
A.fy.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.l(A.aI(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iam:1}
A.p_.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:177}
A.Q.prototype={
gB(a){return new A.ad(a,this.gq(a),A.aT(a).i("ad<Q.E>"))},
af(a,b){return this.h(a,b)},
ga4(a){return this.gq(a)===0},
gan(a){return!this.ga4(a)},
ga0(a){if(this.gq(a)===0)throw A.l(A.ao())
return this.h(a,0)},
gau(a){if(this.gq(a)===0)throw A.l(A.ao())
return this.h(a,this.gq(a)-1)},
v(a,b){var s,r=this.gq(a)
for(s=0;s<r;++s){if(J.a2(this.h(a,s),b))return!0
if(r!==this.gq(a))throw A.l(A.aI(a))}return!1},
b5(a,b){var s,r
A.aT(a).i("k(Q.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.l(A.aI(a))}return!0},
N(a,b){var s,r
A.aT(a).i("k(Q.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.l(A.aI(a))}return!1},
Z(a,b){var s
if(this.gq(a)===0)return""
s=A.BU("",a,b)
return s.charCodeAt(0)==0?s:s},
c_(a,b){var s=A.aT(a)
return new A.o(a,s.i("k(Q.E)").a(b),s.i("o<Q.E>"))},
cM(a,b,c){var s=A.aT(a)
return new A.aj(a,s.a3(c).i("1(Q.E)").a(b),s.i("@<Q.E>").a3(c).i("aj<1,2>"))},
a5(a,b,c,d){var s,r,q
d.a(b)
A.aT(a).a3(d).i("1(1,Q.E)").a(c)
s=this.gq(a)
for(r=b,q=0;q<s;++q){r=c.$2(r,this.h(a,q))
if(s!==this.gq(a))throw A.l(A.aI(a))}return r},
b8(a,b){return A.bF(a,b,null,A.aT(a).i("Q.E"))},
bf(a,b){return A.bF(a,0,A.cM(b,"count",t.S),A.aT(a).i("Q.E"))},
e4(a){var s,r=A.BM(A.aT(a).i("Q.E"))
for(s=0;s<this.gq(a);++s)r.m(0,this.h(a,s))
return r},
m(a,b){var s
A.aT(a).i("Q.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.j(a,s,b)},
dM(a,b){return new A.dm(a,A.aT(a).i("@<Q.E>").a3(b).i("dm<1,2>"))},
E(a,b){var s,r=A.aT(a)
r.i("e(Q.E,Q.E)?").a(b)
s=b==null?A.LH():b
A.lt(a,0,this.gq(a)-1,s,r.i("Q.E"))},
aL(a,b,c){var s,r=this.gq(a)
A.bQ(b,c,r)
s=A.D(this.dm(a,b,c),A.aT(a).i("Q.E"))
return s},
dm(a,b,c){A.bQ(b,c,this.gq(a))
return A.bF(a,b,c,A.aT(a).i("Q.E"))},
aO(a,b,c,d){var s
A.aT(a).i("Q.E?").a(d)
A.bQ(b,c,this.gq(a))
for(s=b;s<c;++s)this.j(a,s,d)},
aV(a,b,c,d,e){var s,r,q,p,o
A.aT(a).i("i<Q.E>").a(d)
A.bQ(b,c,this.gq(a))
s=c-b
if(s===0)return
A.ba(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.hP(d,e).hE(0,!1)
r=0}p=J.ar(q)
if(r+s>p.gq(q))throw A.l(A.Dq())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
bk(a,b,c,d){return this.aV(a,b,c,d,0)},
cb(a,b,c){var s
if(c<0)c=0
for(s=c;s<this.gq(a);++s)if(J.a2(this.h(a,s),b))return s
return-1},
bX(a,b){return this.cb(a,b,0)},
aZ(a,b,c){var s,r
A.aT(a).i("i<Q.E>").a(c)
if(t.j.b(c))this.bk(a,b,b+J.aD(c),c)
else for(s=J.S(c);s.n();b=r){r=b+1
this.j(a,b,s.gt())}},
ghA(a){return new A.aP(a,A.aT(a).i("aP<Q.E>"))},
k(a){return A.BG(a,"[","]")},
$iU:1,
$ii:1,
$iA:1}
A.a9.prototype={
G(a,b,c){var s=A.p(this)
return A.DE(this,s.i("a9.K"),s.i("a9.V"),b,c)},
a2(a,b){var s,r,q,p=A.p(this)
p.i("~(a9.K,a9.V)").a(b)
for(s=this.gag(),s=s.gB(s),p=p.i("a9.V");s.n();){r=s.gt()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
aK(a,b){var s,r=this,q=A.p(r)
q.i("a9.K").a(a)
q.i("a9.V()").a(b)
if(r.D(a)){s=r.h(0,a)
return s==null?q.i("a9.V").a(s):s}q=b.$0()
r.j(0,a,q)
return q},
mU(a,b,c){var s,r=this,q=A.p(r)
q.i("a9.K").a(a)
q.i("a9.V(a9.V)").a(b)
q.i("a9.V()?").a(c)
if(r.D(a)){s=r.h(0,a)
q=b.$1(s==null?q.i("a9.V").a(s):s)
r.j(0,a,q)
return q}if(c!=null){q=c.$0()
r.j(0,a,q)
return q}throw A.l(A.x(a,"key","Key not in map."))},
gbs(){return this.gag().cM(0,new A.p2(this),A.p(this).i("ap<a9.K,a9.V>"))},
mJ(a,b){var s,r,q,p,o,n=this,m=A.p(n)
m.i("k(a9.K,a9.V)").a(b)
s=A.c([],m.i("u<a9.K>"))
for(r=n.gag(),r=r.gB(r),m=m.i("a9.V");r.n();){q=r.gt()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.a.m(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.m)(s),++o)n.Y(0,s[o])},
D(a){return this.gag().v(0,a)},
gq(a){var s=this.gag()
return s.gq(s)},
ga4(a){var s=this.gag()
return s.ga4(s)},
gan(a){var s=this.gag()
return s.gan(s)},
gS(){return new A.ja(this,A.p(this).i("ja<a9.K,a9.V>"))},
k(a){return A.BP(this)},
$iaf:1}
A.p2.prototype={
$1(a){var s=this.a,r=A.p(s)
r.i("a9.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a9.V").a(s)
return new A.ap(a,s,r.i("ap<a9.K,a9.V>"))},
$S(){return A.p(this.a).i("ap<a9.K,a9.V>(a9.K)")}}
A.p3.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.j(a)
r.a=(r.a+=s)+": "
s=A.j(b)
r.a+=s},
$S:62}
A.ja.prototype={
gq(a){var s=this.a
return s.gq(s)},
ga4(a){var s=this.a
return s.ga4(s)},
gan(a){var s=this.a
return s.gan(s)},
ga0(a){var s=this.a,r=s.gag()
r=s.h(0,r.ga0(r))
return r==null?this.$ti.y[1].a(r):r},
gau(a){var s=this.a,r=s.gag()
r=s.h(0,r.gau(r))
return r==null?this.$ti.y[1].a(r):r},
gB(a){var s=this.a,r=s.gag()
return new A.jb(r.gB(r),s,this.$ti.i("jb<1,2>"))}}
A.jb.prototype={
n(){var s=this,r=s.a
if(r.n()){s.c=s.b.h(0,r.gt())
return!0}s.c=null
return!1},
gt(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iam:1}
A.jt.prototype={
j(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
throw A.l(A.az("Cannot modify unmodifiable map"))}}
A.h4.prototype={
G(a,b,c){return this.a.G(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.p(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
D(a){return this.a.D(a)},
a2(a,b){this.a.a2(0,A.p(this).i("~(1,2)").a(b))},
ga4(a){var s=this.a
return s.ga4(s)},
gq(a){var s=this.a
return s.gq(s)},
gag(){return this.a.gag()},
k(a){return this.a.k(0)},
gS(){return this.a.gS()},
gbs(){return this.a.gbs()},
$iaf:1}
A.e2.prototype={
G(a,b,c){return new A.e2(this.a.G(0,b,c),b.i("@<0>").a3(c).i("e2<1,2>"))}}
A.cF.prototype={
ga4(a){return this.gq(this)===0},
gan(a){return this.gq(this)!==0},
a1(a,b){var s
for(s=J.S(A.p(this).i("i<1>").a(b));s.n();)this.m(0,s.gt())},
ld(a){var s
for(s=a.gB(a);s.n();)if(!this.v(0,s.gt()))return!1
return!0},
gaQ(a){var s,r=this
if(r.gq(r)>1)throw A.l(A.Dr())
s=r.gB(r)
if(!s.n())throw A.l(A.ao())
return s.gt()},
k(a){return A.BG(this,"{","}")},
b5(a,b){var s
A.p(this).i("k(1)").a(b)
for(s=this.gB(this);s.n();)if(!b.$1(s.gt()))return!1
return!0},
bf(a,b){return A.E0(this,b,A.p(this).c)},
b8(a,b){return A.DX(this,b,A.p(this).c)},
ga0(a){var s=this.gB(this)
if(!s.n())throw A.l(A.ao())
return s.gt()},
gau(a){var s,r=this.gB(this)
if(!r.n())throw A.l(A.ao())
do s=r.gt()
while(r.n())
return s},
af(a,b){var s,r
A.ba(b,"index")
s=this.gB(this)
for(r=b;s.n();){if(r===0)return s.gt();--r}throw A.l(A.nO(b,b-r,this,"index"))},
$iU:1,
$ii:1,
$id5:1}
A.jm.prototype={}
A.mq.prototype={
m(a,b){this.$ti.c.a(b)
return A.Et()},
a1(a,b){this.$ti.i("i<1>").a(b)
return A.Et()}}
A.j1.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gB(a){var s=this.a
return A.e5(s,s.r,A.p(s).c)}}
A.hw.prototype={}
A.ju.prototype={}
A.m9.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.k5(b):s}},
gq(a){return this.b==null?this.c.a:this.cs().length},
ga4(a){return this.gq(0)===0},
gan(a){return this.gq(0)>0},
gag(){if(this.b==null){var s=this.c
return new A.au(s,A.p(s).i("au<1>"))}return new A.ma(this)},
gS(){var s,r=this
if(r.b==null){s=r.c
return new A.N(s,A.p(s).i("N<2>"))}return A.DF(r.cs(),new A.uQ(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.d(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.D(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.fW().j(0,b,c)},
D(a){if(this.b==null)return this.c.D(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
Y(a,b){if(this.b!=null&&!this.D(b))return null
return this.fW().Y(0,b)},
a2(a,b){var s,r,q,p,o=this
t.m2.a(b)
if(o.b==null)return o.c.a2(0,b)
s=o.cs()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.vi(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.l(A.aI(o))}},
cs(){var s=t.jS.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
fW(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.cs()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.a.m(r,"")
else B.a.ap(r)
n.a=n.b=null
return n.c=s},
k5(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.vi(this.a[a])
return this.b[a]=s}}
A.uQ.prototype={
$1(a){return this.a.h(0,A.d(a))},
$S:63}
A.ma.prototype={
gq(a){return this.a.gq(0)},
af(a,b){var s=this.a
if(s.b==null)s=s.gag().af(0,b)
else{s=s.cs()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gB(a){var s=this.a
if(s.b==null){s=s.gag()
s=s.gB(s)}else{s=s.cs()
s=new J.eW(s,s.length,A.L(s).i("eW<1>"))}return s},
v(a,b){return this.a.D(b)}}
A.v5.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:61}
A.v4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:61}
A.fH.prototype={
gaI(){return this.a}}
A.hT.prototype={
O(a){var s,r
t.L.a(a)
s=J.ar(a)
if(s.ga4(a))return""
r=this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
s=new A.up(r).lN(a,0,s.gq(a),!0)
s.toString
return A.iY(s,0,null)}}
A.up.prototype={
lN(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.u(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.Je(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.jV.prototype={
O(a){var s,r,q,p
A.d(a)
s=A.bQ(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.uo()
q=r.lz(a,0,s)
q.toString
p=r.a
if(p<-1)A.h(A.y("Missing padding character",a,s))
if(p>0)A.h(A.y("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.uo.prototype={
lz(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.E8(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Jb(a,b,c,q)
r.a=A.Jd(a,b,c,s,0,r.a)
return s}}
A.be.prototype={
ad(a,b,c,d){this.m(0,J.Bt(t.L.a(a),b,c))
if(d)this.aq()},
$ib5:1}
A.bf.prototype={}
A.b7.prototype={
cV(a){A.p(this).i("b5<b7.T>").a(a)
throw A.l(A.az("This converter does not support chunked conversions: "+this.k(0)))}}
A.kq.prototype={}
A.im.prototype={
k(a){var s=A.ks(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kP.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.kO.prototype={
bh(a,b){var s=A.KR(a,this.glB().a)
return s},
bc(a,b){var s=A.Jo(a,this.gaI().b,null)
return s},
gaI(){return B.fv},
glB(){return B.fu}}
A.kR.prototype={}
A.kQ.prototype={}
A.uS.prototype={
hO(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.X(a,r,q)
r=q+1
o=A.aW(92)
s.a+=o
o=A.aW(117)
s.a+=o
o=A.aW(100)
s.a+=o
o=p>>>8&15
o=A.aW(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aW(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aW(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.X(a,r,q)
r=q+1
o=A.aW(92)
s.a+=o
switch(p){case 8:o=A.aW(98)
s.a+=o
break
case 9:o=A.aW(116)
s.a+=o
break
case 10:o=A.aW(110)
s.a+=o
break
case 12:o=A.aW(102)
s.a+=o
break
case 13:o=A.aW(114)
s.a+=o
break
default:o=A.aW(117)
s.a+=o
o=A.aW(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aW(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aW(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.X(a,r,q)
r=q+1
o=A.aW(92)
s.a+=o
o=A.aW(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.X(a,r,m)},
ef(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.l(new A.kP(a,null))}B.a.m(s,a)},
e7(a){var s,r,q,p,o=this
if(o.hN(a))return
o.ef(a)
try{s=o.b.$1(a)
if(!o.hN(s)){q=A.Dw(a,null,o.gfJ())
throw A.l(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.aw(p)
q=A.Dw(a,r,o.gfJ())
throw A.l(q)}},
hN(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.O.k(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hO(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ef(a)
q.n0(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ef(a)
r=q.n1(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
n0(a){var s,r,q=this.c
q.a+="["
s=J.ar(a)
if(s.gan(a)){this.e7(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.e7(s.h(a,r))}}q.a+="]"},
n1(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga4(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.it(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a2(0,new A.uT(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hO(A.d(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.e7(r[n])}p.a+="}"
return!0}}
A.uT.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.j(s,r.a++,a)
B.a.j(s,r.a++,b)},
$S:62}
A.uR.prototype={
gfJ(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lI.prototype={
ha(a,b){t.L.a(a)
return(b===!0?B.mS:B.mR).O(a)},
c8(a){return this.ha(a,null)}}
A.lJ.prototype={
O(a){var s,r,q,p,o
A.d(a)
s=a.length
r=A.bQ(0,null,s)
if(r===0)return new Uint8Array(0)
q=new Uint8Array(r*3)
p=new A.v6(q)
if(p.jv(a,0,r)!==r){o=r-1
if(!(o>=0&&o<s))return A.a(a,o)
p.eH()}return B.i.aL(q,0,p.b)}}
A.v6.prototype={
eH(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.E(q)
s=q.length
if(!(p<s))return A.a(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.a(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.a(q,p)
q[p]=189},
kU(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.E(r)
o=r.length
if(!(q<o))return A.a(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.a(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.a(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.a(r,p)
r[p]=s&63|128
return!0}else{n.eH()
return!1}},
jv(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.a(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.E(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.a(a,m)
if(k.kU(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eH()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.E(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.E(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.a(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.a(s,m)
s[m]=n&63|128}}}return o}}
A.j3.prototype={
O(a){return new A.eK(this.a).ct(t.L.a(a),0,null,!0)}}
A.eK.prototype={
ct(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bQ(b,c,J.aD(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.K0(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.K_(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.el(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.K1(o)
l.b=0
throw A.l(A.y(m,a,p+l.c))}return n},
el(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.u(b+c,2)
r=q.el(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.el(a,s,c,d)}return q.lA(a,b,c,d)},
lA(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bE(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aW(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aW(h)
e.a+=p
break
case 65:p=A.aW(h)
e.a+=p;--d
break
default:p=A.aW(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
p=A.aW(a[l])
e.a+=p}else{p=A.iY(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aW(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.aR.prototype={
R(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bi(p,r)
return new A.aR(p===0?!1:s,r,p)},
j7(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.bm()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.a(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.a(q,n)
q[n]=m}o=this.a
n=A.bi(s,q)
return new A.aR(n===0?!1:o,q,n)},
j8(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.bm()
s=j-a
if(s<=0)return k.a?$.CP():$.bm()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.a(r,o)
m=r[o]
if(!(n<s))return A.a(q,n)
q[n]=m}n=k.a
m=A.bi(s,q)
l=new A.aR(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.a(r,o)
if(r[o]!==0)return l.a8(0,$.bJ())}return l},
b_(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.l(A.b0("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.d.u(b,16)
if(B.d.T(b,16)===0)return n.j7(r)
q=s+r+1
p=new Uint16Array(q)
A.Ef(n.b,s,b,p)
s=n.a
o=A.bi(q,p)
return new A.aR(o===0?!1:s,p,o)},
c2(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.l(A.b0("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.d.u(b,16)
q=B.d.T(b,16)
if(q===0)return j.j8(r)
p=s-r
if(p<=0)return j.a?$.CP():$.bm()
o=j.b
n=new Uint16Array(p)
A.Jl(o,s,b,n)
s=j.a
m=A.bi(p,n)
l=new A.aR(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.d.b_(1,q)-1)!==0)return l.a8(0,$.bJ())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.a8(0,$.bJ())}}return l},
l(a,b){var s,r
t.nx.a(b)
s=this.a
if(s===b.a){r=A.lO(this.b,this.c,b.b,b.c)
return s?0-r:r}return s?-1:1},
cq(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.cq(p,b)
if(o===0)return $.bm()
if(n===0)return p.a===b?p:p.R(0)
s=o+1
r=new Uint16Array(s)
A.Jg(p.b,o,a.b,n,r)
q=A.bi(s,r)
return new A.aR(q===0?!1:b,r,q)},
bm(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.bm()
s=a.c
if(s===0)return p.a===b?p:p.R(0)
r=new Uint16Array(o)
A.lN(p.b,o,a.b,s,r)
q=A.bi(o,r)
return new A.aR(q===0?!1:b,r,q)},
fi(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.a(s,n)
m=s[n]
if(!(n<o))return A.a(r,n)
l=r[n]
if(!(n<k))return A.a(q,n)
q[n]=m&l}p=A.bi(k,q)
return new A.aR(p===0?!1:b,q,p)},
fh(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.a(m,q)
p=m[q]
if(!(q<r))return A.a(l,q)
o=l[q]
if(!(q<n))return A.a(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.a(m,q)
r=m[q]
if(!(q<n))return A.a(k,q)
k[q]=r}s=A.bi(n,k)
return new A.aR(s===0?!1:b,k,s)},
fj(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.a(h,o)
n=h[o]
if(!(o<p))return A.a(g,o)
m=g[o]
if(!(o<i))return A.a(f,o)
f[o]=n|m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.a(l,o)
p=l[o]
if(!(o<i))return A.a(f,o)
f[o]=p}q=A.bi(i,f)
return new A.aR(q===0?!1:b,f,q)},
dk(a,b){var s,r,q,p=this
t.nx.a(b)
if(p.c===0||b.c===0)return $.bm()
s=p.a
if(s===b.a){if(s){s=$.bJ()
return p.bm(s,!0).fj(b.bm(s,!0),!0).cq(s,!0)}return p.fi(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.fh(r.bm($.bJ(),!1),!1)},
hQ(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.bJ()
return p.bm(s,!0).fi(b.bm(s,!0),!0).cq(s,!0)}return p.fj(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.bJ()
return r.bm(s,!0).fh(q,!0).cq(s,!0)},
C(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.cq(b,r)
if(A.lO(q.b,p,b.b,s)>=0)return q.bm(b,r)
return b.bm(q,!r)},
a8(a,b){var s,r,q=this,p=q.c
if(p===0)return b.R(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.cq(b,r)
if(A.lO(q.b,p,b.b,s)>=0)return q.bm(b,r)
return b.bm(q,!r)},
a_(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.bm()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.C2(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.bi(s,p)
return new A.aR(m===0?!1:o,p,m)},
bA(a){var s,r,q,p
if(this.c<a.c)return $.bm()
this.fA(a)
s=$.BZ.bg()-$.j6.bg()
r=A.C0($.BY.bg(),$.j6.bg(),$.BZ.bg(),s)
q=A.bi(s,r)
p=new A.aR(!1,r,q)
return this.a!==a.a&&q>0?p.R(0):p},
cw(a){var s,r,q,p=this
if(p.c<a.c)return p
p.fA(a)
s=A.C0($.BY.bg(),0,$.j6.bg(),$.j6.bg())
r=A.bi($.j6.bg(),s)
q=new A.aR(!1,s,r)
if($.C_.bg()>0)q=q.c2(0,$.C_.bg())
return p.a&&q.c>0?q.R(0):q},
fA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Ec&&a.c===$.Ee&&c.b===$.Eb&&a.b===$.Ed)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.d.gbS(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.Ea(s,r,p,o)
m=new Uint16Array(b+5)
l=A.Ea(c.b,b,p,m)}else{m=A.C0(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.C1(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.lO(m,l,i,h)>=0){q&2&&A.E(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=1
A.lN(m,g,i,h,m)}else{q&2&&A.E(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.a(f,n)
f[n]=1
A.lN(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.Jh(k,m,e);--j
A.C2(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.C1(f,n,j,i)
A.lN(m,g,i,h,m)
while(--d,m[e]<d)A.lN(m,g,i,h,m)}--e}$.Eb=c.b
$.Ec=b
$.Ed=s
$.Ee=r
$.BY.b=m
$.BZ.b=g
$.j6.b=n
$.C_.b=p},
gP(a){var s,r,q,p,o=new A.ur(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.us().$1(s)},
J(a,b){if(b==null)return!1
return b instanceof A.aR&&this.l(0,b)===0},
gbS(a){var s,r,q,p,o,n,m=this.c
if(m===0)return 0
s=this.b
r=m-1
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]
o=16*r+B.d.gbS(p)
if(!this.a)return o
if((p&p-1)!==0)return o
for(n=m-2;n>=0;--n){if(!(n<q))return A.a(s,n)
if(s[n]!==0)return o}return o-1},
aA(a,b){if(b.c===0)throw A.l(B.Y)
return this.bA(b)},
mC(a,b){if(b.c===0)throw A.l(B.Y)
return this.cw(b)},
T(a,b){var s
if(b.c===0)throw A.l(B.Y)
s=this.cw(b)
if(s.a)s=b.a?s.a8(0,b):s.C(0,b)
return s},
ga7(a){if(this.c===0)return 0
return this.a?-1:1},
aU(a){var s,r
if(a<0)throw A.l(A.b0("Exponent must not be negative: "+a,null))
if(a===0)return $.bJ()
s=$.bJ()
for(r=this;a!==0;){if((a&1)===1)s=s.a_(0,r)
a=B.d.am(a,1)
if(a!==0)r=r.a_(0,r)}return s},
mo(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b.a)throw A.l(A.b0("exponent must be positive: "+b.k(0),null))
if(c.l(0,$.bm())<=0)throw A.l(A.b0("modulus must be strictly positive: "+c.k(0),null))
if(b.c===0)return $.bJ()
s=c.c
r=2*s+4
q=b.gbS(0)
if(q<=0)return $.bJ()
p=c.b
o=s-1
if(!(o>=0&&o<p.length))return A.a(p,o)
n=new A.uq(c,c.b_(0,16-B.d.gbS(p[o])))
m=new Uint16Array(r)
l=new Uint16Array(r)
k=new Uint16Array(s)
j=n.h5(this,k)
for(i=j-1;i>=0;--i){if(!(i<s))return A.a(k,i)
p=k[i]
if(!(i<r))return A.a(m,i)
m[i]=p}for(h=q-2,g=j;h>=0;--h){f=n.i2(m,g,l)
if(b.dk(0,$.bJ().b_(0,h)).c!==0)g=n.fL(m,A.Ji(l,f,k,j,m))
else{g=f
e=l
l=m
m=e}}p=A.bi(g,m)
return new A.aR(!1,m,p)},
aE(a){var s,r,q,p
for(s=this.c-1,r=this.b,q=r.length,p=0;s>=0;--s){if(!(s<q))return A.a(r,s)
p=p*65536+r[s]}return this.a?-p:p},
ck(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.c
if(i===0)return 0
s=new Uint8Array(8);--i
r=k.b
q=r.length
if(!(i>=0&&i<q))return A.a(r,i)
p=16*i+B.d.gbS(r[i])
if(p>1024)return k.a?-1/0:1/0
if(k.a)s[7]=128
o=p-53+1075
s[6]=(o&15)<<4
s[7]=(s[7]|B.d.am(o,4))>>>0
j.a=j.b=0
j.c=i
n=new A.uu(j,k)
i=n.$1(5)
if(typeof i!=="number")return i.dk()
s[6]=s[6]|i&15
for(m=5;m>=0;--m)B.i.j(s,m,n.$1(8))
l=new A.uv(s)
if(J.a2(n.$1(1),1))if((s[0]&1)===1)l.$0()
else if(j.b!==0)l.$0()
else for(m=j.c;m>=0;--m){if(!(m<q))return A.a(r,m)
if(r[m]!==0){l.$0()
break}}return J.jM(B.i.ga9(s)).getFloat64(0,!0)},
k(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(m[0])}s=A.c([],t.s)
m=n.a
r=m?n.R(0):n
while(r.c>1){q=$.CO()
if(q.c===0)A.h(B.Y)
p=r.cw(q).k(0)
B.a.m(s,p)
o=p.length
if(o===1)B.a.m(s,"000")
if(o===2)B.a.m(s,"00")
if(o===3)B.a.m(s,"0")
r=r.bA(q)}q=r.b
if(0>=q.length)return A.a(q,0)
B.a.m(s,B.d.k(q[0]))
if(m)B.a.m(s,"-")
return new A.aP(s,t.q6).cd(0)},
eG(a){if(a<10)return 48+a
return 97+a-10},
bI(a,b){var s,r,q,p,o,n,m,l=this
if(b<2||b>36)throw A.l(A.aK(b,2,36,null,null))
s=l.c
if(s===0)return"0"
if(s===1){s=l.b
if(0>=s.length)return A.a(s,0)
r=B.d.bI(s[0],b)
if(l.a)return"-"+r
return r}if(b===16)return l.kL()
q=A.hq(b)
p=A.c([],t.t)
s=l.a
o=s?l.R(0):l
for(n=q.c===0;o.c!==0;){if(n)A.h(B.Y)
m=o.cw(q).aE(0)
o=o.bA(q)
B.a.m(p,l.eG(m))}r=A.iY(new A.aP(p,t.gb),0,null)
if(s)return"-"+r
return r},
kL(){var s,r,q,p,o,n,m,l=this,k=A.c([],t.t)
for(s=l.c-1,r=l.b,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p]
for(n=0;n<4;++n){B.a.m(k,l.eG(o&15))
o=o>>>4}}if(!(s>=0&&s<q))return A.a(r,s)
m=r[s]
while(m!==0){B.a.m(k,l.eG(m&15))
m=m>>>4}if(l.a)B.a.m(k,45)
return A.iY(new A.aP(k,t.gb),0,null)},
$ihU:1,
$iaY:1}
A.ur.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:51}
A.us.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:35}
A.uu.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=this.b,q=r.c-1,r=r.b,p=r.length;o=s.a,o<a;){o=s.c
if(o<0){s.c=o-1
n=0
m=16}else{if(!(o<p))return A.a(r,o)
n=r[o]
m=o===q?B.d.gbS(n):16;--s.c}s.b=B.d.b_(s.b,m)+n
s.a+=m}r=s.b
o-=a
l=B.d.c2(r,o)
s.b=r-B.d.b_(l,o)
s.a=o
return l},
$S:35}
A.uv.prototype={
$0(){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=1,p=0;p<8;++p){if(q===0)break
o=s[p]+q
r&2&&A.E(s)
s[p]=o&255
q=o>>>8}},
$S:0}
A.uq.prototype={
h5(a,b){var s,r,q,p,o,n,m=a.a
if(!m){s=this.a
s=A.lO(a.b,a.c,s.b,s.c)>=0}else s=!0
if(s){s=this.a
r=a.cw(s)
if(m&&r.c>0)r=r.C(0,s)
q=r.c
p=r.b}else{q=a.c
p=a.b}for(m=p.length,s=b.$flags|0,o=q;--o,o>=0;){if(!(o<m))return A.a(p,o)
n=p[o]
s&2&&A.E(b)
if(!(o<b.length))return A.a(b,o)
b[o]=n}return q},
fL(a,b){var s
if(b<this.a.c)return b
s=A.bi(b,a)
return this.h5(new A.aR(!1,a,s).cw(this.b),a)},
i2(a,b,c){var s,r,q,p,o,n=A.bi(b,a),m=new A.aR(!1,a,n),l=m.a_(0,m)
for(s=l.c,n=l.b,r=n.length,q=c.$flags|0,p=0;p<s;++p){if(!(p<r))return A.a(n,p)
o=n[p]
q&2&&A.E(c)
if(!(p<c.length))return A.a(c,p)
c[p]=o}for(n=2*b;s<n;++s){q&2&&A.E(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}return this.fL(c,n)}}
A.v3.prototype={
$2(a,b){var s,r
A.d(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.S(t.tY.a(b)),r=this.a;s.n();){b=s.gt()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.n(b)}},
$S:75}
A.ns.prototype={
$0(){var s=this
return A.h(A.b0("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:82}
A.aa.prototype={
av(a){var s=1000,r=B.d.T(a,s),q=B.d.u(a-r,s),p=this.b+r,o=B.d.T(p,s),n=this.c
return new A.aa(A.Dk(this.a+B.d.u(p-o,s)+q,o,n),o,n)},
ar(a){return A.BC(0,this.b-a.b,this.a-a.a,0)},
J(a,b){if(b==null)return!1
return b instanceof A.aa&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.bx(this.a,this.b,B.t,B.t)},
hg(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
l(a,b){var s
t.zG.a(b)
s=B.d.l(this.a,b.a)
if(s!==0)return s
return B.d.l(this.b,b.b)},
F(){var s=this
if(s.c)return s
return new A.aa(s.a,s.b,!0)},
k(a){var s=this,r=A.Dj(A.b_(s)),q=A.dq(A.b4(s)),p=A.dq(A.av(s)),o=A.dq(A.BQ(s)),n=A.dq(A.BR(s)),m=A.dq(A.DK(s)),l=A.nt(A.DJ(s)),k=s.b,j=k===0?"":A.nt(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
dg(){var s=this,r=A.b_(s)>=-9999&&A.b_(s)<=9999?A.Dj(A.b_(s)):A.I8(A.b_(s)),q=A.dq(A.b4(s)),p=A.dq(A.av(s)),o=A.dq(A.BQ(s)),n=A.dq(A.BR(s)),m=A.dq(A.DK(s)),l=A.nt(A.DJ(s)),k=s.b,j=k===0?"":A.nt(k)
k=r+"-"+q
if(s.c)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j},
$iaY:1}
A.nu.prototype={
$1(a){if(a==null)return 0
return A.Z(a,null,null)},
$S:69}
A.nv.prototype={
$1(a){var s,r,q
if(a==null)return 0
for(s=a.length,r=0,q=0;q<6;++q){r*=10
if(q<s){if(!(q<s))return A.a(a,q)
r+=a.charCodeAt(q)^48}}return r},
$S:69}
A.ci.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.ci&&this.a===b.a},
gP(a){return B.d.gP(this.a)},
l(a,b){return B.d.l(this.a,t.eP.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.d.u(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.d.u(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.d.u(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.b.aa(B.d.k(n%1e6),6,"0")},
$iaY:1}
A.m4.prototype={
k(a){return this.U()},
$iY:1}
A.aC.prototype={
gco(){return A.II(this)}}
A.jS.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ks(s)
return"Assertion failed"}}
A.e_.prototype={}
A.cc.prototype={
gen(){return"Invalid argument"+(!this.a?"(s)":"")},
gem(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.j(p),n=s.gen()+q+o
if(!s.a)return n
return n+s.gem()+": "+A.ks(s.geS())},
geS(){return this.b}}
A.hb.prototype={
geS(){return A.Cb(this.b)},
gen(){return"RangeError"},
gem(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.j(q):""
else if(q==null)s=": Not greater than or equal to "+A.j(r)
else if(q>r)s=": Not in inclusive range "+A.j(r)+".."+A.j(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.j(r)
return s}}
A.kC.prototype={
geS(){return A.R(this.b)},
gen(){return"RangeError"},
gem(){if(A.R(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.j2.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.lF.prototype={
k(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dT.prototype={
k(a){return"Bad state: "+this.a}}
A.ka.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ks(s)+"."}}
A.l5.prototype={
k(a){return"Out of Memory"},
gco(){return null},
$iaC:1}
A.iX.prototype={
k(a){return"Stack Overflow"},
gco(){return null},
$iaC:1}
A.uA.prototype={
k(a){return"Exception: "+this.a}}
A.b8.prototype={
k(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.X(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.b.X(e,i,j)+k+"\n"+B.b.a_(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.j(f)+")"):g}}
A.kI.prototype={
gco(){return null},
k(a){return"IntegerDivisionByZeroException"},
$iaC:1}
A.i.prototype={
dM(a,b){return A.f_(this,A.p(this).i("i.E"),b)},
cM(a,b,c){var s=A.p(this)
return A.DF(this,s.a3(c).i("1(i.E)").a(b),s.i("i.E"),c)},
c_(a,b){var s=A.p(this)
return new A.o(this,s.i("k(i.E)").a(b),s.i("o<i.E>"))},
v(a,b){var s
for(s=this.gB(this);s.n();)if(J.a2(s.gt(),b))return!0
return!1},
a2(a,b){var s
A.p(this).i("~(i.E)").a(b)
for(s=this.gB(this);s.n();)b.$1(s.gt())},
e2(a,b){var s,r
A.p(this).i("i.E(i.E,i.E)").a(b)
s=this.gB(this)
if(!s.n())throw A.l(A.ao())
r=s.gt()
while(s.n())r=b.$2(r,s.gt())
return r},
a5(a,b,c,d){var s,r
d.a(b)
A.p(this).a3(d).i("1(1,i.E)").a(c)
for(s=this.gB(this),r=b;s.n();)r=c.$2(r,s.gt())
return r},
N(a,b){var s
A.p(this).i("k(i.E)").a(b)
for(s=this.gB(this);s.n();)if(b.$1(s.gt()))return!0
return!1},
hE(a,b){var s=A.p(this).i("i.E")
if(b)s=A.D(this,s)
else{s=A.D(this,s)
s.$flags=1
s=s}return s},
e4(a){return A.kU(this,A.p(this).i("i.E"))},
gq(a){var s,r=this.gB(this)
for(s=0;r.n();)++s
return s},
ga4(a){return!this.gB(this).n()},
gan(a){return!this.ga4(this)},
bf(a,b){return A.E0(this,b,A.p(this).i("i.E"))},
b8(a,b){return A.DX(this,b,A.p(this).i("i.E"))},
ga0(a){var s=this.gB(this)
if(!s.n())throw A.l(A.ao())
return s.gt()},
gau(a){var s,r=this.gB(this)
if(!r.n())throw A.l(A.ao())
do s=r.gt()
while(r.n())
return s},
af(a,b){var s,r
A.ba(b,"index")
s=this.gB(this)
for(r=b;s.n();){if(r===0)return s.gt();--r}throw A.l(A.nO(b,b-r,this,"index"))},
k(a){return A.Ik(this,"(",")")}}
A.ap.prototype={
k(a){return"MapEntry("+A.j(this.a)+": "+A.j(this.b)+")"}}
A.bh.prototype={
gP(a){return A.a_.prototype.gP.call(this,0)},
k(a){return"null"}}
A.a_.prototype={$ia_:1,
J(a,b){return this===b},
gP(a){return A.c5(this)},
k(a){return"Instance of '"+A.ld(this)+"'"},
gaz(a){return A.bd(this)},
toString(){return this.k(this)}}
A.mn.prototype={
k(a){return""},
$ieB:1}
A.bE.prototype={
gq(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iIZ:1}
A.ug.prototype={
$2(a,b){var s,r,q,p
t.yz.a(a)
A.d(b)
s=B.b.bX(b,"=")
if(s===-1){if(b!=="")a.j(0,A.C8(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.X(b,0,s)
q=B.b.ac(b,s+1)
p=this.a
a.j(0,A.C8(r,0,r.length,p,!0),A.C8(q,0,q.length,p,!0))}return a},
$S:260}
A.uf.prototype={
$2(a,b){throw A.l(A.y("Illegal IPv6 address, "+a,this.a,b))},
$S:257}
A.jv.prototype={
gdJ(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.j(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gP(a){var s,r=this,q=r.y
if(q===$){s=B.b.gP(r.gdJ())
r.y!==$&&A.hL()
r.y=s
q=s}return q},
ghe(){var s=this.c
if(s==null)return""
if(B.b.ak(s,"[")&&!B.b.c3(s,"v",1))return B.b.X(s,1,s.length-1)
return s},
ghv(){var s=this.d
return s==null?A.Eu(this.a):s},
k(a){return this.gdJ()},
J(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(n===b)return!0
s=!1
if(b instanceof A.jv)if(n.a===b.a)if(n.c!=null===(b.c!=null))if(n.b===b.b)if(n.ghe()===b.ghe())if(n.ghv()===b.ghv())if(n.e===b.e){r=n.f
q=r==null
p=b.f
o=p==null
if(!q===!o){if(q)r=""
if(r===(o?"":p)){r=n.r
q=r==null
p=b.r
o=p==null
if(!q===!o){s=q?"":r
s=s===(o?"":p)}}}}return s},
$iue:1}
A.v0.prototype={
$1(a){return A.C9(64,A.d(a),B.R,!1)},
$S:11}
A.v2.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.C9(1,a,B.R,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.C9(1,b,B.R,!0)
s.a+=r}},
$S:256}
A.v1.prototype={
$2(a,b){var s,r
A.d(a)
if(b==null||typeof b=="string")this.a.$2(a,A.n(b))
else for(s=J.S(t.tY.a(b)),r=this.a;s.n();)r.$2(a,A.d(s.gt()))},
$S:75}
A.kt.prototype={
k(a){return"Expando:null"}}
A.pa.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.Ax.prototype={
$1(a){return this.a.cF(this.b.i("0/?").a(a))},
$S:34}
A.Ay.prototype={
$1(a){if(a==null)return this.a.dN(new A.pa(a===undefined))
return this.a.dN(a)},
$S:34}
A.m8.prototype={
ir(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.l(A.az("No source of cryptographically secure random numbers available."))},
cP(a){var s,r,q,p,o,n,m,l,k=null
if(a<=0||a>4294967296)throw A.l(new A.hb(k,k,!1,k,k,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.E(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.R(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bq(B.az.ga9(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}},
$iIL:1}
A.kr.prototype={}
A.kl.prototype={}
A.kV.prototype={
bt(a,b){var s,r,q,p=this.$ti.i("A<1>?")
p.a(a)
p.a(b)
if(a===b)return!0
s=a.length
p=b.length
if(s!==p)return!1
for(r=0;r<s;++r){q=a[r]
if(!(r<p))return A.a(b,r)
if(q!==b[r])return!1}return!0},
aC(a){var s,r,q
this.$ti.i("A<1>?").a(a)
for(s=a.length,r=0,q=0;q<s;++q){r=r+B.d.gP(a[q])&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.ch.prototype={
J(a,b){var s,r,q,p,o,n,m
if(b==null)return!1
if(b instanceof A.ch){s=this.a
r=b.a
q=s.length
p=r.length
if(q!==p)return!1
for(o=0,n=0;n<q;++n){m=s[n]
if(!(n<p))return A.a(r,n)
o|=m^r[n]}return o===0}return!1},
gP(a){return A.DG(this.a)},
k(a){return A.vo(this.a)}}
A.km.prototype={
m(a,b){if(this.a!=null)throw A.l(A.aq("add may only be called once."))
this.a=b},
aq(){if(this.a==null)throw A.l(A.aq("add must be called once."))},
$ib5:1}
A.fV.prototype={
O(a){var s,r,q
t.L.a(a)
s=new A.km()
r=this.cV(s)
r.m(0,a)
r.aq()
q=s.a
q.toString
return q}}
A.ky.prototype={
m(a,b){var s,r=this
t.L.a(b)
if(r.w)throw A.l(A.aq("Hash.add() called after close()."))
s=J.ar(b)
r.r=r.r+s.gq(b)
r.fk(b,0,s.gq(b))},
ad(a,b,c,d){var s=this
t.L.a(a)
if(s.w)throw A.l(A.aq("Hash.addSlice() called after close()."))
A.bQ(b,c,J.aD(a))
if(b<c){s.r=s.r+(c-b)
s.fk(a,b,c)}if(d)s.aq()},
fk(a,b,c){var s,r,q,p,o,n=this
t.L.a(a)
s=n.e
r=n.d
q=r.length
for(p=b;;s=0){o=s+c-p
if(o<q){B.i.aV(r,s,o,a,p)
n.e=o
return}B.i.aV(r,s,q,a,p)
p+=q-s
n.ey()}},
ey(){var s,r=this,q=r.f,p=r.c,o=B.a1===r.b,n=q.$flags|0,m=q.length,l=0
do{s=p.getUint32(l*4,o)
n&2&&A.E(q)
if(!(l<m))return A.a(q,l)
q[l]=s;++l}while(l<m)
r.hG(q)},
aq(){var s,r,q,p,o,n,m,l,k,j=this
if(j.w)return
j.w=!0
if(j.r>1125899906842623)A.h(A.az("Hashing is unsupported for messages with more than 2^53 bits."))
s=j.d
r=j.e
q=j.e=r+1
s.$flags&2&&A.E(s)
p=s.length
if(!(r>=0&&r<p))return A.a(s,r)
s[r]=128
if(q>p-j.x){B.i.aO(s,q,p,0)
j.ey()
r=j.e=0}else r=q
o=j.r*8
n=p-8
B.i.aO(s,r,n,0)
m=B.d.u(o,4294967296)
l=o>>>0
s=j.b
r=j.c
q=B.a1===s
p=n+4
k=r.$flags|0
if(s===B.av){k&2&&A.E(r,11)
r.setUint32(n,m,q)
r.setUint32(p,l,q)}else{k&2&&A.E(r,11)
r.setUint32(n,l,q)
r.setUint32(p,m,q)}j.ey()
j.e=0
s=j.a
s.m(0,new A.ch(j.iS()))
s.aq()},
iS(){var s,r,q,p,o,n,m
if(this.b===$.eT())return J.HH(B.D.ga9(this.geQ()))
s=this.geQ()
r=s.byteLength
q=new Uint8Array(r)
p=J.jM(B.i.ga9(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.E(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.mf.prototype={
cV(a){var s,r,q,p
t.uC.a(a)
s=new Uint32Array(A.aH(A.c([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)))
r=new Uint32Array(64)
q=new Uint8Array(64)
p=new Uint32Array(16)
return new A.mg(s,r,a,B.av,J.jM(B.i.ga9(q)),q,p,8)}}
A.mh.prototype={
hG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a.length
if(15>=b)return A.a(a,15)
s=this.z
r=this.y
if(7>=r.length)return A.a(r,7)
for(q=s.$flags|0,p=0;p<16;++p){if(!(p<b))return A.a(a,p)
o=a[p]
q&2&&A.E(s)
s[p]=o}for(p=16;p<64;++p){b=s[p-2]
o=s[p-7]
n=s[p-15]
m=s[p-16]
q&2&&A.E(s)
s[p]=((((b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,p=0;p<64;p+=8){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.J[p]+s[p]>>>0)>>>0)>>>0
i=i+c>>>0
b=d&k
e=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((b^d&j^k&j)>>>0)>>>0)>>>0
q=p+1
if(!(q<64))return A.a(B.J,q)
c=(f+(((i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7))>>>0)>>>0)+(((i&h^~i&g)>>>0)+(B.J[q]+s[q]>>>0)>>>0)>>>0
j=j+c>>>0
q=e&d
f=c+((((e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10))>>>0)+((q^e&k^b)>>>0)>>>0)>>>0
b=p+2
if(!(b<64))return A.a(B.J,b)
c=(g+(((j>>>6|j<<26)^(j>>>11|j<<21)^(j>>>25|j<<7))>>>0)>>>0)+(((j&i^~j&h)>>>0)+(B.J[b]+s[b]>>>0)>>>0)>>>0
k=k+c>>>0
b=f&e
g=c+((((f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10))>>>0)+((b^f&d^q)>>>0)>>>0)>>>0
q=p+3
if(!(q<64))return A.a(B.J,q)
c=(h+(((k>>>6|k<<26)^(k>>>11|k<<21)^(k>>>25|k<<7))>>>0)>>>0)+(((k&j^~k&i)>>>0)+(B.J[q]+s[q]>>>0)>>>0)>>>0
d=d+c>>>0
q=g&f
h=c+((((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))>>>0)+((q^g&e^b)>>>0)>>>0)>>>0
b=p+4
if(!(b<64))return A.a(B.J,b)
c=(i+(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))>>>0)>>>0)+(((d&k^~d&j)>>>0)+(B.J[b]+s[b]>>>0)>>>0)>>>0
e=e+c>>>0
b=h&g
i=c+((((h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10))>>>0)+((b^h&f^q)>>>0)>>>0)>>>0
q=p+5
if(!(q<64))return A.a(B.J,q)
c=(j+(((e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7))>>>0)>>>0)+(((e&d^~e&k)>>>0)+(B.J[q]+s[q]>>>0)>>>0)>>>0
f=f+c>>>0
q=i&h
j=c+((((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))>>>0)+((q^i&g^b)>>>0)>>>0)>>>0
b=p+6
if(!(b<64))return A.a(B.J,b)
c=(k+(((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))>>>0)>>>0)+(((f&e^~f&d)>>>0)+(B.J[b]+s[b]>>>0)>>>0)>>>0
g=g+c>>>0
b=j&i
k=c+((((j>>>2|j<<30)^(j>>>13|j<<19)^(j>>>22|j<<10))>>>0)+((b^j&h^q)>>>0)>>>0)>>>0
q=p+7
if(!(q<64))return A.a(B.J,q)
c=(d+(((g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))>>>0)>>>0)+(((g&f^~g&e)>>>0)+(B.J[q]+s[q]>>>0)>>>0)>>>0
h=h+c>>>0
d=c+((((k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10))>>>0)+((k&j^k&i^b)>>>0)>>>0)>>>0}r.$flags&2&&A.E(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.mg.prototype={
geQ(){return this.y}}
A.mi.prototype={
cV(a){var s,r,q,p,o
t.uC.a(a)
s=new Uint32Array(A.aH(A.c([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],t.t)))
r=new Uint32Array(160)
q=new Uint32Array(38)
p=new Uint8Array(128)
o=new Uint32Array(32)
return new A.lr(s,r,q,a,B.av,J.jM(B.i.ga9(p)),p,o,16)},
gl1(){return 128}}
A.mj.prototype={
geQ(){return J.mN(B.D.ga9(this.y),0,this.glK())},
hG(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
for(s=this.z,r=a5.length,q=s.$flags|0,p=0;p<32;++p){if(!(p<r))return A.a(a5,p)
o=a5[p]
q&2&&A.E(s)
s[p]=o}for(r=this.Q,o=r.$flags|0,p=32;p<160;p+=2){n=p-4
m=s[n]
o&2&&A.E(r)
r[0]=m>>>19
m=(s[n]<<13|s[1+n]>>>19)>>>0
r[1]=m
m=1+n
l=s[m]
r[2]=l<<13>>>0
r[3]=0
r[4]=(r[0]|r[2])>>>0
r[5]=(r[1]|r[3])>>>0
r[0]=0
l=s[n]
r[1]=l>>>29
l=(s[n]<<3|s[m]>>>29)>>>0
r[2]=l
l=s[m]
r[3]=l<<3>>>0
r[6]=(r[0]|r[2])>>>0
r[7]=(r[1]|r[3])>>>0
l=s[n]
r[8]=l>>>6
n=(s[n]<<26|s[m]>>>6)>>>0
r[9]=n
r[10]=(r[6]^r[8])>>>0
r[11]=(r[7]^r[9])>>>0
r[28]=(r[4]^r[10])>>>0
r[29]=(r[5]^r[11])>>>0
n=p-14
m=r[29]
r[31]=m+s[1+n]
l=r[28]
n=s[n]
k=r[31]
m=k<m?1:0
r[30]=l+n+m
m=p-30
n=s[m]
r[0]=n>>>1
n=(s[m]<<31|s[1+m]>>>1)>>>0
r[1]=n
n=1+m
l=s[n]
r[2]=l<<31>>>0
r[3]=0
r[4]=(r[0]|r[2])>>>0
r[5]=(r[1]|r[3])>>>0
l=s[m]
r[0]=l>>>8
l=(s[m]<<24|s[n]>>>8)>>>0
r[1]=l
l=s[n]
r[2]=l<<24>>>0
r[3]=0
r[6]=(r[0]|r[2])>>>0
r[7]=(r[1]|r[3])>>>0
l=s[m]
r[8]=l>>>7
n=(s[m]<<25|s[n]>>>7)>>>0
r[9]=n
r[10]=(r[6]^r[8])>>>0
r[11]=(r[7]^r[9])>>>0
r[28]=(r[4]^r[10])>>>0
r[29]=(r[5]^r[11])>>>0
n=p-32
m=r[29]
r[33]=m+s[1+n]
l=r[28]
n=s[n]
j=r[33]
m=j<m?1:0
r[32]=l+n+m
m=1+p
q&2&&A.E(s)
if(!(m<160))return A.a(s,m)
s[m]=k+j
j=r[30]
k=r[32]
n=s[m]<r[31]?1:0
s[p]=j+k+n}q=this.y
B.D.bk(r,12,28,q)
for(p=0;p<160;p+=2){n=r[20]
o&2&&A.E(r)
r[0]=n>>>14
m=(n<<18|r[21]>>>14)>>>0
r[1]=m
m=r[21]
r[2]=m<<18>>>0
r[3]=0
r[4]=(r[0]|r[2])>>>0
r[5]=(r[1]|r[3])>>>0
r[0]=n>>>18
l=(n<<14|m>>>18)>>>0
r[1]=l
r[2]=m<<14>>>0
r[3]=0
r[6]=(r[0]|r[2])>>>0
r[7]=(r[1]|r[3])>>>0
r[0]=0
r[1]=n>>>9
l=(n<<23|m>>>9)>>>0
r[2]=l
r[3]=m<<23>>>0
r[8]=(r[0]|r[2])>>>0
r[9]=(r[1]|r[3])>>>0
r[10]=(r[6]^r[8])>>>0
r[11]=(r[7]^r[9])>>>0
r[28]=(r[4]^r[10])>>>0
r[29]=(r[5]^r[11])>>>0
l=r[27]
r[31]=l+r[29]
k=r[26]
j=r[28]
i=r[31]
l=i<l?1:0
r[30]=k+j+l
l=r[22]
j=r[24]
r[32]=(n&(l^j)^j)>>>0
k=r[23]
h=r[25]
r[33]=(m&(k^h)^h)>>>0
r[35]=i+r[33]
g=r[30]
f=r[32]
e=r[35]
i=e<i?1:0
r[34]=g+f+i
i=$.Hm()
f=1+p
g=i.length
if(!(f<g))return A.a(i,f)
d=i[f]
if(!(f<160))return A.a(s,f)
r[37]=d+s[f]
if(!(p<g))return A.a(i,p)
g=i[p]
d=s[p]
c=r[37]
i=c<i[f]?1:0
r[36]=g+d+i
r[29]=e+c
c=r[34]
i=r[36]
g=r[29]
f=g<e?1:0
r[28]=c+i+f
i=r[12]
r[0]=i>>>28
f=(i<<4|r[13]>>>28)>>>0
r[1]=f
f=r[13]
r[2]=f<<4>>>0
r[3]=0
r[4]=(r[0]|r[2])>>>0
r[5]=(r[1]|r[3])>>>0
r[0]=0
r[1]=i>>>2
e=(i<<30|f>>>2)>>>0
r[2]=e
r[3]=f<<30>>>0
r[6]=(r[0]|r[2])>>>0
r[7]=(r[1]|r[3])>>>0
r[0]=0
r[1]=i>>>7
e=(i<<25|f>>>7)>>>0
r[2]=e
r[3]=f<<25>>>0
r[8]=(r[0]|r[2])>>>0
r[9]=(r[1]|r[3])>>>0
r[10]=(r[6]^r[8])>>>0
r[11]=(r[7]^r[9])>>>0
r[32]=(r[4]^r[10])>>>0
r[33]=(r[5]^r[11])>>>0
e=r[14]
d=r[16]
r[34]=(i&(e|d)|e&d)>>>0
c=r[15]
b=r[17]
r[35]=(f&(c|b)|c&b)>>>0
a=r[33]
r[31]=a+r[35]
a0=r[32]
a1=r[34]
a2=r[31]
a=a2<a?1:0
r[30]=a0+a1+a
r[26]=j
r[27]=h
r[24]=l
r[25]=k
r[22]=n
r[23]=m
m=r[19]
r[21]=m+g
n=r[18]
k=r[28]
m=r[21]<m?1:0
r[20]=n+k+m
r[18]=d
r[19]=b
r[16]=e
r[17]=c
r[14]=i
r[15]=f
r[13]=g+a2
a2=r[30]
n=r[13]<g?1:0
r[12]=k+a2+n}s=q.length
if(1>=s)return A.a(q,1)
a3=q[1]
o=r[13]
q.$flags&2&&A.E(q)
q[1]=a3+o
o=q[0]
n=r[12]
q[0]=o+(n+(q[1]<a3?1:0))
if(3>=s)return A.a(q,3)
a4=q[3]
q[3]=a4+r[15]
o=q[2]
n=r[14]
q[2]=o+(n+(q[3]<a4?1:0))
if(5>=s)return A.a(q,5)
a3=q[5]
q[5]=a3+r[17]
o=q[4]
n=r[16]
q[4]=o+(n+(q[5]<a3?1:0))
if(7>=s)return A.a(q,7)
a4=q[7]
q[7]=a4+r[19]
o=q[6]
n=r[18]
q[6]=o+(n+(q[7]<a4?1:0))
if(9>=s)return A.a(q,9)
a3=q[9]
q[9]=a3+r[21]
o=q[8]
n=r[20]
q[8]=o+(n+(q[9]<a3?1:0))
if(11>=s)return A.a(q,11)
a4=q[11]
q[11]=a4+r[23]
o=q[10]
n=r[22]
q[10]=o+(n+(q[11]<a4?1:0))
if(13>=s)return A.a(q,13)
a3=q[13]
q[13]=a3+r[25]
o=q[12]
n=r[24]
q[12]=o+(n+(q[13]<a3?1:0))
if(15>=s)return A.a(q,15)
a4=q[15]
q[15]=a4+r[27]
s=q[14]
r=r[26]
q[14]=s+(r+(q[15]<a4?1:0))}}
A.lr.prototype={
glK(){return 16}}
A.jY.prototype={
br(a,b,c){return this.lC(a,t.L.a(b),c)},
lC(a0,a1,a2){var s=0,r=A.J(t.L),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$br=A.K(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:c=a0.b.a
b=c.length
if(b!==16)throw A.l(A.x(a0,"secretBox","Expected MAC length 16, actually "+b))
s=3
return A.t(A.k0(a2,!0,!1,!1,n.c,"AES-GCM"),$async$br)
case 3:m=a4
f=a0.a
l=c
c=f.length
e=J.aD(l)
k=new Uint8Array(c+e)
J.D2(k,0,f)
J.D2(k,c,l)
p=5
s=8
return A.t(A.xU({name:"AES-GCM",iv:A.bG(a0.c),additionalData:A.bG(a1),tagLength:J.aD(l)*8},m,A.bG(k)),$async$br)
case 8:j=a4
c=J.bq(j,0,null)
q=c
s=1
break
p=2
s=7
break
case 5:p=4
a=o.pop()
i=A.aw(a)
h=A.z(i)
if("name" in h){g=A.d(h.name)
if(J.a2(g,"OperationError"))throw A.l(A.DV())}throw a
s=7
break
case 4:s=2
break
case 7:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$br,r)},
bE(a,b,c){var s=t.L
return this.lO(s.a(a),s.a(b),c)},
lO(a,b,c){var s=0,r=A.J(t.yX),q,p=this,o,n,m,l,k
var $async$bE=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=p.ho()
s=3
return A.t(A.k0(c,!1,!0,!1,p.c,"AES-GCM"),$async$bE)
case 3:n=e
s=4
return A.t(A.y5({name:"AES-GCM",iv:A.bG(o),additionalData:A.bG(b),tagLength:128},n,A.bG(a)),$async$bE)
case 4:m=e
l=a.length
k=J.fF(m)
q=new A.ey(k.cC(m,0,l),new A.d1(k.cC(m,l,null)),o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bE,r)},
gcm(){return this.c},
gcf(){return this.d}}
A.n1.prototype={
gfF(){return!1},
eI(a,b){var s=this.i8(a,b),r=$.ed()
if(r&&b!==24)return new A.jY(b,a,null)
return s},
cG(){var s=this.i9(),r=$.ed()
if(r&&!this.gfF())return new A.jZ(s,null)
return s},
cK(a,b){var s=$.ed()
if(s)if(A.D8(a.gbd())!=null)return new A.n2(a,b)
return this.ia(a,b)},
cL(a){var s=$.ed()
if(s)return B.en
return this.ib(a)},
cn(){var s=$.ed()
if(s)return B.cx
return this.ic()},
eb(){var s=$.ed()
if(s)return B.ep
return this.ie()},
dj(){var s=$.ed()
if(s&&!this.gfF())return B.eo
return this.ig()}}
A.jZ.prototype={
aT(){var s=0,r=A.J(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aT=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.ux()
p=4
s=7
return A.t(A.mE($.Bm(),!0,A.c(["sign","verify"],t.s)),$async$aT)
case 7:m=b
e=g
s=8
return A.t(A.mC(A.z(m.privateKey)),$async$aT)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.aw(f)
k=n.b
if(k!=null){q=k.aT()
s=1
break}throw A.l(A.aq(A.bd(n).k(0)+".newKeyPair(...) failed: "+A.j(l)))
s=6
break
case 3:s=2
break
case 6:i=A.n(g.cv().d)
i.toString
i=A.vX(i)
h=A.n(g.cv().x)
h.toString
q=new A.d7(new A.bs(i,!1),new A.bD(A.vX(h),B.T),B.T)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aT,r)},
aP(a){t.L.a(a)
B.T.cE(a)
return A.Df(null).aP(a)},
aW(a,b,c){return this.hY(0,t.L.a(b),c)},
hY(a,b,c){var s=0,r=A.J(t.bu),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$aW=A.K(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:p=4
m=c.bu()
s=7
return A.t(c.b6(),$async$aW)
case 7:l=a1
g={crv:"Ed25519",d:A.mx(l.gaN()),kty:"OKP",x:A.mx(l.f.a)}
f=$.Bm()
s=8
return A.t(A.jE(g,f,!1,A.c(["sign"],t.s)),$async$aW)
case 8:k=a1
s=9
return A.t(A.mJ(f,k,A.bG(b)),$async$aW)
case 9:j=a1
s=10
return A.t(m,$async$aW)
case 10:f=a1
q=new A.fo(j,f)
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
i=A.aw(d)
h=n.b
if(h!=null){q=h.aW(0,b,c)
s=1
break}throw A.l(A.aq(A.bd(n).k(0)+".sign(...) failed: "+A.j(i)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aW,r)},
bJ(a,b){return this.mX(t.L.a(a),b)},
mX(a,b){var s=0,r=A.J(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bJ=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=b.a
f=g.length
if(f!==64)A.h(A.aq("Ed25519 signature must be 64 bytes (got "+f+" bytes)"))
m=b.b
B.T.d6(m.a)
p=4
f=A.bG(m.a)
i=$.Bm()
s=7
return A.t(A.hE(f,i,!0,A.c(["verify"],t.s)),$async$bJ)
case 7:l=d
g=A.Bh(i,l,A.bG(g),A.bG(a))
q=g
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
k=A.aw(e)
j=n.b
if(j!=null){q=j.bJ(a,b)
s=1
break}throw A.l(A.aq(A.bd(n).k(0)+".verify(...) failed: "+A.j(k)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bJ,r)}}
A.fJ.prototype={
aC(a){return this.m6(t.L.a(a))},
m6(a){var s=0,r=A.J(t.yO),q,p=this,o,n
var $async$aC=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=J
s=3
return A.t(A.xW(p.ghH(),A.bG(a)),$async$aC)
case 3:q=new o.ek(n.bq(c,0,null))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aC,r)}}
A.k1.prototype={
ghH(){return"SHA-256"}}
A.k2.prototype={
ghH(){return"SHA-512"}}
A.lQ.prototype={}
A.lR.prototype={}
A.n2.prototype={
aY(a,b,c){var s=t.L
s.a(b)
return this.lF(s.a(a),b,c)},
lF(a,b,c){var s=0,r=A.J(t.A0),q,p=this,o,n,m,l,k
var $async$aY=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:n=p.a
m=A.D8(n.gbd())
if(m==null)throw A.l(A.az("The hash algorithm "+n.gbd().k(0)+" is not supported by Web Crypto API."))
s=3
return A.t(p.d0(c),$async$aY)
case 3:o=e
l=A
k=A
s=4
return A.t(A.mA({name:"HKDF",hash:m,salt:A.bG(b),info:A.bG(a)},o,8*p.b),$async$aY)
case 4:q=new l.bp(new k.bs(e,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aY,r)},
d0(a){var s=0,r=A.J(t.m),q,p,o
var $async$d0=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=A
o=A
s=4
return A.t(a.cH(),$async$d0)
case 4:s=3
return A.t(p.hE(o.bG(c),"HKDF",!1,A.c(["deriveBits"],t.s)),$async$d0)
case 3:q=c
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d0,r)},
gd9(){return this.a},
ge0(){return this.b}}
A.k_.prototype={
b4(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.l6(a,s.a(b),c,d)},
h1(a,b,c){return this.b4(a,B.A,b,c)},
l6(a,b,c,d){var s=0,r=A.J(t.Ep),q,p=this,o,n
var $async$b4=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.t(p.cZ(d),$async$b4)
case 4:s=3
return A.t(n.mJ("HMAC",f,A.bG(a)),$async$b4)
case 3:q=new o.d1(f)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b4,r)},
cZ(a){var s=0,r=A.J(t.m),q,p=this,o,n
var $async$cZ=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.t(a.cH(),$async$cZ)
case 4:s=3
return A.t(o.hE(n.bG(c),{name:"HMAC",hash:p.b},!1,A.c(["sign"],t.s)),$async$cZ)
case 3:q=c
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$cZ,r)},
gbd(){return this.a}}
A.n3.prototype={
aT(){var s=0,r=A.J(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aT=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.ux()
p=4
s=7
return A.t(A.mE($.Bn(),!0,A.c(["deriveBits"],t.s)),$async$aT)
case 7:m=b
e=g
s=8
return A.t(A.mC(A.z(m.privateKey)),$async$aT)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.aw(f)
k=B.cF
if(k!=null){q=k.aT()
s=1
break}throw A.l(A.aq(A.bd(n).k(0)+".newKeyPair(...) failed: "+A.j(l)))
s=6
break
case 3:s=2
break
case 6:i=A.n(g.cv().d)
i.toString
i=new Uint8Array(A.aH(A.vX(i)))
h=A.n(g.cv().x)
h.toString
q=new A.d7(new A.bs(i,!1),new A.bD(new Uint8Array(A.aH(A.vX(h))),B.U),B.T)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aT,r)},
aP(a){t.L.a(a)
B.U.cE(a)
return new A.i5(null).aP(a)},
b3(a,b){return this.hX(a,b)},
hX(a2,a3){var s=0,r=A.J(t.c),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b3=A.K(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:c=a3
B.U.d6(c.a)
m=A.ux()
p=4
s=7
return A.t(a2.b6(),$async$b3)
case 7:l=a5
B.T.cE(l.gaN())
a1=m
s=8
return A.t(A.jE({crv:"X25519",d:A.mx(l.gaN()),kty:"OKP",x:A.mx(l.f.a)},$.Bn(),!1,A.c(["deriveBits"],t.s)),$async$b3)
case 8:a1.b=a5
p=2
s=6
break
case 4:p=3
b=o.pop()
k=A.aw(b)
j=B.cF
if(j!=null){q=j.b3(a2,a3)
s=1
break}throw A.l(A.aq(A.bd(n).k(0)+".sharedSecretKey(...) failed to construct JS private key: "+A.j(k)))
s=6
break
case 3:s=2
break
case 6:i=A.ux()
p=10
a1=i
s=13
return A.t(A.jE({crv:"X25519",kty:"OKP",x:A.mx(c.a)},$.Bn(),!1,A.c([],t.s)),$async$b3)
case 13:a1.b=a5
p=2
s=12
break
case 10:p=9
a=o.pop()
h=A.aw(a)
d=A.aq(A.bd(n).k(0)+".sharedSecretKey(...) failed to construct JS public key: "+A.j(h))
throw A.l(d)
s=12
break
case 9:s=2
break
case 12:p=15
s=18
return A.t(A.mA({name:"X25519",public:i.cv()},m.cv(),256),$async$b3)
case 18:g=a5
q=new A.bp(new A.bs(g,!1),null)
s=1
break
p=2
s=17
break
case 15:p=14
a0=o.pop()
f=A.aw(a0)
d=A.aq(A.bd(n).k(0)+".sharedSecretKey(...) failed: "+A.j(f))
throw A.l(d)
s=17
break
case 14:s=2
break
case 17:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$b3,r)}}
A.eV.prototype={
gP(a){return A.bx(B.mB,this.gcm(),this.gcf(),B.t)},
J(a,b){if(b==null)return!1
return b instanceof A.eV&&this.gcm()===b.gcm()&&this.gcf()===b.gcf()},
k(a){var s=this
if(s.gcf()===12)return A.bd(s).k(0)+".with"+s.gcm()*8+"bits()"
return A.bd(s).k(0)+".with"+s.gcm()*8+"bits(nonceLength: "+s.gcf()+")"}}
A.hR.prototype={
gP(a){var s=this
return(s.a^s.b^s.c^s.d)>>>0},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.i_&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d},
k(a){var s=this
return A.bd(s).k(0)+"(\n  parallelism: "+s.a+",\n  memory: "+s.b+",\n  iterations: "+s.c+",\n  hashLength: "+s.d+",\n)"}}
A.hV.prototype={
gd5(){return 64},
gP(a){return A.c5(B.mC)},
J(a,b){if(b==null)return!1
return b instanceof A.f1},
k(a){var s=this.a
if(s===64)return"Blake2b()"
return"Blake2b(hashLengthInBytes: "+s+")"},
dh(){return new A.f1(this.a)},
$id2:1,
gdV(){return this.a}}
A.i8.prototype={
aT(){var s=new Uint8Array(32)
A.Cm(s,this.a)
return this.aP(s)},
k(a){return A.bd(this).k(0)+"()"}}
A.kA.prototype={
gP(a){var s=this.gd9(),r=A.c5(B.ea)
s=s.gbd()
return(11*((r^s.gP(s))>>>0)^this.ge0())>>>0},
J(a,b){var s,r
if(b==null)return!1
if(b instanceof A.kA){s=this.gd9()
r=b.gd9()
s=s.gbd().J(0,r.gbd())
s=s&&this.ge0()===b.ge0()}else s=!1
return s},
k(a){return A.bd(this).k(0)+"("+this.gd9().k(0)+")"}}
A.el.prototype={
gP(a){var s=A.c5(B.ea),r=this.gbd()
return(s^r.gP(r))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.el&&this.gbd().J(0,b.gbd())},
k(a){var s=this,r=s.gbd()
if(r instanceof A.ez)return A.bd(s).k(0)+".sha256()"
if(r instanceof A.d6)return A.bd(s).k(0)+".sha512()"
return A.bd(s).k(0)+"("+r.k(0)+")"}}
A.tR.prototype={}
A.ez.prototype={
gd5(){return 64},
gP(a){return A.c5(B.mM)},
gdV(){return 32},
J(a,b){if(b==null)return!1
return b instanceof A.ez},
dh(){return B.bl}}
A.tS.prototype={}
A.d6.prototype={
gd5(){return 128},
gP(a){return A.c5(B.mN)},
gdV(){return 64},
J(a,b){if(b==null)return!1
return b instanceof A.d6},
dh(){return B.cz}}
A.uj.prototype={
aT(){var s=new Uint8Array(32)
A.Cm(s,this.a)
return this.aP(s)},
k(a){return A.bd(this).k(0)+"()"}}
A.ng.prototype={
ho(){var s=this.gcf(),r=new Uint8Array(s)
A.Cm(r,this.a)
return r}}
A.ni.prototype={}
A.ek.prototype={
gP(a){return B.S.aC(this.a)},
J(a,b){if(b==null)return!1
return b instanceof A.ek&&B.S.bt(this.a,b.a)},
k(a){return"Hash(["+B.i.Z(this.a,",")+"])"}}
A.cv.prototype={
cO(){var s=$.jK()
return new A.m7(new A.j8(s))},
k(a){return A.bd(this).k(0)+"()"}}
A.kz.prototype={
m(a,b){t.L.a(b)
this.ad(b,0,b.length,!1)}}
A.m7.prototype={
ad(a,b,c,d){t.L.a(a)
if(this.c)throw A.l(A.aq("Sink is closed"))
if(b!==0||c!==J.aD(a))a=J.Bt(a,b,c)
this.b.m(0,a)
if(d)this.c=!0},
aq(){this.c=!0}}
A.nZ.prototype={}
A.o1.prototype={
aP(a){t.L.a(a)
throw A.l(A.az(u.V))}}
A.h0.prototype={}
A.io.prototype={
k(a){return A.bd(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.lf.prototype={
k(a){return A.bd(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.ip.prototype={
cE(a){var s=J.aD(t.L.a(a))
if(s!==32)throw A.l(A.x(s,"length","Algorithm "+this.a+" expects a private key with 32 bytes, but got: "+s+" bytes"))},
d6(a){var s=t.L.a(a).length
if(s!==32)throw A.l(A.x(s,"length","Algorithm "+this.a+" expects a public key with 32 bytes, but got: "+s+" bytes"))},
k(a){return"KeyPairType."+this.a}}
A.d1.prototype={
gP(a){return B.S.aC(this.a)},
J(a,b){if(b==null)return!1
return b instanceof A.d1&&B.S.bt(this.a,b.a)},
k(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.i.Z(s,",")+"])"}}
A.iT.prototype={
k(a){return A.bd(this).k(0)+": SecretBox has wrong message authentication code (MAC)"}}
A.d2.prototype={
bG(a,b,c){var s=t.L
s.a(b)
return this.mv(s.a(a),b,c)},
hn(a){return this.bG(B.A,B.A,a)},
mv(a,b,c){var s=0,r=A.J(t.sd),q,p=this,o,n
var $async$bG=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=$.jK()
n=new Uint8Array(A.aH(c.gaN()))
q=new A.mc(p,new A.bp(new A.bs(n,!0),c.c),b,a,new A.j8(o))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bG,r)},
k(a){return A.bd(this).k(0)+"()"}}
A.cz.prototype={
m(a,b){t.L.a(b)
this.ad(b,0,b.length,!1)},
aq(){if(this.gcc())return
this.ad(B.A,0,0,!0)}}
A.mc.prototype={
gcc(){return this.f!=null},
geW(){throw A.l(A.j0(null))},
ad(a,b,c,d){t.L.a(a)
if(this.f!=null)throw A.l(A.aq("Sink is closed"))
if(b!==0||c!==J.aD(a))a=J.Bt(a,b,c)
this.e.m(0,a)
if(d)this.aq()},
aq(){var s,r,q,p,o,n=this
if(n.f!=null)return
s=n.b
r=n.a.b4(n.e.hC(),n.d,n.c,s)
q=t.pF.a(new A.uU(s))
p=r.$ti
o=$.al
r.dz(new A.e3(new A.an(o,p),8,q,null,p.i("e3<1,1>")))
n.f=r},
eV(){var s=this.f
if(s==null)throw A.l(A.aq("Sink is not closed"))
return s},
hj(){throw A.l(A.az(this.k(0)+" does not support macSync()"))}}
A.uU.prototype={
$0(){var s=this.a
s.b.dR()
s.ec()},
$S:27}
A.ms.prototype={}
A.ey.prototype={
gP(a){return(B.S.aC(this.b.a)^B.S.aC(this.c)^B.S.aC(this.a))>>>0},
J(a,b){var s
if(b==null)return!1
if(b instanceof A.ey){s=B.S.bt(this.b.a,b.b.a)
s=s&&B.S.bt(this.c,b.c)&&B.S.bt(this.a,b.a)}else s=!1
return s},
k(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.i.Z(this.c,",")+"],\n  mac: "+this.b.k(0)+",\n)"}}
A.he.prototype={
dR(){},
cH(){return this.b6().mP(new A.tO(),t.L)}}
A.tO.prototype={
$1(a){return t.A0.a(a).gaN()},
$S:246}
A.bp.prototype={
gaN(){var s=this.b
if(s.a==null)throw A.l(A.aq("Secret key has been destroyed: "+this.k(0)))
return s},
gP(a){var s=A.c5(B.mL)
return(s^(this.b.a==null?0:B.S.aC(this.gaN())))>>>0},
J(a,b){if(b==null)return!1
if(this.b.a==null)return!1
return b instanceof A.bp&&B.S.bt(this.gaN(),b.gaN())},
b6(){var s=0,r=A.J(t.A0),q,p=this
var $async$b6=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:q=A.aV(p,t.A0)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b6,r)},
k(a){return"SecretKeyData(...)"}}
A.bs.prototype={
gq(a){var s=this.a
if(s==null)throw A.l(A.az("The bytes have been destroyed"))
return J.aD(s)},
sq(a,b){throw A.l(A.az("The bytes are unmodifiable."))},
h(a,b){var s=this.a
if(s==null)throw A.l(A.aq("The bytes have been destroyed"))
return J.as(s,b)},
j(a,b,c){A.R(c)
throw A.l(A.az("The bytes are unmodifiable."))},
dR(){var s=this.a
if(s!=null){this.a=null
if(this.b)A.CG(s)}}}
A.fo.prototype={
gP(a){return(B.aD.aC(this.a)^this.b.gP(0))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.fo&&B.aD.bt(this.a,b.a)&&this.b.J(0,b.b)},
k(a){return"Signature(["+B.i.Z(this.a,", ")+"], publicKey: "+this.b.k(0)+")"}}
A.ls.prototype={
aP(a){t.L.a(a)
throw A.l(A.az(u.V))}}
A.d7.prototype={
gaN(){var s=this.d
if(s.a==null)throw A.l(A.aq(this.k(0)+" has been destroyed."))
return s},
gP(a){return(this.f.gP(0)^A.c5(this.b))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.d7&&this.f.J(0,b.f)&&this.b===b.b},
b6(){var s=0,r=A.J(t.jC),q,p=this
var $async$b6=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.l(A.aq("Private key has been destroyed"))
q=p
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b6,r)},
dS(){var s=0,r=A.J(t.L),q,p=this
var $async$dS=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.l(A.aq("Private key has been destroyed"))
q=p.gaN()
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dS,r)},
bu(){var s=0,r=A.J(t.qC),q,p=this
var $async$bu=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:q=p.f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bu,r)},
k(a){var s=this.f.k(0)
return"SimpleKeyPairData(..., publicKey: "+s+")"},
$iBT:1}
A.bD.prototype={
gP(a){return(B.aD.aC(this.a)^A.c5(this.b))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.bD&&this.b===b.b&&B.aD.bt(this.a,b.a)},
l(a,b){var s,r,q,p=this.a,o=t.qC.a(b).a,n=p.length,m=o.length,l=n<=m?n:m
for(s=0;s<l;++s){if(!(s<n))return A.a(p,s)
r=p[s]
if(!(s<m))return A.a(o,s)
q=B.d.l(r,o[s])
if(q!==0)return q}return B.d.l(n,m)},
k(a){return"SimplePublicKey(["+B.i.Z(this.a,",")+"], type: "+this.b.k(0)+")"},
$iaY:1}
A.l6.prototype={
m(a,b){this.a=new A.ek(b.a)},
aq(){},
$ib5:1}
A.pe.prototype={
gd5(){return this.gdW().gl1()},
aC(a){t.L.a(a)
return A.aV(new A.ek(this.gdW().O(a).a),t.yO)},
cO(){var s=new A.l6(),r=this.gdW().cV(s),q=this.gdV()
q=new Uint8Array(q)
return new A.l7(this.gdW(),r,s,q)}}
A.l7.prototype={
gcc(){return this.e},
gq(a){return this.d},
m(a,b){var s=this
t.L.a(b)
if(s.e)throw A.l(A.aq("Already closed"))
s.d=s.d+b.length
s.b.m(0,b)},
ad(a,b,c,d){var s=this
t.L.a(a)
if(s.e)throw A.l(A.aq("Already closed"))
A.bQ(b,c,J.aD(a))
s.d=s.d+(c-b)
s.b.ad(a,b,c,d)
if(d)s.aq()},
aq(){var s=this
if(s.e)return
s.e=!0
s.b.aq()
B.i.aZ(s.f,0,s.c.a.a)},
cR(){var s=this,r=s.c
r.a=null
s.b=s.a.cV(r)
s.e=!1
s.d=0},
gbv(){return this.f}}
A.kd.prototype={
br(a,b,c){return this.lD(a,t.L.a(b),c)},
lD(a,b,c){var s=0,r=A.J(t.L),q,p=this,o,n
var $async$br=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.t(c.b6(),$async$br)
case 3:q=p.lE(o,n,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$br,r)},
lE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(b)
s=c.gaN().gq(0)
r=this.d
if(s!==r)throw A.l(A.x(c,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
q=A.F8(c)
p=new Uint32Array(4)
A.mw(p,0,p,0,q)
p[0]=A.bT(p[0])
p[1]=A.bT(p[1])
p[2]=A.bT(p[2])
p[3]=A.bT(p[3])
o=A.De(p,a.c)
n=J.mN(B.i.ga9(o),0,null)
m=a.a
l=B.S.bt(B.cy.fn(m,b,q,p,n).a,a.b.a)
if(!l)throw A.l(A.DV())
A.xr(o,1)
l=m.length
k=B.d.u(l+31,16)*4
j=new Uint32Array(k)
for(i=0;i<k;i+=4){A.mw(j,i,n,0,q)
A.xr(o,1)}h=J.bq(B.D.ga9(j),j.byteOffset,l)
for(k=h.length,g=h.$flags|0,i=0;i<l;++i){if(!(i<k))return A.a(h,i)
f=h[i]
e=m[i]
g&2&&A.E(h)
h[i]=f^e}return h},
bE(a,b,c){var s=t.L
return this.lP(s.a(a),s.a(b),c)},
lP(a,b,c){var s=0,r=A.J(t.yX),q,p=this,o,n
var $async$bE=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.t(c.b6(),$async$bE)
case 3:q=p.lQ(o,n,null,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bE,r)},
lQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(b)
s=d.gaN().gq(0)
r=this.d
if(s!==r)throw A.l(A.x(d,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
c=this.ho()
q=A.F8(d)
p=new Uint32Array(4)
A.mw(p,0,p,0,q)
p[0]=A.bT(p[0])
p[1]=A.bT(p[1])
p[2]=A.bT(p[2])
p[3]=A.bT(p[3])
o=A.De(p,c)
n=J.mN(B.i.ga9(o),0,null)
m=new Uint32Array(A.aH(n))
A.xr(o,1)
e=a.length
l=(B.d.u(e+15,16)+1)*4
k=new Uint32Array(l)
for(j=0;j<l;j+=4){A.mw(k,j,n,0,q)
A.xr(o,1)}i=J.bq(B.D.ga9(k),k.byteOffset,e)
for(l=i.length,h=i.$flags|0,j=0;j<e;++j){if(!(j<l))return A.a(i,j)
g=i[j]
f=a[j]
h&2&&A.E(i)
i[j]=g^f}return new A.ey(i,B.cy.fn(i,b,q,p,m),c)},
gcf(){return this.c},
gcm(){return this.d}}
A.ki.prototype={
b4(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
s.a(b)
throw A.l(A.az("AES-GCM MAC algorithm can NOT be called separately."))},
eZ(a,b,c){var s=t.L
s.a(b)
s.a(a)
throw A.l(A.j0(null))},
k(a){return"DartGcm()"},
fn(a,b,c,d,e){var s,r,q,p,o,n=4294967296,m=t.L
m.a(a)
m.a(b)
s=new Uint32Array(4)
A.ke(s,d,b)
A.ke(s,d,a)
r=8*b.length
q=8*a.length
p=new DataView(new ArrayBuffer(16))
p.setUint32(0,B.d.u(r,n),!1)
p.setUint32(4,B.d.T(r,n),!1)
p.setUint32(8,B.d.u(q,n),!1)
p.setUint32(12,B.d.T(q,n),!1)
A.ke(s,d,J.bq(B.az.ga9(p),0,null))
o=new Uint32Array(4)
A.mw(o,0,e,0,c)
s[0]=(s[0]^o[0])>>>0
s[1]=(s[1]^o[1])>>>0
s[2]=(s[2]^o[2])>>>0
s[3]=(s[3]^o[3])>>>0
return new A.d1(J.bq(B.D.ga9(s),0,null))}}
A.lU.prototype={}
A.lX.prototype={}
A.nj.prototype={}
A.i_.prototype={
gP(a){return(A.hR.prototype.gP.call(this,0)^B.fr.gP(null))>>>0},
J(a,b){var s
if(b==null)return!1
if(b instanceof A.i_)s=this.i6(0,b)
else s=!1
return s},
d7(a,b){var s=B.A,r=B.A
return this.lG(t.L.a(a),b)},
lG(a3,a4){var s=0,r=A.J(t.c),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$d7=A.K(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:j=B.A
i=B.A
h=m.b
g=m.a
f=m.c
e=m.d
d=new Uint32Array(256)
c=new Uint32Array(256)
b=new A.nk(g,h,f,e,B.bo,19,null,d,c,new Uint32Array(256))
b.io(null,e,f,null,h,null,B.bo,g,19)
l=b
p=3
a=l
a0=j
a1=a3
a2=i
s=7
return A.t(a4.cH(),$async$d7)
case 7:s=6
return A.t(a.dQ(a0,a1,a2,a6),$async$d7)
case 6:k=a6
q=new A.bp(new A.bs(k,!1),null)
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.e6()
s=n.pop()
break
case 5:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$d7,r)}}
A.fO.prototype={
U(){return"DartArgon2Mode."+this.b}}
A.kf.prototype={
gd4(){var s,r=this,q=r.at
if(q===$){s=new A.nm(r).$0()
r.at!==$&&A.hL()
r.at=s
q=s}return q},
io(a,b,c,d,e,f,g,h,i){var s,r,q=this,p=null
if($.eT()!==B.a1)A.h(A.j0("The platform should be little-endian."))
s=q.a
if(s<1)throw A.l(A.x(s,"parallelism",p))
r=q.b
if(r<8*s)throw A.l(A.x(r,"memory",p))
s=q.d
if(s<4)throw A.l(A.x(s,"hashLength",p))
s=q.c
if(s<1)throw A.l(A.x(s,"iterations",p))},
dQ(a,b,c,d){var s=t.L
s.a(d)
s.a(b)
s.a(c)
return this.lI(s.a(a),b,c,d)},
lI(a,b,c,d){var s=0,r=A.J(t.L),q,p=this,o,n,m,l,k
var $async$dQ=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:k=t.L
k.a(a)
k.a(b)
k.a(c)
k.a(d)
k=J.aD(d)
o=new DataView(new ArrayBuffer(40+k+b.length))
o.setUint32(0,p.a,!0)
o.setUint32(4,p.d,!0)
o.setUint32(8,p.b,!0)
o.setUint32(12,p.c,!0)
o.setUint32(16,p.f,!0)
o.setUint32(20,p.e.a,!0)
A.nl(o,A.nl(o,A.nl(o,A.nl(o,24,d),b),c),a)
n=J.bq(B.az.ga9(o),o.byteOffset,o.byteLength)
m=B.cE.m7(n).a
B.i.aO(n,0,n.length,0)
s=3
return A.t(p.d8(m),$async$dQ)
case 3:l=f
B.i.aO(m,0,m.length,0)
q=l
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dQ,r)},
d8(a){return this.lJ(a)},
lJ(a){var s=0,r=A.J(t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$d8=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=m.as
h=new A.cJ(new A.an($.al,t.hR),t.th)
g=h.a
m.as=g
s=i!=null?3:4
break
case 3:s=5
return A.t(i,$async$d8)
case 5:case 4:m.fc()
m.ay=!0
p=6
m.mb(a)
s=9
return A.t(m.dZ(),$async$d8)
case 9:l=m.jB()
q=l
n=[1]
s=7
break
n.push(8)
s=7
break
case 6:n=[2]
case 7:p=2
m.ay=!1
k=m.as
j=g
if(k==null?j==null:k===j)m.as=null
h.lb()
s=n.pop()
break
case 8:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$d8,r)},
bK(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=4294967296
if(!(a3<256))return A.a(a2,a3)
s=a2[a3]
r=a3+1
if(!(r<256))return A.a(a2,r)
q=a2[r]
if(!(a4<256))return A.a(a2,a4)
p=a2[a4]
o=a4+1
if(!(o<256))return A.a(a2,o)
n=a2[o]
if(!(a5<256))return A.a(a2,a5)
m=a2[a5]
l=a5+1
if(!(l<256))return A.a(a2,l)
k=a2[l]
if(!(a6<256))return A.a(a2,a6)
j=a2[a6]
i=a6+1
if(!(i<256))return A.a(a2,i)
h=a2[i]
g=(s&65535)*p+((s&4294901760)>>>0)*(p&65535)
f=B.d.u(g,a1)
e=s+p+(g<<1>>>0)
q=q+n+B.d.u(e,a1)+((f+(s>>>16)*(p>>>16)<<1>>>0)+(g>>>31&1))>>>0
s=e>>>0
d=(j^s)>>>0
c=(h^q)>>>0
g=(m&65535)*c+((m&4294901760)>>>0)*(c&65535)
f=B.d.u(g,a1)
b=m+c+(g<<1>>>0)
k=k+d+B.d.u(b,a1)+((f+(m>>>16)*(c>>>16)<<1>>>0)+(g>>>31&1))>>>0
m=b>>>0
a=p^m
a0=n^k
p=((a0&16777215)<<8|a>>>24)>>>0
n=((a&16777215)<<8|a0>>>24)>>>0
g=(s&65535)*p+((s&4294901760)>>>0)*(p&65535)
f=B.d.u(g,a1)
e=s+p+(g<<1>>>0)
q=q+n+B.d.u(e,a1)+((f+(s>>>16)*(p>>>16)<<1>>>0)+(g>>>31&1))>>>0
s=e>>>0
a=c^s
c=d^q
j=((c&65535)<<16|a>>>16)>>>0
h=((a&65535)<<16|c>>>16)>>>0
g=(m&65535)*j+((m&4294901760)>>>0)*(j&65535)
f=B.d.u(g,a1)
b=m+j+(g<<1>>>0)
k=k+h+B.d.u(b,a1)+((f+(m>>>16)*(j>>>16)<<1>>>0)+(g>>>31&1))>>>0
m=b>>>0
d=p^m
c=n^k
a2.$flags&2&&A.E(a2)
a2[a3]=s
a2[r]=q
a2[a4]=(d<<1|c>>>31)>>>0
a2[o]=(c<<1|d>>>31)>>>0
a2[a5]=m
a2[l]=k
a2[a6]=j
a2[i]=h},
bL(a,b,c){var s,r,q=this,p=q.ax
if(p==null)p=q.ax=q.iG()
s=B.d.aA(q.gd4(),q.a)
r=b*s+c*B.d.u(s,4)+a
if(!(r>=0&&r<p.length))return A.a(p,r)
return p[r]},
mb(a){var s,r,q,p,o,n,m,l=this
if(a.length!==64)throw A.l(A.b0(null,null))
s=l.bL(3,0,0)
r=J.bq(B.D.ga9(s),s.byteOffset,72)
B.i.aZ(r,0,a)
q=J.jN(B.i.ga9(r),r.byteOffset,r.byteLength)
for(p=l.a,o=q.$flags|0,n=0;n<p;++n){o&2&&A.E(q,11)
q.setUint32(68,n,!0)
q.setUint32(64,0,!0)
m=l.bL(0,n,0)
l.fa(r,J.bq(B.D.ga9(m),m.byteOffset,m.byteLength))
q.setUint32(64,1,!0)
m=l.bL(1,n,0)
l.fa(r,J.bq(B.D.ga9(m),m.byteOffset,m.byteLength))}B.i.aO(r,0,r.length,0)},
dZ(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$dZ=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.c,o=q.a,n=0
case 2:if(!(n<p)){s=4
break}m=0
case 5:if(!(m<4)){s=7
break}l=0
case 8:if(!(l<o)){s=10
break}s=11
return A.t(q.e1(n,l,m),$async$dZ)
case 11:case 9:++l
s=8
break
case 10:case 6:++m
s=5
break
case 7:case 3:++n
s=2
break
case 4:return A.H(null,r)}})
return A.I($async$dZ,r)},
ht(a,b,c,d,e,f,g,h,i){var s=this,r=b+2,q=c+2,p=d+2,o=e+2,n=f+2,m=g+2,l=h+2,k=i+2
s.bK(a,b,d,f,h)
s.bK(a,r,p,n,l)
s.bK(a,c,e,g,i)
s.bK(a,q,o,m,k)
s.bK(a,b,p,g,k)
s.bK(a,r,e,m,h)
s.bK(a,c,o,f,l)
s.bK(a,q,d,n,i)},
f1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this.Q
for(s=a.length,r=b.length,q=h.$flags|0,p=0;p<256;++p){if(!(p<s))return A.a(a,p)
o=a[p]
if(!(p<r))return A.a(b,p)
n=b[p]
q&2&&A.E(h)
if(!(p<256))return A.a(h,p)
h[p]=(o^n)>>>0}for(p=0;p<8;++p){m=p*32
this.ht(h,m,m+4,m+8,m+12,m+16,m+20,m+24,m+28)}for(p=0;p<8;++p){l=p*4
this.ht(h,l,32+l,64+l,96+l,128+l,160+l,192+l,224+l)}if(c)for(q=d.length,o=d.$flags|0,p=0;p<256;++p){if(!(p<q))return A.a(d,p)
n=d[p]
k=h[p]
if(!(p<s))return A.a(a,p)
j=a[p]
if(!(p<r))return A.a(b,p)
i=b[p]
o&2&&A.E(d)
d[p]=(n^k^j^i)>>>0}else for(q=d.$flags|0,p=0;p<256;++p){o=h[p]
if(!(p<s))return A.a(a,p)
n=a[p]
if(!(p<r))return A.a(b,p)
k=b[p]
q&2&&A.E(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o^n^k)>>>0}},
e1(c4,c5,c6){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$e1=A.K(function(c7,c8){if(c7===1)return A.G(c8,r)
for(;;)switch(s){case 0:b8=p.gd4()
b9=p.a
c0=B.d.aA(b8,b9)
c1=B.d.u(c0,4)
c2=c4===0
c3=c2&&c6===0?2:0
o=c4>0,n=p.e,m=t.z,l=c6-1,k=c6<2,j=p.y,i=c6===0,h=p.z,g=h.$flags|0,f=p.c,e=n.a,d=!i,c=(c6+1)%4*c1,b=3*c1,a=n===B.bo,a0=b-1,a1=c6*c1,a2=a1-1,a3=c3
case 3:if(!(a3<c1)){s=5
break}s=B.d.T(a3,500)===0&&a3>0?6:7
break
case 6:s=8
return A.t(A.Ie(B.eS,m),$async$e1)
case 8:case 7:a4=a3===0
a5=a4?B.d.T(l,4):c6
a6=a3-1
a7=p.bL(B.d.T(a6,c1),c5,a5)
if(a)a8=k&&c2?B.cD:B.eH
else a8=n
if(a8===B.cD){a9=B.d.T(a3,128)
if(a9!==0)a5=a3===2&&i&&c2
else a5=!0
if(a5){g&2&&A.E(h)
h[0]=c4
h[2]=c5
h[4]=c6
h[6]=b8
h[8]=f
h[10]=e
h[12]=1+B.d.u(a3,128)
a5=$.Ge()
p.f1(h,a5,!1,j)
p.f1(j,a5,!1,j)}a5=2*a9
if(!(a5<256)){q=A.a(j,a5)
s=1
break}b0=j[a5];++a5
if(!(a5<256)){q=A.a(j,a5)
s=1
break}b1=j[a5]}else{a5=a7.length
if(0>=a5){q=A.a(a7,0)
s=1
break}b0=a7[0]
if(1>=a5){q=A.a(a7,1)
s=1
break}b1=a7[1]}b2=B.d.T(b1,b9)
if(c2&&i)b2=c5
if(c2){if(!d||b2===c5)b3=a1+a3-1
else b3=a4?a2:a1
b4=0}else{if(b2===c5)b3=b+a6
else b3=a4?a0:b
b4=c}a4=b0&65535
a5=b0>>>16
b5=a5*a5+B.d.u(a4*b0+((b0&4294901760)>>>0)*a4,4294967296)>>>0
b6=B.d.u((b3&65535)*b5+((b3&4294901760)>>>0)*(b5&65535),4294967296)
b7=B.d.T(b4+b3-1-B.d.T(B.d.am(b3,16)*(b5>>>16)+b6>>>0,b3),c0)
b4=B.d.aA(b7,c1)
p.f1(a7,p.bL(B.d.T(b7,c1),b2,b4),o,p.bL(a3,c5,c6))
case 4:++a3
s=3
break
case 5:case 1:return A.H(q,r)}})
return A.I($async$e1,r)},
e6(){if(this.ay)return
this.ax=null},
fa(a,b){var s,r,q=b.length,p=B.cE.hy(Math.min(q,64)),o=A.n_(p.a),n=t.L,m=n.a(A.c([q&255,q>>>8&255,q>>>16&255,q>>>24&255],t.t))
o.ad(m,0,m.length,!1)
n.a(a)
o.ad(a,0,a.length,!1)
o.aq()
if(q<=64){B.i.aZ(b,0,o.gbv())
return}m=o.gbv()
new Uint8Array(A.aH(m))
B.i.aZ(b,0,A.bF(m,0,A.cM(32,"count",t.S),A.aT(m).i("Q.E")))
s=q-32
a=new Uint8Array(A.aH(m))
o.d_(null)
for(r=32;s>64;){n.a(a)
o.ad(a,0,a.length,!1)
o.aq()
B.i.aZ(b,r,m)
r+=32
s-=32
B.i.aZ(a,0,m)
o.d_(null)}if(B.d.T(q,64)!==0)o=A.n_(p.hy(s).a)
n.a(a)
o.ad(a,0,a.length,!1)
o.aq()
B.i.aZ(b,r,o.gbv())},
iG(){var s,r,q=this.fc(),p=this.gd4(),o=J.Ds(p,t.Dd)
for(s=J.fF(q),r=0;r<p;++r)o[r]=s.eK(q,1024*r,256)
return o},
jB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=h-1
h=B.d.u(B.d.aA(i.gd4(),h),4)-1
s=i.bL(h,g,3)
for(r=s.length,q=0;q<g;++q){p=i.bL(h,q,3)
for(o=p.length,n=s.$flags|0,m=0;m<256;++m){if(!(m<r))return A.a(s,m)
l=s[m]
if(!(m<o))return A.a(p,m)
k=p[m]
n&2&&A.E(s)
s[m]=(l^k)>>>0}}j=new Uint8Array(i.d)
i.fa(J.bq(B.D.ga9(s),s.byteOffset,s.byteLength),j)
return j}}
A.nm.prototype={
$0(){var s=this.a,r=4*s.a
return r*B.d.aA(s.b,r)},
$S:67}
A.nk.prototype={
fc(){var s,r=this,q=r.ch
if(q!=null)return q
r.e6()
s=r.gd4()
return r.ch=B.D.ga9(new Uint32Array(256*s))},
e6(){if(this.ay)return
this.ch=null
this.i7()}}
A.f1.prototype={
dh(){return this},
hy(a){if(a===this.a)return this
return new A.f1(a)},
eZ(a,b,c){var s,r=t.L
r.a(b)
r.a(a)
r=A.n_(this.a)
s=c.gaN()
if(s.gq(0)>64)A.h(A.x(r.w,"secretKey",null))
r.d_(s)
return r},
cO(){return A.n_(this.a)}}
A.lV.prototype={}
A.lW.prototype={}
A.jW.prototype={
gbv(){var s,r=this,q=r.b
if(q===$){s=J.bq(B.D.ga9(r.a),0,r.w)
r.b!==$&&A.hL()
r.b=s
q=s}return q},
gfm(){var s,r=this,q=r.d
if(q===$){s=J.bq(B.D.ga9(r.c),0,null)
r.d!==$&&A.hL()
r.d=s
q=s}return q},
gcc(){return this.f},
gq(a){return this.e},
geW(){return this.gbv()},
ad(a,b,c,d){var s,r,q,p,o,n,m=this
t.L.a(a)
if(m.f)throw A.l(A.aq("Already closed"))
s=m.gfm()
r=m.e
for(q=J.ar(a),p=b;p<c;++p){o=B.d.T(r,128)
if(o===0&&r>0){m.e=r
m.fw(!1)}n=q.h(a,p)
s.$flags&2&&A.E(s)
if(!(o<s.length))return A.a(s,o)
s[o]=n;++r}m.e=r
if(d)m.aq()},
aq(){var s,r,q,p=this
if(p.f)return
p.f=!0
s=p.e
if(s===0||B.d.T(s,128)!==0)for(r=B.d.T(s,128);r<128;++r){q=p.gfm()
q.$flags&2&&A.E(q)
if(!(r<q.length))return A.a(q,r)
q[r]=0}p.fw(!0)},
cR(){this.d_(null)},
fw(a){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.r,h=k.c
for(s=i.$flags|0,r=0;r<16;++r){q=j[r]
s&2&&A.E(i)
if(!(r<32))return A.a(i,r)
i[r]=q}for(r=0;r<16;++r){q=16+r
p=B.dH[r]
s&2&&A.E(i)
if(!(q<32))return A.a(i,q)
i[q]=p}o=k.e
q=i[24]
s&2&&A.E(i)
if(24>=32)return A.a(i,24)
i[24]=(q^o>>>0)>>>0
q=i[25]
s=B.d.u(o,4294967296)
if(25>=32)return A.a(i,25)
i[25]=(q^s>>>0)>>>0
s=i[26]
if(26>=32)return A.a(i,26)
i[26]=(s^0)>>>0
s=i[27]
if(27>=32)return A.a(i,27)
i[27]=(s^0)>>>0
if(a){s=i[28]
if(28>=32)return A.a(i,28)
i[28]=(s^4294967295)>>>0
s=i[29]
if(29>=32)return A.a(i,29)
i[29]=(s^4294967295)>>>0}for(n=0;n<12;++n){m=n*16
if(!(m<192))return A.a(B.p,m)
s=B.p[m]
q=m+1
if(!(q<192))return A.a(B.p,q)
A.eY(i,0,8,16,24,h,s,B.p[q])
q=m+2
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+3
if(!(s<192))return A.a(B.p,s)
A.eY(i,2,10,18,26,h,q,B.p[s])
s=m+4
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+5
if(!(q<192))return A.a(B.p,q)
A.eY(i,4,12,20,28,h,s,B.p[q])
q=m+6
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+7
if(!(s<192))return A.a(B.p,s)
A.eY(i,6,14,22,30,h,q,B.p[s])
s=m+8
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+9
if(!(q<192))return A.a(B.p,q)
A.eY(i,0,10,20,30,h,s,B.p[q])
q=m+10
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+11
if(!(s<192))return A.a(B.p,s)
A.eY(i,2,12,22,24,h,q,B.p[s])
s=m+12
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+13
if(!(q<192))return A.a(B.p,q)
A.eY(i,4,14,16,26,h,s,B.p[q])
q=m+14
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+15
if(!(s<192))return A.a(B.p,s)
A.eY(i,6,8,18,28,h,q,B.p[s])}for(s=j.$flags|0,r=0;r<16;++r){q=j[r]
p=i[r]
l=i[16+r]
s&2&&A.E(j)
if(!(r<16))return A.a(j,r)
j[r]=(q^p^l)>>>0}},
d_(a){var s,r,q,p,o,n=this
t.ks.a(a)
n.f=!1
n.e=0
B.D.aO(n.c,0,32,0)
B.D.aO(n.r,0,32,0)
s=n.a
B.D.aZ(s,0,B.dH)
r=s[0]
q=a==null
p=q?0:a.gq(0)<<8
s.$flags&2&&A.E(s)
s[0]=(r^16842752^p^n.w)>>>0
if(!q){o=a.gq(0)
if(o>64)throw A.l(A.b0(null,null))
r=t.L
r.a(a)
n.ad(a,0,a.gq(0),!1)
q=B.d.T(o,128)
r=r.a(new Uint8Array(128-q))
n.ad(r,0,r.length,!1)}},
$icz:1}
A.lP.prototype={}
A.i0.prototype={
eI(a,b){if($.eT()!==B.a1)A.h(A.aq("BigEndian systems are unsupported"))
return new A.kd(a,b,this.a)},
cG(){return A.Df(this.a)},
cK(a,b){return new A.no(a,b)},
cL(a){if(a instanceof A.i4)return B.eI
return new A.i2(a)},
cn(){return B.bl},
eb(){return B.cz},
dj(){return new A.i5(this.a)}}
A.i1.prototype={
m7(a){var s
t.L.a(a)
s=this.cO()
s.ad(a,0,a.length,!0)
if(!s.gcc())A.h(A.aq("Not closed"))
return new A.ek(new Uint8Array(A.aH(s.gbv())))}}
A.f2.prototype={
m(a,b){t.L.a(b)
this.ad(b,0,J.aD(b),!1)},
aq(){this.ad(B.A,0,0,!0)}}
A.np.prototype={
b3(a,b){var s=0,r=A.J(t.c),q,p,o,n,m,l
var $async$b3=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.t(a.b6(),$async$b3)
case 3:m=d
l=m.b
l=l!==B.U
if(l)A.h(A.x(m,"keyPairData",null))
l=b.b!==B.U
if(l)A.h(A.x(b,"remotePublicKey",null))
p=A.Bz(m.gaN())
o=b.a
B.U.cE(p)
B.U.d6(o)
n=new Uint8Array(32)
A.Di(n,p,new Uint8Array(A.aH(o)))
q=new A.bp(new A.bs(n,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b3,r)}}
A.i3.prototype={
b4(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.l7(a,s.a(b),c,d)},
h1(a,b,c){return this.b4(a,B.A,b,c)},
l7(a,b,c,d){var s=0,r=A.J(t.Ep),q,p=this,o
var $async$b4=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:s=3
return A.t(p.bG(b,c,d),$async$b4)
case 3:o=f
o.ad(a,0,J.aD(a),!0)
s=4
return A.t(o.eV(),$async$b4)
case 4:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b4,r)},
bG(a,b,c){var s=t.L
s.a(b)
return this.mu(s.a(a),b,c)},
hn(a){return this.bG(B.A,B.A,a)},
mu(a,b,c){var s=0,r=A.J(t.kk),q,p=this,o,n
var $async$bG=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.t(c.b6(),$async$bG)
case 3:q=p.eZ(o,n,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bG,r)}}
A.cR.prototype={
eV(){return A.aV(this.hj(),t.Ep)},
hj(){if(!this.gcc())throw A.l(A.aq("Sink is not closed"))
return new A.d1(new Uint8Array(A.aH(this.geW())))},
$ibe:1,
$ib5:1,
$icz:1}
A.kg.prototype={
aP(a){return this.ms(t.L.a(a))},
ms(a){var s=0,r=A.J(t.gZ),q,p=this,o,n,m
var $async$aP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:if(J.aD(a)!==32)throw A.l(A.b0("Seed must have 32 bytes",null))
o=A
n=A
m=new A.bs(new Uint8Array(A.aH(a)),!1)
s=3
return A.t(p.dE(a),$async$aP)
case 3:q=o.aV(new n.d7(m,c,B.T),t.jC)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aP,r)},
aW(a,b,c){return this.hZ(0,t.L.a(b),c)},
hZ(a,a0,a1){var s=0,r=A.J(t.bu),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$aW=A.K(function(a2,a3){if(a2===1)return A.G(a3,r)
for(;;)switch(s){case 0:c=t.jC
s=3
return A.t(a1.b6(),$async$aW)
case 3:d=c.a(a3).gaN()
B.T.cE(d)
o=p.b
s=4
return A.t(o.aC(d),$async$aW)
case 4:n=a3.a
m=B.i.aL(n,0,32)
A.Dh(m)
l=new Int32Array(16)
l=new A.aF(l)
l.dr(new Uint8Array(A.aH(m)))
k=$.Bo()
j=A.By(A.kh(l,k))
B.T.d6(j)
l=t.uw
i=new A.lj()
h=t.L
c=A
b=h
s=5
return A.t(o.aC(A.Bw(A.c([B.i.du(n,32),a0],l))),$async$aW)
case 5:n=c.my(b.a(a3.a))
g=$.CM()
i.a=n.T(0,g)
f=A.By(A.kh(i.hF(),k))
c=A
b=h
s=6
return A.t(o.aC(A.Bw(A.c([f,j,a0],l))),$async$aW)
case 6:h=c.my(b.a(a3.a)).T(0,g).a_(0,A.my(h.a(m)).T(0,g)).T(0,g)
l=i.a
l.toString
g=h.C(0,l).T(0,g)
e=A.Ll(g,new Uint8Array(32))
o=A.D(f,t.S)
B.a.a1(o,e)
q=new A.fo(new Uint8Array(A.aH(o)),new A.bD(j,B.T))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aW,r)},
bJ(a,b){return this.mY(t.L.a(a),b)},
mY(a,b){var s=0,r=A.J(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$bJ=A.K(function(a0,a1){if(a0===1)return A.G(a1,r)
for(;;)switch(s){case 0:g=b.b.a
f=b.a
B.T.d6(g)
o=f.length
if(o!==64)A.h(A.aq("Ed25519 signature must be 64 bytes (got "+o+" bytes)"))
n=A.Dg(g)
if(n==null){q=!1
s=1
break}m=B.i.aL(f,0,32)
l=A.Dg(m)
if(l==null){q=!1
s=1
break}k=A.my(B.i.du(f,32))
o=$.CM()
if(k.l(0,o)>=0){q=!1
s=1
break}j=new A.lj()
e=j
d=A
c=t.L
s=3
return A.t(p.b.aC(A.Bw(A.c([m,g,a],t.uw))),$async$bJ)
case 3:e.a=d.my(c.a(a1.a)).T(0,o)
o=new Int32Array(16)
o=new A.aF(o)
o.c1(k)
i=A.kh(o,$.Bo())
h=A.kp()
A.Bx(h,A.kh(j.hF(),n),l,null)
q=i.lS(h)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bJ,r)},
dE(a){return this.k7(t.L.a(a))},
k7(a){var s=0,r=A.J(t.qC),q,p=this,o,n,m,l,k
var $async$dE=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:m=Uint8Array
l=A
k=B.i
s=3
return A.t(p.b.aC(a),$async$dE)
case 3:n=new m(l.aH(k.aL(c.a,0,32)))
A.Dh(n)
o=new Int32Array(16)
o=new A.aF(o)
o.dr(n)
q=new A.bD(A.By(A.kh(o,$.Bo())),B.T)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dE,r)}}
A.nn.prototype={
$2(a,b){return A.R(a)+J.aD(t.L.a(b))},
$S:242}
A.dt.prototype={
lS(a){var s,r,q,p,o=new Int32Array(16),n=new A.aF(o)
o=new Int32Array(16)
s=new A.aF(o)
o=this.a
r=a.c
n.ai(o,r)
q=this.c
p=a.a
s.ai(q,p)
n.bl(n,s)
if(!n.gdd())return!1
n.ai(o,r)
s.ai(q,p)
n.bl(n,s)
return n.gdd()}}
A.nA.prototype={
$0(){var s,r,q=null,p=new Int32Array(16),o=new A.aF(p)
o.c1(A.ut("46316835694926478169428394003475163141307993866256225615783033603165251855960",q))
p=new Int32Array(16)
s=new A.aF(p)
s.c1(A.ut("15112221349535400772501151409588531511454012693041857206046113283949847762202",q))
p=new Int32Array(16)
r=new A.aF(p)
r.ai(s,o)
return new A.dt(s,o,$.CL(),r)},
$S:240}
A.aF.prototype={
gdd(){return B.b3.b5(this.a,new A.tC())},
d2(a,b,c){var s,r,q,p,o,n,m=b.a,l=c.a,k=this.a
for(s=m.length,r=l.length,q=k.$flags|0,p=0,o=0;o<16;++o){if(!(o<s))return A.a(m,o)
n=m[o]
if(!(o<r))return A.a(l,o)
p=n+l[o]+B.d.u(p,65536)
q&2&&A.E(k)
if(!(o<k.length))return A.a(k,o)
k[o]=p&65535}if(15>=k.length)return A.a(k,15)
s=k[15]
r=B.d.u(p,65536)
q&2&&A.E(k)
k[15]=s+r*65536
this.er()},
hh(a){var s,r,q,p,o,n=this.a,m=a.a
for(s=n.length,r=m.length,q=15;q>=0;--q){if(!(q<s))return A.a(n,q)
p=n[q]
if(!(q<r))return A.a(m,q)
o=m[q]
if(p<o)return!1
if(p>o)return!0}return!0},
ai(a,b){A.ca(this.a,a.a,b.a)
this.er()},
hr(a){this.c1(A.ut(a,null))},
f0(a,b){this.c1(a.aD().mo(0,b.aD(),$.Gr()))},
c1(a){var s,r,q=this.a
if(a.a)throw A.l(A.b0("Negative",null))
for(s=0;s<16;++s){r=$.Hh().dk(0,a).aE(0)
q.$flags&2&&A.E(q)
if(!(s<q.length))return A.a(q,s)
q[s]=r
a=a.c2(0,16)}},
dr(a){var s,r,q=J.jN(B.i.ga9(a),a.byteOffset,32),p=this.a
for(s=0;s<16;++s){r=q.getUint16(2*s,!0)
p.$flags&2&&A.E(p)
if(!(s<p.length))return A.a(p,s)
p[s]=r}},
bl(a,b){var s,r,q,p,o,n,m,l,k=a.a,j=b.a,i=this.a,h=$.mL().a
for(s=h.length,r=k.length,q=j.length,p=i.$flags|0,o=0,n=0;n<16;++n){if(!(n<s))return A.a(h,n)
m=h[n]
if(!(n<r))return A.a(k,n)
l=k[n]
if(!(n<q))return A.a(j,n)
o=m+m+l-j[n]+B.d.am(o,16)
p&2&&A.E(i)
if(!(n<i.length))return A.a(i,n)
i[n]=o&65535}if(15>=i.length)return A.a(i,15)
s=i[15]
r=B.d.am(o,16)
p&2&&A.E(i)
i[15]=(s|r<<16)>>>0
this.er()},
aD(){var s,r,q,p="Invalid integer: ",o=this.a,n=$.bm()
for(s=o.length,r=0;r<16;++r){if(!(r<s))return A.a(o,r)
q=o[r]
if(q<0)throw A.l(A.aq(p+A.j(o)))
if(q>=65536)throw A.l(A.aq(p+A.j(o)))
n=n.hQ(0,A.aL(q).b_(0,r*16))}return n},
hD(a){var s,r,q,p,o=this.a,n=J.jN(B.i.ga9(a),a.byteOffset,32)
for(s=o.length,r=n.$flags|0,q=0;q<16;++q){if(!(q<s))return A.a(o,q)
p=o[q]
r&2&&A.E(n,10)
n.setUint16(2*q,p&65535,!0)}return a},
k(a){return"0x"+this.aD().bI(0,16)},
er(){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=s.$flags|0;this.hh($.mL());){if(0>=r)return A.a(s,0)
p=s[0]-65517
q&2&&A.E(s)
s[0]=p&65535
for(o=s.$flags|0,n=1;n<15;++n,p=m){if(!(n<r))return A.a(s,n)
m=s[n]-65535-(B.d.am(p,16)&1)
o&2&&A.E(s)
s[n]=m&65535}if(15>=r)return A.a(s,15)
l=s[15]
k=B.d.am(p,16)
o&2&&A.E(s)
s[15]=l-32767-(k&1)}}}
A.tC.prototype={
$1(a){return A.R(a)===0},
$S:239}
A.lj.prototype={
hF(){var s,r=new Int32Array(16)
r=new A.aF(r)
s=this.a
s.toString
r.c1(s)
return r},
k(a){return"0x"+this.a.bI(0,16)}}
A.no.prototype={
aY(a,b,c){var s=t.L
s.a(b)
return this.lH(s.a(a),b,c)},
lH(a3,a4,a5){var s=0,r=A.J(t.A0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aY=A.K(function(a6,a7){if(a6===1)return A.G(a7,r)
for(;;)switch(s){case 0:f=p.a
a0=A
a1=A
a2=f
s=4
return A.t(a5.cH(),$async$aY)
case 4:s=3
return A.t(a2.h1(a7,a4,new A.bp(new A.bs(a4,!1),null)),$async$aY)
case 3:e=new a0.bp(new a1.bs(a7.a,!1),null)
d=f.gbd().gdV()
c=p.b
b=B.d.aA(c,d)
a=new Uint8Array(c)
o=t.t,n=J.ar(a3),m=B.A,l=0
case 5:if(!(l<=b)){s=7
break}s=8
return A.t(f.hn(e),$async$aY)
case 8:k=a7
k.m(0,m)
if(n.gan(a3))k.m(0,a3)
k.m(0,A.c([1+l&255],o))
k.aq()
s=9
return A.t(k.eV(),$async$aY)
case 9:m=a7.a
j=l*d
if(j+m.length<=c)B.i.aZ(a,j,m)
else{i=c-j
h=A.aT(m)
g=new A.fr(m,0,i,h.i("fr<Q.E>"))
g.iq(m,0,i,h.i("Q.E"))
B.i.aZ(a,j,g)}case 6:++l
s=5
break
case 7:q=new A.bp(new A.bs(a,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aY,r)},
gd9(){return this.a},
ge0(){return this.b}}
A.i2.prototype={
eZ(a,b,c){var s,r,q,p,o,n,m,l,k=t.L
k.a(b)
k.a(a)
s=this.a
r=s.gd5()
q=new Uint8Array(r)
p=s.dh().cO()
o=s.dh().cO()
k.a(B.A)
if(B.A.length!==0)A.h(A.x(B.A,"aad","AAD is not supported by HMAC"))
n=c.gaN()
m=s.gd5()
p.cR()
l=n.gq(0)>m
if(l){p.ad(n,0,n.gq(0),!0)
n=new Uint8Array(A.aH(p.gbv()))
p.cR()}A.Eh(q,n,54)
p.ad(q,0,r,!1)
B.i.aO(q,0,r,0)
o.cR()
A.Eh(q,n,92)
o.ad(q,0,r,!1)
B.i.aO(q,0,r,0)
if(l)A.CG(n)
return new A.lY(s,q,p,o)},
gbd(){return this.a}}
A.lY.prototype={
gcc(){return this.e},
geW(){return this.d.gbv()},
ad(a,b,c,d){var s,r,q=this
t.L.a(a)
if(q.e)throw A.l(A.aq("Sink is closed"))
s=q.c
s.ad(a,b,c,d)
if(d){q.e=!0
r=s.gbv()
q.d.ad(r,0,r.length,!0)}}}
A.lZ.prototype={}
A.mr.prototype={}
A.i4.prototype={
cO(){var s=new Uint32Array(8),r=J.bq(B.D.ga9(s),0,32),q=new DataView(new ArrayBuffer(64))
q=new A.m_(B.jH,q,new Uint32Array(64),s,r)
q.cR()
return q}}
A.m_.prototype={
gcc(){return this.f},
gq(a){return this.w},
m(a,b){t.L.a(b)
this.ad(b,0,b.length,!1)},
ad(a,b,c,d){var s,r,q,p,o,n,m=this,l=4294967296
t.L.a(a)
if(m.f)throw A.l(A.aq("The sink has been closed"))
m.iF(a,b,c)
if(d){m.f=!0
s=m.b
r=m.r
s.$flags&2&&A.E(s,9)
s.setUint8(r,128);++r
if(r>56){for(;r<64;++r)s.setUint8(r,0)
m.ex()
r=0}for(;r<56;++r)s.setUint8(r,0)
q=8*m.w
s.setUint32(56,B.d.u(q,l),!1)
s.setUint32(60,B.d.T(q,l),!1)
m.ex()
p=m.e
if($.eT()!==B.av)for(o=p.$flags|0,r=0;r<8;++r){n=p[r]
o&2&&A.E(p)
if(!(r<8))return A.a(p,r)
p[r]=((n&255)<<24|n<<8&16711680|n>>>8&65280|n>>>24)>>>0}}},
aq(){if(!this.f)this.ad(B.A,0,0,!0)},
cR(){var s,r,q,p,o=this,n=o.w=o.r=0
o.f=!1
s=o.e
r=o.a
for(q=s.$flags|0;n<8;++n){p=r[n]
q&2&&A.E(s)
if(!(n<8))return A.a(s,n)
s[n]=p}},
iF(a,b,c){var s,r,q,p,o,n,m=this
t.L.a(a)
s=J.ar(a)
A.bQ(b,c,s.gq(a))
r=c-b
if(r===0)return
m.w+=r
q=m.b
p=m.r
for(o=q.$flags|0;b<c;++b){n=s.h(a,b)
o&2&&A.E(q,9)
q.setUint8(p,n);++p
if(p===64){m.ex()
p=0}}m.r=p},
ex(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.d,a5=a3.c
if(a5===$){s=J.mN(B.az.ga9(a3.b),0,null)
a3.c!==$&&A.hL()
a3.c=s
a5=s}for(r=a5.length,q=a4.$flags|0,p=0;p<16;++p){if(!(p<r))return A.a(a5,p)
o=a5[p]
q&2&&A.E(a4)
if(!(p<64))return A.a(a4,p)
a4[p]=((o&255)<<24|o<<8&16711680|o>>>8&65280|o>>>24)>>>0}for(p=16;p<64;++p){n=a4[p-2]
m=a4[p-7]
l=a4[p-15]
k=a4[p-16]
q&2&&A.E(a4)
if(!(p<64))return A.a(a4,p)
a4[p]=k+(((l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3)>>>0)+m+(((n<<15|n>>>17)^(n<<13|n>>>19)^n>>>10)>>>0)}j=a3.e
i=j[0]
h=j[1]
g=j[2]
f=j[3]
e=j[4]
d=j[5]
c=j[6]
b=j[7]
for(a=i,p=0;p<64;++p,b=c,c=d,d=e,e=a1,f=g,g=h,h=a,a=a2){a0=b+(((e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25))>>>0)+((e&d^(4294967295^e)&c)>>>0)+B.J[p]+a4[p]>>>0
a1=f+a0>>>0
a2=a0+((((a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22))>>>0)+((a&h^a&g^h&g)>>>0)>>>0)>>>0}j.$flags&2&&A.E(j)
if(0>=8)return A.a(j,0)
j[0]=a+i
r=j[1]
if(1>=8)return A.a(j,1)
j[1]=h+r
r=j[2]
if(2>=8)return A.a(j,2)
j[2]=g+r
r=j[3]
if(3>=8)return A.a(j,3)
j[3]=f+r
r=j[4]
if(4>=8)return A.a(j,4)
j[4]=e+r
r=j[5]
if(5>=8)return A.a(j,5)
j[5]=d+r
r=j[6]
if(6>=8)return A.a(j,6)
j[6]=c+r
r=j[7]
if(7>=8)return A.a(j,7)
j[7]=b+r},
gbv(){return this.x}}
A.m0.prototype={}
A.kj.prototype={
gdW(){return B.eB}}
A.m1.prototype={}
A.m2.prototype={}
A.i5.prototype={
aP(a){return this.mt(t.L.a(a))},
mt(a){var s=0,r=A.J(t.gZ),q,p,o,n
var $async$aP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:B.U.cE(a)
p=A.Bz(a)
o=A.Bz(p)
n=new Uint8Array(32)
A.Di(n,o,$.Gg())
q=new A.d7(new A.bs(p,!1),new A.bD(n,B.U),B.U)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aP,r)}}
A.nr.prototype={
$0(){var s=new Uint8Array(32)
s[0]=9
return s},
$S:238}
A.nq.prototype={
$0(){var s=new Int32Array(16)
s[0]=56129
s[1]=1
return s},
$S:237}
A.m3.prototype={}
A.uz.prototype={
bt(a,b){var s,r,q,p=t.L
p.a(a)
p.a(b)
p=J.ar(a)
s=J.ar(b)
if(p.gq(a)!==s.gq(b))return!1
for(r=0,q=0;q<p.gq(a);++q)r=(r|p.h(a,q)^s.h(b,q))>>>0
return r===0},
aC(a){var s,r,q,p,o
t.L.a(a)
for(s=J.ar(a),r=0,q=0;q<s.gq(a);++q){p=s.h(a,q)
o=B.d.T(q,16)
r=(r^B.d.kw(p,o)^B.d.c2(p,16-o))>>>0}return r}}
A.P.prototype={
gbR(){var s,r,q,p=this,o=p.c
if(o===$){s=p.b
r=p.a
q=s>0?A.bY(r,$.cO().aU(s)):A.bY(r.a_(0,$.cO().aU(Math.abs(s))),null)
p.c!==$&&A.hL()
o=p.c=q}return o},
J(a,b){if(b==null)return!1
return b instanceof A.P&&this.l(0,b)===0},
gP(a){var s=this.gA()
return A.bx(s.a,s.b,B.t,B.t)},
k(a){var s=this.gA(),r=s.a,q=(r.a?r.R(0):r).k(0),p=s.b
if(p<=0)q+=B.b.a_("0",-p)
else{r=q.length
if(r<=p)q="0."+B.b.a_("0",p-r)+q
else{r-=p
q=B.b.X(q,0,r)+"."+B.b.ac(q,r)}}return this.a.a?"-"+q:q},
M(){return this.k(0)},
l(a,b){var s=A.Dm(this,t.k5.a(b))
return s.a.a.l(0,s.b.a)},
C(a,b){var s=A.Dm(this,b),r=s.a
return new A.P(r.a.C(0,s.b.a),r.b)},
a_(a,b){return new A.P(this.a.a_(0,b.a),this.b+b.b)},
cz(a,b){var s,r,q,p,o,n=this.b
if(a>=n)return this
s=$.cO().aU(n-a)
n=this.a
r=n.aA(0,s)
q=n.mC(0,s)
p=q.l(0,$.bm())
if(p!==0){o=n.a
if(b===B.cn){if(o)r=r.a8(0,$.jL())}else if(b===B.ec){if(!o)r=r.C(0,$.jL())}else if(b===B.ba){n=q.a?q.R(0):q
if(n.a_(0,$.CT()).l(0,s)>=0)r=r.C(0,o?$.jL().R(0):$.jL())}}return new A.P(r,a)},
aD(){var s,r=this
A:{s=r.b
if(s>0){s=r.a.aA(0,$.cO().aU(s))
break A}if(s<0){s=r.a.a_(0,$.cO().aU(-s))
break A}s=r.a
break A}return s},
ck(a){var s,r=this
A:{s=r.b
if(s>0){s=$.cO().aU(s)
s=r.a.ck(0)/s.ck(0)
break A}if(s<0){s=r.a.a_(0,$.cO().aU(-s)).ck(0)
break A}s=r.a.ck(0)
break A}return s},
ge8(){return this.b<=0?0:Math.max(this.gA().b,0)},
by(a,b){var s,r,q,p
if(b===0)return this.cz(0,B.ba).aD().k(0)
s=this.cz(b,B.ba)
r=s.aD()
if(r.a)r=r.R(0)
q=$.Gj()
p=s.a
if(p.a)p=p.R(0)
p=q.C(0,new A.P(p,s.b)).C(0,new A.P(r.R(0),0))
q=s.l(0,$.M())<0?"-":""
return q+r.k(0)+"."+B.b.ac(new A.P(p.a,p.b-b).k(0),1)},
gA(){var s,r=this,q=r.d
if(q===$){s=new A.nw(r).$0()
r.d!==$&&A.hL()
r.d=s
q=s}return q},
$iaY:1}
A.nw.prototype={
$0(){var s,r=this.a,q=$.M(),p=r.l(0,q)
if(p===0)return q
for(;;){q=r.a
p=$.cO()
s=q.T(0,p).l(0,$.CS())
if(s===0){if(p.c===0)A.h(B.Y)
r=new A.P(q.bA(p),r.b-1)}else break}return r},
$S:231}
A.tt.prototype={
$1(a){return a.a.aA(0,a.b)},
$S:228}
A.hu.prototype={
U(){return"_Rounding."+this.b}}
A.cB.prototype={
gP(a){return A.bx(this.a,this.b,B.t,B.t)},
J(a,b){var s,r
if(b==null)return!1
s=!1
if(b instanceof A.cB){r=this.a.l(0,b.a)
if(r===0)s=this.b.l(0,b.b)===0}return s},
k(a){var s,r=this.a,q=r.l(0,$.hN())
if(q===0)return"0"
q=this.b
s=q.l(0,$.hO())
if(s===0)return r.k(0)
else return r.k(0)+"/"+q.k(0)},
l(a,b){t.Fx.a(b)
return this.a.a_(0,b.b).l(0,b.a.a_(0,this.b))},
a_(a,b){return A.bY(this.a.a_(0,b.a),this.b.a_(0,b.b))},
T(a,b){var s,r,q,p,o=this.dl(0,b)
o=A.bY(o.a.aA(0,o.b),null).a_(0,b)
s=this.a
r=o.b
q=this.b
p=A.bY(s.a_(0,r).a8(0,o.a.a_(0,q)),q.a_(0,r))
o=$.Hr()
if(p.J(0,o))return o
r=$.hN()
if(s.l(0,r)<0){o=b.a
o=o.l(0,r)<0?A.bY(o.R(0),b.b):b}s=o.b
r=p.b
return A.bY(p.a.a_(0,s).C(0,o.a.a_(0,r)),r.a_(0,s))},
dl(a,b){return A.bY(this.a.a_(0,b.b),this.b.a_(0,b.a))},
f5(a){var s=this.a,r=$.hN(),q=s.l(0,r)<0?A.bY(s.R(0),this.b):this,p=$.Hs(),o=q.a_(0,p),n=q.a.aA(0,q.b)
if(o.T(0,p).l(0,$.Ht())>=0)n=n.C(0,$.hO())
return s.l(0,r)<0?n.R(0):n},
aU(a){var s=this.a,r=this.b
return B.d.gdc(a)?A.bY(r,s).aU(-a):A.bY(s.aU(a),r.aU(a))},
$iaY:1}
A.cb.prototype={
U(){return"AccountKind."+this.b}}
A.dj.prototype={
U(){return"AccountSubtype."+this.b}}
A.br.prototype={
gaS(){var s=this.d
return s===B.M||s===B.Q||s===B.x},
bU(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a0==null?f.b:a0,c=b7==null?f.d:b7,b=b5==null?f.f:b5,a=c3==null?f.w:c3
if(a3)s=e
else s=a1==null?f.x:a1
r=c2==null?f.y:c2
if(a7)q=e
else q=b8==null?f.as:b8
if(a9)p=e
else p=c0==null?f.at:c0
if(b1)o=e
else o=c5==null?f.ax:c5
n=c4==null?f.ay:c4
m=b4==null?f.ch:b4
if(a5)l=e
else l=b3==null?f.CW:b3
if(b2)k=e
else k=c6==null?f.dy:c6
if(a6)j=e
else j=b6==null?f.fr:b6
if(a8)i=e
else i=b9==null?f.fx:b9
if(a4)h=e
else h=a2==null?f.fy:a2
if(b0)g=e
else g=c1==null?f.go:c1
return A.jQ(f.z,f.Q,d,s,f.r,h,l,f.e,m,b,f.a,j,f.c,c,q,i,p,g,f.db,f.dx,f.cx,f.cy,r,a,n,o,k)},
h6(a){var s=null
return this.bU(s,s,s,!1,!1,a,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
h7(a){var s=null
return this.bU(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,a,s,s,s,s,s,s,s,s)},
lh(a){var s=null
return this.bU(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,a,s,s,s,s,s,s,s,s,s,s,s,s,s)},
lv(a,b,c){var s=null
return this.bU(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,a,s,s,s,s,s,s,s,s,b,c,s,s)},
ls(a,b){var s=null
return this.bU(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,a,b,s,s)},
lo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=null
return this.bU(a,b,c,!1,d,!1,e,f,g,h,i,j,!1,s,s,k,l,s,m,n,o,p,q,s,s,r,s)},
ly(a,b,c,d,e,f){var s=null
return this.bU(s,s,s,a,!1,!1,!1,b,!1,c,!1,!1,d,s,s,s,s,e,s,s,s,s,s,s,s,s,f)},
lf(a){var s=null
return this.bU(a,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
hL(a,b){return this.kT(a,b,!1,this.w,this.ay)},
hK(a,b,c){var s=c==null,r=s?null:c.a
return this.kS(r,s?null:c.b,!0,a,b)},
n_(a,b){return this.hK(a,b,null)},
fY(a,b,c,d,e,f,g){var s=this,r=!e,q=r?c:s.cx,p=r?d:s.cy,o=e?a:s.db,n=e?b:s.dx
return A.jQ(s.z,s.Q,s.b,s.x,s.r,s.fy,s.CW,s.e,s.ch,s.f,s.a,s.fr,s.c,s.d,s.as,s.fx,s.at,s.go,o,n,q,p,s.y,f,g,s.ax,s.dy)},
kS(a,b,c,d,e){return this.fY(a,b,null,null,c,d,e)},
kT(a,b,c,d,e){return this.fY(null,null,a,b,c,d,e)},
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"alias",r.b)
q.j(0,"institution",r.c)
q.j(0,"kind",r.d.b)
q.j(0,"currency",r.e)
q.j(0,"holder",r.f)
q.j(0,"bookId",r.r)
q.j(0,"startDate",r.w.k(0))
q.j(0,"billingCycleDay",r.x)
q.j(0,"staleAfterDays",r.y)
q.j(0,"alertEmail",r.z)
q.j(0,"alertPhone",r.Q)
s=r.as
if(s!=null)q.j(0,"loan",s.M())
s=r.at
if(s!=null)q.j(0,"minimumBalance",s.M())
s=r.ax
if(s!=null)q.j(0,"statement",s.M())
s=r.ay
if(s!=null)q.j(0,"startFrom",s.M())
s=r.ch
if(s!=null)q.j(0,"driveFolder",s.M())
s=r.CW
if(s!=null)q.j(0,"closedAfter",s.k(0))
s=r.cx
if(s!=null)q.j(0,"replacedBy",s)
s=r.cy
if(s!=null)q.j(0,"replacedFrom",s.k(0))
s=r.db
if(s!=null)q.j(0,"ownStartDate",s.k(0))
s=r.dx
if(s!=null)q.j(0,"ownStartFrom",s.M())
s=r.dy
if(s!=null)q.j(0,"subtype",s.b)
s=r.fr
if(s!=null)q.j(0,"ifsc",s)
s=r.fx
if(s!=null)q.j(0,"micr",s)
s=r.fy
if(s!=null)q.j(0,"branch",s)
s=r.go
if(s!=null)q.j(0,"numberShown",s)
return q}}
A.vH.prototype={
$1(a){var s
A.n(a)
if(a!=null){s=$.Hg()
s=s.b.test(a)}else s=!1
return s},
$S:93}
A.c7.prototype={
cg(a){var s=this
return new A.c7(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q)}}
A.mT.prototype={}
A.yS.prototype={
$1(a){var s,r
t.W.a(a)
if(B.e5.v(0,a.y.a)){s=a.w
r=this.a
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>=0
s=r}else s=!1
return s},
$S:1}
A.AT.prototype={
$2(a,b){var s=t.h
s.a(a)
s.a(b)
return A.b(a.a,a.b,a.c).l(0,A.b(b.a,b.b,b.c))},
$S:102}
A.B_.prototype={
$1(a){var s,r
t.v.a(a)
s=this.a
if(a.b===s.a){r=a.d
s=s.w
s=A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))>=0}else s=!1
return s},
$S:9}
A.B0.prototype={
$2(a,b){var s=t.v,r=s.a(a).d
s=s.a(b).d
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:26}
A.B1.prototype={
$1(a){t.v.a(a)
return a.b===this.a.a&&a.r!=null},
$S:9}
A.B2.prototype={
$1(a){var s=t.W.a(a).x,r=this.a.w
return A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>=0},
$S:1}
A.B3.prototype={
$1(a){var s=t.W.a(a).w,r=this.a
return A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>0},
$S:1}
A.cl.prototype={}
A.Be.prototype={
$1(a){return A.R(a)+1},
$S:35}
A.Bf.prototype={
$0(){return 1},
$S:67}
A.Bg.prototype={
$2(a,b){var s=t.dK
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:226}
A.eC.prototype={
U(){return"StartFromKind."+this.b}}
A.hi.prototype={
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"kind",r.a.b)
s=r.b
if(s!=null)q.j(0,"year",s)
s=r.c
if(s!=null)q.j(0,"folder",s)
s=r.d
if(s!=null)q.j(0,"statementId",s)
return q}}
A.ko.prototype={
M(){return A.T(["id",this.a,"path",this.b],t.N,t.X)},
J(a,b){if(b==null)return!1
return b instanceof A.ko&&b.a===this.a&&b.b===this.b},
gP(a){return A.bx(this.a,this.b,B.t,B.t)}}
A.eE.prototype={
U(){return"StatementSource."+this.b}}
A.fp.prototype={
U(){return"StatementFormat."+this.b}}
A.dU.prototype={
U(){return"StatementCycle."+this.b}}
A.lx.prototype={
M(){var s,r,q=this,p=q.a
p=p==null?null:p.b
s=q.b
s=s==null?null:s.b
r=q.c
r=r==null?null:r.b
return A.T(["source",p,"format",s,"cycle",r,"day",q.d],t.N,t.X)},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.lx&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d},
gP(a){var s=this
return A.bx(s.a,s.b,s.c,s.d)},
k(a){return"StatementSetup("+this.M().k(0)+")"}}
A.du.prototype={
U(){return"FactPart."+this.b}}
A.kb.prototype={
M(){var s=this,r=s.f,q=t.N
return A.T(["id",s.a,"subject",s.b,"field",s.c,"value",s.d,"type",s.e,"source",A.T(["file",r.a,"location",r.b,"span",r.c],q,t.K),"fileDate",s.r.k(0),"confirmedOn",s.w.k(0)],q,t.X)}}
A.y8.prototype={
$1(a){return t.eG.a(a).b===this.a.e},
$S:217}
A.y9.prototype={
$1(a){A.d(a)
return $.eU().aM(0,a).gq(0)>=9||A.za(a)!==a},
$S:6}
A.vp.prototype={
$1(a){var s,r
A.d(a)
s=A.C("[A-Za-z0-9]",!0,!1)
if(s.b.test(a)){s=this.a
r=s.a
if(r>0){s.a=r-1
return a}return"X"}return a},
$S:11}
A.vs.prototype={
$1(a){var s,r=a.dn(0)
r.toString
s=A.C("\\D",!0,!1)
if(!(A.a8(r,s,"").length<6))r=A.ET(r)
return r},
$S:15}
A.zb.prototype={
$1(a){var s=a.dn(0)
s.toString
return A.ET(s)},
$S:15}
A.tr.prototype={}
A.ce.prototype={
dt(a){var s,r,q,p=this,o=p.z
if(o!=null)return o===B.bf?B.cu:B.bj
if(!p.x)return B.ct
s=p.w
r=s!=null
if(r&&s.a.a.ga7(0)===0)return B.bi
q=p.f
if(p.Q&&q!=null&&B.d.u(A.b(a.a,a.b,a.c).ar(A.b(q.a,q.b,q.c)).a,864e8)>2*p.as)return B.bk
if(r&&q!=null&&A.b(a.a,a.b,a.c).l(0,A.b(q.a,q.b,q.c))>0)return B.aC
return p.r.a.a.ga7(0)>0?B.bh:B.bg}}
A.cd.prototype={
U(){return"BillStatus."+this.b}}
A.eg.prototype={
U(){return"BillMark."+this.b}}
A.xs.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.y){s=this.a
s=s==null||a.a===s}else s=!1
return s},
$S:2}
A.xt.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.xu.prototype={
$1(a){return t.v.a(a).b===this.a.a},
$S:9}
A.xv.prototype={
$2(a,b){var s=t.v,r=s.a(a).d
s=s.a(b).d
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:26}
A.xw.prototype={
$1(a){t.W.a(a)
return a.d===B.X&&a.e===B.m},
$S:1}
A.xx.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:7}
A.xy.prototype={
$1(a){t.dh.a(a)
return a.b===this.a.a&&this.b.i4(a)==null},
$S:22}
A.xA.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<s.length;s.length===r||(0,A.m)(s),++n){m=s[n]
if(A.b(m.a,m.b,m.c).l(0,A.b(q,p,o))>0)return m}return null},
$S:211}
A.xz.prototype={
$2(a,b){var s,r,q,p=t.ok
p.a(a)
p.a(b)
s=B.b.l(a.b,b.b)
if(s!==0)return s
r=a.c
q=b.c
p=r==null
if(!p&&q!=null)return A.b(r.a,r.b,r.c).l(0,A.b(q.a,q.b,q.c))
if(p&&q==null)return B.b.l(a.a,b.a)
return p?1:-1},
$S:66}
A.vB.prototype={
$2(a,b){return t.B.a(a).C(0,t.W.a(b).f)},
$S:64}
A.vg.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.y){s=A.C("[^A-Z0-9]",!0,!1)
s=A.a8(a.c.toUpperCase(),s,"")===this.a}else s=!1
return s},
$S:2}
A.vh.prototype={
$1(a){var s,r,q,p=this
t.W.a(a)
if(a.d!==B.X||a.e!==B.j)return!1
if(a.ch!=null||a.cx!=null)return!1
s=p.a
r=s.gK().h(0,a.c)
r=r==null?null:r.gaS()
if(r!==!0)return!1
r=p.b
q=A.L(r)
if(new A.o(r,q.i("k(1)").a(new A.vd(a)),q.i("o<1>")).gq(0)!==1||p.c.e!==a.f.b)return!1
r=A.c([a.z],t.q)
for(s=s.e_(a.a),q=J.S(s.a),s=new A.O(q,s.b,s.$ti.i("O<1>"));s.n();)r.push(q.gt().z)
return new A.aj(r,t.tx.a(new A.ve()),t.BA).N(0,new A.vf(p.d))},
$S:1}
A.vd.prototype={
$1(a){return t.b.a(a).e===this.a.f.b},
$S:2}
A.ve.prototype={
$1(a){var s,r
A.n(a)
s=a==null?"":a
r=A.C("[^A-Z0-9]",!0,!1)
return A.a8(s.toUpperCase(),r,"")},
$S:32}
A.vf.prototype={
$1(a){return B.b.v(A.d(a),this.a)},
$S:6}
A.cG.prototype={
cg(a){var s=this
return new A.cG(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w)}}
A.u_.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.a3(A.ah(A.d(s)),this.b)}return s},
$S:59}
A.tZ.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.ax(A.d(s))}return s},
$S:58}
A.jX.prototype={}
A.eF.prototype={
U(){return"SubscriptionKind."+this.b}}
A.eh.prototype={
U(){return"BillingCycle."+this.b}}
A.hl.prototype={}
A.iP.prototype={
glT(){return this.a.C(0,this.b).a8(0,this.c)},
M(){return A.T(["rent",this.a.M(),"gst",this.b.M(),"tds",this.c.M()],t.N,t.X)}}
A.fa.prototype={}
A.cV.prototype={}
A.lk.prototype={}
A.bW.prototype={
U(){return"IndiaTaxKind."+this.b}}
A.kE.prototype={}
A.lu.prototype={}
A.lv.prototype={}
A.n0.prototype={
eT(a){var s,r
for(s=this.d,s=new A.ac(s,A.p(s).i("ac<1,2>")).gB(0);s.n();){r=s.d
if(J.D_(r.b,a))return r.a}return null}}
A.vM.prototype={
$1(a){return typeof a=="string"&&this.a.aH(a)!=null},
$S:28}
A.vN.prototype={
$1(a){t.B.a(a)
return a.b!==this.a||a.a.a.ga7(0)<0},
$S:200}
A.vO.prototype={
$1(a){return t.nq.a(a).b===this.a.h(0,"kind")},
$S:199}
A.cf.prototype={
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"description",r.a)
q.j(0,"quantity",r.b.k(0))
q.j(0,"unitPrice",r.c)
q.j(0,"amount",r.d)
s=r.e
if(s!=null)q.j(0,"gst",s)
return q}}
A.dp.prototype={
gdv(){return B.a.a5(this.x,0,new A.nh(),t.S)},
f9(){var s,r,q,p,o=this,n=A.w(t.N,t.X)
n.j(0,"draftId",o.a)
n.j(0,"bookId",o.b)
n.j(0,"customerId",o.c)
n.j(0,"date",o.d.k(0))
n.j(0,"due",o.e.k(0))
n.j(0,"seriesId",o.f)
n.j(0,"seq",o.r)
n.j(0,"number",o.w)
s=A.c([],t.bk)
for(r=o.x,q=r.length,p=0;p<r.length;r.length===q||(0,A.m)(r),++p)s.push(r[p].M())
n.j(0,"lines",s)
s=o.y
if(s!=null)n.j(0,"gstPercent",s)
n.j(0,"gst",o.z)
n.j(0,"customerName",o.Q)
n.j(0,"customerAddress",o.as)
s=o.at
if(s!=null)n.j(0,"attention",s)
s=o.ax
if(s!=null)n.j(0,"reference",s)
s=o.ay
if(s!=null)n.j(0,"note",s)
s=o.ch
if(s!=null)n.j(0,"footer",s)
n.j(0,"issuerName",o.CW)
n.j(0,"issuerAddress",o.cx)
n.j(0,"uenLast4",o.cy)
n.j(0,"accountId",o.db)
n.j(0,"bankName",o.dx)
n.j(0,"accountLast4",o.dy)
return n}}
A.nh.prototype={
$2(a,b){return A.R(a)+t.gM.a(b).d},
$S:55}
A.y3.prototype={
$2(a,b){var s=t.u
return B.b.l(s.a(a).b,s.a(b).b)},
$S:23}
A.yX.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.aA(a.c.h(0,"date"))
r.toString
s=A.aA(b.c.h(0,"date"))
s.toString
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:23}
A.xG.prototype={
$2(a,b){var s,r,q=t.nl
q.a(a)
q.a(b)
q=b.d
s=a.d
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.d.l(b.r,a.r)},
$S:198}
A.xZ.prototype={
$1(a){return t.gM.a(a).e==="standard"},
$S:196}
A.y_.prototype={
$2(a,b){return A.R(a)+t.gM.a(b).d},
$S:55}
A.fN.prototype={
k(a){return"CrossBookDiscrepancy("+this.a+": "+this.b+")"}}
A.xQ.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.xR.prototype={
$2(a,b){A.d(a)
return!J.CZ(t.C.a(b),new A.xP())},
$S:188}
A.xP.prototype={
$1(a){var s
t.W.a(a)
s=!0
if(a.at==null)if(a.ax==null){s=a.d
s=s===B.a_||s===B.Z}return s},
$S:1}
A.xS.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i
A.d(a)
t.C.a(b)
s=J.b1(b)
r=s.c_(b,new A.xM())
q=A.D(r,r.$ti.i("i.E"))
r=s.c_(b,new A.xN())
p=A.D(r,r.$ti.i("i.E"))
s=s.c_(b,new A.xO())
o=A.D(s,s.$ti.i("i.E"))
s=q.length
if(s!==1||p.length!==1){B.a.m(this.a,new A.fN(a,""+s+" advance(s) and "+p.length+" expense(s); expected one of each"))
return}s=B.a.gaQ(q).f
if(!s.J(0,B.a.gaQ(p).f)){B.a.m(this.a,new A.fN(a,"advance "+s.k(0)+" but expense "+B.a.gaQ(p).f.k(0)))
return}n=A.a3($.M(),s.b)
for(r=o.length,m=0;m<o.length;o.length===r||(0,A.m)(o),++m){l=o[m].f
k=l.b
j=n.b
if(k!==j)A.h(A.a7(j,k))
l=n.a.C(0,l.a)
n=new A.q(l,j)
i=B.e.h(0,j)
if(i==null)A.h(A.x(j,"currency","is not a supported currency"))
if((l.b<=0?0:Math.max(l.gA().b,0))>i)A.h(A.y(j+" allows "+A.j(i)+" decimal places",l.k(0),null))}if(s.a8(0,n).a.a.ga7(0)<0)B.a.m(this.a,new A.fN(a,"settled "+n.k(0)+" against an advance of "+s.k(0)))},
$S:187}
A.xM.prototype={
$1(a){return t.W.a(a).d===B.a_},
$S:1}
A.xN.prototype={
$1(a){return t.W.a(a).d===B.n},
$S:1}
A.xO.prototype={
$1(a){return t.W.a(a).d===B.Z},
$S:1}
A.dD.prototype={
U(){return"InvoiceState."+this.b}}
A.dE.prototype={}
A.yY.prototype={
$1(a){return t.W.a(a).ax!=null},
$S:1}
A.yZ.prototype={
$2(a,b){var s,r=t.qn
r.a(a)
r=r.a(b).a.e
s=a.a.e
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:186}
A.vE.prototype={
$1(a){return A.d(a).length>=2},
$S:6}
A.vj.prototype={
$1(a){return A.n(t.u.a(a).c.h(0,"invoiceId"))===this.a},
$S:31}
A.xT.prototype={
$1(a){t.W.a(a)
return a.d===B.a_&&a.ch!=null},
$S:1}
A.bK.prototype={}
A.cW.prototype={
U(){return"ForecastSource."+this.b}}
A.bn.prototype={
gi_(){var s=this.f
return this.r===B.m?s:A.a3($.M(),s.b).a8(0,s)}}
A.bN.prototype={}
A.nB.prototype={}
A.dh.prototype={
il(b4,b5,b6,b7,b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="currency",b2="is not a supported currency",b3=a9.c
if(b3==null)return
for(s=[!0,!1],r=a9.x,q=a9.b,p=a9.a.e,o=q.a,n=q.b,m=q.c,l=t.g,k=a9.f,j=k.b,k=k.a,i=b3.b,h=j!==i,b3=b3.a,g=i+" allows ",f=0;f<2;++f){e=s[f]
d=A.c([],l)
if(h)A.h(A.a7(i,j))
c=b3.C(0,k)
b=new A.q(c,i)
a=B.e.h(0,i)
if(a==null)A.h(A.x(i,b1,b2))
if((c.b<=0?0:Math.max(c.gA().b,0))>a)A.h(A.y(g+A.j(a)+" decimal places",c.k(0),b0))
for(c=!e,a0=0;a0<31;++a0){a1=A.b(o,n,m).av(864e8*a0)
a2=new A.B(A.b_(a1),A.b4(a1),A.av(a1))
for(a3=r.length,a4=0;a4<r.length;r.length===a3||(0,A.m)(r),++a4){a5=r[a4]
if(a5.x)a6=c&&a5.b===B.cI||a5.f.b!==p
else a6=!0
if(a6)continue
a6=a5.e
if((A.b(a6.a,a6.b,a6.c).l(0,A.b(o,n,m))<0?q:a6).J(0,a2)){a6=a5.f
if(!(a5.r===B.m)){a7=a6.b
a8=$.M()
a=B.e.h(0,a7)
if(a==null)A.h(A.x(a7,b1,b2))
if((a8.b<=0?0:Math.max(a8.gA().b,0))>a)A.h(A.y(a7+" allows "+A.j(a)+" decimal places",a8.k(0),b0))
a6=a6.a
a6=a8.C(0,new A.P(a6.a.R(0),a6.b))
a8=new A.q(a6,a7)
a=B.e.h(0,a7)
if(a==null)A.h(A.x(a7,b1,b2))
if((a6.b<=0?0:Math.max(a6.gA().b,0))>a)A.h(A.y(a7+" allows "+A.j(a)+" decimal places",a6.k(0),b0))
a6=a8}a7=a6.b
a8=b.b
if(a7!==a8)A.h(A.a7(a8,a7))
a6=b.a.C(0,a6.a)
b=new A.q(a6,a8)
a=B.e.h(0,a8)
if(a==null)A.h(A.x(a8,b1,b2))
if((a6.b<=0?0:Math.max(a6.gA().b,0))>a)A.h(A.y(a8+" allows "+A.j(a)+" decimal places",a6.k(0),b0))}}B.a.m(d,b)}if(e)a9.y=d}}}
A.nD.prototype={
la(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g="currency",f="is not a supported currency",e=this.c,d=A.L(e),c=d.i("o<1>"),b=A.D(new A.o(e,d.i("k(1)").a(new A.nE(a)),c),c.i("i.E"))
e=A.c([],t.g)
for(d=t.B,c=this.d,s=A.L(c),r=s.i("k(1)"),s=s.i("o<1>"),q=a+" allows ",p=0;p<31;++p){o=$.M()
n=B.e.h(0,a)
if(n==null)A.h(A.x(a,g,f))
m=o.b<=0
if((m?0:Math.max(o.gA().b,0))>n)A.h(A.y(q+A.j(n)+" decimal places",o.k(0),h))
l=B.a.a5(b,new A.q(o,a),new A.nF(p),d)
k=r.a(new A.nG(this,a,p))
n=B.e.h(0,a)
if(n==null)A.h(A.x(a,g,f))
if((m?0:Math.max(o.gA().b,0))>n)A.h(A.y(q+A.j(n)+" decimal places",o.k(0),h))
k=new A.o(c,k,s).a5(0,new A.q(o,a),new A.nH(),d)
j=k.b
i=l.b
if(j!==i)A.h(A.a7(i,j))
l=l.a.C(0,k.a)
n=B.e.h(0,i)
if(n==null)A.h(A.x(i,g,f))
if((l.b<=0?0:Math.max(l.gA().b,0))>n)A.h(A.y(i+" allows "+A.j(n)+" decimal places",l.k(0),h))
k=new A.q(o,a)
n=B.e.h(0,a)
if(n==null)A.h(A.x(a,g,f))
if((m?0:Math.max(o.gA().b,0))>n)A.h(A.y(q+A.j(n)+" decimal places",o.k(0),h))
o=k
m=o.b
if(m!==i)A.h(A.a7(i,m))
o=o.a
o=l.C(0,new A.P(o.a.R(0),o.b))
n=B.e.h(0,i)
if(n==null)A.h(A.x(i,g,f))
if((o.b<=0?0:Math.max(o.gA().b,0))>n)A.h(A.y(i+" allows "+A.j(n)+" decimal places",o.k(0),h))
e.push(new A.q(o,i))}return e},
ma(a){return B.a.N(this.c,new A.nI(a))}}
A.nE.prototype={
$1(a){t.ov.a(a)
return a.a.e===this.a&&a.y.length!==0},
$S:49}
A.nF.prototype={
$2(a,b){var s,r
t.B.a(a)
s=t.ov.a(b).y
r=this.a
if(!(r<s.length))return A.a(s,r)
return a.C(0,s[r])},
$S:181}
A.nG.prototype={
$1(a){var s,r
t.Fj.a(a)
s=!1
if(a.x)if(a.f.b===this.b){s=this.a.a
r=a.e
if(A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))<0)r=s
s=s.aG(this.c)
s=A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))<=0}return s},
$S:179}
A.nH.prototype={
$2(a,b){return t.B.a(a).C(0,t.Fj.a(b).gi_())},
$S:174}
A.nI.prototype={
$1(a){var s
t.ov.a(a)
if(a.a.e===this.a)s=a.c==null||a.w
else s=!1
return s},
$S:49}
A.lc.prototype={}
A.Ar.prototype={
$1(a){return B.b.l(t.AB.a(a).x,this.a)<=0},
$S:46}
A.As.prototype={
$0(){return B.a.ga0(this.a)},
$S:167}
A.At.prototype={
$1(a){return A.d(a).length!==0},
$S:6}
A.Au.prototype={
$1(a){var s,r,q,p,o=this
t.W.a(a)
if(a.c!==o.a.d||a.e!==o.b||o.c.v(0,a.a))return!1
s=o.d
r=a.w
q=B.d.u(A.b(r.a,r.b,r.c).ar(A.b(s.a,s.b,s.c)).a,864e8)
if(q<-5||q>5)return!1
s=a.z
if(s==null)s=""
s=B.b.bN(s.toUpperCase(),A.C("[^A-Z0-9]+",!0,!1))
p=A.BN(s,A.L(s).c)
s=o.f
return s.length!==0&&B.a.b5(s,p.geN(p))},
$S:1}
A.Av.prototype={
$2(a,b){var s=864e8,r=t.W,q=this.a,p=r.a(a).w,o=q.a,n=q.b
q=q.c
r=r.a(b).w
return B.d.l(Math.abs(B.d.u(A.b(p.a,p.b,p.c).ar(A.b(o,n,q)).a,s)),Math.abs(B.d.u(A.b(r.a,r.b,r.c).ar(A.b(o,n,q)).a,s)))},
$S:7}
A.yw.prototype={
$1(a){var s
t.b.a(a)
if(a.r==="personal"){s=a.d
s=s===B.M||s===B.Q}else s=!1
return s},
$S:2}
A.yx.prototype={
$2(a,b){var s,r=t.b
r.a(a)
r.a(b)
r=a.e==="SGD"?0:1
s=B.d.l(r,b.e==="SGD"?0:1)
return s!==0?s:B.b.l(a.b,b.b)},
$S:8}
A.yy.prototype={
$0(){return A.c([],t.xQ)},
$S:159}
A.yC.prototype={
$2(a,b){var s=this.a.h(0,a),r=s==null?null:s.d
return r!=null&&A.b(b.a,b.b,b.c).l(0,A.b(r.a,r.b,r.c))>0},
$S:158}
A.yz.prototype={
$1(a){t.b.a(a)
return a.d===B.o&&a.as!=null},
$S:2}
A.yA.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.yB.prototype={
$2(a,b){var s,r,q,p,o,n=t.Fj
n.a(a)
n.a(b)
n=this.a
s=a.e
r=n.a
q=n.b
p=n.c
if(A.b(s.a,s.b,s.c).l(0,A.b(r,q,p))<0)s=n
o=b.e
n=A.b(o.a,o.b,o.c).l(0,A.b(r,q,p))<0?n:o
return A.b(s.a,s.b,s.c).l(0,A.b(n.a,n.b,n.c))},
$S:156}
A.y6.prototype={
$1(a){var s=t.b.a(a).w,r=B.a.ga0(this.a).a
return A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>0},
$S:2}
A.y7.prototype={
$1(a){var s,r,q,p
t.sH.a(a)
s=this.a.x
r=a.a
q=s.a
p=s.b
s=s.c
if(A.b(q,p,s).l(0,A.b(r.a,r.b,r.c))>=0){r=a.b
r=A.b(q,p,s).l(0,A.b(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:73}
A.ev.prototype={
U(){return"PlannedKind."+this.b}}
A.bo.prototype={
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"kind",r.b.b)
q.j(0,"name",r.c)
q.j(0,"accountId",r.d)
s=r.e
if(s!=null)q.j(0,"toAccountId",s)
q.j(0,"dayOfMonth",r.f)
s=r.r
q.j(0,"amount",s==null?null:s.M())
s=r.w
if(s!=null)q.j(0,"words",s)
q.j(0,"fromMonth",r.x)
q.j(0,"version",r.y)
return q}}
A.iM.prototype={}
A.ew.prototype={
U(){return"PlannedOutcomeKind."+this.b}}
A.c0.prototype={
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"payee",r.b)
q.j(0,"fromAccountId",r.c)
q.j(0,"dayOfMonth",r.d)
s=r.e
q.j(0,"typicalAmount",s==null?null:s.M())
s=r.f
if(s!=null)q.j(0,"categoryId",s)
return q}}
A.dx.prototype={
U(){return"GiroOutcomeKind."+this.b}}
A.ih.prototype={}
A.nK.prototype={}
A.dy.prototype={
U(){return"GiroStatus."+this.b}}
A.f6.prototype={
U(){return"GiroAmountFrom."+this.b}}
A.dw.prototype={}
A.nL.prototype={}
A.vF.prototype={
$1(a){return A.d(a).length!==0},
$S:6}
A.yI.prototype={
$2(a,b){var s=t.rv
return B.b.l(s.a(a).a,s.a(b).a)},
$S:149}
A.yJ.prototype={
$1(a){t.W.a(a)
return a.c===this.a.c&&a.e===B.j},
$S:1}
A.yK.prototype={
$1(a){var s,r
t.W.a(a)
s=A.c([a.z],t.q)
r=this.b.h(0,a.a)
if(r!=null)B.a.a1(s,r)
return A.KS(this.a,s)},
$S:1}
A.yL.prototype={
$1(a){var s,r,q
t.W.a(a)
if(this.b.v(0,a.a))return!1
s=this.a.a
r=a.w
q=B.d.u(A.b(r.a,r.b,r.c).ar(A.b(s.a,s.b,s.c)).a,864e8)
return q>=-5&&q<=5},
$S:1}
A.yM.prototype={
$2(a,b){var s,r,q,p,o=864e8,n=t.W
n.a(a)
n.a(b)
n=this.a
s=n.a
r=a.w
q=Math.abs(B.d.u(A.b(r.a,r.b,r.c).ar(A.b(s.a,s.b,s.c)).a,o))
n=n.a
s=b.w
p=Math.abs(B.d.u(A.b(s.a,s.b,s.c).ar(A.b(n.a,n.b,n.c)).a,o))
return q!==p?B.d.l(q,p):B.b.l(a.a,b.a)},
$S:7}
A.yN.prototype={
$2(a,b){var s,r,q=t.vS
q.a(a)
q.a(b)
q=a.d
s=b.d
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a.a,b.a.a)},
$S:148}
A.lA.prototype={
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"ya",r.a)
q.j(0,"assessed",r.b.M())
s=r.c
if(s!=null)q.j(0,"giroId",s)
s=r.d
if(s!=null)q.j(0,"firstMonth",s)
s=r.e
if(s!=null)q.j(0,"instalments",s)
return q}}
A.B4.prototype={
$1(a){return a!=null},
$S:28}
A.B5.prototype={
$1(a){return a==null},
$S:28}
A.ty.prototype={}
A.mV.prototype={}
A.vJ.prototype={
$1(a){return t.p0.a(a).d},
$S:89}
A.vK.prototype={
$1(a){var s=this.a.hf(t.b.a(a).c)
s=s==null?null:s.a
return s===this.b.a},
$S:2}
A.vL.prototype={
$1(a){t.b.a(a)
return B.a.N(A.aE(this.a.fx,t.v),new A.vI(a))},
$S:2}
A.vI.prototype={
$1(a){var s,r
t.v.a(a)
s=this.a
r=!1
if(a.b===s.a)if(a.r!=null){r=a.d
s=s.w
s=A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))>=0}else s=r
else s=r
return s},
$S:9}
A.dk.prototype={
U(){return"AlertChannel."+this.b}}
A.cQ.prototype={
U(){return"CoverageLevel."+this.b}}
A.f8.prototype={
M(){var s=this
return A.T(["code",s.a,"name",s.b,"country",s.c,"first",s.d,"caveats",s.e,"offersCsv",s.f],t.N,t.X)}}
A.k6.prototype={}
A.fk.prototype={}
A.cw.prototype={
U(){return"IntakeStatus."+this.b}}
A.f9.prototype={}
A.v8.prototype={
$1(a){return t.b.a(a).a===this.a.aX(this.b)},
$S:2}
A.xJ.prototype={
$1(a){var s,r
t.v.a(a)
if(this.a.aX(a.b)===this.b){s=a.d
r=this.c
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>=0
s=r}else s=!1
return s},
$S:9}
A.dB.prototype={
U(){return"IntakeChannel."+this.b}}
A.o_.prototype={
M(){var s=this,r=t.D.i("bf.S").a(s.e)
return A.T(["algorithm",s.a,"memoryKiB",s.b,"iterations",s.c,"parallelism",s.d,"salt",B.K.gaI().O(r)],t.N,t.X)}}
A.hp.prototype={
k(a){return"WrongSecret"}}
A.tN.prototype={
M(){var s,r=t.D.i("bf.S"),q=r.a(this.a)
q=B.K.gaI().O(q)
s=r.a(this.b)
s=B.K.gaI().O(s)
r=r.a(this.c)
return A.T(["nonce",q,"cipherText",s,"mac",B.K.gaI().O(r)],t.N,t.X)}}
A.o0.prototype={
M(){var s=this
return A.T(["passphraseKdf",s.a.M(),"recoveryKdf",s.b.M(),"byPassphrase",s.c.M(),"byRecovery",s.d.M()],t.N,t.X)}}
A.vZ.prototype={
$1(a){return t.b.a(a).r===this.a},
$S:2}
A.w_.prototype={
$1(a){return t.b.a(a).e==="SGD"},
$S:2}
A.ku.prototype={}
A.mY.prototype={}
A.F.prototype={}
A.nz.prototype={}
A.bu.prototype={}
A.tD.prototype={}
A.h1.prototype={
hf(a){var s=this.x.a,r=s.h(0,a)
if(r==null)r=s.h(0,A.hF(a))
if(r==null){r=A.p(s).i("N<2>")
r=A.aN(new A.o(new A.N(s,r),r.i("k(i.E)").a(new A.oy(a)),r.i("o<i.E>")),t.p0)
s=r}else s=r
return s},
ghu(){var s,r,q,p,o,n=A.w(t.N,t.to)
for(s=this.as.a,s=new A.ac(s,A.p(s).i("ac<1,2>")).gB(0),r=t.AB;s.n();){q=s.d
p=q.a
o=A.d_(q.b,!1,r)
o.$flags=3
n.j(0,p,o)}return n},
gK(){var s,r,q,p
if(this.gke()===0)s=A.a6(this.r,t.N,t.b)
else{s=t.z
s=A.w(s,s)
for(r=this.r.a,r=new A.ac(r,A.p(r).i("ac<1,2>")).gB(0);r.n();){q=r.d
p=q.b
if(p.cx==null)s.j(0,q.a,p)}s=A.a6(s,t.N,t.b)}return s},
gke(){var s=this.r.a,r=A.p(s).i("N<2>")
return new A.o(new A.N(s,r),r.i("k(i.E)").a(new A.ol()),r.i("o<i.E>")).gq(0)},
aX(a){var s,r,q,p,o=A.kT([a],t.N)
for(s=this.r.a,r=a;;r=p){q=s.h(0,r)
p=q==null?null:q.cx
if(p==null||!o.m(0,p))return r}},
c9(a){var s,r,q,p=A.c([],t.Q)
for(s=this.r.a,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>"));s.n();){r=s.d
if(r.cx!=null){q=r.a
q=q!==a&&this.aX(q)===a}else q=!1
if(q)p.push(r)}B.a.E(p,new A.ow())
return p},
gm8(){var s=this.go,r=A.L(s)
return A.aE(new A.o(s,r.i("k(1)").a(new A.ox(this)),r.i("o<1>")),t.Ap)},
gik(){var s=this.k3,r=A.p(s).i("N<2>")
return A.aE(new A.o(new A.N(s,r),r.i("k(i.E)").a(new A.oV(this)),r.i("o<i.E>")),t.Ap)},
i4(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=864e8,a=a0.d
if(a==null)a=a0.c
for(s=this.fx,r=A.L(s),q=r.i("k(1)").a(new A.oU(a0)),s=B.a.gB(s),r=new A.O(s,q,r.i("O<1>")),q=a.a,p=a.b,o=a.c,n=null;r.n();){m=s.gt()
l=m.d
k=A.b(q,p,o)
j=l.a
i=l.b
l=l.c
h=A.b(j,i,l)
g=B.d.u(k.b-h.b+1000*(k.a-h.a),b)
if(g<-3||g>20)continue
if(n==null){n=m
continue}k=n.d
h=A.b(q,p,o)
f=k.a
e=k.b
k=k.c
d=A.b(f,e,k)
c=Math.abs(B.d.u(h.b-d.b+1000*(h.a-d.a),b))
h=Math.abs(g)
if(h>=c)l=h===c&&A.b(j,i,l).l(0,A.b(f,e,k))>0
else l=!0
if(l)n=m}return n},
bq(){var s=this.b.a,r=A.p(s).i("N<2>")
return new A.o(new A.N(s,r),r.i("k(i.E)").a(new A.ov(this)),r.i("o<i.E>"))},
gcD(){var s="personal",r=t.N
r=A.w(r,r)
r.j(0,s,s)
r.a1(0,this.f)
return r},
aH(a){var s=this.f.h(0,a)
if(s==null)s=a==="personal"?"personal":null
return s},
bT(a){var s=this.aH(a)
return s==="member"?"personal":s},
cN(a,b,c){var s=this.b
if(a==null){s=s.a
s=new A.N(s,A.p(s).i("N<2>"))}else s=s.mw(a)
return J.mQ(s,new A.oG(c,b,a))},
ce(a){return this.cN(a,null,!1)},
b1(){return this.cN(null,null,!1)},
eY(a){return this.cN(null,a,!1)},
hm(a,b){return this.cN(a,null,b)},
mr(a,b){return this.cN(a,b,!1)},
mq(a){return this.cN(null,null,a)},
e_(a){var s=this.b.a,r=A.p(s).i("N<2>")
return new A.o(new A.N(s,r),r.i("k(i.E)").a(new A.oF(a)),r.i("o<i.E>"))},
eJ(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.a,a6=a7.a
if(a5.v(0,a6))return new A.nz()
s=null
try{r=null
o=a7.d
q=o
A:{if("movement.record"===q){r=a3.k8(a7)
break A}if("movement.categorise"===q){r=a3.iY(a7)
break A}if("payment.forAnotherBook"===q){n=a7.e
m=n.h(0,"pairId")
m.toString
A.d(m)
l=n.h(0,"payingBookId")
l.toString
A.d(l)
k=n.h(0,"owingBookId")
k.toString
A.d(k)
j=n.h(0,"amount")
j.toString
A.d(j)
i=n.h(0,"currency")
i.toString
A.d(i)
h=A.a3(A.ah(j),i)
i=n.h(0,"occurredAtUtc")
i.toString
g=A.c_(A.d(i)).F()
i=n.h(0,"bankDate")
i.toString
f=A.ax(A.d(i))
i=n.h(0,"homeDate")
i.toString
e=A.ax(A.d(i))
d=new A.dM("operation",a6,a7.f,!1)
i=n.h(0,"accountId")
i.toString
i=A.bP(A.d(i),h,f,l,a4,k,a4,B.j,e,m+":advance",a4,a4,a4,g,m,A.n(n.h(0,"payee")),a4,d,a4,a4,B.a_,1)
j=A.n(n.h(0,"payee"))
r=a3.dw(a7,A.c([i,A.bP("owed-to:"+l,h,f,k,A.n(n.h(0,"categoryId")),l,a4,B.j,e,m+":expense",a4,a4,a4,g,m,j,a4,d,a4,a4,B.n,1)],t.A))
break A}if("advance.settle"===q){r=a3.kv(a7)
break A}if("movement.verify"===q){r=a3.kR(a7)
break A}if("movement.sameEvent"===q){r=a3.kq(a7)
break A}if("movement.separate"===q){r=a3.kt(a7)
break A}if("payment.cardBill"===q){r=a3.iW(a7)
break A}if("movement.refund"===q){r=a3.k9(a7)
break A}if("movement.transfer"===q){r=a3.kM(a7)
break A}if("movement.markTransfer"===q){r=a3.jR(a7)
break A}if("movement.unmarkTransfer"===q){r=a3.kP(a7)
break A}if("movement.flag"===q){r=a3.jw(a7)
break A}if("movement.flagClear"===q){r=a3.jx(a7)
break A}if("intake.hold"===q){r=a3.jG(a7)
break A}if("intake.failed"===q){n=a7.e
m=n.h(0,"eventKey")
m.toString
A.d(m)
l=n.h(0,"receivedAtUtc")
l.toString
c=A.aB(A.c_(A.d(l)).F(),B.q)
B.a.m(a3.c,new A.W("intake-failed:"+m,B.b7,m,"A message from "+A.j(n.h(0,"sender"))+" on "+c.k(0)+" could not be read: "+A.j(n.h(0,"reason"))+"."))
r=new A.F()
break A}if("intake.suspect"===q){r=a3.jI(a7)
break A}if("intake.reminder"===q){r=a3.jH(a7)
break A}if("intake.suspectResolve"===q){r=a3.kI(a7)
break A}if("category.add"===q){r=a3.iZ(a7)
break A}if("category.rename"===q){r=a3.j_(a7)
break A}if("rule.propose"===q){r=a3.km(a7)
break A}if("rule.confirm"===q){r=a3.kk(a7)
break A}if("rule.remove"===q){r=a3.kn(a7)
break A}if("rule.edit"===q){r=a3.kl(a7)
break A}if("movement.classify"===q){r=a3.j0(a7)
break A}if("movement.unfile"===q){r=a3.kO(a7)
break A}if("rule.unconfirm"===q){r=a3.ko(a7)
break A}if("filing.target"===q){r=a3.ju(a7)
break A}if("member.add"===q){r=a3.jS(a7)
break A}if("member.rename"===q){r=a3.jT(a7)
break A}if("movement.attribute"===q){r=a3.iJ(a7)
break A}if("movement.note"===q){r=a3.jW(a7)
break A}if("setup.tick"===q){n=a7.e
m=n.h(0,"stepId")
m.toString
A.d(m)
l=n.h(0,"itemId")
l.toString
A.d(l)
k=n.h(0,"ticked")
k.toString
j=a3.p4.a
if(A.cK(k))j.m(0,new A.r(m,l))
else j.Y(0,new A.r(m,l))
r=new A.F()
break A}if("book.add"===q){r=a3.iL(a7)
break A}if("account.add"===q){r=a3.iu(a7)
break A}if("account.edit"===q){r=a3.iw(a7)
break A}if("account.setStart"===q){r=a3.iC(a7)
break A}if("account.linkFolder"===q){r=a3.iz(a7)
break A}if("account.close"===q){r=a3.iv(a7)
break A}if("card.replace"===q){r=a3.iX(a7)
break A}if("account.moveBook"===q){r=a3.iA(a7)
break A}if("account.remove"===q){r=a3.iB(a7)
break A}if("giro.add"===q){r=a3.jC(a7)
break A}if("institution.profile"===q){m=a7.e
l=m.h(0,"code")
l.toString
A.d(l)
k=m.h(0,"name")
k.toString
A.d(k)
j=A.n(m.h(0,"country"))
i=A.hx(m.h(0,"first"))
b=t.jS.a(m.h(0,"caveats"))
if(b==null)b=B.aZ
a3.x.j(0,l,new A.f8(l,k,j,i===!0,J.dg(b,t.N),A.hx(m.h(0,"offersCsv"))))
r=new A.F()
break A}if("coverage.record"===q){r=a3.j5(a7)
break A}if("institution.enable"===q){r=a3.jF(a7)
break A}if("giro.edit"===q){r=a3.jD(a7)
break A}if("fact.confirm"===q){r=a3.jr(a7)
break A}if("statement.record"===q){r=a3.kH(a7)
break A}if("statement.loans"===q){r=a3.kE(a7)
break A}if("statement.notice"===q){r=a3.kF(a7)
break A}if("statement.noticeConfirm"===q){r=a3.kG(a7)
break A}if("statement.file"===q){r=a3.kB(a7)
break A}if("statement.fileResult"===q){r=a3.kD(a7)
break A}if("secret.audit"===q){r=a3.kr(a7)
break A}if("review.add"===q){r=a3.kh(a7)
break A}if("review.dismiss"===q){r=a3.ki(a7)
break A}if("review.snooze"===q){r=a3.kj(a7)
break A}if("month.close"===q){r=a3.jU(a7)
break A}if("statement.fileAccount"===q){r=a3.kC(a7)
break A}if("statement.last4Pick"===q){r=a3.jM(a7)
break A}if("statement.last4Forget"===q){r=a3.jL(a7)
break A}if("keys.envelope"===q){m=a7.e.h(0,"envelope")
m.toString
A.Dy(t.f.a(m).G(0,t.N,t.X))
r=new A.F()
break A}if("google.account"===q){m=a7.e
a=m.h(0,"emailSha256")
if(typeof a=="string"){l=$.Go()
l=!l.b.test(a)}else l=!0
if(l)A.h(B.f3)
m=A.n(m.h(0,"masked"))
a3.cy=new A.ty(a,m==null?"":m)
r=new A.F()
break A}if("keys.backupPublic"===q){m=a7.e.h(0,"x25519")
m.toString
a0=B.B.O(A.d(m))
m=a0.length
if(m!==32)A.h(A.y("an X25519 public key has 32 bytes, not "+m,a4,a4))
a3.db=new A.bD(a0,B.U)
r=new A.F()
break A}if("mail.sender"===q){r=a3.jQ(a7)
break A}if("bill.mark"===q){r=a3.iK(a7)
break A}if("reminder.sent"===q){r=a3.ka(a7)
break A}if("reminders.switch"===q){r=a3.kb(a7)
break A}if("value.record"===q){r=a3.kQ(a7)
break A}if("report.keep"===q){r=a3.kf(a7)
break A}if("brief.settings"===q){r=a3.iQ(a7)
break A}if("brief.sent"===q){r=a3.iP(a7)
break A}if("calendar.own"===q){r=a3.iU(a7)
break A}if("calendar.event"===q){r=a3.iT(a7)
break A}if("calendar.sync"===q){r=a3.iV(a7)
break A}if("giro.outcome"===q){r=a3.jE(a7)
break A}if("planned.set"===q){r=a3.k_(a7)
break A}if("planned.end"===q){r=a3.jY(a7)
break A}if("tax.assessment"===q){r=a3.kJ(a7)
break A}if("planned.outcome"===q){r=a3.jZ(a7)
break A}if("category.flag"===q||"budget.set"===q||"period.note"===q||"officeDay.mark"===q||"recurring.mark"===q||"goal.set"===q||"goal.remove"===q||"reward.rules"===q){a1=A.Lg(a3,a3.dU,a7)
r=a1==null?new A.F():a3.p(a7,B.h,a1)
break A}if("document.set"===q||"document.remove"===q||"document.retrieve"===q||"document.source"===q||"policy.set"===q||"policy.remove"===q){a1=A.Ld(a3,a3.bW,a7)
r=a1==null?new A.F():a3.p(a7,B.h,a1)
break A}if("movement.forBook"===q){r=a3.eq(a7)
break A}if("movement.forBookClear"===q){r=a3.jz(a7)
break A}if("payment.byPerson"===q){r=a3.iR(a7)
break A}if("invoice.link"===q){r=a3.jK(a7)
break A}if("book.settings"===q||"invoice.record"===q||"subscription.set"===q||"subscription.remove"===q||"date.entered"===q||"remittance.confirm"===q||"indiaTax.entry"===q||"account.sourceOnly"===q||"loan.joint"===q||"statement.sourceRead"===q||"book.owedMentioned"===q){a1=A.La(a3,a3.aJ,a7)
r=a1==null?new A.F():a3.p(a7,B.h,a1)
break A}if("life.set"===q||"life.remove"===q){r=a3.jP(a7)
break A}if("rental.issue"===q){a1=A.Lf(a3,a7)
r=a1==null?new A.F():a3.p(a7,B.h,a1)
break A}if("rental.credit"===q){a1=A.Le(a3,a7)
r=a1==null?new A.F():a3.p(a7,B.h,a1)
break A}if("company.invoice.issue"===q){a1=A.Lb(a3,a7)
r=a1==null?new A.F():a3.p(a7,B.h,a1)
break A}if("sms.sender"===q){r=a3.kz(a7)
break A}if("sync.switch"===q||"sync.epoch"===q||"sync.device"===q||"sync.primary"===q){a1=a3.fr.eJ(a7)
r=a1==null?new A.F():a3.p(a7,B.h,"sync: "+a1)
break A}if("life.proposalReject"===q){r=a3.k6(a7)
break A}r=a3.p(a7,B.f,"unknown operation type "+o)
break A}s=r}catch(a2){p=A.aw(a2)
s=a3.p(a7,B.h,"could not apply "+a7.d+": "+A.j(p))}a5.m(0,a6)
return s},
dw(a,b){var s,r,q,p,o,n,m,l,k=this
t.C.a(b)
s=A.L(b)
r=s.i("c2<1,f>")
q=A.D(new A.c2(new A.o(b,s.i("k(1)").a(new A.o3(k)),s.i("o<1>")),s.i("f(1)").a(new A.o4()),r),r.i("i.E"))
if(q.length!==0)return k.p(a,B.v,"movement "+B.a.Z(q,", ")+" already exists")
for(s=b.length,r=k.b,p=0;p<b.length;b.length===s||(0,A.m)(b),++p){o=b[p]
n=o.a
m=o.c
l=k.bQ("m:"+n,m)
r.j(0,n,l===m?o:o.cg(l))}return new A.F()},
k8(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="occurredAtUtc",a9=b0.e.h(0,"movement")
a9.toString
s=t.f
r=t.N
q=t.X
a9=s.a(a9).G(0,r,q)
p=a9.h(0,"provenance")
p.toString
o=s.a(p).G(0,r,q)
n=A.n(a9.h(0,"type"))
m=A.n(a9.h(0,"paymentMethod"))
q=a9.h(0,"id")
q.toString
A.d(q)
r=a9.h(0,"bookId")
r.toString
A.d(r)
p=a9.h(0,"accountId")
p.toString
A.d(p)
s=n==null?null:A.ai(B.at,n,t.v_)
l=a9.h(0,"direction")
l.toString
l=A.ai(B.bK,A.d(l),t.g7)
k=a9.h(0,"amount")
k.toString
A.d(k)
j=a9.h(0,"currency")
j.toString
A.d(j)
j=A.a3(A.ah(k),j)
if(a9.h(0,a8)==null)k=null
else{k=a9.h(0,a8)
k.toString
k=A.c_(A.d(k)).F()}i=a9.h(0,"bankDate")
i.toString
i=A.ax(A.d(i))
h=a9.h(0,"homeDate")
h.toString
h=A.ax(A.d(h))
g=A.n(a9.h(0,"payee"))
f=A.n(a9.h(0,"categoryId"))
e=A.n(a9.h(0,"memberId"))
d=A.n(a9.h(0,"counterpartyBookId"))
c=A.n(a9.h(0,"counterpartyPerson"))
b=A.n(a9.h(0,"linkedMovementId"))
a=A.n(a9.h(0,"pairId"))
a0=A.n(a9.h(0,"statementLineRef"))
a1=A.n(a9.h(0,"sameEventAs"))
a2=m==null?null:A.ai(B.iZ,m,t.fN)
a9=A.n(a9.h(0,"notes"))
a3=o.h(0,"channel")
a3.toString
A.d(a3)
a4=o.h(0,"sourceId")
a4.toString
A.d(a4)
a5=o.h(0,"importedAtUtc")
a5.toString
a5=A.c_(A.d(a5)).F()
a6=o.h(0,"verified")
a6.toString
a7=A.bP(p,j,i,r,f,d,c,l,h,q,b,e,a9,k,a,g,a2,new A.dM(a3,a4,a5,A.cK(a6)),a1,a0,s,1)
a9=a7.db
if(A.FT(a9)!=null){a9.toString
s=$.CU()
r=A.C("[\\s-]",!0,!1)
a9=A.a8(a9,r,"")
return this.p(b0,B.h,s.b.test(a9)?"a movement's note may not hold a full number":"a movement's note must be one line of at most 200 characters")}return this.dw(b0,A.c([a7],t.A))},
jW(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a9.e,a8=a7.h(0,"movementId")
a8.toString
A.d(a8)
s=A.n(a7.h(0,"notes"))
r=a6.b
q=r.a.h(0,a8)
if(q==null)return a6.p(a9,B.f,"no movement "+a8+" to note")
p=q.cx
if(p!=null)return a6.p(a9,B.f,a8+" is another message about "+p+"; note the payment it belongs to")
o=A.FT(s)
if(o!=null)return a6.p(a9,B.h,"note not saved on "+a8+": "+o)
n=A.CC(s)
m=q.dx
l=a7.h(0,"baseVersion")
l.toString
if(m!==A.R(l)){r=new A.of()
B.a.m(a6.c,new A.W("conflict:"+a9.a,B.H,a8,"Changed on two devices: kept "+A.j(r.$1(q.db))+", the other device wrote "+A.j(r.$1(n))+"."))
return new A.bu()}l=q.a
k=q.b
j=q.c
i=q.d
h=q.e
g=q.f
f=q.r
e=q.w
d=q.x
c=q.y
b=q.z
a=q.Q
a0=q.as
a1=q.at
a2=q.ax
a3=q.ay
a4=q.ch
a5=q.CW
r.j(0,a8,A.bP(j,g,e,k,a,a1,a2,h,d,l,a3,a0,n,f,a4,b,q.cy,c,p,a5,i,m).eO(m+1))
return new A.F()},
iY(a){var s,r,q,p,o=a.e,n=o.h(0,"movementId")
n.toString
A.d(n)
s=o.h(0,"categoryId")
s.toString
A.d(s)
o=o.h(0,"baseVersion")
o.toString
A.R(o)
r=this.b
q=r.a.h(0,n)
if(q==null)return this.p(a,B.f,"no movement "+n+" to categorise")
p=q.dx
if(p!==o){B.a.m(this.c,new A.W("conflict:"+a.a,B.H,n,"Changed on two devices: kept "+A.j(q.Q)+", the other device chose "+s+"."))
return new A.bu()}r.j(0,n,q.lq(s,p+1))
return new A.F()},
kv(a){var s,r,q,p,o,n,m,l,k=null,j=a.e,i=j.h(0,"pairId")
i.toString
A.d(i)
s=this.b.a.h(0,i+":advance")
if(s==null)return this.p(a,B.ad,"no advance "+i+" to settle")
r=a.a
q=s.b
p=j.h(0,"accountId")
p.toString
A.d(p)
o=j.h(0,"amount")
o.toString
A.d(o)
n=j.h(0,"currency")
n.toString
A.d(n)
n=A.a3(A.ah(o),n)
o=j.h(0,"occurredAtUtc")
o.toString
o=A.c_(A.d(o)).F()
m=j.h(0,"bankDate")
m.toString
m=A.ax(A.d(m))
l=j.h(0,"homeDate")
l.toString
l=A.ax(A.d(l))
return this.dw(a,A.c([A.bP(p,n,m,q,k,s.at,k,B.m,l,i+":settlement:"+r,s.a,k,k,o,i,k,k,new A.dM("operation",r,a.f,!1),k,k,B.Z,1)],t.A))},
kR(a){var s,r,q,p,o,n,m,l,k,j=a.e,i=j.h(0,"movementId")
i.toString
A.d(i)
s=this.b
r=s.a
q=r.h(0,i)
if(q==null)return this.p(a,B.aA,"no movement "+i+" to verify")
p=j.h(0,"postedAmount")
p.toString
A.d(p)
o=j.h(0,"currency")
o.toString
A.d(o)
n=A.a3(A.ah(p),o)
m=q.ch
if(m==null)l=null
else{p=q.a
o=m+":advance"
if(p===o){p=m+":expense"
l=p}else{p=p===m+":expense"?o:null
l=p}}k=l==null?this.jA(q):r.h(0,l)
r=q.y
p=j.h(0,"statementLineRef")
p.toString
s.j(0,i,q.lw(n,new A.dM(r.a,r.b,r.c,!0),A.d(p),q.dx+1))
if(k!=null)s.j(0,k.a,k.lp(n,k.dx+1))
return new A.F()},
iZ(a){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,"id")
k.toString
A.d(k)
s=l.h(0,"bookKind")
s.toString
A.d(s)
r=l.h(0,"name")
r.toString
A.d(r)
q=A.n(l.h(0,"parentId"))
p=this.d
o=p.a
if(o.D(k))return this.p(a,B.v,"category "+k+" already exists")
n=q==null
m=n?null:o.h(0,q)
if(!n)o=m==null||m.b!==s
else o=!1
if(o)return this.p(a,B.f,"category "+k+" needs an existing "+s+" parent "+q)
p.j(0,k,new A.bK(k,s,r,q))
return new A.F()},
j_(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.d(o)
s=this.d
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no category "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.b.H(A.d(p))
if(q.length===0)return this.p(a,B.f,"category "+o+" needs a name")
s.j(0,o,new A.bK(r.a,r.b,q,r.d))
return new A.F()},
km(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a.e,c=d.h(0,"id")
c.toString
A.d(c)
s=A.n(d.h(0,"categoryId"))
r=f.e
if(r.a.D(c))return f.p(a,B.v,"rule "+c+" already exists")
q=d.h(0,"bookId")
q.toString
A.d(q)
p=d.h(0,"pattern")
p.toString
A.d(p)
o=A.C("\\s+",!0,!1)
if(B.b.H(A.a8(p.toUpperCase(),o," ")).length===0)return f.p(a,B.f,"rule "+c+" has an empty pattern")
n=A.n(d.h(0,"forBookId"))
o=n==null
if(!o)m=f.aH(n)==null||n===q||!J.a2(d.h(0,"type"),"expense")
else m=!1
if(m)return f.p(a,B.f,"rule "+c+" files expenses for another book that exists")
l=A.n(d.h(0,"direction"))
m=d.h(0,"type")
m.toString
k=A.ai(B.at,A.d(m),t.v_)
m=l==null
j=m?e:A.ai(B.bK,l,t.g7)
i=f.fO(c,k,s,j,o?q:n)
if(i!=null)return f.p(a,B.f,i)
h=A.n(d.h(0,"memberId"))
if(h!=null&&!f.p3.a.D(h))return f.p(a,B.f,"rule "+c+" names unknown member "+h)
g=d.h(0,"accountAlias")
A:{if(typeof g=="string"){o=f.bQ("r:"+c,g)
break A}o=e
break A}m=m?e:A.ai(B.bK,l,t.g7)
j=A.hx(d.h(0,"appliesToNew"))
r.j(0,c,new A.bb(c,q,p,k,s,!1,o,m,h,n,j!==!1,e))
return new A.F()},
fO(a,b,c,d,e){var s,r
if(!B.a.v(B.jh,b))return"rule "+a+" cannot file transactions as "+b.b
s=b===B.G
if(s&&d===B.j)return"rule "+a+" files refunds, which are money coming in"
if(!(b===B.n||b===B.w||s))return c==null?null:"rule "+a+" files "+b.b+", which has no category"
if(c==null)return"rule "+a+" files "+b.b+" and needs a category"
r=this.d.a.h(0,c)
if(r==null)return"rule "+a+" names unknown category "+c
if(r.b!==this.bT(e))return"rule "+a+" files "+c+", which does not belong to book "+e
if(s&&A.hG(r))return"rule "+a+" files refunds under "+c+", which is not spending"
return null},
iu(a){var s,r,q,p,o=this,n=a.e.h(0,"account")
n.toString
s=A.Bu(t.f.a(n).G(0,t.N,t.X))
n=o.r
r=s.a
if(n.a.D(r))return o.p(a,B.v,"account "+r+" already exists")
q=s.r
if(o.aH(q)==null)return o.p(a,B.f,"no book "+q)
p=A.eN(s)
if(p!=null)return o.p(a,B.h,"account not added: "+p)
n.j(0,r,s)
return new A.F()},
kz(a){var s,r,q,p,o,n=null
try{r=a.e
q=A.n(r.h(0,"id"))
p=A.FS(q==null?"":q)
if(p==null)A.h(B.f1)
q=r.h(0,"kind")
q.toString
n=new A.co(p,A.ai(B.bM,A.d(q),t.in),A.n(r.h(0,"institution")))}catch(o){r=A.aw(o)
if(r instanceof A.b8){s=r
return this.p(a,B.h,"SMS sender not recorded: "+s.a)}else throw o}r=this.dy
if(J.a2(a.e.h(0,"removed"),!0))r.Y(0,n.a)
else r.j(0,n.a,n)
return new A.F()},
jQ(a){var s,r,q,p,o,n,m=null
try{r=a.e
q=A.n(r.h(0,"address"))
p=B.b.H(q==null?"":q).toLowerCase()
q=$.GV()
if(!q.b.test(p)){q=$.H3()
q=q.b.test(p)}else q=!0
o=q?p:null
if(o==null)A.h(B.f4)
q=r.h(0,"kind")
q.toString
m=new A.iu(o,A.ai(B.kc,A.d(q),t.qo),A.n(r.h(0,"institution")))}catch(n){r=A.aw(n)
if(r instanceof A.b8){s=r
return this.p(a,B.h,"mail sender not recorded: "+s.a)}else throw n}r=this.dx
if(J.a2(a.e.h(0,"removed"),!0))r.Y(0,m.a)
else r.j(0,m.a,m)
return new A.F()},
kH(a){var s,r,q,p=this,o=A.IY(a.e),n=p.r,m=o.b,l=n.a
if(!l.D(m))return p.p(a,B.f,"statement "+o.a+" is for an unregistered account")
s=p.fx
if(B.a.N(s,new A.ot(o)))return p.p(a,B.v,"statement "+o.a+" is already recorded")
r=p.bQ("s:"+o.a,m)
B.a.m(s,r===m?o:o.cg(r))
l=l.h(0,r)
l.toString
q=l.CW
if(q!=null){m=o.d
m=A.b(m.a,m.b,m.c).l(0,A.b(q.a,q.b,q.c))>0}else m=!1
if(m)n.j(0,r,l.h6(!0))
return new A.F()},
kF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.IX(a.e),c=d.b
if(!e.r.a.D(c))return e.p(a,B.f,"notice "+d.a+" is for an unregistered account")
s=e.fy
if(B.a.N(s,new A.or(d)))return e.p(a,B.v,"notice "+d.a+" is already recorded")
r=e.bQ("n:"+d.a,c)
q=r===c?d:d.cg(r)
p=B.a.eR(s,new A.os(q))
if(p>=0){if(!(p<s.length))return A.a(s,p)
o=s[p]
c=A.c([],t.s)
n=o.d
m=n==null
if(!m){l=q.d
l=l!=null&&!n.J(0,l)}else l=!1
if(l)c.push("statement date ("+A.j(q.d)+" against "+n.k(0)+")")
l=o.e
k=l==null
if(!k){j=q.e
j=j!=null&&!l.J(0,j)}else j=!1
if(j)c.push("balance ("+A.j(q.e)+" against "+l.k(0)+")")
j=o.f
i=j==null
if(!i){h=q.f
h=h!=null&&!j.J(0,h)}else h=!1
if(h)c.push("minimum due ("+A.j(q.f)+" against "+j.k(0)+")")
h=o.r
g=h==null
if(!g){f=q.r
f=f!=null&&!h.J(0,f)}else f=!1
if(f)c.push("due date ("+A.j(q.r)+" against "+h.k(0)+")")
if(c.length!==0)return e.p(a,B.v,"notice "+q.a+" disagrees with notice "+o.a+" on "+B.a.Z(c,", "))
c=m?q.d:n
n=k?q.e:l
m=i?q.f:j
l=g?q.r:h
B.a.j(s,p,new A.cG(o.a,o.b,o.c,c,n,m,l,o.w))
return new A.F()}B.a.m(s,q)
return new A.F()},
kG(a){var s,r,q,p,o=a.e.h(0,"noticeId")
o.toString
A.d(o)
s=this.fy
r=B.a.eR(s,new A.oq(o))
if(r<0)return this.p(a,B.f,"no notice "+o+" to confirm")
if(!(r<s.length))return A.a(s,r)
q=s[r]
p=q.d
if(!(p!=null&&q.e!=null&&q.r!=null))return this.p(a,B.f,"notice "+o+": cannot confirm figures the notice does not give (statement date, balance and due date)")
B.a.j(s,r,new A.cG(q.a,q.b,q.c,p,q.e,q.f,q.r,!0))
return new A.F()},
j5(a){var s,r,q,p,o,n="institution",m="threshold",l=a.e,k=A.n(l.h(0,n)),j=A.LT(l,k!=null&&this.x.a.D(k))
if(j!=null)return this.p(a,B.h,"coverage not recorded: "+j)
s=l.h(0,n)
s.toString
A.d(s)
r=l.h(0,"channel")
r.toString
r=A.ai(B.jk,A.d(r),t.dd)
q=l.h(0,"level")
q.toString
A.ai(B.jy,A.d(q),t.w0)
if(l.h(0,m)!=null){q=l.h(0,m)
q.toString
A.aO(t.f.a(q).G(0,t.N,t.X))}A.hx(l.h(0,"recurringAlerts"))
A.hx(l.h(0,"refundsAlert"))
l=l.h(0,"checkedOn")
l.toString
l=A.ax(A.d(l))
q=this.y
p=q.h(0,new A.r(s,r))
if(p!=null){o=p.r
o=A.b(l.a,l.b,l.c).l(0,A.b(o.a,o.b,o.c))>=0}else o=!0
if(o)q.j(0,new A.r(s,r),new A.k6(s,r,l))
return new A.F()},
jF(a){var s,r,q=this,p=a.e.h(0,"institution")
p.toString
A.d(p)
s=q.x.a.h(0,p)
if(s==null)return q.p(a,B.f,"no profile for "+p)
if(!s.d){r=A.L9(q)
if(!r.a)return q.p(a,B.h,"alerts from "+s.b+" wait until a full statement cycle reconciles at "+B.a.Z(r.b," and "))}q.z.m(0,p)
return new A.F()},
jC(a){var s,r,q,p,o=this,n=a.e.h(0,"giro")
n.toString
s=A.Do(t.f.a(n).G(0,t.N,t.X))
n=s.c
r=o.r.a.h(0,n)
if(r==null)return o.p(a,B.f,"no account "+n+" for a GIRO")
n=o.w
q=s.a
if(n.a.D(q))return o.p(a,B.v,"GIRO "+q+" already exists")
p=A.Fp(s,r)
if(p!=null)return o.p(a,B.h,"GIRO not added: "+p)
n.j(0,q,s)
return new A.F()},
jD(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="dayOfMonth",g="typicalAmount",f="categoryId",e=a.e,d=e.h(0,"id")
d.toString
A.d(d)
s=i.w
r=s.a.h(0,d)
if(r==null)return i.p(a,B.f,"no GIRO "+d+" to change")
q=r.a
p=r.b
o=r.c
n=e.D(h)?A.aG(e.h(0,h)):r.d
if(e.D(g))if(e.h(0,g)==null)m=null
else{m=e.h(0,g)
m.toString
m=A.aO(t.J.a(m))}else m=r.e
l=e.D(f)?A.n(e.h(0,f)):r.f
k=new A.c0(q,p,o,n,m,l)
if(l!=null){q=i.d.a.h(0,l)
q=q==null?null:q.b
q=q!=i.bT(i.r.a.h(0,o).r)}else q=!1
if(q)return i.p(a,B.f,"GIRO not changed: no category "+l+" in its book")
q=i.r.a.h(0,o)
q.toString
j=A.Fp(k,q)
if(j!=null)return i.p(a,B.h,"GIRO not changed: "+j)
s.j(0,d,k)
return new A.F()},
jE(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"giroId")
k.toString
A.d(k)
s=l.h(0,"month")
s.toString
A.d(s)
r=l.h(0,"outcome")
r.toString
r=A.ai(B.kq,A.d(r),t.jf)
q=J.a2(l.h(0,"source"),"notice")
p=A.n(l.h(0,"movementId"))
o=m.w.a.h(0,k)
if(o==null)return m.p(a,B.f,"no GIRO "+k)
if(A.mH(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q&&r!==B.bv)return m.p(a,B.h,"a notice can only say a GIRO failed")
if(p!=null){n=m.b.a.h(0,p)
if(r!==B.bu||n==null||n.c!==o.c||n.e!==B.j||n.cx!=null)return m.p(a,B.f,"not a deduction from the GIRO's account: "+p)}B.a.m(m.Q,new A.ih(k,s,r,q,p))
return new A.F()},
k_(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.e,f=g.h(0,"id")
f.toString
A.d(f)
s=g.h(0,"kind")
s.toString
s=A.ai(B.jC,A.d(s),t.mZ)
r=g.h(0,"name")
r.toString
A.d(r)
q=g.h(0,"accountId")
q.toString
A.d(q)
p=A.n(g.h(0,"toAccountId"))
o=g.h(0,"dayOfMonth")
o.toString
A.R(o)
if(g.h(0,"amount")==null)n=null
else{n=g.h(0,"amount")
n.toString
n=A.aO(t.f.a(n).G(0,t.N,t.X))}m=A.n(g.h(0,"words"))
l=g.h(0,"fromMonth")
l.toString
A.d(l)
g=g.h(0,"version")
g.toString
A.R(g)
k=new A.bo(f,s,r,q,p,o,n,m,l,g)
j=A.MP(k,h.r)
if(j!=null)return h.p(a,B.h,"not planned: "+j)
q=h.as
i=q.a.h(0,f)
if(i==null)i=A.c([],t.rA)
p=J.ar(i)
if(g!==p.gq(i)+1){B.a.m(h.c,new A.W("conflict:"+a.a,B.H,f,"Changed on two devices: "+r+" was changed since; check it again."))
return new A.bu()}if(p.gan(i))g=p.gau(i).b!==s||B.b.l(p.gau(i).x,l)>0
else g=!1
if(g)return h.p(a,B.h,"a new version keeps its kind and starts no earlier")
g=A.D(i,t.AB)
g.push(k)
q.j(0,f,g)
return new A.F()},
jY(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.d(q)
r=r.h(0,"fromMonth")
r.toString
A.d(r)
if(!s.as.a.D(q))return s.p(a,B.f,"nothing planned as "+q)
if(A.mH(r)==null)return s.p(a,B.h,"month is YYYY-MM")
s.at.j(0,q,r)
return new A.F()},
jZ(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"id")
k.toString
A.d(k)
s=l.h(0,"month")
s.toString
A.d(s)
r=l.h(0,"outcome")
r.toString
r=A.ai(B.k4,A.d(r),t.t_)
q=A.n(l.h(0,"movementId"))
l=m.as.a.h(0,k)
p=l==null?null:J.Bs(l)
if(p==null)return m.p(a,B.f,"nothing planned as "+k)
if(A.mH(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q!=null){o=m.b.a.h(0,q)
n=p.b===B.b4?B.m:B.j
if(r!==B.bX||o==null||o.c!==p.d||o.e!==n||o.cx!=null)return m.p(a,B.f,"not a transaction of "+p.c+": "+q)}B.a.m(m.ax,new A.iM(k,s,r,q))
return new A.F()},
kJ(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"ya")
l.toString
A.R(l)
s=m.h(0,"assessed")
s.toString
s=A.aO(t.f.a(s).G(0,t.N,t.X))
r=A.n(m.h(0,"giroId"))
q=new A.lA(l,s,r,A.n(m.h(0,"firstMonth")),A.aG(m.h(0,"instalments")))
m=r==null
p=m?null:n.w.a.h(0,r)
if(!m&&p==null)return n.p(a,B.f,"no GIRO "+r)
o=A.Np(q,p==null?null:n.r.a.h(0,p.c))
if(o!=null)return n.p(a,B.h,"not recorded: "+o)
n.ay.j(0,l,q)
return new A.F()},
jr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.e,f=g.h(0,"source")
f.toString
s=t.f
r=t.N
q=t.X
p=s.a(f).G(0,r,q)
f=g.h(0,"id")
f.toString
A.d(f)
o=g.h(0,"subject")
o.toString
A.d(o)
n=g.h(0,"field")
n.toString
A.d(n)
m=g.h(0,"value")
m.toString
A.d(m)
l=g.h(0,"type")
l.toString
A.d(l)
k=p.h(0,"file")
k.toString
A.d(k)
j=p.h(0,"location")
j.toString
q=s.a(j).G(0,r,q)
r=p.h(0,"span")
r.toString
A.d(r)
j=g.h(0,"fileDate")
j.toString
j=A.ax(A.d(j))
g=g.h(0,"confirmedOn")
g.toString
i=new A.kb(f,o,n,m,l,new A.tr(k,q,r),j,A.ax(A.d(g)))
h=A.M4(i)
if(h!=null)return this.p(a,B.h,"fact not kept: "+h)
this.CW.j(0,f,i)
return new A.F()},
iw(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="loan",a6="minimumBalance",a7="statement",a8="ifsc",a9="micr",b0="branch",b1="numberShown",b2=b4.e,b3=b2.h(0,"id")
b3.toString
A.d(b3)
s=a3.r
r=s.a.h(0,b3)
if(r==null)return a3.p(b4,B.f,"no account "+b3+" to change")
if(b2.D("kind"))return a3.iy(b4,r)
q=A.n(b2.h(0,"alias"))
p=A.n(b2.h(0,"holder"))
o=A.aG(b2.h(0,"staleAfterDays"))
n=A.aG(b2.h(0,"billingCycleDay"))
if(b2.h(0,a5)==null)m=a4
else{m=b2.h(0,a5)
m.toString
m=A.BO(t.J.a(m))}l=b2.D(a5)&&b2.h(0,a5)==null
if(b2.h(0,a6)==null)k=a4
else{k=b2.h(0,a6)
k.toString
k=A.aO(t.J.a(k))}j=b2.D(a6)&&b2.h(0,a6)==null
if(b2.h(0,a7)==null)i=a4
else{i=b2.h(0,a7)
i.toString
i=A.DZ(t.J.a(i))}h=b2.D(a7)&&b2.h(0,a7)==null
g=A.n(b2.h(0,a8))
g=g==null?a4:B.b.H(g).toUpperCase()
f=b2.D(a8)&&b2.h(0,a8)==null
e=A.n(b2.h(0,a9))
e=e==null?a4:B.b.H(e)
d=b2.D(a9)&&b2.h(0,a9)==null
c=A.n(b2.h(0,b0))
c=c==null?a4:B.b.H(c)
b=b2.D(b0)&&b2.h(0,b0)==null
a=A.n(b2.h(0,b1))
if(a==null)a=a4
else{a0=A.C("\\s",!0,!1)
a=A.a8(a,a0,"")
a=A.a8(a.toUpperCase(),"*","X")}a1=r.lo(q,n,c,b,f,l,d,j,b2.D(b1)&&b2.h(0,b1)==null,h,p,g,m,e,k,a,o,i)
a2=A.eN(a1)
if(a2!=null)return a3.p(b4,B.h,"account not changed: "+a2)
s.j(0,b3,a1)
return new A.F()},
iy(a,b){var s,r,q,p=this,o=a.e,n=A.BD(B.dI,t.jN).h(0,o.h(0,"kind")),m=o.h(0,"subtype")
A:{if(typeof m=="string"){s=A.BD(B.dw,t.vi).h(0,m)
break A}s=null
break A}if(n!=null)r=o.h(0,"subtype")!=null&&s==null
else r=!0
if(r)return p.p(a,B.h,"an account type names a kind and its subtype")
if(b.d.b!==o.h(0,"baseKind"))return p.cW(a,b.a,b.b+"'s type")
r=b.a
q=p.mj(r,n,s)
if(q!=null)return p.p(a,B.h,"type not changed: "+q)
p.r.j(0,r,A.DC(b,n,s))
return new A.F()},
mj(a,b,c){var s,r,q,p,o,n,m=this,l="money owed",k="money held",j=m.r.a,i=j.h(0,a)
if(i==null)return"no account "+a
s=i.d
if(s===B.x||b===B.x)return"a cash wallet stays a cash wallet"
if(s===b&&i.dy==c)return"it is that type already"
if(i.cx!=null)return i.b+" was replaced by a newer number"
if(B.a.N(m.c9(a),new A.oz(b)))return"its earlier numbers are of its type; undo them first"
r=b===B.y||b===B.o
q=m.fx
p=A.L(q)
o=new A.o(q,p.i("k(1)").a(new A.oA(a)),p.i("o<1>")).gq(0)
if(o>0)q=r!==(s===B.y||s===B.o)
else q=!1
if(q){n=s===B.y||s===B.o?l:k
j=o===1?"statement was":""+o+" statements were"
s=r?l:k
return"its "+j+" read as "+n+"; as "+s+" the balances would turn around"}if(b!==B.M&&b!==B.Q){s=m.w.a
if(new A.N(s,A.p(s).i("N<2>")).N(0,new A.oB(a)))return"a GIRO is paid from it"
if(new A.N(j,A.p(j).i("N<2>")).N(0,new A.oC(a)))return"a loan is paid from it"
j=m.as.a
s=A.p(j).i("N<2>")
if(new A.f4(new A.N(j,s),s.i("i<bo>(i.E)").a(new A.oD()),s.i("f4<i.E,bo>")).N(0,new A.oE(a)))return"a planned item uses it"}return A.eN(A.DC(i,b,c))},
cW(a,b,c){B.a.m(this.c,new A.W("conflict:"+a.a,B.H,b,"Changed on two devices: "+c+" was changed since; check it again."))
return new A.bu()},
iC(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.d(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to change")
q=i.h(0,"startDate")
q.toString
p=A.ax(A.d(q))
q=i.h(0,"startFrom")
q.toString
o=A.tW(t.f.a(q).G(0,t.N,t.X))
q=r.w
n=i.h(0,"baseStartDate")
n.toString
if(!q.J(0,A.ax(A.d(n))))return j.cW(a,h,r.b+"'s history start")
switch(o.a.a){case 0:return j.p(a,B.h,"a folder year is taken only at import")
case 1:q=j.fx
n=A.L(q)
m=A.aN(new A.o(q,n.i("k(1)").a(new A.o2(o,h)),n.i("o<1>")),t.v)
if(m==null||!m.c.J(0,p))return j.p(a,B.h,"start not changed: not a statement of "+r.b+"'s")
break
case 2:break}l=r.ls(p,o).n_(p,o)
k=A.eN(l)
if(k!=null)return j.p(a,B.h,"start not changed: "+k)
s.j(0,h,l)
if(r.db!=null||j.c9(h).length!==0)j.eA(B.m8)
return new A.F()},
iv(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.d(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to close")
if(r.cx!=null)return j.p(a,B.f,r.b+" was replaced by a newer card")
if(!J.a2(i.h(0,"closed"),!0)){if(r.CW==null)return j.p(a,B.f,r.b+" is not closed")
s.j(0,h,r.h6(!0))
return new A.F()}if(r.CW!=null)return j.p(a,B.f,r.b+" is already closed")
if(r.d===B.x)return j.p(a,B.h,"a cash wallet is never closed")
for(q=j.fx,p=q.length,o=null,n=0;n<q.length;q.length===p||(0,A.m)(q),++n){m=q[n]
if(m.b===h)if(o!=null){l=m.d
l=A.b(l.a,l.b,l.c).l(0,A.b(o.a,o.b,o.c))>0}else l=!0
else l=!1
if(l)o=m.d}if(o==null)return j.p(a,B.h,r.b+" has no statement to close after")
q=i.h(0,"after")
q.toString
k=A.ax(A.d(q))
if(!k.J(0,o))return j.cW(a,h,r.b+"'s latest statement")
s.j(0,h,r.lh(k))
return new A.F()},
iX(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"old")
if(typeof j!="string")return l.p(a,B.h,"a card replacement names the old card")
s=l.r
r=s.a
q=r.h(0,j)
if(q==null)return l.p(a,B.f,"no account "+j)
if(J.a2(k.h(0,"undo"),!0)){if(q.cx==null)return l.p(a,B.f,q.b+" is not replaced")
p=l.aX(j)
s.j(0,j,q.hL(null,null))
l.eA(A.kT([p],t.N))
return new A.F()}o=k.h(0,"new")
n=k.h(0,"from")
if(typeof o!="string"||typeof n!="string")return l.p(a,B.h,"a card replacement names the newer card and the date")
m=r.h(0,o)
A:{if(m==null){r="no account "+o
break A}r=q.cx
if(r!=null){r=q.b+" is already replaced"
break A}if(o===j){r="a card cannot replace itself"
break A}r=A.DB(q.d,m.d)
if(!r){r="only a card or a bank account of the same type is replaced"
break A}if(A.hF(q.c)!==A.hF(m.c)&&!J.a2(k.h(0,"moved"),!0)){r="the accounts are of different banks"
break A}r=q.e!==m.e||q.r!==m.r
if(r){r="the accounts differ in currency or book"
break A}r=l.aX(o)
if(r===j){r=m.b+" was itself replaced by "+q.b
break A}r=null
break A}if(r!=null)return l.p(a,B.h,"card not replaced: "+r)
s.j(0,j,q.hL(o,A.ax(n)))
l.eA(A.kT([j],t.N))
return new A.F()},
eA(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null
t.dO.a(c6)
s=new A.ok(c4,c6)
r=c4.b
q=r.a
p=A.p(q).i("N<2>")
o=p.i("o<i.E>")
q=A.D(new A.o(new A.N(q,p),p.i("k(i.E)").a(new A.oi(c6)),o),o.i("i.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.m)(q),++n){m=q[n]
o=m.a
l=s.$2("m:"+o,m.c)
if(l!=null)r.j(0,o,m.cg(l))}for(r=c4.fx,k=0;k<r.length;++k){j=r[k]
i=s.$2("s:"+j.a,j.b)
if(i!=null){B.a.j(r,k,j.cg(i))
q=$.Gl()
p=q.a
h=p.get(c4)
if(h!=null&&k<h.a[0]){o=h.a
o=q.$ti.i("1?").a(new A.eI([k,o[1],o[2],o[3]]))
p.set(c4,o)}}}for(r=c4.fy,k=0;k<r.length;++k){g=r[k]
q=g.a
f=s.$2("n:"+q,g.b)
if(f!=null)B.a.j(r,k,new A.cG(q,f,g.c,g.d,g.e,g.f,g.r,g.w))}r=c4.id
q=A.p(r).i("N<2>")
q=A.D(new A.N(r,q),q.i("i.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.m)(q),++n){e=q[n]
o=e.a
d=s.$2("f:"+o,e.b)
if(d!=null)r.j(0,o,new A.dV(o,d,e.c,e.d,e.e,e.f,e.r))}r=c4.k2
q=A.p(r).i("ac<1,2>")
q=A.D(new A.ac(r,q),q.i("i.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.m)(q),++n){c=q[n]
b=c.b
o=c.a
a=s.$2("p:"+o,b.c)
if(a!=null)r.j(0,o,new A.cZ(b.a,b.b,a,b.d))}r=c4.e
q=r.a
p=A.p(q).i("N<2>")
p=A.D(new A.N(q,p),p.i("i.E"))
o=p.length
r=r.$ti
a0=r.i("ag.K")
r=r.i("ag.V")
n=0
for(;n<p.length;p.length===o||(0,A.m)(p),++n){a1=p[n]
a2=a1.r
if(a2==null)continue
a3=a1.a
a4=s.$2("r:"+a3,a2)
if(a4!=null){a0.a(a3)
a5=r.a(new A.bb(a3,a1.b,a1.c,a1.d,a1.e,a1.f,a4,a1.w,a1.x,a1.y,a1.z,a1.Q))
q.j(0,a3,a5)}}r=c4.w
q=r.a
p=A.p(q).i("N<2>")
p=A.D(new A.N(q,p),p.i("i.E"))
o=p.length
a0=t.N
a3=t.X
r=r.$ti
a5=r.i("ag.K")
r=r.i("ag.V")
n=0
for(;n<p.length;p.length===o||(0,A.m)(p),++n){a6=p[n]
a7=a6.a
a8=s.$2("g:"+a7,a6.c)
if(a8!=null){a9=a6.M()
b0=A.is(a0,a3)
b0.a1(0,a9)
b0.j(0,"fromAccountId",a8)
b0=A.Do(b0)
a5.a(a7)
r.a(b0)
q.j(0,a7,b0)}}r=c4.r
q=r.a
p=A.p(q)
o=p.i("N<2>")
a5=o.i("i.E")
a7=A.D(new A.N(q,o),a5)
a9=a7.length
r=r.$ti
b0=r.i("ag.K")
r=r.i("ag.V")
n=0
for(;n<a7.length;a7.length===a9||(0,A.m)(a7),++n){b1=a7[n]
b2=b1.as
b3=b2==null
b4=b3?c5:b2.w
if(b3||b4==null)continue
b3=b1.a
b5=s.$2("l:"+b3,b4)
if(b5!=null){b6=b2.M()
b7=A.is(a0,a3)
b7.a1(0,b6)
b7.j(0,"payingAccountId",b5)
b7=b1.h7(A.BO(b7))
b0.a(b3)
r.a(b7)
q.j(0,b3,b7)}}for(a3=c4.RG,k=0;k<a3.length;++k){b8=a3[k]
b9=s.$2("d:"+k,b8.a)
if(b9!=null)B.a.j(a3,k,new A.fR(b9,b8.b,b8.c))}a0=A.w(a0,t.aa)
for(p=new A.a1(q,q.r,q.e,p.i("a1<2>"));p.n();){a3=p.d
if(a3.cx==null){a7=a3.a
a9=a3.db
a0.j(0,a7,a9==null?new A.r(a3.w,a3.ay):new A.r(a9,a3.dx))}}for(p=o.i("k(i.E)").a(new A.oj()),a3=new A.N(q,o).gB(0),p=new A.O(a3,p,o.i("O<i.E>"));p.n();){a7=a3.gt()
c0=c4.aX(a7.a)
a9=a7.db
c1=a9==null?new A.r(a7.w,a7.ay):new A.r(a9,a7.dx)
c2=a0.h(0,c0)
if(c2!=null){a7=c1.a
a9=c2.a
a9=A.b(a7.a,a7.b,a7.c).l(0,A.b(a9.a,a9.b,a9.c))<0
a7=a9}else a7=!1
if(a7)a0.j(0,c0,c1)}p=A.D(new A.N(q,o),a5)
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.m)(p),++n){b1=p[n]
a3=b1.db
a5=a3==null
c1=a5?new A.r(b1.w,b1.ay):new A.r(a3,b1.dx)
if(b1.cx!=null)c3=c1
else{a3=a0.h(0,b1.a)
c3=a3==null?c1:a3}a3=c3.a
a7=b1.w
a9=!1
if(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c){a7=c3.b
a7=B.z.bc(a7==null?c5:a7.M(),c5)
b3=b1.ay
if(a7===B.z.bc(b3==null?c5:b3.M(),c5)){a7=c1.a
a5=a5===(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c)}else a5=a9}else a5=a9
if(a5)continue
a5=c1.a
a5=a5.a===a3.a&&a5.b===a3.b&&a5.c===a3.c?c5:c1
a5=b1.hK(a3,c3.b,a5)
a3=b0.a(b1.a)
r.a(a5)
q.j(0,a3,a5)}},
iA(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a9.e,a6=a5.h(0,"id"),a7=a5.h(0,"from"),a8=a5.h(0,"to")
if(typeof a6!="string"||typeof a7!="string"||typeof a8!="string")return a4.p(a9,B.h,"a move names the account and both books")
s=a4.r
r=s.a
q=r.h(0,a6)
if(q==null)return a4.p(a9,B.f,"no account "+a6)
if(q.r!==a7)return a4.cW(a9,a6,q.b+"'s book")
p=a4.mp(a6,a8)
if(p!=null)return a4.p(a9,B.h,"account not moved: "+p)
o=t.N
n=A.kT([a6],o)
for(m=a4.c9(a6),l=m.length,k=0;k<m.length;m.length===l||(0,A.m)(m),++k)n.m(0,m[k].a)
for(m=A.e5(n,n.r,n.$ti.c),l=t.X,s=s.$ti,j=s.i("ag.K"),s=s.i("ag.V"),i=m.$ti.c;m.n();){h=m.d
if(h==null)h=i.a(h)
g=r.h(0,h).M()
f=A.is(o,l)
f.a1(0,g)
f.j(0,"bookId",a8)
f=A.Bu(f)
j.a(h)
s.a(f)
r.j(0,h,f)}s=a4.b
r=s.a
o=A.p(r).i("N<2>")
m=o.i("i.E")
l=A.D(new A.N(r,o),m)
j=l.length
i="owed-to:"+a8
h="held-by:"+a8
k=0
for(;k<l.length;l.length===j||(0,A.m)(l),++k){e=l[k]
if(!n.v(0,e.c)||e.b!==a7)continue
g=e.a
s.j(0,g,e.m9(a8))
g="forbook:"+g
d=r.h(0,g+":expense")
if(d!=null){f=e.ch===g
c=d}else{c=null
f=!1}if(f)s.j(0,c.a,c.dX(c.b,i,a8))
b=r.h(0,g+":income")
if(b!=null){f=e.ch===g
c=b}else{c=null
f=!1}if(f)s.j(0,c.a,c.dX(c.b,h,a8))
f=A.D(new A.N(r,o),m)
a=f.length
a0=g+":refund:"
g=e.ch===g
a1=0
for(;a1<f.length;f.length===a||(0,A.m)(f),++a1){a2=f[a1]
a3=a2.a
if(B.b.ak(a3,a0)&&g)s.j(0,a3,a2.dX(a2.b,i,a8))}}s=a4.e
r=s.a
o=A.p(r).i("N<2>")
o=A.D(new A.N(r,o),o.i("i.E"))
m=o.length
s=s.$ti
l=s.i("ag.K")
s=s.i("ag.V")
k=0
for(;k<o.length;o.length===m||(0,A.m)(o),++k){a2=o[k]
j=a2.r
if(n.v(0,j)&&a2.b===a7){i=a2.a
l.a(i)
j=s.a(new A.bb(i,a8,a2.c,a2.d,a2.e,a2.f,j,a2.w,a2.x,a2.y,a2.z,a2.Q))
r.j(0,i,j)}}return new A.F()},
mp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r.a.h(0,a)
if(g==null)return"no account "+a
if(g.cx!=null)return g.b+" was replaced by a newer number; move that one"
if(g.d===B.x)return"a cash wallet stays in its book"
if(h.aH(b)==null)return"no book "+b
s=g.r
if(b===s)return g.b+" is already in that book"
r=h.bT(b)
q=t.N
p=A.kT([a],q)
for(o=h.c9(a),n=o.length,m=0;m<o.length;o.length===n||(0,A.m)(o),++m)p.m(0,o[m].a)
q=A.a4(q)
for(o=h.b.a,n=A.p(o).i("a1<2>"),l=new A.a1(o,o.r,o.e,n);l.n();){k=l.d
if(k.d===B.Z&&k.ay!=null){k=k.ay
k.toString
q.m(0,k)}}for(o=new A.a1(o,o.r,o.e,n),j=0;o.n();){n=o.d
if(!p.v(0,n.c))continue
l=n.b
if(l===b)return"transactions of "+g.b+" are already in that book"
if(l!==s)continue
if(h.ew(n.Q,r))++j
l=n.ch
k=n.a
i=l==="forbook:"+k
n=n.at
if(n===b)return"a transaction of it is paid for that book; put it back first"
if(n!=null&&!i)return"a transaction of it is linked to another book; put it back first"
if(i&&q.v(0,k))return"a transaction of it paid for another book is settled"}if(j>0){s=j===1?"transaction is":"transactions are"
return""+j+" "+s+" filed under categories that book does not use"}for(q=h.e.a,q=new A.a1(q,q.r,q.e,A.p(q).i("a1<2>"));q.n();){o=q.d
if(!p.v(0,o.r)||o.b!==s)continue
n=o.y
if(n===b)return"a rule files its transactions for that book"
if(n==null&&h.ew(o.e,r))return"a rule files its transactions under categories that book does not use"}for(s=h.w.a,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>"));s.n();){q=s.d
if(p.v(0,q.c)&&h.ew(q.f,r))return"a GIRO from it is filed under categories that book does not use"}return null},
iB(a){var s,r,q,p=this,o=a.e,n=o.h(0,"id")
if(typeof n!="string")return p.p(a,B.h,"a removal names the account")
if(J.a2(o.h(0,"undo"),!0)){s=o.h(0,"account")
s.toString
r=A.Bu(t.f.a(s).G(0,t.N,t.X))
if(r.a!==n||p.r.a.D(n))return p.p(a,B.v,"account "+n+" is here")
s=r.r
if(p.aH(s)==null)return p.p(a,B.f,"no book "+s)
q=A.eN(r)
if(q!=null)return p.p(a,B.h,"account not put back: "+q)
p.r.j(0,n,r)
return new A.F()}q=p.mD(n)
if(q!=null)return p.p(a,B.h,"account not removed: "+q)
p.r.Y(0,n)
return new A.F()},
mD(a){var s,r,q,p,o,n=this,m=n.r.a,l=m.h(0,a)
if(l==null)return"no account "+a
if(l.d===B.x)return"a cash wallet is never removed"
if(l.cx!=null||n.c9(a).length!==0)return"it is one of the numbers of a replaced card"
s=new A.oT()
r=n.fx
q=A.L(r)
p=new A.o(r,q.i("k(1)").a(new A.oH(a)),q.i("o<1>")).gq(0)
if(p>0)return"it has "+A.j(s.$2(p,"statement"))
r=n.b.a
q=A.p(r).i("N<2>")
o=new A.o(new A.N(r,q),q.i("k(i.E)").a(new A.oI(a)),q.i("o<i.E>")).gq(0)
if(o>0)return"it has "+A.j(s.$2(o,"transaction"))
if(B.a.N(n.fy,new A.oJ(a)))return"it has a bill from a statement notice"
s=n.e.a
if(new A.N(s,A.p(s).i("N<2>")).N(0,new A.oL(a)))return"a rule is for its transactions"
s=n.w.a
if(new A.N(s,A.p(s).i("N<2>")).N(0,new A.oM(a)))return"a GIRO is paid from it"
if(new A.N(m,A.p(m).i("N<2>")).N(0,new A.oN(a)))return"a loan is paid from it"
m=n.as.a
s=A.p(m).i("N<2>")
if(new A.f4(new A.N(m,s),s.i("i<bo>(i.E)").a(new A.oO()),s.i("f4<i.E,bo>")).N(0,new A.oP(a)))return"a planned item uses it"
m=n.id
if(new A.N(m,A.p(m).i("N<2>")).N(0,new A.oQ(a)))return"a statement file is kept for it"
m=n.k2
if(new A.N(m,A.p(m).i("N<2>")).N(0,new A.oR(a)))return"a pick for a hidden last 4 names it"
m=n.to.a
if(new A.N(m,A.p(m).i("N<2>")).N(0,new A.oS(a)))return"a balance you stated names it"
m=n.aJ
if(m.w.D(a))return"it is marked source only"
m=m.b
if(new A.N(m,A.p(m).i("N<2>")).N(0,new A.oK(a)))return"a subscription is paid from it"
return null},
ew(a,b){var s,r=this.d.a.h(0,a)
A:{if(r!=null){s=r.b!==b
break A}s=!1
break A}return s},
bQ(a,b){var s,r,q=this.ch
q.Y(0,a)
s=this.r.a.h(0,b)
if((s==null?null:s.cx!=null)!==!0)return b
r=this.aX(b)
q.j(0,a,b)
return r},
iz(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="startDate",c="startFrom",b=a0.e,a=b.h(0,"id")
a.toString
A.d(a)
s=f.r
r=s.a.h(0,a)
if(r==null)return f.p(a0,B.f,"no account "+a+" to change")
q=b.h(0,"driveFolder")
q.toString
p=t.f
o=t.N
n=t.X
m=A.Dn(p.a(q).G(0,o,n))
q=r.ch
q=q==null?e:q.a
if(q==A.n(b.h(0,"baseFolderId"))){q=r.w
l=b.h(0,"baseStartDate")
l.toString
l=!q.J(0,A.ax(A.d(l)))
q=l}else q=!0
if(q)return f.cW(a0,a,r.b+"'s Drive folder")
if(b.h(0,d)==null)k=e
else{q=b.h(0,d)
q.toString
k=A.ax(A.d(q))}if(b.h(0,c)==null)j=e
else{q=b.h(0,c)
q.toString
j=A.tW(p.a(q).G(0,o,n))}q=r.ay
i=(q==null?e:q.a)===B.al
if(i!==(k!=null)||i!==(j!=null))return f.p(a0,B.h,"folder not linked: a start moves with the link only when it is from a folder year")
if(j!=null)q=j.a!==B.al||j.c!==m.b
else q=!1
if(q)return f.p(a0,B.h,"folder not linked: the start must name the new folder")
h=r.lv(m,k,j)
g=A.eN(h)
if(g!=null)return f.p(a0,B.h,"folder not linked: "+g)
s.j(0,a,h)
return new A.F()},
iL(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.d(q)
if(s.aH(q)!=null)return s.p(a,B.v,"book "+q+" already exists")
r=r.h(0,"kind")
r.toString
A.d(r)
if(r==="member"&&!s.p3.a.D(q))return s.p(a,B.f,"no household member "+q+" for a book")
s.f.j(0,q,r)
return new A.F()},
kk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.e.h(0,"id")
f.toString
A.d(f)
s=this.e
r=s.a.h(0,f)
if(r==null)return this.p(a,B.f,"no rule "+f+" to confirm")
q=a.f.F()
p=r.a
o=r.b
n=r.c
m=r.d
l=r.e
k=r.r
j=r.w
i=r.x
h=r.y
g=r.z
s.j(0,f,new A.bb(p,o,n,m,l,!0,k,j,i,h,g,q))
return new A.F()},
kl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="memberId",c=a.e,b=c.h(0,"id")
b.toString
A.d(b)
s=e.e
r=s.a.h(0,b)
if(r==null)return e.p(a,B.f,"no rule "+b+" to change")
q=c.h(0,"pattern")
q.toString
p=B.b.H(A.d(q))
o=A.n(c.h(0,"categoryId"))
q=A.C("\\s+",!0,!1)
if(B.b.H(A.a8(p.toUpperCase(),q," ")).length===0)return e.p(a,B.f,"rule "+b+" needs a payee to match")
q=c.h(0,"type")
q.toString
n=A.ai(B.at,A.d(q),t.v_)
q=r.y
m=q==null
if(!m&&n!==B.n)return e.p(a,B.f,"rule "+b+" files expenses for another book")
l=r.w
k=e.fO(b,n,o,l,m?r.b:q)
if(k!=null)return e.p(a,B.f,k)
j=c.D(d)?A.n(c.h(0,d)):r.x
if(j!=null&&!e.p3.a.D(j))return e.p(a,B.f,"rule "+b+" names unknown member "+j)
m=A.hx(c.h(0,"appliesToNew"))
i=r.a
h=r.b
g=r.f
f=r.r
if(m==null)m=r.z
s.j(0,b,new A.bb(i,h,p,n,o,g,f,l,j,q,m,r.Q))
return new A.F()},
kn(a){var s=a.e.h(0,"id")
s.toString
A.d(s)
if(this.e.Y(0,s)==null)return this.p(a,B.f,"no rule "+s+" to remove")
this.ch.Y(0,"r:"+s)
return new A.F()},
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="memberId",e="actionId",d=a.e,c=d.h(0,"movementId")
c.toString
A.d(c)
s=g.b
r=s.a.h(0,c)
if(r==null)return g.p(a,B.f,"no movement "+c+" to classify")
q=d.h(0,"type")
q.toString
p=A.ai(B.at,A.d(q),t.v_)
o=A.n(d.h(0,"categoryId"))
q=o==null
if(q)n=p===B.n||p===B.w||p===B.G
else n=!1
if(n)return g.p(a,B.h,"filing "+c+" as "+p.b+" needs a category")
n=!q
if(n&&!g.d.a.D(o))return g.p(a,B.f,"unknown category "+o)
if(n&&g.d.a.h(0,o).b!==g.bT(r.b))return g.p(a,B.f,o+" does not belong to book "+r.b)
if(g.fz(r))return g.p(a,B.ad,c+" is paid for another book; undo that first (DUP-13)")
m=A.FA(p,r.e,g.r.a.h(0,r.c))
if(m!=null)return g.p(a,B.f,m)
if(!(p===B.n||p===B.w||p===B.G))n=r.ch!=null||r.ay!=null||r.cx!=null
else n=!1
if(n)return g.p(a,B.P,c+" is already paired or linked")
l=d.D(f)
k=A.n(d.h(0,f))
if(k!=null&&!g.p3.a.D(k))return g.p(a,B.f,"unknown member "+k)
n=r.dx
j=d.h(0,"baseVersion")
j.toString
if(n!==A.R(j)){s=r.Q
q=q?p.b:o
B.a.m(g.c,new A.W("conflict:"+a.a,B.H,c,"Changed since it was filed elsewhere: kept "+A.j(s)+", the other change chose "+q+"."))
return new A.bu()}i=l?r.hJ(k):r
s.j(0,c,i.hI(o,i.as,p,n+1))
h=A.n(d.h(0,"ruleId"))
if(h==null)h=typeof d.h(0,e)=="string"?"action:"+A.j(d.h(0,e)):null
s=g.p1
if(h==null)s.Y(0,c)
else{a.f.F()
s.j(0,c,new A.ku())}return new A.F()},
kO(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"movementId")
j.toString
A.d(j)
s=l.b
r=s.a.h(0,j)
if(r==null)return l.p(a,B.f,"no movement "+j+" to put back")
q=A.n(k.h(0,"categoryId"))
if(q!=null&&!l.d.a.D(q))return l.p(a,B.f,"unknown category "+q)
p=A.n(k.h(0,"memberId"))
if(p!=null&&!l.p3.a.D(p))return l.p(a,B.f,"unknown member "+p)
o=r.dx
n=k.h(0,"baseVersion")
n.toString
if(o!==A.R(n)){B.a.m(l.c,new A.W("conflict:"+a.a,B.H,j,"Changed since it was filed; "+j+" was left as it is."))
return new A.bu()}m=A.n(k.h(0,"type"))
n=m==null?null:A.ai(B.at,m,t.v_)
s.j(0,j,r.hI(q,p,n,o+1))
l.p1.Y(0,j)
return new A.F()},
ko(a){var s,r,q=a.e.h(0,"id")
q.toString
A.d(q)
s=this.e
r=s.a.h(0,q)
if(r==null)return this.p(a,B.f,"no rule "+q+" to take back")
s.j(0,q,new A.bb(r.a,r.b,r.c,r.d,r.e,!1,r.r,r.w,r.x,r.y,r.z,null))
return new A.F()},
ju(a){var s=a.e.h(0,"count")
if(!A.cL(s)||s<0)return this.p(a,B.h,"a target is a whole number of transactions, 0 or more")
return new A.F()},
jS(a){var s,r=a.e,q=r.h(0,"id")
q.toString
A.d(q)
r=r.h(0,"name")
r.toString
s=B.b.H(A.d(r))
r=this.p3
if(r.a.D(q))return this.p(a,B.v,"member "+q+" already exists")
if(s.length===0)return this.p(a,B.f,"member "+q+" needs a name")
r.j(0,q,new A.h5(q,s))
return new A.F()},
jT(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.d(o)
s=this.p3
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no member "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.b.H(A.d(p))
if(q.length===0)return this.p(a,B.f,"member "+o+" needs a name")
s.j(0,o,new A.h5(r.a,q))
return new A.F()},
iJ(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"movementId")
k.toString
A.d(k)
s=A.n(l.h(0,"memberId"))
r=m.b
q=r.a.h(0,k)
if(q==null)return m.p(a,B.f,"no movement "+k+" to attribute")
p=s==null
if(!p&&!m.p3.a.D(s))return m.p(a,B.f,"unknown member "+s)
o=q.dx
n=l.h(0,"baseVersion")
n.toString
if(o!==A.R(n)){r=q.as
if(r==null)r="no one"
p=p?"no one":s
B.a.m(m.c,new A.W("conflict:"+a.a,B.H,k,"Changed on two devices: kept "+r+", the other device chose "+p+"."))
return new A.bu()}r.j(0,k,q.hJ(s).eO(o+1))
return new A.F()},
kq(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"primaryId")
l.toString
A.d(l)
m=m.h(0,"duplicateId")
m.toString
A.d(m)
s=n.b
r=s.a
q=r.h(0,l)
p=r.h(0,m)
r=q==null
if(r||p==null)return n.p(a,B.f,"no movement "+(r?l:m)+" to link")
A:{if(l===m){r="a movement cannot be linked to itself"
break A}r=q.c
o=p.c
if(r!==o){r="they are on different accounts"
break A}r=q.e
o=p.e
if(r!==o){r="they go in different directions"
break A}r=q.f.J(0,p.f)
if(!r){r="the amounts differ"
break A}r=q.cx!=null||p.cx!=null
if(r){r="one of them is already linked"
break A}r=n.e_(m).ga4(0)
if(!r){r=m+" already has messages linked to it"
break A}r=!0
if(p.ch==null)if(p.ay==null){r=n.hw(p).a.l(0,$.M())
r=r!==0}if(r){r=m+" is already paired, linked or refunded"
break A}r=p.CW
if(r!=null){r=m+" is verified by a statement line"
break A}if(p.y.d&&!q.y.d){r=m+" is verified and "+l+" is not"
break A}r=n.dT.v(0,A.og(l,m))
if(r){r="the owner said they are different payments"
break A}r=null
break A}if(r!=null)return n.p(a,B.v,m+" not linked to "+l+": "+r)
s.j(0,m,p.hM(l))
return new A.F()},
kt(a){var s,r,q=a.e,p=q.h(0,"primaryId")
p.toString
A.d(p)
q=q.h(0,"duplicateId")
q.toString
A.d(q)
s=this.b
r=s.a.h(0,q)
if(r==null||r.cx!==p)return this.p(a,B.f,q+" is not linked to "+p)
s.j(0,q,r.hM(null))
this.dT.m(0,A.og(p,q))
return new A.F()},
iW(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"outflowId")
h.toString
A.d(h)
s=i.h(0,"inflowId")
s.toString
A.d(s)
r=j.b
q=r.a
p=q.h(0,h)
o=q.h(0,s)
q=p==null
if(q||o==null)return j.p(a,B.f,"no movement "+(q?h:s)+" to pair")
q=p.dx
n=i.h(0,"outflowVersion")
n.toString
if(q===A.R(n)){n=o.dx
m=i.h(0,"inflowVersion")
m.toString
m=n!==A.R(m)
n=m}else n=!0
if(n){B.a.m(j.c,new A.W("conflict:"+a.a,B.H,h,"Changed since the card bill payment was proposed; "+h+" and "+s+" were left as they are."))
return new A.bu()}l=new A.o7()
A:{n=j.r.a
m=n.h(0,p.c)
m=m==null?null:m.gaS()
m=m!==!0
if(m){n=h+" is not on a bank account"
break A}n=n.h(0,o.c)
n=(n==null?null:n.d)!==B.y
if(n){n=s+" is not on a card"
break A}n=p.e!==B.j||o.e!==B.m
if(n){n="the directions are not a payment out and a credit in"
break A}n=p.f.J(0,o.f)
if(!n){n="the amounts differ"
break A}n=!l.$1(p)||!l.$1(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.P,"not a card bill payment: "+n)
k="bill:"+h
r.j(0,h,p.dO(k,B.X,q+1))
r.j(0,s,o.dO(k,B.X,o.dx+1))
return new A.F()},
hw(a){var s=this.b.c.h(0,a.a)
return s==null?A.a3($.M(),a.f.b):s},
hW(a){var s,r,q,p,o,n,m,l=A.a3($.M(),a.f.b)
for(s=this.eY(a.b),r=J.S(s.a),s=new A.O(r,s.b,s.$ti.i("O<1>")),q=a.a;s.n();){p=r.gt()
if(p.d===B.Z&&p.ay===q){p=p.f
o=p.b
n=l.b
if(o!==n)A.h(A.a7(n,o))
p=l.a.C(0,p.a)
l=new A.q(p,n)
m=B.e.h(0,n)
if(m==null)A.h(A.x(n,"currency","is not a supported currency"))
if((p.b<=0?0:Math.max(p.gA().b,0))>m)A.h(A.y(n+" allows "+A.j(m)+" decimal places",p.k(0),null))}}return l},
k9(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a3.e,a2=a1.h(0,"refundId")
a2.toString
A.d(a2)
s=a1.h(0,"sourceId")
s.toString
A.d(s)
r=a.b
q=r.a
p=q.h(0,a2)
o=q.h(0,s)
n=p==null
if(n||o==null)return a.p(a3,B.f,"no movement "+(n?a2:s)+" to link")
n=p.dx
m=a1.h(0,"refundVersion")
m.toString
if(n===A.R(m)){m=o.dx
l=a1.h(0,"sourceVersion")
l.toString
l=m!==A.R(l)
m=l}else m=!0
if(m){B.a.m(a.c,new A.W("conflict:"+a3.a,B.H,a2,"Changed since the refund was proposed; "+a2+" and "+s+" were left as they are."))
return new A.bu()}m=a1.h(0,"cancellation")
m.toString
A.cK(m)
l=o.d
if(l===B.a_){k=o.ch
k=k==null?a0:B.b.ak(k,"forbook:")
j=k===!0}else j=!1
i=j?a.hW(o):a.hw(o)
A:{k=p.e
if(k!==B.m){l=a2+" is not money coming back"
break A}k=p.d
k=k!=null&&k!==B.G
if(k){l=a2+" is already filed"
break A}k=p.ay!=null||p.cx!=null
if(k){l=a2+" is already linked"
break A}k=o.cx
if(k!=null){l=s+" is another message about a purchase already here"
break A}l=l!==B.n&&!j||o.e!==B.j
if(l){l=s+" is not a purchase"
break A}if(j&&m){l="a purchase paid for another book is refunded, not cancelled"
break A}l=o.c
k=p.c
if(l!==k){l="they are on different accounts"
break A}l=o.f
k=p.f
if(l.b!==k.b){l="they are in different currencies"
break A}h=i.C(0,k).a.l(0,l.a)
if(h>0){l="it would refund more than the purchase ("+l.k(0)+", "+i.k(0)+" already refunded)"
break A}h=!1
if(m)if(k.J(0,l)){l=i.a.l(0,$.M())
l=l!==0}else l=!0
else l=h
if(l){l="a cancellation reverses the whole purchase, once"
break A}l=a0
break A}if(l!=null)return a.p(a3,B.P,"refund not linked: "+l)
if(j){m=o.ch
m.toString
l=o.at
l.toString
g=q.h(0,m+":expense")
r.j(0,a2,p.fb(a0,l,m,B.Z,n+1))
r.j(0,a2,q.h(0,a2).lj(s))
a2=m+":refund:"+a2
s=g==null
q=s?a0:g.c
if(q==null)q="owed-to:"+o.b
n=p.f
m=p.r
k=p.w
h=p.x
f=p.y
e=p.z
d=s?a0:g.Q
c=o.b
s=s?a0:g.a
r.j(0,a2,A.bP(q,n,k,l,d,c,a0,B.m,h,a2,s,a0,a0,m,a0,e,a0,new A.dM("operation",a3.a,a3.f,f.d),a0,a0,B.G,1))
return new A.F()}b=m?"cancel:"+s:a0
r.j(0,a2,p.lx(s,b,B.G,n+1))
if(m)r.j(0,s,o.lr(b,o.dx+1))
return new A.F()},
kM(a){var s,r,q,p,o,n,m,l,k,j=this,i=" is not on a bank account",h=a.e,g=h.h(0,"outflowId")
g.toString
A.d(g)
s=h.h(0,"inflowId")
s.toString
A.d(s)
r=j.b
q=r.a
p=q.h(0,g)
o=q.h(0,s)
q=p==null
if(q||o==null)return j.p(a,B.f,"no movement "+(q?g:s)+" to pair")
q=p.dx
n=h.h(0,"outflowVersion")
n.toString
if(q===A.R(n)){n=o.dx
m=h.h(0,"inflowVersion")
m.toString
m=n!==A.R(m)
n=m}else n=!0
if(n){B.a.m(j.c,new A.W("conflict:"+a.a,B.H,g,"Changed since the transfer was proposed; "+g+" and "+s+" were left as they are."))
return new A.bu()}l=new A.ou(j)
A:{n=p.e!==B.j||o.e!==B.m
if(n){n="the directions are not money out and money in"
break A}n=l.$1(p)
if(!n){n=g+i
break A}n=l.$1(o)
if(!n){n=s+i
break A}n=p.c
m=o.c
if(n===m){n="they are on the same account"
break A}n=p.b
m=o.b
if(n!==m){n="they are in different books"
break A}n=p.f
m=o.f
n=n.b===m.b&&!n.J(0,m)
if(n){n="the amounts differ"
break A}n=!A.BK(p)||!A.BK(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.P,"not a transfer: "+n)
k="transfer:"+g
r.j(0,g,p.dO(k,B.L,q+1))
r.j(0,s,o.dO(k,B.L,o.dx+1))
return new A.F()},
jR(a){var s,r,q,p=this,o=a.e,n=o.h(0,"movementId")
n.toString
A.d(n)
s=p.b
r=s.a.h(0,n)
if(r==null)return p.p(a,B.f,"no movement "+n+" to mark as a transfer")
q=r.dx
o=o.h(0,"baseVersion")
o.toString
if(q!==A.R(o)){B.a.m(p.c,new A.W("conflict:"+a.a,B.H,n,"Changed since it was marked as a transfer elsewhere; "+n+" was left as it is."))
return new A.bu()}A:{o=p.r.a.h(0,r.c)
if(o==null)o=null
else o=o.gaS()||o.d===B.a5
o=o!==!0
if(o){o=n+" is not on a bank account"
break A}o=r.d
if(o!=null){o=n+" is already filed as "+o.b
break A}o=A.BK(r)
if(!o){o=n+" is already paired or linked"
break A}o=null
break A}if(o!=null)return p.p(a,B.P,"not marked as a transfer: "+o)
s.j(0,n,r.lt(B.L,q+1))
return new A.F()},
kP(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a5.e,a4=a3.h(0,"movementId")
a4.toString
A.d(a4)
s=a2.b
r=s.a.h(0,a4)
if(r==null)return a2.p(a5,B.f,"no movement "+a4+" to unmark")
q=r.dx
a3=a3.h(0,"baseVersion")
a3.toString
if(q!==A.R(a3)){B.a.m(a2.c,new A.W("conflict:"+a5.a,B.H,a4,"Changed since it was put back to file elsewhere; "+a4+" was left as it is."))
return new A.bu()}A:{a3=r.d
if(a3!==B.L){a3=a3==null?"not filed":"filed as "+a3.b
a3=a4+" is "+a3+", not marked as a transfer"
break A}a3=r.ch
if(a3!=null){a3=a4+" is already paired"
break A}a3=null
break A}if(a3!=null)return a2.p(a5,B.P,"not unmarked: "+a3)
a3=r.a
p=r.b
o=r.c
n=r.e
m=r.f
l=r.r
k=r.w
j=r.x
i=r.y
h=r.z
g=r.Q
f=r.as
e=r.at
d=r.ax
c=r.ay
b=r.ch
a=r.CW
a0=r.cx
a1=r.cy
s.j(0,a4,A.bP(o,m,k,p,g,e,d,n,j,a3,c,f,r.db,l,b,h,a1,i,a0,a,null,q).eO(q+1))
return new A.F()},
jw(a){var s,r,q=this,p=a.e.h(0,"movementId")
p.toString
A.d(p)
s=q.b.a.h(0,p)
if(s==null)return q.p(a,B.f,"no movement "+p+" to flag")
r=s.cx
if(r!=null)return q.p(a,B.f,p+" is another message about "+r+"; flag that one")
q.rx.aK(p,new A.o8(p,a))
return new A.F()},
jx(a){var s,r,q,p=a.e,o=p.h(0,"movementId")
o.toString
A.d(o)
p=p.h(0,"outcome")
p.toString
A.d(p)
s=this.rx
r=s.a.h(0,o)
q=p==="mine"
if(!q&&p!=="reported")return this.p(a,B.f,"a flag ends as mine or reported, not "+p)
p=r==null
if(p&&q)return new A.F()
if(p)return this.p(a,B.f,"no open flag on "+o)
if(q)s.Y(0,o)
else if(r.d==null)s.j(0,o,new A.ep(o,r.b,r.c,a.f))
return new A.F()},
jG(a){var s,r=a.e.h(0,"event")
r.toString
s=A.Dp(t.f.a(r).G(0,t.N,t.X))
r=this.go
if(B.a.N(r,new A.oa(s)))return this.p(a,B.v,"message "+s.a+" is already held")
B.a.m(r,s)
return new A.F()},
jI(a){var s,r,q=a.e.h(0,"event")
q.toString
s=A.Dp(t.f.a(q).G(0,t.N,t.X))
q=this.k3
r=s.a
if(q.D(r))return this.p(a,B.v,"message "+r+" is already held as suspicious")
q.j(0,r,s)
return new A.F()},
kI(a){var s=this,r=a.e.h(0,"eventKey")
r.toString
A.d(r)
if(!s.k3.D(r)||s.k4.v(0,r))return s.p(a,B.f,"no suspicious message "+r+" waiting to be checked")
s.k4.m(0,r)
return new A.F()},
jH(a){var s,r,q,p,o,n,m=a.e,l=m.h(0,"eventKey")
l.toString
A.d(l)
s=this.ok
if(B.a.N(s,new A.ob(l)))return this.p(a,B.v,"reminder "+l+" is already listed")
r=A.n(m.h(0,"amount"))
q=m.h(0,"sender")
q.toString
A.d(q)
p=A.n(m.h(0,"accountAlias"))
if(r==null)o=null
else{o=m.h(0,"currency")
o.toString
A.d(o)
o=A.a3(A.ah(r),o)}n=m.h(0,"receivedAtUtc")
n.toString
A.aB(A.c_(A.d(n)).F(),B.q)
if(m.h(0,"dueOn")==null)n=null
else{n=m.h(0,"dueOn")
n.toString
n=A.ax(A.d(n))}B.a.m(s,new A.fk(l,q,p,o,n,J.a2(m.h(0,"failed"),!0)))
return new A.F()},
kB(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"fileId")
j.toString
A.d(j)
s=k.h(0,"accountId")
s.toString
A.d(s)
r=k.h(0,"name")
r.toString
A.d(r)
q=k.h(0,"size")
q.toString
q=B.O.aE(A.v9(q))
p=k.h(0,"receivedAtUtc")
p.toString
p=A.c_(A.d(p)).F()
o=k.h(0,"source")
o.toString
n=new A.dV(j,s,r,q,p,A.d(o),null)
q=l.id
if(q.D(j))return l.p(a,B.v,"statement file "+j+" is already kept")
p=A.C("\\d{9,}",!0,!1)
if(p.b.test(r))return l.p(a,B.h,"a statement file name may not hold a full number")
if(!l.r.a.D(s))return l.p(a,B.f,"statement file "+j+" is for an unregistered account")
m=l.bQ("f:"+j,s)
q.j(0,j,m===s?n:n.hc(m))
return new A.F()},
kD(a){var s,r,q,p,o=a.e,n=o.h(0,"fileId")
n.toString
A.d(n)
s=this.id
r=s.h(0,n)
if(r==null)return this.p(a,B.f,"no statement file "+n)
q=o.h(0,"attempt")
q.toString
B.O.aE(A.v9(q))
q=o.h(0,"outcome")
q.toString
A.d(q)
p=A.n(o.h(0,"reason"))
A.n(o.h(0,"statementId"))
A.n(o.h(0,"readers"))
A.n(o.h(0,"reader"))
s.j(0,n,new A.dV(r.a,r.b,r.c,r.d,r.e,r.f,new A.tX(q,p)))
return new A.F()},
kh(a){var s,r,q,p,o=a.e,n=o.h(0,"id")
n.toString
A.d(n)
s=this.c
if(B.a.N(s,new A.on(n)))return new A.F()
r=o.h(0,"reason")
r.toString
r=A.ai(B.k5,A.d(r),t.CW)
q=o.h(0,"subjectId")
q.toString
A.d(q)
p=o.h(0,"explanation")
p.toString
B.a.m(s,new A.W(n,r,q,A.d(p)))
return new A.F()},
ki(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"itemId")
j.toString
A.d(j)
if(!B.a.N(B.jd,B.b.gi3(j)))return l.p(a,B.f,"only a missing statement or a reminder can be dismissed")
if(B.b.ak(j,"missing-statement:")){s=k.h(0,"reason")
if(s!=null&&!J.a2(s,"noActivity"))return l.p(a,B.h,"a missing statement is dismissed for no activity only")
r=B.b.ac(j,18)
q=B.b.eU(r,":")
p=A.ax(B.b.ac(r,q+1))
o=A.n(k.h(0,"through"))
n=A.aB(a.f,B.q)
if(o==null)m=A.b(n.a,n.b,n.c).l(0,A.b(p.a,p.b,p.c))<0?p:n
else m=A.ax(o)
if(q<=0||A.b(m.a,m.b,m.c).l(0,A.b(p.a,p.b,p.c))<0)return l.p(a,B.h,"no stretch "+j+" up to "+m.k(0)+" to dismiss")
k=l.RG
B.a.m(k,new A.fR(l.bQ("d:"+k.length,B.b.X(r,0,q)),p,m))}l.R8.m(0,j)
return new A.F()},
kj(a){var s=a.e,r=s.h(0,"itemId"),q=s.h(0,"until")
if(typeof r!="string"||!B.b.ak(r,"missing-statement:")||typeof q!="string")return this.p(a,B.h,"only a missing statement is snoozed, to a day")
this.y1.j(0,r,A.ax(q))
return new A.F()},
ka(a){var s=a.a
if(!B.b.ak(s,"reminder:"))return this.p(a,B.h,"not a reminder key")
this.xr.m(0,s)
return new A.F()},
iQ(a){var s=a.e,r=s.h(0,"on"),q=s.h(0,"hour"),p=s.h(0,"minute")
if(!A.ea(r)||!A.cL(q)||!A.cL(p)||q<0||q>23||p<0||p>59)return this.p(a,B.h,"a brief time is on or off, an hour and a minute")
return new A.F()},
iP(a){var s=a.e.h(0,"date")
if(typeof s!="string"||a.a!=="brief:"+s)return this.p(a,B.h,"not a brief key")
this.lV.m(0,s)
return new A.F()},
iU(a){var s=a.e.h(0,"calendarId")
if(typeof s!="string"||s.length===0)return this.p(a,B.h,"no calendar id")
return new A.F()},
iT(a){var s=a.a
if(!B.b.ak(s,"calendar-event:"))return this.p(a,B.h,"not a calendar event key")
this.lW.m(0,s)
return new A.F()},
iV(a){var s,r,q=a.e,p=q.h(0,"subjectId"),o=q.h(0,"eventId"),n=q.h(0,"hash"),m=q.h(0,"n"),l=q.h(0,"removed"),k=A.aA(q.h(0,"date"))
if(typeof p!="string"||typeof o!="string"||typeof n!="string"||!A.cL(m)||!A.ea(l)||k==null)return this.p(a,B.h,"a calendar write names its subject, event, date and count")
if(a.a!=="calendar-sync:"+p+":"+A.j(m))return this.p(a,B.h,"not a calendar key")
s=this.lX
r=s.h(0,p)
r=r==null?null:r.a[3]
if((r==null?0:r)>=m)return new A.F()
s.j(0,p,new A.jk([k,o,n,m,l]))
return new A.F()},
kb(a){if(!A.ea(a.e.h(0,"on")))return this.p(a,B.h,"the reminders switch is on or off")
return new A.F()},
iK(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"billId")
k.toString
A.d(k)
s=A.n(l.h(0,"mark"))
l=s==null
r=l?null:A.BD(B.j8,t.d6).h(0,s)
if(!l&&r==null)return m.p(a,B.h,"no bill mark "+s)
q=A.Ch(m,null)
p=A.L(q)
o=A.aN(new A.o(q,p.i("k(1)").a(new A.o5(k)),p.i("o<1>")),t.ok)
if(o==null)return m.p(a,B.f,"no bill "+k)
n=o.dt(A.aB(a.f,B.q))
if(!A.Lm(n,r)){l=l?"clear":s
return m.p(a,B.f,"a "+n.b+" bill cannot be marked "+l)}l=m.x2
if(r==null)l.Y(0,k)
else l.j(0,k,r)
return new A.F()},
jU(a){var s,r,q,p,o=this,n=null,m=a.e,l=m.h(0,"month")
l.toString
A.d(l)
m=m.h(0,"openItems")
m.toString
A.R(m)
s=$.CI().aj(l)
if(s==null||m<0)return o.p(a,B.h,"no month "+l+" to close")
r=s.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
q=A.Z(q,n,n)
if(2>=r.length)return A.a(r,2)
r=r[2]
r.toString
p=new A.B(q,A.Z(r,n,n)+1,1).aG(-1)
r=A.aB(a.f,B.q)
if(A.b(r.a,r.b,r.c).l(0,A.b(p.a,p.b,p.c))<=0)return o.p(a,B.f,"a month closes only after it ends")
r=o.ry
if(r.D(l))return o.p(a,B.v,l+" is already closed")
r.j(0,l,m)
return new A.F()},
kQ(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"holdingId")
h.toString
A.d(h)
s=i.h(0,"name")
s.toString
A.d(s)
r=i.h(0,"kind")
r.toString
r=A.ai(B.jY,A.d(r),t.xN)
q=i.h(0,"bookId")
q.toString
A.d(q)
p=i.h(0,"value")
p.toString
p=A.aO(t.f.a(p).G(0,t.N,t.X))
o=i.h(0,"asOf")
o.toString
o=A.ax(A.d(o))
n=new A.eD(h,s,r,q,p,o,A.n(i.h(0,"accountId")))
for(i=j.to,s=i.a,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>")),m=null;s.n();){l=s.d
if(l.a===h)if(m!=null){r=l.f
q=m.f
q=A.b(r.a,r.b,r.c).l(0,A.b(q.a,q.b,q.c))>0
r=q}else r=!0
else r=!1
if(r)m=l}s=j.gcD()
k=A.Nb(n,j.r,new A.au(s,A.p(s).i("au<1>")),m,A.aB(a.f,B.q))
if(k!=null)return j.p(a,B.h,k)
i.j(0,new A.r(h,o),n)
return new A.F()},
kf(a){var s,r,q,p,o,n=this,m=null,l=A.aB(a.f,B.q),k=A.Iq(a.e,l),j=k.b,i=$.CI().aj(j),h=i!=null
if(h){s=i.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.Z(r,m,m)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
q=new A.B(r,A.Z(s,m,m)+1,1).aG(-1)}else{s=$.Gm()
q=s.b.test(j)?new A.B(A.Z(j,m,m),13,1).aG(-1):m}if(q==null||n.aH(k.a)==null||k.e.length===0)return n.p(a,B.h,"no report "+k.a+" "+j+" to keep")
s=A.b(l.a,l.b,l.c)
r=q.a
p=q.b
if(s.l(0,A.b(r,p,q.c))<=0)return n.p(a,B.f,"a report is kept once its period ends")
if(h&&A.FN(n,k.a,p,l,r).a===B.b5)return n.p(a,B.f,"a month is kept once it is final or finalised")
h=n.x1
s=A.L(h)
o=A.BF(new A.o(h,s.i("k(1)").a(new A.om(k)),s.i("o<1>")),t.io)
s=k.c
r=o==null
p=r?m:o.c
if(s!==(p==null?0:p)+1)return n.p(a,B.v,"version "+s+" of "+j+" is out of turn")
if(!r&&A.Is(o.e,k.e))return n.p(a,B.v,j+" has not changed since version "+o.c)
B.a.m(h,k)
return new A.F()},
kC(a){var s,r,q,p=this,o=a.e,n=o.h(0,"fileId")
n.toString
A.d(n)
o=o.h(0,"accountId")
o.toString
A.d(o)
s=p.id
r=s.h(0,n)
if(r==null)return p.p(a,B.f,"no statement file "+n)
if(!p.r.a.D(o))return p.p(a,B.f,"no account "+o)
q=r.r
if(q==null)q=null
else{q=q.a
q=q==="read"||q==="alreadyRead"}if(q===!0)return p.p(a,B.v,"statement file "+n+" is already read for "+r.b)
s.j(0,n,r.hc(p.bQ("f:"+n,o)))
return new A.F()},
jM(a){var s,r,q,p,o,n,m,l=this,k={},j=a.e
k.a=null
s=j.h(0,"institution")
r=j.h(0,"last4")
q=j.h(0,"accountId")
k.a=s
if(typeof s!="string"||typeof r!="string"||typeof q!="string")return l.p(a,B.h,"a last 4 pick needs its bank, last 4 and account")
p=A.C("\\d+$",!0,!1).aj(r)
if(p==null)o=null
else{p=p.b
if(0>=p.length)return A.a(p,0)
o=p[0]}p=A.C("^\\d{4}$",!0,!1)
if(p.b.test(r)||o==null||o.length<2)return l.p(a,B.h,"a pick is remembered only for a partly hidden last 4")
p=l.r.a
n=p.h(0,q)==null
if(n)m=B.bN
else{p=p.h(0,l.aX(q))
p.toString
p=A.c([p],t.Q)
B.a.a1(p,l.c9(l.aX(q)))
m=p}if(n||!B.a.N(m,new A.oe(k,o)))return l.p(a,B.f,"no account "+q+" of "+k.a+" ending in "+o)
p=l.k2
p.Y(0,k.a+"|"+r)
k=k.a
p.j(0,k+"|"+r,new A.cZ(k,r,l.bQ("p:"+k+"|"+r,q),a.a))
return new A.F()},
jL(a){var s=a.e.h(0,"pickKey"),r=this.k2,q=A.p(r).i("ac<1,2>"),p=A.aN(new A.o(new A.ac(r,q),q.i("k(i.E)").a(new A.od(s)),q.i("o<i.E>")),t.ub)
if(p==null)return this.p(a,B.v,"no remembered pick "+A.j(s))
q=p.a
r.Y(0,q)
this.ch.Y(0,"p:"+q)
return new A.F()},
kr(a){var s,r=a.e
if(!B.m6.ld(r.gag())||!B.m5.v(0,r.h(0,"action")))return this.p(a,B.h,"a secret audit may hold only which secret, what and when")
s=r.h(0,"secretId")
s.toString
A.d(s)
s=r.h(0,"action")
s.toString
A.d(s)
s=r.h(0,"atUtc")
s.toString
A.c_(A.d(s)).F()
B.a.m(this.k1,new A.lo())
return new A.F()},
jP(a){var s,r,q=this,p="fromEvent",o=A.Lc(q,q.ab,a)
if(o!=null)return q.p(a,B.h,o)
s=a.e.h(0,"fields")
if(a.d==="life.set"&&t.f.b(s)&&typeof s.h(0,p)=="string"){r=s.h(0,p)
r.toString
q.hb.m(0,A.d(r))}return new A.F()},
kE(a){var s,r,q,p,o,n,m,l,k=this,j=a.e,i=j.h(0,"statementId"),h=j.h(0,"loans"),g=typeof i=="string"?B.a.eR(k.fx,new A.op(i)):-1
if(g<0||!t.j.b(h))return k.p(a,B.h,"no statement "+A.j(i)+" to give its loans")
s=null
try{r=A.c([],t.Ev)
for(j=J.S(h),p=t.f,o=t.N,n=t.X;j.n();){q=j.gt()
m=q
m.toString
J.bU(r,A.DY(p.a(m).G(0,o,n)))}s=r}catch(l){r=k.p(a,B.h,"the loans of "+A.j(i)+" do not read")
return r}r=k.fx
if(!(g>=0&&g<r.length))return A.a(r,g)
j=r[g]
B.a.j(r,g,new A.c7(j.a,j.b,j.c,j.d,j.e,j.f,j.r,j.w,j.x,j.y,j.z,t.nd.a(s)))
return new A.F()},
k6(a){var s,r=a.e.h(0,"keys")
if(t.j.b(r)){s=J.ar(r)
s=s.ga4(r)||s.N(r,new A.oh())}else s=!0
if(s)return this.p(a,B.h,"a rejected proposal names its events by their hashes")
this.hb.a1(0,J.dg(r,t.N))
return new A.F()},
fz(a){var s,r=a.d,q=!0
if(!(r===B.a_&&a.at!=null))if(!(r===B.b1&&a.at!=null))if(!(r===B.w&&a.ch!=null&&a.at!=null))if(!(r===B.n&&a.ch!=null&&a.at!=null)){if(r===B.Z){s=a.ch
s=s==null?null:B.b.ak(s,"forbook:")
s=s===!0}else s=!1
if(!s)r=r===B.G&&a.at!=null||B.b.ak(a.c,"owed-to-person:")
else r=q}else r=q
else r=q
else r=q
else r=q
return r},
jA(a){var s,r,q=a.ch
if(q==null||!B.b.ak(q,"forbook:"))return null
if(a.a===B.b.ac(q,8)){s=this.b.a
r=s.h(0,q+":expense")
s=r==null?s.h(0,q+":income"):r}else s=null
return s},
eq(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=a2.e,a1=a0.h(0,"movementId")
a1.toString
A.d(a1)
s=b.b
r=s.a
q=r.h(0,a1)
p=a0.h(0,"bookId")
p.toString
A.d(p)
o=b.d.a.h(0,a0.h(0,"categoryId"))
if(q==null)return b.p(a2,B.f,"no movement "+a1+" to pay for another book")
n=q.e
m=n===B.m
if(q.cx==null){l=q.c
l=B.b.ak(l,"owed-to")||B.b.ak(l,"held-by")}else l=!0
if(l)return b.p(a2,B.f,"only money paid out of or into an account is for another book")
if(b.aH(p)==null||p===q.b)return b.p(a2,B.f,"pick another book than "+q.b)
if(o==null||o.b!==b.bT(p)||A.hG(o)!==m)return b.p(a2,B.f,m?"money received is filed under an income category of "+p+"'s":u.s+p+"'s")
l=q.d
if(l!=null)k=l!==(m?B.w:B.n)
else k=!1
if(k)return b.p(a2,B.f,a1+" is already filed as "+l.b+"; put it back first")
l=q.dx
k=a0.h(0,"baseVersion")
k.toString
if(l!==A.R(k)){B.a.m(b.c,new A.W("conflict:"+a2.a,B.H,a1,"Changed since it was marked as paid for "+p+"; "+a1+" was left as it is."))
return new A.bu()}j="forbook:"+a1
k=m?"income":"expense"
i=j+":"+k
if(r.D(i))return b.p(a2,B.v,"movement "+i+" already exists")
r=m?B.b1:B.a_
s.j(0,a1,q.fb(a,p,j,r,l+1))
r=q.b
l=m?"held-by:"+r:"owed-to:"+r
k=m?B.w:B.n
h=q.f
g=q.r
f=q.w
e=q.x
d=q.y
c=q.z
s.j(0,i,A.bP(l,h,f,p,o.a,r,a,n,e,i,a,a,a,g,j,c,a,new A.dM("operation",a2.a,a2.f,d.d),a,a,k,1))
b.p1.Y(0,a1)
return new A.F()},
jz(a){var s,r,q,p,o,n,m=this,l=null,k=a.e,j=k.h(0,"movementId")
j.toString
A.d(j)
s=m.b
r=s.a
q=r.h(0,j)
p=q==null
o=p?l:q.ch
if(p||o==null||o!=="forbook:"+j)return m.p(a,B.f,j+" is not paid for another book")
if(new A.N(r,A.p(r).i("N<2>")).N(0,new A.o9(j)))return m.p(a,B.ad,"the advance on "+j+" has a settlement; it stays")
r=m.aJ
p=o+":expense"
if(r.eT(p)!=null||r.eT(o+":income")!=null)return m.p(a,B.ad,"an invoice counts "+j+"'s other side; it stays")
r=q.dx
n=k.h(0,"baseVersion")
n.toString
if(r!==A.R(n)){B.a.m(m.c,new A.W("conflict:"+a.a,B.H,j,"Changed since; "+j+" was left paid for "+A.j(q.at)+"."))
return new A.bu()}s.Y(0,p)
s.Y(0,o+":income")
s.j(0,j,q.fb(l,l,l,l,r+1))
return new A.F()},
iR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=a.e,b=c.h(0,"id")
b.toString
A.d(b)
s=c.h(0,"bookId")
s.toString
A.d(s)
r=c.h(0,"memberId")
r.toString
A.d(r)
q=e.d.a.h(0,c.h(0,"categoryId"))
p=A.cN(c.h(0,"date"))
if(e.aH(s)==null||s==="personal")return e.p(a,B.f,"a person's payment is for a company or the property")
if(!e.p3.a.D(r))return e.p(a,B.f,"no household member "+r)
if(q==null||q.b!==e.bT(s)||A.hG(q))return e.p(a,B.f,u.s+s+"'s")
if(p==null)return e.p(a,B.h,"a payment needs its date")
o=c.h(0,"amount")
o.toString
A.d(o)
n=c.h(0,"currency")
n.toString
A.d(n)
m=A.a3(A.ah(o),n)
if(m.a.a.ga7(0)<=0)return e.p(a,B.h,"an amount is more than zero")
l=A.n(c.h(0,"invoiceId"))
o=l!=null
if(o){n=e.aJ.c.h(0,l)
n=(n==null?d:n.b)!==s}else n=!1
if(n)return e.p(a,B.f,"invoice "+l+" is not in "+s+"'s book")
if(c.h(0,"sgd")!=null){n=c.h(0,"sgd")
n.toString
k=A.a3(A.ah(A.d(n)),"SGD")
j=A.dr(A.j(c.h(0,"rate")))
i=A.cN(c.h(0,"rateDate"))
if(j==null||j.l(0,$.M())<=0||i==null||k.a.a.ga7(0)<=0||m.b==="SGD")return e.p(a,B.h,"an SGD amount comes with its rate and date (LED-09)")
h=new A.lv()}else h=d
g="person:"+b
b=A.n(c.h(0,"payee"))
b=b==null?d:B.b.H(b)
f=e.dw(a,A.c([A.bP("owed-to-person:"+r,m,p,s,q.a,d,r,B.j,p,g,d,d,d,d,d,b,d,new A.dM("manual",a.a,a.f,!1),d,d,B.n,1)],t.A))
if(f instanceof A.F){if(h!=null)e.aJ.y.j(0,g,h)
if(o)J.bU(e.aJ.d.aK(l,new A.o6()),g)}return f},
jK(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="invoiceId",f="baseVersion",e="movement.forBook",d=a0.e,c=h.aJ,b=c.c.h(0,d.h(0,g)),a=d.h(0,"movementId")
a.toString
A.d(a)
s=h.b
r=s.a
q=r.h(0,a)
if(b==null)return h.p(a0,B.f,"no invoice "+A.j(d.h(0,g)))
p=b.b
if(p==null)return h.p(a0,B.f,"place invoice "+b.a+" in a book first")
if(q==null||q.cx!=null)return h.p(a0,B.f,"no movement "+a+" to link")
if(q.f.b!==b.f.b)return h.p(a0,B.f,a+" is not in the invoice's currency")
o="forbook:"+a
n=o+":expense"
m=r.h(0,n)
if(m==null)m=r.h(0,o+":income")
if(q.b===p){r=b.y!=null
l=r?B.m:B.j
if(q.e!==l)return h.p(a0,B.f,r?"rent comes in":"a bill is paid out")
k=r?B.w:B.n
j=b.r
r=!1
if(j!=null)if(!h.fz(q)){r=q.d
r=r==null||r===k}if(r){r=q.dx
o=d.h(0,f)
o.toString
if(r!==A.R(o)){B.a.m(h.c,new A.W("conflict:"+a0.a,B.H,a,"Changed since; "+a+" was not linked to invoice "+b.a+"."))
return new A.bu()}s.j(0,a,q.lu(j,k,r+1))
h.p1.Y(0,a)}else{s=q.d
if(s!=null&&s!==k)return h.p(a0,B.f,a+" is filed as "+s.b)}n=a}else if(m!=null&&m.b===p)n=m.a
else{s=b.y!=null
if(s)r=q.e!==B.m||b.r==null
else r=!1
if(r)return h.p(a0,B.f,"rent is money received, filed as the property's income")
else{j=b.r
if(s){i=h.eq(new A.ak(a0.a,a0.b,a0.c,e,A.T(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.F))return i
n=o+":income"}else{if(j==null)return h.p(a0,B.f,"give invoice "+b.a+" a category first")
i=h.eq(new A.ak(a0.a,a0.b,a0.c,e,A.T(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.F))return i}}}if(c.eT(n)!=null)return h.p(a0,B.v,a+" is already linked to an invoice")
J.bU(c.d.aK(b.a,new A.oc()),n)
return new A.F()},
p(a,b,c){var s=a.a
B.a.m(this.c,new A.W("rejected:"+s,b,s,c))
return new A.tD()}}
A.oy.prototype={
$1(a){var s,r,q,p="[^A-Z0-9]"
t.p0.a(a)
s=A.C(p,!0,!1)
s=A.a8(a.b.toUpperCase(),s,"")
r=this.a
q=A.C(p,!0,!1)
if(s!==A.a8(r.toUpperCase(),q,"")){s=A.C(p,!0,!1)
s=A.a8(a.a.toUpperCase(),s,"")
q=A.C(p,!0,!1)
s=s===A.a8(r.toUpperCase(),q,"")}else s=!0
return s},
$S:89}
A.ol.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.ow.prototype={
$2(a,b){var s,r,q=t.b
q.a(a)
q.a(b)
q=b.cy
q.toString
s=a.cy
s.toString
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:8}
A.ox.prototype={
$1(a){return!this.a.b.a.D("mv-"+B.b.X(A.vo(B.aE.O(B.E.O(t.Ap.a(a).a)).a),0,20))},
$S:40}
A.oV.prototype={
$1(a){return!this.a.k4.v(0,t.Ap.a(a).a)},
$S:40}
A.oU.prototype={
$1(a){return t.v.a(a).b===this.a.b},
$S:9}
A.ov.prototype={
$1(a){var s,r,q
t.W.a(a)
if(a.cx!=null)return!1
s=this.a.r.a.h(0,a.c)
if(s!=null){r=a.x
q=s.w
q=A.b(r.a,r.b,r.c).l(0,A.b(q.a,q.b,q.c))>=0
r=q}else r=!0
return r},
$S:1}
A.oG.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(this.a||a.cx==null){r=this.b
if(r==null||a.b===r){s=this.c
s=s==null||a.c===s}}return s},
$S:1}
A.oF.prototype={
$1(a){return t.W.a(a).cx===this.a},
$S:1}
A.o3.prototype={
$1(a){return this.a.b.a.D(t.W.a(a).a)},
$S:1}
A.o4.prototype={
$1(a){return t.W.a(a).a},
$S:19}
A.of.prototype={
$1(a){return a==null?"no note":'the note "'+a+'"'},
$S:32}
A.ot.prototype={
$1(a){return t.v.a(a).a===this.a.a},
$S:9}
A.or.prototype={
$1(a){return t.dh.a(a).a===this.a.a},
$S:22}
A.os.prototype={
$1(a){var s,r,q
t.dh.a(a)
s=this.a
if(a.b===s.b){r=a.d
if(r==null)r=a.c
q=s.d
s=q==null?s.c:q
r=Math.abs(B.d.u(A.b(s.a,s.b,s.c).ar(A.b(r.a,r.b,r.c)).a,864e8))<=20
s=r}else s=!1
return s},
$S:22}
A.oq.prototype={
$1(a){return t.dh.a(a).a===this.a},
$S:22}
A.oz.prototype={
$1(a){return!A.DB(t.b.a(a).d,this.a)},
$S:2}
A.oA.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:9}
A.oB.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:79}
A.oC.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.oD.prototype={
$1(a){return t.to.a(a)},
$S:80}
A.oE.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:46}
A.o2.prototype={
$1(a){t.v.a(a)
return a.a===this.a.d&&a.b===this.b},
$S:9}
A.ok.prototype={
$2(a,b){var s,r,q,p
if(!this.b.v(0,b))return null
s=this.a
r=s.ch
q=r.h(0,a)
if(q==null)q=b
p=s.aX(q)
if(p===q)r.Y(0,a)
else r.j(0,a,q)
return p===b?null:p},
$S:144}
A.oi.prototype={
$1(a){return this.a.v(0,t.W.a(a).c)},
$S:1}
A.oj.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.oT.prototype={
$2(a,b){var s=a===1?"":"s"
return""+a+" "+b+s},
$S:139}
A.oH.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:9}
A.oI.prototype={
$1(a){return t.W.a(a).c===this.a},
$S:1}
A.oJ.prototype={
$1(a){return t.dh.a(a).b===this.a},
$S:22}
A.oL.prototype={
$1(a){return t.R.a(a).r===this.a},
$S:17}
A.oM.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:79}
A.oN.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.oO.prototype={
$1(a){return t.to.a(a)},
$S:80}
A.oP.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:46}
A.oQ.prototype={
$1(a){return t.A9.a(a).b===this.a},
$S:138}
A.oR.prototype={
$1(a){return t.ch.a(a).c===this.a},
$S:137}
A.oS.prototype={
$1(a){return t.AD.a(a).r===this.a},
$S:132}
A.oK.prototype={
$1(a){return t.tD.a(a).z===this.a},
$S:130}
A.o7.prototype={
$1(a){var s=a.d
return(s==null||s===B.X)&&a.ch==null&&a.cx==null},
$S:1}
A.ou.prototype={
$1(a){var s=this.a.r.a.h(0,a.c)
if(s==null)s=null
else s=s.gaS()||s.d===B.a5
return s===!0},
$S:1}
A.o8.prototype={
$0(){var s=this.b
return new A.ep(this.a,s.f,s.a,null)},
$S:128}
A.oa.prototype={
$1(a){return t.Ap.a(a).a===this.a.a},
$S:40}
A.ob.prototype={
$1(a){return t.pL.a(a).a===this.a},
$S:123}
A.on.prototype={
$1(a){return t.k.a(a).a===this.a},
$S:36}
A.o5.prototype={
$1(a){return t.ok.a(a).a===this.a},
$S:116}
A.om.prototype={
$1(a){var s
t.io.a(a)
s=this.a
return a.a===s.a&&a.b===s.b},
$S:114}
A.oo.prototype={
$1(a){return A.cK(a)},
$S:109}
A.oe.prototype={
$1(a){t.b.a(a)
return A.hF(a.c)===this.a.a&&B.b.bF(a.b,this.b)},
$S:2}
A.od.prototype={
$1(a){return t.ub.a(a).b.d===this.a},
$S:108}
A.op.prototype={
$1(a){return t.v.a(a).a===this.a},
$S:9}
A.oh.prototype={
$1(a){var s
if(typeof a=="string"){s=$.HC()
s=!s.b.test(a)}else s=!0
return s},
$S:107}
A.o9.prototype={
$1(a){t.W.a(a)
return a.d===B.Z&&a.ay===this.a},
$S:1}
A.o6.prototype={
$0(){return A.c([],t.s)},
$S:96}
A.oc.prototype={
$0(){return A.c([],t.s)},
$S:96}
A.fR.prototype={}
A.ep.prototype={}
A.lo.prototype={}
A.md.prototype={
mw(a){var s,r,q,p=this
if(p.e.Y(0,a)){s=A.w(t.N,t.W)
for(r=p.a,r=new A.a1(r,r.r,r.e,A.p(r).i("a1<2>"));r.n();){q=r.d
if(q.c===a)s.j(0,q.a,q)}p.d.j(0,a,s)}s=p.d.h(0,a)
s=s==null?null:new A.N(s,A.p(s).i("N<2>"))
return s==null?B.aa:s},
fD(a,b){var s,r,q,p
if(a!=null)s=b==null||a.c!==b.c
else s=!1
if(s){s=this.d
r=a.c
q=s.h(0,r)
p=q==null
if(!p)q.Y(0,a.a)
if(!p&&q.a===0)s.Y(0,r)
if(b!=null)this.e.m(0,b.c)}if(b!=null){s=this.d
r=b.c
p=s.h(0,r)
if(p==null){p=A.w(t.N,t.W)
s.j(0,r,p)
s=p}else s=p
s.j(0,b.a,b)}},
ek(a,b){var s,r,q,p,o=a==null?null:a.ay
if(o==null||a.d!==B.G||a.cx!=null)return
s=this.c
r=s.h(0,o)
if(b)s.j(0,o,r==null?a.f:r.C(0,a.f))
else{q=r.a8(0,a.f)
p=q.a.l(0,$.M())
if(p===0)s.Y(0,o)
else s.j(0,o,q)}},
j(a,b,c){var s,r=this
A.d(b)
t.W.a(c)
s=r.a.h(0,b)
r.ek(s,!1)
r.ii(0,b,c)
r.ek(c,!0)
r.fD(s,c)},
Y(a,b){var s=this,r=s.a.h(0,b)
s.ek(r,!1)
s.fD(r,null)
return s.ij(0,b)}}
A.h6.prototype={}
A.zy.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=a.c
if(A.b(r,q,p).l(0,A.b(s.a,s.b,s.c))>=0){s=this.b
s=A.b(r,q,p).l(0,A.b(s.a,s.b,s.c))<=0}else s=!1
return s},
$S:105}
A.hc.prototype={
U(){return"ReportState."+this.b}}
A.jR.prototype={}
A.p5.prototype={}
A.zz.prototype={
$1(a){var s,r
t.b.a(a)
s=!1
if(a.r===this.a){r=a.d
if(r!==B.o&&r!==B.x){s=a.w
r=this.b
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))<=0
s=r}}return s},
$S:2}
A.zA.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.zB.prototype={
$1(a){var s,r,q,p
t.sH.a(a)
s=this.a
r=a.a
q=s.a
p=s.b
s=s.c
if(A.b(q,p,s).l(0,A.b(r.a,r.b,r.c))>=0){r=a.b
r=A.b(q,p,s).l(0,A.b(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:73}
A.bg.prototype={
U(){return"MovementType."+this.b}}
A.bX.prototype={
U(){return"PaymentMethod."+this.b}}
A.cT.prototype={
U(){return"Direction."+this.b}}
A.dM.prototype={}
A.X.prototype={
bp(a,b,c,d,e,f,g,h){var s=this,r=g==null?s.d:g,q=a==null?s.f:a,p=e==null?s.y:e,o=b==null?s.Q:b,n=c==null?s.ay:c,m=d==null?s.ch:d,l=f==null?s.CW:f,k=h==null?s.dx:h
return A.bP(s.c,q,s.w,s.b,o,s.at,s.ax,s.e,s.x,s.a,n,s.as,s.db,s.r,m,s.z,s.cy,p,s.cx,l,r,k)},
lu(a,b,c){var s=null
return this.bp(s,a,s,s,s,s,b,c)},
eO(a){var s=null
return this.bp(s,s,s,s,s,s,s,a)},
lt(a,b){var s=null
return this.bp(s,s,s,s,s,s,a,b)},
dO(a,b,c){var s=null
return this.bp(s,s,s,a,s,s,b,c)},
lj(a){var s=null
return this.bp(s,s,a,s,s,s,s,s)},
lx(a,b,c,d){var s=null
return this.bp(s,s,a,b,s,s,c,d)},
lr(a,b){var s=null
return this.bp(s,s,s,a,s,s,s,b)},
lw(a,b,c,d){var s=null
return this.bp(a,s,s,s,b,c,s,d)},
lp(a,b){var s=null
return this.bp(a,s,s,s,s,s,s,b)},
lq(a,b){var s=null
return this.bp(s,a,s,s,s,s,s,b)},
cg(a){var s=this
return A.bP(a,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
dX(a,b,c){var s=this,r=b==null?s.c:b,q=c==null?s.at:c
return A.bP(r,s.f,s.w,a,s.Q,q,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
m9(a){return this.dX(a,null,null)},
hJ(a){var s=this
return A.bP(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,a,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
hI(a,b,c,d){var s=this
return A.bP(s.c,s.f,s.w,s.b,a,s.at,s.ax,s.e,s.x,s.a,s.ay,b,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,c,d)},
hM(a){var s=this
return A.bP(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,a,s.CW,s.d,s.dx+1)},
fb(a,b,c,d,e){var s=this
return A.bP(s.c,s.f,s.w,s.b,a,b,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,c,s.z,s.cy,s.y,s.cx,s.CW,d,e)}}
A.iN.prototype={
U(){return"PostingStatus."+this.b}}
A.bt.prototype={
U(){return"SpendFlag."+this.b}}
A.k5.prototype={
jy(a,b){var s,r,q,p
t.Ez.a(b)
s=this.a
r=s.h(0,a)
if(r!=null)return r
q=b.h(0,a)
p=q==null?null:q.d
s=p==null?null:s.h(0,p)
return s==null?B.aB:s}}
A.nf.prototype={
$1(a){return t.d.a(a).b===this.a.a},
$S:98}
A.d8.prototype={
gh9(){var s=this.b
s=s==null?null:s.x
return s==null?this.a.x:s}}
A.dn.prototype={}
A.vv.prototype={
$2(a,b){var s,r,q,p,o=t.zC
o.a(a)
o.a(b)
o=a.a
s=o==null
r=b.a
q=r==null
if(s!==q)return s?1:-1
p=b.b.a.l(0,a.b.a)
if(p!==0)o=p
else{if(s)o=""
o=B.b.l(o,q?"":r)}return o},
$S:104}
A.p6.prototype={}
A.zC.prototype={
$1(a){var s,r
t.qp.a(a)
s=a.gh9()
r=this.a
if(A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>=0){s=a.gh9()
r=this.b
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:100}
A.zD.prototype={
$1(a){return t.qp.a(a).a.f.b===this.a},
$S:100}
A.nN.prototype={}
A.AD.prototype={
$2(a,b){var s,r
A.d(a)
A.d(b)
s=this.a
r=s.h(0,b).a.l(0,s.h(0,a).a)
return r!==0?r:B.b.l(a,b)},
$S:37}
A.ag.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.p(this)
s.i("ag.K").a(b)
s.i("ag.V").a(c)
this.a.j(0,b,c)},
Y(a,b){var s=this.a
s.D(b)
return s.Y(0,b)},
gag(){var s=this.a
return new A.au(s,A.p(s).i("au<1>"))},
gS(){var s=this.a
return new A.N(s,A.p(s).i("N<2>"))},
gbs(){var s=this.a
return new A.ac(s,A.p(s).i("ac<1,2>"))},
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gan(a){return this.a.a!==0},
D(a){return this.a.D(a)},
a2(a,b){return this.a.a2(0,A.p(this).i("~(ag.K,ag.V)").a(b))}}
A.j_.prototype={
m(a,b){var s=this.a.m(0,this.$ti.c.a(b))
return s},
v(a,b){return this.a.v(0,b)},
gB(a){var s=this.a
return A.e5(s,s.r,A.p(s).c)},
gq(a){return this.a.a}}
A.ct.prototype={}
A.pd.prototype={}
A.xC.prototype={
$2(a,b){var s,r,q=t.eY
q.a(a)
q.a(b)
s=B.b.l(a.a.b,b.a.b)
if(s!==0)q=s
else{q=a.b.b
r=b.b.b
r=A.b(q.a,q.b,q.c).l(0,A.b(r.a,r.b,r.c))
q=r}return q},
$S:76}
A.z2.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.o){s=a.as
s=s==null?null:s.x
s=s===this.a}else s=!1
return s},
$S:2}
A.xB.prototype={
$1(a){t.eY.a(a)
return a.b.bi(a.d)===this.a},
$S:103}
A.z1.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.ck.prototype={
U(){return"InstalmentStatus."+this.b}}
A.d0.prototype={}
A.p0.prototype={}
A.z3.prototype={
$2(a,b){var s=t.W,r=s.a(a).x
s=s.a(b).x
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:7}
A.z4.prototype={
$1(a){var s,r,q
t.v.a(a)
s=this.a
r=s.a
q=a.c
if(A.b(r.a,r.b,r.c).l(0,A.b(q.a,q.b,q.c))>=0){s=s.a
r=a.d
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:9}
A.z5.prototype={
$1(a){var s=t.pt.a(a).d
return s===B.aL||s===B.aM},
$S:99}
A.es.prototype={}
A.ei.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.ei&&b.a.J(0,this.a)},
gP(a){var s=this.a
return A.bx(s.a,s.b,s.c,B.t)},
k(a){return"DueOn("+this.a.k(0)+")"}}
A.fK.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.fK&&b.a===this.a&&b.b===this.b},
gP(a){return A.bx(this.a,this.b,B.t,B.t)},
k(a){return"CheckWithLender("+this.a+"-"+this.b+")"}}
A.iH.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iH},
gP(a){return 0}}
A.iG.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iG&&b.a===this.a},
gP(a){return A.bx(2,this.a,B.t,B.t)},
k(a){return"NoneLeftIfPaid("+this.a+")"}}
A.i7.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.i7},
gP(a){return 1}}
A.p1.prototype={}
A.dI.prototype={
U(){return"LoanType."+this.b}}
A.h3.prototype={
M(){var s=this,r=null,q=t.N,p=A.w(q,t.X),o=s.a
p.j(0,"type",o==null?r:o.b)
o=s.b
p.j(0,"principal",o==null?r:A.T(["amount",o.a.k(0),"currency",o.b],q,q))
p.j(0,"instalmentCount",s.c)
p.j(0,"paymentDay",s.d)
p.j(0,"pendingInstalments",s.e)
q=s.f
p.j(0,"pendingAsOf",q==null?r:q.k(0))
q=s.r
q=q==null?r:q.M()
if(q!=null)p.j(0,"instalment",q)
q=s.w
if(q!=null)p.j(0,"payingAccountId",q)
q=s.x
if(q!=null)p.j(0,"cardLoan",q)
return p}}
A.z6.prototype={
$1(a){var s=B.b.H(a)
return s.length===0?null:s},
$S:97}
A.z8.prototype={
$1(a){var s=this.a
if(s.$1(a)==null)s=null
else{s=s.$1(a)
s.toString
s=A.le(s,null)}return s},
$S:106}
A.z7.prototype={
$1(a){var s=this.a.$1(a)
s.toString
s=A.FZ(s)
s.toString
return A.a3(s,this.b)},
$S:59}
A.hj.prototype={
bi(a){var s,r=this,q=r.b.k(0),p=r.f
p=p==null?null:p.a
p=A.j(p==null?"":p)
s=r.r
if(s==null)s=""
return a+":"+r.a.b+":"+q+":"+p+":"+s},
M(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"kind",r.a.b)
q.j(0,"started",r.b.k(0))
q.j(0,"outstanding",r.c.M())
s=r.d
s=s==null?null:s.k(0)
if(s!=null)q.j(0,"ends",s)
s=r.e
if(s!=null)q.j(0,"remaining",s)
s=r.f
s=s==null?null:s.M()
if(s!=null)q.j(0,"amount",s)
s=r.r
if(s!=null)q.j(0,"reference",s)
return q}}
A.fq.prototype={
U(){return"StatementLoanKind."+this.b}}
A.d3.prototype={
U(){return"MailSenderKind."+this.b}}
A.iu.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iu&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)},
k(a){return"MailSender("+this.a+", "+this.b.b+")"}}
A.h5.prototype={}
A.B.prototype={
aG(a){var s=A.b(this.a,this.b,this.c).av(A.BC(a,0,0,0).a)
return new A.B(A.b_(s),A.b4(s),A.av(s))},
l(a,b){t.h.a(b)
return A.b(this.a,this.b,this.c).l(0,A.b(b.a,b.b,b.c))},
J(a,b){if(b==null)return!1
return b instanceof A.B&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)},
k(a){return""+this.a+"-"+B.b.aa(B.d.k(this.b),2,"0")+"-"+B.b.aa(B.d.k(this.c),2,"0")},
$iaY:1}
A.yP.prototype={
$1(a){return","},
$S:15}
A.yQ.prototype={
$1(a){return","},
$S:15}
A.nC.prototype={}
A.kc.prototype={
k(a){return"CurrencyMismatch: "+this.a+" and "+this.b+" cannot be combined"}}
A.q.prototype={
M(){var s=this.b
return A.T(["amount",this.a.by(0,A.ix(s)),"currency",s],t.N,t.X)},
ghl(){var s=this.a
return new A.P(s.a,s.b-A.ix(this.b)).aD().aE(0)},
C(a,b){return A.a3(this.a.C(0,this.fP(b).a),this.b)},
a8(a,b){var s=this.fP(b).a
return A.a3(this.a.C(0,new A.P(s.a.R(0),s.b)),this.b)},
fP(a){var s=a.b,r=this.b
if(s!==r)throw A.l(new A.kc(r,s))
return a},
J(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.q)if(b.b===this.b)s=b.a.l(0,this.a)===0
return s},
gP(a){return A.bx(this.b,this.a,B.t,B.t)},
k(a){var s=this.b
return s+" "+this.a.by(0,A.ix(s))}}
A.kB.prototype={
l_(a){var s,r
t._.a(a)
s=this.a
r=a.a
if(s.D(r))return!1
s.j(0,r,a)
return!0}}
A.ak.prototype={}
A.nb.prototype={}
A.k4.prototype={}
A.nc.prototype={}
A.A5.prototype={
$1(a){var s
t.W.a(a)
s=a.d
return(s==null||s===B.X)&&a.ch==null},
$S:1}
A.zX.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.zY.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.j){s=this.a.gK().h(0,a.c)
s=s==null?null:s.gaS()
s=s===!0}else s=!1
return s},
$S:1}
A.zZ.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.m){s=this.a.gK().h(0,a.c)
s=(s==null?null:s.d)===B.y}else s=!1
return s},
$S:1}
A.A_.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.A1.prototype={
$1(a){var s,r
A.n(a)
s=a==null?"":a
r=A.C("[^A-Z0-9]",!0,!1)
return A.a8(s.toUpperCase(),r,"")},
$S:32}
A.A0.prototype={
$1(a){var s,r,q
t.W.a(a)
s=this.a.gK().h(0,a.c).c
r=A.C("[^A-Z0-9]",!0,!1)
q=A.a8(s.toUpperCase(),r,"")
return q.length!==0&&this.b.N(0,new A.zV(q))},
$S:1}
A.zV.prototype={
$1(a){return B.b.v(A.d(a),this.a)},
$S:6}
A.A2.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.zW.prototype={
$1(a){t.W.a(a)
return this.a.gK().h(0,a.c).b},
$S:19}
A.A3.prototype={
$1(a){t.W.a(a)
return A.j(this.a.$1(a))+" on "+a.w.k(0)},
$S:19}
A.A4.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:45}
A.tY.prototype={}
A.iw.prototype={}
A.AY.prototype={
$2(a,b){var s=t.sH,r=s.a(a).a
s=s.a(b).a
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:47}
A.zk.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s!==B.o&&s!==B.x&&!this.a.aJ.w.D(a.a)},
$S:2}
A.zl.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.zn.prototype={
$2(a,b){var s=this.a.ce(this.b.a),r=s.$ti
return new A.o(s,r.i("k(i.E)").a(new A.zo(a,b)),r.i("o<i.E>")).gq(0)},
$S:102}
A.zo.prototype={
$1(a){var s,r,q,p,o
t.W.a(a)
s=!1
if(a.CW==null){r=a.w
q=this.a
p=r.a
o=r.b
r=r.c
if(A.b(p,o,r).l(0,A.b(q.a,q.b,q.c))>=0){s=this.b
s=A.b(p,o,r).l(0,A.b(s.a,s.b,s.c))<=0}}return s},
$S:1}
A.zm.prototype={
$2(a,b){var s=t.sH,r=s.a(a).a
s=s.a(b).a
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:47}
A.vl.prototype={
$1(a){var s=t.v.a(a).d,r=this.a.b
return A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))<0},
$S:9}
A.zf.prototype={
$2(a,b){var s=t.sH,r=s.a(a).a
s=s.a(b).a
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:47}
A.zi.prototype={
$1(a){return a.b*12+a.a-1},
$S:110}
A.zj.prototype={
$1(a){var s=B.d.u(a,12)
return new A.ht(B.d.T(a,12)+1,s)},
$S:111}
A.zg.prototype={
$2(a,b){var s=t.l1
s.a(a)
s.a(b)
s=this.a
return J.Bq(s.$1(a),s.$1(b))},
$S:112}
A.zh.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.a,r=s.length,q=b.a,p=b.b,o=b.c,n=a,m=0;m<s.length;s.length===r||(0,A.m)(s),++m){l=s[m]
k=l.a
j=l.b
l=n.a
i=n.b
h=n.c
if(A.b(k.a,k.b,k.c).l(0,A.b(l,i,h))>0)break
g=j.a
f=j.b
e=j.c
if(A.b(g,f,e).l(0,A.b(l,i,h))>=0){d=A.b(g,f,e).av(864e8)
n=new A.B(A.b_(d),A.b4(d),A.av(d))}if(A.b(n.a,n.b,n.c).l(0,A.b(q,p,o))>0)return!0}return!1},
$S:113}
A.dJ.prototype={}
A.zt.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.zu.prototype={
$2(a,b){var s=t.W,r=s.a(a).w
s=s.a(b).w
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:7}
A.zw.prototype={
$2(a,b){var s,r,q,p,o,n,m,l
t.C.a(a)
s=J.ar(a)
r=s.gq(a)
for(q=b.a,p=b.b,o=b.c,n=0;n<r;){m=B.d.am(n+r,1)
l=s.h(a,m).w
if(A.b(l.a,l.b,l.c).l(0,A.b(q,p,o))<0)n=m+1
else r=m}return n},
$S:92}
A.zv.prototype={
$2(a,b){var s,r,q,p=t.wg
p.a(a)
p.a(b)
s=B.b.l(a.a,b.a)
if(s!==0)return s
p=a.d
r=b.d
q=A.b(p.a,p.b,p.c).l(0,A.b(r.a,r.b,r.c))
if(q!==0)p=q
else{p=this.a
r=p.h(0,a)
r.toString
p=p.h(0,b)
p.toString
p=B.d.l(r,p)}return p},
$S:115}
A.tz.prototype={}
A.lg.prototype={}
A.tA.prototype={}
A.ya.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yb.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.yc.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:7}
A.yh.prototype={
$1(a){var s=a.a,r=this.a.h(0,s)
s=r==null?this.b.a.h(0,s):r
return s==null?A.a3($.M(),a.f.b):s},
$S:91}
A.yg.prototype={
$1(a){var s=a.f,r=s.a8(0,this.a.$1(a)),q=this.b.h(0,a.a)
return r.a8(0,q==null?A.a3($.M(),s.b):q)},
$S:91}
A.yd.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.ye.prototype={
$1(a){return t.W.a(a).f.J(0,this.a.f)},
$S:1}
A.yf.prototype={
$1(a){return t.W.a(a).w.k(0)},
$S:19}
A.tL.prototype={}
A.dQ.prototype={}
A.tM.prototype={}
A.bR.prototype={
U(){return"_Pair."+this.b}}
A.yj.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yk.prototype={
$0(){return A.c([],t.t)},
$S:117}
A.yl.prototype={
$2(a,b){var s,r=t.Ei
r.a(a)
r.a(b)
r=a.a
s=b.a
return r!==s?B.d.l(r,s):B.d.l(a.b,b.b)},
$S:118}
A.yt.prototype={
$1(a){var s,r=this.a,q=a
for(;;){if(!(r.h(0,q)!=null&&r.h(0,q)!==q))break
s=r.h(0,q)
s.toString
q=s}return q},
$S:11}
A.ym.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.yn.prototype={
$1(a){var s
t.ct.a(a)
if(a.c===B.cm){s=this.a
s=s.v(0,a.a.a)!==s.v(0,a.b.a)}else s=!1
return s},
$S:119}
A.yo.prototype={
$1(a){return!this.a.e_(t.W.a(a).a).ga4(0)},
$S:1}
A.yp.prototype={
$1(a){t.W.a(a)
return(a.CW!=null||a.y.d)&&!B.a.v(this.a,a)},
$S:1}
A.yq.prototype={
$1(a){return J.CZ(this.a,new A.yi(t.W.a(a),this.b))},
$S:1}
A.yi.prototype={
$1(a){var s=this.a.a,r=t.W.a(a).a
return s!==r&&this.b.dT.v(0,A.og(s,r))},
$S:1}
A.yr.prototype={
$2(a,b){var s,r=t.kG
r.a(a)
r.a(b)
s=B.b.l(a.a,b.a)
return s!==0?s:B.b.l(a.b,b.b)},
$S:120}
A.ys.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:45}
A.dS.prototype={}
A.AP.prototype={
$2(a,b){var s,r,q=t.v
q.a(a)
q.a(b)
q=a.c
s=b.c
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:26}
A.AQ.prototype={
$2(a,b){var s=t.sN
return B.b.l(s.a(a).a,s.a(b).a)},
$S:121}
A.u7.prototype={}
A.lD.prototype={}
A.u8.prototype={}
A.A7.prototype={
$1(a){return this.a.v(0,t.W.a(a).c)},
$S:1}
A.A8.prototype={
$1(a){var s=t.W.a(a).d
return s==null||s===B.L},
$S:1}
A.A9.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:7}
A.Aa.prototype={
$1(a){return t.W.a(a).e===B.j},
$S:1}
A.Ab.prototype={
$1(a){return t.W.a(a).e===B.m},
$S:1}
A.Af.prototype={
$1(a){return a.d===B.L},
$S:1}
A.Ad.prototype={
$2(a,b){var s,r,q
if(b.c===a.c||b.b!==a.b)return!1
s=a.w
r=b.w
q=B.d.u(A.b(r.a,r.b,r.c).ar(A.b(s.a,s.b,s.c)).a,864e8)
if(q<0||q>5)return!1
s=a.f
r=b.f
if(s.b===r.b)s=s.J(0,r)
else{s=this.b
s=s.$1(a)&&s.$1(b)}return s},
$S:122}
A.Ae.prototype={
$2(a,b){var s,r,q,p,o,n,m
t.C.a(a)
s=a.length
for(r=b.a,q=b.b,p=b.c,o=0;o<s;){n=o+s>>>1
if(!(n<a.length))return A.a(a,n)
m=a[n].w
if(A.b(m.a,m.b,m.c).l(0,A.b(r,q,p))<0)o=n+1
else s=n}return o},
$S:92}
A.A6.prototype={
$1(a){var s=a.c,r=this.a.h(0,s)
return r==null?s:r},
$S:19}
A.Ac.prototype={
$1(a){t.W.a(a)
return A.j(this.a.$1(a))+" on "+a.w.k(0)},
$S:19}
A.yu.prototype={
$1(a){t.b.a(a)
return a.gaS()||a.d===B.a5},
$S:2}
A.yv.prototype={
$1(a){t.W.a(a)
return a.ch==null&&a.ay==null},
$S:1}
A.l3.prototype={}
A.zO.prototype={
$1(a){t.w5.a(a)
return a.b===this.a&&a.f!=null},
$S:50}
A.zP.prototype={
$2(a,b){var s=t.w5,r=s.a(a).d
s=s.a(b).d
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:124}
A.zQ.prototype={
$1(a){return t.p_.a(a).a===this.a},
$S:125}
A.zR.prototype={
$1(a){var s,r
t.w5.a(a)
if(a.f===this.b+this.a.a){s=a.d
r=this.c
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>=0
s=r}else s=!1
return s},
$S:50}
A.zS.prototype={
$1(a){var s,r
t.w5.a(a)
if(a.f===this.b+this.a.a){s=a.d
r=this.c
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))<0
s=r}else s=!1
return s},
$S:50}
A.xH.prototype={
$1(a){return t.AT.a(a).b==="company"},
$S:126}
A.xI.prototype={
$1(a){return t.AT.a(a).a},
$S:127}
A.bM.prototype={
U(){return"DocumentKind."+this.b}}
A.bC.prototype={
U(){return"PolicyType."+this.b}}
A.d4.prototype={
U(){return"PremiumFrequency."+this.b}}
A.nx.prototype={
M(){return A.T(["name",this.a,"driveFileId",this.b,"localId",this.c],t.N,t.X)}}
A.cU.prototype={
gcj(){var s,r=this.e
if(r==null||r.length===0)r=this.b.c
else{s=this.b
r=s===B.bp?r:s.c+" ("+r+")"}return r},
M(){var s,r,q=this,p=q.d.k(0),o=q.w
o=o==null?null:o.k(0)
s=q.x
s=s==null?null:s.k(0)
r=q.y
r=r==null?null:r.M()
return A.T(["id",q.a,"kind",q.b.b,"personId",q.c,"addedOn",p,"label",q.e,"country",q.f,"last4",q.r,"issued",o,"expires",s,"file",r,"replaces",q.z,"fromProposal",q.Q],t.N,t.X)}}
A.em.prototype={
gh3(){var s=this.Q,r=this.CW
if(s==null)return null
return r==null||r.b!==s.b?s:s.a8(0,r)},
gcj(){var s=this.e,r=s==null||s.length===0,q=this.b
return r?this.c.c+", "+q:s+", "+q},
M(){var s,r=this,q=null,p=A.w(t.N,t.X)
p.j(0,"id",r.a)
p.j(0,"insurer",r.b)
p.j(0,"type",r.c.b)
p.j(0,"personId",r.d)
p.j(0,"plan",r.e)
p.j(0,"ownerId",r.f)
p.j(0,"last4",r.r)
s=r.w
p.j(0,"sumAssured",s==null?q:s.M())
p.j(0,"riders",r.x)
s=r.y
p.j(0,"starts",s==null?q:s.k(0))
s=r.z
p.j(0,"ends",s==null?q:s.k(0))
s=r.Q
p.j(0,"premium",s==null?q:s.M())
s=r.as
p.j(0,"frequency",s==null?q:s.b)
p.j(0,"paymentMethod",r.at)
s=r.ax
p.j(0,"nextDue",s==null?q:s.k(0))
s=r.ay
p.j(0,"file",s==null?q:s.M())
s=r.ch
if(s!=null)p.j(0,"accountId",s)
s=r.CW
s=s==null?q:s.M()
if(s!=null)p.j(0,"medisave",s)
return p}}
A.aJ.prototype={
U(){return"FieldType."+this.b}}
A.v.prototype={}
A.ae.prototype={
U(){return"LifeKind."+this.b},
lU(a){var s=this.d,r=A.L(s)
return A.aN(new A.o(s,r.i("k(1)").a(new A.oY(a)),r.i("o<1>")),t.k2)}}
A.oY.prototype={
$1(a){return t.k2.a(a).a===this.a},
$S:38}
A.b3.prototype={
aw(a){var s=this.c,r=t.f
if(r.b(s.h(0,a))){s=s.h(0,a)
s.toString
s=A.aO(r.a(s).G(0,t.N,t.X))}else s=null
return s},
eP(a){var s=this.c
if(typeof s.h(0,a)=="string"){s=s.h(0,a)
s.toString
s=A.dr(A.d(s))}else s=null
return s},
M(){return A.T(["kind",this.a.b,"id",this.b,"fields",this.c],t.N,t.X)}}
A.oW.prototype={
b2(a){var s,r=this.a.h(0,a)
if(r==null)r=null
else{s=A.p(r).i("N<2>")
r=A.D(new A.N(r,s),s.i("i.E"))}if(r==null)r=A.c([],t.Z)
B.a.E(r,new A.oX())
return r},
a6(a,b){var s=this.a.h(0,a)
return s==null?null:s.h(0,b)},
f2(a){var s=this.a,r=a.a,q=s.h(0,r)
if(q==null){q=A.w(t.N,t.u)
s.j(0,r,q)
s=q}else s=q
s.j(0,a.b,a)
return a},
lL(a,b){var s=this.a.h(0,a)
return s==null?null:s.Y(0,b)},
l5(a){var s,r
for(s=this.a,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>"));s.n();){r=s.d.h(0,a)
if(r!=null)return r}return null},
mW(a,b){var s,r,q,p,o,n,m,l,k,j=A.c([],t.Z)
for(s=this.a,s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>")),r=a.b;s.n();)for(q=s.d.gS(),q=q.gB(q);q.n();){p=q.gt()
for(o=p.a.d,n=o.length,m=p.c,l=0;l<n;++l){k=o[l]
if(k.c===B.F&&k.f===r&&J.a2(m.h(0,k.a),b))j.push(p)}}return j}}
A.oX.prototype={
$2(a,b){var s=t.u
return B.b.l(s.a(a).b,s.a(b).b)},
$S:23}
A.vm.prototype={
$1(a){A.d(a)
return a==="member"?"household member":a},
$S:11}
A.vn.prototype={
$1(a){return A.d(a).length>80},
$S:6}
A.vq.prototype={
$1(a){t.u.a(a)
return a.b!==this.a.b&&A.n(a.c.h(0,"creditMovementId"))===this.b},
$S:31}
A.vr.prototype={
$1(a){return this.a.c.h(0,A.d(a))!=null},
$S:6}
A.vP.prototype={
$1(a){return t.P.a(a).b===this.a.h(0,"kind")},
$S:39}
A.eu.prototype={
U(){return"PayslipMatchState."+this.b}}
A.fl.prototype={}
A.Ai.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.aA(a.c.h(0,"payDate"))
r.toString
s=A.aA(b.c.h(0,"payDate"))
s.toString
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:23}
A.Ao.prototype={
$1(a){var s,r,q,p,o,n,m=864e8
t.W.a(a)
s=!1
if(a.c===this.a)if(a.e===B.m)if(!this.b.v(0,a.a)){s=this.c
r=a.x
q=r.a
p=r.b
r=r.c
o=s.a
n=s.b
s=s.c
s=B.d.u(A.b(q,p,r).ar(A.b(o,n,s)).a,m)>=-3&&B.d.u(A.b(q,p,r).ar(A.b(o,n,s)).a,m)<=5}return s},
$S:1}
A.Aj.prototype={
$2(a,b){var s=864e8,r=t.W,q=this.a,p=r.a(a).x,o=q.a,n=q.b
q=q.c
r=r.a(b).x
return B.d.l(Math.abs(B.d.u(A.b(p.a,p.b,p.c).ar(A.b(o,n,q)).a,s)),Math.abs(B.d.u(A.b(r.a,r.b,r.c).ar(A.b(o,n,q)).a,s)))},
$S:7}
A.Ak.prototype={
$1(a){return t.W.a(a).f.J(0,this.a)},
$S:1}
A.Am.prototype={
$1(a){return A.d(a).length>1},
$S:6}
A.An.prototype={
$0(){return""},
$S:21}
A.Al.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(a.f.b===this.a.b){r=this.b
if(r.length!==0){s=a.z
if(s==null)s=""
r=B.b.v(s.toUpperCase(),r)
s=r}}return s},
$S:1}
A.dK.prototype={}
A.Aw.prototype={
$2(a,b){var s=t.tW,r=s.a(a).b
s=s.a(b).b
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:131}
A.cn.prototype={
U(){return"RetrievalAction."+this.b}}
A.ll.prototype={}
A.tv.prototype={
gbC(){var s,r,q,p,o=A.w(t.N,t.l9)
for(s=this.a,s=new A.ac(s,A.p(s).i("ac<1,2>")).gB(0),r=this.b;s.n();){q=s.d
p=q.a
if(!r.v(0,p))o.j(0,p,q.b)}return o},
gmK(){var s,r,q=A.a4(t.N)
for(s=this.gbC(),s=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>"));s.n();){r=s.d.z
if(r!=null)q.m(0,r)}return q},
gt(){var s=this.gmK(),r=this.gbC(),q=A.p(r).i("N<2>"),p=q.i("o<i.E>")
r=A.D(new A.o(new A.N(r,q),q.i("k(i.E)").a(new A.tw(s)),p),p.i("i.E"))
B.a.E(r,new A.tx())
return r}}
A.tw.prototype={
$1(a){return!this.a.v(0,t.l9.a(a).a)},
$S:86}
A.tx.prototype={
$2(a,b){var s,r=t.l9
r.a(a)
r.a(b)
s=B.d.l(a.b.a,b.b.a)
return s!==0?s:B.b.l(a.c,b.c)},
$S:133}
A.vQ.prototype={
$1(a){t.l9.a(a)
return a.z===this.b&&a.a!==this.a.a.a},
$S:86}
A.vR.prototype={
$1(a){return t.hn.a(a).b===this.a.h(0,"action")},
$S:134}
A.vS.prototype={
$1(a){return!B.m7.v(0,A.d(a))},
$S:6}
A.z_.prototype={
$2(a,b){var s=t.ok
return B.b.l(s.a(a).b,s.a(b).b)},
$S:66}
A.d9.prototype={}
A.Bb.prototype={
$1(a){t.b.a(a)
return a.d===B.o&&a.as!=null&&a.CW==null&&A.Fl(this.a,a.a,this.b)},
$S:2}
A.Bc.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.Bd.prototype={
$2(a,b){var s=t.tB,r=s.a(a).d
s=s.a(b).d
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:135}
A.cg.prototype={
gdi(){return this.z+this.Q+this.as}}
A.xK.prototype={
$2(a,b){var s,r,q=t.eV
q.a(a)
q.a(b)
q=a.f
s=b.f
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.d.l(a.w,b.w)},
$S:136}
A.xL.prototype={
$2(a,b){return A.R(a)+t.eV.a(b).z},
$S:25}
A.y0.prototype={
$2(a,b){return A.R(a)+t.eV.a(b).Q},
$S:25}
A.y1.prototype={
$2(a,b){return A.R(a)+t.eV.a(b).as},
$S:25}
A.y2.prototype={
$2(a,b){return A.R(a)+t.eV.a(b).at},
$S:25}
A.yF.prototype={
$1(a){return B.b.aa(""+B.d.T(a,100),2,"0")},
$S:30}
A.yD.prototype={
$1(a){return B.b.aa(""+this.a,a.dn(1).length,"0")},
$S:15}
A.yE.prototype={
$1(a){var s=a.h(0,0)
s.toString
return A.hD(this.a,s)},
$S:15}
A.dC.prototype={
M(){var s=this
return A.T(["description",s.a,"sac",s.b,"taxable",s.c,"cgst",s.d,"sgst",s.e],t.N,t.X)}}
A.tE.prototype={
gf8(){return B.a.a5(this.x,0,new A.tH(),t.S)},
geL(){return B.a.a5(this.x,0,new A.tF(),t.S)},
gea(){return B.a.a5(this.x,0,new A.tG(),t.S)},
gdi(){return this.gf8()+this.geL()+this.gea()},
f9(){var s,r,q,p,o,n=this,m=t.N,l=t.X,k=A.w(m,l)
k.j(0,"tenancyId",n.a)
k.j(0,"propertyId",n.b)
k.j(0,"month",""+n.c+"-"+B.b.aa(B.d.k(n.d),2,"0"))
k.j(0,"date",n.e.k(0))
k.j(0,"seriesId",n.f)
k.j(0,"seq",n.r)
k.j(0,"number",n.w)
s=A.c([],t.bk)
for(r=n.x,q=r.length,p=0;p<r.length;r.length===q||(0,A.m)(r),++p){o=r[p]
s.push(A.T(["description",o.a,"sac",o.b,"taxable",o.c,"cgst",o.d,"sgst",o.e],m,l))}k.j(0,"lines",s)
k.j(0,"tdsPercent",n.y.k(0))
k.j(0,"tds",n.z)
k.j(0,"tenantName",n.Q)
k.j(0,"legalName",n.as)
k.j(0,"address",n.at)
k.j(0,"placeOfSupply",n.ax)
k.j(0,"layout",n.ay)
k.j(0,"issuerName",n.ch)
k.j(0,"issuerAddress",n.CW)
k.j(0,"accountId",n.cx)
k.j(0,"bankName",n.cy)
k.j(0,"accountLast4",n.db)
k.j(0,"ifsc",n.dx)
m=n.dy
if(m!=null)k.j(0,"accountNote",m)
return k}}
A.tH.prototype={
$2(a,b){return A.R(a)+t.mp.a(b).c},
$S:29}
A.tF.prototype={
$2(a,b){return A.R(a)+t.mp.a(b).d},
$S:29}
A.tG.prototype={
$2(a,b){return A.R(a)+t.mp.a(b).e},
$S:29}
A.zN.prototype={
$1(a){return this.a?""+a.a:A.hD(A.mD(a),"{fy}")},
$S:140}
A.zL.prototype={
$1(a){var s=A.aG(t.u.a(a).c.h(0,"seq"))
s.toString
return s},
$S:141}
A.zM.prototype={
$2(a,b){A.R(a)
A.R(b)
return a>b?a:b},
$S:51}
A.y4.prototype={
$2(a,b){return A.R(a)+t.mp.a(b).c},
$S:29}
A.iQ.prototype={
M(){return A.c([this.a,this.b,this.c],t.s)},
J(a,b){if(b==null)return!1
return b instanceof A.iQ&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)},
k(a){return this.a+" | "+this.b+" | "+this.c}}
A.fd.prototype={}
A.p4.prototype={
gff(){var s=this
return s.a.a8(0,s.b).a8(0,s.c).a8(0,s.d).a8(0,s.e)}}
A.zq.prototype={
$1(a){var s=this.a.e.h(0,a)
return s==null?this.b:s},
$S:142}
A.zs.prototype={
$1(a){this.a.h(0,a)
return this.b},
$S:143}
A.zr.prototype={
$2(a,b){var s=t.B
return s.a(a).C(0,s.a(b))},
$S:24}
A.ho.prototype={
U(){return"WorthSource."+this.b}}
A.by.prototype={
gcU(){var s=this.b
return s.a.a.ga7(0)<0?A.a3($.M(),s.b).a8(0,s):s}}
A.hn.prototype={
gdL(){return B.a.a5(this.b,A.a3($.M(),this.a),new A.uh(),t.B)},
gdP(){return B.a.a5(this.c,A.a3($.M(),this.a),new A.ui(),t.B)}}
A.uh.prototype={
$2(a,b){return t.B.a(a).C(0,t.E.a(b).gcU())},
$S:78}
A.ui.prototype={
$2(a,b){return t.B.a(a).C(0,t.E.a(b).gcU())},
$S:78}
A.l0.prototype={}
A.zE.prototype={
$1(a){var s,r
t.b.a(a)
if(a.r===this.a){s=a.w
r=this.b
r=A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:2}
A.zF.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.zG.prototype={
$1(a){var s,r=new A.zH(),q=this.a,p=A.L(q),o=p.i("o<1>"),n=new A.o(q,p.i("k(1)").a(new A.zI(a)),o)
p=o.i("k(i.E)")
o=o.i("o<i.E>")
q=o.i("i.E")
s=A.D(new A.o(n,p.a(new A.zJ()),o),q)
B.a.E(s,r)
q=A.D(new A.o(n,p.a(new A.zK()),o),q)
B.a.E(q,r)
return new A.hn(a,s,q)},
$S:146}
A.zH.prototype={
$2(a,b){var s,r=t.E
r.a(a)
r.a(b)
s=b.gcU().a.l(0,a.gcU().a)
return s!==0?s:B.b.l(a.a,b.a)},
$S:147}
A.zI.prototype={
$1(a){return t.E.a(a).b.b===this.a},
$S:41}
A.zJ.prototype={
$1(a){return t.E.a(a).b.a.a.ga7(0)>=0},
$S:41}
A.zK.prototype={
$1(a){return t.E.a(a).b.a.a.ga7(0)<0},
$S:41}
A.cI.prototype={
U(){return"ValueKind."+this.b}}
A.eD.prototype={}
A.ig.prototype={}
A.AZ.prototype={
$1(a){return this.a.b.a.h(0,A.d(a))!=null},
$S:6}
A.Bj.prototype={
$1(a){var s,r,q
t.R.a(a)
s=!1
if(!a.f){r=this.a
if(a.b===r.a){s=a.d
q=r.c
if(A.G7(s,q))s=s!==B.G||q===B.m
else s=!1
s=s&&this.b.b5(0,new A.Bi(a,r))}}return s},
$S:17}
A.Bi.prototype={
$1(a){var s=this.b
return this.a.eX(s.b,A.d(a),s.a,s.c)},
$S:6}
A.Bk.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).a,s.a(b).a)},
$S:42}
A.Bl.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===B.a.ga0(s).d&&a.e==B.a.ga0(s).e},
$S:17}
A.cC.prototype={}
A.B8.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.B9.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.x
s=b.x
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:7}
A.Ba.prototype={
$2(a,b){return t.B.a(a).C(0,t.W.a(b).f)},
$S:64}
A.xq.prototype={
$3(a,b,c){t.J.a(c)
return new A.ak(a,this.b,this.a.a++,b,c,this.c)},
$S:150}
A.aQ.prototype={
U(){return"ReviewReason."+this.b}}
A.W.prototype={
k(a){return"ReviewItem("+this.b.k(0)+", "+this.c+": "+this.d+")"}}
A.AG.prototype={
$1(a){var s=this.a.gK().h(0,a)
s=s==null?null:s.b
return s==null?a:s},
$S:11}
A.AE.prototype={
$1(a){t.k.a(a)
return this.a.aK(a.a,new A.AF(a))},
$S:151}
A.AF.prototype={
$0(){return this.a},
$S:152}
A.AH.prototype={
$1(a){return t.b.a(a).b===this.a.f},
$S:2}
A.AI.prototype={
$1(a){return!this.a.v(0,t.k.a(a).a)},
$S:36}
A.AJ.prototype={
$1(a){var s,r=t.k.a(a).a
if(!A.DW(this.a.R8,t.N).a.v(0,r)){r=this.b.h(0,r)
if(r==null)r=null
else{s=this.c
s=A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))>0
r=s}r=r!==!0}else r=!1
return r},
$S:36}
A.AK.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:45}
A.bb.prototype={
eX(a,b,c,d){var s,r,q=this
if(c!==q.b)return!1
s=q.r
if(s!=null&&b!==s)return!1
s=q.w
if(s!=null&&d!==s)return!1
s=q.c
if($.tJ.a>2000)$.tJ.ap(0)
r=$.tJ.h(0,s)
if(r==null){r=A.C("\\s+",!0,!1)
r=A.C("(?<![A-Z0-9])"+A.hI(B.b.H(A.a8(s.toUpperCase(),r," ")))+"(?![A-Z0-9])",!0,!1)
$.tJ.j(0,s,r)
s=r}else s=r
return s.b.test(a)}}
A.cE.prototype={}
A.h8.prototype={}
A.iJ.prototype={}
A.hd.prototype={}
A.zc.prototype={
$1(a){var s=this
t.R.a(a)
return a.f&&a.eX(s.a,s.c,s.b,s.d)},
$S:17}
A.zd.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).a,s.a(b).a)},
$S:42}
A.ze.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===s.d&&a.e==s.e&&a.x==s.x&&a.y==s.y},
$S:17}
A.AM.prototype={
$1(a){var s,r,q=a.z
if(q==null)return new A.h8()
q=q.toUpperCase()
s=A.C("\\s+",!0,!1)
r=B.b.H(A.a8(q,s," "))
return this.a.aK(new A.eI([r,a.b,a.c,a.e]),new A.AN(r,this.b,a))},
$S:153}
A.AN.prototype={
$0(){var s=this.c
return A.Cz(this.a,this.b,s.c,s.b,s.e)},
$S:154}
A.AL.prototype={
$1(a){t.R.a(a)
return a.a+" ("+A.j(a.e)+")"},
$S:155}
A.AR.prototype={
$1(a){return B.a.N(t.a.a(a),new A.AS(this.a))},
$S:72}
A.AS.prototype={
$1(a){var s=A.C("(?:^| )"+A.hI(A.d(a))+"(?: |$)",!0,!1)
return s.b.test(this.a)},
$S:6}
A.mW.prototype={}
A.mX.prototype={
$1(a){var s=this.a.h(0,a)
if(!A.cL(s)||s<1)throw A.l(A.y(a+" must be a whole number of at least 1",s,null))
return s},
$S:157}
A.lp.prototype={}
A.lq.prototype={}
A.tQ.prototype={}
A.c6.prototype={
U(){return"SmsSenderKind."+this.b}}
A.co.prototype={
mR(){var s,r=A.w(t.N,t.X)
r.j(0,"id",this.a)
r.j(0,"kind",this.b.b)
s=this.c
if(s!=null)r.j(0,"institution",s)
return r},
J(a,b){if(b==null)return!1
return b instanceof A.co&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)}}
A.tU.prototype={}
A.tV.prototype={
$2(a,b){var s=t.c5
return B.b.l(s.a(a).a,s.a(b).a)},
$S:71}
A.l4.prototype={
M(){var s=this
return A.T(["lineId",s.a,"field",s.b,"ocr",s.c,"owner",s.d],t.N,t.X)}}
A.cZ.prototype={}
A.tX.prototype={}
A.dV.prototype={
hc(a){var s=this
return new A.dV(s.a,a,s.c,s.d,s.e,s.f,s.r)}}
A.AU.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.AV.prototype={
$2(a,b){var s,r,q=t.uB
q.a(a)
q.a(b)
q=a.b.w
s=b.b.w
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.d.l(a.a,b.a)},
$S:70}
A.AW.prototype={
hP(a,b,c){var s=this
return function(){var r=a,q=b,p=c
var o=0,n=2,m=[],l,k,j,i,h,g,f,e,d,a0,a1
return function $async$$3(a2,a3,a4){if(a3===1){m.push(a4)
o=n}for(;;)A:switch(o){case 0:a1=s.a.h(0,r)
if(a1==null){o=1
break}l=a1.length
for(k=q.a,j=q.b,i=q.c,h=0;h<l;){g=h+l>>>1
if(!(g<a1.length)){A.a(a1,g)
o=1
break A}f=a1[g].b.w
if(A.b(f.a,f.b,f.c).l(0,A.b(k,j,i))<0)h=g+1
else l=g}k=A.c([],t.qM)
j=p.a
i=p.b
f=p.c
e=h
for(;;){d=a1.length
if(e<d){if(!(e>=0)){A.a(a1,e)
o=1
break A}d=a1[e].b.w
d=A.b(d.a,d.b,d.c).l(0,A.b(j,i,f))<=0}else d=!1
if(!d)break
if(!(e>=0&&e<a1.length)){A.a(a1,e)
o=1
break A}k.push(a1[e]);++e}B.a.E(k,new A.AX())
j=k.length,a0=0
case 3:if(!(a0<k.length)){o=5
break}o=6
return a2.b=k[a0].b,1
case 6:case 4:k.length===j||(0,A.m)(k),++a0
o=3
break
case 5:case 1:return 0
case 2:return a2.c=m.at(-1),3}}}},
$3(a,b,c){return new A.dd(this.hP(a,b,c),t.wE)},
$S:160}
A.AX.prototype={
$2(a,b){var s=t.uB
return B.d.l(s.a(a).a,s.a(b).a)},
$S:70}
A.l2.prototype={
k(a){return"NothingToJoin"}}
A.cS.prototype={
k(a){return"DeviceRemoved"}}
A.il.prototype={
bx(){var s=0,r=A.J(t.J),q,p=this,o,n
var $async$bx=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=3
return A.t(p.b.bx(),$async$bx)
case 3:o=b
n=t.D.i("bf.S").a(p.c)
q=A.T(["deviceId",p.a,"keys",o,"primary",B.K.gaI().O(n),"name",p.d,"kind",p.e],t.N,t.X)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bx,r)}}
A.fs.prototype={
U(){return"SyncAccess."+this.b}}
A.u0.prototype={
bD(){var s=0,r=A.J(t.aT),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bD=A.K(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)A:switch(s){case 0:b1=n.a
s=3
return A.t(b1.bj(),$async$bD)
case 3:b2=b7
b3=A.c([],t.wt)
for(g=J.S(b2),f=n.b,e=f.a;g.n();){d=g.gt()
c=$.Gx().aj(d)
if(c!=null){b=c.b
if(1>=b.length){q=A.a(b,1)
s=1
break A}b=b[1]===e}else b=!1
if(b){b=c.b
if(2>=b.length){q=A.a(b,2)
s=1
break A}b=b[2]
b.toString
B.a.m(b3,new A.r(A.Z(b,null,null),d))}}B.a.E(b3,new A.u2())
g=b3.length,d=t.j,b=t.mE,a=n.c,a0=t.L,a1=t.f,a2=t.N,a3=t.X,a4=f.c,f=f.b.a,a5=0
case 4:if(!(a5<b3.length)){s=6
break}a6=b3[a5]
m=null
l=null
m=a6.a
l=a6.b
p=8
b5=A
s=11
return A.t(b1.bZ(l),$async$bD)
case 11:k=b5.CE(b7,B.mp)
if(!J.a2(k.a.h(0,"deviceId"),e)||!J.a2(k.a.h(0,"epoch"),m)){s=5
break}s=12
return A.t(k.cS(a4),$async$bD)
case 12:a6=k.a.h(0,"ephemeral")
a6.toString
s=13
return A.t(A.mF(f,B.B.O(A.d(a6))),$async$bD)
case 13:j=b7
b5=a0
s=14
return A.t(k.cQ(j),$async$bD)
case 14:a6=b5.a(b7)
i=a1.a(B.z.bh(new A.eK(!1).ct(a6,0,null,!0),null)).G(0,a2,a3)
if(!J.a2(J.as(i,"deviceId"),e)){s=5
break}a6=J.as(i,"epochs")
a6.toString
a6=J.dg(d.a(a6),b)
a7=a6.$ti
a6=new A.ad(a6,a6.gq(0),a7.i("ad<Q.E>"))
a7=a7.i("Q.E")
while(a6.n()){a8=a6.d
h=a8==null?a7.a(a8):a8
a8=J.as(h,"epoch")
a8.toString
A.R(a8)
a9=J.as(h,"key")
a9.toString
a.j(0,a8,new A.bp(new A.bs(B.B.O(A.d(a9)),!1),null))}q=B.cg
s=1
break
p=2
s=10
break
case 8:p=7
b4=o.pop()
if(A.aw(b4) instanceof A.hS){s=5
break}else throw b4
s=10
break
case 7:s=2
break
case 10:case 5:b3.length===g||(0,A.m)(b3),++a5
s=4
break
case 6:q=a.a===0?B.e8:B.e9
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bD,r)},
gjN(){var s=this.c
return new A.au(s,A.p(s).i("au<1>")).e2(0,new A.u1())},
be(){var s=0,r=A.J(t.tU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$be=A.K(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:c1=n.c
s=c1.a===0?3:4
break
case 3:case 5:s=10
return A.t(n.bD(),$async$be)
case 10:switch(c5){case B.e8:s=7
break
case B.e9:s=8
break
case B.cg:s=9
break
default:s=6
break}break
case 7:q=B.dD
s=1
break
case 8:throw A.l(new A.cS())
case 9:s=6
break
case 6:case 4:h=n.a
s=11
return A.t(h.bj(),$async$be)
case 11:g=c5
f=J.mQ(g,$.Gy().ghd())
e=A.D(f,f.$ti.i("i.E"))
B.a.E(e,new A.u3())
m=null
f=e.length,d=t.L,c=t.f,b=t.N,a=t.X,a0=n.b.c,a1=0
case 12:if(!(a1<e.length)){s=14
break}l=e[a1]
p=16
c3=A
s=19
return A.t(h.bZ(l),$async$be)
case 19:k=c3.CE(c5,B.mq)
s=20
return A.t(k.cS(a0),$async$be)
case 20:j=A.aG(k.a.h(0,"epoch"))
i=c1.h(0,j)
s=i==null?21:22
break
case 21:s=23
return A.t(n.bD(),$async$be)
case 23:if(c5!==B.cg){a2=new A.cS()
throw A.l(a2)}a3=c1.h(0,j)
if(a3==null)a3=A.h(new A.cS())
i=a3
case 22:c3=d
s=24
return A.t(k.cQ(i),$async$be)
case 24:a2=c3.a(c5)
m=c.a(B.z.bh(new A.eK(!1).ct(a2,0,null,!0),null)).G(0,b,a)
s=14
break
p=2
s=18
break
case 16:p=15
c2=o.pop()
if(A.aw(c2) instanceof A.hS){s=13
break}else throw c2
s=18
break
case 15:s=2
break
case 18:case 13:e.length===f||(0,A.m)(e),++a1
s=12
break
case 14:if(m==null){q=A.aE(n.e,t._)
s=1
break}m.h(0,"primary")
f=m.h(0,"generation")
f.toString
A.R(f)
if(f!==n.d){B.a.ap(n.e)
n.d=f}a2=n.e,f=A.LO(g,f,a2.length),a5=f.length,a6=t.j,a7=t.mE,a8=t.Y,a1=0
case 25:if(!(a1<f.length)){s=27
break}a9=f[a1]
c3=A
s=28
return A.t(h.bZ(a9.a),$async$be)
case 28:k=c3.CE(c5,B.mr)
s=29
return A.t(k.cS(a0),$async$be)
case 29:b0=k.a
if(!J.a2(b0.h(0,"generation"),a9.b)||!J.a2(b0.h(0,"first"),a9.c)||!J.a2(b0.h(0,"last"),a9.d))throw A.l(A.eX("a segment is not what its name says"))
i=c1.h(0,b0.h(0,"epoch"))
c3=d
s=30
return A.t(k.cQ(i==null?A.h(new A.cS()):i),$async$be)
case 30:b1=c3.a(c5)
b2=c.a(B.z.bh(new A.eK(!1).ct(b1,0,null,!0),null)).G(0,b,a)
b1=A.c([],a8)
b3=b2.h(0,"ops")
b3.toString
b3=J.dg(a6.a(b3),a7)
b4=b3.$ti
b3=new A.ad(b3,b3.gq(0),b4.i("ad<Q.E>"))
b4=b4.i("Q.E")
while(b3.n()){b5=b3.d
b5=(b5==null?b4.a(b5):b5).G(0,b,a)
b6=b5.h(0,"key")
b6.toString
A.d(b6)
b7=b5.h(0,"deviceId")
b7.toString
A.d(b7)
b8=b5.h(0,"clock")
b8.toString
A.R(b8)
b9=b5.h(0,"type")
b9.toString
A.d(b9)
c0=b5.h(0,"payload")
c0.toString
c0=c.a(c0).G(0,b,a)
b5=b5.h(0,"createdAtUtc")
b5.toString
b1.push(new A.ak(b6,b7,b8,b9,c0,A.c_(A.d(b5)).F()))}if(b1.length!==a9.d-a9.c+1)throw A.l(A.eX("a segment is short"))
B.a.a1(a2,b1)
case 26:f.length===a5||(0,A.m)(f),++a1
s=25
break
case 27:q=A.aE(a2,t._)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$be,r)},
hp(){var s,r,q,p,o=A.D(this.e,t._)
B.a.a1(o,this.f)
s=o.length
r=0
q=0
for(;q<s;++q){p=o[q].c
if(p>r)r=p}return r+1},
c4(a){return this.i5(t.tU.a(a))},
i5(a0){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c4=A.K(function(a1,a2){if(a1===1)return A.G(a2,r)
for(;;)switch(s){case 0:c=p.c
if(c.a===0)throw A.l(new A.cS())
b=o=p.a
a=J
s=3
return A.t(o.bj(),$async$c4)
case 3:b,n=a.S(a2),m=p.b,l=m.a
case 4:if(!n.n()){s=5
break}k=n.gt()
j=$.GB().aj(k)
k=!1
if(j!=null){i=j.b
h=i.length
if(1>=h){q=A.a(i,1)
s=1
break}if(i[1]===l){if(2>=h){q=A.a(i,2)
s=1
break}k=i[2]
k.toString
k=A.Z(k,null,null)>p.r}}if(k){k=j.b
if(2>=k.length){q=A.a(k,2)
s=1
break}k=k[2]
k.toString
p.r=A.Z(k,null,null)}s=4
break
case 5:n=++p.r
g=p.gjN()
k=B.b.aa(B.d.k(n),10,"0")
i=t.N
h=t.X
n=A.T(["formatVersion",1,"deviceId",l,"n",n,"epoch",g],i,h)
f=A.c([],t.bk)
for(e=J.S(a0);e.n();){d=e.gt()
f.push(A.T(["key",d.a,"deviceId",d.b,"clock",d.c,"type",d.d,"payload",d.e,"createdAtUtc",d.f.F().dg()],i,h))}i=B.E.O(B.z.bc(A.T(["ops",f],i,t.vG),null))
c=c.h(0,g)
c.toString
b=o
a="o-"+l+"-"+k+".sqo"
s=7
return A.t(A.hM(n,c,B.ms,i,m.b.b),$async$c4)
case 7:s=6
return A.t(b.c0(a,a2),$async$c4)
case 6:B.a.a1(p.f,a0)
case 1:return A.H(q,r)}})
return A.I($async$c4,r)},
cp(a,b,c,d){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$cp=A.K(function(e,a0){if(e===1)return A.G(a0,r)
for(;;)switch(s){case 0:if(p.c.a===0)throw A.l(new A.cS())
g=o=p.a
f=J
s=3
return A.t(o.bj(),$async$cp)
case 3:g,n=f.S(a0),m=p.b,l=m.a
case 4:if(!n.n()){s=5
break}k=n.gt()
j=$.Gz().aj(k)
k=!1
if(j!=null){i=j.b
h=i.length
if(1>=h){q=A.a(i,1)
s=1
break}if(i[1]===l){if(2>=h){q=A.a(i,2)
s=1
break}k=i[2]
k.toString
k=A.Z(k,null,null)>p.w}}if(k){k=j.b
if(2>=k.length){q=A.a(k,2)
s=1
break}k=k[2]
k.toString
p.w=A.Z(k,null,null)}s=4
break
case 5:n=++p.w
g=o
f="x-"+l+"-"+B.b.aa(B.d.k(n),10,"0")+".sqx"
s=7
return A.t(A.hJ(a,b,l,n,c,m.b.b,d),$async$cp)
case 7:s=6
return A.t(g.c0(f,a0),$async$cp)
case 6:case 1:return A.H(q,r)}})
return A.I($async$cp,r)},
gcT(){var s,r,q,p,o,n=A.a4(t.N)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q)n.m(0,s[q].a)
s=A.c([],t.Y)
for(r=this.f,p=r.length,q=0;q<r.length;r.length===p||(0,A.m)(r),++q){o=r[q]
if(!n.v(0,o.a))s.push(o)}return s},
cI(){var s,r,q,p,o
for(s=this.c,r=new A.a1(s,s.r,s.e,A.p(s).i("a1<2>"));r.n();){q=r.d
p=q.b
o=p.a
if(o!=null){p.a=null
if(p.b)A.CG(o)}q.ec()}s.ap(0)
B.a.ap(this.e)
B.a.ap(this.f)}}
A.u2.prototype={
$2(a,b){var s=t.jr
s.a(a)
return B.d.l(s.a(b).a,a.a)},
$S:161}
A.u1.prototype={
$2(a,b){A.R(a)
A.R(b)
return a>b?a:b},
$S:51}
A.u3.prototype={
$2(a,b){A.d(a)
return B.b.l(A.d(b),a)},
$S:37}
A.dW.prototype={
U(){return"SyncFileKind."+this.b}}
A.hS.prototype={
k(a){return"BadSyncFile: "+this.a}}
A.u4.prototype={
cS(a){return this.mZ(t.L.a(a))},
mZ(a){var s=0,r=A.J(t.H),q=this,p,o
var $async$cS=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=$.CR()
o=A.D(q.b,t.S)
B.a.a1(o,q.d)
s=2
return A.t(p.bJ(o,new A.fo(q.c,new A.bD(a,B.T))),$async$cS)
case 2:if(!c)throw A.l(A.eX("the signature does not match"))
return A.H(null,r)}})
return A.I($async$cS,r)},
cQ(a){return this.mx(a)},
mx(a){var s=0,r=A.J(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cQ=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:h=n.d
if(h.length<28)throw A.l(A.eX("the file is incomplete"))
p=4
l=$.CQ()
k=A.fu(h,28,null)
j=A.fu(h,0,12)
s=7
return A.t(l.br(new A.ey(k,new A.d1(A.fu(h,12,28)),j),n.b,a),$async$cQ)
case 7:m=c
h=t.p.b(m)?m:new Uint8Array(A.aH(m))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
if(A.aw(g) instanceof A.iT)throw A.l(A.eX("the file does not open with this key or was changed"))
else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cQ,r)}}
A.i6.prototype={
bx(){var s=0,r=A.J(t.J),q,p=this,o,n,m
var $async$bx=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:o=t.D.i("bf.S")
m=o
s=3
return A.t(p.a.dS(),$async$bx)
case 3:n=m.a(b)
n=B.K.gaI().O(n)
m=o
s=4
return A.t(p.b.dS(),$async$bx)
case 4:o=m.a(b)
q=A.T(["x25519",n,"ed25519",B.K.gaI().O(o)],t.N,t.X)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bx,r)}}
A.iq.prototype={
M(){var s=this,r=t.D.i("bf.S"),q=r.a(s.d)
q=B.K.gaI().O(q)
r=r.a(s.e)
return A.T(["id",s.a,"name",s.b,"kind",s.c,"x25519",q,"ed25519",B.K.gaI().O(r),"approvedAtUtc",s.f.F().dg()],t.N,t.X)}}
A.lz.prototype={}
A.u5.prototype={
eJ(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="deviceId",g=a.e
switch(a.d){case"sync.switch":s=g.h(0,"on")
s.toString
A.cK(s)
return i
case"sync.epoch":s=g.h(0,"generation")
s.toString
A.R(s)
r=g.h(0,"epoch")
r.toString
A.R(r)
q=j.b
p=q.length===0?i:B.a.gau(q)
o=p==null
n=o?i:p.b
if(r!==(n==null?0:n)+1){s=o?i:p.b
if(s==null)s=0
return"epoch "+r+" does not follow "+s}if(!o&&s<p.a)return"generation "+s+" is older"
o=g.h(0,"salt")
o.toString
B.B.O(A.d(o))
B.a.m(q,new A.lz(s,r));++j.e
return i
case"sync.primary":s=g.h(0,h)
s.toString
A.d(s)
m=j.c.h(0,s)
if(m==null||m.r!=null||m.c!=="phone")return"no approved phone "+s
if(s===j.f)return"phone "+s+" is the primary already"
j.f=s;++j.r;++j.e
return i
case"sync.device":s=g.h(0,h)
s.toString
A.d(s)
r=g.h(0,"atUtc")
r.toString
l=A.c_(A.d(r)).F()
switch(g.h(0,"action")){case"approve":r=j.c
if(r.D(s)||j.d.v(0,s))return"device "+s+" was already answered"
q=g.h(0,"name")
q.toString
A.d(q)
o=g.h(0,"kind")
o.toString
A.d(o)
n=g.h(0,"x25519")
n.toString
n=B.B.O(A.d(n))
k=g.h(0,"ed25519")
k.toString
r.j(0,s,new A.iq(s,q,o,n,B.B.O(A.d(k)),l,i))
break
case"refuse":if(j.c.D(s))return"device "+s+" is approved; remove it instead"
j.d.m(0,s)
break
case"remove":r=j.c
m=r.h(0,s)
if(m==null||m.r!=null)return"no approved device "+s
r.j(0,s,new A.iq(m.a,m.b,m.c,m.d,m.e,m.f,l))
break
default:return"unknown device action "+A.j(g.h(0,"action"))}++j.e
return i}return"not a sync operation"}}
A.iU.prototype={}
A.hW.prototype={}
A.zx.prototype={
$1(a){return A.Ng(this.a,t.b.a(a),this.b,this.c)},
$S:2}
A.Az.prototype={
$0(){var s,r=this,q=r.a,p=A.FK(q.a,q.b,r.b),o=p.a,n=p.b
q=r.c
s=r.d
return new A.eI([o,n,A.FL(q,s,n,o),A.Fh(q,s,r.e,n,o)])},
$S:162}
A.AA.prototype={
$1(a){return t.nr.a(a).a[2]},
$S:163}
A.AB.prototype={
$1(a){return t.hf.a(a).a[0]},
$S:164}
A.AC.prototype={
$2(a,b){return t.B.a(a).C(0,t.hf.a(b).a[2])},
$S:165}
A.bB.prototype={}
A.n4.prototype={
eE(a){t.aD.a(a)
return B.a.a5(this.a,A.a3($.M(),this.b),new A.n5(a),t.B)},
gl2(){return this.eE(new A.n6())},
gi1(){return this.eE(new A.n9())},
gmA(){var s=this.a
return s.length===0||B.a.ga0(s).d==null?null:this.eE(new A.n8())},
ghq(){var s=this.a,r=A.L(s)
return new A.o(s,r.i("k(1)").a(new A.n7()),r.i("o<1>")).gq(0)}}
A.n5.prototype={
$2(a,b){return t.B.a(a).C(0,this.a.$1(t.ta.a(b)))},
$S:166}
A.n6.prototype={
$1(a){return a.b},
$S:43}
A.n9.prototype={
$1(a){return a.c},
$S:43}
A.n8.prototype={
$1(a){var s=a.d
s.toString
return s},
$S:43}
A.n7.prototype={
$1(a){t.ta.a(a)
return a.c.a.l(0,a.b.a)>0},
$S:168}
A.w2.prototype={
$2(a,b){var s=t.ta
s.a(a)
s.a(b)
s=this.a
return B.b.l(A.EX(s,a.a),A.EX(s,b.a))},
$S:169}
A.dz.prototype={
gdf(){var s=this.b
return s==null?null:this.a.c.a8(0,s)},
gmB(){return this.gdf()!=null&&this.gdf().a.l(0,$.M())<=0},
ghs(){var s,r,q=this
if(q.gdf()==null||q.gmB()||q.d===0)s=null
else{s=q.gdf().a
r=A.aL(q.d)
r=A.a3(A.DQ(s.gbR().dl(0,new A.P(r,0).gbR()),10).cz(2,B.ec),q.gdf().b)
s=r}return s}}
A.yO.prototype={
$2(a,b){var s=t.AK,r=s.a(a).a.d
s=s.a(b).a.d
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:170}
A.k3.prototype={}
A.la.prototype={}
A.cm.prototype={
U(){return"RecurringMark."+this.b}}
A.iS.prototype={}
A.ex.prototype={
U(){return"RewardUnit."+this.b}}
A.fn.prototype={
M(){var s,r=this,q=r.b.k(0),p=r.c
p=p==null?null:p.M()
s=r.d
s=s==null?null:s.k(0)
return A.T(["categoryId",r.a,"rate",q,"capSpend",p,"capEarn",s],t.N,t.X)}}
A.lm.prototype={}
A.u9.prototype={
l3(a,b,c,d){var s,r,q,p,o,n=c*12+d
for(s=this.b,r=s.length,q=null,p=0;p<r;++p){o=s[p]
if(o.a!==a||o.b!==b||o.d*12+o.e>n)continue
if(q==null||o.d*12+o.e>=q.d*12+q.e)q=o}return q==null?null:q.c},
l4(a,b,c){var s,r,q,p,o,n=t.N,m=A.w(n,t.B)
n=A.a4(n)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
if(p.a===a)n.m(0,p.b)}n=A.e5(n,n.r,n.$ti.c)
s=n.$ti.c
while(n.n()){r=n.d
if(r==null)r=s.a(r)
o=this.l3(a,r,b,c)
if(o!=null)m.j(0,r,o)}return m}}
A.vT.prototype={
$1(a){return typeof a=="string"?A.a6(this.a.d,t.N,t.G).h(0,a):null},
$S:171}
A.vU.prototype={
$1(a){return t.d.a(a).b===this.a.h(0,"flag")},
$S:98}
A.vV.prototype={
$1(a){return t.fK.a(a).b===this.a.h(0,"as")},
$S:172}
A.vW.prototype={
$1(a){return t.fC.a(a).a==null},
$S:261}
A.aX.prototype={}
A.lw.prototype={}
A.di.prototype={
im(a,b,c,d){var s,r,q,p,o,n=this,m=A.c([],t.g)
for(s=n.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.m)(s),++q){p=s[q]
if(!p.Q&&p.at!=null){o=p.at
o.toString
m.push(o)}}s=m.length
n.d!==$&&A.G6()
n.d=s
m=s===0?null:A.aM(B.a.a5(m,A.a3($.M(),c),new A.mR(),t.B),d)
n.c!==$&&A.G6()
n.c=m},
gf_(){var s=this.b,r=A.L(s)
return new A.o(s,r.i("k(1)").a(new A.mS()),r.i("o<1>")).gq(0)}}
A.mR.prototype={
$2(a,b){var s=t.B
return s.a(a).C(0,s.a(b))},
$S:24}
A.mS.prototype={
$1(a){return!t.V.a(a).Q},
$S:12}
A.dN.prototype={}
A.mU.prototype={}
A.w5.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=A.Nn(f,a,g.c,g.b.F()),d=e.c,c=A.c([],t.s)
for(s=a.a,f=A.Mz(f,s),r=f.length,q=0;q<f.length;f.length===r||(0,A.m)(f),++q){p=f[q]
o=p.a-1
if(!(o>=0&&o<12))return A.a(B.l,o)
c.push(B.l[o]+" "+p.b)}f=A.c9(a)
r=a.d
if(r===B.o)r=A.FF(a)
else{r=B.kE.h(0,r)
r.toString}o=e.b
n=o==null?null:A.aM(o,g.d)
m=d==null
if(m)l="No statement yet"
else{l=g.e
l="Statement to "+A.cs(d,l)+", "+A.F9(d,l)}m=!m
k=m&&e.f
j=e.w
if(j===0)j=null
else{i=j===1?"":"s"
h=g.d
h=""+j+" alert"+i+": "+A.aM(e.x,h)+" out, "+A.aM(e.y,h)+" in"
j=h}i=g.f.h(0,s)
if(i==null)i=0
h=a.CW!=null
if(h)m=null
else{m=m&&e.f
m=A.Lk(d,c,m,g.e)}return new A.aX(s,f,a.c,r,n,l,k,j,c,i,h,m,o,d)},
$S:175}
A.w3.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d!==B.x},
$S:2}
A.w4.prototype={
$2(a,b){var s=t.b
s.a(a)
s.a(b)
s=a.CW!=null
if(s!==(b.CW!=null))s=s?1:-1
else s=B.b.l(a.b,b.b)
return s},
$S:8}
A.xi.prototype={
$2(a,b){var s,r=t.v
r.a(a)
r=r.a(b).d
s=a.d
return A.b(r.a,r.b,r.c).l(0,A.b(s.a,s.b,s.c))},
$S:26}
A.kD.prototype={
jX(){var s=new A.an($.al,t.oX),r=new A.cJ(s,t.Ck),q=A.z(A.z(A.z(v.G.window).indexedDB).open("santhiq-page",1))
q.onupgradeneeded=A.bk(new A.nR(q))
q.onsuccess=A.bk(new A.nS(r,q))
q.onerror=A.bk(new A.nT(r))
return s},
cr(a){var s=new A.an($.al,t.nR),r=new A.cJ(s,t.le)
a.onsuccess=A.bk(new A.nP(r,a))
a.onerror=A.bk(new A.nQ(r))
return s},
bP(a){var s=0,r=A.J(t.m),q,p=this,o,n
var $async$bP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=3
return A.t(p.jX(),$async$bP)
case 3:q=o.z(n.z(c.transaction("keep",a)).objectStore("keep"))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bP,r)},
bB(){var s=0,r=A.J(t.m),q,p=this,o,n,m
var $async$bB=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:m=A
s=4
return A.t(p.bP("readonly"),$async$bB)
case 4:s=3
return A.t(p.cr(m.z(b.get("wrap"))),$async$bB)
case 3:n=b
if(n!=null){q=A.z(n)
s=1
break}s=5
return A.t(A.bI(A.z(A.z(A.z(A.z(v.G.window).crypto).subtle).generateKey($.Gk(),!1,A.c(["encrypt","decrypt"],t.s))),t.X),$async$bB)
case 5:o=b
o.toString
A.z(o)
m=A
s=7
return A.t(p.bP("readwrite"),$async$bB)
case 7:s=6
return A.t(p.cr(m.z(b.put(o,"wrap"))),$async$bB)
case 6:q=o
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bB,r)},
bY(){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b
var $async$bY=A.K(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:p=4
e=A
s=8
return A.t(n.bP("readonly"),$async$bY)
case 8:s=7
return A.t(n.cr(e.z(a0.get("data"))),$async$bY)
case 7:m=a0
if(m==null){q=null
s=1
break}l=A.c(A.d(m).split("."),t.s)
k=B.B.O(J.as(l,0))
j=B.B.O(J.as(l,1))
e=A
d=A
c=A.z(A.z(A.z(v.G.window).crypto).subtle)
b=A.BE(A.T(["name","AES-GCM","iv",k],t.N,t.K))
s=10
return A.t(n.bB(),$async$bY)
case 10:s=9
return A.t(e.bI(d.z(c.decrypt(b,a0,j)),t.X),$async$bY)
case 9:i=a0
h=i
h.toString
h=B.R.c8(A.iE(t.i.a(h),0,null))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
s=11
return A.t(n.ap(0),$async$bY)
case 11:q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bY,r)},
cl(a){var s=0,r=A.J(t.H),q=this,p,o,n,m,l,k,j,i
var $async$cl=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=new Uint8Array(12)
m=v.G
A.z(A.z(A.z(m.window).crypto).getRandomValues(n))
l=A
k=A
j=A.z(A.z(A.z(m.window).crypto).subtle)
i=A.BE(A.T(["name","AES-GCM","iv",n],t.N,t.K))
s=3
return A.t(q.bB(),$async$cl)
case 3:s=2
return A.t(l.bI(k.z(j.encrypt(i,c,B.E.O(a))),t.X),$async$cl)
case 2:p=c
m=t.D.i("bf.S")
m.a(n)
o=B.K.gaI().O(n)
p.toString
m=m.a(A.iE(t.i.a(p),0,null))
m=B.K.gaI().O(m)
l=A
s=5
return A.t(q.bP("readwrite"),$async$cl)
case 5:s=4
return A.t(q.cr(l.z(c.put(o+"."+m,"data"))),$async$cl)
case 4:return A.H(null,r)}})
return A.I($async$cl,r)},
ap(a){var s=0,r=A.J(t.H),q=1,p=[],o=this,n,m,l
var $async$ap=A.K(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.t(o.bP("readwrite"),$async$ap)
case 6:n=c
s=7
return A.t(o.cr(A.z(n.delete("data"))),$async$ap)
case 7:s=8
return A.t(o.cr(A.z(n.delete("wrap"))),$async$ap)
case 8:q=1
s=5
break
case 3:q=2
l=p.pop()
s=5
break
case 2:s=1
break
case 5:return A.H(null,r)
case 1:return A.G(p.at(-1),r)}})
return A.I($async$ap,r)},
$iHW:1}
A.nR.prototype={
$1(a){A.z(a)
return A.z(A.z(this.a.result).createObjectStore("keep"))},
$S:176}
A.nS.prototype={
$1(a){A.z(a)
return this.a.cF(A.z(this.b.result))},
$S:13}
A.nT.prototype={
$1(a){A.z(a)
return this.a.dN(new A.dT(u.p))},
$S:13}
A.nP.prototype={
$1(a){A.z(a)
return this.a.cF(this.b.result)},
$S:13}
A.nQ.prototype={
$1(a){A.z(a)
return this.a.dN(new A.dT(u.p))},
$S:13}
A.vy.prototype={
$2(a,b){return this.a.setAttribute(A.d(a),A.j(A.de(b)))},
$S:178}
A.vz.prototype={
$1(a){return A.R(a)*this.a},
$S:48}
A.vA.prototype={
$1(a){return A.Ca(a)>=this.a},
$S:180}
A.xF.prototype={
$1(a){return a===B.O.mL(a)?B.O.by(a,0):B.O.by(a,1)},
$S:65}
A.vc.prototype={
$1(a){var s=this.a.a
return 12+(s-a)/(s-this.b)*220},
$S:182}
A.yR.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:48}
A.z0.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:48}
A.bc.prototype={
U(){return"_View."+this.b}}
A.w1.prototype={
$2(a,b){return this.a.append(A.d(a),A.d(b))},
$S:183}
A.l8.prototype={
ip(a){var s=this,r=v.G,q=A.aN(new A.o(B.dK,t.aX.a(new A.rI(B.b.f4(A.d(A.z(A.z(r.window).location).hash),"#",""))),t.i0),t.sn)
s.at=q==null?B.co:q
s.b.onmessage=A.bk(new A.rJ(s))
A.z(r.window).addEventListener("pagehide",A.bk(new A.rK(s)))
A.J2(B.eT,new A.rL(s))},
gc7(){var s=this.Q
return s===$?this.Q=A.aB(new A.aa(Date.now(),0,!1).F(),B.q).a:s},
gc6(){var s=this.as
return s===$?this.as=A.aB(new A.aa(Date.now(),0,!1).F(),B.q).b:s},
iH(a){var s,r,q,p=this,o=a.data
if(o!=null)s=!(typeof o==="string")
else s=!0
if(s)return
r=A.MV(A.d(o),p.c)
q=p.c=null
A:{if(r instanceof A.iF)return
s=r instanceof A.eA
if(s)q=r.a
if(s){p.a.ay=q
p.ae()
break A}if(r instanceof A.hg)p.ah(t.U.a(new A.pi(p,r)))}},
ky(){var s,r,q,p=A.KL()
this.c=p
s=this.a
r=s.c
q=A.jx("https","accounts.google.com","/o/oauth2/v2/auth",A.T(["client_id",r.a,"redirect_uri",r.b,"response_type","token","scope",B.a.Z(B.dz," "),"state",p,"include_granted_scopes","false","prompt","select_account"],t.N,t.z))
if(A.aS(A.z(v.G.window).open(q.gdJ(),"santhiq-sign-in","popup,width=500,height=650"))==null){s.ay="The sign-in window was blocked. Allow pop-ups for this page and try again."
this.ae()}},
ah(a){return this.kp(t.U.a(a))},
kp(a){var s=0,r=A.J(t.H),q,p=2,o=[],n=[],m=this
var $async$ah=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(m.e){s=1
break}m.e=!0
m.ae()
p=3
s=6
return A.t(a.$0(),$async$ah)
case 6:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
m.e=!1
m.ae()
s=n.pop()
break
case 5:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$ah,r)},
k0(){var s,r,q,p=this
if(p.e)return
s=p.a
r=s.cx
if(r!==B.bV)q=r===B.au&&new A.aa(Date.now(),0,!1).ar(p.f).a>12e7
else q=!0
if(!q)return
p.f=new A.aa(Date.now(),0,!1)
p.ah(t.U.a(s.gf3()))},
I(a,b,c){var s=A.z(A.z(v.G.document).createElement(a))
if(c!=null)s.textContent=c
if(b!=null)s.className=b
return s},
V(a){return this.I(a,null,null)},
L(a,b){return this.I(a,null,b)},
W(a,b){return this.I(a,b,null)},
dB(a,b,c,d){var s,r
t.O.a(b)
s=this.I("button",c,a)
s.type="button"
r=d||this.e
s.disabled=r
s.addEventListener("click",A.bk(new A.po(b)))
return s},
b0(a,b,c){return this.dB(a,b,c,!1)},
ao(a,b){return this.dB(a,b,null,!1)},
ee(a,b,c){return this.dB(a,b,null,c)},
ae(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="div",a6="p",a7=A.aS(A.z(v.G.document).querySelector("#app"))
a7.toString
a7.textContent=""
s=a4.V("header")
s.append(a4.L("h1","SanthIQ"))
r=a4.a
q=r.z
p=q==null?null:q.b
if(p!=null)s.append(a4.I("span","quiet",p))
if(r.cx===B.au){o=!r.ch
q=o?"Hide amounts":"Show amounts"
n=a4.b0(q,new A.rM(a4,o),"eye")
n.setAttribute("aria-pressed",""+o)
n.prepend(A.EP(o?"eye":"eye-off"))
m=a4.W(a5,"mode")
m.setAttribute("role","group")
for(q=[B.lB,B.lS],l=0;l<2;++l){k={}
j=q[l]
i=k.a=null
h=j.a
k.a=h
if(h===r.CW)i="on"
i=a4.b0(j.b,new A.rN(k,a4),i)
i.setAttribute("aria-pressed",""+(k.a===r.CW))
m.append(i)}s.append(n)
s.append(m)}a7.append(s)
if(r.cx===B.au&&r.CW){q=a4.W(a5,"editing")
q.append(a4.L("span","Changes allowed: what you send from this page goes to the phone on its next sync."))
q.append(a4.ao("Stop allowing changes",new A.rO(a4)))
a7.append(q)}g=r.ay
if(g!=null)a7.append(a4.I(a6,"problem",g))
f=a4.r
if(f!=null)a7.append(a4.I(a6,"said",f))
if(a4.e)a7.append(a4.I(a6,"quiet","Working\u2026"))
switch(r.cx.a){case 0:a7.append(a4.L(a6,r.f!=null?"This browser is approved. Sign in to Google to open SanthIQ.":"SanthIQ for this computer. Once the phone approves this browser it stays approved until you remove it on the phone or press Forget this browser."))
a7.append(a4.b0("Sign in with SanthIQ's Google account",a4.gkx(),"primary"))
break
case 1:a4.je(a7)
break
case 2:a7.append(a4.L("h2","Waiting for the phone"))
a7.append(a4.L(a6,"On the phone: Settings, Devices. Check the code matches, then Approve."))
r=r.as
if(r==null)r=null
else{r=r.b.b
q=A.D(r.c,t.S)
B.a.a1(q,r.d)
e=B.aE.O(q).a
r=e.length
if(0>=r)return A.a(e,0)
q=e[0]
if(1>=r)return A.a(e,1)
k=e[1]
if(2>=r)return A.a(e,2)
j=e[2]
if(3>=r)return A.a(e,3)
d=B.b.aa(B.d.k(B.d.T((q<<24|k<<16|j<<8|e[3])>>>0,1e6)),6,"0")
j=B.b.X(d,0,3)+" "+B.b.ac(d,3)
r=j}a7.append(a4.I(a6,"code",r==null?"":r))
a7.append(a4.ao("Look again now",new A.rP(a4)))
break
case 3:c=a4.W("nav","side")
c.setAttribute("aria-label","Views")
for(q=a4.ax,b=c,a=null,l=0;l<12;++l){a0=B.dK[l]
a1=a0.d
if(a1!==a){b=a4.W(a5,a1==="Settings"?"side-box bottom":"side-box")
c.append(b)
if(a1.length!==0){a2=q.v(0,a1)&&a4.at.d!==a1
k=a4.b0((a2?"\u25b8":"\u25be")+" "+a1,new A.rQ(a4,a1),"side-group")
k.setAttribute("aria-expanded",""+!a2)
b.append(k)
if(a2){a=a1
continue}}a=a1}else if(q.v(0,a1)&&a4.at.d!==a1)continue
k=a0===a4.at?"tab on":"tab"
k=a4.b0(a0.c,new A.rR(a4,a0),k)
k.prepend(A.EP(a0.e))
j=a0===a4.at?"page":"false"
k.setAttribute("aria-current",j)
b.append(k)}a3=a4.W(a5,"content")
q=a4.W(a5,"shell")
q.append(c)
q.append(a3)
a7.append(q)
switch(a4.at.a){case 0:a4.jh(a3)
break
case 1:a4.j9(a3)
break
case 3:a4.jg(a3)
break
case 2:a4.jo(a3)
break
case 4:a4.jd(a3)
break
case 5:a4.jn(a3)
break
case 6:a4.jb(a3)
break
case 8:a4.jj(a3)
break
case 9:a4.jk(a3)
break
case 7:a4.jc(a3)
break
case 10:a4.jf(a3)
break
case 11:a4.ja(a3)
a4.jm(a3)
a4.jl(a3)
if(r.CW)a4.ji(a3)
break}break
case 4:a7.append(a4.L(a6,"This browser was removed on the phone."))
break}},
je(a){var s,r=this,q=r.V("form"),p=A.z(A.z(v.G.document).createElement("input"))
p.type="password"
p.autocomplete="off"
p.id="passphrase"
p.required=!0
s=r.L("label","SanthIQ's passphrase")
s.setAttribute("for","passphrase")
q.append(s)
q.append(p)
s=r.I("button","primary","Ask the phone to let this browser in")
s.type="submit"
s.disabled=r.e
q.append(s)
q.append(r.I("p","quiet","The passphrase opens the key in this tab for a moment to seal the request, and is then dropped. It is never sent or kept."))
q.addEventListener("submit",A.bk(new A.q3(r,p)))
a.append(r.L("h2","Join"))
a.append(q)},
jh(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="p",b6="quiet",b7="section",b8="quiet small",b9=b4.a,c0=b9.at
c0.toString
s=b4.gc7()
r=b4.gc6()-1
if(!(r>=0&&r<12))return A.a(B.V,r)
c1.append(b4.iM(B.V[r]+" "+s))
q=new A.aa(Date.now(),0,!1).F()
s=b4.w
r=b4.gc7()
p=b4.gc6()
o=b9.c
n=o.c
o=o.d
m=A.Lx(c0,s,n,b9.ch,p,q,o,r)
c1.append(b4.I(b5,b6,b4.iO(c0,b4.w)))
for(s=m.c,r=s.length,p=t.s,l=0;l<s.length;s.length===r||(0,A.m)(s),++l){k=s[l]
j=b4.W(b7,"region-overview")
i=k.a
j.append(b4.L("h2",A.ec(i)+" ("+i+")"))
h=b4.W("div","kpis")
for(g=k.b,f=0;f<4;++f){e=g[f]
d=b4.W("div","kpi "+e.d.b)
d.append(b4.I("span","kpi-label",e.a))
c=e.b
b=c==null
if(b)c="Not known yet"
d.append(b4.I("strong",b?"kpi-value none":"kpi-value",c))
d.append(b4.L("small",e.c))
h.append(d)}j.append(h)
a=k.c
if(a!=null){j.append(b4.L("h3","Cash forecast, next 31 days"))
if(b9.ch)j.append(b4.I(b5,b6,"The forecast shows once amounts are shown."))
else{g=new A.aa(Date.now(),0,!1).F()
d=g.F()
g.F()
a0=d.av(288e8)
d=A.b_(a0)
g=A.b4(a0)
c=A.av(a0)
b=A.c([],p)
for(a1=0;a1<a.length;++a1){if(a1===0)a2="Today"
else if(B.d.T(a1,7)===0){a2=864e8*a1
a2=""+A.av(A.b(d,g,c).av(a2))+"/"+A.b4(A.b(d,g,c).av(a2))}else a2=""
b.push(a2)}g=$.M()
a3=B.e.h(0,i)
if(a3==null)A.h(A.x(i,"currency","is not a supported currency"))
if((g.b<=0?0:Math.max(g.gA().b,0))>a3)A.h(A.y(i+" allows "+A.j(a3)+" decimal places",g.k(0),null))
i=A.aM(new A.q(g,i),!1)
g=A.C("[\\d.,]",!0,!1)
j.append(A.Fz("Cash forecast",b,a,!1,new A.qh(k),A.a8(i,g,"")))}}i=k.d
if(i!=null)j.append(b4.I(b5,b8,i))
c1.append(j)}a4=b4.W(b7,"health")
s=m.d
a4.append(b4.L("h2",s.length===0?"Financial health: nothing needs you":"Financial health"))
a5=new A.qk(b4)
for(r=t.S,i=A.L(s).c,g=A.bF(s,0,A.cM(3,"count",r),i),d=g.$ti,g=new A.ad(g,g.gq(0),d.i("ad<a5.E>")),d=d.i("a5.E");g.n();){c=g.d
a4.append(a5.$1(c==null?d.a(c):c))}if(s.length>3){a6=b4.W("details","more")
a6.append(b4.L("summary","Show "+(s.length-3)+" more"))
for(s=A.bF(s,3,null,i),i=s.$ti,s=new A.ad(s,s.gq(0),i.i("ad<a5.E>")),i=i.i("a5.E");s.n();){g=s.d
a6.append(a5.$1(g==null?i.a(g):g))}a4.append(a6)}c1.append(a4)
a7=b4.V(b7)
a7.append(b4.L("h2","Payments due in the next 30 days"))
s=m.e
if(s.length===0)a7.append(b4.I(b5,b6,"No card bill or loan instalment is due."))
else{a8=b4.aF(A.c(["Due","Account","What","Amount"],p),B.a9)
for(s=A.bF(s,0,A.cM(6,"count",r),A.L(s).c),r=s.$ti,s=new A.ad(s,s.gq(0),r.i("ad<a5.E>")),r=r.i("a5.E");s.n();){i=s.d
if(i==null)i=r.a(i)
g=A.aS(a8.querySelector("tbody"))
g.toString
d=i.r
c=i.a
if(d)c+=", overdue"
b=i.b
a2=i.c
i=i.e
i=A.c([c,b,a2,i==null?"Not known":i],p)
g.append(b4.bz(i,d?"attention":null,B.a9))}a7.append(a8)
a7.append(b4.ao("All payments due",new A.qi(b4)))}c1.append(a7)
s=b4.w
r=b4.gc7()
p=b4.gc6()
a9=A.Lw(c0,s,b9.ax,n,b9.ch,p,q,o,r)
b0=b4.W("details","card month-detail")
b0.append(b4.L("summary",a9.b+" in detail: money in, spent and by category"))
b1=b4.W("ul","notes")
for(b9=a9.d,c0=b9.length,l=0;l<b9.length;b9.length===c0||(0,A.m)(b9),++l)b1.append(b4.L("li",b9[l]))
b0.append(b1)
for(b9=a9.e,c0=b9.length,s=m.b,l=0;l<b9.length;b9.length===c0||(0,A.m)(b9),++l){k=b9[l]
r=k.a
b0.append(b4.L("h3",A.ec(r)+" ("+r+")"))
for(r=k.b,f=0;f<3;++f){b2=r[f]
b0.append(b4.fN(b2.a,b2.b,b2.c))}for(r=k.e,p=r.length,f=0;f<r.length;r.length===p||(0,A.m)(r),++f)b0.append(b4.I(b5,b8,r[f]))
r=k.d
if(r!=null){b0.append(b4.I(b5,b6,r))
if(s)b0.append(b4.ao("See the last complete month",new A.qj(b4)))}for(r=k.c,p=r.length,f=0;f<r.length;r.length===p||(0,A.m)(r),++f){b3=r[f]
b0.append(b4.fN(b3.a,b3.b,b3.c))}}c1.append(b0)},
iO(a,b){var s,r=a.aH(b)
if(r==null)r="personal"
A:{if("company"===r){s="a company book: its own accounts and invoices"
break A}if("property"===r){s="the property book: rent, its costs and taxes"
break A}if("member"===r){s="a household member's own book"
break A}s="your personal book"
break A}return A.fC(b,a)+" is "+s+". Books are kept apart and never added together, and Singapore and India figures are never added to each other."},
eB(){var s=this.a.at.gcD(),r=A.p(s).i("au<1>"),q=A.D(new A.au(s,r),r.i("i.E"))
if(!B.a.v(q,this.w))this.w=q.length===0?"personal":B.a.ga0(q)
return q},
dA(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="span"
t.a.a(a2)
s=a.a
r=s.at
r.toString
q=a.eB()
p=a.W("nav","books")
for(o=q.length,n=r.f,m=0;m<q.length;q.length===o||(0,A.m)(q),++m){l=q[m]
k=n.h(0,l)
if(k==null)k=l==="personal"?"personal":null
A:{if("company"===k){j="Company"
break A}if("property"===k){j="Property"
break A}if("member"===k){j="Member"
break A}j=null
break A}i=A.fC(l,r)
h=l===a.w?"tab book on":"tab book"
g=a.b0(i,new A.pj(a,l),h)
if(j!=null)g.append(a.I("small","book-kind",j))
p.append(g)}f=s.ax
p.append(a.W(a0,"grow"))
s=a.I(a0,"quiet",f==null?"Nothing published yet":"As of "+A.FJ(f))
s.setAttribute("title","Changes made on the phone since show after its next sync.")
p.append(s)
p.append(a.ao("Get the latest",new A.pk(a)))
e=a.W("div","bars")
e.append(p)
s=a1==null
if(!s||a2.length>1){d=a.W("nav","sub")
s=!s
if(s){c=a.gc7()===A.aB(new A.aa(Date.now(),0,!1).F(),B.q).a&&a.gc6()===A.aB(new A.aa(Date.now(),0,!1).F(),B.q).b
r=a.b0("\u2039",new A.pl(a),"step")
r.setAttribute("aria-label","Earlier")
d.append(r)
d.append(a.L("strong",a1))
r=a.dB("\u203a",new A.pm(a),"step",c)
r.setAttribute("aria-label","Later")
d.append(r)}if(a2.length>1){if(s)d.append(a.W(a0,"gap"))
for(s=a2.length,m=0;m<a2.length;a2.length===s||(0,A.m)(a2),++m){b=a2[m]
r=A.ec(b)
o=b===a.x?"tab on":"tab"
d.append(a.b0(r+" ("+b+")",new A.pn(a,b),o))}}e.append(d)}return e},
iN(a){return this.dA(null,a)},
c5(){return this.dA(null,B.c)},
iM(a){return this.dA(a,B.c)},
aF(a,b){var s,r,q,p,o,n,m,l=this
t.a.a(a)
t.L.a(b)
s=l.V("table")
r=l.V("tr")
for(q=A.bO(a,0,t.N),p=J.S(q.a),o=q.b,q=new A.at(p,o,A.p(q).i("at<1>"));q.n();){n=q.c
n=n>=0?new A.r(o+n,p.gt()):A.h(A.ao())
m=B.a.v(b,n.a)?"amount":null
r.append(l.I("th",m,n.b))}q=l.V("thead")
q.append(r)
s.append(q)
s.append(l.V("tbody"))
return s},
dI(a){return this.aF(a,B.A)},
bz(a,b,c){var s,r,q,p,o,n
t.a.a(a)
t.L.a(c)
s=this.W("tr",b)
for(r=A.bO(a,0,t.N),q=J.S(r.a),p=r.b,r=new A.at(q,p,A.p(r).i("at<1>"));r.n();){o=r.c
o=o>=0?new A.r(p+o,q.gt()):A.h(A.ao())
n=B.a.v(c,o.a)?"amount":null
s.append(this.I("td",n,o.b))}return s},
fo(a){return this.bz(a,null,B.A)},
ba(a,b){return this.bz(a,null,b)},
j9(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a,b4=b3.at
b4.toString
b5.append(b2.c5())
s=b2.w
r=new A.aa(Date.now(),0,!1).F()
for(s=A.Cg(b4,s,b3.ch,r,b3.c.d).b,r=s.length,q=t.s,p=b4.r.a,o=0;o<s.length;s.length===r||(0,A.m)(s),++o){n=s[o]
m=b2.V("section")
l=n.a
m.append(b2.L("h2",A.ec(l)+" ("+l+")"))
for(l=n.b,k=l.length,j=0;j<l.length;l.length===k||(0,A.m)(l),++j){i=l[j]
h=i.b
m.append(b2.L("h3",i.a.c+" ("+h.length+")"))
g=i.c
g===$&&A.mK()
f=g==null
if(f)e=null
else{e=i.d
e===$&&A.mK()
d=e===1?"":"s"
d=g+" over "+e+" account"+d+" with a balance"
e=d}if(e!=null){if(f)g=null
else{f=i.d
f===$&&A.mK()
e=f===1?"":"s"
e=g+" over "+f+" account"+e+" with a balance"
g=e}m.append(b2.I("p","total-line","Total: "+A.j(g)))}c=b2.aF(B.jW,B.du)
c.className="accounts"
g=A.aS(c.querySelector("tbody"))
g.toString
for(f=h.length,b=0;b<h.length;h.length===f||(0,A.m)(h),++b){a=h[b]
e=a.as
d=e==null
a0=d?"":"\u26a0 "
a1=a.Q?" (closed)":""
a2=a.f
if(a2==null)a2="No balance yet"
a3=a.y
a3=a3.length===0?"None":B.a.Z(a3,", ")
a4=a.x
if(a4==null)a4="None"
a4=A.c([a0+a.b+a1,a.c,a.d,a2,a.r,""+a.z,a3,a4],q)
a3=A.c([],q)
a0=a.a
if(a0===b2.ay)a3.push("open")
a3.push("click")
d=!d
if(d)a3.push("attention")
a5=b2.bz(a4,B.a.Z(a3," "),B.du)
if(d){d=A.C("^Out of date: statement to [^.]*",!0,!1)
a6=A.G5(e,d,"Out of date",0)
e=A.aS(A.z(a5.children).item(4))
e.toString
e.append(b2.I("div","warn small",a6))}a5.addEventListener("click",A.bk(new A.pp(b2,a)))
g.append(a5)
if(a0!==b2.ay)continue
e=new A.aa(Date.now(),0,!1).F()
a7=A.LB(b4,a0,b3.ch,e)
a8=b2.aF(A.c(["Statement period","Opening","Closing","State"],q),B.aV)
for(e=a7.length,a9=0;a9<a7.length;a7.length===e||(0,A.m)(a7),++a9){b0=a7[a9]
d=A.aS(a8.querySelector("tbody"))
d.toString
d.append(b2.ba(A.c([b0.a,b0.b,b0.c,b0.d],q),B.aV))}b1=b2.W("td","inner")
b1.setAttribute("colspan","8")
e=a7.length===0?b2.I("p","quiet","No statement recorded yet."):a8
b1.append(e)
if(b3.CW){e=p.h(0,a0)
e.toString
b1.append(b2.ix(e))}e=b2.V("tr")
e.append(b1)
g.append(e)}m.append(c)}b5.append(m)}},
jg(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="section",b2="h2",b3="p",b4="quiet",b5=b0.a,b6=b5.at
b6.toString
b7.append(b0.c5())
s=A.aB(new A.aa(Date.now(),0,!1).F(),B.q)
r=A.Lv(b6,b0.w,b5.ch,s)
q=A.FX(b6,b0.w,s,b5.ch)
p=b0.V(b1)
p.append(b0.L(b2,"Payments due in the next 30 days"))
if(q.length===0)p.append(b0.I(b3,b4,"No card bill or loan instalment is due."))
else{o=t.s
n=b0.aF(A.c(["Due","Account","What","Amount"],o),B.a9)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.m)(q),++l){k=q[l]
j=A.aS(n.querySelector("tbody"))
j.toString
i=k.r
h=k.a
if(i)h+=", overdue"
g=k.e
if(g==null)g="Not known"
g=A.c([h,k.b,k.c,g],o)
j.append(b0.bz(g,i?"attention":null,B.a9))}p.append(n)
p.append(b0.I(b3,"quiet small","A card bill is what is still to pay on its latest statement; a loan, its instalment as you gave it. The app pays nothing itself."))}b7.append(p)
if(r.length===0)b7.append(b0.I(b3,b4,"No loans in this book yet."))
for(o=r.length,m=t.s,f=null,l=0;l<r.length;r.length===o||(0,A.m)(r),++l){e=r[l]
j=e.a
d=j.e
if(d!==f){b7.append(b0.I(b2,"region",A.ec(d)+" ("+d+")"))
f=d}c=b0.W(b1,"loan")
i=A.FF(j)
h=j.CW!=null?" (closed)":""
c.append(b0.L(b2,e.b+" \xb7 "+i+h))
h=A.c([],m)
i=e.c
if(i.length!==0)h.push(i)
h.push(e.d)
c.append(b0.I(b3,"lead",B.a.Z(h,". ")))
c.append(b0.I(b3,b4,e.e+". Outstanding: "+e.f+"."))
i=e.r
h=A.L(i)
g=h.i("o<1>")
b=A.D(new A.o(i,h.i("k(1)").a(new A.qc()),g),g.i("i.E"))
if(b.length!==0)c.append(b0.I(b3,"todo","To do: add the "+B.a.Z(b," and ")+" so it can be checked and forecast."))
i=e.w
if(i.length!==0){a=b0.aF(A.c(["Instalment","Amount","Status","Still due"],m),B.dq)
for(h=i.length,a0=0;a0<i.length;i.length===h||(0,A.m)(i),++a0){a1=i[a0]
g=A.aS(a.querySelector("tbody"))
g.toString
g.append(b0.ba(A.c([a1.a,a1.b,a1.c,a1.d],m),B.dq))}c.append(a)}if(b5.CW&&!b5.ch)c.append(b0.fH(j))
if(b5.CW&&b5.ch)c.append(b0.I(b3,b4,"Tick Show amounts to update its details."))
b7.append(c)}o=A.c([],t.sA)
for(m=A.Cj(b6),j=m.length,l=0;l<m.length;m.length===j||(0,A.m)(m),++l){a2=m[l]
if(a2.a.r===b0.w){i=a2.b
h=i.c.a.l(0,$.M())
i=h!==0&&A.FC(b6,i.bi(a2.d))==null}else i=!1
if(i)o.push(a2)}B.a.E(o,new A.qd())
if(o.length!==0){c=b0.V(b1)
c.append(b0.L(b2,"On card statements, not added yet ("+o.length+")"))
for(m=o.length,j=t.I,l=0;l<o.length;o.length===m||(0,A.m)(o),++l){a2=o[l]
a3=b0.V(b3)
i=a2.a
h=A.ec(i.e)
g=a2.b
a4=g.a===B.cf?"personal loan":"instalment plan"
a5=g.b.k(0)
a6=A.aM(g.c,b5.ch)
g=g.e
g=g==null?"":", "+A.j(g)+" instalments left"
a3.append(b0.L("span",h+", "+(i.c+" "+a4+" of "+a5)+": "+a6+" outstanding"+g+" (statement to "+a2.c.k(0)+"). "))
if(b5.CW){a3.append(b0.ao("Add this loan",new A.qe(b0,a2)))
a7=A.FB(b6,a2)
if(a7.length!==0){a8={}
a8.a=B.a.ga0(a7).a
i=A.c([],j)
for(h=a7.length,a0=0;a0<a7.length;a7.length===h||(0,A.m)(a7),++a0){a9=a7[a0]
i.push(new A.r(a9.a,A.c9(a9)))}a3.append(b0.aR(i,a8.a,new A.qf(a8)))
a3.append(b0.ao("It's this loan I have",new A.qg(a8,b0,a2)))}}c.append(a3)}b7.append(c)}if(b5.CW){b5=b0.V(b1)
b5.append(b0.fH(null))
b7.append(b5)}},
fH(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6="text",a7="17/11/2026",a8=a4.a,a9=a8.at
a9.toString
s=b0==null
r=s?a5:b0.as
if(r==null)r=B.bO
q=a4.W("form","edit")
q.append(a4.L("h3",s?"Add a loan":"Update loan details"))
p=new A.rv(a4,q)
o=new A.rw(a4,q)
n=a8.gmm()
if(s){a8=A.c([],t.I)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.m)(n),++l){k=n[l].a
a8.push(new A.r(k,k))}m=A.aN(n,t.hS)
m=m==null?a5:m.a
j=o.$3("Bank",a8,m==null?"":m)}else j=a5
i=s?p.$3("Last 4 digits",a6,""):a5
h=s?o.$3("Currency",B.jv,"SGD"):a5
g=s?p.$4$placeholder("Track from",a6,A.mz(A.aB(new A.aa(Date.now(),0,!1).F(),B.q)),a7):a5
a8=t.I
s=A.c([B.e0],a8)
for(l=0;l<4;++l){m=B.bL[l].b
if(0>=m.length)return A.a(m,0)
s.push(new A.r(m,m[0].toUpperCase()+B.b.ac(m,1)))}m=r.a
m=m==null?a5:m.b
f=o.$3("Type",s,m==null?"":m)
s=r.b
s=s==null?a5:s.a.k(0)
e=p.$3("Loan amount",a6,s==null?"":s)
s=r.c
s=s==null?a5:B.d.k(s)
d=p.$3("Instalments over the loan",a6,s==null?"":s)
s=r.d
s=s==null?a5:B.d.k(s)
c=p.$3("Payment day (1 to 31)",a6,s==null?"":s)
s=r.e
s=s==null?a5:B.d.k(s)
b=p.$3("Instalments left",a6,s==null?"":s)
a=p.$4$placeholder("Left as of",a6,A.mz(r.f),a7)
s=r.r
s=s==null?a5:s.a.k(0)
a0=p.$3("Instalment",a6,s==null?"":s)
a9=a9.gK().gS()
s=A.p(a9)
m=s.i("o<i.E>")
a1=A.D(new A.o(a9,s.i("k(i.E)").a(new A.rr(r)),m),m.i("i.E"))
B.a.E(a1,new A.rs())
a8=A.c([B.e0],a8)
for(a9=a1.length,l=0;l<a1.length;a1.length===a9||(0,A.m)(a1),++l){a2=a1[l]
a8.push(new A.r(a2.a,A.c9(a2)))}a9=r.w
a3=o.$3("Paid from",a8,a9==null?"":a9)
a8=a4.I("button","primary","Send to the phone")
a8.type="submit"
a8.disabled=a4.e
q.append(a8)
q.addEventListener("submit",A.bk(new A.rt(a4,a,g,f,e,d,c,b,new A.ru(),a0,a3,b0,n,j,i,h)))
return q},
aR(a,b,c){var s,r,q,p,o,n,m
t.DX.a(a)
t.ma.a(c)
s=v.G
r=A.z(A.z(s.document).createElement("select"))
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.m)(a),++p){o=a[p]
n=o.a
m=A.z(A.z(s.document).createElement("option"))
m.value=n
m.textContent=o.b
m.selected=n===b
r.append(m)}r.addEventListener("change",A.bk(new A.ry(c,r)))
return r},
bo(a,b,c,d){var s
t.ma.a(c)
s=A.z(A.z(v.G.document).createElement("input"))
s.type=a
s.value=b
if(d!=null)s.placeholder=d
s.addEventListener("change",A.bk(new A.rf(c,s)))
return s},
fE(a,b,c){return this.bo(a,b,c,null)},
al(a,b){var s=this.W("label","field")
s.append(this.L("span",a))
s.append(b)
return s},
jo(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="dd/mm/yyyy",a6=a3.a,a7=a6.at
a7.toString
a8.append(a3.c5())
s=a3.CW
r=a3.w
if(s.a!==r)a3.CW=new A.cp(r,a4,a4,a4,"",B.ci,a4,B.ch,0)
q=new A.r4(a3)
s=a7.gK().gS()
r=A.p(s)
p=r.i("o<i.E>")
o=A.D(new A.o(s,r.i("k(i.E)").a(new A.qR(a3)),p),p.i("i.E"))
B.a.E(o,new A.qS())
s=A.a6(a7.d,t.N,t.G).gS()
n=A.D(s,A.p(s).i("i.E"))
B.a.E(n,new A.qT())
m=new A.r3(a3,q)
l=a3.W("div","filters")
l.append(a3.al("Words",a3.bo("search",a3.CW.e,new A.qW(a3,q),"Payee or note")))
s=t.I
r=A.c([B.lM],s)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.m)(o),++k){j=o[k]
r.push(new A.r(j.a,A.c9(j)))}p=a3.CW.b
if(p==null)p=""
l.append(a3.al("Account",a3.aR(r,p,new A.qX(a3,q))))
l.append(a3.al("From",a3.bo("text",A.mz(a3.CW.c),new A.qY(a3,m),a5)))
l.append(a3.al("To",a3.bo("text",A.mz(a3.CW.d),new A.qZ(a3,m),a5)))
p=A.c([],s)
for(k=0;k<4;++k){i=B.dG[k]
p.push(new A.r(i.b,i.c))}l.append(a3.al("Show",a3.aR(p,a3.CW.f.b,new A.r_(a3,q))))
r=A.c([B.lp,B.lE],s)
for(p=n.length,k=0;k<n.length;n.length===p||(0,A.m)(n),++k){h=n[k]
r.push(new A.r(h.a,h.c))}p=a3.CW.r
if(p==null)p=""
l.append(a3.al("Category",a3.aR(r,p,new A.r0(a3,q))))
s=A.c([],s)
for(k=0;k<4;++k){i=B.dJ[k]
s.push(new A.r(i.b,i.c))}l.append(a3.al("Order",a3.aR(s,a3.CW.w.b,new A.r1(a3,q))))
s=a3.CW
r=new A.aa(Date.now(),0,!1).F()
g=A.LC(a7,s,a6.ch,r)
f=a3.W("ul","notes")
for(a6=g.e,s=a6.length,k=0;k<a6.length;a6.length===s||(0,A.m)(a6),++k)f.append(a3.L("li",a6[k]))
e=a3.V("section")
e.append(l)
a6=g.b
s=A.Cs(""+a6,"SGD")
a6=a6===1?"":"s"
e.append(a3.I("p","quiet",s+" transaction"+a6))
e.append(f)
a6=t.s
d=a3.aF(A.c(["Date","Account","Payee","Amount","Type","Category","State","Note"],a6),B.a9)
d.className="tx"
for(s=g.a,r=s.length,k=0;k<s.length;s.length===r||(0,A.m)(s),++k){c=s[k]
p=A.c([c.b,c.c,c.d,c.e,c.f,c.r,c.w,c.x],a6)
b=c.a
a=a3.bz(p,b===a3.ch?"open click":"click",B.a9)
a.addEventListener("click",A.bk(new A.r2(a3,c)))
a0=A.aS(d.querySelector("tbody"))
a0.append(a)
if(b===a3.ch){a1=a3.W("td","inner")
a1.setAttribute("colspan","8")
p=a3.V("tr")
a1.append(a3.kN(a7,b))
p.append(a1)
a0.append(p)}}a2=a3.V("nav")
a6=g.c
a2.append(a3.ee("\u2039 Newer",new A.qU(a3,q,g),a6===0))
a7=g.d
a2.append(a3.I("span","quiet","Page "+(a6+1)+" of "+a7))
a2.append(a3.ee("Older \u203a",new A.qV(a3,q,g),a6>=a7-1))
e.append(d)
e.append(a2)
a8.append(e)},
jd(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="p",a9="quiet",b0="section",b1="h2",b2="attention",b3="customer",b4="date",b5="edit-grid",b6="td",b7="text",b8="paymentDays",b9=a7.a,c0=b9.at
c0.toString
s=t.s
r=A.c([],s)
for(q=c0.gcD(),q=new A.cy(q,q.r,q.e,A.p(q).i("cy<1>")),p=c0.f;q.n();){o=q.d
n=p.h(0,o)
if(n==null)n=o==="personal"?"personal":null
if(n==="company")r.push(o)}if(r.length!==0&&!B.a.v(r,a7.w))a7.w=B.a.ga0(r)
c1.append(a7.c5())
if(!B.a.v(r,a7.w)){c1.append(a7.I(a8,a9,"Invoices are made for a company book; this book is not one."))
return}r=a7.w
q=A.aB(new A.aa(Date.now(),0,!1).F(),B.q)
m=A.Lt(c0,r,b9.ch,q)
l=b9.CW
b9=m.a
if(b9==null){b9=a7.V(b0)
b9.append(a7.I(a8,"warn","Set up who issues "+A.fC(a7.w,c0)+"'s invoices on the phone first (Books, "+A.fC(a7.w,c0)+", Make sales invoices): the UEN and the account number are kept there."))
c1.append(b9)}else{c0=m.b?"tax invoices with GST at 9%":"plain invoices, not GST registered"
c1.append(a7.I(a8,a9,b9+": "+c0+". Drafts made here are issued, numbered and made into PDFs on the phone."))}k=a7.V(b0)
b9=m.e
k.append(a7.L(b1,"Issued ("+b9.length+")"))
if(b9.length===0)k.append(a7.I(a8,a9,"None issued yet."))
if(b9.length!==0){c0=A.c(["Number","Customer","Date","Due"],s)
r=m.b
if(r)c0.push("GST")
c0.push("Total")
c0.push("State")
j=a7.aF(c0,r?B.dx:B.dv)
for(c0=b9.length,i=0;i<b9.length;b9.length===c0||(0,A.m)(b9),++i){h=b9[i]
q=h.a
q=A.c([q.w,q.Q,h.b,h.c],s)
if(r)q.push(h.e)
q.push(h.d)
p=h.f
q.push(p)
o=r?B.dx:B.dv
g=a7.bz(q,p==="Overdue"?b2:null,o)
A.aS(j.querySelector("tbody")).append(g)}k.append(j)}c1.append(k)
f=a7.V(b0)
b9=m.d
f.append(a7.L(b1,"Drafts ("+b9.length+")"))
if(b9.length===0)f.append(a7.I(a8,a9,"No draft."))
for(c0=b9.length,r=m.b,i=0;i<b9.length;b9.length===c0||(0,A.m)(b9),++i){e=b9[i]
d=a7.W("div","draft")
d.append(a7.L("h3",e.b+" \xb7 "+e.c))
q=e.e
p=q==null
q=p?"Missing: "+B.a.Z(e.f,", ").toLowerCase()+".":"If issued now: "+q
d.append(a7.I(a8,p?"warn":a9,q))
q=A.c(["Description","Qty","Unit price","Amount"],s)
if(r)q.push("GST")
j=a7.aF(q,B.dn)
for(q=e.d,p=q.length,c=0;c<q.length;q.length===p||(0,A.m)(q),++c){b=q[c]
o=A.aS(j.querySelector("tbody"))
o.toString
n=A.c([b.a,b.b,b.c,b.d],s)
if(r)n.push(b.e)
o.append(a7.ba(n,B.dn))}d.append(j)
if(l)d.append(a7.ao("Remove this draft",new A.pO(a7,e)))
f.append(d)}c1.append(f)
if(l&&m.c.length!==0){a=a7.cx
a0=new A.q0(a7,a)
if(a.h(0,b3)==null)a.j(0,b3,B.a.ga0(m.c).b)
if(a.h(0,b4)==null)a.j(0,b4,A.mz(A.aB(new A.aa(Date.now(),0,!1).F(),B.q)))
a1=a7.W("div",b5)
b9=A.c([],t.I)
for(c0=m.c,q=c0.length,i=0;i<c0.length;c0.length===q||(0,A.m)(c0),++i){a2=c0[i]
p=A.n(a2.c.h(0,"name"))
p.toString
b9.push(new A.r(a2.b,p))}c0=a.h(0,b3)
c0.toString
a1.append(a7.al("Customer",a7.aR(b9,c0,new A.pP(a))))
a1.append(a0.$3$placeholder(b4,"Invoice date","dd/mm/yyyy"))
a1.append(a0.$3$placeholder("reference","Customer reference (optional)","Like a PO number"))
a1.append(a0.$3$wide("note","Note (optional)",!0))
c0=A.c(["Description","Quantity","Unit price, S$"],s)
if(r)c0.push("GST")
a3=a7.dI(c0)
for(a4=0;a4<a7.cy;++a4){g=a7.V("tr")
b9=a7.V(b6)
c0=""+a4
q=a.h(0,"d"+c0)
if(q==null)q=""
q=a7.bo(b7,q,new A.pQ(a4,a),"What was supplied")
q.className="wide"
b9.append(q)
g.append(b9)
b9=a7.V(b6)
q=a.h(0,"q"+c0)
if(q==null)q=""
b9.append(a7.bo(b7,q,new A.pT(a4,a),"Like 1"))
g.append(b9)
b9=a7.V(b6)
q=a.h(0,"p"+c0)
if(q==null)q=""
b9.append(a7.bo(b7,q,new A.pU(a4,a),"Like 1200.00"))
g.append(b9)
if(r){b9=a7.V(b6)
c0=a.h(0,"g"+c0)
if(c0==null)c0="standard"
b9.append(a7.aR(B.jf,c0,new A.pV(a4,a)))
g.append(b9)}A.aS(a3.querySelector("tbody")).append(g)}b9=a7.V(b0)
b9.append(a7.L(b1,"New invoice draft"))
b9.append(a1)
b9.append(a3)
c0=a7.V("nav")
c0.append(a7.ao("Add a row",new A.pW(a7)))
c0.append(a7.b0("Send the draft to the phone",new A.pX(a7,a,m),"primary"))
b9.append(c0)
c1.append(b9)}else if(l)c1.append(a7.I(a8,a9,"Add a customer below to start a draft."))
a5=a7.V(b0)
b9=m.c
a5.append(a7.L(b1,"Customers ("+b9.length+")"))
j=a7.dI(A.c(["Name","Address","Attention","Pays in"],s))
for(c0=b9.length,i=0;r=b9.length,i<r;b9.length===c0||(0,A.m)(b9),++i){a2=b9[i]
r=A.aS(j.querySelector("tbody"))
r.toString
q=a2.c
p=A.n(q.h(0,"name"))
p.toString
o=A.n(q.h(0,"address"))
o.toString
o=A.a8(o,"\n",", ")
n=A.n(q.h(0,b2))
if(n==null)n=""
r.append(a7.fo(A.c([p,o,n,A.aG(q.h(0,b8))==null?"The usual days":A.j(A.aG(q.h(0,b8)))+" days"],s)))}if(r!==0)a5.append(j)
if(l){b9=t.N
a2=A.w(b9,b9)
a6=A.z(A.z(v.G.document).createElement("textarea"))
a6.rows=3
a6.placeholder="Street, unit, postcode"
a6.addEventListener("change",A.bk(new A.pY(a6,a2)))
a5.append(a7.L("h3","Add a customer"))
b9=a7.W("div",b5)
b9.append(a7.al("Name",a7.fE(b7,"",new A.pZ(a2))))
b9.append(a7.al("Address",a6))
b9.append(a7.al("Attention (optional)",a7.fE(b7,"",new A.q_(a2))))
b9.append(a7.al("Pays in, days (optional)",a7.bo(b7,"",new A.pR(a2),"Like 30")))
a5.append(b9)
a5.append(a7.ao("Send the customer to the phone",new A.pS(a7,a2)))}c1.append(a5)},
jn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a.at
e.toString
s=new A.qJ(f,e)
f.eB()
r=s.$0()
q=A.fD(e,f.w,r.r)
if(!B.a.v(q,f.x)){f.x=B.a.ga0(q)
r=s.$0()}e=f.gc7()
p=f.gc6()-1
if(!(p>=0&&p<12))return A.a(B.V,p)
a.append(f.dA("Twelve months to "+(B.V[p]+" "+e),q))
e=A.c([],t.t)
for(p=r.b,o=1;o<=p.length+2;++o)e.push(o)
n=t.s
m=A.c(["Category"],n)
B.a.a1(m,p)
m.push("Total")
m.push("Average")
l=f.aF(m,e)
l.className="matrix"
m=A.aS(l.querySelector("tbody"))
m.toString
for(p=r.c,k=p.length,j=0;j<p.length;p.length===k||(0,A.m)(p),++j){i=p[j]
h=A.c([i.a],n)
B.a.a1(h,i.b)
h.push(i.c)
h.push(i.d)
m.append(f.ba(h,e))}p=r.d
k=A.c([p.a],n)
B.a.a1(k,p.b)
k.push(p.c)
k.push(p.d)
m.append(f.bz(k,"total",e))
p=r.e
if(B.a.N(p,new A.qK())){n=A.c(["Not filed yet, not counted (transactions)"],n)
B.a.a1(n,p)
n.push("")
n.push("")
m.append(f.bz(n,"aside",e))}g=f.W("ul","notes")
for(e=r.f,j=0;j<1;++j)g.append(f.L("li",e[j]))
e=f.V("section")
p=r.a
e.append(f.L("h2","Spending by category, "+(A.ec(p)+" ("+p+")")))
e.append(l)
e.append(g)
a.append(e)},
jj(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="quiet"
a3.append(a1.c5())
s=a1.a
r=s.at
r.toString
q=a1.w
p=new A.aa(Date.now(),0,!1).F()
o=A.Ly(r,q,s.ch,p)
n=a1.V("section")
p=o.b
q=A.Cs(""+p,"SGD")
r=p===1?"":"s"
p=o.a
m=p.length
l=m===1?"":"s"
n.append(a1.L("h2","To file: "+q+" transaction"+r+" from "+m+" payee"+l))
n.append(a1.I("p",a2,s.CW?"Filing a payee files all its transactions and saves the rule; the phone applies it on its next sync.":"Turn on Allow changes to file payees from here."))
if(p.length!==0){k=s.CW
j=a1.bo("search",a1.y,new A.qo(a1),"Search payees")
i=B.b.H(a1.y).toLowerCase()
s=A.c([],t.kW)
for(r=p.length,q=i.length!==0,h=0;h<p.length;p.length===r||(0,A.m)(p),++h){g=p[h]
if(!q||B.b.v(g.a.toLowerCase(),i))s.push(g)}n.append(a1.al("Payee",j))
r=t.s
q=A.c(["Payee","Direction","Transactions","Total"],r)
if(k)q.push("File as")
f=a1.aF(q,B.dt)
for(q=A.bF(s,0,A.cM(a1.z,"count",t.S),t.xH),p=q.$ti,q=new A.ad(q,q.gq(0),p.i("ad<a5.E>")),p=p.i("a5.E");q.n();){m=q.d
if(m==null)m=p.a(m)
e=a1.ba(A.c([m.a,m.e,""+m.f,m.r],r),B.dt)
if(k){l=a1.V("td")
l.append(a1.jt(m))
e.append(l)}A.aS(f.querySelector("tbody")).append(e)}n.append(f)
if(s.length===0)n.append(a1.I("p",a2,"No payee to file matches the search."))
if(s.length>a1.z){r=a1.V("nav")
r.append(a1.I("span",a2,"Showing "+a1.z+" of "+s.length+" payees."))
r.append(a1.ao("Show 25 more",new A.qp(a1)))
n.append(r)}}d=a1.V("section")
d.append(a1.L("h2","Other items, all books"))
s=o.c
if(s.length===0)d.append(a1.I("p",a2,"Nothing else waits."))
for(r=s.length,h=0;h<s.length;s.length===r||(0,A.m)(s),++h){c=s[h]
b=a1.V("details")
q=c.c
b.append(a1.L("summary",c.a+" ("+q+")"))
a=a1.W("ul","items")
for(p=c.b,m=p.length,a0=0;l=p.length,a0<l;p.length===m||(0,A.m)(p),++a0)a.append(a1.L("li",p[a0]))
if(q>l)a.append(a1.I("li",a2,"And "+(q-l)+" more; the phone's Review lists them all."))
b.append(a)
d.append(b)}a3.append(n)
a3.append(d)},
jc(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="section",a2="Money in",a3=a0.a,a4=a3.at
a4.toString
a0.eB()
s=new A.pH(a0,a4)
r=s.$0()
q=A.fD(a4,a0.w,r.f)
if(!B.a.v(q,a0.x)){a0.x=B.a.ga0(q)
r=s.$0()}a5.append(a0.iN(q))
p=a0.V(a1)
a4=r.a
p.append(a0.L("h2","Net worth today, "+(A.ec(a4)+" ("+a4+")")))
p.append(a0.dG("Holdings",r.c,null,!0))
p.append(a0.dG("Debts",r.d,null,!0))
p.append(a0.dG("Net worth",r.e,"In "+a4+"; each figure from its latest statement or value.",!0))
o=t.s
n=a0.aF(A.c(["Holding or debt","As of","Amount"],o),B.ds)
for(m=r.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.m)(m),++k){j=m[k]
i=A.aS(n.querySelector("tbody"))
i.toString
h=j.d?" (debt)":""
i.append(a0.ba(A.c([j.a+h,j.b,j.c],o),B.ds))}p.append(n)
g=a0.W("ul","notes")
m=r.r
if(m.length!==0)g.append(a0.L("li","No balance yet, left out: "+B.a.Z(m,", ")+"."))
p.append(g)
f=a0.aF(A.c(["Month","Money in","Spent","Saved","Savings rate","Net worth at month end"],o),B.dA)
for(m=r.w,l=m.length,k=0;k<m.length;m.length===l||(0,A.m)(m),++k){e=m[k]
i=A.aS(f.querySelector("tbody"))
i.toString
i.append(a0.ba(A.c([e.a,e.b,e.c,e.d,e.e,e.f],o),B.dA))}d=a0.V(a1)
d.append(a0.L("h2","Charts"))
if(a3.ch)d.append(a0.I("p","quiet","The charts show once Show amounts is ticked."))
else{o=a3.at
o.toString
c=A.Lr(o,a0.w,a3.c.c,new A.aa(Date.now(),0,!1).F(),a4)
a3=c.a
o=A.aM(A.a3($.M(),a3),!1)
m=A.C("[\\d.,]",!0,!1)
b=A.a8(o,m,"")
o=new A.pK(c)
a=a0.W("div","legend")
a.append(a0.I("span","key series-1",a2))
a.append(a0.I("span","key series-2","Spent"))
d.append(a0.L("h3","Money in and spent, by month ("+a3+")"))
d.append(a)
m=c.b
d.append(A.Me("Money in and spent by month",m,A.c([new A.r(a2,c.c),new A.r("Spent",c.d)],t.AW),new A.pI(o),b))
d.append(a0.L("h3","Net worth at each month end ("+a3+")"))
d.append(A.Fz("Net worth at each month end",m,c.e,!0,new A.pJ(o),b))
d.append(a0.I("p","quiet","Hover a bar or a point for its amount; the table below has every figure."))}a5.append(p)
a5.append(d)
a3=a0.V(a1)
a3.append(a0.L("h2","The last twelve months, "+(A.ec(a4)+" ("+a4+")")))
a3.append(f)
a5.append(a3)},
jf(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.at
a2.toString
s=new A.aa(Date.now(),0,!1).F()
r=A.Lu(a2,a1.ch,s)
q=a1.CW
if(q){p={}
a1=A.c([],t.nB)
for(o=0;o<31;++o){n=B.ab[o]
if(A.IG(n)&&!B.e6.v(0,n))a1.push(n)}B.a.E(a1,new A.q5())
p.a=B.a.ga0(a1).b
a2=a0.V("section")
s=a0.W("div","filing")
m=A.c([],t.I)
for(l=a1.length,o=0;o<a1.length;a1.length===l||(0,A.m)(a1),++o){n=a1[o]
m.push(new A.r(n.b,n.c))}s.append(a0.aR(m,p.a,new A.q6(p)))
s.append(a0.ao("Add a record",new A.q7(p,a0)))
a2.append(s)
a2.append(a0.I("p","quiet","Documents, policies and records with files or several people are added on the phone."))
a3.append(a2)
k=a0.db
if(t.wD.b(k))a3.append(a0.jO(k.a,k.b))}if(r.length===0)a3.append(a0.I("p","quiet","No records yet."))
for(a1=r.length,a2=t.a,s=t.N,o=0;o<r.length;r.length===a1||(0,A.m)(r),++o){j=r[o]
i=a0.W("details","card")
i.setAttribute("open","")
m=j.c
i.append(a0.L("summary",j.a+" ("+m.length+")"))
h=q&&j.d!=null
l=A.D(j.b,s)
if(h)l.push("")
g=a0.dI(l)
for(m=A.bO(m,0,a2),l=J.S(m.a),f=m.b,m=new A.at(l,f,A.p(m).i("at<1>")),e=j.e;m.n();){d=m.c
d=d>=0?new A.r(f+d,l.gt()):A.h(A.ao())
c=d.a
b=a0.fo(d.b)
if(h){if(!(c>=0&&c<e.length))return A.a(e,c)
a=e[c]
d=a0.W("td","filing")
d.append(a0.ao("Edit",new A.q8(a0,j,a)))
d.append(a0.ao("Remove",new A.q9(a0,j,a)))
b.append(d)}A.aS(g.querySelector("tbody")).append(b)}i.append(g)
a3.append(i)}},
jO(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="personal",b2=b0.a.at
b2.toString
s=b0.W("form","edit")
r=t.N
q=A.w(r,t.j3)
p=new A.rn(b4)
for(o=b3.d,n=A.L(o),n.i("k(1)").a(A.zU()),o=B.a.gB(o),n=new A.O(o,A.zU(),n.i("O<1>")),m=v.G,l=t.I,k=b2.ab,j=t.P,i=t.eT,h=b2.f,g=b2.p3,f=t.o;n.n();){e=o.gt()
d=e.d
c=e.b
c=d?c:c+" (optional)"
b=p.$1(e)
a=e.c
A:{if(B.N===a){d=A.c([],l)
for(a0=e.e,a1=a0.length,a2=0;a2<a1;++a2){a3=a0[a2]
d.push(new A.r(a3,A.a8(a3,"-"," ")))}break A}if(B.ap===a){d=A.c([B.lL],l)
for(a0=A.a6(g,r,f).gS(),a0=a0.gB(a0);a0.n();){a1=a0.gt()
d.push(new A.r(a1.a,a1.b))}break A}if(B.a3===a){d=A.c([],l)
a0=b2.gK().gS()
a0=A.D(a0,A.p(a0).i("i.E"))
B.a.E(a0,new A.rh())
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.m)(a0),++a2){a4=a0[a2]
d.push(new A.r(a4.a,A.c9(a4)))}break A}if(B.ae===a){d=A.c([],l)
for(a0=A.w(r,r),a0.j(0,b1,b1),a0.a1(0,h),a0=new A.cy(a0,a0.r,a0.e,a0.$ti.i("cy<1>"));a0.n();){a1=a0.d
d.push(new A.r(a1,A.fC(a1,b2)))}break A}if(B.F===a){d=A.c([],l)
a0=e.f
a0.toString
a0=k.b2(A.ai(B.ab,a0,j))
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.m)(a0),++a2){a5=a0[a2]
a6=a5.b
a7=A.aN(new A.j4(a5.c.gS(),i),r)
d.push(new A.r(a6,a7==null?a6:a7))}break A}if(B.a0===a){d=A.c([B.lk,B.lW],l)
break A}d=null
break A}if(d!=null){a0={}
a0.a=b
if(a!==B.a0){a1=A.c([B.dZ],l)
B.a.a1(a1,d)
a8=a1}else a8=d
d=b0.aR(a8,b,new A.ri(a0))
a1=b0.W("label","field")
a1.append(b0.L("span",c))
a1.append(d)
s.append(a1)
q.j(0,e.a,new A.rj(a0))}else{a9=A.z(A.z(m.document).createElement("input"))
B:{if(B.r===a){d="date"
break B}if(B.aJ===a){d="time"
break B}if(B.ao===a){d="month"
break B}d="text"
break B}a9.type=d
a9.value=b
if(a===B.u)d="Like 1200.50 or 500 INR"
else{d=e.y
if(d==null)d=""}a9.placeholder=d
d=b0.W("label","field")
d.append(b0.L("span",c))
d.append(a9)
s.append(d)
q.j(0,e.a,new A.rk(a9))}}b2=b4==null
r=b0.I("button","primary",b2?"Add to the phone":"Send the change")
r.type="submit"
r.disabled=b0.e
s.append(r)
s.append(b0.ao("Cancel",new A.rl(b0)))
s.addEventListener("submit",A.bk(new A.rm(b0,b3,q,b4)))
r=b0.V("section")
o=b3.c
r.append(b0.L("h2",b2?"New: "+o:"Change: "+o))
r.append(s)
return r},
jk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c="section",b="quiet"
a.append(d.c5())
s=d.a
r=s.at
r.toString
q=A.Lz(r,d.w,s.ch)
p=s.CW
o=new A.qx(d)
s=q.c
if(s.length!==0){n=B.a.a5(s,0,new A.qs(),t.S)
m=d.V(c)
r=n===1?"":"s"
m.append(d.L("h2","Rules that disagree: "+n+" transaction"+r))
m.append(d.I("p",b,"Two confirmed rules match these payees with different filings, so their transactions wait. Remove or narrow one rule, or file the payee in Review."))
r=t.s
l=d.aF(A.c(["Payee","Transactions","Total","Rules"],r),B.aV)
for(k=s.length,j=0;j<s.length;s.length===k||(0,A.m)(s),++j){i=s[j]
h=A.aS(l.querySelector("tbody"))
h.toString
h.append(d.ba(A.c([i.a,""+i.b,i.c,B.a.Z(i.d,"; ")],r),B.aV))}m.append(l)
a.append(m)}if(p&&B.a.N(q.b,new A.qt())){s=d.V(c)
s.append(d.b0("File waiting transactions by the confirmed rules",new A.qu(d,o),"primary"))
s.append(d.I("p",b,"Only transactions exactly one confirmed rule matches are filed."))
a.append(s)}for(s=[new A.r("Proposed, waiting for you",q.a),new A.r("Confirmed",q.b)],r=t.s,j=0;j<2;++j){k=s[j]
g=k.b
h=J.ar(g)
if(h.ga4(g))continue
m=d.V(c)
m.append(d.L("h2",k.a+" ("+h.gq(g)+")"))
m.append(d.I("p",b,h.ga0(g).d?"The phone files the transactions these match the next time Review is opened there.":"Once confirmed, a rule files the transactions it matches."))
k=A.c(["Payee words","Files as","Limited to","Matching, not filed yet"],r)
if(p)k.push("")
l=d.aF(k,B.a9)
for(k=h.gB(g);k.n();){h=k.gt()
f=d.ba(A.c([h.a.c,h.b,h.e,""+h.c],r),B.a9)
if(p){e=d.W("td","filing")
if(!h.d)e.append(d.b0("Confirm",new A.qv(d,o,h),"primary"))
e.append(d.ao("Remove",new A.qw(d,o,h)))
f.append(e)}A.aS(l.querySelector("tbody")).append(f)}m.append(l)
a.append(m)}},
ix(a){var s,r,q,p,o=this,n=o.W("form","edit"),m=new A.ph(o,n),l=m.$2("Alias",a.b),k=a.fr,j=m.$3$placeholder("IFSC",k==null?"":k,"India only")
k=a.fx
s=m.$2("MICR",k==null?"":k)
k=a.fy
r=m.$2("Branch",k==null?"":k)
k=a.go
q=m.$3$placeholder("Number as statements show it",k==null?"":k,"Like 12345XXXXX")
k=a.y
k=k==null?null:B.d.k(k)
p=m.$2("Out of date after (days, with alerts)",k==null?"":k)
m=o.I("button","primary","Send to the phone")
m.type="submit"
m.disabled=o.e
n.append(m)
n.append(o.L("small","The customer ID is changed on the phone only."))
n.addEventListener("submit",A.bk(new A.pg(o,a,l,j,s,r,q,p)))
return n},
jl(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.at,a2=a1.dy,a3=A.IT(new A.N(a2,A.p(a2).i("N<2>"))).a,a4=a.V("section")
a2=a3.length
a4.append(a.L("h2","Bank SMS senders ("+a2+" ids)"))
a4.append(a.I("p","quiet","Only SMS from these senders are kept. Turning Bank SMS on and off stays on the phone."))
s=a0.CW
r=A.w(t.z9,t.zo)
for(a0=t.mu,q=0;q<a2;++q){p=a3[q]
o=p.c
if(o==null)o="No institution"
o=new A.r(o,p.b)
n=r.h(0,o)
if(n==null){n=A.c([],a0)
r.j(0,o,n)
o=n}else o=n
B.a.m(o,p)}a0=r.$ti.i("au<1>")
m=A.D(new A.au(r,a0),a0.i("i.E"))
B.a.E(m,new A.qB())
a0=t.s
l=a.dI(A.c(["Institution","Sends","Sender ids"],a0))
for(a2=m.length,q=0;q<m.length;m.length===a2||(0,A.m)(m),++q){k=m[q]
j=a.V("td")
o=r.h(0,k)
o.toString
B.a.E(o,new A.qC())
n=o.length
i=0
for(;i<o.length;o.length===n||(0,A.m)(o),++i){p=o[i]
h=a.W("span","chip")
g=p.a
h.append(a.L("span",g))
if(s){f=a.b0("\xd7",new A.qD(a,p),"chip-remove")
g="Remove "+g
f.title=g
f.setAttribute("aria-label",g)
h.append(f)}j.append(h)}o=A.aS(l.querySelector("tbody"))
o.toString
n=a.V("tr")
n.append(a.L("td",k.a))
n.append(a.L("td",k.b.c))
n.append(j)
o.append(n)}a4.append(l)
if(s){e={}
d=a.W("form","edit")
c=A.z(A.z(v.G.document).createElement("input"))
c.type="text"
c.placeholder="Like DBSBANK, or several: DBSBANK, DBS"
e.a="bank"
e.b=""
a0=A.c([],a0)
for(a2=A.a6(a1.x,t.N,t.p0).gS(),a2=a2.gB(a2);a2.n();)a0.push(a2.gt().b)
B.a.b9(a0)
d.append(a.al("Sender ids of one bank, as the phone shows them",c))
a2=t.I
o=A.c([],a2)
for(q=0;q<3;++q){k=B.bM[q]
o.push(new A.r(k.b,k.c))}d.append(a.al("Sends",a.aR(o,e.a,new A.qE(e))))
a2=A.c([B.dZ],a2)
for(o=a0.length,q=0;q<a0.length;a0.length===o||(0,A.m)(a0),++q){b=a0[q]
a2.push(new A.r(b,b))}d.append(a.al("Institution",a.aR(a2,"",new A.qF(e))))
a0=a.I("button","primary","Add the senders")
a0.type="submit"
a0.disabled=a.e
d.append(a0)
d.addEventListener("submit",A.bk(new A.qG(e,a,c)))
a4.append(d)}a5.append(a4)},
kN(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.W("div","details"),d=new A.aa(Date.now(),0,!1).F(),c=f.a,b=A.LD(a,a0,c.ch,d)
if(b==null){e.append(f.I("p","quiet","This transaction is no longer in the ledger."))
return e}s=f.V("dl")
for(d=b.length,r=0;r<b.length;b.length===d||(0,A.m)(b),++r){q=b[r]
p=q.b
if(p.length===0)continue
s.append(f.L("dt",q.a))
s.append(f.L("dd",p))}e.append(s)
d=a.b.a.h(0,a0)
d.toString
if(!c.CW)return e
o=new A.rG(f)
n=f.W("div","filing")
c=d.d
if(c===B.n||c===B.w){m={}
l=a.gcD().h(0,d.b)
c=A.a6(a.d,t.N,t.G).gS()
q=A.p(c)
k=q.i("o<i.E>")
j=A.D(new A.o(c,q.i("k(i.E)").a(new A.rB(l)),k),k.i("i.E"))
B.a.E(j,new A.rC())
i=d.Q
m.a=i==null?"":i
c=A.c([B.dY],t.I)
for(q=j.length,r=0;r<j.length;j.length===q||(0,A.m)(j),++r){h=j[r]
c.push(new A.r(h.a,h.c))}n.append(f.aR(c,m.a,new A.rD(m)))
n.append(f.ao("Change category",new A.rE(m,f,o,d)))}g=A.z(A.z(v.G.document).createElement("input"))
g.type="text"
c=d.db
if(c==null)c=""
g.value=c
g.placeholder="A note"
n.append(g)
n.append(f.ao("Save the note",new A.rF(f,o,d,g)))
e.append(n)
return e},
jb(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="section",b2="quiet",b3="text"
b4.append(b0.c5())
s=b0.a
r=s.at
r.toString
q=b0.w
p=new A.aa(Date.now(),0,!1).F()
o=A.Lq(r,q,s.ch,p)
n=s.CW
m=new A.pF(b0)
l=new A.pE()
k=b0.V(b1)
s=o.c
k.append(b0.L("h2","Budgets, "+o.b+" ("+s+")"))
q=o.e
if(q.length!==0){k.append(b0.I("p",b2,q))
k.append(b0.I("p","quiet small",o.a))}q=o.d
if(q.length===0)k.append(b0.I("p",b2,"No budget is set for this book."))
if(q.length!==0){p=t.s
j=A.c(["Category","Budget","Spent","Left","Heading for"],p)
if(n)j.push("Change")
i=b0.aF(j,B.dp)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.m)(q),++h){g=q[h]
f=g.r?" (over)":""
e=g.w?" (over)":""
d=b0.ba(A.c([g.b+f,g.c,g.d,g.e,g.f+e],p),B.dp)
if(n){c=l.$2$placeholder(b3,"New amount")
f=b0.W("td","filing")
f.append(c)
f.append(b0.ao("Set",new A.pw(b0,m,g,c)))
f.append(b0.ao("Remove",new A.px(b0,m,g)))
d.append(f)}A.aS(i.querySelector("tbody")).append(d)}k.append(i)}b4.append(k)
q=o.f
if(q.length!==0){b=b0.V(b1)
b.append(b0.L("h2","Proposed budgets"))
b.append(b0.I("p",b2,"From the complete months among the last three; a month without its statements is left out."))
p=t.s
j=A.c(["Category","Proposed","Based on"],p)
if(n)j.push("")
i=b0.aF(j,B.dm)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.m)(q),++h){a=q[h]
d=b0.ba(A.c([a.b,a.c,a.e],p),B.dm)
if(n){a0=B.O.by(a.d/100,2)
f=b0.V("td")
f.append(b0.ao("Set this budget",new A.py(b0,m,a,a0)))
d.append(f)}A.aS(i.querySelector("tbody")).append(d)}b.append(i)
b4.append(b)}a1=b0.V(b1)
q=o.r
a1.append(b0.L("h2","Savings goals ("+q.length+")"))
if(q.length===0)a1.append(b0.I("p",b2,"No goal yet."))
if(q.length!==0){p=t.s
j=A.c(["Goal","Target","By","Saved","Left","A month","State"],p)
if(n)j.push("")
i=b0.aF(j,B.dr)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.m)(q),++h){a2=q[h]
d=b0.ba(A.c([a2.a.b,a2.b,a2.c,a2.d,a2.e,a2.f,a2.r],p),B.dr)
if(n){f=b0.V("td")
f.append(b0.ao("Remove",new A.pz(b0,m,a2)))
d.append(f)}A.aS(i.querySelector("tbody")).append(d)}a1.append(i)}if(n){a3={}
a4=l.$2$placeholder(b3,"Like Emergency fund")
a5=l.$2$placeholder(b3,"Like 10000")
a6=l.$1("date")
a3.a=""
r=r.gK().gS()
q=A.p(r)
p=q.i("o<i.E>")
a7=A.D(new A.o(r,q.i("k(i.E)").a(new A.pA(b0)),p),p.i("i.E"))
B.a.E(a7,new A.pB())
a8=b0.W("form","edit")
a8.append(b0.al("Goal",a4))
a8.append(b0.al("Target ("+s+")",a5))
a8.append(b0.al("By",a6))
s=A.c([B.lz],t.I)
for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,A.m)(a7),++h){a9=a7[h]
s.push(new A.r(a9.a,A.c9(a9)))}a8.append(b0.al("Counted on",b0.aR(s,"",new A.pC(a3))))
s=b0.I("button","primary","Add the goal")
s.type="submit"
s.disabled=b0.e
a8.append(s)
a8.addEventListener("submit",A.bk(new A.pD(a3,b0,m,a4,a5,o,a6)))
a1.append(a8)}b4.append(a1)},
jt(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={},d=a2.b,c=d.c,b=d.b+"|"+c.b,a=f.W("div","filing"),a0=f.a,a1=a0.cy
if(a0.gcT().length===0)a1.ap(0)
if(a1.v(0,b)){a.append(f.I("span","quiet","Sent, waiting for the phone"))
return a}s=new A.rd(f,a2)
r=a2.c
q={}
q.a=null
if(r!=null){q.a=r
a.append(f.b0("File as "+A.j(a2.d),new A.r7(q,f,s,d),"primary"))}p=c===B.j?B.jn:B.km
e.a=e.b=null
o=f.dx.h(0,b)
if(o==null)o=new A.r(B.a.ga0(p),null)
n=e.b=o.a
e.a=o.b
m=a0.at.gcD().h(0,f.w)
c=A.a6(a0.at.d,t.N,t.G).gS()
a0=A.p(c)
a1=a0.i("o<i.E>")
l=A.D(new A.o(c,a0.i("k(i.E)").a(new A.r8(m)),a1),a1.i("i.E"))
B.a.E(l,new A.r9())
k=n===B.n||n===B.w
c=t.I
a0=A.c([],c)
for(a1=p.length,j=0;j<a1;++j){i=p[j]
h=B.ay.h(0,i)
h.toString
a0.push(new A.r(i.b,h))}a.append(f.aR(a0,e.b.b,new A.ra(e,f,b)))
if(k){c=A.c([B.dY],c)
for(a0=l.length,j=0;j<l.length;l.length===a0||(0,A.m)(l),++j){g=l[j]
c.push(new A.r(g.a,g.c))}a0=e.a
if(a0==null)a0=""
a.append(f.aR(c,a0,new A.rb(e,f,b)))}c=k&&e.a==null
a.append(f.ee("File",new A.rc(e,f,s,d,k),c))
return a},
eD(a){var s,r=this,q=r.gc7()*12+r.gc6()-1+a,p=B.d.u(q,12),o=B.d.T(q,12)+1
if(p<=A.aB(new A.aa(Date.now(),0,!1).F(),B.q).a)s=p===A.aB(new A.aa(Date.now(),0,!1).F(),B.q).a&&o>A.aB(new A.aa(Date.now(),0,!1).F(),B.q).b
else s=!0
if(s)return
r.Q=p
r.as=o
r.ae()},
dG(a,b,c,d){var s=this,r=s.W("div",d?"row figure":"row")
r.append(s.L("span",a))
r.append(s.I("span","amount",b))
if(c!=null&&c.length!==0)r.append(s.L("small",c))
return r},
fN(a,b,c){return this.dG(a,b,c,!1)},
ja(a){var s=this,r=s.V("section")
r.append(s.L("h2","This browser"))
r.append(s.I("p","quiet","Approved on the phone and kept joined until you forget it here or remove it on the phone (Settings, Devices). Each change you send is checked by the phone before it keeps it."))
r.append(s.b0("Forget this browser",new A.pq(s),"danger"))
a.append(r)},
jm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.V("section")
e.append(f.L("h2","Setup checklist"))
s=f.a
if(!s.CW)e.append(f.I("p","quiet","Read-only. Turn on Allow changes to tick items here."))
for(r=s.c.e,q=r.length,p=v.G,o=0;o<r.length;r.length===q||(0,A.m)(r),++o){n=r[o]
e.append(f.L("h3",n.b))
for(m=n.c,l=m.length,k=0;k<m.length;m.length===l||(0,A.m)(m),++k){j=m[k]
i=A.z(A.z(p.document).createElement("input"))
i.type="checkbox"
i.checked=s.hi(n,j)
h=!s.CW||f.e
i.disabled=h
i.addEventListener("change",A.bk(new A.qI(f,n,j)))
g=f.W("label","tick")
g.append(i)
g.append(A.z(A.z(p.document).createTextNode(" "+j.b)))
if(s.mh(n,j))g.append(f.L("small"," waiting for the phone"))
e.append(g)}}a.append(e)},
ji(a){var s,r,q,p,o,n=this,m=n.a.gmz(),l=n.V("form"),k=v.G,j=A.z(A.z(k.document).createElement("select"))
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.m)(m),++r){q=m[r]
p=A.z(A.z(k.document).createElement("option"))
p.value=q.a
p.textContent=q.b
j.append(p)}o=A.z(A.z(k.document).createElement("input"))
o.type="password"
o.autocomplete="off"
o.required=!0
l.append(j)
l.append(o)
k=n.L("button","Seal and send to the phone")
k.type="submit"
s=n.e||m.length===0
k.disabled=s
l.append(k)
l.addEventListener("submit",A.bk(new A.qn(n,o,j)))
k=n.V("section")
k.append(n.L("h2","Statement password"))
k.append(n.I("p","quiet","Sealed in this browser to the phone's backup key, so only the phone opens it. It is never shown here."))
k.append(l)
a.append(k)}}
A.rI.prototype={
$1(a){return t.sn.a(a).b===this.a},
$S:184}
A.rJ.prototype={
$1(a){return this.a.iH(A.z(a))},
$S:13}
A.rK.prototype={
$1(a){A.z(a)
return this.a.a.cI()},
$S:13}
A.rL.prototype={
$1(a){t.hz.a(a)
return this.a.k0()},
$S:185}
A.pi.prototype={
$0(){return this.a.a.bM(this.b)},
$S:5}
A.po.prototype={
$1(a){A.z(a)
return this.a.$0()},
$S:13}
A.rM.prototype={
$0(){var s=this.a
s.a.ch=this.b
s.ae()},
$S:0}
A.rN.prototype={
$0(){var s=this.a,r=s.a,q=this.b,p=q.a
if(r===p.CW)return
if(r&&!A.cK(A.z(v.G.window).confirm("Allow changes from this tab? What you send goes to the phone, which checks each change before it keeps it.")))return
p.CW=s.a
q.ae()},
$S:0}
A.rO.prototype={
$0(){var s=this.a
s.a.CW=!1
s.ae()},
$S:0}
A.rP.prototype={
$0(){var s=this.a
s.ah(t.U.a(s.a.gf3()))
return null},
$S:0}
A.rQ.prototype={
$0(){var s=this.a,r=s.ax,q=this.b
if(r.v(0,q))r.Y(0,q)
else r.m(0,q)
s.ae()},
$S:0}
A.rR.prototype={
$0(){var s=this.a
s.at=this.b
s.ae()},
$S:0}
A.q3.prototype={
$1(a){var s,r
A.z(a).preventDefault()
s=this.b
r=A.d(s.value)
s.value=""
s=this.a
s.ah(t.U.a(new A.q2(s,r)))},
$S:14}
A.q2.prototype={
$0(){var s=v.G
return this.a.a.de(0,this.b,A.Ln(A.d(A.z(A.z(s.window).navigator).userAgent),A.d(A.z(A.z(s.window).location).hostname)))},
$S:5}
A.qh.prototype={
$2(a,b){return A.aM(A.a3(A.ah(B.O.by(b,2)),this.a.a),!1)},
$S:60}
A.qk.prototype={
$1(a){var s,r,q,p=this.a,o=a.a,n=o.b,m=p.W("details","health-group "+n),l=p.V("summary")
switch(o.a){case 0:s="Critical"
break
case 1:s="Action required"
break
case 2:s="For information"
break
default:s=null}l.append(p.I("span","badge "+n,s))
l.append(p.L("strong",a.b))
m.append(l)
m.append(p.I("p","quiet",a.c))
r=p.W("ul","items")
for(n=a.d,l=n.length,q=0;q<n.length;n.length===l||(0,A.m)(n),++q){s=n[q]
r.append(p.L("li",s.a+": "+s.b))}m.append(r)
o=o===B.bw?"Open Loans & debt":"Open Accounts"
m.append(p.ao(o,new A.ql(p,a)))
return m},
$S:189}
A.ql.prototype={
$0(){var s=this.a
s.at=this.b.a===B.bw?B.cp:B.ed
s.ae()
return null},
$S:0}
A.qi.prototype={
$0(){var s=this.a
s.at=B.cp
s.ae()
return null},
$S:0}
A.qj.prototype={
$0(){return this.a.eD(-1)},
$S:0}
A.pj.prototype={
$0(){var s=this.a
s.w=this.b
s.ae()},
$S:0}
A.pk.prototype={
$0(){var s=this.a
s.ah(t.U.a(s.a.gf3()))
return null},
$S:0}
A.pl.prototype={
$0(){return this.a.eD(-1)},
$S:0}
A.pm.prototype={
$0(){return this.a.eD(1)},
$S:0}
A.pn.prototype={
$0(){var s=this.a
s.x=this.b
s.ae()},
$S:0}
A.pp.prototype={
$1(a){var s,r
A.z(a)
s=this.a
r=this.b.a
s.ay=s.ay===r?null:r
s.ae()},
$S:14}
A.qc.prototype={
$1(a){return A.d(a)!=="outstanding balance"},
$S:6}
A.qd.prototype={
$2(a,b){var s=t.eY,r=s.a(a).a.e
s=B.b.l(r,s.a(b).a.e)
return s*(r==="SGD"?-1:1)},
$S:76}
A.qe.prototype={
$0(){var s=this.a
s.ah(t.U.a(new A.qb(s,this.b)))
return null},
$S:0}
A.qb.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.t(p.a.kW(o.b.bi(o.d)),$async$$0)
case 2:o=b
p.r=o==null?u.F:o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qf.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qg.prototype={
$0(){var s=this.b
s.ah(t.U.a(new A.qa(this.a,s,this.c)))
return null},
$S:0}
A.qa.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.b
o=q.c
s=2
return A.t(p.a.ml(o.b.bi(o.d),q.a.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The loan follows this statement row after the phone's next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rv.prototype={
$4$placeholder(a,b,c,d){var s=A.z(A.z(v.G.document).createElement("input"))
s.type=b
s.value=c
if(d!=null)s.placeholder=d
this.b.append(this.a.al(a,s))
return s},
$3(a,b,c){return this.$4$placeholder(a,b,c,null)},
$S:191}
A.rw.prototype={
$3(a,b,c){var s=this.a,r=s.aR(t.DX.a(b),c,new A.rx())
this.b.append(s.al(a,r))
return r},
$S:192}
A.rx.prototype={
$1(a){},
$S:3}
A.rr.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s===B.M||s===B.Q||a.a===this.a.w},
$S:2}
A.rs.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.ru.prototype={
$1(a){return A.Ag(a)},
$S:58}
A.rt.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.z(a).preventDefault()
s=h.b
r=A.c([s],t.sL)
q=h.c
if(q!=null)r.push(q)
if(B.a.N(r,new A.rp())){s=h.a
s.r="Not sent: enter dates like 17/11/2026."
s.ae()
return}r=h.d
r=A.d(r.value).length===0?null:A.ai(B.bL,A.d(r.value),t.gd)
p=A.d(h.e.value)
o=A.d(h.f.value)
n=A.d(h.r.value)
m=A.d(h.w.value)
l=h.x
s=l.$1(A.d(s.value))
k=A.d(h.y.value)
j=h.z
j=A.d(j.value).length===0?null:A.d(j.value)
i=h.a
i.ah(t.U.a(new A.rq(i,h.Q,new A.jl([k,o,j,n,s,m,p,r]),h.as,h.at,l,q,h.ax,h.ay)))},
$S:14}
A.rp.prototype={
$1(a){A.z(a)
return B.b.H(A.d(a.value)).length!==0&&A.Ag(A.d(a.value))==null},
$S:193}
A.rq.prototype={
$0(){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:k=p.b
s=k!=null?3:4
break
case 3:o=p.a
s=5
return A.t(o.a.mV(k,p.c),$async$$0)
case 5:n=b
o.r=n==null?"Sent. The phone changes "+k.b+" on its next sync.":n
s=1
break
case 4:k=p.d
o=A.L(k)
m=A.aN(new A.o(k,o.i("k(1)").a(new A.ro(p.e)),o.i("o<1>")),t.hS)
l=p.f.$1(A.d(p.r.value))
o=p.a
s=m==null||l==null?6:8
break
case 6:k="Not sent: pick the bank and the date to track from."
s=7
break
case 8:k=A.d(p.w.value)
n=A.d(p.x.value)
s=9
return A.t(o.a.kY(m,o.w,n,k,l,p.c),$async$$0)
case 9:k=b
if(k==null)k=u.F
case 7:o.r=k
case 1:return A.H(q,r)}})
return A.I($async$$0,r)},
$S:5}
A.ro.prototype={
$1(a){return t.hS.a(a).a===A.d(this.a.value)},
$S:194}
A.ry.prototype={
$1(a){A.z(a)
return this.a.$1(A.d(this.b.value))},
$S:13}
A.rf.prototype={
$1(a){A.z(a)
return this.a.$1(A.d(this.b.value))},
$S:13}
A.r4.prototype={
$1(a){var s=this.a
s.CW=a
s.ae()},
$S:195}
A.qR.prototype={
$1(a){return t.b.a(a).r===this.a.w},
$S:2}
A.qS.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.qT.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:52}
A.r3.prototype={
$2(a,b){var s,r
t.oo.a(b)
s=A.Ag(a)
if(B.b.H(a).length!==0&&s==null){r=this.a
r.r="Enter dates like 17/11/2026."
r.ae()
return}this.b.$1(b.$1(s))},
$S:197}
A.qW.prototype={
$1(a){return this.b.$1(this.a.CW.lm(a))},
$S:3}
A.qX.prototype={
$1(a){return this.b.$1(this.a.CW.le(new A.qQ(a)))},
$S:3}
A.qQ.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:57}
A.qY.prototype={
$1(a){return this.b.$2(a,new A.qP(this.a))},
$S:3}
A.qP.prototype={
$1(a){return this.a.CW.li(new A.qM(a))},
$S:54}
A.qM.prototype={
$0(){return this.a},
$S:56}
A.qZ.prototype={
$1(a){return this.b.$2(a,new A.qO(this.a))},
$S:3}
A.qO.prototype={
$1(a){return this.a.CW.ln(new A.qL(a))},
$S:54}
A.qL.prototype={
$0(){return this.a},
$S:56}
A.r_.prototype={
$1(a){return this.b.$1(this.a.CW.ll(A.ai(B.dG,a,t.qx)))},
$S:3}
A.r0.prototype={
$1(a){return this.b.$1(this.a.CW.lg(new A.qN(a)))},
$S:3}
A.qN.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:57}
A.r1.prototype={
$1(a){return this.b.$1(this.a.CW.lk(A.ai(B.dJ,a,t.ib)))},
$S:3}
A.r2.prototype={
$1(a){var s,r
A.z(a)
s=this.a
r=this.b.a
s.ch=s.ch===r?null:r
s.ae()},
$S:14}
A.qU.prototype={
$0(){return this.b.$1(this.a.CW.h8(this.c.c-1))},
$S:0}
A.qV.prototype={
$0(){return this.b.$1(this.a.CW.h8(this.c.c+1))},
$S:0}
A.pO.prototype={
$0(){var s=this.a
s.ah(t.U.a(new A.pN(s,this.b)))
return null},
$S:0}
A.pN.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.t(p.a.mF(q.b.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The phone removes the draft on its next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.q0.prototype={
$4$placeholder$wide(a,b,c,d){var s,r=this.a,q=this.b,p=q.h(0,a)
if(p==null)p=""
s=r.bo("text",p,new A.q1(a,q),c)
if(d)s.className="wide"
return r.al(b,s)},
$2(a,b){return this.$4$placeholder$wide(a,b,"",!1)},
$3$placeholder(a,b,c){return this.$4$placeholder$wide(a,b,c,!1)},
$3$wide(a,b,c){return this.$4$placeholder$wide(a,b,"",c)},
$S:201}
A.q1.prototype={
$1(a){this.b.j(0,this.a,a)
return a},
$S:3}
A.pP.prototype={
$1(a){this.a.j(0,"customer",a)
return a},
$S:3}
A.pQ.prototype={
$1(a){this.b.j(0,"d"+this.a,a)
return a},
$S:3}
A.pT.prototype={
$1(a){this.b.j(0,"q"+this.a,a)
return a},
$S:3}
A.pU.prototype={
$1(a){this.b.j(0,"p"+this.a,a)
return a},
$S:3}
A.pV.prototype={
$1(a){this.b.j(0,"g"+this.a,a)
return a},
$S:3}
A.pW.prototype={
$0(){var s=this.a;++s.cy
s.ae()},
$S:0}
A.pX.prototype={
$0(){var s=this.a
s.ah(t.U.a(new A.pM(s,this.b,this.c)))
return null},
$S:0}
A.pM.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$0=A.K(function(a,a0){if(a===1)return A.G(a0,r)
for(;;)switch(s){case 0:e=q.a
d=e.w
c=q.b
b=c.h(0,"customer")
b.toString
p=c.h(0,"date")
p=A.Ag(p==null?"":p)
o=c.h(0,"reference")
if(o==null)o=""
n=c.h(0,"note")
if(n==null)n=""
m=A.c([],t.sG)
for(l=q.c.b,k=0;k<e.cy;++k){j=""+k
i=c.h(0,"d"+j)
if(i==null)i=""
h=c.h(0,"q"+j)
if(h==null)h=""
g=c.h(0,"p"+j)
if(g==null)g=""
if(l){j=c.h(0,"g"+j)
if(j==null)j="standard"}else j=null
m.push(new A.eI([i,h,g,j]))}s=2
return A.t(e.a.hR(d,b,p,m,n,o),$async$$0)
case 2:f=a0
d=f==null
e.r=d?"Sent. The draft shows on the phone after its next sync; issue it there.":f
if(d){c.ap(0)
e.cy=3}return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.pY.prototype={
$1(a){var s
A.z(a)
s=B.b.H(A.d(this.a.value))
this.b.j(0,"address",s)
return s},
$S:202}
A.pZ.prototype={
$1(a){this.a.j(0,"name",a)
return a},
$S:3}
A.q_.prototype={
$1(a){this.a.j(0,"attention",a)
return a},
$S:3}
A.pR.prototype={
$1(a){this.a.j(0,"paymentDays",a)
return a},
$S:3}
A.pS.prototype={
$0(){var s=this.a
s.ah(t.U.a(new A.pL(s,this.b)))
return null},
$S:0}
A.pL.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=t.N
o=A.kS(q.b,o,o)
o.j(0,"bookId",p.w)
s=2
return A.t(p.a.hS(B.a4,o),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The customer shows after the phone's next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qJ.prototype={
$0(){var s=this.a,r=s.w,q=s.gc7(),p=s.gc6(),o=s.a
return A.LA(this.b,r,o.c.c,o.ch,p,s.x,q)},
$S:203}
A.qK.prototype={
$1(a){return A.d(a).length!==0},
$S:6}
A.qo.prototype={
$1(a){var s=this.a
s.y=a
s.z=25
s.ae()},
$S:3}
A.qp.prototype={
$0(){var s=this.a
s.z+=25
s.ae()},
$S:0}
A.pH.prototype={
$0(){var s=this.a,r=s.w,q=s.a,p=new A.aa(Date.now(),0,!1).F()
return A.Ls(this.b,r,q.c.c,q.ch,p,s.x)},
$S:204}
A.pK.prototype={
$1(a){return A.aM(A.a3(A.ah(B.O.by(a,2)),this.a.a),!1)},
$S:65}
A.pI.prototype={
$3(a,b,c){return a+" \xb7 "+b+" "+A.j(this.a.$1(c))},
$S:205}
A.pJ.prototype={
$2(a,b){return a+" \xb7 "+A.j(this.a.$1(b))},
$S:60}
A.q5.prototype={
$2(a,b){var s=t.P
return B.b.l(s.a(a).c,s.a(b).c)},
$S:206}
A.q6.prototype={
$1(a){return this.a.a=a},
$S:3}
A.q7.prototype={
$0(){var s=this.b
s.db=new A.r(A.ai(B.ab,this.a.a,t.P),null)
s.ae()},
$S:0}
A.q8.prototype={
$0(){var s=this.a,r=this.b.d
r.toString
s.db=new A.r(r,this.c)
s.ae()},
$S:0}
A.q9.prototype={
$0(){if(!A.cK(A.z(v.G.window).confirm("Remove this "+this.b.a.toLowerCase()+" record on the phone?")))return
var s=this.a
s.ah(t.U.a(new A.q4(s,this.c)))},
$S:0}
A.q4.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.t(p.a.mG(q.b),$async$$0)
case 2:o=b
p.r=o==null?u.m:o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rn.prototype={
$1(a){var s,r=this.a,q=r==null?null:r.c.h(0,a.a)
A:{if(q==null){r=""
break A}if(t.f.b(q)){r=a.c===B.u
s=q}else{s=null
r=!1}if(r){r=A.j(s.h(0,"amount"))+" "+A.j(s.h(0,"currency"))
break A}if(!0===q){r="yes"
break A}r=A.j(q)
break A}return r},
$S:207}
A.rh.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.ri.prototype={
$1(a){return this.a.a=a},
$S:3}
A.rj.prototype={
$0(){return this.a.a},
$S:21}
A.rk.prototype={
$0(){return A.d(this.a.value)},
$S:21}
A.rl.prototype={
$0(){var s=this.a
s.db=null
s.ae()},
$S:0}
A.rm.prototype={
$1(a){var s,r=this
A.z(a).preventDefault()
s=r.a
s.ah(t.U.a(new A.rg(s,r.b,r.c,r.d)))},
$S:14}
A.rg.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:m=q.a
l=t.N
l=A.w(l,l)
for(p=q.c,p=new A.ac(p,A.p(p).i("ac<1,2>")).gB(0);p.n();){o=p.d
l.j(0,o.a,o.b.$0())}s=2
return A.t(m.a.fe(q.b,l,q.d),$async$$0)
case 2:n=b
l=n==null
m.r=l?"Sent. The phone keeps it on its next sync.":n
if(l)m.db=null
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qx.prototype={
$2(a,b){var s=this.a
s.ah(t.U.a(new A.qy(s,t.AI.a(a),b)))
return null},
$S:208}
A.qy.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.t(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=q.c
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qs.prototype={
$2(a,b){return A.R(a)+t.CU.a(b).b},
$S:209}
A.qt.prototype={
$1(a){return t.di.a(a).c>0},
$S:210}
A.qu.prototype={
$0(){return this.b.$2(this.a.a.glY(),"Sent. The phone files them on its next sync.")},
$S:0}
A.qv.prototype={
$0(){return this.b.$2(new A.qr(this.a,this.c),"Sent. The phone confirms it on its next sync.")},
$S:0}
A.qr.prototype={
$0(){return this.a.a.lc(this.b.a)},
$S:10}
A.qw.prototype={
$0(){return this.b.$2(new A.qq(this.a,this.c),u.m)},
$S:0}
A.qq.prototype={
$0(){return this.a.a.mH(this.b.a)},
$S:10}
A.ph.prototype={
$3$placeholder(a,b,c){var s=A.z(A.z(v.G.document).createElement("input"))
s.type="text"
s.value=b
if(c!=null)s.placeholder=c
this.b.append(this.a.al(a,s))
return s},
$2(a,b){return this.$3$placeholder(a,b,null)},
$S:212}
A.pg.prototype={
$1(a){var s,r=this
A.z(a).preventDefault()
s=r.a
s.ah(t.U.a(new A.pf(s,r.b,r.c,r.d,r.e,r.f,r.r,r.w)))},
$S:14}
A.pf.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
n=A.d(q.c.value)
m=A.d(q.d.value)
l=A.d(q.e.value)
s=2
return A.t(p.a.lM(o,n,A.d(q.f.value),m,l,A.d(q.r.value),A.d(q.w.value)),$async$$0)
case 2:l=b
p.r=l==null?"Sent. The phone changes "+o.b+" on its next sync.":l
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qB.prototype={
$2(a,b){var s=t.z9
return B.b.l(s.a(a).a,s.a(b).a)},
$S:213}
A.qC.prototype={
$2(a,b){var s=t.c5
return B.b.l(s.a(a).a,s.a(b).a)},
$S:71}
A.qD.prototype={
$0(){var s=this.a
s.ah(t.U.a(new A.qA(s,this.b)))
return null},
$S:0}
A.qA.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.t(p.a.mI(o),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone removes "+o.a+" on its next sync.":n
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qE.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qF.prototype={
$1(a){return this.a.b=a},
$S:3}
A.qG.prototype={
$1(a){var s
A.z(a).preventDefault()
s=this.b
s.ah(t.U.a(new A.qz(this.a,s,this.c)))},
$S:14}
A.qz.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.b
o=A.d(q.c.value)
n=q.a
m=A.ai(B.bM,n.a,t.in)
n=n.b
if(n.length===0)n=null
s=2
return A.t(p.a.hU(o,m,n),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone keeps those senders' SMS after its next sync and opening.":n
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rG.prototype={
$1(a){var s=this.a
s.ah(t.U.a(new A.rH(s,t.AI.a(a))))
return null},
$S:33}
A.rH.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.t(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=u.L
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rB.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:74}
A.rC.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:52}
A.rD.prototype={
$1(a){return this.a.a=a},
$S:3}
A.rE.prototype={
$0(){var s=this,r=s.a
if(r.a.length!==0)s.c.$1(new A.rA(r,s.b,s.d))},
$S:0}
A.rA.prototype={
$0(){return this.b.a.l8(this.c,this.a.a)},
$S:10}
A.rF.prototype={
$0(){var s=this
return s.b.$1(new A.rz(s.a,s.c,s.d))},
$S:0}
A.rz.prototype={
$0(){return this.a.a.hT(this.b,A.d(this.c.value))},
$S:10}
A.pF.prototype={
$1(a){var s=this.a
s.ah(t.U.a(new A.pG(s,t.AI.a(a))))
return null},
$S:33}
A.pG.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.t(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=u.L
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.pE.prototype={
$3$placeholder$value(a,b,c){var s=A.z(A.z(v.G.document).createElement("input"))
s.type=a
s.placeholder=b
s.value=c
return s},
$1(a){return this.$3$placeholder$value(a,"","")},
$2$placeholder(a,b){return this.$3$placeholder$value(a,b,"")},
$S:216}
A.pw.prototype={
$0(){var s=this
return s.b.$1(new A.pv(s.a,s.c,s.d))},
$S:0}
A.pv.prototype={
$0(){var s=this.a
return s.a.e9(s.w,this.b.a,A.d(this.c.value))},
$S:10}
A.px.prototype={
$0(){return this.b.$1(new A.pu(this.a,this.c))},
$S:0}
A.pu.prototype={
$0(){var s=this.a
return s.a.e9(s.w,this.b.a,null)},
$S:10}
A.py.prototype={
$0(){var s=this
return s.b.$1(new A.pt(s.a,s.c,s.d))},
$S:0}
A.pt.prototype={
$0(){var s=this.a
return s.a.e9(s.w,this.b.a,this.c)},
$S:10}
A.pz.prototype={
$0(){return this.b.$1(new A.ps(this.a,this.c))},
$S:0}
A.ps.prototype={
$0(){return this.a.a.mE(this.b.a)},
$S:10}
A.pA.prototype={
$1(a){var s
t.b.a(a)
if(a.r===this.a.w){s=a.d
s=!(s===B.y||s===B.o)}else s=!1
return s},
$S:2}
A.pB.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.pC.prototype={
$1(a){return this.a.a=a},
$S:3}
A.pD.prototype={
$1(a){var s=this
A.z(a).preventDefault()
s.c.$1(new A.pr(s.a,s.b,s.d,s.e,s.f,s.r))},
$S:14}
A.pr.prototype={
$0(){var s=this,r=A.d(s.c.value),q=A.d(s.d.value),p=A.d(s.f.value),o=s.a.a
if(o.length===0)o=null
return s.b.a.kX(r,q,s.e.c,p,o)},
$S:10}
A.rd.prototype={
$1(a){var s=this.a
s.ah(t.U.a(new A.re(s,t.AI.a(a),this.b)))
return null},
$S:33}
A.re.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.t(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p="Sent "+q.c.a+". The phone applies it on its next sync."
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.r7.prototype={
$0(){var s=this
return s.c.$1(new A.r6(s.a,s.b,s.d))},
$S:0}
A.r6.prototype={
$0(){return this.b.a.kV(this.c,this.a.a)},
$S:10}
A.r8.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:74}
A.r9.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:52}
A.ra.prototype={
$1(a){var s=this.b
s.dx.j(0,this.c,new A.r(A.ai(B.at,a,t.v_),this.a.a))
s.ae()},
$S:3}
A.rb.prototype={
$1(a){var s=this.b,r=this.a.b,q=a.length===0?null:a
s.dx.j(0,this.c,new A.r(r,q))
s.ae()},
$S:3}
A.rc.prototype={
$0(){var s=this
return s.c.$1(new A.r5(s.a,s.b,s.d,s.e))},
$S:0}
A.r5.prototype={
$0(){var s=this,r=s.a,q=r.b
r=s.d?r.a:null
return s.b.a.m_(s.c,q,r)},
$S:10}
A.pq.prototype={
$0(){if(!A.cK(A.z(v.G.window).confirm("Forget this browser? The next visit needs the passphrase and the phone again.")))return
var s=this.a
s.ah(t.U.a(s.a.gm3()))},
$S:0}
A.qI.prototype={
$1(a){var s
A.z(a)
s=this.a
s.ah(t.U.a(new A.qH(s,this.b,this.c)))
return null},
$S:13}
A.qH.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=p
s=2
return A.t(p.a.e5(q.b,q.c),$async$$0)
case 2:o.r=b
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qn.prototype={
$1(a){var s,r
A.z(a).preventDefault()
s=this.b
r=A.d(s.value)
s.value=""
s=this.a
s.ah(t.U.a(new A.qm(s,this.c,r)))},
$S:14}
A.qm.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.t(p.a.dq(A.d(q.b.value),q.c),$async$$0)
case 2:o=b
p.r=o==null?"Sealed and sent. The phone keeps it on its next sync; this page cannot show it.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.dl.prototype={}
A.dL.prototype={}
A.kv.prototype={}
A.na.prototype={}
A.w8.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.w9.prototype={
$1(a){var s=A.a6(this.a.d,t.N,t.G).h(0,a)
s=s==null?null:s.c
return A.hC(s==null?a:s)},
$S:11}
A.w6.prototype={
$2(a,b){var s=t.kc
return B.b.l(s.a(a).b,s.a(b).b)},
$S:218}
A.w7.prototype={
$2(a,b){var s=t.y3
return B.b.l(s.a(a).b,s.a(b).b)},
$S:219}
A.l1.prototype={
k(a){return"NoSyncFolder"}}
A.fT.prototype={
cu(a,b){var s=0,r=A.J(t.l3),q,p=this,o,n
var $async$cu=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.t(p.a.$3$headers("GET",a,A.T(["authorization","Bearer "+A.j(p.b.$0())],o,o)),$async$cu)
case 3:n=d
o=n.a
if(o===401)throw A.l(new A.hf())
if(o!==200)throw A.l(A.nM(o,b))
q=n
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$cu,r)},
cY(){var s=0,r=A.J(t.N),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$cY=A.K(function(a,a0){if(a===1)return A.G(a0,r)
for(;;)switch(s){case 0:c=p.d
if(c!=null){q=c
s=1
break}o="SanthIQ/Sync".split("/"),n=o.length,m=t.f,l=t.L,k=t.jS,j=t.N,i=t.z,h="root",g=0
case 3:if(!(g<n)){s=5
break}f=o[g]
e=A.a8(f,"\\","\\\\")
b=l
s=6
return A.t(p.cu(A.jx("https","www.googleapis.com","/drive/v3/files",A.T(["q","name = '"+A.a8(e,"'","\\'")+"' and '"+h+"' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false","fields","files(id)","orderBy","createdTime","pageSize","1"],j,i)),"folder search"),$async$cY)
case 6:e=b.a(a0.b)
d=k.a(m.a(B.z.bh(new A.eK(!1).ct(e,0,null,!0),null)).h(0,"files"))
if(d==null)d=B.aZ
e=J.ar(d)
if(e.ga4(d))throw A.l(new A.l1())
e=m.a(e.ga0(d)).h(0,"id")
e.toString
A.d(e)
case 4:++g,h=e
s=3
break
case 5:q=p.d=h
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$cY,r)},
bj(){var s=0,r=A.J(t.a),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bj=A.K(function(a2,a3){if(a2===1)return A.G(a3,r)
for(;;)switch(s){case 0:s=3
return A.t(p.cY(),$async$bj)
case 3:c=a3
b=p.e
b.ap(0)
o=t.N
n=t.z
m="'"+c+"' in parents and mimeType != 'application/vnd.google-apps.folder' and trashed = false"
l=t.J
k=t.jS
j=t.f
i=null
case 4:h=A.w(o,n)
h.j(0,"q",m)
h.j(0,"fields","nextPageToken, files(id, name)")
h.j(0,"orderBy","createdTime")
h.j(0,"pageSize","1000")
if(i!=null)h.j(0,"pageToken",i)
a=j
a0=B.z
a1=B.R
s=7
return A.t(p.cu(A.jx("https","www.googleapis.com","/drive/v3/files",h),"list"),$async$bj)
case 7:g=a.a(a0.bh(a1.c8(a3.b),null))
h=k.a(g.h(0,"files"))
h=J.dg(h==null?B.aZ:h,l)
f=h.$ti
h=new A.ad(h,h.gq(0),f.i("ad<Q.E>"))
f=f.i("Q.E")
while(h.n()){e=h.d
if(e==null)e=f.a(e)
d=e.h(0,"name")
d.toString
b.aK(A.d(d),new A.ny(e))}i=A.n(g.h(0,"nextPageToken"))
case 5:if(i!=null){s=4
break}case 6:o=A.p(b).i("au<1>")
b=A.D(new A.au(b,o),o.i("i.E"))
q=b
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bj,r)},
bZ(a){var s=0,r=A.J(t.p),q,p=this,o,n
var $async$bZ=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=p.e
s=!n.D(a)?3:4
break
case 3:s=5
return A.t(p.bj(),$async$bZ)
case 5:case 4:o=n.h(0,a)
if(o==null)o=A.h(A.aq("no file "+a))
s=6
return A.t(p.cu(A.jx("https","www.googleapis.com","/drive/v3/files/"+o,A.T(["alt","media"],t.N,t.z)),"download"),$async$bZ)
case 6:q=c.b
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bZ,r)},
c0(a,b){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j
var $async$c0=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:j=p.e
s=!j.D(a)?3:4
break
case 3:s=5
return A.t(p.bj(),$async$c0)
case 5:case 4:if(j.D(a)){s=1
break}s=6
return A.t(p.cY(),$async$c0)
case 6:o=d
n=new A.hr(A.c([],t.eE))
m=t.N
n.m(0,B.E.O("--santhiq-page-boundary-7f3a\r\ncontent-type: application/json; charset=UTF-8\r\n\r\n"+B.z.bc(A.T(["name",a,"parents",A.c([o],t.s)],m,t.K),null)+"\r\n--santhiq-page-boundary-7f3a\r\ncontent-type: application/octet-stream\r\n\r\n"))
n.m(0,b)
n.m(0,B.E.O("\r\n--santhiq-page-boundary-7f3a--\r\n"))
l=A.jx("https","www.googleapis.com","/upload/drive/v3/files",A.T(["uploadType","multipart","fields","id"],m,t.z))
m=A.kS(A.T(["authorization","Bearer "+A.j(p.b.$0())],m,m),m,m)
m.j(0,"content-type","multipart/related; boundary=santhiq-page-boundary-7f3a")
s=7
return A.t(p.a.$4$body$headers("POST",l,n.f7(),m),$async$c0)
case 7:k=d
m=k.a
if(m===401)throw A.l(new A.hf())
if(m!==200)throw A.l(A.nM(m,"upload"))
m=t.f.a(B.z.bh(B.R.c8(k.b),null)).h(0,"id")
m.toString
j.j(0,a,A.d(m))
case 1:return A.H(q,r)}})
return A.I($async$c0,r)},
$iJ1:1}
A.ny.prototype={
$0(){var s=this.a.h(0,"id")
s.toString
return A.d(s)},
$S:21}
A.da.prototype={}
A.kW.prototype={}
A.ii.prototype={}
A.wb.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wc.prototype={
$1(a){var s,r,q
t.E.a(a)
s=a.e
r=s==null
q=r?a.a:A.c9(s)
s=(r?null:s.d)===B.o&&a.b.a.a.ga7(0)>=0?" (a credit on a loan: check its statement)":""
return new A.da(q+s,A.cs(a.c,this.a),this.b.$1(a.gcU()),a.b.a.a.ga7(0)<0)},
$S:220}
A.nU.prototype={}
A.wa.prototype={
$1(a){return a.a.ck(0)},
$S:221}
A.kn.prototype={}
A.fS.prototype={}
A.fX.prototype={}
A.nV.prototype={}
A.wh.prototype={
$1(a){return A.aM(A.G1(a),this.a)},
$S:30}
A.wg.prototype={
$1(a){var s=this.a.ab.a6(B.a4,a)
s=s==null?null:A.n(s.c.h(0,"name"))
return s==null?"A customer no longer kept":s},
$S:11}
A.wd.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.n(a.c.h(0,"name"))
r.toString
s=A.n(b.c.h(0,"name"))
s.toString
return B.b.l(r,s)},
$S:23}
A.we.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="quantity",a1="unitPrice",a2="currency",a3="is not a supported currency",a4=b.a,a5=b.b,a6=a5.b,a7=A.Fk(a4,a6),a8=a7.a,a9=a5.c,b0=A.n(a9.h(0,"customerId"))
b0.toString
b0=b.c.$1(b0)
a9=A.aA(a9.h(0,"date"))
a9.toString
a9=A.vk(a9)
s=A.c([],t.CP)
for(a4=A.mB(a4,a6),a6=a4.length,r=b.f,q=t.f,p=b.d,o=b.e,n=t.N,m=t.X,l=0;l<a4.length;a4.length===a6||(0,A.m)(a4),++l){k=a4[l].c
j=A.n(k.h(0,"description"))
j.toString
if(typeof k.h(0,a0)=="string"){i=k.h(0,a0)
i.toString
i=A.dr(A.d(i))}else i=a
i=A.j(i)
if(q.b(k.h(0,a1))){h=k.h(0,a1)
h.toString
h=q.a(h).G(0,n,m)
g=h.h(0,"amount")
g.toString
g=A.ah(A.d(g))
h=h.h(0,a2)
h.toString
A.d(h)
f=new A.q(g,h)
e=B.e.h(0,h)
if(e==null)A.h(A.x(h,a2,a3))
if((g.b<=0?0:Math.max(g.gA().b,0))>e)A.h(A.y(h+" allows "+A.j(e)+" decimal places",g.k(0),a))
h=f}else h=a
h.toString
h=A.aM(h,p)
if(typeof k.h(0,a0)=="string"){g=k.h(0,a0)
g.toString
g=A.dr(A.d(g))}else g=a
g.toString
if(q.b(k.h(0,a1))){f=k.h(0,a1)
f.toString
f=q.a(f).G(0,n,m)
d=f.h(0,"amount")
d.toString
d=A.ah(A.d(d))
f=f.h(0,a2)
f.toString
A.d(f)
c=new A.q(d,f)
e=B.e.h(0,f)
if(e==null)A.h(A.x(f,a2,a3))
if((d.b<=0?0:Math.max(d.gA().b,0))>e)A.h(A.y(f+" allows "+A.j(e)+" decimal places",d.k(0),a))
f=c}else f=a
d=f.a
f=f.b
e=B.e.h(0,f)
if(e==null)A.h(A.x(f,a2,a3))
g=o.$1(new A.P(g.a.a_(0,A.aL(new A.P(d.a,d.b-e).aD().aE(0))),g.b).C(0,A.ah("0.5")).cz(0,B.cn).aD().aE(0))
if(r)k=A.n(k.h(0,"gst"))==="zero-rated"?"Zero-rated":"Standard-rated"
else k=""
s.push(new A.kn(j,i,h,g,k))}if(a8==null)a4=a
else{a4=a8.w
a6=a8.gdv()
r=a8.z
a6=A.j(o.$1(a6+r))
r=a8.y!=null?" with GST "+A.j(o.$1(r)):""
r=a4+" \xb7 "+a6+r+" \xb7 due "+A.vk(a8.e)
a4=r}return new A.fS(a5,b0,a9,s,a4,a7.b)},
$S:222}
A.wf.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=m.aJ.c.h(0,"company-invoice:"+l.a),j=k==null?null:A.Fu(m,k).d
m=A.vk(l.d)
s=l.e
r=A.vk(s)
q=n.c
p=l.z
o=q.$1(l.gdv()+p)
q=l.y!=null?q.$1(p):""
if(j===B.bA)s="Paid"
else if(j===B.bz)s="Part paid"
else{p=n.d
s=A.b(p.a,p.b,p.c).l(0,A.b(s.a,s.b,s.c))>0?"Overdue":"Open"}return new A.fX(l,m,r,o,q,s)},
$S:223}
A.dH.prototype={}
A.wo.prototype={
$2(a,b){var s,r,q,p,o,n=A.aN(new A.o(B.ab,t.Ab.a(new A.wp(a)),t.rx),t.P),m=n==null?null:this.a.ab.a6(n,b)
if(m==null)return b
for(s=n.d,r=s.length,q=m.c,p=0;p<r;++p){o=s[p]
if(o.c===B.k&&A.n(q.h(0,o.a))!=null){s=A.n(q.h(0,o.a))
s.toString
return s}}return b},
$S:224}
A.wp.prototype={
$1(a){return t.P.a(a).b===this.a},
$S:39}
A.wq.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c,i=b.a,h=j.h(0,i)
if(h==null)return""
s=b.c
if(B.r===s){r=A.aA(j.h(0,i))
return r==null?A.j(h):A.cs(r,k.a)}if(B.u===s){q=a.aw(i)
return q==null?"":A.aM(q,k.b)}if(B.a3===s){j=k.c.r.a.h(0,A.j(h))
return j==null?A.j(h):A.c9(j)}if(B.ae===s)return A.fC(A.j(h),k.c)
if(B.ap===s)return A.Ap(k.c,A.j(h))
if(B.bq===s){j=A.c([],t.s)
for(i=J.S(t.j.a(h)),p=t.N,o=t.o,n=k.c;i.n();){m=A.j(i.gt())
if(m==="me")m="Me"
else{m=A.a6(n.p3,p,o).h(0,m)
m=m==null?null:m.b
if(m==null)m="someone removed"}j.push(m)}return B.a.Z(j,", ")}if(B.F===s)return k.d.$2(b.f,A.j(h))
if(B.a0===s)return J.a2(h,!0)?"Yes":""
if(B.a6===s)return"\u2022\u2022"+A.j(h)
if(B.N===s){j=A.j(h)
l=A.a8(j,"-"," ")
j=l.length
if(j===0)j=""
else{if(0>=j)return A.a(l,0)
j=l[0].toUpperCase()+B.b.ac(l,1)}return j}if(B.aH===s||B.br===s||B.am===s||B.bs===s||B.aG===s)return"Attached"
if(B.a2===s||B.an===s){j=A.j(h)
l=A.a8(j,"\n",", ")
return l.length>80?B.b.X(l,0,79)+"\u2026":l}if(B.aI===s)return A.j(h)+"%"
return A.j(h)},
$S:225}
A.wn.prototype={
$1(a){return A.Ap(this.a,a)},
$S:11}
A.wm.prototype={
$1(a){return a==null?"":A.cs(a,this.a)},
$S:77}
A.wj.prototype={
$2(a,b){var s=t.ud
s.a(a)
s.a(b)
return B.b.l(a.gcj(),b.gcj())},
$S:227}
A.wk.prototype={
$1(a){return!B.e6.v(0,t.P.a(a))},
$S:39}
A.wl.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.c([],t.e)
for(s=this.b,r=s.d,q=r.length,p=this.a,o=0;o<q;++o){n=r[o]
if(B.a.N(p.a,new A.wi(n)))e.push(n)}r=t.s
q=A.c([],r)
for(m=e.length,o=0;o<e.length;e.length===m||(0,A.m)(e),++o)q.push(e[o].b)
m=A.c([],t.tZ)
for(l=p.a,k=l.length,j=this.c,o=0;o<l.length;l.length===k||(0,A.m)(l),++o){i=l[o]
h=A.c([],r)
for(g=e.length,f=0;f<e.length;e.length===g||(0,A.m)(e),++f)h.push(j.$2(i,e[f]))
m.push(h)}return new A.dH(s.c,q,m,s,p.a)},
$S:94}
A.wi.prototype={
$1(a){return t.u.a(a).c.h(0,this.a.a)!=null},
$S:31}
A.vD.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.t)
for(s=this.a,r=s.b,q=s.c,p=0;p<r.length;++p)if(B.a.N(q,new A.vC(p)))g.push(p)
o=t.s
n=A.c([],o)
for(m=g.length,l=0;l<g.length;g.length===m||(0,A.m)(g),++l){p=g[l]
if(!(p<r.length))return A.a(r,p)
n.push(r[p])}r=A.c([],t.tZ)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.m)(q),++l){k=q[l]
j=A.c([],o)
for(i=g.length,h=0;h<g.length;g.length===i||(0,A.m)(g),++h){p=g[h]
if(!(p<k.length))return A.a(k,p)
j.push(k[p])}r.push(j)}return new A.dH(s.a,n,r,s.d,s.e)},
$S:94}
A.vC.prototype={
$1(a){return J.as(t.a.a(a),this.a).length!==0},
$S:72}
A.kF.prototype={}
A.h2.prototype={}
A.wv.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.ww.prototype={
$1(a){var s=a.as
switch(s==null?null:s.a){case B.bP:s=0
break
case B.b0:s=1
break
case B.bQ:s=2
break
case B.bR:s=3
break
case null:case void 0:s=4
break
default:s=null}return s},
$S:229}
A.ws.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d===B.o},
$S:2}
A.wt.prototype={
$2(a,b){var s,r,q,p=t.b
p.a(a)
p.a(b)
p=this.a
s=B.a.bX(p,a.e)-B.a.bX(p,b.e)
if(s!==0)return s
p=a.CW!=null
if(p!==(b.CW!=null))return p?1:-1
p=this.b
r=p.$1(a)
p=p.$1(b)
if(typeof r!=="number")return r.a8()
if(typeof p!=="number")return A.Ct(p)
q=r-p
return q!==0?q:B.b.l(a.b,b.b)},
$S:8}
A.wu.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a,a2=a.b,a3=a.c,a4=A.FD(a1,a2,a3),a5=a4.c,a6=A.L(a5),a7=A.aN(new A.o(a5,a6.i("k(1)").a(new A.wr(a3)),a6.i("o<1>")),t.pt),a8=a7==null?a0:a7.b
if(a8==null){s=a2.as==null?B.cA:A.Cx(a2,a3).w
A:{if(s instanceof A.ei){r=s.a
q=r
break A}q=a0
break A}a8=q}q=a2.as
p=q==null
o=p?a0:q.r
n=p?a0:q.w
q=n==null
m=q?a0:a1.gK().h(0,n)
a1=A.c9(a2)
p=a4.a
p=p==null||a4.b==null?"":A.j(p)+" of "+A.j(a4.b)+" instalments paid"
if(a8==null)l="Next due unknown: add the payment day"
else{l=A.cs(a8,a3)
l="Next due "+l+" \xb7 "+A.j(o==null?"amount not set":a.d.$1(o))}if(q)q="Not in the forecast: no paying account"
else q="In the forecast from "+(m==null?n:A.c9(m))
k=a4.d
if(k==null)k="Not known yet"
else{k=A.j(a.d.$1(k))
j=a4.e
j=j==null?"":", "+A.cs(j,a3)
j=k+" ("+a4.f+j+")"
k=j}j=A.c([],t.DA)
for(a6=a6.i("aP<1>"),a5=new A.aP(a5,a6),a5=new A.ad(a5,a5.gq(0),a6.i("ad<a5.E>")),i=a.d,a6=a6.i("a5.E");a5.n();){h=a5.d
if(h==null)h=a6.a(h)
g=h.a
f=h.b
e=f.b-1
if(!(e>=0&&e<12))return A.a(B.l,e)
e=B.l[e]
d=f.a
d=d===a3.a?"":" "+d
c=h.c
c=c==null?"":i.$1(c)
b=B.kG.h(0,h.d)
b.toString
h=h.r
h=h==null?"":A.j(i.$1(h))+" still due"
j.push(new A.kF("No. "+g+" \xb7 "+(""+f.c+" "+e+d),c,b,h))}return new A.h2(a2,a1,p,l,q,k,a4.r,j)},
$S:230}
A.wr.prototype={
$1(a){var s=t.pt.a(a).b,r=this.a
return A.b(s.a,s.b,s.c).l(0,A.b(r.a,r.b,r.c))>=0},
$S:99}
A.zp.prototype={
$1(a){return B.b.aa(B.d.k(a),2,"0")},
$S:30}
A.ej.prototype={}
A.lh.prototype={}
A.jU.prototype={}
A.p7.prototype={}
A.wz.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wx.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:95}
A.wy.prototype={
$1(a){return t.iJ.a(a).b},
$S:232}
A.fe.prototype={}
A.ff.prototype={
U(){return"KpiTone."+this.b}}
A.li.prototype={}
A.fW.prototype={
U(){return"HealthLevel."+this.b}}
A.cY.prototype={}
A.ds.prototype={}
A.pc.prototype={}
A.wR.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wB.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:95}
A.x0.prototype={
$1(a){var s
t.Ft.a(a)
s=A.L(a)
return new A.o(a,s.i("k(1)").a(new A.x1()),s.i("o<1>")).a5(0,A.a3($.M(),this.a),new A.x2(),t.B)},
$S:233}
A.x1.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at!=null},
$S:12}
A.x2.prototype={
$2(a,b){var s
t.B.a(a)
s=t.V.a(b).at
s.toString
return a.C(0,s)},
$S:234}
A.wS.prototype={
$1(a){var s
t.Ft.a(a)
s=A.L(a)
return new A.o(a,s.i("k(1)").a(new A.wT()),s.i("o<1>")).gq(0)},
$S:235}
A.wT.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at==null},
$S:12}
A.wP.prototype={
$1(a){return B.a.N(t.Ft.a(a),new A.wQ())},
$S:236}
A.wQ.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at!=null},
$S:12}
A.wU.prototype={
$1(a){var s
t.Ft.a(a)
s=A.L(a)
return new A.c2(new A.o(a,s.i("k(1)").a(new A.wY()),s.i("o<1>")),s.i("B(1)").a(new A.wZ()),s.i("c2<1,B>")).a5(0,null,new A.x_(),t.tF)},
$S:101}
A.wY.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.ax!=null},
$S:12}
A.wZ.prototype={
$1(a){var s=t.V.a(a).ax
s.toString
return s},
$S:85}
A.x_.prototype={
$2(a,b){t.tF.a(a)
t.h.a(b)
return a==null||A.b(b.a,b.b,b.c).l(0,A.b(a.a,a.b,a.c))<0?b:a},
$S:84}
A.wC.prototype={
$1(a){return t.F.a(a).f===this.a},
$S:20}
A.wD.prototype={
$1(a){return t.F.a(a).e==null},
$S:20}
A.wA.prototype={
$1(a){return a==null?"":", oldest statement "+A.cs(a,this.a)},
$S:77}
A.wH.prototype={
$1(a){t.ov.a(a)
return a.a.e===this.a&&a.y.length!==0},
$S:49}
A.wI.prototype={
$2(a,b){var s=t.B
return s.a(a).C(0,s.a(b))},
$S:24}
A.wJ.prototype={
$1(a){return t.F.a(a).r},
$S:20}
A.wK.prototype={
$1(a){return t.F.a(a).r},
$S:20}
A.wL.prototype={
$1(a){return t.F.a(a).r},
$S:20}
A.wM.prototype={
$1(a){return!t.V.a(a).Q},
$S:12}
A.wN.prototype={
$1(a){return t.F.a(a).r},
$S:20}
A.wO.prototype={
$1(a){return t.V.a(a).ax==null},
$S:12}
A.wE.prototype={
$1(a){var s=t.V.a(a).as
s=s==null?null:B.b.ak(s,"No statement since")
return s===!0},
$S:12}
A.wF.prototype={
$1(a){t.V.a(a)
return a.w&&!B.a.v(this.a,a)},
$S:12}
A.wG.prototype={
$1(a){t.V.a(a)
return a.y.length!==0&&!B.a.v(this.a,a)},
$S:12}
A.wV.prototype={
$1(a){var s
t.Ft.a(a)
s=A.L(a)
return new A.aj(a,s.i("B(1)").a(new A.wW()),s.i("aj<1,B>")).a5(0,null,new A.wX(),t.tF)},
$S:101}
A.wW.prototype={
$1(a){var s=t.V.a(a).ax
s.toString
return s},
$S:85}
A.wX.prototype={
$2(a,b){t.tF.a(a)
t.h.a(b)
return a==null||A.b(b.a,b.b,b.c).l(0,A.b(a.a,a.b,a.c))<0?b:a},
$S:84}
A.Ah.prototype={
$0(){var s,r,q,p,o=this,n=o.c,m=A.ED(o.b,n),l=n.d,k=l.c,j=l.b,i=j-1
if(!(i>=0&&i<12))return A.a(B.l,i)
i=B.l[i]
l=l.a
s=o.a
r=A.c9(s.a)
n=n.e==null?"Loan instalment":"Card bill"
q=m==null?null:A.aM(m,o.d)
p=o.e
return new A.ds(""+k+" "+i+" "+l,r,n,q,s.a.e,A.b(l,j,k).l(0,A.b(p.a,p.b,p.c))<0)},
$S:241}
A.ha.prototype={}
A.hf.prototype={
k(a){return"SignInExpired"}}
A.kw.prototype={
k(a){return"Google "+this.b+" failed: HTTP "+this.a}}
A.kx.prototype={
k(a){return"GoogleTookTooLong"}}
A.B7.prototype={
$4$body$headers(a,b,c,d){return this.a.$4$body$headers(A.d(a),t.ya.a(b),t.F5.a(c),t.yz.a(d)).mQ(this.b,new A.B6())},
$2(a,b){return this.$4$body$headers(a,b,null,B.dN)},
$3$headers(a,b,c){return this.$4$body$headers(a,b,null,c)},
$S:81}
A.B6.prototype={
$0(){return A.h(new A.kx())},
$S:82}
A.rS.prototype={}
A.et.prototype={
U(){return"PageStage."+this.b}}
A.l9.prototype={
geF(){var s=this.Q
if(s==null)s=this.Q=new A.rU(this).$0()
return s},
ci(){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ci=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.e.bY()
s=3
return A.t(t.uo.b(h)?h:A.Jm(A.n(h),t.T),$async$ci)
case 3:g=b
if(g==null){s=1
break}p=5
m=t.J.a(B.z.bh(g,null))
h=J.as(m,"ticket")
h.toString
s=8
return A.t(A.nX(t.f.a(h).G(0,t.N,t.X)),$async$ci)
case 8:n.f=b
h=J.as(m,"account")
h.toString
n.r=A.d(h)
l=A.n(J.as(m,"token"))
h=A.n(J.as(m,"tokenUntil"))
k=A.Dl(h==null?"":h)
h=k
j=h==null?null:h.ar(n.b.$0().F())
s=l!=null&&j!=null&&j.a>12e7?9:10
break
case 9:s=11
return A.t(n.bM(new A.hg(l,j)),$async$ci)
case 11:case 10:p=2
s=7
break
case 5:p=4
f=o.pop()
s=12
return A.t(n.cJ(),$async$ci)
case 12:s=7
break
case 4:s=2
break
case 7:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$ci,r)},
cA(){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j
var $async$cA=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:l=p.as
k=p.z
j=p.w
if(l==null||k==null||p.cx!==B.au){s=1
break}s=3
return A.t(l.b.bx(),$async$cA)
case 3:o=b
n=k.a
m=p.y
s=4
return A.t(p.e.cl(B.z.bc(A.T(["ticket",o,"account",n,"token",m,"tokenUntil",j==null?null:j.dg()],t.N,t.X),null)),$async$cA)
case 4:p.x=!0
case 1:return A.H(q,r)}})
return A.I($async$cA,r)},
cJ(){var s=0,r=A.J(t.H),q=this,p
var $async$cJ=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.e.ap(0)
s=2
return A.t(p,$async$cJ)
case 2:q.r=q.f=null
q.cI()
return A.H(null,r)}})
return A.I($async$cJ,r)},
bM(a){return this.i0(t.gc.a(a))},
i0(a){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bM=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ay=null
m=null
p=4
s=7
return A.t(A.xD(n.a,a.a),$async$bM)
case 7:m=c
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.aw(f)
n.ay=A.jD(l)
s=1
break
s=6
break
case 3:s=2
break
case 6:j=m
i=j instanceof A.iK
h=i?j.a:null
if(i){n.ay=A.j(h)+" is a work or school account. Sign in with SanthIQ's own Google account."
s=1
break}s=j instanceof A.iL?8:9
break
case 8:i=n.z
if(i!=null&&i.a!==m.a){n.cI()
n.ay="That is another account than the one this tab was using, so the page started again."
s=1
break}n.y=a.a
n.w=n.b.$0().F().av(a.b.a)
n.z=m
i=n.cx
if(i===B.bT)i=n.cx=B.bU
g=n.f
s=i===B.bU&&g!=null?10:11
break
case 10:s=n.r!==m.a?12:14
break
case 12:i=n.e.ap(0)
s=15
return A.t(i,$async$bM)
case 15:n.f=null
s=13
break
case 14:n.as=A.E_(n.geF(),g)
n.cx=B.bV
s=16
return A.t(n.bH(),$async$bM)
case 16:s=1
break
case 13:case 11:s=n.x?17:18
break
case 17:s=19
return A.t(n.cA(),$async$bM)
case 19:case 18:case 9:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bM,r)},
de(a,b,c){return this.mi(0,b,c)},
mi(a,b,c){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$de=A.K(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.ay=null
if(n.cx!==B.bU){s=1
break}p=4
s=7
return A.t(A.cH(n.geF(),"browser",c,n.b.$0(),b),$async$de)
case 7:m=e
n.as=A.E_(n.geF(),m)
n.cx=B.bV
s=8
return A.t(n.bH(),$async$de)
case 8:p=2
s=6
break
case 4:p=3
j=o.pop()
l=A.aw(j)
n.ay=A.jD(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$de,r)},
bH(){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bH=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:f=n.as
if(f==null||n.cx===B.dR){s=1
break}p=4
s=7
return A.t(f.be(),$async$bH)
case 7:m=b
if(J.jP(m)){if(f.b===n.f)throw A.l(new A.cS())
s=1
break}i=new A.kB(A.w(t.N,t._))
B.a.a2(f.e,i.gkZ())
l=A.It(i)
h=n.z
h.toString
k=A.L7(h,l)
s=k!=null?8:9
break
case 8:s=10
return A.t(n.cJ(),$async$bH)
case 10:n.ay=k
s=1
break
case 9:n.at=l
n.ax=J.D1(m,new A.td(),t.zG).e2(0,new A.te())
n.cx=B.au
n.ay=null
s=!n.x?11:12
break
case 11:s=13
return A.t(n.cA(),$async$bH)
case 13:case 12:p=2
s=6
break
case 4:p=3
e=o.pop()
h=A.aw(e)
s=h instanceof A.cS?14:16
break
case 14:f.cI()
n.at=null
n.cx=B.dR
h=n.e.ap(0)
s=17
return A.t(h,$async$bH)
case 17:n.f=null
n.ay="The phone removed this browser. Close the tab; a new visit can ask to join again."
s=15
break
case 16:j=h
n.ay=A.jD(j)
case 15:s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bH,r)},
gcT(){var s=this.as
s=s==null?null:s.gcT()
return s==null?B.dD:s},
hi(a,b){var s,r,q,p,o,n
for(s=this.gcT(),r=A.L(s).i("aP<1>"),s=new A.aP(s,r),s=new A.ad(s,s.gq(0),r.i("ad<a5.E>")),r=r.i("a5.E"),q=a.a,p=b.a;s.n();){o=s.d
if(o==null)o=r.a(o)
if(o.d==="setup.tick"){n=o.e
n=J.a2(n.h(0,"stepId"),q)&&J.a2(n.h(0,"itemId"),p)}else n=!1
if(n)return J.a2(o.e.h(0,"ticked"),!0)}s=this.at
s=s==null?null:s.p4.a.v(0,new A.r(q,p))
return s===!0},
mh(a,b){return B.a.N(this.gcT(),new A.t7(a,b))},
e5(a,b){return this.mS(a,b)},
mS(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$e5=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:f=n.ez()
if(f!=null){q=f
s=1
break}i=n.as
i.toString
m=i
l=m.b.a
k=m.hp()
p=4
i=a.a
h=b.a
s=7
return A.t(m.c4(A.c([new A.ak("setup:"+i+":"+h+":"+A.j(l)+":"+A.j(k),l,k,"setup.tick",A.T(["stepId",i,"itemId",h,"ticked",!n.hi(a,b)],t.N,t.X),n.b.$0().F())],t.Y)),$async$e5)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.aw(e)
i=A.jD(j)
q=i
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$e5,r)},
gmz(){var s,r,q=this.at
if(q==null)q=null
else{q=q.gK().gS()
s=A.p(q)
r=s.i("o<i.E>")
q=A.D(new A.o(q,s.i("k(i.E)").a(new A.tb()),r),r.i("i.E"))}if(q==null)q=A.c([],t.Q)
B.a.E(q,new A.tc())
return q},
dq(a,b){return this.hV(a,b)},
hV(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$dq=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.ez()
if(h!=null){q=h
s=1
break}k=n.at
m=k.db
if(m==null){q="The phone has not published its backup key yet, so a password cannot be sealed for it."
s=1
break}if(!k.gK().D(a)){q="Pick an account first."
s=1
break}if(b.length===0){q="Type the password first."
s=1
break}p=4
j=n.as
j.toString
s=7
return A.t(j.cp(a,new A.bD(m.a,B.U),n.b.$0().F(),b),$async$dq)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.aw(g)
j=A.jD(l)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$dq,r)},
m_(a,b,c){return this.cB(new A.t6(b,a,c,!0),a)},
kV(a,b){return this.cB(new A.rX(a,b),a)},
lZ(){return this.aB(new A.t5())},
lM(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new A.t4(),d=e.$1(a2)
if(d==null)s=f
else{r=A.C("\\s",!0,!1)
d=A.a8(d,r,"")
s=A.a8(d.toUpperCase(),"*","X")}d=e.$1(a0)
d=d==null?f:d.toUpperCase()
r=t.N
q=t.T
p=A.T(["ifsc",d,"micr",e.$1(a1),"branch",e.$1(c),"numberShown",s],r,q)
d=p.h(0,"ifsc")
o=p.h(0,"micr")
n=A.Fe(p.h(0,"branch"),d,o,p.h(0,"numberShown"))
if(n!=null)return A.aV("Not sent: "+n+".",q)
m=e.$1(a3)==null?f:A.le(B.b.H(a3),f)
if(e.$1(a3)!=null)d=m==null||m<1
else d=!1
if(d)return A.aV("Not sent: the stale window is a whole number of days, at least 1.",q)
l=e.$1(b)
if(l==null)return A.aV("Not sent: an account needs its alias.",q)
k=A.T(["ifsc",a.fr,"micr",a.fx,"branch",a.fy,"numberShown",a.go],r,q)
d=A.w(r,t.X)
if(l!==a.b)d.j(0,"alias",l)
for(r=new A.ac(p,A.p(p).i("ac<1,2>")).gB(0);r.n();){j=r.d
o=j.a
i=k.h(0,o)
h=j.b
if(i!=h)d.j(0,o,h)}if(m!=null&&m!==a.y)d.j(0,"staleAfterDays",m)
g=A.eN(a.lf(l))
if(g!=null)return A.aV("Not sent: "+g+".",q)
return this.aB(new A.t3(this,d,a))},
gmm(){var s,r,q=A.w(t.N,t.hS),p=this.at
p=p==null?null:p.gK().gS()
p=J.S(p==null?B.bN:p)
while(p.n()){s=p.gt()
r=B.a.ga0(s.b.split("-"))
if(r.length!==0&&s.d!==B.x)q.aK(s.c,new A.t9(s,r))}p=q.$ti.i("N<2>")
p=A.D(new A.N(q,p),p.i("i.E"))
B.a.E(p,new A.ta())
return p},
kY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this,k=null,j=l.kK(f,c),i=j.b
if(i!=null)return A.aV("Not sent: "+i+".",t.T)
s=$.jJ()
r=A.c([],t.s)
for(q=0;q<4;++q)r.push(B.b.aa(B.d.bI(s.cP(256),16),2,"0"))
p="acct-"+B.a.cd(r)
r=B.b.H(d)
o=l.at
o=o==null?k:o.gK().gS()
o=A.Nu(o==null?B.bN:o)
if(o==null)o=""
n=A.jQ(k,k,a.b+"-LOAN-"+r,k,b,k,k,c,k,o,p,k,a.a,B.o,j.a,k,k,k,k,k,k,k,k,e,k,k,k)
m=A.eN(n)
if(m!=null)return A.aV("Not sent: "+m+".",t.T)
return l.aB(new A.t_(l,p,n))},
kW(a){var s,r,q=this.at,p=q==null?null:A.Ci(q,a)
if(p==null)return A.aV("Not sent: the card statement no longer lists that loan.",t.T)
s=$.jJ()
q=A.c([],t.s)
for(r=0;r<4;++r)q.push(B.b.aa(B.d.bI(s.cP(256),16),2,"0"))
return this.aB(new A.rY(this,a,p,"acct-"+B.a.cd(q)))},
ml(a,b){var s,r,q=this.at
q.toString
s=A.Ci(q,a)
r=q.gK().h(0,b)
if(s==null||r==null||!B.a.v(A.FB(q,s),r))return A.aV("Not sent: that loan cannot follow this statement row.",t.T)
return this.aB(new A.t8(s,r))},
mV(a,b){var s,r,q,p,o,n,m,l=null,k={}
k.a=null
s=a.as
r=s==null
q=r?l:s.x
p=this.fS(b,a.e,q)
o=k.a=p.a
n=p.b
if(n!=null)return A.aV("Not sent: "+n+".",t.T)
m=A.eN(a.h7(o))
if(m!=null)return A.aV("Not sent: "+m+".",t.T)
q=B.z.bc(o.M(),l)
s=r?l:s.M()
return this.aB(new A.tq(k,this,q===B.z.bc(s==null?B.bO.M():s,l),a))},
fS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=i[2]
if(h!=null){s=this.at
r=s==null?null:s.gK().h(0,h)
if(c!=null)q=(r==null?null:r.d)===B.y
else q=!1
if(r!=null){s=r.d
s=s!==B.M&&s!==B.Q&&!q}else s=!0
if(s)return B.lC}s=i[7]
p=i[6]
o=i[1]
n=i[3]
m=i[5]
l=i[4]
k=A.Ms(c,b,i[0],o,h,n,l,m,p,s)
j=k.b
if(j==null)i=null
else{i=A.C("^[A-Z](?=[a-z])",!0,!1)
s=t.n.a(new A.rV())
A.DP(0,0,j.length,"startIndex")
i=A.Nk(j,i,s,0)}return new A.r(k.a,i)},
kK(a,b){return this.fS(a,b,null)},
hU(a,b,c){var s,r,q="Enter the sender as the phone shows it, like DBS, or a number.",p=B.b.bN(a,A.C("[,\\s]+",!0,!1)),o=A.L(p),n=o.i("o<1>"),m=A.D(new A.o(p,o.i("k(1)").a(new A.tn()),n),n.i("i.E")),l=A.a4(t.N)
for(p=m.length,s=0;s<m.length;m.length===p||(0,A.m)(m),++s){r=A.FS(m[s])
if(r==null){p=new A.an($.al,t.gH)
p.bn(q)
return p}l.m(0,r)}if(l.a===0)return A.aV(q,t.T)
return this.aB(new A.to(l,b,c))},
mI(a){return this.aB(new A.tj(a))},
l8(a,b){if(b===a.Q)return A.aV(u.z,t.T)
return this.aB(new A.t1(this,a,b))},
hT(a,b){var s=B.b.H(b)
if(s.length===0)s=null
if(s==a.db)return A.aV(u.z,t.T)
return this.aB(new A.tm(this,a,s))},
e9(a,b,c){var s,r,q={}
q.a=null
if(c!=null){s=B.b.H(A.a8(c,",",""))
r=A.C("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!r.b.test(s)||A.a3(A.ah(s),"SGD").a.a.ga7(0)<=0)return A.aV("Not sent: a budget is an amount above zero, like 450 or 1200.50.",t.T)
r=this.at
r.toString
r=A.vY(r,a)
q.a=A.a3(A.ah(s),r)}return this.aB(new A.tp(q,a,b,A.aB(this.b.$0().F(),B.q)))},
kX(a,b,c,d,e){var s,r,q,p,o,n,m=null,l=B.b.H(A.a8(b,",","")),k=B.b.H(a)
if(k.length===0)return A.aV("Not sent: a goal needs its name.",t.T)
s=A.C("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!s.b.test(l)||A.a3(A.ah(l),"SGD").a.a.ga7(0)<=0)return A.aV("Not sent: the target is an amount above zero.",t.T)
r=A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1).aj(B.b.H(d))
if(r==null)return A.aV("Not sent: pick the date to reach it by.",t.T)
s=this.b.$0().F()
q=A.a3(A.ah(l),c)
p=r.b
if(1>=p.length)return A.a(p,1)
o=p[1]
o.toString
o=A.Z(o,m,m)
if(2>=p.length)return A.a(p,2)
n=p[2]
n.toString
n=A.Z(n,m,m)
if(3>=p.length)return A.a(p,3)
p=p[3]
p.toString
return this.aB(new A.rZ(new A.iS("goal-"+(1000*s.a+s.b),k,q,new A.B(o,n,A.Z(p,m,m)),e)))},
mE(a){return this.aB(new A.tf(a))},
fe(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1="currency",a2="is not a supported currency"
t.yz.a(a4)
s=t.N
r=t.X
q=A.w(s,r)
for(p=a3.d,o=p.length,n=a5==null,m=0;m<o;++m){l=p[m]
if(!(B.c7.v(0,l.c)&&l.a!=="fromEvent"))k=(n?a0:a5.c.h(0,l.a))!=null
else k=!1
if(k){k=l.a
q.j(0,k,a5.c.h(0,k))}}for(o=A.L(p),o.i("k(1)").a(A.zU()),p=B.a.gB(p),o=new A.O(p,A.zU(),o.i("O<1>"));o.n();){k=p.gt()
j=k.a
i=a4.h(0,j)
h=B.b.H(i==null?"":i)
if(h.length===0)continue
switch(k.c.a){case 5:g=A.C("^([\\d,]+(?:\\.\\d{1,2})?)\\s*([A-Za-z]{3})?$",!0,!1).aj(h)
i=g==null
if(i)f=a0
else{f=g.b
if(2>=f.length)return A.a(f,2)
f=f[2]}if(f==null)f="SGD"
e=f.toUpperCase()
if(i||!B.e.D(e)){s=k.b
r=new A.an($.al,t.gH)
r.bn("Not sent: "+s.toLowerCase()+" is an amount, like 1200.50 or 500 INR.")
return r}k=g.b
if(1>=k.length)return A.a(k,1)
k=k[1]
k.toString
k=A.ah(A.a8(k,",",""))
d=B.e.h(0,e)
if(d==null)A.h(A.x(e,a1,a2))
if((k.b<=0?0:Math.max(k.gA().b,0))>d)A.h(A.y(e+" allows "+A.j(d)+" decimal places",k.k(0),a0))
d=B.e.h(0,e)
if(d==null)A.h(A.x(e,a1,a2))
q.j(0,j,A.T(["amount",k.by(0,d),"currency",e],s,r))
break
case 7:c=A.le(h,a0)
if(c==null){s=k.b
r=new A.an($.al,t.gH)
r.bn("Not sent: "+s.toLowerCase()+" is a whole number.")
return r}q.j(0,j,c)
break
case 20:if(h==="yes")q.j(0,j,!0)
break
case 23:q.j(0,j,h.toUpperCase())
break
default:q.j(0,j,h)}}s=n?a0:a5.b
if(s==null){s=this.b.$0().F()
s="web-"+(1000*s.a+s.b)}b=new A.b3(a3,s,q)
s=this.at
s.toString
a=A.Cw(s,b)
if(a!=null)return A.aV("Not sent: "+a+".",t.T)
if(!n&&B.z.bc(a5.c,a0)===B.z.bc(q,a0))return A.aV(u.z,t.T)
return this.aB(new A.tl(b))},
hS(a,b){return this.fe(a,b,null)},
hR(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t.BU.a(a6)
if(a5==null)return A.aV("Not sent: enter the invoice date, like 17/11/2026.",t.T)
s=this.b.$0().F()
r="web-"+(1000*s.a+s.b)
s=t.N
q=t.X
p=A.w(s,q)
p.j(0,"bookId",a3)
p.j(0,"customerId",a4)
p.j(0,"date",a5.k(0))
o=B.b.H(a8)
if(o.length!==0)p.j(0,"reference",o)
o=B.b.H(a7)
if(o.length!==0)p.j(0,"note",o)
n=new A.b3(B.a8,r,p)
p=this.at
p.toString
m=A.Cw(p,n)
if(m!=null)return A.aV("Not sent: "+m+".",t.T)
l=A.c([],t.Z)
for(p=A.bO(a6,0,t.jm),o=J.S(p.a),k=p.b,p=new A.at(o,k,A.p(p).i("at<1>")),j=r+"-";p.n();){i=p.c
i=i>=0?new A.r(k+i,o.gt()):A.h(A.ao())
h=i.a
g=i.b
f=g.a[0]
i=g.a
e=i[1]
d=i[2]
c=i[3]
i=B.b.H(f)
b=i.length===0
if(b&&B.b.H(e).length===0&&B.b.H(d).length===0)continue
a=A.dr(B.b.H(e))
a0=A.C("^\\d[\\d,]*(\\.\\d{1,2})?$",!0,!1)
a1=B.b.H(d)
if(a0.b.test(a1))a2=A.a8(a1,",","")
else a2=null
if(b){s=new A.an($.al,t.gH)
s.bn("Not sent: line "+(h+1)+" needs a description.")
return s}b=!0
if(a!=null)if(a.l(0,$.M())>0)b=(a.b<=0?0:Math.max(a.gA().b,0))>4
if(b){s=new A.an($.al,t.gH)
s.bn("Not sent: line "+(h+1)+"'s quantity is a number above zero, at most 4 decimals.")
return s}if(a2==null){s=new A.an($.al,t.gH)
s.bn("Not sent: line "+(h+1)+"'s unit price is an amount in S$, like 1200.50.")
return s}b=B.b.aa(""+h,3,"0")
a0=A.w(s,q)
a0.j(0,"draftId",r)
a0.j(0,"description",i)
a0.j(0,"quantity",a.k(0))
i=A.ah(a2)
if((i.b<=0?0:Math.max(i.gA().b,0))>2)A.h(A.y("SGD allows 2 decimal places",i.k(0),null))
a0.j(0,"unitPrice",A.T(["amount",i.by(0,2),"currency","SGD"],s,q))
if(c!=null)a0.j(0,"gst",c)
B.a.m(l,new A.b3(B.aq,j+b,a0))}if(l.length===0)return A.aV("Not sent: an invoice needs at least one line.",t.T)
return this.aB(new A.tk(n,l))},
mF(a){return this.aB(new A.tg(a))},
mG(a){return this.aB(new A.th(a))},
fX(a){var s=this.gcT(),r=A.L(s)
return a.dx+new A.o(s,r.i("k(1)").a(new A.rW(a)),r.i("o<1>")).gq(0)},
lc(a){return this.aB(new A.t2(this,a))},
mH(a){return this.aB(new A.ti(this,a))},
cB(a,b){return this.ks(t.iX.a(a),b)},
aB(a){return this.cB(a,null)},
ks(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cB=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.ez()
if(h!=null){q=h
s=1
break}j=n.as
j.toString
m=j
j=n.at
j.toString
l=a.$4(j,m.b.a,m.hp(),n.b.$0().F())
if(J.jP(l)){q=u.z
s=1
break}p=4
s=7
return A.t(m.c4(l),$async$cB)
case 7:if(b!=null)n.cy.m(0,b.b+"|"+b.c.b)
q=null
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
k=A.aw(g)
j=A.jD(k)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cB,r)},
ez(){if(this.cx!==B.au)return"The page is not joined yet."
if(!this.CW)return"The page is read-only. Allow changes first."
return null},
cI(){var s=this,r=s.as
if(r!=null)r.cI()
s.Q=s.z=s.y=s.ax=s.at=s.as=null
s.CW=s.x=!1
s.ch=!0
s.cx=B.bT}}
A.rU.prototype={
$0(){var s=this.a,r=t.N
return new A.fT(s.a,new A.rT(s),A.w(r,r))},
$S:243}
A.rT.prototype={
$0(){var s=this.a.y
return s==null?"":s},
$S:21}
A.td.prototype={
$1(a){return t._.a(a).f},
$S:244}
A.te.prototype={
$2(a,b){var s=t.zG
s.a(a)
s.a(b)
return a.hg(b)?a:b},
$S:245}
A.t7.prototype={
$1(a){var s
t._.a(a)
if(a.d==="setup.tick"){s=a.e
s=J.a2(s.h(0,"stepId"),this.a.a)&&J.a2(s.h(0,"itemId"),this.b.a)}else s=!1
return s},
$S:44}
A.tb.prototype={
$1(a){return t.b.a(a).d!==B.x},
$S:2}
A.tc.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.t6.prototype={
$4(a,b,c,d){var s=this,r=s.a,q=s.b
return r===B.L?A.LE(a,q,A.Cr(q),b,d,c):A.Ff(a,q,A.Cr(q),s.c,b,d,s.d,c,r)},
$S:4}
A.rX.prototype={
$4(a,b,c,d){var s=this.a,r=this.b,q=A.Cr(s),p=r.c,o=p==null,n=A.Ff(a,s,q,r.b,b,d,o,c,r.a)
s=A.D(n,t._)
if(!o)s.push(new A.ak("bulk:"+q+":confirm:"+p,b,c+n.length,"rule.confirm",A.T(["id",p],t.N,t.X),d))
return s},
$S:4}
A.t5.prototype={
$4(a,b,c,d){return A.LG(a,b,d,c)},
$S:4}
A.t4.prototype={
$1(a){var s=B.b.H(a)
return s.length===0?null:s},
$S:97}
A.t3.prototype={
$4(a,b,c,d){var s,r,q=A.c([],t.Y),p=this.b
if(p.a!==0){s=this.c.a
r=A.w(t.N,t.X)
r.j(0,"id",s)
r.a1(0,p)
q.push(new A.ak("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.J.a(r),d))}return q},
$S:4}
A.t9.prototype={
$0(){return new A.cl(this.a.c,this.b)},
$S:247}
A.ta.prototype={
$2(a,b){var s=t.hS
return B.b.l(s.a(a).a,s.a(b).a)},
$S:248}
A.t_.prototype={
$4(a,b,c,d){return A.c([new A.ak("account:"+b+":"+this.b,b,c,"account.add",t.J.a(A.T(["account",this.c.M()],t.N,t.X)),d)],t.Y)},
$S:4}
A.rY.prototype={
$4(a,b,c,d){var s,r,q,p=null,o=this.c,n=o.a,m=n.b,l=B.a.ga0(m.split("-"))
m=B.b.ac(m,m.length-4)
s=o.b
r=s.e
q=r==null?p:o.c
return A.c([new A.ak("card-loan:"+this.b,b,c,"account.add",t.J.a(A.T(["account",A.jQ(p,p,l+"-LOAN-"+m,p,n.r,p,p,n.e,p,n.f,this.d,p,n.c,B.o,new A.h3(B.b0,s.f,p,p,r,q,p,n.a,s.bi(o.d)),p,p,p,p,p,p,p,p,s.b,p,p,p).M()],t.N,t.X)),d)],t.Y)},
$S:4}
A.t8.prototype={
$4(a,b,c,d){var s,r,q,p,o,n=this.a,m=this.b,l=m.as
if(l==null)l=B.bO
m=m.a
s=n.b
n=n.d
r=s.bi(n)
q=t.N
p=t.X
o=A.kS(l.M(),q,p)
o.j(0,"cardLoan",s.bi(n))
return A.c([new A.ak("card-loan-link:"+m+":"+r,b,c,"account.edit",A.T(["id",m,"loan",o],q,p),d.F())],t.Y)},
$S:4}
A.tq.prototype={
$4(a,b,c,d){var s,r=A.c([],t.Y)
if(!this.c){s=this.d.a
r.push(new A.ak("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.J.a(A.T(["id",s,"loan",this.a.a.M()],t.N,t.X)),d))}return r},
$S:4}
A.rV.prototype={
$1(a){var s=a.b
if(0>=s.length)return A.a(s,0)
return s[0].toLowerCase()},
$S:15}
A.tn.prototype={
$1(a){return A.d(a).length!==0},
$S:6}
A.to.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=this.a,s=A.e5(s,s.r,A.p(s).c),r=this.b,q=this.c,p=c,o=t.N,n=t.X,m=s.$ti.c;s.n();){l=s.d
if(l==null)l=m.a(l)
k=new A.co(l,r,q).mR()
j=A.is(o,n)
j.a1(0,k)
i.push(new A.ak("sms-sender:"+l+":"+b+":"+p,b,c,"sms.sender",j,d.F()))}return i},
$S:4}
A.tj.prototype={
$4(a,b,c,d){var s=this.a
return A.c([A.N8(s,c,b,"sms-sender:"+s.a+":"+b+":"+c,d,!0)],t.Y)},
$S:4}
A.t1.prototype={
$4(a,b,c,d){var s=this.b,r=s.a
return A.c([new A.ak("categorise:"+r+":"+b+":"+c,b,c,"movement.categorise",t.J.a(A.T(["movementId",r,"categoryId",this.c,"baseVersion",this.a.fX(s)],t.N,t.X)),d)],t.Y)},
$S:4}
A.tm.prototype={
$4(a,b,c,d){var s,r=this.b,q=r.a
r=this.a.fX(r)
s=A.CC(this.c)
return A.c([new A.ak("note:"+q+":"+b+":"+c,b,c,"movement.note",A.T(["movementId",q,"notes",s,"baseVersion",r],t.N,t.X),d.F())],t.Y)},
$S:4}
A.tp.prototype={
$4(a,b,c,d){var s=this,r=s.b,q=s.c,p=s.a.a,o=s.d
p=p==null?null:p.M()
return A.c([new A.ak("budget:"+r+":"+q+":"+b+":"+c,b,c,"budget.set",A.T(["bookId",r,"categoryId",q,"amount",p,"from",""+o.a+"-"+B.b.aa(B.d.k(o.b),2,"0")],t.N,t.X),d.F())],t.Y)},
$S:4}
A.rZ.prototype={
$4(a,b,c,d){var s=this.a,r=s.a
return A.c([new A.ak("goal:"+r+":"+b+":"+c,b,c,"goal.set",A.T(["id",r,"name",s.b,"target",s.c.M(),"by",s.d.k(0),"accountId",s.e],t.N,t.X),d.F())],t.Y)},
$S:4}
A.tf.prototype={
$4(a,b,c,d){var s=this.a.a
return A.c([new A.ak("goal-remove:"+s+":"+b+":"+c,b,c,"goal.remove",A.T(["id",s],t.N,t.X),d.F())],t.Y)},
$S:4}
A.t0.prototype={
$1(a){var s
t.k2.a(a)
if(a.d)s=B.c7.v(0,a.c)&&a.a!=="fromEvent"
else s=!0
return s},
$S:38}
A.tl.prototype={
$4(a,b,c,d){var s=this.a
return A.c([new A.ak("life:"+s.a.b+":"+s.b+":"+b+":"+c,b,c,"life.set",s.M(),d.F())],t.Y)},
$S:4}
A.tk.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=A.c([this.a],t.Z),B.a.a1(s,this.b),s=A.bO(s,0,t.u),r=J.S(s.a),q=s.b,s=new A.at(r,q,A.p(s).i("at<1>")),p=c,o=t.N,n=t.X;s.n();){m=s.c
m=m>=0?new A.r(q+m,r.gt()):A.h(A.ao())
l=m.b
k=l.a.b
j=l.b
i.push(new A.ak("life:"+k+":"+j+":"+b+":"+p+":"+m.a,b,c,"life.set",A.T(["kind",k,"id",j,"fields",l.c],o,n),d.F()))}return i},
$S:4}
A.tg.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l=A.c([],t.Y),k=this.a,j=t.u,i=A.D(A.mB(a,k.b),j)
i.push(k)
k=A.bO(i,0,j)
j=J.S(k.a)
i=k.b
k=new A.at(j,i,A.p(k).i("at<1>"))
s=c
r=t.N
q=t.X
while(k.n()){p=k.c
p=p>=0?new A.r(i+p,j.gt()):A.h(A.ao())
o=p.b
n=o.a.b
m=o.b
l.push(new A.ak("life-remove:"+n+":"+m+":"+b+":"+s+":"+p.a,b,c,"life.remove",A.T(["kind",n,"id",m],r,q),d.F()))}return l},
$S:4}
A.th.prototype={
$4(a,b,c,d){var s=this.a,r=s.b
s=s.a.b
return A.c([new A.ak("life-remove:"+s+":"+r+":"+b+":"+c,b,c,"life.remove",A.T(["kind",s,"id",r],t.N,t.X),d.F())],t.Y)},
$S:4}
A.rW.prototype={
$1(a){var s
t._.a(a)
s=a.d
return(s==="movement.categorise"||s==="movement.note")&&J.a2(a.e.h(0,"movementId"),this.a.a)},
$S:44}
A.t2.prototype={
$4(a,b,c,d){var s=this.b.a
return A.c([new A.ak("rule-confirm:"+s,b,c,"rule.confirm",t.J.a(A.T(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.ti.prototype={
$4(a,b,c,d){var s=this.b.a
return A.c([new A.ak("rule-remove:"+s,b,c,"rule.remove",t.J.a(A.T(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.ee.prototype={
U(){return"AccountGroup."+this.b}}
A.xY.prototype={
$1(a){A.d(a)
return a.length<=1?a:a[0]+B.b.ac(a,1).toLowerCase()},
$S:11}
A.ie.prototype={}
A.dO.prototype={}
A.tI.prototype={}
A.Aq.prototype={
$1(a){var s,r,q=null,p=a.h(0,1)
p.toString
p=A.Z(p,q,q)
s=a.h(0,2)
s.toString
s=A.Z(s,q,q)
r=a.h(0,3)
r.toString
return A.cs(new A.B(p,s,A.Z(r,q,q)),this.a)},
$S:15}
A.x3.prototype={
$2(a,b){return A.R(a)+t.t5.a(b).e.length},
$S:249}
A.x4.prototype={
$2(a,b){var s=t.dw
s.a(a)
return B.d.l(s.a(b).c,a.c)},
$S:250}
A.dP.prototype={}
A.cu.prototype={}
A.tK.prototype={}
A.x5.prototype={
$1(a){return t.R.a(a).b===this.a},
$S:17}
A.x6.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).c,s.a(b).c)},
$S:42}
A.xa.prototype={
$1(a){var s,r,q=this.a,p=A.EL(q,a),o=this.b.h(0,a.a)
if(o==null)o=0
s=A.c([],t.s)
r=a.w
if(r!=null)s.push(r===B.j?"Money out only":"Money in only")
r=a.r
if(r!=null)s.push("On "+r)
r=a.x
if(r!=null)s.push("For "+A.Ap(q,r))
q=a.y
if(q!=null)s.push("Files into "+q)
return new A.dP(a,p,o,a.f,B.a.Z(s,", "))},
$S:251}
A.x7.prototype={
$1(a){return!t.R.a(a).f},
$S:17}
A.x8.prototype={
$1(a){return t.R.a(a).f},
$S:17}
A.x9.prototype={
$2(a,b){var s=t.CU
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:252}
A.tT.prototype={}
A.iF.prototype={}
A.hg.prototype={}
A.eA.prototype={}
A.h9.prototype={}
A.iL.prototype={}
A.iK.prototype={}
A.w0.prototype={
$1(a){return B.b.v(this.a,a)},
$S:6}
A.hh.prototype={}
A.iW.prototype={}
A.xd.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.xe.prototype={
$2(a,b){var s,r,q,p,o,n,m
t.r9.a(b)
s=J.b1(b)
r=s.a5(b,this.a,new A.xf(),t.B)
q=A.c([],t.s)
for(p=s.ghA(b),o=p.$ti,p=new A.ad(p,p.gq(0),o.i("ad<a5.E>")),n=this.b,o=o.i("a5.E");p.n();){m=p.d
if(m==null)m=o.a(m)
q.push(m.a.a.ga7(0)===0?"":n.$1(m))}p=this.c
return new A.hh(a,q,n.$1(r),n.$1(A.a3(new A.P(A.aL(B.O.f5(r.ghl()/s.gq(b))),0- -A.ix(p)),p)))},
$S:253}
A.xf.prototype={
$2(a,b){var s=t.B
return s.a(a).C(0,s.a(b))},
$S:24}
A.xg.prototype={
$1(a){return J.HJ(t.r9.a(a),this.a,new A.xh(),t.B)},
$S:254}
A.xh.prototype={
$2(a,b){var s=t.B
return s.a(a).C(0,s.a(b))},
$S:24}
A.xb.prototype={
$2(a,b){var s=t.nF
s.a(a)
s.a(b)
if(a.a==null)s=1
else if(b.a==null)s=-1
else{s=this.a
s=s.$1(b.b).a.l(0,s.$1(a.b).a)}return s},
$S:255}
A.xc.prototype={
$1(a){var s,r=this.a
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=r.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return B.l[s]+" "+r.a},
$S:30}
A.dZ.prototype={
U(){return"TxState."+this.b}}
A.dY.prototype={
U(){return"TxSort."+this.b}}
A.cp.prototype={
bV(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=this,k=t.b0
k.a(a)
s=t.ht
s.a(c)
s.a(h)
k.a(b)
k=a==null?l.b:a.$0()
s=c==null?l.c:c.$0()
r=h==null?l.d:h.$0()
q=g==null?l.e:g
p=f==null?l.f:f
o=b==null?l.r:b.$0()
n=e==null?l.w:e
m=d==null?0:d
return new A.cp(l.a,k,s,r,q,p,o,n,m)},
h8(a){var s=null
return this.bV(s,s,s,a,s,s,s,s)},
lk(a){var s=null
return this.bV(s,s,s,s,a,s,s,s)},
lg(a){var s=null
return this.bV(s,a,s,s,s,s,s,s)},
ll(a){var s=null
return this.bV(s,s,s,s,s,a,s,s)},
ln(a){var s=null
return this.bV(s,s,s,s,s,s,s,a)},
li(a){var s=null
return this.bV(s,s,a,s,s,s,s,s)},
le(a){var s=null
return this.bV(a,s,s,s,s,s,s,s)},
lm(a){var s=null
return this.bV(s,s,s,s,s,s,a,s)}}
A.lE.prototype={}
A.ua.prototype={}
A.xl.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.b(q.a,q.b,q.c).l(0,A.b(s.a,s.b,s.c))
return r!==0?r:B.b.l(a.a,b.a)},
$S:7}
A.xk.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.f.a.l(0,b.f.a)
return s!==0?s:this.a.$2(b,a)},
$S:7}
A.xm.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:7}
A.xn.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:7}
A.xj.prototype={
$1(a){var s=this.a.r.a.h(0,a)
return s==null?a:A.c9(s)},
$S:11}
A.xo.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.xp.prototype={
$1(a){var s=this.a.r.a.h(0,a)
A:{if(s!=null){s=A.c9(s)
break A}s=a
break A}return s},
$S:11};(function aliases(){var s=J.eo.prototype
s.ih=s.k
s=A.Q.prototype
s.fg=s.aV
s=A.hR.prototype
s.i6=s.J
s=A.he.prototype
s.ec=s.dR
s=A.kf.prototype
s.i7=s.e6
s=A.i0.prototype
s.i8=s.eI
s.i9=s.cG
s.ia=s.cK
s.ib=s.cL
s.ic=s.cn
s.ie=s.eb
s.ig=s.dj
s=A.ag.prototype
s.ii=s.j
s.ij=s.Y})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers._instance_1i,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_0u
s(J,"Ks","Im",87)
r(J.dF.prototype,"gi3",1,1,null,["$2","$1"],["c3","ak"],129,0,0)
q(A.en.prototype,"ghd","m5",6)
p(A,"Lh","J8",53)
p(A,"Li","J9",53)
p(A,"Lj","Ja",53)
o(A,"Fc","L0",0)
s(A,"LH","Iv",87)
n(A.db.prototype,"geN","v",28)
p(A,"LQ","K9",90)
m(A,"LS",1,null,["$3$onError$radix","$1"],["Z",function(a){return A.Z(a,null,null)}],258,0)
o(A,"LR","I6",259)
m(A,"Mx",2,null,["$1$2","$2"],["FI",function(a,b){return A.FI(a,b,t.r)}],68,0)
m(A,"Mw",2,null,["$1$2","$2"],["FH",function(a,b){return A.FH(a,b,t.r)}],68,0)
p(A,"F7","Mt",6)
q(A.kB.prototype,"gkZ","l_",44)
p(A,"N4","KE",1)
s(A,"N5","KT",7)
p(A,"MX","Km",93)
s(A,"N1","LM",173)
p(A,"jI","MF",1)
m(A,"MH",2,null,["$4$body$headers","$2","$3$headers"],["hB",function(a,b){return A.hB(a,b,null,B.dN)},function(a,b,c){return A.hB(a,b,null,c)}],81,0)
l(A.l8.prototype,"gkx","ky",0)
p(A,"zU","IH",38)
var k
l(k=A.l9.prototype,"gm3","cJ",5)
l(k,"gf3","bH",5)
l(k,"glY","lZ",10)
s(A,"G_","MY",37)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a_,null)
q(A.a_,[A.BI,J.kJ,A.iR,J.eW,A.j8,A.hr,A.i,A.hY,A.bL,A.a9,A.aC,A.Q,A.tP,A.ad,A.iv,A.O,A.f5,A.iZ,A.iV,A.ic,A.j5,A.fi,A.at,A.aU,A.cq,A.bj,A.h4,A.fL,A.e4,A.cF,A.ub,A.pb,A.id,A.jn,A.oZ,A.cy,A.a1,A.ir,A.en,A.hs,A.fv,A.hk,A.mm,A.lS,A.mp,A.cD,A.m6,A.mo,A.jo,A.lL,A.e8,A.bV,A.lT,A.e3,A.an,A.lM,A.mk,A.jy,A.mb,A.fy,A.jb,A.jt,A.mq,A.bf,A.b7,A.up,A.uo,A.be,A.uS,A.v6,A.eK,A.aR,A.uq,A.aa,A.ci,A.m4,A.l5,A.iX,A.uA,A.b8,A.kI,A.ap,A.bh,A.mn,A.bE,A.jv,A.kt,A.pa,A.m8,A.kr,A.kl,A.kV,A.ch,A.km,A.ng,A.ni,A.ls,A.fJ,A.cv,A.nZ,A.d2,A.o1,A.ek,A.h0,A.lf,A.ip,A.d1,A.iT,A.ey,A.he,A.fo,A.l6,A.pe,A.nj,A.kf,A.i1,A.np,A.i3,A.cR,A.dt,A.aF,A.lj,A.uz,A.P,A.cB,A.br,A.c7,A.mT,A.cl,A.hi,A.ko,A.lx,A.kb,A.tr,A.ce,A.cG,A.jX,A.hl,A.iP,A.fa,A.cV,A.lk,A.kE,A.lu,A.lv,A.n0,A.cf,A.dp,A.fN,A.dE,A.bK,A.bn,A.bN,A.nB,A.dh,A.nD,A.lc,A.bo,A.iM,A.c0,A.ih,A.nK,A.dw,A.nL,A.lA,A.ty,A.mV,A.f8,A.k6,A.fk,A.f9,A.o_,A.hp,A.tN,A.o0,A.ku,A.mY,A.h1,A.fR,A.ep,A.lo,A.h6,A.jR,A.p5,A.dM,A.X,A.k5,A.d8,A.dn,A.p6,A.nN,A.ct,A.pd,A.d0,A.p0,A.es,A.p1,A.h3,A.hj,A.iu,A.h5,A.B,A.nC,A.kc,A.q,A.kB,A.ak,A.nb,A.k4,A.nc,A.tY,A.iw,A.dJ,A.tz,A.lg,A.tA,A.tL,A.dQ,A.tM,A.dS,A.u7,A.lD,A.u8,A.l3,A.nx,A.cU,A.em,A.v,A.b3,A.oW,A.fl,A.dK,A.ll,A.tv,A.d9,A.cg,A.dC,A.tE,A.iQ,A.fd,A.p4,A.by,A.hn,A.l0,A.eD,A.ig,A.cC,A.W,A.bb,A.cE,A.mW,A.lp,A.lq,A.tQ,A.co,A.tU,A.l4,A.cZ,A.tX,A.dV,A.l2,A.cS,A.il,A.u0,A.hS,A.u4,A.i6,A.iq,A.lz,A.u5,A.iU,A.hW,A.bB,A.n4,A.dz,A.k3,A.la,A.iS,A.fn,A.lm,A.u9,A.aX,A.lw,A.di,A.dN,A.mU,A.kD,A.l8,A.dl,A.dL,A.kv,A.na,A.l1,A.fT,A.da,A.kW,A.ii,A.nU,A.kn,A.fS,A.fX,A.nV,A.dH,A.kF,A.h2,A.ej,A.lh,A.jU,A.p7,A.fe,A.li,A.cY,A.ds,A.pc,A.ha,A.hf,A.kw,A.kx,A.rS,A.l9,A.ie,A.dO,A.tI,A.dP,A.cu,A.tK,A.tT,A.h9,A.hh,A.iW,A.cp,A.lE,A.ua])
q(J.kJ,[J.kL,J.fY,J.ik,J.fZ,J.h_,J.fb,J.dF])
q(J.ik,[J.eo,J.u,A.eq,A.iA])
q(J.eo,[J.lb,J.eG,J.dG])
r(J.kK,A.iR)
r(J.nW,J.u)
q(J.fb,[J.ij,J.kM])
q(A.i,[A.eH,A.U,A.c2,A.o,A.f4,A.ft,A.dR,A.j4,A.p9,A.dA,A.fx,A.lK,A.ml,A.dd])
q(A.eH,[A.eZ,A.jz])
r(A.j9,A.eZ)
r(A.j7,A.jz)
q(A.bL,[A.k8,A.nd,A.kG,A.k7,A.lB,A.yT,A.yV,A.ul,A.uk,A.va,A.uK,A.uN,A.uX,A.p2,A.uQ,A.us,A.uu,A.nu,A.nv,A.v0,A.Ax,A.Ay,A.tO,A.tC,A.tt,A.vH,A.yS,A.B_,A.B1,A.B2,A.B3,A.Be,A.y8,A.y9,A.vp,A.vs,A.zb,A.xs,A.xu,A.xw,A.xy,A.xA,A.vg,A.vh,A.vd,A.ve,A.vf,A.u_,A.tZ,A.vM,A.vN,A.vO,A.xZ,A.xP,A.xM,A.xN,A.xO,A.yY,A.vE,A.vj,A.xT,A.nE,A.nG,A.nI,A.Ar,A.At,A.Au,A.yw,A.yz,A.y6,A.y7,A.vF,A.yJ,A.yK,A.yL,A.B4,A.B5,A.vJ,A.vK,A.vL,A.vI,A.v8,A.xJ,A.vZ,A.w_,A.oy,A.ol,A.ox,A.oV,A.oU,A.ov,A.oG,A.oF,A.o3,A.o4,A.of,A.ot,A.or,A.os,A.oq,A.oz,A.oA,A.oB,A.oC,A.oD,A.oE,A.o2,A.oi,A.oj,A.oH,A.oI,A.oJ,A.oL,A.oM,A.oN,A.oO,A.oP,A.oQ,A.oR,A.oS,A.oK,A.o7,A.ou,A.oa,A.ob,A.on,A.o5,A.om,A.oo,A.oe,A.od,A.op,A.oh,A.o9,A.zy,A.zz,A.zB,A.nf,A.zC,A.zD,A.z2,A.xB,A.z4,A.z5,A.z6,A.z8,A.z7,A.yP,A.yQ,A.A5,A.zY,A.zZ,A.A1,A.A0,A.zV,A.zW,A.A3,A.zk,A.zo,A.vl,A.zi,A.zj,A.yh,A.yg,A.ye,A.yf,A.yt,A.yn,A.yo,A.yp,A.yq,A.yi,A.A7,A.A8,A.Aa,A.Ab,A.Af,A.A6,A.Ac,A.yu,A.yv,A.zO,A.zQ,A.zR,A.zS,A.xH,A.xI,A.oY,A.vm,A.vn,A.vq,A.vr,A.vP,A.Ao,A.Ak,A.Am,A.Al,A.tw,A.vQ,A.vR,A.vS,A.Bb,A.yF,A.yD,A.yE,A.zN,A.zL,A.zq,A.zs,A.zE,A.zG,A.zI,A.zJ,A.zK,A.AZ,A.Bj,A.Bi,A.Bl,A.xq,A.AG,A.AE,A.AH,A.AI,A.AJ,A.zc,A.ze,A.AM,A.AL,A.AR,A.AS,A.mX,A.AW,A.zx,A.AA,A.AB,A.n6,A.n9,A.n8,A.n7,A.vT,A.vU,A.vV,A.vW,A.mS,A.w5,A.w3,A.nR,A.nS,A.nT,A.nP,A.nQ,A.vz,A.vA,A.xF,A.vc,A.yR,A.z0,A.rI,A.rJ,A.rK,A.rL,A.po,A.q3,A.qk,A.pp,A.qc,A.qf,A.rv,A.rw,A.rx,A.rr,A.ru,A.rt,A.rp,A.ro,A.ry,A.rf,A.r4,A.qR,A.qW,A.qX,A.qY,A.qP,A.qZ,A.qO,A.r_,A.r0,A.r1,A.r2,A.q0,A.q1,A.pP,A.pQ,A.pT,A.pU,A.pV,A.pY,A.pZ,A.q_,A.pR,A.qK,A.qo,A.pK,A.pI,A.q6,A.rn,A.ri,A.rm,A.qt,A.ph,A.pg,A.qE,A.qF,A.qG,A.rG,A.rB,A.rD,A.pF,A.pE,A.pA,A.pC,A.pD,A.rd,A.r8,A.ra,A.rb,A.qI,A.qn,A.w8,A.w9,A.wb,A.wc,A.wa,A.wh,A.wg,A.wp,A.wn,A.wm,A.wk,A.wi,A.vC,A.wv,A.ww,A.ws,A.wr,A.zp,A.wz,A.wx,A.wy,A.wR,A.wB,A.x0,A.x1,A.wS,A.wT,A.wP,A.wQ,A.wU,A.wY,A.wZ,A.wC,A.wD,A.wA,A.wH,A.wJ,A.wK,A.wL,A.wM,A.wN,A.wO,A.wE,A.wF,A.wG,A.wV,A.wW,A.B7,A.td,A.t7,A.tb,A.t6,A.rX,A.t5,A.t4,A.t3,A.t_,A.rY,A.t8,A.tq,A.rV,A.tn,A.to,A.tj,A.t1,A.tm,A.tp,A.rZ,A.tf,A.t0,A.tl,A.tk,A.tg,A.th,A.rW,A.t2,A.ti,A.xY,A.Aq,A.x5,A.xa,A.x7,A.x8,A.w0,A.xd,A.xg,A.xc,A.xj,A.xo,A.xp])
q(A.k8,[A.uw,A.ne,A.nY,A.yU,A.vb,A.vG,A.uL,A.uO,A.p_,A.p3,A.uT,A.ur,A.v3,A.ug,A.uf,A.v2,A.v1,A.nn,A.AT,A.B0,A.Bg,A.xt,A.xv,A.xx,A.xz,A.vB,A.nh,A.y3,A.yX,A.xG,A.y_,A.xR,A.xS,A.yZ,A.nF,A.nH,A.Av,A.yx,A.yC,A.yA,A.yB,A.yI,A.yM,A.yN,A.ow,A.ok,A.oT,A.zA,A.vv,A.AD,A.xC,A.z1,A.z3,A.zX,A.A4,A.AY,A.zl,A.zn,A.zm,A.zf,A.zg,A.zh,A.zu,A.zw,A.zv,A.ya,A.yc,A.yd,A.yj,A.yl,A.yr,A.ys,A.AP,A.AQ,A.A9,A.Ad,A.Ae,A.zP,A.oX,A.Ai,A.Aj,A.Aw,A.tx,A.z_,A.Bc,A.Bd,A.xK,A.xL,A.y0,A.y1,A.y2,A.tH,A.tF,A.tG,A.zM,A.y4,A.zr,A.uh,A.ui,A.zF,A.zH,A.Bk,A.B9,A.Ba,A.AK,A.zd,A.tV,A.AV,A.AX,A.u2,A.u1,A.u3,A.AC,A.n5,A.w2,A.yO,A.mR,A.w4,A.xi,A.vy,A.w1,A.qh,A.qd,A.rs,A.qS,A.qT,A.r3,A.pJ,A.q5,A.rh,A.qx,A.qs,A.qB,A.qC,A.rC,A.pB,A.r9,A.w6,A.w7,A.wd,A.wo,A.wq,A.wj,A.wt,A.x2,A.x_,A.wI,A.wX,A.te,A.tc,A.ta,A.x3,A.x4,A.x6,A.x9,A.xe,A.xf,A.xh,A.xb,A.xl,A.xk,A.xm,A.xn])
r(A.dm,A.j7)
q(A.a9,[A.f0,A.cx,A.m9,A.ag])
q(A.aC,[A.fg,A.e_,A.kN,A.lG,A.ln,A.m5,A.im,A.jS,A.cc,A.j2,A.lF,A.dT,A.ka])
q(A.Q,[A.hm,A.bs])
r(A.k9,A.hm)
q(A.U,[A.a5,A.ib,A.au,A.N,A.ac,A.ja])
q(A.a5,[A.fr,A.aj,A.aP,A.ma])
r(A.i9,A.c2)
r(A.ia,A.ft)
r(A.fU,A.dR)
r(A.f3,A.dA)
q(A.bj,[A.e6,A.fA,A.dc])
q(A.e6,[A.r,A.e7,A.jg,A.ht])
q(A.fA,[A.bz,A.jh])
q(A.dc,[A.eI,A.ji,A.jj,A.jk,A.jl])
r(A.hw,A.h4)
r(A.e2,A.hw)
r(A.hZ,A.e2)
q(A.fL,[A.aZ,A.cj])
q(A.cF,[A.fM,A.jm,A.ju,A.j_])
q(A.fM,[A.cP,A.cX])
r(A.f7,A.kG)
r(A.iI,A.e_)
q(A.lB,[A.ly,A.fI])
r(A.fc,A.cx)
r(A.h7,A.eq)
q(A.iA,[A.iy,A.bw])
q(A.bw,[A.jc,A.je])
r(A.jd,A.jc)
r(A.er,A.jd)
r(A.jf,A.je)
r(A.c3,A.jf)
q(A.er,[A.kX,A.kY])
q(A.c3,[A.kZ,A.iz,A.l_,A.iB,A.iC,A.iD,A.fh])
r(A.hv,A.m5)
q(A.k7,[A.um,A.un,A.uZ,A.uY,A.nJ,A.uB,A.uG,A.uF,A.uD,A.uC,A.uJ,A.uI,A.uH,A.uM,A.uW,A.vx,A.v5,A.v4,A.uv,A.ns,A.uU,A.nm,A.nA,A.nr,A.nq,A.nw,A.Bf,A.xQ,A.As,A.yy,A.o8,A.o6,A.oc,A.A_,A.A2,A.zt,A.yb,A.yk,A.ym,A.An,A.B8,A.AF,A.AN,A.AU,A.Az,A.pi,A.rM,A.rN,A.rO,A.rP,A.rQ,A.rR,A.q2,A.ql,A.qi,A.qj,A.pj,A.pk,A.pl,A.pm,A.pn,A.qe,A.qb,A.qg,A.qa,A.rq,A.qQ,A.qM,A.qL,A.qN,A.qU,A.qV,A.pO,A.pN,A.pW,A.pX,A.pM,A.pS,A.pL,A.qJ,A.qp,A.pH,A.q7,A.q8,A.q9,A.q4,A.rj,A.rk,A.rl,A.rg,A.qy,A.qu,A.qv,A.qr,A.qw,A.qq,A.pf,A.qD,A.qA,A.qz,A.rH,A.rE,A.rA,A.rF,A.rz,A.pG,A.pw,A.pv,A.px,A.pu,A.py,A.pt,A.pz,A.ps,A.pr,A.re,A.r7,A.r6,A.rc,A.r5,A.pq,A.qH,A.qm,A.ny,A.we,A.wf,A.wl,A.vD,A.wu,A.Ah,A.B6,A.rU,A.rT,A.t9])
r(A.cJ,A.lT)
r(A.me,A.jy)
r(A.db,A.jm)
r(A.j1,A.ju)
q(A.bf,[A.fH,A.kq,A.kO])
q(A.b7,[A.hT,A.jV,A.kR,A.kQ,A.lJ,A.j3,A.fV])
r(A.kP,A.im)
r(A.uR,A.uS)
r(A.lI,A.kq)
q(A.cc,[A.hb,A.kC])
q(A.be,[A.ky,A.kz,A.cz])
q(A.fV,[A.mf,A.mi])
q(A.ky,[A.mh,A.mj])
r(A.mg,A.mh)
r(A.lr,A.mj)
r(A.eV,A.ng)
q(A.eV,[A.jY,A.lU])
r(A.i0,A.ni)
r(A.n1,A.i0)
r(A.i8,A.ls)
q(A.i8,[A.jZ,A.kg])
q(A.cv,[A.ez,A.d6,A.hV,A.tR,A.tS])
q(A.ez,[A.lQ,A.m0])
r(A.k1,A.lQ)
q(A.d6,[A.lR,A.m1])
r(A.k2,A.lR)
q(A.nZ,[A.kA,A.hR])
q(A.kA,[A.n2,A.no])
q(A.d2,[A.el,A.lX])
q(A.el,[A.k_,A.lZ])
r(A.uj,A.o1)
q(A.uj,[A.n3,A.m3])
q(A.kz,[A.m7,A.f2])
r(A.io,A.h0)
q(A.cz,[A.ms,A.mr])
r(A.mc,A.ms)
r(A.bp,A.he)
r(A.d7,A.io)
r(A.bD,A.lf)
q(A.f2,[A.l7,A.lP,A.m_])
r(A.kd,A.lU)
r(A.ki,A.lX)
r(A.i_,A.hR)
q(A.m4,[A.fO,A.hu,A.cb,A.dj,A.eC,A.eE,A.fp,A.dU,A.du,A.cd,A.eg,A.eF,A.eh,A.bW,A.dD,A.cW,A.ev,A.ew,A.dx,A.dy,A.f6,A.dk,A.cQ,A.cw,A.dB,A.hc,A.bg,A.bX,A.cT,A.iN,A.bt,A.ck,A.dI,A.fq,A.d3,A.bR,A.bM,A.bC,A.d4,A.aJ,A.ae,A.eu,A.cn,A.ho,A.cI,A.aQ,A.c6,A.fs,A.dW,A.cm,A.ex,A.bc,A.ff,A.fW,A.et,A.ee,A.dZ,A.dY])
r(A.nk,A.kf)
r(A.lV,A.hV)
r(A.lW,A.lV)
r(A.f1,A.lW)
r(A.jW,A.lP)
r(A.i2,A.lZ)
r(A.lY,A.mr)
r(A.i4,A.m0)
r(A.m2,A.m1)
r(A.kj,A.m2)
r(A.i5,A.m3)
q(A.mY,[A.F,A.nz,A.bu,A.tD])
r(A.md,A.ag)
q(A.es,[A.ei,A.fK,A.iH,A.iG,A.i7])
q(A.cE,[A.h8,A.iJ,A.hd])
q(A.tT,[A.iF,A.hg,A.eA])
q(A.h9,[A.iL,A.iK])
s(A.hm,A.cq)
s(A.jz,A.Q)
s(A.jc,A.Q)
s(A.jd,A.aU)
s(A.je,A.Q)
s(A.jf,A.aU)
s(A.hw,A.jt)
s(A.ju,A.mq)
s(A.lQ,A.fJ)
s(A.lR,A.fJ)
s(A.ms,A.cR)
s(A.lU,A.nj)
s(A.lX,A.i3)
s(A.lV,A.i1)
s(A.lW,A.i3)
s(A.lP,A.cR)
s(A.lZ,A.i3)
s(A.mr,A.cR)
s(A.m0,A.i1)
s(A.m1,A.i1)
s(A.m2,A.pe)
s(A.m3,A.np)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",V:"double",bH:"num",f:"String",k:"bool",bh:"Null",A:"List",a_:"Object",af:"Map",ab:"JSObject"},mangledNames:{},types:["~()","k(X)","k(br)","~(f)","A<ak>(h1,f,e,aa)","b9<~>()","k(f)","e(X,X)","e(br,br)","k(c7)","b9<f?>()","f(f)","k(aX)","~(ab)","bh(ab)","f(cA)","A<X>()","k(bb)","f(q)","f(X)","k(ds)","f()","k(cG)","e(b3,b3)","q(q,q)","e(e,cg)","e(c7,c7)","bh()","k(a_?)","e(e,dC)","f(e)","k(b3)","f(f?)","~(b9<f?>())","~(@)","e(e)","k(W)","e(f,f)","k(v)","k(ae)","k(f9)","k(by)","e(bb,bb)","q(bB)","k(ak)","e(W,W)","k(bo)","e(+(B,B),+(B,B))","V(e)","k(dh)","k(cV)","e(e,e)","e(bK,bK)","~(~())","cp(B?)","e(e,cf)","B?()","f?()","B?(f)","q?(f)","f(f,V)","@()","~(a_?,a_?)","@(f)","q(q,X)","f(V)","e(ce,ce)","e()","0^(0^,0^)<bH>","e(f?)","e(+(e,X),+(e,X))","e(co,co)","k(A<f>)","k(+(B,B))","k(bK)","~(f,@)","e(ct,ct)","f(B?)","q(q,by)","k(c0)","A<bo>(A<bo>)","b9<ha>(f,ue{body:e1?,headers:af<f,f>})","0&()","bh(a_,eB)","B(B?,B)","B(aX)","k(cU)","e(@,@)","bh(@)","k(f8)","@(@)","q(X)","e(A<X>,B)","k(f?)","dH()","k(dN)","A<f>()","f?(f)","k(bt)","k(d0)","k(d8)","B?(A<aX>)","e(B,B)","k(ct)","e(dn,dn)","k(B)","e?(f)","k(@)","k(ap<f,cZ>)","k(k)","e(+month,year(e,e))","+month,year(e,e)(e)","e(+month,year(e,e),+month,year(e,e))","k(B,B)","k(fd)","e(dJ,dJ)","k(ce)","A<e>()","e(+(e,e,bR),+(e,e,bR))","k(+(X,X,bR))","e(dQ,dQ)","e(dS,dS)","k(X,X)","k(fk)","e(cV,cV)","k(+(f,f))","k(ap<f,f>)","f(ap<f,f>)","ep()","k(fj[e])","k(hl)","e(dK,dK)","k(eD)","e(cU,cU)","k(cn)","e(d9,d9)","e(cg,cg)","k(cZ)","k(dV)","f(e,f)","f(B)","e(b3)","q(bt)","q(bt?)","f?(f,f)","~(e,@)","hn(f)","e(by,by)","e(dw,dw)","e(c0,c0)","ak(f,f,af<f,a_?>)","~(W)","W()","cE(X)","cE()","f(bb)","e(bn,bn)","e(f)","k(f,B)","A<B>()","i<X>(f,B,B)","e(+(e,f),+(e,f))","+(e,e,k,af<f?,q>)()","k(+(e,e,k,af<f?,q>))","k(+complete,month,spent,year(k,e,q,e))","q(q,+complete,month,spent,year(k,e,q,e))","q(q,bB)","bo()","k(bB)","e(bB,bB)","e(dz,dz)","bK?(a_?)","k(cm)","e(cC,cC)","q(q,bn)","aX(br)","ab(ab)","~(@,@)","~(f,a_)","k(bn)","k(V)","q(q,dh)","V(V)","~(f,f)","k(bc)","~(lC)","e(dE,dE)","~(f,A<X>)","k(f,A<X>)","ab(cY)","bh(@,eB)","ab(f,f,f{placeholder:f?})","ab(f,A<+(f,f)>,f)","k(ab)","k(cl)","~(cp)","k(cf)","~(f,cp(B?))","e(dp,dp)","k(bW)","k(q)","ab(f,f{placeholder:f,wide:k})","f(ab)","iW()","ii()","f(f,f,V)","e(ae,ae)","f(v)","~(b9<f?>(),f)","e(e,cu)","k(dP)","B?(B)","ab(f,f{placeholder:f?})","e(+(f,c6),+(f,c6))","@(@,f)","bh(~())","ab(f{placeholder:f,value:f})","k(du)","e(dl,dl)","e(dL,dL)","da(by)","V(q)","fS()","fX()","f(f?,f)","f(b3,v)","e(ap<f,e>,ap<f,e>)","e(em,em)","hU(cB)","e(br)","h2()","P()","A<di>(dN)","q(A<aX>)","q(q,aX)","e(A<aX>)","k(A<aX>)","kH()","e1()","k(e)","dt()","ds()","e(e,A<e>)","fT()","aa(ak)","aa(aa,aa)","A<e>(bp)","cl()","e(cl,cl)","e(e,cC)","e(dO,dO)","dP(bb)","e(cu,cu)","hh(f,A<q>)","q(A<q>)","e(ap<f?,A<q>>,ap<f?,A<q>>)","~(f,f?)","0&(f,e?)","e(f{onError:e(f)?,radix:e?})","aa()","af<f,f>(af<f,f>,f)","k(fn)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.r&&a.b(c.a)&&b.b(c.b),"2;days,months":(a,b)=>c=>c instanceof A.e7&&a.b(c.a)&&b.b(c.b),"2;end,loans":(a,b)=>c=>c instanceof A.jg&&a.b(c.a)&&b.b(c.b),"2;month,year":(a,b)=>c=>c instanceof A.ht&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bz&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;accountId,from,to":(a,b,c)=>d=>d instanceof A.jh&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eI&&A.mG(a,b.a),"4;complete,month,spent,year":a=>b=>b instanceof A.ji&&A.mG(a,b.a),"5;":a=>b=>b instanceof A.jj&&A.mG(a,b.a),"5;date,eventId,hash,n,removed":a=>b=>b instanceof A.jk&&A.mG(a,b.a),"8;instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type":a=>b=>b instanceof A.jl&&A.mG(a,b.a)}}
A.JH(v.typeUniverse,JSON.parse('{"dG":"eo","lb":"eo","eG":"eo","NR":"eq","kL":{"k":[],"ay":[]},"fY":{"bh":[],"ay":[]},"ik":{"ab":[]},"eo":{"ab":[]},"u":{"A":["1"],"U":["1"],"ab":[],"i":["1"],"bv":["1"]},"kK":{"iR":[]},"nW":{"u":["1"],"A":["1"],"U":["1"],"ab":[],"i":["1"],"bv":["1"]},"eW":{"am":["1"]},"fb":{"V":[],"bH":[],"aY":["bH"]},"ij":{"V":[],"e":[],"bH":[],"aY":["bH"],"ay":[]},"kM":{"V":[],"bH":[],"aY":["bH"],"ay":[]},"dF":{"f":[],"aY":["f"],"fj":[],"bv":["@"],"ay":[]},"j8":{"Bv":[]},"hr":{"Bv":[]},"eH":{"i":["2"]},"hY":{"am":["2"]},"eZ":{"eH":["1","2"],"i":["2"],"i.E":"2"},"j9":{"eZ":["1","2"],"eH":["1","2"],"U":["2"],"i":["2"],"i.E":"2"},"j7":{"Q":["2"],"A":["2"],"eH":["1","2"],"U":["2"],"i":["2"]},"dm":{"j7":["1","2"],"Q":["2"],"A":["2"],"eH":["1","2"],"U":["2"],"i":["2"],"Q.E":"2","i.E":"2"},"f0":{"a9":["3","4"],"af":["3","4"],"a9.K":"3","a9.V":"4"},"fg":{"aC":[]},"k9":{"Q":["e"],"cq":["e"],"A":["e"],"U":["e"],"i":["e"],"Q.E":"e","cq.E":"e"},"U":{"i":["1"]},"a5":{"U":["1"],"i":["1"]},"fr":{"a5":["1"],"U":["1"],"i":["1"],"i.E":"1","a5.E":"1"},"ad":{"am":["1"]},"c2":{"i":["2"],"i.E":"2"},"i9":{"c2":["1","2"],"U":["2"],"i":["2"],"i.E":"2"},"iv":{"am":["2"]},"aj":{"a5":["2"],"U":["2"],"i":["2"],"i.E":"2","a5.E":"2"},"o":{"i":["1"],"i.E":"1"},"O":{"am":["1"]},"f4":{"i":["2"],"i.E":"2"},"f5":{"am":["2"]},"ft":{"i":["1"],"i.E":"1"},"ia":{"ft":["1"],"U":["1"],"i":["1"],"i.E":"1"},"iZ":{"am":["1"]},"dR":{"i":["1"],"i.E":"1"},"fU":{"dR":["1"],"U":["1"],"i":["1"],"i.E":"1"},"iV":{"am":["1"]},"ib":{"U":["1"],"i":["1"],"i.E":"1"},"ic":{"am":["1"]},"j4":{"i":["1"],"i.E":"1"},"j5":{"am":["1"]},"p9":{"i":["1"],"i.E":"1"},"fi":{"am":["1"]},"dA":{"i":["+(e,1)"],"i.E":"+(e,1)"},"f3":{"dA":["1"],"U":["+(e,1)"],"i":["+(e,1)"],"i.E":"+(e,1)"},"at":{"am":["+(e,1)"]},"hm":{"Q":["1"],"cq":["1"],"A":["1"],"U":["1"],"i":["1"]},"aP":{"a5":["1"],"U":["1"],"i":["1"],"i.E":"1","a5.E":"1"},"r":{"e6":[],"bj":[]},"e7":{"e6":[],"bj":[]},"jg":{"e6":[],"bj":[]},"ht":{"e6":[],"bj":[]},"bz":{"fA":[],"bj":[]},"jh":{"fA":[],"bj":[]},"eI":{"dc":[],"bj":[]},"ji":{"dc":[],"bj":[]},"jj":{"dc":[],"bj":[]},"jk":{"dc":[],"bj":[]},"jl":{"dc":[],"bj":[]},"hZ":{"e2":["1","2"],"hw":["1","2"],"h4":["1","2"],"jt":["1","2"],"af":["1","2"]},"fL":{"af":["1","2"]},"aZ":{"fL":["1","2"],"af":["1","2"]},"fx":{"i":["1"],"i.E":"1"},"e4":{"am":["1"]},"cj":{"fL":["1","2"],"af":["1","2"]},"fM":{"cF":["1"],"d5":["1"],"U":["1"],"i":["1"]},"cP":{"fM":["1"],"cF":["1"],"d5":["1"],"U":["1"],"i":["1"]},"cX":{"fM":["1"],"cF":["1"],"d5":["1"],"U":["1"],"i":["1"]},"kG":{"bL":[],"dv":[]},"f7":{"bL":[],"dv":[]},"iI":{"e_":[],"aC":[]},"kN":{"aC":[]},"lG":{"aC":[]},"jn":{"eB":[]},"bL":{"dv":[]},"k7":{"bL":[],"dv":[]},"k8":{"bL":[],"dv":[]},"lB":{"bL":[],"dv":[]},"ly":{"bL":[],"dv":[]},"fI":{"bL":[],"dv":[]},"ln":{"aC":[]},"cx":{"a9":["1","2"],"BL":["1","2"],"af":["1","2"],"a9.K":"1","a9.V":"2"},"au":{"U":["1"],"i":["1"],"i.E":"1"},"cy":{"am":["1"]},"N":{"U":["1"],"i":["1"],"i.E":"1"},"a1":{"am":["1"]},"ac":{"U":["ap<1,2>"],"i":["ap<1,2>"],"i.E":"ap<1,2>"},"ir":{"am":["ap<1,2>"]},"fc":{"cx":["1","2"],"a9":["1","2"],"BL":["1","2"],"af":["1","2"],"a9.K":"1","a9.V":"2"},"e6":{"bj":[]},"fA":{"bj":[]},"dc":{"bj":[]},"en":{"tB":[],"fj":[]},"hs":{"iO":[],"cA":[]},"lK":{"i":["iO"],"i.E":"iO"},"fv":{"am":["iO"]},"hk":{"cA":[]},"ml":{"i":["cA"],"i.E":"cA"},"mm":{"am":["cA"]},"h7":{"eq":[],"ab":[],"hX":[],"ay":[]},"eq":{"ab":[],"hX":[],"ay":[]},"iA":{"ab":[]},"mp":{"hX":[]},"iy":{"D9":[],"ab":[],"ay":[]},"bw":{"c1":["1"],"ab":[],"bv":["1"]},"er":{"Q":["V"],"bw":["V"],"A":["V"],"c1":["V"],"U":["V"],"ab":[],"bv":["V"],"i":["V"],"aU":["V"]},"c3":{"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"]},"kX":{"er":[],"Q":["V"],"bw":["V"],"A":["V"],"c1":["V"],"U":["V"],"ab":[],"bv":["V"],"i":["V"],"aU":["V"],"ay":[],"Q.E":"V","aU.E":"V"},"kY":{"er":[],"Q":["V"],"bw":["V"],"A":["V"],"c1":["V"],"U":["V"],"ab":[],"bv":["V"],"i":["V"],"aU":["V"],"ay":[],"Q.E":"V","aU.E":"V"},"kZ":{"c3":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"iz":{"c3":[],"kH":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"l_":{"c3":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"iB":{"c3":[],"BX":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"iC":{"c3":[],"ud":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"iD":{"c3":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"fh":{"c3":[],"e1":[],"Q":["e"],"bw":["e"],"A":["e"],"c1":["e"],"U":["e"],"ab":[],"bv":["e"],"i":["e"],"aU":["e"],"ay":[],"Q.E":"e","aU.E":"e"},"m5":{"aC":[]},"hv":{"e_":[],"aC":[]},"jo":{"lC":[]},"e8":{"am":["1"]},"dd":{"i":["1"],"i.E":"1"},"bV":{"aC":[]},"cJ":{"lT":["1"]},"an":{"b9":["1"]},"jy":{"E7":[]},"me":{"jy":[],"E7":[]},"db":{"cF":["1"],"DD":["1"],"d5":["1"],"U":["1"],"i":["1"]},"fy":{"am":["1"]},"Q":{"A":["1"],"U":["1"],"i":["1"]},"a9":{"af":["1","2"]},"ja":{"U":["2"],"i":["2"],"i.E":"2"},"jb":{"am":["2"]},"h4":{"af":["1","2"]},"e2":{"hw":["1","2"],"h4":["1","2"],"jt":["1","2"],"af":["1","2"]},"cF":{"d5":["1"],"U":["1"],"i":["1"]},"jm":{"cF":["1"],"d5":["1"],"U":["1"],"i":["1"]},"j1":{"cF":["1"],"mq":["1"],"d5":["1"],"U":["1"],"i":["1"]},"m9":{"a9":["f","@"],"af":["f","@"],"a9.K":"f","a9.V":"@"},"ma":{"a5":["f"],"U":["f"],"i":["f"],"i.E":"f","a5.E":"f"},"fH":{"bf":["A<e>","f"],"bf.S":"A<e>"},"hT":{"b7":["A<e>","f"],"b7.T":"f"},"jV":{"b7":["f","A<e>"],"b7.T":"A<e>"},"be":{"b5":["A<e>"]},"kq":{"bf":["f","A<e>"]},"im":{"aC":[]},"kP":{"aC":[]},"kO":{"bf":["a_?","f"],"bf.S":"a_?"},"kR":{"b7":["a_?","f"],"b7.T":"f"},"kQ":{"b7":["f","a_?"],"b7.T":"a_?"},"lI":{"bf":["f","A<e>"],"bf.S":"f"},"lJ":{"b7":["f","A<e>"],"b7.T":"A<e>"},"j3":{"b7":["A<e>","f"],"b7.T":"f"},"hU":{"aY":["hU"]},"aa":{"aY":["aa"]},"V":{"bH":[],"aY":["bH"]},"ci":{"aY":["ci"]},"e":{"bH":[],"aY":["bH"]},"A":{"U":["1"],"i":["1"]},"bH":{"aY":["bH"]},"tB":{"fj":[]},"iO":{"cA":[]},"d5":{"U":["1"],"i":["1"]},"f":{"aY":["f"],"fj":[]},"aR":{"hU":[],"aY":["hU"]},"m4":{"Y":[]},"jS":{"aC":[]},"e_":{"aC":[]},"cc":{"aC":[]},"hb":{"aC":[]},"kC":{"aC":[]},"j2":{"aC":[]},"lF":{"aC":[]},"dT":{"aC":[]},"ka":{"aC":[]},"l5":{"aC":[]},"iX":{"aC":[]},"kI":{"aC":[]},"mn":{"eB":[]},"bE":{"IZ":[]},"jv":{"ue":[]},"m8":{"IL":[]},"Ii":{"A":["e"],"U":["e"],"i":["e"]},"e1":{"A":["e"],"U":["e"],"i":["e"]},"J3":{"A":["e"],"U":["e"],"i":["e"]},"Ih":{"A":["e"],"U":["e"],"i":["e"]},"BX":{"A":["e"],"U":["e"],"i":["e"]},"kH":{"A":["e"],"U":["e"],"i":["e"]},"ud":{"A":["e"],"U":["e"],"i":["e"]},"Ic":{"A":["V"],"U":["V"],"i":["V"]},"Id":{"A":["V"],"U":["V"],"i":["V"]},"km":{"b5":["ch"]},"fV":{"b7":["A<e>","ch"]},"ky":{"be":[],"b5":["A<e>"]},"mf":{"fV":[],"b7":["A<e>","ch"],"b7.T":"ch"},"mh":{"be":[],"b5":["A<e>"]},"mg":{"be":[],"b5":["A<e>"]},"mi":{"fV":[],"b7":["A<e>","ch"],"b7.T":"ch"},"mj":{"be":[],"b5":["A<e>"]},"lr":{"be":[],"b5":["A<e>"]},"jY":{"eV":[]},"jZ":{"i8":[]},"k1":{"fJ":[],"cv":[]},"k2":{"d6":[],"fJ":[],"cv":[]},"k_":{"el":[],"d2":[]},"hV":{"cv":[],"d2":[]},"el":{"d2":[]},"ez":{"cv":[]},"d6":{"cv":[]},"kz":{"be":[],"b5":["A<e>"]},"m7":{"be":[],"b5":["A<e>"]},"io":{"h0":[]},"cz":{"be":[],"b5":["A<e>"]},"mc":{"cR":[],"cz":[],"be":[],"b5":["A<e>"]},"bp":{"he":[]},"bs":{"Q":["e"],"A":["e"],"U":["e"],"i":["e"],"Q.E":"e"},"BT":{"h0":[]},"d7":{"io":[],"BT":[],"h0":[]},"bD":{"lf":[],"aY":["bD"]},"l6":{"b5":["ch"]},"l7":{"f2":[],"be":[],"b5":["A<e>"]},"kd":{"eV":[]},"ki":{"d2":[]},"fO":{"Y":[]},"f1":{"cv":[],"d2":[]},"jW":{"f2":[],"cR":[],"cz":[],"be":[],"b5":["A<e>"]},"f2":{"be":[],"b5":["A<e>"]},"cR":{"cz":[],"be":[],"b5":["A<e>"]},"kg":{"i8":[]},"i2":{"el":[],"d2":[]},"lY":{"cR":[],"cz":[],"be":[],"b5":["A<e>"]},"i4":{"cv":[]},"m_":{"f2":[],"be":[],"b5":["A<e>"]},"kj":{"d6":[],"cv":[]},"P":{"aY":["P"]},"hu":{"Y":[]},"cB":{"aY":["cB"]},"cb":{"Y":[]},"dj":{"Y":[]},"eC":{"Y":[]},"eE":{"Y":[]},"fp":{"Y":[]},"dU":{"Y":[]},"du":{"Y":[]},"cd":{"Y":[]},"eg":{"Y":[]},"eF":{"Y":[]},"eh":{"Y":[]},"bW":{"Y":[]},"dD":{"Y":[]},"cW":{"Y":[]},"ev":{"Y":[]},"ew":{"Y":[]},"dx":{"Y":[]},"dy":{"Y":[]},"f6":{"Y":[]},"dk":{"Y":[]},"cQ":{"Y":[]},"cw":{"Y":[]},"dB":{"Y":[]},"md":{"ag":["f","X"],"a9":["f","X"],"af":["f","X"],"a9.K":"f","a9.V":"X","ag.K":"f","ag.V":"X"},"hc":{"Y":[]},"bg":{"Y":[]},"bX":{"Y":[]},"cT":{"Y":[]},"iN":{"Y":[]},"bt":{"Y":[]},"ag":{"a9":["1","2"],"af":["1","2"],"a9.K":"1","a9.V":"2","ag.K":"1","ag.V":"2"},"j_":{"cF":["1"],"d5":["1"],"U":["1"],"i":["1"]},"ck":{"Y":[]},"ei":{"es":[]},"fK":{"es":[]},"iH":{"es":[]},"iG":{"es":[]},"i7":{"es":[]},"dI":{"Y":[]},"fq":{"Y":[]},"d3":{"Y":[]},"B":{"aY":["B"]},"bR":{"Y":[]},"bM":{"Y":[]},"bC":{"Y":[]},"d4":{"Y":[]},"aJ":{"Y":[]},"ae":{"Y":[]},"eu":{"Y":[]},"cn":{"Y":[]},"ho":{"Y":[]},"cI":{"Y":[]},"aQ":{"Y":[]},"h8":{"cE":[]},"iJ":{"cE":[]},"hd":{"cE":[]},"c6":{"Y":[]},"fs":{"Y":[]},"dW":{"Y":[]},"cm":{"Y":[]},"ex":{"Y":[]},"kD":{"HW":[]},"bc":{"Y":[]},"fT":{"J1":[]},"ff":{"Y":[]},"fW":{"Y":[]},"et":{"Y":[]},"ee":{"Y":[]},"iL":{"h9":[]},"iK":{"h9":[]},"dZ":{"Y":[]},"dY":{"Y":[]}}'))
A.JG(v.typeUniverse,JSON.parse('{"hm":1,"jz":2,"bw":1,"jm":1,"ju":1,"ls":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",z:"Nothing to change: it is already as asked.",F:"Sent. The phone adds the loan on its next sync.",L:"Sent. The phone applies it on its next sync.",m:"Sent. The phone removes it on its next sync.",p:"This browser cannot keep the page joined.",V:"newKeyPairFromSeed() is unsupported by this algorithm",y:"one of them is already filed, paired or linked",M:"only the last 4 characters of a number are kept",s:"the expense is filed under a spending category of "}
var t=(function rtii(){var s=A.a0
return{b:s("br"),ov:s("dh"),i6:s("ee"),bL:s("di"),jN:s("cb"),V:s("aX"),vi:s("dj"),dd:s("dk"),w:s("bV"),D:s("fH"),d6:s("eg"),e4:s("eh"),Cv:s("jX"),ta:s("bB"),la:s("hW"),kc:s("dl"),l2:s("hX"),h:s("B"),ok:s("ce"),eY:s("ct"),G:s("bK"),zC:s("dn"),xr:s("k6"),nl:s("dp"),gM:s("cf"),hO:s("aY<@>"),ca:s("kb"),hD:s("aZ<f,f>"),hq:s("aZ<f,e>"),x:s("cP<f>"),w0:s("cQ"),eV:s("cg"),kk:s("cR"),zG:s("aa"),k5:s("P"),rU:s("i6"),g7:s("cT"),CU:s("cu"),lA:s("fR"),il:s("bM"),l9:s("cU"),F:s("ds"),eP:s("ci"),he:s("U<@>"),w5:s("cV"),yt:s("aC"),eG:s("du"),xH:s("ie"),pp:s("ku"),Fj:s("bn"),BO:s("dv"),uo:s("b9<f?>"),AI:s("b9<f?>()"),U:s("b9<~>()"),ip:s("cj<cb,f>"),pA:s("cX<cd>"),rv:s("c0"),vS:s("dw"),cE:s("ih"),jf:s("dx"),AK:s("dz"),yO:s("ek"),aB:s("kE"),nq:s("bW"),wR:s("f7<V>"),hS:s("cl"),p0:s("f8"),ud:s("em"),lj:s("dB"),Ap:s("f9"),gy:s("cw"),eX:s("fa"),mp:s("dC"),qn:s("dE"),oJ:s("i<V>"),tY:s("i<@>"),uI:s("i<e>"),Q:s("u<br>"),uD:s("u<dh>"),eF:s("u<di>"),kd:s("u<aX>"),Dy:s("u<jR>"),nK:s("u<jU>"),lt:s("u<k3>"),cs:s("u<bB>"),gI:s("u<dl>"),xQ:s("u<B>"),eR:s("u<ce>"),nt:s("u<k4>"),sA:s("u<ct>"),Dz:s("u<dn>"),h5:s("u<dp>"),Aq:s("u<cf>"),au:s("u<cg>"),xI:s("u<fN>"),yk:s("u<cu>"),xz:s("u<fR>"),CP:s("u<kn>"),eO:s("u<fS>"),m1:s("u<ds>"),jL:s("u<ej>"),kW:s("u<ie>"),ic:s("u<bN>"),dZ:s("u<bn>"),y0:s("u<c0>"),lN:s("u<dw>"),zA:s("u<ih>"),Fq:s("u<dz>"),jw:s("u<kv>"),oT:s("u<cY>"),DA:s("u<kF>"),ew:s("u<f9>"),t7:s("u<dC>"),aW:s("u<dE>"),p9:s("u<fX>"),sL:s("u<ab>"),aV:s("u<fd>"),k1:s("u<fe>"),e:s("u<v>"),nB:s("u<ae>"),Z:s("u<b3>"),AM:s("u<dH>"),tZ:s("u<A<f>>"),uw:s("u<A<e>>"),iF:s("u<d0>"),q0:s("u<h2>"),bk:s("u<af<f,a_?>>"),lz:s("u<iw>"),g:s("u<q>"),fB:s("u<dJ>"),aH:s("u<h6>"),Fn:s("u<kW>"),A:s("u<X>"),dQ:s("u<bg>"),sp:s("u<l0>"),cp:s("u<l3>"),Dk:s("u<l4>"),Y:s("u<ak>"),ey:s("u<fk>"),uE:s("u<fl>"),rA:s("u<bo>"),ev:s("u<lc>"),yT:s("u<iM>"),tJ:s("u<dK>"),EQ:s("u<dL>"),hy:s("u<+(B,B)>"),AW:s("u<+(f,A<V>)>"),I:s("u<+(f,f)>"),qM:s("u<+(e,X)>"),wt:s("u<+(e,f)>"),l7:s("u<+month,year(e,e)>"),hK:s("u<+(X,X,bR)>"),Dg:s("u<+(e,e,bR)>"),sG:s("u<+(f,f,f,f?)>"),xj:s("u<+complete,month,spent,year(k,e,q,e)>"),kY:s("u<+(e,e,k,af<f?,q>)>"),Ai:s("u<+(e,e,B,k,X?)>"),sx:s("u<lg>"),zM:s("u<dN>"),cM:s("u<lh>"),be:s("u<li>"),D6:s("u<iQ>"),os:s("u<ll>"),wp:s("u<cC>"),M:s("u<W>"),qH:s("u<dO>"),j2:s("u<fn>"),kz:s("u<bb>"),vV:s("u<dP>"),st:s("u<dQ>"),sv:s("u<lo>"),EA:s("u<iU>"),EP:s("u<lp>"),mt:s("u<lq>"),mu:s("u<co>"),bD:s("u<d8>"),vk:s("u<hh>"),g0:s("u<dS>"),Ev:s("u<hj>"),Ec:s("u<cG>"),k6:s("u<c7>"),CL:s("u<lw>"),s:s("u<f>"),e3:s("u<lz>"),xw:s("u<lD>"),nS:s("u<lE>"),eE:s("u<e1>"),DO:s("u<d9>"),oc:s("u<by>"),C7:s("u<hn>"),sj:s("u<k>"),zp:s("u<V>"),zz:s("u<@>"),t:s("u<e>"),qt:s("u<ig?>"),dr:s("u<q?>"),q:s("u<f?>"),wF:s("u<V?>"),rw:s("bv<@>"),Be:s("fY"),m:s("ab"),g9:s("dG"),Eh:s("c1<@>"),nm:s("il"),io:s("fd"),pj:s("ip<d7,bD>"),ch:s("cZ"),k2:s("v"),P:s("ae"),u:s("b3"),xt:s("iq"),Ft:s("A<aX>"),aF:s("A<B>"),vG:s("A<af<f,a_?>>"),r9:s("A<q>"),C:s("A<X>"),tU:s("A<ak>"),iX:s("A<ak>(h1,f,e,aa)"),to:s("A<bo>"),DX:s("A<+(f,f)>"),sO:s("A<+(e,X)>"),BU:s("A<+(f,f,f,f?)>"),Bz:s("A<W>"),zo:s("A<co>"),Fu:s("A<d8>"),nd:s("A<hj>"),a:s("A<f>"),j:s("A<@>"),L:s("A<e>"),iP:s("A<f?>"),pt:s("d0"),gd:s("dI"),Ep:s("d1"),sd:s("cz"),zc:s("iu"),qo:s("d3"),ub:s("ap<f,cZ>"),AT:s("ap<f,f>"),dK:s("ap<f,e>"),nF:s("ap<f?,A<q>>"),Ez:s("af<f,bK>"),Cu:s("af<f,b3>"),Dm:s("af<f,X>"),sw:s("af<f,bt>"),yz:s("af<f,f>"),f:s("af<@,@>"),J:s("af<f,a_?>"),mE:s("af<a_?,a_?>"),zK:s("aj<f,f>"),wL:s("aj<f,e>"),FC:s("aj<e,V>"),BA:s("aj<f?,f>"),lQ:s("cA"),o:s("h5"),B:s("q"),aD:s("q(bB)"),wg:s("dJ"),wy:s("h6"),W:s("X"),y6:s("ep"),v_:s("bg"),i:s("h7"),Eg:s("er"),Ag:s("c3"),iT:s("fh"),kx:s("fi<f>"),aU:s("bh"),K:s("a_"),_:s("ak"),eM:s("h9"),l3:s("ha"),cL:s("fj"),fN:s("bX"),pL:s("fk"),cZ:s("la"),AB:s("bo"),mZ:s("ev"),cl:s("iM"),t_:s("ew"),gv:s("bC"),tW:s("dK"),C5:s("d4"),y3:s("dL"),Fx:s("cB"),op:s("NU"),ep:s("+()"),sH:s("+(B,B)"),aa:s("+(B,hi?)"),qD:s("+end,loans(B,A<hj>)"),sF:s("+(bg,f?)"),g5:s("+(f,dk)"),Dt:s("+(f,B)"),jg:s("+(f,A<V>)"),z9:s("+(f,c6)"),p_:s("+(f,f)"),uB:s("+(e,X)"),jr:s("+(e,f)"),l1:s("+month,year(e,e)"),wD:s("+(a_?,a_?)"),ct:s("+(X,X,bR)"),Bf:s("+accountId,from,to(f,B,B)"),bY:s("+(f,cT,q)"),xG:s("+(f,f,cT)"),ER:s("+(f,f,f)"),d3:s("+(f,f,f?)"),xC:s("+(e,q,d5<f>)"),Ei:s("+(e,e,bR)"),Cw:s("+(f,f,f,cT)"),jm:s("+(f,f,f,f?)"),hf:s("+complete,month,spent,year(k,e,q,e)"),nr:s("+(e,e,k,af<f?,q>)"),nX:s("+date,eventId,hash,n,removed(B,f,f,e,k)"),fK:s("cm"),ez:s("iO"),iJ:s("dN"),xM:s("lk"),hn:s("cn"),q6:s("aP<f>"),gb:s("aP<e>"),t5:s("cC"),k:s("W"),dw:s("dO"),CW:s("aQ"),fC:s("fn"),jF:s("lm"),cy:s("ex"),R:s("bb"),cT:s("cE"),di:s("dP"),kG:s("dQ"),mg:s("iS"),yX:s("ey"),c:s("he"),A0:s("bp"),aA:s("iU"),dO:s("d5<f>"),bu:s("fo"),gc:s("hg"),gZ:s("BT"),jC:s("d7"),qC:s("bD"),uC:s("b5<ch>"),c5:s("co"),in:s("c6"),Ba:s("lu"),d:s("bt"),qp:s("d8"),l:s("eB"),sN:s("dS"),qe:s("eC"),DV:s("lv"),AD:s("eD"),Bu:s("dU"),A9:s("dV"),nT:s("fp"),iL:s("fq"),dh:s("cG"),v:s("c7"),u4:s("eE"),N:s("f"),j3:s("f()"),n:s("f(cA)"),ff:s("f(f)"),tx:s("f(f?)"),tD:s("hl"),lG:s("eF"),aT:s("fs"),EL:s("lA"),hz:s("lC"),zs:s("ag<f,br>"),l4:s("ag<f,eg>"),rE:s("ag<f,bK>"),DF:s("ag<f,c0>"),hl:s("ag<f,f8>"),F4:s("ag<f,h5>"),BK:s("ag<f,ep>"),AJ:s("ag<f,bb>"),dB:s("ag<+(f,B),eD>"),n7:s("ag<f,A<bo>>"),ur:s("j_<f>"),sg:s("ay"),oo:s("cp(B?)"),ib:s("dY"),qx:s("dZ"),bs:s("e_"),Dd:s("ud"),p:s("e1"),qF:s("eG"),iB:s("e2<f,q>"),tB:s("d9"),ya:s("ue"),xN:s("cI"),qK:s("o<br>"),gF:s("o<aX>"),rb:s("o<cf>"),km:s("o<bW>"),rx:s("o<ae>"),dL:s("o<d0>"),yL:s("o<X>"),dN:s("o<+complete,month,spent,year(k,e,q,e)>"),yF:s("o<+(e,e,k,af<f?,q>)>"),o_:s("o<cm>"),vL:s("o<cn>"),rK:s("o<bt>"),i0:s("o<bc>"),m5:s("O<ae>"),eT:s("j4<f>"),E:s("by"),q9:s("da"),Ck:s("cJ<ab>"),th:s("cJ<@>"),le:s("cJ<a_?>"),nx:s("aR"),oX:s("an<ab>"),hR:s("an<@>"),nR:s("an<a_?>"),gH:s("an<f?>"),wE:s("dd<X>"),dU:s("dd<+(e,e)>"),sn:s("bc"),y:s("k"),cP:s("k(br)"),vu:s("k(aX)"),qB:s("k(cf)"),wx:s("k(bW)"),Ab:s("k(ae)"),jM:s("k(d0)"),fx:s("k(X)"),bl:s("k(a_)"),nn:s("k(+complete,month,spent,year(k,e,q,e))"),jb:s("k(+(e,e,k,af<f?,q>))"),AH:s("k(cm)"),rt:s("k(cn)"),ns:s("k(bt)"),aX:s("k(bc)"),pR:s("V"),oe:s("V(e)"),z:s("@"),pF:s("@()"),h_:s("@(a_)"),nW:s("@(a_,eB)"),S:s("e"),aY:s("e(f)"),tF:s("B?"),eZ:s("b9<bh>?"),uh:s("ab?"),jS:s("A<@>?"),ks:s("A<e>?"),yq:s("af<@,@>?"),c_:s("af<f,a_?>?"),X:s("a_?"),T:s("f?"),tj:s("f(cA)?"),F5:s("e1?"),f7:s("e3<@,@>?"),Af:s("mb?"),k7:s("k?"),u6:s("V?"),lo:s("e?"),lF:s("e(f)?"),ht:s("B?()?"),b0:s("f?()?"),s7:s("bH?"),r:s("bH"),H:s("~"),O:s("~()"),ma:s("~(f)"),m2:s("~(f,@)"),uH:s("~(lC)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.fp=J.kJ.prototype
B.a=J.u.prototype
B.d=J.ij.prototype
B.fr=J.fY.prototype
B.O=J.fb.prototype
B.b=J.dF.prototype
B.fs=J.dG.prototype
B.ft=J.ik.prototype
B.az=A.iy.prototype
B.b3=A.iz.prototype
B.kH=A.iB.prototype
B.D=A.iC.prototype
B.i=A.fh.prototype
B.dV=J.lb.prototype
B.cj=J.eG.prototype
B.bb=new A.ee("Cards",1,"cards")
B.bc=new A.ee("Bank accounts",0,"bank")
B.bd=new A.ee("Loans",2,"loans")
B.M=new A.cb(0,"savings")
B.Q=new A.cb(1,"current")
B.y=new A.cb(2,"creditCard")
B.o=new A.cb(3,"loan")
B.x=new A.cb(4,"cash")
B.a5=new A.cb(5,"retirement")
B.cq=new A.dj("NRE",0,"nre")
B.cr=new A.dj("NRO",1,"nro")
B.be=new A.dj("SRS",2,"srs")
B.ei=new A.hT(!1)
B.K=new A.fH(B.ei)
B.ej=new A.hT(!0)
B.eh=new A.fH(B.ej)
B.bf=new A.eg(0,"disputed")
B.cs=new A.eg(1,"cancelled")
B.ct=new A.cd(0,"unverified")
B.bg=new A.cd(1,"open")
B.bh=new A.cd(2,"partiallyPaid")
B.bi=new A.cd(3,"paid")
B.aC=new A.cd(4,"overdue")
B.cu=new A.cd(5,"disputed")
B.bj=new A.cd(6,"cancelled")
B.bk=new A.cd(7,"paymentNotKnown")
B.cx=new A.k1()
B.en=new A.k_(B.cx,"SHA-256")
B.cF=new A.i5(null)
B.eo=new A.n3(null)
B.cw=new A.f7(A.Mw(),t.wR)
B.cv=new A.f7(A.Mx(),t.wR)
B.B=new A.jV()
B.ep=new A.k2()
B.n8=new A.nb()
B.cy=new A.ki()
B.bl=new A.i4()
B.cz=new A.kj()
B.n9=new A.kl(A.a0("kl<0&>"))
B.cA=new A.i7()
B.bm=new A.ic(A.a0("ic<0&>"))
B.av=new A.kr()
B.a1=new A.kr()
B.nb=new A.ci(288e8)
B.q=new A.nC()
B.nc=s([3,1],t.t)
B.bn=new A.nK()
B.Y=new A.kI()
B.cB=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eq=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.ev=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.er=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eu=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.et=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.es=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.cC=function(hooks) { return hooks; }

B.z=new A.kO()
B.aD=new A.kV(A.a0("kV<e>"))
B.ew=new A.iH()
B.ex=new A.l5()
B.na=new A.tz()
B.ey=new A.tL()
B.t=new A.tP()
B.ez=new A.tY()
B.eA=new A.u7()
B.R=new A.lI()
B.E=new A.lJ()
B.S=new A.uz()
B.W=new A.me()
B.aE=new A.mf()
B.eB=new A.mi()
B.aF=new A.mn()
B.eH=new A.fO(0,"argon2d")
B.cD=new A.fO(1,"argon2i")
B.bo=new A.fO(2,"argon2id")
B.cE=new A.f1(64)
B.eI=new A.i2(B.bl)
B.m=new A.cT(0,"inflow")
B.j=new A.cT(1,"outflow")
B.nh=s(["document"],t.s)
B.bp=new A.bM("Document",null,9,"other")
B.nw=s(["work","permit","wp"],t.s)
B.cG=new A.bM("Work permit",!0,4,"workPermit")
B.eR=new A.ci(0)
B.eS=new A.ci(1)
B.eT=new A.ci(2e7)
B.eU=new A.ci(6e7)
B.k=new A.aJ(0,"text")
B.a2=new A.aJ(1,"long")
B.bq=new A.aJ(10,"people")
B.a3=new A.aJ(11,"account")
B.ae=new A.aJ(12,"book")
B.F=new A.aJ(13,"ref")
B.aG=new A.aJ(14,"policy")
B.br=new A.aJ(15,"document")
B.am=new A.aJ(16,"movement")
B.bs=new A.aJ(17,"invoice")
B.aH=new A.aJ(18,"file")
B.a6=new A.aJ(19,"last4")
B.r=new A.aJ(2,"date")
B.a0=new A.aJ(20,"flag")
B.an=new A.aJ(21,"address")
B.aI=new A.aJ(22,"percent")
B.bt=new A.aJ(23,"ifsc")
B.aJ=new A.aJ(3,"time")
B.ao=new A.aJ(4,"month")
B.u=new A.aJ(5,"money")
B.aK=new A.aJ(6,"decimal")
B.I=new A.aJ(7,"integer")
B.N=new A.aJ(8,"choice")
B.ap=new A.aJ(9,"person")
B.eX=new A.cW(0,"giro")
B.eY=new A.cW(1,"cardBill")
B.cH=new A.cW(2,"loan")
B.eZ=new A.cW(3,"income")
B.f_=new A.cW(4,"payment")
B.cI=new A.cW(5,"move")
B.f0=new A.cW(6,"premium")
B.f1=new A.b8("not a sender id",null,null)
B.f2=new A.b8("format",null,null)
B.f3=new A.b8("emailSha256 is not a SHA-256",null,null)
B.f4=new A.b8("not a sender address",null,null)
B.f5=new A.f6(0,"deducted")
B.f6=new A.f6(1,"owner")
B.f7=new A.f6(2,"lastTime")
B.f8=new A.f6(3,"unknown")
B.bu=new A.dx(0,"paid")
B.bv=new A.dx(1,"failed")
B.cJ=new A.dx(2,"none")
B.cK=new A.dx(3,"clear")
B.f9=new A.dy(0,"planned")
B.cL=new A.dy(1,"seen")
B.cM=new A.dy(2,"paidOwner")
B.fa=new A.dy(3,"failed")
B.fb=new A.dy(4,"unconfirmed")
B.cN=new A.dy(5,"none")
B.bw=new A.fW(0,"critical")
B.cO=new A.fW(1,"action")
B.cP=new A.fW(2,"info")
B.cQ=new A.bW(3,"document")
B.cR=new A.bW(4,"tdsCertificate")
B.cS=new A.ck(0,"scheduled")
B.cT=new A.ck(1,"dueSoon")
B.cU=new A.ck(2,"dueToday")
B.cV=new A.ck(3,"awaitingStatement")
B.aL=new A.ck(4,"paid")
B.bx=new A.ck(5,"partlyPaid")
B.by=new A.ck(6,"overdue")
B.aM=new A.ck(7,"confirmedByYou")
B.cW=new A.dD(0,"unplaced")
B.fq=new A.dD(1,"unpaid")
B.bz=new A.dD(2,"partlyPaid")
B.bA=new A.dD(3,"paid")
B.cX=new A.dD(4,"overpaid")
B.cY=new A.dD(5,"mismatch")
B.fu=new A.kQ(null)
B.fv=new A.kR(null)
B.T=new A.ip("ed25519",t.pj)
B.U=new A.ip("x25519",t.pj)
B.aN=new A.ff(0,"plain")
B.fw=new A.ff(1,"good")
B.fx=new A.ff(2,"warn")
B.cZ=new A.ff(3,"bad")
B.c=s([],t.s)
B.fT=new A.v("destination","Destination",B.k,!0,B.c,null,null,null,B.c,null)
B.im=new A.v("departs","Leaving on",B.r,!0,B.c,null,null,null,B.c,null)
B.h4=new A.v("returns","Back on",B.r,!0,B.c,null,null,null,B.c,null)
B.fI=new A.v("travellers","Travellers",B.bq,!0,B.c,null,null,null,B.c,null)
B.d_=new A.v("fromEvent","From the calendar",B.k,!1,B.c,null,null,null,B.c,null)
B.af=new A.v("file","Document",B.aH,!1,B.c,null,null,null,B.c,null)
B.jX=s([B.fT,B.im,B.h4,B.fI,B.d_,B.af],t.e)
B.db=new A.ae("Trip",B.jX,3,"trip")
B.iE=new A.v("loanId","Loan",B.a3,!0,B.c,null,null,null,B.c,null)
B.fY=new A.v("due","Due",B.r,!0,B.c,null,null,null,B.c,null)
B.da=new A.v("on","On",B.r,!0,B.c,null,null,null,B.c,null)
B.jV=s([B.iE,B.fY,B.da],t.e)
B.bF=new A.ae("Instalment you paid",B.jV,30,"loanInstalmentConfirm")
B.dB=s(["company"],t.s)
B.aP=new A.v("bookId","Company",B.ae,!0,B.c,null,null,null,B.dB,null)
B.hv=new A.v("name","Name",B.k,!0,B.c,null,null,null,B.c,null)
B.d3=new A.v("address","Address",B.an,!0,B.c,null,null,null,B.c,null)
B.i8=new A.v("attention","Attention",B.k,!1,B.c,null,null,null,B.c,null)
B.it=new A.v("paymentDays","Payment due after (days)",B.I,!1,B.c,null,0,365,B.c,null)
B.jw=s([B.aP,B.hv,B.d3,B.i8,B.it],t.e)
B.a4=new A.ae("Customer",B.jw,25,"customer")
B.hQ=new A.v("year","Year",B.I,!0,B.c,null,2000,2100,B.c,null)
B.hN=new A.v("employee","Employee share",B.u,!0,B.c,null,null,null,B.c,null)
B.hO=new A.v("employer","Employer share",B.u,!0,B.c,null,null,null,B.c,null)
B.ha=new A.v("source","From",B.k,!0,B.c,null,null,null,B.c,"The CPF statement")
B.iX=s([B.hQ,B.hN,B.hO,B.ha],t.e)
B.dc=new A.ae("CPF contributions",B.iX,11,"cpfYear")
B.d5=new A.v("title","What",B.k,!0,B.c,null,null,null,B.c,null)
B.aw=new A.v("date","Date",B.r,!0,B.c,null,null,null,B.c,null)
B.bD=new A.v("time","Time",B.aJ,!1,B.c,null,null,null,B.c,"HH:MM")
B.d1=new A.v("note","Note",B.a2,!1,B.c,null,null,null,B.c,null)
B.k6=s(["on-the-day","1-day-before","2-days-before","1-week-before"],t.s)
B.fG=new A.v("remind","Remind me",B.N,!1,B.k6,null,null,null,B.c,null)
B.jK=s([B.d5,B.aw,B.bD,B.d1,B.fG],t.e)
B.dd=new A.ae("Event",B.jK,17,"event")
B.iL=new A.v("invoiceId","Invoice",B.bs,!0,B.c,null,null,null,B.c,null)
B.hm=new A.v("file","Document",B.aH,!0,B.c,null,null,null,B.c,null)
B.kn=s([B.iL,B.hm],t.e)
B.de=new A.ae("Invoice document",B.kn,2,"invoiceFile")
B.fK=new A.v("personId","Helper",B.ap,!0,B.c,null,null,null,B.c,null)
B.h5=new A.v("permitId","Work permit",B.br,!1,B.c,null,null,null,B.c,null)
B.hl=new A.v("renewalDate","Permit renewal",B.r,!1,B.c,null,null,null,B.c,null)
B.hI=new A.v("medicalDue","Medical examination due",B.r,!1,B.c,null,null,null,B.c,null)
B.fZ=new A.v("contractEnds","Contract ends",B.r,!1,B.c,null,null,null,B.c,null)
B.i2=new A.v("source","Dates from",B.k,!1,B.c,null,null,null,B.c,"The permit, policy or MOM notice")
B.jS=s([B.fK,B.h5,B.hl,B.hI,B.fZ,B.i2],t.e)
B.df=new A.ae("Helper",B.jS,8,"helper")
B.bC=new A.v("tenancyId","Tenancy",B.F,!0,B.c,"tenancy",null,null,B.c,null)
B.ig=new A.v("legalName","Tenant's legal name",B.k,!0,B.c,null,null,null,B.c,null)
B.hV=new A.v("address","Tenant's address",B.an,!0,B.c,null,null,null,B.c,null)
B.ix=new A.v("gstinLast4","Tenant's GSTIN, last 4",B.a6,!0,B.c,null,null,null,B.c,null)
B.iv=new A.v("placeOfSupply","Place of supply",B.k,!0,B.c,null,null,null,B.c,'Like "Tamil Nadu (33)"')
B.hw=new A.v("service","Service name",B.k,!0,B.c,null,null,null,B.c,'Like "Rent of Example Plaza"')
B.fM=new A.v("sac","SAC",B.I,!1,B.c,null,99e4,999999,B.c,"997212 when left empty")
B.ie=new A.v("tdsPercent","TDS the tenant deducts (%)",B.aI,!1,B.c,null,null,null,B.c,"10 when left empty")
B.jA=s(["1","2","3"],t.s)
B.hR=new A.v("layout","Layout",B.N,!0,B.jA,null,null,null,B.c,null)
B.aO=new A.v("seriesId","Invoice series",B.F,!0,B.c,"rentSeries",null,null,B.c,null)
B.iK=new A.v("accountId","Rent paid into",B.a3,!0,B.c,null,null,null,B.c,null)
B.i5=new A.v("ifsc","IFSC",B.bt,!0,B.c,null,null,null,B.c,null)
B.ir=new A.v("accountNote","After the account number",B.k,!1,B.c,null,null,null,B.c,"Like NRO")
B.hy=new A.v("invoiceDay","Invoices dated on day",B.I,!1,B.c,null,1,31,B.c,null)
B.iR=new A.v("datedMonthBefore","Dated in the month before",B.a0,!1,B.c,null,null,null,B.c,null)
B.fC=new A.v("workingDay","Moved to the nearest working day",B.a0,!1,B.c,null,null,null,B.c,null)
B.jR=s([B.bC,B.ig,B.hV,B.ix,B.iv,B.hw,B.fM,B.ie,B.hR,B.aO,B.iK,B.i5,B.ir,B.hy,B.iR,B.fC],t.e)
B.aQ=new A.ae("Invoicing details",B.jR,20,"tenancyBilling")
B.fJ=new A.v("draftId","Draft",B.F,!0,B.c,"invoiceDraft",null,null,B.c,null)
B.hf=new A.v("description","Description",B.a2,!0,B.c,null,null,null,B.c,null)
B.iH=new A.v("quantity","Quantity",B.aK,!0,B.c,null,null,null,B.c,null)
B.hd=new A.v("unitPrice","Unit price",B.u,!0,B.c,null,null,null,B.c,null)
B.ju=s(["standard","zero-rated"],t.s)
B.id=new A.v("gst","GST",B.N,!1,B.ju,null,null,null,B.c,"Standard when left empty")
B.ji=s([B.fJ,B.hf,B.iH,B.hd,B.id],t.e)
B.aq=new A.ae("Invoice line",B.ji,27,"invoiceDraftLine")
B.bE=new A.v("personId","For",B.ap,!0,B.c,null,null,null,B.c,null)
B.fL=new A.v("provider","Clinic or hospital",B.k,!0,B.c,null,null,null,B.c,null)
B.hr=new A.v("total","Bill total",B.u,!0,B.c,null,null,null,B.c,null)
B.d9=new A.v("medisave","Paid by MediSave",B.u,!1,B.c,null,null,null,B.c,null)
B.iC=new A.v("insurance","Paid by insurance",B.u,!1,B.c,null,null,null,B.c,null)
B.iq=new A.v("movementId","Card or cash transaction",B.am,!1,B.c,null,null,null,B.c,null)
B.iw=new A.v("policyId","Policy",B.aG,!1,B.c,null,null,null,B.c,null)
B.j_=s([B.bE,B.aw,B.fL,B.hr,B.d9,B.iC,B.iq,B.iw,B.af],t.e)
B.dg=new A.ae("Medical bill",B.j_,6,"medicalBill")
B.i1=new A.v("pattern","Number pattern",B.k,!0,B.c,null,null,null,B.c,"Like INV-{nnn}-{fy}")
B.hu=new A.v("startNumber","Next number",B.I,!0,B.c,null,1,999999,B.c,null)
B.iQ=new A.v("yearly","Start again at 1 each April",B.a0,!1,B.c,null,null,null,B.c,null)
B.i0=new A.v("startYear","Year of the next number",B.k,!1,B.c,null,null,null,B.c,"Like 26/27")
B.kd=s([B.i1,B.hu,B.iQ,B.i0],t.e)
B.ag=new A.ae("Invoice series",B.kd,19,"rentSeries")
B.k7=s(["oa","sa","ra","ma"],t.s)
B.fO=new A.v("account","CPF account",B.N,!0,B.k7,null,null,null,B.c,null)
B.h1=new A.v("amount","Amount",B.u,!0,B.c,null,null,null,B.c,null)
B.fS=new A.v("purpose","For",B.k,!0,B.c,null,null,null,B.c,null)
B.jq=s([B.fO,B.h1,B.aw,B.fS],t.e)
B.dh=new A.ae("Paid from CPF",B.jq,12,"cpfUse")
B.d7=new A.v("policyId","Policy",B.aG,!0,B.c,null,null,null,B.c,null)
B.iz=new A.v("billId","Bill",B.F,!1,B.c,"medicalBill",null,null,B.c,null)
B.hY=new A.v("claimed","Claimed",B.u,!0,B.c,null,null,null,B.c,null)
B.ii=new A.v("submitted","Submitted on",B.r,!1,B.c,null,null,null,B.c,null)
B.kg=s(["preparing","submitted","approved","rejected","paid"],t.s)
B.io=new A.v("status","Status",B.N,!0,B.kg,null,null,null,B.c,null)
B.i9=new A.v("paid","Paid out",B.u,!1,B.c,null,null,null,B.c,null)
B.i_=new A.v("creditMovementId","Claim credit transaction",B.am,!1,B.c,null,null,null,B.c,null)
B.iY=s([B.d7,B.bE,B.iz,B.hY,B.ii,B.io,B.i9,B.i_,B.af],t.e)
B.bG=new A.ae("Claim",B.iY,7,"claim")
B.hD=new A.v("name","Name",B.k,!0,B.c,null,null,null,B.c,'Like "Chennai shop"')
B.js=s(["SG","IN"],t.s)
B.d2=new A.v("country","Country",B.N,!0,B.js,null,null,null,B.c,null)
B.jU=s(["home","commercial","land","other"],t.s)
B.fD=new A.v("type","Type",B.N,!0,B.jU,null,null,null,B.c,null)
B.is=new A.v("share","Your share (%)",B.I,!1,B.c,null,1,100,B.c,null)
B.hT=new A.v("purchased","Bought on",B.r,!1,B.c,null,null,null,B.c,null)
B.iP=new A.v("loanAccountId","Loan",B.a3,!1,B.c,null,null,null,B.c,null)
B.k9=s(["property","member"],t.s)
B.iM=new A.v("bookId","Book",B.ae,!1,B.c,null,null,null,B.k9,null)
B.hF=new A.v("gstr1Day","GSTR-1 due day",B.I,!1,B.c,null,1,28,B.c,null)
B.h9=new A.v("gstr3bDay","GSTR-3B due day",B.I,!1,B.c,null,1,28,B.c,null)
B.hn=new A.v("creditSeriesId","Credit note series",B.F,!1,B.c,"rentSeries",null,null,B.c,null)
B.je=s([B.hD,B.d2,B.fD,B.is,B.hT,B.iP,B.iM,B.hF,B.h9,B.hn,B.af],t.e)
B.ax=new A.ae("Property",B.je,0,"property")
B.d6=new A.v("propertyId","Property",B.F,!0,B.c,"property",null,null,B.c,null)
B.d4=new A.v("name","Name on the invoice",B.k,!0,B.c,null,null,null,B.c,null)
B.hq=new A.v("address","Address and phone",B.an,!0,B.c,null,null,null,B.c,null)
B.fy=new A.v("gstinLast4","GSTIN, last 4",B.a6,!0,B.c,null,null,null,B.c,null)
B.iy=new A.v("panLast4","PAN, last 4",B.a6,!0,B.c,null,null,null,B.c,null)
B.kp=s([B.d6,B.d4,B.hq,B.fy,B.iy],t.e)
B.aR=new A.ae("Invoice issuer",B.kp,18,"rentIssuer")
B.fV=new A.v("month","For the month",B.ao,!0,B.c,null,null,null,B.c,null)
B.bB=new A.v("date","Invoice date",B.r,!0,B.c,null,null,null,B.c,null)
B.jj=s([B.bC,B.aO,B.fV,B.bB],t.e)
B.ah=new A.ae("Rent invoice",B.jj,22,"rentInvoice")
B.iO=new A.v("uenLast4","UEN, last 4",B.a6,!0,B.c,null,null,null,B.c,null)
B.il=new A.v("gstRegistered","GST registered",B.a0,!1,B.c,null,null,null,B.c,null)
B.fA=new A.v("gstRegLast4","GST registration number, last 4",B.a6,!1,B.c,null,null,null,B.c,null)
B.iG=new A.v("accountId","Paid into",B.a3,!0,B.c,null,null,null,B.c,null)
B.hi=new A.v("paymentDays","Payment due after (days)",B.I,!1,B.c,null,0,365,B.c,"30 when left empty")
B.iD=new A.v("footer","Note on every invoice",B.a2,!1,B.c,null,null,null,B.c,null)
B.ja=s([B.aP,B.d4,B.d3,B.iO,B.il,B.fA,B.aO,B.iG,B.hi,B.iD],t.e)
B.ar=new A.ae("Company invoice issuer",B.ja,24,"companyIssuer")
B.he=new A.v("bookId","Book",B.ae,!0,B.c,null,null,null,B.dB,null)
B.iB=new A.v("incorporated","Incorporated on",B.r,!1,B.c,null,null,null,B.c,null)
B.fF=new A.v("last4","Registration number, last 4",B.a6,!1,B.c,null,null,null,B.c,null)
B.fX=new A.v("directors","Directors",B.k,!1,B.c,null,null,null,B.c,null)
B.jt=s([B.he,B.d2,B.iB,B.fF,B.fX,B.af],t.e)
B.aS=new A.ae("Company",B.jt,9,"company")
B.h6=new A.v("source","Proposed from",B.k,!0,B.c,null,null,null,B.c,null)
B.jZ=s([B.d5,B.aw,B.bD,B.h6],t.e)
B.di=new A.ae("Plan item",B.jZ,16,"planItem")
B.hB=new A.v("description","Description",B.k,!0,B.c,null,null,null,B.c,'Like "Common area maintenance"')
B.fB=new A.v("sac","SAC",B.I,!0,B.c,null,99e4,999999,B.c,null)
B.fW=new A.v("amount","Amount before GST",B.u,!0,B.c,null,null,null,B.c,null)
B.jo=s([B.bC,B.hB,B.fB,B.fW],t.e)
B.bH=new A.ae("Extra invoice line",B.jo,21,"tenancyLine")
B.ik=new A.v("invoiceId","Invoice",B.F,!0,B.c,"rentInvoice",null,null,B.c,null)
B.iF=new A.v("seriesId","Credit note series",B.F,!0,B.c,"rentSeries",null,null,B.c,null)
B.ho=new A.v("date","Credit note date",B.r,!0,B.c,null,null,null,B.c,null)
B.j5=s([B.ik,B.iF,B.ho],t.e)
B.ai=new A.ae("Credit note",B.j5,23,"rentCredit")
B.ih=new A.v("tripId","Trip",B.F,!0,B.c,"trip",null,null,B.c,null)
B.h_=new A.v("movementId","Transaction",B.am,!0,B.c,null,null,null,B.c,null)
B.hL=new A.v("attached","On the trip",B.a0,!0,B.c,null,null,null,B.c,null)
B.fH=new A.v("sgd","In SGD",B.u,!1,B.c,null,null,null,B.c,null)
B.iJ=new A.v("rate","Rate",B.aK,!1,B.c,null,null,null,B.c,null)
B.kj=s([B.ih,B.h_,B.hL,B.fH,B.iJ],t.e)
B.dj=new A.ae("Trip line",B.kj,4,"tripLine")
B.hp=new A.v("title","What",B.k,!0,B.c,null,null,null,B.c,'Like "Dentist"')
B.hK=new A.v("place","Where",B.k,!1,B.c,null,null,null,B.c,null)
B.j3=s([B.bE,B.hp,B.aw,B.bD,B.hK,B.d_],t.e)
B.dk=new A.ae("Appointment",B.j3,5,"appointment")
B.d0=new A.v("customerId","Customer",B.F,!0,B.c,"customer",null,null,B.c,null)
B.jI=s([B.aP,B.d0,B.aO,B.bB],t.e)
B.a7=new A.ae("Company invoice",B.jI,28,"companyInvoice")
B.k0=s(["landlord","tenant"],t.s)
B.fz=new A.v("role","You are the",B.N,!0,B.k0,null,null,null,B.c,null)
B.hW=new A.v("otherParty","Other party",B.k,!0,B.c,null,null,null,B.c,null)
B.hC=new A.v("rent","Rent",B.u,!1,B.c,null,null,null,B.c,null)
B.i4=new A.v("dueDay","Rent due on day",B.I,!1,B.c,null,1,31,B.c,null)
B.fE=new A.v("deposit","Deposit",B.u,!1,B.c,null,null,null,B.c,null)
B.ia=new A.v("starts","Lease starts",B.r,!1,B.c,null,null,null,B.c,null)
B.hP=new A.v("ends","Lease ends",B.r,!1,B.c,null,null,null,B.c,null)
B.j9=s([B.d6,B.fz,B.hW,B.hC,B.i4,B.fE,B.ia,B.hP,B.af],t.e)
B.as=new A.ae("Tenancy",B.j9,1,"tenancy")
B.hU=new A.v("title","Remind me to",B.k,!0,B.c,null,null,null,B.c,null)
B.fN=new A.v("anchor","From the date",B.r,!0,B.c,null,null,null,B.c,null)
B.h7=new A.v("offset","When",B.k,!0,B.c,null,null,null,B.c,'Like "1 month before"')
B.hj=new A.v("date","On",B.r,!0,B.c,null,null,null,B.c,null)
B.hb=new A.v("source","Source",B.a2,!0,B.c,null,null,null,B.c,null)
B.d8=new A.v("confirmedOn","Confirmed on",B.r,!0,B.c,null,null,null,B.c,null)
B.ka=s(["yearly","monthly","every-n-months","every-n-weeks"],t.s)
B.hS=new A.v("repeat","Repeats",B.N,!1,B.ka,null,null,null,B.c,null)
B.hZ=new A.v("every","Every how many months or weeks",B.I,!1,B.c,null,2,99,B.c,null)
B.fP=new A.v("until","Until",B.r,!1,B.c,null,null,null,B.c,null)
B.hz=new A.v("times","How many times in all",B.I,!1,B.c,null,2,999,B.c,null)
B.jQ=s([B.hU,B.fN,B.h7,B.hj,B.hb,B.d8,B.hS,B.hZ,B.fP,B.hz],t.e)
B.dl=new A.ae("Reminder",B.jQ,15,"ownReminder")
B.hx=new A.v("text","Fact",B.a2,!0,B.c,null,null,null,B.c,null)
B.i7=new A.v("sourceFile","From",B.k,!0,B.c,null,null,null,B.c,null)
B.iN=new A.v("span","Quote",B.a2,!1,B.c,null,null,null,B.c,null)
B.hg=new A.v("page","Page",B.I,!1,B.c,null,1,9999,B.c,null)
B.ij=new A.v("fileDate","File dated",B.r,!1,B.c,null,null,null,B.c,null)
B.iI=new A.v("asOf","True as of",B.r,!1,B.c,null,null,null,B.c,null)
B.iA=new A.v("driveFileId","Drive file",B.k,!1,B.c,null,null,null,B.c,null)
B.hX=new A.v("version","Copy",B.k,!1,B.c,null,null,null,B.c,null)
B.ib=new A.v("date","Date it names",B.r,!1,B.c,null,null,null,B.c,null)
B.h3=new A.v("recordId","About",B.k,!1,B.c,null,null,null,B.c,null)
B.ki=s([B.hx,B.i7,B.iN,B.hg,B.ij,B.iI,B.d8,B.iA,B.hX,B.ib,B.h3],t.e)
B.bI=new A.ae("Memory",B.ki,14,"memory")
B.hA=new A.v("reference","Customer reference",B.k,!1,B.c,null,null,null,B.c,"Like a PO number")
B.jg=s([B.aP,B.d0,B.bB,B.hA,B.d1],t.e)
B.a8=new A.ae("Invoice draft",B.jg,26,"invoiceDraft")
B.kb=s(["sent","gst-filed","gst-paid","gstr1-filed","gstr3b-paid","gst-itc","tds-certificate"],t.s)
B.fU=new A.v("what","What",B.N,!0,B.kb,null,null,null,B.c,null)
B.h0=new A.v("invoiceId","Invoice",B.F,!1,B.c,"rentInvoice",null,null,B.c,null)
B.ic=new A.v("tenancyId","Tenancy",B.F,!1,B.c,"tenancy",null,null,B.c,null)
B.fR=new A.v("quarter","Quarter",B.k,!1,B.c,null,null,null,B.c,null)
B.iS=new A.v("propertyId","Property",B.F,!1,B.c,"property",null,null,B.c,null)
B.iu=new A.v("month","Month",B.ao,!1,B.c,null,null,null,B.c,null)
B.hM=new A.v("reference","Reference",B.k,!1,B.c,null,null,null,B.c,null)
B.i6=new A.v("amount","Input tax credit",B.u,!1,B.c,null,null,null,B.c,null)
B.jm=s([B.fU,B.h0,B.ic,B.fR,B.iS,B.iu,B.da,B.hM,B.i6],t.e)
B.aT=new A.ae("Rental mark",B.jm,29,"rentalMark")
B.hH=new A.v("dueOn","Due on",B.r,!0,B.c,null,null,null,B.c,null)
B.hh=new A.v("cash","Paid in cash or card",B.u,!1,B.c,null,null,null,B.c,null)
B.h8=new A.v("movementId","Transaction",B.am,!1,B.c,null,null,null,B.c,null)
B.jT=s([B.d7,B.hH,B.hh,B.d9,B.h8],t.e)
B.aU=new A.ae("Premium paid",B.jT,13,"premiumPaid")
B.ip=new A.v("employer","Employer",B.k,!0,B.c,null,null,null,B.c,null)
B.hE=new A.v("period","Pay period",B.ao,!0,B.c,null,null,null,B.c,"YYYY-MM")
B.hJ=new A.v("payDate","Pay date",B.r,!0,B.c,null,null,null,B.c,null)
B.hk=new A.v("gross","Gross pay",B.u,!1,B.c,null,null,null,B.c,null)
B.fQ=new A.v("allowances","Allowances",B.u,!1,B.c,null,null,null,B.c,null)
B.hc=new A.v("bonus","Bonus",B.u,!1,B.c,null,null,null,B.c,null)
B.hs=new A.v("employeeCpf","Employee CPF",B.u,!1,B.c,null,null,null,B.c,null)
B.ht=new A.v("employerCpf","Employer CPF",B.u,!1,B.c,null,null,null,B.c,null)
B.i3=new A.v("otherDeductions","Other deductions",B.u,!1,B.c,null,null,null,B.c,null)
B.hG=new A.v("net","Net pay",B.u,!0,B.c,null,null,null,B.c,null)
B.h2=new A.v("accountId","Paid into",B.a3,!1,B.c,null,null,null,B.c,null)
B.iT=new A.v("reader","Read by",B.k,!1,B.c,null,null,null,B.c,null)
B.kk=s([B.ip,B.hE,B.hJ,B.hk,B.fQ,B.hc,B.hs,B.ht,B.i3,B.hG,B.h2,B.iT,B.af],t.e)
B.bJ=new A.ae("Payslip",B.kk,10,"payslip")
B.dm=s([1],t.t)
B.cb=new A.dU(0,"monthly")
B.cc=new A.dU(1,"quarterly")
B.cd=new A.dU(2,"halfYearly")
B.ce=new A.dU(3,"yearly")
B.iU=s([B.cb,B.cc,B.cd,B.ce],A.a0("u<dU>"))
B.aV=s([1,2],t.t)
B.dn=s([1,2,3],t.t)
B.dp=s([1,2,3,4],t.t)
B.dq=s([1,3],t.t)
B.dr=s([1,3,4,5],t.t)
B.ds=s([2],t.t)
B.l=s(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.s)
B.dt=s([2,3],t.t)
B.a9=s([3],t.t)
B.du=s([3,5],t.t)
B.iW=s([B.ah,B.ai,B.a7],t.nB)
B.dv=s([4],t.t)
B.dw=s([B.cq,B.cr,B.be],A.a0("u<dj>"))
B.dx=s([4,5],t.t)
B.kS=new A.bX(0,"cardTap")
B.kT=new A.bX(1,"cardOnline")
B.kU=new A.bX(2,"payLah")
B.kV=new A.bX(3,"payNow")
B.dS=new A.bX(4,"giro")
B.kW=new A.bX(5,"transfer")
B.kX=new A.bX(6,"axs")
B.kY=new A.bX(7,"cash")
B.kZ=new A.bX(8,"other")
B.iZ=s([B.kS,B.kT,B.kU,B.kV,B.dS,B.kW,B.kX,B.kY,B.kZ],A.a0("u<bX>"))
B.V=s(["January","February","March","April","May","June","July","August","September","October","November","December"],t.s)
B.dy=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.ml=new A.eF(0,"subscription")
B.mm=new A.eF(1,"domain")
B.mn=new A.eF(2,"certification")
B.j0=s([B.ml,B.mm,B.mn],A.a0("u<eF>"))
B.m2=new A.ex(0,"cashback")
B.m3=new A.ex(1,"miles")
B.m4=new A.ex(2,"points")
B.j1=s([B.m2,B.m3,B.m4],A.a0("u<ex>"))
B.j2=s([B.bc,B.bb,B.bd],A.a0("u<ee>"))
B.fj=new A.cw(0,"pending")
B.fk=new A.cw(1,"parsed")
B.fl=new A.cw(2,"pendingReview")
B.fm=new A.cw(3,"verified")
B.fn=new A.cw(4,"rejected")
B.fo=new A.cw(5,"failed")
B.j4=s([B.fj,B.fk,B.fl,B.fm,B.fn,B.fo],A.a0("u<cw>"))
B.lf=new A.d4("a month",0,"monthly")
B.lh=new A.d4("a quarter",1,"quarterly")
B.lj=new A.d4("a half-year",2,"halfYearly")
B.lg=new A.d4("a year",3,"yearly")
B.li=new A.d4("once",4,"single")
B.j6=s([B.lf,B.lh,B.lj,B.lg,B.li],A.a0("u<d4>"))
B.j7=s(["gross","allowances","bonus","employeeCpf","employerCpf","otherDeductions","net"],t.s)
B.j8=s([B.bf,B.cs],A.a0("u<eg>"))
B.bK=s([B.m,B.j],A.a0("u<cT>"))
B.eV=new A.du(0,"identity")
B.eW=new A.du(1,"helper")
B.jb=s([B.eV,B.eW],A.a0("u<du>"))
B.mf=new A.fp(0,"pdf")
B.mg=new A.fp(1,"csv")
B.jc=s([B.mf,B.mg],A.a0("u<fp>"))
B.b0=new A.dI(0,"personal")
B.bP=new A.dI(1,"home")
B.bQ=new A.dI(2,"commercial")
B.bR=new A.dI(3,"other")
B.bL=s([B.b0,B.bP,B.bQ,B.bR],A.a0("u<dI>"))
B.aW=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.J=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.jd=s(["missing-statement:","reminder:"],t.s)
B.lO=new A.r("standard","Standard-rated 9%")
B.lt=new A.r("zero-rated","Zero-rated")
B.jf=s([B.lO,B.lt],t.I)
B.dz=s(["https://www.googleapis.com/auth/drive.file","openid","email"],t.s)
B.n=new A.bg(0,"expense")
B.w=new A.bg(1,"income")
B.L=new A.bg(2,"ownAccountTransfer")
B.X=new A.bg(3,"cardBillPayment")
B.G=new A.bg(6,"refundOrReversal")
B.jh=s([B.n,B.w,B.L,B.X,B.G],t.dQ)
B.ee=new A.dk(0,"email")
B.ef=new A.dk(1,"sms")
B.eg=new A.dk(2,"push")
B.jk=s([B.ee,B.ef,B.eg],A.a0("u<dk>"))
B.ek=new A.eh(0,"monthly")
B.el=new A.eh(1,"yearly")
B.em=new A.eh(2,"none")
B.jl=s([B.ek,B.el,B.em],A.a0("u<eh>"))
B.b2=new A.bg(4,"loanInstalment")
B.jn=s([B.n,B.L,B.X,B.b2],t.dQ)
B.aX=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.jr=s(["TRANSFER TO OWN","OWN ACCOUNT","OWN A C"],t.s)
B.lv=new A.r("SGD","SGD")
B.ls=new A.r("INR","INR")
B.lx=new A.r("USD","USD")
B.jv=s([B.lv,B.ls,B.lx],t.I)
B.C=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ff=new A.dB(0,"sms")
B.fg=new A.dB(1,"email")
B.fh=new A.dB(2,"statement")
B.fi=new A.dB(3,"manual")
B.jx=s([B.ff,B.fg,B.fh,B.fi],A.a0("u<dB>"))
B.mc=new A.c6("Bank alerts",0,"bank")
B.mb=new A.c6("Agency",1,"agency")
B.md=new A.c6("Other",2,"other")
B.bM=s([B.mc,B.mb,B.md],A.a0("u<c6>"))
B.eC=new A.cQ(0,"full")
B.eD=new A.cQ(1,"aboveThreshold")
B.eE=new A.cQ(2,"pushOnly")
B.eF=new A.cQ(3,"statementOnly")
B.eG=new A.cQ(4,"unknown")
B.jy=s([B.eC,B.eD,B.eE,B.eF,B.eG],A.a0("u<cQ>"))
B.aY=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.jz=s(["Document","For","Country","Number","Issued","Expires","File"],t.s)
B.dA=s([1,2,3,4,5],t.t)
B.mi=new A.eE(0,"email")
B.mj=new A.eE(1,"drive")
B.mk=new A.eE(2,"bankApp")
B.jB=s([B.mi,B.mj,B.mk],A.a0("u<eE>"))
B.b4=new A.ev(0,"income")
B.l2=new A.ev(1,"payment")
B.bW=new A.ev(2,"move")
B.jC=s([B.b4,B.l2,B.bW],A.a0("u<ev>"))
B.cf=new A.fq(0,"personalLoan")
B.mh=new A.fq(1,"instalmentPlan")
B.jD=s([B.cf,B.mh],A.a0("u<fq>"))
B.fc=new A.bW(0,"tdsDeducted")
B.fd=new A.bW(1,"homeLoanInterest")
B.fe=new A.bW(2,"homeLoanPrincipal")
B.jE=s([B.fc,B.fd,B.fe,B.cQ,B.cR],A.a0("u<bW>"))
B.lo=new A.r("\\b(DBS|POSB)\\b","DBS")
B.lQ=new A.r("\\bUOB\\b|UNITED OVERSEAS","UOB")
B.lU=new A.r("\\bOCBC\\b","OCBC")
B.lu=new A.r("\\bICICI\\b","ICICI")
B.lV=new A.r("\\bAXIS\\b","Axis")
B.lJ=new A.r("\\bCITI(BANK)?\\b","Citibank")
B.lm=new A.r("\\bAMEX\\b|AMERICAN EXPRESS","American Express")
B.lI=new A.r("\\bHSBC\\b","HSBC")
B.jF=s([B.lo,B.lQ,B.lU,B.lu,B.lV,B.lJ,B.lm,B.lI],t.I)
B.lX=new A.cm(0,"subscription")
B.lY=new A.cm(1,"commitment")
B.lZ=new A.cm(2,"notRecurring")
B.jG=s([B.lX,B.lY,B.lZ],A.a0("u<cm>"))
B.jH=s([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)
B.p=s([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3],t.t)
B.jJ=s(["Policy","For","Number","Sum assured","Premium","Starts","Renews or ends"],t.s)
B.bN=s([],t.Q)
B.jP=s([],t.kd)
B.dC=s([],t.xQ)
B.dE=s([],t.Z)
B.jL=s([],t.g)
B.aa=s([],t.A)
B.dD=s([],t.Y)
B.jN=s([],t.M)
B.jM=s([],t.bD)
B.A=s([],t.t)
B.aZ=s([],t.zz)
B.jO=s([],t.l7)
B.b8=new A.bt(0,"committed")
B.aB=new A.bt(1,"essential")
B.c8=new A.bt(2,"optional")
B.dF=s([B.b8,B.aB,B.c8],A.a0("u<bt>"))
B.ci=new A.dZ("All",0,"all")
B.mA=new A.dZ("To file",1,"toFile")
B.my=new A.dZ("From alerts, not posted",2,"pending")
B.mz=new A.dZ("Filed",3,"filed")
B.dG=s([B.ci,B.mA,B.my,B.mz],A.a0("u<dZ>"))
B.dH=s([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],t.t)
B.jW=s(["Account","Bank","Kind","Balance","As of","Statements","Missing months","Alerts"],t.s)
B.mT=new A.cI(0,"property")
B.mU=new A.cI(1,"cpf")
B.mV=new A.cI(2,"retirement")
B.mW=new A.cI(3,"investment")
B.mX=new A.cI(4,"other")
B.ck=new A.cI(5,"loan")
B.jY=s([B.mT,B.mU,B.mV,B.mW,B.mX,B.ck],A.a0("u<cI>"))
B.k_=s(["No such draft"],t.s)
B.m_=new A.cn(0,"open")
B.m0=new A.cn(1,"share")
B.m1=new A.cn(2,"number")
B.k1=s([B.m_,B.m0,B.m1],A.a0("u<cn>"))
B.k3=s(["No such tenancy"],t.s)
B.dI=s([B.M,B.Q,B.y,B.o,B.x,B.a5],A.a0("u<cb>"))
B.bX=new A.ew(0,"paid")
B.l3=new A.ew(1,"none")
B.dW=new A.ew(2,"clear")
B.k4=s([B.bX,B.l3,B.dW],A.a0("u<ew>"))
B.e3=new A.aQ(0,"uncategorised")
B.e4=new A.aQ(1,"unclassified")
B.aA=new A.aQ(2,"unmatchedAlert")
B.v=new A.aQ(3,"uncertainDuplicate")
B.c6=new A.aQ(4,"inTransit")
B.b6=new A.aQ(5,"statementTotalsMismatch")
B.H=new A.aQ(6,"editConflict")
B.ad=new A.aQ(7,"crossBookMismatch")
B.b7=new A.aQ(8,"parseFailed")
B.f=new A.aQ(9,"unknownOperation")
B.h=new A.aQ(10,"malformedOperation")
B.bY=new A.aQ(11,"rulesDisagree")
B.P=new A.aQ(12,"uncertainPairing")
B.bZ=new A.aQ(13,"missingStatement")
B.c_=new A.aQ(14,"suspiciousMessage")
B.c0=new A.aQ(15,"paymentReminder")
B.c1=new A.aQ(16,"suspectedUnauthorised")
B.c2=new A.aQ(17,"historyStartFromFolder")
B.ac=new A.aQ(18,"documentCheck")
B.c3=new A.aQ(19,"invoiceToCheck")
B.c4=new A.aQ(20,"paymentFailed")
B.c5=new A.aQ(21,"loanOnStatement")
B.k5=s([B.e3,B.e4,B.aA,B.v,B.c6,B.b6,B.H,B.ad,B.b7,B.f,B.h,B.bY,B.P,B.bZ,B.c_,B.c0,B.c1,B.c2,B.ac,B.c3,B.c4,B.c5],A.a0("u<aQ>"))
B.b_=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.ch=new A.dY("Newest first",0,"newest")
B.mw=new A.dY("Oldest first",1,"oldest")
B.mx=new A.dY("Largest first",2,"largest")
B.mv=new A.dY("Smallest first",3,"smallest")
B.dJ=s([B.ch,B.mw,B.mx,B.mv],A.a0("u<dY>"))
B.np=s(["passport"],t.s)
B.eM=new A.bM("Passport",!0,0,"passport")
B.nd=s(["pr","visa","reentry","re-entry","permanent","resident"],t.s)
B.eN=new A.bM("PR visa",!0,1,"prVisa")
B.nn=s(["nric","ic","identity","card"],t.s)
B.eK=new A.bM("NRIC",!1,2,"nric")
B.nj=s(["fin","card"],t.s)
B.eP=new A.bM("FIN card",!0,3,"fin")
B.ni=s(["driving","licence","license","dl"],t.s)
B.eO=new A.bM("Driving licence",!0,5,"drivingLicence")
B.nf=s(["aadhaar","aadhar"],t.s)
B.eJ=new A.bM("Aadhaar",!1,6,"aadhaar")
B.no=s(["pan","card"],t.s)
B.eL=new A.bM("PAN",!1,7,"pan")
B.ng=s(["birth","certificate"],t.s)
B.eQ=new A.bM("Birth certificate",!1,8,"birthCertificate")
B.k8=s([B.eM,B.eN,B.eK,B.eP,B.cG,B.eO,B.eJ,B.eL,B.eQ,B.bp],A.a0("u<bM>"))
B.ab=s([B.ax,B.as,B.de,B.db,B.dj,B.dk,B.dg,B.bG,B.df,B.aS,B.bJ,B.dc,B.dh,B.aU,B.bI,B.dl,B.di,B.dd,B.aR,B.ag,B.aQ,B.bH,B.ah,B.ai,B.ar,B.a4,B.a8,B.aq,B.a7,B.aT,B.bF],t.nB)
B.kr=new A.d3(0,"alerts")
B.ks=new A.d3(1,"statements")
B.kt=new A.d3(2,"biller")
B.ku=new A.d3(3,"agency")
B.kv=new A.d3(4,"owner")
B.kc=s([B.kr,B.ks,B.kt,B.ku,B.kv],A.a0("u<d3>"))
B.al=new A.eC(0,"folderYear")
B.c9=new A.eC(1,"statement")
B.ca=new A.eC(2,"owner")
B.ke=s([B.al,B.c9,B.ca],A.a0("u<eC>"))
B.kf=s(["PAYMENT AT AXS","CARD PAYMENT","CC PAYMENT"],t.s)
B.kh=s(["REVERSAL","REV","REVERSED","REFUND","CASHBACK"],t.s)
B.kl=s(["INTEREST CHARGE","ANNUAL FEE","LATE FEE","SERVICE TAX"],t.s)
B.dP=new A.bg(5,"loanDisbursement")
B.bS=new A.bg(7,"reimbursementOrClaimCredit")
B.dQ=new A.bg(8,"depositHeldOrOwed")
B.a_=new A.bg(9,"advance")
B.Z=new A.bg(10,"settlementOfAdvance")
B.b1=new A.bg(11,"liabilityHeld")
B.dO=new A.bg(12,"taxWithheld")
B.at=s([B.n,B.w,B.L,B.X,B.b2,B.dP,B.G,B.bS,B.dQ,B.a_,B.Z,B.b1,B.dO],t.dQ)
B.km=s([B.w,B.L,B.G,B.bS],t.dQ)
B.co=new A.bc("Overview","","home",0,"overview")
B.ed=new A.bc("Accounts","Money","bank",1,"accounts")
B.n3=new A.bc("Transactions","Money","list",2,"transactions")
B.cp=new A.bc("Loans & debt","Money","loan",3,"loans")
B.n1=new A.bc("Invoices","Money","receipt",4,"invoices")
B.n_=new A.bc("Spending","Planning","pie",5,"spending")
B.n7=new A.bc("Budgets & goals","Planning","target",6,"budgets")
B.n0=new A.bc("Insights","Planning","chart",7,"insights")
B.n5=new A.bc("Review queue","Tasks","inbox",8,"review")
B.n2=new A.bc("Filing rules","Tasks","filter",9,"rules")
B.n4=new A.bc("Life admin","Settings","heart",10,"life")
B.n6=new A.bc("Settings","Settings","gear",11,"setup")
B.dK=s([B.co,B.ed,B.n3,B.cp,B.n1,B.n_,B.n7,B.n0,B.n5,B.n2,B.n4,B.n6],A.a0("u<bc>"))
B.ne=s(["hospitalisation","hospitalization","shield","medical","health"],t.s)
B.l6=new A.bC("Hospitalisation",0,"hospitalisation")
B.nl=s(["medical","health"],t.s)
B.l7=new A.bC("Medical",1,"medical")
B.nt=s(["term","life"],t.s)
B.l4=new A.bC("Term life",2,"termLife")
B.nv=s(["whole","life"],t.s)
B.lc=new A.bC("Whole life",3,"wholeLife")
B.nr=s(["retirement","annuity"],t.s)
B.la=new A.bC("Retirement",4,"retirement")
B.nq=s(["personal","accident","pa"],t.s)
B.ld=new A.bC("Personal accident",5,"personalAccident")
B.nu=s(["travel"],t.s)
B.lb=new A.bC("Travel",6,"travel")
B.nk=s(["home","house","fire"],t.s)
B.l5=new A.bC("Home",7,"home")
B.nm=s(["motor","car"],t.s)
B.l8=new A.bC("Motor",8,"motor")
B.l9=new A.bC("Other",9,"other")
B.ns=s(["security","bond"],t.s)
B.le=new A.bC("Security bond",10,"securityBond")
B.ko=s([B.l6,B.l7,B.l4,B.lc,B.la,B.ld,B.lb,B.l5,B.l8,B.l9,B.le],A.a0("u<bC>"))
B.kq=s([B.bu,B.bv,B.cJ,B.cK],A.a0("u<dx>"))
B.bO=new A.h3(null,null,null,null,null,null,null,null,null)
B.dL=new A.cj([B.M,"savings",B.Q,"current",B.y,"card",B.o,"loan",B.a5,"retirement"],t.ip)
B.kL={SG:0,IN:1,personal:2}
B.lK=new A.r("acra-annual-return","ACRA annual return")
B.lr=new A.r("eci","Estimated chargeable income (ECI)")
B.lD=new A.r("form-c","Form C-S or C")
B.lG=new A.r("cpf","Employee CPF")
B.lH=new A.r("ir8a","IR8A")
B.e_=new A.r("gst","GST, if registered")
B.k2=s([B.lK,B.lr,B.lD,B.lG,B.lH,B.e_],t.I)
B.lA=new A.r("roc","ROC filings")
B.lq=new A.r("itr","Income tax return (ITR)")
B.ll=new A.r("advance-tax","Advance tax")
B.lR=new A.r("tds","TDS")
B.lN=new A.r("pf-esi","PF and ESI, if applicable")
B.jp=s([B.lA,B.lq,B.ll,B.lR,B.e_,B.lN],t.I)
B.ly=new A.r("iras-opens","IRAS filing opens")
B.lF=new A.r("iras-due","IRAS filing due")
B.lw=new A.r("noa","Notice of assessment")
B.iV=s([B.ly,B.lF,B.lw],t.I)
B.kw=new A.aZ(B.kL,[B.k2,B.jp,B.iV],A.a0("aZ<f,A<+(f,f)>>"))
B.kK={SGD:0,INR:1,USD:2}
B.kx=new A.aZ(B.kK,["S$","\u20b9","US$"],t.hD)
B.ky=new A.cj([16,10,24,12,32,14],A.a0("cj<e,e>"))
B.kI={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}
B.kz=new A.aZ(B.kI,[1,2,3,4,5,6,7,8,9,10,11,12],t.hq)
B.kM={SGD:0,INR:1,USD:2,EUR:3,GBP:4,AUD:5,MYR:6,JPY:7}
B.e=new A.aZ(B.kM,[2,2,2,2,2,2,2,0],t.hq)
B.aj={}
B.kB=new A.aZ(B.aj,[],A.a0("aZ<f,hW>"))
B.kA=new A.aZ(B.aj,[],A.a0("aZ<f,eD>"))
B.dN=new A.aZ(B.aj,[],t.hD)
B.kD=new A.aZ(B.aj,[],A.a0("aZ<f,a_?>"))
B.dM=new A.aZ(B.aj,[],A.a0("aZ<bt?,q>"))
B.kC=new A.aZ(B.aj,[],A.a0("aZ<f?,q>"))
B.kE=new A.cj([B.M,"Savings",B.Q,"Current",B.y,"Credit card",B.o,"Loan",B.x,"Cash",B.a5,"Retirement"],t.ip)
B.ay=new A.cj([B.n,"Expense",B.w,"Income",B.L,"Own-account transfer",B.X,"Card bill payment",B.b2,"Loan instalment",B.dP,"Loan disbursement",B.G,"Refund or reversal",B.bS,"Reimbursement or claim credit",B.dQ,"Deposit held or owed",B.a_,"Advance",B.Z,"Settlement of an advance",B.b1,"Liability held",B.dO,"Tax withheld"],A.a0("cj<bg,f>"))
B.kN={home:0,bank:1,list:2,loan:3,receipt:4,pie:5,target:6,chart:7,inbox:8,filter:9,heart:10,gear:11,eye:12,"eye-off":13}
B.kF=new A.aZ(B.kN,["M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10","M3 9l9-5 9 5M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18","M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1","M3 6h18v12H3zM3 10h18M7 15h4","M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6","M12 3a9 9 0 1 0 9 9h-9z M14 3.5A8 8 0 0 1 20.5 10H14z","M12 3a9 9 0 1 0 .01 0M12 7a5 5 0 1 0 .01 0M12 11a1 1 0 1 0 .01 0","M4 20V10M10 20V4M16 20v-7M22 20H2","M3 13l3-8h12l3 8v6H3zM3 13h5l1 2h6l1-2h5","M3 5h18l-7 8v6l-4-2v-4z","M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z","M12 9a3 3 0 1 0 .01 0M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2","M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0","M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3 3.6M6.6 6.6C3.8 8.4 2 12 2 12s4 7 10 7a10 10 0 0 0 4.4-1"],t.hD)
B.kG=new A.cj([B.cS,"Scheduled",B.cT,"Due soon",B.cU,"Due today",B.cV,"Waiting",B.aL,"Paid",B.bx,"Part paid",B.by,"Overdue",B.aM,"Confirmed by you"],A.a0("cj<ck,f>"))
B.bT=new A.et(0,"signedOut")
B.bU=new A.et(1,"signedIn")
B.bV=new A.et(2,"waiting")
B.au=new A.et(3,"reading")
B.dR=new A.et(4,"removed")
B.l_=new A.eu(0,"matched")
B.dT=new A.eu(1,"different")
B.dU=new A.eu(2,"missing")
B.l0=new A.eu(3,"waiting")
B.l1=new A.eu(4,"noAccount")
B.ak=new A.iN(0,"pending")
B.dX=new A.iN(1,"posted")
B.lk=new A.r("","No")
B.ln=new A.r("Flag","You do not recognise this charge")
B.lp=new A.r("","Any")
B.dY=new A.r("","Category\u2026")
B.dZ=new A.r("","None")
B.lz=new A.r("","No account (saved not tracked)")
B.lB=new A.r(!1,"Read-only")
B.lC=new A.r(null,"the paying account is a savings or current account")
B.lE=new A.r("-","No category")
B.e0=new A.r("","Not set")
B.lL=new A.r("me","Me")
B.lM=new A.r("","All accounts")
B.lP=new A.r(null,"Enter only the last 4 digits. SanthIQ never stores a full card or account number.")
B.lS=new A.r(!0,"Editing")
B.lT=new A.r(1,0.25)
B.lW=new A.r("yes","Yes")
B.b5=new A.hc(0,"draft")
B.e1=new A.hc(1,"reconciled")
B.e2=new A.hc(2,"finalised")
B.kJ={set:0,use:1,show:2,clear:3}
B.m5=new A.cP(B.kJ,4,t.x)
B.kQ={sms:0,email:1}
B.e5=new A.cP(B.kQ,2,t.x)
B.kR={secretId:0,action:1,atUtc:2}
B.m6=new A.cP(B.kR,3,t.x)
B.kP={recordId:0,action:1,atUtc:2}
B.m7=new A.cP(B.kP,3,t.x)
B.c7=new A.cX([B.k,B.a2,B.r,B.aJ,B.ao,B.u,B.aK,B.I,B.N,B.ap,B.a3,B.ae,B.F,B.a0,B.an,B.aI,B.bt],A.a0("cX<aJ>"))
B.m8=new A.cP(B.aj,0,t.x)
B.kO={bank:0,loan:1,loans:2,card:3,savings:4,account:5,the:6,and:7,ltd:8,limited:9,berhad:10}
B.m9=new A.cP(B.kO,11,t.x)
B.e6=new A.cX([B.ar,B.a4,B.a8,B.aq,B.a7],A.a0("cX<ae>"))
B.e7=new A.cX([B.bg,B.bh,B.aC],t.pA)
B.ma=new A.cX([B.bg,B.bh,B.aC,B.bi,B.bk],t.pA)
B.me=new A.hi(B.ca,null,null,null)
B.e8=new A.fs(0,"waiting")
B.cg=new A.fs(1,"approved")
B.e9=new A.fs(2,"removed")
B.mo=new A.dW(0,"join")
B.mp=new A.dW(1,"grant")
B.mq=new A.dW(2,"roster")
B.mr=new A.dW(3,"segment")
B.ms=new A.dW(4,"submission")
B.mt=new A.dW(5,"secret")
B.mu=new A.cp("personal",null,null,null,"",B.ci,null,B.ch,0)
B.mB=A.bA("eV")
B.mC=A.bA("hV")
B.mD=A.bA("hX")
B.mE=A.bA("D9")
B.mF=A.bA("Ic")
B.mG=A.bA("Id")
B.ea=A.bA("el")
B.mH=A.bA("Ih")
B.mI=A.bA("kH")
B.mJ=A.bA("Ii")
B.mK=A.bA("a_")
B.mL=A.bA("bp")
B.mM=A.bA("ez")
B.mN=A.bA("d6")
B.mO=A.bA("BX")
B.mP=A.bA("ud")
B.mQ=A.bA("J3")
B.eb=A.bA("e1")
B.mR=new A.j3(!1)
B.mS=new A.j3(!0)
B.mY=new A.ho(0,"reconciled")
B.mZ=new A.ho(1,"recorded")
B.cl=new A.ho(2,"stated")
B.b9=new A.bR(0,"certain")
B.cm=new A.bR(1,"uncertain")
B.cn=new A.hu(1,"floor")
B.ec=new A.hu(2,"ceil")
B.ba=new A.hu(3,"halfUp")})();(function staticFields(){$.uP=null
$.c8=A.c([],A.a0("u<a_>"))
$.DI=null
$.D6=null
$.D5=null
$.Fo=null
$.Fa=null
$.FY=null
$.xX=null
$.yW=null
$.Cu=null
$.uV=A.c([],A.a0("u<A<a_>?>"))
$.hy=null
$.jB=null
$.jC=null
$.Cd=!1
$.al=B.W
$.Eb=null
$.Ec=null
$.Ed=null
$.Ee=null
$.BY=A.uy("_lastQuoRemDigits")
$.BZ=A.uy("_lastQuoRemUsed")
$.j6=A.uy("_lastRemUsed")
$.C_=A.uy("_lastRem_nsh")
$.tJ=A.w(t.N,A.a0("tB"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ND","Gd",()=>A.yG("_$dart_dartClosure"))
s($,"NC","CH",()=>A.yG("_$dart_dartClosure_dartJSInterop"))
s($,"Oy","jK",()=>A.p8(0))
s($,"Pq","Hv",()=>A.c([new J.kK()],A.a0("u<iR>")))
s($,"Oe","GC",()=>A.e0(A.uc({
toString:function(){return"$receiver$"}})))
s($,"Of","GD",()=>A.e0(A.uc({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Og","GE",()=>A.e0(A.uc(null)))
s($,"Oh","GF",()=>A.e0(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ok","GI",()=>A.e0(A.uc(void 0)))
s($,"Ol","GJ",()=>A.e0(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Oj","GH",()=>A.e0(A.E3(null)))
s($,"Oi","GG",()=>A.e0(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"On","GL",()=>A.e0(A.E3(void 0)))
s($,"Om","GK",()=>A.e0(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Oo","CN",()=>A.J7())
s($,"OD","GU",()=>A.p8(4096))
s($,"OB","GS",()=>new A.v5().$0())
s($,"OC","GT",()=>new A.v4().$0())
s($,"Oq","GN",()=>A.Iy(A.aH(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Op","GM",()=>A.p8(0))
s($,"Ox","bm",()=>A.hq(0))
s($,"Ov","bJ",()=>A.hq(1))
s($,"Ow","Bp",()=>A.hq(2))
s($,"Ot","CP",()=>$.bJ().R(0))
s($,"Or","CO",()=>A.hq(1e4))
r($,"Ou","GP",()=>A.C("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Os","GO",()=>A.p8(8))
s($,"Oz","GQ",()=>A.C("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"OA","GR",()=>typeof URLSearchParams=="function")
s($,"NH","Gh",()=>A.C("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:[.,](\\d+))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1))
s($,"OS","mM",()=>A.CD(B.mK))
s($,"NS","jJ",()=>{var q=new A.m8(A.Iw(8))
q.ir()
return q})
s($,"NM","eT",()=>A.HY(B.kH.ga9(A.Iz(A.aH(A.c([1],t.t)))),0,null).getInt8(0)===1?B.a1:B.av)
s($,"Pg","Hm",()=>A.IB(A.c([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],t.t)))
s($,"OJ","GZ",()=>A.aL(255))
s($,"PB","ed",()=>A.Cp(A.EO(A.G4(),"crypto"),"subtle",t.K)!=null&&A.In(A.Cp(A.EO(A.G4(),"window"),"isSecureContext",t.y)))
s($,"Nx","Gb",()=>A.HV()?new A.n1(null):A.I5(null))
s($,"Ny","Bm",()=>({name:A.BV("Ed25519")}))
s($,"Nz","Bn",()=>({name:A.BV("X25519")}))
s($,"NB","Gc",()=>$.Gb())
r($,"NA","b6",()=>$.Gc())
s($,"O5","Gu",()=>$.Gv())
s($,"O6","Gv",()=>A.IM())
s($,"NE","Ge",()=>A.IA(256))
s($,"Pb","Hh",()=>A.aL(65535))
s($,"NL","Bo",()=>new A.nA().$0())
s($,"O3","Gt",()=>{var q=A.fm(null),p=q.a
p.$flags&2&&A.E(p)
if(0>=p.length)return A.a(p,0)
p[0]=0
return q})
s($,"O1","CL",()=>{var q=A.fm(null),p=q.a
p.$flags&2&&A.E(p)
if(0>=p.length)return A.a(p,0)
p[0]=1
return q})
s($,"O2","Gs",()=>{var q=A.fm(null),p=q.a
p.$flags&2&&A.E(p)
if(0>=p.length)return A.a(p,0)
p[0]=2
return q})
s($,"O_","Gq",()=>{var q=A.fm(null)
q.hr("19681161376707505956807079304988542015446066515923890162744021073123829784752")
return q})
s($,"NW","CJ",()=>{var q=A.fm(null)
q.hr("37095705934669439343138083508754565189542113879843219016388785533085940283555")
return q})
s($,"NZ","Gp",()=>{var q,p=A.fm(null),o=p.a
o.$flags&2&&A.E(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65534
B.b3.aO(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=4095
return p})
s($,"NX","mL",()=>{var q,p=A.fm(null),o=p.a
o.$flags&2&&A.E(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65517
B.b3.aO(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=32767
return p})
s($,"NY","CK",()=>{var q,p=A.fm(null),o=p.a
B.b3.aZ(o,0,$.mL().a)
if(0>=o.length)return A.a(o,0)
q=o[0]
o.$flags&2&&A.E(o)
o[0]=q-2
return p})
s($,"O0","Gr",()=>$.Bp().aU(255).a8(0,A.aL(19)))
s($,"O4","CM",()=>A.HS("7237005577332262213973186563042994240857116359379907606001950938285454250989"))
s($,"NG","Gg",()=>new A.nr().$0())
s($,"NF","Gf",()=>new A.nq().$0())
s($,"Ps","Hx",()=>{A.ID(B.A)
return B.eb})
s($,"OU","CS",()=>$.bm())
s($,"OW","jL",()=>$.bJ())
s($,"OZ","CT",()=>$.Bp())
s($,"P_","H6",()=>A.aL(5))
s($,"OX","cO",()=>A.aL(10))
s($,"Pm","CV",()=>A.tu(10))
s($,"NI","Gi",()=>A.C("^([+-]?\\d*)(?:\\.(\\d*))?(?:[eE]([+-]?\\d+))?$",!0,!1))
s($,"NK","M",()=>A.BA(0))
s($,"NJ","Gj",()=>A.BA(1))
s($,"Pl","Hr",()=>$.Gn())
s($,"Po","Ht",()=>A.tu(5))
s($,"Pn","Hs",()=>A.tu(10))
s($,"OV","hN",()=>$.bm())
s($,"OY","hO",()=>$.bJ())
s($,"NT","Gn",()=>A.tu(0))
s($,"Pc","Hi",()=>A.C("^[A-Z][A-Z0-9]*(-[A-Z0-9]+)*-[0-9]{4}$",!0,!1))
s($,"OK","H_",()=>A.C("^CASH-[A-Z]{3}$",!0,!1))
s($,"OL","eU",()=>A.C("\\p{Nd}",!0,!0))
s($,"Pa","Hg",()=>A.C("\\d{9,}",!0,!1))
s($,"P1","H8",()=>A.C("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"Pd","Hj",()=>A.C("^\\d{9}$",!0,!1))
s($,"Pj","Hp",()=>A.C("^[0-9X]{4,20}$",!0,!1))
s($,"P0","H7",()=>A.c([A.C("\\b[A-Z]\\d{7}[A-Z]\\b",!0,!1),A.C("\\b[A-Z]{5}\\d{4}[A-Z]\\b",!0,!1),A.C("\\b[A-Z]\\d{7,8}(?!\\d)",!0,!1)],A.a0("u<tB>")))
s($,"OM","H0",()=>A.C("\\d(?:[\\s.\\-\\u001F]*\\d)*",!0,!1))
s($,"Pp","Hu",()=>A.C("(?<!\\d)\\d{4}-\\d{2}-\\d{2}(?!\\d)|(?<![\\d.])\\d{1,2}([./-])\\d{1,2}\\1\\d{4}(?!\\d)|(?<!\\d)\\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec),? \\d{4}(?!\\d)|(?<![\\d.])\\d{1,9}\\.\\d{1,2}(?![\\d]|\\.\\d)|(?:S\\$|SGD|INR|Rs\\.?|\\$|\u20b9) ?\\d{1,8}(?!\\d|[\\s.\\-\\u001F]+\\d)",!0,!1))
s($,"P3","Hb",()=>A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Pf","Hl",()=>A.C("^(\\d{4})-(\\d{2})$",!0,!1))
s($,"Ph","Hn",()=>A.C("[^A-Z0-9]+",!0,!1))
s($,"NV","Go",()=>A.C("^[0-9a-f]{64}$",!0,!1))
s($,"OF","GW",()=>A.D3())
s($,"Pt","Hy",()=>B.E.O("santhiq/master/v1"))
s($,"NO","Gl",()=>new A.kt(new WeakMap(),A.a0("kt<+(e,e,e,e)>")))
s($,"NP","CI",()=>A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"NQ","Gm",()=>A.C("^\\d{4}$",!0,!1))
s($,"P9","CU",()=>A.C("\\d{9,}",!0,!1))
s($,"P2","H9",()=>A.C("INSTALM\\s+(\\d{1,3})/(\\d{1,3})",!0,!1))
s($,"OE","GV",()=>A.C("^[^@\\s]+@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"OP","H3",()=>A.C("^@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"P4","Ha",()=>A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Py","HC",()=>A.C("^event-[a-p]{32}$",!0,!1))
s($,"Pr","Hw",()=>A.C("^([01]\\d|2[0-3]):[0-5]\\d$",!0,!1))
s($,"Pe","Hk",()=>A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"P7","He",()=>A.C("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"PA","HD",()=>A.C("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"OR","H4",()=>A.C("^\\d{2}/\\d{2}$",!0,!1))
s($,"P8","Hf",()=>A.C("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Pw","HB",()=>A.BA(10))
s($,"Pz","CW",()=>A.C("\\{(?:fy|yy[/-]yy|yyyy[/-]yy|yyyy[/-]yyyy)\\}",!0,!1))
s($,"Pi","Ho",()=>A.C("^\\+?[0-9]{3,15}$",!0,!1))
s($,"OH","GX",()=>A.C("^[A-Z0-9][A-Z0-9 ._&-]{0,14}$",!0,!1))
s($,"ON","H1",()=>A.C("^[A-Z]{2}-(?=[A-Z0-9]{3})",!0,!1))
s($,"OO","H2",()=>A.C("(?<=[A-Z0-9]{3})-[A-Z]$",!0,!1))
s($,"OG","CQ",()=>A.D3())
s($,"OQ","CR",()=>A.I9())
s($,"Pu","Hz",()=>A.E6())
s($,"OT","H5",()=>A.If(A.Ig(),32))
s($,"Pv","HA",()=>A.E6())
s($,"O8","Gw",()=>A.C("^e-[0-9a-f]{16}\\.sqe$",!0,!1))
s($,"O9","Gx",()=>A.C("^g-(dev[0-9a-f]{16})-(\\d{6})\\.sqg$",!0,!1))
s($,"Oa","Gy",()=>A.C("^r-(\\d{8})\\.sqr$",!0,!1))
s($,"Oc","GA",()=>A.C("^s-(\\d{4})-(\\d{10})-(\\d{10})\\.sqs$",!0,!1))
s($,"Od","GB",()=>A.C("^o-(dev[0-9a-f]{16})-(\\d{10})\\.sqo$",!0,!1))
s($,"Ob","Gz",()=>A.C("^x-(dev[0-9a-f]{16})-(\\d{10})\\.sqx$",!0,!1))
s($,"Pk","Hq",()=>A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"P5","Hc",()=>A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"NN","Gk",()=>A.BE(A.T(["name",A.BV("AES-GCM"),"length",A.IE(256)],t.N,t.K)))
s($,"P6","Hd",()=>A.C("\\b(\\d{4})-(\\d{2})-(\\d{2})\\b",!0,!1))
s($,"OI","GY",()=>A.C("(?:SGD|INR|USD|S\\$|\u20b9|US\\$)\\s?-?[\\d,]+(?:\\.\\d+)?",!0,!1))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eq,ArrayBuffer:A.h7,ArrayBufferView:A.iA,DataView:A.iy,Float32Array:A.kX,Float64Array:A.kY,Int16Array:A.kZ,Int32Array:A.iz,Int8Array:A.l_,Uint16Array:A.iB,Uint32Array:A.iC,Uint8ClampedArray:A.iD,CanvasPixelArray:A.iD,Uint8Array:A.fh})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bw.$nativeSuperclassTag="ArrayBufferView"
A.jc.$nativeSuperclassTag="ArrayBufferView"
A.jd.$nativeSuperclassTag="ArrayBufferView"
A.er.$nativeSuperclassTag="ArrayBufferView"
A.je.$nativeSuperclassTag="ArrayBufferView"
A.jf.$nativeSuperclassTag="ArrayBufferView"
A.c3.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$2$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$1$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jF
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()