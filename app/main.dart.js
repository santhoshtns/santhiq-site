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
if(a[b]!==s){A.O0(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.b(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.CP(b)
return new s(c,this)}:function(){if(s===null)s=A.CP(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.CP(a).prototype
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
D1(a,b,c,d){return{i:a,p:b,e:c,x:d}},
z4(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.CY==null){A.MS()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.k(A.j4("Return interceptor for "+A.i(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.v3
if(o==null)o=$.v3=A.z3(n)
p=q[o]}if(p!=null)return p
p=A.N4(a)
if(p!=null)return p
if(typeof a=="function")return B.fB
s=Object.getPrototypeOf(a)
if(s==null)return B.e_
if(s===Object.prototype)return B.e_
if(typeof q=="function"){o=$.v3
if(o==null)o=$.v3=A.z3(n)
Object.defineProperty(q,o,{value:B.cn,enumerable:false,writable:true,configurable:true})
return B.cn}return B.cn},
E_(a,b){if(a<0||a>4294967295)throw A.k(A.aM(a,0,4294967295,"length",null))
return J.IR(new Array(a),b)},
E0(a,b){if(a<0)throw A.k(A.b2("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.i("u<0>"))},
DZ(a,b){if(a<0)throw A.k(A.b2("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.i("u<0>"))},
IR(a,b){var s=A.b(a,b.i("u<0>"))
s.$flags=1
return s},
IS(a,b){var s=t.hO
return J.BS(s.a(a),s.a(b))},
E1(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
IU(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.E1(r))break;++b}return b},
IV(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.E1(q))break}return b},
eW(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ip.prototype
return J.kQ.prototype}if(typeof a=="string")return J.dI.prototype
if(a==null)return J.h4.prototype
if(typeof a=="boolean")return J.kP.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.h6.prototype
if(typeof a=="bigint")return J.h5.prototype
return a}if(a instanceof A.a0)return a
return J.z4(a)},
an(a){if(typeof a=="string")return J.dI.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.h6.prototype
if(typeof a=="bigint")return J.h5.prototype
return a}if(a instanceof A.a0)return a
return J.z4(a)},
aZ(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.h6.prototype
if(typeof a=="bigint")return J.h5.prototype
return a}if(a instanceof A.a0)return a
return J.z4(a)},
ML(a){if(typeof a=="number")return J.ff.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.eN.prototype
return a},
FV(a){if(typeof a=="number")return J.ff.prototype
if(typeof a=="string")return J.dI.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.eN.prototype
return a},
CS(a){if(typeof a=="string")return J.dI.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.eN.prototype
return a},
hJ(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dJ.prototype
if(typeof a=="symbol")return J.h6.prototype
if(typeof a=="bigint")return J.h5.prototype
return a}if(a instanceof A.a0)return a
return J.z4(a)},
I9(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.FV(a).B(a,b)},
Y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eW(a).J(a,b)},
Ia(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ML(a).aa(a,b)},
at(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.N_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.an(a).h(a,b)},
Ds(a,b,c){return J.aZ(a).j(a,b,c)},
bV(a,b){return J.aZ(a).m(a,b)},
Dt(a,b){return J.CS(a).aM(a,b)},
Ib(a,b,c){return J.CS(a).d7(a,b,c)},
Du(a,b){return J.aZ(a).M(a,b)},
jR(a){return J.hJ(a).h8(a)},
jS(a,b,c){return J.hJ(a).dP(a,b,c)},
mQ(a,b,c){return J.hJ(a).eS(a,b,c)},
Ic(a){return J.hJ(a).h9(a)},
br(a,b,c){return J.hJ(a).cD(a,b,c)},
dh(a,b){return J.aZ(a).dR(a,b)},
BS(a,b){return J.FV(a).l(a,b)},
Dv(a,b){return J.an(a).u(a,b)},
jT(a,b){return J.aZ(a).ag(a,b)},
Id(a,b,c,d){return J.aZ(a).aO(a,b,c,d)},
Ie(a,b,c,d){return J.aZ(a).a4(a,b,c,d)},
BT(a){return J.aZ(a).gY(a)},
c0(a){return J.eW(a).gP(a)},
jU(a){return J.an(a).ga5(a)},
Dw(a){return J.an(a).gaq(a)},
R(a){return J.aZ(a).gA(a)},
BU(a){return J.aZ(a).gak(a)},
aE(a){return J.an(a).gq(a)},
If(a){return J.eW(a).gaz(a)},
Ig(a,b,c){return J.aZ(a).dt(a,b,c)},
Dx(a,b,c){return J.aZ(a).cN(a,b,c)},
Ih(a,b,c){return J.CS(a).ht(a,b,c)},
Ii(a,b){return J.an(a).sq(a,b)},
Dy(a,b,c){return J.aZ(a).b1(a,b,c)},
Ij(a,b,c,d,e){return J.aZ(a).aJ(a,b,c,d,e)},
hU(a,b){return J.aZ(a).ba(a,b)},
mR(a,b){return J.aZ(a).D(a,b)},
BV(a,b,c){return J.aZ(a).aK(a,b,c)},
mS(a,b){return J.aZ(a).bh(a,b)},
Ik(a){return J.aZ(a).hL(a)},
Il(a){return J.aZ(a).eb(a)},
hV(a){return J.eW(a).k(a)},
mT(a,b){return J.aZ(a).bN(a,b)},
kN:function kN(){},
kP:function kP(){},
h4:function h4(){},
iq:function iq(){},
eu:function eu(){},
lf:function lf(){},
eN:function eN(){},
dJ:function dJ(){},
h5:function h5(){},
h6:function h6(){},
u:function u(a){this.$ti=a},
kO:function kO(){},
o2:function o2(a){this.$ti=a},
f2:function f2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ff:function ff(){},
ip:function ip(){},
kQ:function kQ(){},
dI:function dI(){}},A={C9:function C9(){},
fP(a,b,c){if(t.he.b(a))return new A.jd(a,b.i("@<0>").a3(c).i("jd<1,2>"))
return new A.f5(a,b.i("@<0>").a3(c).i("f5<1,2>"))},
E5(a){return new A.fk("Field '"+a+"' has been assigned during initialization.")},
E6(a){return new A.fk("Field '"+a+"' has not been initialized.")},
IX(a){return new A.fk("Field '"+a+"' has already been initialized.")},
G_(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
e1(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ul(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cP(a,b,c){return a},
CZ(a){var s,r
for(s=$.ca.length,r=0;r<s;++r)if(a===$.ca[r])return!0
return!1},
bz(a,b,c,d){A.bb(b,"start")
if(c!=null){A.bb(c,"end")
if(b>c)A.f(A.aM(b,0,c,"start",null))}return new A.fv(a,b,c,d.i("fv<0>"))},
Eb(a,b,c,d){if(t.he.b(a))return new A.ie(a,b,c.i("@<0>").a3(d).i("ie<1,2>"))
return new A.c4(a,b,c.i("@<0>").a3(d).i("c4<1,2>"))},
Ew(a,b,c){var s="takeCount"
A.ek(b,s,t.S)
A.bb(b,s)
if(t.he.b(a))return new A.ig(a,b,c.i("ig<0>"))
return new A.fx(a,b,c.i("fx<0>"))},
Es(a,b,c){var s="count"
if(t.he.b(a)){A.ek(b,s,t.S)
A.bb(b,s)
return new A.h0(a,b,c.i("h0<0>"))}A.ek(b,s,t.S)
A.bb(b,s)
return new A.dV(a,b,c.i("dV<0>"))},
bE(a,b,c){return new A.f9(a,b,c.i("f9<0>"))},
ai(){return new A.dY("No element")},
DY(){return new A.dY("Too many elements")},
DX(){return new A.dY("Too few elements")},
lx(a,b,c,d,e){if(c-b<=32)A.Jq(a,b,c,d,e)
else A.Jp(a,b,c,d,e)},
Jq(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.an(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.b8()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
Jp(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.C(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.C(a4+a5,2),f=g-j,e=g+j,d=J.an(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b8()
if(a2>0){s=a1
a1=a0
a0=s}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.Y(a6.$2(b,a0),0)
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
A.lx(a3,a4,r-2,a6,a7)
A.lx(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.Y(a6.$2(d.h(a3,r),b),0))++r
while(J.Y(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.lx(a3,r,q,a6,a7)}else A.lx(a3,r,q,a6,a7)},
jc:function jc(a){this.a=0
this.b=a},
hx:function hx(a){this.a=0
this.b=a},
eO:function eO(){},
i2:function i2(a,b){this.a=a
this.$ti=b},
f5:function f5(a,b){this.a=a
this.$ti=b},
jd:function jd(a,b){this.a=a
this.$ti=b},
jb:function jb(){},
uL:function uL(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.$ti=b},
f6:function f6(a,b){this.a=a
this.$ti=b},
nh:function nh(a,b){this.a=a
this.b=b},
ng:function ng(a){this.a=a},
fk:function fk(a){this.a=a},
fR:function fR(a){this.a=a},
u3:function u3(){},
T:function T(){},
a2:function a2(){},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a7:function a7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ie:function ie(a,b,c){this.a=a
this.b=b
this.$ti=c},
iA:function iA(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ah:function ah(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(a,b,c){this.a=a
this.b=b
this.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.$ti=c},
j2:function j2(a,b,c){this.a=a
this.b=b
this.$ti=c},
dV:function dV(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b,c){this.a=a
this.b=b
this.$ti=c},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ih:function ih(a){this.$ti=a},
ii:function ii(a){this.$ti=a},
j8:function j8(a,b){this.a=a
this.$ti=b},
j9:function j9(a,b){this.a=a
this.$ti=b},
pg:function pg(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b){this.a=a
this.b=null
this.$ti=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.$ti=c},
f9:function f9(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aV:function aV(){},
cs:function cs(){},
hs:function hs(){},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
jD:function jD(){},
a5(a,b,c){var s,r,q,p,o,n,m,l=A.d1(a.gah(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.l)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.d1(a.gT(),!0,c)
m=new A.aU(q,n,b.i("@<0>").a3(c).i("aU<1,2>"))
m.$keys=l
return m}return new A.i3(A.J_(a,b,c),b.i("@<0>").a3(c).i("i3<1,2>"))},
DJ(){throw A.k(A.aB("Cannot modify unmodifiable Map"))},
DK(){throw A.k(A.aB("Cannot modify constant Set"))},
GF(a){var s=A.GE(a)
if(s!=null)return s
return"minified:"+a},
N_(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.hV(a)
return s},
c7(a){var s,r=$.Ee
if(r==null)r=$.Ee=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
li(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.a(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.k(A.aM(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
lh(a){var s,r,q,p
if(a instanceof A.a0)return A.bT(A.aT(a),null)
s=J.eW(a)
if(s===B.fy||s===B.fC||t.qF.b(a)){r=B.cE(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bT(A.aT(a),null)},
Eh(a){var s,r,q
if(a==null||typeof a=="number"||A.ef(a))return J.hV(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bN)return a.k(0)
if(a instanceof A.bk)return a.h3(!0)
s=$.I_()
for(r=0;r<1;++r){q=s[r].n2(a)
if(q!=null)return q}return"Instance of '"+A.lh(a)+"'"},
Ed(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Je(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r){q=a[r]
if(!A.cu(q))throw A.k(A.eV(q))
if(q<=65535)B.a.m(p,q)
else if(q<=1114111){B.a.m(p,55296+(B.d.ao(q-65536,10)&1023))
B.a.m(p,56320+(q&1023))}else throw A.k(A.eV(q))}return A.Ed(p)},
Ei(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.cu(q))throw A.k(A.eV(q))
if(q<0)throw A.k(A.eV(q))
if(q>65535)return A.Je(a)}return A.Ed(a)},
Jf(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aX(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.ao(s,10)|55296)>>>0,s&1023|56320)}}throw A.k(A.aM(a,0,1114111,null,null))},
Ek(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.d.R(h,1000)
g+=B.d.C(h-s,1000)
r=i?Date.UTC(a,p,c,d,e,f,g):new Date(a,p,c,d,e,f,g).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
c6(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
b1(a){return a.c?A.c6(a).getUTCFullYear()+0:A.c6(a).getFullYear()+0},
b5(a){return a.c?A.c6(a).getUTCMonth()+1:A.c6(a).getMonth()+1},
av(a){return a.c?A.c6(a).getUTCDate()+0:A.c6(a).getDate()+0},
Ch(a){return a.c?A.c6(a).getUTCHours()+0:A.c6(a).getHours()+0},
Ci(a){return a.c?A.c6(a).getUTCMinutes()+0:A.c6(a).getMinutes()+0},
Eg(a){return a.c?A.c6(a).getUTCSeconds()+0:A.c6(a).getSeconds()+0},
Ef(a){return a.c?A.c6(a).getUTCMilliseconds()+0:A.c6(a).getMilliseconds()+0},
Jd(a){var s=a.$thrownJsError
if(s==null)return null
return A.eX(s)},
Ej(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.b4(a,s)
a.$thrownJsError=s
s.stack=b.k(0)}},
CX(a){throw A.k(A.eV(a))},
a(a,b){if(a==null)J.aE(a)
throw A.k(A.yg(a,b))},
yg(a,b){var s,r="index"
if(!A.cu(b))return new A.ce(!0,b,r,null)
s=J.aE(a)
if(b<0||b>=s)return A.nV(b,s,a,r)
return A.tH(b,r)},
Mz(a,b,c){if(a>c)return A.aM(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aM(b,a,c,"end",null)
return new A.ce(!0,b,"end",null)},
eV(a){return new A.ce(!0,a,null,null)},
k(a){return A.b4(a,new Error())},
b4(a,b){var s
if(a==null)a=new A.e4()
b.dartException=a
s=A.O2
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
O2(){return J.hV(this.dartException)},
f(a,b){throw A.b4(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.KG(a,b,c),s)},
KG(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.j6("'"+s+"': Cannot "+o+" "+l+k+n)},
l(a){throw A.k(A.aI(a))},
e5(a){var s,r,q,p,o,n
a=A.hO(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.uq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ur(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Ez(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Ca(a,b){var s=b==null,r=s?null:b.method
return new A.kR(a,r,s?null:b.receiver)},
aw(a){var s
if(a==null)return new A.pi(a)
if(a instanceof A.ij){s=a.a
return A.eZ(a,s==null?A.df(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eZ(a,a.dartException)
return A.LB(a)},
eZ(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
LB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.ao(r,16)&8191)===10)switch(q){case 438:return A.eZ(a,A.Ca(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.eZ(a,new A.iM())}}if(a instanceof TypeError){p=$.H7()
o=$.H8()
n=$.H9()
m=$.Ha()
l=$.Hd()
k=$.He()
j=$.Hc()
$.Hb()
i=$.Hg()
h=$.Hf()
g=p.bz(s)
if(g!=null)return A.eZ(a,A.Ca(A.c(s),g))
else{g=o.bz(s)
if(g!=null){g.method="call"
return A.eZ(a,A.Ca(A.c(s),g))}else if(n.bz(s)!=null||m.bz(s)!=null||l.bz(s)!=null||k.bz(s)!=null||j.bz(s)!=null||m.bz(s)!=null||i.bz(s)!=null||h.bz(s)!=null){A.c(s)
return A.eZ(a,new A.iM())}}return A.eZ(a,new A.lK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.j0()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eZ(a,new A.ce(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.j0()
return a},
eX(a){var s
if(a instanceof A.ij)return a.b
if(a==null)return new A.jr(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jr(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
D5(a){if(a==null)return J.c0(a)
if(typeof a=="object")return A.c7(a)
return J.c0(a)},
Ml(a){if(typeof a=="number")return B.G.gP(a)
if(a instanceof A.ms)return A.c7(a)
if(a instanceof A.bk)return a.gP(a)
return A.D5(a)},
FU(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
MG(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
KZ(a,b,c,d,e,f){t.BO.a(a)
switch(A.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.k(new A.uP("Unsupported number of arguments for wrapped closure"))},
fI(a,b){var s=a.$identity
if(!!s)return s
s=A.Mn(a,b)
a.$identity=s
return s},
Mn(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.KZ)},
IA(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lC().constructor.prototype):Object.create(new A.fN(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.DG(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Iw(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.DG(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Iw(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.k("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ip)}throw A.k("Error in functionType of tearoff")},
Ix(a,b,c,d){var s=A.DD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
DG(a,b,c,d){if(c)return A.Iz(a,b,d)
return A.Ix(b.length,d,a,b)},
Iy(a,b,c,d){var s=A.DD,r=A.Iq
switch(b?-1:a){case 0:throw A.k(new A.lr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Iz(a,b,c){var s,r
if($.DB==null)$.DB=A.DA("interceptor")
if($.DC==null)$.DC=A.DA("receiver")
s=b.length
r=A.Iy(s,c,a,b)
return r},
CP(a){return A.IA(a)},
Ip(a,b){return A.jw(v.typeUniverse,A.aT(a.a),b)},
DD(a){return a.a},
Iq(a){return a.b},
DA(a){var s,r,q,p=new A.fN("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.k(A.b2("Field name "+a+" not found.",null))},
z3(a){return v.getIsolateTag(a)},
GB(){return v.G},
Q8(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
N4(a){var s,r,q,p,o,n=A.c($.FW.$1(a)),m=$.yi[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.zj[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.m($.FG.$2(a,n))
if(q!=null){m=$.yi[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.zj[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.zx(s)
$.yi[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.zj[n]=s
return s}if(p==="-"){o=A.zx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Gt(a,s)
if(p==="*")throw A.k(A.j4(n))
if(v.leafTags[n]===true){o=A.zx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Gt(a,s)},
Gt(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.D1(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
zx(a){return J.D1(a,!1,null,!!a.$ic3)},
N5(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.zx(s)
else return J.D1(s,c,null,null)},
MS(){if(!0===$.CY)return
$.CY=!0
A.MT()},
MT(){var s,r,q,p,o,n,m,l
$.yi=Object.create(null)
$.zj=Object.create(null)
A.MR()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Gv.$1(o)
if(n!=null){m=A.N5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
MR(){var s,r,q,p,o,n,m=B.ez()
m=A.hG(B.eA,A.hG(B.eB,A.hG(B.cF,A.hG(B.cF,A.hG(B.eC,A.hG(B.eD,A.hG(B.eE(B.cE),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.FW=new A.zg(p)
$.FG=new A.zh(o)
$.Gv=new A.zi(n)},
hG(a,b){return a(b)||b},
K2(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.Y(r,b[s]))return!1}return!0},
Mt(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
C8(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.k(A.z("Illegal RegExp pattern ("+String(o)+")",a,null))},
NS(a,b,c){var s=a.indexOf(b,c)
return s>=0},
CQ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
NW(a,b,c,d){var s=b.fL(a,d)
if(s==null)return a
return A.D9(a,s.b.index,s.gcd(),c)},
hO(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ao(a,b,c){var s
if(typeof b=="string")return A.NU(a,b,c)
if(b instanceof A.et){s=b.gfS()
s.lastIndex=0
return a.replace(s,A.CQ(c))}return A.NT(a,b,c)},
NT(a,b,c){var s,r,q,p
for(s=J.Dt(b,a),s=s.gA(s),r=0,q="";s.n();){p=s.gt()
q=q+a.substring(r,p.gdz())+c
r=p.gcd()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
NU(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hO(b),"g"),A.CQ(c))},
Fx(a){return a},
hQ(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.aM(0,a),s=new A.fz(s.a,s.b,s.c),r=t.ez,q=0,p="";s.n();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.i(A.Fx(B.b.X(a,q,m)))+A.i(c.$1(o))
q=m+n[0].length}s=p+A.i(A.Fx(B.b.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
D8(a,b,c,d){var s,r,q,p
if(typeof b=="string"){s=a.indexOf(b,d)
if(s<0)return a
return A.D9(a,s,s+b.length,c)}if(b instanceof A.et)return d===0?a.replace(b.b,A.CQ(c)):A.NW(a,b,c,d)
r=J.Ib(b,a,d)
q=r.gA(r)
if(!q.n())return a
p=q.gt()
return B.b.hH(a,p.gdz(),p.gcd(),c)},
NV(a,b,c,d){var s,r,q=b.d7(0,a,d),p=new A.fz(q.a,q.b,q.c)
if(!p.n())return a
s=p.d
if(s==null)s=t.ez.a(s)
r=A.i(c.$1(s))
return B.b.hH(a,s.b.index,s.gcd(),r)},
D9(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
p:function p(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
i3:function i3(a,b){this.a=a
this.$ti=b},
fS:function fS(){},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b){this.a=a
this.$ti=b},
e9:function e9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cl:function cl(a,b){this.a=a
this.$ti=b},
fT:function fT(){},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
kK:function kK(){},
fc:function fc(a,b){this.a=a
this.$ti=b},
iV:function iV(){},
uq:function uq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iM:function iM(){},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a){this.a=a},
pi:function pi(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a
this.b=null},
bN:function bN(){},
kc:function kc(){},
kd:function kd(){},
lF:function lF(){},
lC:function lC(){},
fN:function fN(a,b){this.a=a
this.b=b},
lr:function lr(a){this.a=a},
cB:function cB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
o4:function o4(a){this.a=a},
p5:function p5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
au:function au(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
M:function M(a,b){this.a=a
this.$ti=b},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ac:function ac(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fg:function fg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
zg:function zg(a){this.a=a},
zh:function zh(a){this.a=a},
zi:function zi(a){this.a=a},
bk:function bk(){},
eb:function eb(){},
fE:function fE(){},
dd:function dd(){},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(a){this.b=a},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hq:function hq(a,b){this.a=a
this.c=b},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
O0(a){throw A.b4(A.E5(a),new Error())},
mN(){throw A.b4(A.E6(""),new Error())},
GC(){throw A.b4(A.IX(""),new Error())},
fL(){throw A.b4(A.E5(""),new Error())},
uM(){var s=new A.lW("")
return s.b=s},
uN(a){var s=new A.lW(a)
return s.b=s},
lW:function lW(a){this.a=a
this.b=null},
jE(a,b,c){},
aK(a){var s,r,q
if(t.rw.b(a))return a
s=J.an(a)
r=A.iy(s.gq(a),null,!1,t.z)
for(q=0;q<s.gq(a);++q)B.a.j(r,q,s.h(a,q))
return r},
J1(a){return new DataView(new ArrayBuffer(a))},
J2(a,b,c){A.jE(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
J3(a){return new Int8Array(a)},
J4(a){return new Uint16Array(a)},
J5(a){return new Uint32Array(a)},
J6(a){return new Uint32Array(A.aK(a))},
J7(a,b,c){A.jE(a,b,c)
if(c==null)c=B.d.C(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
pf(a){return new Uint8Array(a)},
J8(a){return new Uint8Array(A.aK(a))},
iI(a,b,c){A.jE(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ee(a,b,c){if(a>>>0!==a||a>=c)throw A.k(A.yg(b,a))},
eS(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.k(A.Mz(a,b,c))
if(b==null)return c
return b},
ex:function ex(){},
he:function he(){},
iE:function iE(){},
mt:function mt(a){this.a=a},
iC:function iC(){},
bx:function bx(){},
ey:function ey(){},
c5:function c5(){},
l0:function l0(){},
l1:function l1(){},
l2:function l2(){},
iD:function iD(){},
l3:function l3(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
fl:function fl(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
Ck(a,b){var s=b.c
return s==null?b.c=A.ju(a,"ba",[b.x]):s},
Eo(a){var s=a.w
if(s===6||s===7)return A.Eo(a.x)
return s===11||s===12},
Jl(a){return a.as},
mJ(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.ve(v.typeUniverse,a,!1)},
MV(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.eT(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
eT(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eT(a1,s,a3,a4)
if(r===s)return a2
return A.EV(a1,r,!0)
case 7:s=a2.x
r=A.eT(a1,s,a3,a4)
if(r===s)return a2
return A.EU(a1,r,!0)
case 8:q=a2.y
p=A.hF(a1,q,a3,a4)
if(p===q)return a2
return A.ju(a1,a2.x,p)
case 9:o=a2.x
n=A.eT(a1,o,a3,a4)
m=a2.y
l=A.hF(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Cx(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hF(a1,j,a3,a4)
if(i===j)return a2
return A.EW(a1,k,i)
case 11:h=a2.x
g=A.eT(a1,h,a3,a4)
f=a2.y
e=A.Ly(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ET(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hF(a1,d,a3,a4)
o=a2.x
n=A.eT(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Cy(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.k(A.jY("Attempted to substitute unexpected RTI kind "+a0))}},
hF(a,b,c,d){var s,r,q,p,o=b.length,n=A.vm(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eT(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Lz(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.vm(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eT(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Ly(a,b,c,d){var s,r=b.a,q=A.hF(a,r,c,d),p=b.b,o=A.hF(a,p,c,d),n=b.c,m=A.Lz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ma()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
xV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.MM(s)
return a.$S()}return null},
MU(a,b){var s
if(A.Eo(b))if(a instanceof A.bN){s=A.xV(a)
if(s!=null)return s}return A.aT(a)},
aT(a){if(a instanceof A.a0)return A.o(a)
if(Array.isArray(a))return A.F(a)
return A.CG(J.eW(a))},
F(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.CG(a)},
CG(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.KV(a,s)},
KV(a,b){var s=a instanceof A.bN?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Kd(v.typeUniverse,s.name)
b.$ccache=r
return r},
MM(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ve(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
be(a){return A.dg(A.o(a))},
CU(a){var s=A.xV(a)
return A.dg(s==null?A.aT(a):s)},
CI(a){var s
if(a instanceof A.bk)return A.ME(a.$r,a.dI())
s=a instanceof A.bN?A.xV(a):null
if(s!=null)return s
if(t.sg.b(a))return J.If(a).a
if(Array.isArray(a))return A.F(a)
return A.aT(a)},
dg(a){var s=a.r
return s==null?a.r=new A.ms(a):s},
ME(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.a(q,0)
s=A.jw(v.typeUniverse,A.CI(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.EY(v.typeUniverse,s,A.CI(q[r]))}return A.jw(v.typeUniverse,s,a)},
bC(a){return A.dg(A.ve(v.typeUniverse,a,!1))},
KU(a){var s=this
s.b=A.Lw(s)
return s.b(a)},
Lw(a){var s,r,q,p,o
if(a===t.K)return A.L4
if(A.fK(a))return A.L8
s=a.w
if(s===6)return A.KQ
if(s===1)return A.Fm
if(s===7)return A.L_
r=A.Lv(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fK)){a.f="$i"+q
if(q==="y")return A.L2
if(a===t.m)return A.L1
return A.L7}}else if(s===10){p=A.Mt(a.x,a.y)
o=p==null?A.Fm:p
return o==null?A.df(o):o}return A.KO},
Lv(a){if(a.w===8){if(a===t.S)return A.cu
if(a===t.pR||a===t.fY)return A.L3
if(a===t.N)return A.L6
if(a===t.y)return A.ef}return null},
KT(a){var s=this,r=A.KN
if(A.fK(s))r=A.KA
else if(s===t.K)r=A.df
else if(A.hN(s)){r=A.KP
if(s===t.lo)r=A.aH
else if(s===t.T)r=A.m
else if(s===t.k7)r=A.hD
else if(s===t.s7)r=A.CE
else if(s===t.u6)r=A.Kz
else if(s===t.uh)r=A.ar}else if(s===t.S)r=A.O
else if(s===t.N)r=A.c
else if(s===t.y)r=A.cO
else if(s===t.fY)r=A.vo
else if(s===t.pR)r=A.CD
else if(s===t.m)r=A.v
s.a=r
return s.a(a)},
KO(a){var s=this
if(a==null)return A.hN(s)
return A.G2(v.typeUniverse,A.MU(a,s),s)},
KQ(a){if(a==null)return!0
return this.x.b(a)},
L7(a){var s,r=this
if(a==null)return A.hN(r)
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.eW(a)[s]},
L2(a){var s,r=this
if(a==null)return A.hN(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.eW(a)[s]},
L1(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a0)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Fl(a){if(typeof a=="object"){if(a instanceof A.a0)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
KN(a){var s=this
if(a==null){if(A.hN(s))return a}else if(s.b(a))return a
throw A.b4(A.Ff(a,s),new Error())},
KP(a){var s=this
if(a==null||s.b(a))return a
throw A.b4(A.Ff(a,s),new Error())},
Ff(a,b){return new A.hB("TypeError: "+A.EO(a,A.bT(b,null)))},
FP(a,b,c,d){if(A.G2(v.typeUniverse,a,b))return a
throw A.b4(A.K5("The type argument '"+A.bT(a,null)+"' is not a subtype of the type variable bound '"+A.bT(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
EO(a,b){return A.kw(a)+": type '"+A.bT(A.CI(a),null)+"' is not a subtype of type '"+b+"'"},
K5(a){return new A.hB("TypeError: "+a)},
ct(a,b){return new A.hB("TypeError: "+A.EO(a,b))},
L_(a){var s=this
return s.x.b(a)||A.Ck(v.typeUniverse,s).b(a)},
L4(a){return a!=null},
df(a){if(a!=null)return a
throw A.b4(A.ct(a,"Object"),new Error())},
L8(a){return!0},
KA(a){return a},
Fm(a){return!1},
ef(a){return!0===a||!1===a},
cO(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b4(A.ct(a,"bool"),new Error())},
hD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b4(A.ct(a,"bool?"),new Error())},
CD(a){if(typeof a=="number")return a
throw A.b4(A.ct(a,"double"),new Error())},
Kz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b4(A.ct(a,"double?"),new Error())},
cu(a){return typeof a=="number"&&Math.floor(a)===a},
O(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b4(A.ct(a,"int"),new Error())},
aH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b4(A.ct(a,"int?"),new Error())},
L3(a){return typeof a=="number"},
vo(a){if(typeof a=="number")return a
throw A.b4(A.ct(a,"num"),new Error())},
CE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b4(A.ct(a,"num?"),new Error())},
L6(a){return typeof a=="string"},
c(a){if(typeof a=="string")return a
throw A.b4(A.ct(a,"String"),new Error())},
m(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b4(A.ct(a,"String?"),new Error())},
v(a){if(A.Fl(a))return a
throw A.b4(A.ct(a,"JSObject"),new Error())},
ar(a){if(a==null)return a
if(A.Fl(a))return a
throw A.b4(A.ct(a,"JSObject?"),new Error())},
Fu(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bT(a[q],b)
return s},
Lq(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Fu(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bT(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Fi(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.b([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.m(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bT(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bT(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bT(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bT(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bT(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bT(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bT(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bT(a.x,b)+">"
if(l===8){p=A.LA(a.x)
o=a.y
return o.length>0?p+("<"+A.Fu(o,b)+">"):p}if(l===10)return A.Lq(a,b)
if(l===11)return A.Fi(a,b,null)
if(l===12)return A.Fi(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
LA(a){var s=A.GE(a)
if(s!=null)return s
return"minified:"+a},
Ke(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Kd(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ve(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jv(a,5,"#")
q=A.vm(s)
for(p=0;p<s;++p)q[p]=r
o=A.ju(a,b,q)
n[b]=o
return o}else return m},
Kc(a,b){return A.F7(a.tR,b)},
Kb(a,b){return A.F7(a.eT,b)},
ve(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.EX(a,null,b,!1)
r.set(b,s)
return s},
jw(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.EX(a,b,c,!0)
q.set(c,r)
return r},
EY(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Cx(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
EX(a,b,c,d){return A.K0(A.JV(a,b,c,d))},
eQ(a,b){b.a=A.KT
b.b=A.KU
return b},
jv(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cH(null,null)
s.w=b
s.as=c
r=A.eQ(a,s)
a.eC.set(c,r)
return r},
EV(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.K9(a,b,r,c)
a.eC.set(r,s)
return s},
K9(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fK(b))if(!(b===t.aU||b===t.Be))if(s!==6)r=s===7&&A.hN(b.x)
if(r)return b
else if(s===1)return t.aU}q=new A.cH(null,null)
q.w=6
q.x=b
q.as=c
return A.eQ(a,q)},
EU(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.K7(a,b,r,c)
a.eC.set(r,s)
return s},
K7(a,b,c,d){var s,r
if(d){s=b.w
if(A.fK(b)||b===t.K)return b
else if(s===1)return A.ju(a,"ba",[b])
else if(b===t.aU||b===t.Be)return t.eZ}r=new A.cH(null,null)
r.w=7
r.x=b
r.as=c
return A.eQ(a,r)},
Ka(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cH(null,null)
s.w=13
s.x=b
s.as=q
r=A.eQ(a,s)
a.eC.set(q,r)
return r},
jt(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
K6(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ju(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jt(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cH(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eQ(a,r)
a.eC.set(p,q)
return q},
Cx(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jt(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cH(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eQ(a,o)
a.eC.set(q,n)
return n},
EW(a,b,c){var s,r,q="+"+(b+"("+A.jt(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cH(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eQ(a,s)
a.eC.set(q,r)
return r},
ET(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jt(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jt(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.K6(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cH(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eQ(a,p)
a.eC.set(r,o)
return o},
Cy(a,b,c,d){var s,r=b.as+("<"+A.jt(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.K8(a,b,c,r,d)
a.eC.set(r,s)
return s},
K8(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.vm(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eT(a,b,r,0)
m=A.hF(a,c,r,0)
return A.Cy(a,n,m,c!==m)}}l=new A.cH(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eQ(a,l)},
JV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
K0(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.JX(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.EQ(a,r,l,k,!1)
else if(q===46)r=A.EQ(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fD(a.u,a.e,k.pop()))
break
case 94:k.push(A.Ka(a.u,k.pop()))
break
case 35:k.push(A.jv(a.u,5,"#"))
break
case 64:k.push(A.jv(a.u,2,"@"))
break
case 126:k.push(A.jv(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.JZ(a,k)
break
case 38:A.JY(a,k)
break
case 63:p=a.u
k.push(A.EV(p,A.fD(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.EU(p,A.fD(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.JW(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ER(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.K1(a.u,a.e,o)
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
return A.fD(a.u,a.e,m)},
JX(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
EQ(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ke(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.Jl(o)+'"')
d.push(A.jw(s,o,n))}else d.push(p)
return m},
JZ(a,b){var s,r=a.u,q=A.EP(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ju(r,p,q))
else{s=A.fD(r,a.e,p)
switch(s.w){case 11:b.push(A.Cy(r,s,q,a.n))
break
default:b.push(A.Cx(r,s,q))
break}}},
JW(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.EP(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fD(p,a.e,o)
q=new A.ma()
q.a=s
q.b=n
q.c=m
b.push(A.ET(p,r,q))
return
case-4:b.push(A.EW(p,b.pop(),s))
return
default:throw A.k(A.jY("Unexpected state under `()`: "+A.i(o)))}},
JY(a,b){var s=b.pop()
if(0===s){b.push(A.jv(a.u,1,"0&"))
return}if(1===s){b.push(A.jv(a.u,4,"1&"))
return}throw A.k(A.jY("Unexpected extended operation "+A.i(s)))},
EP(a,b){var s=b.splice(a.p)
A.ER(a.u,a.e,s)
a.p=b.pop()
return s},
fD(a,b,c){if(typeof c=="string")return A.ju(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.K_(a,b,c)}else return c},
ER(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fD(a,b,c[s])},
K1(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fD(a,b,c[s])},
K_(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.k(A.jY("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.k(A.jY("Bad index "+c+" for "+b.k(0)))},
G2(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.bm(a,b,null,c,null)
r.set(c,s)}return s},
bm(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fK(d))return!0
s=b.w
if(s===4)return!0
if(A.fK(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.bm(a,c[b.x],c,d,e))return!0
q=d.w
p=t.aU
if(b===p||b===t.Be){if(q===7)return A.bm(a,b,c,d.x,e)
return d===p||d===t.Be||q===6}if(d===t.K){if(s===7)return A.bm(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.bm(a,b.x,c,d,e))return!1
return A.bm(a,A.Ck(a,b),c,d,e)}if(s===6)return A.bm(a,p,c,d,e)&&A.bm(a,b.x,c,d,e)
if(q===7){if(A.bm(a,b,c,d.x,e))return!0
return A.bm(a,b,c,A.Ck(a,d),e)}if(q===6)return A.bm(a,b,c,p,e)||A.bm(a,b,c,d.x,e)
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
if(!A.bm(a,j,c,i,e)||!A.bm(a,i,e,j,c))return!1}return A.Fk(a,b.x,c,d.x,e)}if(q===11){if(b===t.g9)return!0
if(p)return!1
return A.Fk(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.L0(a,b,c,d,e)}if(o&&q===10)return A.L5(a,b,c,d,e)
return!1},
Fk(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.bm(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.bm(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.bm(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.bm(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.bm(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
L0(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jw(a,b,r[o])
return A.F9(a,p,null,c,d.y,e)}return A.F9(a,b.y,null,c,d.y,e)},
F9(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.bm(a,b[s],d,e[s],f))return!1
return!0},
L5(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.bm(a,r[s],c,q[s],e))return!1
return!0},
hN(a){var s=a.w,r=!0
if(!(a===t.aU||a===t.Be))if(!A.fK(a))if(s!==6)r=s===7&&A.hN(a.x)
return r},
fK(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
F7(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
vm(a){return a>0?new Array(a):v.typeUniverse.sEA},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ma:function ma(){this.c=this.b=this.a=null},
ms:function ms(a){this.a=a},
m9:function m9(){},
hB:function hB(a){this.a=a},
JD(){var s,r,q
if(self.scheduleImmediate!=null)return A.LP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fI(new A.uA(s),1)).observe(r,{childList:true})
return new A.uz(s,r,q)}else if(self.setImmediate!=null)return A.LQ()
return A.LR()},
JE(a){self.scheduleImmediate(A.fI(new A.uB(t.O.a(a)),0))},
JF(a){self.setImmediate(A.fI(new A.uC(t.O.a(a)),0))},
JG(a){A.Co(B.f_,t.O.a(a))},
Co(a,b){var s=B.d.C(a.a,1000)
return A.K3(s<0?0:s,b)},
Ey(a,b){var s=B.d.C(a.a,1000)
return A.K4(s<0?0:s,b)},
K3(a,b){var s=new A.js(!0)
s.iB(a,b)
return s},
K4(a,b){var s=new A.js(!1)
s.iC(a,b)
return s},
J(a){return new A.lP(new A.am($.ak,a.i("am<0>")),a.i("lP<0>"))},
I(a,b){a.$2(0,null)
b.b=!0
return b.a},
r(a,b){A.KB(a,b)},
H(a,b){b.cG(a)},
G(a,b){b.eW(A.aw(a),A.eX(a))},
KB(a,b){var s,r,q=new A.vp(b),p=new A.vq(b)
if(a instanceof A.am)a.h2(q,p,t.z)
else{s=t.z
if(a instanceof A.am)a.ea(q,p,s)
else{r=new A.am($.ak,t.hR)
r.a=8
r.c=a
r.h2(q,p,s)}}},
K(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ak.hF(new A.vW(s),t.H,t.S,t.z)},
ES(a,b,c){return 0},
n1(a){var s
if(t.yt.b(a)){s=a.gcq()
if(s!=null)return s}return B.aI},
aW(a,b){var s=new A.am($.ak,b.i("am<0>"))
s.bp(a)
return s},
IK(a,b){var s
if(!b.b(null))throw A.k(A.x(null,"computation","The type parameter is not nullable"))
s=new A.am($.ak,b.i("am<0>"))
A.Ex(a,new A.nQ(null,s,b))
return s},
KW(a,b){if($.ak===B.W)return null
return null},
KX(a,b){if($.ak!==B.W)A.KW(a,b)
if(b==null)if(t.yt.b(a)){b=a.gcq()
if(b==null){A.Ej(a,B.aI)
b=B.aI}}else b=B.aI
else if(t.yt.b(a))A.Ej(a,b)
return new A.bW(a,b)},
JS(a,b){var s=new A.am($.ak,b.i("am<0>"))
b.a(a)
s.a=8
s.c=a
return s},
uT(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Jr()
b.ek(new A.bW(new A.ce(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.f7.a(b.c)
b.a=b.a&1|4
b.c=n
n.fU(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.d5()
b.dG(o.a)
A.fA(b,p)
return}b.a^=2
A.my(null,null,b.b,t.O.a(new A.uU(o,b)))},
fA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.Fq,r=t.f7;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.vM(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fA(d.a,c)
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
A.vM(j.a,j.b)
return}g=$.ak
if(g!==h)$.ak=h
else g=null
c=c.c
if((c&15)===8)new A.uY(q,d,n).$0()
else if(o){if((c&1)!==0)new A.uX(q,j).$0()}else if((c&2)!==0)new A.uW(d,q).$0()
if(g!=null)$.ak=g
c=q.c
if(c instanceof A.am){p=q.a.$ti
p=p.i("ba<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dK(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.uT(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.dK(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Lr(a,b){var s
if(t.nW.b(a))return b.hF(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.k(A.x(a,"onError",u.w))},
Ld(){var s,r
for(s=$.hE;s!=null;s=$.hE){$.jG=null
r=s.b
$.hE=r
if(r==null)$.jF=null
s.a.$0()}},
Lx(){$.CH=!0
try{A.Ld()}finally{$.jG=null
$.CH=!1
if($.hE!=null)$.Dh().$1(A.FI())}},
Fw(a){var s=new A.lQ(a),r=$.jF
if(r==null){$.hE=$.jF=s
if(!$.CH)$.Dh().$1(A.FI())}else $.jF=r.b=s},
Lu(a){var s,r,q,p=$.hE
if(p==null){A.Fw(a)
$.jG=$.jF
return}s=new A.lQ(a)
r=$.jG
if(r==null){s.b=p
$.hE=$.jG=s}else{q=r.b
s.b=q
$.jG=r.b=s
if(q==null)$.jF=s}},
OI(a,b){A.cP(a,"stream",t.K)
return new A.mo(b.i("mo<0>"))},
Ex(a,b){var s=$.ak
if(s===B.W)return A.Co(a,t.O.a(b))
return A.Co(a,t.O.a(s.ha(b)))},
Jy(a,b){var s=$.ak
if(s===B.W)return A.Ey(a,t.uH.a(b))
return A.Ey(a,t.uH.a(s.la(b,t.hz)))},
vM(a,b){A.Lu(new A.vN(a,b))},
Fs(a,b,c,d,e){var s,r=$.ak
if(r===c)return d.$0()
$.ak=c
s=r
try{r=d.$0()
return r}finally{$.ak=s}},
Ft(a,b,c,d,e,f,g){var s,r=$.ak
if(r===c)return d.$1(e)
$.ak=c
s=r
try{r=d.$1(e)
return r}finally{$.ak=s}},
Ls(a,b,c,d,e,f,g,h,i){var s,r=$.ak
if(r===c)return d.$2(e,f)
$.ak=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ak=s}},
my(a,b,c,d){t.O.a(d)
if(B.W!==c){d=c.ha(d)
d=d}A.Fw(d)},
uA:function uA(a){this.a=a},
uz:function uz(a,b,c){this.a=a
this.b=b
this.c=c},
uB:function uB(a){this.a=a},
uC:function uC(a){this.a=a},
js:function js(a){this.a=a
this.b=null
this.c=0},
vd:function vd(a,b){this.a=a
this.b=b},
vc:function vc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lP:function lP(a,b){this.a=a
this.b=!1
this.$ti=b},
vp:function vp(a){this.a=a},
vq:function vq(a){this.a=a},
vW:function vW(a){this.a=a},
ed:function ed(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
de:function de(a,b){this.a=a
this.$ti=b},
bW:function bW(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(){},
cN:function cN(a,b){this.a=a
this.$ti=b},
e8:function e8(a,b,c,d,e){var _=this
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
uQ:function uQ(a,b){this.a=a
this.b=b},
uV:function uV(a,b){this.a=a
this.b=b},
uU:function uU(a,b){this.a=a
this.b=b},
uS:function uS(a,b){this.a=a
this.b=b},
uR:function uR(a,b){this.a=a
this.b=b},
uY:function uY(a,b,c){this.a=a
this.b=b
this.c=c},
uZ:function uZ(a,b){this.a=a
this.b=b},
v_:function v_(a){this.a=a},
uX:function uX(a,b){this.a=a
this.b=b},
uW:function uW(a,b){this.a=a
this.b=b},
v0:function v0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v1:function v1(a,b,c){this.a=a
this.b=b
this.c=c},
v2:function v2(a,b){this.a=a
this.b=b},
lQ:function lQ(a){this.a=a
this.b=null},
mo:function mo(a){this.$ti=a},
jC:function jC(){},
mi:function mi(){},
va:function va(a,b){this.a=a
this.b=b},
vb:function vb(a,b,c){this.a=a
this.b=b
this.c=c},
vN:function vN(a,b){this.a=a
this.b=b},
ix(a,b){return new A.cB(a.i("@<0>").a3(b).i("cB<1,2>"))},
S(a,b,c){return b.i("@<0>").a3(c).i("Cc<1,2>").a(A.FU(a,new A.cB(b.i("@<0>").a3(c).i("cB<1,2>"))))},
w(a,b){return new A.cB(a.i("@<0>").a3(b).i("cB<1,2>"))},
Cd(a){return new A.dc(a.i("dc<0>"))},
a4(a){return new A.dc(a.i("dc<0>"))},
kX(a,b){return b.i("E9<0>").a(A.MG(a,new A.dc(b.i("dc<0>"))))},
Cw(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ea(a,b,c){var s=new A.fC(a,b,c.i("fC<0>"))
s.c=a.e
return s},
aO(a,b){var s=J.R(a)
if(s.n())return s.gt()
return null},
C6(a,b){var s,r
if(t.he.b(a)){if(a.length===0)return null
return B.a.gak(a)}s=J.R(a)
if(!s.n())return null
do r=s.gt()
while(s.n())
return r},
J_(a,b,c){var s=A.ix(b,c)
a.a2(0,new A.p6(s,b,c))
return s},
kW(a,b,c){var s=A.ix(b,c)
s.a1(0,a)
return s},
Ce(a,b){var s,r,q=A.Cd(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q.m(0,b.a(a[r]))
return q},
kY(a,b){var s=A.Cd(b)
s.a1(0,a)
return s},
J0(a,b){var s=t.hO
return J.BS(s.a(a),s.a(b))},
Cg(a){var s,r
if(A.CZ(a))return"{...}"
s=new A.bH("")
try{r={}
B.a.m($.ca,a)
s.a+="{"
r.a=!0
a.a2(0,new A.pa(r,s))
s.a+="}"}finally{if(0>=$.ca.length)return A.a($.ca,-1)
$.ca.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
EZ(){throw A.k(A.aB("Cannot change an unmodifiable set"))},
dc:function dc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mf:function mf(a){this.a=a
this.c=this.b=null},
fC:function fC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function Q(){},
a9:function a9(){},
p9:function p9(a){this.a=a},
pa:function pa(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.$ti=b},
jf:function jf(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jx:function jx(){},
hb:function hb(){},
e7:function e7(a,b){this.a=a
this.$ti=b},
cJ:function cJ(){},
jq:function jq(){},
mu:function mu(){},
j5:function j5(a,b){this.a=a
this.$ti=b},
hC:function hC(){},
jy:function jy(){},
Lm(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aw(r)
q=A.z(String(s),null,null)
throw A.k(q)}q=A.vx(p)
return q},
vx(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.md(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.vx(a[s])
return a},
Kw(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Hp()
else s=new Uint8Array(o)
for(r=J.an(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Kv(a,b,c,d){var s=a?$.Ho():$.Hn()
if(s==null)return null
if(0===c&&d===b.length)return A.F6(s,b)
return A.F6(s,b.subarray(c,d))},
F6(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
JK(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=J.an(b),r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){n=s.h(b,p)
o=(o|n)>>>0
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.a(a,l)
q&2&&A.C(f)
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
q&2&&A.C(f)
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
q&2&&A.C(f)
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
if(n<0||n>255)break;++p}throw A.k(A.x(b,"Not a byte value at index "+p+": 0x"+B.d.bL(s.h(b,p),16),null))},
JJ(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.ao(a1,2),f=a1&3,e=$.Hi()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.a(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.a(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.C(d)
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
if(f===3){if((g&3)!==0)throw A.k(A.z(i,a,p))
k=a0+1
q&2&&A.C(d)
s=d.length
if(!(a0<s))return A.a(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.a(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.k(A.z(i,a,p))
q&2&&A.C(d)
if(!(a0<d.length))return A.a(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.EE(a,p+1,c,-j-1)}throw A.k(A.z(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.a(a,p)
if(a.charCodeAt(p)>127)break}throw A.k(A.z(h,a,p))},
JH(a,b,c,d){var s=A.JI(a,b,c),r=(d&3)+(s-b),q=B.d.ao(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Hh()},
JI(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
EE(a,b,c,d){var s,r,q
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
if(b===c)break}if(b!==c)throw A.k(A.z("Invalid padding character",a,b))
return-s-1},
E2(a,b,c){return new A.is(a,b)},
KF(a){return a.N()},
JT(a,b){return new A.v5(a,[],A.Mo())},
JU(a,b,c){var s,r=new A.bH(""),q=A.JT(r,b)
q.ee(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Kx(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
md:function md(a,b){this.a=a
this.b=b
this.c=null},
v4:function v4(a){this.a=a},
me:function me(a){this.a=a},
vk:function vk(){},
vj:function vj(){},
fM:function fM(a){this.a=a},
hY:function hY(a){this.a=a},
uE:function uE(a){this.a=0
this.b=a},
k_:function k_(){},
uD:function uD(){this.a=0},
bf:function bf(){},
bg:function bg(){},
b8:function b8(){},
ku:function ku(){},
is:function is(a,b){this.a=a
this.b=b},
kT:function kT(a,b){this.a=a
this.b=b},
kS:function kS(){},
kV:function kV(a){this.b=a},
kU:function kU(a){this.a=a},
v6:function v6(){},
v7:function v7(a,b){this.a=a
this.b=b},
v5:function v5(a,b,c){this.c=a
this.a=b
this.b=c},
lM:function lM(){},
lN:function lN(){},
vl:function vl(a){this.b=0
this.c=a},
j7:function j7(a){this.a=a},
eR:function eR(a){this.a=a
this.b=16
this.c=0},
Io(a){var s=A.EM(a,null)
if(s==null)A.f(A.z("Could not parse BigInt",a,null))
return s},
uI(a,b){var s=A.EM(a,b)
if(s==null)throw A.k(A.z("Could not parse BigInt",a,null))
return s},
JP(a,b){var s,r,q=$.bn(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a0(0,$.Di()).B(0,A.hw(s))
s=0
o=0}}if(b)return q.S(0)
return q},
EF(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JQ(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.G.eT(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.a(a,s)
o=A.EF(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0&&h<j))return A.a(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.a(a,s)
o=A.EF(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0&&n<j))return A.a(i,n)
i[n]=r}if(j===1){if(0>=j)return A.a(i,0)
l=i[0]===0}else l=!1
if(l)return $.bn()
l=A.bj(j,i)
return new A.aS(l===0?!1:c,i,l)},
EM(a,b){var s,r,q,p,o,n
if(a==="")return null
s=$.Hk().aj(a)
if(s==null)return null
r=s.b
q=r.length
if(1>=q)return A.a(r,1)
p=r[1]==="-"
if(4>=q)return A.a(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.a(r,5)
if(o!=null)return A.JP(o,p)
if(n!=null)return A.JQ(n,2,p)
return null},
bj(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
Ct(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
aC(a){var s
if(a===0)return $.bn()
if(a===1)return $.bL()
if(a===2)return $.BR()
if(Math.abs(a)<4294967296)return A.hw(B.d.b0(a))
s=A.JL(a)
return s},
hw(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bj(4,s)
return new A.aS(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bj(1,s)
return new A.aS(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.d.ao(a,16)
r=A.bj(2,s)
return new A.aS(r===0?!1:o,s,r)}r=B.d.C(B.d.gbW(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.d.C(a,65536)}r=A.bj(r,s)
return new A.aS(r===0?!1:o,s,r)},
JL(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.k(A.b2("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.bn()
r=$.Hj()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.C(r)
if(!(p<8))return A.a(r,p)
r[p]=0}q=J.jR(B.i.gab(r))
q.$flags&2&&A.C(q,13)
q.setFloat64(0,a,!0)
o=(r[7]<<4>>>0)+(r[6]>>>4)-1075
n=new Uint16Array(4)
n[0]=(r[1]<<8>>>0)+r[0]
n[1]=(r[3]<<8>>>0)+r[2]
n[2]=(r[5]<<8>>>0)+r[4]
n[3]=r[6]&15|16
m=new A.aS(!1,n,4)
if(o<0)l=m.c4(0,-o)
else l=o>0?m.b2(0,o):m
if(s)return l.S(0)
return l},
Cu(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.a(a,s)
o=a[s]
q&2&&A.C(d)
if(!(p>=0&&p<d.length))return A.a(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.C(d)
if(!(s<d.length))return A.a(d,s)
d[s]=0}return b+c},
EL(a,b,c,d){var s,r,q,p,o,n,m,l=B.d.C(c,16),k=B.d.R(c,16),j=16-k,i=B.d.b2(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.d.dM(o,j)
q&2&&A.C(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.d.b2(o&i,k)}q&2&&A.C(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
EG(a,b,c,d){var s,r,q,p=B.d.C(c,16)
if(B.d.R(c,16)===0)return A.Cu(a,b,p,d)
s=b+p+1
A.EL(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.C(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
JR(a,b,c,d){var s,r,q,p,o,n,m=B.d.C(c,16),l=B.d.R(c,16),k=16-l,j=B.d.b2(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.d.dM(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.d.b2(n&j,k)
q&2&&A.C(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o|s)>>>0
s=B.d.dM(n,l)}q&2&&A.C(d)
if(!(r>=0&&r<d.length))return A.a(d,r)
d[r]=s},
lS(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.a(a,s)
p=a[s]
if(!(s<q))return A.a(c,s)
o=p-c[s]
if(o!==0)return o}return o},
JM(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n+c[o]
q&2&&A.C(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.C(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.C(e)
if(!(b>=0&&b<e.length))return A.a(e,b)
e[b]=p},
lR(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n-c[o]
q&2&&A.C(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.ao(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.C(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.ao(p,16)&1)}},
Cv(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.a(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.a(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.C(d)
d[e]=m&65535
p=B.d.C(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.a(d,e)
k=d[e]+p
l=e+1
q&2&&A.C(d)
d[e]=k&65535
p=B.d.C(k,65536)}},
JO(a,b,c,d,e){var s,r,q=b+d
for(s=e.$flags|0,r=q;--r,r>=0;){s&2&&A.C(e)
if(!(r<e.length))return A.a(e,r)
e[r]=0}for(s=c.length,r=0;r<d;){if(!(r<s))return A.a(c,r)
A.Cv(c[r],a,0,e,r,b);++r}return q},
JN(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.d.aA((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
X(a,b,c){var s
A.c(a)
A.aH(c)
t.lF.a(b)
s=A.li(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.k(A.z(a,null,null))},
IG(a,b){a=A.b4(a,new Error())
if(a==null)a=A.df(a)
a.stack=b.k(0)
throw a},
iy(a,b,c,d){var s,r=c?J.E0(a,d):J.E_(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
d1(a,b,c){var s,r=A.b([],c.i("u<0>"))
for(s=J.R(a);s.n();)B.a.m(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
B(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.i("u<0>"))
s=A.b([],b.i("u<0>"))
for(r=J.R(a);r.n();)B.a.m(s,r.gt())
return s},
aD(a,b){var s=A.d1(a,!1,b)
s.$flags=3
return s},
j1(a,b,c){var s,r,q,p,o
A.bb(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.k(A.aM(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Ei(b>0||c<o?p.slice(b,c):p)}if(t.iT.b(a))return A.Jv(a,b,c)
if(r)a=J.mS(a,c)
if(b>0)a=J.hU(a,b)
s=A.B(a,t.S)
return A.Ei(s)},
Jv(a,b,c){var s=a.length
if(b>=s)return""
return A.Jf(a,b,c==null||c>s?s:c)},
D(a,b,c){return new A.et(a,A.C8(a,!1,b,c,!1,""))},
Cm(a,b,c){var s=J.R(b)
if(!s.n())return a
if(c.length===0){do a+=A.i(s.gt())
while(s.n())}else{a+=A.i(s.gt())
while(s.n())a=a+c+A.i(s.gt())}return a},
CC(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.R){s=$.Hl()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.F.O(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.aX(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kn(a){var s,r,q
if(!$.Hm())return A.Ko(a)
s=new URLSearchParams()
a.a2(0,new A.vi(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.b.X(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
Jr(){return A.eX(new Error())},
ID(a,b,c,d,e,f,g,h,i){var s=A.Ek(a,b,c,d,e,f,g,h,i)
if(s==null)return null
return new A.aa(A.DR(s,h,i),h,i)},
az(a,b,c){var s=A.Ek(a,b,c,0,0,0,0,0,!0)
return new A.aa(s==null?new A.nz(a,b,c,0,0,0,0,0).$0():s,0,!0)},
IC(){return new A.aa(Date.now(),0,!1)},
c1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=$.GN().aj(a)
if(b!=null){s=new A.nB()
r=b.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
p=A.X(q,c,c)
if(2>=r.length)return A.a(r,2)
q=r[2]
q.toString
o=A.X(q,c,c)
if(3>=r.length)return A.a(r,3)
q=r[3]
q.toString
n=A.X(q,c,c)
if(4>=r.length)return A.a(r,4)
m=s.$1(r[4])
if(5>=r.length)return A.a(r,5)
l=s.$1(r[5])
if(6>=r.length)return A.a(r,6)
k=s.$1(r[6])
if(7>=r.length)return A.a(r,7)
j=new A.nC().$1(r[7])
i=B.d.C(j,1000)
q=r.length
if(8>=q)return A.a(r,8)
h=r[8]!=null
if(h){if(9>=q)return A.a(r,9)
g=r[9]
if(g!=null){f=g==="-"?-1:1
if(10>=q)return A.a(r,10)
q=r[10]
q.toString
e=A.X(q,c,c)
if(11>=r.length)return A.a(r,11)
l-=f*(s.$1(r[11])+60*e)}}d=A.ID(p,o,n,m,l,k,i,j%1000,h)
if(d==null)throw A.k(A.z("Time out of range",a,c))
return d}else throw A.k(A.z("Invalid date format",a,c))},
DS(a){var s,r
try{s=A.c1(a)
return s}catch(r){if(A.aw(r) instanceof A.b9)return null
else throw r}},
DR(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.k(A.aM(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.k(A.aM(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.k(A.x(b,s,"Time including microseconds is outside valid range"))
A.cP(c,"isUtc",t.y)
return a},
DQ(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
IE(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
nA(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ds(a){if(a>=10)return""+a
return"0"+a},
C3(a,b,c,d){return new A.ck(b+1000*c+1e6*d+864e8*a)},
ag(a,b,c){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.k(A.x(b,"name","No enum value with that name"))},
C4(a,b){var s,r,q,p=A.w(t.N,b)
for(s=a.length,r=0;r<s;++r){q=a[r]
p.j(0,q.b,q)}return p},
kw(a){if(typeof a=="number"||A.ef(a)||a==null)return J.hV(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Eh(a)},
IH(a,b){A.cP(a,"error",t.K)
A.cP(b,"stackTrace",t.l)
A.IG(a,b)},
jY(a){return new A.jX(a)},
b2(a,b){return new A.ce(!1,null,b,a)},
x(a,b,c){return new A.ce(!0,a,b,c)},
ek(a,b,c){return a},
tH(a,b){return new A.hi(null,null,!0,a,b,"Value not in range")},
aM(a,b,c,d,e){return new A.hi(b,c,!0,a,d,"Invalid value")},
Cj(a,b,c,d){if(a<b||a>c)throw A.k(A.aM(a,b,c,d,null))
return a},
bR(a,b,c){if(0>a||a>c)throw A.k(A.aM(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.k(A.aM(b,a,c,"end",null))
return b}return c},
bb(a,b){if(a<0)throw A.k(A.aM(a,0,null,b,null))
return a},
nV(a,b,c,d){return new A.kG(b,!0,a,d,"Index out of range")},
aB(a){return new A.j6(a)},
j4(a){return new A.lJ(a)},
aq(a){return new A.dY(a)},
aI(a){return new A.ke(a)},
z(a,b,c){return new A.b9(a,b,c)},
IQ(a,b,c){var s,r
if(A.CZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.a.m($.ca,a)
try{A.La(a,s)}finally{if(0>=$.ca.length)return A.a($.ca,-1)
$.ca.pop()}r=A.Cm(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
C7(a,b,c){var s,r
if(A.CZ(a))return b+"..."+c
s=new A.bH(b)
B.a.m($.ca,a)
try{r=s
r.a=A.Cm(r.a,a,", ")}finally{if(0>=$.ca.length)return A.a($.ca,-1)
$.ca.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
La(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.i(l.gt())
B.a.m(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.n()){if(j<=4){B.a.m(b,A.i(p))
return}r=A.i(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.n();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.i(p)
r=A.i(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
Ea(a,b,c,d,e){return new A.f6(a,b.i("@<0>").a3(c).a3(d).a3(e).i("f6<1,2,3,4>"))},
by(a,b,c,d){var s
if(B.t===c){s=J.c0(a)
b=J.c0(b)
return A.ul(A.e1(A.e1($.mP(),s),b))}if(B.t===d){s=J.c0(a)
b=J.c0(b)
c=J.c0(c)
return A.ul(A.e1(A.e1(A.e1($.mP(),s),b),c))}s=J.c0(a)
b=J.c0(b)
c=J.c0(c)
d=J.c0(d)
d=A.ul(A.e1(A.e1(A.e1(A.e1($.mP(),s),b),c),d))
return d},
Ec(a){var s,r,q=$.mP()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q=A.e1(q,J.c0(a[r]))
return A.ul(q)},
Er(a,b){return new A.j5(A.kY(a,b),b.i("j5<0>"))},
JC(a){var s=t.N
return B.a.a4(A.b(a.split("&"),t.s),A.w(s,s),new A.uv(B.R),t.yz)},
lL(a,b,c){throw A.k(A.z("Illegal IPv4 address, "+a,b,c))},
JA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q<s))return A.a(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lL("each part must be in the range 0..255",a,r)}A.lL("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lL(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.C(d)
if(!(k<16))return A.a(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lL(j,a,q)
p=l}A.lL("IPv4 address should contain exactly 4 parts",a,q)},
EA(a,b,c){var s
if(b===c)throw A.k(A.z("Empty IP address",a,b))
if(!(b<a.length))return A.a(a,b)
if(a.charCodeAt(b)===118){s=A.JB(a,b,c)
if(s!=null)throw A.k(s)
return!1}A.EB(a,b,c)
return!0},
JB(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.b9(n,a,q)
r=q
break}return new A.b9("Unexpected character",a,q-1)}if(r-1===b)return new A.b9(n,a,r)
return new A.b9("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.b9("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.a(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.b9("Invalid IPvFuture address character",a,r)}},
EB(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uu(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.JA(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.ao(l,8)
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
B.i.aJ(s,a0,16,s,a)
B.i.aO(s,a,a0,0)}}return s},
F_(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
jA(a,b,c){throw A.k(A.z(c,a,b))},
jB(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.length,c="",b=e
if(d!==0){r=0
for(;;){if(!(r<d)){s=0
break}if(a0.charCodeAt(r)===64){c=B.b.X(a0,0,r)
s=r+1
break}++r}if(s<d&&a0.charCodeAt(s)===91){for(q=s,p=-1;q<d;++q){o=a0.charCodeAt(q)
if(o===37&&p<0){n=B.b.c5(a0,"25",q+1)?q+2:q
p=q
q=n}else if(o===93)break}if(q===d)throw A.k(A.z("Invalid IPv6 host entry.",a0,s))
m=p<0?q:p
A.EA(a0,s+1,m);++q
if(q!==d){if(!(q<d))return A.a(a0,q)
m=a0.charCodeAt(q)!==58}else m=!1
if(m)throw A.k(A.z("Invalid end of authority",a0,q))}else q=s
for(;q<d;++q)if(a0.charCodeAt(q)===58){l=B.b.ae(a0,q+1)
b=l.length!==0?A.X(l,e,e):e
break}k=B.b.X(a0,s,q)}else k=e
d=A.b(a1.split("/"),t.s)
a=A.Kp(a,0,a.length)
c=A.Kq(c,0,c.length)
k=A.Kj(k,0,k==null?0:k.length,!1)
j=A.Km(e,0,0,a2)
i=A.Ki(e,0,0)
b=A.Kl(b,a)
h=a==="file"
if(k==null)m=c.length!==0||b!=null||h
else m=!1
if(m)k=""
m=k==null
g=!m
f=A.Kk(e,0,0,d,a,g)
d=a.length===0
if(d&&m&&!B.b.am(f,"/"))f=A.F3(f,!d||g)
else f=A.F5(f)
return new A.jz(a,c,m&&B.b.am(f,"//")?"":k,b,f,j,i)},
Kl(a,b){if(a!=null&&a===A.F_(b))return null
return a},
Kj(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.a(a,r)
if(a.charCodeAt(r)!==93)A.jA(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.a(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Kg(a,q,r)
if(o<r){n=o+1
p=A.F4(a,B.b.c5(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.EA(a,q,o)
l=B.b.X(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.a(a,k)
if(a.charCodeAt(k)===58){o=B.b.ce(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.F4(a,B.b.c5(a,"25",n)?o+3:n,c,"%25")}else p=""
A.EB(a,b,o)
return"["+B.b.X(a,b,o)+p+"]"}}return A.Ku(a,b,c)},
Kg(a,b,c){var s=B.b.ce(a,"%",b)
return s>=b&&s<c?s:c},
F4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bH(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.a(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.CA(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bH("")
l=h.a+=B.b.X(a,q,r)
if(m)n=B.b.X(a,r,r+3)
else if(n==="%")A.jA(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bH("")
if(q<r){h.a+=B.b.X(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.a(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.X(a,q,r)
if(h==null){h=new A.bH("")
m=h}else m=h
m.a+=i
l=A.Cz(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.X(a,b,c)
if(q<c){i=B.b.X(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Ku(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r<s))return A.a(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.CA(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bH("")
k=B.b.X(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.X(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bH("")
if(q<r){p.a+=B.b.X(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.jA(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.a(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.X(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bH("")
l=p}else l=p
l.a+=k
j=A.Cz(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.X(a,b,c)
if(q<c){k=B.b.X(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Kp(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(!A.F1(a.charCodeAt(b)))A.jA(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.jA(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.X(a,b,c)
return A.Kf(q?a.toLowerCase():a)},
Kf(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Kq(a,b,c){return A.Ks(a,b,c,16,!1,!1)},
Kk(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.F(d),p=new A.ah(d,q.i("e(1)").a(new A.vf()),q.i("ah<1,e>")).Z(0,"/")
if(p.length===0){if(s)return"/"}else if(r&&!B.b.am(p,"/"))p="/"+p
return A.Kt(p,e,f)},
Kt(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.am(a,"/")&&!B.b.am(a,"\\"))return A.F3(a,!s||c)
return A.F5(a)},
Km(a,b,c,d){if(d==null)return null
return A.Kn(d)},
Ko(a){var s={},r=new A.bH("")
s.a=""
a.a2(0,new A.vg(new A.vh(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Ki(a,b,c){return null},
CA(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.a(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.a(a,l)
q=a.charCodeAt(l)
p=A.G_(r)
o=A.G_(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.a(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aX(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.X(a,b,b+3).toUpperCase()
return null},
Cz(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.dM(a,6*p)&63|q
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
o+=3}}return A.j1(s,0,null)},
Ks(a,b,c,d,e,f){var s=A.Kr(a,b,c,d,e,f)
return s==null?B.b.X(a,b,c):s},
Kr(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.a(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.CA(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.jA(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.a(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.Cz(n)}if(o==null){o=new A.bH("")
k=o}else k=o
k.a=(k.a+=B.b.X(a,p,q))+l
if(typeof m!=="number")return A.CX(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.X(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
F2(a){if(B.b.am(a,"."))return!0
return B.b.by(a,"/.")!==-1},
F5(a){var s,r,q,p,o,n,m
if(!A.F2(a))return a
s=A.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.a(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.Z(s,"/")},
F3(a,b){var s,r,q,p,o,n
if(!A.F2(a))return!b?A.F0(a):a
s=A.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gak(s)!==".."){if(0>=s.length)return A.a(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.a(s,0)
B.a.j(s,0,A.F0(s[0]))}return B.a.Z(s,"/")},
F0(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.F1(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.X(a,0,s)+"%3A"+B.b.ae(a,s+1)
if(r<=127){if(!(r<128))return A.a(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Kh(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.k(A.b2("Invalid URL encoding",null))}}return r},
CB(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.R===d)return B.b.X(a,b,c)
else p=new A.fR(B.b.X(a,b,c))
else{p=A.b([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.k(A.b2("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.k(A.b2("Truncated URI",null))
B.a.m(p,A.Kh(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}return d.cb(p)},
F1(a){var s=a|32
return 97<=s&&s<=122},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
uG:function uG(){},
uH:function uH(){},
uJ:function uJ(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uF:function uF(a,b){this.a=a
this.b=b},
vi:function vi(a){this.a=a},
nz:function nz(a,b,c,d,e,f,g,h){var _=this
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
nB:function nB(){},
nC:function nC(){},
ck:function ck(a){this.a=a},
m8:function m8(){},
aG:function aG(){},
jX:function jX(a){this.a=a},
e4:function e4(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kG:function kG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j6:function j6(a){this.a=a},
lJ:function lJ(a){this.a=a},
dY:function dY(a){this.a=a},
ke:function ke(a){this.a=a},
l9:function l9(){},
j0:function j0(){},
uP:function uP(a){this.a=a},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(){},
h:function h(){},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(){},
a0:function a0(){},
mr:function mr(){},
bH:function bH(a){this.a=a},
uv:function uv(a){this.a=a},
uu:function uu(a){this.a=a},
jz:function jz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.w=$},
vf:function vf(){},
vh:function vh(a,b){this.a=a
this.b=b},
vg:function vg(a){this.a=a},
kx:function kx(a,b){this.a=a
this.$ti=b},
IT(a){return a},
Cn(a){return a},
J9(a){return a},
ph:function ph(a){this.a=a},
bl(a){var s
if(typeof a=="function")throw A.k(A.b2("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.KD,a)
s[$.Db()]=a
return s},
KD(a,b,c){t.BO.a(a)
if(A.O(c)>=1)return a.$1(b)
return a.$0()},
CT(a,b,c){return c.a(a[b])},
Fj(a,b){return a[b]},
FM(a,b,c,d){return d.a(a[b].apply(a,c))},
bK(a,b){var s=new A.am($.ak,b.i("am<0>")),r=new A.cN(s,b.i("cN<0>"))
a.then(A.fI(new A.AW(r,b),1),A.fI(new A.AX(r),1))
return s},
AW:function AW(a,b){this.a=a
this.b=b},
AX:function AX(a){this.a=a},
Gf(a,b,c){A.FP(c,t.fY,"T","min")
return Math.min(c.a(a),c.a(b))},
Ge(a,b,c){A.FP(c,t.fY,"T","max")
return Math.max(c.a(a),c.a(b))},
Jh(){return $.jO()},
mc:function mc(a){this.a=a},
Iu(a,b,c){return J.jS(a,b,c)},
fy(a,b,c){var s=a.BYTES_PER_ELEMENT
c=A.bR(b,c,B.d.aA(a.byteLength,s))
return J.br(B.i.gab(a),a.byteOffset+b*s,(c-b)*s)},
kv:function kv(){},
kp:function kp(a){this.$ti=a},
kZ:function kZ(a){this.$ti=a},
vD(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=n*2,l=new Uint8Array(m)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
if(!(r<m))return A.a(l,r)
l[r]=o.charCodeAt(q>>>4&15)
r=p+1
if(!(p<m))return A.a(l,p)
l[p]=o.charCodeAt(q&15)}return A.j1(l,0,null)},
cj:function cj(a){this.a=a},
kq:function kq(){this.a=null},
h1:function h1(){},
kC:function kC(){},
mj:function mj(){},
ml:function ml(){},
mk:function mk(a,b,c,d,e,f,g,h){var _=this
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
mm:function mm(){},
mn:function mn(){},
lv:function lv(a,b,c,d,e,f,g,h,i){var _=this
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
k2:function k2(a,b,c){this.c=a
this.d=b
this.a=c},
Ir(){var s=$.ei()
return s},
n4:function n4(a){this.a=a},
k3:function k3(a,b){this.b=a
this.a=b},
DE(a){if(a instanceof A.u5)return"SHA-1"
if(a instanceof A.eG)return"SHA-256"
if(a instanceof A.u6)return"SHA-384"
if(a instanceof A.d7)return"SHA-512"
return null},
fO:function fO(){},
k6:function k6(){},
k7:function k7(){},
lU:function lU(){},
lV:function lV(){},
n5:function n5(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
n6:function n6(a){this.a=a},
Dz(){return $.b7().eQ(12,32)},
IF(){return $.b7().cH()},
IL(a,b){return $.b7().cL(a,b)},
IM(){var s=$.b7().cp()
return $.b7().cM(s)},
EC(){return $.b7().dq()},
f1:function f1(){},
hW:function hW(){},
i_:function i_(){},
id:function id(){},
kE:function kE(){},
eq:function eq(){},
u5:function u5(){},
eG:function eG(){},
u6:function u6(){},
d7:function d7(){},
uy:function uy(){},
nj:function nj(){},
np:function np(){},
ep:function ep(a){this.a=a},
cz:function cz(){},
kD:function kD(){},
mb:function mb(a){this.b=a
this.c=!1},
o5:function o5(){},
o8:function o8(){},
h7:function h7(){},
it:function it(){},
lj:function lj(){},
iu:function iu(a,b){this.a=a
this.$ti=b},
Eq(){return new A.iX()},
d2:function d2(a){this.a=a},
iX:function iX(){},
d3:function d3(){},
cD:function cD(){},
mg:function mg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
v8:function v8(a){this.a=a},
mw:function mw(){},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(){},
u2:function u2(){},
bq:function bq(a,b){this.b=a
this.c=b},
bt:function bt(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
lw:function lw(){},
d8:function d8(a,b,c){this.d=a
this.f=b
this.b=c},
bG:function bG(a,b){this.a=a
this.b=b},
la:function la(){this.a=null},
pl:function pl(){},
lb:function lb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=!1
_.f=d},
bU(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
ki(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bU(a5[0])
r=A.bU(a5[1])
q=A.bU(a5[2])
p=A.bU(a5[3])
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
f=B.d.R(k,16)
for(h=0;h<f;++h){g=j+h
if(!(g<k))return A.a(a7,g)
a4.setUint8(h,a7[g])}}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(e=o,d=0,c=0,b=0,a=0,j=0;j<128;++j,p=a3,q=a2,r=a1){g=B.d.R(j,32)
if(g===0&&j!==0)if(j===32)e=n
else e=j===64?m:l
if((e&B.d.b2(1,31-g))>>>0!==0){d=(d^s)>>>0
c=(c^r)>>>0
b=(b^q)>>>0
a=(a^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bU(s)
a5.$flags&2&&A.C(a5)
if(0>=4)return A.a(a5,0)
a5[0]=k
k=A.bU(r)
a5.$flags&2&&A.C(a5)
if(1>=4)return A.a(a5,1)
a5[1]=k
k=A.bU(q)
a5.$flags&2&&A.C(a5)
if(2>=4)return A.a(a5,2)
a5[2]=k
k=A.bU(p)
a5.$flags&2&&A.C(a5)
if(3>=4)return A.a(a5,3)
a5[3]=k},
DL(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.i.b1(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.d.C(q,n),!1)
r.setUint32(12,B.d.R(q,n),!1)
p=J.br(B.aC.gab(r),0,null)
o=new Uint32Array(4)
A.ki(o,a,b)
A.ki(o,a,p)
return J.br(B.E.gab(o),0,null)},
kh:function kh(a,b,c){this.c=a
this.d=b
this.a=c},
km:function km(){},
lY:function lY(){},
m0:function m0(){},
mA(b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b2.length
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
if($.f_()===B.a1){s=A.fF(s)
q=A.fF(q)
p=A.fF(p)
o=A.fF(o)}a9=b4.length
if(0>=a9)return A.a(b4,0)
s^=b4[0]
if(1>=a9)return A.a(b4,1)
q^=b4[1]
if(2>=a9)return A.a(b4,2)
p^=b4[2]
if(3>=a9)return A.a(b4,3)
o^=b4[3]
n=(a9/4|0)-1
for(m=4,l=1;l<n;++l,o=k,p=r,q=f,s=h){r=B.b_[s>>>24&255]
k=B.aY[q>>>16&255]
j=B.aZ[p>>>8&255]
i=B.b1[o&255]
if(!(m<a9))return A.a(b4,m)
h=r^k^j^i^b4[m]
i=B.b_[q>>>24&255]
j=B.aY[p>>>16&255]
k=B.aZ[o>>>8&255]
r=B.b1[s&255]
g=m+1
if(!(g<a9))return A.a(b4,g)
f=i^j^k^r^b4[g]
g=B.b_[p>>>24&255]
r=B.aY[o>>>16&255]
k=B.aZ[s>>>8&255]
j=B.b1[q&255]
i=m+2
if(!(i<a9))return A.a(b4,i)
r=g^r^k^j^b4[i]
i=B.b_[o>>>24&255]
j=B.aY[s>>>16&255]
k=B.aZ[q>>>8&255]
g=B.b1[p&255]
e=m+3
if(!(e<a9))return A.a(b4,e)
k=i^j^k^g^b4[e]
m+=4}r=B.D[s>>>24&255]
k=B.D[q>>>16&255]
j=B.D[p>>>8&255]
i=B.D[o&255]
g=B.D[q>>>24&255]
e=B.D[p>>>16&255]
d=B.D[o>>>8&255]
c=B.D[s&255]
f=B.D[p>>>24&255]
b=B.D[o>>>16&255]
a=B.D[s>>>8&255]
a0=B.D[q&255]
a1=B.D[o>>>24&255]
a2=B.D[s>>>16&255]
a3=B.D[q>>>8&255]
a4=B.D[p&255]
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
if($.f_()===B.a1){a5=A.fF(a5)
a6=A.fF(a6)
a7=A.fF(a7)
a8=A.fF(a8)}b0.$flags&2&&A.C(b0)
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
FE(a){var s,r,q,p,o,n,m,l,k,j="The bytes have been destroyed",i=a.gaN(),h=B.kO.h(0,i.gq(0))
if(h==null)throw A.k(A.b2("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.jS(B.E.gab(r),r.byteOffset,i.gq(0))
p=q.$flags|0
o=0
for(;;){n=i.a
if(n==null)A.f(A.aB(j))
if(!(o<J.aE(n)))break
n=i.a
if(n==null)A.f(A.aq(j))
m=J.at(n,o)
p&2&&A.C(q,9)
q.setUint8(o,m);++o}l=B.d.C(i.gq(0),4)
if($.f_()===B.a1)for(o=0;o<l;++o){p=q.getUint32(4*o,!1)
if(!(o<s))return A.a(r,o)
r[o]=p}for(p=l>6,o=l;o<s;++o){m=o-1
if(!(m>=0))return A.a(r,m)
k=r[m]
m=B.d.R(o,l)
if(m===0){k=A.Fy((k<<8|k>>>24)>>>0)
m=B.d.aA(o,l)-1
if(!(m>=0&&m<30))return A.a(B.dB,m)
k^=B.dB[m]<<24}else if(p&&m===4)k=A.Fy(k)
m=o-l
if(!(m<s))return A.a(r,m)
m=r[m]
if(!(o>=0&&o<s))return A.a(r,o)
r[o]=(k^m)>>>0}return r},
Fy(a){return(B.D[a>>>24&255]<<24|B.D[a>>>16&255]<<16|B.D[a>>>8&255]<<8|B.D[a&255])>>>0},
fF(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
nq:function nq(){},
ns(a,b,c){var s,r=J.an(c),q=r.gq(c)
a.$flags&2&&A.C(a,11)
a.setUint32(b,q,!0)
b+=4
for(s=0;s<r.gq(c);++s)a.setUint8(b+s,r.h(c,s))
return b+r.gq(c)},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b){this.a=a
this.b=b},
kj:function kj(){},
nt:function nt(a){this.a=a},
nr:function nr(a,b,c,d,e,f,g,h,i,j){var _=this
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
f7:function f7(a){this.a=a},
lZ:function lZ(){},
m_:function m_(){},
n2(a){var s=new Uint32Array(16),r=new Uint32Array(32)
s=new A.k0(s,r,new Uint32Array(32),a)
if($.f_()!==B.a1)A.f(A.j4("The platform should be little-endian."))
if(a<1||a>64)A.f(A.x(a,null,null))
s.d3(null)
return s},
f4(a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=4294967296
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
f=B.d.C(g,a)
e=a6+1
if(!(e<32))return A.a(a5,e)
q=f+q+n+a5[e]>>>0
g=(j^s)>>>0
d=(h^q)>>>0
c=m+d
m=c>>>0
k=B.d.C(c,a)+k+g>>>0
c=p^m
b=n^k
p=(b<<8|c>>>24)>>>0
n=(c<<8|b>>>24)>>>0
if(!(a7<32))return A.a(a5,a7)
c=s+p+a5[a7]
s=c>>>0
e=B.d.C(c,a)
f=a7+1
if(!(f<32))return A.a(a5,f)
q=e+q+n+a5[f]>>>0
c=d^s
d=g^q
j=(d<<16|c>>>16)>>>0
h=(c<<16|d>>>16)>>>0
g=m+j
m=g>>>0
k=B.d.C(g,a)+k+h>>>0
g=p^m
d=n^k
a0.$flags&2&&A.C(a0)
a0[a1]=s
a0[r]=q
a0[a2]=(g<<1|d>>>31)>>>0
a0[o]=(d<<1|g>>>31)>>>0
a0[a3]=m
a0[l]=k
a0[a4]=j
a0[i]=h},
k0:function k0(a,b,c,d){var _=this
_.a=a
_.b=$
_.c=b
_.d=$
_.e=0
_.f=!1
_.r=c
_.w=d},
lT:function lT(){},
IB(a){return new A.i5(a)},
i5:function i5(a){this.a=a},
i6:function i6(){},
f8:function f8(){},
nw:function nw(){},
i8:function i8(){},
cT:function cT(){},
DM(a){var s=$.b7().ei()
return new A.kk(s,a)},
BY(a){var s,r,q,p,o=B.a.a4(a,0,new A.nu(),t.S),n=new Uint8Array(o)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,A.l)(a),++q){p=a[q]
B.i.b1(n,r,p)
r+=p.length}return n},
BZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
if(d==null)d=A.kt()
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
s.bn(k,j)
i=c.b
h=c.a
r.bn(i,h)
s.al(s,r)
r.d6(0,k,j)
q.d6(0,i,h)
r.al(r,q)
h=$.GY()
q.al(h,b.d)
q.al(q,c.d)
q.al(q,$.Dd())
p.al(h,b.c)
p.al(p,c.c)
o.bn(r,s)
n.bn(p,q)
m.d6(0,p,q)
l.d6(0,r,s)
s.al(o,n)
r.al(m,l)
q.al(n,m)
p.al(o,l)},
C_(a){var s,r,q,p=new Int32Array(16),o=new A.aJ(p)
p=new Int32Array(16)
s=new Int32Array(16)
r=new A.aJ(s)
o.f9(a.c,$.De())
new A.aJ(p).al(a.a,o)
r.al(a.b,o)
if(15>=s.length)return A.a(s,15)
q=s[15]
if(0>=p.length)return A.a(p,0)
p=p[0]
s.$flags&2&&A.C(s)
s[15]=(q|(p&1)<<15)>>>0
return r.hK(new Uint8Array(32))},
DN(a){var s,r,q,p,o,n,m,l,k,j=null,i=new Uint8Array(A.aK(a))
if(31>=i.length)return A.a(i,31)
s=i[31]
r=s>>>7&1
i.$flags&2&&A.C(i)
i[31]=s&127
s=new Int32Array(16)
q=new A.aJ(s)
q.dw(i)
s=$.mO()
if(q.hq(s))return j
p=new Int32Array(16)
o=new A.aJ(p)
n=new Int32Array(16)
m=new A.aJ(n)
o.al(q,q)
n=$.Df()
o.bn(o,n)
m.al(q,q)
m.al(m,$.Dd())
m.d6(0,m,n)
m.f9(m,$.De())
l=new Int32Array(16)
k=new A.aJ(l)
k.al(o,m)
if(k.gdi())if(r===1)return j
else{s=$.GZ()
return new A.dv(s,q,n,s)}o.c3($.GV().b_())
o.f9(k,o)
m.al(o,o)
m.bn(m,k)
if(!m.gdi())o.al(o,$.GW())
m.al(o,o)
m.bn(m,k)
if(!m.gdi())return j
if(0>=p.length)return A.a(p,0)
if((p[0]&1)!==r)o.bn(s,o)
m.al(o,q)
return new A.dv(o,q,n,m)},
kl(a,b){var s,r,q,p,o,n,m,l=A.kt(),k=l.b.a
k.$flags&2&&A.C(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=l.c.a
k.$flags&2&&A.C(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=new Int32Array(A.aK(b.a.a))
s=new Int32Array(A.aK(b.b.a))
r=new Int32Array(A.aK(b.c.a))
q=new Int32Array(A.aK(b.d.a))
b=new A.dv(new A.aJ(k),new A.aJ(s),new A.aJ(r),new A.aJ(q))
p=A.kt()
o=A.kt()
for(k=a.a,s=k.length,n=0;n<256;++n,m=p,p=b,b=m){r=B.d.C(n,16)
if(!(r<s))return A.a(k,r)
if((B.d.ao(k[r],B.d.R(n,16))&1)===1){A.BZ(p,l,b,o)
m=p
p=l
l=m}A.BZ(p,b,b,o)}return l},
DO(a){var s,r=a.length
if(0>=r)return A.a(a,0)
s=a[0]
a.$flags&2&&A.C(a)
a[0]=s&248
if(31>=r)return A.a(a,31)
a[31]=a[31]&127
a[31]=a[31]|64},
kk:function kk(a,b){this.b=a
this.a=b},
nu:function nu(){},
kt(){var s=null,r=new Int32Array(16),q=new Int32Array(16),p=new Int32Array(16),o=new Int32Array(16)
return new A.dv(new A.aJ(r),new A.aJ(q),new A.aJ(p),new A.aJ(o))},
fq(a){var s
if(a==null)s=new Int32Array(16)
else s=a
return new A.aJ(s)},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nH:function nH(){},
aJ:function aJ(a){this.a=a},
tR:function tR(){},
ln:function ln(){this.a=null},
nv:function nv(a,b){this.a=a
this.b=b},
EN(a,b,c){var s,r,q,p
for(s=a.length,r=J.an(b),q=0;q<s;++q){p=q<r.gq(b)?(r.h(b,q)^c)>>>0:c
a.$flags&2&&A.C(a)
a[q]=p}},
i7:function i7(a){this.a=a},
m1:function m1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
m2:function m2(){},
mv:function mv(){},
i9:function i9(){},
m3:function m3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=!1
_.w=_.r=0
_.x=e},
m4:function m4(){},
kn:function kn(){},
m5:function m5(){},
m6:function m6(){},
C0(a){var s,r,q
if(J.aE(a)!==32)throw A.k(A.b2("Seed must be 32 bytes",null))
s=new Uint8Array(A.aK(a))
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
s.$flags&2&&A.C(s)
s[0]=q&248
if(31>=r)return A.a(s,31)
s[31]=s[31]|64
s[31]=s[31]&127
return s},
DP(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new Int32Array(16)
new A.aJ(a3).dw(a6)
s=a3.length
if(15>=s)return A.a(a3,15)
r=a3[15]
a3.$flags&2&&A.C(a3)
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
p[k]=r}for(s=a5.length,j=254;j>=0;--j){r=B.d.ao(j,3)
if(!(r<s))return A.a(a5,r)
i=a5[r]>>>(j&7)&1
A.ko(q,p,i)
A.ko(o,n,i)
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
p[k]=g-e}A.cb(n,m,m)
A.cb(l,q,q)
A.cb(q,o,q)
A.cb(o,p,m)
for(k=0;k<16;++k){h=q[k]
f=o[k]
if(!(k<16))return A.a(m,k)
m[k]=h+f
if(!(k<16))return A.a(q,k)
q[k]=h-f
r=n[k]
d=l[k]
if(!(k<16))return A.a(o,k)
o[k]=r-d}A.cb(p,q,q)
A.cb(q,$.GL(),o)
for(k=0;k<16;++k){r=q[k]
d=n[k]
if(!(k<16))return A.a(q,k)
q[k]=r+d}A.cb(o,q,o)
A.cb(q,n,l)
A.cb(n,a3,p)
A.cb(p,m,m)
A.ko(q,p,i)
A.ko(o,n,i)}for(k=0;k<16;++k){a3=o[k]
if(!(k<16))return A.a(n,k)
n[k]=a3}for(k=253;k>=0;--k){A.cb(o,o,o)
if(k!==2&&k!==4)A.cb(o,o,n)}A.cb(q,q,o)
for(k=0;k<3;++k){for(c=1,b=0;b<16;++b){a=65535+q[b]+c
c=B.d.C(a,65536)
if(!(b<16))return A.a(q,b)
q[b]=a-65536*c}a3=q[0]
if(0>=16)return A.a(q,0)
q[0]=a3+38*(c-1)}for(k=0;k<2;++k){a0=q[0]-65517
if(0>=16)return A.a(p,0)
p[0]=a0&65535
for(a1=1;a1<15;++a1,a0=a2){a2=q[a1]-65535-(B.d.ao(a0,16)&1)
if(!(a1<16))return A.a(p,a1)
p[a1]=a2&65535}a3=q[15]
s=B.d.ao(a0,16)
if(15>=16)return A.a(p,15)
p[15]=a3-32767-(s&1)
A.ko(q,p,1-(B.d.ao(p[15],16)&1))}new A.aJ(q).hK(a4)},
ko(a,b,c){var s,r,q,p,o,n=~(c-1)
for(s=a.$flags|0,r=b.$flags|0,q=0;q<16;++q){p=a[q]
o=n&(p^b[q])
s&2&&A.C(a)
if(!(q<16))return A.a(a,q)
a[q]=(p^o)>>>0
p=b[q]
r&2&&A.C(b)
if(!(q<16))return A.a(b,q)
b[q]=(p^o)>>>0}},
ia:function ia(a){this.a=a},
ny:function ny(){},
nx:function nx(){},
m7:function m7(){},
uO:function uO(){},
C1(a){return new A.P(A.aC(a),0)},
ad(a){var s,r,q,p,o,n,m,l=null,k=$.GO().aj(a)
if(k==null)throw A.k(A.z(a+" is not a valid format",l,l))
s=k.b
r=s.length
if(1>=r)return A.a(s,1)
q=s[1]
if(2>=r)return A.a(s,2)
p=s[2]
if(p==null)p=""
if(3>=r)return A.a(s,3)
o=s[3]
n=A.uI(A.i(q)+p,l)
m=o==null?0:-A.X(o,l,l)
return new A.P(n,m+p.length)},
dt(a){var s,r
try{s=A.ad(a)
return s}catch(r){if(A.aw(r) instanceof A.b9)return null
else throw r}},
DT(a,b){var s,r=a.b,q=b.b
A:{if(r>q){s=new A.p(a,new A.P(b.a.a0(0,$.cR().aV(r-q)),r))
break A}if(r<q){s=new A.p(new A.P(a.a.a0(0,$.cR().aV(q-r)),q),b)
break A}s=new A.p(a,b)
break A}return s},
El(a,b){var s,r,q
if(A.Jj(a)){s=A.Ji(a)
r=a.a0(0,A.c_($.cR().aV(s),null))
return new A.P(r.a.aA(0,r.b),s)}q=$.Dq().aV(b)
return new A.P(new A.tI().$1(a.a0(0,q)),b)},
Jj(a){var s,r,q,p=a.b
for(;;){s=$.HC()
r=p.R(0,s)
q=$.Dm()
r=r.l(0,q)
if(!(r===0))break
if(s.c===0)A.f(B.Y)
p=p.bC(s)}for(;;){s=$.Dn()
r=p.R(0,s).l(0,q)
if(!(r===0))break
if(s.c===0)A.f(B.Y)
p=p.bC(s)}s=p.l(0,$.jQ())
return s===0},
Ji(a){var s,r,q=a,p=0
for(;;){s=q.b
r=s.l(0,$.hT())
if(!(r!==0))break;++p
r=$.Dq()
q=A.c_(q.a.a0(0,r.a),s.a0(0,r.b))}return p},
P:function P(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
nD:function nD(a){this.a=a},
tI:function tI(){},
hA:function hA(a,b){this.a=a
this.b=b},
KM(a,b){var s,r
for(;;){s=b.l(0,$.hS())
if(!(s!==0))break
r=a.R(0,b)
a=b
b=r}return a},
c_(a,b){var s,r,q
if(b==null)return new A.cF(a,$.hT())
s=$.hS()
r=b.l(0,s)
if(r===0)throw A.k(A.b2("zero can not be used as denominator",null))
r=a.l(0,s)
if(r===0)return new A.cF(s,$.hT())
if(b.l(0,s)<0){a=a.S(0)
b=b.S(0)}s=a.a?a.S(0):a
q=A.KM(s,b.a?b.S(0):b)
return new A.cF(a.aA(0,q),b.aA(0,q))},
tJ(a){return A.c_(A.aC(a),A.aC(1))},
cF:function cF(a,b){this.a=a
this.b=b},
jV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){return new A.bs(k,c,m,n,h,j,e,a4,d,a3,a,b,o,q,a6,a5,i,g,a1,a2,s,a0,a7,l,p,f,r)},
BW(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="minimumBalance",a7="statement",a8="startFrom",a9="driveFolder",b0="closedAfter",b1="replacedFrom",b2="ownStartDate",b3="ownStartFrom",b4=b5.h(0,"id")
b4.toString
A.c(b4)
s=b5.h(0,"alias")
s.toString
A.c(s)
r=b5.h(0,"institution")
r.toString
A.c(r)
q=b5.h(0,"kind")
q.toString
q=A.ag(B.dM,A.c(q),t.jN)
p=b5.h(0,"currency")
p.toString
A.c(p)
o=b5.h(0,"holder")
o.toString
A.c(o)
n=b5.h(0,"bookId")
n.toString
A.c(n)
m=b5.h(0,"startDate")
m.toString
m=A.ax(A.c(m))
l=A.aH(b5.h(0,"billingCycleDay"))
k=A.aH(b5.h(0,"staleAfterDays"))
j=A.m(b5.h(0,"alertEmail"))
i=A.m(b5.h(0,"alertPhone"))
if(b5.h(0,"loan")==null)h=a5
else{h=b5.h(0,"loan")
h.toString
h=A.Cf(t.J.a(h))}if(b5.h(0,a6)==null)g=a5
else{g=b5.h(0,a6)
g.toString
g=A.aP(t.J.a(g))}if(b5.h(0,a7)==null)f=a5
else{f=b5.h(0,a7)
f.toString
f=A.Eu(t.J.a(f))}if(b5.h(0,a8)==null)e=a5
else{e=b5.h(0,a8)
e.toString
e=A.ua(t.f.a(e).G(0,t.N,t.X))}if(b5.h(0,a9)==null)d=a5
else{d=b5.h(0,a9)
d.toString
d=A.DU(t.f.a(d).G(0,t.N,t.X))}if(b5.h(0,b0)==null)c=a5
else{c=b5.h(0,b0)
c.toString
c=A.ax(A.c(c))}b=A.m(b5.h(0,"replacedBy"))
if(b5.h(0,b1)==null)a=a5
else{a=b5.h(0,b1)
a.toString
a=A.ax(A.c(a))}if(b5.h(0,b2)==null)a0=a5
else{a0=b5.h(0,b2)
a0.toString
a0=A.ax(A.c(a0))}if(b5.h(0,b3)==null)a1=a5
else{a1=b5.h(0,b3)
a1.toString
a1=A.ua(t.f.a(a1).G(0,t.N,t.X))}if(b5.h(0,"subtype")==null)a2=a5
else{a2=b5.h(0,"subtype")
a2.toString
a2=A.ag(B.dz,A.c(a2),t.vi)}a3=A.m(b5.h(0,"ifsc"))
a4=A.m(b5.h(0,"micr"))
return A.jV(j,i,s,l,n,A.m(b5.h(0,"branch")),c,p,d,o,b4,a3,r,q,h,a4,g,A.m(b5.h(0,"numberShown")),a0,a1,b,a,k,m,e,f,a2)},
N3(a){A.c(a)
return $.f0().aM(0,a).gq(0)>=9},
FK(a,b,c,d){var s,r
if(b!=null){s=$.HE()
s=!s.b.test(b)}else s=!1
if(s)return"an IFSC is 4 letters, a 0 and 6 letters or digits"
if(c!=null){s=$.HO()
s=!s.b.test(c)}else s=!1
if(s)return"a MICR code is 9 digits"
if(a!=null)s=B.b.I(a).length===0||a.length>80
else s=!1
if(s)return"a branch name is 1 to 80 characters"
if(d!=null){r=A.D("\\d",!0,!1).aM(0,d).gq(0)
if(r>6)return"the number as statements show it keeps at most 6 digits; type X for the rest"
s=$.HU()
if(!s.b.test(d)||r===0)return"the number as statements show it is its digits shown, with X for each hidden one"}return null},
eU(a){var s,r,q,p,o,n,m,l,k,j,i,h="the alias must look like EXAMPLEBANK-CC-1234 (last 4 digits only)",g=a.b,f=A.b([a.a,g,a.c,a.f],t.s),e=a.z
if(e!=null)f.push(e)
e=a.fy
if(e!=null)f.push(e)
if(B.a.M(f,A.FD()))return"an entry looks like a full card or account number; only the last 4 digits are kept"
f=a.d
s=f===B.x
r=$.Hv()
if(s!==r.b.test(g))return s?"a cash wallet is named CASH and its currency":h
if(!s){s=$.HN()
g=!s.b.test(g)}else g=!1
if(g)return h
g=a.e
if(!B.e.E(g))return"currency "+g+" is not supported"
q=A.FK(e,a.fr,a.fx,a.go)
if(q!=null)return q
A:{p=a.dy
if(B.ct===p||B.cu===p)e=f!==B.N||g!=="INR"
else e=!1
if(e)return p.c+" is a savings account in INR"
if(B.bh===p&&f!==B.a7)return"SRS is a retirement account"
break A}o=a.x
if(o!=null)e=f!==B.y||o<1||o>31
else e=!1
if(e)return"a billing day is 1 to 31 and only for a credit card"
n=a.as
if(n!=null){if(f!==B.o)return"loan details are only for a loan"
m=A.Gb(n,g)
if(m!=null)return m}l=a.at
if(l!=null){if(!a.gaS())return"a minimum balance is only for a savings or current account"
if(l.b!==g)return"the minimum balance must be in "+g
if(l.a.l(0,$.L())<0)return"a minimum balance is zero or more"}k=a.ax
if(k!=null){m=A.NQ(k,f)
if(m!=null)return m}j=a.y
if(j!=null&&j<1)return"the stale window is at least 1 day"
g=a.db==null
i=g?a.ay:a.dx
f=i==null
if(!f&&i.a===B.an&&g){if(a.gaS())return"a start from a folder year is only for a card or a loan"
g=i.b
g.toString
if(!a.w.J(0,new A.A(g,1,1)))return"a folder-year start is 1 January of that year"
if(a.ch==null)return"a folder-year start needs the account's Drive folder"}g=f?null:i.c
f=a.ch
if(B.a.M(A.b([g,f==null?null:f.b],t.q),new A.vX()))return"a folder path looks like it holds a full card or account number"
return null},
cd:function cd(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.c=a
this.a=b
this.b=c},
bs:function bs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
vX:function vX(){},
Jt(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a7.h(0,"currency")
a6.toString
A.c(a6)
s=A.m(a7.h(0,"reconciledAtUtc"))
r=A.m(a7.h(0,"minimumDue"))
q=A.m(a7.h(0,"dueDate"))
p=a7.h(0,"statementId")
p.toString
A.c(p)
o=a7.h(0,"accountId")
o.toString
A.c(o)
n=a7.h(0,"periodStart")
n.toString
n=A.ax(A.c(n))
m=a7.h(0,"periodEnd")
m.toString
m=A.ax(A.c(m))
l=a7.h(0,"opening")
l.toString
l=A.a3(A.ad(A.c(l)),a6)
k=a7.h(0,"closing")
k.toString
k=A.a3(A.ad(A.c(k)),a6)
j=s==null?a5:A.c1(s).F()
a6=r==null?a5:A.a3(A.ad(r),a6)
i=q==null?a5:A.ax(q)
h=A.m(a7.h(0,"ocrEngine"))
g=a7.h(0,"ocrRowsChecked")
A:{if(t.j.b(g)){f=A.b([],t.Dk)
for(e=J.R(g),d=t.f,c=t.N,b=t.X;e.n();){a=e.gt()
a.toString
a0=d.a(a).G(0,c,b)
a1=a0.h(0,"lineId")
a1.toString
A.c(a1)
a2=a0.h(0,"field")
a2.toString
A.c(a2)
a3=a0.h(0,"ocr")
a3.toString
A.c(a3)
a0=a0.h(0,"owner")
a0.toString
f.push(new A.l8(a1,a2,a3,A.c(a0)))}break A}f=a5
break A}e=A.b([],t.Ev)
d=t.jS.a(a7.h(0,"loans"))
d=J.R(d==null?B.b0:d)
c=t.f
b=t.N
a0=t.X
while(d.n()){a4=d.gt()
a4.toString
e.push(A.Et(c.a(a4).G(0,b,a0)))}return new A.c9(p,o,n,m,l,k,j,a6,i,h,f,e)},
FZ(a,b,c){var s=c.aC(-30)
return a.bI(b).M(0,new A.zf(s))},
NN(a,b){var s,r,q,p,o,n,m=a.ax
switch(m==null?null:m.c){case B.cf:return 31
case B.cg:return 92
case B.ch:return 184
case B.ci:return 366
case null:case void 0:break}m=J.Il(b)
s=A.B(m,A.o(m).c)
B.a.D(s,new A.Bk())
m=s.length
r=m>7?B.a.dB(s,m-6-1):s
if(r.length<2)return 31
m=A.b([],t.t)
for(q=1;q<r.length;++q)m.push(r[q-1].a8(r[q]))
B.a.bb(m)
p=m.length
o=B.d.C(p-1,2)
if(!(o>=0&&o<p))return A.a(m,o)
o=m[o]
n=p/2|0
if(!(n<p))return A.a(m,n)
return B.d.C(o+m[n]+1,2)},
FJ(a,b,c,d,e){var s,r,q,p
for(s=J.R(c),r=null;s.n();){q=s.gt()
if(r==null||q.l(0,r)>0)r=q}if(r==null)return!0
p=r.a8(e)
if(d){s=a.y
return p>(s==null?b:s)}return p>A.NN(a,c)+10},
NY(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=a5.fx,a0=t.v,a1=A.aD(a,a0),a2=A.F(a1),a3=a2.i("n<1>"),a4=A.B(new A.n(a1,a2.i("j(1)").a(new A.Br(a6)),a3),a3.i("h.E"))
B.a.D(a4,new A.Bs())
s=a4.length===0?d:B.a.gak(a4)
for(a=A.aD(a,a0),a0=A.F(a),a1=a0.i("j(1)").a(new A.Bt(a6)),a=B.a.gA(a),a0=new A.N(a,a1,a0.i("N<1>")),r=d;a0.n();){a1=a.gt()
a2=!0
if(r!=null){a3=a1.r
q=a3.a
p=r.a
if(q<=p)a2=q===p&&a3.b>r.b}if(a2)r=a1.r}a=a6.a
a0=a5.bI(a)
o=A.B(a0,a0.$ti.i("h.E"))
for(a0=a5.hu(a,!0),a1=J.R(a0.a),a0=new A.N(a1,a0.b,a0.$ti.i("N<1>")),n=d;a0.n();){m=a1.gt().y.c
a2=!0
if(n!=null){a3=m.a
q=n.a
if(a3<=q)a2=a3===q&&m.b>n.b}if(a2)n=m}a0=a6.e
a1=$.L()
l=A.a3(a1,a0)
k=A.a3(a1,a0)
for(a1=a5.bI(a),a2=a1.$ti,a3=a2.i("j(h.E)").a(new A.Bu(a6)),a1=a1.gA(0),a2=new A.N(a1,a3,a2.i("N<h.E>")),j=0,i=0;a2.n();){a3=a1.gt()
if(A.jM(a3)!==B.am)continue;++j
q=a3.f
p=q.b
if(p!==a0)++i
else if(a3.e===B.k){a3=l.b
if(p!==a3)A.f(A.a8(a3,p))
q=l.a.B(0,q.a)
l=new A.q(q,a3)
h=B.e.h(0,a3)
if(h==null)A.f(A.x(a3,c,b))
if((q.b<=0?0:Math.max(q.gv().b,0))>h)A.f(A.z(a3+" allows "+A.i(h)+" decimal places",q.k(0),d))}else{a3=k.b
if(p!==a3)A.f(A.a8(a3,p))
q=k.a.B(0,q.a)
k=new A.q(q,a3)
h=B.e.h(0,a3)
if(h==null)A.f(A.x(a3,c,b))
if((q.b<=0?0:Math.max(q.gv().b,0))>h)A.f(A.z(a3+" allows "+A.i(h)+" decimal places",q.k(0),d))}}g=A.aF(a8,B.q)
a0=s==null
f=a0?d:s.d
a0=a0?d:s.f
a1=A.b([],t.F)
for(a2=a4.length,e=0;e<a4.length;a4.length===a2||(0,A.l)(a4),++e)a1.push(a4[e].d)
a=A.FJ(a6,a7,a1,A.FZ(a5,a,g),g)
if(f!=null){a1=A.F(o)
new A.n(o,a1.i("j(1)").a(new A.Bv(f)),a1.i("n<1>")).gq(0)}return new A.mW(a0,f,a,j,l,k)},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mW:function mW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.f=c
_.w=d
_.x=e
_.y=f},
zf:function zf(a){this.a=a},
Bk:function Bk(){},
Br:function Br(a){this.a=a},
Bs:function Bs(){},
Bt:function Bt(a){this.a=a},
Bu:function Bu(a){this.a=a},
Bv:function Bv(a){this.a=a},
O4(a){var s,r,q=A.w(t.N,t.S)
for(s=J.R(a);s.n();){r=s.gt()
if(r.d!==B.x)q.n3(r.f,new A.BG(),new A.BH())}if(q.a===0)return null
s=q.$ti.i("ac<1,2>")
s=A.B(new A.ac(q,s),s.i("h.E"))
B.a.D(s,new A.BI())
return B.a.gY(s).a},
cn:function cn(a,b){this.a=a
this.b=b},
BG:function BG(){},
BH:function BH(){},
BI:function BI(){},
ua(a){var s,r=null,q=a.h(0,"kind")
q.toString
switch(A.ag(B.ks,A.c(q),t.qe)){case B.an:q=a.h(0,"year")
q.toString
A.O(q)
s=a.h(0,"folder")
s.toString
s=new A.ho(B.an,q,A.c(s),r)
q=s
break
case B.cd:q=a.h(0,"statementId")
q.toString
q=new A.ho(B.cd,r,r,A.c(q))
break
case B.ce:q=B.mw
break
default:q=r}return q},
DU(a){var s,r=a.h(0,"id")
r.toString
A.c(r)
s=a.h(0,"path")
s.toString
return new A.ks(r,A.c(s))},
eJ:function eJ(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ks:function ks(a,b){this.a=a
this.b=b},
Eu(a){var s,r,q
if(a.h(0,"source")==null)s=null
else{s=a.h(0,"source")
s.toString
s=A.ag(B.jN,A.c(s),t.u4)}if(a.h(0,"format")==null)r=null
else{r=a.h(0,"format")
r.toString
r=A.ag(B.jo,A.c(r),t.nT)}if(a.h(0,"cycle")==null)q=null
else{q=a.h(0,"cycle")
q.toString
q=A.ag(B.j5,A.c(q),t.Bu)}return new A.lB(s,r,q,A.aH(a.h(0,"day")))},
NQ(a,b){var s=a.d
if(s==null)return null
if(b===B.y)return"a card has no statement day; its billing cycle day is the closing day"
if(s<1||s>31)return"the statement day is 1 to 31"
return null},
eL:function eL(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
MF(a){var s
if(!B.a.M(B.jm,new A.yu(a)))return"a fact is an identity or a helper fact"
s=a.d
if(B.b.I(s).length===0)return"a fact has a value"
if(B.a.M(A.b([a.b,a.c,s,a.f.c],t.s),new A.yv()))return"a fact looks like it holds a full number; only the last 4 characters are kept"
return null},
dx:function dx(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
yu:function yu(a){this.a=a},
yv:function yv(){},
Fn(a){var s,r,q,p={}
p.a=4
s=t.q6
r=s.i("ah<a2.E,e>")
q=A.B(new A.ah(new A.aQ(A.b(a.split(""),t.s),s),s.i("e(a2.E)").a(new A.vE(p)),r),r.i("a2.E"))
return new A.aQ(q,A.F(q).i("aQ<1>")).cg(0)},
Fo(a){return A.hQ(a,$.Hw(),t.tj.a(t.w.a(new A.vH())),null)},
zy(a){var s,r,q,p,o,n,m,l,k,j
for(s=$.HD(),r=t.w,q=t.tj,p=a,o=0;o<3;++o)p=A.hQ(p,s[o],q.a(r.a(new A.zz())),null)
for(s=$.HZ().aM(0,p),s=new A.fz(s.a,s.b,s.c),r=t.ez,n=0,q="";s.n();q=j){m=s.d
l=(m==null?r.a(m):m).b
k=l.index
j=A.Fo(B.b.X(p,n,k))
if(0>=l.length)return A.a(l,0)
j=q+j+A.i(l[0])
n=k+l[0].length}s=q+A.Fo(B.b.ae(p,n))
return s.charCodeAt(0)==0?s:s},
vE:function vE(a){this.a=a},
vH:function vH(){},
zz:function zz(){},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
LU(a,b){var s
switch(b){case null:case void 0:s=a===B.cx||a===B.bm
break
case B.bi:s=B.ms.u(0,a)
break
case B.cv:s=a!==B.bl&&a!==B.bm
break
default:s=null}return s},
CL(c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="currency",c1="is not a supported currency",c2=A.b([],t.eR),c3=c7.gL().gT(),c4=A.o(c3),c5=c4.i("n<h.E>"),c6=A.B(new A.n(c3,c4.i("j(h.E)").a(new A.xJ(c8)),c5),c5.i("h.E"))
B.a.D(c6,new A.xK())
for(c3=c6.length,c4=c7.x2,c5=t.N,s=t.d6,r=t.s,q=t.h,p=c7.fy,o=t.dh,n=t.W,m=c7.fx,l=t.v,k=0;k<c6.length;c6.length===c3||(0,A.l)(c6),++k){j=c6[k]
i=A.d1(m,!1,l)
i.$flags=3
h=i
g=A.F(h)
f=g.i("n<1>")
e=A.B(new A.n(h,g.i("j(1)").a(new A.xL(j)),f),f.i("h.E"))
B.a.D(e,new A.xM())
h=j.a
g=c7.bI(h)
f=g.$ti
g=A.B(new A.n(g,f.i("j(h.E)").a(new A.xN()),f.i("n<h.E>")),n)
B.a.a1(g,A.KC(c7,j))
B.a.D(g,new A.xO())
i=A.d1(p,!1,o)
i.$flags=3
f=i
d=A.F(f)
c=d.i("n<1>")
b=A.B(new A.n(f,d.i("j(1)").a(new A.xP(j,c7)),c),c.i("h.E"))
f=A.a4(q)
for(d=e.length,a=0;a<e.length;e.length===d||(0,A.l)(e),++a)f.m(0,e[a].d)
for(d=b.length,a=0;a<b.length;b.length===d||(0,A.l)(b),++a){a0=b[a]
c=a0.d
f.m(0,c==null?a0.c:c)}a1=A.B(f,f.$ti.c)
B.a.bb(a1)
a2=new A.xR(a1)
a3=A.My(j)
for(f=e.length,a=0;a<e.length;e.length===f||(0,A.l)(e),++a){a4=e[a]
d=a4.d
c=a4.f
a5=c.b
a6=A.Fb(g,d,a2.$1(d),a5)
a7=A.Fz(a6,a5)
c=c.a
a8=c.a
if(a8.ga9(0)<0){c=c.b
a8=new A.P(a8.S(0),c)
a9=new A.q(a8,a5)
b0=B.e.h(0,a5)
if(b0==null)A.f(A.x(a5,c0,c1))
if((c<=0?0:Math.max(a8.gv().b,0))>b0)A.f(A.z(a5+" allows "+A.i(b0)+" decimal places",a8.k(0),b9))}else{c=$.L()
a9=new A.q(c,a5)
b0=B.e.h(0,a5)
if(b0==null)A.f(A.x(a5,c0,c1))
if((c.b<=0?0:Math.max(c.gv().b,0))>b0)A.f(A.z(a5+" allows "+A.i(b0)+" decimal places",c.k(0),b9))}c="statement:"+a4.a
a5=a7.b
a8=a9.b
if(a5!==a8)A.f(A.a8(a8,a5))
a5=a7.a
a5=a9.a.B(0,new A.P(a5.a.S(0),a5.b))
b1=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b0)A.f(A.z(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
if(a5.a.ga9(0)<0){a5=$.L()
b2=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b0)A.f(A.z(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
a5=b2}else a5=b1
a8=A.b([],r)
for(b2=a6.length,b3=0;b3<a6.length;a6.length===b2||(0,A.l)(a6),++b3)a8.push(a6[b3].a)
B.a.m(c2,new A.cg(c,h,d,a9,a4.x,a7,a5,!0,a8,A.a5(c4,c5,s).h(0,c),a2.$1(d)==null,a3))}for(f=b.length,b4=j.e,a=0;a<b.length;b.length===f||(0,A.l)(b),++a){a0=b[a]
b5=a0.e
b6=a0.d
b7=b6==null?a0.c:b6
d=b5==null
b8=d?b9:b5.b
if(b8==null)b8=b4
a6=A.Fb(g,b7,a2.$1(b7),b8)
a7=A.Fz(a6,b8)
c="notice:"+a0.a
if(d)d=b9
else{d=b5.a
a5=a7.b
a8=b5.b
if(a5!==a8)A.f(A.a8(a8,a5))
a5=a7.a
a5=d.B(0,new A.P(a5.a.S(0),a5.b))
b1=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b0)A.f(A.z(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
if(a5.a.ga9(0)<0){d=$.L()
a5=new A.q(d,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((d.b<=0?0:Math.max(d.gv().b,0))>b0)A.f(A.z(a8+" allows "+A.i(b0)+" decimal places",d.k(0),b9))
d=a5}else d=b1}a5=A.b([],r)
for(a8=a6.length,b3=0;b3<a6.length;a6.length===a8||(0,A.l)(a6),++b3)a5.push(a6[b3].a)
B.a.m(c2,new A.cg(c,h,b6,b5,a0.r,a7,d,a0.w,a5,A.a5(c4,c5,s).h(0,c),a2.$1(b7)==null,a3))}}B.a.D(c2,new A.xQ())
return c2},
My(a){var s=a.ax,r=s==null?null:s.c
A:{if(B.cg===r){s=93
break A}if(B.ch===r){s=186
break A}if(B.ci===r){s=372
break A}if(B.cf===r||r==null){s=31
break A}s=null}return s},
Fb(a,b,c,d){var s,r,q,p,o,n,m=A.b([],t.A)
for(s=a.length,r=c!=null,q=0;q<a.length;a.length===s||(0,A.l)(a),++q){p=a[q]
o=!1
if(p.f.b===d){n=p.w
if(n.l(0,b)>0)o=!r||n.l(0,c)<=0}if(o)m.push(p)}return m},
Fz(a,b){return B.a.a4(a,A.a3($.L(),b),new A.vR(),t.B)},
KC(a,b){var s,r,q,p=A.D("[^A-Z0-9]",!0,!1),o=A.ao(b.c.toUpperCase(),p,"")
if(o.length===0)return B.ab
p=a.gL().gT()
s=A.o(p)
r=s.i("n<h.E>")
q=A.B(new A.n(p,s.i("j(h.E)").a(new A.vv(o)),r),r.i("h.E"))
p=a.b3()
s=p.$ti
return new A.n(p,s.i("j(h.E)").a(new A.vw(a,q,b,o)),s.i("n<h.E>"))},
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
cf:function cf(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
xJ:function xJ(a){this.a=a},
xK:function xK(){},
xL:function xL(a){this.a=a},
xM:function xM(){},
xN:function xN(){},
xO:function xO(){},
xP:function xP(a,b){this.a=a
this.b=b},
xR:function xR(a){this.a=a},
xQ:function xQ(){},
vR:function vR(){},
vv:function vv(a){this.a=a},
vw:function vw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vs:function vs(a){this.a=a},
vt:function vt(){},
vu:function vu(a){this.a=a},
Js(a){var s,r,q,p,o=a.h(0,"currency")
o.toString
o=new A.ue(a,A.c(o))
s=new A.ud(a)
r=a.h(0,"noticeId")
r.toString
A.c(r)
q=a.h(0,"accountId")
q.toString
A.c(q)
p=a.h(0,"receivedOn")
p.toString
return new A.cK(r,q,A.ax(A.c(p)),s.$1("statementDate"),o.$1("balance"),o.$1("minimumDue"),s.$1("dueDate"),!1)},
cK:function cK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ue:function ue(a,b){this.a=a
this.b=b},
ud:function ud(a){this.a=a},
cc(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.HG().aj(a):m
if(l==null)return m
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.X(r,m,m)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.X(r,m,m)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.X(s,m,m)
n=A.az(q,p,o)
return A.b1(n)===q&&A.b5(n)===p&&A.av(n)===o?new A.A(q,p,o):m},
LH(e1,e2,e3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8="bookId",c9="currency",d0=null,d1="yearStartMonth",d2="id",d3="accountId",d4="source",d5="rent",d6="an amount in rupees, zero or more",d7="deposited",d8="withdrawnOn",d9=e3.e,e0=new A.w1(e1)
switch(e3.d){case"book.settings":s=d9.h(0,c8)
if(!e0.$1(s))return"no book "+A.i(s)
r=e2.a
q=r.h(0,s)
if(d9.E(c9))p=A.m(d9.h(0,c9))
else p=q==null?d0:q.b
if(d9.E(d1))o=A.aH(d9.h(0,d1))
else o=q==null?d0:q.c
if(p!=null&&!B.e.E(p))return"currency "+p+" is not supported"
if(o!=null)n=o<1||o>12
else n=!1
if(n)return"a financial year starts in month 1 to 12"
r.j(0,A.c(s),new A.k1(p,o))
break
case"subscription.set":r=d9.h(0,d2)
r.toString
A.c(r)
n=d9.h(0,c8)
n.toString
A.c(n)
m=d9.h(0,"vendor")
m.toString
m=B.b.I(A.c(m))
l=d9.h(0,"item")
l.toString
l=B.b.I(A.c(l))
k=d9.h(0,"kind")
k.toString
A.ag(B.jb,A.c(k),t.lG)
k=d9.h(0,"cycle")
k.toString
A.ag(B.jx,A.c(k),t.e4)
k=d9.h(0,"autoRenews")
k.toString
A.cO(k)
k=A.aH(d9.h(0,"quantity"))
if(d9.h(0,"price")==null)j=d0
else{j=d9.h(0,"price")
j.toString
j=A.aP(t.f.a(j).G(0,t.N,t.X))}A.cc(d9.h(0,"renewsOn"))
i=A.m(d9.h(0,d3))
if(!e0.$1(n)||n==="personal")return"a subscription is in a company's or the property's book"
if(m.length===0||l.length===0)return"a subscription names its vendor and item"
if((k==null?1:k)<1)return"a quantity is 1 or more"
if(j!=null&&j.a.a.ga9(0)<0)return"a price is zero or more"
h=i==null
g=h?d0:e1.gL().h(0,i)
if(!h)h=g==null||g.d===B.o
else h=!1
if(h)return"it is paid from a card or account"
e2.b.j(0,r,new A.hr(r,n,m,l,k,j,i))
break
case"subscription.remove":if(e2.b.a_(0,d9.h(0,d2))==null)return"no subscription "+A.i(d9.h(0,d2))
break
case"invoice.record":r=d9.h(0,d2)
r.toString
A.c(r)
n=A.m(d9.h(0,c8))
m=d9.h(0,"vendor")
m.toString
m=B.b.I(A.c(m))
l=A.m(d9.h(0,"number"))
k=A.cc(d9.h(0,"date"))
k.toString
j=d9.h(0,"total")
j.toString
i=t.f
h=t.N
f=t.X
j=A.aP(i.a(j).G(0,h,f))
e=A.m(d9.h(0,"categoryId"))
d=d9.h(0,d4)
d.toString
A.c(d)
c=A.m(d9.h(0,"parserVersion"))
if(d9.h(0,d5)==null)b=d0
else{a=d9.h(0,d5)
a.toString
a=i.a(a).G(0,h,f)
a0=a.h(0,d5)
a0.toString
a0=A.aP(i.a(a0).G(0,h,f))
a1=a.h(0,"gst")
a1.toString
a1=A.aP(i.a(a1).G(0,h,f))
a=a.h(0,"tds")
a.toString
b=new A.iT(a0,a1,A.aP(i.a(a).G(0,h,f)))}i=n!=null
if(i&&!e0.$1(n))return"no book "+n
if(m.length===0)return"an invoice names its vendor"
if(j.a.a.ga9(0)<=0)return"an invoice total is more than zero"
f=e==null
a2=f?d0:A.a5(e1.d,h,t.G).h(0,e)
if(!f)if(a2!=null)i=i&&a2.b!==e1.bX(n)
else i=!0
else i=!1
if(i)return"an invoice's category belongs to its book"
if(b!=null){i=b.a
h=b.b
if(B.a.M(A.b([i,h,b.c],t.g),new A.w2(j.b)))return"a rent invoice's parts are zero or more, in its currency"
if(!i.B(0,h).J(0,j))return"rent and GST add up to the invoice (PH-08)"
if(a2!=null&&!A.hM(a2))return"rent is filed under an income category"}else if(a2!=null&&A.hM(a2))return"a vendor's invoice is filed under a spending category"
e2.c.j(0,r,new A.es(r,n,m,l,k,j,e,d,c,b))
break
case"date.entered":s=d9.h(0,d2)
if(typeof s!="string")return"a date needs an id"
if(J.Y(d9.h(0,"removed"),!0)){if(e2.e.a_(0,s)==null)return"no date "+s
return d0}a3=A.cc(d9.h(0,"date"))
a4=d9.h(0,"title")
a5=d9.h(0,d4)
if(!e0.$1(d9.h(0,c8))||a3==null||typeof a4!="string"||B.b.I(a4).length===0)return"a date needs a book, a title and a real date"
if(typeof a5!="string"||B.b.I(a5).length===0)return"a date states its source (PH-04)"
r=d9.h(0,c8)
r.toString
A.c(r)
n=B.b.I(a4)
B.b.I(a5)
e2.e.j(0,s,new A.cX(r,n,a3,A.m(d9.h(0,"topic"))))
break
case"remittance.confirm":s=d9.h(0,"outflowId")
a6=A.dt(A.i(d9.h(0,"rate")))
a7=typeof s=="string"?e1.b.a.h(0,s):d0
if(a7==null||a7.ch==null)return"a confirmation is for a paired remittance"
if(a6==null||a6.l(0,$.L())<=0)return"a rate is more than zero"
if(d9.h(0,"fee")==null)a8=d0
else{r=d9.h(0,"fee")
r.toString
a8=A.aP(t.f.a(r).G(0,t.N,t.X))}if(a8!=null&&a8.a.a.ga9(0)<0)return"a fee is zero or more"
e2.f.j(0,a7.a,new A.lo())
break
case"indiaTax.entry":s=d9.h(0,d2)
a9=d9.h(0,"fyStart")
a5=d9.h(0,d4)
b0=A.aO(new A.n(B.jQ,t.wx.a(new A.w3(d9)),t.km),t.nq)
if(typeof s!="string"||!A.cu(a9)||b0==null||typeof a5!="string"||B.b.I(a5).length===0)return"an entry needs its year, what it is and its source"
if(d9.h(0,"amount")==null)b1=d0
else{r=d9.h(0,"amount")
r.toString
b1=A.aP(t.f.a(r).G(0,t.N,t.X))}b2=A.m(d9.h(0,"document"))
r=b0===B.cT
if(r)n=b2==null||B.b.I(b2).length===0
else n=b1==null
if(n)return r?"name the document":"an amount from the certificate"
if(b1!=null)r=b1.b!=="INR"||b1.a.a.ga9(0)<0
else r=!1
if(r)return d6
if(b0===B.cU){b3=A.m(d9.h(0,"deductor"))
b4=A.aH(d9.h(0,"quarter"))
b5=A.m(d9.h(0,"certificateLast4"))
if(d9.h(0,"paid")==null)b6=d0
else{r=d9.h(0,"paid")
r.toString
b6=A.aP(t.f.a(r).G(0,t.N,t.X))}if(d9.h(0,d7)==null)b7=d0
else{r=d9.h(0,d7)
r.toString
b7=A.aP(t.f.a(r).G(0,t.N,t.X))}r=!0
if(b3!=null)if(B.b.I(b3).length!==0){r=A.D("\\d{5}",!0,!1)
r=r.b.test(b3)}if(r)return"name the deductor"
if(b4==null||b4<1||b4>4)return"a quarter from 1 to 4"
if(b5!=null){r=A.D("^[A-Za-z0-9]{1,4}$",!0,!1)
r=!r.b.test(b5)}else r=!0
if(r)return"a certificate keeps its number's last 4"
for(r=[b6,b7],b8=0;b8<2;++b8){b9=r[b8]
if(b9==null||b9.b!=="INR"||b9.a.a.ga9(0)<0)return d6}}else b3=d0
B.b.I(a5)
if(b2!=null)B.b.I(b2)
A.cc(d9.h(0,"on"))
if(b3!=null)B.b.I(b3)
e2.r.j(0,s,new A.kI())
break
case"account.sourceOnly":g=e1.gL().h(0,d9.h(0,d3))
c0=d9.h(0,"memberId")
c1=A.cc(d9.h(0,"consentOn"))
if(g!=null){r=g.d
r=r===B.o||r===B.x}else r=!0
if(r)return"a source-only account is a bank account"
if(typeof c0!="string"||!A.a5(e1.p3,t.N,t.o).E(c0))return"name the holder as a household member"
if(c1==null)return"the date the holder agreed (PH-07)"
c2=A.cc(d9.h(0,d8))
if(d9.h(0,d8)!=null)r=c2==null||c2.l(0,c1)<0
else r=!1
if(r)return"a withdrawal is on or after the consent"
e2.w.j(0,g.a,new A.ly())
break
case"loan.joint":g=e1.gL().h(0,d9.h(0,d3))
c3=d9.h(0,"joint")
if(g==null||g.d!==B.o||!A.ef(c3))return"only a loan is jointly held"
r=e2.x
n=g.a
if(c3)r.m(0,n)
else r.a_(0,n)
break
case"statement.sourceRead":s=d9.h(0,"statementId")
c4=A.cc(d9.h(0,"periodStart"))
c5=A.cc(d9.h(0,"periodEnd"))
c6=d9.h(0,d3)
if(typeof s!="string"||typeof c6!="string"||!e2.w.E(c6)||c4==null||c5==null)return"a source-only statement names its account and period"
r=e2.z
if(r.E(s))return"statement "+s+" is already read"
r.j(0,s,new A.jl(c6,c4,c5))
break
case"book.owedMentioned":s=d9.h(0,c8)
c7=d9.h(0,"month")
if(!e0.$1(s)||typeof c7!="string")return"a book and a month"
e2.Q.m(0,A.i(s)+"|"+c7)
break
default:return"not a book record operation"}return d0},
k1:function k1(a,b){this.b=a
this.c=b},
eM:function eM(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.w=e
_.x=f
_.z=g},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a,b,c,d,e,f,g,h,i,j){var _=this
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
cX:function cX(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.f=d},
lo:function lo(){},
bY:function bY(a,b){this.a=a
this.b=b},
kI:function kI(){},
ly:function ly(){},
lz:function lz(){},
n3:function n3(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
w1:function w1(a){this.a=a},
w2:function w2(a){this.a=a},
w3:function w3(a){this.a=a},
FQ(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="invoiceId",b=A.b([],t.mH)
for(s=a.a7.aZ(B.aj),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q].c
o=A.m(p.h(0,c))
if(o===a0){o=p.h(0,c)
o.toString
A.c(o)
n=p.h(0,"invoiceNumber")
n.toString
A.c(n)
m=A.cc(p.h(0,"invoiceDate"))
m.toString
l=p.h(0,"bookId")
l.toString
A.c(l)
k=A.ay(p.h(0,"date"))
k.toString
j=p.h(0,"seriesId")
j.toString
A.c(j)
i=p.h(0,"seq")
i.toString
A.O(i)
h=p.h(0,"number")
h.toString
A.c(h)
g=p.h(0,"amount")
g.toString
A.O(g)
f=p.h(0,"part")
f.toString
A.c(f)
e=A.aH(p.h(0,"gstPercent"))
d=p.h(0,"gst")
d.toString
A.O(d)
p=p.h(0,"reason")
p.toString
b.push(new A.bX(o,n,m,l,k,j,i,h,g,f,e,d,A.c(p)))}}B.a.D(b,new A.xX())
return b},
Mv(a,b,c){var s,r,q
A:{if("standard"===c){s=b.gia()
break A}if("zero-rated"===c){s=b.gnc()
break A}s=b.gcZ()
break A}r=A.FQ(a,"company-invoice:"+b.a)
q=A.F(r)
return s-new A.n(r,q.i("j(1)").a(new A.y5(c)),q.i("n<1>")).a4(0,0,new A.y6(),t.S)},
MA(a,b,c,d,e,f){var s,r,q,p,o,n=a.a7,m=b.b,l=n.a6(B.ah,m),k=b.y,j=k!=null,i=j?e:"plain",h=A.b([],t.s)
if(l==null)h.push("The company's invoice issuer")
if(c<=0)h.push("An amount above zero")
if(j&&e!=="standard"&&e!=="zero-rated")h.push("Standard-rated or zero-rated")
if(c>0&&c>A.Mv(a,b,i))h.push("No more than is left to credit on that part")
s=B.b.I(f)
if(s.length===0)h.push("The reason")
r=b.d
if(d.l(0,r)<0)h.push("A date on or after the invoice")
if(h.length!==0)return new A.p(null,h)
h=l.c
q=A.m(h.h(0,"creditSeriesId"))
if(q==null){h=A.m(h.h(0,"seriesId"))
h.toString
q=h}p=A.A8(a,q,d)
o=j&&i==="standard"?B.d.C(c*k+50,100):0
n=A.m(n.a6(B.a9,q).c.h(0,"pattern"))
n.toString
n=A.z_(n,p,A.fJ(A.jI(d),"{fy}"),d.a)
k=j?k:null
return new A.p(new A.bX("company-invoice:"+b.a,b.w,r,m,d,q,p,n,c,i,k,o,s),B.c)},
LI(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g="invoiceId",f=a1.e,e=f.h(0,g),d=A.cc(f.h(0,"date")),c=f.h(0,"amount"),b=f.h(0,"part"),a=f.h(0,"reason")
if(typeof e!="string"||d==null||!A.cu(c)||typeof b!="string"||typeof a!="string")return"a credit note names its invoice, date, amount, part and reason"
s=a0.a7
r=s.a6(B.a6,e)
if(r==null)return"no invoice "+e
q=A.MA(a0,A.DI(r),c,d,b,a)
p=q.a
if(p==null)return"not credited: "+B.a.Z(q.b,", ").toLowerCase()
o=p.w
if(o!==f.h(0,"number")||p.x+p.Q!==f.h(0,"total"))return"the credit note changed since it was shown; issue it again"
n=p.a
m=A.w(t.N,t.X)
m.j(0,g,n)
m.j(0,"invoiceNumber",p.b)
m.j(0,"invoiceDate",p.c.k(0))
m.j(0,"bookId",p.d)
m.j(0,"date",p.e.k(0))
m.j(0,"seriesId",p.f)
m.j(0,"seq",p.r)
m.j(0,"number",o)
l=p.x
m.j(0,"amount",l)
m.j(0,"part",p.y)
k=p.z
if(k!=null)m.j(0,"gstPercent",k)
k=p.Q
m.j(0,"gst",k)
m.j(0,"reason",p.as)
s.e8(new A.b3(B.aj,"company-credit:"+n+":"+o,m))
m=a0.aD.c
j=m.h(0,e)
if(j!=null){s=j.a
o=j.c
n=j.e
i=j.f
h=i.b
h=i.aa(0,A.a3(new A.P(A.aC(l+k),0- -A.ev(h)),h))
k=j.w
m.j(0,e,new A.es(s,j.b,o,j.d,n,h,j.r,k,j.x,null))}return null},
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.as=m},
xX:function xX(){},
y5:function y5(a){this.a=a},
y6:function y6(){},
DH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){return new A.dr(k,e,h,j,l,a4,a3,a0,r,o,n,i,g,c,a2,s,m,a1,f,a5,q,p,a6,a,d,b)},
DI(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=a8.c,a7=a6.h(0,"draftId")
a7.toString
A.c(a7)
s=a6.h(0,"bookId")
s.toString
A.c(s)
r=a6.h(0,"customerId")
r.toString
A.c(r)
q=A.ay(a6.h(0,"date"))
q.toString
p=A.ay(a6.h(0,"due"))
p.toString
o=a6.h(0,"seriesId")
o.toString
A.c(o)
n=a6.h(0,"seq")
n.toString
A.O(n)
m=a6.h(0,"number")
m.toString
A.c(m)
l=A.b([],t.Aq)
k=a6.h(0,"lines")
k.toString
k=J.dh(t.j.a(k),t.mE)
j=k.$ti
k=new A.a7(k,k.gq(0),j.i("a7<Q.E>"))
i=t.N
h=t.X
j=j.i("Q.E")
while(k.n()){g=k.d
g=(g==null?j.a(g):g).G(0,i,h)
f=g.h(0,"description")
f.toString
A.c(f)
e=g.h(0,"quantity")
e.toString
e=A.ad(A.c(e))
d=g.h(0,"unitPrice")
d.toString
A.O(d)
c=g.h(0,"amount")
c.toString
l.push(new A.ch(f,e,d,A.O(c),A.m(g.h(0,"gst"))))}k=A.aH(a6.h(0,"gstPercent"))
j=a6.h(0,"gst")
j.toString
A.O(j)
i=a6.h(0,"customerName")
i.toString
A.c(i)
h=a6.h(0,"customerAddress")
h.toString
A.c(h)
g=A.m(a6.h(0,"attention"))
f=A.m(a6.h(0,"reference"))
e=A.m(a6.h(0,"note"))
d=A.m(a6.h(0,"footer"))
c=J.Y(a6.h(0,"payNow"),!0)
b=A.m(a6.h(0,"currency"))
if(b==null)b="SGD"
if(a6.h(0,"sgdRate")==null)a=null
else{a=a6.h(0,"sgdRate")
a.toString
a=A.ad(A.c(a))}a0=a6.h(0,"issuerName")
a0.toString
A.c(a0)
a1=a6.h(0,"issuerAddress")
a1.toString
A.c(a1)
a2=a6.h(0,"uenLast4")
a2.toString
A.c(a2)
a3=a6.h(0,"accountId")
a3.toString
A.c(a3)
a4=a6.h(0,"bankName")
a4.toString
A.c(a4)
a5=a6.h(0,"accountLast4")
a5.toString
return A.DH(a3,A.c(a5),g,a4,s,b,h,r,i,q,a7,p,d,j,k,a1,a0,l,e,m,c,f,n,o,a,a2)},
mF(a,b){var s,r,q,p,o=A.b([],t.Z)
for(s=a.a7.aZ(B.as),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(A.m(p.c.h(0,"draftId"))===b)o.push(p)}B.a.D(o,new A.yp())
return o},
MW(a,b){var s,r,q,p,o,n=A.b([],t.Z)
for(s=a.a7.aZ(B.a5),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=A.m(p.c.h(0,"bookId"))
if(o===b)n.push(p)}B.a.D(n,new A.zk())
return n},
Mi(a,b){var s,r,q,p,o,n=A.b([],t.h5)
for(s=a.a7.aZ(B.a6),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=A.m(p.c.h(0,"bookId"))
if(o===b)n.push(A.DI(p))}B.a.D(n,new A.y_())
return n},
Mh(a,b){var s,r,q,p,o,n,m,l=a.a7,k=l.a6(B.a5,b)
if(k==null)return B.kc
s=k.c
r=A.m(s.h(0,"bookId"))
r.toString
q=l.a6(B.ah,r)
p=A.m(s.h(0,"currency"))
if(p==null)p="SGD"
o=A.mF(a,b)
n=B.a.M(o,new A.xY())
r=A.b([],t.s)
m=q==null
if(m)r.push("The company's invoice issuer")
s=A.m(s.h(0,"customerId"))
s.toString
if(l.a6(B.a4,s)==null)r.push("The customer")
if(o.length===0)r.push("At least one line")
if(B.a.M(o,new A.xZ(p)))r.push("Every line in "+p)
if(p!=="SGD"){l=m?null:J.Y(q.c.h(0,"gstRegistered"),!0)
l=l===!0&&n&&k.dc("sgdRate")==null}else l=!1
if(l)r.push("The S$ rate for its GST in S$")
return r},
FS(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="quantity",b3="unitPrice",b4="currency",b5="is not a supported currency",b6="paymentDays",b7=A.Mh(b8,b9)
if(b7.length!==0)return new A.p(b1,b7)
s=b8.a7
r=s.a6(B.a5,b9)
q=r.c
p=A.m(q.h(0,"bookId"))
p.toString
o=s.a6(B.ah,p)
o.toString
n=A.m(q.h(0,"customerId"))
n.toString
n=s.a6(B.a4,n)
n.toString
o=o.c
m=J.Y(o.h(0,"gstRegistered"),!0)
l=A.b([],t.Aq)
for(k=A.mF(b8,b9),j=k.length,i=t.f,h=t.N,g=t.X,f=0;f<k.length;k.length===j||(0,A.l)(k),++f){e=k[f].c
d=A.m(e.h(0,"description"))
d.toString
if(typeof e.h(0,b2)=="string"){c=e.h(0,b2)
c.toString
c=A.dt(A.c(c))}else c=b1
c.toString
if(i.b(e.h(0,b3))){b=e.h(0,b3)
b.toString
b=i.a(b).G(0,h,g)
a=b.h(0,"amount")
a.toString
a=A.ad(A.c(a))
b=b.h(0,b4)
b.toString
A.c(b)
a0=new A.q(a,b)
a1=B.e.h(0,b)
if(a1==null)A.f(A.x(b,b4,b5))
if((a.b<=0?0:Math.max(a.gv().b,0))>a1)A.f(A.z(b+" allows "+A.i(a1)+" decimal places",a.k(0),b1))
b=a0}else b=b1
b=b.gaT()
if(typeof e.h(0,b2)=="string"){a=e.h(0,b2)
a.toString
a=A.dt(A.c(a))}else a=b1
a.toString
if(i.b(e.h(0,b3))){a0=e.h(0,b3)
a0.toString
a0=i.a(a0).G(0,h,g)
a2=a0.h(0,"amount")
a2.toString
a2=A.ad(A.c(a2))
a0=a0.h(0,b4)
a0.toString
A.c(a0)
a3=new A.q(a2,a0)
a1=B.e.h(0,a0)
if(a1==null)A.f(A.x(a0,b4,b5))
if((a2.b<=0?0:Math.max(a2.gv().b,0))>a1)A.f(A.z(a0+" allows "+A.i(a1)+" decimal places",a2.k(0),b1))
a0=a3}else a0=b1
a=new A.P(a.a.a0(0,A.aC(a0.gaT())),a.b).B(0,A.ad("0.5")).c9(0,B.bc).b_().b0(0)
if(m){e=A.m(e.h(0,"gst"))
if(e==null)e="standard"}else e=b1
l.push(new A.ch(d,c,b,a,e))}a4=new A.n(l,t.qB.a(new A.yk()),t.rb).a4(0,0,new A.yl(),t.S)
k=A.ay(q.h(0,"date"))
k.toString
j=A.m(o.h(0,"seriesId"))
j.toString
a5=A.A8(b8,j,k)
i=n.c
h=A.aH(i.h(0,b6))
a6=h==null?A.aH(o.h(0,b6)):h
if(a6==null)a6=30
h=b8.gL().h(0,A.m(o.h(0,"accountId")))
h.toString
g=k.aC(a6)
s=A.m(s.a6(B.a9,j).c.h(0,"pattern"))
s.toString
s=A.z_(s,a5,A.fJ(A.jI(k),"{fy}"),k.a)
e=m?9:b1
d=m?B.d.C(a4*9+50,100):0
c=A.m(i.h(0,"name"))
c.toString
b=A.m(i.h(0,"address"))
b.toString
i=A.m(i.h(0,"attention"))
a=A.m(q.h(0,"reference"))
a0=A.m(q.h(0,"note"))
a2=A.m(o.h(0,"footer"))
if(J.Y(o.h(0,"payNow"),!0)){a3=A.m(q.h(0,b4))
a3=(a3==null?"SGD":a3)==="SGD"}else a3=!1
q=A.m(q.h(0,b4))
if(q==null)q="SGD"
a7=r.dc("sgdRate")
a8=A.m(o.h(0,"name"))
a8.toString
a9=A.m(o.h(0,"address"))
a9.toString
o=A.m(o.h(0,"uenLast4"))
o.toString
b0=h.b
return new A.p(A.DH(h.a,B.b.ae(b0,b0.length-4),i,h.c,p,q,b,n.b,c,k,b9,g,a2,d,e,a9,a8,l,a0,s,a3,a,a5,j,a7,o),B.c)},
LJ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="company-invoice:",b="personal",a="company.income",a0=a3.e,a1=a0.h(0,"draftId")
if(typeof a1!="string")return"an invoice names its draft"
s=a2.a7
if(s.a6(B.a6,c+a1)!=null)return"that draft is already issued"
r=A.FS(a2,a1)
q=r.a
if(q==null)return"not issued: "+B.a.Z(r.b,", ").toLowerCase()
p=q.w
if(p!==a0.h(0,"number")||q.gcZ()+q.z!==a0.h(0,"total"))return"the invoice changed since it was shown; issue it again"
a0=A.b([],t.s)
for(o=t.N,n=A.a5(a2.d,o,t.G).gT(),n=n.gA(n),m=q.b,l=a2.f,k=m==="personal";n.n();){j=n.gt()
i=j.b
h=l.h(0,m)
if(h==null)h=k?b:d
g=!1
if(i===(h==="member"?b:h)){i=j.a
if(!(i==="income"||B.b.bH(i,".income"))){i=j.d
if(i!=null)i=i==="income"||B.b.bH(i,".income")
else i=g}else i=!0}else i=g
if(i)a0.push(j.a)}B.a.bb(a0)
n=c+q.a
s.e8(new A.b3(B.a6,n,q.fh()))
for(l=A.mF(a2,a1),k=l.length,j=s.a,f=0;f<l.length;l.length===k||(0,A.l)(l),++f){e=l[f]
i=j.h(0,B.as)
if(i!=null)i.a_(0,e.b)}s.lU(B.a5,a1)
s=q.Q
l=q.d
k=q.gcZ()
j=q.z
i=q.cx
i=A.a3(new A.P(A.aC(k+j),0- -A.ev(i)),i)
a0=B.a.u(a0,a)?a:A.aO(a0,o)
a2.aD.c.j(0,n,new A.es(n,m,s,p,l,i,a0,"owner",d,d))
return d},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dr:function dr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
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
_.fy=a6},
nm:function nm(){},
nk:function nk(){},
nl:function nl(){},
nn:function nn(){},
no:function no(){},
yp:function yp(){},
zk:function zk(){},
y_:function y_(){},
xY:function xY(){},
xZ:function xZ(a){this.a=a},
yk:function yk(){},
yl:function yl(){},
Mw(a){var s,r,q,p,o,n=A.w(t.N,t.C)
for(s=a.b3(),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
p=q.ch
if(p!=null)J.bV(n.aI(p,new A.yb()),q)}n.mT(0,new A.yc())
o=A.b([],t.xI)
n.a2(0,new A.yd(o))
return o},
fU:function fU(a,b){this.a=a
this.b=b},
yb:function yb(){},
yc:function yc(){},
ya:function ya(){},
yd:function yd(a){this.a=a},
y7:function y7(){},
y8:function y8(){},
y9:function y9(){},
G1(a,b){var s,r,q,p,o,n,m,l,k,j=A.b([],t.A),i=b.a,h=a.aD.d.h(0,i)
h=J.R(h==null?B.c:h)
s=a.b.a
while(h.n()){r=s.h(0,h.gt())
if(r!=null)j.push(r)}q=b.f
p=A.a3($.L(),q.b)
for(h=j.length,o=0;o<j.length;j.length===h||(0,A.l)(j),++o){s=j[o].f
r=p.b
if(s.b===r){s=p.a.B(0,s.a)
p=new A.q(s,r)
n=B.e.h(0,r)
if(n==null)A.f(A.x(r,"currency","is not a supported currency"))
if((s.b<=0?0:Math.max(s.gv().b,0))>n)A.f(A.z(r+" allows "+A.i(n)+" decimal places",s.k(0),null))}}h=b.y
s=h==null
m=s?null:h.gm1()
q=m==null?q:m
l=p.a.l(0,q.a)
if(b.b==null)k=B.cZ
else if(j.length===0)k=B.fz
else{if(!s){if(l!==0)i=l>0&&A.KE(a,i)
else i=!0
i=i?B.bD:B.d0}else if(l<0)i=B.bC
else i=l===0?B.bD:B.d_
k=i}return new A.dH(b,p,k,B.a.M(j,new A.zl()))},
MZ(a){var s,r,q=A.b([],t.aW)
for(s=a.aD.c,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d
q.push(A.G1(a,r))}B.a.D(q,new A.zm())
return q},
FB(a){var s=B.b.bR(A.cQ(a),A.D("[^A-Z0-9]+",!0,!1)),r=A.F(s),q=r.i("n<1>")
s=A.B(new A.n(s,r.i("j(1)").a(new A.vU()),q),q.i("h.E"))
return s},
O5(a,b){var s=A.aO(A.FB(a),t.N)
if(s==null||b==null)return!1
return B.a.u(A.FB(b),s)},
MY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="currency",f="is not a supported currency",e=A.b([],t.M)
for(s=A.MZ(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.d
A:{if(B.cZ===o){n="No rule places this bill in a book: pick its book."
break A}if(B.d_===o){n="Paid "+p.c.k(0)+" against an invoice of "+p.a.f.k(0)+"."
break A}if(B.d0===o){n=p.c.k(0)
m=p.a.y
l=m.a
k=m.b
j=k.b
i=l.b
if(j!==i)A.f(A.a8(i,j))
l=l.a.B(0,k.a)
h=B.e.h(0,i)
if(h==null)A.f(A.x(i,g,f))
if((l.b<=0?0:Math.max(l.gv().b,0))>h)A.f(A.z(i+" allows "+A.i(h)+" decimal places",l.k(0),null))
m=m.c
k=m.b
if(k!==i)A.f(A.a8(i,k))
m=m.a
m=l.B(0,new A.P(m.a.S(0),m.b))
h=B.e.h(0,i)
if(h==null)A.f(A.x(i,g,f))
if((m.b<=0?0:Math.max(m.gv().b,0))>h)A.f(A.z(i+" allows "+A.i(h)+" decimal places",m.k(0),null))
n="Received "+n+"; the invoice expects "+new A.q(m,i).k(0)+" (rent and GST, less the tax withheld)."
break A}if(B.bC===o&&p.e){n="The shares come to "+p.c.k(0)+" of "+p.a.f.k(0)+"."
break A}n=null
break A}if(n!=null){m=p.a
l=m.a
k=m.d
if(k==null)k=""
j=m.e.k(0)
e.push(new A.W("invoice:"+l,B.c7,l,A.ao(m.c+" "+k+" of "+j+": "+n,"  "," ")))}}return e},
KE(a,b){return B.a.M(a.a7.aZ(B.ak),new A.vy(b))},
dG:function dG(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
zl:function zl(){},
zm:function zm(){},
vU:function vU(){},
vy:function vy(a){this.a=a},
Mx(a){var s,r,q,p,o,n,m,l,k,j=A.b([],t.M)
for(s=A.Mw(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.a
j.push(new A.W("cross-book:"+o,B.ae,o,"The two sides of a payment for another book disagree: "+p.b+"."))}s=A.w(t.N,t.W)
for(r=a.b3(),o=J.R(r.a),r=new A.N(o,r.b,r.$ti.i("N<1>"));r.n();){n=o.gt()
if(n.d===B.n&&n.ch!=null&&n.at!=null){m=n.ch
m.toString
s.j(0,m,n)}}for(r=a.b3(),o=r.$ti,n=o.i("j(h.E)").a(new A.ye()),r=r.gA(0),o=new A.N(r,n,o.i("N<h.E>"));o.n();){n=r.gt()
m=n.ch
l=s.h(0,m)
if(l!=null)k=l.b===n.at&&l.at===n.b
else k=!0
if(k)continue
m.toString
B.a.m(j,new A.W("cross-book-book:"+A.i(m),B.ae,m,"The advance names "+A.i(n.at)+", but its expense is in "+l.b+"."))}return j},
ye:function ye(){},
hM(a){var s=a.a
if(!(s==="income"||B.b.bH(s,".income"))){s=a.d
if(s!=null)s=s==="income"||B.b.bH(s,".income")
else s=!1}else s=!0
return s},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
No(b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=t.N,b6=t.cl,b7=A.w(b5,b6)
for(b6=A.aD(b8.ax,b6),s=b6.length,r=0;r<s;++r){q=b6[r]
p=q.a+":"+q.b
if(q.c===B.e0)b7.a_(0,p)
else b7.j(0,p,q)}b6=A.kY(c2,b5)
for(s=new A.a1(b7,b7.r,b7.e,b7.$ti.i("a1<2>"));s.n();){o=s.d.d
if(o!=null)b6.m(0,o)}n=A.b([],t.ev)
s=b8.ghC()
o=A.o(s).i("au<1>")
m=A.B(new A.au(s,o),o.i("h.E"))
B.a.bb(m)
for(s=m.length,o=b8.b.a,l=t.W,k=b8.at,j=b9.a,i=b9.b,r=0;r<m.length;m.length===s||(0,A.l)(m),++r){h=m[r]
g=b8.ghC().h(0,h)
g.toString
f=A.a5(k,b5,b5).h(0,h)
for(e=f!=null,d=h+":",c=i,b=j;;){a=""+b+"-"+B.b.ac(B.d.k(c),2,"0")
a0=c+1
a1=A.az(b,a0,0)
a2=B.a.mu(g,new A.AQ(a),new A.AR(g))
a3=new A.A(b,c,Math.min(a2.f,A.av(a1)))
if(a3.l(0,c0)>0)break
a1=a2.x
if(a1===a)a1=0
else a1=a1<a?-1:1
if(a1<=0)if(e){if(a===f)a1=0
else a1=a<f?-1:1
a1=a1<0
a4=a1}else a4=!0
else a4=!1
if(a4&&a3.l(0,b9)>=0){q=b7.h(0,d+a)
a1=q==null
if((a1?b4:q.d)==null)a5=b4
else{a6=q.d
a6.toString
a5=o.h(0,a6)}a7=a2.w
if(a5==null&&a1&&a7!=null){a8=a2.b===B.b6?B.m:B.k
a6=B.b.bR(a7.toUpperCase(),A.D("[^A-Z0-9]+",!0,!1))
a9=A.F(a6)
b0=a9.i("n<1>")
b1=A.B(new A.n(a6,a9.i("j(1)").a(new A.AS()),b0),b0.i("h.E"))
a6=b8.bs()
a9=a6.$ti
b0=a9.i("n<h.E>")
b2=A.B(new A.n(a6,a9.i("j(h.E)").a(new A.AT(a2,a8,b6,a3,c1,b1)),b0),b0.i("h.E"))
B.a.D(b2,new A.AU(a3))
a5=A.aO(b2,l)}a6=a5==null
if(!a6)b6.m(0,a5.a)
a9=!a1&&a6
if(a6)a1=a1?b4:q.c
else a1=b4
B.a.m(n,new A.lg(a2,b,c,a3,a5,a9,a1))}b3=c===12?new A.p(b+1,1):new A.p(b,a0)
b=b3.a
c=b3.b}}return n},
N0(a,b){var s,r,q,p,o,n,m,l=A.CL(a,b),k=A.F(l).i("aQ<1>"),j=new A.aQ(l,k)
for(l=new A.a7(j,j.gq(0),k.i("a7<a2.E>")),s=a.b.a,k=k.i("a2.E");l.n();){r=l.d
for(r=(r==null?k.a(r):r).y,q=A.F(r).i("aQ<1>"),r=new A.aQ(r,q),r=new A.a7(r,r.gq(0),q.i("a7<a2.E>")),q=q.i("a2.E");r.n();){p=r.d
p=s.h(0,p==null?q.a(p):p)
if(p==null)continue
o=a.gL()
n=p.c
o=o.h(0,n)
if(o==null)o=null
else{o=o.d
o=o===B.N||o===B.Q||o===B.x}if(o===!0)return n
m=p.ch
if(m!=null&&B.b.am(m,"bill:")){p=s.h(0,B.b.ae(m,5))
if(p!=null)return p.c}}}return null},
MK(e5,e6,e7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="currency",d8="is not a supported currency",d9=A.FY(e5,e6,31,B.bq,d6,d6),e0=e6.aC(30),e1=e5.gL().gT(),e2=A.o(e1),e3=e2.i("n<h.E>"),e4=A.B(new A.n(e1,e2.i("j(h.E)").a(new A.yT()),e3),e3.i("h.E"))
B.a.D(e4,new A.yU())
e1=t.N
e2=A.a4(e1)
for(e3=e4.length,s=0;s<e4.length;e4.length===e3||(0,A.l)(e4),++s)e2.m(0,e4[s].a)
e3=t.v
r=A.w(e1,e3)
q=A.w(e1,t.aF)
for(e3=A.aD(e5.fx,e3),p=e3.length,s=0;s<p;++s){o=e3[s]
n=e5.gL().h(0,o.b)
m=!0
if(n!=null)if(e2.u(0,n.a)){m=o.d
m=m.l(0,n.w)<0||m.l(0,e6)>0}if(m)continue
m=n.a
l=o.d
J.bV(q.aI(m,new A.yV()),l)
k=r.h(0,m)
if(k==null||l.l(0,k.d)>0)r.j(0,m,o)}j=new A.yZ(r)
e3=t.dZ
i=A.b([],e3)
h=A.b([],e3)
g=A.b([],t.ic)
for(p=d9.a,m=p.length,s=0;s<p.length;p.length===m||(0,A.l)(p),++s){f=p[s]
l=f.d
if(l.l(0,e0)>0||!e2.u(0,f.a.c))continue
e=f.f
d=e===B.cP
c=d&&j.$2(f.a.c,l)
if((e===B.cO||d||e===B.cQ)&&!c)continue
b=f.r
if(b==null){B.a.m(g,new A.bP())
continue}B.b.ac(B.d.k(f.c),2,"0")
l.l(0,e6)
B.a.m(i,new A.bo(B.f5,f.a.c,l,b,B.k,!0))}for(m=d9.b,l=m.length,s=0;s<m.length;m.length===l||(0,A.l)(m),++s)if(e2.u(0,m[s].c))B.a.m(g,new A.bP())
for(m=A.G4(e5),l=m.length,s=0;s<m.length;m.length===l||(0,A.l)(m),++s){a=m[s]
a0=e5.gL().h(0,a.b)
if(a0.r!=="personal")continue
a1=a.dA(e6)
a2=a.w
if(a1===B.cw){A.aY(a0)
B.a.m(g,new A.bP())
continue}if(a1===B.bn){A.aY(a0)
B.a.m(g,new A.bP())
continue}if(!B.ef.u(0,a1)||a2==null||a2.a.a.ga9(0)<=0)continue
a3=a.f
if(a3==null){A.aY(a0)
B.a.m(g,new A.bP())
continue}if(a3.l(0,e0)>0)continue
a4=A.N0(e5,a0.a)
a5=a4!=null&&e2.u(0,a4)&&e5.gL().h(0,a4).e===a2.b
A.aY(a0)
e=a5?a4:d6
a3.l(0,e6)
d=a5?i:h
B.a.m(d,new A.bo(B.f6,e,a3,a2,B.k,!0))}m=e5.gL().gT()
l=A.o(m)
e=l.i("n<h.E>")
a6=A.B(new A.n(m,l.i("j(h.E)").a(new A.yW()),e),e.i("h.E"))
B.a.D(a6,new A.yX())
for(m=a6.length,l=t.h,e=t.pt,d=t.F,s=0;s<a6.length;a6.length===m||(0,A.l)(a6),++s){a7=a6[s]
if(a7.r!=="personal")continue
a8=a7.as
a8.toString
a9=A.D0(a7,e6).w
b0=A.b([],d)
if(a9 instanceof A.en){b1=a9.a
for(b2=a8.d;b1.l(0,e0)<=0;){B.a.m(b0,b1)
b3=b1.b
b4=b1.a
b5=b3===12?new A.p(b4+1,1):new A.p(b4,b3+1)
b6=b5.a
f=b5.b
b2.toString
if(b2>A.av(A.az(b6,f+1,0)))break
b1=new A.A(b6,f,b2)}}else if(a9 instanceof A.fQ){A.aY(a7)
B.a.m(g,new A.bP())}a4=a8.w
b2=A.w(l,e)
for(b3=A.Ga(e5,a7,e6).c,b4=b3.length,b7=0;b7<b3.length;b3.length===b4||(0,A.l)(b3),++b7){b8=b3[b7]
b2.j(0,b8.b,b8)}a8=a8.r
b4=a8!=null
if(b4&&a4!=null&&e2.u(0,a4)&&e5.gL().h(0,a4).e===a8.b)for(b9=b3.length,b7=0;b7<b3.length;b3.length===b9||(0,A.l)(b3),++b7){b8=b3[b7]
c0=b8.b
if(c0.l(0,e6)>=0)continue
c1=b8.d
A:{if(B.bB===c1){c2=b8.c
break A}if(B.bA===c1){c2=b8.r
break A}c2=d6
break A}if(c2==null)continue
c0.k(0)
A.aY(a7)
B.a.m(i,new A.bo(B.cK,a4,c0,c2,B.k,!0))}for(b3=b0.length,b9=a4!=null,b7=0;b7<b0.length;b0.length===b3||(0,A.l)(b0),++b7){b1=b0[b7]
c3=b2.h(0,b1)
if(c3!=null){c0=c3.d
c0=c0===B.ay||c0===B.aN}else c0=!1
if(c0)continue
if(!b4||!b9||!e2.u(0,a4)){A.aY(a7)
B.a.m(g,new A.bP())
continue}if(e5.gL().h(0,a4).e!==a8.b){A.aY(a7)
B.a.m(g,new A.bP())
continue}b1.k(0)
A.aY(a7)
B.a.m(i,new A.bo(B.cK,a4,b1,a8,B.k,!0))}}e1=A.a4(e1)
for(m=p.length,s=0;s<p.length;p.length===m||(0,A.l)(p),++s){l=p[s].x
l=l==null?d6:l.a
if(l!=null)e1.m(0,l)}for(e1=A.No(e5,e6.aC(-45),e0,B.bq,e1),p=e1.length,s=0;s<e1.length;e1.length===p||(0,A.l)(e1),++s){c4=e1[s]
c5=c4.a
m=c5.d
if(!e2.u(0,m))continue
c=c4.r===B.c0&&j.$2(m,c4.d)
if((c4.e!=null||c4.f)&&!c)continue
b=c5.r
if(b==null){B.a.m(g,new A.bP())
continue}l=c4.d
c6=l.l(0,e6)<0
e=c5.b
switch(e.a){case 0:d=B.f7
break
case 1:d=B.f8
break
case 2:d=B.cL
break
default:d=d6}a8=c4.c
B.b.ac(B.d.k(a8),2,"0")
b2=e===B.b6
b3=b2?B.m:B.k
b4=!c
if(b4)b2=!(c6&&b2)
else b2=!0
B.a.m(i,new A.bo(d,m,l,b,b3,b2))
c7=c5.e
if(e===B.c_&&c7!=null&&e2.u(0,c7)){B.b.ac(B.d.k(a8),2,"0")
B.a.m(i,new A.bo(d,c7,l,b,B.m,!b4||!c6))}}for(e1=A.Nr(e5,e6.aC(-45),e0),p=e1.length,s=0;s<e1.length;e1.length===p||(0,A.l)(e1),++s){c8=e1[s]
if(c8.c!=null||c8.d!=null)continue
c4=c8.a
c9=c4.ghd()
if(c9==null||c9.a.a.ga9(0)<=0)continue
m=c4.ch
d0=m==null?d6:e5.gL().h(0,m)
if(d0==null||!e2.u(0,d0.a)){B.a.m(g,new A.bP())
continue}if(d0.e!==c9.b){B.a.m(g,new A.bP())
continue}m=c8.b
m.k(0)
l=d0.a
m.l(0,e6)
B.a.m(i,new A.bo(B.f9,l,m,c9,B.k,!0))}d1=A.b([],t.uD)
for(e1=e4.length,s=0;s<e4.length;e4.length===e1||(0,A.l)(e4),++s){n=e4[s]
e2=n.a
d2=r.h(0,e2)
p=n.e
m=$.L()
c3=new A.q(m,p)
d3=B.e.h(0,p)
if(d3==null)A.f(A.x(p,d7,d8))
if((m.b<=0?0:Math.max(m.gv().b,0))>d3)A.f(A.z(p+" allows "+A.i(d3)+" decimal places",m.k(0),d6))
m=d2==null
d4=0
if(!m)for(l=e5.bs(),e=J.R(l.a),l=new A.N(e,l.b,l.$ti.i("N<1>")),d=d2.d,a8=p+" allows ";l.n();){b2=e.gt()
if(b2.c===e2){b3=b2.w
b3=b3.l(0,d)<=0||b3.l(0,e6)>0}else b3=!0
if(b3)continue
b3=b2.f
if(b3.b!==p)continue
if(b2.e===B.m)b2=b3
else{b2=$.L()
d3=B.e.h(0,p)
if(d3==null)A.f(A.x(p,d7,d8))
if((b2.b<=0?0:Math.max(b2.gv().b,0))>d3)A.f(A.z(a8+A.i(d3)+" decimal places",b2.k(0),d6))
b3=b3.a
b3=b2.B(0,new A.P(b3.a.S(0),b3.b))
b2=new A.q(b3,p)
d3=B.e.h(0,p)
if(d3==null)A.f(A.x(p,d7,d8))
if((b3.b<=0?0:Math.max(b3.gv().b,0))>d3)A.f(A.z(a8+A.i(d3)+" decimal places",b3.k(0),d6))}b3=b2.b
b4=c3.b
if(b3!==b4)A.f(A.a8(b4,b3))
b2=c3.a.B(0,b2.a)
c3=new A.q(b2,b4)
d3=B.e.h(0,b4)
if(d3==null)A.f(A.x(b4,d7,d8))
if((b2.b<=0?0:Math.max(b2.gv().b,0))>d3)A.f(A.z(b4+" allows "+A.i(d3)+" decimal places",b2.k(0),d6));++d4}else{A.aY(n)
B.a.m(g,new A.bP())}d5=m?d6:d2.d
p=m?d6:d2.f
m=m?d6:d2.r
l=q.h(0,e2)
if(l==null)l=B.dF
l=A.FJ(n,e7,l,A.FZ(e5,e2,e6),e6)
e=A.b([],e3)
for(d=i.length,b7=0;b7<i.length;i.length===d||(0,A.l)(i),++b7){b8=i[b7]
if(b8.d===e2)e.push(b8)}B.a.D(e,new A.yY(e6))
e2=new A.di(n,e6,p,c3,l,e,B.k_)
e2.iv(n,e,m!=null,d4,c3,l,p,d5,e6)
B.a.m(d1,e2)}return new A.nK(e6,A.MD(e5,e6),d1,h)},
MD(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=A.b([],t.Q)
for(s=a3.gL().gT(),s=s.gA(s);s.n();){r=s.gt()
q=!1
if(r.r==="personal")if(r.e==="SGD"){q=r.d
q=q===B.N||q===B.Q}if(q)a2.push(r)}if(a2.length===0)return a1
p=a4.a
o=a4.b
s=t.hy
n=A.b([],s)
for(m=0;m<3;++m){l=o===1?new A.p(p-1,12):new A.p(p,o-1)
p=l.a
o=l.b
B.a.ml(n,0,new A.p(new A.A(p,o,1),new A.A(p,o,A.av(A.az(p,o+1,0)))))}if(B.a.b6(a2,new A.ys(n)))return a1
s=A.b([],s)
for(r=n.length,k=0;k<n.length;n.length===r||(0,A.l)(n),++k){j=n[k]
q=j.a
if(A.Gi(a3,"personal",q.b,q.a))s.push(j)}if(s.length===0)return a1
i=B.a.gY(s).a
h=B.a.gak(s).b
r=t.N
q=A.a4(r)
for(g=A.FY(a3,h,0,B.bq,i.aC(-31),h.aC(31)).a,f=g.length,k=0;k<g.length;g.length===f||(0,A.l)(g),++k){e=g[k].x
e=e==null?a1:e.a
if(e!=null)q.m(0,e)}r=A.a4(r)
for(g=a2.length,k=0;k<a2.length;a2.length===g||(0,A.l)(a2),++k)r.m(0,a2[k].a)
d=A.a3($.L(),"SGD")
for(a2=a3.bs(),g=J.R(a2.a),a2=new A.N(g,a2.b,a2.$ti.i("N<1>"));a2.n();){f=g.gt()
if(!r.u(0,f.c)||f.d!==B.n||f.e!==B.k)continue
e=f.f
c=e.b
if(c!=="SGD"||!B.a.M(s,new A.yt(f)))continue
if(f.cy===B.dX||q.u(0,f.a))continue
f=d.b
if(c!==f)A.f(A.a8(f,c))
e=d.a.B(0,e.a)
d=new A.q(e,f)
b=B.e.h(0,f)
if(b==null)A.f(A.x(f,"currency","is not a supported currency"))
if((e.b<=0?0:Math.max(e.gv().b,0))>b)A.f(A.z(f+" allows "+A.i(b)+" decimal places",e.k(0),a1))}a=s.length
a2=d.a.a0(0,new A.P(A.aC(100),0))
r=A.aC(a)
a0=A.a3(new A.P(A.aC(a2.gbV().ds(0,new A.P(r,0).gbV()).e9(0).b0(0)),0- -A.ev("SGD")),"SGD")
if(a===3){a2=i.b-1
if(!(a2>=0&&a2<12))return A.a(B.l,a2)
a2=h.b-1
if(!(a2>=0&&a2<12))return A.a(B.l,a2)}else{a2=A.b([],t.s)
for(r=s.length,k=0;k<s.length;s.length===r||(0,A.l)(s),++k){q=s[k].a.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
a2.push(B.l[q])}B.a.Z(a2,", ")}return new A.nI(a0)},
cY:function cY(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
bP:function bP(){},
nI:function nI(a){this.a=a},
di:function di(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.w=e
_.x=f
_.y=g},
nK:function nK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nL:function nL(a){this.a=a},
nM:function nM(a){this.a=a},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(){},
nP:function nP(a){this.a=a},
lg:function lg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AQ:function AQ(a){this.a=a},
AR:function AR(a){this.a=a},
AS:function AS(){},
AT:function AT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
AU:function AU(a){this.a=a},
yT:function yT(){},
yU:function yU(){},
yV:function yV(){},
yZ:function yZ(a){this.a=a},
yW:function yW(){},
yX:function yX(){},
yY:function yY(a){this.a=a},
ys:function ys(a){this.a=a},
yt:function yt(a){this.a=a},
Np(a,b){var s,r,q,p,o=a.c
if(B.b.I(o).length===0)return"give it a name"
s=$.f0()
if(s.aM(0,o).gq(0)<9){o=a.w
o=o!=null&&s.aM(0,o).gq(0)>=9}else o=!0
if(o)return"the name or words look like a full account number"
o=b.a
r=o.h(0,a.d)
if(r==null||!r.gaS()||r.d===B.x)return"the account must be a savings or current account"
if(a.b===B.c_){q=o.h(0,a.e)
if(q==null||!q.gaS()||q.d===B.x||q.a===r.a)return"a move goes to another savings or current account"
if(q.e!==r.e)return"a move between currencies is not planned here"}else if(a.e!=null)return"only a move has a receiving account"
o=a.f
if(o<1||o>31)return"Day of month is a whole number, 1 to 31"
p=a.r
o=p!=null
if(o&&p.b!==r.e)return"the amount must be in "+r.e
if(o&&p.a.l(0,$.L())<=0)return"the amount must be more than 0"
if(A.mK(a.x)==null)return"the first month is YYYY-MM"
if(a.y<1)return"the version starts at 1"
return null},
eC:function eC(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c,d,e,f,g,h,i,j){var _=this
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
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(a,b){this.a=a
this.b=b},
DV(a){var s,r,q,p,o="typicalAmount",n=a.h(0,"id")
n.toString
A.c(n)
s=a.h(0,"payee")
s.toString
A.c(s)
r=a.h(0,"fromAccountId")
r.toString
A.c(r)
q=A.aH(a.h(0,"dayOfMonth"))
if(a.h(0,o)==null)p=null
else{p=a.h(0,o)
p.toString
p=A.aP(t.J.a(p))}return new A.c2(n,s,r,q,p,A.m(a.h(0,"categoryId")))},
FX(a,b){var s,r,q
if($.f0().aM(0,a.b).gq(0)>=9)return"the payee looks like a full account number; give a name instead"
if(!b.gaS())return"From account must be a savings or current account"
s=a.d
if(s!=null)r=s<1||s>31
else r=!1
if(r)return"Day of month is a whole number, 1 to 31"
q=a.e
r=q!=null
if(r&&q.b!==b.e)return"the amount must be in "+b.e
if(r&&q.a.l(0,$.L())<=0)return"the amount must be more than 0"
return null},
c2:function c2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mK(a){var s,r,q,p=null,o=$.HQ().aj(a)
if(o==null)return p
s=o.b
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
q=A.X(r,p,p)
if(q<1||q>12)s=p
else{if(1>=s.length)return A.a(s,1)
s=s[1]
s.toString
s=new A.p(A.X(s,p,p),q)}return s},
dA:function dA(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
FC(a){var s=B.b.bR(a.toUpperCase(),$.HS()),r=A.F(s),q=r.i("n<1>")
s=A.B(new A.n(s,r.i("j(1)").a(new A.vV()),q),q.i("h.E"))
return s},
Ln(a,b){var s,r,q,p,o
if(a.length===0)return!1
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.l)(b),++r){q=b[r]
if(q==null)continue
p=A.FC(q)
o=A.Ce(p,A.F(p).c)
if(B.a.b6(a,o.geX(o)))return!0}return!1},
MN(a,b,c){var s,r=a.d
if(r==null)return null
s=A.av(A.az(b,c+1,0))
return r>s?new A.p(new A.A(b,c,s),!0):new A.p(new A.A(b,c,r),!1)},
FY(c8,c9,d0,d1,d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=t.N,c6=A.a5(c8.w,c5,t.rv).gT(),c7=A.B(c6,A.o(c6).i("h.E"))
B.a.D(c7,new A.z5())
s=d2==null?c9.aC(-45):d2
r=d3==null?c9.aC(d0):d3
c6=t.cE
q=A.w(c5,c6)
p=A.a4(c5)
for(c6=A.aD(c8.Q,c6),o=c6.length,n=0;n<o;++n){m=c6[n]
l=m.a+":"+m.b
if(m.d)p.m(0,l)
else if(m.c===B.cN)q.a_(0,l)
else q.j(0,l,m)}c6=A.a4(c5)
for(o=new A.a1(q,q.r,q.e,q.$ti.i("a1<2>"));o.n();){k=o.d.e
if(k!=null)c6.m(0,k)}j=A.w(c5,t.iP)
if(c7.length!==0)for(c5=c8.mA(!0),o=J.R(c5.a),c5=new A.N(o,c5.b,c5.$ti.i("N<1>")),k=t.q;c5.n();){i=o.gt()
h=i.cx
if(h!=null){g=j.h(0,h)
if(g==null){g=A.b([],k)
j.j(0,h,g)}B.a.m(g,i.z)}}f=A.b([],t.lN)
e=A.b([],t.y0)
for(c5=c7.length,o=c8.b.a,k=t.W,d=s.a,c=s.b,i=t.Ai,n=0;n<c7.length;c7.length===c5||(0,A.l)(c7),++n){b=c7[n]
if(b.d==null){B.a.m(e,b)
continue}a=A.FC(b.b)
g=c8.bs()
a0=g.$ti
a1=a0.i("n<h.E>")
a2=a1.i("n<h.E>")
a3=A.B(new A.n(new A.n(g,a0.i("j(h.E)").a(new A.z6(b)),a1),a1.i("j(h.E)").a(new A.z7(a,j)),a2),a2.i("h.E"))
a4=A.b([],i)
for(g=b.a+":",a0=A.F(a3),a1=a0.i("j(1)"),a0=a0.i("n<1>"),a2=a0.i("h.E"),a5=c,a6=d;;){a7={}
a7.a=null
a8=A.MN(b,a6,a5)
a9=a7.a=a8.a
b0=a8.b
if(a9.l(0,r)>0)break
if(a9.l(0,s)>=0){m=q.h(0,g+(""+a6+"-"+B.b.ac(B.d.k(a5),2,"0")))
if((m==null?c4:m.e)==null)b1=c4
else{b2=m.e
b2.toString
b1=o.h(0,b2)}if(b1==null){b3=A.B(new A.n(a3,a1.a(new A.z8(a7,c6,d1)),a0),a2)
B.a.D(b3,new A.z9(a7))
b1=A.aO(b3,k)
if(b1!=null)c6.m(0,b1.a)}B.a.m(a4,new A.jn([a6,a5,a7.a,b0,b1]))}b4=a5===12?new A.p(a6+1,1):new A.p(a6,a5+1)
a6=b4.a
a5=b4.b}for(a0=a4.length,b5=c4,b6=0;a1=a4.length,b6<a1;a4.length===a0||(0,A.l)(a4),++b6){b1=a4[b6].a[4]
if(b1!=null&&b1.w.l(0,c9)<=0)b5=b1}for(a0=b5!=null,b7=b.e,a2=b7!=null,b6=0;b6<a4.length;a4.length===a1||(0,A.l)(a4),++b6){a7=a4[b6].a
b8=a7[0]
b9=a7[1]
a9=a7[2]
b1=a7[4]
l=g+(""+b8+"-"+B.b.ac(B.d.k(b9),2,"0"))
m=q.h(0,l)
c0=p.u(0,l)
a7=m==null
c1=(a7?c4:m.c)===B.by
b2=b1!=null
if(b2)c2=B.cO
else if((a7?c4:m.c)===B.bx)c2=B.cP
else if((a7?c4:m.c)===B.cM)c2=B.cQ
else if(c0||c1)c2=B.fj
else c2=a9.l(0,c9)<0?B.fk:B.fi
if(b2){c3=b1.f
d2=B.fe}else if(a2){c3=b7
d2=B.ff}else if(a0){c3=b5.f
d2=B.fg}else{c3=c4
d2=B.fh}B.a.m(f,new A.dz(b,b8,b9,a9,c2,c3,d2,b1))}}B.a.D(f,new A.za())
return new A.nS(f,e)},
nR:function nR(){},
dB:function dB(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h},
nS:function nS(a,b){this.a=a
this.b=b},
vV:function vV(){},
z5:function z5(){},
z6:function z6(a){this.a=a},
z7:function z7(a,b){this.a=a
this.b=b},
z8:function z8(a,b,c){this.a=a
this.b=b
this.c=c},
z9:function z9(a){this.a=a},
za:function za(){},
O_(a,b){var s,r,q=a.a
if(q<2000||q>2100)return"the Year of Assessment is a year"
q=a.b
if(q.a.l(0,$.L())<0)return"the amount assessed is zero or more"
if(b!=null&&q.b!==b.e)return"the amount must be in "+b.e
q=a.d
s=a.e
r=[a.c,q,s]
if(B.a.M(r,new A.Bw())&&B.a.M(r,new A.Bx()))return"a GIRO plan needs its GIRO, its first month and the number of instalments"
if(q!=null&&A.mK(q)==null)return"the first month is YYYY-MM"
if(s!=null)q=s<1||s>24
else q=!1
if(q)return"instalments are 1 to 24"
return null},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bw:function Bw(){},
Bx:function Bx(){},
tN:function tN(a,b){this.a=a
this.b=b},
LG(a){var s,r,q,p,o,n,m,l=A.b([],t.s)
for(s=A.a5(a.x,t.N,t.p0).gT(),r=A.o(s),q=r.i("j(h.E)").a(new A.vZ()),s=s.gA(s),r=new A.N(s,q,r.i("N<h.E>"));r.n();){q=s.gt()
p=a.gL().gT()
o=A.o(p)
n=o.i("n<h.E>")
m=A.B(new A.n(p,o.i("j(h.E)").a(new A.w_(a,q)),n),n.i("h.E"))
if(!(m.length!==0&&B.a.b6(m,new A.w0(a))))B.a.m(l,q.b)}return new A.mY(l.length===0,l)},
mY:function mY(a,b){this.a=a
this.b=b},
vZ:function vZ(){},
w_:function w_(a,b){this.a=a
this.b=b},
w0:function w0(a){this.a=a},
vY:function vY(a){this.a=a},
Mr(a,b){var s,r,q
if(!b)return"no profile for "+A.i(a.h(0,"institution"))
s=t.yq.a(a.h(0,"threshold"))
if(s==null)return null
if(!J.Y(a.h(0,"level"),"aboveThreshold"))return"a threshold is only for aboveThreshold"
r=A.m(s.h(0,"currency"))
if(r==null||!B.e.E(r))return"currency "+A.i(r)+" is not supported"
q=s.h(0,"amount")
q.toString
if(A.ad(A.c(q)).l(0,$.L())<=0)return"a threshold is more than 0"
return null},
dl:function dl(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kb:function kb(a,b,c){this.a=a
this.b=b
this.r=c},
DW(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.m(a0.h(0,"amount")),d=A.m(a0.h(0,"occurredAtUtc")),c=A.m(a0.h(0,"receivedAtUtc")),b=A.m(a0.h(0,"balance")),a=a0.h(0,"eventKey")
a.toString
A.c(a)
s=a0.h(0,"channel")
s.toString
s=A.ag(B.jJ,A.c(s),t.lj)
r=a0.h(0,"sourceId")
r.toString
A.c(r)
r=A.m(a0.h(0,"institution"))
q=A.m(a0.h(0,"eventType"))
p=A.m(a0.h(0,"accountAlias"))
if(e==null)o=f
else{o=a0.h(0,"currency")
o.toString
A.c(o)
o=A.a3(A.ad(e),o)}n=d==null?f:A.c1(d).F()
m=c==null?f:A.c1(c).F()
l=A.m(a0.h(0,"payee"))
A.CE(a0.h(0,"confidence"))
k=a0.h(0,"verified")
k.toString
A.cO(k)
A.m(a0.h(0,"parserVersion"))
k=a0.h(0,"status")
k.toString
A.ag(B.jf,A.c(k),t.gy)
k=A.m(a0.h(0,"suspicion"))
j=A.m(a0.h(0,"sender"))
i=A.m(a0.h(0,"accountLast4"))
h=A.m(a0.h(0,"occurredOn"))
h=h==null?f:A.ax(h)
if(b!=null){g=a0.h(0,"balanceCurrency")
g.toString
A.c(g)
A.a3(A.ad(b),g)}g=A.m(a0.h(0,"dueOn"))
if(g!=null)A.ax(g)
return new A.fe(a,s,r,q,p,o,n,m,l,k,j,i,h)},
fo:function fo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
cA:function cA(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Ky(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.f
if(f!=null){s=A.a4(t.N)
for(r=a.r.a,q=new A.a1(r,r.r,r.e,A.o(r).i("a1<2>"));q.n();){p=q.d
if(p.b===f)s.m(0,a.aX(p.a))}return s.a===1?r.h(0,s.gaQ(0)):g}o=b.d
n=b.ch
s=n==null
m=g
if(!s){r=A.D("\\d+$",!0,!1).aj(n)
if(!(r==null)){r=r.b
if(0>=r.length)return A.a(r,0)
r=r[0]
m=r}}if(o==null||s||m==null||m.length<2)return g
s=t.b
l=A.w(t.N,s)
for(r=a.r.a,q=new A.a1(r,r.r,r.e,A.o(r).i("a1<2>"));q.n();){p=q.d
if(B.b.bH(p.b,m)){k=p.c
j=a.ho(k)
j=j==null?g:j.a
if(j==null){j=A.D("[^A-Z0-9]",!0,!1)
j=A.ao(k.toUpperCase(),j,"")}k=!(j===o||A.hL(k)===A.hL(o))}else k=!0
if(k)continue
p=r.h(0,a.aX(p.a))
if(p!=null)l.j(0,p.a,p)}r=A.b([],t.Q)
for(q=new A.a1(l,l.r,l.e,l.$ti.i("a1<2>")),p=b.e,k=b.r;q.n();){j=q.d
i=!1
if(j.CW==null)if(A.Lb(p,j.d)){i=j.e
i=i===(k==null?g:k.b)}if(i)r.push(j)}q=A.D("^\\d{4}$",!0,!1)
if(q.b.test(n))return r.length===1&&l.a===1?B.a.gaQ(r):g
q=a.k2.h(0,A.hL(o)+"|"+n)
h=q==null?g:q.c
return h==null?g:A.aO(new A.n(r,t.cP.a(new A.vn(a,h)),t.qK),s)},
Ms(a,b,c){var s=a.aX(b)
return B.a.M(A.aD(a.fx,t.v),new A.y2(a,s,c))},
Lb(a,b){var s
A:{if("card-purchase"===a||"card-refund"===a||"card-payment-received"===a){s=b===B.y
break A}s=b!==B.y&&b!==B.x
break A}return s},
vn:function vn(a,b){this.a=a
this.b=b},
y2:function y2(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a,b){this.a=a
this.b=b},
E3(a){var s,r,q,p,o=a.h(0,"algorithm")
o.toString
A.c(o)
s=a.h(0,"memoryKiB")
s.toString
A.O(s)
r=a.h(0,"iterations")
r.toString
A.O(r)
q=a.h(0,"parallelism")
q.toString
A.O(q)
p=a.h(0,"salt")
p.toString
return new A.o6(o,s,r,q,B.B.O(A.c(p)))},
o6:function o6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ep(a){var s,r,q=a.h(0,"nonce")
q.toString
q=B.B.O(A.c(q))
s=a.h(0,"cipherText")
s.toString
s=B.B.O(A.c(s))
r=a.h(0,"mac")
r.toString
return new A.u1(q,s,B.B.O(A.c(r)))},
E4(a){var s,r,q,p,o,n,m=a.h(0,"passphraseKdf")
m.toString
s=t.f
r=t.N
q=t.X
m=A.E3(s.a(m).G(0,r,q))
p=a.h(0,"recoveryKdf")
p.toString
p=A.E3(s.a(p).G(0,r,q))
o=a.h(0,"byPassphrase")
o.toString
o=A.Ep(s.a(o).G(0,r,q))
n=a.h(0,"byRecovery")
n.toString
return new A.o7(m,p,o,A.Ep(s.a(n).G(0,r,q)))},
vJ(a,b){return A.Lh(a,b)},
Lh(a,b){var s=0,r=A.J(t.c),q,p=2,o=[],n,m,l
var $async$vJ=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.r($.Hr().bt(new A.eF(a.b,new A.d2(a.c),a.a),$.I3(),b),$async$vJ)
case 7:n=d
q=new A.bq(new A.bt(n,!1),null)
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
if(A.aw(l) instanceof A.iX)throw A.k(new A.hv())
else throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$vJ,r)},
Ah(a,b){var s=0,r=A.J(t.c),q,p,o,n,m
var $async$Ah=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:p=a.a
o=p.a
if(o!=="argon2id")A.f(A.x(o,"algorithm","unsupported"))
$.b7()
n=A
m=a.c
s=3
return A.r(new A.i4(p.d,p.b,p.c,32).dd(p.e,new A.bq(new A.bt(B.F.O(b),!1),null)),$async$Ah)
case 3:q=n.vJ(m,d)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$Ah,r)},
hv:function hv(){},
u1:function u1(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
we(a,b){var s,r,q,p=a.aD.a.h(0,b),o=p==null?null:p.b
if(o!=null)return o
p=a.gL().gT()
s=A.o(p)
r=s.i("n<h.E>")
q=A.B(new A.n(p,s.i("j(h.E)").a(new A.wf(b)),r),r.i("h.E"))
if(q.length===0||B.a.M(q,new A.wg()))return"SGD"
return B.a.gY(q).e},
wf:function wf(a){this.a=a},
wg:function wg(){},
ky:function ky(){},
IZ(a){var s,r=t.N,q=t.S,p=t.p_,o=t.h,n=new A.h8(A.a4(r),new A.mh(A.w(r,t.B),A.w(r,t.Dm),A.a4(r),A.w(r,t.W)),A.b([],t.M),new A.af(A.w(r,t.G),t.rE),new A.af(A.w(r,t.R),t.AJ),A.w(r,r),new A.af(A.w(r,t.b),t.zs),new A.af(A.w(r,t.rv),t.DF),new A.af(A.w(r,t.p0),t.hl),A.w(t.g5,t.xr),A.a4(r),A.b([],t.zA),new A.af(A.w(r,t.to),t.n7),A.w(r,r),A.b([],t.yT),A.w(q,t.EL),A.w(r,r),A.w(r,t.ca),A.w(r,t.zc),A.w(r,t.c5),new A.uk(A.b([],t.e3),A.w(r,t.xt),A.a4(r)),A.b([],t.n),A.b([],t.Ec),A.b([],t.ew),A.w(r,t.A9),A.b([],t.sv),A.w(r,t.ch),A.w(r,t.Ap),A.a4(r),A.b([],t.ey),A.w(r,t.pp),new A.af(A.w(r,t.o),t.F4),new A.u4(A.a4(p)),new A.j3(A.a4(r),t.ur),A.b([],t.xz),new A.af(A.w(r,t.y6),t.BK),A.w(r,q),new A.af(A.w(t.Dt,t.AD),t.dB),A.b([],t.aV),new A.af(A.w(r,t.d6),t.l4),A.a4(r),A.w(r,o),A.a4(r),A.a4(r),A.w(r,t.nX),A.a4(r),new A.uo(A.w(r,t.r),A.b([],t.lt),A.w(t.d3,t.cZ),A.w(o,t.y),A.w(p,t.fK),A.w(r,t.mg),A.w(r,t.jF)),new A.tK(A.w(r,t.l9),A.a4(r),A.a4(r),A.w(r,t.ud),A.b([],t.os)),new A.p2(A.w(t.P,t.Cu)),A.a4(r),new A.n3(A.w(r,t.Cv),A.w(r,t.tD),A.w(r,t.eX),A.w(r,t.a),A.w(r,t.w5),A.w(r,t.xM),A.w(r,t.aB),A.w(r,t.Ba),A.a4(r),A.w(r,t.DV),A.w(r,t.Bf),A.a4(r)))
r=a.a
q=A.o(r).i("M<2>")
r=A.B(new A.M(r,q),q.i("h.E"))
q=r.length
s=0
for(;s<r.length;r.length===q||(0,A.l)(r),++s)n.eR(r[s])
return n},
on(a,b){return B.b.l(a,b)<0?a+"|"+b:b+"|"+a},
E8(a,b,c){var s=b===B.N||b===B.Q
return a.lH(b!==B.y,b!==B.o,!s,c==null,b,c)},
E7(a,b){var s,r,q,p
A:{s=B.y===a
if(s){r=B.y===b
q=b}else{q=null
r=!1}p=!0
if(r){r=p
break A}if(B.N!==a)r=B.Q===a
else r=!0
if(r){if(s)r=q
else{r=b
q=r
s=!0}if(B.N!==r)r=B.Q===(s?q:b)
else r=!0}else r=!1
if(r){r=p
break A}r=!1
break A}return r},
Cb(a){var s=a.d
return(s==null||s===B.M)&&a.ch==null&&a.ay==null&&a.cx==null},
IY(a,b){var s,r,q,p
if(a.length===b.length){s=A.b([],t.sj)
for(r=0;r<a.length;++r){q=a[r]
if(!(r<b.length))return A.a(b,r)
p=b[r]
s.push(p.a===q.a&&p.b===q.b&&p.c===q.c)}s=B.a.b6(s,new A.ov())}else s=!1
return s},
n0:function n0(){},
E:function E(){},
nG:function nG(){},
bv:function bv(){},
tS:function tS(){},
h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
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
_.m3=c3
_.m4=c4
_.m5=c5
_.dZ=c6
_.e_=c7
_.c_=c8
_.a7=c9
_.hk=d0
_.aD=d1},
oF:function oF(a){this.a=a},
os:function os(){},
oD:function oD(){},
oE:function oE(a){this.a=a},
p1:function p1(a){this.a=a},
p0:function p0(a){this.a=a},
oC:function oC(a){this.a=a},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(a){this.a=a},
oa:function oa(a){this.a=a},
ob:function ob(){},
om:function om(){},
oA:function oA(a){this.a=a},
oy:function oy(a){this.a=a},
oz:function oz(a){this.a=a},
ox:function ox(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(a){this.a=a},
oI:function oI(a){this.a=a},
oJ:function oJ(a){this.a=a},
oK:function oK(){},
oL:function oL(a){this.a=a},
o9:function o9(a,b){this.a=a
this.b=b},
or:function or(a,b){this.a=a
this.b=b},
op:function op(a){this.a=a},
oq:function oq(){},
p_:function p_(){},
oO:function oO(a){this.a=a},
oP:function oP(a){this.a=a},
oQ:function oQ(a){this.a=a},
oS:function oS(a){this.a=a},
oT:function oT(a){this.a=a},
oU:function oU(a){this.a=a},
oV:function oV(){},
oW:function oW(a){this.a=a},
oX:function oX(a){this.a=a},
oY:function oY(a){this.a=a},
oZ:function oZ(a){this.a=a},
oR:function oR(a){this.a=a},
oe:function oe(){},
oB:function oB(a){this.a=a},
of:function of(a,b){this.a=a
this.b=b},
oh:function oh(a){this.a=a},
oi:function oi(a){this.a=a},
ou:function ou(a){this.a=a},
oc:function oc(a){this.a=a},
ot:function ot(a){this.a=a},
ov:function ov(){},
ol:function ol(a,b){this.a=a
this.b=b},
ok:function ok(a){this.a=a},
ow:function ow(a){this.a=a},
oo:function oo(){},
og:function og(a){this.a=a},
od:function od(){},
oj:function oj(){},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ls:function ls(){},
mh:function mh(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
D3(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=a1*12+a0-1,g=t.S,f=A.w(g,t.Fu)
for(s=A.Bf(a,b),r=s.length,q=t.bD,p=0;p<s.length;s.length===r||(0,A.l)(s),++p){o=s[p]
n=o.b
m=n==null
l=m?null:n.x
if(l==null)l=o.a.x
n=m?null:n.x
if(n==null)n=o.a.x
n=l.a*12+n.b-1
l=f.h(0,n)
if(l==null){m=A.b([],q)
f.j(0,n,m)
n=m}else n=l
B.a.m(n,o)}k=A.w(g,t.C)
for(g=a.bs(),s=J.R(g.a),g=new A.N(s,g.b,g.$ti.i("N<1>")),r=t.A;g.n();){q=s.gt()
if(q.b===b){n=q.x
n=n.a*12+n.b-1
m=k.h(0,n)
if(m==null){m=A.b([],r)
k.j(0,n,m)
n=m}else n=m
B.a.m(n,q)}}g=A.b([],t.aH)
for(j=h-c+1;j<=h;++j){s=B.d.C(j,12)
r=B.d.R(j,12)+1
q=k.h(0,j)
if(q==null)q=B.ab
i=A.az(s,r+1,1).aw(-864e8)
q=A.G0(q,b,d,new A.A(s,r,1),new A.A(A.b1(i),A.b5(i),A.av(i)))
n=f.h(0,j)
if(n==null)n=B.k0
m=k.h(0,j)
g.push(new A.hd(s,r,q,A.Gl(a,n,m==null?B.ab:m,b,d,e,r,s)))}return g},
Gj(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=new A.A(f,e,1),k=new A.A(f,e+1,1).aC(-1),j=new A.zW(l,k),i=A.b([],t.bD)
for(s=A.Bf(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.b
o=o==null?null:o.x
if(j.$1(o==null?p.a.x:o))i.push(p)}s=A.b([],t.A)
for(r=a.bs(),o=J.R(r.a),r=new A.N(o,r.b,r.$ti.i("N<1>"));r.n();){n=o.gt()
if(n.b===b&&j.$1(n.x))s.push(n)}r=t.N
o=A.kY(c,r)
for(n=i.length,q=0;q<i.length;i.length===n||(0,A.l)(i),++q)o.m(0,i[q].a.f.b)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.l)(s),++q)o.m(0,s[q].f.b)
r=A.w(r,t.wy)
for(o=A.ea(o,o.r,A.o(o).c),n=o.$ti.c;o.n();){m=o.d
if(m==null)m=n.a(m)
r.j(0,m,new A.hd(f,e,A.G0(s,b,m,l,k),A.Gl(a,i,s,b,m,d,e,f)))}return r},
Gk(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new A.A(a9,a7,1),a=new A.A(a9,a7+1,1).aC(-1),a0=A.b([],t.Dy),a1=a5.gL().gT(),a2=A.o(a1),a3=a2.i("n<h.E>"),a4=A.B(new A.n(a1,a2.i("j(h.E)").a(new A.zX(a6,a)),a3),a3.i("h.E"))
B.a.D(a4,new A.zY())
for(a1=a4.length,a2=a5.RG,a3=t.lA,s=a5.fx,r=t.v,q=t.hy,p=0;p<a4.length;a4.length===a1||(0,A.l)(a4),++p){o=a4[p]
n=A.b([],q)
m=A.d1(s,!1,r)
m.$flags=3
l=m
k=l.length
j=o.a
i=0
for(;i<k;++i){h=l[i]
if(h.b===j&&h.r!=null)n.push(new A.p(h.c,h.d))}m=A.d1(a2,!1,a3)
m.$flags=3
l=m
k=l.length
i=0
for(;i<k;++i){g=l[i]
if(g.a===j)n.push(new A.p(g.b,g.c))}f=A.D7(a5,o)
if(f!=null)n.push(new A.p(f,a))
g=o.w
g=g.l(0,b)>0?g:b
for(;g.l(0,a)<=0;g=A.az(g.a,g.b,g.c).aw(864e8),g=new A.A(A.b1(g),A.b5(g),A.av(g)))if(!B.a.M(n,new A.zZ(g))){B.a.m(a0,new A.jW())
break}}e=a8.l(0,a)>0
d=A.a5(a5.ry,t.N,t.S).h(0,""+a9+"-"+B.b.ac(B.d.k(a7),2,"0"))
if(!e)c=B.b7
else if(a0.length===0)c=B.e9
else{a1=d!=null?B.ea:B.b7
c=a1}return new A.pc(c,e,a0,d)},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zW:function zW(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
jW:function jW(){},
pc:function pc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zX:function zX(a,b){this.a=a
this.b=b},
zY:function zY(){},
zZ:function zZ(a){this.a=a},
GD(a,b){var s,r,q
A:{s=B.n===a
if(s){r=B.m===b
q=b}else{q=null
r=!1}if(!r)if(B.w===a)r=B.k===(s?q:b)
else r=!1
else r=!0
break A}return!r},
bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){if(b.a.a.ga9(0)<0)A.f(A.x(b,"amount","is stored positive (LED-12)"))
return new A.V(j,d,a,a1,h,b,n,c,i,r,p,e,l,f,g,k,o,a0,s,q,m,a2)},
bh:function bh(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
jM(a){if(a.CW!=null)return B.e1
if(B.ee.u(0,a.y.a))return B.am
return null},
iR:function iR(a,b){this.a=a
this.b=b},
Iv(a){var s,r,q,p,o,n,m,l,k=t.yq.a(a.h(0,"flags")),j=k==null?null:k.G(0,t.N,t.X)
if(j==null)j=B.kT
k=t.r
s=A.w(t.N,k)
for(r=j.gbu(),r=r.gA(r),q=t.ns,p=t.rK;r.n();){o={}
n=r.gt()
o.a=null
m=n.a
o.a=n.b
l=A.aO(new A.n(B.dJ,q.a(new A.ni(o)),p),k)
if(l==null)throw A.k(A.z("category "+m+" has an unknown flag",o.a,null))
s.j(0,m,l)}return new A.ka(s)},
Bf(a,b){var s,r,q,p,o,n,m=A.w(t.N,t.W)
for(s=a.bs(),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
m.j(0,q.a,q)}p=A.b([],t.bD)
for(s=new A.a1(m,m.r,m.e,m.$ti.i("a1<2>"));s.n();){r=s.d
if(r.b===b){q=r.ch
q=q==null?null:B.b.am(q,"cancel:")
q=q===!0}else q=!0
if(q)continue
q=r.d
if(q===B.n&&r.e===B.k)B.a.m(p,new A.d9(r,null,!1))
else{q=q===B.H
if(q&&r.e===B.m){o=r.ay
n=m.h(0,o)
if(n!=null)B.a.m(p,new A.d9(r,n,!1))
else if(q&&r.e===B.m&&o==null&&r.Q!=null)B.a.m(p,new A.d9(r,null,!0))}}}return p},
Lp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h="currency",g="is not a supported currency",f=A.w(t.T,t.B)
for(s=a.length,r=c+" allows ",q=0;q<a.length;a.length===s||(0,A.l)(a),++q){p=a[q]
o=p.a
n=o.Q
if(n==null){n=p.b
n=n==null?i:n.Q}if(n==null)m=i
else{l=b.h(0,n)
l=l==null?i:l.d
m=l==null?n:l}n=f.h(0,m)
if(n==null){n=$.L()
l=new A.q(n,c)
k=B.e.h(0,c)
if(k==null)A.f(A.x(c,h,g))
if((n.b<=0?0:Math.max(n.gv().b,0))>k)A.f(A.z(r+A.i(k)+" decimal places",n.k(0),i))
n=l}l=p.c||p.b!=null
o=o.f
if(l){l=o.b
j=$.L()
k=B.e.h(0,l)
if(k==null)A.f(A.x(l,h,g))
if((j.b<=0?0:Math.max(j.gv().b,0))>k)A.f(A.z(l+" allows "+A.i(k)+" decimal places",j.k(0),i))
o=o.a
o=j.B(0,new A.P(o.a.S(0),o.b))
j=new A.q(o,l)
k=B.e.h(0,l)
if(k==null)A.f(A.x(l,h,g))
if((o.b<=0?0:Math.max(o.gv().b,0))>k)A.f(A.z(l+" allows "+A.i(k)+" decimal places",o.k(0),i))
o=j}l=o.b
j=n.b
if(l!==j)A.f(A.a8(j,l))
o=n.a.B(0,o.a)
k=B.e.h(0,j)
if(k==null)A.f(A.x(j,h,g))
if((o.b<=0?0:Math.max(o.gv().b,0))>k)A.f(A.z(j+" allows "+A.i(k)+" decimal places",o.k(0),i))
f.j(0,m,new A.q(o,j))}s=A.b([],t.Dz)
for(r=new A.ac(f,f.$ti.i("ac<1,2>")).gA(0);r.n();){o=r.d
s.push(new A.dq(o.a,o.b))}B.a.D(s,new A.vL())
return s},
Lj(a,b){var s,r,q,p,o,n,m,l,k,j=null,i="currency",h="is not a supported currency",g=t.N,f=t.B,e=A.w(g,f)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r){q=a[r]
p=q.a.f
o=p.b
if(o===b)continue
n=e.h(0,o)
if(n==null){n=$.L()
m=new A.q(n,o)
l=B.e.h(0,o)
if(l==null)A.f(A.x(o,i,h))
if((n.b<=0?0:Math.max(n.gv().b,0))>l)A.f(A.z(o+" allows "+A.i(l)+" decimal places",n.k(0),j))
n=m}if(q.c||q.b!=null){m=$.L()
l=B.e.h(0,o)
if(l==null)A.f(A.x(o,i,h))
if((m.b<=0?0:Math.max(m.gv().b,0))>l)A.f(A.z(o+" allows "+A.i(l)+" decimal places",m.k(0),j))
p=p.a
p=m.B(0,new A.P(p.a.S(0),p.b))
m=new A.q(p,o)
l=B.e.h(0,o)
if(l==null)A.f(A.x(o,i,h))
if((p.b<=0?0:Math.max(p.gv().b,0))>l)A.f(A.z(o+" allows "+A.i(l)+" decimal places",p.k(0),j))
p=m}m=p.b
k=n.b
if(m!==k)A.f(A.a8(k,m))
p=n.a.B(0,p.a)
l=B.e.h(0,k)
if(l==null)A.f(A.x(k,i,h))
if((p.b<=0?0:Math.max(p.gv().b,0))>l)A.f(A.z(k+" allows "+A.i(l)+" decimal places",p.k(0),j))
e.j(0,o,new A.q(p,k))}g=A.w(g,f)
f=e.$ti.i("au<1>")
f=A.B(new A.au(e,f),f.i("h.E"))
B.a.bb(f)
s=f.length
r=0
for(;r<f.length;f.length===s||(0,A.l)(f),++r){o=f[r]
p=e.h(0,o)
p.toString
g.j(0,o,p)}return g},
Gl(c4,c5,c6,c7,c8,c9,d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6="currency",b7="is not a supported currency",b8=new A.A(d1,d0,1),b9=A.av(A.az(d1,d0+1,0)),c0=new A.A(d1,d0,b9),c1=t.N,c2=A.a5(c4.d,c1,t.G),c3=t.sw.a(c4.e_.a)
if(c3.a===0)s=c9
else{c1=A.kW(c9.a,c1,t.r)
c1.a1(0,c3)
s=new A.ka(c1)}c1=A.F(c5)
c3=c1.i("n<1>")
r=A.B(new A.n(c5,c1.i("j(1)").a(new A.A_(b8,c0)),c3),c3.i("h.E"))
c1=A.F(r)
c3=c1.i("n<1>")
q=A.B(new A.n(r,c1.i("j(1)").a(new A.A0(c8)),c3),c3.i("h.E"))
p=A.a3($.L(),c8)
c1=t.B
o=A.w(t.r,c1)
n=A.iy(b9,p,!1,c1)
for(c1=q.length,c3=t.Ez,m=p,l=m,k=l,j=k,i=0,h=0;h<q.length;q.length===c1||(0,A.l)(q),++h){g=q[h]
f=!g.c
e=!f||g.b!=null
d=g.a
c=d.f
if(e){e=c.b
b=k.b
if(e!==b)A.f(A.a8(b,e))
e=k.a.B(0,c.a)
k=new A.q(e,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",e.k(0),b5))}else{e=c.b
b=j.b
if(e!==b)A.f(A.a8(b,e))
a0=c.a
a1=j.a.B(0,a0)
j=new A.q(a1,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((a1.b<=0?0:Math.max(a1.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",a1.k(0),b5))
if(A.jM(d)===B.am){b=l.b
if(e!==b)A.f(A.a8(b,e))
e=l.a.B(0,a0)
l=new A.q(e,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",e.k(0),b5));++i}}a2=d.Q
if(a2==null){e=g.b
a2=e==null?b5:e.Q}if(a2==null){if(!f||g.b!=null){e=c.b
b=$.L()
a=B.e.h(0,e)
if(a==null)A.f(A.x(e,b6,b7))
if((b.b<=0?0:Math.max(b.gv().b,0))>a)A.f(A.z(e+" allows "+A.i(a)+" decimal places",b.k(0),b5))
a0=c.a
a0=b.B(0,new A.P(a0.a.S(0),a0.b))
b=new A.q(a0,e)
a=B.e.h(0,e)
if(a==null)A.f(A.x(e,b6,b7))
if((a0.b<=0?0:Math.max(a0.gv().b,0))>a)A.f(A.z(e+" allows "+A.i(a)+" decimal places",a0.k(0),b5))
e=b}else e=c
b=e.b
a0=m.b
if(b!==a0)A.f(A.a8(a0,b))
e=m.a.B(0,e.a)
m=new A.q(e,a0)
a=B.e.h(0,a0)
if(a==null)A.f(A.x(a0,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.z(a0+" allows "+A.i(a)+" decimal places",e.k(0),b5))}else{a3=s.jI(a2,c3.a(c2))
if(a3===B.ba)a3=B.aE
e=o.h(0,a3)
if(e==null)e=p
if(!f||g.b!=null){b=c.b
a0=$.L()
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((a0.b<=0?0:Math.max(a0.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",a0.k(0),b5))
a1=c.a
a1=a0.B(0,new A.P(a1.a.S(0),a1.b))
a0=new A.q(a1,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((a1.b<=0?0:Math.max(a1.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",a1.k(0),b5))
b=a0}else b=c
a0=b.b
a1=e.b
if(a0!==a1)A.f(A.a8(a1,a0))
e=e.a.B(0,b.a)
a=B.e.h(0,a1)
if(a==null)A.f(A.x(a1,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.z(a1+" allows "+A.i(a)+" decimal places",e.k(0),b5))
o.j(0,a3,new A.q(e,a1))}e=g.b
b=e==null
e=b?b5:e.x
e=(e==null?d.x:e).c-1
if(!(e>=0&&e<b9))return A.a(n,e)
d=n[e]
if(!f||!b){f=c.b
b=$.L()
a=B.e.h(0,f)
if(a==null)A.f(A.x(f,b6,b7))
if((b.b<=0?0:Math.max(b.gv().b,0))>a)A.f(A.z(f+" allows "+A.i(a)+" decimal places",b.k(0),b5))
c=c.a
c=b.B(0,new A.P(c.a.S(0),c.b))
b=new A.q(c,f)
a=B.e.h(0,f)
if(a==null)A.f(A.x(f,b6,b7))
if((c.b<=0?0:Math.max(c.gv().b,0))>a)A.f(A.z(f+" allows "+A.i(a)+" decimal places",c.k(0),b5))
f=b}else f=c
c=f.b
b=d.b
if(c!==b)A.f(A.a8(b,c))
f=d.a.B(0,f.a)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((f.b<=0?0:Math.max(f.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",f.k(0),b5))
B.a.j(n,e,new A.q(f,b))}a4=A.b([],t.g)
for(a5=p,h=0;h<b9;++h){a6=n[h]
c1=a6.b
c3=a5.b
if(c1!==c3)A.f(A.a8(c3,c1))
c1=a5.a.B(0,a6.a)
a5=new A.q(c1,c3)
a=B.e.h(0,c3)
if(a==null)A.f(A.x(c3,b6,b7))
if((c1.b<=0?0:Math.max(c1.gv().b,0))>a)A.f(A.z(c3+" allows "+A.i(a)+" decimal places",c1.k(0),b5))
B.a.m(a4,a5)}for(c1=c6.length,a7=0,h=0;h<c6.length;c6.length===c1||(0,A.l)(c6),++h){a8=c6[h]
if(a8.b===c7){c3=a8.x
c3=c3.l(0,b8)<0||c3.l(0,c0)>0}else c3=!0
if(c3)continue
a9=a8.d
b0=a8.e
A:{b1=a9==null
if(b1){c3=B.k===b0
b2=b0}else{b2=b5
c3=!1}b3=b5
if(!c3){b4=B.n===a9
if(b4){if(b1)c3=b2
else{c3=b0
b2=c3
b1=!0}b3=B.m===c3
c3=b3}else c3=!1}else{b4=!1
c3=!0}if(c3){c3=!0
break A}if(B.H===a9)if(b4)c3=b3
else{b3=B.m===(b1?b2:b0)
c3=b3}else c3=!1
if(c3){c3=a8.ay==null&&a8.Q==null
break A}c3=!1
break A}if(c3)++a7}return new A.pd(j.aa(0,k),k,A.Lp(q,c2,c8),o,m,l,i,a7,A.Lj(r,c8))},
bu:function bu(a,b){this.a=a
this.b=b},
ka:function ka(a){this.a=a},
ni:function ni(a){this.a=a},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a,b){this.a=a
this.b=b},
vL:function vL(){},
pd:function pd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
A_:function A_(a,b){this.a=a
this.b=b},
A0:function A0(a){this.a=a},
Nt(a){var s,r,q,p,o=A.o(a).i("au<1>"),n=A.B(new A.au(a,o),o.i("h.E"))
B.a.D(n,new A.B4(a))
o=A.w(t.N,t.B)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.l)(n),++r){q=n[r]
p=a.h(0,q)
p.toString
o.j(0,q,p)}return o},
G0(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="currency",e="is not a supported currency",d=$.L(),c=A.a3(d,a2),b=A.w(t.N,t.B),a=A.a3(d,a2)
for(d=a0.length,s=a2+" allows ",r=0,q=0,p=0,o=0;o<a0.length;a0.length===d||(0,A.l)(a0),++o){n=a0[o]
if(n.b===a1){m=n.x
m=m.l(0,a3)<0||m.l(0,a4)>0}else m=!0
if(m)continue
if(n.e!==B.m)continue
m=n.f
l=m.b
if(l!==a2){++q
continue}switch(n.d){case null:case void 0:++r
break
case B.w:k=c.b
if(l!==k)A.f(A.a8(k,l))
m=m.a
j=c.a.B(0,m)
c=new A.q(j,k)
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,f,e))
if((j.b<=0?0:Math.max(j.gv().b,0))>i)A.f(A.z(k+" allows "+A.i(i)+" decimal places",j.k(0),g))
if(A.jM(n)===B.am){k=a.b
if(l!==k)A.f(A.a8(k,l))
j=a.a.B(0,m)
a=new A.q(j,k)
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,f,e))
if((j.b<=0?0:Math.max(j.gv().b,0))>i)A.f(A.z(k+" allows "+A.i(i)+" decimal places",j.k(0),g));++p}h=n.Q
if(h==null)++r
else{k=b.h(0,h)
if(k==null){k=$.L()
j=new A.q(k,a2)
i=B.e.h(0,a2)
if(i==null)A.f(A.x(a2,f,e))
if((k.b<=0?0:Math.max(k.gv().b,0))>i)A.f(A.z(s+A.i(i)+" decimal places",k.k(0),g))
k=j}j=k.b
if(l!==j)A.f(A.a8(j,l))
m=k.a.B(0,m)
i=B.e.h(0,j)
if(i==null)A.f(A.x(j,f,e))
if((m.b<=0?0:Math.max(m.gv().b,0))>i)A.f(A.z(j+" allows "+A.i(i)+" decimal places",m.k(0),g))
b.j(0,h,new A.q(m,j))}break
default:break}}A.Nt(b)
return new A.nU(c,p)},
nU:function nU(a,b){this.a=a
this.c=b},
B4:function B4(a){this.a=a},
af:function af(a,b){this.a=a
this.$ti=b},
j3:function j3(a,b){this.a=a
this.$ti=b},
Gr(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
if(a1.d!==B.o)return a
for(s=A.aD(a0.fx,t.v),r=s.length,q=a1.a,p=a,o=0;o<r;++o){n=s[o]
if(n.b===q)m=p==null||n.d.l(0,p.d)>0
else m=!1
if(m)p=n}if(p==null||p.Q.length===0)return a
for(s=a0.bI(q),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=p.c,m=p.d,l=a,k=l;s.n();){j=r.gt()
i=j.w
if(i.l(0,q)<0||i.l(0,m)>0)continue
h=$.Do()
g=j.z
f=h.aj(g==null?"":g)
if(f!=null)i=k==null||i.l(0,k.w)>0
else i=!1
if(i){l=f
k=j}}if(k==null||l==null)return a
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
e=A.X(r,a,a)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
d=A.X(s,a,a)
s=A.b([],t.Ev)
for(r=p.Q,q=r.length,i=d-e,o=0;h=r.length,o<h;r.length===q||(0,A.l)(r),++o){c=r[o]
if(c.e===i)s.push(c)}if(s.length===1)b=B.a.gaQ(s)
else b=h===1?B.a.gaQ(r):a
return b==null?a:new A.pk(b,m,d,k.f)},
LV(a,b){var s,r,q,p,o,n,m,l,k,j=null
if(b.d!==B.o)return B.k2
s=A.w(t.S,t.Fb)
for(r=a.bI(b.a),q=J.R(r.a),r=new A.N(q,r.b,r.$ti.i("N<1>"));r.n();){p=q.gt()
o=$.Do()
n=p.z
m=o.aj(n==null?"":n)
if(m==null)continue
o=m.b
if(1>=o.length)return A.a(o,1)
n=o[1]
n.toString
n=A.X(n,j,j)
if(2>=o.length)return A.a(o,2)
o=o[2]
o.toString
A.X(o,j,j)
o=p.w
l=p.f
p=p.a
k=s.h(0,n)
if(k==null||o.l(0,k.c)>0)s.j(0,n,new A.dm(n,o,l,p))}r=s.$ti.i("M<2>")
r=A.B(new A.M(s,r),r.i("h.E"))
B.a.D(r,new A.wd())
return r},
CN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.w(d,t.qD)
for(s=A.aD(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
n=c.h(0,o)
if(n==null||p.d.l(0,n.a)>0)c.j(0,o,new A.jk(p.d,p.Q))}m=A.b([],t.sA)
d=A.a4(d)
for(s=a.gL().gT(),s=s.gA(s);s.n();){l=A.Gr(a,s.gt())
if(l!=null)d.m(0,l.a.bk(""))}for(s=new A.ac(c,c.$ti.i("ac<1,2>")).gA(0),r=t.b;s.n();){o=s.d
k=o.a
j=o.b
i=a.gL().h(0,k)
if(i!=null){o=i.d
o=o!==B.y&&o!==B.o}else o=!0
if(o)continue
for(o=J.R(j.b),h=j.a,g=i.a;o.n();){f=o.gt()
if(d.u(0,f.bk("")))continue
e=A.C6(a.cc(g),r)
e=e==null?null:e.a
B.a.m(m,new A.cw(i,f,h,e==null?g:e))}}B.a.D(m,new A.xT())
return m},
G9(a,b){var s=a.gL().gT(),r=A.o(s)
return A.aO(new A.n(s,r.i("j(h.E)").a(new A.zq(b)),r.i("n<h.E>")),t.b)},
CM(a,b){var s=A.CN(a),r=A.F(s)
return A.aO(new A.n(s,r.i("j(1)").a(new A.xS(b)),r.i("n<1>")),t.eY)},
Md(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.b([],t.M)
for(s=A.CN(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.b
n=o.c
m=n.a.l(0,$.L())
if(m!==0&&A.G9(a,o.bk(p.d))==null){m=o.bk(p.d)
l=p.a
k=o.a===B.cj?"personal loan":"instalment plan"
j=o.b.k(0)
i=p.c.k(0)
n=n.k(0)
o=o.e
o=o==null?"":", "+A.i(o)+" instalments left"
h.push(new A.W("card-loan:"+m,B.c9,l.a,l.c+" "+k+" of "+j+" is on the "+l.b+" statement to "+i+": "+n+" outstanding"+o+". Add it as a loan so each statement keeps its figures."))}}return h},
G8(a,b){var s,r,q,p,o,n,m=A.b([],t.Q)
for(s=a.gL().gT(),s=s.gA(s),r=b.a,q=r.c,p=r.e,r=r.r;s.n();){o=s.gt()
n=!1
if(o.d===B.o)if(o.CW==null)if(o.c===q)if(o.e===p)if(o.r===r){n=o.as
n=(n==null?null:n.x)==null}if(n)m.push(o)}B.a.D(m,new A.zp())
return m},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pk:function pk(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
wd:function wd(){},
xT:function xT(){},
zq:function zq(a){this.a=a},
xS:function xS(a){this.a=a},
zp:function zp(){},
N1(a){var s,r,q,p,o,n=A.a4(t.N)
for(s=B.b.bR((a.c+" "+a.b).toLowerCase(),A.D("[^a-z0-9]+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(p.length>=3){o=A.D("^[0-9]+$",!0,!1)
o=!o.b.test(p)&&!B.mq.u(0,p)}else o=!1
if(o)n.m(0,p)}return n},
Ga(d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3=null,d4="statement",d5=d8.as,d6=d5==null
if((d6?d3:d5.x)==null)s=d3
else{r=d5.x
r.toString
s=A.CM(d7,r)}r=s==null
q=r?A.Gr(d7,d8):d3
p=r?d3:s.b
if(p==null)p=q==null?d3:q.a
o=r?d3:s.c
if(o==null)o=q==null?d3:q.b
r=p!=null
n=!1
if(r)if(p.e!=null){if((d6?d3:d5.f)!=null){o.toString
m=d5.f
m.toString
m=o.l(0,m)>0}else m=!0
n=m}l=d6?d3:d5.c
if(l==null)l=q==null?d3:q.d
k=d6?d3:d5.d
if(n)j=p.e
else j=d6?d3:d5.e
if(n)i=o
else i=d6?d3:d5.f
h=d6?d3:d5.r
if(h==null)h=q==null?d3:q.e
g=d6?d3:d5.w
f=A.b([],t.F)
if(i!=null&&k!=null&&j!=null){e=i.a
d=i.b
while(f.length<j){d6=d+1
if(k<=A.av(A.az(e,d6,0))){c=new A.A(e,d,k)
if(c.l(0,i)>0){B.a.m(f,c)
if(c.l(0,d9)>0)break}}b=d===12?new A.p(e+1,1):new A.p(e,d6)
e=b.a
d=b.b}}d6=A.b([],t.A)
m=g==null
if(!m)for(a=d7.bs(),a0=J.R(a.a),a=new A.N(a0,a.b,a.$ti.i("N<1>"));a.n();){a1=a0.gt()
if(a1.c===g&&a1.e===B.k)d6.push(a1)}B.a.D(d6,new A.zr())
a2=A.N1(d8)
a3=A.a4(t.N)
a=A.b([],t.n)
for(a0=A.aD(d7.fx,t.v),a1=a0.length,a4=0;a4<a1;++a4){a5=a0[a4]
if(a5.b===g)a.push(a5)}a0=t.iF
a6=A.b([],a0)
for(a1=A.bE(f,0,t.h),a7=J.R(a1.a),a8=a1.b,a1=new A.as(a7,a8,A.o(a1).i("as<1>")),a9="loan:"+d8.a+":",b0=d7.a7.a,b1=j==null,b2=l==null;a1.n();){b3={}
b4=a1.c
b4=b4>=0?new A.p(a8+b4,a7.gt()):A.f(A.ai())
b3.a=null
b3.a=b4.b
b5=b2?0:l
b6=b5-(b1?0:j)+b4.a+1
b7=d3
if(h!=null)for(b4=[!0,!1],b5=h.a,b8=h.b,a4=0;a4<2;++a4){b9=b4[a4]
for(c0=d6.length,c1=0;c1<d6.length;d6.length===c0||(0,A.l)(d6),++c1){d=d6[c1]
if(a3.u(0,d.a)||d.f.b!==b8)continue
if(Math.abs(b3.a.a8(d.x))>5)continue
c2=!1
if(b9){c3=d.f
if(b8===c3.b)c3=b5.l(0,c3.a)===0
else c3=c2
c2=c3}else if(d.f.a.l(0,b5)<0){if(d.d!==B.b4){c3=d.z
if(c3==null)c3=""
c3=B.a.M(B.b.bR(c3.toLowerCase(),A.D("[^a-z0-9]+",!0,!1)),a2.geX(a2))}else c3=!0
c2=c3}if(c2){b7=d
break}}if(b7!=null)break}if(b7!=null){a3.m(0,b7.a)
b4=b7.f
b5=h.a
b8=b4.b
c0=h.b
if(b8!==c0)A.f(A.a8(c0,b8))
b4=b4.a
b4=b5.B(0,new A.P(b4.a.S(0),b4.b))
c4=new A.q(b4,c0)
c5=B.e.h(0,c0)
if(c5==null)A.f(A.x(c0,"currency","is not a supported currency"))
if((b4.b<=0?0:Math.max(b4.gv().b,0))>c5)A.f(A.z(c0+" allows "+A.i(c5)+" decimal places",b4.k(0),d3))
b5=b3.a
b8=$.L()
c0=b4.l(0,b8)
c0=c0===0?B.ay:B.bA
b4=b4.l(0,b8)
B.a.m(a6,new A.dL(b6,b5,h,c0,b4===0?d3:c4))
continue}b4=b3.a.k(0)
b5=b0.h(0,B.bI)
b4=b5==null?d3:b5.h(0,a9+b4)
c6=d9.a8(b3.a)
if(b4!=null)c7=B.aN
else if(c6>3)c7=B.cV
else{if(c6>0)b4=B.cW
else if(c6===0)b4=B.cX
else b4=B.a.M(a,new A.zs(b3))?B.bB:B.cY
c7=b4}B.a.m(a6,new A.dL(b6,b3.a,h,c7,d3))}d6=A.a4(t.S)
for(a=a6.length,a4=0;a4<a6.length;a6.length===a||(0,A.l)(a6),++a4)d6.m(0,a6[a4].a)
a=A.b([],a0)
for(a0=A.LV(d7,d8),a1=a0.length,a4=0;a4<a0.length;a0.length===a1||(0,A.l)(a0),++a4){c8=a0[a4]
a7=c8.a
if(!d6.u(0,a7))a.push(new A.dL(a7,c8.c,c8.d,B.ay,d3))}B.a.mm(a6,0,a)
c9=A.CJ(d7,d8,d9,A.G5(d7,d8.r,d9))
if(r)d0=c9==null||o.l(0,c9.c)>=0
else d0=!1
if(d0)d1=p.c
else if(c9==null)d1=d3
else{d6=c9.b
r=d6.a
a0=r.a
if(a0.a)a0=a0.S(0)
d6=A.a3(new A.P(a0,r.b),d6.b)
d1=d6}d6=A.bz(a6,a.length,d3,t.pt)
d2=d6.iq(0,d6.$ti.i("j(a2.E)").a(new A.zt()))
d6=b2||b1?d3:l-j+d2.gq(0)
if(d0)r=o
else r=c9==null?d3:c9.c
if(d0)a=d4
else if(c9==null)a=""
else a=c9.d===B.cp?"you said":d4
a0=A.b([],t.s)
if(h==null)a0.push("instalment amount")
if(m)a0.push("paying account")
if(d1==null)a0.push("outstanding balance")
return new A.p7(d6,l,a6,d1,r,a,a0)},
cm:function cm(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e},
p7:function p7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
zr:function zr(){},
zs:function zs(a){this.a=a},
zt:function zt(){},
D0(a,b){var s,r,q,p,o,n,m,l,k=a.as
if(k==null)throw A.k(A.x(a.a,"loan","has no loan terms"))
s=k.d
r=k.f
q=s==null
p=!q
o=!p||r==null?0:A.Fe(s,r,b)
if(o>0&&k.e!=null){n=k.e
n.toString
Math.max(0,n-o)}m=k.e
l=!p||r==null?0:A.Fe(s,r,b.aC(-1))
p=k.a
if(q)q=B.cD
else if(m===0)q=B.eF
else q=m!=null&&m-l<=0?new A.iK(o):A.Lf(s,b)
return new A.p8(p,q)},
Fq(a,b){return new A.de(A.Le(a,b),t.dU)},
Le(a,b){return function(){var s=a,r=b
var q=0,p=1,o=[],n,m,l,k,j,i
return function $async$Fq(c,d,e){if(d===1){o.push(e)
q=p}for(;;)switch(q){case 0:l=s.a
k=s.b
j=r.a
i=r.b
case 2:if(l>=j)n=l===j&&k<=i
else n=!0
if(!n){q=3
break}q=4
return c.b=new A.p(l,k),1
case 4:m=k===12?new A.p(l+1,1):new A.p(l,k+1)
l=m.a
k=m.b
q=2
break
case 3:return 0
case 1:return c.c=o.at(-1),3}}}},
Fe(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=A.Fq(b,c),r=s.$ti,s=new A.ed(s.a(),r.i("ed<1>")),q=b.a,p=b.b,r=r.c,o=c.a,n=c.b,m=0;s.n();){l=s.b
if(l==null)l=r.a(l)
k=l.a
j=l.b
if(a<=A.av(A.az(k,j+1,0))){i=new A.A(k,j,a)
if(i.l(0,b)>0&&i.l(0,c)<=0)++m}else{if(!(new A.p(k,j).$s===new A.p(q,p).$s&&k===q&&j===p))l=!(new A.p(k,j).$s===new A.p(o,n).$s&&k===o&&j===n)
else l=!1
if(l)++m}}return m},
Lf(a,b){var s,r,q,p=b.a,o=b.b
for(;;){s=o+1
if(a>A.av(A.az(p,s,0)))return new A.fQ(p,o)
r=new A.A(p,o,a)
if(r.l(0,b)>=0)return new A.en(r)
q=o===12?new A.p(p+1,1):new A.p(p,s)
p=q.a
o=q.b}},
ez:function ez(){},
en:function en(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
iL:function iL(){},
iK:function iK(a){this.a=a},
ic:function ic(){},
p8:function p8(a,b){this.a=a
this.w=b},
Cf(a){var s,r,q,p,o,n,m,l=null,k="instalment",j=t.c_.a(a.h(0,"principal")),i=A.m(a.h(0,"pendingAsOf"))
if(a.h(0,"type")==null)s=l
else{s=a.h(0,"type")
s.toString
s=A.ag(B.bO,A.c(s),t.gd)}if(j==null)r=l
else{r=j.h(0,"amount")
r.toString
r=A.ad(A.c(r))
q=j.h(0,"currency")
q.toString
q=A.a3(r,A.c(q))
r=q}q=A.aH(a.h(0,"instalmentCount"))
p=A.aH(a.h(0,"paymentDay"))
o=A.aH(a.h(0,"pendingInstalments"))
n=i==null?l:A.ax(i)
if(a.h(0,k)==null)m=l
else{m=a.h(0,k)
m.toString
m=A.aP(t.f.a(m).G(0,t.N,t.X))}return new A.ha(s,r,q,p,o,n,m,A.m(a.h(0,"payingAccountId")),A.m(a.h(0,"cardLoan")))},
Gb(a,b){var s,r,q,p,o,n=a.b,m=n!=null
if(m&&n.b!==b)return"the loan amount must be in "+b
if(m&&n.a.l(0,$.L())<=0)return"the loan amount must be more than 0"
s=a.r
m=s!=null
if(m&&s.b!==b)return"the instalment must be in "+b
if(m&&s.a.l(0,$.L())<=0)return"the instalment must be more than 0"
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
dM:function dM(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
N2(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.zu()
if(B.a.M(A.b([d,a0,a2],t.s),A.FD())||A.FH(a3)||A.FH(c))return B.m5
p=new A.zw(f)
for(o=[new A.p(d,"Instalments"),new A.p(a0,"Payment day"),new A.p(a2,"Pending instalments")],n=0;n<3;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null&&p.$1(l)==null)return new A.p(g,k+" is a whole number")}s=new A.zv(f,b)
r=null
q=null
for(o=[new A.p(a3,"Loan amount"),new A.p(c,"Instalment")],n=0;n<2;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null){m=f.$1(l)
m.toString
m=A.Gw(m)==null}else m=!1
if(m)return new A.p(g,k+" is an amount: digits, commas and one point")}try{r=f.$1(a3)==null?g:s.$1(a3)}catch(j){if(A.aw(j) instanceof A.b9)return new A.p(g,"Loan amount has more decimal places than "+b+" allows")
else throw j}try{q=f.$1(c)==null?g:s.$1(c)}catch(j){if(A.aw(j) instanceof A.b9)return new A.p(g,"Instalment has more decimal places than "+b+" allows")
else throw j}i=new A.ha(a4,r,p.$1(d),p.$1(a0),p.$1(a2),a1,q,e,a)
h=A.Gb(i,b)
return h==null?new A.p(i,g):new A.p(g,h)},
zu:function zu(){},
zw:function zw(a){this.a=a},
zv:function zv(a,b){this.a=a
this.b=b},
Et(a){var s,r,q,p,o,n,m,l,k=a.h(0,"kind")
k.toString
k=A.ag(B.jP,A.c(k),t.iL)
s=a.h(0,"started")
s.toString
s=A.ax(A.c(s))
r=a.h(0,"outstanding")
r.toString
q=t.f
p=t.N
o=t.X
r=A.aP(q.a(r).G(0,p,o))
if(a.h(0,"ends")==null)n=null
else{n=a.h(0,"ends")
n.toString
n=A.ax(A.c(n))}m=A.aH(a.h(0,"remaining"))
if(a.h(0,"amount")==null)q=null
else{l=a.h(0,"amount")
l.toString
o=A.aP(q.a(l).G(0,p,o))
q=o}return new A.hp(k,s,r,n,m,q,A.m(a.h(0,"reference")))},
hp:function hp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fu:function fu(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b){this.a=a
this.b=b},
aF(a,b){var s,r=a.F()
a.F()
s=r.aw(288e8)
return new A.A(A.b1(s),A.b5(s),A.av(s))},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
CW(a,b){var s
if(b!=="INR"||a.length<=3)return A.hQ(a,A.D("\\B(?=(\\d{3})+(?!\\d))",!0,!1),t.tj.a(t.w.a(new A.zc())),null)
s=a.length-3
return A.hQ(B.b.X(a,0,s),A.D("\\B(?=(\\d{2})+(?!\\d))",!0,!1),t.tj.a(t.w.a(new A.zd())),null)+","+B.b.ae(a,s)},
zc:function zc(){},
zd:function zd(){},
nJ:function nJ(){},
a8(a,b){return new A.kg(a,b)},
a3(a,b){var s=A.ev(b)
if(a.gef()>s)A.f(A.z(b+" allows "+s+" decimal places",a.k(0),null))
return new A.q(a,b)},
aP(a){var s,r=a.h(0,"amount")
r.toString
r=A.ad(A.c(r))
s=a.h(0,"currency")
s.toString
return A.a3(r,A.c(s))},
ev(a){var s=B.e.h(0,a)
if(s==null)throw A.k(A.x(a,"currency","is not a supported currency"))
return s},
kg:function kg(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b
this.c=$},
kF:function kF(a){this.a=a},
aj:function aj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Ni(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=" or ",b0=b4.b3(),b1=b0.$ti,b2=b1.i("n<h.E>"),b3=A.B(new A.n(b0,b1.i("j(h.E)").a(new A.Au()),b2),b2.i("h.E"))
B.a.D(b3,new A.Al())
b0=A.F(b3)
b1=b0.i("j(1)")
b0=b0.i("n<1>")
b2=b0.i("h.E")
s=A.B(new A.n(b3,b1.a(new A.Am(b4)),b0),b2)
r=A.B(new A.n(b3,b1.a(new A.An(b4)),b0),b2)
b0=t.C
q=A.w(t.B,b0)
for(b1=r.length,p=0;p<r.length;r.length===b1||(0,A.l)(r),++p){o=r[p]
J.bV(q.aI(o.f,new A.Ao()),o)}b1=t.N
n=A.w(b1,b0)
m=A.w(b1,b0)
for(b2=s.length,l=t.tx,k=t.BA,j=t.fx,i=t.yL,h=i.i("h.E"),g=t.q,f=t.A,p=0;e=s.length,p<e;s.length===b2||(0,A.l)(s),++p){d=s[p]
e=A.b([],f)
c=q.h(0,d.f)
c=J.R(c==null?B.ab:c)
b=d.w
while(c.n()){a=c.gt()
a0=a.w
if(b.a8(a0)>=0&&b.a8(a0)>=0&&b.a8(a0)<=5)e.push(a)}if(e.length===0)continue
c=A.b([d.z],g)
for(b=d.a,a=b4.e5(b),a0=J.R(a.a),a=new A.N(a0,a.b,a.$ti.i("N<1>"));a.n();)c.push(a0.gt().z)
a1=A.B(new A.n(e,j.a(new A.Ap(b4,new A.ah(c,l.a(new A.Aq()),k))),i),h)
if(a1.length===0)m.j(0,b,e)
else n.j(0,b,a1)}a2=A.w(b1,b0)
for(p=0;p<s.length;s.length===e||(0,A.l)(s),++p){d=s[p]
b0=n.h(0,d.a)
if(b0==null)b0=B.ab
b2=b0.length
a3=0
for(;a3<b0.length;b0.length===b2||(0,A.l)(b0),++a3)J.bV(a2.aI(b0[a3].a,new A.Ar()),d)}a4=new A.Ak(b4)
a5=A.b([],t.nt)
a6=A.b([],t.M)
for(b0=s.length,p=0;p<s.length;s.length===b0||(0,A.l)(s),++p){d=s[p]
b2=d.a
a7=m.h(0,b2)
if(a7!=null){l=d.f.k(0)
k=A.i(a4.$1(d))
j=d.w.k(0)
i=A.F(a7)
i=new A.ah(a7,i.i("e(1)").a(a4),i.i("ah<1,e>")).Z(0,a9)
h=a7.length===1?"that card's bank":"their banks"
B.a.m(a6,new A.W("card-bill?:"+b2,B.P,b2,l+" left "+k+" on "+j+": it may pay "+i+", but nothing names "+h+"."))
continue}a8=n.h(0,b2)
if(a8==null)continue
if(a8.length>1){l=A.F(a8)
B.a.m(a6,new A.W("card-bill?:"+b2,B.P,b2,d.f.k(0)+" left "+A.i(a4.$1(d))+" on "+d.w.k(0)+": it may pay "+new A.ah(a8,l.i("e(1)").a(a4),l.i("ah<1,e>")).Z(0,a9)+"."))}else{b2=a2.h(0,B.a.gaQ(a8).a)
b2.toString
if(J.aE(b2)===1){B.a.gaQ(a8)
B.a.m(a5,new A.k9())}}}for(b0=r.length,p=0;p<r.length;r.length===b0||(0,A.l)(r),++p){o=r[p]
b2=o.a
a8=a2.h(0,b2)
if(a8==null||J.aE(a8)<2)continue
B.a.m(a6,new A.W("card-bill?:"+b2,B.P,b2,o.f.k(0)+" paid to "+A.i(a4.$1(o))+" on "+o.w.k(0)+" may come from "+J.Dx(a8,new A.As(a4),b1).Z(0,a9)+"."))}B.a.D(a6,new A.At())
return new A.nf(a6)},
ne:function ne(){},
k9:function k9(){},
nf:function nf(a){this.b=a},
Au:function Au(){},
Al:function Al(){},
Am:function Am(a){this.a=a},
An:function An(a){this.a=a},
Ao:function Ao(){},
Aq:function Aq(){},
Ap:function Ap(a,b){this.a=a
this.b=b},
Aj:function Aj(a){this.a=a},
Ar:function Ar(){},
Ak:function Ak(a){this.a=a},
As:function As(a){this.a=a},
At:function At(){},
D7(a,b){var s,r,q,p,o,n,m,l,k,j=A.b([],t.F)
for(s=A.aD(a.RG,t.lA),r=s.length,q=b.a,p=0;p<r;++p){o=s[p]
if(o.a===q)j.push(o.c)}if(j.length===0)return null
s=A.b([],t.n)
for(r=A.aD(a.fx,t.v),n=r.length,p=0;p<n;++p){m=r[p]
if(m.b===q)s.push(m)}B.a.D(s,new A.B1())
if(s.length!==0){r=B.a.gak(s).f.a.l(0,$.L())
r=r!==0}else r=!1
if(r)return null
l=B.a.cS(j,new A.B2())
k=(s.length!==0&&B.a.gak(s).d.l(0,l)>0?B.a.gak(s).d:l).aC(1)
if(a.bI(q).M(0,new A.B3(k)))return null
return k},
NR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.w
g=g.l(0,c)>0?g:c
s=b.CW
r=s!=null&&s.l(0,d)<0?s:d
if(g.l(0,r)>0)return!0
q=A.b([],t.hy)
for(p=A.aD(a.fx,t.v),o=p.length,n=b.a,m=0;m<o;++m){l=p[m]
if(l.b===n&&l.r!=null)q.push(new A.p(l.c,l.d))}for(p=A.aD(a.RG,t.lA),o=p.length,m=0;m<o;++m){k=p[m]
if(k.a===n)q.push(new A.p(k.b,k.c))}j=A.D7(a,b)
if(j!=null)q.push(new A.p(j,r))
B.a.D(q,new A.Bp())
for(p=q.length,i=g,m=0;m<q.length;q.length===p||(0,A.l)(q),++m){o=q[m]
h=o.b
if(o.a.l(0,i)>0)break
if(h.l(0,i)>=0){k=A.az(h.a,h.b,h.c).aw(864e8)
i=new A.A(A.b1(k),A.b5(k),A.av(k))}if(i.l(0,r)>0)return!0}return i.l(0,r)>0},
Nb(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=A.b([],t.lz),a3=a7.gL().gT(),a4=A.o(a3),a5=a4.i("n<h.E>"),a6=A.B(new A.n(a3,a4.i("j(h.E)").a(new A.zI(a7)),a5),a5.i("h.E"))
B.a.D(a6,new A.zJ())
for(a3=a6.length,a4=a7.RG,a5=t.lA,s=a7.fx,r=t.v,q=t.hy,p=0;p<a6.length;a6.length===a3||(0,A.l)(a6),++p){o=a6[p]
n=new A.zL(a7,o)
m=A.b([],q)
l=A.d1(s,!1,r)
l.$flags=3
k=l
j=k.length
i=o.a
h=o.w
g=0
for(;g<j;++g){f=k[g]
if(f.b===i&&f.d.l(0,h)>=0)m.push(new A.p(f.c,f.d))}l=A.d1(a4,!1,a5)
l.$flags=3
k=l
j=k.length
g=0
for(;g<j;++g){e=k[g]
if(e.a===i&&e.c.l(0,h)>=0)m.push(new A.p(e.b,e.c))}d=A.D7(a7,o)
if(d!=null){k=d.l(0,a9)<=0
c=d}else{c=null
k=!1}if(k)m.push(new A.p(c,a9))
B.a.D(m,new A.zK())
for(k=m.length,g=0;g<m.length;m.length===k||(0,A.l)(m),++g){j=m[g]
b=j.a
a=j.b
if(b.l(0,h)>0){e=A.az(b.a,b.b,b.c).aw(-864e8)
a0=new A.A(A.b1(e),A.b5(e),A.av(e))
B.a.m(a2,new A.iB(i,h,a0,n.$2(h,a0)))}e=A.az(a.a,a.b,a.c).aw(864e8)
a1=new A.A(A.b1(e),A.b5(e),A.av(e))
if(a1.l(0,h)>0)h=a1}if(o.CW==null&&h.a8(a9)>45)B.a.m(a2,new A.iB(i,h,null,n.$2(h,a9)))}return a2},
Na(a,b){var s,r,q,p,o,n,m,l=A.b([],t.M)
for(s=A.Nb(a,B.eI,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.a
n=p.b.k(0)
m=a.gL().h(0,o)
m.toString
l.push(new A.W("missing-statement:"+o+":"+n,B.c2,o,A.KJ(a,m,p,b)))}return l},
KJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="No statement for ",h=A.b([],t.n)
for(s=A.aD(a.fx,t.v),r=s.length,q=b.a,p=b.w,o=0;o<r;++o){n=s[o]
if(n.b===q&&n.d.l(0,p)>=0)h.push(n)}m=B.a.M(h,new A.vA(c))?"between two that were read":"before the first one read"
l=c.c
if(l!=null)k=i+b.b+" covers "+c.b.k(0)+" to "+l.k(0)+", "+m+"."
else{h=h.length===0&&c.b.J(0,p)
s=c.b
r=i+b.b
k=h?r+" has been read since its history start, "+s.k(0)+".":r+" covers the "+s.a8(d)+" days from "+s.k(0)+"."}j=c.d
A:{if(0===j){h=""
break A}if(1===j){h=" 1 alert in that time waits for it."
break A}h=" "+j+" alerts in that time wait for it."
break A}return k+h+" Add it from Statements, or say the bank sent none."},
N9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.b([],t.n)
for(s=A.aD(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)f.push(p)}if(f.length<2)return B.jY
s=A.b([],t.hy)
for(r=f.length,q=0;q<f.length;f.length===r||(0,A.l)(f),++q){p=f[q]
s.push(new A.p(p.c,p.d))}for(r=A.aD(a.RG,t.lA),o=r.length,q=0;q<o;++q){n=r[q]
if(n.a===b)s.push(new A.p(n.b,n.c))}B.a.D(s,new A.zD())
r=A.a4(t.l1)
for(o=f.length,q=0;q<f.length;f.length===o||(0,A.l)(f),++q){m=f[q].d
r.m(0,new A.hz(m.b,m.a))}l=new A.zG()
k=new A.zH()
j=A.B(r,r.$ti.c)
B.a.D(j,new A.zE(l))
i=new A.zF(s)
f=A.b([],t.l7)
s=l.$1(B.a.gY(j))
if(typeof s!=="number")return s.B()
h=s+1
for(;;){s=l.$1(B.a.gak(j))
if(typeof s!=="number")return A.CX(s)
if(!(h<s))break
g=k.$1(h)
s=r.u(0,g)
if(!s){s=g.b
o=g.a
n=A.az(s,o+1,1).aw(-864e8)
if(!i.$2(new A.A(s,o,1),new A.A(A.b1(n),A.b5(n),A.av(n))))f.push(g)}++h}return f},
uc:function uc(){},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B1:function B1(){},
B2:function B2(){},
B3:function B3(a){this.a=a},
Bp:function Bp(){},
zI:function zI(a){this.a=a},
zJ:function zJ(){},
zL:function zL(a,b){this.a=a
this.b=b},
zM:function zM(a,b){this.a=a
this.b=b},
zK:function zK(){},
vA:function vA(a){this.a=a},
zD:function zD(){},
zG:function zG(){},
zH:function zH(){},
zE:function zE(a){this.a=a},
zF:function zF(a){this.a=a},
Ne(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="currency",a7="is not a supported currency",a8=A.b([],t.fB),a9=A.w(t.N,t.C)
for(s=b0.b3(),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
J.bV(a9.aI(q.c,new A.zR()),q)}for(s=new A.a1(a9,a9.r,a9.e,a9.$ti.i("a1<2>"));s.n();)J.mR(s.d,new A.zS())
p=new A.zU()
for(s=A.aD(b0.fx,t.v),r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
m=b0.gL().h(0,q)
if(m==null||n.d.l(0,m.w)<0)continue
l=n.f
k=l.b
j=$.L()
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
g=j.b<=0
if((g?0:Math.max(j.gv().b,0))>h)A.f(A.z(k+" allows "+A.i(h)+" decimal places",j.k(0),a5))
f=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((g?0:Math.max(j.gv().b,0))>h)A.f(A.z(k+" allows "+A.i(h)+" decimal places",j.k(0),a5))
e=a9.h(0,q)
if(e==null)e=B.ab
j=n.c
d=p.$2(e,j)
g=J.an(e)
c=n.d
b=k+" allows "
a=0
a0=0
for(;;){if(!(d<g.gq(e)&&g.h(e,d).w.l(0,c)<=0))break
A:{a1=g.h(e,d)
a2=a1.f
if(a2.b!==k){++a0
break A}if(!(a1.e===B.m)){a3=$.L()
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>h)A.f(A.z(b+A.i(h)+" decimal places",a3.k(0),a5))
a4=a2.a
a4=a3.B(0,new A.P(a4.a.S(0),a4.b))
a2=new A.q(a4,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((a4.b<=0?0:Math.max(a4.gv().b,0))>h)A.f(A.z(b+A.i(h)+" decimal places",a4.k(0),a5))}a3=a1.d
if(a3!=null)a3=(a3===B.n||a3===B.w)&&a1.Q==null
else a3=!0
if(a3){++a
a3=a2.b
a4=f.b
if(a3!==a4)A.f(A.a8(a4,a3))
a3=f.a.B(0,a2.a)
f=new A.q(a3,a4)
h=B.e.h(0,a4)
if(h==null)A.f(A.x(a4,a6,a7))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>h)A.f(A.z(a4+" allows "+A.i(h)+" decimal places",a3.k(0),a5))}else{a3=a2.b
a4=i.b
if(a3!==a4)A.f(A.a8(a4,a3))
a3=i.a.B(0,a2.a)
i=new A.q(a3,a4)
h=B.e.h(0,a4)
if(h==null)A.f(A.x(a4,a6,a7))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>h)A.f(A.z(a4+" allows "+A.i(h)+" decimal places",a3.k(0),a5))}}++d}g=n.e
a3=g.b
if(a3!==k)A.f(A.a8(k,a3))
g=g.a
g=l.a.B(0,new A.P(g.a.S(0),g.b))
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((g.b<=0?0:Math.max(g.gv().b,0))>h)A.f(A.z(b+A.i(h)+" decimal places",g.k(0),a5))
B.a.m(a8,new A.dN(q,n.a,j,c,new A.q(g,k),i,a,a0))}s=t.wg
r=A.w(s,t.S)
for(s=A.bE(a8,0,s),q=J.R(s.a),l=s.b,s=new A.as(q,l,A.o(s).i("as<1>"));s.n();){j=s.c
j=j>=0?new A.p(l+j,q.gt()):A.f(A.ai())
r.j(0,j.b,j.a)}B.a.D(a8,new A.zT(r))
return a8},
Nd(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=A.b([],t.M)
for(s=A.Ne(a0),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=!1
if(p.r===0)if(p.x===0){o=p.f
n=p.e
m=n.b
l=o.b
if(m!==l)A.f(A.a8(l,m))
n=n.a
n=o.a.B(0,new A.P(n.a.S(0),n.b))
k=B.e.h(0,l)
if(k==null)A.f(A.x(l,c,b))
if((n.b<=0?0:Math.max(n.gv().b,0))>k)A.f(A.z(l+" allows "+A.i(k)+" decimal places",n.k(0),d))
o=n.l(0,$.L())
o=o!==0}if(o){o=p.b
n=p.a
m=a0.gL().h(0,n)
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
if(f!==e)A.f(A.a8(e,f))
h=h.a
h=j.a.B(0,new A.P(h.a.S(0),h.b))
k=B.e.h(0,e)
if(k==null)A.f(A.x(e,c,b))
j=h.b
f=j<=0
if((f?0:Math.max(h.gv().b,0))>k)A.f(A.z(e+" allows "+A.i(k)+" decimal places",h.k(0),d))
h=h.a
j=new A.P(h.a?h.S(0):h,j)
k=B.e.h(0,e)
if(k==null)A.f(A.x(e,c,b))
if((f?0:Math.max(j.gv().b,0))>k)A.f(A.z(e+" allows "+A.i(k)+" decimal places",j.k(0),d))
a.push(new A.W("month-check:"+o,B.b8,o,"The transactions filed on "+n+" from "+m+" to "+l+" come to "+i+", but the statement moved "+g+" (off by "+new A.q(j,e).k(0)+"). A transaction is missing, extra or has the wrong amount."))}}return a},
dN:function dN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
zR:function zR(){},
zS:function zS(){},
zU:function zU(){},
zT:function zT(a){this.a=a},
MH(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6="currency",b7="is not a supported currency",b8=t.A,b9=A.b([],b8),c0=A.b([],b8)
for(s=c1.b3(),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
p=q.d
if(p==null&&q.e===B.m&&q.ay==null)B.a.m(b9,q)
if(p===B.a0){o=q.ch
o=o==null?null:B.b.am(o,"forbook:")
n=o===!0}else n=!1
if((p===B.n||n)&&q.e===B.k)B.a.m(c0,q)}B.a.D(b9,new A.yw())
s=A.a4(t.p_)
for(r=b9.length,m=0;m<b9.length;b9.length===r||(0,A.l)(b9),++m){l=b9[m]
s.m(0,new A.p(l.c,l.f.b))}k=A.w(t.ER,t.C)
for(r=c0.length,m=0;m<c0.length;c0.length===r||(0,A.l)(c0),++m){j=c0[m]
q=j.c
p=j.f.b
if(!s.u(0,new A.p(q,p)))continue
o=j.z
J.bV(k.aI(new A.bB(q,p,A.cQ(o==null?"":o)),new A.yx()),j)}for(r=new A.a1(k,k.r,k.e,k.$ti.i("a1<2>"));r.n();)J.mR(r.d,new A.yy())
i=new A.e7(c1.b.c,t.iB)
r=t.N
q=A.w(r,t.B)
for(p=c0.length,m=0;m<c0.length;c0.length===p||(0,A.l)(c0),++m){j=c0[m]
if(j.d===B.a0&&s.u(0,new A.p(j.c,j.f.b))){o=j.f.b
h=$.L()
g=B.e.h(0,o)
if(g==null)A.f(A.x(o,b6,b7))
if((h.b<=0?0:Math.max(h.gv().b,0))>g)A.f(A.z(o+" allows "+A.i(g)+" decimal places",h.k(0),null))
q.j(0,j.a,new A.q(h,o))}}if(q.a!==0)for(s=c1.b3(),p=J.R(s.a),s=new A.N(p,s.b,s.$ti.i("N<1>"));s.n();){o=p.gt()
f=o.ay
if(o.d===B.a_&&f!=null&&q.E(f)){h=q.h(0,f)
o=o.f
e=h.a
d=o.b
h=h.b
if(d!==h)A.f(A.a8(h,d))
o=e.B(0,o.a)
g=B.e.h(0,h)
if(g==null)A.f(A.x(h,b6,b7))
if((o.b<=0?0:Math.max(o.gv().b,0))>g)A.f(A.z(h+" allows "+A.i(g)+" decimal places",o.k(0),null))
q.j(0,f,new A.q(o,h))}}c=new A.yE(q,i)
s=t.S
b=A.w(r,s)
a=A.w(r,s)
a0=new A.yD(A.w(r,s))
a1=A.b([],t.sx)
a2=A.b([],t.M)
for(s=b9.length,r=t.fx,p=t.yL,o=p.i("h.E"),m=0;m<b9.length;b9.length===s||(0,A.l)(b9),++m){l=b9[m]
h=l.z
a3=A.cQ(h==null?"":h)
if(a3.length===0)continue
e=l.f
a4=e.gaT()
a5=new A.yC(a,a0,q,i,b)
a6=k.h(0,new A.bB(l.c,e.b,a3))
if(a6==null)a6=B.ab
d=J.an(a6)
a7=d.gq(a6)
for(a8=l.w,a9=0;a9<a7;){b0=B.d.ao(a9+a7,1)
if(d.h(a6,b0).w.a8(a8)>90)a9=b0+1
else a7=b0}b1=A.b([],b8)
b2=a9
for(;;){if(!(b2<d.gq(a6)&&d.h(a6,b2).w.a8(a8)>=0))break
b3=a5.$1(d.h(a6,b2))
if(typeof b3!=="number")return b3.ne()
if(b3>=a4)b1.push(d.h(a6,b2));++b2}B.a.D(b1,new A.yz())
if(b1.length>1){b4=A.B(new A.n(b1,r.a(new A.yA(a0,a4)),p),o)
b5=b4.length!==0?b4:b1}else b5=b1
d=b5.length
if(d===0)continue
if(d>1){d=l.a
b1=A.F(b5)
B.a.m(a2,new A.W("refund?:"+d,B.P,d,e.k(0)+" back from "+A.i(h)+" on "+a8.k(0)+" may refund the purchase of "+new A.ah(b5,b1.i("e(1)").a(new A.yB()),b1.i("ah<1,e>")).Z(0," or of ")+"."))
continue}j=B.a.gaQ(b5)
if(j.d===B.n)if(J.Y(a0.$1(j),a4))if(j.w.a8(a8)<=7){h=c.$1(j).a.l(0,$.L())
if(h===0)b.h(0,j.a)}h=j.a
e=b.h(0,h)
b.j(0,h,(e==null?0:e)+a4)
B.a.m(a1,new A.lk())}return new A.tP(a2)},
tO:function tO(){},
lk:function lk(){},
tP:function tP(a){this.b=a},
yw:function yw(){},
yx:function yx(){},
yy:function yy(){},
yE:function yE(a,b){this.a=a
this.b=b},
yD:function yD(a){this.a=a},
yC:function yC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yz:function yz(){},
yA:function yA(a,b){this.a=a
this.b=b},
yB:function yB(){},
MI(c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=c7.b3(),c6=A.B(c5,c5.$ti.i("h.E"))
B.a.D(c6,new A.yG())
s=A.w(t.bY,t.L)
for(r=0;r<c6.length;++r){c5=c6[r]
J.bV(s.aI(new A.bB(c5.c,c5.e,c5.f),new A.yH()),r)}q=A.b([],t.Dg)
for(c5=new A.a1(s,s.r,s.e,s.$ti.i("a1<2>"));c5.n();){p=c5.d
for(o=J.an(p),n=0;n<o.gq(p);n=m)for(m=n+1,l=m;l<o.gq(p);++l){k=o.h(p,n)
if(!(k>=0&&k<c6.length))return A.a(c6,k)
k=c6[k]
j=o.h(p,l)
if(!(j>=0&&j<c6.length))return A.a(c6,j)
i=A.Ll(c7,k,c6[j],B.eH)
if(i!=null)B.a.m(q,new A.bB(o.h(p,n),o.h(p,l),i))}}B.a.D(q,new A.yI())
c5=A.b([],t.hK)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.l)(q),++h){o=q[h]
r=o.a
g=o.b
k=c6.length
if(!(r>=0&&r<k))return A.a(c6,r)
j=c6[r]
if(!(g>=0&&g<k))return A.a(c6,g)
c5.push(new A.bB(j,c6[g],o.c))}p=t.N
f=A.w(p,p)
e=new A.yQ(f)
for(o=c5.length,h=0;k=c5.length,h<k;c5.length===o||(0,A.l)(c5),++h){k=c5[h]
if(k.c!==B.bb)continue
d=e.$1(k.a.a)
c=e.$1(k.b.a)
if(d!==c){k=d<c?-1:1
k=k<0?c:d
j=d<c?-1:1
f.j(0,k,j<0?d:c)}}b=A.w(p,t.C)
for(h=0;h<c5.length;c5.length===k||(0,A.l)(c5),++h){o=c5[h]
if(o.c!==B.bb)continue
for(o=[o.a,o.b],a=0;a<2;++a){a0=o[a]
a1=b.aI(e.$1(a0.a),new A.yJ())
j=J.an(a1)
if(!j.u(a1,a0))j.m(a1,a0)}}a2=A.b([],t.st)
a3=A.b([],t.M)
a4=A.a4(p)
for(o=new A.a1(b,b.r,b.e,b.$ti.i("a1<2>")),k=t.W,j=t.A;o.n();){a5=o.d
a6=A.a4(p)
for(a7=J.aZ(a5),a8=a7.gA(a5);a8.n();)a6.m(0,a8.gt().a)
a8=A.b([],j)
for(a9=a7.gA(a5);a9.n();){b0=a9.gt()
for(b1=a7.gA(a5),b2=b0.a,b3=b0.y,b4=b3.a,b3=b3.b;b1.n();){b5=b1.gt()
b6=b5.a
if(b2===b6)b6=0
else b6=b2<b6?-1:1
if(b6<0){b5=b5.y
b5=b4===b5.a&&b3!==b5.b}else b5=!1
if(b5)a8.push(b0)}}a8=a8.length
b7=B.a.M(c5,new A.yK(a6))
b8=a7.bN(a5,A.NF()).gq(0)
a9=a7.bN(a5,new A.yL(c7))
b9=A.B(a9,a9.$ti.i("h.E"))
c0=b9.length!==0&&a7.M(a5,new A.yM(b9))
c1=a7.M(a5,new A.yN(a5,c7))
if(a8!==0||b7||b8>1||b9.length>1||c0||c1){a4.a1(0,a6)
continue}if(b9.length!==0)c2=B.a.gaQ(b9)
else{a6=A.B(a5,k)
B.a.D(a6,A.NG())
c2=B.a.gY(a6)}for(a5=a7.gA(a5),a6=c2.a;a5.n();){a7=a5.gt().a
if(a7!==a6)B.a.m(a2,new A.dU(a6,a7))}}for(p=c5.length,h=0;h<c5.length;c5.length===p||(0,A.l)(c5),++h){o=c5[h]
c3=o.a
c4=o.b
if(o.c===B.cq||a4.u(0,c3.a)){o=c3.a
B.a.m(a3,new A.W("same-event?:"+o+":"+c4.a,B.v,o,c3.f.k(0)+" on "+c3.w.k(0)+" by "+c3.y.a+" and "+c4.y.a+" may be one payment."))}}B.a.D(a2,new A.yO())
B.a.D(a3,new A.yP())
return new A.u0(a3)},
Ll(a,b,c,d){var s,r,q,p,o,n=null
if(b.c!==c.c||b.e!==c.e||!b.f.J(0,c.f))return n
if(a.dZ.u(0,A.on(b.a,c.a)))return n
s=b.y
r=c.y
q=s.b===r.b
if(!q&&s.a===r.a)return n
if(q)return B.bb
p=b.r
o=c.r
if(p!=null&&o!=null&&Math.abs(B.d.C(p.dX(o).a,6e7))<=120)return B.bb
if(Math.abs(b.w.a8(c.w))<=1)return B.cq
return n},
L9(a){t.W.a(a)
return a.CW!=null||a.y.d},
Lo(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=b.CW!=null||b.y.d?1:0
s=q-(a.CW!=null||a.y.d?1:0)
if(s!==0)return s
r=a.y.c.l(0,b.y.c)
return r!==0?r:B.b.l(a.a,b.a)},
u_:function u_(){},
dU:function dU(a,b){this.a=a
this.b=b},
u0:function u0(a){this.b=a},
bS:function bS(a,b){this.a=a
this.b=b},
yG:function yG(){},
yH:function yH(){},
yI:function yI(){},
yQ:function yQ(a){this.a=a},
yJ:function yJ(){},
yK:function yK(a){this.a=a},
yL:function yL(a){this.a=a},
yM:function yM(a){this.a=a},
yN:function yN(a,b){this.a=a
this.b=b},
yF:function yF(a,b){this.a=a
this.b=b},
yO:function yO(){},
yP:function yP(){},
GA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.b([],t.g0)
for(s=a.gL().gT(),s=s.gA(s),r=a.fx,q=t.v,p=t.n;s.n();){o=s.gt()
n=o.ay
if(n==null||n.a!==B.an)continue
m=A.b([],p)
l=A.d1(r,!1,q)
l.$flags=3
k=l
j=k.length
i=o.a
o=o.w
h=0
for(;h<j;++h){g=k[h]
if(g.b===i&&g.d.l(0,o)>=0)m.push(g)}B.a.D(m,new A.Bg())
k=!0
if(m.length!==0){j=B.a.gY(m)
f=n.b
f.toString
if(j.c.a<=f){k=B.a.gY(m).c
k=o.a===k.a&&o.b===k.b&&o.c===k.c}}if(k)continue
k=n.b
k.toString
B.a.m(e,new A.dX(i,o,k,B.a.gY(m)))}B.a.D(e,new A.Bh())
return e},
NK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.b([],t.M)
for(s=A.GA(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.a
n=p.d
m=a.gL().h(0,o).b
l=p.b
k=l.k(0)
j=n.c
i=j.k(0)
h=n.d.k(0)
l=j.l(0,l)>0?" No statement covers the days before it.":""
g.push(new A.W("start-from:"+o+":"+n.a,B.c6,o,m+"'s history starts "+k+", from its Drive year folder "+p.c+", not from a statement. The first statement read covers "+i+" to "+h+"."+l))}return g},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bg:function Bg(){},
Bh:function Bh(){},
Nj(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="; pair it by hand.",a7=b1.$ti,a8=a7.i("n<h.E>"),a9=a8.i("n<h.E>"),b0=A.B(new A.n(new A.n(b1,a7.i("j(h.E)").a(new A.Aw(b4)),a8),a8.i("j(h.E)").a(new A.Ax()),a9),a9.i("h.E"))
B.a.D(b0,new A.Ay())
a7=A.F(b0)
a8=a7.i("j(1)")
a7=a7.i("n<1>")
a9=a7.i("h.E")
s=A.B(new A.n(b0,a8.a(new A.Az()),a7),a9)
r=A.B(new A.n(b0,a8.a(new A.AA()),a7),a9)
q=new A.AE()
p=new A.AC(b3,q)
o=new A.AD()
a7=t.N
a8=t.C
a9=A.w(a7,a8)
for(n=s.length,m=t.A,l=0;l<s.length;s.length===n||(0,A.l)(s),++l){k=s[l]
j=A.b([],m)
i=k.w
h=o.$2(r,i)
for(;;){g=r.length
if(h<g){if(!(h>=0))return A.a(r,h)
g=i.a8(r[h].w)<=5}else g=!1
if(!g)break
if(!(h>=0&&h<r.length))return A.a(r,h)
if(p.$2(k,r[h])){if(!(h<r.length))return A.a(r,h)
j.push(r[h])}++h}a9.j(0,k.a,j)}a8=A.w(a7,a8)
for(n=r.length,l=0;l<r.length;r.length===n||(0,A.l)(r),++l){f=r[l]
j=A.b([],m)
i=f.w
e=A.az(i.a,i.b,i.c).aw(-432e9)
h=o.$2(s,new A.A(A.b1(e),A.b5(e),A.av(e)))
for(;;){g=s.length
if(h<g){if(!(h>=0))return A.a(s,h)
g=s[h].w.l(0,i)<=0}else g=!1
if(!g)break
if(!(h>=0&&h<s.length))return A.a(s,h)
if(p.$2(s[h],f)){if(!(h<s.length))return A.a(s,h)
j.push(s[h])}++h}a8.j(0,f.a,j)}n=t.wF
d=A.b([],n)
c=A.b([],n)
b=A.a4(a7)
for(a7=s.length,l=0;l<s.length;s.length===a7||(0,A.l)(s),++l){k=s[l]
n=k.a
b1=a9.h(0,n)
if(b1.length!==1||a8.h(0,B.a.gaQ(b1).a).length!==1)continue
f=B.a.gaQ(b1)
b.m(0,n)
m=f.a
b.m(0,m)
if(k.f.b===f.f.b)j=q.$1(k)||q.$1(f)
else j=!1
j=j?d:c
B.a.m(j,new A.lH(n,m))}a=new A.Av(b2)
a0=A.b([],t.M)
for(a7=b0.length,l=0;l<b0.length;b0.length===a7||(0,A.l)(b0),++l){a1=b0[l]
n=a1.a
if(b.u(0,n)||!q.$1(a1))continue
a2=a1.e===B.k
if(a2){m=a9.h(0,n)
m.toString
b1=m}else{m=a8.h(0,n)
m.toString
b1=m}if(b1.length!==0){m=A.F(b1)
a3=new A.ah(b1,m.i("e(1)").a(new A.AB(a)),m.i("ah<1,e>")).Z(0," or ")
a4=b1.length===1?", which another transaction also fits":""
m=a1.f
j=a1.w
m=a2?m.k(0)+" left "+A.i(a.$1(a1))+" on "+j.k(0)+": it may have reached "+a3+a4+a6:m.k(0)+" reached "+A.i(a.$1(a1))+" on "+j.k(0)+": it may have come from "+a3+a4+a6
B.a.m(a0,new A.W("transfer?:"+n,B.P,n,m))
continue}m=a1.w
a5=m.a8(b5)
if(a5<=5)continue
j=""+a5
i=a1.f
m=a2?i.k(0)+" left "+A.i(a.$1(a1))+" on "+m.k(0)+"; the other side has not arrived after "+j+" days.":i.k(0)+" reached "+A.i(a.$1(a1))+" on "+m.k(0)+"; the side it came from has not arrived after "+j+" days."
B.a.m(a0,new A.W("in-transit:"+n,B.ca,n,m))}return new A.un(c,a0)},
MJ(a,b){var s=a.gL().gT(),r=A.o(s),q=r.i("j(h.E)").a(new A.yR()),p=a.b3(),o=p.$ti,n=o.i("j(h.E)").a(new A.yS()),m=t.N,l=A.a4(m)
for(s=s.gA(s),r=new A.N(s,q,r.i("N<h.E>"));r.n();)l.m(0,s.gt().a)
s=A.w(m,m)
for(r=a.gL().gT(),r=r.gA(r);r.n();){q=r.gt()
s.j(0,q.a,q.b)}return A.Nj(new A.n(p,n,o.i("n<h.E>")),s,B.eJ,l,b)},
um:function um(){},
lH:function lH(a,b){this.a=a
this.b=b},
un:function un(a,b){this.b=a
this.c=b},
Aw:function Aw(a){this.a=a},
Ax:function Ax(){},
Ay:function Ay(){},
Az:function Az(){},
AA:function AA(){},
AE:function AE(){},
AC:function AC(a,b){this.a=a
this.b=b},
AD:function AD(){},
Av:function Av(a){this.a=a},
AB:function AB(a){this.a=a},
yR:function yR(){},
yS:function yS(){},
Ng(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b==="personal"
if(f)s="personal"
else{r=a.a7.a6(B.aU,b)
s=r==null?null:A.m(r.c.h(0,"country"))}r=A.b([],t.I)
q=B.kL.h(0,s)
if(q!=null)B.a.a1(r,q)
q=a.aD.e
p=A.o(q).i("M<2>")
o=p.i("n<h.E>")
n=A.B(new A.n(new A.M(q,p),p.i("j(h.E)").a(new A.Ac(b)),o),o.i("h.E"))
B.a.D(n,new A.Ad())
m=f?"personal-tax:":"compliance:"
for(f=n.length,q=m.length,l=0;l<n.length;n.length===f||(0,A.l)(n),++l){k=n[l]
p=k.f
p.toString
if(!B.b.am(p,m))continue
j=B.b.ae(p,q)
if(!B.a.M(r,new A.Ae(j)))B.a.m(r,new A.p(j,k.c))}f=A.b([],t.cp)
for(q=r.length,p=A.F(n),o=p.i("j(1)"),p=p.i("n<1>"),i=t.w5,l=0;l<r.length;r.length===q||(0,A.l)(r),++l){h={}
g=r[l]
h.a=null
j=g.a
h.a=j
f.push(new A.l7(j,g.b,A.aO(new A.n(n,o.a(new A.Af(h,m,c)),p),i),A.C6(new A.n(n,o.a(new A.Ag(h,m,c)),p),i)))}return f},
Mj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.b([],t.M),f=a.gcE(),e=A.o(f).i("ac<1,2>"),d=e.i("c4<h.E,e>"),c=A.B(new A.c4(new A.n(new A.ac(f,e),e.i("j(h.E)").a(new A.y0()),e.i("n<h.E>")),e.i("e(h.E)").a(new A.y1()),d),d.i("h.E"))
B.a.bb(c)
for(f=c.length,e=a.aD.a,d=t.s,s=a.a7.a,r=0;r<c.length;c.length===f||(0,A.l)(c),++r){q=c[r]
p=s.h(0,B.aU)
o=p==null?null:p.h(0,q)
if(o==null)continue
p=A.b([],d)
n=o.c
if(A.ay(n.h(0,"incorporated"))==null)p.push("its incorporation date")
if(A.m(n.h(0,"last4"))==null)p.push("its registration number")
n=e.h(0,q)
if((n==null?null:n.c)==null)p.push("its financial year end")
if(p.length!==0){n=q.length
if(n===0)n=q
else{if(0>=n)return A.a(q,0)
n=q[0].toUpperCase()+B.b.ae(q,1)}B.a.m(g,new A.W("company-setup:"+q,B.ad,q,n+" still needs "+B.a.Z(p,", ")+". Nothing is reminded until it is entered."))}for(p=A.Ng(a,q,b),n=p.length,m=q.length,l=m===0,k="company-date:"+q+":",j=0;j<p.length;p.length===n||(0,A.l)(p),++j){i=p[j]
if(i.c==null&&i.d!=null){if(l)h=q
else{if(0>=m)return A.a(q,0)
h=q[0].toUpperCase()+B.b.ae(q,1)}B.a.m(g,new A.W(k+i.a,B.ad,q,h+"'s "+i.b+" date "+i.d.d.k(0)+" has passed and no new date is entered. Add the next one from the notice or the accountant."))}}}return g},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ac:function Ac(a){this.a=a},
Ad:function Ad(){},
Ae:function Ae(a){this.a=a},
Af:function Af(a,b,c){this.a=a
this.b=b
this.c=c},
Ag:function Ag(a,b,c){this.a=a
this.b=b
this.c=c},
y0:function y0(){},
y1:function y1(){},
C2(a){var s=a.h(0,"name")
s.toString
return new A.nE(A.c(s),A.m(a.h(0,"driveFileId")),A.m(a.h(0,"localId")))},
ay(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.HF().aj(a):m
if(l==null)return m
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.X(r,m,m)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.X(r,m,m)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.X(s,m,m)
n=A.az(q,p,o)
return A.b1(n)===q&&A.b5(n)===p&&A.av(n)===o?new A.A(q,p,o):m},
bO:function bO(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
bF:function bF(a,b,c){this.c=a
this.a=b
this.b=c},
d5:function d5(a,b,c){this.c=a
this.a=b
this.b=c},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
KL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=b.b.toLowerCase()
A:{q=b.c
if(B.j===q||B.a2===q){if(typeof c!="string"||B.b.I(c).length===0)return A.i(e)+" is words"
p=q===B.j?80:300
if(c.length>p||B.b.u(c,"\n"))return A.i(e)+" is one line of at most "+p+" characters"
if($.f0().aM(0,c).gq(0)>=9||A.zy(c)!==c)return A.i(e)+" looks like it holds a full number; only the last 4 characters are kept"
break A}if(B.r===q){if(A.ay(c)==null)return A.i(e)+" is written YYYY-MM-DD and is a real day"
break A}if(B.aM===q){if(typeof c=="string"){o=$.I1()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is written HH:MM"
break A}if(B.aq===q){if(typeof c=="string"){o=$.HP()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is written YYYY-MM"
break A}if(B.u===q){s=null
try{s=A.aP(t.f.a(c).G(0,t.N,t.X))}catch(n){o=A.i(e)
return o+" is an amount"}if(!B.e.E(s.b))return"currency "+s.b+" is not supported"
if(s.a.l(0,$.L())<=0)return A.i(e)+" is more than zero"
break A}if(B.ax===q){r=typeof c=="string"?A.dt(c):f
if(r==null||r.l(0,$.L())<=0)return A.i(e)+" is a number more than zero"
break A}if(B.J===q){o=!0
if(A.cu(c)){m=b.r
if(!(m!=null&&c<m)){o=b.w
o=o!=null&&c>o}}if(o){o=A.i(e)
m=b.r
m=m==null?"":", "+A.i(m)+" to "+A.i(b.w)
return o+" is a whole number"+m}break A}if(B.O===q){o=b.e
if(!B.a.u(o,c))return A.i(e)+" is one of "+B.a.Z(o,", ")
break A}if(B.ar===q){if(typeof c=="string")o=c!=="me"&&!A.a5(a.p3,t.N,t.o).E(c)
else o=!0
if(o)return"no member "+A.i(c)
break A}if(B.bt===q){if(t.j.b(c)){o=J.an(c)
o=o.ga5(c)||o.eb(c).a!==o.gq(c)}else o=!0
if(o)return A.i(e)+" names each person once"
for(o=J.R(c),m=a.p3,l=t.N,k=t.o;o.n();){j=o.gt()
if(typeof j=="string")i=j!=="me"&&!A.a5(m,l,k).E(j)
else i=!0
if(i)return"no member "+A.i(j)}break A}if(B.a3===q){if(typeof c!="string"||!a.gL().E(c))return"no account "+A.i(c)
break A}if(B.af===q){h=typeof c=="string"?a.aG(c):f
if(h==null)return"no book "+A.i(c)
o=b.x
if(o.length!==0&&!B.a.u(o,h)){m=A.F(o)
return A.i(e)+" is a "+new A.ah(o,m.i("e(1)").a(new A.vB()),m.i("ah<1,e>")).Z(0," or ")+" book"}break A}if(B.C===q){if(typeof c=="string"){o=b.f
o.toString
o=a.a7.a6(A.ag(B.ac,o,t.P),c)==null}else o=!0
if(o)return"no "+A.i(b.f)+" "+A.i(c)
break A}if(B.aJ===q){if(typeof c!="string"||!A.a5(a.c_.d,t.N,t.ud).E(c))return"no policy "+A.i(c)
break A}if(B.bu===q){if(typeof c!="string"||a.c_.gbE().h(0,c)==null)return"no document "+A.i(c)
break A}if(B.ao===q){if(typeof c!="string"||a.b.a.h(0,c)==null)return"no transaction "+A.i(c)
break A}if(B.bv===q){if(typeof c!="string"||!a.aD.c.E(c))return"no invoice "+A.i(c)
break A}if(B.aK===q){r=null
try{r=A.C2(t.f.a(c).G(0,t.N,t.X))}catch(n){o=A.i(e)
return o+" is a file"}o=r.a
if($.f0().aM(0,o).gq(0)>=9||A.zy(o)!==o)return"the file name looks like it holds a full number"
break A}if(B.a8===q){if(typeof c=="string"){o=$.HJ()
o=!o.b.test(c)}else o=!0
if(o)return u.M
break A}if(B.Z===q){if(!A.ef(c))return A.i(e)+" is yes or no"
break A}if(B.ap===q){if(typeof c!="string"||B.b.I(c).length===0)return A.i(e)+" is words"
g=A.b(c.split("\n"),t.s)
if(g.length>4||B.a.M(g,new A.vC()))return A.i(e)+" is at most 4 lines of 80 characters"
if(A.LF(c))return A.i(e)+" looks like it holds an account, PAN or GSTIN; those are kept apart"
break A}if(B.aL===q){r=typeof c=="string"?A.dt(c):f
if(r==null||r.l(0,$.L())<0||r.l(0,new A.P(A.aC(100),0))>0||r.gef()>2)return A.i(e)+" is a percentage from 0 to 100, at most 2 decimals"
break A}if(B.bw===q){if(typeof c=="string"){o=$.I8()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is 11 characters like ABCD0123456"}}return f},
D_(a,b){var s,r,q,p,o,n,m,l=b.b
if(B.b.I(l).length===0||l.length>120)return"a record needs an id"
for(l=b.c,s=l.gah(),s=s.gA(s),r=b.a;s.n();){q=s.gt()
if(r.m2(q)==null)return r.c.toLowerCase()+" has no field "+q}for(s=r.d,q=s.length,p=0;p<q;++p){o=s[p]
n=l.h(0,o.a)
if(n==null){if(o.d)return r.c.toLowerCase()+" needs "+o.b.toLowerCase()
continue}m=A.KL(a,o,n)
if(m!=null)return m}return A.Lc(a,b)},
mz(a){var s,r,q,p,o=A.a4(t.N)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r){q=a[r]
p=q==null?null:q.b
if(p!=null)o.m(0,p)}return o.a>1?"the amounts are in one currency":null},
Lc(d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2="invoiceId",c3="medisave",c4="currency",c5="is not a supported currency",c6="bookId",c7="amount",c8="accountId",c9="propertyId",d0="the year of the next number is written like 26/27",d1="tenancyId",d2="unitPrice",d3="a mark is named by what it marks"
A:{s=d5.a
if(B.aA===s){r=A.m(d5.c.h(0,"loanAccountId"))
if(r!=null){q=d4.gL().h(0,r)
q=(q==null?c1:q.d)!==B.o}else q=!1
if(q)return"the loan is one of your loans"
break A}if(B.at===s){q=d5.c
p=A.ay(q.h(0,"starts"))
q=A.ay(q.h(0,"ends"))
if(p!=null&&q!=null&&q.l(0,p)<0)return"a lease ends after it starts"
o=A.mz(A.b([d5.av("rent"),d5.av("deposit")],t.dr))
if(o!=null)return o
break A}if(B.dj===s){if(d5.b!==A.m(d5.c.h(0,c2)))return"an invoice has one document record, named by the invoice"
break A}if(B.dg===s){q=d5.c
p=A.ay(q.h(0,"departs"))
q=A.ay(q.h(0,"returns"))
if(p!=null&&q!=null&&q.l(0,p)<0)return"a trip comes back after it leaves"
break A}if(B.dp===s){q=d5.c
if(d5.b!==A.i(A.m(q.h(0,"tripId")))+":"+A.i(A.m(q.h(0,"movementId"))))return"a trip line is named by its trip and line"
n=d5.av("sgd")
q=n==null
if(!q&&n.b!=="SGD")return"the SGD amount is in SGD"
if(q!==(d5.dc("rate")==null))return"an SGD amount comes with its rate (LED-09)"
break A}if(B.dl===s){q=d5.av("total")
q.toString
m=d5.av(c3)
l=d5.av("insurance")
k=A.mz(A.b([q,m,l],t.dr))
if(k!=null)return k
j=A.a3($.L(),q.b)
for(p=[m,l],i=0;i<2;++i){h=p[i]
if(h!=null){g=h.b
f=j.b
if(g!==f)A.f(A.a8(f,g))
g=j.a.B(0,h.a)
j=new A.q(g,f)
e=B.e.h(0,f)
if(e==null)A.f(A.x(f,c4,c5))
if((g.b<=0?0:Math.max(g.gv().b,0))>e)A.f(A.z(f+" allows "+A.i(e)+" decimal places",g.k(0),c1))}}if(j.a.l(0,q.a)>0)return"MediSave and insurance are not more than the bill"
break A}if(B.bJ===s){d=A.mz(A.b([d5.av("claimed"),d5.av("paid")],t.dr))
if(d!=null)return d
q=d5.c
if(A.m(q.h(0,"status"))==="paid"&&d5.av("paid")==null)return"a paid claim says what was paid"
c=A.m(q.h(0,"creditMovementId"))
if(c!=null){q=d4.b.a
if(q.h(0,c).e!==B.m)return"a claim credit is money coming in"
if(q.h(0,c).d===B.w)return"a claim payout is a claim credit, never income"
q=d4.a7.aZ(B.bJ)
p=A.F(q)
if(!new A.n(q,p.i("j(1)").a(new A.vF(d5,c)),p.i("n<1>")).ga5(0))return"that transaction is the payout of another claim"}break A}if(B.dk===s){q=d5.c
p=A.m(q.h(0,"personId"))
p.toString
if(p==="me")return"the helper is a household member"
b=A.m(q.h(0,"permitId"))
if(b!=null){a=d4.c_.gbE().h(0,b)
if(a.b!==B.cJ||a.c!==p)return"the permit is her work permit"}if(B.a.M(A.b(["renewalDate","medicalDue","contractEnds"],t.s),new A.vG(d5))&&A.m(q.h(0,"source"))==null)return"each date comes from the permit, policy or MOM notice: say which"
break A}if(B.aU===s){if(d5.b!==A.m(d5.c.h(0,c6)))return"a company has one record, named by its book"
break A}if(B.bM===s){q=A.b([],t.dr)
for(p=d5.c,g=t.f,f=t.N,a0=t.X,i=0;i<7;++i){a1=B.ji[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).G(0,f,a0)
a3=a2.h(0,c7)
a3.toString
a3=A.ad(A.c(a3))
a2=a2.h(0,c4)
a2.toString
A.c(a2)
a4=new A.q(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.f(A.x(a2,c4,c5))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>e)A.f(A.z(a2+" allows "+A.i(e)+" decimal places",a3.k(0),c1))
a2=a4}else a2=c1
q.push(a2)}a5=A.mz(q)
if(a5!=null)return a5
a6=A.m(p.h(0,c8))
if(a6!=null&&!d4.gL().h(0,a6).gaS())return"the pay goes into a savings or current account"
break A}if(B.dh===s||B.dm===s){for(q=["employee","employer","amount"],p=d5.c,g=t.f,f=t.N,a0=t.X,i=0;i<3;++i){a1=q[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).G(0,f,a0)
a3=a2.h(0,c7)
a3.toString
a3=A.ad(A.c(a3))
a2=a2.h(0,c4)
a2.toString
A.c(a2)
a7=new A.q(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.f(A.x(a2,c4,c5))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>e)A.f(A.z(a2+" allows "+A.i(e)+" decimal places",a3.k(0),c1))}else a7=c1
if(a7!=null)a2=a7.b!=="SGD"
else a2=!1
if(a2)return"CPF is in SGD"}break A}if(B.aV===s){q=d5.c
if(d5.b!==A.i(A.m(q.h(0,"policyId")))+":"+A.i(A.m(q.h(0,"dueOn"))))return"a premium is named by its policy and due date"
if(d5.av("cash")==null&&d5.av(c3)==null)return"say what was paid"
a8=A.mz(A.b([d5.av("cash"),d5.av(c3)],t.dr))
if(a8!=null)return a8
break A}if(B.dr===s){q=d5.c
p=A.ay(q.h(0,"anchor"))
p.toString
g=A.m(q.h(0,"offset"))
g.toString
a9=A.Nz(p,g)
if(a9==null)return'the offset is like "1 month before", "2 weeks after" or "on the day"'
if(!a9.J(0,A.ay(q.h(0,"date"))))return"the date is worked out from the anchor and the offset"
b0=A.m(q.h(0,"repeat"))
b1=A.aH(q.h(0,"every"))
b2=A.ay(q.h(0,"until"))
if(b0==null)p=b1!=null||b2!=null||A.aH(q.h(0,"times"))!=null
else p=!1
if(p)return"say how it repeats before when it ends"
p=b0==="every-n-months"||b0==="every-n-weeks"
if(p!==(b1!=null))return"every how many is said only for every N months or weeks"
p=b2!=null
if(p&&A.aH(q.h(0,"times"))!=null)return"it ends on one of a date or a number of times"
if(p&&b2.l(0,a9)<0)return"until is on or after the first date"
break A}if(B.bL===s||B.dq===s||B.dn===s||B.di===s)break A
if(B.aT===s){if(d5.b!==A.m(d5.c.h(0,c9)))return"a property has one issuer record, named by the property"
break A}if(B.a9===s){q=d5.c
b3=A.m(q.h(0,"startYear"))
p=b3!=null
if(p){g=$.HA()
g=!g.b.test(b3)}else g=!1
if(g)return d0
if(p&&B.d.R(A.X(B.b.X(b3,0,2),c1,c1)+1,100)!==A.X(B.b.ae(b3,3),c1,c1))return d0
q=A.m(q.h(0,"pattern"))
q.toString
return A.NI(q)}if(B.aR===s){q=d5.c
if(d5.b!==A.m(q.h(0,d1)))return"a tenancy has one invoicing record, named by the tenancy"
p=A.m(q.h(0,d1))
p.toString
p=d4.a7.a6(B.at,p)
if((p==null?c1:A.m(p.c.h(0,"role")))!=="landlord")return"invoices are made for a tenancy where you are the landlord"
a6=d4.gL().h(0,A.m(q.h(0,c8)))
if(!a6.gaS()||a6.e!=="INR")return"rent is paid into a rupee savings or current account"
break A}if(B.bK===s){if(d5.av(c7).b!=="INR")return"an invoice line is in rupees"
break A}if(B.ai===s||B.ak===s||B.a6===s||B.aj===s)break A
if(B.ah===s){q=d5.b
p=d5.c
if(q!==A.m(p.h(0,c6)))return"a company has one issuer record, named by its book"
if(d4.aG(q)!=="company")return"invoices are issued by a company book"
a6=d4.gL().h(0,A.m(p.h(0,c8)))
if(a6==null||!a6.gaS()||a6.e!=="SGD"||a6.r!==q)return"the company's invoices are paid into one of its Singapore dollar bank accounts"
if(J.Y(p.h(0,"gstRegistered"),!0)!==(A.m(p.h(0,"gstRegLast4"))!=null))return"a GST registered company gives the last 4 of its GST registration number, and only then"
break A}if(B.a4===s){q=A.m(d5.c.h(0,c6))
q.toString
if(d4.aG(q)!=="company")return"a customer belongs to a company book"
break A}if(B.a5===s){q=d5.c
p=A.m(q.h(0,"customerId"))
p.toString
p=d4.a7.a6(B.a4,p)
p=p==null?c1:A.m(p.c.h(0,c6))
if(p!=A.m(q.h(0,c6)))return"the customer is one of the company's own"
b4=A.m(q.h(0,c4))
if(b4!=null){q=A.D("^[A-Z]{3}$",!0,!1)
q=!q.b.test(b4)||!B.e.E(b4)}else q=!1
if(q)return"the currency is a code like USD"
break A}if(B.as===s){q=A.m(d5.c.h(0,"draftId"))
q.toString
q=d4.a7.a6(B.a5,q)
b5=q==null?c1:A.m(q.c.h(0,c4))
if(b5==null)b5="SGD"
if(d5.av(d2).b!==b5)return"an invoice line is in its draft's currency, "+b5
if(d5.av(d2).a.a.ga9(0)<0)return"a unit price is not below zero"
if(d5.dc("quantity").gef()>4)return"a quantity has at most 4 decimals"
break A}if(B.bI===s){q=d5.c
r=d4.gL().h(0,A.m(q.h(0,"loanId")))
if(r==null||r.d!==B.o)return"an instalment is confirmed on a loan"
if(d5.b!=="loan:"+r.a+":"+A.i(A.m(q.h(0,"due"))))return"a confirmation is named by its loan and due date"
break A}b6=B.aS===s
if(b6&&A.m(d5.c.h(0,"what"))==="tds-certificate"){q=d5.c
b7=A.m(q.h(0,d1))
b8=A.m(q.h(0,"quarter"))
q=!0
if(b7!=null)if(b8!=null){q=A.D("^\\d{4}-Q[1-4]$",!0,!1)
q=!q.b.test(b8)}if(q)return"a TDS certificate names its tenancy and quarter"
if(d5.b!=="tds-certificate:"+b7+":"+b8)return d3
break A}if(b6){q=d5.c
p=A.m(q.h(0,"what"))
p.toString
b9=A.m(q.h(0,c2))
c0=A.m(q.h(0,c9))!=null&&A.m(q.h(0,"month"))!=null
g=p==="sent"
if(g)f=b9==null||c0
else f=b9!=null||!c0
if(f)return g?"a sent mark names its invoice":"a GST mark names the property and the month"
q=g?"sent:"+A.i(b9):p+":"+A.i(A.m(q.h(0,c9)))+":"+A.i(A.m(q.h(0,"month")))
if(d5.b!==q)return d3
if(p==="gst-itc"){q=d5.av(c7)
q=(q==null?c1:q.b)!=="INR"}else q=!1
if(q)return"an input tax credit is in rupees"}}return c1},
LF(a){var s=a.toUpperCase(),r=A.D("[A-Z]{5}\\d{4}[A-Z]",!0,!1)
if(r.b.test(s))return!0
r=A.D("\\d(?:[\\s.\\-]*\\d){10,}",!0,!1)
return r.b.test(s)},
NI(a){var s,r,q,p,o=A.D("\\{(n+)\\}",!0,!1).aM(0,a),n=A.B(o,A.o(o).i("h.E"))
if(n.length!==1)return"the pattern holds the number once, as {nnn}"
o=$.Dr()
s=A.B(o.aM(0,a),t.lQ)
B.a.a1(s,B.b.aM("{yyyy}",a))
if(s.length>1)return"the pattern holds the year at most once"
r=A.D("\\{n+\\}",!0,!1)
r=A.ao(a,r,"")
o=A.ao(r,o,"")
q=A.ao(o,"{yyyy}","")
o=A.D("^[A-Za-z0-9/._-]*$",!0,!1)
if(!o.b.test(q))return"the pattern holds letters, digits and - / . _ only"
o=B.a.gaQ(n).b
if(1>=o.length)return A.a(o,1)
p=o[1].length
o=p<4?4:p
if(s.length===0)s=0
else{s=B.a.gaQ(s).h(0,0)
s.toString
s=A.fJ(2026,s).length}if(q.length+o+s>16)return"an invoice number is at most 16 characters"
return null},
Nk(a){var s,r,q,p,o=B.b.I(a).toLowerCase()
if(o==="on the day"||o==="on the date")return new A.ec(0,0)
s=A.D("^(a|an|one|two|three|four|six|\\d{1,3}) (day|week|month|year)s? (before|after)$",!0,!1).aj(o)
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
break A}q=A.X(q,null,null)
break A}if(3>=r.length)return A.a(r,3)
p=r[3]==="before"?-1:1
r=r[2]
r.toString
B:{if("day"===r){r=new A.ec(p*q,0)
break B}if("week"===r){r=new A.ec(p*7*q,0)
break B}if("month"===r){r=new A.ec(0,p*q)
break B}r=new A.ec(0,p*12*q)
break B}return r},
Nz(a,b){var s=A.Nk(b)
if(s==null)return null
return A.Gm(a,s.b).aC(s.a)},
Gm(a,b){var s=a.a*12+(a.b-1)+b,r=B.d.C(s,12),q=B.d.R(s,12)+1,p=A.av(A.az(r,q+1,0)),o=a.c
return new A.A(r,q,o>p?p:o)},
LK(a,b,c){var s,r,q,p,o,n,m,l,k="a credit note is made once by Issue credit note and never changed",j=c.e,i=t.P,h=A.aO(new A.n(B.ac,t.Ab.a(new A.w4(j)),t.rx),i)
if(h==null)return"no record kind "+A.i(J.at(j,"kind"))
r=J.at(j,"id")
if(typeof r!="string")return"a record needs an id"
if(h===B.ai)return"a rent invoice is made once by Make invoice and never changed"
if(h===B.ak)return k
if(h===B.a6)return"a company invoice is made once by Issue invoice and never changed"
if(h===B.aj)return k
if(c.d==="life.remove"){if(b.a6(h,r)==null)return"no "+h.c.toLowerCase()+" "+r
if(b.n5(h,r).length!==0)return"another record uses it; remove that first"
b.a.h(0,h).a_(0,r)
return null}s=null
try{q=j
p=q.h(0,"kind")
p.toString
i=A.ag(B.ac,A.c(p),i)
p=q.h(0,"id")
p.toString
A.c(p)
q=q.h(0,"fields")
q.toString
o=t.N
n=t.X
s=new A.b3(i,p,A.a5(t.f.a(q).G(0,o,n),o,n))}catch(m){return"a record is its kind, id and fields"}l=A.D_(a,s)
if(l!=null)return l
i=b.a
q=i.h(0,h)
if(q==null){q=A.w(t.N,t.u)
i.j(0,h,q)
i=q}else i=q
i.j(0,r,s)
return null},
aL:function aL(a,b){this.a=a
this.b=b},
t:function t(a,b,c,d,e,f,g,h,i,j){var _=this
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
ab:function ab(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
p4:function p4(a){this.a=a},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a){this.a=a},
p3:function p3(){},
vB:function vB(){},
vC:function vC(){},
vF:function vF(a,b){this.a=a
this.b=b},
vG:function vG(a){this.a=a},
w4:function w4(a){this.a=a},
Nl(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="currency",a0="is not a supported currency",a1=t.N,a2=A.a4(a1),a3=A.b([],t.uE),a4=a5.a7.aZ(B.bM)
B.a.D(a4,new A.AH())
for(s=a4.length,r=t.W,q=t.f,p=t.X,o=0;o<a4.length;a4.length===s||(0,A.l)(a4),++o){n=a4[o]
m=n.c
l=A.m(m.h(0,"accountId"))
if(q.b(m.h(0,"net"))){k=m.h(0,"net")
k.toString
k=q.a(k).G(0,a1,p)
j=k.h(0,"amount")
j.toString
j=A.ad(A.c(j))
k=k.h(0,a)
k.toString
A.c(k)
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a,a0))
if((j.b<=0?0:Math.max(j.gv().b,0))>h)A.f(A.z(k+" allows "+A.i(h)+" decimal places",j.k(0),b))
k=i}else k=b
k.toString
j=A.ay(m.h(0,"payDate"))
j.toString
if(l==null){B.a.m(a3,new A.fp(n,B.li,b))
continue}i=a5.bs()
g=i.$ti
f=g.i("n<h.E>")
e=A.B(new A.n(i,g.i("j(h.E)").a(new A.AN(l,a2,j)),f),f.i("h.E"))
B.a.D(e,new A.AI(j))
i=A.F(e)
g=i.i("j(1)")
i=i.i("n<1>")
d=A.aO(new A.n(e,g.a(new A.AJ(k)),i),r)
if(d!=null){a2.m(0,d.a)
B.a.m(a3,new A.fp(n,B.lg,b))
continue}c=A.aO(new A.n(e,g.a(new A.AK(k,B.a.ma(B.b.bR(A.m(m.h(0,"employer")).toUpperCase(),A.D("[^A-Z0-9]+",!0,!1)),new A.AL(),new A.AM()))),i),r)
if(c!=null){a2.m(0,c.a)
m=c.f
j=k.b
i=m.b
if(j!==i)A.f(A.a8(i,j))
k=k.a
k=m.a.B(0,new A.P(k.a.S(0),k.b))
h=B.e.h(0,i)
if(h==null)A.f(A.x(i,a,a0))
if((k.b<=0?0:Math.max(k.gv().b,0))>h)A.f(A.z(i+" allows "+A.i(h)+" decimal places",k.k(0),b))
B.a.m(a3,new A.fp(n,B.dY,new A.q(k,i)))}else B.a.m(a3,new A.fp(n,a6.a8(j)<-5?B.dZ:B.lh,b))}return a3},
Nm(a,b){var s,r,q,p,o,n,m,l=A.b([],t.M)
for(s=A.Nl(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.b
n=o===B.dY
if(n||o===B.dZ){o=p.a
m=o.b
o=o.c
o=n?"The "+A.i(A.m(o.h(0,"period")))+" salary credit differs from the payslip's net pay by "+A.i(p.d)+".":"No salary credit for the "+A.i(A.m(o.h(0,"period")))+" payslip was seen by 5 days after its pay date."
l.push(new A.W("payslip:"+m,B.ad,m,o))}}return l},
eB:function eB(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c){this.a=a
this.b=b
this.d=c},
AH:function AH(){},
AN:function AN(a,b,c){this.a=a
this.b=b
this.c=c},
AI:function AI(a){this.a=a},
AJ:function AJ(a){this.a=a},
AL:function AL(){},
AM:function AM(){},
AK:function AK(a,b){this.a=a
this.b=b},
Nq(a,b){var s,r,q,p,o,n,m,l,k=a.ax,j=a.as
if(k==null||j==null||a.Q==null)return B.dF
switch(j.a){case 0:s=1
break
case 1:s=3
break
case 2:s=6
break
case 3:s=12
break
case 4:s=0
break
default:s=null}r=A.b([],t.F)
for(q=s===0,p=a.z,o=p!=null,n=0;n<400;++n){m=A.Gm(k,s*n)
if(m.l(0,b)<=0)l=o&&m.l(0,p)>0
else l=!0
if(l)break
B.a.m(r,m)
if(q)break}return r},
Lk(a,b,c,d){var s,r,q,p,o,n,m,l,k=b.ghd(),j=b.ch
if(k==null||j==null)return null
for(s=a.bs(),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=k.b,p=k.a,o=b.b;s.n();){n=r.gt()
m=!0
if(n.c===j)if(n.e===B.k){m=n.f
l=!1
if(q===m.b)m=p.l(0,m.a)===0
else m=l
m=!m||d.u(0,n.a)}if(m)continue
if(Math.abs(c.a8(n.x))>7||!A.O5(o,n.z))continue
return n}return null},
Nr(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.b([],t.tJ),a=t.N,a0=A.a4(a)
for(s=a1.a7,r=s.aZ(B.aV),q=r.length,p=0;p<r.length;r.length===q||(0,A.l)(r),++p){o=A.m(r[p].c.h(0,"movementId"))
if(o!=null)a0.m(0,o)}r=a1.c_.d
q=t.ud
o=A.a5(r,a,q).gah()
n=A.B(o,A.o(o).i("h.E"))
B.a.bb(n)
for(o=n.length,s=s.a,p=0;p<n.length;n.length===o||(0,A.l)(n),++p){m=n[p]
l=A.a5(r,a,q).h(0,m)
l.toString
for(k=A.Nq(l,a3),j=k.length,i=l.a+":",h=0;h<k.length;k.length===j||(0,A.l)(k),++h){g=k[h]
if(g.l(0,a2)<0)continue
f=g.k(0)
e=s.h(0,B.aV)
d=e==null?null:e.h(0,i+f)
c=d==null?A.Lk(a1,l,g,a0):null
if(c!=null)a0.m(0,c.a)
B.a.m(b,new A.dO(l,g,d,c))}}B.a.D(b,new A.AV())
return b},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AV:function AV(){},
KS(a){var s
A.m(a)
if(a!=null)s=$.f0().aM(0,a).gq(0)>=9||A.zy(a)!==a
else s=!1
return s},
Fc(a,b,c,d,e){var s,r,q,p
if(b!=="me"&&!A.a5(a.p3,t.N,t.o).E(b))return"no member "+b
if(c!=null){s=$.HK()
s=!s.b.test(c)}else s=!1
if(s)return u.M
s=A.B(d,t.T)
s.push(e==null?null:e.a)
if(B.a.M(s,A.Nx()))return"an entry looks like it holds a full number; only the last 4 characters are kept"
for(s=d.length,r=0;r<s;++r){q=d[r]
if(q!=null)p=q.length>80||B.b.u(q,"\n")
else p=!1
if(p)return"an entry is one line of at most 80 characters"}return null},
LL(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="id",b5="personId",b6="file",b7="a date is written YYYY-MM-DD and is a real day",b8="sumAssured",b9="frequency",c0="medisave",c1=c4.e
switch(c4.d){case"document.set":r={}
r.a=null
try{q=c1
p=q.h(0,b4)
p.toString
A.c(p)
o=q.h(0,"kind")
o.toString
o=A.ag(B.km,A.c(o),t.il)
n=q.h(0,b5)
n.toString
A.c(n)
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
g=A.C2(t.f.a(g).G(0,t.N,t.X))}r.a=new A.cW(p,o,n,m,l,k,j,i,h,g,A.m(q.h(0,"replaces")),A.m(q.h(0,"fromProposal")))}catch(f){return"a document needs its kind, person and dates written YYYY-MM-DD"}for(q=["issued","expires"],e=0;e<2;++e){d=q[e]
if(J.at(c1,d)!=null&&A.ay(J.at(c1,d))==null)return b7}q=r.a
c=A.Fc(c2,q.c,q.r,A.b([q.e,q.f],t.q),r.a.y)
if(c!=null)return c
q=r.a
if(q.b===B.bs){p=q.e
p=p==null||B.b.I(p).length===0}else p=!1
if(p)return"a document of another kind needs a name"
p=q.w
if(p!=null){q=q.x
q=q!=null&&q.l(0,p)<0}else q=!1
if(q)return"a document expires after it is issued"
q=r.a
p=q.b
if(p.d===!1&&q.x!=null)return p.c+" has no expiry date"
b=q.z
if(b!=null){a=c3.gbE().h(0,b)
if(a==null||b===r.a.a)return"no document "+b+" to renew"
q=a.b
p=r.a
if(q!==p.b||a.c!==p.c)return"a renewal is the same kind for the same person"
q=c3.gbE()
p=A.o(q).i("M<2>")
if(!new A.n(new A.M(q,p),p.i("j(h.E)").a(new A.w5(r,b)),p.i("n<h.E>")).ga5(0))return"that document was renewed already"}q=r.a
c3.a.j(0,q.a,q)
c3.b.a_(0,r.a.a)
break
case"document.remove":a0=J.at(c1,b4)
if(typeof a0!="string"||!c3.gbE().E(a0))return"no document "+A.i(a0)
c3.b.m(0,a0)
break
case"document.retrieve":a0=J.at(c1,"recordId")
a1=A.aO(new A.n(B.ke,t.rt.a(new A.w6(c1)),t.vL),t.hn)
if(typeof J.at(c1,"atUtc")=="string"){q=J.at(c1,"atUtc")
q.toString
a2=A.DS(A.c(q))}else a2=b3
if(typeof a0!="string"||a1==null||a2==null||c1.gah().M(0,new A.w7()))return"a retrieval holds only which record, what and when"
if(!c3.a.E(a0)&&!c3.d.E(a0)&&c2.a7.lf(a0)==null)return"no record "+a0
a2.F()
B.a.m(c3.e,new A.lp())
break
case"document.source":a0=J.at(c1,b4)
a3=J.at(c1,"gone")
if(typeof a0!="string"||!A.ef(a3)||!c3.a.E(a0))return"a source mark is a record and yes or no"
q=c3.c
if(a3)q.m(0,a0)
else q.a_(0,a0)
break
case"policy.set":s=null
try{q=c1
p=q.h(0,b4)
p.toString
A.c(p)
o=q.h(0,"insurer")
o.toString
A.c(o)
n=q.h(0,"type")
n.toString
n=A.ag(B.kD,A.c(n),t.gv)
m=q.h(0,b5)
m.toString
A.c(m)
l=A.m(q.h(0,"plan"))
k=A.m(q.h(0,"ownerId"))
j=A.m(q.h(0,"last4"))
if(q.h(0,b8)==null)i=b3
else{i=q.h(0,b8)
i.toString
i=A.aP(t.f.a(i).G(0,t.N,t.X))}h=A.m(q.h(0,"riders"))
g=A.ay(q.h(0,"starts"))
a4=A.ay(q.h(0,"ends"))
if(q.h(0,"premium")==null)a5=b3
else{a5=q.h(0,"premium")
a5.toString
a5=A.aP(t.f.a(a5).G(0,t.N,t.X))}if(q.h(0,b9)==null)a6=b3
else{a6=q.h(0,b9)
a6.toString
a6=A.ag(B.jh,A.c(a6),t.C5)}a7=A.m(q.h(0,"paymentMethod"))
a8=A.ay(q.h(0,"nextDue"))
if(q.h(0,b6)==null)a9=b3
else{a9=q.h(0,b6)
a9.toString
a9=A.C2(t.f.a(a9).G(0,t.N,t.X))}b0=A.m(q.h(0,"accountId"))
if(q.h(0,c0)==null)q=b3
else{q=q.h(0,c0)
q.toString
q=A.aP(t.f.a(q).G(0,t.N,t.X))}s=new A.er(p,o,n,m,l,k,j,i,h,g,a4,a5,a6,a7,a8,a9,b0,q)}catch(f){return"a policy needs its insurer, type, person and dates written YYYY-MM-DD"}for(q=["starts","ends","nextDue"],e=0;e<3;++e){d=q[e]
if(J.at(c1,d)!=null&&A.ay(J.at(c1,d))==null)return b7}if(B.b.I(s.b).length===0)return"a policy needs its insurer"
c=A.Fc(c2,s.d,s.r,A.b([s.b,s.e,s.x,s.at],t.q),s.ay)
if(c!=null)return c
if(s.f!=null&&s.f!=="me"&&!A.a5(c2.p3,t.N,t.o).E(s.f))return"no member "+A.i(s.f)
for(q=[s.w,s.Q],e=0;e<2;++e){b1=q[e]
if(b1!=null&&b1.a.l(0,$.L())<=0)return"an amount is more than zero"}q=!1
if(s.y!=null)if(s.z!=null){q=s.z
q.toString
p=s.y
p.toString
p=q.l(0,p)<0
q=p}if(q)return"a policy ends after it starts"
if(s.ch!=null&&!c2.gL().E(s.ch))return"no account "+A.i(s.ch)
b2=s.CW
if(b2!=null){if(s.Q==null||b2.b!==s.Q.b)return"the MediSave part is part of the premium"
q=b2.a
if(q.l(0,$.L())<=0||q.l(0,s.Q.a)>0)return"the MediSave part is more than zero and not more than the premium"}c3.d.j(0,s.a,s)
break
case"policy.remove":if(c3.d.a_(0,J.at(c1,b4))==null)return"no policy "+A.i(J.at(c1,b4))
break
default:return"not a record operation"}return b3},
AO(a,b){var s
if(b==="me")s="Me"
else{s=A.a5(a.p3,t.N,t.o).h(0,b)
s=s==null?null:s.b
if(s==null)s="someone removed"}return s},
cp:function cp(a,b){this.a=a
this.b=b},
lp:function lp(){},
tK:function tK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tL:function tL(a){this.a=a},
tM:function tM(){},
w5:function w5(a,b){this.a=a
this.b=b},
w6:function w6(a){this.a=a},
w7:function w7(){},
FT(a,b,c){var s=a.gL().h(0,b),r=s==null?null:s.r
s=r==null||a.aG(r)!=="member"
return s},
G4(a){var s,r,q,p,o,n,m,l,k=A.w(t.N,t.ok)
for(s=A.CL(a,null),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.c
if(o==null)continue
n=p.b
m=k.h(0,n)
if(m!=null){l=m.c
l.toString
l=o.l(0,l)>0
o=l}else o=!0
if(o)k.j(0,n,p)}s=k.$ti.i("M<2>")
s=A.B(new A.M(k,s),s.i("h.E"))
B.a.D(s,new A.zn())
return s},
GG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=b.aC(c),g=A.b([],t.DO)
for(s=A.G4(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.f
n=!1
if(o!=null){m=p.b
if(A.FT(a,m,i)){m=a.gL().h(0,m)
m=m==null?i:m.CW!=null
if(m!==!0)if(o.l(0,h)<=0)if(B.ef.u(0,p.dA(b)))n=o.l(0,b)>=0||p.dA(b)===B.aF}}if(n)g.push(new A.da(p.b,o,p))}s=a.gL().gT()
r=A.o(s)
o=r.i("n<h.E>")
l=A.B(new A.n(s,r.i("j(h.E)").a(new A.BD(a,i)),o),o.i("h.E"))
B.a.D(l,new A.BE())
for(s=l.length,q=0;q<l.length;l.length===s||(0,A.l)(l),++q){k=l[q]
j=A.D0(k,b).w
if(j instanceof A.en&&j.a.l(0,h)<=0)B.a.m(g,new A.da(k.a,j.a,i))}B.a.D(g,new A.BF())
return g},
zn:function zn(){},
da:function da(a,b,c){this.c=a
this.d=b
this.e=c},
BD:function BD(a,b){this.a=a
this.b=b},
BE:function BE(){},
BF:function BF(){},
FR(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="invoiceId",a=A.b([],t.au)
for(s=a0.a7.aZ(B.ak),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q].c
o=A.m(p.h(0,b))
if(o===a1){o=p.h(0,b)
o.toString
A.c(o)
n=p.h(0,"tenancyId")
n.toString
A.c(n)
m=p.h(0,"propertyId")
m.toString
A.c(m)
l=p.h(0,"invoiceNumber")
l.toString
A.c(l)
k=A.ay(p.h(0,"invoiceDate"))
k.toString
j=A.ay(p.h(0,"date"))
j.toString
i=p.h(0,"seriesId")
i.toString
A.c(i)
h=p.h(0,"seq")
h.toString
A.O(h)
g=p.h(0,"number")
g.toString
A.c(g)
f=p.h(0,"reason")
f.toString
A.c(f)
e=p.h(0,"taxable")
e.toString
A.O(e)
d=p.h(0,"cgst")
d.toString
A.O(d)
c=p.h(0,"sgst")
c.toString
A.O(c)
p=p.h(0,"tds")
p.toString
a.push(new A.ci(o,n,m,l,k,j,i,h,g,f,e,d,c,A.O(p)))}}B.a.D(a,new A.y3())
return a},
Mu(a,b){return b.gfg()-B.a.a4(A.FR(a,"rental:"+b.a+":"+(""+b.c+"-"+B.b.ac(B.d.k(b.d),2,"0"))),0,new A.y4(),t.S)},
MB(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.b([],t.s),f=a.a7,e=b.b,d=f.a6(B.aA,e),c=d==null?null:A.m(d.c.h(0,"creditSeriesId"))
if(c==null||f.a6(B.a9,c)==null)B.a.m(g,"The property's credit note series")
d=B.b.I(a1)
if(d.length===0)B.a.m(g,"Why it is credited")
s=b.e
if(a0.l(0,s)<0)B.a.m(g,"A date on or after the invoice")
r=e+":"+(""+a0.a+"-"+B.b.ac(B.d.k(a0.b),2,"0"))
if(f.a6(B.aS,"gstr1-filed:"+r)!=null||f.a6(B.aS,"gst-filed:"+r)!=null)B.a.m(g,"A date in a month whose GSTR-1 is not filed yet")
q=A.Mu(a,b)
if(a2<=0||a2>q)B.a.m(g,"An amount above 0 and at most the "+A.eY(q).k(0)+" not credited yet")
if(g.length!==0)return new A.p(null,g)
c.toString
f=f.a6(B.a9,c)
f.toString
p=b.a
o=b.d
n="rental:"+p+":"
m=""+b.c+"-"
l=A.FR(a,n+(m+B.b.ac(B.d.k(o),2,"0")))
k=A.A8(a,c,a0)
o=B.b.ac(B.d.k(o),2,"0")
f=A.m(f.c.h(0,"pattern"))
f.toString
f=A.z_(f,k,A.fJ(A.jI(a0),"{fy}"),null)
j=a2===q
i=j?b.geU()-B.a.a4(l,0,new A.ym(),t.S):A.jL(a2,new A.P(A.aC(9),0))
h=j?b.geh()-B.a.a4(l,0,new A.yn(),t.S):A.jL(a2,new A.P(A.aC(9),0))
j=j?b.z-B.a.a4(l,0,new A.yo(),t.S):A.jL(a2,b.y)
return new A.p(new A.ci(n+(m+o),p,e,b.w,s,a0,c,k,f,d,a2,i,h,j),B.c)},
LM(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8.e,a3=a2.h(0,"invoiceId"),a4=A.cc(a2.h(0,"date")),a5=a2.h(0,"taxable"),a6=a2.h(0,"reason")
if(typeof a3!="string"||a4==null||!A.cu(a5)||typeof a6!="string")return"a credit note names its invoice, date, amount and reason"
s=a7.a7
r=s.a6(B.ai,a3)
if(r==null)return"no invoice "+a3
q=A.MB(a7,A.En(r),a4,a6,a5)
p=q.a
if(p==null)return"not credited: "+B.a.Z(q.b,", ").toLowerCase()
o=p.x
if(o!==a2.h(0,"number")||p.gdn()!==a2.h(0,"total"))return"the credit note changed since it was shown; make it again"
n=p.r
m=p.f
l=A.fJ(A.jI(m),"{fy}")
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
s.e8(new A.b3(B.ak,"credit:"+n+":"+l+":"+k,A.S(["invoiceId",j,"tenancyId",i,"propertyId",h,"invoiceNumber",g,"invoiceDate",f,"date",m,"seriesId",n,"seq",k,"number",o,"reason",e,"taxable",d,"cgst",c,"sgst",b,"tds",a],t.N,t.X)))
e=a7.aD.c
a0=e.h(0,a3)
s=a0==null
a1=s?null:a0.y
if(!s&&a1!=null){s=a0.a
o=a0.c
n=a0.e
m=a0.f.aa(0,A.eY(p.gdn()))
l=a0.w
e.j(0,a3,new A.es(s,a0.b,o,a0.d,n,m,a0.r,l,a0.x,new A.iT(a1.a.aa(0,A.eY(d)),a1.b.aa(0,A.eY(c+b)),a1.c.aa(0,A.eY(a)))))}return null},
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
y3:function y3(){},
y4:function y4(){},
ym:function ym(){},
yn:function yn(){},
yo:function yo(){},
eY(a){var s=a<0?"-":"",r=Math.abs(a)
return A.a3(A.ad(s+B.d.C(r,100)+"."+B.b.ac(""+B.d.R(r,100),2,"0")),"INR")},
jL(a,b){return B.d.C(a*b.a0(0,new A.P(A.aC(100),0)).b_().b0(0)+5000,1e4)},
jI(a){var s=a.a
return a.b>=4?s:s-1},
fJ(a,b){var s,r=new A.z2(),q=B.b.u(b,"-")?"-":"/"
A:{if("{yyyy-yyyy}"===b||"{yyyy/yyyy}"===b){s=""+a+q+(a+1)
break A}if("{yyyy-yy}"===b||"{yyyy/yy}"===b){s=""+a+q+A.i(r.$1(a+1))
break A}s=A.i(r.$1(a))+q+A.i(r.$1(a+1))
break A}return s},
z_(a,b,c,d){var s=null,r=2000+A.X(B.b.X(c,0,2),s,s),q=d==null?r:d,p=t.w,o=t.tj
return A.hQ(A.hQ(A.ao(a,"{yyyy}",""+q),A.D("\\{(n+)\\}",!0,!1),o.a(p.a(new A.z0(b))),s),$.Dr(),o.a(p.a(new A.z1(r))),s)},
IP(a,b,c){return new A.dF(a,b,c,A.jL(c,new A.P(A.aC(9),0)),A.jL(c,new A.P(A.aC(9),0)))},
Em(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){return new A.tT(a1,p,a3,m,f,r,q,n,l,a0,s,a2,k,d,o,j,i,h,a,e,b,g,c)},
En(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a5.c,a4=a3.h(0,"month")
a4.toString
s=A.X(B.b.X(A.c(a4),0,4),a2,a2)
a4=a3.h(0,"month")
a4.toString
r=A.X(B.b.ae(A.c(a4),5),a2,a2)
a4=a3.h(0,"tenancyId")
a4.toString
A.c(a4)
q=a3.h(0,"propertyId")
q.toString
A.c(q)
p=A.ay(a3.h(0,"date"))
p.toString
o=a3.h(0,"seriesId")
o.toString
A.c(o)
n=a3.h(0,"seq")
n.toString
A.O(n)
m=a3.h(0,"number")
m.toString
A.c(m)
l=A.b([],t.t7)
k=a3.h(0,"lines")
k.toString
k=J.dh(t.j.a(k),t.mE)
j=k.$ti
k=new A.a7(k,k.gq(0),j.i("a7<Q.E>"))
i=t.N
h=t.X
j=j.i("Q.E")
while(k.n()){g=k.d
g=(g==null?j.a(g):g).G(0,i,h)
f=g.h(0,"description")
f.toString
A.c(f)
e=g.h(0,"sac")
e.toString
A.O(e)
d=g.h(0,"taxable")
d.toString
A.O(d)
c=g.h(0,"cgst")
c.toString
A.O(c)
g=g.h(0,"sgst")
g.toString
l.push(new A.dF(f,e,d,c,A.O(g)))}k=a3.h(0,"tdsPercent")
k.toString
k=A.ad(A.c(k))
j=a3.h(0,"tds")
j.toString
A.O(j)
i=a3.h(0,"tenantName")
i.toString
A.c(i)
h=a3.h(0,"legalName")
h.toString
A.c(h)
g=a3.h(0,"address")
g.toString
A.c(g)
f=a3.h(0,"placeOfSupply")
f.toString
A.c(f)
e=a3.h(0,"layout")
e.toString
A.c(e)
d=a3.h(0,"issuerName")
d.toString
A.c(d)
c=a3.h(0,"issuerAddress")
c.toString
A.c(c)
b=a3.h(0,"accountId")
b.toString
A.c(b)
a=a3.h(0,"bankName")
a.toString
A.c(a)
a0=a3.h(0,"accountLast4")
a0.toString
A.c(a0)
a1=a3.h(0,"ifsc")
a1.toString
A.c(a1)
return A.Em(b,a0,A.m(a3.h(0,"accountNote")),g,a,p,a1,c,d,e,h,l,r,m,f,q,n,o,j,k,a4,i,s)},
G3(a,b,c,d){var s=a.a7.a6(B.ai,"rental:"+b+":"+(""+c+"-"+B.b.ac(B.d.k(d),2,"0")))
return s==null?null:A.En(s)},
A8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a7,h=i.a6(B.a9,b).c,g=J.Y(h.h(0,"yearly"),!0),f=A.m(h.h(0,"pattern"))
f.toString
s=new A.Ab(B.b.u(f,"{yyyy}"))
r=s.$1(c)
f=t.Z
q=A.b([],f)
for(p=0;p<4;++p)for(o=i.aZ(B.kk[p]),n=o.length,m=0;m<o.length;o.length===n||(0,A.l)(o),++m){l=o[m]
if(A.m(l.c.h(0,"seriesId"))===b)q.push(l)}if(g){i=A.b([],f)
for(f=q.length,p=0;p<q.length;q.length===f||(0,A.l)(q),++p){l=q[p]
o=A.ay(l.c.h(0,"date"))
o.toString
if(J.Y(s.$1(o),r))i.push(l)}k=i}else k=q
if(k.length!==0){i=A.F(k)
return new A.ah(k,i.i("d(1)").a(new A.A9()),i.i("ah<1,d>")).cS(0,new A.Aa())+1}if(q.length!==0)return 1
j=A.m(h.h(0,"startYear"))
if(g&&j!=null&&j!==r)i=1
else{i=A.aH(h.h(0,"startNumber"))
i.toString}return i},
MX(a,b){var s,r,q,p,o,n=a.a7,m=n.a6(B.at,b)
if(m==null)return B.kg
s=n.a6(B.aR,b)
r=m.c
q=A.m(r.h(0,"propertyId"))
q.toString
p=n.a6(B.aA,q)
o=m.av("rent")
q=A.b([],t.s)
if(A.m(r.h(0,"role"))!=="landlord")q.push("You are not the landlord of this tenancy")
r=o==null
if(r)q.push("The tenancy's rent")
if(!r&&o.b!=="INR")q.push("The rent in rupees")
if(s==null)q.push("The invoicing details")
r=p==null
if((r?null:A.m(p.c.h(0,"bookId")))==null)q.push("The property's book")
if(!r&&n.a6(B.aT,p.b)==null)q.push("The invoice issuer")
return q},
MC(b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=" for the month of ",b0="description",b1="amount",b2="currency",b3=A.G3(b4,b5,b6,b7)
if(b3!=null)return new A.p(b3,B.c)
s=A.MX(b4,b5)
if(s.length!==0)return new A.p(a8,s)
r=b4.a7
q=r.a6(B.at,b5)
q.toString
p=r.a6(B.aR,b5)
p.toString
o=q.c
n=A.m(o.h(0,"propertyId"))
n.toString
m=r.a6(B.aT,n)
m.toString
l=p.c
k=A.m(l.h(0,"layout"))
k.toString
j=b7-1
if(!(j>=0&&j<12))return A.a(B.V,j)
i=B.V[j]+" "+b6
j=A.b([],t.Z)
for(h=r.aZ(B.bK),g=h.length,f=0;f<h.length;h.length===g||(0,A.l)(h),++f){e=h[f]
if(A.m(e.c.h(0,"tenancyId"))===b5)j.push(e)}h=A.m(l.h(0,"service"))
g=A.aH(l.h(0,"sac"))
if(g==null)g=997212
q=A.b([A.IP(A.i(h)+a9+i,g,q.av("rent").gaT())],t.t7)
for(h=j.length,g=t.f,d=k==="2",c=t.N,b=t.X,f=0;f<j.length;j.length===h||(0,A.l)(j),++f){a=j[f].c
a0=d?A.i(A.m(a.h(0,b0)))+" "+i:A.i(A.m(a.h(0,b0)))+a9+i
a1=A.aH(a.h(0,"sac"))
a1.toString
if(g.b(a.h(0,b1))){a=a.h(0,b1)
a.toString
a=g.a(a).G(0,c,b)
a2=a.h(0,b1)
a2.toString
a2=A.ad(A.c(a2))
a=a.h(0,b2)
a.toString
A.c(a)
a3=new A.q(a2,a)
a4=B.e.h(0,a)
if(a4==null)A.f(A.x(a,b2,"is not a supported currency"))
if((a2.b<=0?0:Math.max(a2.gv().b,0))>a4)A.f(A.z(a+" allows "+A.i(a4)+" decimal places",a2.k(0),a8))
a=a3}else a=a8
a=a.gaT()
q.push(new A.dF(a0,a1,a,B.d.C(a*new A.P(A.aC(9).a0(0,A.aC(100)),0).b_().b0(0)+5000,1e4),B.d.C(a*new A.P(A.aC(9).a0(0,A.aC(100)),0).b_().b0(0)+5000,1e4)))}j=A.m(l.h(0,"seriesId"))
j.toString
a5=A.A8(b4,j,b8)
a6=p.dc("tdsPercent")
if(a6==null)a6=$.I6()
a7=B.a.a4(q,0,new A.yq(),t.S)
p=b4.gL().h(0,A.m(l.h(0,"accountId")))
p.toString
r=A.m(r.a6(B.a9,j).c.h(0,"pattern"))
r.toString
r=A.z_(r,a5,A.fJ(A.jI(b8),"{fy}"),a8)
h=A.jL(a7,a6)
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
a=B.b.ae(a,a.length-4)
a0=A.m(l.h(0,"ifsc"))
a0.toString
l=k==="3"?a8:A.m(l.h(0,"accountNote"))
return new A.p(A.Em(p.a,a,l,d,p.c,b8,a0,m,b,k,g,q,b7,r,c,n,a5,j,h,a6,b5,o,b6),B.c)},
LN(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="personal",a0="prop.income",a1=a7.e,a2=a1.h(0,"tenancyId"),a3=a1.h(0,"month"),a4=A.cc(a1.h(0,"date")),a5=typeof a3=="string"?A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1).aj(a3):b
if(typeof a2!="string"||a5==null||a4==null)return"an invoice names its tenancy, month and date"
s=a5.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.X(r,b,b)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
p=A.X(s,b,b)
if(A.G3(a6,a2,q,p)!=null)return"that month is already invoiced"
o=A.MC(a6,a2,q,p,a4)
n=o.a
if(n==null)return"not invoiced: "+B.a.Z(o.b,", ").toLowerCase()
s=n.w
if(s!==a1.h(0,"number")||n.gdn()!==a1.h(0,"total"))return"the invoice changed since it was shown; make it again"
r=a6.a7
m=r.a6(B.at,a2)
m.toString
l=A.m(r.a6(B.aA,n.b).c.h(0,"bookId"))
l.toString
k=A.b([],t.s)
for(j=t.N,i=A.a5(a6.d,j,t.G).gT(),i=i.gA(i),h=a6.f,g=l==="personal";i.n();){f=i.gt()
e=f.b
d=h.h(0,l)
if(d==null)d=g?a:b
c=!1
if(e===(d==="member"?a:d)){e=f.a
if(!(e==="income"||B.b.bH(e,".income"))){e=f.d
if(e!=null)e=e==="income"||B.b.bH(e,".income")
else e=c}else e=!0}else e=c
if(e)k.push(f.a)}B.a.bb(k)
i=n.a
h=n.c
g=n.d
i="rental:"+i+":"
h=""+h+"-"
r.e8(new A.b3(B.ai,i+(h+B.b.ac(B.d.k(g),2,"0")),n.fh()))
r=B.b.ac(B.d.k(g),2,"0")
g=B.b.ac(B.d.k(g),2,"0")
m=A.m(m.c.h(0,"otherParty"))
m.toString
f=n.e
e=A.eY(n.gdn())
k=B.a.u(k,a0)?a0:A.aO(k,j)
a6.aD.c.j(0,i+(h+r),new A.es(i+(h+g),l,m,s,f,e,k,"owner",b,new A.iT(A.eY(n.gfg()),A.eY(n.geU()+n.geh()),A.eY(n.z))))
return b},
z2:function z2(){},
z0:function z0(a){this.a=a},
z1:function z1(a){this.a=a},
dF:function dF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tT:function tT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
tW:function tW(){},
tU:function tU(){},
tV:function tV(){},
Ab:function Ab(a){this.a=a},
A9:function A9(){},
Aa:function Aa(){},
yq:function yq(){},
IW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.h(0,"bookId")
h.toString
A.c(h)
s=a.h(0,"period")
s.toString
A.c(s)
r=a.h(0,"version")
r.toString
A.O(r)
q=a.h(0,"title")
q.toString
A.c(q)
q=A.b([],t.D6)
p=a.h(0,"rows")
p.toString
o=t.j
p=J.R(o.a(p))
n=t.N
while(p.n()){m=p.gt()
m.toString
l=J.dh(o.a(m),n)
k=l.a
j=J.an(k)
i=l.$ti.y[1]
q.push(new A.iU(i.a(j.h(k,0)),i.a(j.h(k,1)),i.a(j.h(k,2))))}return new A.fh(h,s,r,q)},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=d},
Nc(a){var s=a.d,r=A.a3($.L(),s.a.b),q=new A.zO(s,r),p=new A.zQ(B.dQ,r)
return new A.pb(a.c.a,B.dQ.gT().a4(0,r,new A.zP(),t.B),J.I9(q.$1(B.aE),q.$1(B.ba)).aa(0,p.$1(B.aE)).aa(0,p.$1(B.ba)),J.Ia(q.$1(B.cc),p.$1(B.cc)),s.f.aa(0,p.$1(null)))},
pb:function pb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zO:function zO(a,b){this.a=a
this.b=b},
zQ:function zQ(a,b){this.a=a
this.b=b},
zP:function zP(){},
G5(a,b,c){var s,r,q,p,o,n=t.AD,m=A.w(t.N,n)
for(s=a.to.a,n=A.aD(new A.M(s,A.o(s).i("M<2>")),n),s=n.length,r=0;r<s;++r){q=n[r]
if(q.d!==b||q.f.l(0,c)>0)continue
p=q.a
o=m.h(0,p)
if(o==null||q.f.l(0,o.f)>0)m.j(0,p,q)}return m},
CJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h="currency",g="is not a supported currency"
for(s=A.aD(a.fx,t.v),r=s.length,q=b.a,p=b.w,o=null,n=0;n<r;++n){m=s[n]
if(m.b===q){l=m.d
l=l.l(0,c)>0||l.l(0,p)<0}else l=!0
if(l)continue
if(o!=null&&m.d.l(0,o.c)<=0)continue
l=A.aY(b)
k=m.r!=null?B.nf:B.ng
o=new A.bA(l,m.f,m.d,k,b)}if(b.d===B.o)for(s=d.gT(),s=s.gA(s);s.n();){r=s.gt()
if(r.r!==q)continue
if(o!=null&&r.f.l(0,o.c)<=0)continue
p=A.aY(b)
l=r.e
k=l.b
j=$.L()
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,h,g))
if((j.b<=0?0:Math.max(j.gv().b,0))>i)A.f(A.z(k+" allows "+A.i(i)+" decimal places",j.k(0),null))
l=l.a
l=j.B(0,new A.P(l.a.S(0),l.b))
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,h,g))
if((l.b<=0?0:Math.max(l.gv().b,0))>i)A.f(A.z(k+" allows "+A.i(i)+" decimal places",l.k(0),null))
o=new A.bA(p,new A.q(l,k),r.f,B.cp,b)}return o},
Gn(a,b,c,d){var s,r,q,p,o,n=A.G5(a,b,d),m=A.b([],t.oc),l=A.b([],t.Q),k=a.gL().gT(),j=A.o(k),i=j.i("n<h.E>"),h=A.B(new A.n(k,j.i("j(h.E)").a(new A.A1(b,d)),i),i.i("h.E"))
B.a.D(h,new A.A2())
for(k=h.length,s=0;s<h.length;h.length===k||(0,A.l)(h),++s){r=h[s]
q=r.d===B.x?null:A.CJ(a,r,d,n)
if(q==null)B.a.m(l,r)
else B.a.m(m,q)}for(k=new A.a1(n,n.r,n.e,A.o(n).i("a1<2>"));k.n();){j=k.d
if(j.c!==B.co)i=j.e.a.l(0,$.L())===0
else i=!0
if(i)continue
B.a.m(m,new A.bA(B.b.I(j.b),j.e,j.f,B.cp,null))}p=new A.A3(m)
k=A.a4(t.N)
for(j=m.length,s=0;s<m.length;m.length===j||(0,A.l)(m),++s)k.m(0,m[s].b.b)
k.a_(0,c)
j=p.$1(c)
i=A.b([],t.C7)
k=A.B(k,k.$ti.c)
B.a.bb(k)
o=k.length
s=0
for(;s<k.length;k.length===o||(0,A.l)(k),++s)i.push(p.$1(k[s]))
return new A.l4(j,i,l)},
Go(a,b,c,d,e,f,g){var s,r,q,p=g*12+e-1,o=A.b([],t.sp)
for(s=p-c+1;s<=p;++s){r=A.az(B.d.C(s,12),B.d.R(s,12)+1+1,1).aw(-864e8)
q=new A.A(A.b1(r),A.b5(r),A.av(r))
o.push(A.Gn(a,b,d,q.l(0,f)>0?f:q))}return o},
hu:function hu(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
uw:function uw(){},
ux:function ux(){},
l4:function l4(a,b,c){this.b=a
this.c=b
this.d=c},
A1:function A1(a,b){this.a=a
this.b=b},
A2:function A2(){},
A3:function A3(a){this.a=a},
A4:function A4(){},
A5:function A5(a){this.a=a},
A6:function A6(){},
A7:function A7(){},
NM(a,b,c,d,e){var s,r,q,p,o,n,m=B.b.I(a.b)
if(B.b.I(a.a).length===0)return"a value needs its holding"
s=m.length
if(s===0)return"give the value a name"
if(s>60)return"the name is at most 60 characters"
if($.f0().aM(0,m).gq(0)>=9)return"the name looks like it holds a full account number; leave the number out"
s=a.d
if(!c.a.E(s))return"no book "+s
r=a.e
q=r.b
if(!B.e.E(q))return"currency "+q+" is not supported"
if(r.a.l(0,$.L())<0)return"a value is zero or more"
if(a.f.l(0,e)>0)return"the as of date cannot be in the future"
p=a.r
r=a.c
if(r===B.co){o=p==null?null:b.a.h(0,p)
if(o==null||o.d!==B.o)return"a loan balance is for one of your loans"
n=o.e
if(n!==q)return"the loan balance must be in "+n
if(o.r!==s)return"the loan is in another book"}else if(p!=null)return"only a loan balance names an account"
if(d!=null)s=d.c!==r||d.e.b!==q||d.r!=p
else s=!1
if(s)return"this holding is a "+d.c.b+" in "+d.e.b+"; add a new one instead"
return null},
cM:function cM(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
NX(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=t.xG,a0=A.a4(a)
for(s=a2.length,r=0;r<a2.length;a2.length===s||(0,A.l)(a2),++r){q=a2[r]
a0.m(0,new A.bB(q.a,q.b,q.c))}p=A.w(a,t.W)
for(a=a1.b3(),s=J.R(a.a),a=new A.N(s,a.b,a.$ti.i("N<1>"));a.n();){o=s.gt()
if(o.Q!=null){n=o.d
n=n!==B.n&&n!==B.w}else n=!0
if(n)continue
n=o.b
m=o.z
l=new A.bB(n,A.cQ(m==null?"":m),o.e)
if(!a0.u(0,l))continue
k=p.h(0,l)
j=k==null?1:o.x.l(0,k.x)
if(j<=0)if(j===0){n=o.a
m=k.a
if(n===m)n=0
else n=n<m?-1:1
n=n>0}else n=!1
else n=!0
if(n)p.j(0,l,o)}a=A.b([],t.qt)
for(a0=a2.length,s=a1.e,o=t.N,n=t.R,m=a1.b.a,r=0;r<a2.length;a2.length===a0||(0,A.l)(a2),++r){q=a2[r]
i=A.a4(o)
for(h=q.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.l)(h),++f){e=m.h(0,h[f])
e=e==null?b:e.c
if(e!=null)i.m(0,e)}i=A.O6(q,i,A.a5(s,o,n).gT())
if(i==null){d=p.h(0,new A.bB(q.a,q.b,q.c))
A:{if(d!=null){i=B.a.M(h,new A.Bq(a1))
c=d}else{c=b
i=!1}if(i){i=c.d
i.toString
h=c.Q
h.toString
h=new A.il(i,h,b)
i=h
break A}i=b
break A}}a.push(i)}return a},
O6(a,b,c){var s,r,q,p
if(b.a===0)return null
s=A.o(c)
r=s.i("n<h.E>")
q=A.B(new A.n(c,s.i("j(h.E)").a(new A.BL(a,b)),r),r.i("h.E"))
B.a.D(q,new A.BM())
if(q.length===0||!B.a.b6(q,new A.BN(q)))return null
p=B.a.gY(q)
return new A.il(p.d,p.e,p.a)},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
Bq:function Bq(a){this.a=a},
BL:function BL(a,b){this.a=a
this.b=b},
BK:function BK(a,b){this.a=a
this.b=b},
BM:function BM(){},
BN:function BN(a){this.a=a},
O3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.w(t.xG,t.C)
for(s=a.f6(b),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
p=q.d
if(p!=null)p=(p===B.n||p===B.w)&&q.Q==null
else p=!0
if(!p)continue
p=q.z
o=A.cQ(p==null?"":p)
if(o.length===0)continue
J.bV(f.aI(new A.bB(o,q.f.b,q.e),new A.BA()),q)}for(s=f.$ti,r=new A.a1(f,f.r,f.e,s.i("a1<2>"));r.n();)J.mR(r.d,new A.BB())
r=A.b([],t.wp)
for(s=new A.ac(f,s.i("ac<1,2>")).gA(0),q=t.B,p=t.s;s.n();){n=s.d
m=n.a
l=m.b
k=n.b
n=J.aZ(k)
j=n.gY(k).z
j.toString
j=B.b.I(j)
i=A.b([],p)
for(h=n.gA(k);h.n();)i.push(h.gt().a)
h=$.L()
g=B.e.h(0,l)
if(g==null)A.f(A.x(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gv().b,0))>g)A.f(A.z(l+" allows "+A.i(g)+" decimal places",h.k(0),null))
r.push(new A.cG(b,m.a,m.c,j,i,n.a4(k,new A.q(h,l),new A.BC(),q)))}B.a.D(r,A.NC())
return r},
Mk(a,b){var s,r,q,p=t.t5
p.a(a)
p.a(b)
s=B.d.l(b.e.length,a.e.length)
if(s!==0)return s
r=B.b.l(a.b,b.b)
if(r!==0)return r
q=B.b.l(a.f.b,b.f.b)
return q!==0?q:B.d.l(b.c.a,a.c.a)},
FL(a0,a1,a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="categoryId",a={}
a.a=a7
s=new A.xH(a,a4,a5)
r=t.Y
q=A.b([],r)
for(p=a1.e,o=p.length,n=a0.b.a,m="bulk:"+a2,l=m+":",k=t.N,j=t.X,i=a8.b,h="bulk."+a2,g=0;g<p.length;p.length===o||(0,A.l)(p),++g){f=p[g]
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
B.a.a1(q,A.b([s.$3(m+":rule","rule.propose",p),s.$3(m+":confirm","rule.confirm",A.S(["id",h],k,j))],r))}return q},
Mc(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.b([],t.Y)
for(s=b.e,r=s.length,q=a.b.a,p="bulk:"+c+":",o=t.N,n=t.X,m=f,l=0;l<s.length;s.length===r||(0,A.l)(s),++l){k=s[l]
j=q.h(0,k)
if(j!=null)i=j.d==null
else{j=null
i=!1}if(i){i=j.dx
h=m+1
g.push(new A.aj(p+k+":v"+i,d,m,"movement.markTransfer",A.S(["movementId",k,"baseVersion",i],o,n),e))
m=h}}return g},
cG:function cG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
BA:function BA(){},
BB:function BB(){},
BC:function BC(){},
xH:function xH(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b){this.a=a
this.b=b},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
NA(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=288e8,a6=t.N,a7=t.k,a8=A.w(a6,a7),a9=new A.B7(b1),b0=new A.B5(a8)
B.a.a2(A.aD(b1.c,a7),b0)
for(a7=b1.gmh(),s=a7.length,r=t.s,q=0;q<s;++q){p=a7[q]
o=A.Ky(b1,p)
if(o!=null){n=o.a
m=p.CW
if(m==null){m=p.w
l=m.F()
m.F()
k=l.aw(a5)
l=new A.A(A.b1(k),A.b5(k),A.av(k))
m=l}m=A.Ms(b1,n,m)
n=m}else n=!1
if(n)continue
n=A.b([],r)
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
if(l==null)l=p.b.b}i=l+" \u2022\u2022"+n}if(!m){m=A.D("^\\d{4}$",!0,!1)
g=!m.b.test(n)}else g=!1
n=p.f
m=n==null
f=m?i:n
if(f==null)f="an unknown account"
n=!m
if(n){m=b1.gL().gT()
l=A.o(m)
e=new A.n(m,l.i("j(h.E)").a(new A.B8(p)),l.i("n<h.E>")).gq(0)>1}else e=!1
m=p.a
l=j.length===0?"":" ("+j+")"
if(e)n=": two accounts are called "+f+"; change one alias."
else if(n)n=" for that account to be added."
else if(g)n=": it shows only part of the number, so pick its account."
else n=i!=null?" for one account of that bank and currency ending in those digits.":": it does not say which account; the statement shows it."
b0.$1(new A.W("held:"+m,B.aD,m,"A message for "+f+l+" waits"+n))}for(a7=b1.giu(),s=a7.length,q=0;q<s;++q){p=a7[q]
d=p.x
if(d==null)d=p.w
r=p.a
n=p.ay
if(n==null)n=p.d
if(n==null)n=p.b.b
if(d==null)m=""
else{m=d.F()
d.F()
k=m.aw(a5)
m=" on "+new A.A(A.b1(k),A.b5(k),A.av(k)).k(0)}b0.$1(new A.W("suspect:"+r,B.c3,r,"A message from "+n+m+" may not be from the bank: "+A.i(p.ax)+". Check it in the bank app, not through anything in the message. Nothing from it was recorded."))}for(a7=A.aD(b1.ok,t.pL),s=a7.length,q=0;q<s;++q){c=a7[q]
o=c.c
if(o==null)o="an account it does not name"
r=c.f
b=r==null?"":" on "+r.k(0)
r=c.a
n=c.r
m=n?B.c8:B.c4
if(n){n=c.d
n=n==null?"":" of "+n.k(0)
n=c.b+" says a payment"+n+" for "+o+" failed"+b+". Check it in the bank app; nothing was recorded."}else{n=c.d
l=c.b
n=(n==null?l+" sent a payment reminder for "+o+b+".":l+" reminds you of "+n.k(0)+" due on "+o+b+".")+" A reminder is not a payment: nothing is marked paid."}b0.$1(new A.W("reminder:"+r,m,r,n))}for(a7=A.a5(b1.rx,a6,t.y6).gT(),a7=a7.gA(a7),s=b1.b,r=s.a,s=s.c;a7.n();){n=a7.gt()
m=r.h(0,n.a)
if(m!=null){l=s.h(0,m.a)
if(l==null){l=m.f.b
h=$.L()
a=new A.q(h,l)
a0=B.e.h(0,l)
if(a0==null)A.f(A.x(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gv().b,0))>a0)A.f(A.z(l+" allows "+A.i(a0)+" decimal places",h.k(0),null))
l=a}l=l.a.l(0,m.f.a)>=0}else l=!0
if(l)continue
l=m.f.k(0)
h=m.z
h=h==null?"":" at "+B.b.I(h)
j=l+h+" on "+m.w.k(0)
a1=n.d
n=m.a
if(a1==null)m="You do not recognise "+j+" on "+A.i(a9.$1(m.c))+". Check it in the bank's app and report it there if it is not yours; SanthIQ does not dispute anything. It counts as spending until the bank reverses it."
else{m=a1.F()
a1.F()
k=m.aw(a5)
m="You reported "+j+" to the bank on "+new A.A(A.b1(k),A.b5(k),A.av(k)).k(0)+". It counts as spending until the reversal arrives and is linked."}b0.$1(new A.W("flag:"+n,B.c5,n,m))}B.a.a2(A.NO(b1),b0)
B.a.a2(A.NP(b1),b0)
B.a.a2(A.MI(b1).b,b0)
B.a.a2(A.MH(b1).b,b0)
B.a.a2(A.Ni(b1).b,b0)
a2=A.MJ(b1,b2)
B.a.a2(a2.c,b0)
for(a7=a2.b,s=a7.length,q=0;q<a7.length;a7.length===s||(0,A.l)(a7),++q){a3=a7[q]
n=r.h(0,a3.a)
n.toString
m=r.h(0,a3.b)
l=n.a
b0.$1(new A.W("transfer?:"+l+":"+m.a,B.P,l,n.f.k(0)+" left "+A.i(a9.$1(n.c))+" on "+n.w.k(0)+" and "+m.f.k(0)+" reached "+A.i(a9.$1(m.c))+" on "+m.w.k(0)+": if this is a move between your own accounts, pair them."))}B.a.a2(A.NE(b1),b0)
B.a.a2(A.Mx(b1),b0)
B.a.a2(A.MY(b1),b0)
B.a.a2(A.Nd(b1),b0)
B.a.a2(A.NK(b1),b0)
a7=A.a4(a6)
for(s=A.GA(b1),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){a4=s[q]
a7.m(0,"missing-statement:"+a4.a+":"+a4.b.k(0))}s=A.Na(b1,b2)
r=A.F(s)
new A.n(s,r.i("j(1)").a(new A.B9(a7)),r.i("n<1>")).a2(0,b0)
B.a.a2(A.Nw(b1),b0)
B.a.a2(A.Mj(b1,b2),b0)
B.a.a2(A.Nm(b1,b2),b0)
B.a.a2(A.N8(b1),b0)
B.a.a2(A.Md(b1),b0)
r=a8.$ti.i("M<2>")
a7=r.i("n<h.E>")
a6=A.B(new A.n(new A.M(a8,r),r.i("j(h.E)").a(new A.Ba(b1,A.a5(b1.y1,a6,t.h),b2)),a7),a7.i("h.E"))
B.a.D(a6,new A.Bb())
return a6},
B7:function B7(a){this.a=a},
B5:function B5(a){this.a=a},
B6:function B6(a){this.a=a},
B8:function B8(a){this.a=a},
B9:function B9(a){this.a=a},
Ba:function Ba(a,b,c){this.a=a
this.b=b
this.c=c},
Bb:function Bb(){},
G7(a,b,c){var s,r=null
A:{s=A.GD(a,b)
if(!s){s=b===B.m?"money coming in is never an expense: file it as income or link it as a refund (INC-03)":"money going out is never income (INC-03)"
break A}if(B.H===a&&b!==B.m){s="a refund is money coming back"
break A}if(B.M===a){if(c==null)s=r
else s=c.gaS()||c.d===B.a7
s=s!==!0}else s=!1
if(s){s="a transfer is on a bank account"
break A}if(B.X===a){if(b===B.k){s=c==null?r:c.gaS()
s=s===!0}else s=(c==null?r:c.d)===B.y
s=!s}else s=!1
if(s){s="a card bill payment is a bank debit or a card credit"
break A}s=r
break A}return s},
Nf(a){var s
t.W.a(a)
s=a.d
if(s!=null)s=(s===B.n||s===B.w)&&a.Q==null
else s=!0
return s},
cQ(a){var s,r=$.vI.h(0,a)
if(r!=null)return r
if($.vI.a>=2e4)$.vI.ap(0)
s=$.I0()
s=B.b.I(A.ao(a.toUpperCase(),s," "))
$.vI.j(0,a,s)
return s},
bc:function bc(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
D2(a,b,c,d,e){var s=J.mT(b,new A.zA(a,d,c,e)),r=A.B(s,s.$ti.i("h.E"))
B.a.D(r,new A.zB())
if(r.length===0)return new A.hf()
return B.a.b6(r,new A.zC(B.a.gY(r)))?new A.iN(B.a.gY(r)):new A.hk(r)},
Me(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.b([],t.Y)
for(s=a0.b3(),r=s.$ti,r.i("j(h.E)").a(A.jN()),s=s.gA(0),r=new A.N(s,A.jN(),r.i("N<h.E>")),q=t.N,p=t.X,o=a0.r.a,n=a0.e,m=t.R,l=a3;r.n();){k=s.gt()
j=A.a5(n,q,m).gT()
i=k.z
if(i==null)h=new A.hf()
else{g=A.cQ(i)
f=k.b
h=A.D2(g,j,k.c,f,k.e)}if(!(h instanceof A.iN))continue
j=h.a
g=j.d
f=k.e
if(A.G7(g,f,o.h(0,k.c))!=null)continue
if(!A.ND(j,k))continue
e=j.y
if(e!=null){if(f!==B.k||k.b===e)continue
g=j.a
f=k.a
k=k.dx
d=l+1
B.a.m(a,new A.aj("rule:"+g+":"+f+":v"+k,a1,l,"movement.forBook",A.S(["movementId",f,"baseVersion",k,"bookId",e,"categoryId",j.e,"ruleId",g],q,p),a2))
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
B.a.m(a,new A.aj("rule:"+f+":"+c+":v"+k,a1,l,"movement.classify",b,a2))
l=d}return a},
NE(a){var s,r,q,p,o,n,m,l,k=A.b([],t.kz)
for(s=A.a5(a.e,t.N,t.R).gT(),s=s.gA(s);s.n();){r=s.gt()
if(r.f)k.push(r)}if(k.length<2)return B.k1
q=new A.Bd(A.w(t.Cw,t.cT),k)
k=A.b([],t.M)
for(s=a.b3(),r=s.$ti,r.i("j(h.E)").a(A.jN()),s=s.gA(0),r=new A.N(s,A.jN(),r.i("N<h.E>"));r.n();){p=s.gt()
o=q.$1(p)
if(o instanceof A.hk){n=o.a
m=p.a
l=A.F(n)
k.push(new A.W("rules-disagree:"+m,B.c1,m,"Rules "+new A.ah(n,l.i("e(1)").a(new A.Bc()),l.i("ah<1,e>")).Z(0," and ")+" disagree about "+A.i(p.z)+"; choose one or change a rule."))}}return k},
ND(a,b){var s,r=b.z,q=r==null?null:A.NL(r,b.e)
if(q!=null&&q!==a.d)return!1
s=a.Q
if(!a.z&&s!=null&&b.y.c.hp(s))return!1
return!0},
cI:function cI(){},
hf:function hf(){},
iN:function iN(a){this.a=a},
hk:function hk(a){this.a=a},
zA:function zA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zB:function zB(){},
zC:function zC(a){this.a=a},
Bd:function Bd(a,b){this.a=a
this.b=b},
Be:function Be(a,b,c){this.a=a
this.b=b
this.c=c},
Bc:function Bc(){},
NL(a,b){var s,r,q=A.D("[^A-Za-z0-9]+",!0,!1),p=A.cQ(A.ao(a,q," "))
q=new A.Bi(p)
if(!q.$1(B.jD)){s=A.D("(?:^| )"+A.hO("FUNDS TRANSFER")+"(?: |$)",!0,!1)
if(s.b.test(p)){s=A.D("(?:^| )"+A.hO("OWN")+"(?: |$)",!0,!1)
s=s.b.test(p)}else s=!1}else s=!0
if(s)return B.M
if(q.$1(B.kt))return B.X
r=b===B.m
if(r&&q.$1(B.kv))return B.H
if(!r&&q.$1(B.kA))return B.n
if(r){q=A.D("(?:^| )"+A.hO("INTEREST")+"(?: |$)",!0,!1)
q=q.b.test(p)}else q=!1
if(q)return B.w
return null},
Bi:function Bi(a){this.a=a},
Bj:function Bj(a){this.a=a},
In(a){var s=new A.n_(a)
s.$1("backupKeepManual")
s.$1("backupKeepDaily")
s.$1("passphraseIntervalDays")
return new A.mZ(s.$1("staleBalanceDays"))},
mZ:function mZ(a){this.d=a},
n_:function n_(a){this.a=a},
Jn(a){var s,r,q,p,o,n,m=a.h(0,"id")
m.toString
A.c(m)
s=a.h(0,"title")
s.toString
A.c(s)
r=A.b([],t.EP)
q=a.h(0,"items")
q.toString
q=J.dh(t.j.a(q),t.J)
p=q.$ti
q=new A.a7(q,q.gq(0),p.i("a7<Q.E>"))
p=p.i("Q.E")
while(q.n()){o=q.d
if(o==null)o=p.a(o)
n=o.h(0,"id")
n.toString
A.c(n)
o=o.h(0,"text")
o.toString
r.push(new A.lt(n,A.c(o)))}q=a.h(0,"check")
q.toString
A.c(q)
return new A.lu(m,s,r)},
lt:function lt(a,b){this.a=a
this.b=b},
lu:function lu(a,b,c){this.a=a
this.b=b
this.c=c},
u4:function u4(a){this.a=a},
Gp(a){var s,r=B.b.I(a).toUpperCase(),q=A.D("[ -]",!0,!1),p=A.ao(r,q,"")
q=$.HT()
if(q.b.test(p))return p
s=B.b.fc(B.b.fc(r,$.Hx(),""),$.Hy(),"")
q=$.Hs()
return q.b.test(s)?s:null},
Jo(a){var s=t.c5,r=A.B(a,s)
B.a.D(r,new A.u9())
return new A.u8(A.aD(r,s))},
NJ(a,b,c,d,e,f){var s,r=t.N,q=t.X,p=A.w(r,q)
p.j(0,"id",a.a)
p.j(0,"kind",a.b.b)
s=a.c
if(s!=null)p.j(0,"institution",s)
r=A.kW(p,r,q)
if(f)r.j(0,"removed",!0)
return new A.aj(d,c,b,"sms.sender",r,e.F())},
c8:function c8(a,b,c){this.c=a
this.a=b
this.b=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
u8:function u8(a){this.a=a},
u9:function u9(){},
l8:function l8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
NP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.w(d,t.C)
for(s=a.b3(),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
if(q.CW==null)J.bV(c.aI(q.c,new A.Bl()),q)}d=A.w(d,t.sO)
for(s=new A.ac(c,c.$ti.i("ac<1,2>")).gA(0),r=t.W,q=t.qM;s.n();){p=s.d
o=p.a
n=p.b
p=A.b([],q)
for(m=A.bE(n,0,r),l=J.R(m.a),k=m.b,m=new A.as(l,k,A.o(m).i("as<1>"));m.n();){j=m.c
j=j>=0?new A.p(k+j,l.gt()):A.f(A.ai())
p.push(new A.p(j.a,j.b))}B.a.D(p,new A.Bm())
d.j(0,o,p)}i=new A.Bn(d)
d=A.b([],t.M)
for(s=A.aD(a.fx,t.v),r=s.length,h=0;h<r;++h){g=s[h]
for(q=g.d,p=i.$3(g.b,g.c,q),m=p.$ti,p=new A.ed(p.a(),m.i("ed<1>")),l="unmatched:"+g.a+":",m=m.c;p.n();){k=p.b
if(k==null)k=m.a(k)
j=k.a
f=k.f.k(0)
e=k.z
e=e==null?"":" at "+e
d.push(new A.W(l+j,B.aD,j,"An alert for "+f+e+" on "+k.w.k(0)+" is not on the statement to "+q.k(0)+". It may post on the next one; otherwise check it in the bank app."))}}return d},
NO(a){var s,r,q,p,o,n,m,l,k,j,i=A.b([],t.M)
for(s=a.id,s=A.aD(new A.M(s,A.o(s).i("M<2>")),t.A9),r=s.length,q=0;q<r;++q){p=s[q]
o=p.r
n=!1
if(o!=null){n=o.a
n=!(n==="read"||n==="alreadyRead")
m=o}else m=null
if(n){n=p.a
l=m.a==="totalsMismatch"?B.b8:B.b9
k=p.b
j=a.gL().h(0,k)
j=j==null?null:j.b
i.push(new A.W("statement-file:"+n,l,n,A.KK(p,m,j==null?k:j)))}}return i},
KK(a,b,c){var s,r=b.a
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
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ub:function ub(a,b){this.a=a
this.c=b},
e_:function e_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Bl:function Bl(){},
Bm:function Bm(){},
Bn:function Bn(a){this.a=a},
Bo:function Bo(){},
o3(a){var s=0,r=A.J(t.nm),q,p,o,n,m,l
var $async$o3=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:l=a.h(0,"deviceId")
l.toString
A.c(l)
p=a.h(0,"keys")
p.toString
s=3
return A.r(A.fW(t.f.a(p).G(0,t.N,t.X)),$async$o3)
case 3:p=c
o=a.h(0,"primary")
o.toString
o=B.B.O(A.c(o))
n=a.h(0,"name")
n.toString
A.c(n)
m=a.h(0,"kind")
m.toString
q=new A.ir(l,p,o,n,A.c(m))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$o3,r)},
Ev(a,b){var s=t.Y
return new A.uf(a,b,A.w(t.S,t.c),A.b([],s),A.b([],s))},
cL(a,b,c,d,e){return A.Jw(a,b,c,d,e)},
Jw(a7,a8,a9,b0,b1){var s=0,r=A.J(t.nm),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cL=A.K(function(b2,b3){if(b2===1){o.push(b3)
s=p}for(;;)switch(s){case 0:a5=J
s=3
return A.r(a7.bl(),$async$cL)
case 3:a2=a5.mT(b3,$.H1().ghm())
a3=A.B(a2,a2.$ti.i("h.E"))
a2=a3.length
if(a2===0)throw A.k(new A.l6())
m=null
h=t.bs,g=t.L,f=t.f,e=t.N,d=t.X,c=0
case 4:if(!(c<a3.length)){s=6
break}l=a3[c]
p=8
a5=g
s=11
return A.r(a7.c1(l),$async$cL)
case 11:b=a5.a(b3)
k=f.a(B.z.bj(new A.eR(!1).cv(b,0,null,!0),null)).G(0,e,d)
s=12
return A.r(A.Ah(A.E4(k),b1),$async$cL)
case 12:m=b3
s=6
break
p=2
s=10
break
case 8:p=7
a4=o.pop()
b=A.aw(a4)
if(b instanceof A.hv){s=5
break}else if(b instanceof A.b9){s=5
break}else if(h.b(b)){s=5
break}else throw a4
s=10
break
case 7:s=2
break
case 10:case 5:a3.length===a2||(0,A.l)(a3),++c
s=4
break
case 6:if(m==null)throw A.k(new A.hv())
j=null
i=null
p=13
s=17
return A.r(A.mL(m),$async$cL)
case 17:s=16
return A.r(b3.bw(),$async$cL)
case 16:j=b3.a
s=18
return A.r(A.mx(m,"santhiq/sync/join/v1"),$async$cL)
case 18:i=b3
n.push(15)
s=14
break
case 13:n=[2]
case 14:p=2
a2=m
a2.b.dW()
a2.ej()
s=n.pop()
break
case 15:s=19
return A.r(A.fX(),$async$cL)
case 19:a0=b3
a1="dev"+A.KR(A.NZ(8))
a2=A.S(["formatVersion",1,"deviceId",a1],e,d)
h=t.D.i("bg.S")
g=h.a(a0.c)
g=B.L.gaH().O(g)
h=h.a(a0.d)
e=B.F.O(B.z.be(A.S(["deviceId",a1,"name",a9,"kind",a8,"x25519",g,"ed25519",B.L.gaH().O(h),"createdAtUtc",b0.F().dl()],e,e),null))
a5=a7
a6="j-"+a1+".sqj"
s=21
return A.r(A.hR(a2,i,B.mG,e,a0.b),$async$cL)
case 21:s=20
return A.r(a5.c2(a6,b3),$async$cL)
case 20:q=new A.ir(a1,a0,j,a9,a8)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cL,r)},
l6:function l6(){},
cU:function cU(){},
ir:function ir(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fw:function fw(a,b){this.a=a
this.b=b},
uf:function uf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.w=_.r=0},
uh:function uh(){},
ug:function ug(){},
ui:function ui(){},
f3(a){return new A.hX(a)},
hR(a,b,c,d,e){var s=0,r=A.J(t.p),q,p,o,n,m,l,k,j
var $async$hR=A.K(function(f,g){if(f===1)return A.G(g,r)
for(;;)switch(s){case 0:m=B.F.O("SANTHIQ-SYNC "+c.b+" 1\n"+B.z.be(a,null)+"\n")
s=3
return A.r($.Dk().bG(d,m,b),$async$hR)
case 3:l=g
k=t.eE
j=new A.hx(A.b([],k))
j.m(0,l.c)
j.m(0,l.b.a)
j.m(0,l.a)
p=j.ff()
j=$.Dl()
o=A.B(m,t.S)
B.a.a1(o,p)
s=4
return A.r(j.aW(0,o,e),$async$hR)
case 4:n=g
k=new A.hx(A.b([],k))
k.m(0,m)
j=t.D.i("bg.S").a(n.a)
k.m(0,B.F.O(B.L.gaH().O(j)+"\n"))
k.m(0,p)
q=k.ff()
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hR,r)},
D6(a,b){var s,r,q,p,o,n,m,l=B.i.by(a,10),k=l
if(typeof k!=="number")return k.fm()
if(k<0||B.R.hj(A.fy(a,0,l),!0)!=="SANTHIQ-SYNC "+b.b+" 1")throw A.k(A.f3("not a "+b.b+" file"))
k=l
if(typeof k!=="number")return k.B()
s=B.i.ce(a,10,k+1)
k=s
if(typeof k!=="number")return k.fm()
if(k<0)o=-1
else{k=s
if(typeof k!=="number")return k.B()
o=B.i.ce(a,10,k+1)}r=o
k=r
if(typeof k!=="number")return k.fm()
if(k<0)throw A.k(A.f3("the file is incomplete"))
try{k=l
if(typeof k!=="number")return k.B()
q=t.f.a(B.z.bj(B.R.cb(A.fy(a,k+1,s)),null)).G(0,t.N,t.X)
if(!J.Y(J.at(q,"formatVersion"),1))throw A.k(B.fb)
k=s
if(typeof k!=="number")return k.B()
p=B.B.O(B.R.cb(A.fy(a,k+1,r)))
k=s
if(typeof k!=="number")return k.B()
k=A.fy(a,0,k+1)
n=r
if(typeof n!=="number")return n.B()
n=A.fy(a,n+1,null)
return new A.uj(q,k,p,n)}catch(m){k=A.f3("the header cannot be read")
throw A.k(k)}},
mI(a,b){var s=0,r=A.J(t.c),q,p,o,n,m
var $async$mI=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.r($.I4().b4(a,new A.bG(b,B.U)),$async$mI)
case 3:o=d
s=4
return A.r(a.bw(),$async$mI)
case 4:n=d.a
m=$.b7().cp()
m=$.b7().cM(m)
m=$.b7().cL(m,32)
p=A.B(b,t.S)
B.a.a1(p,n)
q=m.aY(B.F.O("santhiq/sync/grant/v1"),p,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mI,r)},
e0:function e0(a,b){this.a=a
this.b=b},
hX:function hX(a){this.a=a},
uj:function uj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mx(a,b){var s=0,r=A.J(t.c),q,p,o
var $async$mx=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:p=$.HB()
o=$.b7().cp()
o=$.b7().cM(o)
s=3
return A.r($.b7().cL(o,32).aY(B.F.O("santhiq/sync/v1"),B.A,a),$async$mx)
case 3:o=d
q=p.aY(B.F.O(b),B.A,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mx,r)},
mL(a){var s=0,r=A.J(t.gZ),q,p
var $async$mL=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=$.b7().cH()
s=4
return A.r(A.mx(a,"santhiq/sync/sign/v1"),$async$mL)
case 4:s=3
return A.r(c.cI(),$async$mL)
case 3:q=p.aP(c)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mL,r)},
NZ(a){var s,r=$.jO(),q=A.b([],t.t)
for(s=0;s<a;++s)q.push(r.cQ(256))
return q},
KR(a){var s,r,q=A.b([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q.push(B.b.ac(B.d.bL(a[r],16),2,"0"))
return B.a.cg(q)},
fX(){var s=0,r=A.J(t.rU),q,p,o,n,m,l,k
var $async$fX=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=3
return A.r($.b7().dq().aU(),$async$fX)
case 3:p=b
s=4
return A.r($.b7().cH().aU(),$async$fX)
case 4:o=b
n=A
m=p
l=o
s=5
return A.r(p.bw(),$async$fX)
case 5:k=b.a
s=6
return A.r(o.bw(),$async$fX)
case 6:q=new n.ib(m,l,k,b.a)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$fX,r)},
fW(a){var s=0,r=A.J(t.rU),q,p,o,n,m,l,k,j,i
var $async$fW=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=$.b7().dq()
m=a.h(0,"x25519")
m.toString
s=3
return A.r(n.aP(B.B.O(A.c(m))),$async$fW)
case 3:p=c
m=$.b7().cH()
n=a.h(0,"ed25519")
n.toString
s=4
return A.r(m.aP(B.B.O(A.c(n))),$async$fW)
case 4:o=c
l=A
k=p
j=o
s=5
return A.r(p.bw(),$async$fW)
case 5:i=c.a
s=6
return A.r(o.bw(),$async$fW)
case 6:q=new l.ib(k,j,i,c.a)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$fW,r)},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Jm(a){var s,r,q,p,o=null,n=$.H5().aj(a)
if(n==null)return o
s=n.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.X(r,o,o)
if(2>=s.length)return A.a(s,2)
q=s[2]
q.toString
q=A.X(q,o,o)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
s=A.X(s,o,o)
p=new A.iY(a,r,q,s)
return s<q?o:p},
Mm(a,b,c){var s,r,q,p,o,n=A.w(t.S,t.aA)
for(s=J.R(a);s.n();){r=A.Jm(s.gt())
if(r==null||r.b!==b)continue
q=r.c
p=n.h(0,q)
if(p==null||r.d>p.d)n.j(0,q,r)}o=A.b([],t.EA)
for(r=n.h(0,c);r!=null;r=n.h(0,r.d+1))B.a.m(o,r)
return o},
iv:function iv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lD:function lD(a,b){this.a=a
this.b=b},
uk:function uk(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.f=null
_.r=0},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FN(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="currency",c="is not a supported currency",b=new A.A(a5,a4,1),a=new A.A(a5,a4,A.av(A.az(a5,a4+1,0))),a0=A.w(t.T,t.B)
for(s=A.Bf(a1,a2),r=s.length,q=a1.d,p=t.N,o=t.G,n=a3+" allows ",m=0;m<s.length;s.length===r||(0,A.l)(s),++m){l=s[m]
k=l.b
j=k==null
i=j?e:k.x
if((i==null?l.a.x:i).l(0,b)>=0){i=j?e:k.x
i=(i==null?l.a.x:i).l(0,a)>0||l.a.f.b!==a3}else i=!0
if(i)continue
i=l.a
h=i.Q
if(h==null)k=j?e:k.Q
else k=h
h=A.a5(q,p,o)
if(k==null)g=e
else{h=h.h(0,k)
h=h==null?e:h.d
g=h==null?k:h}k=a0.h(0,g)
if(k==null){k=$.L()
h=new A.q(k,a3)
f=B.e.h(0,a3)
if(f==null)A.f(A.x(a3,d,c))
if((k.b<=0?0:Math.max(k.gv().b,0))>f)A.f(A.z(n+A.i(f)+" decimal places",k.k(0),e))
k=h}j=l.c||!j
i=i.f
if(j){j=i.b
h=$.L()
f=B.e.h(0,j)
if(f==null)A.f(A.x(j,d,c))
if((h.b<=0?0:Math.max(h.gv().b,0))>f)A.f(A.z(j+" allows "+A.i(f)+" decimal places",h.k(0),e))
i=i.a
i=h.B(0,new A.P(i.a.S(0),i.b))
h=new A.q(i,j)
f=B.e.h(0,j)
if(f==null)A.f(A.x(j,d,c))
if((i.b<=0?0:Math.max(i.gv().b,0))>f)A.f(A.z(j+" allows "+A.i(f)+" decimal places",i.k(0),e))
j=h}else j=i
i=j.b
h=k.b
if(i!==h)A.f(A.a8(h,i))
k=k.a.B(0,j.a)
f=B.e.h(0,h)
if(f==null)A.f(A.x(h,d,c))
if((k.b<=0?0:Math.max(k.gv().b,0))>f)A.f(A.z(h+" allows "+A.i(f)+" decimal places",k.k(0),e))
a0.j(0,g,new A.q(k,h))}return a0},
Gh(a,b,c){var s=a*12+b-1-c
return new A.p(B.d.C(s,12),B.d.R(s,12)+1)},
Gi(a,b,c,d){var s,r,q,p,o=new A.A(d,c,1),n=new A.A(d,c,A.av(A.az(d,c+1,0))),m=A.b([],t.Q)
for(s=a.gL().gT(),s=s.gA(s);s.n();){r=s.gt()
q=!1
if(r.r===b){p=r.d
if(p!==B.o&&p!==B.x)if(r.w.l(0,n)<=0){q=r.CW
q=q==null?null:q.l(0,o)<0
q=q!==!0}}if(q)m.push(r)}if(m.length===0)return!1
return B.a.b6(m,new A.zV(a,o,n))},
Ns(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=A.b([],t.kY)
for(s=3;s>=1;--s)a4.push(new A.AY(a8,s,a5,a6,a7).$0())
r=new A.n(a4,t.jb.a(new A.AZ()),t.yF).gq(0)
if(r===0)return B.kR
q=A.a4(t.T)
for(p=a4.length,o=0;o<a4.length;a4.length===p||(0,A.l)(a4),++o)for(n=a4[o].a[3].gah(),n=n.gA(n);n.n();)q.m(0,A.m(n.gt()))
m=A.w(t.N,t.la)
for(q=new A.fm(A.ea(q,q.r,q.$ti.c),t.kx),p=t.nn,n=t.dN,l=t.B,k=t.xj,j=a7+" allows ";q.n();){i=q.b
if(i==null)i=A.f(A.ai())
h=$.L()
g=new A.q(h,a7)
f=B.e.h(0,a7)
if(f==null)A.f(A.x(a7,a2,a3))
if((h.b<=0?0:Math.max(h.gv().b,0))>f)A.f(A.z(j+A.i(f)+" decimal places",h.k(0),null))
h=A.b([],k)
for(e=a4.length,o=0;o<a4.length;a4.length===e||(0,A.l)(a4),++o){d=a4[o].a
c=d[0]
b=d[1]
a=d[2]
d=d[3].h(0,i)
h.push(new A.jm([a,b,d==null?g:d,c]))}e=new A.n(h,p.a(new A.B_()),n).a4(0,g,new A.B0(),l).a
if(e.l(0,$.L())<=0)continue
d=A.aC(r)
e=e.gbV()
d=new A.P(d,0).gbV()
d=A.c_(e.a.a0(0,d.b),e.b.a0(0,d.a))
e=d.b
a0=$.hT()
a1=e.l(0,a0)
if(a1===0){if(e.c===0)A.f(B.Y)
e=d.a.bC(e)}else{d=d.a
if(d.l(0,$.hS())<0){if(e.c===0)A.f(B.Y)
e=d.bC(e)}else{if(e.c===0)A.f(B.Y)
e=d.bC(e).B(0,a0)}}if(B.e.h(0,a7)==null)A.f(A.x(a7,a2,a3))
m.j(0,i,new A.i0(new A.q(new A.P(e,0),a7),h,r))}return m},
LY(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="currency",a7="is not a supported currency",a8=b1.e_.le(b2,b6,b4),a9=A.FN(b1,b2,b3,b4,b6),b0=b5.a===b6&&b5.b===b4
if(b0){s=A.Gh(b6,b4,1)
r=s.a
q=s.b
p=new A.A(r,q,1)
o=new A.A(r,q,A.av(A.az(r,q+1,0)))
n=A.w(t.T,t.B)
for(m=A.Bf(b1,b2),l=m.length,k=b1.d,j=t.N,i=t.G,h=b5.c,g=b3+" allows ",f=0;f<m.length;m.length===l||(0,A.l)(m),++f){e=m[f]
d=e.b
c=d==null
b=c?a5:d.x
if(b==null)b=e.a.x
if(b.l(0,p)<0||b.l(0,o)>0||b.c<=h||e.a.f.b!==b3)continue
a=e.a
a0=a.Q
if(a0==null)d=c?a5:d.Q
else d=a0
a0=A.a5(k,j,i)
if(d==null)a1=a5
else{a0=a0.h(0,d)
a0=a0==null?a5:a0.d
a1=a0==null?d:a0}d=n.h(0,a1)
if(d==null){d=$.L()
a0=new A.q(d,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((d.b<=0?0:Math.max(d.gv().b,0))>a2)A.f(A.z(g+A.i(a2)+" decimal places",d.k(0),a5))
d=a0}c=e.c||!c
a=a.f
if(c){c=a.b
a0=$.L()
a2=B.e.h(0,c)
if(a2==null)A.f(A.x(c,a6,a7))
if((a0.b<=0?0:Math.max(a0.gv().b,0))>a2)A.f(A.z(c+" allows "+A.i(a2)+" decimal places",a0.k(0),a5))
a=a.a
a=a0.B(0,new A.P(a.a.S(0),a.b))
a0=new A.q(a,c)
a2=B.e.h(0,c)
if(a2==null)A.f(A.x(c,a6,a7))
if((a.b<=0?0:Math.max(a.gv().b,0))>a2)A.f(A.z(c+" allows "+A.i(a2)+" decimal places",a.k(0),a5))
c=a0}else c=a
a=c.b
a0=d.b
if(a!==a0)A.f(A.a8(a0,a))
d=d.a.B(0,c.a)
a2=B.e.h(0,a0)
if(a2==null)A.f(A.x(a0,a6,a7))
if((d.b<=0?0:Math.max(d.gv().b,0))>a2)A.f(A.z(a0+" allows "+A.i(a2)+" decimal places",d.k(0),a5))
n.j(0,a1,new A.q(d,a0))}}else n=B.kS
m=A.b([],t.cs)
for(l=new A.ac(a8,A.o(a8).i("ac<1,2>")).gA(0),k=b3+" allows ";l.n();){j=l.d
a3=j.a
a4=j.b
if(a4.b===b3){j=a9.h(0,a3)
if(j==null){j=$.L()
i=new A.q(j,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((j.b<=0?0:Math.max(j.gv().b,0))>a2)A.f(A.z(k+A.i(a2)+" decimal places",j.k(0),a5))
j=i}if(b0){i=a9.h(0,a3)
if(i==null){i=$.L()
h=new A.q(i,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((i.b<=0?0:Math.max(i.gv().b,0))>a2)A.f(A.z(k+A.i(a2)+" decimal places",i.k(0),a5))
i=h}h=n.h(0,a3)
if(h==null){h=$.L()
g=new A.q(h,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((h.b<=0?0:Math.max(h.gv().b,0))>a2)A.f(A.z(k+A.i(a2)+" decimal places",h.k(0),a5))
h=g}g=h.b
d=i.b
if(g!==d)A.f(A.a8(d,g))
i=i.a.B(0,h.a)
h=new A.q(i,d)
a2=B.e.h(0,d)
if(a2==null)A.f(A.x(d,a6,a7))
if((i.b<=0?0:Math.max(i.gv().b,0))>a2)A.f(A.z(d+" allows "+A.i(a2)+" decimal places",i.k(0),a5))
i=h}else i=a5
m.push(new A.bD(a3,a4,j,i))}}B.a.D(m,new A.wj(b1))
return new A.n7(m,b3)},
Fr(a,b){var s=A.a5(a.d,t.N,t.G).h(0,b)
s=s==null?null:s.c
return s==null?b:s},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
zV:function zV(a,b,c){this.a=a
this.b=b
this.c=c},
AY:function AY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AZ:function AZ(){},
B_:function B_(){},
B0:function B0(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n7:function n7(a,b){this.a=a
this.b=b},
n8:function n8(a){this.a=a},
n9:function n9(){},
nc:function nc(){},
nb:function nb(){},
na:function na(){},
wj:function wj(a){this.a=a},
MO(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=A.b([],t.Ew)
for(s=a.e_.f,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>")),r=b.a*12+b.b;s.n();){q=s.d
p=q.e
o=p==null?j:a.gL().h(0,p)
n=o==null?j:A.CJ(a,o,b,B.kQ)
p=q.d
m=b.l(0,p)>0?0:p.a*12+p.b-r
l=n==null
k=l?j:n.b
l=l?j:n.c
B.a.m(i,new A.dC(q,k,l,m===0&&b.l(0,p)<=0?1:m))}B.a.D(i,new A.zb())
return i},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zb:function zb(){},
Gs(a){var s,r,q=null,p=typeof a=="string"?$.HV().aj(a):q
if(p==null)s=q
else{s=p.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.X(r,q,q)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
s=new A.p(r,A.X(s,q,q))}return s},
Jk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="capSpend",f="currency",e="minSpend",d=a.h(0,"accountId")
d.toString
A.c(d)
s=a.h(0,"unit")
s.toString
A.ag(B.jc,A.c(s),t.cy)
s=A.b([],t.j2)
r=a.h(0,"rates")
r.toString
r=J.R(t.j.a(r))
q=t.f
p=t.N
o=t.X
while(r.n()){n=q.a(r.gt()).G(0,p,o)
m=A.m(n.h(0,"categoryId"))
l=n.h(0,"rate")
l.toString
l=A.ad(A.c(l))
if(n.h(0,g)==null)k=null
else{k=n.h(0,g)
k.toString
k=q.a(k).G(0,p,o)
j=k.h(0,"amount")
j.toString
j=A.ad(A.c(j))
k=k.h(0,f)
k.toString
A.c(k)
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,f,"is not a supported currency"))
if((j.b<=0?0:Math.max(j.gv().b,0))>h)A.f(A.z(k+" allows "+A.i(h)+" decimal places",j.k(0),null))
k=i}if(n.h(0,"capEarn")==null)n=null
else{n=n.h(0,"capEarn")
n.toString
n=A.ad(A.c(n))}s.push(new A.fr(m,l,k,n))}if(a.h(0,e)!=null){r=a.h(0,e)
r.toString
A.aP(q.a(r).G(0,p,o))}return new A.lq(d,s)},
LO(b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="categoryId",b0="bookId",b1=b5.e,b2=new A.w8(b3)
switch(b5.d){case"category.flag":s=A.aO(new A.n(B.dJ,t.ns.a(new A.w9(b1)),t.rK),t.r)
r=b2.$1(b1.h(0,a9))
if(r==null||s==null||A.hM(r))return"a flag is for a spending category"
b4.a.j(0,r.a,s)
break
case"budget.set":q=b1.h(0,b0)
p=A.Gs(b1.h(0,"from"))
r=b2.$1(b1.h(0,a9))
if(typeof q!="string"||b3.aG(q)==null||p==null)return"a budget needs a book and a month"
if(r==null||r.d!=null||A.hM(r)||r.b!==b3.bX(q))return"a budget is for a top-level spending category of the book's kind"
if(b1.h(0,"amount")==null)o=null
else{n=b1.h(0,"amount")
n.toString
o=A.aP(t.f.a(n).G(0,t.N,t.X))}if(o!=null&&o.a.l(0,$.L())<=0)return"a budget is more than zero"
B.a.m(b4.b,new A.k8(q,r.a,o,p.a,p.b))
break
case"period.note":q=b1.h(0,b0)
m=b1.h(0,"period")
l=b1.h(0,"text")
k=b1.h(0,a9)
if(typeof q!="string"||b3.aG(q)==null||A.Gs(m)==null||typeof l!="string")return"a note needs a book, a month and its text"
if(k!=null&&b2.$1(k)==null)return"no category "+A.i(k)
j=B.b.I(l)
n=j.length
if(n>120||B.b.u(j,"\n"))return"a note is one line of at most 120 characters"
i=new A.bB(q,A.c(m),A.m(k))
h=b4.c
if(n===0)h.a_(0,i)
else h.j(0,i,new A.le())
break
case"officeDay.mark":g=A.Fd(b1.h(0,"date"))
f=b1.h(0,"office")
if(g==null||!A.ef(f))return"an office day mark is a date and yes or no"
b4.d.j(0,g,f)
break
case"recurring.mark":q=b1.h(0,b0)
e=b1.h(0,"payeeKey")
d=A.aO(new A.n(B.jT,t.AH.a(new A.wa(b1)),t.o_),t.fK)
if(typeof q!="string"||typeof e!="string"||e.length===0||d==null)return"a recurring mark is a book, a payee and what it is"
b4.e.j(0,new A.p(q,e),d)
break
case"goal.set":c=b1.h(0,"id")
b=b1.h(0,"name")
a=A.Fd(b1.h(0,"by"))
a0=b1.h(0,"accountId")
if(typeof c!="string"||typeof b!="string"||B.b.I(b).length===0||a==null||!t.f.b(b1.h(0,"target")))return"a goal needs a name, a target and a date"
n=b1.h(0,"target")
n.toString
a1=A.aP(t.f.a(n).G(0,t.N,t.X))
if(a1.a.l(0,$.L())<=0)return"a target is more than zero"
if(a0!=null){a2=b3.gL().h(0,a0)
if(a2==null||a2.e!==a1.b||a2.d===B.o)return"a goal's account holds savings in the target's currency"}b4.f.j(0,c,new A.iW(c,B.b.I(b),a1,a,A.m(a0)))
break
case"goal.remove":if(b4.f.a_(0,b1.h(0,"id"))==null)return"no goal "+A.i(b1.h(0,"id"))
break
case"reward.rules":a3=A.Jk(b1)
n=a3.a
a2=b3.gL().h(0,n)
if(a2==null||a2.d!==B.y)return"reward rules are for a card"
h=a3.c
a4=h.length
if(a4===0){b4.r.a_(0,n)
return null}for(a5=0;a5<h.length;h.length===a4||(0,A.l)(h),++a5){a6=h[a5]
if(a6.b.l(0,$.L())>=0){a7=a6.a
a7=a7!=null&&b2.$1(a7)==null}else a7=!0
if(a7)return"a reward rate is zero or more, for a known category"}a4=A.F(h)
if(new A.n(h,a4.i("j(1)").a(new A.wb()),a4.i("n<1>")).gq(0)<=1){a4=A.a4(t.T)
for(a7=h.length,a5=0;a8=h.length,a5<a8;h.length===a7||(0,A.l)(h),++a5)a4.m(0,h[a5].a)
h=a4.a!==a8}else h=!0
if(h)return"one rate per category"
b4.r.j(0,n,a3)
break
default:return"not a trend operation"}return null},
Fd(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.HH().aj(a):m
if(l==null)return m
s=l.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.X(r,m,m)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.X(r,m,m)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.X(s,m,m)
n=A.az(q,p,o)
return A.b1(n)===q&&A.b5(n)===p&&A.av(n)===o?new A.A(q,p,o):m},
k8:function k8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
le:function le(){},
co:function co(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eE:function eE(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lq:function lq(a,b){this.a=a
this.c=b},
uo:function uo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w8:function w8(a){this.a=a},
w9:function w9(a){this.a=a},
wa:function wa(a){this.a=a},
wb:function wb(){},
Im(a,b,c,d){var s=new A.dj(a,b)
s.iw(a,b,c,d)
return s},
CK(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aF(a2.F(),B.q),b=A.w(t.N,t.S)
for(s=A.aD(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q].b
o=b.h(0,p)
b.j(0,p,(o==null?0:o)+1)}n=new A.wm(a,a2,a3,a1,c,b)
s=a.gL().gT()
r=A.o(s)
p=r.i("n<h.E>")
m=A.B(new A.n(s,r.i("j(h.E)").a(new A.wk(a0)),p),p.i("h.E"))
B.a.D(m,new A.wl())
A.fG(a0,a)
s=A.b([],t.zM)
for(r=A.fH(a,a0,B.c),p=r.length,o=t.kd,l=t.eF,q=0;q<r.length;r.length===p||(0,A.l)(r),++q){k=r[q]
j=A.b([],l)
for(i=0;i<3;++i){h=B.jd[i]
g=A.b([],o)
for(f=m.length,e=0;e<m.length;m.length===f||(0,A.l)(m),++e){d=m[e]
if(d.e===k&&A.LD(d)===h)g.push(n.$1(d))}f=g.length
if(f!==0)j.push(A.Im(h,g,k,a1))}s.push(new A.dR(k,j))}return new A.mX(s)},
M9(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aF(a1.F(),B.q),d=a.aX(b),c=A.b([],t.n)
for(s=A.aD(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(a.aX(p.b)===d)c.push(p)}B.a.D(c,new A.xz())
s=A.b([],t.CL)
for(r=c.length,o=e.a,q=0;q<c.length;c.length===r||(0,A.l)(c),++q){p=c[q]
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
h=A.aN(p.e,a0)
g=A.aN(p.f,a0)
f=p.r==null?"Recorded, not reconciled":"Reconciled"
s.push(new A.lA(""+n.c+" "+m+l+" to "+(""+k.c+" "+j+i),h,g,f))}return s},
b_:function b_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.d=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.Q=i
_.as=j
_.at=k
_.ax=l},
lA:function lA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
mU:function mU(){},
mV:function mV(){},
dR:function dR(a,b){this.a=a
this.b=b},
mX:function mX(a){this.b=a},
wm:function wm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wk:function wk(a){this.a=a},
wl:function wl(){},
xz:function xz(){},
C5(a){var s,r,q={}
for(s=new A.ac(a,A.o(a).i("ac<1,2>")).gA(0);s.n();){r=s.d
q[r.a]=r.b}return q},
kH:function kH(){},
nY:function nY(a){this.a=a},
nZ:function nZ(a,b){this.a=a
this.b=b},
o_:function o_(a){this.a=a},
nW:function nW(a,b){this.a=a
this.b=b},
nX:function nX(a){this.a=a},
eg(a,b,c){var s=A.v(A.v(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
b.a2(0,new A.vO(s))
if(c!=null)s.textContent=c
return s},
Fv(a){var s,r,q
if(a<=0)return B.m9
s=a/4
r=Math.pow(10,B.G.mb(Math.log(s)/2.302585092994046))
q=new A.ah(A.b([1,2,5,10],t.t),t.oe.a(new A.vP(r)),t.FC).m9(0,new A.vQ(s))
return new A.p(B.G.eT(a/q)*q,q)},
Mg(a){var s=Math.abs(a),r=new A.xW()
if(s>=1e6)return A.i(r.$1(a/1e6))+"M"
if(s>=1000)return A.i(r.$1(a/1000))+"k"
return r.$1(a)},
Fa(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=-b
r=A.Fv(Math.max(c,s))
i.a=r.a
q=r.b
p=b<0?-A.Fv(s).a:0
o=new A.vr(i,p)
for(s=q/2,n=t.N,m=t.K,l=p;l<=i.a+s;l+=q){k=o.$1(l)
j=o.$1(l)
a.append(A.eg("line",A.S(["x1",64,"x2",948,"y1",k,"y2",j,"class",l===0?"zero":"grid"],n,m),null))
k=o.$1(l)
if(typeof k!=="number")return k.B()
a.append(A.eg("text",A.S(["x",56,"y",k+4,"text-anchor","end","class","tick"],n,m),d+A.Mg(l)))}return o},
Fp(a,b,c){var s,r,q,p,o,n
for(s=t.N,r=A.bE(b,0,s),q=J.R(r.a),p=r.b,r=new A.as(q,p,A.o(r).i("as<1>")),o=t.K;r.n();){n=r.c
n=n>=0?new A.p(p+n,q.gt()):A.f(A.ai())
a.append(A.eg("text",A.S(["x",c.$1(n.a),"y",252,"text-anchor","middle","class","tick"],s,o),n.b))}},
Fh(a){return A.eg("svg",A.S(["viewBox","0 0 960 260","class","chart","role","img","aria-label",a],t.N,t.K),null)},
MP(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.Fh(b1),b0=A.b([],t.zp)
for(s=0;s<2;++s)B.a.a1(b0,b3[s].b)
r=t.pR
q=A.Fa(a9,Math.min(0,B.a.a4(b0,0,B.cy,r)),B.a.a4(b0,0,B.cz,r),b5)
p=884/b2.length
o=Math.min(28,(p*0.7-2)/2)
n=new A.ze(p)
for(b0=t.jg,r=t.N,m=t.K,l=o/2,k=(o*2+2)/2,j=o+2,i=0;i<b2.length;++i)for(h=A.bE(b3,0,b0),g=J.R(h.a),f=h.b,h=new A.as(g,f,A.o(h).i("as<1>"));h.n();){e=h.c
e=e>=0?new A.p(f+e,g.gt()):A.f(A.ai())
d=e.a
c=e.b
e=n.$1(i)
if(typeof e!=="number")return e.aa()
b=e-k+d*j
a=J.at(c.b,i)
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
e=a3}e=A.eg("path",A.S(["d",e,"class","series-"+(d+1)],r,m),null)
if(!(i<b2.length))return A.a(b2,i)
e.append(A.eg("title",A.w(r,m),b4.$3(b2[i],c.a,a)))
a9.append(e)}A.Fp(a9,b2,n)
return a9},
G6(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.Fh(a),e=A.b([],t.zp)
for(s=c.length,r=0;r<c.length;c.length===s||(0,A.l)(c),++r){q=c[r]
if(q!=null)e.push(q)}s=t.pR
p=A.Fa(f,Math.min(0,B.a.a4(e,0,B.cy,s)),B.a.a4(e,0,B.cz,s),a1)
o=new A.zo(884/b.length)
for(e=t.u6,s=A.bE(c,0,e),n=J.R(s.a),m=s.b,s=new A.as(n,m,A.o(s).i("as<1>")),l="",k=!1;s.n();k=!i){j=s.c
j=j>=0?new A.p(m+j,n.gt()):A.f(A.ai())
q=j.b
i=q==null
if(i)continue
h=k?"L":"M"
l+=h+A.i(o.$1(j.a))+" "+A.i(p.$1(q))+" "}if(l.length!==0)f.append(A.eg("path",A.S(["d",l,"class","line series-1"],t.N,t.K),null))
for(e=A.bE(c,0,e),s=J.R(e.a),n=e.b,e=new A.as(s,n,A.o(e).i("as<1>")),m=t.N,j=t.K,i=!d;e.n();){h=e.c
h=h>=0?new A.p(n+h,s.gt()):A.f(A.ai())
g=h.a
q=h.b
if(q==null)continue
if(!i||g===0)f.append(A.eg("circle",A.S(["cx",o.$1(g),"cy",p.$1(q),"r",4,"class","dot series-1"],m,j),null))
h=A.eg("circle",A.S(["cx",o.$1(g),"cy",p.$1(q),"r",12,"class","hit"],m,j),null)
if(!(g>=0&&g<b.length))return A.a(b,g)
h.append(A.eg("title",A.w(m,j),a0.$2(b[g],q)))
f.append(h)}A.Fp(f,b,o)
return f},
vO:function vO(a){this.a=a},
vP:function vP(a){this.a=a},
vQ:function vQ(a){this.a=a},
xW:function xW(){},
vr:function vr(a,b){this.a=a
this.b=b},
ze:function ze(a){this.a=a},
zo:function zo(a){this.a=a},
Lt(){var s,r,q
try{s=A.m(A.v(A.v(v.G.window).localStorage).getItem("santhiq-theme"))
if(B.a.u(B.bR,s)){r=s
r.toString}else r="system"
return r}catch(q){return"system"}},
FA(a){var s,r=v.G,q=A.ar(A.v(r.document).documentElement),p=a==="system"
if(p){if(q!=null)q.removeAttribute("data-theme")}else if(q!=null)q.setAttribute("data-theme",a)
try{if(p)A.v(A.v(r.window).localStorage).removeItem("santhiq-theme")
else A.v(A.v(r.window).localStorage).setItem("santhiq-theme",a)}catch(s){}},
CF(a){var s,r=v.G,q=A.v(A.v(r.document).createElementNS("http://www.w3.org/2000/svg","svg"))
q.setAttribute("viewBox","0 0 24 24")
q.setAttribute("class","icon")
q.setAttribute("aria-hidden","true")
r=A.v(A.v(r.document).createElementNS("http://www.w3.org/2000/svg","path"))
s=B.kN.h(0,a)
if(s==null)s=""
r.setAttribute("d",s)
q.append(r)
return q},
hH(a,b,c,d){return A.LX(a,b,c,t.yz.a(d))},
LX(a,b,c,d){var s=0,r=A.J(t.l3),q,p,o,n,m,l,k,j,i
var $async$hH=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:k=v.G
j=A.v(new k.Headers())
d.a2(0,new A.wi(j))
p=A.v(k.window)
o=b.gdO()
n=c==null?null:c
s=3
return A.r(A.bK(A.v(p.fetch(o,{method:a,headers:j,body:n,referrerPolicy:"no-referrer",credentials:"omit",cache:"no-store",signal:A.v(k.AbortSignal.timeout(6e4))})),t.m),$async$hH)
case 3:m=f
i=A
s=4
return A.r(A.bK(A.v(m.arrayBuffer()),t.i),$async$hH)
case 4:l=i.iI(f,0,null)
q=new A.hh(A.O(m.status),l)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hH,r)},
MQ(){var s,r,q=v.G,p=A.c(A.v(A.v(q.window).location).hash)
if(!B.b.u(p,"access_token=")&&!B.b.u(p,"error="))return!1
s=A.v(new q.BroadcastChannel("santhiq-sign-in"))
s.postMessage(B.b.ae(p,1))
s.close()
A.v(A.v(q.window).history).replaceState(null,"",A.c(A.v(A.v(q.window).location).pathname))
r=A.ar(A.v(q.document).body)
r.toString
r.textContent="Signed in. This window can be closed."
A.v(q.window).close()
return!0},
Lg(){var s,r=$.jO(),q=A.b([],t.s)
for(s=0;s<16;++s)q.push(B.b.ac(B.d.bL(r.cQ(256),16),2,"0"))
return B.a.cg(q)},
Ja(a){var s,r=A.v(new v.G.BroadcastChannel("santhiq-sign-in"))
A.cP(!1,"isUtc",t.y)
s=t.N
s=new A.lc(a,r,new A.aa(0,0,!1),A.Lt(),B.cr,A.a4(s),B.mM,A.w(s,s),A.w(s,t.sF))
s.iy(a)
return s},
bd:function bd(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
wi:function wi(a){this.a=a},
lc:function lc(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1
_.f=c
_.r=null
_.w="personal"
_.x=d
_.y="SGD"
_.z=""
_.Q=25
_.at=_.as=$
_.ax=e
_.ay=f
_.CW=_.ch=null
_.cx=g
_.cy=h
_.db=3
_.dx=null
_.dy=i},
rW:function rW(a){this.a=a},
rX:function rX(a){this.a=a},
rY:function rY(a){this.a=a},
rZ:function rZ(a){this.a=a},
pp:function pp(a,b){this.a=a
this.b=b},
px:function px(a){this.a=a},
t_:function t_(a,b){this.a=a
this.b=b},
t0:function t0(a,b){this.a=a
this.b=b},
t1:function t1(a,b){this.a=a
this.b=b},
t2:function t2(a){this.a=a},
t3:function t3(a){this.a=a},
t4:function t4(a,b){this.a=a
this.b=b},
t5:function t5(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qd:function qd(a,b){this.a=a
this.b=b},
qs:function qs(a){this.a=a},
qv:function qv(a){this.a=a},
qw:function qw(a,b){this.a=a
this.b=b},
qt:function qt(a){this.a=a},
qu:function qu(a){this.a=a},
ps:function ps(a,b){this.a=a
this.b=b},
pt:function pt(a){this.a=a},
pu:function pu(a){this.a=a},
pv:function pv(a){this.a=a},
pw:function pw(a,b){this.a=a
this.b=b},
py:function py(){},
pz:function pz(a,b){this.a=a
this.b=b},
qn:function qn(){},
qo:function qo(){},
qp:function qp(a,b){this.a=a
this.b=b},
qm:function qm(a,b){this.a=a
this.b=b},
qq:function qq(a){this.a=a},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a,b){this.a=a
this.b=b},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(){},
rF:function rF(a){this.a=a},
rG:function rG(){},
rI:function rI(){},
rH:function rH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rD:function rD(){},
rE:function rE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rC:function rC(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
rt:function rt(a,b){this.a=a
this.b=b},
ri:function ri(a){this.a=a},
r4:function r4(a){this.a=a},
r5:function r5(){},
r6:function r6(){},
rh:function rh(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
ra:function ra(a,b){this.a=a
this.b=b},
r3:function r3(a){this.a=a},
rb:function rb(a,b){this.a=a
this.b=b},
r2:function r2(a){this.a=a},
r_:function r_(a){this.a=a},
rc:function rc(a,b){this.a=a
this.b=b},
r1:function r1(a){this.a=a},
qZ:function qZ(a){this.a=a},
rd:function rd(a,b){this.a=a
this.b=b},
re:function re(a,b){this.a=a
this.b=b},
r0:function r0(a){this.a=a},
rf:function rf(a,b){this.a=a
this.b=b},
rg:function rg(a,b){this.a=a
this.b=b},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
pZ:function pZ(a){this.a=a},
q_:function q_(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b},
q5:function q5(a,b){this.a=a
this.b=b},
q6:function q6(a,b){this.a=a
this.b=b},
q7:function q7(a){this.a=a},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
pW:function pW(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b){this.a=a
this.b=b},
qa:function qa(a){this.a=a},
q0:function q0(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
qV:function qV(){},
qW:function qW(){},
qX:function qX(a){this.a=a},
qY:function qY(){},
qz:function qz(a){this.a=a},
qA:function qA(a){this.a=a},
pR:function pR(a,b){this.a=a
this.b=b},
pU:function pU(a){this.a=a},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
qg:function qg(){},
qh:function qh(a){this.a=a},
qi:function qi(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
qf:function qf(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
rv:function rv(){},
rw:function rw(a){this.a=a},
rx:function rx(a){this.a=a},
ry:function ry(a){this.a=a},
rz:function rz(a){this.a=a},
rA:function rA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ru:function ru(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qI:function qI(a){this.a=a},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(){},
qE:function qE(){},
qF:function qF(a,b){this.a=a
this.b=b},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b){this.a=a
this.b=b},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a,b){this.a=a
this.b=b},
po:function po(a,b){this.a=a
this.b=b},
pn:function pn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pm:function pm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qM:function qM(){},
qN:function qN(){},
qO:function qO(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
rU:function rU(a){this.a=a},
rV:function rV(a,b){this.a=a
this.b=b},
rP:function rP(a){this.a=a},
rQ:function rQ(){},
rR:function rR(a){this.a=a},
rS:function rS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
rT:function rT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rN:function rN(a,b,c){this.a=a
this.b=b
this.c=c},
pr:function pr(){},
pq:function pq(a,b){this.a=a
this.b=b},
pP:function pP(a){this.a=a},
pQ:function pQ(a,b){this.a=a
this.b=b},
pO:function pO(){},
pG:function pG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b){this.a=a
this.b=b},
pI:function pI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pD:function pD(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(a,b,c){this.a=a
this.b=b
this.c=c},
pC:function pC(a,b){this.a=a
this.b=b},
pK:function pK(a){this.a=a},
pL:function pL(){},
pM:function pM(a){this.a=a},
pN:function pN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pB:function pB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rr:function rr(a,b){this.a=a
this.b=b},
rs:function rs(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rk:function rk(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a){this.a=a},
rn:function rn(){},
ro:function ro(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function rq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rj:function rj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pA:function pA(a){this.a=a},
qT:function qT(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a,b,c){this.a=a
this.b=b
this.c=c},
LZ(c1,c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="currency",b2="is not a supported currency",b3=new A.wp(c3),b4=new A.wq(c1),b5=A.aF(c4.F(),B.q),b6=A.we(c1,c2),b7=b5.a,b8=b5.b,b9=A.LY(c1,c2,b6,b8,b5,b7),c0=A.a4(t.N)
for(s=b9.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q)c0.m(0,s[q].a)
p=A.Ns(c1,c2,b6,b5)
o=b9.gmK();--b8
if(!(b8>=0&&b8<12))return A.a(B.V,b8)
b8=B.V[b8]
r=A.b([],t.gI)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.l)(s),++q){m=s[q]
l=m.a
k=b4.$1(l)
j=m.b
i=b3.$1(j)
h=m.c
g=b3.$1(h)
f=j.a
e=h.b
d=j.b
if(e!==d)A.f(A.a8(d,e))
e=h.a
c=f.B(0,new A.P(e.a.S(0),e.b))
b=B.e.h(0,d)
if(b==null)A.f(A.x(d,b1,b2))
if((c.b<=0?0:Math.max(c.gv().b,0))>b)A.f(A.z(d+" allows "+A.i(b)+" decimal places",c.k(0),b0))
d=b3.$1(new A.q(c,d))
c=m.d
a=c==null
a0=a?"":b3.$1(c)
e=e.l(0,f)
f=!a&&c.a.l(0,f)>0
j=j.gaT()
a1=j===0
h=a1?0:h.gaT()/j
if(a)j=b0
else j=a1?0:c.gaT()/j
r.push(new A.dn(l,k,i,g,d,a0,e>0,f,h,j))}B.a.D(r,new A.wn())
if(s.length===0)s=""
else{s=A.i(b3.$1(b9.glc()))
n=A.i(b3.$1(b9.gi8()))
l=o==null?"":", heading for "+A.i(b3.$1(o))
k=b9.ghy()===0?"":"; "+b9.ghy()+" over"
k="Budgets "+s+", spent "+n+l+k
s=k}n=b5.c
l=A.Li(n)
k=A.b([],t.EQ)
for(j=p.gbu(),j=j.gA(j);j.n();){i=j.gt()
a2=i.a
a3=i.b
if(!c0.u(0,a2)){i=b4.$1(a2)
h=a3.a
g=b3.$1(h)
h=h.gaT()
f=a3.c
e=f===1?"":"s"
k.push(new A.dP(a2,i,g,h,"From "+f+" complete month"+e+" of "+a3.b.length))}}B.a.D(k,new A.wo())
c0=A.b([],t.jw)
for(j=A.MO(c1,b5),i=j.length,q=0;q<j.length;j.length===i||(0,A.l)(j),++q){a4=j[q]
h=a4.a
g=h.c
f=b3.$1(g)
e=h.d
d=e.b-1
if(!(d>=0&&d<12))return A.a(B.l,d)
d=B.l[d]
c=e.a
c=c===b7?"":" "+c
a=a4.b
a0=a==null
if(a0)a1=h.e==null?"Not known: link an account to it on the phone":"Not known: its account has no balance yet"
else{a1=A.i(b3.$1(a))
a5=a4.c
if(a5==null)a5=""
else{a6=a5.c
a7=a5.b-1
if(!(a7>=0&&a7<12))return A.a(B.l,a7)
a7=B.l[a7]
a5=a5.a
a5=a5===b7?"":" "+a5
a5=" ("+(""+a6+" "+a7+a5)+")"}a5=a1+a5
a1=a5}if(a0)a5=b0
else{a5=a.b
a6=g.b
if(a5!==a6)A.f(A.a8(a6,a5))
a5=a.a
a5=g.a.B(0,new A.P(a5.a.S(0),a5.b))
a7=new A.q(a5,a6)
b=B.e.h(0,a6)
if(b==null)A.f(A.x(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b)A.f(A.z(a6+" allows "+A.i(b)+" decimal places",a5.k(0),b0))
a5=a7}if(a5==null)a5=""
else{if(a0)a5=b0
else{a5=a.b
a6=g.b
if(a5!==a6)A.f(A.a8(a6,a5))
a5=a.a
a5=g.a.B(0,new A.P(a5.a.S(0),a5.b))
a7=new A.q(a5,a6)
b=B.e.h(0,a6)
if(b==null)A.f(A.x(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b)A.f(A.z(a6+" allows "+A.i(b)+" decimal places",a5.k(0),b0))
a5=a7}a5.toString
a5=b3.$1(a5)}if(a4.ghA()==null)a6=""
else{a6=a4.ghA()
a6.toString
a6=b3.$1(a6)}if(a0)a7=b0
else{a7=a.b
a8=g.b
if(a7!==a8)A.f(A.a8(a8,a7))
a7=a.a
a7=g.a.B(0,new A.P(a7.a.S(0),a7.b))
a9=new A.q(a7,a8)
b=B.e.h(0,a8)
if(b==null)A.f(A.x(a8,b1,b2))
if((a7.b<=0?0:Math.max(a7.gv().b,0))>b)A.f(A.z(a8+" allows "+A.i(b)+" decimal places",a7.k(0),b0))
a7=a9}if(a7!=null){if(a0)a7=b0
else{a7=a.b
a8=g.b
if(a7!==a8)A.f(A.a8(a8,a7))
a7=a.a
a7=g.a.B(0,new A.P(a7.a.S(0),a7.b))
a9=new A.q(a7,a8)
b=B.e.h(0,a8)
if(b==null)A.f(A.x(a8,b1,b2))
if((a7.b<=0?0:Math.max(a7.gv().b,0))>b)A.f(A.z(a8+" allows "+A.i(b)+" decimal places",a7.k(0),b0))
a7=a9}a7=a7.a.l(0,$.L())<=0}else a7=!1
if(a7)a7="Reached"
else{a7=a4.d
if(a7===0)a7="Date passed"
else{a8=a7===1?"":"s"
a8=""+a7+" month"+a8+" left"
a7=a8}}if(a0)g=b0
else{g=g.gaT()
g=g===0?0:a.gaT()/g}c0.push(new A.kz(h,f,""+e.c+" "+d+c,a1,a5,a6,g,a7))}return new A.nd("Spent counts filed transactions only; ones still to file in Review are not in it. Heading for is spent so far plus what was spent after the "+n+l+" last month.",b8+" "+b7,b6,r,s,k,c0)},
Li(a){var s,r="th"
if(!(a>=11&&a<=13)){s=B.d.R(a,10)
A:{if(1===s){r="st"
break A}if(2===s){r="nd"
break A}if(3===s){r="rd"
break A}break A}}return r},
dn:function dn(a,b,c,d,e,f,g,h,i,j){var _=this
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
dP:function dP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kz:function kz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
nd:function nd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wp:function wp(a){this.a=a},
wq:function wq(a){this.a=a},
wn:function wn(){},
wo:function wo(){},
l5:function l5(){},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.d=null
_.e=c},
nF:function nF(a){this.a=a},
M0(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=new A.ws(b5),a5=A.aF(b6.F(),B.q),a6=A.Gn(b2,b3,b7,a5),a7=a5.a,a8=a5.b,a9=A.D3(b2,b3,12,b7,b4,a8,a7),b0=A.Go(b2,b3,12,b7,a8,a5,a7),b1=new A.wt(a5,a4)
a7=a6.b
a8=a7.b
s=A.F(a8)
a8=A.B(new A.ah(a8,s.i("db(1)").a(b1),s.i("ah<1,db>")),t.q9)
s=a7.c
r=A.F(s)
B.a.a1(a8,new A.ah(s,r.i("db(1)").a(b1),r.i("ah<1,db>")))
r=a4.$1(a7.gdQ())
s=a4.$1(a7.gdU())
a7=a4.$1(a7.gdQ().aa(0,a7.gdU()))
q=A.a4(t.N)
for(p=a6.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.l)(p),++n)q.m(0,p[n].a)
p=A.b([],t.s)
for(o=a6.d,m=o.length,n=0;n<o.length;o.length===m||(0,A.l)(o),++n){l=o[n]
if(l.e===b7)p.push(A.aY(l))}o=A.b([],t.Fn)
m=A.bE(a9,0,t.wy)
m=A.B(m,A.o(m).i("h.E"))
k=A.F(m).i("aQ<1>")
m=new A.aQ(m,k)
m=new A.a7(m,m.gq(0),k.i("a7<a2.E>"))
k=k.i("a2.E")
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
if(c!==b)A.f(A.a8(b,c))
e=e.a
e=g.a.B(0,new A.P(e.a.S(0),e.b))
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,a2,a3))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.z(b+" allows "+A.i(a)+" decimal places",e.k(0),null))
g=a4.$1(new A.q(e,b))
if(b5)e=""
else{e=A.Gy(h)
if(e==null)e=""}if(!(i>=0&&i<b0.length))return A.a(b0,i)
c=b0[i].b
if(c.b.length===0&&c.c.length===0)c=""
else{b=c.gdQ()
c=c.gdU()
a0=c.b
a1=b.b
if(a0!==a1)A.f(A.a8(a1,a0))
c=c.a
c=b.a.B(0,new A.P(c.a.S(0),c.b))
a=B.e.h(0,a1)
if(a==null)A.f(A.x(a1,a2,a3))
if((c.b<=0?0:Math.max(c.gv().b,0))>a)A.f(A.z(a1+" allows "+A.i(a)+" decimal places",c.k(0),null))
c=a4.$1(new A.q(c,a1))}o.push(new A.l_(j+" "+h.a,f,d,g,e,c))}return new A.io(b7,a8,r,s,a7,q,p,o)},
M_(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i=A.aF(a0.F(),B.q),h=i.a,g=i.b,f=A.D3(a,b,12,a1,c,g,h),e=A.Go(a,b,12,a1,g,i,h),d=new A.wr()
h=A.b([],t.s)
for(g=f.length,s=0;s<f.length;f.length===g||(0,A.l)(f),++s){r=f[s]
q=r.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
h.push(B.l[q]+" "+B.d.R(r.a,100))}g=t.zp
q=A.b([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.l)(f),++s)q.push(d.$1(f[s].c.a))
g=A.b([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.l)(f),++s)g.push(d.$1(f[s].d.a))
p=A.b([],t.wG)
for(o=e.length,s=0;s<e.length;e.length===o||(0,A.l)(e),++s){n=e[s].b
if(n.b.length===0&&n.c.length===0)n=null
else{m=n.gdQ()
n=n.gdU()
l=n.b
k=m.b
if(l!==k)A.f(A.a8(k,l))
n=n.a
n=m.a.B(0,new A.P(n.a.S(0),n.b))
j=B.e.h(0,k)
if(j==null)A.f(A.x(k,"currency","is not a supported currency"))
if((n.b<=0?0:Math.max(n.gv().b,0))>j)A.f(A.z(k+" allows "+A.i(j)+" decimal places",n.k(0),null))
n=d.$1(new A.q(n,k))}p.push(n)}return new A.o0(a1,h,q,g,p)},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l_:function l_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
io:function io(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ws:function ws(a){this.a=a},
wt:function wt(a,b){this.a=a
this.b=b},
o0:function o0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wr:function wr(){},
vz(a){var s=a.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return""+a.c+" "+B.l[s]+" "+a.a},
M1(a,b,c,d){var s,r,q,p,o,n=new A.wy(c),m=a.a7,l=m.a6(B.ah,b),k=l==null,j=k?null:J.Y(l.c.h(0,"gstRegistered"),!0),i=j===!0,h=new A.wx(a)
k=k?null:A.m(l.c.h(0,"name"))
j=A.b([],t.Z)
for(m=m.aZ(B.a4),s=m.length,r=0;r<m.length;m.length===s||(0,A.l)(m),++r){q=m[r]
if(A.m(q.c.h(0,"bookId"))===b)j.push(q)}B.a.D(j,new A.wu())
m=A.b([],t.eO)
for(s=A.MW(a,b),p=s.length,r=0;r<s.length;s.length===p||(0,A.l)(s),++r)m.push(new A.wv(a,s[r],h,c,n,i).$0())
s=A.b([],t.p9)
for(p=A.Mi(a,b),o=p.length,r=0;r<p.length;p.length===o||(0,A.l)(p),++r)s.push(new A.ww(a,p[r],n,d).$0())
return new A.o1(k,i,j,m,s)},
kr:function kr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fZ:function fZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h3:function h3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o1:function o1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wy:function wy(a){this.a=a},
wx:function wx(a){this.a=a},
wu:function wu(){},
wv:function wv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ww:function ww(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M2(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=A.aF(a4.F(),B.q),c=new A.wH(d,a3,a2,new A.wF(a2)),b=new A.wE(a2),a=new A.wD(d),a0=a2.c_,a1=a0.gt()
a0=A.a5(a0.d,t.N,t.ud).gT()
s=A.B(a0,A.o(a0).i("h.E"))
B.a.D(s,new A.wA())
a0=A.b([],t.AM)
if(a1.length!==0){r=A.b([],t.tZ)
for(q=a1.length,p=t.s,o=0;o<a1.length;a1.length===q||(0,A.l)(a1),++o){n=a1[o]
m=A.KH(n)
l=b.$1(n.c)
k=n.f
if(k==null)k=""
j=n.r
j=j==null?"":"\u2022\u2022"+j
i=a.$1(n.w)
h=a.$1(n.x)
r.push(A.b([m,l,k,j,i,h,n.y==null?"":"Attached"],p))}q=A.b([],t.q)
for(p=a1.length,o=0;o<a1.length;a1.length===p||(0,A.l)(a1),++o){m=a1[o].x
if(m==null)m=e
else if(m.l(0,d)<0)m="Expired"
else m=d.a8(m)<=60?"Expires soon":e
q.push(m)}a0.push(new A.dK("Documents",B.jL,r,q,e,B.dH))}if(s.length!==0){r=A.b([],t.tZ)
for(q=s.length,p=t.s,o=0;o<s.length;s.length===q||(0,A.l)(s),++o){g=s[o]
m=g.e
l=m==null||m.length===0
k=g.b
m=l?g.c.c+", "+k:m+", "+k
l=b.$1(g.d)
k=g.r
k=k==null?"":"\u2022\u2022"+k
j=g.w
j=j==null?"":A.aN(j,a3)
i=g.Q
if(i==null)i=""
else{i=A.aN(i,a3)
h=g.as
i+=h==null?"":" "+h.c}r.push(A.b([m,l,k,j,i,a.$1(g.y),a.$1(g.z)],p))}a0.push(new A.dK("Insurance policies",B.jW,r,B.dI,e,B.dH))}for(r=t.Ab.a(new A.wB()),q=B.a.gA(B.ac),r=new A.N(q,r,t.m5),p=a2.a7;r.n();){m=q.gt()
f=p.aZ(m)
l={}
l.a=null
l.a=f
k=f.length
if(k!==0)a0.push(new A.wC(l,m,c).$0())}return A.LC(a0)},
LC(a){var s,r,q=A.b([],t.AM)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q.push(new A.vT(a[r]).$0())
return q},
KH(a){var s=a.e
if(s!=null&&B.b.u(s.toLowerCase(),a.b.c.toLowerCase()))return s
return a.gcl()},
dK:function dK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wF:function wF(a){this.a=a},
wG:function wG(a){this.a=a},
wH:function wH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wE:function wE(a){this.a=a},
wD:function wD(a){this.a=a},
wA:function wA(){},
wB:function wB(){},
wC:function wC(a,b,c){this.a=a
this.b=b
this.c=c},
wz:function wz(a){this.a=a},
vT:function vT(a){this.a=a},
vS:function vS(a){this.a=a},
M3(a,b,c,d){var s,r=new A.wM(c),q=A.fH(a,b,B.c),p=a.gL().gT(),o=A.o(p),n=o.i("n<h.E>"),m=A.B(new A.n(p,o.i("j(h.E)").a(new A.wJ(b)),n),n.i("h.E"))
B.a.D(m,new A.wK(q,new A.wN()))
p=A.b([],t.q0)
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.l)(m),++s)p.push(new A.wL(a,m[s],d,r).$0())
return p},
kJ:function kJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wM:function wM(a){this.a=a},
wN:function wN(){},
wJ:function wJ(a){this.a=a},
wK:function wK(a,b){this.a=a
this.b=b},
wL:function wL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wI:function wI(a){this.a=a},
aN(a,b){var s,r,q,p,o,n,m,l,k,j=a.b,i=B.kM.h(0,j)
if(i==null)i=j+" "
if(b)return i+"\u2022\u2022\u2022\u2022\u2022"
s=a.a
r=s.a
q=r.a?r.S(0):r
p=new A.P(q,s.b).k(0)
o=B.b.by(p,".")
s=o<0
n=s?p:B.b.X(p,0,o)
m=j==="JPY"?0:2
l=B.b.mI(s?"":B.b.ae(p,o+1),m,"0")
k=A.CW(n,j)
j=r.ga9(0)<0?"-":""
s=m>0?"."+l:""
return j+i+k+s},
cv(a,b){var s,r=a.b-1
if(!(r>=0&&r<12))return A.a(B.l,r)
r=B.l[r]
s=a.a
s=s===b.a?"":" "+s
return""+a.c+" "+r+s},
Gg(a){var s=a.F().aw(288e8),r=new A.zN(),q=A.b5(s)-1
if(!(q>=0&&q<12))return A.a(B.l,q)
return""+A.av(s)+" "+B.l[q]+" "+A.b1(s)+", "+A.i(r.$1(A.Ch(s)))+":"+A.i(r.$1(A.Ci(s)))+" SGT"},
zN:function zN(){},
fG(a,b){var s,r
if(a==="personal")return"Personal"
s=null
if(b.aG(a)==="member"){r=A.a5(b.p3,t.N,t.o).h(0,a)
r=r==null?null:r.b
s=r}if(s!=null)return s
r=a.length
if(r===0)r=a
else{if(0>=r)return A.a(a,0)
r=a[0].toUpperCase()+B.b.ae(a,1)}return r},
M4(d3,d4,d5,d6,d7,d8,d9,e0,e1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=null,c9=" no statement has posted yet.",d0=new A.wQ(d7),d1=A.aF(d9.F(),B.q),d2=d8-1
if(!(d2>=0&&d2<12))return A.a(B.V,d2)
s=B.V[d2]+" "+e1
r=A.Gk(d3,d4,d8,d1,e1)
q=A.we(d3,d4)
p=A.CK(d3,d4,d7,d9,e0)
d2=t.s
o=A.Gj(d3,d4,A.fH(d3,d4,A.b([q],d2)),d6,d8,e1)
n=o.h(0,q).d.x
m=r.a
A:{if(B.e9===m){l="Final: every checked account is reconciled for the month."
break A}if(B.ea===m){l="Finalised on the phone with "+A.i(r.d)+" items open."
break A}k=B.b7===m
if(k&&!r.b){l="Draft: the month has not ended."
break A}if(k){l="Draft: "+r.c.length+" statements are not reconciled yet."
break A}l=c8}l=A.b([l],d2)
j=n>0
if(j){i=n===1?"":"s"
l.push(""+n+" transaction"+i+" of the month wait in Review and are not counted.")}h=A.b([],t.cM)
for(i=A.fH(d3,d4,new A.au(o,A.o(o).i("au<1>"))),g=i.length,f=t.jL,e=!r.b,d="No spending filed for "+s+" yet.",c=d3.d,b=t.N,a=t.G,a0=p.b,a1=A.F(a0),a2=a1.i("j(1)"),a3=a1.i("n<1>"),a4=a3.i("h<dj>(h.E)"),a5=n===1,a6=""+n+" transaction",a7=0;a7<i.length;i.length===g||(0,A.l)(i),++a7){a8=i[a7]
a9=o.h(0,a8)
b0=a9.d
b1=A.NH(a9,d7)
b2=a2.a(new A.wO(a8))
b3=a4.a(new A.wP())
b4=a9.c
b5=b4.a
b6=d0.$1(b5)
b7=b0.a
b8=d0.$1(b7)
b9=b0.c
b9=b9.a.a.ga9(0)===0?c8:"after "+A.i(d0.$1(b9))+" of refunds"
c0=b7.b
c1=b5.b
if(c0!==c1)A.f(A.a8(c1,c0))
b7=b7.a
b7=b5.a.B(0,new A.P(b7.a.S(0),b7.b))
c2=B.e.h(0,c1)
if(c2==null)A.f(A.x(c1,"currency","is not a supported currency"))
if((b7.b<=0?0:Math.max(b7.gv().b,0))>c2)A.f(A.z(c1+" allows "+A.i(c2)+" decimal places",b7.k(0),c8))
b5=A.b([new A.eo("Money in",b6,c8),new A.eo("Spent",b8,b9),new A.eo("Saved",d0.$1(new A.q(b7,c1)),b1)],f)
b6=A.b([],f)
for(b7=b0.d,b8=b7.length,c3=0;b9=b7.length,c3<b9;b7.length===b8||(0,A.l)(b7),++c3){c4=b7[c3]
b9=c4.a
if(b9==null)b9="No category yet"
else{c0=A.a5(c,b,a).h(0,b9)
c0=c0==null?c8:c0.c
b9=A.hI(c0==null?b9:c0)}b6.push(new A.eo(b9,d0.$1(c4.b),c8))}if(b9!==0)b7=c8
else{b7=A.b([d],d2)
if(j)b7.push(a6+(a5?"":"s")+" of the month wait in Review.")
if(e)b7.push("Statements for the month come after it ends.")
b7=B.a.Z(b7," ")}b8=A.b([],d2)
b9=b0.w
if(b9>0){c0=A.i(d0.$1(b0.r))
c1=b9===1?"":"s"
b8.push("Spent includes "+c0+" from "+b9+" alert"+c1+c9)}b4=b4.c
if(b4>0){b9=b4===1?"":"s"
b8.push("Money in includes "+b4+" alert"+b9+c9)}b4=A.b([],f)
for(b9=a3.i("@<h.E>").a3(a1.i("dj")),b3=new A.fa(new A.n(a0,b2,a3).gA(0),b3,B.bp,b9.i("fa<1,2>")),b9=b9.y[1];b3.n();){b2=b3.d
if(b2==null)b2=b9.a(b2)
c0=b2.a
c1=b2.gf8()
c5=b2.c
c5===$&&A.mN()
if(c5==null)c5="No balance yet"
c6=b2.d
c6===$&&A.mN()
b2=c6===b2.gf8()?c8:""+(b2.gf8()-c6)+" with no balance yet, not in the total"
b4.push(new A.eo(c0.c+" ("+c1+")",c5,b2))}B.a.m(h,new A.ll(a8,b5,b6,b7,b8))}A.fG(d4,d3)
if(d5!=null)A.Gg(d5)
d2=A.b([],t.nK)
for(j=a0.length,a7=0;a7<a0.length;a0.length===j||(0,A.l)(a0),++a7)for(i=a0[a7].b,g=i.length,c3=0;c3<i.length;i.length===g||(0,A.l)(i),++c3)for(f=i[c3].b,e=f.length,c7=0;c7<f.length;f.length===e||(0,A.l)(f),++c7)if(f[c7].as!=null)d2.push(new A.jZ())
return new A.pe(s,l,h)},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jZ:function jZ(){},
pe:function pe(a,b,c){this.b=a
this.d=b
this.e=c},
wQ:function wQ(a){this.a=a},
wO:function wO(a){this.a=a},
wP:function wP(){},
M5(f4,f5,f6,f7,f8,f9,g0,g1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=null,e0="currency",e1="is not a supported currency",e2="From the latest statements",e3=" with no balance yet",e4="s",e5=A.aF(f9.F(),B.q),e6=new A.x7(f7),e7=A.CK(f4,f5,f7,f9,g0),e8=A.Gj(f4,f5,A.fH(f4,f5,B.c),f6,f8,g1),e9=g1===e5.a&&f8===e5.b,f0=A.Gu(f4,f5,e5,f7),f1=f5==="personal",f2=f1?A.MK(f4,e5,g0):d9,f3=A.b([],t.be)
for(s=A.fH(f4,f5,new A.au(e8,A.o(e8).i("au<1>"))),r=s.length,q=t.k1,p=t.B,o=f8-1,n=g1,m=f2==null,l=t.g,k=A.F(f0),j=k.i("j(1)"),k=k.i("n<1>"),i=k.i("h.E"),h=t.kd,g=e7.b,f=A.F(g),e=f.i("j(1)"),f=f.i("N<1>"),d=t.i6,c=t.bL,b=t.zp,a=0;a<s.length;s.length===r||(0,A.l)(s),++a){a0=s[a]
a1=A.w(d,c)
for(a2=e.a(new A.wS(a0)),a3=B.a.gA(g),a2=new A.N(a3,a2,f);a2.n();)for(a4=a3.gt().b,a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.l)(a4),++a6){a7=a4[a6]
a1.j(0,a7.a,a7)}a8=new A.xh(a0)
a9=new A.x8()
b0=new A.x5()
b1=new A.xa()
a2=a1.h(0,B.bf)
b2=a2==null?d9:a2.b
if(b2==null)b2=B.jZ
a2=A.b([],h)
a3=a1.h(0,B.be)
a3=a3==null?d9:a3.b
if(a3!=null)B.a.a1(a2,a3)
a1=a1.h(0,B.bg)
a1=a1==null?d9:a1.b
if(a1!=null)B.a.a1(a2,a1)
b3=b1.$1(b2)
b4=b1.$1(a2)
a1=$.L()
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((a1.b<=0?0:Math.max(a1.gv().b,0))>b5)A.f(A.z(a0+" allows "+A.i(b5)+" decimal places",a1.k(0),d9))
a3=p.a(a8.$1(a2))
a4=a3.b
if(a4!==a0)A.f(A.a8(a0,a4))
a3=a3.a
a3=a1.B(0,new A.P(a3.a.S(0),a3.b))
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>b5)A.f(A.z(a0+" allows "+A.i(b5)+" decimal places",a3.k(0),d9))
b6=e8.h(0,a0)
a1=b6==null
if(a1)b7=d9
else{a4=b6.c.a
a5=b6.d.a
b8=a5.b
b9=a4.b
if(b8!==b9)A.f(A.a8(b9,b8))
a5=a5.a
a5=a4.a.B(0,new A.P(a5.a.S(0),a5.b))
b7=new A.q(a5,b9)
b5=B.e.h(0,b9)
if(b5==null)A.f(A.x(b9,e0,e1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b5)A.f(A.z(b9+" allows "+A.i(b5)+" decimal places",a5.k(0),d9))}c0=A.B(new A.n(f0,j.a(new A.wT(a0)),k),i)
a4=A.b([],l)
for(a5=A.KI(f4,f5,e5),b8=a5.length,a6=0;a6<a5.length;a5.length===b8||(0,A.l)(a5),++a6){c1=a5[a6]
if(c1.b===a0)a4.push(c1)}a5=A.F(c0)
b8=a5.i("j(1)")
a5=a5.i("n<1>")
c2=new A.n(c0,b8.a(new A.wU()),a5).gq(0)
c3=new A.wR(e5)
b9=m?d9:B.a.M(f2.c,new A.wY(a0))
if(b9===!0){b9=A.b([],b)
for(c4=f2.lj(a0),c5=c4.length,a6=0;a6<c4.length;c4.length===c5||(0,A.l)(c4),++a6)b9.push(c4[a6].a.cm(0))
c6=b9}else c6=d9
if(b2.length===0)b9="None"
else b9=b0.$1(b2)?e6.$1(a8.$1(b2)):d9
if(b2.length===0)c4="No bank account in this book"
else{c4=A.i(c3.$1(b3))
c5=J.Y(a9.$1(b2),0)?"":"; "+A.i(a9.$1(b2))+e3
c5=e2+c4+c5
c4=c5}if(a2.length===0)c5="None"
else c5=b0.$1(a2)?e6.$1(new A.q(a3,a0)):d9
if(a2.length===0)a2="No card or loan in this book"
else{c7=A.i(c3.$1(b4))
a2=J.Y(a9.$1(a2),0)?"":"; "+A.i(a9.$1(a2))+e3
a2=e2+c7+a2}a3=a3.a.ga9(0)>0?B.fG:B.aO
c7=b7==null
c8=c7?d9:e6.$1(b7)
if(!(o>=0&&o<12))return A.a(B.V,o)
c9=B.V[o]
d0=e9?", in progress":""
a1=a1?d9:b6.d.x
a1=(a1==null?0:a1)>0?"; "+b6.d.x+" transactions still to file":""
if(c7||b7.a.a.ga9(0)===0)c7=B.aO
else c7=b7.a.a.ga9(0)>0?B.fF:B.d1
if(c0.length===0){a4=$.L()
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((a4.b<=0?0:Math.max(a4.gv().b,0))>b5)A.f(A.z(a0+" allows "+A.i(b5)+" decimal places",a4.k(0),d9))
a4=e6.$1(new A.q(a4,a0))}else{d1=$.L()
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((d1.b<=0?0:Math.max(d1.gv().b,0))>b5)A.f(A.z(a0+" allows "+A.i(b5)+" decimal places",d1.k(0),d9))
a4=e6.$1(B.a.a4(a4,new A.q(d1,a0),new A.wZ(),p))}d1=c0.length
if(d1===0)a5="No card bill or loan instalment due"
else{d2=d1===1?"":e4
a5=B.a.M(c0,new A.x_())?", "+new A.n(c0,b8.a(new A.x0()),a5).gq(0)+" overdue":""
if(c2===0)b8=""
else{b8=c2===1?"":e4
b8="; "+c2+" amount"+b8+" not known, not in the total"}b8=""+d1+" payment"+d2+a5+b8
a5=b8}b8=B.a.M(c0,new A.x1())?B.d1:B.aO
b8=A.b([new A.fi("Cash in bank accounts",b9,c4,B.aO),new A.fi("Owed on cards and loans",c5,a2,a3),new A.fi("Money in less spent",c8,c9+" "+n+d0+a1,c7),new A.fi("Payments due in 30 days",a4,a5,b8)],q)
if(c6==null)a1=f1?"No forecast: no bank account here has a balance yet.":d9
else a1="Known payments and income only, from each account's latest statement"+(f2.mj(a0)?"; some accounts have no balance or an out-of-date one, so it is incomplete":"")+"."
B.a.m(f3,new A.lm(a0,b8,c6,a1))}f1=A.b([],h)
for(s=g.length,a=0;a<g.length;g.length===s||(0,A.l)(g),++a)for(r=g[a].b,q=r.length,a6=0;a6<r.length;r.length===q||(0,A.l)(r),++a6){p=r[a6].b
n=A.F(p)
B.a.a1(f1,new A.n(p,n.i("j(1)").a(new A.x2()),n.i("n<1>")))}d3=A.B(new A.n(f0,j.a(new A.x3()),k),i)
s=t.vu
r=t.gF
q=r.i("h.E")
d4=A.B(new A.n(f1,s.a(new A.x4()),r),q)
d5=A.B(new A.n(f1,s.a(new A.wV()),r),q)
d6=A.B(new A.n(f1,s.a(new A.wW(d5)),r),q)
d7=A.B(new A.n(f1,s.a(new A.wX(d5)),r),q)
f1=A.b([],t.oT)
s=d3.length
if(s!==0){r=s===1?"":e4
q=A.b([],t.I)
for(p=d3.length,a=0;a<d3.length;d3.length===p||(0,A.l)(d3),++a){c1=d3[a]
q.push(new A.p(c1.b,c1.c+" due "+c1.a))}f1.push(new A.d_(B.bz,""+s+" payment"+r+" overdue","Check the bank app; the app pays nothing itself.",q))}s=d6.length
if(s!==0){r=s===1?" needs":"s need"
q=new A.xb().$1(d6)
q.toString
q=A.cv(q,e5)
p=A.b([],t.I)
for(n=d6.length,a=0;a<d6.length;d6.length===n||(0,A.l)(d6),++a){d8=d6[a]
p.push(new A.p(d8.b,d8.r))}f1.push(new A.d_(B.cR,""+s+" account"+r+" a newer statement","Oldest latest statement "+q+". Add the statements on the phone.",p))}s=d4.length
if(s!==0){r=s===1?" has":"s have"
q=A.b([],t.I)
for(p=d4.length,a=0;a<d4.length;d4.length===p||(0,A.l)(d4),++a){d8=d4[a]
q.push(new A.p(d8.b,d8.d))}f1.push(new A.d_(B.cR,""+s+" account"+r+" no statement yet","Add a first statement on the phone, or mark the account closed if it is.",q))}s=d5.length
if(s!==0){r=s===1?"":e4
q=A.b([],t.I)
for(p=d5.length,a=0;a<d5.length;d5.length===p||(0,A.l)(d5),++a){d8=d5[a]
q.push(new A.p(d8.b,d8.r))}f1.push(new A.d_(B.cS,""+s+" account"+r+" with no statement for over a year","Probably closed: mark them closed on the phone so they stop counting as out of date.",q))}s=d7.length
if(s!==0){r=s===1?"":e4
q=A.b([],t.I)
for(p=d7.length,a=0;a<d7.length;d7.length===p||(0,A.l)(d7),++a){d8=d7[a]
n=d8.y
m=n.length
l=m===1?"":e4
q.push(new A.p(d8.b,""+m+" month"+l+", from "+B.a.gY(n)))}f1.push(new A.d_(B.cS,"Statement gaps on "+s+" account"+r,"Earlier months with no statement. Matters only for complete history.",q))}if(!(o>=0&&o<12))return A.a(B.V,o)
return new A.pj(e9,f3,f1,f0)},
Gu(a,b,c,d){var s,r,q,p,o,n,m,l=A.b([],t.m1)
for(s=A.GG(a,c,30),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=a.gL().h(0,p.c)
n={}
n.a=null
if(o!=null){n.a=o
m=o.r===b}else m=!1
if(m)l.push(new A.AG(n,a,p,d,c).$0())}return l},
KI(a,b,c){var s,r,q,p,o,n=A.b([],t.g)
for(s=A.GG(a,c,30),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=a.gL().h(0,p.c)
if((o==null?null:o.r)===b){o=A.F8(a,p)
if(o!=null)n.push(o)}}return n},
F8(a,b){var s,r,q=b.e
if(q!=null){s=q.w
if(s==null)s=q.d
if(s==null)r=null
else if(s.a.a.ga9(0)<0){r=s.b
r=A.a3($.L(),r).aa(0,s)}else r=s
return r}r=a.gL().h(0,b.c)
if(r==null)r=null
else{r=r.as
r=r==null?null:r.r}return r},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a,b){this.a=a
this.b=b},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f},
pj:function pj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
x7:function x7(a){this.a=a},
wS:function wS(a){this.a=a},
xh:function xh(a){this.a=a},
xi:function xi(){},
xj:function xj(){},
x8:function x8(){},
x9:function x9(){},
x5:function x5(){},
x6:function x6(){},
xa:function xa(){},
xe:function xe(){},
xf:function xf(){},
xg:function xg(){},
wT:function wT(a){this.a=a},
wU:function wU(){},
wR:function wR(a){this.a=a},
wY:function wY(a){this.a=a},
wZ:function wZ(){},
x_:function x_(){},
x0:function x0(){},
x1:function x1(){},
x2:function x2(){},
x3:function x3(){},
x4:function x4(){},
wV:function wV(){},
wW:function wW(a){this.a=a},
wX:function wX(a){this.a=a},
xb:function xb(){},
xc:function xc(){},
xd:function xd(){},
AG:function AG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nT(a,b){return new A.kA(a,b)},
O1(a){return new A.Bz(a,B.f2)},
hh:function hh(a,b){this.a=a
this.b=b},
hm:function hm(){},
kA:function kA(a,b){this.a=a
this.b=b},
kB:function kB(){},
Bz:function Bz(a,b){this.a=a
this.b=b},
By:function By(){},
Jc(a){t.k2.a(a)
return B.cb.u(0,a.c)&&a.a!=="fromEvent"},
Jb(a){return B.a.b6(a.d,new A.tf())},
jH(a){var s
A:{if(a instanceof A.hv){s="That passphrase did not open SanthIQ's key. Type it again."
break A}if(a instanceof A.l6){s="Sync is not on yet. On the phone: Settings, Devices, turn sync on, then try again."
break A}if(a instanceof A.l5){s="SanthIQ/Sync was not found in this account. Turn sync on on the phone; if it is on, the page may not be allowed to see the phone's files (see the setup guide, W1)."
break A}if(a instanceof A.hm){s="Google's sign-in ended (it lasts about an hour). Sign in again; nothing is lost."
break A}if(a instanceof A.kA){s="Google answered with an error (HTTP "+a.a+"). Try again in a minute."
break A}if(a instanceof A.kB){s="Google took too long to answer. Check the connection and try again; nothing is lost."
break A}if(a instanceof A.b9||t.bs.b(a)){s="Something in the sync folder could not be read."
break A}s="Could not reach Google. Check the connection and try again."
break A}return s},
Nu(a,b){var s,r,q,p=t.f,o=t.N,n=t.X,m=p.a(B.z.bj(a,null)).G(0,o,n),l=m.h(0,"clientId")
l.toString
A.c(l)
s=m.h(0,"categoryFlags")
s.toString
s=A.Iv(p.a(s).G(0,o,n))
r=m.h(0,"settings")
r.toString
n=A.In(p.a(r).G(0,o,n))
o=A.b([],t.mt)
r=m.h(0,"setupSteps")
r.toString
r=p.a(r).h(0,"steps")
r.toString
r=J.dh(t.j.a(r),t.J)
p=r.$ti
r=new A.a7(r,r.gq(0),p.i("a7<Q.E>"))
p=p.i("Q.E")
while(r.n()){q=r.d
o.push(A.Jn(q==null?p.a(q):q))}return new A.t6(l,b,s,n.d,o)},
CV(a){var s=A.B(a.e,t.N)
B.a.bb(s)
return B.b.X(A.vD(B.aH.O(B.F.O(a.b+"\n"+B.a.Z(s,"\n"))).a),0,16)},
t6:function t6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eA:function eA(a,b){this.a=a
this.b=b},
ld:function ld(a,b,c,d,e,f){var _=this
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
t8:function t8(a){this.a=a},
t7:function t7(a){this.a=a},
ts:function ts(){},
tt:function tt(){},
tm:function tm(a,b){this.a=a
this.b=b},
tq:function tq(){},
tr:function tr(){},
tl:function tl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tb:function tb(a,b){this.a=a
this.b=b},
tk:function tk(){},
tj:function tj(){},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
to:function to(a,b){this.a=a
this.b=b},
tp:function tp(){},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tn:function tn(a,b){this.a=a
this.b=b},
tF:function tF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t9:function t9(){},
tC:function tC(){},
tD:function tD(a,b,c){this.a=a
this.b=b
this.c=c},
ty:function ty(a){this.a=a},
tg:function tg(a,b,c){this.a=a
this.b=b
this.c=c},
tB:function tB(a,b,c){this.a=a
this.b=b
this.c=c},
tE:function tE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
td:function td(a){this.a=a},
tu:function tu(a){this.a=a},
tf:function tf(){},
tA:function tA(a){this.a=a},
tz:function tz(a,b){this.a=a
this.b=b},
tv:function tv(a){this.a=a},
tw:function tw(a){this.a=a},
ta:function ta(a){this.a=a},
th:function th(a,b){this.a=a
this.b=b},
tx:function tx(a,b){this.a=a
this.b=b},
eh(a){var s
A:{if("SGD"===a){s="Singapore"
break A}if("INR"===a){s="India"
break A}s="Other"
break A}return s},
Ny(a,b){A.c(a)
A.c(b)
return A.vK(a)!==A.vK(b)?A.vK(a)-A.vK(b):B.b.l(a,b)},
vK(a){var s
A:{if("SGD"===a){s=0
break A}if("INR"===a){s=1
break A}s=2
break A}return s},
fH(a,b,c){var s,r,q=A.a4(t.N)
for(s=a.gL().gT(),s=s.gA(s);s.n();){r=s.gt()
if(r.r===b&&r.d!==B.x)q.m(0,r.e)}q.a1(0,c)
if(q.a===0)q.m(0,A.we(a,b))
q=A.B(q,q.$ti.c)
B.a.D(q,A.Gx())
return q},
LD(a){var s,r=a.d
A:{if(B.y===r){s=B.be
break A}if(B.o===r){s=B.bg
break A}s=B.bf
break A}return s},
Gc(a){var s=a.as
switch(s==null?null:s.a){case B.bT:s="Home loan"
break
case B.b2:s="Personal loan"
break
case B.bU:s="Commercial loan"
break
case B.bV:s="Other loan"
break
case null:case void 0:s="Loan, type not set"
break
default:s=null}return s},
FF(a,b){var s,r=a.a8(b)
if(r<=0)s="today"
else s=r===1?"yesterday":""+r+" days ago"
return s},
LS(a,b,c,d){var s
if(a==null)return"No statement yet"
if(a.a8(d)>365){s=a.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return"No statement since "+B.l[s]+" "+a.a+": if it is closed, mark it closed on the phone"}s=A.b([],t.s)
if(c)s.push("Out of date: statement to "+A.cv(a,d)+", "+A.FF(a,d))
if(b.length!==0)s.push("Statements missing: "+B.a.Z(b,", "))
return s.length===0?null:B.a.Z(s,". ")},
hI(a){if(a.toUpperCase()!==a||a.toLowerCase()===a)return a
return new A.ah(A.b(a.split(" "),t.s),t.ff.a(new A.yj()),t.zK).Z(0," ")},
Gy(a){var s,r=A.Nc(a),q=r.gfo(),p=r.a,o=p.a
q=o.a.ga9(0)<=0?null:A.El(q.a.gbV().ds(0,o.gbV()),4)
s=q==null?null:q.a0(0,new A.P(A.aC(100),0)).c9(0,B.bd).b_().k(0)+"%"
if(s==null)return null
return r.gfo().B(0,p).a.a.ga9(0)<0?"not shown":s},
NH(a,b){var s,r=A.Gy(a)
A:{if(r==null){s=null
break A}if("not shown"===r){s="savings rate not shown: spent is over twice the money in recorded"
break A}s=b?"savings rate hidden":"savings rate "+r
break A}return s},
AF(a){var s,r,q,p,o,n,m,l=null,k=B.b.I(a).toLowerCase(),j=A.D("^(\\d{4})-(\\d{1,2})-(\\d{1,2})$",!0,!1).aj(k)
if(j!=null){s=j.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
q=A.X(r,l,l)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.X(r,l,l)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
o=A.X(s,l,l)}else{n=A.D("^(\\d{1,2})[/.-](\\d{1,2})[/.-](\\d{4})$",!0,!1).aj(k)
if(n!=null){s=n.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
o=A.X(r,l,l)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=A.X(r,l,l)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
q=A.X(s,l,l)}else{m=A.D("^(\\d{1,2})\\s+([a-z]{3})[a-z]*\\s+(\\d{4})$",!0,!1).aj(k)
if(m!=null){s=m.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
o=A.X(r,l,l)
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
p=B.kP.h(0,r)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
q=A.X(s,l,l)}else{o=l
p=o
q=p}}}if(q==null||p==null||o==null||p<1||p>12||o<1||o>A.av(A.az(q,p+1,0)))return l
return new A.A(q,p,o)},
mD(a){return a==null?"":""+a.c+"/"+a.b+"/"+a.a},
ej:function ej(a,b,c){this.c=a
this.a=b
this.b=c},
yj:function yj(){},
NB(a){var s
A:{if(B.b9===a){s="Could not be read"
break A}if(B.aD===a){s="Waiting for its account"
break A}if(B.v===a||B.P===a){s="Possible match to check"
break A}if(B.ca===a){s="Money in transit"
break A}if(B.b8===a){s="Statement doesn't add up"
break A}if(B.I===a){s="Changed in two places"
break A}if(B.ae===a){s="Books disagree"
break A}if(B.c1===a){s="Rules disagree"
break A}if(B.f===a||B.h===a){s="Change not applied"
break A}if(B.eb===a||B.ec===a){s="Needs a category"
break A}if(B.c2===a){s="Statement missing"
break A}if(B.c3===a){s="May not be from the bank"
break A}if(B.c4===a){s="Payment reminder"
break A}if(B.c5===a){s="Charge not recognised"
break A}if(B.c6===a){s="History start to check"
break A}if(B.ad===a){s="Document to check"
break A}if(B.c7===a){s="Invoice to check"
break A}if(B.c8===a){s="Payment failed"
break A}if(B.c9===a){s="Loan on a card statement"
break A}s=null}return s},
Nn(a,b,c){var s,r=A.hQ(a,$.HI(),t.tj.a(t.w.a(new A.AP(c))),null)
if(b){s=$.Ht()
s=A.ao(r,s,"\u2022\u2022\u2022\u2022\u2022")}else s=r
return s},
M6(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aF(a9.F(),B.q),a2=A.O3(a6,a7),a3=A.NX(a6,a2),a4=t.N,a5=A.w(a4,t.Bz)
for(s=A.NA(a6,a1),r=s.length,q=t.M,p=0;p<s.length;s.length===r||(0,A.l)(s),++p){o=s[p]
n=A.NB(o.b)
m=a5.h(0,n)
if(m==null){m=A.b([],q)
a5.j(0,n,m)
n=m}else n=m
J.bV(n,o)}s=A.b([],t.kW)
for(r=A.bE(a2,0,t.t5),q=J.R(r.a),n=r.b,r=new A.as(q,n,A.o(r).i("as<1>")),m=t.s,l=a6.d,k=t.G;r.n();){j=r.c
j=j>=0?new A.p(n+j,q.gt()):A.f(A.ai())
o=j.a
i=j.b
j=i.d
if(j.length===0)j="(no payee)"
h=i.c===B.k?"Money out":"Money in"
g=i.e.length
f=A.aN(i.f,a8)
if(!(o>=0&&o<a3.length))return A.a(a3,o)
e=a3[o]
A:{if(e==null){d=null
break A}d=B.aB.h(0,e.a)
d.toString
d=A.b([d],m)
c=e.b
if(c!=null){b=A.a5(l,a4,k).h(0,c)
b=b==null?null:b.c
d.push(A.hI(b==null?c:b))}d=B.a.Z(d,", ")
break A}s.push(new A.ik(j,i,e,d,h,g,f))}a4=B.a.a4(a2,0,new A.xk(),t.S)
r=A.b([],t.qH)
for(q=new A.ac(a5,a5.$ti.i("ac<1,2>")).gA(0);q.n();){n=q.d
a=n.a
a0=n.b
n=A.b([],m)
for(l=J.aZ(a0),k=l.bh(a0,100),j=k.$ti,k=new A.a7(k,k.gq(0),j.i("a7<a2.E>")),j=j.i("a2.E");k.n();){h=k.d
n.push(A.Nn((h==null?j.a(h):h).d,a8,a1))}l=l.gq(a0)
r.push(new A.dS(a,n,l))}B.a.D(r,new A.xl())
return new A.tX(s,a4,r)},
ik:function ik(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a,b,c){this.a=a
this.b=b
this.c=c},
AP:function AP(a){this.a=a},
xk:function xk(){},
xl:function xl(){},
M7(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="currency",a4="is not a supported currency",a5=b2.e,a6=t.N,a7=t.R,a8=A.a5(a5,a6,a7).gT(),a9=A.o(a8),b0=a9.i("n<h.E>"),b1=A.B(new A.n(a8,a9.i("j(h.E)").a(new A.xm(b3)),b0),b0.i("h.E"))
B.a.D(b1,new A.xn())
s=A.w(a6,t.S)
r=A.w(a6,t.xC)
q=A.w(t.xG,t.C)
for(a8=b2.f6(b3),a9=a8.$ti,a9.i("j(h.E)").a(A.jN()),a8=a8.gA(0),a9=new A.N(a8,A.jN(),a9.i("N<h.E>")),b0=t.A;a9.n();){p=a8.gt()
o=p.z
o=new A.bB(A.cQ(o==null?"":o),p.c,p.e)
n=q.h(0,o)
if(n==null){n=A.b([],b0)
q.j(0,o,n)
o=n}else o=n
J.bV(o,p)}for(a8=new A.ac(q,q.$ti.i("ac<1,2>")).gA(0),a9=t.s;a8.n();){b0=a8.d
m=b0.a
l=m.a
k=m.b
j=m.c
i=b0.b
for(b0=b1.length,p=J.an(i),h=0;h<b1.length;b1.length===b0||(0,A.l)(b1),++h){g=b1[h]
if(g.f5(l,k,b3,j)){o=g.a
n=s.h(0,o)
if(n==null)n=0
s.j(0,o,n+p.gq(i))}}f=A.D2(l,A.a5(a5,a6,a7).gT(),k,b3,j)
if(f instanceof A.hk){e=f.a
for(b0=p.gA(i);b0.n();){p=b0.gt()
d=p.z
if(d==null)d=""
c=r.h(0,d)
if(c==null){o=p.f.b
n=$.L()
b=B.e.h(0,o)
if(b==null)A.f(A.x(o,a3,a4))
if((n.b<=0?0:Math.max(n.gv().b,0))>b)A.f(A.z(o+" allows "+A.i(b)+" decimal places",n.k(0),null))
c=new A.bB(0,new A.q(n,o),A.a4(a6))}a=c.b
a0=c.c
o=a.b
p=p.f
n=p.b
if(o===n){if(n!==o)A.f(A.a8(o,n))
p=a.a.B(0,p.a)
n=new A.q(p,o)
b=B.e.h(0,o)
if(b==null)A.f(A.x(o,a3,a4))
if((p.b<=0?0:Math.max(p.gv().b,0))>b)A.f(A.z(o+" allows "+A.i(b)+" decimal places",p.k(0),null))
p=n}else p=a
o=A.b([],a9)
for(n=e.length,h=0;h<e.length;e.length===n||(0,A.l)(e),++h){g=e[h]
o.push('"'+g.c+'" as '+A.Fg(b2,g))}a0.a1(0,o)
r.j(0,d,new A.bB(c.a+1,p,a0))}}}a1=new A.xr(b2,s)
a5=t.vV
a6=A.b([],a5)
for(a7=A.F(b1),a8=a7.i("j(1)"),a9=a8.a(new A.xo()),b0=B.a.gA(b1),a7=a7.i("N<1>"),a9=new A.N(b0,a9,a7);a9.n();)a6.push(a1.$1(b0.gt()))
a5=A.b([],a5)
for(a8=a8.a(new A.xp()),a9=B.a.gA(b1),a7=new A.N(a9,a8,a7);a7.n();)a5.push(a1.$1(a9.gt()))
a7=A.b([],t.yk)
for(a8=new A.ac(r,r.$ti.i("ac<1,2>")).gA(0);a8.n();){a2=a8.d
a9=a2.a
b0=a2.b
p=A.aN(b0.b,b4)
o=b0.c
o=A.B(o,A.o(o).c)
B.a.bb(o)
a7.push(new A.cy(a9,b0.a,p,o))}B.a.D(a7,new A.xq())
return new A.tZ(a6,a5,a7)},
Fg(a,b){var s,r,q=B.aB.h(0,b.d)
q.toString
q=A.b([q],t.s)
s=b.e
if(s!=null){r=A.a5(a.d,t.N,t.G).h(0,s)
r=r==null?null:r.c
q.push(A.hI(r==null?s:r))}return B.a.Z(q,", ")},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tZ:function tZ(a,b,c){this.a=a
this.b=b
this.c=c},
xm:function xm(a){this.a=a},
xn:function xn(){},
xr:function xr(a,b){this.a=a
this.b=b},
xo:function xo(){},
xp:function xp(){},
xq:function xq(){},
Nv(a,b){var s,r,q,p,o="access_token",n="error"
if(a.length===0)return new A.iJ()
s=null
try{s=A.JC(a)}catch(r){return new A.eH("The answer from Google could not be read.")}if(!s.E(o)&&!s.E(n))return new A.iJ()
if(b==null||J.at(s,"state")!==b)return new A.eH("That sign-in was not started from this tab. Sign in again.")
if(J.at(s,n)!=null)return new A.eH(J.at(s,n)==="access_denied"?"Sign-in was cancelled.":"Google refused the sign-in.")
q=J.at(s,o)
if(q==null||q.length===0)return new A.eH("Google sent no token.")
p=J.at(s,"scope")
if(!B.a.u(A.b((p==null?"":p).split(" "),t.s),B.a.gY(B.dC)))return new A.eH("Access to SanthIQ's own Drive files was not allowed, so the page cannot read them.")
p=J.at(s,"expires_in")
p=A.li(p==null?"":p,null)
return new A.hn(q,A.C3(0,0,0,p==null?3600:p))},
Gd(a){var s,r,q,p=B.b.I(a).toLowerCase(),o=B.b.f2(p,"@")
if(o<1)return"\u2022\u2022\u2022"
s=B.b.X(p,0,o)
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
r=r>1?s[r-1]:""
return q+"\u2022\u2022\u2022"+r+B.b.ae(p,o)},
xU(a,b){var s=0,r=A.J(t.eM),q,p,o,n,m,l
var $async$xU=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:m=t.N
s=3
return A.r(a.$3$headers("GET",A.jB("https","openidconnect.googleapis.com","/v1/userinfo",null),A.S(["authorization","Bearer "+b],m,m)),$async$xU)
case 3:l=d
m=l.a
if(m===401)throw A.k(new A.hm())
if(m!==200)throw A.k(A.nT(m,"account check"))
p=t.f.a(B.z.bj(B.R.cb(l.b),null))
o=p.h(0,"email")
if(typeof o!="string"||o.length===0)throw A.k(A.nT(m,"account check"))
n=p.h(0,"hd")
if(typeof n=="string"&&n.length!==0){q=new A.iO(A.Gd(o))
s=1
break}q=new A.iP(A.vD(B.aH.O(B.F.O(B.b.I(o).toLowerCase())).a),A.Gd(o))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$xU,r)},
LE(a,b){var s=b.cy
if(s==null)return"The phone has not recorded SanthIQ's Google account yet."
if(s.a!==a.a)return"This is not SanthIQ's Google account ("+s.b+"). Sign in with that account."
return null},
LW(a,b){var s,r,q,p,o=new A.wh(a)
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
u7:function u7(){},
iJ:function iJ(){},
hn:function hn(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
hg:function hg(){},
iP:function iP(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
wh:function wh(a){this.a=a},
M8(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.a3($.L(),a5),b=A.D3(a0,a1,12,a5,a2,a4,a6),a=A.w(t.T,t.r9)
for(s=A.bE(b,0,t.wy),r=J.R(s.a),q=s.b,s=new A.as(r,q,A.o(s).i("as<1>")),p=t.B;s.n();){o=s.c
o=o>=0?new A.p(q+o,r.gt()):A.f(A.ai())
n=o.a
for(o=o.b.d.d,m=o.length,l=0;l<o.length;o.length===m||(0,A.l)(o),++l){k=o[l]
j=k.a
i=a.h(0,j)
if(i==null){i=A.iy(b.length,c,!1,p)
a.j(0,j,i)
j=i}else j=i
J.Ds(j,n,k.b)}}h=new A.xv(c,new A.xu(a3),a5)
s=a.$ti.i("ac<1,2>")
g=A.B(new A.ac(a,s),s.i("h.E"))
B.a.D(g,new A.xs(new A.xx(c)))
f=new A.xt(b)
s=t.s
r=A.b([],s)
for(n=b.length-1;n>=0;--n)r.push(f.$1(n))
q=A.b([],t.vk)
for(p=g.length,o=a0.d,m=t.N,j=t.G,l=0;l<g.length;g.length===p||(0,A.l)(g),++l){e=g[l]
i=e.a
if(i==null)d="No category yet"
else{d=A.a5(o,m,j).h(0,i)
d=d==null?null:d.c
d=A.hI(d==null?i:d)}q.push(h.$3$hue(d,e.b,A.CO(i)))}p=A.b([],t.g)
for(o=b.length,l=0;l<b.length;b.length===o||(0,A.l)(b),++l)p.push(b[l].d.a)
p=h.$2("Spent, after refunds",p)
o=A.b([],s)
for(j=A.F(b).i("aQ<1>"),i=new A.aQ(b,j),i=new A.a7(i,i.gq(0),j.i("a7<a2.E>")),j=j.i("a2.E");i.n();){d=i.d
d=(d==null?j.a(d):d).d.x
o.push(d===0?"":""+d)}s=A.b(["Each month in "+a5+", as the phone counts it; a refund lowers its category."],s)
m=A.a4(m)
for(j=b.length,l=0;l<b.length;b.length===j||(0,A.l)(b),++l)for(i=b[l].d.y,i=new A.cC(i,i.r,i.e,A.o(i).i("cC<1>"));i.n();)m.m(0,A.c(i.d))
return new A.j_(a5,r,q,p,o,s,m)},
dW:function dW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xu:function xu(a){this.a=a},
xv:function xv(a,b,c){this.a=a
this.b=b
this.c=c},
xw:function xw(){},
xx:function xx(a){this.a=a},
xy:function xy(){},
xs:function xs(a){this.a=a},
xt:function xt(a){this.a=a},
Ma(c0,c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5="currency",b6="is not a supported currency",b7=A.aF(c3.F(),B.q),b8=B.b.I(c1.e).toLowerCase(),b9=A.b([],t.A)
for(s=c0.mB(c1.b,c1.a),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=b8.length!==0,p=c1.r,o=p!=null,n=c1.f.a,m=c1.d,l=m!=null,k=c1.c,j=k!=null;s.n();){i=r.gt()
if(j&&i.w.l(0,k)<0)continue
if(l&&i.w.l(0,m)>0)continue
h=!0
switch(n){case 0:break
case 1:g=i.d
if(g!=null)h=(g===B.n||g===B.w)&&i.Q==null
break
case 2:h=A.jM(i)===B.am
break
case 3:h=i.d
if(h!=null)h=(h===B.n||h===B.w)&&i.Q==null
else h=!0
h=!h
break
default:h=b4}if(!h)continue
if(o){h=i.Q
h=(h==null?"-":h)!==p}else h=!1
if(h)continue
h=!1
if(q){g=i.z
if(g==null)g=""
if(!B.b.u(g.toLowerCase(),b8)){h=i.db
if(h==null)h=""
h=!B.b.u(h.toLowerCase(),b8)}}if(h)continue
B.a.m(b9,i)}s=new A.xC()
r=new A.xB(s)
switch(c1.w.a){case 0:s=new A.xD(s)
break
case 1:break
case 2:s=new A.xE(r)
break
case 3:s=r
break
default:s=b4}B.a.D(b9,s)
s=t.N
r=t.B
f=A.w(s,r)
e=A.w(s,r)
for(r=b9.length,d=0;q=b9.length,d<q;b9.length===r||(0,A.l)(b9),++d){c=b9[d]
b=c.e===B.m?f:e
q=c.f
p=q.b
o=b.h(0,p)
if(o==null){o=$.L()
n=new A.q(o,p)
a=B.e.h(0,p)
if(a==null)A.f(A.x(p,b5,b6))
if((o.b<=0?0:Math.max(o.gv().b,0))>a)A.f(A.z(p+" allows "+A.i(a)+" decimal places",o.k(0),b4))
o=n}n=o.b
if(p!==n)A.f(A.a8(n,p))
q=o.a.B(0,q.a)
a=B.e.h(0,n)
if(a==null)A.f(A.x(n,b5,b6))
if((q.b<=0?0:Math.max(q.gv().b,0))>a)A.f(A.z(n+" allows "+A.i(a)+" decimal places",q.k(0),b4))
b.j(0,p,new A.q(q,n))}a0=q===0?1:B.d.C(q+100-1,100)
a1=B.d.eV(c1.x,0,a0-1)
a2=new A.xA(c0)
r=b9.length
q=A.b([],t.s)
p=A.kY(new A.au(f,f.$ti.i("au<1>")),s)
p.a1(0,new A.au(e,e.$ti.i("au<1>")))
p=A.B(p,A.o(p).c)
B.a.D(p,A.Gx())
o=p.length
d=0
for(;d<p.length;p.length===o||(0,A.l)(p),++d){a3=p[d]
n=A.eh(a3)
m=f.h(0,a3)
if(m==null){m=$.L()
l=new A.q(m,a3)
a=B.e.h(0,a3)
if(a==null)A.f(A.x(a3,b5,b6))
if((m.b<=0?0:Math.max(m.gv().b,0))>a)A.f(A.z(a3+" allows "+A.i(a)+" decimal places",m.k(0),b4))
m=l}m=A.aN(m,c2)
l=e.h(0,a3)
if(l==null){l=$.L()
k=new A.q(l,a3)
a=B.e.h(0,a3)
if(a==null)A.f(A.x(a3,b5,b6))
if((l.b<=0?0:Math.max(l.gv().b,0))>a)A.f(A.z(a3+" allows "+A.i(a)+" decimal places",l.k(0),b4))
l=k}q.push(n+" ("+a3+"): "+m+" in, "+A.aN(l,c2)+" out")}p=A.b([],t.nS)
for(o=A.bz(b9,a1*100,b4,t.W).bh(0,100),n=o.$ti,o=new A.a7(o,o.gq(0),n.i("a7<a2.E>")),m=b7.a,n=n.i("a2.E"),l=c0.d,k=t.G;o.n();){j=o.d
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
a7=j.e===B.k?"\u2212":"+"
a8=A.aN(j.f,c2)
a9=j.d
b0=a9==null
if(b0)b1="Not filed yet"
else{b1=B.aB.h(0,a9)
b1.toString}b2=j.Q
b3=b2==null
if(!b3){a9=A.a5(l,s,k).h(0,b2)
a9=a9==null?b4:a9.c
a9=A.hI(a9==null?b2:a9)}else{if(!b0)a9=a9===B.n||a9===B.w
else a9=!1
a9=a9?"No category yet":""}b0=A.jM(j)===B.am?"Alert, not posted":""
j=j.db
if(j==null)j=""
b2=b3?b4:A.CO(b2)
p.push(new A.lI(b2,i,""+h.c+" "+g+a4,a5,a6,a7+a8,b1,a9,b0,j))}return new A.up(p,r,a1,a0,q)},
Gz(a){var s
A:{if("sms"===a){s="SMS alert"
break A}if("email"===a){s="Email alert"
break A}if("statement"===a){s="Statement transaction"
break A}if("manual"===a){s="Entered by you"
break A}if("operation"===a){s="Made in SanthIQ"
break A}s="Other source ("+a+")"
break A}return s},
Mb(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.b.a,c=d.h(0,b)
if(c==null)return e
s=A.aF(a1.F(),B.q)
r=new A.xF(a0)
q=t.s
p=A.b([],q)
for(o=c.c,n=a.hu(o,!0),m=J.R(n.a),n=new A.N(m,n.b,n.$ti.i("N<1>")),l=c.a,k=s.a;n.n();){j=m.gt()
if(j.cx===l){i=A.Gz(j.y.a)
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
p.push(i+", "+(""+j.c+" "+h+g))}}q=A.b([],q)
for(n=a.bI(o),m=J.R(n.a),n=new A.N(m,n.b,n.$ti.i("N<1>"));n.n();){j=m.gt()
if(j.ay===l&&j.d===B.H){i=A.i(r.$1(j.f))
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
q.push(i+" on "+(""+j.c+" "+h+g))}}n=c.ay
f=n==null?e:d.h(0,n)
d=c.w
n=A.cv(d,s)
m=c.x
d=m.J(0,d)?"":" ("+A.cv(m,s)+", Singapore date)"
o=new A.xG(a).$1(o)
m=c.z
if(m==null)m=""
k=c.e===B.k?"Money out":"Money in"
j=A.i(r.$1(c.f))
i=c.d
if(i==null)i="To file"
else{i=B.aB.h(0,i)
i.toString}i=A.b([new A.p("Date",n+d),new A.p("Account",o),new A.p("Payee",m),new A.p("Amount",k+", "+j),new A.p("Filed as",i)],t.I)
d=c.Q
if(d!=null){o=A.a5(a.d,t.N,t.G).h(0,d)
o=o==null?e:o.c
i.push(new A.p("Category",A.hI(o==null?d:o)))}d=c.as
if(d!=null)i.push(new A.p("For",A.AO(a,d)))
switch(A.jM(c)){case B.e1:d="Posted: a statement shows it"
break
case B.am:d="From an alert, no statement has posted it yet"
break
case null:case void 0:d=c.y.d?"Verified":"Not verified"
break
default:d=e}i.push(new A.p("State",d))
i.push(new A.p("Came from",A.Gz(c.y.a)))
if(p.length!==0)i.push(new A.p("The same payment, also as",B.a.Z(p,"; ")))
if(f!=null){d=f.z
if(d==null)d=""
i.push(new A.p("Refund of",d+" "+A.i(r.$1(f.f))+" on "+A.cv(f.w,s)))}if(q.length!==0)i.push(new A.p("Refunded",B.a.Z(q,"; ")))
if(A.a5(a.rx,t.N,t.y6).E(l))i.push(B.lE)
d=c.db
i.push(new A.p("Note",d==null?"":d))
return i},
e3:function e3(a,b,c){this.c=a
this.a=b
this.b=c},
e2:function e2(a,b,c){this.c=a
this.a=b
this.b=c},
cr:function cr(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lI:function lI(a,b,c,d,e,f,g,h,i,j){var _=this
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
up:function up(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xC:function xC(){},
xB:function xB(a){this.a=a},
xD:function xD(a){this.a=a},
xE:function xE(a){this.a=a},
xA:function xA(a){this.a=a},
xF:function xF(a){this.a=a},
xG:function xG(a){this.a=a},
GE(a){return v.mangledGlobalNames[a]},
mC(a){var s,r=$.bn()
for(s=a.length-1;s>=0;--s)r=r.b2(0,8).B(0,A.aC(a[s]))
return r},
LT(a,b){var s,r,q
for(s=a,r=0;r<32;++r){q=$.Hu()
s.toString
q=q.dr(0,s).b0(0)
b.$flags&2&&A.C(b)
if(!(r<32))return A.a(b,r)
b[r]=q
s=s.c4(0,8)}if(!J.Y(s,$.bn()))throw A.k(A.x(a,null,null))
return b},
wc(a){switch(B.d.R(a.length,4)){case 1:return B.B.O(a+"===")
case 2:return B.B.O(a+"==")
case 3:return B.B.O(a+"=")
default:return B.B.O(a)}},
mB(a){var s,r,q
t.D.i("bg.S").a(a)
s=B.eq.gaH().O(a)
r=s.length
for(;q=r-1,B.b.c5(s,"=",q);r=q);return B.b.X(s,0,r)},
yf(a,b,c){var s=0,r=A.J(t.l2),q
var $async$yf=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.decrypt(a,b,c)),t.i),$async$yf)
case 3:q=e
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$yf,r)},
mE(a,b,c){var s=0,r=A.J(t.p),q,p
var $async$mE=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.deriveBits(a,b,c)),t.i),$async$mE)
case 3:q=p.iI(e,0,null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mE,r)},
yh(a,b){var s=0,r=A.J(t.l2),q
var $async$yh=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.digest(a,b)),t.i),$async$yh)
case 3:q=d
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$yh,r)},
yr(a,b,c){var s=0,r=A.J(t.l2),q
var $async$yr=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.encrypt(a,b,c)),t.i),$async$yr)
case 3:q=e
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$yr,r)},
mG(a){var s=0,r=A.J(t.m),q,p
var $async$mG=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.exportKey("jwk",a)),t.X),$async$mG)
case 3:q=p.v(c)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mG,r)},
mH(a,b,c){var s=0,r=A.J(t.m),q,p
var $async$mH=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.generateKey(a,b,c)),t.X),$async$mH)
case 3:q=p.v(e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mH,r)},
jJ(a,b,c,d){var s=0,r=A.J(t.m),q,p
var $async$jJ=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.r(A.bK(A.FM(v.G.crypto.subtle,"importKey",["jwk",a,b,c,d],p),p),$async$jJ)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$jJ,r)},
hK(a,b,c,d){var s=0,r=A.J(t.m),q,p
var $async$hK=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.r(A.bK(A.FM(v.G.crypto.subtle,"importKey",["raw",a,b,c,d],p),p),$async$hK)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hK,r)},
bI(a){if(t.p.b(a))return a
return new Uint8Array(A.aK(a))},
mM(a,b,c){var s=0,r=A.J(t.p),q,p
var $async$mM=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.sign(a,b,c)),t.i),$async$mM)
case 3:q=p.iI(e,0,null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mM,r)},
BJ(a,b,c,d){var s=0,r=A.J(t.y),q
var $async$BJ=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bK(A.v(v.G.crypto.subtle.verify(a,b,c,d)),t.y),$async$BJ)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$BJ,r)},
k5(a,b,c,d,e,f){var s=0,r=A.J(t.m),q,p,o,n,m
var $async$k5=A.K(function(g,h){if(g===1)return A.G(h,r)
for(;;)switch(s){case 0:s=3
return A.r(a.cI(),$async$k5)
case 3:n=h
m=J.aE(n)
if(m!==e)throw A.k(A.It(m,e))
p=A.bI(n)
o=A.b([],t.s)
if(c)o.push("encrypt")
if(b)o.push("decrypt")
q=A.hK(p,f,!1,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$k5,r)},
It(a,b){return new A.ce(!1,null,null,"Secret key is "+a*8+" bits, expected "+b*8+" bits.")},
cb(e6,e7,e8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=65536,e5=e8.length
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
b4=B.d.C(b3,e4)
b5=c*r+b*s+38*(a*d+a0*e+a1*f+a2*g+a3*h+a4*i+a5*j+a6*k+a7*l+a8*m+a9*n+b0*o+b1*p+b2*q)+b4+65535
b6=B.d.C(b5,e4)
b7=c*q+b*r+a*s+38*(a0*d+a1*e+a2*f+a3*g+a4*h+a5*i+a6*j+a7*k+a8*l+a9*m+b0*n+b1*o+b2*p)+b6+65535
b8=B.d.C(b7,e4)
b9=c*p+b*q+a*r+a0*s+38*(a1*d+a2*e+a3*f+a4*g+a5*h+a6*i+a7*j+a8*k+a9*l+b0*m+b1*n+b2*o)+b8+65535
c0=B.d.C(b9,e4)
c1=c*o+b*p+a*q+a0*r+a1*s+38*(a2*d+a3*e+a4*f+a5*g+a6*h+a7*i+a8*j+a9*k+b0*l+b1*m+b2*n)+c0+65535
c2=B.d.C(c1,e4)
c3=c*n+b*o+a*p+a0*q+a1*r+a2*s+38*(a3*d+a4*e+a5*f+a6*g+a7*h+a8*i+a9*j+b0*k+b1*l+b2*m)+c2+65535
c4=B.d.C(c3,e4)
c5=c*m+b*n+a*o+a0*p+a1*q+a2*r+a3*s+38*(a4*d+a5*e+a6*f+a7*g+a8*h+a9*i+b0*j+b1*k+b2*l)+c4+65535
c6=B.d.C(c5,e4)
c7=c*l+b*m+a*n+a0*o+a1*p+a2*q+a3*r+a4*s+38*(a5*d+a6*e+a7*f+a8*g+a9*h+b0*i+b1*j+b2*k)+c6+65535
c8=B.d.C(c7,e4)
c9=c*k+b*l+a*m+a0*n+a1*o+a2*p+a3*q+a4*r+a5*s+38*(a6*d+a7*e+a8*f+a9*g+b0*h+b1*i+b2*j)+c8+65535
d0=B.d.C(c9,e4)
d1=c*j+b*k+a*l+a0*m+a1*n+a2*o+a3*p+a4*q+a5*r+a6*s+38*(a7*d+a8*e+a9*f+b0*g+b1*h+b2*i)+d0+65535
d2=B.d.C(d1,e4)
d3=c*i+b*j+a*k+a0*l+a1*m+a2*n+a3*o+a4*p+a5*q+a6*r+a7*s+38*(a8*d+a9*e+b0*f+b1*g+b2*h)+d2+65535
d4=B.d.C(d3,e4)
d5=c*h+b*i+a*j+a0*k+a1*l+a2*m+a3*n+a4*o+a5*p+a6*q+a7*r+a8*s+38*(a9*d+b0*e+b1*f+b2*g)+d4+65535
d6=B.d.C(d5,e4)
d7=c*g+b*h+a*i+a0*j+a1*k+a2*l+a3*m+a4*n+a5*o+a6*p+a7*q+a8*r+a9*s+38*(b0*d+b1*e+b2*f)+d6+65535
d8=B.d.C(d7,e4)
d9=c*f+b*g+a*h+a0*i+a1*j+a2*k+a3*l+a4*m+a5*n+a6*o+a7*p+a8*q+a9*r+b0*s+38*(b1*d+b2*e)+d8+65535
e0=B.d.C(d9,e4)
e1=c*e+b*f+a*g+a0*h+a1*i+a2*j+a3*k+a4*l+a5*m+a6*n+a7*o+a8*p+a9*q+b0*r+b1*s+38*(b2*d)+e0+65535
e2=B.d.C(e1,e4)
c=c*d+b*e+a*f+a0*g+a1*h+a2*i+a3*j+a4*k+a5*l+a6*m+a7*n+a8*o+a9*p+b0*q+b1*r+b2*s+e2+65535
e3=B.d.C(c,e4)
b=b3-b4*65536+38*(e3-1)+1+65535
b4=B.d.C(b,e4)
a=b5-b6*65536+b4+65535
b6=B.d.C(a,e4)
a0=b7-b8*65536+b6+65535
b8=B.d.C(a0,e4)
a1=b9-c0*65536+b8+65535
c0=B.d.C(a1,e4)
a2=c1-c2*65536+c0+65535
c2=B.d.C(a2,e4)
a3=c3-c4*65536+c2+65535
c4=B.d.C(a3,e4)
a4=c5-c6*65536+c4+65535
c6=B.d.C(a4,e4)
a5=c7-c8*65536+c6+65535
c8=B.d.C(a5,e4)
a6=c9-d0*65536+c8+65535
d0=B.d.C(a6,e4)
a7=d1-d2*65536+d0+65535
d2=B.d.C(a7,e4)
a8=d3-d4*65536+d2+65535
d4=B.d.C(a8,e4)
a9=d5-d6*65536+d4+65535
d6=B.d.C(a9,e4)
b0=d7-d8*65536+d6+65535
d8=B.d.C(b0,e4)
b1=d9-e0*65536+d8+65535
e0=B.d.C(b1,e4)
b2=e1-e2*65536+e0+65535
e2=B.d.C(b2,e4)
c=c-e3*65536+e2+65535
e3=B.d.C(c,e4)
e6.$flags&2&&A.C(e6)
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
Da(a){var s,r
try{s=J.eW(a)
if(s.gaz(a)===$.I2())s.aO(a,0,s.gq(a),0)}catch(r){}},
xI(a,b){var s,r=a.length,q=r-1,p=a.$flags|0
for(;;){if(!(b!==0&&q>=0))break
if(!(q>=0))return A.a(a,q)
s=a[q]+b
p&2&&A.C(a)
a[q]=s&255
b=s/256|0;--q}},
CR(a,b){var s,r,q,p,o,n,m=$.ei()
if(m){v.G.window.crypto.getRandomValues(a)
return}b=$.H_()
for(m=a.length,s=a.$flags|0,r=0;r<m;){q=r+3
p=r+1
if(q<m){o=b.cQ(4294967296)
s&2&&A.C(a)
a[r]=o>>>24
if(!(p<m))return A.a(a,p)
a[p]=o>>>16&255
n=r+2
if(!(n<m))return A.a(a,n)
a[n]=o>>>8&255
a[q]=o&255
r+=4}else{q=b.cQ(256)
s&2&&A.C(a)
a[r]=q
r=p}}},
aY(a){var s,r,q,p=a.d
if(p===B.x)return"Cash ("+a.e+")"
s=A.D("(\\d{4})$",!0,!1).aj(a.b)
if(s==null)r=null
else{s=s.b
if(1>=s.length)return A.a(s,1)
r=s[1]}q=a.dy
A:{if(B.bh===q){p="SRS"
break A}if(q instanceof A.dk){p=q.c+" "+A.i(B.dP.h(0,p))
break A}if(q==null){p=B.dP.h(0,p)
break A}p=null}s=r==null?"":" \u2022\u2022"+r
return a.c+" "+A.i(p)+s},
N8(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.b([],t.M)
for(s=a1.a7.aZ(B.bL),r=s.length,q=a1.c_,p=q.d,o=t.N,n=t.ud,m=0;m<s.length;s.length===r||(0,A.l)(s),++m){l=s[m]
k=l.c
j=A.m(k.h(0,"recordId"))
i=A.ay(k.h(0,"date"))
if(j==null||i==null)continue
h=q.gbE().h(0,j)
g=A.a5(p,o,n).h(0,j)
f=h==null
e=f?null:h.x
if(e==null)e=g==null?null:g.z
if(e!=null)d=i.a===e.a&&i.b===e.b&&i.c===e.c
else d=!0
if(d)continue
d=l.b
k=A.m(k.h(0,"text"))
c=i.k(0)
f=f?null:h.gcl()
if(f==null){f=g.e
b=f==null||f.length===0
a=g.b
f=b?g.c.c+", "+a:f+", "+a}B.a.m(a0,new A.W("memory:"+d,B.ad,d,'Memory "'+A.i(k)+'" says '+c+"; "+f+" says "+e.k(0)+". The register is kept; check which is right."))}return a0},
FO(a){var s,r,q=a.split(".")
if(q.length>1&&B.mr.u(0,B.a.gY(q))){s=q.length
if(0>=s)return A.a(q,0)
r=q[0]
if(1>=s)return A.a(q,1)
r=r+"."+q[1]
s=r}else s=B.a.gY(q)
return s},
CO(a){var s,r,q,p,o,n
if(a==null)return"amber"
s=A.FO(a)
r=A.FO(a)
if(!B.b.am(r,"owner.")&&B.dS.E(B.a.gak(r.split(".")))){q=B.dS.h(0,B.a.gak(s.split(".")))
q.toString
return q}for(q=new A.fR(s),p=t.sU,q=new A.a7(q,q.gq(0),p.i("a7<Q.E>")),p=p.i("Q.E"),o=0;q.n();){n=q.d
if(n==null)n=p.a(n)
o=o*31+n&2147483647}return B.jn[B.d.R(o,6)]},
Gw(a){var s=B.b.I(a),r=A.D("^\\d[\\d,]*(\\.\\d+)?$",!0,!1)
if(!r.b.test(s)||B.b.u(s,",."))return null
if(B.b.bH(B.a.gY(s.split(".")),","))return null
return A.ad(A.ao(s,",",""))},
FH(a){var s,r,q=B.b.I(a),p=A.D("\\D",!0,!1),o=A.ao(q,p,"")
p=B.a.gY(q.split("."))
s=A.D("\\D",!0,!1)
r=A.ao(p,s,"")
return!B.b.u(q,",")&&!B.b.u(q,".")&&o.length>=9||r.length>=13},
ax(a){var s,r,q=t.wL,p=A.B(new A.ah(A.b(a.split("-"),t.s),t.aY.a(A.Mq()),q),q.i("a2.E"))
q=p.length
if(0>=q)return A.a(p,0)
s=p[0]
if(1>=q)return A.a(p,1)
r=p[1]
if(2>=q)return A.a(p,2)
return new A.A(s,r,p[2])},
Gq(a){var s,r,q=A.D4(a)
if(q==null)return null
if(B.b.u(q,"\n")||B.b.u(q,"\r"))return"A note is one line."
if(q.length>200)return"A note is at most 200 characters."
s=$.Dp()
r=A.D("[\\s-]",!0,!1)
r=A.ao(q,r,"")
if(s.b.test(r))return"A note may not hold a full number (9 or more digits in a row)."
return null},
D4(a){var s=a==null?null:B.b.I(a)
return s==null||s.length===0?null:s},
Nw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="someone removed",f=A.b([],t.M)
for(s=a.c_,r=s.gt(),q=r.length,p=a.p3,o=t.N,n=t.o,m=0;m<r.length;r.length===q||(0,A.l)(r),++m){l=r[m]
if(l.b.d===!0&&l.x==null){k=l.a
j=l.gcl()
i=l.c
if(i==="me")i="Me"
else{i=A.a5(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-expiry:"+k,B.ad,k,j+" for "+i+" has no expiry date. Add it from the document so its reminders can start."))}}for(r=A.Er(s.c,o).a,r=A.ea(r,r.r,A.o(r).c),q=r.$ti.c;r.n();){k=r.d
if(k==null)k=q.a(k)
h=s.gbE().h(0,k)
if(h!=null){j=h.gcl()
i=h.c
if(i==="me")i="Me"
else{i=A.a5(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-source:"+k,B.ad,k,"The file of "+j+" for "+i+" was deleted from SanthIQ/Documents. The copy on this phone is kept."))}}return f},
hL(a){var s,r,q,p=a.toUpperCase()
for(s=0;s<8;++s){r=B.jS[s]
q=r.b
r=A.D(r.a,!0,!1)
if(r.b.test(p))return q}return B.b.I(a)},
hP(a,b,c,d,e,f,g){var s=0,r=A.J(t.p),q,p,o,n,m,l,k,j,i,h
var $async$hP=A.K(function(a0,a1){if(a0===1)return A.G(a1,r)
for(;;)switch(s){case 0:m=$.I5()
s=3
return A.r(m.aU(),$async$hP)
case 3:l=a1
s=4
return A.r(l.bw(),$async$hP)
case 4:k=a1.a
s=5
return A.r(m.b4(l,b),$async$hP)
case 5:j=a1
t.D.i("bg.S").a(k)
m=t.N
p=A.S(["formatVersion",1,"deviceId",c,"n",d,"ephemeral",B.L.gaH().O(k)],m,t.X)
m=B.F.O(B.z.be(A.S(["deviceId",c,"kind","statementPassword","accountId",a,"value",g,"createdAtUtc",e.F().dl()],m,m),null))
o=$.b7().cp()
o=$.b7().cM(o)
o=$.b7().cL(o,32)
n=A.B(k,t.S)
B.a.a1(n,b.a)
i=A
h=p
s=6
return A.r(o.aY(B.F.O("santhiq/sync/secret/v1"),n,j),$async$hP)
case 6:q=i.hR(h,a1,B.mL,m,f)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hP,r)},
jK(){var s=0,r=A.J(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$jK=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(A.MQ()){s=1
break}j=v.G
i=A.ar(A.v(j.document).querySelector("#app"))
i.toString
n=i
p=4
s=7
return A.r(A.bK(A.v(A.v(j.window).fetch("config.json",{cache:"no-store"})),t.m),$async$jK)
case 7:m=b
if(!A.cO(m.ok)){j=A.aq("config.json: HTTP "+A.i(A.CT(m,"status",t.S)))
throw A.k(j)}i=t.N
s=8
return A.r(A.bK(A.v(m.text()),i),$async$jK)
case 8:h=b
g=A.c(A.v(A.v(j.window).location).pathname)
l=A.Nu(h,A.c(A.v(A.v(j.window).location).origin)+B.b.X(g,0,B.b.f2(g,"/")+1))
k=new A.ld(A.O1(A.Nh()),A.Mp(),l,new A.kH(),B.bX,A.a4(i))
s=9
return A.r(k.ck(),$async$jK)
case 9:A.Ja(k).ad()
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
return A.I($async$jK,r)}},B={}
var w=[A,J,B]
var $={}
A.C9.prototype={}
J.kN.prototype={
J(a,b){return a===b},
gP(a){return A.c7(a)},
k(a){return"Instance of '"+A.lh(a)+"'"},
gaz(a){return A.dg(A.CG(this))}}
J.kP.prototype={
k(a){return String(a)},
gP(a){return a?519018:218159},
gaz(a){return A.dg(t.y)},
$iaA:1,
$ij:1}
J.h4.prototype={
J(a,b){return null==b},
k(a){return"null"},
gP(a){return 0},
$iaA:1,
$ibi:1}
J.iq.prototype={$ia6:1}
J.eu.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.lf.prototype={}
J.eN.prototype={}
J.dJ.prototype={
k(a){var s=a[$.GJ()]
if(s==null)s=a[$.Db()]
if(s==null)return this.ir(a)
return"JavaScript function for "+J.hV(s)},
$idy:1}
J.h5.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.h6.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.u.prototype={
dR(a,b){return new A.dp(a,A.F(a).i("@<1>").a3(b).i("dp<1,2>"))},
m(a,b){A.F(a).c.a(b)
a.$flags&1&&A.C(a,29)
a.push(b)},
ml(a,b,c){var s
A.F(a).c.a(c)
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.k(A.tH(b,null))
a.splice(b,0,c)},
mm(a,b,c){var s,r
A.F(a).i("h<1>").a(c)
a.$flags&1&&A.C(a,"insertAll",2)
A.Cj(b,0,a.length,"index")
if(!t.he.b(c))c=J.Ik(c)
s=J.aE(c)
a.length=a.length+s
r=b+s
this.aJ(a,r,a.length,a,b)
this.b9(a,b,r,c)},
bN(a,b){var s=A.F(a)
return new A.n(a,s.i("j(1)").a(b),s.i("n<1>"))},
a1(a,b){var s
A.F(a).i("h<1>").a(b)
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.iN(a,b)
return}for(s=J.R(b);s.n();)a.push(s.gt())},
iN(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.k(A.aI(a))
for(r=0;r<s;++r)a.push(b[r])},
ap(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
a2(a,b){var s,r
A.F(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.k(A.aI(a))}},
cN(a,b,c){var s=A.F(a)
return new A.ah(a,s.a3(c).i("1(2)").a(b),s.i("@<1>").a3(c).i("ah<1,2>"))},
Z(a,b){var s,r=A.iy(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.i(a[s]))
return r.join(b)},
cg(a){return this.Z(a,"")},
bh(a,b){return A.bz(a,0,A.cP(b,"count",t.S),A.F(a).c)},
ba(a,b){return A.bz(a,b,null,A.F(a).c)},
cS(a,b){var s,r,q
A.F(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.k(A.ai())
if(0>=s)return A.a(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.k(A.aI(a))}return r},
a4(a,b,c,d){var s,r,q
d.a(b)
A.F(a).a3(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.k(A.aI(a))}return r},
ma(a,b,c){var s,r,q,p=A.F(a)
p.i("j(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.k(A.aI(a))}p=c.$0()
return p},
mu(a,b,c){var s,r,q,p=A.F(a)
p.i("j(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=s-1;r>=0;--r){q=a[r]
if(b.$1(q))return q
if(s!==a.length)throw A.k(A.aI(a))}if(c!=null)return c.$0()
throw A.k(A.ai())},
ag(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
aK(a,b,c){if(b<0||b>a.length)throw A.k(A.aM(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.k(A.aM(c,b,a.length,"end",null))
if(b===c)return A.b([],A.F(a))
return A.b(a.slice(b,c),A.F(a))},
dB(a,b){return this.aK(a,b,null)},
dt(a,b,c){A.bR(b,c,a.length)
return A.bz(a,b,c,A.F(a).c)},
gY(a){if(a.length>0)return a[0]
throw A.k(A.ai())},
gak(a){var s=a.length
if(s>0)return a[s-1]
throw A.k(A.ai())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.a(a,0)
return a[0]}if(s===0)throw A.k(A.ai())
throw A.k(A.DY())},
aJ(a,b,c,d,e){var s,r,q,p,o
A.F(a).i("h<1>").a(d)
a.$flags&2&&A.C(a,5)
A.bR(b,c,a.length)
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.hU(d,e).cU(0,!1)
q=0}p=J.an(r)
if(q+s>p.gq(r))throw A.k(A.DX())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
b9(a,b,c,d){return this.aJ(a,b,c,d,0)},
aO(a,b,c,d){var s
A.F(a).i("1?").a(d)
a.$flags&2&&A.C(a,"fillRange")
A.bR(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
M(a,b){var s,r
A.F(a).i("j(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.k(A.aI(a))}return!1},
b6(a,b){var s,r
A.F(a).i("j(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.k(A.aI(a))}return!0},
gfd(a){return new A.aQ(a,A.F(a).i("aQ<1>"))},
D(a,b){var s,r,q,p,o,n=A.F(a)
n.i("d(1,1)?").a(b)
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.KY()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.b8()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fI(b,2))
if(p>0)this.kn(a,p)},
bb(a){return this.D(a,null)},
kn(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
by(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.Y(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.Y(a[s],b))return!0
return!1},
ga5(a){return a.length===0},
gaq(a){return a.length!==0},
k(a){return A.C7(a,"[","]")},
cU(a,b){var s=A.b(a.slice(0),A.F(a))
return s},
hL(a){return this.cU(a,!0)},
eb(a){return A.Ce(a,A.F(a).c)},
gA(a){return new J.f2(a,a.length,A.F(a).i("f2<1>"))},
gP(a){return A.c7(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.k(A.aM(b,0,null,"newLength",null))
if(b>a.length)A.F(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.k(A.yg(a,b))
return a[b]},
j(a,b,c){A.F(a).c.a(c)
a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.k(A.yg(a,b))
a[b]=c},
f_(a,b){var s
A.F(a).i("j(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaz(a){return A.dg(A.F(a))},
$ibw:1,
$iT:1,
$ih:1,
$iy:1}
J.kO.prototype={
n2(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lh(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.o2.prototype={}
J.f2.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.l(q)
throw A.k(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ial:1}
J.ff.prototype={
l(a,b){var s
A.vo(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdh(b)
if(this.gdh(a)===s)return 0
if(this.gdh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdh(a){return a===0?1/a<0:a<0},
b0(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.k(A.aB(""+a+".toInt()"))},
eT(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.k(A.aB(""+a+".ceil()"))},
mb(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.k(A.aB(""+a+".floor()"))},
e9(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.k(A.aB(""+a+".round()"))},
mV(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
eV(a,b,c){if(B.d.l(b,c)>0)throw A.k(A.eV(b))
if(this.l(a,b)<0)return b
if(this.l(a,c)>0)return c
return a},
bm(a,b){var s
if(b>20)throw A.k(A.aM(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gdh(a))return"-"+s
return s},
bL(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.k(A.aM(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.f(A.aB("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a0("0",o)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
R(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aA(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.h0(a,b)},
C(a,b){return(a|0)===a?a/b|0:this.h0(a,b)},
h0(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.k(A.aB("Result of truncating division is "+A.i(s)+": "+A.i(a)+" ~/ "+b))},
b2(a,b){if(b<0)throw A.k(A.eV(b))
return b>31?0:a<<b>>>0},
kG(a,b){return b>31?0:a<<b>>>0},
c4(a,b){var s
if(b<0)throw A.k(A.eV(b))
if(a>0)s=this.eK(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ao(a,b){var s
if(a>0)s=this.eK(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dM(a,b){if(0>b)throw A.k(A.eV(b))
return this.eK(a,b)},
eK(a,b){return b>31?0:a>>>b},
b8(a,b){return a>b},
gaz(a){return A.dg(t.fY)},
$ib0:1,
$iU:1,
$ibJ:1}
J.ip.prototype={
gbW(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.C(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaz(a){return A.dg(t.S)},
$iaA:1,
$id:1}
J.kQ.prototype={
gaz(a){return A.dg(t.pR)},
$iaA:1}
J.dI.prototype={
d7(a,b,c){var s=b.length
if(c>s)throw A.k(A.aM(c,0,s,null,null))
return new A.mp(b,a,c)},
aM(a,b){return this.d7(a,b,0)},
ht(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.k(A.aM(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.a(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.hq(c,a)},
bH(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
fc(a,b,c){A.Cj(0,0,a.length,"startIndex")
return A.D8(a,b,c,0)},
bR(a,b){var s
if(typeof b=="string")return A.b(a.split(b),t.s)
else{if(b instanceof A.et){s=b.e
s=!(s==null?b.e=b.jd():s)}else s=!1
if(s)return A.b(a.split(b.b),t.s)
else return this.jg(a,b)}},
hH(a,b,c,d){var s=A.bR(b,c,a.length)
return A.D9(a,b,s,d)},
jg(a,b){var s,r,q,p,o,n,m=A.b([],t.s)
for(s=J.Dt(b,a),s=s.gA(s),r=0,q=1;s.n();){p=s.gt()
o=p.gdz()
n=p.gcd()
q=n-o
if(q===0&&r===o)continue
B.a.m(m,this.X(a,r,o))
r=n}if(r<a.length||q>0)B.a.m(m,this.ae(a,r))
return m},
c5(a,b,c){var s
t.cL.a(b)
if(c<0||c>a.length)throw A.k(A.aM(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.Ih(b,a,c)!=null},
am(a,b){return this.c5(a,b,0)},
X(a,b,c){return a.substring(b,A.bR(b,c,a.length))},
ae(a,b){return this.X(a,b,null)},
I(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.IU(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.IV(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a0(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.k(B.eG)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ac(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a0(c,s)+a},
mI(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.a0(c,s)},
ce(a,b,c){var s=a.length
if(c>s)throw A.k(A.aM(c,0,s,null,null))
s=a.indexOf(b,c)
return s},
by(a,b){return this.ce(a,b,0)},
f2(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
u(a,b){return A.NS(a,b,0)},
l(a,b){var s
A.c(b)
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
gaz(a){return A.dg(t.N)},
gq(a){return a.length},
$ibw:1,
$iaA:1,
$ib0:1,
$ifn:1,
$ie:1}
A.jc.prototype={
m(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.L.a(b)
s=J.an(b)
r=s.gq(b)
if(r===0)return
q=i.a+r
p=i.b
o=p.length
if(o<q){n=q*2
if(n<1024)n=1024
else{m=n-1
m|=B.d.ao(m,1)
m|=m>>>2
m|=m>>>4
m|=m>>>8
n=((m|m>>>16)>>>0)+1}l=new Uint8Array(n)
B.i.b9(l,0,o,p)
i.b=l
p=l}if(t.p.b(b))B.i.b9(p,i.a,q,b)
else for(k=0;k<r;++k){p=i.b
o=i.a+k
j=s.h(b,k)
p.$flags&2&&A.C(p)
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=j}i.a=q},
hJ(){var s=this
if(s.a===0)return $.jP()
return new Uint8Array(A.aK(J.br(B.i.gab(s.b),s.b.byteOffset,s.a)))},
gq(a){return this.a},
$iBX:1}
A.hx.prototype={
m(a,b){var s
t.L.a(b)
s=t.p.b(b)?b:new Uint8Array(A.aK(b))
B.a.m(this.b,s)
this.a=this.a+s.length},
ff(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.jP()
s=l.b
r=s.length
if(r===1){if(0>=r)return A.a(s,0)
q=s[0]
l.a=0
B.a.ap(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.l)(s),++o,p=m){n=s[o]
m=p+n.length
B.i.b9(q,p,m,n)}l.a=0
B.a.ap(s)
return q},
hJ(){var s,r,q,p,o,n,m=this.a
if(m===0)return $.jP()
s=new Uint8Array(m)
for(m=this.b,r=m.length,q=0,p=0;p<m.length;m.length===r||(0,A.l)(m),++p,q=n){o=m[p]
n=q+o.length
B.i.b9(s,q,n,o)}return s},
gq(a){return this.a},
$iBX:1}
A.eO.prototype={
gA(a){return new A.i2(J.R(this.gbd()),A.o(this).i("i2<1,2>"))},
gq(a){return J.aE(this.gbd())},
ga5(a){return J.jU(this.gbd())},
gaq(a){return J.Dw(this.gbd())},
ba(a,b){var s=A.o(this)
return A.fP(J.hU(this.gbd(),b),s.c,s.y[1])},
bh(a,b){var s=A.o(this)
return A.fP(J.mS(this.gbd(),b),s.c,s.y[1])},
ag(a,b){return A.o(this).y[1].a(J.jT(this.gbd(),b))},
gY(a){return A.o(this).y[1].a(J.BT(this.gbd()))},
gak(a){return A.o(this).y[1].a(J.BU(this.gbd()))},
u(a,b){return J.Dv(this.gbd(),b)},
k(a){return J.hV(this.gbd())}}
A.i2.prototype={
n(){return this.a.n()},
gt(){return this.$ti.y[1].a(this.a.gt())},
$ial:1}
A.f5.prototype={
gbd(){return this.a}}
A.jd.prototype={$iT:1}
A.jb.prototype={
h(a,b){return this.$ti.y[1].a(J.at(this.a,b))},
j(a,b,c){var s=this.$ti
J.Ds(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.Ii(this.a,b)},
m(a,b){var s=this.$ti
J.bV(this.a,s.c.a(s.y[1].a(b)))},
D(a,b){var s
this.$ti.i("d(2,2)?").a(b)
s=b==null?null:new A.uL(this,b)
J.mR(this.a,s)},
dt(a,b,c){var s=this.$ti
return A.fP(J.Ig(this.a,b,c),s.c,s.y[1])},
aJ(a,b,c,d,e){var s=this.$ti
J.Ij(this.a,b,c,A.fP(s.i("h<2>").a(d),s.y[1],s.c),e)},
b9(a,b,c,d){return this.aJ(0,b,c,d,0)},
aO(a,b,c,d){var s=this.$ti
J.Id(this.a,b,c,s.c.a(s.i("2?").a(d)))},
$iT:1,
$iy:1}
A.uL.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("d(1,1)")}}
A.dp.prototype={
dR(a,b){return new A.dp(this.a,this.$ti.i("@<1>").a3(b).i("dp<1,2>"))},
gbd(){return this.a}}
A.f6.prototype={
G(a,b,c){return new A.f6(this.a,this.$ti.i("@<1,2>").a3(b).a3(c).i("f6<1,2,3,4>"))},
E(a){return this.a.E(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a_(a,b){return this.$ti.i("4?").a(this.a.a_(0,b))},
a2(a,b){this.a.a2(0,new A.nh(this,this.$ti.i("~(3,4)").a(b)))},
gah(){var s=this.$ti
return A.fP(this.a.gah(),s.c,s.y[2])},
gT(){var s=this.$ti
return A.fP(this.a.gT(),s.y[1],s.y[3])},
gq(a){var s=this.a
return s.gq(s)},
ga5(a){var s=this.a
return s.ga5(s)},
gaq(a){var s=this.a
return s.gaq(s)},
gbu(){return this.a.gbu().cN(0,new A.ng(this),this.$ti.i("ap<3,4>"))}}
A.nh.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.ng.prototype={
$1(a){var s=this.a.$ti
s.i("ap<1,2>").a(a)
return new A.ap(s.y[2].a(a.a),s.y[3].a(a.b),s.i("ap<3,4>"))},
$S(){return this.a.$ti.i("ap<3,4>(ap<1,2>)")}}
A.fk.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.fR.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.u3.prototype={}
A.T.prototype={}
A.a2.prototype={
gA(a){var s=this
return new A.a7(s,s.gq(s),A.o(s).i("a7<a2.E>"))},
ga5(a){return this.gq(this)===0},
gY(a){if(this.gq(this)===0)throw A.k(A.ai())
return this.ag(0,0)},
gak(a){var s=this
if(s.gq(s)===0)throw A.k(A.ai())
return s.ag(0,s.gq(s)-1)},
u(a,b){var s,r=this,q=r.gq(r)
for(s=0;s<q;++s){if(J.Y(r.ag(0,s),b))return!0
if(q!==r.gq(r))throw A.k(A.aI(r))}return!1},
M(a,b){var s,r,q=this
A.o(q).i("j(a2.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.ag(0,r)))return!0
if(s!==q.gq(q))throw A.k(A.aI(q))}return!1},
m9(a,b){var s,r,q,p=this
A.o(p).i("j(a2.E)").a(b)
s=p.gq(p)
for(r=0;r<s;++r){q=p.ag(0,r)
if(b.$1(q))return q
if(s!==p.gq(p))throw A.k(A.aI(p))}throw A.k(A.ai())},
Z(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.i(p.ag(0,0))
if(o!==p.gq(p))throw A.k(A.aI(p))
for(r=s,q=1;q<o;++q){r=r+b+A.i(p.ag(0,q))
if(o!==p.gq(p))throw A.k(A.aI(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.i(p.ag(0,q))
if(o!==p.gq(p))throw A.k(A.aI(p))}return r.charCodeAt(0)==0?r:r}},
cg(a){return this.Z(0,"")},
cN(a,b,c){var s=A.o(this)
return new A.ah(this,s.a3(c).i("1(a2.E)").a(b),s.i("@<a2.E>").a3(c).i("ah<1,2>"))},
cS(a,b){var s,r,q,p=this
A.o(p).i("a2.E(a2.E,a2.E)").a(b)
s=p.gq(p)
if(s===0)throw A.k(A.ai())
r=p.ag(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.ag(0,q))
if(s!==p.gq(p))throw A.k(A.aI(p))}return r},
a4(a,b,c,d){var s,r,q,p=this
d.a(b)
A.o(p).a3(d).i("1(1,a2.E)").a(c)
s=p.gq(p)
for(r=b,q=0;q<s;++q){r=c.$2(r,p.ag(0,q))
if(s!==p.gq(p))throw A.k(A.aI(p))}return r},
ba(a,b){return A.bz(this,b,null,A.o(this).i("a2.E"))},
bh(a,b){return A.bz(this,0,A.cP(b,"count",t.S),A.o(this).i("a2.E"))}}
A.fv.prototype={
iz(a,b,c,d){var s,r=this.b
A.bb(r,"start")
s=this.c
if(s!=null){A.bb(s,"end")
if(r>s)throw A.k(A.aM(r,0,s,"start",null))}},
gjz(){var s=J.aE(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkK(){var s=J.aE(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aE(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ag(a,b){var s=this,r=s.gkK()+b
if(b<0||r>=s.gjz())throw A.k(A.nV(b,s.gq(0),s,"index"))
return J.jT(s.a,r)},
ba(a,b){var s,r,q=this
A.bb(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ih(q.$ti.i("ih<1>"))
return A.bz(q.a,s,r,q.$ti.c)},
bh(a,b){var s,r,q,p=this
A.bb(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.bz(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.bz(p.a,r,q,p.$ti.c)}},
cU(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.an(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.E0(0,n):J.E_(0,n)}r=A.iy(s,m.ag(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.j(r,q,m.ag(n,o+q))
if(m.gq(n)<l)throw A.k(A.aI(p))}return r}}
A.a7.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.an(q),o=p.gq(q)
if(r.b!==o)throw A.k(A.aI(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ag(q,s);++r.c
return!0},
$ial:1}
A.c4.prototype={
gA(a){return new A.iA(J.R(this.a),this.b,A.o(this).i("iA<1,2>"))},
gq(a){return J.aE(this.a)},
ga5(a){return J.jU(this.a)},
gY(a){return this.b.$1(J.BT(this.a))},
gak(a){return this.b.$1(J.BU(this.a))},
ag(a,b){return this.b.$1(J.jT(this.a,b))}}
A.ie.prototype={$iT:1}
A.iA.prototype={
n(){var s=this,r=s.b
if(r.n()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ial:1}
A.ah.prototype={
gq(a){return J.aE(this.a)},
ag(a,b){return this.b.$1(J.jT(this.a,b))}}
A.n.prototype={
gA(a){return new A.N(J.R(this.a),this.b,this.$ti.i("N<1>"))}}
A.N.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$ial:1}
A.dw.prototype={
gA(a){return new A.fa(J.R(this.a),this.b,B.bp,this.$ti.i("fa<1,2>"))}}
A.fa.prototype={
gt(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
n(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.n();){q.d=null
if(s.n()){q.c=null
p=J.R(r.$1(s.gt()))
q.c=p}else return!1}q.d=q.c.gt()
return!0},
$ial:1}
A.fx.prototype={
gA(a){var s=this.a
return new A.j2(s.gA(s),this.b,A.o(this).i("j2<1>"))}}
A.ig.prototype={
gq(a){var s=this.a,r=s.gq(s)
s=this.b
if(B.d.b8(r,s))return s
return r},
$iT:1}
A.j2.prototype={
n(){if(--this.b>=0)return this.a.n()
this.b=-1
return!1},
gt(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gt()},
$ial:1}
A.dV.prototype={
ba(a,b){A.ek(b,"count",t.S)
A.bb(b,"count")
return new A.dV(this.a,this.b+b,A.o(this).i("dV<1>"))},
gA(a){var s=this.a
return new A.iZ(s.gA(s),this.b,A.o(this).i("iZ<1>"))}}
A.h0.prototype={
gq(a){var s=this.a,r=s.gq(s)-this.b
if(r>=0)return r
return 0},
ba(a,b){A.ek(b,"count",t.S)
A.bb(b,"count")
return new A.h0(this.a,this.b+b,this.$ti)},
$iT:1}
A.iZ.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gt(){return this.a.gt()},
$ial:1}
A.ih.prototype={
gA(a){return B.bp},
ga5(a){return!0},
gq(a){return 0},
gY(a){throw A.k(A.ai())},
gak(a){throw A.k(A.ai())},
ag(a,b){throw A.k(A.aM(b,0,0,"index",null))},
u(a,b){return!1},
ba(a,b){A.bb(b,"count")
return this},
bh(a,b){A.bb(b,"count")
return this}}
A.ii.prototype={
n(){return!1},
gt(){throw A.k(A.ai())},
$ial:1}
A.j8.prototype={
gA(a){return new A.j9(J.R(this.a),this.$ti.i("j9<1>"))}}
A.j9.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gt()))return!0
return!1},
gt(){return this.$ti.c.a(this.a.gt())},
$ial:1}
A.pg.prototype={
gey(){var s,r,q
for(s=this.a,s=A.ea(s,s.r,A.o(s).c),r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null)return q}return null},
ga5(a){return this.gey()==null},
gaq(a){return this.gey()!=null},
gY(a){var s=this.gey()
return s==null?A.f(A.ai()):s},
gA(a){var s=this.a
return new A.fm(A.ea(s,s.r,A.o(s).c),this.$ti.i("fm<1>"))}}
A.fm.prototype={
n(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gt(){var s=this.b
return s==null?A.f(A.ai()):s},
$ial:1}
A.dD.prototype={
gq(a){return J.aE(this.a)},
ga5(a){return J.jU(this.a)},
gaq(a){return J.Dw(this.a)},
gY(a){return new A.p(this.b,J.BT(this.a))},
ag(a,b){return new A.p(b+this.b,J.jT(this.a,b))},
u(a,b){return!1},
bh(a,b){A.ek(b,"count",t.S)
A.bb(b,"count")
return new A.dD(J.mS(this.a,b),this.b,A.o(this).i("dD<1>"))},
ba(a,b){A.ek(b,"count",t.S)
A.bb(b,"count")
return new A.dD(J.hU(this.a,b),b+this.b,A.o(this).i("dD<1>"))},
gA(a){return new A.as(J.R(this.a),this.b,A.o(this).i("as<1>"))}}
A.f9.prototype={
gak(a){var s,r=this.a,q=J.an(r),p=q.gq(r)
if(p<=0)throw A.k(A.ai())
s=q.gak(r)
if(p!==q.gq(r))throw A.k(A.aI(this))
return new A.p(p-1+this.b,s)},
u(a,b){return!1},
bh(a,b){A.ek(b,"count",t.S)
A.bb(b,"count")
return new A.f9(J.mS(this.a,b),this.b,this.$ti)},
ba(a,b){A.ek(b,"count",t.S)
A.bb(b,"count")
return new A.f9(J.hU(this.a,b),this.b+b,this.$ti)},
$iT:1}
A.as.prototype={
n(){if(++this.c>=0&&this.a.n())return!0
this.c=-2
return!1},
gt(){var s=this.c
return s>=0?new A.p(this.b+s,this.a.gt()):A.f(A.ai())},
$ial:1}
A.aV.prototype={
sq(a,b){throw A.k(A.aB("Cannot change the length of a fixed-length list"))},
m(a,b){A.aT(a).i("aV.E").a(b)
throw A.k(A.aB("Cannot add to a fixed-length list"))}}
A.cs.prototype={
j(a,b,c){A.o(this).i("cs.E").a(c)
throw A.k(A.aB("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.k(A.aB("Cannot change the length of an unmodifiable list"))},
m(a,b){A.o(this).i("cs.E").a(b)
throw A.k(A.aB("Cannot add to an unmodifiable list"))},
D(a,b){A.o(this).i("d(cs.E,cs.E)?").a(b)
throw A.k(A.aB("Cannot modify an unmodifiable list"))},
aJ(a,b,c,d,e){A.o(this).i("h<cs.E>").a(d)
throw A.k(A.aB("Cannot modify an unmodifiable list"))},
b9(a,b,c,d){return this.aJ(0,b,c,d,0)},
aO(a,b,c,d){A.o(this).i("cs.E?").a(d)
throw A.k(A.aB("Cannot modify an unmodifiable list"))}}
A.hs.prototype={}
A.aQ.prototype={
gq(a){return J.aE(this.a)},
ag(a,b){var s=this.a,r=J.an(s)
return r.ag(s,r.gq(s)-1-b)}}
A.jD.prototype={}
A.p.prototype={$r:"+(1,2)",$s:1}
A.ec.prototype={$r:"+days,months(1,2)",$s:2}
A.jk.prototype={$r:"+end,loans(1,2)",$s:3}
A.hz.prototype={$r:"+month,year(1,2)",$s:4}
A.bB.prototype={$r:"+(1,2,3)",$s:5}
A.jl.prototype={$r:"+accountId,from,to(1,2,3)",$s:6}
A.eP.prototype={$r:"+(1,2,3,4)",$s:8}
A.jm.prototype={$r:"+complete,month,spent,year(1,2,3,4)",$s:9}
A.jn.prototype={$r:"+(1,2,3,4,5)",$s:10}
A.jo.prototype={$r:"+date,eventId,hash,n,removed(1,2,3,4,5)",$s:11}
A.jp.prototype={$r:"+instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type(1,2,3,4,5,6,7,8)",$s:12}
A.i3.prototype={}
A.fS.prototype={
G(a,b,c){var s=A.o(this)
return A.Ea(this,s.c,s.y[1],b,c)},
ga5(a){return this.gq(this)===0},
gaq(a){return this.gq(this)!==0},
k(a){return A.Cg(this)},
j(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.DJ()},
a_(a,b){A.DJ()},
gbu(){return new A.de(this.m_(),A.o(this).i("de<ap<1,2>>"))},
m_(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gbu(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gah(),o=o.gA(o),n=A.o(s),m=n.y[1],n=n.i("ap<1,2>")
case 2:if(!o.n()){r=3
break}l=o.gt()
k=s.h(0,l)
r=4
return a.b=new A.ap(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iae:1}
A.aU.prototype={
gq(a){return this.b.length},
gfQ(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
E(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.E(b))return null
return this.b[this.a[b]]},
a2(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfQ()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gah(){return new A.fB(this.gfQ(),this.$ti.i("fB<1>"))},
gT(){return new A.fB(this.b,this.$ti.i("fB<2>"))}}
A.fB.prototype={
gq(a){return this.a.length},
ga5(a){return 0===this.a.length},
gaq(a){return 0!==this.a.length},
gA(a){var s=this.a
return new A.e9(s,s.length,this.$ti.i("e9<1>"))}}
A.e9.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ial:1}
A.cl.prototype={
bS(){var s=this,r=s.$map
if(r==null){r=new A.fg(s.$ti.i("fg<1,2>"))
A.FU(s.a,r)
s.$map=r}return r},
E(a){return this.bS().E(a)},
h(a,b){return this.bS().h(0,b)},
a2(a,b){this.$ti.i("~(1,2)").a(b)
this.bS().a2(0,b)},
gah(){var s=this.bS()
return new A.au(s,A.o(s).i("au<1>"))},
gT(){var s=this.bS()
return new A.M(s,A.o(s).i("M<2>"))},
gq(a){return this.bS().a}}
A.fT.prototype={
m(a,b){A.o(this).c.a(b)
A.DK()},
a1(a,b){A.o(this).i("h<1>").a(b)
A.DK()}}
A.cx.prototype={
gq(a){return this.b},
ga5(a){return this.b===0},
gaq(a){return this.b!==0},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.e9(s,s.length,r.$ti.i("e9<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cZ.prototype={
gq(a){return this.a.length},
ga5(a){return this.a.length===0},
gaq(a){return this.a.length!==0},
gA(a){var s=this.a
return new A.e9(s,s.length,this.$ti.i("e9<1>"))},
bS(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.fg(o.$ti.i("fg<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
n.j(0,p,p)}o.$map=n}return n},
u(a,b){return this.bS().E(b)}}
A.kK.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.fc&&this.a.J(0,b.a)&&A.CU(this)===A.CU(b)},
gP(a){return A.by(this.a,A.CU(this),B.t,B.t)},
k(a){var s=B.a.Z([A.dg(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.fc.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.MV(A.xV(this.a),this.$ti)}}
A.iV.prototype={}
A.uq.prototype={
bz(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.iM.prototype={
k(a){return"Null check operator used on a null value"}}
A.kR.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lK.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pi.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ij.prototype={}
A.jr.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ieI:1}
A.bN.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.GF(r==null?"unknown":r)+"'"},
$idy:1,
gnd(){return this},
$C:"$1",
$R:1,
$D:null}
A.kc.prototype={$C:"$0",$R:0}
A.kd.prototype={$C:"$2",$R:2}
A.lF.prototype={}
A.lC.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.GF(s)+"'"}}
A.fN.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fN))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.D5(this.a)^A.c7(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lh(this.a)+"'")}}
A.lr.prototype={
k(a){return"RuntimeError: "+this.a}}
A.cB.prototype={
gq(a){return this.a},
ga5(a){return this.a===0},
gaq(a){return this.a!==0},
gah(){return new A.au(this,A.o(this).i("au<1>"))},
gT(){return new A.M(this,A.o(this).i("M<2>"))},
gbu(){return new A.ac(this,A.o(this).i("ac<1,2>"))},
E(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mn(a)},
mn(a){var s=this.d
if(s==null)return!1
return this.dg(this.fM(s,a),a)>=0},
a1(a,b){A.o(this).i("ae<1,2>").a(b).a2(0,new A.o4(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mo(b)},
mo(a){var s,r,q=this.d
if(q==null)return null
s=this.fM(q,a)
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fv(s==null?q.b=q.eC():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fv(r==null?q.c=q.eC():r,b,c)}else q.mq(b,c)},
mq(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.eC()
r=o.e3(a)
q=s[r]
if(q==null)s[r]=[o.eD(a,b)]
else{p=o.dg(q,a)
if(p>=0)q[p].b=b
else q.push(o.eD(a,b))}},
aI(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.E(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
a_(a,b){var s=this
if(typeof b=="string")return s.fW(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fW(s.c,b)
else return s.mp(b)},
mp(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.e3(a)
r=n[s]
q=o.dg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.h4(p)
if(r.length===0)delete n[s]
return p.b},
ap(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eB()}},
a2(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.k(A.aI(q))
s=s.c}},
fv(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.eD(b,c)
else s.b=c},
fW(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.h4(s)
delete a[b]
return s.b},
eB(){this.r=this.r+1&1073741823},
eD(a,b){var s=this,r=A.o(s),q=new A.p5(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.eB()
return q},
h4(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.eB()},
e3(a){return J.c0(a)&1073741823},
fM(a,b){return a[this.e3(b)]},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
k(a){return A.Cg(this)},
eC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iCc:1}
A.o4.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.p5.prototype={}
A.au.prototype={
gq(a){return this.a.a},
ga5(a){return this.a.a===0},
gA(a){var s=this.a
return new A.cC(s,s.r,s.e,this.$ti.i("cC<1>"))},
u(a,b){return this.a.E(b)}}
A.cC.prototype={
gt(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ial:1}
A.M.prototype={
gq(a){return this.a.a},
ga5(a){return this.a.a===0},
gA(a){var s=this.a
return new A.a1(s,s.r,s.e,this.$ti.i("a1<1>"))}}
A.a1.prototype={
gt(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ial:1}
A.ac.prototype={
gq(a){return this.a.a},
ga5(a){return this.a.a===0},
gA(a){var s=this.a
return new A.iw(s,s.r,s.e,this.$ti.i("iw<1,2>"))}}
A.iw.prototype={
gt(){var s=this.d
s.toString
return s},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.ap(s.a,s.b,r.$ti.i("ap<1,2>"))
r.c=s.c
return!0}},
$ial:1}
A.fg.prototype={
e3(a){return A.Ml(a)&1073741823},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1}}
A.zg.prototype={
$1(a){return this.a(a)},
$S:87}
A.zh.prototype={
$2(a,b){return this.a(a,b)},
$S:255}
A.zi.prototype={
$1(a){return this.a(A.c(a))},
$S:100}
A.bk.prototype={
k(a){return this.h3(!1)},
h3(a){var s,r,q,p,o,n=this.jC(),m=this.dI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.Eh(o):l+A.i(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jC(){var s,r=this.$s
while($.v9.length<=r)B.a.m($.v9,null)
s=$.v9[r]
if(s==null){s=this.jc()
B.a.j($.v9,r,s)}return s},
jc(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.DZ(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.j(j,q,r[s])}}return A.aD(j,k)}}
A.eb.prototype={
dI(){return[this.a,this.b]},
J(a,b){if(b==null)return!1
return b instanceof A.eb&&this.$s===b.$s&&J.Y(this.a,b.a)&&J.Y(this.b,b.b)},
gP(a){return A.by(this.$s,this.a,this.b,B.t)}}
A.fE.prototype={
dI(){return[this.a,this.b,this.c]},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.fE&&s.$s===b.$s&&J.Y(s.a,b.a)&&J.Y(s.b,b.b)&&J.Y(s.c,b.c)},
gP(a){var s=this
return A.by(s.$s,s.a,s.b,s.c)}}
A.dd.prototype={
dI(){return this.a},
J(a,b){if(b==null)return!1
return b instanceof A.dd&&this.$s===b.$s&&A.K2(this.a,b.a)},
gP(a){return A.by(this.$s,A.Ec(this.a),B.t,B.t)}}
A.et.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfS(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.C8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gk8(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.C8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
jd(){var s,r=this.a
if(!B.b.u(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
aj(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hy(s)},
me(a){A.c(a)
return this.b.test(a)},
d7(a,b,c){var s=b.length
if(c>s)throw A.k(A.aM(c,0,s,null,null))
return new A.lO(this,b,c)},
aM(a,b){return this.d7(0,b,0)},
fL(a,b){var s,r=this.gfS()
if(r==null)r=A.df(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hy(s)},
jA(a,b){var s,r=this.gk8()
if(r==null)r=A.df(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hy(s)},
ht(a,b,c){if(c<0||c>b.length)throw A.k(A.aM(c,0,b.length,null,null))
return this.jA(b,c)},
$ifn:1,
$itQ:1}
A.hy.prototype={
gdz(){return this.b.index},
gcd(){var s=this.b
return s.index+s[0].length},
du(a){var s=this.b
if(!(a<s.length))return A.a(s,a)
return s[a]},
h(a,b){var s=this.b
if(!(b<s.length))return A.a(s,b)
return s[b]},
$icE:1,
$iiS:1}
A.lO.prototype={
gA(a){return new A.fz(this.a,this.b,this.c)}}
A.fz.prototype={
gt(){var s=this.d
return s==null?t.ez.a(s):s},
n(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fL(l,s)
if(p!=null){m.d=p
o=p.gcd()
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
$ial:1}
A.hq.prototype={
gcd(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.k(A.tH(b,null))
return this.c},
du(a){if(a!==0)A.f(A.tH(a,null))
return this.c},
$icE:1,
gdz(){return this.a}}
A.mp.prototype={
gA(a){return new A.mq(this.a,this.b,this.c)},
gY(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hq(r,s)
throw A.k(A.ai())}}
A.mq.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hq(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$ial:1}
A.lW.prototype={
cz(){var s=this.b
if(s===this)throw A.k(new A.fk("Local '"+this.a+"' has not been initialized."))
return s},
bi(){var s=this.b
if(s===this)throw A.k(A.E6(this.a))
return s}}
A.ex.prototype={
gaz(a){return B.mV},
cD(a,b,c){A.jE(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
h9(a){return this.cD(a,0,null)},
eS(a,b,c){A.jE(a,b,c)
if(c==null)c=B.d.C(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
dP(a,b,c){A.jE(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
h8(a){return this.dP(a,0,null)},
$iaA:1,
$iex:1,
$ii1:1}
A.he.prototype={$ihe:1}
A.iE.prototype={
gab(a){if(((a.$flags|0)&2)!==0)return new A.mt(a.buffer)
else return a.buffer},
jT(a,b,c,d){var s=A.aM(b,0,c,d,null)
throw A.k(s)},
fD(a,b,c,d){if(b>>>0!==b||b>c)this.jT(a,b,c,d)}}
A.mt.prototype={
cD(a,b,c){var s=A.iI(this.a,b,c)
s.$flags=3
return s},
h9(a){return this.cD(0,0,null)},
eS(a,b,c){var s=A.J7(this.a,b,c)
s.$flags=3
return s},
dP(a,b,c){var s=A.J2(this.a,b,c)
s.$flags=3
return s},
h8(a){return this.dP(0,0,null)},
$ii1:1}
A.iC.prototype={
gaz(a){return B.mW},
$iaA:1,
$iDF:1}
A.bx.prototype={
gq(a){return a.length},
h_(a,b,c,d,e){var s,r,q=a.length
this.fD(a,b,q,"start")
this.fD(a,c,q,"end")
if(b>c)throw A.k(A.aM(b,0,c,null,null))
s=c-b
if(e<0)throw A.k(A.b2(e,null))
r=d.length
if(r-e<s)throw A.k(A.aq("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibw:1,
$ic3:1}
A.ey.prototype={
h(a,b){A.ee(b,a,a.length)
return a[b]},
j(a,b,c){A.CD(c)
a.$flags&2&&A.C(a)
A.ee(b,a,a.length)
a[b]=c},
aJ(a,b,c,d,e){t.oJ.a(d)
a.$flags&2&&A.C(a,5)
if(t.Eg.b(d)){this.h_(a,b,c,d,e)
return}this.fp(a,b,c,d,e)},
b9(a,b,c,d){return this.aJ(a,b,c,d,0)},
$iT:1,
$ih:1,
$iy:1}
A.c5.prototype={
j(a,b,c){A.O(c)
a.$flags&2&&A.C(a)
A.ee(b,a,a.length)
a[b]=c},
aJ(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.C(a,5)
if(t.Ag.b(d)){this.h_(a,b,c,d,e)
return}this.fp(a,b,c,d,e)},
b9(a,b,c,d){return this.aJ(a,b,c,d,0)},
$iT:1,
$ih:1,
$iy:1}
A.l0.prototype={
gaz(a){return B.mX},
aK(a,b,c){return new Float32Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1}
A.l1.prototype={
gaz(a){return B.mY},
aK(a,b,c){return new Float64Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1}
A.l2.prototype={
gaz(a){return B.mZ},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Int16Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1}
A.iD.prototype={
gaz(a){return B.n_},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Int32Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1,
$ikL:1}
A.l3.prototype={
gaz(a){return B.n0},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Int8Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1}
A.iF.prototype={
gaz(a){return B.n5},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint16Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1,
$iCp:1}
A.iG.prototype={
gaz(a){return B.n6},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint32Array(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1,
$ius:1}
A.iH.prototype={
gaz(a){return B.n7},
gq(a){return a.length},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.eS(b,c,a.length)))},
$iaA:1}
A.fl.prototype={
gaz(a){return B.ej},
gq(a){return a.length},
h(a,b){A.ee(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint8Array(a.subarray(b,A.eS(b,c,a.length)))},
dB(a,b){return this.aK(a,b,null)},
$iaA:1,
$ifl:1,
$ie6:1}
A.jg.prototype={}
A.jh.prototype={}
A.ji.prototype={}
A.jj.prototype={}
A.cH.prototype={
i(a){return A.jw(v.typeUniverse,this,a)},
a3(a){return A.EY(v.typeUniverse,this,a)}}
A.ma.prototype={}
A.ms.prototype={
k(a){return A.bT(this.a,null)}}
A.m9.prototype={
k(a){return this.a}}
A.hB.prototype={$ie4:1}
A.uA.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:93}
A.uz.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:218}
A.uB.prototype={
$0(){this.a.$0()},
$S:32}
A.uC.prototype={
$0(){this.a.$0()},
$S:32}
A.js.prototype={
iB(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.fI(new A.vd(this,b),0),a)
else throw A.k(A.aB("`setTimeout()` not found."))},
iC(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.fI(new A.vc(this,a,Date.now(),b),0),a)
else throw A.k(A.aB("Periodic timer."))},
hc(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.k(A.aB("Canceling a timer."))},
$ilG:1}
A.vd.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.vc.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.aA(s,o)}q.c=p
r.d.$1(q)},
$S:32}
A.lP.prototype={
cG(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bp(a)
else{s=r.a
if(q.i("ba<1>").b(a))s.fC(a)
else s.eq(a)}},
eW(a,b){var s=this.a
if(this.b)s.d0(new A.bW(a,b))
else s.ek(new A.bW(a,b))}}
A.vp.prototype={
$1(a){return this.a.$2(0,a)},
$S:43}
A.vq.prototype={
$2(a,b){this.a.$2(1,new A.ij(a,t.l.a(b)))},
$S:202}
A.vW.prototype={
$2(a,b){this.a(A.O(a),b)},
$S:196}
A.ed.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
kq(a,b){var s,r,q
a=A.O(a)
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
o.d=null}q=o.kq(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.ES
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
o.a=A.ES
throw n
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=1
continue}throw A.k(A.aq("sync*"))}return!1},
nf(a){var s,r,q=this
if(a instanceof A.de){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.R(a)
return 2}},
$ial:1}
A.de.prototype={
gA(a){return new A.ed(this.a(),this.$ti.i("ed<1>"))}}
A.bW.prototype={
k(a){return A.i(this.a)},
$iaG:1,
gcq(){return this.b}}
A.nQ.prototype={
$0(){this.c.a(null)
this.b.fH(null)},
$S:0}
A.lX.prototype={
eW(a,b){var s=this.a
if((s.a&30)!==0)throw A.k(A.aq("Future already completed"))
s.ek(A.KX(a,b))},
dS(a){return this.eW(a,null)}}
A.cN.prototype={
cG(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.k(A.aq("Future already completed"))
s.bp(r.i("1/").a(a))},
lk(){return this.cG(null)}}
A.e8.prototype={
mx(a){if((this.c&15)!==6)return!0
return this.b.b.fe(t.bl.a(this.d),a.a,t.y,t.K)},
md(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mW(q,m,a.b,o,n,t.l)
else p=l.fe(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.aw(s))){if((r.c&1)!==0)throw A.k(A.b2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.k(A.b2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.am.prototype={
ea(a,b,c){var s,r,q,p=this.$ti
p.a3(c).i("1/(2)").a(a)
s=$.ak
if(s===B.W){if(b!=null&&!t.nW.b(b)&&!t.h_.b(b))throw A.k(A.x(b,"onError",u.w))}else{c.i("@<0/>").a3(p.c).i("1(2)").a(a)
if(b!=null)b=A.Lr(b,s)}r=new A.am(s,c.i("am<0>"))
q=b==null?1:3
this.dD(new A.e8(r,q,a,b,p.i("@<1>").a3(c).i("e8<1,2>")))
return r},
mZ(a,b){return this.ea(a,null,b)},
h2(a,b,c){var s,r=this.$ti
r.a3(c).i("1/(2)").a(a)
s=new A.am($.ak,c.i("am<0>"))
this.dD(new A.e8(s,19,a,b,r.i("@<1>").a3(c).i("e8<1,2>")))
return s},
kE(a){this.a=this.a&1|16
this.c=a},
dG(a){this.a=a.a&30|this.a&1
this.c=a.c},
dD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.f7.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dD(a)
return}r.dG(s)}A.my(null,null,r.b,t.O.a(new A.uQ(r,a)))}},
fU(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.f7.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fU(a)
return}m.dG(n)}l.a=m.dK(a)
A.my(null,null,m.b,t.O.a(new A.uV(l,m)))}},
d5(){var s=t.f7.a(this.c)
this.c=null
return this.dK(s)},
dK(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fH(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("ba<1>").b(a))A.uT(a,r,!0)
else{s=r.d5()
q.c.a(a)
r.a=8
r.c=a
A.fA(r,s)}},
eq(a){var s,r=this
r.$ti.c.a(a)
s=r.d5()
r.a=8
r.c=a
A.fA(r,s)},
jb(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.d5()
q.dG(a)
A.fA(q,r)},
d0(a){var s=this.d5()
this.kE(a)
A.fA(this,s)},
bp(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ba<1>").b(a)){this.fC(a)
return}this.iR(a)},
iR(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.my(null,null,s.b,t.O.a(new A.uS(s,a)))},
fC(a){A.uT(this.$ti.i("ba<1>").a(a),this,!1)
return},
ek(a){this.a^=2
A.my(null,null,this.b,t.O.a(new A.uR(this,a)))},
n_(a,b){var s,r,q=this,p={},o=q.$ti
o.i("1/()?").a(b)
if((q.a&24)!==0){p=new A.am($.ak,o)
p.bp(q)
return p}s=$.ak
r=new A.am(s,o)
p.a=null
p.a=A.Ex(a,new A.v0(q,r,s,o.i("1/()").a(b)))
q.ea(new A.v1(p,q,r),new A.v2(p,r),t.aU)
return r},
$iba:1}
A.uQ.prototype={
$0(){A.fA(this.a,this.b)},
$S:0}
A.uV.prototype={
$0(){A.fA(this.b,this.a.a)},
$S:0}
A.uU.prototype={
$0(){A.uT(this.a.a,this.b,!0)},
$S:0}
A.uS.prototype={
$0(){this.a.eq(this.b)},
$S:0}
A.uR.prototype={
$0(){this.a.d0(this.b)},
$S:0}
A.uY.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.hI(t.pF.a(q.d),t.z)}catch(p){s=A.aw(p)
r=A.eX(p)
if(k.c&&t.Fq.a(k.b.a.c).a===s){q=k.a
q.c=t.Fq.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.n1(q)
n=k.a
n.c=new A.bW(q,o)
q=n}q.b=!0
return}if(j instanceof A.am&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.Fq.a(j.c)
q.b=!0}return}if(j instanceof A.am){m=k.b.a
l=new A.am(m.b,m.$ti)
j.ea(new A.uZ(l,m),new A.v_(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uZ.prototype={
$1(a){this.a.jb(this.b)},
$S:93}
A.v_.prototype={
$2(a,b){A.df(a)
t.l.a(b)
this.a.d0(new A.bW(a,b))},
$S:88}
A.uX.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fe(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aw(l)
r=A.eX(l)
q=s
p=r
if(p==null)p=A.n1(q)
o=this.a
o.c=new A.bW(q,p)
o.b=!0}},
$S:0}
A.uW.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.Fq.a(l.a.a.c)
p=l.b
if(p.a.mx(s)&&p.a.e!=null){p.c=p.a.md(s)
p.b=!1}}catch(o){r=A.aw(o)
q=A.eX(o)
p=t.Fq.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.n1(p)
m=l.b
m.c=new A.bW(p,n)
p=m}p.b=!0}},
$S:0}
A.v0.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.fH(n.c.hI(n.d,n.a.$ti.i("1/")))}catch(q){s=A.aw(q)
r=A.eX(q)
p=s
o=r
if(o==null)o=A.n1(p)
n.b.d0(new A.bW(p,o))}},
$S:0}
A.v1.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.hc()
this.c.eq(a)}},
$S(){return this.b.$ti.i("bi(1)")}}
A.v2.prototype={
$2(a,b){var s
A.df(a)
t.l.a(b)
s=this.a.a
if(s.b!=null){s.hc()
this.b.d0(new A.bW(a,b))}},
$S:88}
A.lQ.prototype={}
A.mo.prototype={}
A.jC.prototype={$iED:1}
A.mi.prototype={
mX(a){var s,r,q
t.O.a(a)
try{if(B.W===$.ak){a.$0()
return}A.Fs(null,null,this,a,t.H)}catch(q){s=A.aw(q)
r=A.eX(q)
A.vM(A.df(s),t.l.a(r))}},
mY(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.W===$.ak){a.$1(b)
return}A.Ft(null,null,this,a,b,t.H,c)}catch(q){s=A.aw(q)
r=A.eX(q)
A.vM(A.df(s),t.l.a(r))}},
ha(a){return new A.va(this,t.O.a(a))},
la(a,b){return new A.vb(this,b.i("~(0)").a(a),b)},
hI(a,b){b.i("0()").a(a)
if($.ak===B.W)return a.$0()
return A.Fs(null,null,this,a,b)},
fe(a,b,c,d){c.i("@<0>").a3(d).i("1(2)").a(a)
d.a(b)
if($.ak===B.W)return a.$1(b)
return A.Ft(null,null,this,a,b,c,d)},
mW(a,b,c,d,e,f){d.i("@<0>").a3(e).a3(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ak===B.W)return a.$2(b,c)
return A.Ls(null,null,this,a,b,c,d,e,f)},
hF(a,b,c,d){return b.i("@<0>").a3(c).a3(d).i("1(2,3)").a(a)}}
A.va.prototype={
$0(){return this.a.mX(this.b)},
$S:0}
A.vb.prototype={
$1(a){var s=this.c
return this.a.mY(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.vN.prototype={
$0(){A.IH(this.a,this.b)},
$S:0}
A.dc.prototype={
gA(a){var s=this,r=new A.fC(s,s.r,A.o(s).i("fC<1>"))
r.c=s.e
return r},
gq(a){return this.a},
ga5(a){return this.a===0},
gaq(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.je(b)},
je(a){var s=this.d
if(s==null)return!1
return this.ex(s[this.er(a)],a)>=0},
gY(a){var s=this.e
if(s==null)throw A.k(A.aq("No elements"))
return A.o(this).c.a(s.a)},
gak(a){var s=this.f
if(s==null)throw A.k(A.aq("No elements"))
return A.o(this).c.a(s.a)},
m(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fE(s==null?q.b=A.Cw():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fE(r==null?q.c=A.Cw():r,b)}else return q.iM(b)},
iM(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.Cw()
r=p.er(a)
q=s[r]
if(q==null)s[r]=[p.ep(a)]
else{if(p.ex(q,a)>=0)return!1
q.push(p.ep(a))}return!0},
a_(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fF(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fF(s.c,b)
else return s.km(b)},
km(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.er(a)
r=n[s]
q=o.ex(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fG(p)
return!0},
ap(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eo()}},
fE(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.ep(b)
return!0},
fF(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fG(s)
delete a[b]
return!0},
eo(){this.r=this.r+1&1073741823},
ep(a){var s,r=this,q=new A.mf(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.eo()
return q},
fG(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.eo()},
er(a){return J.c0(a)&1073741823},
ex(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
$iE9:1}
A.mf.prototype={}
A.fC.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.k(A.aI(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ial:1}
A.p6.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:192}
A.Q.prototype={
gA(a){return new A.a7(a,this.gq(a),A.aT(a).i("a7<Q.E>"))},
ag(a,b){return this.h(a,b)},
ga5(a){return this.gq(a)===0},
gaq(a){return!this.ga5(a)},
gY(a){if(this.gq(a)===0)throw A.k(A.ai())
return this.h(a,0)},
gak(a){if(this.gq(a)===0)throw A.k(A.ai())
return this.h(a,this.gq(a)-1)},
u(a,b){var s,r=this.gq(a)
for(s=0;s<r;++s){if(J.Y(this.h(a,s),b))return!0
if(r!==this.gq(a))throw A.k(A.aI(a))}return!1},
b6(a,b){var s,r
A.aT(a).i("j(Q.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.k(A.aI(a))}return!0},
M(a,b){var s,r
A.aT(a).i("j(Q.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.k(A.aI(a))}return!1},
Z(a,b){var s
if(this.gq(a)===0)return""
s=A.Cm("",a,b)
return s.charCodeAt(0)==0?s:s},
bN(a,b){var s=A.aT(a)
return new A.n(a,s.i("j(Q.E)").a(b),s.i("n<Q.E>"))},
cN(a,b,c){var s=A.aT(a)
return new A.ah(a,s.a3(c).i("1(Q.E)").a(b),s.i("@<Q.E>").a3(c).i("ah<1,2>"))},
a4(a,b,c,d){var s,r,q
d.a(b)
A.aT(a).a3(d).i("1(1,Q.E)").a(c)
s=this.gq(a)
for(r=b,q=0;q<s;++q){r=c.$2(r,this.h(a,q))
if(s!==this.gq(a))throw A.k(A.aI(a))}return r},
ba(a,b){return A.bz(a,b,null,A.aT(a).i("Q.E"))},
bh(a,b){return A.bz(a,0,A.cP(b,"count",t.S),A.aT(a).i("Q.E"))},
eb(a){var s,r=A.Cd(A.aT(a).i("Q.E"))
for(s=0;s<this.gq(a);++s)r.m(0,this.h(a,s))
return r},
m(a,b){var s
A.aT(a).i("Q.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.j(a,s,b)},
dR(a,b){return new A.dp(a,A.aT(a).i("@<Q.E>").a3(b).i("dp<1,2>"))},
D(a,b){var s,r=A.aT(a)
r.i("d(Q.E,Q.E)?").a(b)
s=b==null?A.Mf():b
A.lx(a,0,this.gq(a)-1,s,r.i("Q.E"))},
aK(a,b,c){var s,r=this.gq(a)
A.bR(b,c,r)
s=A.B(this.dt(a,b,c),A.aT(a).i("Q.E"))
return s},
dt(a,b,c){A.bR(b,c,this.gq(a))
return A.bz(a,b,c,A.aT(a).i("Q.E"))},
aO(a,b,c,d){var s
A.aT(a).i("Q.E?").a(d)
A.bR(b,c,this.gq(a))
for(s=b;s<c;++s)this.j(a,s,d)},
aJ(a,b,c,d,e){var s,r,q,p,o
A.aT(a).i("h<Q.E>").a(d)
A.bR(b,c,this.gq(a))
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.hU(d,e).cU(0,!1)
r=0}p=J.an(q)
if(r+s>p.gq(q))throw A.k(A.DX())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
b9(a,b,c,d){return this.aJ(a,b,c,d,0)},
ce(a,b,c){var s
if(c<0)c=0
for(s=c;s<this.gq(a);++s)if(J.Y(this.h(a,s),b))return s
return-1},
by(a,b){return this.ce(a,b,0)},
b1(a,b,c){var s,r
A.aT(a).i("h<Q.E>").a(c)
if(t.j.b(c))this.b9(a,b,b+J.aE(c),c)
else for(s=J.R(c);s.n();b=r){r=b+1
this.j(a,b,s.gt())}},
gfd(a){return new A.aQ(a,A.aT(a).i("aQ<Q.E>"))},
k(a){return A.C7(a,"[","]")},
$iT:1,
$ih:1,
$iy:1}
A.a9.prototype={
G(a,b,c){var s=A.o(this)
return A.Ea(this,s.i("a9.K"),s.i("a9.V"),b,c)},
a2(a,b){var s,r,q,p=A.o(this)
p.i("~(a9.K,a9.V)").a(b)
for(s=this.gah(),s=s.gA(s),p=p.i("a9.V");s.n();){r=s.gt()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
aI(a,b){var s,r=this,q=A.o(r)
q.i("a9.K").a(a)
q.i("a9.V()").a(b)
if(r.E(a)){s=r.h(0,a)
return s==null?q.i("a9.V").a(s):s}q=b.$0()
r.j(0,a,q)
return q},
n3(a,b,c){var s,r=this,q=A.o(r)
q.i("a9.K").a(a)
q.i("a9.V(a9.V)").a(b)
q.i("a9.V()?").a(c)
if(r.E(a)){s=r.h(0,a)
q=b.$1(s==null?q.i("a9.V").a(s):s)
r.j(0,a,q)
return q}if(c!=null){q=c.$0()
r.j(0,a,q)
return q}throw A.k(A.x(a,"key","Key not in map."))},
gbu(){return this.gah().cN(0,new A.p9(this),A.o(this).i("ap<a9.K,a9.V>"))},
mT(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("j(a9.K,a9.V)").a(b)
s=A.b([],m.i("u<a9.K>"))
for(r=n.gah(),r=r.gA(r),m=m.i("a9.V");r.n();){q=r.gt()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.a.m(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.l)(s),++o)n.a_(0,s[o])},
E(a){return this.gah().u(0,a)},
gq(a){var s=this.gah()
return s.gq(s)},
ga5(a){var s=this.gah()
return s.ga5(s)},
gaq(a){var s=this.gah()
return s.gaq(s)},
gT(){return new A.je(this,A.o(this).i("je<a9.K,a9.V>"))},
k(a){return A.Cg(this)},
$iae:1}
A.p9.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a9.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a9.V").a(s)
return new A.ap(a,s,r.i("ap<a9.K,a9.V>"))},
$S(){return A.o(this.a).i("ap<a9.K,a9.V>(a9.K)")}}
A.pa.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
r.a=(r.a+=s)+": "
s=A.i(b)
r.a+=s},
$S:103}
A.je.prototype={
gq(a){var s=this.a
return s.gq(s)},
ga5(a){var s=this.a
return s.ga5(s)},
gaq(a){var s=this.a
return s.gaq(s)},
gY(a){var s=this.a,r=s.gah()
r=s.h(0,r.gY(r))
return r==null?this.$ti.y[1].a(r):r},
gak(a){var s=this.a,r=s.gah()
r=s.h(0,r.gak(r))
return r==null?this.$ti.y[1].a(r):r},
gA(a){var s=this.a,r=s.gah()
return new A.jf(r.gA(r),s,this.$ti.i("jf<1,2>"))}}
A.jf.prototype={
n(){var s=this,r=s.a
if(r.n()){s.c=s.b.h(0,r.gt())
return!0}s.c=null
return!1},
gt(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ial:1}
A.jx.prototype={
j(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.k(A.aB("Cannot modify unmodifiable map"))}}
A.hb.prototype={
G(a,b,c){return this.a.G(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.o(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
E(a){return this.a.E(a)},
a2(a,b){this.a.a2(0,A.o(this).i("~(1,2)").a(b))},
ga5(a){var s=this.a
return s.ga5(s)},
gq(a){var s=this.a
return s.gq(s)},
gah(){return this.a.gah()},
k(a){return this.a.k(0)},
gT(){return this.a.gT()},
gbu(){return this.a.gbu()},
$iae:1}
A.e7.prototype={
G(a,b,c){return new A.e7(this.a.G(0,b,c),b.i("@<0>").a3(c).i("e7<1,2>"))}}
A.cJ.prototype={
ga5(a){return this.gq(this)===0},
gaq(a){return this.gq(this)!==0},
a1(a,b){var s
for(s=J.R(A.o(this).i("h<1>").a(b));s.n();)this.m(0,s.gt())},
lm(a){var s
for(s=a.gA(a);s.n();)if(!this.u(0,s.gt()))return!1
return!0},
gaQ(a){var s,r=this
if(r.gq(r)>1)throw A.k(A.DY())
s=r.gA(r)
if(!s.n())throw A.k(A.ai())
return s.gt()},
k(a){return A.C7(this,"{","}")},
b6(a,b){var s
A.o(this).i("j(1)").a(b)
for(s=this.gA(this);s.n();)if(!b.$1(s.gt()))return!1
return!0},
bh(a,b){return A.Ew(this,b,A.o(this).c)},
ba(a,b){return A.Es(this,b,A.o(this).c)},
gY(a){var s=this.gA(this)
if(!s.n())throw A.k(A.ai())
return s.gt()},
gak(a){var s,r=this.gA(this)
if(!r.n())throw A.k(A.ai())
do s=r.gt()
while(r.n())
return s},
ag(a,b){var s,r
A.bb(b,"index")
s=this.gA(this)
for(r=b;s.n();){if(r===0)return s.gt();--r}throw A.k(A.nV(b,b-r,this,"index"))},
$iT:1,
$ih:1,
$id6:1}
A.jq.prototype={}
A.mu.prototype={
m(a,b){this.$ti.c.a(b)
return A.EZ()},
a1(a,b){this.$ti.i("h<1>").a(b)
return A.EZ()}}
A.j5.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gA(a){var s=this.a
return A.ea(s,s.r,A.o(s).c)}}
A.hC.prototype={}
A.jy.prototype={}
A.md.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kf(b):s}},
gq(a){return this.b==null?this.c.a:this.cu().length},
ga5(a){return this.gq(0)===0},
gaq(a){return this.gq(0)>0},
gah(){if(this.b==null){var s=this.c
return new A.au(s,A.o(s).i("au<1>"))}return new A.me(this)},
gT(){var s,r=this
if(r.b==null){s=r.c
return new A.M(s,A.o(s).i("M<2>"))}return A.Eb(r.cu(),new A.v4(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.c(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.E(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.h5().j(0,b,c)},
E(a){if(this.b==null)return this.c.E(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a_(a,b){if(this.b!=null&&!this.E(b))return null
return this.h5().a_(0,b)},
a2(a,b){var s,r,q,p,o=this
t.m2.a(b)
if(o.b==null)return o.c.a2(0,b)
s=o.cu()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.vx(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.k(A.aI(o))}},
cu(){var s=t.jS.a(this.c)
if(s==null)s=this.c=A.b(Object.keys(this.a),t.s)
return s},
h5(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.cu()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.a.m(r,"")
else B.a.ap(r)
n.a=n.b=null
return n.c=s},
kf(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.vx(this.a[a])
return this.b[a]=s}}
A.v4.prototype={
$1(a){return this.a.h(0,A.c(a))},
$S:100}
A.me.prototype={
gq(a){return this.a.gq(0)},
ag(a,b){var s=this.a
if(s.b==null)s=s.gah().ag(0,b)
else{s=s.cu()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gA(a){var s=this.a
if(s.b==null){s=s.gah()
s=s.gA(s)}else{s=s.cu()
s=new J.f2(s,s.length,A.F(s).i("f2<1>"))}return s},
u(a,b){return this.a.E(b)}}
A.vk.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:86}
A.vj.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:86}
A.fM.prototype={
gaH(){return this.a}}
A.hY.prototype={
O(a){var s,r
t.L.a(a)
s=J.an(a)
if(s.ga5(a))return""
r=this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
s=new A.uE(r).lW(a,0,s.gq(a),!0)
s.toString
return A.j1(s,0,null)}}
A.uE.prototype={
lW(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.C(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.JK(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.k_.prototype={
O(a){var s,r,q,p
A.c(a)
s=A.bR(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.uD()
q=r.lI(a,0,s)
q.toString
p=r.a
if(p<-1)A.f(A.z("Missing padding character",a,s))
if(p>0)A.f(A.z("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.uD.prototype={
lI(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.EE(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.JH(a,b,c,q)
r.a=A.JJ(a,b,c,s,0,r.a)
return s}}
A.bf.prototype={
af(a,b,c,d){this.m(0,J.BV(t.L.a(a),b,c))
if(d)this.au()},
$ib6:1}
A.bg.prototype={}
A.b8.prototype={
cY(a){A.o(this).i("b6<b8.T>").a(a)
throw A.k(A.aB("This converter does not support chunked conversions: "+this.k(0)))}}
A.ku.prototype={}
A.is.prototype={
k(a){var s=A.kw(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kT.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.kS.prototype={
bj(a,b){var s=A.Lm(a,this.glK().a)
return s},
be(a,b){var s=A.JU(a,this.gaH().b,null)
return s},
gaH(){return B.fE},
glK(){return B.fD}}
A.kV.prototype={}
A.kU.prototype={}
A.v6.prototype={
hV(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.X(a,r,q)
r=q+1
o=A.aX(92)
s.a+=o
o=A.aX(117)
s.a+=o
o=A.aX(100)
s.a+=o
o=p>>>8&15
o=A.aX(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aX(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aX(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.X(a,r,q)
r=q+1
o=A.aX(92)
s.a+=o
switch(p){case 8:o=A.aX(98)
s.a+=o
break
case 9:o=A.aX(116)
s.a+=o
break
case 10:o=A.aX(110)
s.a+=o
break
case 12:o=A.aX(102)
s.a+=o
break
case 13:o=A.aX(114)
s.a+=o
break
default:o=A.aX(117)
s.a+=o
o=A.aX(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aX(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aX(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.X(a,r,q)
r=q+1
o=A.aX(92)
s.a+=o
o=A.aX(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.X(a,r,m)},
en(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.k(new A.kT(a,null))}B.a.m(s,a)},
ee(a){var s,r,q,p,o=this
if(o.hU(a))return
o.en(a)
try{s=o.b.$1(a)
if(!o.hU(s)){q=A.E2(a,null,o.gfT())
throw A.k(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.aw(p)
q=A.E2(a,r,o.gfT())
throw A.k(q)}},
hU(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.G.k(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hV(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.en(a)
q.na(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.en(a)
r=q.nb(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
na(a){var s,r,q=this.c
q.a+="["
s=J.an(a)
if(s.gaq(a)){this.ee(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.ee(s.h(a,r))}}q.a+="]"},
nb(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga5(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.iy(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a2(0,new A.v7(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hV(A.c(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.ee(r[n])}p.a+="}"
return!0}}
A.v7.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.j(s,r.a++,a)
B.a.j(s,r.a++,b)},
$S:103}
A.v5.prototype={
gfT(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lM.prototype={
hj(a,b){t.L.a(a)
return(b===!0?B.n9:B.n8).O(a)},
cb(a){return this.hj(a,null)}}
A.lN.prototype={
O(a){var s,r,q,p,o
A.c(a)
s=a.length
r=A.bR(0,null,s)
if(r===0)return new Uint8Array(0)
q=new Uint8Array(r*3)
p=new A.vl(q)
if(p.jF(a,0,r)!==r){o=r-1
if(!(o>=0&&o<s))return A.a(a,o)
p.eP()}return B.i.aK(q,0,p.b)}}
A.vl.prototype={
eP(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.C(q)
s=q.length
if(!(p<s))return A.a(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.a(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.a(q,p)
q[p]=189},
l3(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.C(r)
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
return!0}else{n.eP()
return!1}},
jF(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.a(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.C(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.a(a,m)
if(k.l3(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eP()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.C(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.C(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.a(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.a(s,m)
s[m]=n&63|128}}}return o}}
A.j7.prototype={
O(a){return new A.eR(this.a).cv(t.L.a(a),0,null,!0)}}
A.eR.prototype={
cv(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bR(b,c,J.aE(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Kw(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Kv(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.eu(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Kx(o)
l.b=0
throw A.k(A.z(m,a,p+l.c))}return n},
eu(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.C(b+c,2)
r=q.eu(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.eu(a,s,c,d)}return q.lJ(a,b,c,d)},
lJ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bH(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aX(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aX(h)
e.a+=p
break
case 65:p=A.aX(h)
e.a+=p;--d
break
default:p=A.aX(h)
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
p=A.aX(a[l])
e.a+=p}else{p=A.j1(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aX(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.aS.prototype={
S(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bj(p,r)
return new A.aS(p===0?!1:s,r,p)},
jh(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.bn()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.a(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.a(q,n)
q[n]=m}o=this.a
n=A.bj(s,q)
return new A.aS(n===0?!1:o,q,n)},
ji(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.bn()
s=j-a
if(s<=0)return k.a?$.Dj():$.bn()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.a(r,o)
m=r[o]
if(!(n<s))return A.a(q,n)
q[n]=m}n=k.a
m=A.bj(s,q)
l=new A.aS(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.a(r,o)
if(r[o]!==0)return l.aa(0,$.bL())}return l},
b2(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.k(A.b2("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.d.C(b,16)
if(B.d.R(b,16)===0)return n.jh(r)
q=s+r+1
p=new Uint16Array(q)
A.EL(n.b,s,b,p)
s=n.a
o=A.bj(q,p)
return new A.aS(o===0?!1:s,p,o)},
c4(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.k(A.b2("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.d.C(b,16)
q=B.d.R(b,16)
if(q===0)return j.ji(r)
p=s-r
if(p<=0)return j.a?$.Dj():$.bn()
o=j.b
n=new Uint16Array(p)
A.JR(o,s,b,n)
s=j.a
m=A.bj(p,n)
l=new A.aS(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.d.b2(1,q)-1)!==0)return l.aa(0,$.bL())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.aa(0,$.bL())}}return l},
l(a,b){var s,r
t.nx.a(b)
s=this.a
if(s===b.a){r=A.lS(this.b,this.c,b.b,b.c)
return s?0-r:r}return s?-1:1},
cs(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.cs(p,b)
if(o===0)return $.bn()
if(n===0)return p.a===b?p:p.S(0)
s=o+1
r=new Uint16Array(s)
A.JM(p.b,o,a.b,n,r)
q=A.bj(s,r)
return new A.aS(q===0?!1:b,r,q)},
bo(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.bn()
s=a.c
if(s===0)return p.a===b?p:p.S(0)
r=new Uint16Array(o)
A.lR(p.b,o,a.b,s,r)
q=A.bj(o,r)
return new A.aS(q===0?!1:b,r,q)},
fs(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.a(s,n)
m=s[n]
if(!(n<o))return A.a(r,n)
l=r[n]
if(!(n<k))return A.a(q,n)
q[n]=m&l}p=A.bj(k,q)
return new A.aS(p===0?!1:b,q,p)},
fq(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.a(m,q)
p=m[q]
if(!(q<r))return A.a(l,q)
o=l[q]
if(!(q<n))return A.a(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.a(m,q)
r=m[q]
if(!(q<n))return A.a(k,q)
k[q]=r}s=A.bj(n,k)
return new A.aS(s===0?!1:b,k,s)},
ft(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
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
f[o]=p}q=A.bj(i,f)
return new A.aS(q===0?!1:b,f,q)},
dr(a,b){var s,r,q,p=this
t.nx.a(b)
if(p.c===0||b.c===0)return $.bn()
s=p.a
if(s===b.a){if(s){s=$.bL()
return p.bo(s,!0).ft(b.bo(s,!0),!0).cs(s,!0)}return p.fs(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.fq(r.bo($.bL(),!1),!1)},
hX(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.bL()
return p.bo(s,!0).fs(b.bo(s,!0),!0).cs(s,!0)}return p.ft(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.bL()
return r.bo(s,!0).fq(q,!0).cs(s,!0)},
B(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.cs(b,r)
if(A.lS(q.b,p,b.b,s)>=0)return q.bo(b,r)
return b.bo(q,!r)},
aa(a,b){var s,r,q=this,p=q.c
if(p===0)return b.S(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.cs(b,r)
if(A.lS(q.b,p,b.b,s)>=0)return q.bo(b,r)
return b.bo(q,!r)},
a0(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.bn()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.Cv(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.bj(s,p)
return new A.aS(m===0?!1:o,p,m)},
bC(a){var s,r,q,p
if(this.c<a.c)return $.bn()
this.fK(a)
s=$.Cr.bi()-$.ja.bi()
r=A.Ct($.Cq.bi(),$.ja.bi(),$.Cr.bi(),s)
q=A.bj(s,r)
p=new A.aS(!1,r,q)
return this.a!==a.a&&q>0?p.S(0):p},
cA(a){var s,r,q,p=this
if(p.c<a.c)return p
p.fK(a)
s=A.Ct($.Cq.bi(),0,$.ja.bi(),$.ja.bi())
r=A.bj($.ja.bi(),s)
q=new A.aS(!1,s,r)
if($.Cs.bi()>0)q=q.c4(0,$.Cs.bi())
return p.a&&q.c>0?q.S(0):q},
fK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EI&&a.c===$.EK&&c.b===$.EH&&a.b===$.EJ)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.d.gbW(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.EG(s,r,p,o)
m=new Uint16Array(b+5)
l=A.EG(c.b,b,p,m)}else{m=A.Ct(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.Cu(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.lS(m,l,i,h)>=0){q&2&&A.C(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=1
A.lR(m,g,i,h,m)}else{q&2&&A.C(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.a(f,n)
f[n]=1
A.lR(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.JN(k,m,e);--j
A.Cv(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.Cu(f,n,j,i)
A.lR(m,g,i,h,m)
while(--d,m[e]<d)A.lR(m,g,i,h,m)}--e}$.EH=c.b
$.EI=b
$.EJ=s
$.EK=r
$.Cq.b=m
$.Cr.b=g
$.ja.b=n
$.Cs.b=p},
gP(a){var s,r,q,p,o=new A.uG(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.uH().$1(s)},
J(a,b){if(b==null)return!1
return b instanceof A.aS&&this.l(0,b)===0},
gbW(a){var s,r,q,p,o,n,m=this.c
if(m===0)return 0
s=this.b
r=m-1
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]
o=16*r+B.d.gbW(p)
if(!this.a)return o
if((p&p-1)!==0)return o
for(n=m-2;n>=0;--n){if(!(n<q))return A.a(s,n)
if(s[n]!==0)return o}return o-1},
aA(a,b){if(b.c===0)throw A.k(B.Y)
return this.bC(b)},
mM(a,b){if(b.c===0)throw A.k(B.Y)
return this.cA(b)},
R(a,b){var s
if(b.c===0)throw A.k(B.Y)
s=this.cA(b)
if(s.a)s=b.a?s.aa(0,b):s.B(0,b)
return s},
ga9(a){if(this.c===0)return 0
return this.a?-1:1},
aV(a){var s,r
if(a<0)throw A.k(A.b2("Exponent must not be negative: "+a,null))
if(a===0)return $.bL()
s=$.bL()
for(r=this;a!==0;){if((a&1)===1)s=s.a0(0,r)
a=B.d.ao(a,1)
if(a!==0)r=r.a0(0,r)}return s},
my(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b.a)throw A.k(A.b2("exponent must be positive: "+b.k(0),null))
if(c.l(0,$.bn())<=0)throw A.k(A.b2("modulus must be strictly positive: "+c.k(0),null))
if(b.c===0)return $.bL()
s=c.c
r=2*s+4
q=b.gbW(0)
if(q<=0)return $.bL()
p=c.b
o=s-1
if(!(o>=0&&o<p.length))return A.a(p,o)
n=new A.uF(c,c.b2(0,16-B.d.gbW(p[o])))
m=new Uint16Array(r)
l=new Uint16Array(r)
k=new Uint16Array(s)
j=n.he(this,k)
for(i=j-1;i>=0;--i){if(!(i<s))return A.a(k,i)
p=k[i]
if(!(i<r))return A.a(m,i)
m[i]=p}for(h=q-2,g=j;h>=0;--h){f=n.i9(m,g,l)
if(b.dr(0,$.bL().b2(0,h)).c!==0)g=n.fV(m,A.JO(l,f,k,j,m))
else{g=f
e=l
l=m
m=e}}p=A.bj(g,m)
return new A.aS(!1,m,p)},
b0(a){var s,r,q,p
for(s=this.c-1,r=this.b,q=r.length,p=0;s>=0;--s){if(!(s<q))return A.a(r,s)
p=p*65536+r[s]}return this.a?-p:p},
cm(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.c
if(i===0)return 0
s=new Uint8Array(8);--i
r=k.b
q=r.length
if(!(i>=0&&i<q))return A.a(r,i)
p=16*i+B.d.gbW(r[i])
if(p>1024)return k.a?-1/0:1/0
if(k.a)s[7]=128
o=p-53+1075
s[6]=(o&15)<<4
s[7]=(s[7]|B.d.ao(o,4))>>>0
j.a=j.b=0
j.c=i
n=new A.uJ(j,k)
i=n.$1(5)
if(typeof i!=="number")return i.dr()
s[6]=s[6]|i&15
for(m=5;m>=0;--m)B.i.j(s,m,n.$1(8))
l=new A.uK(s)
if(J.Y(n.$1(1),1))if((s[0]&1)===1)l.$0()
else if(j.b!==0)l.$0()
else for(m=j.c;m>=0;--m){if(!(m<q))return A.a(r,m)
if(r[m]!==0){l.$0()
break}}return J.jR(B.i.gab(s)).getFloat64(0,!0)},
k(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(m[0])}s=A.b([],t.s)
m=n.a
r=m?n.S(0):n
while(r.c>1){q=$.Di()
if(q.c===0)A.f(B.Y)
p=r.cA(q).k(0)
B.a.m(s,p)
o=p.length
if(o===1)B.a.m(s,"000")
if(o===2)B.a.m(s,"00")
if(o===3)B.a.m(s,"0")
r=r.bC(q)}q=r.b
if(0>=q.length)return A.a(q,0)
B.a.m(s,B.d.k(q[0]))
if(m)B.a.m(s,"-")
return new A.aQ(s,t.q6).cg(0)},
eO(a){if(a<10)return 48+a
return 97+a-10},
bL(a,b){var s,r,q,p,o,n,m,l=this
if(b<2||b>36)throw A.k(A.aM(b,2,36,null,null))
s=l.c
if(s===0)return"0"
if(s===1){s=l.b
if(0>=s.length)return A.a(s,0)
r=B.d.bL(s[0],b)
if(l.a)return"-"+r
return r}if(b===16)return l.kV()
q=A.hw(b)
p=A.b([],t.t)
s=l.a
o=s?l.S(0):l
for(n=q.c===0;o.c!==0;){if(n)A.f(B.Y)
m=o.cA(q).b0(0)
o=o.bC(q)
B.a.m(p,l.eO(m))}r=A.j1(new A.aQ(p,t.gb),0,null)
if(s)return"-"+r
return r},
kV(){var s,r,q,p,o,n,m,l=this,k=A.b([],t.t)
for(s=l.c-1,r=l.b,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p]
for(n=0;n<4;++n){B.a.m(k,l.eO(o&15))
o=o>>>4}}if(!(s>=0&&s<q))return A.a(r,s)
m=r[s]
while(m!==0){B.a.m(k,l.eO(m&15))
m=m>>>4}if(l.a)B.a.m(k,45)
return A.j1(new A.aQ(k,t.gb),0,null)},
$ihZ:1,
$ib0:1}
A.uG.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:27}
A.uH.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:52}
A.uJ.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=this.b,q=r.c-1,r=r.b,p=r.length;o=s.a,o<a;){o=s.c
if(o<0){s.c=o-1
n=0
m=16}else{if(!(o<p))return A.a(r,o)
n=r[o]
m=o===q?B.d.gbW(n):16;--s.c}s.b=B.d.b2(s.b,m)+n
s.a+=m}r=s.b
o-=a
l=B.d.c4(r,o)
s.b=r-B.d.b2(l,o)
s.a=o
return l},
$S:52}
A.uK.prototype={
$0(){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=1,p=0;p<8;++p){if(q===0)break
o=s[p]+q
r&2&&A.C(s)
s[p]=o&255
q=o>>>8}},
$S:0}
A.uF.prototype={
he(a,b){var s,r,q,p,o,n,m=a.a
if(!m){s=this.a
s=A.lS(a.b,a.c,s.b,s.c)>=0}else s=!0
if(s){s=this.a
r=a.cA(s)
if(m&&r.c>0)r=r.B(0,s)
q=r.c
p=r.b}else{q=a.c
p=a.b}for(m=p.length,s=b.$flags|0,o=q;--o,o>=0;){if(!(o<m))return A.a(p,o)
n=p[o]
s&2&&A.C(b)
if(!(o<b.length))return A.a(b,o)
b[o]=n}return q},
fV(a,b){var s
if(b<this.a.c)return b
s=A.bj(b,a)
return this.he(new A.aS(!1,a,s).cA(this.b),a)},
i9(a,b,c){var s,r,q,p,o,n=A.bj(b,a),m=new A.aS(!1,a,n),l=m.a0(0,m)
for(s=l.c,n=l.b,r=n.length,q=c.$flags|0,p=0;p<s;++p){if(!(p<r))return A.a(n,p)
o=n[p]
q&2&&A.C(c)
if(!(p<c.length))return A.a(c,p)
c[p]=o}for(n=2*b;s<n;++s){q&2&&A.C(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}return this.fV(c,n)}}
A.vi.prototype={
$2(a,b){var s,r
A.c(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.R(t.tY.a(b)),r=this.a;s.n();){b=s.gt()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.m(b)}},
$S:85}
A.nz.prototype={
$0(){var s=this
return A.f(A.b2("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:84}
A.aa.prototype={
aw(a){var s=1000,r=B.d.R(a,s),q=B.d.C(a-r,s),p=this.b+r,o=B.d.R(p,s),n=this.c
return new A.aa(A.DR(this.a+B.d.C(p-o,s)+q,o,n),o,n)},
dX(a){return A.C3(0,this.b-a.b,this.a-a.a,0)},
J(a,b){if(b==null)return!1
return b instanceof A.aa&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.by(this.a,this.b,B.t,B.t)},
hp(a){var s=this.a,r=a.a
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
k(a){var s=this,r=A.DQ(A.b1(s)),q=A.ds(A.b5(s)),p=A.ds(A.av(s)),o=A.ds(A.Ch(s)),n=A.ds(A.Ci(s)),m=A.ds(A.Eg(s)),l=A.nA(A.Ef(s)),k=s.b,j=k===0?"":A.nA(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
dl(){var s=this,r=A.b1(s)>=-9999&&A.b1(s)<=9999?A.DQ(A.b1(s)):A.IE(A.b1(s)),q=A.ds(A.b5(s)),p=A.ds(A.av(s)),o=A.ds(A.Ch(s)),n=A.ds(A.Ci(s)),m=A.ds(A.Eg(s)),l=A.nA(A.Ef(s)),k=s.b,j=k===0?"":A.nA(k)
k=r+"-"+q
if(s.c)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j},
$ib0:1}
A.nB.prototype={
$1(a){if(a==null)return 0
return A.X(a,null,null)},
$S:80}
A.nC.prototype={
$1(a){var s,r,q
if(a==null)return 0
for(s=a.length,r=0,q=0;q<6;++q){r*=10
if(q<s){if(!(q<s))return A.a(a,q)
r+=a.charCodeAt(q)^48}}return r},
$S:80}
A.ck.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.ck&&this.a===b.a},
gP(a){return B.d.gP(this.a)},
l(a,b){return B.d.l(this.a,t.eP.a(b).a)},
k(a){var s,r,q,p,o,n=this.a,m=B.d.C(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.d.C(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.d.C(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.b.ac(B.d.k(n%1e6),6,"0")},
$ib0:1}
A.m8.prototype={
k(a){return this.U()},
$iZ:1}
A.aG.prototype={
gcq(){return A.Jd(this)}}
A.jX.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kw(s)
return"Assertion failed"}}
A.e4.prototype={}
A.ce.prototype={
gew(){return"Invalid argument"+(!this.a?"(s)":"")},
gev(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.i(p),n=s.gew()+q+o
if(!s.a)return n
return n+s.gev()+": "+A.kw(s.gf0())},
gf0(){return this.b}}
A.hi.prototype={
gf0(){return A.CE(this.b)},
gew(){return"RangeError"},
gev(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.kG.prototype={
gf0(){return A.O(this.b)},
gew(){return"RangeError"},
gev(){if(A.O(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.j6.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.lJ.prototype={
k(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dY.prototype={
k(a){return"Bad state: "+this.a}}
A.ke.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kw(s)+"."}}
A.l9.prototype={
k(a){return"Out of Memory"},
gcq(){return null},
$iaG:1}
A.j0.prototype={
k(a){return"Stack Overflow"},
gcq(){return null},
$iaG:1}
A.uP.prototype={
k(a){return"Exception: "+this.a}}
A.b9.prototype={
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
k=""}return g+l+B.b.X(e,i,j)+k+"\n"+B.b.a0(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.i(f)+")"):g}}
A.kM.prototype={
gcq(){return null},
k(a){return"IntegerDivisionByZeroException"},
$iaG:1}
A.h.prototype={
dR(a,b){return A.fP(this,A.o(this).i("h.E"),b)},
cN(a,b,c){var s=A.o(this)
return A.Eb(this,s.a3(c).i("1(h.E)").a(b),s.i("h.E"),c)},
bN(a,b){var s=A.o(this)
return new A.n(this,s.i("j(h.E)").a(b),s.i("n<h.E>"))},
u(a,b){var s
for(s=this.gA(this);s.n();)if(J.Y(s.gt(),b))return!0
return!1},
a2(a,b){var s
A.o(this).i("~(h.E)").a(b)
for(s=this.gA(this);s.n();)b.$1(s.gt())},
cS(a,b){var s,r
A.o(this).i("h.E(h.E,h.E)").a(b)
s=this.gA(this)
if(!s.n())throw A.k(A.ai())
r=s.gt()
while(s.n())r=b.$2(r,s.gt())
return r},
a4(a,b,c,d){var s,r
d.a(b)
A.o(this).a3(d).i("1(1,h.E)").a(c)
for(s=this.gA(this),r=b;s.n();)r=c.$2(r,s.gt())
return r},
M(a,b){var s
A.o(this).i("j(h.E)").a(b)
for(s=this.gA(this);s.n();)if(b.$1(s.gt()))return!0
return!1},
cU(a,b){var s=A.o(this).i("h.E")
if(b)s=A.B(this,s)
else{s=A.B(this,s)
s.$flags=1
s=s}return s},
hL(a){return this.cU(0,!0)},
eb(a){return A.kY(this,A.o(this).i("h.E"))},
gq(a){var s,r=this.gA(this)
for(s=0;r.n();)++s
return s},
ga5(a){return!this.gA(this).n()},
gaq(a){return!this.ga5(this)},
bh(a,b){return A.Ew(this,b,A.o(this).i("h.E"))},
ba(a,b){return A.Es(this,b,A.o(this).i("h.E"))},
gY(a){var s=this.gA(this)
if(!s.n())throw A.k(A.ai())
return s.gt()},
gak(a){var s,r=this.gA(this)
if(!r.n())throw A.k(A.ai())
do s=r.gt()
while(r.n())
return s},
ag(a,b){var s,r
A.bb(b,"index")
s=this.gA(this)
for(r=b;s.n();){if(r===0)return s.gt();--r}throw A.k(A.nV(b,b-r,this,"index"))},
k(a){return A.IQ(this,"(",")")}}
A.ap.prototype={
k(a){return"MapEntry("+A.i(this.a)+": "+A.i(this.b)+")"}}
A.bi.prototype={
gP(a){return A.a0.prototype.gP.call(this,0)},
k(a){return"null"}}
A.a0.prototype={$ia0:1,
J(a,b){return this===b},
gP(a){return A.c7(this)},
k(a){return"Instance of '"+A.lh(this)+"'"},
gaz(a){return A.be(this)},
toString(){return this.k(this)}}
A.mr.prototype={
k(a){return""},
$ieI:1}
A.bH.prototype={
gq(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iJu:1}
A.uv.prototype={
$2(a,b){var s,r,q,p
t.yz.a(a)
A.c(b)
s=B.b.by(b,"=")
if(s===-1){if(b!=="")a.j(0,A.CB(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.X(b,0,s)
q=B.b.ae(b,s+1)
p=this.a
a.j(0,A.CB(r,0,r.length,p,!0),A.CB(q,0,q.length,p,!0))}return a},
$S:154}
A.uu.prototype={
$2(a,b){throw A.k(A.z("Illegal IPv6 address, "+a,this.a,b))},
$S:150}
A.jz.prototype={
gdO(){var s,r,q,p,o=this,n=o.w
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
gP(a){var s,r=this,q=r.y
if(q===$){s=B.b.gP(r.gdO())
r.y!==$&&A.fL()
r.y=s
q=s}return q},
ghn(){var s=this.c
if(s==null)return""
if(B.b.am(s,"[")&&!B.b.c5(s,"v",1))return B.b.X(s,1,s.length-1)
return s},
ghD(){var s=this.d
return s==null?A.F_(this.a):s},
k(a){return this.gdO()},
J(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(n===b)return!0
s=!1
if(b instanceof A.jz)if(n.a===b.a)if(n.c!=null===(b.c!=null))if(n.b===b.b)if(n.ghn()===b.ghn())if(n.ghD()===b.ghD())if(n.e===b.e){r=n.f
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
$iut:1}
A.vf.prototype={
$1(a){return A.CC(64,A.c(a),B.R,!1)},
$S:12}
A.vh.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.CC(1,a,B.R,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.CC(1,b,B.R,!0)
s.a+=r}},
$S:145}
A.vg.prototype={
$2(a,b){var s,r
A.c(a)
if(b==null||typeof b=="string")this.a.$2(a,A.m(b))
else for(s=J.R(t.tY.a(b)),r=this.a;s.n();)r.$2(a,A.c(s.gt()))},
$S:85}
A.kx.prototype={
k(a){return"Expando:null"}}
A.ph.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.AW.prototype={
$1(a){return this.a.cG(this.b.i("0/?").a(a))},
$S:43}
A.AX.prototype={
$1(a){if(a==null)return this.a.dS(new A.ph(a===undefined))
return this.a.dS(a)},
$S:43}
A.mc.prototype={
iA(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.k(A.aB("No source of cryptographically secure random numbers available."))},
cQ(a){var s,r,q,p,o,n,m,l,k=null
if(a<=0||a>4294967296)throw A.k(new A.hi(k,k,!1,k,k,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.O(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.br(B.aC.gab(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}},
$iJg:1}
A.kv.prototype={}
A.kp.prototype={}
A.kZ.prototype={
bv(a,b){var s,r,q,p=this.$ti.i("y<1>?")
p.a(a)
p.a(b)
if(a===b)return!0
s=a.length
p=b.length
if(s!==p)return!1
for(r=0;r<s;++r){q=a[r]
if(!(r<p))return A.a(b,r)
if(q!==b[r])return!1}return!0},
aE(a){var s,r,q
this.$ti.i("y<1>?").a(a)
for(s=a.length,r=0,q=0;q<s;++q){r=r+B.d.gP(a[q])&2147483647
r=r+(r<<10>>>0)&2147483647
r^=r>>>6}r=r+(r<<3>>>0)&2147483647
r^=r>>>11
return r+(r<<15>>>0)&2147483647}}
A.cj.prototype={
J(a,b){var s,r,q,p,o,n,m
if(b==null)return!1
if(b instanceof A.cj){s=this.a
r=b.a
q=s.length
p=r.length
if(q!==p)return!1
for(o=0,n=0;n<q;++n){m=s[n]
if(!(n<p))return A.a(r,n)
o|=m^r[n]}return o===0}return!1},
gP(a){return A.Ec(this.a)},
k(a){return A.vD(this.a)}}
A.kq.prototype={
m(a,b){if(this.a!=null)throw A.k(A.aq("add may only be called once."))
this.a=b},
au(){if(this.a==null)throw A.k(A.aq("add must be called once."))},
$ib6:1}
A.h1.prototype={
O(a){var s,r,q
t.L.a(a)
s=new A.kq()
r=this.cY(s)
r.m(0,a)
r.au()
q=s.a
q.toString
return q}}
A.kC.prototype={
m(a,b){var s,r=this
t.L.a(b)
if(r.w)throw A.k(A.aq("Hash.add() called after close()."))
s=J.an(b)
r.r=r.r+s.gq(b)
r.fu(b,0,s.gq(b))},
af(a,b,c,d){var s=this
t.L.a(a)
if(s.w)throw A.k(A.aq("Hash.addSlice() called after close()."))
A.bR(b,c,J.aE(a))
if(b<c){s.r=s.r+(c-b)
s.fu(a,b,c)}if(d)s.au()},
fu(a,b,c){var s,r,q,p,o,n=this
t.L.a(a)
s=n.e
r=n.d
q=r.length
for(p=b;;s=0){o=s+c-p
if(o<q){B.i.aJ(r,s,o,a,p)
n.e=o
return}B.i.aJ(r,s,q,a,p)
p+=q-s
n.eG()}},
eG(){var s,r=this,q=r.f,p=r.c,o=B.a1===r.b,n=q.$flags|0,m=q.length,l=0
do{s=p.getUint32(l*4,o)
n&2&&A.C(q)
if(!(l<m))return A.a(q,l)
q[l]=s;++l}while(l<m)
r.hN(q)},
au(){var s,r,q,p,o,n,m,l,k,j=this
if(j.w)return
j.w=!0
if(j.r>1125899906842623)A.f(A.aB("Hashing is unsupported for messages with more than 2^53 bits."))
s=j.d
r=j.e
q=j.e=r+1
s.$flags&2&&A.C(s)
p=s.length
if(!(r>=0&&r<p))return A.a(s,r)
s[r]=128
if(q>p-j.x){B.i.aO(s,q,p,0)
j.eG()
r=j.e=0}else r=q
o=j.r*8
n=p-8
B.i.aO(s,r,n,0)
m=B.d.C(o,4294967296)
l=o>>>0
s=j.b
r=j.c
q=B.a1===s
p=n+4
k=r.$flags|0
if(s===B.aw){k&2&&A.C(r,11)
r.setUint32(n,m,q)
r.setUint32(p,l,q)}else{k&2&&A.C(r,11)
r.setUint32(n,l,q)
r.setUint32(p,m,q)}j.eG()
j.e=0
s=j.a
s.m(0,new A.cj(j.j1()))
s.au()},
j1(){var s,r,q,p,o,n,m
if(this.b===$.f_())return J.Ic(B.E.gab(this.geZ()))
s=this.geZ()
r=s.byteLength
q=new Uint8Array(r)
p=J.jR(B.i.gab(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.C(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.mj.prototype={
cY(a){var s,r,q,p
t.uC.a(a)
s=new Uint32Array(A.aK(A.b([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)))
r=new Uint32Array(64)
q=new Uint8Array(64)
p=new Uint32Array(16)
return new A.mk(s,r,a,B.aw,J.jR(B.i.gab(q)),q,p,8)}}
A.ml.prototype={
hN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a.length
if(15>=b)return A.a(a,15)
s=this.z
r=this.y
if(7>=r.length)return A.a(r,7)
for(q=s.$flags|0,p=0;p<16;++p){if(!(p<b))return A.a(a,p)
o=a[p]
q&2&&A.C(s)
s[p]=o}for(p=16;p<64;++p){b=s[p-2]
o=s[p-7]
n=s[p-15]
m=s[p-16]
q&2&&A.C(s)
s[p]=((((b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,p=0;p<64;p+=8){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.K[p]+s[p]>>>0)>>>0)>>>0
i=i+c>>>0
b=d&k
e=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((b^d&j^k&j)>>>0)>>>0)>>>0
q=p+1
if(!(q<64))return A.a(B.K,q)
c=(f+(((i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7))>>>0)>>>0)+(((i&h^~i&g)>>>0)+(B.K[q]+s[q]>>>0)>>>0)>>>0
j=j+c>>>0
q=e&d
f=c+((((e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10))>>>0)+((q^e&k^b)>>>0)>>>0)>>>0
b=p+2
if(!(b<64))return A.a(B.K,b)
c=(g+(((j>>>6|j<<26)^(j>>>11|j<<21)^(j>>>25|j<<7))>>>0)>>>0)+(((j&i^~j&h)>>>0)+(B.K[b]+s[b]>>>0)>>>0)>>>0
k=k+c>>>0
b=f&e
g=c+((((f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10))>>>0)+((b^f&d^q)>>>0)>>>0)>>>0
q=p+3
if(!(q<64))return A.a(B.K,q)
c=(h+(((k>>>6|k<<26)^(k>>>11|k<<21)^(k>>>25|k<<7))>>>0)>>>0)+(((k&j^~k&i)>>>0)+(B.K[q]+s[q]>>>0)>>>0)>>>0
d=d+c>>>0
q=g&f
h=c+((((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))>>>0)+((q^g&e^b)>>>0)>>>0)>>>0
b=p+4
if(!(b<64))return A.a(B.K,b)
c=(i+(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))>>>0)>>>0)+(((d&k^~d&j)>>>0)+(B.K[b]+s[b]>>>0)>>>0)>>>0
e=e+c>>>0
b=h&g
i=c+((((h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10))>>>0)+((b^h&f^q)>>>0)>>>0)>>>0
q=p+5
if(!(q<64))return A.a(B.K,q)
c=(j+(((e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7))>>>0)>>>0)+(((e&d^~e&k)>>>0)+(B.K[q]+s[q]>>>0)>>>0)>>>0
f=f+c>>>0
q=i&h
j=c+((((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))>>>0)+((q^i&g^b)>>>0)>>>0)>>>0
b=p+6
if(!(b<64))return A.a(B.K,b)
c=(k+(((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))>>>0)>>>0)+(((f&e^~f&d)>>>0)+(B.K[b]+s[b]>>>0)>>>0)>>>0
g=g+c>>>0
b=j&i
k=c+((((j>>>2|j<<30)^(j>>>13|j<<19)^(j>>>22|j<<10))>>>0)+((b^j&h^q)>>>0)>>>0)>>>0
q=p+7
if(!(q<64))return A.a(B.K,q)
c=(d+(((g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))>>>0)>>>0)+(((g&f^~g&e)>>>0)+(B.K[q]+s[q]>>>0)>>>0)>>>0
h=h+c>>>0
d=c+((((k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10))>>>0)+((k&j^k&i^b)>>>0)>>>0)>>>0}r.$flags&2&&A.C(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.mk.prototype={
geZ(){return this.y}}
A.mm.prototype={
cY(a){var s,r,q,p,o
t.uC.a(a)
s=new Uint32Array(A.aK(A.b([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],t.t)))
r=new Uint32Array(160)
q=new Uint32Array(38)
p=new Uint8Array(128)
o=new Uint32Array(32)
return new A.lv(s,r,q,a,B.aw,J.jR(B.i.gab(p)),p,o,16)},
glb(){return 128}}
A.mn.prototype={
geZ(){return J.mQ(B.E.gab(this.y),0,this.glT())},
hN(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
for(s=this.z,r=a5.length,q=s.$flags|0,p=0;p<32;++p){if(!(p<r))return A.a(a5,p)
o=a5[p]
q&2&&A.C(s)
s[p]=o}for(r=this.Q,o=r.$flags|0,p=32;p<160;p+=2){n=p-4
m=s[n]
o&2&&A.C(r)
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
q&2&&A.C(s)
if(!(m<160))return A.a(s,m)
s[m]=k+j
j=r[30]
k=r[32]
n=s[m]<r[31]?1:0
s[p]=j+k+n}q=this.y
B.E.b9(r,12,28,q)
for(p=0;p<160;p+=2){n=r[20]
o&2&&A.C(r)
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
i=$.HR()
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
q.$flags&2&&A.C(q)
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
A.lv.prototype={
glT(){return 16}}
A.k2.prototype={
bt(a,b,c){return this.lL(a,t.L.a(b),c)},
lL(a0,a1,a2){var s=0,r=A.J(t.L),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bt=A.K(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:c=a0.b.a
b=c.length
if(b!==16)throw A.k(A.x(a0,"secretBox","Expected MAC length 16, actually "+b))
s=3
return A.r(A.k5(a2,!0,!1,!1,n.c,"AES-GCM"),$async$bt)
case 3:m=a4
f=a0.a
l=c
c=f.length
e=J.aE(l)
k=new Uint8Array(c+e)
J.Dy(k,0,f)
J.Dy(k,c,l)
p=5
s=8
return A.r(A.yf({name:"AES-GCM",iv:A.bI(a0.c),additionalData:A.bI(a1),tagLength:J.aE(l)*8},m,A.bI(k)),$async$bt)
case 8:j=a4
c=J.br(j,0,null)
q=c
s=1
break
p=2
s=7
break
case 5:p=4
a=o.pop()
i=A.aw(a)
h=A.v(i)
if("name" in h){g=A.c(h.name)
if(J.Y(g,"OperationError"))throw A.k(A.Eq())}throw a
s=7
break
case 4:s=2
break
case 7:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bt,r)},
bG(a,b,c){var s=t.L
return this.lX(s.a(a),s.a(b),c)},
lX(a,b,c){var s=0,r=A.J(t.yX),q,p=this,o,n,m,l,k
var $async$bG=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=p.hw()
s=3
return A.r(A.k5(c,!1,!0,!1,p.c,"AES-GCM"),$async$bG)
case 3:n=e
s=4
return A.r(A.yr({name:"AES-GCM",iv:A.bI(o),additionalData:A.bI(b),tagLength:128},n,A.bI(a)),$async$bG)
case 4:m=e
l=a.length
k=J.hJ(m)
q=new A.eF(k.cD(m,0,l),new A.d2(k.cD(m,l,null)),o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bG,r)},
gco(){return this.c},
gci(){return this.d}}
A.n4.prototype={
gfP(){return!1},
eQ(a,b){var s=this.ii(a,b),r=$.ei()
if(r&&b!==24)return new A.k2(b,a,null)
return s},
cH(){var s=this.ij(),r=$.ei()
if(r&&!this.gfP())return new A.k3(s,null)
return s},
cL(a,b){var s=$.ei()
if(s)if(A.DE(a.gbf())!=null)return new A.n5(a,b)
return this.ik(a,b)},
cM(a){var s=$.ei()
if(s)return B.ew
return this.il(a)},
cp(){var s=$.ei()
if(s)return B.cA
return this.im()},
ei(){var s=$.ei()
if(s)return B.ey
return this.io()},
dq(){var s=$.ei()
if(s&&!this.gfP())return B.ex
return this.ip()}}
A.k3.prototype={
aU(){var s=0,r=A.J(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aU=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.uM()
p=4
s=7
return A.r(A.mH($.BO(),!0,A.b(["sign","verify"],t.s)),$async$aU)
case 7:m=b
e=g
s=8
return A.r(A.mG(A.v(m.privateKey)),$async$aU)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.aw(f)
k=n.b
if(k!=null){q=k.aU()
s=1
break}throw A.k(A.aq(A.be(n).k(0)+".newKeyPair(...) failed: "+A.i(l)))
s=6
break
case 3:s=2
break
case 6:i=A.m(g.cz().d)
i.toString
i=A.wc(i)
h=A.m(g.cz().x)
h.toString
q=new A.d8(new A.bt(i,!1),new A.bG(A.wc(h),B.T),B.T)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aU,r)},
aP(a){t.L.a(a)
B.T.cF(a)
return A.DM(null).aP(a)},
aW(a,b,c){return this.i4(0,t.L.a(b),c)},
i4(a,b,c){var s=0,r=A.J(t.bu),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$aW=A.K(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:p=4
m=c.bw()
s=7
return A.r(c.b7(),$async$aW)
case 7:l=a1
g={crv:"Ed25519",d:A.mB(l.gaN()),kty:"OKP",x:A.mB(l.f.a)}
f=$.BO()
s=8
return A.r(A.jJ(g,f,!1,A.b(["sign"],t.s)),$async$aW)
case 8:k=a1
s=9
return A.r(A.mM(f,k,A.bI(b)),$async$aW)
case 9:j=a1
s=10
return A.r(m,$async$aW)
case 10:f=a1
q=new A.fs(j,f)
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
break}throw A.k(A.aq(A.be(n).k(0)+".sign(...) failed: "+A.i(i)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aW,r)},
bM(a,b){return this.n6(t.L.a(a),b)},
n6(a,b){var s=0,r=A.J(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bM=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=b.a
f=g.length
if(f!==64)A.f(A.aq("Ed25519 signature must be 64 bytes (got "+f+" bytes)"))
m=b.b
B.T.da(m.a)
p=4
f=A.bI(m.a)
i=$.BO()
s=7
return A.r(A.hK(f,i,!0,A.b(["verify"],t.s)),$async$bM)
case 7:l=d
g=A.BJ(i,l,A.bI(g),A.bI(a))
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
if(j!=null){q=j.bM(a,b)
s=1
break}throw A.k(A.aq(A.be(n).k(0)+".verify(...) failed: "+A.i(k)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bM,r)}}
A.fO.prototype={
aE(a){return this.mf(t.L.a(a))},
mf(a){var s=0,r=A.J(t.yO),q,p=this,o,n
var $async$aE=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=J
s=3
return A.r(A.yh(p.ghO(),A.bI(a)),$async$aE)
case 3:q=new o.ep(n.br(c,0,null))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aE,r)}}
A.k6.prototype={
ghO(){return"SHA-256"}}
A.k7.prototype={
ghO(){return"SHA-512"}}
A.lU.prototype={}
A.lV.prototype={}
A.n5.prototype={
aY(a,b,c){var s=t.L
s.a(b)
return this.lO(s.a(a),b,c)},
lO(a,b,c){var s=0,r=A.J(t.A0),q,p=this,o,n,m,l,k
var $async$aY=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:n=p.a
m=A.DE(n.gbf())
if(m==null)throw A.k(A.aB("The hash algorithm "+n.gbf().k(0)+" is not supported by Web Crypto API."))
s=3
return A.r(p.d4(c),$async$aY)
case 3:o=e
l=A
k=A
s=4
return A.r(A.mE({name:"HKDF",hash:m,salt:A.bI(b),info:A.bI(a)},o,8*p.b),$async$aY)
case 4:q=new l.bq(new k.bt(e,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aY,r)},
d4(a){var s=0,r=A.J(t.m),q,p,o
var $async$d4=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=A
o=A
s=4
return A.r(a.cI(),$async$d4)
case 4:s=3
return A.r(p.hK(o.bI(c),"HKDF",!1,A.b(["deriveBits"],t.s)),$async$d4)
case 3:q=c
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d4,r)},
gdf(){return this.a},
ge6(){return this.b}}
A.k4.prototype={
b5(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.lg(a,s.a(b),c,d)},
hb(a,b,c){return this.b5(a,B.A,b,c)},
lg(a,b,c,d){var s=0,r=A.J(t.Ep),q,p=this,o,n
var $async$b5=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.r(p.d2(d),$async$b5)
case 4:s=3
return A.r(n.mM("HMAC",f,A.bI(a)),$async$b5)
case 3:q=new o.d2(f)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b5,r)},
d2(a){var s=0,r=A.J(t.m),q,p=this,o,n
var $async$d2=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.r(a.cI(),$async$d2)
case 4:s=3
return A.r(o.hK(n.bI(c),{name:"HMAC",hash:p.b},!1,A.b(["sign"],t.s)),$async$d2)
case 3:q=c
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d2,r)},
gbf(){return this.a}}
A.n6.prototype={
aU(){var s=0,r=A.J(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aU=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.uM()
p=4
s=7
return A.r(A.mH($.BP(),!0,A.b(["deriveBits"],t.s)),$async$aU)
case 7:m=b
e=g
s=8
return A.r(A.mG(A.v(m.privateKey)),$async$aU)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.aw(f)
k=B.cI
if(k!=null){q=k.aU()
s=1
break}throw A.k(A.aq(A.be(n).k(0)+".newKeyPair(...) failed: "+A.i(l)))
s=6
break
case 3:s=2
break
case 6:i=A.m(g.cz().d)
i.toString
i=new Uint8Array(A.aK(A.wc(i)))
h=A.m(g.cz().x)
h.toString
q=new A.d8(new A.bt(i,!1),new A.bG(new Uint8Array(A.aK(A.wc(h))),B.U),B.T)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aU,r)},
aP(a){t.L.a(a)
B.U.cF(a)
return new A.ia(null).aP(a)},
b4(a,b){return this.i3(a,b)},
i3(a2,a3){var s=0,r=A.J(t.c),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b4=A.K(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:c=a3
B.U.da(c.a)
m=A.uM()
p=4
s=7
return A.r(a2.b7(),$async$b4)
case 7:l=a5
B.T.cF(l.gaN())
a1=m
s=8
return A.r(A.jJ({crv:"X25519",d:A.mB(l.gaN()),kty:"OKP",x:A.mB(l.f.a)},$.BP(),!1,A.b(["deriveBits"],t.s)),$async$b4)
case 8:a1.b=a5
p=2
s=6
break
case 4:p=3
b=o.pop()
k=A.aw(b)
j=B.cI
if(j!=null){q=j.b4(a2,a3)
s=1
break}throw A.k(A.aq(A.be(n).k(0)+".sharedSecretKey(...) failed to construct JS private key: "+A.i(k)))
s=6
break
case 3:s=2
break
case 6:i=A.uM()
p=10
a1=i
s=13
return A.r(A.jJ({crv:"X25519",kty:"OKP",x:A.mB(c.a)},$.BP(),!1,A.b([],t.s)),$async$b4)
case 13:a1.b=a5
p=2
s=12
break
case 10:p=9
a=o.pop()
h=A.aw(a)
d=A.aq(A.be(n).k(0)+".sharedSecretKey(...) failed to construct JS public key: "+A.i(h))
throw A.k(d)
s=12
break
case 9:s=2
break
case 12:p=15
s=18
return A.r(A.mE({name:"X25519",public:i.cz()},m.cz(),256),$async$b4)
case 18:g=a5
q=new A.bq(new A.bt(g,!1),null)
s=1
break
p=2
s=17
break
case 15:p=14
a0=o.pop()
f=A.aw(a0)
d=A.aq(A.be(n).k(0)+".sharedSecretKey(...) failed: "+A.i(f))
throw A.k(d)
s=17
break
case 14:s=2
break
case 17:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$b4,r)}}
A.f1.prototype={
gP(a){return A.by(B.mT,this.gco(),this.gci(),B.t)},
J(a,b){if(b==null)return!1
return b instanceof A.f1&&this.gco()===b.gco()&&this.gci()===b.gci()},
k(a){var s=this
if(s.gci()===12)return A.be(s).k(0)+".with"+s.gco()*8+"bits()"
return A.be(s).k(0)+".with"+s.gco()*8+"bits(nonceLength: "+s.gci()+")"}}
A.hW.prototype={
gP(a){var s=this
return(s.a^s.b^s.c^s.d)>>>0},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.i4&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d},
k(a){var s=this
return A.be(s).k(0)+"(\n  parallelism: "+s.a+",\n  memory: "+s.b+",\n  iterations: "+s.c+",\n  hashLength: "+s.d+",\n)"}}
A.i_.prototype={
gd9(){return 64},
gP(a){return A.c7(B.mU)},
J(a,b){if(b==null)return!1
return b instanceof A.f7},
k(a){var s=this.a
if(s===64)return"Blake2b()"
return"Blake2b(hashLengthInBytes: "+s+")"},
dm(){return new A.f7(this.a)},
$id3:1,
ge0(){return this.a}}
A.id.prototype={
aU(){var s=new Uint8Array(32)
A.CR(s,this.a)
return this.aP(s)},
k(a){return A.be(this).k(0)+"()"}}
A.kE.prototype={
gP(a){var s=this.gdf(),r=A.c7(B.ei)
s=s.gbf()
return(11*((r^s.gP(s))>>>0)^this.ge6())>>>0},
J(a,b){var s,r
if(b==null)return!1
if(b instanceof A.kE){s=this.gdf()
r=b.gdf()
s=s.gbf().J(0,r.gbf())
s=s&&this.ge6()===b.ge6()}else s=!1
return s},
k(a){return A.be(this).k(0)+"("+this.gdf().k(0)+")"}}
A.eq.prototype={
gP(a){var s=A.c7(B.ei),r=this.gbf()
return(s^r.gP(r))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.eq&&this.gbf().J(0,b.gbf())},
k(a){var s=this,r=s.gbf()
if(r instanceof A.eG)return A.be(s).k(0)+".sha256()"
if(r instanceof A.d7)return A.be(s).k(0)+".sha512()"
return A.be(s).k(0)+"("+r.k(0)+")"}}
A.u5.prototype={}
A.eG.prototype={
gd9(){return 64},
gP(a){return A.c7(B.n3)},
ge0(){return 32},
J(a,b){if(b==null)return!1
return b instanceof A.eG},
dm(){return B.bo}}
A.u6.prototype={}
A.d7.prototype={
gd9(){return 128},
gP(a){return A.c7(B.n4)},
ge0(){return 64},
J(a,b){if(b==null)return!1
return b instanceof A.d7},
dm(){return B.cC}}
A.uy.prototype={
aU(){var s=new Uint8Array(32)
A.CR(s,this.a)
return this.aP(s)},
k(a){return A.be(this).k(0)+"()"}}
A.nj.prototype={
hw(){var s=this.gci(),r=new Uint8Array(s)
A.CR(r,this.a)
return r}}
A.np.prototype={}
A.ep.prototype={
gP(a){return B.S.aE(this.a)},
J(a,b){if(b==null)return!1
return b instanceof A.ep&&B.S.bv(this.a,b.a)},
k(a){return"Hash(["+B.i.Z(this.a,",")+"])"}}
A.cz.prototype={
cP(){var s=$.jP()
return new A.mb(new A.jc(s))},
k(a){return A.be(this).k(0)+"()"}}
A.kD.prototype={
m(a,b){t.L.a(b)
this.af(b,0,b.length,!1)}}
A.mb.prototype={
af(a,b,c,d){t.L.a(a)
if(this.c)throw A.k(A.aq("Sink is closed"))
if(b!==0||c!==J.aE(a))a=J.BV(a,b,c)
this.b.m(0,a)
if(d)this.c=!0},
au(){this.c=!0}}
A.o5.prototype={}
A.o8.prototype={
aP(a){t.L.a(a)
throw A.k(A.aB(u.V))}}
A.h7.prototype={}
A.it.prototype={
k(a){return A.be(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.lj.prototype={
k(a){return A.be(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.iu.prototype={
cF(a){var s=J.aE(t.L.a(a))
if(s!==32)throw A.k(A.x(s,"length","Algorithm "+this.a+" expects a private key with 32 bytes, but got: "+s+" bytes"))},
da(a){var s=t.L.a(a).length
if(s!==32)throw A.k(A.x(s,"length","Algorithm "+this.a+" expects a public key with 32 bytes, but got: "+s+" bytes"))},
k(a){return"KeyPairType."+this.a}}
A.d2.prototype={
gP(a){return B.S.aE(this.a)},
J(a,b){if(b==null)return!1
return b instanceof A.d2&&B.S.bv(this.a,b.a)},
k(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.i.Z(s,",")+"])"}}
A.iX.prototype={
k(a){return A.be(this).k(0)+": SecretBox has wrong message authentication code (MAC)"}}
A.d3.prototype={
bJ(a,b,c){var s=t.L
s.a(b)
return this.mF(s.a(a),b,c)},
hv(a){return this.bJ(B.A,B.A,a)},
mF(a,b,c){var s=0,r=A.J(t.sd),q,p=this,o,n
var $async$bJ=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=$.jP()
n=new Uint8Array(A.aK(c.gaN()))
q=new A.mg(p,new A.bq(new A.bt(n,!0),c.c),b,a,new A.jc(o))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bJ,r)},
k(a){return A.be(this).k(0)+"()"}}
A.cD.prototype={
m(a,b){t.L.a(b)
this.af(b,0,b.length,!1)},
au(){if(this.gcf())return
this.af(B.A,0,0,!0)}}
A.mg.prototype={
gcf(){return this.f!=null},
gf4(){throw A.k(A.j4(null))},
af(a,b,c,d){t.L.a(a)
if(this.f!=null)throw A.k(A.aq("Sink is closed"))
if(b!==0||c!==J.aE(a))a=J.BV(a,b,c)
this.e.m(0,a)
if(d)this.au()},
au(){var s,r,q,p,o,n=this
if(n.f!=null)return
s=n.b
r=n.a.b5(n.e.hJ(),n.d,n.c,s)
q=t.pF.a(new A.v8(s))
p=r.$ti
o=$.ak
r.dD(new A.e8(new A.am(o,p),8,q,null,p.i("e8<1,1>")))
n.f=r},
f3(){var s=this.f
if(s==null)throw A.k(A.aq("Sink is not closed"))
return s},
hs(){throw A.k(A.aB(this.k(0)+" does not support macSync()"))}}
A.v8.prototype={
$0(){var s=this.a
s.b.dW()
s.ej()},
$S:32}
A.mw.prototype={}
A.eF.prototype={
gP(a){return(B.S.aE(this.b.a)^B.S.aE(this.c)^B.S.aE(this.a))>>>0},
J(a,b){var s
if(b==null)return!1
if(b instanceof A.eF){s=B.S.bv(this.b.a,b.b.a)
s=s&&B.S.bv(this.c,b.c)&&B.S.bv(this.a,b.a)}else s=!1
return s},
k(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.i.Z(this.c,",")+"],\n  mac: "+this.b.k(0)+",\n)"}}
A.hl.prototype={
dW(){},
cI(){return this.b7().mZ(new A.u2(),t.L)}}
A.u2.prototype={
$1(a){return t.A0.a(a).gaN()},
$S:144}
A.bq.prototype={
gaN(){var s=this.b
if(s.a==null)throw A.k(A.aq("Secret key has been destroyed: "+this.k(0)))
return s},
gP(a){var s=A.c7(B.n2)
return(s^(this.b.a==null?0:B.S.aE(this.gaN())))>>>0},
J(a,b){if(b==null)return!1
if(this.b.a==null)return!1
return b instanceof A.bq&&B.S.bv(this.gaN(),b.gaN())},
b7(){var s=0,r=A.J(t.A0),q,p=this
var $async$b7=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:q=A.aW(p,t.A0)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b7,r)},
k(a){return"SecretKeyData(...)"}}
A.bt.prototype={
gq(a){var s=this.a
if(s==null)throw A.k(A.aB("The bytes have been destroyed"))
return J.aE(s)},
sq(a,b){throw A.k(A.aB("The bytes are unmodifiable."))},
h(a,b){var s=this.a
if(s==null)throw A.k(A.aq("The bytes have been destroyed"))
return J.at(s,b)},
j(a,b,c){A.O(c)
throw A.k(A.aB("The bytes are unmodifiable."))},
dW(){var s=this.a
if(s!=null){this.a=null
if(this.b)A.Da(s)}}}
A.fs.prototype={
gP(a){return(B.aG.aE(this.a)^this.b.gP(0))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.fs&&B.aG.bv(this.a,b.a)&&this.b.J(0,b.b)},
k(a){return"Signature(["+B.i.Z(this.a,", ")+"], publicKey: "+this.b.k(0)+")"}}
A.lw.prototype={
aP(a){t.L.a(a)
throw A.k(A.aB(u.V))}}
A.d8.prototype={
gaN(){var s=this.d
if(s.a==null)throw A.k(A.aq(this.k(0)+" has been destroyed."))
return s},
gP(a){return(this.f.gP(0)^A.c7(this.b))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.d8&&this.f.J(0,b.f)&&this.b===b.b},
b7(){var s=0,r=A.J(t.jC),q,p=this
var $async$b7=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.k(A.aq("Private key has been destroyed"))
q=p
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b7,r)},
dY(){var s=0,r=A.J(t.L),q,p=this
var $async$dY=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.k(A.aq("Private key has been destroyed"))
q=p.gaN()
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dY,r)},
bw(){var s=0,r=A.J(t.qC),q,p=this
var $async$bw=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:q=p.f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bw,r)},
k(a){var s=this.f.k(0)
return"SimpleKeyPairData(..., publicKey: "+s+")"},
$iCl:1}
A.bG.prototype={
gP(a){return(B.aG.aE(this.a)^A.c7(this.b))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.bG&&this.b===b.b&&B.aG.bv(this.a,b.a)},
l(a,b){var s,r,q,p=this.a,o=t.qC.a(b).a,n=p.length,m=o.length,l=n<=m?n:m
for(s=0;s<l;++s){if(!(s<n))return A.a(p,s)
r=p[s]
if(!(s<m))return A.a(o,s)
q=B.d.l(r,o[s])
if(q!==0)return q}return B.d.l(n,m)},
k(a){return"SimplePublicKey(["+B.i.Z(this.a,",")+"], type: "+this.b.k(0)+")"},
$ib0:1}
A.la.prototype={
m(a,b){this.a=new A.ep(b.a)},
au(){},
$ib6:1}
A.pl.prototype={
gd9(){return this.ge1().glb()},
aE(a){t.L.a(a)
return A.aW(new A.ep(this.ge1().O(a).a),t.yO)},
cP(){var s=new A.la(),r=this.ge1().cY(s),q=this.ge0()
q=new Uint8Array(q)
return new A.lb(this.ge1(),r,s,q)}}
A.lb.prototype={
gcf(){return this.e},
gq(a){return this.d},
m(a,b){var s=this
t.L.a(b)
if(s.e)throw A.k(A.aq("Already closed"))
s.d=s.d+b.length
s.b.m(0,b)},
af(a,b,c,d){var s=this
t.L.a(a)
if(s.e)throw A.k(A.aq("Already closed"))
A.bR(b,c,J.aE(a))
s.d=s.d+(c-b)
s.b.af(a,b,c,d)
if(d)s.au()},
au(){var s=this
if(s.e)return
s.e=!0
s.b.au()
B.i.b1(s.f,0,s.c.a.a)},
cT(){var s=this,r=s.c
r.a=null
s.b=s.a.cY(r)
s.e=!1
s.d=0},
gbx(){return this.f}}
A.kh.prototype={
bt(a,b,c){return this.lM(a,t.L.a(b),c)},
lM(a,b,c){var s=0,r=A.J(t.L),q,p=this,o,n
var $async$bt=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.r(c.b7(),$async$bt)
case 3:q=p.lN(o,n,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bt,r)},
lN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(b)
s=c.gaN().gq(0)
r=this.d
if(s!==r)throw A.k(A.x(c,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
q=A.FE(c)
p=new Uint32Array(4)
A.mA(p,0,p,0,q)
p[0]=A.bU(p[0])
p[1]=A.bU(p[1])
p[2]=A.bU(p[2])
p[3]=A.bU(p[3])
o=A.DL(p,a.c)
n=J.mQ(B.i.gab(o),0,null)
m=a.a
l=B.S.bv(B.cB.fA(m,b,q,p,n).a,a.b.a)
if(!l)throw A.k(A.Eq())
A.xI(o,1)
l=m.length
k=B.d.C(l+31,16)*4
j=new Uint32Array(k)
for(i=0;i<k;i+=4){A.mA(j,i,n,0,q)
A.xI(o,1)}h=J.br(B.E.gab(j),j.byteOffset,l)
for(k=h.length,g=h.$flags|0,i=0;i<l;++i){if(!(i<k))return A.a(h,i)
f=h[i]
e=m[i]
g&2&&A.C(h)
h[i]=f^e}return h},
bG(a,b,c){var s=t.L
return this.lY(s.a(a),s.a(b),c)},
lY(a,b,c){var s=0,r=A.J(t.yX),q,p=this,o,n
var $async$bG=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.r(c.b7(),$async$bG)
case 3:q=p.lZ(o,n,null,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bG,r)},
lZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(b)
s=d.gaN().gq(0)
r=this.d
if(s!==r)throw A.k(A.x(d,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
c=this.hw()
q=A.FE(d)
p=new Uint32Array(4)
A.mA(p,0,p,0,q)
p[0]=A.bU(p[0])
p[1]=A.bU(p[1])
p[2]=A.bU(p[2])
p[3]=A.bU(p[3])
o=A.DL(p,c)
n=J.mQ(B.i.gab(o),0,null)
m=new Uint32Array(A.aK(n))
A.xI(o,1)
e=a.length
l=(B.d.C(e+15,16)+1)*4
k=new Uint32Array(l)
for(j=0;j<l;j+=4){A.mA(k,j,n,0,q)
A.xI(o,1)}i=J.br(B.E.gab(k),k.byteOffset,e)
for(l=i.length,h=i.$flags|0,j=0;j<e;++j){if(!(j<l))return A.a(i,j)
g=i[j]
f=a[j]
h&2&&A.C(i)
i[j]=g^f}return new A.eF(i,B.cB.fA(i,b,q,p,m),c)},
gci(){return this.c},
gco(){return this.d}}
A.km.prototype={
b5(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
s.a(b)
throw A.k(A.aB("AES-GCM MAC algorithm can NOT be called separately."))},
f7(a,b,c){var s=t.L
s.a(b)
s.a(a)
throw A.k(A.j4(null))},
k(a){return"DartGcm()"},
fA(a,b,c,d,e){var s,r,q,p,o,n=4294967296,m=t.L
m.a(a)
m.a(b)
s=new Uint32Array(4)
A.ki(s,d,b)
A.ki(s,d,a)
r=8*b.length
q=8*a.length
p=new DataView(new ArrayBuffer(16))
p.setUint32(0,B.d.C(r,n),!1)
p.setUint32(4,B.d.R(r,n),!1)
p.setUint32(8,B.d.C(q,n),!1)
p.setUint32(12,B.d.R(q,n),!1)
A.ki(s,d,J.br(B.aC.gab(p),0,null))
o=new Uint32Array(4)
A.mA(o,0,e,0,c)
s[0]=(s[0]^o[0])>>>0
s[1]=(s[1]^o[1])>>>0
s[2]=(s[2]^o[2])>>>0
s[3]=(s[3]^o[3])>>>0
return new A.d2(J.br(B.E.gab(s),0,null))}}
A.lY.prototype={}
A.m0.prototype={}
A.nq.prototype={}
A.i4.prototype={
gP(a){return(A.hW.prototype.gP.call(this,0)^B.fA.gP(null))>>>0},
J(a,b){var s
if(b==null)return!1
if(b instanceof A.i4)s=this.ig(0,b)
else s=!1
return s},
dd(a,b){var s=B.A,r=B.A
return this.lP(t.L.a(a),b)},
lP(a3,a4){var s=0,r=A.J(t.c),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$dd=A.K(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:j=B.A
i=B.A
h=m.b
g=m.a
f=m.c
e=m.d
d=new Uint32Array(256)
c=new Uint32Array(256)
b=new A.nr(g,h,f,e,B.br,19,null,d,c,new Uint32Array(256))
b.ix(null,e,f,null,h,null,B.br,g,19)
l=b
p=3
a=l
a0=j
a1=a3
a2=i
s=7
return A.r(a4.cI(),$async$dd)
case 7:s=6
return A.r(a.dV(a0,a1,a2,a6),$async$dd)
case 6:k=a6
q=new A.bq(new A.bt(k,!1),null)
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.ed()
s=n.pop()
break
case 5:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$dd,r)}}
A.fV.prototype={
U(){return"DartArgon2Mode."+this.b}}
A.kj.prototype={
gd8(){var s,r=this,q=r.at
if(q===$){s=new A.nt(r).$0()
r.at!==$&&A.fL()
r.at=s
q=s}return q},
ix(a,b,c,d,e,f,g,h,i){var s,r,q=this,p=null
if($.f_()!==B.a1)A.f(A.j4("The platform should be little-endian."))
s=q.a
if(s<1)throw A.k(A.x(s,"parallelism",p))
r=q.b
if(r<8*s)throw A.k(A.x(r,"memory",p))
s=q.d
if(s<4)throw A.k(A.x(s,"hashLength",p))
s=q.c
if(s<1)throw A.k(A.x(s,"iterations",p))},
dV(a,b,c,d){var s=t.L
s.a(d)
s.a(b)
s.a(c)
return this.lR(s.a(a),b,c,d)},
lR(a,b,c,d){var s=0,r=A.J(t.L),q,p=this,o,n,m,l,k
var $async$dV=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:k=t.L
k.a(a)
k.a(b)
k.a(c)
k.a(d)
k=J.aE(d)
o=new DataView(new ArrayBuffer(40+k+b.length))
o.setUint32(0,p.a,!0)
o.setUint32(4,p.d,!0)
o.setUint32(8,p.b,!0)
o.setUint32(12,p.c,!0)
o.setUint32(16,p.f,!0)
o.setUint32(20,p.e.a,!0)
A.ns(o,A.ns(o,A.ns(o,A.ns(o,24,d),b),c),a)
n=J.br(B.aC.gab(o),o.byteOffset,o.byteLength)
m=B.cH.mg(n).a
B.i.aO(n,0,n.length,0)
s=3
return A.r(p.de(m),$async$dV)
case 3:l=f
B.i.aO(m,0,m.length,0)
q=l
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dV,r)},
de(a){return this.lS(a)},
lS(a){var s=0,r=A.J(t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$de=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=m.as
h=new A.cN(new A.am($.ak,t.hR),t.th)
g=h.a
m.as=g
s=i!=null?3:4
break
case 3:s=5
return A.r(i,$async$de)
case 5:case 4:m.fk()
m.ay=!0
p=6
m.mk(a)
s=9
return A.r(m.e4(),$async$de)
case 9:l=m.jL()
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
h.lk()
s=n.pop()
break
case 8:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$de,r)},
bO(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=4294967296
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
f=B.d.C(g,a1)
e=s+p+(g<<1>>>0)
q=q+n+B.d.C(e,a1)+((f+(s>>>16)*(p>>>16)<<1>>>0)+(g>>>31&1))>>>0
s=e>>>0
d=(j^s)>>>0
c=(h^q)>>>0
g=(m&65535)*c+((m&4294901760)>>>0)*(c&65535)
f=B.d.C(g,a1)
b=m+c+(g<<1>>>0)
k=k+d+B.d.C(b,a1)+((f+(m>>>16)*(c>>>16)<<1>>>0)+(g>>>31&1))>>>0
m=b>>>0
a=p^m
a0=n^k
p=((a0&16777215)<<8|a>>>24)>>>0
n=((a&16777215)<<8|a0>>>24)>>>0
g=(s&65535)*p+((s&4294901760)>>>0)*(p&65535)
f=B.d.C(g,a1)
e=s+p+(g<<1>>>0)
q=q+n+B.d.C(e,a1)+((f+(s>>>16)*(p>>>16)<<1>>>0)+(g>>>31&1))>>>0
s=e>>>0
a=c^s
c=d^q
j=((c&65535)<<16|a>>>16)>>>0
h=((a&65535)<<16|c>>>16)>>>0
g=(m&65535)*j+((m&4294901760)>>>0)*(j&65535)
f=B.d.C(g,a1)
b=m+j+(g<<1>>>0)
k=k+h+B.d.C(b,a1)+((f+(m>>>16)*(j>>>16)<<1>>>0)+(g>>>31&1))>>>0
m=b>>>0
d=p^m
c=n^k
a2.$flags&2&&A.C(a2)
a2[a3]=s
a2[r]=q
a2[a4]=(d<<1|c>>>31)>>>0
a2[o]=(c<<1|d>>>31)>>>0
a2[a5]=m
a2[l]=k
a2[a6]=j
a2[i]=h},
bP(a,b,c){var s,r,q=this,p=q.ax
if(p==null)p=q.ax=q.iP()
s=B.d.aA(q.gd8(),q.a)
r=b*s+c*B.d.C(s,4)+a
if(!(r>=0&&r<p.length))return A.a(p,r)
return p[r]},
mk(a){var s,r,q,p,o,n,m,l=this
if(a.length!==64)throw A.k(A.b2(null,null))
s=l.bP(3,0,0)
r=J.br(B.E.gab(s),s.byteOffset,72)
B.i.b1(r,0,a)
q=J.jS(B.i.gab(r),r.byteOffset,r.byteLength)
for(p=l.a,o=q.$flags|0,n=0;n<p;++n){o&2&&A.C(q,11)
q.setUint32(68,n,!0)
q.setUint32(64,0,!0)
m=l.bP(0,n,0)
l.fi(r,J.br(B.E.gab(m),m.byteOffset,m.byteLength))
q.setUint32(64,1,!0)
m=l.bP(1,n,0)
l.fi(r,J.br(B.E.gab(m),m.byteOffset,m.byteLength))}B.i.aO(r,0,r.length,0)},
e4(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$e4=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.c,o=q.a,n=0
case 2:if(!(n<p)){s=4
break}m=0
case 5:if(!(m<4)){s=7
break}l=0
case 8:if(!(l<o)){s=10
break}s=11
return A.r(q.e7(n,l,m),$async$e4)
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
return A.I($async$e4,r)},
hB(a,b,c,d,e,f,g,h,i){var s=this,r=b+2,q=c+2,p=d+2,o=e+2,n=f+2,m=g+2,l=h+2,k=i+2
s.bO(a,b,d,f,h)
s.bO(a,r,p,n,l)
s.bO(a,c,e,g,i)
s.bO(a,q,o,m,k)
s.bO(a,b,p,g,k)
s.bO(a,r,e,m,h)
s.bO(a,c,o,f,l)
s.bO(a,q,d,n,i)},
fa(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this.Q
for(s=a.length,r=b.length,q=h.$flags|0,p=0;p<256;++p){if(!(p<s))return A.a(a,p)
o=a[p]
if(!(p<r))return A.a(b,p)
n=b[p]
q&2&&A.C(h)
if(!(p<256))return A.a(h,p)
h[p]=(o^n)>>>0}for(p=0;p<8;++p){m=p*32
this.hB(h,m,m+4,m+8,m+12,m+16,m+20,m+24,m+28)}for(p=0;p<8;++p){l=p*4
this.hB(h,l,32+l,64+l,96+l,128+l,160+l,192+l,224+l)}if(c)for(q=d.length,o=d.$flags|0,p=0;p<256;++p){if(!(p<q))return A.a(d,p)
n=d[p]
k=h[p]
if(!(p<s))return A.a(a,p)
j=a[p]
if(!(p<r))return A.a(b,p)
i=b[p]
o&2&&A.C(d)
d[p]=(n^k^j^i)>>>0}else for(q=d.$flags|0,p=0;p<256;++p){o=h[p]
if(!(p<s))return A.a(a,p)
n=a[p]
if(!(p<r))return A.a(b,p)
k=b[p]
q&2&&A.C(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o^n^k)>>>0}},
e7(c4,c5,c6){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$e7=A.K(function(c7,c8){if(c7===1)return A.G(c8,r)
for(;;)switch(s){case 0:b8=p.gd8()
b9=p.a
c0=B.d.aA(b8,b9)
c1=B.d.C(c0,4)
c2=c4===0
c3=c2&&c6===0?2:0
o=c4>0,n=p.e,m=t.z,l=c6-1,k=c6<2,j=p.y,i=c6===0,h=p.z,g=h.$flags|0,f=p.c,e=n.a,d=!i,c=(c6+1)%4*c1,b=3*c1,a=n===B.br,a0=b-1,a1=c6*c1,a2=a1-1,a3=c3
case 3:if(!(a3<c1)){s=5
break}s=B.d.R(a3,500)===0&&a3>0?6:7
break
case 6:s=8
return A.r(A.IK(B.f0,m),$async$e7)
case 8:case 7:a4=a3===0
a5=a4?B.d.R(l,4):c6
a6=a3-1
a7=p.bP(B.d.R(a6,c1),c5,a5)
if(a)a8=k&&c2?B.cG:B.eQ
else a8=n
if(a8===B.cG){a9=B.d.R(a3,128)
if(a9!==0)a5=a3===2&&i&&c2
else a5=!0
if(a5){g&2&&A.C(h)
h[0]=c4
h[2]=c5
h[4]=c6
h[6]=b8
h[8]=f
h[10]=e
h[12]=1+B.d.C(a3,128)
a5=$.GK()
p.fa(h,a5,!1,j)
p.fa(j,a5,!1,j)}a5=2*a9
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
break}b1=a7[1]}b2=B.d.R(b1,b9)
if(c2&&i)b2=c5
if(c2){if(!d||b2===c5)b3=a1+a3-1
else b3=a4?a2:a1
b4=0}else{if(b2===c5)b3=b+a6
else b3=a4?a0:b
b4=c}a4=b0&65535
a5=b0>>>16
b5=a5*a5+B.d.C(a4*b0+((b0&4294901760)>>>0)*a4,4294967296)>>>0
b6=B.d.C((b3&65535)*b5+((b3&4294901760)>>>0)*(b5&65535),4294967296)
b7=B.d.R(b4+b3-1-B.d.R(B.d.ao(b3,16)*(b5>>>16)+b6>>>0,b3),c0)
b4=B.d.aA(b7,c1)
p.fa(a7,p.bP(B.d.R(b7,c1),b2,b4),o,p.bP(a3,c5,c6))
case 4:++a3
s=3
break
case 5:case 1:return A.H(q,r)}})
return A.I($async$e7,r)},
ed(){if(this.ay)return
this.ax=null},
fi(a,b){var s,r,q=b.length,p=B.cH.hG(Math.min(q,64)),o=A.n2(p.a),n=t.L,m=n.a(A.b([q&255,q>>>8&255,q>>>16&255,q>>>24&255],t.t))
o.af(m,0,m.length,!1)
n.a(a)
o.af(a,0,a.length,!1)
o.au()
if(q<=64){B.i.b1(b,0,o.gbx())
return}m=o.gbx()
new Uint8Array(A.aK(m))
B.i.b1(b,0,A.bz(m,0,A.cP(32,"count",t.S),A.aT(m).i("Q.E")))
s=q-32
a=new Uint8Array(A.aK(m))
o.d3(null)
for(r=32;s>64;){n.a(a)
o.af(a,0,a.length,!1)
o.au()
B.i.b1(b,r,m)
r+=32
s-=32
B.i.b1(a,0,m)
o.d3(null)}if(B.d.R(q,64)!==0)o=A.n2(p.hG(s).a)
n.a(a)
o.af(a,0,a.length,!1)
o.au()
B.i.b1(b,r,o.gbx())},
iP(){var s,r,q=this.fk(),p=this.gd8(),o=J.DZ(p,t.Dd)
for(s=J.hJ(q),r=0;r<p;++r)o[r]=s.eS(q,1024*r,256)
return o},
jL(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=h-1
h=B.d.C(B.d.aA(i.gd8(),h),4)-1
s=i.bP(h,g,3)
for(r=s.length,q=0;q<g;++q){p=i.bP(h,q,3)
for(o=p.length,n=s.$flags|0,m=0;m<256;++m){if(!(m<r))return A.a(s,m)
l=s[m]
if(!(m<o))return A.a(p,m)
k=p[m]
n&2&&A.C(s)
s[m]=(l^k)>>>0}}j=new Uint8Array(i.d)
i.fi(J.br(B.E.gab(s),s.byteOffset,s.byteLength),j)
return j}}
A.nt.prototype={
$0(){var s=this.a,r=4*s.a
return r*B.d.aA(s.b,r)},
$S:78}
A.nr.prototype={
fk(){var s,r=this,q=r.ch
if(q!=null)return q
r.ed()
s=r.gd8()
return r.ch=B.E.gab(new Uint32Array(256*s))},
ed(){if(this.ay)return
this.ch=null
this.ih()}}
A.f7.prototype={
dm(){return this},
hG(a){if(a===this.a)return this
return new A.f7(a)},
f7(a,b,c){var s,r=t.L
r.a(b)
r.a(a)
r=A.n2(this.a)
s=c.gaN()
if(s.gq(0)>64)A.f(A.x(r.w,"secretKey",null))
r.d3(s)
return r},
cP(){return A.n2(this.a)}}
A.lZ.prototype={}
A.m_.prototype={}
A.k0.prototype={
gbx(){var s,r=this,q=r.b
if(q===$){s=J.br(B.E.gab(r.a),0,r.w)
r.b!==$&&A.fL()
r.b=s
q=s}return q},
gfz(){var s,r=this,q=r.d
if(q===$){s=J.br(B.E.gab(r.c),0,null)
r.d!==$&&A.fL()
r.d=s
q=s}return q},
gcf(){return this.f},
gq(a){return this.e},
gf4(){return this.gbx()},
af(a,b,c,d){var s,r,q,p,o,n,m=this
t.L.a(a)
if(m.f)throw A.k(A.aq("Already closed"))
s=m.gfz()
r=m.e
for(q=J.an(a),p=b;p<c;++p){o=B.d.R(r,128)
if(o===0&&r>0){m.e=r
m.fI(!1)}n=q.h(a,p)
s.$flags&2&&A.C(s)
if(!(o<s.length))return A.a(s,o)
s[o]=n;++r}m.e=r
if(d)m.au()},
au(){var s,r,q,p=this
if(p.f)return
p.f=!0
s=p.e
if(s===0||B.d.R(s,128)!==0)for(r=B.d.R(s,128);r<128;++r){q=p.gfz()
q.$flags&2&&A.C(q)
if(!(r<q.length))return A.a(q,r)
q[r]=0}p.fI(!0)},
cT(){this.d3(null)},
fI(a){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.r,h=k.c
for(s=i.$flags|0,r=0;r<16;++r){q=j[r]
s&2&&A.C(i)
if(!(r<32))return A.a(i,r)
i[r]=q}for(r=0;r<16;++r){q=16+r
p=B.dL[r]
s&2&&A.C(i)
if(!(q<32))return A.a(i,q)
i[q]=p}o=k.e
q=i[24]
s&2&&A.C(i)
if(24>=32)return A.a(i,24)
i[24]=(q^o>>>0)>>>0
q=i[25]
s=B.d.C(o,4294967296)
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
A.f4(i,0,8,16,24,h,s,B.p[q])
q=m+2
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+3
if(!(s<192))return A.a(B.p,s)
A.f4(i,2,10,18,26,h,q,B.p[s])
s=m+4
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+5
if(!(q<192))return A.a(B.p,q)
A.f4(i,4,12,20,28,h,s,B.p[q])
q=m+6
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+7
if(!(s<192))return A.a(B.p,s)
A.f4(i,6,14,22,30,h,q,B.p[s])
s=m+8
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+9
if(!(q<192))return A.a(B.p,q)
A.f4(i,0,10,20,30,h,s,B.p[q])
q=m+10
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+11
if(!(s<192))return A.a(B.p,s)
A.f4(i,2,12,22,24,h,q,B.p[s])
s=m+12
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+13
if(!(q<192))return A.a(B.p,q)
A.f4(i,4,14,16,26,h,s,B.p[q])
q=m+14
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+15
if(!(s<192))return A.a(B.p,s)
A.f4(i,6,8,18,28,h,q,B.p[s])}for(s=j.$flags|0,r=0;r<16;++r){q=j[r]
p=i[r]
l=i[16+r]
s&2&&A.C(j)
if(!(r<16))return A.a(j,r)
j[r]=(q^p^l)>>>0}},
d3(a){var s,r,q,p,o,n=this
t.ks.a(a)
n.f=!1
n.e=0
B.E.aO(n.c,0,32,0)
B.E.aO(n.r,0,32,0)
s=n.a
B.E.b1(s,0,B.dL)
r=s[0]
q=a==null
p=q?0:a.gq(0)<<8
s.$flags&2&&A.C(s)
s[0]=(r^16842752^p^n.w)>>>0
if(!q){o=a.gq(0)
if(o>64)throw A.k(A.b2(null,null))
r=t.L
r.a(a)
n.af(a,0,a.gq(0),!1)
q=B.d.R(o,128)
r=r.a(new Uint8Array(128-q))
n.af(r,0,r.length,!1)}},
$icD:1}
A.lT.prototype={}
A.i5.prototype={
eQ(a,b){if($.f_()!==B.a1)A.f(A.aq("BigEndian systems are unsupported"))
return new A.kh(a,b,this.a)},
cH(){return A.DM(this.a)},
cL(a,b){return new A.nv(a,b)},
cM(a){if(a instanceof A.i9)return B.eR
return new A.i7(a)},
cp(){return B.bo},
ei(){return B.cC},
dq(){return new A.ia(this.a)}}
A.i6.prototype={
mg(a){var s
t.L.a(a)
s=this.cP()
s.af(a,0,a.length,!0)
if(!s.gcf())A.f(A.aq("Not closed"))
return new A.ep(new Uint8Array(A.aK(s.gbx())))}}
A.f8.prototype={
m(a,b){t.L.a(b)
this.af(b,0,J.aE(b),!1)},
au(){this.af(B.A,0,0,!0)}}
A.nw.prototype={
b4(a,b){var s=0,r=A.J(t.c),q,p,o,n,m,l
var $async$b4=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.r(a.b7(),$async$b4)
case 3:m=d
l=m.b
l=l!==B.U
if(l)A.f(A.x(m,"keyPairData",null))
l=b.b!==B.U
if(l)A.f(A.x(b,"remotePublicKey",null))
p=A.C0(m.gaN())
o=b.a
B.U.cF(p)
B.U.da(o)
n=new Uint8Array(32)
A.DP(n,p,new Uint8Array(A.aK(o)))
q=new A.bq(new A.bt(n,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b4,r)}}
A.i8.prototype={
b5(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.lh(a,s.a(b),c,d)},
hb(a,b,c){return this.b5(a,B.A,b,c)},
lh(a,b,c,d){var s=0,r=A.J(t.Ep),q,p=this,o
var $async$b5=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:s=3
return A.r(p.bJ(b,c,d),$async$b5)
case 3:o=f
o.af(a,0,J.aE(a),!0)
s=4
return A.r(o.f3(),$async$b5)
case 4:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b5,r)},
bJ(a,b,c){var s=t.L
s.a(b)
return this.mE(s.a(a),b,c)},
hv(a){return this.bJ(B.A,B.A,a)},
mE(a,b,c){var s=0,r=A.J(t.kk),q,p=this,o,n
var $async$bJ=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.r(c.b7(),$async$bJ)
case 3:q=p.f7(o,n,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bJ,r)}}
A.cT.prototype={
f3(){return A.aW(this.hs(),t.Ep)},
hs(){if(!this.gcf())throw A.k(A.aq("Sink is not closed"))
return new A.d2(new Uint8Array(A.aK(this.gf4())))},
$ibf:1,
$ib6:1,
$icD:1}
A.kk.prototype={
aP(a){return this.mC(t.L.a(a))},
mC(a){var s=0,r=A.J(t.gZ),q,p=this,o,n,m
var $async$aP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:if(J.aE(a)!==32)throw A.k(A.b2("Seed must have 32 bytes",null))
o=A
n=A
m=new A.bt(new Uint8Array(A.aK(a)),!1)
s=3
return A.r(p.dJ(a),$async$aP)
case 3:q=o.aW(new n.d8(m,c,B.T),t.jC)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aP,r)},
aW(a,b,c){return this.i5(0,t.L.a(b),c)},
i5(a,a0,a1){var s=0,r=A.J(t.bu),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$aW=A.K(function(a2,a3){if(a2===1)return A.G(a3,r)
for(;;)switch(s){case 0:c=t.jC
s=3
return A.r(a1.b7(),$async$aW)
case 3:d=c.a(a3).gaN()
B.T.cF(d)
o=p.b
s=4
return A.r(o.aE(d),$async$aW)
case 4:n=a3.a
m=B.i.aK(n,0,32)
A.DO(m)
l=new Int32Array(16)
l=new A.aJ(l)
l.dw(new Uint8Array(A.aK(m)))
k=$.BQ()
j=A.C_(A.kl(l,k))
B.T.da(j)
l=t.uw
i=new A.ln()
h=t.L
c=A
b=h
s=5
return A.r(o.aE(A.BY(A.b([B.i.dB(n,32),a0],l))),$async$aW)
case 5:n=c.mC(b.a(a3.a))
g=$.Dg()
i.a=n.R(0,g)
f=A.C_(A.kl(i.hM(),k))
c=A
b=h
s=6
return A.r(o.aE(A.BY(A.b([f,j,a0],l))),$async$aW)
case 6:h=c.mC(b.a(a3.a)).R(0,g).a0(0,A.mC(h.a(m)).R(0,g)).R(0,g)
l=i.a
l.toString
g=h.B(0,l).R(0,g)
e=A.LT(g,new Uint8Array(32))
o=A.B(f,t.S)
B.a.a1(o,e)
q=new A.fs(new Uint8Array(A.aK(o)),new A.bG(j,B.T))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aW,r)},
bM(a,b){return this.n7(t.L.a(a),b)},
n7(a,b){var s=0,r=A.J(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$bM=A.K(function(a0,a1){if(a0===1)return A.G(a1,r)
for(;;)switch(s){case 0:g=b.b.a
f=b.a
B.T.da(g)
o=f.length
if(o!==64)A.f(A.aq("Ed25519 signature must be 64 bytes (got "+o+" bytes)"))
n=A.DN(g)
if(n==null){q=!1
s=1
break}m=B.i.aK(f,0,32)
l=A.DN(m)
if(l==null){q=!1
s=1
break}k=A.mC(B.i.dB(f,32))
o=$.Dg()
if(k.l(0,o)>=0){q=!1
s=1
break}j=new A.ln()
e=j
d=A
c=t.L
s=3
return A.r(p.b.aE(A.BY(A.b([m,g,a],t.uw))),$async$bM)
case 3:e.a=d.mC(c.a(a1.a)).R(0,o)
o=new Int32Array(16)
o=new A.aJ(o)
o.c3(k)
i=A.kl(o,$.BQ())
h=A.kt()
A.BZ(h,A.kl(j.hM(),n),l,null)
q=i.m0(h)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bM,r)},
dJ(a){return this.kh(t.L.a(a))},
kh(a){var s=0,r=A.J(t.qC),q,p=this,o,n,m,l,k
var $async$dJ=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:m=Uint8Array
l=A
k=B.i
s=3
return A.r(p.b.aE(a),$async$dJ)
case 3:n=new m(l.aK(k.aK(c.a,0,32)))
A.DO(n)
o=new Int32Array(16)
o=new A.aJ(o)
o.dw(n)
q=new A.bG(A.C_(A.kl(o,$.BQ())),B.T)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dJ,r)}}
A.nu.prototype={
$2(a,b){return A.O(a)+J.aE(t.L.a(b))},
$S:136}
A.dv.prototype={
m0(a){var s,r,q,p,o=new Int32Array(16),n=new A.aJ(o)
o=new Int32Array(16)
s=new A.aJ(o)
o=this.a
r=a.c
n.al(o,r)
q=this.c
p=a.a
s.al(q,p)
n.bn(n,s)
if(!n.gdi())return!1
n.al(o,r)
s.al(q,p)
n.bn(n,s)
return n.gdi()}}
A.nH.prototype={
$0(){var s,r,q=null,p=new Int32Array(16),o=new A.aJ(p)
o.c3(A.uI("46316835694926478169428394003475163141307993866256225615783033603165251855960",q))
p=new Int32Array(16)
s=new A.aJ(p)
s.c3(A.uI("15112221349535400772501151409588531511454012693041857206046113283949847762202",q))
p=new Int32Array(16)
r=new A.aJ(p)
r.al(s,o)
return new A.dv(s,o,$.Df(),r)},
$S:135}
A.aJ.prototype={
gdi(){return B.b5.b6(this.a,new A.tR())},
d6(a,b,c){var s,r,q,p,o,n,m=b.a,l=c.a,k=this.a
for(s=m.length,r=l.length,q=k.$flags|0,p=0,o=0;o<16;++o){if(!(o<s))return A.a(m,o)
n=m[o]
if(!(o<r))return A.a(l,o)
p=n+l[o]+B.d.C(p,65536)
q&2&&A.C(k)
if(!(o<k.length))return A.a(k,o)
k[o]=p&65535}if(15>=k.length)return A.a(k,15)
s=k[15]
r=B.d.C(p,65536)
q&2&&A.C(k)
k[15]=s+r*65536
this.eA()},
hq(a){var s,r,q,p,o,n=this.a,m=a.a
for(s=n.length,r=m.length,q=15;q>=0;--q){if(!(q<s))return A.a(n,q)
p=n[q]
if(!(q<r))return A.a(m,q)
o=m[q]
if(p<o)return!1
if(p>o)return!0}return!0},
al(a,b){A.cb(this.a,a.a,b.a)
this.eA()},
hz(a){this.c3(A.uI(a,null))},
f9(a,b){this.c3(a.b_().my(0,b.b_(),$.GX()))},
c3(a){var s,r,q=this.a
if(a.a)throw A.k(A.b2("Negative",null))
for(s=0;s<16;++s){r=$.HM().dr(0,a).b0(0)
q.$flags&2&&A.C(q)
if(!(s<q.length))return A.a(q,s)
q[s]=r
a=a.c4(0,16)}},
dw(a){var s,r,q=J.jS(B.i.gab(a),a.byteOffset,32),p=this.a
for(s=0;s<16;++s){r=q.getUint16(2*s,!0)
p.$flags&2&&A.C(p)
if(!(s<p.length))return A.a(p,s)
p[s]=r}},
bn(a,b){var s,r,q,p,o,n,m,l,k=a.a,j=b.a,i=this.a,h=$.mO().a
for(s=h.length,r=k.length,q=j.length,p=i.$flags|0,o=0,n=0;n<16;++n){if(!(n<s))return A.a(h,n)
m=h[n]
if(!(n<r))return A.a(k,n)
l=k[n]
if(!(n<q))return A.a(j,n)
o=m+m+l-j[n]+B.d.ao(o,16)
p&2&&A.C(i)
if(!(n<i.length))return A.a(i,n)
i[n]=o&65535}if(15>=i.length)return A.a(i,15)
s=i[15]
r=B.d.ao(o,16)
p&2&&A.C(i)
i[15]=(s|r<<16)>>>0
this.eA()},
b_(){var s,r,q,p="Invalid integer: ",o=this.a,n=$.bn()
for(s=o.length,r=0;r<16;++r){if(!(r<s))return A.a(o,r)
q=o[r]
if(q<0)throw A.k(A.aq(p+A.i(o)))
if(q>=65536)throw A.k(A.aq(p+A.i(o)))
n=n.hX(0,A.aC(q).b2(0,r*16))}return n},
hK(a){var s,r,q,p,o=this.a,n=J.jS(B.i.gab(a),a.byteOffset,32)
for(s=o.length,r=n.$flags|0,q=0;q<16;++q){if(!(q<s))return A.a(o,q)
p=o[q]
r&2&&A.C(n,10)
n.setUint16(2*q,p&65535,!0)}return a},
k(a){return"0x"+this.b_().bL(0,16)},
eA(){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=s.$flags|0;this.hq($.mO());){if(0>=r)return A.a(s,0)
p=s[0]-65517
q&2&&A.C(s)
s[0]=p&65535
for(o=s.$flags|0,n=1;n<15;++n,p=m){if(!(n<r))return A.a(s,n)
m=s[n]-65535-(B.d.ao(p,16)&1)
o&2&&A.C(s)
s[n]=m&65535}if(15>=r)return A.a(s,15)
l=s[15]
k=B.d.ao(p,16)
o&2&&A.C(s)
s[15]=l-32767-(k&1)}}}
A.tR.prototype={
$1(a){return A.O(a)===0},
$S:134}
A.ln.prototype={
hM(){var s,r=new Int32Array(16)
r=new A.aJ(r)
s=this.a
s.toString
r.c3(s)
return r},
k(a){return"0x"+this.a.bL(0,16)}}
A.nv.prototype={
aY(a,b,c){var s=t.L
s.a(b)
return this.lQ(s.a(a),b,c)},
lQ(a3,a4,a5){var s=0,r=A.J(t.A0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aY=A.K(function(a6,a7){if(a6===1)return A.G(a7,r)
for(;;)switch(s){case 0:f=p.a
a0=A
a1=A
a2=f
s=4
return A.r(a5.cI(),$async$aY)
case 4:s=3
return A.r(a2.hb(a7,a4,new A.bq(new A.bt(a4,!1),null)),$async$aY)
case 3:e=new a0.bq(new a1.bt(a7.a,!1),null)
d=f.gbf().ge0()
c=p.b
b=B.d.aA(c,d)
a=new Uint8Array(c)
o=t.t,n=J.an(a3),m=B.A,l=0
case 5:if(!(l<=b)){s=7
break}s=8
return A.r(f.hv(e),$async$aY)
case 8:k=a7
k.m(0,m)
if(n.gaq(a3))k.m(0,a3)
k.m(0,A.b([1+l&255],o))
k.au()
s=9
return A.r(k.f3(),$async$aY)
case 9:m=a7.a
j=l*d
if(j+m.length<=c)B.i.b1(a,j,m)
else{i=c-j
h=A.aT(m)
g=new A.fv(m,0,i,h.i("fv<Q.E>"))
g.iz(m,0,i,h.i("Q.E"))
B.i.b1(a,j,g)}case 6:++l
s=5
break
case 7:q=new A.bq(new A.bt(a,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aY,r)},
gdf(){return this.a},
ge6(){return this.b}}
A.i7.prototype={
f7(a,b,c){var s,r,q,p,o,n,m,l,k=t.L
k.a(b)
k.a(a)
s=this.a
r=s.gd9()
q=new Uint8Array(r)
p=s.dm().cP()
o=s.dm().cP()
k.a(B.A)
if(B.A.length!==0)A.f(A.x(B.A,"aad","AAD is not supported by HMAC"))
n=c.gaN()
m=s.gd9()
p.cT()
l=n.gq(0)>m
if(l){p.af(n,0,n.gq(0),!0)
n=new Uint8Array(A.aK(p.gbx()))
p.cT()}A.EN(q,n,54)
p.af(q,0,r,!1)
B.i.aO(q,0,r,0)
o.cT()
A.EN(q,n,92)
o.af(q,0,r,!1)
B.i.aO(q,0,r,0)
if(l)A.Da(n)
return new A.m1(s,q,p,o)},
gbf(){return this.a}}
A.m1.prototype={
gcf(){return this.e},
gf4(){return this.d.gbx()},
af(a,b,c,d){var s,r,q=this
t.L.a(a)
if(q.e)throw A.k(A.aq("Sink is closed"))
s=q.c
s.af(a,b,c,d)
if(d){q.e=!0
r=s.gbx()
q.d.af(r,0,r.length,!0)}}}
A.m2.prototype={}
A.mv.prototype={}
A.i9.prototype={
cP(){var s=new Uint32Array(8),r=J.br(B.E.gab(s),0,32),q=new DataView(new ArrayBuffer(64))
q=new A.m3(B.jU,q,new Uint32Array(64),s,r)
q.cT()
return q}}
A.m3.prototype={
gcf(){return this.f},
gq(a){return this.w},
m(a,b){t.L.a(b)
this.af(b,0,b.length,!1)},
af(a,b,c,d){var s,r,q,p,o,n,m=this,l=4294967296
t.L.a(a)
if(m.f)throw A.k(A.aq("The sink has been closed"))
m.iO(a,b,c)
if(d){m.f=!0
s=m.b
r=m.r
s.$flags&2&&A.C(s,9)
s.setUint8(r,128);++r
if(r>56){for(;r<64;++r)s.setUint8(r,0)
m.eF()
r=0}for(;r<56;++r)s.setUint8(r,0)
q=8*m.w
s.setUint32(56,B.d.C(q,l),!1)
s.setUint32(60,B.d.R(q,l),!1)
m.eF()
p=m.e
if($.f_()!==B.aw)for(o=p.$flags|0,r=0;r<8;++r){n=p[r]
o&2&&A.C(p)
if(!(r<8))return A.a(p,r)
p[r]=((n&255)<<24|n<<8&16711680|n>>>8&65280|n>>>24)>>>0}}},
au(){if(!this.f)this.af(B.A,0,0,!0)},
cT(){var s,r,q,p,o=this,n=o.w=o.r=0
o.f=!1
s=o.e
r=o.a
for(q=s.$flags|0;n<8;++n){p=r[n]
q&2&&A.C(s)
if(!(n<8))return A.a(s,n)
s[n]=p}},
iO(a,b,c){var s,r,q,p,o,n,m=this
t.L.a(a)
s=J.an(a)
A.bR(b,c,s.gq(a))
r=c-b
if(r===0)return
m.w+=r
q=m.b
p=m.r
for(o=q.$flags|0;b<c;++b){n=s.h(a,b)
o&2&&A.C(q,9)
q.setUint8(p,n);++p
if(p===64){m.eF()
p=0}}m.r=p},
eF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.d,a5=a3.c
if(a5===$){s=J.mQ(B.aC.gab(a3.b),0,null)
a3.c!==$&&A.fL()
a3.c=s
a5=s}for(r=a5.length,q=a4.$flags|0,p=0;p<16;++p){if(!(p<r))return A.a(a5,p)
o=a5[p]
q&2&&A.C(a4)
if(!(p<64))return A.a(a4,p)
a4[p]=((o&255)<<24|o<<8&16711680|o>>>8&65280|o>>>24)>>>0}for(p=16;p<64;++p){n=a4[p-2]
m=a4[p-7]
l=a4[p-15]
k=a4[p-16]
q&2&&A.C(a4)
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
for(a=i,p=0;p<64;++p,b=c,c=d,d=e,e=a1,f=g,g=h,h=a,a=a2){a0=b+(((e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25))>>>0)+((e&d^(4294967295^e)&c)>>>0)+B.K[p]+a4[p]>>>0
a1=f+a0>>>0
a2=a0+((((a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22))>>>0)+((a&h^a&g^h&g)>>>0)>>>0)>>>0}j.$flags&2&&A.C(j)
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
gbx(){return this.x}}
A.m4.prototype={}
A.kn.prototype={
ge1(){return B.eK}}
A.m5.prototype={}
A.m6.prototype={}
A.ia.prototype={
aP(a){return this.mD(t.L.a(a))},
mD(a){var s=0,r=A.J(t.gZ),q,p,o,n
var $async$aP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:B.U.cF(a)
p=A.C0(a)
o=A.C0(p)
n=new Uint8Array(32)
A.DP(n,o,$.GM())
q=new A.d8(new A.bt(p,!1),new A.bG(n,B.U),B.U)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aP,r)}}
A.ny.prototype={
$0(){var s=new Uint8Array(32)
s[0]=9
return s},
$S:129}
A.nx.prototype={
$0(){var s=new Int32Array(16)
s[0]=56129
s[1]=1
return s},
$S:114}
A.m7.prototype={}
A.uO.prototype={
bv(a,b){var s,r,q,p=t.L
p.a(a)
p.a(b)
p=J.an(a)
s=J.an(b)
if(p.gq(a)!==s.gq(b))return!1
for(r=0,q=0;q<p.gq(a);++q)r=(r|p.h(a,q)^s.h(b,q))>>>0
return r===0},
aE(a){var s,r,q,p,o
t.L.a(a)
for(s=J.an(a),r=0,q=0;q<s.gq(a);++q){p=s.h(a,q)
o=B.d.R(q,16)
r=(r^B.d.kG(p,o)^B.d.c4(p,16-o))>>>0}return r}}
A.P.prototype={
gbV(){var s,r,q,p=this,o=p.c
if(o===$){s=p.b
r=p.a
q=s>0?A.c_(r,$.cR().aV(s)):A.c_(r.a0(0,$.cR().aV(Math.abs(s))),null)
p.c!==$&&A.fL()
o=p.c=q}return o},
J(a,b){if(b==null)return!1
return b instanceof A.P&&this.l(0,b)===0},
gP(a){var s=this.gv()
return A.by(s.a,s.b,B.t,B.t)},
k(a){var s=this.gv(),r=s.a,q=(r.a?r.S(0):r).k(0),p=s.b
if(p<=0)q+=B.b.a0("0",-p)
else{r=q.length
if(r<=p)q="0."+B.b.a0("0",p-r)+q
else{r-=p
q=B.b.X(q,0,r)+"."+B.b.ae(q,r)}}return this.a.a?"-"+q:q},
N(){return this.k(0)},
l(a,b){var s=A.DT(this,t.k5.a(b))
return s.a.a.l(0,s.b.a)},
B(a,b){var s=A.DT(this,b),r=s.a
return new A.P(r.a.B(0,s.b.a),r.b)},
a0(a,b){return new A.P(this.a.a0(0,b.a),this.b+b.b)},
c9(a,b){var s,r,q,p,o,n=this.b
if(a>=n)return this
s=$.cR().aV(n-a)
n=this.a
r=n.aA(0,s)
q=n.mM(0,s)
p=q.l(0,$.bn())
if(p!==0){o=n.a
if(b===B.bc){if(o)r=r.aa(0,$.jQ())}else if(b===B.ek){if(!o)r=r.B(0,$.jQ())}else if(b===B.bd){n=q.a?q.S(0):q
if(n.a0(0,$.Dn()).l(0,s)>=0)r=r.B(0,o?$.jQ().S(0):$.jQ())}}return new A.P(r,a)},
b_(){var s,r=this
A:{s=r.b
if(s>0){s=r.a.aA(0,$.cR().aV(s))
break A}if(s<0){s=r.a.a0(0,$.cR().aV(-s))
break A}s=r.a
break A}return s},
cm(a){var s,r=this
A:{s=r.b
if(s>0){s=$.cR().aV(s)
s=r.a.cm(0)/s.cm(0)
break A}if(s<0){s=r.a.a0(0,$.cR().aV(-s)).cm(0)
break A}s=r.a.cm(0)
break A}return s},
gef(){return this.b<=0?0:Math.max(this.gv().b,0)},
bm(a,b){var s,r,q,p
if(b===0)return this.c9(0,B.bd).b_().k(0)
s=this.c9(b,B.bd)
r=s.b_()
if(r.a)r=r.S(0)
q=$.GP()
p=s.a
if(p.a)p=p.S(0)
p=q.B(0,new A.P(p,s.b)).B(0,new A.P(r.S(0),0))
q=s.l(0,$.L())<0?"-":""
return q+r.k(0)+"."+B.b.ae(new A.P(p.a,p.b-b).k(0),1)},
gv(){var s,r=this,q=r.d
if(q===$){s=new A.nD(r).$0()
r.d!==$&&A.fL()
r.d=s
q=s}return q},
$ib0:1}
A.nD.prototype={
$0(){var s,r=this.a,q=$.L(),p=r.l(0,q)
if(p===0)return q
for(;;){q=r.a
p=$.cR()
s=q.R(0,p).l(0,$.Dm())
if(s===0){if(p.c===0)A.f(B.Y)
r=new A.P(q.bC(p),r.b-1)}else break}return r},
$S:112}
A.tI.prototype={
$1(a){return a.a.aA(0,a.b)},
$S:111}
A.hA.prototype={
U(){return"_Rounding."+this.b}}
A.cF.prototype={
gP(a){return A.by(this.a,this.b,B.t,B.t)},
J(a,b){var s,r
if(b==null)return!1
s=!1
if(b instanceof A.cF){r=this.a.l(0,b.a)
if(r===0)s=this.b.l(0,b.b)===0}return s},
k(a){var s,r=this.a,q=r.l(0,$.hS())
if(q===0)return"0"
q=this.b
s=q.l(0,$.hT())
if(s===0)return r.k(0)
else return r.k(0)+"/"+q.k(0)},
l(a,b){t.Fx.a(b)
return this.a.a0(0,b.b).l(0,b.a.a0(0,this.b))},
a0(a,b){return A.c_(this.a.a0(0,b.a),this.b.a0(0,b.b))},
R(a,b){var s,r,q,p,o=this.ds(0,b)
o=A.c_(o.a.aA(0,o.b),null).a0(0,b)
s=this.a
r=o.b
q=this.b
p=A.c_(s.a0(0,r).aa(0,o.a.a0(0,q)),q.a0(0,r))
o=$.HW()
if(p.J(0,o))return o
r=$.hS()
if(s.l(0,r)<0){o=b.a
o=o.l(0,r)<0?A.c_(o.S(0),b.b):b}s=o.b
r=p.b
return A.c_(p.a.a0(0,s).B(0,o.a.a0(0,r)),r.a0(0,s))},
ds(a,b){return A.c_(this.a.a0(0,b.b),this.b.a0(0,b.a))},
e9(a){var s=this.a,r=$.hS(),q=s.l(0,r)<0?A.c_(s.S(0),this.b):this,p=$.HX(),o=q.a0(0,p),n=q.a.aA(0,q.b)
if(o.R(0,p).l(0,$.HY())>=0)n=n.B(0,$.hT())
return s.l(0,r)<0?n.S(0):n},
aV(a){var s=this.a,r=this.b
return B.d.gdh(a)?A.c_(r,s).aV(-a):A.c_(s.aV(a),r.aV(a))},
$ib0:1}
A.cd.prototype={
U(){return"AccountKind."+this.b}}
A.dk.prototype={
U(){return"AccountSubtype."+this.b}}
A.bs.prototype={
gaS(){var s=this.d
return s===B.N||s===B.Q||s===B.x},
bY(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a0==null?f.b:a0,c=b7==null?f.d:b7,b=b5==null?f.f:b5,a=c3==null?f.w:c3
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
return A.jV(f.z,f.Q,d,s,f.r,h,l,f.e,m,b,f.a,j,f.c,c,q,i,p,g,f.db,f.dx,f.cx,f.cy,r,a,n,o,k)},
hf(a){var s=null
return this.bY(s,s,s,!1,!1,a,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
hg(a){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,a,s,s,s,s,s,s,s,s)},
lq(a){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,a,s,s,s,s,s,s,s,s,s,s,s,s,s)},
lE(a,b,c){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,a,s,s,s,s,s,s,s,s,b,c,s,s)},
lB(a,b){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,a,b,s,s)},
lx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=null
return this.bY(a,b,c,!1,d,!1,e,f,g,h,i,j,!1,s,s,k,l,s,m,n,o,p,q,s,s,r,s)},
lH(a,b,c,d,e,f){var s=null
return this.bY(s,s,s,a,!1,!1,!1,b,!1,c,!1,!1,d,s,s,s,s,e,s,s,s,s,s,s,s,s,f)},
lo(a){var s=null
return this.bY(a,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
hS(a,b){return this.l2(a,b,!1,this.w,this.ay)},
hR(a,b,c){var s=c==null,r=s?null:c.a
return this.l1(r,s?null:c.b,!0,a,b)},
n9(a,b){return this.hR(a,b,null)},
h7(a,b,c,d,e,f,g){var s=this,r=!e,q=r?c:s.cx,p=r?d:s.cy,o=e?a:s.db,n=e?b:s.dx
return A.jV(s.z,s.Q,s.b,s.x,s.r,s.fy,s.CW,s.e,s.ch,s.f,s.a,s.fr,s.c,s.d,s.as,s.fx,s.at,s.go,o,n,q,p,s.y,f,g,s.ax,s.dy)},
l1(a,b,c,d,e){return this.h7(a,b,null,null,c,d,e)},
l2(a,b,c,d,e){return this.h7(null,null,a,b,c,d,e)},
N(){var s,r=this,q=A.w(t.N,t.X)
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
if(s!=null)q.j(0,"loan",s.N())
s=r.at
if(s!=null)q.j(0,"minimumBalance",s.N())
s=r.ax
if(s!=null)q.j(0,"statement",s.N())
s=r.ay
if(s!=null)q.j(0,"startFrom",s.N())
s=r.ch
if(s!=null)q.j(0,"driveFolder",s.N())
s=r.CW
if(s!=null)q.j(0,"closedAfter",s.k(0))
s=r.cx
if(s!=null)q.j(0,"replacedBy",s)
s=r.cy
if(s!=null)q.j(0,"replacedFrom",s.k(0))
s=r.db
if(s!=null)q.j(0,"ownStartDate",s.k(0))
s=r.dx
if(s!=null)q.j(0,"ownStartFrom",s.N())
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
A.vX.prototype={
$1(a){var s
A.m(a)
if(a!=null){s=$.HL()
s=s.b.test(a)}else s=!1
return s},
$S:71}
A.c9.prototype={
cj(a){var s=this
return new A.c9(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q)}}
A.mW.prototype={}
A.zf.prototype={
$1(a){t.W.a(a)
return B.ee.u(0,a.y.a)&&a.w.l(0,this.a)>=0},
$S:1}
A.Bk.prototype={
$2(a,b){var s=t.h
return s.a(a).l(0,s.a(b))},
$S:67}
A.Br.prototype={
$1(a){var s
t.v.a(a)
s=this.a
return a.b===s.a&&a.d.l(0,s.w)>=0},
$S:9}
A.Bs.prototype={
$2(a,b){var s=t.v
return s.a(a).d.l(0,s.a(b).d)},
$S:26}
A.Bt.prototype={
$1(a){t.v.a(a)
return a.b===this.a.a&&a.r!=null},
$S:9}
A.Bu.prototype={
$1(a){return t.W.a(a).x.l(0,this.a.w)>=0},
$S:1}
A.Bv.prototype={
$1(a){return t.W.a(a).w.l(0,this.a)>0},
$S:1}
A.cn.prototype={}
A.BG.prototype={
$1(a){return A.O(a)+1},
$S:52}
A.BH.prototype={
$0(){return 1},
$S:78}
A.BI.prototype={
$2(a,b){var s=t.dK
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:185}
A.eJ.prototype={
U(){return"StartFromKind."+this.b}}
A.ho.prototype={
N(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"kind",r.a.b)
s=r.b
if(s!=null)q.j(0,"year",s)
s=r.c
if(s!=null)q.j(0,"folder",s)
s=r.d
if(s!=null)q.j(0,"statementId",s)
return q}}
A.ks.prototype={
N(){return A.S(["id",this.a,"path",this.b],t.N,t.X)},
J(a,b){if(b==null)return!1
return b instanceof A.ks&&b.a===this.a&&b.b===this.b},
gP(a){return A.by(this.a,this.b,B.t,B.t)}}
A.eL.prototype={
U(){return"StatementSource."+this.b}}
A.ft.prototype={
U(){return"StatementFormat."+this.b}}
A.dZ.prototype={
U(){return"StatementCycle."+this.b}}
A.lB.prototype={
N(){var s,r,q=this,p=q.a
p=p==null?null:p.b
s=q.b
s=s==null?null:s.b
r=q.c
r=r==null?null:r.b
return A.S(["source",p,"format",s,"cycle",r,"day",q.d],t.N,t.X)},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.lB&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d},
gP(a){var s=this
return A.by(s.a,s.b,s.c,s.d)},
k(a){return"StatementSetup("+this.N().k(0)+")"}}
A.dx.prototype={
U(){return"FactPart."+this.b}}
A.kf.prototype={
N(){var s=this,r=s.f,q=t.N
return A.S(["id",s.a,"subject",s.b,"field",s.c,"value",s.d,"type",s.e,"source",A.S(["file",r.a,"location",r.b,"span",r.c],q,t.K),"fileDate",s.r.k(0),"confirmedOn",s.w.k(0)],q,t.X)}}
A.yu.prototype={
$1(a){return t.eG.a(a).b===this.a.e},
$S:162}
A.yv.prototype={
$1(a){A.c(a)
return $.f0().aM(0,a).gq(0)>=9||A.zy(a)!==a},
$S:6}
A.vE.prototype={
$1(a){var s,r
A.c(a)
s=A.D("[A-Za-z0-9]",!0,!1)
if(s.b.test(a)){s=this.a
r=s.a
if(r>0){s.a=r-1
return a}return"X"}return a},
$S:12}
A.vH.prototype={
$1(a){var s,r=a.du(0)
r.toString
s=A.D("\\D",!0,!1)
if(!(A.ao(r,s,"").length<6))r=A.Fn(r)
return r},
$S:17}
A.zz.prototype={
$1(a){var s=a.du(0)
s.toString
return A.Fn(s)},
$S:17}
A.tG.prototype={}
A.cg.prototype={
dA(a){var s,r,q,p=this,o=p.z
if(o!=null)return o===B.bi?B.cx:B.bm
if(!p.x)return B.cw
s=p.w
r=s!=null
if(r&&s.a.a.ga9(0)===0)return B.bl
q=p.f
if(p.Q&&q!=null&&q.a8(a)>2*p.as)return B.bn
if(r&&q!=null&&a.l(0,q)>0)return B.aF
return p.r.a.a.ga9(0)>0?B.bk:B.bj}}
A.cf.prototype={
U(){return"BillStatus."+this.b}}
A.el.prototype={
U(){return"BillMark."+this.b}}
A.xJ.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.y){s=this.a
s=s==null||a.a===s}else s=!1
return s},
$S:2}
A.xK.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.xL.prototype={
$1(a){return t.v.a(a).b===this.a.a},
$S:9}
A.xM.prototype={
$2(a,b){var s=t.v
return s.a(a).d.l(0,s.a(b).d)},
$S:26}
A.xN.prototype={
$1(a){t.W.a(a)
return a.d===B.X&&a.e===B.m},
$S:1}
A.xO.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.xP.prototype={
$1(a){t.dh.a(a)
return a.b===this.a.a&&this.b.ic(a)==null},
$S:23}
A.xR.prototype={
$1(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(p.l(0,a)>0)return p}return null},
$S:155}
A.xQ.prototype={
$2(a,b){var s,r,q,p=t.ok
p.a(a)
p.a(b)
s=B.b.l(a.b,b.b)
if(s!==0)return s
r=a.c
q=b.c
p=r==null
if(!p&&q!=null)return r.l(0,q)
if(p&&q==null)return B.b.l(a.a,b.a)
return p?1:-1},
$S:61}
A.vR.prototype={
$2(a,b){return t.B.a(a).B(0,t.W.a(b).f)},
$S:60}
A.vv.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.y){s=A.D("[^A-Z0-9]",!0,!1)
s=A.ao(a.c.toUpperCase(),s,"")===this.a}else s=!1
return s},
$S:2}
A.vw.prototype={
$1(a){var s,r,q,p=this
t.W.a(a)
if(a.d!==B.X||a.e!==B.k)return!1
if(a.ch!=null||a.cx!=null)return!1
s=p.a
r=s.gL().h(0,a.c)
r=r==null?null:r.gaS()
if(r!==!0)return!1
r=p.b
q=A.F(r)
if(new A.n(r,q.i("j(1)").a(new A.vs(a)),q.i("n<1>")).gq(0)!==1||p.c.e!==a.f.b)return!1
r=A.b([a.z],t.q)
for(s=s.e5(a.a),q=J.R(s.a),s=new A.N(q,s.b,s.$ti.i("N<1>"));s.n();)r.push(q.gt().z)
return new A.ah(r,t.tx.a(new A.vt()),t.BA).M(0,new A.vu(p.d))},
$S:1}
A.vs.prototype={
$1(a){return t.b.a(a).e===this.a.f.b},
$S:2}
A.vt.prototype={
$1(a){var s,r
A.m(a)
s=a==null?"":a
r=A.D("[^A-Z0-9]",!0,!1)
return A.ao(s.toUpperCase(),r,"")},
$S:50}
A.vu.prototype={
$1(a){return B.b.u(A.c(a),this.a)},
$S:6}
A.cK.prototype={
cj(a){var s=this
return new A.cK(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w)}}
A.ue.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.a3(A.ad(A.c(s)),this.b)}return s},
$S:59}
A.ud.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.ax(A.c(s))}return s},
$S:58}
A.k1.prototype={}
A.eM.prototype={
U(){return"SubscriptionKind."+this.b}}
A.em.prototype={
U(){return"BillingCycle."+this.b}}
A.hr.prototype={}
A.iT.prototype={
gm1(){return this.a.B(0,this.b).aa(0,this.c)},
N(){return A.S(["rent",this.a.N(),"gst",this.b.N(),"tds",this.c.N()],t.N,t.X)}}
A.es.prototype={}
A.cX.prototype={}
A.lo.prototype={}
A.bY.prototype={
U(){return"IndiaTaxKind."+this.b}}
A.kI.prototype={}
A.ly.prototype={}
A.lz.prototype={}
A.n3.prototype={
f1(a){var s,r
for(s=this.d,s=new A.ac(s,A.o(s).i("ac<1,2>")).gA(0);s.n();){r=s.d
if(J.Dv(r.b,a))return r.a}return null}}
A.w1.prototype={
$1(a){return typeof a=="string"&&this.a.aG(a)!=null},
$S:28}
A.w2.prototype={
$1(a){t.B.a(a)
return a.b!==this.a||a.a.a.ga9(0)<0},
$S:221}
A.w3.prototype={
$1(a){return t.nq.a(a).b===this.a.h(0,"kind")},
$S:151}
A.bX.prototype={}
A.xX.prototype={
$2(a,b){var s,r=t.o4
r.a(a)
r.a(b)
s=a.e.l(0,b.e)
return s!==0?s:B.d.l(a.r,b.r)},
$S:122}
A.y5.prototype={
$1(a){return t.o4.a(a).y===this.a},
$S:198}
A.y6.prototype={
$2(a,b){return A.O(a)+t.o4.a(b).x},
$S:128}
A.ch.prototype={
N(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"description",r.a)
q.j(0,"quantity",r.b.k(0))
q.j(0,"unitPrice",r.c)
q.j(0,"amount",r.d)
s=r.e
if(s!=null)q.j(0,"gst",s)
return q}}
A.dr.prototype={
gfl(){var s,r,q=this
if(q.cx==="SGD"||q.y==null||q.cy==null)s=null
else{s=A.aC(q.z)
r=q.cy
r.toString
r=new A.P(s,0).a0(0,r).B(0,A.ad("0.5")).c9(0,B.bc).b_().b0(0)
s=r}return s},
gcZ(){return B.a.a4(this.x,0,new A.nm(),t.S)},
gia(){var s=this.x,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.nk()),r.i("n<1>")).a4(0,0,new A.nl(),t.S)},
gnc(){var s=this.x,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.nn()),r.i("n<1>")).a4(0,0,new A.no(),t.S)},
fh(){var s,r,q,p,o=this,n=A.w(t.N,t.X)
n.j(0,"draftId",o.a)
n.j(0,"bookId",o.b)
n.j(0,"customerId",o.c)
n.j(0,"date",o.d.k(0))
n.j(0,"due",o.e.k(0))
n.j(0,"seriesId",o.f)
n.j(0,"seq",o.r)
n.j(0,"number",o.w)
s=A.b([],t.bk)
for(r=o.x,q=r.length,p=0;p<r.length;r.length===q||(0,A.l)(r),++p)s.push(r[p].N())
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
if(o.CW)n.j(0,"payNow",!0)
s=o.cx
if(s!=="SGD")n.j(0,"currency",s)
s=o.cy
if(s!=null)n.j(0,"sgdRate",s.k(0))
n.j(0,"issuerName",o.db)
n.j(0,"issuerAddress",o.dx)
n.j(0,"uenLast4",o.dy)
n.j(0,"accountId",o.fr)
n.j(0,"bankName",o.fx)
n.j(0,"accountLast4",o.fy)
return n}}
A.nm.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:31}
A.nk.prototype={
$1(a){return t.E.a(a).e==="standard"},
$S:54}
A.nl.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:31}
A.nn.prototype={
$1(a){return t.E.a(a).e==="zero-rated"},
$S:54}
A.no.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:31}
A.yp.prototype={
$2(a,b){var s=t.u
return B.b.l(s.a(a).b,s.a(b).b)},
$S:21}
A.zk.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.ay(a.c.h(0,"date"))
r.toString
s=A.ay(b.c.h(0,"date"))
s.toString
return r.l(0,s)},
$S:21}
A.y_.prototype={
$2(a,b){var s,r=t.nl
r.a(a)
r.a(b)
s=b.d.l(0,a.d)
return s!==0?s:B.d.l(b.r,a.r)},
$S:269}
A.xY.prototype={
$1(a){var s=A.m(t.u.a(a).c.h(0,"gst"))
return(s==null?"standard":s)==="standard"},
$S:22}
A.xZ.prototype={
$1(a){return t.u.a(a).av("unitPrice").b!==this.a},
$S:22}
A.yk.prototype={
$1(a){return t.E.a(a).e==="standard"},
$S:54}
A.yl.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:31}
A.fU.prototype={
k(a){return"CrossBookDiscrepancy("+this.a+": "+this.b+")"}}
A.yb.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.yc.prototype={
$2(a,b){A.c(a)
return!J.Du(t.C.a(b),new A.ya())},
$S:164}
A.ya.prototype={
$1(a){var s
t.W.a(a)
s=!0
if(a.at==null)if(a.ax==null){s=a.d
s=s===B.a0||s===B.a_}return s},
$S:1}
A.yd.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i
A.c(a)
t.C.a(b)
s=J.aZ(b)
r=s.bN(b,new A.y7())
q=A.B(r,r.$ti.i("h.E"))
r=s.bN(b,new A.y8())
p=A.B(r,r.$ti.i("h.E"))
s=s.bN(b,new A.y9())
o=A.B(s,s.$ti.i("h.E"))
s=q.length
if(s!==1||p.length!==1){B.a.m(this.a,new A.fU(a,""+s+" advance(s) and "+p.length+" expense(s); expected one of each"))
return}s=B.a.gaQ(q).f
if(!s.J(0,B.a.gaQ(p).f)){B.a.m(this.a,new A.fU(a,"advance "+s.k(0)+" but expense "+B.a.gaQ(p).f.k(0)))
return}n=A.a3($.L(),s.b)
for(r=o.length,m=0;m<o.length;o.length===r||(0,A.l)(o),++m){l=o[m].f
k=l.b
j=n.b
if(k!==j)A.f(A.a8(j,k))
l=n.a.B(0,l.a)
n=new A.q(l,j)
i=B.e.h(0,j)
if(i==null)A.f(A.x(j,"currency","is not a supported currency"))
if((l.b<=0?0:Math.max(l.gv().b,0))>i)A.f(A.z(j+" allows "+A.i(i)+" decimal places",l.k(0),null))}if(s.aa(0,n).a.a.ga9(0)<0)B.a.m(this.a,new A.fU(a,"settled "+n.k(0)+" against an advance of "+s.k(0)))},
$S:165}
A.y7.prototype={
$1(a){return t.W.a(a).d===B.a0},
$S:1}
A.y8.prototype={
$1(a){return t.W.a(a).d===B.n},
$S:1}
A.y9.prototype={
$1(a){return t.W.a(a).d===B.a_},
$S:1}
A.dG.prototype={
U(){return"InvoiceState."+this.b}}
A.dH.prototype={}
A.zl.prototype={
$1(a){return t.W.a(a).ax!=null},
$S:1}
A.zm.prototype={
$2(a,b){var s=t.qn
s.a(a)
return s.a(b).a.e.l(0,a.a.e)},
$S:206}
A.vU.prototype={
$1(a){return A.c(a).length>=2},
$S:6}
A.vy.prototype={
$1(a){return A.m(t.u.a(a).c.h(0,"invoiceId"))===this.a},
$S:22}
A.ye.prototype={
$1(a){t.W.a(a)
return a.d===B.a0&&a.ch!=null},
$S:1}
A.bM.prototype={}
A.cY.prototype={
U(){return"ForecastSource."+this.b}}
A.bo.prototype={
gi6(){var s=this.f
return this.r===B.m?s:A.a3($.L(),s.b).aa(0,s)}}
A.bP.prototype={}
A.nI.prototype={}
A.di.prototype={
iv(b4,b5,b6,b7,b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="currency",b2="is not a supported currency",b3=a9.c
if(b3==null)return
for(s=[!0,!1],r=a9.x,q=a9.b,p=a9.a.e,o=q.a,n=q.b,m=q.c,l=t.g,k=a9.f,j=k.b,k=k.a,i=b3.b,h=j!==i,b3=b3.a,g=i+" allows ",f=0;f<2;++f){e=s[f]
d=A.b([],l)
if(h)A.f(A.a8(i,j))
c=b3.B(0,k)
b=new A.q(c,i)
a=B.e.h(0,i)
if(a==null)A.f(A.x(i,b1,b2))
if((c.b<=0?0:Math.max(c.gv().b,0))>a)A.f(A.z(g+A.i(a)+" decimal places",c.k(0),b0))
for(c=!e,a0=0;a0<31;++a0){a1=A.az(o,n,m).aw(864e8*a0)
a2=new A.A(A.b1(a1),A.b5(a1),A.av(a1))
for(a3=r.length,a4=0;a4<r.length;r.length===a3||(0,A.l)(r),++a4){a5=r[a4]
if(a5.x)a6=c&&a5.b===B.cL||a5.f.b!==p
else a6=!0
if(a6)continue
a6=a5.e
if((a6.l(0,q)<0?q:a6).J(0,a2)){a6=a5.f
if(!(a5.r===B.m)){a7=a6.b
a8=$.L()
a=B.e.h(0,a7)
if(a==null)A.f(A.x(a7,b1,b2))
if((a8.b<=0?0:Math.max(a8.gv().b,0))>a)A.f(A.z(a7+" allows "+A.i(a)+" decimal places",a8.k(0),b0))
a6=a6.a
a6=a8.B(0,new A.P(a6.a.S(0),a6.b))
a8=new A.q(a6,a7)
a=B.e.h(0,a7)
if(a==null)A.f(A.x(a7,b1,b2))
if((a6.b<=0?0:Math.max(a6.gv().b,0))>a)A.f(A.z(a7+" allows "+A.i(a)+" decimal places",a6.k(0),b0))
a6=a8}a7=a6.b
a8=b.b
if(a7!==a8)A.f(A.a8(a8,a7))
a6=b.a.B(0,a6.a)
b=new A.q(a6,a8)
a=B.e.h(0,a8)
if(a==null)A.f(A.x(a8,b1,b2))
if((a6.b<=0?0:Math.max(a6.gv().b,0))>a)A.f(A.z(a8+" allows "+A.i(a)+" decimal places",a6.k(0),b0))}}B.a.m(d,b)}if(e)a9.y=d}}}
A.nK.prototype={
lj(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g="currency",f="is not a supported currency",e=this.c,d=A.F(e),c=d.i("n<1>"),b=A.B(new A.n(e,d.i("j(1)").a(new A.nL(a)),c),c.i("h.E"))
e=A.b([],t.g)
for(d=t.B,c=this.d,s=A.F(c),r=s.i("j(1)"),s=s.i("n<1>"),q=a+" allows ",p=0;p<31;++p){o=$.L()
n=B.e.h(0,a)
if(n==null)A.f(A.x(a,g,f))
m=o.b<=0
if((m?0:Math.max(o.gv().b,0))>n)A.f(A.z(q+A.i(n)+" decimal places",o.k(0),h))
l=B.a.a4(b,new A.q(o,a),new A.nM(p),d)
k=r.a(new A.nN(this,a,p))
n=B.e.h(0,a)
if(n==null)A.f(A.x(a,g,f))
if((m?0:Math.max(o.gv().b,0))>n)A.f(A.z(q+A.i(n)+" decimal places",o.k(0),h))
k=new A.n(c,k,s).a4(0,new A.q(o,a),new A.nO(),d)
j=k.b
i=l.b
if(j!==i)A.f(A.a8(i,j))
l=l.a.B(0,k.a)
n=B.e.h(0,i)
if(n==null)A.f(A.x(i,g,f))
if((l.b<=0?0:Math.max(l.gv().b,0))>n)A.f(A.z(i+" allows "+A.i(n)+" decimal places",l.k(0),h))
k=new A.q(o,a)
n=B.e.h(0,a)
if(n==null)A.f(A.x(a,g,f))
if((m?0:Math.max(o.gv().b,0))>n)A.f(A.z(q+A.i(n)+" decimal places",o.k(0),h))
o=k
m=o.b
if(m!==i)A.f(A.a8(i,m))
o=o.a
o=l.B(0,new A.P(o.a.S(0),o.b))
n=B.e.h(0,i)
if(n==null)A.f(A.x(i,g,f))
if((o.b<=0?0:Math.max(o.gv().b,0))>n)A.f(A.z(i+" allows "+A.i(n)+" decimal places",o.k(0),h))
e.push(new A.q(o,i))}return e},
mj(a){return B.a.M(this.c,new A.nP(a))}}
A.nL.prototype={
$1(a){t.ov.a(a)
return a.a.e===this.a&&a.y.length!==0},
$S:49}
A.nM.prototype={
$2(a,b){var s,r
t.B.a(a)
s=t.ov.a(b).y
r=this.a
if(!(r<s.length))return A.a(s,r)
return a.B(0,s[r])},
$S:248}
A.nN.prototype={
$1(a){var s,r
t.Fj.a(a)
s=!1
if(a.x)if(a.f.b===this.b){s=this.a.a
r=a.e
if(r.l(0,s)<0)r=s
s=r.l(0,s.aC(this.c))<=0}return s},
$S:251}
A.nO.prototype={
$2(a,b){return t.B.a(a).B(0,t.Fj.a(b).gi6())},
$S:266}
A.nP.prototype={
$1(a){var s
t.ov.a(a)
if(a.a.e===this.a)s=a.c==null||a.w
else s=!1
return s},
$S:49}
A.lg.prototype={}
A.AQ.prototype={
$1(a){return B.b.l(t.AB.a(a).x,this.a)<=0},
$S:48}
A.AR.prototype={
$0(){return B.a.gY(this.a)},
$S:106}
A.AS.prototype={
$1(a){return A.c(a).length!==0},
$S:6}
A.AT.prototype={
$1(a){var s,r,q,p=this
t.W.a(a)
if(a.c!==p.a.d||a.e!==p.b||p.c.u(0,a.a))return!1
s=p.d.a8(a.w)
if(s<-5||s>5)return!1
r=a.z
if(r==null)r=""
r=B.b.bR(r.toUpperCase(),A.D("[^A-Z0-9]+",!0,!1))
q=A.Ce(r,A.F(r).c)
r=p.f
return r.length!==0&&B.a.b6(r,q.geX(q))},
$S:1}
A.AU.prototype={
$2(a,b){var s=t.W
s.a(a)
s.a(b)
s=this.a
return B.d.l(Math.abs(s.a8(a.w)),Math.abs(s.a8(b.w)))},
$S:7}
A.yT.prototype={
$1(a){var s
t.b.a(a)
if(a.r==="personal"){s=a.d
s=s===B.N||s===B.Q}else s=!1
return s},
$S:2}
A.yU.prototype={
$2(a,b){var s,r=t.b
r.a(a)
r.a(b)
r=a.e==="SGD"?0:1
s=B.d.l(r,b.e==="SGD"?0:1)
return s!==0?s:B.b.l(a.b,b.b)},
$S:8}
A.yV.prototype={
$0(){return A.b([],t.F)},
$S:108}
A.yZ.prototype={
$2(a,b){var s=this.a.h(0,a),r=s==null?null:s.d
return r!=null&&b.l(0,r)>0},
$S:109}
A.yW.prototype={
$1(a){t.b.a(a)
return a.d===B.o&&a.as!=null},
$S:2}
A.yX.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.yY.prototype={
$2(a,b){var s,r,q=t.Fj
q.a(a)
q.a(b)
q=this.a
s=a.e
if(s.l(0,q)<0)s=q
r=b.e
return s.l(0,r.l(0,q)<0?q:r)},
$S:119}
A.ys.prototype={
$1(a){return t.b.a(a).w.l(0,B.a.gY(this.a).a)>0},
$S:2}
A.yt.prototype={
$1(a){var s
t.sH.a(a)
s=this.a.x
return s.l(0,a.a)>=0&&s.l(0,a.b)<=0},
$S:62}
A.eC.prototype={
U(){return"PlannedKind."+this.b}}
A.bp.prototype={
N(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"kind",r.b.b)
q.j(0,"name",r.c)
q.j(0,"accountId",r.d)
s=r.e
if(s!=null)q.j(0,"toAccountId",s)
q.j(0,"dayOfMonth",r.f)
s=r.r
q.j(0,"amount",s==null?null:s.N())
s=r.w
if(s!=null)q.j(0,"words",s)
q.j(0,"fromMonth",r.x)
q.j(0,"version",r.y)
return q}}
A.iQ.prototype={}
A.eD.prototype={
U(){return"PlannedOutcomeKind."+this.b}}
A.c2.prototype={
N(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"payee",r.b)
q.j(0,"fromAccountId",r.c)
q.j(0,"dayOfMonth",r.d)
s=r.e
q.j(0,"typicalAmount",s==null?null:s.N())
s=r.f
if(s!=null)q.j(0,"categoryId",s)
return q}}
A.dA.prototype={
U(){return"GiroOutcomeKind."+this.b}}
A.im.prototype={}
A.nR.prototype={}
A.dB.prototype={
U(){return"GiroStatus."+this.b}}
A.fb.prototype={
U(){return"GiroAmountFrom."+this.b}}
A.dz.prototype={}
A.nS.prototype={}
A.vV.prototype={
$1(a){return A.c(a).length!==0},
$S:6}
A.z5.prototype={
$2(a,b){var s=t.rv
return B.b.l(s.a(a).a,s.a(b).a)},
$S:138}
A.z6.prototype={
$1(a){t.W.a(a)
return a.c===this.a.c&&a.e===B.k},
$S:1}
A.z7.prototype={
$1(a){var s,r
t.W.a(a)
s=A.b([a.z],t.q)
r=this.b.h(0,a.a)
if(r!=null)B.a.a1(s,r)
return A.Ln(this.a,s)},
$S:1}
A.z8.prototype={
$1(a){var s
t.W.a(a)
if(this.b.u(0,a.a))return!1
s=this.a.a.a8(a.w)
return s>=-5&&s<=5},
$S:1}
A.z9.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=this.a
s=Math.abs(q.a.a8(a.w))
r=Math.abs(q.a.a8(b.w))
return s!==r?B.d.l(s,r):B.b.l(a.a,b.a)},
$S:7}
A.za.prototype={
$2(a,b){var s,r=t.vS
r.a(a)
r.a(b)
s=a.d.l(0,b.d)
return s!==0?s:B.b.l(a.a.a,b.a.a)},
$S:143}
A.lE.prototype={
N(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"ya",r.a)
q.j(0,"assessed",r.b.N())
s=r.c
if(s!=null)q.j(0,"giroId",s)
s=r.d
if(s!=null)q.j(0,"firstMonth",s)
s=r.e
if(s!=null)q.j(0,"instalments",s)
return q}}
A.Bw.prototype={
$1(a){return a!=null},
$S:28}
A.Bx.prototype={
$1(a){return a==null},
$S:28}
A.tN.prototype={}
A.mY.prototype={}
A.vZ.prototype={
$1(a){return t.p0.a(a).d},
$S:63}
A.w_.prototype={
$1(a){var s=this.a.ho(t.b.a(a).c)
s=s==null?null:s.a
return s===this.b.a},
$S:2}
A.w0.prototype={
$1(a){t.b.a(a)
return B.a.M(A.aD(this.a.fx,t.v),new A.vY(a))},
$S:2}
A.vY.prototype={
$1(a){var s
t.v.a(a)
s=this.a
return a.b===s.a&&a.r!=null&&a.d.l(0,s.w)>=0},
$S:9}
A.dl.prototype={
U(){return"AlertChannel."+this.b}}
A.cS.prototype={
U(){return"CoverageLevel."+this.b}}
A.fd.prototype={
N(){var s=this
return A.S(["code",s.a,"name",s.b,"country",s.c,"first",s.d,"caveats",s.e,"offersCsv",s.f],t.N,t.X)}}
A.kb.prototype={}
A.fo.prototype={}
A.cA.prototype={
U(){return"IntakeStatus."+this.b}}
A.fe.prototype={}
A.vn.prototype={
$1(a){return t.b.a(a).a===this.a.aX(this.b)},
$S:2}
A.y2.prototype={
$1(a){t.v.a(a)
return this.a.aX(a.b)===this.b&&a.d.l(0,this.c)>=0},
$S:9}
A.dE.prototype={
U(){return"IntakeChannel."+this.b}}
A.o6.prototype={
N(){var s=this,r=t.D.i("bg.S").a(s.e)
return A.S(["algorithm",s.a,"memoryKiB",s.b,"iterations",s.c,"parallelism",s.d,"salt",B.L.gaH().O(r)],t.N,t.X)}}
A.hv.prototype={
k(a){return"WrongSecret"}}
A.u1.prototype={
N(){var s,r=t.D.i("bg.S"),q=r.a(this.a)
q=B.L.gaH().O(q)
s=r.a(this.b)
s=B.L.gaH().O(s)
r=r.a(this.c)
return A.S(["nonce",q,"cipherText",s,"mac",B.L.gaH().O(r)],t.N,t.X)}}
A.o7.prototype={
N(){var s=this
return A.S(["passphraseKdf",s.a.N(),"recoveryKdf",s.b.N(),"byPassphrase",s.c.N(),"byRecovery",s.d.N()],t.N,t.X)}}
A.wf.prototype={
$1(a){return t.b.a(a).r===this.a},
$S:2}
A.wg.prototype={
$1(a){return t.b.a(a).e==="SGD"},
$S:2}
A.ky.prototype={}
A.n0.prototype={}
A.E.prototype={}
A.nG.prototype={}
A.bv.prototype={}
A.tS.prototype={}
A.h8.prototype={
ho(a){var s=this.x.a,r=s.h(0,a)
if(r==null)r=s.h(0,A.hL(a))
if(r==null){r=A.o(s).i("M<2>")
r=A.aO(new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.oF(a)),r.i("n<h.E>")),t.p0)
s=r}else s=r
return s},
ghC(){var s,r,q,p,o,n=A.w(t.N,t.to)
for(s=this.as.a,s=new A.ac(s,A.o(s).i("ac<1,2>")).gA(0),r=t.AB;s.n();){q=s.d
p=q.a
o=A.d1(q.b,!1,r)
o.$flags=3
n.j(0,p,o)}return n},
gL(){var s,r,q,p
if(this.gko()===0)s=A.a5(this.r,t.N,t.b)
else{s=t.z
s=A.w(s,s)
for(r=this.r.a,r=new A.ac(r,A.o(r).i("ac<1,2>")).gA(0);r.n();){q=r.d
p=q.b
if(p.cx==null)s.j(0,q.a,p)}s=A.a5(s,t.N,t.b)}return s},
gko(){var s=this.r.a,r=A.o(s).i("M<2>")
return new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.os()),r.i("n<h.E>")).gq(0)},
aX(a){var s,r,q,p,o=A.kX([a],t.N)
for(s=this.r.a,r=a;;r=p){q=s.h(0,r)
p=q==null?null:q.cx
if(p==null||!o.m(0,p))return r}},
cc(a){var s,r,q,p=A.b([],t.Q)
for(s=this.r.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d
if(r.cx!=null){q=r.a
q=q!==a&&this.aX(q)===a}else q=!1
if(q)p.push(r)}B.a.D(p,new A.oD())
return p},
gmh(){var s=this.go,r=A.F(s)
return A.aD(new A.n(s,r.i("j(1)").a(new A.oE(this)),r.i("n<1>")),t.Ap)},
giu(){var s=this.k3,r=A.o(s).i("M<2>")
return A.aD(new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.p1(this)),r.i("n<h.E>")),t.Ap)},
ic(a){var s,r,q,p,o,n,m,l,k,j=a.d
if(j==null)j=a.c
for(s=this.fx,r=A.F(s),q=r.i("j(1)").a(new A.p0(a)),s=B.a.gA(s),r=new A.N(s,q,r.i("N<1>")),p=null;r.n();){o=s.gt()
q=o.d
n=q.a8(j)
if(n<-3||n>20)continue
if(p==null){p=o
continue}m=p.d
l=Math.abs(m.a8(j))
k=Math.abs(n)
if(k>=l)q=k===l&&q.l(0,m)>0
else q=!0
if(q)p=o}return p},
bs(){var s=this.b.a,r=A.o(s).i("M<2>")
return new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.oC(this)),r.i("n<h.E>"))},
gcE(){var s="personal",r=t.N
r=A.w(r,r)
r.j(0,s,s)
r.a1(0,this.f)
return r},
aG(a){var s=this.f.h(0,a)
if(s==null)s=a==="personal"?"personal":null
return s},
bX(a){var s=this.aG(a)
return s==="member"?"personal":s},
cO(a,b,c){var s=this.b
if(a==null){s=s.a
s=new A.M(s,A.o(s).i("M<2>"))}else s=s.mG(a)
return J.mT(s,new A.oN(c,b,a))},
bI(a){return this.cO(a,null,!1)},
b3(){return this.cO(null,null,!1)},
f6(a){return this.cO(null,a,!1)},
hu(a,b){return this.cO(a,null,b)},
mB(a,b){return this.cO(a,b,!1)},
mA(a){return this.cO(null,null,a)},
e5(a){var s=this.b.a,r=A.o(s).i("M<2>")
return new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.oM(a)),r.i("n<h.E>"))},
eR(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.a,a6=a7.a
if(a5.u(0,a6))return new A.nG()
s=null
try{r=null
o=a7.d
q=o
A:{if("movement.record"===q){r=a3.ki(a7)
break A}if("movement.categorise"===q){r=a3.j7(a7)
break A}if("payment.forAnotherBook"===q){n=a7.e
m=n.h(0,"pairId")
m.toString
A.c(m)
l=n.h(0,"payingBookId")
l.toString
A.c(l)
k=n.h(0,"owingBookId")
k.toString
A.c(k)
j=n.h(0,"amount")
j.toString
A.c(j)
i=n.h(0,"currency")
i.toString
A.c(i)
h=A.a3(A.ad(j),i)
i=n.h(0,"occurredAtUtc")
i.toString
g=A.c1(A.c(i)).F()
i=n.h(0,"bankDate")
i.toString
f=A.ax(A.c(i))
i=n.h(0,"homeDate")
i.toString
e=A.ax(A.c(i))
d=new A.dQ("operation",a6,a7.f,!1)
i=n.h(0,"accountId")
i.toString
i=A.bQ(A.c(i),h,f,l,a4,k,a4,B.k,e,m+":advance",a4,a4,a4,g,m,A.m(n.h(0,"payee")),a4,d,a4,a4,B.a0,1)
j=A.m(n.h(0,"payee"))
r=a3.dC(a7,A.b([i,A.bQ("owed-to:"+l,h,f,k,A.m(n.h(0,"categoryId")),l,a4,B.k,e,m+":expense",a4,a4,a4,g,m,j,a4,d,a4,a4,B.n,1)],t.A))
break A}if("advance.settle"===q){r=a3.kF(a7)
break A}if("movement.verify"===q){r=a3.l0(a7)
break A}if("movement.sameEvent"===q){r=a3.kA(a7)
break A}if("movement.separate"===q){r=a3.kD(a7)
break A}if("payment.cardBill"===q){r=a3.j5(a7)
break A}if("movement.refund"===q){r=a3.kj(a7)
break A}if("movement.transfer"===q){r=a3.kW(a7)
break A}if("movement.markTransfer"===q){r=a3.k0(a7)
break A}if("movement.unmarkTransfer"===q){r=a3.kZ(a7)
break A}if("movement.flag"===q){r=a3.jG(a7)
break A}if("movement.flagClear"===q){r=a3.jH(a7)
break A}if("intake.hold"===q){r=a3.jQ(a7)
break A}if("intake.failed"===q){n=a7.e
m=n.h(0,"eventKey")
m.toString
A.c(m)
l=n.h(0,"receivedAtUtc")
l.toString
c=A.aF(A.c1(A.c(l)).F(),B.q)
B.a.m(a3.c,new A.W("intake-failed:"+m,B.b9,m,"A message from "+A.i(n.h(0,"sender"))+" on "+c.k(0)+" could not be read: "+A.i(n.h(0,"reason"))+"."))
r=new A.E()
break A}if("intake.suspect"===q){r=a3.jS(a7)
break A}if("intake.reminder"===q){r=a3.jR(a7)
break A}if("intake.suspectResolve"===q){r=a3.kS(a7)
break A}if("category.add"===q){r=a3.j8(a7)
break A}if("category.rename"===q){r=a3.j9(a7)
break A}if("rule.propose"===q){r=a3.kw(a7)
break A}if("rule.confirm"===q){r=a3.ku(a7)
break A}if("rule.remove"===q){r=a3.kx(a7)
break A}if("rule.edit"===q){r=a3.kv(a7)
break A}if("movement.classify"===q){r=a3.ja(a7)
break A}if("movement.unfile"===q){r=a3.kY(a7)
break A}if("rule.unconfirm"===q){r=a3.ky(a7)
break A}if("filing.target"===q){r=a3.jE(a7)
break A}if("member.add"===q){r=a3.k5(a7)
break A}if("member.rename"===q){r=a3.k6(a7)
break A}if("movement.attribute"===q){r=a3.iS(a7)
break A}if("movement.note"===q){r=a3.k9(a7)
break A}if("setup.tick"===q){n=a7.e
m=n.h(0,"stepId")
m.toString
A.c(m)
l=n.h(0,"itemId")
l.toString
A.c(l)
k=n.h(0,"ticked")
k.toString
j=a3.p4.a
if(A.cO(k))j.m(0,new A.p(m,l))
else j.a_(0,new A.p(m,l))
r=new A.E()
break A}if("book.add"===q){r=a3.iV(a7)
break A}if("account.add"===q){r=a3.iD(a7)
break A}if("account.edit"===q){r=a3.iF(a7)
break A}if("account.setStart"===q){r=a3.iL(a7)
break A}if("account.linkFolder"===q){r=a3.iI(a7)
break A}if("account.close"===q){r=a3.iE(a7)
break A}if("card.replace"===q){r=a3.j6(a7)
break A}if("account.moveBook"===q){r=a3.iJ(a7)
break A}if("account.remove"===q){r=a3.iK(a7)
break A}if("giro.add"===q){r=a3.jM(a7)
break A}if("institution.profile"===q){m=a7.e
l=m.h(0,"code")
l.toString
A.c(l)
k=m.h(0,"name")
k.toString
A.c(k)
j=A.m(m.h(0,"country"))
i=A.hD(m.h(0,"first"))
b=t.jS.a(m.h(0,"caveats"))
if(b==null)b=B.b0
a3.x.j(0,l,new A.fd(l,k,j,i===!0,J.dh(b,t.N),A.hD(m.h(0,"offersCsv"))))
r=new A.E()
break A}if("coverage.record"===q){r=a3.jf(a7)
break A}if("institution.enable"===q){r=a3.jP(a7)
break A}if("giro.edit"===q){r=a3.jN(a7)
break A}if("fact.confirm"===q){r=a3.jB(a7)
break A}if("statement.record"===q){r=a3.kR(a7)
break A}if("statement.loans"===q){r=a3.kO(a7)
break A}if("statement.notice"===q){r=a3.kP(a7)
break A}if("statement.noticeConfirm"===q){r=a3.kQ(a7)
break A}if("statement.file"===q){r=a3.kL(a7)
break A}if("statement.fileResult"===q){r=a3.kN(a7)
break A}if("secret.audit"===q){r=a3.kB(a7)
break A}if("review.add"===q){r=a3.kr(a7)
break A}if("review.dismiss"===q){r=a3.ks(a7)
break A}if("review.snooze"===q){r=a3.kt(a7)
break A}if("month.close"===q){r=a3.k7(a7)
break A}if("statement.fileAccount"===q){r=a3.kM(a7)
break A}if("statement.last4Pick"===q){r=a3.jW(a7)
break A}if("statement.last4Forget"===q){r=a3.jV(a7)
break A}if("keys.envelope"===q){m=a7.e.h(0,"envelope")
m.toString
A.E4(t.f.a(m).G(0,t.N,t.X))
r=new A.E()
break A}if("google.account"===q){m=a7.e
a=m.h(0,"emailSha256")
if(typeof a=="string"){l=$.GU()
l=!l.b.test(a)}else l=!0
if(l)A.f(B.fc)
m=A.m(m.h(0,"masked"))
a3.cy=new A.tN(a,m==null?"":m)
r=new A.E()
break A}if("keys.backupPublic"===q){m=a7.e.h(0,"x25519")
m.toString
a0=B.B.O(A.c(m))
m=a0.length
if(m!==32)A.f(A.z("an X25519 public key has 32 bytes, not "+m,a4,a4))
a3.db=new A.bG(a0,B.U)
r=new A.E()
break A}if("mail.sender"===q){r=a3.k_(a7)
break A}if("bill.mark"===q){r=a3.iU(a7)
break A}if("reminder.sent"===q){r=a3.kk(a7)
break A}if("reminders.switch"===q){r=a3.kl(a7)
break A}if("value.record"===q){r=a3.l_(a7)
break A}if("report.keep"===q){r=a3.kp(a7)
break A}if("brief.settings"===q){r=a3.j_(a7)
break A}if("brief.sent"===q){r=a3.iZ(a7)
break A}if("calendar.own"===q){r=a3.j3(a7)
break A}if("calendar.event"===q){r=a3.j2(a7)
break A}if("calendar.sync"===q){r=a3.j4(a7)
break A}if("giro.outcome"===q){r=a3.jO(a7)
break A}if("planned.set"===q){r=a3.kd(a7)
break A}if("planned.end"===q){r=a3.kb(a7)
break A}if("tax.assessment"===q){r=a3.kT(a7)
break A}if("planned.outcome"===q){r=a3.kc(a7)
break A}if("category.flag"===q||"budget.set"===q||"period.note"===q||"officeDay.mark"===q||"recurring.mark"===q||"goal.set"===q||"goal.remove"===q||"reward.rules"===q){a1=A.LO(a3,a3.e_,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("document.set"===q||"document.remove"===q||"document.retrieve"===q||"document.source"===q||"policy.set"===q||"policy.remove"===q){a1=A.LL(a3,a3.c_,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("movement.forBook"===q){r=a3.ez(a7)
break A}if("movement.forBookClear"===q){r=a3.jJ(a7)
break A}if("payment.byPerson"===q){r=a3.j0(a7)
break A}if("invoice.link"===q){r=a3.jU(a7)
break A}if("book.settings"===q||"invoice.record"===q||"subscription.set"===q||"subscription.remove"===q||"date.entered"===q||"remittance.confirm"===q||"indiaTax.entry"===q||"account.sourceOnly"===q||"loan.joint"===q||"statement.sourceRead"===q||"book.owedMentioned"===q){a1=A.LH(a3,a3.aD,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("life.set"===q||"life.remove"===q){r=a3.jZ(a7)
break A}if("rental.issue"===q){a1=A.LN(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("rental.credit"===q){a1=A.LM(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("company.invoice.issue"===q){a1=A.LJ(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("company.credit"===q){a1=A.LI(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("sms.sender"===q){r=a3.kJ(a7)
break A}if("sync.switch"===q||"sync.epoch"===q||"sync.device"===q||"sync.primary"===q){a1=a3.fr.eR(a7)
r=a1==null?new A.E():a3.p(a7,B.h,"sync: "+a1)
break A}if("life.proposalReject"===q){r=a3.kg(a7)
break A}r=a3.p(a7,B.f,"unknown operation type "+o)
break A}s=r}catch(a2){p=A.aw(a2)
s=a3.p(a7,B.h,"could not apply "+a7.d+": "+A.i(p))}a5.m(0,a6)
return s},
dC(a,b){var s,r,q,p,o,n,m,l,k=this
t.C.a(b)
s=A.F(b)
r=s.i("c4<1,e>")
q=A.B(new A.c4(new A.n(b,s.i("j(1)").a(new A.oa(k)),s.i("n<1>")),s.i("e(1)").a(new A.ob()),r),r.i("h.E"))
if(q.length!==0)return k.p(a,B.v,"movement "+B.a.Z(q,", ")+" already exists")
for(s=b.length,r=k.b,p=0;p<b.length;b.length===s||(0,A.l)(b),++p){o=b[p]
n=o.a
m=o.c
l=k.bU("m:"+n,m)
r.j(0,n,l===m?o:o.cj(l))}return new A.E()},
ki(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="occurredAtUtc",a9=b0.e.h(0,"movement")
a9.toString
s=t.f
r=t.N
q=t.X
a9=s.a(a9).G(0,r,q)
p=a9.h(0,"provenance")
p.toString
o=s.a(p).G(0,r,q)
n=A.m(a9.h(0,"type"))
m=A.m(a9.h(0,"paymentMethod"))
q=a9.h(0,"id")
q.toString
A.c(q)
r=a9.h(0,"bookId")
r.toString
A.c(r)
p=a9.h(0,"accountId")
p.toString
A.c(p)
s=n==null?null:A.ag(B.au,n,t.v_)
l=a9.h(0,"direction")
l.toString
l=A.ag(B.bN,A.c(l),t.g7)
k=a9.h(0,"amount")
k.toString
A.c(k)
j=a9.h(0,"currency")
j.toString
A.c(j)
j=A.a3(A.ad(k),j)
if(a9.h(0,a8)==null)k=null
else{k=a9.h(0,a8)
k.toString
k=A.c1(A.c(k)).F()}i=a9.h(0,"bankDate")
i.toString
i=A.ax(A.c(i))
h=a9.h(0,"homeDate")
h.toString
h=A.ax(A.c(h))
g=A.m(a9.h(0,"payee"))
f=A.m(a9.h(0,"categoryId"))
e=A.m(a9.h(0,"memberId"))
d=A.m(a9.h(0,"counterpartyBookId"))
c=A.m(a9.h(0,"counterpartyPerson"))
b=A.m(a9.h(0,"linkedMovementId"))
a=A.m(a9.h(0,"pairId"))
a0=A.m(a9.h(0,"statementLineRef"))
a1=A.m(a9.h(0,"sameEventAs"))
a2=m==null?null:A.ag(B.j9,m,t.fN)
a9=A.m(a9.h(0,"notes"))
a3=o.h(0,"channel")
a3.toString
A.c(a3)
a4=o.h(0,"sourceId")
a4.toString
A.c(a4)
a5=o.h(0,"importedAtUtc")
a5.toString
a5=A.c1(A.c(a5)).F()
a6=o.h(0,"verified")
a6.toString
a7=A.bQ(p,j,i,r,f,d,c,l,h,q,b,e,a9,k,a,g,a2,new A.dQ(a3,a4,a5,A.cO(a6)),a1,a0,s,1)
a9=a7.db
if(A.Gq(a9)!=null){a9.toString
s=$.Dp()
r=A.D("[\\s-]",!0,!1)
a9=A.ao(a9,r,"")
return this.p(b0,B.h,s.b.test(a9)?"a movement's note may not hold a full number":"a movement's note must be one line of at most 200 characters")}return this.dC(b0,A.b([a7],t.A))},
k9(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a9.e,a8=a7.h(0,"movementId")
a8.toString
A.c(a8)
s=A.m(a7.h(0,"notes"))
r=a6.b
q=r.a.h(0,a8)
if(q==null)return a6.p(a9,B.f,"no movement "+a8+" to note")
p=q.cx
if(p!=null)return a6.p(a9,B.f,a8+" is another message about "+p+"; note the payment it belongs to")
o=A.Gq(s)
if(o!=null)return a6.p(a9,B.h,"note not saved on "+a8+": "+o)
n=A.D4(s)
m=q.dx
l=a7.h(0,"baseVersion")
l.toString
if(m!==A.O(l)){r=new A.om()
B.a.m(a6.c,new A.W("conflict:"+a9.a,B.I,a8,"Changed on two devices: kept "+A.i(r.$1(q.db))+", the other device wrote "+A.i(r.$1(n))+"."))
return new A.bv()}l=q.a
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
r.j(0,a8,A.bQ(j,g,e,k,a,a1,a2,h,d,l,a3,a0,n,f,a4,b,q.cy,c,p,a5,i,m).eY(m+1))
return new A.E()},
j7(a){var s,r,q,p,o=a.e,n=o.h(0,"movementId")
n.toString
A.c(n)
s=o.h(0,"categoryId")
s.toString
A.c(s)
o=o.h(0,"baseVersion")
o.toString
A.O(o)
r=this.b
q=r.a.h(0,n)
if(q==null)return this.p(a,B.f,"no movement "+n+" to categorise")
p=q.dx
if(p!==o){B.a.m(this.c,new A.W("conflict:"+a.a,B.I,n,"Changed on two devices: kept "+A.i(q.Q)+", the other device chose "+s+"."))
return new A.bv()}r.j(0,n,q.lz(s,p+1))
return new A.E()},
kF(a){var s,r,q,p,o,n,m,l,k=null,j=a.e,i=j.h(0,"pairId")
i.toString
A.c(i)
s=this.b.a.h(0,i+":advance")
if(s==null)return this.p(a,B.ae,"no advance "+i+" to settle")
r=a.a
q=s.b
p=j.h(0,"accountId")
p.toString
A.c(p)
o=j.h(0,"amount")
o.toString
A.c(o)
n=j.h(0,"currency")
n.toString
A.c(n)
n=A.a3(A.ad(o),n)
o=j.h(0,"occurredAtUtc")
o.toString
o=A.c1(A.c(o)).F()
m=j.h(0,"bankDate")
m.toString
m=A.ax(A.c(m))
l=j.h(0,"homeDate")
l.toString
l=A.ax(A.c(l))
return this.dC(a,A.b([A.bQ(p,n,m,q,k,s.at,k,B.m,l,i+":settlement:"+r,s.a,k,k,o,i,k,k,new A.dQ("operation",r,a.f,!1),k,k,B.a_,1)],t.A))},
l0(a){var s,r,q,p,o,n,m,l,k,j=a.e,i=j.h(0,"movementId")
i.toString
A.c(i)
s=this.b
r=s.a
q=r.h(0,i)
if(q==null)return this.p(a,B.aD,"no movement "+i+" to verify")
p=j.h(0,"postedAmount")
p.toString
A.c(p)
o=j.h(0,"currency")
o.toString
A.c(o)
n=A.a3(A.ad(p),o)
m=q.ch
if(m==null)l=null
else{p=q.a
o=m+":advance"
if(p===o){p=m+":expense"
l=p}else{p=p===m+":expense"?o:null
l=p}}k=l==null?this.jK(q):r.h(0,l)
r=q.y
p=j.h(0,"statementLineRef")
p.toString
s.j(0,i,q.lF(n,new A.dQ(r.a,r.b,r.c,!0),A.c(p),q.dx+1))
if(k!=null)s.j(0,k.a,k.ly(n,k.dx+1))
return new A.E()},
j8(a){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,"id")
k.toString
A.c(k)
s=l.h(0,"bookKind")
s.toString
A.c(s)
r=l.h(0,"name")
r.toString
A.c(r)
q=A.m(l.h(0,"parentId"))
p=this.d
o=p.a
if(o.E(k))return this.p(a,B.v,"category "+k+" already exists")
n=q==null
m=n?null:o.h(0,q)
if(!n)o=m==null||m.b!==s
else o=!1
if(o)return this.p(a,B.f,"category "+k+" needs an existing "+s+" parent "+q)
p.j(0,k,new A.bM(k,s,r,q))
return new A.E()},
j9(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.c(o)
s=this.d
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no category "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.b.I(A.c(p))
if(q.length===0)return this.p(a,B.f,"category "+o+" needs a name")
s.j(0,o,new A.bM(r.a,r.b,q,r.d))
return new A.E()},
kw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a.e,c=d.h(0,"id")
c.toString
A.c(c)
s=A.m(d.h(0,"categoryId"))
r=f.e
if(r.a.E(c))return f.p(a,B.v,"rule "+c+" already exists")
q=d.h(0,"bookId")
q.toString
A.c(q)
p=d.h(0,"pattern")
p.toString
A.c(p)
if(A.cQ(p).length===0)return f.p(a,B.f,"rule "+c+" has an empty pattern")
o=A.m(d.h(0,"forBookId"))
n=o==null
if(!n)m=f.aG(o)==null||o===q||!J.Y(d.h(0,"type"),"expense")
else m=!1
if(m)return f.p(a,B.f,"rule "+c+" files expenses for another book that exists")
l=A.m(d.h(0,"direction"))
m=d.h(0,"type")
m.toString
k=A.ag(B.au,A.c(m),t.v_)
m=l==null
j=m?e:A.ag(B.bN,l,t.g7)
i=f.fY(c,k,s,j,n?q:o)
if(i!=null)return f.p(a,B.f,i)
h=A.m(d.h(0,"memberId"))
if(h!=null&&!f.p3.a.E(h))return f.p(a,B.f,"rule "+c+" names unknown member "+h)
g=d.h(0,"accountAlias")
A:{if(typeof g=="string"){n=f.bU("r:"+c,g)
break A}n=e
break A}m=m?e:A.ag(B.bN,l,t.g7)
j=A.hD(d.h(0,"appliesToNew"))
r.j(0,c,new A.bc(c,q,p,k,s,!1,n,m,h,o,j!==!1,e))
return new A.E()},
fY(a,b,c,d,e){var s,r
if(!B.a.u(B.jt,b))return"rule "+a+" cannot file transactions as "+b.b
s=b===B.H
if(s&&d===B.k)return"rule "+a+" files refunds, which are money coming in"
if(!(b===B.n||b===B.w||s))return c==null?null:"rule "+a+" files "+b.b+", which has no category"
if(c==null)return"rule "+a+" files "+b.b+" and needs a category"
r=this.d.a.h(0,c)
if(r==null)return"rule "+a+" names unknown category "+c
if(r.b!==this.bX(e))return"rule "+a+" files "+c+", which does not belong to book "+e
if(s&&A.hM(r))return"rule "+a+" files refunds under "+c+", which is not spending"
return null},
iD(a){var s,r,q,p,o=this,n=a.e.h(0,"account")
n.toString
s=A.BW(t.f.a(n).G(0,t.N,t.X))
n=o.r
r=s.a
if(n.a.E(r))return o.p(a,B.v,"account "+r+" already exists")
q=s.r
if(o.aG(q)==null)return o.p(a,B.f,"no book "+q)
p=A.eU(s)
if(p!=null)return o.p(a,B.h,"account not added: "+p)
n.j(0,r,s)
return new A.E()},
kJ(a){var s,r,q,p,o,n=null
try{r=a.e
q=A.m(r.h(0,"id"))
p=A.Gp(q==null?"":q)
if(p==null)A.f(B.fa)
q=r.h(0,"kind")
q.toString
n=new A.cq(p,A.ag(B.bP,A.c(q),t.in),A.m(r.h(0,"institution")))}catch(o){r=A.aw(o)
if(r instanceof A.b9){s=r
return this.p(a,B.h,"SMS sender not recorded: "+s.a)}else throw o}r=this.dy
if(J.Y(a.e.h(0,"removed"),!0))r.a_(0,n.a)
else r.j(0,n.a,n)
return new A.E()},
k_(a){var s,r,q,p,o,n,m=null
try{r=a.e
q=A.m(r.h(0,"address"))
p=B.b.I(q==null?"":q).toLowerCase()
q=$.Hq()
if(!q.b.test(p)){q=$.Hz()
q=q.b.test(p)}else q=!0
o=q?p:null
if(o==null)A.f(B.fd)
q=r.h(0,"kind")
q.toString
m=new A.iz(o,A.ag(B.kq,A.c(q),t.qo),A.m(r.h(0,"institution")))}catch(n){r=A.aw(n)
if(r instanceof A.b9){s=r
return this.p(a,B.h,"mail sender not recorded: "+s.a)}else throw n}r=this.dx
if(J.Y(a.e.h(0,"removed"),!0))r.a_(0,m.a)
else r.j(0,m.a,m)
return new A.E()},
kR(a){var s,r,q,p=this,o=A.Jt(a.e),n=p.r,m=o.b,l=n.a
if(!l.E(m))return p.p(a,B.f,"statement "+o.a+" is for an unregistered account")
s=p.fx
if(B.a.M(s,new A.oA(o)))return p.p(a,B.v,"statement "+o.a+" is already recorded")
r=p.bU("s:"+o.a,m)
B.a.m(s,r===m?o:o.cj(r))
l=l.h(0,r)
l.toString
q=l.CW
if(q!=null)m=o.d.l(0,q)>0
else m=!1
if(m)n.j(0,r,l.hf(!0))
return new A.E()},
kP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.Js(a.e),c=d.b
if(!e.r.a.E(c))return e.p(a,B.f,"notice "+d.a+" is for an unregistered account")
s=e.fy
if(B.a.M(s,new A.oy(d)))return e.p(a,B.v,"notice "+d.a+" is already recorded")
r=e.bU("n:"+d.a,c)
q=r===c?d:d.cj(r)
p=B.a.f_(s,new A.oz(q))
if(p>=0){if(!(p<s.length))return A.a(s,p)
o=s[p]
c=A.b([],t.s)
n=o.d
m=n==null
if(!m){l=q.d
l=l!=null&&!n.J(0,l)}else l=!1
if(l)c.push("statement date ("+A.i(q.d)+" against "+n.k(0)+")")
l=o.e
k=l==null
if(!k){j=q.e
j=j!=null&&!l.J(0,j)}else j=!1
if(j)c.push("balance ("+A.i(q.e)+" against "+l.k(0)+")")
j=o.f
i=j==null
if(!i){h=q.f
h=h!=null&&!j.J(0,h)}else h=!1
if(h)c.push("minimum due ("+A.i(q.f)+" against "+j.k(0)+")")
h=o.r
g=h==null
if(!g){f=q.r
f=f!=null&&!h.J(0,f)}else f=!1
if(f)c.push("due date ("+A.i(q.r)+" against "+h.k(0)+")")
if(c.length!==0)return e.p(a,B.v,"notice "+q.a+" disagrees with notice "+o.a+" on "+B.a.Z(c,", "))
c=m?q.d:n
n=k?q.e:l
m=i?q.f:j
l=g?q.r:h
B.a.j(s,p,new A.cK(o.a,o.b,o.c,c,n,m,l,o.w))
return new A.E()}B.a.m(s,q)
return new A.E()},
kQ(a){var s,r,q,p,o=a.e.h(0,"noticeId")
o.toString
A.c(o)
s=this.fy
r=B.a.f_(s,new A.ox(o))
if(r<0)return this.p(a,B.f,"no notice "+o+" to confirm")
if(!(r<s.length))return A.a(s,r)
q=s[r]
p=q.d
if(!(p!=null&&q.e!=null&&q.r!=null))return this.p(a,B.f,"notice "+o+": cannot confirm figures the notice does not give (statement date, balance and due date)")
B.a.j(s,r,new A.cK(q.a,q.b,q.c,p,q.e,q.f,q.r,!0))
return new A.E()},
jf(a){var s,r,q,p,o="institution",n="threshold",m=a.e,l=A.m(m.h(0,o)),k=A.Mr(m,l!=null&&this.x.a.E(l))
if(k!=null)return this.p(a,B.h,"coverage not recorded: "+k)
s=m.h(0,o)
s.toString
A.c(s)
r=m.h(0,"channel")
r.toString
r=A.ag(B.jw,A.c(r),t.dd)
q=m.h(0,"level")
q.toString
A.ag(B.jK,A.c(q),t.w0)
if(m.h(0,n)!=null){q=m.h(0,n)
q.toString
A.aP(t.f.a(q).G(0,t.N,t.X))}A.hD(m.h(0,"recurringAlerts"))
A.hD(m.h(0,"refundsAlert"))
m=m.h(0,"checkedOn")
m.toString
m=A.ax(A.c(m))
q=this.y
p=q.h(0,new A.p(s,r))
if(p==null||m.l(0,p.r)>=0)q.j(0,new A.p(s,r),new A.kb(s,r,m))
return new A.E()},
jP(a){var s,r,q=this,p=a.e.h(0,"institution")
p.toString
A.c(p)
s=q.x.a.h(0,p)
if(s==null)return q.p(a,B.f,"no profile for "+p)
if(!s.d){r=A.LG(q)
if(!r.a)return q.p(a,B.h,"alerts from "+s.b+" wait until a full statement cycle reconciles at "+B.a.Z(r.b," and "))}q.z.m(0,p)
return new A.E()},
jM(a){var s,r,q,p,o=this,n=a.e.h(0,"giro")
n.toString
s=A.DV(t.f.a(n).G(0,t.N,t.X))
n=s.c
r=o.r.a.h(0,n)
if(r==null)return o.p(a,B.f,"no account "+n+" for a GIRO")
n=o.w
q=s.a
if(n.a.E(q))return o.p(a,B.v,"GIRO "+q+" already exists")
p=A.FX(s,r)
if(p!=null)return o.p(a,B.h,"GIRO not added: "+p)
n.j(0,q,s)
return new A.E()},
jN(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="dayOfMonth",g="typicalAmount",f="categoryId",e=a.e,d=e.h(0,"id")
d.toString
A.c(d)
s=i.w
r=s.a.h(0,d)
if(r==null)return i.p(a,B.f,"no GIRO "+d+" to change")
q=r.a
p=r.b
o=r.c
n=e.E(h)?A.aH(e.h(0,h)):r.d
if(e.E(g))if(e.h(0,g)==null)m=null
else{m=e.h(0,g)
m.toString
m=A.aP(t.J.a(m))}else m=r.e
l=e.E(f)?A.m(e.h(0,f)):r.f
k=new A.c2(q,p,o,n,m,l)
if(l!=null){q=i.d.a.h(0,l)
q=q==null?null:q.b
q=q!=i.bX(i.r.a.h(0,o).r)}else q=!1
if(q)return i.p(a,B.f,"GIRO not changed: no category "+l+" in its book")
q=i.r.a.h(0,o)
q.toString
j=A.FX(k,q)
if(j!=null)return i.p(a,B.h,"GIRO not changed: "+j)
s.j(0,d,k)
return new A.E()},
jO(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"giroId")
k.toString
A.c(k)
s=l.h(0,"month")
s.toString
A.c(s)
r=l.h(0,"outcome")
r.toString
r=A.ag(B.kF,A.c(r),t.jf)
q=J.Y(l.h(0,"source"),"notice")
p=A.m(l.h(0,"movementId"))
o=m.w.a.h(0,k)
if(o==null)return m.p(a,B.f,"no GIRO "+k)
if(A.mK(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q&&r!==B.by)return m.p(a,B.h,"a notice can only say a GIRO failed")
if(p!=null){n=m.b.a.h(0,p)
if(r!==B.bx||n==null||n.c!==o.c||n.e!==B.k||n.cx!=null)return m.p(a,B.f,"not a deduction from the GIRO's account: "+p)}B.a.m(m.Q,new A.im(k,s,r,q,p))
return new A.E()},
kd(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.e,f=g.h(0,"id")
f.toString
A.c(f)
s=g.h(0,"kind")
s.toString
s=A.ag(B.jO,A.c(s),t.mZ)
r=g.h(0,"name")
r.toString
A.c(r)
q=g.h(0,"accountId")
q.toString
A.c(q)
p=A.m(g.h(0,"toAccountId"))
o=g.h(0,"dayOfMonth")
o.toString
A.O(o)
if(g.h(0,"amount")==null)n=null
else{n=g.h(0,"amount")
n.toString
n=A.aP(t.f.a(n).G(0,t.N,t.X))}m=A.m(g.h(0,"words"))
l=g.h(0,"fromMonth")
l.toString
A.c(l)
g=g.h(0,"version")
g.toString
A.O(g)
k=new A.bp(f,s,r,q,p,o,n,m,l,g)
j=A.Np(k,h.r)
if(j!=null)return h.p(a,B.h,"not planned: "+j)
q=h.as
i=q.a.h(0,f)
if(i==null)i=A.b([],t.rA)
p=J.an(i)
if(g!==p.gq(i)+1){B.a.m(h.c,new A.W("conflict:"+a.a,B.I,f,"Changed on two devices: "+r+" was changed since; check it again."))
return new A.bv()}if(p.gaq(i))g=p.gak(i).b!==s||B.b.l(p.gak(i).x,l)>0
else g=!1
if(g)return h.p(a,B.h,"a new version keeps its kind and starts no earlier")
g=A.B(i,t.AB)
g.push(k)
q.j(0,f,g)
return new A.E()},
kb(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.c(q)
r=r.h(0,"fromMonth")
r.toString
A.c(r)
if(!s.as.a.E(q))return s.p(a,B.f,"nothing planned as "+q)
if(A.mK(r)==null)return s.p(a,B.h,"month is YYYY-MM")
s.at.j(0,q,r)
return new A.E()},
kc(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"id")
k.toString
A.c(k)
s=l.h(0,"month")
s.toString
A.c(s)
r=l.h(0,"outcome")
r.toString
r=A.ag(B.kh,A.c(r),t.t_)
q=A.m(l.h(0,"movementId"))
l=m.as.a.h(0,k)
p=l==null?null:J.BU(l)
if(p==null)return m.p(a,B.f,"nothing planned as "+k)
if(A.mK(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q!=null){o=m.b.a.h(0,q)
n=p.b===B.b6?B.m:B.k
if(r!==B.c0||o==null||o.c!==p.d||o.e!==n||o.cx!=null)return m.p(a,B.f,"not a transaction of "+p.c+": "+q)}B.a.m(m.ax,new A.iQ(k,s,r,q))
return new A.E()},
kT(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"ya")
l.toString
A.O(l)
s=m.h(0,"assessed")
s.toString
s=A.aP(t.f.a(s).G(0,t.N,t.X))
r=A.m(m.h(0,"giroId"))
q=new A.lE(l,s,r,A.m(m.h(0,"firstMonth")),A.aH(m.h(0,"instalments")))
m=r==null
p=m?null:n.w.a.h(0,r)
if(!m&&p==null)return n.p(a,B.f,"no GIRO "+r)
o=A.O_(q,p==null?null:n.r.a.h(0,p.c))
if(o!=null)return n.p(a,B.h,"not recorded: "+o)
n.ay.j(0,l,q)
return new A.E()},
jB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.e,f=g.h(0,"source")
f.toString
s=t.f
r=t.N
q=t.X
p=s.a(f).G(0,r,q)
f=g.h(0,"id")
f.toString
A.c(f)
o=g.h(0,"subject")
o.toString
A.c(o)
n=g.h(0,"field")
n.toString
A.c(n)
m=g.h(0,"value")
m.toString
A.c(m)
l=g.h(0,"type")
l.toString
A.c(l)
k=p.h(0,"file")
k.toString
A.c(k)
j=p.h(0,"location")
j.toString
q=s.a(j).G(0,r,q)
r=p.h(0,"span")
r.toString
A.c(r)
j=g.h(0,"fileDate")
j.toString
j=A.ax(A.c(j))
g=g.h(0,"confirmedOn")
g.toString
i=new A.kf(f,o,n,m,l,new A.tG(k,q,r),j,A.ax(A.c(g)))
h=A.MF(i)
if(h!=null)return this.p(a,B.h,"fact not kept: "+h)
this.CW.j(0,f,i)
return new A.E()},
iF(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="loan",a6="minimumBalance",a7="statement",a8="ifsc",a9="micr",b0="branch",b1="numberShown",b2=b4.e,b3=b2.h(0,"id")
b3.toString
A.c(b3)
s=a3.r
r=s.a.h(0,b3)
if(r==null)return a3.p(b4,B.f,"no account "+b3+" to change")
if(b2.E("kind"))return a3.iH(b4,r)
q=A.m(b2.h(0,"alias"))
p=A.m(b2.h(0,"holder"))
o=A.aH(b2.h(0,"staleAfterDays"))
n=A.aH(b2.h(0,"billingCycleDay"))
if(b2.h(0,a5)==null)m=a4
else{m=b2.h(0,a5)
m.toString
m=A.Cf(t.J.a(m))}l=b2.E(a5)&&b2.h(0,a5)==null
if(b2.h(0,a6)==null)k=a4
else{k=b2.h(0,a6)
k.toString
k=A.aP(t.J.a(k))}j=b2.E(a6)&&b2.h(0,a6)==null
if(b2.h(0,a7)==null)i=a4
else{i=b2.h(0,a7)
i.toString
i=A.Eu(t.J.a(i))}h=b2.E(a7)&&b2.h(0,a7)==null
g=A.m(b2.h(0,a8))
g=g==null?a4:B.b.I(g).toUpperCase()
f=b2.E(a8)&&b2.h(0,a8)==null
e=A.m(b2.h(0,a9))
e=e==null?a4:B.b.I(e)
d=b2.E(a9)&&b2.h(0,a9)==null
c=A.m(b2.h(0,b0))
c=c==null?a4:B.b.I(c)
b=b2.E(b0)&&b2.h(0,b0)==null
a=A.m(b2.h(0,b1))
if(a==null)a=a4
else{a0=A.D("\\s",!0,!1)
a=A.ao(a,a0,"")
a=A.ao(a.toUpperCase(),"*","X")}a1=r.lx(q,n,c,b,f,l,d,j,b2.E(b1)&&b2.h(0,b1)==null,h,p,g,m,e,k,a,o,i)
a2=A.eU(a1)
if(a2!=null)return a3.p(b4,B.h,"account not changed: "+a2)
s.j(0,b3,a1)
return new A.E()},
iH(a,b){var s,r,q,p=this,o=a.e,n=A.C4(B.dM,t.jN).h(0,o.h(0,"kind")),m=o.h(0,"subtype")
A:{if(typeof m=="string"){s=A.C4(B.dz,t.vi).h(0,m)
break A}s=null
break A}if(n!=null)r=o.h(0,"subtype")!=null&&s==null
else r=!0
if(r)return p.p(a,B.h,"an account type names a kind and its subtype")
if(b.d.b!==o.h(0,"baseKind"))return p.d_(a,b.a,b.b+"'s type")
r=b.a
q=p.mt(r,n,s)
if(q!=null)return p.p(a,B.h,"type not changed: "+q)
p.r.j(0,r,A.E8(b,n,s))
return new A.E()},
mt(a,b,c){var s,r,q,p,o,n,m=this,l="money owed",k="money held",j=m.r.a,i=j.h(0,a)
if(i==null)return"no account "+a
s=i.d
if(s===B.x||b===B.x)return"a cash wallet stays a cash wallet"
if(s===b&&i.dy==c)return"it is that type already"
if(i.cx!=null)return i.b+" was replaced by a newer number"
if(B.a.M(m.cc(a),new A.oG(b)))return"its earlier numbers are of its type; undo them first"
r=b===B.y||b===B.o
q=m.fx
p=A.F(q)
o=new A.n(q,p.i("j(1)").a(new A.oH(a)),p.i("n<1>")).gq(0)
if(o>0)q=r!==(s===B.y||s===B.o)
else q=!1
if(q){n=s===B.y||s===B.o?l:k
j=o===1?"statement was":""+o+" statements were"
s=r?l:k
return"its "+j+" read as "+n+"; as "+s+" the balances would turn around"}if(b!==B.N&&b!==B.Q){s=m.w.a
if(new A.M(s,A.o(s).i("M<2>")).M(0,new A.oI(a)))return"a GIRO is paid from it"
if(new A.M(j,A.o(j).i("M<2>")).M(0,new A.oJ(a)))return"a loan is paid from it"
j=m.as.a
s=A.o(j).i("M<2>")
if(new A.dw(new A.M(j,s),s.i("h<bp>(h.E)").a(new A.oK()),s.i("dw<h.E,bp>")).M(0,new A.oL(a)))return"a planned item uses it"}return A.eU(A.E8(i,b,c))},
d_(a,b,c){B.a.m(this.c,new A.W("conflict:"+a.a,B.I,b,"Changed on two devices: "+c+" was changed since; check it again."))
return new A.bv()},
iL(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.c(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to change")
q=i.h(0,"startDate")
q.toString
p=A.ax(A.c(q))
q=i.h(0,"startFrom")
q.toString
o=A.ua(t.f.a(q).G(0,t.N,t.X))
q=r.w
n=i.h(0,"baseStartDate")
n.toString
if(!q.J(0,A.ax(A.c(n))))return j.d_(a,h,r.b+"'s history start")
switch(o.a.a){case 0:return j.p(a,B.h,"a folder year is taken only at import")
case 1:q=j.fx
n=A.F(q)
m=A.aO(new A.n(q,n.i("j(1)").a(new A.o9(o,h)),n.i("n<1>")),t.v)
if(m==null||!m.c.J(0,p))return j.p(a,B.h,"start not changed: not a statement of "+r.b+"'s")
break
case 2:break}l=r.lB(p,o).n9(p,o)
k=A.eU(l)
if(k!=null)return j.p(a,B.h,"start not changed: "+k)
s.j(0,h,l)
if(r.db!=null||j.cc(h).length!==0)j.eI(B.mp)
return new A.E()},
iE(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.c(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to close")
if(r.cx!=null)return j.p(a,B.f,r.b+" was replaced by a newer card")
if(!J.Y(i.h(0,"closed"),!0)){if(r.CW==null)return j.p(a,B.f,r.b+" is not closed")
s.j(0,h,r.hf(!0))
return new A.E()}if(r.CW!=null)return j.p(a,B.f,r.b+" is already closed")
if(r.d===B.x)return j.p(a,B.h,"a cash wallet is never closed")
for(q=j.fx,p=q.length,o=null,n=0;n<q.length;q.length===p||(0,A.l)(q),++n){m=q[n]
if(m.b===h)l=o==null||m.d.l(0,o)>0
else l=!1
if(l)o=m.d}if(o==null)return j.p(a,B.h,r.b+" has no statement to close after")
q=i.h(0,"after")
q.toString
k=A.ax(A.c(q))
if(!k.J(0,o))return j.d_(a,h,r.b+"'s latest statement")
s.j(0,h,r.lq(k))
return new A.E()},
j6(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"old")
if(typeof j!="string")return l.p(a,B.h,"a card replacement names the old card")
s=l.r
r=s.a
q=r.h(0,j)
if(q==null)return l.p(a,B.f,"no account "+j)
if(J.Y(k.h(0,"undo"),!0)){if(q.cx==null)return l.p(a,B.f,q.b+" is not replaced")
p=l.aX(j)
s.j(0,j,q.hS(null,null))
l.eI(A.kX([p],t.N))
return new A.E()}o=k.h(0,"new")
n=k.h(0,"from")
if(typeof o!="string"||typeof n!="string")return l.p(a,B.h,"a card replacement names the newer card and the date")
m=r.h(0,o)
A:{if(m==null){r="no account "+o
break A}r=q.cx
if(r!=null){r=q.b+" is already replaced"
break A}if(o===j){r="a card cannot replace itself"
break A}r=A.E7(q.d,m.d)
if(!r){r="only a card or a bank account of the same type is replaced"
break A}if(A.hL(q.c)!==A.hL(m.c)&&!J.Y(k.h(0,"moved"),!0)){r="the accounts are of different banks"
break A}r=q.e!==m.e||q.r!==m.r
if(r){r="the accounts differ in currency or book"
break A}r=l.aX(o)
if(r===j){r=m.b+" was itself replaced by "+q.b
break A}r=null
break A}if(r!=null)return l.p(a,B.h,"card not replaced: "+r)
s.j(0,j,q.hS(o,A.ax(n)))
l.eI(A.kX([j],t.N))
return new A.E()},
eI(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null
t.dO.a(c6)
s=new A.or(c4,c6)
r=c4.b
q=r.a
p=A.o(q).i("M<2>")
o=p.i("n<h.E>")
q=A.B(new A.n(new A.M(q,p),p.i("j(h.E)").a(new A.op(c6)),o),o.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.l)(q),++n){m=q[n]
o=m.a
l=s.$2("m:"+o,m.c)
if(l!=null)r.j(0,o,m.cj(l))}for(r=c4.fx,k=0;k<r.length;++k){j=r[k]
i=s.$2("s:"+j.a,j.b)
if(i!=null){B.a.j(r,k,j.cj(i))
q=$.GR()
p=q.a
h=p.get(c4)
if(h!=null&&k<h.a[0]){o=h.a
o=q.$ti.i("1?").a(new A.eP([k,o[1],o[2],o[3]]))
p.set(c4,o)}}}for(r=c4.fy,k=0;k<r.length;++k){g=r[k]
q=g.a
f=s.$2("n:"+q,g.b)
if(f!=null)B.a.j(r,k,new A.cK(q,f,g.c,g.d,g.e,g.f,g.r,g.w))}r=c4.id
q=A.o(r).i("M<2>")
q=A.B(new A.M(r,q),q.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.l)(q),++n){e=q[n]
o=e.a
d=s.$2("f:"+o,e.b)
if(d!=null)r.j(0,o,new A.e_(o,d,e.c,e.d,e.e,e.f,e.r))}r=c4.k2
q=A.o(r).i("ac<1,2>")
q=A.B(new A.ac(r,q),q.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.l)(q),++n){c=q[n]
b=c.b
o=c.a
a=s.$2("p:"+o,b.c)
if(a!=null)r.j(0,o,new A.d0(b.a,b.b,a,b.d))}r=c4.e
q=r.a
p=A.o(q).i("M<2>")
p=A.B(new A.M(q,p),p.i("h.E"))
o=p.length
r=r.$ti
a0=r.i("af.K")
r=r.i("af.V")
n=0
for(;n<p.length;p.length===o||(0,A.l)(p),++n){a1=p[n]
a2=a1.r
if(a2==null)continue
a3=a1.a
a4=s.$2("r:"+a3,a2)
if(a4!=null){a0.a(a3)
a5=r.a(new A.bc(a3,a1.b,a1.c,a1.d,a1.e,a1.f,a4,a1.w,a1.x,a1.y,a1.z,a1.Q))
q.j(0,a3,a5)}}r=c4.w
q=r.a
p=A.o(q).i("M<2>")
p=A.B(new A.M(q,p),p.i("h.E"))
o=p.length
a0=t.N
a3=t.X
r=r.$ti
a5=r.i("af.K")
r=r.i("af.V")
n=0
for(;n<p.length;p.length===o||(0,A.l)(p),++n){a6=p[n]
a7=a6.a
a8=s.$2("g:"+a7,a6.c)
if(a8!=null){a9=a6.N()
b0=A.ix(a0,a3)
b0.a1(0,a9)
b0.j(0,"fromAccountId",a8)
b0=A.DV(b0)
a5.a(a7)
r.a(b0)
q.j(0,a7,b0)}}r=c4.r
q=r.a
p=A.o(q)
o=p.i("M<2>")
a5=o.i("h.E")
a7=A.B(new A.M(q,o),a5)
a9=a7.length
r=r.$ti
b0=r.i("af.K")
r=r.i("af.V")
n=0
for(;n<a7.length;a7.length===a9||(0,A.l)(a7),++n){b1=a7[n]
b2=b1.as
b3=b2==null
b4=b3?c5:b2.w
if(b3||b4==null)continue
b3=b1.a
b5=s.$2("l:"+b3,b4)
if(b5!=null){b6=b2.N()
b7=A.ix(a0,a3)
b7.a1(0,b6)
b7.j(0,"payingAccountId",b5)
b7=b1.hg(A.Cf(b7))
b0.a(b3)
r.a(b7)
q.j(0,b3,b7)}}for(a3=c4.RG,k=0;k<a3.length;++k){b8=a3[k]
b9=s.$2("d:"+k,b8.a)
if(b9!=null)B.a.j(a3,k,new A.fY(b9,b8.b,b8.c))}a0=A.w(a0,t.aa)
for(p=new A.a1(q,q.r,q.e,p.i("a1<2>"));p.n();){a3=p.d
if(a3.cx==null){a7=a3.a
a9=a3.db
a0.j(0,a7,a9==null?new A.p(a3.w,a3.ay):new A.p(a9,a3.dx))}}for(p=o.i("j(h.E)").a(new A.oq()),a3=new A.M(q,o).gA(0),p=new A.N(a3,p,o.i("N<h.E>"));p.n();){a7=a3.gt()
c0=c4.aX(a7.a)
a9=a7.db
c1=a9==null?new A.p(a7.w,a7.ay):new A.p(a9,a7.dx)
c2=a0.h(0,c0)
if(c2!=null&&c1.a.l(0,c2.a)<0)a0.j(0,c0,c1)}p=A.B(new A.M(q,o),a5)
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.l)(p),++n){b1=p[n]
a3=b1.db
a5=a3==null
c1=a5?new A.p(b1.w,b1.ay):new A.p(a3,b1.dx)
if(b1.cx!=null)c3=c1
else{a3=a0.h(0,b1.a)
c3=a3==null?c1:a3}a3=c3.a
a7=b1.w
a9=!1
if(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c){a7=c3.b
a7=B.z.be(a7==null?c5:a7.N(),c5)
b3=b1.ay
if(a7===B.z.be(b3==null?c5:b3.N(),c5)){a7=c1.a
a5=a5===(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c)}else a5=a9}else a5=a9
if(a5)continue
a5=c1.a
a5=a5.a===a3.a&&a5.b===a3.b&&a5.c===a3.c?c5:c1
a5=b1.hR(a3,c3.b,a5)
a3=b0.a(b1.a)
r.a(a5)
q.j(0,a3,a5)}},
iJ(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a9.e,a6=a5.h(0,"id"),a7=a5.h(0,"from"),a8=a5.h(0,"to")
if(typeof a6!="string"||typeof a7!="string"||typeof a8!="string")return a4.p(a9,B.h,"a move names the account and both books")
s=a4.r
r=s.a
q=r.h(0,a6)
if(q==null)return a4.p(a9,B.f,"no account "+a6)
if(q.r!==a7)return a4.d_(a9,a6,q.b+"'s book")
p=a4.mz(a6,a8)
if(p!=null)return a4.p(a9,B.h,"account not moved: "+p)
o=t.N
n=A.kX([a6],o)
for(m=a4.cc(a6),l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k)n.m(0,m[k].a)
for(m=A.ea(n,n.r,n.$ti.c),l=t.X,s=s.$ti,j=s.i("af.K"),s=s.i("af.V"),i=m.$ti.c;m.n();){h=m.d
if(h==null)h=i.a(h)
g=r.h(0,h).N()
f=A.ix(o,l)
f.a1(0,g)
f.j(0,"bookId",a8)
f=A.BW(f)
j.a(h)
s.a(f)
r.j(0,h,f)}s=a4.b
r=s.a
o=A.o(r).i("M<2>")
m=o.i("h.E")
l=A.B(new A.M(r,o),m)
j=l.length
i="owed-to:"+a8
h="held-by:"+a8
k=0
for(;k<l.length;l.length===j||(0,A.l)(l),++k){e=l[k]
if(!n.u(0,e.c)||e.b!==a7)continue
g=e.a
s.j(0,g,e.mi(a8))
g="forbook:"+g
d=r.h(0,g+":expense")
if(d!=null){f=e.ch===g
c=d}else{c=null
f=!1}if(f)s.j(0,c.a,c.e2(c.b,i,a8))
b=r.h(0,g+":income")
if(b!=null){f=e.ch===g
c=b}else{c=null
f=!1}if(f)s.j(0,c.a,c.e2(c.b,h,a8))
f=A.B(new A.M(r,o),m)
a=f.length
a0=g+":refund:"
g=e.ch===g
a1=0
for(;a1<f.length;f.length===a||(0,A.l)(f),++a1){a2=f[a1]
a3=a2.a
if(B.b.am(a3,a0)&&g)s.j(0,a3,a2.e2(a2.b,i,a8))}}s=a4.e
r=s.a
o=A.o(r).i("M<2>")
o=A.B(new A.M(r,o),o.i("h.E"))
m=o.length
s=s.$ti
l=s.i("af.K")
s=s.i("af.V")
k=0
for(;k<o.length;o.length===m||(0,A.l)(o),++k){a2=o[k]
j=a2.r
if(n.u(0,j)&&a2.b===a7){i=a2.a
l.a(i)
j=s.a(new A.bc(i,a8,a2.c,a2.d,a2.e,a2.f,j,a2.w,a2.x,a2.y,a2.z,a2.Q))
r.j(0,i,j)}}return new A.E()},
mz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r.a.h(0,a)
if(g==null)return"no account "+a
if(g.cx!=null)return g.b+" was replaced by a newer number; move that one"
if(g.d===B.x)return"a cash wallet stays in its book"
if(h.aG(b)==null)return"no book "+b
s=g.r
if(b===s)return g.b+" is already in that book"
r=h.bX(b)
q=t.N
p=A.kX([a],q)
for(o=h.cc(a),n=o.length,m=0;m<o.length;o.length===n||(0,A.l)(o),++m)p.m(0,o[m].a)
q=A.a4(q)
for(o=h.b.a,n=A.o(o).i("a1<2>"),l=new A.a1(o,o.r,o.e,n);l.n();){k=l.d
if(k.d===B.a_&&k.ay!=null){k=k.ay
k.toString
q.m(0,k)}}for(o=new A.a1(o,o.r,o.e,n),j=0;o.n();){n=o.d
if(!p.u(0,n.c))continue
l=n.b
if(l===b)return"transactions of "+g.b+" are already in that book"
if(l!==s)continue
if(h.eE(n.Q,r))++j
l=n.ch
k=n.a
i=l==="forbook:"+k
n=n.at
if(n===b)return"a transaction of it is paid for that book; put it back first"
if(n!=null&&!i)return"a transaction of it is linked to another book; put it back first"
if(i&&q.u(0,k))return"a transaction of it paid for another book is settled"}if(j>0){s=j===1?"transaction is":"transactions are"
return""+j+" "+s+" filed under categories that book does not use"}for(q=h.e.a,q=new A.a1(q,q.r,q.e,A.o(q).i("a1<2>"));q.n();){o=q.d
if(!p.u(0,o.r)||o.b!==s)continue
n=o.y
if(n===b)return"a rule files its transactions for that book"
if(n==null&&h.eE(o.e,r))return"a rule files its transactions under categories that book does not use"}for(s=h.w.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){q=s.d
if(p.u(0,q.c)&&h.eE(q.f,r))return"a GIRO from it is filed under categories that book does not use"}return null},
iK(a){var s,r,q,p=this,o=a.e,n=o.h(0,"id")
if(typeof n!="string")return p.p(a,B.h,"a removal names the account")
if(J.Y(o.h(0,"undo"),!0)){s=o.h(0,"account")
s.toString
r=A.BW(t.f.a(s).G(0,t.N,t.X))
if(r.a!==n||p.r.a.E(n))return p.p(a,B.v,"account "+n+" is here")
s=r.r
if(p.aG(s)==null)return p.p(a,B.f,"no book "+s)
q=A.eU(r)
if(q!=null)return p.p(a,B.h,"account not put back: "+q)
p.r.j(0,n,r)
return new A.E()}q=p.mN(n)
if(q!=null)return p.p(a,B.h,"account not removed: "+q)
p.r.a_(0,n)
return new A.E()},
mN(a){var s,r,q,p,o,n=this,m=n.r.a,l=m.h(0,a)
if(l==null)return"no account "+a
if(l.d===B.x)return"a cash wallet is never removed"
if(l.cx!=null||n.cc(a).length!==0)return"it is one of the numbers of a replaced card"
s=new A.p_()
r=n.fx
q=A.F(r)
p=new A.n(r,q.i("j(1)").a(new A.oO(a)),q.i("n<1>")).gq(0)
if(p>0)return"it has "+A.i(s.$2(p,"statement"))
r=n.b.a
q=A.o(r).i("M<2>")
o=new A.n(new A.M(r,q),q.i("j(h.E)").a(new A.oP(a)),q.i("n<h.E>")).gq(0)
if(o>0)return"it has "+A.i(s.$2(o,"transaction"))
if(B.a.M(n.fy,new A.oQ(a)))return"it has a bill from a statement notice"
s=n.e.a
if(new A.M(s,A.o(s).i("M<2>")).M(0,new A.oS(a)))return"a rule is for its transactions"
s=n.w.a
if(new A.M(s,A.o(s).i("M<2>")).M(0,new A.oT(a)))return"a GIRO is paid from it"
if(new A.M(m,A.o(m).i("M<2>")).M(0,new A.oU(a)))return"a loan is paid from it"
m=n.as.a
s=A.o(m).i("M<2>")
if(new A.dw(new A.M(m,s),s.i("h<bp>(h.E)").a(new A.oV()),s.i("dw<h.E,bp>")).M(0,new A.oW(a)))return"a planned item uses it"
m=n.id
if(new A.M(m,A.o(m).i("M<2>")).M(0,new A.oX(a)))return"a statement file is kept for it"
m=n.k2
if(new A.M(m,A.o(m).i("M<2>")).M(0,new A.oY(a)))return"a pick for a hidden last 4 names it"
m=n.to.a
if(new A.M(m,A.o(m).i("M<2>")).M(0,new A.oZ(a)))return"a balance you stated names it"
m=n.aD
if(m.w.E(a))return"it is marked source only"
m=m.b
if(new A.M(m,A.o(m).i("M<2>")).M(0,new A.oR(a)))return"a subscription is paid from it"
return null},
eE(a,b){var s,r=this.d.a.h(0,a)
A:{if(r!=null){s=r.b!==b
break A}s=!1
break A}return s},
bU(a,b){var s,r,q=this.ch
q.a_(0,a)
s=this.r.a.h(0,b)
if((s==null?null:s.cx!=null)!==!0)return b
r=this.aX(b)
q.j(0,a,b)
return r},
iI(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="startDate",c="startFrom",b=a0.e,a=b.h(0,"id")
a.toString
A.c(a)
s=f.r
r=s.a.h(0,a)
if(r==null)return f.p(a0,B.f,"no account "+a+" to change")
q=b.h(0,"driveFolder")
q.toString
p=t.f
o=t.N
n=t.X
m=A.DU(p.a(q).G(0,o,n))
q=r.ch
q=q==null?e:q.a
if(q==A.m(b.h(0,"baseFolderId"))){q=r.w
l=b.h(0,"baseStartDate")
l.toString
l=!q.J(0,A.ax(A.c(l)))
q=l}else q=!0
if(q)return f.d_(a0,a,r.b+"'s Drive folder")
if(b.h(0,d)==null)k=e
else{q=b.h(0,d)
q.toString
k=A.ax(A.c(q))}if(b.h(0,c)==null)j=e
else{q=b.h(0,c)
q.toString
j=A.ua(p.a(q).G(0,o,n))}q=r.ay
i=(q==null?e:q.a)===B.an
if(i!==(k!=null)||i!==(j!=null))return f.p(a0,B.h,"folder not linked: a start moves with the link only when it is from a folder year")
if(j!=null)q=j.a!==B.an||j.c!==m.b
else q=!1
if(q)return f.p(a0,B.h,"folder not linked: the start must name the new folder")
h=r.lE(m,k,j)
g=A.eU(h)
if(g!=null)return f.p(a0,B.h,"folder not linked: "+g)
s.j(0,a,h)
return new A.E()},
iV(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.c(q)
if(s.aG(q)!=null)return s.p(a,B.v,"book "+q+" already exists")
r=r.h(0,"kind")
r.toString
A.c(r)
if(r==="member"&&!s.p3.a.E(q))return s.p(a,B.f,"no household member "+q+" for a book")
s.f.j(0,q,r)
return new A.E()},
ku(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.e.h(0,"id")
f.toString
A.c(f)
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
s.j(0,f,new A.bc(p,o,n,m,l,!0,k,j,i,h,g,q))
return new A.E()},
kv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="memberId",c=a.e,b=c.h(0,"id")
b.toString
A.c(b)
s=e.e
r=s.a.h(0,b)
if(r==null)return e.p(a,B.f,"no rule "+b+" to change")
q=c.h(0,"pattern")
q.toString
p=B.b.I(A.c(q))
o=A.m(c.h(0,"categoryId"))
if(A.cQ(p).length===0)return e.p(a,B.f,"rule "+b+" needs a payee to match")
q=c.h(0,"type")
q.toString
n=A.ag(B.au,A.c(q),t.v_)
q=r.y
m=q==null
if(!m&&n!==B.n)return e.p(a,B.f,"rule "+b+" files expenses for another book")
l=r.w
k=e.fY(b,n,o,l,m?r.b:q)
if(k!=null)return e.p(a,B.f,k)
j=c.E(d)?A.m(c.h(0,d)):r.x
if(j!=null&&!e.p3.a.E(j))return e.p(a,B.f,"rule "+b+" names unknown member "+j)
m=A.hD(c.h(0,"appliesToNew"))
i=r.a
h=r.b
g=r.f
f=r.r
if(m==null)m=r.z
s.j(0,b,new A.bc(i,h,p,n,o,g,f,l,j,q,m,r.Q))
return new A.E()},
kx(a){var s=a.e.h(0,"id")
s.toString
A.c(s)
if(this.e.a_(0,s)==null)return this.p(a,B.f,"no rule "+s+" to remove")
this.ch.a_(0,"r:"+s)
return new A.E()},
ja(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="memberId",e="actionId",d=a.e,c=d.h(0,"movementId")
c.toString
A.c(c)
s=g.b
r=s.a.h(0,c)
if(r==null)return g.p(a,B.f,"no movement "+c+" to classify")
q=d.h(0,"type")
q.toString
p=A.ag(B.au,A.c(q),t.v_)
o=A.m(d.h(0,"categoryId"))
q=o==null
if(q)n=p===B.n||p===B.w||p===B.H
else n=!1
if(n)return g.p(a,B.h,"filing "+c+" as "+p.b+" needs a category")
n=!q
if(n&&!g.d.a.E(o))return g.p(a,B.f,"unknown category "+o)
if(n&&g.d.a.h(0,o).b!==g.bX(r.b))return g.p(a,B.f,o+" does not belong to book "+r.b)
if(g.fJ(r))return g.p(a,B.ae,c+" is paid for another book; undo that first (DUP-13)")
m=A.G7(p,r.e,g.r.a.h(0,r.c))
if(m!=null)return g.p(a,B.f,m)
if(!(p===B.n||p===B.w||p===B.H))n=r.ch!=null||r.ay!=null||r.cx!=null
else n=!1
if(n)return g.p(a,B.P,c+" is already paired or linked")
l=d.E(f)
k=A.m(d.h(0,f))
if(k!=null&&!g.p3.a.E(k))return g.p(a,B.f,"unknown member "+k)
n=r.dx
j=d.h(0,"baseVersion")
j.toString
if(n!==A.O(j)){s=r.Q
q=q?p.b:o
B.a.m(g.c,new A.W("conflict:"+a.a,B.I,c,"Changed since it was filed elsewhere: kept "+A.i(s)+", the other change chose "+q+"."))
return new A.bv()}i=l?r.hQ(k):r
s.j(0,c,i.hP(o,i.as,p,n+1))
h=A.m(d.h(0,"ruleId"))
if(h==null)h=typeof d.h(0,e)=="string"?"action:"+A.i(d.h(0,e)):null
s=g.p1
if(h==null)s.a_(0,c)
else{a.f.F()
s.j(0,c,new A.ky())}return new A.E()},
kY(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"movementId")
j.toString
A.c(j)
s=l.b
r=s.a.h(0,j)
if(r==null)return l.p(a,B.f,"no movement "+j+" to put back")
q=A.m(k.h(0,"categoryId"))
if(q!=null&&!l.d.a.E(q))return l.p(a,B.f,"unknown category "+q)
p=A.m(k.h(0,"memberId"))
if(p!=null&&!l.p3.a.E(p))return l.p(a,B.f,"unknown member "+p)
o=r.dx
n=k.h(0,"baseVersion")
n.toString
if(o!==A.O(n)){B.a.m(l.c,new A.W("conflict:"+a.a,B.I,j,"Changed since it was filed; "+j+" was left as it is."))
return new A.bv()}m=A.m(k.h(0,"type"))
n=m==null?null:A.ag(B.au,m,t.v_)
s.j(0,j,r.hP(q,p,n,o+1))
l.p1.a_(0,j)
return new A.E()},
ky(a){var s,r,q=a.e.h(0,"id")
q.toString
A.c(q)
s=this.e
r=s.a.h(0,q)
if(r==null)return this.p(a,B.f,"no rule "+q+" to take back")
s.j(0,q,new A.bc(r.a,r.b,r.c,r.d,r.e,!1,r.r,r.w,r.x,r.y,r.z,null))
return new A.E()},
jE(a){var s=a.e.h(0,"count")
if(!A.cu(s)||s<0)return this.p(a,B.h,"a target is a whole number of transactions, 0 or more")
return new A.E()},
k5(a){var s,r=a.e,q=r.h(0,"id")
q.toString
A.c(q)
r=r.h(0,"name")
r.toString
s=B.b.I(A.c(r))
r=this.p3
if(r.a.E(q))return this.p(a,B.v,"member "+q+" already exists")
if(s.length===0)return this.p(a,B.f,"member "+q+" needs a name")
r.j(0,q,new A.hc(q,s))
return new A.E()},
k6(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.c(o)
s=this.p3
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no member "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.b.I(A.c(p))
if(q.length===0)return this.p(a,B.f,"member "+o+" needs a name")
s.j(0,o,new A.hc(r.a,q))
return new A.E()},
iS(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"movementId")
k.toString
A.c(k)
s=A.m(l.h(0,"memberId"))
r=m.b
q=r.a.h(0,k)
if(q==null)return m.p(a,B.f,"no movement "+k+" to attribute")
p=s==null
if(!p&&!m.p3.a.E(s))return m.p(a,B.f,"unknown member "+s)
o=q.dx
n=l.h(0,"baseVersion")
n.toString
if(o!==A.O(n)){r=q.as
if(r==null)r="no one"
p=p?"no one":s
B.a.m(m.c,new A.W("conflict:"+a.a,B.I,k,"Changed on two devices: kept "+r+", the other device chose "+p+"."))
return new A.bv()}r.j(0,k,q.hQ(s).eY(o+1))
return new A.E()},
kA(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"primaryId")
l.toString
A.c(l)
m=m.h(0,"duplicateId")
m.toString
A.c(m)
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
break A}r=n.e5(m).ga5(0)
if(!r){r=m+" already has messages linked to it"
break A}r=!0
if(p.ch==null)if(p.ay==null){r=n.hE(p).a.l(0,$.L())
r=r!==0}if(r){r=m+" is already paired, linked or refunded"
break A}r=p.CW
if(r!=null){r=m+" is verified by a statement line"
break A}if(p.y.d&&!q.y.d){r=m+" is verified and "+l+" is not"
break A}r=n.dZ.u(0,A.on(l,m))
if(r){r="the owner said they are different payments"
break A}r=null
break A}if(r!=null)return n.p(a,B.v,m+" not linked to "+l+": "+r)
s.j(0,m,p.hT(l))
return new A.E()},
kD(a){var s,r,q=a.e,p=q.h(0,"primaryId")
p.toString
A.c(p)
q=q.h(0,"duplicateId")
q.toString
A.c(q)
s=this.b
r=s.a.h(0,q)
if(r==null||r.cx!==p)return this.p(a,B.f,q+" is not linked to "+p)
s.j(0,q,r.hT(null))
this.dZ.m(0,A.on(p,q))
return new A.E()},
j5(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"outflowId")
h.toString
A.c(h)
s=i.h(0,"inflowId")
s.toString
A.c(s)
r=j.b
q=r.a
p=q.h(0,h)
o=q.h(0,s)
q=p==null
if(q||o==null)return j.p(a,B.f,"no movement "+(q?h:s)+" to pair")
q=p.dx
n=i.h(0,"outflowVersion")
n.toString
if(q===A.O(n)){n=o.dx
m=i.h(0,"inflowVersion")
m.toString
m=n!==A.O(m)
n=m}else n=!0
if(n){B.a.m(j.c,new A.W("conflict:"+a.a,B.I,h,"Changed since the card bill payment was proposed; "+h+" and "+s+" were left as they are."))
return new A.bv()}l=new A.oe()
A:{n=j.r.a
m=n.h(0,p.c)
m=m==null?null:m.gaS()
m=m!==!0
if(m){n=h+" is not on a bank account"
break A}n=n.h(0,o.c)
n=(n==null?null:n.d)!==B.y
if(n){n=s+" is not on a card"
break A}n=p.e!==B.k||o.e!==B.m
if(n){n="the directions are not a payment out and a credit in"
break A}n=p.f.J(0,o.f)
if(!n){n="the amounts differ"
break A}n=!l.$1(p)||!l.$1(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.P,"not a card bill payment: "+n)
k="bill:"+h
r.j(0,h,p.dT(k,B.X,q+1))
r.j(0,s,o.dT(k,B.X,o.dx+1))
return new A.E()},
hE(a){var s=this.b.c.h(0,a.a)
return s==null?A.a3($.L(),a.f.b):s},
i2(a){var s,r,q,p,o,n,m,l=A.a3($.L(),a.f.b)
for(s=this.f6(a.b),r=J.R(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=a.a;s.n();){p=r.gt()
if(p.d===B.a_&&p.ay===q){p=p.f
o=p.b
n=l.b
if(o!==n)A.f(A.a8(n,o))
p=l.a.B(0,p.a)
l=new A.q(p,n)
m=B.e.h(0,n)
if(m==null)A.f(A.x(n,"currency","is not a supported currency"))
if((p.b<=0?0:Math.max(p.gv().b,0))>m)A.f(A.z(n+" allows "+A.i(m)+" decimal places",p.k(0),null))}}return l},
kj(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a3.e,a2=a1.h(0,"refundId")
a2.toString
A.c(a2)
s=a1.h(0,"sourceId")
s.toString
A.c(s)
r=a.b
q=r.a
p=q.h(0,a2)
o=q.h(0,s)
n=p==null
if(n||o==null)return a.p(a3,B.f,"no movement "+(n?a2:s)+" to link")
n=p.dx
m=a1.h(0,"refundVersion")
m.toString
if(n===A.O(m)){m=o.dx
l=a1.h(0,"sourceVersion")
l.toString
l=m!==A.O(l)
m=l}else m=!0
if(m){B.a.m(a.c,new A.W("conflict:"+a3.a,B.I,a2,"Changed since the refund was proposed; "+a2+" and "+s+" were left as they are."))
return new A.bv()}m=a1.h(0,"cancellation")
m.toString
A.cO(m)
l=o.d
if(l===B.a0){k=o.ch
k=k==null?a0:B.b.am(k,"forbook:")
j=k===!0}else j=!1
i=j?a.i2(o):a.hE(o)
A:{k=p.e
if(k!==B.m){l=a2+" is not money coming back"
break A}k=p.d
k=k!=null&&k!==B.H
if(k){l=a2+" is already filed"
break A}k=p.ay!=null||p.cx!=null
if(k){l=a2+" is already linked"
break A}k=o.cx
if(k!=null){l=s+" is another message about a purchase already here"
break A}l=l!==B.n&&!j||o.e!==B.k
if(l){l=s+" is not a purchase"
break A}if(j&&m){l="a purchase paid for another book is refunded, not cancelled"
break A}l=o.c
k=p.c
if(l!==k){l="they are on different accounts"
break A}l=o.f
k=p.f
if(l.b!==k.b){l="they are in different currencies"
break A}h=i.B(0,k).a.l(0,l.a)
if(h>0){l="it would refund more than the purchase ("+l.k(0)+", "+i.k(0)+" already refunded)"
break A}h=!1
if(m)if(k.J(0,l)){l=i.a.l(0,$.L())
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
r.j(0,a2,p.fj(a0,l,m,B.a_,n+1))
r.j(0,a2,q.h(0,a2).ls(s))
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
r.j(0,a2,A.bQ(q,n,k,l,d,c,a0,B.m,h,a2,s,a0,a0,m,a0,e,a0,new A.dQ("operation",a3.a,a3.f,f.d),a0,a0,B.H,1))
return new A.E()}b=m?"cancel:"+s:a0
r.j(0,a2,p.lG(s,b,B.H,n+1))
if(m)r.j(0,s,o.lA(b,o.dx+1))
return new A.E()},
kW(a){var s,r,q,p,o,n,m,l,k,j=this,i=" is not on a bank account",h=a.e,g=h.h(0,"outflowId")
g.toString
A.c(g)
s=h.h(0,"inflowId")
s.toString
A.c(s)
r=j.b
q=r.a
p=q.h(0,g)
o=q.h(0,s)
q=p==null
if(q||o==null)return j.p(a,B.f,"no movement "+(q?g:s)+" to pair")
q=p.dx
n=h.h(0,"outflowVersion")
n.toString
if(q===A.O(n)){n=o.dx
m=h.h(0,"inflowVersion")
m.toString
m=n!==A.O(m)
n=m}else n=!0
if(n){B.a.m(j.c,new A.W("conflict:"+a.a,B.I,g,"Changed since the transfer was proposed; "+g+" and "+s+" were left as they are."))
return new A.bv()}l=new A.oB(j)
A:{n=p.e!==B.k||o.e!==B.m
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
break A}n=!A.Cb(p)||!A.Cb(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.P,"not a transfer: "+n)
k="transfer:"+g
r.j(0,g,p.dT(k,B.M,q+1))
r.j(0,s,o.dT(k,B.M,o.dx+1))
return new A.E()},
k0(a){var s,r,q,p=this,o=a.e,n=o.h(0,"movementId")
n.toString
A.c(n)
s=p.b
r=s.a.h(0,n)
if(r==null)return p.p(a,B.f,"no movement "+n+" to mark as a transfer")
q=r.dx
o=o.h(0,"baseVersion")
o.toString
if(q!==A.O(o)){B.a.m(p.c,new A.W("conflict:"+a.a,B.I,n,"Changed since it was marked as a transfer elsewhere; "+n+" was left as it is."))
return new A.bv()}A:{o=p.r.a.h(0,r.c)
if(o==null)o=null
else o=o.gaS()||o.d===B.a7
o=o!==!0
if(o){o=n+" is not on a bank account"
break A}o=r.d
if(o!=null){o=n+" is already filed as "+o.b
break A}o=A.Cb(r)
if(!o){o=n+" is already paired or linked"
break A}o=null
break A}if(o!=null)return p.p(a,B.P,"not marked as a transfer: "+o)
s.j(0,n,r.lC(B.M,q+1))
return new A.E()},
kZ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a5.e,a4=a3.h(0,"movementId")
a4.toString
A.c(a4)
s=a2.b
r=s.a.h(0,a4)
if(r==null)return a2.p(a5,B.f,"no movement "+a4+" to unmark")
q=r.dx
a3=a3.h(0,"baseVersion")
a3.toString
if(q!==A.O(a3)){B.a.m(a2.c,new A.W("conflict:"+a5.a,B.I,a4,"Changed since it was put back to file elsewhere; "+a4+" was left as it is."))
return new A.bv()}A:{a3=r.d
if(a3!==B.M){a3=a3==null?"not filed":"filed as "+a3.b
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
s.j(0,a4,A.bQ(o,m,k,p,g,e,d,n,j,a3,c,f,r.db,l,b,h,a1,i,a0,a,null,q).eY(q+1))
return new A.E()},
jG(a){var s,r,q=this,p=a.e.h(0,"movementId")
p.toString
A.c(p)
s=q.b.a.h(0,p)
if(s==null)return q.p(a,B.f,"no movement "+p+" to flag")
r=s.cx
if(r!=null)return q.p(a,B.f,p+" is another message about "+r+"; flag that one")
q.rx.aI(p,new A.of(p,a))
return new A.E()},
jH(a){var s,r,q,p=a.e,o=p.h(0,"movementId")
o.toString
A.c(o)
p=p.h(0,"outcome")
p.toString
A.c(p)
s=this.rx
r=s.a.h(0,o)
q=p==="mine"
if(!q&&p!=="reported")return this.p(a,B.f,"a flag ends as mine or reported, not "+p)
p=r==null
if(p&&q)return new A.E()
if(p)return this.p(a,B.f,"no open flag on "+o)
if(q)s.a_(0,o)
else if(r.d==null)s.j(0,o,new A.ew(o,r.b,r.c,a.f))
return new A.E()},
jQ(a){var s,r=a.e.h(0,"event")
r.toString
s=A.DW(t.f.a(r).G(0,t.N,t.X))
r=this.go
if(B.a.M(r,new A.oh(s)))return this.p(a,B.v,"message "+s.a+" is already held")
B.a.m(r,s)
return new A.E()},
jS(a){var s,r,q=a.e.h(0,"event")
q.toString
s=A.DW(t.f.a(q).G(0,t.N,t.X))
q=this.k3
r=s.a
if(q.E(r))return this.p(a,B.v,"message "+r+" is already held as suspicious")
q.j(0,r,s)
return new A.E()},
kS(a){var s=this,r=a.e.h(0,"eventKey")
r.toString
A.c(r)
if(!s.k3.E(r)||s.k4.u(0,r))return s.p(a,B.f,"no suspicious message "+r+" waiting to be checked")
s.k4.m(0,r)
return new A.E()},
jR(a){var s,r,q,p,o,n,m=a.e,l=m.h(0,"eventKey")
l.toString
A.c(l)
s=this.ok
if(B.a.M(s,new A.oi(l)))return this.p(a,B.v,"reminder "+l+" is already listed")
r=A.m(m.h(0,"amount"))
q=m.h(0,"sender")
q.toString
A.c(q)
p=A.m(m.h(0,"accountAlias"))
if(r==null)o=null
else{o=m.h(0,"currency")
o.toString
A.c(o)
o=A.a3(A.ad(r),o)}n=m.h(0,"receivedAtUtc")
n.toString
A.aF(A.c1(A.c(n)).F(),B.q)
if(m.h(0,"dueOn")==null)n=null
else{n=m.h(0,"dueOn")
n.toString
n=A.ax(A.c(n))}B.a.m(s,new A.fo(l,q,p,o,n,J.Y(m.h(0,"failed"),!0)))
return new A.E()},
kL(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"fileId")
j.toString
A.c(j)
s=k.h(0,"accountId")
s.toString
A.c(s)
r=k.h(0,"name")
r.toString
A.c(r)
q=k.h(0,"size")
q.toString
q=B.G.b0(A.vo(q))
p=k.h(0,"receivedAtUtc")
p.toString
p=A.c1(A.c(p)).F()
o=k.h(0,"source")
o.toString
n=new A.e_(j,s,r,q,p,A.c(o),null)
q=l.id
if(q.E(j))return l.p(a,B.v,"statement file "+j+" is already kept")
p=A.D("\\d{9,}",!0,!1)
if(p.b.test(r))return l.p(a,B.h,"a statement file name may not hold a full number")
if(!l.r.a.E(s))return l.p(a,B.f,"statement file "+j+" is for an unregistered account")
m=l.bU("f:"+j,s)
q.j(0,j,m===s?n:n.hl(m))
return new A.E()},
kN(a){var s,r,q,p,o=a.e,n=o.h(0,"fileId")
n.toString
A.c(n)
s=this.id
r=s.h(0,n)
if(r==null)return this.p(a,B.f,"no statement file "+n)
q=o.h(0,"attempt")
q.toString
B.G.b0(A.vo(q))
q=o.h(0,"outcome")
q.toString
A.c(q)
p=A.m(o.h(0,"reason"))
A.m(o.h(0,"statementId"))
A.m(o.h(0,"readers"))
A.m(o.h(0,"reader"))
s.j(0,n,new A.e_(r.a,r.b,r.c,r.d,r.e,r.f,new A.ub(q,p)))
return new A.E()},
kr(a){var s,r,q,p,o=a.e,n=o.h(0,"id")
n.toString
A.c(n)
s=this.c
if(B.a.M(s,new A.ou(n)))return new A.E()
r=o.h(0,"reason")
r.toString
r=A.ag(B.ki,A.c(r),t.CW)
q=o.h(0,"subjectId")
q.toString
A.c(q)
p=o.h(0,"explanation")
p.toString
B.a.m(s,new A.W(n,r,q,A.c(p)))
return new A.E()},
ks(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"itemId")
j.toString
A.c(j)
if(!B.a.M(B.jq,B.b.gib(j)))return l.p(a,B.f,"only a missing statement or a reminder can be dismissed")
if(B.b.am(j,"missing-statement:")){s=k.h(0,"reason")
if(s!=null&&!J.Y(s,"noActivity"))return l.p(a,B.h,"a missing statement is dismissed for no activity only")
r=B.b.ae(j,18)
q=B.b.f2(r,":")
p=A.ax(B.b.ae(r,q+1))
o=A.m(k.h(0,"through"))
n=A.aF(a.f,B.q)
if(o==null)m=n.l(0,p)<0?p:n
else m=A.ax(o)
if(q<=0||m.l(0,p)<0)return l.p(a,B.h,"no stretch "+j+" up to "+m.k(0)+" to dismiss")
k=l.RG
B.a.m(k,new A.fY(l.bU("d:"+k.length,B.b.X(r,0,q)),p,m))}l.R8.m(0,j)
return new A.E()},
kt(a){var s=a.e,r=s.h(0,"itemId"),q=s.h(0,"until")
if(typeof r!="string"||!B.b.am(r,"missing-statement:")||typeof q!="string")return this.p(a,B.h,"only a missing statement is snoozed, to a day")
this.y1.j(0,r,A.ax(q))
return new A.E()},
kk(a){var s=a.a
if(!B.b.am(s,"reminder:"))return this.p(a,B.h,"not a reminder key")
this.xr.m(0,s)
return new A.E()},
j_(a){var s=a.e,r=s.h(0,"on"),q=s.h(0,"hour"),p=s.h(0,"minute")
if(!A.ef(r)||!A.cu(q)||!A.cu(p)||q<0||q>23||p<0||p>59)return this.p(a,B.h,"a brief time is on or off, an hour and a minute")
return new A.E()},
iZ(a){var s=a.e.h(0,"date")
if(typeof s!="string"||a.a!=="brief:"+s)return this.p(a,B.h,"not a brief key")
this.m3.m(0,s)
return new A.E()},
j3(a){var s=a.e.h(0,"calendarId")
if(typeof s!="string"||s.length===0)return this.p(a,B.h,"no calendar id")
return new A.E()},
j2(a){var s=a.a
if(!B.b.am(s,"calendar-event:"))return this.p(a,B.h,"not a calendar event key")
this.m4.m(0,s)
return new A.E()},
j4(a){var s,r,q=a.e,p=q.h(0,"subjectId"),o=q.h(0,"eventId"),n=q.h(0,"hash"),m=q.h(0,"n"),l=q.h(0,"removed"),k=A.ay(q.h(0,"date"))
if(typeof p!="string"||typeof o!="string"||typeof n!="string"||!A.cu(m)||!A.ef(l)||k==null)return this.p(a,B.h,"a calendar write names its subject, event, date and count")
if(a.a!=="calendar-sync:"+p+":"+A.i(m))return this.p(a,B.h,"not a calendar key")
s=this.m5
r=s.h(0,p)
r=r==null?null:r.a[3]
if((r==null?0:r)>=m)return new A.E()
s.j(0,p,new A.jo([k,o,n,m,l]))
return new A.E()},
kl(a){if(!A.ef(a.e.h(0,"on")))return this.p(a,B.h,"the reminders switch is on or off")
return new A.E()},
iU(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"billId")
k.toString
A.c(k)
s=A.m(l.h(0,"mark"))
l=s==null
r=l?null:A.C4(B.jj,t.d6).h(0,s)
if(!l&&r==null)return m.p(a,B.h,"no bill mark "+s)
q=A.CL(m,null)
p=A.F(q)
o=A.aO(new A.n(q,p.i("j(1)").a(new A.oc(k)),p.i("n<1>")),t.ok)
if(o==null)return m.p(a,B.f,"no bill "+k)
n=o.dA(A.aF(a.f,B.q))
if(!A.LU(n,r)){l=l?"clear":s
return m.p(a,B.f,"a "+n.b+" bill cannot be marked "+l)}l=m.x2
if(r==null)l.a_(0,k)
else l.j(0,k,r)
return new A.E()},
k7(a){var s,r,q,p,o=this,n=null,m=a.e,l=m.h(0,"month")
l.toString
A.c(l)
m=m.h(0,"openItems")
m.toString
A.O(m)
s=$.Dc().aj(l)
if(s==null||m<0)return o.p(a,B.h,"no month "+l+" to close")
r=s.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
q=A.X(q,n,n)
if(2>=r.length)return A.a(r,2)
r=r[2]
r.toString
p=new A.A(q,A.X(r,n,n)+1,1).aC(-1)
if(A.aF(a.f,B.q).l(0,p)<=0)return o.p(a,B.f,"a month closes only after it ends")
r=o.ry
if(r.E(l))return o.p(a,B.v,l+" is already closed")
r.j(0,l,m)
return new A.E()},
l_(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"holdingId")
h.toString
A.c(h)
s=i.h(0,"name")
s.toString
A.c(s)
r=i.h(0,"kind")
r.toString
r=A.ag(B.ka,A.c(r),t.xN)
q=i.h(0,"bookId")
q.toString
A.c(q)
p=i.h(0,"value")
p.toString
p=A.aP(t.f.a(p).G(0,t.N,t.X))
o=i.h(0,"asOf")
o.toString
o=A.ax(A.c(o))
n=new A.eK(h,s,r,q,p,o,A.m(i.h(0,"accountId")))
for(i=j.to,s=i.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>")),m=null;s.n();){l=s.d
if(l.a===h)r=m==null||l.f.l(0,m.f)>0
else r=!1
if(r)m=l}s=j.gcE()
k=A.NM(n,j.r,new A.au(s,A.o(s).i("au<1>")),m,A.aF(a.f,B.q))
if(k!=null)return j.p(a,B.h,k)
i.j(0,new A.p(h,o),n)
return new A.E()},
kp(a){var s,r,q,p,o,n=this,m=null,l=A.aF(a.f,B.q),k=A.IW(a.e,l),j=k.b,i=$.Dc().aj(j),h=i!=null
if(h){s=i.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.X(r,m,m)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
q=new A.A(r,A.X(s,m,m)+1,1).aC(-1)}else{s=$.GS()
q=s.b.test(j)?new A.A(A.X(j,m,m),13,1).aC(-1):m}if(q==null||n.aG(k.a)==null||k.e.length===0)return n.p(a,B.h,"no report "+k.a+" "+j+" to keep")
if(l.l(0,q)<=0)return n.p(a,B.f,"a report is kept once its period ends")
if(h){h=q.a
h=A.Gk(n,k.a,q.b,l,h).a===B.b7}else h=!1
if(h)return n.p(a,B.f,"a month is kept once it is final or finalised")
h=n.x1
s=A.F(h)
p=A.C6(new A.n(h,s.i("j(1)").a(new A.ot(k)),s.i("n<1>")),t.io)
s=k.c
r=p==null
o=r?m:p.c
if(s!==(o==null?0:o)+1)return n.p(a,B.v,"version "+s+" of "+j+" is out of turn")
if(!r&&A.IY(p.e,k.e))return n.p(a,B.v,j+" has not changed since version "+p.c)
B.a.m(h,k)
return new A.E()},
kM(a){var s,r,q,p=this,o=a.e,n=o.h(0,"fileId")
n.toString
A.c(n)
o=o.h(0,"accountId")
o.toString
A.c(o)
s=p.id
r=s.h(0,n)
if(r==null)return p.p(a,B.f,"no statement file "+n)
if(!p.r.a.E(o))return p.p(a,B.f,"no account "+o)
q=r.r
if(q==null)q=null
else{q=q.a
q=q==="read"||q==="alreadyRead"}if(q===!0)return p.p(a,B.v,"statement file "+n+" is already read for "+r.b)
s.j(0,n,r.hl(p.bU("f:"+n,o)))
return new A.E()},
jW(a){var s,r,q,p,o,n,m,l=this,k={},j=a.e
k.a=null
s=j.h(0,"institution")
r=j.h(0,"last4")
q=j.h(0,"accountId")
k.a=s
if(typeof s!="string"||typeof r!="string"||typeof q!="string")return l.p(a,B.h,"a last 4 pick needs its bank, last 4 and account")
p=A.D("\\d+$",!0,!1).aj(r)
if(p==null)o=null
else{p=p.b
if(0>=p.length)return A.a(p,0)
o=p[0]}p=A.D("^\\d{4}$",!0,!1)
if(p.b.test(r)||o==null||o.length<2)return l.p(a,B.h,"a pick is remembered only for a partly hidden last 4")
p=l.r.a
n=p.h(0,q)==null
if(n)m=B.bQ
else{p=p.h(0,l.aX(q))
p.toString
p=A.b([p],t.Q)
B.a.a1(p,l.cc(l.aX(q)))
m=p}if(n||!B.a.M(m,new A.ol(k,o)))return l.p(a,B.f,"no account "+q+" of "+k.a+" ending in "+o)
p=l.k2
p.a_(0,k.a+"|"+r)
k=k.a
p.j(0,k+"|"+r,new A.d0(k,r,l.bU("p:"+k+"|"+r,q),a.a))
return new A.E()},
jV(a){var s=a.e.h(0,"pickKey"),r=this.k2,q=A.o(r).i("ac<1,2>"),p=A.aO(new A.n(new A.ac(r,q),q.i("j(h.E)").a(new A.ok(s)),q.i("n<h.E>")),t.ub)
if(p==null)return this.p(a,B.v,"no remembered pick "+A.i(s))
q=p.a
r.a_(0,q)
this.ch.a_(0,"p:"+q)
return new A.E()},
kB(a){var s,r=a.e
if(!B.mn.lm(r.gah())||!B.mm.u(0,r.h(0,"action")))return this.p(a,B.h,"a secret audit may hold only which secret, what and when")
s=r.h(0,"secretId")
s.toString
A.c(s)
s=r.h(0,"action")
s.toString
A.c(s)
s=r.h(0,"atUtc")
s.toString
A.c1(A.c(s)).F()
B.a.m(this.k1,new A.ls())
return new A.E()},
jZ(a){var s,r,q=this,p="fromEvent",o=A.LK(q,q.a7,a)
if(o!=null)return q.p(a,B.h,o)
s=a.e.h(0,"fields")
if(a.d==="life.set"&&t.f.b(s)&&typeof s.h(0,p)=="string"){r=s.h(0,p)
r.toString
q.hk.m(0,A.c(r))}return new A.E()},
kO(a){var s,r,q,p,o,n,m,l,k=this,j=a.e,i=j.h(0,"statementId"),h=j.h(0,"loans"),g=typeof i=="string"?B.a.f_(k.fx,new A.ow(i)):-1
if(g<0||!t.j.b(h))return k.p(a,B.h,"no statement "+A.i(i)+" to give its loans")
s=null
try{r=A.b([],t.Ev)
for(j=J.R(h),p=t.f,o=t.N,n=t.X;j.n();){q=j.gt()
m=q
m.toString
J.bV(r,A.Et(p.a(m).G(0,o,n)))}s=r}catch(l){r=k.p(a,B.h,"the loans of "+A.i(i)+" do not read")
return r}r=k.fx
if(!(g>=0&&g<r.length))return A.a(r,g)
j=r[g]
B.a.j(r,g,new A.c9(j.a,j.b,j.c,j.d,j.e,j.f,j.r,j.w,j.x,j.y,j.z,t.nd.a(s)))
return new A.E()},
kg(a){var s,r=a.e.h(0,"keys")
if(t.j.b(r)){s=J.an(r)
s=s.ga5(r)||s.M(r,new A.oo())}else s=!0
if(s)return this.p(a,B.h,"a rejected proposal names its events by their hashes")
this.hk.a1(0,J.dh(r,t.N))
return new A.E()},
fJ(a){var s,r=a.d,q=!0
if(!(r===B.a0&&a.at!=null))if(!(r===B.b3&&a.at!=null))if(!(r===B.w&&a.ch!=null&&a.at!=null))if(!(r===B.n&&a.ch!=null&&a.at!=null)){if(r===B.a_){s=a.ch
s=s==null?null:B.b.am(s,"forbook:")
s=s===!0}else s=!1
if(!s)r=r===B.H&&a.at!=null||B.b.am(a.c,"owed-to-person:")
else r=q}else r=q
else r=q
else r=q
else r=q
return r},
jK(a){var s,r,q=a.ch
if(q==null||!B.b.am(q,"forbook:"))return null
if(a.a===B.b.ae(q,8)){s=this.b.a
r=s.h(0,q+":expense")
s=r==null?s.h(0,q+":income"):r}else s=null
return s},
ez(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=a2.e,a1=a0.h(0,"movementId")
a1.toString
A.c(a1)
s=b.b
r=s.a
q=r.h(0,a1)
p=a0.h(0,"bookId")
p.toString
A.c(p)
o=b.d.a.h(0,a0.h(0,"categoryId"))
if(q==null)return b.p(a2,B.f,"no movement "+a1+" to pay for another book")
n=q.e
m=n===B.m
if(q.cx==null){l=q.c
l=B.b.am(l,"owed-to")||B.b.am(l,"held-by")}else l=!0
if(l)return b.p(a2,B.f,"only money paid out of or into an account is for another book")
if(b.aG(p)==null||p===q.b)return b.p(a2,B.f,"pick another book than "+q.b)
if(o==null||o.b!==b.bX(p)||A.hM(o)!==m)return b.p(a2,B.f,m?"money received is filed under an income category of "+p+"'s":u.s+p+"'s")
l=q.d
if(l!=null)k=l!==(m?B.w:B.n)
else k=!1
if(k)return b.p(a2,B.f,a1+" is already filed as "+l.b+"; put it back first")
l=q.dx
k=a0.h(0,"baseVersion")
k.toString
if(l!==A.O(k)){B.a.m(b.c,new A.W("conflict:"+a2.a,B.I,a1,"Changed since it was marked as paid for "+p+"; "+a1+" was left as it is."))
return new A.bv()}j="forbook:"+a1
k=m?"income":"expense"
i=j+":"+k
if(r.E(i))return b.p(a2,B.v,"movement "+i+" already exists")
r=m?B.b3:B.a0
s.j(0,a1,q.fj(a,p,j,r,l+1))
r=q.b
l=m?"held-by:"+r:"owed-to:"+r
k=m?B.w:B.n
h=q.f
g=q.r
f=q.w
e=q.x
d=q.y
c=q.z
s.j(0,i,A.bQ(l,h,f,p,o.a,r,a,n,e,i,a,a,a,g,j,c,a,new A.dQ("operation",a2.a,a2.f,d.d),a,a,k,1))
b.p1.a_(0,a1)
return new A.E()},
jJ(a){var s,r,q,p,o,n,m=this,l=null,k=a.e,j=k.h(0,"movementId")
j.toString
A.c(j)
s=m.b
r=s.a
q=r.h(0,j)
p=q==null
o=p?l:q.ch
if(p||o==null||o!=="forbook:"+j)return m.p(a,B.f,j+" is not paid for another book")
if(new A.M(r,A.o(r).i("M<2>")).M(0,new A.og(j)))return m.p(a,B.ae,"the advance on "+j+" has a settlement; it stays")
r=m.aD
p=o+":expense"
if(r.f1(p)!=null||r.f1(o+":income")!=null)return m.p(a,B.ae,"an invoice counts "+j+"'s other side; it stays")
r=q.dx
n=k.h(0,"baseVersion")
n.toString
if(r!==A.O(n)){B.a.m(m.c,new A.W("conflict:"+a.a,B.I,j,"Changed since; "+j+" was left paid for "+A.i(q.at)+"."))
return new A.bv()}s.a_(0,p)
s.a_(0,o+":income")
s.j(0,j,q.fj(l,l,l,l,r+1))
return new A.E()},
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=a.e,b=c.h(0,"id")
b.toString
A.c(b)
s=c.h(0,"bookId")
s.toString
A.c(s)
r=c.h(0,"memberId")
r.toString
A.c(r)
q=e.d.a.h(0,c.h(0,"categoryId"))
p=A.cc(c.h(0,"date"))
if(e.aG(s)==null||s==="personal")return e.p(a,B.f,"a person's payment is for a company or the property")
if(!e.p3.a.E(r))return e.p(a,B.f,"no household member "+r)
if(q==null||q.b!==e.bX(s)||A.hM(q))return e.p(a,B.f,u.s+s+"'s")
if(p==null)return e.p(a,B.h,"a payment needs its date")
o=c.h(0,"amount")
o.toString
A.c(o)
n=c.h(0,"currency")
n.toString
A.c(n)
m=A.a3(A.ad(o),n)
if(m.a.a.ga9(0)<=0)return e.p(a,B.h,"an amount is more than zero")
l=A.m(c.h(0,"invoiceId"))
o=l!=null
if(o){n=e.aD.c.h(0,l)
n=(n==null?d:n.b)!==s}else n=!1
if(n)return e.p(a,B.f,"invoice "+l+" is not in "+s+"'s book")
if(c.h(0,"sgd")!=null){n=c.h(0,"sgd")
n.toString
k=A.a3(A.ad(A.c(n)),"SGD")
j=A.dt(A.i(c.h(0,"rate")))
i=A.cc(c.h(0,"rateDate"))
if(j==null||j.l(0,$.L())<=0||i==null||k.a.a.ga9(0)<=0||m.b==="SGD")return e.p(a,B.h,"an SGD amount comes with its rate and date (LED-09)")
h=new A.lz()}else h=d
g="person:"+b
b=A.m(c.h(0,"payee"))
b=b==null?d:B.b.I(b)
f=e.dC(a,A.b([A.bQ("owed-to-person:"+r,m,p,s,q.a,d,r,B.k,p,g,d,d,d,d,d,b,d,new A.dQ("manual",a.a,a.f,!1),d,d,B.n,1)],t.A))
if(f instanceof A.E){if(h!=null)e.aD.y.j(0,g,h)
if(o)J.bV(e.aD.d.aI(l,new A.od()),g)}return f},
jU(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="invoiceId",f="baseVersion",e="movement.forBook",d=a0.e,c=h.aD,b=c.c.h(0,d.h(0,g)),a=d.h(0,"movementId")
a.toString
A.c(a)
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
l=r?B.m:B.k
if(q.e!==l)return h.p(a0,B.f,r?"rent comes in":"a bill is paid out")
k=r?B.w:B.n
j=b.r
r=!1
if(j!=null)if(!h.fJ(q)){r=q.d
r=r==null||r===k}if(r){r=q.dx
o=d.h(0,f)
o.toString
if(r!==A.O(o)){B.a.m(h.c,new A.W("conflict:"+a0.a,B.I,a,"Changed since; "+a+" was not linked to invoice "+b.a+"."))
return new A.bv()}s.j(0,a,q.lD(j,k,r+1))
h.p1.a_(0,a)}else{s=q.d
if(s!=null&&s!==k)return h.p(a0,B.f,a+" is filed as "+s.b)}n=a}else if(m!=null&&m.b===p)n=m.a
else{s=b.y!=null
if(s)r=q.e!==B.m||b.r==null
else r=!1
if(r)return h.p(a0,B.f,"rent is money received, filed as the property's income")
else{j=b.r
if(s){i=h.ez(new A.aj(a0.a,a0.b,a0.c,e,A.S(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.E))return i
n=o+":income"}else{if(j==null)return h.p(a0,B.f,"give invoice "+b.a+" a category first")
i=h.ez(new A.aj(a0.a,a0.b,a0.c,e,A.S(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.E))return i}}}if(c.f1(n)!=null)return h.p(a0,B.v,a+" is already linked to an invoice")
J.bV(c.d.aI(b.a,new A.oj()),n)
return new A.E()},
p(a,b,c){var s=a.a
B.a.m(this.c,new A.W("rejected:"+s,b,s,c))
return new A.tS()}}
A.oF.prototype={
$1(a){var s,r,q,p="[^A-Z0-9]"
t.p0.a(a)
s=A.D(p,!0,!1)
s=A.ao(a.b.toUpperCase(),s,"")
r=this.a
q=A.D(p,!0,!1)
if(s!==A.ao(r.toUpperCase(),q,"")){s=A.D(p,!0,!1)
s=A.ao(a.a.toUpperCase(),s,"")
q=A.D(p,!0,!1)
s=s===A.ao(r.toUpperCase(),q,"")}else s=!0
return s},
$S:63}
A.os.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.oD.prototype={
$2(a,b){var s,r,q=t.b
q.a(a)
q.a(b)
q=b.cy
q.toString
s=a.cy
s.toString
r=q.l(0,s)
return r!==0?r:B.b.l(a.a,b.a)},
$S:8}
A.oE.prototype={
$1(a){return!this.a.b.a.E("mv-"+B.b.X(A.vD(B.aH.O(B.F.O(t.Ap.a(a).a)).a),0,20))},
$S:47}
A.p1.prototype={
$1(a){return!this.a.k4.u(0,t.Ap.a(a).a)},
$S:47}
A.p0.prototype={
$1(a){return t.v.a(a).b===this.a.b},
$S:9}
A.oC.prototype={
$1(a){var s
t.W.a(a)
if(a.cx!=null)return!1
s=this.a.r.a.h(0,a.c)
return s==null||a.x.l(0,s.w)>=0},
$S:1}
A.oN.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(this.a||a.cx==null){r=this.b
if(r==null||a.b===r){s=this.c
s=s==null||a.c===s}}return s},
$S:1}
A.oM.prototype={
$1(a){return t.W.a(a).cx===this.a},
$S:1}
A.oa.prototype={
$1(a){return this.a.b.a.E(t.W.a(a).a)},
$S:1}
A.ob.prototype={
$1(a){return t.W.a(a).a},
$S:20}
A.om.prototype={
$1(a){return a==null?"no note":'the note "'+a+'"'},
$S:50}
A.oA.prototype={
$1(a){return t.v.a(a).a===this.a.a},
$S:9}
A.oy.prototype={
$1(a){return t.dh.a(a).a===this.a.a},
$S:23}
A.oz.prototype={
$1(a){var s,r,q
t.dh.a(a)
s=this.a
if(a.b===s.b){r=a.d
if(r==null)r=a.c
q=s.d
s=Math.abs(r.a8(q==null?s.c:q))<=20}else s=!1
return s},
$S:23}
A.ox.prototype={
$1(a){return t.dh.a(a).a===this.a},
$S:23}
A.oG.prototype={
$1(a){return!A.E7(t.b.a(a).d,this.a)},
$S:2}
A.oH.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:9}
A.oI.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:64}
A.oJ.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.oK.prototype={
$1(a){return t.to.a(a)},
$S:65}
A.oL.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:48}
A.o9.prototype={
$1(a){t.v.a(a)
return a.a===this.a.d&&a.b===this.b},
$S:9}
A.or.prototype={
$2(a,b){var s,r,q,p
if(!this.b.u(0,b))return null
s=this.a
r=s.ch
q=r.h(0,a)
if(q==null)q=b
p=s.aX(q)
if(p===q)r.a_(0,a)
else r.j(0,a,q)
return p===b?null:p},
$S:173}
A.op.prototype={
$1(a){return this.a.u(0,t.W.a(a).c)},
$S:1}
A.oq.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.p_.prototype={
$2(a,b){var s=a===1?"":"s"
return""+a+" "+b+s},
$S:183}
A.oO.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:9}
A.oP.prototype={
$1(a){return t.W.a(a).c===this.a},
$S:1}
A.oQ.prototype={
$1(a){return t.dh.a(a).b===this.a},
$S:23}
A.oS.prototype={
$1(a){return t.R.a(a).r===this.a},
$S:15}
A.oT.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:64}
A.oU.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.oV.prototype={
$1(a){return t.to.a(a)},
$S:65}
A.oW.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:48}
A.oX.prototype={
$1(a){return t.A9.a(a).b===this.a},
$S:187}
A.oY.prototype={
$1(a){return t.ch.a(a).c===this.a},
$S:193}
A.oZ.prototype={
$1(a){return t.AD.a(a).r===this.a},
$S:194}
A.oR.prototype={
$1(a){return t.tD.a(a).z===this.a},
$S:225}
A.oe.prototype={
$1(a){var s=a.d
return(s==null||s===B.X)&&a.ch==null&&a.cx==null},
$S:1}
A.oB.prototype={
$1(a){var s=this.a.r.a.h(0,a.c)
if(s==null)s=null
else s=s.gaS()||s.d===B.a7
return s===!0},
$S:1}
A.of.prototype={
$0(){var s=this.b
return new A.ew(this.a,s.f,s.a,null)},
$S:205}
A.oh.prototype={
$1(a){return t.Ap.a(a).a===this.a.a},
$S:47}
A.oi.prototype={
$1(a){return t.pL.a(a).a===this.a},
$S:270}
A.ou.prototype={
$1(a){return t.k.a(a).a===this.a},
$S:37}
A.oc.prototype={
$1(a){return t.ok.a(a).a===this.a},
$S:222}
A.ot.prototype={
$1(a){var s
t.io.a(a)
s=this.a
return a.a===s.a&&a.b===s.b},
$S:237}
A.ov.prototype={
$1(a){return A.cO(a)},
$S:240}
A.ol.prototype={
$1(a){t.b.a(a)
return A.hL(a.c)===this.a.a&&B.b.bH(a.b,this.b)},
$S:2}
A.ok.prototype={
$1(a){return t.ub.a(a).b.d===this.a},
$S:246}
A.ow.prototype={
$1(a){return t.v.a(a).a===this.a},
$S:9}
A.oo.prototype={
$1(a){var s
if(typeof a=="string"){s=$.I7()
s=!s.b.test(a)}else s=!0
return s},
$S:247}
A.og.prototype={
$1(a){t.W.a(a)
return a.d===B.a_&&a.ay===this.a},
$S:1}
A.od.prototype={
$0(){return A.b([],t.s)},
$S:68}
A.oj.prototype={
$0(){return A.b([],t.s)},
$S:68}
A.fY.prototype={}
A.ew.prototype={}
A.ls.prototype={}
A.mh.prototype={
mG(a){var s,r,q,p=this
if(p.e.a_(0,a)){s=A.w(t.N,t.W)
for(r=p.a,r=new A.a1(r,r.r,r.e,A.o(r).i("a1<2>"));r.n();){q=r.d
if(q.c===a)s.j(0,q.a,q)}p.d.j(0,a,s)}s=p.d.h(0,a)
s=s==null?null:new A.M(s,A.o(s).i("M<2>"))
return s==null?B.ab:s},
fN(a,b){var s,r,q,p
if(a!=null)s=b==null||a.c!==b.c
else s=!1
if(s){s=this.d
r=a.c
q=s.h(0,r)
p=q==null
if(!p)q.a_(0,a.a)
if(!p&&q.a===0)s.a_(0,r)
if(b!=null)this.e.m(0,b.c)}if(b!=null){s=this.d
r=b.c
p=s.h(0,r)
if(p==null){p=A.w(t.N,t.W)
s.j(0,r,p)
s=p}else s=p
s.j(0,b.a,b)}},
es(a,b){var s,r,q,p,o=a==null?null:a.ay
if(o==null||a.d!==B.H||a.cx!=null)return
s=this.c
r=s.h(0,o)
if(b)s.j(0,o,r==null?a.f:r.B(0,a.f))
else{q=r.aa(0,a.f)
p=q.a.l(0,$.L())
if(p===0)s.a_(0,o)
else s.j(0,o,q)}},
j(a,b,c){var s,r=this
A.c(b)
t.W.a(c)
s=r.a.h(0,b)
r.es(s,!1)
r.is(0,b,c)
r.es(c,!0)
r.fN(s,c)},
a_(a,b){var s=this,r=s.a.h(0,b)
s.es(r,!1)
s.fN(r,null)
return s.it(0,b)}}
A.hd.prototype={}
A.zW.prototype={
$1(a){return a.l(0,this.a)>=0&&a.l(0,this.b)<=0},
$S:249}
A.hj.prototype={
U(){return"ReportState."+this.b}}
A.jW.prototype={}
A.pc.prototype={}
A.zX.prototype={
$1(a){var s
t.b.a(a)
if(a.r===this.a){s=a.d
s=s!==B.o&&s!==B.x&&a.w.l(0,this.b)<=0}else s=!1
return s},
$S:2}
A.zY.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.zZ.prototype={
$1(a){var s
t.sH.a(a)
s=this.a
return s.l(0,a.a)>=0&&s.l(0,a.b)<=0},
$S:62}
A.bh.prototype={
U(){return"MovementType."+this.b}}
A.bZ.prototype={
U(){return"PaymentMethod."+this.b}}
A.cV.prototype={
U(){return"Direction."+this.b}}
A.dQ.prototype={}
A.V.prototype={
br(a,b,c,d,e,f,g,h){var s=this,r=g==null?s.d:g,q=a==null?s.f:a,p=e==null?s.y:e,o=b==null?s.Q:b,n=c==null?s.ay:c,m=d==null?s.ch:d,l=f==null?s.CW:f,k=h==null?s.dx:h
return A.bQ(s.c,q,s.w,s.b,o,s.at,s.ax,s.e,s.x,s.a,n,s.as,s.db,s.r,m,s.z,s.cy,p,s.cx,l,r,k)},
lD(a,b,c){var s=null
return this.br(s,a,s,s,s,s,b,c)},
eY(a){var s=null
return this.br(s,s,s,s,s,s,s,a)},
lC(a,b){var s=null
return this.br(s,s,s,s,s,s,a,b)},
dT(a,b,c){var s=null
return this.br(s,s,s,a,s,s,b,c)},
ls(a){var s=null
return this.br(s,s,a,s,s,s,s,s)},
lG(a,b,c,d){var s=null
return this.br(s,s,a,b,s,s,c,d)},
lA(a,b){var s=null
return this.br(s,s,s,a,s,s,s,b)},
lF(a,b,c,d){var s=null
return this.br(a,s,s,s,b,c,s,d)},
ly(a,b){var s=null
return this.br(a,s,s,s,s,s,s,b)},
lz(a,b){var s=null
return this.br(s,a,s,s,s,s,s,b)},
cj(a){var s=this
return A.bQ(a,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
e2(a,b,c){var s=this,r=b==null?s.c:b,q=c==null?s.at:c
return A.bQ(r,s.f,s.w,a,s.Q,q,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
mi(a){return this.e2(a,null,null)},
hQ(a){var s=this
return A.bQ(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,a,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
hP(a,b,c,d){var s=this
return A.bQ(s.c,s.f,s.w,s.b,a,s.at,s.ax,s.e,s.x,s.a,s.ay,b,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,c,d)},
hT(a){var s=this
return A.bQ(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,a,s.CW,s.d,s.dx+1)},
fj(a,b,c,d,e){var s=this
return A.bQ(s.c,s.f,s.w,s.b,a,b,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,c,s.z,s.cy,s.y,s.cx,s.CW,d,e)}}
A.iR.prototype={
U(){return"PostingStatus."+this.b}}
A.bu.prototype={
U(){return"SpendFlag."+this.b}}
A.ka.prototype={
jI(a,b){var s,r,q,p
t.Ez.a(b)
s=this.a
r=s.h(0,a)
if(r!=null)return r
q=b.h(0,a)
p=q==null?null:q.d
s=p==null?null:s.h(0,p)
return s==null?B.aE:s}}
A.ni.prototype={
$1(a){return t.r.a(a).b===this.a.a},
$S:69}
A.d9.prototype={
ghi(){var s=this.b
s=s==null?null:s.x
return s==null?this.a.x:s}}
A.dq.prototype={}
A.vL.prototype={
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
$S:265}
A.pd.prototype={}
A.A_.prototype={
$1(a){t.qp.a(a)
return a.ghi().l(0,this.a)>=0&&a.ghi().l(0,this.b)<=0},
$S:70}
A.A0.prototype={
$1(a){return t.qp.a(a).a.f.b===this.a},
$S:70}
A.nU.prototype={}
A.B4.prototype={
$2(a,b){var s,r
A.c(a)
A.c(b)
s=this.a
r=s.h(0,b).a.l(0,s.h(0,a).a)
return r!==0?r:B.b.l(a,b)},
$S:35}
A.af.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.o(this)
s.i("af.K").a(b)
s.i("af.V").a(c)
this.a.j(0,b,c)},
a_(a,b){var s=this.a
s.E(b)
return s.a_(0,b)},
gah(){var s=this.a
return new A.au(s,A.o(s).i("au<1>"))},
gT(){var s=this.a
return new A.M(s,A.o(s).i("M<2>"))},
gbu(){var s=this.a
return new A.ac(s,A.o(s).i("ac<1,2>"))},
gq(a){return this.a.a},
ga5(a){return this.a.a===0},
gaq(a){return this.a.a!==0},
E(a){return this.a.E(a)},
a2(a,b){return this.a.a2(0,A.o(this).i("~(af.K,af.V)").a(b))}}
A.j3.prototype={
m(a,b){var s=this.a.m(0,this.$ti.c.a(b))
return s},
u(a,b){return this.a.u(0,b)},
gA(a){var s=this.a
return A.ea(s,s.r,A.o(s).c)},
gq(a){return this.a.a}}
A.cw.prototype={}
A.pk.prototype={}
A.dm.prototype={}
A.wd.prototype={
$2(a,b){var s=t.Fb
return B.d.l(s.a(a).a,s.a(b).a)},
$S:105}
A.xT.prototype={
$2(a,b){var s,r=t.eY
r.a(a)
r.a(b)
s=B.b.l(a.a.b,b.a.b)
return s!==0?s:a.b.b.l(0,b.b.b)},
$S:72}
A.zq.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.o){s=a.as
s=s==null?null:s.x
s=s===this.a}else s=!1
return s},
$S:2}
A.xS.prototype={
$1(a){t.eY.a(a)
return a.b.bk(a.d)===this.a},
$S:107}
A.zp.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.cm.prototype={
U(){return"InstalmentStatus."+this.b}}
A.dL.prototype={}
A.p7.prototype={}
A.zr.prototype={
$2(a,b){var s=t.W
return s.a(a).x.l(0,s.a(b).x)},
$S:7}
A.zs.prototype={
$1(a){var s
t.v.a(a)
s=this.a
return s.a.l(0,a.c)>=0&&s.a.l(0,a.d)<=0},
$S:9}
A.zt.prototype={
$1(a){var s=t.pt.a(a).d
return s===B.ay||s===B.aN},
$S:57}
A.ez.prototype={}
A.en.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.en&&b.a.J(0,this.a)},
gP(a){var s=this.a
return A.by(s.a,s.b,s.c,B.t)},
k(a){return"DueOn("+this.a.k(0)+")"}}
A.fQ.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.fQ&&b.a===this.a&&b.b===this.b},
gP(a){return A.by(this.a,this.b,B.t,B.t)},
k(a){return"CheckWithLender("+this.a+"-"+this.b+")"}}
A.iL.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iL},
gP(a){return 0}}
A.iK.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iK&&b.a===this.a},
gP(a){return A.by(2,this.a,B.t,B.t)},
k(a){return"NoneLeftIfPaid("+this.a+")"}}
A.ic.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.ic},
gP(a){return 1}}
A.p8.prototype={}
A.dM.prototype={
U(){return"LoanType."+this.b}}
A.ha.prototype={
N(){var s=this,r=null,q=t.N,p=A.w(q,t.X),o=s.a
p.j(0,"type",o==null?r:o.b)
o=s.b
p.j(0,"principal",o==null?r:A.S(["amount",o.a.k(0),"currency",o.b],q,q))
p.j(0,"instalmentCount",s.c)
p.j(0,"paymentDay",s.d)
p.j(0,"pendingInstalments",s.e)
q=s.f
p.j(0,"pendingAsOf",q==null?r:q.k(0))
q=s.r
q=q==null?r:q.N()
if(q!=null)p.j(0,"instalment",q)
q=s.w
if(q!=null)p.j(0,"payingAccountId",q)
q=s.x
if(q!=null)p.j(0,"cardLoan",q)
return p}}
A.zu.prototype={
$1(a){var s=B.b.I(a)
return s.length===0?null:s},
$S:74}
A.zw.prototype={
$1(a){var s=this.a
if(s.$1(a)==null)s=null
else{s=s.$1(a)
s.toString
s=A.li(s,null)}return s},
$S:110}
A.zv.prototype={
$1(a){var s=this.a.$1(a)
s.toString
s=A.Gw(s)
s.toString
return A.a3(s,this.b)},
$S:59}
A.hp.prototype={
bk(a){var s,r=this,q=r.b.k(0),p=r.f
p=p==null?null:p.a
p=A.i(p==null?"":p)
s=r.r
if(s==null)s=""
return a+":"+r.a.b+":"+q+":"+p+":"+s},
N(){var s,r=this,q=A.w(t.N,t.X)
q.j(0,"kind",r.a.b)
q.j(0,"started",r.b.k(0))
q.j(0,"outstanding",r.c.N())
s=r.d
s=s==null?null:s.k(0)
if(s!=null)q.j(0,"ends",s)
s=r.e
if(s!=null)q.j(0,"remaining",s)
s=r.f
s=s==null?null:s.N()
if(s!=null)q.j(0,"amount",s)
s=r.r
if(s!=null)q.j(0,"reference",s)
return q}}
A.fu.prototype={
U(){return"StatementLoanKind."+this.b}}
A.d4.prototype={
U(){return"MailSenderKind."+this.b}}
A.iz.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iz&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.by(this.a,this.b,this.c,B.t)},
k(a){return"MailSender("+this.a+", "+this.b.b+")"}}
A.hc.prototype={}
A.A.prototype={
aC(a){var s=A.az(this.a,this.b,this.c).aw(A.C3(a,0,0,0).a)
return new A.A(A.b1(s),A.b5(s),A.av(s))},
gdH(){var s,r,q,p=this.b
if(p<1||p>12)return null
s=this.a
if(p<=2)--s
r=B.d.C(s>=0?s:s-399,400)
q=s-r*400
p=B.d.C(153*B.d.R(p+9,12)+2,5)
return r*146097+(q*365+B.d.C(q,4)-B.d.C(q,100)+(p+this.c-1))-719468},
a8(a){var s=this,r=s.gdH(),q=a.gdH()
return r!=null&&q!=null?q-r:B.d.C(A.az(a.a,a.b,a.c).dX(A.az(s.a,s.b,s.c)).a,864e8)},
l(a,b){var s,r,q=this
t.h.a(b)
s=q.gdH()
r=b.gdH()
return s!=null&&r!=null?B.d.l(s,r):A.az(q.a,q.b,q.c).l(0,A.az(b.a,b.b,b.c))},
J(a,b){if(b==null)return!1
return b instanceof A.A&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gP(a){return A.by(this.a,this.b,this.c,B.t)},
k(a){return""+this.a+"-"+B.b.ac(B.d.k(this.b),2,"0")+"-"+B.b.ac(B.d.k(this.c),2,"0")},
$ib0:1}
A.zc.prototype={
$1(a){return","},
$S:17}
A.zd.prototype={
$1(a){return","},
$S:17}
A.nJ.prototype={}
A.kg.prototype={
k(a){return"CurrencyMismatch: "+this.a+" and "+this.b+" cannot be combined"}}
A.q.prototype={
N(){var s=this.b
return A.S(["amount",this.a.bm(0,A.ev(s)),"currency",s],t.N,t.X)},
gaT(){var s,r,q=this,p=q.c
if(p===$){s=q.a
r=new A.P(s.a,s.b-A.ev(q.b)).b_().b0(0)
q.c!==$&&A.fL()
q.c=r
p=r}return p},
B(a,b){return A.a3(this.a.B(0,this.fZ(b).a),this.b)},
aa(a,b){var s=this.fZ(b).a
return A.a3(this.a.B(0,new A.P(s.a.S(0),s.b)),this.b)},
fZ(a){var s=a.b,r=this.b
if(s!==r)throw A.k(new A.kg(r,s))
return a},
J(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.q)if(b.b===this.b)s=b.a.l(0,this.a)===0
return s},
gP(a){return A.by(this.b,this.a,B.t,B.t)},
k(a){var s=this.b
return s+" "+this.a.bm(0,A.ev(s))}}
A.kF.prototype={
l9(a){var s,r
t._.a(a)
s=this.a
r=a.a
if(s.E(r))return!1
s.j(0,r,a)
return!0}}
A.aj.prototype={}
A.ne.prototype={}
A.k9.prototype={}
A.nf.prototype={}
A.Au.prototype={
$1(a){var s
t.W.a(a)
s=a.d
return(s==null||s===B.X)&&a.ch==null},
$S:1}
A.Al.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.Am.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.k){s=this.a.gL().h(0,a.c)
s=s==null?null:s.gaS()
s=s===!0}else s=!1
return s},
$S:1}
A.An.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.m){s=this.a.gL().h(0,a.c)
s=(s==null?null:s.d)===B.y}else s=!1
return s},
$S:1}
A.Ao.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.Aq.prototype={
$1(a){var s,r
A.m(a)
s=a==null?"":a
r=A.D("[^A-Z0-9]",!0,!1)
return A.ao(s.toUpperCase(),r,"")},
$S:50}
A.Ap.prototype={
$1(a){var s,r,q
t.W.a(a)
s=this.a.gL().h(0,a.c).c
r=A.D("[^A-Z0-9]",!0,!1)
q=A.ao(s.toUpperCase(),r,"")
return q.length!==0&&this.b.M(0,new A.Aj(q))},
$S:1}
A.Aj.prototype={
$1(a){return B.b.u(A.c(a),this.a)},
$S:6}
A.Ar.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.Ak.prototype={
$1(a){t.W.a(a)
return this.a.gL().h(0,a.c).b},
$S:20}
A.As.prototype={
$1(a){t.W.a(a)
return A.i(this.a.$1(a))+" on "+a.w.k(0)},
$S:20}
A.At.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:55}
A.uc.prototype={}
A.iB.prototype={}
A.B1.prototype={
$2(a,b){var s=t.v
return s.a(a).d.l(0,s.a(b).d)},
$S:26}
A.B2.prototype={
$2(a,b){var s=t.h
s.a(a)
s.a(b)
return a.l(0,b)>0?a:b},
$S:113}
A.B3.prototype={
$1(a){return t.W.a(a).w.l(0,this.a)>=0},
$S:1}
A.Bp.prototype={
$2(a,b){var s=t.sH
return s.a(a).a.l(0,s.a(b).a)},
$S:36}
A.zI.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s!==B.o&&s!==B.x&&!this.a.aD.w.E(a.a)},
$S:2}
A.zJ.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.zL.prototype={
$2(a,b){var s=this.a.bI(this.b.a),r=s.$ti
return new A.n(s,r.i("j(h.E)").a(new A.zM(a,b)),r.i("n<h.E>")).gq(0)},
$S:67}
A.zM.prototype={
$1(a){var s
t.W.a(a)
if(a.CW==null){s=a.w
s=s.l(0,this.a)>=0&&s.l(0,this.b)<=0}else s=!1
return s},
$S:1}
A.zK.prototype={
$2(a,b){var s=t.sH
return s.a(a).a.l(0,s.a(b).a)},
$S:36}
A.vA.prototype={
$1(a){return t.v.a(a).d.l(0,this.a.b)<0},
$S:9}
A.zD.prototype={
$2(a,b){var s=t.sH
return s.a(a).a.l(0,s.a(b).a)},
$S:36}
A.zG.prototype={
$1(a){return a.b*12+a.a-1},
$S:115}
A.zH.prototype={
$1(a){var s=B.d.C(a,12)
return new A.hz(B.d.R(a,12)+1,s)},
$S:116}
A.zE.prototype={
$2(a,b){var s=t.l1
s.a(a)
s.a(b)
s=this.a
return J.BS(s.$1(a),s.$1(b))},
$S:117}
A.zF.prototype={
$2(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=a,p=0;p<s.length;s.length===r||(0,A.l)(s),++p){o=s[p]
n=o.b
if(o.a.l(0,q)>0)break
if(n.l(0,q)>=0){m=A.az(n.a,n.b,n.c).aw(864e8)
q=new A.A(A.b1(m),A.b5(m),A.av(m))}if(q.l(0,b)>0)return!0}return!1},
$S:118}
A.dN.prototype={}
A.zR.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.zS.prototype={
$2(a,b){var s=t.W
return s.a(a).w.l(0,s.a(b).w)},
$S:7}
A.zU.prototype={
$2(a,b){var s,r,q,p
t.C.a(a)
s=J.an(a)
r=s.gq(a)
for(q=0;q<r;){p=B.d.ao(q+r,1)
if(s.h(a,p).w.l(0,b)<0)q=p+1
else r=p}return q},
$S:75}
A.zT.prototype={
$2(a,b){var s,r,q,p=t.wg
p.a(a)
p.a(b)
s=B.b.l(a.a,b.a)
if(s!==0)return s
r=a.d.l(0,b.d)
if(r!==0)p=r
else{p=this.a
q=p.h(0,a)
q.toString
p=p.h(0,b)
p.toString
p=B.d.l(q,p)}return p},
$S:120}
A.tO.prototype={}
A.lk.prototype={}
A.tP.prototype={}
A.yw.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yx.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.yy.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.yE.prototype={
$1(a){var s=a.a,r=this.a.h(0,s)
s=r==null?this.b.a.h(0,s):r
return s==null?A.a3($.L(),a.f.b):s},
$S:121}
A.yD.prototype={
$1(a){var s=a.a,r=this.a,q=r.h(0,s)
if(q==null){q=a.f.gaT()
r.j(0,s,q)
s=q}else s=q
return s},
$S:76}
A.yC.prototype={
$1(a){var s,r=this,q=a.a,p=r.a,o=p.h(0,q)
if(o==null){o=r.b.$1(a)
s=r.c.h(0,q)
if(s==null)s=r.d.a.h(0,q)
s=s==null?null:s.gaT()
if(s==null)s=0
if(typeof o!=="number")return o.aa()
s=o-s
p.j(0,q,s)
p=s}else p=o
q=r.e.h(0,q)
return p-(q==null?0:q)},
$S:76}
A.yz.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yA.prototype={
$1(a){return J.Y(this.a.$1(t.W.a(a)),this.b)},
$S:1}
A.yB.prototype={
$1(a){return t.W.a(a).w.k(0)},
$S:20}
A.u_.prototype={}
A.dU.prototype={}
A.u0.prototype={}
A.bS.prototype={
U(){return"_Pair."+this.b}}
A.yG.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yH.prototype={
$0(){return A.b([],t.t)},
$S:123}
A.yI.prototype={
$2(a,b){var s,r=t.Ei
r.a(a)
r.a(b)
r=a.a
s=b.a
return r!==s?B.d.l(r,s):B.d.l(a.b,b.b)},
$S:124}
A.yQ.prototype={
$1(a){var s,r=this.a,q=a
for(;;){if(!(r.h(0,q)!=null&&r.h(0,q)!==q))break
s=r.h(0,q)
s.toString
q=s}return q},
$S:12}
A.yJ.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.yK.prototype={
$1(a){var s
t.ct.a(a)
if(a.c===B.cq){s=this.a
s=s.u(0,a.a.a)!==s.u(0,a.b.a)}else s=!1
return s},
$S:125}
A.yL.prototype={
$1(a){return!this.a.e5(t.W.a(a).a).ga5(0)},
$S:1}
A.yM.prototype={
$1(a){t.W.a(a)
return(a.CW!=null||a.y.d)&&!B.a.u(this.a,a)},
$S:1}
A.yN.prototype={
$1(a){return J.Du(this.a,new A.yF(t.W.a(a),this.b))},
$S:1}
A.yF.prototype={
$1(a){var s=this.a.a,r=t.W.a(a).a
return s!==r&&this.b.dZ.u(0,A.on(s,r))},
$S:1}
A.yO.prototype={
$2(a,b){var s,r=t.kG
r.a(a)
r.a(b)
s=B.b.l(a.a,b.a)
return s!==0?s:B.b.l(a.b,b.b)},
$S:126}
A.yP.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:55}
A.dX.prototype={}
A.Bg.prototype={
$2(a,b){var s,r=t.v
r.a(a)
r.a(b)
s=a.c.l(0,b.c)
return s!==0?s:B.b.l(a.a,b.a)},
$S:26}
A.Bh.prototype={
$2(a,b){var s=t.sN
return B.b.l(s.a(a).a,s.a(b).a)},
$S:127}
A.um.prototype={}
A.lH.prototype={}
A.un.prototype={}
A.Aw.prototype={
$1(a){return this.a.u(0,t.W.a(a).c)},
$S:1}
A.Ax.prototype={
$1(a){var s=t.W.a(a).d
return s==null||s===B.M},
$S:1}
A.Ay.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.Az.prototype={
$1(a){return t.W.a(a).e===B.k},
$S:1}
A.AA.prototype={
$1(a){return t.W.a(a).e===B.m},
$S:1}
A.AE.prototype={
$1(a){return a.d===B.M},
$S:1}
A.AC.prototype={
$2(a,b){var s,r,q
if(b.c===a.c||b.b!==a.b)return!1
s=a.w.a8(b.w)
if(s<0||s>5)return!1
r=a.f
q=b.f
if(r.b===q.b)r=r.J(0,q)
else{r=this.b
r=r.$1(a)&&r.$1(b)}return r},
$S:104}
A.AD.prototype={
$2(a,b){var s,r,q
t.C.a(a)
s=a.length
for(r=0;r<s;){q=r+s>>>1
if(!(q<a.length))return A.a(a,q)
if(a[q].w.l(0,b)<0)r=q+1
else s=q}return r},
$S:75}
A.Av.prototype={
$1(a){var s=a.c,r=this.a.h(0,s)
return r==null?s:r},
$S:20}
A.AB.prototype={
$1(a){t.W.a(a)
return A.i(this.a.$1(a))+" on "+a.w.k(0)},
$S:20}
A.yR.prototype={
$1(a){t.b.a(a)
return a.gaS()||a.d===B.a7},
$S:2}
A.yS.prototype={
$1(a){t.W.a(a)
return a.ch==null&&a.ay==null},
$S:1}
A.l7.prototype={}
A.Ac.prototype={
$1(a){t.w5.a(a)
return a.b===this.a&&a.f!=null},
$S:39}
A.Ad.prototype={
$2(a,b){var s=t.w5
return s.a(a).d.l(0,s.a(b).d)},
$S:130}
A.Ae.prototype={
$1(a){return t.p_.a(a).a===this.a},
$S:131}
A.Af.prototype={
$1(a){t.w5.a(a)
return a.f===this.b+this.a.a&&a.d.l(0,this.c)>=0},
$S:39}
A.Ag.prototype={
$1(a){t.w5.a(a)
return a.f===this.b+this.a.a&&a.d.l(0,this.c)<0},
$S:39}
A.y0.prototype={
$1(a){return t.AT.a(a).b==="company"},
$S:132}
A.y1.prototype={
$1(a){return t.AT.a(a).a},
$S:133}
A.bO.prototype={
U(){return"DocumentKind."+this.b}}
A.bF.prototype={
U(){return"PolicyType."+this.b}}
A.d5.prototype={
U(){return"PremiumFrequency."+this.b}}
A.nE.prototype={
N(){return A.S(["name",this.a,"driveFileId",this.b,"localId",this.c],t.N,t.X)}}
A.cW.prototype={
gcl(){var s,r=this.e
if(r==null||r.length===0)r=this.b.c
else{s=this.b
r=s===B.bs?r:s.c+" ("+r+")"}return r},
N(){var s,r,q=this,p=q.d.k(0),o=q.w
o=o==null?null:o.k(0)
s=q.x
s=s==null?null:s.k(0)
r=q.y
r=r==null?null:r.N()
return A.S(["id",q.a,"kind",q.b.b,"personId",q.c,"addedOn",p,"label",q.e,"country",q.f,"last4",q.r,"issued",o,"expires",s,"file",r,"replaces",q.z,"fromProposal",q.Q],t.N,t.X)}}
A.er.prototype={
ghd(){var s=this.Q,r=this.CW
if(s==null)return null
return r==null||r.b!==s.b?s:s.aa(0,r)},
gcl(){var s=this.e,r=s==null||s.length===0,q=this.b
return r?this.c.c+", "+q:s+", "+q},
N(){var s,r=this,q=null,p=A.w(t.N,t.X)
p.j(0,"id",r.a)
p.j(0,"insurer",r.b)
p.j(0,"type",r.c.b)
p.j(0,"personId",r.d)
p.j(0,"plan",r.e)
p.j(0,"ownerId",r.f)
p.j(0,"last4",r.r)
s=r.w
p.j(0,"sumAssured",s==null?q:s.N())
p.j(0,"riders",r.x)
s=r.y
p.j(0,"starts",s==null?q:s.k(0))
s=r.z
p.j(0,"ends",s==null?q:s.k(0))
s=r.Q
p.j(0,"premium",s==null?q:s.N())
s=r.as
p.j(0,"frequency",s==null?q:s.b)
p.j(0,"paymentMethod",r.at)
s=r.ax
p.j(0,"nextDue",s==null?q:s.k(0))
s=r.ay
p.j(0,"file",s==null?q:s.N())
s=r.ch
if(s!=null)p.j(0,"accountId",s)
s=r.CW
s=s==null?q:s.N()
if(s!=null)p.j(0,"medisave",s)
return p}}
A.aL.prototype={
U(){return"FieldType."+this.b}}
A.t.prototype={}
A.ab.prototype={
U(){return"LifeKind."+this.b},
m2(a){var s=this.d,r=A.F(s)
return A.aO(new A.n(s,r.i("j(1)").a(new A.p4(a)),r.i("n<1>")),t.k2)}}
A.p4.prototype={
$1(a){return t.k2.a(a).a===this.a},
$S:40}
A.b3.prototype={
av(a){var s=this.c,r=t.f
if(r.b(s.h(0,a))){s=s.h(0,a)
s.toString
s=A.aP(r.a(s).G(0,t.N,t.X))}else s=null
return s},
dc(a){var s=this.c
if(typeof s.h(0,a)=="string"){s=s.h(0,a)
s.toString
s=A.dt(A.c(s))}else s=null
return s},
N(){return A.S(["kind",this.a.b,"id",this.b,"fields",this.c],t.N,t.X)}}
A.p2.prototype={
aZ(a){var s,r=this.a.h(0,a)
if(r==null)r=null
else{s=A.o(r).i("M<2>")
r=A.B(new A.M(r,s),s.i("h.E"))}if(r==null)r=A.b([],t.Z)
B.a.D(r,new A.p3())
return r},
a6(a,b){var s=this.a.h(0,a)
return s==null?null:s.h(0,b)},
e8(a){var s=this.a,r=a.a,q=s.h(0,r)
if(q==null){q=A.w(t.N,t.u)
s.j(0,r,q)
s=q}else s=q
s.j(0,a.b,a)
return a},
lU(a,b){var s=this.a.h(0,a)
return s==null?null:s.a_(0,b)},
lf(a){var s,r
for(s=this.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d.h(0,a)
if(r!=null)return r}return null},
n5(a,b){var s,r,q,p,o,n,m,l,k,j=A.b([],t.Z)
for(s=this.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>")),r=a.b;s.n();)for(q=s.d.gT(),q=q.gA(q);q.n();){p=q.gt()
for(o=p.a.d,n=o.length,m=p.c,l=0;l<n;++l){k=o[l]
if(k.c===B.C&&k.f===r&&J.Y(m.h(0,k.a),b))j.push(p)}}return j}}
A.p3.prototype={
$2(a,b){var s=t.u
return B.b.l(s.a(a).b,s.a(b).b)},
$S:21}
A.vB.prototype={
$1(a){A.c(a)
return a==="member"?"household member":a},
$S:12}
A.vC.prototype={
$1(a){return A.c(a).length>80},
$S:6}
A.vF.prototype={
$1(a){t.u.a(a)
return a.b!==this.a.b&&A.m(a.c.h(0,"creditMovementId"))===this.b},
$S:22}
A.vG.prototype={
$1(a){return this.a.c.h(0,A.c(a))!=null},
$S:6}
A.w4.prototype={
$1(a){return t.P.a(a).b===this.a.h(0,"kind")},
$S:56}
A.eB.prototype={
U(){return"PayslipMatchState."+this.b}}
A.fp.prototype={}
A.AH.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.ay(a.c.h(0,"payDate"))
r.toString
s=A.ay(b.c.h(0,"payDate"))
s.toString
return r.l(0,s)},
$S:21}
A.AN.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(a.c===this.a)if(a.e===B.m)if(!this.b.u(0,a.a)){s=this.c
r=a.x
s=s.a8(r)>=-3&&s.a8(r)<=5}return s},
$S:1}
A.AI.prototype={
$2(a,b){var s=t.W
s.a(a)
s.a(b)
s=this.a
return B.d.l(Math.abs(s.a8(a.x)),Math.abs(s.a8(b.x)))},
$S:7}
A.AJ.prototype={
$1(a){return t.W.a(a).f.J(0,this.a)},
$S:1}
A.AL.prototype={
$1(a){return A.c(a).length>1},
$S:6}
A.AM.prototype={
$0(){return""},
$S:25}
A.AK.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(a.f.b===this.a.b){r=this.b
if(r.length!==0){s=a.z
if(s==null)s=""
r=B.b.u(s.toUpperCase(),r)
s=r}}return s},
$S:1}
A.dO.prototype={}
A.AV.prototype={
$2(a,b){var s=t.tW
return s.a(a).b.l(0,s.a(b).b)},
$S:137}
A.cp.prototype={
U(){return"RetrievalAction."+this.b}}
A.lp.prototype={}
A.tK.prototype={
gbE(){var s,r,q,p,o=A.w(t.N,t.l9)
for(s=this.a,s=new A.ac(s,A.o(s).i("ac<1,2>")).gA(0),r=this.b;s.n();){q=s.d
p=q.a
if(!r.u(0,p))o.j(0,p,q.b)}return o},
gmU(){var s,r,q=A.a4(t.N)
for(s=this.gbE(),s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d.z
if(r!=null)q.m(0,r)}return q},
gt(){var s=this.gmU(),r=this.gbE(),q=A.o(r).i("M<2>"),p=q.i("n<h.E>")
r=A.B(new A.n(new A.M(r,q),q.i("j(h.E)").a(new A.tL(s)),p),p.i("h.E"))
B.a.D(r,new A.tM())
return r}}
A.tL.prototype={
$1(a){return!this.a.u(0,t.l9.a(a).a)},
$S:77}
A.tM.prototype={
$2(a,b){var s,r=t.l9
r.a(a)
r.a(b)
s=B.d.l(a.b.a,b.b.a)
return s!==0?s:B.b.l(a.c,b.c)},
$S:139}
A.w5.prototype={
$1(a){t.l9.a(a)
return a.z===this.b&&a.a!==this.a.a.a},
$S:77}
A.w6.prototype={
$1(a){return t.hn.a(a).b===this.a.h(0,"action")},
$S:140}
A.w7.prototype={
$1(a){return!B.mo.u(0,A.c(a))},
$S:6}
A.zn.prototype={
$2(a,b){var s=t.ok
return B.b.l(s.a(a).b,s.a(b).b)},
$S:61}
A.da.prototype={}
A.BD.prototype={
$1(a){t.b.a(a)
return a.d===B.o&&a.as!=null&&a.CW==null&&A.FT(this.a,a.a,this.b)},
$S:2}
A.BE.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.BF.prototype={
$2(a,b){var s=t.tB
return s.a(a).d.l(0,s.a(b).d)},
$S:141}
A.ci.prototype={
gdn(){return this.z+this.Q+this.as}}
A.y3.prototype={
$2(a,b){var s,r=t.eV
r.a(a)
r.a(b)
s=a.f.l(0,b.f)
return s!==0?s:B.d.l(a.w,b.w)},
$S:142}
A.y4.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).z},
$S:30}
A.ym.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).Q},
$S:30}
A.yn.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).as},
$S:30}
A.yo.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).at},
$S:30}
A.z2.prototype={
$1(a){return B.b.ac(""+B.d.R(a,100),2,"0")},
$S:33}
A.z0.prototype={
$1(a){return B.b.ac(""+this.a,a.du(1).length,"0")},
$S:17}
A.z1.prototype={
$1(a){var s=a.h(0,0)
s.toString
return A.fJ(this.a,s)},
$S:17}
A.dF.prototype={
N(){var s=this
return A.S(["description",s.a,"sac",s.b,"taxable",s.c,"cgst",s.d,"sgst",s.e],t.N,t.X)}}
A.tT.prototype={
gfg(){return B.a.a4(this.x,0,new A.tW(),t.S)},
geU(){return B.a.a4(this.x,0,new A.tU(),t.S)},
geh(){return B.a.a4(this.x,0,new A.tV(),t.S)},
gdn(){return this.gfg()+this.geU()+this.geh()},
fh(){var s,r,q,p,o,n=this,m=t.N,l=t.X,k=A.w(m,l)
k.j(0,"tenancyId",n.a)
k.j(0,"propertyId",n.b)
k.j(0,"month",""+n.c+"-"+B.b.ac(B.d.k(n.d),2,"0"))
k.j(0,"date",n.e.k(0))
k.j(0,"seriesId",n.f)
k.j(0,"seq",n.r)
k.j(0,"number",n.w)
s=A.b([],t.bk)
for(r=n.x,q=r.length,p=0;p<r.length;r.length===q||(0,A.l)(r),++p){o=r[p]
s.push(A.S(["description",o.a,"sac",o.b,"taxable",o.c,"cgst",o.d,"sgst",o.e],m,l))}k.j(0,"lines",s)
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
A.tW.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).c},
$S:29}
A.tU.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).d},
$S:29}
A.tV.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).e},
$S:29}
A.Ab.prototype={
$1(a){return this.a?""+a.a:A.fJ(A.jI(a),"{fy}")},
$S:146}
A.A9.prototype={
$1(a){var s=A.aH(t.u.a(a).c.h(0,"seq"))
s.toString
return s},
$S:147}
A.Aa.prototype={
$2(a,b){A.O(a)
A.O(b)
return a>b?a:b},
$S:27}
A.yq.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).c},
$S:29}
A.iU.prototype={
N(){return A.b([this.a,this.b,this.c],t.s)},
J(a,b){if(b==null)return!1
return b instanceof A.iU&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gP(a){return A.by(this.a,this.b,this.c,B.t)},
k(a){return this.a+" | "+this.b+" | "+this.c}}
A.fh.prototype={}
A.pb.prototype={
gfo(){var s=this
return s.a.aa(0,s.b).aa(0,s.c).aa(0,s.d).aa(0,s.e)}}
A.zO.prototype={
$1(a){var s=this.a.e.h(0,a)
return s==null?this.b:s},
$S:148}
A.zQ.prototype={
$1(a){this.a.h(0,a)
return this.b},
$S:149}
A.zP.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:24}
A.hu.prototype={
U(){return"WorthSource."+this.b}}
A.bA.prototype={
gcX(){var s=this.b
return s.a.a.ga9(0)<0?A.a3($.L(),s.b).aa(0,s):s}}
A.ht.prototype={
gdQ(){return B.a.a4(this.b,A.a3($.L(),this.a),new A.uw(),t.B)},
gdU(){return B.a.a4(this.c,A.a3($.L(),this.a),new A.ux(),t.B)}}
A.uw.prototype={
$2(a,b){return t.B.a(a).B(0,t.x.a(b).gcX())},
$S:79}
A.ux.prototype={
$2(a,b){return t.B.a(a).B(0,t.x.a(b).gcX())},
$S:79}
A.l4.prototype={}
A.A1.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.w.l(0,this.b)<=0},
$S:2}
A.A2.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.A3.prototype={
$1(a){var s,r=new A.A4(),q=this.a,p=A.F(q),o=p.i("n<1>"),n=new A.n(q,p.i("j(1)").a(new A.A5(a)),o)
p=o.i("j(h.E)")
o=o.i("n<h.E>")
q=o.i("h.E")
s=A.B(new A.n(n,p.a(new A.A6()),o),q)
B.a.D(s,r)
q=A.B(new A.n(n,p.a(new A.A7()),o),q)
B.a.D(q,r)
return new A.ht(a,s,q)},
$S:152}
A.A4.prototype={
$2(a,b){var s,r=t.x
r.a(a)
r.a(b)
s=b.gcX().a.l(0,a.gcX().a)
return s!==0?s:B.b.l(a.a,b.a)},
$S:153}
A.A5.prototype={
$1(a){return t.x.a(a).b.b===this.a},
$S:42}
A.A6.prototype={
$1(a){return t.x.a(a).b.a.a.ga9(0)>=0},
$S:42}
A.A7.prototype={
$1(a){return t.x.a(a).b.a.a.ga9(0)<0},
$S:42}
A.cM.prototype={
U(){return"ValueKind."+this.b}}
A.eK.prototype={}
A.il.prototype={}
A.Bq.prototype={
$1(a){return this.a.b.a.h(0,A.c(a))!=null},
$S:6}
A.BL.prototype={
$1(a){var s,r,q
t.R.a(a)
s=!1
if(!a.f){r=this.a
if(a.b===r.a){s=a.d
q=r.c
if(A.GD(s,q))s=s!==B.H||q===B.m
else s=!1
s=s&&this.b.b6(0,new A.BK(a,r))}}return s},
$S:15}
A.BK.prototype={
$1(a){var s=this.b
return this.a.f5(s.b,A.c(a),s.a,s.c)},
$S:6}
A.BM.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).a,s.a(b).a)},
$S:46}
A.BN.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===B.a.gY(s).d&&a.e==B.a.gY(s).e},
$S:15}
A.cG.prototype={}
A.BA.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.BB.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.x.l(0,b.x)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.BC.prototype={
$2(a,b){return t.B.a(a).B(0,t.W.a(b).f)},
$S:60}
A.xH.prototype={
$3(a,b,c){t.J.a(c)
return new A.aj(a,this.b,this.a.a++,b,c,this.c)},
$S:156}
A.aR.prototype={
U(){return"ReviewReason."+this.b}}
A.W.prototype={
k(a){return"ReviewItem("+this.b.k(0)+", "+this.c+": "+this.d+")"}}
A.B7.prototype={
$1(a){var s=this.a.gL().h(0,a)
s=s==null?null:s.b
return s==null?a:s},
$S:12}
A.B5.prototype={
$1(a){t.k.a(a)
return this.a.aI(a.a,new A.B6(a))},
$S:157}
A.B6.prototype={
$0(){return this.a},
$S:158}
A.B8.prototype={
$1(a){return t.b.a(a).b===this.a.f},
$S:2}
A.B9.prototype={
$1(a){return!this.a.u(0,t.k.a(a).a)},
$S:37}
A.Ba.prototype={
$1(a){var s=t.k.a(a).a
if(!A.Er(this.a.R8,t.N).a.u(0,s)){s=this.b.h(0,s)
s=s==null?null:s.l(0,this.c)>0
s=s!==!0}else s=!1
return s},
$S:37}
A.Bb.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:55}
A.bc.prototype={
f5(a,b,c,d){var s,r,q=this
if(c!==q.b)return!1
s=q.r
if(s!=null&&b!==s)return!1
s=q.w
if(s!=null&&d!==s)return!1
s=q.c
if($.tY.a>2000)$.tY.ap(0)
r=$.tY.h(0,s)
if(r==null){r=A.D("(?<![A-Z0-9])"+A.hO(A.cQ(s))+"(?![A-Z0-9])",!0,!1)
$.tY.j(0,s,r)
s=r}else s=r
return s.b.test(a)}}
A.cI.prototype={}
A.hf.prototype={}
A.iN.prototype={}
A.hk.prototype={}
A.zA.prototype={
$1(a){var s=this
t.R.a(a)
return a.f&&a.f5(s.a,s.c,s.b,s.d)},
$S:15}
A.zB.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).a,s.a(b).a)},
$S:46}
A.zC.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===s.d&&a.e==s.e&&a.x==s.x&&a.y==s.y},
$S:15}
A.Bd.prototype={
$1(a){var s,r=a.z
if(r==null)return new A.hf()
s=A.cQ(r)
return this.a.aI(new A.eP([s,a.b,a.c,a.e]),new A.Be(s,this.b,a))},
$S:159}
A.Be.prototype={
$0(){var s=this.c
return A.D2(this.a,this.b,s.c,s.b,s.e)},
$S:160}
A.Bc.prototype={
$1(a){t.R.a(a)
return a.a+" ("+A.i(a.e)+")"},
$S:161}
A.Bi.prototype={
$1(a){return B.a.M(t.a.a(a),new A.Bj(this.a))},
$S:81}
A.Bj.prototype={
$1(a){var s=A.D("(?:^| )"+A.hO(A.c(a))+"(?: |$)",!0,!1)
return s.b.test(this.a)},
$S:6}
A.mZ.prototype={}
A.n_.prototype={
$1(a){var s=this.a.h(0,a)
if(!A.cu(s)||s<1)throw A.k(A.z(a+" must be a whole number of at least 1",s,null))
return s},
$S:163}
A.lt.prototype={}
A.lu.prototype={}
A.u4.prototype={}
A.c8.prototype={
U(){return"SmsSenderKind."+this.b}}
A.cq.prototype={
n0(){var s,r=A.w(t.N,t.X)
r.j(0,"id",this.a)
r.j(0,"kind",this.b.b)
s=this.c
if(s!=null)r.j(0,"institution",s)
return r},
J(a,b){if(b==null)return!1
return b instanceof A.cq&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.by(this.a,this.b,this.c,B.t)}}
A.u8.prototype={}
A.u9.prototype={
$2(a,b){var s=t.c5
return B.b.l(s.a(a).a,s.a(b).a)},
$S:82}
A.l8.prototype={
N(){var s=this
return A.S(["lineId",s.a,"field",s.b,"ocr",s.c,"owner",s.d],t.N,t.X)}}
A.d0.prototype={}
A.ub.prototype={}
A.e_.prototype={
hl(a){var s=this
return new A.e_(s.a,a,s.c,s.d,s.e,s.f,s.r)}}
A.Bl.prototype={
$0(){return A.b([],t.A)},
$S:16}
A.Bm.prototype={
$2(a,b){var s,r=t.uB
r.a(a)
r.a(b)
s=a.b.w.l(0,b.b.w)
return s!==0?s:B.d.l(a.a,b.a)},
$S:83}
A.Bn.prototype={
hW(a,b,c){var s=this
return function(){var r=a,q=b,p=c
var o=0,n=2,m=[],l,k,j,i,h,g,f,e
return function $async$$3(d,a0,a1){if(a0===1){m.push(a1)
o=n}for(;;)A:switch(o){case 0:e=s.a.h(0,r)
if(e==null){o=1
break}l=e.length
for(k=0;k<l;){j=k+l>>>1
if(!(j<e.length)){A.a(e,j)
o=1
break A}if(e[j].b.w.l(0,q)<0)k=j+1
else l=j}i=A.b([],t.qM)
h=k
for(;;){g=e.length
if(h<g){if(!(h>=0)){A.a(e,h)
o=1
break A}g=e[h].b.w.l(0,p)<=0}else g=!1
if(!g)break
if(!(h>=0&&h<e.length)){A.a(e,h)
o=1
break A}i.push(e[h]);++h}B.a.D(i,new A.Bo())
g=i.length,f=0
case 3:if(!(f<i.length)){o=5
break}o=6
return d.b=i[f].b,1
case 6:case 4:i.length===g||(0,A.l)(i),++f
o=3
break
case 5:case 1:return 0
case 2:return d.c=m.at(-1),3}}}},
$3(a,b,c){return new A.de(this.hW(a,b,c),t.wE)},
$S:166}
A.Bo.prototype={
$2(a,b){var s=t.uB
return B.d.l(s.a(a).a,s.a(b).a)},
$S:83}
A.l6.prototype={
k(a){return"NothingToJoin"}}
A.cU.prototype={
k(a){return"DeviceRemoved"}}
A.ir.prototype={
bA(){var s=0,r=A.J(t.J),q,p=this,o,n
var $async$bA=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=3
return A.r(p.b.bA(),$async$bA)
case 3:o=b
n=t.D.i("bg.S").a(p.c)
q=A.S(["deviceId",p.a,"keys",o,"primary",B.L.gaH().O(n),"name",p.d,"kind",p.e],t.N,t.X)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bA,r)}}
A.fw.prototype={
U(){return"SyncAccess."+this.b}}
A.uf.prototype={
bF(){var s=0,r=A.J(t.aT),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bF=A.K(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)A:switch(s){case 0:b1=n.a
s=3
return A.r(b1.bl(),$async$bF)
case 3:b2=b7
b3=A.b([],t.wt)
for(g=J.R(b2),f=n.b,e=f.a;g.n();){d=g.gt()
c=$.H2().aj(d)
if(c!=null){b=c.b
if(1>=b.length){q=A.a(b,1)
s=1
break A}b=b[1]===e}else b=!1
if(b){b=c.b
if(2>=b.length){q=A.a(b,2)
s=1
break A}b=b[2]
b.toString
B.a.m(b3,new A.p(A.X(b,null,null),d))}}B.a.D(b3,new A.uh())
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
return A.r(b1.c1(l),$async$bF)
case 11:k=b5.D6(b7,B.mH)
if(!J.Y(k.a.h(0,"deviceId"),e)||!J.Y(k.a.h(0,"epoch"),m)){s=5
break}s=12
return A.r(k.cV(a4),$async$bF)
case 12:a6=k.a.h(0,"ephemeral")
a6.toString
s=13
return A.r(A.mI(f,B.B.O(A.c(a6))),$async$bF)
case 13:j=b7
b5=a0
s=14
return A.r(k.cR(j),$async$bF)
case 14:a6=b5.a(b7)
i=a1.a(B.z.bj(new A.eR(!1).cv(a6,0,null,!0),null)).G(0,a2,a3)
if(!J.Y(J.at(i,"deviceId"),e)){s=5
break}a6=J.at(i,"epochs")
a6.toString
a6=J.dh(d.a(a6),b)
a7=a6.$ti
a6=new A.a7(a6,a6.gq(0),a7.i("a7<Q.E>"))
a7=a7.i("Q.E")
while(a6.n()){a8=a6.d
h=a8==null?a7.a(a8):a8
a8=J.at(h,"epoch")
a8.toString
A.O(a8)
a9=J.at(h,"key")
a9.toString
a.j(0,a8,new A.bq(new A.bt(B.B.O(A.c(a9)),!1),null))}q=B.ck
s=1
break
p=2
s=10
break
case 8:p=7
b4=o.pop()
if(A.aw(b4) instanceof A.hX){s=5
break}else throw b4
s=10
break
case 7:s=2
break
case 10:case 5:b3.length===g||(0,A.l)(b3),++a5
s=4
break
case 6:q=a.a===0?B.eg:B.eh
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bF,r)},
gjX(){var s=this.c
return new A.au(s,A.o(s).i("au<1>")).cS(0,new A.ug())},
bg(){var s=0,r=A.J(t.tU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$bg=A.K(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:c1=n.c
s=c1.a===0?3:4
break
case 3:case 5:s=10
return A.r(n.bF(),$async$bg)
case 10:switch(c5){case B.eg:s=7
break
case B.eh:s=8
break
case B.ck:s=9
break
default:s=6
break}break
case 7:q=B.dG
s=1
break
case 8:throw A.k(new A.cU())
case 9:s=6
break
case 6:case 4:h=n.a
s=11
return A.r(h.bl(),$async$bg)
case 11:g=c5
f=J.mT(g,$.H3().ghm())
e=A.B(f,f.$ti.i("h.E"))
B.a.D(e,new A.ui())
m=null
f=e.length,d=t.L,c=t.f,b=t.N,a=t.X,a0=n.b.c,a1=0
case 12:if(!(a1<e.length)){s=14
break}l=e[a1]
p=16
c3=A
s=19
return A.r(h.c1(l),$async$bg)
case 19:k=c3.D6(c5,B.mI)
s=20
return A.r(k.cV(a0),$async$bg)
case 20:j=A.aH(k.a.h(0,"epoch"))
i=c1.h(0,j)
s=i==null?21:22
break
case 21:s=23
return A.r(n.bF(),$async$bg)
case 23:if(c5!==B.ck){a2=new A.cU()
throw A.k(a2)}a3=c1.h(0,j)
if(a3==null)a3=A.f(new A.cU())
i=a3
case 22:c3=d
s=24
return A.r(k.cR(i),$async$bg)
case 24:a2=c3.a(c5)
m=c.a(B.z.bj(new A.eR(!1).cv(a2,0,null,!0),null)).G(0,b,a)
s=14
break
p=2
s=18
break
case 16:p=15
c2=o.pop()
if(A.aw(c2) instanceof A.hX){s=13
break}else throw c2
s=18
break
case 15:s=2
break
case 18:case 13:e.length===f||(0,A.l)(e),++a1
s=12
break
case 14:if(m==null){q=A.aD(n.e,t._)
s=1
break}m.h(0,"primary")
f=m.h(0,"generation")
f.toString
A.O(f)
if(f!==n.d){B.a.ap(n.e)
n.d=f}a2=n.e,f=A.Mm(g,f,a2.length),a5=f.length,a6=t.j,a7=t.mE,a8=t.Y,a1=0
case 25:if(!(a1<f.length)){s=27
break}a9=f[a1]
c3=A
s=28
return A.r(h.c1(a9.a),$async$bg)
case 28:k=c3.D6(c5,B.mJ)
s=29
return A.r(k.cV(a0),$async$bg)
case 29:b0=k.a
if(!J.Y(b0.h(0,"generation"),a9.b)||!J.Y(b0.h(0,"first"),a9.c)||!J.Y(b0.h(0,"last"),a9.d))throw A.k(A.f3("a segment is not what its name says"))
i=c1.h(0,b0.h(0,"epoch"))
c3=d
s=30
return A.r(k.cR(i==null?A.f(new A.cU()):i),$async$bg)
case 30:b1=c3.a(c5)
b2=c.a(B.z.bj(new A.eR(!1).cv(b1,0,null,!0),null)).G(0,b,a)
b1=A.b([],a8)
b3=b2.h(0,"ops")
b3.toString
b3=J.dh(a6.a(b3),a7)
b4=b3.$ti
b3=new A.a7(b3,b3.gq(0),b4.i("a7<Q.E>"))
b4=b4.i("Q.E")
while(b3.n()){b5=b3.d
b5=(b5==null?b4.a(b5):b5).G(0,b,a)
b6=b5.h(0,"key")
b6.toString
A.c(b6)
b7=b5.h(0,"deviceId")
b7.toString
A.c(b7)
b8=b5.h(0,"clock")
b8.toString
A.O(b8)
b9=b5.h(0,"type")
b9.toString
A.c(b9)
c0=b5.h(0,"payload")
c0.toString
c0=c.a(c0).G(0,b,a)
b5=b5.h(0,"createdAtUtc")
b5.toString
b1.push(new A.aj(b6,b7,b8,b9,c0,A.c1(A.c(b5)).F()))}if(b1.length!==a9.d-a9.c+1)throw A.k(A.f3("a segment is short"))
B.a.a1(a2,b1)
case 26:f.length===a5||(0,A.l)(f),++a1
s=25
break
case 27:q=A.aD(a2,t._)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bg,r)},
hx(){var s,r,q,p,o=A.B(this.e,t._)
B.a.a1(o,this.f)
s=o.length
r=0
q=0
for(;q<s;++q){p=o[q].c
if(p>r)r=p}return r+1},
c6(a){return this.ie(t.tU.a(a))},
ie(a0){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c6=A.K(function(a1,a2){if(a1===1)return A.G(a2,r)
for(;;)switch(s){case 0:c=p.c
if(c.a===0)throw A.k(new A.cU())
b=o=p.a
a=J
s=3
return A.r(o.bl(),$async$c6)
case 3:b,n=a.R(a2),m=p.b,l=m.a
case 4:if(!n.n()){s=5
break}k=n.gt()
j=$.H6().aj(k)
k=!1
if(j!=null){i=j.b
h=i.length
if(1>=h){q=A.a(i,1)
s=1
break}if(i[1]===l){if(2>=h){q=A.a(i,2)
s=1
break}k=i[2]
k.toString
k=A.X(k,null,null)>p.r}}if(k){k=j.b
if(2>=k.length){q=A.a(k,2)
s=1
break}k=k[2]
k.toString
p.r=A.X(k,null,null)}s=4
break
case 5:n=++p.r
g=p.gjX()
k=B.b.ac(B.d.k(n),10,"0")
i=t.N
h=t.X
n=A.S(["formatVersion",1,"deviceId",l,"n",n,"epoch",g],i,h)
f=A.b([],t.bk)
for(e=J.R(a0);e.n();){d=e.gt()
f.push(A.S(["key",d.a,"deviceId",d.b,"clock",d.c,"type",d.d,"payload",d.e,"createdAtUtc",d.f.F().dl()],i,h))}i=B.F.O(B.z.be(A.S(["ops",f],i,t.vG),null))
c=c.h(0,g)
c.toString
b=o
a="o-"+l+"-"+k+".sqo"
s=7
return A.r(A.hR(n,c,B.mK,i,m.b.b),$async$c6)
case 7:s=6
return A.r(b.c2(a,a2),$async$c6)
case 6:B.a.a1(p.f,a0)
case 1:return A.H(q,r)}})
return A.I($async$c6,r)},
cr(a,b,c,d){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$cr=A.K(function(e,a0){if(e===1)return A.G(a0,r)
for(;;)switch(s){case 0:if(p.c.a===0)throw A.k(new A.cU())
g=o=p.a
f=J
s=3
return A.r(o.bl(),$async$cr)
case 3:g,n=f.R(a0),m=p.b,l=m.a
case 4:if(!n.n()){s=5
break}k=n.gt()
j=$.H4().aj(k)
k=!1
if(j!=null){i=j.b
h=i.length
if(1>=h){q=A.a(i,1)
s=1
break}if(i[1]===l){if(2>=h){q=A.a(i,2)
s=1
break}k=i[2]
k.toString
k=A.X(k,null,null)>p.w}}if(k){k=j.b
if(2>=k.length){q=A.a(k,2)
s=1
break}k=k[2]
k.toString
p.w=A.X(k,null,null)}s=4
break
case 5:n=++p.w
g=o
f="x-"+l+"-"+B.b.ac(B.d.k(n),10,"0")+".sqx"
s=7
return A.r(A.hP(a,b,l,n,c,m.b.b,d),$async$cr)
case 7:s=6
return A.r(g.c2(f,a0),$async$cr)
case 6:case 1:return A.H(q,r)}})
return A.I($async$cr,r)},
gcW(){var s,r,q,p,o,n=A.a4(t.N)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q)n.m(0,s[q].a)
s=A.b([],t.Y)
for(r=this.f,p=r.length,q=0;q<r.length;r.length===p||(0,A.l)(r),++q){o=r[q]
if(!n.u(0,o.a))s.push(o)}return s},
cJ(){var s,r,q,p,o
for(s=this.c,r=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));r.n();){q=r.d
p=q.b
o=p.a
if(o!=null){p.a=null
if(p.b)A.Da(o)}q.ej()}s.ap(0)
B.a.ap(this.e)
B.a.ap(this.f)}}
A.uh.prototype={
$2(a,b){var s=t.jr
s.a(a)
return B.d.l(s.a(b).a,a.a)},
$S:167}
A.ug.prototype={
$2(a,b){A.O(a)
A.O(b)
return a>b?a:b},
$S:27}
A.ui.prototype={
$2(a,b){A.c(a)
return B.b.l(A.c(b),a)},
$S:35}
A.e0.prototype={
U(){return"SyncFileKind."+this.b}}
A.hX.prototype={
k(a){return"BadSyncFile: "+this.a}}
A.uj.prototype={
cV(a){return this.n8(t.L.a(a))},
n8(a){var s=0,r=A.J(t.H),q=this,p,o
var $async$cV=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=$.Dl()
o=A.B(q.b,t.S)
B.a.a1(o,q.d)
s=2
return A.r(p.bM(o,new A.fs(q.c,new A.bG(a,B.T))),$async$cV)
case 2:if(!c)throw A.k(A.f3("the signature does not match"))
return A.H(null,r)}})
return A.I($async$cV,r)},
cR(a){return this.mH(a)},
mH(a){var s=0,r=A.J(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cR=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:h=n.d
if(h.length<28)throw A.k(A.f3("the file is incomplete"))
p=4
l=$.Dk()
k=A.fy(h,28,null)
j=A.fy(h,0,12)
s=7
return A.r(l.bt(new A.eF(k,new A.d2(A.fy(h,12,28)),j),n.b,a),$async$cR)
case 7:m=c
h=t.p.b(m)?m:new Uint8Array(A.aK(m))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
if(A.aw(g) instanceof A.iX)throw A.k(A.f3("the file does not open with this key or was changed"))
else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cR,r)}}
A.ib.prototype={
bA(){var s=0,r=A.J(t.J),q,p=this,o,n,m
var $async$bA=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:o=t.D.i("bg.S")
m=o
s=3
return A.r(p.a.dY(),$async$bA)
case 3:n=m.a(b)
n=B.L.gaH().O(n)
m=o
s=4
return A.r(p.b.dY(),$async$bA)
case 4:o=m.a(b)
q=A.S(["x25519",n,"ed25519",B.L.gaH().O(o)],t.N,t.X)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bA,r)}}
A.iv.prototype={
N(){var s=this,r=t.D.i("bg.S"),q=r.a(s.d)
q=B.L.gaH().O(q)
r=r.a(s.e)
return A.S(["id",s.a,"name",s.b,"kind",s.c,"x25519",q,"ed25519",B.L.gaH().O(r),"approvedAtUtc",s.f.F().dl()],t.N,t.X)}}
A.lD.prototype={}
A.uk.prototype={
eR(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="deviceId",g=a.e
switch(a.d){case"sync.switch":s=g.h(0,"on")
s.toString
A.cO(s)
return i
case"sync.epoch":s=g.h(0,"generation")
s.toString
A.O(s)
r=g.h(0,"epoch")
r.toString
A.O(r)
q=j.b
p=q.length===0?i:B.a.gak(q)
o=p==null
n=o?i:p.b
if(r!==(n==null?0:n)+1){s=o?i:p.b
if(s==null)s=0
return"epoch "+r+" does not follow "+s}if(!o&&s<p.a)return"generation "+s+" is older"
o=g.h(0,"salt")
o.toString
B.B.O(A.c(o))
B.a.m(q,new A.lD(s,r));++j.e
return i
case"sync.primary":s=g.h(0,h)
s.toString
A.c(s)
m=j.c.h(0,s)
if(m==null||m.r!=null||m.c!=="phone")return"no approved phone "+s
if(s===j.f)return"phone "+s+" is the primary already"
j.f=s;++j.r;++j.e
return i
case"sync.device":s=g.h(0,h)
s.toString
A.c(s)
r=g.h(0,"atUtc")
r.toString
l=A.c1(A.c(r)).F()
switch(g.h(0,"action")){case"approve":r=j.c
if(r.E(s)||j.d.u(0,s))return"device "+s+" was already answered"
q=g.h(0,"name")
q.toString
A.c(q)
o=g.h(0,"kind")
o.toString
A.c(o)
n=g.h(0,"x25519")
n.toString
n=B.B.O(A.c(n))
k=g.h(0,"ed25519")
k.toString
r.j(0,s,new A.iv(s,q,o,n,B.B.O(A.c(k)),l,i))
break
case"refuse":if(j.c.E(s))return"device "+s+" is approved; remove it instead"
j.d.m(0,s)
break
case"remove":r=j.c
m=r.h(0,s)
if(m==null||m.r!=null)return"no approved device "+s
r.j(0,s,new A.iv(m.a,m.b,m.c,m.d,m.e,m.f,l))
break
default:return"unknown device action "+A.i(g.h(0,"action"))}++j.e
return i}return"not a sync operation"}}
A.iY.prototype={}
A.i0.prototype={}
A.zV.prototype={
$1(a){return A.NR(this.a,t.b.a(a),this.b,this.c)},
$S:2}
A.AY.prototype={
$0(){var s,r=this,q=r.a,p=A.Gh(q.a,q.b,r.b),o=p.a,n=p.b
q=r.c
s=r.d
return new A.eP([o,n,A.Gi(q,s,n,o),A.FN(q,s,r.e,n,o)])},
$S:168}
A.AZ.prototype={
$1(a){return t.nr.a(a).a[2]},
$S:169}
A.B_.prototype={
$1(a){return t.hf.a(a).a[0]},
$S:170}
A.B0.prototype={
$2(a,b){return t.B.a(a).B(0,t.hf.a(b).a[2])},
$S:171}
A.bD.prototype={}
A.n7.prototype={
eM(a){t.aD.a(a)
return B.a.a4(this.a,A.a3($.L(),this.b),new A.n8(a),t.B)},
glc(){return this.eM(new A.n9())},
gi8(){return this.eM(new A.nc())},
gmK(){var s=this.a
return s.length===0||B.a.gY(s).d==null?null:this.eM(new A.nb())},
ghy(){var s=this.a,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.na()),r.i("n<1>")).gq(0)}}
A.n8.prototype={
$2(a,b){return t.B.a(a).B(0,this.a.$1(t.ta.a(b)))},
$S:172}
A.n9.prototype={
$1(a){return a.b},
$S:51}
A.nc.prototype={
$1(a){return a.c},
$S:51}
A.nb.prototype={
$1(a){var s=a.d
s.toString
return s},
$S:51}
A.na.prototype={
$1(a){t.ta.a(a)
return a.c.a.l(0,a.b.a)>0},
$S:174}
A.wj.prototype={
$2(a,b){var s=t.ta
s.a(a)
s.a(b)
s=this.a
return B.b.l(A.Fr(s,a.a),A.Fr(s,b.a))},
$S:175}
A.dC.prototype={
gdk(){var s=this.b
return s==null?null:this.a.c.aa(0,s)},
gmL(){return this.gdk()!=null&&this.gdk().a.l(0,$.L())<=0},
ghA(){var s,r,q=this
if(q.gdk()==null||q.gmL()||q.d===0)s=null
else{s=q.gdk().a
r=A.aC(q.d)
r=A.a3(A.El(s.gbV().ds(0,new A.P(r,0).gbV()),10).c9(2,B.ek),q.gdk().b)
s=r}return s}}
A.zb.prototype={
$2(a,b){var s=t.AK
return s.a(a).a.d.l(0,s.a(b).a.d)},
$S:176}
A.k8.prototype={}
A.le.prototype={}
A.co.prototype={
U(){return"RecurringMark."+this.b}}
A.iW.prototype={}
A.eE.prototype={
U(){return"RewardUnit."+this.b}}
A.fr.prototype={
N(){var s,r=this,q=r.b.k(0),p=r.c
p=p==null?null:p.N()
s=r.d
s=s==null?null:s.k(0)
return A.S(["categoryId",r.a,"rate",q,"capSpend",p,"capEarn",s],t.N,t.X)}}
A.lq.prototype={}
A.uo.prototype={
ld(a,b,c,d){var s,r,q,p,o,n=c*12+d
for(s=this.b,r=s.length,q=null,p=0;p<r;++p){o=s[p]
if(o.a!==a||o.b!==b||o.d*12+o.e>n)continue
if(q==null||o.d*12+o.e>=q.d*12+q.e)q=o}return q==null?null:q.c},
le(a,b,c){var s,r,q,p,o,n=t.N,m=A.w(n,t.B)
n=A.a4(n)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(p.a===a)n.m(0,p.b)}n=A.ea(n,n.r,n.$ti.c)
s=n.$ti.c
while(n.n()){r=n.d
if(r==null)r=s.a(r)
o=this.ld(a,r,b,c)
if(o!=null)m.j(0,r,o)}return m}}
A.w8.prototype={
$1(a){return typeof a=="string"?A.a5(this.a.d,t.N,t.G).h(0,a):null},
$S:177}
A.w9.prototype={
$1(a){return t.r.a(a).b===this.a.h(0,"flag")},
$S:69}
A.wa.prototype={
$1(a){return t.fK.a(a).b===this.a.h(0,"as")},
$S:178}
A.wb.prototype={
$1(a){return t.fC.a(a).a==null},
$S:179}
A.b_.prototype={}
A.lA.prototype={}
A.dj.prototype={
iw(a,b,c,d){var s,r,q,p,o,n=this,m=A.b([],t.g)
for(s=n.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(!p.Q&&p.at!=null){o=p.at
o.toString
m.push(o)}}s=m.length
n.d!==$&&A.GC()
n.d=s
m=s===0?null:A.aN(B.a.a4(m,A.a3($.L(),c),new A.mU(),t.B),d)
n.c!==$&&A.GC()
n.c=m},
gf8(){var s=this.b,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.mV()),r.i("n<1>")).gq(0)}}
A.mU.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:24}
A.mV.prototype={
$1(a){return!t.V.a(a).Q},
$S:11}
A.dR.prototype={}
A.mX.prototype={}
A.wm.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=A.NY(f,a,g.c,g.b.F()),d=e.c,c=A.b([],t.s)
for(s=a.a,f=A.N9(f,s),r=f.length,q=0;q<f.length;f.length===r||(0,A.l)(f),++q){p=f[q]
o=p.a-1
if(!(o>=0&&o<12))return A.a(B.l,o)
c.push(B.l[o]+" "+p.b)}f=A.aY(a)
r=a.d
if(r===B.o)r=A.Gc(a)
else{r=B.kU.h(0,r)
r.toString}o=e.b
n=o==null?null:A.aN(o,g.d)
m=d==null
if(m)l="No statement yet"
else{l=g.e
l="Statement to "+A.cv(d,l)+", "+A.FF(d,l)}m=!m
k=m&&e.f
j=e.w
if(j===0)j=null
else{i=j===1?"":"s"
h=g.d
h=""+j+" alert"+i+": "+A.aN(e.x,h)+" out, "+A.aN(e.y,h)+" in"
j=h}g.f.h(0,s)
i=a.CW!=null
if(i)m=null
else{m=m&&e.f
m=A.LS(d,c,m,g.e)}return new A.b_(s,f,r,n,l,k,j,c,i,m,o,d)},
$S:181}
A.wk.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d!==B.x},
$S:2}
A.wl.prototype={
$2(a,b){var s=t.b
s.a(a)
s.a(b)
s=a.CW!=null
if(s!==(b.CW!=null))s=s?1:-1
else s=B.b.l(a.b,b.b)
return s},
$S:8}
A.xz.prototype={
$2(a,b){var s=t.v
s.a(a)
return s.a(b).d.l(0,a.d)},
$S:26}
A.kH.prototype={
ka(){var s=new A.am($.ak,t.oX),r=new A.cN(s,t.Ck),q=A.v(A.v(A.v(v.G.window).indexedDB).open("santhiq-page",1))
q.onupgradeneeded=A.bl(new A.nY(q))
q.onsuccess=A.bl(new A.nZ(r,q))
q.onerror=A.bl(new A.o_(r))
return s},
ct(a){var s=new A.am($.ak,t.nR),r=new A.cN(s,t.le)
a.onsuccess=A.bl(new A.nW(r,a))
a.onerror=A.bl(new A.nX(r))
return s},
bT(a){var s=0,r=A.J(t.m),q,p=this,o,n
var $async$bT=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=3
return A.r(p.ka(),$async$bT)
case 3:q=o.v(n.v(c.transaction("keep",a)).objectStore("keep"))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bT,r)},
bD(){var s=0,r=A.J(t.m),q,p=this,o,n,m
var $async$bD=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:m=A
s=4
return A.r(p.bT("readonly"),$async$bD)
case 4:s=3
return A.r(p.ct(m.v(b.get("wrap"))),$async$bD)
case 3:n=b
if(n!=null){q=A.v(n)
s=1
break}s=5
return A.r(A.bK(A.v(A.v(A.v(A.v(v.G.window).crypto).subtle).generateKey($.GQ(),!1,A.b(["encrypt","decrypt"],t.s))),t.X),$async$bD)
case 5:o=b
o.toString
A.v(o)
m=A
s=7
return A.r(p.bT("readwrite"),$async$bD)
case 7:s=6
return A.r(p.ct(m.v(b.put(o,"wrap"))),$async$bD)
case 6:q=o
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bD,r)},
c0(){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b
var $async$c0=A.K(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:p=4
e=A
s=8
return A.r(n.bT("readonly"),$async$c0)
case 8:s=7
return A.r(n.ct(e.v(a0.get("data"))),$async$c0)
case 7:m=a0
if(m==null){q=null
s=1
break}l=A.b(A.c(m).split("."),t.s)
k=B.B.O(J.at(l,0))
j=B.B.O(J.at(l,1))
e=A
d=A
c=A.v(A.v(A.v(v.G.window).crypto).subtle)
b=A.C5(A.S(["name","AES-GCM","iv",k],t.N,t.K))
s=10
return A.r(n.bD(),$async$c0)
case 10:s=9
return A.r(e.bK(d.v(c.decrypt(b,a0,j)),t.X),$async$c0)
case 9:i=a0
h=i
h.toString
h=B.R.cb(A.iI(t.i.a(h),0,null))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
s=11
return A.r(n.ap(0),$async$c0)
case 11:q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$c0,r)},
cn(a){var s=0,r=A.J(t.H),q=this,p,o,n,m,l,k,j,i
var $async$cn=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=new Uint8Array(12)
m=v.G
A.v(A.v(A.v(m.window).crypto).getRandomValues(n))
l=A
k=A
j=A.v(A.v(A.v(m.window).crypto).subtle)
i=A.C5(A.S(["name","AES-GCM","iv",n],t.N,t.K))
s=3
return A.r(q.bD(),$async$cn)
case 3:s=2
return A.r(l.bK(k.v(j.encrypt(i,c,B.F.O(a))),t.X),$async$cn)
case 2:p=c
m=t.D.i("bg.S")
m.a(n)
o=B.L.gaH().O(n)
p.toString
m=m.a(A.iI(t.i.a(p),0,null))
m=B.L.gaH().O(m)
l=A
s=5
return A.r(q.bT("readwrite"),$async$cn)
case 5:s=4
return A.r(q.ct(l.v(c.put(o+"."+m,"data"))),$async$cn)
case 4:return A.H(null,r)}})
return A.I($async$cn,r)},
ap(a){var s=0,r=A.J(t.H),q=1,p=[],o=this,n,m,l
var $async$ap=A.K(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.r(o.bT("readwrite"),$async$ap)
case 6:n=c
s=7
return A.r(o.ct(A.v(n.delete("data"))),$async$ap)
case 7:s=8
return A.r(o.ct(A.v(n.delete("wrap"))),$async$ap)
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
$iIs:1}
A.nY.prototype={
$1(a){A.v(a)
return A.v(A.v(this.a.result).createObjectStore("keep"))},
$S:182}
A.nZ.prototype={
$1(a){A.v(a)
return this.a.cG(A.v(this.b.result))},
$S:13}
A.o_.prototype={
$1(a){A.v(a)
return this.a.dS(new A.dY(u.p))},
$S:13}
A.nW.prototype={
$1(a){A.v(a)
return this.a.cG(this.b.result)},
$S:13}
A.nX.prototype={
$1(a){A.v(a)
return this.a.dS(new A.dY(u.p))},
$S:13}
A.vO.prototype={
$2(a,b){return this.a.setAttribute(A.c(a),A.i(A.df(b)))},
$S:184}
A.vP.prototype={
$1(a){return A.O(a)*this.a},
$S:53}
A.vQ.prototype={
$1(a){return A.CD(a)>=this.a},
$S:186}
A.xW.prototype={
$1(a){return a===B.G.mV(a)?B.G.bm(a,0):B.G.bm(a,1)},
$S:41}
A.vr.prototype={
$1(a){var s=this.a.a
return 12+(s-a)/(s-this.b)*220},
$S:188}
A.ze.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:53}
A.zo.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:53}
A.bd.prototype={
U(){return"_View."+this.b}}
A.wi.prototype={
$2(a,b){return this.a.append(A.c(a),A.c(b))},
$S:189}
A.lc.prototype={
iy(a){var s=this,r=v.G,q=A.aO(new A.n(B.dO,t.aX.a(new A.rW(B.b.fc(A.c(A.v(A.v(r.window).location).hash),"#",""))),t.i0),t.sn)
s.ax=q==null?B.cr:q
A.FA(s.x)
s.b.onmessage=A.bl(new A.rX(s))
A.v(r.window).addEventListener("pagehide",A.bl(new A.rY(s)))
A.Jy(B.f1,new A.rZ(s))},
gca(){var s=this.as
return s===$?this.as=A.aF(new A.aa(Date.now(),0,!1).F(),B.q).a:s},
gc8(){var s=this.at
return s===$?this.at=A.aF(new A.aa(Date.now(),0,!1).F(),B.q).b:s},
iQ(a){var s,r,q,p=this,o=a.data
if(o!=null)s=!(typeof o==="string")
else s=!0
if(s)return
r=A.Nv(A.c(o),p.c)
q=p.c=null
A:{if(r instanceof A.iJ)return
s=r instanceof A.eH
if(s)q=r.a
if(s){p.a.ay=q
p.ad()
break A}if(r instanceof A.hn)p.ai(t.U.a(new A.pp(p,r)))}},
kI(){var s,r,q,p=A.Lg()
this.c=p
s=this.a
r=s.c
q=A.jB("https","accounts.google.com","/o/oauth2/v2/auth",A.S(["client_id",r.a,"redirect_uri",r.b,"response_type","token","scope",B.a.Z(B.dC," "),"state",p,"include_granted_scopes","false","prompt","select_account"],t.N,t.z))
if(A.ar(A.v(v.G.window).open(q.gdO(),"santhiq-sign-in","popup,width=500,height=650"))==null){s.ay="The sign-in window was blocked. Allow pop-ups for this page and try again."
this.ad()}},
ai(a){return this.kz(t.U.a(a))},
kz(a){var s=0,r=A.J(t.H),q,p=2,o=[],n=[],m=this
var $async$ai=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(m.e){s=1
break}m.e=!0
m.ad()
p=3
s=6
return A.r(a.$0(),$async$ai)
case 6:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
m.e=!1
m.ad()
s=n.pop()
break
case 5:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$ai,r)},
ke(){var s,r,q,p=this
if(p.e)return
s=p.a
r=s.cx
if(r!==B.bZ)q=r===B.av&&new A.aa(Date.now(),0,!1).dX(p.f).a>12e7
else q=!0
if(!q)return
p.f=new A.aa(Date.now(),0,!1)
p.ai(t.U.a(s.gfb()))},
H(a,b,c){var s=A.v(A.v(v.G.document).createElement(a))
if(c!=null)s.textContent=c
if(b!=null)s.className=b
return s},
V(a){return this.H(a,null,null)},
K(a,b){return this.H(a,null,b)},
W(a,b){return this.H(a,b,null)},
dF(a,b,c,d){var s,r
t.O.a(b)
s=this.H("button",c,a)
s.type="button"
r=d||this.e
s.disabled=r
s.addEventListener("click",A.bl(new A.px(b)))
return s},
aR(a,b,c){return this.dF(a,b,c,!1)},
ar(a,b){return this.dF(a,b,null,!1)},
el(a,b,c){return this.dF(a,b,null,c)},
ad(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="div",a9="p",b0=A.ar(A.v(v.G.document).querySelector("#app"))
b0.toString
b0.textContent=""
s=a7.V("header")
s.append(a7.K("h1","SanthIQ"))
r=a7.a
q=r.z
p=q==null?null:q.b
if(p!=null)s.append(a7.H("span","quiet",p))
if(r.cx===B.av){o=!r.ch
q=o?"Hide amounts":"Show amounts"
n=a7.aR(q,new A.t_(a7,o),"eye")
n.setAttribute("aria-pressed",""+o)
n.prepend(A.CF(o?"eye":"eye-off"))
m=a7.W(a8,"mode")
m.setAttribute("role","group")
for(q=[B.lS,B.m8],l=0;l<2;++l){k={}
j=q[l]
i=k.a=null
h=j.a
k.a=h
if(h===r.CW)i="on"
i=a7.aR(j.b,new A.t0(k,a7),i)
i.setAttribute("aria-pressed",""+(k.a===r.CW))
m.append(i)}s.append(n)
s.append(m)}g=B.bR[B.d.R(B.a.by(B.bR,a7.x)+1,3)]
f=a7.x
A:{if("light"===f){q="Light"
break A}if("dark"===f){q="Dark"
break A}q="System theme"
break A}q=a7.aR(q,new A.t1(a7,g),"theme")
q.title="Colour theme; click for "+(g==="system"?"the system's":g)
e=a7.x
B:{if("light"===e){k="sun"
break B}if("dark"===e){k="moon"
break B}k="monitor"
break B}q.prepend(A.CF(k))
s.append(q)
b0.append(s)
if(r.cx===B.av&&r.CW){q=a7.W(a8,"editing")
q.append(a7.K("span","Changes allowed: what you send from this page goes to the phone on its next sync."))
q.append(a7.ar("Stop allowing changes",new A.t2(a7)))
b0.append(q)}d=r.ay
if(d!=null)b0.append(a7.H(a9,"problem",d))
c=a7.r
if(c!=null)b0.append(a7.H(a9,"said",c))
if(a7.e)b0.append(a7.H(a9,"quiet","Working\u2026"))
switch(r.cx.a){case 0:b0.append(a7.K(a9,r.f!=null?"This browser is approved. Sign in to Google to open SanthIQ.":"SanthIQ for this computer. Once the phone approves this browser it stays approved until you remove it on the phone or press Forget this browser."))
b0.append(a7.aR("Sign in with SanthIQ's Google account",a7.gkH(),"primary"))
break
case 1:a7.jo(b0)
break
case 2:b0.append(a7.K("h2","Waiting for the phone"))
b0.append(a7.K(a9,"On the phone: Settings, Devices. Check the code matches, then Approve."))
r=r.as
if(r==null)r=null
else{r=r.b.b
q=A.B(r.c,t.S)
B.a.a1(q,r.d)
b=B.aH.O(q).a
r=b.length
if(0>=r)return A.a(b,0)
q=b[0]
if(1>=r)return A.a(b,1)
k=b[1]
if(2>=r)return A.a(b,2)
j=b[2]
if(3>=r)return A.a(b,3)
a=B.b.ac(B.d.k(B.d.R((q<<24|k<<16|j<<8|b[3])>>>0,1e6)),6,"0")
j=B.b.X(a,0,3)+" "+B.b.ae(a,3)
r=j}b0.append(a7.H(a9,"code",r==null?"":r))
b0.append(a7.ar("Look again now",new A.t3(a7)))
break
case 3:a0=a7.W("nav","side")
a0.setAttribute("aria-label","Views")
for(q=a7.ay,a1=a0,a2=null,l=0;l<12;++l){a3=B.dO[l]
a4=a3.d
if(a4!==a2){a1=a7.W(a8,a4==="Settings"?"side-box bottom":"side-box")
a0.append(a1)
if(a4.length!==0){a5=q.u(0,a4)&&a7.ax.d!==a4
k=a7.aR((a5?"\u25b8":"\u25be")+" "+a4,new A.t4(a7,a4),"side-group")
k.setAttribute("aria-expanded",""+!a5)
a1.append(k)
if(a5){a2=a4
continue}}a2=a4}else if(q.u(0,a4)&&a7.ax.d!==a4)continue
k=a3===a7.ax?"tab on":"tab"
k=a7.aR(a3.c,new A.t5(a7,a3),k)
k.prepend(A.CF(a3.e))
j=a3===a7.ax?"page":"false"
k.setAttribute("aria-current",j)
a1.append(k)}a6=a7.W(a8,"content")
q=a7.W(a8,"shell")
q.append(a0)
q.append(a6)
b0.append(q)
switch(a7.ax.a){case 0:a7.jr(a6)
break
case 1:a7.jj(a6)
break
case 3:a7.jq(a6)
break
case 2:a7.jy(a6)
break
case 4:a7.jn(a6)
break
case 5:a7.jx(a6)
break
case 6:a7.jl(a6)
break
case 8:a7.jt(a6)
break
case 9:a7.ju(a6)
break
case 7:a7.jm(a6)
break
case 10:a7.jp(a6)
break
case 11:a7.jk(a6)
a7.jw(a6)
a7.jv(a6)
if(r.CW)a7.js(a6)
break}break
case 4:b0.append(a7.K(a9,"This browser was removed on the phone."))
break}},
jo(a){var s,r=this,q=r.V("form"),p=A.v(A.v(v.G.document).createElement("input"))
p.type="password"
p.autocomplete="off"
p.id="passphrase"
p.required=!0
s=r.K("label","SanthIQ's passphrase")
s.setAttribute("for","passphrase")
q.append(s)
q.append(p)
s=r.H("button","primary","Ask the phone to let this browser in")
s.type="submit"
s.disabled=r.e
q.append(s)
q.append(r.H("p","quiet","The passphrase opens the key in this tab for a moment to seal the request, and is then dropped. It is never sent or kept."))
q.addEventListener("submit",A.bl(new A.qe(r,p)))
a.append(r.K("h2","Join"))
a.append(q)},
jr(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="p",b6="quiet",b7="section",b8="quiet small",b9=b4.a,c0=b9.at
c0.toString
s=b4.gca()
r=b4.gc8()-1
if(!(r>=0&&r<12))return A.a(B.V,r)
c1.append(b4.iW(B.V[r]+" "+s))
q=new A.aa(Date.now(),0,!1).F()
s=b4.w
r=b4.gca()
p=b4.gc8()
o=b9.c
n=o.c
o=o.d
m=A.M5(c0,s,n,b9.ch,p,q,o,r)
c1.append(b4.H(b5,b6,b4.iY(c0,b4.w)))
for(s=m.c,r=s.length,p=t.s,l=0;l<s.length;s.length===r||(0,A.l)(s),++l){k=s[l]
j=b4.W(b7,"region-overview")
i=k.a
j.append(b4.K("h2",A.eh(i)+" ("+i+")"))
h=b4.W("div","kpis")
for(g=k.b,f=0;f<4;++f){e=g[f]
d=b4.W("div","kpi "+e.d.b)
d.append(b4.H("span","kpi-label",e.a))
c=e.b
b=c==null
if(b)c="Not known yet"
d.append(b4.H("strong",b?"kpi-value none":"kpi-value",c))
d.append(b4.K("small",e.c))
h.append(d)}j.append(h)
a=k.c
if(a!=null){j.append(b4.K("h3","Cash forecast, next 31 days"))
if(b9.ch)j.append(b4.H(b5,b6,"The forecast shows once amounts are shown."))
else{g=new A.aa(Date.now(),0,!1).F()
d=g.F()
g.F()
a0=d.aw(288e8)
d=A.b1(a0)
g=A.b5(a0)
c=A.av(a0)
b=A.b([],p)
for(a1=0;a1<a.length;++a1){if(a1===0)a2="Today"
else if(B.d.R(a1,7)===0){a2=864e8*a1
a2=""+A.av(A.az(d,g,c).aw(a2))+"/"+A.b5(A.az(d,g,c).aw(a2))}else a2=""
b.push(a2)}g=$.L()
a3=B.e.h(0,i)
if(a3==null)A.f(A.x(i,"currency","is not a supported currency"))
if((g.b<=0?0:Math.max(g.gv().b,0))>a3)A.f(A.z(i+" allows "+A.i(a3)+" decimal places",g.k(0),null))
i=A.aN(new A.q(g,i),!1)
g=A.D("[\\d.,]",!0,!1)
j.append(A.G6("Cash forecast",b,a,!1,new A.qs(k),A.ao(i,g,"")))}}i=k.d
if(i!=null)j.append(b4.H(b5,b8,i))
c1.append(j)}a4=b4.W(b7,"health")
s=m.d
a4.append(b4.K("h2",s.length===0?"Financial health: nothing needs you":"Financial health"))
a5=new A.qv(b4)
for(r=t.S,i=A.F(s).c,g=A.bz(s,0,A.cP(3,"count",r),i),d=g.$ti,g=new A.a7(g,g.gq(0),d.i("a7<a2.E>")),d=d.i("a2.E");g.n();){c=g.d
a4.append(a5.$1(c==null?d.a(c):c))}if(s.length>3){a6=b4.W("details","more")
a6.append(b4.K("summary","Show "+(s.length-3)+" more"))
for(s=A.bz(s,3,null,i),i=s.$ti,s=new A.a7(s,s.gq(0),i.i("a7<a2.E>")),i=i.i("a2.E");s.n();){g=s.d
a6.append(a5.$1(g==null?i.a(g):g))}a4.append(a6)}c1.append(a4)
a7=b4.V(b7)
a7.append(b4.K("h2","Payments due in the next 30 days"))
s=m.e
if(s.length===0)a7.append(b4.H(b5,b6,"No card bill or loan instalment is due."))
else{a8=b4.aF(A.b(["Due","Account","What","Amount"],p),B.aa)
for(s=A.bz(s,0,A.cP(6,"count",r),A.F(s).c),r=s.$ti,s=new A.a7(s,s.gq(0),r.i("a7<a2.E>")),r=r.i("a2.E");s.n();){i=s.d
if(i==null)i=r.a(i)
g=A.ar(a8.querySelector("tbody"))
g.toString
d=i.r
c=i.a
if(d)c+=", overdue"
b=i.b
a2=i.c
i=i.e
i=A.b([c,b,a2,i==null?"Not known":i],p)
g.append(b4.bB(i,d?"attention":null,B.aa))}a7.append(a8)
a7.append(b4.ar("All payments due",new A.qt(b4)))}c1.append(a7)
s=b4.w
r=b4.gca()
p=b4.gc8()
a9=A.M4(c0,s,b9.ax,n,b9.ch,p,q,o,r)
b0=b4.W("details","card month-detail")
b0.append(b4.K("summary",a9.b+" in detail: money in, spent and by category"))
b1=b4.W("ul","notes")
for(b9=a9.d,c0=b9.length,l=0;l<b9.length;b9.length===c0||(0,A.l)(b9),++l)b1.append(b4.K("li",b9[l]))
b0.append(b1)
for(b9=a9.e,c0=b9.length,s=m.b,l=0;l<b9.length;b9.length===c0||(0,A.l)(b9),++l){k=b9[l]
r=k.a
b0.append(b4.K("h3",A.eh(r)+" ("+r+")"))
for(r=k.b,f=0;f<3;++f){b2=r[f]
b0.append(b4.fX(b2.a,b2.b,b2.c))}for(r=k.e,p=r.length,f=0;f<r.length;r.length===p||(0,A.l)(r),++f)b0.append(b4.H(b5,b8,r[f]))
r=k.d
if(r!=null){b0.append(b4.H(b5,b6,r))
if(s)b0.append(b4.ar("See the last complete month",new A.qu(b4)))}for(r=k.c,p=r.length,f=0;f<r.length;r.length===p||(0,A.l)(r),++f){b3=r[f]
b0.append(b4.fX(b3.a,b3.b,b3.c))}}c1.append(b0)},
iY(a,b){var s,r=a.aG(b)
if(r==null)r="personal"
A:{if("company"===r){s="a company book: its own accounts and invoices"
break A}if("property"===r){s="the property book: rent, its costs and taxes"
break A}if("member"===r){s="a household member's own book"
break A}s="your personal book"
break A}return A.fG(b,a)+" is "+s+". Books are kept apart and never added together, and Singapore and India figures are never added to each other."},
eJ(){var s=this.a.at.gcE(),r=A.o(s).i("au<1>"),q=A.B(new A.au(s,r),r.i("h.E"))
if(!B.a.u(q,this.w))this.w=q.length===0?"personal":B.a.gY(q)
return q},
dE(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="span"
t.a.a(a2)
s=a.a
r=s.at
r.toString
q=a.eJ()
p=a.W("nav","books")
for(o=q.length,n=r.f,m=0;m<q.length;q.length===o||(0,A.l)(q),++m){l=q[m]
k=n.h(0,l)
if(k==null)k=l==="personal"?"personal":null
A:{if("company"===k){j="Company"
break A}if("property"===k){j="Property"
break A}if("member"===k){j="Member"
break A}j=null
break A}i=A.fG(l,r)
h=l===a.w?"tab book on":"tab book"
g=a.aR(i,new A.ps(a,l),h)
if(j!=null)g.append(a.H("small","book-kind",j))
p.append(g)}f=s.ax
p.append(a.W(a0,"grow"))
s=a.H(a0,"quiet",f==null?"Nothing published yet":"As of "+A.Gg(f))
s.setAttribute("title","Changes made on the phone since show after its next sync.")
p.append(s)
p.append(a.ar("Get the latest",new A.pt(a)))
e=a.W("div","bars")
e.append(p)
s=a1==null
if(!s||a2.length>1){d=a.W("nav","sub")
s=!s
if(s){c=a.gca()===A.aF(new A.aa(Date.now(),0,!1).F(),B.q).a&&a.gc8()===A.aF(new A.aa(Date.now(),0,!1).F(),B.q).b
r=a.aR("\u2039",new A.pu(a),"step")
r.setAttribute("aria-label","Earlier")
d.append(r)
d.append(a.K("strong",a1))
r=a.dF("\u203a",new A.pv(a),"step",c)
r.setAttribute("aria-label","Later")
d.append(r)}if(a2.length>1){if(s)d.append(a.W(a0,"gap"))
for(s=a2.length,m=0;m<a2.length;a2.length===s||(0,A.l)(a2),++m){b=a2[m]
r=A.eh(b)
o=b===a.y?"tab on":"tab"
d.append(a.aR(r+" ("+b+")",new A.pw(a,b),o))}}e.append(d)}return e},
iX(a){return this.dE(null,a)},
c7(){return this.dE(null,B.c)},
iW(a){return this.dE(a,B.c)},
aF(a,b){var s,r,q,p,o,n,m,l=this
t.a.a(a)
t.L.a(b)
s=l.V("table")
r=l.V("tr")
for(q=A.bE(a,0,t.N),p=J.R(q.a),o=q.b,q=new A.as(p,o,A.o(q).i("as<1>"));q.n();){n=q.c
n=n>=0?new A.p(o+n,p.gt()):A.f(A.ai())
m=B.a.u(b,n.a)?"amount":null
r.append(l.H("th",m,n.b))}q=l.V("thead")
q.append(r)
s.append(q)
s.append(l.V("tbody"))
return s},
dN(a){return this.aF(a,B.A)},
bB(a,b,c){var s,r,q,p,o,n
t.a.a(a)
t.L.a(c)
s=this.W("tr",b)
for(r=A.bE(a,0,t.N),q=J.R(r.a),p=r.b,r=new A.as(q,p,A.o(r).i("as<1>"));r.n();){o=r.c
o=o>=0?new A.p(p+o,q.gt()):A.f(A.ai())
n=B.a.u(c,o.a)?"amount":null
s.append(this.H("td",n,o.b))}return s},
fB(a){return this.bB(a,null,B.A)},
bc(a,b){return this.bB(a,null,b)},
jj(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a,b4=b3.at
b4.toString
b5.append(b2.c7())
s=b2.w
r=new A.aa(Date.now(),0,!1).F()
for(s=A.CK(b4,s,b3.ch,r,b3.c.d).b,r=s.length,q=t.s,p=b4.r.a,o=0;o<s.length;s.length===r||(0,A.l)(s),++o){n=s[o]
m=b2.V("section")
l=n.a
m.append(b2.K("h2",A.eh(l)+" ("+l+")"))
for(l=n.b,k=l.length,j=0;j<l.length;l.length===k||(0,A.l)(l),++j){i=l[j]
h=i.b
m.append(b2.K("h3",i.a.c+" ("+h.length+")"))
g=i.c
g===$&&A.mN()
f=g==null
if(f)e=null
else{e=i.d
e===$&&A.mN()
d=e===1?"":"s"
d=g+" over "+e+" account"+d+" with a balance"
e=d}if(e!=null){if(f)g=null
else{f=i.d
f===$&&A.mN()
e=f===1?"":"s"
e=g+" over "+f+" account"+e+" with a balance"
g=e}m.append(b2.H("p","total-line","Total: "+A.i(g)))}c=B.a.M(h,new A.py())
g=A.b(["Account","Kind","Balance","As of"],q)
if(c)g.push("Missing months")
g.push("Alerts")
b=b2.aF(g,B.aX)
b.className="accounts"
f=A.ar(b.querySelector("tbody"))
f.toString
for(e=h.length,a=0;a<h.length;h.length===e||(0,A.l)(h),++a){a0=h[a]
d=a0.Q?" (closed)":""
a1=a0.f
if(a1==null)a1="No balance yet"
a2=A.D(", \\d+ days? ago$",!0,!1)
d=A.b([a0.b+d,a0.d,a1,A.D8(a0.r,a2,"",0)],q)
if(c){a1=a0.y
d.push(a1.length===0?"":B.a.Z(a1,", "))}d.push("")
a1=A.b([],q)
a2=a0.a
if(a2===b2.ch)a1.push("open")
a1.push("click")
a3=b2.bB(d,B.a.Z(a1," "),B.aX)
a4=a0.as
if(a4!=null){d=A.D("^Out of date: statement to [^.]*",!0,!1)
a5=A.D8(a4,d,"Out of date",0)
d=A.ar(A.v(a3.children).item(3))
d.toString
a1=b2.H("span","state warn",B.a.gY(a5.split(".")))
a1.setAttribute("title",a4)
d.append(a1)}a6=a0.x
if(a6!=null){d=A.ar(A.v(a3.children).item(g.length-1))
d.toString
a1=b2.H("span","state info",B.a.gY(a6.split(":")))
a1.setAttribute("title",a6)
d.append(a1)}a3.addEventListener("click",A.bl(new A.pz(b2,a0)))
f.append(a3)
if(a2!==b2.ch)continue
d=new A.aa(Date.now(),0,!1).F()
a7=A.M9(b4,a2,b3.ch,d)
a8=b2.aF(A.b(["Statement period","Opening","Closing","State"],q),B.aW)
for(d=a7.length,a9=0;a9<a7.length;a7.length===d||(0,A.l)(a7),++a9){b0=a7[a9]
a1=A.ar(a8.querySelector("tbody"))
a1.toString
a1.append(b2.bc(A.b([b0.a,b0.b,b0.c,b0.d],q),B.aW))}b1=b2.W("td","inner")
b1.setAttribute("colspan",""+g.length)
d=a7.length===0?b2.H("p","quiet","No statement recorded yet."):a8
b1.append(d)
if(b3.CW){d=p.h(0,a2)
d.toString
b1.append(b2.iG(d))}d=b2.V("tr")
d.append(b1)
f.append(d)}m.append(b)}b5.append(m)}},
jq(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="section",b2="h2",b3="p",b4="quiet",b5=b0.a,b6=b5.at
b6.toString
b7.append(b0.c7())
s=A.aF(new A.aa(Date.now(),0,!1).F(),B.q)
r=A.M3(b6,b0.w,b5.ch,s)
q=A.Gu(b6,b0.w,s,b5.ch)
p=b0.V(b1)
p.append(b0.K(b2,"Payments due in the next 30 days"))
if(q.length===0)p.append(b0.H(b3,b4,"No card bill or loan instalment is due."))
else{o=t.s
n=b0.aF(A.b(["Due","Account","What","Amount"],o),B.aa)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.l)(q),++l){k=q[l]
j=A.ar(n.querySelector("tbody"))
j.toString
i=k.r
h=k.a
if(i)h+=", overdue"
g=k.e
if(g==null)g="Not known"
g=A.b([h,k.b,k.c,g],o)
j.append(b0.bB(g,i?"attention":null,B.aa))}p.append(n)
p.append(b0.H(b3,"quiet small","A card bill is what is still to pay on its latest statement; a loan, its instalment as you gave it. The app pays nothing itself."))}b7.append(p)
if(r.length===0)b7.append(b0.H(b3,b4,"No loans in this book yet."))
for(o=r.length,m=t.s,f=null,l=0;l<r.length;r.length===o||(0,A.l)(r),++l){e=r[l]
j=e.a
d=j.e
if(d!==f){b7.append(b0.H(b2,"region",A.eh(d)+" ("+d+")"))
f=d}c=b0.W(b1,"loan")
i=A.Gc(j)
h=j.CW!=null?" (closed)":""
c.append(b0.K(b2,e.b+" \xb7 "+i+h))
h=A.b([],m)
i=e.c
if(i.length!==0)h.push(i)
h.push(e.d)
c.append(b0.H(b3,"lead",B.a.Z(h,". ")))
c.append(b0.H(b3,b4,e.e+". Outstanding: "+e.f+"."))
i=e.r
h=A.F(i)
g=h.i("n<1>")
b=A.B(new A.n(i,h.i("j(1)").a(new A.qn()),g),g.i("h.E"))
if(b.length!==0)c.append(b0.H(b3,"todo","To do: add the "+B.a.Z(b," and ")+" so it can be checked and forecast."))
i=e.w
if(i.length!==0){a=b0.aF(A.b(["Instalment","Amount","Status","Still due"],m),B.dv)
for(h=i.length,a0=0;a0<i.length;i.length===h||(0,A.l)(i),++a0){a1=i[a0]
g=A.ar(a.querySelector("tbody"))
g.toString
g.append(b0.bc(A.b([a1.a,a1.b,a1.c,a1.d],m),B.dv))}c.append(a)}if(b5.CW&&!b5.ch)c.append(b0.fR(j))
if(b5.CW&&b5.ch)c.append(b0.H(b3,b4,"Tick Show amounts to update its details."))
b7.append(c)}o=A.b([],t.sA)
for(m=A.CN(b6),j=m.length,l=0;l<m.length;m.length===j||(0,A.l)(m),++l){a2=m[l]
if(a2.a.r===b0.w){i=a2.b
h=i.c.a.l(0,$.L())
i=h!==0&&A.G9(b6,i.bk(a2.d))==null}else i=!1
if(i)o.push(a2)}B.a.D(o,new A.qo())
if(o.length!==0){c=b0.V(b1)
c.append(b0.K(b2,"On card statements, not added yet ("+o.length+")"))
for(m=o.length,j=t.I,l=0;l<o.length;o.length===m||(0,A.l)(o),++l){a2=o[l]
a3=b0.V(b3)
i=a2.a
h=A.eh(i.e)
g=a2.b
a4=g.a===B.cj?"personal loan":"instalment plan"
a5=g.b.k(0)
a6=A.aN(g.c,b5.ch)
g=g.e
g=g==null?"":", "+A.i(g)+" instalments left"
a3.append(b0.K("span",h+", "+(i.c+" "+a4+" of "+a5)+": "+a6+" outstanding"+g+" (statement to "+a2.c.k(0)+"). "))
if(b5.CW){a3.append(b0.ar("Add this loan",new A.qp(b0,a2)))
a7=A.G8(b6,a2)
if(a7.length!==0){a8={}
a8.a=B.a.gY(a7).a
i=A.b([],j)
for(h=a7.length,a0=0;a0<a7.length;a7.length===h||(0,A.l)(a7),++a0){a9=a7[a0]
i.push(new A.p(a9.a,A.aY(a9)))}a3.append(b0.aL(i,a8.a,new A.qq(a8)))
a3.append(b0.ar("It's this loan I have",new A.qr(a8,b0,a2)))}}c.append(a3)}b7.append(c)}if(b5.CW){b5=b0.V(b1)
b5.append(b0.fR(null))
b7.append(b5)}},
fR(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6="text",a7="17/11/2026",a8=a4.a,a9=a8.at
a9.toString
s=b0==null
r=s?a5:b0.as
if(r==null)r=B.bS
q=a4.W("form","edit")
q.append(a4.K("h3",s?"Add a loan":"Update loan details"))
p=new A.rJ(a4,q)
o=new A.rK(a4,q)
n=a8.gmw()
if(s){a8=A.b([],t.I)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.l)(n),++l){k=n[l].a
a8.push(new A.p(k,k))}m=A.aO(n,t.hS)
m=m==null?a5:m.a
j=o.$3("Bank",a8,m==null?"":m)}else j=a5
i=s?p.$3("Last 4 digits",a6,""):a5
h=s?o.$3("Currency",B.jH,"SGD"):a5
g=s?p.$4$placeholder("Track from",a6,A.mD(A.aF(new A.aa(Date.now(),0,!1).F(),B.q)),a7):a5
a8=t.I
s=A.b([B.e8],a8)
for(l=0;l<4;++l){m=B.bO[l].b
if(0>=m.length)return A.a(m,0)
s.push(new A.p(m,m[0].toUpperCase()+B.b.ae(m,1)))}m=r.a
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
a=p.$4$placeholder("Left as of",a6,A.mD(r.f),a7)
s=r.r
s=s==null?a5:s.a.k(0)
a0=p.$3("Instalment",a6,s==null?"":s)
a9=a9.gL().gT()
s=A.o(a9)
m=s.i("n<h.E>")
a1=A.B(new A.n(a9,s.i("j(h.E)").a(new A.rF(r)),m),m.i("h.E"))
B.a.D(a1,new A.rG())
a8=A.b([B.e8],a8)
for(a9=a1.length,l=0;l<a1.length;a1.length===a9||(0,A.l)(a1),++l){a2=a1[l]
a8.push(new A.p(a2.a,A.aY(a2)))}a9=r.w
a3=o.$3("Paid from",a8,a9==null?"":a9)
a8=a4.H("button","primary","Send to the phone")
a8.type="submit"
a8.disabled=a4.e
q.append(a8)
q.addEventListener("submit",A.bl(new A.rH(a4,a,g,f,e,d,c,b,new A.rI(),a0,a3,b0,n,j,i,h)))
return q},
aL(a,b,c){var s,r,q,p,o,n,m
t.DX.a(a)
t.ma.a(c)
s=v.G
r=A.v(A.v(s.document).createElement("select"))
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.l)(a),++p){o=a[p]
n=o.a
m=A.v(A.v(s.document).createElement("option"))
m.value=n
m.textContent=o.b
m.selected=n===b
r.append(m)}r.addEventListener("change",A.bl(new A.rM(c,r)))
return r},
bq(a,b,c,d){var s
t.ma.a(c)
s=A.v(A.v(v.G.document).createElement("input"))
s.type=a
s.value=b
if(d!=null)s.placeholder=d
s.addEventListener("change",A.bl(new A.rt(c,s)))
return s},
fO(a,b,c){return this.bq(a,b,c,null)},
an(a,b){var s=this.W("label","field")
s.append(this.K("span",a))
s.append(b)
return s},
jy(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="dd/mm/yyyy",a9="span",b0=a6.a,b1=b0.at
b1.toString
b2.append(a6.c7())
s=a6.cx
r=a6.w
if(s.a!==r)a6.cx=new A.cr(r,a7,a7,a7,"",B.cm,a7,B.cl,0)
q=new A.ri(a6)
s=b1.gL().gT()
r=A.o(s)
p=r.i("n<h.E>")
o=A.B(new A.n(s,r.i("j(h.E)").a(new A.r4(a6)),p),p.i("h.E"))
B.a.D(o,new A.r5())
s=A.a5(b1.d,t.N,t.G).gT()
n=A.B(s,A.o(s).i("h.E"))
B.a.D(n,new A.r6())
m=new A.rh(a6,q)
l=a6.W("div","filters")
l.append(a6.an("Words",a6.bq("search",a6.cx.e,new A.r9(a6,q),"Payee or note")))
s=t.I
r=A.b([B.m2],s)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.l)(o),++k){j=o[k]
r.push(new A.p(j.a,A.aY(j)))}p=a6.cx.b
if(p==null)p=""
l.append(a6.an("Account",a6.aL(r,p,new A.ra(a6,q))))
l.append(a6.an("From",a6.bq("text",A.mD(a6.cx.c),new A.rb(a6,m),a8)))
l.append(a6.an("To",a6.bq("text",A.mD(a6.cx.d),new A.rc(a6,m),a8)))
p=A.b([],s)
for(k=0;k<4;++k){i=B.dK[k]
p.push(new A.p(i.b,i.c))}l.append(a6.an("Show",a6.aL(p,a6.cx.f.b,new A.rd(a6,q))))
r=A.b([B.lG,B.lV],s)
for(p=n.length,k=0;k<n.length;n.length===p||(0,A.l)(n),++k){h=n[k]
r.push(new A.p(h.a,h.c))}p=a6.cx.r
if(p==null)p=""
l.append(a6.an("Category",a6.aL(r,p,new A.re(a6,q))))
s=A.b([],s)
for(k=0;k<4;++k){i=B.dN[k]
s.push(new A.p(i.b,i.c))}l.append(a6.an("Order",a6.aL(s,a6.cx.w.b,new A.rf(a6,q))))
s=a6.cx
r=new A.aa(Date.now(),0,!1).F()
g=A.Ma(b1,s,b0.ch,r)
f=a6.W("ul","notes")
for(b0=g.e,s=b0.length,k=0;k<b0.length;b0.length===s||(0,A.l)(b0),++k)f.append(a6.K("li",b0[k]))
e=a6.V("section")
e.append(l)
b0=g.b
s=A.CW(""+b0,"SGD")
b0=b0===1?"":"s"
e.append(a6.H("p","quiet",s+" transaction"+b0))
e.append(f)
b0=t.s
d=a6.aF(A.b(["Date","Account","Payee","Amount","Type","Category","State","Note"],b0),B.aa)
d.className="tx"
for(s=g.a,r=s.length,k=0;k<s.length;s.length===r||(0,A.l)(s),++k){c=s[k]
p=c.r
b=p==="Not filed yet"
if(b)p=""
p=A.b([c.c,c.d,c.e,c.f,p,"","",c.y],b0)
a=c.b
a0=a6.bB(p,a===a6.CW?"open click":"click",B.aa)
a1=b||c.w==="No category yet"
p=A.ar(A.v(a0.children).item(5))
p.toString
if(a1)b=a6.H(a9,"state warn","To file")
else{b=c.w
b=b.length===0?a6.V(a9):a6.em(b,c.a)}p.append(b)
p=c.x
if(p.length!==0){b=A.ar(A.v(a0.children).item(6))
b.toString
a2=a6.H(a9,"state info","Alert")
a2.setAttribute("title",p)
b.append(a2)}a0.addEventListener("click",A.bl(new A.rg(a6,c)))
a3=A.ar(d.querySelector("tbody"))
a3.append(a0)
if(a===a6.CW){a4=a6.W("td","inner")
a4.setAttribute("colspan","8")
p=a6.V("tr")
a4.append(a6.kX(b1,a))
p.append(a4)
a3.append(p)}}a5=a6.V("nav")
b0=g.c
a5.append(a6.el("\u2039 Newer",new A.r7(a6,q,g),b0===0))
b1=g.d
a5.append(a6.H(a9,"quiet","Page "+(b0+1)+" of "+b1))
a5.append(a6.el("Older \u203a",new A.r8(a6,q,g),b0>=b1-1))
e.append(d)
e.append(a5)
b2.append(e)},
jn(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="p",a9="quiet",b0="section",b1="h2",b2="attention",b3="customer",b4="date",b5="edit-grid",b6="currency",b7="td",b8="text",b9="paymentDays",c0=a7.a,c1=c0.at
c1.toString
s=t.s
r=A.b([],s)
for(q=c1.gcE(),q=new A.cC(q,q.r,q.e,A.o(q).i("cC<1>")),p=c1.f;q.n();){o=q.d
n=p.h(0,o)
if(n==null)n=o==="personal"?"personal":null
if(n==="company")r.push(o)}if(r.length!==0&&!B.a.u(r,a7.w))a7.w=B.a.gY(r)
c2.append(a7.c7())
if(!B.a.u(r,a7.w)){c2.append(a7.H(a8,a9,"Invoices are made for a company book; this book is not one."))
return}r=a7.w
q=A.aF(new A.aa(Date.now(),0,!1).F(),B.q)
m=A.M1(c1,r,c0.ch,q)
l=c0.CW
c0=m.a
if(c0==null){c0=a7.V(b0)
c0.append(a7.H(a8,"warn","Set up who issues "+A.fG(a7.w,c1)+"'s invoices on the phone first (Books, "+A.fG(a7.w,c1)+", Make sales invoices): the UEN and the account number are kept there."))
c2.append(c0)}else{c1=m.b?"tax invoices with GST at 9%":"plain invoices, not GST registered"
c2.append(a7.H(a8,a9,c0+": "+c1+". Drafts made here are issued, numbered and made into PDFs on the phone."))}k=a7.V(b0)
c0=m.e
k.append(a7.K(b1,"Issued ("+c0.length+")"))
if(c0.length===0)k.append(a7.H(a8,a9,"None issued yet."))
if(c0.length!==0){c1=A.b(["Number","Customer","Date","Due"],s)
r=m.b
if(r)c1.push("GST")
c1.push("Total")
c1.push("Credit notes")
c1.push("State")
j=a7.aF(c1,r?B.dA:B.dy)
for(c1=c0.length,i=0;i<c0.length;c0.length===c1||(0,A.l)(c0),++i){h=c0[i]
q=h.a
q=A.b([q.w,q.Q,h.b,h.c],s)
if(r)q.push(h.e)
q.push(h.d)
p=h.f
q.push(p.length===0?"None":p)
p=h.r
q.push(p)
o=r?B.dA:B.dy
g=a7.bB(q,p==="Overdue"?b2:null,o)
A.ar(j.querySelector("tbody")).append(g)}k.append(j)}c2.append(k)
f=a7.V(b0)
c0=m.d
f.append(a7.K(b1,"Drafts ("+c0.length+")"))
if(c0.length===0)f.append(a7.H(a8,a9,"No draft."))
for(c1=c0.length,r=m.b,i=0;i<c0.length;c0.length===c1||(0,A.l)(c0),++i){e=c0[i]
d=a7.W("div","draft")
d.append(a7.K("h3",e.b+" \xb7 "+e.c))
q=e.e
p=q==null
q=p?"Missing: "+B.a.Z(e.f,", ").toLowerCase()+".":"If issued now: "+q
d.append(a7.H(a8,p?"warn":a9,q))
q=A.b(["Description","Qty","Unit price","Amount"],s)
if(r)q.push("GST")
j=a7.aF(q,B.dt)
for(q=e.d,p=q.length,c=0;c<q.length;q.length===p||(0,A.l)(q),++c){b=q[c]
o=A.ar(j.querySelector("tbody"))
o.toString
n=A.b([b.a,b.b,b.c,b.d],s)
if(r)n.push(b.e)
o.append(a7.bc(n,B.dt))}d.append(j)
if(l)d.append(a7.ar("Remove this draft",new A.pY(a7,e)))
f.append(d)}c2.append(f)
if(l&&m.c.length!==0){a=a7.cy
a0=new A.qb(a7,a)
if(a.h(0,b3)==null)a.j(0,b3,B.a.gY(m.c).b)
if(a.h(0,b4)==null)a.j(0,b4,A.mD(A.aF(new A.aa(Date.now(),0,!1).F(),B.q)))
a1=a7.W("div",b5)
c0=A.b([],t.I)
for(c1=m.c,q=c1.length,i=0;i<c1.length;c1.length===q||(0,A.l)(c1),++i){a2=c1[i]
p=A.m(a2.c.h(0,"name"))
p.toString
c0.push(new A.p(a2.b,p))}c1=a.h(0,b3)
c1.toString
a1.append(a7.an("Customer",a7.aL(c0,c1,new A.pZ(a))))
a1.append(a0.$3$placeholder(b4,"Invoice date","dd/mm/yyyy"))
a1.append(a0.$3$placeholder("reference","Customer reference (optional)","Like a PO number"))
a1.append(a0.$3$wide("note","Note (optional)",!0))
c1=a.h(0,b6)
c0=c1==null?"SGD":c1
a1.append(a7.an("Currency",a7.aL(B.jk,c0,new A.q_(a7,a))))
a1.append(a0.$3$placeholder("rate","S$ for 1 unit (not SGD, with GST)","Like 1.3412"))
c0=a.h(0,b6)
c0=A.b(["Description","Quantity","Unit price, "+(c0==null?"SGD":c0)],s)
if(r)c0.push("GST")
a3=a7.dN(c0)
for(a4=0;a4<a7.db;++a4){g=a7.V("tr")
c0=a7.V(b7)
c1=""+a4
q=a.h(0,"d"+c1)
if(q==null)q=""
q=a7.bq(b8,q,new A.q3(a4,a),"What was supplied")
q.className="wide"
c0.append(q)
g.append(c0)
c0=a7.V(b7)
q=a.h(0,"q"+c1)
if(q==null)q=""
c0.append(a7.bq(b8,q,new A.q4(a4,a),"Like 1"))
g.append(c0)
c0=a7.V(b7)
q=a.h(0,"p"+c1)
if(q==null)q=""
c0.append(a7.bq(b8,q,new A.q5(a4,a),"Like 1200.00"))
g.append(c0)
if(r){c0=a7.V(b7)
c1=a.h(0,"g"+c1)
if(c1==null)c1="standard"
c0.append(a7.aL(B.js,c1,new A.q6(a4,a)))
g.append(c0)}A.ar(a3.querySelector("tbody")).append(g)}c0=a7.V(b0)
c0.append(a7.K(b1,"New invoice draft"))
c0.append(a1)
c0.append(a3)
c1=a7.V("nav")
c1.append(a7.ar("Add a row",new A.q7(a7)))
c1.append(a7.aR("Send the draft to the phone",new A.q8(a7,a,m),"primary"))
c0.append(c1)
c2.append(c0)}else if(l)c2.append(a7.H(a8,a9,"Add a customer below to start a draft."))
a5=a7.V(b0)
c0=m.c
a5.append(a7.K(b1,"Customers ("+c0.length+")"))
j=a7.dN(A.b(["Name","Address","Attention","Pays in"],s))
for(c1=c0.length,i=0;r=c0.length,i<r;c0.length===c1||(0,A.l)(c0),++i){a2=c0[i]
r=A.ar(j.querySelector("tbody"))
r.toString
q=a2.c
p=A.m(q.h(0,"name"))
p.toString
o=A.m(q.h(0,"address"))
o.toString
o=A.ao(o,"\n",", ")
n=A.m(q.h(0,b2))
if(n==null)n=""
r.append(a7.fB(A.b([p,o,n,A.aH(q.h(0,b9))==null?"The usual days":A.i(A.aH(q.h(0,b9)))+" days"],s)))}if(r!==0)a5.append(j)
if(l){c0=t.N
a2=A.w(c0,c0)
a6=A.v(A.v(v.G.document).createElement("textarea"))
a6.rows=3
a6.placeholder="Street, unit, postcode"
a6.addEventListener("change",A.bl(new A.q9(a6,a2)))
a5.append(a7.K("h3","Add a customer"))
c0=a7.W("div",b5)
c0.append(a7.an("Name",a7.fO(b8,"",new A.qa(a2))))
c0.append(a7.an("Address",a6))
c0.append(a7.an("Attention (optional)",a7.fO(b8,"",new A.q0(a2))))
c0.append(a7.an("Pays in, days (optional)",a7.bq(b8,"",new A.q1(a2),"Like 30")))
a5.append(c0)
a5.append(a7.ar("Send the customer to the phone",new A.q2(a7,a2)))}c2.append(a5)},
jx(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.a,a6=a5.at
a6.toString
s=new A.qU(a4,a6)
a4.eJ()
r=s.$0()
q=A.fH(a6,a4.w,r.r)
if(!B.a.u(q,a4.y)){a4.y=B.a.gY(q)
r=s.$0()}a6=a4.gca()
p=a4.gc8()-1
if(!(p>=0&&p<12))return A.a(B.V,p)
a7.append(a4.dE("Twelve months to "+(B.V[p]+" "+a6),q))
a6=A.b([],t.t)
for(p=r.b,o=1;o<=p.length+2;++o)a6.push(o)
n=t.s
m=A.b(["Category"],n)
B.a.a1(m,p)
m.push("Total")
m.push("Average")
l=a4.aF(m,a6)
l.className="matrix"
m=A.ar(l.querySelector("tbody"))
m.toString
p=r.c
k=A.F(p)
j=t.S
i=new A.dw(p,k.i("h<d>(1)").a(new A.qV()),k.i("dw<1,d>")).a4(0,0,new A.qW(),j)
for(k=p.length,h=i>0,g=0;g<p.length;p.length===k||(0,A.l)(p),++g){f=p[g]
e=f.a
d=A.b([e],n)
B.a.a1(d,f.c)
d.push(f.e)
d.push(f.f)
c=a4.bc(d,a6)
if(!a5.ch&&h)for(d=A.bE(f.d,0,j),b=J.R(d.a),a=d.b,d=new A.as(b,a,A.o(d).i("as<1>"));d.n();){a0=d.c
a0=a0>=0?new A.p(a+a0,b.gt()):A.f(A.ai())
a1=a0.b
a2=a1<=0?0:B.d.eV(B.G.eT(a1*4/i),1,4)
if(a2>0)A.v(A.ar(A.v(c.children).item(a0.a+1)).classList).add("heat-"+a2)}if(e==="No category yet"){e=A.ar(A.v(c.children).item(0))
e.toString
e.textContent=""
e.append(a4.aR("No category yet: file in Review",new A.qX(a4),"link"))}else{d=A.ar(A.v(c.children).item(0))
d.toString
d.textContent=""
d.append(a4.em(e,f.b))}m.append(c)}a5=r.d
p=A.b([a5.a],n)
B.a.a1(p,a5.c)
p.push(a5.e)
p.push(a5.f)
m.append(a4.bB(p,"total",a6))
a5=r.e
if(B.a.M(a5,new A.qY())){p=A.b(["Not filed yet, not counted (transactions)"],n)
B.a.a1(p,a5)
p.push("")
p.push("")
m.append(a4.bB(p,"aside",a6))}a3=a4.W("ul","notes")
for(a5=r.f,g=0;g<1;++g)a3.append(a4.K("li",a5[g]))
a5=a4.V("section")
a6=r.a
a5.append(a4.K("h2","Spending by category, "+(A.eh(a6)+" ("+a6+")")))
a5.append(l)
a5.append(a3)
a7.append(a5)},
jt(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="quiet"
a3.append(a1.c7())
s=a1.a
r=s.at
r.toString
q=a1.w
p=new A.aa(Date.now(),0,!1).F()
o=A.M6(r,q,s.ch,p)
n=a1.V("section")
p=o.b
q=A.CW(""+p,"SGD")
r=p===1?"":"s"
p=o.a
m=p.length
l=m===1?"":"s"
n.append(a1.K("h2","To file: "+q+" transaction"+r+" from "+m+" payee"+l))
n.append(a1.H("p",a2,s.CW?"Filing a payee files all its transactions and saves the rule; the phone applies it on its next sync.":"Turn on Allow changes to file payees from here."))
if(p.length!==0){k=s.CW
j=a1.bq("search",a1.z,new A.qz(a1),"Search payees")
i=B.b.I(a1.z).toLowerCase()
s=A.b([],t.kW)
for(r=p.length,q=i.length!==0,h=0;h<p.length;p.length===r||(0,A.l)(p),++h){g=p[h]
if(!q||B.b.u(g.a.toLowerCase(),i))s.push(g)}n.append(a1.an("Payee",j))
r=t.s
q=A.b(["Payee","Direction","Transactions","Total"],r)
if(k)q.push("File as")
f=a1.aF(q,B.dx)
for(q=A.bz(s,0,A.cP(a1.Q,"count",t.S),t.xH),p=q.$ti,q=new A.a7(q,q.gq(0),p.i("a7<a2.E>")),p=p.i("a2.E");q.n();){m=q.d
if(m==null)m=p.a(m)
e=a1.bc(A.b([m.a,m.e,""+m.f,m.r],r),B.dx)
if(k){l=a1.V("td")
l.append(a1.jD(m))
e.append(l)}A.ar(f.querySelector("tbody")).append(e)}n.append(f)
if(s.length===0)n.append(a1.H("p",a2,"No payee to file matches the search."))
if(s.length>a1.Q){r=a1.V("nav")
r.append(a1.H("span",a2,"Showing "+a1.Q+" of "+s.length+" payees."))
r.append(a1.ar("Show 25 more",new A.qA(a1)))
n.append(r)}}d=a1.V("section")
d.append(a1.K("h2","Other items, all books"))
s=o.c
if(s.length===0)d.append(a1.H("p",a2,"Nothing else waits."))
for(r=s.length,h=0;h<s.length;s.length===r||(0,A.l)(s),++h){c=s[h]
b=a1.V("details")
q=c.c
b.append(a1.K("summary",c.a+" ("+q+")"))
a=a1.W("ul","items")
for(p=c.b,m=p.length,a0=0;l=p.length,a0<l;p.length===m||(0,A.l)(p),++a0)a.append(a1.K("li",p[a0]))
if(q>l)a.append(a1.H("li",a2,"And "+(q-l)+" more; the phone's Review lists them all."))
b.append(a)
d.append(b)}a3.append(n)
a3.append(d)},
jm(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="section",a2="Money in",a3=a0.a,a4=a3.at
a4.toString
a0.eJ()
s=new A.pR(a0,a4)
r=s.$0()
q=A.fH(a4,a0.w,r.f)
if(!B.a.u(q,a0.y)){a0.y=B.a.gY(q)
r=s.$0()}a5.append(a0.iX(q))
p=a0.V(a1)
a4=r.a
p.append(a0.K("h2","Net worth today, "+(A.eh(a4)+" ("+a4+")")))
p.append(a0.dL("Holdings",r.c,null,!0))
p.append(a0.dL("Debts",r.d,null,!0))
p.append(a0.dL("Net worth",r.e,"In "+a4+"; each figure from its latest statement or value.",!0))
o=t.s
n=a0.aF(A.b(["Holding or debt","As of","Amount"],o),B.aX)
for(m=r.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k){j=m[k]
i=A.ar(n.querySelector("tbody"))
i.toString
h=j.d?" (debt)":""
i.append(a0.bc(A.b([j.a+h,j.b,j.c],o),B.aX))}p.append(n)
g=a0.W("ul","notes")
m=r.r
if(m.length!==0)g.append(a0.K("li","No balance yet, left out: "+B.a.Z(m,", ")+"."))
p.append(g)
f=a0.aF(A.b(["Month","Money in","Spent","Saved","Savings rate","Net worth at month end"],o),B.dD)
for(m=r.w,l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k){e=m[k]
i=A.ar(f.querySelector("tbody"))
i.toString
i.append(a0.bc(A.b([e.a,e.b,e.c,e.d,e.e,e.f],o),B.dD))}d=a0.V(a1)
d.append(a0.K("h2","Charts"))
if(a3.ch)d.append(a0.H("p","quiet","The charts show once Show amounts is ticked."))
else{o=a3.at
o.toString
c=A.M_(o,a0.w,a3.c.c,new A.aa(Date.now(),0,!1).F(),a4)
a3=c.a
o=A.aN(A.a3($.L(),a3),!1)
m=A.D("[\\d.,]",!0,!1)
b=A.ao(o,m,"")
o=new A.pU(c)
a=a0.W("div","legend")
a.append(a0.H("span","key series-1",a2))
a.append(a0.H("span","key series-2","Spent"))
d.append(a0.K("h3","Money in and spent, by month ("+a3+")"))
d.append(a)
m=c.b
d.append(A.MP("Money in and spent by month",m,A.b([new A.p(a2,c.c),new A.p("Spent",c.d)],t.AW),new A.pS(o),b))
d.append(a0.K("h3","Net worth at each month end ("+a3+")"))
d.append(A.G6("Net worth at each month end",m,c.e,!0,new A.pT(o),b))
d.append(a0.H("p","quiet","Hover a bar or a point for its amount; the table below has every figure."))}a5.append(p)
a5.append(d)
a3=a0.V(a1)
a3.append(a0.K("h2","The last twelve months, "+(A.eh(a4)+" ("+a4+")")))
a3.append(f)
a5.append(a3)},
jp(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.a,a6=a5.at
a6.toString
s=new A.aa(Date.now(),0,!1).F()
r=A.M2(a6,a5.ch,s)
q=a5.CW
if(q){p={}
a5=A.b([],t.nB)
for(o=0;o<32;++o){n=B.ac[o]
if(A.Jb(n)&&!B.ed.u(0,n))a5.push(n)}B.a.D(a5,new A.qg())
p.a=B.a.gY(a5).b
a6=a4.V("section")
s=a4.W("div","filing")
m=A.b([],t.I)
for(l=a5.length,o=0;o<a5.length;a5.length===l||(0,A.l)(a5),++o){n=a5[o]
m.push(new A.p(n.b,n.c))}s.append(a4.aL(m,p.a,new A.qh(p)))
s.append(a4.ar("Add a record",new A.qi(p,a4)))
a6.append(s)
a6.append(a4.H("p","quiet","Documents, policies and records with files or several people are added on the phone."))
a7.append(a6)
k=a4.dx
if(t.wD.b(k))a7.append(a4.jY(k.a,k.b))}if(r.length===0)a7.append(a4.H("p","quiet","No records yet."))
for(a5=r.length,a6=t.a,s=t.N,o=0;o<r.length;r.length===a5||(0,A.l)(r),++o){j=r[o]
i=a4.W("details","card")
i.setAttribute("open","")
m=j.c
i.append(a4.K("summary",j.a+" ("+m.length+")"))
h=q&&j.e!=null
l=j.b
g=A.B(l,s)
if(h)g.push("")
f=a4.dN(g)
e=B.a.by(l,"Expires")
for(m=A.bE(m,0,a6),l=J.R(m.a),g=m.b,m=new A.as(l,g,A.o(m).i("as<1>")),d=j.d,c=e>=0,b=j.f;m.n();){a=m.c
a=a>=0?new A.p(g+a,l.gt()):A.f(A.ai())
a0=a.a
a1=a4.fB(a.b)
a=d.length
if(a0<a&&c){if(!(a0>=0&&a0<a))return A.a(d,a0)
a2=d[a0]}else a2=null
if(a2!=null){a=A.ar(A.v(a1.children).item(e))
a.toString
a.append(a4.H("span",a2==="Expired"?"state bad":"state warn",a2))}if(h){if(!(a0>=0&&a0<b.length))return A.a(b,a0)
a3=b[a0]
a=a4.W("td","filing")
a.append(a4.ar("Edit",new A.qj(a4,j,a3)))
a.append(a4.ar("Remove",new A.qk(a4,j,a3)))
a1.append(a)}A.ar(f.querySelector("tbody")).append(a1)}i.append(f)
a7.append(i)}},
jY(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="personal",b2=b0.a.at
b2.toString
s=b0.W("form","edit")
r=t.N
q=A.w(r,t.j3)
p=new A.rB(b4)
for(o=b3.d,n=A.F(o),n.i("j(1)").a(A.Ai()),o=B.a.gA(o),n=new A.N(o,A.Ai(),n.i("N<1>")),m=v.G,l=t.I,k=b2.a7,j=t.P,i=t.eT,h=b2.f,g=b2.p3,f=t.o;n.n();){e=o.gt()
d=e.d
c=e.b
c=d?c:c+" (optional)"
b=p.$1(e)
a=e.c
A:{if(B.O===a){d=A.b([],l)
for(a0=e.e,a1=a0.length,a2=0;a2<a1;++a2){a3=a0[a2]
d.push(new A.p(a3,A.ao(a3,"-"," ")))}break A}if(B.ar===a){d=A.b([B.m1],l)
for(a0=A.a5(g,r,f).gT(),a0=a0.gA(a0);a0.n();){a1=a0.gt()
d.push(new A.p(a1.a,a1.b))}break A}if(B.a3===a){d=A.b([],l)
a0=b2.gL().gT()
a0=A.B(a0,A.o(a0).i("h.E"))
B.a.D(a0,new A.rv())
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.l)(a0),++a2){a4=a0[a2]
d.push(new A.p(a4.a,A.aY(a4)))}break A}if(B.af===a){d=A.b([],l)
for(a0=A.w(r,r),a0.j(0,b1,b1),a0.a1(0,h),a0=new A.cC(a0,a0.r,a0.e,a0.$ti.i("cC<1>"));a0.n();){a1=a0.d
d.push(new A.p(a1,A.fG(a1,b2)))}break A}if(B.C===a){d=A.b([],l)
a0=e.f
a0.toString
a0=k.aZ(A.ag(B.ac,a0,j))
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.l)(a0),++a2){a5=a0[a2]
a6=a5.b
a7=A.aO(new A.j8(a5.c.gT(),i),r)
d.push(new A.p(a6,a7==null?a6:a7))}break A}if(B.Z===a){d=A.b([B.lB,B.mc],l)
break A}d=null
break A}if(d!=null){a0={}
a0.a=b
if(a!==B.Z){a1=A.b([B.e4],l)
B.a.a1(a1,d)
a8=a1}else a8=d
d=b0.aL(a8,b,new A.rw(a0))
a1=b0.W("label","field")
a1.append(b0.K("span",c))
a1.append(d)
s.append(a1)
q.j(0,e.a,new A.rx(a0))}else{a9=A.v(A.v(m.document).createElement("input"))
B:{if(B.r===a){d="date"
break B}if(B.aM===a){d="time"
break B}if(B.aq===a){d="month"
break B}d="text"
break B}a9.type=d
a9.value=b
if(a===B.u)d="Like 1200.50 or 500 INR"
else{d=e.y
if(d==null)d=""}a9.placeholder=d
d=b0.W("label","field")
d.append(b0.K("span",c))
d.append(a9)
s.append(d)
q.j(0,e.a,new A.ry(a9))}}b2=b4==null
r=b0.H("button","primary",b2?"Add to the phone":"Send the change")
r.type="submit"
r.disabled=b0.e
s.append(r)
s.append(b0.ar("Cancel",new A.rz(b0)))
s.addEventListener("submit",A.bl(new A.rA(b0,b3,q,b4)))
r=b0.V("section")
o=b3.c
r.append(b0.K("h2",b2?"New: "+o:"Change: "+o))
r.append(s)
return r},
ju(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c="section",b="quiet"
a.append(d.c7())
s=d.a
r=s.at
r.toString
q=A.M7(r,d.w,s.ch)
p=s.CW
o=new A.qI(d)
s=q.c
if(s.length!==0){n=B.a.a4(s,0,new A.qD(),t.S)
m=d.V(c)
r=n===1?"":"s"
m.append(d.K("h2","Rules that disagree: "+n+" transaction"+r))
m.append(d.H("p",b,"Two confirmed rules match these payees with different filings, so their transactions wait. Remove or narrow one rule, or file the payee in Review."))
r=t.s
l=d.aF(A.b(["Payee","Transactions","Total","Rules"],r),B.aW)
for(k=s.length,j=0;j<s.length;s.length===k||(0,A.l)(s),++j){i=s[j]
h=A.ar(l.querySelector("tbody"))
h.toString
h.append(d.bc(A.b([i.a,""+i.b,i.c,B.a.Z(i.d,"; ")],r),B.aW))}m.append(l)
a.append(m)}if(p&&B.a.M(q.b,new A.qE())){s=d.V(c)
s.append(d.aR("File waiting transactions by the confirmed rules",new A.qF(d,o),"primary"))
s.append(d.H("p",b,"Only transactions exactly one confirmed rule matches are filed."))
a.append(s)}for(s=[new A.p("Proposed, waiting for you",q.a),new A.p("Confirmed",q.b)],r=t.s,j=0;j<2;++j){k=s[j]
g=k.b
h=J.an(g)
if(h.ga5(g))continue
m=d.V(c)
m.append(d.K("h2",k.a+" ("+h.gq(g)+")"))
m.append(d.H("p",b,h.gY(g).d?"The phone files the transactions these match the next time Review is opened there.":"Once confirmed, a rule files the transactions it matches."))
k=A.b(["Payee words","Files as","Limited to","Matching, not filed yet"],r)
if(p)k.push("")
l=d.aF(k,B.aa)
for(k=h.gA(g);k.n();){h=k.gt()
f=d.bc(A.b([h.a.c,h.b,h.e,""+h.c],r),B.aa)
if(p){e=d.W("td","filing")
if(!h.d)e.append(d.aR("Confirm",new A.qG(d,o,h),"primary"))
e.append(d.ar("Remove",new A.qH(d,o,h)))
f.append(e)}A.ar(l.querySelector("tbody")).append(f)}m.append(l)
a.append(m)}},
iG(a){var s,r,q,p,o=this,n=o.W("form","edit"),m=new A.po(o,n),l=m.$2("Alias",a.b),k=a.fr,j=m.$3$placeholder("IFSC",k==null?"":k,"India only")
k=a.fx
s=m.$2("MICR",k==null?"":k)
k=a.fy
r=m.$2("Branch",k==null?"":k)
k=a.go
q=m.$3$placeholder("Number as statements show it",k==null?"":k,"Like 12345XXXXX")
k=a.y
k=k==null?null:B.d.k(k)
p=m.$2("Out of date after (days, with alerts)",k==null?"":k)
m=o.H("button","primary","Send to the phone")
m.type="submit"
m.disabled=o.e
n.append(m)
n.append(o.K("small","The customer ID is changed on the phone only."))
n.addEventListener("submit",A.bl(new A.pn(o,a,l,j,s,r,q,p)))
return n},
jv(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.at,a2=a1.dy,a3=A.Jo(new A.M(a2,A.o(a2).i("M<2>"))).a,a4=a.V("section")
a2=a3.length
a4.append(a.K("h2","Bank SMS senders ("+a2+" ids)"))
a4.append(a.H("p","quiet","Only SMS from these senders are kept. Turning Bank SMS on and off stays on the phone."))
s=a0.CW
r=A.w(t.z9,t.zo)
for(a0=t.mu,q=0;q<a2;++q){p=a3[q]
o=p.c
if(o==null)o="No institution"
o=new A.p(o,p.b)
n=r.h(0,o)
if(n==null){n=A.b([],a0)
r.j(0,o,n)
o=n}else o=n
B.a.m(o,p)}a0=r.$ti.i("au<1>")
m=A.B(new A.au(r,a0),a0.i("h.E"))
B.a.D(m,new A.qM())
a0=t.s
l=a.dN(A.b(["Institution","Sends","Sender ids"],a0))
for(a2=m.length,q=0;q<m.length;m.length===a2||(0,A.l)(m),++q){k=m[q]
j=a.V("td")
o=r.h(0,k)
o.toString
B.a.D(o,new A.qN())
n=o.length
i=0
for(;i<o.length;o.length===n||(0,A.l)(o),++i){p=o[i]
h=a.W("span","chip")
g=p.a
h.append(a.K("span",g))
if(s){f=a.aR("\xd7",new A.qO(a,p),"chip-remove")
g="Remove "+g
f.title=g
f.setAttribute("aria-label",g)
h.append(f)}j.append(h)}o=A.ar(l.querySelector("tbody"))
o.toString
n=a.V("tr")
n.append(a.K("td",k.a))
n.append(a.K("td",k.b.c))
n.append(j)
o.append(n)}a4.append(l)
if(s){e={}
d=a.W("form","edit")
c=A.v(A.v(v.G.document).createElement("input"))
c.type="text"
c.placeholder="Like DBSBANK, or several: DBSBANK, DBS"
e.a="bank"
e.b=""
a0=A.b([],a0)
for(a2=A.a5(a1.x,t.N,t.p0).gT(),a2=a2.gA(a2);a2.n();)a0.push(a2.gt().b)
B.a.bb(a0)
d.append(a.an("Sender ids of one bank, as the phone shows them",c))
a2=t.I
o=A.b([],a2)
for(q=0;q<3;++q){k=B.bP[q]
o.push(new A.p(k.b,k.c))}d.append(a.an("Sends",a.aL(o,e.a,new A.qP(e))))
a2=A.b([B.e4],a2)
for(o=a0.length,q=0;q<a0.length;a0.length===o||(0,A.l)(a0),++q){b=a0[q]
a2.push(new A.p(b,b))}d.append(a.an("Institution",a.aL(a2,"",new A.qQ(e))))
a0=a.H("button","primary","Add the senders")
a0.type="submit"
a0.disabled=a.e
d.append(a0)
d.addEventListener("submit",A.bl(new A.qR(e,a,c)))
a4.append(d)}a5.append(a4)},
kX(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.W("div","details"),d=new A.aa(Date.now(),0,!1).F(),c=f.a,b=A.Mb(a,a0,c.ch,d)
if(b==null){e.append(f.H("p","quiet","This transaction is no longer in the ledger."))
return e}s=f.V("dl")
for(d=b.length,r=0;r<b.length;b.length===d||(0,A.l)(b),++r){q=b[r]
p=q.b
if(p.length===0)continue
s.append(f.K("dt",q.a))
s.append(f.K("dd",p))}e.append(s)
d=a.b.a.h(0,a0)
d.toString
if(!c.CW)return e
o=new A.rU(f)
n=f.W("div","filing")
c=d.d
if(c===B.n||c===B.w){m={}
l=a.gcE().h(0,d.b)
c=A.a5(a.d,t.N,t.G).gT()
q=A.o(c)
k=q.i("n<h.E>")
j=A.B(new A.n(c,q.i("j(h.E)").a(new A.rP(l)),k),k.i("h.E"))
B.a.D(j,new A.rQ())
i=d.Q
m.a=i==null?"":i
c=A.b([B.e3],t.I)
for(q=j.length,r=0;r<j.length;j.length===q||(0,A.l)(j),++r){h=j[r]
c.push(new A.p(h.a,h.c))}n.append(f.aL(c,m.a,new A.rR(m)))
n.append(f.ar("Change category",new A.rS(m,f,o,d)))}g=A.v(A.v(v.G.document).createElement("input"))
g.type="text"
c=d.db
if(c==null)c=""
g.value=c
g.placeholder="A note"
n.append(g)
n.append(f.ar("Save the note",new A.rT(f,o,d,g)))
e.append(n)
return e},
em(a,b){var s,r="span",q=this.W(r,"cat")
if(b!=null){s=this.W(r,"dot hue-"+b)
s.setAttribute("aria-hidden","true")
q.append(s)}q.append(this.K(r,a))
return q},
fw(a,b,c){var s,r=this.W("div",c?"bar over":"bar")
r.setAttribute("role","img")
s=new A.pq(this,new A.pr())
if(b!=null&&b>a)r.append(s.$2("ahead",b))
r.append(s.$2("done",a))
r.setAttribute("aria-label",""+B.G.e9(a*100)+"% used")
return r},
iT(a,b){return this.fw(a,b,!1)},
jl(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="section",b5="quiet",b6="text"
b7.append(b3.c7())
s=b3.a
r=s.at
r.toString
q=b3.w
p=new A.aa(Date.now(),0,!1).F()
o=A.LZ(r,q,s.ch,p)
n=s.CW
m=new A.pP(b3)
l=new A.pO()
k=b3.V(b4)
s=o.c
k.append(b3.K("h2","Budgets, "+o.b+" ("+s+")"))
q=o.e
if(q.length!==0){k.append(b3.H("p",b5,q))
k.append(b3.H("p","quiet small",o.a))}q=o.d
if(q.length===0)k.append(b3.H("p",b5,"No budget is set for this book."))
if(q.length!==0){p=t.s
j=A.b(["Category","Budget","Spent","Left","Heading for"],p)
if(n)j.push("Change")
i=b3.aF(j,B.du)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.l)(q),++h){g=q[h]
f=b3.bc(A.b(["",g.c,g.d,g.e,g.f],p),B.du)
e=A.ar(A.v(f.children).item(0))
e.toString
e.append(b3.em(g.b,A.CO(g.a)))
e=A.ar(A.v(f.children).item(0))
e.toString
d=g.r
c=!d
b=!c||g.w
e.append(b3.fw(g.x,g.y,b))
if(d){e=A.ar(A.v(f.children).item(0))
e.toString
e.append(b3.H("span","state bad","Over"))}if(g.w&&c){e=A.ar(A.v(f.children).item(4))
e.toString
e.append(b3.H("span","state warn","Heading over"))}if(n){a=l.$2$placeholder(b6,"New amount")
e=b3.W("td","filing")
e.append(a)
e.append(b3.ar("Set",new A.pG(b3,m,g,a)))
e.append(b3.ar("Remove",new A.pH(b3,m,g)))
f.append(e)}A.ar(i.querySelector("tbody")).append(f)}k.append(i)}b7.append(k)
q=o.f
if(q.length!==0){a0=b3.V(b4)
a0.append(b3.K("h2","Proposed budgets"))
a0.append(b3.H("p",b5,"From the complete months among the last three; a month without its statements is left out."))
p=t.s
j=A.b(["Category","Proposed","Based on"],p)
if(n)j.push("")
i=b3.aF(j,B.ds)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.l)(q),++h){a1=q[h]
f=b3.bc(A.b([a1.b,a1.c,a1.e],p),B.ds)
if(n){a2=B.G.bm(a1.d/100,2)
e=b3.V("td")
e.append(b3.ar("Set this budget",new A.pI(b3,m,a1,a2)))
f.append(e)}A.ar(i.querySelector("tbody")).append(f)}a0.append(i)
b7.append(a0)}a3=b3.V(b4)
q=o.r
a3.append(b3.K("h2","Savings goals ("+q.length+")"))
if(q.length===0)a3.append(b3.H("p",b5,"No goal yet."))
if(q.length!==0){p=t.s
j=A.b(["Goal","Target","By","Saved","Left","A month","State"],p)
if(n)j.push("")
i=b3.aF(j,B.dw)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.l)(q),++h){a4=q[h]
f=b3.bc(A.b([a4.a.b,a4.b,a4.c,a4.d,a4.e,a4.f,a4.w],p),B.dw)
a5=a4.r
if(a5!=null){e=A.ar(A.v(f.children).item(0))
e.toString
e.append(b3.iT(a5,null))}if(n){e=b3.V("td")
e.append(b3.ar("Remove",new A.pJ(b3,m,a4)))
f.append(e)}A.ar(i.querySelector("tbody")).append(f)}a3.append(i)}if(n){a6={}
a7=l.$2$placeholder(b6,"Like Emergency fund")
a8=l.$2$placeholder(b6,"Like 10000")
a9=l.$1("date")
a6.a=""
r=r.gL().gT()
q=A.o(r)
p=q.i("n<h.E>")
b0=A.B(new A.n(r,q.i("j(h.E)").a(new A.pK(b3)),p),p.i("h.E"))
B.a.D(b0,new A.pL())
b1=b3.W("form","edit")
b1.append(b3.an("Goal",a7))
b1.append(b3.an("Target ("+s+")",a8))
b1.append(b3.an("By",a9))
s=A.b([B.lQ],t.I)
for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,A.l)(b0),++h){b2=b0[h]
s.push(new A.p(b2.a,A.aY(b2)))}b1.append(b3.an("Counted on",b3.aL(s,"",new A.pM(a6))))
s=b3.H("button","primary","Add the goal")
s.type="submit"
s.disabled=b3.e
b1.append(s)
b1.addEventListener("submit",A.bl(new A.pN(a6,b3,m,a7,a8,o,a9)))
a3.append(b1)}b7.append(a3)},
jD(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={},d=a2.b,c=d.c,b=d.b+"|"+c.b,a=f.W("div","filing"),a0=f.a,a1=a0.cy
if(a0.gcW().length===0)a1.ap(0)
if(a1.u(0,b)){a.append(f.H("span","quiet","Sent, waiting for the phone"))
return a}s=new A.rr(f,a2)
r=a2.c
q={}
q.a=null
if(r!=null){q.a=r
a.append(f.aR("File as "+A.i(a2.d),new A.rl(q,f,s,d),"suggest"))}p=c===B.k?B.jz:B.kB
e.a=e.b=null
o=f.dy.h(0,b)
if(o==null)o=new A.p(B.a.gY(p),null)
n=e.b=o.a
e.a=o.b
m=a0.at.gcE().h(0,f.w)
c=A.a5(a0.at.d,t.N,t.G).gT()
a0=A.o(c)
a1=a0.i("n<h.E>")
l=A.B(new A.n(c,a0.i("j(h.E)").a(new A.rm(m)),a1),a1.i("h.E"))
B.a.D(l,new A.rn())
k=n===B.n||n===B.w
c=t.I
a0=A.b([],c)
for(a1=p.length,j=0;j<a1;++j){i=p[j]
h=B.aB.h(0,i)
h.toString
a0.push(new A.p(i.b,h))}a.append(f.aL(a0,e.b.b,new A.ro(e,f,b)))
if(k){c=A.b([B.e3],c)
for(a0=l.length,j=0;j<l.length;l.length===a0||(0,A.l)(l),++j){g=l[j]
c.push(new A.p(g.a,g.c))}a0=e.a
if(a0==null)a0=""
a.append(f.aL(c,a0,new A.rp(e,f,b)))}c=k&&e.a==null
a.append(f.el("File",new A.rq(e,f,s,d,k),c))
return a},
eL(a){var s,r=this,q=r.gca()*12+r.gc8()-1+a,p=B.d.C(q,12),o=B.d.R(q,12)+1
if(p<=A.aF(new A.aa(Date.now(),0,!1).F(),B.q).a)s=p===A.aF(new A.aa(Date.now(),0,!1).F(),B.q).a&&o>A.aF(new A.aa(Date.now(),0,!1).F(),B.q).b
else s=!0
if(s)return
r.as=p
r.at=o
r.ad()},
dL(a,b,c,d){var s=this,r=s.W("div",d?"row figure":"row")
r.append(s.K("span",a))
r.append(s.H("span","amount",b))
if(c!=null&&c.length!==0)r.append(s.K("small",c))
return r},
fX(a,b,c){return this.dL(a,b,c,!1)},
jk(a){var s=this,r=s.V("section")
r.append(s.K("h2","This browser"))
r.append(s.H("p","quiet","Approved on the phone and kept joined until you forget it here or remove it on the phone (Settings, Devices). Each change you send is checked by the phone before it keeps it."))
r.append(s.aR("Forget this browser",new A.pA(s),"danger"))
a.append(r)},
jw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.V("section")
e.append(f.K("h2","Setup checklist"))
s=f.a
if(!s.CW)e.append(f.H("p","quiet","Read-only. Turn on Allow changes to tick items here."))
for(r=s.c.e,q=r.length,p=v.G,o=0;o<r.length;r.length===q||(0,A.l)(r),++o){n=r[o]
e.append(f.K("h3",n.b))
for(m=n.c,l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k){j=m[k]
i=A.v(A.v(p.document).createElement("input"))
i.type="checkbox"
i.checked=s.hr(n,j)
h=!s.CW||f.e
i.disabled=h
i.addEventListener("change",A.bl(new A.qT(f,n,j)))
g=f.W("label","tick")
g.append(i)
g.append(A.v(A.v(p.document).createTextNode(" "+j.b)))
if(s.mr(n,j))g.append(f.K("small"," waiting for the phone"))
e.append(g)}}a.append(e)},
js(a){var s,r,q,p,o,n=this,m=n.a.gmJ(),l=n.V("form"),k=v.G,j=A.v(A.v(k.document).createElement("select"))
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.l)(m),++r){q=m[r]
p=A.v(A.v(k.document).createElement("option"))
p.value=q.a
p.textContent=q.b
j.append(p)}o=A.v(A.v(k.document).createElement("input"))
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
l.addEventListener("submit",A.bl(new A.qy(n,o,j)))
k=n.V("section")
k.append(n.K("h2","Statement password"))
k.append(n.H("p","quiet","Sealed in this browser to the phone's backup key, so only the phone opens it. It is never shown here."))
k.append(l)
a.append(k)}}
A.rW.prototype={
$1(a){return t.sn.a(a).b===this.a},
$S:190}
A.rX.prototype={
$1(a){return this.a.iQ(A.v(a))},
$S:13}
A.rY.prototype={
$1(a){A.v(a)
return this.a.a.cJ()},
$S:13}
A.rZ.prototype={
$1(a){t.hz.a(a)
return this.a.ke()},
$S:191}
A.pp.prototype={
$0(){return this.a.a.bQ(this.b)},
$S:5}
A.px.prototype={
$1(a){A.v(a)
return this.a.$0()},
$S:13}
A.t_.prototype={
$0(){var s=this.a
s.a.ch=this.b
s.ad()},
$S:0}
A.t0.prototype={
$0(){var s=this.a,r=s.a,q=this.b,p=q.a
if(r===p.CW)return
if(r&&!A.cO(A.v(v.G.window).confirm("Allow changes from this tab? What you send goes to the phone, which checks each change before it keeps it.")))return
p.CW=s.a
q.ad()},
$S:0}
A.t1.prototype={
$0(){var s=this.a,r=this.b
s.x=r
A.FA(r)
s.ad()},
$S:0}
A.t2.prototype={
$0(){var s=this.a
s.a.CW=!1
s.ad()},
$S:0}
A.t3.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.gfb()))
return null},
$S:0}
A.t4.prototype={
$0(){var s=this.a,r=s.ay,q=this.b
if(r.u(0,q))r.a_(0,q)
else r.m(0,q)
s.ad()},
$S:0}
A.t5.prototype={
$0(){var s=this.a
s.ax=this.b
s.ad()},
$S:0}
A.qe.prototype={
$1(a){var s,r
A.v(a).preventDefault()
s=this.b
r=A.c(s.value)
s.value=""
s=this.a
s.ai(t.U.a(new A.qd(s,r)))},
$S:14}
A.qd.prototype={
$0(){var s=v.G
return this.a.a.dj(0,this.b,A.LW(A.c(A.v(A.v(s.window).navigator).userAgent),A.c(A.v(A.v(s.window).location).hostname)))},
$S:5}
A.qs.prototype={
$2(a,b){return A.aN(A.a3(A.ad(B.G.bm(b,2)),this.a.a),!1)},
$S:89}
A.qv.prototype={
$1(a){var s,r,q,p=this.a,o=a.a,n=o.b,m=p.W("details","health-group "+n),l=p.V("summary")
switch(o.a){case 0:s="Critical"
break
case 1:s="Action required"
break
case 2:s="For information"
break
default:s=null}l.append(p.H("span","badge "+n,s))
l.append(p.K("strong",a.b))
m.append(l)
m.append(p.H("p","quiet",a.c))
r=p.W("ul","items")
for(n=a.d,l=n.length,q=0;q<n.length;n.length===l||(0,A.l)(n),++q){s=n[q]
r.append(p.K("li",s.a+": "+s.b))}m.append(r)
o=o===B.bz?"Open Loans & debt":"Open Accounts"
m.append(p.ar(o,new A.qw(p,a)))
return m},
$S:195}
A.qw.prototype={
$0(){var s=this.a
s.ax=this.b.a===B.bz?B.cs:B.el
s.ad()
return null},
$S:0}
A.qt.prototype={
$0(){var s=this.a
s.ax=B.cs
s.ad()
return null},
$S:0}
A.qu.prototype={
$0(){return this.a.eL(-1)},
$S:0}
A.ps.prototype={
$0(){var s=this.a
s.w=this.b
s.ad()},
$S:0}
A.pt.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.gfb()))
return null},
$S:0}
A.pu.prototype={
$0(){return this.a.eL(-1)},
$S:0}
A.pv.prototype={
$0(){return this.a.eL(1)},
$S:0}
A.pw.prototype={
$0(){var s=this.a
s.y=this.b
s.ad()},
$S:0}
A.py.prototype={
$1(a){return t.V.a(a).y.length!==0},
$S:11}
A.pz.prototype={
$1(a){var s,r
A.v(a)
s=this.a
r=this.b.a
s.ch=s.ch===r?null:r
s.ad()},
$S:14}
A.qn.prototype={
$1(a){return A.c(a)!=="outstanding balance"},
$S:6}
A.qo.prototype={
$2(a,b){var s=t.eY,r=s.a(a).a.e
s=B.b.l(r,s.a(b).a.e)
return s*(r==="SGD"?-1:1)},
$S:72}
A.qp.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.qm(s,this.b)))
return null},
$S:0}
A.qm.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.r(p.a.l5(o.b.bk(o.d)),$async$$0)
case 2:o=b
p.r=o==null?u.F:o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qq.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qr.prototype={
$0(){var s=this.b
s.ai(t.U.a(new A.ql(this.a,s,this.c)))
return null},
$S:0}
A.ql.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.b
o=q.c
s=2
return A.r(p.a.mv(o.b.bk(o.d),q.a.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The loan follows this statement row after the phone's next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rJ.prototype={
$4$placeholder(a,b,c,d){var s=A.v(A.v(v.G.document).createElement("input"))
s.type=b
s.value=c
if(d!=null)s.placeholder=d
this.b.append(this.a.an(a,s))
return s},
$3(a,b,c){return this.$4$placeholder(a,b,c,null)},
$S:197}
A.rK.prototype={
$3(a,b,c){var s=this.a,r=s.aL(t.DX.a(b),c,new A.rL())
this.b.append(s.an(a,r))
return r},
$S:235}
A.rL.prototype={
$1(a){},
$S:3}
A.rF.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s===B.N||s===B.Q||a.a===this.a.w},
$S:2}
A.rG.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.rI.prototype={
$1(a){return A.AF(a)},
$S:58}
A.rH.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.v(a).preventDefault()
s=h.b
r=A.b([s],t.sL)
q=h.c
if(q!=null)r.push(q)
if(B.a.M(r,new A.rD())){s=h.a
s.r="Not sent: enter dates like 17/11/2026."
s.ad()
return}r=h.d
r=A.c(r.value).length===0?null:A.ag(B.bO,A.c(r.value),t.gd)
p=A.c(h.e.value)
o=A.c(h.f.value)
n=A.c(h.r.value)
m=A.c(h.w.value)
l=h.x
s=l.$1(A.c(s.value))
k=A.c(h.y.value)
j=h.z
j=A.c(j.value).length===0?null:A.c(j.value)
i=h.a
i.ai(t.U.a(new A.rE(i,h.Q,new A.jp([k,o,j,n,s,m,p,r]),h.as,h.at,l,q,h.ax,h.ay)))},
$S:14}
A.rD.prototype={
$1(a){A.v(a)
return B.b.I(A.c(a.value)).length!==0&&A.AF(A.c(a.value))==null},
$S:199}
A.rE.prototype={
$0(){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:k=p.b
s=k!=null?3:4
break
case 3:o=p.a
s=5
return A.r(o.a.n4(k,p.c),$async$$0)
case 5:n=b
o.r=n==null?"Sent. The phone changes "+k.b+" on its next sync.":n
s=1
break
case 4:k=p.d
o=A.F(k)
m=A.aO(new A.n(k,o.i("j(1)").a(new A.rC(p.e)),o.i("n<1>")),t.hS)
l=p.f.$1(A.c(p.r.value))
o=p.a
s=m==null||l==null?6:8
break
case 6:k="Not sent: pick the bank and the date to track from."
s=7
break
case 8:k=A.c(p.w.value)
n=A.c(p.x.value)
s=9
return A.r(o.a.l7(m,o.w,n,k,l,p.c),$async$$0)
case 9:k=b
if(k==null)k=u.F
case 7:o.r=k
case 1:return A.H(q,r)}})
return A.I($async$$0,r)},
$S:5}
A.rC.prototype={
$1(a){return t.hS.a(a).a===A.c(this.a.value)},
$S:200}
A.rM.prototype={
$1(a){A.v(a)
return this.a.$1(A.c(this.b.value))},
$S:13}
A.rt.prototype={
$1(a){A.v(a)
return this.a.$1(A.c(this.b.value))},
$S:13}
A.ri.prototype={
$1(a){var s=this.a
s.cx=a
s.ad()},
$S:201}
A.r4.prototype={
$1(a){return t.b.a(a).r===this.a.w},
$S:2}
A.r5.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.r6.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:44}
A.rh.prototype={
$2(a,b){var s,r
t.oo.a(b)
s=A.AF(a)
if(B.b.I(a).length!==0&&s==null){r=this.a
r.r="Enter dates like 17/11/2026."
r.ad()
return}this.b.$1(b.$1(s))},
$S:203}
A.r9.prototype={
$1(a){return this.b.$1(this.a.cx.lv(a))},
$S:3}
A.ra.prototype={
$1(a){return this.b.$1(this.a.cx.ln(new A.r3(a)))},
$S:3}
A.r3.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:90}
A.rb.prototype={
$1(a){return this.b.$2(a,new A.r2(this.a))},
$S:3}
A.r2.prototype={
$1(a){return this.a.cx.lr(new A.r_(a))},
$S:91}
A.r_.prototype={
$0(){return this.a},
$S:92}
A.rc.prototype={
$1(a){return this.b.$2(a,new A.r1(this.a))},
$S:3}
A.r1.prototype={
$1(a){return this.a.cx.lw(new A.qZ(a))},
$S:91}
A.qZ.prototype={
$0(){return this.a},
$S:92}
A.rd.prototype={
$1(a){return this.b.$1(this.a.cx.lu(A.ag(B.dK,a,t.qx)))},
$S:3}
A.re.prototype={
$1(a){return this.b.$1(this.a.cx.lp(new A.r0(a)))},
$S:3}
A.r0.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:90}
A.rf.prototype={
$1(a){return this.b.$1(this.a.cx.lt(A.ag(B.dN,a,t.ib)))},
$S:3}
A.rg.prototype={
$1(a){var s,r
A.v(a)
s=this.a
r=this.b.b
s.CW=s.CW===r?null:r
s.ad()},
$S:14}
A.r7.prototype={
$0(){return this.b.$1(this.a.cx.hh(this.c.c-1))},
$S:0}
A.r8.prototype={
$0(){return this.b.$1(this.a.cx.hh(this.c.c+1))},
$S:0}
A.pY.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pX(s,this.b)))
return null},
$S:0}
A.pX.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.r(p.a.mP(q.b.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The phone removes the draft on its next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qb.prototype={
$4$placeholder$wide(a,b,c,d){var s,r=this.a,q=this.b,p=q.h(0,a)
if(p==null)p=""
s=r.bq("text",p,new A.qc(a,q),c)
if(d)s.className="wide"
return r.an(b,s)},
$2(a,b){return this.$4$placeholder$wide(a,b,"",!1)},
$3$placeholder(a,b,c){return this.$4$placeholder$wide(a,b,c,!1)},
$3$wide(a,b,c){return this.$4$placeholder$wide(a,b,"",c)},
$S:207}
A.qc.prototype={
$1(a){this.b.j(0,this.a,a)
return a},
$S:3}
A.pZ.prototype={
$1(a){this.a.j(0,"customer",a)
return a},
$S:3}
A.q_.prototype={
$1(a){this.b.j(0,"currency",a)
this.a.ad()},
$S:3}
A.q3.prototype={
$1(a){this.b.j(0,"d"+this.a,a)
return a},
$S:3}
A.q4.prototype={
$1(a){this.b.j(0,"q"+this.a,a)
return a},
$S:3}
A.q5.prototype={
$1(a){this.b.j(0,"p"+this.a,a)
return a},
$S:3}
A.q6.prototype={
$1(a){this.b.j(0,"g"+this.a,a)
return a},
$S:3}
A.q7.prototype={
$0(){var s=this.a;++s.db
s.ad()},
$S:0}
A.q8.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pW(s,this.b,this.c)))
return null},
$S:0}
A.pW.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$0=A.K(function(a1,a2){if(a1===1)return A.G(a2,r)
for(;;)switch(s){case 0:c=q.a
b=c.w
a=q.b
a0=a.h(0,"customer")
a0.toString
p=a.h(0,"date")
p=A.AF(p==null?"":p)
o=a.h(0,"reference")
if(o==null)o=""
n=a.h(0,"note")
if(n==null)n=""
m=a.h(0,"currency")
if(m==null)m="SGD"
l=a.h(0,"currency")
if((l==null?"SGD":l)==="SGD")l=""
else{l=a.h(0,"rate")
if(l==null)l=""}k=A.b([],t.sG)
for(j=q.c.b,i=0;i<c.db;++i){h=""+i
g=a.h(0,"d"+h)
if(g==null)g=""
f=a.h(0,"q"+h)
if(f==null)f=""
e=a.h(0,"p"+h)
if(e==null)e=""
if(j){h=a.h(0,"g"+h)
if(h==null)h="standard"}else h=null
k.push(new A.eP([g,f,e,h]))}s=2
return A.r(c.a.hY(b,m,a0,p,k,n,o,l),$async$$0)
case 2:d=a2
b=d==null
c.r=b?"Sent. The draft shows on the phone after its next sync; issue it there.":d
if(b){a.ap(0)
c.db=3}return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.q9.prototype={
$1(a){var s
A.v(a)
s=B.b.I(A.c(this.a.value))
this.b.j(0,"address",s)
return s},
$S:208}
A.qa.prototype={
$1(a){this.a.j(0,"name",a)
return a},
$S:3}
A.q0.prototype={
$1(a){this.a.j(0,"attention",a)
return a},
$S:3}
A.q1.prototype={
$1(a){this.a.j(0,"paymentDays",a)
return a},
$S:3}
A.q2.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pV(s,this.b)))
return null},
$S:0}
A.pV.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=t.N
o=A.kW(q.b,o,o)
o.j(0,"bookId",p.w)
s=2
return A.r(p.a.hZ(B.a4,o),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The customer shows after the phone's next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qU.prototype={
$0(){var s=this.a,r=s.w,q=s.gca(),p=s.gc8(),o=s.a
return A.M8(this.b,r,o.c.c,o.ch,p,s.y,q)},
$S:209}
A.qV.prototype={
$1(a){return t.E7.a(a).d},
$S:210}
A.qW.prototype={
$2(a,b){A.O(a)
A.O(b)
return b>a?b:a},
$S:27}
A.qX.prototype={
$0(){var s=this.a
s.ax=B.em
s.ad()
return null},
$S:0}
A.qY.prototype={
$1(a){return A.c(a).length!==0},
$S:6}
A.qz.prototype={
$1(a){var s=this.a
s.z=a
s.Q=25
s.ad()},
$S:3}
A.qA.prototype={
$0(){var s=this.a
s.Q+=25
s.ad()},
$S:0}
A.pR.prototype={
$0(){var s=this.a,r=s.w,q=s.a,p=new A.aa(Date.now(),0,!1).F()
return A.M0(this.b,r,q.c.c,q.ch,p,s.y)},
$S:211}
A.pU.prototype={
$1(a){return A.aN(A.a3(A.ad(B.G.bm(a,2)),this.a.a),!1)},
$S:41}
A.pS.prototype={
$3(a,b,c){return a+" \xb7 "+b+" "+A.i(this.a.$1(c))},
$S:212}
A.pT.prototype={
$2(a,b){return a+" \xb7 "+A.i(this.a.$1(b))},
$S:89}
A.qg.prototype={
$2(a,b){var s=t.P
return B.b.l(s.a(a).c,s.a(b).c)},
$S:213}
A.qh.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qi.prototype={
$0(){var s=this.b
s.dx=new A.p(A.ag(B.ac,this.a.a,t.P),null)
s.ad()},
$S:0}
A.qj.prototype={
$0(){var s=this.a,r=this.b.e
r.toString
s.dx=new A.p(r,this.c)
s.ad()},
$S:0}
A.qk.prototype={
$0(){if(!A.cO(A.v(v.G.window).confirm("Remove this "+this.b.a.toLowerCase()+" record on the phone?")))return
var s=this.a
s.ai(t.U.a(new A.qf(s,this.c)))},
$S:0}
A.qf.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.r(p.a.mQ(q.b),$async$$0)
case 2:o=b
p.r=o==null?u.m:o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rB.prototype={
$1(a){var s,r=this.a,q=r==null?null:r.c.h(0,a.a)
A:{if(q==null){r=""
break A}if(t.f.b(q)){r=a.c===B.u
s=q}else{s=null
r=!1}if(r){r=A.i(s.h(0,"amount"))+" "+A.i(s.h(0,"currency"))
break A}if(!0===q){r="yes"
break A}r=A.i(q)
break A}return r},
$S:214}
A.rv.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.rw.prototype={
$1(a){return this.a.a=a},
$S:3}
A.rx.prototype={
$0(){return this.a.a},
$S:25}
A.ry.prototype={
$0(){return A.c(this.a.value)},
$S:25}
A.rz.prototype={
$0(){var s=this.a
s.dx=null
s.ad()},
$S:0}
A.rA.prototype={
$1(a){var s,r=this
A.v(a).preventDefault()
s=r.a
s.ai(t.U.a(new A.ru(s,r.b,r.c,r.d)))},
$S:14}
A.ru.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:m=q.a
l=t.N
l=A.w(l,l)
for(p=q.c,p=new A.ac(p,A.o(p).i("ac<1,2>")).gA(0);p.n();){o=p.d
l.j(0,o.a,o.b.$0())}s=2
return A.r(m.a.fn(q.b,l,q.d),$async$$0)
case 2:n=b
l=n==null
m.r=l?"Sent. The phone keeps it on its next sync.":n
if(l)m.dx=null
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qI.prototype={
$2(a,b){var s=this.a
s.ai(t.U.a(new A.qJ(s,t.AI.a(a),b)))
return null},
$S:215}
A.qJ.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.r(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=q.c
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qD.prototype={
$2(a,b){return A.O(a)+t.CU.a(b).b},
$S:216}
A.qE.prototype={
$1(a){return t.di.a(a).c>0},
$S:217}
A.qF.prototype={
$0(){return this.b.$2(this.a.a.gm6(),"Sent. The phone files them on its next sync.")},
$S:0}
A.qG.prototype={
$0(){return this.b.$2(new A.qC(this.a,this.c),"Sent. The phone confirms it on its next sync.")},
$S:0}
A.qC.prototype={
$0(){return this.a.a.ll(this.b.a)},
$S:10}
A.qH.prototype={
$0(){return this.b.$2(new A.qB(this.a,this.c),u.m)},
$S:0}
A.qB.prototype={
$0(){return this.a.a.mR(this.b.a)},
$S:10}
A.po.prototype={
$3$placeholder(a,b,c){var s=A.v(A.v(v.G.document).createElement("input"))
s.type="text"
s.value=b
if(c!=null)s.placeholder=c
this.b.append(this.a.an(a,s))
return s},
$2(a,b){return this.$3$placeholder(a,b,null)},
$S:219}
A.pn.prototype={
$1(a){var s,r=this
A.v(a).preventDefault()
s=r.a
s.ai(t.U.a(new A.pm(s,r.b,r.c,r.d,r.e,r.f,r.r,r.w)))},
$S:14}
A.pm.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
n=A.c(q.c.value)
m=A.c(q.d.value)
l=A.c(q.e.value)
s=2
return A.r(p.a.lV(o,n,A.c(q.f.value),m,l,A.c(q.r.value),A.c(q.w.value)),$async$$0)
case 2:l=b
p.r=l==null?"Sent. The phone changes "+o.b+" on its next sync.":l
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qM.prototype={
$2(a,b){var s=t.z9
return B.b.l(s.a(a).a,s.a(b).a)},
$S:220}
A.qN.prototype={
$2(a,b){var s=t.c5
return B.b.l(s.a(a).a,s.a(b).a)},
$S:82}
A.qO.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.qL(s,this.b)))
return null},
$S:0}
A.qL.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.r(p.a.mS(o),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone removes "+o.a+" on its next sync.":n
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qP.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qQ.prototype={
$1(a){return this.a.b=a},
$S:3}
A.qR.prototype={
$1(a){var s
A.v(a).preventDefault()
s=this.b
s.ai(t.U.a(new A.qK(this.a,s,this.c)))},
$S:14}
A.qK.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.b
o=A.c(q.c.value)
n=q.a
m=A.ag(B.bP,n.a,t.in)
n=n.b
if(n.length===0)n=null
s=2
return A.r(p.a.i0(o,m,n),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone keeps those senders' SMS after its next sync and opening.":n
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rU.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.rV(s,t.AI.a(a))))
return null},
$S:45}
A.rV.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.r(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=u.L
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rP.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:94}
A.rQ.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:44}
A.rR.prototype={
$1(a){return this.a.a=a},
$S:3}
A.rS.prototype={
$0(){var s=this,r=s.a
if(r.a.length!==0)s.c.$1(new A.rO(r,s.b,s.d))},
$S:0}
A.rO.prototype={
$0(){return this.b.a.li(this.c,this.a.a)},
$S:10}
A.rT.prototype={
$0(){var s=this
return s.b.$1(new A.rN(s.a,s.c,s.d))},
$S:0}
A.rN.prototype={
$0(){return this.a.a.i_(this.b,A.c(this.c.value))},
$S:10}
A.pr.prototype={
$1(a){return B.G.bm(B.G.eV(a,0,1)*100,1)+"%"},
$S:41}
A.pq.prototype={
$2(a,b){var s=this.a.W("span",a)
A.v(s.style).width=this.b.$1(b)
return s},
$S:223}
A.pP.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.pQ(s,t.AI.a(a))))
return null},
$S:45}
A.pQ.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.r(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p=u.L
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.pO.prototype={
$3$placeholder$value(a,b,c){var s=A.v(A.v(v.G.document).createElement("input"))
s.type=a
s.placeholder=b
s.value=c
return s},
$1(a){return this.$3$placeholder$value(a,"","")},
$2$placeholder(a,b){return this.$3$placeholder$value(a,b,"")},
$S:224}
A.pG.prototype={
$0(){var s=this
return s.b.$1(new A.pF(s.a,s.c,s.d))},
$S:0}
A.pF.prototype={
$0(){var s=this.a
return s.a.eg(s.w,this.b.a,A.c(this.c.value))},
$S:10}
A.pH.prototype={
$0(){return this.b.$1(new A.pE(this.a,this.c))},
$S:0}
A.pE.prototype={
$0(){var s=this.a
return s.a.eg(s.w,this.b.a,null)},
$S:10}
A.pI.prototype={
$0(){var s=this
return s.b.$1(new A.pD(s.a,s.c,s.d))},
$S:0}
A.pD.prototype={
$0(){var s=this.a
return s.a.eg(s.w,this.b.a,this.c)},
$S:10}
A.pJ.prototype={
$0(){return this.b.$1(new A.pC(this.a,this.c))},
$S:0}
A.pC.prototype={
$0(){return this.a.a.mO(this.b.a)},
$S:10}
A.pK.prototype={
$1(a){var s
t.b.a(a)
if(a.r===this.a.w){s=a.d
s=!(s===B.y||s===B.o)}else s=!1
return s},
$S:2}
A.pL.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.pM.prototype={
$1(a){return this.a.a=a},
$S:3}
A.pN.prototype={
$1(a){var s=this
A.v(a).preventDefault()
s.c.$1(new A.pB(s.a,s.b,s.d,s.e,s.f,s.r))},
$S:14}
A.pB.prototype={
$0(){var s=this,r=A.c(s.c.value),q=A.c(s.d.value),p=A.c(s.f.value),o=s.a.a
if(o.length===0)o=null
return s.b.a.l6(r,q,s.e.c,p,o)},
$S:10}
A.rr.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.rs(s,t.AI.a(a),this.b)))
return null},
$S:45}
A.rs.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=2
return A.r(q.b.$0(),$async$$0)
case 2:p=b
if(p==null)p="Sent "+q.c.a+". The phone applies it on its next sync."
q.a.r=p
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rl.prototype={
$0(){var s=this
return s.c.$1(new A.rk(s.a,s.b,s.d))},
$S:0}
A.rk.prototype={
$0(){return this.b.a.l4(this.c,this.a.a)},
$S:10}
A.rm.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:94}
A.rn.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:44}
A.ro.prototype={
$1(a){var s=this.b
s.dy.j(0,this.c,new A.p(A.ag(B.au,a,t.v_),this.a.a))
s.ad()},
$S:3}
A.rp.prototype={
$1(a){var s=this.b,r=this.a.b,q=a.length===0?null:a
s.dy.j(0,this.c,new A.p(r,q))
s.ad()},
$S:3}
A.rq.prototype={
$0(){var s=this
return s.c.$1(new A.rj(s.a,s.b,s.d,s.e))},
$S:0}
A.rj.prototype={
$0(){var s=this,r=s.a,q=r.b
r=s.d?r.a:null
return s.b.a.m8(s.c,q,r)},
$S:10}
A.pA.prototype={
$0(){if(!A.cO(A.v(v.G.window).confirm("Forget this browser? The next visit needs the passphrase and the phone again.")))return
var s=this.a
s.ai(t.U.a(s.a.gmc()))},
$S:0}
A.qT.prototype={
$1(a){var s
A.v(a)
s=this.a
s.ai(t.U.a(new A.qS(s,this.b,this.c)))
return null},
$S:13}
A.qS.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=p
s=2
return A.r(p.a.ec(q.b,q.c),$async$$0)
case 2:o.r=b
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qy.prototype={
$1(a){var s,r
A.v(a).preventDefault()
s=this.b
r=A.c(s.value)
s.value=""
s=this.a
s.ai(t.U.a(new A.qx(s,this.c,r)))},
$S:14}
A.qx.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.r(p.a.dv(A.c(q.b.value),q.c),$async$$0)
case 2:o=b
p.r=o==null?"Sealed and sent. The phone keeps it on its next sync; this page cannot show it.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.dn.prototype={}
A.dP.prototype={}
A.kz.prototype={}
A.nd.prototype={}
A.wp.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.wq.prototype={
$1(a){var s=A.a5(this.a.d,t.N,t.G).h(0,a)
s=s==null?null:s.c
return A.hI(s==null?a:s)},
$S:12}
A.wn.prototype={
$2(a,b){var s=t.kc
return B.b.l(s.a(a).b,s.a(b).b)},
$S:226}
A.wo.prototype={
$2(a,b){var s=t.y3
return B.b.l(s.a(a).b,s.a(b).b)},
$S:227}
A.l5.prototype={
k(a){return"NoSyncFolder"}}
A.h_.prototype={
cw(a,b){var s=0,r=A.J(t.l3),q,p=this,o,n
var $async$cw=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.r(p.a.$3$headers("GET",a,A.S(["authorization","Bearer "+A.i(p.b.$0())],o,o)),$async$cw)
case 3:n=d
o=n.a
if(o===401)throw A.k(new A.hm())
if(o!==200)throw A.k(A.nT(o,b))
q=n
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$cw,r)},
d1(){var s=0,r=A.J(t.N),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$d1=A.K(function(a,a0){if(a===1)return A.G(a0,r)
for(;;)switch(s){case 0:c=p.d
if(c!=null){q=c
s=1
break}o="SanthIQ/Sync".split("/"),n=o.length,m=t.f,l=t.L,k=t.jS,j=t.N,i=t.z,h="root",g=0
case 3:if(!(g<n)){s=5
break}f=o[g]
e=A.ao(f,"\\","\\\\")
b=l
s=6
return A.r(p.cw(A.jB("https","www.googleapis.com","/drive/v3/files",A.S(["q","name = '"+A.ao(e,"'","\\'")+"' and '"+h+"' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false","fields","files(id)","orderBy","createdTime","pageSize","1"],j,i)),"folder search"),$async$d1)
case 6:e=b.a(a0.b)
d=k.a(m.a(B.z.bj(new A.eR(!1).cv(e,0,null,!0),null)).h(0,"files"))
if(d==null)d=B.b0
e=J.an(d)
if(e.ga5(d))throw A.k(new A.l5())
e=m.a(e.gY(d)).h(0,"id")
e.toString
A.c(e)
case 4:++g,h=e
s=3
break
case 5:q=p.d=h
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d1,r)},
bl(){var s=0,r=A.J(t.a),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bl=A.K(function(a2,a3){if(a2===1)return A.G(a3,r)
for(;;)switch(s){case 0:s=3
return A.r(p.d1(),$async$bl)
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
return A.r(p.cw(A.jB("https","www.googleapis.com","/drive/v3/files",h),"list"),$async$bl)
case 7:g=a.a(a0.bj(a1.cb(a3.b),null))
h=k.a(g.h(0,"files"))
h=J.dh(h==null?B.b0:h,l)
f=h.$ti
h=new A.a7(h,h.gq(0),f.i("a7<Q.E>"))
f=f.i("Q.E")
while(h.n()){e=h.d
if(e==null)e=f.a(e)
d=e.h(0,"name")
d.toString
b.aI(A.c(d),new A.nF(e))}i=A.m(g.h(0,"nextPageToken"))
case 5:if(i!=null){s=4
break}case 6:o=A.o(b).i("au<1>")
b=A.B(new A.au(b,o),o.i("h.E"))
q=b
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bl,r)},
c1(a){var s=0,r=A.J(t.p),q,p=this,o,n
var $async$c1=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=p.e
s=!n.E(a)?3:4
break
case 3:s=5
return A.r(p.bl(),$async$c1)
case 5:case 4:o=n.h(0,a)
if(o==null)o=A.f(A.aq("no file "+a))
s=6
return A.r(p.cw(A.jB("https","www.googleapis.com","/drive/v3/files/"+o,A.S(["alt","media"],t.N,t.z)),"download"),$async$c1)
case 6:q=c.b
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$c1,r)},
c2(a,b){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j
var $async$c2=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:j=p.e
s=!j.E(a)?3:4
break
case 3:s=5
return A.r(p.bl(),$async$c2)
case 5:case 4:if(j.E(a)){s=1
break}s=6
return A.r(p.d1(),$async$c2)
case 6:o=d
n=new A.hx(A.b([],t.eE))
m=t.N
n.m(0,B.F.O("--santhiq-page-boundary-7f3a\r\ncontent-type: application/json; charset=UTF-8\r\n\r\n"+B.z.be(A.S(["name",a,"parents",A.b([o],t.s)],m,t.K),null)+"\r\n--santhiq-page-boundary-7f3a\r\ncontent-type: application/octet-stream\r\n\r\n"))
n.m(0,b)
n.m(0,B.F.O("\r\n--santhiq-page-boundary-7f3a--\r\n"))
l=A.jB("https","www.googleapis.com","/upload/drive/v3/files",A.S(["uploadType","multipart","fields","id"],m,t.z))
m=A.kW(A.S(["authorization","Bearer "+A.i(p.b.$0())],m,m),m,m)
m.j(0,"content-type","multipart/related; boundary=santhiq-page-boundary-7f3a")
s=7
return A.r(p.a.$4$body$headers("POST",l,n.ff(),m),$async$c2)
case 7:k=d
m=k.a
if(m===401)throw A.k(new A.hm())
if(m!==200)throw A.k(A.nT(m,"upload"))
m=t.f.a(B.z.bj(B.R.cb(k.b),null)).h(0,"id")
m.toString
j.j(0,a,A.c(m))
case 1:return A.H(q,r)}})
return A.I($async$c2,r)},
$iJx:1}
A.nF.prototype={
$0(){var s=this.a.h(0,"id")
s.toString
return A.c(s)},
$S:25}
A.db.prototype={}
A.l_.prototype={}
A.io.prototype={}
A.ws.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.wt.prototype={
$1(a){var s,r,q
t.x.a(a)
s=a.e
r=s==null
q=r?a.a:A.aY(s)
s=(r?null:s.d)===B.o&&a.b.a.a.ga9(0)>=0?" (a credit on a loan: check its statement)":""
return new A.db(q+s,A.cv(a.c,this.a),this.b.$1(a.gcX()),a.b.a.a.ga9(0)<0)},
$S:228}
A.o0.prototype={}
A.wr.prototype={
$1(a){return a.a.cm(0)},
$S:229}
A.kr.prototype={}
A.fZ.prototype={}
A.h3.prototype={}
A.o1.prototype={}
A.wy.prototype={
$2(a,b){return A.aN(A.a3(new A.P(A.aC(a),0- -A.ev(b)),b),this.a)},
$1(a){return this.$2(a,"SGD")},
$S:230}
A.wx.prototype={
$1(a){var s=this.a.a7.a6(B.a4,a)
s=s==null?null:A.m(s.c.h(0,"name"))
return s==null?"A customer no longer kept":s},
$S:12}
A.wu.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.m(a.c.h(0,"name"))
r.toString
s=A.m(b.c.h(0,"name"))
s.toString
return B.b.l(r,s)},
$S:21}
A.wv.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="quantity",a1="unitPrice",a2="amount",a3="currency",a4="is not a supported currency",a5=b.a,a6=b.b,a7=a6.b,a8=A.FS(a5,a7),a9=a8.a,b0=a6.c,b1=A.m(b0.h(0,"customerId"))
b1.toString
b1=b.c.$1(b1)
b0=A.ay(b0.h(0,"date"))
b0.toString
b0=A.vz(b0)
s=A.b([],t.CP)
for(a5=A.mF(a5,a7),a7=a5.length,r=b.f,q=t.f,p=b.d,o=b.e,n=t.N,m=t.X,l=0;l<a5.length;a5.length===a7||(0,A.l)(a5),++l){k=a5[l].c
j=A.m(k.h(0,"description"))
j.toString
if(typeof k.h(0,a0)=="string"){i=k.h(0,a0)
i.toString
i=A.dt(A.c(i))}else i=a
i=A.i(i)
if(q.b(k.h(0,a1))){h=k.h(0,a1)
h.toString
h=q.a(h).G(0,n,m)
g=h.h(0,a2)
g.toString
g=A.ad(A.c(g))
h=h.h(0,a3)
h.toString
A.c(h)
f=new A.q(g,h)
e=B.e.h(0,h)
if(e==null)A.f(A.x(h,a3,a4))
if((g.b<=0?0:Math.max(g.gv().b,0))>e)A.f(A.z(h+" allows "+A.i(e)+" decimal places",g.k(0),a))
h=f}else h=a
h.toString
h=A.aN(h,p)
if(typeof k.h(0,a0)=="string"){g=k.h(0,a0)
g.toString
g=A.dt(A.c(g))}else g=a
g.toString
if(q.b(k.h(0,a1))){f=k.h(0,a1)
f.toString
f=q.a(f).G(0,n,m)
d=f.h(0,a2)
d.toString
d=A.ad(A.c(d))
f=f.h(0,a3)
f.toString
A.c(f)
c=new A.q(d,f)
e=B.e.h(0,f)
if(e==null)A.f(A.x(f,a3,a4))
if((d.b<=0?0:Math.max(d.gv().b,0))>e)A.f(A.z(f+" allows "+A.i(e)+" decimal places",d.k(0),a))
f=c}else f=a
g=new A.P(g.a.a0(0,A.aC(f.gaT())),g.b).B(0,A.ad("0.5")).c9(0,B.bc).b_().b0(0)
if(q.b(k.h(0,a1))){f=k.h(0,a1)
f.toString
f=q.a(f).G(0,n,m)
d=f.h(0,a2)
d.toString
d=A.ad(A.c(d))
f=f.h(0,a3)
f.toString
A.c(f)
c=new A.q(d,f)
e=B.e.h(0,f)
if(e==null)A.f(A.x(f,a3,a4))
if((d.b<=0?0:Math.max(d.gv().b,0))>e)A.f(A.z(f+" allows "+A.i(e)+" decimal places",d.k(0),a))
f=c}else f=a
f=o.$2(g,f.b)
if(r)k=A.m(k.h(0,"gst"))==="zero-rated"?"Zero-rated":"Standard-rated"
else k=""
s.push(new A.kr(j,i,h,f,k))}if(a9==null)a5=a
else{a5=a9.w
a7=a9.gcZ()
r=a9.z
q=a9.cx
a7=A.i(o.$2(a7+r,q))
r=a9.y!=null?" with GST "+A.i(o.$2(r,q)):""
if(a9.gfl()==null)q=""
else{q=a9.gfl()
q.toString
q=" ("+A.i(o.$1(q))+" at "+A.i(a9.cy)+")"}q=a5+" \xb7 "+a7+r+q+" \xb7 due "+A.vz(a9.e)
a5=q}return new A.fZ(a6,b1,b0,s,a5,a8.b)},
$S:231}
A.ww.prototype={
$0(){var s,r,q,p=this,o=p.a,n=p.b,m="company-invoice:"+n.a,l=o.aD.c.h(0,m),k=l==null?null:A.G1(o,l).d,j=A.vz(n.d),i=n.e,h=A.vz(i),g=p.c,f=n.z,e=n.cx,d=g.$2(n.gcZ()+f,e)
f=n.y!=null?g.$2(f,e):""
s=A.b([],t.s)
for(o=A.FQ(o,m),m=o.length,r=0;r<o.length;o.length===m||(0,A.l)(o),++r){q=o[r]
s.push(q.w+" "+A.i(g.$2(q.x+q.Q,e)))}o=B.a.Z(s,", ")
if(k===B.bD)m="Paid"
else if(k===B.bC)m="Part paid"
else m=p.d.l(0,i)>0?"Overdue":"Open"
return new A.h3(n,j,h,d,f,o,m)},
$S:232}
A.dK.prototype={}
A.wF.prototype={
$2(a,b){var s,r,q,p,o,n=A.aO(new A.n(B.ac,t.Ab.a(new A.wG(a)),t.rx),t.P),m=n==null?null:this.a.a7.a6(n,b)
if(m==null)return b
for(s=n.d,r=s.length,q=m.c,p=0;p<r;++p){o=s[p]
if(o.c===B.j&&A.m(q.h(0,o.a))!=null){s=A.m(q.h(0,o.a))
s.toString
return s}}return b},
$S:233}
A.wG.prototype={
$1(a){return t.P.a(a).b===this.a},
$S:56}
A.wH.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c,i=b.a,h=j.h(0,i)
if(h==null)return""
s=b.c
if(B.r===s){r=A.ay(j.h(0,i))
return r==null?A.i(h):A.cv(r,k.a)}if(B.u===s){q=a.av(i)
return q==null?"":A.aN(q,k.b)}if(B.a3===s){j=k.c.r.a.h(0,A.i(h))
return j==null?A.i(h):A.aY(j)}if(B.af===s)return A.fG(A.i(h),k.c)
if(B.ar===s)return A.AO(k.c,A.i(h))
if(B.bt===s){j=A.b([],t.s)
for(i=J.R(t.j.a(h)),p=t.N,o=t.o,n=k.c;i.n();){m=A.i(i.gt())
if(m==="me")m="Me"
else{m=A.a5(n.p3,p,o).h(0,m)
m=m==null?null:m.b
if(m==null)m="someone removed"}j.push(m)}return B.a.Z(j,", ")}if(B.C===s)return k.d.$2(b.f,A.i(h))
if(B.Z===s)return J.Y(h,!0)?"Yes":""
if(B.a8===s)return"\u2022\u2022"+A.i(h)
if(B.O===s){j=A.i(h)
l=A.ao(j,"-"," ")
j=l.length
if(j===0)j=""
else{if(0>=j)return A.a(l,0)
j=l[0].toUpperCase()+B.b.ae(l,1)}return j}if(B.aK===s||B.bu===s||B.ao===s||B.bv===s||B.aJ===s)return"Attached"
if(B.a2===s||B.ap===s){j=A.i(h)
l=A.ao(j,"\n",", ")
return l.length>80?B.b.X(l,0,79)+"\u2026":l}if(B.aL===s)return A.i(h)+"%"
return A.i(h)},
$S:234}
A.wE.prototype={
$1(a){return A.AO(this.a,a)},
$S:12}
A.wD.prototype={
$1(a){return a==null?"":A.cv(a,this.a)},
$S:66}
A.wA.prototype={
$2(a,b){var s=t.ud
s.a(a)
s.a(b)
return B.b.l(a.gcl(),b.gcl())},
$S:236}
A.wB.prototype={
$1(a){return!B.ed.u(0,t.P.a(a))},
$S:56}
A.wC.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.b([],t.e)
for(s=this.b,r=s.d,q=r.length,p=this.a,o=0;o<q;++o){n=r[o]
if(B.a.M(p.a,new A.wz(n)))e.push(n)}r=t.s
q=A.b([],r)
for(m=e.length,o=0;o<e.length;e.length===m||(0,A.l)(e),++o)q.push(e[o].b)
m=A.b([],t.tZ)
for(l=p.a,k=l.length,j=this.c,o=0;o<l.length;l.length===k||(0,A.l)(l),++o){i=l[o]
h=A.b([],r)
for(g=e.length,f=0;f<e.length;e.length===g||(0,A.l)(e),++f)h.push(j.$2(i,e[f]))
m.push(h)}return new A.dK(s.c,q,m,B.dI,s,p.a)},
$S:95}
A.wz.prototype={
$1(a){return t.u.a(a).c.h(0,this.a.a)!=null},
$S:22}
A.vT.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.b([],t.t)
for(s=this.a,r=s.b,q=s.c,p=0;p<r.length;++p)if(B.a.M(q,new A.vS(p)))g.push(p)
o=t.s
n=A.b([],o)
for(m=g.length,l=0;l<g.length;g.length===m||(0,A.l)(g),++l){p=g[l]
if(!(p<r.length))return A.a(r,p)
n.push(r[p])}r=A.b([],t.tZ)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.l)(q),++l){k=q[l]
j=A.b([],o)
for(i=g.length,h=0;h<g.length;g.length===i||(0,A.l)(g),++h){p=g[h]
if(!(p<k.length))return A.a(k,p)
j.push(k[p])}r.push(j)}return new A.dK(s.a,n,r,s.d,s.e,s.f)},
$S:95}
A.vS.prototype={
$1(a){return J.at(t.a.a(a),this.a).length!==0},
$S:81}
A.kJ.prototype={}
A.h9.prototype={}
A.wM.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.wN.prototype={
$1(a){var s=a.as
switch(s==null?null:s.a){case B.bT:s=0
break
case B.b2:s=1
break
case B.bU:s=2
break
case B.bV:s=3
break
case null:case void 0:s=4
break
default:s=null}return s},
$S:238}
A.wJ.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d===B.o},
$S:2}
A.wK.prototype={
$2(a,b){var s,r,q,p=t.b
p.a(a)
p.a(b)
p=this.a
s=B.a.by(p,a.e)-B.a.by(p,b.e)
if(s!==0)return s
p=a.CW!=null
if(p!==(b.CW!=null))return p?1:-1
p=this.b
r=p.$1(a)
p=p.$1(b)
if(typeof r!=="number")return r.aa()
if(typeof p!=="number")return A.CX(p)
q=r-p
return q!==0?q:B.b.l(a.b,b.b)},
$S:8}
A.wL.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a,a2=a.b,a3=a.c,a4=A.Ga(a1,a2,a3),a5=a4.c,a6=A.F(a5),a7=A.aO(new A.n(a5,a6.i("j(1)").a(new A.wI(a3)),a6.i("n<1>")),t.pt),a8=a7==null?a0:a7.b
if(a8==null){s=a2.as==null?B.cD:A.D0(a2,a3).w
A:{if(s instanceof A.en){r=s.a
q=r
break A}q=a0
break A}a8=q}q=a2.as
p=q==null
o=p?a0:q.r
n=p?a0:q.w
q=n==null
m=q?a0:a1.gL().h(0,n)
a1=A.aY(a2)
p=a4.a
p=p==null||a4.b==null?"":A.i(p)+" of "+A.i(a4.b)+" instalments paid"
if(a8==null)l="Next due unknown: add the payment day"
else{l=A.cv(a8,a3)
l="Next due "+l+" \xb7 "+A.i(o==null?"amount not set":a.d.$1(o))}if(q)q="Not in the forecast: no paying account"
else q="In the forecast from "+(m==null?n:A.aY(m))
k=a4.d
if(k==null)k="Not known yet"
else{k=A.i(a.d.$1(k))
j=a4.e
j=j==null?"":", "+A.cv(j,a3)
j=k+" ("+a4.f+j+")"
k=j}j=A.b([],t.DA)
for(a6=a6.i("aQ<1>"),a5=new A.aQ(a5,a6),a5=new A.a7(a5,a5.gq(0),a6.i("a7<a2.E>")),i=a.d,a6=a6.i("a2.E");a5.n();){h=a5.d
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
b=B.kV.h(0,h.d)
b.toString
h=h.r
h=h==null?"":A.i(i.$1(h))+" still due"
j.push(new A.kJ("No. "+g+" \xb7 "+(""+f.c+" "+e+d),c,b,h))}return new A.h9(a2,a1,p,l,q,k,a4.r,j)},
$S:239}
A.wI.prototype={
$1(a){return t.pt.a(a).b.l(0,this.a)>=0},
$S:57}
A.zN.prototype={
$1(a){return B.b.ac(B.d.k(a),2,"0")},
$S:33}
A.eo.prototype={}
A.ll.prototype={}
A.jZ.prototype={}
A.pe.prototype={}
A.wQ.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.wO.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:96}
A.wP.prototype={
$1(a){return t.iJ.a(a).b},
$S:241}
A.fi.prototype={}
A.fj.prototype={
U(){return"KpiTone."+this.b}}
A.lm.prototype={}
A.h2.prototype={
U(){return"HealthLevel."+this.b}}
A.d_.prototype={}
A.du.prototype={}
A.pj.prototype={}
A.x7.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.wS.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:96}
A.xh.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.n(a,s.i("j(1)").a(new A.xi()),s.i("n<1>")).a4(0,A.a3($.L(),this.a),new A.xj(),t.B)},
$S:242}
A.xi.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at!=null},
$S:11}
A.xj.prototype={
$2(a,b){var s
t.B.a(a)
s=t.V.a(b).at
s.toString
return a.B(0,s)},
$S:243}
A.x8.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.n(a,s.i("j(1)").a(new A.x9()),s.i("n<1>")).gq(0)},
$S:244}
A.x9.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at==null},
$S:11}
A.x5.prototype={
$1(a){return B.a.M(t.Ft.a(a),new A.x6())},
$S:245}
A.x6.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at!=null},
$S:11}
A.xa.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.c4(new A.n(a,s.i("j(1)").a(new A.xe()),s.i("n<1>")),s.i("A(1)").a(new A.xf()),s.i("c4<1,A>")).a4(0,null,new A.xg(),t.tF)},
$S:97}
A.xe.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.ax!=null},
$S:11}
A.xf.prototype={
$1(a){var s=t.V.a(a).ax
s.toString
return s},
$S:98}
A.xg.prototype={
$2(a,b){t.tF.a(a)
t.h.a(b)
return a==null||b.l(0,a)<0?b:a},
$S:99}
A.wT.prototype={
$1(a){return t.xw.a(a).f===this.a},
$S:19}
A.wU.prototype={
$1(a){return t.xw.a(a).e==null},
$S:19}
A.wR.prototype={
$1(a){return a==null?"":", oldest statement "+A.cv(a,this.a)},
$S:66}
A.wY.prototype={
$1(a){t.ov.a(a)
return a.a.e===this.a&&a.y.length!==0},
$S:49}
A.wZ.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:24}
A.x_.prototype={
$1(a){return t.xw.a(a).r},
$S:19}
A.x0.prototype={
$1(a){return t.xw.a(a).r},
$S:19}
A.x1.prototype={
$1(a){return t.xw.a(a).r},
$S:19}
A.x2.prototype={
$1(a){return!t.V.a(a).Q},
$S:11}
A.x3.prototype={
$1(a){return t.xw.a(a).r},
$S:19}
A.x4.prototype={
$1(a){return t.V.a(a).ax==null},
$S:11}
A.wV.prototype={
$1(a){var s=t.V.a(a).as
s=s==null?null:B.b.am(s,"No statement since")
return s===!0},
$S:11}
A.wW.prototype={
$1(a){t.V.a(a)
return a.w&&!B.a.u(this.a,a)},
$S:11}
A.wX.prototype={
$1(a){t.V.a(a)
return a.y.length!==0&&!B.a.u(this.a,a)},
$S:11}
A.xb.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.ah(a,s.i("A(1)").a(new A.xc()),s.i("ah<1,A>")).a4(0,null,new A.xd(),t.tF)},
$S:97}
A.xc.prototype={
$1(a){var s=t.V.a(a).ax
s.toString
return s},
$S:98}
A.xd.prototype={
$2(a,b){t.tF.a(a)
t.h.a(b)
return a==null||b.l(0,a)<0?b:a},
$S:99}
A.AG.prototype={
$0(){var s,r,q,p=this,o=p.c,n=A.F8(p.b,o),m=o.d,l=m.b-1
if(!(l>=0&&l<12))return A.a(B.l,l)
l=B.l[l]
s=p.a
r=A.aY(s.a)
o=o.e==null?"Loan instalment":"Card bill"
q=n==null?null:A.aN(n,p.d)
return new A.du(""+m.c+" "+l+" "+m.a,r,o,q,s.a.e,m.l(0,p.e)<0)},
$S:250}
A.hh.prototype={}
A.hm.prototype={
k(a){return"SignInExpired"}}
A.kA.prototype={
k(a){return"Google "+this.b+" failed: HTTP "+this.a}}
A.kB.prototype={
k(a){return"GoogleTookTooLong"}}
A.Bz.prototype={
$4$body$headers(a,b,c,d){return this.a.$4$body$headers(A.c(a),t.ya.a(b),t.F5.a(c),t.yz.a(d)).n_(this.b,new A.By())},
$2(a,b){return this.$4$body$headers(a,b,null,B.dR)},
$3$headers(a,b,c){return this.$4$body$headers(a,b,null,c)},
$S:101}
A.By.prototype={
$0(){return A.f(new A.kB())},
$S:84}
A.t6.prototype={}
A.eA.prototype={
U(){return"PageStage."+this.b}}
A.ld.prototype={
geN(){var s=this.Q
if(s==null)s=this.Q=new A.t8(this).$0()
return s},
ck(){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ck=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.e.c0()
s=3
return A.r(t.uo.b(h)?h:A.JS(A.m(h),t.T),$async$ck)
case 3:g=b
if(g==null){s=1
break}p=5
m=t.J.a(B.z.bj(g,null))
h=J.at(m,"ticket")
h.toString
s=8
return A.r(A.o3(t.f.a(h).G(0,t.N,t.X)),$async$ck)
case 8:n.f=b
h=J.at(m,"account")
h.toString
n.r=A.c(h)
l=A.m(J.at(m,"token"))
h=A.m(J.at(m,"tokenUntil"))
k=A.DS(h==null?"":h)
h=k
j=h==null?null:h.dX(n.b.$0().F())
s=l!=null&&j!=null&&j.a>12e7?9:10
break
case 9:s=11
return A.r(n.bQ(new A.hn(l,j)),$async$ck)
case 11:case 10:p=2
s=7
break
case 5:p=4
f=o.pop()
s=12
return A.r(n.cK(),$async$ck)
case 12:s=7
break
case 4:s=2
break
case 7:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$ck,r)},
cB(){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j
var $async$cB=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:l=p.as
k=p.z
j=p.w
if(l==null||k==null||p.cx!==B.av){s=1
break}s=3
return A.r(l.b.bA(),$async$cB)
case 3:o=b
n=k.a
m=p.y
s=4
return A.r(p.e.cn(B.z.be(A.S(["ticket",o,"account",n,"token",m,"tokenUntil",j==null?null:j.dl()],t.N,t.X),null)),$async$cB)
case 4:p.x=!0
case 1:return A.H(q,r)}})
return A.I($async$cB,r)},
cK(){var s=0,r=A.J(t.H),q=this,p
var $async$cK=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.e.ap(0)
s=2
return A.r(p,$async$cK)
case 2:q.r=q.f=null
q.cJ()
return A.H(null,r)}})
return A.I($async$cK,r)},
bQ(a){return this.i7(t.gc.a(a))},
i7(a){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bQ=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ay=null
m=null
p=4
s=7
return A.r(A.xU(n.a,a.a),$async$bQ)
case 7:m=c
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.aw(f)
n.ay=A.jH(l)
s=1
break
s=6
break
case 3:s=2
break
case 6:j=m
i=j instanceof A.iO
h=i?j.a:null
if(i){n.ay=A.i(h)+" is a work or school account. Sign in with SanthIQ's own Google account."
s=1
break}s=j instanceof A.iP?8:9
break
case 8:i=n.z
if(i!=null&&i.a!==m.a){n.cJ()
n.ay="That is another account than the one this tab was using, so the page started again."
s=1
break}n.y=a.a
n.w=n.b.$0().F().aw(a.b.a)
n.z=m
i=n.cx
if(i===B.bX)i=n.cx=B.bY
g=n.f
s=i===B.bY&&g!=null?10:11
break
case 10:s=n.r!==m.a?12:14
break
case 12:i=n.e.ap(0)
s=15
return A.r(i,$async$bQ)
case 15:n.f=null
s=13
break
case 14:n.as=A.Ev(n.geN(),g)
n.cx=B.bZ
s=16
return A.r(n.bK(),$async$bQ)
case 16:s=1
break
case 13:case 11:s=n.x?17:18
break
case 17:s=19
return A.r(n.cB(),$async$bQ)
case 19:case 18:case 9:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bQ,r)},
dj(a,b,c){return this.ms(0,b,c)},
ms(a,b,c){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$dj=A.K(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.ay=null
if(n.cx!==B.bY){s=1
break}p=4
s=7
return A.r(A.cL(n.geN(),"browser",c,n.b.$0(),b),$async$dj)
case 7:m=e
n.as=A.Ev(n.geN(),m)
n.cx=B.bZ
s=8
return A.r(n.bK(),$async$dj)
case 8:p=2
s=6
break
case 4:p=3
j=o.pop()
l=A.aw(j)
n.ay=A.jH(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$dj,r)},
bK(){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bK=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:f=n.as
if(f==null||n.cx===B.dW){s=1
break}p=4
s=7
return A.r(f.bg(),$async$bK)
case 7:m=b
if(J.jU(m)){if(f.b===n.f)throw A.k(new A.cU())
s=1
break}i=new A.kF(A.w(t.N,t._))
B.a.a2(f.e,i.gl8())
l=A.IZ(i)
h=n.z
h.toString
k=A.LE(h,l)
s=k!=null?8:9
break
case 8:s=10
return A.r(n.cK(),$async$bK)
case 10:n.ay=k
s=1
break
case 9:n.at=l
n.ax=J.Dx(m,new A.ts(),t.zG).cS(0,new A.tt())
n.cx=B.av
n.ay=null
s=!n.x?11:12
break
case 11:s=13
return A.r(n.cB(),$async$bK)
case 13:case 12:p=2
s=6
break
case 4:p=3
e=o.pop()
h=A.aw(e)
s=h instanceof A.cU?14:16
break
case 14:f.cJ()
n.at=null
n.cx=B.dW
h=n.e.ap(0)
s=17
return A.r(h,$async$bK)
case 17:n.f=null
n.ay="The phone removed this browser. Close the tab; a new visit can ask to join again."
s=15
break
case 16:j=h
n.ay=A.jH(j)
case 15:s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bK,r)},
gcW(){var s=this.as
s=s==null?null:s.gcW()
return s==null?B.dG:s},
hr(a,b){var s,r,q,p,o,n
for(s=this.gcW(),r=A.F(s).i("aQ<1>"),s=new A.aQ(s,r),s=new A.a7(s,s.gq(0),r.i("a7<a2.E>")),r=r.i("a2.E"),q=a.a,p=b.a;s.n();){o=s.d
if(o==null)o=r.a(o)
if(o.d==="setup.tick"){n=o.e
n=J.Y(n.h(0,"stepId"),q)&&J.Y(n.h(0,"itemId"),p)}else n=!1
if(n)return J.Y(o.e.h(0,"ticked"),!0)}s=this.at
s=s==null?null:s.p4.a.u(0,new A.p(q,p))
return s===!0},
mr(a,b){return B.a.M(this.gcW(),new A.tm(a,b))},
ec(a,b){return this.n1(a,b)},
n1(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$ec=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:f=n.eH()
if(f!=null){q=f
s=1
break}i=n.as
i.toString
m=i
l=m.b.a
k=m.hx()
p=4
i=a.a
h=b.a
s=7
return A.r(m.c6(A.b([new A.aj("setup:"+i+":"+h+":"+A.i(l)+":"+A.i(k),l,k,"setup.tick",A.S(["stepId",i,"itemId",h,"ticked",!n.hr(a,b)],t.N,t.X),n.b.$0().F())],t.Y)),$async$ec)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.aw(e)
i=A.jH(j)
q=i
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$ec,r)},
gmJ(){var s,r,q=this.at
if(q==null)q=null
else{q=q.gL().gT()
s=A.o(q)
r=s.i("n<h.E>")
q=A.B(new A.n(q,s.i("j(h.E)").a(new A.tq()),r),r.i("h.E"))}if(q==null)q=A.b([],t.Q)
B.a.D(q,new A.tr())
return q},
dv(a,b){return this.i1(a,b)},
i1(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$dv=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.eH()
if(h!=null){q=h
s=1
break}k=n.at
m=k.db
if(m==null){q="The phone has not published its backup key yet, so a password cannot be sealed for it."
s=1
break}if(!k.gL().E(a)){q="Pick an account first."
s=1
break}if(b.length===0){q="Type the password first."
s=1
break}p=4
j=n.as
j.toString
s=7
return A.r(j.cr(a,new A.bG(m.a,B.U),n.b.$0().F(),b),$async$dv)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.aw(g)
j=A.jH(l)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$dv,r)},
m8(a,b,c){return this.cC(new A.tl(b,a,c,!0),a)},
l4(a,b){return this.cC(new A.tb(a,b),a)},
m7(){return this.aB(new A.tk())},
lV(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new A.tj(),d=e.$1(a2)
if(d==null)s=f
else{r=A.D("\\s",!0,!1)
d=A.ao(d,r,"")
s=A.ao(d.toUpperCase(),"*","X")}d=e.$1(a0)
d=d==null?f:d.toUpperCase()
r=t.N
q=t.T
p=A.S(["ifsc",d,"micr",e.$1(a1),"branch",e.$1(c),"numberShown",s],r,q)
d=p.h(0,"ifsc")
o=p.h(0,"micr")
n=A.FK(p.h(0,"branch"),d,o,p.h(0,"numberShown"))
if(n!=null)return A.aW("Not sent: "+n+".",q)
m=e.$1(a3)==null?f:A.li(B.b.I(a3),f)
if(e.$1(a3)!=null)d=m==null||m<1
else d=!1
if(d)return A.aW("Not sent: the stale window is a whole number of days, at least 1.",q)
l=e.$1(b)
if(l==null)return A.aW("Not sent: an account needs its alias.",q)
k=A.S(["ifsc",a.fr,"micr",a.fx,"branch",a.fy,"numberShown",a.go],r,q)
d=A.w(r,t.X)
if(l!==a.b)d.j(0,"alias",l)
for(r=new A.ac(p,A.o(p).i("ac<1,2>")).gA(0);r.n();){j=r.d
o=j.a
i=k.h(0,o)
h=j.b
if(i!=h)d.j(0,o,h)}if(m!=null&&m!==a.y)d.j(0,"staleAfterDays",m)
g=A.eU(a.lo(l))
if(g!=null)return A.aW("Not sent: "+g+".",q)
return this.aB(new A.ti(this,d,a))},
gmw(){var s,r,q=A.w(t.N,t.hS),p=this.at
p=p==null?null:p.gL().gT()
p=J.R(p==null?B.bQ:p)
while(p.n()){s=p.gt()
r=B.a.gY(s.b.split("-"))
if(r.length!==0&&s.d!==B.x)q.aI(s.c,new A.to(s,r))}p=q.$ti.i("M<2>")
p=A.B(new A.M(q,p),p.i("h.E"))
B.a.D(p,new A.tp())
return p},
l7(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this,k=null,j=l.kU(f,c),i=j.b
if(i!=null)return A.aW("Not sent: "+i+".",t.T)
s=$.jO()
r=A.b([],t.s)
for(q=0;q<4;++q)r.push(B.b.ac(B.d.bL(s.cQ(256),16),2,"0"))
p="acct-"+B.a.cg(r)
r=B.b.I(d)
o=l.at
o=o==null?k:o.gL().gT()
o=A.O4(o==null?B.bQ:o)
if(o==null)o=""
n=A.jV(k,k,a.b+"-LOAN-"+r,k,b,k,k,c,k,o,p,k,a.a,B.o,j.a,k,k,k,k,k,k,k,k,e,k,k,k)
m=A.eU(n)
if(m!=null)return A.aW("Not sent: "+m+".",t.T)
return l.aB(new A.te(l,p,n))},
l5(a){var s,r,q=this.at,p=q==null?null:A.CM(q,a)
if(p==null)return A.aW("Not sent: the card statement no longer lists that loan.",t.T)
s=$.jO()
q=A.b([],t.s)
for(r=0;r<4;++r)q.push(B.b.ac(B.d.bL(s.cQ(256),16),2,"0"))
return this.aB(new A.tc(this,a,p,"acct-"+B.a.cg(q)))},
mv(a,b){var s,r,q=this.at
q.toString
s=A.CM(q,a)
r=q.gL().h(0,b)
if(s==null||r==null||!B.a.u(A.G8(q,s),r))return A.aW("Not sent: that loan cannot follow this statement row.",t.T)
return this.aB(new A.tn(s,r))},
n4(a,b){var s,r,q,p,o,n,m,l=null,k={}
k.a=null
s=a.as
r=s==null
q=r?l:s.x
p=this.h1(b,a.e,q)
o=k.a=p.a
n=p.b
if(n!=null)return A.aW("Not sent: "+n+".",t.T)
m=A.eU(a.hg(o))
if(m!=null)return A.aW("Not sent: "+m+".",t.T)
q=B.z.be(o.N(),l)
s=r?l:s.N()
return this.aB(new A.tF(k,this,q===B.z.be(s==null?B.bS.N():s,l),a))},
h1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=i[2]
if(h!=null){s=this.at
r=s==null?null:s.gL().h(0,h)
if(c!=null)q=(r==null?null:r.d)===B.y
else q=!1
if(r!=null){s=r.d
s=s!==B.N&&s!==B.Q&&!q}else s=!0
if(s)return B.lT}s=i[7]
p=i[6]
o=i[1]
n=i[3]
m=i[5]
l=i[4]
k=A.N2(c,b,i[0],o,h,n,l,m,p,s)
j=k.b
if(j==null)i=null
else{i=A.D("^[A-Z](?=[a-z])",!0,!1)
s=t.w.a(new A.t9())
A.Cj(0,0,j.length,"startIndex")
i=A.NV(j,i,s,0)}return new A.p(k.a,i)},
kU(a,b){return this.h1(a,b,null)},
i0(a,b,c){var s,r,q="Enter the sender as the phone shows it, like DBS, or a number.",p=B.b.bR(a,A.D("[,\\s]+",!0,!1)),o=A.F(p),n=o.i("n<1>"),m=A.B(new A.n(p,o.i("j(1)").a(new A.tC()),n),n.i("h.E")),l=A.a4(t.N)
for(p=m.length,s=0;s<m.length;m.length===p||(0,A.l)(m),++s){r=A.Gp(m[s])
if(r==null){p=new A.am($.ak,t.gH)
p.bp(q)
return p}l.m(0,r)}if(l.a===0)return A.aW(q,t.T)
return this.aB(new A.tD(l,b,c))},
mS(a){return this.aB(new A.ty(a))},
li(a,b){if(b===a.Q)return A.aW(u.z,t.T)
return this.aB(new A.tg(this,a,b))},
i_(a,b){var s=B.b.I(b)
if(s.length===0)s=null
if(s==a.db)return A.aW(u.z,t.T)
return this.aB(new A.tB(this,a,s))},
eg(a,b,c){var s,r,q={}
q.a=null
if(c!=null){s=B.b.I(A.ao(c,",",""))
r=A.D("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!r.b.test(s)||A.a3(A.ad(s),"SGD").a.a.ga9(0)<=0)return A.aW("Not sent: a budget is an amount above zero, like 450 or 1200.50.",t.T)
r=this.at
r.toString
r=A.we(r,a)
q.a=A.a3(A.ad(s),r)}return this.aB(new A.tE(q,a,b,A.aF(this.b.$0().F(),B.q)))},
l6(a,b,c,d,e){var s,r,q,p,o,n,m=null,l=B.b.I(A.ao(b,",","")),k=B.b.I(a)
if(k.length===0)return A.aW("Not sent: a goal needs its name.",t.T)
s=A.D("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!s.b.test(l)||A.a3(A.ad(l),"SGD").a.a.ga9(0)<=0)return A.aW("Not sent: the target is an amount above zero.",t.T)
r=A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1).aj(B.b.I(d))
if(r==null)return A.aW("Not sent: pick the date to reach it by.",t.T)
s=this.b.$0().F()
q=A.a3(A.ad(l),c)
p=r.b
if(1>=p.length)return A.a(p,1)
o=p[1]
o.toString
o=A.X(o,m,m)
if(2>=p.length)return A.a(p,2)
n=p[2]
n.toString
n=A.X(n,m,m)
if(3>=p.length)return A.a(p,3)
p=p[3]
p.toString
return this.aB(new A.td(new A.iW("goal-"+(1000*s.a+s.b),k,q,new A.A(o,n,A.X(p,m,m)),e)))},
mO(a){return this.aB(new A.tu(a))},
fn(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1="currency",a2="is not a supported currency"
t.yz.a(a4)
s=t.N
r=t.X
q=A.w(s,r)
for(p=a3.d,o=p.length,n=a5==null,m=0;m<o;++m){l=p[m]
if(!(B.cb.u(0,l.c)&&l.a!=="fromEvent"))k=(n?a0:a5.c.h(0,l.a))!=null
else k=!1
if(k){k=l.a
q.j(0,k,a5.c.h(0,k))}}for(o=A.F(p),o.i("j(1)").a(A.Ai()),p=B.a.gA(p),o=new A.N(p,A.Ai(),o.i("N<1>"));o.n();){k=p.gt()
j=k.a
i=a4.h(0,j)
h=B.b.I(i==null?"":i)
if(h.length===0)continue
switch(k.c.a){case 5:g=A.D("^([\\d,]+(?:\\.\\d{1,2})?)\\s*([A-Za-z]{3})?$",!0,!1).aj(h)
i=g==null
if(i)f=a0
else{f=g.b
if(2>=f.length)return A.a(f,2)
f=f[2]}if(f==null)f="SGD"
e=f.toUpperCase()
if(i||!B.e.E(e)){s=k.b
r=new A.am($.ak,t.gH)
r.bp("Not sent: "+s.toLowerCase()+" is an amount, like 1200.50 or 500 INR.")
return r}k=g.b
if(1>=k.length)return A.a(k,1)
k=k[1]
k.toString
k=A.ad(A.ao(k,",",""))
d=B.e.h(0,e)
if(d==null)A.f(A.x(e,a1,a2))
if((k.b<=0?0:Math.max(k.gv().b,0))>d)A.f(A.z(e+" allows "+A.i(d)+" decimal places",k.k(0),a0))
d=B.e.h(0,e)
if(d==null)A.f(A.x(e,a1,a2))
q.j(0,j,A.S(["amount",k.bm(0,d),"currency",e],s,r))
break
case 7:c=A.li(h,a0)
if(c==null){s=k.b
r=new A.am($.ak,t.gH)
r.bp("Not sent: "+s.toLowerCase()+" is a whole number.")
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
a=A.D_(s,b)
if(a!=null)return A.aW("Not sent: "+a+".",t.T)
if(!n&&B.z.be(a5.c,a0)===B.z.be(q,a0))return A.aW(u.z,t.T)
return this.aB(new A.tA(b))},
hZ(a,b){return this.fn(a,b,null)},
hY(a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="currency",a6="is not a supported currency"
t.BU.a(b1)
if(b0==null)return A.aW("Not sent: enter the invoice date, like 17/11/2026.",t.T)
s=this.b.$0().F()
r="web-"+(1000*s.a+s.b)
s=t.N
q=t.X
p=A.w(s,q)
p.j(0,"bookId",a7)
p.j(0,"customerId",a9)
p.j(0,"date",b0.k(0))
o=B.b.I(b3)
if(o.length!==0)p.j(0,"reference",o)
o=B.b.I(b2)
if(o.length!==0)p.j(0,"note",o)
if(a8!=="SGD")p.j(0,a5,a8)
o=B.b.I(b4)
if(o.length!==0)p.j(0,"sgdRate",o)
n=new A.b3(B.a5,r,p)
p=this.at
p.toString
m=A.D_(p,n)
if(m!=null)return A.aW("Not sent: "+m+".",t.T)
l=A.b([],t.Z)
for(p=A.bE(b1,0,t.jm),o=J.R(p.a),k=p.b,p=new A.as(o,k,A.o(p).i("as<1>")),j=r+"-",i=a8+" allows ";p.n();){h=p.c
h=h>=0?new A.p(k+h,o.gt()):A.f(A.ai())
g=h.a
f=h.b
e=f.a[0]
h=f.a
d=h[1]
c=h[2]
b=h[3]
h=B.b.I(e)
a=h.length===0
if(a&&B.b.I(d).length===0&&B.b.I(c).length===0)continue
a0=A.dt(B.b.I(d))
a1=A.D("^\\d[\\d,]*(\\.\\d{1,2})?$",!0,!1)
a2=B.b.I(c)
if(a1.b.test(a2))a3=A.ao(a2,",","")
else a3=null
if(a){s=new A.am($.ak,t.gH)
s.bp("Not sent: line "+(g+1)+" needs a description.")
return s}a=!0
if(a0!=null)if(a0.l(0,$.L())>0)a=(a0.b<=0?0:Math.max(a0.gv().b,0))>4
if(a){s=new A.am($.ak,t.gH)
s.bp("Not sent: line "+(g+1)+"'s quantity is a number above zero, at most 4 decimals.")
return s}if(a3==null){s=new A.am($.ak,t.gH)
s.bp("Not sent: line "+(g+1)+"'s unit price is an amount in "+a8+", like 1200.50.")
return s}a=B.b.ac(""+g,3,"0")
a1=A.w(s,q)
a1.j(0,"draftId",r)
a1.j(0,"description",h)
a1.j(0,"quantity",a0.k(0))
h=A.ad(a3)
a4=B.e.h(0,a8)
if(a4==null)A.f(A.x(a8,a5,a6))
if((h.b<=0?0:Math.max(h.gv().b,0))>a4)A.f(A.z(i+A.i(a4)+" decimal places",h.k(0),null))
a4=B.e.h(0,a8)
if(a4==null)A.f(A.x(a8,a5,a6))
a1.j(0,"unitPrice",A.S(["amount",h.bm(0,a4),"currency",a8],s,q))
if(b!=null)a1.j(0,"gst",b)
B.a.m(l,new A.b3(B.as,j+a,a1))}if(l.length===0)return A.aW("Not sent: an invoice needs at least one line.",t.T)
return this.aB(new A.tz(n,l))},
mP(a){return this.aB(new A.tv(a))},
mQ(a){return this.aB(new A.tw(a))},
h6(a){var s=this.gcW(),r=A.F(s)
return a.dx+new A.n(s,r.i("j(1)").a(new A.ta(a)),r.i("n<1>")).gq(0)},
ll(a){return this.aB(new A.th(this,a))},
mR(a){return this.aB(new A.tx(this,a))},
cC(a,b){return this.kC(t.iX.a(a),b)},
aB(a){return this.cC(a,null)},
kC(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cC=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.eH()
if(h!=null){q=h
s=1
break}j=n.as
j.toString
m=j
j=n.at
j.toString
l=a.$4(j,m.b.a,m.hx(),n.b.$0().F())
if(J.jU(l)){q=u.z
s=1
break}p=4
s=7
return A.r(m.c6(l),$async$cC)
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
j=A.jH(k)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cC,r)},
eH(){if(this.cx!==B.av)return"The page is not joined yet."
if(!this.CW)return"The page is read-only. Allow changes first."
return null},
cJ(){var s=this,r=s.as
if(r!=null)r.cJ()
s.Q=s.z=s.y=s.ax=s.at=s.as=null
s.CW=s.x=!1
s.ch=!0
s.cx=B.bX}}
A.t8.prototype={
$0(){var s=this.a,r=t.N
return new A.h_(s.a,new A.t7(s),A.w(r,r))},
$S:252}
A.t7.prototype={
$0(){var s=this.a.y
return s==null?"":s},
$S:25}
A.ts.prototype={
$1(a){return t._.a(a).f},
$S:253}
A.tt.prototype={
$2(a,b){var s=t.zG
s.a(a)
s.a(b)
return a.hp(b)?a:b},
$S:254}
A.tm.prototype={
$1(a){var s
t._.a(a)
if(a.d==="setup.tick"){s=a.e
s=J.Y(s.h(0,"stepId"),this.a.a)&&J.Y(s.h(0,"itemId"),this.b.a)}else s=!1
return s},
$S:34}
A.tq.prototype={
$1(a){return t.b.a(a).d!==B.x},
$S:2}
A.tr.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.tl.prototype={
$4(a,b,c,d){var s=this,r=s.a,q=s.b
return r===B.M?A.Mc(a,q,A.CV(q),b,d,c):A.FL(a,q,A.CV(q),s.c,b,d,s.d,c,r)},
$S:4}
A.tb.prototype={
$4(a,b,c,d){var s=this.a,r=this.b,q=A.CV(s),p=r.c,o=p==null,n=A.FL(a,s,q,r.b,b,d,o,c,r.a)
s=A.B(n,t._)
if(!o)s.push(new A.aj("bulk:"+q+":confirm:"+p,b,c+n.length,"rule.confirm",A.S(["id",p],t.N,t.X),d))
return s},
$S:4}
A.tk.prototype={
$4(a,b,c,d){return A.Me(a,b,d,c)},
$S:4}
A.tj.prototype={
$1(a){var s=B.b.I(a)
return s.length===0?null:s},
$S:74}
A.ti.prototype={
$4(a,b,c,d){var s,r,q=A.b([],t.Y),p=this.b
if(p.a!==0){s=this.c.a
r=A.w(t.N,t.X)
r.j(0,"id",s)
r.a1(0,p)
q.push(new A.aj("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.J.a(r),d))}return q},
$S:4}
A.to.prototype={
$0(){return new A.cn(this.a.c,this.b)},
$S:256}
A.tp.prototype={
$2(a,b){var s=t.hS
return B.b.l(s.a(a).a,s.a(b).a)},
$S:257}
A.te.prototype={
$4(a,b,c,d){return A.b([new A.aj("account:"+b+":"+this.b,b,c,"account.add",t.J.a(A.S(["account",this.c.N()],t.N,t.X)),d)],t.Y)},
$S:4}
A.tc.prototype={
$4(a,b,c,d){var s,r,q,p=null,o=this.c,n=o.a,m=n.b,l=B.a.gY(m.split("-"))
m=B.b.ae(m,m.length-4)
s=o.b
r=s.e
q=r==null?p:o.c
return A.b([new A.aj("card-loan:"+this.b,b,c,"account.add",t.J.a(A.S(["account",A.jV(p,p,l+"-LOAN-"+m,p,n.r,p,p,n.e,p,n.f,this.d,p,n.c,B.o,new A.ha(B.b2,s.f,p,p,r,q,p,n.a,s.bk(o.d)),p,p,p,p,p,p,p,p,s.b,p,p,p).N()],t.N,t.X)),d)],t.Y)},
$S:4}
A.tn.prototype={
$4(a,b,c,d){var s,r,q,p,o,n=this.a,m=this.b,l=m.as
if(l==null)l=B.bS
m=m.a
s=n.b
n=n.d
r=s.bk(n)
q=t.N
p=t.X
o=A.kW(l.N(),q,p)
o.j(0,"cardLoan",s.bk(n))
return A.b([new A.aj("card-loan-link:"+m+":"+r,b,c,"account.edit",A.S(["id",m,"loan",o],q,p),d.F())],t.Y)},
$S:4}
A.tF.prototype={
$4(a,b,c,d){var s,r=A.b([],t.Y)
if(!this.c){s=this.d.a
r.push(new A.aj("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.J.a(A.S(["id",s,"loan",this.a.a.N()],t.N,t.X)),d))}return r},
$S:4}
A.t9.prototype={
$1(a){var s=a.b
if(0>=s.length)return A.a(s,0)
return s[0].toLowerCase()},
$S:17}
A.tC.prototype={
$1(a){return A.c(a).length!==0},
$S:6}
A.tD.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.b([],t.Y)
for(s=this.a,s=A.ea(s,s.r,A.o(s).c),r=this.b,q=this.c,p=c,o=t.N,n=t.X,m=s.$ti.c;s.n();){l=s.d
if(l==null)l=m.a(l)
k=new A.cq(l,r,q).n0()
j=A.ix(o,n)
j.a1(0,k)
i.push(new A.aj("sms-sender:"+l+":"+b+":"+p,b,c,"sms.sender",j,d.F()))}return i},
$S:4}
A.ty.prototype={
$4(a,b,c,d){var s=this.a
return A.b([A.NJ(s,c,b,"sms-sender:"+s.a+":"+b+":"+c,d,!0)],t.Y)},
$S:4}
A.tg.prototype={
$4(a,b,c,d){var s=this.b,r=s.a
return A.b([new A.aj("categorise:"+r+":"+b+":"+c,b,c,"movement.categorise",t.J.a(A.S(["movementId",r,"categoryId",this.c,"baseVersion",this.a.h6(s)],t.N,t.X)),d)],t.Y)},
$S:4}
A.tB.prototype={
$4(a,b,c,d){var s,r=this.b,q=r.a
r=this.a.h6(r)
s=A.D4(this.c)
return A.b([new A.aj("note:"+q+":"+b+":"+c,b,c,"movement.note",A.S(["movementId",q,"notes",s,"baseVersion",r],t.N,t.X),d.F())],t.Y)},
$S:4}
A.tE.prototype={
$4(a,b,c,d){var s=this,r=s.b,q=s.c,p=s.a.a,o=s.d
p=p==null?null:p.N()
return A.b([new A.aj("budget:"+r+":"+q+":"+b+":"+c,b,c,"budget.set",A.S(["bookId",r,"categoryId",q,"amount",p,"from",""+o.a+"-"+B.b.ac(B.d.k(o.b),2,"0")],t.N,t.X),d.F())],t.Y)},
$S:4}
A.td.prototype={
$4(a,b,c,d){var s=this.a,r=s.a
return A.b([new A.aj("goal:"+r+":"+b+":"+c,b,c,"goal.set",A.S(["id",r,"name",s.b,"target",s.c.N(),"by",s.d.k(0),"accountId",s.e],t.N,t.X),d.F())],t.Y)},
$S:4}
A.tu.prototype={
$4(a,b,c,d){var s=this.a.a
return A.b([new A.aj("goal-remove:"+s+":"+b+":"+c,b,c,"goal.remove",A.S(["id",s],t.N,t.X),d.F())],t.Y)},
$S:4}
A.tf.prototype={
$1(a){var s
t.k2.a(a)
if(a.d)s=B.cb.u(0,a.c)&&a.a!=="fromEvent"
else s=!0
return s},
$S:40}
A.tA.prototype={
$4(a,b,c,d){var s=this.a
return A.b([new A.aj("life:"+s.a.b+":"+s.b+":"+b+":"+c,b,c,"life.set",s.N(),d.F())],t.Y)},
$S:4}
A.tz.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.b([],t.Y)
for(s=A.b([this.a],t.Z),B.a.a1(s,this.b),s=A.bE(s,0,t.u),r=J.R(s.a),q=s.b,s=new A.as(r,q,A.o(s).i("as<1>")),p=c,o=t.N,n=t.X;s.n();){m=s.c
m=m>=0?new A.p(q+m,r.gt()):A.f(A.ai())
l=m.b
k=l.a.b
j=l.b
i.push(new A.aj("life:"+k+":"+j+":"+b+":"+p+":"+m.a,b,c,"life.set",A.S(["kind",k,"id",j,"fields",l.c],o,n),d.F()))}return i},
$S:4}
A.tv.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l=A.b([],t.Y),k=this.a,j=t.u,i=A.B(A.mF(a,k.b),j)
i.push(k)
k=A.bE(i,0,j)
j=J.R(k.a)
i=k.b
k=new A.as(j,i,A.o(k).i("as<1>"))
s=c
r=t.N
q=t.X
while(k.n()){p=k.c
p=p>=0?new A.p(i+p,j.gt()):A.f(A.ai())
o=p.b
n=o.a.b
m=o.b
l.push(new A.aj("life-remove:"+n+":"+m+":"+b+":"+s+":"+p.a,b,c,"life.remove",A.S(["kind",n,"id",m],r,q),d.F()))}return l},
$S:4}
A.tw.prototype={
$4(a,b,c,d){var s=this.a,r=s.b
s=s.a.b
return A.b([new A.aj("life-remove:"+s+":"+r+":"+b+":"+c,b,c,"life.remove",A.S(["kind",s,"id",r],t.N,t.X),d.F())],t.Y)},
$S:4}
A.ta.prototype={
$1(a){var s
t._.a(a)
s=a.d
return(s==="movement.categorise"||s==="movement.note")&&J.Y(a.e.h(0,"movementId"),this.a.a)},
$S:34}
A.th.prototype={
$4(a,b,c,d){var s=this.b.a
return A.b([new A.aj("rule-confirm:"+s,b,c,"rule.confirm",t.J.a(A.S(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.tx.prototype={
$4(a,b,c,d){var s=this.b.a
return A.b([new A.aj("rule-remove:"+s,b,c,"rule.remove",t.J.a(A.S(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.ej.prototype={
U(){return"AccountGroup."+this.b}}
A.yj.prototype={
$1(a){A.c(a)
return a.length<=1?a:a[0]+B.b.ae(a,1).toLowerCase()},
$S:12}
A.ik.prototype={}
A.dS.prototype={}
A.tX.prototype={}
A.AP.prototype={
$1(a){var s,r,q=null,p=a.h(0,1)
p.toString
p=A.X(p,q,q)
s=a.h(0,2)
s.toString
s=A.X(s,q,q)
r=a.h(0,3)
r.toString
return A.cv(new A.A(p,s,A.X(r,q,q)),this.a)},
$S:17}
A.xk.prototype={
$2(a,b){return A.O(a)+t.t5.a(b).e.length},
$S:258}
A.xl.prototype={
$2(a,b){var s=t.dw
s.a(a)
return B.d.l(s.a(b).c,a.c)},
$S:259}
A.dT.prototype={}
A.cy.prototype={}
A.tZ.prototype={}
A.xm.prototype={
$1(a){return t.R.a(a).b===this.a},
$S:15}
A.xn.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).c,s.a(b).c)},
$S:46}
A.xr.prototype={
$1(a){var s,r,q=this.a,p=A.Fg(q,a),o=this.b.h(0,a.a)
if(o==null)o=0
s=A.b([],t.s)
r=a.w
if(r!=null)s.push(r===B.k?"Money out only":"Money in only")
r=a.r
if(r!=null)s.push("On "+r)
r=a.x
if(r!=null)s.push("For "+A.AO(q,r))
q=a.y
if(q!=null)s.push("Files into "+q)
return new A.dT(a,p,o,a.f,B.a.Z(s,", "))},
$S:260}
A.xo.prototype={
$1(a){return!t.R.a(a).f},
$S:15}
A.xp.prototype={
$1(a){return t.R.a(a).f},
$S:15}
A.xq.prototype={
$2(a,b){var s=t.CU
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:261}
A.u7.prototype={}
A.iJ.prototype={}
A.hn.prototype={}
A.eH.prototype={}
A.hg.prototype={}
A.iP.prototype={}
A.iO.prototype={}
A.wh.prototype={
$1(a){return B.b.u(this.a,a)},
$S:6}
A.dW.prototype={}
A.j_.prototype={}
A.xu.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.xv.prototype={
$3$hue(a,b,c){var s,r,q,p,o,n,m,l
t.r9.a(b)
s=J.aZ(b)
r=s.a4(b,this.a,new A.xw(),t.B)
q=A.b([],t.s)
for(p=s.gfd(b),o=p.$ti,p=new A.a7(p,p.gq(0),o.i("a7<a2.E>")),n=this.b,o=o.i("a2.E");p.n();){m=p.d
if(m==null)m=o.a(m)
q.push(m.a.a.ga9(0)===0?"":n.$1(m))}p=n.$1(r)
o=this.c
o=n.$1(A.a3(new A.P(A.aC(B.G.e9(r.gaT()/s.gq(b))),0- -A.ev(o)),o))
n=A.b([],t.t)
for(s=s.gfd(b),m=s.$ti,s=new A.a7(s,s.gq(0),m.i("a7<a2.E>")),m=m.i("a2.E");s.n();){l=s.d
n.push((l==null?m.a(l):l).gaT())}return new A.dW(a,c,q,n,p,o)},
$2(a,b){return this.$3$hue(a,b,null)},
$S:262}
A.xw.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:24}
A.xx.prototype={
$1(a){return J.Ie(t.r9.a(a),this.a,new A.xy(),t.B)},
$S:263}
A.xy.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:24}
A.xs.prototype={
$2(a,b){var s=t.nF
s.a(a)
s.a(b)
if(a.a==null)s=1
else if(b.a==null)s=-1
else{s=this.a
s=s.$1(b.b).a.l(0,s.$1(a.b).a)}return s},
$S:264}
A.xt.prototype={
$1(a){var s,r=this.a
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=r.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return B.l[s]+" "+r.a},
$S:33}
A.e3.prototype={
U(){return"TxState."+this.b}}
A.e2.prototype={
U(){return"TxSort."+this.b}}
A.cr.prototype={
bZ(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=this,k=t.b0
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
return new A.cr(l.a,k,s,r,q,p,o,n,m)},
hh(a){var s=null
return this.bZ(s,s,s,a,s,s,s,s)},
lt(a){var s=null
return this.bZ(s,s,s,s,a,s,s,s)},
lp(a){var s=null
return this.bZ(s,a,s,s,s,s,s,s)},
lu(a){var s=null
return this.bZ(s,s,s,s,s,a,s,s)},
lw(a){var s=null
return this.bZ(s,s,s,s,s,s,s,a)},
lr(a){var s=null
return this.bZ(s,s,a,s,s,s,s,s)},
ln(a){var s=null
return this.bZ(a,s,s,s,s,s,s,s)},
lv(a){var s=null
return this.bZ(s,s,s,s,s,s,a,s)}}
A.lI.prototype={}
A.up.prototype={}
A.xC.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.xB.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.f.a.l(0,b.f.a)
return s!==0?s:this.a.$2(b,a)},
$S:7}
A.xD.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:7}
A.xE.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:7}
A.xA.prototype={
$1(a){var s=this.a.r.a.h(0,a)
return s==null?a:A.aY(s)},
$S:12}
A.xF.prototype={
$1(a){return A.aN(a,this.a)},
$S:18}
A.xG.prototype={
$1(a){var s=this.a.r.a.h(0,a)
A:{if(s!=null){s=A.aY(s)
break A}s=a
break A}return s},
$S:12};(function aliases(){var s=J.eu.prototype
s.ir=s.k
s=A.Q.prototype
s.fp=s.aJ
s=A.h.prototype
s.iq=s.bN
s=A.hW.prototype
s.ig=s.J
s=A.hl.prototype
s.ej=s.dW
s=A.kj.prototype
s.ih=s.ed
s=A.i5.prototype
s.ii=s.eQ
s.ij=s.cH
s.ik=s.cL
s.il=s.cM
s.im=s.cp
s.io=s.ei
s.ip=s.dq
s=A.af.prototype
s.is=s.j
s.it=s.a_})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers._instance_1i,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_0u
s(J,"KY","IS",102)
r(J.dI.prototype,"gib",1,1,null,["$2","$1"],["c5","am"],204,0,0)
q(A.et.prototype,"ghm","me",6)
p(A,"LP","JE",38)
p(A,"LQ","JF",38)
p(A,"LR","JG",38)
o(A,"FI","Lx",0)
s(A,"Mf","J0",102)
n(A.dc.prototype,"geX","u",28)
p(A,"Mo","KF",87)
m(A,"Mq",1,null,["$3$onError$radix","$1"],["X",function(a){return A.X(a,null,null)}],267,0)
o(A,"Mp","IC",268)
m(A,"N7",2,null,["$1$2","$2"],["Gf",function(a,b){return A.Gf(a,b,t.fY)}],73,0)
m(A,"N6",2,null,["$1$2","$2"],["Ge",function(a,b){return A.Ge(a,b,t.fY)}],73,0)
p(A,"FD","N3",6)
q(A.kF.prototype,"gl8","l9",34)
p(A,"NF","L9",1)
s(A,"NG","Lo",7)
p(A,"Nx","KS",71)
s(A,"NC","Mk",180)
p(A,"jN","Nf",1)
m(A,"Nh",2,null,["$4$body$headers","$2","$3$headers"],["hH",function(a,b){return A.hH(a,b,null,B.dR)},function(a,b,c){return A.hH(a,b,null,c)}],101,0)
l(A.lc.prototype,"gkH","kI",0)
p(A,"Ai","Jc",40)
var k
l(k=A.ld.prototype,"gmc","cK",5)
l(k,"gfb","bK",5)
l(k,"gm6","m7",10)
s(A,"Gx","Ny",35)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a0,null)
q(A.a0,[A.C9,J.kN,A.iV,J.f2,A.jc,A.hx,A.h,A.i2,A.bN,A.a9,A.aG,A.Q,A.u3,A.a7,A.iA,A.N,A.fa,A.j2,A.iZ,A.ii,A.j9,A.fm,A.as,A.aV,A.cs,A.bk,A.hb,A.fS,A.e9,A.cJ,A.uq,A.pi,A.ij,A.jr,A.p5,A.cC,A.a1,A.iw,A.et,A.hy,A.fz,A.hq,A.mq,A.lW,A.mt,A.cH,A.ma,A.ms,A.js,A.lP,A.ed,A.bW,A.lX,A.e8,A.am,A.lQ,A.mo,A.jC,A.mf,A.fC,A.jf,A.jx,A.mu,A.bg,A.b8,A.uE,A.uD,A.bf,A.v6,A.vl,A.eR,A.aS,A.uF,A.aa,A.ck,A.m8,A.l9,A.j0,A.uP,A.b9,A.kM,A.ap,A.bi,A.mr,A.bH,A.jz,A.kx,A.ph,A.mc,A.kv,A.kp,A.kZ,A.cj,A.kq,A.nj,A.np,A.lw,A.fO,A.cz,A.o5,A.d3,A.o8,A.ep,A.h7,A.lj,A.iu,A.d2,A.iX,A.eF,A.hl,A.fs,A.la,A.pl,A.nq,A.kj,A.i6,A.nw,A.i8,A.cT,A.dv,A.aJ,A.ln,A.uO,A.P,A.cF,A.bs,A.c9,A.mW,A.cn,A.ho,A.ks,A.lB,A.kf,A.tG,A.cg,A.cK,A.k1,A.hr,A.iT,A.es,A.cX,A.lo,A.kI,A.ly,A.lz,A.n3,A.bX,A.ch,A.dr,A.fU,A.dH,A.bM,A.bo,A.bP,A.nI,A.di,A.nK,A.lg,A.bp,A.iQ,A.c2,A.im,A.nR,A.dz,A.nS,A.lE,A.tN,A.mY,A.fd,A.kb,A.fo,A.fe,A.o6,A.hv,A.u1,A.o7,A.ky,A.n0,A.h8,A.fY,A.ew,A.ls,A.hd,A.jW,A.pc,A.dQ,A.V,A.ka,A.d9,A.dq,A.pd,A.nU,A.cw,A.pk,A.dm,A.dL,A.p7,A.ez,A.p8,A.ha,A.hp,A.iz,A.hc,A.A,A.nJ,A.kg,A.q,A.kF,A.aj,A.ne,A.k9,A.nf,A.uc,A.iB,A.dN,A.tO,A.lk,A.tP,A.u_,A.dU,A.u0,A.dX,A.um,A.lH,A.un,A.l7,A.nE,A.cW,A.er,A.t,A.b3,A.p2,A.fp,A.dO,A.lp,A.tK,A.da,A.ci,A.dF,A.tT,A.iU,A.fh,A.pb,A.bA,A.ht,A.l4,A.eK,A.il,A.cG,A.W,A.bc,A.cI,A.mZ,A.lt,A.lu,A.u4,A.cq,A.u8,A.l8,A.d0,A.ub,A.e_,A.l6,A.cU,A.ir,A.uf,A.hX,A.uj,A.ib,A.iv,A.lD,A.uk,A.iY,A.i0,A.bD,A.n7,A.dC,A.k8,A.le,A.iW,A.fr,A.lq,A.uo,A.b_,A.lA,A.dj,A.dR,A.mX,A.kH,A.lc,A.dn,A.dP,A.kz,A.nd,A.l5,A.h_,A.db,A.l_,A.io,A.o0,A.kr,A.fZ,A.h3,A.o1,A.dK,A.kJ,A.h9,A.eo,A.ll,A.jZ,A.pe,A.fi,A.lm,A.d_,A.du,A.pj,A.hh,A.hm,A.kA,A.kB,A.t6,A.ld,A.ik,A.dS,A.tX,A.dT,A.cy,A.tZ,A.u7,A.hg,A.dW,A.j_,A.cr,A.lI,A.up])
q(J.kN,[J.kP,J.h4,J.iq,J.h5,J.h6,J.ff,J.dI])
q(J.iq,[J.eu,J.u,A.ex,A.iE])
q(J.eu,[J.lf,J.eN,J.dJ])
r(J.kO,A.iV)
r(J.o2,J.u)
q(J.ff,[J.ip,J.kQ])
q(A.h,[A.eO,A.T,A.c4,A.n,A.dw,A.fx,A.dV,A.j8,A.pg,A.dD,A.fB,A.lO,A.mp,A.de])
q(A.eO,[A.f5,A.jD])
r(A.jd,A.f5)
r(A.jb,A.jD)
q(A.bN,[A.kd,A.ng,A.kK,A.kc,A.lF,A.zg,A.zi,A.uA,A.uz,A.vp,A.uZ,A.v1,A.vb,A.p9,A.v4,A.uH,A.uJ,A.nB,A.nC,A.vf,A.AW,A.AX,A.u2,A.tR,A.tI,A.vX,A.zf,A.Br,A.Bt,A.Bu,A.Bv,A.BG,A.yu,A.yv,A.vE,A.vH,A.zz,A.xJ,A.xL,A.xN,A.xP,A.xR,A.vv,A.vw,A.vs,A.vt,A.vu,A.ue,A.ud,A.w1,A.w2,A.w3,A.y5,A.nk,A.nn,A.xY,A.xZ,A.yk,A.ya,A.y7,A.y8,A.y9,A.zl,A.vU,A.vy,A.ye,A.nL,A.nN,A.nP,A.AQ,A.AS,A.AT,A.yT,A.yW,A.ys,A.yt,A.vV,A.z6,A.z7,A.z8,A.Bw,A.Bx,A.vZ,A.w_,A.w0,A.vY,A.vn,A.y2,A.wf,A.wg,A.oF,A.os,A.oE,A.p1,A.p0,A.oC,A.oN,A.oM,A.oa,A.ob,A.om,A.oA,A.oy,A.oz,A.ox,A.oG,A.oH,A.oI,A.oJ,A.oK,A.oL,A.o9,A.op,A.oq,A.oO,A.oP,A.oQ,A.oS,A.oT,A.oU,A.oV,A.oW,A.oX,A.oY,A.oZ,A.oR,A.oe,A.oB,A.oh,A.oi,A.ou,A.oc,A.ot,A.ov,A.ol,A.ok,A.ow,A.oo,A.og,A.zW,A.zX,A.zZ,A.ni,A.A_,A.A0,A.zq,A.xS,A.zs,A.zt,A.zu,A.zw,A.zv,A.zc,A.zd,A.Au,A.Am,A.An,A.Aq,A.Ap,A.Aj,A.Ak,A.As,A.B3,A.zI,A.zM,A.vA,A.zG,A.zH,A.yE,A.yD,A.yC,A.yA,A.yB,A.yQ,A.yK,A.yL,A.yM,A.yN,A.yF,A.Aw,A.Ax,A.Az,A.AA,A.AE,A.Av,A.AB,A.yR,A.yS,A.Ac,A.Ae,A.Af,A.Ag,A.y0,A.y1,A.p4,A.vB,A.vC,A.vF,A.vG,A.w4,A.AN,A.AJ,A.AL,A.AK,A.tL,A.w5,A.w6,A.w7,A.BD,A.z2,A.z0,A.z1,A.Ab,A.A9,A.zO,A.zQ,A.A1,A.A3,A.A5,A.A6,A.A7,A.Bq,A.BL,A.BK,A.BN,A.xH,A.B7,A.B5,A.B8,A.B9,A.Ba,A.zA,A.zC,A.Bd,A.Bc,A.Bi,A.Bj,A.n_,A.Bn,A.zV,A.AZ,A.B_,A.n9,A.nc,A.nb,A.na,A.w8,A.w9,A.wa,A.wb,A.mV,A.wm,A.wk,A.nY,A.nZ,A.o_,A.nW,A.nX,A.vP,A.vQ,A.xW,A.vr,A.ze,A.zo,A.rW,A.rX,A.rY,A.rZ,A.px,A.qe,A.qv,A.py,A.pz,A.qn,A.qq,A.rJ,A.rK,A.rL,A.rF,A.rI,A.rH,A.rD,A.rC,A.rM,A.rt,A.ri,A.r4,A.r9,A.ra,A.rb,A.r2,A.rc,A.r1,A.rd,A.re,A.rf,A.rg,A.qb,A.qc,A.pZ,A.q_,A.q3,A.q4,A.q5,A.q6,A.q9,A.qa,A.q0,A.q1,A.qV,A.qY,A.qz,A.pU,A.pS,A.qh,A.rB,A.rw,A.rA,A.qE,A.po,A.pn,A.qP,A.qQ,A.qR,A.rU,A.rP,A.rR,A.pr,A.pP,A.pO,A.pK,A.pM,A.pN,A.rr,A.rm,A.ro,A.rp,A.qT,A.qy,A.wp,A.wq,A.ws,A.wt,A.wr,A.wy,A.wx,A.wG,A.wE,A.wD,A.wB,A.wz,A.vS,A.wM,A.wN,A.wJ,A.wI,A.zN,A.wQ,A.wO,A.wP,A.x7,A.wS,A.xh,A.xi,A.x8,A.x9,A.x5,A.x6,A.xa,A.xe,A.xf,A.wT,A.wU,A.wR,A.wY,A.x_,A.x0,A.x1,A.x2,A.x3,A.x4,A.wV,A.wW,A.wX,A.xb,A.xc,A.Bz,A.ts,A.tm,A.tq,A.tl,A.tb,A.tk,A.tj,A.ti,A.te,A.tc,A.tn,A.tF,A.t9,A.tC,A.tD,A.ty,A.tg,A.tB,A.tE,A.td,A.tu,A.tf,A.tA,A.tz,A.tv,A.tw,A.ta,A.th,A.tx,A.yj,A.AP,A.xm,A.xr,A.xo,A.xp,A.wh,A.xu,A.xv,A.xx,A.xt,A.xA,A.xF,A.xG])
q(A.kd,[A.uL,A.nh,A.o4,A.zh,A.vq,A.vW,A.v_,A.v2,A.p6,A.pa,A.v7,A.uG,A.vi,A.uv,A.uu,A.vh,A.vg,A.nu,A.Bk,A.Bs,A.BI,A.xK,A.xM,A.xO,A.xQ,A.vR,A.xX,A.y6,A.nm,A.nl,A.no,A.yp,A.zk,A.y_,A.yl,A.yc,A.yd,A.zm,A.nM,A.nO,A.AU,A.yU,A.yZ,A.yX,A.yY,A.z5,A.z9,A.za,A.oD,A.or,A.p_,A.zY,A.vL,A.B4,A.wd,A.xT,A.zp,A.zr,A.Al,A.At,A.B1,A.B2,A.Bp,A.zJ,A.zL,A.zK,A.zD,A.zE,A.zF,A.zS,A.zU,A.zT,A.yw,A.yy,A.yz,A.yG,A.yI,A.yO,A.yP,A.Bg,A.Bh,A.Ay,A.AC,A.AD,A.Ad,A.p3,A.AH,A.AI,A.AV,A.tM,A.zn,A.BE,A.BF,A.y3,A.y4,A.ym,A.yn,A.yo,A.tW,A.tU,A.tV,A.Aa,A.yq,A.zP,A.uw,A.ux,A.A2,A.A4,A.BM,A.BB,A.BC,A.Bb,A.zB,A.u9,A.Bm,A.Bo,A.uh,A.ug,A.ui,A.B0,A.n8,A.wj,A.zb,A.mU,A.wl,A.xz,A.vO,A.wi,A.qs,A.qo,A.rG,A.r5,A.r6,A.rh,A.qW,A.pT,A.qg,A.rv,A.qI,A.qD,A.qM,A.qN,A.rQ,A.pq,A.pL,A.rn,A.wn,A.wo,A.wu,A.wF,A.wH,A.wA,A.wK,A.xj,A.xg,A.wZ,A.xd,A.tt,A.tr,A.tp,A.xk,A.xl,A.xn,A.xq,A.xw,A.xy,A.xs,A.xC,A.xB,A.xD,A.xE])
r(A.dp,A.jb)
q(A.a9,[A.f6,A.cB,A.md,A.af])
q(A.aG,[A.fk,A.e4,A.kR,A.lK,A.lr,A.m9,A.is,A.jX,A.ce,A.j6,A.lJ,A.dY,A.ke])
q(A.Q,[A.hs,A.bt])
r(A.fR,A.hs)
q(A.T,[A.a2,A.ih,A.au,A.M,A.ac,A.je])
q(A.a2,[A.fv,A.ah,A.aQ,A.me])
r(A.ie,A.c4)
r(A.ig,A.fx)
r(A.h0,A.dV)
r(A.f9,A.dD)
q(A.bk,[A.eb,A.fE,A.dd])
q(A.eb,[A.p,A.ec,A.jk,A.hz])
q(A.fE,[A.bB,A.jl])
q(A.dd,[A.eP,A.jm,A.jn,A.jo,A.jp])
r(A.hC,A.hb)
r(A.e7,A.hC)
r(A.i3,A.e7)
q(A.fS,[A.aU,A.cl])
q(A.cJ,[A.fT,A.jq,A.jy,A.j3])
q(A.fT,[A.cx,A.cZ])
r(A.fc,A.kK)
r(A.iM,A.e4)
q(A.lF,[A.lC,A.fN])
r(A.fg,A.cB)
r(A.he,A.ex)
q(A.iE,[A.iC,A.bx])
q(A.bx,[A.jg,A.ji])
r(A.jh,A.jg)
r(A.ey,A.jh)
r(A.jj,A.ji)
r(A.c5,A.jj)
q(A.ey,[A.l0,A.l1])
q(A.c5,[A.l2,A.iD,A.l3,A.iF,A.iG,A.iH,A.fl])
r(A.hB,A.m9)
q(A.kc,[A.uB,A.uC,A.vd,A.vc,A.nQ,A.uQ,A.uV,A.uU,A.uS,A.uR,A.uY,A.uX,A.uW,A.v0,A.va,A.vN,A.vk,A.vj,A.uK,A.nz,A.v8,A.nt,A.nH,A.ny,A.nx,A.nD,A.BH,A.yb,A.AR,A.yV,A.of,A.od,A.oj,A.Ao,A.Ar,A.zR,A.yx,A.yH,A.yJ,A.AM,A.BA,A.B6,A.Be,A.Bl,A.AY,A.pp,A.t_,A.t0,A.t1,A.t2,A.t3,A.t4,A.t5,A.qd,A.qw,A.qt,A.qu,A.ps,A.pt,A.pu,A.pv,A.pw,A.qp,A.qm,A.qr,A.ql,A.rE,A.r3,A.r_,A.qZ,A.r0,A.r7,A.r8,A.pY,A.pX,A.q7,A.q8,A.pW,A.q2,A.pV,A.qU,A.qX,A.qA,A.pR,A.qi,A.qj,A.qk,A.qf,A.rx,A.ry,A.rz,A.ru,A.qJ,A.qF,A.qG,A.qC,A.qH,A.qB,A.pm,A.qO,A.qL,A.qK,A.rV,A.rS,A.rO,A.rT,A.rN,A.pQ,A.pG,A.pF,A.pH,A.pE,A.pI,A.pD,A.pJ,A.pC,A.pB,A.rs,A.rl,A.rk,A.rq,A.rj,A.pA,A.qS,A.qx,A.nF,A.wv,A.ww,A.wC,A.vT,A.wL,A.AG,A.By,A.t8,A.t7,A.to])
r(A.cN,A.lX)
r(A.mi,A.jC)
r(A.dc,A.jq)
r(A.j5,A.jy)
q(A.bg,[A.fM,A.ku,A.kS])
q(A.b8,[A.hY,A.k_,A.kV,A.kU,A.lN,A.j7,A.h1])
r(A.kT,A.is)
r(A.v5,A.v6)
r(A.lM,A.ku)
q(A.ce,[A.hi,A.kG])
q(A.bf,[A.kC,A.kD,A.cD])
q(A.h1,[A.mj,A.mm])
q(A.kC,[A.ml,A.mn])
r(A.mk,A.ml)
r(A.lv,A.mn)
r(A.f1,A.nj)
q(A.f1,[A.k2,A.lY])
r(A.i5,A.np)
r(A.n4,A.i5)
r(A.id,A.lw)
q(A.id,[A.k3,A.kk])
q(A.cz,[A.eG,A.d7,A.i_,A.u5,A.u6])
q(A.eG,[A.lU,A.m4])
r(A.k6,A.lU)
q(A.d7,[A.lV,A.m5])
r(A.k7,A.lV)
q(A.o5,[A.kE,A.hW])
q(A.kE,[A.n5,A.nv])
q(A.d3,[A.eq,A.m0])
q(A.eq,[A.k4,A.m2])
r(A.uy,A.o8)
q(A.uy,[A.n6,A.m7])
q(A.kD,[A.mb,A.f8])
r(A.it,A.h7)
q(A.cD,[A.mw,A.mv])
r(A.mg,A.mw)
r(A.bq,A.hl)
r(A.d8,A.it)
r(A.bG,A.lj)
q(A.f8,[A.lb,A.lT,A.m3])
r(A.kh,A.lY)
r(A.km,A.m0)
r(A.i4,A.hW)
q(A.m8,[A.fV,A.hA,A.cd,A.dk,A.eJ,A.eL,A.ft,A.dZ,A.dx,A.cf,A.el,A.eM,A.em,A.bY,A.dG,A.cY,A.eC,A.eD,A.dA,A.dB,A.fb,A.dl,A.cS,A.cA,A.dE,A.hj,A.bh,A.bZ,A.cV,A.iR,A.bu,A.cm,A.dM,A.fu,A.d4,A.bS,A.bO,A.bF,A.d5,A.aL,A.ab,A.eB,A.cp,A.hu,A.cM,A.aR,A.c8,A.fw,A.e0,A.co,A.eE,A.bd,A.fj,A.h2,A.eA,A.ej,A.e3,A.e2])
r(A.nr,A.kj)
r(A.lZ,A.i_)
r(A.m_,A.lZ)
r(A.f7,A.m_)
r(A.k0,A.lT)
r(A.i7,A.m2)
r(A.m1,A.mv)
r(A.i9,A.m4)
r(A.m6,A.m5)
r(A.kn,A.m6)
r(A.ia,A.m7)
q(A.n0,[A.E,A.nG,A.bv,A.tS])
r(A.mh,A.af)
q(A.ez,[A.en,A.fQ,A.iL,A.iK,A.ic])
q(A.cI,[A.hf,A.iN,A.hk])
q(A.u7,[A.iJ,A.hn,A.eH])
q(A.hg,[A.iP,A.iO])
s(A.hs,A.cs)
s(A.jD,A.Q)
s(A.jg,A.Q)
s(A.jh,A.aV)
s(A.ji,A.Q)
s(A.jj,A.aV)
s(A.hC,A.jx)
s(A.jy,A.mu)
s(A.lU,A.fO)
s(A.lV,A.fO)
s(A.mw,A.cT)
s(A.lY,A.nq)
s(A.m0,A.i8)
s(A.lZ,A.i6)
s(A.m_,A.i8)
s(A.lT,A.cT)
s(A.m2,A.i8)
s(A.mv,A.cT)
s(A.m4,A.i6)
s(A.m5,A.i6)
s(A.m6,A.pl)
s(A.m7,A.nw)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",U:"double",bJ:"num",e:"String",j:"bool",bi:"Null",y:"List",a0:"Object",ae:"Map",a6:"JSObject"},mangledNames:{},types:["~()","j(V)","j(bs)","~(e)","y<aj>(h8,e,d,aa)","ba<~>()","j(e)","d(V,V)","d(bs,bs)","j(c9)","ba<e?>()","j(b_)","e(e)","~(a6)","bi(a6)","j(bc)","y<V>()","e(cE)","e(q)","j(du)","e(V)","d(b3,b3)","j(b3)","j(cK)","q(q,q)","e()","d(c9,c9)","d(d,d)","j(a0?)","d(d,dF)","d(d,ci)","d(d,ch)","bi()","e(d)","j(aj)","d(e,e)","d(+(A,A),+(A,A))","j(W)","~(~())","j(cX)","j(t)","e(U)","j(bA)","~(@)","d(bM,bM)","~(ba<e?>())","d(bc,bc)","j(fe)","j(bp)","j(di)","e(e?)","q(bD)","d(d)","U(d)","j(ch)","d(W,W)","j(ab)","j(dL)","A?(e)","q?(e)","q(q,V)","d(cg,cg)","j(+(A,A))","j(fd)","j(c2)","y<bp>(y<bp>)","e(A?)","d(A,A)","y<e>()","j(bu)","j(d9)","j(e?)","d(cw,cw)","0^(0^,0^)<bJ>","e?(e)","d(y<V>,A)","d(V)","j(cW)","d()","q(q,bA)","d(e?)","j(y<e>)","d(cq,cq)","d(+(d,V),+(d,V))","0&()","~(e,@)","@()","@(@)","bi(a0,eI)","e(e,U)","e?()","cr(A?)","A?()","bi(@)","j(bM)","dK()","j(dR)","A?(y<b_>)","A(b_)","A(A?,A)","@(e)","ba<hh>(e,ut{body:e6?,headers:ae<e,e>})","d(@,@)","~(a0?,a0?)","j(V,V)","d(dm,dm)","bp()","j(cw)","y<A>()","j(e,A)","d?(e)","hZ(cF)","P()","A(A,A)","kL()","d(+month,year(d,d))","+month,year(d,d)(d)","d(+month,year(d,d),+month,year(d,d))","j(A,A)","d(bo,bo)","d(dN,dN)","q(V)","d(bX,bX)","y<d>()","d(+(d,d,bS),+(d,d,bS))","j(+(V,V,bS))","d(dU,dU)","d(dX,dX)","d(d,bX)","e6()","d(cX,cX)","j(+(e,e))","j(ap<e,e>)","e(ap<e,e>)","j(d)","dv()","d(d,y<d>)","d(dO,dO)","d(c2,c2)","d(cW,cW)","j(cp)","d(da,da)","d(ci,ci)","d(dz,dz)","y<d>(bq)","~(e,e?)","e(A)","d(b3)","q(bu)","q(bu?)","0&(e,d?)","j(bY)","ht(e)","d(bA,bA)","ae<e,e>(ae<e,e>,e)","A?(A)","aj(e,e,ae<e,a0?>)","~(W)","W()","cI(V)","cI()","e(bc)","j(dx)","d(e)","j(e,y<V>)","~(e,y<V>)","h<V>(e,A,A)","d(+(d,e),+(d,e))","+(d,d,j,ae<e?,q>)()","j(+(d,d,j,ae<e?,q>))","j(+complete,month,spent,year(j,d,q,d))","q(q,+complete,month,spent,year(j,d,q,d))","q(q,bD)","e?(e,e)","j(bD)","d(bD,bD)","d(dC,dC)","bM?(a0?)","j(co)","j(fr)","d(cG,cG)","b_(bs)","a6(a6)","e(d,e)","~(e,a0)","d(ap<e,d>,ap<e,d>)","j(U)","j(e_)","U(U)","~(e,e)","j(bd)","~(lG)","~(@,@)","j(d0)","j(eK)","a6(d_)","~(d,@)","a6(e,e,e{placeholder:e?})","j(bX)","j(a6)","j(cn)","~(cr)","bi(@,eI)","~(e,cr(A?))","j(fn[d])","ew()","d(dH,dH)","a6(e,e{placeholder:e,wide:j})","e(a6)","j_()","y<d>(dW)","io()","e(e,e,U)","d(ab,ab)","e(t)","~(ba<e?>(),e)","d(d,cy)","j(dT)","bi(~())","a6(e,e{placeholder:e?})","d(+(e,c8),+(e,c8))","j(q)","j(cg)","a6(e,U)","a6(e{placeholder:e,value:e})","j(hr)","d(dn,dn)","d(dP,dP)","db(bA)","U(q)","e(d[e])","fZ()","h3()","e(e?,e)","e(b3,t)","a6(e,y<+(e,e)>,e)","d(er,er)","j(fh)","d(bs)","h9()","j(j)","y<dj>(dR)","q(y<b_>)","q(q,b_)","d(y<b_>)","j(y<b_>)","j(ap<e,d0>)","j(@)","q(q,di)","j(A)","du()","j(bo)","h_()","aa(aj)","aa(aa,aa)","@(@,e)","cn()","d(cn,cn)","d(d,cG)","d(dS,dS)","dT(bc)","d(cy,cy)","dW(e,y<q>{hue:e?})","q(y<q>)","d(ap<e?,y<q>>,ap<e?,y<q>>)","d(dq,dq)","q(q,bo)","d(e{onError:d(e)?,radix:d?})","aa()","d(dr,dr)","j(fo)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.p&&a.b(c.a)&&b.b(c.b),"2;days,months":(a,b)=>c=>c instanceof A.ec&&a.b(c.a)&&b.b(c.b),"2;end,loans":(a,b)=>c=>c instanceof A.jk&&a.b(c.a)&&b.b(c.b),"2;month,year":(a,b)=>c=>c instanceof A.hz&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bB&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;accountId,from,to":(a,b,c)=>d=>d instanceof A.jl&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eP&&A.mJ(a,b.a),"4;complete,month,spent,year":a=>b=>b instanceof A.jm&&A.mJ(a,b.a),"5;":a=>b=>b instanceof A.jn&&A.mJ(a,b.a),"5;date,eventId,hash,n,removed":a=>b=>b instanceof A.jo&&A.mJ(a,b.a),"8;instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type":a=>b=>b instanceof A.jp&&A.mJ(a,b.a)}}
A.Kc(v.typeUniverse,JSON.parse('{"dJ":"eu","lf":"eu","eN":"eu","Or":"ex","kP":{"j":[],"aA":[]},"h4":{"bi":[],"aA":[]},"iq":{"a6":[]},"eu":{"a6":[]},"u":{"y":["1"],"T":["1"],"a6":[],"h":["1"],"bw":["1"]},"kO":{"iV":[]},"o2":{"u":["1"],"y":["1"],"T":["1"],"a6":[],"h":["1"],"bw":["1"]},"f2":{"al":["1"]},"ff":{"U":[],"bJ":[],"b0":["bJ"]},"ip":{"U":[],"d":[],"bJ":[],"b0":["bJ"],"aA":[]},"kQ":{"U":[],"bJ":[],"b0":["bJ"],"aA":[]},"dI":{"e":[],"b0":["e"],"fn":[],"bw":["@"],"aA":[]},"jc":{"BX":[]},"hx":{"BX":[]},"eO":{"h":["2"]},"i2":{"al":["2"]},"f5":{"eO":["1","2"],"h":["2"],"h.E":"2"},"jd":{"f5":["1","2"],"eO":["1","2"],"T":["2"],"h":["2"],"h.E":"2"},"jb":{"Q":["2"],"y":["2"],"eO":["1","2"],"T":["2"],"h":["2"]},"dp":{"jb":["1","2"],"Q":["2"],"y":["2"],"eO":["1","2"],"T":["2"],"h":["2"],"Q.E":"2","h.E":"2"},"f6":{"a9":["3","4"],"ae":["3","4"],"a9.K":"3","a9.V":"4"},"fk":{"aG":[]},"fR":{"Q":["d"],"cs":["d"],"y":["d"],"T":["d"],"h":["d"],"Q.E":"d","cs.E":"d"},"T":{"h":["1"]},"a2":{"T":["1"],"h":["1"]},"fv":{"a2":["1"],"T":["1"],"h":["1"],"h.E":"1","a2.E":"1"},"a7":{"al":["1"]},"c4":{"h":["2"],"h.E":"2"},"ie":{"c4":["1","2"],"T":["2"],"h":["2"],"h.E":"2"},"iA":{"al":["2"]},"ah":{"a2":["2"],"T":["2"],"h":["2"],"h.E":"2","a2.E":"2"},"n":{"h":["1"],"h.E":"1"},"N":{"al":["1"]},"dw":{"h":["2"],"h.E":"2"},"fa":{"al":["2"]},"fx":{"h":["1"],"h.E":"1"},"ig":{"fx":["1"],"T":["1"],"h":["1"],"h.E":"1"},"j2":{"al":["1"]},"dV":{"h":["1"],"h.E":"1"},"h0":{"dV":["1"],"T":["1"],"h":["1"],"h.E":"1"},"iZ":{"al":["1"]},"ih":{"T":["1"],"h":["1"],"h.E":"1"},"ii":{"al":["1"]},"j8":{"h":["1"],"h.E":"1"},"j9":{"al":["1"]},"pg":{"h":["1"],"h.E":"1"},"fm":{"al":["1"]},"dD":{"h":["+(d,1)"],"h.E":"+(d,1)"},"f9":{"dD":["1"],"T":["+(d,1)"],"h":["+(d,1)"],"h.E":"+(d,1)"},"as":{"al":["+(d,1)"]},"hs":{"Q":["1"],"cs":["1"],"y":["1"],"T":["1"],"h":["1"]},"aQ":{"a2":["1"],"T":["1"],"h":["1"],"h.E":"1","a2.E":"1"},"p":{"eb":[],"bk":[]},"ec":{"eb":[],"bk":[]},"jk":{"eb":[],"bk":[]},"hz":{"eb":[],"bk":[]},"bB":{"fE":[],"bk":[]},"jl":{"fE":[],"bk":[]},"eP":{"dd":[],"bk":[]},"jm":{"dd":[],"bk":[]},"jn":{"dd":[],"bk":[]},"jo":{"dd":[],"bk":[]},"jp":{"dd":[],"bk":[]},"i3":{"e7":["1","2"],"hC":["1","2"],"hb":["1","2"],"jx":["1","2"],"ae":["1","2"]},"fS":{"ae":["1","2"]},"aU":{"fS":["1","2"],"ae":["1","2"]},"fB":{"h":["1"],"h.E":"1"},"e9":{"al":["1"]},"cl":{"fS":["1","2"],"ae":["1","2"]},"fT":{"cJ":["1"],"d6":["1"],"T":["1"],"h":["1"]},"cx":{"fT":["1"],"cJ":["1"],"d6":["1"],"T":["1"],"h":["1"]},"cZ":{"fT":["1"],"cJ":["1"],"d6":["1"],"T":["1"],"h":["1"]},"kK":{"bN":[],"dy":[]},"fc":{"bN":[],"dy":[]},"iM":{"e4":[],"aG":[]},"kR":{"aG":[]},"lK":{"aG":[]},"jr":{"eI":[]},"bN":{"dy":[]},"kc":{"bN":[],"dy":[]},"kd":{"bN":[],"dy":[]},"lF":{"bN":[],"dy":[]},"lC":{"bN":[],"dy":[]},"fN":{"bN":[],"dy":[]},"lr":{"aG":[]},"cB":{"a9":["1","2"],"Cc":["1","2"],"ae":["1","2"],"a9.K":"1","a9.V":"2"},"au":{"T":["1"],"h":["1"],"h.E":"1"},"cC":{"al":["1"]},"M":{"T":["1"],"h":["1"],"h.E":"1"},"a1":{"al":["1"]},"ac":{"T":["ap<1,2>"],"h":["ap<1,2>"],"h.E":"ap<1,2>"},"iw":{"al":["ap<1,2>"]},"fg":{"cB":["1","2"],"a9":["1","2"],"Cc":["1","2"],"ae":["1","2"],"a9.K":"1","a9.V":"2"},"eb":{"bk":[]},"fE":{"bk":[]},"dd":{"bk":[]},"et":{"tQ":[],"fn":[]},"hy":{"iS":[],"cE":[]},"lO":{"h":["iS"],"h.E":"iS"},"fz":{"al":["iS"]},"hq":{"cE":[]},"mp":{"h":["cE"],"h.E":"cE"},"mq":{"al":["cE"]},"he":{"ex":[],"a6":[],"i1":[],"aA":[]},"ex":{"a6":[],"i1":[],"aA":[]},"iE":{"a6":[]},"mt":{"i1":[]},"iC":{"DF":[],"a6":[],"aA":[]},"bx":{"c3":["1"],"a6":[],"bw":["1"]},"ey":{"Q":["U"],"bx":["U"],"y":["U"],"c3":["U"],"T":["U"],"a6":[],"bw":["U"],"h":["U"],"aV":["U"]},"c5":{"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"]},"l0":{"ey":[],"Q":["U"],"bx":["U"],"y":["U"],"c3":["U"],"T":["U"],"a6":[],"bw":["U"],"h":["U"],"aV":["U"],"aA":[],"Q.E":"U","aV.E":"U"},"l1":{"ey":[],"Q":["U"],"bx":["U"],"y":["U"],"c3":["U"],"T":["U"],"a6":[],"bw":["U"],"h":["U"],"aV":["U"],"aA":[],"Q.E":"U","aV.E":"U"},"l2":{"c5":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"iD":{"c5":[],"kL":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"l3":{"c5":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"iF":{"c5":[],"Cp":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"iG":{"c5":[],"us":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"iH":{"c5":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"fl":{"c5":[],"e6":[],"Q":["d"],"bx":["d"],"y":["d"],"c3":["d"],"T":["d"],"a6":[],"bw":["d"],"h":["d"],"aV":["d"],"aA":[],"Q.E":"d","aV.E":"d"},"m9":{"aG":[]},"hB":{"e4":[],"aG":[]},"js":{"lG":[]},"ed":{"al":["1"]},"de":{"h":["1"],"h.E":"1"},"bW":{"aG":[]},"cN":{"lX":["1"]},"am":{"ba":["1"]},"jC":{"ED":[]},"mi":{"jC":[],"ED":[]},"dc":{"cJ":["1"],"E9":["1"],"d6":["1"],"T":["1"],"h":["1"]},"fC":{"al":["1"]},"Q":{"y":["1"],"T":["1"],"h":["1"]},"a9":{"ae":["1","2"]},"je":{"T":["2"],"h":["2"],"h.E":"2"},"jf":{"al":["2"]},"hb":{"ae":["1","2"]},"e7":{"hC":["1","2"],"hb":["1","2"],"jx":["1","2"],"ae":["1","2"]},"cJ":{"d6":["1"],"T":["1"],"h":["1"]},"jq":{"cJ":["1"],"d6":["1"],"T":["1"],"h":["1"]},"j5":{"cJ":["1"],"mu":["1"],"d6":["1"],"T":["1"],"h":["1"]},"md":{"a9":["e","@"],"ae":["e","@"],"a9.K":"e","a9.V":"@"},"me":{"a2":["e"],"T":["e"],"h":["e"],"h.E":"e","a2.E":"e"},"fM":{"bg":["y<d>","e"],"bg.S":"y<d>"},"hY":{"b8":["y<d>","e"],"b8.T":"e"},"k_":{"b8":["e","y<d>"],"b8.T":"y<d>"},"bf":{"b6":["y<d>"]},"ku":{"bg":["e","y<d>"]},"is":{"aG":[]},"kT":{"aG":[]},"kS":{"bg":["a0?","e"],"bg.S":"a0?"},"kV":{"b8":["a0?","e"],"b8.T":"e"},"kU":{"b8":["e","a0?"],"b8.T":"a0?"},"lM":{"bg":["e","y<d>"],"bg.S":"e"},"lN":{"b8":["e","y<d>"],"b8.T":"y<d>"},"j7":{"b8":["y<d>","e"],"b8.T":"e"},"hZ":{"b0":["hZ"]},"aa":{"b0":["aa"]},"U":{"bJ":[],"b0":["bJ"]},"ck":{"b0":["ck"]},"d":{"bJ":[],"b0":["bJ"]},"y":{"T":["1"],"h":["1"]},"bJ":{"b0":["bJ"]},"tQ":{"fn":[]},"iS":{"cE":[]},"d6":{"T":["1"],"h":["1"]},"e":{"b0":["e"],"fn":[]},"aS":{"hZ":[],"b0":["hZ"]},"m8":{"Z":[]},"jX":{"aG":[]},"e4":{"aG":[]},"ce":{"aG":[]},"hi":{"aG":[]},"kG":{"aG":[]},"j6":{"aG":[]},"lJ":{"aG":[]},"dY":{"aG":[]},"ke":{"aG":[]},"l9":{"aG":[]},"j0":{"aG":[]},"kM":{"aG":[]},"mr":{"eI":[]},"bH":{"Ju":[]},"jz":{"ut":[]},"mc":{"Jg":[]},"IO":{"y":["d"],"T":["d"],"h":["d"]},"e6":{"y":["d"],"T":["d"],"h":["d"]},"Jz":{"y":["d"],"T":["d"],"h":["d"]},"IN":{"y":["d"],"T":["d"],"h":["d"]},"Cp":{"y":["d"],"T":["d"],"h":["d"]},"kL":{"y":["d"],"T":["d"],"h":["d"]},"us":{"y":["d"],"T":["d"],"h":["d"]},"II":{"y":["U"],"T":["U"],"h":["U"]},"IJ":{"y":["U"],"T":["U"],"h":["U"]},"kq":{"b6":["cj"]},"h1":{"b8":["y<d>","cj"]},"kC":{"bf":[],"b6":["y<d>"]},"mj":{"h1":[],"b8":["y<d>","cj"],"b8.T":"cj"},"ml":{"bf":[],"b6":["y<d>"]},"mk":{"bf":[],"b6":["y<d>"]},"mm":{"h1":[],"b8":["y<d>","cj"],"b8.T":"cj"},"mn":{"bf":[],"b6":["y<d>"]},"lv":{"bf":[],"b6":["y<d>"]},"k2":{"f1":[]},"k3":{"id":[]},"k6":{"fO":[],"cz":[]},"k7":{"d7":[],"fO":[],"cz":[]},"k4":{"eq":[],"d3":[]},"i_":{"cz":[],"d3":[]},"eq":{"d3":[]},"eG":{"cz":[]},"d7":{"cz":[]},"kD":{"bf":[],"b6":["y<d>"]},"mb":{"bf":[],"b6":["y<d>"]},"it":{"h7":[]},"cD":{"bf":[],"b6":["y<d>"]},"mg":{"cT":[],"cD":[],"bf":[],"b6":["y<d>"]},"bq":{"hl":[]},"bt":{"Q":["d"],"y":["d"],"T":["d"],"h":["d"],"Q.E":"d"},"Cl":{"h7":[]},"d8":{"it":[],"Cl":[],"h7":[]},"bG":{"lj":[],"b0":["bG"]},"la":{"b6":["cj"]},"lb":{"f8":[],"bf":[],"b6":["y<d>"]},"kh":{"f1":[]},"km":{"d3":[]},"fV":{"Z":[]},"f7":{"cz":[],"d3":[]},"k0":{"f8":[],"cT":[],"cD":[],"bf":[],"b6":["y<d>"]},"f8":{"bf":[],"b6":["y<d>"]},"cT":{"cD":[],"bf":[],"b6":["y<d>"]},"kk":{"id":[]},"i7":{"eq":[],"d3":[]},"m1":{"cT":[],"cD":[],"bf":[],"b6":["y<d>"]},"i9":{"cz":[]},"m3":{"f8":[],"bf":[],"b6":["y<d>"]},"kn":{"d7":[],"cz":[]},"P":{"b0":["P"]},"hA":{"Z":[]},"cF":{"b0":["cF"]},"cd":{"Z":[]},"dk":{"Z":[]},"eJ":{"Z":[]},"eL":{"Z":[]},"ft":{"Z":[]},"dZ":{"Z":[]},"dx":{"Z":[]},"cf":{"Z":[]},"el":{"Z":[]},"eM":{"Z":[]},"em":{"Z":[]},"bY":{"Z":[]},"dG":{"Z":[]},"cY":{"Z":[]},"eC":{"Z":[]},"eD":{"Z":[]},"dA":{"Z":[]},"dB":{"Z":[]},"fb":{"Z":[]},"dl":{"Z":[]},"cS":{"Z":[]},"cA":{"Z":[]},"dE":{"Z":[]},"mh":{"af":["e","V"],"a9":["e","V"],"ae":["e","V"],"a9.K":"e","a9.V":"V","af.K":"e","af.V":"V"},"hj":{"Z":[]},"bh":{"Z":[]},"bZ":{"Z":[]},"cV":{"Z":[]},"iR":{"Z":[]},"bu":{"Z":[]},"af":{"a9":["1","2"],"ae":["1","2"],"a9.K":"1","a9.V":"2","af.K":"1","af.V":"2"},"j3":{"cJ":["1"],"d6":["1"],"T":["1"],"h":["1"]},"cm":{"Z":[]},"en":{"ez":[]},"fQ":{"ez":[]},"iL":{"ez":[]},"iK":{"ez":[]},"ic":{"ez":[]},"dM":{"Z":[]},"fu":{"Z":[]},"d4":{"Z":[]},"A":{"b0":["A"]},"bS":{"Z":[]},"bO":{"Z":[]},"bF":{"Z":[]},"d5":{"Z":[]},"aL":{"Z":[]},"ab":{"Z":[]},"eB":{"Z":[]},"cp":{"Z":[]},"hu":{"Z":[]},"cM":{"Z":[]},"aR":{"Z":[]},"hf":{"cI":[]},"iN":{"cI":[]},"hk":{"cI":[]},"c8":{"Z":[]},"fw":{"Z":[]},"e0":{"Z":[]},"co":{"Z":[]},"eE":{"Z":[]},"kH":{"Is":[]},"bd":{"Z":[]},"h_":{"Jx":[]},"fj":{"Z":[]},"h2":{"Z":[]},"eA":{"Z":[]},"ej":{"Z":[]},"iP":{"hg":[]},"iO":{"hg":[]},"e3":{"Z":[]},"e2":{"Z":[]}}'))
A.Kb(v.typeUniverse,JSON.parse('{"hs":1,"jD":2,"bx":1,"jq":1,"jy":1,"lw":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",z:"Nothing to change: it is already as asked.",F:"Sent. The phone adds the loan on its next sync.",L:"Sent. The phone applies it on its next sync.",m:"Sent. The phone removes it on its next sync.",p:"This browser cannot keep the page joined.",V:"newKeyPairFromSeed() is unsupported by this algorithm",y:"one of them is already filed, paired or linked",M:"only the last 4 characters of a number are kept",s:"the expense is filed under a spending category of "}
var t=(function rtii(){var s=A.a_
return{b:s("bs"),ov:s("di"),i6:s("ej"),bL:s("dj"),jN:s("cd"),V:s("b_"),vi:s("dk"),dd:s("dl"),Fq:s("bW"),D:s("fM"),d6:s("el"),Fb:s("dm"),e4:s("em"),Cv:s("k1"),ta:s("bD"),la:s("i0"),kc:s("dn"),l2:s("i1"),h:s("A"),ok:s("cg"),eY:s("cw"),G:s("bM"),zC:s("dq"),xr:s("kb"),sU:s("fR"),o4:s("bX"),nl:s("dr"),E:s("ch"),hO:s("b0<@>"),ca:s("kf"),hD:s("aU<e,e>"),hq:s("aU<e,d>"),d:s("cx<e>"),w0:s("cS"),eV:s("ci"),kk:s("cT"),zG:s("aa"),k5:s("P"),rU:s("ib"),g7:s("cV"),CU:s("cy"),lA:s("fY"),il:s("bO"),l9:s("cW"),xw:s("du"),eP:s("ck"),he:s("T<@>"),w5:s("cX"),yt:s("aG"),eG:s("dx"),xH:s("ik"),pp:s("ky"),Fj:s("bo"),BO:s("dy"),uo:s("ba<e?>"),AI:s("ba<e?>()"),U:s("ba<~>()"),ip:s("cl<cd,e>"),pA:s("cZ<cf>"),rv:s("c2"),vS:s("dz"),cE:s("im"),jf:s("dA"),AK:s("dC"),yO:s("ep"),aB:s("kI"),nq:s("bY"),wR:s("fc<U>"),hS:s("cn"),p0:s("fd"),ud:s("er"),lj:s("dE"),Ap:s("fe"),gy:s("cA"),eX:s("es"),mp:s("dF"),qn:s("dH"),oJ:s("h<U>"),tY:s("h<@>"),uI:s("h<d>"),Q:s("u<bs>"),uD:s("u<di>"),eF:s("u<dj>"),kd:s("u<b_>"),Dy:s("u<jW>"),nK:s("u<jZ>"),lt:s("u<k8>"),cs:s("u<bD>"),gI:s("u<dn>"),F:s("u<A>"),eR:s("u<cg>"),nt:s("u<k9>"),sA:s("u<cw>"),Dz:s("u<dq>"),mH:s("u<bX>"),h5:s("u<dr>"),Aq:s("u<ch>"),au:s("u<ci>"),xI:s("u<fU>"),yk:s("u<cy>"),xz:s("u<fY>"),CP:s("u<kr>"),eO:s("u<fZ>"),m1:s("u<du>"),jL:s("u<eo>"),kW:s("u<ik>"),ic:s("u<bP>"),dZ:s("u<bo>"),y0:s("u<c2>"),lN:s("u<dz>"),zA:s("u<im>"),Ew:s("u<dC>"),jw:s("u<kz>"),oT:s("u<d_>"),DA:s("u<kJ>"),ew:s("u<fe>"),t7:s("u<dF>"),aW:s("u<dH>"),p9:s("u<h3>"),sL:s("u<a6>"),aV:s("u<fh>"),k1:s("u<fi>"),e:s("u<t>"),nB:s("u<ab>"),Z:s("u<b3>"),AM:s("u<dK>"),tZ:s("u<y<e>>"),uw:s("u<y<d>>"),iF:s("u<dL>"),q0:s("u<h9>"),bk:s("u<ae<e,a0?>>"),lz:s("u<iB>"),g:s("u<q>"),fB:s("u<dN>"),aH:s("u<hd>"),Fn:s("u<l_>"),A:s("u<V>"),dQ:s("u<bh>"),sp:s("u<l4>"),cp:s("u<l7>"),Dk:s("u<l8>"),Y:s("u<aj>"),ey:s("u<fo>"),uE:s("u<fp>"),rA:s("u<bp>"),ev:s("u<lg>"),yT:s("u<iQ>"),tJ:s("u<dO>"),EQ:s("u<dP>"),hy:s("u<+(A,A)>"),AW:s("u<+(e,y<U>)>"),I:s("u<+(e,e)>"),qM:s("u<+(d,V)>"),wt:s("u<+(d,e)>"),l7:s("u<+month,year(d,d)>"),hK:s("u<+(V,V,bS)>"),Dg:s("u<+(d,d,bS)>"),sG:s("u<+(e,e,e,e?)>"),xj:s("u<+complete,month,spent,year(j,d,q,d)>"),kY:s("u<+(d,d,j,ae<e?,q>)>"),Ai:s("u<+(d,d,A,j,V?)>"),sx:s("u<lk>"),zM:s("u<dR>"),cM:s("u<ll>"),be:s("u<lm>"),D6:s("u<iU>"),os:s("u<lp>"),wp:s("u<cG>"),M:s("u<W>"),qH:s("u<dS>"),j2:s("u<fr>"),kz:s("u<bc>"),vV:s("u<dT>"),st:s("u<dU>"),sv:s("u<ls>"),EA:s("u<iY>"),EP:s("u<lt>"),mt:s("u<lu>"),mu:s("u<cq>"),bD:s("u<d9>"),vk:s("u<dW>"),g0:s("u<dX>"),Ev:s("u<hp>"),Ec:s("u<cK>"),n:s("u<c9>"),CL:s("u<lA>"),s:s("u<e>"),e3:s("u<lD>"),wF:s("u<lH>"),nS:s("u<lI>"),eE:s("u<e6>"),DO:s("u<da>"),oc:s("u<bA>"),C7:s("u<ht>"),sj:s("u<j>"),zp:s("u<U>"),zz:s("u<@>"),t:s("u<d>"),qt:s("u<il?>"),dr:s("u<q?>"),q:s("u<e?>"),wG:s("u<U?>"),rw:s("bw<@>"),Be:s("h4"),m:s("a6"),g9:s("dJ"),Eh:s("c3<@>"),nm:s("ir"),io:s("fh"),pj:s("iu<d8,bG>"),ch:s("d0"),k2:s("t"),P:s("ab"),u:s("b3"),xt:s("iv"),Ft:s("y<b_>"),aF:s("y<A>"),vG:s("y<ae<e,a0?>>"),r9:s("y<q>"),C:s("y<V>"),tU:s("y<aj>"),iX:s("y<aj>(h8,e,d,aa)"),to:s("y<bp>"),DX:s("y<+(e,e)>"),sO:s("y<+(d,V)>"),BU:s("y<+(e,e,e,e?)>"),Bz:s("y<W>"),zo:s("y<cq>"),Fu:s("y<d9>"),nd:s("y<hp>"),a:s("y<e>"),j:s("y<@>"),L:s("y<d>"),iP:s("y<e?>"),pt:s("dL"),gd:s("dM"),Ep:s("d2"),sd:s("cD"),zc:s("iz"),qo:s("d4"),ub:s("ap<e,d0>"),AT:s("ap<e,e>"),dK:s("ap<e,d>"),nF:s("ap<e?,y<q>>"),Ez:s("ae<e,bM>"),Cu:s("ae<e,b3>"),Dm:s("ae<e,V>"),sw:s("ae<e,bu>"),yz:s("ae<e,e>"),f:s("ae<@,@>"),J:s("ae<e,a0?>"),mE:s("ae<a0?,a0?>"),zK:s("ah<e,e>"),wL:s("ah<e,d>"),FC:s("ah<d,U>"),BA:s("ah<e?,e>"),lQ:s("cE"),o:s("hc"),B:s("q"),aD:s("q(bD)"),wg:s("dN"),wy:s("hd"),W:s("V"),y6:s("ew"),v_:s("bh"),i:s("he"),Eg:s("ey"),Ag:s("c5"),iT:s("fl"),kx:s("fm<e>"),aU:s("bi"),K:s("a0"),_:s("aj"),eM:s("hg"),l3:s("hh"),cL:s("fn"),fN:s("bZ"),pL:s("fo"),cZ:s("le"),AB:s("bp"),mZ:s("eC"),cl:s("iQ"),t_:s("eD"),gv:s("bF"),tW:s("dO"),C5:s("d5"),y3:s("dP"),Fx:s("cF"),op:s("Ou"),ep:s("+()"),sH:s("+(A,A)"),aa:s("+(A,ho?)"),qD:s("+end,loans(A,y<hp>)"),sF:s("+(bh,e?)"),g5:s("+(e,dl)"),Dt:s("+(e,A)"),jg:s("+(e,y<U>)"),z9:s("+(e,c8)"),p_:s("+(e,e)"),uB:s("+(d,V)"),jr:s("+(d,e)"),l1:s("+month,year(d,d)"),wD:s("+(a0?,a0?)"),ct:s("+(V,V,bS)"),Bf:s("+accountId,from,to(e,A,A)"),bY:s("+(e,cV,q)"),xG:s("+(e,e,cV)"),ER:s("+(e,e,e)"),d3:s("+(e,e,e?)"),xC:s("+(d,q,d6<e>)"),Ei:s("+(d,d,bS)"),Cw:s("+(e,e,e,cV)"),jm:s("+(e,e,e,e?)"),hf:s("+complete,month,spent,year(j,d,q,d)"),nr:s("+(d,d,j,ae<e?,q>)"),nX:s("+date,eventId,hash,n,removed(A,e,e,d,j)"),fK:s("co"),ez:s("iS"),iJ:s("dR"),xM:s("lo"),hn:s("cp"),q6:s("aQ<e>"),gb:s("aQ<d>"),t5:s("cG"),k:s("W"),dw:s("dS"),CW:s("aR"),fC:s("fr"),jF:s("lq"),cy:s("eE"),R:s("bc"),cT:s("cI"),di:s("dT"),kG:s("dU"),mg:s("iW"),yX:s("eF"),c:s("hl"),A0:s("bq"),aA:s("iY"),dO:s("d6<e>"),bu:s("fs"),gc:s("hn"),gZ:s("Cl"),jC:s("d8"),qC:s("bG"),uC:s("b6<cj>"),c5:s("cq"),in:s("c8"),Ba:s("ly"),r:s("bu"),qp:s("d9"),E7:s("dW"),l:s("eI"),sN:s("dX"),qe:s("eJ"),DV:s("lz"),AD:s("eK"),Bu:s("dZ"),A9:s("e_"),nT:s("ft"),iL:s("fu"),dh:s("cK"),v:s("c9"),u4:s("eL"),N:s("e"),j3:s("e()"),w:s("e(cE)"),ff:s("e(e)"),tx:s("e(e?)"),tD:s("hr"),lG:s("eM"),aT:s("fw"),EL:s("lE"),hz:s("lG"),zs:s("af<e,bs>"),l4:s("af<e,el>"),rE:s("af<e,bM>"),DF:s("af<e,c2>"),hl:s("af<e,fd>"),F4:s("af<e,hc>"),BK:s("af<e,ew>"),AJ:s("af<e,bc>"),dB:s("af<+(e,A),eK>"),n7:s("af<e,y<bp>>"),ur:s("j3<e>"),sg:s("aA"),oo:s("cr(A?)"),ib:s("e2"),qx:s("e3"),bs:s("e4"),Dd:s("us"),p:s("e6"),qF:s("eN"),iB:s("e7<e,q>"),tB:s("da"),ya:s("ut"),xN:s("cM"),qK:s("n<bs>"),gF:s("n<b_>"),rb:s("n<ch>"),km:s("n<bY>"),rx:s("n<ab>"),yL:s("n<V>"),dN:s("n<+complete,month,spent,year(j,d,q,d)>"),yF:s("n<+(d,d,j,ae<e?,q>)>"),o_:s("n<co>"),vL:s("n<cp>"),rK:s("n<bu>"),i0:s("n<bd>"),m5:s("N<ab>"),eT:s("j8<e>"),x:s("bA"),q9:s("db"),Ck:s("cN<a6>"),th:s("cN<@>"),le:s("cN<a0?>"),nx:s("aS"),oX:s("am<a6>"),hR:s("am<@>"),nR:s("am<a0?>"),gH:s("am<e?>"),wE:s("de<V>"),dU:s("de<+(d,d)>"),sn:s("bd"),y:s("j"),cP:s("j(bs)"),vu:s("j(b_)"),qB:s("j(ch)"),wx:s("j(bY)"),Ab:s("j(ab)"),fx:s("j(V)"),bl:s("j(a0)"),nn:s("j(+complete,month,spent,year(j,d,q,d))"),jb:s("j(+(d,d,j,ae<e?,q>))"),AH:s("j(co)"),rt:s("j(cp)"),ns:s("j(bu)"),aX:s("j(bd)"),pR:s("U"),oe:s("U(d)"),z:s("@"),pF:s("@()"),h_:s("@(a0)"),nW:s("@(a0,eI)"),S:s("d"),aY:s("d(e)"),tF:s("A?"),eZ:s("ba<bi>?"),uh:s("a6?"),jS:s("y<@>?"),ks:s("y<d>?"),yq:s("ae<@,@>?"),c_:s("ae<e,a0?>?"),X:s("a0?"),T:s("e?"),tj:s("e(cE)?"),F5:s("e6?"),f7:s("e8<@,@>?"),Af:s("mf?"),k7:s("j?"),u6:s("U?"),lo:s("d?"),lF:s("d(e)?"),ht:s("A?()?"),b0:s("e?()?"),s7:s("bJ?"),fY:s("bJ"),H:s("~"),O:s("~()"),ma:s("~(e)"),m2:s("~(e,@)"),uH:s("~(lG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.fy=J.kN.prototype
B.a=J.u.prototype
B.d=J.ip.prototype
B.fA=J.h4.prototype
B.G=J.ff.prototype
B.b=J.dI.prototype
B.fB=J.dJ.prototype
B.fC=J.iq.prototype
B.aC=A.iC.prototype
B.b5=A.iD.prototype
B.kW=A.iF.prototype
B.E=A.iG.prototype
B.i=A.fl.prototype
B.e_=J.lf.prototype
B.cn=J.eN.prototype
B.be=new A.ej("Cards",1,"cards")
B.bf=new A.ej("Bank accounts",0,"bank")
B.bg=new A.ej("Loans",2,"loans")
B.N=new A.cd(0,"savings")
B.Q=new A.cd(1,"current")
B.y=new A.cd(2,"creditCard")
B.o=new A.cd(3,"loan")
B.x=new A.cd(4,"cash")
B.a7=new A.cd(5,"retirement")
B.ct=new A.dk("NRE",0,"nre")
B.cu=new A.dk("NRO",1,"nro")
B.bh=new A.dk("SRS",2,"srs")
B.er=new A.hY(!1)
B.L=new A.fM(B.er)
B.es=new A.hY(!0)
B.eq=new A.fM(B.es)
B.bi=new A.el(0,"disputed")
B.cv=new A.el(1,"cancelled")
B.cw=new A.cf(0,"unverified")
B.bj=new A.cf(1,"open")
B.bk=new A.cf(2,"partiallyPaid")
B.bl=new A.cf(3,"paid")
B.aF=new A.cf(4,"overdue")
B.cx=new A.cf(5,"disputed")
B.bm=new A.cf(6,"cancelled")
B.bn=new A.cf(7,"paymentNotKnown")
B.cA=new A.k6()
B.ew=new A.k4(B.cA,"SHA-256")
B.cI=new A.ia(null)
B.ex=new A.n6(null)
B.cz=new A.fc(A.N6(),t.wR)
B.cy=new A.fc(A.N7(),t.wR)
B.B=new A.k_()
B.ey=new A.k7()
B.np=new A.ne()
B.cB=new A.km()
B.bo=new A.i9()
B.cC=new A.kn()
B.nq=new A.kp(A.a_("kp<0&>"))
B.cD=new A.ic()
B.bp=new A.ii(A.a_("ii<0&>"))
B.aw=new A.kv()
B.a1=new A.kv()
B.ns=new A.ck(288e8)
B.q=new A.nJ()
B.nt=s([3,1],t.t)
B.bq=new A.nR()
B.Y=new A.kM()
B.cE=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ez=function() {
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
B.eE=function(getTagFallback) {
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
B.eA=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eD=function(hooks) {
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
B.eC=function(hooks) {
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
B.eB=function(hooks) {
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
B.cF=function(hooks) { return hooks; }

B.z=new A.kS()
B.aG=new A.kZ(A.a_("kZ<d>"))
B.eF=new A.iL()
B.eG=new A.l9()
B.nr=new A.tO()
B.eH=new A.u_()
B.t=new A.u3()
B.eI=new A.uc()
B.eJ=new A.um()
B.R=new A.lM()
B.F=new A.lN()
B.S=new A.uO()
B.W=new A.mi()
B.aH=new A.mj()
B.eK=new A.mm()
B.aI=new A.mr()
B.eQ=new A.fV(0,"argon2d")
B.cG=new A.fV(1,"argon2i")
B.br=new A.fV(2,"argon2id")
B.cH=new A.f7(64)
B.eR=new A.i7(B.bo)
B.m=new A.cV(0,"inflow")
B.k=new A.cV(1,"outflow")
B.ny=s(["document"],t.s)
B.bs=new A.bO("Document",null,9,"other")
B.nN=s(["work","permit","wp"],t.s)
B.cJ=new A.bO("Work permit",!0,4,"workPermit")
B.f_=new A.ck(0)
B.f0=new A.ck(1)
B.f1=new A.ck(2e7)
B.f2=new A.ck(6e7)
B.j=new A.aL(0,"text")
B.a2=new A.aL(1,"long")
B.bt=new A.aL(10,"people")
B.a3=new A.aL(11,"account")
B.af=new A.aL(12,"book")
B.C=new A.aL(13,"ref")
B.aJ=new A.aL(14,"policy")
B.bu=new A.aL(15,"document")
B.ao=new A.aL(16,"movement")
B.bv=new A.aL(17,"invoice")
B.aK=new A.aL(18,"file")
B.a8=new A.aL(19,"last4")
B.r=new A.aL(2,"date")
B.Z=new A.aL(20,"flag")
B.ap=new A.aL(21,"address")
B.aL=new A.aL(22,"percent")
B.bw=new A.aL(23,"ifsc")
B.aM=new A.aL(3,"time")
B.aq=new A.aL(4,"month")
B.u=new A.aL(5,"money")
B.ax=new A.aL(6,"decimal")
B.J=new A.aL(7,"integer")
B.O=new A.aL(8,"choice")
B.ar=new A.aL(9,"person")
B.f5=new A.cY(0,"giro")
B.f6=new A.cY(1,"cardBill")
B.cK=new A.cY(2,"loan")
B.f7=new A.cY(3,"income")
B.f8=new A.cY(4,"payment")
B.cL=new A.cY(5,"move")
B.f9=new A.cY(6,"premium")
B.fa=new A.b9("not a sender id",null,null)
B.fb=new A.b9("format",null,null)
B.fc=new A.b9("emailSha256 is not a SHA-256",null,null)
B.fd=new A.b9("not a sender address",null,null)
B.fe=new A.fb(0,"deducted")
B.ff=new A.fb(1,"owner")
B.fg=new A.fb(2,"lastTime")
B.fh=new A.fb(3,"unknown")
B.bx=new A.dA(0,"paid")
B.by=new A.dA(1,"failed")
B.cM=new A.dA(2,"none")
B.cN=new A.dA(3,"clear")
B.fi=new A.dB(0,"planned")
B.cO=new A.dB(1,"seen")
B.cP=new A.dB(2,"paidOwner")
B.fj=new A.dB(3,"failed")
B.fk=new A.dB(4,"unconfirmed")
B.cQ=new A.dB(5,"none")
B.bz=new A.h2(0,"critical")
B.cR=new A.h2(1,"action")
B.cS=new A.h2(2,"info")
B.cT=new A.bY(3,"document")
B.cU=new A.bY(4,"tdsCertificate")
B.cV=new A.cm(0,"scheduled")
B.cW=new A.cm(1,"dueSoon")
B.cX=new A.cm(2,"dueToday")
B.cY=new A.cm(3,"awaitingStatement")
B.ay=new A.cm(4,"paid")
B.bA=new A.cm(5,"partlyPaid")
B.bB=new A.cm(6,"overdue")
B.aN=new A.cm(7,"confirmedByYou")
B.cZ=new A.dG(0,"unplaced")
B.fz=new A.dG(1,"unpaid")
B.bC=new A.dG(2,"partlyPaid")
B.bD=new A.dG(3,"paid")
B.d_=new A.dG(4,"overpaid")
B.d0=new A.dG(5,"mismatch")
B.fD=new A.kU(null)
B.fE=new A.kV(null)
B.T=new A.iu("ed25519",t.pj)
B.U=new A.iu("x25519",t.pj)
B.aO=new A.fj(0,"plain")
B.fF=new A.fj(1,"good")
B.fG=new A.fj(2,"warn")
B.d1=new A.fj(3,"bad")
B.c=s([],t.s)
B.dE=s(["company"],t.s)
B.aQ=new A.t("bookId","Company",B.af,!0,B.c,null,null,null,B.dE,null)
B.d8=new A.t("name","Name on the invoice",B.j,!0,B.c,null,null,null,B.c,null)
B.d7=new A.t("address","Address",B.ap,!0,B.c,null,null,null,B.c,null)
B.j_=new A.t("uenLast4","UEN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.iz=new A.t("gstRegistered","GST registered",B.Z,!1,B.c,null,null,null,B.c,null)
B.fJ=new A.t("gstRegLast4","GST registration number, last 4",B.a8,!1,B.c,null,null,null,B.c,null)
B.aP=new A.t("seriesId","Invoice series",B.C,!0,B.c,"rentSeries",null,null,B.c,null)
B.hQ=new A.t("creditSeriesId","Credit note series",B.C,!1,B.c,"rentSeries",null,null,B.c,"The invoice series when left empty")
B.iS=new A.t("accountId","Paid into",B.a3,!0,B.c,null,null,null,B.c,null)
B.hu=new A.t("paymentDays","Payment due after (days)",B.J,!1,B.c,null,0,365,B.c,"30 when left empty")
B.fU=new A.t("payNow","Print a PayNow QR (to the UEN)",B.Z,!1,B.c,null,null,null,B.c,null)
B.iQ=new A.t("footer","Note on every invoice",B.a2,!1,B.c,null,null,null,B.c,null)
B.jR=s([B.aQ,B.d8,B.d7,B.j_,B.iz,B.fJ,B.aP,B.hQ,B.iS,B.hu,B.fU,B.iQ],t.e)
B.ah=new A.ab("Company invoice issuer",B.jR,24,"companyIssuer")
B.h3=new A.t("destination","Destination",B.j,!0,B.c,null,null,null,B.c,null)
B.iA=new A.t("departs","Leaving on",B.r,!0,B.c,null,null,null,B.c,null)
B.hf=new A.t("returns","Back on",B.r,!0,B.c,null,null,null,B.c,null)
B.fS=new A.t("travellers","Travellers",B.bt,!0,B.c,null,null,null,B.c,null)
B.d2=new A.t("fromEvent","From the calendar",B.j,!1,B.c,null,null,null,B.c,null)
B.ag=new A.t("file","Document",B.aK,!1,B.c,null,null,null,B.c,null)
B.k9=s([B.h3,B.iA,B.hf,B.fS,B.d2,B.ag],t.e)
B.dg=new A.ab("Trip",B.k9,3,"trip")
B.iR=new A.t("loanId","Loan",B.a3,!0,B.c,null,null,null,B.c,null)
B.h8=new A.t("due","Due",B.r,!0,B.c,null,null,null,B.c,null)
B.de=new A.t("on","On",B.r,!0,B.c,null,null,null,B.c,null)
B.k8=s([B.iR,B.h8,B.de],t.e)
B.bI=new A.ab("Instalment you paid",B.k8,31,"loanInstalmentConfirm")
B.hH=new A.t("name","Name",B.j,!0,B.c,null,null,null,B.c,null)
B.im=new A.t("attention","Attention",B.j,!1,B.c,null,null,null,B.c,null)
B.iG=new A.t("paymentDays","Payment due after (days)",B.J,!1,B.c,null,0,365,B.c,null)
B.jI=s([B.aQ,B.hH,B.d7,B.im,B.iG],t.e)
B.a4=new A.ab("Customer",B.jI,25,"customer")
B.i2=new A.t("year","Year",B.J,!0,B.c,null,2000,2100,B.c,null)
B.i_=new A.t("employee","Employee share",B.u,!0,B.c,null,null,null,B.c,null)
B.i0=new A.t("employer","Employer share",B.u,!0,B.c,null,null,null,B.c,null)
B.hm=new A.t("source","From",B.j,!0,B.c,null,null,null,B.c,"The CPF statement")
B.j7=s([B.i2,B.i_,B.i0,B.hm],t.e)
B.dh=new A.ab("CPF contributions",B.j7,11,"cpfYear")
B.d3=new A.t("customerId","Customer",B.C,!0,B.c,"customer",null,null,B.c,null)
B.bE=new A.t("date","Invoice date",B.r,!0,B.c,null,null,null,B.c,null)
B.hM=new A.t("reference","Customer reference",B.j,!1,B.c,null,null,null,B.c,"Like a PO number")
B.d4=new A.t("note","Note",B.a2,!1,B.c,null,null,null,B.c,null)
B.hx=new A.t("currency","Currency",B.j,!1,B.c,null,null,null,B.c,"SGD when left empty; like USD")
B.fN=new A.t("sgdRate","S$ for 1 unit of it",B.ax,!1,B.c,null,null,null,B.c,"For a tax invoice not in SGD, like 1.3412")
B.ky=s([B.aQ,B.d3,B.bE,B.hM,B.d4,B.hx,B.fN],t.e)
B.a5=new A.ab("Invoice draft",B.ky,26,"invoiceDraft")
B.d9=new A.t("title","What",B.j,!0,B.c,null,null,null,B.c,null)
B.az=new A.t("date","Date",B.r,!0,B.c,null,null,null,B.c,null)
B.bG=new A.t("time","Time",B.aM,!1,B.c,null,null,null,B.c,"HH:MM")
B.kj=s(["on-the-day","1-day-before","2-days-before","1-week-before"],t.s)
B.fQ=new A.t("remind","Remind me",B.O,!1,B.kj,null,null,null,B.c,null)
B.jX=s([B.d9,B.az,B.bG,B.d4,B.fQ],t.e)
B.di=new A.ab("Event",B.jX,17,"event")
B.iX=new A.t("invoiceId","Invoice",B.bv,!0,B.c,null,null,null,B.c,null)
B.hz=new A.t("file","Document",B.aK,!0,B.c,null,null,null,B.c,null)
B.kC=s([B.iX,B.hz],t.e)
B.dj=new A.ab("Invoice document",B.kC,2,"invoiceFile")
B.fV=new A.t("personId","Helper",B.ar,!0,B.c,null,null,null,B.c,null)
B.hg=new A.t("permitId","Work permit",B.bu,!1,B.c,null,null,null,B.c,null)
B.hy=new A.t("renewalDate","Permit renewal",B.r,!1,B.c,null,null,null,B.c,null)
B.hV=new A.t("medicalDue","Medical examination due",B.r,!1,B.c,null,null,null,B.c,null)
B.h9=new A.t("contractEnds","Contract ends",B.r,!1,B.c,null,null,null,B.c,null)
B.ig=new A.t("source","Dates from",B.j,!1,B.c,null,null,null,B.c,"The permit, policy or MOM notice")
B.k5=s([B.fV,B.hg,B.hy,B.hV,B.h9,B.ig],t.e)
B.dk=new A.ab("Helper",B.k5,8,"helper")
B.bF=new A.t("tenancyId","Tenancy",B.C,!0,B.c,"tenancy",null,null,B.c,null)
B.iu=new A.t("legalName","Tenant's legal name",B.j,!0,B.c,null,null,null,B.c,null)
B.i7=new A.t("address","Tenant's address",B.ap,!0,B.c,null,null,null,B.c,null)
B.iK=new A.t("gstinLast4","Tenant's GSTIN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.iI=new A.t("placeOfSupply","Place of supply",B.j,!0,B.c,null,null,null,B.c,'Like "Tamil Nadu (33)"')
B.hI=new A.t("service","Service name",B.j,!0,B.c,null,null,null,B.c,'Like "Rent of Example Plaza"')
B.fX=new A.t("sac","SAC",B.J,!1,B.c,null,99e4,999999,B.c,"997212 when left empty")
B.it=new A.t("tdsPercent","TDS the tenant deducts (%)",B.aL,!1,B.c,null,null,null,B.c,"10 when left empty")
B.jM=s(["1","2","3"],t.s)
B.i3=new A.t("layout","Layout",B.O,!0,B.jM,null,null,null,B.c,null)
B.iW=new A.t("accountId","Rent paid into",B.a3,!0,B.c,null,null,null,B.c,null)
B.ij=new A.t("ifsc","IFSC",B.bw,!0,B.c,null,null,null,B.c,null)
B.iE=new A.t("accountNote","After the account number",B.j,!1,B.c,null,null,null,B.c,"Like NRO")
B.hK=new A.t("invoiceDay","Invoices dated on day",B.J,!1,B.c,null,1,31,B.c,null)
B.j2=new A.t("datedMonthBefore","Dated in the month before",B.Z,!1,B.c,null,null,null,B.c,null)
B.fL=new A.t("workingDay","Moved to the nearest working day",B.Z,!1,B.c,null,null,null,B.c,null)
B.k4=s([B.bF,B.iu,B.i7,B.iK,B.iI,B.hI,B.fX,B.it,B.i3,B.aP,B.iW,B.ij,B.iE,B.hK,B.j2,B.fL],t.e)
B.aR=new A.ab("Invoicing details",B.k4,20,"tenancyBilling")
B.fT=new A.t("draftId","Draft",B.C,!0,B.c,"invoiceDraft",null,null,B.c,null)
B.hr=new A.t("description","Description",B.a2,!0,B.c,null,null,null,B.c,null)
B.iT=new A.t("quantity","Quantity",B.ax,!0,B.c,null,null,null,B.c,null)
B.hp=new A.t("unitPrice","Unit price",B.u,!0,B.c,null,null,null,B.c,null)
B.jG=s(["standard","zero-rated"],t.s)
B.is=new A.t("gst","GST",B.O,!1,B.jG,null,null,null,B.c,"Standard when left empty")
B.ju=s([B.fT,B.hr,B.iT,B.hp,B.is],t.e)
B.as=new A.ab("Invoice line",B.ju,27,"invoiceDraftLine")
B.bH=new A.t("personId","For",B.ar,!0,B.c,null,null,null,B.c,null)
B.fW=new A.t("provider","Clinic or hospital",B.j,!0,B.c,null,null,null,B.c,null)
B.hD=new A.t("total","Bill total",B.u,!0,B.c,null,null,null,B.c,null)
B.dd=new A.t("medisave","Paid by MediSave",B.u,!1,B.c,null,null,null,B.c,null)
B.iP=new A.t("insurance","Paid by insurance",B.u,!1,B.c,null,null,null,B.c,null)
B.iD=new A.t("movementId","Card or cash transaction",B.ao,!1,B.c,null,null,null,B.c,null)
B.iJ=new A.t("policyId","Policy",B.aJ,!1,B.c,null,null,null,B.c,null)
B.ja=s([B.bH,B.az,B.fW,B.hD,B.dd,B.iP,B.iD,B.iJ,B.ag],t.e)
B.dl=new A.ab("Medical bill",B.ja,6,"medicalBill")
B.ie=new A.t("pattern","Number pattern",B.j,!0,B.c,null,null,null,B.c,"Like INV-{nnn}-{fy}")
B.hG=new A.t("startNumber","Next number",B.J,!0,B.c,null,1,999999,B.c,null)
B.j1=new A.t("yearly","Start again at 1 each April",B.Z,!1,B.c,null,null,null,B.c,null)
B.id=new A.t("startYear","Year of the next number",B.j,!1,B.c,null,null,null,B.c,"Like 26/27")
B.kr=s([B.ie,B.hG,B.j1,B.id],t.e)
B.a9=new A.ab("Invoice series",B.kr,19,"rentSeries")
B.kl=s(["oa","sa","ra","ma"],t.s)
B.fZ=new A.t("account","CPF account",B.O,!0,B.kl,null,null,null,B.c,null)
B.hc=new A.t("amount","Amount",B.u,!0,B.c,null,null,null,B.c,null)
B.h2=new A.t("purpose","For",B.j,!0,B.c,null,null,null,B.c,null)
B.jC=s([B.fZ,B.hc,B.az,B.h2],t.e)
B.dm=new A.ab("Paid from CPF",B.jC,12,"cpfUse")
B.kp=s(["sent","gst-filed","gst-paid","gstr1-filed","gstr3b-paid","gst-itc","tds-certificate"],t.s)
B.h4=new A.t("what","What",B.O,!0,B.kp,null,null,null,B.c,null)
B.hb=new A.t("invoiceId","Invoice",B.C,!1,B.c,"rentInvoice",null,null,B.c,null)
B.ir=new A.t("tenancyId","Tenancy",B.C,!1,B.c,"tenancy",null,null,B.c,null)
B.h1=new A.t("quarter","Quarter",B.j,!1,B.c,null,null,null,B.c,null)
B.j3=new A.t("propertyId","Property",B.C,!1,B.c,"property",null,null,B.c,null)
B.iH=new A.t("month","Month",B.aq,!1,B.c,null,null,null,B.c,null)
B.hZ=new A.t("reference","Reference",B.j,!1,B.c,null,null,null,B.c,null)
B.ik=new A.t("amount","Input tax credit",B.u,!1,B.c,null,null,null,B.c,null)
B.jy=s([B.h4,B.hb,B.ir,B.h1,B.j3,B.iH,B.de,B.hZ,B.ik],t.e)
B.aS=new A.ab("Rental mark",B.jy,30,"rentalMark")
B.db=new A.t("policyId","Policy",B.aJ,!0,B.c,null,null,null,B.c,null)
B.iM=new A.t("billId","Bill",B.C,!1,B.c,"medicalBill",null,null,B.c,null)
B.ia=new A.t("claimed","Claimed",B.u,!0,B.c,null,null,null,B.c,null)
B.iw=new A.t("submitted","Submitted on",B.r,!1,B.c,null,null,null,B.c,null)
B.ku=s(["preparing","submitted","approved","rejected","paid"],t.s)
B.iB=new A.t("status","Status",B.O,!0,B.ku,null,null,null,B.c,null)
B.io=new A.t("paid","Paid out",B.u,!1,B.c,null,null,null,B.c,null)
B.ic=new A.t("creditMovementId","Claim credit transaction",B.ao,!1,B.c,null,null,null,B.c,null)
B.j8=s([B.db,B.bH,B.iM,B.ia,B.iw,B.iB,B.io,B.ic,B.ag],t.e)
B.bJ=new A.ab("Claim",B.j8,7,"claim")
B.hP=new A.t("name","Name",B.j,!0,B.c,null,null,null,B.c,'Like "Chennai shop"')
B.jE=s(["SG","IN"],t.s)
B.d6=new A.t("country","Country",B.O,!0,B.jE,null,null,null,B.c,null)
B.k7=s(["home","commercial","land","other"],t.s)
B.fM=new A.t("type","Type",B.O,!0,B.k7,null,null,null,B.c,null)
B.iF=new A.t("share","Your share (%)",B.J,!1,B.c,null,1,100,B.c,null)
B.i5=new A.t("purchased","Bought on",B.r,!1,B.c,null,null,null,B.c,null)
B.j0=new A.t("loanAccountId","Loan",B.a3,!1,B.c,null,null,null,B.c,null)
B.kn=s(["property","member"],t.s)
B.iY=new A.t("bookId","Book",B.af,!1,B.c,null,null,null,B.kn,null)
B.hS=new A.t("gstr1Day","GSTR-1 due day",B.J,!1,B.c,null,1,28,B.c,null)
B.hl=new A.t("gstr3bDay","GSTR-3B due day",B.J,!1,B.c,null,1,28,B.c,null)
B.hA=new A.t("creditSeriesId","Credit note series",B.C,!1,B.c,"rentSeries",null,null,B.c,null)
B.jr=s([B.hP,B.d6,B.fM,B.iF,B.i5,B.j0,B.iY,B.hS,B.hl,B.hA,B.ag],t.e)
B.aA=new A.ab("Property",B.jr,0,"property")
B.da=new A.t("propertyId","Property",B.C,!0,B.c,"property",null,null,B.c,null)
B.hC=new A.t("address","Address and phone",B.ap,!0,B.c,null,null,null,B.c,null)
B.fH=new A.t("gstinLast4","GSTIN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.iL=new A.t("panLast4","PAN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.kE=s([B.da,B.d8,B.hC,B.fH,B.iL],t.e)
B.aT=new A.ab("Invoice issuer",B.kE,18,"rentIssuer")
B.h5=new A.t("month","For the month",B.aq,!0,B.c,null,null,null,B.c,null)
B.jv=s([B.bF,B.aP,B.h5,B.bE],t.e)
B.ai=new A.ab("Rent invoice",B.jv,22,"rentInvoice")
B.hk=new A.t("invoiceId","Invoice",B.C,!0,B.c,"companyInvoice",null,null,B.c,null)
B.df=new A.t("seriesId","Credit note series",B.C,!0,B.c,"rentSeries",null,null,B.c,null)
B.d5=new A.t("date","Credit note date",B.r,!0,B.c,null,null,null,B.c,null)
B.jp=s([B.hk,B.df,B.d5],t.e)
B.aj=new A.ab("Company credit note",B.jp,29,"companyCredit")
B.hq=new A.t("bookId","Book",B.af,!0,B.c,null,null,null,B.dE,null)
B.iO=new A.t("incorporated","Incorporated on",B.r,!1,B.c,null,null,null,B.c,null)
B.fP=new A.t("last4","Registration number, last 4",B.a8,!1,B.c,null,null,null,B.c,null)
B.h7=new A.t("directors","Directors",B.j,!1,B.c,null,null,null,B.c,null)
B.jF=s([B.hq,B.d6,B.iO,B.fP,B.h7,B.ag],t.e)
B.aU=new A.ab("Company",B.jF,9,"company")
B.hh=new A.t("source","Proposed from",B.j,!0,B.c,null,null,null,B.c,null)
B.kb=s([B.d9,B.az,B.bG,B.hh],t.e)
B.dn=new A.ab("Plan item",B.kb,16,"planItem")
B.hN=new A.t("description","Description",B.j,!0,B.c,null,null,null,B.c,'Like "Common area maintenance"')
B.fK=new A.t("sac","SAC",B.J,!0,B.c,null,99e4,999999,B.c,null)
B.h6=new A.t("amount","Amount before GST",B.u,!0,B.c,null,null,null,B.c,null)
B.jA=s([B.bF,B.hN,B.fK,B.h6],t.e)
B.bK=new A.ab("Extra invoice line",B.jA,21,"tenancyLine")
B.iy=new A.t("invoiceId","Invoice",B.C,!0,B.c,"rentInvoice",null,null,B.c,null)
B.jg=s([B.iy,B.df,B.d5],t.e)
B.ak=new A.ab("Credit note",B.jg,23,"rentCredit")
B.iv=new A.t("tripId","Trip",B.C,!0,B.c,"trip",null,null,B.c,null)
B.ha=new A.t("movementId","Transaction",B.ao,!0,B.c,null,null,null,B.c,null)
B.hY=new A.t("attached","On the trip",B.Z,!0,B.c,null,null,null,B.c,null)
B.fR=new A.t("sgd","In SGD",B.u,!1,B.c,null,null,null,B.c,null)
B.iV=new A.t("rate","Rate",B.ax,!1,B.c,null,null,null,B.c,null)
B.kx=s([B.iv,B.ha,B.hY,B.fR,B.iV],t.e)
B.dp=new A.ab("Trip line",B.kx,4,"tripLine")
B.hB=new A.t("title","What",B.j,!0,B.c,null,null,null,B.c,'Like "Dentist"')
B.hX=new A.t("place","Where",B.j,!1,B.c,null,null,null,B.c,null)
B.je=s([B.bH,B.hB,B.az,B.bG,B.hX,B.d2],t.e)
B.dq=new A.ab("Appointment",B.je,5,"appointment")
B.jV=s([B.aQ,B.d3,B.aP,B.bE],t.e)
B.a6=new A.ab("Company invoice",B.jV,28,"companyInvoice")
B.kd=s(["landlord","tenant"],t.s)
B.fI=new A.t("role","You are the",B.O,!0,B.kd,null,null,null,B.c,null)
B.i8=new A.t("otherParty","Other party",B.j,!0,B.c,null,null,null,B.c,null)
B.hO=new A.t("rent","Rent",B.u,!1,B.c,null,null,null,B.c,null)
B.ii=new A.t("dueDay","Rent due on day",B.J,!1,B.c,null,1,31,B.c,null)
B.fO=new A.t("deposit","Deposit",B.u,!1,B.c,null,null,null,B.c,null)
B.ip=new A.t("starts","Lease starts",B.r,!1,B.c,null,null,null,B.c,null)
B.i1=new A.t("ends","Lease ends",B.r,!1,B.c,null,null,null,B.c,null)
B.jl=s([B.da,B.fI,B.i8,B.hO,B.ii,B.fO,B.ip,B.i1,B.ag],t.e)
B.at=new A.ab("Tenancy",B.jl,1,"tenancy")
B.i6=new A.t("title","Remind me to",B.j,!0,B.c,null,null,null,B.c,null)
B.fY=new A.t("anchor","From the date",B.r,!0,B.c,null,null,null,B.c,null)
B.hi=new A.t("offset","When",B.j,!0,B.c,null,null,null,B.c,'Like "1 month before"')
B.hv=new A.t("date","On",B.r,!0,B.c,null,null,null,B.c,null)
B.hn=new A.t("source","Source",B.a2,!0,B.c,null,null,null,B.c,null)
B.dc=new A.t("confirmedOn","Confirmed on",B.r,!0,B.c,null,null,null,B.c,null)
B.ko=s(["yearly","monthly","every-n-months","every-n-weeks"],t.s)
B.i4=new A.t("repeat","Repeats",B.O,!1,B.ko,null,null,null,B.c,null)
B.ib=new A.t("every","Every how many months or weeks",B.J,!1,B.c,null,2,99,B.c,null)
B.h_=new A.t("until","Until",B.r,!1,B.c,null,null,null,B.c,null)
B.hL=new A.t("times","How many times in all",B.J,!1,B.c,null,2,999,B.c,null)
B.k3=s([B.i6,B.fY,B.hi,B.hv,B.hn,B.dc,B.i4,B.ib,B.h_,B.hL],t.e)
B.dr=new A.ab("Reminder",B.k3,15,"ownReminder")
B.hJ=new A.t("text","Fact",B.a2,!0,B.c,null,null,null,B.c,null)
B.il=new A.t("sourceFile","From",B.j,!0,B.c,null,null,null,B.c,null)
B.iZ=new A.t("span","Quote",B.a2,!1,B.c,null,null,null,B.c,null)
B.hs=new A.t("page","Page",B.J,!1,B.c,null,1,9999,B.c,null)
B.ix=new A.t("fileDate","File dated",B.r,!1,B.c,null,null,null,B.c,null)
B.iU=new A.t("asOf","True as of",B.r,!1,B.c,null,null,null,B.c,null)
B.iN=new A.t("driveFileId","Drive file",B.j,!1,B.c,null,null,null,B.c,null)
B.i9=new A.t("version","Copy",B.j,!1,B.c,null,null,null,B.c,null)
B.iq=new A.t("date","Date it names",B.r,!1,B.c,null,null,null,B.c,null)
B.he=new A.t("recordId","About",B.j,!1,B.c,null,null,null,B.c,null)
B.kw=s([B.hJ,B.il,B.iZ,B.hs,B.ix,B.iU,B.dc,B.iN,B.i9,B.iq,B.he],t.e)
B.bL=new A.ab("Memory",B.kw,14,"memory")
B.hU=new A.t("dueOn","Due on",B.r,!0,B.c,null,null,null,B.c,null)
B.ht=new A.t("cash","Paid in cash or card",B.u,!1,B.c,null,null,null,B.c,null)
B.hj=new A.t("movementId","Transaction",B.ao,!1,B.c,null,null,null,B.c,null)
B.k6=s([B.db,B.hU,B.ht,B.dd,B.hj],t.e)
B.aV=new A.ab("Premium paid",B.k6,13,"premiumPaid")
B.iC=new A.t("employer","Employer",B.j,!0,B.c,null,null,null,B.c,null)
B.hR=new A.t("period","Pay period",B.aq,!0,B.c,null,null,null,B.c,"YYYY-MM")
B.hW=new A.t("payDate","Pay date",B.r,!0,B.c,null,null,null,B.c,null)
B.hw=new A.t("gross","Gross pay",B.u,!1,B.c,null,null,null,B.c,null)
B.h0=new A.t("allowances","Allowances",B.u,!1,B.c,null,null,null,B.c,null)
B.ho=new A.t("bonus","Bonus",B.u,!1,B.c,null,null,null,B.c,null)
B.hE=new A.t("employeeCpf","Employee CPF",B.u,!1,B.c,null,null,null,B.c,null)
B.hF=new A.t("employerCpf","Employer CPF",B.u,!1,B.c,null,null,null,B.c,null)
B.ih=new A.t("otherDeductions","Other deductions",B.u,!1,B.c,null,null,null,B.c,null)
B.hT=new A.t("net","Net pay",B.u,!0,B.c,null,null,null,B.c,null)
B.hd=new A.t("accountId","Paid into",B.a3,!1,B.c,null,null,null,B.c,null)
B.j4=new A.t("reader","Read by",B.j,!1,B.c,null,null,null,B.c,null)
B.kz=s([B.iC,B.hR,B.hW,B.hw,B.h0,B.ho,B.hE,B.hF,B.ih,B.hT,B.hd,B.j4,B.ag],t.e)
B.bM=new A.ab("Payslip",B.kz,10,"payslip")
B.ds=s([1],t.t)
B.cf=new A.dZ(0,"monthly")
B.cg=new A.dZ(1,"quarterly")
B.ch=new A.dZ(2,"halfYearly")
B.ci=new A.dZ(3,"yearly")
B.j5=s([B.cf,B.cg,B.ch,B.ci],A.a_("u<dZ>"))
B.aW=s([1,2],t.t)
B.dt=s([1,2,3],t.t)
B.du=s([1,2,3,4],t.t)
B.dv=s([1,3],t.t)
B.dw=s([1,3,4,5],t.t)
B.aX=s([2],t.t)
B.l=s(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.s)
B.dx=s([2,3],t.t)
B.aa=s([3],t.t)
B.dy=s([4],t.t)
B.dz=s([B.ct,B.cu,B.bh],A.a_("u<dk>"))
B.dA=s([4,5],t.t)
B.l8=new A.bZ(0,"cardTap")
B.l9=new A.bZ(1,"cardOnline")
B.la=new A.bZ(2,"payLah")
B.lb=new A.bZ(3,"payNow")
B.dX=new A.bZ(4,"giro")
B.lc=new A.bZ(5,"transfer")
B.ld=new A.bZ(6,"axs")
B.le=new A.bZ(7,"cash")
B.lf=new A.bZ(8,"other")
B.j9=s([B.l8,B.l9,B.la,B.lb,B.dX,B.lc,B.ld,B.le,B.lf],A.a_("u<bZ>"))
B.V=s(["January","February","March","April","May","June","July","August","September","October","November","December"],t.s)
B.dB=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.mD=new A.eM(0,"subscription")
B.mE=new A.eM(1,"domain")
B.mF=new A.eM(2,"certification")
B.jb=s([B.mD,B.mE,B.mF],A.a_("u<eM>"))
B.mj=new A.eE(0,"cashback")
B.mk=new A.eE(1,"miles")
B.ml=new A.eE(2,"points")
B.jc=s([B.mj,B.mk,B.ml],A.a_("u<eE>"))
B.jd=s([B.bf,B.be,B.bg],A.a_("u<ej>"))
B.fs=new A.cA(0,"pending")
B.ft=new A.cA(1,"parsed")
B.fu=new A.cA(2,"pendingReview")
B.fv=new A.cA(3,"verified")
B.fw=new A.cA(4,"rejected")
B.fx=new A.cA(5,"failed")
B.jf=s([B.fs,B.ft,B.fu,B.fv,B.fw,B.fx],A.a_("u<cA>"))
B.lw=new A.d5("a month",0,"monthly")
B.ly=new A.d5("a quarter",1,"quarterly")
B.lA=new A.d5("a half-year",2,"halfYearly")
B.lx=new A.d5("a year",3,"yearly")
B.lz=new A.d5("once",4,"single")
B.jh=s([B.lw,B.ly,B.lA,B.lx,B.lz],A.a_("u<d5>"))
B.ji=s(["gross","allowances","bonus","employeeCpf","employerCpf","otherDeductions","net"],t.s)
B.jj=s([B.bi,B.cv],A.a_("u<el>"))
B.e5=new A.p("SGD","SGD")
B.e6=new A.p("USD","USD")
B.lJ=new A.p("EUR","EUR")
B.lL=new A.p("GBP","GBP")
B.lH=new A.p("AUD","AUD")
B.e2=new A.p("INR","INR")
B.jk=s([B.e5,B.e6,B.lJ,B.lL,B.lH,B.e2],t.I)
B.bN=s([B.m,B.k],A.a_("u<cV>"))
B.f3=new A.dx(0,"identity")
B.f4=new A.dx(1,"helper")
B.jm=s([B.f3,B.f4],A.a_("u<dx>"))
B.jn=s(["green","blue","purple","rose","amber","teal"],t.s)
B.mx=new A.ft(0,"pdf")
B.my=new A.ft(1,"csv")
B.jo=s([B.mx,B.my],A.a_("u<ft>"))
B.b2=new A.dM(0,"personal")
B.bT=new A.dM(1,"home")
B.bU=new A.dM(2,"commercial")
B.bV=new A.dM(3,"other")
B.bO=s([B.b2,B.bT,B.bU,B.bV],A.a_("u<dM>"))
B.aY=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.K=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.jq=s(["missing-statement:","reminder:"],t.s)
B.m4=new A.p("standard","Standard-rated 9%")
B.lM=new A.p("zero-rated","Zero-rated")
B.js=s([B.m4,B.lM],t.I)
B.dC=s(["https://www.googleapis.com/auth/drive.file","openid","email"],t.s)
B.n=new A.bh(0,"expense")
B.w=new A.bh(1,"income")
B.M=new A.bh(2,"ownAccountTransfer")
B.X=new A.bh(3,"cardBillPayment")
B.H=new A.bh(6,"refundOrReversal")
B.jt=s([B.n,B.w,B.M,B.X,B.H],t.dQ)
B.en=new A.dl(0,"email")
B.eo=new A.dl(1,"sms")
B.ep=new A.dl(2,"push")
B.jw=s([B.en,B.eo,B.ep],A.a_("u<dl>"))
B.et=new A.em(0,"monthly")
B.eu=new A.em(1,"yearly")
B.ev=new A.em(2,"none")
B.jx=s([B.et,B.eu,B.ev],A.a_("u<em>"))
B.b4=new A.bh(4,"loanInstalment")
B.jz=s([B.n,B.M,B.X,B.b4],t.dQ)
B.aZ=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.jD=s(["TRANSFER TO OWN","OWN ACCOUNT","OWN A C"],t.s)
B.jH=s([B.e5,B.e2,B.e6],t.I)
B.D=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.fo=new A.dE(0,"sms")
B.fp=new A.dE(1,"email")
B.fq=new A.dE(2,"statement")
B.fr=new A.dE(3,"manual")
B.jJ=s([B.fo,B.fp,B.fq,B.fr],A.a_("u<dE>"))
B.mu=new A.c8("Bank alerts",0,"bank")
B.mt=new A.c8("Agency",1,"agency")
B.mv=new A.c8("Other",2,"other")
B.bP=s([B.mu,B.mt,B.mv],A.a_("u<c8>"))
B.eL=new A.cS(0,"full")
B.eM=new A.cS(1,"aboveThreshold")
B.eN=new A.cS(2,"pushOnly")
B.eO=new A.cS(3,"statementOnly")
B.eP=new A.cS(4,"unknown")
B.jK=s([B.eL,B.eM,B.eN,B.eO,B.eP],A.a_("u<cS>"))
B.b_=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.jL=s(["Document","For","Country","Number","Issued","Expires","File"],t.s)
B.dD=s([1,2,3,4,5],t.t)
B.mA=new A.eL(0,"email")
B.mB=new A.eL(1,"drive")
B.mC=new A.eL(2,"bankApp")
B.jN=s([B.mA,B.mB,B.mC],A.a_("u<eL>"))
B.b6=new A.eC(0,"income")
B.lj=new A.eC(1,"payment")
B.c_=new A.eC(2,"move")
B.jO=s([B.b6,B.lj,B.c_],A.a_("u<eC>"))
B.cj=new A.fu(0,"personalLoan")
B.mz=new A.fu(1,"instalmentPlan")
B.jP=s([B.cj,B.mz],A.a_("u<fu>"))
B.fl=new A.bY(0,"tdsDeducted")
B.fm=new A.bY(1,"homeLoanInterest")
B.fn=new A.bY(2,"homeLoanPrincipal")
B.jQ=s([B.fl,B.fm,B.fn,B.cT,B.cU],A.a_("u<bY>"))
B.lF=new A.p("\\b(DBS|POSB)\\b","DBS")
B.m6=new A.p("\\bUOB\\b|UNITED OVERSEAS","UOB")
B.ma=new A.p("\\bOCBC\\b","OCBC")
B.lN=new A.p("\\bICICI\\b","ICICI")
B.mb=new A.p("\\bAXIS\\b","Axis")
B.m_=new A.p("\\bCITI(BANK)?\\b","Citibank")
B.lD=new A.p("\\bAMEX\\b|AMERICAN EXPRESS","American Express")
B.lZ=new A.p("\\bHSBC\\b","HSBC")
B.jS=s([B.lF,B.m6,B.ma,B.lN,B.mb,B.m_,B.lD,B.lZ],t.I)
B.md=new A.co(0,"subscription")
B.me=new A.co(1,"commitment")
B.mf=new A.co(2,"notRecurring")
B.jT=s([B.md,B.me,B.mf],A.a_("u<co>"))
B.jU=s([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)
B.p=s([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3],t.t)
B.jW=s(["Policy","For","Number","Sum assured","Premium","Starts","Renews or ends"],t.s)
B.bQ=s([],t.Q)
B.jZ=s([],t.kd)
B.k2=s([],A.a_("u<dm>"))
B.dF=s([],t.F)
B.dH=s([],t.Z)
B.k_=s([],t.g)
B.ab=s([],t.A)
B.dG=s([],t.Y)
B.k1=s([],t.M)
B.k0=s([],t.bD)
B.A=s([],t.t)
B.b0=s([],t.zz)
B.dI=s([],t.q)
B.jY=s([],t.l7)
B.ba=new A.bu(0,"committed")
B.aE=new A.bu(1,"essential")
B.cc=new A.bu(2,"optional")
B.dJ=s([B.ba,B.aE,B.cc],A.a_("u<bu>"))
B.cm=new A.e3("All",0,"all")
B.mS=new A.e3("To file",1,"toFile")
B.mQ=new A.e3("From alerts, not posted",2,"pending")
B.mR=new A.e3("Filed",3,"filed")
B.dK=s([B.cm,B.mS,B.mQ,B.mR],A.a_("u<e3>"))
B.dL=s([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],t.t)
B.na=new A.cM(0,"property")
B.nb=new A.cM(1,"cpf")
B.nc=new A.cM(2,"retirement")
B.nd=new A.cM(3,"investment")
B.ne=new A.cM(4,"other")
B.co=new A.cM(5,"loan")
B.ka=s([B.na,B.nb,B.nc,B.nd,B.ne,B.co],A.a_("u<cM>"))
B.kc=s(["No such draft"],t.s)
B.mg=new A.cp(0,"open")
B.mh=new A.cp(1,"share")
B.mi=new A.cp(2,"number")
B.ke=s([B.mg,B.mh,B.mi],A.a_("u<cp>"))
B.kg=s(["No such tenancy"],t.s)
B.dM=s([B.N,B.Q,B.y,B.o,B.x,B.a7],A.a_("u<cd>"))
B.c0=new A.eD(0,"paid")
B.lk=new A.eD(1,"none")
B.e0=new A.eD(2,"clear")
B.kh=s([B.c0,B.lk,B.e0],A.a_("u<eD>"))
B.eb=new A.aR(0,"uncategorised")
B.ec=new A.aR(1,"unclassified")
B.aD=new A.aR(2,"unmatchedAlert")
B.v=new A.aR(3,"uncertainDuplicate")
B.ca=new A.aR(4,"inTransit")
B.b8=new A.aR(5,"statementTotalsMismatch")
B.I=new A.aR(6,"editConflict")
B.ae=new A.aR(7,"crossBookMismatch")
B.b9=new A.aR(8,"parseFailed")
B.f=new A.aR(9,"unknownOperation")
B.h=new A.aR(10,"malformedOperation")
B.c1=new A.aR(11,"rulesDisagree")
B.P=new A.aR(12,"uncertainPairing")
B.c2=new A.aR(13,"missingStatement")
B.c3=new A.aR(14,"suspiciousMessage")
B.c4=new A.aR(15,"paymentReminder")
B.c5=new A.aR(16,"suspectedUnauthorised")
B.c6=new A.aR(17,"historyStartFromFolder")
B.ad=new A.aR(18,"documentCheck")
B.c7=new A.aR(19,"invoiceToCheck")
B.c8=new A.aR(20,"paymentFailed")
B.c9=new A.aR(21,"loanOnStatement")
B.ki=s([B.eb,B.ec,B.aD,B.v,B.ca,B.b8,B.I,B.ae,B.b9,B.f,B.h,B.c1,B.P,B.c2,B.c3,B.c4,B.c5,B.c6,B.ad,B.c7,B.c8,B.c9],A.a_("u<aR>"))
B.b1=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cl=new A.e2("Newest first",0,"newest")
B.mO=new A.e2("Oldest first",1,"oldest")
B.mP=new A.e2("Largest first",2,"largest")
B.mN=new A.e2("Smallest first",3,"smallest")
B.dN=s([B.cl,B.mO,B.mP,B.mN],A.a_("u<e2>"))
B.kk=s([B.ai,B.ak,B.a6,B.aj],t.nB)
B.nG=s(["passport"],t.s)
B.eV=new A.bO("Passport",!0,0,"passport")
B.nu=s(["pr","visa","reentry","re-entry","permanent","resident"],t.s)
B.eW=new A.bO("PR visa",!0,1,"prVisa")
B.nE=s(["nric","ic","identity","card"],t.s)
B.eT=new A.bO("NRIC",!1,2,"nric")
B.nA=s(["fin","card"],t.s)
B.eY=new A.bO("FIN card",!0,3,"fin")
B.nz=s(["driving","licence","license","dl"],t.s)
B.eX=new A.bO("Driving licence",!0,5,"drivingLicence")
B.nw=s(["aadhaar","aadhar"],t.s)
B.eS=new A.bO("Aadhaar",!1,6,"aadhaar")
B.nF=s(["pan","card"],t.s)
B.eU=new A.bO("PAN",!1,7,"pan")
B.nx=s(["birth","certificate"],t.s)
B.eZ=new A.bO("Birth certificate",!1,8,"birthCertificate")
B.km=s([B.eV,B.eW,B.eT,B.eY,B.cJ,B.eX,B.eS,B.eU,B.eZ,B.bs],A.a_("u<bO>"))
B.kG=new A.d4(0,"alerts")
B.kH=new A.d4(1,"statements")
B.kI=new A.d4(2,"biller")
B.kJ=new A.d4(3,"agency")
B.kK=new A.d4(4,"owner")
B.kq=s([B.kG,B.kH,B.kI,B.kJ,B.kK],A.a_("u<d4>"))
B.an=new A.eJ(0,"folderYear")
B.cd=new A.eJ(1,"statement")
B.ce=new A.eJ(2,"owner")
B.ks=s([B.an,B.cd,B.ce],A.a_("u<eJ>"))
B.kt=s(["PAYMENT AT AXS","CARD PAYMENT","CC PAYMENT"],t.s)
B.ac=s([B.aA,B.at,B.dj,B.dg,B.dp,B.dq,B.dl,B.bJ,B.dk,B.aU,B.bM,B.dh,B.dm,B.aV,B.bL,B.dr,B.dn,B.di,B.aT,B.a9,B.aR,B.bK,B.ai,B.ak,B.ah,B.a4,B.a5,B.as,B.a6,B.aj,B.aS,B.bI],t.nB)
B.bR=s(["system","light","dark"],t.s)
B.kv=s(["REVERSAL","REV","REVERSED","REFUND","CASHBACK"],t.s)
B.kA=s(["INTEREST CHARGE","ANNUAL FEE","LATE FEE","SERVICE TAX"],t.s)
B.dU=new A.bh(5,"loanDisbursement")
B.bW=new A.bh(7,"reimbursementOrClaimCredit")
B.dV=new A.bh(8,"depositHeldOrOwed")
B.a0=new A.bh(9,"advance")
B.a_=new A.bh(10,"settlementOfAdvance")
B.b3=new A.bh(11,"liabilityHeld")
B.dT=new A.bh(12,"taxWithheld")
B.au=s([B.n,B.w,B.M,B.X,B.b4,B.dU,B.H,B.bW,B.dV,B.a0,B.a_,B.b3,B.dT],t.dQ)
B.kB=s([B.w,B.M,B.H,B.bW],t.dQ)
B.cr=new A.bd("Overview","","home",0,"overview")
B.el=new A.bd("Accounts","Money","bank",1,"accounts")
B.nl=new A.bd("Transactions","Money","list",2,"transactions")
B.cs=new A.bd("Loans & debt","Money","loan",3,"loans")
B.nj=new A.bd("Invoices","Money","receipt",4,"invoices")
B.nh=new A.bd("Spending","Planning","pie",5,"spending")
B.no=new A.bd("Budgets & goals","Planning","target",6,"budgets")
B.ni=new A.bd("Insights","Planning","chart",7,"insights")
B.em=new A.bd("Review queue","Tasks","inbox",8,"review")
B.nk=new A.bd("Filing rules","Tasks","filter",9,"rules")
B.nm=new A.bd("Life admin","Settings","heart",10,"life")
B.nn=new A.bd("Settings","Settings","gear",11,"setup")
B.dO=s([B.cr,B.el,B.nl,B.cs,B.nj,B.nh,B.no,B.ni,B.em,B.nk,B.nm,B.nn],A.a_("u<bd>"))
B.nv=s(["hospitalisation","hospitalization","shield","medical","health"],t.s)
B.ln=new A.bF("Hospitalisation",0,"hospitalisation")
B.nC=s(["medical","health"],t.s)
B.lo=new A.bF("Medical",1,"medical")
B.nK=s(["term","life"],t.s)
B.ll=new A.bF("Term life",2,"termLife")
B.nM=s(["whole","life"],t.s)
B.lt=new A.bF("Whole life",3,"wholeLife")
B.nI=s(["retirement","annuity"],t.s)
B.lr=new A.bF("Retirement",4,"retirement")
B.nH=s(["personal","accident","pa"],t.s)
B.lu=new A.bF("Personal accident",5,"personalAccident")
B.nL=s(["travel"],t.s)
B.ls=new A.bF("Travel",6,"travel")
B.nB=s(["home","house","fire"],t.s)
B.lm=new A.bF("Home",7,"home")
B.nD=s(["motor","car"],t.s)
B.lp=new A.bF("Motor",8,"motor")
B.lq=new A.bF("Other",9,"other")
B.nJ=s(["security","bond"],t.s)
B.lv=new A.bF("Security bond",10,"securityBond")
B.kD=s([B.ln,B.lo,B.ll,B.lt,B.lr,B.lu,B.ls,B.lm,B.lp,B.lq,B.lv],A.a_("u<bF>"))
B.kF=s([B.bx,B.by,B.cM,B.cN],A.a_("u<dA>"))
B.bS=new A.ha(null,null,null,null,null,null,null,null,null)
B.dP=new A.cl([B.N,"savings",B.Q,"current",B.y,"card",B.o,"loan",B.a7,"retirement"],t.ip)
B.l1={SG:0,IN:1,personal:2}
B.m0=new A.p("acra-annual-return","ACRA annual return")
B.lK=new A.p("eci","Estimated chargeable income (ECI)")
B.lU=new A.p("form-c","Form C-S or C")
B.lX=new A.p("cpf","Employee CPF")
B.lY=new A.p("ir8a","IR8A")
B.e7=new A.p("gst","GST, if registered")
B.kf=s([B.m0,B.lK,B.lU,B.lX,B.lY,B.e7],t.I)
B.lR=new A.p("roc","ROC filings")
B.lI=new A.p("itr","Income tax return (ITR)")
B.lC=new A.p("advance-tax","Advance tax")
B.m7=new A.p("tds","TDS")
B.m3=new A.p("pf-esi","PF and ESI, if applicable")
B.jB=s([B.lR,B.lI,B.lC,B.m7,B.e7,B.m3],t.I)
B.lP=new A.p("iras-opens","IRAS filing opens")
B.lW=new A.p("iras-due","IRAS filing due")
B.lO=new A.p("noa","Notice of assessment")
B.j6=s([B.lP,B.lW,B.lO],t.I)
B.kL=new A.aU(B.l1,[B.kf,B.jB,B.j6],A.a_("aU<e,y<+(e,e)>>"))
B.l0={SGD:0,INR:1,USD:2}
B.kM=new A.aU(B.l0,["S$","\u20b9","US$"],t.hD)
B.l3={home:0,bank:1,list:2,loan:3,receipt:4,pie:5,target:6,chart:7,inbox:8,filter:9,heart:10,gear:11,eye:12,"eye-off":13,sun:14,moon:15,monitor:16}
B.kN=new A.aU(B.l3,["M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10","M3 9l9-5 9 5M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18","M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1","M3 6h18v12H3zM3 10h18M7 15h4","M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6","M12 3a9 9 0 1 0 9 9h-9z M14 3.5A8 8 0 0 1 20.5 10H14z","M12 3a9 9 0 1 0 .01 0M12 7a5 5 0 1 0 .01 0M12 11a1 1 0 1 0 .01 0","M4 20V10M10 20V4M16 20v-7M22 20H2","M3 13l3-8h12l3 8v6H3zM3 13h5l1 2h6l1-2h5","M3 5h18l-7 8v6l-4-2v-4z","M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z","M12 9a3 3 0 1 0 .01 0M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2","M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0","M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3 3.6M6.6 6.6C3.8 8.4 2 12 2 12s4 7 10 7a10 10 0 0 0 4.4-1","M12 8a4 4 0 1 0 .01 0M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4","M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z","M3 4h18v12H3zM8 20h8M12 16v4"],t.hD)
B.kO=new A.cl([16,10,24,12,32,14],A.a_("cl<d,d>"))
B.kY={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}
B.kP=new A.aU(B.kY,[1,2,3,4,5,6,7,8,9,10,11,12],t.hq)
B.l2={SGD:0,INR:1,USD:2,EUR:3,GBP:4,AUD:5,MYR:6,JPY:7}
B.e=new A.aU(B.l2,[2,2,2,2,2,2,2,0],t.hq)
B.al={}
B.kR=new A.aU(B.al,[],A.a_("aU<e,i0>"))
B.kQ=new A.aU(B.al,[],A.a_("aU<e,eK>"))
B.dR=new A.aU(B.al,[],t.hD)
B.kT=new A.aU(B.al,[],A.a_("aU<e,a0?>"))
B.dQ=new A.aU(B.al,[],A.a_("aU<bu?,q>"))
B.kS=new A.aU(B.al,[],A.a_("aU<e?,q>"))
B.kU=new A.cl([B.N,"Savings",B.Q,"Current",B.y,"Credit card",B.o,"Loan",B.x,"Cash",B.a7,"Retirement"],t.ip)
B.aB=new A.cl([B.n,"Expense",B.w,"Income",B.M,"Own-account transfer",B.X,"Card bill payment",B.b4,"Loan instalment",B.dU,"Loan disbursement",B.H,"Refund or reversal",B.bW,"Reimbursement or claim credit",B.dV,"Deposit held or owed",B.a0,"Advance",B.a_,"Settlement of an advance",B.b3,"Liability held",B.dT,"Tax withheld"],A.a_("cl<bh,e>"))
B.kV=new A.cl([B.cV,"Scheduled",B.cW,"Due soon",B.cX,"Due today",B.cY,"Waiting",B.ay,"Paid",B.bA,"Part paid",B.bB,"Overdue",B.aN,"Confirmed by you"],A.a_("cl<cm,e>"))
B.kX={food:0,groceries:1,transport:2,utilities:3,kids:4,helper:5,"personal-care":6,"postage-and-courier":7,shopping:8,gifts:9,subscriptions:10,entertainment:11,travel:12,housing:13,property:14,insurance:15,medical:16,"income-tax":17,"bank-fees-and-charges":18,other:19,income:20,"cloud-and-hosting":21,"domains-and-email":22,"software-and-subscriptions":23,"corporate-tax":24,gst:25,"employer-cpf-and-sdl":26,"pf-and-esi":27,salaries:28,"accountant-and-corporate-secretary":29,"certifications-and-compliance":30,"government-and-filing-fees":31,"bank-fees":32,equipment:33,"loan-instalment":34,"loan-fees-and-charges":35,"property-tax":36,"plan-approvals-and-municipal-fees":37,"auditor-and-accountant-fees":38,"legal-and-documentation":39,"maintenance-and-repairs":40}
B.dS=new A.aU(B.kX,["amber","green","blue","teal","purple","rose","rose","blue","purple","rose","purple","amber","blue","teal","teal","blue","rose","amber","amber","teal","green","blue","blue","purple","amber","amber","teal","teal","purple","purple","rose","amber","amber","teal","blue","amber","amber","rose","purple","purple","teal"],t.hD)
B.bX=new A.eA(0,"signedOut")
B.bY=new A.eA(1,"signedIn")
B.bZ=new A.eA(2,"waiting")
B.av=new A.eA(3,"reading")
B.dW=new A.eA(4,"removed")
B.lg=new A.eB(0,"matched")
B.dY=new A.eB(1,"different")
B.dZ=new A.eB(2,"missing")
B.lh=new A.eB(3,"waiting")
B.li=new A.eB(4,"noAccount")
B.am=new A.iR(0,"pending")
B.e1=new A.iR(1,"posted")
B.lB=new A.p("","No")
B.lE=new A.p("Flag","You do not recognise this charge")
B.lG=new A.p("","Any")
B.e3=new A.p("","Category\u2026")
B.e4=new A.p("","None")
B.lQ=new A.p("","No account (saved not tracked)")
B.lS=new A.p(!1,"Read-only")
B.lT=new A.p(null,"the paying account is a savings or current account")
B.lV=new A.p("-","No category")
B.e8=new A.p("","Not set")
B.m1=new A.p("me","Me")
B.m2=new A.p("","All accounts")
B.m5=new A.p(null,"Enter only the last 4 digits. SanthIQ never stores a full card or account number.")
B.m8=new A.p(!0,"Editing")
B.m9=new A.p(1,0.25)
B.mc=new A.p("yes","Yes")
B.b7=new A.hj(0,"draft")
B.e9=new A.hj(1,"reconciled")
B.ea=new A.hj(2,"finalised")
B.l_={set:0,use:1,show:2,clear:3}
B.mm=new A.cx(B.l_,4,t.d)
B.ed=new A.cZ([B.ah,B.a4,B.a5,B.as,B.a6,B.aj],A.a_("cZ<ab>"))
B.l6={sms:0,email:1}
B.ee=new A.cx(B.l6,2,t.d)
B.l7={secretId:0,action:1,atUtc:2}
B.mn=new A.cx(B.l7,3,t.d)
B.l5={recordId:0,action:1,atUtc:2}
B.mo=new A.cx(B.l5,3,t.d)
B.cb=new A.cZ([B.j,B.a2,B.r,B.aM,B.aq,B.u,B.ax,B.J,B.O,B.ar,B.a3,B.af,B.C,B.Z,B.ap,B.aL,B.bw],A.a_("cZ<aL>"))
B.mp=new A.cx(B.al,0,t.d)
B.l4={bank:0,loan:1,loans:2,card:3,savings:4,account:5,the:6,and:7,ltd:8,limited:9,berhad:10}
B.mq=new A.cx(B.l4,11,t.d)
B.kZ={company:0,prop:1,owner:2}
B.mr=new A.cx(B.kZ,3,t.d)
B.ef=new A.cZ([B.bj,B.bk,B.aF],t.pA)
B.ms=new A.cZ([B.bj,B.bk,B.aF,B.bl,B.bn],t.pA)
B.mw=new A.ho(B.ce,null,null,null)
B.eg=new A.fw(0,"waiting")
B.ck=new A.fw(1,"approved")
B.eh=new A.fw(2,"removed")
B.mG=new A.e0(0,"join")
B.mH=new A.e0(1,"grant")
B.mI=new A.e0(2,"roster")
B.mJ=new A.e0(3,"segment")
B.mK=new A.e0(4,"submission")
B.mL=new A.e0(5,"secret")
B.mM=new A.cr("personal",null,null,null,"",B.cm,null,B.cl,0)
B.mT=A.bC("f1")
B.mU=A.bC("i_")
B.mV=A.bC("i1")
B.mW=A.bC("DF")
B.mX=A.bC("II")
B.mY=A.bC("IJ")
B.ei=A.bC("eq")
B.mZ=A.bC("IN")
B.n_=A.bC("kL")
B.n0=A.bC("IO")
B.n1=A.bC("a0")
B.n2=A.bC("bq")
B.n3=A.bC("eG")
B.n4=A.bC("d7")
B.n5=A.bC("Cp")
B.n6=A.bC("us")
B.n7=A.bC("Jz")
B.ej=A.bC("e6")
B.n8=new A.j7(!1)
B.n9=new A.j7(!0)
B.nf=new A.hu(0,"reconciled")
B.ng=new A.hu(1,"recorded")
B.cp=new A.hu(2,"stated")
B.bb=new A.bS(0,"certain")
B.cq=new A.bS(1,"uncertain")
B.bc=new A.hA(1,"floor")
B.ek=new A.hA(2,"ceil")
B.bd=new A.hA(3,"halfUp")})();(function staticFields(){$.v3=null
$.ca=A.b([],A.a_("u<a0>"))
$.Ee=null
$.DC=null
$.DB=null
$.FW=null
$.FG=null
$.Gv=null
$.yi=null
$.zj=null
$.CY=null
$.v9=A.b([],A.a_("u<y<a0>?>"))
$.hE=null
$.jF=null
$.jG=null
$.CH=!1
$.ak=B.W
$.EH=null
$.EI=null
$.EJ=null
$.EK=null
$.Cq=A.uN("_lastQuoRemDigits")
$.Cr=A.uN("_lastQuoRemUsed")
$.ja=A.uN("_lastRemUsed")
$.Cs=A.uN("_lastRem_nsh")
$.tY=A.w(t.N,A.a_("tQ"))
$.vI=function(){var s=t.N
return A.w(s,s)}()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Od","GJ",()=>A.z3("_$dart_dartClosure"))
s($,"Oc","Db",()=>A.z3("_$dart_dartClosure_dartJSInterop"))
s($,"P8","jP",()=>A.pf(0))
s($,"Q0","I_",()=>A.b([new J.kO()],A.a_("u<iV>")))
s($,"OP","H7",()=>A.e5(A.ur({
toString:function(){return"$receiver$"}})))
s($,"OQ","H8",()=>A.e5(A.ur({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"OR","H9",()=>A.e5(A.ur(null)))
s($,"OS","Ha",()=>A.e5(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"OV","Hd",()=>A.e5(A.ur(void 0)))
s($,"OW","He",()=>A.e5(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"OU","Hc",()=>A.e5(A.Ez(null)))
s($,"OT","Hb",()=>A.e5(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"OY","Hg",()=>A.e5(A.Ez(void 0)))
s($,"OX","Hf",()=>A.e5(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"OZ","Dh",()=>A.JD())
s($,"Pd","Hp",()=>A.pf(4096))
s($,"Pb","Hn",()=>new A.vk().$0())
s($,"Pc","Ho",()=>new A.vj().$0())
s($,"P0","Hi",()=>A.J3(A.aK(A.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"P_","Hh",()=>A.pf(0))
s($,"P7","bn",()=>A.hw(0))
s($,"P5","bL",()=>A.hw(1))
s($,"P6","BR",()=>A.hw(2))
s($,"P3","Dj",()=>$.bL().S(0))
s($,"P1","Di",()=>A.hw(1e4))
r($,"P4","Hk",()=>A.D("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"P2","Hj",()=>A.pf(8))
s($,"P9","Hl",()=>A.D("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Pa","Hm",()=>typeof URLSearchParams=="function")
s($,"Oh","GN",()=>A.D("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:[.,](\\d+))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1))
s($,"Ps","mP",()=>A.D5(B.n1))
s($,"Os","jO",()=>{var q=new A.mc(A.J1(8))
q.iA()
return q})
s($,"Om","f_",()=>A.Iu(B.kW.gab(A.J4(A.aK(A.b([1],t.t)))),0,null).getInt8(0)===1?B.a1:B.aw)
s($,"PR","HR",()=>A.J6(A.b([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],t.t)))
s($,"Pj","Hu",()=>A.aC(255))
s($,"Qc","ei",()=>A.CT(A.Fj(A.GB(),"crypto"),"subtle",t.K)!=null&&A.IT(A.CT(A.Fj(A.GB(),"window"),"isSecureContext",t.y)))
s($,"O7","GH",()=>A.Ir()?new A.n4(null):A.IB(null))
s($,"O8","BO",()=>({name:A.Cn("Ed25519")}))
s($,"O9","BP",()=>({name:A.Cn("X25519")}))
s($,"Ob","GI",()=>$.GH())
r($,"Oa","b7",()=>$.GI())
s($,"OG","H_",()=>$.H0())
s($,"OH","H0",()=>A.Jh())
s($,"Oe","GK",()=>A.J5(256))
s($,"PM","HM",()=>A.aC(65535))
s($,"Ol","BQ",()=>new A.nH().$0())
s($,"OE","GZ",()=>{var q=A.fq(null),p=q.a
p.$flags&2&&A.C(p)
if(0>=p.length)return A.a(p,0)
p[0]=0
return q})
s($,"OC","Df",()=>{var q=A.fq(null),p=q.a
p.$flags&2&&A.C(p)
if(0>=p.length)return A.a(p,0)
p[0]=1
return q})
s($,"OD","GY",()=>{var q=A.fq(null),p=q.a
p.$flags&2&&A.C(p)
if(0>=p.length)return A.a(p,0)
p[0]=2
return q})
s($,"OA","GW",()=>{var q=A.fq(null)
q.hz("19681161376707505956807079304988542015446066515923890162744021073123829784752")
return q})
s($,"Ow","Dd",()=>{var q=A.fq(null)
q.hz("37095705934669439343138083508754565189542113879843219016388785533085940283555")
return q})
s($,"Oz","GV",()=>{var q,p=A.fq(null),o=p.a
o.$flags&2&&A.C(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65534
B.b5.aO(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=4095
return p})
s($,"Ox","mO",()=>{var q,p=A.fq(null),o=p.a
o.$flags&2&&A.C(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65517
B.b5.aO(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=32767
return p})
s($,"Oy","De",()=>{var q,p=A.fq(null),o=p.a
B.b5.b1(o,0,$.mO().a)
if(0>=o.length)return A.a(o,0)
q=o[0]
o.$flags&2&&A.C(o)
o[0]=q-2
return p})
s($,"OB","GX",()=>$.BR().aV(255).aa(0,A.aC(19)))
s($,"OF","Dg",()=>A.Io("7237005577332262213973186563042994240857116359379907606001950938285454250989"))
s($,"Og","GM",()=>new A.ny().$0())
s($,"Of","GL",()=>new A.nx().$0())
s($,"Q3","I2",()=>{A.J8(B.A)
return B.ej})
s($,"Pu","Dm",()=>$.bn())
s($,"Pw","jQ",()=>$.bL())
s($,"Pz","Dn",()=>$.BR())
s($,"PA","HC",()=>A.aC(5))
s($,"Px","cR",()=>A.aC(10))
s($,"PX","Dq",()=>A.tJ(10))
s($,"Oi","GO",()=>A.D("^([+-]?\\d*)(?:\\.(\\d*))?(?:[eE]([+-]?\\d+))?$",!0,!1))
s($,"Ok","L",()=>A.C1(0))
s($,"Oj","GP",()=>A.C1(1))
s($,"PW","HW",()=>$.GT())
s($,"PZ","HY",()=>A.tJ(5))
s($,"PY","HX",()=>A.tJ(10))
s($,"Pv","hS",()=>$.bn())
s($,"Py","hT",()=>$.bL())
s($,"Ot","GT",()=>A.tJ(0))
s($,"PN","HN",()=>A.D("^[A-Z][A-Z0-9]*(-[A-Z0-9]+)*-[0-9]{4}$",!0,!1))
s($,"Pk","Hv",()=>A.D("^CASH-[A-Z]{3}$",!0,!1))
s($,"Pl","f0",()=>A.D("\\p{Nd}",!0,!0))
s($,"PL","HL",()=>A.D("\\d{9,}",!0,!1))
s($,"PC","HE",()=>A.D("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"PO","HO",()=>A.D("^\\d{9}$",!0,!1))
s($,"PU","HU",()=>A.D("^[0-9X]{4,20}$",!0,!1))
s($,"PB","HD",()=>A.b([A.D("\\b[A-Z]\\d{7}[A-Z]\\b",!0,!1),A.D("\\b[A-Z]{5}\\d{4}[A-Z]\\b",!0,!1),A.D("\\b[A-Z]\\d{7,8}(?!\\d)",!0,!1)],A.a_("u<tQ>")))
s($,"Pm","Hw",()=>A.D("\\d(?:[\\s.\\-\\u001F]*\\d)*",!0,!1))
s($,"Q_","HZ",()=>A.D("(?<!\\d)\\d{4}-\\d{2}-\\d{2}(?!\\d)|(?<![\\d.])\\d{1,2}([./-])\\d{1,2}\\1\\d{4}(?!\\d)|(?<!\\d)\\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec),? \\d{4}(?!\\d)|(?<![\\d.])\\d{1,9}\\.\\d{1,2}(?![\\d]|\\.\\d)|(?:S\\$|SGD|INR|Rs\\.?|\\$|\u20b9) ?\\d{1,8}(?!\\d|[\\s.\\-\\u001F]+\\d)",!0,!1))
s($,"PE","HG",()=>A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"PQ","HQ",()=>A.D("^(\\d{4})-(\\d{2})$",!0,!1))
s($,"PS","HS",()=>A.D("[^A-Z0-9]+",!0,!1))
s($,"Ov","GU",()=>A.D("^[0-9a-f]{64}$",!0,!1))
s($,"Pf","Hr",()=>A.Dz())
s($,"Q4","I3",()=>B.F.O("santhiq/master/v1"))
s($,"Oo","GR",()=>new A.kx(new WeakMap(),A.a_("kx<+(d,d,d,d)>")))
s($,"Op","Dc",()=>A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"Oq","GS",()=>A.D("^\\d{4}$",!0,!1))
s($,"PK","Dp",()=>A.D("\\d{9,}",!0,!1))
s($,"PD","Do",()=>A.D("INSTALM\\s+(\\d{1,3})/(\\d{1,3})",!0,!1))
s($,"Pe","Hq",()=>A.D("^[^@\\s]+@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"Pp","Hz",()=>A.D("^@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"PF","HF",()=>A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Q9","I7",()=>A.D("^event-[a-p]{32}$",!0,!1))
s($,"Q2","I1",()=>A.D("^([01]\\d|2[0-3]):[0-5]\\d$",!0,!1))
s($,"PP","HP",()=>A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"PI","HJ",()=>A.D("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Qb","I8",()=>A.D("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"Pr","HA",()=>A.D("^\\d{2}/\\d{2}$",!0,!1))
s($,"PJ","HK",()=>A.D("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Q7","I6",()=>A.C1(10))
s($,"Qa","Dr",()=>A.D("\\{(?:fy|yy[/-]yy|yyyy[/-]yy|yyyy[/-]yyyy)\\}",!0,!1))
s($,"Q1","I0",()=>A.D("\\s+",!0,!1))
s($,"PT","HT",()=>A.D("^\\+?[0-9]{3,15}$",!0,!1))
s($,"Ph","Hs",()=>A.D("^[A-Z0-9][A-Z0-9 ._&-]{0,14}$",!0,!1))
s($,"Pn","Hx",()=>A.D("^[A-Z]{2}-(?=[A-Z0-9]{3})",!0,!1))
s($,"Po","Hy",()=>A.D("(?<=[A-Z0-9]{3})-[A-Z]$",!0,!1))
s($,"Pg","Dk",()=>A.Dz())
s($,"Pq","Dl",()=>A.IF())
s($,"Q5","I4",()=>A.EC())
s($,"Pt","HB",()=>A.IL(A.IM(),32))
s($,"Q6","I5",()=>A.EC())
s($,"OJ","H1",()=>A.D("^e-[0-9a-f]{16}\\.sqe$",!0,!1))
s($,"OK","H2",()=>A.D("^g-(dev[0-9a-f]{16})-(\\d{6})\\.sqg$",!0,!1))
s($,"OL","H3",()=>A.D("^r-(\\d{8})\\.sqr$",!0,!1))
s($,"ON","H5",()=>A.D("^s-(\\d{4})-(\\d{10})-(\\d{10})\\.sqs$",!0,!1))
s($,"OO","H6",()=>A.D("^o-(dev[0-9a-f]{16})-(\\d{10})\\.sqo$",!0,!1))
s($,"OM","H4",()=>A.D("^x-(dev[0-9a-f]{16})-(\\d{10})\\.sqx$",!0,!1))
s($,"PV","HV",()=>A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"PG","HH",()=>A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"On","GQ",()=>A.C5(A.S(["name",A.Cn("AES-GCM"),"length",A.J9(256)],t.N,t.K)))
s($,"PH","HI",()=>A.D("\\b(\\d{4})-(\\d{2})-(\\d{2})\\b",!0,!1))
s($,"Pi","Ht",()=>A.D("(?:SGD|INR|USD|S\\$|\u20b9|US\\$)\\s?-?[\\d,]+(?:\\.\\d+)?",!0,!1))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ex,ArrayBuffer:A.he,ArrayBufferView:A.iE,DataView:A.iC,Float32Array:A.l0,Float64Array:A.l1,Int16Array:A.l2,Int32Array:A.iD,Int8Array:A.l3,Uint16Array:A.iF,Uint32Array:A.iG,Uint8ClampedArray:A.iH,CanvasPixelArray:A.iH,Uint8Array:A.fl})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bx.$nativeSuperclassTag="ArrayBufferView"
A.jg.$nativeSuperclassTag="ArrayBufferView"
A.jh.$nativeSuperclassTag="ArrayBufferView"
A.ey.$nativeSuperclassTag="ArrayBufferView"
A.ji.$nativeSuperclassTag="ArrayBufferView"
A.jj.$nativeSuperclassTag="ArrayBufferView"
A.c5.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jK
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()