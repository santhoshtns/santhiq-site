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
if(a[b]!==s){A.Lp(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.AK(b)
return new s(c,this)}:function(){if(s===null)s=A.AK(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.AK(a).prototype
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
AX(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xq(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.AU==null){A.Kh()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.k(A.iC("Return interceptor for "+A.i(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.uc
if(o==null)o=$.uc=A.xp(n)
p=q[o]}if(p!=null)return p
p=A.Kv(a)
if(p!=null)return p
if(typeof a=="function")return B.f0
s=Object.getPrototypeOf(a)
if(s==null)return B.dC
if(s===Object.prototype)return B.dC
if(typeof q=="function"){o=$.uc
if(o==null)o=$.uc=A.xp(n)
Object.defineProperty(q,o,{value:B.c0,enumerable:false,writable:true,configurable:true})
return B.c0}return B.c0},
BS(a,b){if(a<0||a>4294967295)throw A.k(A.aI(a,0,4294967295,"length",null))
return J.Gq(new Array(a),b)},
BT(a,b){if(a<0)throw A.k(A.aX("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("u<0>"))},
BR(a,b){if(a<0)throw A.k(A.aX("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("u<0>"))},
Gq(a,b){var s=A.d(a,b.i("u<0>"))
s.$flags=1
return s},
Gr(a,b){var s=t.hO
return J.zS(s.a(a),s.a(b))},
BU(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Gt(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.BU(r))break;++b}return b},
Gu(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.BU(q))break}return b},
eC(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hY.prototype
return J.kq.prototype}if(typeof a=="string")return J.dq.prototype
if(a==null)return J.fG.prototype
if(typeof a=="boolean")return J.kp.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dr.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.fH.prototype
return a}if(a instanceof A.a_)return a
return J.xq(a)},
ap(a){if(typeof a=="string")return J.dq.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dr.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.fH.prototype
return a}if(a instanceof A.a_)return a
return J.xq(a)},
b4(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dr.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.fH.prototype
return a}if(a instanceof A.a_)return a
return J.xq(a)},
Ka(a){if(typeof a=="number")return J.f_.prototype
if(a==null)return a
if(!(a instanceof A.a_))return J.es.prototype
return a},
DJ(a){if(typeof a=="number")return J.f_.prototype
if(typeof a=="string")return J.dq.prototype
if(a==null)return a
if(!(a instanceof A.a_))return J.es.prototype
return a},
AO(a){if(typeof a=="string")return J.dq.prototype
if(a==null)return a
if(!(a instanceof A.a_))return J.es.prototype
return a},
fp(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dr.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.fH.prototype
return a}if(a instanceof A.a_)return a
return J.xq(a)},
FK(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.DJ(a).D(a,b)},
a1(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eC(a).I(a,b)},
FL(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.Ka(a).a8(a,b)},
as(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Kp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ap(a).h(a,b)},
Bl(a,b,c){return J.b4(a).j(a,b,c)},
bT(a,b){return J.b4(a).n(a,b)},
Bm(a,b){return J.AO(a).aG(a,b)},
FM(a,b,c){return J.AO(a).d2(a,b,c)},
Bn(a,b){return J.b4(a).N(a,b)},
jn(a){return J.fp(a).fW(a)},
jo(a,b,c){return J.fp(a).dH(a,b,c)},
ms(a,b,c){return J.fp(a).eF(a,b,c)},
FN(a){return J.fp(a).fX(a)},
bn(a,b,c){return J.fp(a).cz(a,b,c)},
d4(a,b){return J.b4(a).dJ(a,b)},
zS(a,b){return J.DJ(a).l(a,b)},
Bo(a,b){return J.ap(a).B(a,b)},
jp(a,b){return J.b4(a).ae(a,b)},
FO(a,b,c,d){return J.b4(a).aI(a,b,c,d)},
FP(a,b,c,d){return J.b4(a).a9(a,b,c,d)},
zT(a){return J.b4(a).ga_(a)},
bU(a){return J.eC(a).gO(a)},
jq(a){return J.ap(a).ga2(a)},
Bp(a){return J.ap(a).gam(a)},
T(a){return J.b4(a).gv(a)},
zU(a){return J.b4(a).gaq(a)},
aB(a){return J.ap(a).gq(a)},
FQ(a){return J.eC(a).gau(a)},
FR(a,b,c){return J.b4(a).dk(a,b,c)},
Bq(a,b,c){return J.b4(a).cK(a,b,c)},
FS(a,b,c){return J.AO(a).hg(a,b,c)},
FT(a,b){return J.ap(a).sq(a,b)},
Br(a,b,c){return J.fp(a).aY(a,b,c)},
FU(a,b,c,d,e){return J.b4(a).aS(a,b,c,d,e)},
hv(a,b){return J.b4(a).b5(a,b)},
mt(a,b){return J.b4(a).E(a,b)},
zV(a,b,c){return J.b4(a).aE(a,b,c)},
mu(a,b){return J.b4(a).bb(a,b)},
hw(a){return J.eC(a).k(a)},
mv(a,b){return J.b4(a).bV(a,b)},
kn:function kn(){},
kp:function kp(){},
fG:function fG(){},
hZ:function hZ(){},
ea:function ea(){},
kR:function kR(){},
es:function es(){},
dr:function dr(){},
fH:function fH(){},
fI:function fI(){},
u:function u(a){this.$ti=a},
ko:function ko(){},
ns:function ns(a){this.$ti=a},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f_:function f_(){},
hY:function hY(){},
kq:function kq(){},
dq:function dq(){}},A={A9:function A9(){},
eP(a,b,c){if(t.he.b(a))return new A.iL(a,b.i("@<0>").a3(c).i("iL<1,2>"))
return new A.eO(a,b.i("@<0>").a3(c).i("eO<1,2>"))},
BY(a){return new A.f2("Field '"+a+"' has been assigned during initialization.")},
BZ(a){return new A.f2("Field '"+a+"' has not been initialized.")},
Gw(a){return new A.f2("Field '"+a+"' has already been initialized.")},
DM(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
dJ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
tu(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dZ(a,b,c){return a},
AV(a){var s,r
for(s=$.c2.length,r=0;r<s;++r)if(a===$.c2[r])return!0
return!1},
c1(a,b,c,d){A.b9(b,"start")
if(c!=null){A.b9(c,"end")
if(b>c)A.j(A.aI(b,0,c,"start",null))}return new A.fd(a,b,c,d.i("fd<0>"))},
C4(a,b,c,d){if(t.he.b(a))return new A.hQ(a,b,c.i("@<0>").a3(d).i("hQ<1,2>"))
return new A.cs(a,b,c.i("@<0>").a3(d).i("cs<1,2>"))},
Cq(a,b,c){var s="takeCount"
A.e1(b,s,t.S)
A.b9(b,s)
if(t.he.b(a))return new A.hR(a,b,c.i("hR<0>"))
return new A.ff(a,b,c.i("ff<0>"))},
Cm(a,b,c){var s="count"
if(t.he.b(a)){A.e1(b,s,t.S)
A.b9(b,s)
return new A.fD(a,b,c.i("fD<0>"))}A.e1(b,s,t.S)
A.b9(b,s)
return new A.dD(a,b,c.i("dD<0>"))},
bK(a,b,c){return new A.eT(a,b,c.i("eT<0>"))},
aq(){return new A.dF("No element")},
BQ(){return new A.dF("Too many elements")},
BP(){return new A.dF("Too few elements")},
l7(a,b,c,d,e){if(c-b<=32)A.H_(a,b,c,d,e)
else A.GZ(a,b,c,d,e)},
H_(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ap(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.b4()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
GZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.u(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.u(a4+a5,2),f=g-j,e=g+j,d=J.ap(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b4()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a1(a6.$2(b,a0),0)
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
A.l7(a3,a4,r-2,a6,a7)
A.l7(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a1(a6.$2(d.h(a3,r),b),0))++r
while(J.a1(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.l7(a3,r,q,a6,a7)}else A.l7(a3,r,q,a6,a7)},
iK:function iK(a){this.a=0
this.b=a},
h8:function h8(a){this.a=0
this.b=a},
et:function et(){},
hE:function hE(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b){this.a=a
this.$ti=b},
iL:function iL(a,b){this.a=a
this.$ti=b},
iJ:function iJ(){},
tU:function tU(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
mU:function mU(a,b){this.a=a
this.b=b},
mT:function mT(a){this.a=a},
f2:function f2(a){this.a=a},
jM:function jM(a){this.a=a},
tc:function tc(){},
U:function U(){},
ag:function ag(){},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
i8:function i8(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
eU:function eU(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ff:function ff(a,b,c){this.a=a
this.b=b
this.$ti=c},
hR:function hR(a,b,c){this.a=a
this.b=b
this.$ti=c},
iA:function iA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b,c){this.a=a
this.b=b
this.$ti=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hS:function hS(a){this.$ti=a},
hT:function hT(a){this.$ti=a},
iG:function iG(a,b){this.a=a
this.$ti=b},
iH:function iH(a,b){this.a=a
this.$ti=b},
oH:function oH(a,b){this.a=a
this.$ti=b},
f4:function f4(a,b){this.a=a
this.b=null
this.$ti=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aP:function aP(){},
cj:function cj(){},
h3:function h3(){},
aZ:function aZ(a,b){this.a=a
this.$ti=b},
j9:function j9(){},
a7(a,b,c){var s,r,q,p,o,n,m,l=A.dt(a.gag(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.n)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.dt(a.gU(),!0,c)
m=new A.aY(q,n,b.i("@<0>").a3(c).i("aY<1,2>"))
m.$keys=l
return m}return new A.hF(A.Gz(a,b,c),b.i("@<0>").a3(c).i("hF<1,2>"))},
BB(){throw A.k(A.ax("Cannot modify unmodifiable Map"))},
BC(){throw A.k(A.ax("Cannot modify constant Set"))},
El(a){var s=A.Ek(a)
if(s!=null)return s
return"minified:"+a},
Kp(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.hw(a)
return s},
bZ(a){var s,r=$.C7
if(r==null)r=$.C7=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kU(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.a(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.k(A.aI(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
kT(a){var s,r,q,p
if(a instanceof A.a_)return A.bO(A.aO(a),null)
s=J.eC(a)
if(s===B.eY||s===B.f1||t.qF.b(a)){r=B.co(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bO(A.aO(a),null)},
Ca(a){var s,r,q
if(a==null||typeof a=="number"||A.dX(a))return J.hw(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bI)return a.k(0)
if(a instanceof A.bm)return a.fR(!0)
s=$.FB()
for(r=0;r<1;++r){q=s[r].mH(a)
if(q!=null)return q}return"Instance of '"+A.kT(a)+"'"},
C6(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
GO(a){var s,r,q,p=A.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r){q=a[r]
if(!A.cD(q))throw A.k(A.eB(q))
if(q<=65535)B.a.n(p,q)
else if(q<=1114111){B.a.n(p,55296+(B.d.al(q-65536,10)&1023))
B.a.n(p,56320+(q&1023))}else throw A.k(A.eB(q))}return A.C6(p)},
Cb(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.cD(q))throw A.k(A.eB(q))
if(q<0)throw A.k(A.eB(q))
if(q>65535)return A.GO(a)}return A.C6(a)},
GP(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aQ(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.al(s,10)|55296)>>>0,s&1023|56320)}}throw A.k(A.aI(a,0,1114111,null,null))},
Cd(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.d.P(h,1000)
g+=B.d.u(h-s,1000)
r=i?Date.UTC(a,p,c,d,e,f,g):new Date(a,p,c,d,e,f,g).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bY(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
b2(a){return a.c?A.bY(a).getUTCFullYear()+0:A.bY(a).getFullYear()+0},
bk(a){return a.c?A.bY(a).getUTCMonth()+1:A.bY(a).getMonth()+1},
aH(a){return a.c?A.bY(a).getUTCDate()+0:A.bY(a).getDate()+0},
Ah(a){return a.c?A.bY(a).getUTCHours()+0:A.bY(a).getHours()+0},
Ai(a){return a.c?A.bY(a).getUTCMinutes()+0:A.bY(a).getMinutes()+0},
C9(a){return a.c?A.bY(a).getUTCSeconds()+0:A.bY(a).getSeconds()+0},
C8(a){return a.c?A.bY(a).getUTCMilliseconds()+0:A.bY(a).getMilliseconds()+0},
GN(a){var s=a.$thrownJsError
if(s==null)return null
return A.eD(s)},
Cc(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.b0(a,s)
a.$thrownJsError=s
s.stack=b.k(0)}},
AT(a){throw A.k(A.eB(a))},
a(a,b){if(a==null)J.aB(a)
throw A.k(A.wN(a,b))},
wN(a,b){var s,r="index"
if(!A.cD(b))return new A.c5(!0,b,r,null)
s=J.aB(a)
if(b<0||b>=s)return A.nk(b,s,a,r)
return A.Aj(b,r)},
K1(a,b,c){if(a>c)return A.aI(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aI(b,a,c,"end",null)
return new A.c5(!0,b,"end",null)},
eB(a){return new A.c5(!0,a,null,null)},
k(a){return A.b0(a,new Error())},
b0(a,b){var s
if(a==null)a=new A.dM()
b.dartException=a
s=A.Lr
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Lr(){return J.hw(this.dartException)},
j(a,b){throw A.b0(a,b==null?new Error():b)},
B(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.If(a,b,c),s)},
If(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.iE("'"+s+"': Cannot "+o+" "+l+k+n)},
n(a){throw A.k(A.aM(a))},
dN(a){var s,r,q,p,o,n
a=A.hq(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.tz(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
tA(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Ct(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Aa(a,b){var s=b==null,r=s?null:b.method
return new A.kr(a,r,s?null:b.receiver)},
au(a){var s
if(a==null)return new A.oJ(a)
if(a instanceof A.hU){s=a.a
return A.eG(a,s==null?A.d1(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eG(a,a.dartException)
return A.J6(a)},
eG(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
J6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.al(r,16)&8191)===10)switch(q){case 438:return A.eG(a,A.Aa(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.eG(a,new A.ij())}}if(a instanceof TypeError){p=$.EM()
o=$.EN()
n=$.EO()
m=$.EP()
l=$.ES()
k=$.ET()
j=$.ER()
$.EQ()
i=$.EV()
h=$.EU()
g=p.bt(s)
if(g!=null)return A.eG(a,A.Aa(A.b(s),g))
else{g=o.bt(s)
if(g!=null){g.method="call"
return A.eG(a,A.Aa(A.b(s),g))}else if(n.bt(s)!=null||m.bt(s)!=null||l.bt(s)!=null||k.bt(s)!=null||j.bt(s)!=null||m.bt(s)!=null||i.bt(s)!=null||h.bt(s)!=null){A.b(s)
return A.eG(a,new A.ij())}}return A.eG(a,new A.lk(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.iy()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eG(a,new A.c5(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.iy()
return a},
eD(a){var s
if(a instanceof A.hU)return a.b
if(a==null)return new A.iY(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iY(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
B1(a){if(a==null)return J.bU(a)
if(typeof a=="object")return A.bZ(a)
return J.bU(a)},
JP(a){if(typeof a=="number")return B.Q.gO(a)
if(a instanceof A.m2)return A.bZ(a)
if(a instanceof A.bm)return a.gO(a)
return A.B1(a)},
DI(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
K6(a,b){var s,r=a.length
for(s=0;s<r;++s)b.n(0,a[s])
return b},
Ix(a,b,c,d,e,f){t.BO.a(a)
switch(A.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.k(new A.tY("Unsupported number of arguments for wrapped closure"))},
fo(a,b){var s=a.$identity
if(!!s)return s
s=A.JR(a,b)
a.$identity=s
return s},
JR(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Ix)},
G8(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lc().constructor.prototype):Object.create(new A.fs(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Bz(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.G4(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Bz(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
G4(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.k("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.FY)}throw A.k("Error in functionType of tearoff")},
G5(a,b,c,d){var s=A.Bw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Bz(a,b,c,d){if(c)return A.G7(a,b,d)
return A.G5(b.length,d,a,b)},
G6(a,b,c,d){var s=A.Bw,r=A.FZ
switch(b?-1:a){case 0:throw A.k(new A.l1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
G7(a,b,c){var s,r
if($.Bu==null)$.Bu=A.Bt("interceptor")
if($.Bv==null)$.Bv=A.Bt("receiver")
s=b.length
r=A.G6(s,c,a,b)
return r},
AK(a){return A.G8(a)},
FY(a,b){return A.j2(v.typeUniverse,A.aO(a.a),b)},
Bw(a){return a.a},
FZ(a){return a.b},
Bt(a){var s,r,q,p=new A.fs("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.k(A.aX("Field name "+a+" not found.",null))},
xp(a){return v.getIsolateTag(a)},
Eg(){return v.G},
Nq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Kv(a){var s,r,q,p,o,n=A.b($.DK.$1(a)),m=$.wP[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.m($.Dw.$2(a,n))
if(q!=null){m=$.wP[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.xL(s)
$.wP[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.xz[n]=s
return s}if(p==="-"){o=A.xL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.E8(a,s)
if(p==="*")throw A.k(A.iC(n))
if(v.leafTags[n]===true){o=A.xL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.E8(a,s)},
E8(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.AX(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
xL(a){return J.AX(a,!1,null,!!a.$ibW)},
Kw(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.xL(s)
else return J.AX(s,c,null,null)},
Kh(){if(!0===$.AU)return
$.AU=!0
A.Ki()},
Ki(){var s,r,q,p,o,n,m,l
$.wP=Object.create(null)
$.xz=Object.create(null)
A.Kg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.E9.$1(o)
if(n!=null){m=A.Kw(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Kg(){var s,r,q,p,o,n,m=B.e8()
m=A.hh(B.e9,A.hh(B.ea,A.hh(B.cp,A.hh(B.cp,A.hh(B.eb,A.hh(B.ec,A.hh(B.ed(B.co),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.DK=new A.xw(p)
$.Dw=new A.xx(o)
$.E9=new A.xy(n)},
hh(a,b){return a(b)||b},
HC(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.a1(r,b[s]))return!1}return!0},
JX(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
A8(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.k(A.A("Illegal RegExp pattern ("+String(o)+")",a,null))},
Lg(a,b,c){var s=a.indexOf(b,c)
return s>=0},
AL(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Lk(a,b,c,d){var s=b.fu(a,d)
if(s==null)return a
return A.B3(a,s.b.index,s.gc4(),c)},
hq(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
a4(a,b,c){var s
if(typeof b=="string")return A.Li(a,b,c)
if(b instanceof A.e9){s=b.gfD()
s.lastIndex=0
return a.replace(s,A.AL(c))}return A.Lh(a,b,c)},
Lh(a,b,c){var s,r,q,p
for(s=J.Bm(b,a),s=s.gv(s),r=0,q="";s.m();){p=s.gt()
q=q+a.substring(r,p.gdr())+c
r=p.gc4()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Li(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hq(b),"g"),A.AL(c))},
Dq(a){return a},
hs(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.aG(0,a),s=new A.fh(s.a,s.b,s.c),r=t.ez,q=0,p="";s.m();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.i(A.Dq(B.c.X(a,q,m)))+A.i(c.$1(o))
q=m+n[0].length}s=p+A.i(A.Dq(B.c.aa(a,q)))
return s.charCodeAt(0)==0?s:s},
Eh(a,b,c,d){var s,r,q,p
if(typeof b=="string"){s=a.indexOf(b,d)
if(s<0)return a
return A.B3(a,s,s+b.length,c)}if(b instanceof A.e9)return d===0?a.replace(b.b,A.AL(c)):A.Lk(a,b,c,d)
r=J.FM(b,a,d)
q=r.gv(r)
if(!q.m())return a
p=q.gt()
return B.c.hu(a,p.gdr(),p.gc4(),c)},
Lj(a,b,c,d){var s,r,q=b.d2(0,a,d),p=new A.fh(q.a,q.b,q.c)
if(!p.m())return a
s=p.d
if(s==null)s=t.ez.a(s)
r=A.i(c.$1(s))
return B.c.hu(a,s.b.index,s.gc4(),r)},
B3(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
t:function t(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
hF:function hF(a,b){this.a=a
this.$ti=b},
fu:function fu(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
fj:function fj(a,b){this.a=a
this.$ti=b},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cc:function cc(a,b){this.a=a
this.$ti=b},
fv:function fv(){},
cH:function cH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b){this.a=a
this.$ti=b},
kk:function kk(){},
eW:function eW(a,b){this.a=a
this.$ti=b},
is:function is(){},
tz:function tz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ij:function ij(){},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a){this.a=a},
oJ:function oJ(a){this.a=a},
hU:function hU(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a
this.b=null},
bI:function bI(){},
jK:function jK(){},
jL:function jL(){},
lf:function lf(){},
lc:function lc(){},
fs:function fs(a,b){this.a=a
this.b=b},
l1:function l1(a){this.a=a},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nu:function nu(a){this.a=a},
ov:function ov(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
az:function az(a,b){this.a=a
this.$ti=b},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
L:function L(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aa:function aa(a,b){this.a=a
this.$ti=b},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f0:function f0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
xw:function xw(a){this.a=a},
xx:function xx(a){this.a=a},
xy:function xy(a){this.a=a},
bm:function bm(){},
dS:function dS(){},
fm:function fm(){},
dT:function dT(){},
e9:function e9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(a){this.b=a},
lo:function lo(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h1:function h1(a,b){this.a=a
this.c=b},
m_:function m_(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Lp(a){throw A.b0(A.BY(a),new Error())},
mo(){throw A.b0(A.BZ(""),new Error())},
Ei(){throw A.b0(A.Gw(""),new Error())},
ht(){throw A.b0(A.BY(""),new Error())},
tV(){var s=new A.lw("")
return s.b=s},
tW(a){var s=new A.lw(a)
return s.b=s},
lw:function lw(a){this.a=a
this.b=null},
ja(a,b,c){},
aF(a){var s,r,q
if(t.rw.b(a))return a
s=J.ap(a)
r=A.i6(s.gq(a),null,!1,t.z)
for(q=0;q<s.gq(a);++q)B.a.j(r,q,s.h(a,q))
return r},
GB(a){return new DataView(new ArrayBuffer(a))},
GC(a,b,c){A.ja(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
GD(a){return new Int8Array(a)},
GE(a){return new Uint16Array(a)},
GF(a){return new Uint32Array(a)},
GG(a){return new Uint32Array(A.aF(a))},
GH(a,b,c){A.ja(a,b,c)
if(c==null)c=B.d.u(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
oF(a){return new Uint8Array(a)},
GI(a){return new Uint8Array(A.aF(a))},
ih(a,b,c){A.ja(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dW(a,b,c){if(a>>>0!==a||a>=c)throw A.k(A.wN(b,a))},
ey(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.k(A.K1(a,b,c))
if(b==null)return c
return b},
ed:function ed(){},
fP:function fP(){},
ic:function ic(){},
m3:function m3(a){this.a=a},
ia:function ia(){},
bt:function bt(){},
ee:function ee(){},
bX:function bX(){},
kA:function kA(){},
kB:function kB(){},
kC:function kC(){},
ib:function ib(){},
kD:function kD(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
f3:function f3(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
Ak(a,b){var s=b.c
return s==null?b.c=A.j0(a,"b8",[b.x]):s},
Ci(a){var s=a.w
if(s===6||s===7)return A.Ci(a.x)
return s===11||s===12},
GV(a){return a.as},
yR(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
Y(a){return A.un(v.typeUniverse,a,!1)},
Kk(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.ez(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
ez(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ez(a1,s,a3,a4)
if(r===s)return a2
return A.CP(a1,r,!0)
case 7:s=a2.x
r=A.ez(a1,s,a3,a4)
if(r===s)return a2
return A.CO(a1,r,!0)
case 8:q=a2.y
p=A.hg(a1,q,a3,a4)
if(p===q)return a2
return A.j0(a1,a2.x,p)
case 9:o=a2.x
n=A.ez(a1,o,a3,a4)
m=a2.y
l=A.hg(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Ax(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hg(a1,j,a3,a4)
if(i===j)return a2
return A.CQ(a1,k,i)
case 11:h=a2.x
g=A.ez(a1,h,a3,a4)
f=a2.y
e=A.J3(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.CN(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hg(a1,d,a3,a4)
o=a2.x
n=A.ez(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Ay(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.k(A.ju("Attempted to substitute unexpected RTI kind "+a0))}},
hg(a,b,c,d){var s,r,q,p,o=b.length,n=A.uv(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ez(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
J4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.uv(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ez(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
J3(a,b,c,d){var s,r=b.a,q=A.hg(a,r,c,d),p=b.b,o=A.hg(a,p,c,d),n=b.c,m=A.J4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lL()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
ww(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Kb(s)
return a.$S()}return null},
Kj(a,b){var s
if(A.Ci(b))if(a instanceof A.bI){s=A.ww(a)
if(s!=null)return s}return A.aO(a)},
aO(a){if(a instanceof A.a_)return A.o(a)
if(Array.isArray(a))return A.N(a)
return A.AF(J.eC(a))},
N(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.AF(a)},
AF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.It(a,s)},
It(a,b){var s=a instanceof A.bI?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.HN(v.typeUniverse,s.name)
b.$ccache=r
return r},
Kb(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.un(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
bc(a){return A.d2(A.o(a))},
AQ(a){var s=A.ww(a)
return A.d2(s==null?A.aO(a):s)},
AH(a){var s
if(a instanceof A.bm)return A.K4(a.$r,a.dB())
s=a instanceof A.bI?A.ww(a):null
if(s!=null)return s
if(t.sg.b(a))return J.FQ(a).a
if(Array.isArray(a))return A.N(a)
return A.aO(a)},
d2(a){var s=a.r
return s==null?a.r=new A.m2(a):s},
K4(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.a(q,0)
s=A.j2(v.typeUniverse,A.AH(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.CS(v.typeUniverse,s,A.AH(q[r]))}return A.j2(v.typeUniverse,s,a)},
by(a){return A.d2(A.un(v.typeUniverse,a,!1))},
Is(a){var s=this
s.b=A.J1(s)
return s.b(a)},
J1(a){var s,r,q,p,o
if(a===t.K)return A.ID
if(A.fq(a))return A.IH
s=a.w
if(s===6)return A.Io
if(s===1)return A.Df
if(s===7)return A.Iy
r=A.J0(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fq)){a.f="$i"+q
if(q==="z")return A.IB
if(a===t.m)return A.IA
return A.IG}}else if(s===10){p=A.JX(a.x,a.y)
o=p==null?A.Df:p
return o==null?A.d1(o):o}return A.Im},
J0(a){if(a.w===8){if(a===t.S)return A.cD
if(a===t.pR||a===t.n)return A.IC
if(a===t.N)return A.IF
if(a===t.y)return A.dX}return null},
Ir(a){var s=this,r=A.Il
if(A.fq(s))r=A.I9
else if(s===t.K)r=A.d1
else if(A.hp(s)){r=A.In
if(s===t.lo)r=A.aE
else if(s===t.T)r=A.m
else if(s===t.k7)r=A.he
else if(s===t.s7)r=A.AE
else if(s===t.u6)r=A.I8
else if(s===t.uh)r=A.aV}else if(s===t.S)r=A.P
else if(s===t.N)r=A.b
else if(s===t.y)r=A.d0
else if(s===t.n)r=A.ux
else if(s===t.pR)r=A.AD
else if(s===t.m)r=A.x
s.a=r
return s.a(a)},
Im(a){var s=this
if(a==null)return A.hp(s)
return A.DP(v.typeUniverse,A.Kj(a,s),s)},
Io(a){if(a==null)return!0
return this.x.b(a)},
IG(a){var s,r=this
if(a==null)return A.hp(r)
s=r.f
if(a instanceof A.a_)return!!a[s]
return!!J.eC(a)[s]},
IB(a){var s,r=this
if(a==null)return A.hp(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a_)return!!a[s]
return!!J.eC(a)[s]},
IA(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a_)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
De(a){if(typeof a=="object"){if(a instanceof A.a_)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Il(a){var s=this
if(a==null){if(A.hp(s))return a}else if(s.b(a))return a
throw A.b0(A.D8(a,s),new Error())},
In(a){var s=this
if(a==null||s.b(a))return a
throw A.b0(A.D8(a,s),new Error())},
D8(a,b){return new A.hc("TypeError: "+A.CI(a,A.bO(b,null)))},
DF(a,b,c,d){if(A.DP(v.typeUniverse,a,b))return a
throw A.b0(A.HF("The type argument '"+A.bO(a,null)+"' is not a subtype of the type variable bound '"+A.bO(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
CI(a,b){return A.k5(a)+": type '"+A.bO(A.AH(a),null)+"' is not a subtype of type '"+b+"'"},
HF(a){return new A.hc("TypeError: "+a)},
ck(a,b){return new A.hc("TypeError: "+A.CI(a,b))},
Iy(a){var s=this
return s.x.b(a)||A.Ak(v.typeUniverse,s).b(a)},
ID(a){return a!=null},
d1(a){if(a!=null)return a
throw A.b0(A.ck(a,"Object"),new Error())},
IH(a){return!0},
I9(a){return a},
Df(a){return!1},
dX(a){return!0===a||!1===a},
d0(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b0(A.ck(a,"bool"),new Error())},
he(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b0(A.ck(a,"bool?"),new Error())},
AD(a){if(typeof a=="number")return a
throw A.b0(A.ck(a,"double"),new Error())},
I8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b0(A.ck(a,"double?"),new Error())},
cD(a){return typeof a=="number"&&Math.floor(a)===a},
P(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b0(A.ck(a,"int"),new Error())},
aE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b0(A.ck(a,"int?"),new Error())},
IC(a){return typeof a=="number"},
ux(a){if(typeof a=="number")return a
throw A.b0(A.ck(a,"num"),new Error())},
AE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b0(A.ck(a,"num?"),new Error())},
IF(a){return typeof a=="string"},
b(a){if(typeof a=="string")return a
throw A.b0(A.ck(a,"String"),new Error())},
m(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b0(A.ck(a,"String?"),new Error())},
x(a){if(A.De(a))return a
throw A.b0(A.ck(a,"JSObject"),new Error())},
aV(a){if(a==null)return a
if(A.De(a))return a
throw A.b0(A.ck(a,"JSObject?"),new Error())},
Dn(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bO(a[q],b)
return s},
IX(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Dn(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bO(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Db(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.d([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.n(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bO(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bO(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bO(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bO(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bO(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bO(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bO(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bO(a.x,b)+">"
if(l===8){p=A.J5(a.x)
o=a.y
return o.length>0?p+("<"+A.Dn(o,b)+">"):p}if(l===10)return A.IX(a,b)
if(l===11)return A.Db(a,b,null)
if(l===12)return A.Db(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
J5(a){var s=A.Ek(a)
if(s!=null)return s
return"minified:"+a},
HO(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
HN(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.un(a,b,!1)
else if(typeof m=="number"){s=m
r=A.j1(a,5,"#")
q=A.uv(s)
for(p=0;p<s;++p)q[p]=r
o=A.j0(a,b,q)
n[b]=o
return o}else return m},
HM(a,b){return A.D1(a.tR,b)},
HL(a,b){return A.D1(a.eT,b)},
un(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.CR(a,null,b,!1)
r.set(b,s)
return s},
j2(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.CR(a,b,c,!0)
q.set(c,r)
return r},
CS(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Ax(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
CR(a,b,c,d){return A.HA(A.Hu(a,b,c,d))},
ew(a,b){b.a=A.Ir
b.b=A.Is
return b},
j1(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cw(null,null)
s.w=b
s.as=c
r=A.ew(a,s)
a.eC.set(c,r)
return r},
CP(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.HJ(a,b,r,c)
a.eC.set(r,s)
return s},
HJ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fq(b))if(!(b===t.aU||b===t.Be))if(s!==6)r=s===7&&A.hp(b.x)
if(r)return b
else if(s===1)return t.aU}q=new A.cw(null,null)
q.w=6
q.x=b
q.as=c
return A.ew(a,q)},
CO(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.HH(a,b,r,c)
a.eC.set(r,s)
return s},
HH(a,b,c,d){var s,r
if(d){s=b.w
if(A.fq(b)||b===t.K)return b
else if(s===1)return A.j0(a,"b8",[b])
else if(b===t.aU||b===t.Be)return t.eZ}r=new A.cw(null,null)
r.w=7
r.x=b
r.as=c
return A.ew(a,r)},
HK(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cw(null,null)
s.w=13
s.x=b
s.as=q
r=A.ew(a,s)
a.eC.set(q,r)
return r},
j_(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
HG(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
j0(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.j_(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cw(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ew(a,r)
a.eC.set(p,q)
return q},
Ax(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.j_(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cw(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ew(a,o)
a.eC.set(q,n)
return n},
CQ(a,b,c){var s,r,q="+"+(b+"("+A.j_(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cw(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ew(a,s)
a.eC.set(q,r)
return r},
CN(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.j_(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.j_(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.HG(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cw(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ew(a,p)
a.eC.set(r,o)
return o},
Ay(a,b,c,d){var s,r=b.as+("<"+A.j_(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.HI(a,b,c,r,d)
a.eC.set(r,s)
return s},
HI(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.uv(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ez(a,b,r,0)
m=A.hg(a,c,r,0)
return A.Ay(a,n,m,c!==m)}}l=new A.cw(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ew(a,l)},
Hu(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
HA(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Hw(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.CK(a,r,l,k,!1)
else if(q===46)r=A.CK(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fl(a.u,a.e,k.pop()))
break
case 94:k.push(A.HK(a.u,k.pop()))
break
case 35:k.push(A.j1(a.u,5,"#"))
break
case 64:k.push(A.j1(a.u,2,"@"))
break
case 126:k.push(A.j1(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Hy(a,k)
break
case 38:A.Hx(a,k)
break
case 63:p=a.u
k.push(A.CP(p,A.fl(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.CO(p,A.fl(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Hv(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.CL(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.HB(a.u,a.e,o)
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
return A.fl(a.u,a.e,m)},
Hw(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
CK(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.HO(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.GV(o)+'"')
d.push(A.j2(s,o,n))}else d.push(p)
return m},
Hy(a,b){var s,r=a.u,q=A.CJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.j0(r,p,q))
else{s=A.fl(r,a.e,p)
switch(s.w){case 11:b.push(A.Ay(r,s,q,a.n))
break
default:b.push(A.Ax(r,s,q))
break}}},
Hv(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.CJ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fl(p,a.e,o)
q=new A.lL()
q.a=s
q.b=n
q.c=m
b.push(A.CN(p,r,q))
return
case-4:b.push(A.CQ(p,b.pop(),s))
return
default:throw A.k(A.ju("Unexpected state under `()`: "+A.i(o)))}},
Hx(a,b){var s=b.pop()
if(0===s){b.push(A.j1(a.u,1,"0&"))
return}if(1===s){b.push(A.j1(a.u,4,"1&"))
return}throw A.k(A.ju("Unexpected extended operation "+A.i(s)))},
CJ(a,b){var s=b.splice(a.p)
A.CL(a.u,a.e,s)
a.p=b.pop()
return s},
fl(a,b,c){if(typeof c=="string")return A.j0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Hz(a,b,c)}else return c},
CL(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fl(a,b,c[s])},
HB(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fl(a,b,c[s])},
Hz(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.k(A.ju("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.k(A.ju("Bad index "+c+" for "+b.k(0)))},
DP(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.bi(a,b,null,c,null)
r.set(c,s)}return s},
bi(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fq(d))return!0
s=b.w
if(s===4)return!0
if(A.fq(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.bi(a,c[b.x],c,d,e))return!0
q=d.w
p=t.aU
if(b===p||b===t.Be){if(q===7)return A.bi(a,b,c,d.x,e)
return d===p||d===t.Be||q===6}if(d===t.K){if(s===7)return A.bi(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.bi(a,b.x,c,d,e))return!1
return A.bi(a,A.Ak(a,b),c,d,e)}if(s===6)return A.bi(a,p,c,d,e)&&A.bi(a,b.x,c,d,e)
if(q===7){if(A.bi(a,b,c,d.x,e))return!0
return A.bi(a,b,c,A.Ak(a,d),e)}if(q===6)return A.bi(a,b,c,p,e)||A.bi(a,b,c,d.x,e)
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
if(!A.bi(a,j,c,i,e)||!A.bi(a,i,e,j,c))return!1}return A.Dd(a,b.x,c,d.x,e)}if(q===11){if(b===t.g9)return!0
if(p)return!1
return A.Dd(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Iz(a,b,c,d,e)}if(o&&q===10)return A.IE(a,b,c,d,e)
return!1},
Dd(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.bi(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.bi(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.bi(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.bi(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.bi(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Iz(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j2(a,b,r[o])
return A.D2(a,p,null,c,d.y,e)}return A.D2(a,b.y,null,c,d.y,e)},
D2(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.bi(a,b[s],d,e[s],f))return!1
return!0},
IE(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.bi(a,r[s],c,q[s],e))return!1
return!0},
hp(a){var s=a.w,r=!0
if(!(a===t.aU||a===t.Be))if(!A.fq(a))if(s!==6)r=s===7&&A.hp(a.x)
return r},
fq(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
D1(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
uv(a){return a>0?new Array(a):v.typeUniverse.sEA},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lL:function lL(){this.c=this.b=this.a=null},
m2:function m2(a){this.a=a},
lK:function lK(){},
hc:function hc(a){this.a=a},
Hc(){var s,r,q
if(self.scheduleImmediate!=null)return A.Jj()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fo(new A.tJ(s),1)).observe(r,{childList:true})
return new A.tI(s,r,q)}else if(self.setImmediate!=null)return A.Jk()
return A.Jl()},
Hd(a){self.scheduleImmediate(A.fo(new A.tK(t.O.a(a)),0))},
He(a){self.setImmediate(A.fo(new A.tL(t.O.a(a)),0))},
Hf(a){A.Ao(B.ez,t.O.a(a))},
Ao(a,b){var s=B.d.u(a.a,1000)
return A.HD(s<0?0:s,b)},
Cs(a,b){var s=B.d.u(a.a,1000)
return A.HE(s<0?0:s,b)},
HD(a,b){var s=new A.iZ(!0)
s.il(a,b)
return s},
HE(a,b){var s=new A.iZ(!1)
s.im(a,b)
return s},
I(a){return new A.lp(new A.am($.ai,a.i("am<0>")),a.i("lp<0>"))},
H(a,b){a.$2(0,null)
b.b=!0
return b.a},
q(a,b){A.Ia(a,b)},
G(a,b){b.cC(a)},
F(a,b){b.eH(A.au(a),A.eD(a))},
Ia(a,b){var s,r,q=new A.uy(b),p=new A.uz(b)
if(a instanceof A.am)a.fQ(q,p,t.z)
else{s=t.z
if(a instanceof A.am)a.e0(q,p,s)
else{r=new A.am($.ai,t.hR)
r.a=8
r.c=a
r.fQ(q,p,s)}}},
J(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ai.hs(new A.v1(s),t.H,t.S,t.z)},
CM(a,b,c){return 0},
mE(a){var s
if(t.yt.b(a)){s=a.gci()
if(s!=null)return s}return B.aD},
aT(a,b){var s=new A.am($.ai,b.i("am<0>"))
s.bk(a)
return s},
Gj(a,b){var s
if(!b.b(null))throw A.k(A.y(null,"computation","The type parameter is not nullable"))
s=new A.am($.ai,b.i("am<0>"))
A.Cr(a,new A.nh(null,s,b))
return s},
Iu(a,b){if($.ai===B.T)return null
return null},
Iv(a,b){if($.ai!==B.T)A.Iu(a,b)
if(b==null)if(t.yt.b(a)){b=a.gci()
if(b==null){A.Cc(a,B.aD)
b=B.aD}}else b=B.aD
else if(t.yt.b(a))A.Cc(a,b)
return new A.bQ(a,b)},
Hr(a,b){var s=new A.am($.ai,b.i("am<0>"))
b.a(a)
s.a=8
s.c=a
return s},
u1(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.H0()
b.e9(new A.bQ(new A.c5(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.f7.a(b.c)
b.a=b.a&1|4
b.c=n
n.fF(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.d_()
b.dA(o.a)
A.fi(b,p)
return}b.a^=2
A.m8(null,null,b.b,t.O.a(new A.u2(o,b)))},
fi(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.w,r=t.f7;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.uU(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fi(d.a,c)
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
A.uU(j.a,j.b)
return}g=$.ai
if(g!==h)$.ai=h
else g=null
c=c.c
if((c&15)===8)new A.u6(q,d,n).$0()
else if(o){if((c&1)!==0)new A.u5(q,j).$0()}else if((c&2)!==0)new A.u4(d,q).$0()
if(g!=null)$.ai=g
c=q.c
if(c instanceof A.am){p=q.a.$ti
p=p.i("b8<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dD(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.u1(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.dD(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
IY(a,b){var s
if(t.nW.b(a))return b.hs(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.k(A.y(a,"onError",u.w))},
IM(){var s,r
for(s=$.hf;s!=null;s=$.hf){$.jc=null
r=s.b
$.hf=r
if(r==null)$.jb=null
s.a.$0()}},
J2(){$.AG=!0
try{A.IM()}finally{$.jc=null
$.AG=!1
if($.hf!=null)$.Bb().$1(A.Dy())}},
Dp(a){var s=new A.lq(a),r=$.jb
if(r==null){$.hf=$.jb=s
if(!$.AG)$.Bb().$1(A.Dy())}else $.jb=r.b=s},
J_(a){var s,r,q,p=$.hf
if(p==null){A.Dp(a)
$.jc=$.jb
return}s=new A.lq(a)
r=$.jc
if(r==null){s.b=p
$.hf=$.jc=s}else{q=r.b
s.b=q
$.jc=r.b=s
if(q==null)$.jb=s}},
M4(a,b){A.dZ(a,"stream",t.K)
return new A.lZ(b.i("lZ<0>"))},
Cr(a,b){var s=$.ai
if(s===B.T)return A.Ao(a,t.O.a(b))
return A.Ao(a,t.O.a(s.fY(b)))},
H7(a,b){var s=$.ai
if(s===B.T)return A.Cs(a,t.uH.a(b))
return A.Cs(a,t.uH.a(s.kT(b,t.hz)))},
uU(a,b){A.J_(new A.uV(a,b))},
Dl(a,b,c,d,e){var s,r=$.ai
if(r===c)return d.$0()
$.ai=c
s=r
try{r=d.$0()
return r}finally{$.ai=s}},
Dm(a,b,c,d,e,f,g){var s,r=$.ai
if(r===c)return d.$1(e)
$.ai=c
s=r
try{r=d.$1(e)
return r}finally{$.ai=s}},
IZ(a,b,c,d,e,f,g,h,i){var s,r=$.ai
if(r===c)return d.$2(e,f)
$.ai=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ai=s}},
m8(a,b,c,d){t.O.a(d)
if(B.T!==c){d=c.fY(d)
d=d}A.Dp(d)},
tJ:function tJ(a){this.a=a},
tI:function tI(a,b,c){this.a=a
this.b=b
this.c=c},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
iZ:function iZ(a){this.a=a
this.b=null
this.c=0},
um:function um(a,b){this.a=a
this.b=b},
ul:function ul(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lp:function lp(a,b){this.a=a
this.b=!1
this.$ti=b},
uy:function uy(a){this.a=a},
uz:function uz(a){this.a=a},
v1:function v1(a){this.a=a},
dV:function dV(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
d_:function d_(a,b){this.a=a
this.$ti=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
nh:function nh(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(){},
cC:function cC(a,b){this.a=a
this.$ti=b},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
am:function am(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tZ:function tZ(a,b){this.a=a
this.b=b},
u3:function u3(a,b){this.a=a
this.b=b},
u2:function u2(a,b){this.a=a
this.b=b},
u0:function u0(a,b){this.a=a
this.b=b},
u_:function u_(a,b){this.a=a
this.b=b},
u6:function u6(a,b,c){this.a=a
this.b=b
this.c=c},
u7:function u7(a,b){this.a=a
this.b=b},
u8:function u8(a){this.a=a},
u5:function u5(a,b){this.a=a
this.b=b},
u4:function u4(a,b){this.a=a
this.b=b},
u9:function u9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ua:function ua(a,b,c){this.a=a
this.b=b
this.c=c},
ub:function ub(a,b){this.a=a
this.b=b},
lq:function lq(a){this.a=a
this.b=null},
lZ:function lZ(a){this.$ti=a},
j8:function j8(){},
lT:function lT(){},
uj:function uj(a,b){this.a=a
this.b=b},
uk:function uk(a,b,c){this.a=a
this.b=b
this.c=c},
uV:function uV(a,b){this.a=a
this.b=b},
i5(a,b){return new A.cp(a.i("@<0>").a3(b).i("cp<1,2>"))},
R(a,b,c){return b.i("@<0>").a3(c).i("Ac<1,2>").a(A.DI(a,new A.cp(b.i("@<0>").a3(c).i("cp<1,2>"))))},
w(a,b){return new A.cp(a.i("@<0>").a3(b).i("cp<1,2>"))},
Ad(a){return new A.cZ(a.i("cZ<0>"))},
ab(a){return new A.cZ(a.i("cZ<0>"))},
kw(a,b){return b.i("C1<0>").a(A.K6(a,new A.cZ(b.i("cZ<0>"))))},
Aw(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eu(a,b,c){var s=new A.fk(a,b,c.i("fk<0>"))
s.c=a.e
return s},
aU(a,b){var s=J.T(a)
if(s.m())return s.gt()
return null},
A6(a,b){var s,r
if(t.he.b(a)){if(a.length===0)return null
return B.a.gaq(a)}s=J.T(a)
if(!s.m())return null
do r=s.gt()
while(s.m())
return r},
Gz(a,b,c){var s=A.i5(b,c)
a.a0(0,new A.ow(s,b,c))
return s},
ox(a,b,c){var s=A.i5(b,c)
s.a1(0,a)
return s},
C2(a,b){var s,r,q=A.Ad(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q.n(0,b.a(a[r]))
return q},
Ae(a,b){var s=A.Ad(b)
s.a1(0,a)
return s},
GA(a,b){var s=t.hO
return J.zS(s.a(a),s.a(b))},
Ag(a){var s,r
if(A.AV(a))return"{...}"
s=new A.bC("")
try{r={}
B.a.n($.c2,a)
s.a+="{"
r.a=!0
a.a0(0,new A.oA(r,s))
s.a+="}"}finally{if(0>=$.c2.length)return A.a($.c2,-1)
$.c2.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
CT(){throw A.k(A.ax("Cannot change an unmodifiable set"))},
cZ:function cZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lQ:function lQ(a){this.a=a
this.c=this.b=null},
fk:function fk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ow:function ow(a,b,c){this.a=a
this.b=b
this.c=c},
O:function O(){},
a3:function a3(){},
oz:function oz(a){this.a=a},
oA:function oA(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.$ti=b},
iN:function iN(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j3:function j3(){},
fN:function fN(){},
dP:function dP(a,b){this.a=a
this.$ti=b},
cy:function cy(){},
iX:function iX(){},
m4:function m4(){},
iD:function iD(a,b){this.a=a
this.$ti=b},
hd:function hd(){},
j4:function j4(){},
IU(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.au(r)
q=A.A(String(s),null,null)
throw A.k(q)}q=A.uG(p)
return q},
uG(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lO(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uG(a[s])
return a},
I5(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.F3()
else s=new Uint8Array(o)
for(r=J.ap(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
I4(a,b,c,d){var s=a?$.F2():$.F1()
if(s==null)return null
if(0===c&&d===b.length)return A.D0(s,b)
return A.D0(s,b.subarray(c,d))},
D0(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Hj(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=J.ap(b),r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){n=s.h(b,p)
o=(o|n)>>>0
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.a(a,l)
q&2&&A.B(f)
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
q&2&&A.B(f)
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
q&2&&A.B(f)
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
if(n<0||n>255)break;++p}throw A.k(A.y(b,"Not a byte value at index "+p+": 0x"+B.d.bE(s.h(b,p),16),null))},
Hi(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.al(a1,2),f=a1&3,e=$.EX()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.a(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.a(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.B(d)
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
if(f===3){if((g&3)!==0)throw A.k(A.A(i,a,p))
k=a0+1
q&2&&A.B(d)
s=d.length
if(!(a0<s))return A.a(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.a(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.k(A.A(i,a,p))
q&2&&A.B(d)
if(!(a0<d.length))return A.a(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.Cy(a,p+1,c,-j-1)}throw A.k(A.A(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.a(a,p)
if(a.charCodeAt(p)>127)break}throw A.k(A.A(h,a,p))},
Hg(a,b,c,d){var s=A.Hh(a,b,c),r=(d&3)+(s-b),q=B.d.al(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.EW()},
Hh(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
Cy(a,b,c,d){var s,r,q
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
if(b===c)break}if(b!==c)throw A.k(A.A("Invalid padding character",a,b))
return-s-1},
BV(a,b,c){return new A.i0(a,b)},
Ie(a){return a.J()},
Hs(a,b){return new A.ue(a,[],A.JS())},
Ht(a,b,c){var s,r=new A.bC(""),q=A.Hs(r,b)
q.e3(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
I6(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lO:function lO(a,b){this.a=a
this.b=b
this.c=null},
ud:function ud(a){this.a=a},
lP:function lP(a){this.a=a},
ut:function ut(){},
us:function us(){},
fr:function fr(a){this.a=a},
hz:function hz(a){this.a=a},
tN:function tN(a){this.a=0
this.b=a},
jw:function jw(){},
tM:function tM(){this.a=0},
bd:function bd(){},
be:function be(){},
b6:function b6(){},
k3:function k3(){},
i0:function i0(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.b=b},
ks:function ks(){},
kv:function kv(a){this.b=a},
ku:function ku(a){this.a=a},
uf:function uf(){},
ug:function ug(a,b){this.a=a
this.b=b},
ue:function ue(a,b,c){this.c=a
this.a=b
this.b=c},
lm:function lm(){},
ln:function ln(){},
uu:function uu(a){this.b=0
this.c=a},
iF:function iF(a){this.a=a},
ex:function ex(a){this.a=a
this.b=16
this.c=0},
FX(a){var s=A.CG(a,null)
if(s==null)A.j(A.A("Could not parse BigInt",a,null))
return s},
tR(a,b){var s=A.CG(a,b)
if(s==null)throw A.k(A.A("Could not parse BigInt",a,null))
return s},
Ho(a,b){var s,r,q=$.bj(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a4(0,$.Bc()).D(0,A.h7(s))
s=0
o=0}}if(b)return q.W(0)
return q},
Cz(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Hp(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.Q.h0(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.a(a,s)
o=A.Cz(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0&&h<j))return A.a(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.a(a,s)
o=A.Cz(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0&&n<j))return A.a(i,n)
i[n]=r}if(j===1){if(0>=j)return A.a(i,0)
l=i[0]===0}else l=!1
if(l)return $.bj()
l=A.bh(j,i)
return new A.aL(l===0?!1:c,i,l)},
CG(a,b){var s,r,q,p,o,n
if(a==="")return null
s=$.EZ().aj(a)
if(s==null)return null
r=s.b
q=r.length
if(1>=q)return A.a(r,1)
p=r[1]==="-"
if(4>=q)return A.a(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.a(r,5)
if(o!=null)return A.Ho(o,p)
if(n!=null)return A.Hp(n,2,p)
return null},
bh(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
At(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
aR(a){var s
if(a===0)return $.bj()
if(a===1)return $.bG()
if(a===2)return $.zR()
if(Math.abs(a)<4294967296)return A.h7(B.d.aD(a))
s=A.Hk(a)
return s},
h7(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bh(4,s)
return new A.aL(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bh(1,s)
return new A.aL(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.d.al(a,16)
r=A.bh(2,s)
return new A.aL(r===0?!1:o,s,r)}r=B.d.u(B.d.gbN(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.d.u(a,65536)}r=A.bh(r,s)
return new A.aL(r===0?!1:o,s,r)},
Hk(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.k(A.aX("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.bj()
r=$.EY()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.B(r)
if(!(p<8))return A.a(r,p)
r[p]=0}q=J.jn(B.i.ga6(r))
q.$flags&2&&A.B(q,13)
q.setFloat64(0,a,!0)
o=(r[7]<<4>>>0)+(r[6]>>>4)-1075
n=new Uint16Array(4)
n[0]=(r[1]<<8>>>0)+r[0]
n[1]=(r[3]<<8>>>0)+r[2]
n[2]=(r[5]<<8>>>0)+r[4]
n[3]=r[6]&15|16
m=new A.aL(!1,n,4)
if(o<0)l=m.bY(0,-o)
else l=o>0?m.aZ(0,o):m
if(s)return l.W(0)
return l},
Au(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.a(a,s)
o=a[s]
q&2&&A.B(d)
if(!(p>=0&&p<d.length))return A.a(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.B(d)
if(!(s<d.length))return A.a(d,s)
d[s]=0}return b+c},
CF(a,b,c,d){var s,r,q,p,o,n,m,l=B.d.u(c,16),k=B.d.P(c,16),j=16-k,i=B.d.aZ(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.d.dE(o,j)
q&2&&A.B(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.d.aZ(o&i,k)}q&2&&A.B(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
CA(a,b,c,d){var s,r,q,p=B.d.u(c,16)
if(B.d.P(c,16)===0)return A.Au(a,b,p,d)
s=b+p+1
A.CF(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.B(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
Hq(a,b,c,d){var s,r,q,p,o,n,m=B.d.u(c,16),l=B.d.P(c,16),k=16-l,j=B.d.aZ(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.d.dE(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.d.aZ(n&j,k)
q&2&&A.B(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o|s)>>>0
s=B.d.dE(n,l)}q&2&&A.B(d)
if(!(r>=0&&r<d.length))return A.a(d,r)
d[r]=s},
ls(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.a(a,s)
p=a[s]
if(!(s<q))return A.a(c,s)
o=p-c[s]
if(o!==0)return o}return o},
Hl(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n+c[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.B(e)
if(!(b>=0&&b<e.length))return A.a(e,b)
e[b]=p},
lr(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n-c[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.al(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.al(p,16)&1)}},
Av(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.a(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.a(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.B(d)
d[e]=m&65535
p=B.d.u(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.a(d,e)
k=d[e]+p
l=e+1
q&2&&A.B(d)
d[e]=k&65535
p=B.d.u(k,65536)}},
Hn(a,b,c,d,e){var s,r,q=b+d
for(s=e.$flags|0,r=q;--r,r>=0;){s&2&&A.B(e)
if(!(r<e.length))return A.a(e,r)
e[r]=0}for(s=c.length,r=0;r<d;){if(!(r<s))return A.a(c,r)
A.Av(c[r],a,0,e,r,b);++r}return q},
Hm(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.d.aF((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
Z(a,b,c){var s
A.b(a)
A.aE(c)
t.lF.a(b)
s=A.kU(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.k(A.A(a,null,null))},
Gf(a,b){a=A.b0(a,new Error())
if(a==null)a=A.d1(a)
a.stack=b.k(0)
throw a},
i6(a,b,c,d){var s,r=c?J.BT(a,d):J.BS(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dt(a,b,c){var s,r=A.d([],c.i("u<0>"))
for(s=J.T(a);s.m();)B.a.n(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
E(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.i("u<0>"))
s=A.d([],b.i("u<0>"))
for(r=J.T(a);r.m();)B.a.n(s,r.gt())
return s},
aN(a,b){var s=A.dt(a,!1,b)
s.$flags=3
return s},
iz(a,b,c){var s,r,q,p,o
A.b9(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.k(A.aI(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Cb(b>0||c<o?p.slice(b,c):p)}if(t.iT.b(a))return A.H4(a,b,c)
if(r)a=J.mu(a,c)
if(b>0)a=J.hv(a,b)
s=A.E(a,t.S)
return A.Cb(s)},
H4(a,b,c){var s=a.length
if(b>=s)return""
return A.GP(a,b,c==null||c>s?s:c)},
C(a,b,c){return new A.e9(a,A.A8(a,!1,b,c,!1,""))},
Am(a,b,c){var s=J.T(b)
if(!s.m())return a
if(c.length===0){do a+=A.i(s.gt())
while(s.m())}else{a+=A.i(s.gt())
while(s.m())a=a+c+A.i(s.gt())}return a},
AC(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.O){s=$.F_()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.E.M(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.aQ(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
HX(a){var s,r,q
if(!$.F0())return A.HY(a)
s=new URLSearchParams()
a.a0(0,new A.ur(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.c.X(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
H0(){return A.eD(new Error())},
Gc(a,b,c,d,e,f,g,h,i){var s=A.Cd(a,b,c,d,e,f,g,h,i)
if(s==null)return null
return new A.a5(A.BJ(s,h,i),h,i)},
f(a,b,c){var s=A.Cd(a,b,c,0,0,0,0,0,!0)
return new A.a5(s==null?new A.n7(a,b,c,0,0,0,0,0).$0():s,0,!0)},
Gb(){return new A.a5(Date.now(),0,!1)},
bV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=$.Es().aj(a)
if(b!=null){s=new A.n9()
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
j=new A.na().$1(r[7])
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
l-=f*(s.$1(r[11])+60*e)}}d=A.Gc(p,o,n,m,l,k,i,j%1000,h)
if(d==null)throw A.k(A.A("Time out of range",a,c))
return d}else throw A.k(A.A("Invalid date format",a,c))},
BK(a){var s,r
try{s=A.bV(a)
return s}catch(r){if(A.au(r) instanceof A.b7)return null
else throw r}},
BJ(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.k(A.aI(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.k(A.aI(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.k(A.y(b,s,"Time including microseconds is outside valid range"))
A.dZ(c,"isUtc",t.y)
return a},
BI(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Gd(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
n8(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc(a){if(a>=10)return""+a
return"0"+a},
A3(a,b,c,d){return new A.cb(b+1000*c+1e6*d+864e8*a)},
af(a,b,c){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.k(A.y(b,"name","No enum value with that name"))},
A4(a,b){var s,r,q,p=A.w(t.N,b)
for(s=a.length,r=0;r<s;++r){q=a[r]
p.j(0,q.b,q)}return p},
k5(a){if(typeof a=="number"||A.dX(a)||a==null)return J.hw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ca(a)},
Gg(a,b){A.dZ(a,"error",t.K)
A.dZ(b,"stackTrace",t.l)
A.Gf(a,b)},
ju(a){return new A.jt(a)},
aX(a,b){return new A.c5(!1,null,b,a)},
y(a,b,c){return new A.c5(!0,a,b,c)},
e1(a,b,c){return a},
Aj(a,b){return new A.fT(null,null,!0,a,b,"Value not in range")},
aI(a,b,c,d,e){return new A.fT(b,c,!0,a,d,"Invalid value")},
Ce(a,b,c,d){if(a<b||a>c)throw A.k(A.aI(a,b,c,d,null))
return a},
bM(a,b,c){if(0>a||a>c)throw A.k(A.aI(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.k(A.aI(b,a,c,"end",null))
return b}return c},
b9(a,b){if(a<0)throw A.k(A.aI(a,0,null,b,null))
return a},
nk(a,b,c,d){return new A.kg(b,!0,a,d,"Index out of range")},
ax(a){return new A.iE(a)},
iC(a){return new A.lj(a)},
ao(a){return new A.dF(a)},
aM(a){return new A.jN(a)},
A(a,b,c){return new A.b7(a,b,c)},
Gp(a,b,c){var s,r
if(A.AV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.n($.c2,a)
try{A.IJ(a,s)}finally{if(0>=$.c2.length)return A.a($.c2,-1)
$.c2.pop()}r=A.Am(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
A7(a,b,c){var s,r
if(A.AV(a))return b+"..."+c
s=new A.bC(b)
B.a.n($.c2,a)
try{r=s
r.a=A.Am(r.a,a,", ")}finally{if(0>=$.c2.length)return A.a($.c2,-1)
$.c2.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
IJ(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.i(l.gt())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.m()){if(j<=4){B.a.n(b,A.i(p))
return}r=A.i(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.m();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.i(p)
r=A.i(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
C3(a,b,c,d,e){return new A.eQ(a,b.i("@<0>").a3(c).a3(d).a3(e).i("eQ<1,2,3,4>"))},
bu(a,b,c,d){var s
if(B.t===c){s=J.bU(a)
b=J.bU(b)
return A.tu(A.dJ(A.dJ($.mq(),s),b))}if(B.t===d){s=J.bU(a)
b=J.bU(b)
c=J.bU(c)
return A.tu(A.dJ(A.dJ(A.dJ($.mq(),s),b),c))}s=J.bU(a)
b=J.bU(b)
c=J.bU(c)
d=J.bU(d)
d=A.tu(A.dJ(A.dJ(A.dJ(A.dJ($.mq(),s),b),c),d))
return d},
C5(a){var s,r,q=$.mq()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q=A.dJ(q,J.bU(a[r]))
return A.tu(q)},
Cl(a,b){return new A.iD(A.Ae(a,b),b.i("iD<0>"))},
Hb(a){var s=t.N
return B.a.a9(A.d(a.split("&"),t.s),A.w(s,s),new A.tE(B.O),t.yz)},
ll(a,b,c){throw A.k(A.A("Illegal IPv4 address, "+a,b,c))},
H9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q<s))return A.a(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ll("each part must be in the range 0..255",a,r)}A.ll("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ll(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.B(d)
if(!(k<16))return A.a(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ll(j,a,q)
p=l}A.ll("IPv4 address should contain exactly 4 parts",a,q)},
Cu(a,b,c){var s
if(b===c)throw A.k(A.A("Empty IP address",a,b))
if(!(b<a.length))return A.a(a,b)
if(a.charCodeAt(b)===118){s=A.Ha(a,b,c)
if(s!=null)throw A.k(s)
return!1}A.Cv(a,b,c)
return!0},
Ha(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.b7(n,a,q)
r=q
break}return new A.b7("Unexpected character",a,q-1)}if(r-1===b)return new A.b7(n,a,r)
return new A.b7("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.b7("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.a(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.b7("Invalid IPvFuture address character",a,r)}},
Cv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.tD(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.H9(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.al(l,8)
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
B.i.aS(s,a0,16,s,a)
B.i.aI(s,a,a0,0)}}return s},
CU(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
j6(a,b,c){throw A.k(A.A(c,a,b))},
j7(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.length,c="",b=e
if(d!==0){r=0
for(;;){if(!(r<d)){s=0
break}if(a0.charCodeAt(r)===64){c=B.c.X(a0,0,r)
s=r+1
break}++r}if(s<d&&a0.charCodeAt(s)===91){for(q=s,p=-1;q<d;++q){o=a0.charCodeAt(q)
if(o===37&&p<0){n=B.c.bZ(a0,"25",q+1)?q+2:q
p=q
q=n}else if(o===93)break}if(q===d)throw A.k(A.A("Invalid IPv6 host entry.",a0,s))
m=p<0?q:p
A.Cu(a0,s+1,m);++q
if(q!==d){if(!(q<d))return A.a(a0,q)
m=a0.charCodeAt(q)!==58}else m=!1
if(m)throw A.k(A.A("Invalid end of authority",a0,q))}else q=s
for(;q<d;++q)if(a0.charCodeAt(q)===58){l=B.c.aa(a0,q+1)
b=l.length!==0?A.Z(l,e,e):e
break}k=B.c.X(a0,s,q)}else k=e
d=A.d(a1.split("/"),t.s)
a=A.HZ(a,0,a.length)
c=A.I_(c,0,c.length)
k=A.HT(k,0,k==null?0:k.length,!1)
j=A.HW(e,0,0,a2)
i=A.HS(e,0,0)
b=A.HV(b,a)
h=a==="file"
if(k==null)m=c.length!==0||b!=null||h
else m=!1
if(m)k=""
m=k==null
g=!m
f=A.HU(e,0,0,d,a,g)
d=a.length===0
if(d&&m&&!B.c.ao(f,"/"))f=A.CY(f,!d||g)
else f=A.D_(f)
return new A.j5(a,c,m&&B.c.ao(f,"//")?"":k,b,f,j,i)},
HV(a,b){if(a!=null&&a===A.CU(b))return null
return a},
HT(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.a(a,r)
if(a.charCodeAt(r)!==93)A.j6(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.a(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.HQ(a,q,r)
if(o<r){n=o+1
p=A.CZ(a,B.c.bZ(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Cu(a,q,o)
l=B.c.X(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.a(a,k)
if(a.charCodeAt(k)===58){o=B.c.c6(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.CZ(a,B.c.bZ(a,"25",n)?o+3:n,c,"%25")}else p=""
A.Cv(a,b,o)
return"["+B.c.X(a,b,o)+p+"]"}}return A.I3(a,b,c)},
HQ(a,b,c){var s=B.c.c6(a,"%",b)
return s>=b&&s<c?s:c},
CZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bC(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.a(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.AA(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bC("")
l=h.a+=B.c.X(a,q,r)
if(m)n=B.c.X(a,r,r+3)
else if(n==="%")A.j6(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bC("")
if(q<r){h.a+=B.c.X(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.a(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.X(a,q,r)
if(h==null){h=new A.bC("")
m=h}else m=h
m.a+=i
l=A.Az(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.X(a,b,c)
if(q<c){i=B.c.X(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
I3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r<s))return A.a(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.AA(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bC("")
k=B.c.X(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.X(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bC("")
if(q<r){p.a+=B.c.X(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.j6(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.a(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.X(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bC("")
l=p}else l=p
l.a+=k
j=A.Az(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.X(a,b,c)
if(q<c){k=B.c.X(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
HZ(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(!A.CW(a.charCodeAt(b)))A.j6(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.j6(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.X(a,b,c)
return A.HP(q?a.toLowerCase():a)},
HP(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
I_(a,b,c){return A.I1(a,b,c,16,!1,!1)},
HU(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.N(d),p=new A.ak(d,q.i("e(1)").a(new A.uo()),q.i("ak<1,e>")).S(0,"/")
if(p.length===0){if(s)return"/"}else if(r&&!B.c.ao(p,"/"))p="/"+p
return A.I2(p,e,f)},
I2(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.ao(a,"/")&&!B.c.ao(a,"\\"))return A.CY(a,!s||c)
return A.D_(a)},
HW(a,b,c,d){if(d==null)return null
return A.HX(d)},
HY(a){var s={},r=new A.bC("")
s.a=""
a.a0(0,new A.up(new A.uq(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
HS(a,b,c){return null},
AA(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.a(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.a(a,l)
q=a.charCodeAt(l)
p=A.DM(r)
o=A.DM(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.a(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aQ(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.X(a,b,b+3).toUpperCase()
return null},
Az(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.dE(a,6*p)&63|q
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
o+=3}}return A.iz(s,0,null)},
I1(a,b,c,d,e,f){var s=A.I0(a,b,c,d,e,f)
return s==null?B.c.X(a,b,c):s},
I0(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.a(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.AA(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.j6(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.a(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.Az(n)}if(o==null){o=new A.bC("")
k=o}else k=o
k.a=(k.a+=B.c.X(a,p,q))+l
if(typeof m!=="number")return A.AT(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.X(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
CX(a){if(B.c.ao(a,"."))return!0
return B.c.bR(a,"/.")!==-1},
D_(a){var s,r,q,p,o,n,m
if(!A.CX(a))return a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.a(s,-1)
s.pop()
if(s.length===0)B.a.n(s,"")}p=!0}else{p="."===n
if(!p)B.a.n(s,n)}}if(p)B.a.n(s,"")
return B.a.S(s,"/")},
CY(a,b){var s,r,q,p,o,n
if(!A.CX(a))return!b?A.CV(a):a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gaq(s)!==".."){if(0>=s.length)return A.a(s,-1)
s.pop()}else B.a.n(s,"..")
p=!0}else{p="."===n
if(!p)B.a.n(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.n(s,"")
if(!b){if(0>=s.length)return A.a(s,0)
B.a.j(s,0,A.CV(s[0]))}return B.a.S(s,"/")},
CV(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.CW(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.X(a,0,s)+"%3A"+B.c.aa(a,s+1)
if(r<=127){if(!(r<128))return A.a(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
HR(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.k(A.aX("Invalid URL encoding",null))}}return r},
AB(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.O===d)return B.c.X(a,b,c)
else p=new A.jM(B.c.X(a,b,c))
else{p=A.d([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.k(A.aX("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.k(A.aX("Truncated URI",null))
B.a.n(p,A.HR(a,n+1))
n+=2}else if(r===43)B.a.n(p,32)
else B.a.n(p,r)}}return d.c2(p)},
CW(a){var s=a|32
return 97<=s&&s<=122},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
tP:function tP(){},
tQ:function tQ(){},
tS:function tS(a,b){this.a=a
this.b=b},
tT:function tT(a){this.a=a},
tO:function tO(a,b){this.a=a
this.b=b},
ur:function ur(a){this.a=a},
n7:function n7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
n9:function n9(){},
na:function na(){},
cb:function cb(a){this.a=a},
lJ:function lJ(){},
aA:function aA(){},
jt:function jt(a){this.a=a},
dM:function dM(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kg:function kg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iE:function iE(a){this.a=a},
lj:function lj(a){this.a=a},
dF:function dF(a){this.a=a},
jN:function jN(a){this.a=a},
kL:function kL(){},
iy:function iy(){},
tY:function tY(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(){},
h:function h(){},
an:function an(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(){},
a_:function a_(){},
m1:function m1(){},
bC:function bC(a){this.a=a},
tE:function tE(a){this.a=a},
tD:function tD(a){this.a=a},
j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.w=$},
uo:function uo(){},
uq:function uq(a,b){this.a=a
this.b=b},
up:function up(a){this.a=a},
k6:function k6(a,b){this.a=a
this.$ti=b},
Gs(a){return a},
An(a){return a},
GJ(a){return a},
oI:function oI(a){this.a=a},
b_(a){var s
if(typeof a=="function")throw A.k(A.aX("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Ic,a)
s[$.B5()]=a
return s},
Ic(a,b,c){t.BO.a(a)
if(A.P(c)>=1)return a.$1(b)
return a.$0()},
AP(a,b,c){return c.a(a[b])},
Dc(a,b){return a[b]},
DC(a,b,c,d){return d.a(a[b].apply(a,c))},
bF(a,b){var s=new A.am($.ai,b.i("am<0>")),r=new A.cC(s,b.i("cC<0>"))
a.then(A.fo(new A.z1(r,b),1),A.fo(new A.z2(r),1))
return s},
z1:function z1(a,b){this.a=a
this.b=b},
z2:function z2(a){this.a=a},
DY(a,b,c){A.DF(c,t.n,"T","min")
return Math.min(c.a(a),c.a(b))},
DX(a,b,c){A.DF(c,t.n,"T","max")
return Math.max(c.a(a),c.a(b))},
GR(){return $.jj()},
lN:function lN(a){this.a=a},
G2(a,b,c){return J.jo(a,b,c)},
fg(a,b,c){var s=a.BYTES_PER_ELEMENT
c=A.bM(b,c,B.d.aF(a.byteLength,s))
return J.bn(B.i.ga6(a),a.byteOffset+b*s,(c-b)*s)},
k4:function k4(){},
jY:function jY(a){this.$ti=a},
kx:function kx(a){this.$ti=a},
uM(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=n*2,l=new Uint8Array(m)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
if(!(r<m))return A.a(l,r)
l[r]=o.charCodeAt(q>>>4&15)
r=p+1
if(!(p<m))return A.a(l,p)
l[p]=o.charCodeAt(q&15)}return A.iz(l,0,null)},
ca:function ca(a){this.a=a},
jZ:function jZ(){this.a=null},
fE:function fE(){},
kc:function kc(){},
lU:function lU(){},
lW:function lW(){},
lV:function lV(a,b,c,d,e,f,g,h){var _=this
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
lX:function lX(){},
lY:function lY(){},
l5:function l5(a,b,c,d,e,f,g,h,i){var _=this
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
jz:function jz(a,b,c){this.c=a
this.d=b
this.a=c},
G_(){var s=$.e_()
return s},
mH:function mH(a){this.a=a},
jA:function jA(a,b){this.b=a
this.a=b},
Bx(a){if(a instanceof A.te)return"SHA-1"
if(a instanceof A.el)return"SHA-256"
if(a instanceof A.tf)return"SHA-384"
if(a instanceof A.cV)return"SHA-512"
return null},
ft:function ft(){},
jD:function jD(){},
jE:function jE(){},
lu:function lu(){},
lv:function lv(){},
mI:function mI(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
mJ:function mJ(a){this.a=a},
Bs(){return $.b5().eD(12,32)},
Ge(){return $.b5().cE()},
Gk(a,b){return $.b5().cI(a,b)},
Gl(){var s=$.b5().cg()
return $.b5().cJ(s)},
Cw(){return $.b5().di()},
eK:function eK(){},
hx:function hx(){},
hB:function hB(){},
hP:function hP(){},
ke:function ke(){},
e7:function e7(){},
te:function te(){},
el:function el(){},
tf:function tf(){},
cV:function cV(){},
tH:function tH(){},
mW:function mW(){},
mY:function mY(){},
e6:function e6(a){this.a=a},
cn:function cn(){},
kd:function kd(){},
lM:function lM(a){this.b=a
this.c=!1},
nv:function nv(){},
ny:function ny(){},
fJ:function fJ(){},
i1:function i1(){},
kV:function kV(){},
i2:function i2(a,b){this.a=a
this.$ti=b},
Ck(){return new A.iu()},
cQ:function cQ(a){this.a=a},
iu:function iu(){},
cR:function cR(){},
cr:function cr(){},
lR:function lR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
uh:function uh(a){this.a=a},
m6:function m6(){},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(){},
tb:function tb(){},
bl:function bl(a,b){this.b=a
this.c=b},
bp:function bp(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
l6:function l6(){},
cW:function cW(a,b,c){this.d=a
this.f=b
this.b=c},
bB:function bB(a,b){this.a=a
this.b=b},
kM:function kM(){this.a=null},
oL:function oL(){},
kN:function kN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=!1
_.f=d},
bP(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
jR(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bP(a5[0])
r=A.bP(a5[1])
q=A.bP(a5[2])
p=A.bP(a5[3])
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
f=B.d.P(k,16)
for(h=0;h<f;++h){g=j+h
if(!(g<k))return A.a(a7,g)
a4.setUint8(h,a7[g])}}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(e=o,d=0,c=0,b=0,a=0,j=0;j<128;++j,p=a3,q=a2,r=a1){g=B.d.P(j,32)
if(g===0&&j!==0)if(j===32)e=n
else e=j===64?m:l
if((e&B.d.aZ(1,31-g))>>>0!==0){d=(d^s)>>>0
c=(c^r)>>>0
b=(b^q)>>>0
a=(a^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bP(s)
a5.$flags&2&&A.B(a5)
if(0>=4)return A.a(a5,0)
a5[0]=k
k=A.bP(r)
a5.$flags&2&&A.B(a5)
if(1>=4)return A.a(a5,1)
a5[1]=k
k=A.bP(q)
a5.$flags&2&&A.B(a5)
if(2>=4)return A.a(a5,2)
a5[2]=k
k=A.bP(p)
a5.$flags&2&&A.B(a5)
if(3>=4)return A.a(a5,3)
a5[3]=k},
BD(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.i.aY(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.d.u(q,n),!1)
r.setUint32(12,B.d.P(q,n),!1)
p=J.bn(B.ay.ga6(r),0,null)
o=new Uint32Array(4)
A.jR(o,a,b)
A.jR(o,a,p)
return J.bn(B.D.ga6(o),0,null)},
jQ:function jQ(a,b,c){this.c=a
this.d=b
this.a=c},
jV:function jV(){},
ly:function ly(){},
lB:function lB(){},
ma(b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b2.length
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
if($.eH()===B.a1){s=A.fn(s)
q=A.fn(q)
p=A.fn(p)
o=A.fn(o)}a9=b4.length
if(0>=a9)return A.a(b4,0)
s^=b4[0]
if(1>=a9)return A.a(b4,1)
q^=b4[1]
if(2>=a9)return A.a(b4,2)
p^=b4[2]
if(3>=a9)return A.a(b4,3)
o^=b4[3]
n=(a9/4|0)-1
for(m=4,l=1;l<n;++l,o=k,p=r,q=f,s=h){r=B.aT[s>>>24&255]
k=B.aR[q>>>16&255]
j=B.aS[p>>>8&255]
i=B.aV[o&255]
if(!(m<a9))return A.a(b4,m)
h=r^k^j^i^b4[m]
i=B.aT[q>>>24&255]
j=B.aR[p>>>16&255]
k=B.aS[o>>>8&255]
r=B.aV[s&255]
g=m+1
if(!(g<a9))return A.a(b4,g)
f=i^j^k^r^b4[g]
g=B.aT[p>>>24&255]
r=B.aR[o>>>16&255]
k=B.aS[s>>>8&255]
j=B.aV[q&255]
i=m+2
if(!(i<a9))return A.a(b4,i)
r=g^r^k^j^b4[i]
i=B.aT[o>>>24&255]
j=B.aR[s>>>16&255]
k=B.aS[q>>>8&255]
g=B.aV[p&255]
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
if($.eH()===B.a1){a5=A.fn(a5)
a6=A.fn(a6)
a7=A.fn(a7)
a8=A.fn(a8)}b0.$flags&2&&A.B(b0)
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
Du(a){var s,r,q,p,o,n,m,l,k,j="The bytes have been destroyed",i=a.gaH(),h=B.k2.h(0,i.gq(0))
if(h==null)throw A.k(A.aX("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.jo(B.D.ga6(r),r.byteOffset,i.gq(0))
p=q.$flags|0
o=0
for(;;){n=i.a
if(n==null)A.j(A.ax(j))
if(!(o<J.aB(n)))break
n=i.a
if(n==null)A.j(A.ao(j))
m=J.as(n,o)
p&2&&A.B(q,9)
q.setUint8(o,m);++o}l=B.d.u(i.gq(0),4)
if($.eH()===B.a1)for(o=0;o<l;++o){p=q.getUint32(4*o,!1)
if(!(o<s))return A.a(r,o)
r[o]=p}for(p=l>6,o=l;o<s;++o){m=o-1
if(!(m>=0))return A.a(r,m)
k=r[m]
m=B.d.P(o,l)
if(m===0){k=A.Dr((k<<8|k>>>24)>>>0)
m=B.d.aF(o,l)-1
if(!(m>=0&&m<30))return A.a(B.df,m)
k^=B.df[m]<<24}else if(p&&m===4)k=A.Dr(k)
m=o-l
if(!(m<s))return A.a(r,m)
m=r[m]
if(!(o>=0&&o<s))return A.a(r,o)
r[o]=(k^m)>>>0}return r},
Dr(a){return(B.C[a>>>24&255]<<24|B.C[a>>>16&255]<<16|B.C[a>>>8&255]<<8|B.C[a&255])>>>0},
fn(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
mZ:function mZ(){},
n0(a,b,c){var s,r=J.ap(c),q=r.gq(c)
a.$flags&2&&A.B(a,11)
a.setUint32(b,q,!0)
b+=4
for(s=0;s<r.gq(c);++s)a.setUint8(b+s,r.h(c,s))
return b+r.gq(c)},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a,b){this.a=a
this.b=b},
jS:function jS(){},
n1:function n1(a){this.a=a},
n_:function n_(a,b,c,d,e,f,g,h,i,j){var _=this
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
eR:function eR(a){this.a=a},
lz:function lz(){},
lA:function lA(){},
mF(a){var s=new Uint32Array(16),r=new Uint32Array(32)
s=new A.jx(s,r,new Uint32Array(32),a)
if($.eH()!==B.a1)A.j(A.iC("The platform should be little-endian."))
if(a<1||a>64)A.j(A.y(a,null,null))
s.cY(null)
return s},
eN(a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=4294967296
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
a0.$flags&2&&A.B(a0)
a0[a1]=s
a0[r]=q
a0[a2]=(g<<1|d>>>31)>>>0
a0[o]=(d<<1|g>>>31)>>>0
a0[a3]=m
a0[l]=k
a0[a4]=j
a0[i]=h},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=$
_.c=b
_.d=$
_.e=0
_.f=!1
_.r=c
_.w=d},
lt:function lt(){},
Ga(a){return new A.hH(a)},
hH:function hH(a){this.a=a},
hI:function hI(){},
eS:function eS(){},
n4:function n4(){},
hK:function hK(){},
cJ:function cJ(){},
BE(a){var s=$.b5().e7()
return new A.jT(s,a)},
zY(a){var s,r,q,p,o=B.a.a9(a,0,new A.n2(),t.S),n=new Uint8Array(o)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,A.n)(a),++q){p=a[q]
B.i.aY(n,r,p)
r+=p.length}return n},
zZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
if(d==null)d=A.k2()
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
s.bi(k,j)
i=c.b
h=c.a
r.bi(i,h)
s.ah(s,r)
r.d1(0,k,j)
q.d1(0,i,h)
r.ah(r,q)
h=$.EC()
q.ah(h,b.d)
q.ah(q,c.d)
q.ah(q,$.B7())
p.ah(h,b.c)
p.ah(p,c.c)
o.bi(r,s)
n.bi(p,q)
m.d1(0,p,q)
l.d1(0,r,s)
s.ah(o,n)
r.ah(m,l)
q.ah(n,m)
p.ah(o,l)},
A_(a){var s,r,q,p=new Int32Array(16),o=new A.aD(p)
p=new Int32Array(16)
s=new Int32Array(16)
r=new A.aD(s)
o.eV(a.c,$.B8())
new A.aD(p).ah(a.a,o)
r.ah(a.b,o)
if(15>=s.length)return A.a(s,15)
q=s[15]
if(0>=p.length)return A.a(p,0)
p=p[0]
s.$flags&2&&A.B(s)
s[15]=(q|(p&1)<<15)>>>0
return r.hy(new Uint8Array(32))},
BF(a){var s,r,q,p,o,n,m,l,k,j=null,i=new Uint8Array(A.aF(a))
if(31>=i.length)return A.a(i,31)
s=i[31]
r=s>>>7&1
i.$flags&2&&A.B(i)
i[31]=s&127
s=new Int32Array(16)
q=new A.aD(s)
q.dn(i)
s=$.mp()
if(q.hd(s))return j
p=new Int32Array(16)
o=new A.aD(p)
n=new Int32Array(16)
m=new A.aD(n)
o.ah(q,q)
n=$.B9()
o.bi(o,n)
m.ah(q,q)
m.ah(m,$.B7())
m.d1(0,m,n)
m.eV(m,$.B8())
l=new Int32Array(16)
k=new A.aD(l)
k.ah(o,m)
if(k.gdc())if(r===1)return j
else{s=$.ED()
return new A.de(s,q,n,s)}o.bX($.Ez().az())
o.eV(k,o)
m.ah(o,o)
m.bi(m,k)
if(!m.gdc())o.ah(o,$.EA())
m.ah(o,o)
m.bi(m,k)
if(!m.gdc())return j
if(0>=p.length)return A.a(p,0)
if((p[0]&1)!==r)o.bi(s,o)
m.ah(o,q)
return new A.de(o,q,n,m)},
jU(a,b){var s,r,q,p,o,n,m,l=A.k2(),k=l.b.a
k.$flags&2&&A.B(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=l.c.a
k.$flags&2&&A.B(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=new Int32Array(A.aF(b.a.a))
s=new Int32Array(A.aF(b.b.a))
r=new Int32Array(A.aF(b.c.a))
q=new Int32Array(A.aF(b.d.a))
b=new A.de(new A.aD(k),new A.aD(s),new A.aD(r),new A.aD(q))
p=A.k2()
o=A.k2()
for(k=a.a,s=k.length,n=0;n<256;++n,m=p,p=b,b=m){r=B.d.u(n,16)
if(!(r<s))return A.a(k,r)
if((B.d.al(k[r],B.d.P(n,16))&1)===1){A.zZ(p,l,b,o)
m=p
p=l
l=m}A.zZ(p,b,b,o)}return l},
BG(a){var s,r=a.length
if(0>=r)return A.a(a,0)
s=a[0]
a.$flags&2&&A.B(a)
a[0]=s&248
if(31>=r)return A.a(a,31)
a[31]=a[31]&127
a[31]=a[31]|64},
jT:function jT(a,b){this.b=a
this.a=b},
n2:function n2(){},
k2(){var s=null,r=new Int32Array(16),q=new Int32Array(16),p=new Int32Array(16),o=new Int32Array(16)
return new A.de(new A.aD(r),new A.aD(q),new A.aD(p),new A.aD(o))},
f8(a){var s
if(a==null)s=new Int32Array(16)
else s=a
return new A.aD(s)},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nf:function nf(){},
aD:function aD(a){this.a=a},
t_:function t_(){},
kY:function kY(){this.a=null},
n3:function n3(a,b){this.a=a
this.b=b},
CH(a,b,c){var s,r,q,p
for(s=a.length,r=J.ap(b),q=0;q<s;++q){p=q<r.gq(b)?(r.h(b,q)^c)>>>0:c
a.$flags&2&&A.B(a)
a[q]=p}},
hJ:function hJ(a){this.a=a},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
lD:function lD(){},
m5:function m5(){},
hL:function hL(){},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=!1
_.w=_.r=0
_.x=e},
lF:function lF(){},
jW:function jW(){},
lG:function lG(){},
lH:function lH(){},
A0(a){var s,r,q
if(J.aB(a)!==32)throw A.k(A.aX("Seed must be 32 bytes",null))
s=new Uint8Array(A.aF(a))
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
s.$flags&2&&A.B(s)
s[0]=q&248
if(31>=r)return A.a(s,31)
s[31]=s[31]|64
s[31]=s[31]&127
return s},
BH(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new Int32Array(16)
new A.aD(a3).dn(a6)
s=a3.length
if(15>=s)return A.a(a3,15)
r=a3[15]
a3.$flags&2&&A.B(a3)
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
p[k]=r}for(s=a5.length,j=254;j>=0;--j){r=B.d.al(j,3)
if(!(r<s))return A.a(a5,r)
i=a5[r]>>>(j&7)&1
A.jX(q,p,i)
A.jX(o,n,i)
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
p[k]=g-e}A.c3(n,m,m)
A.c3(l,q,q)
A.c3(q,o,q)
A.c3(o,p,m)
for(k=0;k<16;++k){h=q[k]
f=o[k]
if(!(k<16))return A.a(m,k)
m[k]=h+f
if(!(k<16))return A.a(q,k)
q[k]=h-f
r=n[k]
d=l[k]
if(!(k<16))return A.a(o,k)
o[k]=r-d}A.c3(p,q,q)
A.c3(q,$.Eq(),o)
for(k=0;k<16;++k){r=q[k]
d=n[k]
if(!(k<16))return A.a(q,k)
q[k]=r+d}A.c3(o,q,o)
A.c3(q,n,l)
A.c3(n,a3,p)
A.c3(p,m,m)
A.jX(q,p,i)
A.jX(o,n,i)}for(k=0;k<16;++k){a3=o[k]
if(!(k<16))return A.a(n,k)
n[k]=a3}for(k=253;k>=0;--k){A.c3(o,o,o)
if(k!==2&&k!==4)A.c3(o,o,n)}A.c3(q,q,o)
for(k=0;k<3;++k){for(c=1,b=0;b<16;++b){a=65535+q[b]+c
c=B.d.u(a,65536)
if(!(b<16))return A.a(q,b)
q[b]=a-65536*c}a3=q[0]
if(0>=16)return A.a(q,0)
q[0]=a3+38*(c-1)}for(k=0;k<2;++k){a0=q[0]-65517
if(0>=16)return A.a(p,0)
p[0]=a0&65535
for(a1=1;a1<15;++a1,a0=a2){a2=q[a1]-65535-(B.d.al(a0,16)&1)
if(!(a1<16))return A.a(p,a1)
p[a1]=a2&65535}a3=q[15]
s=B.d.al(a0,16)
if(15>=16)return A.a(p,15)
p[15]=a3-32767-(s&1)
A.jX(q,p,1-(B.d.al(p[15],16)&1))}new A.aD(q).hy(a4)},
jX(a,b,c){var s,r,q,p,o,n=~(c-1)
for(s=a.$flags|0,r=b.$flags|0,q=0;q<16;++q){p=a[q]
o=n&(p^b[q])
s&2&&A.B(a)
if(!(q<16))return A.a(a,q)
a[q]=(p^o)>>>0
p=b[q]
r&2&&A.B(b)
if(!(q<16))return A.a(b,q)
b[q]=(p^o)>>>0}},
hM:function hM(a){this.a=a},
n6:function n6(){},
n5:function n5(){},
lI:function lI(){},
tX:function tX(){},
A1(a){return new A.Q(A.aR(a),0)},
ah(a){var s,r,q,p,o,n,m,l=null,k=$.Et().aj(a)
if(k==null)throw A.k(A.A(a+" is not a valid format",l,l))
s=k.b
r=s.length
if(1>=r)return A.a(s,1)
q=s[1]
if(2>=r)return A.a(s,2)
p=s[2]
if(p==null)p=""
if(3>=r)return A.a(s,3)
o=s[3]
n=A.tR(A.i(q)+p,l)
m=o==null?0:-A.Z(o,l,l)
return new A.Q(n,m+p.length)},
dd(a){var s,r
try{s=A.ah(a)
return s}catch(r){if(A.au(r) instanceof A.b7)return null
else throw r}},
BL(a,b){var s,r=a.b,q=b.b
A:{if(r>q){s=new A.t(a,new A.Q(b.a.a4(0,$.cG().aR(r-q)),r))
break A}if(r<q){s=new A.t(new A.Q(a.a.a4(0,$.cG().aR(q-r)),q),b)
break A}s=new A.t(a,b)
break A}return s},
Cf(a,b){var s,r,q
if(A.GT(a)){s=A.GS(a)
r=a.a4(0,A.dy($.cG().aR(s),null))
return new A.Q(r.a.aF(0,r.b),s)}q=$.Bj().aR(b)
return new A.Q(new A.rS().$1(a.a4(0,q)),b)},
GT(a){var s,r,q,p=a.b
for(;;){s=$.Fg()
r=p.P(0,s)
q=$.Bg()
r=r.l(0,q)
if(!(r===0))break
if(s.c===0)A.j(B.W)
p=p.bv(s)}for(;;){s=$.Bh()
r=p.P(0,s).l(0,q)
if(!(r===0))break
if(s.c===0)A.j(B.W)
p=p.bv(s)}s=p.l(0,$.jl())
return s===0},
GS(a){var s,r,q=a,p=0
for(;;){s=q.b
r=s.l(0,$.jm())
if(!(r!==0))break;++p
r=$.Bj()
q=A.dy(q.a.a4(0,r.a),s.a4(0,r.b))}return p},
Q:function Q(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
nb:function nb(a){this.a=a},
rS:function rS(){},
hb:function hb(a,b){this.a=a
this.b=b},
Ik(a,b){var s,r
for(;;){s=b.l(0,$.mr())
if(!(s!==0))break
r=a.P(0,b)
a=b
b=r}return a},
dy(a,b){var s,r,q
if(b==null)return new A.cu(a,$.jm())
s=$.mr()
r=b.l(0,s)
if(r===0)throw A.k(A.aX("zero can not be used as denominator",null))
r=a.l(0,s)
if(r===0)return new A.cu(s,$.jm())
if(b.l(0,s)<0){a=a.W(0)
b=b.W(0)}s=a.a?a.W(0):a
q=A.Ik(s,b.a?b.W(0):b)
return new A.cu(a.aF(0,q),b.aF(0,q))},
cu:function cu(a,b){this.a=a
this.b=b},
jr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){return new A.bo(k,c,m,n,h,j,e,a4,d,a3,a,b,o,q,a6,a5,i,g,a1,a2,s,a0,a7,l,p,f,r)},
zW(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="minimumBalance",a7="statement",a8="startFrom",a9="driveFolder",b0="closedAfter",b1="replacedFrom",b2="ownStartDate",b3="ownStartFrom",b4=b5.h(0,"id")
b4.toString
A.b(b4)
s=b5.h(0,"alias")
s.toString
A.b(s)
r=b5.h(0,"institution")
r.toString
A.b(r)
q=b5.h(0,"kind")
q.toString
q=A.af(B.dq,A.b(q),t.jN)
p=b5.h(0,"currency")
p.toString
A.b(p)
o=b5.h(0,"holder")
o.toString
A.b(o)
n=b5.h(0,"bookId")
n.toString
A.b(n)
m=b5.h(0,"startDate")
m.toString
m=A.av(A.b(m))
l=A.aE(b5.h(0,"billingCycleDay"))
k=A.aE(b5.h(0,"staleAfterDays"))
j=A.m(b5.h(0,"alertEmail"))
i=A.m(b5.h(0,"alertPhone"))
if(b5.h(0,"loan")==null)h=a5
else{h=b5.h(0,"loan")
h.toString
h=A.Af(t.I.a(h))}if(b5.h(0,a6)==null)g=a5
else{g=b5.h(0,a6)
g.toString
g=A.aJ(t.I.a(g))}if(b5.h(0,a7)==null)f=a5
else{f=b5.h(0,a7)
f.toString
f=A.Co(t.I.a(f))}if(b5.h(0,a8)==null)e=a5
else{e=b5.h(0,a8)
e.toString
e=A.tj(t.f.a(e).F(0,t.N,t.X))}if(b5.h(0,a9)==null)d=a5
else{d=b5.h(0,a9)
d.toString
d=A.BM(t.f.a(d).F(0,t.N,t.X))}if(b5.h(0,b0)==null)c=a5
else{c=b5.h(0,b0)
c.toString
c=A.av(A.b(c))}b=A.m(b5.h(0,"replacedBy"))
if(b5.h(0,b1)==null)a=a5
else{a=b5.h(0,b1)
a.toString
a=A.av(A.b(a))}if(b5.h(0,b2)==null)a0=a5
else{a0=b5.h(0,b2)
a0.toString
a0=A.av(A.b(a0))}if(b5.h(0,b3)==null)a1=a5
else{a1=b5.h(0,b3)
a1.toString
a1=A.tj(t.f.a(a1).F(0,t.N,t.X))}if(b5.h(0,"subtype")==null)a2=a5
else{a2=b5.h(0,"subtype")
a2.toString
a2=A.af(B.dd,A.b(a2),t.vi)}a3=A.m(b5.h(0,"ifsc"))
a4=A.m(b5.h(0,"micr"))
return A.jr(j,i,s,l,n,A.m(b5.h(0,"branch")),c,p,d,o,b4,a3,r,q,h,a4,g,A.m(b5.h(0,"numberShown")),a0,a1,b,a,k,m,e,f,a2)},
Ku(a){A.b(a)
return $.eI().aG(0,a).gq(0)>=9},
Dz(a,b,c,d){var s,r
if(b!=null){s=$.Fi()
s=!s.b.test(b)}else s=!1
if(s)return"an IFSC is 4 letters, a 0 and 6 letters or digits"
if(c!=null){s=$.Ft()
s=!s.b.test(c)}else s=!1
if(s)return"a MICR code is 9 digits"
if(a!=null)s=B.c.G(a).length===0||a.length>80
else s=!1
if(s)return"a branch name is 1 to 80 characters"
if(d!=null){r=A.C("\\d",!0,!1).aG(0,d).gq(0)
if(r>6)return"the number as statements show it keeps at most 6 digits; type X for the rest"
s=$.Fy()
if(!s.b.test(d)||r===0)return"the number as statements show it is its digits shown, with X for each hidden one"}return null},
eA(a){var s,r,q,p,o,n,m,l,k,j,i,h="the alias must look like EXAMPLEBANK-CC-1234 (last 4 digits only)",g=a.b,f=A.d([a.a,g,a.c,a.f],t.s),e=a.z
if(e!=null)f.push(e)
e=a.fy
if(e!=null)f.push(e)
if(B.a.N(f,A.Dt()))return"an entry looks like a full card or account number; only the last 4 digits are kept"
f=a.d
s=f===B.y
r=$.F9()
if(s!==r.b.test(g))return s?"a cash wallet is named CASH and its currency":h
if(!s){s=$.Fs()
g=!s.b.test(g)}else g=!1
if(g)return h
g=a.e
if(!B.e.C(g))return"currency "+g+" is not supported"
q=A.Dz(e,a.fr,a.fx,a.go)
if(q!=null)return q
A:{p=a.dy
if(B.ca===p||B.cb===p)e=f!==B.V||g!=="INR"
else e=!1
if(e)return p.c+" is a savings account in INR"
if(B.b6===p&&f!==B.a5)return"SRS is a retirement account"
break A}o=a.x
if(o!=null)e=f!==B.x||o<1||o>31
else e=!1
if(e)return"a billing day is 1 to 31 and only for a credit card"
n=a.as
if(n!=null){if(f!==B.o)return"loan details are only for a loan"
m=A.DU(n,g)
if(m!=null)return m}l=a.at
if(l!=null){if(!a.gaP())return"a minimum balance is only for a savings or current account"
if(l.b!==g)return"the minimum balance must be in "+g
if(l.a.l(0,$.M())<0)return"a minimum balance is zero or more"}k=a.ax
if(k!=null){m=A.Le(k,f)
if(m!=null)return m}j=a.y
if(j!=null&&j<1)return"the stale window is at least 1 day"
g=a.db==null
i=g?a.ay:a.dx
f=i==null
if(!f&&i.a===B.ak&&g){if(a.gaP())return"a start from a folder year is only for a card or a loan"
g=i.b
g.toString
if(!a.w.I(0,new A.K(g,1,1)))return"a folder-year start is 1 January of that year"
if(a.ch==null)return"a folder-year start needs the account's Drive folder"}g=f?null:i.c
f=a.ch
if(B.a.N(A.d([g,f==null?null:f.b],t.yH),new A.v2()))return"a folder path looks like it holds a full card or account number"
return null},
c4:function c4(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c){this.c=a
this.a=b
this.b=c},
bo:function bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
v2:function v2(){},
H2(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a7.h(0,"currency")
a6.toString
A.b(a6)
s=A.m(a7.h(0,"reconciledAtUtc"))
r=A.m(a7.h(0,"minimumDue"))
q=A.m(a7.h(0,"dueDate"))
p=a7.h(0,"statementId")
p.toString
A.b(p)
o=a7.h(0,"accountId")
o.toString
A.b(o)
n=a7.h(0,"periodStart")
n.toString
n=A.av(A.b(n))
m=a7.h(0,"periodEnd")
m.toString
m=A.av(A.b(m))
l=a7.h(0,"opening")
l.toString
l=A.a6(A.ah(A.b(l)),a6)
k=a7.h(0,"closing")
k.toString
k=A.a6(A.ah(A.b(k)),a6)
j=s==null?a5:A.bV(s).H()
a6=r==null?a5:A.a6(A.ah(r),a6)
i=q==null?a5:A.av(q)
h=A.m(a7.h(0,"ocrEngine"))
g=a7.h(0,"ocrRowsChecked")
A:{if(t.j.b(g)){f=A.d([],t.Dk)
for(e=J.T(g),d=t.f,c=t.N,b=t.X;e.m();){a=e.gt()
a.toString
a0=d.a(a).F(0,c,b)
a1=a0.h(0,"lineId")
a1.toString
A.b(a1)
a2=a0.h(0,"field")
a2.toString
A.b(a2)
a3=a0.h(0,"ocr")
a3.toString
A.b(a3)
a0=a0.h(0,"owner")
a0.toString
f.push(new A.kK(a1,a2,a3,A.b(a0)))}break A}f=a5
break A}e=A.d([],t.Ev)
d=t.jS.a(a7.h(0,"loans"))
d=J.T(d==null?B.aU:d)
c=t.f
b=t.N
a0=t.X
while(d.m()){a4=d.gt()
a4.toString
e.push(A.Cn(c.a(a4).F(0,b,a0)))}return new A.c0(p,o,n,m,l,k,j,a6,i,h,f,e)},
Kf(a,b,c){var s=c.bx(-30)
return a.c9(b).N(0,new A.xv(s))},
Lb(a,b){var s,r,q,p,o,n,m=a.ax
switch(m==null?null:m.c){case B.bT:return 31
case B.bU:return 92
case B.bV:return 184
case B.bW:return 366
case null:case void 0:break}m=A.C2(b,A.N(b).c)
s=A.E(m,A.o(m).c)
B.a.E(s,new A.zn())
m=s.length
r=m>7?B.a.ds(s,m-6-1):s
if(r.length<2)return 31
m=A.d([],t.t)
for(q=1;q<r.length;++q){p=r[q-1]
o=r[q]
o=A.f(o.a,o.b,o.c)
p=A.f(p.a,p.b,p.c)
m.push(B.d.u(o.b-p.b+1000*(o.a-p.a),864e8))}B.a.bh(m)
n=m.length
p=B.d.u(n-1,2)
if(!(p>=0&&p<n))return A.a(m,p)
p=m[p]
o=n/2|0
if(!(o<n))return A.a(m,o)
return B.d.u(p+m[o]+1,2)},
Jn(a,b,c,d,e){var s,r,q,p,o
for(s=c.length,r=null,q=0;q<c.length;c.length===s||(0,A.n)(c),++q){p=c[q]
if(r==null||A.f(p.a,p.b,p.c).l(0,A.f(r.a,r.b,r.c))>0)r=p}if(r==null)return!0
o=B.d.u(A.f(e.a,e.b,e.c).aX(A.f(r.a,r.b,r.c)).a,864e8)
if(d){s=a.y
return o>(s==null?b:s)}return o>A.Lb(a,c)+10},
Lm(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=a5.fx,a0=t.v,a1=A.aN(a,a0),a2=A.N(a1),a3=a2.i("p<1>"),a4=A.E(new A.p(a1,a2.i("l(1)").a(new A.zu(a6)),a3),a3.i("h.E"))
B.a.E(a4,new A.zv())
s=a4.length===0?d:B.a.gaq(a4)
for(a=A.aN(a,a0),a0=A.N(a),a1=a0.i("l(1)").a(new A.zw(a6)),a=B.a.gv(a),a0=new A.S(a,a1,a0.i("S<1>")),r=d;a0.m();){a1=a.gt()
a2=!0
if(r!=null){a3=a1.r
q=a3.a
p=r.a
if(q<=p)a2=q===p&&a3.b>r.b}if(a2)r=a1.r}a=a6.a
a0=a5.c9(a)
o=A.E(a0,a0.$ti.i("h.E"))
for(a0=a5.hi(a,!0),a1=J.T(a0.a),a0=new A.S(a1,a0.b,a0.$ti.i("S<1>")),n=d;a0.m();){m=a1.gt().y.c
a2=!0
if(n!=null){a3=m.a
q=n.a
if(a3<=q)a2=a3===q&&m.b>n.b}if(a2)n=m}a0=a6.e
a1=$.M()
l=A.a6(a1,a0)
k=A.a6(a1,a0)
for(a1=a5.c9(a),a2=a1.$ti,a3=a2.i("l(h.E)").a(new A.zx(a6)),a1=a1.gv(0),a2=new A.S(a1,a3,a2.i("S<h.E>")),j=0,i=0;a2.m();){a3=a1.gt()
if(A.jh(a3)!==B.aj)continue;++j
q=a3.f
p=q.b
if(p!==a0)++i
else if(a3.e===B.q){a3=l.b
if(p!==a3)A.j(A.ae(a3,p))
q=l.a.D(0,q.a)
l=new A.v(q,a3)
h=B.e.h(0,a3)
if(h==null)A.j(A.y(a3,c,b))
if((q.b<=0?0:Math.max(q.gA().b,0))>h)A.j(A.A(a3+" allows "+A.i(h)+" decimal places",q.k(0),d))}else{a3=k.b
if(p!==a3)A.j(A.ae(a3,p))
q=k.a.D(0,q.a)
k=new A.v(q,a3)
h=B.e.h(0,a3)
if(h==null)A.j(A.y(a3,c,b))
if((q.b<=0?0:Math.max(q.gA().b,0))>h)A.j(A.A(a3+" allows "+A.i(h)+" decimal places",q.k(0),d))}}g=A.aC(a8,B.n)
a0=s==null
f=a0?d:s.d
a0=a0?d:s.f
a1=A.d([],t.xQ)
for(a2=a4.length,e=0;e<a4.length;a4.length===a2||(0,A.n)(a4),++e)a1.push(a4[e].d)
a=A.Jn(a6,a7,a1,A.Kf(a5,a,g),g)
if(f!=null){a1=A.N(o)
new A.p(o,a1.i("l(1)").a(new A.zy(f)),a1.i("p<1>")).gq(0)}return new A.my(a0,f,a,j,l,k)},
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
my:function my(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.f=c
_.w=d
_.x=e
_.y=f},
xv:function xv(a){this.a=a},
zn:function zn(){},
zu:function zu(a){this.a=a},
zv:function zv(){},
zw:function zw(a){this.a=a},
zx:function zx(a){this.a=a},
zy:function zy(a){this.a=a},
Lt(a){var s,r,q=A.w(t.N,t.S)
for(s=J.T(a);s.m();){r=s.gt()
if(r.d!==B.y)q.mI(r.f,new A.zG(),new A.zH())}if(q.a===0)return null
s=q.$ti.i("aa<1,2>")
s=A.E(new A.aa(q,s),s.i("h.E"))
B.a.E(s,new A.zI())
return B.a.ga_(s).a},
ce:function ce(a,b){this.a=a
this.b=b},
zG:function zG(){},
zH:function zH(){},
zI:function zI(){},
tj(a){var s,r=null,q=a.h(0,"kind")
q.toString
switch(A.af(B.jJ,A.b(q),t.qe)){case B.ak:q=a.h(0,"year")
q.toString
A.P(q)
s=a.h(0,"folder")
s.toString
s=new A.h_(B.ak,q,A.b(s),r)
q=s
break
case B.bR:q=a.h(0,"statementId")
q.toString
q=new A.h_(B.bR,r,r,A.b(q))
break
case B.bS:q=B.lH
break
default:q=r}return q},
BM(a){var s,r=a.h(0,"id")
r.toString
A.b(r)
s=a.h(0,"path")
s.toString
return new A.k0(r,A.b(s))},
eo:function eo(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(a,b){this.a=a
this.b=b},
Co(a){var s,r,q
if(a.h(0,"source")==null)s=null
else{s=a.h(0,"source")
s.toString
s=A.af(B.j7,A.b(s),t.u4)}if(a.h(0,"format")==null)r=null
else{r=a.h(0,"format")
r.toString
r=A.af(B.iJ,A.b(r),t.nT)}if(a.h(0,"cycle")==null)q=null
else{q=a.h(0,"cycle")
q.toString
q=A.af(B.iq,A.b(q),t.Bu)}return new A.lb(s,r,q,A.aE(a.h(0,"day")))},
Le(a,b){var s=a.d
if(s==null)return null
if(b===B.x)return"a card has no statement day; its billing cycle day is the closing day"
if(s<1||s>31)return"the statement day is 1 to 31"
return null},
eq:function eq(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
lb:function lb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K5(a){var s
if(!B.a.N(B.iI,new A.wZ(a)))return"a fact is an identity or a helper fact"
s=a.d
if(B.c.G(s).length===0)return"a fact has a value"
if(B.a.N(A.d([a.b,a.c,s,a.f.c],t.s),new A.x_()))return"a fact looks like it holds a full number; only the last 4 characters are kept"
return null},
df:function df(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wZ:function wZ(a){this.a=a},
x_:function x_(){},
Dg(a){var s,r,q,p={}
p.a=4
s=t.q6
r=s.i("ak<ag.E,e>")
q=A.E(new A.ak(new A.aZ(A.d(a.split(""),t.s),s),s.i("e(ag.E)").a(new A.uN(p)),r),r.i("ag.E"))
return new A.aZ(q,A.N(q).i("aZ<1>")).c8(0)},
Dh(a){return A.hs(a,$.Fa(),t.tj.a(t._.a(new A.uQ())),null)},
xM(a){var s,r,q,p,o,n,m,l,k,j
for(s=$.Fh(),r=t._,q=t.tj,p=a,o=0;o<3;++o)p=A.hs(p,s[o],q.a(r.a(new A.xN())),null)
for(s=$.FA().aG(0,p),s=new A.fh(s.a,s.b,s.c),r=t.ez,n=0,q="";s.m();q=j){m=s.d
l=(m==null?r.a(m):m).b
k=l.index
j=A.Dh(B.c.X(p,n,k))
if(0>=l.length)return A.a(l,0)
j=q+j+A.i(l[0])
n=k+l[0].length}s=q+A.Dh(B.c.aa(p,n))
return s.charCodeAt(0)==0?s:s},
uN:function uN(a){this.a=a},
uQ:function uQ(){},
xN:function xN(){},
rR:function rR(a,b,c){this.a=a
this.b=b
this.c=c},
Jp(a,b){var s
switch(b){case null:case void 0:s=a===B.cg||a===B.b9
break
case B.b7:s=B.lD.B(0,a)
break
case B.cc:s=a!==B.b8&&a!==B.b9
break
default:s=null}return s},
JG(c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="currency",c1="is not a supported currency",c2=A.d([],t.eR),c3=c7.gR().gU(),c4=A.o(c3),c5=c4.i("p<h.E>"),c6=A.E(new A.p(c3,c4.i("l(h.E)").a(new A.wk(b9)),c5),c5.i("h.E"))
B.a.E(c6,new A.wl())
for(c3=c6.length,c4=c7.x2,c5=t.N,s=t.d6,r=t.s,q=t.c,p=c7.fy,o=t.dh,n=t.W,m=c7.fx,l=t.v,k=0;k<c6.length;c6.length===c3||(0,A.n)(c6),++k){j=c6[k]
i=A.dt(m,!1,l)
i.$flags=3
h=i
g=A.N(h)
f=g.i("p<1>")
e=A.E(new A.p(h,g.i("l(1)").a(new A.wm(j)),f),f.i("h.E"))
B.a.E(e,new A.wn())
h=j.a
g=c7.c9(h)
f=g.$ti
g=A.E(new A.p(g,f.i("l(h.E)").a(new A.wo()),f.i("p<h.E>")),n)
B.a.a1(g,A.Ib(c7,j))
B.a.E(g,new A.wp())
i=A.dt(p,!1,o)
i.$flags=3
f=i
d=A.N(f)
c=d.i("p<1>")
b=A.E(new A.p(f,d.i("l(1)").a(new A.wq(j,c7)),c),c.i("h.E"))
f=A.ab(q)
for(d=e.length,a=0;a<e.length;e.length===d||(0,A.n)(e),++a)f.n(0,e[a].d)
for(d=b.length,a=0;a<b.length;b.length===d||(0,A.n)(b),++a){a0=b[a]
c=a0.d
f.n(0,c==null?a0.c:c)}a1=A.E(f,f.$ti.c)
B.a.bh(a1)
a2=new A.ws(a1)
a3=A.K0(j)
for(f=e.length,a=0;a<e.length;e.length===f||(0,A.n)(e),++a){a4=e[a]
d=a4.d
c=a4.f
a5=c.b
a6=A.D4(g,d,a2.$1(d),a5)
a7=A.Ds(a6,a5)
c=c.a
a8=c.a
if(a8.gab(0)<0){c=c.b
a8=new A.Q(a8.W(0),c)
a9=new A.v(a8,a5)
b0=B.e.h(0,a5)
if(b0==null)A.j(A.y(a5,c0,c1))
if((c<=0?0:Math.max(a8.gA().b,0))>b0)A.j(A.A(a5+" allows "+A.i(b0)+" decimal places",a8.k(0),b9))}else{c=$.M()
a9=new A.v(c,a5)
b0=B.e.h(0,a5)
if(b0==null)A.j(A.y(a5,c0,c1))
if((c.b<=0?0:Math.max(c.gA().b,0))>b0)A.j(A.A(a5+" allows "+A.i(b0)+" decimal places",c.k(0),b9))}c="statement:"+a4.a
a5=a7.b
a8=a9.b
if(a5!==a8)A.j(A.ae(a8,a5))
a5=a7.a
a5=a9.a.D(0,new A.Q(a5.a.W(0),a5.b))
b1=new A.v(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.j(A.y(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b0)A.j(A.A(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
if(a5.a.gab(0)<0){a5=$.M()
b2=new A.v(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.j(A.y(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b0)A.j(A.A(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
a5=b2}else a5=b1
a8=A.d([],r)
for(b2=a6.length,b3=0;b3<a6.length;a6.length===b2||(0,A.n)(a6),++b3)a8.push(a6[b3].a)
B.a.n(c2,new A.c7(c,h,d,a4.x,a7,a5,!0,A.a7(c4,c5,s).h(0,c),a2.$1(d)==null,a3))}for(f=b.length,b4=j.e,a=0;a<b.length;b.length===f||(0,A.n)(b),++a){a0=b[a]
b5=a0.e
b6=a0.d
b7=b6==null?a0.c:b6
d=b5==null
b8=d?b9:b5.b
if(b8==null)b8=b4
a6=A.D4(g,b7,a2.$1(b7),b8)
a7=A.Ds(a6,b8)
c="notice:"+a0.a
if(d)d=b9
else{d=b5.a
a5=a7.b
a8=b5.b
if(a5!==a8)A.j(A.ae(a8,a5))
a5=a7.a
a5=d.D(0,new A.Q(a5.a.W(0),a5.b))
b1=new A.v(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.j(A.y(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>b0)A.j(A.A(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
if(a5.a.gab(0)<0){d=$.M()
a5=new A.v(d,a8)
b0=B.e.h(0,a8)
if(b0==null)A.j(A.y(a8,c0,c1))
if((d.b<=0?0:Math.max(d.gA().b,0))>b0)A.j(A.A(a8+" allows "+A.i(b0)+" decimal places",d.k(0),b9))
d=a5}else d=b1}a5=A.d([],r)
for(a8=a6.length,b3=0;b3<a6.length;a6.length===a8||(0,A.n)(a6),++b3)a5.push(a6[b3].a)
B.a.n(c2,new A.c7(c,h,b6,a0.r,a7,d,a0.w,A.a7(c4,c5,s).h(0,c),a2.$1(b7)==null,a3))}}B.a.E(c2,new A.wr())
return c2},
K0(a){var s=a.ax,r=s==null?null:s.c
A:{if(B.bU===r){s=93
break A}if(B.bV===r){s=186
break A}if(B.bW===r){s=372
break A}if(B.bT===r||r==null){s=31
break A}s=null}return s},
D4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=A.d([],t.A)
for(s=a.length,r=b.a,q=b.b,p=b.c,o=c!=null,n=0;n<a.length;a.length===s||(0,A.n)(a),++n){m=a[n]
l=!1
if(m.f.b===d){k=m.w
j=k.a
i=k.b
k=k.c
if(A.f(j,i,k).l(0,A.f(r,q,p))>0)l=!o||A.f(j,i,k).l(0,A.f(c.a,c.b,c.c))<=0}if(l)h.push(m)}return h},
Ds(a,b){return B.a.a9(a,A.a6($.M(),b),new A.uZ(),t.B)},
Ib(a,b){var s,r,q,p=A.C("[^A-Z0-9]",!0,!1),o=A.a4(b.c.toUpperCase(),p,"")
if(o.length===0)return B.a9
p=a.gR().gU()
s=A.o(p)
r=s.i("p<h.E>")
q=A.E(new A.p(p,s.i("l(h.E)").a(new A.uE(o)),r),r.i("h.E"))
p=a.b_()
s=p.$ti
return new A.p(p,s.i("l(h.E)").a(new A.uF(a,q,b,o)),s.i("p<h.E>"))},
c7:function c7(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g
_.z=h
_.Q=i
_.as=j},
c6:function c6(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
wk:function wk(a){this.a=a},
wl:function wl(){},
wm:function wm(a){this.a=a},
wn:function wn(){},
wo:function wo(){},
wp:function wp(){},
wq:function wq(a,b){this.a=a
this.b=b},
ws:function ws(a){this.a=a},
wr:function wr(){},
uZ:function uZ(){},
uE:function uE(a){this.a=a},
uF:function uF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uB:function uB(a){this.a=a},
uC:function uC(){},
uD:function uD(a){this.a=a},
H1(a){var s,r,q,p,o=a.h(0,"currency")
o.toString
o=new A.tn(a,A.b(o))
s=new A.tm(a)
r=a.h(0,"noticeId")
r.toString
A.b(r)
q=a.h(0,"accountId")
q.toString
A.b(q)
p=a.h(0,"receivedOn")
p.toString
return new A.cz(r,q,A.av(A.b(p)),s.$1("statementDate"),o.$1("balance"),o.$1("minimumDue"),s.$1("dueDate"),!1)},
cz:function cz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tn:function tn(a,b){this.a=a
this.b=b},
tm:function tm(a){this.a=a},
cF(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Fl().aj(a):m
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
n=A.f(q,p,o)
return A.b2(n)===q&&A.bk(n)===p&&A.aH(n)===o?new A.K(q,p,o):m},
Jc(e1,e2,e3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8="bookId",c9="currency",d0=null,d1="yearStartMonth",d2="id",d3="accountId",d4="source",d5="rent",d6="an amount in rupees, zero or more",d7="deposited",d8="withdrawnOn",d9=e3.e,e0=new A.v7(e1)
switch(e3.d){case"book.settings":s=d9.h(0,c8)
if(!e0.$1(s))return"no book "+A.i(s)
r=e2.a
q=r.h(0,s)
if(d9.C(c9))p=A.m(d9.h(0,c9))
else p=q==null?d0:q.b
if(d9.C(d1))o=A.aE(d9.h(0,d1))
else o=q==null?d0:q.c
if(p!=null&&!B.e.C(p))return"currency "+p+" is not supported"
if(o!=null)n=o<1||o>12
else n=!1
if(n)return"a financial year starts in month 1 to 12"
r.j(0,A.b(s),new A.jy(p,o))
break
case"subscription.set":r=d9.h(0,d2)
r.toString
A.b(r)
n=d9.h(0,c8)
n.toString
A.b(n)
m=d9.h(0,"vendor")
m.toString
m=B.c.G(A.b(m))
l=d9.h(0,"item")
l.toString
l=B.c.G(A.b(l))
k=d9.h(0,"kind")
k.toString
A.af(B.ix,A.b(k),t.lG)
k=d9.h(0,"cycle")
k.toString
A.af(B.iS,A.b(k),t.e4)
k=d9.h(0,"autoRenews")
k.toString
A.d0(k)
k=A.aE(d9.h(0,"quantity"))
if(d9.h(0,"price")==null)j=d0
else{j=d9.h(0,"price")
j.toString
j=A.aJ(t.f.a(j).F(0,t.N,t.X))}A.cF(d9.h(0,"renewsOn"))
i=A.m(d9.h(0,d3))
if(!e0.$1(n)||n==="personal")return"a subscription is in a company's or the property's book"
if(m.length===0||l.length===0)return"a subscription names its vendor and item"
if((k==null?1:k)<1)return"a quantity is 1 or more"
if(j!=null&&j.a.a.gab(0)<0)return"a price is zero or more"
h=i==null
g=h?d0:e1.gR().h(0,i)
if(!h)h=g==null||g.d===B.o
else h=!1
if(h)return"it is paid from a card or account"
e2.b.j(0,r,new A.h2(r,n,m,l,k,j,i))
break
case"subscription.remove":if(e2.b.Y(0,d9.h(0,d2))==null)return"no subscription "+A.i(d9.h(0,d2))
break
case"invoice.record":r=d9.h(0,d2)
r.toString
A.b(r)
n=A.m(d9.h(0,c8))
m=d9.h(0,"vendor")
m.toString
m=B.c.G(A.b(m))
l=A.m(d9.h(0,"number"))
k=A.cF(d9.h(0,"date"))
k.toString
j=d9.h(0,"total")
j.toString
i=t.f
h=t.N
f=t.X
j=A.aJ(i.a(j).F(0,h,f))
e=A.m(d9.h(0,"categoryId"))
d=d9.h(0,d4)
d.toString
A.b(d)
c=A.m(d9.h(0,"parserVersion"))
if(d9.h(0,d5)==null)b=d0
else{a=d9.h(0,d5)
a.toString
a=i.a(a).F(0,h,f)
a0=a.h(0,d5)
a0.toString
a0=A.aJ(i.a(a0).F(0,h,f))
a1=a.h(0,"gst")
a1.toString
a1=A.aJ(i.a(a1).F(0,h,f))
a=a.h(0,"tds")
a.toString
b=new A.iq(a0,a1,A.aJ(i.a(a).F(0,h,f)))}i=n!=null
if(i&&!e0.$1(n))return"no book "+n
if(m.length===0)return"an invoice names its vendor"
if(j.a.a.gab(0)<=0)return"an invoice total is more than zero"
f=e==null
a2=f?d0:A.a7(e1.d,h,t.G).h(0,e)
if(!f)if(a2!=null)i=i&&a2.b!==e1.bO(n)
else i=!0
else i=!1
if(i)return"an invoice's category belongs to its book"
if(b!=null){i=b.a
h=b.b
if(B.a.N(A.d([i,h,b.c],t.AA),new A.v8(j.b)))return"a rent invoice's parts are zero or more, in its currency"
if(!i.D(0,h).I(0,j))return"rent and GST add up to the invoice (PH-08)"
if(a2!=null&&!A.ho(a2))return"rent is filed under an income category"}else if(a2!=null&&A.ho(a2))return"a vendor's invoice is filed under a spending category"
e2.c.j(0,r,new A.eZ(r,n,m,l,k,j,e,d,c,b))
break
case"date.entered":s=d9.h(0,d2)
if(typeof s!="string")return"a date needs an id"
if(J.a1(d9.h(0,"removed"),!0)){if(e2.e.Y(0,s)==null)return"no date "+s
return d0}a3=A.cF(d9.h(0,"date"))
a4=d9.h(0,"title")
a5=d9.h(0,d4)
if(!e0.$1(d9.h(0,c8))||a3==null||typeof a4!="string"||B.c.G(a4).length===0)return"a date needs a book, a title and a real date"
if(typeof a5!="string"||B.c.G(a5).length===0)return"a date states its source (PH-04)"
r=d9.h(0,c8)
r.toString
A.b(r)
n=B.c.G(a4)
B.c.G(a5)
e2.e.j(0,s,new A.cN(r,n,a3,A.m(d9.h(0,"topic"))))
break
case"remittance.confirm":s=d9.h(0,"outflowId")
a6=A.dd(A.i(d9.h(0,"rate")))
a7=typeof s=="string"?e1.b.a.h(0,s):d0
if(a7==null||a7.ch==null)return"a confirmation is for a paired remittance"
if(a6==null||a6.l(0,$.M())<=0)return"a rate is more than zero"
if(d9.h(0,"fee")==null)a8=d0
else{r=d9.h(0,"fee")
r.toString
a8=A.aJ(t.f.a(r).F(0,t.N,t.X))}if(a8!=null&&a8.a.a.gab(0)<0)return"a fee is zero or more"
e2.f.j(0,a7.a,new A.kZ())
break
case"indiaTax.entry":s=d9.h(0,d2)
a9=d9.h(0,"fyStart")
a5=d9.h(0,d4)
b0=A.aU(new A.p(B.ja,t.wx.a(new A.v9(d9)),t.km),t.nq)
if(typeof s!="string"||!A.cD(a9)||b0==null||typeof a5!="string"||B.c.G(a5).length===0)return"an entry needs its year, what it is and its source"
if(d9.h(0,"amount")==null)b1=d0
else{r=d9.h(0,"amount")
r.toString
b1=A.aJ(t.f.a(r).F(0,t.N,t.X))}b2=A.m(d9.h(0,"document"))
r=b0===B.cw
if(r)n=b2==null||B.c.G(b2).length===0
else n=b1==null
if(n)return r?"name the document":"an amount from the certificate"
if(b1!=null)r=b1.b!=="INR"||b1.a.a.gab(0)<0
else r=!1
if(r)return d6
if(b0===B.cx){b3=A.m(d9.h(0,"deductor"))
b4=A.aE(d9.h(0,"quarter"))
b5=A.m(d9.h(0,"certificateLast4"))
if(d9.h(0,"paid")==null)b6=d0
else{r=d9.h(0,"paid")
r.toString
b6=A.aJ(t.f.a(r).F(0,t.N,t.X))}if(d9.h(0,d7)==null)b7=d0
else{r=d9.h(0,d7)
r.toString
b7=A.aJ(t.f.a(r).F(0,t.N,t.X))}r=!0
if(b3!=null)if(B.c.G(b3).length!==0){r=A.C("\\d{5}",!0,!1)
r=r.b.test(b3)}if(r)return"name the deductor"
if(b4==null||b4<1||b4>4)return"a quarter from 1 to 4"
if(b5!=null){r=A.C("^[A-Za-z0-9]{1,4}$",!0,!1)
r=!r.b.test(b5)}else r=!0
if(r)return"a certificate keeps its number's last 4"
for(r=[b6,b7],b8=0;b8<2;++b8){b9=r[b8]
if(b9==null||b9.b!=="INR"||b9.a.a.gab(0)<0)return d6}}else b3=d0
B.c.G(a5)
if(b2!=null)B.c.G(b2)
A.cF(d9.h(0,"on"))
if(b3!=null)B.c.G(b3)
e2.r.j(0,s,new A.ki())
break
case"account.sourceOnly":g=e1.gR().h(0,d9.h(0,d3))
c0=d9.h(0,"memberId")
c1=A.cF(d9.h(0,"consentOn"))
if(g!=null){r=g.d
r=r===B.o||r===B.y}else r=!0
if(r)return"a source-only account is a bank account"
if(typeof c0!="string"||!A.a7(e1.p3,t.N,t.o).C(c0))return"name the holder as a household member"
if(c1==null)return"the date the holder agreed (PH-07)"
c2=A.cF(d9.h(0,d8))
if(d9.h(0,d8)!=null)r=c2==null||A.f(c2.a,c2.b,c2.c).l(0,A.f(c1.a,c1.b,c1.c))<0
else r=!1
if(r)return"a withdrawal is on or after the consent"
e2.w.j(0,g.a,new A.l8())
break
case"loan.joint":g=e1.gR().h(0,d9.h(0,d3))
c3=d9.h(0,"joint")
if(g==null||g.d!==B.o||!A.dX(c3))return"only a loan is jointly held"
r=e2.x
n=g.a
if(c3)r.n(0,n)
else r.Y(0,n)
break
case"statement.sourceRead":s=d9.h(0,"statementId")
c4=A.cF(d9.h(0,"periodStart"))
c5=A.cF(d9.h(0,"periodEnd"))
c6=d9.h(0,d3)
if(typeof s!="string"||typeof c6!="string"||!e2.w.C(c6)||c4==null||c5==null)return"a source-only statement names its account and period"
r=e2.z
if(r.C(s))return"statement "+s+" is already read"
r.j(0,s,new A.iT(c6,c4,c5))
break
case"book.owedMentioned":s=d9.h(0,c8)
c7=d9.h(0,"month")
if(!e0.$1(s)||typeof c7!="string")return"a book and a month"
e2.Q.n(0,A.i(s)+"|"+c7)
break
default:return"not a book record operation"}return d0},
jy:function jy(a,b){this.b=a
this.c=b},
er:function er(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.w=e
_.x=f
_.z=g},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cN:function cN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.f=d},
kZ:function kZ(){},
bR:function bR(a,b){this.a=a
this.b=b},
ki:function ki(){},
l8:function l8(){},
l9:function l9(){},
mG:function mG(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
v7:function v7(a){this.a=a},
v8:function v8(a){this.a=a},
v9:function v9(a){this.a=a},
Ed(a){var s=a<0?"-":"",r=Math.abs(a)
return A.a6(A.ah(s+B.d.u(r,100)+"."+B.c.af(""+B.d.P(r,100),2,"0")),"SGD")},
BA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){return new A.db(j,e,g,i,k,a2,a1,s,q,n,m,h,f,c,a0,r,l,p,o,a3,a,d,b)},
G9(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a5.c,a4=a3.h(0,"draftId")
a4.toString
A.b(a4)
s=a3.h(0,"bookId")
s.toString
A.b(s)
r=a3.h(0,"customerId")
r.toString
A.b(r)
q=A.ay(a3.h(0,"date"))
q.toString
p=A.ay(a3.h(0,"due"))
p.toString
o=a3.h(0,"seriesId")
o.toString
A.b(o)
n=a3.h(0,"seq")
n.toString
A.P(n)
m=a3.h(0,"number")
m.toString
A.b(m)
l=A.d([],t.Aq)
k=a3.h(0,"lines")
k.toString
k=J.d4(t.j.a(k),t.mE)
j=k.$ti
k=new A.ar(k,k.gq(0),j.i("ar<O.E>"))
i=t.N
h=t.X
j=j.i("O.E")
while(k.m()){g=k.d
g=(g==null?j.a(g):g).F(0,i,h)
f=g.h(0,"description")
f.toString
A.b(f)
e=g.h(0,"quantity")
e.toString
e=A.ah(A.b(e))
d=g.h(0,"unitPrice")
d.toString
A.P(d)
c=g.h(0,"amount")
c.toString
l.push(new A.c8(f,e,d,A.P(c),A.m(g.h(0,"gst"))))}k=A.aE(a3.h(0,"gstPercent"))
j=a3.h(0,"gst")
j.toString
A.P(j)
i=a3.h(0,"customerName")
i.toString
A.b(i)
h=a3.h(0,"customerAddress")
h.toString
A.b(h)
g=A.m(a3.h(0,"attention"))
f=A.m(a3.h(0,"reference"))
e=A.m(a3.h(0,"note"))
d=A.m(a3.h(0,"footer"))
c=a3.h(0,"issuerName")
c.toString
A.b(c)
b=a3.h(0,"issuerAddress")
b.toString
A.b(b)
a=a3.h(0,"uenLast4")
a.toString
A.b(a)
a0=a3.h(0,"accountId")
a0.toString
A.b(a0)
a1=a3.h(0,"bankName")
a1.toString
A.b(a1)
a2=a3.h(0,"accountLast4")
a2.toString
return A.BA(a0,A.b(a2),g,a1,s,h,r,i,q,a4,p,d,j,k,b,c,l,e,m,f,n,o,a)},
mg(a,b){var s,r,q,p,o=A.d([],t.V)
for(s=a.a7.b3(B.ap),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
if(A.m(p.c.h(0,"draftId"))===b)o.push(p)}B.a.E(o,new A.wW())
return o},
Kl(a,b){var s,r,q,p,o,n=A.d([],t.V)
for(s=a.a7.b3(B.a8),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=A.m(p.c.h(0,"bookId"))
if(o===b)n.push(p)}B.a.E(n,new A.xA())
return n},
JM(a,b){var s,r,q,p,o,n=A.d([],t.h5)
for(s=a.a7.b3(B.a7),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=A.m(p.c.h(0,"bookId"))
if(o===b)n.push(A.G9(p))}B.a.E(n,new A.wy())
return n},
JL(a,b){var s,r,q,p=a.a7,o=p.a5(B.a8,b)
if(o==null)return B.ju
s=o.c
r=A.m(s.h(0,"bookId"))
r.toString
q=A.d([],t.s)
if(p.a5(B.aq,r)==null)q.push("The company's invoice issuer")
s=A.m(s.h(0,"customerId"))
s.toString
if(p.a5(B.a4,s)==null)q.push("The customer")
if(A.mg(a,b).length===0)q.push("At least one line")
return q},
DH(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8="quantity",a9="unitPrice",b0="currency",b1="is not a supported currency",b2="paymentDays",b3=A.JL(b4,b5)
if(b3.length!==0)return new A.t(a7,b3)
s=b4.a7
r=s.a5(B.a8,b5).c
q=A.m(r.h(0,"bookId"))
q.toString
p=s.a5(B.aq,q)
p.toString
o=A.m(r.h(0,"customerId"))
o.toString
o=s.a5(B.a4,o)
o.toString
p=p.c
n=J.a1(p.h(0,"gstRegistered"),!0)
m=A.d([],t.Aq)
for(l=A.mg(b4,b5),k=l.length,j=t.f,i=t.N,h=t.X,g=0;g<l.length;l.length===k||(0,A.n)(l),++g){f=l[g].c
e=A.m(f.h(0,"description"))
e.toString
if(typeof f.h(0,a8)=="string"){d=f.h(0,a8)
d.toString
d=A.dd(A.b(d))}else d=a7
d.toString
if(j.b(f.h(0,a9))){c=f.h(0,a9)
c.toString
c=j.a(c).F(0,i,h)
b=c.h(0,"amount")
b.toString
b=A.ah(A.b(b))
c=c.h(0,b0)
c.toString
A.b(c)
a=new A.v(b,c)
a0=B.e.h(0,c)
if(a0==null)A.j(A.y(c,b0,b1))
if((b.b<=0?0:Math.max(b.gA().b,0))>a0)A.j(A.A(c+" allows "+A.i(a0)+" decimal places",b.k(0),a7))
c=a}else c=a7
b=c.a
c=c.b
a0=B.e.h(0,c)
if(a0==null)A.j(A.y(c,b0,b1))
c=new A.Q(b.a,b.b-a0).az().aD(0)
if(typeof f.h(0,a8)=="string"){b=f.h(0,a8)
b.toString
b=A.dd(A.b(b))}else b=a7
b.toString
if(j.b(f.h(0,a9))){a=f.h(0,a9)
a.toString
a=j.a(a).F(0,i,h)
a1=a.h(0,"amount")
a1.toString
a1=A.ah(A.b(a1))
a=a.h(0,b0)
a.toString
A.b(a)
a2=new A.v(a1,a)
a0=B.e.h(0,a)
if(a0==null)A.j(A.y(a,b0,b1))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>a0)A.j(A.A(a+" allows "+A.i(a0)+" decimal places",a1.k(0),a7))
a=a2}else a=a7
a1=a.a
a=a.b
a0=B.e.h(0,a)
if(a0==null)A.j(A.y(a,b0,b1))
b=new A.Q(b.a.a4(0,A.aR(new A.Q(a1.a,a1.b-a0).az().aD(0))),b.b).D(0,A.ah("0.5")).ct(0,B.c4).az().aD(0)
if(n){f=A.m(f.h(0,"gst"))
if(f==null)f="standard"}else f=a7
m.push(new A.c8(e,d,c,b,f))}a3=new A.p(m,t.qB.a(new A.wR()),t.rb).a9(0,0,new A.wS(),t.S)
l=A.ay(r.h(0,"date"))
l.toString
k=A.m(p.h(0,"seriesId"))
k.toString
a4=A.B_(b4,k,l)
j=o.c
i=A.aE(j.h(0,b2))
a5=i==null?A.aE(p.h(0,b2)):i
if(a5==null)a5=30
i=b4.gR().h(0,A.m(p.h(0,"accountId")))
i.toString
h=l.bx(a5)
s=A.m(s.a5(B.af,k).c.h(0,"pattern"))
s.toString
s=A.AN(s,a4,A.hl(A.mi(l),"{fy}"),l.a)
f=n?9:a7
e=n?B.d.u(a3*9+50,100):0
d=A.m(j.h(0,"name"))
d.toString
c=A.m(j.h(0,"address"))
c.toString
j=A.m(j.h(0,"attention"))
b=A.m(r.h(0,"reference"))
r=A.m(r.h(0,"note"))
a=A.m(p.h(0,"footer"))
a1=A.m(p.h(0,"name"))
a1.toString
a2=A.m(p.h(0,"address"))
a2.toString
p=A.m(p.h(0,"uenLast4"))
p.toString
a6=i.b
return new A.t(A.BA(i.a,B.c.aa(a6,a6.length-4),j,i.c,q,c,o.b,d,l,b5,h,a,e,f,a2,a1,m,r,s,b,a4,k,p),B.b)},
Jd(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="company-invoice:",b="personal",a="company.income",a0=a3.e,a1=a0.h(0,"draftId")
if(typeof a1!="string")return"an invoice names its draft"
s=a2.a7
if(s.a5(B.a7,c+a1)!=null)return"that draft is already issued"
r=A.DH(a2,a1)
q=r.a
if(q==null)return"not issued: "+B.a.S(r.b,", ").toLowerCase()
p=q.w
if(p!==a0.h(0,"number")||q.gdt()+q.z!==a0.h(0,"total"))return"the invoice changed since it was shown; issue it again"
a0=A.d([],t.s)
for(o=t.N,n=A.a7(a2.d,o,t.G).gU(),n=n.gv(n),m=q.b,l=a2.f,k=m==="personal";n.m();){j=n.gt()
i=j.b
h=l.h(0,m)
if(h==null)h=k?b:d
g=!1
if(i===(h==="member"?b:h)){i=j.a
if(!(i==="income"||B.c.bB(i,".income"))){i=j.d
if(i!=null)i=i==="income"||B.c.bB(i,".income")
else i=g}else i=!0}else i=g
if(i)a0.push(j.a)}B.a.bh(a0)
n=c+q.a
s.eX(new A.b1(B.a7,n,q.f2()))
for(l=A.mg(a2,a1),k=l.length,j=s.a,f=0;f<l.length;l.length===k||(0,A.n)(l),++f){e=l[f]
i=j.h(0,B.ap)
if(i!=null)i.Y(0,e.b)}s.lD(B.a8,a1)
s=q.Q
l=q.d
k=A.Ed(q.gdt()+q.z)
a0=B.a.B(a0,a)?a:A.aU(a0,o)
a2.aC.c.j(0,n,new A.eZ(n,m,s,p,l,k,a0,"owner",d,d))
return d},
c8:function c8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
db:function db(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
mX:function mX(){},
wW:function wW(){},
xA:function xA(){},
wy:function wy(){},
wR:function wR(){},
wS:function wS(){},
JZ(a){var s,r,q,p,o,n=A.w(t.N,t.C)
for(s=a.b_(),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gt()
p=q.ch
if(p!=null)J.bT(n.aK(p,new A.wI()),q)}n.mw(0,new A.wJ())
o=A.d([],t.xI)
n.a0(0,new A.wK(o))
return o},
fw:function fw(a,b){this.a=a
this.b=b},
wI:function wI(){},
wJ:function wJ(){},
wH:function wH(){},
wK:function wK(a){this.a=a},
wE:function wE(){},
wF:function wF(){},
wG:function wG(){},
DO(a,b){var s,r,q,p,o,n,m,l,k,j=A.d([],t.A),i=b.a,h=a.aC.d.h(0,i)
h=J.T(h==null?B.b:h)
s=a.b.a
while(h.m()){r=s.h(0,h.gt())
if(r!=null)j.push(r)}q=b.f
p=A.a6($.M(),q.b)
for(h=j.length,o=0;o<j.length;j.length===h||(0,A.n)(j),++o){s=j[o].f
r=p.b
if(s.b===r){s=p.a.D(0,s.a)
p=new A.v(s,r)
n=B.e.h(0,r)
if(n==null)A.j(A.y(r,"currency","is not a supported currency"))
if((s.b<=0?0:Math.max(s.gA().b,0))>n)A.j(A.A(r+" allows "+A.i(n)+" decimal places",s.k(0),null))}}h=b.y
s=h==null
m=s?null:h.glL()
q=m==null?q:m
l=p.a.l(0,q.a)
if(b.b==null)k=B.cE
else if(j.length===0)k=B.eZ
else{if(!s){if(l!==0)i=l>0&&A.Id(a,i)
else i=!0
i=i?B.bl:B.cG}else if(l<0)i=B.bk
else i=l===0?B.bl:B.cF
k=i}return new A.dp(b,p,k,B.a.N(j,new A.xB()))},
Ko(a){var s,r,q=A.d([],t.aW)
for(s=a.aC.c,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>"));s.m();){r=s.d
q.push(A.DO(a,r))}B.a.E(q,new A.xC())
return q},
Kn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="currency",f="is not a supported currency",e=A.d([],t.J)
for(s=A.Ko(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=p.d
A:{if(B.cE===o){n="No rule places this bill in a book: pick its book."
break A}if(B.cF===o){n="Paid "+p.c.k(0)+" against an invoice of "+p.a.f.k(0)+"."
break A}if(B.cG===o){n=p.c.k(0)
m=p.a.y
l=m.a
k=m.b
j=k.b
i=l.b
if(j!==i)A.j(A.ae(i,j))
l=l.a.D(0,k.a)
h=B.e.h(0,i)
if(h==null)A.j(A.y(i,g,f))
if((l.b<=0?0:Math.max(l.gA().b,0))>h)A.j(A.A(i+" allows "+A.i(h)+" decimal places",l.k(0),null))
m=m.c
k=m.b
if(k!==i)A.j(A.ae(i,k))
m=m.a
m=l.D(0,new A.Q(m.a.W(0),m.b))
h=B.e.h(0,i)
if(h==null)A.j(A.y(i,g,f))
if((m.b<=0?0:Math.max(m.gA().b,0))>h)A.j(A.A(i+" allows "+A.i(h)+" decimal places",m.k(0),null))
n="Received "+n+"; the invoice expects "+new A.v(m,i).k(0)+" (rent and GST, less the tax withheld)."
break A}if(B.bk===o&&p.e){n="The shares come to "+p.c.k(0)+" of "+p.a.f.k(0)+"."
break A}n=null
break A}if(n!=null){m=p.a
l=m.a
k=m.d
if(k==null)k=""
j=m.e.k(0)
e.push(new A.W("invoice:"+l,B.bL,l,A.a4(m.c+" "+k+" of "+j+": "+n,"  "," ")))}}return e},
Id(a,b){return B.a.N(a.a7.b3(B.ah),new A.uH(b))},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
xB:function xB(){},
xC:function xC(){},
uH:function uH(a){this.a=a},
K_(a){var s,r,q,p,o,n,m,l,k,j=A.d([],t.J)
for(s=A.JZ(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=p.a
j.push(new A.W("cross-book:"+o,B.ac,o,"The two sides of a payment for another book disagree: "+p.b+"."))}s=A.w(t.N,t.W)
for(r=a.b_(),o=J.T(r.a),r=new A.S(o,r.b,r.$ti.i("S<1>"));r.m();){n=o.gt()
if(n.d===B.k&&n.ch!=null&&n.at!=null){m=n.ch
m.toString
s.j(0,m,n)}}for(r=a.b_(),o=r.$ti,n=o.i("l(h.E)").a(new A.wL()),r=r.gv(0),o=new A.S(r,n,o.i("S<h.E>"));o.m();){n=r.gt()
m=n.ch
l=s.h(0,m)
if(l!=null)k=l.b===n.at&&l.at===n.b
else k=!0
if(k)continue
m.toString
B.a.n(j,new A.W("cross-book-book:"+A.i(m),B.ac,m,"The advance names "+A.i(n.at)+", but its expense is in "+l.b+"."))}return j},
wL:function wL(){},
ho(a){var s=a.a
if(!(s==="income"||B.c.bB(s,".income"))){s=a.d
if(s!=null)s=s==="income"||B.c.bB(s,".income")
else s=!1}else s=!0
return s},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
KQ(a,b){var s,r,q,p,o=a.c
if(B.c.G(o).length===0)return"give it a name"
s=$.eI()
if(s.aG(0,o).gq(0)<9){o=a.w
o=o!=null&&s.aG(0,o).gq(0)>=9}else o=!0
if(o)return"the name or words look like a full account number"
o=b.a
r=o.h(0,a.d)
if(r==null||!r.gaP()||r.d===B.y)return"the account must be a savings or current account"
if(a.b===B.dE){q=o.h(0,a.e)
if(q==null||!q.gaP()||q.d===B.y||q.a===r.a)return"a move goes to another savings or current account"
if(q.e!==r.e)return"a move between currencies is not planned here"}else if(a.e!=null)return"only a move has a receiving account"
o=a.f
if(o<1||o>31)return"Day of month is a whole number, 1 to 31"
p=a.r
o=p!=null
if(o&&p.b!==r.e)return"the amount must be in "+r.e
if(o&&p.a.l(0,$.M())<=0)return"the amount must be more than 0"
if(A.ml(a.x)==null)return"the first month is YYYY-MM"
if(a.y<1)return"the version starts at 1"
return null},
eh:function eh(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g,h,i,j){var _=this
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
kS:function kS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a,b){this.a=a
this.b=b},
BN(a){var s,r,q,p,o="typicalAmount",n=a.h(0,"id")
n.toString
A.b(n)
s=a.h(0,"payee")
s.toString
A.b(s)
r=a.h(0,"fromAccountId")
r.toString
A.b(r)
q=A.aE(a.h(0,"dayOfMonth"))
if(a.h(0,o)==null)p=null
else{p=a.h(0,o)
p.toString
p=A.aJ(t.I.a(p))}return new A.e5(n,s,r,q,p,A.m(a.h(0,"categoryId")))},
DL(a,b){var s,r,q
if($.eI().aG(0,a.b).gq(0)>=9)return"the payee looks like a full account number; give a name instead"
if(!b.gaP())return"From account must be a savings or current account"
s=a.d
if(s!=null)r=s<1||s>31
else r=!1
if(r)return"Day of month is a whole number, 1 to 31"
q=a.e
r=q!=null
if(r&&q.b!==b.e)return"the amount must be in "+b.e
if(r&&q.a.l(0,$.M())<=0)return"the amount must be more than 0"
return null},
e5:function e5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ml(a){var s,r,q,p=null,o=$.Fv().aj(a)
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
s=new A.t(A.Z(s,p,p),q)}return s},
di:function di(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Lo(a,b){var s,r,q=a.a
if(q<2000||q>2100)return"the Year of Assessment is a year"
q=a.b
if(q.a.l(0,$.M())<0)return"the amount assessed is zero or more"
if(b!=null&&q.b!==b.e)return"the amount must be in "+b.e
q=a.d
s=a.e
r=[a.c,q,s]
if(B.a.N(r,new A.zz())&&B.a.N(r,new A.zA()))return"a GIRO plan needs its GIRO, its first month and the number of instalments"
if(q!=null&&A.ml(q)==null)return"the first month is YYYY-MM"
if(s!=null)q=s<1||s>24
else q=!1
if(q)return"instalments are 1 to 24"
return null},
le:function le(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zz:function zz(){},
zA:function zA(){},
rW:function rW(a,b){this.a=a
this.b=b},
Jb(a){var s,r,q,p,o,n,m,l=A.d([],t.s)
for(s=A.a7(a.x,t.N,t.q).gU(),r=A.o(s),q=r.i("l(h.E)").a(new A.v4()),s=s.gv(s),r=new A.S(s,q,r.i("S<h.E>"));r.m();){q=s.gt()
p=a.gR().gU()
o=A.o(p)
n=o.i("p<h.E>")
m=A.E(new A.p(p,o.i("l(h.E)").a(new A.v5(a,q)),n),n.i("h.E"))
if(!(m.length!==0&&B.a.bq(m,new A.v6(a))))B.a.n(l,q.b)}return new A.mA(l.length===0,l)},
mA:function mA(a,b){this.a=a
this.b=b},
v4:function v4(){},
v5:function v5(a,b){this.a=a
this.b=b},
v6:function v6(a){this.a=a},
v3:function v3(a){this.a=a},
JV(a,b){var s,r,q
if(!b)return"no profile for "+A.i(a.h(0,"institution"))
s=t.yq.a(a.h(0,"threshold"))
if(s==null)return null
if(!J.a1(a.h(0,"level"),"aboveThreshold"))return"a threshold is only for aboveThreshold"
r=A.m(s.h(0,"currency"))
if(r==null||!B.e.C(r))return"currency "+A.i(r)+" is not supported"
q=s.h(0,"amount")
q.toString
if(A.ah(A.b(q)).l(0,$.M())<=0)return"a threshold is more than 0"
return null},
d7:function d7(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jI:function jI(a,b,c){this.a=a
this.b=b
this.r=c},
BO(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.m(a0.h(0,"amount")),d=A.m(a0.h(0,"occurredAtUtc")),c=A.m(a0.h(0,"receivedAtUtc")),b=A.m(a0.h(0,"balance")),a=a0.h(0,"eventKey")
a.toString
A.b(a)
s=a0.h(0,"channel")
s.toString
s=A.af(B.j3,A.b(s),t.lj)
r=a0.h(0,"sourceId")
r.toString
A.b(r)
r=A.m(a0.h(0,"institution"))
q=A.m(a0.h(0,"eventType"))
p=A.m(a0.h(0,"accountAlias"))
if(e==null)o=f
else{o=a0.h(0,"currency")
o.toString
A.b(o)
o=A.a6(A.ah(e),o)}n=d==null?f:A.bV(d).H()
m=c==null?f:A.bV(c).H()
l=A.m(a0.h(0,"payee"))
A.AE(a0.h(0,"confidence"))
k=a0.h(0,"verified")
k.toString
A.d0(k)
A.m(a0.h(0,"parserVersion"))
k=a0.h(0,"status")
k.toString
A.af(B.iB,A.b(k),t.gy)
k=A.m(a0.h(0,"suspicion"))
j=A.m(a0.h(0,"sender"))
i=A.m(a0.h(0,"accountLast4"))
h=A.m(a0.h(0,"occurredOn"))
h=h==null?f:A.av(h)
if(b!=null){g=a0.h(0,"balanceCurrency")
g.toString
A.b(g)
A.a6(A.ah(b),g)}g=A.m(a0.h(0,"dueOn"))
if(g!=null)A.av(g)
return new A.eY(a,s,r,q,p,o,n,m,l,k,j,i,h)},
f6:function f6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
co:function co(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
I7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.f
if(f!=null){s=A.ab(t.N)
for(r=a.r.a,q=new A.a2(r,r.r,r.e,A.o(r).i("a2<2>"));q.m();){p=q.d
if(p.b===f)s.n(0,a.aV(p.a))}return s.a===1?r.h(0,s.gaL(0)):g}o=b.d
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
for(r=a.r.a,q=new A.a2(r,r.r,r.e,A.o(r).i("a2<2>"));q.m();){p=q.d
if(B.c.bB(p.b,m)){k=p.c
j=a.hb(k)
j=j==null?g:j.a
if(j==null){j=A.C("[^A-Z0-9]",!0,!1)
j=A.a4(k.toUpperCase(),j,"")}k=!(j===o||A.hn(k)===A.hn(o))}else k=!0
if(k)continue
p=r.h(0,a.aV(p.a))
if(p!=null)l.j(0,p.a,p)}r=A.d([],t.k)
for(q=new A.a2(l,l.r,l.e,l.$ti.i("a2<2>")),p=b.e,k=b.r;q.m();){j=q.d
i=!1
if(j.CW==null)if(A.IK(p,j.d)){i=j.e
i=i===(k==null?g:k.b)}if(i)r.push(j)}q=A.C("^\\d{4}$",!0,!1)
if(q.b.test(n))return r.length===1&&l.a===1?B.a.gaL(r):g
q=a.k2.h(0,A.hn(o)+"|"+n)
h=q==null?g:q.c
return h==null?g:A.aU(new A.p(r,t.cP.a(new A.uw(a,h)),t.qK),s)},
JW(a,b,c){var s=a.aV(b)
return B.a.N(A.aN(a.fx,t.v),new A.wB(a,s,c))},
IK(a,b){var s
A:{if("card-purchase"===a||"card-refund"===a||"card-payment-received"===a){s=b===B.x
break A}s=b!==B.x&&b!==B.y
break A}return s},
uw:function uw(a,b){this.a=a
this.b=b},
wB:function wB(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b){this.a=a
this.b=b},
BW(a){var s,r,q,p,o=a.h(0,"algorithm")
o.toString
A.b(o)
s=a.h(0,"memoryKiB")
s.toString
A.P(s)
r=a.h(0,"iterations")
r.toString
A.P(r)
q=a.h(0,"parallelism")
q.toString
A.P(q)
p=a.h(0,"salt")
p.toString
return new A.nw(o,s,r,q,B.B.M(A.b(p)))},
nw:function nw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Cj(a){var s,r,q=a.h(0,"nonce")
q.toString
q=B.B.M(A.b(q))
s=a.h(0,"cipherText")
s.toString
s=B.B.M(A.b(s))
r=a.h(0,"mac")
r.toString
return new A.ta(q,s,B.B.M(A.b(r)))},
BX(a){var s,r,q,p,o,n,m=a.h(0,"passphraseKdf")
m.toString
s=t.f
r=t.N
q=t.X
m=A.BW(s.a(m).F(0,r,q))
p=a.h(0,"recoveryKdf")
p.toString
p=A.BW(s.a(p).F(0,r,q))
o=a.h(0,"byPassphrase")
o.toString
o=A.Cj(s.a(o).F(0,r,q))
n=a.h(0,"byRecovery")
n.toString
return new A.nx(m,p,o,A.Cj(s.a(n).F(0,r,q)))},
uR(a,b){return A.IQ(a,b)},
IQ(a,b){var s=0,r=A.I(t.g),q,p=2,o=[],n,m,l
var $async$uR=A.J(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.q($.F5().bn(new A.ek(a.b,new A.cQ(a.c),a.a),$.FE(),b),$async$uR)
case 7:n=d
q=new A.bl(new A.bp(n,!1),null)
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
if(A.au(l) instanceof A.iu)throw A.k(new A.h6())
else throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$uR,r)},
yt(a,b){var s=0,r=A.I(t.g),q,p,o,n,m
var $async$yt=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:p=a.a
o=p.a
if(o!=="argon2id")A.j(A.y(o,"algorithm","unsupported"))
$.b5()
n=A
m=a.c
s=3
return A.q(new A.hG(p.d,p.b,p.c,32).d6(p.e,new A.bl(new A.bp(B.E.M(b),!1),null)),$async$yt)
case 3:q=n.uR(m,d)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$yt,r)},
h6:function h6(){},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vj(a,b){var s,r,q,p=a.aC.a.h(0,b),o=p==null?null:p.b
if(o!=null)return o
p=a.gR().gU()
s=A.o(p)
r=s.i("p<h.E>")
q=A.E(new A.p(p,s.i("l(h.E)").a(new A.vk(b)),r),r.i("h.E"))
if(q.length===0||B.a.N(q,new A.vl()))return"SGD"
return B.a.ga_(q).e},
vk:function vk(a){this.a=a},
vl:function vl(){},
k7:function k7(){},
Gy(a){var s,r=t.N,q=t.S,p=t.p_,o=t.c,n=new A.fK(A.ab(r),new A.lS(A.w(r,t.B),A.w(r,t.Dm),A.ab(r),A.w(r,t.W)),A.d([],t.J),new A.ad(A.w(r,t.G),t.rE),new A.ad(A.w(r,t.R),t.AJ),A.w(r,r),new A.ad(A.w(r,t.b),t.zs),new A.ad(A.w(r,t.rv),t.DF),new A.ad(A.w(r,t.q),t.hl),A.w(t.g5,t.xr),A.ab(r),A.d([],t.zA),new A.ad(A.w(r,t.to),t.n7),A.w(r,r),A.d([],t.yT),A.w(q,t.EL),A.w(r,r),A.w(r,t.ca),A.w(r,t.zc),A.w(r,t.c5),new A.tt(A.d([],t.e3),A.w(r,t.xt),A.ab(r)),A.d([],t.F),A.d([],t.Ec),A.d([],t.ew),A.w(r,t.A9),A.d([],t.sv),A.w(r,t.ch),A.w(r,t.x),A.ab(r),A.d([],t.ey),A.w(r,t.pp),new A.ad(A.w(r,t.o),t.F4),new A.td(A.ab(p)),new A.iB(A.ab(r),t.ur),A.d([],t.xz),new A.ad(A.w(r,t.y6),t.BK),A.w(r,q),new A.ad(A.w(t.Dt,t.AD),t.dB),A.d([],t.aV),new A.ad(A.w(r,t.d6),t.l4),A.ab(r),A.w(r,o),A.ab(r),A.ab(r),A.w(r,t.nX),A.ab(r),new A.tx(A.w(r,t.Z),A.d([],t.lt),A.w(t.d3,t.cZ),A.w(o,t.y),A.w(p,t.fK),A.w(r,t.mg),A.w(r,t.jF)),new A.rT(A.w(r,t.l9),A.ab(r),A.ab(r),A.w(r,t.ud),A.d([],t.os)),new A.os(A.w(t.P,t.Cu)),A.ab(r),new A.mG(A.w(r,t.Cv),A.w(r,t.tD),A.w(r,t.eX),A.w(r,t.a),A.w(r,t.r),A.w(r,t.xM),A.w(r,t.aB),A.w(r,t.Ba),A.ab(r),A.w(r,t.DV),A.w(r,t.Bf),A.ab(r)))
r=a.a
q=A.o(r).i("L<2>")
r=A.E(new A.L(r,q),q.i("h.E"))
q=r.length
s=0
for(;s<r.length;r.length===q||(0,A.n)(r),++s)n.eE(r[s])
return n},
nN(a,b){return B.c.l(a,b)<0?a+"|"+b:b+"|"+a},
C0(a,b,c){var s=b===B.V||b===B.Z
return a.lq(b!==B.x,b!==B.o,!s,c==null,b,c)},
C_(a,b){var s,r,q,p
A:{s=B.x===a
if(s){r=B.x===b
q=b}else{q=null
r=!1}p=!0
if(r){r=p
break A}if(B.V!==a)r=B.Z===a
else r=!0
if(r){if(s)r=q
else{r=b
q=r
s=!0}if(B.V!==r)r=B.Z===(s?q:b)
else r=!0}else r=!1
if(r){r=p
break A}r=!1
break A}return r},
Ab(a){var s=a.d
return(s==null||s===B.L)&&a.ch==null&&a.ay==null&&a.cx==null},
Gx(a,b){var s,r,q,p
if(a.length===b.length){s=A.d([],t.sj)
for(r=0;r<a.length;++r){q=a[r]
if(!(r<b.length))return A.a(b,r)
p=b[r]
s.push(p.a===q.a&&p.b===q.b&&p.c===q.c)}s=B.a.bq(s,new A.nV())}else s=!1
return s},
mD:function mD(){},
D:function D(){},
ne:function ne(){},
br:function br(){},
t0:function t0(){},
fK:function fK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
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
_.lN=c3
_.lO=c4
_.lP=c5
_.dQ=c6
_.dR=c7
_.c5=c8
_.a7=c9
_.h7=d0
_.aC=d1},
o4:function o4(a){this.a=a},
nS:function nS(){},
o2:function o2(){},
o3:function o3(a){this.a=a},
or:function or(a){this.a=a},
oq:function oq(a){this.a=a},
o1:function o1(a){this.a=a},
oc:function oc(a,b,c){this.a=a
this.b=b
this.c=c},
ob:function ob(a){this.a=a},
nA:function nA(a){this.a=a},
nB:function nB(){},
nM:function nM(){},
o_:function o_(a){this.a=a},
nY:function nY(a){this.a=a},
nZ:function nZ(a){this.a=a},
nX:function nX(a){this.a=a},
o5:function o5(a){this.a=a},
o6:function o6(a){this.a=a},
o7:function o7(a){this.a=a},
o8:function o8(a){this.a=a},
o9:function o9(){},
oa:function oa(a){this.a=a},
nz:function nz(a,b){this.a=a
this.b=b},
nR:function nR(a,b){this.a=a
this.b=b},
nP:function nP(a){this.a=a},
nQ:function nQ(){},
op:function op(){},
od:function od(a){this.a=a},
oe:function oe(a){this.a=a},
of:function of(a){this.a=a},
oh:function oh(a){this.a=a},
oi:function oi(a){this.a=a},
oj:function oj(a){this.a=a},
ok:function ok(){},
ol:function ol(a){this.a=a},
om:function om(a){this.a=a},
on:function on(a){this.a=a},
oo:function oo(a){this.a=a},
og:function og(a){this.a=a},
nE:function nE(){},
o0:function o0(a){this.a=a},
nF:function nF(a,b){this.a=a
this.b=b},
nH:function nH(a){this.a=a},
nI:function nI(a){this.a=a},
nU:function nU(a){this.a=a},
nC:function nC(a){this.a=a},
nT:function nT(a){this.a=a},
nV:function nV(){},
nL:function nL(a,b){this.a=a
this.b=b},
nK:function nK(a){this.a=a},
nW:function nW(a){this.a=a},
nO:function nO(){},
nG:function nG(a){this.a=a},
nD:function nD(){},
nJ:function nJ(){},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l2:function l2(){},
lS:function lS(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
AZ(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=a1*12+a0-1,g=t.S,f=A.w(g,t.Fu)
for(s=A.zi(a,b),r=s.length,q=t.bD,p=0;p<s.length;s.length===r||(0,A.n)(s),++p){o=s[p]
n=o.b
m=n==null
l=m?null:n.x
if(l==null)l=o.a.x
n=m?null:n.x
if(n==null)n=o.a.x
n=l.a*12+n.b-1
l=f.h(0,n)
if(l==null){m=A.d([],q)
f.j(0,n,m)
n=m}else n=l
B.a.n(n,o)}k=A.w(g,t.C)
for(g=a.cD(),s=J.T(g.a),g=new A.S(s,g.b,g.$ti.i("S<1>")),r=t.A;g.m();){q=s.gt()
if(q.b===b){n=q.x
n=n.a*12+n.b-1
m=k.h(0,n)
if(m==null){m=A.d([],r)
k.j(0,n,m)
n=m}else n=m
B.a.n(n,q)}}g=A.d([],t.aH)
for(j=h-c+1;j<=h;++j){s=B.d.u(j,12)
r=B.d.P(j,12)+1
q=k.h(0,j)
if(q==null)q=B.a9
i=A.f(s,r+1,1).aM(-864e8)
q=A.DN(q,b,d,new A.K(s,r,1),new A.K(A.b2(i),A.bk(i),A.aH(i)))
n=f.h(0,j)
if(n==null)n=B.jh
m=k.h(0,j)
g.push(new A.eb(s,r,q,A.E1(a,n,m==null?B.a9:m,b,d,e,r,s)))}return g},
E0(a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=new A.K(b1,a9,1),a1=new A.K(b1,a9+1,1).bx(-1),a2=A.d([],t.Dy),a3=a7.gR().gU(),a4=A.o(a3),a5=a4.i("p<h.E>"),a6=A.E(new A.p(a3,a4.i("l(h.E)").a(new A.y9(a8,a1)),a5),a5.i("h.E"))
B.a.E(a6,new A.ya())
for(a3=a6.length,a4=a1.a,a5=a1.b,s=a1.c,r=a7.RG,q=t.lA,p=a7.fx,o=t.v,n=t.hy,m=0;m<a6.length;a6.length===a3||(0,A.n)(a6),++m){l=a6[m]
k=A.d([],n)
j=A.dt(p,!1,o)
j.$flags=3
i=j
h=i.length
g=l.a
f=0
for(;f<h;++f){e=i[f]
if(e.b===g&&e.r!=null)k.push(new A.t(e.c,e.d))}j=A.dt(r,!1,q)
j.$flags=3
i=j
h=i.length
f=0
for(;f<h;++f){d=i[f]
if(d.a===g)k.push(new A.t(d.b,d.c))}d=l.w
d=A.f(d.a,d.b,d.c).l(0,A.f(b1,a9,1))>0?d:a0
for(;i=d.a,h=d.b,g=d.c,A.f(i,h,g).l(0,A.f(a4,a5,s))<=0;d=A.f(i,h,g).aM(864e8),d=new A.K(A.b2(d),A.bk(d),A.aH(d)))if(!B.a.N(k,new A.yb(d))){B.a.n(a2,new A.js())
break}}c=A.f(b0.a,b0.b,b0.c).l(0,A.f(a4,a5,s))>0
b=A.a7(a7.ry,t.N,t.S).h(0,""+b1+"-"+B.c.af(B.d.k(a9),2,"0"))
if(!c)a=B.b0
else if(a2.length===0)a=B.dL
else{a3=b!=null?B.dM:B.b0
a=a3}return new A.oC(a,c,a2,b)},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a,b){this.a=a
this.b=b},
js:function js(){},
oC:function oC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y9:function y9(a,b){this.a=a
this.b=b},
ya:function ya(){},
yb:function yb(a){this.a=a},
Ej(a,b){var s,r,q
A:{s=B.k===a
if(s){r=B.p===b
q=b}else{q=null
r=!1}if(!r)if(B.w===a)r=B.q===(s?q:b)
else r=!1
else r=!0
break A}return!r},
bL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){if(b.a.a.gab(0)<0)A.j(A.y(b,"amount","is stored positive (LED-12)"))
return new A.X(j,d,a,a1,h,b,n,c,i,r,p,e,l,f,g,k,o,a0,s,q,m,a2)},
bf:function bf(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c,d){var _=this
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
jh(a){if(a.CW!=null)return B.dG
if(B.dP.B(0,a.y.a))return B.aj
return null},
io:function io(a,b){this.a=a
this.b=b},
G3(a){var s,r,q,p,o,n,m,l,k=t.yq.a(a.h(0,"flags")),j=k==null?null:k.F(0,t.N,t.X)
if(j==null)j=B.k7
k=t.Z
s=A.w(t.N,k)
for(r=j.gbo(),r=r.gv(r),q=t.ns,p=t.rK;r.m();){o={}
n=r.gt()
o.a=null
m=n.a
o.a=n.b
l=A.aU(new A.p(B.dm,q.a(new A.mV(o)),p),k)
if(l==null)throw A.k(A.A("category "+m+" has an unknown flag",o.a,null))
s.j(0,m,l)}return new A.jH(s)},
zi(a,b){var s,r,q,p,o,n,m=A.w(t.N,t.W)
for(s=a.cD(),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gt()
m.j(0,q.a,q)}p=A.d([],t.bD)
for(s=new A.a2(m,m.r,m.e,m.$ti.i("a2<2>"));s.m();){r=s.d
if(r.b===b){q=r.ch
q=q==null?null:B.c.ao(q,"cancel:")
q=q===!0}else q=!0
if(q)continue
q=r.d
if(q===B.k&&r.e===B.q)B.a.n(p,new A.cX(r,null,!1))
else{q=q===B.G
if(q&&r.e===B.p){o=r.ay
n=m.h(0,o)
if(n!=null)B.a.n(p,new A.cX(r,n,!1))
else if(q&&r.e===B.p&&o==null&&r.Q!=null)B.a.n(p,new A.cX(r,null,!0))}}}return p},
IW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h="currency",g="is not a supported currency",f=A.w(t.T,t.B)
for(s=a.length,r=c+" allows ",q=0;q<a.length;a.length===s||(0,A.n)(a),++q){p=a[q]
o=p.a
n=o.Q
if(n==null){n=p.b
n=n==null?i:n.Q}if(n==null)m=i
else{l=b.h(0,n)
l=l==null?i:l.d
m=l==null?n:l}n=f.h(0,m)
if(n==null){n=$.M()
l=new A.v(n,c)
k=B.e.h(0,c)
if(k==null)A.j(A.y(c,h,g))
if((n.b<=0?0:Math.max(n.gA().b,0))>k)A.j(A.A(r+A.i(k)+" decimal places",n.k(0),i))
n=l}l=p.c||p.b!=null
o=o.f
if(l){l=o.b
j=$.M()
k=B.e.h(0,l)
if(k==null)A.j(A.y(l,h,g))
if((j.b<=0?0:Math.max(j.gA().b,0))>k)A.j(A.A(l+" allows "+A.i(k)+" decimal places",j.k(0),i))
o=o.a
o=j.D(0,new A.Q(o.a.W(0),o.b))
j=new A.v(o,l)
k=B.e.h(0,l)
if(k==null)A.j(A.y(l,h,g))
if((o.b<=0?0:Math.max(o.gA().b,0))>k)A.j(A.A(l+" allows "+A.i(k)+" decimal places",o.k(0),i))
o=j}l=o.b
j=n.b
if(l!==j)A.j(A.ae(j,l))
o=n.a.D(0,o.a)
k=B.e.h(0,j)
if(k==null)A.j(A.y(j,h,g))
if((o.b<=0?0:Math.max(o.gA().b,0))>k)A.j(A.A(j+" allows "+A.i(k)+" decimal places",o.k(0),i))
f.j(0,m,new A.v(o,j))}s=A.d([],t.Dz)
for(r=new A.aa(f,f.$ti.i("aa<1,2>")).gv(0);r.m();){o=r.d
s.push(new A.da(o.a,o.b))}B.a.E(s,new A.uT())
return s},
IS(a,b){var s,r,q,p,o,n,m,l,k,j=null,i="currency",h="is not a supported currency",g=t.N,f=t.B,e=A.w(g,f)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r){q=a[r]
p=q.a.f
o=p.b
if(o===b)continue
n=e.h(0,o)
if(n==null){n=$.M()
m=new A.v(n,o)
l=B.e.h(0,o)
if(l==null)A.j(A.y(o,i,h))
if((n.b<=0?0:Math.max(n.gA().b,0))>l)A.j(A.A(o+" allows "+A.i(l)+" decimal places",n.k(0),j))
n=m}if(q.c||q.b!=null){m=$.M()
l=B.e.h(0,o)
if(l==null)A.j(A.y(o,i,h))
if((m.b<=0?0:Math.max(m.gA().b,0))>l)A.j(A.A(o+" allows "+A.i(l)+" decimal places",m.k(0),j))
p=p.a
p=m.D(0,new A.Q(p.a.W(0),p.b))
m=new A.v(p,o)
l=B.e.h(0,o)
if(l==null)A.j(A.y(o,i,h))
if((p.b<=0?0:Math.max(p.gA().b,0))>l)A.j(A.A(o+" allows "+A.i(l)+" decimal places",p.k(0),j))
p=m}m=p.b
k=n.b
if(m!==k)A.j(A.ae(k,m))
p=n.a.D(0,p.a)
l=B.e.h(0,k)
if(l==null)A.j(A.y(k,i,h))
if((p.b<=0?0:Math.max(p.gA().b,0))>l)A.j(A.A(k+" allows "+A.i(l)+" decimal places",p.k(0),j))
e.j(0,o,new A.v(p,k))}g=A.w(g,f)
f=e.$ti.i("az<1>")
f=A.E(new A.az(e,f),f.i("h.E"))
B.a.bh(f)
s=f.length
r=0
for(;r<f.length;f.length===s||(0,A.n)(f),++r){o=f[r]
p=e.h(0,o)
p.toString
g.j(0,o,p)}return g},
E1(c1,c2,c3,c4,c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5="currency",b6="is not a supported currency",b7=A.aH(A.f(c8,c7+1,0)),b8=t.N,b9=A.a7(c1.d,b8,t.G),c0=t.sw.a(c1.dR.a)
if(c0.a===0)s=c6
else{b8=A.ox(c6.a,b8,t.Z)
b8.a1(0,c0)
s=new A.jH(b8)}b8=A.N(c2)
c0=b8.i("p<1>")
r=A.E(new A.p(c2,b8.i("l(1)").a(new A.yc(new A.K(c8,c7,1),new A.K(c8,c7,b7))),c0),c0.i("h.E"))
b8=A.N(r)
c0=b8.i("p<1>")
q=A.E(new A.p(r,b8.i("l(1)").a(new A.yd(c5)),c0),c0.i("h.E"))
p=A.a6($.M(),c5)
b8=t.B
o=A.w(t.Z,b8)
n=A.i6(b7,p,!1,b8)
for(b8=q.length,c0=t.Ez,m=p,l=m,k=l,j=k,i=0,h=0;h<q.length;q.length===b8||(0,A.n)(q),++h){g=q[h]
f=!g.c
e=!f||g.b!=null
d=g.a
c=d.f
if(e){e=c.b
b=k.b
if(e!==b)A.j(A.ae(b,e))
e=k.a.D(0,c.a)
k=new A.v(e,b)
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,b5,b6))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",e.k(0),b4))}else{e=c.b
b=j.b
if(e!==b)A.j(A.ae(b,e))
a0=c.a
a1=j.a.D(0,a0)
j=new A.v(a1,b)
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,b5,b6))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",a1.k(0),b4))
if(A.jh(d)===B.aj){b=l.b
if(e!==b)A.j(A.ae(b,e))
e=l.a.D(0,a0)
l=new A.v(e,b)
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,b5,b6))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",e.k(0),b4));++i}}a2=d.Q
if(a2==null){e=g.b
a2=e==null?b4:e.Q}if(a2==null){if(!f||g.b!=null){e=c.b
b=$.M()
a=B.e.h(0,e)
if(a==null)A.j(A.y(e,b5,b6))
if((b.b<=0?0:Math.max(b.gA().b,0))>a)A.j(A.A(e+" allows "+A.i(a)+" decimal places",b.k(0),b4))
a0=c.a
a0=b.D(0,new A.Q(a0.a.W(0),a0.b))
b=new A.v(a0,e)
a=B.e.h(0,e)
if(a==null)A.j(A.y(e,b5,b6))
if((a0.b<=0?0:Math.max(a0.gA().b,0))>a)A.j(A.A(e+" allows "+A.i(a)+" decimal places",a0.k(0),b4))
e=b}else e=c
b=e.b
a0=m.b
if(b!==a0)A.j(A.ae(a0,b))
e=m.a.D(0,e.a)
m=new A.v(e,a0)
a=B.e.h(0,a0)
if(a==null)A.j(A.y(a0,b5,b6))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.j(A.A(a0+" allows "+A.i(a)+" decimal places",e.k(0),b4))}else{a3=s.jq(a2,c0.a(b9))
if(a3===B.b3)a3=B.aA
e=o.h(0,a3)
if(e==null)e=p
if(!f||g.b!=null){b=c.b
a0=$.M()
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,b5,b6))
if((a0.b<=0?0:Math.max(a0.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",a0.k(0),b4))
a1=c.a
a1=a0.D(0,new A.Q(a1.a.W(0),a1.b))
a0=new A.v(a1,b)
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,b5,b6))
if((a1.b<=0?0:Math.max(a1.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",a1.k(0),b4))
b=a0}else b=c
a0=b.b
a1=e.b
if(a0!==a1)A.j(A.ae(a1,a0))
e=e.a.D(0,b.a)
a=B.e.h(0,a1)
if(a==null)A.j(A.y(a1,b5,b6))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.j(A.A(a1+" allows "+A.i(a)+" decimal places",e.k(0),b4))
o.j(0,a3,new A.v(e,a1))}e=g.b
b=e==null
e=b?b4:e.x
e=(e==null?d.x:e).c-1
if(!(e>=0&&e<b7))return A.a(n,e)
d=n[e]
if(!f||!b){f=c.b
b=$.M()
a=B.e.h(0,f)
if(a==null)A.j(A.y(f,b5,b6))
if((b.b<=0?0:Math.max(b.gA().b,0))>a)A.j(A.A(f+" allows "+A.i(a)+" decimal places",b.k(0),b4))
c=c.a
c=b.D(0,new A.Q(c.a.W(0),c.b))
b=new A.v(c,f)
a=B.e.h(0,f)
if(a==null)A.j(A.y(f,b5,b6))
if((c.b<=0?0:Math.max(c.gA().b,0))>a)A.j(A.A(f+" allows "+A.i(a)+" decimal places",c.k(0),b4))
f=b}else f=c
c=f.b
b=d.b
if(c!==b)A.j(A.ae(b,c))
f=d.a.D(0,f.a)
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,b5,b6))
if((f.b<=0?0:Math.max(f.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",f.k(0),b4))
B.a.j(n,e,new A.v(f,b))}a4=A.d([],t.AA)
for(a5=p,h=0;h<b7;++h){a6=n[h]
b8=a6.b
c0=a5.b
if(b8!==c0)A.j(A.ae(c0,b8))
b8=a5.a.D(0,a6.a)
a5=new A.v(b8,c0)
a=B.e.h(0,c0)
if(a==null)A.j(A.y(c0,b5,b6))
if((b8.b<=0?0:Math.max(b8.gA().b,0))>a)A.j(A.A(c0+" allows "+A.i(a)+" decimal places",b8.k(0),b4))
B.a.n(a4,a5)}for(b8=J.T(c3),a7=0;b8.m();){c0=b8.gt()
if(c0.b===c4){f=c0.x
e=f.a
d=f.b
f=f.c
f=A.f(e,d,f).l(0,A.f(c8,c7,1))<0||A.f(e,d,f).l(0,A.f(c8,c7,b7))>0}else f=!0
if(f)continue
a8=c0.d
a9=c0.e
A:{b0=a8==null
if(b0){f=B.q===a9
b1=a9}else{b1=b4
f=!1}b2=b4
if(!f){b3=B.k===a8
if(b3){if(b0)f=b1
else{f=a9
b1=f
b0=!0}b2=B.p===f
f=b2}else f=!1}else{b3=!1
f=!0}if(f){c0=!0
break A}if(B.G===a8)if(b3)f=b2
else{b2=B.p===(b0?b1:a9)
f=b2}else f=!1
if(f){c0=c0.ay==null&&c0.Q==null
break A}c0=!1
break A}if(c0)++a7}return new A.oD(j.a8(0,k),k,A.IW(q,b9,c5),o,m,l,i,a7,A.IS(r,c5))},
bq:function bq(a,b){this.a=a
this.b=b},
jH:function jH(a){this.a=a},
mV:function mV(a){this.a=a},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
uT:function uT(){},
oD:function oD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
yc:function yc(a,b){this.a=a
this.b=b},
yd:function yd(a){this.a=a},
KS(a){var s,r,q,p,o=A.o(a).i("az<1>"),n=A.E(new A.az(a,o),o.i("h.E"))
B.a.E(n,new A.z7(a))
o=A.w(t.N,t.B)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.n)(n),++r){q=n[r]
p=a.h(0,q)
p.toString
o.j(0,q,p)}return o},
DN(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="currency",a0="is not a supported currency",a1=$.M(),a2=A.a6(a1,a7),a3=A.w(t.N,t.B),a4=A.a6(a1,a7)
for(a1=J.T(a5),s=a8.a,r=a8.b,q=a8.c,p=a9.a,o=a9.b,n=a9.c,m=a7+" allows ",l=0,k=0,j=0;a1.m();){i=a1.gt()
if(i.b===a6){h=i.x
g=h.a
f=h.b
h=h.c
h=A.f(g,f,h).l(0,A.f(s,r,q))<0||A.f(g,f,h).l(0,A.f(p,o,n))>0}else h=!0
if(h)continue
if(i.e!==B.p)continue
h=i.f
g=h.b
if(g!==a7){++k
continue}switch(i.d){case null:case void 0:++l
break
case B.w:f=a2.b
if(g!==f)A.j(A.ae(f,g))
h=h.a
e=a2.a.D(0,h)
a2=new A.v(e,f)
d=B.e.h(0,f)
if(d==null)A.j(A.y(f,a,a0))
if((e.b<=0?0:Math.max(e.gA().b,0))>d)A.j(A.A(f+" allows "+A.i(d)+" decimal places",e.k(0),b))
if(A.jh(i)===B.aj){f=a4.b
if(g!==f)A.j(A.ae(f,g))
e=a4.a.D(0,h)
a4=new A.v(e,f)
d=B.e.h(0,f)
if(d==null)A.j(A.y(f,a,a0))
if((e.b<=0?0:Math.max(e.gA().b,0))>d)A.j(A.A(f+" allows "+A.i(d)+" decimal places",e.k(0),b));++j}c=i.Q
if(c==null)++l
else{i=a3.h(0,c)
if(i==null){i=$.M()
f=new A.v(i,a7)
d=B.e.h(0,a7)
if(d==null)A.j(A.y(a7,a,a0))
if((i.b<=0?0:Math.max(i.gA().b,0))>d)A.j(A.A(m+A.i(d)+" decimal places",i.k(0),b))
i=f}f=i.b
if(g!==f)A.j(A.ae(f,g))
i=i.a.D(0,h)
d=B.e.h(0,f)
if(d==null)A.j(A.y(f,a,a0))
if((i.b<=0?0:Math.max(i.gA().b,0))>d)A.j(A.A(f+" allows "+A.i(d)+" decimal places",i.k(0),b))
a3.j(0,c,new A.v(i,f))}break
default:break}}A.KS(a3)
return new A.nj(a2,j)},
nj:function nj(a,b){this.a=a
this.c=b},
z7:function z7(a){this.a=a},
ad:function ad(a,b){this.a=a
this.$ti=b},
iB:function iB(a,b){this.a=a
this.$ti=b},
E6(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
if(a8.d!==B.o)return a6
for(s=A.aN(a7.fx,t.v),r=s.length,q=a8.a,p=a6,o=0;o<r;++o){n=s[o]
if(n.b===q)if(p!=null){m=n.d
l=p.d
l=A.f(m.a,m.b,m.c).l(0,A.f(l.a,l.b,l.c))>0
m=l}else m=!0
else m=!1
if(m)p=n}if(p==null||p.Q.length===0)return a6
for(s=a7.c9(q),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=p.c,m=q.a,l=q.b,q=q.c,k=p.d,j=k.a,i=k.b,h=k.c,g=a6,f=g;s.m();){e=r.gt()
d=e.w
c=d.a
b=d.b
d=d.c
if(A.f(c,b,d).l(0,A.f(m,l,q))<0||A.f(c,b,d).l(0,A.f(j,i,h))>0)continue
a=$.Fj()
a0=e.z
a1=a.aj(a0==null?"":a0)
if(a1!=null)if(f!=null){a=f.w
a=A.f(c,b,d).l(0,A.f(a.a,a.b,a.c))>0
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
s=A.d([],t.Ev)
for(r=p.Q,q=r.length,m=a3-a2,o=0;l=r.length,o<l;r.length===q||(0,A.n)(r),++o){a4=r[o]
if(a4.e===m)s.push(a4)}if(s.length===1)a5=B.a.gaL(s)
else a5=l===1?B.a.gaL(r):a6
return a5==null?a6:new A.oK(a5,k,a3,f.f)},
AJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.w(d,t.qD)
for(s=A.aN(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
n=c.h(0,o)
if(n!=null){m=p.d
l=n.a
l=A.f(m.a,m.b,m.c).l(0,A.f(l.a,l.b,l.c))>0
m=l}else m=!0
if(m)c.j(0,o,new A.iS(p.d,p.Q))}k=A.d([],t.sA)
d=A.ab(d)
for(s=a.gR().gU(),s=s.gv(s);s.m();){j=A.E6(a,s.gt())
if(j!=null)d.n(0,j.a.bS(""))}for(s=new A.aa(c,c.$ti.i("aa<1,2>")).gv(0),r=t.b;s.m();){o=s.d
i=o.a
h=o.b
g=a.gR().h(0,i)
if(g!=null){o=g.d
o=o!==B.x&&o!==B.o}else o=!0
if(o)continue
for(o=J.T(h.b),m=h.a,l=g.a;o.m();){f=o.gt()
if(d.B(0,f.bS("")))continue
e=A.A6(a.c3(l),r)
e=e==null?null:e.a
B.a.n(k,new A.cl(g,f,m,e==null?l:e))}}B.a.E(k,new A.wu())
return k},
DT(a,b){var s=a.gR().gU(),r=A.o(s)
return A.aU(new A.p(s,r.i("l(h.E)").a(new A.xE(b)),r.i("p<h.E>")),t.b)},
DD(a,b){var s=A.AJ(a),r=A.N(s)
return A.aU(new A.p(s,r.i("l(1)").a(new A.wt(b)),r.i("p<1>")),t.eY)},
JH(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.d([],t.J)
for(s=A.AJ(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=p.b
n=o.c
m=n.a.l(0,$.M())
if(m!==0&&A.DT(a,o.bS(p.d))==null){m=o.bS(p.d)
l=p.a
k=o.a===B.bX?"personal loan":"instalment plan"
j=o.b.k(0)
i=p.c.k(0)
n=n.k(0)
o=o.e
o=o==null?"":", "+A.i(o)+" instalments left"
h.push(new A.W("card-loan:"+m,B.bN,l.a,l.c+" "+k+" of "+j+" is on the "+l.b+" statement to "+i+": "+n+" outstanding"+o+". Add it as a loan so each statement keeps its figures."))}}return h},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oK:function oK(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
wu:function wu(){},
xE:function xE(a){this.a=a},
wt:function wt(a){this.a=a},
Kq(a){var s,r,q,p,o,n=A.ab(t.N)
for(s=B.c.dq((a.c+" "+a.b).toLowerCase(),A.C("[^a-z0-9]+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
if(p.length>=3){o=A.C("^[0-9]+$",!0,!1)
o=!o.b.test(p)&&!B.lC.B(0,p)}else o=!1
if(o)n.n(0,p)}return n},
Ks(e0,e1,e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=null,d6=864e8,d7="statement",d8=e1.as,d9=d8==null
if((d9?d5:d8.x)==null)s=d5
else{r=d8.x
r.toString
s=A.DD(e0,r)}r=s==null
q=r?A.E6(e0,e1):d5
p=r?d5:s.b
if(p==null)p=q==null?d5:q.a
o=r?d5:s.c
if(o==null)o=q==null?d5:q.b
r=p!=null
n=!1
if(r)if(p.e!=null){if((d9?d5:d8.f)!=null){o.toString
m=d8.f
m.toString
m=A.f(o.a,o.b,o.c).l(0,A.f(m.a,m.b,m.c))>0}else m=!0
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
f=A.d([],t.xQ)
if(i!=null&&k!=null&&j!=null){e=i.a
d=i.b
for(d9=i.c,m=e2.a,c=e2.b,b=e2.c,a=d,a0=e;f.length<j;){a1=a+1
if(k<=A.aH(A.f(a0,a1,0)))if(A.f(a0,a,k).l(0,A.f(e,d,d9))>0){B.a.n(f,new A.K(a0,a,k))
if(A.f(a0,a,k).l(0,A.f(m,c,b))>0)break}a2=a===12?new A.t(a0+1,1):new A.t(a0,a1)
a0=a2.a
a=a2.b}}d9=A.d([],t.A)
m=g==null
if(!m)for(c=e0.cD(),b=J.T(c.a),c=new A.S(b,c.b,c.$ti.i("S<1>"));c.m();){a1=b.gt()
if(a1.c===g&&a1.e===B.q)d9.push(a1)}B.a.E(d9,new A.xF())
a3=A.Kq(e1)
a4=A.ab(t.N)
c=A.d([],t.F)
for(b=A.aN(e0.fx,t.v),a1=b.length,a5=0;a5<a1;++a5){a6=b[a5]
if(a6.b===g)c.push(a6)}a7=A.d([],t.iF)
for(b=A.bK(f,0,t.c),a1=J.T(b.a),a8=b.b,b=new A.at(a1,a8,A.o(b).i("at<1>")),a9=e2.a,b0=e2.b,b1=e2.c,b2="loan:"+e1.a+":",b3=e0.a7.a,b4=j==null,b5=l==null;b.m();){b6={}
b7=b.c
b7=b7>=0?new A.t(a8+b7,a1.gt()):A.j(A.aq())
b6.a=null
b6.a=b7.b
b8=b5?0:l
b9=b8-(b4?0:j)+b7.a+1
c0=d5
if(h!=null)for(b7=[!0,!1],b8=h.a,c1=h.b,a5=0;a5<2;++a5){c2=b7[a5]
for(c3=d9.length,c4=0;c4<d9.length;d9.length===c3||(0,A.n)(d9),++c4){d=d9[c4]
if(a4.B(0,d.a)||d.f.b!==c1)continue
c5=b6.a
c6=d.x
c6=A.f(c6.a,c6.b,c6.c)
c5=A.f(c5.a,c5.b,c5.c)
if(Math.abs(B.d.u(c6.b-c5.b+1000*(c6.a-c5.a),d6))>5)continue
c7=!1
if(c2){c5=d.f
if(c1===c5.b)c5=b8.l(0,c5.a)===0
else c5=c7
c7=c5}else if(d.f.a.l(0,b8)<0){if(d.d!==B.aY){c5=d.z
if(c5==null)c5=""
c5=B.a.N(B.c.dq(c5.toLowerCase(),A.C("[^a-z0-9]+",!0,!1)),a3.gl4(a3))}else c5=!0
c7=c5}if(c7){c0=d
break}}if(c0!=null)break}if(c0!=null){a4.n(0,c0.a)
b7=c0.f
b8=h.a
c1=b7.b
c3=h.b
if(c1!==c3)A.j(A.ae(c3,c1))
b7=b7.a
b7=b8.D(0,new A.Q(b7.a.W(0),b7.b))
c8=new A.v(b7,c3)
c9=B.e.h(0,c3)
if(c9==null)A.j(A.y(c3,"currency","is not a supported currency"))
if((b7.b<=0?0:Math.max(b7.gA().b,0))>c9)A.j(A.A(c3+" allows "+A.i(c9)+" decimal places",b7.k(0),d5))
b8=b6.a
c1=$.M()
c3=b7.l(0,c1)
c3=c3===0?B.bi:B.cC
b7=b7.l(0,c1)
B.a.n(a7,new A.cP(b9,b8,h,c3,b7===0?d5:c8))
continue}b7=b6.a.k(0)
b8=b3.h(0,B.bq)
b7=b8==null?d5:b8.h(0,b2+b7)
b8=b6.a
b8=A.f(b8.a,b8.b,b8.c)
c1=A.f(a9,b0,b1)
d0=B.d.u(b8.b-c1.b+1000*(b8.a-c1.a),d6)
if(b7!=null)d1=B.bj
else if(d0>3)d1=B.cy
else{if(d0>0)b7=B.cz
else if(d0===0)b7=B.cA
else b7=B.a.N(c,new A.xG(b6))?B.cD:B.cB
d1=b7}B.a.n(a7,new A.cP(b9,b6.a,h,d1,d5))}d2=A.AI(e0,e1,e2,A.DR(e0,e1.r,e2))
if(r)if(d2!=null){d9=d2.c
d9=A.f(o.a,o.b,o.c).l(0,A.f(d9.a,d9.b,d9.c))>=0
d3=d9}else d3=!0
else d3=!1
if(d3)d4=p.c
else if(d2==null)d4=d5
else{d9=d2.b
r=d9.a
c=r.a
if(c.a)c=c.W(0)
d9=A.a6(new A.Q(c,r.b),d9.b)
d4=d9}d9=t.jM.a(new A.xH())
d9=b5||b4?d5:l-j+new A.p(a7,d9,t.dL).gq(0)
if(d3)r=o
else r=d2==null?d5:d2.c
if(d3)c=d7
else if(d2==null)c=""
else c=d2.d===B.c2?"you said":d7
b=A.d([],t.s)
if(h==null)b.push("instalment amount")
if(m)b.push("paying account")
if(d4==null)b.push("outstanding balance")
return new A.oy(d9,l,a7,d4,r,c,b)},
cd:function cd(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e},
oy:function oy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xF:function xF(){},
xG:function xG(a){this.a=a},
xH:function xH(){},
Dj(a,b){return new A.d_(A.IN(a,b),t.dU)},
IN(a,b){return function(){var s=a,r=b
var q=0,p=1,o=[],n,m,l,k,j,i
return function $async$Dj(c,d,e){if(d===1){o.push(e)
q=p}for(;;)switch(q){case 0:l=s.a
k=s.b
j=r.a
i=r.b
case 2:if(l>=j)n=l===j&&k<=i
else n=!0
if(!n){q=3
break}q=4
return c.b=new A.t(l,k),1
case 4:m=k===12?new A.t(l+1,1):new A.t(l,k+1)
l=m.a
k=m.b
q=2
break
case 3:return 0
case 1:return c.c=o.at(-1),3}}}},
D7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.Dj(b,c),r=s.$ti,s=new A.dV(s.a(),r.i("dV<1>")),q=b.a,p=b.b,r=r.c,o=c.a,n=c.b,m=b.c,l=c.c,k=0;s.m();){j=s.b
if(j==null)j=r.a(j)
i=j.a
h=j.b
if(a<=A.aH(A.f(i,h+1,0))){if(A.f(i,h,a).l(0,A.f(q,p,m))>0&&A.f(i,h,a).l(0,A.f(o,n,l))<=0)++k}else{if(!(new A.t(i,h).$s===new A.t(q,p).$s&&i===q&&h===p))j=!(new A.t(i,h).$s===new A.t(o,n).$s&&i===o&&h===n)
else j=!1
if(j)++k}}return k},
IO(a,b){var s,r,q,p,o,n,m=b.a,l=b.b
for(s=b.c,r=l,q=m;;){p=r+1
if(a>A.aH(A.f(q,p,0)))return new A.jJ(q,r)
o=new A.K(q,r,a)
if(A.f(q,r,a).l(0,A.f(m,l,s))>=0)return new A.hO(o)
n=r===12?new A.t(q+1,1):new A.t(q,p)
q=n.a
r=n.b}},
oG:function oG(){},
hO:function hO(a){this.a=a},
jJ:function jJ(a,b){this.a=a
this.b=b},
kH:function kH(){},
kG:function kG(a){this.a=a},
k1:function k1(){},
Af(a){var s,r,q,p,o,n,m,l=null,k="instalment",j=t.c_.a(a.h(0,"principal")),i=A.m(a.h(0,"pendingAsOf"))
if(a.h(0,"type")==null)s=l
else{s=a.h(0,"type")
s.toString
s=A.af(B.bw,A.b(s),t.gd)}if(j==null)r=l
else{r=j.h(0,"amount")
r.toString
r=A.ah(A.b(r))
q=j.h(0,"currency")
q.toString
q=A.a6(r,A.b(q))
r=q}q=A.aE(a.h(0,"instalmentCount"))
p=A.aE(a.h(0,"paymentDay"))
o=A.aE(a.h(0,"pendingInstalments"))
n=i==null?l:A.av(i)
if(a.h(0,k)==null)m=l
else{m=a.h(0,k)
m.toString
m=A.aJ(t.f.a(m).F(0,t.N,t.X))}return new A.fM(s,r,q,p,o,n,m,A.m(a.h(0,"payingAccountId")),A.m(a.h(0,"cardLoan")))},
DU(a,b){var s,r,q,p,o,n=a.b,m=n!=null
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
du:function du(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
Kt(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.xI()
if(B.a.N(A.d([d,a0,a2],t.s),A.Dt())||A.Dx(a3)||A.Dx(c))return B.li
p=new A.xK(f)
for(o=[new A.t(d,"Instalments"),new A.t(a0,"Payment day"),new A.t(a2,"Pending instalments")],n=0;n<3;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null&&p.$1(l)==null)return new A.t(g,k+" is a whole number")}s=new A.xJ(f,b)
r=null
q=null
for(o=[new A.t(a3,"Loan amount"),new A.t(c,"Instalment")],n=0;n<2;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null){m=f.$1(l)
m.toString
m=A.Ea(m)==null}else m=!1
if(m)return new A.t(g,k+" is an amount: digits, commas and one point")}try{r=f.$1(a3)==null?g:s.$1(a3)}catch(j){if(A.au(j) instanceof A.b7)return new A.t(g,"Loan amount has more decimal places than "+b+" allows")
else throw j}try{q=f.$1(c)==null?g:s.$1(c)}catch(j){if(A.au(j) instanceof A.b7)return new A.t(g,"Instalment has more decimal places than "+b+" allows")
else throw j}i=new A.fM(a4,r,p.$1(d),p.$1(a0),p.$1(a2),a1,q,e,a)
h=A.DU(i,b)
return h==null?new A.t(i,g):new A.t(g,h)},
xI:function xI(){},
xK:function xK(a){this.a=a},
xJ:function xJ(a,b){this.a=a
this.b=b},
Cn(a){var s,r,q,p,o,n,m,l,k=a.h(0,"kind")
k.toString
k=A.af(B.j9,A.b(k),t.iL)
s=a.h(0,"started")
s.toString
s=A.av(A.b(s))
r=a.h(0,"outstanding")
r.toString
q=t.f
p=t.N
o=t.X
r=A.aJ(q.a(r).F(0,p,o))
if(a.h(0,"ends")==null)n=null
else{n=a.h(0,"ends")
n.toString
n=A.av(A.b(n))}m=A.aE(a.h(0,"remaining"))
if(a.h(0,"amount")==null)q=null
else{l=a.h(0,"amount")
l.toString
o=A.aJ(q.a(l).F(0,p,o))
q=o}return new A.h0(k,s,r,n,m,q,A.m(a.h(0,"reference")))},
h0:function h0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fc:function fc(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b){this.a=a
this.b=b},
aC(a,b){var s,r=a.H()
a.H()
s=r.aM(288e8)
return new A.K(A.b2(s),A.bk(s),A.aH(s))},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
AS(a,b){var s
if(b!=="INR"||a.length<=3)return A.hs(a,A.C("\\B(?=(\\d{3})+(?!\\d))",!0,!1),t.tj.a(t._.a(new A.xs())),null)
s=a.length-3
return A.hs(B.c.X(a,0,s),A.C("\\B(?=(\\d{2})+(?!\\d))",!0,!1),t.tj.a(t._.a(new A.xt())),null)+","+B.c.aa(a,s)},
xs:function xs(){},
xt:function xt(){},
ng:function ng(){},
ae(a,b){return new A.jP(a,b)},
a6(a,b){var s=A.ky(b)
if(a.ge4()>s)A.j(A.A(b+" allows "+s+" decimal places",a.k(0),null))
return new A.v(a,b)},
aJ(a){var s,r=a.h(0,"amount")
r.toString
r=A.ah(A.b(r))
s=a.h(0,"currency")
s.toString
return A.a6(r,A.b(s))},
ky(a){var s=B.e.h(0,a)
if(s==null)throw A.k(A.y(a,"currency","is not a supported currency"))
return s},
jP:function jP(a,b){this.a=a
this.b=b},
v:function v(a,b){this.a=a
this.b=b},
kf:function kf(a){this.a=a},
al:function al(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
KK(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=864e8,b7=" or ",b8=c2.b_(),b9=b8.$ti,c0=b9.i("p<h.E>"),c1=A.E(new A.p(b8,b9.i("l(h.E)").a(new A.yG()),c0),c0.i("h.E"))
B.a.E(c1,new A.yx())
b8=A.N(c1)
b9=b8.i("l(1)")
b8=b8.i("p<1>")
c0=b8.i("h.E")
s=A.E(new A.p(c1,b9.a(new A.yy(c2)),b8),c0)
r=A.E(new A.p(c1,b9.a(new A.yz(c2)),b8),c0)
b8=t.C
q=A.w(t.B,b8)
for(b9=r.length,p=0;p<r.length;r.length===b9||(0,A.n)(r),++p){o=r[p]
J.bT(q.aK(o.f,new A.yA()),o)}b9=t.N
n=A.w(b9,b8)
m=A.w(b9,b8)
for(c0=s.length,l=t.tx,k=t.BA,j=t.fx,i=t.yL,h=i.i("h.E"),g=t.yH,f=t.A,p=0;e=s.length,p<e;s.length===c0||(0,A.n)(s),++p){d=s[p]
e=A.d([],f)
c=q.h(0,d.f)
c=J.T(c==null?B.a9:c)
b=d.w
a=b.a
a0=b.b
b=b.c
while(c.m()){a1=c.gt()
a2=a1.w
a3=a2.a
a4=a2.b
a2=a2.c
a5=A.f(a3,a4,a2)
a6=A.f(a,a0,b)
a7=!1
if(B.d.u(a5.b-a6.b+1000*(a5.a-a6.a),b6)>=0){a5=A.f(a3,a4,a2)
a6=A.f(a,a0,b)
if(B.d.u(a5.b-a6.b+1000*(a5.a-a6.a),b6)>=0){a2=A.f(a3,a4,a2)
a3=A.f(a,a0,b)
a3=B.d.u(a2.b-a3.b+1000*(a2.a-a3.a),b6)<=5
a2=a3}else a2=a7}else a2=a7
if(a2)e.push(a1)}if(e.length===0)continue
c=A.d([d.z],g)
for(b=d.a,a=c2.dX(b),a0=J.T(a.a),a=new A.S(a0,a.b,a.$ti.i("S<1>"));a.m();)c.push(a0.gt().z)
a8=A.E(new A.p(e,j.a(new A.yB(c2,new A.ak(c,l.a(new A.yC()),k))),i),h)
if(a8.length===0)m.j(0,b,e)
else n.j(0,b,a8)}a9=A.w(b9,b8)
for(p=0;p<s.length;s.length===e||(0,A.n)(s),++p){d=s[p]
b8=n.h(0,d.a)
if(b8==null)b8=B.a9
c0=b8.length
b0=0
for(;b0<b8.length;b8.length===c0||(0,A.n)(b8),++b0)J.bT(a9.aK(b8[b0].a,new A.yD()),d)}b1=new A.yw(c2)
b2=A.d([],t.nt)
b3=A.d([],t.J)
for(b8=s.length,p=0;p<s.length;s.length===b8||(0,A.n)(s),++p){d=s[p]
c0=d.a
b4=m.h(0,c0)
if(b4!=null){l=d.f.k(0)
k=A.i(b1.$1(d))
j=d.w.k(0)
i=A.N(b4)
i=new A.ak(b4,i.i("e(1)").a(b1),i.i("ak<1,e>")).S(0,b7)
h=b4.length===1?"that card's bank":"their banks"
B.a.n(b3,new A.W("card-bill?:"+c0,B.N,c0,l+" left "+k+" on "+j+": it may pay "+i+", but nothing names "+h+"."))
continue}b5=n.h(0,c0)
if(b5==null)continue
if(b5.length>1){l=A.N(b5)
B.a.n(b3,new A.W("card-bill?:"+c0,B.N,c0,d.f.k(0)+" left "+A.i(b1.$1(d))+" on "+d.w.k(0)+": it may pay "+new A.ak(b5,l.i("e(1)").a(b1),l.i("ak<1,e>")).S(0,b7)+"."))}else{c0=a9.h(0,B.a.gaL(b5).a)
c0.toString
if(J.aB(c0)===1){B.a.gaL(b5)
B.a.n(b2,new A.jG())}}}for(b8=r.length,p=0;p<r.length;r.length===b8||(0,A.n)(r),++p){o=r[p]
c0=o.a
b5=a9.h(0,c0)
if(b5==null||J.aB(b5)<2)continue
B.a.n(b3,new A.W("card-bill?:"+c0,B.N,c0,o.f.k(0)+" paid to "+A.i(b1.$1(o))+" on "+o.w.k(0)+" may come from "+J.Bq(b5,new A.yE(b1),b9).S(0,b7)+"."))}B.a.E(b3,new A.yF())
return new A.mS(b3)},
mR:function mR(){},
jG:function jG(){},
mS:function mS(a){this.b=a},
yG:function yG(){},
yx:function yx(){},
yy:function yy(a){this.a=a},
yz:function yz(a){this.a=a},
yA:function yA(){},
yC:function yC(){},
yB:function yB(a,b){this.a=a
this.b=b},
yv:function yv(a){this.a=a},
yD:function yD(){},
yw:function yw(a){this.a=a},
yE:function yE(a){this.a=a},
yF:function yF(){},
Lf(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
a=A.f(a.a,a.b,a.c).l(0,A.f(a2.a,a2.b,a2.c))>0?a:a2
s=a1.CW
r=s!=null&&A.f(s.a,s.b,s.c).l(0,A.f(a3.a,a3.b,a3.c))<0?s:a3
q=r.a
p=r.b
o=r.c
if(A.f(a.a,a.b,a.c).l(0,A.f(q,p,o))>0)return!0
n=A.d([],t.hy)
for(m=A.aN(a0.fx,t.v),l=m.length,k=a1.a,j=0;j<l;++j){i=m[j]
if(i.b===k&&i.r!=null)n.push(new A.t(i.c,i.d))}for(m=A.aN(a0.RG,t.lA),l=m.length,j=0;j<l;++j){h=m[j]
if(h.a===k)n.push(new A.t(h.b,h.c))}B.a.E(n,new A.zs())
for(m=n.length,g=a,j=0;j<n.length;n.length===m||(0,A.n)(n),++j){l=n[j]
i=l.a
f=l.b
l=g.a
k=g.b
e=g.c
if(A.f(i.a,i.b,i.c).l(0,A.f(l,k,e))>0)break
d=f.a
c=f.b
b=f.c
if(A.f(d,c,b).l(0,A.f(l,k,e))>=0){h=A.f(d,c,b).aM(864e8)
g=new A.K(A.b2(h),A.bk(h),A.aH(h))}if(A.f(g.a,g.b,g.c).l(0,A.f(q,p,o))>0)return!0}return A.f(g.a,g.b,g.c).l(0,A.f(q,p,o))>0},
KC(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=864e8,a9=A.d([],t.lz),b0=b4.gR().gU(),b1=A.o(b0),b2=b1.i("p<h.E>"),b3=A.E(new A.p(b0,b1.i("l(h.E)").a(new A.xW(b4)),b2),b2.i("h.E"))
B.a.E(b3,new A.xX())
for(b0=b3.length,b1=b4.RG,b2=t.lA,s=b4.fx,r=t.v,q=t.hy,p=b6.a,o=b6.b,n=b6.c,m=0;m<b3.length;b3.length===b0||(0,A.n)(b3),++m){l=b3[m]
k=new A.xZ(b4,l)
j=A.d([],q)
i=A.dt(s,!1,r)
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
a1=A.f(a1.a,a1.b,a1.c).l(0,A.f(d,c,b))>=0}else a1=!1
if(a1)j.push(new A.t(a0.c,a0.d))}i=A.dt(b1,!1,b2)
i.$flags=3
h=i
g=h.length
a=0
for(;a<g;++a){a2=h[a]
if(a2.a===f){a1=a2.c
a1=A.f(a1.a,a1.b,a1.c).l(0,A.f(d,c,b))>=0}else a1=!1
if(a1)j.push(new A.t(a2.b,a2.c))}B.a.E(j,new A.xY())
for(h=j.length,a=0;a<j.length;j.length===h||(0,A.n)(j),++a){g=j[a]
a3=g.a
a4=g.b
g=a3.a
d=a3.b
c=a3.c
b=e.a
a1=e.b
a5=e.c
if(A.f(g,d,c).l(0,A.f(b,a1,a5))>0){a2=A.f(g,d,c).aM(-864e8)
a6=new A.K(A.b2(a2),A.bk(a2),A.aH(a2))
B.a.n(a9,new A.i9(f,e,a6,k.$2(e,a6)))}a2=A.f(a4.a,a4.b,a4.c).aM(a8)
g=A.b2(a2)
d=A.bk(a2)
c=A.aH(a2)
a7=new A.K(g,d,c)
if(A.f(g,d,c).l(0,A.f(b,a1,a5))>0)e=a7}if(l.CW==null){j=A.f(p,o,n)
h=A.f(e.a,e.b,e.c)
h=B.d.u(j.b-h.b+1000*(j.a-h.a),a8)>45
j=h}else j=!1
if(j)B.a.n(a9,new A.i9(f,e,null,k.$2(e,b6)))}return a9},
KB(a,b){var s,r,q,p,o,n,m,l=A.d([],t.J)
for(s=A.KC(a,B.eh,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=p.a
n=p.b.k(0)
m=a.gR().h(0,o)
m.toString
l.push(new A.W("missing-statement:"+o+":"+n,B.bG,o,A.Ih(a,m,p,b)))}return l},
Ih(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="No statement for ",d=A.d([],t.F)
for(s=A.aN(a.fx,t.v),r=s.length,q=b.a,p=b.w,o=p.a,n=p.b,m=p.c,l=0;l<r;++l){k=s[l]
if(k.b===q){j=k.d
j=A.f(j.a,j.b,j.c).l(0,A.f(o,n,m))>=0}else j=!1
if(j)d.push(k)}i=B.a.N(d,new A.uJ(c))?"between two that were read":"before the first one read"
h=c.c
if(h!=null)g=e+b.b+" covers "+c.b.k(0)+" to "+h.k(0)+", "+i+"."
else{d=d.length===0&&c.b.I(0,p)
s=c.b
r=e+b.b
g=d?r+" has been read since its history start, "+s.k(0)+".":r+" covers the "+B.d.u(A.f(a0.a,a0.b,a0.c).aX(A.f(s.a,s.b,s.c)).a,864e8)+" days from "+s.k(0)+"."}f=c.d
A:{if(0===f){d=""
break A}if(1===f){d=" 1 alert in that time waits for it."
break A}d=" "+f+" alerts in that time wait for it."
break A}return g+d+" Add it from Statements, or say the bank sent none."},
KA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.d([],t.F)
for(s=A.aN(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)f.push(p)}if(f.length<2)return B.jj
s=A.d([],t.hy)
for(r=f.length,q=0;q<f.length;f.length===r||(0,A.n)(f),++q){p=f[q]
s.push(new A.t(p.c,p.d))}for(r=A.aN(a.RG,t.lA),o=r.length,q=0;q<o;++q){n=r[q]
if(n.a===b)s.push(new A.t(n.b,n.c))}B.a.E(s,new A.xR())
r=A.ab(t.l1)
for(o=f.length,q=0;q<f.length;f.length===o||(0,A.n)(f),++q){m=f[q].d
r.n(0,new A.ha(m.b,m.a))}l=new A.xU()
k=new A.xV()
j=A.E(r,r.$ti.c)
B.a.E(j,new A.xS(l))
i=new A.xT(s)
f=A.d([],t.l7)
s=l.$1(B.a.ga_(j))
if(typeof s!=="number")return s.D()
h=s+1
for(;;){s=l.$1(B.a.gaq(j))
if(typeof s!=="number")return A.AT(s)
if(!(h<s))break
g=k.$1(h)
s=r.B(0,g)
if(!s){s=g.b
o=g.a
n=A.f(s,o+1,1).aM(-864e8)
if(!i.$2(new A.K(s,o,1),new A.K(A.b2(n),A.bk(n),A.aH(n))))f.push(g)}++h}return f},
tl:function tl(){},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zs:function zs(){},
xW:function xW(a){this.a=a},
xX:function xX(){},
xZ:function xZ(a,b){this.a=a
this.b=b},
y_:function y_(a,b){this.a=a
this.b=b},
xY:function xY(){},
uJ:function uJ(a){this.a=a},
xR:function xR(){},
xU:function xU(){},
xV:function xV(){},
xS:function xS(a){this.a=a},
xT:function xT(a){this.a=a},
KF(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="currency",b0="is not a supported currency",b1=A.d([],t.fB),b2=A.w(t.N,t.C)
for(s=b3.b_(),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gt()
J.bT(b2.aK(q.c,new A.y4()),q)}for(s=new A.a2(b2,b2.r,b2.e,b2.$ti.i("a2<2>"));s.m();)J.mt(s.d,new A.y5())
p=new A.y7()
for(s=A.aN(b3.fx,t.v),r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
m=b3.gR().h(0,q)
if(m!=null){l=n.d
k=m.w
k=A.f(l.a,l.b,l.c).l(0,A.f(k.a,k.b,k.c))<0
l=k}else l=!0
if(l)continue
l=n.f
j=l.b
k=$.M()
i=new A.v(k,j)
h=B.e.h(0,j)
if(h==null)A.j(A.y(j,a9,b0))
g=k.b<=0
if((g?0:Math.max(k.gA().b,0))>h)A.j(A.A(j+" allows "+A.i(h)+" decimal places",k.k(0),a8))
f=new A.v(k,j)
h=B.e.h(0,j)
if(h==null)A.j(A.y(j,a9,b0))
if((g?0:Math.max(k.gA().b,0))>h)A.j(A.A(j+" allows "+A.i(h)+" decimal places",k.k(0),a8))
e=b2.h(0,q)
if(e==null)e=B.a9
k=n.c
d=p.$2(e,k)
g=J.ap(e)
c=n.d
b=c.a
a=c.b
a0=c.c
a1=j+" allows "
a2=0
a3=0
for(;;){if(d<g.gq(e)){a4=g.h(e,d).w
a4=A.f(a4.a,a4.b,a4.c).l(0,A.f(b,a,a0))<=0}else a4=!1
if(!a4)break
A:{a5=g.h(e,d)
a6=a5.f
if(a6.b!==j){++a3
break A}if(!(a5.e===B.p)){a4=$.M()
h=B.e.h(0,j)
if(h==null)A.j(A.y(j,a9,b0))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>h)A.j(A.A(a1+A.i(h)+" decimal places",a4.k(0),a8))
a7=a6.a
a7=a4.D(0,new A.Q(a7.a.W(0),a7.b))
a6=new A.v(a7,j)
h=B.e.h(0,j)
if(h==null)A.j(A.y(j,a9,b0))
if((a7.b<=0?0:Math.max(a7.gA().b,0))>h)A.j(A.A(a1+A.i(h)+" decimal places",a7.k(0),a8))}a4=a5.d
if(a4!=null)a4=(a4===B.k||a4===B.w)&&a5.Q==null
else a4=!0
if(a4){++a2
a4=a6.b
a7=f.b
if(a4!==a7)A.j(A.ae(a7,a4))
a4=f.a.D(0,a6.a)
f=new A.v(a4,a7)
h=B.e.h(0,a7)
if(h==null)A.j(A.y(a7,a9,b0))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>h)A.j(A.A(a7+" allows "+A.i(h)+" decimal places",a4.k(0),a8))}else{a4=a6.b
a7=i.b
if(a4!==a7)A.j(A.ae(a7,a4))
a4=i.a.D(0,a6.a)
i=new A.v(a4,a7)
h=B.e.h(0,a7)
if(h==null)A.j(A.y(a7,a9,b0))
if((a4.b<=0?0:Math.max(a4.gA().b,0))>h)A.j(A.A(a7+" allows "+A.i(h)+" decimal places",a4.k(0),a8))}}++d}g=n.e
b=g.b
if(b!==j)A.j(A.ae(j,b))
g=g.a
g=l.a.D(0,new A.Q(g.a.W(0),g.b))
h=B.e.h(0,j)
if(h==null)A.j(A.y(j,a9,b0))
if((g.b<=0?0:Math.max(g.gA().b,0))>h)A.j(A.A(a1+A.i(h)+" decimal places",g.k(0),a8))
B.a.n(b1,new A.dv(q,n.a,k,c,new A.v(g,j),i,a2,a3))}s=t.wg
r=A.w(s,t.S)
for(s=A.bK(b1,0,s),q=J.T(s.a),l=s.b,s=new A.at(q,l,A.o(s).i("at<1>"));s.m();){k=s.c
k=k>=0?new A.t(l+k,q.gt()):A.j(A.aq())
r.j(0,k.b,k.a)}B.a.E(b1,new A.y6(r))
return b1},
KE(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=A.d([],t.J)
for(s=A.KF(a0),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=!1
if(p.r===0)if(p.x===0){o=p.f
n=p.e
m=n.b
l=o.b
if(m!==l)A.j(A.ae(l,m))
n=n.a
n=o.a.D(0,new A.Q(n.a.W(0),n.b))
k=B.e.h(0,l)
if(k==null)A.j(A.y(l,c,b))
if((n.b<=0?0:Math.max(n.gA().b,0))>k)A.j(A.A(l+" allows "+A.i(k)+" decimal places",n.k(0),d))
o=n.l(0,$.M())
o=o!==0}if(o){o=p.b
n=p.a
m=a0.gR().h(0,n)
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
if(f!==e)A.j(A.ae(e,f))
h=h.a
h=j.a.D(0,new A.Q(h.a.W(0),h.b))
k=B.e.h(0,e)
if(k==null)A.j(A.y(e,c,b))
j=h.b
f=j<=0
if((f?0:Math.max(h.gA().b,0))>k)A.j(A.A(e+" allows "+A.i(k)+" decimal places",h.k(0),d))
h=h.a
j=new A.Q(h.a?h.W(0):h,j)
k=B.e.h(0,e)
if(k==null)A.j(A.y(e,c,b))
if((f?0:Math.max(j.gA().b,0))>k)A.j(A.A(e+" allows "+A.i(k)+" decimal places",j.k(0),d))
a.push(new A.W("month-check:"+o,B.b1,o,"The transactions filed on "+n+" from "+m+" to "+l+" come to "+i+", but the statement moved "+g+" (off by "+new A.v(j,e).k(0)+"). A transaction is missing, extra or has the wrong amount."))}}return a},
dv:function dv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
y4:function y4(){},
y5:function y5(){},
y7:function y7(){},
y6:function y6(a){this.a=a},
K7(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=null,b8="currency",b9="is not a supported currency",c0=864e8,c1=t.A,c2=A.d([],c1),c3=A.d([],c1)
for(s=c4.b_(),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gt()
p=q.d
if(p==null&&q.e===B.p&&q.ay==null)B.a.n(c2,q)
if(p===B.Y){o=q.ch
o=o==null?b7:B.c.ao(o,"forbook:")
n=o===!0}else n=!1
if((p===B.k||n)&&q.e===B.q)B.a.n(c3,q)}B.a.E(c2,new A.x0())
s=A.ab(t.p_)
for(r=c2.length,m=0;m<c2.length;c2.length===r||(0,A.n)(c2),++m){l=c2[m]
s.n(0,new A.t(l.c,l.f.b))}k=A.w(t.ER,t.C)
for(r=c3.length,m=0;m<c3.length;c3.length===r||(0,A.n)(c3),++m){j=c3[m]
q=j.c
p=j.f.b
if(!s.B(0,new A.t(q,p)))continue
o=j.z
if(o==null)o=""
i=A.C("\\s+",!0,!1)
J.bT(k.aK(new A.bx(q,p,B.c.G(A.a4(o.toUpperCase(),i," "))),new A.x1()),j)}for(r=new A.a2(k,k.r,k.e,k.$ti.i("a2<2>"));r.m();)J.mt(r.d,new A.x2())
r=t.N
q=t.B
p=A.w(r,q)
for(o=c3.length,m=0;m<c3.length;c3.length===o||(0,A.n)(c3),++m){j=c3[m]
if(j.d===B.Y&&s.B(0,new A.t(j.c,j.f.b))){i=j.f.b
h=$.M()
g=B.e.h(0,i)
if(g==null)A.j(A.y(i,b8,b9))
if((h.b<=0?0:Math.max(h.gA().b,0))>g)A.j(A.A(i+" allows "+A.i(g)+" decimal places",h.k(0),b7))
p.j(0,j.a,new A.v(h,i))}}if(p.a!==0)for(s=c4.b_(),o=J.T(s.a),s=new A.S(o,s.b,s.$ti.i("S<1>"));s.m();){i=o.gt()
f=i.ay
if(i.d===B.X&&f!=null&&p.C(f)){h=p.h(0,f)
i=i.f
e=h.a
d=i.b
h=h.b
if(d!==h)A.j(A.ae(h,d))
i=e.D(0,i.a)
g=B.e.h(0,h)
if(g==null)A.j(A.y(h,b8,b9))
if((i.b<=0?0:Math.max(i.gA().b,0))>g)A.j(A.A(h+" allows "+A.i(g)+" decimal places",i.k(0),b7))
p.j(0,f,new A.v(i,h))}}c=new A.x7(p,new A.dP(c4.b.c,t.iB))
b=A.w(r,q)
a=A.d([],t.k1)
a0=A.d([],t.J)
for(s=c2.length,r=t.fx,q=t.yL,p=q.i("h.E"),m=0;m<c2.length;c2.length===s||(0,A.n)(c2),++m){l=c2[m]
o=l.z
i=o==null?"":o
h=A.C("\\s+",!0,!1)
a1=B.c.G(A.a4(i.toUpperCase(),h," "))
if(a1.length===0)continue
a2=new A.x6(c,b)
i=l.f
h=i.b
a3=k.h(0,new A.bx(l.c,h,a1))
if(a3==null)a3=B.a9
e=J.ap(a3)
a4=e.gq(a3)
for(d=l.w,a5=d.a,a6=d.b,a7=d.c,a8=0;a8<a4;){a9=B.d.al(a8+a4,1)
b0=e.h(a3,a9).w
b1=A.f(a5,a6,a7)
b0=A.f(b0.a,b0.b,b0.c)
if(B.d.u(b1.b-b0.b+1000*(b1.a-b0.a),c0)>90)a8=a9+1
else a4=a9}b0=A.d([],c1)
b1=i.a
b2=a8
for(;;){if(b2<e.gq(a3)){b3=e.h(a3,b2).w
b4=A.f(a5,a6,a7)
b3=A.f(b3.a,b3.b,b3.c)
b3=B.d.u(b4.b-b3.b+1000*(b4.a-b3.a),c0)>=0}else b3=!1
if(!b3)break
if(a2.$1(e.h(a3,b2)).a.l(0,b1)>=0)b0.push(e.h(a3,b2));++b2}B.a.E(b0,new A.x3())
if(b0.length>1){b5=A.E(new A.p(b0,r.a(new A.x4(l)),q),p)
b6=b5.length!==0?b5:b0}else b6=b0
e=b6.length
if(e===0)continue
if(e>1){h=l.a
e=A.N(b6)
B.a.n(a0,new A.W("refund?:"+h,B.N,h,i.k(0)+" back from "+A.i(o)+" on "+d.k(0)+" may refund the purchase of "+new A.ak(b6,e.i("e(1)").a(new A.x5()),e.i("ak<1,e>")).S(0," or of ")+"."))
continue}j=B.a.gaL(b6)
if(j.d===B.k){o=j.f
i=!1
if(o.b===h)o=o.a.l(0,b1)===0
else o=i
if(o){o=j.w
a7=A.f(a5,a6,a7)
o=A.f(o.a,o.b,o.c)
if(B.d.u(a7.b-o.b+1000*(a7.a-o.a),c0)<=7){o=c.$1(j).a.l(0,$.M())
if(o===0)b.h(0,j.a)}}}o=j.a
i=b.h(0,o)
if(i==null){i=j.f.b
e=$.M()
d=new A.v(e,i)
g=B.e.h(0,i)
if(g==null)A.j(A.y(i,b8,b9))
if((e.b<=0?0:Math.max(e.gA().b,0))>g)A.j(A.A(i+" allows "+A.i(g)+" decimal places",e.k(0),b7))
i=d}e=i.b
if(h!==e)A.j(A.ae(e,h))
i=i.a.D(0,b1)
g=B.e.h(0,e)
if(g==null)A.j(A.y(e,b8,b9))
if((i.b<=0?0:Math.max(i.gA().b,0))>g)A.j(A.A(e+" allows "+A.i(g)+" decimal places",i.k(0),b7))
b.j(0,o,new A.v(i,e))
B.a.n(a,new A.kW())}return new A.rY(a0)},
rX:function rX(){},
kW:function kW(){},
rY:function rY(a){this.b=a},
x0:function x0(){},
x1:function x1(){},
x2:function x2(){},
x7:function x7(a,b){this.a=a
this.b=b},
x6:function x6(a,b){this.a=a
this.b=b},
x3:function x3(){},
x4:function x4(a){this.a=a},
x5:function x5(){},
K8(c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=c7.b_(),c6=A.E(c5,c5.$ti.i("h.E"))
B.a.E(c6,new A.x9())
s=A.w(t.bY,t.L)
for(r=0;r<c6.length;++r){c5=c6[r]
J.bT(s.aK(new A.bx(c5.c,c5.e,c5.f),new A.xa()),r)}q=A.d([],t.Dg)
for(c5=new A.a2(s,s.r,s.e,s.$ti.i("a2<2>"));c5.m();){p=c5.d
for(o=J.ap(p),n=0;n<o.gq(p);n=m)for(m=n+1,l=m;l<o.gq(p);++l){k=o.h(p,n)
if(!(k>=0&&k<c6.length))return A.a(c6,k)
k=c6[k]
j=o.h(p,l)
if(!(j>=0&&j<c6.length))return A.a(c6,j)
i=A.IT(c7,k,c6[j],B.eg)
if(i!=null)B.a.n(q,new A.bx(o.h(p,n),o.h(p,l),i))}}B.a.E(q,new A.xb())
c5=A.d([],t.hK)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.n)(q),++h){o=q[h]
r=o.a
g=o.b
k=c6.length
if(!(r>=0&&r<k))return A.a(c6,r)
j=c6[r]
if(!(g>=0&&g<k))return A.a(c6,g)
c5.push(new A.bx(j,c6[g],o.c))}p=t.N
f=A.w(p,p)
e=new A.xj(f)
for(o=c5.length,h=0;k=c5.length,h<k;c5.length===o||(0,A.n)(c5),++h){k=c5[h]
if(k.c!==B.b4)continue
d=e.$1(k.a.a)
c=e.$1(k.b.a)
if(d!==c){k=d<c?-1:1
k=k<0?c:d
j=d<c?-1:1
f.j(0,k,j<0?d:c)}}b=A.w(p,t.C)
for(h=0;h<c5.length;c5.length===k||(0,A.n)(c5),++h){o=c5[h]
if(o.c!==B.b4)continue
for(o=[o.a,o.b],a=0;a<2;++a){a0=o[a]
a1=b.aK(e.$1(a0.a),new A.xc())
j=J.ap(a1)
if(!j.B(a1,a0))j.n(a1,a0)}}a2=A.d([],t.st)
a3=A.d([],t.J)
a4=A.ab(p)
for(o=new A.a2(b,b.r,b.e,b.$ti.i("a2<2>")),k=t.W,j=t.A;o.m();){a5=o.d
a6=A.ab(p)
for(a7=J.b4(a5),a8=a7.gv(a5);a8.m();)a6.n(0,a8.gt().a)
a8=A.d([],j)
for(a9=a7.gv(a5);a9.m();){b0=a9.gt()
for(b1=a7.gv(a5),b2=b0.a,b3=b0.y,b4=b3.a,b3=b3.b;b1.m();){b5=b1.gt()
b6=b5.a
if(b2===b6)b6=0
else b6=b2<b6?-1:1
if(b6<0){b5=b5.y
b5=b4===b5.a&&b3!==b5.b}else b5=!1
if(b5)a8.push(b0)}}a8=a8.length
b7=B.a.N(c5,new A.xd(a6))
b8=a7.bV(a5,A.L3()).gq(0)
a9=a7.bV(a5,new A.xe(c7))
b9=A.E(a9,a9.$ti.i("h.E"))
c0=b9.length!==0&&a7.N(a5,new A.xf(b9))
c1=a7.N(a5,new A.xg(a5,c7))
if(a8!==0||b7||b8>1||b9.length>1||c0||c1){a4.a1(0,a6)
continue}if(b9.length!==0)c2=B.a.gaL(b9)
else{a6=A.E(a5,k)
B.a.E(a6,A.L4())
c2=B.a.ga_(a6)}for(a5=a7.gv(a5),a6=c2.a;a5.m();){a7=a5.gt().a
if(a7!==a6)B.a.n(a2,new A.dC(a6,a7))}}for(p=c5.length,h=0;h<c5.length;c5.length===p||(0,A.n)(c5),++h){o=c5[h]
c3=o.a
c4=o.b
if(o.c===B.c3||a4.B(0,c3.a)){o=c3.a
B.a.n(a3,new A.W("same-event?:"+o+":"+c4.a,B.v,o,c3.f.k(0)+" on "+c3.w.k(0)+" by "+c3.y.a+" and "+c4.y.a+" may be one payment."))}}B.a.E(a2,new A.xh())
B.a.E(a3,new A.xi())
return new A.t9(a3)},
IT(a,b,c,d){var s,r,q,p,o,n=null
if(b.c!==c.c||b.e!==c.e||!b.f.I(0,c.f))return n
if(a.dQ.B(0,A.nN(b.a,c.a)))return n
s=b.y
r=c.y
q=s.b===r.b
if(!q&&s.a===r.a)return n
if(q)return B.b4
p=b.r
o=c.r
if(p!=null&&o!=null&&Math.abs(B.d.u(p.aX(o).a,6e7))<=120)return B.b4
s=b.w
r=c.w
if(Math.abs(B.d.u(A.f(r.a,r.b,r.c).aX(A.f(s.a,s.b,s.c)).a,864e8))<=1)return B.c3
return n},
II(a){t.W.a(a)
return a.CW!=null||a.y.d},
IV(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=b.CW!=null||b.y.d?1:0
s=q-(a.CW!=null||a.y.d?1:0)
if(s!==0)return s
r=a.y.c.l(0,b.y.c)
return r!==0?r:B.c.l(a.a,b.a)},
t8:function t8(){},
dC:function dC(a,b){this.a=a
this.b=b},
t9:function t9(a){this.b=a},
bN:function bN(a,b){this.a=a
this.b=b},
x9:function x9(){},
xa:function xa(){},
xb:function xb(){},
xj:function xj(a){this.a=a},
xc:function xc(){},
xd:function xd(a){this.a=a},
xe:function xe(a){this.a=a},
xf:function xf(a){this.a=a},
xg:function xg(a,b){this.a=a
this.b=b},
x8:function x8(a,b){this.a=a
this.b=b},
xh:function xh(){},
xi:function xi(){},
Ef(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.d([],t.g0)
for(s=a.gR().gU(),s=s.gv(s),r=a.fx,q=t.v,p=t.F;s.m();){o=s.gt()
n=o.ay
if(n==null||n.a!==B.ak)continue
m=A.d([],p)
l=A.dt(r,!1,q)
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
c=A.f(c.a,c.b,c.c).l(0,A.f(h,g,f))>=0}else c=!1
if(c)m.push(d)}B.a.E(m,new A.zj())
k=!0
if(m.length!==0){j=B.a.ga_(m)
c=n.b
c.toString
if(j.c.a<=c){k=B.a.ga_(m).c
k=h===k.a&&g===k.b&&f===k.c}}if(k)continue
k=n.b
k.toString
B.a.n(b,new A.dE(i,o,k,B.a.ga_(m)))}B.a.E(b,new A.zk())
return b},
L8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.J)
for(s=A.Ef(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=p.a
n=p.d
m=a.gR().h(0,o).b
l=p.b
k=l.k(0)
j=n.c
i=j.k(0)
h=n.d.k(0)
l=A.f(j.a,j.b,j.c).l(0,A.f(l.a,l.b,l.c))>0?" No statement covers the days before it.":""
g.push(new A.W("start-from:"+o+":"+n.a,B.bK,o,m+"'s history starts "+k+", from its Drive year folder "+p.c+", not from a statement. The first statement read covers "+i+" to "+h+"."+l))}return g},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zj:function zj(){},
zk:function zk(){},
KL(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=864e8,b0="; pair it by hand.",b1=b5.$ti,b2=b1.i("p<h.E>"),b3=b2.i("p<h.E>"),b4=A.E(new A.p(new A.p(b5,b1.i("l(h.E)").a(new A.yI(b8)),b2),b2.i("l(h.E)").a(new A.yJ()),b3),b3.i("h.E"))
B.a.E(b4,new A.yK())
b1=A.N(b4)
b2=b1.i("l(1)")
b1=b1.i("p<1>")
b3=b1.i("h.E")
s=A.E(new A.p(b4,b2.a(new A.yL()),b1),b3)
r=A.E(new A.p(b4,b2.a(new A.yM()),b1),b3)
q=new A.yQ()
p=new A.yO(b7,q)
o=new A.yP()
b1=t.N
b2=t.C
b3=A.w(b1,b2)
for(n=s.length,m=t.A,l=0;l<s.length;s.length===n||(0,A.n)(s),++l){k=s[l]
j=A.d([],m)
i=k.w
h=o.$2(r,i)
g=i.a
f=i.b
i=i.c
for(;;){e=r.length
if(h<e){if(!(h>=0))return A.a(r,h)
e=r[h].w
e=A.f(e.a,e.b,e.c)
d=A.f(g,f,i)
d=B.d.u(e.b-d.b+1000*(e.a-d.a),a9)<=5
e=d}else e=!1
if(!e)break
if(!(h>=0&&h<r.length))return A.a(r,h)
if(p.$2(k,r[h])){if(!(h<r.length))return A.a(r,h)
j.push(r[h])}++h}b3.j(0,k.a,j)}b2=A.w(b1,b2)
for(n=r.length,l=0;l<r.length;r.length===n||(0,A.n)(r),++l){c=r[l]
j=A.d([],m)
i=c.w
g=i.a
f=i.b
i=i.c
b=A.f(g,f,i).aM(-432e9)
h=o.$2(s,new A.K(A.b2(b),A.bk(b),A.aH(b)))
for(;;){e=s.length
if(h<e){if(!(h>=0))return A.a(s,h)
e=s[h].w
e=A.f(e.a,e.b,e.c).l(0,A.f(g,f,i))<=0}else e=!1
if(!e)break
if(!(h>=0&&h<s.length))return A.a(s,h)
if(p.$2(s[h],c)){if(!(h<s.length))return A.a(s,h)
j.push(s[h])}++h}b2.j(0,c.a,j)}n=t.xw
a=A.d([],n)
a0=A.d([],n)
a1=A.ab(b1)
for(b1=s.length,l=0;l<s.length;s.length===b1||(0,A.n)(s),++l){k=s[l]
n=k.a
b5=b3.h(0,n)
if(b5.length!==1||b2.h(0,B.a.gaL(b5).a).length!==1)continue
c=B.a.gaL(b5)
a1.n(0,n)
m=c.a
a1.n(0,m)
if(k.f.b===c.f.b)j=q.$1(k)||q.$1(c)
else j=!1
j=j?a:a0
B.a.n(j,new A.lh(n,m))}a2=new A.yH(b6)
a3=A.d([],t.J)
for(b1=b4.length,n=b9.a,m=b9.b,j=b9.c,l=0;l<b4.length;b4.length===b1||(0,A.n)(b4),++l){a4=b4[l]
i=a4.a
if(a1.B(0,i)||!q.$1(a4))continue
a5=a4.e===B.q
if(a5){g=b3.h(0,i)
g.toString
b5=g}else{g=b2.h(0,i)
g.toString
b5=g}if(b5.length!==0){g=A.N(b5)
a6=new A.ak(b5,g.i("e(1)").a(new A.yN(a2)),g.i("ak<1,e>")).S(0," or ")
a7=b5.length===1?", which another transaction also fits":""
g=a4.f
f=a4.w
g=a5?g.k(0)+" left "+A.i(a2.$1(a4))+" on "+f.k(0)+": it may have reached "+a6+a7+b0:g.k(0)+" reached "+A.i(a2.$1(a4))+" on "+f.k(0)+": it may have come from "+a6+a7+b0
B.a.n(a3,new A.W("transfer?:"+i,B.N,i,g))
continue}g=a4.w
f=A.f(n,m,j)
e=A.f(g.a,g.b,g.c)
a8=B.d.u(f.b-e.b+1000*(f.a-e.a),a9)
if(a8<=5)continue
f=""+a8
e=a4.f
g=a5?e.k(0)+" left "+A.i(a2.$1(a4))+" on "+g.k(0)+"; the other side has not arrived after "+f+" days.":e.k(0)+" reached "+A.i(a2.$1(a4))+" on "+g.k(0)+"; the side it came from has not arrived after "+f+" days."
B.a.n(a3,new A.W("in-transit:"+i,B.bO,i,g))}return new A.tw(a0,a3)},
K9(a,b){var s=a.gR().gU(),r=A.o(s),q=r.i("l(h.E)").a(new A.xk()),p=a.b_(),o=p.$ti,n=o.i("l(h.E)").a(new A.xl()),m=t.N,l=A.ab(m)
for(s=s.gv(s),r=new A.S(s,q,r.i("S<h.E>"));r.m();)l.n(0,s.gt().a)
s=A.w(m,m)
for(r=a.gR().gU(),r=r.gv(r);r.m();){q=r.gt()
s.j(0,q.a,q.b)}return A.KL(new A.p(p,n,o.i("p<h.E>")),s,B.ei,l,b)},
tv:function tv(){},
lh:function lh(a,b){this.a=a
this.b=b},
tw:function tw(a,b){this.b=a
this.c=b},
yI:function yI(a){this.a=a},
yJ:function yJ(){},
yK:function yK(){},
yL:function yL(){},
yM:function yM(){},
yQ:function yQ(){},
yO:function yO(a,b){this.a=a
this.b=b},
yP:function yP(){},
yH:function yH(a){this.a=a},
yN:function yN(a){this.a=a},
xk:function xk(){},
xl:function xl(){},
KI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b==="personal"
if(f)s="personal"
else{r=a.a7.a5(B.aN,b)
s=r==null?null:A.m(r.c.h(0,"country"))}r=A.d([],t.M)
q=B.k0.h(0,s)
if(q!=null)B.a.a1(r,q)
q=a.aC.e
p=A.o(q).i("L<2>")
o=p.i("p<h.E>")
n=A.E(new A.p(new A.L(q,p),p.i("l(h.E)").a(new A.yo(b)),o),o.i("h.E"))
B.a.E(n,new A.yp())
m=f?"personal-tax:":"compliance:"
for(f=n.length,q=m.length,l=0;l<n.length;n.length===f||(0,A.n)(n),++l){k=n[l]
p=k.f
p.toString
if(!B.c.ao(p,m))continue
j=B.c.aa(p,q)
if(!B.a.N(r,new A.yq(j)))B.a.n(r,new A.t(j,k.c))}f=A.d([],t.cp)
for(q=r.length,p=A.N(n),o=p.i("l(1)"),p=p.i("p<1>"),i=t.r,l=0;l<r.length;r.length===q||(0,A.n)(r),++l){h={}
g=r[l]
h.a=null
j=g.a
h.a=j
f.push(new A.kJ(j,g.b,A.aU(new A.p(n,o.a(new A.yr(h,m,c)),p),i),A.A6(new A.p(n,o.a(new A.ys(h,m,c)),p),i)))}return f},
JN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.J),f=a.gcA(),e=A.o(f).i("aa<1,2>"),d=e.i("cs<h.E,e>"),c=A.E(new A.cs(new A.p(new A.aa(f,e),e.i("l(h.E)").a(new A.wz()),e.i("p<h.E>")),e.i("e(h.E)").a(new A.wA()),d),d.i("h.E"))
B.a.bh(c)
for(f=c.length,e=a.aC.a,d=t.s,s=a.a7.a,r=0;r<c.length;c.length===f||(0,A.n)(c),++r){q=c[r]
p=s.h(0,B.aN)
o=p==null?null:p.h(0,q)
if(o==null)continue
p=A.d([],d)
n=o.c
if(A.ay(n.h(0,"incorporated"))==null)p.push("its incorporation date")
if(A.m(n.h(0,"last4"))==null)p.push("its registration number")
n=e.h(0,q)
if((n==null?null:n.c)==null)p.push("its financial year end")
if(p.length!==0){n=q.length
if(n===0)n=q
else{if(0>=n)return A.a(q,0)
n=q[0].toUpperCase()+B.c.aa(q,1)}B.a.n(g,new A.W("company-setup:"+q,B.ab,q,n+" still needs "+B.a.S(p,", ")+". Nothing is reminded until it is entered."))}for(p=A.KI(a,q,b),n=p.length,m=q.length,l=m===0,k="company-date:"+q+":",j=0;j<p.length;p.length===n||(0,A.n)(p),++j){i=p[j]
if(i.c==null&&i.d!=null){if(l)h=q
else{if(0>=m)return A.a(q,0)
h=q[0].toUpperCase()+B.c.aa(q,1)}B.a.n(g,new A.W(k+i.a,B.ab,q,h+"'s "+i.b+" date "+i.d.d.k(0)+" has passed and no new date is entered. Add the next one from the notice or the accountant."))}}}return g},
kJ:function kJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yo:function yo(a){this.a=a},
yp:function yp(){},
yq:function yq(a){this.a=a},
yr:function yr(a,b,c){this.a=a
this.b=b
this.c=c},
ys:function ys(a,b,c){this.a=a
this.b=b
this.c=c},
wz:function wz(){},
wA:function wA(){},
A2(a){var s=a.h(0,"name")
s.toString
return new A.nc(A.b(s),A.m(a.h(0,"driveFileId")),A.m(a.h(0,"localId")))},
ay(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Fk().aj(a):m
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
n=A.f(q,p,o)
return A.b2(n)===q&&A.bk(n)===p&&A.aH(n)===o?new A.K(q,p,o):m},
bJ:function bJ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
bA:function bA(a,b,c){this.c=a
this.a=b
this.b=c},
cT:function cT(a,b,c){this.c=a
this.a=b
this.b=c},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
e8:function e8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Ij(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=b.b.toLowerCase()
A:{q=b.c
if(B.j===q||B.a2===q){if(typeof c!="string"||B.c.G(c).length===0)return A.i(e)+" is words"
p=q===B.j?80:300
if(c.length>p||B.c.B(c,"\n"))return A.i(e)+" is one line of at most "+p+" characters"
if($.eI().aG(0,c).gq(0)>=9||A.xM(c)!==c)return A.i(e)+" looks like it holds a full number; only the last 4 characters are kept"
break A}if(B.r===q){if(A.ay(c)==null)return A.i(e)+" is written YYYY-MM-DD and is a real day"
break A}if(B.aH===q){if(typeof c=="string"){o=$.FC()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is written HH:MM"
break A}if(B.an===q){if(typeof c=="string"){o=$.Fu()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is written YYYY-MM"
break A}if(B.u===q){s=null
try{s=A.aJ(t.f.a(c).F(0,t.N,t.X))}catch(n){o=A.i(e)
return o+" is an amount"}if(!B.e.C(s.b))return"currency "+s.b+" is not supported"
if(s.a.l(0,$.M())<=0)return A.i(e)+" is more than zero"
break A}if(B.aI===q){r=typeof c=="string"?A.dd(c):f
if(r==null||r.l(0,$.M())<=0)return A.i(e)+" is a number more than zero"
break A}if(B.I===q){o=!0
if(A.cD(c)){m=b.r
if(!(m!=null&&c<m)){o=b.w
o=o!=null&&c>o}}if(o){o=A.i(e)
m=b.r
m=m==null?"":", "+A.i(m)+" to "+A.i(b.w)
return o+" is a whole number"+m}break A}if(B.M===q){o=b.e
if(!B.a.B(o,c))return A.i(e)+" is one of "+B.a.S(o,", ")
break A}if(B.ao===q){if(typeof c=="string")o=c!=="me"&&!A.a7(a.p3,t.N,t.o).C(c)
else o=!0
if(o)return"no member "+A.i(c)
break A}if(B.be===q){if(t.j.b(c)){o=J.ap(c)
o=o.ga2(c)||o.f3(c).a!==o.gq(c)}else o=!0
if(o)return A.i(e)+" names each person once"
for(o=J.T(c),m=a.p3,l=t.N,k=t.o;o.m();){j=o.gt()
if(typeof j=="string")i=j!=="me"&&!A.a7(m,l,k).C(j)
else i=!0
if(i)return"no member "+A.i(j)}break A}if(B.a3===q){if(typeof c!="string"||!a.gR().C(c))return"no account "+A.i(c)
break A}if(B.ad===q){h=typeof c=="string"?a.aO(c):f
if(h==null)return"no book "+A.i(c)
o=b.x
if(o.length!==0&&!B.a.B(o,h)){m=A.N(o)
return A.i(e)+" is a "+new A.ak(o,m.i("e(1)").a(new A.uK()),m.i("ak<1,e>")).S(0," or ")+" book"}break A}if(B.F===q){if(typeof c=="string"){o=b.f
o.toString
o=a.a7.a5(A.af(B.aa,o,t.P),c)==null}else o=!0
if(o)return"no "+A.i(b.f)+" "+A.i(c)
break A}if(B.aE===q){if(typeof c!="string"||!A.a7(a.c5.d,t.N,t.ud).C(c))return"no policy "+A.i(c)
break A}if(B.bf===q){if(typeof c!="string"||a.c5.gby().h(0,c)==null)return"no document "+A.i(c)
break A}if(B.al===q){if(typeof c!="string"||a.b.a.h(0,c)==null)return"no transaction "+A.i(c)
break A}if(B.bg===q){if(typeof c!="string"||!a.aC.c.C(c))return"no invoice "+A.i(c)
break A}if(B.aF===q){r=null
try{r=A.A2(t.f.a(c).F(0,t.N,t.X))}catch(n){o=A.i(e)
return o+" is a file"}o=r.a
if($.eI().aG(0,o).gq(0)>=9||A.xM(o)!==o)return"the file name looks like it holds a full number"
break A}if(B.a6===q){if(typeof c=="string"){o=$.Fo()
o=!o.b.test(c)}else o=!0
if(o)return u.M
break A}if(B.a_===q){if(!A.dX(c))return A.i(e)+" is yes or no"
break A}if(B.am===q){if(typeof c!="string"||B.c.G(c).length===0)return A.i(e)+" is words"
g=A.d(c.split("\n"),t.s)
if(g.length>4||B.a.N(g,new A.uL()))return A.i(e)+" is at most 4 lines of 80 characters"
if(A.Ja(c))return A.i(e)+" looks like it holds an account, PAN or GSTIN; those are kept apart"
break A}if(B.aG===q){r=typeof c=="string"?A.dd(c):f
if(r==null||r.l(0,$.M())<0||r.l(0,new A.Q(A.aR(100),0))>0||r.ge4()>2)return A.i(e)+" is a percentage from 0 to 100, at most 2 decimals"
break A}if(B.bh===q){if(typeof c=="string"){o=$.FJ()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is 11 characters like ABCD0123456"}}return f},
AW(a,b){var s,r,q,p,o,n,m,l=b.b
if(B.c.G(l).length===0||l.length>120)return"a record needs an id"
for(l=b.c,s=l.gag(),s=s.gv(s),r=b.a;s.m();){q=s.gt()
if(r.lM(q)==null)return r.c.toLowerCase()+" has no field "+q}for(s=r.d,q=s.length,p=0;p<q;++p){o=s[p]
n=l.h(0,o.a)
if(n==null){if(o.d)return r.c.toLowerCase()+" needs "+o.b.toLowerCase()
continue}m=A.Ij(a,o,n)
if(m!=null)return m}return A.IL(a,b)},
m9(a){var s,r,q,p,o=A.ab(t.N)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r){q=a[r]
p=q==null?null:q.b
if(p!=null)o.n(0,p)}return o.a>1?"the amounts are in one currency":null},
IL(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="invoiceId",c1="medisave",c2="currency",c3="is not a supported currency",c4="bookId",c5="amount",c6="accountId",c7="propertyId",c8="the year of the next number is written like 26/27",c9="tenancyId",d0="unitPrice",d1="a mark is named by what it marks"
A:{s=d3.a
if(B.aw===s){r=A.m(d3.c.h(0,"loanAccountId"))
if(r!=null){q=d2.gR().h(0,r)
q=(q==null?b9:q.d)!==B.o}else q=!1
if(q)return"the loan is one of your loans"
break A}if(B.ar===s){q=d3.c
p=A.ay(q.h(0,"starts"))
q=A.ay(q.h(0,"ends"))
if(p!=null&&q!=null&&A.f(q.a,q.b,q.c).l(0,A.f(p.a,p.b,p.c))<0)return"a lease ends after it starts"
o=A.m9(A.d([d3.ar("rent"),d3.ar("deposit")],t.dr))
if(o!=null)return o
break A}if(B.cW===s){if(d3.b!==A.m(d3.c.h(0,c0)))return"an invoice has one document record, named by the invoice"
break A}if(B.cT===s){q=d3.c
p=A.ay(q.h(0,"departs"))
q=A.ay(q.h(0,"returns"))
if(p!=null&&q!=null&&A.f(q.a,q.b,q.c).l(0,A.f(p.a,p.b,p.c))<0)return"a trip comes back after it leaves"
break A}if(B.d0===s){q=d3.c
if(d3.b!==A.i(A.m(q.h(0,"tripId")))+":"+A.i(A.m(q.h(0,"movementId"))))return"a trip line is named by its trip and line"
n=d3.ar("sgd")
q=n==null
if(!q&&n.b!=="SGD")return"the SGD amount is in SGD"
if(q!==(d3.eJ("rate")==null))return"an SGD amount comes with its rate (LED-09)"
break A}if(B.cY===s){q=d3.ar("total")
q.toString
m=d3.ar(c1)
l=d3.ar("insurance")
k=A.m9(A.d([q,m,l],t.dr))
if(k!=null)return k
j=A.a6($.M(),q.b)
for(p=[m,l],i=0;i<2;++i){h=p[i]
if(h!=null){g=h.b
f=j.b
if(g!==f)A.j(A.ae(f,g))
g=j.a.D(0,h.a)
j=new A.v(g,f)
e=B.e.h(0,f)
if(e==null)A.j(A.y(f,c2,c3))
if((g.b<=0?0:Math.max(g.gA().b,0))>e)A.j(A.A(f+" allows "+A.i(e)+" decimal places",g.k(0),b9))}}if(j.a.l(0,q.a)>0)return"MediSave and insurance are not more than the bill"
break A}if(B.br===s){d=A.m9(A.d([d3.ar("claimed"),d3.ar("paid")],t.dr))
if(d!=null)return d
q=d3.c
if(A.m(q.h(0,"status"))==="paid"&&d3.ar("paid")==null)return"a paid claim says what was paid"
c=A.m(q.h(0,"creditMovementId"))
if(c!=null){q=d2.b.a
if(q.h(0,c).e!==B.p)return"a claim credit is money coming in"
if(q.h(0,c).d===B.w)return"a claim payout is a claim credit, never income"
q=d2.a7.b3(B.br)
p=A.N(q)
if(!new A.p(q,p.i("l(1)").a(new A.uO(d3,c)),p.i("p<1>")).ga2(0))return"that transaction is the payout of another claim"}break A}if(B.cX===s){q=d3.c
p=A.m(q.h(0,"personId"))
p.toString
if(p==="me")return"the helper is a household member"
b=A.m(q.h(0,"permitId"))
if(b!=null){a=d2.c5.gby().h(0,b)
if(a.b!==B.ct||a.c!==p)return"the permit is her work permit"}if(B.a.N(A.d(["renewalDate","medicalDue","contractEnds"],t.s),new A.uP(d3))&&A.m(q.h(0,"source"))==null)return"each date comes from the permit, policy or MOM notice: say which"
break A}if(B.aN===s){if(d3.b!==A.m(d3.c.h(0,c4)))return"a company has one record, named by its book"
break A}if(B.bu===s){q=A.d([],t.dr)
for(p=d3.c,g=t.f,f=t.N,a0=t.X,i=0;i<7;++i){a1=B.iE[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).F(0,f,a0)
a3=a2.h(0,c5)
a3.toString
a3=A.ah(A.b(a3))
a2=a2.h(0,c2)
a2.toString
A.b(a2)
a4=new A.v(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.j(A.y(a2,c2,c3))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>e)A.j(A.A(a2+" allows "+A.i(e)+" decimal places",a3.k(0),b9))
a2=a4}else a2=b9
q.push(a2)}a5=A.m9(q)
if(a5!=null)return a5
a6=A.m(p.h(0,c6))
if(a6!=null&&!d2.gR().h(0,a6).gaP())return"the pay goes into a savings or current account"
break A}if(B.cU===s||B.cZ===s){for(q=["employee","employer","amount"],p=d3.c,g=t.f,f=t.N,a0=t.X,i=0;i<3;++i){a1=q[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).F(0,f,a0)
a3=a2.h(0,c5)
a3.toString
a3=A.ah(A.b(a3))
a2=a2.h(0,c2)
a2.toString
A.b(a2)
a7=new A.v(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.j(A.y(a2,c2,c3))
if((a3.b<=0?0:Math.max(a3.gA().b,0))>e)A.j(A.A(a2+" allows "+A.i(e)+" decimal places",a3.k(0),b9))}else a7=b9
if(a7!=null)a2=a7.b!=="SGD"
else a2=!1
if(a2)return"CPF is in SGD"}break A}if(B.d3===s){q=d3.c
if(d3.b!==A.i(A.m(q.h(0,"policyId")))+":"+A.i(A.m(q.h(0,"dueOn"))))return"a premium is named by its policy and due date"
if(d3.ar("cash")==null&&d3.ar(c1)==null)return"say what was paid"
a8=A.m9(A.d([d3.ar("cash"),d3.ar(c1)],t.dr))
if(a8!=null)return a8
break A}if(B.d2===s){q=d3.c
p=A.ay(q.h(0,"anchor"))
p.toString
g=A.m(q.h(0,"offset"))
g.toString
a9=A.KY(p,g)
if(a9==null)return'the offset is like "1 month before", "2 weeks after" or "on the day"'
if(!a9.I(0,A.ay(q.h(0,"date"))))return"the date is worked out from the anchor and the offset"
b0=A.m(q.h(0,"repeat"))
b1=A.aE(q.h(0,"every"))
b2=A.ay(q.h(0,"until"))
if(b0==null)p=b1!=null||b2!=null||A.aE(q.h(0,"times"))!=null
else p=!1
if(p)return"say how it repeats before when it ends"
p=b0==="every-n-months"||b0==="every-n-weeks"
if(p!==(b1!=null))return"every how many is said only for every N months or weeks"
p=b2!=null
if(p&&A.aE(q.h(0,"times"))!=null)return"it ends on one of a date or a number of times"
if(p&&A.f(b2.a,b2.b,b2.c).l(0,A.f(a9.a,a9.b,a9.c))<0)return"until is on or after the first date"
break A}if(B.bt===s||B.d1===s||B.d_===s||B.cV===s)break A
if(B.aM===s){if(d3.b!==A.m(d3.c.h(0,c7)))return"a property has one issuer record, named by the property"
break A}if(B.af===s){q=d3.c
b3=A.m(q.h(0,"startYear"))
p=b3!=null
if(p){g=$.Fe()
g=!g.b.test(b3)}else g=!1
if(g)return c8
if(p&&B.d.P(A.Z(B.c.X(b3,0,2),b9,b9)+1,100)!==A.Z(B.c.aa(b3,3),b9,b9))return c8
q=A.m(q.h(0,"pattern"))
q.toString
return A.L6(q)}if(B.aL===s){q=d3.c
if(d3.b!==A.m(q.h(0,c9)))return"a tenancy has one invoicing record, named by the tenancy"
p=A.m(q.h(0,c9))
p.toString
p=d2.a7.a5(B.ar,p)
if((p==null?b9:A.m(p.c.h(0,"role")))!=="landlord")return"invoices are made for a tenancy where you are the landlord"
a6=d2.gR().h(0,A.m(q.h(0,c6)))
if(!a6.gaP()||a6.e!=="INR")return"rent is paid into a rupee savings or current account"
break A}if(B.bs===s){if(d3.ar(c5).b!=="INR")return"an invoice line is in rupees"
break A}if(B.ag===s||B.ah===s||B.a7===s)break A
if(B.aq===s){q=d3.b
p=d3.c
if(q!==A.m(p.h(0,c4)))return"a company has one issuer record, named by its book"
if(d2.aO(q)!=="company")return"invoices are issued by a company book"
a6=d2.gR().h(0,A.m(p.h(0,c6)))
if(a6==null||!a6.gaP()||a6.e!=="SGD"||a6.r!==q)return"the company's invoices are paid into one of its Singapore dollar bank accounts"
if(J.a1(p.h(0,"gstRegistered"),!0)!==(A.m(p.h(0,"gstRegLast4"))!=null))return"a GST registered company gives the last 4 of its GST registration number, and only then"
break A}if(B.a4===s){q=A.m(d3.c.h(0,c4))
q.toString
if(d2.aO(q)!=="company")return"a customer belongs to a company book"
break A}if(B.a8===s){q=d3.c
p=A.m(q.h(0,"customerId"))
p.toString
p=d2.a7.a5(B.a4,p)
p=p==null?b9:A.m(p.c.h(0,c4))
if(p!=A.m(q.h(0,c4)))return"the customer is one of the company's own"
break A}if(B.ap===s){if(d3.ar(d0).b!=="SGD")return"an invoice line is in Singapore dollars"
if(d3.ar(d0).a.a.gab(0)<0)return"a unit price is not below zero"
if(d3.eJ("quantity").ge4()>4)return"a quantity has at most 4 decimals"
break A}if(B.bq===s){q=d3.c
r=d2.gR().h(0,A.m(q.h(0,"loanId")))
if(r==null||r.d!==B.o)return"an instalment is confirmed on a loan"
if(d3.b!=="loan:"+r.a+":"+A.i(A.m(q.h(0,"due"))))return"a confirmation is named by its loan and due date"
break A}b4=B.aO===s
if(b4&&A.m(d3.c.h(0,"what"))==="tds-certificate"){q=d3.c
b5=A.m(q.h(0,c9))
b6=A.m(q.h(0,"quarter"))
q=!0
if(b5!=null)if(b6!=null){q=A.C("^\\d{4}-Q[1-4]$",!0,!1)
q=!q.b.test(b6)}if(q)return"a TDS certificate names its tenancy and quarter"
if(d3.b!=="tds-certificate:"+b5+":"+b6)return d1
break A}if(b4){q=d3.c
p=A.m(q.h(0,"what"))
p.toString
b7=A.m(q.h(0,c0))
b8=A.m(q.h(0,c7))!=null&&A.m(q.h(0,"month"))!=null
g=p==="sent"
if(g)f=b7==null||b8
else f=b7!=null||!b8
if(f)return g?"a sent mark names its invoice":"a GST mark names the property and the month"
q=g?"sent:"+A.i(b7):p+":"+A.i(A.m(q.h(0,c7)))+":"+A.i(A.m(q.h(0,"month")))
if(d3.b!==q)return d1
if(p==="gst-itc"){q=d3.ar(c5)
q=(q==null?b9:q.b)!=="INR"}else q=!1
if(q)return"an input tax credit is in rupees"}}return b9},
Ja(a){var s=a.toUpperCase(),r=A.C("[A-Z]{5}\\d{4}[A-Z]",!0,!1)
if(r.b.test(s))return!0
r=A.C("\\d(?:[\\s.\\-]*\\d){10,}",!0,!1)
return r.b.test(s)},
L6(a){var s,r,q,p,o=A.C("\\{(n+)\\}",!0,!1).aG(0,a),n=A.E(o,A.o(o).i("h.E"))
if(n.length!==1)return"the pattern holds the number once, as {nnn}"
o=$.Bk()
s=A.E(o.aG(0,a),t.lQ)
B.a.a1(s,B.c.aG("{yyyy}",a))
if(s.length>1)return"the pattern holds the year at most once"
r=A.C("\\{n+\\}",!0,!1)
r=A.a4(a,r,"")
o=A.a4(r,o,"")
q=A.a4(o,"{yyyy}","")
o=A.C("^[A-Za-z0-9/._-]*$",!0,!1)
if(!o.b.test(q))return"the pattern holds letters, digits and - / . _ only"
o=B.a.gaL(n).b
if(1>=o.length)return A.a(o,1)
p=o[1].length
o=p<4?4:p
if(s.length===0)s=0
else{s=B.a.gaL(s).h(0,0)
s.toString
s=A.hl(2026,s).length}if(q.length+o+s>16)return"an invoice number is at most 16 characters"
return null},
KM(a){var s,r,q,p,o=B.c.G(a).toLowerCase()
if(o==="on the day"||o==="on the date")return new A.dU(0,0)
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
B:{if("day"===r){r=new A.dU(p*q,0)
break B}if("week"===r){r=new A.dU(p*7*q,0)
break B}if("month"===r){r=new A.dU(0,p*q)
break B}r=new A.dU(0,p*12*q)
break B}return r},
KY(a,b){var s,r,q,p,o,n=A.KM(b)
if(n==null)return null
s=a.a*12+(a.b-1)+n.b
r=B.d.u(s,12)
q=B.d.P(s,12)+1
p=A.aH(A.f(r,q+1,0))
o=a.c
if(o>p)o=p
return new A.K(r,q,o).bx(n.a)},
Je(a,b,c){var s,r,q,p,o,n,m,l,k=c.e,j=t.P,i=A.aU(new A.p(B.aa,t.Ab.a(new A.va(k)),t.rx),j)
if(i==null)return"no record kind "+A.i(J.as(k,"kind"))
r=J.as(k,"id")
if(typeof r!="string")return"a record needs an id"
if(i===B.ag)return"a rent invoice is made once by Make invoice and never changed"
if(i===B.ah)return"a credit note is made once by Issue credit note and never changed"
if(i===B.a7)return"a company invoice is made once by Issue invoice and never changed"
if(c.d==="life.remove"){if(b.a5(i,r)==null)return"no "+i.c.toLowerCase()+" "+r
if(b.mK(i,r).length!==0)return"another record uses it; remove that first"
b.a.h(0,i).Y(0,r)
return null}s=null
try{q=k
p=q.h(0,"kind")
p.toString
j=A.af(B.aa,A.b(p),j)
p=q.h(0,"id")
p.toString
A.b(p)
q=q.h(0,"fields")
q.toString
o=t.N
n=t.X
s=new A.b1(j,p,A.a7(t.f.a(q).F(0,o,n),o,n))}catch(m){return"a record is its kind, id and fields"}l=A.AW(a,s)
if(l!=null)return l
j=b.a
q=j.h(0,i)
if(q==null){q=A.w(t.N,t.u)
j.j(0,i,q)
j=q}else j=q
j.j(0,r,s)
return null},
aG:function aG(a,b){this.a=a
this.b=b},
r:function r(a,b,c,d,e,f,g,h,i,j){var _=this
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
a9:function a9(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
ou:function ou(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(a){this.a=a},
ot:function ot(){},
uK:function uK(){},
uL:function uL(){},
uO:function uO(a,b){this.a=a
this.b=b},
uP:function uP(a){this.a=a},
va:function va(a){this.a=a},
KN(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2="currency",a3="is not a supported currency",a4=t.N,a5=A.ab(a4),a6=A.d([],t.uE),a7=a8.a7.b3(B.bu)
B.a.E(a7,new A.yT())
for(s=a7.length,r=a9.a,q=a9.b,p=a9.c,o=t.W,n=t.f,m=t.X,l=0;l<a7.length;a7.length===s||(0,A.n)(a7),++l){k=a7[l]
j=k.c
i=A.m(j.h(0,"accountId"))
if(n.b(j.h(0,"net"))){h=j.h(0,"net")
h.toString
h=n.a(h).F(0,a4,m)
g=h.h(0,"amount")
g.toString
g=A.ah(A.b(g))
h=h.h(0,a2)
h.toString
A.b(h)
f=new A.v(g,h)
e=B.e.h(0,h)
if(e==null)A.j(A.y(h,a2,a3))
if((g.b<=0?0:Math.max(g.gA().b,0))>e)A.j(A.A(h+" allows "+A.i(e)+" decimal places",g.k(0),a1))
h=f}else h=a1
h.toString
g=A.ay(j.h(0,"payDate"))
g.toString
if(i==null){B.a.n(a6,new A.f7(k,B.kv,a1))
continue}f=a8.cD()
d=f.$ti
c=d.i("p<h.E>")
b=A.E(new A.p(f,d.i("l(h.E)").a(new A.yZ(i,a5,g)),c),c.i("h.E"))
B.a.E(b,new A.yU(g))
f=A.N(b)
d=f.i("l(1)")
f=f.i("p<1>")
a=A.aU(new A.p(b,d.a(new A.yV(h)),f),o)
if(a!=null){a5.n(0,a.a)
B.a.n(a6,new A.f7(k,B.kt,a1))
continue}a0=A.aU(new A.p(b,d.a(new A.yW(h,B.a.lU(B.c.dq(A.m(j.h(0,"employer")).toUpperCase(),A.C("[^A-Z0-9]+",!0,!1)),new A.yX(),new A.yY()))),f),o)
if(a0!=null){a5.n(0,a0.a)
j=a0.f
g=h.b
f=j.b
if(g!==f)A.j(A.ae(f,g))
h=h.a
h=j.a.D(0,new A.Q(h.a.W(0),h.b))
e=B.e.h(0,f)
if(e==null)A.j(A.y(f,a2,a3))
if((h.b<=0?0:Math.max(h.gA().b,0))>e)A.j(A.A(f+" allows "+A.i(e)+" decimal places",h.k(0),a1))
B.a.n(a6,new A.f7(k,B.dA,new A.v(h,f)))}else{j=A.f(g.a,g.b,g.c)
h=A.f(r,q,p)
B.a.n(a6,new A.f7(k,B.d.u(j.b-h.b+1000*(j.a-h.a),864e8)<-5?B.dB:B.ku,a1))}}return a6},
KO(a,b){var s,r,q,p,o,n,m,l=A.d([],t.J)
for(s=A.KN(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
o=p.b
n=o===B.dA
if(n||o===B.dB){o=p.a
m=o.b
o=o.c
o=n?"The "+A.i(A.m(o.h(0,"period")))+" salary credit differs from the payslip's net pay by "+A.i(p.d)+".":"No salary credit for the "+A.i(A.m(o.h(0,"period")))+" payslip was seen by 5 days after its pay date."
l.push(new A.W("payslip:"+m,B.ab,m,o))}}return l},
eg:function eg(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.d=c},
yT:function yT(){},
yZ:function yZ(a,b,c){this.a=a
this.b=b
this.c=c},
yU:function yU(a){this.a=a},
yV:function yV(a){this.a=a},
yX:function yX(){},
yY:function yY(){},
yW:function yW(a,b){this.a=a
this.b=b},
Iq(a){var s
A.m(a)
if(a!=null)s=$.eI().aG(0,a).gq(0)>=9||A.xM(a)!==a
else s=!1
return s},
D5(a,b,c,d,e){var s,r,q,p
if(b!=="me"&&!A.a7(a.p3,t.N,t.o).C(b))return"no member "+b
if(c!=null){s=$.Fp()
s=!s.b.test(c)}else s=!1
if(s)return u.M
s=A.E(d,t.T)
s.push(e==null?null:e.a)
if(B.a.N(s,A.KW()))return"an entry looks like it holds a full number; only the last 4 characters are kept"
for(s=d.length,r=0;r<s;++r){q=d[r]
if(q!=null)p=q.length>80||B.c.B(q,"\n")
else p=!1
if(p)return"an entry is one line of at most 80 characters"}return null},
Jf(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="id",b5="personId",b6="file",b7="a date is written YYYY-MM-DD and is a real day",b8="sumAssured",b9="frequency",c0="medisave",c1=c4.e
switch(c4.d){case"document.set":r={}
r.a=null
try{q=c1
p=q.h(0,b4)
p.toString
A.b(p)
o=q.h(0,"kind")
o.toString
o=A.af(B.jD,A.b(o),t.il)
n=q.h(0,b5)
n.toString
A.b(n)
m=A.ay(q.h(0,"addedOn"))
m.toString
l=A.m(q.h(0,"label"))
k=A.m(q.h(0,"country"))
j=A.m(q.h(0,"last4"))
i=A.ay(q.h(0,"issued"))
h=A.ay(q.h(0,"expires"))
if(q.h(0,b6)==null)g=b3
else{g=q.h(0,b6)
g.toString
g=A.A2(t.f.a(g).F(0,t.N,t.X))}r.a=new A.cM(p,o,n,m,l,k,j,i,h,g,A.m(q.h(0,"replaces")),A.m(q.h(0,"fromProposal")))}catch(f){return"a document needs its kind, person and dates written YYYY-MM-DD"}for(q=["issued","expires"],e=0;e<2;++e){d=q[e]
if(J.as(c1,d)!=null&&A.ay(J.as(c1,d))==null)return b7}q=r.a
c=A.D5(c2,q.c,q.r,A.d([q.e,q.f],t.yH),r.a.y)
if(c!=null)return c
q=r.a
if(q.b===B.bd){p=q.e
p=p==null||B.c.G(p).length===0}else p=!1
if(p)return"a document of another kind needs a name"
p=q.w
if(p!=null){q=q.x
q=q!=null&&A.f(q.a,q.b,q.c).l(0,A.f(p.a,p.b,p.c))<0}else q=!1
if(q)return"a document expires after it is issued"
q=r.a
p=q.b
if(p.d===!1&&q.x!=null)return p.c+" has no expiry date"
b=q.z
if(b!=null){a=c3.gby().h(0,b)
if(a==null||b===r.a.a)return"no document "+b+" to renew"
q=a.b
p=r.a
if(q!==p.b||a.c!==p.c)return"a renewal is the same kind for the same person"
q=c3.gby()
p=A.o(q).i("L<2>")
if(!new A.p(new A.L(q,p),p.i("l(h.E)").a(new A.vb(r,b)),p.i("p<h.E>")).ga2(0))return"that document was renewed already"}q=r.a
c3.a.j(0,q.a,q)
c3.b.Y(0,r.a.a)
break
case"document.remove":a0=J.as(c1,b4)
if(typeof a0!="string"||!c3.gby().C(a0))return"no document "+A.i(a0)
c3.b.n(0,a0)
break
case"document.retrieve":a0=J.as(c1,"recordId")
a1=A.aU(new A.p(B.jw,t.rt.a(new A.vc(c1)),t.vL),t.hn)
if(typeof J.as(c1,"atUtc")=="string"){q=J.as(c1,"atUtc")
q.toString
a2=A.BK(A.b(q))}else a2=b3
if(typeof a0!="string"||a1==null||a2==null||c1.gag().N(0,new A.vd()))return"a retrieval holds only which record, what and when"
if(!c3.a.C(a0)&&!c3.d.C(a0)&&c2.a7.kY(a0)==null)return"no record "+a0
a2.H()
B.a.n(c3.e,new A.l_())
break
case"document.source":a0=J.as(c1,b4)
a3=J.as(c1,"gone")
if(typeof a0!="string"||!A.dX(a3)||!c3.a.C(a0))return"a source mark is a record and yes or no"
q=c3.c
if(a3)q.n(0,a0)
else q.Y(0,a0)
break
case"policy.set":s=null
try{q=c1
p=q.h(0,b4)
p.toString
A.b(p)
o=q.h(0,"insurer")
o.toString
A.b(o)
n=q.h(0,"type")
n.toString
n=A.af(B.jT,A.b(n),t.gv)
m=q.h(0,b5)
m.toString
A.b(m)
l=A.m(q.h(0,"plan"))
k=A.m(q.h(0,"ownerId"))
j=A.m(q.h(0,"last4"))
if(q.h(0,b8)==null)i=b3
else{i=q.h(0,b8)
i.toString
i=A.aJ(t.f.a(i).F(0,t.N,t.X))}h=A.m(q.h(0,"riders"))
g=A.ay(q.h(0,"starts"))
a4=A.ay(q.h(0,"ends"))
if(q.h(0,"premium")==null)a5=b3
else{a5=q.h(0,"premium")
a5.toString
a5=A.aJ(t.f.a(a5).F(0,t.N,t.X))}if(q.h(0,b9)==null)a6=b3
else{a6=q.h(0,b9)
a6.toString
a6=A.af(B.iD,A.b(a6),t.nU)}a7=A.m(q.h(0,"paymentMethod"))
a8=A.ay(q.h(0,"nextDue"))
if(q.h(0,b6)==null)a9=b3
else{a9=q.h(0,b6)
a9.toString
a9=A.A2(t.f.a(a9).F(0,t.N,t.X))}b0=A.m(q.h(0,"accountId"))
if(q.h(0,c0)==null)q=b3
else{q=q.h(0,c0)
q.toString
q=A.aJ(t.f.a(q).F(0,t.N,t.X))}s=new A.e8(p,o,n,m,l,k,j,i,h,g,a4,a5,a6,a7,a8,a9,b0,q)}catch(f){return"a policy needs its insurer, type, person and dates written YYYY-MM-DD"}for(q=["starts","ends","nextDue"],e=0;e<3;++e){d=q[e]
if(J.as(c1,d)!=null&&A.ay(J.as(c1,d))==null)return b7}if(B.c.G(s.b).length===0)return"a policy needs its insurer"
c=A.D5(c2,s.d,s.r,A.d([s.b,s.e,s.x,s.at],t.yH),s.ay)
if(c!=null)return c
if(s.f!=null&&s.f!=="me"&&!A.a7(c2.p3,t.N,t.o).C(s.f))return"no member "+A.i(s.f)
for(q=[s.w,s.Q],e=0;e<2;++e){b1=q[e]
if(b1!=null&&b1.a.l(0,$.M())<=0)return"an amount is more than zero"}q=!1
if(s.y!=null)if(s.z!=null){q=s.z
q.toString
p=s.y
p.toString
p=A.f(q.a,q.b,q.c).l(0,A.f(p.a,p.b,p.c))<0
q=p}if(q)return"a policy ends after it starts"
if(s.ch!=null&&!c2.gR().C(s.ch))return"no account "+A.i(s.ch)
b2=s.CW
if(b2!=null){if(s.Q==null||b2.b!==s.Q.b)return"the MediSave part is part of the premium"
q=b2.a
if(q.l(0,$.M())<=0||q.l(0,s.Q.a)>0)return"the MediSave part is more than zero and not more than the premium"}c3.d.j(0,s.a,s)
break
case"policy.remove":if(c3.d.Y(0,J.as(c1,b4))==null)return"no policy "+A.i(J.as(c1,b4))
break
default:return"not a record operation"}return b3},
z_(a,b){var s
if(b==="me")s="Me"
else{s=A.a7(a.p3,t.N,t.o).h(0,b)
s=s==null?null:s.b
if(s==null)s="someone removed"}return s},
cg:function cg(a,b){this.a=a
this.b=b},
l_:function l_(){},
rT:function rT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rU:function rU(a){this.a=a},
rV:function rV(){},
vb:function vb(a,b){this.a=a
this.b=b},
vc:function vc(a){this.a=a},
vd:function vd(){},
DG(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="invoiceId",a=A.d([],t.au)
for(s=a0.a7.b3(B.ah),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q].c
o=A.m(p.h(0,b))
if(o===a1){o=p.h(0,b)
o.toString
A.b(o)
n=p.h(0,"tenancyId")
n.toString
A.b(n)
m=p.h(0,"propertyId")
m.toString
A.b(m)
l=p.h(0,"invoiceNumber")
l.toString
A.b(l)
k=A.ay(p.h(0,"invoiceDate"))
k.toString
j=A.ay(p.h(0,"date"))
j.toString
i=p.h(0,"seriesId")
i.toString
A.b(i)
h=p.h(0,"seq")
h.toString
A.P(h)
g=p.h(0,"number")
g.toString
A.b(g)
f=p.h(0,"reason")
f.toString
A.b(f)
e=p.h(0,"taxable")
e.toString
A.P(e)
d=p.h(0,"cgst")
d.toString
A.P(d)
c=p.h(0,"sgst")
c.toString
A.P(c)
p=p.h(0,"tds")
p.toString
a.push(new A.c9(o,n,m,l,k,j,i,h,g,f,e,d,c,A.P(p)))}}B.a.E(a,new A.wC())
return a},
JY(a,b){return b.gf1()-B.a.a9(A.DG(a,"rental:"+b.a+":"+(""+b.c+"-"+B.c.af(B.d.k(b.d),2,"0"))),0,new A.wD(),t.S)},
K2(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.s),f=a.a7,e=b.b,d=f.a5(B.aw,e),c=d==null?null:A.m(d.c.h(0,"creditSeriesId"))
if(c==null||f.a5(B.af,c)==null)B.a.n(g,"The property's credit note series")
d=B.c.G(a1)
if(d.length===0)B.a.n(g,"Why it is credited")
s=b.e
r=a0.a
q=a0.b
if(A.f(r,q,a0.c).l(0,A.f(s.a,s.b,s.c))<0)B.a.n(g,"A date on or after the invoice")
p=e+":"+(""+r+"-"+B.c.af(B.d.k(q),2,"0"))
if(f.a5(B.aO,"gstr1-filed:"+p)!=null||f.a5(B.aO,"gst-filed:"+p)!=null)B.a.n(g,"A date in a month whose GSTR-1 is not filed yet")
o=A.JY(a,b)
if(a2<=0||a2>o)B.a.n(g,"An amount above 0 and at most the "+A.eE(o).k(0)+" not credited yet")
if(g.length!==0)return new A.t(null,g)
c.toString
f=f.a5(B.af,c)
f.toString
r=b.a
q=b.d
n="rental:"+r+":"
m=""+b.c+"-"
l=A.DG(a,n+(m+B.c.af(B.d.k(q),2,"0")))
k=A.B_(a,c,a0)
q=B.c.af(B.d.k(q),2,"0")
f=A.m(f.c.h(0,"pattern"))
f.toString
f=A.AN(f,k,A.hl(A.mi(a0),"{fy}"),null)
j=a2===o
i=j?b.geG()-B.a.a9(l,0,new A.wT(),t.S):A.jg(a2,new A.Q(A.aR(9),0))
h=j?b.ge6()-B.a.a9(l,0,new A.wU(),t.S):A.jg(a2,new A.Q(A.aR(9),0))
j=j?b.z-B.a.a9(l,0,new A.wV(),t.S):A.jg(a2,b.y)
return new A.t(new A.c9(n+(m+q),r,e,b.w,s,a0,c,k,f,d,a2,i,h,j),B.b)},
Jg(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8.e,a3=a2.h(0,"invoiceId"),a4=A.cF(a2.h(0,"date")),a5=a2.h(0,"taxable"),a6=a2.h(0,"reason")
if(typeof a3!="string"||a4==null||!A.cD(a5)||typeof a6!="string")return"a credit note names its invoice, date, amount and reason"
s=a7.a7
r=s.a5(B.ag,a3)
if(r==null)return"no invoice "+a3
q=A.K2(a7,A.Ch(r),a4,a6,a5)
p=q.a
if(p==null)return"not credited: "+B.a.S(q.b,", ").toLowerCase()
o=p.x
if(o!==a2.h(0,"number")||p.gdh()!==a2.h(0,"total"))return"the credit note changed since it was shown; make it again"
n=p.r
m=p.f
l=A.hl(A.mi(m),"{fy}")
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
s.eX(new A.b1(B.ah,"credit:"+n+":"+l+":"+k,A.R(["invoiceId",j,"tenancyId",i,"propertyId",h,"invoiceNumber",g,"invoiceDate",f,"date",m,"seriesId",n,"seq",k,"number",o,"reason",e,"taxable",d,"cgst",c,"sgst",b,"tds",a],t.N,t.X)))
e=a7.aC.c
a0=e.h(0,a3)
s=a0==null
a1=s?null:a0.y
if(!s&&a1!=null){s=a0.a
o=a0.c
n=a0.e
m=a0.f.a8(0,A.eE(p.gdh()))
l=a0.w
e.j(0,a3,new A.eZ(s,a0.b,o,a0.d,n,m,a0.r,l,a0.x,new A.iq(a1.a.a8(0,A.eE(d)),a1.b.a8(0,A.eE(c+b)),a1.c.a8(0,A.eE(a)))))}return null},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
wC:function wC(){},
wD:function wD(){},
wT:function wT(){},
wU:function wU(){},
wV:function wV(){},
eE(a){var s=a<0?"-":"",r=Math.abs(a)
return A.a6(A.ah(s+B.d.u(r,100)+"."+B.c.af(""+B.d.P(r,100),2,"0")),"INR")},
jg(a,b){return B.d.u(a*b.a4(0,new A.Q(A.aR(100),0)).az().aD(0)+5000,1e4)},
mi(a){var s=a.a
return a.b>=4?s:s-1},
hl(a,b){var s,r=new A.xo(),q=B.c.B(b,"-")?"-":"/"
A:{if("{yyyy-yyyy}"===b||"{yyyy/yyyy}"===b){s=""+a+q+(a+1)
break A}if("{yyyy-yy}"===b||"{yyyy/yy}"===b){s=""+a+q+A.i(r.$1(a+1))
break A}s=A.i(r.$1(a))+q+A.i(r.$1(a+1))
break A}return s},
AN(a,b,c,d){var s=null,r=2000+A.Z(B.c.X(c,0,2),s,s),q=d==null?r:d,p=t._,o=t.tj
return A.hs(A.hs(A.a4(a,"{yyyy}",""+q),A.C("\\{(n+)\\}",!0,!1),o.a(p.a(new A.xm(b))),s),$.Bk(),o.a(p.a(new A.xn(r))),s)},
Go(a,b,c){return new A.dm(a,b,c,A.jg(c,new A.Q(A.aR(9),0)),A.jg(c,new A.Q(A.aR(9),0)))},
Cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){return new A.t1(a1,p,a3,m,f,r,q,n,l,a0,s,a2,k,d,o,j,i,h,a,e,b,g,c)},
Ch(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a5.c,a4=a3.h(0,"month")
a4.toString
s=A.Z(B.c.X(A.b(a4),0,4),a2,a2)
a4=a3.h(0,"month")
a4.toString
r=A.Z(B.c.aa(A.b(a4),5),a2,a2)
a4=a3.h(0,"tenancyId")
a4.toString
A.b(a4)
q=a3.h(0,"propertyId")
q.toString
A.b(q)
p=A.ay(a3.h(0,"date"))
p.toString
o=a3.h(0,"seriesId")
o.toString
A.b(o)
n=a3.h(0,"seq")
n.toString
A.P(n)
m=a3.h(0,"number")
m.toString
A.b(m)
l=A.d([],t.t7)
k=a3.h(0,"lines")
k.toString
k=J.d4(t.j.a(k),t.mE)
j=k.$ti
k=new A.ar(k,k.gq(0),j.i("ar<O.E>"))
i=t.N
h=t.X
j=j.i("O.E")
while(k.m()){g=k.d
g=(g==null?j.a(g):g).F(0,i,h)
f=g.h(0,"description")
f.toString
A.b(f)
e=g.h(0,"sac")
e.toString
A.P(e)
d=g.h(0,"taxable")
d.toString
A.P(d)
c=g.h(0,"cgst")
c.toString
A.P(c)
g=g.h(0,"sgst")
g.toString
l.push(new A.dm(f,e,d,c,A.P(g)))}k=a3.h(0,"tdsPercent")
k.toString
k=A.ah(A.b(k))
j=a3.h(0,"tds")
j.toString
A.P(j)
i=a3.h(0,"tenantName")
i.toString
A.b(i)
h=a3.h(0,"legalName")
h.toString
A.b(h)
g=a3.h(0,"address")
g.toString
A.b(g)
f=a3.h(0,"placeOfSupply")
f.toString
A.b(f)
e=a3.h(0,"layout")
e.toString
A.b(e)
d=a3.h(0,"issuerName")
d.toString
A.b(d)
c=a3.h(0,"issuerAddress")
c.toString
A.b(c)
b=a3.h(0,"accountId")
b.toString
A.b(b)
a=a3.h(0,"bankName")
a.toString
A.b(a)
a0=a3.h(0,"accountLast4")
a0.toString
A.b(a0)
a1=a3.h(0,"ifsc")
a1.toString
A.b(a1)
return A.Cg(b,a0,A.m(a3.h(0,"accountNote")),g,a,p,a1,c,d,e,h,l,r,m,f,q,n,o,j,k,a4,i,s)},
DQ(a,b,c,d){var s=a.a7.a5(B.ag,"rental:"+b+":"+(""+c+"-"+B.c.af(B.d.k(d),2,"0")))
return s==null?null:A.Ch(s)},
B_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a7,h=i.a5(B.af,b).c,g=J.a1(h.h(0,"yearly"),!0),f=A.m(h.h(0,"pattern"))
f.toString
s=new A.yn(B.c.B(f,"{yyyy}"))
r=s.$1(c)
f=t.V
q=A.d([],f)
for(p=0;p<3;++p)for(o=i.b3(B.is[p]),n=o.length,m=0;m<o.length;o.length===n||(0,A.n)(o),++m){l=o[m]
if(A.m(l.c.h(0,"seriesId"))===b)q.push(l)}if(g){i=A.d([],f)
for(f=q.length,p=0;p<q.length;q.length===f||(0,A.n)(q),++p){l=q[p]
o=A.ay(l.c.h(0,"date"))
o.toString
if(J.a1(s.$1(o),r))i.push(l)}k=i}else k=q
if(k.length!==0){i=A.N(k)
return new A.ak(k,i.i("c(1)").a(new A.yl()),i.i("ak<1,c>")).e_(0,new A.ym())+1}if(q.length!==0)return 1
j=A.m(h.h(0,"startYear"))
if(g&&j!=null&&j!==r)i=1
else{i=A.aE(h.h(0,"startNumber"))
i.toString}return i},
Km(a,b){var s,r,q,p,o,n=a.a7,m=n.a5(B.ar,b)
if(m==null)return B.jy
s=n.a5(B.aL,b)
r=m.c
q=A.m(r.h(0,"propertyId"))
q.toString
p=n.a5(B.aw,q)
o=m.ar("rent")
q=A.d([],t.s)
if(A.m(r.h(0,"role"))!=="landlord")q.push("You are not the landlord of this tenancy")
r=o==null
if(r)q.push("The tenancy's rent")
if(!r&&o.b!=="INR")q.push("The rent in rupees")
if(s==null)q.push("The invoicing details")
r=p==null
if((r?null:A.m(p.c.h(0,"bookId")))==null)q.push("The property's book")
if(!r&&n.a5(B.aM,p.b)==null)q.push("The invoice issuer")
return q},
K3(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=" for the month of ",b0="description",b1="amount",b2="currency",b3="is not a supported currency",b4=A.DQ(b5,b6,b7,b8)
if(b4!=null)return new A.t(b4,B.b)
s=A.Km(b5,b6)
if(s.length!==0)return new A.t(a8,s)
r=b5.a7
q=r.a5(B.ar,b6)
q.toString
p=r.a5(B.aL,b6)
p.toString
o=q.c
n=A.m(o.h(0,"propertyId"))
n.toString
m=r.a5(B.aM,n)
m.toString
l=p.c
k=A.m(l.h(0,"layout"))
k.toString
j=b8-1
if(!(j>=0&&j<12))return A.a(B.a0,j)
i=B.a0[j]+" "+b7
j=A.d([],t.V)
for(h=r.b3(B.bs),g=h.length,f=0;f<h.length;h.length===g||(0,A.n)(h),++f){e=h[f]
if(A.m(e.c.h(0,"tenancyId"))===b6)j.push(e)}h=A.m(l.h(0,"service"))
g=A.aE(l.h(0,"sac"))
if(g==null)g=997212
q=A.d([A.Go(A.i(h)+a9+i,g,q.ar("rent").ghh())],t.t7)
for(h=j.length,g=t.f,d=k==="2",c=t.N,b=t.X,f=0;f<j.length;j.length===h||(0,A.n)(j),++f){a=j[f].c
a0=d?A.i(A.m(a.h(0,b0)))+" "+i:A.i(A.m(a.h(0,b0)))+a9+i
a1=A.aE(a.h(0,"sac"))
a1.toString
if(g.b(a.h(0,b1))){a=a.h(0,b1)
a.toString
a=g.a(a).F(0,c,b)
a2=a.h(0,b1)
a2.toString
a2=A.ah(A.b(a2))
a=a.h(0,b2)
a.toString
A.b(a)
a3=new A.v(a2,a)
a4=B.e.h(0,a)
if(a4==null)A.j(A.y(a,b2,b3))
if((a2.b<=0?0:Math.max(a2.gA().b,0))>a4)A.j(A.A(a+" allows "+A.i(a4)+" decimal places",a2.k(0),a8))
a=a3}else a=a8
a2=a.a
a=a.b
a4=B.e.h(0,a)
if(a4==null)A.j(A.y(a,b2,b3))
a=new A.Q(a2.a,a2.b-a4).az().aD(0)
q.push(new A.dm(a0,a1,a,B.d.u(a*new A.Q(A.aR(9).a4(0,A.aR(100)),0).az().aD(0)+5000,1e4),B.d.u(a*new A.Q(A.aR(9).a4(0,A.aR(100)),0).az().aD(0)+5000,1e4)))}j=A.m(l.h(0,"seriesId"))
j.toString
a5=A.B_(b5,j,b9)
a6=p.eJ("tdsPercent")
if(a6==null)a6=$.FH()
a7=B.a.a9(q,0,new A.wX(),t.S)
p=b5.gR().h(0,A.m(l.h(0,"accountId")))
p.toString
r=A.m(r.a5(B.af,j).c.h(0,"pattern"))
r.toString
r=A.AN(r,a5,A.hl(A.mi(b9),"{fy}"),a8)
h=A.jg(a7,a6)
o=A.m(o.h(0,"otherParty"))
o.toString
g=A.m(l.h(0,"legalName"))
g.toString
d=A.m(l.h(0,"address"))
d.toString
c=A.m(l.h(0,"placeOfSupply"))
c.toString
m=m.c
b=A.m(m.h(0,"name"))
b.toString
m=A.m(m.h(0,"address"))
m.toString
a=p.b
a=B.c.aa(a,a.length-4)
a0=A.m(l.h(0,"ifsc"))
a0.toString
l=k==="3"?a8:A.m(l.h(0,"accountNote"))
return new A.t(A.Cg(p.a,a,l,d,p.c,b9,a0,m,b,k,g,q,b8,r,c,n,a5,j,h,a6,b6,o,b7),B.b)},
Jh(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="personal",a0="prop.income",a1=a7.e,a2=a1.h(0,"tenancyId"),a3=a1.h(0,"month"),a4=A.cF(a1.h(0,"date")),a5=typeof a3=="string"?A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1).aj(a3):b
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
if(A.DQ(a6,a2,q,p)!=null)return"that month is already invoiced"
o=A.K3(a6,a2,q,p,a4)
n=o.a
if(n==null)return"not invoiced: "+B.a.S(o.b,", ").toLowerCase()
s=n.w
if(s!==a1.h(0,"number")||n.gdh()!==a1.h(0,"total"))return"the invoice changed since it was shown; make it again"
r=a6.a7
m=r.a5(B.ar,a2)
m.toString
l=A.m(r.a5(B.aw,n.b).c.h(0,"bookId"))
l.toString
k=A.d([],t.s)
for(j=t.N,i=A.a7(a6.d,j,t.G).gU(),i=i.gv(i),h=a6.f,g=l==="personal";i.m();){f=i.gt()
e=f.b
d=h.h(0,l)
if(d==null)d=g?a:b
c=!1
if(e===(d==="member"?a:d)){e=f.a
if(!(e==="income"||B.c.bB(e,".income"))){e=f.d
if(e!=null)e=e==="income"||B.c.bB(e,".income")
else e=c}else e=!0}else e=c
if(e)k.push(f.a)}B.a.bh(k)
i=n.a
h=n.c
g=n.d
i="rental:"+i+":"
h=""+h+"-"
r.eX(new A.b1(B.ag,i+(h+B.c.af(B.d.k(g),2,"0")),n.f2()))
r=B.c.af(B.d.k(g),2,"0")
g=B.c.af(B.d.k(g),2,"0")
m=A.m(m.c.h(0,"otherParty"))
m.toString
f=n.e
e=A.eE(n.gdh())
k=B.a.B(k,a0)?a0:A.aU(k,j)
a6.aC.c.j(0,i+(h+r),new A.eZ(i+(h+g),l,m,s,f,e,k,"owner",b,new A.iq(A.eE(n.gf1()),A.eE(n.geG()+n.ge6()),A.eE(n.z))))
return b},
xo:function xo(){},
xm:function xm(a){this.a=a},
xn:function xn(a){this.a=a},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t1:function t1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
t4:function t4(){},
t2:function t2(){},
t3:function t3(){},
yn:function yn(a){this.a=a},
yl:function yl(){},
ym:function ym(){},
wX:function wX(){},
Gv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.h(0,"bookId")
h.toString
A.b(h)
s=a.h(0,"period")
s.toString
A.b(s)
r=a.h(0,"version")
r.toString
A.P(r)
q=a.h(0,"title")
q.toString
A.b(q)
q=A.d([],t.D6)
p=a.h(0,"rows")
p.toString
o=t.j
p=J.T(o.a(p))
n=t.N
while(p.m()){m=p.gt()
m.toString
l=J.d4(o.a(m),n)
k=l.a
j=J.ap(k)
i=l.$ti.y[1]
q.push(new A.ir(i.a(j.h(k,0)),i.a(j.h(k,1)),i.a(j.h(k,2))))}return new A.f1(h,s,r,q)},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=d},
KD(a){var s=a.d,r=A.a6($.M(),s.a.b),q=new A.y1(s,r),p=new A.y3(B.du,r)
return new A.oB(a.c.a,B.du.gU().a9(0,r,new A.y2(),t.B),J.FK(q.$1(B.aA),q.$1(B.b3)).a8(0,p.$1(B.aA)).a8(0,p.$1(B.b3)),J.FL(q.$1(B.bQ),p.$1(B.bQ)),s.f.a8(0,p.$1(null)))},
oB:function oB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
y1:function y1(a,b){this.a=a
this.b=b},
y3:function y3(a,b){this.a=a
this.b=b},
y2:function y2(){},
DR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.AD,h=A.w(t.N,i)
for(s=a.to.a,i=A.aN(new A.L(s,A.o(s).i("L<2>")),i),s=i.length,r=c.a,q=c.b,p=c.c,o=0;o<s;++o){n=i[o]
if(n.d===b){m=n.f
m=A.f(m.a,m.b,m.c).l(0,A.f(r,q,p))>0}else m=!0
if(m)continue
m=n.a
l=h.h(0,m)
if(l!=null){k=n.f
j=l.f
j=A.f(k.a,k.b,k.c).l(0,A.f(j.a,j.b,j.c))>0
k=j}else k=!0
if(k)h.j(0,m,n)}return h},
AI(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="currency",a="is not a supported currency"
for(s=A.aN(a0.fx,t.v),r=s.length,q=a1.b,p=a1.a,o=a2.a,n=a2.b,m=a2.c,l=a1.w,k=l.a,j=l.b,l=l.c,i=null,h=0;h<r;++h){g=s[h]
if(g.b===p){f=g.d
e=f.a
d=f.b
f=f.c
f=A.f(e,d,f).l(0,A.f(o,n,m))>0||A.f(e,d,f).l(0,A.f(k,j,l))<0}else f=!0
if(f)continue
if(i!=null){f=g.d
e=i.c
e=A.f(f.a,f.b,f.c).l(0,A.f(e.a,e.b,e.c))<=0
f=e}else f=!1
if(f)continue
f=g.r!=null?B.mq:B.mr
i=new A.bw(q,g.f,g.d,f,a1)}if(a1.d===B.o)for(s=a3.gU(),s=s.gv(s);s.m();){r=s.gt()
if(r.r!==p)continue
if(i!=null){o=r.f
n=i.c
n=A.f(o.a,o.b,o.c).l(0,A.f(n.a,n.b,n.c))<=0
o=n}else o=!1
if(o)continue
o=r.e
n=o.b
m=$.M()
c=B.e.h(0,n)
if(c==null)A.j(A.y(n,b,a))
if((m.b<=0?0:Math.max(m.gA().b,0))>c)A.j(A.A(n+" allows "+A.i(c)+" decimal places",m.k(0),null))
o=o.a
o=m.D(0,new A.Q(o.a.W(0),o.b))
c=B.e.h(0,n)
if(c==null)A.j(A.y(n,b,a))
if((o.b<=0?0:Math.max(o.gA().b,0))>c)A.j(A.A(n+" allows "+A.i(c)+" decimal places",o.k(0),null))
i=new A.bw(q,new A.v(o,n),r.f,B.c2,a1)}return i},
E2(a,b,c,d){var s,r,q,p,o,n=A.DR(a,b,d),m=A.d([],t.oc),l=A.d([],t.k),k=a.gR().gU(),j=A.o(k),i=j.i("p<h.E>"),h=A.E(new A.p(k,j.i("l(h.E)").a(new A.ye(b,d)),i),i.i("h.E"))
B.a.E(h,new A.yf())
for(k=h.length,s=0;s<h.length;h.length===k||(0,A.n)(h),++s){r=h[s]
q=r.d===B.y?null:A.AI(a,r,d,n)
if(q==null)B.a.n(l,r)
else B.a.n(m,q)}for(k=new A.a2(n,n.r,n.e,A.o(n).i("a2<2>"));k.m();){j=k.d
if(j.c!==B.c1)i=j.e.a.l(0,$.M())===0
else i=!0
if(i)continue
B.a.n(m,new A.bw(B.c.G(j.b),j.e,j.f,B.c2,null))}p=new A.yg(m)
k=A.ab(t.N)
for(j=m.length,s=0;s<m.length;m.length===j||(0,A.n)(m),++s)k.n(0,m[s].b.b)
k.Y(0,c)
j=p.$1(c)
i=A.d([],t.C7)
k=A.E(k,k.$ti.c)
B.a.bh(k)
o=k.length
s=0
for(;s<k.length;k.length===o||(0,A.n)(k),++s)i.push(p.$1(k[s]))
return new A.kE(j,i,l)},
E3(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=g*12+e-1,i=A.d([],t.sp)
for(s=j-c+1,r=f.a,q=f.b,p=f.c;s<=j;++s){o=A.f(B.d.u(s,12),B.d.P(s,12)+1+1,1).aM(-864e8)
n=A.b2(o)
m=A.bk(o)
l=A.aH(o)
k=new A.K(n,m,l)
i.push(A.E2(a,b,d,A.f(n,m,l).l(0,A.f(r,q,p))>0?f:k))}return i},
h5:function h5(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
tF:function tF(){},
tG:function tG(){},
kE:function kE(a,b,c){this.b=a
this.c=b
this.d=c},
ye:function ye(a,b){this.a=a
this.b=b},
yf:function yf(){},
yg:function yg(a){this.a=a},
yh:function yh(){},
yi:function yi(a){this.a=a},
yj:function yj(){},
yk:function yk(){},
La(a,b,c,d,e){var s,r,q,p,o,n,m=B.c.G(a.b)
if(B.c.G(a.a).length===0)return"a value needs its holding"
s=m.length
if(s===0)return"give the value a name"
if(s>60)return"the name is at most 60 characters"
if($.eI().aG(0,m).gq(0)>=9)return"the name looks like it holds a full account number; leave the number out"
s=a.d
if(!c.a.C(s))return"no book "+s
r=a.e
q=r.b
if(!B.e.C(q))return"currency "+q+" is not supported"
if(r.a.l(0,$.M())<0)return"a value is zero or more"
r=a.f
if(A.f(r.a,r.b,r.c).l(0,A.f(e.a,e.b,e.c))>0)return"the as of date cannot be in the future"
p=a.r
r=a.c
if(r===B.c1){o=p==null?null:b.a.h(0,p)
if(o==null||o.d!==B.o)return"a loan balance is for one of your loans"
n=o.e
if(n!==q)return"the loan balance must be in "+n
if(o.r!==s)return"the loan is in another book"}else if(p!=null)return"only a loan balance names an account"
if(d!=null)s=d.c!==r||d.e.b!==q||d.r!=p
else s=!1
if(s)return"this holding is a "+d.c.b+" in "+d.e.b+"; add a new one instead"
return null},
cB:function cB(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Ll(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=t.xG,a0=A.ab(a)
for(s=a2.length,r=0;r<a2.length;a2.length===s||(0,A.n)(a2),++r){q=a2[r]
a0.n(0,new A.bx(q.a,q.b,q.c))}p=A.w(a,t.W)
for(a=a1.b_(),s=J.T(a.a),a=new A.S(s,a.b,a.$ti.i("S<1>"));a.m();){o=s.gt()
if(o.Q!=null){n=o.d
n=n!==B.k&&n!==B.w}else n=!0
if(n)continue
n=o.b
m=o.z
if(m==null)m=""
l=A.C("\\s+",!0,!1)
k=new A.bx(n,B.c.G(A.a4(m.toUpperCase(),l," ")),o.e)
if(!a0.B(0,k))continue
j=p.h(0,k)
if(j==null)i=1
else{n=o.x
m=j.x
i=A.f(n.a,n.b,n.c).l(0,A.f(m.a,m.b,m.c))}if(i<=0)if(i===0){n=o.a
m=j.a
if(n===m)n=0
else n=n<m?-1:1
n=n>0}else n=!1
else n=!0
if(n)p.j(0,k,o)}a=A.d([],t.qt)
for(a0=a2.length,s=a1.e,o=t.N,n=t.R,m=a1.b.a,r=0;r<a2.length;a2.length===a0||(0,A.n)(a2),++r){q=a2[r]
l=A.ab(o)
for(h=q.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.n)(h),++f){e=m.h(0,h[f])
e=e==null?b:e.c
if(e!=null)l.n(0,e)}l=A.Lu(q,l,A.a7(s,o,n).gU())
if(l==null){d=p.h(0,new A.bx(q.a,q.b,q.c))
A:{if(d!=null){l=B.a.N(h,new A.zt(a1))
c=d}else{c=b
l=!1}if(l){l=c.d
l.toString
h=c.Q
h.toString
h=new A.hW(l,h,b)
l=h
break A}l=b
break A}}a.push(l)}return a},
Lu(a,b,c){var s,r,q,p
if(b.a===0)return null
s=A.o(c)
r=s.i("p<h.E>")
q=A.E(new A.p(c,s.i("l(h.E)").a(new A.zL(a,b)),r),r.i("h.E"))
B.a.E(q,new A.zM())
if(q.length===0||!B.a.bq(q,new A.zN(q)))return null
p=B.a.ga_(q)
return new A.hW(p.d,p.e,p.a)},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
zt:function zt(a){this.a=a},
zL:function zL(a,b){this.a=a
this.b=b},
zK:function zK(a,b){this.a=a
this.b=b},
zM:function zM(){},
zN:function zN(a){this.a=a},
Ls(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.w(t.xG,t.C)
for(s=a.eS(b),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gt()
p=q.d
if(p!=null)p=(p===B.k||p===B.w)&&q.Q==null
else p=!0
if(!p)continue
p=q.z
if(p==null)p=""
o=A.C("\\s+",!0,!1)
n=B.c.G(A.a4(p.toUpperCase(),o," "))
if(n.length===0)continue
J.bT(f.aK(new A.bx(n,q.f.b,q.e),new A.zD()),q)}for(s=f.$ti,r=new A.a2(f,f.r,f.e,s.i("a2<2>"));r.m();)J.mt(r.d,new A.zE())
r=A.d([],t.wp)
for(s=new A.aa(f,s.i("aa<1,2>")).gv(0),q=t.B,p=t.s;s.m();){o=s.d
m=o.a
l=m.b
k=o.b
o=J.b4(k)
j=o.ga_(k).z
j.toString
j=B.c.G(j)
i=A.d([],p)
for(h=o.gv(k);h.m();)i.push(h.gt().a)
h=$.M()
g=B.e.h(0,l)
if(g==null)A.j(A.y(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gA().b,0))>g)A.j(A.A(l+" allows "+A.i(g)+" decimal places",h.k(0),null))
r.push(new A.cv(b,m.a,m.c,j,i,o.a9(k,new A.v(h,l),new A.zF(),q)))}B.a.E(r,A.L0())
return r},
JO(a,b){var s,r,q,p=t.t5
p.a(a)
p.a(b)
s=B.d.l(b.e.length,a.e.length)
if(s!==0)return s
r=B.c.l(a.b,b.b)
if(r!==0)return r
q=B.c.l(a.f.b,b.f.b)
return q!==0?q:B.d.l(b.c.a,a.c.a)},
DB(a0,a1,a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="categoryId",a={}
a.a=a7
s=new A.wi(a,a4,a5)
r=t.Y
q=A.d([],r)
for(p=a1.e,o=p.length,n=a0.b.a,m="bulk:"+a2,l=m+":",k=t.N,j=t.X,i=a8.b,h="bulk."+a2,g=0;g<p.length;p.length===o||(0,A.n)(p),++g){f=p[g]
e=n.h(0,f)
d=!1
if(e!=null){d=e.d
if(d!=null)d=(d===B.k||d===B.w)&&e.Q==null
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
B.a.a1(q,A.d([s.$3(m+":rule","rule.propose",p),s.$3(m+":confirm","rule.confirm",A.R(["id",h],k,j))],r))}return q},
JF(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.Y)
for(s=b.e,r=s.length,q=a.b.a,p="bulk:"+c+":",o=t.N,n=t.X,m=f,l=0;l<s.length;s.length===r||(0,A.n)(s),++l){k=s[l]
j=q.h(0,k)
if(j!=null)i=j.d==null
else{j=null
i=!1}if(i){i=j.dx
h=m+1
g.push(new A.al(p+k+":v"+i,d,m,"movement.markTransfer",A.R(["movementId",k,"baseVersion",i],o,n),e))
m=h}}return g},
cv:function cv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
zD:function zD(){},
zE:function zE(){},
zF:function zF(){},
wi:function wi(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b){this.a=a
this.b=b},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
KZ(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=288e8,a6=t.N,a7=t.i,a8=A.w(a6,a7),a9=new A.za(b1),b0=new A.z8(a8)
B.a.a0(A.aN(b1.c,a7),b0)
for(a7=b1.gm0(),s=a7.length,r=t.s,q=0;q<s;++q){p=a7[q]
o=A.I7(b1,p)
if(o!=null){n=o.a
m=p.CW
if(m==null){m=p.w
l=m.H()
m.H()
k=l.aM(a5)
l=new A.K(A.b2(k),A.bk(k),A.aH(k))
m=l}m=A.JW(b1,n,m)
n=m}else n=!1
if(n)continue
n=A.d([],r)
m=p.r
if(m!=null)n.push(m.k(0))
m=p.y
if(m!=null)n.push(m)
j=B.a.S(n,", ")
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
if(n){m=b1.gR().gU()
l=A.o(m)
e=new A.p(m,l.i("l(h.E)").a(new A.zb(p)),l.i("p<h.E>")).gq(0)>1}else e=!1
m=p.a
l=j.length===0?"":" ("+j+")"
if(e)n=": two accounts are called "+f+"; change one alias."
else if(n)n=" for that account to be added."
else if(g)n=": it shows only part of the number, so pick its account."
else n=i!=null?" for one account of that bank and currency ending in those digits.":": it does not say which account; the statement shows it."
b0.$1(new A.W("held:"+m,B.az,m,"A message for "+f+l+" waits"+n))}for(a7=b1.gie(),s=a7.length,q=0;q<s;++q){p=a7[q]
d=p.x
if(d==null)d=p.w
r=p.a
n=p.ay
if(n==null)n=p.d
if(n==null)n=p.b.b
if(d==null)m=""
else{m=d.H()
d.H()
k=m.aM(a5)
m=" on "+new A.K(A.b2(k),A.bk(k),A.aH(k)).k(0)}b0.$1(new A.W("suspect:"+r,B.bH,r,"A message from "+n+m+" may not be from the bank: "+A.i(p.ax)+". Check it in the bank app, not through anything in the message. Nothing from it was recorded."))}for(a7=A.aN(b1.ok,t.pL),s=a7.length,q=0;q<s;++q){c=a7[q]
o=c.c
if(o==null)o="an account it does not name"
r=c.f
b=r==null?"":" on "+r.k(0)
r=c.a
n=c.r
m=n?B.bM:B.bI
if(n){n=c.d
n=n==null?"":" of "+n.k(0)
n=c.b+" says a payment"+n+" for "+o+" failed"+b+". Check it in the bank app; nothing was recorded."}else{n=c.d
l=c.b
n=(n==null?l+" sent a payment reminder for "+o+b+".":l+" reminds you of "+n.k(0)+" due on "+o+b+".")+" A reminder is not a payment: nothing is marked paid."}b0.$1(new A.W("reminder:"+r,m,r,n))}for(a7=A.a7(b1.rx,a6,t.y6).gU(),a7=a7.gv(a7),s=b1.b,r=s.a,s=s.c;a7.m();){n=a7.gt()
m=r.h(0,n.a)
if(m!=null){l=s.h(0,m.a)
if(l==null){l=m.f.b
h=$.M()
a=new A.v(h,l)
a0=B.e.h(0,l)
if(a0==null)A.j(A.y(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gA().b,0))>a0)A.j(A.A(l+" allows "+A.i(a0)+" decimal places",h.k(0),null))
l=a}l=l.a.l(0,m.f.a)>=0}else l=!0
if(l)continue
l=m.f.k(0)
h=m.z
h=h==null?"":" at "+B.c.G(h)
j=l+h+" on "+m.w.k(0)
a1=n.d
n=m.a
if(a1==null)m="You do not recognise "+j+" on "+A.i(a9.$1(m.c))+". Check it in the bank's app and report it there if it is not yours; SanthIQ does not dispute anything. It counts as spending until the bank reverses it."
else{m=a1.H()
a1.H()
k=m.aM(a5)
m="You reported "+j+" to the bank on "+new A.K(A.b2(k),A.bk(k),A.aH(k)).k(0)+". It counts as spending until the reversal arrives and is linked."}b0.$1(new A.W("flag:"+n,B.bJ,n,m))}B.a.a0(A.Lc(b1),b0)
B.a.a0(A.Ld(b1),b0)
B.a.a0(A.K8(b1).b,b0)
B.a.a0(A.K7(b1).b,b0)
B.a.a0(A.KK(b1).b,b0)
a2=A.K9(b1,b2)
B.a.a0(a2.c,b0)
for(a7=a2.b,s=a7.length,q=0;q<a7.length;a7.length===s||(0,A.n)(a7),++q){a3=a7[q]
n=r.h(0,a3.a)
n.toString
m=r.h(0,a3.b)
l=n.a
b0.$1(new A.W("transfer?:"+l+":"+m.a,B.N,l,n.f.k(0)+" left "+A.i(a9.$1(n.c))+" on "+n.w.k(0)+" and "+m.f.k(0)+" reached "+A.i(a9.$1(m.c))+" on "+m.w.k(0)+": if this is a move between your own accounts, pair them."))}B.a.a0(A.L2(b1),b0)
B.a.a0(A.K_(b1),b0)
B.a.a0(A.Kn(b1),b0)
B.a.a0(A.KE(b1),b0)
B.a.a0(A.L8(b1),b0)
a7=A.ab(a6)
for(s=A.Ef(b1),r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){a4=s[q]
a7.n(0,"missing-statement:"+a4.a+":"+a4.b.k(0))}s=A.KB(b1,b2)
r=A.N(s)
new A.p(s,r.i("l(1)").a(new A.zc(a7)),r.i("p<1>")).a0(0,b0)
B.a.a0(A.KV(b1),b0)
B.a.a0(A.JN(b1,b2),b0)
B.a.a0(A.KO(b1,b2),b0)
B.a.a0(A.Kz(b1),b0)
B.a.a0(A.JH(b1),b0)
r=a8.$ti.i("L<2>")
a7=r.i("p<h.E>")
a6=A.E(new A.p(new A.L(a8,r),r.i("l(h.E)").a(new A.zd(b1,A.a7(b1.y1,a6,t.c),b2)),a7),a7.i("h.E"))
B.a.E(a6,new A.ze())
return a6},
za:function za(a){this.a=a},
z8:function z8(a){this.a=a},
z9:function z9(a){this.a=a},
zb:function zb(a){this.a=a},
zc:function zc(a){this.a=a},
zd:function zd(a,b,c){this.a=a
this.b=b
this.c=c},
ze:function ze(){},
DS(a,b,c){var s,r=null
A:{s=A.Ej(a,b)
if(!s){s=b===B.p?"money coming in is never an expense: file it as income or link it as a refund (INC-03)":"money going out is never income (INC-03)"
break A}if(B.G===a&&b!==B.p){s="a refund is money coming back"
break A}if(B.L===a){if(c==null)s=r
else s=c.gaP()||c.d===B.a5
s=s!==!0}else s=!1
if(s){s="a transfer is on a bank account"
break A}if(B.U===a){if(b===B.q){s=c==null?r:c.gaP()
s=s===!0}else s=(c==null?r:c.d)===B.x
s=!s}else s=!1
if(s){s="a card bill payment is a bank debit or a card credit"
break A}s=r
break A}return s},
KH(a){var s
t.W.a(a)
s=a.d
if(s!=null)s=(s===B.k||s===B.w)&&a.Q==null
else s=!0
return s},
ba:function ba(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
AY(a,b,c,d,e){var s=J.mv(b,new A.xO(a,d,c,e)),r=A.E(s,s.$ti.i("h.E"))
B.a.E(r,new A.xP())
if(r.length===0)return new A.fQ()
return B.a.bq(r,new A.xQ(B.a.ga_(r)))?new A.ik(B.a.ga_(r)):new A.fV(r)},
JI(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.d([],t.Y)
for(s=a0.b_(),r=s.$ti,r.i("l(h.E)").a(A.ji()),s=s.gv(0),r=new A.S(s,A.ji(),r.i("S<h.E>")),q=t.N,p=t.X,o=a0.r.a,n=a0.e,m=t.R,l=a3;r.m();){k=s.gt()
j=A.a7(n,q,m).gU()
i=k.z
if(i==null)h=new A.fQ()
else{g=i.toUpperCase()
f=A.C("\\s+",!0,!1)
g=B.c.G(A.a4(g,f," "))
f=k.b
h=A.AY(g,j,k.c,f,k.e)}if(!(h instanceof A.ik))continue
j=h.a
g=j.d
f=k.e
if(A.DS(g,f,o.h(0,k.c))!=null)continue
if(!A.L1(j,k))continue
e=j.y
if(e!=null){if(f!==B.q||k.b===e)continue
g=j.a
f=k.a
k=k.dx
d=l+1
B.a.n(a,new A.al("rule:"+g+":"+f+":v"+k,a1,l,"movement.forBook",A.R(["movementId",f,"baseVersion",k,"bookId",e,"categoryId",j.e,"ruleId",g],q,p),a2))
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
B.a.n(a,new A.al("rule:"+f+":"+c+":v"+k,a1,l,"movement.classify",b,a2))
l=d}return a},
L2(a){var s,r,q,p,o,n,m,l,k=A.d([],t.kz)
for(s=A.a7(a.e,t.N,t.R).gU(),s=s.gv(s);s.m();){r=s.gt()
if(r.f)k.push(r)}if(k.length<2)return B.ji
q=new A.zg(A.w(t.Cw,t.cT),k)
k=A.d([],t.J)
for(s=a.b_(),r=s.$ti,r.i("l(h.E)").a(A.ji()),s=s.gv(0),r=new A.S(s,A.ji(),r.i("S<h.E>"));r.m();){p=s.gt()
o=q.$1(p)
if(o instanceof A.fV){n=o.a
m=p.a
l=A.N(n)
k.push(new A.W("rules-disagree:"+m,B.bF,m,"Rules "+new A.ak(n,l.i("e(1)").a(new A.zf()),l.i("ak<1,e>")).S(0," and ")+" disagree about "+A.i(p.z)+"; choose one or change a rule."))}}return k},
L1(a,b){var s,r=b.z,q=r==null?null:A.L9(r,b.e)
if(q!=null&&q!==a.d)return!1
s=a.Q
if(!a.z&&s!=null&&b.y.c.hc(s))return!1
return!0},
cx:function cx(){},
fQ:function fQ(){},
ik:function ik(a){this.a=a},
fV:function fV(a){this.a=a},
xO:function xO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xP:function xP(){},
xQ:function xQ(a){this.a=a},
zg:function zg(a,b){this.a=a
this.b=b},
zh:function zh(a,b,c){this.a=a
this.b=b
this.c=c},
zf:function zf(){},
L9(a,b){var s,r,q,p=A.C("[^A-Za-z0-9]+",!0,!1)
p=A.a4(a,p," ")
s=A.C("\\s+",!0,!1)
r=B.c.G(A.a4(p.toUpperCase(),s," "))
p=new A.zl(r)
if(!p.$1(B.iY)){s=A.C("(?:^| )"+A.hq("FUNDS TRANSFER")+"(?: |$)",!0,!1)
if(s.b.test(r)){s=A.C("(?:^| )"+A.hq("OWN")+"(?: |$)",!0,!1)
s=s.b.test(r)}else s=!1}else s=!0
if(s)return B.L
if(p.$1(B.jK))return B.U
q=b===B.p
if(q&&p.$1(B.jM))return B.G
if(!q&&p.$1(B.jQ))return B.k
if(q){p=A.C("(?:^| )"+A.hq("INTEREST")+"(?: |$)",!0,!1)
p=p.b.test(r)}else p=!1
if(p)return B.w
return null},
zl:function zl(a){this.a=a},
zm:function zm(a){this.a=a},
FW(a){var s=new A.mC(a)
s.$1("backupKeepManual")
s.$1("backupKeepDaily")
s.$1("passphraseIntervalDays")
return new A.mB(s.$1("staleBalanceDays"))},
mB:function mB(a){this.d=a},
mC:function mC(a){this.a=a},
GX(a){var s,r,q,p,o,n,m=a.h(0,"id")
m.toString
A.b(m)
s=a.h(0,"title")
s.toString
A.b(s)
r=A.d([],t.EP)
q=a.h(0,"items")
q.toString
q=J.d4(t.j.a(q),t.I)
p=q.$ti
q=new A.ar(q,q.gq(0),p.i("ar<O.E>"))
p=p.i("O.E")
while(q.m()){o=q.d
if(o==null)o=p.a(o)
n=o.h(0,"id")
n.toString
A.b(n)
o=o.h(0,"text")
o.toString
r.push(new A.l3(n,A.b(o)))}q=a.h(0,"check")
q.toString
A.b(q)
return new A.l4(m,s,r)},
l3:function l3(a,b){this.a=a
this.b=b},
l4:function l4(a,b,c){this.a=a
this.b=b
this.c=c},
td:function td(a){this.a=a},
E4(a){var s,r=B.c.G(a).toUpperCase(),q=A.C("[ -]",!0,!1),p=A.a4(r,q,"")
q=$.Fx()
if(q.b.test(p))return p
s=B.c.eZ(B.c.eZ(r,$.Fb(),""),$.Fc(),"")
q=$.F6()
return q.b.test(s)?s:null},
GY(a){var s=t.c5,r=A.E(a,s)
B.a.E(r,new A.ti())
return new A.th(A.aN(r,s))},
L7(a,b,c,d,e,f){var s,r=t.N,q=t.X,p=A.w(r,q)
p.j(0,"id",a.a)
p.j(0,"kind",a.b.b)
s=a.c
if(s!=null)p.j(0,"institution",s)
r=A.ox(p,r,q)
if(f)r.j(0,"removed",!0)
return new A.al(d,c,b,"sms.sender",r,e.H())},
c_:function c_(a,b,c){this.c=a
this.a=b
this.b=c},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
th:function th(a){this.a=a},
ti:function ti(){},
kK:function kK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ld(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.w(d,t.C)
for(s=a.b_(),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gt()
if(q.CW==null)J.bT(c.aK(q.c,new A.zo()),q)}d=A.w(d,t.sO)
for(s=new A.aa(c,c.$ti.i("aa<1,2>")).gv(0),r=t.W,q=t.qM;s.m();){p=s.d
o=p.a
n=p.b
p=A.d([],q)
for(m=A.bK(n,0,r),l=J.T(m.a),k=m.b,m=new A.at(l,k,A.o(m).i("at<1>"));m.m();){j=m.c
j=j>=0?new A.t(k+j,l.gt()):A.j(A.aq())
p.push(new A.t(j.a,j.b))}B.a.E(p,new A.zp())
d.j(0,o,p)}i=new A.zq(d)
d=A.d([],t.J)
for(s=A.aN(a.fx,t.v),r=s.length,h=0;h<r;++h){g=s[h]
for(q=g.d,p=i.$3(g.b,g.c,q),m=p.$ti,p=new A.dV(p.a(),m.i("dV<1>")),l="unmatched:"+g.a+":",m=m.c;p.m();){k=p.b
if(k==null)k=m.a(k)
j=k.a
f=k.f.k(0)
e=k.z
e=e==null?"":" at "+e
d.push(new A.W(l+j,B.az,j,"An alert for "+f+e+" on "+k.w.k(0)+" is not on the statement to "+q.k(0)+". It may post on the next one; otherwise check it in the bank app."))}}return d},
Lc(a){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.J)
for(s=a.id,s=A.aN(new A.L(s,A.o(s).i("L<2>")),t.A9),r=s.length,q=0;q<r;++q){p=s[q]
o=p.r
n=!1
if(o!=null){n=o.a
n=!(n==="read"||n==="alreadyRead")
m=o}else m=null
if(n){n=p.a
l=m.a==="totalsMismatch"?B.b1:B.b2
k=p.b
j=a.gR().h(0,k)
j=j==null?null:j.b
i.push(new A.W("statement-file:"+n,l,n,A.Ii(p,m,j==null?k:j)))}}return i},
Ii(a,b,c){var s,r=b.a
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
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tk:function tk(a,b){this.a=a
this.c=b},
dH:function dH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
zo:function zo(){},
zp:function zp(){},
zq:function zq(a){this.a=a},
zr:function zr(){},
nt(a){var s=0,r=A.I(t.nm),q,p,o,n,m,l
var $async$nt=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:l=a.h(0,"deviceId")
l.toString
A.b(l)
p=a.h(0,"keys")
p.toString
s=3
return A.q(A.fy(t.f.a(p).F(0,t.N,t.X)),$async$nt)
case 3:p=c
o=a.h(0,"primary")
o.toString
o=B.B.M(A.b(o))
n=a.h(0,"name")
n.toString
A.b(n)
m=a.h(0,"kind")
m.toString
q=new A.i_(l,p,o,n,A.b(m))
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$nt,r)},
Cp(a,b){var s=t.Y
return new A.to(a,b,A.w(t.S,t.g),A.d([],s),A.d([],s))},
cA(a,b,c,d,e){return A.H5(a,b,c,d,e)},
H5(a7,a8,a9,b0,b1){var s=0,r=A.I(t.nm),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cA=A.J(function(b2,b3){if(b2===1){o.push(b3)
s=p}for(;;)switch(s){case 0:a5=J
s=3
return A.q(a7.bf(),$async$cA)
case 3:a2=a5.mv(b3,$.EG().gh9())
a3=A.E(a2,a2.$ti.i("h.E"))
a2=a3.length
if(a2===0)throw A.k(new A.kI())
m=null
h=t.bs,g=t.L,f=t.f,e=t.N,d=t.X,c=0
case 4:if(!(c<a3.length)){s=6
break}l=a3[c]
p=8
a5=g
s=11
return A.q(a7.bU(l),$async$cA)
case 11:b=a5.a(b3)
k=f.a(B.z.be(new A.ex(!1).cn(b,0,null,!0),null)).F(0,e,d)
s=12
return A.q(A.yt(A.BX(k),b1),$async$cA)
case 12:m=b3
s=6
break
p=2
s=10
break
case 8:p=7
a4=o.pop()
b=A.au(a4)
if(b instanceof A.h6){s=5
break}else if(b instanceof A.b7){s=5
break}else if(h.b(b)){s=5
break}else throw a4
s=10
break
case 7:s=2
break
case 10:case 5:a3.length===a2||(0,A.n)(a3),++c
s=4
break
case 6:if(m==null)throw A.k(new A.h6())
j=null
i=null
p=13
s=17
return A.q(A.mm(m),$async$cA)
case 17:s=16
return A.q(b3.br(),$async$cA)
case 16:j=b3.a
s=18
return A.q(A.m7(m,"santhiq/sync/join/v1"),$async$cA)
case 18:i=b3
n.push(15)
s=14
break
case 13:n=[2]
case 14:p=2
a2=m
a2.b.dO()
a2.e8()
s=n.pop()
break
case 15:s=19
return A.q(A.fz(),$async$cA)
case 19:a0=b3
a1="dev"+A.Ip(A.Ln(8))
a2=A.R(["formatVersion",1,"deviceId",a1],e,d)
h=t.D.i("be.S")
g=h.a(a0.c)
g=B.K.gaB().M(g)
h=h.a(a0.d)
e=B.E.M(B.z.b8(A.R(["deviceId",a1,"name",a9,"kind",a8,"x25519",g,"ed25519",B.K.gaB().M(h),"createdAtUtc",b0.H().df()],e,e),null))
a5=a7
a6="j-"+a1+".sqj"
s=21
return A.q(A.hu(a2,i,B.lR,e,a0.b),$async$cA)
case 21:s=20
return A.q(a5.bW(a6,b3),$async$cA)
case 20:q=new A.i_(a1,a0,j,a9,a8)
s=1
break
case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$cA,r)},
kI:function kI(){},
cK:function cK(){},
i_:function i_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fe:function fe(a,b){this.a=a
this.b=b},
to:function to(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.w=_.r=0},
tq:function tq(){},
tp:function tp(){},
tr:function tr(){},
eM(a){return new A.hy(a)},
hu(a,b,c,d,e){var s=0,r=A.I(t.p),q,p,o,n,m,l,k,j
var $async$hu=A.J(function(f,g){if(f===1)return A.F(g,r)
for(;;)switch(s){case 0:m=B.E.M("SANTHIQ-SYNC "+c.b+" 1\n"+B.z.b8(a,null)+"\n")
s=3
return A.q($.Be().bA(d,m,b),$async$hu)
case 3:l=g
k=t.eE
j=new A.h8(A.d([],k))
j.n(0,l.c)
j.n(0,l.b.a)
j.n(0,l.a)
p=j.f0()
j=$.Bf()
o=A.E(m,t.S)
B.a.a1(o,p)
s=4
return A.q(j.aT(0,o,e),$async$hu)
case 4:n=g
k=new A.h8(A.d([],k))
k.n(0,m)
j=t.D.i("be.S").a(n.a)
k.n(0,B.E.M(B.K.gaB().M(j)+"\n"))
k.n(0,p)
q=k.f0()
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$hu,r)},
B2(a,b){var s,r,q,p,o,n,m,l=B.i.bR(a,10),k=l
if(typeof k!=="number")return k.f8()
if(k<0||B.O.h6(A.fg(a,0,l),!0)!=="SANTHIQ-SYNC "+b.b+" 1")throw A.k(A.eM("not a "+b.b+" file"))
k=l
if(typeof k!=="number")return k.D()
s=B.i.c6(a,10,k+1)
k=s
if(typeof k!=="number")return k.f8()
if(k<0)o=-1
else{k=s
if(typeof k!=="number")return k.D()
o=B.i.c6(a,10,k+1)}r=o
k=r
if(typeof k!=="number")return k.f8()
if(k<0)throw A.k(A.eM("the file is incomplete"))
try{k=l
if(typeof k!=="number")return k.D()
q=t.f.a(B.z.be(B.O.c2(A.fg(a,k+1,s)),null)).F(0,t.N,t.X)
if(!J.a1(J.as(q,"formatVersion"),1))throw A.k(B.eG)
k=s
if(typeof k!=="number")return k.D()
p=B.B.M(B.O.c2(A.fg(a,k+1,r)))
k=s
if(typeof k!=="number")return k.D()
k=A.fg(a,0,k+1)
n=r
if(typeof n!=="number")return n.D()
n=A.fg(a,n+1,null)
return new A.ts(q,k,p,n)}catch(m){k=A.eM("the header cannot be read")
throw A.k(k)}},
mk(a,b){var s=0,r=A.I(t.g),q,p,o,n,m
var $async$mk=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:s=3
return A.q($.FF().b0(a,new A.bB(b,B.S)),$async$mk)
case 3:o=d
s=4
return A.q(a.br(),$async$mk)
case 4:n=d.a
m=$.b5().cg()
m=$.b5().cJ(m)
m=$.b5().cI(m,32)
p=A.E(b,t.S)
B.a.a1(p,n)
q=m.aW(B.E.M("santhiq/sync/grant/v1"),p,o)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$mk,r)},
dI:function dI(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
ts:function ts(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m7(a,b){var s=0,r=A.I(t.g),q,p,o
var $async$m7=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:p=$.Ff()
o=$.b5().cg()
o=$.b5().cJ(o)
s=3
return A.q($.b5().cI(o,32).aW(B.E.M("santhiq/sync/v1"),B.A,a),$async$m7)
case 3:o=d
q=p.aW(B.E.M(b),B.A,o)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$m7,r)},
mm(a){var s=0,r=A.I(t.gZ),q,p
var $async$mm=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:p=$.b5().cE()
s=4
return A.q(A.m7(a,"santhiq/sync/sign/v1"),$async$mm)
case 4:s=3
return A.q(c.cF(),$async$mm)
case 3:q=p.aJ(c)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$mm,r)},
Ln(a){var s,r=$.jj(),q=A.d([],t.t)
for(s=0;s<a;++s)q.push(r.cM(256))
return q},
Ip(a){var s,r,q=A.d([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q.push(B.c.af(B.d.bE(a[r],16),2,"0"))
return B.a.c8(q)},
fz(){var s=0,r=A.I(t.rU),q,p,o,n,m,l,k
var $async$fz=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:s=3
return A.q($.b5().di().aQ(),$async$fz)
case 3:p=b
s=4
return A.q($.b5().cE().aQ(),$async$fz)
case 4:o=b
n=A
m=p
l=o
s=5
return A.q(p.br(),$async$fz)
case 5:k=b.a
s=6
return A.q(o.br(),$async$fz)
case 6:q=new n.hN(m,l,k,b.a)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$fz,r)},
fy(a){var s=0,r=A.I(t.rU),q,p,o,n,m,l,k,j,i
var $async$fy=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:n=$.b5().di()
m=a.h(0,"x25519")
m.toString
s=3
return A.q(n.aJ(B.B.M(A.b(m))),$async$fy)
case 3:p=c
m=$.b5().cE()
n=a.h(0,"ed25519")
n.toString
s=4
return A.q(m.aJ(B.B.M(A.b(n))),$async$fy)
case 4:o=c
l=A
k=p
j=o
s=5
return A.q(p.br(),$async$fy)
case 5:i=c.a
s=6
return A.q(o.br(),$async$fy)
case 6:q=new l.hN(k,j,i,c.a)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$fy,r)},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
GW(a){var s,r,q,p,o=null,n=$.EK().aj(a)
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
p=new A.iv(a,r,q,s)
return s<q?o:p},
JQ(a,b,c){var s,r,q,p,o,n=A.w(t.S,t.aA)
for(s=J.T(a);s.m();){r=A.GW(s.gt())
if(r==null||r.b!==b)continue
q=r.c
p=n.h(0,q)
if(p==null||r.d>p.d)n.j(0,q,r)}o=A.d([],t.EA)
for(r=n.h(0,c);r!=null;r=n.h(0,r.d+1))B.a.n(o,r)
return o},
i3:function i3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ld:function ld(a,b){this.a=a
this.b=b},
tt:function tt(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.f=null
_.r=0},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
DE(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="currency",c="is not a supported currency",b=A.aH(A.f(a4,a3+1,0)),a=A.w(t.T,t.B)
for(s=A.zi(a0,a1),r=s.length,q=a0.d,p=t.N,o=t.G,n=a2+" allows ",m=0;m<s.length;s.length===r||(0,A.n)(s),++m){l=s[m]
k=l.b
j=k==null
i=j?e:k.x
if(i==null)i=l.a.x
if(A.f(i.a,i.b,i.c).l(0,A.f(a4,a3,1))>=0){i=j?e:k.x
if(i==null)i=l.a.x
i=A.f(i.a,i.b,i.c).l(0,A.f(a4,a3,b))>0||l.a.f.b!==a2}else i=!0
if(i)continue
i=l.a
h=i.Q
if(h==null)k=j?e:k.Q
else k=h
h=A.a7(q,p,o)
if(k==null)g=e
else{h=h.h(0,k)
h=h==null?e:h.d
g=h==null?k:h}k=a.h(0,g)
if(k==null){k=$.M()
h=new A.v(k,a2)
f=B.e.h(0,a2)
if(f==null)A.j(A.y(a2,d,c))
if((k.b<=0?0:Math.max(k.gA().b,0))>f)A.j(A.A(n+A.i(f)+" decimal places",k.k(0),e))
k=h}j=l.c||!j
i=i.f
if(j){j=i.b
h=$.M()
f=B.e.h(0,j)
if(f==null)A.j(A.y(j,d,c))
if((h.b<=0?0:Math.max(h.gA().b,0))>f)A.j(A.A(j+" allows "+A.i(f)+" decimal places",h.k(0),e))
i=i.a
i=h.D(0,new A.Q(i.a.W(0),i.b))
h=new A.v(i,j)
f=B.e.h(0,j)
if(f==null)A.j(A.y(j,d,c))
if((i.b<=0?0:Math.max(i.gA().b,0))>f)A.j(A.A(j+" allows "+A.i(f)+" decimal places",i.k(0),e))
j=h}else j=i
i=j.b
h=k.b
if(i!==h)A.j(A.ae(h,i))
k=k.a.D(0,j.a)
f=B.e.h(0,h)
if(f==null)A.j(A.y(h,d,c))
if((k.b<=0?0:Math.max(k.gA().b,0))>f)A.j(A.A(h+" allows "+A.i(f)+" decimal places",k.k(0),e))
a.j(0,g,new A.v(k,h))}return a},
E_(a,b,c){var s=a*12+b-1-c
return new A.t(B.d.u(s,12),B.d.P(s,12)+1)},
KG(a,b,c,d){var s,r,q,p,o=A.aH(A.f(d,c+1,0)),n=A.d([],t.k)
for(s=a.gR().gU(),s=s.gv(s);s.m();){r=s.gt()
q=!1
if(r.r===b){p=r.d
if(p!==B.o&&p!==B.y){p=r.w
if(A.f(p.a,p.b,p.c).l(0,A.f(d,c,o))<=0){q=r.CW
q=q==null?null:A.f(q.a,q.b,q.c).l(0,A.f(d,c,1))<0
q=q!==!0}}}if(q)n.push(r)}if(n.length===0)return!1
return B.a.bq(n,new A.y8(a,new A.K(d,c,1),new A.K(d,c,o)))},
KR(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=A.d([],t.kY)
for(s=3;s>=1;--s)a4.push(new A.z3(a8,s,a5,a6,a7).$0())
r=new A.p(a4,t.jb.a(new A.z4()),t.yF).gq(0)
if(r===0)return B.k5
q=A.ab(t.T)
for(p=a4.length,o=0;o<a4.length;a4.length===p||(0,A.n)(a4),++o)for(n=a4[o].a[3].gag(),n=n.gv(n);n.m();)q.n(0,A.m(n.gt()))
m=A.w(t.N,t.la)
for(q=new A.f4(A.eu(q,q.r,q.$ti.c),t.kx),p=t.nn,n=t.dN,l=t.B,k=t.xj,j=a7+" allows ";q.m();){i=q.b
if(i==null)i=A.j(A.aq())
h=$.M()
g=new A.v(h,a7)
f=B.e.h(0,a7)
if(f==null)A.j(A.y(a7,a2,a3))
if((h.b<=0?0:Math.max(h.gA().b,0))>f)A.j(A.A(j+A.i(f)+" decimal places",h.k(0),null))
h=A.d([],k)
for(e=a4.length,o=0;o<a4.length;a4.length===e||(0,A.n)(a4),++o){d=a4[o].a
c=d[0]
b=d[1]
a=d[2]
d=d[3].h(0,i)
h.push(new A.iU([a,b,d==null?g:d,c]))}e=new A.p(h,p.a(new A.z5()),n).a9(0,g,new A.z6(),l).a
if(e.l(0,$.M())<=0)continue
d=A.aR(r)
e=e.gcq()
d=new A.Q(d,0).gcq()
d=A.dy(e.a.a4(0,d.b),e.b.a4(0,d.a))
e=d.b
a0=$.jm()
a1=e.l(0,a0)
if(a1===0){if(e.c===0)A.j(B.W)
e=d.a.bv(e)}else{d=d.a
if(d.l(0,$.mr())<0){if(e.c===0)A.j(B.W)
e=d.bv(e)}else{if(e.c===0)A.j(B.W)
e=d.bv(e).D(0,a0)}}if(B.e.h(0,a7)==null)A.j(A.y(a7,a2,a3))
m.j(0,i,new A.hC(new A.v(new A.Q(e,0),a7),h,r))}return m},
Jr(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="currency",a7="is not a supported currency",a8=b1.dR.kX(b2,b6,b4),a9=A.DE(b1,b2,b3,b4,b6),b0=b5.a===b6&&b5.b===b4
if(b0){s=A.E_(b6,b4,1)
r=s.a
q=s.b
p=A.aH(A.f(r,q+1,0))
o=A.w(t.T,t.B)
for(n=A.zi(b1,b2),m=n.length,l=b1.d,k=t.N,j=t.G,i=b5.c,h=b3+" allows ",g=0;g<n.length;n.length===m||(0,A.n)(n),++g){f=n[g]
e=f.b
d=e==null
c=d?a5:e.x
if(c==null)c=f.a.x
b=c.a
a=c.b
a0=c.c
if(A.f(b,a,a0).l(0,A.f(r,q,1))<0||A.f(b,a,a0).l(0,A.f(r,q,p))>0||a0<=i||f.a.f.b!==b3)continue
b=f.a
a=b.Q
if(a==null)e=d?a5:e.Q
else e=a
a=A.a7(l,k,j)
if(e==null)a1=a5
else{a=a.h(0,e)
a=a==null?a5:a.d
a1=a==null?e:a}e=o.h(0,a1)
if(e==null){e=$.M()
a=new A.v(e,b3)
a2=B.e.h(0,b3)
if(a2==null)A.j(A.y(b3,a6,a7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a2)A.j(A.A(h+A.i(a2)+" decimal places",e.k(0),a5))
e=a}d=f.c||!d
b=b.f
if(d){d=b.b
a=$.M()
a2=B.e.h(0,d)
if(a2==null)A.j(A.y(d,a6,a7))
if((a.b<=0?0:Math.max(a.gA().b,0))>a2)A.j(A.A(d+" allows "+A.i(a2)+" decimal places",a.k(0),a5))
b=b.a
b=a.D(0,new A.Q(b.a.W(0),b.b))
a=new A.v(b,d)
a2=B.e.h(0,d)
if(a2==null)A.j(A.y(d,a6,a7))
if((b.b<=0?0:Math.max(b.gA().b,0))>a2)A.j(A.A(d+" allows "+A.i(a2)+" decimal places",b.k(0),a5))
d=a}else d=b
b=d.b
a=e.b
if(b!==a)A.j(A.ae(a,b))
e=e.a.D(0,d.a)
a2=B.e.h(0,a)
if(a2==null)A.j(A.y(a,a6,a7))
if((e.b<=0?0:Math.max(e.gA().b,0))>a2)A.j(A.A(a+" allows "+A.i(a2)+" decimal places",e.k(0),a5))
o.j(0,a1,new A.v(e,a))}}else o=B.k6
p=A.d([],t.cs)
for(n=new A.aa(a8,A.o(a8).i("aa<1,2>")).gv(0),m=b3+" allows ";n.m();){l=n.d
a3=l.a
a4=l.b
if(a4.b===b3){l=a9.h(0,a3)
if(l==null){l=$.M()
k=new A.v(l,b3)
a2=B.e.h(0,b3)
if(a2==null)A.j(A.y(b3,a6,a7))
if((l.b<=0?0:Math.max(l.gA().b,0))>a2)A.j(A.A(m+A.i(a2)+" decimal places",l.k(0),a5))
l=k}if(b0){k=a9.h(0,a3)
if(k==null){k=$.M()
j=new A.v(k,b3)
a2=B.e.h(0,b3)
if(a2==null)A.j(A.y(b3,a6,a7))
if((k.b<=0?0:Math.max(k.gA().b,0))>a2)A.j(A.A(m+A.i(a2)+" decimal places",k.k(0),a5))
k=j}j=o.h(0,a3)
if(j==null){j=$.M()
i=new A.v(j,b3)
a2=B.e.h(0,b3)
if(a2==null)A.j(A.y(b3,a6,a7))
if((j.b<=0?0:Math.max(j.gA().b,0))>a2)A.j(A.A(m+A.i(a2)+" decimal places",j.k(0),a5))
j=i}i=j.b
h=k.b
if(i!==h)A.j(A.ae(h,i))
k=k.a.D(0,j.a)
j=new A.v(k,h)
a2=B.e.h(0,h)
if(a2==null)A.j(A.y(h,a6,a7))
if((k.b<=0?0:Math.max(k.gA().b,0))>a2)A.j(A.A(h+" allows "+A.i(a2)+" decimal places",k.k(0),a5))
k=j}else k=a5
p.push(new A.bz(a3,a4,l,k))}}B.a.E(p,new A.vn(b1))
return new A.mK(p,b3)},
Dk(a,b){var s=A.a7(a.d,t.N,t.G).h(0,b)
s=s==null?null:s.c
return s==null?b:s},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
y8:function y8(a,b,c){this.a=a
this.b=b
this.c=c},
z3:function z3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z4:function z4(){},
z5:function z5(){},
z6:function z6(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mK:function mK(a,b){this.a=a
this.b=b},
mL:function mL(a){this.a=a},
mM:function mM(){},
mP:function mP(){},
mO:function mO(){},
mN:function mN(){},
vn:function vn(a){this.a=a},
Kc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=A.d([],t.Fq)
for(s=a.dR.f,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>")),r=b.a,q=b.b,p=r*12+q,o=b.c;s.m();){n=s.d
m=n.e
l=m==null?e:a.gR().h(0,m)
k=l==null?e:A.AI(a,l,b,B.k4)
m=n.d
j=m.a
i=m.b
m=m.c
h=A.f(r,q,o).l(0,A.f(j,i,m))>0?0:j*12+i-p
g=k==null
f=g?e:k.b
g=g?e:k.c
B.a.n(d,new A.dj(n,f,g,h===0&&A.f(r,q,o).l(0,A.f(j,i,m))<=0?1:h))}B.a.E(d,new A.xr())
return d},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xr:function xr(){},
E7(a){var s,r,q=null,p=typeof a=="string"?$.Fz().aj(a):q
if(p==null)s=q
else{s=p.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.Z(r,q,q)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
s=new A.t(r,A.Z(s,q,q))}return s},
GU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="capSpend",f="currency",e="minSpend",d=a.h(0,"accountId")
d.toString
A.b(d)
s=a.h(0,"unit")
s.toString
A.af(B.iy,A.b(s),t.cy)
s=A.d([],t.j2)
r=a.h(0,"rates")
r.toString
r=J.T(t.j.a(r))
q=t.f
p=t.N
o=t.X
while(r.m()){n=q.a(r.gt()).F(0,p,o)
m=A.m(n.h(0,"categoryId"))
l=n.h(0,"rate")
l.toString
l=A.ah(A.b(l))
if(n.h(0,g)==null)k=null
else{k=n.h(0,g)
k.toString
k=q.a(k).F(0,p,o)
j=k.h(0,"amount")
j.toString
j=A.ah(A.b(j))
k=k.h(0,f)
k.toString
A.b(k)
i=new A.v(j,k)
h=B.e.h(0,k)
if(h==null)A.j(A.y(k,f,"is not a supported currency"))
if((j.b<=0?0:Math.max(j.gA().b,0))>h)A.j(A.A(k+" allows "+A.i(h)+" decimal places",j.k(0),null))
k=i}if(n.h(0,"capEarn")==null)n=null
else{n=n.h(0,"capEarn")
n.toString
n=A.ah(A.b(n))}s.push(new A.f9(m,l,k,n))}if(a.h(0,e)!=null){r=a.h(0,e)
r.toString
A.aJ(q.a(r).F(0,p,o))}return new A.l0(d,s)},
Ji(b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="categoryId",b0="bookId",b1=b5.e,b2=new A.ve(b3)
switch(b5.d){case"category.flag":s=A.aU(new A.p(B.dm,t.ns.a(new A.vf(b1)),t.rK),t.Z)
r=b2.$1(b1.h(0,a9))
if(r==null||s==null||A.ho(r))return"a flag is for a spending category"
b4.a.j(0,r.a,s)
break
case"budget.set":q=b1.h(0,b0)
p=A.E7(b1.h(0,"from"))
r=b2.$1(b1.h(0,a9))
if(typeof q!="string"||b3.aO(q)==null||p==null)return"a budget needs a book and a month"
if(r==null||r.d!=null||A.ho(r)||r.b!==b3.bO(q))return"a budget is for a top-level spending category of the book's kind"
if(b1.h(0,"amount")==null)o=null
else{n=b1.h(0,"amount")
n.toString
o=A.aJ(t.f.a(n).F(0,t.N,t.X))}if(o!=null&&o.a.l(0,$.M())<=0)return"a budget is more than zero"
B.a.n(b4.b,new A.jF(q,r.a,o,p.a,p.b))
break
case"period.note":q=b1.h(0,b0)
m=b1.h(0,"period")
l=b1.h(0,"text")
k=b1.h(0,a9)
if(typeof q!="string"||b3.aO(q)==null||A.E7(m)==null||typeof l!="string")return"a note needs a book, a month and its text"
if(k!=null&&b2.$1(k)==null)return"no category "+A.i(k)
j=B.c.G(l)
n=j.length
if(n>120||B.c.B(j,"\n"))return"a note is one line of at most 120 characters"
i=new A.bx(q,A.b(m),A.m(k))
h=b4.c
if(n===0)h.Y(0,i)
else h.j(0,i,new A.kQ())
break
case"officeDay.mark":g=A.D6(b1.h(0,"date"))
f=b1.h(0,"office")
if(g==null||!A.dX(f))return"an office day mark is a date and yes or no"
b4.d.j(0,g,f)
break
case"recurring.mark":q=b1.h(0,b0)
e=b1.h(0,"payeeKey")
d=A.aU(new A.p(B.jc,t.AH.a(new A.vg(b1)),t.o_),t.fK)
if(typeof q!="string"||typeof e!="string"||e.length===0||d==null)return"a recurring mark is a book, a payee and what it is"
b4.e.j(0,new A.t(q,e),d)
break
case"goal.set":c=b1.h(0,"id")
b=b1.h(0,"name")
a=A.D6(b1.h(0,"by"))
a0=b1.h(0,"accountId")
if(typeof c!="string"||typeof b!="string"||B.c.G(b).length===0||a==null||!t.f.b(b1.h(0,"target")))return"a goal needs a name, a target and a date"
n=b1.h(0,"target")
n.toString
a1=A.aJ(t.f.a(n).F(0,t.N,t.X))
if(a1.a.l(0,$.M())<=0)return"a target is more than zero"
if(a0!=null){a2=b3.gR().h(0,a0)
if(a2==null||a2.e!==a1.b||a2.d===B.o)return"a goal's account holds savings in the target's currency"}b4.f.j(0,c,new A.it(c,B.c.G(b),a1,a,A.m(a0)))
break
case"goal.remove":if(b4.f.Y(0,b1.h(0,"id"))==null)return"no goal "+A.i(b1.h(0,"id"))
break
case"reward.rules":a3=A.GU(b1)
n=a3.a
a2=b3.gR().h(0,n)
if(a2==null||a2.d!==B.x)return"reward rules are for a card"
h=a3.c
a4=h.length
if(a4===0){b4.r.Y(0,n)
return null}for(a5=0;a5<h.length;h.length===a4||(0,A.n)(h),++a5){a6=h[a5]
if(a6.b.l(0,$.M())>=0){a7=a6.a
a7=a7!=null&&b2.$1(a7)==null}else a7=!0
if(a7)return"a reward rate is zero or more, for a known category"}a4=A.N(h)
if(new A.p(h,a4.i("l(1)").a(new A.vh()),a4.i("p<1>")).gq(0)<=1){a4=A.ab(t.T)
for(a7=h.length,a5=0;a8=h.length,a5<a8;h.length===a7||(0,A.n)(h),++a5)a4.n(0,h[a5].a)
h=a4.a!==a8}else h=!0
if(h)return"one rate per category"
b4.r.j(0,n,a3)
break
default:return"not a trend operation"}return null},
D6(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Fm().aj(a):m
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
n=A.f(q,p,o)
return A.b2(n)===q&&A.bk(n)===p&&A.aH(n)===o?new A.K(q,p,o):m},
jF:function jF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kQ:function kQ(){},
cf:function cf(a,b){this.a=a
this.b=b},
it:function it(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ej:function ej(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l0:function l0(a,b){this.a=a
this.c=b},
tx:function tx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ve:function ve(a){this.a=a},
vf:function vf(a){this.a=a},
vg:function vg(a){this.a=a},
vh:function vh(){},
FV(a,b,c,d){var s=new A.e0(a,b)
s.ig(a,b,c,d)
return s},
DA(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aC(a2.H(),B.n),b=A.w(t.N,t.S)
for(s=A.aN(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q].b
o=b.h(0,p)
b.j(0,p,(o==null?0:o)+1)}n=new A.vq(a,a2,a3,a1,c,b)
s=a.gR().gU()
r=A.o(s)
p=r.i("p<h.E>")
m=A.E(new A.p(s,r.i("l(h.E)").a(new A.vo(a0)),p),p.i("h.E"))
B.a.E(m,new A.vp())
A.hi(a0,a)
s=A.d([],t.zM)
for(r=A.md(a,a0,B.b),p=r.length,o=t.kd,l=t.eF,q=0;q<r.length;r.length===p||(0,A.n)(r),++q){k=r[q]
j=A.d([],l)
for(i=0;i<3;++i){h=B.iz[i]
g=A.d([],o)
for(f=m.length,e=0;e<m.length;m.length===f||(0,A.n)(m),++e){d=m[e]
if(d.e===k&&A.J8(d)===h)g.push(n.$1(d))}f=g.length
if(f!==0)j.push(A.FV(h,g,k,a1))}s.push(new A.dz(k,j))}return new A.mz(s)},
JC(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aC(a1.H(),B.n),d=a.aV(b),c=A.d([],t.F)
for(s=A.aN(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(a.aV(p.b)===d)c.push(p)}B.a.E(c,new A.wa())
s=A.d([],t.CL)
for(r=c.length,o=e.a,q=0;q<c.length;c.length===r||(0,A.n)(c),++q){p=c[q]
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
h=A.aW(p.e,a0)
g=A.aW(p.f,a0)
f=p.r==null?"Recorded, not reconciled":"Reconciled"
s.push(new A.la(""+n.c+" "+m+l+" to "+(""+k.c+" "+j+i),h,g,f))}return s},
d5:function d5(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.at=l},
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
mw:function mw(){},
mx:function mx(){},
dz:function dz(a,b){this.a=a
this.b=b},
mz:function mz(a){this.b=a},
vq:function vq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vo:function vo(a){this.a=a},
vp:function vp(){},
wa:function wa(){},
A5(a){var s,r,q={}
for(s=new A.aa(a,A.o(a).i("aa<1,2>")).gv(0);s.m();){r=s.d
q[r.a]=r.b}return q},
kh:function kh(){},
nn:function nn(a){this.a=a},
no:function no(a,b){this.a=a
this.b=b},
np:function np(a){this.a=a},
nl:function nl(a,b){this.a=a
this.b=b},
nm:function nm(a){this.a=a},
dY(a,b,c){var s=A.x(A.x(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
b.a0(0,new A.uW(s))
if(c!=null)s.textContent=c
return s},
Do(a){var s,r,q
if(a<=0)return B.ll
s=a/4
r=Math.pow(10,B.Q.lV(Math.log(s)/2.302585092994046))
q=new A.ak(A.d([1,2,5,10],t.t),t.oe.a(new A.uX(r)),t.FC).lT(0,new A.uY(s))
return new A.t(B.Q.h0(a/q)*q,q)},
JK(a){var s=Math.abs(a),r=new A.wx()
if(s>=1e6)return A.i(r.$1(a/1e6))+"M"
if(s>=1000)return A.i(r.$1(a/1000))+"k"
return r.$1(a)},
D3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=-b
r=A.Do(Math.max(c,s))
i.a=r.a
q=r.b
p=b<0?-A.Do(s).a:0
o=new A.uA(i,p)
for(s=q/2,n=t.N,m=t.K,l=p;l<=i.a+s;l+=q){k=o.$1(l)
j=o.$1(l)
a.append(A.dY("line",A.R(["x1",64,"x2",948,"y1",k,"y2",j,"class",l===0?"zero":"grid"],n,m),null))
k=o.$1(l)
if(typeof k!=="number")return k.D()
a.append(A.dY("text",A.R(["x",56,"y",k+4,"text-anchor","end","class","tick"],n,m),d+A.JK(l)))}return o},
Di(a,b,c){var s,r,q,p,o,n
for(s=t.N,r=A.bK(b,0,s),q=J.T(r.a),p=r.b,r=new A.at(q,p,A.o(r).i("at<1>")),o=t.K;r.m();){n=r.c
n=n>=0?new A.t(p+n,q.gt()):A.j(A.aq())
a.append(A.dY("text",A.R(["x",c.$1(n.a),"y",252,"text-anchor","middle","class","tick"],s,o),n.b))}},
Da(a){return A.dY("svg",A.R(["viewBox","0 0 960 260","class","chart","role","img","aria-label",a],t.N,t.K),null)},
Kd(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.Da(b1),b0=A.d([],t.zp)
for(s=0;s<2;++s)B.a.a1(b0,b3[s].b)
r=t.pR
q=A.D3(a9,Math.min(0,B.a.a9(b0,0,B.ci,r)),B.a.a9(b0,0,B.cj,r),b5)
p=884/b2.length
o=Math.min(28,(p*0.7-2)/2)
n=new A.xu(p)
for(b0=t.ov,r=t.N,m=t.K,l=o/2,k=(o*2+2)/2,j=o+2,i=0;i<b2.length;++i)for(h=A.bK(b3,0,b0),g=J.T(h.a),f=h.b,h=new A.at(g,f,A.o(h).i("at<1>"));h.m();){e=h.c
e=e>=0?new A.t(f+e,g.gt()):A.j(A.aq())
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
a2=A.i(b)
a3=A.i(e)
a4=A.i(a0)
a5=b+o
a6="M"+a2
a7=A.i(b+a1)
a8=A.i(a5)
a5-=a1
if(a0<e){e=A.i(a0+a1)
a3=a6+" "+a3+" V"+e+" Q"+a2+" "+a4+" "+a7+" "+a4+" H"+A.i(a5)+" Q"+a8+" "+a4+" "+a8+" "+e+" V"+a3+" Z"
e=a3}else{e=A.i(a0-a1)
a3=a6+" "+a3+" V"+e+" Q"+a2+" "+a4+" "+a7+" "+a4+" H"+A.i(a5)+" Q"+a8+" "+a4+" "+a8+" "+e+" V"+a3+" Z"
e=a3}e=A.dY("path",A.R(["d",e,"class","series-"+(d+1)],r,m),null)
if(!(i<b2.length))return A.a(b2,i)
e.append(A.dY("title",A.w(r,m),b4.$3(b2[i],c.a,a)))
a9.append(e)}A.Di(a9,b2,n)
return a9},
Kr(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.Da(a),e=A.d([],t.zp)
for(s=c.length,r=0;r<c.length;c.length===s||(0,A.n)(c),++r){q=c[r]
if(q!=null)e.push(q)}s=t.pR
p=A.D3(f,Math.min(0,B.a.a9(e,0,B.ci,s)),B.a.a9(e,0,B.cj,s),a0)
o=new A.xD(884/b.length)
for(e=t.u6,s=A.bK(c,0,e),n=J.T(s.a),m=s.b,s=new A.at(n,m,A.o(s).i("at<1>")),l="",k=!1;s.m();k=!i){j=s.c
j=j>=0?new A.t(m+j,n.gt()):A.j(A.aq())
q=j.b
i=q==null
if(i)continue
h=k?"L":"M"
l+=h+A.i(o.$1(j.a))+" "+A.i(p.$1(q))+" "}if(l.length!==0)f.append(A.dY("path",A.R(["d",l,"class","line series-1"],t.N,t.K),null))
for(e=A.bK(c,0,e),s=J.T(e.a),n=e.b,e=new A.at(s,n,A.o(e).i("at<1>")),m=t.N,j=t.K;e.m();){i=e.c
i=i>=0?new A.t(n+i,s.gt()):A.j(A.aq())
g=i.a
q=i.b
if(q==null)continue
f.append(A.dY("circle",A.R(["cx",o.$1(g),"cy",p.$1(q),"r",4,"class","dot series-1"],m,j),null))
i=A.dY("circle",A.R(["cx",o.$1(g),"cy",p.$1(q),"r",12,"class","hit"],m,j),null)
if(!(g>=0&&g<b.length))return A.a(b,g)
i.append(A.dY("title",A.w(m,j),d.$2(b[g],q)))
f.append(i)}A.Di(f,b,o)
return f},
uW:function uW(a){this.a=a},
uX:function uX(a){this.a=a},
uY:function uY(a){this.a=a},
wx:function wx(){},
uA:function uA(a,b){this.a=a
this.b=b},
xu:function xu(a){this.a=a},
xD:function xD(a){this.a=a},
hj(a,b,c,d){return A.Jq(a,b,c,t.yz.a(d))},
Jq(a,b,c,d){var s=0,r=A.I(t.l3),q,p,o,n,m,l,k,j,i
var $async$hj=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:k=v.G
j=A.x(new k.Headers())
d.a0(0,new A.vm(j))
p=A.x(k.window)
o=b.gdG()
n=c==null?null:c
s=3
return A.q(A.bF(A.x(p.fetch(o,{method:a,headers:j,body:n,referrerPolicy:"no-referrer",credentials:"omit",cache:"no-store",signal:A.x(k.AbortSignal.timeout(6e4))})),t.m),$async$hj)
case 3:m=f
i=A
s=4
return A.q(A.bF(A.x(m.arrayBuffer()),t.h),$async$hj)
case 4:l=i.ih(f,0,null)
q=new A.fS(A.P(m.status),l)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$hj,r)},
Ke(){var s,r,q=v.G,p=A.b(A.x(A.x(q.window).location).hash)
if(!B.c.B(p,"access_token=")&&!B.c.B(p,"error="))return!1
s=A.x(new q.BroadcastChannel("santhiq-sign-in"))
s.postMessage(B.c.aa(p,1))
s.close()
A.x(A.x(q.window).history).replaceState(null,"",A.b(A.x(A.x(q.window).location).pathname))
r=A.aV(A.x(q.document).body)
r.toString
r.textContent="Signed in. This window can be closed."
A.x(q.window).close()
return!0},
IP(){var s,r=$.jj(),q=A.d([],t.s)
for(s=0;s<16;++s)q.push(B.c.af(B.d.bE(r.cM(256),16),2,"0"))
return B.a.c8(q)},
GK(a){var s,r=A.x(new v.G.BroadcastChannel("santhiq-sign-in"))
A.dZ(!1,"isUtc",t.y)
s=t.N
s=new A.kO(a,r,new A.a5(0,0,!1),B.c6,B.lX,A.w(s,s),A.w(s,t.sF))
s.ii(a)
return s},
bb:function bb(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
vm:function vm(a){this.a=a},
kO:function kO(a,b,c,d,e,f,g){var _=this
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
_.ay=_.ax=null
_.ch=e
_.CW=f
_.cx=3
_.cy=null
_.db=g},
r8:function r8(a){this.a=a},
r9:function r9(a){this.a=a},
ra:function ra(a){this.a=a},
rb:function rb(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b},
oV:function oV(a){this.a=a},
qZ:function qZ(a,b){this.a=a
this.b=b},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
rg:function rg(a){this.a=a},
rh:function rh(a,b){this.a=a
this.b=b},
pz:function pz(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b},
pK:function pK(a){this.a=a},
pL:function pL(a){this.a=a},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a){this.a=a},
oS:function oS(a){this.a=a},
oT:function oT(a){this.a=a},
oU:function oU(a,b){this.a=a
this.b=b},
oW:function oW(a,b){this.a=a
this.b=b},
pH:function pH(){},
pI:function pI(){},
pJ:function pJ(a,b){this.a=a
this.b=b},
pG:function pG(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qX:function qX(){},
qR:function qR(a){this.a=a},
qS:function qS(){},
qU:function qU(){},
qT:function qT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
qP:function qP(){},
qQ:function qQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qO:function qO(a){this.a=a},
qY:function qY(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
qu:function qu(a){this.a=a},
qg:function qg(a){this.a=a},
qh:function qh(){},
qi:function qi(){},
qt:function qt(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b},
qm:function qm(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a},
qn:function qn(a,b){this.a=a
this.b=b},
qe:function qe(a){this.a=a},
qb:function qb(a){this.a=a},
qo:function qo(a,b){this.a=a
this.b=b},
qd:function qd(a){this.a=a},
qa:function qa(a){this.a=a},
qp:function qp(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b},
qc:function qc(a){this.a=a},
qr:function qr(a,b){this.a=a
this.b=b},
qs:function qs(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
pj:function pj(a,b){this.a=a
this.b=b},
pi:function pi(a,b){this.a=a
this.b=b},
pw:function pw(a,b){this.a=a
this.b=b},
px:function px(a,b){this.a=a
this.b=b},
pk:function pk(a){this.a=a},
pl:function pl(a,b){this.a=a
this.b=b},
po:function po(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
pq:function pq(a,b){this.a=a
this.b=b},
pr:function pr(a){this.a=a},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
ph:function ph(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(a,b){this.a=a
this.b=b},
pu:function pu(a){this.a=a},
pv:function pv(a){this.a=a},
pm:function pm(a){this.a=a},
pn:function pn(a,b){this.a=a
this.b=b},
pg:function pg(a,b){this.a=a
this.b=b},
q8:function q8(a,b){this.a=a
this.b=b},
q9:function q9(){},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
pc:function pc(a,b){this.a=a
this.b=b},
pf:function pf(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
pB:function pB(){},
pC:function pC(a){this.a=a},
pD:function pD(a,b){this.a=a
this.b=b},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
pA:function pA(a,b){this.a=a
this.b=b},
qN:function qN(a){this.a=a},
qH:function qH(){},
qI:function qI(a){this.a=a},
qJ:function qJ(a){this.a=a},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qM:function qM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qG:function qG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pX:function pX(a){this.a=a},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(){},
pT:function pT(){},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a,b){this.a=a
this.b=b},
pW:function pW(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a,b){this.a=a
this.b=b},
oO:function oO(a,b){this.a=a
this.b=b},
oN:function oN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
oM:function oM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
q0:function q0(){},
q1:function q1(){},
q2:function q2(a,b){this.a=a
this.b=b},
q_:function q_(a,b){this.a=a
this.b=b},
q3:function q3(a){this.a=a},
q4:function q4(a){this.a=a},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a,b,c){this.a=a
this.b=b
this.c=c},
r6:function r6(a){this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
r1:function r1(a){this.a=a},
r2:function r2(){},
r3:function r3(a){this.a=a},
r4:function r4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function pa(a){this.a=a},
pb:function pb(a,b){this.a=a
this.b=b},
p9:function p9(){},
p1:function p1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p0:function p0(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function p_(a,b){this.a=a
this.b=b},
p3:function p3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oZ:function oZ(a,b,c){this.a=a
this.b=b
this.c=c},
p4:function p4(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a,b){this.a=a
this.b=b},
p5:function p5(a){this.a=a},
p6:function p6(){},
p7:function p7(a){this.a=a},
p8:function p8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oX:function oX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a){this.a=a},
qz:function qz(){},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qv:function qv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
Js(c1,c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="currency",b2="is not a supported currency",b3=new A.vt(c3),b4=new A.vu(c1),b5=A.aC(c4.H(),B.n),b6=A.vj(c1,c2),b7=b5.a,b8=b5.b,b9=A.Jr(c1,c2,b6,b8,b5,b7),c0=A.ab(t.N)
for(s=b9.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q)c0.n(0,s[q].a)
p=A.KR(c1,c2,b6,b5)
o=b9.gmn();--b8
if(!(b8>=0&&b8<12))return A.a(B.a0,b8)
b8=B.a0[b8]
r=A.d([],t.gI)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.n)(s),++q){m=s[q]
l=m.a
k=b4.$1(l)
j=m.b
i=b3.$1(j)
h=m.c
g=b3.$1(h)
f=j.a
e=h.b
j=j.b
if(e!==j)A.j(A.ae(j,e))
h=h.a
e=f.D(0,new A.Q(h.a.W(0),h.b))
d=B.e.h(0,j)
if(d==null)A.j(A.y(j,b1,b2))
if((e.b<=0?0:Math.max(e.gA().b,0))>d)A.j(A.A(j+" allows "+A.i(d)+" decimal places",e.k(0),b0))
j=b3.$1(new A.v(e,j))
e=m.d
c=e==null
b=c?"":b3.$1(e)
h=h.l(0,f)
f=!c&&e.a.l(0,f)>0
r.push(new A.d8(l,k,i,g,j,b,h>0,f))}B.a.E(r,new A.vr())
if(s.length===0)s=""
else{s=A.i(b3.$1(b9.gkV()))
n=A.i(b3.$1(b9.ghW()))
l=o==null?"":", heading for "+A.i(b3.$1(o))
k=b9.ghm()===0?"":"; "+b9.ghm()+" over"
k="Budgets "+s+", spent "+n+l+k
s=k}n=b5.c
l=A.IR(n)
k=A.d([],t.EQ)
for(j=p.gbo(),j=j.gv(j);j.m();){i=j.gt()
a=i.a
a0=i.b
if(!c0.B(0,a)){i=b4.$1(a)
h=a0.a
g=b3.$1(h)
f=h.a
h=h.b
d=B.e.h(0,h)
if(d==null)A.j(A.y(h,b1,b2))
h=new A.Q(f.a,f.b-d).az().aD(0)
f=a0.c
e=f===1?"":"s"
k.push(new A.dw(a,i,g,h,"From "+f+" complete month"+e+" of "+a0.b.length))}}B.a.E(k,new A.vs())
c0=A.d([],t.jw)
for(j=A.Kc(c1,b5),i=j.length,q=0;q<j.length;j.length===i||(0,A.n)(j),++q){a1=j[q]
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
else{a4=A.i(b3.$1(a2))
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
if(a5!==a6)A.j(A.ae(a6,a5))
a5=a2.a
a5=g.a.D(0,new A.Q(a5.a.W(0),a5.b))
a7=new A.v(a5,a6)
d=B.e.h(0,a6)
if(d==null)A.j(A.y(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>d)A.j(A.A(a6+" allows "+A.i(d)+" decimal places",a5.k(0),b0))
a5=a7}if(a5==null)a5=""
else{if(a3)a5=b0
else{a5=a2.b
a6=g.b
if(a5!==a6)A.j(A.ae(a6,a5))
a5=a2.a
a5=g.a.D(0,new A.Q(a5.a.W(0),a5.b))
a7=new A.v(a5,a6)
d=B.e.h(0,a6)
if(d==null)A.j(A.y(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gA().b,0))>d)A.j(A.A(a6+" allows "+A.i(d)+" decimal places",a5.k(0),b0))
a5=a7}a5.toString
a5=b3.$1(a5)}if(a1.gho()==null)a6=""
else{a6=a1.gho()
a6.toString
a6=b3.$1(a6)}if(a3)a7=b0
else{a7=a2.b
a8=g.b
if(a7!==a8)A.j(A.ae(a8,a7))
a7=a2.a
a7=g.a.D(0,new A.Q(a7.a.W(0),a7.b))
a9=new A.v(a7,a8)
d=B.e.h(0,a8)
if(d==null)A.j(A.y(a8,b1,b2))
if((a7.b<=0?0:Math.max(a7.gA().b,0))>d)A.j(A.A(a8+" allows "+A.i(d)+" decimal places",a7.k(0),b0))
a7=a9}if(a7!=null){if(a3)g=b0
else{a3=a2.b
a7=g.b
if(a3!==a7)A.j(A.ae(a7,a3))
a2=a2.a
a2=g.a.D(0,new A.Q(a2.a.W(0),a2.b))
g=new A.v(a2,a7)
d=B.e.h(0,a7)
if(d==null)A.j(A.y(a7,b1,b2))
if((a2.b<=0?0:Math.max(a2.gA().b,0))>d)A.j(A.A(a7+" allows "+A.i(d)+" decimal places",a2.k(0),b0))}g=g.a.l(0,$.M())<=0}else g=!1
if(g)g="Reached"
else{g=a1.d
if(g===0)g="Date passed"
else{a2=g===1?"":"s"
a2=""+g+" month"+a2+" left"
g=a2}}c0.push(new A.k9(h,f,""+e.c+" "+c+b,a4,a5,a6,g))}return new A.mQ("Spent counts filed transactions only; ones still to file in Review are not in it. Heading for is spent so far plus what was spent after the "+n+l+" last month.",b8+" "+b7,b6,r,s,k,c0)},
IR(a){var s,r="th"
if(!(a>=11&&a<=13)){s=B.d.P(a,10)
A:{if(1===s){r="st"
break A}if(2===s){r="nd"
break A}if(3===s){r="rd"
break A}break A}}return r},
d8:function d8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
dw:function dw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k9:function k9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mQ:function mQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vt:function vt(a){this.a=a},
vu:function vu(a){this.a=a},
vr:function vr(){},
vs:function vs(){},
kF:function kF(){},
fC:function fC(a,b,c){var _=this
_.a=a
_.b=b
_.d=null
_.e=c},
nd:function nd(a){this.a=a},
Ju(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=new A.vw(b5),a5=A.aC(b6.H(),B.n),a6=A.E2(b2,b3,b7,a5),a7=a5.a,a8=a5.b,a9=A.AZ(b2,b3,12,b7,b4,a8,a7),b0=A.E3(b2,b3,12,b7,a8,a5,a7),b1=new A.vx(a5,a4)
a7=a6.b
a8=a7.b
s=A.N(a8)
a8=A.E(new A.ak(a8,s.i("cY(1)").a(b1),s.i("ak<1,cY>")),t.q9)
s=a7.c
r=A.N(s)
B.a.a1(a8,new A.ak(s,r.i("cY(1)").a(b1),r.i("ak<1,cY>")))
r=a4.$1(a7.gdI())
s=a4.$1(a7.gdM())
a7=a4.$1(a7.gdI().a8(0,a7.gdM()))
q=A.ab(t.N)
for(p=a6.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.n)(p),++n)q.n(0,p[n].a)
p=A.d([],t.s)
for(o=a6.d,m=o.length,n=0;n<o.length;o.length===m||(0,A.n)(o),++n){l=o[n]
if(l.e===b7)p.push(A.cE(l))}o=A.d([],t.Fn)
m=A.bK(a9,0,t.wy)
m=A.E(m,A.o(m).i("h.E"))
k=A.N(m).i("aZ<1>")
m=new A.aZ(m,k)
m=new A.ar(m,m.gq(0),k.i("ar<ag.E>"))
k=k.i("ag.E")
while(m.m()){j=m.d
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
if(c!==b)A.j(A.ae(b,c))
e=e.a
e=g.a.D(0,new A.Q(e.a.W(0),e.b))
a=B.e.h(0,b)
if(a==null)A.j(A.y(b,a2,a3))
if((e.b<=0?0:Math.max(e.gA().b,0))>a)A.j(A.A(b+" allows "+A.i(a)+" decimal places",e.k(0),null))
g=a4.$1(new A.v(e,b))
if(b5)e=""
else{e=A.Ec(h)
if(e==null)e=""}if(!(i>=0&&i<b0.length))return A.a(b0,i)
c=b0[i].b
if(c.b.length===0&&c.c.length===0)c=""
else{b=c.gdI()
c=c.gdM()
a0=c.b
a1=b.b
if(a0!==a1)A.j(A.ae(a1,a0))
c=c.a
c=b.a.D(0,new A.Q(c.a.W(0),c.b))
a=B.e.h(0,a1)
if(a==null)A.j(A.y(a1,a2,a3))
if((c.b<=0?0:Math.max(c.gA().b,0))>a)A.j(A.A(a1+" allows "+A.i(a)+" decimal places",c.k(0),null))
c=a4.$1(new A.v(c,a1))}o.push(new A.kz(j+" "+h.a,f,d,g,e,c))}return new A.hX(b7,a8,r,s,a7,q,p,o)},
Jt(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i=A.aC(a0.H(),B.n),h=i.a,g=i.b,f=A.AZ(a,b,12,a1,c,g,h),e=A.E3(a,b,12,a1,g,i,h),d=new A.vv()
h=A.d([],t.s)
for(g=f.length,s=0;s<f.length;f.length===g||(0,A.n)(f),++s){r=f[s]
q=r.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
h.push(B.l[q]+" "+B.d.P(r.a,100))}g=t.zp
q=A.d([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.n)(f),++s)q.push(d.$1(f[s].c.a))
g=A.d([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.n)(f),++s)g.push(d.$1(f[s].d.a))
p=A.d([],t.wF)
for(o=e.length,s=0;s<e.length;e.length===o||(0,A.n)(e),++s){n=e[s].b
if(n.b.length===0&&n.c.length===0)n=null
else{m=n.gdI()
n=n.gdM()
l=n.b
k=m.b
if(l!==k)A.j(A.ae(k,l))
n=n.a
n=m.a.D(0,new A.Q(n.a.W(0),n.b))
j=B.e.h(0,k)
if(j==null)A.j(A.y(k,"currency","is not a supported currency"))
if((n.b<=0?0:Math.max(n.gA().b,0))>j)A.j(A.A(k+" allows "+A.i(j)+" decimal places",n.k(0),null))
n=d.$1(new A.v(n,k))}p.push(n)}return new A.nq(a1,h,q,g,p)},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kz:function kz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hX:function hX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vw:function vw(a){this.a=a},
vx:function vx(a,b){this.a=a
this.b=b},
nq:function nq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vv:function vv(){},
uI(a){var s=a.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return""+a.c+" "+B.l[s]+" "+a.a},
Jv(a,b,c,d){var s,r,q,p,o,n=new A.vC(c),m=a.a7,l=m.a5(B.aq,b),k=l==null,j=k?null:J.a1(l.c.h(0,"gstRegistered"),!0),i=j===!0,h=new A.vB(a)
k=k?null:A.m(l.c.h(0,"name"))
j=A.d([],t.V)
for(m=m.b3(B.a4),s=m.length,r=0;r<m.length;m.length===s||(0,A.n)(m),++r){q=m[r]
if(A.m(q.c.h(0,"bookId"))===b)j.push(q)}B.a.E(j,new A.vy())
m=A.d([],t.eO)
for(s=A.Kl(a,b),p=s.length,r=0;r<s.length;s.length===p||(0,A.n)(s),++r)m.push(new A.vz(a,s[r],h,c,n,i).$0())
s=A.d([],t.p9)
for(p=A.JM(a,b),o=p.length,r=0;r<p.length;p.length===o||(0,A.n)(p),++r)s.push(new A.vA(a,p[r],n,d).$0())
return new A.nr(k,i,j,m,s)},
k_:function k_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fB:function fB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fF:function fF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nr:function nr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vC:function vC(a){this.a=a},
vB:function vB(a){this.a=a},
vy:function vy(){},
vz:function vz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vA:function vA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Jw(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aC(a3.H(),B.n),d=new A.vL(e,a2,a1,new A.vJ(a1)),c=new A.vI(a1),b=new A.vH(e),a=a1.c5,a0=a.gt()
a=A.a7(a.d,t.N,t.ud).gU()
s=A.E(a,A.o(a).i("h.E"))
B.a.E(s,new A.vE())
a=A.d([],t.AM)
if(a0.length!==0){r=A.d([],t.tZ)
for(q=a0.length,p=t.s,o=0;o<a0.length;a0.length===q||(0,A.n)(a0),++o){n=a0[o]
m=A.Ig(n)
l=c.$1(n.c)
k=n.f
if(k==null)k=""
j=n.r
j=j==null?"":"\u2022\u2022"+j
i=b.$1(n.w)
h=b.$1(n.x)
r.push(A.d([m,l,k,j,i,h,n.y==null?"":"Attached"],p))}a.push(new A.ds("Documents",B.j5,r,null,B.dl))}if(s.length!==0){r=A.d([],t.tZ)
for(q=s.length,p=t.s,o=0;o<s.length;s.length===q||(0,A.n)(s),++o){g=s[o]
m=g.e
l=m==null||m.length===0
k=g.b
m=l?g.c.c+", "+k:m+", "+k
l=c.$1(g.d)
k=g.r
k=k==null?"":"\u2022\u2022"+k
j=g.w
j=j==null?"":A.aW(j,a2)
i=g.Q
if(i==null)i=""
else{i=A.aW(i,a2)
h=g.as
i+=h==null?"":" "+h.c}r.push(A.d([m,l,k,j,i,b.$1(g.y),b.$1(g.z)],p))}a.push(new A.ds("Insurance policies",B.jf,r,null,B.dl))}for(r=t.Ab.a(new A.vF()),q=B.a.gv(B.aa),r=new A.S(q,r,t.m5),p=a1.a7;r.m();){m=q.gt()
f=p.b3(m)
l={}
l.a=null
l.a=f
k=f.length
if(k!==0)a.push(new A.vG(l,m,d).$0())}return A.J7(a)},
J7(a){var s,r,q=A.d([],t.AM)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.n)(a),++r)q.push(new A.v0(a[r]).$0())
return q},
Ig(a){var s=a.e
if(s!=null&&B.c.B(s.toLowerCase(),a.b.c.toLowerCase()))return s
return a.gcd()},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vJ:function vJ(a){this.a=a},
vK:function vK(a){this.a=a},
vL:function vL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vI:function vI(a){this.a=a},
vH:function vH(a){this.a=a},
vE:function vE(){},
vF:function vF(){},
vG:function vG(a,b,c){this.a=a
this.b=b
this.c=c},
vD:function vD(a){this.a=a},
v0:function v0(a){this.a=a},
v_:function v_(a){this.a=a},
Jx(a,b,c,d){var s,r=new A.vQ(c),q=A.md(a,b,B.b),p=a.gR().gU(),o=A.o(p),n=o.i("p<h.E>"),m=A.E(new A.p(p,o.i("l(h.E)").a(new A.vN(b)),n),n.i("h.E"))
B.a.E(m,new A.vO(q,new A.vR()))
p=A.d([],t.q0)
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.n)(m),++s)p.push(new A.vP(a,m[s],d,r).$0())
return p},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fL:function fL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vQ:function vQ(a){this.a=a},
vR:function vR(){},
vN:function vN(a){this.a=a},
vO:function vO(a,b){this.a=a
this.b=b},
vP:function vP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vM:function vM(a){this.a=a},
aW(a,b){var s,r,q,p,o,n,m,l,k,j=a.b,i=B.k1.h(0,j)
if(i==null)i=j+" "
if(b)return i+"\u2022\u2022\u2022\u2022\u2022"
s=a.a
r=s.a
q=r.a?r.W(0):r
p=new A.Q(q,s.b).k(0)
o=B.c.bR(p,".")
s=o<0
n=s?p:B.c.X(p,0,o)
m=j==="JPY"?0:2
l=B.c.ml(s?"":B.c.aa(p,o+1),m,"0")
k=A.AS(n,j)
j=r.gab(0)<0?"-":""
s=m>0?"."+l:""
return j+i+k+s},
d3(a,b){var s,r=a.b-1
if(!(r>=0&&r<12))return A.a(B.l,r)
r=B.l[r]
s=a.a
s=s===b.a?"":" "+s
return""+a.c+" "+r+s},
DZ(a){var s=a.H().aM(288e8),r=new A.y0(),q=A.bk(s)-1
if(!(q>=0&&q<12))return A.a(B.l,q)
return""+A.aH(s)+" "+B.l[q]+" "+A.b2(s)+", "+A.i(r.$1(A.Ah(s)))+":"+A.i(r.$1(A.Ai(s)))+" SGT"},
y0:function y0(){},
hi(a,b){var s,r
if(a==="personal")return"Personal"
s=null
if(b.aO(a)==="member"){r=A.a7(b.p3,t.N,t.o).h(0,a)
r=r==null?null:r.b
s=r}if(s!=null)return s
r=a.length
if(r===0)r=a
else{if(0>=r)return A.a(a,0)
r=a[0].toUpperCase()+B.c.aa(a,1)}return r},
Jy(d4,d5,d6,d7,d8,d9,e0,e1,e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=null,d0=" no statement has posted yet.",d1=new A.vU(d8),d2=A.aC(e0.H(),B.n),d3=d9-1
if(!(d3>=0&&d3<12))return A.a(B.a0,d3)
d3=B.a0[d3]
s=A.E0(d4,d5,d9,d2,e2)
r=new A.vV(d4,d5,e2,d9,d7)
q=A.vj(d4,d5)
p=r.$1(q)
o=p.d
n=o.x
m=A.DA(d4,d5,d8,e0,e1)
l=s.a
A:{if(B.dL===l){k="Final: every checked account is reconciled for the month."
break A}if(B.dM===l){k="Finalised on the phone with "+A.i(s.d)+" items open."
break A}j=B.b0===l
if(j&&!s.b){k="Draft: the month has not ended."
break A}if(j){k="Draft: "+s.c.length+" statements are not reconciled yet."
break A}k=c9}i=t.s
k=A.d([k],i)
h=n>0
if(h){g=n===1?"":"s"
k.push(""+n+" transaction"+g+" of the month wait in Review and are not counted.")}f=A.d([],t.cM)
for(o=o.y,o=A.md(d4,d5,new A.az(o,A.o(o).i("az<1>"))),g=o.length,e=t.jL,d=!s.b,d3="No spending filed for "+(d3+" "+e2)+" yet.",c=d4.d,b=t.N,a=t.G,a0=m.b,a1=A.N(a0),a2=a1.i("l(1)"),a3=a1.i("p<1>"),a4=a3.i("h<e0>(h.E)"),a5=n===1,a6=""+n+" transaction",a7=0;a7<o.length;o.length===g||(0,A.n)(o),++a7){a8=o[a7]
a9=a8===q?p:r.$1(a8)
b0=a9.d
b1=A.L5(a9,d8)
b2=a2.a(new A.vS(a8))
b3=a4.a(new A.vT())
b4=a9.c
b5=b4.a
b6=d1.$1(b5)
b7=b0.a
b8=d1.$1(b7)
b9=b0.c
b9=b9.a.a.gab(0)===0?c9:"after "+A.i(d1.$1(b9))+" of refunds"
c0=b7.b
c1=b5.b
if(c0!==c1)A.j(A.ae(c1,c0))
b7=b7.a
b7=b5.a.D(0,new A.Q(b7.a.W(0),b7.b))
c2=B.e.h(0,c1)
if(c2==null)A.j(A.y(c1,"currency","is not a supported currency"))
if((b7.b<=0?0:Math.max(b7.gA().b,0))>c2)A.j(A.A(c1+" allows "+A.i(c2)+" decimal places",b7.k(0),c9))
b5=A.d([new A.e4("Money in",b6,c9),new A.e4("Spent",b8,b9),new A.e4("Saved",d1.$1(new A.v(b7,c1)),b1)],e)
b6=A.d([],e)
for(b7=b0.d,b8=b7.length,c3=0;b9=b7.length,c3<b9;b7.length===b8||(0,A.n)(b7),++c3){c4=b7[c3]
b9=c4.a
if(b9==null)b9="No category yet"
else{c0=A.a7(c,b,a).h(0,b9)
c0=c0==null?c9:c0.c
b9=A.hk(c0==null?b9:c0)}b6.push(new A.e4(b9,d1.$1(c4.b),c9))}if(b9!==0)b7=c9
else{b7=A.d([d3],i)
if(h)b7.push(a6+(a5?"":"s")+" of the month wait in Review.")
if(d)b7.push("Statements for the month come after it ends.")
b7=B.a.S(b7," ")}b8=A.d([],i)
b9=b0.w
if(b9>0){c0=A.i(d1.$1(b0.r))
c1=b9===1?"":"s"
b8.push("Spent includes "+c0+" from "+b9+" alert"+c1+d0)}b4=b4.c
if(b4>0){b9=b4===1?"":"s"
b8.push("Money in includes "+b4+" alert"+b9+d0)}b4=A.d([],e)
for(b9=a3.i("@<h.E>").a3(a1.i("e0")),b3=new A.eV(new A.p(a0,b2,a3).gv(0),b3,B.bb,b9.i("eV<1,2>")),b9=b9.y[1];b3.m();){b2=b3.d
if(b2==null)b2=b9.a(b2)
c0=b2.a
c1=b2.geU()
c5=b2.c
c5===$&&A.mo()
if(c5==null)c5="No balance yet"
c6=b2.d
c6===$&&A.mo()
b2=c6===b2.geU()?c9:""+(b2.geU()-c6)+" with no balance yet, not in the total"
b4.push(new A.e4(c0.c+" ("+c1+")",c5,b2))}B.a.n(f,new A.kX(a8,b5,b6,b7,b8,b4))}A.hi(d5,d4)
if(d6!=null)A.DZ(d6)
d3=A.d([],t.nK)
for(o=a0.length,a7=0;a7<a0.length;a0.length===o||(0,A.n)(a0),++a7)for(i=a0[a7].b,h=i.length,c3=0;c3<i.length;i.length===h||(0,A.n)(i),++c3)for(g=i[c3].b,e=g.length,c7=0;c7<g.length;g.length===e||(0,A.n)(g),++c7){c8=g[c7]
d=c8.as
if(d!=null)d3.push(new A.jv(c8.b,d))}return new A.oE(k,f,d3)},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jv:function jv(a,b){this.a=a
this.b=b},
oE:function oE(a,b,c){this.d=a
this.e=b
this.f=c},
vU:function vU(a){this.a=a},
vV:function vV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vS:function vS(a){this.a=a},
vT:function vT(){},
ni(a,b){return new A.ka(a,b)},
Lq(a){return new A.zC(a,B.eC)},
fS:function fS(a,b){this.a=a
this.b=b},
fX:function fX(){},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(){},
zC:function zC(a,b){this.a=a
this.b=b},
zB:function zB(){},
GM(a){t.k2.a(a)
return B.bP.B(0,a.c)&&a.a!=="fromEvent"},
GL(a){return B.a.bq(a.d,new A.rr())},
jd(a){var s
A:{if(a instanceof A.h6){s="That passphrase did not open SanthIQ's key. Type it again."
break A}if(a instanceof A.kI){s="Sync is not on yet. On the phone: Settings, Devices, turn sync on, then try again."
break A}if(a instanceof A.kF){s="SanthIQ/Sync was not found in this account. Turn sync on on the phone; if it is on, the page may not be allowed to see the phone's files (see the setup guide, W1)."
break A}if(a instanceof A.fX){s="Google's sign-in ended (it lasts about an hour). Sign in again; nothing is lost."
break A}if(a instanceof A.ka){s="Google answered with an error (HTTP "+a.a+"). Try again in a minute."
break A}if(a instanceof A.kb){s="Google took too long to answer. Check the connection and try again; nothing is lost."
break A}if(a instanceof A.b7||t.bs.b(a)){s="Something in the sync folder could not be read."
break A}s="Could not reach Google. Check the connection and try again."
break A}return s},
KT(a,b){var s,r,q,p=t.f,o=t.N,n=t.X,m=p.a(B.z.be(a,null)).F(0,o,n),l=m.h(0,"clientId")
l.toString
A.b(l)
s=m.h(0,"categoryFlags")
s.toString
s=A.G3(p.a(s).F(0,o,n))
r=m.h(0,"settings")
r.toString
n=A.FW(p.a(r).F(0,o,n))
o=A.d([],t.mt)
r=m.h(0,"setupSteps")
r.toString
r=p.a(r).h(0,"steps")
r.toString
r=J.d4(t.j.a(r),t.I)
p=r.$ti
r=new A.ar(r,r.gq(0),p.i("ar<O.E>"))
p=p.i("O.E")
while(r.m()){q=r.d
o.push(A.GX(q==null?p.a(q):q))}return new A.ri(l,b,s,n.d,o)},
AR(a){var s=A.E(a.e,t.N)
B.a.bh(s)
return B.c.X(A.uM(B.aC.M(B.E.M(a.b+"\n"+B.a.S(s,"\n"))).a),0,16)},
ri:function ri(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ef:function ef(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c,d,e,f){var _=this
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
rk:function rk(a){this.a=a},
rj:function rj(a){this.a=a},
rD:function rD(){},
rE:function rE(){},
ry:function ry(a,b){this.a=a
this.b=b},
rB:function rB(){},
rC:function rC(){},
rx:function rx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rn:function rn(a,b){this.a=a
this.b=b},
rw:function rw(){},
rv:function rv(){},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(a,b){this.a=a
this.b=b},
rA:function rA(){},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rQ:function rQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rl:function rl(){},
rN:function rN(){},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a){this.a=a},
rs:function rs(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a,b,c){this.a=a
this.b=b
this.c=c},
rP:function rP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rp:function rp(a){this.a=a},
rF:function rF(a){this.a=a},
rr:function rr(){},
rL:function rL(a){this.a=a},
rK:function rK(a,b){this.a=a
this.b=b},
rG:function rG(a){this.a=a},
rH:function rH(a){this.a=a},
rm:function rm(a){this.a=a},
rt:function rt(a,b){this.a=a
this.b=b},
rI:function rI(a,b){this.a=a
this.b=b},
eF(a){var s
A:{if("SGD"===a){s="Singapore"
break A}if("INR"===a){s="India"
break A}s="Other"
break A}return s},
KX(a,b){A.b(a)
A.b(b)
return A.uS(a)!==A.uS(b)?A.uS(a)-A.uS(b):B.c.l(a,b)},
uS(a){var s
A:{if("SGD"===a){s=0
break A}if("INR"===a){s=1
break A}s=2
break A}return s},
md(a,b,c){var s,r,q=A.ab(t.N)
for(s=a.gR().gU(),s=s.gv(s);s.m();){r=s.gt()
if(r.r===b&&r.d!==B.y)q.n(0,r.e)}q.a1(0,c)
if(q.a===0)q.n(0,A.vj(a,b))
q=A.E(q,q.$ti.c)
B.a.E(q,A.Eb())
return q},
J8(a){var s,r=a.d
A:{if(B.x===r){s=B.c7
break A}if(B.o===r){s=B.c9
break A}s=B.c8
break A}return s},
DV(a){var s=a.as
switch(s==null?null:s.a){case B.bz:s="Home loan"
break
case B.aW:s="Personal loan"
break
case B.bA:s="Commercial loan"
break
case B.bB:s="Other loan"
break
case null:case void 0:s="Loan, type not set"
break
default:s=null}return s},
Dv(a,b){var s,r=B.d.u(A.f(b.a,b.b,b.c).aX(A.f(a.a,a.b,a.c)).a,864e8)
if(r<=0)s="today"
else s=r===1?"yesterday":""+r+" days ago"
return s},
Jm(a,b,c,d){var s,r,q
if(a==null)return"No statement yet"
s=A.f(d.a,d.b,d.c)
r=a.a
q=a.b
if(B.d.u(s.aX(A.f(r,q,a.c)).a,864e8)>365){s=q-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return"No statement since "+B.l[s]+" "+r+": if it is closed, mark it closed on the phone"}s=A.d([],t.s)
if(c)s.push("Out of date: statement to "+A.d3(a,d)+", "+A.Dv(a,d))
if(b.length!==0)s.push("Statements missing: "+B.a.S(b,", "))
return s.length===0?null:B.a.S(s,". ")},
hk(a){if(a.toUpperCase()!==a||a.toLowerCase()===a)return a
return new A.ak(A.d(a.split(" "),t.s),t.ff.a(new A.wQ()),t.zK).S(0," ")},
Ec(a){var s,r=A.KD(a),q=r.gfa(),p=r.a,o=p.a
q=o.a.gab(0)<=0?null:A.Cf(q.a.gcq().f6(0,o.gcq()),4)
s=q==null?null:q.a4(0,new A.Q(A.aR(100),0)).ct(0,B.b5).az().k(0)+"%"
if(s==null)return null
return r.gfa().D(0,p).a.a.gab(0)<0?"not shown":s},
L5(a,b){var s,r=A.Ec(a)
A:{if(r==null){s=null
break A}if("not shown"===r){s="savings rate not shown: spent is over twice the money in recorded"
break A}s=b?"savings rate hidden":"savings rate "+r
break A}return s},
yS(a){var s,r,q,p,o,n,m,l=null,k=B.c.G(a).toLowerCase(),j=A.C("^(\\d{4})-(\\d{1,2})-(\\d{1,2})$",!0,!1).aj(k)
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
p=B.k3.h(0,r)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
q=A.Z(s,l,l)}else{o=l
p=o
q=p}}}if(q==null||p==null||o==null||p<1||p>12||o<1||o>A.aH(A.f(q,p+1,0)))return l
return new A.K(q,p,o)},
me(a){return a==null?"":""+a.c+"/"+a.b+"/"+a.a},
eJ:function eJ(a,b,c){this.c=a
this.a=b
this.b=c},
wQ:function wQ(){},
L_(a){var s
A:{if(B.b2===a){s="Could not be read"
break A}if(B.az===a){s="Waiting for its account"
break A}if(B.v===a||B.N===a){s="Possible match to check"
break A}if(B.bO===a){s="Money in transit"
break A}if(B.b1===a){s="Statement doesn't add up"
break A}if(B.H===a){s="Changed in two places"
break A}if(B.ac===a){s="Books disagree"
break A}if(B.bF===a){s="Rules disagree"
break A}if(B.f===a||B.h===a){s="Change not applied"
break A}if(B.dN===a||B.dO===a){s="Needs a category"
break A}if(B.bG===a){s="Statement missing"
break A}if(B.bH===a){s="May not be from the bank"
break A}if(B.bI===a){s="Payment reminder"
break A}if(B.bJ===a){s="Charge not recognised"
break A}if(B.bK===a){s="History start to check"
break A}if(B.ab===a){s="Document to check"
break A}if(B.bL===a){s="Invoice to check"
break A}if(B.bM===a){s="Payment failed"
break A}if(B.bN===a){s="Loan on a card statement"
break A}s=null}return s},
KP(a,b,c){var s,r=A.hs(a,$.Fn(),t.tj.a(t._.a(new A.z0(c))),null)
if(b){s=$.F7()
s=A.a4(r,s,"\u2022\u2022\u2022\u2022\u2022")}else s=r
return s},
Jz(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aC(a9.H(),B.n),a2=A.Ls(a6,a7),a3=A.Ll(a6,a2),a4=t.N,a5=A.w(a4,t.Bz)
for(s=A.KZ(a6,a1),r=s.length,q=t.J,p=0;p<s.length;s.length===r||(0,A.n)(s),++p){o=s[p]
n=A.L_(o.b)
m=a5.h(0,n)
if(m==null){m=A.d([],q)
a5.j(0,n,m)
n=m}else n=m
J.bT(n,o)}s=A.d([],t.kW)
for(r=A.bK(a2,0,t.t5),q=J.T(r.a),n=r.b,r=new A.at(q,n,A.o(r).i("at<1>")),m=t.s,l=a6.d,k=t.G;r.m();){j=r.c
j=j>=0?new A.t(n+j,q.gt()):A.j(A.aq())
o=j.a
i=j.b
j=i.d
if(j.length===0)j="(no payee)"
h=i.c===B.q?"Money out":"Money in"
g=i.e.length
f=A.aW(i.f,a8)
if(!(o>=0&&o<a3.length))return A.a(a3,o)
e=a3[o]
A:{if(e==null){d=null
break A}d=B.ax.h(0,e.a)
d.toString
d=A.d([d],m)
c=e.b
if(c!=null){b=A.a7(l,a4,k).h(0,c)
b=b==null?null:b.c
d.push(A.hk(b==null?c:b))}d=B.a.S(d,", ")
break A}s.push(new A.hV(j,i,e,d,h,g,f))}a4=B.a.a9(a2,0,new A.vW(),t.S)
r=A.d([],t.qH)
for(q=new A.aa(a5,a5.$ti.i("aa<1,2>")).gv(0);q.m();){n=q.d
a=n.a
a0=n.b
n=A.d([],m)
for(l=J.b4(a0),k=l.bb(a0,100),j=k.$ti,k=new A.ar(k,k.gq(0),j.i("ar<ag.E>")),j=j.i("ag.E");k.m();){h=k.d
n.push(A.KP((h==null?j.a(h):h).d,a8,a1))}l=l.gq(a0)
r.push(new A.dA(a,n,l))}B.a.E(r,new A.vX())
return new A.t5(s,a4,r)},
hV:function hV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a,b,c){this.a=a
this.b=b
this.c=c},
z0:function z0(a){this.a=a},
vW:function vW(){},
vX:function vX(){},
JA(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="currency",a4="is not a supported currency",a5=b2.e,a6=t.N,a7=t.R,a8=A.a7(a5,a6,a7).gU(),a9=A.o(a8),b0=a9.i("p<h.E>"),b1=A.E(new A.p(a8,a9.i("l(h.E)").a(new A.vY(b3)),b0),b0.i("h.E"))
B.a.E(b1,new A.vZ())
s=A.w(a6,t.S)
r=A.w(a6,t.xC)
q=A.w(t.xG,t.C)
for(a8=b2.eS(b3),a9=a8.$ti,a9.i("l(h.E)").a(A.ji()),a8=a8.gv(0),a9=new A.S(a8,A.ji(),a9.i("S<h.E>")),b0=t.A;a9.m();){p=a8.gt()
o=p.z
if(o==null)o=""
n=A.C("\\s+",!0,!1)
o=new A.bx(B.c.G(A.a4(o.toUpperCase(),n," ")),p.c,p.e)
n=q.h(0,o)
if(n==null){n=A.d([],b0)
q.j(0,o,n)
o=n}else o=n
J.bT(o,p)}for(a8=new A.aa(q,q.$ti.i("aa<1,2>")).gv(0),a9=t.s;a8.m();){b0=a8.d
m=b0.a
l=m.a
k=m.b
j=m.c
i=b0.b
for(b0=b1.length,p=J.ap(i),h=0;h<b1.length;b1.length===b0||(0,A.n)(b1),++h){g=b1[h]
if(g.eR(l,k,b3,j)){o=g.a
n=s.h(0,o)
if(n==null)n=0
s.j(0,o,n+p.gq(i))}}f=A.AY(l,A.a7(a5,a6,a7).gU(),k,b3,j)
if(f instanceof A.fV){e=f.a
for(b0=p.gv(i);b0.m();){p=b0.gt()
d=p.z
if(d==null)d=""
c=r.h(0,d)
if(c==null){o=p.f.b
n=$.M()
b=B.e.h(0,o)
if(b==null)A.j(A.y(o,a3,a4))
if((n.b<=0?0:Math.max(n.gA().b,0))>b)A.j(A.A(o+" allows "+A.i(b)+" decimal places",n.k(0),null))
c=new A.bx(0,new A.v(n,o),A.ab(a6))}a=c.b
a0=c.c
o=a.b
p=p.f
n=p.b
if(o===n){if(n!==o)A.j(A.ae(o,n))
p=a.a.D(0,p.a)
n=new A.v(p,o)
b=B.e.h(0,o)
if(b==null)A.j(A.y(o,a3,a4))
if((p.b<=0?0:Math.max(p.gA().b,0))>b)A.j(A.A(o+" allows "+A.i(b)+" decimal places",p.k(0),null))
p=n}else p=a
o=A.d([],a9)
for(n=e.length,h=0;h<e.length;e.length===n||(0,A.n)(e),++h){g=e[h]
o.push('"'+g.c+'" as '+A.D9(b2,g))}a0.a1(0,o)
r.j(0,d,new A.bx(c.a+1,p,a0))}}}a1=new A.w2(b2,s)
a5=t.vV
a6=A.d([],a5)
for(a7=A.N(b1),a8=a7.i("l(1)"),a9=a8.a(new A.w_()),b0=B.a.gv(b1),a7=a7.i("S<1>"),a9=new A.S(b0,a9,a7);a9.m();)a6.push(a1.$1(b0.gt()))
a5=A.d([],a5)
for(a8=a8.a(new A.w0()),a9=B.a.gv(b1),a7=new A.S(a9,a8,a7);a7.m();)a5.push(a1.$1(a9.gt()))
a7=A.d([],t.yk)
for(a8=new A.aa(r,r.$ti.i("aa<1,2>")).gv(0);a8.m();){a2=a8.d
a9=a2.a
b0=a2.b
p=A.aW(b0.b,b4)
o=b0.c
o=A.E(o,A.o(o).c)
B.a.bh(o)
a7.push(new A.cm(a9,b0.a,p,o))}B.a.E(a7,new A.w1())
return new A.t7(a6,a5,a7)},
D9(a,b){var s,r,q=B.ax.h(0,b.d)
q.toString
q=A.d([q],t.s)
s=b.e
if(s!=null){r=A.a7(a.d,t.N,t.G).h(0,s)
r=r==null?null:r.c
q.push(A.hk(r==null?s:r))}return B.a.S(q,", ")},
dB:function dB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t7:function t7(a,b,c){this.a=a
this.b=b
this.c=c},
vY:function vY(a){this.a=a},
vZ:function vZ(){},
w2:function w2(a,b){this.a=a
this.b=b},
w_:function w_(){},
w0:function w0(){},
w1:function w1(){},
KU(a,b){var s,r,q,p,o="access_token",n="error"
if(a.length===0)return new A.ii()
s=null
try{s=A.Hb(a)}catch(r){return new A.em("The answer from Google could not be read.")}if(!s.C(o)&&!s.C(n))return new A.ii()
if(b==null||J.as(s,"state")!==b)return new A.em("That sign-in was not started from this tab. Sign in again.")
if(J.as(s,n)!=null)return new A.em(J.as(s,n)==="access_denied"?"Sign-in was cancelled.":"Google refused the sign-in.")
q=J.as(s,o)
if(q==null||q.length===0)return new A.em("Google sent no token.")
p=J.as(s,"scope")
if(!B.a.B(A.d((p==null?"":p).split(" "),t.s),B.a.ga_(B.dg)))return new A.em("Access to SanthIQ's own Drive files was not allowed, so the page cannot read them.")
p=J.as(s,"expires_in")
p=A.kU(p==null?"":p,null)
return new A.fY(q,A.A3(0,0,0,p==null?3600:p))},
DW(a){var s,r,q,p=B.c.G(a).toLowerCase(),o=B.c.eO(p,"@")
if(o<1)return"\u2022\u2022\u2022"
s=B.c.X(p,0,o)
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
r=r>1?s[r-1]:""
return q+"\u2022\u2022\u2022"+r+B.c.aa(p,o)},
wv(a,b){var s=0,r=A.I(t.eM),q,p,o,n,m,l
var $async$wv=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:m=t.N
s=3
return A.q(a.$3$headers("GET",A.j7("https","openidconnect.googleapis.com","/v1/userinfo",null),A.R(["authorization","Bearer "+b],m,m)),$async$wv)
case 3:l=d
m=l.a
if(m===401)throw A.k(new A.fX())
if(m!==200)throw A.k(A.ni(m,"account check"))
p=t.f.a(B.z.be(B.O.c2(l.b),null))
o=p.h(0,"email")
if(typeof o!="string"||o.length===0)throw A.k(A.ni(m,"account check"))
n=p.h(0,"hd")
if(typeof n=="string"&&n.length!==0){q=new A.il(A.DW(o))
s=1
break}q=new A.im(A.uM(B.aC.M(B.E.M(B.c.G(o).toLowerCase())).a),A.DW(o))
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$wv,r)},
J9(a,b){var s=b.cy
if(s==null)return"The phone has not recorded SanthIQ's Google account yet."
if(s.a!==a.a)return"This is not SanthIQ's Google account ("+s.b+"). Sign in with that account."
return null},
tg:function tg(){},
ii:function ii(){},
fY:function fY(a,b){this.a=a
this.b=b},
em:function em(a){this.a=a},
fR:function fR(){},
im:function im(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
JB(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.a6($.M(),a5),b=A.AZ(a0,a1,12,a5,a2,a4,a6),a=A.w(t.T,t.r9)
for(s=A.bK(b,0,t.wy),r=J.T(s.a),q=s.b,s=new A.at(r,q,A.o(s).i("at<1>")),p=t.B;s.m();){o=s.c
o=o>=0?new A.t(q+o,r.gt()):A.j(A.aq())
n=o.a
for(o=o.b.d.d,m=o.length,l=0;l<o.length;o.length===m||(0,A.n)(o),++l){k=o[l]
j=k.a
i=a.h(0,j)
if(i==null){i=A.i6(b.length,c,!1,p)
a.j(0,j,i)
j=i}else j=i
J.Bl(j,n,k.b)}}h=new A.w6(c,new A.w5(a3),a5)
s=a.$ti.i("aa<1,2>")
g=A.E(new A.aa(a,s),s.i("h.E"))
B.a.E(g,new A.w3(new A.w8(c)))
f=new A.w4(b)
s=t.s
r=A.d([],s)
for(n=b.length-1;n>=0;--n)r.push(f.$1(n))
q=A.d([],t.vk)
for(p=g.length,o=a0.d,m=t.N,j=t.G,l=0;l<g.length;g.length===p||(0,A.n)(g),++l){e=g[l]
i=e.a
if(i==null)i="No category yet"
else{d=A.a7(o,m,j).h(0,i)
d=d==null?null:d.c
i=A.hk(d==null?i:d)}q.push(h.$2(i,e.b))}p=A.d([],t.AA)
for(o=b.length,l=0;l<b.length;b.length===o||(0,A.n)(b),++l)p.push(b[l].d.a)
p=h.$2("Spent, after refunds",p)
o=A.d([],s)
for(j=A.N(b).i("aZ<1>"),i=new A.aZ(b,j),i=new A.ar(i,i.gq(0),j.i("ar<ag.E>")),j=j.i("ag.E");i.m();){d=i.d
d=(d==null?j.a(d):d).d.x
o.push(d===0?"":""+d)}s=A.d(["Each month in "+a5+", as the phone counts it; a refund lowers its category."],s)
m=A.ab(m)
for(j=b.length,l=0;l<b.length;b.length===j||(0,A.n)(b),++l)for(i=b[l].d.y,i=new A.cq(i,i.r,i.e,A.o(i).i("cq<1>"));i.m();)m.n(0,A.b(i.d))
return new A.ix(a5,r,q,p,o,s,m)},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w5:function w5(a){this.a=a},
w6:function w6(a,b,c){this.a=a
this.b=b
this.c=c},
w7:function w7(){},
w8:function w8(a){this.a=a},
w9:function w9(){},
w3:function w3(a){this.a=a},
w4:function w4(a){this.a=a},
JD(b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="currency",b5="is not a supported currency",b6=A.aC(c2.H(),B.n),b7=B.c.G(c0.e).toLowerCase(),b8=A.d([],t.A)
for(s=b9.me(c0.b,c0.a),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=b7.length!==0,p=c0.r,o=p!=null,n=c0.f.a,m=c0.d,l=m!=null,k=c0.c,j=k!=null;s.m();){i=r.gt()
if(j){h=i.w
h=A.f(h.a,h.b,h.c).l(0,A.f(k.a,k.b,k.c))<0}else h=!1
if(h)continue
if(l){h=i.w
h=A.f(h.a,h.b,h.c).l(0,A.f(m.a,m.b,m.c))>0}else h=!1
if(h)continue
h=!0
switch(n){case 0:break
case 1:g=i.d
if(g!=null)h=(g===B.k||g===B.w)&&i.Q==null
break
case 2:h=A.jh(i)===B.aj
break
case 3:h=i.d
if(h!=null)h=(h===B.k||h===B.w)&&i.Q==null
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
if(!B.c.B(g.toLowerCase(),b7)){h=i.db
if(h==null)h=""
h=!B.c.B(h.toLowerCase(),b7)}}if(h)continue
B.a.n(b8,i)}s=new A.wd()
r=new A.wc(s)
switch(c0.w.a){case 0:s=new A.we(s)
break
case 1:break
case 2:s=new A.wf(r)
break
case 3:s=r
break
default:s=b3}B.a.E(b8,s)
s=t.N
r=t.B
f=A.w(s,r)
e=A.w(s,r)
for(r=b8.length,d=0;q=b8.length,d<q;b8.length===r||(0,A.n)(b8),++d){c=b8[d]
b=c.e===B.p?f:e
q=c.f
p=q.b
o=b.h(0,p)
if(o==null){o=$.M()
n=new A.v(o,p)
a=B.e.h(0,p)
if(a==null)A.j(A.y(p,b4,b5))
if((o.b<=0?0:Math.max(o.gA().b,0))>a)A.j(A.A(p+" allows "+A.i(a)+" decimal places",o.k(0),b3))
o=n}n=o.b
if(p!==n)A.j(A.ae(n,p))
q=o.a.D(0,q.a)
a=B.e.h(0,n)
if(a==null)A.j(A.y(n,b4,b5))
if((q.b<=0?0:Math.max(q.gA().b,0))>a)A.j(A.A(n+" allows "+A.i(a)+" decimal places",q.k(0),b3))
b.j(0,p,new A.v(q,n))}a0=q===0?1:B.d.u(q+100-1,100)
a1=B.d.l1(c0.x,0,a0-1)
a2=new A.wb(b9)
r=b8.length
q=A.d([],t.s)
p=A.Ae(new A.az(f,f.$ti.i("az<1>")),s)
p.a1(0,new A.az(e,e.$ti.i("az<1>")))
p=A.E(p,A.o(p).c)
B.a.E(p,A.Eb())
o=p.length
d=0
for(;d<p.length;p.length===o||(0,A.n)(p),++d){a3=p[d]
n=A.eF(a3)
m=f.h(0,a3)
if(m==null){m=$.M()
l=new A.v(m,a3)
a=B.e.h(0,a3)
if(a==null)A.j(A.y(a3,b4,b5))
if((m.b<=0?0:Math.max(m.gA().b,0))>a)A.j(A.A(a3+" allows "+A.i(a)+" decimal places",m.k(0),b3))
m=l}m=A.aW(m,c1)
l=e.h(0,a3)
if(l==null){l=$.M()
k=new A.v(l,a3)
a=B.e.h(0,a3)
if(a==null)A.j(A.y(a3,b4,b5))
if((l.b<=0?0:Math.max(l.gA().b,0))>a)A.j(A.A(a3+" allows "+A.i(a)+" decimal places",l.k(0),b3))
l=k}q.push(n+" ("+a3+"): "+m+" in, "+A.aW(l,c1)+" out")}p=A.d([],t.nS)
for(o=A.c1(b8,a1*100,b3,t.W).bb(0,100),n=o.$ti,o=new A.ar(o,o.gq(0),n.i("ar<ag.E>")),m=b6.a,n=n.i("ag.E"),l=b9.d,k=t.G;o.m();){j=o.d
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
a7=j.e===B.q?"-":""
a8=A.aW(j.f,c1)
a9=j.d
b0=a9==null
if(b0)b1="Not filed yet"
else{b1=B.ax.h(0,a9)
b1.toString}b2=j.Q
if(b2!=null){a9=A.a7(l,s,k).h(0,b2)
a9=a9==null?b3:a9.c
a9=A.hk(a9==null?b2:a9)}else{if(!b0)a9=a9===B.k||a9===B.w
else a9=!1
a9=a9?"No category yet":""}b0=A.jh(j)===B.aj?"Alert, not posted":""
j=j.db
if(j==null)j=""
p.push(new A.li(i,""+h.c+" "+g+a4,a5,a6,a7+a8,b1,a9,b0,j))}return new A.ty(p,r,a1,a0,q)},
Ee(a){var s
A:{if("sms"===a){s="SMS alert"
break A}if("email"===a){s="Email alert"
break A}if("statement"===a){s="Statement transaction"
break A}if("manual"===a){s="Entered by you"
break A}if("operation"===a){s="Made in SanthIQ"
break A}s="Other source ("+a+")"
break A}return s},
JE(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.b.a,c=d.h(0,b)
if(c==null)return e
s=A.aC(a1.H(),B.n)
r=new A.wg(a0)
q=t.s
p=A.d([],q)
for(o=c.c,n=a.hi(o,!0),m=J.T(n.a),n=new A.S(m,n.b,n.$ti.i("S<1>")),l=c.a,k=s.a;n.m();){j=m.gt()
if(j.cx===l){i=A.Ee(j.y.a)
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
p.push(i+", "+(""+j.c+" "+h+g))}}q=A.d([],q)
for(n=a.c9(o),m=J.T(n.a),n=new A.S(m,n.b,n.$ti.i("S<1>"));n.m();){j=m.gt()
if(j.ay===l&&j.d===B.G){i=A.i(r.$1(j.f))
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
q.push(i+" on "+(""+j.c+" "+h+g))}}n=c.ay
f=n==null?e:d.h(0,n)
d=c.w
n=A.d3(d,s)
m=c.x
d=m.I(0,d)?"":" ("+A.d3(m,s)+", Singapore date)"
o=new A.wh(a).$1(o)
m=c.z
if(m==null)m=""
k=c.e===B.q?"Money out":"Money in"
j=A.i(r.$1(c.f))
i=c.d
if(i==null)i="To file"
else{i=B.ax.h(0,i)
i.toString}i=A.d([new A.t("Date",n+d),new A.t("Account",o),new A.t("Payee",m),new A.t("Amount",k+", "+j),new A.t("Filed as",i)],t.M)
d=c.Q
if(d!=null){o=A.a7(a.d,t.N,t.G).h(0,d)
o=o==null?e:o.c
i.push(new A.t("Category",A.hk(o==null?d:o)))}d=c.as
if(d!=null)i.push(new A.t("For",A.z_(a,d)))
switch(A.jh(c)){case B.dG:d="Posted: a statement shows it"
break
case B.aj:d="From an alert, no statement has posted it yet"
break
case null:case void 0:d=c.y.d?"Verified":"Not verified"
break
default:d=e}i.push(new A.t("State",d))
i.push(new A.t("Came from",A.Ee(c.y.a)))
if(p.length!==0)i.push(new A.t("The same payment, also as",B.a.S(p,"; ")))
if(f!=null){d=f.z
if(d==null)d=""
i.push(new A.t("Refund of",d+" "+A.i(r.$1(f.f))+" on "+A.d3(f.w,s)))}if(q.length!==0)i.push(new A.t("Refunded",B.a.S(q,"; ")))
if(A.a7(a.rx,t.N,t.y6).C(l))i.push(B.kS)
d=c.db
i.push(new A.t("Note",d==null?"":d))
return i},
dL:function dL(a,b,c){this.c=a
this.a=b
this.b=c},
dK:function dK(a,b,c){this.c=a
this.a=b
this.b=c},
ci:function ci(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
li:function li(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ty:function ty(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wd:function wd(){},
wc:function wc(a){this.a=a},
we:function we(a){this.a=a},
wf:function wf(a){this.a=a},
wb:function wb(a){this.a=a},
wg:function wg(a){this.a=a},
wh:function wh(a){this.a=a},
Ek(a){return v.mangledGlobalNames[a]},
mc(a){var s,r=$.bj()
for(s=a.length-1;s>=0;--s)r=r.aZ(0,8).D(0,A.aR(a[s]))
return r},
Jo(a,b){var s,r,q
for(s=a,r=0;r<32;++r){q=$.F8()
s.toString
q=q.dj(0,s).aD(0)
b.$flags&2&&A.B(b)
if(!(r<32))return A.a(b,r)
b[r]=q
s=s.bY(0,8)}if(!J.a1(s,$.bj()))throw A.k(A.y(a,null,null))
return b},
vi(a){switch(B.d.P(a.length,4)){case 1:return B.B.M(a+"===")
case 2:return B.B.M(a+"==")
case 3:return B.B.M(a+"=")
default:return B.B.M(a)}},
mb(a){var s,r,q
t.D.i("be.S").a(a)
s=B.dZ.gaB().M(a)
r=s.length
for(;q=r-1,B.c.bZ(s,"=",q);r=q);return B.c.X(s,0,r)},
wM(a,b,c){var s=0,r=A.I(t.l2),q
var $async$wM=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.decrypt(a,b,c)),t.h),$async$wM)
case 3:q=e
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$wM,r)},
mf(a,b,c){var s=0,r=A.I(t.p),q,p
var $async$mf=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.deriveBits(a,b,c)),t.h),$async$mf)
case 3:q=p.ih(e,0,null)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$mf,r)},
wO(a,b){var s=0,r=A.I(t.l2),q
var $async$wO=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.digest(a,b)),t.h),$async$wO)
case 3:q=d
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$wO,r)},
wY(a,b,c){var s=0,r=A.I(t.l2),q
var $async$wY=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.encrypt(a,b,c)),t.h),$async$wY)
case 3:q=e
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$wY,r)},
mh(a){var s=0,r=A.I(t.m),q,p
var $async$mh=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:p=A
s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.exportKey("jwk",a)),t.X),$async$mh)
case 3:q=p.x(c)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$mh,r)},
mj(a,b,c){var s=0,r=A.I(t.m),q,p
var $async$mj=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.generateKey(a,b,c)),t.X),$async$mj)
case 3:q=p.x(e)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$mj,r)},
je(a,b,c,d){var s=0,r=A.I(t.m),q,p
var $async$je=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.q(A.bF(A.DC(v.G.crypto.subtle,"importKey",["jwk",a,b,c,d],p),p),$async$je)
case 3:q=f
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$je,r)},
hm(a,b,c,d){var s=0,r=A.I(t.m),q,p
var $async$hm=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.q(A.bF(A.DC(v.G.crypto.subtle,"importKey",["raw",a,b,c,d],p),p),$async$hm)
case 3:q=f
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$hm,r)},
bD(a){if(t.p.b(a))return a
return new Uint8Array(A.aF(a))},
mn(a,b,c){var s=0,r=A.I(t.p),q,p
var $async$mn=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.sign(a,b,c)),t.h),$async$mn)
case 3:q=p.ih(e,0,null)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$mn,r)},
zJ(a,b,c,d){var s=0,r=A.I(t.y),q
var $async$zJ=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:s=3
return A.q(A.bF(A.x(v.G.crypto.subtle.verify(a,b,c,d)),t.y),$async$zJ)
case 3:q=f
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$zJ,r)},
jC(a,b,c,d,e,f){var s=0,r=A.I(t.m),q,p,o,n,m
var $async$jC=A.J(function(g,h){if(g===1)return A.F(h,r)
for(;;)switch(s){case 0:s=3
return A.q(a.cF(),$async$jC)
case 3:n=h
m=J.aB(n)
if(m!==e)throw A.k(A.G1(m,e))
p=A.bD(n)
o=A.d([],t.s)
if(c)o.push("encrypt")
if(b)o.push("decrypt")
q=A.hm(p,f,!1,o)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$jC,r)},
G1(a,b){return new A.c5(!1,null,null,"Secret key is "+a*8+" bits, expected "+b*8+" bits.")},
c3(e6,e7,e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=65536,e5=e8.length
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
e6.$flags&2&&A.B(e6)
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
B4(a){var s,r
try{s=J.eC(a)
if(s.gau(a)===$.FD())s.aI(a,0,s.gq(a),0)}catch(r){}},
wj(a,b){var s,r=a.length,q=r-1,p=a.$flags|0
for(;;){if(!(b!==0&&q>=0))break
if(!(q>=0))return A.a(a,q)
s=a[q]+b
p&2&&A.B(a)
a[q]=s&255
b=s/256|0;--q}},
AM(a,b){var s,r,q,p,o,n,m=$.e_()
if(m){v.G.window.crypto.getRandomValues(a)
return}b=$.EE()
for(m=a.length,s=a.$flags|0,r=0;r<m;){q=r+3
p=r+1
if(q<m){o=b.cM(4294967296)
s&2&&A.B(a)
a[r]=o>>>24
if(!(p<m))return A.a(a,p)
a[p]=o>>>16&255
n=r+2
if(!(n<m))return A.a(a,n)
a[n]=o>>>8&255
a[q]=o&255
r+=4}else{q=b.cM(256)
s&2&&A.B(a)
a[r]=q
r=p}}},
cE(a){var s,r,q,p=a.d
if(p===B.y)return"Cash ("+a.e+")"
s=A.C("(\\d{4})$",!0,!1).aj(a.b)
if(s==null)r=null
else{s=s.b
if(1>=s.length)return A.a(s,1)
r=s[1]}q=a.dy
A:{if(B.b6===q){p="SRS"
break A}if(q instanceof A.d6){p=q.c+" "+A.i(B.dt.h(0,p))
break A}if(q==null){p=B.dt.h(0,p)
break A}p=null}s=r==null?"":" \u2022\u2022"+r
return a.c+" "+A.i(p)+s},
Kz(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.d([],t.J)
for(s=a1.a7.b3(B.bt),r=s.length,q=a1.c5,p=q.d,o=t.N,n=t.ud,m=0;m<s.length;s.length===r||(0,A.n)(s),++m){l=s[m]
k=l.c
j=A.m(k.h(0,"recordId"))
i=A.ay(k.h(0,"date"))
if(j==null||i==null)continue
h=q.gby().h(0,j)
g=A.a7(p,o,n).h(0,j)
f=h==null
e=f?null:h.x
if(e==null)e=g==null?null:g.z
if(e!=null)d=i.a===e.a&&i.b===e.b&&i.c===e.c
else d=!0
if(d)continue
d=l.b
k=A.m(k.h(0,"text"))
c=i.k(0)
f=f?null:h.gcd()
if(f==null){f=g.e
b=f==null||f.length===0
a=g.b
f=b?g.c.c+", "+a:f+", "+a}B.a.n(a0,new A.W("memory:"+d,B.ab,d,'Memory "'+A.i(k)+'" says '+c+"; "+f+" says "+e.k(0)+". The register is kept; check which is right."))}return a0},
Ea(a){var s=B.c.G(a),r=A.C("^\\d[\\d,]*(\\.\\d+)?$",!0,!1)
if(!r.b.test(s)||B.c.B(s,",."))return null
if(B.c.bB(B.a.ga_(s.split(".")),","))return null
return A.ah(A.a4(s,",",""))},
Dx(a){var s,r,q=B.c.G(a),p=A.C("\\D",!0,!1),o=A.a4(q,p,"")
p=B.a.ga_(q.split("."))
s=A.C("\\D",!0,!1)
r=A.a4(p,s,"")
return!B.c.B(q,",")&&!B.c.B(q,".")&&o.length>=9||r.length>=13},
av(a){var s,r,q=t.wL,p=A.E(new A.ak(A.d(a.split("-"),t.s),t.aY.a(A.JU()),q),q.i("ag.E"))
q=p.length
if(0>=q)return A.a(p,0)
s=p[0]
if(1>=q)return A.a(p,1)
r=p[1]
if(2>=q)return A.a(p,2)
return new A.K(s,r,p[2])},
E5(a){var s,r,q=A.B0(a)
if(q==null)return null
if(B.c.B(q,"\n")||B.c.B(q,"\r"))return"A note is one line."
if(q.length>200)return"A note is at most 200 characters."
s=$.Bi()
r=A.C("[\\s-]",!0,!1)
r=A.a4(q,r,"")
if(s.b.test(r))return"A note may not hold a full number (9 or more digits in a row)."
return null},
B0(a){var s=a==null?null:B.c.G(a)
return s==null||s.length===0?null:s},
KV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="someone removed",f=A.d([],t.J)
for(s=a.c5,r=s.gt(),q=r.length,p=a.p3,o=t.N,n=t.o,m=0;m<r.length;r.length===q||(0,A.n)(r),++m){l=r[m]
if(l.b.d===!0&&l.x==null){k=l.a
j=l.gcd()
i=l.c
if(i==="me")i="Me"
else{i=A.a7(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-expiry:"+k,B.ab,k,j+" for "+i+" has no expiry date. Add it from the document so its reminders can start."))}}for(r=A.Cl(s.c,o).a,r=A.eu(r,r.r,A.o(r).c),q=r.$ti.c;r.m();){k=r.d
if(k==null)k=q.a(k)
h=s.gby().h(0,k)
if(h!=null){j=h.gcd()
i=h.c
if(i==="me")i="Me"
else{i=A.a7(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-source:"+k,B.ab,k,"The file of "+j+" for "+i+" was deleted from SanthIQ/Documents. The copy on this phone is kept."))}}return f},
hn(a){var s,r,q,p=a.toUpperCase()
for(s=0;s<8;++s){r=B.jb[s]
q=r.b
r=A.C(r.a,!0,!1)
if(r.b.test(p))return q}return B.c.G(a)},
hr(a,b,c,d,e,f,g){var s=0,r=A.I(t.p),q,p,o,n,m,l,k,j,i,h
var $async$hr=A.J(function(a0,a1){if(a0===1)return A.F(a1,r)
for(;;)switch(s){case 0:m=$.FG()
s=3
return A.q(m.aQ(),$async$hr)
case 3:l=a1
s=4
return A.q(l.br(),$async$hr)
case 4:k=a1.a
s=5
return A.q(m.b0(l,b),$async$hr)
case 5:j=a1
t.D.i("be.S").a(k)
m=t.N
p=A.R(["formatVersion",1,"deviceId",c,"n",d,"ephemeral",B.K.gaB().M(k)],m,t.X)
m=B.E.M(B.z.b8(A.R(["deviceId",c,"kind","statementPassword","accountId",a,"value",g,"createdAtUtc",e.H().df()],m,m),null))
o=$.b5().cg()
o=$.b5().cJ(o)
o=$.b5().cI(o,32)
n=A.E(k,t.S)
B.a.a1(n,b.a)
i=A
h=p
s=6
return A.q(o.aW(B.E.M("santhiq/sync/secret/v1"),n,j),$async$hr)
case 6:q=i.hu(h,a1,B.lW,m,f)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$hr,r)},
jf(){var s=0,r=A.I(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$jf=A.J(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(A.Ke()){s=1
break}j=v.G
i=A.aV(A.x(j.document).querySelector("#app"))
i.toString
n=i
p=4
s=7
return A.q(A.bF(A.x(A.x(j.window).fetch("config.json",{cache:"no-store"})),t.m),$async$jf)
case 7:m=b
if(!A.d0(m.ok)){j=A.ao("config.json: HTTP "+A.i(A.AP(m,"status",t.S)))
throw A.k(j)}i=t.N
s=8
return A.q(A.bF(A.x(m.text()),i),$async$jf)
case 8:h=b
g=A.b(A.x(A.x(j.window).location).pathname)
l=A.KT(h,A.b(A.x(A.x(j.window).location).origin)+B.c.X(g,0,B.c.eO(g,"/")+1))
k=new A.kP(A.Lq(A.KJ()),A.JT(),l,new A.kh(),B.b_,A.ab(i))
s=9
return A.q(k.cc(),$async$jf)
case 9:A.GK(k).ad()
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
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$jf,r)}},B={}
var w=[A,J,B]
var $={}
A.A9.prototype={}
J.kn.prototype={
I(a,b){return a===b},
gO(a){return A.bZ(a)},
k(a){return"Instance of '"+A.kT(a)+"'"},
gau(a){return A.d2(A.AF(this))}}
J.kp.prototype={
k(a){return String(a)},
gO(a){return a?519018:218159},
gau(a){return A.d2(t.y)},
$iaw:1,
$il:1}
J.fG.prototype={
I(a,b){return null==b},
k(a){return"null"},
gO(a){return 0},
$iaw:1,
$ibg:1}
J.hZ.prototype={$ia8:1}
J.ea.prototype={
gO(a){return 0},
k(a){return String(a)}}
J.kR.prototype={}
J.es.prototype={}
J.dr.prototype={
k(a){var s=a[$.Eo()]
if(s==null)s=a[$.B5()]
if(s==null)return this.ia(a)
return"JavaScript function for "+J.hw(s)},
$idg:1}
J.fH.prototype={
gO(a){return 0},
k(a){return String(a)}}
J.fI.prototype={
gO(a){return 0},
k(a){return String(a)}}
J.u.prototype={
dJ(a,b){return new A.d9(a,A.N(a).i("@<1>").a3(b).i("d9<1,2>"))},
n(a,b){A.N(a).c.a(b)
a.$flags&1&&A.B(a,29)
a.push(b)},
bV(a,b){var s=A.N(a)
return new A.p(a,s.i("l(1)").a(b),s.i("p<1>"))},
a1(a,b){var s
A.N(a).i("h<1>").a(b)
a.$flags&1&&A.B(a,"addAll",2)
if(Array.isArray(b)){this.iy(a,b)
return}for(s=J.T(b);s.m();)a.push(s.gt())},
iy(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.k(A.aM(a))
for(r=0;r<s;++r)a.push(b[r])},
an(a){a.$flags&1&&A.B(a,"clear","clear")
a.length=0},
a0(a,b){var s,r
A.N(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.k(A.aM(a))}},
cK(a,b,c){var s=A.N(a)
return new A.ak(a,s.a3(c).i("1(2)").a(b),s.i("@<1>").a3(c).i("ak<1,2>"))},
S(a,b){var s,r=A.i6(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.i(a[s]))
return r.join(b)},
c8(a){return this.S(a,"")},
bb(a,b){return A.c1(a,0,A.dZ(b,"count",t.S),A.N(a).c)},
b5(a,b){return A.c1(a,b,null,A.N(a).c)},
a9(a,b,c,d){var s,r,q
d.a(b)
A.N(a).a3(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.k(A.aM(a))}return r},
lU(a,b,c){var s,r,q,p=A.N(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.k(A.aM(a))}p=c.$0()
return p},
ae(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
aE(a,b,c){if(b<0||b>a.length)throw A.k(A.aI(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.k(A.aI(c,b,a.length,"end",null))
if(b===c)return A.d([],A.N(a))
return A.d(a.slice(b,c),A.N(a))},
ds(a,b){return this.aE(a,b,null)},
dk(a,b,c){A.bM(b,c,a.length)
return A.c1(a,b,c,A.N(a).c)},
ga_(a){if(a.length>0)return a[0]
throw A.k(A.aq())},
gaq(a){var s=a.length
if(s>0)return a[s-1]
throw A.k(A.aq())},
gaL(a){var s=a.length
if(s===1){if(0>=s)return A.a(a,0)
return a[0]}if(s===0)throw A.k(A.aq())
throw A.k(A.BQ())},
aS(a,b,c,d,e){var s,r,q,p
A.N(a).i("h<1>").a(d)
a.$flags&2&&A.B(a,5)
A.bM(b,c,a.length)
s=c-b
if(s===0)return
A.b9(e,"skipCount")
r=A.o(d)
r=A.eP(J.hv(d.a,e),r.c,r.y[1])
r=A.E(r,A.o(r).i("h.E"))
r.$flags=1
q=r
if(s>q.length)throw A.k(A.BP())
if(0<b)for(p=s-1;p>=0;--p){if(!(p>=0&&p<q.length))return A.a(q,p)
a[b+p]=q[p]}else for(p=0;p<s;++p){if(!(p>=0&&p<q.length))return A.a(q,p)
a[b+p]=q[p]}},
aI(a,b,c,d){var s
A.N(a).i("1?").a(d)
a.$flags&2&&A.B(a,"fillRange")
A.bM(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
N(a,b){var s,r
A.N(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.k(A.aM(a))}return!1},
bq(a,b){var s,r
A.N(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.k(A.aM(a))}return!0},
ghv(a){return new A.aZ(a,A.N(a).i("aZ<1>"))},
E(a,b){var s,r,q,p,o,n=A.N(a)
n.i("c(1,1)?").a(b)
a.$flags&2&&A.B(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Iw()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.b4()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fo(b,2))
if(p>0)this.k5(a,p)},
bh(a){return this.E(a,null)},
k5(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bR(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.a1(a[s],b))return s}return-1},
B(a,b){var s
for(s=0;s<a.length;++s)if(J.a1(a[s],b))return!0
return!1},
ga2(a){return a.length===0},
gam(a){return a.length!==0},
k(a){return A.A7(a,"[","]")},
f3(a){return A.C2(a,A.N(a).c)},
gv(a){return new J.eL(a,a.length,A.N(a).i("eL<1>"))},
gO(a){return A.bZ(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.B(a,"set length","change the length of")
if(b<0)throw A.k(A.aI(b,0,null,"newLength",null))
if(b>a.length)A.N(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.k(A.wN(a,b))
return a[b]},
j(a,b,c){A.N(a).c.a(c)
a.$flags&2&&A.B(a)
if(!(b>=0&&b<a.length))throw A.k(A.wN(a,b))
a[b]=c},
eL(a,b){var s
A.N(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gau(a){return A.d2(A.N(a))},
$ibs:1,
$iU:1,
$ih:1,
$iz:1}
J.ko.prototype={
mH(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kT(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ns.prototype={}
J.eL.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.n(q)
throw A.k(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iaj:1}
J.f_.prototype={
l(a,b){var s
A.ux(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gda(b)
if(this.gda(a)===s)return 0
if(this.gda(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gda(a){return a===0?1/a<0:a<0},
aD(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.k(A.ax(""+a+".toInt()"))},
h0(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.k(A.ax(""+a+".ceil()"))},
lV(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.k(A.ax(""+a+".floor()"))},
my(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.k(A.ax(""+a+".round()"))},
mz(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
l1(a,b,c){if(B.d.l(b,c)>0)throw A.k(A.eB(b))
if(this.l(a,b)<0)return b
if(this.l(a,c)>0)return c
return a},
bF(a,b){var s
if(b>20)throw A.k(A.aI(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gda(a))return"-"+s
return s},
bE(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.k(A.aI(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.j(A.ax("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.a4("0",o)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
P(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aF(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fO(a,b)},
u(a,b){return(a|0)===a?a/b|0:this.fO(a,b)},
fO(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.k(A.ax("Result of truncating division is "+A.i(s)+": "+A.i(a)+" ~/ "+b))},
aZ(a,b){if(b<0)throw A.k(A.eB(b))
return b>31?0:a<<b>>>0},
ko(a,b){return b>31?0:a<<b>>>0},
bY(a,b){var s
if(b<0)throw A.k(A.eB(b))
if(a>0)s=this.ey(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
al(a,b){var s
if(a>0)s=this.ey(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dE(a,b){if(0>b)throw A.k(A.eB(b))
return this.ey(a,b)},
ey(a,b){return b>31?0:a>>>b},
b4(a,b){return a>b},
gau(a){return A.d2(t.n)},
$iaS:1,
$iV:1,
$ibE:1}
J.hY.prototype={
gbN(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.u(q,4294967296)
s+=32}return s-Math.clz32(q)},
gau(a){return A.d2(t.S)},
$iaw:1,
$ic:1}
J.kq.prototype={
gau(a){return A.d2(t.pR)},
$iaw:1}
J.dq.prototype={
d2(a,b,c){var s=b.length
if(c>s)throw A.k(A.aI(c,0,s,null,null))
return new A.m_(b,a,c)},
aG(a,b){return this.d2(a,b,0)},
hg(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.k(A.aI(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.a(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.h1(c,a)},
bB(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aa(a,r-s)},
eZ(a,b,c){A.Ce(0,0,a.length,"startIndex")
return A.Eh(a,b,c,0)},
dq(a,b){var s
if(typeof b=="string")return A.d(a.split(b),t.s)
else{if(b instanceof A.e9){s=b.e
s=!(s==null?b.e=b.iX():s)}else s=!1
if(s)return A.d(a.split(b.b),t.s)
else return this.j_(a,b)}},
hu(a,b,c,d){var s=A.bM(b,c,a.length)
return A.B3(a,b,s,d)},
j_(a,b){var s,r,q,p,o,n,m=A.d([],t.s)
for(s=J.Bm(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gt()
o=p.gdr()
n=p.gc4()
q=n-o
if(q===0&&r===o)continue
B.a.n(m,this.X(a,r,o))
r=n}if(r<a.length||q>0)B.a.n(m,this.aa(a,r))
return m},
bZ(a,b,c){var s
t.cL.a(b)
if(c<0||c>a.length)throw A.k(A.aI(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.FS(b,a,c)!=null},
ao(a,b){return this.bZ(a,b,0)},
X(a,b,c){return a.substring(b,A.bM(b,c,a.length))},
aa(a,b){return this.X(a,b,null)},
G(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.Gt(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.Gu(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a4(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.k(B.ef)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a4(c,s)+a},
ml(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.a4(c,s)},
c6(a,b,c){var s=a.length
if(c>s)throw A.k(A.aI(c,0,s,null,null))
s=a.indexOf(b,c)
return s},
bR(a,b){return this.c6(a,b,0)},
eO(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
B(a,b){return A.Lg(a,b,0)},
l(a,b){var s
A.b(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gO(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gau(a){return A.d2(t.N)},
gq(a){return a.length},
$ibs:1,
$iaw:1,
$iaS:1,
$if5:1,
$ie:1}
A.iK.prototype={
n(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.L.a(b)
s=J.ap(b)
r=s.gq(b)
if(r===0)return
q=i.a+r
p=i.b
o=p.length
if(o<q){n=q*2
if(n<1024)n=1024
else{m=n-1
m|=B.d.al(m,1)
m|=m>>>2
m|=m>>>4
m|=m>>>8
n=((m|m>>>16)>>>0)+1}l=new Uint8Array(n)
B.i.bg(l,0,o,p)
i.b=l
p=l}if(t.p.b(b))B.i.bg(p,i.a,q,b)
else for(k=0;k<r;++k){p=i.b
o=i.a+k
j=s.h(b,k)
p.$flags&2&&A.B(p)
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=j}i.a=q},
hx(){var s=this
if(s.a===0)return $.jk()
return new Uint8Array(A.aF(J.bn(B.i.ga6(s.b),s.b.byteOffset,s.a)))},
gq(a){return this.a},
$izX:1}
A.h8.prototype={
n(a,b){var s
t.L.a(b)
s=t.p.b(b)?b:new Uint8Array(A.aF(b))
B.a.n(this.b,s)
this.a=this.a+s.length},
f0(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.jk()
s=l.b
r=s.length
if(r===1){if(0>=r)return A.a(s,0)
q=s[0]
l.a=0
B.a.an(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.n)(s),++o,p=m){n=s[o]
m=p+n.length
B.i.bg(q,p,m,n)}l.a=0
B.a.an(s)
return q},
hx(){var s,r,q,p,o,n,m=this.a
if(m===0)return $.jk()
s=new Uint8Array(m)
for(m=this.b,r=m.length,q=0,p=0;p<m.length;m.length===r||(0,A.n)(m),++p,q=n){o=m[p]
n=q+o.length
B.i.bg(s,q,n,o)}return s},
gq(a){return this.a},
$izX:1}
A.et.prototype={
gv(a){return new A.hE(J.T(this.gb7()),A.o(this).i("hE<1,2>"))},
gq(a){return J.aB(this.gb7())},
ga2(a){return J.jq(this.gb7())},
gam(a){return J.Bp(this.gb7())},
b5(a,b){var s=A.o(this)
return A.eP(J.hv(this.gb7(),b),s.c,s.y[1])},
bb(a,b){var s=A.o(this)
return A.eP(J.mu(this.gb7(),b),s.c,s.y[1])},
ae(a,b){return A.o(this).y[1].a(J.jp(this.gb7(),b))},
ga_(a){return A.o(this).y[1].a(J.zT(this.gb7()))},
gaq(a){return A.o(this).y[1].a(J.zU(this.gb7()))},
B(a,b){return J.Bo(this.gb7(),b)},
k(a){return J.hw(this.gb7())}}
A.hE.prototype={
m(){return this.a.m()},
gt(){return this.$ti.y[1].a(this.a.gt())},
$iaj:1}
A.eO.prototype={
gb7(){return this.a}}
A.iL.prototype={$iU:1}
A.iJ.prototype={
h(a,b){return this.$ti.y[1].a(J.as(this.a,b))},
j(a,b,c){var s=this.$ti
J.Bl(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.FT(this.a,b)},
n(a,b){var s=this.$ti
J.bT(this.a,s.c.a(s.y[1].a(b)))},
E(a,b){var s
this.$ti.i("c(2,2)?").a(b)
s=b==null?null:new A.tU(this,b)
J.mt(this.a,s)},
dk(a,b,c){var s=this.$ti
return A.eP(J.FR(this.a,b,c),s.c,s.y[1])},
aS(a,b,c,d,e){var s=this.$ti
J.FU(this.a,b,c,A.eP(s.i("h<2>").a(d),s.y[1],s.c),e)},
bg(a,b,c,d){return this.aS(0,b,c,d,0)},
aI(a,b,c,d){var s=this.$ti
J.FO(this.a,b,c,s.c.a(s.i("2?").a(d)))},
$iU:1,
$iz:1}
A.tU.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("c(1,1)")}}
A.d9.prototype={
dJ(a,b){return new A.d9(this.a,this.$ti.i("@<1>").a3(b).i("d9<1,2>"))},
gb7(){return this.a}}
A.eQ.prototype={
F(a,b,c){return new A.eQ(this.a,this.$ti.i("@<1,2>").a3(b).a3(c).i("eQ<1,2,3,4>"))},
C(a){return this.a.C(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
Y(a,b){return this.$ti.i("4?").a(this.a.Y(0,b))},
a0(a,b){this.a.a0(0,new A.mU(this,this.$ti.i("~(3,4)").a(b)))},
gag(){var s=this.$ti
return A.eP(this.a.gag(),s.c,s.y[2])},
gU(){var s=this.$ti
return A.eP(this.a.gU(),s.y[1],s.y[3])},
gq(a){var s=this.a
return s.gq(s)},
ga2(a){var s=this.a
return s.ga2(s)},
gam(a){var s=this.a
return s.gam(s)},
gbo(){return this.a.gbo().cK(0,new A.mT(this),this.$ti.i("an<3,4>"))}}
A.mU.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.mT.prototype={
$1(a){var s=this.a.$ti
s.i("an<1,2>").a(a)
return new A.an(s.y[2].a(a.a),s.y[3].a(a.b),s.i("an<3,4>"))},
$S(){return this.a.$ti.i("an<3,4>(an<1,2>)")}}
A.f2.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.jM.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.tc.prototype={}
A.U.prototype={}
A.ag.prototype={
gv(a){var s=this
return new A.ar(s,s.gq(s),A.o(s).i("ar<ag.E>"))},
ga2(a){return this.gq(this)===0},
ga_(a){if(this.gq(this)===0)throw A.k(A.aq())
return this.ae(0,0)},
gaq(a){var s=this
if(s.gq(s)===0)throw A.k(A.aq())
return s.ae(0,s.gq(s)-1)},
B(a,b){var s,r=this,q=r.gq(r)
for(s=0;s<q;++s){if(J.a1(r.ae(0,s),b))return!0
if(q!==r.gq(r))throw A.k(A.aM(r))}return!1},
N(a,b){var s,r,q=this
A.o(q).i("l(ag.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.ae(0,r)))return!0
if(s!==q.gq(q))throw A.k(A.aM(q))}return!1},
lT(a,b){var s,r,q,p=this
A.o(p).i("l(ag.E)").a(b)
s=p.gq(p)
for(r=0;r<s;++r){q=p.ae(0,r)
if(b.$1(q))return q
if(s!==p.gq(p))throw A.k(A.aM(p))}throw A.k(A.aq())},
S(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.i(p.ae(0,0))
if(o!==p.gq(p))throw A.k(A.aM(p))
for(r=s,q=1;q<o;++q){r=r+b+A.i(p.ae(0,q))
if(o!==p.gq(p))throw A.k(A.aM(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.i(p.ae(0,q))
if(o!==p.gq(p))throw A.k(A.aM(p))}return r.charCodeAt(0)==0?r:r}},
c8(a){return this.S(0,"")},
cK(a,b,c){var s=A.o(this)
return new A.ak(this,s.a3(c).i("1(ag.E)").a(b),s.i("@<ag.E>").a3(c).i("ak<1,2>"))},
e_(a,b){var s,r,q,p=this
A.o(p).i("ag.E(ag.E,ag.E)").a(b)
s=p.gq(p)
if(s===0)throw A.k(A.aq())
r=p.ae(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.ae(0,q))
if(s!==p.gq(p))throw A.k(A.aM(p))}return r},
b5(a,b){return A.c1(this,b,null,A.o(this).i("ag.E"))},
bb(a,b){return A.c1(this,0,A.dZ(b,"count",t.S),A.o(this).i("ag.E"))}}
A.fd.prototype={
ij(a,b,c,d){var s,r=this.b
A.b9(r,"start")
s=this.c
if(s!=null){A.b9(s,"end")
if(r>s)throw A.k(A.aI(r,0,s,"start",null))}},
gjh(){var s=J.aB(this.a),r=this.c
if(r==null||r>s)return s
return r},
gks(){var s=J.aB(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aB(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ae(a,b){var s=this,r=s.gks()+b
if(b<0||r>=s.gjh())throw A.k(A.nk(b,s.gq(0),s,"index"))
return J.jp(s.a,r)},
b5(a,b){var s,r,q=this
A.b9(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.hS(q.$ti.i("hS<1>"))
return A.c1(q.a,s,r,q.$ti.c)},
bb(a,b){var s,r,q,p=this
A.b9(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.c1(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.c1(p.a,r,q,p.$ti.c)}},
hz(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ap(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.BT(0,n):J.BS(0,n)}r=A.i6(s,m.ae(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.j(r,q,m.ae(n,o+q))
if(m.gq(n)<l)throw A.k(A.aM(p))}return r}}
A.ar.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ap(q),o=p.gq(q)
if(r.b!==o)throw A.k(A.aM(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ae(q,s);++r.c
return!0},
$iaj:1}
A.cs.prototype={
gv(a){return new A.i8(J.T(this.a),this.b,A.o(this).i("i8<1,2>"))},
gq(a){return J.aB(this.a)},
ga2(a){return J.jq(this.a)},
ga_(a){return this.b.$1(J.zT(this.a))},
gaq(a){return this.b.$1(J.zU(this.a))},
ae(a,b){return this.b.$1(J.jp(this.a,b))}}
A.hQ.prototype={$iU:1}
A.i8.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iaj:1}
A.ak.prototype={
gq(a){return J.aB(this.a)},
ae(a,b){return this.b.$1(J.jp(this.a,b))}}
A.p.prototype={
gv(a){return new A.S(J.T(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$iaj:1}
A.eU.prototype={
gv(a){return new A.eV(J.T(this.a),this.b,B.bb,this.$ti.i("eV<1,2>"))}}
A.eV.prototype={
gt(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.T(r.$1(s.gt()))
q.c=p}else return!1}q.d=q.c.gt()
return!0},
$iaj:1}
A.ff.prototype={
gv(a){var s=this.a
return new A.iA(s.gv(s),this.b,A.o(this).i("iA<1>"))}}
A.hR.prototype={
gq(a){var s=this.a,r=s.gq(s)
s=this.b
if(B.d.b4(r,s))return s
return r},
$iU:1}
A.iA.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gt(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gt()},
$iaj:1}
A.dD.prototype={
b5(a,b){A.e1(b,"count",t.S)
A.b9(b,"count")
return new A.dD(this.a,this.b+b,A.o(this).i("dD<1>"))},
gv(a){var s=this.a
return new A.iw(s.gv(s),this.b,A.o(this).i("iw<1>"))}}
A.fD.prototype={
gq(a){var s=this.a,r=s.gq(s)-this.b
if(r>=0)return r
return 0},
b5(a,b){A.e1(b,"count",t.S)
A.b9(b,"count")
return new A.fD(this.a,this.b+b,this.$ti)},
$iU:1}
A.iw.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gt(){return this.a.gt()},
$iaj:1}
A.hS.prototype={
gv(a){return B.bb},
ga2(a){return!0},
gq(a){return 0},
ga_(a){throw A.k(A.aq())},
gaq(a){throw A.k(A.aq())},
ae(a,b){throw A.k(A.aI(b,0,0,"index",null))},
B(a,b){return!1},
b5(a,b){A.b9(b,"count")
return this},
bb(a,b){A.b9(b,"count")
return this}}
A.hT.prototype={
m(){return!1},
gt(){throw A.k(A.aq())},
$iaj:1}
A.iG.prototype={
gv(a){return new A.iH(J.T(this.a),this.$ti.i("iH<1>"))}}
A.iH.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gt()))return!0
return!1},
gt(){return this.$ti.c.a(this.a.gt())},
$iaj:1}
A.oH.prototype={
gel(){var s,r,q
for(s=this.a,s=A.eu(s,s.r,A.o(s).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!=null)return q}return null},
ga2(a){return this.gel()==null},
gam(a){return this.gel()!=null},
ga_(a){var s=this.gel()
return s==null?A.j(A.aq()):s},
gv(a){var s=this.a
return new A.f4(A.eu(s,s.r,A.o(s).c),this.$ti.i("f4<1>"))}}
A.f4.prototype={
m(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gt(){var s=this.b
return s==null?A.j(A.aq()):s},
$iaj:1}
A.dk.prototype={
gq(a){return J.aB(this.a)},
ga2(a){return J.jq(this.a)},
gam(a){return J.Bp(this.a)},
ga_(a){return new A.t(this.b,J.zT(this.a))},
ae(a,b){return new A.t(b+this.b,J.jp(this.a,b))},
B(a,b){return!1},
bb(a,b){A.e1(b,"count",t.S)
A.b9(b,"count")
return new A.dk(J.mu(this.a,b),this.b,A.o(this).i("dk<1>"))},
b5(a,b){A.e1(b,"count",t.S)
A.b9(b,"count")
return new A.dk(J.hv(this.a,b),b+this.b,A.o(this).i("dk<1>"))},
gv(a){return new A.at(J.T(this.a),this.b,A.o(this).i("at<1>"))}}
A.eT.prototype={
gaq(a){var s,r=this.a,q=J.ap(r),p=q.gq(r)
if(p<=0)throw A.k(A.aq())
s=q.gaq(r)
if(p!==q.gq(r))throw A.k(A.aM(this))
return new A.t(p-1+this.b,s)},
B(a,b){return!1},
bb(a,b){A.e1(b,"count",t.S)
A.b9(b,"count")
return new A.eT(J.mu(this.a,b),this.b,this.$ti)},
b5(a,b){A.e1(b,"count",t.S)
A.b9(b,"count")
return new A.eT(J.hv(this.a,b),this.b+b,this.$ti)},
$iU:1}
A.at.prototype={
m(){if(++this.c>=0&&this.a.m())return!0
this.c=-2
return!1},
gt(){var s=this.c
return s>=0?new A.t(this.b+s,this.a.gt()):A.j(A.aq())},
$iaj:1}
A.aP.prototype={
sq(a,b){throw A.k(A.ax("Cannot change the length of a fixed-length list"))},
n(a,b){A.aO(a).i("aP.E").a(b)
throw A.k(A.ax("Cannot add to a fixed-length list"))}}
A.cj.prototype={
j(a,b,c){A.o(this).i("cj.E").a(c)
throw A.k(A.ax("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.k(A.ax("Cannot change the length of an unmodifiable list"))},
n(a,b){A.o(this).i("cj.E").a(b)
throw A.k(A.ax("Cannot add to an unmodifiable list"))},
E(a,b){A.o(this).i("c(cj.E,cj.E)?").a(b)
throw A.k(A.ax("Cannot modify an unmodifiable list"))},
aS(a,b,c,d,e){A.o(this).i("h<cj.E>").a(d)
throw A.k(A.ax("Cannot modify an unmodifiable list"))},
bg(a,b,c,d){return this.aS(0,b,c,d,0)},
aI(a,b,c,d){A.o(this).i("cj.E?").a(d)
throw A.k(A.ax("Cannot modify an unmodifiable list"))}}
A.h3.prototype={}
A.aZ.prototype={
gq(a){return J.aB(this.a)},
ae(a,b){var s=this.a,r=J.ap(s)
return r.ae(s,r.gq(s)-1-b)}}
A.j9.prototype={}
A.t.prototype={$r:"+(1,2)",$s:1}
A.dU.prototype={$r:"+days,months(1,2)",$s:2}
A.iS.prototype={$r:"+end,loans(1,2)",$s:3}
A.ha.prototype={$r:"+month,year(1,2)",$s:4}
A.bx.prototype={$r:"+(1,2,3)",$s:5}
A.iT.prototype={$r:"+accountId,from,to(1,2,3)",$s:6}
A.ev.prototype={$r:"+(1,2,3,4)",$s:8}
A.iU.prototype={$r:"+complete,month,spent,year(1,2,3,4)",$s:9}
A.iV.prototype={$r:"+date,eventId,hash,n,removed(1,2,3,4,5)",$s:10}
A.iW.prototype={$r:"+instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type(1,2,3,4,5,6,7,8)",$s:11}
A.hF.prototype={}
A.fu.prototype={
F(a,b,c){var s=A.o(this)
return A.C3(this,s.c,s.y[1],b,c)},
ga2(a){return this.gq(this)===0},
gam(a){return this.gq(this)!==0},
k(a){return A.Ag(this)},
j(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.BB()},
Y(a,b){A.BB()},
gbo(){return new A.d_(this.lJ(),A.o(this).i("d_<an<1,2>>"))},
lJ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gbo(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gag(),o=o.gv(o),n=A.o(s),m=n.y[1],n=n.i("an<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gt()
k=s.h(0,l)
r=4
return a.b=new A.an(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iac:1}
A.aY.prototype={
gq(a){return this.b.length},
gfB(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
C(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.C(b))return null
return this.b[this.a[b]]},
a0(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfB()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gag(){return new A.fj(this.gfB(),this.$ti.i("fj<1>"))},
gU(){return new A.fj(this.b,this.$ti.i("fj<2>"))}}
A.fj.prototype={
gq(a){return this.a.length},
ga2(a){return 0===this.a.length},
gam(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.dR(s,s.length,this.$ti.i("dR<1>"))}}
A.dR.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iaj:1}
A.cc.prototype={
bK(){var s=this,r=s.$map
if(r==null){r=new A.f0(s.$ti.i("f0<1,2>"))
A.DI(s.a,r)
s.$map=r}return r},
C(a){return this.bK().C(a)},
h(a,b){return this.bK().h(0,b)},
a0(a,b){this.$ti.i("~(1,2)").a(b)
this.bK().a0(0,b)},
gag(){var s=this.bK()
return new A.az(s,A.o(s).i("az<1>"))},
gU(){var s=this.bK()
return new A.L(s,A.o(s).i("L<2>"))},
gq(a){return this.bK().a}}
A.fv.prototype={
n(a,b){A.o(this).c.a(b)
A.BC()},
a1(a,b){A.o(this).i("h<1>").a(b)
A.BC()}}
A.cH.prototype={
gq(a){return this.b},
ga2(a){return this.b===0},
gam(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dR(s,s.length,r.$ti.i("dR<1>"))},
B(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.dh.prototype={
gq(a){return this.a.length},
ga2(a){return this.a.length===0},
gam(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.dR(s,s.length,this.$ti.i("dR<1>"))},
bK(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.f0(o.$ti.i("f0<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
n.j(0,p,p)}o.$map=n}return n},
B(a,b){return this.bK().C(b)}}
A.kk.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.eW&&this.a.I(0,b.a)&&A.AQ(this)===A.AQ(b)},
gO(a){return A.bu(this.a,A.AQ(this),B.t,B.t)},
k(a){var s=B.a.S([A.d2(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.eW.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.Kk(A.ww(this.a),this.$ti)}}
A.is.prototype={}
A.tz.prototype={
bt(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.ij.prototype={
k(a){return"Null check operator used on a null value"}}
A.kr.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lk.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.oJ.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hU.prototype={}
A.iY.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ien:1}
A.bI.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.El(r==null?"unknown":r)+"'"},
$idg:1,
gmR(){return this},
$C:"$1",
$R:1,
$D:null}
A.jK.prototype={$C:"$0",$R:0}
A.jL.prototype={$C:"$2",$R:2}
A.lf.prototype={}
A.lc.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.El(s)+"'"}}
A.fs.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fs))return!1
return this.$_target===b.$_target&&this.a===b.a},
gO(a){return(A.B1(this.a)^A.bZ(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kT(this.a)+"'")}}
A.l1.prototype={
k(a){return"RuntimeError: "+this.a}}
A.cp.prototype={
gq(a){return this.a},
ga2(a){return this.a===0},
gam(a){return this.a!==0},
gag(){return new A.az(this,A.o(this).i("az<1>"))},
gU(){return new A.L(this,A.o(this).i("L<2>"))},
gbo(){return new A.aa(this,A.o(this).i("aa<1,2>"))},
C(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.m3(a)},
m3(a){var s=this.d
if(s==null)return!1
return this.d9(this.fv(s,a),a)>=0},
a1(a,b){A.o(this).i("ac<1,2>").a(b).a0(0,new A.nu(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.m4(b)},
m4(a){var s,r,q=this.d
if(q==null)return null
s=this.fv(q,a)
r=this.d9(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fg(s==null?q.b=q.ep():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fg(r==null?q.c=q.ep():r,b,c)}else q.m6(b,c)},
m6(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.ep()
r=o.dV(a)
q=s[r]
if(q==null)s[r]=[o.eq(a,b)]
else{p=o.d9(q,a)
if(p>=0)q[p].b=b
else q.push(o.eq(a,b))}},
aK(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.C(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
Y(a,b){var s=this
if(typeof b=="string")return s.fH(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fH(s.c,b)
else return s.m5(b)},
m5(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dV(a)
r=n[s]
q=o.d9(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fS(p)
if(r.length===0)delete n[s]
return p.b},
an(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eo()}},
a0(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.k(A.aM(q))
s=s.c}},
fg(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.eq(b,c)
else s.b=c},
fH(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fS(s)
delete a[b]
return s.b},
eo(){this.r=this.r+1&1073741823},
eq(a,b){var s=this,r=A.o(s),q=new A.ov(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.eo()
return q},
fS(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.eo()},
dV(a){return J.bU(a)&1073741823},
fv(a,b){return a[this.dV(b)]},
d9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a1(a[r].a,b))return r
return-1},
k(a){return A.Ag(this)},
ep(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iAc:1}
A.nu.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.ov.prototype={}
A.az.prototype={
gq(a){return this.a.a},
ga2(a){return this.a.a===0},
gv(a){var s=this.a
return new A.cq(s,s.r,s.e,this.$ti.i("cq<1>"))},
B(a,b){return this.a.C(b)}}
A.cq.prototype={
gt(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aM(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iaj:1}
A.L.prototype={
gq(a){return this.a.a},
ga2(a){return this.a.a===0},
gv(a){var s=this.a
return new A.a2(s,s.r,s.e,this.$ti.i("a2<1>"))}}
A.a2.prototype={
gt(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aM(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iaj:1}
A.aa.prototype={
gq(a){return this.a.a},
ga2(a){return this.a.a===0},
gv(a){var s=this.a
return new A.i4(s,s.r,s.e,this.$ti.i("i4<1,2>"))}}
A.i4.prototype={
gt(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aM(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.an(s.a,s.b,r.$ti.i("an<1,2>"))
r.c=s.c
return!0}},
$iaj:1}
A.f0.prototype={
dV(a){return A.JP(a)&1073741823},
d9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a1(a[r].a,b))return r
return-1}}
A.xw.prototype={
$1(a){return this.a(a)},
$S:60}
A.xx.prototype={
$2(a,b){return this.a(a,b)},
$S:154}
A.xy.prototype={
$1(a){return this.a(A.b(a))},
$S:85}
A.bm.prototype={
k(a){return this.fR(!1)},
fR(a){var s,r,q,p,o,n=this.jk(),m=this.dB(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.Ca(o):l+A.i(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jk(){var s,r=this.$s
while($.ui.length<=r)B.a.n($.ui,null)
s=$.ui[r]
if(s==null){s=this.iW()
B.a.j($.ui,r,s)}return s},
iW(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.BR(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.j(j,q,r[s])}}return A.aN(j,k)}}
A.dS.prototype={
dB(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.dS&&this.$s===b.$s&&J.a1(this.a,b.a)&&J.a1(this.b,b.b)},
gO(a){return A.bu(this.$s,this.a,this.b,B.t)}}
A.fm.prototype={
dB(){return[this.a,this.b,this.c]},
I(a,b){var s=this
if(b==null)return!1
return b instanceof A.fm&&s.$s===b.$s&&J.a1(s.a,b.a)&&J.a1(s.b,b.b)&&J.a1(s.c,b.c)},
gO(a){var s=this
return A.bu(s.$s,s.a,s.b,s.c)}}
A.dT.prototype={
dB(){return this.a},
I(a,b){if(b==null)return!1
return b instanceof A.dT&&this.$s===b.$s&&A.HC(this.a,b.a)},
gO(a){return A.bu(this.$s,A.C5(this.a),B.t,B.t)}}
A.e9.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfD(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.A8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gjN(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.A8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
iX(){var s,r=this.a
if(!B.c.B(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
aj(a){var s=this.b.exec(a)
if(s==null)return null
return new A.h9(s)},
lY(a){A.b(a)
return this.b.test(a)},
d2(a,b,c){var s=b.length
if(c>s)throw A.k(A.aI(c,0,s,null,null))
return new A.lo(this,b,c)},
aG(a,b){return this.d2(0,b,0)},
fu(a,b){var s,r=this.gfD()
if(r==null)r=A.d1(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.h9(s)},
ji(a,b){var s,r=this.gjN()
if(r==null)r=A.d1(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.h9(s)},
hg(a,b,c){if(c<0||c>b.length)throw A.k(A.aI(c,0,b.length,null,null))
return this.ji(b,c)},
$if5:1,
$irZ:1}
A.h9.prototype={
gdr(){return this.b.index},
gc4(){var s=this.b
return s.index+s[0].length},
dl(a){var s=this.b
if(!(a<s.length))return A.a(s,a)
return s[a]},
h(a,b){var s=this.b
if(!(b<s.length))return A.a(s,b)
return s[b]},
$ict:1,
$iip:1}
A.lo.prototype={
gv(a){return new A.fh(this.a,this.b,this.c)}}
A.fh.prototype={
gt(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fu(l,s)
if(p!=null){m.d=p
o=p.gc4()
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
$iaj:1}
A.h1.prototype={
gc4(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.k(A.Aj(b,null))
return this.c},
dl(a){if(a!==0)A.j(A.Aj(a,null))
return this.c},
$ict:1,
gdr(){return this.a}}
A.m_.prototype={
gv(a){return new A.m0(this.a,this.b,this.c)},
ga_(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h1(r,s)
throw A.k(A.aq())}}
A.m0.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.h1(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$iaj:1}
A.lw.prototype={
cr(){var s=this.b
if(s===this)throw A.k(new A.f2("Local '"+this.a+"' has not been initialized."))
return s},
bd(){var s=this.b
if(s===this)throw A.k(A.BZ(this.a))
return s}}
A.ed.prototype={
gau(a){return B.m5},
cz(a,b,c){A.ja(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
fX(a){return this.cz(a,0,null)},
eF(a,b,c){A.ja(a,b,c)
if(c==null)c=B.d.u(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
dH(a,b,c){A.ja(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
fW(a){return this.dH(a,0,null)},
$iaw:1,
$ied:1,
$ihD:1}
A.fP.prototype={$ifP:1}
A.ic.prototype={
ga6(a){if(((a.$flags|0)&2)!==0)return new A.m3(a.buffer)
else return a.buffer},
jB(a,b,c,d){var s=A.aI(b,0,c,d,null)
throw A.k(s)},
fl(a,b,c,d){if(b>>>0!==b||b>c)this.jB(a,b,c,d)}}
A.m3.prototype={
cz(a,b,c){var s=A.ih(this.a,b,c)
s.$flags=3
return s},
fX(a){return this.cz(0,0,null)},
eF(a,b,c){var s=A.GH(this.a,b,c)
s.$flags=3
return s},
dH(a,b,c){var s=A.GC(this.a,b,c)
s.$flags=3
return s},
fW(a){return this.dH(0,0,null)},
$ihD:1}
A.ia.prototype={
gau(a){return B.m6},
$iaw:1,
$iBy:1}
A.bt.prototype={
gq(a){return a.length},
fL(a,b,c,d,e){var s,r,q=a.length
this.fl(a,b,q,"start")
this.fl(a,c,q,"end")
if(b>c)throw A.k(A.aI(b,0,c,null,null))
s=c-b
if(e<0)throw A.k(A.aX(e,null))
r=d.length
if(r-e<s)throw A.k(A.ao("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibs:1,
$ibW:1}
A.ee.prototype={
h(a,b){A.dW(b,a,a.length)
return a[b]},
j(a,b,c){A.AD(c)
a.$flags&2&&A.B(a)
A.dW(b,a,a.length)
a[b]=c},
aS(a,b,c,d,e){t.oJ.a(d)
a.$flags&2&&A.B(a,5)
if(t.Eg.b(d)){this.fL(a,b,c,d,e)
return}this.fb(a,b,c,d,e)},
bg(a,b,c,d){return this.aS(a,b,c,d,0)},
$iU:1,
$ih:1,
$iz:1}
A.bX.prototype={
j(a,b,c){A.P(c)
a.$flags&2&&A.B(a)
A.dW(b,a,a.length)
a[b]=c},
aS(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.B(a,5)
if(t.Ag.b(d)){this.fL(a,b,c,d,e)
return}this.fb(a,b,c,d,e)},
bg(a,b,c,d){return this.aS(a,b,c,d,0)},
$iU:1,
$ih:1,
$iz:1}
A.kA.prototype={
gau(a){return B.m7},
aE(a,b,c){return new Float32Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1}
A.kB.prototype={
gau(a){return B.m8},
aE(a,b,c){return new Float64Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1}
A.kC.prototype={
gau(a){return B.m9},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Int16Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1}
A.ib.prototype={
gau(a){return B.ma},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Int32Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1,
$ikl:1}
A.kD.prototype={
gau(a){return B.mb},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Int8Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1}
A.id.prototype={
gau(a){return B.mg},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Uint16Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1,
$iAp:1}
A.ie.prototype={
gau(a){return B.mh},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Uint32Array(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1,
$itB:1}
A.ig.prototype={
gau(a){return B.mi},
gq(a){return a.length},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.ey(b,c,a.length)))},
$iaw:1}
A.f3.prototype={
gau(a){return B.dU},
gq(a){return a.length},
h(a,b){A.dW(b,a,a.length)
return a[b]},
aE(a,b,c){return new Uint8Array(a.subarray(b,A.ey(b,c,a.length)))},
ds(a,b){return this.aE(a,b,null)},
$iaw:1,
$if3:1,
$idO:1}
A.iO.prototype={}
A.iP.prototype={}
A.iQ.prototype={}
A.iR.prototype={}
A.cw.prototype={
i(a){return A.j2(v.typeUniverse,this,a)},
a3(a){return A.CS(v.typeUniverse,this,a)}}
A.lL.prototype={}
A.m2.prototype={
k(a){return A.bO(this.a,null)}}
A.lK.prototype={
k(a){return this.a}}
A.hc.prototype={$idM:1}
A.tJ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:73}
A.tI.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:132}
A.tK.prototype={
$0(){this.a.$0()},
$S:22}
A.tL.prototype={
$0(){this.a.$0()},
$S:22}
A.iZ.prototype={
il(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.fo(new A.um(this,b),0),a)
else throw A.k(A.ax("`setTimeout()` not found."))},
im(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.fo(new A.ul(this,a,Date.now(),b),0),a)
else throw A.k(A.ax("Periodic timer."))},
h_(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.k(A.ax("Canceling a timer."))},
$ilg:1}
A.um.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.ul.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.aF(s,o)}q.c=p
r.d.$1(q)},
$S:22}
A.lp.prototype={
cC(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bk(a)
else{s=r.a
if(q.i("b8<1>").b(a))s.fk(a)
else s.ee(a)}},
eH(a,b){var s=this.a
if(this.b)s.cV(new A.bQ(a,b))
else s.e9(new A.bQ(a,b))}}
A.uy.prototype={
$1(a){return this.a.$2(0,a)},
$S:42}
A.uz.prototype={
$2(a,b){this.a.$2(1,new A.hU(a,t.l.a(b)))},
$S:117}
A.v1.prototype={
$2(a,b){this.a(A.P(a),b)},
$S:125}
A.dV.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
k8(a,b){var s,r,q
a=A.P(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gt()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.k8(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.CM
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
o.a=A.CM
throw n
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=1
continue}throw A.k(A.ao("sync*"))}return!1},
mS(a){var s,r,q=this
if(a instanceof A.d_){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.n(r,q.a)
q.a=s
return 2}else{q.d=J.T(a)
return 2}},
$iaj:1}
A.d_.prototype={
gv(a){return new A.dV(this.a(),this.$ti.i("dV<1>"))}}
A.bQ.prototype={
k(a){return A.i(this.a)},
$iaA:1,
gci(){return this.b}}
A.nh.prototype={
$0(){this.c.a(null)
this.b.fp(null)},
$S:0}
A.lx.prototype={
eH(a,b){var s=this.a
if((s.a&30)!==0)throw A.k(A.ao("Future already completed"))
s.e9(A.Iv(a,b))},
dK(a){return this.eH(a,null)}}
A.cC.prototype={
cC(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.k(A.ao("Future already completed"))
s.bk(r.i("1/").a(a))},
l2(){return this.cC(null)}}
A.dQ.prototype={
mb(a){if((this.c&15)!==6)return!0
return this.b.b.f_(t.bl.a(this.d),a.a,t.y,t.K)},
lX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mA(q,m,a.b,o,n,t.l)
else p=l.f_(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.au(s))){if((r.c&1)!==0)throw A.k(A.aX("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.k(A.aX("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.am.prototype={
e0(a,b,c){var s,r,q,p=this.$ti
p.a3(c).i("1/(2)").a(a)
s=$.ai
if(s===B.T){if(b!=null&&!t.nW.b(b)&&!t.h_.b(b))throw A.k(A.y(b,"onError",u.w))}else{c.i("@<0/>").a3(p.c).i("1(2)").a(a)
if(b!=null)b=A.IY(b,s)}r=new A.am(s,c.i("am<0>"))
q=b==null?1:3
this.dv(new A.dQ(r,q,a,b,p.i("@<1>").a3(c).i("dQ<1,2>")))
return r},
mD(a,b){return this.e0(a,null,b)},
fQ(a,b,c){var s,r=this.$ti
r.a3(c).i("1/(2)").a(a)
s=new A.am($.ai,c.i("am<0>"))
this.dv(new A.dQ(s,19,a,b,r.i("@<1>").a3(c).i("dQ<1,2>")))
return s},
km(a){this.a=this.a&1|16
this.c=a},
dA(a){this.a=a.a&30|this.a&1
this.c=a.c},
dv(a){var s,r=this,q=r.a
if(q<=3){a.a=t.f7.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dv(a)
return}r.dA(s)}A.m8(null,null,r.b,t.O.a(new A.tZ(r,a)))}},
fF(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.f7.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fF(a)
return}m.dA(n)}l.a=m.dD(a)
A.m8(null,null,m.b,t.O.a(new A.u3(l,m)))}},
d_(){var s=t.f7.a(this.c)
this.c=null
return this.dD(s)},
dD(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fp(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("b8<1>").b(a))A.u1(a,r,!0)
else{s=r.d_()
q.c.a(a)
r.a=8
r.c=a
A.fi(r,s)}},
ee(a){var s,r=this
r.$ti.c.a(a)
s=r.d_()
r.a=8
r.c=a
A.fi(r,s)},
iV(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.d_()
q.dA(a)
A.fi(q,r)},
cV(a){var s=this.d_()
this.km(a)
A.fi(this,s)},
bk(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("b8<1>").b(a)){this.fk(a)
return}this.iC(a)},
iC(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.m8(null,null,s.b,t.O.a(new A.u0(s,a)))},
fk(a){A.u1(this.$ti.i("b8<1>").a(a),this,!1)
return},
e9(a){this.a^=2
A.m8(null,null,this.b,t.O.a(new A.u_(this,a)))},
mE(a,b){var s,r,q=this,p={},o=q.$ti
o.i("1/()?").a(b)
if((q.a&24)!==0){p=new A.am($.ai,o)
p.bk(q)
return p}s=$.ai
r=new A.am(s,o)
p.a=null
p.a=A.Cr(a,new A.u9(q,r,s,o.i("1/()").a(b)))
q.e0(new A.ua(p,q,r),new A.ub(p,r),t.aU)
return r},
$ib8:1}
A.tZ.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.u3.prototype={
$0(){A.fi(this.b,this.a.a)},
$S:0}
A.u2.prototype={
$0(){A.u1(this.a.a,this.b,!0)},
$S:0}
A.u0.prototype={
$0(){this.a.ee(this.b)},
$S:0}
A.u_.prototype={
$0(){this.a.cV(this.b)},
$S:0}
A.u6.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.hw(t.pF.a(q.d),t.z)}catch(p){s=A.au(p)
r=A.eD(p)
if(k.c&&t.w.a(k.b.a.c).a===s){q=k.a
q.c=t.w.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mE(q)
n=k.a
n.c=new A.bQ(q,o)
q=n}q.b=!0
return}if(j instanceof A.am&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.w.a(j.c)
q.b=!0}return}if(j instanceof A.am){m=k.b.a
l=new A.am(m.b,m.$ti)
j.e0(new A.u7(l,m),new A.u8(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.u7.prototype={
$1(a){this.a.iV(this.b)},
$S:73}
A.u8.prototype={
$2(a,b){A.d1(a)
t.l.a(b)
this.a.cV(new A.bQ(a,b))},
$S:65}
A.u5.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.f_(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.au(l)
r=A.eD(l)
q=s
p=r
if(p==null)p=A.mE(q)
o=this.a
o.c=new A.bQ(q,p)
o.b=!0}},
$S:0}
A.u4.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.w.a(l.a.a.c)
p=l.b
if(p.a.mb(s)&&p.a.e!=null){p.c=p.a.lX(s)
p.b=!1}}catch(o){r=A.au(o)
q=A.eD(o)
p=t.w.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mE(p)
m=l.b
m.c=new A.bQ(p,n)
p=m}p.b=!0}},
$S:0}
A.u9.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.fp(n.c.hw(n.d,n.a.$ti.i("1/")))}catch(q){s=A.au(q)
r=A.eD(q)
p=s
o=r
if(o==null)o=A.mE(p)
n.b.cV(new A.bQ(p,o))}},
$S:0}
A.ua.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.h_()
this.c.ee(a)}},
$S(){return this.b.$ti.i("bg(1)")}}
A.ub.prototype={
$2(a,b){var s
A.d1(a)
t.l.a(b)
s=this.a.a
if(s.b!=null){s.h_()
this.b.cV(new A.bQ(a,b))}},
$S:65}
A.lq.prototype={}
A.lZ.prototype={}
A.j8.prototype={$iCx:1}
A.lT.prototype={
mB(a){var s,r,q
t.O.a(a)
try{if(B.T===$.ai){a.$0()
return}A.Dl(null,null,this,a,t.H)}catch(q){s=A.au(q)
r=A.eD(q)
A.uU(A.d1(s),t.l.a(r))}},
mC(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.T===$.ai){a.$1(b)
return}A.Dm(null,null,this,a,b,t.H,c)}catch(q){s=A.au(q)
r=A.eD(q)
A.uU(A.d1(s),t.l.a(r))}},
fY(a){return new A.uj(this,t.O.a(a))},
kT(a,b){return new A.uk(this,b.i("~(0)").a(a),b)},
hw(a,b){b.i("0()").a(a)
if($.ai===B.T)return a.$0()
return A.Dl(null,null,this,a,b)},
f_(a,b,c,d){c.i("@<0>").a3(d).i("1(2)").a(a)
d.a(b)
if($.ai===B.T)return a.$1(b)
return A.Dm(null,null,this,a,b,c,d)},
mA(a,b,c,d,e,f){d.i("@<0>").a3(e).a3(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ai===B.T)return a.$2(b,c)
return A.IZ(null,null,this,a,b,c,d,e,f)},
hs(a,b,c,d){return b.i("@<0>").a3(c).a3(d).i("1(2,3)").a(a)}}
A.uj.prototype={
$0(){return this.a.mB(this.b)},
$S:0}
A.uk.prototype={
$1(a){var s=this.c
return this.a.mC(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.uV.prototype={
$0(){A.Gg(this.a,this.b)},
$S:0}
A.cZ.prototype={
gv(a){var s=this,r=new A.fk(s,s.r,A.o(s).i("fk<1>"))
r.c=s.e
return r},
gq(a){return this.a},
ga2(a){return this.a===0},
gam(a){return this.a!==0},
B(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iY(b)},
iY(a){var s=this.d
if(s==null)return!1
return this.ek(s[this.ef(a)],a)>=0},
ga_(a){var s=this.e
if(s==null)throw A.k(A.ao("No elements"))
return A.o(this).c.a(s.a)},
gaq(a){var s=this.f
if(s==null)throw A.k(A.ao("No elements"))
return A.o(this).c.a(s.a)},
n(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fm(s==null?q.b=A.Aw():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fm(r==null?q.c=A.Aw():r,b)}else return q.ix(b)},
ix(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.Aw()
r=p.ef(a)
q=s[r]
if(q==null)s[r]=[p.ed(a)]
else{if(p.ek(q,a)>=0)return!1
q.push(p.ed(a))}return!0},
Y(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fn(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fn(s.c,b)
else return s.k0(b)},
k0(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ef(a)
r=n[s]
q=o.ek(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fo(p)
return!0},
an(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ec()}},
fm(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.ed(b)
return!0},
fn(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fo(s)
delete a[b]
return!0},
ec(){this.r=this.r+1&1073741823},
ed(a){var s,r=this,q=new A.lQ(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ec()
return q},
fo(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ec()},
ef(a){return J.bU(a)&1073741823},
ek(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a1(a[r].a,b))return r
return-1},
$iC1:1}
A.lQ.prototype={}
A.fk.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.k(A.aM(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iaj:1}
A.ow.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:103}
A.O.prototype={
gv(a){return new A.ar(a,this.gq(a),A.aO(a).i("ar<O.E>"))},
ae(a,b){return this.h(a,b)},
ga2(a){return this.gq(a)===0},
gam(a){return!this.ga2(a)},
ga_(a){if(this.gq(a)===0)throw A.k(A.aq())
return this.h(a,0)},
gaq(a){if(this.gq(a)===0)throw A.k(A.aq())
return this.h(a,this.gq(a)-1)},
B(a,b){var s,r=this.gq(a)
for(s=0;s<r;++s){if(J.a1(this.h(a,s),b))return!0
if(r!==this.gq(a))throw A.k(A.aM(a))}return!1},
bq(a,b){var s,r
A.aO(a).i("l(O.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.k(A.aM(a))}return!0},
N(a,b){var s,r
A.aO(a).i("l(O.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.k(A.aM(a))}return!1},
S(a,b){var s
if(this.gq(a)===0)return""
s=A.Am("",a,b)
return s.charCodeAt(0)==0?s:s},
bV(a,b){var s=A.aO(a)
return new A.p(a,s.i("l(O.E)").a(b),s.i("p<O.E>"))},
cK(a,b,c){var s=A.aO(a)
return new A.ak(a,s.a3(c).i("1(O.E)").a(b),s.i("@<O.E>").a3(c).i("ak<1,2>"))},
a9(a,b,c,d){var s,r,q
d.a(b)
A.aO(a).a3(d).i("1(1,O.E)").a(c)
s=this.gq(a)
for(r=b,q=0;q<s;++q){r=c.$2(r,this.h(a,q))
if(s!==this.gq(a))throw A.k(A.aM(a))}return r},
b5(a,b){return A.c1(a,b,null,A.aO(a).i("O.E"))},
bb(a,b){return A.c1(a,0,A.dZ(b,"count",t.S),A.aO(a).i("O.E"))},
f3(a){var s,r=A.Ad(A.aO(a).i("O.E"))
for(s=0;s<this.gq(a);++s)r.n(0,this.h(a,s))
return r},
n(a,b){var s
A.aO(a).i("O.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.j(a,s,b)},
dJ(a,b){return new A.d9(a,A.aO(a).i("@<O.E>").a3(b).i("d9<1,2>"))},
E(a,b){var s,r=A.aO(a)
r.i("c(O.E,O.E)?").a(b)
s=b==null?A.JJ():b
A.l7(a,0,this.gq(a)-1,s,r.i("O.E"))},
aE(a,b,c){var s,r=this.gq(a)
A.bM(b,c,r)
s=A.E(this.dk(a,b,c),A.aO(a).i("O.E"))
return s},
dk(a,b,c){A.bM(b,c,this.gq(a))
return A.c1(a,b,c,A.aO(a).i("O.E"))},
aI(a,b,c,d){var s
A.aO(a).i("O.E?").a(d)
A.bM(b,c,this.gq(a))
for(s=b;s<c;++s)this.j(a,s,d)},
aS(a,b,c,d,e){var s,r,q,p,o
A.aO(a).i("h<O.E>").a(d)
A.bM(b,c,this.gq(a))
s=c-b
if(s===0)return
A.b9(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.hv(d,e).hz(0,!1)
r=0}p=J.ap(q)
if(r+s>p.gq(q))throw A.k(A.BP())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
bg(a,b,c,d){return this.aS(a,b,c,d,0)},
c6(a,b,c){var s
if(c<0)c=0
for(s=c;s<this.gq(a);++s)if(J.a1(this.h(a,s),b))return s
return-1},
bR(a,b){return this.c6(a,b,0)},
aY(a,b,c){var s,r
A.aO(a).i("h<O.E>").a(c)
if(t.j.b(c))this.bg(a,b,b+J.aB(c),c)
else for(s=J.T(c);s.m();b=r){r=b+1
this.j(a,b,s.gt())}},
ghv(a){return new A.aZ(a,A.aO(a).i("aZ<O.E>"))},
k(a){return A.A7(a,"[","]")},
$iU:1,
$ih:1,
$iz:1}
A.a3.prototype={
F(a,b,c){var s=A.o(this)
return A.C3(this,s.i("a3.K"),s.i("a3.V"),b,c)},
a0(a,b){var s,r,q,p=A.o(this)
p.i("~(a3.K,a3.V)").a(b)
for(s=this.gag(),s=s.gv(s),p=p.i("a3.V");s.m();){r=s.gt()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
aK(a,b){var s,r=this,q=A.o(r)
q.i("a3.K").a(a)
q.i("a3.V()").a(b)
if(r.C(a)){s=r.h(0,a)
return s==null?q.i("a3.V").a(s):s}q=b.$0()
r.j(0,a,q)
return q},
mI(a,b,c){var s,r=this,q=A.o(r)
q.i("a3.K").a(a)
q.i("a3.V(a3.V)").a(b)
q.i("a3.V()?").a(c)
if(r.C(a)){s=r.h(0,a)
q=b.$1(s==null?q.i("a3.V").a(s):s)
r.j(0,a,q)
return q}if(c!=null){q=c.$0()
r.j(0,a,q)
return q}throw A.k(A.y(a,"key","Key not in map."))},
gbo(){return this.gag().cK(0,new A.oz(this),A.o(this).i("an<a3.K,a3.V>"))},
mw(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(a3.K,a3.V)").a(b)
s=A.d([],m.i("u<a3.K>"))
for(r=n.gag(),r=r.gv(r),m=m.i("a3.V");r.m();){q=r.gt()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.a.n(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.n)(s),++o)n.Y(0,s[o])},
C(a){return this.gag().B(0,a)},
gq(a){var s=this.gag()
return s.gq(s)},
ga2(a){var s=this.gag()
return s.ga2(s)},
gam(a){var s=this.gag()
return s.gam(s)},
gU(){return new A.iM(this,A.o(this).i("iM<a3.K,a3.V>"))},
k(a){return A.Ag(this)},
$iac:1}
A.oz.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a3.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a3.V").a(s)
return new A.an(a,s,r.i("an<a3.K,a3.V>"))},
$S(){return A.o(this.a).i("an<a3.K,a3.V>(a3.K)")}}
A.oA.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
r.a=(r.a+=s)+": "
s=A.i(b)
r.a+=s},
$S:78}
A.iM.prototype={
gq(a){var s=this.a
return s.gq(s)},
ga2(a){var s=this.a
return s.ga2(s)},
gam(a){var s=this.a
return s.gam(s)},
ga_(a){var s=this.a,r=s.gag()
r=s.h(0,r.ga_(r))
return r==null?this.$ti.y[1].a(r):r},
gaq(a){var s=this.a,r=s.gag()
r=s.h(0,r.gaq(r))
return r==null?this.$ti.y[1].a(r):r},
gv(a){var s=this.a,r=s.gag()
return new A.iN(r.gv(r),s,this.$ti.i("iN<1,2>"))}}
A.iN.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gt())
return!0}s.c=null
return!1},
gt(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iaj:1}
A.j3.prototype={
j(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.k(A.ax("Cannot modify unmodifiable map"))}}
A.fN.prototype={
F(a,b,c){return this.a.F(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.o(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
C(a){return this.a.C(a)},
a0(a,b){this.a.a0(0,A.o(this).i("~(1,2)").a(b))},
ga2(a){var s=this.a
return s.ga2(s)},
gq(a){var s=this.a
return s.gq(s)},
gag(){return this.a.gag()},
k(a){return this.a.k(0)},
gU(){return this.a.gU()},
gbo(){return this.a.gbo()},
$iac:1}
A.dP.prototype={
F(a,b,c){return new A.dP(this.a.F(0,b,c),b.i("@<0>").a3(c).i("dP<1,2>"))}}
A.cy.prototype={
ga2(a){return this.gq(this)===0},
gam(a){return this.gq(this)!==0},
a1(a,b){var s
for(s=J.T(A.o(this).i("h<1>").a(b));s.m();)this.n(0,s.gt())},
l5(a){var s
for(s=a.gv(a);s.m();)if(!this.B(0,s.gt()))return!1
return!0},
gaL(a){var s,r=this
if(r.gq(r)>1)throw A.k(A.BQ())
s=r.gv(r)
if(!s.m())throw A.k(A.aq())
return s.gt()},
k(a){return A.A7(this,"{","}")},
bq(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gv(this);s.m();)if(!b.$1(s.gt()))return!1
return!0},
bb(a,b){return A.Cq(this,b,A.o(this).c)},
b5(a,b){return A.Cm(this,b,A.o(this).c)},
ga_(a){var s=this.gv(this)
if(!s.m())throw A.k(A.aq())
return s.gt()},
gaq(a){var s,r=this.gv(this)
if(!r.m())throw A.k(A.aq())
do s=r.gt()
while(r.m())
return s},
ae(a,b){var s,r
A.b9(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gt();--r}throw A.k(A.nk(b,b-r,this,"index"))},
$iU:1,
$ih:1,
$icU:1}
A.iX.prototype={}
A.m4.prototype={
n(a,b){this.$ti.c.a(b)
return A.CT()},
a1(a,b){this.$ti.i("h<1>").a(b)
return A.CT()}}
A.iD.prototype={
B(a,b){return this.a.B(0,b)},
gq(a){return this.a.a},
gv(a){var s=this.a
return A.eu(s,s.r,A.o(s).c)}}
A.hd.prototype={}
A.j4.prototype={}
A.lO.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jU(b):s}},
gq(a){return this.b==null?this.c.a:this.cm().length},
ga2(a){return this.gq(0)===0},
gam(a){return this.gq(0)>0},
gag(){if(this.b==null){var s=this.c
return new A.az(s,A.o(s).i("az<1>"))}return new A.lP(this)},
gU(){var s,r=this
if(r.b==null){s=r.c
return new A.L(s,A.o(s).i("L<2>"))}return A.C4(r.cm(),new A.ud(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.b(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.C(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.fT().j(0,b,c)},
C(a){if(this.b==null)return this.c.C(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
Y(a,b){if(this.b!=null&&!this.C(b))return null
return this.fT().Y(0,b)},
a0(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.a0(0,b)
s=o.cm()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uG(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.k(A.aM(o))}},
cm(){var s=t.jS.a(this.c)
if(s==null)s=this.c=A.d(Object.keys(this.a),t.s)
return s},
fT(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.cm()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.a.n(r,"")
else B.a.an(r)
n.a=n.b=null
return n.c=s},
jU(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uG(this.a[a])
return this.b[a]=s}}
A.ud.prototype={
$1(a){return this.a.h(0,A.b(a))},
$S:85}
A.lP.prototype={
gq(a){return this.a.gq(0)},
ae(a,b){var s=this.a
if(s.b==null)s=s.gag().ae(0,b)
else{s=s.cm()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.gag()
s=s.gv(s)}else{s=s.cm()
s=new J.eL(s,s.length,A.N(s).i("eL<1>"))}return s},
B(a,b){return this.a.C(b)}}
A.ut.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:79}
A.us.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:79}
A.fr.prototype={
gaB(){return this.a}}
A.hz.prototype={
M(a){var s,r
t.L.a(a)
s=J.ap(a)
if(s.ga2(a))return""
r=this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
s=new A.tN(r).lF(a,0,s.gq(a),!0)
s.toString
return A.iz(s,0,null)}}
A.tN.prototype={
lF(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.u(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.Hj(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.jw.prototype={
M(a){var s,r,q,p
A.b(a)
s=A.bM(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.tM()
q=r.lr(a,0,s)
q.toString
p=r.a
if(p<-1)A.j(A.A("Missing padding character",a,s))
if(p>0)A.j(A.A("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.tM.prototype={
lr(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Cy(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Hg(a,b,c,q)
r.a=A.Hi(a,b,c,s,0,r.a)
return s}}
A.bd.prototype={
ac(a,b,c,d){this.n(0,J.zV(t.L.a(a),b,c))
if(d)this.ap()},
$ib3:1}
A.be.prototype={}
A.b6.prototype={
cT(a){A.o(this).i("b3<b6.T>").a(a)
throw A.k(A.ax("This converter does not support chunked conversions: "+this.k(0)))}}
A.k3.prototype={}
A.i0.prototype={
k(a){var s=A.k5(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kt.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.ks.prototype={
be(a,b){var s=A.IU(a,this.glt().a)
return s},
b8(a,b){var s=A.Ht(a,this.gaB().b,null)
return s},
gaB(){return B.f3},
glt(){return B.f2}}
A.kv.prototype={}
A.ku.prototype={}
A.uf.prototype={
hJ(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.X(a,r,q)
r=q+1
o=A.aQ(92)
s.a+=o
o=A.aQ(117)
s.a+=o
o=A.aQ(100)
s.a+=o
o=p>>>8&15
o=A.aQ(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aQ(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aQ(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.X(a,r,q)
r=q+1
o=A.aQ(92)
s.a+=o
switch(p){case 8:o=A.aQ(98)
s.a+=o
break
case 9:o=A.aQ(116)
s.a+=o
break
case 10:o=A.aQ(110)
s.a+=o
break
case 12:o=A.aQ(102)
s.a+=o
break
case 13:o=A.aQ(114)
s.a+=o
break
default:o=A.aQ(117)
s.a+=o
o=A.aQ(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aQ(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aQ(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.X(a,r,q)
r=q+1
o=A.aQ(92)
s.a+=o
o=A.aQ(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.X(a,r,m)},
eb(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.k(new A.kt(a,null))}B.a.n(s,a)},
e3(a){var s,r,q,p,o=this
if(o.hI(a))return
o.eb(a)
try{s=o.b.$1(a)
if(!o.hI(s)){q=A.BV(a,null,o.gfE())
throw A.k(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.au(p)
q=A.BV(a,r,o.gfE())
throw A.k(q)}},
hI(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.Q.k(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hJ(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.eb(a)
q.mP(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.eb(a)
r=q.mQ(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
mP(a){var s,r,q=this.c
q.a+="["
s=J.ap(a)
if(s.gam(a)){this.e3(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.e3(s.h(a,r))}}q.a+="]"},
mQ(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga2(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.i6(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a0(0,new A.ug(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hJ(A.b(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.e3(r[n])}p.a+="}"
return!0}}
A.ug.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.j(s,r.a++,a)
B.a.j(s,r.a++,b)},
$S:78}
A.ue.prototype={
gfE(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lm.prototype={
h6(a,b){t.L.a(a)
return(b===!0?B.mk:B.mj).M(a)},
c2(a){return this.h6(a,null)}}
A.ln.prototype={
M(a){var s,r,q,p,o
A.b(a)
s=a.length
r=A.bM(0,null,s)
if(r===0)return new Uint8Array(0)
q=new Uint8Array(r*3)
p=new A.uu(q)
if(p.jn(a,0,r)!==r){o=r-1
if(!(o>=0&&o<s))return A.a(a,o)
p.eC()}return B.i.aE(q,0,p.b)}}
A.uu.prototype={
eC(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.B(q)
s=q.length
if(!(p<s))return A.a(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.a(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.a(q,p)
q[p]=189},
kM(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.B(r)
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
return!0}else{n.eC()
return!1}},
jn(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.a(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.B(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.a(a,m)
if(k.kM(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eC()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.B(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.B(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.a(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.a(s,m)
s[m]=n&63|128}}}return o}}
A.iF.prototype={
M(a){return new A.ex(this.a).cn(t.L.a(a),0,null,!0)}}
A.ex.prototype={
cn(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bM(b,c,J.aB(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.I5(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.I4(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.eh(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.I6(o)
l.b=0
throw A.k(A.A(m,a,p+l.c))}return n},
eh(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.u(b+c,2)
r=q.eh(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.eh(a,s,c,d)}return q.ls(a,b,c,d)},
ls(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bC(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aQ(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aQ(h)
e.a+=p
break
case 65:p=A.aQ(h)
e.a+=p;--d
break
default:p=A.aQ(h)
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
p=A.aQ(a[l])
e.a+=p}else{p=A.iz(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aQ(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.aL.prototype={
W(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bh(p,r)
return new A.aL(p===0?!1:s,r,p)},
j0(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.bj()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.a(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.a(q,n)
q[n]=m}o=this.a
n=A.bh(s,q)
return new A.aL(n===0?!1:o,q,n)},
j1(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.bj()
s=j-a
if(s<=0)return k.a?$.Bd():$.bj()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.a(r,o)
m=r[o]
if(!(n<s))return A.a(q,n)
q[n]=m}n=k.a
m=A.bh(s,q)
l=new A.aL(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.a(r,o)
if(r[o]!==0)return l.a8(0,$.bG())}return l},
aZ(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.k(A.aX("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.d.u(b,16)
if(B.d.P(b,16)===0)return n.j0(r)
q=s+r+1
p=new Uint16Array(q)
A.CF(n.b,s,b,p)
s=n.a
o=A.bh(q,p)
return new A.aL(o===0?!1:s,p,o)},
bY(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.k(A.aX("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.d.u(b,16)
q=B.d.P(b,16)
if(q===0)return j.j1(r)
p=s-r
if(p<=0)return j.a?$.Bd():$.bj()
o=j.b
n=new Uint16Array(p)
A.Hq(o,s,b,n)
s=j.a
m=A.bh(p,n)
l=new A.aL(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.d.aZ(1,q)-1)!==0)return l.a8(0,$.bG())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.a8(0,$.bG())}}return l},
l(a,b){var s,r
t.nx.a(b)
s=this.a
if(s===b.a){r=A.ls(this.b,this.c,b.b,b.c)
return s?0-r:r}return s?-1:1},
ck(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.ck(p,b)
if(o===0)return $.bj()
if(n===0)return p.a===b?p:p.W(0)
s=o+1
r=new Uint16Array(s)
A.Hl(p.b,o,a.b,n,r)
q=A.bh(s,r)
return new A.aL(q===0?!1:b,r,q)},
bj(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.bj()
s=a.c
if(s===0)return p.a===b?p:p.W(0)
r=new Uint16Array(o)
A.lr(p.b,o,a.b,s,r)
q=A.bh(o,r)
return new A.aL(q===0?!1:b,r,q)},
fd(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.a(s,n)
m=s[n]
if(!(n<o))return A.a(r,n)
l=r[n]
if(!(n<k))return A.a(q,n)
q[n]=m&l}p=A.bh(k,q)
return new A.aL(p===0?!1:b,q,p)},
fc(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.a(m,q)
p=m[q]
if(!(q<r))return A.a(l,q)
o=l[q]
if(!(q<n))return A.a(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.a(m,q)
r=m[q]
if(!(q<n))return A.a(k,q)
k[q]=r}s=A.bh(n,k)
return new A.aL(s===0?!1:b,k,s)},
fe(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
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
f[o]=p}q=A.bh(i,f)
return new A.aL(q===0?!1:b,f,q)},
dj(a,b){var s,r,q,p=this
t.nx.a(b)
if(p.c===0||b.c===0)return $.bj()
s=p.a
if(s===b.a){if(s){s=$.bG()
return p.bj(s,!0).fe(b.bj(s,!0),!0).ck(s,!0)}return p.fd(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.fc(r.bj($.bG(),!1),!1)},
hL(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.bG()
return p.bj(s,!0).fd(b.bj(s,!0),!0).ck(s,!0)}return p.fe(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.bG()
return r.bj(s,!0).fc(q,!0).ck(s,!0)},
D(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.ck(b,r)
if(A.ls(q.b,p,b.b,s)>=0)return q.bj(b,r)
return b.bj(q,!r)},
a8(a,b){var s,r,q=this,p=q.c
if(p===0)return b.W(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.ck(b,r)
if(A.ls(q.b,p,b.b,s)>=0)return q.bj(b,r)
return b.bj(q,!r)},
a4(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.bj()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.Av(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.bh(s,p)
return new A.aL(m===0?!1:o,p,m)},
bv(a){var s,r,q,p
if(this.c<a.c)return $.bj()
this.ft(a)
s=$.Ar.bd()-$.iI.bd()
r=A.At($.Aq.bd(),$.iI.bd(),$.Ar.bd(),s)
q=A.bh(s,r)
p=new A.aL(!1,r,q)
return this.a!==a.a&&q>0?p.W(0):p},
cs(a){var s,r,q,p=this
if(p.c<a.c)return p
p.ft(a)
s=A.At($.Aq.bd(),0,$.iI.bd(),$.iI.bd())
r=A.bh($.iI.bd(),s)
q=new A.aL(!1,s,r)
if($.As.bd()>0)q=q.bY(0,$.As.bd())
return p.a&&q.c>0?q.W(0):q},
ft(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.CC&&a.c===$.CE&&c.b===$.CB&&a.b===$.CD)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.d.gbN(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.CA(s,r,p,o)
m=new Uint16Array(b+5)
l=A.CA(c.b,b,p,m)}else{m=A.At(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.Au(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.ls(m,l,i,h)>=0){q&2&&A.B(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=1
A.lr(m,g,i,h,m)}else{q&2&&A.B(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.a(f,n)
f[n]=1
A.lr(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.Hm(k,m,e);--j
A.Av(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.Au(f,n,j,i)
A.lr(m,g,i,h,m)
while(--d,m[e]<d)A.lr(m,g,i,h,m)}--e}$.CB=c.b
$.CC=b
$.CD=s
$.CE=r
$.Aq.b=m
$.Ar.b=g
$.iI.b=n
$.As.b=p},
gO(a){var s,r,q,p,o=new A.tP(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.tQ().$1(s)},
I(a,b){if(b==null)return!1
return b instanceof A.aL&&this.l(0,b)===0},
gbN(a){var s,r,q,p,o,n,m=this.c
if(m===0)return 0
s=this.b
r=m-1
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]
o=16*r+B.d.gbN(p)
if(!this.a)return o
if((p&p-1)!==0)return o
for(n=m-2;n>=0;--n){if(!(n<q))return A.a(s,n)
if(s[n]!==0)return o}return o-1},
aF(a,b){if(b.c===0)throw A.k(B.W)
return this.bv(b)},
mp(a,b){if(b.c===0)throw A.k(B.W)
return this.cs(b)},
P(a,b){var s
if(b.c===0)throw A.k(B.W)
s=this.cs(b)
if(s.a)s=b.a?s.a8(0,b):s.D(0,b)
return s},
gab(a){if(this.c===0)return 0
return this.a?-1:1},
aR(a){var s,r
if(a<0)throw A.k(A.aX("Exponent must not be negative: "+a,null))
if(a===0)return $.bG()
s=$.bG()
for(r=this;a!==0;){if((a&1)===1)s=s.a4(0,r)
a=B.d.al(a,1)
if(a!==0)r=r.a4(0,r)}return s},
mc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b.a)throw A.k(A.aX("exponent must be positive: "+b.k(0),null))
if(c.l(0,$.bj())<=0)throw A.k(A.aX("modulus must be strictly positive: "+c.k(0),null))
if(b.c===0)return $.bG()
s=c.c
r=2*s+4
q=b.gbN(0)
if(q<=0)return $.bG()
p=c.b
o=s-1
if(!(o>=0&&o<p.length))return A.a(p,o)
n=new A.tO(c,c.aZ(0,16-B.d.gbN(p[o])))
m=new Uint16Array(r)
l=new Uint16Array(r)
k=new Uint16Array(s)
j=n.h1(this,k)
for(i=j-1;i>=0;--i){if(!(i<s))return A.a(k,i)
p=k[i]
if(!(i<r))return A.a(m,i)
m[i]=p}for(h=q-2,g=j;h>=0;--h){f=n.hX(m,g,l)
if(b.dj(0,$.bG().aZ(0,h)).c!==0)g=n.fG(m,A.Hn(l,f,k,j,m))
else{g=f
e=l
l=m
m=e}}p=A.bh(g,m)
return new A.aL(!1,m,p)},
aD(a){var s,r,q,p
for(s=this.c-1,r=this.b,q=r.length,p=0;s>=0;--s){if(!(s<q))return A.a(r,s)
p=p*65536+r[s]}return this.a?-p:p},
cP(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.c
if(i===0)return 0
s=new Uint8Array(8);--i
r=k.b
q=r.length
if(!(i>=0&&i<q))return A.a(r,i)
p=16*i+B.d.gbN(r[i])
if(p>1024)return k.a?-1/0:1/0
if(k.a)s[7]=128
o=p-53+1075
s[6]=(o&15)<<4
s[7]=(s[7]|B.d.al(o,4))>>>0
j.a=j.b=0
j.c=i
n=new A.tS(j,k)
i=n.$1(5)
if(typeof i!=="number")return i.dj()
s[6]=s[6]|i&15
for(m=5;m>=0;--m)B.i.j(s,m,n.$1(8))
l=new A.tT(s)
if(J.a1(n.$1(1),1))if((s[0]&1)===1)l.$0()
else if(j.b!==0)l.$0()
else for(m=j.c;m>=0;--m){if(!(m<q))return A.a(r,m)
if(r[m]!==0){l.$0()
break}}return J.jn(B.i.ga6(s)).getFloat64(0,!0)},
k(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(m[0])}s=A.d([],t.s)
m=n.a
r=m?n.W(0):n
while(r.c>1){q=$.Bc()
if(q.c===0)A.j(B.W)
p=r.cs(q).k(0)
B.a.n(s,p)
o=p.length
if(o===1)B.a.n(s,"000")
if(o===2)B.a.n(s,"00")
if(o===3)B.a.n(s,"0")
r=r.bv(q)}q=r.b
if(0>=q.length)return A.a(q,0)
B.a.n(s,B.d.k(q[0]))
if(m)B.a.n(s,"-")
return new A.aZ(s,t.q6).c8(0)},
eB(a){if(a<10)return 48+a
return 97+a-10},
bE(a,b){var s,r,q,p,o,n,m,l=this
if(b<2||b>36)throw A.k(A.aI(b,2,36,null,null))
s=l.c
if(s===0)return"0"
if(s===1){s=l.b
if(0>=s.length)return A.a(s,0)
r=B.d.bE(s[0],b)
if(l.a)return"-"+r
return r}if(b===16)return l.kD()
q=A.h7(b)
p=A.d([],t.t)
s=l.a
o=s?l.W(0):l
for(n=q.c===0;o.c!==0;){if(n)A.j(B.W)
m=o.cs(q).aD(0)
o=o.bv(q)
B.a.n(p,l.eB(m))}r=A.iz(new A.aZ(p,t.gb),0,null)
if(s)return"-"+r
return r},
kD(){var s,r,q,p,o,n,m,l=this,k=A.d([],t.t)
for(s=l.c-1,r=l.b,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p]
for(n=0;n<4;++n){B.a.n(k,l.eB(o&15))
o=o>>>4}}if(!(s>=0&&s<q))return A.a(r,s)
m=r[s]
while(m!==0){B.a.n(k,l.eB(m&15))
m=m>>>4}if(l.a)B.a.n(k,45)
return A.iz(new A.aZ(k,t.gb),0,null)},
$ihA:1,
$iaS:1}
A.tP.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:48}
A.tQ.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:30}
A.tS.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=this.b,q=r.c-1,r=r.b,p=r.length;o=s.a,o<a;){o=s.c
if(o<0){s.c=o-1
n=0
m=16}else{if(!(o<p))return A.a(r,o)
n=r[o]
m=o===q?B.d.gbN(n):16;--s.c}s.b=B.d.aZ(s.b,m)+n
s.a+=m}r=s.b
o-=a
l=B.d.bY(r,o)
s.b=r-B.d.aZ(l,o)
s.a=o
return l},
$S:30}
A.tT.prototype={
$0(){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=1,p=0;p<8;++p){if(q===0)break
o=s[p]+q
r&2&&A.B(s)
s[p]=o&255
q=o>>>8}},
$S:0}
A.tO.prototype={
h1(a,b){var s,r,q,p,o,n,m=a.a
if(!m){s=this.a
s=A.ls(a.b,a.c,s.b,s.c)>=0}else s=!0
if(s){s=this.a
r=a.cs(s)
if(m&&r.c>0)r=r.D(0,s)
q=r.c
p=r.b}else{q=a.c
p=a.b}for(m=p.length,s=b.$flags|0,o=q;--o,o>=0;){if(!(o<m))return A.a(p,o)
n=p[o]
s&2&&A.B(b)
if(!(o<b.length))return A.a(b,o)
b[o]=n}return q},
fG(a,b){var s
if(b<this.a.c)return b
s=A.bh(b,a)
return this.h1(new A.aL(!1,a,s).cs(this.b),a)},
hX(a,b,c){var s,r,q,p,o,n=A.bh(b,a),m=new A.aL(!1,a,n),l=m.a4(0,m)
for(s=l.c,n=l.b,r=n.length,q=c.$flags|0,p=0;p<s;++p){if(!(p<r))return A.a(n,p)
o=n[p]
q&2&&A.B(c)
if(!(p<c.length))return A.a(c,p)
c[p]=o}for(n=2*b;s<n;++s){q&2&&A.B(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}return this.fG(c,n)}}
A.ur.prototype={
$2(a,b){var s,r
A.b(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.T(t.tY.a(b)),r=this.a;s.m();){b=s.gt()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.m(b)}},
$S:90}
A.n7.prototype={
$0(){var s=this
return A.j(A.aX("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:74}
A.a5.prototype={
aM(a){var s=1000,r=B.d.P(a,s),q=B.d.u(a-r,s),p=this.b+r,o=B.d.P(p,s),n=this.c
return new A.a5(A.BJ(this.a+B.d.u(p-o,s)+q,o,n),o,n)},
aX(a){return A.A3(0,this.b-a.b,this.a-a.a,0)},
I(a,b){if(b==null)return!1
return b instanceof A.a5&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gO(a){return A.bu(this.a,this.b,B.t,B.t)},
hc(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
l(a,b){var s
t.zG.a(b)
s=B.d.l(this.a,b.a)
if(s!==0)return s
return B.d.l(this.b,b.b)},
H(){var s=this
if(s.c)return s
return new A.a5(s.a,s.b,!0)},
k(a){var s=this,r=A.BI(A.b2(s)),q=A.dc(A.bk(s)),p=A.dc(A.aH(s)),o=A.dc(A.Ah(s)),n=A.dc(A.Ai(s)),m=A.dc(A.C9(s)),l=A.n8(A.C8(s)),k=s.b,j=k===0?"":A.n8(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
df(){var s=this,r=A.b2(s)>=-9999&&A.b2(s)<=9999?A.BI(A.b2(s)):A.Gd(A.b2(s)),q=A.dc(A.bk(s)),p=A.dc(A.aH(s)),o=A.dc(A.Ah(s)),n=A.dc(A.Ai(s)),m=A.dc(A.C9(s)),l=A.n8(A.C8(s)),k=s.b,j=k===0?"":A.n8(k)
k=r+"-"+q
if(s.c)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j},
$iaS:1}
A.n9.prototype={
$1(a){if(a==null)return 0
return A.Z(a,null,null)},
$S:53}
A.na.prototype={
$1(a){var s,r,q
if(a==null)return 0
for(s=a.length,r=0,q=0;q<6;++q){r*=10
if(q<s){if(!(q<s))return A.a(a,q)
r+=a.charCodeAt(q)^48}}return r},
$S:53}
A.cb.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.cb&&this.a===b.a},
gO(a){return B.d.gO(this.a)},
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
return s+m+":"+q+r+":"+o+p+"."+B.c.af(B.d.k(n%1e6),6,"0")},
$iaS:1}
A.lJ.prototype={
k(a){return this.T()},
$ia0:1}
A.aA.prototype={
gci(){return A.GN(this)}}
A.jt.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.k5(s)
return"Assertion failed"}}
A.dM.prototype={}
A.c5.prototype={
gej(){return"Invalid argument"+(!this.a?"(s)":"")},
gei(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.i(p),n=s.gej()+q+o
if(!s.a)return n
return n+s.gei()+": "+A.k5(s.geM())},
geM(){return this.b}}
A.fT.prototype={
geM(){return A.AE(this.b)},
gej(){return"RangeError"},
gei(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.kg.prototype={
geM(){return A.P(this.b)},
gej(){return"RangeError"},
gei(){if(A.P(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.iE.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.lj.prototype={
k(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dF.prototype={
k(a){return"Bad state: "+this.a}}
A.jN.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.k5(s)+"."}}
A.kL.prototype={
k(a){return"Out of Memory"},
gci(){return null},
$iaA:1}
A.iy.prototype={
k(a){return"Stack Overflow"},
gci(){return null},
$iaA:1}
A.tY.prototype={
k(a){return"Exception: "+this.a}}
A.b7.prototype={
k(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.X(e,0,75)+"..."
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
k=""}return g+l+B.c.X(e,i,j)+k+"\n"+B.c.a4(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.i(f)+")"):g}}
A.km.prototype={
gci(){return null},
k(a){return"IntegerDivisionByZeroException"},
$iaA:1}
A.h.prototype={
dJ(a,b){return A.eP(this,A.o(this).i("h.E"),b)},
cK(a,b,c){var s=A.o(this)
return A.C4(this,s.a3(c).i("1(h.E)").a(b),s.i("h.E"),c)},
bV(a,b){var s=A.o(this)
return new A.p(this,s.i("l(h.E)").a(b),s.i("p<h.E>"))},
B(a,b){var s
for(s=this.gv(this);s.m();)if(J.a1(s.gt(),b))return!0
return!1},
a0(a,b){var s
A.o(this).i("~(h.E)").a(b)
for(s=this.gv(this);s.m();)b.$1(s.gt())},
e_(a,b){var s,r
A.o(this).i("h.E(h.E,h.E)").a(b)
s=this.gv(this)
if(!s.m())throw A.k(A.aq())
r=s.gt()
while(s.m())r=b.$2(r,s.gt())
return r},
a9(a,b,c,d){var s,r
d.a(b)
A.o(this).a3(d).i("1(1,h.E)").a(c)
for(s=this.gv(this),r=b;s.m();)r=c.$2(r,s.gt())
return r},
N(a,b){var s
A.o(this).i("l(h.E)").a(b)
for(s=this.gv(this);s.m();)if(b.$1(s.gt()))return!0
return!1},
hz(a,b){var s=A.o(this).i("h.E")
if(b)s=A.E(this,s)
else{s=A.E(this,s)
s.$flags=1
s=s}return s},
f3(a){return A.Ae(this,A.o(this).i("h.E"))},
gq(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
ga2(a){return!this.gv(this).m()},
gam(a){return!this.ga2(this)},
bb(a,b){return A.Cq(this,b,A.o(this).i("h.E"))},
b5(a,b){return A.Cm(this,b,A.o(this).i("h.E"))},
ga_(a){var s=this.gv(this)
if(!s.m())throw A.k(A.aq())
return s.gt()},
gaq(a){var s,r=this.gv(this)
if(!r.m())throw A.k(A.aq())
do s=r.gt()
while(r.m())
return s},
ae(a,b){var s,r
A.b9(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gt();--r}throw A.k(A.nk(b,b-r,this,"index"))},
k(a){return A.Gp(this,"(",")")}}
A.an.prototype={
k(a){return"MapEntry("+A.i(this.a)+": "+A.i(this.b)+")"}}
A.bg.prototype={
gO(a){return A.a_.prototype.gO.call(this,0)},
k(a){return"null"}}
A.a_.prototype={$ia_:1,
I(a,b){return this===b},
gO(a){return A.bZ(this)},
k(a){return"Instance of '"+A.kT(this)+"'"},
gau(a){return A.bc(this)},
toString(){return this.k(this)}}
A.m1.prototype={
k(a){return""},
$ien:1}
A.bC.prototype={
gq(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iH3:1}
A.tE.prototype={
$2(a,b){var s,r,q,p
t.yz.a(a)
A.b(b)
s=B.c.bR(b,"=")
if(s===-1){if(b!=="")a.j(0,A.AB(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.X(b,0,s)
q=B.c.aa(b,s+1)
p=this.a
a.j(0,A.AB(r,0,r.length,p,!0),A.AB(q,0,q.length,p,!0))}return a},
$S:126}
A.tD.prototype={
$2(a,b){throw A.k(A.A("Illegal IPv6 address, "+a,this.a,b))},
$S:131}
A.j5.prototype={
gdG(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.i(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gO(a){var s,r=this,q=r.y
if(q===$){s=B.c.gO(r.gdG())
r.y!==$&&A.ht()
r.y=s
q=s}return q},
gha(){var s=this.c
if(s==null)return""
if(B.c.ao(s,"[")&&!B.c.bZ(s,"v",1))return B.c.X(s,1,s.length-1)
return s},
ghq(){var s=this.d
return s==null?A.CU(this.a):s},
k(a){return this.gdG()},
I(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(n===b)return!0
s=!1
if(b instanceof A.j5)if(n.a===b.a)if(n.c!=null===(b.c!=null))if(n.b===b.b)if(n.gha()===b.gha())if(n.ghq()===b.ghq())if(n.e===b.e){r=n.f
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
$itC:1}
A.uo.prototype={
$1(a){return A.AC(64,A.b(a),B.O,!1)},
$S:12}
A.uq.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.AC(1,a,B.O,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.AC(1,b,B.O,!0)
s.a+=r}},
$S:136}
A.up.prototype={
$2(a,b){var s,r
A.b(a)
if(b==null||typeof b=="string")this.a.$2(a,A.m(b))
else for(s=J.T(t.tY.a(b)),r=this.a;s.m();)r.$2(a,A.b(s.gt()))},
$S:90}
A.k6.prototype={
k(a){return"Expando:null"}}
A.oI.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.z1.prototype={
$1(a){return this.a.cC(this.b.i("0/?").a(a))},
$S:42}
A.z2.prototype={
$1(a){if(a==null)return this.a.dK(new A.oI(a===undefined))
return this.a.dK(a)},
$S:42}
A.lN.prototype={
ik(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.k(A.ax("No source of cryptographically secure random numbers available."))},
cM(a){var s,r,q,p,o,n,m,l,k=null
if(a<=0||a>4294967296)throw A.k(new A.fT(k,k,!1,k,k,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.B(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.P(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bn(B.ay.ga6(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}},
$iGQ:1}
A.k4.prototype={}
A.jY.prototype={}
A.kx.prototype={
bp(a,b){var s,r,q,p=this.$ti.i("z<1>?")
p.a(a)
p.a(b)
if(a===b)return!0
s=a.length
p=b.length
if(s!==p)return!1
for(r=0;r<s;++r){q=a[r]
if(!(r<p))return A.a(b,r)
if(q!==b[r])return!1}return!0},
aw(a){var s,r,q
this.$ti.i("z<1>?").a(a)
for(s=a.length,r=0,q=0;q<s;++q){r=r+B.d.gO(a[q])&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.ca.prototype={
I(a,b){var s,r,q,p,o,n,m
if(b==null)return!1
if(b instanceof A.ca){s=this.a
r=b.a
q=s.length
p=r.length
if(q!==p)return!1
for(o=0,n=0;n<q;++n){m=s[n]
if(!(n<p))return A.a(r,n)
o|=m^r[n]}return o===0}return!1},
gO(a){return A.C5(this.a)},
k(a){return A.uM(this.a)}}
A.jZ.prototype={
n(a,b){if(this.a!=null)throw A.k(A.ao("add may only be called once."))
this.a=b},
ap(){if(this.a==null)throw A.k(A.ao("add must be called once."))},
$ib3:1}
A.fE.prototype={
M(a){var s,r,q
t.L.a(a)
s=new A.jZ()
r=this.cT(s)
r.n(0,a)
r.ap()
q=s.a
q.toString
return q}}
A.kc.prototype={
n(a,b){var s,r=this
t.L.a(b)
if(r.w)throw A.k(A.ao("Hash.add() called after close()."))
s=J.ap(b)
r.r=r.r+s.gq(b)
r.ff(b,0,s.gq(b))},
ac(a,b,c,d){var s=this
t.L.a(a)
if(s.w)throw A.k(A.ao("Hash.addSlice() called after close()."))
A.bM(b,c,J.aB(a))
if(b<c){s.r=s.r+(c-b)
s.ff(a,b,c)}if(d)s.ap()},
ff(a,b,c){var s,r,q,p,o,n=this
t.L.a(a)
s=n.e
r=n.d
q=r.length
for(p=b;;s=0){o=s+c-p
if(o<q){B.i.aS(r,s,o,a,p)
n.e=o
return}B.i.aS(r,s,q,a,p)
p+=q-s
n.eu()}},
eu(){var s,r=this,q=r.f,p=r.c,o=B.a1===r.b,n=q.$flags|0,m=q.length,l=0
do{s=p.getUint32(l*4,o)
n&2&&A.B(q)
if(!(l<m))return A.a(q,l)
q[l]=s;++l}while(l<m)
r.hB(q)},
ap(){var s,r,q,p,o,n,m,l,k,j=this
if(j.w)return
j.w=!0
if(j.r>1125899906842623)A.j(A.ax("Hashing is unsupported for messages with more than 2^53 bits."))
s=j.d
r=j.e
q=j.e=r+1
s.$flags&2&&A.B(s)
p=s.length
if(!(r>=0&&r<p))return A.a(s,r)
s[r]=128
if(q>p-j.x){B.i.aI(s,q,p,0)
j.eu()
r=j.e=0}else r=q
o=j.r*8
n=p-8
B.i.aI(s,r,n,0)
m=B.d.u(o,4294967296)
l=o>>>0
s=j.b
r=j.c
q=B.a1===s
p=n+4
k=r.$flags|0
if(s===B.au){k&2&&A.B(r,11)
r.setUint32(n,m,q)
r.setUint32(p,l,q)}else{k&2&&A.B(r,11)
r.setUint32(n,l,q)
r.setUint32(p,m,q)}j.eu()
j.e=0
s=j.a
s.n(0,new A.ca(j.iL()))
s.ap()},
iL(){var s,r,q,p,o,n,m
if(this.b===$.eH())return J.FN(B.D.ga6(this.geK()))
s=this.geK()
r=s.byteLength
q=new Uint8Array(r)
p=J.jn(B.i.ga6(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.B(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.lU.prototype={
cT(a){var s,r,q,p
t.uC.a(a)
s=new Uint32Array(A.aF(A.d([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)))
r=new Uint32Array(64)
q=new Uint8Array(64)
p=new Uint32Array(16)
return new A.lV(s,r,a,B.au,J.jn(B.i.ga6(q)),q,p,8)}}
A.lW.prototype={
hB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a.length
if(15>=b)return A.a(a,15)
s=this.z
r=this.y
if(7>=r.length)return A.a(r,7)
for(q=s.$flags|0,p=0;p<16;++p){if(!(p<b))return A.a(a,p)
o=a[p]
q&2&&A.B(s)
s[p]=o}for(p=16;p<64;++p){b=s[p-2]
o=s[p-7]
n=s[p-15]
m=s[p-16]
q&2&&A.B(s)
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
d=c+((((k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10))>>>0)+((k&j^k&i^b)>>>0)>>>0)>>>0}r.$flags&2&&A.B(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.lV.prototype={
geK(){return this.y}}
A.lX.prototype={
cT(a){var s,r,q,p,o
t.uC.a(a)
s=new Uint32Array(A.aF(A.d([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],t.t)))
r=new Uint32Array(160)
q=new Uint32Array(38)
p=new Uint8Array(128)
o=new Uint32Array(32)
return new A.l5(s,r,q,a,B.au,J.jn(B.i.ga6(p)),p,o,16)},
gkU(){return 128}}
A.lY.prototype={
geK(){return J.ms(B.D.ga6(this.y),0,this.glC())},
hB(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
for(s=this.z,r=a5.length,q=s.$flags|0,p=0;p<32;++p){if(!(p<r))return A.a(a5,p)
o=a5[p]
q&2&&A.B(s)
s[p]=o}for(r=this.Q,o=r.$flags|0,p=32;p<160;p+=2){n=p-4
m=s[n]
o&2&&A.B(r)
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
q&2&&A.B(s)
if(!(m<160))return A.a(s,m)
s[m]=k+j
j=r[30]
k=r[32]
n=s[m]<r[31]?1:0
s[p]=j+k+n}q=this.y
B.D.bg(r,12,28,q)
for(p=0;p<160;p+=2){n=r[20]
o&2&&A.B(r)
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
i=$.Fw()
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
q.$flags&2&&A.B(q)
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
A.l5.prototype={
glC(){return 16}}
A.jz.prototype={
bn(a,b,c){return this.lu(a,t.L.a(b),c)},
lu(a0,a1,a2){var s=0,r=A.I(t.L),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bn=A.J(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:c=a0.b.a
b=c.length
if(b!==16)throw A.k(A.y(a0,"secretBox","Expected MAC length 16, actually "+b))
s=3
return A.q(A.jC(a2,!0,!1,!1,n.c,"AES-GCM"),$async$bn)
case 3:m=a4
f=a0.a
l=c
c=f.length
e=J.aB(l)
k=new Uint8Array(c+e)
J.Br(k,0,f)
J.Br(k,c,l)
p=5
s=8
return A.q(A.wM({name:"AES-GCM",iv:A.bD(a0.c),additionalData:A.bD(a1),tagLength:J.aB(l)*8},m,A.bD(k)),$async$bn)
case 8:j=a4
c=J.bn(j,0,null)
q=c
s=1
break
p=2
s=7
break
case 5:p=4
a=o.pop()
i=A.au(a)
h=A.x(i)
if("name" in h){g=A.b(h.name)
if(J.a1(g,"OperationError"))throw A.k(A.Ck())}throw a
s=7
break
case 4:s=2
break
case 7:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$bn,r)},
bA(a,b,c){var s=t.L
return this.lG(s.a(a),s.a(b),c)},
lG(a,b,c){var s=0,r=A.I(t.yX),q,p=this,o,n,m,l,k
var $async$bA=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:o=p.hk()
s=3
return A.q(A.jC(c,!1,!0,!1,p.c,"AES-GCM"),$async$bA)
case 3:n=e
s=4
return A.q(A.wY({name:"AES-GCM",iv:A.bD(o),additionalData:A.bD(b),tagLength:128},n,A.bD(a)),$async$bA)
case 4:m=e
l=a.length
k=J.fp(m)
q=new A.ek(k.cz(m,0,l),new A.cQ(k.cz(m,l,null)),o)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bA,r)},
gcf(){return this.c},
gca(){return this.d}}
A.mH.prototype={
gfA(){return!1},
eD(a,b){var s=this.i3(a,b),r=$.e_()
if(r&&b!==24)return new A.jz(b,a,null)
return s},
cE(){var s=this.i4(),r=$.e_()
if(r&&!this.gfA())return new A.jA(s,null)
return s},
cI(a,b){var s=$.e_()
if(s)if(A.Bx(a.gb9())!=null)return new A.mI(a,b)
return this.i5(a,b)},
cJ(a){var s=$.e_()
if(s)return B.e5
return this.i6(a)},
cg(){var s=$.e_()
if(s)return B.ck
return this.i7()},
e7(){var s=$.e_()
if(s)return B.e7
return this.i8()},
di(){var s=$.e_()
if(s&&!this.gfA())return B.e6
return this.i9()}}
A.jA.prototype={
aQ(){var s=0,r=A.I(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aQ=A.J(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.tV()
p=4
s=7
return A.q(A.mj($.zO(),!0,A.d(["sign","verify"],t.s)),$async$aQ)
case 7:m=b
e=g
s=8
return A.q(A.mh(A.x(m.privateKey)),$async$aQ)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.au(f)
k=n.b
if(k!=null){q=k.aQ()
s=1
break}throw A.k(A.ao(A.bc(n).k(0)+".newKeyPair(...) failed: "+A.i(l)))
s=6
break
case 3:s=2
break
case 6:i=A.m(g.cr().d)
i.toString
i=A.vi(i)
h=A.m(g.cr().x)
h.toString
q=new A.cW(new A.bp(i,!1),new A.bB(A.vi(h),B.R),B.R)
s=1
break
case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$aQ,r)},
aJ(a){t.L.a(a)
B.R.cB(a)
return A.BE(null).aJ(a)},
aT(a,b,c){return this.hT(0,t.L.a(b),c)},
hT(a,b,c){var s=0,r=A.I(t.bu),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$aT=A.J(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:p=4
m=c.br()
s=7
return A.q(c.b2(),$async$aT)
case 7:l=a1
g={crv:"Ed25519",d:A.mb(l.gaH()),kty:"OKP",x:A.mb(l.f.a)}
f=$.zO()
s=8
return A.q(A.je(g,f,!1,A.d(["sign"],t.s)),$async$aT)
case 8:k=a1
s=9
return A.q(A.mn(f,k,A.bD(b)),$async$aT)
case 9:j=a1
s=10
return A.q(m,$async$aT)
case 10:f=a1
q=new A.fa(j,f)
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
i=A.au(d)
h=n.b
if(h!=null){q=h.aT(0,b,c)
s=1
break}throw A.k(A.ao(A.bc(n).k(0)+".sign(...) failed: "+A.i(i)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$aT,r)},
bG(a,b){return this.mL(t.L.a(a),b)},
mL(a,b){var s=0,r=A.I(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bG=A.J(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=b.a
f=g.length
if(f!==64)A.j(A.ao("Ed25519 signature must be 64 bytes (got "+f+" bytes)"))
m=b.b
B.R.d5(m.a)
p=4
f=A.bD(m.a)
i=$.zO()
s=7
return A.q(A.hm(f,i,!0,A.d(["verify"],t.s)),$async$bG)
case 7:l=d
g=A.zJ(i,l,A.bD(g),A.bD(a))
q=g
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
k=A.au(e)
j=n.b
if(j!=null){q=j.bG(a,b)
s=1
break}throw A.k(A.ao(A.bc(n).k(0)+".verify(...) failed: "+A.i(k)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$bG,r)}}
A.ft.prototype={
aw(a){return this.lZ(t.L.a(a))},
lZ(a){var s=0,r=A.I(t.yO),q,p=this,o,n
var $async$aw=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:o=A
n=J
s=3
return A.q(A.wO(p.ghC(),A.bD(a)),$async$aw)
case 3:q=new o.e6(n.bn(c,0,null))
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$aw,r)}}
A.jD.prototype={
ghC(){return"SHA-256"}}
A.jE.prototype={
ghC(){return"SHA-512"}}
A.lu.prototype={}
A.lv.prototype={}
A.mI.prototype={
aW(a,b,c){var s=t.L
s.a(b)
return this.lx(s.a(a),b,c)},
lx(a,b,c){var s=0,r=A.I(t.A0),q,p=this,o,n,m,l,k
var $async$aW=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:n=p.a
m=A.Bx(n.gb9())
if(m==null)throw A.k(A.ax("The hash algorithm "+n.gb9().k(0)+" is not supported by Web Crypto API."))
s=3
return A.q(p.cZ(c),$async$aW)
case 3:o=e
l=A
k=A
s=4
return A.q(A.mf({name:"HKDF",hash:m,salt:A.bD(b),info:A.bD(a)},o,8*p.b),$async$aW)
case 4:q=new l.bl(new k.bp(e,!1),null)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$aW,r)},
cZ(a){var s=0,r=A.I(t.m),q,p,o
var $async$cZ=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:p=A
o=A
s=4
return A.q(a.cF(),$async$cZ)
case 4:s=3
return A.q(p.hm(o.bD(c),"HKDF",!1,A.d(["deriveBits"],t.s)),$async$cZ)
case 3:q=c
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$cZ,r)},
gd8(){return this.a},
gdY(){return this.b}}
A.jB.prototype={
b1(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.kZ(a,s.a(b),c,d)},
fZ(a,b,c){return this.b1(a,B.A,b,c)},
kZ(a,b,c,d){var s=0,r=A.I(t.Ep),q,p=this,o,n
var $async$b1=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.q(p.cX(d),$async$b1)
case 4:s=3
return A.q(n.mn("HMAC",f,A.bD(a)),$async$b1)
case 3:q=new o.cQ(f)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$b1,r)},
cX(a){var s=0,r=A.I(t.m),q,p=this,o,n
var $async$cX=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.q(a.cF(),$async$cX)
case 4:s=3
return A.q(o.hm(n.bD(c),{name:"HMAC",hash:p.b},!1,A.d(["sign"],t.s)),$async$cX)
case 3:q=c
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$cX,r)},
gb9(){return this.a}}
A.mJ.prototype={
aQ(){var s=0,r=A.I(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aQ=A.J(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.tV()
p=4
s=7
return A.q(A.mj($.zP(),!0,A.d(["deriveBits"],t.s)),$async$aQ)
case 7:m=b
e=g
s=8
return A.q(A.mh(A.x(m.privateKey)),$async$aQ)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.au(f)
k=B.cs
if(k!=null){q=k.aQ()
s=1
break}throw A.k(A.ao(A.bc(n).k(0)+".newKeyPair(...) failed: "+A.i(l)))
s=6
break
case 3:s=2
break
case 6:i=A.m(g.cr().d)
i.toString
i=new Uint8Array(A.aF(A.vi(i)))
h=A.m(g.cr().x)
h.toString
q=new A.cW(new A.bp(i,!1),new A.bB(new Uint8Array(A.aF(A.vi(h))),B.S),B.R)
s=1
break
case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$aQ,r)},
aJ(a){t.L.a(a)
B.S.cB(a)
return new A.hM(null).aJ(a)},
b0(a,b){return this.hS(a,b)},
hS(a2,a3){var s=0,r=A.I(t.g),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b0=A.J(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:c=a3
B.S.d5(c.a)
m=A.tV()
p=4
s=7
return A.q(a2.b2(),$async$b0)
case 7:l=a5
B.R.cB(l.gaH())
a1=m
s=8
return A.q(A.je({crv:"X25519",d:A.mb(l.gaH()),kty:"OKP",x:A.mb(l.f.a)},$.zP(),!1,A.d(["deriveBits"],t.s)),$async$b0)
case 8:a1.b=a5
p=2
s=6
break
case 4:p=3
b=o.pop()
k=A.au(b)
j=B.cs
if(j!=null){q=j.b0(a2,a3)
s=1
break}throw A.k(A.ao(A.bc(n).k(0)+".sharedSecretKey(...) failed to construct JS private key: "+A.i(k)))
s=6
break
case 3:s=2
break
case 6:i=A.tV()
p=10
a1=i
s=13
return A.q(A.je({crv:"X25519",kty:"OKP",x:A.mb(c.a)},$.zP(),!1,A.d([],t.s)),$async$b0)
case 13:a1.b=a5
p=2
s=12
break
case 10:p=9
a=o.pop()
h=A.au(a)
d=A.ao(A.bc(n).k(0)+".sharedSecretKey(...) failed to construct JS public key: "+A.i(h))
throw A.k(d)
s=12
break
case 9:s=2
break
case 12:p=15
s=18
return A.q(A.mf({name:"X25519",public:i.cr()},m.cr(),256),$async$b0)
case 18:g=a5
q=new A.bl(new A.bp(g,!1),null)
s=1
break
p=2
s=17
break
case 15:p=14
a0=o.pop()
f=A.au(a0)
d=A.ao(A.bc(n).k(0)+".sharedSecretKey(...) failed: "+A.i(f))
throw A.k(d)
s=17
break
case 14:s=2
break
case 17:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$b0,r)}}
A.eK.prototype={
gO(a){return A.bu(B.m3,this.gcf(),this.gca(),B.t)},
I(a,b){if(b==null)return!1
return b instanceof A.eK&&this.gcf()===b.gcf()&&this.gca()===b.gca()},
k(a){var s=this
if(s.gca()===12)return A.bc(s).k(0)+".with"+s.gcf()*8+"bits()"
return A.bc(s).k(0)+".with"+s.gcf()*8+"bits(nonceLength: "+s.gca()+")"}}
A.hx.prototype={
gO(a){var s=this
return(s.a^s.b^s.c^s.d)>>>0},
I(a,b){var s=this
if(b==null)return!1
return b instanceof A.hG&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d},
k(a){var s=this
return A.bc(s).k(0)+"(\n  parallelism: "+s.a+",\n  memory: "+s.b+",\n  iterations: "+s.c+",\n  hashLength: "+s.d+",\n)"}}
A.hB.prototype={
gd4(){return 64},
gO(a){return A.bZ(B.m4)},
I(a,b){if(b==null)return!1
return b instanceof A.eR},
k(a){var s=this.a
if(s===64)return"Blake2b()"
return"Blake2b(hashLengthInBytes: "+s+")"},
dg(){return new A.eR(this.a)},
$icR:1,
gdS(){return this.a}}
A.hP.prototype={
aQ(){var s=new Uint8Array(32)
A.AM(s,this.a)
return this.aJ(s)},
k(a){return A.bc(this).k(0)+"()"}}
A.ke.prototype={
gO(a){var s=this.gd8(),r=A.bZ(B.dT)
s=s.gb9()
return(11*((r^s.gO(s))>>>0)^this.gdY())>>>0},
I(a,b){var s,r
if(b==null)return!1
if(b instanceof A.ke){s=this.gd8()
r=b.gd8()
s=s.gb9().I(0,r.gb9())
s=s&&this.gdY()===b.gdY()}else s=!1
return s},
k(a){return A.bc(this).k(0)+"("+this.gd8().k(0)+")"}}
A.e7.prototype={
gO(a){var s=A.bZ(B.dT),r=this.gb9()
return(s^r.gO(r))>>>0},
I(a,b){if(b==null)return!1
return b instanceof A.e7&&this.gb9().I(0,b.gb9())},
k(a){var s=this,r=s.gb9()
if(r instanceof A.el)return A.bc(s).k(0)+".sha256()"
if(r instanceof A.cV)return A.bc(s).k(0)+".sha512()"
return A.bc(s).k(0)+"("+r.k(0)+")"}}
A.te.prototype={}
A.el.prototype={
gd4(){return 64},
gO(a){return A.bZ(B.me)},
gdS(){return 32},
I(a,b){if(b==null)return!1
return b instanceof A.el},
dg(){return B.ba}}
A.tf.prototype={}
A.cV.prototype={
gd4(){return 128},
gO(a){return A.bZ(B.mf)},
gdS(){return 64},
I(a,b){if(b==null)return!1
return b instanceof A.cV},
dg(){return B.cm}}
A.tH.prototype={
aQ(){var s=new Uint8Array(32)
A.AM(s,this.a)
return this.aJ(s)},
k(a){return A.bc(this).k(0)+"()"}}
A.mW.prototype={
hk(){var s=this.gca(),r=new Uint8Array(s)
A.AM(r,this.a)
return r}}
A.mY.prototype={}
A.e6.prototype={
gO(a){return B.P.aw(this.a)},
I(a,b){if(b==null)return!1
return b instanceof A.e6&&B.P.bp(this.a,b.a)},
k(a){return"Hash(["+B.i.S(this.a,",")+"])"}}
A.cn.prototype={
cL(){var s=$.jk()
return new A.lM(new A.iK(s))},
k(a){return A.bc(this).k(0)+"()"}}
A.kd.prototype={
n(a,b){t.L.a(b)
this.ac(b,0,b.length,!1)}}
A.lM.prototype={
ac(a,b,c,d){t.L.a(a)
if(this.c)throw A.k(A.ao("Sink is closed"))
if(b!==0||c!==J.aB(a))a=J.zV(a,b,c)
this.b.n(0,a)
if(d)this.c=!0},
ap(){this.c=!0}}
A.nv.prototype={}
A.ny.prototype={
aJ(a){t.L.a(a)
throw A.k(A.ax(u.V))}}
A.fJ.prototype={}
A.i1.prototype={
k(a){return A.bc(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.kV.prototype={
k(a){return A.bc(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.i2.prototype={
cB(a){var s=J.aB(t.L.a(a))
if(s!==32)throw A.k(A.y(s,"length","Algorithm "+this.a+" expects a private key with 32 bytes, but got: "+s+" bytes"))},
d5(a){var s=t.L.a(a).length
if(s!==32)throw A.k(A.y(s,"length","Algorithm "+this.a+" expects a public key with 32 bytes, but got: "+s+" bytes"))},
k(a){return"KeyPairType."+this.a}}
A.cQ.prototype={
gO(a){return B.P.aw(this.a)},
I(a,b){if(b==null)return!1
return b instanceof A.cQ&&B.P.bp(this.a,b.a)},
k(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.i.S(s,",")+"])"}}
A.iu.prototype={
k(a){return A.bc(this).k(0)+": SecretBox has wrong message authentication code (MAC)"}}
A.cR.prototype={
bC(a,b,c){var s=t.L
s.a(b)
return this.mi(s.a(a),b,c)},
hj(a){return this.bC(B.A,B.A,a)},
mi(a,b,c){var s=0,r=A.I(t.sd),q,p=this,o,n
var $async$bC=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:o=$.jk()
n=new Uint8Array(A.aF(c.gaH()))
q=new A.lR(p,new A.bl(new A.bp(n,!0),c.c),b,a,new A.iK(o))
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bC,r)},
k(a){return A.bc(this).k(0)+"()"}}
A.cr.prototype={
n(a,b){t.L.a(b)
this.ac(b,0,b.length,!1)},
ap(){if(this.gc7())return
this.ac(B.A,0,0,!0)}}
A.lR.prototype={
gc7(){return this.f!=null},
geQ(){throw A.k(A.iC(null))},
ac(a,b,c,d){t.L.a(a)
if(this.f!=null)throw A.k(A.ao("Sink is closed"))
if(b!==0||c!==J.aB(a))a=J.zV(a,b,c)
this.e.n(0,a)
if(d)this.ap()},
ap(){var s,r,q,p,o,n=this
if(n.f!=null)return
s=n.b
r=n.a.b1(n.e.hx(),n.d,n.c,s)
q=t.pF.a(new A.uh(s))
p=r.$ti
o=$.ai
r.dv(new A.dQ(new A.am(o,p),8,q,null,p.i("dQ<1,1>")))
n.f=r},
eP(){var s=this.f
if(s==null)throw A.k(A.ao("Sink is not closed"))
return s},
hf(){throw A.k(A.ax(this.k(0)+" does not support macSync()"))}}
A.uh.prototype={
$0(){var s=this.a
s.b.dO()
s.e8()},
$S:22}
A.m6.prototype={}
A.ek.prototype={
gO(a){return(B.P.aw(this.b.a)^B.P.aw(this.c)^B.P.aw(this.a))>>>0},
I(a,b){var s
if(b==null)return!1
if(b instanceof A.ek){s=B.P.bp(this.b.a,b.b.a)
s=s&&B.P.bp(this.c,b.c)&&B.P.bp(this.a,b.a)}else s=!1
return s},
k(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.i.S(this.c,",")+"],\n  mac: "+this.b.k(0)+",\n)"}}
A.fW.prototype={
dO(){},
cF(){return this.b2().mD(new A.tb(),t.L)}}
A.tb.prototype={
$1(a){return t.A0.a(a).gaH()},
$S:143}
A.bl.prototype={
gaH(){var s=this.b
if(s.a==null)throw A.k(A.ao("Secret key has been destroyed: "+this.k(0)))
return s},
gO(a){var s=A.bZ(B.md)
return(s^(this.b.a==null?0:B.P.aw(this.gaH())))>>>0},
I(a,b){if(b==null)return!1
if(this.b.a==null)return!1
return b instanceof A.bl&&B.P.bp(this.gaH(),b.gaH())},
b2(){var s=0,r=A.I(t.A0),q,p=this
var $async$b2=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:q=A.aT(p,t.A0)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$b2,r)},
k(a){return"SecretKeyData(...)"}}
A.bp.prototype={
gq(a){var s=this.a
if(s==null)throw A.k(A.ax("The bytes have been destroyed"))
return J.aB(s)},
sq(a,b){throw A.k(A.ax("The bytes are unmodifiable."))},
h(a,b){var s=this.a
if(s==null)throw A.k(A.ao("The bytes have been destroyed"))
return J.as(s,b)},
j(a,b,c){A.P(c)
throw A.k(A.ax("The bytes are unmodifiable."))},
dO(){var s=this.a
if(s!=null){this.a=null
if(this.b)A.B4(s)}}}
A.fa.prototype={
gO(a){return(B.aB.aw(this.a)^this.b.gO(0))>>>0},
I(a,b){if(b==null)return!1
return b instanceof A.fa&&B.aB.bp(this.a,b.a)&&this.b.I(0,b.b)},
k(a){return"Signature(["+B.i.S(this.a,", ")+"], publicKey: "+this.b.k(0)+")"}}
A.l6.prototype={
aJ(a){t.L.a(a)
throw A.k(A.ax(u.V))}}
A.cW.prototype={
gaH(){var s=this.d
if(s.a==null)throw A.k(A.ao(this.k(0)+" has been destroyed."))
return s},
gO(a){return(this.f.gO(0)^A.bZ(this.b))>>>0},
I(a,b){if(b==null)return!1
return b instanceof A.cW&&this.f.I(0,b.f)&&this.b===b.b},
b2(){var s=0,r=A.I(t.jC),q,p=this
var $async$b2=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.k(A.ao("Private key has been destroyed"))
q=p
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$b2,r)},
dP(){var s=0,r=A.I(t.L),q,p=this
var $async$dP=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.k(A.ao("Private key has been destroyed"))
q=p.gaH()
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$dP,r)},
br(){var s=0,r=A.I(t.qC),q,p=this
var $async$br=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:q=p.f
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$br,r)},
k(a){var s=this.f.k(0)
return"SimpleKeyPairData(..., publicKey: "+s+")"},
$iAl:1}
A.bB.prototype={
gO(a){return(B.aB.aw(this.a)^A.bZ(this.b))>>>0},
I(a,b){if(b==null)return!1
return b instanceof A.bB&&this.b===b.b&&B.aB.bp(this.a,b.a)},
l(a,b){var s,r,q,p=this.a,o=t.qC.a(b).a,n=p.length,m=o.length,l=n<=m?n:m
for(s=0;s<l;++s){if(!(s<n))return A.a(p,s)
r=p[s]
if(!(s<m))return A.a(o,s)
q=B.d.l(r,o[s])
if(q!==0)return q}return B.d.l(n,m)},
k(a){return"SimplePublicKey(["+B.i.S(this.a,",")+"], type: "+this.b.k(0)+")"},
$iaS:1}
A.kM.prototype={
n(a,b){this.a=new A.e6(b.a)},
ap(){},
$ib3:1}
A.oL.prototype={
gd4(){return this.gdT().gkU()},
aw(a){t.L.a(a)
return A.aT(new A.e6(this.gdT().M(a).a),t.yO)},
cL(){var s=new A.kM(),r=this.gdT().cT(s),q=this.gdS()
q=new Uint8Array(q)
return new A.kN(this.gdT(),r,s,q)}}
A.kN.prototype={
gc7(){return this.e},
gq(a){return this.d},
n(a,b){var s=this
t.L.a(b)
if(s.e)throw A.k(A.ao("Already closed"))
s.d=s.d+b.length
s.b.n(0,b)},
ac(a,b,c,d){var s=this
t.L.a(a)
if(s.e)throw A.k(A.ao("Already closed"))
A.bM(b,c,J.aB(a))
s.d=s.d+(c-b)
s.b.ac(a,b,c,d)
if(d)s.ap()},
ap(){var s=this
if(s.e)return
s.e=!0
s.b.ap()
B.i.aY(s.f,0,s.c.a.a)},
cO(){var s=this,r=s.c
r.a=null
s.b=s.a.cT(r)
s.e=!1
s.d=0},
gbs(){return this.f}}
A.jQ.prototype={
bn(a,b,c){return this.lv(a,t.L.a(b),c)},
lv(a,b,c){var s=0,r=A.I(t.L),q,p=this,o,n
var $async$bn=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.q(c.b2(),$async$bn)
case 3:q=p.lw(o,n,e)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bn,r)},
lw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(b)
s=c.gaH().gq(0)
r=this.d
if(s!==r)throw A.k(A.y(c,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
q=A.Du(c)
p=new Uint32Array(4)
A.ma(p,0,p,0,q)
p[0]=A.bP(p[0])
p[1]=A.bP(p[1])
p[2]=A.bP(p[2])
p[3]=A.bP(p[3])
o=A.BD(p,a.c)
n=J.ms(B.i.ga6(o),0,null)
m=a.a
l=B.P.bp(B.cl.fi(m,b,q,p,n).a,a.b.a)
if(!l)throw A.k(A.Ck())
A.wj(o,1)
l=m.length
k=B.d.u(l+31,16)*4
j=new Uint32Array(k)
for(i=0;i<k;i+=4){A.ma(j,i,n,0,q)
A.wj(o,1)}h=J.bn(B.D.ga6(j),j.byteOffset,l)
for(k=h.length,g=h.$flags|0,i=0;i<l;++i){if(!(i<k))return A.a(h,i)
f=h[i]
e=m[i]
g&2&&A.B(h)
h[i]=f^e}return h},
bA(a,b,c){var s=t.L
return this.lH(s.a(a),s.a(b),c)},
lH(a,b,c){var s=0,r=A.I(t.yX),q,p=this,o,n
var $async$bA=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.q(c.b2(),$async$bA)
case 3:q=p.lI(o,n,null,e)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bA,r)},
lI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(b)
s=d.gaH().gq(0)
r=this.d
if(s!==r)throw A.k(A.y(d,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
c=this.hk()
q=A.Du(d)
p=new Uint32Array(4)
A.ma(p,0,p,0,q)
p[0]=A.bP(p[0])
p[1]=A.bP(p[1])
p[2]=A.bP(p[2])
p[3]=A.bP(p[3])
o=A.BD(p,c)
n=J.ms(B.i.ga6(o),0,null)
m=new Uint32Array(A.aF(n))
A.wj(o,1)
e=a.length
l=(B.d.u(e+15,16)+1)*4
k=new Uint32Array(l)
for(j=0;j<l;j+=4){A.ma(k,j,n,0,q)
A.wj(o,1)}i=J.bn(B.D.ga6(k),k.byteOffset,e)
for(l=i.length,h=i.$flags|0,j=0;j<e;++j){if(!(j<l))return A.a(i,j)
g=i[j]
f=a[j]
h&2&&A.B(i)
i[j]=g^f}return new A.ek(i,B.cl.fi(i,b,q,p,m),c)},
gca(){return this.c},
gcf(){return this.d}}
A.jV.prototype={
b1(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
s.a(b)
throw A.k(A.ax("AES-GCM MAC algorithm can NOT be called separately."))},
eT(a,b,c){var s=t.L
s.a(b)
s.a(a)
throw A.k(A.iC(null))},
k(a){return"DartGcm()"},
fi(a,b,c,d,e){var s,r,q,p,o,n=4294967296,m=t.L
m.a(a)
m.a(b)
s=new Uint32Array(4)
A.jR(s,d,b)
A.jR(s,d,a)
r=8*b.length
q=8*a.length
p=new DataView(new ArrayBuffer(16))
p.setUint32(0,B.d.u(r,n),!1)
p.setUint32(4,B.d.P(r,n),!1)
p.setUint32(8,B.d.u(q,n),!1)
p.setUint32(12,B.d.P(q,n),!1)
A.jR(s,d,J.bn(B.ay.ga6(p),0,null))
o=new Uint32Array(4)
A.ma(o,0,e,0,c)
s[0]=(s[0]^o[0])>>>0
s[1]=(s[1]^o[1])>>>0
s[2]=(s[2]^o[2])>>>0
s[3]=(s[3]^o[3])>>>0
return new A.cQ(J.bn(B.D.ga6(s),0,null))}}
A.ly.prototype={}
A.lB.prototype={}
A.mZ.prototype={}
A.hG.prototype={
gO(a){return(A.hx.prototype.gO.call(this,0)^B.f_.gO(null))>>>0},
I(a,b){var s
if(b==null)return!1
if(b instanceof A.hG)s=this.i1(0,b)
else s=!1
return s},
d6(a,b){var s=B.A,r=B.A
return this.ly(t.L.a(a),b)},
ly(a3,a4){var s=0,r=A.I(t.g),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$d6=A.J(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:j=B.A
i=B.A
h=m.b
g=m.a
f=m.c
e=m.d
d=new Uint32Array(256)
c=new Uint32Array(256)
b=new A.n_(g,h,f,e,B.bc,19,null,d,c,new Uint32Array(256))
b.ih(null,e,f,null,h,null,B.bc,g,19)
l=b
p=3
a=l
a0=j
a1=a3
a2=i
s=7
return A.q(a4.cF(),$async$d6)
case 7:s=6
return A.q(a.dN(a0,a1,a2,a6),$async$d6)
case 6:k=a6
q=new A.bl(new A.bp(k,!1),null)
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.e2()
s=n.pop()
break
case 5:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$d6,r)}}
A.fx.prototype={
T(){return"DartArgon2Mode."+this.b}}
A.jS.prototype={
gd3(){var s,r=this,q=r.at
if(q===$){s=new A.n1(r).$0()
r.at!==$&&A.ht()
r.at=s
q=s}return q},
ih(a,b,c,d,e,f,g,h,i){var s,r,q=this,p=null
if($.eH()!==B.a1)A.j(A.iC("The platform should be little-endian."))
s=q.a
if(s<1)throw A.k(A.y(s,"parallelism",p))
r=q.b
if(r<8*s)throw A.k(A.y(r,"memory",p))
s=q.d
if(s<4)throw A.k(A.y(s,"hashLength",p))
s=q.c
if(s<1)throw A.k(A.y(s,"iterations",p))},
dN(a,b,c,d){var s=t.L
s.a(d)
s.a(b)
s.a(c)
return this.lA(s.a(a),b,c,d)},
lA(a,b,c,d){var s=0,r=A.I(t.L),q,p=this,o,n,m,l,k
var $async$dN=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:k=t.L
k.a(a)
k.a(b)
k.a(c)
k.a(d)
k=J.aB(d)
o=new DataView(new ArrayBuffer(40+k+b.length))
o.setUint32(0,p.a,!0)
o.setUint32(4,p.d,!0)
o.setUint32(8,p.b,!0)
o.setUint32(12,p.c,!0)
o.setUint32(16,p.f,!0)
o.setUint32(20,p.e.a,!0)
A.n0(o,A.n0(o,A.n0(o,A.n0(o,24,d),b),c),a)
n=J.bn(B.ay.ga6(o),o.byteOffset,o.byteLength)
m=B.cr.m_(n).a
B.i.aI(n,0,n.length,0)
s=3
return A.q(p.d7(m),$async$dN)
case 3:l=f
B.i.aI(m,0,m.length,0)
q=l
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$dN,r)},
d7(a){return this.lB(a)},
lB(a){var s=0,r=A.I(t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$d7=A.J(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=m.as
h=new A.cC(new A.am($.ai,t.hR),t.th)
g=h.a
m.as=g
s=i!=null?3:4
break
case 3:s=5
return A.q(i,$async$d7)
case 5:case 4:m.f7()
m.ay=!0
p=6
m.m2(a)
s=9
return A.q(m.dW(),$async$d7)
case 9:l=m.jt()
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
h.l2()
s=n.pop()
break
case 8:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$d7,r)},
bH(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=4294967296
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
a2.$flags&2&&A.B(a2)
a2[a3]=s
a2[r]=q
a2[a4]=(d<<1|c>>>31)>>>0
a2[o]=(c<<1|d>>>31)>>>0
a2[a5]=m
a2[l]=k
a2[a6]=j
a2[i]=h},
bI(a,b,c){var s,r,q=this,p=q.ax
if(p==null)p=q.ax=q.iA()
s=B.d.aF(q.gd3(),q.a)
r=b*s+c*B.d.u(s,4)+a
if(!(r>=0&&r<p.length))return A.a(p,r)
return p[r]},
m2(a){var s,r,q,p,o,n,m,l=this
if(a.length!==64)throw A.k(A.aX(null,null))
s=l.bI(3,0,0)
r=J.bn(B.D.ga6(s),s.byteOffset,72)
B.i.aY(r,0,a)
q=J.jo(B.i.ga6(r),r.byteOffset,r.byteLength)
for(p=l.a,o=q.$flags|0,n=0;n<p;++n){o&2&&A.B(q,11)
q.setUint32(68,n,!0)
q.setUint32(64,0,!0)
m=l.bI(0,n,0)
l.f4(r,J.bn(B.D.ga6(m),m.byteOffset,m.byteLength))
q.setUint32(64,1,!0)
m=l.bI(1,n,0)
l.f4(r,J.bn(B.D.ga6(m),m.byteOffset,m.byteLength))}B.i.aI(r,0,r.length,0)},
dW(){var s=0,r=A.I(t.H),q=this,p,o,n,m,l
var $async$dW=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.c,o=q.a,n=0
case 2:if(!(n<p)){s=4
break}m=0
case 5:if(!(m<4)){s=7
break}l=0
case 8:if(!(l<o)){s=10
break}s=11
return A.q(q.dZ(n,l,m),$async$dW)
case 11:case 9:++l
s=8
break
case 10:case 6:++m
s=5
break
case 7:case 3:++n
s=2
break
case 4:return A.G(null,r)}})
return A.H($async$dW,r)},
hp(a,b,c,d,e,f,g,h,i){var s=this,r=b+2,q=c+2,p=d+2,o=e+2,n=f+2,m=g+2,l=h+2,k=i+2
s.bH(a,b,d,f,h)
s.bH(a,r,p,n,l)
s.bH(a,c,e,g,i)
s.bH(a,q,o,m,k)
s.bH(a,b,p,g,k)
s.bH(a,r,e,m,h)
s.bH(a,c,o,f,l)
s.bH(a,q,d,n,i)},
eW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this.Q
for(s=a.length,r=b.length,q=h.$flags|0,p=0;p<256;++p){if(!(p<s))return A.a(a,p)
o=a[p]
if(!(p<r))return A.a(b,p)
n=b[p]
q&2&&A.B(h)
if(!(p<256))return A.a(h,p)
h[p]=(o^n)>>>0}for(p=0;p<8;++p){m=p*32
this.hp(h,m,m+4,m+8,m+12,m+16,m+20,m+24,m+28)}for(p=0;p<8;++p){l=p*4
this.hp(h,l,32+l,64+l,96+l,128+l,160+l,192+l,224+l)}if(c)for(q=d.length,o=d.$flags|0,p=0;p<256;++p){if(!(p<q))return A.a(d,p)
n=d[p]
k=h[p]
if(!(p<s))return A.a(a,p)
j=a[p]
if(!(p<r))return A.a(b,p)
i=b[p]
o&2&&A.B(d)
d[p]=(n^k^j^i)>>>0}else for(q=d.$flags|0,p=0;p<256;++p){o=h[p]
if(!(p<s))return A.a(a,p)
n=a[p]
if(!(p<r))return A.a(b,p)
k=b[p]
q&2&&A.B(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o^n^k)>>>0}},
dZ(c4,c5,c6){var s=0,r=A.I(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$dZ=A.J(function(c7,c8){if(c7===1)return A.F(c8,r)
for(;;)switch(s){case 0:b8=p.gd3()
b9=p.a
c0=B.d.aF(b8,b9)
c1=B.d.u(c0,4)
c2=c4===0
c3=c2&&c6===0?2:0
o=c4>0,n=p.e,m=t.z,l=c6-1,k=c6<2,j=p.y,i=c6===0,h=p.z,g=h.$flags|0,f=p.c,e=n.a,d=!i,c=(c6+1)%4*c1,b=3*c1,a=n===B.bc,a0=b-1,a1=c6*c1,a2=a1-1,a3=c3
case 3:if(!(a3<c1)){s=5
break}s=B.d.P(a3,500)===0&&a3>0?6:7
break
case 6:s=8
return A.q(A.Gj(B.eA,m),$async$dZ)
case 8:case 7:a4=a3===0
a5=a4?B.d.P(l,4):c6
a6=a3-1
a7=p.bI(B.d.P(a6,c1),c5,a5)
if(a)a8=k&&c2?B.cq:B.ep
else a8=n
if(a8===B.cq){a9=B.d.P(a3,128)
if(a9!==0)a5=a3===2&&i&&c2
else a5=!0
if(a5){g&2&&A.B(h)
h[0]=c4
h[2]=c5
h[4]=c6
h[6]=b8
h[8]=f
h[10]=e
h[12]=1+B.d.u(a3,128)
a5=$.Ep()
p.eW(h,a5,!1,j)
p.eW(j,a5,!1,j)}a5=2*a9
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
break}b1=a7[1]}b2=B.d.P(b1,b9)
if(c2&&i)b2=c5
if(c2){if(!d||b2===c5)b3=a1+a3-1
else b3=a4?a2:a1
b4=0}else{if(b2===c5)b3=b+a6
else b3=a4?a0:b
b4=c}a4=b0&65535
a5=b0>>>16
b5=a5*a5+B.d.u(a4*b0+((b0&4294901760)>>>0)*a4,4294967296)>>>0
b6=B.d.u((b3&65535)*b5+((b3&4294901760)>>>0)*(b5&65535),4294967296)
b7=B.d.P(b4+b3-1-B.d.P(B.d.al(b3,16)*(b5>>>16)+b6>>>0,b3),c0)
b4=B.d.aF(b7,c1)
p.eW(a7,p.bI(B.d.P(b7,c1),b2,b4),o,p.bI(a3,c5,c6))
case 4:++a3
s=3
break
case 5:case 1:return A.G(q,r)}})
return A.H($async$dZ,r)},
e2(){if(this.ay)return
this.ax=null},
f4(a,b){var s,r,q=b.length,p=B.cr.ht(Math.min(q,64)),o=A.mF(p.a),n=t.L,m=n.a(A.d([q&255,q>>>8&255,q>>>16&255,q>>>24&255],t.t))
o.ac(m,0,m.length,!1)
n.a(a)
o.ac(a,0,a.length,!1)
o.ap()
if(q<=64){B.i.aY(b,0,o.gbs())
return}m=o.gbs()
new Uint8Array(A.aF(m))
B.i.aY(b,0,A.c1(m,0,A.dZ(32,"count",t.S),A.aO(m).i("O.E")))
s=q-32
a=new Uint8Array(A.aF(m))
o.cY(null)
for(r=32;s>64;){n.a(a)
o.ac(a,0,a.length,!1)
o.ap()
B.i.aY(b,r,m)
r+=32
s-=32
B.i.aY(a,0,m)
o.cY(null)}if(B.d.P(q,64)!==0)o=A.mF(p.ht(s).a)
n.a(a)
o.ac(a,0,a.length,!1)
o.ap()
B.i.aY(b,r,o.gbs())},
iA(){var s,r,q=this.f7(),p=this.gd3(),o=J.BR(p,t.Dd)
for(s=J.fp(q),r=0;r<p;++r)o[r]=s.eF(q,1024*r,256)
return o},
jt(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=h-1
h=B.d.u(B.d.aF(i.gd3(),h),4)-1
s=i.bI(h,g,3)
for(r=s.length,q=0;q<g;++q){p=i.bI(h,q,3)
for(o=p.length,n=s.$flags|0,m=0;m<256;++m){if(!(m<r))return A.a(s,m)
l=s[m]
if(!(m<o))return A.a(p,m)
k=p[m]
n&2&&A.B(s)
s[m]=(l^k)>>>0}}j=new Uint8Array(i.d)
i.f4(J.bn(B.D.ga6(s),s.byteOffset,s.byteLength),j)
return j}}
A.n1.prototype={
$0(){var s=this.a,r=4*s.a
return r*B.d.aF(s.b,r)},
$S:68}
A.n_.prototype={
f7(){var s,r=this,q=r.ch
if(q!=null)return q
r.e2()
s=r.gd3()
return r.ch=B.D.ga6(new Uint32Array(256*s))},
e2(){if(this.ay)return
this.ch=null
this.i2()}}
A.eR.prototype={
dg(){return this},
ht(a){if(a===this.a)return this
return new A.eR(a)},
eT(a,b,c){var s,r=t.L
r.a(b)
r.a(a)
r=A.mF(this.a)
s=c.gaH()
if(s.gq(0)>64)A.j(A.y(r.w,"secretKey",null))
r.cY(s)
return r},
cL(){return A.mF(this.a)}}
A.lz.prototype={}
A.lA.prototype={}
A.jx.prototype={
gbs(){var s,r=this,q=r.b
if(q===$){s=J.bn(B.D.ga6(r.a),0,r.w)
r.b!==$&&A.ht()
r.b=s
q=s}return q},
gfh(){var s,r=this,q=r.d
if(q===$){s=J.bn(B.D.ga6(r.c),0,null)
r.d!==$&&A.ht()
r.d=s
q=s}return q},
gc7(){return this.f},
gq(a){return this.e},
geQ(){return this.gbs()},
ac(a,b,c,d){var s,r,q,p,o,n,m=this
t.L.a(a)
if(m.f)throw A.k(A.ao("Already closed"))
s=m.gfh()
r=m.e
for(q=J.ap(a),p=b;p<c;++p){o=B.d.P(r,128)
if(o===0&&r>0){m.e=r
m.fq(!1)}n=q.h(a,p)
s.$flags&2&&A.B(s)
if(!(o<s.length))return A.a(s,o)
s[o]=n;++r}m.e=r
if(d)m.ap()},
ap(){var s,r,q,p=this
if(p.f)return
p.f=!0
s=p.e
if(s===0||B.d.P(s,128)!==0)for(r=B.d.P(s,128);r<128;++r){q=p.gfh()
q.$flags&2&&A.B(q)
if(!(r<q.length))return A.a(q,r)
q[r]=0}p.fq(!0)},
cO(){this.cY(null)},
fq(a){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.r,h=k.c
for(s=i.$flags|0,r=0;r<16;++r){q=j[r]
s&2&&A.B(i)
if(!(r<32))return A.a(i,r)
i[r]=q}for(r=0;r<16;++r){q=16+r
p=B.dp[r]
s&2&&A.B(i)
if(!(q<32))return A.a(i,q)
i[q]=p}o=k.e
q=i[24]
s&2&&A.B(i)
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
if(!(m<192))return A.a(B.m,m)
s=B.m[m]
q=m+1
if(!(q<192))return A.a(B.m,q)
A.eN(i,0,8,16,24,h,s,B.m[q])
q=m+2
if(!(q<192))return A.a(B.m,q)
q=B.m[q]
s=m+3
if(!(s<192))return A.a(B.m,s)
A.eN(i,2,10,18,26,h,q,B.m[s])
s=m+4
if(!(s<192))return A.a(B.m,s)
s=B.m[s]
q=m+5
if(!(q<192))return A.a(B.m,q)
A.eN(i,4,12,20,28,h,s,B.m[q])
q=m+6
if(!(q<192))return A.a(B.m,q)
q=B.m[q]
s=m+7
if(!(s<192))return A.a(B.m,s)
A.eN(i,6,14,22,30,h,q,B.m[s])
s=m+8
if(!(s<192))return A.a(B.m,s)
s=B.m[s]
q=m+9
if(!(q<192))return A.a(B.m,q)
A.eN(i,0,10,20,30,h,s,B.m[q])
q=m+10
if(!(q<192))return A.a(B.m,q)
q=B.m[q]
s=m+11
if(!(s<192))return A.a(B.m,s)
A.eN(i,2,12,22,24,h,q,B.m[s])
s=m+12
if(!(s<192))return A.a(B.m,s)
s=B.m[s]
q=m+13
if(!(q<192))return A.a(B.m,q)
A.eN(i,4,14,16,26,h,s,B.m[q])
q=m+14
if(!(q<192))return A.a(B.m,q)
q=B.m[q]
s=m+15
if(!(s<192))return A.a(B.m,s)
A.eN(i,6,8,18,28,h,q,B.m[s])}for(s=j.$flags|0,r=0;r<16;++r){q=j[r]
p=i[r]
l=i[16+r]
s&2&&A.B(j)
if(!(r<16))return A.a(j,r)
j[r]=(q^p^l)>>>0}},
cY(a){var s,r,q,p,o,n=this
t.ks.a(a)
n.f=!1
n.e=0
B.D.aI(n.c,0,32,0)
B.D.aI(n.r,0,32,0)
s=n.a
B.D.aY(s,0,B.dp)
r=s[0]
q=a==null
p=q?0:a.gq(0)<<8
s.$flags&2&&A.B(s)
s[0]=(r^16842752^p^n.w)>>>0
if(!q){o=a.gq(0)
if(o>64)throw A.k(A.aX(null,null))
r=t.L
r.a(a)
n.ac(a,0,a.gq(0),!1)
q=B.d.P(o,128)
r=r.a(new Uint8Array(128-q))
n.ac(r,0,r.length,!1)}},
$icr:1}
A.lt.prototype={}
A.hH.prototype={
eD(a,b){if($.eH()!==B.a1)A.j(A.ao("BigEndian systems are unsupported"))
return new A.jQ(a,b,this.a)},
cE(){return A.BE(this.a)},
cI(a,b){return new A.n3(a,b)},
cJ(a){if(a instanceof A.hL)return B.eq
return new A.hJ(a)},
cg(){return B.ba},
e7(){return B.cm},
di(){return new A.hM(this.a)}}
A.hI.prototype={
m_(a){var s
t.L.a(a)
s=this.cL()
s.ac(a,0,a.length,!0)
if(!s.gc7())A.j(A.ao("Not closed"))
return new A.e6(new Uint8Array(A.aF(s.gbs())))}}
A.eS.prototype={
n(a,b){t.L.a(b)
this.ac(b,0,J.aB(b),!1)},
ap(){this.ac(B.A,0,0,!0)}}
A.n4.prototype={
b0(a,b){var s=0,r=A.I(t.g),q,p,o,n,m,l
var $async$b0=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:s=3
return A.q(a.b2(),$async$b0)
case 3:m=d
l=m.b
l=l!==B.S
if(l)A.j(A.y(m,"keyPairData",null))
l=b.b!==B.S
if(l)A.j(A.y(b,"remotePublicKey",null))
p=A.A0(m.gaH())
o=b.a
B.S.cB(p)
B.S.d5(o)
n=new Uint8Array(32)
A.BH(n,p,new Uint8Array(A.aF(o)))
q=new A.bl(new A.bp(n,!1),null)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$b0,r)}}
A.hK.prototype={
b1(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.l_(a,s.a(b),c,d)},
fZ(a,b,c){return this.b1(a,B.A,b,c)},
l_(a,b,c,d){var s=0,r=A.I(t.Ep),q,p=this,o
var $async$b1=A.J(function(e,f){if(e===1)return A.F(f,r)
for(;;)switch(s){case 0:s=3
return A.q(p.bC(b,c,d),$async$b1)
case 3:o=f
o.ac(a,0,J.aB(a),!0)
s=4
return A.q(o.eP(),$async$b1)
case 4:q=f
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$b1,r)},
bC(a,b,c){var s=t.L
s.a(b)
return this.mh(s.a(a),b,c)},
hj(a){return this.bC(B.A,B.A,a)},
mh(a,b,c){var s=0,r=A.I(t.kk),q,p=this,o,n
var $async$bC=A.J(function(d,e){if(d===1)return A.F(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.q(c.b2(),$async$bC)
case 3:q=p.eT(o,n,e)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bC,r)}}
A.cJ.prototype={
eP(){return A.aT(this.hf(),t.Ep)},
hf(){if(!this.gc7())throw A.k(A.ao("Sink is not closed"))
return new A.cQ(new Uint8Array(A.aF(this.geQ())))},
$ibd:1,
$ib3:1,
$icr:1}
A.jT.prototype={
aJ(a){return this.mf(t.L.a(a))},
mf(a){var s=0,r=A.I(t.gZ),q,p=this,o,n,m
var $async$aJ=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:if(J.aB(a)!==32)throw A.k(A.aX("Seed must have 32 bytes",null))
o=A
n=A
m=new A.bp(new Uint8Array(A.aF(a)),!1)
s=3
return A.q(p.dC(a),$async$aJ)
case 3:q=o.aT(new n.cW(m,c,B.R),t.jC)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$aJ,r)},
aT(a,b,c){return this.hU(0,t.L.a(b),c)},
hU(a,a0,a1){var s=0,r=A.I(t.bu),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$aT=A.J(function(a2,a3){if(a2===1)return A.F(a3,r)
for(;;)switch(s){case 0:c=t.jC
s=3
return A.q(a1.b2(),$async$aT)
case 3:d=c.a(a3).gaH()
B.R.cB(d)
o=p.b
s=4
return A.q(o.aw(d),$async$aT)
case 4:n=a3.a
m=B.i.aE(n,0,32)
A.BG(m)
l=new Int32Array(16)
l=new A.aD(l)
l.dn(new Uint8Array(A.aF(m)))
k=$.zQ()
j=A.A_(A.jU(l,k))
B.R.d5(j)
l=t.uw
i=new A.kY()
h=t.L
c=A
b=h
s=5
return A.q(o.aw(A.zY(A.d([B.i.ds(n,32),a0],l))),$async$aT)
case 5:n=c.mc(b.a(a3.a))
g=$.Ba()
i.a=n.P(0,g)
f=A.A_(A.jU(i.hA(),k))
c=A
b=h
s=6
return A.q(o.aw(A.zY(A.d([f,j,a0],l))),$async$aT)
case 6:h=c.mc(b.a(a3.a)).P(0,g).a4(0,A.mc(h.a(m)).P(0,g)).P(0,g)
l=i.a
l.toString
g=h.D(0,l).P(0,g)
e=A.Jo(g,new Uint8Array(32))
o=A.E(f,t.S)
B.a.a1(o,e)
q=new A.fa(new Uint8Array(A.aF(o)),new A.bB(j,B.R))
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$aT,r)},
bG(a,b){return this.mM(t.L.a(a),b)},
mM(a,b){var s=0,r=A.I(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$bG=A.J(function(a0,a1){if(a0===1)return A.F(a1,r)
for(;;)switch(s){case 0:g=b.b.a
f=b.a
B.R.d5(g)
o=f.length
if(o!==64)A.j(A.ao("Ed25519 signature must be 64 bytes (got "+o+" bytes)"))
n=A.BF(g)
if(n==null){q=!1
s=1
break}m=B.i.aE(f,0,32)
l=A.BF(m)
if(l==null){q=!1
s=1
break}k=A.mc(B.i.ds(f,32))
o=$.Ba()
if(k.l(0,o)>=0){q=!1
s=1
break}j=new A.kY()
e=j
d=A
c=t.L
s=3
return A.q(p.b.aw(A.zY(A.d([m,g,a],t.uw))),$async$bG)
case 3:e.a=d.mc(c.a(a1.a)).P(0,o)
o=new Int32Array(16)
o=new A.aD(o)
o.bX(k)
i=A.jU(o,$.zQ())
h=A.k2()
A.zZ(h,A.jU(j.hA(),n),l,null)
q=i.lK(h)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bG,r)},
dC(a){return this.jW(t.L.a(a))},
jW(a){var s=0,r=A.I(t.qC),q,p=this,o,n,m,l,k
var $async$dC=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:m=Uint8Array
l=A
k=B.i
s=3
return A.q(p.b.aw(a),$async$dC)
case 3:n=new m(l.aF(k.aE(c.a,0,32)))
A.BG(n)
o=new Int32Array(16)
o=new A.aD(o)
o.dn(n)
q=new A.bB(A.A_(A.jU(o,$.zQ())),B.R)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$dC,r)}}
A.n2.prototype={
$2(a,b){return A.P(a)+J.aB(t.L.a(b))},
$S:178}
A.de.prototype={
lK(a){var s,r,q,p,o=new Int32Array(16),n=new A.aD(o)
o=new Int32Array(16)
s=new A.aD(o)
o=this.a
r=a.c
n.ah(o,r)
q=this.c
p=a.a
s.ah(q,p)
n.bi(n,s)
if(!n.gdc())return!1
n.ah(o,r)
s.ah(q,p)
n.bi(n,s)
return n.gdc()}}
A.nf.prototype={
$0(){var s,r,q=null,p=new Int32Array(16),o=new A.aD(p)
o.bX(A.tR("46316835694926478169428394003475163141307993866256225615783033603165251855960",q))
p=new Int32Array(16)
s=new A.aD(p)
s.bX(A.tR("15112221349535400772501151409588531511454012693041857206046113283949847762202",q))
p=new Int32Array(16)
r=new A.aD(p)
r.ah(s,o)
return new A.de(s,o,$.B9(),r)},
$S:201}
A.aD.prototype={
gdc(){return B.aZ.bq(this.a,new A.t_())},
d1(a,b,c){var s,r,q,p,o,n,m=b.a,l=c.a,k=this.a
for(s=m.length,r=l.length,q=k.$flags|0,p=0,o=0;o<16;++o){if(!(o<s))return A.a(m,o)
n=m[o]
if(!(o<r))return A.a(l,o)
p=n+l[o]+B.d.u(p,65536)
q&2&&A.B(k)
if(!(o<k.length))return A.a(k,o)
k[o]=p&65535}if(15>=k.length)return A.a(k,15)
s=k[15]
r=B.d.u(p,65536)
q&2&&A.B(k)
k[15]=s+r*65536
this.en()},
hd(a){var s,r,q,p,o,n=this.a,m=a.a
for(s=n.length,r=m.length,q=15;q>=0;--q){if(!(q<s))return A.a(n,q)
p=n[q]
if(!(q<r))return A.a(m,q)
o=m[q]
if(p<o)return!1
if(p>o)return!0}return!0},
ah(a,b){A.c3(this.a,a.a,b.a)
this.en()},
hn(a){this.bX(A.tR(a,null))},
eV(a,b){this.bX(a.az().mc(0,b.az(),$.EB()))},
bX(a){var s,r,q=this.a
if(a.a)throw A.k(A.aX("Negative",null))
for(s=0;s<16;++s){r=$.Fr().dj(0,a).aD(0)
q.$flags&2&&A.B(q)
if(!(s<q.length))return A.a(q,s)
q[s]=r
a=a.bY(0,16)}},
dn(a){var s,r,q=J.jo(B.i.ga6(a),a.byteOffset,32),p=this.a
for(s=0;s<16;++s){r=q.getUint16(2*s,!0)
p.$flags&2&&A.B(p)
if(!(s<p.length))return A.a(p,s)
p[s]=r}},
bi(a,b){var s,r,q,p,o,n,m,l,k=a.a,j=b.a,i=this.a,h=$.mp().a
for(s=h.length,r=k.length,q=j.length,p=i.$flags|0,o=0,n=0;n<16;++n){if(!(n<s))return A.a(h,n)
m=h[n]
if(!(n<r))return A.a(k,n)
l=k[n]
if(!(n<q))return A.a(j,n)
o=m+m+l-j[n]+B.d.al(o,16)
p&2&&A.B(i)
if(!(n<i.length))return A.a(i,n)
i[n]=o&65535}if(15>=i.length)return A.a(i,15)
s=i[15]
r=B.d.al(o,16)
p&2&&A.B(i)
i[15]=(s|r<<16)>>>0
this.en()},
az(){var s,r,q,p="Invalid integer: ",o=this.a,n=$.bj()
for(s=o.length,r=0;r<16;++r){if(!(r<s))return A.a(o,r)
q=o[r]
if(q<0)throw A.k(A.ao(p+A.i(o)))
if(q>=65536)throw A.k(A.ao(p+A.i(o)))
n=n.hL(0,A.aR(q).aZ(0,r*16))}return n},
hy(a){var s,r,q,p,o=this.a,n=J.jo(B.i.ga6(a),a.byteOffset,32)
for(s=o.length,r=n.$flags|0,q=0;q<16;++q){if(!(q<s))return A.a(o,q)
p=o[q]
r&2&&A.B(n,10)
n.setUint16(2*q,p&65535,!0)}return a},
k(a){return"0x"+this.az().bE(0,16)},
en(){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=s.$flags|0;this.hd($.mp());){if(0>=r)return A.a(s,0)
p=s[0]-65517
q&2&&A.B(s)
s[0]=p&65535
for(o=s.$flags|0,n=1;n<15;++n,p=m){if(!(n<r))return A.a(s,n)
m=s[n]-65535-(B.d.al(p,16)&1)
o&2&&A.B(s)
s[n]=m&65535}if(15>=r)return A.a(s,15)
l=s[15]
k=B.d.al(p,16)
o&2&&A.B(s)
s[15]=l-32767-(k&1)}}}
A.t_.prototype={
$1(a){return A.P(a)===0},
$S:225}
A.kY.prototype={
hA(){var s,r=new Int32Array(16)
r=new A.aD(r)
s=this.a
s.toString
r.bX(s)
return r},
k(a){return"0x"+this.a.bE(0,16)}}
A.n3.prototype={
aW(a,b,c){var s=t.L
s.a(b)
return this.lz(s.a(a),b,c)},
lz(a3,a4,a5){var s=0,r=A.I(t.A0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aW=A.J(function(a6,a7){if(a6===1)return A.F(a7,r)
for(;;)switch(s){case 0:f=p.a
a0=A
a1=A
a2=f
s=4
return A.q(a5.cF(),$async$aW)
case 4:s=3
return A.q(a2.fZ(a7,a4,new A.bl(new A.bp(a4,!1),null)),$async$aW)
case 3:e=new a0.bl(new a1.bp(a7.a,!1),null)
d=f.gb9().gdS()
c=p.b
b=B.d.aF(c,d)
a=new Uint8Array(c)
o=t.t,n=J.ap(a3),m=B.A,l=0
case 5:if(!(l<=b)){s=7
break}s=8
return A.q(f.hj(e),$async$aW)
case 8:k=a7
k.n(0,m)
if(n.gam(a3))k.n(0,a3)
k.n(0,A.d([1+l&255],o))
k.ap()
s=9
return A.q(k.eP(),$async$aW)
case 9:m=a7.a
j=l*d
if(j+m.length<=c)B.i.aY(a,j,m)
else{i=c-j
h=A.aO(m)
g=new A.fd(m,0,i,h.i("fd<O.E>"))
g.ij(m,0,i,h.i("O.E"))
B.i.aY(a,j,g)}case 6:++l
s=5
break
case 7:q=new A.bl(new A.bp(a,!1),null)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$aW,r)},
gd8(){return this.a},
gdY(){return this.b}}
A.hJ.prototype={
eT(a,b,c){var s,r,q,p,o,n,m,l,k=t.L
k.a(b)
k.a(a)
s=this.a
r=s.gd4()
q=new Uint8Array(r)
p=s.dg().cL()
o=s.dg().cL()
k.a(B.A)
if(B.A.length!==0)A.j(A.y(B.A,"aad","AAD is not supported by HMAC"))
n=c.gaH()
m=s.gd4()
p.cO()
l=n.gq(0)>m
if(l){p.ac(n,0,n.gq(0),!0)
n=new Uint8Array(A.aF(p.gbs()))
p.cO()}A.CH(q,n,54)
p.ac(q,0,r,!1)
B.i.aI(q,0,r,0)
o.cO()
A.CH(q,n,92)
o.ac(q,0,r,!1)
B.i.aI(q,0,r,0)
if(l)A.B4(n)
return new A.lC(s,q,p,o)},
gb9(){return this.a}}
A.lC.prototype={
gc7(){return this.e},
geQ(){return this.d.gbs()},
ac(a,b,c,d){var s,r,q=this
t.L.a(a)
if(q.e)throw A.k(A.ao("Sink is closed"))
s=q.c
s.ac(a,b,c,d)
if(d){q.e=!0
r=s.gbs()
q.d.ac(r,0,r.length,!0)}}}
A.lD.prototype={}
A.m5.prototype={}
A.hL.prototype={
cL(){var s=new Uint32Array(8),r=J.bn(B.D.ga6(s),0,32),q=new DataView(new ArrayBuffer(64))
q=new A.lE(B.jd,q,new Uint32Array(64),s,r)
q.cO()
return q}}
A.lE.prototype={
gc7(){return this.f},
gq(a){return this.w},
n(a,b){t.L.a(b)
this.ac(b,0,b.length,!1)},
ac(a,b,c,d){var s,r,q,p,o,n,m=this,l=4294967296
t.L.a(a)
if(m.f)throw A.k(A.ao("The sink has been closed"))
m.iz(a,b,c)
if(d){m.f=!0
s=m.b
r=m.r
s.$flags&2&&A.B(s,9)
s.setUint8(r,128);++r
if(r>56){for(;r<64;++r)s.setUint8(r,0)
m.es()
r=0}for(;r<56;++r)s.setUint8(r,0)
q=8*m.w
s.setUint32(56,B.d.u(q,l),!1)
s.setUint32(60,B.d.P(q,l),!1)
m.es()
p=m.e
if($.eH()!==B.au)for(o=p.$flags|0,r=0;r<8;++r){n=p[r]
o&2&&A.B(p)
if(!(r<8))return A.a(p,r)
p[r]=((n&255)<<24|n<<8&16711680|n>>>8&65280|n>>>24)>>>0}}},
ap(){if(!this.f)this.ac(B.A,0,0,!0)},
cO(){var s,r,q,p,o=this,n=o.w=o.r=0
o.f=!1
s=o.e
r=o.a
for(q=s.$flags|0;n<8;++n){p=r[n]
q&2&&A.B(s)
if(!(n<8))return A.a(s,n)
s[n]=p}},
iz(a,b,c){var s,r,q,p,o,n,m=this
t.L.a(a)
s=J.ap(a)
A.bM(b,c,s.gq(a))
r=c-b
if(r===0)return
m.w+=r
q=m.b
p=m.r
for(o=q.$flags|0;b<c;++b){n=s.h(a,b)
o&2&&A.B(q,9)
q.setUint8(p,n);++p
if(p===64){m.es()
p=0}}m.r=p},
es(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.d,a5=a3.c
if(a5===$){s=J.ms(B.ay.ga6(a3.b),0,null)
a3.c!==$&&A.ht()
a3.c=s
a5=s}for(r=a5.length,q=a4.$flags|0,p=0;p<16;++p){if(!(p<r))return A.a(a5,p)
o=a5[p]
q&2&&A.B(a4)
if(!(p<64))return A.a(a4,p)
a4[p]=((o&255)<<24|o<<8&16711680|o>>>8&65280|o>>>24)>>>0}for(p=16;p<64;++p){n=a4[p-2]
m=a4[p-7]
l=a4[p-15]
k=a4[p-16]
q&2&&A.B(a4)
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
a2=a0+((((a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22))>>>0)+((a&h^a&g^h&g)>>>0)>>>0)>>>0}j.$flags&2&&A.B(j)
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
gbs(){return this.x}}
A.lF.prototype={}
A.jW.prototype={
gdT(){return B.ej}}
A.lG.prototype={}
A.lH.prototype={}
A.hM.prototype={
aJ(a){return this.mg(t.L.a(a))},
mg(a){var s=0,r=A.I(t.gZ),q,p,o,n
var $async$aJ=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:B.S.cB(a)
p=A.A0(a)
o=A.A0(p)
n=new Uint8Array(32)
A.BH(n,o,$.Er())
q=new A.cW(new A.bp(p,!1),new A.bB(n,B.S),B.S)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$aJ,r)}}
A.n6.prototype={
$0(){var s=new Uint8Array(32)
s[0]=9
return s},
$S:235}
A.n5.prototype={
$0(){var s=new Int32Array(16)
s[0]=56129
s[1]=1
return s},
$S:239}
A.lI.prototype={}
A.tX.prototype={
bp(a,b){var s,r,q,p=t.L
p.a(a)
p.a(b)
p=J.ap(a)
s=J.ap(b)
if(p.gq(a)!==s.gq(b))return!1
for(r=0,q=0;q<p.gq(a);++q)r=(r|p.h(a,q)^s.h(b,q))>>>0
return r===0},
aw(a){var s,r,q,p,o
t.L.a(a)
for(s=J.ap(a),r=0,q=0;q<s.gq(a);++q){p=s.h(a,q)
o=B.d.P(q,16)
r=(r^B.d.ko(p,o)^B.d.bY(p,16-o))>>>0}return r}}
A.Q.prototype={
gcq(){var s,r,q,p=this,o=p.c
if(o===$){s=p.b
r=p.a
q=s>0?A.dy(r,$.cG().aR(s)):A.dy(r.a4(0,$.cG().aR(Math.abs(s))),null)
p.c!==$&&A.ht()
o=p.c=q}return o},
I(a,b){if(b==null)return!1
return b instanceof A.Q&&this.l(0,b)===0},
gO(a){var s=this.gA()
return A.bu(s.a,s.b,B.t,B.t)},
k(a){var s=this.gA(),r=s.a,q=(r.a?r.W(0):r).k(0),p=s.b
if(p<=0)q+=B.c.a4("0",-p)
else{r=q.length
if(r<=p)q="0."+B.c.a4("0",p-r)+q
else{r-=p
q=B.c.X(q,0,r)+"."+B.c.aa(q,r)}}return this.a.a?"-"+q:q},
J(){return this.k(0)},
l(a,b){var s=A.BL(this,t.k5.a(b))
return s.a.a.l(0,s.b.a)},
D(a,b){var s=A.BL(this,b),r=s.a
return new A.Q(r.a.D(0,s.b.a),r.b)},
a4(a,b){return new A.Q(this.a.a4(0,b.a),this.b+b.b)},
ct(a,b){var s,r,q,p,o,n=this.b
if(a>=n)return this
s=$.cG().aR(n-a)
n=this.a
r=n.aF(0,s)
q=n.mp(0,s)
p=q.l(0,$.bj())
if(p!==0){o=n.a
if(b===B.c4){if(o)r=r.a8(0,$.jl())}else if(b===B.dV){if(!o)r=r.D(0,$.jl())}else if(b===B.b5){n=q.a?q.W(0):q
if(n.a4(0,$.Bh()).l(0,s)>=0)r=r.D(0,o?$.jl().W(0):$.jl())}}return new A.Q(r,a)},
az(){var s,r=this
A:{s=r.b
if(s>0){s=r.a.aF(0,$.cG().aR(s))
break A}if(s<0){s=r.a.a4(0,$.cG().aR(-s))
break A}s=r.a
break A}return s},
cP(a){var s,r=this
A:{s=r.b
if(s>0){s=$.cG().aR(s)
s=r.a.cP(0)/s.cP(0)
break A}if(s<0){s=r.a.a4(0,$.cG().aR(-s)).cP(0)
break A}s=r.a.cP(0)
break A}return s},
ge4(){return this.b<=0?0:Math.max(this.gA().b,0)},
bF(a,b){var s,r,q,p
if(b===0)return this.ct(0,B.b5).az().k(0)
s=this.ct(b,B.b5)
r=s.az()
if(r.a)r=r.W(0)
q=$.Eu()
p=s.a
if(p.a)p=p.W(0)
p=q.D(0,new A.Q(p,s.b)).D(0,new A.Q(r.W(0),0))
q=s.l(0,$.M())<0?"-":""
return q+r.k(0)+"."+B.c.aa(new A.Q(p.a,p.b-b).k(0),1)},
gA(){var s,r=this,q=r.d
if(q===$){s=new A.nb(r).$0()
r.d!==$&&A.ht()
r.d=s
q=s}return q},
$iaS:1}
A.nb.prototype={
$0(){var s,r=this.a,q=$.M(),p=r.l(0,q)
if(p===0)return q
for(;;){q=r.a
p=$.cG()
s=q.P(0,p).l(0,$.Bg())
if(s===0){if(p.c===0)A.j(B.W)
r=new A.Q(q.bv(p),r.b-1)}else break}return r},
$S:94}
A.rS.prototype={
$1(a){return a.a.aF(0,a.b)},
$S:98}
A.hb.prototype={
T(){return"_Rounding."+this.b}}
A.cu.prototype={
gO(a){return A.bu(this.a,this.b,B.t,B.t)},
I(a,b){var s,r
if(b==null)return!1
s=!1
if(b instanceof A.cu){r=this.a.l(0,b.a)
if(r===0)s=this.b.l(0,b.b)===0}return s},
k(a){var s,r=this.a,q=r.l(0,$.mr())
if(q===0)return"0"
q=this.b
s=q.l(0,$.jm())
if(s===0)return r.k(0)
else return r.k(0)+"/"+q.k(0)},
l(a,b){t.Fx.a(b)
return this.a.a4(0,b.b).l(0,b.a.a4(0,this.b))},
a4(a,b){return A.dy(this.a.a4(0,b.a),this.b.a4(0,b.b))},
f6(a,b){return A.dy(this.a.a4(0,b.b),this.b.a4(0,b.a))},
aR(a){var s=this.a,r=this.b
return B.d.gda(a)?A.dy(r,s).aR(-a):A.dy(s.aR(a),r.aR(a))},
$iaS:1}
A.c4.prototype={
T(){return"AccountKind."+this.b}}
A.d6.prototype={
T(){return"AccountSubtype."+this.b}}
A.bo.prototype={
gaP(){var s=this.d
return s===B.V||s===B.Z||s===B.y},
bP(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a0==null?f.b:a0,c=b7==null?f.d:b7,b=b5==null?f.f:b5,a=c3==null?f.w:c3
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
return A.jr(f.z,f.Q,d,s,f.r,h,l,f.e,m,b,f.a,j,f.c,c,q,i,p,g,f.db,f.dx,f.cx,f.cy,r,a,n,o,k)},
h2(a){var s=null
return this.bP(s,s,s,!1,!1,a,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
h3(a){var s=null
return this.bP(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,a,s,s,s,s,s,s,s,s)},
l9(a){var s=null
return this.bP(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,a,s,s,s,s,s,s,s,s,s,s,s,s,s)},
ln(a,b,c){var s=null
return this.bP(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,a,s,s,s,s,s,s,s,s,b,c,s,s)},
lk(a,b){var s=null
return this.bP(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,a,b,s,s)},
lg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=null
return this.bP(a,b,c,!1,d,!1,e,f,g,h,i,j,!1,s,s,k,l,s,m,n,o,p,q,s,s,r,s)},
lq(a,b,c,d,e,f){var s=null
return this.bP(s,s,s,a,!1,!1,!1,b,!1,c,!1,!1,d,s,s,s,s,e,s,s,s,s,s,s,s,s,f)},
l7(a){var s=null
return this.bP(a,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
hG(a,b){return this.kL(a,b,!1,this.w,this.ay)},
hF(a,b,c){var s=c==null,r=s?null:c.a
return this.kK(r,s?null:c.b,!0,a,b)},
mO(a,b){return this.hF(a,b,null)},
fV(a,b,c,d,e,f,g){var s=this,r=!e,q=r?c:s.cx,p=r?d:s.cy,o=e?a:s.db,n=e?b:s.dx
return A.jr(s.z,s.Q,s.b,s.x,s.r,s.fy,s.CW,s.e,s.ch,s.f,s.a,s.fr,s.c,s.d,s.as,s.fx,s.at,s.go,o,n,q,p,s.y,f,g,s.ax,s.dy)},
kK(a,b,c,d,e){return this.fV(a,b,null,null,c,d,e)},
kL(a,b,c,d,e){return this.fV(null,null,a,b,c,d,e)},
J(){var s,r=this,q=A.w(t.N,t.X)
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
if(s!=null)q.j(0,"loan",s.J())
s=r.at
if(s!=null)q.j(0,"minimumBalance",s.J())
s=r.ax
if(s!=null)q.j(0,"statement",s.J())
s=r.ay
if(s!=null)q.j(0,"startFrom",s.J())
s=r.ch
if(s!=null)q.j(0,"driveFolder",s.J())
s=r.CW
if(s!=null)q.j(0,"closedAfter",s.k(0))
s=r.cx
if(s!=null)q.j(0,"replacedBy",s)
s=r.cy
if(s!=null)q.j(0,"replacedFrom",s.k(0))
s=r.db
if(s!=null)q.j(0,"ownStartDate",s.k(0))
s=r.dx
if(s!=null)q.j(0,"ownStartFrom",s.J())
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
A.v2.prototype={
$1(a){var s
A.m(a)
if(a!=null){s=$.Fq()
s=s.b.test(a)}else s=!1
return s},
$S:62}
A.c0.prototype={
cb(a){var s=this
return new A.c0(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q)}}
A.my.prototype={}
A.xv.prototype={
$1(a){var s,r
t.W.a(a)
if(B.dP.B(0,a.y.a)){s=a.w
r=this.a
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>=0
s=r}else s=!1
return s},
$S:1}
A.zn.prototype={
$2(a,b){var s=t.c
s.a(a)
s.a(b)
return A.f(a.a,a.b,a.c).l(0,A.f(b.a,b.b,b.c))},
$S:64}
A.zu.prototype={
$1(a){var s,r
t.v.a(a)
s=this.a
if(a.b===s.a){r=a.d
s=s.w
s=A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))>=0}else s=!1
return s},
$S:8}
A.zv.prototype={
$2(a,b){var s=t.v,r=s.a(a).d
s=s.a(b).d
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:24}
A.zw.prototype={
$1(a){t.v.a(a)
return a.b===this.a.a&&a.r!=null},
$S:8}
A.zx.prototype={
$1(a){var s=t.W.a(a).x,r=this.a.w
return A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>=0},
$S:1}
A.zy.prototype={
$1(a){var s=t.W.a(a).w,r=this.a
return A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>0},
$S:1}
A.ce.prototype={}
A.zG.prototype={
$1(a){return A.P(a)+1},
$S:30}
A.zH.prototype={
$0(){return 1},
$S:68}
A.zI.prototype={
$2(a,b){var s=t.dK
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:120}
A.eo.prototype={
T(){return"StartFromKind."+this.b}}
A.h_.prototype={
J(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"kind",r.a.b)
s=r.b
if(s!=null)q.j(0,"year",s)
s=r.c
if(s!=null)q.j(0,"folder",s)
s=r.d
if(s!=null)q.j(0,"statementId",s)
return q}}
A.k0.prototype={
J(){return A.R(["id",this.a,"path",this.b],t.N,t.X)},
I(a,b){if(b==null)return!1
return b instanceof A.k0&&b.a===this.a&&b.b===this.b},
gO(a){return A.bu(this.a,this.b,B.t,B.t)}}
A.eq.prototype={
T(){return"StatementSource."+this.b}}
A.fb.prototype={
T(){return"StatementFormat."+this.b}}
A.dG.prototype={
T(){return"StatementCycle."+this.b}}
A.lb.prototype={
J(){var s,r,q=this,p=q.a
p=p==null?null:p.b
s=q.b
s=s==null?null:s.b
r=q.c
r=r==null?null:r.b
return A.R(["source",p,"format",s,"cycle",r,"day",q.d],t.N,t.X)},
I(a,b){var s=this
if(b==null)return!1
return b instanceof A.lb&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d},
gO(a){var s=this
return A.bu(s.a,s.b,s.c,s.d)},
k(a){return"StatementSetup("+this.J().k(0)+")"}}
A.df.prototype={
T(){return"FactPart."+this.b}}
A.jO.prototype={
J(){var s=this,r=s.f,q=t.N
return A.R(["id",s.a,"subject",s.b,"field",s.c,"value",s.d,"type",s.e,"source",A.R(["file",r.a,"location",r.b,"span",r.c],q,t.K),"fileDate",s.r.k(0),"confirmedOn",s.w.k(0)],q,t.X)}}
A.wZ.prototype={
$1(a){return t.eG.a(a).b===this.a.e},
$S:135}
A.x_.prototype={
$1(a){A.b(a)
return $.eI().aG(0,a).gq(0)>=9||A.xM(a)!==a},
$S:7}
A.uN.prototype={
$1(a){var s,r
A.b(a)
s=A.C("[A-Za-z0-9]",!0,!1)
if(s.b.test(a)){s=this.a
r=s.a
if(r>0){s.a=r-1
return a}return"X"}return a},
$S:12}
A.uQ.prototype={
$1(a){var s,r=a.dl(0)
r.toString
s=A.C("\\D",!0,!1)
if(!(A.a4(r,s,"").length<6))r=A.Dg(r)
return r},
$S:14}
A.xN.prototype={
$1(a){var s=a.dl(0)
s.toString
return A.Dg(s)},
$S:14}
A.rR.prototype={}
A.c7.prototype={
i_(a){var s,r,q,p=this,o=p.z
if(o!=null)return o===B.b7?B.cg:B.b9
if(!p.x)return B.e1
s=p.w
r=s!=null
if(r&&s.a.a.gab(0)===0)return B.b8
q=p.f
if(p.Q&&q!=null&&B.d.u(A.f(a.a,a.b,a.c).aX(A.f(q.a,q.b,q.c)).a,864e8)>2*p.as)return B.ch
if(r&&q!=null&&A.f(a.a,a.b,a.c).l(0,A.f(q.a,q.b,q.c))>0)return B.cf
return p.r.a.a.gab(0)>0?B.ce:B.cd}}
A.c6.prototype={
T(){return"BillStatus."+this.b}}
A.e2.prototype={
T(){return"BillMark."+this.b}}
A.wk.prototype={
$1(a){t.b.a(a)
return a.d===B.x},
$S:2}
A.wl.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).a,s.a(b).a)},
$S:10}
A.wm.prototype={
$1(a){return t.v.a(a).b===this.a.a},
$S:8}
A.wn.prototype={
$2(a,b){var s=t.v,r=s.a(a).d
s=s.a(b).d
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:24}
A.wo.prototype={
$1(a){t.W.a(a)
return a.d===B.U&&a.e===B.p},
$S:1}
A.wp.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:6}
A.wq.prototype={
$1(a){t.dh.a(a)
return a.b===this.a.a&&this.b.hZ(a)==null},
$S:20}
A.ws.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<s.length;s.length===r||(0,A.n)(s),++n){m=s[n]
if(A.f(m.a,m.b,m.c).l(0,A.f(q,p,o))>0)return m}return null},
$S:204}
A.wr.prototype={
$2(a,b){var s,r,q,p=t.ok
p.a(a)
p.a(b)
s=B.c.l(a.b,b.b)
if(s!==0)return s
r=a.c
q=b.c
p=r==null
if(!p&&q!=null)return A.f(r.a,r.b,r.c).l(0,A.f(q.a,q.b,q.c))
if(p&&q==null)return B.c.l(a.a,b.a)
return p?1:-1},
$S:221}
A.uZ.prototype={
$2(a,b){return t.B.a(a).D(0,t.W.a(b).f)},
$S:87}
A.uE.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.x){s=A.C("[^A-Z0-9]",!0,!1)
s=A.a4(a.c.toUpperCase(),s,"")===this.a}else s=!1
return s},
$S:2}
A.uF.prototype={
$1(a){var s,r,q,p=this
t.W.a(a)
if(a.d!==B.U||a.e!==B.q)return!1
if(a.ch!=null||a.cx!=null)return!1
s=p.a
r=s.gR().h(0,a.c)
r=r==null?null:r.gaP()
if(r!==!0)return!1
r=p.b
q=A.N(r)
if(new A.p(r,q.i("l(1)").a(new A.uB(a)),q.i("p<1>")).gq(0)!==1||p.c.e!==a.f.b)return!1
r=A.d([a.z],t.yH)
for(s=s.dX(a.a),q=J.T(s.a),s=new A.S(q,s.b,s.$ti.i("S<1>"));s.m();)r.push(q.gt().z)
return new A.ak(r,t.tx.a(new A.uC()),t.BA).N(0,new A.uD(p.d))},
$S:1}
A.uB.prototype={
$1(a){return t.b.a(a).e===this.a.f.b},
$S:2}
A.uC.prototype={
$1(a){var s,r
A.m(a)
s=a==null?"":a
r=A.C("[^A-Z0-9]",!0,!1)
return A.a4(s.toUpperCase(),r,"")},
$S:29}
A.uD.prototype={
$1(a){return B.c.B(A.b(a),this.a)},
$S:7}
A.cz.prototype={
cb(a){var s=this
return new A.cz(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w)}}
A.tn.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.a6(A.ah(A.b(s)),this.b)}return s},
$S:58}
A.tm.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.av(A.b(s))}return s},
$S:59}
A.jy.prototype={}
A.er.prototype={
T(){return"SubscriptionKind."+this.b}}
A.e3.prototype={
T(){return"BillingCycle."+this.b}}
A.h2.prototype={}
A.iq.prototype={
glL(){return this.a.D(0,this.b).a8(0,this.c)},
J(){return A.R(["rent",this.a.J(),"gst",this.b.J(),"tds",this.c.J()],t.N,t.X)}}
A.eZ.prototype={}
A.cN.prototype={}
A.kZ.prototype={}
A.bR.prototype={
T(){return"IndiaTaxKind."+this.b}}
A.ki.prototype={}
A.l8.prototype={}
A.l9.prototype={}
A.mG.prototype={
eN(a){var s,r
for(s=this.d,s=new A.aa(s,A.o(s).i("aa<1,2>")).gv(0);s.m();){r=s.d
if(J.Bo(r.b,a))return r.a}return null}}
A.v7.prototype={
$1(a){return typeof a=="string"&&this.a.aO(a)!=null},
$S:23}
A.v8.prototype={
$1(a){t.B.a(a)
return a.b!==this.a||a.a.a.gab(0)<0},
$S:96}
A.v9.prototype={
$1(a){return t.nq.a(a).b===this.a.h(0,"kind")},
$S:97}
A.c8.prototype={
J(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"description",r.a)
q.j(0,"quantity",r.b.k(0))
q.j(0,"unitPrice",r.c)
q.j(0,"amount",r.d)
s=r.e
if(s!=null)q.j(0,"gst",s)
return q}}
A.db.prototype={
gdt(){return B.a.a9(this.x,0,new A.mX(),t.S)},
f2(){var s,r,q,p,o=this,n=A.w(t.N,t.X)
n.j(0,"draftId",o.a)
n.j(0,"bookId",o.b)
n.j(0,"customerId",o.c)
n.j(0,"date",o.d.k(0))
n.j(0,"due",o.e.k(0))
n.j(0,"seriesId",o.f)
n.j(0,"seq",o.r)
n.j(0,"number",o.w)
s=A.d([],t.bk)
for(r=o.x,q=r.length,p=0;p<r.length;r.length===q||(0,A.n)(r),++p)s.push(r[p].J())
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
A.mX.prototype={
$2(a,b){return A.P(a)+t.gM.a(b).d},
$S:72}
A.wW.prototype={
$2(a,b){var s=t.u
return B.c.l(s.a(a).b,s.a(b).b)},
$S:21}
A.xA.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.ay(a.c.h(0,"date"))
r.toString
s=A.ay(b.c.h(0,"date"))
s.toString
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:21}
A.wy.prototype={
$2(a,b){var s,r,q=t.nl
q.a(a)
q.a(b)
q=b.d
s=a.d
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.d.l(b.r,a.r)},
$S:105}
A.wR.prototype={
$1(a){return t.gM.a(a).e==="standard"},
$S:112}
A.wS.prototype={
$2(a,b){return A.P(a)+t.gM.a(b).d},
$S:72}
A.fw.prototype={
k(a){return"CrossBookDiscrepancy("+this.a+": "+this.b+")"}}
A.wI.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.wJ.prototype={
$2(a,b){A.b(a)
return!J.Bn(t.C.a(b),new A.wH())},
$S:118}
A.wH.prototype={
$1(a){var s
t.W.a(a)
s=!0
if(a.at==null)if(a.ax==null){s=a.d
s=s===B.Y||s===B.X}return s},
$S:1}
A.wK.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i
A.b(a)
t.C.a(b)
s=J.b4(b)
r=s.bV(b,new A.wE())
q=A.E(r,r.$ti.i("h.E"))
r=s.bV(b,new A.wF())
p=A.E(r,r.$ti.i("h.E"))
s=s.bV(b,new A.wG())
o=A.E(s,s.$ti.i("h.E"))
s=q.length
if(s!==1||p.length!==1){B.a.n(this.a,new A.fw(a,""+s+" advance(s) and "+p.length+" expense(s); expected one of each"))
return}s=B.a.gaL(q).f
if(!s.I(0,B.a.gaL(p).f)){B.a.n(this.a,new A.fw(a,"advance "+s.k(0)+" but expense "+B.a.gaL(p).f.k(0)))
return}n=A.a6($.M(),s.b)
for(r=o.length,m=0;m<o.length;o.length===r||(0,A.n)(o),++m){l=o[m].f
k=l.b
j=n.b
if(k!==j)A.j(A.ae(j,k))
l=n.a.D(0,l.a)
n=new A.v(l,j)
i=B.e.h(0,j)
if(i==null)A.j(A.y(j,"currency","is not a supported currency"))
if((l.b<=0?0:Math.max(l.gA().b,0))>i)A.j(A.A(j+" allows "+A.i(i)+" decimal places",l.k(0),null))}if(s.a8(0,n).a.a.gab(0)<0)B.a.n(this.a,new A.fw(a,"settled "+n.k(0)+" against an advance of "+s.k(0)))},
$S:119}
A.wE.prototype={
$1(a){return t.W.a(a).d===B.Y},
$S:1}
A.wF.prototype={
$1(a){return t.W.a(a).d===B.k},
$S:1}
A.wG.prototype={
$1(a){return t.W.a(a).d===B.X},
$S:1}
A.dn.prototype={
T(){return"InvoiceState."+this.b}}
A.dp.prototype={}
A.xB.prototype={
$1(a){return t.W.a(a).ax!=null},
$S:1}
A.xC.prototype={
$2(a,b){var s,r=t.qn
r.a(a)
r=r.a(b).a.e
s=a.a.e
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:124}
A.uH.prototype={
$1(a){return A.m(t.u.a(a).c.h(0,"invoiceId"))===this.a},
$S:31}
A.wL.prototype={
$1(a){t.W.a(a)
return a.d===B.Y&&a.ch!=null},
$S:1}
A.bH.prototype={}
A.eh.prototype={
T(){return"PlannedKind."+this.b}}
A.bv.prototype={
J(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"kind",r.b.b)
q.j(0,"name",r.c)
q.j(0,"accountId",r.d)
s=r.e
if(s!=null)q.j(0,"toAccountId",s)
q.j(0,"dayOfMonth",r.f)
s=r.r
q.j(0,"amount",s==null?null:s.J())
s=r.w
if(s!=null)q.j(0,"words",s)
q.j(0,"fromMonth",r.x)
q.j(0,"version",r.y)
return q}}
A.kS.prototype={}
A.ei.prototype={
T(){return"PlannedOutcomeKind."+this.b}}
A.e5.prototype={
J(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"payee",r.b)
q.j(0,"fromAccountId",r.c)
q.j(0,"dayOfMonth",r.d)
s=r.e
q.j(0,"typicalAmount",s==null?null:s.J())
s=r.f
if(s!=null)q.j(0,"categoryId",s)
return q}}
A.di.prototype={
T(){return"GiroOutcomeKind."+this.b}}
A.k8.prototype={}
A.le.prototype={
J(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"ya",r.a)
q.j(0,"assessed",r.b.J())
s=r.c
if(s!=null)q.j(0,"giroId",s)
s=r.d
if(s!=null)q.j(0,"firstMonth",s)
s=r.e
if(s!=null)q.j(0,"instalments",s)
return q}}
A.zz.prototype={
$1(a){return a!=null},
$S:23}
A.zA.prototype={
$1(a){return a==null},
$S:23}
A.rW.prototype={}
A.mA.prototype={}
A.v4.prototype={
$1(a){return t.q.a(a).d},
$S:55}
A.v5.prototype={
$1(a){var s=this.a.hb(t.b.a(a).c)
s=s==null?null:s.a
return s===this.b.a},
$S:2}
A.v6.prototype={
$1(a){t.b.a(a)
return B.a.N(A.aN(this.a.fx,t.v),new A.v3(a))},
$S:2}
A.v3.prototype={
$1(a){var s,r
t.v.a(a)
s=this.a
r=!1
if(a.b===s.a)if(a.r!=null){r=a.d
s=s.w
s=A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))>=0}else s=r
else s=r
return s},
$S:8}
A.d7.prototype={
T(){return"AlertChannel."+this.b}}
A.cI.prototype={
T(){return"CoverageLevel."+this.b}}
A.eX.prototype={
J(){var s=this
return A.R(["code",s.a,"name",s.b,"country",s.c,"first",s.d,"caveats",s.e,"offersCsv",s.f],t.N,t.X)}}
A.jI.prototype={}
A.f6.prototype={}
A.co.prototype={
T(){return"IntakeStatus."+this.b}}
A.eY.prototype={}
A.uw.prototype={
$1(a){return t.b.a(a).a===this.a.aV(this.b)},
$S:2}
A.wB.prototype={
$1(a){var s,r
t.v.a(a)
if(this.a.aV(a.b)===this.b){s=a.d
r=this.c
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>=0
s=r}else s=!1
return s},
$S:8}
A.dl.prototype={
T(){return"IntakeChannel."+this.b}}
A.nw.prototype={
J(){var s=this,r=t.D.i("be.S").a(s.e)
return A.R(["algorithm",s.a,"memoryKiB",s.b,"iterations",s.c,"parallelism",s.d,"salt",B.K.gaB().M(r)],t.N,t.X)}}
A.h6.prototype={
k(a){return"WrongSecret"}}
A.ta.prototype={
J(){var s,r=t.D.i("be.S"),q=r.a(this.a)
q=B.K.gaB().M(q)
s=r.a(this.b)
s=B.K.gaB().M(s)
r=r.a(this.c)
return A.R(["nonce",q,"cipherText",s,"mac",B.K.gaB().M(r)],t.N,t.X)}}
A.nx.prototype={
J(){var s=this
return A.R(["passphraseKdf",s.a.J(),"recoveryKdf",s.b.J(),"byPassphrase",s.c.J(),"byRecovery",s.d.J()],t.N,t.X)}}
A.vk.prototype={
$1(a){return t.b.a(a).r===this.a},
$S:2}
A.vl.prototype={
$1(a){return t.b.a(a).e==="SGD"},
$S:2}
A.k7.prototype={}
A.mD.prototype={}
A.D.prototype={}
A.ne.prototype={}
A.br.prototype={}
A.t0.prototype={}
A.fK.prototype={
hb(a){var s=this.x.a,r=s.h(0,a)
if(r==null)r=s.h(0,A.hn(a))
if(r==null){r=A.o(s).i("L<2>")
r=A.aU(new A.p(new A.L(s,r),r.i("l(h.E)").a(new A.o4(a)),r.i("p<h.E>")),t.q)
s=r}else s=r
return s},
gR(){var s,r,q,p
if(this.gk6()===0)s=A.a7(this.r,t.N,t.b)
else{s=t.z
s=A.w(s,s)
for(r=this.r.a,r=new A.aa(r,A.o(r).i("aa<1,2>")).gv(0);r.m();){q=r.d
p=q.b
if(p.cx==null)s.j(0,q.a,p)}s=A.a7(s,t.N,t.b)}return s},
gk6(){var s=this.r.a,r=A.o(s).i("L<2>")
return new A.p(new A.L(s,r),r.i("l(h.E)").a(new A.nS()),r.i("p<h.E>")).gq(0)},
aV(a){var s,r,q,p,o=A.kw([a],t.N)
for(s=this.r.a,r=a;;r=p){q=s.h(0,r)
p=q==null?null:q.cx
if(p==null||!o.n(0,p))return r}},
c3(a){var s,r,q,p=A.d([],t.k)
for(s=this.r.a,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>"));s.m();){r=s.d
if(r.cx!=null){q=r.a
q=q!==a&&this.aV(q)===a}else q=!1
if(q)p.push(r)}B.a.E(p,new A.o2())
return p},
gm0(){var s=this.go,r=A.N(s)
return A.aN(new A.p(s,r.i("l(1)").a(new A.o3(this)),r.i("p<1>")),t.x)},
gie(){var s=this.k3,r=A.o(s).i("L<2>")
return A.aN(new A.p(new A.L(s,r),r.i("l(h.E)").a(new A.or(this)),r.i("p<h.E>")),t.x)},
hZ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=864e8,a=a0.d
if(a==null)a=a0.c
for(s=this.fx,r=A.N(s),q=r.i("l(1)").a(new A.oq(a0)),s=B.a.gv(s),r=new A.S(s,q,r.i("S<1>")),q=a.a,p=a.b,o=a.c,n=null;r.m();){m=s.gt()
l=m.d
k=A.f(q,p,o)
j=l.a
i=l.b
l=l.c
h=A.f(j,i,l)
g=B.d.u(k.b-h.b+1000*(k.a-h.a),b)
if(g<-3||g>20)continue
if(n==null){n=m
continue}k=n.d
h=A.f(q,p,o)
f=k.a
e=k.b
k=k.c
d=A.f(f,e,k)
c=Math.abs(B.d.u(h.b-d.b+1000*(h.a-d.a),b))
h=Math.abs(g)
if(h>=c)l=h===c&&A.f(j,i,l).l(0,A.f(f,e,k))>0
else l=!0
if(l)n=m}return n},
cD(){var s=this.b.a,r=A.o(s).i("L<2>")
return new A.p(new A.L(s,r),r.i("l(h.E)").a(new A.o1(this)),r.i("p<h.E>"))},
gcA(){var s="personal",r=t.N
r=A.w(r,r)
r.j(0,s,s)
r.a1(0,this.f)
return r},
aO(a){var s=this.f.h(0,a)
if(s==null)s=a==="personal"?"personal":null
return s},
bO(a){var s=this.aO(a)
return s==="member"?"personal":s},
de(a,b,c){var s=this.b
if(a==null){s=s.a
s=new A.L(s,A.o(s).i("L<2>"))}else s=s.mj(a)
return J.mv(s,new A.oc(c,b,a))},
c9(a){return this.de(a,null,!1)},
b_(){return this.de(null,null,!1)},
eS(a){return this.de(null,a,!1)},
hi(a,b){return this.de(a,null,b)},
me(a,b){return this.de(a,b,!1)},
dX(a){var s=this.b.a,r=A.o(s).i("L<2>")
return new A.p(new A.L(s,r),r.i("l(h.E)").a(new A.ob(a)),r.i("p<h.E>"))},
eE(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.a,a6=a7.a
if(a5.B(0,a6))return new A.ne()
s=null
try{r=null
o=a7.d
q=o
A:{if("movement.record"===q){r=a3.jX(a7)
break A}if("movement.categorise"===q){r=a3.iR(a7)
break A}if("payment.forAnotherBook"===q){n=a7.e
m=n.h(0,"pairId")
m.toString
A.b(m)
l=n.h(0,"payingBookId")
l.toString
A.b(l)
k=n.h(0,"owingBookId")
k.toString
A.b(k)
j=n.h(0,"amount")
j.toString
A.b(j)
i=n.h(0,"currency")
i.toString
A.b(i)
h=A.a6(A.ah(j),i)
i=n.h(0,"occurredAtUtc")
i.toString
g=A.bV(A.b(i)).H()
i=n.h(0,"bankDate")
i.toString
f=A.av(A.b(i))
i=n.h(0,"homeDate")
i.toString
e=A.av(A.b(i))
d=new A.dx("operation",a6,a7.f,!1)
i=n.h(0,"accountId")
i.toString
i=A.bL(A.b(i),h,f,l,a4,k,a4,B.q,e,m+":advance",a4,a4,a4,g,m,A.m(n.h(0,"payee")),a4,d,a4,a4,B.Y,1)
j=A.m(n.h(0,"payee"))
r=a3.du(a7,A.d([i,A.bL("owed-to:"+l,h,f,k,A.m(n.h(0,"categoryId")),l,a4,B.q,e,m+":expense",a4,a4,a4,g,m,j,a4,d,a4,a4,B.k,1)],t.A))
break A}if("advance.settle"===q){r=a3.kn(a7)
break A}if("movement.verify"===q){r=a3.kJ(a7)
break A}if("movement.sameEvent"===q){r=a3.ki(a7)
break A}if("movement.separate"===q){r=a3.kl(a7)
break A}if("payment.cardBill"===q){r=a3.iP(a7)
break A}if("movement.refund"===q){r=a3.jY(a7)
break A}if("movement.transfer"===q){r=a3.kE(a7)
break A}if("movement.markTransfer"===q){r=a3.jJ(a7)
break A}if("movement.unmarkTransfer"===q){r=a3.kH(a7)
break A}if("movement.flag"===q){r=a3.jo(a7)
break A}if("movement.flagClear"===q){r=a3.jp(a7)
break A}if("intake.hold"===q){r=a3.jy(a7)
break A}if("intake.failed"===q){n=a7.e
m=n.h(0,"eventKey")
m.toString
A.b(m)
l=n.h(0,"receivedAtUtc")
l.toString
c=A.aC(A.bV(A.b(l)).H(),B.n)
B.a.n(a3.c,new A.W("intake-failed:"+m,B.b2,m,"A message from "+A.i(n.h(0,"sender"))+" on "+c.k(0)+" could not be read: "+A.i(n.h(0,"reason"))+"."))
r=new A.D()
break A}if("intake.suspect"===q){r=a3.jA(a7)
break A}if("intake.reminder"===q){r=a3.jz(a7)
break A}if("intake.suspectResolve"===q){r=a3.kA(a7)
break A}if("category.add"===q){r=a3.iS(a7)
break A}if("category.rename"===q){r=a3.iT(a7)
break A}if("rule.propose"===q){r=a3.ke(a7)
break A}if("rule.confirm"===q){r=a3.kc(a7)
break A}if("rule.remove"===q){r=a3.kf(a7)
break A}if("rule.edit"===q){r=a3.kd(a7)
break A}if("movement.classify"===q){r=a3.iU(a7)
break A}if("movement.unfile"===q){r=a3.kG(a7)
break A}if("rule.unconfirm"===q){r=a3.kg(a7)
break A}if("filing.target"===q){r=a3.jm(a7)
break A}if("member.add"===q){r=a3.jK(a7)
break A}if("member.rename"===q){r=a3.jL(a7)
break A}if("movement.attribute"===q){r=a3.iD(a7)
break A}if("movement.note"===q){r=a3.jO(a7)
break A}if("setup.tick"===q){n=a7.e
m=n.h(0,"stepId")
m.toString
A.b(m)
l=n.h(0,"itemId")
l.toString
A.b(l)
k=n.h(0,"ticked")
k.toString
j=a3.p4.a
if(A.d0(k))j.n(0,new A.t(m,l))
else j.Y(0,new A.t(m,l))
r=new A.D()
break A}if("book.add"===q){r=a3.iF(a7)
break A}if("account.add"===q){r=a3.io(a7)
break A}if("account.edit"===q){r=a3.iq(a7)
break A}if("account.setStart"===q){r=a3.iw(a7)
break A}if("account.linkFolder"===q){r=a3.it(a7)
break A}if("account.close"===q){r=a3.ip(a7)
break A}if("card.replace"===q){r=a3.iQ(a7)
break A}if("account.moveBook"===q){r=a3.iu(a7)
break A}if("account.remove"===q){r=a3.iv(a7)
break A}if("giro.add"===q){r=a3.ju(a7)
break A}if("institution.profile"===q){m=a7.e
l=m.h(0,"code")
l.toString
A.b(l)
k=m.h(0,"name")
k.toString
A.b(k)
j=A.m(m.h(0,"country"))
i=A.he(m.h(0,"first"))
b=t.jS.a(m.h(0,"caveats"))
if(b==null)b=B.aU
a3.x.j(0,l,new A.eX(l,k,j,i===!0,J.d4(b,t.N),A.he(m.h(0,"offersCsv"))))
r=new A.D()
break A}if("coverage.record"===q){r=a3.iZ(a7)
break A}if("institution.enable"===q){r=a3.jx(a7)
break A}if("giro.edit"===q){r=a3.jv(a7)
break A}if("fact.confirm"===q){r=a3.jj(a7)
break A}if("statement.record"===q){r=a3.kz(a7)
break A}if("statement.loans"===q){r=a3.kw(a7)
break A}if("statement.notice"===q){r=a3.kx(a7)
break A}if("statement.noticeConfirm"===q){r=a3.ky(a7)
break A}if("statement.file"===q){r=a3.kt(a7)
break A}if("statement.fileResult"===q){r=a3.kv(a7)
break A}if("secret.audit"===q){r=a3.kj(a7)
break A}if("review.add"===q){r=a3.k9(a7)
break A}if("review.dismiss"===q){r=a3.ka(a7)
break A}if("review.snooze"===q){r=a3.kb(a7)
break A}if("month.close"===q){r=a3.jM(a7)
break A}if("statement.fileAccount"===q){r=a3.ku(a7)
break A}if("statement.last4Pick"===q){r=a3.jE(a7)
break A}if("statement.last4Forget"===q){r=a3.jD(a7)
break A}if("keys.envelope"===q){m=a7.e.h(0,"envelope")
m.toString
A.BX(t.f.a(m).F(0,t.N,t.X))
r=new A.D()
break A}if("google.account"===q){m=a7.e
a=m.h(0,"emailSha256")
if(typeof a=="string"){l=$.Ey()
l=!l.b.test(a)}else l=!0
if(l)A.j(B.eH)
m=A.m(m.h(0,"masked"))
a3.cy=new A.rW(a,m==null?"":m)
r=new A.D()
break A}if("keys.backupPublic"===q){m=a7.e.h(0,"x25519")
m.toString
a0=B.B.M(A.b(m))
m=a0.length
if(m!==32)A.j(A.A("an X25519 public key has 32 bytes, not "+m,a4,a4))
a3.db=new A.bB(a0,B.S)
r=new A.D()
break A}if("mail.sender"===q){r=a3.jI(a7)
break A}if("bill.mark"===q){r=a3.iE(a7)
break A}if("reminder.sent"===q){r=a3.jZ(a7)
break A}if("reminders.switch"===q){r=a3.k_(a7)
break A}if("value.record"===q){r=a3.kI(a7)
break A}if("report.keep"===q){r=a3.k7(a7)
break A}if("brief.settings"===q){r=a3.iJ(a7)
break A}if("brief.sent"===q){r=a3.iI(a7)
break A}if("calendar.own"===q){r=a3.iN(a7)
break A}if("calendar.event"===q){r=a3.iM(a7)
break A}if("calendar.sync"===q){r=a3.iO(a7)
break A}if("giro.outcome"===q){r=a3.jw(a7)
break A}if("planned.set"===q){r=a3.jS(a7)
break A}if("planned.end"===q){r=a3.jQ(a7)
break A}if("tax.assessment"===q){r=a3.kB(a7)
break A}if("planned.outcome"===q){r=a3.jR(a7)
break A}if("category.flag"===q||"budget.set"===q||"period.note"===q||"officeDay.mark"===q||"recurring.mark"===q||"goal.set"===q||"goal.remove"===q||"reward.rules"===q){a1=A.Ji(a3,a3.dR,a7)
r=a1==null?new A.D():a3.p(a7,B.h,a1)
break A}if("document.set"===q||"document.remove"===q||"document.retrieve"===q||"document.source"===q||"policy.set"===q||"policy.remove"===q){a1=A.Jf(a3,a3.c5,a7)
r=a1==null?new A.D():a3.p(a7,B.h,a1)
break A}if("movement.forBook"===q){r=a3.em(a7)
break A}if("movement.forBookClear"===q){r=a3.jr(a7)
break A}if("payment.byPerson"===q){r=a3.iK(a7)
break A}if("invoice.link"===q){r=a3.jC(a7)
break A}if("book.settings"===q||"invoice.record"===q||"subscription.set"===q||"subscription.remove"===q||"date.entered"===q||"remittance.confirm"===q||"indiaTax.entry"===q||"account.sourceOnly"===q||"loan.joint"===q||"statement.sourceRead"===q||"book.owedMentioned"===q){a1=A.Jc(a3,a3.aC,a7)
r=a1==null?new A.D():a3.p(a7,B.h,a1)
break A}if("life.set"===q||"life.remove"===q){r=a3.jH(a7)
break A}if("rental.issue"===q){a1=A.Jh(a3,a7)
r=a1==null?new A.D():a3.p(a7,B.h,a1)
break A}if("rental.credit"===q){a1=A.Jg(a3,a7)
r=a1==null?new A.D():a3.p(a7,B.h,a1)
break A}if("company.invoice.issue"===q){a1=A.Jd(a3,a7)
r=a1==null?new A.D():a3.p(a7,B.h,a1)
break A}if("sms.sender"===q){r=a3.kr(a7)
break A}if("sync.switch"===q||"sync.epoch"===q||"sync.device"===q||"sync.primary"===q){a1=a3.fr.eE(a7)
r=a1==null?new A.D():a3.p(a7,B.h,"sync: "+a1)
break A}if("life.proposalReject"===q){r=a3.jV(a7)
break A}r=a3.p(a7,B.f,"unknown operation type "+o)
break A}s=r}catch(a2){p=A.au(a2)
s=a3.p(a7,B.h,"could not apply "+a7.d+": "+A.i(p))}a5.n(0,a6)
return s},
du(a,b){var s,r,q,p,o,n,m,l,k=this
t.C.a(b)
s=A.N(b)
r=s.i("cs<1,e>")
q=A.E(new A.cs(new A.p(b,s.i("l(1)").a(new A.nA(k)),s.i("p<1>")),s.i("e(1)").a(new A.nB()),r),r.i("h.E"))
if(q.length!==0)return k.p(a,B.v,"movement "+B.a.S(q,", ")+" already exists")
for(s=b.length,r=k.b,p=0;p<b.length;b.length===s||(0,A.n)(b),++p){o=b[p]
n=o.a
m=o.c
l=k.bM("m:"+n,m)
r.j(0,n,l===m?o:o.cb(l))}return new A.D()},
jX(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="occurredAtUtc",a9=b0.e.h(0,"movement")
a9.toString
s=t.f
r=t.N
q=t.X
a9=s.a(a9).F(0,r,q)
p=a9.h(0,"provenance")
p.toString
o=s.a(p).F(0,r,q)
n=A.m(a9.h(0,"type"))
m=A.m(a9.h(0,"paymentMethod"))
q=a9.h(0,"id")
q.toString
A.b(q)
r=a9.h(0,"bookId")
r.toString
A.b(r)
p=a9.h(0,"accountId")
p.toString
A.b(p)
s=n==null?null:A.af(B.as,n,t.v_)
l=a9.h(0,"direction")
l.toString
l=A.af(B.bv,A.b(l),t.g7)
k=a9.h(0,"amount")
k.toString
A.b(k)
j=a9.h(0,"currency")
j.toString
A.b(j)
j=A.a6(A.ah(k),j)
if(a9.h(0,a8)==null)k=null
else{k=a9.h(0,a8)
k.toString
k=A.bV(A.b(k)).H()}i=a9.h(0,"bankDate")
i.toString
i=A.av(A.b(i))
h=a9.h(0,"homeDate")
h.toString
h=A.av(A.b(h))
g=A.m(a9.h(0,"payee"))
f=A.m(a9.h(0,"categoryId"))
e=A.m(a9.h(0,"memberId"))
d=A.m(a9.h(0,"counterpartyBookId"))
c=A.m(a9.h(0,"counterpartyPerson"))
b=A.m(a9.h(0,"linkedMovementId"))
a=A.m(a9.h(0,"pairId"))
a0=A.m(a9.h(0,"statementLineRef"))
a1=A.m(a9.h(0,"sameEventAs"))
a2=m==null?null:A.af(B.iv,m,t.fN)
a9=A.m(a9.h(0,"notes"))
a3=o.h(0,"channel")
a3.toString
A.b(a3)
a4=o.h(0,"sourceId")
a4.toString
A.b(a4)
a5=o.h(0,"importedAtUtc")
a5.toString
a5=A.bV(A.b(a5)).H()
a6=o.h(0,"verified")
a6.toString
a7=A.bL(p,j,i,r,f,d,c,l,h,q,b,e,a9,k,a,g,a2,new A.dx(a3,a4,a5,A.d0(a6)),a1,a0,s,1)
a9=a7.db
if(A.E5(a9)!=null){a9.toString
s=$.Bi()
r=A.C("[\\s-]",!0,!1)
a9=A.a4(a9,r,"")
return this.p(b0,B.h,s.b.test(a9)?"a movement's note may not hold a full number":"a movement's note must be one line of at most 200 characters")}return this.du(b0,A.d([a7],t.A))},
jO(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a9.e,a8=a7.h(0,"movementId")
a8.toString
A.b(a8)
s=A.m(a7.h(0,"notes"))
r=a6.b
q=r.a.h(0,a8)
if(q==null)return a6.p(a9,B.f,"no movement "+a8+" to note")
p=q.cx
if(p!=null)return a6.p(a9,B.f,a8+" is another message about "+p+"; note the payment it belongs to")
o=A.E5(s)
if(o!=null)return a6.p(a9,B.h,"note not saved on "+a8+": "+o)
n=A.B0(s)
m=q.dx
l=a7.h(0,"baseVersion")
l.toString
if(m!==A.P(l)){r=new A.nM()
B.a.n(a6.c,new A.W("conflict:"+a9.a,B.H,a8,"Changed on two devices: kept "+A.i(r.$1(q.db))+", the other device wrote "+A.i(r.$1(n))+"."))
return new A.br()}l=q.a
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
r.j(0,a8,A.bL(j,g,e,k,a,a1,a2,h,d,l,a3,a0,n,f,a4,b,q.cy,c,p,a5,i,m).eI(m+1))
return new A.D()},
iR(a){var s,r,q,p,o=a.e,n=o.h(0,"movementId")
n.toString
A.b(n)
s=o.h(0,"categoryId")
s.toString
A.b(s)
o=o.h(0,"baseVersion")
o.toString
A.P(o)
r=this.b
q=r.a.h(0,n)
if(q==null)return this.p(a,B.f,"no movement "+n+" to categorise")
p=q.dx
if(p!==o){B.a.n(this.c,new A.W("conflict:"+a.a,B.H,n,"Changed on two devices: kept "+A.i(q.Q)+", the other device chose "+s+"."))
return new A.br()}r.j(0,n,q.li(s,p+1))
return new A.D()},
kn(a){var s,r,q,p,o,n,m,l,k=null,j=a.e,i=j.h(0,"pairId")
i.toString
A.b(i)
s=this.b.a.h(0,i+":advance")
if(s==null)return this.p(a,B.ac,"no advance "+i+" to settle")
r=a.a
q=s.b
p=j.h(0,"accountId")
p.toString
A.b(p)
o=j.h(0,"amount")
o.toString
A.b(o)
n=j.h(0,"currency")
n.toString
A.b(n)
n=A.a6(A.ah(o),n)
o=j.h(0,"occurredAtUtc")
o.toString
o=A.bV(A.b(o)).H()
m=j.h(0,"bankDate")
m.toString
m=A.av(A.b(m))
l=j.h(0,"homeDate")
l.toString
l=A.av(A.b(l))
return this.du(a,A.d([A.bL(p,n,m,q,k,s.at,k,B.p,l,i+":settlement:"+r,s.a,k,k,o,i,k,k,new A.dx("operation",r,a.f,!1),k,k,B.X,1)],t.A))},
kJ(a){var s,r,q,p,o,n,m,l,k,j=a.e,i=j.h(0,"movementId")
i.toString
A.b(i)
s=this.b
r=s.a
q=r.h(0,i)
if(q==null)return this.p(a,B.az,"no movement "+i+" to verify")
p=j.h(0,"postedAmount")
p.toString
A.b(p)
o=j.h(0,"currency")
o.toString
A.b(o)
n=A.a6(A.ah(p),o)
m=q.ch
if(m==null)l=null
else{p=q.a
o=m+":advance"
if(p===o){p=m+":expense"
l=p}else{p=p===m+":expense"?o:null
l=p}}k=l==null?this.js(q):r.h(0,l)
r=q.y
p=j.h(0,"statementLineRef")
p.toString
s.j(0,i,q.lo(n,new A.dx(r.a,r.b,r.c,!0),A.b(p),q.dx+1))
if(k!=null)s.j(0,k.a,k.lh(n,k.dx+1))
return new A.D()},
iS(a){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,"id")
k.toString
A.b(k)
s=l.h(0,"bookKind")
s.toString
A.b(s)
r=l.h(0,"name")
r.toString
A.b(r)
q=A.m(l.h(0,"parentId"))
p=this.d
o=p.a
if(o.C(k))return this.p(a,B.v,"category "+k+" already exists")
n=q==null
m=n?null:o.h(0,q)
if(!n)o=m==null||m.b!==s
else o=!1
if(o)return this.p(a,B.f,"category "+k+" needs an existing "+s+" parent "+q)
p.j(0,k,new A.bH(k,s,r,q))
return new A.D()},
iT(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.b(o)
s=this.d
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no category "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.c.G(A.b(p))
if(q.length===0)return this.p(a,B.f,"category "+o+" needs a name")
s.j(0,o,new A.bH(r.a,r.b,q,r.d))
return new A.D()},
ke(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a.e,c=d.h(0,"id")
c.toString
A.b(c)
s=A.m(d.h(0,"categoryId"))
r=f.e
if(r.a.C(c))return f.p(a,B.v,"rule "+c+" already exists")
q=d.h(0,"bookId")
q.toString
A.b(q)
p=d.h(0,"pattern")
p.toString
A.b(p)
o=A.C("\\s+",!0,!1)
if(B.c.G(A.a4(p.toUpperCase(),o," ")).length===0)return f.p(a,B.f,"rule "+c+" has an empty pattern")
n=A.m(d.h(0,"forBookId"))
o=n==null
if(!o)m=f.aO(n)==null||n===q||!J.a1(d.h(0,"type"),"expense")
else m=!1
if(m)return f.p(a,B.f,"rule "+c+" files expenses for another book that exists")
l=A.m(d.h(0,"direction"))
m=d.h(0,"type")
m.toString
k=A.af(B.as,A.b(m),t.v_)
m=l==null
j=m?e:A.af(B.bv,l,t.g7)
i=f.fJ(c,k,s,j,o?q:n)
if(i!=null)return f.p(a,B.f,i)
h=A.m(d.h(0,"memberId"))
if(h!=null&&!f.p3.a.C(h))return f.p(a,B.f,"rule "+c+" names unknown member "+h)
g=d.h(0,"accountAlias")
A:{if(typeof g=="string"){o=f.bM("r:"+c,g)
break A}o=e
break A}m=m?e:A.af(B.bv,l,t.g7)
j=A.he(d.h(0,"appliesToNew"))
r.j(0,c,new A.ba(c,q,p,k,s,!1,o,m,h,n,j!==!1,e))
return new A.D()},
fJ(a,b,c,d,e){var s,r
if(!B.a.B(B.iO,b))return"rule "+a+" cannot file transactions as "+b.b
s=b===B.G
if(s&&d===B.q)return"rule "+a+" files refunds, which are money coming in"
if(!(b===B.k||b===B.w||s))return c==null?null:"rule "+a+" files "+b.b+", which has no category"
if(c==null)return"rule "+a+" files "+b.b+" and needs a category"
r=this.d.a.h(0,c)
if(r==null)return"rule "+a+" names unknown category "+c
if(r.b!==this.bO(e))return"rule "+a+" files "+c+", which does not belong to book "+e
if(s&&A.ho(r))return"rule "+a+" files refunds under "+c+", which is not spending"
return null},
io(a){var s,r,q,p,o=this,n=a.e.h(0,"account")
n.toString
s=A.zW(t.f.a(n).F(0,t.N,t.X))
n=o.r
r=s.a
if(n.a.C(r))return o.p(a,B.v,"account "+r+" already exists")
q=s.r
if(o.aO(q)==null)return o.p(a,B.f,"no book "+q)
p=A.eA(s)
if(p!=null)return o.p(a,B.h,"account not added: "+p)
n.j(0,r,s)
return new A.D()},
kr(a){var s,r,q,p,o,n=null
try{r=a.e
q=A.m(r.h(0,"id"))
p=A.E4(q==null?"":q)
if(p==null)A.j(B.eF)
q=r.h(0,"kind")
q.toString
n=new A.ch(p,A.af(B.bx,A.b(q),t.in),A.m(r.h(0,"institution")))}catch(o){r=A.au(o)
if(r instanceof A.b7){s=r
return this.p(a,B.h,"SMS sender not recorded: "+s.a)}else throw o}r=this.dy
if(J.a1(a.e.h(0,"removed"),!0))r.Y(0,n.a)
else r.j(0,n.a,n)
return new A.D()},
jI(a){var s,r,q,p,o,n,m=null
try{r=a.e
q=A.m(r.h(0,"address"))
p=B.c.G(q==null?"":q).toLowerCase()
q=$.F4()
if(!q.b.test(p)){q=$.Fd()
q=q.b.test(p)}else q=!0
o=q?p:null
if(o==null)A.j(B.eI)
q=r.h(0,"kind")
q.toString
m=new A.i7(o,A.af(B.jH,A.b(q),t.qo),A.m(r.h(0,"institution")))}catch(n){r=A.au(n)
if(r instanceof A.b7){s=r
return this.p(a,B.h,"mail sender not recorded: "+s.a)}else throw n}r=this.dx
if(J.a1(a.e.h(0,"removed"),!0))r.Y(0,m.a)
else r.j(0,m.a,m)
return new A.D()},
kz(a){var s,r,q,p=this,o=A.H2(a.e),n=p.r,m=o.b,l=n.a
if(!l.C(m))return p.p(a,B.f,"statement "+o.a+" is for an unregistered account")
s=p.fx
if(B.a.N(s,new A.o_(o)))return p.p(a,B.v,"statement "+o.a+" is already recorded")
r=p.bM("s:"+o.a,m)
B.a.n(s,r===m?o:o.cb(r))
l=l.h(0,r)
l.toString
q=l.CW
if(q!=null){m=o.d
m=A.f(m.a,m.b,m.c).l(0,A.f(q.a,q.b,q.c))>0}else m=!1
if(m)n.j(0,r,l.h2(!0))
return new A.D()},
kx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.H1(a.e),c=d.b
if(!e.r.a.C(c))return e.p(a,B.f,"notice "+d.a+" is for an unregistered account")
s=e.fy
if(B.a.N(s,new A.nY(d)))return e.p(a,B.v,"notice "+d.a+" is already recorded")
r=e.bM("n:"+d.a,c)
q=r===c?d:d.cb(r)
p=B.a.eL(s,new A.nZ(q))
if(p>=0){if(!(p<s.length))return A.a(s,p)
o=s[p]
c=A.d([],t.s)
n=o.d
m=n==null
if(!m){l=q.d
l=l!=null&&!n.I(0,l)}else l=!1
if(l)c.push("statement date ("+A.i(q.d)+" against "+n.k(0)+")")
l=o.e
k=l==null
if(!k){j=q.e
j=j!=null&&!l.I(0,j)}else j=!1
if(j)c.push("balance ("+A.i(q.e)+" against "+l.k(0)+")")
j=o.f
i=j==null
if(!i){h=q.f
h=h!=null&&!j.I(0,h)}else h=!1
if(h)c.push("minimum due ("+A.i(q.f)+" against "+j.k(0)+")")
h=o.r
g=h==null
if(!g){f=q.r
f=f!=null&&!h.I(0,f)}else f=!1
if(f)c.push("due date ("+A.i(q.r)+" against "+h.k(0)+")")
if(c.length!==0)return e.p(a,B.v,"notice "+q.a+" disagrees with notice "+o.a+" on "+B.a.S(c,", "))
c=m?q.d:n
n=k?q.e:l
m=i?q.f:j
l=g?q.r:h
B.a.j(s,p,new A.cz(o.a,o.b,o.c,c,n,m,l,o.w))
return new A.D()}B.a.n(s,q)
return new A.D()},
ky(a){var s,r,q,p,o=a.e.h(0,"noticeId")
o.toString
A.b(o)
s=this.fy
r=B.a.eL(s,new A.nX(o))
if(r<0)return this.p(a,B.f,"no notice "+o+" to confirm")
if(!(r<s.length))return A.a(s,r)
q=s[r]
p=q.d
if(!(p!=null&&q.e!=null&&q.r!=null))return this.p(a,B.f,"notice "+o+": cannot confirm figures the notice does not give (statement date, balance and due date)")
B.a.j(s,r,new A.cz(q.a,q.b,q.c,p,q.e,q.f,q.r,!0))
return new A.D()},
iZ(a){var s,r,q,p,o,n="institution",m="threshold",l=a.e,k=A.m(l.h(0,n)),j=A.JV(l,k!=null&&this.x.a.C(k))
if(j!=null)return this.p(a,B.h,"coverage not recorded: "+j)
s=l.h(0,n)
s.toString
A.b(s)
r=l.h(0,"channel")
r.toString
r=A.af(B.iR,A.b(r),t.dd)
q=l.h(0,"level")
q.toString
A.af(B.j4,A.b(q),t.w0)
if(l.h(0,m)!=null){q=l.h(0,m)
q.toString
A.aJ(t.f.a(q).F(0,t.N,t.X))}A.he(l.h(0,"recurringAlerts"))
A.he(l.h(0,"refundsAlert"))
l=l.h(0,"checkedOn")
l.toString
l=A.av(A.b(l))
q=this.y
p=q.h(0,new A.t(s,r))
if(p!=null){o=p.r
o=A.f(l.a,l.b,l.c).l(0,A.f(o.a,o.b,o.c))>=0}else o=!0
if(o)q.j(0,new A.t(s,r),new A.jI(s,r,l))
return new A.D()},
jx(a){var s,r,q=this,p=a.e.h(0,"institution")
p.toString
A.b(p)
s=q.x.a.h(0,p)
if(s==null)return q.p(a,B.f,"no profile for "+p)
if(!s.d){r=A.Jb(q)
if(!r.a)return q.p(a,B.h,"alerts from "+s.b+" wait until a full statement cycle reconciles at "+B.a.S(r.b," and "))}q.z.n(0,p)
return new A.D()},
ju(a){var s,r,q,p,o=this,n=a.e.h(0,"giro")
n.toString
s=A.BN(t.f.a(n).F(0,t.N,t.X))
n=s.c
r=o.r.a.h(0,n)
if(r==null)return o.p(a,B.f,"no account "+n+" for a GIRO")
n=o.w
q=s.a
if(n.a.C(q))return o.p(a,B.v,"GIRO "+q+" already exists")
p=A.DL(s,r)
if(p!=null)return o.p(a,B.h,"GIRO not added: "+p)
n.j(0,q,s)
return new A.D()},
jv(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="dayOfMonth",g="typicalAmount",f="categoryId",e=a.e,d=e.h(0,"id")
d.toString
A.b(d)
s=i.w
r=s.a.h(0,d)
if(r==null)return i.p(a,B.f,"no GIRO "+d+" to change")
q=r.a
p=r.b
o=r.c
n=e.C(h)?A.aE(e.h(0,h)):r.d
if(e.C(g))if(e.h(0,g)==null)m=null
else{m=e.h(0,g)
m.toString
m=A.aJ(t.I.a(m))}else m=r.e
l=e.C(f)?A.m(e.h(0,f)):r.f
k=new A.e5(q,p,o,n,m,l)
if(l!=null){q=i.d.a.h(0,l)
q=q==null?null:q.b
q=q!=i.bO(i.r.a.h(0,o).r)}else q=!1
if(q)return i.p(a,B.f,"GIRO not changed: no category "+l+" in its book")
q=i.r.a.h(0,o)
q.toString
j=A.DL(k,q)
if(j!=null)return i.p(a,B.h,"GIRO not changed: "+j)
s.j(0,d,k)
return new A.D()},
jw(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"giroId")
k.toString
A.b(k)
s=l.h(0,"month")
s.toString
A.b(s)
r=l.h(0,"outcome")
r.toString
r=A.af(B.jV,A.b(r),t.jf)
q=J.a1(l.h(0,"source"),"notice")
p=A.m(l.h(0,"movementId"))
o=m.w.a.h(0,k)
if(o==null)return m.p(a,B.f,"no GIRO "+k)
if(A.ml(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q&&r!==B.cv)return m.p(a,B.h,"a notice can only say a GIRO failed")
if(p!=null){n=m.b.a.h(0,p)
if(r!==B.cu||n==null||n.c!==o.c||n.e!==B.q||n.cx!=null)return m.p(a,B.f,"not a deduction from the GIRO's account: "+p)}B.a.n(m.Q,new A.k8(k,s,r,q,p))
return new A.D()},
jS(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.e,f=g.h(0,"id")
f.toString
A.b(f)
s=g.h(0,"kind")
s.toString
s=A.af(B.j8,A.b(s),t.mZ)
r=g.h(0,"name")
r.toString
A.b(r)
q=g.h(0,"accountId")
q.toString
A.b(q)
p=A.m(g.h(0,"toAccountId"))
o=g.h(0,"dayOfMonth")
o.toString
A.P(o)
if(g.h(0,"amount")==null)n=null
else{n=g.h(0,"amount")
n.toString
n=A.aJ(t.f.a(n).F(0,t.N,t.X))}m=A.m(g.h(0,"words"))
l=g.h(0,"fromMonth")
l.toString
A.b(l)
g=g.h(0,"version")
g.toString
A.P(g)
k=new A.bv(f,s,r,q,p,o,n,m,l,g)
j=A.KQ(k,h.r)
if(j!=null)return h.p(a,B.h,"not planned: "+j)
q=h.as
i=q.a.h(0,f)
if(i==null)i=A.d([],t.rA)
p=J.ap(i)
if(g!==p.gq(i)+1){B.a.n(h.c,new A.W("conflict:"+a.a,B.H,f,"Changed on two devices: "+r+" was changed since; check it again."))
return new A.br()}if(p.gam(i))g=p.gaq(i).b!==s||B.c.l(p.gaq(i).x,l)>0
else g=!1
if(g)return h.p(a,B.h,"a new version keeps its kind and starts no earlier")
g=A.E(i,t.AB)
g.push(k)
q.j(0,f,g)
return new A.D()},
jQ(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.b(q)
r=r.h(0,"fromMonth")
r.toString
A.b(r)
if(!s.as.a.C(q))return s.p(a,B.f,"nothing planned as "+q)
if(A.ml(r)==null)return s.p(a,B.h,"month is YYYY-MM")
s.at.j(0,q,r)
return new A.D()},
jR(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"id")
k.toString
A.b(k)
s=l.h(0,"month")
s.toString
A.b(s)
r=l.h(0,"outcome")
r.toString
r=A.af(B.jz,A.b(r),t.dZ)
q=A.m(l.h(0,"movementId"))
l=m.as.a.h(0,k)
p=l==null?null:J.zU(l)
if(p==null)return m.p(a,B.f,"nothing planned as "+k)
if(A.ml(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q!=null){o=m.b.a.h(0,q)
n=p.b===B.dD?B.p:B.q
if(r!==B.dF||o==null||o.c!==p.d||o.e!==n||o.cx!=null)return m.p(a,B.f,"not a transaction of "+p.c+": "+q)}B.a.n(m.ax,new A.kS(k,s,r,q))
return new A.D()},
kB(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"ya")
l.toString
A.P(l)
s=m.h(0,"assessed")
s.toString
s=A.aJ(t.f.a(s).F(0,t.N,t.X))
r=A.m(m.h(0,"giroId"))
q=new A.le(l,s,r,A.m(m.h(0,"firstMonth")),A.aE(m.h(0,"instalments")))
m=r==null
p=m?null:n.w.a.h(0,r)
if(!m&&p==null)return n.p(a,B.f,"no GIRO "+r)
o=A.Lo(q,p==null?null:n.r.a.h(0,p.c))
if(o!=null)return n.p(a,B.h,"not recorded: "+o)
n.ay.j(0,l,q)
return new A.D()},
jj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.e,f=g.h(0,"source")
f.toString
s=t.f
r=t.N
q=t.X
p=s.a(f).F(0,r,q)
f=g.h(0,"id")
f.toString
A.b(f)
o=g.h(0,"subject")
o.toString
A.b(o)
n=g.h(0,"field")
n.toString
A.b(n)
m=g.h(0,"value")
m.toString
A.b(m)
l=g.h(0,"type")
l.toString
A.b(l)
k=p.h(0,"file")
k.toString
A.b(k)
j=p.h(0,"location")
j.toString
q=s.a(j).F(0,r,q)
r=p.h(0,"span")
r.toString
A.b(r)
j=g.h(0,"fileDate")
j.toString
j=A.av(A.b(j))
g=g.h(0,"confirmedOn")
g.toString
i=new A.jO(f,o,n,m,l,new A.rR(k,q,r),j,A.av(A.b(g)))
h=A.K5(i)
if(h!=null)return this.p(a,B.h,"fact not kept: "+h)
this.CW.j(0,f,i)
return new A.D()},
iq(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="loan",a6="minimumBalance",a7="statement",a8="ifsc",a9="micr",b0="branch",b1="numberShown",b2=b4.e,b3=b2.h(0,"id")
b3.toString
A.b(b3)
s=a3.r
r=s.a.h(0,b3)
if(r==null)return a3.p(b4,B.f,"no account "+b3+" to change")
if(b2.C("kind"))return a3.is(b4,r)
q=A.m(b2.h(0,"alias"))
p=A.m(b2.h(0,"holder"))
o=A.aE(b2.h(0,"staleAfterDays"))
n=A.aE(b2.h(0,"billingCycleDay"))
if(b2.h(0,a5)==null)m=a4
else{m=b2.h(0,a5)
m.toString
m=A.Af(t.I.a(m))}l=b2.C(a5)&&b2.h(0,a5)==null
if(b2.h(0,a6)==null)k=a4
else{k=b2.h(0,a6)
k.toString
k=A.aJ(t.I.a(k))}j=b2.C(a6)&&b2.h(0,a6)==null
if(b2.h(0,a7)==null)i=a4
else{i=b2.h(0,a7)
i.toString
i=A.Co(t.I.a(i))}h=b2.C(a7)&&b2.h(0,a7)==null
g=A.m(b2.h(0,a8))
g=g==null?a4:B.c.G(g).toUpperCase()
f=b2.C(a8)&&b2.h(0,a8)==null
e=A.m(b2.h(0,a9))
e=e==null?a4:B.c.G(e)
d=b2.C(a9)&&b2.h(0,a9)==null
c=A.m(b2.h(0,b0))
c=c==null?a4:B.c.G(c)
b=b2.C(b0)&&b2.h(0,b0)==null
a=A.m(b2.h(0,b1))
if(a==null)a=a4
else{a0=A.C("\\s",!0,!1)
a=A.a4(a,a0,"")
a=A.a4(a.toUpperCase(),"*","X")}a1=r.lg(q,n,c,b,f,l,d,j,b2.C(b1)&&b2.h(0,b1)==null,h,p,g,m,e,k,a,o,i)
a2=A.eA(a1)
if(a2!=null)return a3.p(b4,B.h,"account not changed: "+a2)
s.j(0,b3,a1)
return new A.D()},
is(a,b){var s,r,q,p=this,o=a.e,n=A.A4(B.dq,t.jN).h(0,o.h(0,"kind")),m=o.h(0,"subtype")
A:{if(typeof m=="string"){s=A.A4(B.dd,t.vi).h(0,m)
break A}s=null
break A}if(n!=null)r=o.h(0,"subtype")!=null&&s==null
else r=!0
if(r)return p.p(a,B.h,"an account type names a kind and its subtype")
if(b.d.b!==o.h(0,"baseKind"))return p.cU(a,b.a,b.b+"'s type")
r=b.a
q=p.m9(r,n,s)
if(q!=null)return p.p(a,B.h,"type not changed: "+q)
p.r.j(0,r,A.C0(b,n,s))
return new A.D()},
m9(a,b,c){var s,r,q,p,o,n,m=this,l="money owed",k="money held",j=m.r.a,i=j.h(0,a)
if(i==null)return"no account "+a
s=i.d
if(s===B.y||b===B.y)return"a cash wallet stays a cash wallet"
if(s===b&&i.dy==c)return"it is that type already"
if(i.cx!=null)return i.b+" was replaced by a newer number"
if(B.a.N(m.c3(a),new A.o5(b)))return"its earlier numbers are of its type; undo them first"
r=b===B.x||b===B.o
q=m.fx
p=A.N(q)
o=new A.p(q,p.i("l(1)").a(new A.o6(a)),p.i("p<1>")).gq(0)
if(o>0)q=r!==(s===B.x||s===B.o)
else q=!1
if(q){n=s===B.x||s===B.o?l:k
j=o===1?"statement was":""+o+" statements were"
s=r?l:k
return"its "+j+" read as "+n+"; as "+s+" the balances would turn around"}if(b!==B.V&&b!==B.Z){s=m.w.a
if(new A.L(s,A.o(s).i("L<2>")).N(0,new A.o7(a)))return"a GIRO is paid from it"
if(new A.L(j,A.o(j).i("L<2>")).N(0,new A.o8(a)))return"a loan is paid from it"
j=m.as.a
s=A.o(j).i("L<2>")
if(new A.eU(new A.L(j,s),s.i("h<bv>(h.E)").a(new A.o9()),s.i("eU<h.E,bv>")).N(0,new A.oa(a)))return"a planned item uses it"}return A.eA(A.C0(i,b,c))},
cU(a,b,c){B.a.n(this.c,new A.W("conflict:"+a.a,B.H,b,"Changed on two devices: "+c+" was changed since; check it again."))
return new A.br()},
iw(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.b(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to change")
q=i.h(0,"startDate")
q.toString
p=A.av(A.b(q))
q=i.h(0,"startFrom")
q.toString
o=A.tj(t.f.a(q).F(0,t.N,t.X))
q=r.w
n=i.h(0,"baseStartDate")
n.toString
if(!q.I(0,A.av(A.b(n))))return j.cU(a,h,r.b+"'s history start")
switch(o.a.a){case 0:return j.p(a,B.h,"a folder year is taken only at import")
case 1:q=j.fx
n=A.N(q)
m=A.aU(new A.p(q,n.i("l(1)").a(new A.nz(o,h)),n.i("p<1>")),t.v)
if(m==null||!m.c.I(0,p))return j.p(a,B.h,"start not changed: not a statement of "+r.b+"'s")
break
case 2:break}l=r.lk(p,o).mO(p,o)
k=A.eA(l)
if(k!=null)return j.p(a,B.h,"start not changed: "+k)
s.j(0,h,l)
if(r.db!=null||j.c3(h).length!==0)j.ew(B.lB)
return new A.D()},
ip(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.b(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to close")
if(r.cx!=null)return j.p(a,B.f,r.b+" was replaced by a newer card")
if(!J.a1(i.h(0,"closed"),!0)){if(r.CW==null)return j.p(a,B.f,r.b+" is not closed")
s.j(0,h,r.h2(!0))
return new A.D()}if(r.CW!=null)return j.p(a,B.f,r.b+" is already closed")
if(r.d===B.y)return j.p(a,B.h,"a cash wallet is never closed")
for(q=j.fx,p=q.length,o=null,n=0;n<q.length;q.length===p||(0,A.n)(q),++n){m=q[n]
if(m.b===h)if(o!=null){l=m.d
l=A.f(l.a,l.b,l.c).l(0,A.f(o.a,o.b,o.c))>0}else l=!0
else l=!1
if(l)o=m.d}if(o==null)return j.p(a,B.h,r.b+" has no statement to close after")
q=i.h(0,"after")
q.toString
k=A.av(A.b(q))
if(!k.I(0,o))return j.cU(a,h,r.b+"'s latest statement")
s.j(0,h,r.l9(k))
return new A.D()},
iQ(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"old")
if(typeof j!="string")return l.p(a,B.h,"a card replacement names the old card")
s=l.r
r=s.a
q=r.h(0,j)
if(q==null)return l.p(a,B.f,"no account "+j)
if(J.a1(k.h(0,"undo"),!0)){if(q.cx==null)return l.p(a,B.f,q.b+" is not replaced")
p=l.aV(j)
s.j(0,j,q.hG(null,null))
l.ew(A.kw([p],t.N))
return new A.D()}o=k.h(0,"new")
n=k.h(0,"from")
if(typeof o!="string"||typeof n!="string")return l.p(a,B.h,"a card replacement names the newer card and the date")
m=r.h(0,o)
A:{if(m==null){r="no account "+o
break A}r=q.cx
if(r!=null){r=q.b+" is already replaced"
break A}if(o===j){r="a card cannot replace itself"
break A}r=A.C_(q.d,m.d)
if(!r){r="only a card or a bank account of the same type is replaced"
break A}if(A.hn(q.c)!==A.hn(m.c)&&!J.a1(k.h(0,"moved"),!0)){r="the accounts are of different banks"
break A}r=q.e!==m.e||q.r!==m.r
if(r){r="the accounts differ in currency or book"
break A}r=l.aV(o)
if(r===j){r=m.b+" was itself replaced by "+q.b
break A}r=null
break A}if(r!=null)return l.p(a,B.h,"card not replaced: "+r)
s.j(0,j,q.hG(o,A.av(n)))
l.ew(A.kw([j],t.N))
return new A.D()},
ew(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null
t.dO.a(c6)
s=new A.nR(c4,c6)
r=c4.b
q=r.a
p=A.o(q).i("L<2>")
o=p.i("p<h.E>")
q=A.E(new A.p(new A.L(q,p),p.i("l(h.E)").a(new A.nP(c6)),o),o.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.n)(q),++n){m=q[n]
o=m.a
l=s.$2("m:"+o,m.c)
if(l!=null)r.j(0,o,m.cb(l))}for(r=c4.fx,k=0;k<r.length;++k){j=r[k]
i=s.$2("s:"+j.a,j.b)
if(i!=null){B.a.j(r,k,j.cb(i))
q=$.Ew()
p=q.a
h=p.get(c4)
if(h!=null&&k<h.a[0]){o=h.a
o=q.$ti.i("1?").a(new A.ev([k,o[1],o[2],o[3]]))
p.set(c4,o)}}}for(r=c4.fy,k=0;k<r.length;++k){g=r[k]
q=g.a
f=s.$2("n:"+q,g.b)
if(f!=null)B.a.j(r,k,new A.cz(q,f,g.c,g.d,g.e,g.f,g.r,g.w))}r=c4.id
q=A.o(r).i("L<2>")
q=A.E(new A.L(r,q),q.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.n)(q),++n){e=q[n]
o=e.a
d=s.$2("f:"+o,e.b)
if(d!=null)r.j(0,o,new A.dH(o,d,e.c,e.d,e.e,e.f,e.r))}r=c4.k2
q=A.o(r).i("aa<1,2>")
q=A.E(new A.aa(r,q),q.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.n)(q),++n){c=q[n]
b=c.b
o=c.a
a=s.$2("p:"+o,b.c)
if(a!=null)r.j(0,o,new A.cO(b.a,b.b,a,b.d))}r=c4.e
q=r.a
p=A.o(q).i("L<2>")
p=A.E(new A.L(q,p),p.i("h.E"))
o=p.length
r=r.$ti
a0=r.i("ad.K")
r=r.i("ad.V")
n=0
for(;n<p.length;p.length===o||(0,A.n)(p),++n){a1=p[n]
a2=a1.r
if(a2==null)continue
a3=a1.a
a4=s.$2("r:"+a3,a2)
if(a4!=null){a0.a(a3)
a5=r.a(new A.ba(a3,a1.b,a1.c,a1.d,a1.e,a1.f,a4,a1.w,a1.x,a1.y,a1.z,a1.Q))
q.j(0,a3,a5)}}r=c4.w
q=r.a
p=A.o(q).i("L<2>")
p=A.E(new A.L(q,p),p.i("h.E"))
o=p.length
a0=t.N
a3=t.X
r=r.$ti
a5=r.i("ad.K")
r=r.i("ad.V")
n=0
for(;n<p.length;p.length===o||(0,A.n)(p),++n){a6=p[n]
a7=a6.a
a8=s.$2("g:"+a7,a6.c)
if(a8!=null){a9=a6.J()
b0=A.i5(a0,a3)
b0.a1(0,a9)
b0.j(0,"fromAccountId",a8)
b0=A.BN(b0)
a5.a(a7)
r.a(b0)
q.j(0,a7,b0)}}r=c4.r
q=r.a
p=A.o(q)
o=p.i("L<2>")
a5=o.i("h.E")
a7=A.E(new A.L(q,o),a5)
a9=a7.length
r=r.$ti
b0=r.i("ad.K")
r=r.i("ad.V")
n=0
for(;n<a7.length;a7.length===a9||(0,A.n)(a7),++n){b1=a7[n]
b2=b1.as
b3=b2==null
b4=b3?c5:b2.w
if(b3||b4==null)continue
b3=b1.a
b5=s.$2("l:"+b3,b4)
if(b5!=null){b6=b2.J()
b7=A.i5(a0,a3)
b7.a1(0,b6)
b7.j(0,"payingAccountId",b5)
b7=b1.h3(A.Af(b7))
b0.a(b3)
r.a(b7)
q.j(0,b3,b7)}}for(a3=c4.RG,k=0;k<a3.length;++k){b8=a3[k]
b9=s.$2("d:"+k,b8.a)
if(b9!=null)B.a.j(a3,k,new A.fA(b9,b8.b,b8.c))}a0=A.w(a0,t.aa)
for(p=new A.a2(q,q.r,q.e,p.i("a2<2>"));p.m();){a3=p.d
if(a3.cx==null){a7=a3.a
a9=a3.db
a0.j(0,a7,a9==null?new A.t(a3.w,a3.ay):new A.t(a9,a3.dx))}}for(p=o.i("l(h.E)").a(new A.nQ()),a3=new A.L(q,o).gv(0),p=new A.S(a3,p,o.i("S<h.E>"));p.m();){a7=a3.gt()
c0=c4.aV(a7.a)
a9=a7.db
c1=a9==null?new A.t(a7.w,a7.ay):new A.t(a9,a7.dx)
c2=a0.h(0,c0)
if(c2!=null){a7=c1.a
a9=c2.a
a9=A.f(a7.a,a7.b,a7.c).l(0,A.f(a9.a,a9.b,a9.c))<0
a7=a9}else a7=!1
if(a7)a0.j(0,c0,c1)}p=A.E(new A.L(q,o),a5)
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.n)(p),++n){b1=p[n]
a3=b1.db
a5=a3==null
c1=a5?new A.t(b1.w,b1.ay):new A.t(a3,b1.dx)
if(b1.cx!=null)c3=c1
else{a3=a0.h(0,b1.a)
c3=a3==null?c1:a3}a3=c3.a
a7=b1.w
a9=!1
if(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c){a7=c3.b
a7=B.z.b8(a7==null?c5:a7.J(),c5)
b3=b1.ay
if(a7===B.z.b8(b3==null?c5:b3.J(),c5)){a7=c1.a
a5=a5===(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c)}else a5=a9}else a5=a9
if(a5)continue
a5=c1.a
a5=a5.a===a3.a&&a5.b===a3.b&&a5.c===a3.c?c5:c1
a5=b1.hF(a3,c3.b,a5)
a3=b0.a(b1.a)
r.a(a5)
q.j(0,a3,a5)}},
iu(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a9.e,a6=a5.h(0,"id"),a7=a5.h(0,"from"),a8=a5.h(0,"to")
if(typeof a6!="string"||typeof a7!="string"||typeof a8!="string")return a4.p(a9,B.h,"a move names the account and both books")
s=a4.r
r=s.a
q=r.h(0,a6)
if(q==null)return a4.p(a9,B.f,"no account "+a6)
if(q.r!==a7)return a4.cU(a9,a6,q.b+"'s book")
p=a4.md(a6,a8)
if(p!=null)return a4.p(a9,B.h,"account not moved: "+p)
o=t.N
n=A.kw([a6],o)
for(m=a4.c3(a6),l=m.length,k=0;k<m.length;m.length===l||(0,A.n)(m),++k)n.n(0,m[k].a)
for(m=A.eu(n,n.r,n.$ti.c),l=t.X,s=s.$ti,j=s.i("ad.K"),s=s.i("ad.V"),i=m.$ti.c;m.m();){h=m.d
if(h==null)h=i.a(h)
g=r.h(0,h).J()
f=A.i5(o,l)
f.a1(0,g)
f.j(0,"bookId",a8)
f=A.zW(f)
j.a(h)
s.a(f)
r.j(0,h,f)}s=a4.b
r=s.a
o=A.o(r).i("L<2>")
m=o.i("h.E")
l=A.E(new A.L(r,o),m)
j=l.length
i="owed-to:"+a8
h="held-by:"+a8
k=0
for(;k<l.length;l.length===j||(0,A.n)(l),++k){e=l[k]
if(!n.B(0,e.c)||e.b!==a7)continue
g=e.a
s.j(0,g,e.m1(a8))
g="forbook:"+g
d=r.h(0,g+":expense")
if(d!=null){f=e.ch===g
c=d}else{c=null
f=!1}if(f)s.j(0,c.a,c.dU(c.b,i,a8))
b=r.h(0,g+":income")
if(b!=null){f=e.ch===g
c=b}else{c=null
f=!1}if(f)s.j(0,c.a,c.dU(c.b,h,a8))
f=A.E(new A.L(r,o),m)
a=f.length
a0=g+":refund:"
g=e.ch===g
a1=0
for(;a1<f.length;f.length===a||(0,A.n)(f),++a1){a2=f[a1]
a3=a2.a
if(B.c.ao(a3,a0)&&g)s.j(0,a3,a2.dU(a2.b,i,a8))}}s=a4.e
r=s.a
o=A.o(r).i("L<2>")
o=A.E(new A.L(r,o),o.i("h.E"))
m=o.length
s=s.$ti
l=s.i("ad.K")
s=s.i("ad.V")
k=0
for(;k<o.length;o.length===m||(0,A.n)(o),++k){a2=o[k]
j=a2.r
if(n.B(0,j)&&a2.b===a7){i=a2.a
l.a(i)
j=s.a(new A.ba(i,a8,a2.c,a2.d,a2.e,a2.f,j,a2.w,a2.x,a2.y,a2.z,a2.Q))
r.j(0,i,j)}}return new A.D()},
md(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r.a.h(0,a)
if(g==null)return"no account "+a
if(g.cx!=null)return g.b+" was replaced by a newer number; move that one"
if(g.d===B.y)return"a cash wallet stays in its book"
if(h.aO(b)==null)return"no book "+b
s=g.r
if(b===s)return g.b+" is already in that book"
r=h.bO(b)
q=t.N
p=A.kw([a],q)
for(o=h.c3(a),n=o.length,m=0;m<o.length;o.length===n||(0,A.n)(o),++m)p.n(0,o[m].a)
q=A.ab(q)
for(o=h.b.a,n=A.o(o).i("a2<2>"),l=new A.a2(o,o.r,o.e,n);l.m();){k=l.d
if(k.d===B.X&&k.ay!=null){k=k.ay
k.toString
q.n(0,k)}}for(o=new A.a2(o,o.r,o.e,n),j=0;o.m();){n=o.d
if(!p.B(0,n.c))continue
l=n.b
if(l===b)return"transactions of "+g.b+" are already in that book"
if(l!==s)continue
if(h.er(n.Q,r))++j
l=n.ch
k=n.a
i=l==="forbook:"+k
n=n.at
if(n===b)return"a transaction of it is paid for that book; put it back first"
if(n!=null&&!i)return"a transaction of it is linked to another book; put it back first"
if(i&&q.B(0,k))return"a transaction of it paid for another book is settled"}if(j>0){s=j===1?"transaction is":"transactions are"
return""+j+" "+s+" filed under categories that book does not use"}for(q=h.e.a,q=new A.a2(q,q.r,q.e,A.o(q).i("a2<2>"));q.m();){o=q.d
if(!p.B(0,o.r)||o.b!==s)continue
n=o.y
if(n===b)return"a rule files its transactions for that book"
if(n==null&&h.er(o.e,r))return"a rule files its transactions under categories that book does not use"}for(s=h.w.a,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>"));s.m();){q=s.d
if(p.B(0,q.c)&&h.er(q.f,r))return"a GIRO from it is filed under categories that book does not use"}return null},
iv(a){var s,r,q,p=this,o=a.e,n=o.h(0,"id")
if(typeof n!="string")return p.p(a,B.h,"a removal names the account")
if(J.a1(o.h(0,"undo"),!0)){s=o.h(0,"account")
s.toString
r=A.zW(t.f.a(s).F(0,t.N,t.X))
if(r.a!==n||p.r.a.C(n))return p.p(a,B.v,"account "+n+" is here")
s=r.r
if(p.aO(s)==null)return p.p(a,B.f,"no book "+s)
q=A.eA(r)
if(q!=null)return p.p(a,B.h,"account not put back: "+q)
p.r.j(0,n,r)
return new A.D()}q=p.mq(n)
if(q!=null)return p.p(a,B.h,"account not removed: "+q)
p.r.Y(0,n)
return new A.D()},
mq(a){var s,r,q,p,o,n=this,m=n.r.a,l=m.h(0,a)
if(l==null)return"no account "+a
if(l.d===B.y)return"a cash wallet is never removed"
if(l.cx!=null||n.c3(a).length!==0)return"it is one of the numbers of a replaced card"
s=new A.op()
r=n.fx
q=A.N(r)
p=new A.p(r,q.i("l(1)").a(new A.od(a)),q.i("p<1>")).gq(0)
if(p>0)return"it has "+A.i(s.$2(p,"statement"))
r=n.b.a
q=A.o(r).i("L<2>")
o=new A.p(new A.L(r,q),q.i("l(h.E)").a(new A.oe(a)),q.i("p<h.E>")).gq(0)
if(o>0)return"it has "+A.i(s.$2(o,"transaction"))
if(B.a.N(n.fy,new A.of(a)))return"it has a bill from a statement notice"
s=n.e.a
if(new A.L(s,A.o(s).i("L<2>")).N(0,new A.oh(a)))return"a rule is for its transactions"
s=n.w.a
if(new A.L(s,A.o(s).i("L<2>")).N(0,new A.oi(a)))return"a GIRO is paid from it"
if(new A.L(m,A.o(m).i("L<2>")).N(0,new A.oj(a)))return"a loan is paid from it"
m=n.as.a
s=A.o(m).i("L<2>")
if(new A.eU(new A.L(m,s),s.i("h<bv>(h.E)").a(new A.ok()),s.i("eU<h.E,bv>")).N(0,new A.ol(a)))return"a planned item uses it"
m=n.id
if(new A.L(m,A.o(m).i("L<2>")).N(0,new A.om(a)))return"a statement file is kept for it"
m=n.k2
if(new A.L(m,A.o(m).i("L<2>")).N(0,new A.on(a)))return"a pick for a hidden last 4 names it"
m=n.to.a
if(new A.L(m,A.o(m).i("L<2>")).N(0,new A.oo(a)))return"a balance you stated names it"
m=n.aC
if(m.w.C(a))return"it is marked source only"
m=m.b
if(new A.L(m,A.o(m).i("L<2>")).N(0,new A.og(a)))return"a subscription is paid from it"
return null},
er(a,b){var s,r=this.d.a.h(0,a)
A:{if(r!=null){s=r.b!==b
break A}s=!1
break A}return s},
bM(a,b){var s,r,q=this.ch
q.Y(0,a)
s=this.r.a.h(0,b)
if((s==null?null:s.cx!=null)!==!0)return b
r=this.aV(b)
q.j(0,a,b)
return r},
it(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="startDate",c="startFrom",b=a0.e,a=b.h(0,"id")
a.toString
A.b(a)
s=f.r
r=s.a.h(0,a)
if(r==null)return f.p(a0,B.f,"no account "+a+" to change")
q=b.h(0,"driveFolder")
q.toString
p=t.f
o=t.N
n=t.X
m=A.BM(p.a(q).F(0,o,n))
q=r.ch
q=q==null?e:q.a
if(q==A.m(b.h(0,"baseFolderId"))){q=r.w
l=b.h(0,"baseStartDate")
l.toString
l=!q.I(0,A.av(A.b(l)))
q=l}else q=!0
if(q)return f.cU(a0,a,r.b+"'s Drive folder")
if(b.h(0,d)==null)k=e
else{q=b.h(0,d)
q.toString
k=A.av(A.b(q))}if(b.h(0,c)==null)j=e
else{q=b.h(0,c)
q.toString
j=A.tj(p.a(q).F(0,o,n))}q=r.ay
i=(q==null?e:q.a)===B.ak
if(i!==(k!=null)||i!==(j!=null))return f.p(a0,B.h,"folder not linked: a start moves with the link only when it is from a folder year")
if(j!=null)q=j.a!==B.ak||j.c!==m.b
else q=!1
if(q)return f.p(a0,B.h,"folder not linked: the start must name the new folder")
h=r.ln(m,k,j)
g=A.eA(h)
if(g!=null)return f.p(a0,B.h,"folder not linked: "+g)
s.j(0,a,h)
return new A.D()},
iF(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.b(q)
if(s.aO(q)!=null)return s.p(a,B.v,"book "+q+" already exists")
r=r.h(0,"kind")
r.toString
A.b(r)
if(r==="member"&&!s.p3.a.C(q))return s.p(a,B.f,"no household member "+q+" for a book")
s.f.j(0,q,r)
return new A.D()},
kc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.e.h(0,"id")
f.toString
A.b(f)
s=this.e
r=s.a.h(0,f)
if(r==null)return this.p(a,B.f,"no rule "+f+" to confirm")
q=a.f.H()
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
s.j(0,f,new A.ba(p,o,n,m,l,!0,k,j,i,h,g,q))
return new A.D()},
kd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="memberId",c=a.e,b=c.h(0,"id")
b.toString
A.b(b)
s=e.e
r=s.a.h(0,b)
if(r==null)return e.p(a,B.f,"no rule "+b+" to change")
q=c.h(0,"pattern")
q.toString
p=B.c.G(A.b(q))
o=A.m(c.h(0,"categoryId"))
q=A.C("\\s+",!0,!1)
if(B.c.G(A.a4(p.toUpperCase(),q," ")).length===0)return e.p(a,B.f,"rule "+b+" needs a payee to match")
q=c.h(0,"type")
q.toString
n=A.af(B.as,A.b(q),t.v_)
q=r.y
m=q==null
if(!m&&n!==B.k)return e.p(a,B.f,"rule "+b+" files expenses for another book")
l=r.w
k=e.fJ(b,n,o,l,m?r.b:q)
if(k!=null)return e.p(a,B.f,k)
j=c.C(d)?A.m(c.h(0,d)):r.x
if(j!=null&&!e.p3.a.C(j))return e.p(a,B.f,"rule "+b+" names unknown member "+j)
m=A.he(c.h(0,"appliesToNew"))
i=r.a
h=r.b
g=r.f
f=r.r
if(m==null)m=r.z
s.j(0,b,new A.ba(i,h,p,n,o,g,f,l,j,q,m,r.Q))
return new A.D()},
kf(a){var s=a.e.h(0,"id")
s.toString
A.b(s)
if(this.e.Y(0,s)==null)return this.p(a,B.f,"no rule "+s+" to remove")
this.ch.Y(0,"r:"+s)
return new A.D()},
iU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="memberId",e="actionId",d=a.e,c=d.h(0,"movementId")
c.toString
A.b(c)
s=g.b
r=s.a.h(0,c)
if(r==null)return g.p(a,B.f,"no movement "+c+" to classify")
q=d.h(0,"type")
q.toString
p=A.af(B.as,A.b(q),t.v_)
o=A.m(d.h(0,"categoryId"))
q=o==null
if(q)n=p===B.k||p===B.w||p===B.G
else n=!1
if(n)return g.p(a,B.h,"filing "+c+" as "+p.b+" needs a category")
n=!q
if(n&&!g.d.a.C(o))return g.p(a,B.f,"unknown category "+o)
if(n&&g.d.a.h(0,o).b!==g.bO(r.b))return g.p(a,B.f,o+" does not belong to book "+r.b)
if(g.fs(r))return g.p(a,B.ac,c+" is paid for another book; undo that first (DUP-13)")
m=A.DS(p,r.e,g.r.a.h(0,r.c))
if(m!=null)return g.p(a,B.f,m)
if(!(p===B.k||p===B.w||p===B.G))n=r.ch!=null||r.ay!=null||r.cx!=null
else n=!1
if(n)return g.p(a,B.N,c+" is already paired or linked")
l=d.C(f)
k=A.m(d.h(0,f))
if(k!=null&&!g.p3.a.C(k))return g.p(a,B.f,"unknown member "+k)
n=r.dx
j=d.h(0,"baseVersion")
j.toString
if(n!==A.P(j)){s=r.Q
q=q?p.b:o
B.a.n(g.c,new A.W("conflict:"+a.a,B.H,c,"Changed since it was filed elsewhere: kept "+A.i(s)+", the other change chose "+q+"."))
return new A.br()}i=l?r.hE(k):r
s.j(0,c,i.hD(o,i.as,p,n+1))
h=A.m(d.h(0,"ruleId"))
if(h==null)h=typeof d.h(0,e)=="string"?"action:"+A.i(d.h(0,e)):null
s=g.p1
if(h==null)s.Y(0,c)
else{a.f.H()
s.j(0,c,new A.k7())}return new A.D()},
kG(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"movementId")
j.toString
A.b(j)
s=l.b
r=s.a.h(0,j)
if(r==null)return l.p(a,B.f,"no movement "+j+" to put back")
q=A.m(k.h(0,"categoryId"))
if(q!=null&&!l.d.a.C(q))return l.p(a,B.f,"unknown category "+q)
p=A.m(k.h(0,"memberId"))
if(p!=null&&!l.p3.a.C(p))return l.p(a,B.f,"unknown member "+p)
o=r.dx
n=k.h(0,"baseVersion")
n.toString
if(o!==A.P(n)){B.a.n(l.c,new A.W("conflict:"+a.a,B.H,j,"Changed since it was filed; "+j+" was left as it is."))
return new A.br()}m=A.m(k.h(0,"type"))
n=m==null?null:A.af(B.as,m,t.v_)
s.j(0,j,r.hD(q,p,n,o+1))
l.p1.Y(0,j)
return new A.D()},
kg(a){var s,r,q=a.e.h(0,"id")
q.toString
A.b(q)
s=this.e
r=s.a.h(0,q)
if(r==null)return this.p(a,B.f,"no rule "+q+" to take back")
s.j(0,q,new A.ba(r.a,r.b,r.c,r.d,r.e,!1,r.r,r.w,r.x,r.y,r.z,null))
return new A.D()},
jm(a){var s=a.e.h(0,"count")
if(!A.cD(s)||s<0)return this.p(a,B.h,"a target is a whole number of transactions, 0 or more")
return new A.D()},
jK(a){var s,r=a.e,q=r.h(0,"id")
q.toString
A.b(q)
r=r.h(0,"name")
r.toString
s=B.c.G(A.b(r))
r=this.p3
if(r.a.C(q))return this.p(a,B.v,"member "+q+" already exists")
if(s.length===0)return this.p(a,B.f,"member "+q+" needs a name")
r.j(0,q,new A.fO(q,s))
return new A.D()},
jL(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.b(o)
s=this.p3
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no member "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.c.G(A.b(p))
if(q.length===0)return this.p(a,B.f,"member "+o+" needs a name")
s.j(0,o,new A.fO(r.a,q))
return new A.D()},
iD(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"movementId")
k.toString
A.b(k)
s=A.m(l.h(0,"memberId"))
r=m.b
q=r.a.h(0,k)
if(q==null)return m.p(a,B.f,"no movement "+k+" to attribute")
p=s==null
if(!p&&!m.p3.a.C(s))return m.p(a,B.f,"unknown member "+s)
o=q.dx
n=l.h(0,"baseVersion")
n.toString
if(o!==A.P(n)){r=q.as
if(r==null)r="no one"
p=p?"no one":s
B.a.n(m.c,new A.W("conflict:"+a.a,B.H,k,"Changed on two devices: kept "+r+", the other device chose "+p+"."))
return new A.br()}r.j(0,k,q.hE(s).eI(o+1))
return new A.D()},
ki(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"primaryId")
l.toString
A.b(l)
m=m.h(0,"duplicateId")
m.toString
A.b(m)
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
break A}r=q.f.I(0,p.f)
if(!r){r="the amounts differ"
break A}r=q.cx!=null||p.cx!=null
if(r){r="one of them is already linked"
break A}r=n.dX(m).ga2(0)
if(!r){r=m+" already has messages linked to it"
break A}r=!0
if(p.ch==null)if(p.ay==null){r=n.hr(p).a.l(0,$.M())
r=r!==0}if(r){r=m+" is already paired, linked or refunded"
break A}r=p.CW
if(r!=null){r=m+" is verified by a statement line"
break A}if(p.y.d&&!q.y.d){r=m+" is verified and "+l+" is not"
break A}r=n.dQ.B(0,A.nN(l,m))
if(r){r="the owner said they are different payments"
break A}r=null
break A}if(r!=null)return n.p(a,B.v,m+" not linked to "+l+": "+r)
s.j(0,m,p.hH(l))
return new A.D()},
kl(a){var s,r,q=a.e,p=q.h(0,"primaryId")
p.toString
A.b(p)
q=q.h(0,"duplicateId")
q.toString
A.b(q)
s=this.b
r=s.a.h(0,q)
if(r==null||r.cx!==p)return this.p(a,B.f,q+" is not linked to "+p)
s.j(0,q,r.hH(null))
this.dQ.n(0,A.nN(p,q))
return new A.D()},
iP(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"outflowId")
h.toString
A.b(h)
s=i.h(0,"inflowId")
s.toString
A.b(s)
r=j.b
q=r.a
p=q.h(0,h)
o=q.h(0,s)
q=p==null
if(q||o==null)return j.p(a,B.f,"no movement "+(q?h:s)+" to pair")
q=p.dx
n=i.h(0,"outflowVersion")
n.toString
if(q===A.P(n)){n=o.dx
m=i.h(0,"inflowVersion")
m.toString
m=n!==A.P(m)
n=m}else n=!0
if(n){B.a.n(j.c,new A.W("conflict:"+a.a,B.H,h,"Changed since the card bill payment was proposed; "+h+" and "+s+" were left as they are."))
return new A.br()}l=new A.nE()
A:{n=j.r.a
m=n.h(0,p.c)
m=m==null?null:m.gaP()
m=m!==!0
if(m){n=h+" is not on a bank account"
break A}n=n.h(0,o.c)
n=(n==null?null:n.d)!==B.x
if(n){n=s+" is not on a card"
break A}n=p.e!==B.q||o.e!==B.p
if(n){n="the directions are not a payment out and a credit in"
break A}n=p.f.I(0,o.f)
if(!n){n="the amounts differ"
break A}n=!l.$1(p)||!l.$1(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.N,"not a card bill payment: "+n)
k="bill:"+h
r.j(0,h,p.dL(k,B.U,q+1))
r.j(0,s,o.dL(k,B.U,o.dx+1))
return new A.D()},
hr(a){var s=this.b.c.h(0,a.a)
return s==null?A.a6($.M(),a.f.b):s},
hR(a){var s,r,q,p,o,n,m,l=A.a6($.M(),a.f.b)
for(s=this.eS(a.b),r=J.T(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=a.a;s.m();){p=r.gt()
if(p.d===B.X&&p.ay===q){p=p.f
o=p.b
n=l.b
if(o!==n)A.j(A.ae(n,o))
p=l.a.D(0,p.a)
l=new A.v(p,n)
m=B.e.h(0,n)
if(m==null)A.j(A.y(n,"currency","is not a supported currency"))
if((p.b<=0?0:Math.max(p.gA().b,0))>m)A.j(A.A(n+" allows "+A.i(m)+" decimal places",p.k(0),null))}}return l},
jY(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a3.e,a2=a1.h(0,"refundId")
a2.toString
A.b(a2)
s=a1.h(0,"sourceId")
s.toString
A.b(s)
r=a.b
q=r.a
p=q.h(0,a2)
o=q.h(0,s)
n=p==null
if(n||o==null)return a.p(a3,B.f,"no movement "+(n?a2:s)+" to link")
n=p.dx
m=a1.h(0,"refundVersion")
m.toString
if(n===A.P(m)){m=o.dx
l=a1.h(0,"sourceVersion")
l.toString
l=m!==A.P(l)
m=l}else m=!0
if(m){B.a.n(a.c,new A.W("conflict:"+a3.a,B.H,a2,"Changed since the refund was proposed; "+a2+" and "+s+" were left as they are."))
return new A.br()}m=a1.h(0,"cancellation")
m.toString
A.d0(m)
l=o.d
if(l===B.Y){k=o.ch
k=k==null?a0:B.c.ao(k,"forbook:")
j=k===!0}else j=!1
i=j?a.hR(o):a.hr(o)
A:{k=p.e
if(k!==B.p){l=a2+" is not money coming back"
break A}k=p.d
k=k!=null&&k!==B.G
if(k){l=a2+" is already filed"
break A}k=p.ay!=null||p.cx!=null
if(k){l=a2+" is already linked"
break A}k=o.cx
if(k!=null){l=s+" is another message about a purchase already here"
break A}l=l!==B.k&&!j||o.e!==B.q
if(l){l=s+" is not a purchase"
break A}if(j&&m){l="a purchase paid for another book is refunded, not cancelled"
break A}l=o.c
k=p.c
if(l!==k){l="they are on different accounts"
break A}l=o.f
k=p.f
if(l.b!==k.b){l="they are in different currencies"
break A}h=i.D(0,k).a.l(0,l.a)
if(h>0){l="it would refund more than the purchase ("+l.k(0)+", "+i.k(0)+" already refunded)"
break A}h=!1
if(m)if(k.I(0,l)){l=i.a.l(0,$.M())
l=l!==0}else l=!0
else l=h
if(l){l="a cancellation reverses the whole purchase, once"
break A}l=a0
break A}if(l!=null)return a.p(a3,B.N,"refund not linked: "+l)
if(j){m=o.ch
m.toString
l=o.at
l.toString
g=q.h(0,m+":expense")
r.j(0,a2,p.f5(a0,l,m,B.X,n+1))
r.j(0,a2,q.h(0,a2).lb(s))
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
r.j(0,a2,A.bL(q,n,k,l,d,c,a0,B.p,h,a2,s,a0,a0,m,a0,e,a0,new A.dx("operation",a3.a,a3.f,f.d),a0,a0,B.G,1))
return new A.D()}b=m?"cancel:"+s:a0
r.j(0,a2,p.lp(s,b,B.G,n+1))
if(m)r.j(0,s,o.lj(b,o.dx+1))
return new A.D()},
kE(a){var s,r,q,p,o,n,m,l,k,j=this,i=" is not on a bank account",h=a.e,g=h.h(0,"outflowId")
g.toString
A.b(g)
s=h.h(0,"inflowId")
s.toString
A.b(s)
r=j.b
q=r.a
p=q.h(0,g)
o=q.h(0,s)
q=p==null
if(q||o==null)return j.p(a,B.f,"no movement "+(q?g:s)+" to pair")
q=p.dx
n=h.h(0,"outflowVersion")
n.toString
if(q===A.P(n)){n=o.dx
m=h.h(0,"inflowVersion")
m.toString
m=n!==A.P(m)
n=m}else n=!0
if(n){B.a.n(j.c,new A.W("conflict:"+a.a,B.H,g,"Changed since the transfer was proposed; "+g+" and "+s+" were left as they are."))
return new A.br()}l=new A.o0(j)
A:{n=p.e!==B.q||o.e!==B.p
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
n=n.b===m.b&&!n.I(0,m)
if(n){n="the amounts differ"
break A}n=!A.Ab(p)||!A.Ab(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.N,"not a transfer: "+n)
k="transfer:"+g
r.j(0,g,p.dL(k,B.L,q+1))
r.j(0,s,o.dL(k,B.L,o.dx+1))
return new A.D()},
jJ(a){var s,r,q,p=this,o=a.e,n=o.h(0,"movementId")
n.toString
A.b(n)
s=p.b
r=s.a.h(0,n)
if(r==null)return p.p(a,B.f,"no movement "+n+" to mark as a transfer")
q=r.dx
o=o.h(0,"baseVersion")
o.toString
if(q!==A.P(o)){B.a.n(p.c,new A.W("conflict:"+a.a,B.H,n,"Changed since it was marked as a transfer elsewhere; "+n+" was left as it is."))
return new A.br()}A:{o=p.r.a.h(0,r.c)
if(o==null)o=null
else o=o.gaP()||o.d===B.a5
o=o!==!0
if(o){o=n+" is not on a bank account"
break A}o=r.d
if(o!=null){o=n+" is already filed as "+o.b
break A}o=A.Ab(r)
if(!o){o=n+" is already paired or linked"
break A}o=null
break A}if(o!=null)return p.p(a,B.N,"not marked as a transfer: "+o)
s.j(0,n,r.ll(B.L,q+1))
return new A.D()},
kH(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a5.e,a4=a3.h(0,"movementId")
a4.toString
A.b(a4)
s=a2.b
r=s.a.h(0,a4)
if(r==null)return a2.p(a5,B.f,"no movement "+a4+" to unmark")
q=r.dx
a3=a3.h(0,"baseVersion")
a3.toString
if(q!==A.P(a3)){B.a.n(a2.c,new A.W("conflict:"+a5.a,B.H,a4,"Changed since it was put back to file elsewhere; "+a4+" was left as it is."))
return new A.br()}A:{a3=r.d
if(a3!==B.L){a3=a3==null?"not filed":"filed as "+a3.b
a3=a4+" is "+a3+", not marked as a transfer"
break A}a3=r.ch
if(a3!=null){a3=a4+" is already paired"
break A}a3=null
break A}if(a3!=null)return a2.p(a5,B.N,"not unmarked: "+a3)
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
s.j(0,a4,A.bL(o,m,k,p,g,e,d,n,j,a3,c,f,r.db,l,b,h,a1,i,a0,a,null,q).eI(q+1))
return new A.D()},
jo(a){var s,r,q=this,p=a.e.h(0,"movementId")
p.toString
A.b(p)
s=q.b.a.h(0,p)
if(s==null)return q.p(a,B.f,"no movement "+p+" to flag")
r=s.cx
if(r!=null)return q.p(a,B.f,p+" is another message about "+r+"; flag that one")
q.rx.aK(p,new A.nF(p,a))
return new A.D()},
jp(a){var s,r,q,p=a.e,o=p.h(0,"movementId")
o.toString
A.b(o)
p=p.h(0,"outcome")
p.toString
A.b(p)
s=this.rx
r=s.a.h(0,o)
q=p==="mine"
if(!q&&p!=="reported")return this.p(a,B.f,"a flag ends as mine or reported, not "+p)
p=r==null
if(p&&q)return new A.D()
if(p)return this.p(a,B.f,"no open flag on "+o)
if(q)s.Y(0,o)
else if(r.d==null)s.j(0,o,new A.ec(o,r.b,r.c,a.f))
return new A.D()},
jy(a){var s,r=a.e.h(0,"event")
r.toString
s=A.BO(t.f.a(r).F(0,t.N,t.X))
r=this.go
if(B.a.N(r,new A.nH(s)))return this.p(a,B.v,"message "+s.a+" is already held")
B.a.n(r,s)
return new A.D()},
jA(a){var s,r,q=a.e.h(0,"event")
q.toString
s=A.BO(t.f.a(q).F(0,t.N,t.X))
q=this.k3
r=s.a
if(q.C(r))return this.p(a,B.v,"message "+r+" is already held as suspicious")
q.j(0,r,s)
return new A.D()},
kA(a){var s=this,r=a.e.h(0,"eventKey")
r.toString
A.b(r)
if(!s.k3.C(r)||s.k4.B(0,r))return s.p(a,B.f,"no suspicious message "+r+" waiting to be checked")
s.k4.n(0,r)
return new A.D()},
jz(a){var s,r,q,p,o,n,m=a.e,l=m.h(0,"eventKey")
l.toString
A.b(l)
s=this.ok
if(B.a.N(s,new A.nI(l)))return this.p(a,B.v,"reminder "+l+" is already listed")
r=A.m(m.h(0,"amount"))
q=m.h(0,"sender")
q.toString
A.b(q)
p=A.m(m.h(0,"accountAlias"))
if(r==null)o=null
else{o=m.h(0,"currency")
o.toString
A.b(o)
o=A.a6(A.ah(r),o)}n=m.h(0,"receivedAtUtc")
n.toString
A.aC(A.bV(A.b(n)).H(),B.n)
if(m.h(0,"dueOn")==null)n=null
else{n=m.h(0,"dueOn")
n.toString
n=A.av(A.b(n))}B.a.n(s,new A.f6(l,q,p,o,n,J.a1(m.h(0,"failed"),!0)))
return new A.D()},
kt(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"fileId")
j.toString
A.b(j)
s=k.h(0,"accountId")
s.toString
A.b(s)
r=k.h(0,"name")
r.toString
A.b(r)
q=k.h(0,"size")
q.toString
q=B.Q.aD(A.ux(q))
p=k.h(0,"receivedAtUtc")
p.toString
p=A.bV(A.b(p)).H()
o=k.h(0,"source")
o.toString
n=new A.dH(j,s,r,q,p,A.b(o),null)
q=l.id
if(q.C(j))return l.p(a,B.v,"statement file "+j+" is already kept")
p=A.C("\\d{9,}",!0,!1)
if(p.b.test(r))return l.p(a,B.h,"a statement file name may not hold a full number")
if(!l.r.a.C(s))return l.p(a,B.f,"statement file "+j+" is for an unregistered account")
m=l.bM("f:"+j,s)
q.j(0,j,m===s?n:n.h8(m))
return new A.D()},
kv(a){var s,r,q,p,o=a.e,n=o.h(0,"fileId")
n.toString
A.b(n)
s=this.id
r=s.h(0,n)
if(r==null)return this.p(a,B.f,"no statement file "+n)
q=o.h(0,"attempt")
q.toString
B.Q.aD(A.ux(q))
q=o.h(0,"outcome")
q.toString
A.b(q)
p=A.m(o.h(0,"reason"))
A.m(o.h(0,"statementId"))
A.m(o.h(0,"readers"))
A.m(o.h(0,"reader"))
s.j(0,n,new A.dH(r.a,r.b,r.c,r.d,r.e,r.f,new A.tk(q,p)))
return new A.D()},
k9(a){var s,r,q,p,o=a.e,n=o.h(0,"id")
n.toString
A.b(n)
s=this.c
if(B.a.N(s,new A.nU(n)))return new A.D()
r=o.h(0,"reason")
r.toString
r=A.af(B.jA,A.b(r),t.CW)
q=o.h(0,"subjectId")
q.toString
A.b(q)
p=o.h(0,"explanation")
p.toString
B.a.n(s,new A.W(n,r,q,A.b(p)))
return new A.D()},
ka(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"itemId")
j.toString
A.b(j)
if(!B.a.N(B.iK,B.c.ghY(j)))return l.p(a,B.f,"only a missing statement or a reminder can be dismissed")
if(B.c.ao(j,"missing-statement:")){s=k.h(0,"reason")
if(s!=null&&!J.a1(s,"noActivity"))return l.p(a,B.h,"a missing statement is dismissed for no activity only")
r=B.c.aa(j,18)
q=B.c.eO(r,":")
p=A.av(B.c.aa(r,q+1))
o=A.m(k.h(0,"through"))
n=A.aC(a.f,B.n)
if(o==null)m=A.f(n.a,n.b,n.c).l(0,A.f(p.a,p.b,p.c))<0?p:n
else m=A.av(o)
if(q<=0||A.f(m.a,m.b,m.c).l(0,A.f(p.a,p.b,p.c))<0)return l.p(a,B.h,"no stretch "+j+" up to "+m.k(0)+" to dismiss")
k=l.RG
B.a.n(k,new A.fA(l.bM("d:"+k.length,B.c.X(r,0,q)),p,m))}l.R8.n(0,j)
return new A.D()},
kb(a){var s=a.e,r=s.h(0,"itemId"),q=s.h(0,"until")
if(typeof r!="string"||!B.c.ao(r,"missing-statement:")||typeof q!="string")return this.p(a,B.h,"only a missing statement is snoozed, to a day")
this.y1.j(0,r,A.av(q))
return new A.D()},
jZ(a){var s=a.a
if(!B.c.ao(s,"reminder:"))return this.p(a,B.h,"not a reminder key")
this.xr.n(0,s)
return new A.D()},
iJ(a){var s=a.e,r=s.h(0,"on"),q=s.h(0,"hour"),p=s.h(0,"minute")
if(!A.dX(r)||!A.cD(q)||!A.cD(p)||q<0||q>23||p<0||p>59)return this.p(a,B.h,"a brief time is on or off, an hour and a minute")
return new A.D()},
iI(a){var s=a.e.h(0,"date")
if(typeof s!="string"||a.a!=="brief:"+s)return this.p(a,B.h,"not a brief key")
this.lN.n(0,s)
return new A.D()},
iN(a){var s=a.e.h(0,"calendarId")
if(typeof s!="string"||s.length===0)return this.p(a,B.h,"no calendar id")
return new A.D()},
iM(a){var s=a.a
if(!B.c.ao(s,"calendar-event:"))return this.p(a,B.h,"not a calendar event key")
this.lO.n(0,s)
return new A.D()},
iO(a){var s,r,q=a.e,p=q.h(0,"subjectId"),o=q.h(0,"eventId"),n=q.h(0,"hash"),m=q.h(0,"n"),l=q.h(0,"removed"),k=A.ay(q.h(0,"date"))
if(typeof p!="string"||typeof o!="string"||typeof n!="string"||!A.cD(m)||!A.dX(l)||k==null)return this.p(a,B.h,"a calendar write names its subject, event, date and count")
if(a.a!=="calendar-sync:"+p+":"+A.i(m))return this.p(a,B.h,"not a calendar key")
s=this.lP
r=s.h(0,p)
r=r==null?null:r.a[3]
if((r==null?0:r)>=m)return new A.D()
s.j(0,p,new A.iV([k,o,n,m,l]))
return new A.D()},
k_(a){if(!A.dX(a.e.h(0,"on")))return this.p(a,B.h,"the reminders switch is on or off")
return new A.D()},
iE(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"billId")
k.toString
A.b(k)
s=A.m(l.h(0,"mark"))
l=s==null
r=l?null:A.A4(B.iF,t.d6).h(0,s)
if(!l&&r==null)return m.p(a,B.h,"no bill mark "+s)
q=A.JG(m)
p=A.N(q)
o=A.aU(new A.p(q,p.i("l(1)").a(new A.nC(k)),p.i("p<1>")),t.ok)
if(o==null)return m.p(a,B.f,"no bill "+k)
n=o.i_(A.aC(a.f,B.n))
if(!A.Jp(n,r)){l=l?"clear":s
return m.p(a,B.f,"a "+n.b+" bill cannot be marked "+l)}l=m.x2
if(r==null)l.Y(0,k)
else l.j(0,k,r)
return new A.D()},
jM(a){var s,r,q,p,o=this,n=null,m=a.e,l=m.h(0,"month")
l.toString
A.b(l)
m=m.h(0,"openItems")
m.toString
A.P(m)
s=$.B6().aj(l)
if(s==null||m<0)return o.p(a,B.h,"no month "+l+" to close")
r=s.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
q=A.Z(q,n,n)
if(2>=r.length)return A.a(r,2)
r=r[2]
r.toString
p=new A.K(q,A.Z(r,n,n)+1,1).bx(-1)
r=A.aC(a.f,B.n)
if(A.f(r.a,r.b,r.c).l(0,A.f(p.a,p.b,p.c))<=0)return o.p(a,B.f,"a month closes only after it ends")
r=o.ry
if(r.C(l))return o.p(a,B.v,l+" is already closed")
r.j(0,l,m)
return new A.D()},
kI(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"holdingId")
h.toString
A.b(h)
s=i.h(0,"name")
s.toString
A.b(s)
r=i.h(0,"kind")
r.toString
r=A.af(B.js,A.b(r),t.xN)
q=i.h(0,"bookId")
q.toString
A.b(q)
p=i.h(0,"value")
p.toString
p=A.aJ(t.f.a(p).F(0,t.N,t.X))
o=i.h(0,"asOf")
o.toString
o=A.av(A.b(o))
n=new A.ep(h,s,r,q,p,o,A.m(i.h(0,"accountId")))
for(i=j.to,s=i.a,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>")),m=null;s.m();){l=s.d
if(l.a===h)if(m!=null){r=l.f
q=m.f
q=A.f(r.a,r.b,r.c).l(0,A.f(q.a,q.b,q.c))>0
r=q}else r=!0
else r=!1
if(r)m=l}s=j.gcA()
k=A.La(n,j.r,new A.az(s,A.o(s).i("az<1>")),m,A.aC(a.f,B.n))
if(k!=null)return j.p(a,B.h,k)
i.j(0,new A.t(h,o),n)
return new A.D()},
k7(a){var s,r,q,p,o,n=this,m=null,l=A.aC(a.f,B.n),k=A.Gv(a.e,l),j=k.b,i=$.B6().aj(j),h=i!=null
if(h){s=i.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.Z(r,m,m)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
q=new A.K(r,A.Z(s,m,m)+1,1).bx(-1)}else{s=$.Ex()
q=s.b.test(j)?new A.K(A.Z(j,m,m),13,1).bx(-1):m}if(q==null||n.aO(k.a)==null||k.e.length===0)return n.p(a,B.h,"no report "+k.a+" "+j+" to keep")
s=A.f(l.a,l.b,l.c)
r=q.a
p=q.b
if(s.l(0,A.f(r,p,q.c))<=0)return n.p(a,B.f,"a report is kept once its period ends")
if(h&&A.E0(n,k.a,p,l,r).a===B.b0)return n.p(a,B.f,"a month is kept once it is final or finalised")
h=n.x1
s=A.N(h)
o=A.A6(new A.p(h,s.i("l(1)").a(new A.nT(k)),s.i("p<1>")),t.io)
s=k.c
r=o==null
p=r?m:o.c
if(s!==(p==null?0:p)+1)return n.p(a,B.v,"version "+s+" of "+j+" is out of turn")
if(!r&&A.Gx(o.e,k.e))return n.p(a,B.v,j+" has not changed since version "+o.c)
B.a.n(h,k)
return new A.D()},
ku(a){var s,r,q,p=this,o=a.e,n=o.h(0,"fileId")
n.toString
A.b(n)
o=o.h(0,"accountId")
o.toString
A.b(o)
s=p.id
r=s.h(0,n)
if(r==null)return p.p(a,B.f,"no statement file "+n)
if(!p.r.a.C(o))return p.p(a,B.f,"no account "+o)
q=r.r
if(q==null)q=null
else{q=q.a
q=q==="read"||q==="alreadyRead"}if(q===!0)return p.p(a,B.v,"statement file "+n+" is already read for "+r.b)
s.j(0,n,r.h8(p.bM("f:"+n,o)))
return new A.D()},
jE(a){var s,r,q,p,o,n,m,l=this,k={},j=a.e
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
if(n)m=B.by
else{p=p.h(0,l.aV(q))
p.toString
p=A.d([p],t.k)
B.a.a1(p,l.c3(l.aV(q)))
m=p}if(n||!B.a.N(m,new A.nL(k,o)))return l.p(a,B.f,"no account "+q+" of "+k.a+" ending in "+o)
p=l.k2
p.Y(0,k.a+"|"+r)
k=k.a
p.j(0,k+"|"+r,new A.cO(k,r,l.bM("p:"+k+"|"+r,q),a.a))
return new A.D()},
jD(a){var s=a.e.h(0,"pickKey"),r=this.k2,q=A.o(r).i("aa<1,2>"),p=A.aU(new A.p(new A.aa(r,q),q.i("l(h.E)").a(new A.nK(s)),q.i("p<h.E>")),t.ub)
if(p==null)return this.p(a,B.v,"no remembered pick "+A.i(s))
q=p.a
r.Y(0,q)
this.ch.Y(0,"p:"+q)
return new A.D()},
kj(a){var s,r=a.e
if(!B.lz.l5(r.gag())||!B.ly.B(0,r.h(0,"action")))return this.p(a,B.h,"a secret audit may hold only which secret, what and when")
s=r.h(0,"secretId")
s.toString
A.b(s)
s=r.h(0,"action")
s.toString
A.b(s)
s=r.h(0,"atUtc")
s.toString
A.bV(A.b(s)).H()
B.a.n(this.k1,new A.l2())
return new A.D()},
jH(a){var s,r,q=this,p="fromEvent",o=A.Je(q,q.a7,a)
if(o!=null)return q.p(a,B.h,o)
s=a.e.h(0,"fields")
if(a.d==="life.set"&&t.f.b(s)&&typeof s.h(0,p)=="string"){r=s.h(0,p)
r.toString
q.h7.n(0,A.b(r))}return new A.D()},
kw(a){var s,r,q,p,o,n,m,l,k=this,j=a.e,i=j.h(0,"statementId"),h=j.h(0,"loans"),g=typeof i=="string"?B.a.eL(k.fx,new A.nW(i)):-1
if(g<0||!t.j.b(h))return k.p(a,B.h,"no statement "+A.i(i)+" to give its loans")
s=null
try{r=A.d([],t.Ev)
for(j=J.T(h),p=t.f,o=t.N,n=t.X;j.m();){q=j.gt()
m=q
m.toString
J.bT(r,A.Cn(p.a(m).F(0,o,n)))}s=r}catch(l){r=k.p(a,B.h,"the loans of "+A.i(i)+" do not read")
return r}r=k.fx
if(!(g>=0&&g<r.length))return A.a(r,g)
j=r[g]
B.a.j(r,g,new A.c0(j.a,j.b,j.c,j.d,j.e,j.f,j.r,j.w,j.x,j.y,j.z,t.nd.a(s)))
return new A.D()},
jV(a){var s,r=a.e.h(0,"keys")
if(t.j.b(r)){s=J.ap(r)
s=s.ga2(r)||s.N(r,new A.nO())}else s=!0
if(s)return this.p(a,B.h,"a rejected proposal names its events by their hashes")
this.h7.a1(0,J.d4(r,t.N))
return new A.D()},
fs(a){var s,r=a.d,q=!0
if(!(r===B.Y&&a.at!=null))if(!(r===B.aX&&a.at!=null))if(!(r===B.w&&a.ch!=null&&a.at!=null))if(!(r===B.k&&a.ch!=null&&a.at!=null)){if(r===B.X){s=a.ch
s=s==null?null:B.c.ao(s,"forbook:")
s=s===!0}else s=!1
if(!s)r=r===B.G&&a.at!=null||B.c.ao(a.c,"owed-to-person:")
else r=q}else r=q
else r=q
else r=q
else r=q
return r},
js(a){var s,r,q=a.ch
if(q==null||!B.c.ao(q,"forbook:"))return null
if(a.a===B.c.aa(q,8)){s=this.b.a
r=s.h(0,q+":expense")
s=r==null?s.h(0,q+":income"):r}else s=null
return s},
em(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=a2.e,a1=a0.h(0,"movementId")
a1.toString
A.b(a1)
s=b.b
r=s.a
q=r.h(0,a1)
p=a0.h(0,"bookId")
p.toString
A.b(p)
o=b.d.a.h(0,a0.h(0,"categoryId"))
if(q==null)return b.p(a2,B.f,"no movement "+a1+" to pay for another book")
n=q.e
m=n===B.p
if(q.cx==null){l=q.c
l=B.c.ao(l,"owed-to")||B.c.ao(l,"held-by")}else l=!0
if(l)return b.p(a2,B.f,"only money paid out of or into an account is for another book")
if(b.aO(p)==null||p===q.b)return b.p(a2,B.f,"pick another book than "+q.b)
if(o==null||o.b!==b.bO(p)||A.ho(o)!==m)return b.p(a2,B.f,m?"money received is filed under an income category of "+p+"'s":u.s+p+"'s")
l=q.d
if(l!=null)k=l!==(m?B.w:B.k)
else k=!1
if(k)return b.p(a2,B.f,a1+" is already filed as "+l.b+"; put it back first")
l=q.dx
k=a0.h(0,"baseVersion")
k.toString
if(l!==A.P(k)){B.a.n(b.c,new A.W("conflict:"+a2.a,B.H,a1,"Changed since it was marked as paid for "+p+"; "+a1+" was left as it is."))
return new A.br()}j="forbook:"+a1
k=m?"income":"expense"
i=j+":"+k
if(r.C(i))return b.p(a2,B.v,"movement "+i+" already exists")
r=m?B.aX:B.Y
s.j(0,a1,q.f5(a,p,j,r,l+1))
r=q.b
l=m?"held-by:"+r:"owed-to:"+r
k=m?B.w:B.k
h=q.f
g=q.r
f=q.w
e=q.x
d=q.y
c=q.z
s.j(0,i,A.bL(l,h,f,p,o.a,r,a,n,e,i,a,a,a,g,j,c,a,new A.dx("operation",a2.a,a2.f,d.d),a,a,k,1))
b.p1.Y(0,a1)
return new A.D()},
jr(a){var s,r,q,p,o,n,m=this,l=null,k=a.e,j=k.h(0,"movementId")
j.toString
A.b(j)
s=m.b
r=s.a
q=r.h(0,j)
p=q==null
o=p?l:q.ch
if(p||o==null||o!=="forbook:"+j)return m.p(a,B.f,j+" is not paid for another book")
if(new A.L(r,A.o(r).i("L<2>")).N(0,new A.nG(j)))return m.p(a,B.ac,"the advance on "+j+" has a settlement; it stays")
r=m.aC
p=o+":expense"
if(r.eN(p)!=null||r.eN(o+":income")!=null)return m.p(a,B.ac,"an invoice counts "+j+"'s other side; it stays")
r=q.dx
n=k.h(0,"baseVersion")
n.toString
if(r!==A.P(n)){B.a.n(m.c,new A.W("conflict:"+a.a,B.H,j,"Changed since; "+j+" was left paid for "+A.i(q.at)+"."))
return new A.br()}s.Y(0,p)
s.Y(0,o+":income")
s.j(0,j,q.f5(l,l,l,l,r+1))
return new A.D()},
iK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=a.e,b=c.h(0,"id")
b.toString
A.b(b)
s=c.h(0,"bookId")
s.toString
A.b(s)
r=c.h(0,"memberId")
r.toString
A.b(r)
q=e.d.a.h(0,c.h(0,"categoryId"))
p=A.cF(c.h(0,"date"))
if(e.aO(s)==null||s==="personal")return e.p(a,B.f,"a person's payment is for a company or the property")
if(!e.p3.a.C(r))return e.p(a,B.f,"no household member "+r)
if(q==null||q.b!==e.bO(s)||A.ho(q))return e.p(a,B.f,u.s+s+"'s")
if(p==null)return e.p(a,B.h,"a payment needs its date")
o=c.h(0,"amount")
o.toString
A.b(o)
n=c.h(0,"currency")
n.toString
A.b(n)
m=A.a6(A.ah(o),n)
if(m.a.a.gab(0)<=0)return e.p(a,B.h,"an amount is more than zero")
l=A.m(c.h(0,"invoiceId"))
o=l!=null
if(o){n=e.aC.c.h(0,l)
n=(n==null?d:n.b)!==s}else n=!1
if(n)return e.p(a,B.f,"invoice "+l+" is not in "+s+"'s book")
if(c.h(0,"sgd")!=null){n=c.h(0,"sgd")
n.toString
k=A.a6(A.ah(A.b(n)),"SGD")
j=A.dd(A.i(c.h(0,"rate")))
i=A.cF(c.h(0,"rateDate"))
if(j==null||j.l(0,$.M())<=0||i==null||k.a.a.gab(0)<=0||m.b==="SGD")return e.p(a,B.h,"an SGD amount comes with its rate and date (LED-09)")
h=new A.l9()}else h=d
g="person:"+b
b=A.m(c.h(0,"payee"))
b=b==null?d:B.c.G(b)
f=e.du(a,A.d([A.bL("owed-to-person:"+r,m,p,s,q.a,d,r,B.q,p,g,d,d,d,d,d,b,d,new A.dx("manual",a.a,a.f,!1),d,d,B.k,1)],t.A))
if(f instanceof A.D){if(h!=null)e.aC.y.j(0,g,h)
if(o)J.bT(e.aC.d.aK(l,new A.nD()),g)}return f},
jC(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="invoiceId",f="baseVersion",e="movement.forBook",d=a0.e,c=h.aC,b=c.c.h(0,d.h(0,g)),a=d.h(0,"movementId")
a.toString
A.b(a)
s=h.b
r=s.a
q=r.h(0,a)
if(b==null)return h.p(a0,B.f,"no invoice "+A.i(d.h(0,g)))
p=b.b
if(p==null)return h.p(a0,B.f,"place invoice "+b.a+" in a book first")
if(q==null||q.cx!=null)return h.p(a0,B.f,"no movement "+a+" to link")
if(q.f.b!==b.f.b)return h.p(a0,B.f,a+" is not in the invoice's currency")
o="forbook:"+a
n=o+":expense"
m=r.h(0,n)
if(m==null)m=r.h(0,o+":income")
if(q.b===p){r=b.y!=null
l=r?B.p:B.q
if(q.e!==l)return h.p(a0,B.f,r?"rent comes in":"a bill is paid out")
k=r?B.w:B.k
j=b.r
r=!1
if(j!=null)if(!h.fs(q)){r=q.d
r=r==null||r===k}if(r){r=q.dx
o=d.h(0,f)
o.toString
if(r!==A.P(o)){B.a.n(h.c,new A.W("conflict:"+a0.a,B.H,a,"Changed since; "+a+" was not linked to invoice "+b.a+"."))
return new A.br()}s.j(0,a,q.lm(j,k,r+1))
h.p1.Y(0,a)}else{s=q.d
if(s!=null&&s!==k)return h.p(a0,B.f,a+" is filed as "+s.b)}n=a}else if(m!=null&&m.b===p)n=m.a
else{s=b.y!=null
if(s)r=q.e!==B.p||b.r==null
else r=!1
if(r)return h.p(a0,B.f,"rent is money received, filed as the property's income")
else{j=b.r
if(s){i=h.em(new A.al(a0.a,a0.b,a0.c,e,A.R(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.D))return i
n=o+":income"}else{if(j==null)return h.p(a0,B.f,"give invoice "+b.a+" a category first")
i=h.em(new A.al(a0.a,a0.b,a0.c,e,A.R(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.D))return i}}}if(c.eN(n)!=null)return h.p(a0,B.v,a+" is already linked to an invoice")
J.bT(c.d.aK(b.a,new A.nJ()),n)
return new A.D()},
p(a,b,c){var s=a.a
B.a.n(this.c,new A.W("rejected:"+s,b,s,c))
return new A.t0()}}
A.o4.prototype={
$1(a){var s,r,q,p="[^A-Z0-9]"
t.q.a(a)
s=A.C(p,!0,!1)
s=A.a4(a.b.toUpperCase(),s,"")
r=this.a
q=A.C(p,!0,!1)
if(s!==A.a4(r.toUpperCase(),q,"")){s=A.C(p,!0,!1)
s=A.a4(a.a.toUpperCase(),s,"")
q=A.C(p,!0,!1)
s=s===A.a4(r.toUpperCase(),q,"")}else s=!0
return s},
$S:55}
A.nS.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.o2.prototype={
$2(a,b){var s,r,q=t.b
q.a(a)
q.a(b)
q=b.cy
q.toString
s=a.cy
s.toString
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:10}
A.o3.prototype={
$1(a){return!this.a.b.a.C("mv-"+B.c.X(A.uM(B.aC.M(B.E.M(t.x.a(a).a)).a),0,20))},
$S:32}
A.or.prototype={
$1(a){return!this.a.k4.B(0,t.x.a(a).a)},
$S:32}
A.oq.prototype={
$1(a){return t.v.a(a).b===this.a.b},
$S:8}
A.o1.prototype={
$1(a){var s,r,q
t.W.a(a)
if(a.cx!=null)return!1
s=this.a.r.a.h(0,a.c)
if(s!=null){r=a.x
q=s.w
q=A.f(r.a,r.b,r.c).l(0,A.f(q.a,q.b,q.c))>=0
r=q}else r=!0
return r},
$S:1}
A.oc.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(this.a||a.cx==null){r=this.b
if(r==null||a.b===r){s=this.c
s=s==null||a.c===s}}return s},
$S:1}
A.ob.prototype={
$1(a){return t.W.a(a).cx===this.a},
$S:1}
A.nA.prototype={
$1(a){return this.a.b.a.C(t.W.a(a).a)},
$S:1}
A.nB.prototype={
$1(a){return t.W.a(a).a},
$S:17}
A.nM.prototype={
$1(a){return a==null?"no note":'the note "'+a+'"'},
$S:29}
A.o_.prototype={
$1(a){return t.v.a(a).a===this.a.a},
$S:8}
A.nY.prototype={
$1(a){return t.dh.a(a).a===this.a.a},
$S:20}
A.nZ.prototype={
$1(a){var s,r,q
t.dh.a(a)
s=this.a
if(a.b===s.b){r=a.d
if(r==null)r=a.c
q=s.d
s=q==null?s.c:q
r=Math.abs(B.d.u(A.f(s.a,s.b,s.c).aX(A.f(r.a,r.b,r.c)).a,864e8))<=20
s=r}else s=!1
return s},
$S:20}
A.nX.prototype={
$1(a){return t.dh.a(a).a===this.a},
$S:20}
A.o5.prototype={
$1(a){return!A.C_(t.b.a(a).d,this.a)},
$S:2}
A.o6.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:8}
A.o7.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:61}
A.o8.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.o9.prototype={
$1(a){return t.to.a(a)},
$S:63}
A.oa.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:67}
A.nz.prototype={
$1(a){t.v.a(a)
return a.a===this.a.d&&a.b===this.b},
$S:8}
A.nR.prototype={
$2(a,b){var s,r,q,p
if(!this.b.B(0,b))return null
s=this.a
r=s.ch
q=r.h(0,a)
if(q==null)q=b
p=s.aV(q)
if(p===q)r.Y(0,a)
else r.j(0,a,q)
return p===b?null:p},
$S:145}
A.nP.prototype={
$1(a){return this.a.B(0,t.W.a(a).c)},
$S:1}
A.nQ.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.op.prototype={
$2(a,b){var s=a===1?"":"s"
return""+a+" "+b+s},
$S:146}
A.od.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:8}
A.oe.prototype={
$1(a){return t.W.a(a).c===this.a},
$S:1}
A.of.prototype={
$1(a){return t.dh.a(a).b===this.a},
$S:20}
A.oh.prototype={
$1(a){return t.R.a(a).r===this.a},
$S:16}
A.oi.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:61}
A.oj.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.ok.prototype={
$1(a){return t.to.a(a)},
$S:63}
A.ol.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:67}
A.om.prototype={
$1(a){return t.A9.a(a).b===this.a},
$S:164}
A.on.prototype={
$1(a){return t.ch.a(a).c===this.a},
$S:166}
A.oo.prototype={
$1(a){return t.AD.a(a).r===this.a},
$S:168}
A.og.prototype={
$1(a){return t.tD.a(a).z===this.a},
$S:173}
A.nE.prototype={
$1(a){var s=a.d
return(s==null||s===B.U)&&a.ch==null&&a.cx==null},
$S:1}
A.o0.prototype={
$1(a){var s=this.a.r.a.h(0,a.c)
if(s==null)s=null
else s=s.gaP()||s.d===B.a5
return s===!0},
$S:1}
A.nF.prototype={
$0(){var s=this.b
return new A.ec(this.a,s.f,s.a,null)},
$S:174}
A.nH.prototype={
$1(a){return t.x.a(a).a===this.a.a},
$S:32}
A.nI.prototype={
$1(a){return t.pL.a(a).a===this.a},
$S:175}
A.nU.prototype={
$1(a){return t.i.a(a).a===this.a},
$S:34}
A.nC.prototype={
$1(a){return t.ok.a(a).a===this.a},
$S:93}
A.nT.prototype={
$1(a){var s
t.io.a(a)
s=this.a
return a.a===s.a&&a.b===s.b},
$S:184}
A.nV.prototype={
$1(a){return A.d0(a)},
$S:185}
A.nL.prototype={
$1(a){t.b.a(a)
return A.hn(a.c)===this.a.a&&B.c.bB(a.b,this.b)},
$S:2}
A.nK.prototype={
$1(a){return t.ub.a(a).b.d===this.a},
$S:186}
A.nW.prototype={
$1(a){return t.v.a(a).a===this.a},
$S:8}
A.nO.prototype={
$1(a){var s
if(typeof a=="string"){s=$.FI()
s=!s.b.test(a)}else s=!0
return s},
$S:198}
A.nG.prototype={
$1(a){t.W.a(a)
return a.d===B.X&&a.ay===this.a},
$S:1}
A.nD.prototype={
$0(){return A.d([],t.s)},
$S:92}
A.nJ.prototype={
$0(){return A.d([],t.s)},
$S:92}
A.fA.prototype={}
A.ec.prototype={}
A.l2.prototype={}
A.lS.prototype={
mj(a){var s,r,q,p=this
if(p.e.Y(0,a)){s=A.w(t.N,t.W)
for(r=p.a,r=new A.a2(r,r.r,r.e,A.o(r).i("a2<2>"));r.m();){q=r.d
if(q.c===a)s.j(0,q.a,q)}p.d.j(0,a,s)}s=p.d.h(0,a)
s=s==null?null:new A.L(s,A.o(s).i("L<2>"))
return s==null?B.a9:s},
fw(a,b){var s,r,q,p
if(a!=null)s=b==null||a.c!==b.c
else s=!1
if(s){s=this.d
r=a.c
q=s.h(0,r)
p=q==null
if(!p)q.Y(0,a.a)
if(!p&&q.a===0)s.Y(0,r)
if(b!=null)this.e.n(0,b.c)}if(b!=null){s=this.d
r=b.c
p=s.h(0,r)
if(p==null){p=A.w(t.N,t.W)
s.j(0,r,p)
s=p}else s=p
s.j(0,b.a,b)}},
eg(a,b){var s,r,q,p,o=a==null?null:a.ay
if(o==null||a.d!==B.G||a.cx!=null)return
s=this.c
r=s.h(0,o)
if(b)s.j(0,o,r==null?a.f:r.D(0,a.f))
else{q=r.a8(0,a.f)
p=q.a.l(0,$.M())
if(p===0)s.Y(0,o)
else s.j(0,o,q)}},
j(a,b,c){var s,r=this
A.b(b)
t.W.a(c)
s=r.a.h(0,b)
r.eg(s,!1)
r.ib(0,b,c)
r.eg(c,!0)
r.fw(s,c)},
Y(a,b){var s=this,r=s.a.h(0,b)
s.eg(r,!1)
s.fw(r,null)
return s.ic(0,b)}}
A.eb.prototype={}
A.fU.prototype={
T(){return"ReportState."+this.b}}
A.js.prototype={}
A.oC.prototype={}
A.y9.prototype={
$1(a){var s,r
t.b.a(a)
s=!1
if(a.r===this.a){r=a.d
if(r!==B.o&&r!==B.y){s=a.w
r=this.b
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))<=0
s=r}}return s},
$S:2}
A.ya.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.yb.prototype={
$1(a){var s,r,q,p
t.sH.a(a)
s=this.a
r=a.a
q=s.a
p=s.b
s=s.c
if(A.f(q,p,s).l(0,A.f(r.a,r.b,r.c))>=0){r=a.b
r=A.f(q,p,s).l(0,A.f(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:202}
A.bf.prototype={
T(){return"MovementType."+this.b}}
A.bS.prototype={
T(){return"PaymentMethod."+this.b}}
A.cL.prototype={
T(){return"Direction."+this.b}}
A.dx.prototype={}
A.X.prototype={
bm(a,b,c,d,e,f,g,h){var s=this,r=g==null?s.d:g,q=a==null?s.f:a,p=e==null?s.y:e,o=b==null?s.Q:b,n=c==null?s.ay:c,m=d==null?s.ch:d,l=f==null?s.CW:f,k=h==null?s.dx:h
return A.bL(s.c,q,s.w,s.b,o,s.at,s.ax,s.e,s.x,s.a,n,s.as,s.db,s.r,m,s.z,s.cy,p,s.cx,l,r,k)},
lm(a,b,c){var s=null
return this.bm(s,a,s,s,s,s,b,c)},
eI(a){var s=null
return this.bm(s,s,s,s,s,s,s,a)},
ll(a,b){var s=null
return this.bm(s,s,s,s,s,s,a,b)},
dL(a,b,c){var s=null
return this.bm(s,s,s,a,s,s,b,c)},
lb(a){var s=null
return this.bm(s,s,a,s,s,s,s,s)},
lp(a,b,c,d){var s=null
return this.bm(s,s,a,b,s,s,c,d)},
lj(a,b){var s=null
return this.bm(s,s,s,a,s,s,s,b)},
lo(a,b,c,d){var s=null
return this.bm(a,s,s,s,b,c,s,d)},
lh(a,b){var s=null
return this.bm(a,s,s,s,s,s,s,b)},
li(a,b){var s=null
return this.bm(s,a,s,s,s,s,s,b)},
cb(a){var s=this
return A.bL(a,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
dU(a,b,c){var s=this,r=b==null?s.c:b,q=c==null?s.at:c
return A.bL(r,s.f,s.w,a,s.Q,q,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
m1(a){return this.dU(a,null,null)},
hE(a){var s=this
return A.bL(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,a,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
hD(a,b,c,d){var s=this
return A.bL(s.c,s.f,s.w,s.b,a,s.at,s.ax,s.e,s.x,s.a,s.ay,b,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,c,d)},
hH(a){var s=this
return A.bL(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,a,s.CW,s.d,s.dx+1)},
f5(a,b,c,d,e){var s=this
return A.bL(s.c,s.f,s.w,s.b,a,b,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,c,s.z,s.cy,s.y,s.cx,s.CW,d,e)}}
A.io.prototype={
T(){return"PostingStatus."+this.b}}
A.bq.prototype={
T(){return"SpendFlag."+this.b}}
A.jH.prototype={
jq(a,b){var s,r,q,p
t.Ez.a(b)
s=this.a
r=s.h(0,a)
if(r!=null)return r
q=b.h(0,a)
p=q==null?null:q.d
s=p==null?null:s.h(0,p)
return s==null?B.aA:s}}
A.mV.prototype={
$1(a){return t.Z.a(a).b===this.a.a},
$S:80}
A.cX.prototype={
gh5(){var s=this.b
s=s==null?null:s.x
return s==null?this.a.x:s}}
A.da.prototype={}
A.uT.prototype={
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
o=B.c.l(o,q?"":r)}return o},
$S:215}
A.oD.prototype={}
A.yc.prototype={
$1(a){var s,r
t.qp.a(a)
s=a.gh5()
r=this.a
if(A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>=0){s=a.gh5()
r=this.b
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:84}
A.yd.prototype={
$1(a){return t.qp.a(a).a.f.b===this.a},
$S:84}
A.nj.prototype={}
A.z7.prototype={
$2(a,b){var s,r
A.b(a)
A.b(b)
s=this.a
r=s.h(0,b).a.l(0,s.h(0,a).a)
return r!==0?r:B.c.l(a,b)},
$S:35}
A.ad.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.o(this)
s.i("ad.K").a(b)
s.i("ad.V").a(c)
this.a.j(0,b,c)},
Y(a,b){var s=this.a
s.C(b)
return s.Y(0,b)},
gag(){var s=this.a
return new A.az(s,A.o(s).i("az<1>"))},
gU(){var s=this.a
return new A.L(s,A.o(s).i("L<2>"))},
gbo(){var s=this.a
return new A.aa(s,A.o(s).i("aa<1,2>"))},
gq(a){return this.a.a},
ga2(a){return this.a.a===0},
gam(a){return this.a.a!==0},
C(a){return this.a.C(a)},
a0(a,b){return this.a.a0(0,A.o(this).i("~(ad.K,ad.V)").a(b))}}
A.iB.prototype={
n(a,b){var s=this.a.n(0,this.$ti.c.a(b))
return s},
B(a,b){return this.a.B(0,b)},
gv(a){var s=this.a
return A.eu(s,s.r,A.o(s).c)},
gq(a){return this.a.a}}
A.cl.prototype={}
A.oK.prototype={}
A.wu.prototype={
$2(a,b){var s,r,q=t.eY
q.a(a)
q.a(b)
s=B.c.l(a.a.b,b.a.b)
if(s!==0)q=s
else{q=a.b.b
r=b.b.b
r=A.f(q.a,q.b,q.c).l(0,A.f(r.a,r.b,r.c))
q=r}return q},
$S:50}
A.xE.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.o){s=a.as
s=s==null?null:s.x
s=s===this.a}else s=!1
return s},
$S:2}
A.wt.prototype={
$1(a){t.eY.a(a)
return a.b.bS(a.d)===this.a},
$S:236}
A.cd.prototype={
T(){return"InstalmentStatus."+this.b}}
A.cP.prototype={}
A.oy.prototype={}
A.xF.prototype={
$2(a,b){var s=t.W,r=s.a(a).x
s=s.a(b).x
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:6}
A.xG.prototype={
$1(a){var s,r,q
t.v.a(a)
s=this.a
r=s.a
q=a.c
if(A.f(r.a,r.b,r.c).l(0,A.f(q.a,q.b,q.c))>=0){s=s.a
r=a.d
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:8}
A.xH.prototype={
$1(a){var s=t.pt.a(a).d
return s===B.bi||s===B.bj},
$S:51}
A.oG.prototype={}
A.hO.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.hO&&b.a.I(0,this.a)},
gO(a){var s=this.a
return A.bu(s.a,s.b,s.c,B.t)},
k(a){return"DueOn("+this.a.k(0)+")"}}
A.jJ.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.jJ&&b.a===this.a&&b.b===this.b},
gO(a){return A.bu(this.a,this.b,B.t,B.t)},
k(a){return"CheckWithLender("+this.a+"-"+this.b+")"}}
A.kH.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.kH},
gO(a){return 0}}
A.kG.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.kG&&b.a===this.a},
gO(a){return A.bu(2,this.a,B.t,B.t)},
k(a){return"NoneLeftIfPaid("+this.a+")"}}
A.k1.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.k1},
gO(a){return 1}}
A.du.prototype={
T(){return"LoanType."+this.b}}
A.fM.prototype={
J(){var s=this,r=null,q=t.N,p=A.w(q,t.X),o=s.a
p.j(0,"type",o==null?r:o.b)
o=s.b
p.j(0,"principal",o==null?r:A.R(["amount",o.a.k(0),"currency",o.b],q,q))
p.j(0,"instalmentCount",s.c)
p.j(0,"paymentDay",s.d)
p.j(0,"pendingInstalments",s.e)
q=s.f
p.j(0,"pendingAsOf",q==null?r:q.k(0))
q=s.r
q=q==null?r:q.J()
if(q!=null)p.j(0,"instalment",q)
q=s.w
if(q!=null)p.j(0,"payingAccountId",q)
q=s.x
if(q!=null)p.j(0,"cardLoan",q)
return p}}
A.xI.prototype={
$1(a){var s=B.c.G(a)
return s.length===0?null:s},
$S:52}
A.xK.prototype={
$1(a){var s=this.a
if(s.$1(a)==null)s=null
else{s=s.$1(a)
s.toString
s=A.kU(s,null)}return s},
$S:95}
A.xJ.prototype={
$1(a){var s=this.a.$1(a)
s.toString
s=A.Ea(s)
s.toString
return A.a6(s,this.b)},
$S:58}
A.h0.prototype={
bS(a){var s,r=this,q=r.b.k(0),p=r.f
p=p==null?null:p.a
p=A.i(p==null?"":p)
s=r.r
if(s==null)s=""
return a+":"+r.a.b+":"+q+":"+p+":"+s},
J(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"kind",r.a.b)
q.j(0,"started",r.b.k(0))
q.j(0,"outstanding",r.c.J())
s=r.d
s=s==null?null:s.k(0)
if(s!=null)q.j(0,"ends",s)
s=r.e
if(s!=null)q.j(0,"remaining",s)
s=r.f
s=s==null?null:s.J()
if(s!=null)q.j(0,"amount",s)
s=r.r
if(s!=null)q.j(0,"reference",s)
return q}}
A.fc.prototype={
T(){return"StatementLoanKind."+this.b}}
A.cS.prototype={
T(){return"MailSenderKind."+this.b}}
A.i7.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.i7&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gO(a){return A.bu(this.a,this.b,this.c,B.t)},
k(a){return"MailSender("+this.a+", "+this.b.b+")"}}
A.fO.prototype={}
A.K.prototype={
bx(a){var s=A.f(this.a,this.b,this.c).aM(A.A3(a,0,0,0).a)
return new A.K(A.b2(s),A.bk(s),A.aH(s))},
l(a,b){t.c.a(b)
return A.f(this.a,this.b,this.c).l(0,A.f(b.a,b.b,b.c))},
I(a,b){if(b==null)return!1
return b instanceof A.K&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gO(a){return A.bu(this.a,this.b,this.c,B.t)},
k(a){return""+this.a+"-"+B.c.af(B.d.k(this.b),2,"0")+"-"+B.c.af(B.d.k(this.c),2,"0")},
$iaS:1}
A.xs.prototype={
$1(a){return","},
$S:14}
A.xt.prototype={
$1(a){return","},
$S:14}
A.ng.prototype={}
A.jP.prototype={
k(a){return"CurrencyMismatch: "+this.a+" and "+this.b+" cannot be combined"}}
A.v.prototype={
J(){var s=this.b
return A.R(["amount",this.a.bF(0,A.ky(s)),"currency",s],t.N,t.X)},
ghh(){var s=this.a
return new A.Q(s.a,s.b-A.ky(this.b)).az().aD(0)},
D(a,b){return A.a6(this.a.D(0,this.fK(b).a),this.b)},
a8(a,b){var s=this.fK(b).a
return A.a6(this.a.D(0,new A.Q(s.a.W(0),s.b)),this.b)},
fK(a){var s=a.b,r=this.b
if(s!==r)throw A.k(new A.jP(r,s))
return a},
I(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.v)if(b.b===this.b)s=b.a.l(0,this.a)===0
return s},
gO(a){return A.bu(this.b,this.a,B.t,B.t)},
k(a){var s=this.b
return s+" "+this.a.bF(0,A.ky(s))}}
A.kf.prototype={
kS(a){var s,r
t.Q.a(a)
s=this.a
r=a.a
if(s.C(r))return!1
s.j(0,r,a)
return!0}}
A.al.prototype={}
A.mR.prototype={}
A.jG.prototype={}
A.mS.prototype={}
A.yG.prototype={
$1(a){var s
t.W.a(a)
s=a.d
return(s==null||s===B.U)&&a.ch==null},
$S:1}
A.yx.prototype={
$2(a,b){var s=t.W
return B.c.l(s.a(a).a,s.a(b).a)},
$S:6}
A.yy.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.q){s=this.a.gR().h(0,a.c)
s=s==null?null:s.gaP()
s=s===!0}else s=!1
return s},
$S:1}
A.yz.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.p){s=this.a.gR().h(0,a.c)
s=(s==null?null:s.d)===B.x}else s=!1
return s},
$S:1}
A.yA.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.yC.prototype={
$1(a){var s,r
A.m(a)
s=a==null?"":a
r=A.C("[^A-Z0-9]",!0,!1)
return A.a4(s.toUpperCase(),r,"")},
$S:29}
A.yB.prototype={
$1(a){var s,r,q
t.W.a(a)
s=this.a.gR().h(0,a.c).c
r=A.C("[^A-Z0-9]",!0,!1)
q=A.a4(s.toUpperCase(),r,"")
return q.length!==0&&this.b.N(0,new A.yv(q))},
$S:1}
A.yv.prototype={
$1(a){return B.c.B(A.b(a),this.a)},
$S:7}
A.yD.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.yw.prototype={
$1(a){t.W.a(a)
return this.a.gR().h(0,a.c).b},
$S:17}
A.yE.prototype={
$1(a){t.W.a(a)
return A.i(this.a.$1(a))+" on "+a.w.k(0)},
$S:17}
A.yF.prototype={
$2(a,b){var s=t.i
return B.c.l(s.a(a).a,s.a(b).a)},
$S:37}
A.tl.prototype={}
A.i9.prototype={}
A.zs.prototype={
$2(a,b){var s=t.sH,r=s.a(a).a
s=s.a(b).a
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:38}
A.xW.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s!==B.o&&s!==B.y&&!this.a.aC.w.C(a.a)},
$S:2}
A.xX.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).a,s.a(b).a)},
$S:10}
A.xZ.prototype={
$2(a,b){var s=this.a.c9(this.b.a),r=s.$ti
return new A.p(s,r.i("l(h.E)").a(new A.y_(a,b)),r.i("p<h.E>")).gq(0)},
$S:64}
A.y_.prototype={
$1(a){var s,r,q,p,o
t.W.a(a)
s=!1
if(a.CW==null){r=a.w
q=this.a
p=r.a
o=r.b
r=r.c
if(A.f(p,o,r).l(0,A.f(q.a,q.b,q.c))>=0){s=this.b
s=A.f(p,o,r).l(0,A.f(s.a,s.b,s.c))<=0}}return s},
$S:1}
A.xY.prototype={
$2(a,b){var s=t.sH,r=s.a(a).a
s=s.a(b).a
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:38}
A.uJ.prototype={
$1(a){var s=t.v.a(a).d,r=this.a.b
return A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))<0},
$S:8}
A.xR.prototype={
$2(a,b){var s=t.sH,r=s.a(a).a
s=s.a(b).a
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:38}
A.xU.prototype={
$1(a){return a.b*12+a.a-1},
$S:99}
A.xV.prototype={
$1(a){var s=B.d.u(a,12)
return new A.ha(B.d.P(a,12)+1,s)},
$S:100}
A.xS.prototype={
$2(a,b){var s=t.l1
s.a(a)
s.a(b)
s=this.a
return J.zS(s.$1(a),s.$1(b))},
$S:101}
A.xT.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.a,r=s.length,q=b.a,p=b.b,o=b.c,n=a,m=0;m<s.length;s.length===r||(0,A.n)(s),++m){l=s[m]
k=l.a
j=l.b
l=n.a
i=n.b
h=n.c
if(A.f(k.a,k.b,k.c).l(0,A.f(l,i,h))>0)break
g=j.a
f=j.b
e=j.c
if(A.f(g,f,e).l(0,A.f(l,i,h))>=0){d=A.f(g,f,e).aM(864e8)
n=new A.K(A.b2(d),A.bk(d),A.aH(d))}if(A.f(n.a,n.b,n.c).l(0,A.f(q,p,o))>0)return!0}return!1},
$S:102}
A.dv.prototype={}
A.y4.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.y5.prototype={
$2(a,b){var s=t.W,r=s.a(a).w
s=s.a(b).w
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:6}
A.y7.prototype={
$2(a,b){var s,r,q,p,o,n,m,l
t.C.a(a)
s=J.ap(a)
r=s.gq(a)
for(q=b.a,p=b.b,o=b.c,n=0;n<r;){m=B.d.al(n+r,1)
l=s.h(a,m).w
if(A.f(l.a,l.b,l.c).l(0,A.f(q,p,o))<0)n=m+1
else r=m}return n},
$S:56}
A.y6.prototype={
$2(a,b){var s,r,q,p=t.wg
p.a(a)
p.a(b)
s=B.c.l(a.a,b.a)
if(s!==0)return s
p=a.d
r=b.d
q=A.f(p.a,p.b,p.c).l(0,A.f(r.a,r.b,r.c))
if(q!==0)p=q
else{p=this.a
r=p.h(0,a)
r.toString
p=p.h(0,b)
p.toString
p=B.d.l(r,p)}return p},
$S:104}
A.rX.prototype={}
A.kW.prototype={}
A.rY.prototype={}
A.x0.prototype={
$2(a,b){var s=t.W
return B.c.l(s.a(a).a,s.a(b).a)},
$S:6}
A.x1.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.x2.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:6}
A.x7.prototype={
$1(a){var s=a.a,r=this.a.h(0,s)
s=r==null?this.b.a.h(0,s):r
return s==null?A.a6($.M(),a.f.b):s},
$S:57}
A.x6.prototype={
$1(a){var s=a.f,r=s.a8(0,this.a.$1(a)),q=this.b.h(0,a.a)
return r.a8(0,q==null?A.a6($.M(),s.b):q)},
$S:57}
A.x3.prototype={
$2(a,b){var s=t.W
return B.c.l(s.a(a).a,s.a(b).a)},
$S:6}
A.x4.prototype={
$1(a){return t.W.a(a).f.I(0,this.a.f)},
$S:1}
A.x5.prototype={
$1(a){return t.W.a(a).w.k(0)},
$S:17}
A.t8.prototype={}
A.dC.prototype={}
A.t9.prototype={}
A.bN.prototype={
T(){return"_Pair."+this.b}}
A.x9.prototype={
$2(a,b){var s=t.W
return B.c.l(s.a(a).a,s.a(b).a)},
$S:6}
A.xa.prototype={
$0(){return A.d([],t.t)},
$S:106}
A.xb.prototype={
$2(a,b){var s,r=t.Ei
r.a(a)
r.a(b)
r=a.a
s=b.a
return r!==s?B.d.l(r,s):B.d.l(a.b,b.b)},
$S:107}
A.xj.prototype={
$1(a){var s,r=this.a,q=a
for(;;){if(!(r.h(0,q)!=null&&r.h(0,q)!==q))break
s=r.h(0,q)
s.toString
q=s}return q},
$S:12}
A.xc.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.xd.prototype={
$1(a){var s
t.ct.a(a)
if(a.c===B.c3){s=this.a
s=s.B(0,a.a.a)!==s.B(0,a.b.a)}else s=!1
return s},
$S:108}
A.xe.prototype={
$1(a){return!this.a.dX(t.W.a(a).a).ga2(0)},
$S:1}
A.xf.prototype={
$1(a){t.W.a(a)
return(a.CW!=null||a.y.d)&&!B.a.B(this.a,a)},
$S:1}
A.xg.prototype={
$1(a){return J.Bn(this.a,new A.x8(t.W.a(a),this.b))},
$S:1}
A.x8.prototype={
$1(a){var s=this.a.a,r=t.W.a(a).a
return s!==r&&this.b.dQ.B(0,A.nN(s,r))},
$S:1}
A.xh.prototype={
$2(a,b){var s,r=t.kG
r.a(a)
r.a(b)
s=B.c.l(a.a,b.a)
return s!==0?s:B.c.l(a.b,b.b)},
$S:109}
A.xi.prototype={
$2(a,b){var s=t.i
return B.c.l(s.a(a).a,s.a(b).a)},
$S:37}
A.dE.prototype={}
A.zj.prototype={
$2(a,b){var s,r,q=t.v
q.a(a)
q.a(b)
q=a.c
s=b.c
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:24}
A.zk.prototype={
$2(a,b){var s=t.sN
return B.c.l(s.a(a).a,s.a(b).a)},
$S:110}
A.tv.prototype={}
A.lh.prototype={}
A.tw.prototype={}
A.yI.prototype={
$1(a){return this.a.B(0,t.W.a(a).c)},
$S:1}
A.yJ.prototype={
$1(a){var s=t.W.a(a).d
return s==null||s===B.L},
$S:1}
A.yK.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:6}
A.yL.prototype={
$1(a){return t.W.a(a).e===B.q},
$S:1}
A.yM.prototype={
$1(a){return t.W.a(a).e===B.p},
$S:1}
A.yQ.prototype={
$1(a){return a.d===B.L},
$S:1}
A.yO.prototype={
$2(a,b){var s,r,q
if(b.c===a.c||b.b!==a.b)return!1
s=a.w
r=b.w
q=B.d.u(A.f(r.a,r.b,r.c).aX(A.f(s.a,s.b,s.c)).a,864e8)
if(q<0||q>5)return!1
s=a.f
r=b.f
if(s.b===r.b)s=s.I(0,r)
else{s=this.b
s=s.$1(a)&&s.$1(b)}return s},
$S:111}
A.yP.prototype={
$2(a,b){var s,r,q,p,o,n,m
t.C.a(a)
s=a.length
for(r=b.a,q=b.b,p=b.c,o=0;o<s;){n=o+s>>>1
if(!(n<a.length))return A.a(a,n)
m=a[n].w
if(A.f(m.a,m.b,m.c).l(0,A.f(r,q,p))<0)o=n+1
else s=n}return o},
$S:56}
A.yH.prototype={
$1(a){var s=a.c,r=this.a.h(0,s)
return r==null?s:r},
$S:17}
A.yN.prototype={
$1(a){t.W.a(a)
return A.i(this.a.$1(a))+" on "+a.w.k(0)},
$S:17}
A.xk.prototype={
$1(a){t.b.a(a)
return a.gaP()||a.d===B.a5},
$S:2}
A.xl.prototype={
$1(a){t.W.a(a)
return a.ch==null&&a.ay==null},
$S:1}
A.kJ.prototype={}
A.yo.prototype={
$1(a){t.r.a(a)
return a.b===this.a&&a.f!=null},
$S:39}
A.yp.prototype={
$2(a,b){var s=t.r,r=s.a(a).d
s=s.a(b).d
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:113}
A.yq.prototype={
$1(a){return t.p_.a(a).a===this.a},
$S:114}
A.yr.prototype={
$1(a){var s,r
t.r.a(a)
if(a.f===this.b+this.a.a){s=a.d
r=this.c
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>=0
s=r}else s=!1
return s},
$S:39}
A.ys.prototype={
$1(a){var s,r
t.r.a(a)
if(a.f===this.b+this.a.a){s=a.d
r=this.c
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))<0
s=r}else s=!1
return s},
$S:39}
A.wz.prototype={
$1(a){return t.AT.a(a).b==="company"},
$S:115}
A.wA.prototype={
$1(a){return t.AT.a(a).a},
$S:116}
A.bJ.prototype={
T(){return"DocumentKind."+this.b}}
A.bA.prototype={
T(){return"PolicyType."+this.b}}
A.cT.prototype={
T(){return"PremiumFrequency."+this.b}}
A.nc.prototype={
J(){return A.R(["name",this.a,"driveFileId",this.b,"localId",this.c],t.N,t.X)}}
A.cM.prototype={
gcd(){var s,r=this.e
if(r==null||r.length===0)r=this.b.c
else{s=this.b
r=s===B.bd?r:s.c+" ("+r+")"}return r},
J(){var s,r,q=this,p=q.d.k(0),o=q.w
o=o==null?null:o.k(0)
s=q.x
s=s==null?null:s.k(0)
r=q.y
r=r==null?null:r.J()
return A.R(["id",q.a,"kind",q.b.b,"personId",q.c,"addedOn",p,"label",q.e,"country",q.f,"last4",q.r,"issued",o,"expires",s,"file",r,"replaces",q.z,"fromProposal",q.Q],t.N,t.X)}}
A.e8.prototype={
gcd(){var s=this.e,r=s==null||s.length===0,q=this.b
return r?this.c.c+", "+q:s+", "+q},
J(){var s,r=this,q=null,p=A.w(t.N,t.X)
p.j(0,"id",r.a)
p.j(0,"insurer",r.b)
p.j(0,"type",r.c.b)
p.j(0,"personId",r.d)
p.j(0,"plan",r.e)
p.j(0,"ownerId",r.f)
p.j(0,"last4",r.r)
s=r.w
p.j(0,"sumAssured",s==null?q:s.J())
p.j(0,"riders",r.x)
s=r.y
p.j(0,"starts",s==null?q:s.k(0))
s=r.z
p.j(0,"ends",s==null?q:s.k(0))
s=r.Q
p.j(0,"premium",s==null?q:s.J())
s=r.as
p.j(0,"frequency",s==null?q:s.b)
p.j(0,"paymentMethod",r.at)
s=r.ax
p.j(0,"nextDue",s==null?q:s.k(0))
s=r.ay
p.j(0,"file",s==null?q:s.J())
s=r.ch
if(s!=null)p.j(0,"accountId",s)
s=r.CW
s=s==null?q:s.J()
if(s!=null)p.j(0,"medisave",s)
return p}}
A.aG.prototype={
T(){return"FieldType."+this.b}}
A.r.prototype={}
A.a9.prototype={
T(){return"LifeKind."+this.b},
lM(a){var s=this.d,r=A.N(s)
return A.aU(new A.p(s,r.i("l(1)").a(new A.ou(a)),r.i("p<1>")),t.k2)}}
A.ou.prototype={
$1(a){return t.k2.a(a).a===this.a},
$S:40}
A.b1.prototype={
ar(a){var s=this.c,r=t.f
if(r.b(s.h(0,a))){s=s.h(0,a)
s.toString
s=A.aJ(r.a(s).F(0,t.N,t.X))}else s=null
return s},
eJ(a){var s=this.c
if(typeof s.h(0,a)=="string"){s=s.h(0,a)
s.toString
s=A.dd(A.b(s))}else s=null
return s},
J(){return A.R(["kind",this.a.b,"id",this.b,"fields",this.c],t.N,t.X)}}
A.os.prototype={
b3(a){var s,r=this.a.h(0,a)
if(r==null)r=null
else{s=A.o(r).i("L<2>")
r=A.E(new A.L(r,s),s.i("h.E"))}if(r==null)r=A.d([],t.V)
B.a.E(r,new A.ot())
return r},
a5(a,b){var s=this.a.h(0,a)
return s==null?null:s.h(0,b)},
eX(a){var s=this.a,r=a.a,q=s.h(0,r)
if(q==null){q=A.w(t.N,t.u)
s.j(0,r,q)
s=q}else s=q
s.j(0,a.b,a)
return a},
lD(a,b){var s=this.a.h(0,a)
return s==null?null:s.Y(0,b)},
kY(a){var s,r
for(s=this.a,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>"));s.m();){r=s.d.h(0,a)
if(r!=null)return r}return null},
mK(a,b){var s,r,q,p,o,n,m,l,k,j=A.d([],t.V)
for(s=this.a,s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>")),r=a.b;s.m();)for(q=s.d.gU(),q=q.gv(q);q.m();){p=q.gt()
for(o=p.a.d,n=o.length,m=p.c,l=0;l<n;++l){k=o[l]
if(k.c===B.F&&k.f===r&&J.a1(m.h(0,k.a),b))j.push(p)}}return j}}
A.ot.prototype={
$2(a,b){var s=t.u
return B.c.l(s.a(a).b,s.a(b).b)},
$S:21}
A.uK.prototype={
$1(a){A.b(a)
return a==="member"?"household member":a},
$S:12}
A.uL.prototype={
$1(a){return A.b(a).length>80},
$S:7}
A.uO.prototype={
$1(a){t.u.a(a)
return a.b!==this.a.b&&A.m(a.c.h(0,"creditMovementId"))===this.b},
$S:31}
A.uP.prototype={
$1(a){return this.a.c.h(0,A.b(a))!=null},
$S:7}
A.va.prototype={
$1(a){return t.P.a(a).b===this.a.h(0,"kind")},
$S:33}
A.eg.prototype={
T(){return"PayslipMatchState."+this.b}}
A.f7.prototype={}
A.yT.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.ay(a.c.h(0,"payDate"))
r.toString
s=A.ay(b.c.h(0,"payDate"))
s.toString
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:21}
A.yZ.prototype={
$1(a){var s,r,q,p,o,n,m=864e8
t.W.a(a)
s=!1
if(a.c===this.a)if(a.e===B.p)if(!this.b.B(0,a.a)){s=this.c
r=a.x
q=r.a
p=r.b
r=r.c
o=s.a
n=s.b
s=s.c
s=B.d.u(A.f(q,p,r).aX(A.f(o,n,s)).a,m)>=-3&&B.d.u(A.f(q,p,r).aX(A.f(o,n,s)).a,m)<=5}return s},
$S:1}
A.yU.prototype={
$2(a,b){var s=864e8,r=t.W,q=this.a,p=r.a(a).x,o=q.a,n=q.b
q=q.c
r=r.a(b).x
return B.d.l(Math.abs(B.d.u(A.f(p.a,p.b,p.c).aX(A.f(o,n,q)).a,s)),Math.abs(B.d.u(A.f(r.a,r.b,r.c).aX(A.f(o,n,q)).a,s)))},
$S:6}
A.yV.prototype={
$1(a){return t.W.a(a).f.I(0,this.a)},
$S:1}
A.yX.prototype={
$1(a){return A.b(a).length>1},
$S:7}
A.yY.prototype={
$0(){return""},
$S:19}
A.yW.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(a.f.b===this.a.b){r=this.b
if(r.length!==0){s=a.z
if(s==null)s=""
r=B.c.B(s.toUpperCase(),r)
s=r}}return s},
$S:1}
A.cg.prototype={
T(){return"RetrievalAction."+this.b}}
A.l_.prototype={}
A.rT.prototype={
gby(){var s,r,q,p,o=A.w(t.N,t.l9)
for(s=this.a,s=new A.aa(s,A.o(s).i("aa<1,2>")).gv(0),r=this.b;s.m();){q=s.d
p=q.a
if(!r.B(0,p))o.j(0,p,q.b)}return o},
gmx(){var s,r,q=A.ab(t.N)
for(s=this.gby(),s=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>"));s.m();){r=s.d.z
if(r!=null)q.n(0,r)}return q},
gt(){var s=this.gmx(),r=this.gby(),q=A.o(r).i("L<2>"),p=q.i("p<h.E>")
r=A.E(new A.p(new A.L(r,q),q.i("l(h.E)").a(new A.rU(s)),p),p.i("h.E"))
B.a.E(r,new A.rV())
return r}}
A.rU.prototype={
$1(a){return!this.a.B(0,t.l9.a(a).a)},
$S:76}
A.rV.prototype={
$2(a,b){var s,r=t.l9
r.a(a)
r.a(b)
s=B.d.l(a.b.a,b.b.a)
return s!==0?s:B.c.l(a.c,b.c)},
$S:121}
A.vb.prototype={
$1(a){t.l9.a(a)
return a.z===this.b&&a.a!==this.a.a.a},
$S:76}
A.vc.prototype={
$1(a){return t.hn.a(a).b===this.a.h(0,"action")},
$S:122}
A.vd.prototype={
$1(a){return!B.lA.B(0,A.b(a))},
$S:7}
A.c9.prototype={
gdh(){return this.z+this.Q+this.as}}
A.wC.prototype={
$2(a,b){var s,r,q=t.eV
q.a(a)
q.a(b)
q=a.f
s=b.f
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.d.l(a.w,b.w)},
$S:123}
A.wD.prototype={
$2(a,b){return A.P(a)+t.eV.a(b).z},
$S:25}
A.wT.prototype={
$2(a,b){return A.P(a)+t.eV.a(b).Q},
$S:25}
A.wU.prototype={
$2(a,b){return A.P(a)+t.eV.a(b).as},
$S:25}
A.wV.prototype={
$2(a,b){return A.P(a)+t.eV.a(b).at},
$S:25}
A.xo.prototype={
$1(a){return B.c.af(""+B.d.P(a,100),2,"0")},
$S:26}
A.xm.prototype={
$1(a){return B.c.af(""+this.a,a.dl(1).length,"0")},
$S:14}
A.xn.prototype={
$1(a){var s=a.h(0,0)
s.toString
return A.hl(this.a,s)},
$S:14}
A.dm.prototype={
J(){var s=this
return A.R(["description",s.a,"sac",s.b,"taxable",s.c,"cgst",s.d,"sgst",s.e],t.N,t.X)}}
A.t1.prototype={
gf1(){return B.a.a9(this.x,0,new A.t4(),t.S)},
geG(){return B.a.a9(this.x,0,new A.t2(),t.S)},
ge6(){return B.a.a9(this.x,0,new A.t3(),t.S)},
gdh(){return this.gf1()+this.geG()+this.ge6()},
f2(){var s,r,q,p,o,n=this,m=t.N,l=t.X,k=A.w(m,l)
k.j(0,"tenancyId",n.a)
k.j(0,"propertyId",n.b)
k.j(0,"month",""+n.c+"-"+B.c.af(B.d.k(n.d),2,"0"))
k.j(0,"date",n.e.k(0))
k.j(0,"seriesId",n.f)
k.j(0,"seq",n.r)
k.j(0,"number",n.w)
s=A.d([],t.bk)
for(r=n.x,q=r.length,p=0;p<r.length;r.length===q||(0,A.n)(r),++p){o=r[p]
s.push(A.R(["description",o.a,"sac",o.b,"taxable",o.c,"cgst",o.d,"sgst",o.e],m,l))}k.j(0,"lines",s)
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
A.t4.prototype={
$2(a,b){return A.P(a)+t.mp.a(b).c},
$S:27}
A.t2.prototype={
$2(a,b){return A.P(a)+t.mp.a(b).d},
$S:27}
A.t3.prototype={
$2(a,b){return A.P(a)+t.mp.a(b).e},
$S:27}
A.yn.prototype={
$1(a){return this.a?""+a.a:A.hl(A.mi(a),"{fy}")},
$S:127}
A.yl.prototype={
$1(a){var s=A.aE(t.u.a(a).c.h(0,"seq"))
s.toString
return s},
$S:128}
A.ym.prototype={
$2(a,b){A.P(a)
A.P(b)
return a>b?a:b},
$S:48}
A.wX.prototype={
$2(a,b){return A.P(a)+t.mp.a(b).c},
$S:27}
A.ir.prototype={
J(){return A.d([this.a,this.b,this.c],t.s)},
I(a,b){if(b==null)return!1
return b instanceof A.ir&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gO(a){return A.bu(this.a,this.b,this.c,B.t)},
k(a){return this.a+" | "+this.b+" | "+this.c}}
A.f1.prototype={}
A.oB.prototype={
gfa(){var s=this
return s.a.a8(0,s.b).a8(0,s.c).a8(0,s.d).a8(0,s.e)}}
A.y1.prototype={
$1(a){var s=this.a.e.h(0,a)
return s==null?this.b:s},
$S:129}
A.y3.prototype={
$1(a){this.a.h(0,a)
return this.b},
$S:130}
A.y2.prototype={
$2(a,b){var s=t.B
return s.a(a).D(0,s.a(b))},
$S:28}
A.h5.prototype={
T(){return"WorthSource."+this.b}}
A.bw.prototype={
gcS(){var s=this.b
return s.a.a.gab(0)<0?A.a6($.M(),s.b).a8(0,s):s}}
A.h4.prototype={
gdI(){return B.a.a9(this.b,A.a6($.M(),this.a),new A.tF(),t.B)},
gdM(){return B.a.a9(this.c,A.a6($.M(),this.a),new A.tG(),t.B)}}
A.tF.prototype={
$2(a,b){return t.B.a(a).D(0,t.E.a(b).gcS())},
$S:66}
A.tG.prototype={
$2(a,b){return t.B.a(a).D(0,t.E.a(b).gcS())},
$S:66}
A.kE.prototype={}
A.ye.prototype={
$1(a){var s,r
t.b.a(a)
if(a.r===this.a){s=a.w
r=this.b
r=A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))<=0
s=r}else s=!1
return s},
$S:2}
A.yf.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.yg.prototype={
$1(a){var s,r=new A.yh(),q=this.a,p=A.N(q),o=p.i("p<1>"),n=new A.p(q,p.i("l(1)").a(new A.yi(a)),o)
p=o.i("l(h.E)")
o=o.i("p<h.E>")
q=o.i("h.E")
s=A.E(new A.p(n,p.a(new A.yj()),o),q)
B.a.E(s,r)
q=A.E(new A.p(n,p.a(new A.yk()),o),q)
B.a.E(q,r)
return new A.h4(a,s,q)},
$S:133}
A.yh.prototype={
$2(a,b){var s,r=t.E
r.a(a)
r.a(b)
s=b.gcS().a.l(0,a.gcS().a)
return s!==0?s:B.c.l(a.a,b.a)},
$S:134}
A.yi.prototype={
$1(a){return t.E.a(a).b.b===this.a},
$S:43}
A.yj.prototype={
$1(a){return t.E.a(a).b.a.a.gab(0)>=0},
$S:43}
A.yk.prototype={
$1(a){return t.E.a(a).b.a.a.gab(0)<0},
$S:43}
A.cB.prototype={
T(){return"ValueKind."+this.b}}
A.ep.prototype={}
A.hW.prototype={}
A.zt.prototype={
$1(a){return this.a.b.a.h(0,A.b(a))!=null},
$S:7}
A.zL.prototype={
$1(a){var s,r,q
t.R.a(a)
s=!1
if(!a.f){r=this.a
if(a.b===r.a){s=a.d
q=r.c
if(A.Ej(s,q))s=s!==B.G||q===B.p
else s=!1
s=s&&this.b.bq(0,new A.zK(a,r))}}return s},
$S:16}
A.zK.prototype={
$1(a){var s=this.b
return this.a.eR(s.b,A.b(a),s.a,s.c)},
$S:7}
A.zM.prototype={
$2(a,b){var s=t.R
return B.c.l(s.a(a).a,s.a(b).a)},
$S:44}
A.zN.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===B.a.ga_(s).d&&a.e==B.a.ga_(s).e},
$S:16}
A.cv.prototype={}
A.zD.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.zE.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.x
s=b.x
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:6}
A.zF.prototype={
$2(a,b){return t.B.a(a).D(0,t.W.a(b).f)},
$S:87}
A.wi.prototype={
$3(a,b,c){t.I.a(c)
return new A.al(a,this.b,this.a.a++,b,c,this.c)},
$S:137}
A.aK.prototype={
T(){return"ReviewReason."+this.b}}
A.W.prototype={
k(a){return"ReviewItem("+this.b.k(0)+", "+this.c+": "+this.d+")"}}
A.za.prototype={
$1(a){var s=this.a.gR().h(0,a)
s=s==null?null:s.b
return s==null?a:s},
$S:12}
A.z8.prototype={
$1(a){t.i.a(a)
return this.a.aK(a.a,new A.z9(a))},
$S:138}
A.z9.prototype={
$0(){return this.a},
$S:139}
A.zb.prototype={
$1(a){return t.b.a(a).b===this.a.f},
$S:2}
A.zc.prototype={
$1(a){return!this.a.B(0,t.i.a(a).a)},
$S:34}
A.zd.prototype={
$1(a){var s,r=t.i.a(a).a
if(!A.Cl(this.a.R8,t.N).a.B(0,r)){r=this.b.h(0,r)
if(r==null)r=null
else{s=this.c
s=A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))>0
r=s}r=r!==!0}else r=!1
return r},
$S:34}
A.ze.prototype={
$2(a,b){var s=t.i
return B.c.l(s.a(a).a,s.a(b).a)},
$S:37}
A.ba.prototype={
eR(a,b,c,d){var s,r,q=this
if(c!==q.b)return!1
s=q.r
if(s!=null&&b!==s)return!1
s=q.w
if(s!=null&&d!==s)return!1
s=q.c
if($.t6.a>2000)$.t6.an(0)
r=$.t6.h(0,s)
if(r==null){r=A.C("\\s+",!0,!1)
r=A.C("(?<![A-Z0-9])"+A.hq(B.c.G(A.a4(s.toUpperCase(),r," ")))+"(?![A-Z0-9])",!0,!1)
$.t6.j(0,s,r)
s=r}else s=r
return s.b.test(a)}}
A.cx.prototype={}
A.fQ.prototype={}
A.ik.prototype={}
A.fV.prototype={}
A.xO.prototype={
$1(a){var s=this
t.R.a(a)
return a.f&&a.eR(s.a,s.c,s.b,s.d)},
$S:16}
A.xP.prototype={
$2(a,b){var s=t.R
return B.c.l(s.a(a).a,s.a(b).a)},
$S:44}
A.xQ.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===s.d&&a.e==s.e&&a.x==s.x&&a.y==s.y},
$S:16}
A.zg.prototype={
$1(a){var s,r,q=a.z
if(q==null)return new A.fQ()
q=q.toUpperCase()
s=A.C("\\s+",!0,!1)
r=B.c.G(A.a4(q,s," "))
return this.a.aK(new A.ev([r,a.b,a.c,a.e]),new A.zh(r,this.b,a))},
$S:140}
A.zh.prototype={
$0(){var s=this.c
return A.AY(this.a,this.b,s.c,s.b,s.e)},
$S:141}
A.zf.prototype={
$1(a){t.R.a(a)
return a.a+" ("+A.i(a.e)+")"},
$S:142}
A.zl.prototype={
$1(a){return B.a.N(t.a.a(a),new A.zm(this.a))},
$S:69}
A.zm.prototype={
$1(a){var s=A.C("(?:^| )"+A.hq(A.b(a))+"(?: |$)",!0,!1)
return s.b.test(this.a)},
$S:7}
A.mB.prototype={}
A.mC.prototype={
$1(a){var s=this.a.h(0,a)
if(!A.cD(s)||s<1)throw A.k(A.A(a+" must be a whole number of at least 1",s,null))
return s},
$S:144}
A.l3.prototype={}
A.l4.prototype={}
A.td.prototype={}
A.c_.prototype={
T(){return"SmsSenderKind."+this.b}}
A.ch.prototype={
mF(){var s,r=A.w(t.N,t.X)
r.j(0,"id",this.a)
r.j(0,"kind",this.b.b)
s=this.c
if(s!=null)r.j(0,"institution",s)
return r},
I(a,b){if(b==null)return!1
return b instanceof A.ch&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gO(a){return A.bu(this.a,this.b,this.c,B.t)}}
A.th.prototype={}
A.ti.prototype={
$2(a,b){var s=t.c5
return B.c.l(s.a(a).a,s.a(b).a)},
$S:91}
A.kK.prototype={
J(){var s=this
return A.R(["lineId",s.a,"field",s.b,"ocr",s.c,"owner",s.d],t.N,t.X)}}
A.cO.prototype={}
A.tk.prototype={}
A.dH.prototype={
h8(a){var s=this
return new A.dH(s.a,a,s.c,s.d,s.e,s.f,s.r)}}
A.zo.prototype={
$0(){return A.d([],t.A)},
$S:15}
A.zp.prototype={
$2(a,b){var s,r,q=t.uB
q.a(a)
q.a(b)
q=a.b.w
s=b.b.w
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.d.l(a.a,b.a)},
$S:71}
A.zq.prototype={
hK(a,b,c){var s=this
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
if(A.f(f.a,f.b,f.c).l(0,A.f(k,j,i))<0)h=g+1
else l=g}k=A.d([],t.qM)
j=p.a
i=p.b
f=p.c
e=h
for(;;){d=a1.length
if(e<d){if(!(e>=0)){A.a(a1,e)
o=1
break A}d=a1[e].b.w
d=A.f(d.a,d.b,d.c).l(0,A.f(j,i,f))<=0}else d=!1
if(!d)break
if(!(e>=0&&e<a1.length)){A.a(a1,e)
o=1
break A}k.push(a1[e]);++e}B.a.E(k,new A.zr())
j=k.length,a0=0
case 3:if(!(a0<k.length)){o=5
break}o=6
return a2.b=k[a0].b,1
case 6:case 4:k.length===j||(0,A.n)(k),++a0
o=3
break
case 5:case 1:return 0
case 2:return a2.c=m.at(-1),3}}}},
$3(a,b,c){return new A.d_(this.hK(a,b,c),t.wE)},
$S:147}
A.zr.prototype={
$2(a,b){var s=t.uB
return B.d.l(s.a(a).a,s.a(b).a)},
$S:71}
A.kI.prototype={
k(a){return"NothingToJoin"}}
A.cK.prototype={
k(a){return"DeviceRemoved"}}
A.i_.prototype={
bu(){var s=0,r=A.I(t.I),q,p=this,o,n
var $async$bu=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:s=3
return A.q(p.b.bu(),$async$bu)
case 3:o=b
n=t.D.i("be.S").a(p.c)
q=A.R(["deviceId",p.a,"keys",o,"primary",B.K.gaB().M(n),"name",p.d,"kind",p.e],t.N,t.X)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bu,r)}}
A.fe.prototype={
T(){return"SyncAccess."+this.b}}
A.to.prototype={
bz(){var s=0,r=A.I(t.aT),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bz=A.J(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)A:switch(s){case 0:b1=n.a
s=3
return A.q(b1.bf(),$async$bz)
case 3:b2=b7
b3=A.d([],t.wt)
for(g=J.T(b2),f=n.b,e=f.a;g.m();){d=g.gt()
c=$.EH().aj(d)
if(c!=null){b=c.b
if(1>=b.length){q=A.a(b,1)
s=1
break A}b=b[1]===e}else b=!1
if(b){b=c.b
if(2>=b.length){q=A.a(b,2)
s=1
break A}b=b[2]
b.toString
B.a.n(b3,new A.t(A.Z(b,null,null),d))}}B.a.E(b3,new A.tq())
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
return A.q(b1.bU(l),$async$bz)
case 11:k=b5.B2(b7,B.lS)
if(!J.a1(k.a.h(0,"deviceId"),e)||!J.a1(k.a.h(0,"epoch"),m)){s=5
break}s=12
return A.q(k.cQ(a4),$async$bz)
case 12:a6=k.a.h(0,"ephemeral")
a6.toString
s=13
return A.q(A.mk(f,B.B.M(A.b(a6))),$async$bz)
case 13:j=b7
b5=a0
s=14
return A.q(k.cN(j),$async$bz)
case 14:a6=b5.a(b7)
i=a1.a(B.z.be(new A.ex(!1).cn(a6,0,null,!0),null)).F(0,a2,a3)
if(!J.a1(J.as(i,"deviceId"),e)){s=5
break}a6=J.as(i,"epochs")
a6.toString
a6=J.d4(d.a(a6),b)
a7=a6.$ti
a6=new A.ar(a6,a6.gq(0),a7.i("ar<O.E>"))
a7=a7.i("O.E")
while(a6.m()){a8=a6.d
h=a8==null?a7.a(a8):a8
a8=J.as(h,"epoch")
a8.toString
A.P(a8)
a9=J.as(h,"key")
a9.toString
a.j(0,a8,new A.bl(new A.bp(B.B.M(A.b(a9)),!1),null))}q=B.bY
s=1
break
p=2
s=10
break
case 8:p=7
b4=o.pop()
if(A.au(b4) instanceof A.hy){s=5
break}else throw b4
s=10
break
case 7:s=2
break
case 10:case 5:b3.length===g||(0,A.n)(b3),++a5
s=4
break
case 6:q=a.a===0?B.dR:B.dS
s=1
break
case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$bz,r)},
gjF(){var s=this.c
return new A.az(s,A.o(s).i("az<1>")).e_(0,new A.tp())},
ba(){var s=0,r=A.I(t.tU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$ba=A.J(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:c1=n.c
s=c1.a===0?3:4
break
case 3:case 5:s=10
return A.q(n.bz(),$async$ba)
case 10:switch(c5){case B.dR:s=7
break
case B.dS:s=8
break
case B.bY:s=9
break
default:s=6
break}break
case 7:q=B.dk
s=1
break
case 8:throw A.k(new A.cK())
case 9:s=6
break
case 6:case 4:h=n.a
s=11
return A.q(h.bf(),$async$ba)
case 11:g=c5
f=J.mv(g,$.EI().gh9())
e=A.E(f,f.$ti.i("h.E"))
B.a.E(e,new A.tr())
m=null
f=e.length,d=t.L,c=t.f,b=t.N,a=t.X,a0=n.b.c,a1=0
case 12:if(!(a1<e.length)){s=14
break}l=e[a1]
p=16
c3=A
s=19
return A.q(h.bU(l),$async$ba)
case 19:k=c3.B2(c5,B.lT)
s=20
return A.q(k.cQ(a0),$async$ba)
case 20:j=A.aE(k.a.h(0,"epoch"))
i=c1.h(0,j)
s=i==null?21:22
break
case 21:s=23
return A.q(n.bz(),$async$ba)
case 23:if(c5!==B.bY){a2=new A.cK()
throw A.k(a2)}a3=c1.h(0,j)
if(a3==null)a3=A.j(new A.cK())
i=a3
case 22:c3=d
s=24
return A.q(k.cN(i),$async$ba)
case 24:a2=c3.a(c5)
m=c.a(B.z.be(new A.ex(!1).cn(a2,0,null,!0),null)).F(0,b,a)
s=14
break
p=2
s=18
break
case 16:p=15
c2=o.pop()
if(A.au(c2) instanceof A.hy){s=13
break}else throw c2
s=18
break
case 15:s=2
break
case 18:case 13:e.length===f||(0,A.n)(e),++a1
s=12
break
case 14:if(m==null){q=A.aN(n.e,t.Q)
s=1
break}m.h(0,"primary")
f=m.h(0,"generation")
f.toString
A.P(f)
if(f!==n.d){B.a.an(n.e)
n.d=f}a2=n.e,f=A.JQ(g,f,a2.length),a5=f.length,a6=t.j,a7=t.mE,a8=t.Y,a1=0
case 25:if(!(a1<f.length)){s=27
break}a9=f[a1]
c3=A
s=28
return A.q(h.bU(a9.a),$async$ba)
case 28:k=c3.B2(c5,B.lU)
s=29
return A.q(k.cQ(a0),$async$ba)
case 29:b0=k.a
if(!J.a1(b0.h(0,"generation"),a9.b)||!J.a1(b0.h(0,"first"),a9.c)||!J.a1(b0.h(0,"last"),a9.d))throw A.k(A.eM("a segment is not what its name says"))
i=c1.h(0,b0.h(0,"epoch"))
c3=d
s=30
return A.q(k.cN(i==null?A.j(new A.cK()):i),$async$ba)
case 30:b1=c3.a(c5)
b2=c.a(B.z.be(new A.ex(!1).cn(b1,0,null,!0),null)).F(0,b,a)
b1=A.d([],a8)
b3=b2.h(0,"ops")
b3.toString
b3=J.d4(a6.a(b3),a7)
b4=b3.$ti
b3=new A.ar(b3,b3.gq(0),b4.i("ar<O.E>"))
b4=b4.i("O.E")
while(b3.m()){b5=b3.d
b5=(b5==null?b4.a(b5):b5).F(0,b,a)
b6=b5.h(0,"key")
b6.toString
A.b(b6)
b7=b5.h(0,"deviceId")
b7.toString
A.b(b7)
b8=b5.h(0,"clock")
b8.toString
A.P(b8)
b9=b5.h(0,"type")
b9.toString
A.b(b9)
c0=b5.h(0,"payload")
c0.toString
c0=c.a(c0).F(0,b,a)
b5=b5.h(0,"createdAtUtc")
b5.toString
b1.push(new A.al(b6,b7,b8,b9,c0,A.bV(A.b(b5)).H()))}if(b1.length!==a9.d-a9.c+1)throw A.k(A.eM("a segment is short"))
B.a.a1(a2,b1)
case 26:f.length===a5||(0,A.n)(f),++a1
s=25
break
case 27:q=A.aN(a2,t.Q)
s=1
break
case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$ba,r)},
hl(){var s,r,q,p,o=A.E(this.e,t.Q)
B.a.a1(o,this.f)
s=o.length
r=0
q=0
for(;q<s;++q){p=o[q].c
if(p>r)r=p}return r+1},
c_(a){return this.i0(t.tU.a(a))},
i0(a0){var s=0,r=A.I(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c_=A.J(function(a1,a2){if(a1===1)return A.F(a2,r)
for(;;)switch(s){case 0:c=p.c
if(c.a===0)throw A.k(new A.cK())
b=o=p.a
a=J
s=3
return A.q(o.bf(),$async$c_)
case 3:b,n=a.T(a2),m=p.b,l=m.a
case 4:if(!n.m()){s=5
break}k=n.gt()
j=$.EL().aj(k)
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
g=p.gjF()
k=B.c.af(B.d.k(n),10,"0")
i=t.N
h=t.X
n=A.R(["formatVersion",1,"deviceId",l,"n",n,"epoch",g],i,h)
f=A.d([],t.bk)
for(e=J.T(a0);e.m();){d=e.gt()
f.push(A.R(["key",d.a,"deviceId",d.b,"clock",d.c,"type",d.d,"payload",d.e,"createdAtUtc",d.f.H().df()],i,h))}i=B.E.M(B.z.b8(A.R(["ops",f],i,t.vG),null))
c=c.h(0,g)
c.toString
b=o
a="o-"+l+"-"+k+".sqo"
s=7
return A.q(A.hu(n,c,B.lV,i,m.b.b),$async$c_)
case 7:s=6
return A.q(b.bW(a,a2),$async$c_)
case 6:B.a.a1(p.f,a0)
case 1:return A.G(q,r)}})
return A.H($async$c_,r)},
cj(a,b,c,d){var s=0,r=A.I(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$cj=A.J(function(e,a0){if(e===1)return A.F(a0,r)
for(;;)switch(s){case 0:if(p.c.a===0)throw A.k(new A.cK())
g=o=p.a
f=J
s=3
return A.q(o.bf(),$async$cj)
case 3:g,n=f.T(a0),m=p.b,l=m.a
case 4:if(!n.m()){s=5
break}k=n.gt()
j=$.EJ().aj(k)
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
f="x-"+l+"-"+B.c.af(B.d.k(n),10,"0")+".sqx"
s=7
return A.q(A.hr(a,b,l,n,c,m.b.b,d),$async$cj)
case 7:s=6
return A.q(g.bW(f,a0),$async$cj)
case 6:case 1:return A.G(q,r)}})
return A.H($async$cj,r)},
gcR(){var s,r,q,p,o,n=A.ab(t.N)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q)n.n(0,s[q].a)
s=A.d([],t.Y)
for(r=this.f,p=r.length,q=0;q<r.length;r.length===p||(0,A.n)(r),++q){o=r[q]
if(!n.B(0,o.a))s.push(o)}return s},
cG(){var s,r,q,p,o
for(s=this.c,r=new A.a2(s,s.r,s.e,A.o(s).i("a2<2>"));r.m();){q=r.d
p=q.b
o=p.a
if(o!=null){p.a=null
if(p.b)A.B4(o)}q.e8()}s.an(0)
B.a.an(this.e)
B.a.an(this.f)}}
A.tq.prototype={
$2(a,b){var s=t.jr
s.a(a)
return B.d.l(s.a(b).a,a.a)},
$S:148}
A.tp.prototype={
$2(a,b){A.P(a)
A.P(b)
return a>b?a:b},
$S:48}
A.tr.prototype={
$2(a,b){A.b(a)
return B.c.l(A.b(b),a)},
$S:35}
A.dI.prototype={
T(){return"SyncFileKind."+this.b}}
A.hy.prototype={
k(a){return"BadSyncFile: "+this.a}}
A.ts.prototype={
cQ(a){return this.mN(t.L.a(a))},
mN(a){var s=0,r=A.I(t.H),q=this,p,o
var $async$cQ=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:p=$.Bf()
o=A.E(q.b,t.S)
B.a.a1(o,q.d)
s=2
return A.q(p.bG(o,new A.fa(q.c,new A.bB(a,B.R))),$async$cQ)
case 2:if(!c)throw A.k(A.eM("the signature does not match"))
return A.G(null,r)}})
return A.H($async$cQ,r)},
cN(a){return this.mk(a)},
mk(a){var s=0,r=A.I(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cN=A.J(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:h=n.d
if(h.length<28)throw A.k(A.eM("the file is incomplete"))
p=4
l=$.Be()
k=A.fg(h,28,null)
j=A.fg(h,0,12)
s=7
return A.q(l.bn(new A.ek(k,new A.cQ(A.fg(h,12,28)),j),n.b,a),$async$cN)
case 7:m=c
h=t.p.b(m)?m:new Uint8Array(A.aF(m))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
if(A.au(g) instanceof A.iu)throw A.k(A.eM("the file does not open with this key or was changed"))
else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$cN,r)}}
A.hN.prototype={
bu(){var s=0,r=A.I(t.I),q,p=this,o,n,m
var $async$bu=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:o=t.D.i("be.S")
m=o
s=3
return A.q(p.a.dP(),$async$bu)
case 3:n=m.a(b)
n=B.K.gaB().M(n)
m=o
s=4
return A.q(p.b.dP(),$async$bu)
case 4:o=m.a(b)
q=A.R(["x25519",n,"ed25519",B.K.gaB().M(o)],t.N,t.X)
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bu,r)}}
A.i3.prototype={
J(){var s=this,r=t.D.i("be.S"),q=r.a(s.d)
q=B.K.gaB().M(q)
r=r.a(s.e)
return A.R(["id",s.a,"name",s.b,"kind",s.c,"x25519",q,"ed25519",B.K.gaB().M(r),"approvedAtUtc",s.f.H().df()],t.N,t.X)}}
A.ld.prototype={}
A.tt.prototype={
eE(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="deviceId",g=a.e
switch(a.d){case"sync.switch":s=g.h(0,"on")
s.toString
A.d0(s)
return i
case"sync.epoch":s=g.h(0,"generation")
s.toString
A.P(s)
r=g.h(0,"epoch")
r.toString
A.P(r)
q=j.b
p=q.length===0?i:B.a.gaq(q)
o=p==null
n=o?i:p.b
if(r!==(n==null?0:n)+1){s=o?i:p.b
if(s==null)s=0
return"epoch "+r+" does not follow "+s}if(!o&&s<p.a)return"generation "+s+" is older"
o=g.h(0,"salt")
o.toString
B.B.M(A.b(o))
B.a.n(q,new A.ld(s,r));++j.e
return i
case"sync.primary":s=g.h(0,h)
s.toString
A.b(s)
m=j.c.h(0,s)
if(m==null||m.r!=null||m.c!=="phone")return"no approved phone "+s
if(s===j.f)return"phone "+s+" is the primary already"
j.f=s;++j.r;++j.e
return i
case"sync.device":s=g.h(0,h)
s.toString
A.b(s)
r=g.h(0,"atUtc")
r.toString
l=A.bV(A.b(r)).H()
switch(g.h(0,"action")){case"approve":r=j.c
if(r.C(s)||j.d.B(0,s))return"device "+s+" was already answered"
q=g.h(0,"name")
q.toString
A.b(q)
o=g.h(0,"kind")
o.toString
A.b(o)
n=g.h(0,"x25519")
n.toString
n=B.B.M(A.b(n))
k=g.h(0,"ed25519")
k.toString
r.j(0,s,new A.i3(s,q,o,n,B.B.M(A.b(k)),l,i))
break
case"refuse":if(j.c.C(s))return"device "+s+" is approved; remove it instead"
j.d.n(0,s)
break
case"remove":r=j.c
m=r.h(0,s)
if(m==null||m.r!=null)return"no approved device "+s
r.j(0,s,new A.i3(m.a,m.b,m.c,m.d,m.e,m.f,l))
break
default:return"unknown device action "+A.i(g.h(0,"action"))}++j.e
return i}return"not a sync operation"}}
A.iv.prototype={}
A.hC.prototype={}
A.y8.prototype={
$1(a){return A.Lf(this.a,t.b.a(a),this.b,this.c)},
$S:2}
A.z3.prototype={
$0(){var s,r=this,q=r.a,p=A.E_(q.a,q.b,r.b),o=p.a,n=p.b
q=r.c
s=r.d
return new A.ev([o,n,A.KG(q,s,n,o),A.DE(q,s,r.e,n,o)])},
$S:149}
A.z4.prototype={
$1(a){return t.nr.a(a).a[2]},
$S:150}
A.z5.prototype={
$1(a){return t.hf.a(a).a[0]},
$S:151}
A.z6.prototype={
$2(a,b){return t.B.a(a).D(0,t.hf.a(b).a[2])},
$S:152}
A.bz.prototype={}
A.mK.prototype={
ez(a){t.aD.a(a)
return B.a.a9(this.a,A.a6($.M(),this.b),new A.mL(a),t.B)},
gkV(){return this.ez(new A.mM())},
ghW(){return this.ez(new A.mP())},
gmn(){var s=this.a
return s.length===0||B.a.ga_(s).d==null?null:this.ez(new A.mO())},
ghm(){var s=this.a,r=A.N(s)
return new A.p(s,r.i("l(1)").a(new A.mN()),r.i("p<1>")).gq(0)}}
A.mL.prototype={
$2(a,b){return t.B.a(a).D(0,this.a.$1(t.ta.a(b)))},
$S:153}
A.mM.prototype={
$1(a){return a.b},
$S:45}
A.mP.prototype={
$1(a){return a.c},
$S:45}
A.mO.prototype={
$1(a){var s=a.d
s.toString
return s},
$S:45}
A.mN.prototype={
$1(a){t.ta.a(a)
return a.c.a.l(0,a.b.a)>0},
$S:155}
A.vn.prototype={
$2(a,b){var s=t.ta
s.a(a)
s.a(b)
s=this.a
return B.c.l(A.Dk(s,a.a),A.Dk(s,b.a))},
$S:156}
A.dj.prototype={
gdd(){var s=this.b
return s==null?null:this.a.c.a8(0,s)},
gmo(){return this.gdd()!=null&&this.gdd().a.l(0,$.M())<=0},
gho(){var s,r,q=this
if(q.gdd()==null||q.gmo()||q.d===0)s=null
else{s=q.gdd().a
r=A.aR(q.d)
r=A.a6(A.Cf(s.gcq().f6(0,new A.Q(r,0).gcq()),10).ct(2,B.dV),q.gdd().b)
s=r}return s}}
A.xr.prototype={
$2(a,b){var s=t.AK,r=s.a(a).a.d
s=s.a(b).a.d
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:157}
A.jF.prototype={}
A.kQ.prototype={}
A.cf.prototype={
T(){return"RecurringMark."+this.b}}
A.it.prototype={}
A.ej.prototype={
T(){return"RewardUnit."+this.b}}
A.f9.prototype={
J(){var s,r=this,q=r.b.k(0),p=r.c
p=p==null?null:p.J()
s=r.d
s=s==null?null:s.k(0)
return A.R(["categoryId",r.a,"rate",q,"capSpend",p,"capEarn",s],t.N,t.X)}}
A.l0.prototype={}
A.tx.prototype={
kW(a,b,c,d){var s,r,q,p,o,n=c*12+d
for(s=this.b,r=s.length,q=null,p=0;p<r;++p){o=s[p]
if(o.a!==a||o.b!==b||o.d*12+o.e>n)continue
if(q==null||o.d*12+o.e>=q.d*12+q.e)q=o}return q==null?null:q.c},
kX(a,b,c){var s,r,q,p,o,n=t.N,m=A.w(n,t.B)
n=A.ab(n)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
if(p.a===a)n.n(0,p.b)}n=A.eu(n,n.r,n.$ti.c)
s=n.$ti.c
while(n.m()){r=n.d
if(r==null)r=s.a(r)
o=this.kW(a,r,b,c)
if(o!=null)m.j(0,r,o)}return m}}
A.ve.prototype={
$1(a){return typeof a=="string"?A.a7(this.a.d,t.N,t.G).h(0,a):null},
$S:158}
A.vf.prototype={
$1(a){return t.Z.a(a).b===this.a.h(0,"flag")},
$S:80}
A.vg.prototype={
$1(a){return t.fK.a(a).b===this.a.h(0,"as")},
$S:159}
A.vh.prototype={
$1(a){return t.fC.a(a).a==null},
$S:240}
A.d5.prototype={}
A.la.prototype={}
A.e0.prototype={
ig(a,b,c,d){var s,r,q,p,o,n=this,m=A.d([],t.AA)
for(s=n.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.n)(s),++q){p=s[q]
if(!p.Q&&p.at!=null){o=p.at
o.toString
m.push(o)}}s=m.length
n.d!==$&&A.Ei()
n.d=s
m=s===0?null:A.aW(B.a.a9(m,A.a6($.M(),c),new A.mw(),t.B),d)
n.c!==$&&A.Ei()
n.c=m},
geU(){var s=this.b,r=A.N(s)
return new A.p(s,r.i("l(1)").a(new A.mx()),r.i("p<1>")).gq(0)}}
A.mw.prototype={
$2(a,b){var s=t.B
return s.a(a).D(0,s.a(b))},
$S:28}
A.mx.prototype={
$1(a){return!t.C5.a(a).Q},
$S:161}
A.dz.prototype={}
A.mz.prototype={}
A.vq.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=A.Lm(g,a,h.c,h.b.H()),e=f.c,d=A.d([],t.s)
for(s=a.a,g=A.KA(g,s),r=g.length,q=0;q<g.length;g.length===r||(0,A.n)(g),++q){p=g[q]
o=p.a-1
if(!(o>=0&&o<12))return A.a(B.l,o)
d.push(B.l[o]+" "+p.b)}g=A.cE(a)
r=a.d
if(r===B.o)r=A.DV(a)
else{r=B.k8.h(0,r)
r.toString}o=f.b
n=o==null?null:A.aW(o,h.d)
m=e==null
if(m)l="No statement yet"
else{l=h.e
l="Statement to "+A.d3(e,l)+", "+A.Dv(e,l)}k=f.w
if(k===0)k=null
else{j=k===1?"":"s"
i=h.d
i=""+k+" alert"+j+": "+A.aW(f.x,i)+" out, "+A.aW(f.y,i)+" in"
k=i}j=h.f.h(0,s)
if(j==null)j=0
i=a.CW!=null
if(i)m=null
else{m=!m&&f.f
m=A.Jm(e,d,m,h.e)}return new A.d5(s,g,a.c,r,n,l,k,d,j,i,m,o)},
$S:162}
A.vo.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d!==B.y},
$S:2}
A.vp.prototype={
$2(a,b){var s=t.b
s.a(a)
s.a(b)
s=a.CW!=null
if(s!==(b.CW!=null))s=s?1:-1
else s=B.c.l(a.b,b.b)
return s},
$S:10}
A.wa.prototype={
$2(a,b){var s,r=t.v
r.a(a)
r=r.a(b).d
s=a.d
return A.f(r.a,r.b,r.c).l(0,A.f(s.a,s.b,s.c))},
$S:24}
A.kh.prototype={
jP(){var s=new A.am($.ai,t.oX),r=new A.cC(s,t.Ck),q=A.x(A.x(A.x(v.G.window).indexedDB).open("santhiq-page",1))
q.onupgradeneeded=A.b_(new A.nn(q))
q.onsuccess=A.b_(new A.no(r,q))
q.onerror=A.b_(new A.np(r))
return s},
cl(a){var s=new A.am($.ai,t.nR),r=new A.cC(s,t.le)
a.onsuccess=A.b_(new A.nl(r,a))
a.onerror=A.b_(new A.nm(r))
return s},
bL(a){var s=0,r=A.I(t.m),q,p=this,o,n
var $async$bL=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=3
return A.q(p.jP(),$async$bL)
case 3:q=o.x(n.x(c.transaction("keep",a)).objectStore("keep"))
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bL,r)},
bw(){var s=0,r=A.I(t.m),q,p=this,o,n,m
var $async$bw=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:m=A
s=4
return A.q(p.bL("readonly"),$async$bw)
case 4:s=3
return A.q(p.cl(m.x(b.get("wrap"))),$async$bw)
case 3:n=b
if(n!=null){q=A.x(n)
s=1
break}s=5
return A.q(A.bF(A.x(A.x(A.x(A.x(v.G.window).crypto).subtle).generateKey($.Ev(),!1,A.d(["encrypt","decrypt"],t.s))),t.X),$async$bw)
case 5:o=b
o.toString
A.x(o)
m=A
s=7
return A.q(p.bL("readwrite"),$async$bw)
case 7:s=6
return A.q(p.cl(m.x(b.put(o,"wrap"))),$async$bw)
case 6:q=o
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bw,r)},
bT(){var s=0,r=A.I(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b
var $async$bT=A.J(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:p=4
e=A
s=8
return A.q(n.bL("readonly"),$async$bT)
case 8:s=7
return A.q(n.cl(e.x(a0.get("data"))),$async$bT)
case 7:m=a0
if(m==null){q=null
s=1
break}l=A.d(A.b(m).split("."),t.s)
k=B.B.M(J.as(l,0))
j=B.B.M(J.as(l,1))
e=A
d=A
c=A.x(A.x(A.x(v.G.window).crypto).subtle)
b=A.A5(A.R(["name","AES-GCM","iv",k],t.N,t.K))
s=10
return A.q(n.bw(),$async$bT)
case 10:s=9
return A.q(e.bF(d.x(c.decrypt(b,a0,j)),t.X),$async$bT)
case 9:i=a0
h=i
h.toString
h=B.O.c2(A.ih(t.h.a(h),0,null))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
s=11
return A.q(n.an(0),$async$bT)
case 11:q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$bT,r)},
ce(a){var s=0,r=A.I(t.H),q=this,p,o,n,m,l,k,j,i
var $async$ce=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:n=new Uint8Array(12)
m=v.G
A.x(A.x(A.x(m.window).crypto).getRandomValues(n))
l=A
k=A
j=A.x(A.x(A.x(m.window).crypto).subtle)
i=A.A5(A.R(["name","AES-GCM","iv",n],t.N,t.K))
s=3
return A.q(q.bw(),$async$ce)
case 3:s=2
return A.q(l.bF(k.x(j.encrypt(i,c,B.E.M(a))),t.X),$async$ce)
case 2:p=c
m=t.D.i("be.S")
m.a(n)
o=B.K.gaB().M(n)
p.toString
m=m.a(A.ih(t.h.a(p),0,null))
m=B.K.gaB().M(m)
l=A
s=5
return A.q(q.bL("readwrite"),$async$ce)
case 5:s=4
return A.q(q.cl(l.x(c.put(o+"."+m,"data"))),$async$ce)
case 4:return A.G(null,r)}})
return A.H($async$ce,r)},
an(a){var s=0,r=A.I(t.H),q=1,p=[],o=this,n,m,l
var $async$an=A.J(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.q(o.bL("readwrite"),$async$an)
case 6:n=c
s=7
return A.q(o.cl(A.x(n.delete("data"))),$async$an)
case 7:s=8
return A.q(o.cl(A.x(n.delete("wrap"))),$async$an)
case 8:q=1
s=5
break
case 3:q=2
l=p.pop()
s=5
break
case 2:s=1
break
case 5:return A.G(null,r)
case 1:return A.F(p.at(-1),r)}})
return A.H($async$an,r)},
$iG0:1}
A.nn.prototype={
$1(a){A.x(a)
return A.x(A.x(this.a.result).createObjectStore("keep"))},
$S:163}
A.no.prototype={
$1(a){A.x(a)
return this.a.cC(A.x(this.b.result))},
$S:9}
A.np.prototype={
$1(a){A.x(a)
return this.a.dK(new A.dF(u.p))},
$S:9}
A.nl.prototype={
$1(a){A.x(a)
return this.a.cC(this.b.result)},
$S:9}
A.nm.prototype={
$1(a){A.x(a)
return this.a.dK(new A.dF(u.p))},
$S:9}
A.uW.prototype={
$2(a,b){return this.a.setAttribute(A.b(a),A.i(A.d1(b)))},
$S:165}
A.uX.prototype={
$1(a){return A.P(a)*this.a},
$S:46}
A.uY.prototype={
$1(a){return A.AD(a)>=this.a},
$S:167}
A.wx.prototype={
$1(a){return a===B.Q.mz(a)?B.Q.bF(a,0):B.Q.bF(a,1)},
$S:75}
A.uA.prototype={
$1(a){var s=this.a.a
return 12+(s-a)/(s-this.b)*220},
$S:169}
A.xu.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:46}
A.xD.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:46}
A.bb.prototype={
T(){return"_View."+this.b}}
A.vm.prototype={
$2(a,b){return this.a.append(A.b(a),A.b(b))},
$S:170}
A.kO.prototype={
ii(a){var s=this,r=v.G,q=A.aU(new A.p(B.di,t.aX.a(new A.r8(B.c.eZ(A.b(A.x(A.x(r.window).location).hash),"#",""))),t.i0),t.sn)
s.at=q==null?B.c6:q
s.b.onmessage=A.b_(new A.r9(s))
A.x(r.window).addEventListener("pagehide",A.b_(new A.ra(s)))
A.H7(B.eB,new A.rb(s))},
gcw(){var s=this.Q
return s===$?this.Q=A.aC(new A.a5(Date.now(),0,!1).H(),B.n).a:s},
gcp(){var s=this.as
return s===$?this.as=A.aC(new A.a5(Date.now(),0,!1).H(),B.n).b:s},
iB(a){var s,r,q,p=this,o=a.data
if(o!=null)s=!(typeof o==="string")
else s=!0
if(s)return
r=A.KU(A.b(o),p.c)
q=p.c=null
A:{if(r instanceof A.ii)return
s=r instanceof A.em
if(s)q=r.a
if(s){p.a.ay=q
p.ad()
break A}if(r instanceof A.fY)p.ai(t.U.a(new A.oP(p,r)))}},
kq(){var s,r,q,p=A.IP()
this.c=p
s=this.a
r=s.c
q=A.j7("https","accounts.google.com","/o/oauth2/v2/auth",A.R(["client_id",r.a,"redirect_uri",r.b,"response_type","token","scope",B.a.S(B.dg," "),"state",p,"include_granted_scopes","false","prompt","select_account"],t.N,t.z))
if(A.aV(A.x(v.G.window).open(q.gdG(),"santhiq-sign-in","popup,width=500,height=650"))==null){s.ay="The sign-in window was blocked. Allow pop-ups for this page and try again."
this.ad()}},
ai(a){return this.kh(t.U.a(a))},
kh(a){var s=0,r=A.I(t.H),q,p=2,o=[],n=[],m=this
var $async$ai=A.J(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(m.e){s=1
break}m.e=!0
m.ad()
p=3
s=6
return A.q(a.$0(),$async$ai)
case 6:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
m.e=!1
m.ad()
s=n.pop()
break
case 5:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$ai,r)},
jT(){var s,r,q,p=this
if(p.e)return
s=p.a
r=s.cx
if(r!==B.bE)q=r===B.at&&new A.a5(Date.now(),0,!1).aX(p.f).a>12e7
else q=!0
if(!q)return
p.f=new A.a5(Date.now(),0,!1)
p.ai(t.U.a(s.geY()))},
L(a,b,c){var s=A.x(A.x(v.G.document).createElement(a))
if(c!=null)s.textContent=c
if(b!=null)s.className=b
return s},
V(a){return this.L(a,null,null)},
K(a,b){return this.L(a,null,b)},
Z(a,b){return this.L(a,b,null)},
dz(a,b,c,d){var s,r
t.O.a(b)
s=this.L("button",c,a)
s.type="button"
r=d||this.e
s.disabled=r
s.addEventListener("click",A.b_(new A.oV(b)))
return s},
bc(a,b,c){return this.dz(a,b,c,!1)},
av(a,b){return this.dz(a,b,null,!1)},
ea(a,b,c){return this.dz(a,b,null,c)},
fN(a,b,c){var s,r,q
t.wI.a(c)
s=v.G
r=A.x(A.x(s.document).createElement("input"))
r.type="checkbox"
r.checked=b
r.addEventListener("change",A.b_(new A.qZ(c,r)))
q=this.Z("label","switch")
q.append(r)
q.append(A.x(A.x(s.document).createTextNode(" "+a)))
return q},
ad(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b="span",a="p",a0=A.aV(A.x(v.G.document).querySelector("#app"))
a0.toString
a0.textContent=""
s=c.V("header")
s.append(c.K("h1","SanthIQ"))
r=c.a
q=r.z
p=q==null?null:q.b
if(p!=null)s.append(c.L(b,"quiet",p))
if(r.cx===B.at){s.append(c.fN("Show amounts",!r.ch,new A.rc(c)))
s.append(c.fN("Allow changes",r.CW,new A.rd(c)))}if(r.cx!==B.b_){q=c.bc("Forget this browser",new A.re(c),"quiet-button")
q.setAttribute("title","Clears what this browser keeps; the next visit needs the passphrase and the phone.")
s.append(q)}a0.append(s)
if(r.cx===B.at&&r.CW){q=c.Z("div","editing")
q.append(c.K(b,"Changes allowed: what you send from this page goes to the phone on its next sync."))
q.append(c.av("Stop allowing changes",new A.rf(c)))
a0.append(q)}o=r.ay
if(o!=null)a0.append(c.L(a,"problem",o))
n=c.r
if(n!=null)a0.append(c.L(a,"said",n))
if(c.e)a0.append(c.L(a,"quiet","Working\u2026"))
switch(r.cx.a){case 0:a0.append(c.K(a,r.f!=null?"This browser is approved. Sign in to Google to open SanthIQ.":"SanthIQ for this computer. Once the phone approves this browser it stays approved until you remove it on the phone or press Forget this browser."))
a0.append(c.bc("Sign in with SanthIQ's Google account",c.gkp(),"primary"))
break
case 1:c.j6(a0)
break
case 2:a0.append(c.K("h2","Waiting for the phone"))
a0.append(c.K(a,"On the phone: Settings, Devices. Check the code matches, then Approve."))
r=r.as
if(r==null)r=null
else{r=r.b.b
q=A.E(r.c,t.S)
B.a.a1(q,r.d)
m=B.aC.M(q).a
r=m.length
if(0>=r)return A.a(m,0)
q=m[0]
if(1>=r)return A.a(m,1)
l=m[1]
if(2>=r)return A.a(m,2)
k=m[2]
if(3>=r)return A.a(m,3)
j=B.c.af(B.d.k(B.d.P((q<<24|l<<16|k<<8|m[3])>>>0,1e6)),6,"0")
k=B.c.X(j,0,3)+" "+B.c.aa(j,3)
r=k}a0.append(c.L(a,"code",r==null?"":r))
a0.append(c.av("Look again now",new A.rg(c)))
break
case 3:i=c.Z("nav","side")
for(h=null,g=0;g<12;++g){f=B.di[g]
e=f.d
if(e!==h){i.append(c.L(b,"side-group",e))
h=e}q=f===c.at?"tab on":"tab"
i.append(c.bc(f.c,new A.rh(c,f),q))}d=c.Z("div","content")
q=c.Z("div","shell")
q.append(i)
q.append(d)
a0.append(q)
switch(c.at.a){case 0:c.j9(d)
break
case 1:c.j2(d)
break
case 2:c.j8(d)
break
case 3:c.jg(d)
break
case 4:c.j5(d)
break
case 5:c.jf(d)
break
case 6:c.j3(d)
break
case 8:c.jb(d)
break
case 9:c.jc(d)
break
case 7:c.j4(d)
break
case 10:c.j7(d)
break
case 11:c.je(d)
c.jd(d)
if(r.CW)c.ja(d)
break}break
case 4:a0.append(c.K(a,"This browser was removed on the phone."))
break}},
j6(a){var s,r=this,q=r.V("form"),p=A.x(A.x(v.G.document).createElement("input"))
p.type="password"
p.autocomplete="off"
p.id="passphrase"
p.required=!0
s=r.K("label","SanthIQ's passphrase")
s.setAttribute("for","passphrase")
q.append(s)
q.append(p)
s=r.L("button","primary","Ask the phone to let this browser in")
s.type="submit"
s.disabled=r.e
q.append(s)
q.append(r.L("p","quiet","The passphrase opens the key in this tab for a moment to seal the request, and is then dropped. It is never sent or kept."))
q.addEventListener("submit",A.b_(new A.pz(r,p)))
a.append(r.K("h2","Join"))
a.append(q)},
j9(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.at
a1.toString
s=a.gcw()
r=a.gcp()-1
if(!(r>=0&&r<12))return A.a(B.a0,r)
a2.append(a.iG(B.a0[r]+" "+s))
s=a.w
r=a.gcw()
q=a.gcp()
p=a0.c
o=new A.a5(Date.now(),0,!1).H()
n=A.Jy(a1,s,a0.ax,p.c,a0.ch,q,o,p.d,r)
m=a.Z("ul","notes")
for(a0=n.d,a1=a0.length,l=0;l<a0.length;a0.length===a1||(0,A.n)(a0),++l)m.append(a.K("li",a0[l]))
a2.append(m)
a0=n.f
if(a0.length!==0){k=a.Z("section","attention")
k.append(a.K("h2","Needs attention ("+a0.length+")"))
for(a1=a0.length,l=0;l<a0.length;a0.length===a1||(0,A.n)(a0),++l){j=a0[l]
i=a.Z("div","row click")
i.append(a.K("span",j.a))
i.append(a.L("small","warn",j.b))
i.addEventListener("click",A.b_(new A.pK(a)))
k.append(i)}a2.append(k)}for(a0=n.e,a1=a0.length,l=0;l<a0.length;a0.length===a1||(0,A.n)(a0),++l){h=a0[l]
g=a.V("section")
s=h.a
g.append(a.K("h2",A.eF(s)+" ("+s+")"))
for(s=h.b,f=0;f<3;++f){e=s[f]
g.append(a.d0(e.a,e.b,e.c,!0))}d=a.Z("ul","notes")
for(s=h.e,r=s.length,f=0;f<s.length;s.length===r||(0,A.n)(s),++f)d.append(a.K("li",s[f]))
g.append(d)
g.append(a.K("h3","Spending by category"))
s=h.d
if(s!=null)g.append(a.L("p","quiet",s))
for(s=h.c,r=s.length,f=0;f<s.length;s.length===r||(0,A.n)(s),++f){c=s[f]
g.append(a.fI(c.a,c.b,c.c))}s=h.f
if(s.length!==0){g.append(a.K("h3","Accounts"))
for(r=s.length,f=0;f<s.length;s.length===r||(0,A.n)(s),++f){b=s[f]
i=a.fI(b.a,b.b,b.c)
i.className="row click"
i.addEventListener("click",A.b_(new A.pL(a)))
g.append(i)}}a2.append(g)}},
ex(){var s=this.a.at.gcA(),r=A.o(s).i("az<1>"),q=A.E(new A.az(s,r),r.i("h.E"))
if(!B.a.B(q,this.w))this.w=q.length===0?"personal":B.a.ga_(q)
return q},
dw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="span"
t.a.a(b)
s=e.a
r=s.at
r.toString
q=e.ex()
p=e.Z("nav","books")
for(o=q.length,n=0;n<q.length;q.length===o||(0,A.n)(q),++n){m=q[n]
l=A.hi(m,r)
k=m===e.w?"tab on":"tab"
p.append(e.bc(l,new A.oQ(e,m),k))}j=s.ax
p.append(e.Z(d,"grow"))
s=e.L(d,"quiet",j==null?"Nothing published yet":"As of "+A.DZ(j))
s.setAttribute("title","Changes made on the phone since show after its next sync.")
p.append(s)
p.append(e.av("Get the latest",new A.oR(e)))
i=e.Z("div","bars")
i.append(p)
s=a==null
if(!s||b.length>1){h=e.Z("nav","sub")
s=!s
if(s){g=e.gcw()===A.aC(new A.a5(Date.now(),0,!1).H(),B.n).a&&e.gcp()===A.aC(new A.a5(Date.now(),0,!1).H(),B.n).b
r=e.bc("\u2039",new A.oS(e),"step")
r.setAttribute("aria-label","Earlier")
h.append(r)
h.append(e.K("strong",a))
r=e.dz("\u203a",new A.oT(e),"step",g)
r.setAttribute("aria-label","Later")
h.append(r)}if(b.length>1){if(s)h.append(e.Z(d,"gap"))
for(s=b.length,n=0;n<b.length;b.length===s||(0,A.n)(b),++n){f=b[n]
r=A.eF(f)
o=f===e.x?"tab on":"tab"
h.append(e.bc(r+" ("+f+")",new A.oU(e,f),o))}}i.append(h)}return i},
iH(a){return this.dw(null,a)},
c0(){return this.dw(null,B.b)},
iG(a){return this.dw(a,B.b)},
aN(a,b){var s,r,q,p,o,n,m,l=this
t.a.a(a)
t.L.a(b)
s=l.V("table")
r=l.V("tr")
for(q=A.bK(a,0,t.N),p=J.T(q.a),o=q.b,q=new A.at(p,o,A.o(q).i("at<1>"));q.m();){n=q.c
n=n>=0?new A.t(o+n,p.gt()):A.j(A.aq())
m=B.a.B(b,n.a)?"amount":null
r.append(l.L("th",m,n.b))}q=l.V("thead")
q.append(r)
s.append(q)
s.append(l.V("tbody"))
return s},
dF(a){return this.aN(a,B.A)},
c1(a,b,c){var s,r,q,p,o,n
t.a.a(a)
t.L.a(c)
s=this.Z("tr",b)
for(r=A.bK(a,0,t.N),q=J.T(r.a),p=r.b,r=new A.at(q,p,A.o(r).i("at<1>"));r.m();){o=r.c
o=o>=0?new A.t(p+o,q.gt()):A.j(A.aq())
n=B.a.B(c,o.a)?"amount":null
s.append(this.L("td",n,o.b))}return s},
fj(a){return this.c1(a,null,B.A)},
b6(a,b){return this.c1(a,null,b)},
j2(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a,b4=b3.at
b4.toString
b5.append(b2.c0())
s=b2.w
r=new A.a5(Date.now(),0,!1).H()
for(s=A.DA(b4,s,b3.ch,r,b3.c.d).b,r=s.length,q=t.s,p=b4.r.a,o=0;o<s.length;s.length===r||(0,A.n)(s),++o){n=s[o]
m=b2.V("section")
l=n.a
m.append(b2.K("h2",A.eF(l)+" ("+l+")"))
for(l=n.b,k=l.length,j=0;j<l.length;l.length===k||(0,A.n)(l),++j){i=l[j]
h=i.b
m.append(b2.K("h3",i.a.c+" ("+h.length+")"))
g=i.c
g===$&&A.mo()
f=g==null
if(f)e=null
else{e=i.d
e===$&&A.mo()
d=e===1?"":"s"
d=g+" over "+e+" account"+d+" with a balance"
e=d}if(e!=null){if(f)g=null
else{f=i.d
f===$&&A.mo()
e=f===1?"":"s"
e=g+" over "+f+" account"+e+" with a balance"
g=e}m.append(b2.L("p","total-line","Total: "+A.i(g)))}c=b2.aN(B.jq,B.db)
c.className="accounts"
g=A.aV(c.querySelector("tbody"))
g.toString
for(f=h.length,b=0;b<h.length;h.length===f||(0,A.n)(h),++b){a=h[b]
e=a.as
d=e==null
a0=d?"":"\u26a0 "
a1=a.Q?" (closed)":""
a2=a.f
if(a2==null)a2="No balance yet"
a3=a.y
a3=a3.length===0?"None":B.a.S(a3,", ")
a4=a.x
if(a4==null)a4="None"
a4=A.d([a0+a.b+a1,a.c,a.d,a2,a.r,""+a.z,a3,a4],q)
a3=A.d([],q)
a0=a.a
if(a0===b2.ax)a3.push("open")
a3.push("click")
d=!d
if(d)a3.push("attention")
a5=b2.c1(a4,B.a.S(a3," "),B.db)
if(d){d=A.C("^Out of date: statement to [^.]*",!0,!1)
a6=A.Eh(e,d,"Out of date",0)
e=A.aV(A.x(a5.children).item(4))
e.toString
e.append(b2.L("div","warn small",a6))}a5.addEventListener("click",A.b_(new A.oW(b2,a)))
g.append(a5)
if(a0!==b2.ax)continue
e=new A.a5(Date.now(),0,!1).H()
a7=A.JC(b4,a0,b3.ch,e)
a8=b2.aN(A.d(["Statement period","Opening","Closing","State"],q),B.aP)
for(e=a7.length,a9=0;a9<a7.length;a7.length===e||(0,A.n)(a7),++a9){b0=a7[a9]
d=A.aV(a8.querySelector("tbody"))
d.toString
d.append(b2.b6(A.d([b0.a,b0.b,b0.c,b0.d],q),B.aP))}b1=b2.Z("td","inner")
b1.setAttribute("colspan","8")
e=a7.length===0?b2.L("p","quiet","No statement recorded yet."):a8
b1.append(e)
if(b3.CW){e=p.h(0,a0)
e.toString
b1.append(b2.ir(e))}e=b2.V("tr")
e.append(b1)
g.append(e)}m.append(c)}b5.append(m)}},
j8(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="p",a3="quiet",a4="section",a5=a1.a,a6=a5.at
a6.toString
a7.append(a1.c0())
s=A.aC(new A.a5(Date.now(),0,!1).H(),B.n)
r=A.Jx(a6,a1.w,a5.ch,s)
if(r.length===0)a7.append(a1.L(a2,a3,"No loans in this book yet."))
for(q=r.length,p=t.s,o=null,n=0;n<r.length;r.length===q||(0,A.n)(r),++n){m=r[n]
l=m.a
k=l.e
if(k!==o){a7.append(a1.L("h2","region",A.eF(k)+" ("+k+")"))
o=k}j=a1.Z(a4,"loan")
i=A.DV(l)
h=l.CW!=null?" (closed)":""
j.append(a1.K("h2",m.b+" \xb7 "+i+h))
h=A.d([],p)
i=m.c
if(i.length!==0)h.push(i)
h.push(m.d)
j.append(a1.L(a2,"lead",B.a.S(h,". ")))
j.append(a1.L(a2,a3,m.e+". Outstanding: "+m.f+"."))
i=m.r
h=A.N(i)
g=h.i("p<1>")
f=A.E(new A.p(i,h.i("l(1)").a(new A.pH()),g),g.i("h.E"))
if(f.length!==0)j.append(a1.L(a2,"todo","To do: add the "+B.a.S(f," and ")+" so it can be checked and forecast."))
i=m.w
if(i.length!==0){e=a1.aN(A.d(["Instalment","Amount","Status","Still due"],p),B.d7)
for(h=i.length,d=0;d<i.length;i.length===h||(0,A.n)(i),++d){c=i[d]
g=A.aV(e.querySelector("tbody"))
g.toString
g.append(a1.b6(A.d([c.a,c.b,c.c,c.d],p),B.d7))}j.append(e)}if(a5.CW&&!a5.ch)j.append(a1.fC(l))
if(a5.CW&&a5.ch)j.append(a1.L(a2,a3,"Tick Show amounts to update its details."))
a7.append(j)}q=A.d([],t.sA)
for(p=A.AJ(a6),l=p.length,n=0;n<p.length;p.length===l||(0,A.n)(p),++n){b=p[n]
if(b.a.r===a1.w){i=b.b
h=i.c.a.l(0,$.M())
i=h!==0&&A.DT(a6,i.bS(b.d))==null}else i=!1
if(i)q.push(b)}B.a.E(q,new A.pI())
if(q.length!==0){j=a1.V(a4)
j.append(a1.K("h2","On card statements, not added yet ("+q.length+")"))
for(a6=q.length,n=0;n<q.length;q.length===a6||(0,A.n)(q),++n){b=q[n]
a=a1.V(a2)
p=b.a
l=A.eF(p.e)
i=b.b
h=i.a===B.bX?"personal loan":"instalment plan"
g=i.b.k(0)
a0=A.aW(i.c,a5.ch)
i=i.e
i=i==null?"":", "+A.i(i)+" instalments left"
a.append(a1.K("span",l+", "+(p.c+" "+h+" of "+g)+": "+a0+" outstanding"+i+" (statement to "+b.c.k(0)+"). "))
if(a5.CW)a.append(a1.av("Add this loan",new A.pJ(a1,b)))
j.append(a)}a7.append(j)}if(a5.CW){a5=a1.V(a4)
a5.append(a1.fC(null))
a7.append(a5)}},
fC(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6="text",a7="17/11/2026",a8=a4.a,a9=a8.at
a9.toString
s=b0==null
r=s?a5:b0.as
if(r==null)r=B.ds
q=a4.Z("form","edit")
q.append(a4.K("h3",s?"Add a loan":"Update loan details"))
p=new A.qV(a4,q)
o=new A.qW(a4,q)
n=a8.gma()
if(s){a8=A.d([],t.M)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.n)(n),++l){k=n[l].a
a8.push(new A.t(k,k))}m=A.aU(n,t.hS)
m=m==null?a5:m.a
j=o.$3("Bank",a8,m==null?"":m)}else j=a5
i=s?p.$3("Last 4 digits",a6,""):a5
h=s?o.$3("Currency",B.j1,"SGD"):a5
g=s?p.$4$placeholder("Track from",a6,A.me(A.aC(new A.a5(Date.now(),0,!1).H(),B.n)),a7):a5
a8=t.M
s=A.d([B.dK],a8)
for(l=0;l<4;++l){m=B.bw[l].b
if(0>=m.length)return A.a(m,0)
s.push(new A.t(m,m[0].toUpperCase()+B.c.aa(m,1)))}m=r.a
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
a=p.$4$placeholder("Left as of",a6,A.me(r.f),a7)
s=r.r
s=s==null?a5:s.a.k(0)
a0=p.$3("Instalment",a6,s==null?"":s)
a9=a9.gR().gU()
s=A.o(a9)
m=s.i("p<h.E>")
a1=A.E(new A.p(a9,s.i("l(h.E)").a(new A.qR(r)),m),m.i("h.E"))
B.a.E(a1,new A.qS())
a8=A.d([B.dK],a8)
for(a9=a1.length,l=0;l<a1.length;a1.length===a9||(0,A.n)(a1),++l){a2=a1[l]
a8.push(new A.t(a2.a,A.cE(a2)))}a9=r.w
a3=o.$3("Paid from",a8,a9==null?"":a9)
a8=a4.L("button","primary","Send to the phone")
a8.type="submit"
a8.disabled=a4.e
q.append(a8)
q.addEventListener("submit",A.b_(new A.qT(a4,a,g,f,e,d,c,b,new A.qU(),a0,a3,b0,n,j,i,h)))
return q},
aU(a,b,c){var s,r,q,p,o,n,m
t.DX.a(a)
t.ma.a(c)
s=v.G
r=A.x(A.x(s.document).createElement("select"))
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.n)(a),++p){o=a[p]
n=o.a
m=A.x(A.x(s.document).createElement("option"))
m.value=n
m.textContent=o.b
m.selected=n===b
r.append(m)}r.addEventListener("change",A.b_(new A.qY(c,r)))
return r},
bl(a,b,c,d){var s
t.ma.a(c)
s=A.x(A.x(v.G.document).createElement("input"))
s.type=a
s.value=b
if(d!=null)s.placeholder=d
s.addEventListener("change",A.b_(new A.qF(c,s)))
return s},
fz(a,b,c){return this.bl(a,b,c,null)},
ak(a,b){var s=this.Z("label","field")
s.append(this.K("span",a))
s.append(b)
return s},
jg(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="dd/mm/yyyy",a6=a3.a,a7=a6.at
a7.toString
a8.append(a3.c0())
s=a3.ch
r=a3.w
if(s.a!==r)a3.ch=new A.ci(r,a4,a4,a4,"",B.c_,a4,B.bZ,0)
q=new A.qu(a3)
s=a7.gR().gU()
r=A.o(s)
p=r.i("p<h.E>")
o=A.E(new A.p(s,r.i("l(h.E)").a(new A.qg(a3)),p),p.i("h.E"))
B.a.E(o,new A.qh())
s=A.a7(a7.d,t.N,t.G).gU()
n=A.E(s,A.o(s).i("h.E"))
B.a.E(n,new A.qi())
m=new A.qt(a3,q)
l=a3.Z("div","filters")
l.append(a3.ak("Words",a3.bl("search",a3.ch.e,new A.ql(a3,q),"Payee or note")))
s=t.M
r=A.d([B.lf],s)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.n)(o),++k){j=o[k]
r.push(new A.t(j.a,A.cE(j)))}p=a3.ch.b
if(p==null)p=""
l.append(a3.ak("Account",a3.aU(r,p,new A.qm(a3,q))))
l.append(a3.ak("From",a3.bl("text",A.me(a3.ch.c),new A.qn(a3,m),a5)))
l.append(a3.ak("To",a3.bl("text",A.me(a3.ch.d),new A.qo(a3,m),a5)))
p=A.d([],s)
for(k=0;k<4;++k){i=B.dn[k]
p.push(new A.t(i.b,i.c))}l.append(a3.ak("Show",a3.aU(p,a3.ch.f.b,new A.qp(a3,q))))
r=A.d([B.kU,B.l7],s)
for(p=n.length,k=0;k<n.length;n.length===p||(0,A.n)(n),++k){h=n[k]
r.push(new A.t(h.a,h.c))}p=a3.ch.r
if(p==null)p=""
l.append(a3.ak("Category",a3.aU(r,p,new A.qq(a3,q))))
s=A.d([],s)
for(k=0;k<4;++k){i=B.dr[k]
s.push(new A.t(i.b,i.c))}l.append(a3.ak("Order",a3.aU(s,a3.ch.w.b,new A.qr(a3,q))))
s=a3.ch
r=new A.a5(Date.now(),0,!1).H()
g=A.JD(a7,s,a6.ch,r)
f=a3.Z("ul","notes")
for(a6=g.e,s=a6.length,k=0;k<a6.length;a6.length===s||(0,A.n)(a6),++k)f.append(a3.K("li",a6[k]))
e=a3.V("section")
e.append(l)
a6=g.b
s=A.AS(""+a6,"SGD")
a6=a6===1?"":"s"
e.append(a3.L("p","quiet",s+" transaction"+a6))
e.append(f)
a6=t.s
d=a3.aN(A.d(["Date","Account","Payee","Amount","Type","Category","State","Note"],a6),B.aQ)
d.className="tx"
for(s=g.a,r=s.length,k=0;k<s.length;s.length===r||(0,A.n)(s),++k){c=s[k]
p=A.d([c.b,c.c,c.d,c.e,c.f,c.r,c.w,c.x],a6)
b=c.a
a=a3.c1(p,b===a3.ay?"open click":"click",B.aQ)
a.addEventListener("click",A.b_(new A.qs(a3,c)))
a0=A.aV(d.querySelector("tbody"))
a0.append(a)
if(b===a3.ay){a1=a3.Z("td","inner")
a1.setAttribute("colspan","8")
p=a3.V("tr")
a1.append(a3.kF(a7,b))
p.append(a1)
a0.append(p)}}a2=a3.V("nav")
a6=g.c
a2.append(a3.ea("\u2039 Newer",new A.qj(a3,q,g),a6===0))
a7=g.d
a2.append(a3.L("span","quiet","Page "+(a6+1)+" of "+a7))
a2.append(a3.ea("Older \u203a",new A.qk(a3,q,g),a6>=a7-1))
e.append(d)
e.append(a2)
a8.append(e)},
j5(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="p",a9="quiet",b0="section",b1="h2",b2="attention",b3="customer",b4="date",b5="edit-grid",b6="td",b7="text",b8="paymentDays",b9=a7.a,c0=b9.at
c0.toString
s=t.s
r=A.d([],s)
for(q=c0.gcA(),q=new A.cq(q,q.r,q.e,A.o(q).i("cq<1>")),p=c0.f;q.m();){o=q.d
n=p.h(0,o)
if(n==null)n=o==="personal"?"personal":null
if(n==="company")r.push(o)}if(r.length!==0&&!B.a.B(r,a7.w))a7.w=B.a.ga_(r)
c1.append(a7.c0())
if(!B.a.B(r,a7.w)){c1.append(a7.L(a8,a9,"Invoices are made for a company book; this book is not one."))
return}r=a7.w
q=A.aC(new A.a5(Date.now(),0,!1).H(),B.n)
m=A.Jv(c0,r,b9.ch,q)
l=b9.CW
b9=m.a
if(b9==null){b9=a7.V(b0)
b9.append(a7.L(a8,"warn","Set up who issues "+A.hi(a7.w,c0)+"'s invoices on the phone first (Books, "+A.hi(a7.w,c0)+", Make sales invoices): the UEN and the account number are kept there."))
c1.append(b9)}else{c0=m.b?"tax invoices with GST at 9%":"plain invoices, not GST registered"
c1.append(a7.L(a8,a9,b9+": "+c0+". Drafts made here are issued, numbered and made into PDFs on the phone."))}k=a7.V(b0)
b9=m.e
k.append(a7.K(b1,"Issued ("+b9.length+")"))
if(b9.length===0)k.append(a7.L(a8,a9,"None issued yet."))
if(b9.length!==0){c0=A.d(["Number","Customer","Date","Due"],s)
r=m.b
if(r)c0.push("GST")
c0.push("Total")
c0.push("State")
j=a7.aN(c0,r?B.de:B.dc)
for(c0=b9.length,i=0;i<b9.length;b9.length===c0||(0,A.n)(b9),++i){h=b9[i]
q=h.a
q=A.d([q.w,q.Q,h.b,h.c],s)
if(r)q.push(h.e)
q.push(h.d)
p=h.f
q.push(p)
o=r?B.de:B.dc
g=a7.c1(q,p==="Overdue"?b2:null,o)
A.aV(j.querySelector("tbody")).append(g)}k.append(j)}c1.append(k)
f=a7.V(b0)
b9=m.d
f.append(a7.K(b1,"Drafts ("+b9.length+")"))
if(b9.length===0)f.append(a7.L(a8,a9,"No draft."))
for(c0=b9.length,r=m.b,i=0;i<b9.length;b9.length===c0||(0,A.n)(b9),++i){e=b9[i]
d=a7.Z("div","draft")
d.append(a7.K("h3",e.b+" \xb7 "+e.c))
q=e.e
p=q==null
q=p?"Missing: "+B.a.S(e.f,", ").toLowerCase()+".":"If issued now: "+q
d.append(a7.L(a8,p?"warn":a9,q))
q=A.d(["Description","Qty","Unit price","Amount"],s)
if(r)q.push("GST")
j=a7.aN(q,B.d5)
for(q=e.d,p=q.length,c=0;c<q.length;q.length===p||(0,A.n)(q),++c){b=q[c]
o=A.aV(j.querySelector("tbody"))
o.toString
n=A.d([b.a,b.b,b.c,b.d],s)
if(r)n.push(b.e)
o.append(a7.b6(n,B.d5))}d.append(j)
if(l)d.append(a7.av("Remove this draft",new A.pj(a7,e)))
f.append(d)}c1.append(f)
if(l&&m.c.length!==0){a=a7.CW
a0=new A.pw(a7,a)
if(a.h(0,b3)==null)a.j(0,b3,B.a.ga_(m.c).b)
if(a.h(0,b4)==null)a.j(0,b4,A.me(A.aC(new A.a5(Date.now(),0,!1).H(),B.n)))
a1=a7.Z("div",b5)
b9=A.d([],t.M)
for(c0=m.c,q=c0.length,i=0;i<c0.length;c0.length===q||(0,A.n)(c0),++i){a2=c0[i]
p=A.m(a2.c.h(0,"name"))
p.toString
b9.push(new A.t(a2.b,p))}c0=a.h(0,b3)
c0.toString
a1.append(a7.ak("Customer",a7.aU(b9,c0,new A.pk(a))))
a1.append(a0.$3$placeholder(b4,"Invoice date","dd/mm/yyyy"))
a1.append(a0.$3$placeholder("reference","Customer reference (optional)","Like a PO number"))
a1.append(a0.$3$wide("note","Note (optional)",!0))
c0=A.d(["Description","Quantity","Unit price, S$"],s)
if(r)c0.push("GST")
a3=a7.dF(c0)
for(a4=0;a4<a7.cx;++a4){g=a7.V("tr")
b9=a7.V(b6)
c0=""+a4
q=a.h(0,"d"+c0)
if(q==null)q=""
q=a7.bl(b7,q,new A.pl(a4,a),"What was supplied")
q.className="wide"
b9.append(q)
g.append(b9)
b9=a7.V(b6)
q=a.h(0,"q"+c0)
if(q==null)q=""
b9.append(a7.bl(b7,q,new A.po(a4,a),"Like 1"))
g.append(b9)
b9=a7.V(b6)
q=a.h(0,"p"+c0)
if(q==null)q=""
b9.append(a7.bl(b7,q,new A.pp(a4,a),"Like 1200.00"))
g.append(b9)
if(r){b9=a7.V(b6)
c0=a.h(0,"g"+c0)
if(c0==null)c0="standard"
b9.append(a7.aU(B.iM,c0,new A.pq(a4,a)))
g.append(b9)}A.aV(a3.querySelector("tbody")).append(g)}b9=a7.V(b0)
b9.append(a7.K(b1,"New invoice draft"))
b9.append(a1)
b9.append(a3)
c0=a7.V("nav")
c0.append(a7.av("Add a row",new A.pr(a7)))
c0.append(a7.bc("Send the draft to the phone",new A.ps(a7,a,m),"primary"))
b9.append(c0)
c1.append(b9)}else if(l)c1.append(a7.L(a8,a9,"Add a customer below to start a draft."))
a5=a7.V(b0)
b9=m.c
a5.append(a7.K(b1,"Customers ("+b9.length+")"))
j=a7.dF(A.d(["Name","Address","Attention","Pays in"],s))
for(c0=b9.length,i=0;r=b9.length,i<r;b9.length===c0||(0,A.n)(b9),++i){a2=b9[i]
r=A.aV(j.querySelector("tbody"))
r.toString
q=a2.c
p=A.m(q.h(0,"name"))
p.toString
o=A.m(q.h(0,"address"))
o.toString
o=A.a4(o,"\n",", ")
n=A.m(q.h(0,b2))
if(n==null)n=""
r.append(a7.fj(A.d([p,o,n,A.aE(q.h(0,b8))==null?"The usual days":A.i(A.aE(q.h(0,b8)))+" days"],s)))}if(r!==0)a5.append(j)
if(l){b9=t.N
a2=A.w(b9,b9)
a6=A.x(A.x(v.G.document).createElement("textarea"))
a6.rows=3
a6.placeholder="Street, unit, postcode"
a6.addEventListener("change",A.b_(new A.pt(a6,a2)))
a5.append(a7.K("h3","Add a customer"))
b9=a7.Z("div",b5)
b9.append(a7.ak("Name",a7.fz(b7,"",new A.pu(a2))))
b9.append(a7.ak("Address",a6))
b9.append(a7.ak("Attention (optional)",a7.fz(b7,"",new A.pv(a2))))
b9.append(a7.ak("Pays in, days (optional)",a7.bl(b7,"",new A.pm(a2),"Like 30")))
a5.append(b9)
a5.append(a7.av("Send the customer to the phone",new A.pn(a7,a2)))}c1.append(a5)},
jf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a.at
e.toString
s=new A.q8(f,e)
f.ex()
r=s.$0()
q=A.md(e,f.w,r.r)
if(!B.a.B(q,f.x)){f.x=B.a.ga_(q)
r=s.$0()}e=f.gcw()
p=f.gcp()-1
if(!(p>=0&&p<12))return A.a(B.a0,p)
a.append(f.dw("Twelve months to "+(B.a0[p]+" "+e),q))
e=A.d([],t.t)
for(p=r.b,o=1;o<=p.length+2;++o)e.push(o)
n=t.s
m=A.d(["Category"],n)
B.a.a1(m,p)
m.push("Total")
m.push("Average")
l=f.aN(m,e)
l.className="matrix"
m=A.aV(l.querySelector("tbody"))
m.toString
for(p=r.c,k=p.length,j=0;j<p.length;p.length===k||(0,A.n)(p),++j){i=p[j]
h=A.d([i.a],n)
B.a.a1(h,i.b)
h.push(i.c)
h.push(i.d)
m.append(f.b6(h,e))}p=r.d
k=A.d([p.a],n)
B.a.a1(k,p.b)
k.push(p.c)
k.push(p.d)
m.append(f.c1(k,"total",e))
p=r.e
if(B.a.N(p,new A.q9())){n=A.d(["Not filed yet, not counted (transactions)"],n)
B.a.a1(n,p)
n.push("")
n.push("")
m.append(f.c1(n,"aside",e))}g=f.Z("ul","notes")
for(e=r.f,j=0;j<1;++j)g.append(f.K("li",e[j]))
e=f.V("section")
p=r.a
e.append(f.K("h2","Spending by category, "+(A.eF(p)+" ("+p+")")))
e.append(l)
e.append(g)
a.append(e)},
jb(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="quiet"
a3.append(a1.c0())
s=a1.a
r=s.at
r.toString
q=a1.w
p=new A.a5(Date.now(),0,!1).H()
o=A.Jz(r,q,s.ch,p)
n=a1.V("section")
p=o.b
q=A.AS(""+p,"SGD")
r=p===1?"":"s"
p=o.a
m=p.length
l=m===1?"":"s"
n.append(a1.K("h2","To file: "+q+" transaction"+r+" from "+m+" payee"+l))
n.append(a1.L("p",a2,s.CW?"Filing a payee files all its transactions and saves the rule; the phone applies it on its next sync.":"Turn on Allow changes to file payees from here."))
if(p.length!==0){k=s.CW
j=a1.bl("search",a1.y,new A.pO(a1),"Search payees")
i=B.c.G(a1.y).toLowerCase()
s=A.d([],t.kW)
for(r=p.length,q=i.length!==0,h=0;h<p.length;p.length===r||(0,A.n)(p),++h){g=p[h]
if(!q||B.c.B(g.a.toLowerCase(),i))s.push(g)}n.append(a1.ak("Payee",j))
r=t.s
q=A.d(["Payee","Direction","Transactions","Total"],r)
if(k)q.push("File as")
f=a1.aN(q,B.da)
for(q=A.c1(s,0,A.dZ(a1.z,"count",t.S),t.xH),p=q.$ti,q=new A.ar(q,q.gq(0),p.i("ar<ag.E>")),p=p.i("ag.E");q.m();){m=q.d
if(m==null)m=p.a(m)
e=a1.b6(A.d([m.a,m.e,""+m.f,m.r],r),B.da)
if(k){l=a1.V("td")
l.append(a1.jl(m))
e.append(l)}A.aV(f.querySelector("tbody")).append(e)}n.append(f)
if(s.length===0)n.append(a1.L("p",a2,"No payee to file matches the search."))
if(s.length>a1.z){r=a1.V("nav")
r.append(a1.L("span",a2,"Showing "+a1.z+" of "+s.length+" payees."))
r.append(a1.av("Show 25 more",new A.pP(a1)))
n.append(r)}}d=a1.V("section")
d.append(a1.K("h2","Other items, all books"))
s=o.c
if(s.length===0)d.append(a1.L("p",a2,"Nothing else waits."))
for(r=s.length,h=0;h<s.length;s.length===r||(0,A.n)(s),++h){c=s[h]
b=a1.V("details")
q=c.c
b.append(a1.K("summary",c.a+" ("+q+")"))
a=a1.Z("ul","items")
for(p=c.b,m=p.length,a0=0;l=p.length,a0<l;p.length===m||(0,A.n)(p),++a0)a.append(a1.K("li",p[a0]))
if(q>l)a.append(a1.L("li",a2,"And "+(q-l)+" more; the phone's Review lists them all."))
b.append(a)
d.append(b)}a3.append(n)
a3.append(d)},
j4(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="section",a2="Money in",a3=a0.a,a4=a3.at
a4.toString
a0.ex()
s=new A.pc(a0,a4)
r=s.$0()
q=A.md(a4,a0.w,r.f)
if(!B.a.B(q,a0.x)){a0.x=B.a.ga_(q)
r=s.$0()}a5.append(a0.iH(q))
p=a0.V(a1)
a4=r.a
p.append(a0.K("h2","Net worth today, "+(A.eF(a4)+" ("+a4+")")))
p.append(a0.d0("Holdings",r.c,null,!0))
p.append(a0.d0("Debts",r.d,null,!0))
p.append(a0.d0("Net worth",r.e,"In "+a4+"; each figure from its latest statement or value.",!0))
o=t.s
n=a0.aN(A.d(["Holding or debt","As of","Amount"],o),B.d9)
for(m=r.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.n)(m),++k){j=m[k]
i=A.aV(n.querySelector("tbody"))
i.toString
h=j.d?" (debt)":""
i.append(a0.b6(A.d([j.a+h,j.b,j.c],o),B.d9))}p.append(n)
g=a0.Z("ul","notes")
m=r.r
if(m.length!==0)g.append(a0.K("li","No balance yet, left out: "+B.a.S(m,", ")+"."))
p.append(g)
f=a0.aN(A.d(["Month","Money in","Spent","Saved","Savings rate","Net worth at month end"],o),B.dh)
for(m=r.w,l=m.length,k=0;k<m.length;m.length===l||(0,A.n)(m),++k){e=m[k]
i=A.aV(f.querySelector("tbody"))
i.toString
i.append(a0.b6(A.d([e.a,e.b,e.c,e.d,e.e,e.f],o),B.dh))}d=a0.V(a1)
d.append(a0.K("h2","Charts"))
if(a3.ch)d.append(a0.L("p","quiet","The charts show once Show amounts is ticked."))
else{o=a3.at
o.toString
c=A.Jt(o,a0.w,a3.c.c,new A.a5(Date.now(),0,!1).H(),a4)
a3=c.a
o=A.aW(A.a6($.M(),a3),!1)
m=A.C("[\\d.,]",!0,!1)
b=A.a4(o,m,"")
o=new A.pf(c)
a=a0.Z("div","legend")
a.append(a0.L("span","key series-1",a2))
a.append(a0.L("span","key series-2","Spent"))
d.append(a0.K("h3","Money in and spent, by month ("+a3+")"))
d.append(a)
m=c.b
d.append(A.Kd("Money in and spent by month",m,A.d([new A.t(a2,c.c),new A.t("Spent",c.d)],t.AW),new A.pd(o),b))
d.append(a0.K("h3","Net worth at each month end ("+a3+")"))
d.append(A.Kr("Net worth at each month end",m,c.e,new A.pe(o),b))
d.append(a0.L("p","quiet","Hover a bar or a point for its amount; the table below has every figure."))}a5.append(p)
a5.append(d)
a3=a0.V(a1)
a3.append(a0.K("h2","The last twelve months, "+(A.eF(a4)+" ("+a4+")")))
a3.append(f)
a5.append(a3)},
j7(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.at
a2.toString
s=new A.a5(Date.now(),0,!1).H()
r=A.Jw(a2,a1.ch,s)
q=a1.CW
if(q){p={}
a1=A.d([],t.nB)
for(o=0;o<31;++o){n=B.aa[o]
if(A.GL(n)&&!B.dQ.B(0,n))a1.push(n)}B.a.E(a1,new A.pB())
p.a=B.a.ga_(a1).b
a2=a0.V("section")
s=a0.Z("div","filing")
m=A.d([],t.M)
for(l=a1.length,o=0;o<a1.length;a1.length===l||(0,A.n)(a1),++o){n=a1[o]
m.push(new A.t(n.b,n.c))}s.append(a0.aU(m,p.a,new A.pC(p)))
s.append(a0.av("Add a record",new A.pD(p,a0)))
a2.append(s)
a2.append(a0.L("p","quiet","Documents, policies and records with files or several people are added on the phone."))
a3.append(a2)
k=a0.cy
if(t.wD.b(k))a3.append(a0.jG(k.a,k.b))}if(r.length===0)a3.append(a0.L("p","quiet","No records yet."))
for(a1=r.length,a2=t.a,s=t.N,o=0;o<r.length;r.length===a1||(0,A.n)(r),++o){j=r[o]
i=a0.Z("details","card")
i.setAttribute("open","")
m=j.c
i.append(a0.K("summary",j.a+" ("+m.length+")"))
h=q&&j.d!=null
l=A.E(j.b,s)
if(h)l.push("")
g=a0.dF(l)
for(m=A.bK(m,0,a2),l=J.T(m.a),f=m.b,m=new A.at(l,f,A.o(m).i("at<1>")),e=j.e;m.m();){d=m.c
d=d>=0?new A.t(f+d,l.gt()):A.j(A.aq())
c=d.a
b=a0.fj(d.b)
if(h){if(!(c>=0&&c<e.length))return A.a(e,c)
a=e[c]
d=a0.Z("td","filing")
d.append(a0.av("Edit",new A.pE(a0,j,a)))
d.append(a0.av("Remove",new A.pF(a0,j,a)))
b.append(d)}A.aV(g.querySelector("tbody")).append(b)}i.append(g)
a3.append(i)}},
jG(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="personal",b2=b0.a.at
b2.toString
s=b0.Z("form","edit")
r=t.N
q=A.w(r,t.j3)
p=new A.qN(b4)
for(o=b3.d,n=A.N(o),n.i("l(1)").a(A.yu()),o=B.a.gv(o),n=new A.S(o,A.yu(),n.i("S<1>")),m=v.G,l=t.M,k=b2.a7,j=t.P,i=t.Ai,h=b2.f,g=b2.p3,f=t.o;n.m();){e=o.gt()
d=e.d
c=e.b
c=d?c:c+" (optional)"
b=p.$1(e)
a=e.c
A:{if(B.M===a){d=A.d([],l)
for(a0=e.e,a1=a0.length,a2=0;a2<a1;++a2){a3=a0[a2]
d.push(new A.t(a3,A.a4(a3,"-"," ")))}break A}if(B.ao===a){d=A.d([B.le],l)
for(a0=A.a7(g,r,f).gU(),a0=a0.gv(a0);a0.m();){a1=a0.gt()
d.push(new A.t(a1.a,a1.b))}break A}if(B.a3===a){d=A.d([],l)
a0=b2.gR().gU()
a0=A.E(a0,A.o(a0).i("h.E"))
B.a.E(a0,new A.qH())
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.n)(a0),++a2){a4=a0[a2]
d.push(new A.t(a4.a,A.cE(a4)))}break A}if(B.ad===a){d=A.d([],l)
for(a0=A.w(r,r),a0.j(0,b1,b1),a0.a1(0,h),a0=new A.cq(a0,a0.r,a0.e,a0.$ti.i("cq<1>"));a0.m();){a1=a0.d
d.push(new A.t(a1,A.hi(a1,b2)))}break A}if(B.F===a){d=A.d([],l)
a0=e.f
a0.toString
a0=k.b3(A.af(B.aa,a0,j))
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.n)(a0),++a2){a5=a0[a2]
a6=a5.b
a7=A.aU(new A.iG(a5.c.gU(),i),r)
d.push(new A.t(a6,a7==null?a6:a7))}break A}if(B.a_===a){d=A.d([B.kP,B.lo],l)
break A}d=null
break A}if(d!=null){a0={}
a0.a=b
if(a!==B.a_){a1=A.d([B.dI],l)
B.a.a1(a1,d)
a8=a1}else a8=d
d=b0.aU(a8,b,new A.qI(a0))
a1=b0.Z("label","field")
a1.append(b0.K("span",c))
a1.append(d)
s.append(a1)
q.j(0,e.a,new A.qJ(a0))}else{a9=A.x(A.x(m.document).createElement("input"))
B:{if(B.r===a){d="date"
break B}if(B.aH===a){d="time"
break B}if(B.an===a){d="month"
break B}d="text"
break B}a9.type=d
a9.value=b
if(a===B.u)d="Like 1200.50 or 500 INR"
else{d=e.y
if(d==null)d=""}a9.placeholder=d
d=b0.Z("label","field")
d.append(b0.K("span",c))
d.append(a9)
s.append(d)
q.j(0,e.a,new A.qK(a9))}}b2=b4==null
r=b0.L("button","primary",b2?"Add to the phone":"Send the change")
r.type="submit"
r.disabled=b0.e
s.append(r)
s.append(b0.av("Cancel",new A.qL(b0)))
s.addEventListener("submit",A.b_(new A.qM(b0,b3,q,b4)))
r=b0.V("section")
o=b3.c
r.append(b0.K("h2",b2?"New: "+o:"Change: "+o))
r.append(s)
return r},
jc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c="section",b="quiet"
a.append(d.c0())
s=d.a
r=s.at
r.toString
q=A.JA(r,d.w,s.ch)
p=s.CW
o=new A.pX(d)
s=q.c
if(s.length!==0){n=B.a.a9(s,0,new A.pS(),t.S)
m=d.V(c)
r=n===1?"":"s"
m.append(d.K("h2","Rules that disagree: "+n+" transaction"+r))
m.append(d.L("p",b,"Two confirmed rules match these payees with different filings, so their transactions wait. Remove or narrow one rule, or file the payee in Review."))
r=t.s
l=d.aN(A.d(["Payee","Transactions","Total","Rules"],r),B.aP)
for(k=s.length,j=0;j<s.length;s.length===k||(0,A.n)(s),++j){i=s[j]
h=A.aV(l.querySelector("tbody"))
h.toString
h.append(d.b6(A.d([i.a,""+i.b,i.c,B.a.S(i.d,"; ")],r),B.aP))}m.append(l)
a.append(m)}if(p&&B.a.N(q.b,new A.pT())){s=d.V(c)
s.append(d.bc("File waiting transactions by the confirmed rules",new A.pU(d,o),"primary"))
s.append(d.L("p",b,"Only transactions exactly one confirmed rule matches are filed."))
a.append(s)}for(s=[new A.t("Proposed, waiting for you",q.a),new A.t("Confirmed",q.b)],r=t.s,j=0;j<2;++j){k=s[j]
g=k.b
h=J.ap(g)
if(h.ga2(g))continue
m=d.V(c)
m.append(d.K("h2",k.a+" ("+h.gq(g)+")"))
m.append(d.L("p",b,h.ga_(g).d?"The phone files the transactions these match the next time Review is opened there.":"Once confirmed, a rule files the transactions it matches."))
k=A.d(["Payee words","Files as","Limited to","Matching, not filed yet"],r)
if(p)k.push("")
l=d.aN(k,B.aQ)
for(k=h.gv(g);k.m();){h=k.gt()
f=d.b6(A.d([h.a.c,h.b,h.e,""+h.c],r),B.aQ)
if(p){e=d.Z("td","filing")
if(!h.d)e.append(d.bc("Confirm",new A.pV(d,o,h),"primary"))
e.append(d.av("Remove",new A.pW(d,o,h)))
f.append(e)}A.aV(l.querySelector("tbody")).append(f)}m.append(l)
a.append(m)}},
ir(a){var s,r,q,p,o=this,n=o.Z("form","edit"),m=new A.oO(o,n),l=m.$2("Alias",a.b),k=a.fr,j=m.$3$placeholder("IFSC",k==null?"":k,"India only")
k=a.fx
s=m.$2("MICR",k==null?"":k)
k=a.fy
r=m.$2("Branch",k==null?"":k)
k=a.go
q=m.$3$placeholder("Number as statements show it",k==null?"":k,"Like 12345XXXXX")
k=a.y
k=k==null?null:B.d.k(k)
p=m.$2("Out of date after (days, with alerts)",k==null?"":k)
m=o.L("button","primary","Send to the phone")
m.type="submit"
m.disabled=o.e
n.append(m)
n.append(o.K("small","The customer ID is changed on the phone only."))
n.addEventListener("submit",A.b_(new A.oN(o,a,l,j,s,r,q,p)))
return n},
jd(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.at,a2=a1.dy,a3=A.GY(new A.L(a2,A.o(a2).i("L<2>"))).a,a4=a.V("section")
a2=a3.length
a4.append(a.K("h2","Bank SMS senders ("+a2+" ids)"))
a4.append(a.L("p","quiet","Only SMS from these senders are kept. Turning Bank SMS on and off stays on the phone."))
s=a0.CW
r=A.w(t.z9,t.zo)
for(a0=t.mu,q=0;q<a2;++q){p=a3[q]
o=p.c
if(o==null)o="No institution"
o=new A.t(o,p.b)
n=r.h(0,o)
if(n==null){n=A.d([],a0)
r.j(0,o,n)
o=n}else o=n
B.a.n(o,p)}a0=r.$ti.i("az<1>")
m=A.E(new A.az(r,a0),a0.i("h.E"))
B.a.E(m,new A.q0())
a0=t.s
l=a.dF(A.d(["Institution","Sends","Sender ids"],a0))
for(a2=m.length,q=0;q<m.length;m.length===a2||(0,A.n)(m),++q){k=m[q]
j=a.V("td")
o=r.h(0,k)
o.toString
B.a.E(o,new A.q1())
n=o.length
i=0
for(;i<o.length;o.length===n||(0,A.n)(o),++i){p=o[i]
h=a.Z("span","chip")
g=p.a
h.append(a.K("span",g))
if(s){f=a.bc("\xd7",new A.q2(a,p),"chip-remove")
g="Remove "+g
f.title=g
f.setAttribute("aria-label",g)
h.append(f)}j.append(h)}o=A.aV(l.querySelector("tbody"))
o.toString
n=a.V("tr")
n.append(a.K("td",k.a))
n.append(a.K("td",k.b.c))
n.append(j)
o.append(n)}a4.append(l)
if(s){e={}
d=a.Z("form","edit")
c=A.x(A.x(v.G.document).createElement("input"))
c.type="text"
c.placeholder="Like DBSBANK, or several: DBSBANK, DBS"
e.a="bank"
e.b=""
a0=A.d([],a0)
for(a2=A.a7(a1.x,t.N,t.q).gU(),a2=a2.gv(a2);a2.m();)a0.push(a2.gt().b)
B.a.bh(a0)
d.append(a.ak("Sender ids of one bank, as the phone shows them",c))
a2=t.M
o=A.d([],a2)
for(q=0;q<3;++q){k=B.bx[q]
o.push(new A.t(k.b,k.c))}d.append(a.ak("Sends",a.aU(o,e.a,new A.q3(e))))
a2=A.d([B.dI],a2)
for(o=a0.length,q=0;q<a0.length;a0.length===o||(0,A.n)(a0),++q){b=a0[q]
a2.push(new A.t(b,b))}d.append(a.ak("Institution",a.aU(a2,"",new A.q4(e))))
a0=a.L("button","primary","Add the senders")
a0.type="submit"
a0.disabled=a.e
d.append(a0)
d.addEventListener("submit",A.b_(new A.q5(e,a,c)))
a4.append(d)}a5.append(a4)},
kF(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.Z("div","details"),d=new A.a5(Date.now(),0,!1).H(),c=f.a,b=A.JE(a,a0,c.ch,d)
if(b==null){e.append(f.L("p","quiet","This transaction is no longer in the ledger."))
return e}s=f.V("dl")
for(d=b.length,r=0;r<b.length;b.length===d||(0,A.n)(b),++r){q=b[r]
p=q.b
if(p.length===0)continue
s.append(f.K("dt",q.a))
s.append(f.K("dd",p))}e.append(s)
d=a.b.a.h(0,a0)
d.toString
if(!c.CW)return e
o=new A.r6(f)
n=f.Z("div","filing")
c=d.d
if(c===B.k||c===B.w){m={}
l=a.gcA().h(0,d.b)
c=A.a7(a.d,t.N,t.G).gU()
q=A.o(c)
k=q.i("p<h.E>")
j=A.E(new A.p(c,q.i("l(h.E)").a(new A.r1(l)),k),k.i("h.E"))
B.a.E(j,new A.r2())
i=d.Q
m.a=i==null?"":i
c=A.d([B.dH],t.M)
for(q=j.length,r=0;r<j.length;j.length===q||(0,A.n)(j),++r){h=j[r]
c.push(new A.t(h.a,h.c))}n.append(f.aU(c,m.a,new A.r3(m)))
n.append(f.av("Change category",new A.r4(m,f,o,d)))}g=A.x(A.x(v.G.document).createElement("input"))
g.type="text"
c=d.db
if(c==null)c=""
g.value=c
g.placeholder="A note"
n.append(g)
n.append(f.av("Save the note",new A.r5(f,o,d,g)))
e.append(n)
return e},
j3(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="section",b2="quiet",b3="text"
b4.append(b0.c0())
s=b0.a
r=s.at
r.toString
q=b0.w
p=new A.a5(Date.now(),0,!1).H()
o=A.Js(r,q,s.ch,p)
n=s.CW
m=new A.pa(b0)
l=new A.p9()
k=b0.V(b1)
s=o.c
k.append(b0.K("h2","Budgets, "+o.b+" ("+s+")"))
q=o.e
if(q.length!==0){k.append(b0.L("p",b2,q))
k.append(b0.L("p","quiet small",o.a))}q=o.d
if(q.length===0)k.append(b0.L("p",b2,"No budget is set for this book."))
if(q.length!==0){p=t.s
j=A.d(["Category","Budget","Spent","Left","Heading for"],p)
if(n)j.push("Change")
i=b0.aN(j,B.d6)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.n)(q),++h){g=q[h]
f=g.r?" (over)":""
e=g.w?" (over)":""
d=b0.b6(A.d([g.b+f,g.c,g.d,g.e,g.f+e],p),B.d6)
if(n){c=l.$2$placeholder(b3,"New amount")
f=b0.Z("td","filing")
f.append(c)
f.append(b0.av("Set",new A.p1(b0,m,g,c)))
f.append(b0.av("Remove",new A.p2(b0,m,g)))
d.append(f)}A.aV(i.querySelector("tbody")).append(d)}k.append(i)}b4.append(k)
q=o.f
if(q.length!==0){b=b0.V(b1)
b.append(b0.K("h2","Proposed budgets"))
b.append(b0.L("p",b2,"From the complete months among the last three; a month without its statements is left out."))
p=t.s
j=A.d(["Category","Proposed","Based on"],p)
if(n)j.push("")
i=b0.aN(j,B.d4)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.n)(q),++h){a=q[h]
d=b0.b6(A.d([a.b,a.c,a.e],p),B.d4)
if(n){a0=B.Q.bF(a.d/100,2)
f=b0.V("td")
f.append(b0.av("Set this budget",new A.p3(b0,m,a,a0)))
d.append(f)}A.aV(i.querySelector("tbody")).append(d)}b.append(i)
b4.append(b)}a1=b0.V(b1)
q=o.r
a1.append(b0.K("h2","Savings goals ("+q.length+")"))
if(q.length===0)a1.append(b0.L("p",b2,"No goal yet."))
if(q.length!==0){p=t.s
j=A.d(["Goal","Target","By","Saved","Left","A month","State"],p)
if(n)j.push("")
i=b0.aN(j,B.d8)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.n)(q),++h){a2=q[h]
d=b0.b6(A.d([a2.a.b,a2.b,a2.c,a2.d,a2.e,a2.f,a2.r],p),B.d8)
if(n){f=b0.V("td")
f.append(b0.av("Remove",new A.p4(b0,m,a2)))
d.append(f)}A.aV(i.querySelector("tbody")).append(d)}a1.append(i)}if(n){a3={}
a4=l.$2$placeholder(b3,"Like Emergency fund")
a5=l.$2$placeholder(b3,"Like 10000")
a6=l.$1("date")
a3.a=""
r=r.gR().gU()
q=A.o(r)
p=q.i("p<h.E>")
a7=A.E(new A.p(r,q.i("l(h.E)").a(new A.p5(b0)),p),p.i("h.E"))
B.a.E(a7,new A.p6())
a8=b0.Z("form","edit")
a8.append(b0.ak("Goal",a4))
a8.append(b0.ak("Target ("+s+")",a5))
a8.append(b0.ak("By",a6))
s=A.d([B.l3],t.M)
for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,A.n)(a7),++h){a9=a7[h]
s.push(new A.t(a9.a,A.cE(a9)))}a8.append(b0.ak("Counted on",b0.aU(s,"",new A.p7(a3))))
s=b0.L("button","primary","Add the goal")
s.type="submit"
s.disabled=b0.e
a8.append(s)
a8.addEventListener("submit",A.b_(new A.p8(a3,b0,m,a4,a5,o,a6)))
a1.append(a8)}b4.append(a1)},
jl(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={},d=a2.b,c=d.c,b=d.b+"|"+c.b,a=f.Z("div","filing"),a0=f.a,a1=a0.cy
if(a0.gcR().length===0)a1.an(0)
if(a1.B(0,b)){a.append(f.L("span","quiet","Sent, waiting for the phone"))
return a}s=new A.qD(f,a2)
r=a2.c
q={}
q.a=null
if(r!=null){q.a=r
a.append(f.bc("File as "+A.i(a2.d),new A.qx(q,f,s,d),"primary"))}p=c===B.q?B.iU:B.jR
e.a=e.b=null
o=f.db.h(0,b)
if(o==null)o=new A.t(B.a.ga_(p),null)
n=e.b=o.a
e.a=o.b
m=a0.at.gcA().h(0,f.w)
c=A.a7(a0.at.d,t.N,t.G).gU()
a0=A.o(c)
a1=a0.i("p<h.E>")
l=A.E(new A.p(c,a0.i("l(h.E)").a(new A.qy(m)),a1),a1.i("h.E"))
B.a.E(l,new A.qz())
k=n===B.k||n===B.w
c=t.M
a0=A.d([],c)
for(a1=p.length,j=0;j<a1;++j){i=p[j]
h=B.ax.h(0,i)
h.toString
a0.push(new A.t(i.b,h))}a.append(f.aU(a0,e.b.b,new A.qA(e,f,b)))
if(k){c=A.d([B.dH],c)
for(a0=l.length,j=0;j<l.length;l.length===a0||(0,A.n)(l),++j){g=l[j]
c.push(new A.t(g.a,g.c))}a0=e.a
if(a0==null)a0=""
a.append(f.aU(c,a0,new A.qB(e,f,b)))}c=k&&e.a==null
a.append(f.ea("File",new A.qC(e,f,s,d,k),c))
return a},
fM(a){var s,r=this,q=r.gcw()*12+r.gcp()-1+a,p=B.d.u(q,12),o=B.d.P(q,12)+1
if(p<=A.aC(new A.a5(Date.now(),0,!1).H(),B.n).a)s=p===A.aC(new A.a5(Date.now(),0,!1).H(),B.n).a&&o>A.aC(new A.a5(Date.now(),0,!1).H(),B.n).b
else s=!0
if(s)return
r.Q=p
r.as=o
r.ad()},
d0(a,b,c,d){var s=this,r=s.Z("div",d?"row figure":"row")
r.append(s.K("span",a))
r.append(s.L("span","amount",b))
if(c!=null&&c.length!==0)r.append(s.K("small",c))
return r},
fI(a,b,c){return this.d0(a,b,c,!1)},
je(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.V("section")
e.append(f.K("h2","Setup checklist"))
s=f.a
if(!s.CW)e.append(f.L("p","quiet","Read-only. Turn on Allow changes to tick items here."))
for(r=s.c.e,q=r.length,p=v.G,o=0;o<r.length;r.length===q||(0,A.n)(r),++o){n=r[o]
e.append(f.K("h3",n.b))
for(m=n.c,l=m.length,k=0;k<m.length;m.length===l||(0,A.n)(m),++k){j=m[k]
i=A.x(A.x(p.document).createElement("input"))
i.type="checkbox"
i.checked=s.he(n,j)
h=!s.CW||f.e
i.disabled=h
i.addEventListener("change",A.b_(new A.q7(f,n,j)))
g=f.Z("label","tick")
g.append(i)
g.append(A.x(A.x(p.document).createTextNode(" "+j.b)))
if(s.m7(n,j))g.append(f.K("small"," waiting for the phone"))
e.append(g)}}a.append(e)},
ja(a){var s,r,q,p,o,n=this,m=n.a.gmm(),l=n.V("form"),k=v.G,j=A.x(A.x(k.document).createElement("select"))
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.n)(m),++r){q=m[r]
p=A.x(A.x(k.document).createElement("option"))
p.value=q.a
p.textContent=q.b
j.append(p)}o=A.x(A.x(k.document).createElement("input"))
o.type="password"
o.autocomplete="off"
o.required=!0
l.append(j)
l.append(o)
k=n.K("button","Seal and send to the phone")
k.type="submit"
s=n.e||m.length===0
k.disabled=s
l.append(k)
l.addEventListener("submit",A.b_(new A.pN(n,o,j)))
k=n.V("section")
k.append(n.K("h2","Statement password"))
k.append(n.L("p","quiet","Sealed in this browser to the phone's backup key, so only the phone opens it. It is never shown here."))
k.append(l)
a.append(k)}}
A.r8.prototype={
$1(a){return t.sn.a(a).b===this.a},
$S:171}
A.r9.prototype={
$1(a){return this.a.iB(A.x(a))},
$S:9}
A.ra.prototype={
$1(a){A.x(a)
return this.a.a.cG()},
$S:9}
A.rb.prototype={
$1(a){t.hz.a(a)
return this.a.jT()},
$S:172}
A.oP.prototype={
$0(){return this.a.a.bJ(this.b)},
$S:5}
A.oV.prototype={
$1(a){A.x(a)
return this.a.$0()},
$S:9}
A.qZ.prototype={
$1(a){A.x(a)
return this.a.$1(A.d0(this.b.checked))},
$S:9}
A.rc.prototype={
$1(a){var s=this.a
s.a.ch=!a
s.ad()},
$S:77}
A.rd.prototype={
$1(a){var s=this.a
s.a.CW=a
s.ad()},
$S:77}
A.re.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.glW()))
return null},
$S:0}
A.rf.prototype={
$0(){var s=this.a
s.a.CW=!1
s.ad()},
$S:0}
A.rg.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.geY()))
return null},
$S:0}
A.rh.prototype={
$0(){var s=this.a
s.at=this.b
s.ad()},
$S:0}
A.pz.prototype={
$1(a){var s,r
A.x(a).preventDefault()
s=this.b
r=A.b(s.value)
s.value=""
s=this.a
s.ai(t.U.a(new A.py(s,r)))},
$S:13}
A.py.prototype={
$0(){return this.a.a.S(0,this.b)},
$S:5}
A.pK.prototype={
$1(a){var s
A.x(a)
s=this.a
s.at=B.c5
s.ad()
return null},
$S:9}
A.pL.prototype={
$1(a){var s
A.x(a)
s=this.a
s.at=B.c5
s.ad()
return null},
$S:9}
A.oQ.prototype={
$0(){var s=this.a
s.w=this.b
s.ad()},
$S:0}
A.oR.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.geY()))
return null},
$S:0}
A.oS.prototype={
$0(){return this.a.fM(-1)},
$S:0}
A.oT.prototype={
$0(){return this.a.fM(1)},
$S:0}
A.oU.prototype={
$0(){var s=this.a
s.x=this.b
s.ad()},
$S:0}
A.oW.prototype={
$1(a){var s,r
A.x(a)
s=this.a
r=this.b.a
s.ax=s.ax===r?null:r
s.ad()},
$S:13}
A.pH.prototype={
$1(a){return A.b(a)!=="outstanding balance"},
$S:7}
A.pI.prototype={
$2(a,b){var s=t.eY,r=s.a(a).a.e
s=B.c.l(r,s.a(b).a.e)
return s*(r==="SGD"?-1:1)},
$S:50}
A.pJ.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pG(s,this.b)))
return null},
$S:0}
A.pG.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.q(p.a.kO(o.b.bS(o.d)),$async$$0)
case 2:o=b
p.r=o==null?u.F:o
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.qV.prototype={
$4$placeholder(a,b,c,d){var s=A.x(A.x(v.G.document).createElement("input"))
s.type=b
s.value=c
if(d!=null)s.placeholder=d
this.b.append(this.a.ak(a,s))
return s},
$3(a,b,c){return this.$4$placeholder(a,b,c,null)},
$S:176}
A.qW.prototype={
$3(a,b,c){var s=this.a,r=s.aU(t.DX.a(b),c,new A.qX())
this.b.append(s.ak(a,r))
return r},
$S:177}
A.qX.prototype={
$1(a){},
$S:3}
A.qR.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s===B.V||s===B.Z||a.a===this.a.w},
$S:2}
A.qS.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.qU.prototype={
$1(a){return A.yS(a)},
$S:59}
A.qT.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.x(a).preventDefault()
s=h.b
r=A.d([s],t.sL)
q=h.c
if(q!=null)r.push(q)
if(B.a.N(r,new A.qP())){s=h.a
s.r="Not sent: enter dates like 17/11/2026."
s.ad()
return}r=h.d
r=A.b(r.value).length===0?null:A.af(B.bw,A.b(r.value),t.gd)
p=A.b(h.e.value)
o=A.b(h.f.value)
n=A.b(h.r.value)
m=A.b(h.w.value)
l=h.x
s=l.$1(A.b(s.value))
k=A.b(h.y.value)
j=h.z
j=A.b(j.value).length===0?null:A.b(j.value)
i=h.a
i.ai(t.U.a(new A.qQ(i,h.Q,new A.iW([k,o,j,n,s,m,p,r]),h.as,h.at,l,q,h.ax,h.ay)))},
$S:13}
A.qP.prototype={
$1(a){A.x(a)
return B.c.G(A.b(a.value)).length!==0&&A.yS(A.b(a.value))==null},
$S:179}
A.qQ.prototype={
$0(){var s=0,r=A.I(t.H),q,p=this,o,n,m,l,k
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:k=p.b
s=k!=null?3:4
break
case 3:o=p.a
s=5
return A.q(o.a.mJ(k,p.c),$async$$0)
case 5:n=b
o.r=n==null?"Sent. The phone changes "+k.b+" on its next sync.":n
s=1
break
case 4:k=p.d
o=A.N(k)
m=A.aU(new A.p(k,o.i("l(1)").a(new A.qO(p.e)),o.i("p<1>")),t.hS)
l=p.f.$1(A.b(p.r.value))
o=p.a
s=m==null||l==null?6:8
break
case 6:k="Not sent: pick the bank and the date to track from."
s=7
break
case 8:k=A.b(p.w.value)
n=A.b(p.x.value)
s=9
return A.q(o.a.kQ(m,o.w,n,k,l,p.c),$async$$0)
case 9:k=b
if(k==null)k=u.F
case 7:o.r=k
case 1:return A.G(q,r)}})
return A.H($async$$0,r)},
$S:5}
A.qO.prototype={
$1(a){return t.hS.a(a).a===A.b(this.a.value)},
$S:180}
A.qY.prototype={
$1(a){A.x(a)
return this.a.$1(A.b(this.b.value))},
$S:9}
A.qF.prototype={
$1(a){A.x(a)
return this.a.$1(A.b(this.b.value))},
$S:9}
A.qu.prototype={
$1(a){var s=this.a
s.ch=a
s.ad()},
$S:181}
A.qg.prototype={
$1(a){return t.b.a(a).r===this.a.w},
$S:2}
A.qh.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.qi.prototype={
$2(a,b){var s=t.G
return B.c.l(s.a(a).c,s.a(b).c)},
$S:47}
A.qt.prototype={
$2(a,b){var s,r
t.oo.a(b)
s=A.yS(a)
if(B.c.G(a).length!==0&&s==null){r=this.a
r.r="Enter dates like 17/11/2026."
r.ad()
return}this.b.$1(b.$1(s))},
$S:183}
A.ql.prototype={
$1(a){return this.b.$1(this.a.ch.le(a))},
$S:3}
A.qm.prototype={
$1(a){return this.b.$1(this.a.ch.l6(new A.qf(a)))},
$S:3}
A.qf.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:81}
A.qn.prototype={
$1(a){return this.b.$2(a,new A.qe(this.a))},
$S:3}
A.qe.prototype={
$1(a){return this.a.ch.la(new A.qb(a))},
$S:82}
A.qb.prototype={
$0(){return this.a},
$S:83}
A.qo.prototype={
$1(a){return this.b.$2(a,new A.qd(this.a))},
$S:3}
A.qd.prototype={
$1(a){return this.a.ch.lf(new A.qa(a))},
$S:82}
A.qa.prototype={
$0(){return this.a},
$S:83}
A.qp.prototype={
$1(a){return this.b.$1(this.a.ch.ld(A.af(B.dn,a,t.qx)))},
$S:3}
A.qq.prototype={
$1(a){return this.b.$1(this.a.ch.l8(new A.qc(a)))},
$S:3}
A.qc.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:81}
A.qr.prototype={
$1(a){return this.b.$1(this.a.ch.lc(A.af(B.dr,a,t.ib)))},
$S:3}
A.qs.prototype={
$1(a){var s,r
A.x(a)
s=this.a
r=this.b.a
s.ay=s.ay===r?null:r
s.ad()},
$S:13}
A.qj.prototype={
$0(){return this.b.$1(this.a.ch.h4(this.c.c-1))},
$S:0}
A.qk.prototype={
$0(){return this.b.$1(this.a.ch.h4(this.c.c+1))},
$S:0}
A.pj.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pi(s,this.b)))
return null},
$S:0}
A.pi.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.q(p.a.ms(q.b.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The phone removes the draft on its next sync.":o
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.pw.prototype={
$4$placeholder$wide(a,b,c,d){var s,r=this.a,q=this.b,p=q.h(0,a)
if(p==null)p=""
s=r.bl("text",p,new A.px(a,q),c)
if(d)s.className="wide"
return r.ak(b,s)},
$2(a,b){return this.$4$placeholder$wide(a,b,"",!1)},
$3$placeholder(a,b,c){return this.$4$placeholder$wide(a,b,c,!1)},
$3$wide(a,b,c){return this.$4$placeholder$wide(a,b,"",c)},
$S:187}
A.px.prototype={
$1(a){this.b.j(0,this.a,a)
return a},
$S:3}
A.pk.prototype={
$1(a){this.a.j(0,"customer",a)
return a},
$S:3}
A.pl.prototype={
$1(a){this.b.j(0,"d"+this.a,a)
return a},
$S:3}
A.po.prototype={
$1(a){this.b.j(0,"q"+this.a,a)
return a},
$S:3}
A.pp.prototype={
$1(a){this.b.j(0,"p"+this.a,a)
return a},
$S:3}
A.pq.prototype={
$1(a){this.b.j(0,"g"+this.a,a)
return a},
$S:3}
A.pr.prototype={
$0(){var s=this.a;++s.cx
s.ad()},
$S:0}
A.ps.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.ph(s,this.b,this.c)))
return null},
$S:0}
A.ph.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$0=A.J(function(a,a0){if(a===1)return A.F(a0,r)
for(;;)switch(s){case 0:e=q.a
d=e.w
c=q.b
b=c.h(0,"customer")
b.toString
p=c.h(0,"date")
p=A.yS(p==null?"":p)
o=c.h(0,"reference")
if(o==null)o=""
n=c.h(0,"note")
if(n==null)n=""
m=A.d([],t.sG)
for(l=q.c.b,k=0;k<e.cx;++k){j=""+k
i=c.h(0,"d"+j)
if(i==null)i=""
h=c.h(0,"q"+j)
if(h==null)h=""
g=c.h(0,"p"+j)
if(g==null)g=""
if(l){j=c.h(0,"g"+j)
if(j==null)j="standard"}else j=null
m.push(new A.ev([i,h,g,j]))}s=2
return A.q(e.a.hM(d,b,p,m,n,o),$async$$0)
case 2:f=a0
d=f==null
e.r=d?"Sent. The draft shows on the phone after its next sync; issue it there.":f
if(d){c.an(0)
e.cx=3}return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.pt.prototype={
$1(a){var s
A.x(a)
s=B.c.G(A.b(this.a.value))
this.b.j(0,"address",s)
return s},
$S:188}
A.pu.prototype={
$1(a){this.a.j(0,"name",a)
return a},
$S:3}
A.pv.prototype={
$1(a){this.a.j(0,"attention",a)
return a},
$S:3}
A.pm.prototype={
$1(a){this.a.j(0,"paymentDays",a)
return a},
$S:3}
A.pn.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pg(s,this.b)))
return null},
$S:0}
A.pg.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
o=t.N
o=A.ox(q.b,o,o)
o.j(0,"bookId",p.w)
s=2
return A.q(p.a.hN(B.a4,o),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The customer shows after the phone's next sync.":o
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.q8.prototype={
$0(){var s=this.a,r=s.w,q=s.gcw(),p=s.gcp(),o=s.a
return A.JB(this.b,r,o.c.c,o.ch,p,s.x,q)},
$S:189}
A.q9.prototype={
$1(a){return A.b(a).length!==0},
$S:7}
A.pO.prototype={
$1(a){var s=this.a
s.y=a
s.z=25
s.ad()},
$S:3}
A.pP.prototype={
$0(){var s=this.a
s.z+=25
s.ad()},
$S:0}
A.pc.prototype={
$0(){var s=this.a,r=s.w,q=s.a,p=new A.a5(Date.now(),0,!1).H()
return A.Ju(this.b,r,q.c.c,q.ch,p,s.x)},
$S:190}
A.pf.prototype={
$1(a){return A.aW(A.a6(A.ah(B.Q.bF(a,2)),this.a.a),!1)},
$S:75}
A.pd.prototype={
$3(a,b,c){return a+" \xb7 "+b+" "+A.i(this.a.$1(c))},
$S:191}
A.pe.prototype={
$2(a,b){return a+" \xb7 "+A.i(this.a.$1(b))},
$S:192}
A.pB.prototype={
$2(a,b){var s=t.P
return B.c.l(s.a(a).c,s.a(b).c)},
$S:193}
A.pC.prototype={
$1(a){return this.a.a=a},
$S:3}
A.pD.prototype={
$0(){var s=this.b
s.cy=new A.t(A.af(B.aa,this.a.a,t.P),null)
s.ad()},
$S:0}
A.pE.prototype={
$0(){var s=this.a,r=this.b.d
r.toString
s.cy=new A.t(r,this.c)
s.ad()},
$S:0}
A.pF.prototype={
$0(){if(!A.d0(A.x(v.G.window).confirm("Remove this "+this.b.a.toLowerCase()+" record on the phone?")))return
var s=this.a
s.ai(t.U.a(new A.pA(s,this.c)))},
$S:0}
A.pA.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.q(p.a.mt(q.b),$async$$0)
case 2:o=b
p.r=o==null?u.m:o
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.qN.prototype={
$1(a){var s,r=this.a,q=r==null?null:r.c.h(0,a.a)
A:{if(q==null){r=""
break A}if(t.f.b(q)){r=a.c===B.u
s=q}else{s=null
r=!1}if(r){r=A.i(s.h(0,"amount"))+" "+A.i(s.h(0,"currency"))
break A}if(!0===q){r="yes"
break A}r=A.i(q)
break A}return r},
$S:194}
A.qH.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.qI.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qJ.prototype={
$0(){return this.a.a},
$S:19}
A.qK.prototype={
$0(){return A.b(this.a.value)},
$S:19}
A.qL.prototype={
$0(){var s=this.a
s.cy=null
s.ad()},
$S:0}
A.qM.prototype={
$1(a){var s,r=this
A.x(a).preventDefault()
s=r.a
s.ai(t.U.a(new A.qG(s,r.b,r.c,r.d)))},
$S:13}
A.qG.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o,n,m,l
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:m=q.a
l=t.N
l=A.w(l,l)
for(p=q.c,p=new A.aa(p,A.o(p).i("aa<1,2>")).gv(0);p.m();){o=p.d
l.j(0,o.a,o.b.$0())}s=2
return A.q(m.a.f9(q.b,l,q.d),$async$$0)
case 2:n=b
l=n==null
m.r=l?"Sent. The phone keeps it on its next sync.":n
if(l)m.cy=null
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.pX.prototype={
$2(a,b){var s=this.a
s.ai(t.U.a(new A.pY(s,t.AI.a(a),b)))
return null},
$S:195}
A.pY.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:s=2
return A.q(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=q.c
q.a.r=p
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.pS.prototype={
$2(a,b){return A.P(a)+t.CU.a(b).b},
$S:196}
A.pT.prototype={
$1(a){return t.di.a(a).c>0},
$S:197}
A.pU.prototype={
$0(){return this.b.$2(this.a.a.glQ(),"Sent. The phone files them on its next sync.")},
$S:0}
A.pV.prototype={
$0(){return this.b.$2(new A.pR(this.a,this.c),"Sent. The phone confirms it on its next sync.")},
$S:0}
A.pR.prototype={
$0(){return this.a.a.l3(this.b.a)},
$S:11}
A.pW.prototype={
$0(){return this.b.$2(new A.pQ(this.a,this.c),u.m)},
$S:0}
A.pQ.prototype={
$0(){return this.a.a.mu(this.b.a)},
$S:11}
A.oO.prototype={
$3$placeholder(a,b,c){var s=A.x(A.x(v.G.document).createElement("input"))
s.type="text"
s.value=b
if(c!=null)s.placeholder=c
this.b.append(this.a.ak(a,s))
return s},
$2(a,b){return this.$3$placeholder(a,b,null)},
$S:199}
A.oN.prototype={
$1(a){var s,r=this
A.x(a).preventDefault()
s=r.a
s.ai(t.U.a(new A.oM(s,r.b,r.c,r.d,r.e,r.f,r.r,r.w)))},
$S:13}
A.oM.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o,n,m,l
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
n=A.b(q.c.value)
m=A.b(q.d.value)
l=A.b(q.e.value)
s=2
return A.q(p.a.lE(o,n,A.b(q.f.value),m,l,A.b(q.r.value),A.b(q.w.value)),$async$$0)
case 2:l=b
p.r=l==null?"Sent. The phone changes "+o.b+" on its next sync.":l
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.q0.prototype={
$2(a,b){var s=t.z9
return B.c.l(s.a(a).a,s.a(b).a)},
$S:200}
A.q1.prototype={
$2(a,b){var s=t.c5
return B.c.l(s.a(a).a,s.a(b).a)},
$S:91}
A.q2.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.q_(s,this.b)))
return null},
$S:0}
A.q_.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o,n
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.q(p.a.mv(o),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone removes "+o.a+" on its next sync.":n
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.q3.prototype={
$1(a){return this.a.a=a},
$S:3}
A.q4.prototype={
$1(a){return this.a.b=a},
$S:3}
A.q5.prototype={
$1(a){var s
A.x(a).preventDefault()
s=this.b
s.ai(t.U.a(new A.pZ(this.a,s,this.c)))},
$S:13}
A.pZ.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o,n,m
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.b
o=A.b(q.c.value)
n=q.a
m=A.af(B.bx,n.a,t.in)
n=n.b
if(n.length===0)n=null
s=2
return A.q(p.a.hP(o,m,n),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone keeps those senders' SMS after its next sync and opening.":n
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.r6.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.r7(s,t.AI.a(a))))
return null},
$S:49}
A.r7.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:s=2
return A.q(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=u.L
q.a.r=p
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.r1.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:86}
A.r2.prototype={
$2(a,b){var s=t.G
return B.c.l(s.a(a).c,s.a(b).c)},
$S:47}
A.r3.prototype={
$1(a){return this.a.a=a},
$S:3}
A.r4.prototype={
$0(){var s=this,r=s.a
if(r.a.length!==0)s.c.$1(new A.r0(r,s.b,s.d))},
$S:0}
A.r0.prototype={
$0(){return this.b.a.l0(this.c,this.a.a)},
$S:11}
A.r5.prototype={
$0(){var s=this
return s.b.$1(new A.r_(s.a,s.c,s.d))},
$S:0}
A.r_.prototype={
$0(){return this.a.a.hO(this.b,A.b(this.c.value))},
$S:11}
A.pa.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.pb(s,t.AI.a(a))))
return null},
$S:49}
A.pb.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:s=2
return A.q(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=u.L
q.a.r=p
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.p9.prototype={
$3$placeholder$value(a,b,c){var s=A.x(A.x(v.G.document).createElement("input"))
s.type=a
s.placeholder=b
s.value=c
return s},
$1(a){return this.$3$placeholder$value(a,"","")},
$2$placeholder(a,b){return this.$3$placeholder$value(a,b,"")},
$S:203}
A.p1.prototype={
$0(){var s=this
return s.b.$1(new A.p0(s.a,s.c,s.d))},
$S:0}
A.p0.prototype={
$0(){var s=this.a
return s.a.e5(s.w,this.b.a,A.b(this.c.value))},
$S:11}
A.p2.prototype={
$0(){return this.b.$1(new A.p_(this.a,this.c))},
$S:0}
A.p_.prototype={
$0(){var s=this.a
return s.a.e5(s.w,this.b.a,null)},
$S:11}
A.p3.prototype={
$0(){var s=this
return s.b.$1(new A.oZ(s.a,s.c,s.d))},
$S:0}
A.oZ.prototype={
$0(){var s=this.a
return s.a.e5(s.w,this.b.a,this.c)},
$S:11}
A.p4.prototype={
$0(){return this.b.$1(new A.oY(this.a,this.c))},
$S:0}
A.oY.prototype={
$0(){return this.a.a.mr(this.b.a)},
$S:11}
A.p5.prototype={
$1(a){var s
t.b.a(a)
if(a.r===this.a.w){s=a.d
s=!(s===B.x||s===B.o)}else s=!1
return s},
$S:2}
A.p6.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.p7.prototype={
$1(a){return this.a.a=a},
$S:3}
A.p8.prototype={
$1(a){var s=this
A.x(a).preventDefault()
s.c.$1(new A.oX(s.a,s.b,s.d,s.e,s.f,s.r))},
$S:13}
A.oX.prototype={
$0(){var s=this,r=A.b(s.c.value),q=A.b(s.d.value),p=A.b(s.f.value),o=s.a.a
if(o.length===0)o=null
return s.b.a.kP(r,q,s.e.c,p,o)},
$S:11}
A.qD.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.qE(s,t.AI.a(a),this.b)))
return null},
$S:49}
A.qE.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:s=2
return A.q(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p="Sent "+q.c.a+". The phone applies it on its next sync."
q.a.r=p
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.qx.prototype={
$0(){var s=this
return s.c.$1(new A.qw(s.a,s.b,s.d))},
$S:0}
A.qw.prototype={
$0(){return this.b.a.kN(this.c,this.a.a)},
$S:11}
A.qy.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:86}
A.qz.prototype={
$2(a,b){var s=t.G
return B.c.l(s.a(a).c,s.a(b).c)},
$S:47}
A.qA.prototype={
$1(a){var s=this.b
s.db.j(0,this.c,new A.t(A.af(B.as,a,t.v_),this.a.a))
s.ad()},
$S:3}
A.qB.prototype={
$1(a){var s=this.b,r=this.a.b,q=a.length===0?null:a
s.db.j(0,this.c,new A.t(r,q))
s.ad()},
$S:3}
A.qC.prototype={
$0(){var s=this
return s.c.$1(new A.qv(s.a,s.b,s.d,s.e))},
$S:0}
A.qv.prototype={
$0(){var s=this,r=s.a,q=r.b
r=s.d?r.a:null
return s.b.a.lS(s.c,q,r)},
$S:11}
A.q7.prototype={
$1(a){var s
A.x(a)
s=this.a
s.ai(t.U.a(new A.q6(s,this.b,this.c)))
return null},
$S:9}
A.q6.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
o=p
s=2
return A.q(p.a.e1(q.b,q.c),$async$$0)
case 2:o.r=b
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.pN.prototype={
$1(a){var s,r
A.x(a).preventDefault()
s=this.b
r=A.b(s.value)
s.value=""
s=this.a
s.ai(t.U.a(new A.pM(s,this.c,r)))},
$S:13}
A.pM.prototype={
$0(){var s=0,r=A.I(t.H),q=this,p,o
var $async$$0=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.q(p.a.dm(A.b(q.b.value),q.c),$async$$0)
case 2:o=b
p.r=o==null?"Sealed and sent. The phone keeps it on its next sync; this page cannot show it.":o
return A.G(null,r)}})
return A.H($async$$0,r)},
$S:5}
A.d8.prototype={}
A.dw.prototype={}
A.k9.prototype={}
A.mQ.prototype={}
A.vt.prototype={
$1(a){return A.aW(a,this.a)},
$S:18}
A.vu.prototype={
$1(a){var s=A.a7(this.a.d,t.N,t.G).h(0,a)
s=s==null?null:s.c
return A.hk(s==null?a:s)},
$S:12}
A.vr.prototype={
$2(a,b){var s=t.kc
return B.c.l(s.a(a).b,s.a(b).b)},
$S:205}
A.vs.prototype={
$2(a,b){var s=t.y3
return B.c.l(s.a(a).b,s.a(b).b)},
$S:206}
A.kF.prototype={
k(a){return"NoSyncFolder"}}
A.fC.prototype={
co(a,b){var s=0,r=A.I(t.l3),q,p=this,o,n
var $async$co=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.q(p.a.$3$headers("GET",a,A.R(["authorization","Bearer "+A.i(p.b.$0())],o,o)),$async$co)
case 3:n=d
o=n.a
if(o===401)throw A.k(new A.fX())
if(o!==200)throw A.k(A.ni(o,b))
q=n
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$co,r)},
cW(){var s=0,r=A.I(t.N),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$cW=A.J(function(a,a0){if(a===1)return A.F(a0,r)
for(;;)switch(s){case 0:c=p.d
if(c!=null){q=c
s=1
break}o="SanthIQ/Sync".split("/"),n=o.length,m=t.f,l=t.L,k=t.jS,j=t.N,i=t.z,h="root",g=0
case 3:if(!(g<n)){s=5
break}f=o[g]
e=A.a4(f,"\\","\\\\")
b=l
s=6
return A.q(p.co(A.j7("https","www.googleapis.com","/drive/v3/files",A.R(["q","name = '"+A.a4(e,"'","\\'")+"' and '"+h+"' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false","fields","files(id)","orderBy","createdTime","pageSize","1"],j,i)),"folder search"),$async$cW)
case 6:e=b.a(a0.b)
d=k.a(m.a(B.z.be(new A.ex(!1).cn(e,0,null,!0),null)).h(0,"files"))
if(d==null)d=B.aU
e=J.ap(d)
if(e.ga2(d))throw A.k(new A.kF())
e=m.a(e.ga_(d)).h(0,"id")
e.toString
A.b(e)
case 4:++g,h=e
s=3
break
case 5:q=p.d=h
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$cW,r)},
bf(){var s=0,r=A.I(t.a),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bf=A.J(function(a2,a3){if(a2===1)return A.F(a3,r)
for(;;)switch(s){case 0:s=3
return A.q(p.cW(),$async$bf)
case 3:c=a3
b=p.e
b.an(0)
o=t.N
n=t.z
m="'"+c+"' in parents and mimeType != 'application/vnd.google-apps.folder' and trashed = false"
l=t.I
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
a1=B.O
s=7
return A.q(p.co(A.j7("https","www.googleapis.com","/drive/v3/files",h),"list"),$async$bf)
case 7:g=a.a(a0.be(a1.c2(a3.b),null))
h=k.a(g.h(0,"files"))
h=J.d4(h==null?B.aU:h,l)
f=h.$ti
h=new A.ar(h,h.gq(0),f.i("ar<O.E>"))
f=f.i("O.E")
while(h.m()){e=h.d
if(e==null)e=f.a(e)
d=e.h(0,"name")
d.toString
b.aK(A.b(d),new A.nd(e))}i=A.m(g.h(0,"nextPageToken"))
case 5:if(i!=null){s=4
break}case 6:o=A.o(b).i("az<1>")
b=A.E(new A.az(b,o),o.i("h.E"))
q=b
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bf,r)},
bU(a){var s=0,r=A.I(t.p),q,p=this,o,n
var $async$bU=A.J(function(b,c){if(b===1)return A.F(c,r)
for(;;)switch(s){case 0:n=p.e
s=!n.C(a)?3:4
break
case 3:s=5
return A.q(p.bf(),$async$bU)
case 5:case 4:o=n.h(0,a)
if(o==null)o=A.j(A.ao("no file "+a))
s=6
return A.q(p.co(A.j7("https","www.googleapis.com","/drive/v3/files/"+o,A.R(["alt","media"],t.N,t.z)),"download"),$async$bU)
case 6:q=c.b
s=1
break
case 1:return A.G(q,r)}})
return A.H($async$bU,r)},
bW(a,b){var s=0,r=A.I(t.H),q,p=this,o,n,m,l,k,j
var $async$bW=A.J(function(c,d){if(c===1)return A.F(d,r)
for(;;)switch(s){case 0:j=p.e
s=!j.C(a)?3:4
break
case 3:s=5
return A.q(p.bf(),$async$bW)
case 5:case 4:if(j.C(a)){s=1
break}s=6
return A.q(p.cW(),$async$bW)
case 6:o=d
n=new A.h8(A.d([],t.eE))
m=t.N
n.n(0,B.E.M("--santhiq-page-boundary-7f3a\r\ncontent-type: application/json; charset=UTF-8\r\n\r\n"+B.z.b8(A.R(["name",a,"parents",A.d([o],t.s)],m,t.K),null)+"\r\n--santhiq-page-boundary-7f3a\r\ncontent-type: application/octet-stream\r\n\r\n"))
n.n(0,b)
n.n(0,B.E.M("\r\n--santhiq-page-boundary-7f3a--\r\n"))
l=A.j7("https","www.googleapis.com","/upload/drive/v3/files",A.R(["uploadType","multipart","fields","id"],m,t.z))
m=A.ox(A.R(["authorization","Bearer "+A.i(p.b.$0())],m,m),m,m)
m.j(0,"content-type","multipart/related; boundary=santhiq-page-boundary-7f3a")
s=7
return A.q(p.a.$4$body$headers("POST",l,n.f0(),m),$async$bW)
case 7:k=d
m=k.a
if(m===401)throw A.k(new A.fX())
if(m!==200)throw A.k(A.ni(m,"upload"))
m=t.f.a(B.z.be(B.O.c2(k.b),null)).h(0,"id")
m.toString
j.j(0,a,A.b(m))
case 1:return A.G(q,r)}})
return A.H($async$bW,r)},
$iH6:1}
A.nd.prototype={
$0(){var s=this.a.h(0,"id")
s.toString
return A.b(s)},
$S:19}
A.cY.prototype={}
A.kz.prototype={}
A.hX.prototype={}
A.vw.prototype={
$1(a){return A.aW(a,this.a)},
$S:18}
A.vx.prototype={
$1(a){var s,r,q
t.E.a(a)
s=a.e
r=s==null
q=r?a.a:A.cE(s)
s=(r?null:s.d)===B.o&&a.b.a.a.gab(0)>=0?" (a credit on a loan: check its statement)":""
return new A.cY(q+s,A.d3(a.c,this.a),this.b.$1(a.gcS()),a.b.a.a.gab(0)<0)},
$S:207}
A.nq.prototype={}
A.vv.prototype={
$1(a){return a.a.cP(0)},
$S:208}
A.k_.prototype={}
A.fB.prototype={}
A.fF.prototype={}
A.nr.prototype={}
A.vC.prototype={
$1(a){return A.aW(A.Ed(a),this.a)},
$S:26}
A.vB.prototype={
$1(a){var s=this.a.a7.a5(B.a4,a)
s=s==null?null:A.m(s.c.h(0,"name"))
return s==null?"A customer no longer kept":s},
$S:12}
A.vy.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.m(a.c.h(0,"name"))
r.toString
s=A.m(b.c.h(0,"name"))
s.toString
return B.c.l(r,s)},
$S:21}
A.vz.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="quantity",a1="unitPrice",a2="currency",a3="is not a supported currency",a4=b.a,a5=b.b,a6=a5.b,a7=A.DH(a4,a6),a8=a7.a,a9=a5.c,b0=A.m(a9.h(0,"customerId"))
b0.toString
b0=b.c.$1(b0)
a9=A.ay(a9.h(0,"date"))
a9.toString
a9=A.uI(a9)
s=A.d([],t.CP)
for(a4=A.mg(a4,a6),a6=a4.length,r=b.f,q=t.f,p=b.d,o=b.e,n=t.N,m=t.X,l=0;l<a4.length;a4.length===a6||(0,A.n)(a4),++l){k=a4[l].c
j=A.m(k.h(0,"description"))
j.toString
if(typeof k.h(0,a0)=="string"){i=k.h(0,a0)
i.toString
i=A.dd(A.b(i))}else i=a
i=A.i(i)
if(q.b(k.h(0,a1))){h=k.h(0,a1)
h.toString
h=q.a(h).F(0,n,m)
g=h.h(0,"amount")
g.toString
g=A.ah(A.b(g))
h=h.h(0,a2)
h.toString
A.b(h)
f=new A.v(g,h)
e=B.e.h(0,h)
if(e==null)A.j(A.y(h,a2,a3))
if((g.b<=0?0:Math.max(g.gA().b,0))>e)A.j(A.A(h+" allows "+A.i(e)+" decimal places",g.k(0),a))
h=f}else h=a
h.toString
h=A.aW(h,p)
if(typeof k.h(0,a0)=="string"){g=k.h(0,a0)
g.toString
g=A.dd(A.b(g))}else g=a
g.toString
if(q.b(k.h(0,a1))){f=k.h(0,a1)
f.toString
f=q.a(f).F(0,n,m)
d=f.h(0,"amount")
d.toString
d=A.ah(A.b(d))
f=f.h(0,a2)
f.toString
A.b(f)
c=new A.v(d,f)
e=B.e.h(0,f)
if(e==null)A.j(A.y(f,a2,a3))
if((d.b<=0?0:Math.max(d.gA().b,0))>e)A.j(A.A(f+" allows "+A.i(e)+" decimal places",d.k(0),a))
f=c}else f=a
d=f.a
f=f.b
e=B.e.h(0,f)
if(e==null)A.j(A.y(f,a2,a3))
g=o.$1(new A.Q(g.a.a4(0,A.aR(new A.Q(d.a,d.b-e).az().aD(0))),g.b).D(0,A.ah("0.5")).ct(0,B.c4).az().aD(0))
if(r)k=A.m(k.h(0,"gst"))==="zero-rated"?"Zero-rated":"Standard-rated"
else k=""
s.push(new A.k_(j,i,h,g,k))}if(a8==null)a4=a
else{a4=a8.w
a6=a8.gdt()
r=a8.z
a6=A.i(o.$1(a6+r))
r=a8.y!=null?" with GST "+A.i(o.$1(r)):""
r=a4+" \xb7 "+a6+r+" \xb7 due "+A.uI(a8.e)
a4=r}return new A.fB(a5,b0,a9,s,a4,a7.b)},
$S:209}
A.vA.prototype={
$0(){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=m.aC.c.h(0,"company-invoice:"+l.a),j=k==null?null:A.DO(m,k).d
m=A.uI(l.d)
s=l.e
r=A.uI(s)
q=n.c
p=l.z
o=q.$1(l.gdt()+p)
q=l.y!=null?q.$1(p):""
if(j===B.bl)s="Paid"
else if(j===B.bk)s="Part paid"
else{p=n.d
s=A.f(p.a,p.b,p.c).l(0,A.f(s.a,s.b,s.c))>0?"Overdue":"Open"}return new A.fF(l,m,r,o,q,s)},
$S:210}
A.ds.prototype={}
A.vJ.prototype={
$2(a,b){var s,r,q,p,o,n=A.aU(new A.p(B.aa,t.Ab.a(new A.vK(a)),t.rx),t.P),m=n==null?null:this.a.a7.a5(n,b)
if(m==null)return b
for(s=n.d,r=s.length,q=m.c,p=0;p<r;++p){o=s[p]
if(o.c===B.j&&A.m(q.h(0,o.a))!=null){s=A.m(q.h(0,o.a))
s.toString
return s}}return b},
$S:211}
A.vK.prototype={
$1(a){return t.P.a(a).b===this.a},
$S:33}
A.vL.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c,i=b.a,h=j.h(0,i)
if(h==null)return""
s=b.c
if(B.r===s){r=A.ay(j.h(0,i))
return r==null?A.i(h):A.d3(r,k.a)}if(B.u===s){q=a.ar(i)
return q==null?"":A.aW(q,k.b)}if(B.a3===s){j=k.c.r.a.h(0,A.i(h))
return j==null?A.i(h):A.cE(j)}if(B.ad===s)return A.hi(A.i(h),k.c)
if(B.ao===s)return A.z_(k.c,A.i(h))
if(B.be===s){j=A.d([],t.s)
for(i=J.T(t.j.a(h)),p=t.N,o=t.o,n=k.c;i.m();){m=A.i(i.gt())
if(m==="me")m="Me"
else{m=A.a7(n.p3,p,o).h(0,m)
m=m==null?null:m.b
if(m==null)m="someone removed"}j.push(m)}return B.a.S(j,", ")}if(B.F===s)return k.d.$2(b.f,A.i(h))
if(B.a_===s)return J.a1(h,!0)?"Yes":""
if(B.a6===s)return"\u2022\u2022"+A.i(h)
if(B.M===s){j=A.i(h)
l=A.a4(j,"-"," ")
j=l.length
if(j===0)j=""
else{if(0>=j)return A.a(l,0)
j=l[0].toUpperCase()+B.c.aa(l,1)}return j}if(B.aF===s||B.bf===s||B.al===s||B.bg===s||B.aE===s)return"Attached"
if(B.a2===s||B.am===s){j=A.i(h)
l=A.a4(j,"\n",", ")
return l.length>80?B.c.X(l,0,79)+"\u2026":l}if(B.aG===s)return A.i(h)+"%"
return A.i(h)},
$S:212}
A.vI.prototype={
$1(a){return A.z_(this.a,a)},
$S:12}
A.vH.prototype={
$1(a){return a==null?"":A.d3(a,this.a)},
$S:213}
A.vE.prototype={
$2(a,b){var s=t.ud
s.a(a)
s.a(b)
return B.c.l(a.gcd(),b.gcd())},
$S:214}
A.vF.prototype={
$1(a){return!B.dQ.B(0,t.P.a(a))},
$S:33}
A.vG.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.d([],t.e)
for(s=this.b,r=s.d,q=r.length,p=this.a,o=0;o<q;++o){n=r[o]
if(B.a.N(p.a,new A.vD(n)))e.push(n)}r=t.s
q=A.d([],r)
for(m=e.length,o=0;o<e.length;e.length===m||(0,A.n)(e),++o)q.push(e[o].b)
m=A.d([],t.tZ)
for(l=p.a,k=l.length,j=this.c,o=0;o<l.length;l.length===k||(0,A.n)(l),++o){i=l[o]
h=A.d([],r)
for(g=e.length,f=0;f<e.length;e.length===g||(0,A.n)(e),++f)h.push(j.$2(i,e[f]))
m.push(h)}return new A.ds(s.c,q,m,s,p.a)},
$S:88}
A.vD.prototype={
$1(a){return t.u.a(a).c.h(0,this.a.a)!=null},
$S:31}
A.v0.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.t)
for(s=this.a,r=s.b,q=s.c,p=0;p<r.length;++p)if(B.a.N(q,new A.v_(p)))g.push(p)
o=t.s
n=A.d([],o)
for(m=g.length,l=0;l<g.length;g.length===m||(0,A.n)(g),++l){p=g[l]
if(!(p<r.length))return A.a(r,p)
n.push(r[p])}r=A.d([],t.tZ)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.n)(q),++l){k=q[l]
j=A.d([],o)
for(i=g.length,h=0;h<g.length;g.length===i||(0,A.n)(g),++h){p=g[h]
if(!(p<k.length))return A.a(k,p)
j.push(k[p])}r.push(j)}return new A.ds(s.a,n,r,s.d,s.e)},
$S:88}
A.v_.prototype={
$1(a){return J.as(t.a.a(a),this.a).length!==0},
$S:69}
A.kj.prototype={}
A.fL.prototype={}
A.vQ.prototype={
$1(a){return A.aW(a,this.a)},
$S:18}
A.vR.prototype={
$1(a){var s=a.as
switch(s==null?null:s.a){case B.bz:s=0
break
case B.aW:s=1
break
case B.bA:s=2
break
case B.bB:s=3
break
case null:case void 0:s=4
break
default:s=null}return s},
$S:216}
A.vN.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d===B.o},
$S:2}
A.vO.prototype={
$2(a,b){var s,r,q,p=t.b
p.a(a)
p.a(b)
p=this.a
s=B.a.bR(p,a.e)-B.a.bR(p,b.e)
if(s!==0)return s
p=a.CW!=null
if(p!==(b.CW!=null))return p?1:-1
p=this.b
r=p.$1(a)
p=p.$1(b)
if(typeof r!=="number")return r.a8()
if(typeof p!=="number")return A.AT(p)
q=r-p
return q!==0?q:B.c.l(a.b,b.b)},
$S:10}
A.vP.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.a,a7=a4.b,a8=a4.c,a9=A.Ks(a6,a7,a8),b0=a9.c,b1=A.N(b0),b2=A.aU(new A.p(b0,b1.i("l(1)").a(new A.vM(a8)),b1.i("p<1>")),t.pt),b3=b2==null?a5:b2.b
if(b3==null){s=a7.as
if(s==null)r=B.cn
else{q=s.d
p=s.f
o=q==null
n=!o
m=!n||p==null?0:A.D7(q,p,a8)
if(m>0&&s.e!=null){l=s.e
l.toString
Math.max(0,l-m)}k=s.e
j=!n||p==null?0:A.D7(q,p,a8.bx(-1))
if(o)r=B.cn
else{if(k===0)s=B.ee
else s=k!=null&&k-j<=0?new A.kG(m):A.IO(q,a8)
r=s}}A:{if(r instanceof A.hO){i=r.a
s=i
break A}s=a5
break A}b3=s}s=a7.as
o=s==null
h=o?a5:s.r
g=o?a5:s.w
s=g==null
f=s?a5:a6.gR().h(0,g)
a6=A.cE(a7)
o=a9.a
o=o==null||a9.b==null?"":A.i(o)+" of "+A.i(a9.b)+" instalments paid"
if(b3==null)n="Next due unknown: add the payment day"
else{n=A.d3(b3,a8)
n="Next due "+n+" \xb7 "+A.i(h==null?"amount not set":a4.d.$1(h))}if(s)s="Not in the forecast: no paying account"
else s="In the forecast from "+(f==null?g:A.cE(f))
l=a9.d
if(l==null)l="Not known yet"
else{l=A.i(a4.d.$1(l))
e=a9.e
e=e==null?"":", "+A.d3(e,a8)
e=l+" ("+a9.f+e+")"
l=e}e=A.d([],t.DA)
for(b1=b1.i("aZ<1>"),b0=new A.aZ(b0,b1),b0=new A.ar(b0,b0.gq(0),b1.i("ar<ag.E>")),d=a4.d,b1=b1.i("ag.E");b0.m();){c=b0.d
if(c==null)c=b1.a(c)
b=c.a
a=c.b
a0=a.b-1
if(!(a0>=0&&a0<12))return A.a(B.l,a0)
a0=B.l[a0]
a1=a.a
a1=a1===a8.a?"":" "+a1
a2=c.c
a2=a2==null?"":d.$1(a2)
a3=B.k9.h(0,c.d)
a3.toString
c=c.r
c=c==null?"":A.i(d.$1(c))+" still due"
e.push(new A.kj("No. "+b+" \xb7 "+(""+a.c+" "+a0+a1),a2,a3,c))}return new A.fL(a7,a6,o,n,s,l,a9.r,e)},
$S:217}
A.vM.prototype={
$1(a){var s=t.pt.a(a).b,r=this.a
return A.f(s.a,s.b,s.c).l(0,A.f(r.a,r.b,r.c))>=0},
$S:51}
A.y0.prototype={
$1(a){return B.c.af(B.d.k(a),2,"0")},
$S:26}
A.e4.prototype={}
A.kX.prototype={}
A.jv.prototype={}
A.oE.prototype={}
A.vU.prototype={
$1(a){return A.aW(a,this.a)},
$S:18}
A.vV.prototype={
$1(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return new A.eb(p,o,A.DN(r.cD(),q,a,new A.K(p,o,1),new A.K(p,o+1,1).bx(-1)),A.E1(r,A.zi(r,q),r.cD(),q,a,s.e,o,p))},
$S:218}
A.vS.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:219}
A.vT.prototype={
$1(a){return t.iJ.a(a).b},
$S:220}
A.fS.prototype={}
A.fX.prototype={
k(a){return"SignInExpired"}}
A.ka.prototype={
k(a){return"Google "+this.b+" failed: HTTP "+this.a}}
A.kb.prototype={
k(a){return"GoogleTookTooLong"}}
A.zC.prototype={
$4$body$headers(a,b,c,d){return this.a.$4$body$headers(A.b(a),t.ya.a(b),t.F5.a(c),t.yz.a(d)).mE(this.b,new A.zB())},
$2(a,b){return this.$4$body$headers(a,b,null,B.dv)},
$3$headers(a,b,c){return this.$4$body$headers(a,b,null,c)},
$S:89}
A.zB.prototype={
$0(){return A.j(new A.kb())},
$S:74}
A.ri.prototype={}
A.ef.prototype={
T(){return"PageStage."+this.b}}
A.kP.prototype={
geA(){var s=this.Q
if(s==null)s=this.Q=new A.rk(this).$0()
return s},
cc(){var s=0,r=A.I(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$cc=A.J(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.e.bT()
s=3
return A.q(t.uo.b(h)?h:A.Hr(A.m(h),t.T),$async$cc)
case 3:g=b
if(g==null){s=1
break}p=5
m=t.I.a(B.z.be(g,null))
h=J.as(m,"ticket")
h.toString
s=8
return A.q(A.nt(t.f.a(h).F(0,t.N,t.X)),$async$cc)
case 8:n.f=b
h=J.as(m,"account")
h.toString
n.r=A.b(h)
l=A.m(J.as(m,"token"))
h=A.m(J.as(m,"tokenUntil"))
k=A.BK(h==null?"":h)
h=k
j=h==null?null:h.aX(n.b.$0().H())
s=l!=null&&j!=null&&j.a>12e7?9:10
break
case 9:s=11
return A.q(n.bJ(new A.fY(l,j)),$async$cc)
case 11:case 10:p=2
s=7
break
case 5:p=4
f=o.pop()
s=12
return A.q(n.cH(),$async$cc)
case 12:s=7
break
case 4:s=2
break
case 7:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$cc,r)},
cu(){var s=0,r=A.I(t.H),q,p=this,o,n,m,l,k,j
var $async$cu=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:l=p.as
k=p.z
j=p.w
if(l==null||k==null||p.cx!==B.at){s=1
break}s=3
return A.q(l.b.bu(),$async$cu)
case 3:o=b
n=k.a
m=p.y
s=4
return A.q(p.e.ce(B.z.b8(A.R(["ticket",o,"account",n,"token",m,"tokenUntil",j==null?null:j.df()],t.N,t.X),null)),$async$cu)
case 4:p.x=!0
case 1:return A.G(q,r)}})
return A.H($async$cu,r)},
cH(){var s=0,r=A.I(t.H),q=this,p
var $async$cH=A.J(function(a,b){if(a===1)return A.F(b,r)
for(;;)switch(s){case 0:p=q.e.an(0)
s=2
return A.q(p,$async$cH)
case 2:q.r=q.f=null
q.cG()
return A.G(null,r)}})
return A.H($async$cH,r)},
bJ(a){return this.hV(t.gc.a(a))},
hV(a){var s=0,r=A.I(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bJ=A.J(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ay=null
m=null
p=4
s=7
return A.q(A.wv(n.a,a.a),$async$bJ)
case 7:m=c
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.au(f)
n.ay=A.jd(l)
s=1
break
s=6
break
case 3:s=2
break
case 6:j=m
i=j instanceof A.il
h=i?j.a:null
if(i){n.ay=A.i(h)+" is a work or school account. Sign in with SanthIQ's own Google account."
s=1
break}s=j instanceof A.im?8:9
break
case 8:i=n.z
if(i!=null&&i.a!==m.a){n.cG()
n.ay="That is another account than the one this tab was using, so the page started again."
s=1
break}n.y=a.a
n.w=n.b.$0().H().aM(a.b.a)
n.z=m
i=n.cx
if(i===B.b_)i=n.cx=B.bD
g=n.f
s=i===B.bD&&g!=null?10:11
break
case 10:s=n.r!==m.a?12:14
break
case 12:i=n.e.an(0)
s=15
return A.q(i,$async$bJ)
case 15:n.f=null
s=13
break
case 14:n.as=A.Cp(n.geA(),g)
n.cx=B.bE
s=16
return A.q(n.bD(),$async$bJ)
case 16:s=1
break
case 13:case 11:s=n.x?17:18
break
case 17:s=19
return A.q(n.cu(),$async$bJ)
case 19:case 18:case 9:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$bJ,r)},
S(a,b){var s="Dell browser"
return this.m8(0,b)},
m8(a,b){var s=0,r=A.I(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$S=A.J(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j="Dell browser"
n.ay=null
if(n.cx!==B.bD){s=1
break}p=4
s=7
return A.q(A.cA(n.geA(),"browser",j,n.b.$0(),b),$async$S)
case 7:m=d
n.as=A.Cp(n.geA(),m)
n.cx=B.bE
s=8
return A.q(n.bD(),$async$S)
case 8:p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.au(i)
n.ay=A.jd(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$S,r)},
bD(){var s=0,r=A.I(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bD=A.J(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:f=n.as
if(f==null||n.cx===B.dz){s=1
break}p=4
s=7
return A.q(f.ba(),$async$bD)
case 7:m=b
if(J.jq(m)){if(f.b===n.f)throw A.k(new A.cK())
s=1
break}i=new A.kf(A.w(t.N,t.Q))
B.a.a0(f.e,i.gkR())
l=A.Gy(i)
h=n.z
h.toString
k=A.J9(h,l)
s=k!=null?8:9
break
case 8:s=10
return A.q(n.cH(),$async$bD)
case 10:n.ay=k
s=1
break
case 9:n.at=l
n.ax=J.Bq(m,new A.rD(),t.zG).e_(0,new A.rE())
n.cx=B.at
n.ay=null
s=!n.x?11:12
break
case 11:s=13
return A.q(n.cu(),$async$bD)
case 13:case 12:p=2
s=6
break
case 4:p=3
e=o.pop()
h=A.au(e)
s=h instanceof A.cK?14:16
break
case 14:f.cG()
n.at=null
n.cx=B.dz
h=n.e.an(0)
s=17
return A.q(h,$async$bD)
case 17:n.f=null
n.ay="The phone removed this browser. Close the tab; a new visit can ask to join again."
s=15
break
case 16:j=h
n.ay=A.jd(j)
case 15:s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$bD,r)},
gcR(){var s=this.as
s=s==null?null:s.gcR()
return s==null?B.dk:s},
he(a,b){var s,r,q,p,o,n
for(s=this.gcR(),r=A.N(s).i("aZ<1>"),s=new A.aZ(s,r),s=new A.ar(s,s.gq(0),r.i("ar<ag.E>")),r=r.i("ag.E"),q=a.a,p=b.a;s.m();){o=s.d
if(o==null)o=r.a(o)
if(o.d==="setup.tick"){n=o.e
n=J.a1(n.h(0,"stepId"),q)&&J.a1(n.h(0,"itemId"),p)}else n=!1
if(n)return J.a1(o.e.h(0,"ticked"),!0)}s=this.at
s=s==null?null:s.p4.a.B(0,new A.t(q,p))
return s===!0},
m7(a,b){return B.a.N(this.gcR(),new A.ry(a,b))},
e1(a,b){return this.mG(a,b)},
mG(a,b){var s=0,r=A.I(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$e1=A.J(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:f=n.ev()
if(f!=null){q=f
s=1
break}i=n.as
i.toString
m=i
l=m.b.a
k=m.hl()
p=4
i=a.a
h=b.a
s=7
return A.q(m.c_(A.d([new A.al("setup:"+i+":"+h+":"+A.i(l)+":"+A.i(k),l,k,"setup.tick",A.R(["stepId",i,"itemId",h,"ticked",!n.he(a,b)],t.N,t.X),n.b.$0().H())],t.Y)),$async$e1)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.au(e)
i=A.jd(j)
q=i
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$e1,r)},
gmm(){var s,r,q=this.at
if(q==null)q=null
else{q=q.gR().gU()
s=A.o(q)
r=s.i("p<h.E>")
q=A.E(new A.p(q,s.i("l(h.E)").a(new A.rB()),r),r.i("h.E"))}if(q==null)q=A.d([],t.k)
B.a.E(q,new A.rC())
return q},
dm(a,b){return this.hQ(a,b)},
hQ(a,b){var s=0,r=A.I(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$dm=A.J(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.ev()
if(h!=null){q=h
s=1
break}k=n.at
m=k.db
if(m==null){q="The phone has not published its backup key yet, so a password cannot be sealed for it."
s=1
break}if(!k.gR().C(a)){q="Pick an account first."
s=1
break}if(b.length===0){q="Type the password first."
s=1
break}p=4
j=n.as
j.toString
s=7
return A.q(j.cj(a,new A.bB(m.a,B.S),n.b.$0().H(),b),$async$dm)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.au(g)
j=A.jd(l)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$dm,r)},
lS(a,b,c){return this.cv(new A.rx(b,a,c,!0),a)},
kN(a,b){return this.cv(new A.rn(a,b),a)},
lR(){return this.aA(new A.rw())},
lE(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new A.rv(),d=e.$1(a2)
if(d==null)s=f
else{r=A.C("\\s",!0,!1)
d=A.a4(d,r,"")
s=A.a4(d.toUpperCase(),"*","X")}d=e.$1(a0)
d=d==null?f:d.toUpperCase()
r=t.N
q=t.T
p=A.R(["ifsc",d,"micr",e.$1(a1),"branch",e.$1(c),"numberShown",s],r,q)
d=p.h(0,"ifsc")
o=p.h(0,"micr")
n=A.Dz(p.h(0,"branch"),d,o,p.h(0,"numberShown"))
if(n!=null)return A.aT("Not sent: "+n+".",q)
m=e.$1(a3)==null?f:A.kU(B.c.G(a3),f)
if(e.$1(a3)!=null)d=m==null||m<1
else d=!1
if(d)return A.aT("Not sent: the stale window is a whole number of days, at least 1.",q)
l=e.$1(b)
if(l==null)return A.aT("Not sent: an account needs its alias.",q)
k=A.R(["ifsc",a.fr,"micr",a.fx,"branch",a.fy,"numberShown",a.go],r,q)
d=A.w(r,t.X)
if(l!==a.b)d.j(0,"alias",l)
for(r=new A.aa(p,A.o(p).i("aa<1,2>")).gv(0);r.m();){j=r.d
o=j.a
i=k.h(0,o)
h=j.b
if(i!=h)d.j(0,o,h)}if(m!=null&&m!==a.y)d.j(0,"staleAfterDays",m)
g=A.eA(a.l7(l))
if(g!=null)return A.aT("Not sent: "+g+".",q)
return this.aA(new A.ru(this,d,a))},
gma(){var s,r,q=A.w(t.N,t.hS),p=this.at
p=p==null?null:p.gR().gU()
p=J.T(p==null?B.by:p)
while(p.m()){s=p.gt()
r=B.a.ga_(s.b.split("-"))
if(r.length!==0&&s.d!==B.y)q.aK(s.c,new A.rz(s,r))}p=q.$ti.i("L<2>")
p=A.E(new A.L(q,p),p.i("h.E"))
B.a.E(p,new A.rA())
return p},
kQ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this,k=null,j=l.kC(f,c),i=j.b
if(i!=null)return A.aT("Not sent: "+i+".",t.T)
s=$.jj()
r=A.d([],t.s)
for(q=0;q<4;++q)r.push(B.c.af(B.d.bE(s.cM(256),16),2,"0"))
p="acct-"+B.a.c8(r)
r=B.c.G(d)
o=l.at
o=o==null?k:o.gR().gU()
o=A.Lt(o==null?B.by:o)
if(o==null)o=""
n=A.jr(k,k,a.b+"-LOAN-"+r,k,b,k,k,c,k,o,p,k,a.a,B.o,j.a,k,k,k,k,k,k,k,k,e,k,k,k)
m=A.eA(n)
if(m!=null)return A.aT("Not sent: "+m+".",t.T)
return l.aA(new A.rq(l,p,n))},
kO(a){var s,r,q=this.at,p=q==null?null:A.DD(q,a)
if(p==null)return A.aT("Not sent: the card statement no longer lists that loan.",t.T)
s=$.jj()
q=A.d([],t.s)
for(r=0;r<4;++r)q.push(B.c.af(B.d.bE(s.cM(256),16),2,"0"))
return this.aA(new A.ro(this,a,p,"acct-"+B.a.c8(q)))},
mJ(a,b){var s,r,q,p,o,n,m,l=null,k={}
k.a=null
s=a.as
r=s==null
q=r?l:s.x
p=this.fP(b,a.e,q)
o=k.a=p.a
n=p.b
if(n!=null)return A.aT("Not sent: "+n+".",t.T)
m=A.eA(a.h3(o))
if(m!=null)return A.aT("Not sent: "+m+".",t.T)
q=B.z.b8(o.J(),l)
s=r?l:s.J()
return this.aA(new A.rQ(k,this,q===B.z.b8(s==null?B.ds.J():s,l),a))},
fP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=i[2]
if(h!=null){s=this.at
r=s==null?null:s.gR().h(0,h)
if(c!=null)q=(r==null?null:r.d)===B.x
else q=!1
if(r!=null){s=r.d
s=s!==B.V&&s!==B.Z&&!q}else s=!0
if(s)return B.l5}s=i[7]
p=i[6]
o=i[1]
n=i[3]
m=i[5]
l=i[4]
k=A.Kt(c,b,i[0],o,h,n,l,m,p,s)
j=k.b
if(j==null)i=null
else{i=A.C("^[A-Z](?=[a-z])",!0,!1)
s=t._.a(new A.rl())
A.Ce(0,0,j.length,"startIndex")
i=A.Lj(j,i,s,0)}return new A.t(k.a,i)},
kC(a,b){return this.fP(a,b,null)},
hP(a,b,c){var s,r,q="Enter the sender as the phone shows it, like DBS, or a number.",p=B.c.dq(a,A.C("[,\\s]+",!0,!1)),o=A.N(p),n=o.i("p<1>"),m=A.E(new A.p(p,o.i("l(1)").a(new A.rN()),n),n.i("h.E")),l=A.ab(t.N)
for(p=m.length,s=0;s<m.length;m.length===p||(0,A.n)(m),++s){r=A.E4(m[s])
if(r==null){p=new A.am($.ai,t.gH)
p.bk(q)
return p}l.n(0,r)}if(l.a===0)return A.aT(q,t.T)
return this.aA(new A.rO(l,b,c))},
mv(a){return this.aA(new A.rJ(a))},
l0(a,b){if(b===a.Q)return A.aT(u.z,t.T)
return this.aA(new A.rs(this,a,b))},
hO(a,b){var s=B.c.G(b)
if(s.length===0)s=null
if(s==a.db)return A.aT(u.z,t.T)
return this.aA(new A.rM(this,a,s))},
e5(a,b,c){var s,r,q={}
q.a=null
if(c!=null){s=B.c.G(A.a4(c,",",""))
r=A.C("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!r.b.test(s)||A.a6(A.ah(s),"SGD").a.a.gab(0)<=0)return A.aT("Not sent: a budget is an amount above zero, like 450 or 1200.50.",t.T)
r=this.at
r.toString
r=A.vj(r,a)
q.a=A.a6(A.ah(s),r)}return this.aA(new A.rP(q,a,b,A.aC(this.b.$0().H(),B.n)))},
kP(a,b,c,d,e){var s,r,q,p,o,n,m=null,l=B.c.G(A.a4(b,",","")),k=B.c.G(a)
if(k.length===0)return A.aT("Not sent: a goal needs its name.",t.T)
s=A.C("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!s.b.test(l)||A.a6(A.ah(l),"SGD").a.a.gab(0)<=0)return A.aT("Not sent: the target is an amount above zero.",t.T)
r=A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1).aj(B.c.G(d))
if(r==null)return A.aT("Not sent: pick the date to reach it by.",t.T)
s=this.b.$0().H()
q=A.a6(A.ah(l),c)
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
return this.aA(new A.rp(new A.it("goal-"+(1000*s.a+s.b),k,q,new A.K(o,n,A.Z(p,m,m)),e)))},
mr(a){return this.aA(new A.rF(a))},
f9(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1="currency",a2="is not a supported currency"
t.yz.a(a4)
s=t.N
r=t.X
q=A.w(s,r)
for(p=a3.d,o=p.length,n=a5==null,m=0;m<o;++m){l=p[m]
if(!(B.bP.B(0,l.c)&&l.a!=="fromEvent"))k=(n?a0:a5.c.h(0,l.a))!=null
else k=!1
if(k){k=l.a
q.j(0,k,a5.c.h(0,k))}}for(o=A.N(p),o.i("l(1)").a(A.yu()),p=B.a.gv(p),o=new A.S(p,A.yu(),o.i("S<1>"));o.m();){k=p.gt()
j=k.a
i=a4.h(0,j)
h=B.c.G(i==null?"":i)
if(h.length===0)continue
switch(k.c.a){case 5:g=A.C("^([\\d,]+(?:\\.\\d{1,2})?)\\s*([A-Za-z]{3})?$",!0,!1).aj(h)
i=g==null
if(i)f=a0
else{f=g.b
if(2>=f.length)return A.a(f,2)
f=f[2]}if(f==null)f="SGD"
e=f.toUpperCase()
if(i||!B.e.C(e)){s=k.b
r=new A.am($.ai,t.gH)
r.bk("Not sent: "+s.toLowerCase()+" is an amount, like 1200.50 or 500 INR.")
return r}k=g.b
if(1>=k.length)return A.a(k,1)
k=k[1]
k.toString
k=A.ah(A.a4(k,",",""))
d=B.e.h(0,e)
if(d==null)A.j(A.y(e,a1,a2))
if((k.b<=0?0:Math.max(k.gA().b,0))>d)A.j(A.A(e+" allows "+A.i(d)+" decimal places",k.k(0),a0))
d=B.e.h(0,e)
if(d==null)A.j(A.y(e,a1,a2))
q.j(0,j,A.R(["amount",k.bF(0,d),"currency",e],s,r))
break
case 7:c=A.kU(h,a0)
if(c==null){s=k.b
r=new A.am($.ai,t.gH)
r.bk("Not sent: "+s.toLowerCase()+" is a whole number.")
return r}q.j(0,j,c)
break
case 20:if(h==="yes")q.j(0,j,!0)
break
case 23:q.j(0,j,h.toUpperCase())
break
default:q.j(0,j,h)}}s=n?a0:a5.b
if(s==null){s=this.b.$0().H()
s="web-"+(1000*s.a+s.b)}b=new A.b1(a3,s,q)
s=this.at
s.toString
a=A.AW(s,b)
if(a!=null)return A.aT("Not sent: "+a+".",t.T)
if(!n&&B.z.b8(a5.c,a0)===B.z.b8(q,a0))return A.aT(u.z,t.T)
return this.aA(new A.rL(b))},
hN(a,b){return this.f9(a,b,null)},
hM(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t.BU.a(a6)
if(a5==null)return A.aT("Not sent: enter the invoice date, like 17/11/2026.",t.T)
s=this.b.$0().H()
r="web-"+(1000*s.a+s.b)
s=t.N
q=t.X
p=A.w(s,q)
p.j(0,"bookId",a3)
p.j(0,"customerId",a4)
p.j(0,"date",a5.k(0))
o=B.c.G(a8)
if(o.length!==0)p.j(0,"reference",o)
o=B.c.G(a7)
if(o.length!==0)p.j(0,"note",o)
n=new A.b1(B.a8,r,p)
p=this.at
p.toString
m=A.AW(p,n)
if(m!=null)return A.aT("Not sent: "+m+".",t.T)
l=A.d([],t.V)
for(p=A.bK(a6,0,t.jm),o=J.T(p.a),k=p.b,p=new A.at(o,k,A.o(p).i("at<1>")),j=r+"-";p.m();){i=p.c
i=i>=0?new A.t(k+i,o.gt()):A.j(A.aq())
h=i.a
g=i.b
f=g.a[0]
i=g.a
e=i[1]
d=i[2]
c=i[3]
i=B.c.G(f)
b=i.length===0
if(b&&B.c.G(e).length===0&&B.c.G(d).length===0)continue
a=A.dd(B.c.G(e))
a0=A.C("^\\d[\\d,]*(\\.\\d{1,2})?$",!0,!1)
a1=B.c.G(d)
if(a0.b.test(a1))a2=A.a4(a1,",","")
else a2=null
if(b){s=new A.am($.ai,t.gH)
s.bk("Not sent: line "+(h+1)+" needs a description.")
return s}b=!0
if(a!=null)if(a.l(0,$.M())>0)b=(a.b<=0?0:Math.max(a.gA().b,0))>4
if(b){s=new A.am($.ai,t.gH)
s.bk("Not sent: line "+(h+1)+"'s quantity is a number above zero, at most 4 decimals.")
return s}if(a2==null){s=new A.am($.ai,t.gH)
s.bk("Not sent: line "+(h+1)+"'s unit price is an amount in S$, like 1200.50.")
return s}b=B.c.af(""+h,3,"0")
a0=A.w(s,q)
a0.j(0,"draftId",r)
a0.j(0,"description",i)
a0.j(0,"quantity",a.k(0))
i=A.ah(a2)
if((i.b<=0?0:Math.max(i.gA().b,0))>2)A.j(A.A("SGD allows 2 decimal places",i.k(0),null))
a0.j(0,"unitPrice",A.R(["amount",i.bF(0,2),"currency","SGD"],s,q))
if(c!=null)a0.j(0,"gst",c)
B.a.n(l,new A.b1(B.ap,j+b,a0))}if(l.length===0)return A.aT("Not sent: an invoice needs at least one line.",t.T)
return this.aA(new A.rK(n,l))},
ms(a){return this.aA(new A.rG(a))},
mt(a){return this.aA(new A.rH(a))},
fU(a){var s=this.gcR(),r=A.N(s)
return a.dx+new A.p(s,r.i("l(1)").a(new A.rm(a)),r.i("p<1>")).gq(0)},
l3(a){return this.aA(new A.rt(this,a))},
mu(a){return this.aA(new A.rI(this,a))},
cv(a,b){return this.kk(t.iX.a(a),b)},
aA(a){return this.cv(a,null)},
kk(a,b){var s=0,r=A.I(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cv=A.J(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.ev()
if(h!=null){q=h
s=1
break}j=n.as
j.toString
m=j
j=n.at
j.toString
l=a.$4(j,m.b.a,m.hl(),n.b.$0().H())
if(J.jq(l)){q=u.z
s=1
break}p=4
s=7
return A.q(m.c_(l),$async$cv)
case 7:if(b!=null)n.cy.n(0,b.b+"|"+b.c.b)
q=null
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
k=A.au(g)
j=A.jd(k)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.G(q,r)
case 2:return A.F(o.at(-1),r)}})
return A.H($async$cv,r)},
ev(){if(this.cx!==B.at)return"The page is not joined yet."
if(!this.CW)return"The page is read-only. Allow changes first."
return null},
cG(){var s=this,r=s.as
if(r!=null)r.cG()
s.Q=s.z=s.y=s.ax=s.at=s.as=null
s.CW=s.x=!1
s.ch=!0
s.cx=B.b_}}
A.rk.prototype={
$0(){var s=this.a,r=t.N
return new A.fC(s.a,new A.rj(s),A.w(r,r))},
$S:222}
A.rj.prototype={
$0(){var s=this.a.y
return s==null?"":s},
$S:19}
A.rD.prototype={
$1(a){return t.Q.a(a).f},
$S:223}
A.rE.prototype={
$2(a,b){var s=t.zG
s.a(a)
s.a(b)
return a.hc(b)?a:b},
$S:224}
A.ry.prototype={
$1(a){var s
t.Q.a(a)
if(a.d==="setup.tick"){s=a.e
s=J.a1(s.h(0,"stepId"),this.a.a)&&J.a1(s.h(0,"itemId"),this.b.a)}else s=!1
return s},
$S:36}
A.rB.prototype={
$1(a){return t.b.a(a).d!==B.y},
$S:2}
A.rC.prototype={
$2(a,b){var s=t.b
return B.c.l(s.a(a).b,s.a(b).b)},
$S:10}
A.rx.prototype={
$4(a,b,c,d){var s=this,r=s.a,q=s.b
return r===B.L?A.JF(a,q,A.AR(q),b,d,c):A.DB(a,q,A.AR(q),s.c,b,d,s.d,c,r)},
$S:4}
A.rn.prototype={
$4(a,b,c,d){var s=this.a,r=this.b,q=A.AR(s),p=r.c,o=p==null,n=A.DB(a,s,q,r.b,b,d,o,c,r.a)
s=A.E(n,t.Q)
if(!o)s.push(new A.al("bulk:"+q+":confirm:"+p,b,c+n.length,"rule.confirm",A.R(["id",p],t.N,t.X),d))
return s},
$S:4}
A.rw.prototype={
$4(a,b,c,d){return A.JI(a,b,d,c)},
$S:4}
A.rv.prototype={
$1(a){var s=B.c.G(a)
return s.length===0?null:s},
$S:52}
A.ru.prototype={
$4(a,b,c,d){var s,r,q=A.d([],t.Y),p=this.b
if(p.a!==0){s=this.c.a
r=A.w(t.N,t.X)
r.j(0,"id",s)
r.a1(0,p)
q.push(new A.al("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.I.a(r),d))}return q},
$S:4}
A.rz.prototype={
$0(){return new A.ce(this.a.c,this.b)},
$S:226}
A.rA.prototype={
$2(a,b){var s=t.hS
return B.c.l(s.a(a).a,s.a(b).a)},
$S:227}
A.rq.prototype={
$4(a,b,c,d){return A.d([new A.al("account:"+b+":"+this.b,b,c,"account.add",t.I.a(A.R(["account",this.c.J()],t.N,t.X)),d)],t.Y)},
$S:4}
A.ro.prototype={
$4(a,b,c,d){var s,r,q,p=null,o=this.c,n=o.a,m=n.b,l=B.a.ga_(m.split("-"))
m=B.c.aa(m,m.length-4)
s=o.b
r=s.e
q=r==null?p:o.c
return A.d([new A.al("card-loan:"+this.b,b,c,"account.add",t.I.a(A.R(["account",A.jr(p,p,l+"-LOAN-"+m,p,n.r,p,p,n.e,p,n.f,this.d,p,n.c,B.o,new A.fM(B.aW,s.f,p,p,r,q,p,n.a,s.bS(o.d)),p,p,p,p,p,p,p,p,s.b,p,p,p).J()],t.N,t.X)),d)],t.Y)},
$S:4}
A.rQ.prototype={
$4(a,b,c,d){var s,r=A.d([],t.Y)
if(!this.c){s=this.d.a
r.push(new A.al("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.I.a(A.R(["id",s,"loan",this.a.a.J()],t.N,t.X)),d))}return r},
$S:4}
A.rl.prototype={
$1(a){var s=a.b
if(0>=s.length)return A.a(s,0)
return s[0].toLowerCase()},
$S:14}
A.rN.prototype={
$1(a){return A.b(a).length!==0},
$S:7}
A.rO.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.Y)
for(s=this.a,s=A.eu(s,s.r,A.o(s).c),r=this.b,q=this.c,p=c,o=t.N,n=t.X,m=s.$ti.c;s.m();){l=s.d
if(l==null)l=m.a(l)
k=new A.ch(l,r,q).mF()
j=A.i5(o,n)
j.a1(0,k)
i.push(new A.al("sms-sender:"+l+":"+b+":"+p,b,c,"sms.sender",j,d.H()))}return i},
$S:4}
A.rJ.prototype={
$4(a,b,c,d){var s=this.a
return A.d([A.L7(s,c,b,"sms-sender:"+s.a+":"+b+":"+c,d,!0)],t.Y)},
$S:4}
A.rs.prototype={
$4(a,b,c,d){var s=this.b,r=s.a
return A.d([new A.al("categorise:"+r+":"+b+":"+c,b,c,"movement.categorise",t.I.a(A.R(["movementId",r,"categoryId",this.c,"baseVersion",this.a.fU(s)],t.N,t.X)),d)],t.Y)},
$S:4}
A.rM.prototype={
$4(a,b,c,d){var s,r=this.b,q=r.a
r=this.a.fU(r)
s=A.B0(this.c)
return A.d([new A.al("note:"+q+":"+b+":"+c,b,c,"movement.note",A.R(["movementId",q,"notes",s,"baseVersion",r],t.N,t.X),d.H())],t.Y)},
$S:4}
A.rP.prototype={
$4(a,b,c,d){var s=this,r=s.b,q=s.c,p=s.a.a,o=s.d
p=p==null?null:p.J()
return A.d([new A.al("budget:"+r+":"+q+":"+b+":"+c,b,c,"budget.set",A.R(["bookId",r,"categoryId",q,"amount",p,"from",""+o.a+"-"+B.c.af(B.d.k(o.b),2,"0")],t.N,t.X),d.H())],t.Y)},
$S:4}
A.rp.prototype={
$4(a,b,c,d){var s=this.a,r=s.a
return A.d([new A.al("goal:"+r+":"+b+":"+c,b,c,"goal.set",A.R(["id",r,"name",s.b,"target",s.c.J(),"by",s.d.k(0),"accountId",s.e],t.N,t.X),d.H())],t.Y)},
$S:4}
A.rF.prototype={
$4(a,b,c,d){var s=this.a.a
return A.d([new A.al("goal-remove:"+s+":"+b+":"+c,b,c,"goal.remove",A.R(["id",s],t.N,t.X),d.H())],t.Y)},
$S:4}
A.rr.prototype={
$1(a){var s
t.k2.a(a)
if(a.d)s=B.bP.B(0,a.c)&&a.a!=="fromEvent"
else s=!0
return s},
$S:40}
A.rL.prototype={
$4(a,b,c,d){var s=this.a
return A.d([new A.al("life:"+s.a.b+":"+s.b+":"+b+":"+c,b,c,"life.set",s.J(),d.H())],t.Y)},
$S:4}
A.rK.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.Y)
for(s=A.d([this.a],t.V),B.a.a1(s,this.b),s=A.bK(s,0,t.u),r=J.T(s.a),q=s.b,s=new A.at(r,q,A.o(s).i("at<1>")),p=c,o=t.N,n=t.X;s.m();){m=s.c
m=m>=0?new A.t(q+m,r.gt()):A.j(A.aq())
l=m.b
k=l.a.b
j=l.b
i.push(new A.al("life:"+k+":"+j+":"+b+":"+p+":"+m.a,b,c,"life.set",A.R(["kind",k,"id",j,"fields",l.c],o,n),d.H()))}return i},
$S:4}
A.rG.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l=A.d([],t.Y),k=this.a,j=t.u,i=A.E(A.mg(a,k.b),j)
i.push(k)
k=A.bK(i,0,j)
j=J.T(k.a)
i=k.b
k=new A.at(j,i,A.o(k).i("at<1>"))
s=c
r=t.N
q=t.X
while(k.m()){p=k.c
p=p>=0?new A.t(i+p,j.gt()):A.j(A.aq())
o=p.b
n=o.a.b
m=o.b
l.push(new A.al("life-remove:"+n+":"+m+":"+b+":"+s+":"+p.a,b,c,"life.remove",A.R(["kind",n,"id",m],r,q),d.H()))}return l},
$S:4}
A.rH.prototype={
$4(a,b,c,d){var s=this.a,r=s.b
s=s.a.b
return A.d([new A.al("life-remove:"+s+":"+r+":"+b+":"+c,b,c,"life.remove",A.R(["kind",s,"id",r],t.N,t.X),d.H())],t.Y)},
$S:4}
A.rm.prototype={
$1(a){var s
t.Q.a(a)
s=a.d
return(s==="movement.categorise"||s==="movement.note")&&J.a1(a.e.h(0,"movementId"),this.a.a)},
$S:36}
A.rt.prototype={
$4(a,b,c,d){var s=this.b.a
return A.d([new A.al("rule-confirm:"+s,b,c,"rule.confirm",t.I.a(A.R(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.rI.prototype={
$4(a,b,c,d){var s=this.b.a
return A.d([new A.al("rule-remove:"+s,b,c,"rule.remove",t.I.a(A.R(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.eJ.prototype={
T(){return"AccountGroup."+this.b}}
A.wQ.prototype={
$1(a){A.b(a)
return a.length<=1?a:a[0]+B.c.aa(a,1).toLowerCase()},
$S:12}
A.hV.prototype={}
A.dA.prototype={}
A.t5.prototype={}
A.z0.prototype={
$1(a){var s,r,q=null,p=a.h(0,1)
p.toString
p=A.Z(p,q,q)
s=a.h(0,2)
s.toString
s=A.Z(s,q,q)
r=a.h(0,3)
r.toString
return A.d3(new A.K(p,s,A.Z(r,q,q)),this.a)},
$S:14}
A.vW.prototype={
$2(a,b){return A.P(a)+t.t5.a(b).e.length},
$S:228}
A.vX.prototype={
$2(a,b){var s=t.dw
s.a(a)
return B.d.l(s.a(b).c,a.c)},
$S:229}
A.dB.prototype={}
A.cm.prototype={}
A.t7.prototype={}
A.vY.prototype={
$1(a){return t.R.a(a).b===this.a},
$S:16}
A.vZ.prototype={
$2(a,b){var s=t.R
return B.c.l(s.a(a).c,s.a(b).c)},
$S:44}
A.w2.prototype={
$1(a){var s,r,q=this.a,p=A.D9(q,a),o=this.b.h(0,a.a)
if(o==null)o=0
s=A.d([],t.s)
r=a.w
if(r!=null)s.push(r===B.q?"Money out only":"Money in only")
r=a.r
if(r!=null)s.push("On "+r)
r=a.x
if(r!=null)s.push("For "+A.z_(q,r))
q=a.y
if(q!=null)s.push("Files into "+q)
return new A.dB(a,p,o,a.f,B.a.S(s,", "))},
$S:230}
A.w_.prototype={
$1(a){return!t.R.a(a).f},
$S:16}
A.w0.prototype={
$1(a){return t.R.a(a).f},
$S:16}
A.w1.prototype={
$2(a,b){var s=t.CU
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:231}
A.tg.prototype={}
A.ii.prototype={}
A.fY.prototype={}
A.em.prototype={}
A.fR.prototype={}
A.im.prototype={}
A.il.prototype={}
A.fZ.prototype={}
A.ix.prototype={}
A.w5.prototype={
$1(a){return A.aW(a,this.a)},
$S:18}
A.w6.prototype={
$2(a,b){var s,r,q,p,o,n,m
t.r9.a(b)
s=J.b4(b)
r=s.a9(b,this.a,new A.w7(),t.B)
q=A.d([],t.s)
for(p=s.ghv(b),o=p.$ti,p=new A.ar(p,p.gq(0),o.i("ar<ag.E>")),n=this.b,o=o.i("ag.E");p.m();){m=p.d
if(m==null)m=o.a(m)
q.push(m.a.a.gab(0)===0?"":n.$1(m))}p=this.c
return new A.fZ(a,q,n.$1(r),n.$1(A.a6(new A.Q(A.aR(B.Q.my(r.ghh()/s.gq(b))),0- -A.ky(p)),p)))},
$S:232}
A.w7.prototype={
$2(a,b){var s=t.B
return s.a(a).D(0,s.a(b))},
$S:28}
A.w8.prototype={
$1(a){return J.FP(t.r9.a(a),this.a,new A.w9(),t.B)},
$S:233}
A.w9.prototype={
$2(a,b){var s=t.B
return s.a(a).D(0,s.a(b))},
$S:28}
A.w3.prototype={
$2(a,b){var s=t.nF
s.a(a)
s.a(b)
if(a.a==null)s=1
else if(b.a==null)s=-1
else{s=this.a
s=s.$1(b.b).a.l(0,s.$1(a.b).a)}return s},
$S:234}
A.w4.prototype={
$1(a){var s,r=this.a
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=r.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return B.l[s]+" "+r.a},
$S:26}
A.dL.prototype={
T(){return"TxState."+this.b}}
A.dK.prototype={
T(){return"TxSort."+this.b}}
A.ci.prototype={
bQ(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=this,k=t.b0
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
return new A.ci(l.a,k,s,r,q,p,o,n,m)},
h4(a){var s=null
return this.bQ(s,s,s,a,s,s,s,s)},
lc(a){var s=null
return this.bQ(s,s,s,s,a,s,s,s)},
l8(a){var s=null
return this.bQ(s,a,s,s,s,s,s,s)},
ld(a){var s=null
return this.bQ(s,s,s,s,s,a,s,s)},
lf(a){var s=null
return this.bQ(s,s,s,s,s,s,s,a)},
la(a){var s=null
return this.bQ(s,s,a,s,s,s,s,s)},
l6(a){var s=null
return this.bQ(a,s,s,s,s,s,s,s)},
le(a){var s=null
return this.bQ(s,s,s,s,s,s,a,s)}}
A.li.prototype={}
A.ty.prototype={}
A.wd.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=a.w
s=b.w
r=A.f(q.a,q.b,q.c).l(0,A.f(s.a,s.b,s.c))
return r!==0?r:B.c.l(a.a,b.a)},
$S:6}
A.wc.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.f.a.l(0,b.f.a)
return s!==0?s:this.a.$2(b,a)},
$S:6}
A.we.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:6}
A.wf.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:6}
A.wb.prototype={
$1(a){var s=this.a.r.a.h(0,a)
return s==null?a:A.cE(s)},
$S:12}
A.wg.prototype={
$1(a){return A.aW(a,this.a)},
$S:18}
A.wh.prototype={
$1(a){var s=this.a.r.a.h(0,a)
A:{if(s!=null){s=A.cE(s)
break A}s=a
break A}return s},
$S:12};(function aliases(){var s=J.ea.prototype
s.ia=s.k
s=A.O.prototype
s.fb=s.aS
s=A.hx.prototype
s.i1=s.I
s=A.fW.prototype
s.e8=s.dO
s=A.jS.prototype
s.i2=s.e2
s=A.hH.prototype
s.i3=s.eD
s.i4=s.cE
s.i5=s.cI
s.i6=s.cJ
s.i7=s.cg
s.i8=s.e7
s.i9=s.di
s=A.ad.prototype
s.ib=s.j
s.ic=s.Y})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers._instance_1i,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_0u
s(J,"Iw","Gr",70)
r(J.dq.prototype,"ghY",1,1,null,["$2","$1"],["bZ","ao"],182,0,0)
q(A.e9.prototype,"gh9","lY",7)
p(A,"Jj","Hd",41)
p(A,"Jk","He",41)
p(A,"Jl","Hf",41)
o(A,"Dy","J2",0)
s(A,"JJ","GA",70)
n(A.cZ.prototype,"gl4","B",23)
p(A,"JS","Ie",60)
m(A,"JU",1,null,["$3$onError$radix","$1"],["Z",function(a){return A.Z(a,null,null)}],237,0)
o(A,"JT","Gb",238)
m(A,"Ky",2,null,["$1$2","$2"],["DY",function(a,b){return A.DY(a,b,t.n)}],54,0)
m(A,"Kx",2,null,["$1$2","$2"],["DX",function(a,b){return A.DX(a,b,t.n)}],54,0)
p(A,"Dt","Ku",7)
q(A.kf.prototype,"gkR","kS",36)
p(A,"L3","II",1)
s(A,"L4","IV",6)
p(A,"KW","Iq",62)
s(A,"L0","JO",160)
p(A,"ji","KH",1)
m(A,"KJ",2,null,["$4$body$headers","$2","$3$headers"],["hj",function(a,b){return A.hj(a,b,null,B.dv)},function(a,b,c){return A.hj(a,b,null,c)}],89,0)
l(A.kO.prototype,"gkp","kq",0)
p(A,"yu","GM",40)
var k
l(k=A.kP.prototype,"glW","cH",5)
l(k,"geY","bD",5)
l(k,"glQ","lR",11)
s(A,"Eb","KX",35)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a_,null)
q(A.a_,[A.A9,J.kn,A.is,J.eL,A.iK,A.h8,A.h,A.hE,A.bI,A.a3,A.aA,A.O,A.tc,A.ar,A.i8,A.S,A.eV,A.iA,A.iw,A.hT,A.iH,A.f4,A.at,A.aP,A.cj,A.bm,A.fN,A.fu,A.dR,A.cy,A.tz,A.oJ,A.hU,A.iY,A.ov,A.cq,A.a2,A.i4,A.e9,A.h9,A.fh,A.h1,A.m0,A.lw,A.m3,A.cw,A.lL,A.m2,A.iZ,A.lp,A.dV,A.bQ,A.lx,A.dQ,A.am,A.lq,A.lZ,A.j8,A.lQ,A.fk,A.iN,A.j3,A.m4,A.be,A.b6,A.tN,A.tM,A.bd,A.uf,A.uu,A.ex,A.aL,A.tO,A.a5,A.cb,A.lJ,A.kL,A.iy,A.tY,A.b7,A.km,A.an,A.bg,A.m1,A.bC,A.j5,A.k6,A.oI,A.lN,A.k4,A.jY,A.kx,A.ca,A.jZ,A.mW,A.mY,A.l6,A.ft,A.cn,A.nv,A.cR,A.ny,A.e6,A.fJ,A.kV,A.i2,A.cQ,A.iu,A.ek,A.fW,A.fa,A.kM,A.oL,A.mZ,A.jS,A.hI,A.n4,A.hK,A.cJ,A.de,A.aD,A.kY,A.tX,A.Q,A.cu,A.bo,A.c0,A.my,A.ce,A.h_,A.k0,A.lb,A.jO,A.rR,A.c7,A.cz,A.jy,A.h2,A.iq,A.eZ,A.cN,A.kZ,A.ki,A.l8,A.l9,A.mG,A.c8,A.db,A.fw,A.dp,A.bH,A.bv,A.kS,A.e5,A.k8,A.le,A.rW,A.mA,A.eX,A.jI,A.f6,A.eY,A.nw,A.h6,A.ta,A.nx,A.k7,A.mD,A.fK,A.fA,A.ec,A.l2,A.eb,A.js,A.oC,A.dx,A.X,A.jH,A.cX,A.da,A.oD,A.nj,A.cl,A.oK,A.cP,A.oy,A.oG,A.fM,A.h0,A.i7,A.fO,A.K,A.ng,A.jP,A.v,A.kf,A.al,A.mR,A.jG,A.mS,A.tl,A.i9,A.dv,A.rX,A.kW,A.rY,A.t8,A.dC,A.t9,A.dE,A.tv,A.lh,A.tw,A.kJ,A.nc,A.cM,A.e8,A.r,A.b1,A.os,A.f7,A.l_,A.rT,A.c9,A.dm,A.t1,A.ir,A.f1,A.oB,A.bw,A.h4,A.kE,A.ep,A.hW,A.cv,A.W,A.ba,A.cx,A.mB,A.l3,A.l4,A.td,A.ch,A.th,A.kK,A.cO,A.tk,A.dH,A.kI,A.cK,A.i_,A.to,A.hy,A.ts,A.hN,A.i3,A.ld,A.tt,A.iv,A.hC,A.bz,A.mK,A.dj,A.jF,A.kQ,A.it,A.f9,A.l0,A.tx,A.d5,A.la,A.e0,A.dz,A.mz,A.kh,A.kO,A.d8,A.dw,A.k9,A.mQ,A.kF,A.fC,A.cY,A.kz,A.hX,A.nq,A.k_,A.fB,A.fF,A.nr,A.ds,A.kj,A.fL,A.e4,A.kX,A.jv,A.oE,A.fS,A.fX,A.ka,A.kb,A.ri,A.kP,A.hV,A.dA,A.t5,A.dB,A.cm,A.t7,A.tg,A.fR,A.fZ,A.ix,A.ci,A.li,A.ty])
q(J.kn,[J.kp,J.fG,J.hZ,J.fH,J.fI,J.f_,J.dq])
q(J.hZ,[J.ea,J.u,A.ed,A.ic])
q(J.ea,[J.kR,J.es,J.dr])
r(J.ko,A.is)
r(J.ns,J.u)
q(J.f_,[J.hY,J.kq])
q(A.h,[A.et,A.U,A.cs,A.p,A.eU,A.ff,A.dD,A.iG,A.oH,A.dk,A.fj,A.lo,A.m_,A.d_])
q(A.et,[A.eO,A.j9])
r(A.iL,A.eO)
r(A.iJ,A.j9)
q(A.bI,[A.jL,A.mT,A.kk,A.jK,A.lf,A.xw,A.xy,A.tJ,A.tI,A.uy,A.u7,A.ua,A.uk,A.oz,A.ud,A.tQ,A.tS,A.n9,A.na,A.uo,A.z1,A.z2,A.tb,A.t_,A.rS,A.v2,A.xv,A.zu,A.zw,A.zx,A.zy,A.zG,A.wZ,A.x_,A.uN,A.uQ,A.xN,A.wk,A.wm,A.wo,A.wq,A.ws,A.uE,A.uF,A.uB,A.uC,A.uD,A.tn,A.tm,A.v7,A.v8,A.v9,A.wR,A.wH,A.wE,A.wF,A.wG,A.xB,A.uH,A.wL,A.zz,A.zA,A.v4,A.v5,A.v6,A.v3,A.uw,A.wB,A.vk,A.vl,A.o4,A.nS,A.o3,A.or,A.oq,A.o1,A.oc,A.ob,A.nA,A.nB,A.nM,A.o_,A.nY,A.nZ,A.nX,A.o5,A.o6,A.o7,A.o8,A.o9,A.oa,A.nz,A.nP,A.nQ,A.od,A.oe,A.of,A.oh,A.oi,A.oj,A.ok,A.ol,A.om,A.on,A.oo,A.og,A.nE,A.o0,A.nH,A.nI,A.nU,A.nC,A.nT,A.nV,A.nL,A.nK,A.nW,A.nO,A.nG,A.y9,A.yb,A.mV,A.yc,A.yd,A.xE,A.wt,A.xG,A.xH,A.xI,A.xK,A.xJ,A.xs,A.xt,A.yG,A.yy,A.yz,A.yC,A.yB,A.yv,A.yw,A.yE,A.xW,A.y_,A.uJ,A.xU,A.xV,A.x7,A.x6,A.x4,A.x5,A.xj,A.xd,A.xe,A.xf,A.xg,A.x8,A.yI,A.yJ,A.yL,A.yM,A.yQ,A.yH,A.yN,A.xk,A.xl,A.yo,A.yq,A.yr,A.ys,A.wz,A.wA,A.ou,A.uK,A.uL,A.uO,A.uP,A.va,A.yZ,A.yV,A.yX,A.yW,A.rU,A.vb,A.vc,A.vd,A.xo,A.xm,A.xn,A.yn,A.yl,A.y1,A.y3,A.ye,A.yg,A.yi,A.yj,A.yk,A.zt,A.zL,A.zK,A.zN,A.wi,A.za,A.z8,A.zb,A.zc,A.zd,A.xO,A.xQ,A.zg,A.zf,A.zl,A.zm,A.mC,A.zq,A.y8,A.z4,A.z5,A.mM,A.mP,A.mO,A.mN,A.ve,A.vf,A.vg,A.vh,A.mx,A.vq,A.vo,A.nn,A.no,A.np,A.nl,A.nm,A.uX,A.uY,A.wx,A.uA,A.xu,A.xD,A.r8,A.r9,A.ra,A.rb,A.oV,A.qZ,A.rc,A.rd,A.pz,A.pK,A.pL,A.oW,A.pH,A.qV,A.qW,A.qX,A.qR,A.qU,A.qT,A.qP,A.qO,A.qY,A.qF,A.qu,A.qg,A.ql,A.qm,A.qn,A.qe,A.qo,A.qd,A.qp,A.qq,A.qr,A.qs,A.pw,A.px,A.pk,A.pl,A.po,A.pp,A.pq,A.pt,A.pu,A.pv,A.pm,A.q9,A.pO,A.pf,A.pd,A.pC,A.qN,A.qI,A.qM,A.pT,A.oO,A.oN,A.q3,A.q4,A.q5,A.r6,A.r1,A.r3,A.pa,A.p9,A.p5,A.p7,A.p8,A.qD,A.qy,A.qA,A.qB,A.q7,A.pN,A.vt,A.vu,A.vw,A.vx,A.vv,A.vC,A.vB,A.vK,A.vI,A.vH,A.vF,A.vD,A.v_,A.vQ,A.vR,A.vN,A.vM,A.y0,A.vU,A.vV,A.vS,A.vT,A.zC,A.rD,A.ry,A.rB,A.rx,A.rn,A.rw,A.rv,A.ru,A.rq,A.ro,A.rQ,A.rl,A.rN,A.rO,A.rJ,A.rs,A.rM,A.rP,A.rp,A.rF,A.rr,A.rL,A.rK,A.rG,A.rH,A.rm,A.rt,A.rI,A.wQ,A.z0,A.vY,A.w2,A.w_,A.w0,A.w5,A.w8,A.w4,A.wb,A.wg,A.wh])
q(A.jL,[A.tU,A.mU,A.nu,A.xx,A.uz,A.v1,A.u8,A.ub,A.ow,A.oA,A.ug,A.tP,A.ur,A.tE,A.tD,A.uq,A.up,A.n2,A.zn,A.zv,A.zI,A.wl,A.wn,A.wp,A.wr,A.uZ,A.mX,A.wW,A.xA,A.wy,A.wS,A.wJ,A.wK,A.xC,A.o2,A.nR,A.op,A.ya,A.uT,A.z7,A.wu,A.xF,A.yx,A.yF,A.zs,A.xX,A.xZ,A.xY,A.xR,A.xS,A.xT,A.y5,A.y7,A.y6,A.x0,A.x2,A.x3,A.x9,A.xb,A.xh,A.xi,A.zj,A.zk,A.yK,A.yO,A.yP,A.yp,A.ot,A.yT,A.yU,A.rV,A.wC,A.wD,A.wT,A.wU,A.wV,A.t4,A.t2,A.t3,A.ym,A.wX,A.y2,A.tF,A.tG,A.yf,A.yh,A.zM,A.zE,A.zF,A.ze,A.xP,A.ti,A.zp,A.zr,A.tq,A.tp,A.tr,A.z6,A.mL,A.vn,A.xr,A.mw,A.vp,A.wa,A.uW,A.vm,A.pI,A.qS,A.qh,A.qi,A.qt,A.pe,A.pB,A.qH,A.pX,A.pS,A.q0,A.q1,A.r2,A.p6,A.qz,A.vr,A.vs,A.vy,A.vJ,A.vL,A.vE,A.vO,A.rE,A.rC,A.rA,A.vW,A.vX,A.vZ,A.w1,A.w6,A.w7,A.w9,A.w3,A.wd,A.wc,A.we,A.wf])
r(A.d9,A.iJ)
q(A.a3,[A.eQ,A.cp,A.lO,A.ad])
q(A.aA,[A.f2,A.dM,A.kr,A.lk,A.l1,A.lK,A.i0,A.jt,A.c5,A.iE,A.lj,A.dF,A.jN])
q(A.O,[A.h3,A.bp])
r(A.jM,A.h3)
q(A.U,[A.ag,A.hS,A.az,A.L,A.aa,A.iM])
q(A.ag,[A.fd,A.ak,A.aZ,A.lP])
r(A.hQ,A.cs)
r(A.hR,A.ff)
r(A.fD,A.dD)
r(A.eT,A.dk)
q(A.bm,[A.dS,A.fm,A.dT])
q(A.dS,[A.t,A.dU,A.iS,A.ha])
q(A.fm,[A.bx,A.iT])
q(A.dT,[A.ev,A.iU,A.iV,A.iW])
r(A.hd,A.fN)
r(A.dP,A.hd)
r(A.hF,A.dP)
q(A.fu,[A.aY,A.cc])
q(A.cy,[A.fv,A.iX,A.j4,A.iB])
q(A.fv,[A.cH,A.dh])
r(A.eW,A.kk)
r(A.ij,A.dM)
q(A.lf,[A.lc,A.fs])
r(A.f0,A.cp)
r(A.fP,A.ed)
q(A.ic,[A.ia,A.bt])
q(A.bt,[A.iO,A.iQ])
r(A.iP,A.iO)
r(A.ee,A.iP)
r(A.iR,A.iQ)
r(A.bX,A.iR)
q(A.ee,[A.kA,A.kB])
q(A.bX,[A.kC,A.ib,A.kD,A.id,A.ie,A.ig,A.f3])
r(A.hc,A.lK)
q(A.jK,[A.tK,A.tL,A.um,A.ul,A.nh,A.tZ,A.u3,A.u2,A.u0,A.u_,A.u6,A.u5,A.u4,A.u9,A.uj,A.uV,A.ut,A.us,A.tT,A.n7,A.uh,A.n1,A.nf,A.n6,A.n5,A.nb,A.zH,A.wI,A.nF,A.nD,A.nJ,A.yA,A.yD,A.y4,A.x1,A.xa,A.xc,A.yY,A.zD,A.z9,A.zh,A.zo,A.z3,A.oP,A.re,A.rf,A.rg,A.rh,A.py,A.oQ,A.oR,A.oS,A.oT,A.oU,A.pJ,A.pG,A.qQ,A.qf,A.qb,A.qa,A.qc,A.qj,A.qk,A.pj,A.pi,A.pr,A.ps,A.ph,A.pn,A.pg,A.q8,A.pP,A.pc,A.pD,A.pE,A.pF,A.pA,A.qJ,A.qK,A.qL,A.qG,A.pY,A.pU,A.pV,A.pR,A.pW,A.pQ,A.oM,A.q2,A.q_,A.pZ,A.r7,A.r4,A.r0,A.r5,A.r_,A.pb,A.p1,A.p0,A.p2,A.p_,A.p3,A.oZ,A.p4,A.oY,A.oX,A.qE,A.qx,A.qw,A.qC,A.qv,A.q6,A.pM,A.nd,A.vz,A.vA,A.vG,A.v0,A.vP,A.zB,A.rk,A.rj,A.rz])
r(A.cC,A.lx)
r(A.lT,A.j8)
r(A.cZ,A.iX)
r(A.iD,A.j4)
q(A.be,[A.fr,A.k3,A.ks])
q(A.b6,[A.hz,A.jw,A.kv,A.ku,A.ln,A.iF,A.fE])
r(A.kt,A.i0)
r(A.ue,A.uf)
r(A.lm,A.k3)
q(A.c5,[A.fT,A.kg])
q(A.bd,[A.kc,A.kd,A.cr])
q(A.fE,[A.lU,A.lX])
q(A.kc,[A.lW,A.lY])
r(A.lV,A.lW)
r(A.l5,A.lY)
r(A.eK,A.mW)
q(A.eK,[A.jz,A.ly])
r(A.hH,A.mY)
r(A.mH,A.hH)
r(A.hP,A.l6)
q(A.hP,[A.jA,A.jT])
q(A.cn,[A.el,A.cV,A.hB,A.te,A.tf])
q(A.el,[A.lu,A.lF])
r(A.jD,A.lu)
q(A.cV,[A.lv,A.lG])
r(A.jE,A.lv)
q(A.nv,[A.ke,A.hx])
q(A.ke,[A.mI,A.n3])
q(A.cR,[A.e7,A.lB])
q(A.e7,[A.jB,A.lD])
r(A.tH,A.ny)
q(A.tH,[A.mJ,A.lI])
q(A.kd,[A.lM,A.eS])
r(A.i1,A.fJ)
q(A.cr,[A.m6,A.m5])
r(A.lR,A.m6)
r(A.bl,A.fW)
r(A.cW,A.i1)
r(A.bB,A.kV)
q(A.eS,[A.kN,A.lt,A.lE])
r(A.jQ,A.ly)
r(A.jV,A.lB)
r(A.hG,A.hx)
q(A.lJ,[A.fx,A.hb,A.c4,A.d6,A.eo,A.eq,A.fb,A.dG,A.df,A.c6,A.e2,A.er,A.e3,A.bR,A.dn,A.eh,A.ei,A.di,A.d7,A.cI,A.co,A.dl,A.fU,A.bf,A.bS,A.cL,A.io,A.bq,A.cd,A.du,A.fc,A.cS,A.bN,A.bJ,A.bA,A.cT,A.aG,A.a9,A.eg,A.cg,A.h5,A.cB,A.aK,A.c_,A.fe,A.dI,A.cf,A.ej,A.bb,A.ef,A.eJ,A.dL,A.dK])
r(A.n_,A.jS)
r(A.lz,A.hB)
r(A.lA,A.lz)
r(A.eR,A.lA)
r(A.jx,A.lt)
r(A.hJ,A.lD)
r(A.lC,A.m5)
r(A.hL,A.lF)
r(A.lH,A.lG)
r(A.jW,A.lH)
r(A.hM,A.lI)
q(A.mD,[A.D,A.ne,A.br,A.t0])
r(A.lS,A.ad)
q(A.oG,[A.hO,A.jJ,A.kH,A.kG,A.k1])
q(A.cx,[A.fQ,A.ik,A.fV])
q(A.tg,[A.ii,A.fY,A.em])
q(A.fR,[A.im,A.il])
s(A.h3,A.cj)
s(A.j9,A.O)
s(A.iO,A.O)
s(A.iP,A.aP)
s(A.iQ,A.O)
s(A.iR,A.aP)
s(A.hd,A.j3)
s(A.j4,A.m4)
s(A.lu,A.ft)
s(A.lv,A.ft)
s(A.m6,A.cJ)
s(A.ly,A.mZ)
s(A.lB,A.hK)
s(A.lz,A.hI)
s(A.lA,A.hK)
s(A.lt,A.cJ)
s(A.lD,A.hK)
s(A.m5,A.cJ)
s(A.lF,A.hI)
s(A.lG,A.hI)
s(A.lH,A.oL)
s(A.lI,A.n4)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",V:"double",bE:"num",e:"String",l:"bool",bg:"Null",z:"List",a_:"Object",ac:"Map",a8:"JSObject"},mangledNames:{},types:["~()","l(X)","l(bo)","~(e)","z<al>(fK,e,c,a5)","b8<~>()","c(X,X)","l(e)","l(c0)","~(a8)","c(bo,bo)","b8<e?>()","e(e)","bg(a8)","e(ct)","z<X>()","l(ba)","e(X)","e(v)","e()","l(cz)","c(b1,b1)","bg()","l(a_?)","c(c0,c0)","c(c,c9)","e(c)","c(c,dm)","v(v,v)","e(e?)","c(c)","l(b1)","l(eY)","l(a9)","l(W)","c(e,e)","l(al)","c(W,W)","c(+(K,K),+(K,K))","l(cN)","l(r)","~(~())","~(@)","l(bw)","c(ba,ba)","v(bz)","V(c)","c(bH,bH)","c(c,c)","~(b8<e?>())","c(cl,cl)","l(cP)","e?(e)","c(e?)","0^(0^,0^)<bE>","l(eX)","c(z<X>,K)","v(X)","v?(e)","K?(e)","@(@)","l(e5)","l(e?)","z<bv>(z<bv>)","c(K,K)","bg(a_,en)","v(v,bw)","l(bv)","c()","l(z<e>)","c(@,@)","c(+(c,X),+(c,X))","c(c,c8)","bg(@)","0&()","e(V)","l(cM)","~(l)","~(a_?,a_?)","@()","l(bq)","e?()","ci(K?)","K?()","l(cX)","@(e)","l(bH)","v(v,X)","ds()","b8<fS>(e,tC{body:dO?,headers:ac<e,e>})","~(e,@)","c(ch,ch)","z<e>()","l(c7)","Q()","c?(e)","l(v)","l(bR)","hA(cu)","c(+month,year(c,c))","+month,year(c,c)(c)","c(+month,year(c,c),+month,year(c,c))","l(K,K)","~(@,@)","c(dv,dv)","c(db,db)","z<c>()","c(+(c,c,bN),+(c,c,bN))","l(+(X,X,bN))","c(dC,dC)","c(dE,dE)","l(X,X)","l(c8)","c(cN,cN)","l(+(e,e))","l(an<e,e>)","e(an<e,e>)","bg(@,en)","l(e,z<X>)","~(e,z<X>)","c(an<e,c>,an<e,c>)","c(cM,cM)","l(cg)","c(c9,c9)","c(dp,dp)","~(c,@)","ac<e,e>(ac<e,e>,e)","e(K)","c(b1)","v(bq)","v(bq?)","0&(e,c?)","bg(~())","h4(e)","c(bw,bw)","l(df)","~(e,e?)","al(e,e,ac<e,a_?>)","~(W)","W()","cx(X)","cx()","e(ba)","z<c>(bl)","c(e)","e?(e,e)","e(c,e)","h<X>(e,K,K)","c(+(c,e),+(c,e))","+(c,c,l,ac<e?,v>)()","l(+(c,c,l,ac<e?,v>))","l(+complete,month,spent,year(l,c,v,c))","v(v,+complete,month,spent,year(l,c,v,c))","v(v,bz)","@(@,e)","l(bz)","c(bz,bz)","c(dj,dj)","bH?(a_?)","l(cf)","c(cv,cv)","l(d5)","d5(bo)","a8(a8)","l(dH)","~(e,a_)","l(cO)","l(V)","l(ep)","V(V)","~(e,e)","l(bb)","~(lg)","l(h2)","ec()","l(f6)","a8(e,e,e{placeholder:e?})","a8(e,z<+(e,e)>,e)","c(c,z<c>)","l(a8)","l(ce)","~(ci)","l(f5[c])","~(e,ci(K?))","l(f1)","l(l)","l(an<e,cO>)","a8(e,e{placeholder:e,wide:l})","e(a8)","ix()","hX()","e(e,e,V)","e(e,V)","c(a9,a9)","e(r)","~(b8<e?>(),e)","c(c,cm)","l(dB)","l(@)","a8(e,e{placeholder:e?})","c(+(e,c_),+(e,c_))","de()","l(+(K,K))","a8(e{placeholder:e,value:e})","K?(K)","c(d8,d8)","c(dw,dw)","cY(bw)","V(v)","fB()","fF()","e(e?,e)","e(b1,r)","e(K?)","c(e8,e8)","c(da,da)","c(bo)","fL()","eb(e)","l(dz)","z<e0>(dz)","c(c7,c7)","fC()","a5(al)","a5(a5,a5)","l(c)","ce()","c(ce,ce)","c(c,cv)","c(dA,dA)","dB(ba)","c(cm,cm)","fZ(e,z<v>)","v(z<v>)","c(an<e?,z<v>>,an<e?,z<v>>)","dO()","l(cl)","c(e{onError:c(e)?,radix:c?})","a5()","kl()","l(f9)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.t&&a.b(c.a)&&b.b(c.b),"2;days,months":(a,b)=>c=>c instanceof A.dU&&a.b(c.a)&&b.b(c.b),"2;end,loans":(a,b)=>c=>c instanceof A.iS&&a.b(c.a)&&b.b(c.b),"2;month,year":(a,b)=>c=>c instanceof A.ha&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bx&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;accountId,from,to":(a,b,c)=>d=>d instanceof A.iT&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.ev&&A.yR(a,b.a),"4;complete,month,spent,year":a=>b=>b instanceof A.iU&&A.yR(a,b.a),"5;date,eventId,hash,n,removed":a=>b=>b instanceof A.iV&&A.yR(a,b.a),"8;instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type":a=>b=>b instanceof A.iW&&A.yR(a,b.a)}}
A.HM(v.typeUniverse,JSON.parse('{"dr":"ea","kR":"ea","es":"ea","LP":"ed","kp":{"l":[],"aw":[]},"fG":{"bg":[],"aw":[]},"hZ":{"a8":[]},"ea":{"a8":[]},"u":{"z":["1"],"U":["1"],"a8":[],"h":["1"],"bs":["1"]},"ko":{"is":[]},"ns":{"u":["1"],"z":["1"],"U":["1"],"a8":[],"h":["1"],"bs":["1"]},"eL":{"aj":["1"]},"f_":{"V":[],"bE":[],"aS":["bE"]},"hY":{"V":[],"c":[],"bE":[],"aS":["bE"],"aw":[]},"kq":{"V":[],"bE":[],"aS":["bE"],"aw":[]},"dq":{"e":[],"aS":["e"],"f5":[],"bs":["@"],"aw":[]},"iK":{"zX":[]},"h8":{"zX":[]},"et":{"h":["2"]},"hE":{"aj":["2"]},"eO":{"et":["1","2"],"h":["2"],"h.E":"2"},"iL":{"eO":["1","2"],"et":["1","2"],"U":["2"],"h":["2"],"h.E":"2"},"iJ":{"O":["2"],"z":["2"],"et":["1","2"],"U":["2"],"h":["2"]},"d9":{"iJ":["1","2"],"O":["2"],"z":["2"],"et":["1","2"],"U":["2"],"h":["2"],"O.E":"2","h.E":"2"},"eQ":{"a3":["3","4"],"ac":["3","4"],"a3.K":"3","a3.V":"4"},"f2":{"aA":[]},"jM":{"O":["c"],"cj":["c"],"z":["c"],"U":["c"],"h":["c"],"O.E":"c","cj.E":"c"},"U":{"h":["1"]},"ag":{"U":["1"],"h":["1"]},"fd":{"ag":["1"],"U":["1"],"h":["1"],"h.E":"1","ag.E":"1"},"ar":{"aj":["1"]},"cs":{"h":["2"],"h.E":"2"},"hQ":{"cs":["1","2"],"U":["2"],"h":["2"],"h.E":"2"},"i8":{"aj":["2"]},"ak":{"ag":["2"],"U":["2"],"h":["2"],"h.E":"2","ag.E":"2"},"p":{"h":["1"],"h.E":"1"},"S":{"aj":["1"]},"eU":{"h":["2"],"h.E":"2"},"eV":{"aj":["2"]},"ff":{"h":["1"],"h.E":"1"},"hR":{"ff":["1"],"U":["1"],"h":["1"],"h.E":"1"},"iA":{"aj":["1"]},"dD":{"h":["1"],"h.E":"1"},"fD":{"dD":["1"],"U":["1"],"h":["1"],"h.E":"1"},"iw":{"aj":["1"]},"hS":{"U":["1"],"h":["1"],"h.E":"1"},"hT":{"aj":["1"]},"iG":{"h":["1"],"h.E":"1"},"iH":{"aj":["1"]},"oH":{"h":["1"],"h.E":"1"},"f4":{"aj":["1"]},"dk":{"h":["+(c,1)"],"h.E":"+(c,1)"},"eT":{"dk":["1"],"U":["+(c,1)"],"h":["+(c,1)"],"h.E":"+(c,1)"},"at":{"aj":["+(c,1)"]},"h3":{"O":["1"],"cj":["1"],"z":["1"],"U":["1"],"h":["1"]},"aZ":{"ag":["1"],"U":["1"],"h":["1"],"h.E":"1","ag.E":"1"},"t":{"dS":[],"bm":[]},"dU":{"dS":[],"bm":[]},"iS":{"dS":[],"bm":[]},"ha":{"dS":[],"bm":[]},"bx":{"fm":[],"bm":[]},"iT":{"fm":[],"bm":[]},"ev":{"dT":[],"bm":[]},"iU":{"dT":[],"bm":[]},"iV":{"dT":[],"bm":[]},"iW":{"dT":[],"bm":[]},"hF":{"dP":["1","2"],"hd":["1","2"],"fN":["1","2"],"j3":["1","2"],"ac":["1","2"]},"fu":{"ac":["1","2"]},"aY":{"fu":["1","2"],"ac":["1","2"]},"fj":{"h":["1"],"h.E":"1"},"dR":{"aj":["1"]},"cc":{"fu":["1","2"],"ac":["1","2"]},"fv":{"cy":["1"],"cU":["1"],"U":["1"],"h":["1"]},"cH":{"fv":["1"],"cy":["1"],"cU":["1"],"U":["1"],"h":["1"]},"dh":{"fv":["1"],"cy":["1"],"cU":["1"],"U":["1"],"h":["1"]},"kk":{"bI":[],"dg":[]},"eW":{"bI":[],"dg":[]},"ij":{"dM":[],"aA":[]},"kr":{"aA":[]},"lk":{"aA":[]},"iY":{"en":[]},"bI":{"dg":[]},"jK":{"bI":[],"dg":[]},"jL":{"bI":[],"dg":[]},"lf":{"bI":[],"dg":[]},"lc":{"bI":[],"dg":[]},"fs":{"bI":[],"dg":[]},"l1":{"aA":[]},"cp":{"a3":["1","2"],"Ac":["1","2"],"ac":["1","2"],"a3.K":"1","a3.V":"2"},"az":{"U":["1"],"h":["1"],"h.E":"1"},"cq":{"aj":["1"]},"L":{"U":["1"],"h":["1"],"h.E":"1"},"a2":{"aj":["1"]},"aa":{"U":["an<1,2>"],"h":["an<1,2>"],"h.E":"an<1,2>"},"i4":{"aj":["an<1,2>"]},"f0":{"cp":["1","2"],"a3":["1","2"],"Ac":["1","2"],"ac":["1","2"],"a3.K":"1","a3.V":"2"},"dS":{"bm":[]},"fm":{"bm":[]},"dT":{"bm":[]},"e9":{"rZ":[],"f5":[]},"h9":{"ip":[],"ct":[]},"lo":{"h":["ip"],"h.E":"ip"},"fh":{"aj":["ip"]},"h1":{"ct":[]},"m_":{"h":["ct"],"h.E":"ct"},"m0":{"aj":["ct"]},"fP":{"ed":[],"a8":[],"hD":[],"aw":[]},"ed":{"a8":[],"hD":[],"aw":[]},"ic":{"a8":[]},"m3":{"hD":[]},"ia":{"By":[],"a8":[],"aw":[]},"bt":{"bW":["1"],"a8":[],"bs":["1"]},"ee":{"O":["V"],"bt":["V"],"z":["V"],"bW":["V"],"U":["V"],"a8":[],"bs":["V"],"h":["V"],"aP":["V"]},"bX":{"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"]},"kA":{"ee":[],"O":["V"],"bt":["V"],"z":["V"],"bW":["V"],"U":["V"],"a8":[],"bs":["V"],"h":["V"],"aP":["V"],"aw":[],"O.E":"V","aP.E":"V"},"kB":{"ee":[],"O":["V"],"bt":["V"],"z":["V"],"bW":["V"],"U":["V"],"a8":[],"bs":["V"],"h":["V"],"aP":["V"],"aw":[],"O.E":"V","aP.E":"V"},"kC":{"bX":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"ib":{"bX":[],"kl":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"kD":{"bX":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"id":{"bX":[],"Ap":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"ie":{"bX":[],"tB":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"ig":{"bX":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"f3":{"bX":[],"dO":[],"O":["c"],"bt":["c"],"z":["c"],"bW":["c"],"U":["c"],"a8":[],"bs":["c"],"h":["c"],"aP":["c"],"aw":[],"O.E":"c","aP.E":"c"},"lK":{"aA":[]},"hc":{"dM":[],"aA":[]},"iZ":{"lg":[]},"dV":{"aj":["1"]},"d_":{"h":["1"],"h.E":"1"},"bQ":{"aA":[]},"cC":{"lx":["1"]},"am":{"b8":["1"]},"j8":{"Cx":[]},"lT":{"j8":[],"Cx":[]},"cZ":{"cy":["1"],"C1":["1"],"cU":["1"],"U":["1"],"h":["1"]},"fk":{"aj":["1"]},"O":{"z":["1"],"U":["1"],"h":["1"]},"a3":{"ac":["1","2"]},"iM":{"U":["2"],"h":["2"],"h.E":"2"},"iN":{"aj":["2"]},"fN":{"ac":["1","2"]},"dP":{"hd":["1","2"],"fN":["1","2"],"j3":["1","2"],"ac":["1","2"]},"cy":{"cU":["1"],"U":["1"],"h":["1"]},"iX":{"cy":["1"],"cU":["1"],"U":["1"],"h":["1"]},"iD":{"cy":["1"],"m4":["1"],"cU":["1"],"U":["1"],"h":["1"]},"lO":{"a3":["e","@"],"ac":["e","@"],"a3.K":"e","a3.V":"@"},"lP":{"ag":["e"],"U":["e"],"h":["e"],"h.E":"e","ag.E":"e"},"fr":{"be":["z<c>","e"],"be.S":"z<c>"},"hz":{"b6":["z<c>","e"],"b6.T":"e"},"jw":{"b6":["e","z<c>"],"b6.T":"z<c>"},"bd":{"b3":["z<c>"]},"k3":{"be":["e","z<c>"]},"i0":{"aA":[]},"kt":{"aA":[]},"ks":{"be":["a_?","e"],"be.S":"a_?"},"kv":{"b6":["a_?","e"],"b6.T":"e"},"ku":{"b6":["e","a_?"],"b6.T":"a_?"},"lm":{"be":["e","z<c>"],"be.S":"e"},"ln":{"b6":["e","z<c>"],"b6.T":"z<c>"},"iF":{"b6":["z<c>","e"],"b6.T":"e"},"hA":{"aS":["hA"]},"a5":{"aS":["a5"]},"V":{"bE":[],"aS":["bE"]},"cb":{"aS":["cb"]},"c":{"bE":[],"aS":["bE"]},"z":{"U":["1"],"h":["1"]},"bE":{"aS":["bE"]},"rZ":{"f5":[]},"ip":{"ct":[]},"cU":{"U":["1"],"h":["1"]},"e":{"aS":["e"],"f5":[]},"aL":{"hA":[],"aS":["hA"]},"lJ":{"a0":[]},"jt":{"aA":[]},"dM":{"aA":[]},"c5":{"aA":[]},"fT":{"aA":[]},"kg":{"aA":[]},"iE":{"aA":[]},"lj":{"aA":[]},"dF":{"aA":[]},"jN":{"aA":[]},"kL":{"aA":[]},"iy":{"aA":[]},"km":{"aA":[]},"m1":{"en":[]},"bC":{"H3":[]},"j5":{"tC":[]},"lN":{"GQ":[]},"Gn":{"z":["c"],"U":["c"],"h":["c"]},"dO":{"z":["c"],"U":["c"],"h":["c"]},"H8":{"z":["c"],"U":["c"],"h":["c"]},"Gm":{"z":["c"],"U":["c"],"h":["c"]},"Ap":{"z":["c"],"U":["c"],"h":["c"]},"kl":{"z":["c"],"U":["c"],"h":["c"]},"tB":{"z":["c"],"U":["c"],"h":["c"]},"Gh":{"z":["V"],"U":["V"],"h":["V"]},"Gi":{"z":["V"],"U":["V"],"h":["V"]},"jZ":{"b3":["ca"]},"fE":{"b6":["z<c>","ca"]},"kc":{"bd":[],"b3":["z<c>"]},"lU":{"fE":[],"b6":["z<c>","ca"],"b6.T":"ca"},"lW":{"bd":[],"b3":["z<c>"]},"lV":{"bd":[],"b3":["z<c>"]},"lX":{"fE":[],"b6":["z<c>","ca"],"b6.T":"ca"},"lY":{"bd":[],"b3":["z<c>"]},"l5":{"bd":[],"b3":["z<c>"]},"jz":{"eK":[]},"jA":{"hP":[]},"jD":{"ft":[],"cn":[]},"jE":{"cV":[],"ft":[],"cn":[]},"jB":{"e7":[],"cR":[]},"hB":{"cn":[],"cR":[]},"e7":{"cR":[]},"el":{"cn":[]},"cV":{"cn":[]},"kd":{"bd":[],"b3":["z<c>"]},"lM":{"bd":[],"b3":["z<c>"]},"i1":{"fJ":[]},"cr":{"bd":[],"b3":["z<c>"]},"lR":{"cJ":[],"cr":[],"bd":[],"b3":["z<c>"]},"bl":{"fW":[]},"bp":{"O":["c"],"z":["c"],"U":["c"],"h":["c"],"O.E":"c"},"Al":{"fJ":[]},"cW":{"i1":[],"Al":[],"fJ":[]},"bB":{"kV":[],"aS":["bB"]},"kM":{"b3":["ca"]},"kN":{"eS":[],"bd":[],"b3":["z<c>"]},"jQ":{"eK":[]},"jV":{"cR":[]},"fx":{"a0":[]},"eR":{"cn":[],"cR":[]},"jx":{"eS":[],"cJ":[],"cr":[],"bd":[],"b3":["z<c>"]},"eS":{"bd":[],"b3":["z<c>"]},"cJ":{"cr":[],"bd":[],"b3":["z<c>"]},"jT":{"hP":[]},"hJ":{"e7":[],"cR":[]},"lC":{"cJ":[],"cr":[],"bd":[],"b3":["z<c>"]},"hL":{"cn":[]},"lE":{"eS":[],"bd":[],"b3":["z<c>"]},"jW":{"cV":[],"cn":[]},"Q":{"aS":["Q"]},"hb":{"a0":[]},"cu":{"aS":["cu"]},"c4":{"a0":[]},"d6":{"a0":[]},"eo":{"a0":[]},"eq":{"a0":[]},"fb":{"a0":[]},"dG":{"a0":[]},"df":{"a0":[]},"c6":{"a0":[]},"e2":{"a0":[]},"er":{"a0":[]},"e3":{"a0":[]},"bR":{"a0":[]},"dn":{"a0":[]},"eh":{"a0":[]},"ei":{"a0":[]},"di":{"a0":[]},"d7":{"a0":[]},"cI":{"a0":[]},"co":{"a0":[]},"dl":{"a0":[]},"lS":{"ad":["e","X"],"a3":["e","X"],"ac":["e","X"],"a3.K":"e","a3.V":"X","ad.K":"e","ad.V":"X"},"fU":{"a0":[]},"bf":{"a0":[]},"bS":{"a0":[]},"cL":{"a0":[]},"io":{"a0":[]},"bq":{"a0":[]},"ad":{"a3":["1","2"],"ac":["1","2"],"a3.K":"1","a3.V":"2","ad.K":"1","ad.V":"2"},"iB":{"cy":["1"],"cU":["1"],"U":["1"],"h":["1"]},"cd":{"a0":[]},"du":{"a0":[]},"fc":{"a0":[]},"cS":{"a0":[]},"K":{"aS":["K"]},"bN":{"a0":[]},"bJ":{"a0":[]},"bA":{"a0":[]},"cT":{"a0":[]},"aG":{"a0":[]},"a9":{"a0":[]},"eg":{"a0":[]},"cg":{"a0":[]},"h5":{"a0":[]},"cB":{"a0":[]},"aK":{"a0":[]},"fQ":{"cx":[]},"ik":{"cx":[]},"fV":{"cx":[]},"c_":{"a0":[]},"fe":{"a0":[]},"dI":{"a0":[]},"cf":{"a0":[]},"ej":{"a0":[]},"kh":{"G0":[]},"bb":{"a0":[]},"fC":{"H6":[]},"ef":{"a0":[]},"eJ":{"a0":[]},"im":{"fR":[]},"il":{"fR":[]},"dL":{"a0":[]},"dK":{"a0":[]}}'))
A.HL(v.typeUniverse,JSON.parse('{"h3":1,"j9":2,"bt":1,"iX":1,"j4":1,"l6":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",z:"Nothing to change: it is already as asked.",F:"Sent. The phone adds the loan on its next sync.",L:"Sent. The phone applies it on its next sync.",m:"Sent. The phone removes it on its next sync.",p:"This browser cannot keep the page joined.",V:"newKeyPairFromSeed() is unsupported by this algorithm",y:"one of them is already filed, paired or linked",M:"only the last 4 characters of a number are kept",s:"the expense is filed under a spending category of "}
var t=(function rtii(){var s=A.Y
return{b:s("bo"),jN:s("c4"),C5:s("d5"),vi:s("d6"),dd:s("d7"),w:s("bQ"),D:s("fr"),d6:s("e2"),e4:s("e3"),Cv:s("jy"),ta:s("bz"),la:s("hC"),kc:s("d8"),l2:s("hD"),c:s("K"),ok:s("c7"),eY:s("cl"),G:s("bH"),zC:s("da"),xr:s("jI"),nl:s("db"),gM:s("c8"),hO:s("aS<@>"),ca:s("jO"),hD:s("aY<e,e>"),hq:s("aY<e,c>"),d:s("cH<e>"),w0:s("cI"),eV:s("c9"),kk:s("cJ"),zG:s("a5"),k5:s("Q"),rU:s("hN"),g7:s("cL"),CU:s("cm"),lA:s("fA"),il:s("bJ"),l9:s("cM"),eP:s("cb"),he:s("U<@>"),r:s("cN"),yt:s("aA"),eG:s("df"),xH:s("hV"),pp:s("k7"),BO:s("dg"),uo:s("b8<e?>"),AI:s("b8<e?>()"),U:s("b8<~>()"),ip:s("cc<c4,e>"),rv:s("e5"),jf:s("di"),AK:s("dj"),yO:s("e6"),aB:s("ki"),nq:s("bR"),wR:s("eW<V>"),hS:s("ce"),q:s("eX"),ud:s("e8"),lj:s("dl"),x:s("eY"),gy:s("co"),eX:s("eZ"),mp:s("dm"),qn:s("dp"),oJ:s("h<V>"),tY:s("h<@>"),uI:s("h<c>"),k:s("u<bo>"),eF:s("u<e0>"),kd:s("u<d5>"),Dy:s("u<js>"),nK:s("u<jv>"),lt:s("u<jF>"),cs:s("u<bz>"),gI:s("u<d8>"),xQ:s("u<K>"),eR:s("u<c7>"),nt:s("u<jG>"),sA:s("u<cl>"),Dz:s("u<da>"),h5:s("u<db>"),Aq:s("u<c8>"),au:s("u<c9>"),xI:s("u<fw>"),yk:s("u<cm>"),xz:s("u<fA>"),CP:s("u<k_>"),eO:s("u<fB>"),jL:s("u<e4>"),kW:s("u<hV>"),zA:s("u<k8>"),Fq:s("u<dj>"),jw:s("u<k9>"),DA:s("u<kj>"),ew:s("u<eY>"),t7:s("u<dm>"),aW:s("u<dp>"),p9:s("u<fF>"),sL:s("u<a8>"),aV:s("u<f1>"),e:s("u<r>"),nB:s("u<a9>"),V:s("u<b1>"),AM:s("u<ds>"),tZ:s("u<z<e>>"),uw:s("u<z<c>>"),iF:s("u<cP>"),q0:s("u<fL>"),bk:s("u<ac<e,a_?>>"),lz:s("u<i9>"),AA:s("u<v>"),fB:s("u<dv>"),aH:s("u<eb>"),Fn:s("u<kz>"),A:s("u<X>"),dQ:s("u<bf>"),sp:s("u<kE>"),cp:s("u<kJ>"),Dk:s("u<kK>"),Y:s("u<al>"),ey:s("u<f6>"),uE:s("u<f7>"),rA:s("u<bv>"),yT:s("u<kS>"),EQ:s("u<dw>"),hy:s("u<+(K,K)>"),AW:s("u<+(e,z<V>)>"),M:s("u<+(e,e)>"),qM:s("u<+(c,X)>"),wt:s("u<+(c,e)>"),l7:s("u<+month,year(c,c)>"),hK:s("u<+(X,X,bN)>"),Dg:s("u<+(c,c,bN)>"),sG:s("u<+(e,e,e,e?)>"),xj:s("u<+complete,month,spent,year(l,c,v,c)>"),kY:s("u<+(c,c,l,ac<e?,v>)>"),k1:s("u<kW>"),zM:s("u<dz>"),cM:s("u<kX>"),D6:s("u<ir>"),os:s("u<l_>"),wp:s("u<cv>"),J:s("u<W>"),qH:s("u<dA>"),j2:s("u<f9>"),kz:s("u<ba>"),vV:s("u<dB>"),st:s("u<dC>"),sv:s("u<l2>"),EA:s("u<iv>"),EP:s("u<l3>"),mt:s("u<l4>"),mu:s("u<ch>"),bD:s("u<cX>"),vk:s("u<fZ>"),g0:s("u<dE>"),Ev:s("u<h0>"),Ec:s("u<cz>"),F:s("u<c0>"),CL:s("u<la>"),s:s("u<e>"),e3:s("u<ld>"),xw:s("u<lh>"),nS:s("u<li>"),eE:s("u<dO>"),oc:s("u<bw>"),C7:s("u<h4>"),sj:s("u<l>"),zp:s("u<V>"),zz:s("u<@>"),t:s("u<c>"),qt:s("u<hW?>"),dr:s("u<v?>"),yH:s("u<e?>"),wF:s("u<V?>"),rw:s("bs<@>"),Be:s("fG"),m:s("a8"),g9:s("dr"),Eh:s("bW<@>"),nm:s("i_"),io:s("f1"),pj:s("i2<cW,bB>"),ch:s("cO"),k2:s("r"),P:s("a9"),u:s("b1"),xt:s("i3"),vG:s("z<ac<e,a_?>>"),r9:s("z<v>"),C:s("z<X>"),tU:s("z<al>"),iX:s("z<al>(fK,e,c,a5)"),to:s("z<bv>"),DX:s("z<+(e,e)>"),sO:s("z<+(c,X)>"),BU:s("z<+(e,e,e,e?)>"),Bz:s("z<W>"),zo:s("z<ch>"),Fu:s("z<cX>"),nd:s("z<h0>"),a:s("z<e>"),j:s("z<@>"),L:s("z<c>"),pt:s("cP"),gd:s("du"),Ep:s("cQ"),sd:s("cr"),zc:s("i7"),qo:s("cS"),ub:s("an<e,cO>"),AT:s("an<e,e>"),dK:s("an<e,c>"),nF:s("an<e?,z<v>>"),Ez:s("ac<e,bH>"),Cu:s("ac<e,b1>"),Dm:s("ac<e,X>"),sw:s("ac<e,bq>"),yz:s("ac<e,e>"),f:s("ac<@,@>"),I:s("ac<e,a_?>"),mE:s("ac<a_?,a_?>"),zK:s("ak<e,e>"),wL:s("ak<e,c>"),FC:s("ak<c,V>"),BA:s("ak<e?,e>"),lQ:s("ct"),o:s("fO"),B:s("v"),aD:s("v(bz)"),wg:s("dv"),wy:s("eb"),W:s("X"),y6:s("ec"),v_:s("bf"),h:s("fP"),Eg:s("ee"),Ag:s("bX"),iT:s("f3"),kx:s("f4<e>"),aU:s("bg"),K:s("a_"),Q:s("al"),eM:s("fR"),l3:s("fS"),cL:s("f5"),fN:s("bS"),pL:s("f6"),cZ:s("kQ"),AB:s("bv"),mZ:s("eh"),dZ:s("ei"),gv:s("bA"),nU:s("cT"),y3:s("dw"),Fx:s("cu"),op:s("LR"),ep:s("+()"),sH:s("+(K,K)"),aa:s("+(K,h_?)"),qD:s("+end,loans(K,z<h0>)"),sF:s("+(bf,e?)"),g5:s("+(e,d7)"),Dt:s("+(e,K)"),ov:s("+(e,z<V>)"),z9:s("+(e,c_)"),p_:s("+(e,e)"),uB:s("+(c,X)"),jr:s("+(c,e)"),l1:s("+month,year(c,c)"),wD:s("+(a_?,a_?)"),ct:s("+(X,X,bN)"),Bf:s("+accountId,from,to(e,K,K)"),bY:s("+(e,cL,v)"),xG:s("+(e,e,cL)"),ER:s("+(e,e,e)"),d3:s("+(e,e,e?)"),xC:s("+(c,v,cU<e>)"),Ei:s("+(c,c,bN)"),Cw:s("+(e,e,e,cL)"),jm:s("+(e,e,e,e?)"),hf:s("+complete,month,spent,year(l,c,v,c)"),nr:s("+(c,c,l,ac<e?,v>)"),nX:s("+date,eventId,hash,n,removed(K,e,e,c,l)"),fK:s("cf"),ez:s("ip"),iJ:s("dz"),xM:s("kZ"),hn:s("cg"),q6:s("aZ<e>"),gb:s("aZ<c>"),t5:s("cv"),i:s("W"),dw:s("dA"),CW:s("aK"),fC:s("f9"),jF:s("l0"),cy:s("ej"),R:s("ba"),cT:s("cx"),di:s("dB"),kG:s("dC"),mg:s("it"),yX:s("ek"),g:s("fW"),A0:s("bl"),aA:s("iv"),dO:s("cU<e>"),bu:s("fa"),gc:s("fY"),gZ:s("Al"),jC:s("cW"),qC:s("bB"),uC:s("b3<ca>"),c5:s("ch"),in:s("c_"),Ba:s("l8"),Z:s("bq"),qp:s("cX"),l:s("en"),sN:s("dE"),qe:s("eo"),DV:s("l9"),AD:s("ep"),Bu:s("dG"),A9:s("dH"),nT:s("fb"),iL:s("fc"),dh:s("cz"),v:s("c0"),u4:s("eq"),N:s("e"),j3:s("e()"),_:s("e(ct)"),ff:s("e(e)"),tx:s("e(e?)"),tD:s("h2"),lG:s("er"),aT:s("fe"),EL:s("le"),hz:s("lg"),zs:s("ad<e,bo>"),l4:s("ad<e,e2>"),rE:s("ad<e,bH>"),DF:s("ad<e,e5>"),hl:s("ad<e,eX>"),F4:s("ad<e,fO>"),BK:s("ad<e,ec>"),AJ:s("ad<e,ba>"),dB:s("ad<+(e,K),ep>"),n7:s("ad<e,z<bv>>"),ur:s("iB<e>"),sg:s("aw"),oo:s("ci(K?)"),ib:s("dK"),qx:s("dL"),bs:s("dM"),Dd:s("tB"),p:s("dO"),qF:s("es"),iB:s("dP<e,v>"),ya:s("tC"),xN:s("cB"),qK:s("p<bo>"),rb:s("p<c8>"),km:s("p<bR>"),rx:s("p<a9>"),dL:s("p<cP>"),yL:s("p<X>"),dN:s("p<+complete,month,spent,year(l,c,v,c)>"),yF:s("p<+(c,c,l,ac<e?,v>)>"),o_:s("p<cf>"),vL:s("p<cg>"),rK:s("p<bq>"),i0:s("p<bb>"),m5:s("S<a9>"),Ai:s("iG<e>"),E:s("bw"),q9:s("cY"),Ck:s("cC<a8>"),th:s("cC<@>"),le:s("cC<a_?>"),nx:s("aL"),oX:s("am<a8>"),hR:s("am<@>"),nR:s("am<a_?>"),gH:s("am<e?>"),wE:s("d_<X>"),dU:s("d_<+(c,c)>"),sn:s("bb"),y:s("l"),cP:s("l(bo)"),qB:s("l(c8)"),wx:s("l(bR)"),Ab:s("l(a9)"),jM:s("l(cP)"),fx:s("l(X)"),bl:s("l(a_)"),nn:s("l(+complete,month,spent,year(l,c,v,c))"),jb:s("l(+(c,c,l,ac<e?,v>))"),AH:s("l(cf)"),rt:s("l(cg)"),ns:s("l(bq)"),aX:s("l(bb)"),pR:s("V"),oe:s("V(c)"),z:s("@"),pF:s("@()"),h_:s("@(a_)"),nW:s("@(a_,en)"),S:s("c"),aY:s("c(e)"),eZ:s("b8<bg>?"),uh:s("a8?"),jS:s("z<@>?"),ks:s("z<c>?"),yq:s("ac<@,@>?"),c_:s("ac<e,a_?>?"),X:s("a_?"),T:s("e?"),tj:s("e(ct)?"),F5:s("dO?"),f7:s("dQ<@,@>?"),Af:s("lQ?"),k7:s("l?"),u6:s("V?"),lo:s("c?"),lF:s("c(e)?"),ht:s("K?()?"),b0:s("e?()?"),s7:s("bE?"),n:s("bE"),H:s("~"),O:s("~()"),ma:s("~(e)"),m1:s("~(e,@)"),uH:s("~(lg)"),wI:s("~(l)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.eY=J.kn.prototype
B.a=J.u.prototype
B.d=J.hY.prototype
B.f_=J.fG.prototype
B.Q=J.f_.prototype
B.c=J.dq.prototype
B.f0=J.dr.prototype
B.f1=J.hZ.prototype
B.ay=A.ia.prototype
B.aZ=A.ib.prototype
B.ka=A.id.prototype
B.D=A.ie.prototype
B.i=A.f3.prototype
B.dC=J.kR.prototype
B.c0=J.es.prototype
B.c7=new A.eJ("Cards",1,"cards")
B.c8=new A.eJ("Bank accounts",0,"bank")
B.c9=new A.eJ("Loans",2,"loans")
B.V=new A.c4(0,"savings")
B.Z=new A.c4(1,"current")
B.x=new A.c4(2,"creditCard")
B.o=new A.c4(3,"loan")
B.y=new A.c4(4,"cash")
B.a5=new A.c4(5,"retirement")
B.ca=new A.d6("NRE",0,"nre")
B.cb=new A.d6("NRO",1,"nro")
B.b6=new A.d6("SRS",2,"srs")
B.e_=new A.hz(!1)
B.K=new A.fr(B.e_)
B.e0=new A.hz(!0)
B.dZ=new A.fr(B.e0)
B.b7=new A.e2(0,"disputed")
B.cc=new A.e2(1,"cancelled")
B.e1=new A.c6(0,"unverified")
B.cd=new A.c6(1,"open")
B.ce=new A.c6(2,"partiallyPaid")
B.b8=new A.c6(3,"paid")
B.cf=new A.c6(4,"overdue")
B.cg=new A.c6(5,"disputed")
B.b9=new A.c6(6,"cancelled")
B.ch=new A.c6(7,"paymentNotKnown")
B.ck=new A.jD()
B.e5=new A.jB(B.ck,"SHA-256")
B.cs=new A.hM(null)
B.e6=new A.mJ(null)
B.cj=new A.eW(A.Kx(),t.wR)
B.ci=new A.eW(A.Ky(),t.wR)
B.B=new A.jw()
B.e7=new A.jE()
B.mC=new A.mR()
B.cl=new A.jV()
B.ba=new A.hL()
B.cm=new A.jW()
B.mD=new A.jY(A.Y("jY<0&>"))
B.cn=new A.k1()
B.bb=new A.hT(A.Y("hT<0&>"))
B.au=new A.k4()
B.a1=new A.k4()
B.mF=new A.cb(288e8)
B.n=new A.ng()
B.W=new A.km()
B.co=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.e8=function() {
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
B.ed=function(getTagFallback) {
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
B.e9=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ec=function(hooks) {
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
B.eb=function(hooks) {
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
B.ea=function(hooks) {
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
B.cp=function(hooks) { return hooks; }

B.z=new A.ks()
B.aB=new A.kx(A.Y("kx<c>"))
B.ee=new A.kH()
B.ef=new A.kL()
B.mE=new A.rX()
B.eg=new A.t8()
B.t=new A.tc()
B.eh=new A.tl()
B.ei=new A.tv()
B.O=new A.lm()
B.E=new A.ln()
B.P=new A.tX()
B.T=new A.lT()
B.aC=new A.lU()
B.ej=new A.lX()
B.aD=new A.m1()
B.ep=new A.fx(0,"argon2d")
B.cq=new A.fx(1,"argon2i")
B.bc=new A.fx(2,"argon2id")
B.cr=new A.eR(64)
B.eq=new A.hJ(B.ba)
B.p=new A.cL(0,"inflow")
B.q=new A.cL(1,"outflow")
B.mK=s(["document"],t.s)
B.bd=new A.bJ("Document",null,9,"other")
B.mZ=s(["work","permit","wp"],t.s)
B.ct=new A.bJ("Work permit",!0,4,"workPermit")
B.ez=new A.cb(0)
B.eA=new A.cb(1)
B.eB=new A.cb(2e7)
B.eC=new A.cb(6e7)
B.j=new A.aG(0,"text")
B.a2=new A.aG(1,"long")
B.be=new A.aG(10,"people")
B.a3=new A.aG(11,"account")
B.ad=new A.aG(12,"book")
B.F=new A.aG(13,"ref")
B.aE=new A.aG(14,"policy")
B.bf=new A.aG(15,"document")
B.al=new A.aG(16,"movement")
B.bg=new A.aG(17,"invoice")
B.aF=new A.aG(18,"file")
B.a6=new A.aG(19,"last4")
B.r=new A.aG(2,"date")
B.a_=new A.aG(20,"flag")
B.am=new A.aG(21,"address")
B.aG=new A.aG(22,"percent")
B.bh=new A.aG(23,"ifsc")
B.aH=new A.aG(3,"time")
B.an=new A.aG(4,"month")
B.u=new A.aG(5,"money")
B.aI=new A.aG(6,"decimal")
B.I=new A.aG(7,"integer")
B.M=new A.aG(8,"choice")
B.ao=new A.aG(9,"person")
B.eF=new A.b7("not a sender id",null,null)
B.eG=new A.b7("format",null,null)
B.eH=new A.b7("emailSha256 is not a SHA-256",null,null)
B.eI=new A.b7("not a sender address",null,null)
B.cu=new A.di(0,"paid")
B.cv=new A.di(1,"failed")
B.cw=new A.bR(3,"document")
B.cx=new A.bR(4,"tdsCertificate")
B.cy=new A.cd(0,"scheduled")
B.cz=new A.cd(1,"dueSoon")
B.cA=new A.cd(2,"dueToday")
B.cB=new A.cd(3,"awaitingStatement")
B.bi=new A.cd(4,"paid")
B.cC=new A.cd(5,"partlyPaid")
B.cD=new A.cd(6,"overdue")
B.bj=new A.cd(7,"confirmedByYou")
B.cE=new A.dn(0,"unplaced")
B.eZ=new A.dn(1,"unpaid")
B.bk=new A.dn(2,"partlyPaid")
B.bl=new A.dn(3,"paid")
B.cF=new A.dn(4,"overpaid")
B.cG=new A.dn(5,"mismatch")
B.f2=new A.ku(null)
B.f3=new A.kv(null)
B.R=new A.i2("ed25519",t.pj)
B.S=new A.i2("x25519",t.pj)
B.b=s([],t.s)
B.fp=new A.r("destination","Destination",B.j,!0,B.b,null,null,null,B.b,null)
B.hS=new A.r("departs","Leaving on",B.r,!0,B.b,null,null,null,B.b,null)
B.fB=new A.r("returns","Back on",B.r,!0,B.b,null,null,null,B.b,null)
B.fe=new A.r("travellers","Travellers",B.be,!0,B.b,null,null,null,B.b,null)
B.cH=new A.r("fromEvent","From the calendar",B.j,!1,B.b,null,null,null,B.b,null)
B.ae=new A.r("file","Document",B.aF,!1,B.b,null,null,null,B.b,null)
B.jr=s([B.fp,B.hS,B.fB,B.fe,B.cH,B.ae],t.e)
B.cT=new A.a9("Trip",B.jr,3,"trip")
B.i8=new A.r("loanId","Loan",B.a3,!0,B.b,null,null,null,B.b,null)
B.fu=new A.r("due","Due",B.r,!0,B.b,null,null,null,B.b,null)
B.cS=new A.r("on","On",B.r,!0,B.b,null,null,null,B.b,null)
B.jp=s([B.i8,B.fu,B.cS],t.e)
B.bq=new A.a9("Instalment you paid",B.jp,30,"loanInstalmentConfirm")
B.dj=s(["company"],t.s)
B.aK=new A.r("bookId","Company",B.ad,!0,B.b,null,null,null,B.dj,null)
B.h1=new A.r("name","Name",B.j,!0,B.b,null,null,null,B.b,null)
B.cL=new A.r("address","Address",B.am,!0,B.b,null,null,null,B.b,null)
B.hF=new A.r("attention","Attention",B.j,!1,B.b,null,null,null,B.b,null)
B.hY=new A.r("paymentDays","Payment due after (days)",B.I,!1,B.b,null,0,365,B.b,null)
B.j2=s([B.aK,B.h1,B.cL,B.hF,B.hY],t.e)
B.a4=new A.a9("Customer",B.j2,25,"customer")
B.hm=new A.r("year","Year",B.I,!0,B.b,null,2000,2100,B.b,null)
B.hj=new A.r("employee","Employee share",B.u,!0,B.b,null,null,null,B.b,null)
B.hk=new A.r("employer","Employer share",B.u,!0,B.b,null,null,null,B.b,null)
B.fH=new A.r("source","From",B.j,!0,B.b,null,null,null,B.b,"The CPF statement")
B.it=s([B.hm,B.hj,B.hk,B.fH],t.e)
B.cU=new A.a9("CPF contributions",B.it,11,"cpfYear")
B.cN=new A.r("title","What",B.j,!0,B.b,null,null,null,B.b,null)
B.av=new A.r("date","Date",B.r,!0,B.b,null,null,null,B.b,null)
B.bo=new A.r("time","Time",B.aH,!1,B.b,null,null,null,B.b,"HH:MM")
B.cJ=new A.r("note","Note",B.a2,!1,B.b,null,null,null,B.b,null)
B.jB=s(["on-the-day","1-day-before","2-days-before","1-week-before"],t.s)
B.fc=new A.r("remind","Remind me",B.M,!1,B.jB,null,null,null,B.b,null)
B.jg=s([B.cN,B.av,B.bo,B.cJ,B.fc],t.e)
B.cV=new A.a9("Event",B.jg,17,"event")
B.ig=new A.r("invoiceId","Invoice",B.bg,!0,B.b,null,null,null,B.b,null)
B.fT=new A.r("file","Document",B.aF,!0,B.b,null,null,null,B.b,null)
B.jS=s([B.ig,B.fT],t.e)
B.cW=new A.a9("Invoice document",B.jS,2,"invoiceFile")
B.fg=new A.r("personId","Helper",B.ao,!0,B.b,null,null,null,B.b,null)
B.fC=new A.r("permitId","Work permit",B.bf,!1,B.b,null,null,null,B.b,null)
B.fS=new A.r("renewalDate","Permit renewal",B.r,!1,B.b,null,null,null,B.b,null)
B.he=new A.r("medicalDue","Medical examination due",B.r,!1,B.b,null,null,null,B.b,null)
B.fv=new A.r("contractEnds","Contract ends",B.r,!1,B.b,null,null,null,B.b,null)
B.hz=new A.r("source","Dates from",B.j,!1,B.b,null,null,null,B.b,"The permit, policy or MOM notice")
B.jm=s([B.fg,B.fC,B.fS,B.he,B.fv,B.hz],t.e)
B.cX=new A.a9("Helper",B.jm,8,"helper")
B.bn=new A.r("tenancyId","Tenancy",B.F,!0,B.b,"tenancy",null,null,B.b,null)
B.hM=new A.r("legalName","Tenant's legal name",B.j,!0,B.b,null,null,null,B.b,null)
B.hr=new A.r("address","Tenant's address",B.am,!0,B.b,null,null,null,B.b,null)
B.i1=new A.r("gstinLast4","Tenant's GSTIN, last 4",B.a6,!0,B.b,null,null,null,B.b,null)
B.i_=new A.r("placeOfSupply","Place of supply",B.j,!0,B.b,null,null,null,B.b,'Like "Tamil Nadu (33)"')
B.h2=new A.r("service","Service name",B.j,!0,B.b,null,null,null,B.b,'Like "Rent of Example Plaza"')
B.fi=new A.r("sac","SAC",B.I,!1,B.b,null,99e4,999999,B.b,"997212 when left empty")
B.hL=new A.r("tdsPercent","TDS the tenant deducts (%)",B.aG,!1,B.b,null,null,null,B.b,"10 when left empty")
B.j6=s(["1","2","3"],t.s)
B.hn=new A.r("layout","Layout",B.M,!0,B.j6,null,null,null,B.b,null)
B.aJ=new A.r("seriesId","Invoice series",B.F,!0,B.b,"rentSeries",null,null,B.b,null)
B.ie=new A.r("accountId","Rent paid into",B.a3,!0,B.b,null,null,null,B.b,null)
B.hC=new A.r("ifsc","IFSC",B.bh,!0,B.b,null,null,null,B.b,null)
B.hW=new A.r("accountNote","After the account number",B.j,!1,B.b,null,null,null,B.b,"Like NRO")
B.h4=new A.r("invoiceDay","Invoices dated on day",B.I,!1,B.b,null,1,31,B.b,null)
B.im=new A.r("datedMonthBefore","Dated in the month before",B.a_,!1,B.b,null,null,null,B.b,null)
B.f8=new A.r("workingDay","Moved to the nearest working day",B.a_,!1,B.b,null,null,null,B.b,null)
B.jl=s([B.bn,B.hM,B.hr,B.i1,B.i_,B.h2,B.fi,B.hL,B.hn,B.aJ,B.ie,B.hC,B.hW,B.h4,B.im,B.f8],t.e)
B.aL=new A.a9("Invoicing details",B.jl,20,"tenancyBilling")
B.ff=new A.r("draftId","Draft",B.F,!0,B.b,"invoiceDraft",null,null,B.b,null)
B.fM=new A.r("description","Description",B.a2,!0,B.b,null,null,null,B.b,null)
B.ib=new A.r("quantity","Quantity",B.aI,!0,B.b,null,null,null,B.b,null)
B.fK=new A.r("unitPrice","Unit price",B.u,!0,B.b,null,null,null,B.b,null)
B.j0=s(["standard","zero-rated"],t.s)
B.hK=new A.r("gst","GST",B.M,!1,B.j0,null,null,null,B.b,"Standard when left empty")
B.iP=s([B.ff,B.fM,B.ib,B.fK,B.hK],t.e)
B.ap=new A.a9("Invoice line",B.iP,27,"invoiceDraftLine")
B.bp=new A.r("personId","For",B.ao,!0,B.b,null,null,null,B.b,null)
B.fh=new A.r("provider","Clinic or hospital",B.j,!0,B.b,null,null,null,B.b,null)
B.fY=new A.r("total","Bill total",B.u,!0,B.b,null,null,null,B.b,null)
B.cR=new A.r("medisave","Paid by MediSave",B.u,!1,B.b,null,null,null,B.b,null)
B.i6=new A.r("insurance","Paid by insurance",B.u,!1,B.b,null,null,null,B.b,null)
B.hV=new A.r("movementId","Card or cash transaction",B.al,!1,B.b,null,null,null,B.b,null)
B.i0=new A.r("policyId","Policy",B.aE,!1,B.b,null,null,null,B.b,null)
B.iw=s([B.bp,B.av,B.fh,B.fY,B.cR,B.i6,B.hV,B.i0,B.ae],t.e)
B.cY=new A.a9("Medical bill",B.iw,6,"medicalBill")
B.hy=new A.r("pattern","Number pattern",B.j,!0,B.b,null,null,null,B.b,"Like INV-{nnn}-{fy}")
B.h0=new A.r("startNumber","Next number",B.I,!0,B.b,null,1,999999,B.b,null)
B.il=new A.r("yearly","Start again at 1 each April",B.a_,!1,B.b,null,null,null,B.b,null)
B.hx=new A.r("startYear","Year of the next number",B.j,!1,B.b,null,null,null,B.b,"Like 26/27")
B.jI=s([B.hy,B.h0,B.il,B.hx],t.e)
B.af=new A.a9("Invoice series",B.jI,19,"rentSeries")
B.jC=s(["oa","sa","ra","ma"],t.s)
B.fk=new A.r("account","CPF account",B.M,!0,B.jC,null,null,null,B.b,null)
B.fy=new A.r("amount","Amount",B.u,!0,B.b,null,null,null,B.b,null)
B.fo=new A.r("purpose","For",B.j,!0,B.b,null,null,null,B.b,null)
B.iX=s([B.fk,B.fy,B.av,B.fo],t.e)
B.cZ=new A.a9("Paid from CPF",B.iX,12,"cpfUse")
B.cP=new A.r("policyId","Policy",B.aE,!0,B.b,null,null,null,B.b,null)
B.i3=new A.r("billId","Bill",B.F,!1,B.b,"medicalBill",null,null,B.b,null)
B.hu=new A.r("claimed","Claimed",B.u,!0,B.b,null,null,null,B.b,null)
B.hO=new A.r("submitted","Submitted on",B.r,!1,B.b,null,null,null,B.b,null)
B.jL=s(["preparing","submitted","approved","rejected","paid"],t.s)
B.hT=new A.r("status","Status",B.M,!0,B.jL,null,null,null,B.b,null)
B.hG=new A.r("paid","Paid out",B.u,!1,B.b,null,null,null,B.b,null)
B.hw=new A.r("creditMovementId","Claim credit transaction",B.al,!1,B.b,null,null,null,B.b,null)
B.iu=s([B.cP,B.bp,B.i3,B.hu,B.hO,B.hT,B.hG,B.hw,B.ae],t.e)
B.br=new A.a9("Claim",B.iu,7,"claim")
B.h9=new A.r("name","Name",B.j,!0,B.b,null,null,null,B.b,'Like "Chennai shop"')
B.iZ=s(["SG","IN"],t.s)
B.cK=new A.r("country","Country",B.M,!0,B.iZ,null,null,null,B.b,null)
B.jo=s(["home","commercial","land","other"],t.s)
B.f9=new A.r("type","Type",B.M,!0,B.jo,null,null,null,B.b,null)
B.hX=new A.r("share","Your share (%)",B.I,!1,B.b,null,1,100,B.b,null)
B.hp=new A.r("purchased","Bought on",B.r,!1,B.b,null,null,null,B.b,null)
B.ik=new A.r("loanAccountId","Loan",B.a3,!1,B.b,null,null,null,B.b,null)
B.jE=s(["property","member"],t.s)
B.ih=new A.r("bookId","Book",B.ad,!1,B.b,null,null,null,B.jE,null)
B.hb=new A.r("gstr1Day","GSTR-1 due day",B.I,!1,B.b,null,1,28,B.b,null)
B.fG=new A.r("gstr3bDay","GSTR-3B due day",B.I,!1,B.b,null,1,28,B.b,null)
B.fU=new A.r("creditSeriesId","Credit note series",B.F,!1,B.b,"rentSeries",null,null,B.b,null)
B.iL=s([B.h9,B.cK,B.f9,B.hX,B.hp,B.ik,B.ih,B.hb,B.fG,B.fU,B.ae],t.e)
B.aw=new A.a9("Property",B.iL,0,"property")
B.cO=new A.r("propertyId","Property",B.F,!0,B.b,"property",null,null,B.b,null)
B.cM=new A.r("name","Name on the invoice",B.j,!0,B.b,null,null,null,B.b,null)
B.fX=new A.r("address","Address and phone",B.am,!0,B.b,null,null,null,B.b,null)
B.f4=new A.r("gstinLast4","GSTIN, last 4",B.a6,!0,B.b,null,null,null,B.b,null)
B.i2=new A.r("panLast4","PAN, last 4",B.a6,!0,B.b,null,null,null,B.b,null)
B.jU=s([B.cO,B.cM,B.fX,B.f4,B.i2],t.e)
B.aM=new A.a9("Invoice issuer",B.jU,18,"rentIssuer")
B.fr=new A.r("month","For the month",B.an,!0,B.b,null,null,null,B.b,null)
B.bm=new A.r("date","Invoice date",B.r,!0,B.b,null,null,null,B.b,null)
B.iQ=s([B.bn,B.aJ,B.fr,B.bm],t.e)
B.ag=new A.a9("Rent invoice",B.iQ,22,"rentInvoice")
B.ij=new A.r("uenLast4","UEN, last 4",B.a6,!0,B.b,null,null,null,B.b,null)
B.hR=new A.r("gstRegistered","GST registered",B.a_,!1,B.b,null,null,null,B.b,null)
B.f6=new A.r("gstRegLast4","GST registration number, last 4",B.a6,!1,B.b,null,null,null,B.b,null)
B.ia=new A.r("accountId","Paid into",B.a3,!0,B.b,null,null,null,B.b,null)
B.fP=new A.r("paymentDays","Payment due after (days)",B.I,!1,B.b,null,0,365,B.b,"30 when left empty")
B.i7=new A.r("footer","Note on every invoice",B.a2,!1,B.b,null,null,null,B.b,null)
B.iH=s([B.aK,B.cM,B.cL,B.ij,B.hR,B.f6,B.aJ,B.ia,B.fP,B.i7],t.e)
B.aq=new A.a9("Company invoice issuer",B.iH,24,"companyIssuer")
B.fL=new A.r("bookId","Book",B.ad,!0,B.b,null,null,null,B.dj,null)
B.i5=new A.r("incorporated","Incorporated on",B.r,!1,B.b,null,null,null,B.b,null)
B.fb=new A.r("last4","Registration number, last 4",B.a6,!1,B.b,null,null,null,B.b,null)
B.ft=new A.r("directors","Directors",B.j,!1,B.b,null,null,null,B.b,null)
B.j_=s([B.fL,B.cK,B.i5,B.fb,B.ft,B.ae],t.e)
B.aN=new A.a9("Company",B.j_,9,"company")
B.fD=new A.r("source","Proposed from",B.j,!0,B.b,null,null,null,B.b,null)
B.jt=s([B.cN,B.av,B.bo,B.fD],t.e)
B.d_=new A.a9("Plan item",B.jt,16,"planItem")
B.h7=new A.r("description","Description",B.j,!0,B.b,null,null,null,B.b,'Like "Common area maintenance"')
B.f7=new A.r("sac","SAC",B.I,!0,B.b,null,99e4,999999,B.b,null)
B.fs=new A.r("amount","Amount before GST",B.u,!0,B.b,null,null,null,B.b,null)
B.iV=s([B.bn,B.h7,B.f7,B.fs],t.e)
B.bs=new A.a9("Extra invoice line",B.iV,21,"tenancyLine")
B.hQ=new A.r("invoiceId","Invoice",B.F,!0,B.b,"rentInvoice",null,null,B.b,null)
B.i9=new A.r("seriesId","Credit note series",B.F,!0,B.b,"rentSeries",null,null,B.b,null)
B.fV=new A.r("date","Credit note date",B.r,!0,B.b,null,null,null,B.b,null)
B.iC=s([B.hQ,B.i9,B.fV],t.e)
B.ah=new A.a9("Credit note",B.iC,23,"rentCredit")
B.hN=new A.r("tripId","Trip",B.F,!0,B.b,"trip",null,null,B.b,null)
B.fw=new A.r("movementId","Transaction",B.al,!0,B.b,null,null,null,B.b,null)
B.hh=new A.r("attached","On the trip",B.a_,!0,B.b,null,null,null,B.b,null)
B.fd=new A.r("sgd","In SGD",B.u,!1,B.b,null,null,null,B.b,null)
B.id=new A.r("rate","Rate",B.aI,!1,B.b,null,null,null,B.b,null)
B.jO=s([B.hN,B.fw,B.hh,B.fd,B.id],t.e)
B.d0=new A.a9("Trip line",B.jO,4,"tripLine")
B.fW=new A.r("title","What",B.j,!0,B.b,null,null,null,B.b,'Like "Dentist"')
B.hg=new A.r("place","Where",B.j,!1,B.b,null,null,null,B.b,null)
B.iA=s([B.bp,B.fW,B.av,B.bo,B.hg,B.cH],t.e)
B.d1=new A.a9("Appointment",B.iA,5,"appointment")
B.cI=new A.r("customerId","Customer",B.F,!0,B.b,"customer",null,null,B.b,null)
B.je=s([B.aK,B.cI,B.aJ,B.bm],t.e)
B.a7=new A.a9("Company invoice",B.je,28,"companyInvoice")
B.jv=s(["landlord","tenant"],t.s)
B.f5=new A.r("role","You are the",B.M,!0,B.jv,null,null,null,B.b,null)
B.hs=new A.r("otherParty","Other party",B.j,!0,B.b,null,null,null,B.b,null)
B.h8=new A.r("rent","Rent",B.u,!1,B.b,null,null,null,B.b,null)
B.hB=new A.r("dueDay","Rent due on day",B.I,!1,B.b,null,1,31,B.b,null)
B.fa=new A.r("deposit","Deposit",B.u,!1,B.b,null,null,null,B.b,null)
B.hH=new A.r("starts","Lease starts",B.r,!1,B.b,null,null,null,B.b,null)
B.hl=new A.r("ends","Lease ends",B.r,!1,B.b,null,null,null,B.b,null)
B.iG=s([B.cO,B.f5,B.hs,B.h8,B.hB,B.fa,B.hH,B.hl,B.ae],t.e)
B.ar=new A.a9("Tenancy",B.iG,1,"tenancy")
B.hq=new A.r("title","Remind me to",B.j,!0,B.b,null,null,null,B.b,null)
B.fj=new A.r("anchor","From the date",B.r,!0,B.b,null,null,null,B.b,null)
B.fE=new A.r("offset","When",B.j,!0,B.b,null,null,null,B.b,'Like "1 month before"')
B.fQ=new A.r("date","On",B.r,!0,B.b,null,null,null,B.b,null)
B.fI=new A.r("source","Source",B.a2,!0,B.b,null,null,null,B.b,null)
B.cQ=new A.r("confirmedOn","Confirmed on",B.r,!0,B.b,null,null,null,B.b,null)
B.jF=s(["yearly","monthly","every-n-months","every-n-weeks"],t.s)
B.ho=new A.r("repeat","Repeats",B.M,!1,B.jF,null,null,null,B.b,null)
B.hv=new A.r("every","Every how many months or weeks",B.I,!1,B.b,null,2,99,B.b,null)
B.fl=new A.r("until","Until",B.r,!1,B.b,null,null,null,B.b,null)
B.h5=new A.r("times","How many times in all",B.I,!1,B.b,null,2,999,B.b,null)
B.jk=s([B.hq,B.fj,B.fE,B.fQ,B.fI,B.cQ,B.ho,B.hv,B.fl,B.h5],t.e)
B.d2=new A.a9("Reminder",B.jk,15,"ownReminder")
B.h3=new A.r("text","Fact",B.a2,!0,B.b,null,null,null,B.b,null)
B.hE=new A.r("sourceFile","From",B.j,!0,B.b,null,null,null,B.b,null)
B.ii=new A.r("span","Quote",B.a2,!1,B.b,null,null,null,B.b,null)
B.fN=new A.r("page","Page",B.I,!1,B.b,null,1,9999,B.b,null)
B.hP=new A.r("fileDate","File dated",B.r,!1,B.b,null,null,null,B.b,null)
B.ic=new A.r("asOf","True as of",B.r,!1,B.b,null,null,null,B.b,null)
B.i4=new A.r("driveFileId","Drive file",B.j,!1,B.b,null,null,null,B.b,null)
B.ht=new A.r("version","Copy",B.j,!1,B.b,null,null,null,B.b,null)
B.hI=new A.r("date","Date it names",B.r,!1,B.b,null,null,null,B.b,null)
B.fA=new A.r("recordId","About",B.j,!1,B.b,null,null,null,B.b,null)
B.jN=s([B.h3,B.hE,B.ii,B.fN,B.hP,B.ic,B.cQ,B.i4,B.ht,B.hI,B.fA],t.e)
B.bt=new A.a9("Memory",B.jN,14,"memory")
B.h6=new A.r("reference","Customer reference",B.j,!1,B.b,null,null,null,B.b,"Like a PO number")
B.iN=s([B.aK,B.cI,B.bm,B.h6,B.cJ],t.e)
B.a8=new A.a9("Invoice draft",B.iN,26,"invoiceDraft")
B.jG=s(["sent","gst-filed","gst-paid","gstr1-filed","gstr3b-paid","gst-itc","tds-certificate"],t.s)
B.fq=new A.r("what","What",B.M,!0,B.jG,null,null,null,B.b,null)
B.fx=new A.r("invoiceId","Invoice",B.F,!1,B.b,"rentInvoice",null,null,B.b,null)
B.hJ=new A.r("tenancyId","Tenancy",B.F,!1,B.b,"tenancy",null,null,B.b,null)
B.fn=new A.r("quarter","Quarter",B.j,!1,B.b,null,null,null,B.b,null)
B.io=new A.r("propertyId","Property",B.F,!1,B.b,"property",null,null,B.b,null)
B.hZ=new A.r("month","Month",B.an,!1,B.b,null,null,null,B.b,null)
B.hi=new A.r("reference","Reference",B.j,!1,B.b,null,null,null,B.b,null)
B.hD=new A.r("amount","Input tax credit",B.u,!1,B.b,null,null,null,B.b,null)
B.iT=s([B.fq,B.fx,B.hJ,B.fn,B.io,B.hZ,B.cS,B.hi,B.hD],t.e)
B.aO=new A.a9("Rental mark",B.iT,29,"rentalMark")
B.hd=new A.r("dueOn","Due on",B.r,!0,B.b,null,null,null,B.b,null)
B.fO=new A.r("cash","Paid in cash or card",B.u,!1,B.b,null,null,null,B.b,null)
B.fF=new A.r("movementId","Transaction",B.al,!1,B.b,null,null,null,B.b,null)
B.jn=s([B.cP,B.hd,B.fO,B.cR,B.fF],t.e)
B.d3=new A.a9("Premium paid",B.jn,13,"premiumPaid")
B.hU=new A.r("employer","Employer",B.j,!0,B.b,null,null,null,B.b,null)
B.ha=new A.r("period","Pay period",B.an,!0,B.b,null,null,null,B.b,"YYYY-MM")
B.hf=new A.r("payDate","Pay date",B.r,!0,B.b,null,null,null,B.b,null)
B.fR=new A.r("gross","Gross pay",B.u,!1,B.b,null,null,null,B.b,null)
B.fm=new A.r("allowances","Allowances",B.u,!1,B.b,null,null,null,B.b,null)
B.fJ=new A.r("bonus","Bonus",B.u,!1,B.b,null,null,null,B.b,null)
B.fZ=new A.r("employeeCpf","Employee CPF",B.u,!1,B.b,null,null,null,B.b,null)
B.h_=new A.r("employerCpf","Employer CPF",B.u,!1,B.b,null,null,null,B.b,null)
B.hA=new A.r("otherDeductions","Other deductions",B.u,!1,B.b,null,null,null,B.b,null)
B.hc=new A.r("net","Net pay",B.u,!0,B.b,null,null,null,B.b,null)
B.fz=new A.r("accountId","Paid into",B.a3,!1,B.b,null,null,null,B.b,null)
B.ip=new A.r("reader","Read by",B.j,!1,B.b,null,null,null,B.b,null)
B.jP=s([B.hU,B.ha,B.hf,B.fR,B.fm,B.fJ,B.fZ,B.h_,B.hA,B.hc,B.fz,B.ip,B.ae],t.e)
B.bu=new A.a9("Payslip",B.jP,10,"payslip")
B.d4=s([1],t.t)
B.bT=new A.dG(0,"monthly")
B.bU=new A.dG(1,"quarterly")
B.bV=new A.dG(2,"halfYearly")
B.bW=new A.dG(3,"yearly")
B.iq=s([B.bT,B.bU,B.bV,B.bW],A.Y("u<dG>"))
B.aP=s([1,2],t.t)
B.d5=s([1,2,3],t.t)
B.d6=s([1,2,3,4],t.t)
B.d7=s([1,3],t.t)
B.d8=s([1,3,4,5],t.t)
B.d9=s([2],t.t)
B.l=s(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.s)
B.da=s([2,3],t.t)
B.aQ=s([3],t.t)
B.db=s([3,5],t.t)
B.is=s([B.ag,B.ah,B.a7],t.nB)
B.dc=s([4],t.t)
B.dd=s([B.ca,B.cb,B.b6],A.Y("u<d6>"))
B.de=s([4,5],t.t)
B.kk=new A.bS(0,"cardTap")
B.kl=new A.bS(1,"cardOnline")
B.km=new A.bS(2,"payLah")
B.kn=new A.bS(3,"payNow")
B.ko=new A.bS(4,"giro")
B.kp=new A.bS(5,"transfer")
B.kq=new A.bS(6,"axs")
B.kr=new A.bS(7,"cash")
B.ks=new A.bS(8,"other")
B.iv=s([B.kk,B.kl,B.km,B.kn,B.ko,B.kp,B.kq,B.kr,B.ks],A.Y("u<bS>"))
B.a0=s(["January","February","March","April","May","June","July","August","September","October","November","December"],t.s)
B.df=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.lO=new A.er(0,"subscription")
B.lP=new A.er(1,"domain")
B.lQ=new A.er(2,"certification")
B.ix=s([B.lO,B.lP,B.lQ],A.Y("u<er>"))
B.lv=new A.ej(0,"cashback")
B.lw=new A.ej(1,"miles")
B.lx=new A.ej(2,"points")
B.iy=s([B.lv,B.lw,B.lx],A.Y("u<ej>"))
B.iz=s([B.c8,B.c7,B.c9],A.Y("u<eJ>"))
B.eS=new A.co(0,"pending")
B.eT=new A.co(1,"parsed")
B.eU=new A.co(2,"pendingReview")
B.eV=new A.co(3,"verified")
B.eW=new A.co(4,"rejected")
B.eX=new A.co(5,"failed")
B.iB=s([B.eS,B.eT,B.eU,B.eV,B.eW,B.eX],A.Y("u<co>"))
B.kK=new A.cT("a month",0,"monthly")
B.kM=new A.cT("a quarter",1,"quarterly")
B.kO=new A.cT("a half-year",2,"halfYearly")
B.kL=new A.cT("a year",3,"yearly")
B.kN=new A.cT("once",4,"single")
B.iD=s([B.kK,B.kM,B.kO,B.kL,B.kN],A.Y("u<cT>"))
B.iE=s(["gross","allowances","bonus","employeeCpf","employerCpf","otherDeductions","net"],t.s)
B.iF=s([B.b7,B.cc],A.Y("u<e2>"))
B.bv=s([B.p,B.q],A.Y("u<cL>"))
B.eD=new A.df(0,"identity")
B.eE=new A.df(1,"helper")
B.iI=s([B.eD,B.eE],A.Y("u<df>"))
B.lI=new A.fb(0,"pdf")
B.lJ=new A.fb(1,"csv")
B.iJ=s([B.lI,B.lJ],A.Y("u<fb>"))
B.aW=new A.du(0,"personal")
B.bz=new A.du(1,"home")
B.bA=new A.du(2,"commercial")
B.bB=new A.du(3,"other")
B.bw=s([B.aW,B.bz,B.bA,B.bB],A.Y("u<du>"))
B.aR=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.J=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.iK=s(["missing-statement:","reminder:"],t.s)
B.lh=new A.t("standard","Standard-rated 9%")
B.kY=new A.t("zero-rated","Zero-rated")
B.iM=s([B.lh,B.kY],t.M)
B.dg=s(["https://www.googleapis.com/auth/drive.file","openid","email"],t.s)
B.k=new A.bf(0,"expense")
B.w=new A.bf(1,"income")
B.L=new A.bf(2,"ownAccountTransfer")
B.U=new A.bf(3,"cardBillPayment")
B.G=new A.bf(6,"refundOrReversal")
B.iO=s([B.k,B.w,B.L,B.U,B.G],t.dQ)
B.dW=new A.d7(0,"email")
B.dX=new A.d7(1,"sms")
B.dY=new A.d7(2,"push")
B.iR=s([B.dW,B.dX,B.dY],A.Y("u<d7>"))
B.e2=new A.e3(0,"monthly")
B.e3=new A.e3(1,"yearly")
B.e4=new A.e3(2,"none")
B.iS=s([B.e2,B.e3,B.e4],A.Y("u<e3>"))
B.aY=new A.bf(4,"loanInstalment")
B.iU=s([B.k,B.L,B.U,B.aY],t.dQ)
B.aS=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.iY=s(["TRANSFER TO OWN","OWN ACCOUNT","OWN A C"],t.s)
B.l_=new A.t("SGD","SGD")
B.kX=new A.t("INR","INR")
B.l1=new A.t("USD","USD")
B.j1=s([B.l_,B.kX,B.l1],t.M)
B.C=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.eO=new A.dl(0,"sms")
B.eP=new A.dl(1,"email")
B.eQ=new A.dl(2,"statement")
B.eR=new A.dl(3,"manual")
B.j3=s([B.eO,B.eP,B.eQ,B.eR],A.Y("u<dl>"))
B.lF=new A.c_("Bank alerts",0,"bank")
B.lE=new A.c_("Agency",1,"agency")
B.lG=new A.c_("Other",2,"other")
B.bx=s([B.lF,B.lE,B.lG],A.Y("u<c_>"))
B.ek=new A.cI(0,"full")
B.el=new A.cI(1,"aboveThreshold")
B.em=new A.cI(2,"pushOnly")
B.en=new A.cI(3,"statementOnly")
B.eo=new A.cI(4,"unknown")
B.j4=s([B.ek,B.el,B.em,B.en,B.eo],A.Y("u<cI>"))
B.aT=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.j5=s(["Document","For","Country","Number","Issued","Expires","File"],t.s)
B.dh=s([1,2,3,4,5],t.t)
B.lL=new A.eq(0,"email")
B.lM=new A.eq(1,"drive")
B.lN=new A.eq(2,"bankApp")
B.j7=s([B.lL,B.lM,B.lN],A.Y("u<eq>"))
B.c6=new A.bb("The month","Money",0,"month")
B.c5=new A.bb("Accounts","Money",1,"accounts")
B.mx=new A.bb("Loans","Money",2,"loans")
B.mA=new A.bb("Transactions","Money",3,"transactions")
B.mv=new A.bb("Invoices","Money",4,"invoices")
B.mz=new A.bb("Spending","Plan",5,"spending")
B.mB=new A.bb("Budgets and goals","Plan",6,"budgets")
B.mu=new A.bb("Insights","Plan",7,"insights")
B.mt=new A.bb("Review","To do",8,"review")
B.ms=new A.bb("Rules","To do",9,"rules")
B.mw=new A.bb("Life","Other",10,"life")
B.my=new A.bb("Setup","Other",11,"setup")
B.di=s([B.c6,B.c5,B.mx,B.mA,B.mv,B.mz,B.mB,B.mu,B.mt,B.ms,B.mw,B.my],A.Y("u<bb>"))
B.dD=new A.eh(0,"income")
B.kw=new A.eh(1,"payment")
B.dE=new A.eh(2,"move")
B.j8=s([B.dD,B.kw,B.dE],A.Y("u<eh>"))
B.bX=new A.fc(0,"personalLoan")
B.lK=new A.fc(1,"instalmentPlan")
B.j9=s([B.bX,B.lK],A.Y("u<fc>"))
B.eL=new A.bR(0,"tdsDeducted")
B.eM=new A.bR(1,"homeLoanInterest")
B.eN=new A.bR(2,"homeLoanPrincipal")
B.ja=s([B.eL,B.eM,B.eN,B.cw,B.cx],A.Y("u<bR>"))
B.kT=new A.t("\\b(DBS|POSB)\\b","DBS")
B.lj=new A.t("\\bUOB\\b|UNITED OVERSEAS","UOB")
B.lm=new A.t("\\bOCBC\\b","OCBC")
B.kZ=new A.t("\\bICICI\\b","ICICI")
B.ln=new A.t("\\bAXIS\\b","Axis")
B.lc=new A.t("\\bCITI(BANK)?\\b","Citibank")
B.kR=new A.t("\\bAMEX\\b|AMERICAN EXPRESS","American Express")
B.lb=new A.t("\\bHSBC\\b","HSBC")
B.jb=s([B.kT,B.lj,B.lm,B.kZ,B.ln,B.lc,B.kR,B.lb],t.M)
B.lp=new A.cf(0,"subscription")
B.lq=new A.cf(1,"commitment")
B.lr=new A.cf(2,"notRecurring")
B.jc=s([B.lp,B.lq,B.lr],A.Y("u<cf>"))
B.jd=s([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)
B.m=s([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3],t.t)
B.jf=s(["Policy","For","Number","Sum assured","Premium","Starts","Renews or ends"],t.s)
B.by=s([],t.k)
B.dl=s([],t.V)
B.a9=s([],t.A)
B.dk=s([],t.Y)
B.ji=s([],t.J)
B.jh=s([],t.bD)
B.A=s([],t.t)
B.aU=s([],t.zz)
B.jj=s([],t.l7)
B.b3=new A.bq(0,"committed")
B.aA=new A.bq(1,"essential")
B.bQ=new A.bq(2,"optional")
B.dm=s([B.b3,B.aA,B.bQ],A.Y("u<bq>"))
B.c_=new A.dL("All",0,"all")
B.m2=new A.dL("To file",1,"toFile")
B.m0=new A.dL("From alerts, not posted",2,"pending")
B.m1=new A.dL("Filed",3,"filed")
B.dn=s([B.c_,B.m2,B.m0,B.m1],A.Y("u<dL>"))
B.dp=s([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],t.t)
B.jq=s(["Account","Bank","Kind","Balance","As of","Statements","Missing months","Alerts"],t.s)
B.ml=new A.cB(0,"property")
B.mm=new A.cB(1,"cpf")
B.mn=new A.cB(2,"retirement")
B.mo=new A.cB(3,"investment")
B.mp=new A.cB(4,"other")
B.c1=new A.cB(5,"loan")
B.js=s([B.ml,B.mm,B.mn,B.mo,B.mp,B.c1],A.Y("u<cB>"))
B.ju=s(["No such draft"],t.s)
B.ls=new A.cg(0,"open")
B.lt=new A.cg(1,"share")
B.lu=new A.cg(2,"number")
B.jw=s([B.ls,B.lt,B.lu],A.Y("u<cg>"))
B.jy=s(["No such tenancy"],t.s)
B.dq=s([B.V,B.Z,B.x,B.o,B.y,B.a5],A.Y("u<c4>"))
B.dF=new A.ei(0,"paid")
B.kx=new A.ei(1,"none")
B.ky=new A.ei(2,"clear")
B.jz=s([B.dF,B.kx,B.ky],A.Y("u<ei>"))
B.dN=new A.aK(0,"uncategorised")
B.dO=new A.aK(1,"unclassified")
B.az=new A.aK(2,"unmatchedAlert")
B.v=new A.aK(3,"uncertainDuplicate")
B.bO=new A.aK(4,"inTransit")
B.b1=new A.aK(5,"statementTotalsMismatch")
B.H=new A.aK(6,"editConflict")
B.ac=new A.aK(7,"crossBookMismatch")
B.b2=new A.aK(8,"parseFailed")
B.f=new A.aK(9,"unknownOperation")
B.h=new A.aK(10,"malformedOperation")
B.bF=new A.aK(11,"rulesDisagree")
B.N=new A.aK(12,"uncertainPairing")
B.bG=new A.aK(13,"missingStatement")
B.bH=new A.aK(14,"suspiciousMessage")
B.bI=new A.aK(15,"paymentReminder")
B.bJ=new A.aK(16,"suspectedUnauthorised")
B.bK=new A.aK(17,"historyStartFromFolder")
B.ab=new A.aK(18,"documentCheck")
B.bL=new A.aK(19,"invoiceToCheck")
B.bM=new A.aK(20,"paymentFailed")
B.bN=new A.aK(21,"loanOnStatement")
B.jA=s([B.dN,B.dO,B.az,B.v,B.bO,B.b1,B.H,B.ac,B.b2,B.f,B.h,B.bF,B.N,B.bG,B.bH,B.bI,B.bJ,B.bK,B.ab,B.bL,B.bM,B.bN],A.Y("u<aK>"))
B.aV=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.bZ=new A.dK("Newest first",0,"newest")
B.lZ=new A.dK("Oldest first",1,"oldest")
B.m_=new A.dK("Largest first",2,"largest")
B.lY=new A.dK("Smallest first",3,"smallest")
B.dr=s([B.bZ,B.lZ,B.m_,B.lY],A.Y("u<dK>"))
B.mS=s(["passport"],t.s)
B.eu=new A.bJ("Passport",!0,0,"passport")
B.mG=s(["pr","visa","reentry","re-entry","permanent","resident"],t.s)
B.ev=new A.bJ("PR visa",!0,1,"prVisa")
B.mQ=s(["nric","ic","identity","card"],t.s)
B.es=new A.bJ("NRIC",!1,2,"nric")
B.mM=s(["fin","card"],t.s)
B.ex=new A.bJ("FIN card",!0,3,"fin")
B.mL=s(["driving","licence","license","dl"],t.s)
B.ew=new A.bJ("Driving licence",!0,5,"drivingLicence")
B.mI=s(["aadhaar","aadhar"],t.s)
B.er=new A.bJ("Aadhaar",!1,6,"aadhaar")
B.mR=s(["pan","card"],t.s)
B.et=new A.bJ("PAN",!1,7,"pan")
B.mJ=s(["birth","certificate"],t.s)
B.ey=new A.bJ("Birth certificate",!1,8,"birthCertificate")
B.jD=s([B.eu,B.ev,B.es,B.ex,B.ct,B.ew,B.er,B.et,B.ey,B.bd],A.Y("u<bJ>"))
B.aa=s([B.aw,B.ar,B.cW,B.cT,B.d0,B.d1,B.cY,B.br,B.cX,B.aN,B.bu,B.cU,B.cZ,B.d3,B.bt,B.d2,B.d_,B.cV,B.aM,B.af,B.aL,B.bs,B.ag,B.ah,B.aq,B.a4,B.a8,B.ap,B.a7,B.aO,B.bq],t.nB)
B.jW=new A.cS(0,"alerts")
B.jX=new A.cS(1,"statements")
B.jY=new A.cS(2,"biller")
B.jZ=new A.cS(3,"agency")
B.k_=new A.cS(4,"owner")
B.jH=s([B.jW,B.jX,B.jY,B.jZ,B.k_],A.Y("u<cS>"))
B.ak=new A.eo(0,"folderYear")
B.bR=new A.eo(1,"statement")
B.bS=new A.eo(2,"owner")
B.jJ=s([B.ak,B.bR,B.bS],A.Y("u<eo>"))
B.jK=s(["PAYMENT AT AXS","CARD PAYMENT","CC PAYMENT"],t.s)
B.jM=s(["REVERSAL","REV","REVERSED","REFUND","CASHBACK"],t.s)
B.jQ=s(["INTEREST CHARGE","ANNUAL FEE","LATE FEE","SERVICE TAX"],t.s)
B.dx=new A.bf(5,"loanDisbursement")
B.bC=new A.bf(7,"reimbursementOrClaimCredit")
B.dy=new A.bf(8,"depositHeldOrOwed")
B.Y=new A.bf(9,"advance")
B.X=new A.bf(10,"settlementOfAdvance")
B.aX=new A.bf(11,"liabilityHeld")
B.dw=new A.bf(12,"taxWithheld")
B.as=s([B.k,B.w,B.L,B.U,B.aY,B.dx,B.G,B.bC,B.dy,B.Y,B.X,B.aX,B.dw],t.dQ)
B.jR=s([B.w,B.L,B.G,B.bC],t.dQ)
B.mH=s(["hospitalisation","hospitalization","shield","medical","health"],t.s)
B.kB=new A.bA("Hospitalisation",0,"hospitalisation")
B.mO=s(["medical","health"],t.s)
B.kC=new A.bA("Medical",1,"medical")
B.mW=s(["term","life"],t.s)
B.kz=new A.bA("Term life",2,"termLife")
B.mY=s(["whole","life"],t.s)
B.kH=new A.bA("Whole life",3,"wholeLife")
B.mU=s(["retirement","annuity"],t.s)
B.kF=new A.bA("Retirement",4,"retirement")
B.mT=s(["personal","accident","pa"],t.s)
B.kI=new A.bA("Personal accident",5,"personalAccident")
B.mX=s(["travel"],t.s)
B.kG=new A.bA("Travel",6,"travel")
B.mN=s(["home","house","fire"],t.s)
B.kA=new A.bA("Home",7,"home")
B.mP=s(["motor","car"],t.s)
B.kD=new A.bA("Motor",8,"motor")
B.kE=new A.bA("Other",9,"other")
B.mV=s(["security","bond"],t.s)
B.kJ=new A.bA("Security bond",10,"securityBond")
B.jT=s([B.kB,B.kC,B.kz,B.kH,B.kF,B.kI,B.kG,B.kA,B.kD,B.kE,B.kJ],A.Y("u<bA>"))
B.eJ=new A.di(2,"none")
B.eK=new A.di(3,"clear")
B.jV=s([B.cu,B.cv,B.eJ,B.eK],A.Y("u<di>"))
B.ds=new A.fM(null,null,null,null,null,null,null,null,null)
B.dt=new A.cc([B.V,"savings",B.Z,"current",B.x,"card",B.o,"loan",B.a5,"retirement"],t.ip)
B.ke={SG:0,IN:1,personal:2}
B.ld=new A.t("acra-annual-return","ACRA annual return")
B.kW=new A.t("eci","Estimated chargeable income (ECI)")
B.l6=new A.t("form-c","Form C-S or C")
B.l9=new A.t("cpf","Employee CPF")
B.la=new A.t("ir8a","IR8A")
B.dJ=new A.t("gst","GST, if registered")
B.jx=s([B.ld,B.kW,B.l6,B.l9,B.la,B.dJ],t.M)
B.l4=new A.t("roc","ROC filings")
B.kV=new A.t("itr","Income tax return (ITR)")
B.kQ=new A.t("advance-tax","Advance tax")
B.lk=new A.t("tds","TDS")
B.lg=new A.t("pf-esi","PF and ESI, if applicable")
B.iW=s([B.l4,B.kV,B.kQ,B.lk,B.dJ,B.lg],t.M)
B.l2=new A.t("iras-opens","IRAS filing opens")
B.l8=new A.t("iras-due","IRAS filing due")
B.l0=new A.t("noa","Notice of assessment")
B.ir=s([B.l2,B.l8,B.l0],t.M)
B.k0=new A.aY(B.ke,[B.jx,B.iW,B.ir],A.Y("aY<e,z<+(e,e)>>"))
B.kd={SGD:0,INR:1,USD:2}
B.k1=new A.aY(B.kd,["S$","\u20b9","US$"],t.hD)
B.k2=new A.cc([16,10,24,12,32,14],A.Y("cc<c,c>"))
B.kb={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}
B.k3=new A.aY(B.kb,[1,2,3,4,5,6,7,8,9,10,11,12],t.hq)
B.kf={SGD:0,INR:1,USD:2,EUR:3,GBP:4,AUD:5,MYR:6,JPY:7}
B.e=new A.aY(B.kf,[2,2,2,2,2,2,2,0],t.hq)
B.ai={}
B.k5=new A.aY(B.ai,[],A.Y("aY<e,hC>"))
B.k4=new A.aY(B.ai,[],A.Y("aY<e,ep>"))
B.dv=new A.aY(B.ai,[],t.hD)
B.k7=new A.aY(B.ai,[],A.Y("aY<e,a_?>"))
B.du=new A.aY(B.ai,[],A.Y("aY<bq?,v>"))
B.k6=new A.aY(B.ai,[],A.Y("aY<e?,v>"))
B.k8=new A.cc([B.V,"Savings",B.Z,"Current",B.x,"Credit card",B.o,"Loan",B.y,"Cash",B.a5,"Retirement"],t.ip)
B.ax=new A.cc([B.k,"Expense",B.w,"Income",B.L,"Own-account transfer",B.U,"Card bill payment",B.aY,"Loan instalment",B.dx,"Loan disbursement",B.G,"Refund or reversal",B.bC,"Reimbursement or claim credit",B.dy,"Deposit held or owed",B.Y,"Advance",B.X,"Settlement of an advance",B.aX,"Liability held",B.dw,"Tax withheld"],A.Y("cc<bf,e>"))
B.k9=new A.cc([B.cy,"Scheduled",B.cz,"Due soon",B.cA,"Due today",B.cB,"Waiting",B.bi,"Paid",B.cC,"Part paid",B.cD,"Overdue",B.bj,"Confirmed by you"],A.Y("cc<cd,e>"))
B.b_=new A.ef(0,"signedOut")
B.bD=new A.ef(1,"signedIn")
B.bE=new A.ef(2,"waiting")
B.at=new A.ef(3,"reading")
B.dz=new A.ef(4,"removed")
B.kt=new A.eg(0,"matched")
B.dA=new A.eg(1,"different")
B.dB=new A.eg(2,"missing")
B.ku=new A.eg(3,"waiting")
B.kv=new A.eg(4,"noAccount")
B.aj=new A.io(0,"pending")
B.dG=new A.io(1,"posted")
B.kP=new A.t("","No")
B.kS=new A.t("Flag","You do not recognise this charge")
B.kU=new A.t("","Any")
B.dH=new A.t("","Category\u2026")
B.dI=new A.t("","None")
B.l3=new A.t("","No account (saved not tracked)")
B.l5=new A.t(null,"the paying account is a savings or current account")
B.l7=new A.t("-","No category")
B.dK=new A.t("","Not set")
B.le=new A.t("me","Me")
B.lf=new A.t("","All accounts")
B.li=new A.t(null,"Enter only the last 4 digits. SanthIQ never stores a full card or account number.")
B.ll=new A.t(1,0.25)
B.lo=new A.t("yes","Yes")
B.b0=new A.fU(0,"draft")
B.dL=new A.fU(1,"reconciled")
B.dM=new A.fU(2,"finalised")
B.kc={set:0,use:1,show:2,clear:3}
B.ly=new A.cH(B.kc,4,t.d)
B.ki={sms:0,email:1}
B.dP=new A.cH(B.ki,2,t.d)
B.kj={secretId:0,action:1,atUtc:2}
B.lz=new A.cH(B.kj,3,t.d)
B.kh={recordId:0,action:1,atUtc:2}
B.lA=new A.cH(B.kh,3,t.d)
B.bP=new A.dh([B.j,B.a2,B.r,B.aH,B.an,B.u,B.aI,B.I,B.M,B.ao,B.a3,B.ad,B.F,B.a_,B.am,B.aG,B.bh],A.Y("dh<aG>"))
B.lB=new A.cH(B.ai,0,t.d)
B.kg={bank:0,loan:1,loans:2,card:3,savings:4,account:5,the:6,and:7,ltd:8,limited:9,berhad:10}
B.lC=new A.cH(B.kg,11,t.d)
B.dQ=new A.dh([B.aq,B.a4,B.a8,B.ap,B.a7],A.Y("dh<a9>"))
B.lD=new A.dh([B.cd,B.ce,B.cf,B.b8,B.ch],A.Y("dh<c6>"))
B.lH=new A.h_(B.bS,null,null,null)
B.dR=new A.fe(0,"waiting")
B.bY=new A.fe(1,"approved")
B.dS=new A.fe(2,"removed")
B.lR=new A.dI(0,"join")
B.lS=new A.dI(1,"grant")
B.lT=new A.dI(2,"roster")
B.lU=new A.dI(3,"segment")
B.lV=new A.dI(4,"submission")
B.lW=new A.dI(5,"secret")
B.lX=new A.ci("personal",null,null,null,"",B.c_,null,B.bZ,0)
B.m3=A.by("eK")
B.m4=A.by("hB")
B.m5=A.by("hD")
B.m6=A.by("By")
B.m7=A.by("Gh")
B.m8=A.by("Gi")
B.dT=A.by("e7")
B.m9=A.by("Gm")
B.ma=A.by("kl")
B.mb=A.by("Gn")
B.mc=A.by("a_")
B.md=A.by("bl")
B.me=A.by("el")
B.mf=A.by("cV")
B.mg=A.by("Ap")
B.mh=A.by("tB")
B.mi=A.by("H8")
B.dU=A.by("dO")
B.mj=new A.iF(!1)
B.mk=new A.iF(!0)
B.mq=new A.h5(0,"reconciled")
B.mr=new A.h5(1,"recorded")
B.c2=new A.h5(2,"stated")
B.b4=new A.bN(0,"certain")
B.c3=new A.bN(1,"uncertain")
B.c4=new A.hb(1,"floor")
B.dV=new A.hb(2,"ceil")
B.b5=new A.hb(3,"halfUp")})();(function staticFields(){$.uc=null
$.c2=A.d([],A.Y("u<a_>"))
$.C7=null
$.Bv=null
$.Bu=null
$.DK=null
$.Dw=null
$.E9=null
$.wP=null
$.xz=null
$.AU=null
$.ui=A.d([],A.Y("u<z<a_>?>"))
$.hf=null
$.jb=null
$.jc=null
$.AG=!1
$.ai=B.T
$.CB=null
$.CC=null
$.CD=null
$.CE=null
$.Aq=A.tW("_lastQuoRemDigits")
$.Ar=A.tW("_lastQuoRemUsed")
$.iI=A.tW("_lastRemUsed")
$.As=A.tW("_lastRem_nsh")
$.t6=A.w(t.N,A.Y("rZ"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"LB","Eo",()=>A.xp("_$dart_dartClosure"))
s($,"LA","B5",()=>A.xp("_$dart_dartClosure_dartJSInterop"))
s($,"Mv","jk",()=>A.oF(0))
s($,"Nj","FB",()=>A.d([new J.ko()],A.Y("u<is>")))
s($,"Mb","EM",()=>A.dN(A.tA({
toString:function(){return"$receiver$"}})))
s($,"Mc","EN",()=>A.dN(A.tA({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Md","EO",()=>A.dN(A.tA(null)))
s($,"Me","EP",()=>A.dN(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Mh","ES",()=>A.dN(A.tA(void 0)))
s($,"Mi","ET",()=>A.dN(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Mg","ER",()=>A.dN(A.Ct(null)))
s($,"Mf","EQ",()=>A.dN(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Mk","EV",()=>A.dN(A.Ct(void 0)))
s($,"Mj","EU",()=>A.dN(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Ml","Bb",()=>A.Hc())
s($,"MA","F3",()=>A.oF(4096))
s($,"My","F1",()=>new A.ut().$0())
s($,"Mz","F2",()=>new A.us().$0())
s($,"Mn","EX",()=>A.GD(A.aF(A.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Mm","EW",()=>A.oF(0))
s($,"Mu","bj",()=>A.h7(0))
s($,"Ms","bG",()=>A.h7(1))
s($,"Mt","zR",()=>A.h7(2))
s($,"Mq","Bd",()=>$.bG().W(0))
s($,"Mo","Bc",()=>A.h7(1e4))
r($,"Mr","EZ",()=>A.C("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Mp","EY",()=>A.oF(8))
s($,"Mw","F_",()=>A.C("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Mx","F0",()=>typeof URLSearchParams=="function")
s($,"LF","Es",()=>A.C("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:[.,](\\d+))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1))
s($,"MP","mq",()=>A.B1(B.mc))
s($,"LQ","jj",()=>{var q=new A.lN(A.GB(8))
q.ik()
return q})
s($,"LK","eH",()=>A.G2(B.ka.ga6(A.GE(A.aF(A.d([1],t.t)))),0,null).getInt8(0)===1?B.a1:B.au)
s($,"Nd","Fw",()=>A.GG(A.d([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],t.t)))
s($,"MG","F8",()=>A.aR(255))
s($,"Nu","e_",()=>A.AP(A.Dc(A.Eg(),"crypto"),"subtle",t.K)!=null&&A.Gs(A.AP(A.Dc(A.Eg(),"window"),"isSecureContext",t.y)))
s($,"Lv","Em",()=>A.G_()?new A.mH(null):A.Ga(null))
s($,"Lw","zO",()=>({name:A.An("Ed25519")}))
s($,"Lx","zP",()=>({name:A.An("X25519")}))
s($,"Lz","En",()=>$.Em())
r($,"Ly","b5",()=>$.En())
s($,"M2","EE",()=>$.EF())
s($,"M3","EF",()=>A.GR())
s($,"LC","Ep",()=>A.GF(256))
s($,"N8","Fr",()=>A.aR(65535))
s($,"LJ","zQ",()=>new A.nf().$0())
s($,"M0","ED",()=>{var q=A.f8(null),p=q.a
p.$flags&2&&A.B(p)
if(0>=p.length)return A.a(p,0)
p[0]=0
return q})
s($,"LZ","B9",()=>{var q=A.f8(null),p=q.a
p.$flags&2&&A.B(p)
if(0>=p.length)return A.a(p,0)
p[0]=1
return q})
s($,"M_","EC",()=>{var q=A.f8(null),p=q.a
p.$flags&2&&A.B(p)
if(0>=p.length)return A.a(p,0)
p[0]=2
return q})
s($,"LX","EA",()=>{var q=A.f8(null)
q.hn("19681161376707505956807079304988542015446066515923890162744021073123829784752")
return q})
s($,"LT","B7",()=>{var q=A.f8(null)
q.hn("37095705934669439343138083508754565189542113879843219016388785533085940283555")
return q})
s($,"LW","Ez",()=>{var q,p=A.f8(null),o=p.a
o.$flags&2&&A.B(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65534
B.aZ.aI(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=4095
return p})
s($,"LU","mp",()=>{var q,p=A.f8(null),o=p.a
o.$flags&2&&A.B(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65517
B.aZ.aI(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=32767
return p})
s($,"LV","B8",()=>{var q,p=A.f8(null),o=p.a
B.aZ.aY(o,0,$.mp().a)
if(0>=o.length)return A.a(o,0)
q=o[0]
o.$flags&2&&A.B(o)
o[0]=q-2
return p})
s($,"LY","EB",()=>$.zR().aR(255).a8(0,A.aR(19)))
s($,"M1","Ba",()=>A.FX("7237005577332262213973186563042994240857116359379907606001950938285454250989"))
s($,"LE","Er",()=>new A.n6().$0())
s($,"LD","Eq",()=>new A.n5().$0())
s($,"Nl","FD",()=>{A.GI(B.A)
return B.dU})
s($,"MR","Bg",()=>$.bj())
s($,"MT","jl",()=>$.bG())
s($,"MW","Bh",()=>$.zR())
s($,"MX","Fg",()=>A.aR(5))
s($,"MU","cG",()=>A.aR(10))
s($,"Nh","Bj",()=>A.dy(A.aR(10),A.aR(1)))
s($,"LG","Et",()=>A.C("^([+-]?\\d*)(?:\\.(\\d*))?(?:[eE]([+-]?\\d+))?$",!0,!1))
s($,"LI","M",()=>A.A1(0))
s($,"LH","Eu",()=>A.A1(1))
s($,"MS","mr",()=>$.bj())
s($,"MV","jm",()=>$.bG())
s($,"N9","Fs",()=>A.C("^[A-Z][A-Z0-9]*(-[A-Z0-9]+)*-[0-9]{4}$",!0,!1))
s($,"MH","F9",()=>A.C("^CASH-[A-Z]{3}$",!0,!1))
s($,"MI","eI",()=>A.C("\\p{Nd}",!0,!0))
s($,"N7","Fq",()=>A.C("\\d{9,}",!0,!1))
s($,"MZ","Fi",()=>A.C("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"Na","Ft",()=>A.C("^\\d{9}$",!0,!1))
s($,"Nf","Fy",()=>A.C("^[0-9X]{4,20}$",!0,!1))
s($,"MY","Fh",()=>A.d([A.C("\\b[A-Z]\\d{7}[A-Z]\\b",!0,!1),A.C("\\b[A-Z]{5}\\d{4}[A-Z]\\b",!0,!1),A.C("\\b[A-Z]\\d{7,8}(?!\\d)",!0,!1)],A.Y("u<rZ>")))
s($,"MJ","Fa",()=>A.C("\\d(?:[\\s.\\-\\u001F]*\\d)*",!0,!1))
s($,"Ni","FA",()=>A.C("(?<!\\d)\\d{4}-\\d{2}-\\d{2}(?!\\d)|(?<![\\d.])\\d{1,2}([./-])\\d{1,2}\\1\\d{4}(?!\\d)|(?<!\\d)\\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec),? \\d{4}(?!\\d)|(?<![\\d.])\\d{1,9}\\.\\d{1,2}(?![\\d]|\\.\\d)|(?:S\\$|SGD|INR|Rs\\.?|\\$|\u20b9) ?\\d{1,8}(?!\\d|[\\s.\\-\\u001F]+\\d)",!0,!1))
s($,"N0","Fl",()=>A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Nc","Fv",()=>A.C("^(\\d{4})-(\\d{2})$",!0,!1))
s($,"LS","Ey",()=>A.C("^[0-9a-f]{64}$",!0,!1))
s($,"MC","F5",()=>A.Bs())
s($,"Nm","FE",()=>B.E.M("santhiq/master/v1"))
s($,"LM","Ew",()=>new A.k6(new WeakMap(),A.Y("k6<+(c,c,c,c)>")))
s($,"LN","B6",()=>A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"LO","Ex",()=>A.C("^\\d{4}$",!0,!1))
s($,"N6","Bi",()=>A.C("\\d{9,}",!0,!1))
s($,"N_","Fj",()=>A.C("INSTALM\\s+(\\d{1,3})/(\\d{1,3})",!0,!1))
s($,"MB","F4",()=>A.C("^[^@\\s]+@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"MM","Fd",()=>A.C("^@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"N1","Fk",()=>A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Nr","FI",()=>A.C("^event-[a-p]{32}$",!0,!1))
s($,"Nk","FC",()=>A.C("^([01]\\d|2[0-3]):[0-5]\\d$",!0,!1))
s($,"Nb","Fu",()=>A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"N4","Fo",()=>A.C("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Nt","FJ",()=>A.C("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"MO","Fe",()=>A.C("^\\d{2}/\\d{2}$",!0,!1))
s($,"N5","Fp",()=>A.C("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Np","FH",()=>A.A1(10))
s($,"Ns","Bk",()=>A.C("\\{(?:fy|yy[/-]yy|yyyy[/-]yy|yyyy[/-]yyyy)\\}",!0,!1))
s($,"Ne","Fx",()=>A.C("^\\+?[0-9]{3,15}$",!0,!1))
s($,"ME","F6",()=>A.C("^[A-Z0-9][A-Z0-9 ._&-]{0,14}$",!0,!1))
s($,"MK","Fb",()=>A.C("^[A-Z]{2}-(?=[A-Z0-9]{3})",!0,!1))
s($,"ML","Fc",()=>A.C("(?<=[A-Z0-9]{3})-[A-Z]$",!0,!1))
s($,"MD","Be",()=>A.Bs())
s($,"MN","Bf",()=>A.Ge())
s($,"Nn","FF",()=>A.Cw())
s($,"MQ","Ff",()=>A.Gk(A.Gl(),32))
s($,"No","FG",()=>A.Cw())
s($,"M5","EG",()=>A.C("^e-[0-9a-f]{16}\\.sqe$",!0,!1))
s($,"M6","EH",()=>A.C("^g-(dev[0-9a-f]{16})-(\\d{6})\\.sqg$",!0,!1))
s($,"M7","EI",()=>A.C("^r-(\\d{8})\\.sqr$",!0,!1))
s($,"M9","EK",()=>A.C("^s-(\\d{4})-(\\d{10})-(\\d{10})\\.sqs$",!0,!1))
s($,"Ma","EL",()=>A.C("^o-(dev[0-9a-f]{16})-(\\d{10})\\.sqo$",!0,!1))
s($,"M8","EJ",()=>A.C("^x-(dev[0-9a-f]{16})-(\\d{10})\\.sqx$",!0,!1))
s($,"Ng","Fz",()=>A.C("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"N2","Fm",()=>A.C("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"LL","Ev",()=>A.A5(A.R(["name",A.An("AES-GCM"),"length",A.GJ(256)],t.N,t.K)))
s($,"N3","Fn",()=>A.C("\\b(\\d{4})-(\\d{2})-(\\d{2})\\b",!0,!1))
s($,"MF","F7",()=>A.C("(?:SGD|INR|USD|S\\$|\u20b9|US\\$)\\s?-?[\\d,]+(?:\\.\\d+)?",!0,!1))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ed,ArrayBuffer:A.fP,ArrayBufferView:A.ic,DataView:A.ia,Float32Array:A.kA,Float64Array:A.kB,Int16Array:A.kC,Int32Array:A.ib,Int8Array:A.kD,Uint16Array:A.id,Uint32Array:A.ie,Uint8ClampedArray:A.ig,CanvasPixelArray:A.ig,Uint8Array:A.f3})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bt.$nativeSuperclassTag="ArrayBufferView"
A.iO.$nativeSuperclassTag="ArrayBufferView"
A.iP.$nativeSuperclassTag="ArrayBufferView"
A.ee.$nativeSuperclassTag="ArrayBufferView"
A.iQ.$nativeSuperclassTag="ArrayBufferView"
A.iR.$nativeSuperclassTag="ArrayBufferView"
A.bX.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jf
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()