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
if(a[b]!==s){A.NT(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.CI(b)
return new s(c,this)}:function(){if(s===null)s=A.CI(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.CI(a).prototype
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
CV(a,b,c,d){return{i:a,p:b,e:c,x:d}},
yZ(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.CR==null){A.MK()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.k(A.j3("Return interceptor for "+A.i(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.uY
if(o==null)o=$.uY=A.yY(n)
p=q[o]}if(p!=null)return p
p=A.MX(a)
if(p!=null)return p
if(typeof a=="function")return B.fz
s=Object.getPrototypeOf(a)
if(s==null)return B.dZ
if(s===Object.prototype)return B.dZ
if(typeof q=="function"){o=$.uY
if(o==null)o=$.uY=A.yY(n)
Object.defineProperty(q,o,{value:B.cm,enumerable:false,writable:true,configurable:true})
return B.cm}return B.cm},
DS(a,b){if(a<0||a>4294967295)throw A.k(A.aL(a,0,4294967295,"length",null))
return J.IJ(new Array(a),b)},
DT(a,b){if(a<0)throw A.k(A.b1("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
DR(a,b){if(a<0)throw A.k(A.b1("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("u<0>"))},
IJ(a,b){var s=A.c(a,b.i("u<0>"))
s.$flags=1
return s},
IK(a,b){var s=t.hO
return J.BM(s.a(a),s.a(b))},
DU(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
IM(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.DU(r))break;++b}return b},
IN(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.DU(q))break}return b},
eU(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.io.prototype
return J.kQ.prototype}if(typeof a=="string")return J.dH.prototype
if(a==null)return J.h2.prototype
if(typeof a=="boolean")return J.kP.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.h4.prototype
if(typeof a=="bigint")return J.h3.prototype
return a}if(a instanceof A.a0)return a
return J.yZ(a)},
an(a){if(typeof a=="string")return J.dH.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.h4.prototype
if(typeof a=="bigint")return J.h3.prototype
return a}if(a instanceof A.a0)return a
return J.yZ(a)},
aX(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.h4.prototype
if(typeof a=="bigint")return J.h3.prototype
return a}if(a instanceof A.a0)return a
return J.yZ(a)},
MD(a){if(typeof a=="number")return J.fe.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.eL.prototype
return a},
FM(a){if(typeof a=="number")return J.fe.prototype
if(typeof a=="string")return J.dH.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.eL.prototype
return a},
CL(a){if(typeof a=="string")return J.dH.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.eL.prototype
return a},
hI(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dI.prototype
if(typeof a=="symbol")return J.h4.prototype
if(typeof a=="bigint")return J.h3.prototype
return a}if(a instanceof A.a0)return a
return J.yZ(a)},
I1(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.FM(a).B(a,b)},
Y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eU(a).J(a,b)},
I2(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.MD(a).a9(a,b)},
ar(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.MS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.an(a).h(a,b)},
Dk(a,b,c){return J.aX(a).j(a,b,c)},
bU(a,b){return J.aX(a).m(a,b)},
Dl(a,b){return J.CL(a).aM(a,b)},
I3(a,b,c){return J.CL(a).d7(a,b,c)},
Dm(a,b){return J.aX(a).M(a,b)},
jQ(a){return J.hI(a).h3(a)},
jR(a,b,c){return J.hI(a).dP(a,b,c)},
mQ(a,b,c){return J.hI(a).eQ(a,b,c)},
I4(a){return J.hI(a).h4(a)},
bq(a,b,c){return J.hI(a).cD(a,b,c)},
dh(a,b){return J.aX(a).dR(a,b)},
BM(a,b){return J.FM(a).l(a,b)},
Dn(a,b){return J.an(a).u(a,b)},
jS(a,b){return J.aX(a).ag(a,b)},
I5(a,b,c,d){return J.aX(a).aO(a,b,c,d)},
I6(a,b,c,d){return J.aX(a).a5(a,b,c,d)},
BN(a){return J.aX(a).ga0(a)},
c_(a){return J.eU(a).gP(a)},
jT(a){return J.an(a).ga4(a)},
Do(a){return J.an(a).gap(a)},
Q(a){return J.aX(a).gA(a)},
BO(a){return J.aX(a).gaq(a)},
aD(a){return J.an(a).gq(a)},
I7(a){return J.eU(a).gaz(a)},
I8(a,b,c){return J.aX(a).dt(a,b,c)},
Dp(a,b,c){return J.aX(a).cN(a,b,c)},
I9(a,b,c){return J.CL(a).hp(a,b,c)},
Ia(a,b){return J.an(a).sq(a,b)},
Dq(a,b,c){return J.aX(a).b0(a,b,c)},
Ib(a,b,c,d,e){return J.aX(a).aJ(a,b,c,d,e)},
hT(a,b){return J.aX(a).b9(a,b)},
mR(a,b){return J.aX(a).D(a,b)},
BP(a,b,c){return J.aX(a).aK(a,b,c)},
mS(a,b){return J.aX(a).bg(a,b)},
Ic(a){return J.aX(a).hI(a)},
Id(a){return J.aX(a).ea(a)},
hU(a){return J.eU(a).k(a)},
mT(a,b){return J.aX(a).bN(a,b)},
kN:function kN(){},
kP:function kP(){},
h2:function h2(){},
ip:function ip(){},
es:function es(){},
lf:function lf(){},
eL:function eL(){},
dI:function dI(){},
h3:function h3(){},
h4:function h4(){},
u:function u(a){this.$ti=a},
kO:function kO(){},
o2:function o2(a){this.$ti=a},
f0:function f0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fe:function fe(){},
io:function io(){},
kQ:function kQ(){},
dH:function dH(){}},A={C3:function C3(){},
fO(a,b,c){if(t.he.b(a))return new A.jc(a,b.i("@<0>").a3(c).i("jc<1,2>"))
return new A.f3(a,b.i("@<0>").a3(c).i("f3<1,2>"))},
DY(a){return new A.fj("Field '"+a+"' has been assigned during initialization.")},
DZ(a){return new A.fj("Field '"+a+"' has not been initialized.")},
IP(a){return new A.fj("Field '"+a+"' has already been initialized.")},
FR(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
e_(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
uf(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cO(a,b,c){return a},
CS(a){var s,r
for(s=$.c9.length,r=0;r<s;++r)if(a===$.c9[r])return!0
return!1},
by(a,b,c,d){A.ba(b,"start")
if(c!=null){A.ba(c,"end")
if(b>c)A.f(A.aL(b,0,c,"start",null))}return new A.fu(a,b,c,d.i("fu<0>"))},
E3(a,b,c,d){if(t.he.b(a))return new A.id(a,b,c.i("@<0>").a3(d).i("id<1,2>"))
return new A.c3(a,b,c.i("@<0>").a3(d).i("c3<1,2>"))},
Eo(a,b,c){var s="takeCount"
A.ei(b,s,t.S)
A.ba(b,s)
if(t.he.b(a))return new A.ie(a,b,c.i("ie<0>"))
return new A.fw(a,b,c.i("fw<0>"))},
Ek(a,b,c){var s="count"
if(t.he.b(a)){A.ei(b,s,t.S)
A.ba(b,s)
return new A.fZ(a,b,c.i("fZ<0>"))}A.ei(b,s,t.S)
A.ba(b,s)
return new A.dU(a,b,c.i("dU<0>"))},
bO(a,b,c){return new A.f7(a,b,c.i("f7<0>"))},
ak(){return new A.dW("No element")},
DQ(){return new A.dW("Too many elements")},
DP(){return new A.dW("Too few elements")},
lx(a,b,c,d,e){if(c-b<=32)A.Ji(a,b,c,d,e)
else A.Jh(a,b,c,d,e)},
Ji(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.an(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.b7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
Jh(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.C(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.C(a4+a5,2),f=g-j,e=g+j,d=J.an(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
jb:function jb(a){this.a=0
this.b=a},
hw:function hw(a){this.a=0
this.b=a},
eM:function eM(){},
i1:function i1(a,b){this.a=a
this.$ti=b},
f3:function f3(a,b){this.a=a
this.$ti=b},
jc:function jc(a,b){this.a=a
this.$ti=b},
ja:function ja(){},
uF:function uF(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.$ti=b},
f4:function f4(a,b){this.a=a
this.$ti=b},
nh:function nh(a,b){this.a=a
this.b=b},
ng:function ng(a){this.a=a},
fj:function fj(a){this.a=a},
kd:function kd(a){this.a=a},
tY:function tY(){},
T:function T(){},
a4:function a4(){},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
id:function id(a,b,c){this.a=a
this.b=b
this.$ti=c},
iz:function iz(a,b,c){var _=this
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
f8:function f8(a,b,c){this.a=a
this.b=b
this.$ti=c},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fw:function fw(a,b,c){this.a=a
this.b=b
this.$ti=c},
ie:function ie(a,b,c){this.a=a
this.b=b
this.$ti=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.$ti=c},
dU:function dU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iY:function iY(a,b,c){this.a=a
this.b=b
this.$ti=c},
ig:function ig(a){this.$ti=a},
ih:function ih(a){this.$ti=a},
j7:function j7(a,b){this.a=a
this.$ti=b},
j8:function j8(a,b){this.a=a
this.$ti=b},
pg:function pg(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b){this.a=a
this.b=null
this.$ti=b},
dC:function dC(a,b,c){this.a=a
this.b=b
this.$ti=c},
f7:function f7(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.$ti=c},
aU:function aU(){},
cs:function cs(){},
hr:function hr(){},
aP:function aP(a,b){this.a=a
this.$ti=b},
jC:function jC(){},
a5(a,b,c){var s,r,q,p,o,n,m,l=A.d1(a.gah(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.l)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.d1(a.gT(),!0,c)
m=new A.b_(q,n,b.i("@<0>").a3(c).i("b_<1,2>"))
m.$keys=l
return m}return new A.i2(A.IS(a,b,c),b.i("@<0>").a3(c).i("i2<1,2>"))},
DB(){throw A.k(A.aA("Cannot modify unmodifiable Map"))},
DC(){throw A.k(A.aA("Cannot modify constant Set"))},
Gx(a){var s=A.Gw(a)
if(s!=null)return s
return"minified:"+a},
MS(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.hU(a)
return s},
c6(a){var s,r=$.E6
if(r==null)r=$.E6=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
li(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.a(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.k(A.aL(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
lh(a){var s,r,q,p
if(a instanceof A.a0)return A.bS(A.aT(a),null)
s=J.eU(a)
if(s===B.fw||s===B.fA||t.qF.b(a)){r=B.cD(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bS(A.aT(a),null)},
E9(a){var s,r,q
if(a==null||typeof a=="number"||A.ed(a))return J.hU(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bL)return a.k(0)
if(a instanceof A.bj)return a.fZ(!0)
s=$.HS()
for(r=0;r<1;++r){q=s[r].n_(a)
if(q!=null)return q}return"Instance of '"+A.lh(a)+"'"},
E5(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
J6(a){var s,r,q,p=A.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r){q=a[r]
if(!A.cu(q))throw A.k(A.eT(q))
if(q<=65535)B.a.m(p,q)
else if(q<=1114111){B.a.m(p,55296+(B.d.an(q-65536,10)&1023))
B.a.m(p,56320+(q&1023))}else throw A.k(A.eT(q))}return A.E5(p)},
Ea(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.cu(q))throw A.k(A.eT(q))
if(q<0)throw A.k(A.eT(q))
if(q>65535)return A.J6(a)}return A.E5(a)},
J7(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aW(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.an(s,10)|55296)>>>0,s&1023|56320)}}throw A.k(A.aL(a,0,1114111,null,null))},
Ec(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.d.R(h,1000)
g+=B.d.C(h-s,1000)
r=i?Date.UTC(a,p,c,d,e,f,g):new Date(a,p,c,d,e,f,g).valueOf()
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
c5(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
b0(a){return a.c?A.c5(a).getUTCFullYear()+0:A.c5(a).getFullYear()+0},
b4(a){return a.c?A.c5(a).getUTCMonth()+1:A.c5(a).getMonth()+1},
au(a){return a.c?A.c5(a).getUTCDate()+0:A.c5(a).getDate()+0},
Cb(a){return a.c?A.c5(a).getUTCHours()+0:A.c5(a).getHours()+0},
Cc(a){return a.c?A.c5(a).getUTCMinutes()+0:A.c5(a).getMinutes()+0},
E8(a){return a.c?A.c5(a).getUTCSeconds()+0:A.c5(a).getSeconds()+0},
E7(a){return a.c?A.c5(a).getUTCMilliseconds()+0:A.c5(a).getMilliseconds()+0},
J5(a){var s=a.$thrownJsError
if(s==null)return null
return A.eV(s)},
Eb(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.b3(a,s)
a.$thrownJsError=s
s.stack=b.k(0)}},
CQ(a){throw A.k(A.eT(a))},
a(a,b){if(a==null)J.aD(a)
throw A.k(A.ya(a,b))},
ya(a,b){var s,r="index"
if(!A.cu(b))return new A.ce(!0,b,r,null)
s=J.aD(a)
if(b<0||b>=s)return A.nV(b,s,a,r)
return A.tB(b,r)},
Mr(a,b,c){if(a>c)return A.aL(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aL(b,a,c,"end",null)
return new A.ce(!0,b,"end",null)},
eT(a){return new A.ce(!0,a,null,null)},
k(a){return A.b3(a,new Error())},
b3(a,b){var s
if(a==null)a=new A.e2()
b.dartException=a
s=A.NV
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
NV(){return J.hU(this.dartException)},
f(a,b){throw A.b3(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.f(A.Ky(a,b,c),s)},
Ky(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.j5("'"+s+"': Cannot "+o+" "+l+k+n)},
l(a){throw A.k(A.aH(a))},
e3(a){var s,r,q,p,o,n
a=A.hN(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.uk(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ul(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Er(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
C4(a,b){var s=b==null,r=s?null:b.method
return new A.kR(a,r,s?null:b.receiver)},
av(a){var s
if(a==null)return new A.pi(a)
if(a instanceof A.ii){s=a.a
return A.eX(a,s==null?A.df(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.eX(a,a.dartException)
return A.Lt(a)},
eX(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Lt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.an(r,16)&8191)===10)switch(q){case 438:return A.eX(a,A.C4(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.eX(a,new A.iL())}}if(a instanceof TypeError){p=$.H_()
o=$.H0()
n=$.H1()
m=$.H2()
l=$.H5()
k=$.H6()
j=$.H4()
$.H3()
i=$.H8()
h=$.H7()
g=p.bw(s)
if(g!=null)return A.eX(a,A.C4(A.b(s),g))
else{g=o.bw(s)
if(g!=null){g.method="call"
return A.eX(a,A.C4(A.b(s),g))}else if(n.bw(s)!=null||m.bw(s)!=null||l.bw(s)!=null||k.bw(s)!=null||j.bw(s)!=null||m.bw(s)!=null||i.bw(s)!=null||h.bw(s)!=null){A.b(s)
return A.eX(a,new A.iL())}}return A.eX(a,new A.lK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.j_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eX(a,new A.ce(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.j_()
return a},
eV(a){var s
if(a instanceof A.ii)return a.b
if(a==null)return new A.jq(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jq(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
CZ(a){if(a==null)return J.c_(a)
if(typeof a=="object")return A.c6(a)
return J.c_(a)},
Md(a){if(typeof a=="number")return B.O.gP(a)
if(a instanceof A.ms)return A.c6(a)
if(a instanceof A.bj)return a.gP(a)
return A.CZ(a)},
FL(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
My(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
KR(a,b,c,d,e,f){t.BO.a(a)
switch(A.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.k(new A.uJ("Unsupported number of arguments for wrapped closure"))},
fH(a,b){var s=a.$identity
if(!!s)return s
s=A.Mf(a,b)
a.$identity=s
return s},
Mf(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.KR)},
Is(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lC().constructor.prototype):Object.create(new A.fM(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Dy(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Io(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Dy(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Io(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.k("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ih)}throw A.k("Error in functionType of tearoff")},
Ip(a,b,c,d){var s=A.Dv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Dy(a,b,c,d){if(c)return A.Ir(a,b,d)
return A.Ip(b.length,d,a,b)},
Iq(a,b,c,d){var s=A.Dv,r=A.Ii
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
Ir(a,b,c){var s,r
if($.Dt==null)$.Dt=A.Ds("interceptor")
if($.Du==null)$.Du=A.Ds("receiver")
s=b.length
r=A.Iq(s,c,a,b)
return r},
CI(a){return A.Is(a)},
Ih(a,b){return A.jv(v.typeUniverse,A.aT(a.a),b)},
Dv(a){return a.a},
Ii(a){return a.b},
Ds(a){var s,r,q,p=new A.fM("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.k(A.b1("Field name "+a+" not found.",null))},
yY(a){return v.getIsolateTag(a)},
Gs(){return v.G},
Q0(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
MX(a){var s,r,q,p,o,n=A.b($.FN.$1(a)),m=$.yc[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.zd[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.m($.Fy.$2(a,n))
if(q!=null){m=$.yc[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.zd[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.zr(s)
$.yc[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.zd[n]=s
return s}if(p==="-"){o=A.zr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Gk(a,s)
if(p==="*")throw A.k(A.j3(n))
if(v.leafTags[n]===true){o=A.zr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Gk(a,s)},
Gk(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.CV(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
zr(a){return J.CV(a,!1,null,!!a.$ic2)},
MY(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.zr(s)
else return J.CV(s,c,null,null)},
MK(){if(!0===$.CR)return
$.CR=!0
A.ML()},
ML(){var s,r,q,p,o,n,m,l
$.yc=Object.create(null)
$.zd=Object.create(null)
A.MJ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Gm.$1(o)
if(n!=null){m=A.MY(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
MJ(){var s,r,q,p,o,n,m=B.ex()
m=A.hF(B.ey,A.hF(B.ez,A.hF(B.cE,A.hF(B.cE,A.hF(B.eA,A.hF(B.eB,A.hF(B.eC(B.cD),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.FN=new A.za(p)
$.Fy=new A.zb(o)
$.Gm=new A.zc(n)},
hF(a,b){return a(b)||b},
JV(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.Y(r,b[s]))return!1}return!0},
Ml(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
C2(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.k(A.y("Illegal RegExp pattern ("+String(o)+")",a,null))},
NK(a,b,c){var s=a.indexOf(b,c)
return s>=0},
CJ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
NO(a,b,c,d){var s=b.fG(a,d)
if(s==null)return a
return A.D1(a,s.b.index,s.gcd(),c)},
hN(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ao(a,b,c){var s
if(typeof b=="string")return A.NM(a,b,c)
if(b instanceof A.er){s=b.gfN()
s.lastIndex=0
return a.replace(s,A.CJ(c))}return A.NL(a,b,c)},
NL(a,b,c){var s,r,q,p
for(s=J.Dl(b,a),s=s.gA(s),r=0,q="";s.n();){p=s.gt()
q=q+a.substring(r,p.gdz())+c
r=p.gcd()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
NM(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hN(b),"g"),A.CJ(c))},
Fp(a){return a},
hP(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.aM(0,a),s=new A.fy(s.a,s.b,s.c),r=t.ez,q=0,p="";s.n();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.i(A.Fp(B.b.X(a,q,m)))+A.i(c.$1(o))
q=m+n[0].length}s=p+A.i(A.Fp(B.b.ad(a,q)))
return s.charCodeAt(0)==0?s:s},
Gt(a,b,c,d){var s,r,q,p
if(typeof b=="string"){s=a.indexOf(b,d)
if(s<0)return a
return A.D1(a,s,s+b.length,c)}if(b instanceof A.er)return d===0?a.replace(b.b,A.CJ(c)):A.NO(a,b,c,d)
r=J.I3(b,a,d)
q=r.gA(r)
if(!q.n())return a
p=q.gt()
return B.b.hD(a,p.gdz(),p.gcd(),c)},
NN(a,b,c,d){var s,r,q=b.d7(0,a,d),p=new A.fy(q.a,q.b,q.c)
if(!p.n())return a
s=p.d
if(s==null)s=t.ez.a(s)
r=A.i(c.$1(s))
return B.b.hD(a,s.b.index,s.gcd(),r)},
D1(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
p:function p(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
i2:function i2(a,b){this.a=a
this.$ti=b},
fQ:function fQ(){},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
fA:function fA(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cl:function cl(a,b){this.a=a
this.$ti=b},
fR:function fR(){},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
kK:function kK(){},
fb:function fb(a,b){this.a=a
this.$ti=b},
iU:function iU(){},
uk:function uk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iL:function iL(){},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a){this.a=a},
pi:function pi(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b},
jq:function jq(a){this.a=a
this.b=null},
bL:function bL(){},
kb:function kb(){},
kc:function kc(){},
lF:function lF(){},
lC:function lC(){},
fM:function fM(a,b){this.a=a
this.b=b},
lr:function lr(a){this.a=a},
cA:function cA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
o4:function o4(a){this.a=a},
p5:function p5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
at:function at(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d){var _=this
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
ab:function ab(a,b){this.a=a
this.$ti=b},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ff:function ff(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
za:function za(a){this.a=a},
zb:function zb(a){this.a=a},
zc:function zc(a){this.a=a},
bj:function bj(){},
e9:function e9(){},
fD:function fD(){},
dd:function dd(){},
er:function er(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a){this.b=a},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hp:function hp(a,b){this.a=a
this.c=b},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
NT(a){throw A.b3(A.DY(a),new Error())},
mN(){throw A.b3(A.DZ(""),new Error())},
Gu(){throw A.b3(A.IP(""),new Error())},
fK(){throw A.b3(A.DY(""),new Error())},
uG(){var s=new A.lW("")
return s.b=s},
uH(a){var s=new A.lW(a)
return s.b=s},
lW:function lW(a){this.a=a
this.b=null},
jD(a,b,c){},
aJ(a){var s,r,q
if(t.rw.b(a))return a
s=J.an(a)
r=A.ix(s.gq(a),null,!1,t.z)
for(q=0;q<s.gq(a);++q)B.a.j(r,q,s.h(a,q))
return r},
IU(a){return new DataView(new ArrayBuffer(a))},
IV(a,b,c){A.jD(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
IW(a){return new Int8Array(a)},
IX(a){return new Uint16Array(a)},
IY(a){return new Uint32Array(a)},
IZ(a){return new Uint32Array(A.aJ(a))},
J_(a,b,c){A.jD(a,b,c)
if(c==null)c=B.d.C(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
pf(a){return new Uint8Array(a)},
J0(a){return new Uint8Array(A.aJ(a))},
iH(a,b,c){A.jD(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ec(a,b,c){if(a>>>0!==a||a>=c)throw A.k(A.ya(b,a))},
eQ(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.k(A.Mr(a,b,c))
if(b==null)return c
return b},
ev:function ev(){},
hc:function hc(){},
iD:function iD(){},
mt:function mt(a){this.a=a},
iB:function iB(){},
bw:function bw(){},
ew:function ew(){},
c4:function c4(){},
l0:function l0(){},
l1:function l1(){},
l2:function l2(){},
iC:function iC(){},
l3:function l3(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
fk:function fk(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
Ce(a,b){var s=b.c
return s==null?b.c=A.jt(a,"b9",[b.x]):s},
Eg(a){var s=a.w
if(s===6||s===7)return A.Eg(a.x)
return s===11||s===12},
Jd(a){return a.as},
mJ(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.v8(v.typeUniverse,a,!1)},
MN(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.eR(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
eR(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eR(a1,s,a3,a4)
if(r===s)return a2
return A.EN(a1,r,!0)
case 7:s=a2.x
r=A.eR(a1,s,a3,a4)
if(r===s)return a2
return A.EM(a1,r,!0)
case 8:q=a2.y
p=A.hE(a1,q,a3,a4)
if(p===q)return a2
return A.jt(a1,a2.x,p)
case 9:o=a2.x
n=A.eR(a1,o,a3,a4)
m=a2.y
l=A.hE(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Cr(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hE(a1,j,a3,a4)
if(i===j)return a2
return A.EO(a1,k,i)
case 11:h=a2.x
g=A.eR(a1,h,a3,a4)
f=a2.y
e=A.Lq(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.EL(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hE(a1,d,a3,a4)
o=a2.x
n=A.eR(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Cs(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.k(A.jX("Attempted to substitute unexpected RTI kind "+a0))}},
hE(a,b,c,d){var s,r,q,p,o=b.length,n=A.vg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eR(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Lr(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.vg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eR(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Lq(a,b,c,d){var s,r=b.a,q=A.hE(a,r,c,d),p=b.b,o=A.hE(a,p,c,d),n=b.c,m=A.Lr(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ma()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
xP(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ME(s)
return a.$S()}return null},
MM(a,b){var s
if(A.Eg(b))if(a instanceof A.bL){s=A.xP(a)
if(s!=null)return s}return A.aT(a)},
aT(a){if(a instanceof A.a0)return A.o(a)
if(Array.isArray(a))return A.F(a)
return A.CA(J.eU(a))},
F(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.CA(a)},
CA(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.KN(a,s)},
KN(a,b){var s=a instanceof A.bL?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.K5(v.typeUniverse,s.name)
b.$ccache=r
return r},
ME(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.v8(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
bd(a){return A.dg(A.o(a))},
CN(a){var s=A.xP(a)
return A.dg(s==null?A.aT(a):s)},
CC(a){var s
if(a instanceof A.bj)return A.Mw(a.$r,a.dI())
s=a instanceof A.bL?A.xP(a):null
if(s!=null)return s
if(t.sg.b(a))return J.I7(a).a
if(Array.isArray(a))return A.F(a)
return A.aT(a)},
dg(a){var s=a.r
return s==null?a.r=new A.ms(a):s},
Mw(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.a(q,0)
s=A.jv(v.typeUniverse,A.CC(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.EQ(v.typeUniverse,s,A.CC(q[r]))}return A.jv(v.typeUniverse,s,a)},
bB(a){return A.dg(A.v8(v.typeUniverse,a,!1))},
KM(a){var s=this
s.b=A.Lo(s)
return s.b(a)},
Lo(a){var s,r,q,p,o
if(a===t.K)return A.KX
if(A.fJ(a))return A.L0
s=a.w
if(s===6)return A.KI
if(s===1)return A.Fe
if(s===7)return A.KS
r=A.Ln(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fJ)){a.f="$i"+q
if(q==="A")return A.KV
if(a===t.m)return A.KU
return A.L_}}else if(s===10){p=A.Ml(a.x,a.y)
o=p==null?A.Fe:p
return o==null?A.df(o):o}return A.KG},
Ln(a){if(a.w===8){if(a===t.S)return A.cu
if(a===t.pR||a===t.x)return A.KW
if(a===t.N)return A.KZ
if(a===t.y)return A.ed}return null},
KL(a){var s=this,r=A.KF
if(A.fJ(s))r=A.Ks
else if(s===t.K)r=A.df
else if(A.hM(s)){r=A.KH
if(s===t.lo)r=A.aG
else if(s===t.T)r=A.m
else if(s===t.k7)r=A.hC
else if(s===t.s7)r=A.Cy
else if(s===t.u6)r=A.Kr
else if(s===t.uh)r=A.aS}else if(s===t.S)r=A.O
else if(s===t.N)r=A.b
else if(s===t.y)r=A.cN
else if(s===t.x)r=A.vi
else if(s===t.pR)r=A.Cx
else if(s===t.m)r=A.w
s.a=r
return s.a(a)},
KG(a){var s=this
if(a==null)return A.hM(s)
return A.FU(v.typeUniverse,A.MM(a,s),s)},
KI(a){if(a==null)return!0
return this.x.b(a)},
L_(a){var s,r=this
if(a==null)return A.hM(r)
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.eU(a)[s]},
KV(a){var s,r=this
if(a==null)return A.hM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.eU(a)[s]},
KU(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a0)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Fd(a){if(typeof a=="object"){if(a instanceof A.a0)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
KF(a){var s=this
if(a==null){if(A.hM(s))return a}else if(s.b(a))return a
throw A.b3(A.F7(a,s),new Error())},
KH(a){var s=this
if(a==null||s.b(a))return a
throw A.b3(A.F7(a,s),new Error())},
F7(a,b){return new A.hA("TypeError: "+A.EG(a,A.bS(b,null)))},
FG(a,b,c,d){if(A.FU(v.typeUniverse,a,b))return a
throw A.b3(A.JY("The type argument '"+A.bS(a,null)+"' is not a subtype of the type variable bound '"+A.bS(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
EG(a,b){return A.kw(a)+": type '"+A.bS(A.CC(a),null)+"' is not a subtype of type '"+b+"'"},
JY(a){return new A.hA("TypeError: "+a)},
ct(a,b){return new A.hA("TypeError: "+A.EG(a,b))},
KS(a){var s=this
return s.x.b(a)||A.Ce(v.typeUniverse,s).b(a)},
KX(a){return a!=null},
df(a){if(a!=null)return a
throw A.b3(A.ct(a,"Object"),new Error())},
L0(a){return!0},
Ks(a){return a},
Fe(a){return!1},
ed(a){return!0===a||!1===a},
cN(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b3(A.ct(a,"bool"),new Error())},
hC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b3(A.ct(a,"bool?"),new Error())},
Cx(a){if(typeof a=="number")return a
throw A.b3(A.ct(a,"double"),new Error())},
Kr(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b3(A.ct(a,"double?"),new Error())},
cu(a){return typeof a=="number"&&Math.floor(a)===a},
O(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b3(A.ct(a,"int"),new Error())},
aG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b3(A.ct(a,"int?"),new Error())},
KW(a){return typeof a=="number"},
vi(a){if(typeof a=="number")return a
throw A.b3(A.ct(a,"num"),new Error())},
Cy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b3(A.ct(a,"num?"),new Error())},
KZ(a){return typeof a=="string"},
b(a){if(typeof a=="string")return a
throw A.b3(A.ct(a,"String"),new Error())},
m(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b3(A.ct(a,"String?"),new Error())},
w(a){if(A.Fd(a))return a
throw A.b3(A.ct(a,"JSObject"),new Error())},
aS(a){if(a==null)return a
if(A.Fd(a))return a
throw A.b3(A.ct(a,"JSObject?"),new Error())},
Fm(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bS(a[q],b)
return s},
Li(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Fm(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bS(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Fa(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.Ls(a.x)
o=a.y
return o.length>0?p+("<"+A.Fm(o,b)+">"):p}if(l===10)return A.Li(a,b)
if(l===11)return A.Fa(a,b,null)
if(l===12)return A.Fa(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
Ls(a){var s=A.Gw(a)
if(s!=null)return s
return"minified:"+a},
K6(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
K5(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.v8(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ju(a,5,"#")
q=A.vg(s)
for(p=0;p<s;++p)q[p]=r
o=A.jt(a,b,q)
n[b]=o
return o}else return m},
K4(a,b){return A.F_(a.tR,b)},
K3(a,b){return A.F_(a.eT,b)},
v8(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.EP(a,null,b,!1)
r.set(b,s)
return s},
jv(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.EP(a,b,c,!0)
q.set(c,r)
return r},
EQ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Cr(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
EP(a,b,c,d){return A.JT(A.JN(a,b,c,d))},
eO(a,b){b.a=A.KL
b.b=A.KM
return b},
ju(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cG(null,null)
s.w=b
s.as=c
r=A.eO(a,s)
a.eC.set(c,r)
return r},
EN(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.K1(a,b,r,c)
a.eC.set(r,s)
return s},
K1(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fJ(b))if(!(b===t.aU||b===t.Be))if(s!==6)r=s===7&&A.hM(b.x)
if(r)return b
else if(s===1)return t.aU}q=new A.cG(null,null)
q.w=6
q.x=b
q.as=c
return A.eO(a,q)},
EM(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.K_(a,b,r,c)
a.eC.set(r,s)
return s},
K_(a,b,c,d){var s,r
if(d){s=b.w
if(A.fJ(b)||b===t.K)return b
else if(s===1)return A.jt(a,"b9",[b])
else if(b===t.aU||b===t.Be)return t.eZ}r=new A.cG(null,null)
r.w=7
r.x=b
r.as=c
return A.eO(a,r)},
K2(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cG(null,null)
s.w=13
s.x=b
s.as=q
r=A.eO(a,s)
a.eC.set(q,r)
return r},
js(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
JZ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jt(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.js(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cG(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.eO(a,r)
a.eC.set(p,q)
return q},
Cr(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.js(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cG(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.eO(a,o)
a.eC.set(q,n)
return n},
EO(a,b,c){var s,r,q="+"+(b+"("+A.js(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cG(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.eO(a,s)
a.eC.set(q,r)
return r},
EL(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.js(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.js(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.JZ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cG(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.eO(a,p)
a.eC.set(r,o)
return o},
Cs(a,b,c,d){var s,r=b.as+("<"+A.js(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.K0(a,b,c,r,d)
a.eC.set(r,s)
return s},
K0(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.vg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eR(a,b,r,0)
m=A.hE(a,c,r,0)
return A.Cs(a,n,m,c!==m)}}l=new A.cG(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.eO(a,l)},
JN(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
JT(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.JP(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.EI(a,r,l,k,!1)
else if(q===46)r=A.EI(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fC(a.u,a.e,k.pop()))
break
case 94:k.push(A.K2(a.u,k.pop()))
break
case 35:k.push(A.ju(a.u,5,"#"))
break
case 64:k.push(A.ju(a.u,2,"@"))
break
case 126:k.push(A.ju(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.JR(a,k)
break
case 38:A.JQ(a,k)
break
case 63:p=a.u
k.push(A.EN(p,A.fC(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.EM(p,A.fC(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.JO(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.EJ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.JU(a.u,a.e,o)
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
return A.fC(a.u,a.e,m)},
JP(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
EI(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.K6(s,o.x)[p]
if(n==null)A.f('No "'+p+'" in "'+A.Jd(o)+'"')
d.push(A.jv(s,o,n))}else d.push(p)
return m},
JR(a,b){var s,r=a.u,q=A.EH(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jt(r,p,q))
else{s=A.fC(r,a.e,p)
switch(s.w){case 11:b.push(A.Cs(r,s,q,a.n))
break
default:b.push(A.Cr(r,s,q))
break}}},
JO(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.EH(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fC(p,a.e,o)
q=new A.ma()
q.a=s
q.b=n
q.c=m
b.push(A.EL(p,r,q))
return
case-4:b.push(A.EO(p,b.pop(),s))
return
default:throw A.k(A.jX("Unexpected state under `()`: "+A.i(o)))}},
JQ(a,b){var s=b.pop()
if(0===s){b.push(A.ju(a.u,1,"0&"))
return}if(1===s){b.push(A.ju(a.u,4,"1&"))
return}throw A.k(A.jX("Unexpected extended operation "+A.i(s)))},
EH(a,b){var s=b.splice(a.p)
A.EJ(a.u,a.e,s)
a.p=b.pop()
return s},
fC(a,b,c){if(typeof c=="string")return A.jt(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.JS(a,b,c)}else return c},
EJ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fC(a,b,c[s])},
JU(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fC(a,b,c[s])},
JS(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.k(A.jX("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.k(A.jX("Bad index "+c+" for "+b.k(0)))},
FU(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.bl(a,b,null,c,null)
r.set(c,s)}return s},
bl(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fJ(d))return!0
s=b.w
if(s===4)return!0
if(A.fJ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.bl(a,c[b.x],c,d,e))return!0
q=d.w
p=t.aU
if(b===p||b===t.Be){if(q===7)return A.bl(a,b,c,d.x,e)
return d===p||d===t.Be||q===6}if(d===t.K){if(s===7)return A.bl(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.bl(a,b.x,c,d,e))return!1
return A.bl(a,A.Ce(a,b),c,d,e)}if(s===6)return A.bl(a,p,c,d,e)&&A.bl(a,b.x,c,d,e)
if(q===7){if(A.bl(a,b,c,d.x,e))return!0
return A.bl(a,b,c,A.Ce(a,d),e)}if(q===6)return A.bl(a,b,c,p,e)||A.bl(a,b,c,d.x,e)
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
if(!A.bl(a,j,c,i,e)||!A.bl(a,i,e,j,c))return!1}return A.Fc(a,b.x,c,d.x,e)}if(q===11){if(b===t.g9)return!0
if(p)return!1
return A.Fc(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.KT(a,b,c,d,e)}if(o&&q===10)return A.KY(a,b,c,d,e)
return!1},
Fc(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
KT(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.jv(a,b,r[o])
return A.F1(a,p,null,c,d.y,e)}return A.F1(a,b.y,null,c,d.y,e)},
F1(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.bl(a,b[s],d,e[s],f))return!1
return!0},
KY(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.bl(a,r[s],c,q[s],e))return!1
return!0},
hM(a){var s=a.w,r=!0
if(!(a===t.aU||a===t.Be))if(!A.fJ(a))if(s!==6)r=s===7&&A.hM(a.x)
return r},
fJ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
F_(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
vg(a){return a>0?new Array(a):v.typeUniverse.sEA},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ma:function ma(){this.c=this.b=this.a=null},
ms:function ms(a){this.a=a},
m9:function m9(){},
hA:function hA(a){this.a=a},
Jv(){var s,r,q
if(self.scheduleImmediate!=null)return A.LH()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fH(new A.uu(s),1)).observe(r,{childList:true})
return new A.ut(s,r,q)}else if(self.setImmediate!=null)return A.LI()
return A.LJ()},
Jw(a){self.scheduleImmediate(A.fH(new A.uv(t.O.a(a)),0))},
Jx(a){self.setImmediate(A.fH(new A.uw(t.O.a(a)),0))},
Jy(a){A.Ci(B.eY,t.O.a(a))},
Ci(a,b){var s=B.d.C(a.a,1000)
return A.JW(s<0?0:s,b)},
Eq(a,b){var s=B.d.C(a.a,1000)
return A.JX(s<0?0:s,b)},
JW(a,b){var s=new A.jr(!0)
s.iy(a,b)
return s},
JX(a,b){var s=new A.jr(!1)
s.iz(a,b)
return s},
J(a){return new A.lP(new A.am($.aj,a.i("am<0>")),a.i("lP<0>"))},
I(a,b){a.$2(0,null)
b.b=!0
return b.a},
r(a,b){A.Kt(a,b)},
H(a,b){b.cG(a)},
G(a,b){b.eS(A.av(a),A.eV(a))},
Kt(a,b){var s,r,q=new A.vj(b),p=new A.vk(b)
if(a instanceof A.am)a.fY(q,p,t.z)
else{s=t.z
if(a instanceof A.am)a.e9(q,p,s)
else{r=new A.am($.aj,t.hR)
r.a=8
r.c=a
r.fY(q,p,s)}}},
K(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.aj.hB(new A.vQ(s),t.H,t.S,t.z)},
EK(a,b,c){return 0},
n1(a){var s
if(t.yt.b(a)){s=a.gcq()
if(s!=null)return s}return B.aI},
aV(a,b){var s=new A.am($.aj,b.i("am<0>"))
s.bn(a)
return s},
IC(a,b){var s
if(!b.b(null))throw A.k(A.x(null,"computation","The type parameter is not nullable"))
s=new A.am($.aj,b.i("am<0>"))
A.Ep(a,new A.nQ(null,s,b))
return s},
KO(a,b){if($.aj===B.W)return null
return null},
KP(a,b){if($.aj!==B.W)A.KO(a,b)
if(b==null)if(t.yt.b(a)){b=a.gcq()
if(b==null){A.Eb(a,B.aI)
b=B.aI}}else b=B.aI
else if(t.yt.b(a))A.Eb(a,b)
return new A.bV(a,b)},
JK(a,b){var s=new A.am($.aj,b.i("am<0>"))
b.a(a)
s.a=8
s.c=a
return s},
uN(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Jj()
b.ej(new A.bV(new A.ce(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.f7.a(b.c)
b.a=b.a&1|4
b.c=n
n.fP(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.d5()
b.dG(o.a)
A.fz(b,p)
return}b.a^=2
A.my(null,null,b.b,t.O.a(new A.uO(o,b)))},
fz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.Fq,r=t.f7;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.vG(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fz(d.a,c)
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
A.vG(j.a,j.b)
return}g=$.aj
if(g!==h)$.aj=h
else g=null
c=c.c
if((c&15)===8)new A.uS(q,d,n).$0()
else if(o){if((c&1)!==0)new A.uR(q,j).$0()}else if((c&2)!==0)new A.uQ(d,q).$0()
if(g!=null)$.aj=g
c=q.c
if(c instanceof A.am){p=q.a.$ti
p=p.i("b9<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dK(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.uN(c,f,!0)
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
Lj(a,b){var s
if(t.nW.b(a))return b.hB(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.k(A.x(a,"onError",u.w))},
L5(){var s,r
for(s=$.hD;s!=null;s=$.hD){$.jF=null
r=s.b
$.hD=r
if(r==null)$.jE=null
s.a.$0()}},
Lp(){$.CB=!0
try{A.L5()}finally{$.jF=null
$.CB=!1
if($.hD!=null)$.D9().$1(A.FA())}},
Fo(a){var s=new A.lQ(a),r=$.jE
if(r==null){$.hD=$.jE=s
if(!$.CB)$.D9().$1(A.FA())}else $.jE=r.b=s},
Lm(a){var s,r,q,p=$.hD
if(p==null){A.Fo(a)
$.jF=$.jE
return}s=new A.lQ(a)
r=$.jF
if(r==null){s.b=p
$.hD=$.jF=s}else{q=r.b
s.b=q
$.jF=r.b=s
if(q==null)$.jE=s}},
OA(a,b){A.cO(a,"stream",t.K)
return new A.mo(b.i("mo<0>"))},
Ep(a,b){var s=$.aj
if(s===B.W)return A.Ci(a,t.O.a(b))
return A.Ci(a,t.O.a(s.h5(b)))},
Jq(a,b){var s=$.aj
if(s===B.W)return A.Eq(a,t.uH.a(b))
return A.Eq(a,t.uH.a(s.l6(b,t.hz)))},
vG(a,b){A.Lm(new A.vH(a,b))},
Fk(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
Fl(a,b,c,d,e,f,g){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
Lk(a,b,c,d,e,f,g,h,i){var s,r=$.aj
if(r===c)return d.$2(e,f)
$.aj=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aj=s}},
my(a,b,c,d){t.O.a(d)
if(B.W!==c){d=c.h5(d)
d=d}A.Fo(d)},
uu:function uu(a){this.a=a},
ut:function ut(a,b,c){this.a=a
this.b=b
this.c=c},
uv:function uv(a){this.a=a},
uw:function uw(a){this.a=a},
jr:function jr(a){this.a=a
this.b=null
this.c=0},
v7:function v7(a,b){this.a=a
this.b=b},
v6:function v6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lP:function lP(a,b){this.a=a
this.b=!1
this.$ti=b},
vj:function vj(a){this.a=a},
vk:function vk(a){this.a=a},
vQ:function vQ(a){this.a=a},
eb:function eb(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
de:function de(a,b){this.a=a
this.$ti=b},
bV:function bV(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(){},
cM:function cM(a,b){this.a=a
this.$ti=b},
e6:function e6(a,b,c,d,e){var _=this
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
uK:function uK(a,b){this.a=a
this.b=b},
uP:function uP(a,b){this.a=a
this.b=b},
uO:function uO(a,b){this.a=a
this.b=b},
uM:function uM(a,b){this.a=a
this.b=b},
uL:function uL(a,b){this.a=a
this.b=b},
uS:function uS(a,b,c){this.a=a
this.b=b
this.c=c},
uT:function uT(a,b){this.a=a
this.b=b},
uU:function uU(a){this.a=a},
uR:function uR(a,b){this.a=a
this.b=b},
uQ:function uQ(a,b){this.a=a
this.b=b},
uV:function uV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uW:function uW(a,b,c){this.a=a
this.b=b
this.c=c},
uX:function uX(a,b){this.a=a
this.b=b},
lQ:function lQ(a){this.a=a
this.b=null},
mo:function mo(a){this.$ti=a},
jB:function jB(){},
mi:function mi(){},
v4:function v4(a,b){this.a=a
this.b=b},
v5:function v5(a,b,c){this.a=a
this.b=b
this.c=c},
vH:function vH(a,b){this.a=a
this.b=b},
iw(a,b){return new A.cA(a.i("@<0>").a3(b).i("cA<1,2>"))},
S(a,b,c){return b.i("@<0>").a3(c).i("C6<1,2>").a(A.FL(a,new A.cA(b.i("@<0>").a3(c).i("cA<1,2>"))))},
v(a,b){return new A.cA(a.i("@<0>").a3(b).i("cA<1,2>"))},
C7(a){return new A.dc(a.i("dc<0>"))},
a3(a){return new A.dc(a.i("dc<0>"))},
kX(a,b){return b.i("E1<0>").a(A.My(a,new A.dc(b.i("dc<0>"))))},
Cq(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
e8(a,b,c){var s=new A.fB(a,b,c.i("fB<0>"))
s.c=a.e
return s},
aN(a,b){var s=J.Q(a)
if(s.n())return s.gt()
return null},
C0(a,b){var s,r
if(t.he.b(a)){if(a.length===0)return null
return B.a.gaq(a)}s=J.Q(a)
if(!s.n())return null
do r=s.gt()
while(s.n())
return r},
IS(a,b,c){var s=A.iw(b,c)
a.a2(0,new A.p6(s,b,c))
return s},
kW(a,b,c){var s=A.iw(b,c)
s.a1(0,a)
return s},
C8(a,b){var s,r,q=A.C7(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q.m(0,b.a(a[r]))
return q},
kY(a,b){var s=A.C7(b)
s.a1(0,a)
return s},
IT(a,b){var s=t.hO
return J.BM(s.a(a),s.a(b))},
Ca(a){var s,r
if(A.CS(a))return"{...}"
s=new A.bF("")
try{r={}
B.a.m($.c9,a)
s.a+="{"
r.a=!0
a.a2(0,new A.pa(r,s))
s.a+="}"}finally{if(0>=$.c9.length)return A.a($.c9,-1)
$.c9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ER(){throw A.k(A.aA("Cannot change an unmodifiable set"))},
dc:function dc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mf:function mf(a){this.a=a
this.c=this.b=null},
fB:function fB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
R:function R(){},
a7:function a7(){},
p9:function p9(a){this.a=a},
pa:function pa(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.$ti=b},
je:function je(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jw:function jw(){},
h9:function h9(){},
e5:function e5(a,b){this.a=a
this.$ti=b},
cI:function cI(){},
jp:function jp(){},
mu:function mu(){},
j4:function j4(a,b){this.a=a
this.$ti=b},
hB:function hB(){},
jx:function jx(){},
Le(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.av(r)
q=A.y(String(s),null,null)
throw A.k(q)}q=A.vr(p)
return q},
vr(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.md(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.vr(a[s])
return a},
Ko(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Hh()
else s=new Uint8Array(o)
for(r=J.an(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Kn(a,b,c,d){var s=a?$.Hg():$.Hf()
if(s==null)return null
if(0===c&&d===b.length)return A.EZ(s,b)
return A.EZ(s,b.subarray(c,d))},
EZ(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
JC(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
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
JB(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.d.an(a1,2),f=a1&3,e=$.Ha()
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
if(f===3){if((g&3)!==0)throw A.k(A.y(i,a,p))
k=a0+1
q&2&&A.C(d)
s=d.length
if(!(a0<s))return A.a(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.a(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.k(A.y(i,a,p))
q&2&&A.C(d)
if(!(a0<d.length))return A.a(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.Ew(a,p+1,c,-j-1)}throw A.k(A.y(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.a(a,p)
if(a.charCodeAt(p)>127)break}throw A.k(A.y(h,a,p))},
Jz(a,b,c,d){var s=A.JA(a,b,c),r=(d&3)+(s-b),q=B.d.an(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.H9()},
JA(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
Ew(a,b,c,d){var s,r,q
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
if(b===c)break}if(b!==c)throw A.k(A.y("Invalid padding character",a,b))
return-s-1},
DV(a,b,c){return new A.ir(a,b)},
Kx(a){return a.N()},
JL(a,b){return new A.v_(a,[],A.Mg())},
JM(a,b,c){var s,r=new A.bF(""),q=A.JL(r,b)
q.ed(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Kp(a){switch(a){case 65:return"Missing extension byte"
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
uZ:function uZ(a){this.a=a},
me:function me(a){this.a=a},
ve:function ve(){},
vd:function vd(){},
fL:function fL(a){this.a=a},
hX:function hX(a){this.a=a},
uy:function uy(a){this.a=0
this.b=a},
jZ:function jZ(){},
ux:function ux(){this.a=0},
be:function be(){},
bf:function bf(){},
b7:function b7(){},
ku:function ku(){},
ir:function ir(a,b){this.a=a
this.b=b},
kT:function kT(a,b){this.a=a
this.b=b},
kS:function kS(){},
kV:function kV(a){this.b=a},
kU:function kU(a){this.a=a},
v0:function v0(){},
v1:function v1(a,b){this.a=a
this.b=b},
v_:function v_(a,b,c){this.c=a
this.a=b
this.b=c},
lM:function lM(){},
lN:function lN(){},
vf:function vf(a){this.b=0
this.c=a},
j6:function j6(a){this.a=a},
eP:function eP(a){this.a=a
this.b=16
this.c=0},
Ig(a){var s=A.EE(a,null)
if(s==null)A.f(A.y("Could not parse BigInt",a,null))
return s},
uC(a,b){var s=A.EE(a,b)
if(s==null)throw A.k(A.y("Could not parse BigInt",a,null))
return s},
JH(a,b){var s,r,q=$.bm(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a_(0,$.Da()).B(0,A.hv(s))
s=0
o=0}}if(b)return q.S(0)
return q},
Ex(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JI(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.O.h9(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.a(a,s)
o=A.Ex(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0&&h<j))return A.a(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.a(a,s)
o=A.Ex(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0&&n<j))return A.a(i,n)
i[n]=r}if(j===1){if(0>=j)return A.a(i,0)
l=i[0]===0}else l=!1
if(l)return $.bm()
l=A.bi(j,i)
return new A.aR(l===0?!1:c,i,l)},
EE(a,b){var s,r,q,p,o,n
if(a==="")return null
s=$.Hc().aj(a)
if(s==null)return null
r=s.b
q=r.length
if(1>=q)return A.a(r,1)
p=r[1]==="-"
if(4>=q)return A.a(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.a(r,5)
if(o!=null)return A.JH(o,p)
if(n!=null)return A.JI(n,2,p)
return null},
bi(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
Cn(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
aB(a){var s
if(a===0)return $.bm()
if(a===1)return $.bJ()
if(a===2)return $.BL()
if(Math.abs(a)<4294967296)return A.hv(B.d.b_(a))
s=A.JD(a)
return s},
hv(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bi(4,s)
return new A.aR(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bi(1,s)
return new A.aR(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.d.an(a,16)
r=A.bi(2,s)
return new A.aR(r===0?!1:o,s,r)}r=B.d.C(B.d.gbW(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.d.C(a,65536)}r=A.bi(r,s)
return new A.aR(r===0?!1:o,s,r)},
JD(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.k(A.b1("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.bm()
r=$.Hb()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.C(r)
if(!(p<8))return A.a(r,p)
r[p]=0}q=J.jQ(B.i.gab(r))
q.$flags&2&&A.C(q,13)
q.setFloat64(0,a,!0)
o=(r[7]<<4>>>0)+(r[6]>>>4)-1075
n=new Uint16Array(4)
n[0]=(r[1]<<8>>>0)+r[0]
n[1]=(r[3]<<8>>>0)+r[2]
n[2]=(r[5]<<8>>>0)+r[4]
n[3]=r[6]&15|16
m=new A.aR(!1,n,4)
if(o<0)l=m.c4(0,-o)
else l=o>0?m.b1(0,o):m
if(s)return l.S(0)
return l},
Co(a,b,c,d){var s,r,q,p,o
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
ED(a,b,c,d){var s,r,q,p,o,n,m,l=B.d.C(c,16),k=B.d.R(c,16),j=16-k,i=B.d.b1(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.d.dM(o,j)
q&2&&A.C(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.d.b1(o&i,k)}q&2&&A.C(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
Ey(a,b,c,d){var s,r,q,p=B.d.C(c,16)
if(B.d.R(c,16)===0)return A.Co(a,b,p,d)
s=b+p+1
A.ED(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.C(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
JJ(a,b,c,d){var s,r,q,p,o,n,m=B.d.C(c,16),l=B.d.R(c,16),k=16-l,j=B.d.b1(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.d.dM(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.d.b1(n&j,k)
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
JE(a,b,c,d,e){var s,r,q,p,o,n
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
p=0-(B.d.an(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.C(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.d.an(p,16)&1)}},
Cp(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
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
JG(a,b,c,d,e){var s,r,q=b+d
for(s=e.$flags|0,r=q;--r,r>=0;){s&2&&A.C(e)
if(!(r<e.length))return A.a(e,r)
e[r]=0}for(s=c.length,r=0;r<d;){if(!(r<s))return A.a(c,r)
A.Cp(c[r],a,0,e,r,b);++r}return q},
JF(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.d.aA((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
X(a,b,c){var s
A.b(a)
A.aG(c)
t.lF.a(b)
s=A.li(a,c)
if(s!=null)return s
if(b!=null)return b.$1(a)
throw A.k(A.y(a,null,null))},
Iy(a,b){a=A.b3(a,new Error())
if(a==null)a=A.df(a)
a.stack=b.k(0)
throw a},
ix(a,b,c,d){var s,r=c?J.DT(a,d):J.DS(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
d1(a,b,c){var s,r=A.c([],c.i("u<0>"))
for(s=J.Q(a);s.n();)B.a.m(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
B(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("u<0>"))
s=A.c([],b.i("u<0>"))
for(r=J.Q(a);r.n();)B.a.m(s,r.gt())
return s},
aC(a,b){var s=A.d1(a,!1,b)
s.$flags=3
return s},
j0(a,b,c){var s,r,q,p,o
A.ba(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.k(A.aL(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Ea(b>0||c<o?p.slice(b,c):p)}if(t.iT.b(a))return A.Jn(a,b,c)
if(r)a=J.mS(a,c)
if(b>0)a=J.hT(a,b)
s=A.B(a,t.S)
return A.Ea(s)},
Jn(a,b,c){var s=a.length
if(b>=s)return""
return A.J7(a,b,c==null||c>s?s:c)},
D(a,b,c){return new A.er(a,A.C2(a,!1,b,c,!1,""))},
Cg(a,b,c){var s=J.Q(b)
if(!s.n())return a
if(c.length===0){do a+=A.i(s.gt())
while(s.n())}else{a+=A.i(s.gt())
while(s.n())a=a+c+A.i(s.gt())}return a},
Cw(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.R){s=$.Hd()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.F.O(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.aW(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kf(a){var s,r,q
if(!$.He())return A.Kg(a)
s=new URLSearchParams()
a.a2(0,new A.vc(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.b.X(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
Jj(){return A.eV(new Error())},
Iv(a,b,c,d,e,f,g,h,i){var s=A.Ec(a,b,c,d,e,f,g,h,i)
if(s==null)return null
return new A.a8(A.DJ(s,h,i),h,i)},
ay(a,b,c){var s=A.Ec(a,b,c,0,0,0,0,0,!0)
return new A.a8(s==null?new A.nz(a,b,c,0,0,0,0,0).$0():s,0,!0)},
Iu(){return new A.a8(Date.now(),0,!1)},
c0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=$.GF().aj(a)
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
l-=f*(s.$1(r[11])+60*e)}}d=A.Iv(p,o,n,m,l,k,i,j%1000,h)
if(d==null)throw A.k(A.y("Time out of range",a,c))
return d}else throw A.k(A.y("Invalid date format",a,c))},
DK(a){var s,r
try{s=A.c0(a)
return s}catch(r){if(A.av(r) instanceof A.b8)return null
else throw r}},
DJ(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.k(A.aL(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.k(A.aL(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.k(A.x(b,s,"Time including microseconds is outside valid range"))
A.cO(c,"isUtc",t.y)
return a},
DI(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Iw(a){var s=Math.abs(a),r=a<0?"-":"+"
if(s>=1e5)return r+s
return r+"0"+s},
nA(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ds(a){if(a>=10)return""+a
return"0"+a},
BY(a,b,c,d){return new A.ck(b+1000*c+1e6*d+864e8*a)},
ag(a,b,c){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.k(A.x(b,"name","No enum value with that name"))},
BZ(a,b){var s,r,q,p=A.v(t.N,b)
for(s=a.length,r=0;r<s;++r){q=a[r]
p.j(0,q.b,q)}return p},
kw(a){if(typeof a=="number"||A.ed(a)||a==null)return J.hU(a)
if(typeof a=="string")return JSON.stringify(a)
return A.E9(a)},
Iz(a,b){A.cO(a,"error",t.K)
A.cO(b,"stackTrace",t.l)
A.Iy(a,b)},
jX(a){return new A.jW(a)},
b1(a,b){return new A.ce(!1,null,b,a)},
x(a,b,c){return new A.ce(!0,a,b,c)},
ei(a,b,c){return a},
tB(a,b){return new A.hg(null,null,!0,a,b,"Value not in range")},
aL(a,b,c,d,e){return new A.hg(b,c,!0,a,d,"Invalid value")},
Cd(a,b,c,d){if(a<b||a>c)throw A.k(A.aL(a,b,c,d,null))
return a},
bQ(a,b,c){if(0>a||a>c)throw A.k(A.aL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.k(A.aL(b,a,c,"end",null))
return b}return c},
ba(a,b){if(a<0)throw A.k(A.aL(a,0,null,b,null))
return a},
nV(a,b,c,d){return new A.kG(b,!0,a,d,"Index out of range")},
aA(a){return new A.j5(a)},
j3(a){return new A.lJ(a)},
aq(a){return new A.dW(a)},
aH(a){return new A.ke(a)},
y(a,b,c){return new A.b8(a,b,c)},
II(a,b,c){var s,r
if(A.CS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.m($.c9,a)
try{A.L2(a,s)}finally{if(0>=$.c9.length)return A.a($.c9,-1)
$.c9.pop()}r=A.Cg(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
C1(a,b,c){var s,r
if(A.CS(a))return b+"..."+c
s=new A.bF(b)
B.a.m($.c9,a)
try{r=s
r.a=A.Cg(r.a,a,", ")}finally{if(0>=$.c9.length)return A.a($.c9,-1)
$.c9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
L2(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
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
E2(a,b,c,d,e){return new A.f4(a,b.i("@<0>").a3(c).a3(d).a3(e).i("f4<1,2,3,4>"))},
bx(a,b,c,d){var s
if(B.t===c){s=J.c_(a)
b=J.c_(b)
return A.uf(A.e_(A.e_($.mP(),s),b))}if(B.t===d){s=J.c_(a)
b=J.c_(b)
c=J.c_(c)
return A.uf(A.e_(A.e_(A.e_($.mP(),s),b),c))}s=J.c_(a)
b=J.c_(b)
c=J.c_(c)
d=J.c_(d)
d=A.uf(A.e_(A.e_(A.e_(A.e_($.mP(),s),b),c),d))
return d},
E4(a){var s,r,q=$.mP()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q=A.e_(q,J.c_(a[r]))
return A.uf(q)},
Ej(a,b){return new A.j4(A.kY(a,b),b.i("j4<0>"))},
Ju(a){var s=t.N
return B.a.a5(A.c(a.split("&"),t.s),A.v(s,s),new A.up(B.R),t.yz)},
lL(a,b,c){throw A.k(A.y("Illegal IPv4 address, "+a,b,c))},
Js(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
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
Es(a,b,c){var s
if(b===c)throw A.k(A.y("Empty IP address",a,b))
if(!(b<a.length))return A.a(a,b)
if(a.charCodeAt(b)===118){s=A.Jt(a,b,c)
if(s!=null)throw A.k(s)
return!1}A.Et(a,b,c)
return!0},
Jt(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.S;++b
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
Et(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.uo(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Js(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.an(l,8)
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
ES(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
jz(a,b,c){throw A.k(A.y(c,a,b))},
jA(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.length,c="",b=e
if(d!==0){r=0
for(;;){if(!(r<d)){s=0
break}if(a0.charCodeAt(r)===64){c=B.b.X(a0,0,r)
s=r+1
break}++r}if(s<d&&a0.charCodeAt(s)===91){for(q=s,p=-1;q<d;++q){o=a0.charCodeAt(q)
if(o===37&&p<0){n=B.b.c5(a0,"25",q+1)?q+2:q
p=q
q=n}else if(o===93)break}if(q===d)throw A.k(A.y("Invalid IPv6 host entry.",a0,s))
m=p<0?q:p
A.Es(a0,s+1,m);++q
if(q!==d){if(!(q<d))return A.a(a0,q)
m=a0.charCodeAt(q)!==58}else m=!1
if(m)throw A.k(A.y("Invalid end of authority",a0,q))}else q=s
for(;q<d;++q)if(a0.charCodeAt(q)===58){l=B.b.ad(a0,q+1)
b=l.length!==0?A.X(l,e,e):e
break}k=B.b.X(a0,s,q)}else k=e
d=A.c(a1.split("/"),t.s)
a=A.Kh(a,0,a.length)
c=A.Ki(c,0,c.length)
k=A.Kb(k,0,k==null?0:k.length,!1)
j=A.Ke(e,0,0,a2)
i=A.Ka(e,0,0)
b=A.Kd(b,a)
h=a==="file"
if(k==null)m=c.length!==0||b!=null||h
else m=!1
if(m)k=""
m=k==null
g=!m
f=A.Kc(e,0,0,d,a,g)
d=a.length===0
if(d&&m&&!B.b.am(f,"/"))f=A.EW(f,!d||g)
else f=A.EY(f)
return new A.jy(a,c,m&&B.b.am(f,"//")?"":k,b,f,j,i)},
Kd(a,b){if(a!=null&&a===A.ES(b))return null
return a},
Kb(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.a(a,r)
if(a.charCodeAt(r)!==93)A.jz(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.a(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.K8(a,q,r)
if(o<r){n=o+1
p=A.EX(a,B.b.c5(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Es(a,q,o)
l=B.b.X(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.a(a,k)
if(a.charCodeAt(k)===58){o=B.b.ce(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.EX(a,B.b.c5(a,"25",n)?o+3:n,c,"%25")}else p=""
A.Et(a,b,o)
return"["+B.b.X(a,b,o)+p+"]"}}return A.Km(a,b,c)},
K8(a,b,c){var s=B.b.ce(a,"%",b)
return s>=b&&s<c?s:c},
EX(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bF(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.a(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.Cu(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bF("")
l=h.a+=B.b.X(a,q,r)
if(m)n=B.b.X(a,r,r+3)
else if(n==="%")A.jz(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.S.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bF("")
if(q<r){h.a+=B.b.X(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.a(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.X(a,q,r)
if(h==null){h=new A.bF("")
m=h}else m=h
m.a+=i
l=A.Ct(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.X(a,b,c)
if(q<c){i=B.b.X(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Km(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.S
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r<s))return A.a(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.Cu(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bF("")
k=B.b.X(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.X(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bF("")
if(q<r){p.a+=B.b.X(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.jz(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.a(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.X(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bF("")
l=p}else l=p
l.a+=k
j=A.Ct(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.X(a,b,c)
if(q<c){k=B.b.X(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Kh(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(!A.EU(a.charCodeAt(b)))A.jz(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.S.charCodeAt(p)&8)!==0))A.jz(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.X(a,b,c)
return A.K7(q?a.toLowerCase():a)},
K7(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ki(a,b,c){return A.Kk(a,b,c,16,!1,!1)},
Kc(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.F(d),p=new A.ah(d,q.i("e(1)").a(new A.v9()),q.i("ah<1,e>")).Y(0,"/")
if(p.length===0){if(s)return"/"}else if(r&&!B.b.am(p,"/"))p="/"+p
return A.Kl(p,e,f)},
Kl(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.am(a,"/")&&!B.b.am(a,"\\"))return A.EW(a,!s||c)
return A.EY(a)},
Ke(a,b,c,d){if(d==null)return null
return A.Kf(d)},
Kg(a){var s={},r=new A.bF("")
s.a=""
a.a2(0,new A.va(new A.vb(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Ka(a,b,c){return null},
Cu(a,b,c){var s,r,q,p,o,n,m=u.S,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.a(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.a(a,l)
q=a.charCodeAt(l)
p=A.FR(r)
o=A.FR(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.a(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aW(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.X(a,b,b+3).toUpperCase()
return null},
Ct(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
o+=3}}return A.j0(s,0,null)},
Kk(a,b,c,d,e,f){var s=A.Kj(a,b,c,d,e,f)
return s==null?B.b.X(a,b,c):s},
Kj(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.S
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.a(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.Cu(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.jz(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.a(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.Ct(n)}if(o==null){o=new A.bF("")
k=o}else k=o
k.a=(k.a+=B.b.X(a,p,q))+l
if(typeof m!=="number")return A.CQ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.X(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
EV(a){if(B.b.am(a,"."))return!0
return B.b.bH(a,"/.")!==-1},
EY(a){var s,r,q,p,o,n,m
if(!A.EV(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.a(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.Y(s,"/")},
EW(a,b){var s,r,q,p,o,n
if(!A.EV(a))return!b?A.ET(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gaq(s)!==".."){if(0>=s.length)return A.a(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.a(s,0)
B.a.j(s,0,A.ET(s[0]))}return B.a.Y(s,"/")},
ET(a){var s,r,q,p=u.S,o=a.length
if(o>=2&&A.EU(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.X(a,0,s)+"%3A"+B.b.ad(a,s+1)
if(r<=127){if(!(r<128))return A.a(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
K9(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.k(A.b1("Invalid URL encoding",null))}}return r},
Cv(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.R===d)return B.b.X(a,b,c)
else p=new A.kd(B.b.X(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.k(A.b1("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.k(A.b1("Truncated URI",null))
B.a.m(p,A.K9(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}return d.cb(p)},
EU(a){var s=a|32
return 97<=s&&s<=122},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
uA:function uA(){},
uB:function uB(){},
uD:function uD(a,b){this.a=a
this.b=b},
uE:function uE(a){this.a=a},
uz:function uz(a,b){this.a=a
this.b=b},
vc:function vc(a){this.a=a},
nz:function nz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(){},
nC:function nC(){},
ck:function ck(a){this.a=a},
m8:function m8(){},
aF:function aF(){},
jW:function jW(a){this.a=a},
e2:function e2(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b,c,d,e,f){var _=this
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
j5:function j5(a){this.a=a},
lJ:function lJ(a){this.a=a},
dW:function dW(a){this.a=a},
ke:function ke(a){this.a=a},
l9:function l9(){},
j_:function j_(){},
uJ:function uJ(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(){},
h:function h(){},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
bh:function bh(){},
a0:function a0(){},
mr:function mr(){},
bF:function bF(a){this.a=a},
up:function up(a){this.a=a},
uo:function uo(a){this.a=a},
jy:function jy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.w=$},
v9:function v9(){},
vb:function vb(a,b){this.a=a
this.b=b},
va:function va(a){this.a=a},
kx:function kx(a,b){this.a=a
this.$ti=b},
IL(a){return a},
Ch(a){return a},
J1(a){return a},
ph:function ph(a){this.a=a},
bk(a){var s
if(typeof a=="function")throw A.k(A.b1("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Kv,a)
s[$.D3()]=a
return s},
Kv(a,b,c){t.BO.a(a)
if(A.O(c)>=1)return a.$1(b)
return a.$0()},
CM(a,b,c){return c.a(a[b])},
Fb(a,b){return a[b]},
FE(a,b,c,d){return d.a(a[b].apply(a,c))},
bI(a,b){var s=new A.am($.aj,b.i("am<0>")),r=new A.cM(s,b.i("cM<0>"))
a.then(A.fH(new A.AQ(r,b),1),A.fH(new A.AR(r),1))
return s},
AQ:function AQ(a,b){this.a=a
this.b=b},
AR:function AR(a){this.a=a},
G6(a,b,c){A.FG(c,t.x,"T","min")
return Math.min(c.a(a),c.a(b))},
G5(a,b,c){A.FG(c,t.x,"T","max")
return Math.max(c.a(a),c.a(b))},
J9(){return $.jN()},
mc:function mc(a){this.a=a},
Im(a,b,c){return J.jR(a,b,c)},
fx(a,b,c){var s=a.BYTES_PER_ELEMENT
c=A.bQ(b,c,B.d.aA(a.byteLength,s))
return J.bq(B.i.gab(a),a.byteOffset+b*s,(c-b)*s)},
kv:function kv(){},
kp:function kp(a){this.$ti=a},
kZ:function kZ(a){this.$ti=a},
vx(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=n*2,l=new Uint8Array(m)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
if(!(r<m))return A.a(l,r)
l[r]=o.charCodeAt(q>>>4&15)
r=p+1
if(!(p<m))return A.a(l,p)
l[p]=o.charCodeAt(q&15)}return A.j0(l,0,null)},
cj:function cj(a){this.a=a},
kq:function kq(){this.a=null},
h_:function h_(){},
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
k1:function k1(a,b,c){this.c=a
this.d=b
this.a=c},
Ij(){var s=$.eg()
return s},
n4:function n4(a){this.a=a},
k2:function k2(a,b){this.b=a
this.a=b},
Dw(a){if(a instanceof A.u_)return"SHA-1"
if(a instanceof A.eE)return"SHA-256"
if(a instanceof A.u0)return"SHA-384"
if(a instanceof A.d7)return"SHA-512"
return null},
fN:function fN(){},
k5:function k5(){},
k6:function k6(){},
lU:function lU(){},
lV:function lV(){},
n5:function n5(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
n6:function n6(a){this.a=a},
Dr(){return $.b6().eO(12,32)},
Ix(){return $.b6().cH()},
ID(a,b){return $.b6().cL(a,b)},
IE(){var s=$.b6().cp()
return $.b6().cM(s)},
Eu(){return $.b6().dq()},
f_:function f_(){},
hV:function hV(){},
hZ:function hZ(){},
ic:function ic(){},
kE:function kE(){},
eo:function eo(){},
u_:function u_(){},
eE:function eE(){},
u0:function u0(){},
d7:function d7(){},
us:function us(){},
nj:function nj(){},
np:function np(){},
en:function en(a){this.a=a},
cy:function cy(){},
kD:function kD(){},
mb:function mb(a){this.b=a
this.c=!1},
o5:function o5(){},
o8:function o8(){},
h5:function h5(){},
is:function is(){},
lj:function lj(){},
it:function it(a,b){this.a=a
this.$ti=b},
Ei(){return new A.iW()},
d2:function d2(a){this.a=a},
iW:function iW(){},
d3:function d3(){},
cC:function cC(){},
mg:function mg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
v2:function v2(a){this.a=a},
mw:function mw(){},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(){},
tX:function tX(){},
bp:function bp(a,b){this.b=a
this.c=b},
bs:function bs(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
lw:function lw(){},
d8:function d8(a,b,c){this.d=a
this.f=b
this.b=c},
bE:function bE(a,b){this.a=a
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
bT(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
ki(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
if((e&B.d.b1(1,31-g))>>>0!==0){d=(d^s)>>>0
c=(c^r)>>>0
b=(b^q)>>>0
a=(a^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bT(s)
a5.$flags&2&&A.C(a5)
if(0>=4)return A.a(a5,0)
a5[0]=k
k=A.bT(r)
a5.$flags&2&&A.C(a5)
if(1>=4)return A.a(a5,1)
a5[1]=k
k=A.bT(q)
a5.$flags&2&&A.C(a5)
if(2>=4)return A.a(a5,2)
a5[2]=k
k=A.bT(p)
a5.$flags&2&&A.C(a5)
if(3>=4)return A.a(a5,3)
a5[3]=k},
DD(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.i.b0(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.d.C(q,n),!1)
r.setUint32(12,B.d.R(q,n),!1)
p=J.bq(B.aC.gab(r),0,null)
o=new Uint32Array(4)
A.ki(o,a,b)
A.ki(o,a,p)
return J.bq(B.E.gab(o),0,null)},
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
if($.eY()===B.a1){s=A.fE(s)
q=A.fE(q)
p=A.fE(p)
o=A.fE(o)}a9=b4.length
if(0>=a9)return A.a(b4,0)
s^=b4[0]
if(1>=a9)return A.a(b4,1)
q^=b4[1]
if(2>=a9)return A.a(b4,2)
p^=b4[2]
if(3>=a9)return A.a(b4,3)
o^=b4[3]
n=(a9/4|0)-1
for(m=4,l=1;l<n;++l,o=k,p=r,q=f,s=h){r=B.aZ[s>>>24&255]
k=B.aX[q>>>16&255]
j=B.aY[p>>>8&255]
i=B.b0[o&255]
if(!(m<a9))return A.a(b4,m)
h=r^k^j^i^b4[m]
i=B.aZ[q>>>24&255]
j=B.aX[p>>>16&255]
k=B.aY[o>>>8&255]
r=B.b0[s&255]
g=m+1
if(!(g<a9))return A.a(b4,g)
f=i^j^k^r^b4[g]
g=B.aZ[p>>>24&255]
r=B.aX[o>>>16&255]
k=B.aY[s>>>8&255]
j=B.b0[q&255]
i=m+2
if(!(i<a9))return A.a(b4,i)
r=g^r^k^j^b4[i]
i=B.aZ[o>>>24&255]
j=B.aX[s>>>16&255]
k=B.aY[q>>>8&255]
g=B.b0[p&255]
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
if($.eY()===B.a1){a5=A.fE(a5)
a6=A.fE(a6)
a7=A.fE(a7)
a8=A.fE(a8)}b0.$flags&2&&A.C(b0)
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
Fw(a){var s,r,q,p,o,n,m,l,k,j="The bytes have been destroyed",i=a.gaN(),h=B.kM.h(0,i.gq(0))
if(h==null)throw A.k(A.b1("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.jR(B.E.gab(r),r.byteOffset,i.gq(0))
p=q.$flags|0
o=0
for(;;){n=i.a
if(n==null)A.f(A.aA(j))
if(!(o<J.aD(n)))break
n=i.a
if(n==null)A.f(A.aq(j))
m=J.ar(n,o)
p&2&&A.C(q,9)
q.setUint8(o,m);++o}l=B.d.C(i.gq(0),4)
if($.eY()===B.a1)for(o=0;o<l;++o){p=q.getUint32(4*o,!1)
if(!(o<s))return A.a(r,o)
r[o]=p}for(p=l>6,o=l;o<s;++o){m=o-1
if(!(m>=0))return A.a(r,m)
k=r[m]
m=B.d.R(o,l)
if(m===0){k=A.Fq((k<<8|k>>>24)>>>0)
m=B.d.aA(o,l)-1
if(!(m>=0&&m<30))return A.a(B.dC,m)
k^=B.dC[m]<<24}else if(p&&m===4)k=A.Fq(k)
m=o-l
if(!(m<s))return A.a(r,m)
m=r[m]
if(!(o>=0&&o<s))return A.a(r,o)
r[o]=(k^m)>>>0}return r},
Fq(a){return(B.D[a>>>24&255]<<24|B.D[a>>>16&255]<<16|B.D[a>>>8&255]<<8|B.D[a&255])>>>0},
fE(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
nq:function nq(){},
ns(a,b,c){var s,r=J.an(c),q=r.gq(c)
a.$flags&2&&A.C(a,11)
a.setUint32(b,q,!0)
b+=4
for(s=0;s<r.gq(c);++s)a.setUint8(b+s,r.h(c,s))
return b+r.gq(c)},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b){this.a=a
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
f5:function f5(a){this.a=a},
lZ:function lZ(){},
m_:function m_(){},
n2(a){var s=new Uint32Array(16),r=new Uint32Array(32)
s=new A.k_(s,r,new Uint32Array(32),a)
if($.eY()!==B.a1)A.f(A.j3("The platform should be little-endian."))
if(a<1||a>64)A.f(A.x(a,null,null))
s.d3(null)
return s},
f2(a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=4294967296
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
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=$
_.c=b
_.d=$
_.e=0
_.f=!1
_.r=c
_.w=d},
lT:function lT(){},
It(a){return new A.i4(a)},
i4:function i4(a){this.a=a},
i5:function i5(){},
f6:function f6(){},
nw:function nw(){},
i7:function i7(){},
cT:function cT(){},
DE(a){var s=$.b6().eh()
return new A.kk(s,a)},
BS(a){var s,r,q,p,o=B.a.a5(a,0,new A.nu(),t.S),n=new Uint8Array(o)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,A.l)(a),++q){p=a[q]
B.i.b0(n,r,p)
r+=p.length}return n},
BT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
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
s.bl(k,j)
i=c.b
h=c.a
r.bl(i,h)
s.ak(s,r)
r.d6(0,k,j)
q.d6(0,i,h)
r.ak(r,q)
h=$.GQ()
q.ak(h,b.d)
q.ak(q,c.d)
q.ak(q,$.D5())
p.ak(h,b.c)
p.ak(p,c.c)
o.bl(r,s)
n.bl(p,q)
m.d6(0,p,q)
l.d6(0,r,s)
s.ak(o,n)
r.ak(m,l)
q.ak(n,m)
p.ak(o,l)},
BU(a){var s,r,q,p=new Int32Array(16),o=new A.aI(p)
p=new Int32Array(16)
s=new Int32Array(16)
r=new A.aI(s)
o.f5(a.c,$.D6())
new A.aI(p).ak(a.a,o)
r.ak(a.b,o)
if(15>=s.length)return A.a(s,15)
q=s[15]
if(0>=p.length)return A.a(p,0)
p=p[0]
s.$flags&2&&A.C(s)
s[15]=(q|(p&1)<<15)>>>0
return r.hH(new Uint8Array(32))},
DF(a){var s,r,q,p,o,n,m,l,k,j=null,i=new Uint8Array(A.aJ(a))
if(31>=i.length)return A.a(i,31)
s=i[31]
r=s>>>7&1
i.$flags&2&&A.C(i)
i[31]=s&127
s=new Int32Array(16)
q=new A.aI(s)
q.dw(i)
s=$.mO()
if(q.hm(s))return j
p=new Int32Array(16)
o=new A.aI(p)
n=new Int32Array(16)
m=new A.aI(n)
o.ak(q,q)
n=$.D7()
o.bl(o,n)
m.ak(q,q)
m.ak(m,$.D5())
m.d6(0,m,n)
m.f5(m,$.D6())
l=new Int32Array(16)
k=new A.aI(l)
k.ak(o,m)
if(k.gdi())if(r===1)return j
else{s=$.GR()
return new A.dv(s,q,n,s)}o.c3($.GN().aZ())
o.f5(k,o)
m.ak(o,o)
m.bl(m,k)
if(!m.gdi())o.ak(o,$.GO())
m.ak(o,o)
m.bl(m,k)
if(!m.gdi())return j
if(0>=p.length)return A.a(p,0)
if((p[0]&1)!==r)o.bl(s,o)
m.ak(o,q)
return new A.dv(o,q,n,m)},
kl(a,b){var s,r,q,p,o,n,m,l=A.kt(),k=l.b.a
k.$flags&2&&A.C(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=l.c.a
k.$flags&2&&A.C(k)
if(0>=k.length)return A.a(k,0)
k[0]=1
k=new Int32Array(A.aJ(b.a.a))
s=new Int32Array(A.aJ(b.b.a))
r=new Int32Array(A.aJ(b.c.a))
q=new Int32Array(A.aJ(b.d.a))
b=new A.dv(new A.aI(k),new A.aI(s),new A.aI(r),new A.aI(q))
p=A.kt()
o=A.kt()
for(k=a.a,s=k.length,n=0;n<256;++n,m=p,p=b,b=m){r=B.d.C(n,16)
if(!(r<s))return A.a(k,r)
if((B.d.an(k[r],B.d.R(n,16))&1)===1){A.BT(p,l,b,o)
m=p
p=l
l=m}A.BT(p,b,b,o)}return l},
DG(a){var s,r=a.length
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
return new A.dv(new A.aI(r),new A.aI(q),new A.aI(p),new A.aI(o))},
fp(a){var s
if(a==null)s=new Int32Array(16)
else s=a
return new A.aI(s)},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nH:function nH(){},
aI:function aI(a){this.a=a},
tL:function tL(){},
ln:function ln(){this.a=null},
nv:function nv(a,b){this.a=a
this.b=b},
EF(a,b,c){var s,r,q,p
for(s=a.length,r=J.an(b),q=0;q<s;++q){p=q<r.gq(b)?(r.h(b,q)^c)>>>0:c
a.$flags&2&&A.C(a)
a[q]=p}},
i6:function i6(a){this.a=a},
m1:function m1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
m2:function m2(){},
mv:function mv(){},
i8:function i8(){},
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
BV(a){var s,r,q
if(J.aD(a)!==32)throw A.k(A.b1("Seed must be 32 bytes",null))
s=new Uint8Array(A.aJ(a))
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
s.$flags&2&&A.C(s)
s[0]=q&248
if(31>=r)return A.a(s,31)
s[31]=s[31]|64
s[31]=s[31]&127
return s},
DH(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new Int32Array(16)
new A.aI(a3).dw(a6)
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
p[k]=r}for(s=a5.length,j=254;j>=0;--j){r=B.d.an(j,3)
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
A.cb(q,$.GD(),o)
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
for(a1=1;a1<15;++a1,a0=a2){a2=q[a1]-65535-(B.d.an(a0,16)&1)
if(!(a1<16))return A.a(p,a1)
p[a1]=a2&65535}a3=q[15]
s=B.d.an(a0,16)
if(15>=16)return A.a(p,15)
p[15]=a3-32767-(s&1)
A.ko(q,p,1-(B.d.an(p[15],16)&1))}new A.aI(q).hH(a4)},
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
i9:function i9(a){this.a=a},
ny:function ny(){},
nx:function nx(){},
m7:function m7(){},
uI:function uI(){},
BW(a){return new A.P(A.aB(a),0)},
ad(a){var s,r,q,p,o,n,m,l=null,k=$.GG().aj(a)
if(k==null)throw A.k(A.y(a+" is not a valid format",l,l))
s=k.b
r=s.length
if(1>=r)return A.a(s,1)
q=s[1]
if(2>=r)return A.a(s,2)
p=s[2]
if(p==null)p=""
if(3>=r)return A.a(s,3)
o=s[3]
n=A.uC(A.i(q)+p,l)
m=o==null?0:-A.X(o,l,l)
return new A.P(n,m+p.length)},
dt(a){var s,r
try{s=A.ad(a)
return s}catch(r){if(A.av(r) instanceof A.b8)return null
else throw r}},
DL(a,b){var s,r=a.b,q=b.b
A:{if(r>q){s=new A.p(a,new A.P(b.a.a_(0,$.cQ().aT(r-q)),r))
break A}if(r<q){s=new A.p(new A.P(a.a.a_(0,$.cQ().aT(q-r)),q),b)
break A}s=new A.p(a,b)
break A}return s},
Ed(a,b){var s,r,q
if(A.Jb(a)){s=A.Ja(a)
r=a.a_(0,A.bZ($.cQ().aT(s),null))
return new A.P(r.a.aA(0,r.b),s)}q=$.Di().aT(b)
return new A.P(new A.tC().$1(a.a_(0,q)),b)},
Jb(a){var s,r,q,p=a.b
for(;;){s=$.Hu()
r=p.R(0,s)
q=$.De()
r=r.l(0,q)
if(!(r===0))break
if(s.c===0)A.f(B.Y)
p=p.bB(s)}for(;;){s=$.Df()
r=p.R(0,s).l(0,q)
if(!(r===0))break
if(s.c===0)A.f(B.Y)
p=p.bB(s)}s=p.l(0,$.jP())
return s===0},
Ja(a){var s,r,q=a,p=0
for(;;){s=q.b
r=s.l(0,$.hS())
if(!(r!==0))break;++p
r=$.Di()
q=A.bZ(q.a.a_(0,r.a),s.a_(0,r.b))}return p},
P:function P(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
nD:function nD(a){this.a=a},
tC:function tC(){},
hz:function hz(a,b){this.a=a
this.b=b},
KE(a,b){var s,r
for(;;){s=b.l(0,$.hR())
if(!(s!==0))break
r=a.R(0,b)
a=b
b=r}return a},
bZ(a,b){var s,r,q
if(b==null)return new A.cE(a,$.hS())
s=$.hR()
r=b.l(0,s)
if(r===0)throw A.k(A.b1("zero can not be used as denominator",null))
r=a.l(0,s)
if(r===0)return new A.cE(s,$.hS())
if(b.l(0,s)<0){a=a.S(0)
b=b.S(0)}s=a.a?a.S(0):a
q=A.KE(s,b.a?b.S(0):b)
return new A.cE(a.aA(0,q),b.aA(0,q))},
tD(a){return A.bZ(A.aB(a),A.aB(1))},
cE:function cE(a,b){this.a=a
this.b=b},
jU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){return new A.br(k,c,m,n,h,j,e,a4,d,a3,a,b,o,q,a6,a5,i,g,a1,a2,s,a0,a7,l,p,f,r)},
BQ(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="minimumBalance",a7="statement",a8="startFrom",a9="driveFolder",b0="closedAfter",b1="replacedFrom",b2="ownStartDate",b3="ownStartFrom",b4=b5.h(0,"id")
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
q=A.ag(B.dM,A.b(q),t.jN)
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
m=A.aw(A.b(m))
l=A.aG(b5.h(0,"billingCycleDay"))
k=A.aG(b5.h(0,"staleAfterDays"))
j=A.m(b5.h(0,"alertEmail"))
i=A.m(b5.h(0,"alertPhone"))
if(b5.h(0,"loan")==null)h=a5
else{h=b5.h(0,"loan")
h.toString
h=A.C9(t.J.a(h))}if(b5.h(0,a6)==null)g=a5
else{g=b5.h(0,a6)
g.toString
g=A.aO(t.J.a(g))}if(b5.h(0,a7)==null)f=a5
else{f=b5.h(0,a7)
f.toString
f=A.Em(t.J.a(f))}if(b5.h(0,a8)==null)e=a5
else{e=b5.h(0,a8)
e.toString
e=A.u4(t.f.a(e).G(0,t.N,t.X))}if(b5.h(0,a9)==null)d=a5
else{d=b5.h(0,a9)
d.toString
d=A.DM(t.f.a(d).G(0,t.N,t.X))}if(b5.h(0,b0)==null)c=a5
else{c=b5.h(0,b0)
c.toString
c=A.aw(A.b(c))}b=A.m(b5.h(0,"replacedBy"))
if(b5.h(0,b1)==null)a=a5
else{a=b5.h(0,b1)
a.toString
a=A.aw(A.b(a))}if(b5.h(0,b2)==null)a0=a5
else{a0=b5.h(0,b2)
a0.toString
a0=A.aw(A.b(a0))}if(b5.h(0,b3)==null)a1=a5
else{a1=b5.h(0,b3)
a1.toString
a1=A.u4(t.f.a(a1).G(0,t.N,t.X))}if(b5.h(0,"subtype")==null)a2=a5
else{a2=b5.h(0,"subtype")
a2.toString
a2=A.ag(B.dA,A.b(a2),t.vi)}a3=A.m(b5.h(0,"ifsc"))
a4=A.m(b5.h(0,"micr"))
return A.jU(j,i,s,l,n,A.m(b5.h(0,"branch")),c,p,d,o,b4,a3,r,q,h,a4,g,A.m(b5.h(0,"numberShown")),a0,a1,b,a,k,m,e,f,a2)},
MW(a){A.b(a)
return $.eZ().aM(0,a).gq(0)>=9},
FC(a,b,c,d){var s,r
if(b!=null){s=$.Hw()
s=!s.b.test(b)}else s=!1
if(s)return"an IFSC is 4 letters, a 0 and 6 letters or digits"
if(c!=null){s=$.HG()
s=!s.b.test(c)}else s=!1
if(s)return"a MICR code is 9 digits"
if(a!=null)s=B.b.I(a).length===0||a.length>80
else s=!1
if(s)return"a branch name is 1 to 80 characters"
if(d!=null){r=A.D("\\d",!0,!1).aM(0,d).gq(0)
if(r>6)return"the number as statements show it keeps at most 6 digits; type X for the rest"
s=$.HM()
if(!s.b.test(d)||r===0)return"the number as statements show it is its digits shown, with X for each hidden one"}return null},
eS(a){var s,r,q,p,o,n,m,l,k,j,i,h="the alias must look like EXAMPLEBANK-CC-1234 (last 4 digits only)",g=a.b,f=A.c([a.a,g,a.c,a.f],t.s),e=a.z
if(e!=null)f.push(e)
e=a.fy
if(e!=null)f.push(e)
if(B.a.M(f,A.Fv()))return"an entry looks like a full card or account number; only the last 4 digits are kept"
f=a.d
s=f===B.x
r=$.Hn()
if(s!==r.b.test(g))return s?"a cash wallet is named CASH and its currency":h
if(!s){s=$.HF()
g=!s.b.test(g)}else g=!1
if(g)return h
g=a.e
if(!B.e.E(g))return"currency "+g+" is not supported"
q=A.FC(e,a.fr,a.fx,a.go)
if(q!=null)return q
A:{p=a.dy
if(B.cs===p||B.ct===p)e=f!==B.M||g!=="INR"
else e=!1
if(e)return p.c+" is a savings account in INR"
if(B.bg===p&&f!==B.a7)return"SRS is a retirement account"
break A}o=a.x
if(o!=null)e=f!==B.y||o<1||o>31
else e=!1
if(e)return"a billing day is 1 to 31 and only for a credit card"
n=a.as
if(n!=null){if(f!==B.o)return"loan details are only for a loan"
m=A.G2(n,g)
if(m!=null)return m}l=a.at
if(l!=null){if(!a.gaR())return"a minimum balance is only for a savings or current account"
if(l.b!==g)return"the minimum balance must be in "+g
if(l.a.l(0,$.L())<0)return"a minimum balance is zero or more"}k=a.ax
if(k!=null){m=A.NI(k,f)
if(m!=null)return m}j=a.y
if(j!=null&&j<1)return"the stale window is at least 1 day"
g=a.db==null
i=g?a.ay:a.dx
f=i==null
if(!f&&i.a===B.an&&g){if(a.gaR())return"a start from a folder year is only for a card or a loan"
g=i.b
g.toString
if(!a.w.J(0,new A.z(g,1,1)))return"a folder-year start is 1 January of that year"
if(a.ch==null)return"a folder-year start needs the account's Drive folder"}g=f?null:i.c
f=a.ch
if(B.a.M(A.c([g,f==null?null:f.b],t.q),new A.vR()))return"a folder path looks like it holds a full card or account number"
return null},
cd:function cd(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.c=a
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
vR:function vR(){},
Jl(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a7.h(0,"currency")
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
n=A.aw(A.b(n))
m=a7.h(0,"periodEnd")
m.toString
m=A.aw(A.b(m))
l=a7.h(0,"opening")
l.toString
l=A.a2(A.ad(A.b(l)),a6)
k=a7.h(0,"closing")
k.toString
k=A.a2(A.ad(A.b(k)),a6)
j=s==null?a5:A.c0(s).F()
a6=r==null?a5:A.a2(A.ad(r),a6)
i=q==null?a5:A.aw(q)
h=A.m(a7.h(0,"ocrEngine"))
g=a7.h(0,"ocrRowsChecked")
A:{if(t.j.b(g)){f=A.c([],t.Dk)
for(e=J.Q(g),d=t.f,c=t.N,b=t.X;e.n();){a=e.gt()
a.toString
a0=d.a(a).G(0,c,b)
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
f.push(new A.l8(a1,a2,a3,A.b(a0)))}break A}f=a5
break A}e=A.c([],t.Ev)
d=t.jS.a(a7.h(0,"loans"))
d=J.Q(d==null?B.b_:d)
c=t.f
b=t.N
a0=t.X
while(d.n()){a4=d.gt()
a4.toString
e.push(A.El(c.a(a4).G(0,b,a0)))}return new A.c8(p,o,n,m,l,k,j,a6,i,h,f,e)},
FQ(a,b,c){var s=c.aC(-30)
return a.bI(b).M(0,new A.z9(s))},
NF(a,b){var s,r,q,p,o,n,m=a.ax
switch(m==null?null:m.c){case B.ce:return 31
case B.cf:return 92
case B.cg:return 184
case B.ch:return 366
case null:case void 0:break}m=J.Id(b)
s=A.B(m,A.o(m).c)
B.a.D(s,new A.Be())
m=s.length
r=m>7?B.a.dB(s,m-6-1):s
if(r.length<2)return 31
m=A.c([],t.t)
for(q=1;q<r.length;++q)m.push(r[q-1].aa(r[q]))
B.a.ba(m)
p=m.length
o=B.d.C(p-1,2)
if(!(o>=0&&o<p))return A.a(m,o)
o=m[o]
n=p/2|0
if(!(n<p))return A.a(m,n)
return B.d.C(o+m[n]+1,2)},
FB(a,b,c,d,e){var s,r,q,p
for(s=J.Q(c),r=null;s.n();){q=s.gt()
if(r==null||q.l(0,r)>0)r=q}if(r==null)return!0
p=r.aa(e)
if(d){s=a.y
return p>(s==null?b:s)}return p>A.NF(a,c)+10},
NQ(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=a5.fx,a0=t.v,a1=A.aC(a,a0),a2=A.F(a1),a3=a2.i("n<1>"),a4=A.B(new A.n(a1,a2.i("j(1)").a(new A.Bl(a6)),a3),a3.i("h.E"))
B.a.D(a4,new A.Bm())
s=a4.length===0?d:B.a.gaq(a4)
for(a=A.aC(a,a0),a0=A.F(a),a1=a0.i("j(1)").a(new A.Bn(a6)),a=B.a.gA(a),a0=new A.N(a,a1,a0.i("N<1>")),r=d;a0.n();){a1=a.gt()
a2=!0
if(r!=null){a3=a1.r
q=a3.a
p=r.a
if(q<=p)a2=q===p&&a3.b>r.b}if(a2)r=a1.r}a=a6.a
a0=a5.bI(a)
o=A.B(a0,a0.$ti.i("h.E"))
for(a0=a5.hq(a,!0),a1=J.Q(a0.a),a0=new A.N(a1,a0.b,a0.$ti.i("N<1>")),n=d;a0.n();){m=a1.gt().y.c
a2=!0
if(n!=null){a3=m.a
q=n.a
if(a3<=q)a2=a3===q&&m.b>n.b}if(a2)n=m}a0=a6.e
a1=$.L()
l=A.a2(a1,a0)
k=A.a2(a1,a0)
for(a1=a5.bI(a),a2=a1.$ti,a3=a2.i("j(h.E)").a(new A.Bo(a6)),a1=a1.gA(0),a2=new A.N(a1,a3,a2.i("N<h.E>")),j=0,i=0;a2.n();){a3=a1.gt()
if(A.jL(a3)!==B.am)continue;++j
q=a3.f
p=q.b
if(p!==a0)++i
else if(a3.e===B.k){a3=l.b
if(p!==a3)A.f(A.a6(a3,p))
q=l.a.B(0,q.a)
l=new A.q(q,a3)
h=B.e.h(0,a3)
if(h==null)A.f(A.x(a3,c,b))
if((q.b<=0?0:Math.max(q.gv().b,0))>h)A.f(A.y(a3+" allows "+A.i(h)+" decimal places",q.k(0),d))}else{a3=k.b
if(p!==a3)A.f(A.a6(a3,p))
q=k.a.B(0,q.a)
k=new A.q(q,a3)
h=B.e.h(0,a3)
if(h==null)A.f(A.x(a3,c,b))
if((q.b<=0?0:Math.max(q.gv().b,0))>h)A.f(A.y(a3+" allows "+A.i(h)+" decimal places",q.k(0),d))}}g=A.aE(a8,B.q)
a0=s==null
f=a0?d:s.d
a0=a0?d:s.f
a1=A.c([],t.F)
for(a2=a4.length,e=0;e<a4.length;a4.length===a2||(0,A.l)(a4),++e)a1.push(a4[e].d)
a=A.FB(a6,a7,a1,A.FQ(a5,a,g),g)
if(f!=null){a1=A.F(o)
new A.n(o,a1.i("j(1)").a(new A.Bp(f)),a1.i("n<1>")).gq(0)}return new A.mW(a0,f,a,j,l,k)},
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
z9:function z9(a){this.a=a},
Be:function Be(){},
Bl:function Bl(a){this.a=a},
Bm:function Bm(){},
Bn:function Bn(a){this.a=a},
Bo:function Bo(a){this.a=a},
Bp:function Bp(a){this.a=a},
NX(a){var s,r,q=A.v(t.N,t.S)
for(s=J.Q(a);s.n();){r=s.gt()
if(r.d!==B.x)q.n0(r.f,new A.BA(),new A.BB())}if(q.a===0)return null
s=q.$ti.i("ab<1,2>")
s=A.B(new A.ab(q,s),s.i("h.E"))
B.a.D(s,new A.BC())
return B.a.ga0(s).a},
cn:function cn(a,b){this.a=a
this.b=b},
BA:function BA(){},
BB:function BB(){},
BC:function BC(){},
u4(a){var s,r=null,q=a.h(0,"kind")
q.toString
switch(A.ag(B.kq,A.b(q),t.qe)){case B.an:q=a.h(0,"year")
q.toString
A.O(q)
s=a.h(0,"folder")
s.toString
s=new A.hn(B.an,q,A.b(s),r)
q=s
break
case B.cc:q=a.h(0,"statementId")
q.toString
q=new A.hn(B.cc,r,r,A.b(q))
break
case B.cd:q=B.mr
break
default:q=r}return q},
DM(a){var s,r=a.h(0,"id")
r.toString
A.b(r)
s=a.h(0,"path")
s.toString
return new A.ks(r,A.b(s))},
eH:function eH(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ks:function ks(a,b){this.a=a
this.b=b},
Em(a){var s,r,q
if(a.h(0,"source")==null)s=null
else{s=a.h(0,"source")
s.toString
s=A.ag(B.jK,A.b(s),t.u4)}if(a.h(0,"format")==null)r=null
else{r=a.h(0,"format")
r.toString
r=A.ag(B.jl,A.b(r),t.nT)}if(a.h(0,"cycle")==null)q=null
else{q=a.h(0,"cycle")
q.toString
q=A.ag(B.j3,A.b(q),t.Bu)}return new A.lB(s,r,q,A.aG(a.h(0,"day")))},
NI(a,b){var s=a.d
if(s==null)return null
if(b===B.y)return"a card has no statement day; its billing cycle day is the closing day"
if(s<1||s>31)return"the statement day is 1 to 31"
return null},
eJ:function eJ(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Mx(a){var s
if(!B.a.M(B.jk,new A.yo(a)))return"a fact is an identity or a helper fact"
s=a.d
if(B.b.I(s).length===0)return"a fact has a value"
if(B.a.M(A.c([a.b,a.c,s,a.f.c],t.s),new A.yp()))return"a fact looks like it holds a full number; only the last 4 characters are kept"
return null},
dw:function dw(a,b){this.a=a
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
yo:function yo(a){this.a=a},
yp:function yp(){},
Ff(a){var s,r,q,p={}
p.a=4
s=t.q6
r=s.i("ah<a4.E,e>")
q=A.B(new A.ah(new A.aP(A.c(a.split(""),t.s),s),s.i("e(a4.E)").a(new A.vy(p)),r),r.i("a4.E"))
return new A.aP(q,A.F(q).i("aP<1>")).cg(0)},
Fg(a){return A.hP(a,$.Ho(),t.tj.a(t.r.a(new A.vB())),null)},
zs(a){var s,r,q,p,o,n,m,l,k,j
for(s=$.Hv(),r=t.r,q=t.tj,p=a,o=0;o<3;++o)p=A.hP(p,s[o],q.a(r.a(new A.zt())),null)
for(s=$.HR().aM(0,p),s=new A.fy(s.a,s.b,s.c),r=t.ez,n=0,q="";s.n();q=j){m=s.d
l=(m==null?r.a(m):m).b
k=l.index
j=A.Fg(B.b.X(p,n,k))
if(0>=l.length)return A.a(l,0)
j=q+j+A.i(l[0])
n=k+l[0].length}s=q+A.Fg(B.b.ad(p,n))
return s.charCodeAt(0)==0?s:s},
vy:function vy(a){this.a=a},
vB:function vB(){},
zt:function zt(){},
tA:function tA(a,b,c){this.a=a
this.b=b
this.c=c},
LM(a,b){var s
switch(b){case null:case void 0:s=a===B.cw||a===B.bl
break
case B.bh:s=B.mn.u(0,a)
break
case B.cu:s=a!==B.bk&&a!==B.bl
break
default:s=null}return s},
CF(c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="currency",c1="is not a supported currency",c2=A.c([],t.eR),c3=c7.gK().gT(),c4=A.o(c3),c5=c4.i("n<h.E>"),c6=A.B(new A.n(c3,c4.i("j(h.E)").a(new A.xD(c8)),c5),c5.i("h.E"))
B.a.D(c6,new A.xE())
for(c3=c6.length,c4=c7.x2,c5=t.N,s=t.d6,r=t.s,q=t.h,p=c7.fy,o=t.dh,n=t.W,m=c7.fx,l=t.v,k=0;k<c6.length;c6.length===c3||(0,A.l)(c6),++k){j=c6[k]
i=A.d1(m,!1,l)
i.$flags=3
h=i
g=A.F(h)
f=g.i("n<1>")
e=A.B(new A.n(h,g.i("j(1)").a(new A.xF(j)),f),f.i("h.E"))
B.a.D(e,new A.xG())
h=j.a
g=c7.bI(h)
f=g.$ti
g=A.B(new A.n(g,f.i("j(h.E)").a(new A.xH()),f.i("n<h.E>")),n)
B.a.a1(g,A.Ku(c7,j))
B.a.D(g,new A.xI())
i=A.d1(p,!1,o)
i.$flags=3
f=i
d=A.F(f)
c=d.i("n<1>")
b=A.B(new A.n(f,d.i("j(1)").a(new A.xJ(j,c7)),c),c.i("h.E"))
f=A.a3(q)
for(d=e.length,a=0;a<e.length;e.length===d||(0,A.l)(e),++a)f.m(0,e[a].d)
for(d=b.length,a=0;a<b.length;b.length===d||(0,A.l)(b),++a){a0=b[a]
c=a0.d
f.m(0,c==null?a0.c:c)}a1=A.B(f,f.$ti.c)
B.a.ba(a1)
a2=new A.xL(a1)
a3=A.Mq(j)
for(f=e.length,a=0;a<e.length;e.length===f||(0,A.l)(e),++a){a4=e[a]
d=a4.d
c=a4.f
a5=c.b
a6=A.F3(g,d,a2.$1(d),a5)
a7=A.Fr(a6,a5)
c=c.a
a8=c.a
if(a8.ga8(0)<0){c=c.b
a8=new A.P(a8.S(0),c)
a9=new A.q(a8,a5)
b0=B.e.h(0,a5)
if(b0==null)A.f(A.x(a5,c0,c1))
if((c<=0?0:Math.max(a8.gv().b,0))>b0)A.f(A.y(a5+" allows "+A.i(b0)+" decimal places",a8.k(0),b9))}else{c=$.L()
a9=new A.q(c,a5)
b0=B.e.h(0,a5)
if(b0==null)A.f(A.x(a5,c0,c1))
if((c.b<=0?0:Math.max(c.gv().b,0))>b0)A.f(A.y(a5+" allows "+A.i(b0)+" decimal places",c.k(0),b9))}c="statement:"+a4.a
a5=a7.b
a8=a9.b
if(a5!==a8)A.f(A.a6(a8,a5))
a5=a7.a
a5=a9.a.B(0,new A.P(a5.a.S(0),a5.b))
b1=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b0)A.f(A.y(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
if(a5.a.ga8(0)<0){a5=$.L()
b2=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b0)A.f(A.y(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
a5=b2}else a5=b1
a8=A.c([],r)
for(b2=a6.length,b3=0;b3<a6.length;a6.length===b2||(0,A.l)(a6),++b3)a8.push(a6[b3].a)
B.a.m(c2,new A.cg(c,h,d,a9,a4.x,a7,a5,!0,a8,A.a5(c4,c5,s).h(0,c),a2.$1(d)==null,a3))}for(f=b.length,b4=j.e,a=0;a<b.length;b.length===f||(0,A.l)(b),++a){a0=b[a]
b5=a0.e
b6=a0.d
b7=b6==null?a0.c:b6
d=b5==null
b8=d?b9:b5.b
if(b8==null)b8=b4
a6=A.F3(g,b7,a2.$1(b7),b8)
a7=A.Fr(a6,b8)
c="notice:"+a0.a
if(d)d=b9
else{d=b5.a
a5=a7.b
a8=b5.b
if(a5!==a8)A.f(A.a6(a8,a5))
a5=a7.a
a5=d.B(0,new A.P(a5.a.S(0),a5.b))
b1=new A.q(a5,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b0)A.f(A.y(a8+" allows "+A.i(b0)+" decimal places",a5.k(0),b9))
if(a5.a.ga8(0)<0){d=$.L()
a5=new A.q(d,a8)
b0=B.e.h(0,a8)
if(b0==null)A.f(A.x(a8,c0,c1))
if((d.b<=0?0:Math.max(d.gv().b,0))>b0)A.f(A.y(a8+" allows "+A.i(b0)+" decimal places",d.k(0),b9))
d=a5}else d=b1}a5=A.c([],r)
for(a8=a6.length,b3=0;b3<a6.length;a6.length===a8||(0,A.l)(a6),++b3)a5.push(a6[b3].a)
B.a.m(c2,new A.cg(c,h,b6,b5,a0.r,a7,d,a0.w,a5,A.a5(c4,c5,s).h(0,c),a2.$1(b7)==null,a3))}}B.a.D(c2,new A.xK())
return c2},
Mq(a){var s=a.ax,r=s==null?null:s.c
A:{if(B.cf===r){s=93
break A}if(B.cg===r){s=186
break A}if(B.ch===r){s=372
break A}if(B.ce===r||r==null){s=31
break A}s=null}return s},
F3(a,b,c,d){var s,r,q,p,o,n,m=A.c([],t.A)
for(s=a.length,r=c!=null,q=0;q<a.length;a.length===s||(0,A.l)(a),++q){p=a[q]
o=!1
if(p.f.b===d){n=p.w
if(n.l(0,b)>0)o=!r||n.l(0,c)<=0}if(o)m.push(p)}return m},
Fr(a,b){return B.a.a5(a,A.a2($.L(),b),new A.vL(),t.B)},
Ku(a,b){var s,r,q,p=A.D("[^A-Z0-9]",!0,!1),o=A.ao(b.c.toUpperCase(),p,"")
if(o.length===0)return B.ab
p=a.gK().gT()
s=A.o(p)
r=s.i("n<h.E>")
q=A.B(new A.n(p,s.i("j(h.E)").a(new A.vp(o)),r),r.i("h.E"))
p=a.b2()
s=p.$ti
return new A.n(p,s.i("j(h.E)").a(new A.vq(a,q,b,o)),s.i("n<h.E>"))},
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
ej:function ej(a,b){this.a=a
this.b=b},
xD:function xD(a){this.a=a},
xE:function xE(){},
xF:function xF(a){this.a=a},
xG:function xG(){},
xH:function xH(){},
xI:function xI(){},
xJ:function xJ(a,b){this.a=a
this.b=b},
xL:function xL(a){this.a=a},
xK:function xK(){},
vL:function vL(){},
vp:function vp(a){this.a=a},
vq:function vq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vm:function vm(a){this.a=a},
vn:function vn(){},
vo:function vo(a){this.a=a},
Jk(a){var s,r,q,p,o=a.h(0,"currency")
o.toString
o=new A.u8(a,A.b(o))
s=new A.u7(a)
r=a.h(0,"noticeId")
r.toString
A.b(r)
q=a.h(0,"accountId")
q.toString
A.b(q)
p=a.h(0,"receivedOn")
p.toString
return new A.cJ(r,q,A.aw(A.b(p)),s.$1("statementDate"),o.$1("balance"),o.$1("minimumDue"),s.$1("dueDate"),!1)},
cJ:function cJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
u8:function u8(a,b){this.a=a
this.b=b},
u7:function u7(a){this.a=a},
cc(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Hy().aj(a):m
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
n=A.ay(q,p,o)
return A.b0(n)===q&&A.b4(n)===p&&A.au(n)===o?new A.z(q,p,o):m},
Lz(e1,e2,e3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8="bookId",c9="currency",d0=null,d1="yearStartMonth",d2="id",d3="accountId",d4="source",d5="rent",d6="an amount in rupees, zero or more",d7="deposited",d8="withdrawnOn",d9=e3.e,e0=new A.vW(e1)
switch(e3.d){case"book.settings":s=d9.h(0,c8)
if(!e0.$1(s))return"no book "+A.i(s)
r=e2.a
q=r.h(0,s)
if(d9.E(c9))p=A.m(d9.h(0,c9))
else p=q==null?d0:q.b
if(d9.E(d1))o=A.aG(d9.h(0,d1))
else o=q==null?d0:q.c
if(p!=null&&!B.e.E(p))return"currency "+p+" is not supported"
if(o!=null)n=o<1||o>12
else n=!1
if(n)return"a financial year starts in month 1 to 12"
r.j(0,A.b(s),new A.k0(p,o))
break
case"subscription.set":r=d9.h(0,d2)
r.toString
A.b(r)
n=d9.h(0,c8)
n.toString
A.b(n)
m=d9.h(0,"vendor")
m.toString
m=B.b.I(A.b(m))
l=d9.h(0,"item")
l.toString
l=B.b.I(A.b(l))
k=d9.h(0,"kind")
k.toString
A.ag(B.j9,A.b(k),t.lG)
k=d9.h(0,"cycle")
k.toString
A.ag(B.ju,A.b(k),t.e4)
k=d9.h(0,"autoRenews")
k.toString
A.cN(k)
k=A.aG(d9.h(0,"quantity"))
if(d9.h(0,"price")==null)j=d0
else{j=d9.h(0,"price")
j.toString
j=A.aO(t.f.a(j).G(0,t.N,t.X))}A.cc(d9.h(0,"renewsOn"))
i=A.m(d9.h(0,d3))
if(!e0.$1(n)||n==="personal")return"a subscription is in a company's or the property's book"
if(m.length===0||l.length===0)return"a subscription names its vendor and item"
if((k==null?1:k)<1)return"a quantity is 1 or more"
if(j!=null&&j.a.a.ga8(0)<0)return"a price is zero or more"
h=i==null
g=h?d0:e1.gK().h(0,i)
if(!h)h=g==null||g.d===B.o
else h=!1
if(h)return"it is paid from a card or account"
e2.b.j(0,r,new A.hq(r,n,m,l,k,j,i))
break
case"subscription.remove":if(e2.b.Z(0,d9.h(0,d2))==null)return"no subscription "+A.i(d9.h(0,d2))
break
case"invoice.record":r=d9.h(0,d2)
r.toString
A.b(r)
n=A.m(d9.h(0,c8))
m=d9.h(0,"vendor")
m.toString
m=B.b.I(A.b(m))
l=A.m(d9.h(0,"number"))
k=A.cc(d9.h(0,"date"))
k.toString
j=d9.h(0,"total")
j.toString
i=t.f
h=t.N
f=t.X
j=A.aO(i.a(j).G(0,h,f))
e=A.m(d9.h(0,"categoryId"))
d=d9.h(0,d4)
d.toString
A.b(d)
c=A.m(d9.h(0,"parserVersion"))
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
b=new A.iS(a0,a1,A.aO(i.a(a).G(0,h,f)))}i=n!=null
if(i&&!e0.$1(n))return"no book "+n
if(m.length===0)return"an invoice names its vendor"
if(j.a.a.ga8(0)<=0)return"an invoice total is more than zero"
f=e==null
a2=f?d0:A.a5(e1.d,h,t.G).h(0,e)
if(!f)if(a2!=null)i=i&&a2.b!==e1.bX(n)
else i=!0
else i=!1
if(i)return"an invoice's category belongs to its book"
if(b!=null){i=b.a
h=b.b
if(B.a.M(A.c([i,h,b.c],t.g),new A.vX(j.b)))return"a rent invoice's parts are zero or more, in its currency"
if(!i.B(0,h).J(0,j))return"rent and GST add up to the invoice (PH-08)"
if(a2!=null&&!A.hL(a2))return"rent is filed under an income category"}else if(a2!=null&&A.hL(a2))return"a vendor's invoice is filed under a spending category"
e2.c.j(0,r,new A.eq(r,n,m,l,k,j,e,d,c,b))
break
case"date.entered":s=d9.h(0,d2)
if(typeof s!="string")return"a date needs an id"
if(J.Y(d9.h(0,"removed"),!0)){if(e2.e.Z(0,s)==null)return"no date "+s
return d0}a3=A.cc(d9.h(0,"date"))
a4=d9.h(0,"title")
a5=d9.h(0,d4)
if(!e0.$1(d9.h(0,c8))||a3==null||typeof a4!="string"||B.b.I(a4).length===0)return"a date needs a book, a title and a real date"
if(typeof a5!="string"||B.b.I(a5).length===0)return"a date states its source (PH-04)"
r=d9.h(0,c8)
r.toString
A.b(r)
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
a8=A.aO(t.f.a(r).G(0,t.N,t.X))}if(a8!=null&&a8.a.a.ga8(0)<0)return"a fee is zero or more"
e2.f.j(0,a7.a,new A.lo())
break
case"indiaTax.entry":s=d9.h(0,d2)
a9=d9.h(0,"fyStart")
a5=d9.h(0,d4)
b0=A.aN(new A.n(B.jN,t.wx.a(new A.vY(d9)),t.km),t.nq)
if(typeof s!="string"||!A.cu(a9)||b0==null||typeof a5!="string"||B.b.I(a5).length===0)return"an entry needs its year, what it is and its source"
if(d9.h(0,"amount")==null)b1=d0
else{r=d9.h(0,"amount")
r.toString
b1=A.aO(t.f.a(r).G(0,t.N,t.X))}b2=A.m(d9.h(0,"document"))
r=b0===B.cS
if(r)n=b2==null||B.b.I(b2).length===0
else n=b1==null
if(n)return r?"name the document":"an amount from the certificate"
if(b1!=null)r=b1.b!=="INR"||b1.a.a.ga8(0)<0
else r=!1
if(r)return d6
if(b0===B.cT){b3=A.m(d9.h(0,"deductor"))
b4=A.aG(d9.h(0,"quarter"))
b5=A.m(d9.h(0,"certificateLast4"))
if(d9.h(0,"paid")==null)b6=d0
else{r=d9.h(0,"paid")
r.toString
b6=A.aO(t.f.a(r).G(0,t.N,t.X))}if(d9.h(0,d7)==null)b7=d0
else{r=d9.h(0,d7)
r.toString
b7=A.aO(t.f.a(r).G(0,t.N,t.X))}r=!0
if(b3!=null)if(B.b.I(b3).length!==0){r=A.D("\\d{5}",!0,!1)
r=r.b.test(b3)}if(r)return"name the deductor"
if(b4==null||b4<1||b4>4)return"a quarter from 1 to 4"
if(b5!=null){r=A.D("^[A-Za-z0-9]{1,4}$",!0,!1)
r=!r.b.test(b5)}else r=!0
if(r)return"a certificate keeps its number's last 4"
for(r=[b6,b7],b8=0;b8<2;++b8){b9=r[b8]
if(b9==null||b9.b!=="INR"||b9.a.a.ga8(0)<0)return d6}}else b3=d0
B.b.I(a5)
if(b2!=null)B.b.I(b2)
A.cc(d9.h(0,"on"))
if(b3!=null)B.b.I(b3)
e2.r.j(0,s,new A.kI())
break
case"account.sourceOnly":g=e1.gK().h(0,d9.h(0,d3))
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
case"loan.joint":g=e1.gK().h(0,d9.h(0,d3))
c3=d9.h(0,"joint")
if(g==null||g.d!==B.o||!A.ed(c3))return"only a loan is jointly held"
r=e2.x
n=g.a
if(c3)r.m(0,n)
else r.Z(0,n)
break
case"statement.sourceRead":s=d9.h(0,"statementId")
c4=A.cc(d9.h(0,"periodStart"))
c5=A.cc(d9.h(0,"periodEnd"))
c6=d9.h(0,d3)
if(typeof s!="string"||typeof c6!="string"||!e2.w.E(c6)||c4==null||c5==null)return"a source-only statement names its account and period"
r=e2.z
if(r.E(s))return"statement "+s+" is already read"
r.j(0,s,new A.jk(c6,c4,c5))
break
case"book.owedMentioned":s=d9.h(0,c8)
c7=d9.h(0,"month")
if(!e0.$1(s)||typeof c7!="string")return"a book and a month"
e2.Q.m(0,A.i(s)+"|"+c7)
break
default:return"not a book record operation"}return d0},
k0:function k0(a,b){this.b=a
this.c=b},
eK:function eK(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.w=e
_.x=f
_.z=g},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a,b,c,d,e,f,g,h,i,j){var _=this
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
bX:function bX(a,b){this.a=a
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
vW:function vW(a){this.a=a},
vX:function vX(a){this.a=a},
vY:function vY(a){this.a=a},
FH(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="invoiceId",b=A.c([],t.mH)
for(s=a.a7.aY(B.aj),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q].c
o=A.m(p.h(0,c))
if(o===a0){o=p.h(0,c)
o.toString
A.b(o)
n=p.h(0,"invoiceNumber")
n.toString
A.b(n)
m=A.cc(p.h(0,"invoiceDate"))
m.toString
l=p.h(0,"bookId")
l.toString
A.b(l)
k=A.ax(p.h(0,"date"))
k.toString
j=p.h(0,"seriesId")
j.toString
A.b(j)
i=p.h(0,"seq")
i.toString
A.O(i)
h=p.h(0,"number")
h.toString
A.b(h)
g=p.h(0,"amount")
g.toString
A.O(g)
f=p.h(0,"part")
f.toString
A.b(f)
e=A.aG(p.h(0,"gstPercent"))
d=p.h(0,"gst")
d.toString
A.O(d)
p=p.h(0,"reason")
p.toString
b.push(new A.bW(o,n,m,l,k,j,i,h,g,f,e,d,A.b(p)))}}B.a.D(b,new A.xR())
return b},
Mn(a,b,c){var s,r,q
A:{if("standard"===c){s=b.gi7()
break A}if("zero-rated"===c){s=b.gn9()
break A}s=b.gcZ()
break A}r=A.FH(a,"company-invoice:"+b.a)
q=A.F(r)
return s-new A.n(r,q.i("j(1)").a(new A.y_(c)),q.i("n<1>")).a5(0,0,new A.y0(),t.S)},
Ms(a,b,c,d,e,f){var s,r,q,p,o,n=a.a7,m=b.b,l=n.a6(B.ah,m),k=b.y,j=k!=null,i=j?e:"plain",h=A.c([],t.s)
if(l==null)h.push("The company's invoice issuer")
if(c<=0)h.push("An amount above zero")
if(j&&e!=="standard"&&e!=="zero-rated")h.push("Standard-rated or zero-rated")
if(c>0&&c>A.Mn(a,b,i))h.push("No more than is left to credit on that part")
s=B.b.I(f)
if(s.length===0)h.push("The reason")
r=b.d
if(d.l(0,r)<0)h.push("A date on or after the invoice")
if(h.length!==0)return new A.p(null,h)
h=l.c
q=A.m(h.h(0,"creditSeriesId"))
if(q==null){h=A.m(h.h(0,"seriesId"))
h.toString
q=h}p=A.A2(a,q,d)
o=j&&i==="standard"?B.d.C(c*k+50,100):0
n=A.m(n.a6(B.a9,q).c.h(0,"pattern"))
n.toString
n=A.yU(n,p,A.fI(A.jH(d),"{fy}"),d.a)
k=j?k:null
return new A.p(new A.bW("company-invoice:"+b.a,b.w,r,m,d,q,p,n,c,i,k,o,s),B.c)},
LA(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g="invoiceId",f=a1.e,e=f.h(0,g),d=A.cc(f.h(0,"date")),c=f.h(0,"amount"),b=f.h(0,"part"),a=f.h(0,"reason")
if(typeof e!="string"||d==null||!A.cu(c)||typeof b!="string"||typeof a!="string")return"a credit note names its invoice, date, amount, part and reason"
s=a0.a7
r=s.a6(B.a6,e)
if(r==null)return"no invoice "+e
q=A.Ms(a0,A.DA(r),c,d,b,a)
p=q.a
if(p==null)return"not credited: "+B.a.Y(q.b,", ").toLowerCase()
o=p.w
if(o!==f.h(0,"number")||p.x+p.Q!==f.h(0,"total"))return"the credit note changed since it was shown; issue it again"
n=p.a
m=A.v(t.N,t.X)
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
s.e8(new A.b2(B.aj,"company-credit:"+n+":"+o,m))
m=a0.aD.c
j=m.h(0,e)
if(j!=null){s=j.a
o=j.c
n=j.e
i=j.f
h=i.b
h=i.a9(0,A.a2(new A.P(A.aB(l+k),0- -A.et(h)),h))
k=j.w
m.j(0,e,new A.eq(s,j.b,o,j.d,n,h,j.r,k,j.x,null))}return null},
bW:function bW(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xR:function xR(){},
y_:function y_(a){this.a=a},
y0:function y0(){},
Dz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){return new A.dr(k,e,h,j,l,a4,a3,a0,r,o,n,i,g,c,a2,s,m,a1,f,a5,q,p,a6,a,d,b)},
DA(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=a8.c,a7=a6.h(0,"draftId")
a7.toString
A.b(a7)
s=a6.h(0,"bookId")
s.toString
A.b(s)
r=a6.h(0,"customerId")
r.toString
A.b(r)
q=A.ax(a6.h(0,"date"))
q.toString
p=A.ax(a6.h(0,"due"))
p.toString
o=a6.h(0,"seriesId")
o.toString
A.b(o)
n=a6.h(0,"seq")
n.toString
A.O(n)
m=a6.h(0,"number")
m.toString
A.b(m)
l=A.c([],t.Aq)
k=a6.h(0,"lines")
k.toString
k=J.dh(t.j.a(k),t.mE)
j=k.$ti
k=new A.ac(k,k.gq(0),j.i("ac<R.E>"))
i=t.N
h=t.X
j=j.i("R.E")
while(k.n()){g=k.d
g=(g==null?j.a(g):g).G(0,i,h)
f=g.h(0,"description")
f.toString
A.b(f)
e=g.h(0,"quantity")
e.toString
e=A.ad(A.b(e))
d=g.h(0,"unitPrice")
d.toString
A.O(d)
c=g.h(0,"amount")
c.toString
l.push(new A.ch(f,e,d,A.O(c),A.m(g.h(0,"gst"))))}k=A.aG(a6.h(0,"gstPercent"))
j=a6.h(0,"gst")
j.toString
A.O(j)
i=a6.h(0,"customerName")
i.toString
A.b(i)
h=a6.h(0,"customerAddress")
h.toString
A.b(h)
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
a=A.ad(A.b(a))}a0=a6.h(0,"issuerName")
a0.toString
A.b(a0)
a1=a6.h(0,"issuerAddress")
a1.toString
A.b(a1)
a2=a6.h(0,"uenLast4")
a2.toString
A.b(a2)
a3=a6.h(0,"accountId")
a3.toString
A.b(a3)
a4=a6.h(0,"bankName")
a4.toString
A.b(a4)
a5=a6.h(0,"accountLast4")
a5.toString
return A.Dz(a3,A.b(a5),g,a4,s,b,h,r,i,q,a7,p,d,j,k,a1,a0,l,e,m,c,f,n,o,a,a2)},
mF(a,b){var s,r,q,p,o=A.c([],t.Z)
for(s=a.a7.aY(B.as),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(A.m(p.c.h(0,"draftId"))===b)o.push(p)}B.a.D(o,new A.yj())
return o},
MO(a,b){var s,r,q,p,o,n=A.c([],t.Z)
for(s=a.a7.aY(B.a5),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=A.m(p.c.h(0,"bookId"))
if(o===b)n.push(p)}B.a.D(n,new A.ze())
return n},
Ma(a,b){var s,r,q,p,o,n=A.c([],t.h5)
for(s=a.a7.aY(B.a6),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=A.m(p.c.h(0,"bookId"))
if(o===b)n.push(A.DA(p))}B.a.D(n,new A.xU())
return n},
M9(a,b){var s,r,q,p,o,n,m,l=a.a7,k=l.a6(B.a5,b)
if(k==null)return B.ka
s=k.c
r=A.m(s.h(0,"bookId"))
r.toString
q=l.a6(B.ah,r)
p=A.m(s.h(0,"currency"))
if(p==null)p="SGD"
o=A.mF(a,b)
n=B.a.M(o,new A.xS())
r=A.c([],t.s)
m=q==null
if(m)r.push("The company's invoice issuer")
s=A.m(s.h(0,"customerId"))
s.toString
if(l.a6(B.a4,s)==null)r.push("The customer")
if(o.length===0)r.push("At least one line")
if(B.a.M(o,new A.xT(p)))r.push("Every line in "+p)
if(p!=="SGD"){l=m?null:J.Y(q.c.h(0,"gstRegistered"),!0)
l=l===!0&&n&&k.dc("sgdRate")==null}else l=!1
if(l)r.push("The S$ rate for its GST in S$")
return r},
FJ(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="quantity",b3="unitPrice",b4="currency",b5="is not a supported currency",b6="paymentDays",b7=A.M9(b8,b9)
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
l=A.c([],t.Aq)
for(k=A.mF(b8,b9),j=k.length,i=t.f,h=t.N,g=t.X,f=0;f<k.length;k.length===j||(0,A.l)(k),++f){e=k[f].c
d=A.m(e.h(0,"description"))
d.toString
if(typeof e.h(0,b2)=="string"){c=e.h(0,b2)
c.toString
c=A.dt(A.b(c))}else c=b1
c.toString
if(i.b(e.h(0,b3))){b=e.h(0,b3)
b.toString
b=i.a(b).G(0,h,g)
a=b.h(0,"amount")
a.toString
a=A.ad(A.b(a))
b=b.h(0,b4)
b.toString
A.b(b)
a0=new A.q(a,b)
a1=B.e.h(0,b)
if(a1==null)A.f(A.x(b,b4,b5))
if((a.b<=0?0:Math.max(a.gv().b,0))>a1)A.f(A.y(b+" allows "+A.i(a1)+" decimal places",a.k(0),b1))
b=a0}else b=b1
b=b.gbx()
if(typeof e.h(0,b2)=="string"){a=e.h(0,b2)
a.toString
a=A.dt(A.b(a))}else a=b1
a.toString
if(i.b(e.h(0,b3))){a0=e.h(0,b3)
a0.toString
a0=i.a(a0).G(0,h,g)
a2=a0.h(0,"amount")
a2.toString
a2=A.ad(A.b(a2))
a0=a0.h(0,b4)
a0.toString
A.b(a0)
a3=new A.q(a2,a0)
a1=B.e.h(0,a0)
if(a1==null)A.f(A.x(a0,b4,b5))
if((a2.b<=0?0:Math.max(a2.gv().b,0))>a1)A.f(A.y(a0+" allows "+A.i(a1)+" decimal places",a2.k(0),b1))
a0=a3}else a0=b1
a=new A.P(a.a.a_(0,A.aB(a0.gbx())),a.b).B(0,A.ad("0.5")).c9(0,B.bb).aZ().b_(0)
if(m){e=A.m(e.h(0,"gst"))
if(e==null)e="standard"}else e=b1
l.push(new A.ch(d,c,b,a,e))}a4=new A.n(l,t.qB.a(new A.ye()),t.rb).a5(0,0,new A.yf(),t.S)
k=A.ax(q.h(0,"date"))
k.toString
j=A.m(o.h(0,"seriesId"))
j.toString
a5=A.A2(b8,j,k)
i=n.c
h=A.aG(i.h(0,b6))
a6=h==null?A.aG(o.h(0,b6)):h
if(a6==null)a6=30
h=b8.gK().h(0,A.m(o.h(0,"accountId")))
h.toString
g=k.aC(a6)
s=A.m(s.a6(B.a9,j).c.h(0,"pattern"))
s.toString
s=A.yU(s,a5,A.fI(A.jH(k),"{fy}"),k.a)
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
return new A.p(A.Dz(h.a,B.b.ad(b0,b0.length-4),i,h.c,p,q,b,n.b,c,k,b9,g,a2,d,e,a9,a8,l,a0,s,a3,a,a5,j,a7,o),B.c)},
LB(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="company-invoice:",b="personal",a="company.income",a0=a3.e,a1=a0.h(0,"draftId")
if(typeof a1!="string")return"an invoice names its draft"
s=a2.a7
if(s.a6(B.a6,c+a1)!=null)return"that draft is already issued"
r=A.FJ(a2,a1)
q=r.a
if(q==null)return"not issued: "+B.a.Y(r.b,", ").toLowerCase()
p=q.w
if(p!==a0.h(0,"number")||q.gcZ()+q.z!==a0.h(0,"total"))return"the invoice changed since it was shown; issue it again"
a0=A.c([],t.s)
for(o=t.N,n=A.a5(a2.d,o,t.G).gT(),n=n.gA(n),m=q.b,l=a2.f,k=m==="personal";n.n();){j=n.gt()
i=j.b
h=l.h(0,m)
if(h==null)h=k?b:d
g=!1
if(i===(h==="member"?b:h)){i=j.a
if(!(i==="income"||B.b.bG(i,".income"))){i=j.d
if(i!=null)i=i==="income"||B.b.bG(i,".income")
else i=g}else i=!0}else i=g
if(i)a0.push(j.a)}B.a.ba(a0)
n=c+q.a
s.e8(new A.b2(B.a6,n,q.fd()))
for(l=A.mF(a2,a1),k=l.length,j=s.a,f=0;f<l.length;l.length===k||(0,A.l)(l),++f){e=l[f]
i=j.h(0,B.as)
if(i!=null)i.Z(0,e.b)}s.lR(B.a5,a1)
s=q.Q
l=q.d
k=q.gcZ()
j=q.z
i=q.cx
i=A.a2(new A.P(A.aB(k+j),0- -A.et(i)),i)
a0=B.a.u(a0,a)?a:A.aN(a0,o)
a2.aD.c.j(0,n,new A.eq(n,m,s,p,l,i,a0,"owner",d,d))
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
yj:function yj(){},
ze:function ze(){},
xU:function xU(){},
xS:function xS(){},
xT:function xT(a){this.a=a},
ye:function ye(){},
yf:function yf(){},
Mo(a){var s,r,q,p,o,n=A.v(t.N,t.C)
for(s=a.b2(),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
p=q.ch
if(p!=null)J.bU(n.aI(p,new A.y5()),q)}n.mQ(0,new A.y6())
o=A.c([],t.xI)
n.a2(0,new A.y7(o))
return o},
fS:function fS(a,b){this.a=a
this.b=b},
y5:function y5(){},
y6:function y6(){},
y4:function y4(){},
y7:function y7(a){this.a=a},
y1:function y1(){},
y2:function y2(){},
y3:function y3(){},
FT(a,b){var s,r,q,p,o,n,m,l,k,j=A.c([],t.A),i=b.a,h=a.aD.d.h(0,i)
h=J.Q(h==null?B.c:h)
s=a.b.a
while(h.n()){r=s.h(0,h.gt())
if(r!=null)j.push(r)}q=b.f
p=A.a2($.L(),q.b)
for(h=j.length,o=0;o<j.length;j.length===h||(0,A.l)(j),++o){s=j[o].f
r=p.b
if(s.b===r){s=p.a.B(0,s.a)
p=new A.q(s,r)
n=B.e.h(0,r)
if(n==null)A.f(A.x(r,"currency","is not a supported currency"))
if((s.b<=0?0:Math.max(s.gv().b,0))>n)A.f(A.y(r+" allows "+A.i(n)+" decimal places",s.k(0),null))}}h=b.y
s=h==null
m=s?null:h.glZ()
q=m==null?q:m
l=p.a.l(0,q.a)
if(b.b==null)k=B.cY
else if(j.length===0)k=B.fx
else{if(!s){if(l!==0)i=l>0&&A.Kw(a,i)
else i=!0
i=i?B.bC:B.d_}else if(l<0)i=B.bB
else i=l===0?B.bC:B.cZ
k=i}return new A.dG(b,p,k,B.a.M(j,new A.zf()))},
MR(a){var s,r,q=A.c([],t.aW)
for(s=a.aD.c,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d
q.push(A.FT(a,r))}B.a.D(q,new A.zg())
return q},
Ft(a){var s=B.b.bR(A.cP(a),A.D("[^A-Z0-9]+",!0,!1)),r=A.F(s),q=r.i("n<1>")
s=A.B(new A.n(s,r.i("j(1)").a(new A.vO()),q),q.i("h.E"))
return s},
NY(a,b){var s=A.aN(A.Ft(a),t.N)
if(s==null||b==null)return!1
return B.a.u(A.Ft(b),s)},
MQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="currency",f="is not a supported currency",e=A.c([],t.M)
for(s=A.MR(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.d
A:{if(B.cY===o){n="No rule places this bill in a book: pick its book."
break A}if(B.cZ===o){n="Paid "+p.c.k(0)+" against an invoice of "+p.a.f.k(0)+"."
break A}if(B.d_===o){n=p.c.k(0)
m=p.a.y
l=m.a
k=m.b
j=k.b
i=l.b
if(j!==i)A.f(A.a6(i,j))
l=l.a.B(0,k.a)
h=B.e.h(0,i)
if(h==null)A.f(A.x(i,g,f))
if((l.b<=0?0:Math.max(l.gv().b,0))>h)A.f(A.y(i+" allows "+A.i(h)+" decimal places",l.k(0),null))
m=m.c
k=m.b
if(k!==i)A.f(A.a6(i,k))
m=m.a
m=l.B(0,new A.P(m.a.S(0),m.b))
h=B.e.h(0,i)
if(h==null)A.f(A.x(i,g,f))
if((m.b<=0?0:Math.max(m.gv().b,0))>h)A.f(A.y(i+" allows "+A.i(h)+" decimal places",m.k(0),null))
n="Received "+n+"; the invoice expects "+new A.q(m,i).k(0)+" (rent and GST, less the tax withheld)."
break A}if(B.bB===o&&p.e){n="The shares come to "+p.c.k(0)+" of "+p.a.f.k(0)+"."
break A}n=null
break A}if(n!=null){m=p.a
l=m.a
k=m.d
if(k==null)k=""
j=m.e.k(0)
e.push(new A.W("invoice:"+l,B.c6,l,A.ao(m.c+" "+k+" of "+j+": "+n,"  "," ")))}}return e},
Kw(a,b){return B.a.M(a.a7.aY(B.ak),new A.vs(b))},
dF:function dF(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
zf:function zf(){},
zg:function zg(){},
vO:function vO(){},
vs:function vs(a){this.a=a},
Mp(a){var s,r,q,p,o,n,m,l,k,j=A.c([],t.M)
for(s=A.Mo(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.a
j.push(new A.W("cross-book:"+o,B.ae,o,"The two sides of a payment for another book disagree: "+p.b+"."))}s=A.v(t.N,t.W)
for(r=a.b2(),o=J.Q(r.a),r=new A.N(o,r.b,r.$ti.i("N<1>"));r.n();){n=o.gt()
if(n.d===B.n&&n.ch!=null&&n.at!=null){m=n.ch
m.toString
s.j(0,m,n)}}for(r=a.b2(),o=r.$ti,n=o.i("j(h.E)").a(new A.y8()),r=r.gA(0),o=new A.N(r,n,o.i("N<h.E>"));o.n();){n=r.gt()
m=n.ch
l=s.h(0,m)
if(l!=null)k=l.b===n.at&&l.at===n.b
else k=!0
if(k)continue
m.toString
B.a.m(j,new A.W("cross-book-book:"+A.i(m),B.ae,m,"The advance names "+A.i(n.at)+", but its expense is in "+l.b+"."))}return j},
y8:function y8(){},
hL(a){var s=a.a
if(!(s==="income"||B.b.bG(s,".income"))){s=a.d
if(s!=null)s=s==="income"||B.b.bG(s,".income")
else s=!1}else s=!0
return s},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ng(b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=t.N,b6=t.cl,b7=A.v(b5,b6)
for(b6=A.aC(b8.ax,b6),s=b6.length,r=0;r<s;++r){q=b6[r]
p=q.a+":"+q.b
if(q.c===B.e_)b7.Z(0,p)
else b7.j(0,p,q)}b6=A.kY(c2,b5)
for(s=new A.a1(b7,b7.r,b7.e,b7.$ti.i("a1<2>"));s.n();){o=s.d.d
if(o!=null)b6.m(0,o)}n=A.c([],t.ev)
s=b8.ghy()
o=A.o(s).i("at<1>")
m=A.B(new A.at(s,o),o.i("h.E"))
B.a.ba(m)
for(s=m.length,o=b8.b.a,l=t.W,k=b8.at,j=b9.a,i=b9.b,r=0;r<m.length;m.length===s||(0,A.l)(m),++r){h=m[r]
g=b8.ghy().h(0,h)
g.toString
f=A.a5(k,b5,b5).h(0,h)
for(e=f!=null,d=h+":",c=i,b=j;;){a=""+b+"-"+B.b.ac(B.d.k(c),2,"0")
a0=c+1
a1=A.ay(b,a0,0)
a2=B.a.mr(g,new A.AK(a),new A.AL(g))
a3=new A.z(b,c,Math.min(a2.f,A.au(a1)))
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
if(a5==null&&a1&&a7!=null){a8=a2.b===B.b5?B.m:B.k
a6=B.b.bR(a7.toUpperCase(),A.D("[^A-Z0-9]+",!0,!1))
a9=A.F(a6)
b0=a9.i("n<1>")
b1=A.B(new A.n(a6,a9.i("j(1)").a(new A.AM()),b0),b0.i("h.E"))
a6=b8.bq()
a9=a6.$ti
b0=a9.i("n<h.E>")
b2=A.B(new A.n(a6,a9.i("j(h.E)").a(new A.AN(a2,a8,b6,a3,c1,b1)),b0),b0.i("h.E"))
B.a.D(b2,new A.AO(a3))
a5=A.aN(b2,l)}a6=a5==null
if(!a6)b6.m(0,a5.a)
a9=!a1&&a6
if(a6)a1=a1?b4:q.c
else a1=b4
B.a.m(n,new A.lg(a2,b,c,a3,a5,a9,a1))}b3=c===12?new A.p(b+1,1):new A.p(b,a0)
b=b3.a
c=b3.b}}return n},
MT(a,b){var s,r,q,p,o,n,m,l=A.CF(a,b),k=A.F(l).i("aP<1>"),j=new A.aP(l,k)
for(l=new A.ac(j,j.gq(0),k.i("ac<a4.E>")),s=a.b.a,k=k.i("a4.E");l.n();){r=l.d
for(r=(r==null?k.a(r):r).y,q=A.F(r).i("aP<1>"),r=new A.aP(r,q),r=new A.ac(r,r.gq(0),q.i("ac<a4.E>")),q=q.i("a4.E");r.n();){p=r.d
p=s.h(0,p==null?q.a(p):p)
if(p==null)continue
o=a.gK()
n=p.c
o=o.h(0,n)
if(o==null)o=null
else{o=o.d
o=o===B.M||o===B.Q||o===B.x}if(o===!0)return n
m=p.ch
if(m!=null&&B.b.am(m,"bill:")){p=s.h(0,B.b.ad(m,5))
if(p!=null)return p.c}}}return null},
MC(e5,e6,e7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="currency",d8="is not a supported currency",d9=A.FP(e5,e6,31,B.bp,d6,d6),e0=e6.aC(30),e1=e5.gK().gT(),e2=A.o(e1),e3=e2.i("n<h.E>"),e4=A.B(new A.n(e1,e2.i("j(h.E)").a(new A.yN()),e3),e3.i("h.E"))
B.a.D(e4,new A.yO())
e1=t.N
e2=A.a3(e1)
for(e3=e4.length,s=0;s<e4.length;e4.length===e3||(0,A.l)(e4),++s)e2.m(0,e4[s].a)
e3=t.v
r=A.v(e1,e3)
q=A.v(e1,t.aF)
for(e3=A.aC(e5.fx,e3),p=e3.length,s=0;s<p;++s){o=e3[s]
n=e5.gK().h(0,o.b)
m=!0
if(n!=null)if(e2.u(0,n.a)){m=o.d
m=m.l(0,n.w)<0||m.l(0,e6)>0}if(m)continue
m=n.a
l=o.d
J.bU(q.aI(m,new A.yP()),l)
k=r.h(0,m)
if(k==null||l.l(0,k.d)>0)r.j(0,m,o)}j=new A.yT(r)
e3=t.dZ
i=A.c([],e3)
h=A.c([],e3)
g=A.c([],t.ic)
for(p=d9.a,m=p.length,s=0;s<p.length;p.length===m||(0,A.l)(p),++s){f=p[s]
l=f.d
if(l.l(0,e0)>0||!e2.u(0,f.a.c))continue
e=f.f
d=e===B.cO
c=d&&j.$2(f.a.c,l)
if((e===B.cN||d||e===B.cP)&&!c)continue
b=f.r
if(b==null){B.a.m(g,new A.bN())
continue}B.b.ac(B.d.k(f.c),2,"0")
l.l(0,e6)
B.a.m(i,new A.bn(B.f3,f.a.c,l,b,B.k,!0))}for(m=d9.b,l=m.length,s=0;s<m.length;m.length===l||(0,A.l)(m),++s)if(e2.u(0,m[s].c))B.a.m(g,new A.bN())
for(m=A.FW(e5),l=m.length,s=0;s<m.length;m.length===l||(0,A.l)(m),++s){a=m[s]
a0=e5.gK().h(0,a.b)
if(a0.r!=="personal")continue
a1=a.dA(e6)
a2=a.w
if(a1===B.cv){B.a.m(g,new A.bN())
continue}if(a1===B.bm){B.a.m(g,new A.bN())
continue}if(!B.ee.u(0,a1)||a2==null||a2.a.a.ga8(0)<=0)continue
a3=a.f
if(a3==null){B.a.m(g,new A.bN())
continue}if(a3.l(0,e0)>0)continue
a4=A.MT(e5,a0.a)
a5=a4!=null&&e2.u(0,a4)&&e5.gK().h(0,a4).e===a2.b
e=a5?a4:d6
a3.l(0,e6)
d=a5?i:h
B.a.m(d,new A.bn(B.f4,e,a3,a2,B.k,!0))}m=e5.gK().gT()
l=A.o(m)
e=l.i("n<h.E>")
a6=A.B(new A.n(m,l.i("j(h.E)").a(new A.yQ()),e),e.i("h.E"))
B.a.D(a6,new A.yR())
for(m=a6.length,l=t.h,e=t.pt,d=t.F,s=0;s<a6.length;a6.length===m||(0,A.l)(a6),++s){a7=a6[s]
if(a7.r!=="personal")continue
a8=a7.as
a8.toString
a9=A.CU(a7,e6).w
b0=A.c([],d)
if(a9 instanceof A.el){b1=a9.a
for(b2=a8.d;b1.l(0,e0)<=0;){B.a.m(b0,b1)
b3=b1.b
b4=b1.a
b5=b3===12?new A.p(b4+1,1):new A.p(b4,b3+1)
b6=b5.a
f=b5.b
b2.toString
if(b2>A.au(A.ay(b6,f+1,0)))break
b1=new A.z(b6,f,b2)}}else if(a9 instanceof A.fP)B.a.m(g,new A.bN())
a4=a8.w
b2=A.v(l,e)
for(b3=A.G1(e5,a7,e6).c,b4=b3.length,b7=0;b7<b3.length;b3.length===b4||(0,A.l)(b3),++b7){b8=b3[b7]
b2.j(0,b8.b,b8)}a8=a8.r
b4=a8!=null
if(b4&&a4!=null&&e2.u(0,a4)&&e5.gK().h(0,a4).e===a8.b)for(b9=b3.length,b7=0;b7<b3.length;b3.length===b9||(0,A.l)(b3),++b7){b8=b3[b7]
c0=b8.b
if(c0.l(0,e6)>=0)continue
c1=b8.d
A:{if(B.bA===c1){c2=b8.c
break A}if(B.bz===c1){c2=b8.r
break A}c2=d6
break A}if(c2==null)continue
c0.k(0)
B.a.m(i,new A.bn(B.cJ,a4,c0,c2,B.k,!0))}for(b3=b0.length,b9=a4!=null,b7=0;b7<b0.length;b0.length===b3||(0,A.l)(b0),++b7){b1=b0[b7]
c3=b2.h(0,b1)
if(c3!=null){c0=c3.d
c0=c0===B.ay||c0===B.aN}else c0=!1
if(c0)continue
if(!b4||!b9||!e2.u(0,a4)){B.a.m(g,new A.bN())
continue}if(e5.gK().h(0,a4).e!==a8.b){B.a.m(g,new A.bN())
continue}b1.k(0)
B.a.m(i,new A.bn(B.cJ,a4,b1,a8,B.k,!0))}}e1=A.a3(e1)
for(m=p.length,s=0;s<p.length;p.length===m||(0,A.l)(p),++s){l=p[s].x
l=l==null?d6:l.a
if(l!=null)e1.m(0,l)}for(e1=A.Ng(e5,e6.aC(-45),e0,B.bp,e1),p=e1.length,s=0;s<e1.length;e1.length===p||(0,A.l)(e1),++s){c4=e1[s]
c5=c4.a
m=c5.d
if(!e2.u(0,m))continue
c=c4.r===B.c_&&j.$2(m,c4.d)
if((c4.e!=null||c4.f)&&!c)continue
b=c5.r
if(b==null){B.a.m(g,new A.bN())
continue}l=c4.d
c6=l.l(0,e6)<0
e=c5.b
switch(e.a){case 0:d=B.f5
break
case 1:d=B.f6
break
case 2:d=B.cK
break
default:d=d6}a8=c4.c
B.b.ac(B.d.k(a8),2,"0")
b2=e===B.b5
b3=b2?B.m:B.k
b4=!c
if(b4)b2=!(c6&&b2)
else b2=!0
B.a.m(i,new A.bn(d,m,l,b,b3,b2))
c7=c5.e
if(e===B.bZ&&c7!=null&&e2.u(0,c7)){B.b.ac(B.d.k(a8),2,"0")
B.a.m(i,new A.bn(d,c7,l,b,B.m,!b4||!c6))}}for(e1=A.Nj(e5,e6.aC(-45),e0),p=e1.length,s=0;s<e1.length;e1.length===p||(0,A.l)(e1),++s){c8=e1[s]
if(c8.c!=null||c8.d!=null)continue
c4=c8.a
c9=c4.gh8()
if(c9==null||c9.a.a.ga8(0)<=0)continue
m=c4.ch
d0=m==null?d6:e5.gK().h(0,m)
if(d0==null||!e2.u(0,d0.a)){B.a.m(g,new A.bN())
continue}if(d0.e!==c9.b){B.a.m(g,new A.bN())
continue}m=c8.b
m.k(0)
l=d0.a
m.l(0,e6)
B.a.m(i,new A.bn(B.f7,l,m,c9,B.k,!0))}d1=A.c([],t.uD)
for(e1=e4.length,s=0;s<e4.length;e4.length===e1||(0,A.l)(e4),++s){n=e4[s]
e2=n.a
d2=r.h(0,e2)
p=n.e
m=$.L()
c3=new A.q(m,p)
d3=B.e.h(0,p)
if(d3==null)A.f(A.x(p,d7,d8))
if((m.b<=0?0:Math.max(m.gv().b,0))>d3)A.f(A.y(p+" allows "+A.i(d3)+" decimal places",m.k(0),d6))
m=d2==null
d4=0
if(!m)for(l=e5.bq(),e=J.Q(l.a),l=new A.N(e,l.b,l.$ti.i("N<1>")),d=d2.d,a8=p+" allows ";l.n();){b2=e.gt()
if(b2.c===e2){b3=b2.w
b3=b3.l(0,d)<=0||b3.l(0,e6)>0}else b3=!0
if(b3)continue
b3=b2.f
if(b3.b!==p)continue
if(b2.e===B.m)b2=b3
else{b2=$.L()
d3=B.e.h(0,p)
if(d3==null)A.f(A.x(p,d7,d8))
if((b2.b<=0?0:Math.max(b2.gv().b,0))>d3)A.f(A.y(a8+A.i(d3)+" decimal places",b2.k(0),d6))
b3=b3.a
b3=b2.B(0,new A.P(b3.a.S(0),b3.b))
b2=new A.q(b3,p)
d3=B.e.h(0,p)
if(d3==null)A.f(A.x(p,d7,d8))
if((b3.b<=0?0:Math.max(b3.gv().b,0))>d3)A.f(A.y(a8+A.i(d3)+" decimal places",b3.k(0),d6))}b3=b2.b
b4=c3.b
if(b3!==b4)A.f(A.a6(b4,b3))
b2=c3.a.B(0,b2.a)
c3=new A.q(b2,b4)
d3=B.e.h(0,b4)
if(d3==null)A.f(A.x(b4,d7,d8))
if((b2.b<=0?0:Math.max(b2.gv().b,0))>d3)A.f(A.y(b4+" allows "+A.i(d3)+" decimal places",b2.k(0),d6));++d4}else B.a.m(g,new A.bN())
d5=m?d6:d2.d
p=m?d6:d2.f
m=m?d6:d2.r
l=q.h(0,e2)
if(l==null)l=B.dG
l=A.FB(n,e7,l,A.FQ(e5,e2,e6),e6)
e=A.c([],e3)
for(d=i.length,b7=0;b7<i.length;i.length===d||(0,A.l)(i),++b7){b8=i[b7]
if(b8.d===e2)e.push(b8)}B.a.D(e,new A.yS(e6))
e2=new A.di(n,e6,p,c3,l,e,B.jW)
e2.is(n,e,m!=null,d4,c3,l,p,d5,e6)
B.a.m(d1,e2)}return new A.nK(e6,A.Mv(e5,e6),d1,h)},
Mv(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=A.c([],t.Q)
for(s=a3.gK().gT(),s=s.gA(s);s.n();){r=s.gt()
q=!1
if(r.r==="personal")if(r.e==="SGD"){q=r.d
q=q===B.M||q===B.Q}if(q)a2.push(r)}if(a2.length===0)return a1
p=a4.a
o=a4.b
s=t.hy
n=A.c([],s)
for(m=0;m<3;++m){l=o===1?new A.p(p-1,12):new A.p(p,o-1)
p=l.a
o=l.b
B.a.mi(n,0,new A.p(new A.z(p,o,1),new A.z(p,o,A.au(A.ay(p,o+1,0)))))}if(B.a.b5(a2,new A.ym(n)))return a1
s=A.c([],s)
for(r=n.length,k=0;k<n.length;n.length===r||(0,A.l)(n),++k){j=n[k]
q=j.a
if(A.G9(a3,"personal",q.b,q.a))s.push(j)}if(s.length===0)return a1
i=B.a.ga0(s).a
h=B.a.gaq(s).b
r=t.N
q=A.a3(r)
for(g=A.FP(a3,h,0,B.bp,i.aC(-31),h.aC(31)).a,f=g.length,k=0;k<g.length;g.length===f||(0,A.l)(g),++k){e=g[k].x
e=e==null?a1:e.a
if(e!=null)q.m(0,e)}r=A.a3(r)
for(g=a2.length,k=0;k<a2.length;a2.length===g||(0,A.l)(a2),++k)r.m(0,a2[k].a)
d=A.a2($.L(),"SGD")
for(a2=a3.bq(),g=J.Q(a2.a),a2=new A.N(g,a2.b,a2.$ti.i("N<1>"));a2.n();){f=g.gt()
if(!r.u(0,f.c)||f.d!==B.n||f.e!==B.k)continue
e=f.f
c=e.b
if(c!=="SGD"||!B.a.M(s,new A.yn(f)))continue
if(f.cy===B.dW||q.u(0,f.a))continue
f=d.b
if(c!==f)A.f(A.a6(f,c))
e=d.a.B(0,e.a)
d=new A.q(e,f)
b=B.e.h(0,f)
if(b==null)A.f(A.x(f,"currency","is not a supported currency"))
if((e.b<=0?0:Math.max(e.gv().b,0))>b)A.f(A.y(f+" allows "+A.i(b)+" decimal places",e.k(0),a1))}a=s.length
a2=d.a.a_(0,new A.P(A.aB(100),0))
r=A.aB(a)
a0=A.a2(new A.P(A.aB(a2.gbV().ds(0,new A.P(r,0).gbV()).f9(0).b_(0)),0- -A.et("SGD")),"SGD")
if(a===3){a2=i.b-1
if(!(a2>=0&&a2<12))return A.a(B.l,a2)
a2=h.b-1
if(!(a2>=0&&a2<12))return A.a(B.l,a2)}else{a2=A.c([],t.s)
for(r=s.length,k=0;k<s.length;s.length===r||(0,A.l)(s),++k){q=s[k].a.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
a2.push(B.l[q])}B.a.Y(a2,", ")}return new A.nI(a0)},
cY:function cY(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
bN:function bN(){},
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
AK:function AK(a){this.a=a},
AL:function AL(a){this.a=a},
AM:function AM(){},
AN:function AN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
AO:function AO(a){this.a=a},
yN:function yN(){},
yO:function yO(){},
yP:function yP(){},
yT:function yT(a){this.a=a},
yQ:function yQ(){},
yR:function yR(){},
yS:function yS(a){this.a=a},
ym:function ym(a){this.a=a},
yn:function yn(a){this.a=a},
Nh(a,b){var s,r,q,p,o=a.c
if(B.b.I(o).length===0)return"give it a name"
s=$.eZ()
if(s.aM(0,o).gq(0)<9){o=a.w
o=o!=null&&s.aM(0,o).gq(0)>=9}else o=!0
if(o)return"the name or words look like a full account number"
o=b.a
r=o.h(0,a.d)
if(r==null||!r.gaR()||r.d===B.x)return"the account must be a savings or current account"
if(a.b===B.bZ){q=o.h(0,a.e)
if(q==null||!q.gaR()||q.d===B.x||q.a===r.a)return"a move goes to another savings or current account"
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
eA:function eA(a,b){this.a=a
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
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a,b){this.a=a
this.b=b},
DN(a){var s,r,q,p,o="typicalAmount",n=a.h(0,"id")
n.toString
A.b(n)
s=a.h(0,"payee")
s.toString
A.b(s)
r=a.h(0,"fromAccountId")
r.toString
A.b(r)
q=A.aG(a.h(0,"dayOfMonth"))
if(a.h(0,o)==null)p=null
else{p=a.h(0,o)
p.toString
p=A.aO(t.J.a(p))}return new A.c1(n,s,r,q,p,A.m(a.h(0,"categoryId")))},
FO(a,b){var s,r,q
if($.eZ().aM(0,a.b).gq(0)>=9)return"the payee looks like a full account number; give a name instead"
if(!b.gaR())return"From account must be a savings or current account"
s=a.d
if(s!=null)r=s<1||s>31
else r=!1
if(r)return"Day of month is a whole number, 1 to 31"
q=a.e
r=q!=null
if(r&&q.b!==b.e)return"the amount must be in "+b.e
if(r&&q.a.l(0,$.L())<=0)return"the amount must be more than 0"
return null},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mK(a){var s,r,q,p=null,o=$.HI().aj(a)
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
dz:function dz(a,b){this.a=a
this.b=b},
il:function il(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Fu(a){var s=B.b.bR(a.toUpperCase(),$.HK()),r=A.F(s),q=r.i("n<1>")
s=A.B(new A.n(s,r.i("j(1)").a(new A.vP()),q),q.i("h.E"))
return s},
Lf(a,b){var s,r,q,p,o
if(a.length===0)return!1
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.l)(b),++r){q=b[r]
if(q==null)continue
p=A.Fu(q)
o=A.C8(p,A.F(p).c)
if(B.a.b5(a,o.geT(o)))return!0}return!1},
MF(a,b,c){var s,r=a.d
if(r==null)return null
s=A.au(A.ay(b,c+1,0))
return r>s?new A.p(new A.z(b,c,s),!0):new A.p(new A.z(b,c,r),!1)},
FP(c8,c9,d0,d1,d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=t.N,c6=A.a5(c8.w,c5,t.rv).gT(),c7=A.B(c6,A.o(c6).i("h.E"))
B.a.D(c7,new A.z_())
s=d2==null?c9.aC(-45):d2
r=d3==null?c9.aC(d0):d3
c6=t.cE
q=A.v(c5,c6)
p=A.a3(c5)
for(c6=A.aC(c8.Q,c6),o=c6.length,n=0;n<o;++n){m=c6[n]
l=m.a+":"+m.b
if(m.d)p.m(0,l)
else if(m.c===B.cM)q.Z(0,l)
else q.j(0,l,m)}c6=A.a3(c5)
for(o=new A.a1(q,q.r,q.e,q.$ti.i("a1<2>"));o.n();){k=o.d.e
if(k!=null)c6.m(0,k)}j=A.v(c5,t.iP)
if(c7.length!==0)for(c5=c8.mx(!0),o=J.Q(c5.a),c5=new A.N(o,c5.b,c5.$ti.i("N<1>")),k=t.q;c5.n();){i=o.gt()
h=i.cx
if(h!=null){g=j.h(0,h)
if(g==null){g=A.c([],k)
j.j(0,h,g)}B.a.m(g,i.z)}}f=A.c([],t.lN)
e=A.c([],t.y0)
for(c5=c7.length,o=c8.b.a,k=t.W,d=s.a,c=s.b,i=t.Ai,n=0;n<c7.length;c7.length===c5||(0,A.l)(c7),++n){b=c7[n]
if(b.d==null){B.a.m(e,b)
continue}a=A.Fu(b.b)
g=c8.bq()
a0=g.$ti
a1=a0.i("n<h.E>")
a2=a1.i("n<h.E>")
a3=A.B(new A.n(new A.n(g,a0.i("j(h.E)").a(new A.z0(b)),a1),a1.i("j(h.E)").a(new A.z1(a,j)),a2),a2.i("h.E"))
a4=A.c([],i)
for(g=b.a+":",a0=A.F(a3),a1=a0.i("j(1)"),a0=a0.i("n<1>"),a2=a0.i("h.E"),a5=c,a6=d;;){a7={}
a7.a=null
a8=A.MF(b,a6,a5)
a9=a7.a=a8.a
b0=a8.b
if(a9.l(0,r)>0)break
if(a9.l(0,s)>=0){m=q.h(0,g+(""+a6+"-"+B.b.ac(B.d.k(a5),2,"0")))
if((m==null?c4:m.e)==null)b1=c4
else{b2=m.e
b2.toString
b1=o.h(0,b2)}if(b1==null){b3=A.B(new A.n(a3,a1.a(new A.z2(a7,c6,d1)),a0),a2)
B.a.D(b3,new A.z3(a7))
b1=A.aN(b3,k)
if(b1!=null)c6.m(0,b1.a)}B.a.m(a4,new A.jm([a6,a5,a7.a,b0,b1]))}b4=a5===12?new A.p(a6+1,1):new A.p(a6,a5+1)
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
c1=(a7?c4:m.c)===B.bx
b2=b1!=null
if(b2)c2=B.cN
else if((a7?c4:m.c)===B.bw)c2=B.cO
else if((a7?c4:m.c)===B.cL)c2=B.cP
else if(c0||c1)c2=B.fh
else c2=a9.l(0,c9)<0?B.fi:B.fg
if(b2){c3=b1.f
d2=B.fc}else if(a2){c3=b7
d2=B.fd}else if(a0){c3=b5.f
d2=B.fe}else{c3=c4
d2=B.ff}B.a.m(f,new A.dy(b,b8,b9,a9,c2,c3,d2,b1))}}B.a.D(f,new A.z4())
return new A.nS(f,e)},
nR:function nR(){},
dA:function dA(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d,e,f,g,h){var _=this
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
vP:function vP(){},
z_:function z_(){},
z0:function z0(a){this.a=a},
z1:function z1(a,b){this.a=a
this.b=b},
z2:function z2(a,b,c){this.a=a
this.b=b
this.c=c},
z3:function z3(a){this.a=a},
z4:function z4(){},
NS(a,b){var s,r,q=a.a
if(q<2000||q>2100)return"the Year of Assessment is a year"
q=a.b
if(q.a.l(0,$.L())<0)return"the amount assessed is zero or more"
if(b!=null&&q.b!==b.e)return"the amount must be in "+b.e
q=a.d
s=a.e
r=[a.c,q,s]
if(B.a.M(r,new A.Bq())&&B.a.M(r,new A.Br()))return"a GIRO plan needs its GIRO, its first month and the number of instalments"
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
Bq:function Bq(){},
Br:function Br(){},
tH:function tH(a,b){this.a=a
this.b=b},
Ly(a){var s,r,q,p,o,n,m,l=A.c([],t.s)
for(s=A.a5(a.x,t.N,t.p0).gT(),r=A.o(s),q=r.i("j(h.E)").a(new A.vT()),s=s.gA(s),r=new A.N(s,q,r.i("N<h.E>"));r.n();){q=s.gt()
p=a.gK().gT()
o=A.o(p)
n=o.i("n<h.E>")
m=A.B(new A.n(p,o.i("j(h.E)").a(new A.vU(a,q)),n),n.i("h.E"))
if(!(m.length!==0&&B.a.b5(m,new A.vV(a))))B.a.m(l,q.b)}return new A.mY(l.length===0,l)},
mY:function mY(a,b){this.a=a
this.b=b},
vT:function vT(){},
vU:function vU(a,b){this.a=a
this.b=b},
vV:function vV(a){this.a=a},
vS:function vS(a){this.a=a},
Mj(a,b){var s,r,q
if(!b)return"no profile for "+A.i(a.h(0,"institution"))
s=t.yq.a(a.h(0,"threshold"))
if(s==null)return null
if(!J.Y(a.h(0,"level"),"aboveThreshold"))return"a threshold is only for aboveThreshold"
r=A.m(s.h(0,"currency"))
if(r==null||!B.e.E(r))return"currency "+A.i(r)+" is not supported"
q=s.h(0,"amount")
q.toString
if(A.ad(A.b(q)).l(0,$.L())<=0)return"a threshold is more than 0"
return null},
dl:function dl(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ka:function ka(a,b,c){this.a=a
this.b=b
this.r=c},
DO(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.m(a0.h(0,"amount")),d=A.m(a0.h(0,"occurredAtUtc")),c=A.m(a0.h(0,"receivedAtUtc")),b=A.m(a0.h(0,"balance")),a=a0.h(0,"eventKey")
a.toString
A.b(a)
s=a0.h(0,"channel")
s.toString
s=A.ag(B.jG,A.b(s),t.lj)
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
o=A.a2(A.ad(e),o)}n=d==null?f:A.c0(d).F()
m=c==null?f:A.c0(c).F()
l=A.m(a0.h(0,"payee"))
A.Cy(a0.h(0,"confidence"))
k=a0.h(0,"verified")
k.toString
A.cN(k)
A.m(a0.h(0,"parserVersion"))
k=a0.h(0,"status")
k.toString
A.ag(B.jd,A.b(k),t.gy)
k=A.m(a0.h(0,"suspicion"))
j=A.m(a0.h(0,"sender"))
i=A.m(a0.h(0,"accountLast4"))
h=A.m(a0.h(0,"occurredOn"))
h=h==null?f:A.aw(h)
if(b!=null){g=a0.h(0,"balanceCurrency")
g.toString
A.b(g)
A.a2(A.ad(b),g)}g=A.m(a0.h(0,"dueOn"))
if(g!=null)A.aw(g)
return new A.fd(a,s,r,q,p,o,n,m,l,k,j,i,h)},
fn:function fn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
cz:function cz(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Kq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=b.f
if(f!=null){s=A.a3(t.N)
for(r=a.r.a,q=new A.a1(r,r.r,r.e,A.o(r).i("a1<2>"));q.n();){p=q.d
if(p.b===f)s.m(0,a.aW(p.a))}return s.a===1?r.h(0,s.gaQ(0)):g}o=b.d
n=b.ch
s=n==null
m=g
if(!s){r=A.D("\\d+$",!0,!1).aj(n)
if(!(r==null)){r=r.b
if(0>=r.length)return A.a(r,0)
r=r[0]
m=r}}if(o==null||s||m==null||m.length<2)return g
s=t.b
l=A.v(t.N,s)
for(r=a.r.a,q=new A.a1(r,r.r,r.e,A.o(r).i("a1<2>"));q.n();){p=q.d
if(B.b.bG(p.b,m)){k=p.c
j=a.hk(k)
j=j==null?g:j.a
if(j==null){j=A.D("[^A-Z0-9]",!0,!1)
j=A.ao(k.toUpperCase(),j,"")}k=!(j===o||A.hK(k)===A.hK(o))}else k=!0
if(k)continue
p=r.h(0,a.aW(p.a))
if(p!=null)l.j(0,p.a,p)}r=A.c([],t.Q)
for(q=new A.a1(l,l.r,l.e,l.$ti.i("a1<2>")),p=b.e,k=b.r;q.n();){j=q.d
i=!1
if(j.CW==null)if(A.L3(p,j.d)){i=j.e
i=i===(k==null?g:k.b)}if(i)r.push(j)}q=A.D("^\\d{4}$",!0,!1)
if(q.b.test(n))return r.length===1&&l.a===1?B.a.gaQ(r):g
q=a.k2.h(0,A.hK(o)+"|"+n)
h=q==null?g:q.c
return h==null?g:A.aN(new A.n(r,t.cP.a(new A.vh(a,h)),t.qK),s)},
Mk(a,b,c){var s=a.aW(b)
return B.a.M(A.aC(a.fx,t.v),new A.xX(a,s,c))},
L3(a,b){var s
A:{if("card-purchase"===a||"card-refund"===a||"card-payment-received"===a){s=b===B.y
break A}s=b!==B.y&&b!==B.x
break A}return s},
vh:function vh(a,b){this.a=a
this.b=b},
xX:function xX(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b){this.a=a
this.b=b},
DW(a){var s,r,q,p,o=a.h(0,"algorithm")
o.toString
A.b(o)
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
return new A.o6(o,s,r,q,B.B.O(A.b(p)))},
o6:function o6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Eh(a){var s,r,q=a.h(0,"nonce")
q.toString
q=B.B.O(A.b(q))
s=a.h(0,"cipherText")
s.toString
s=B.B.O(A.b(s))
r=a.h(0,"mac")
r.toString
return new A.tW(q,s,B.B.O(A.b(r)))},
DX(a){var s,r,q,p,o,n,m=a.h(0,"passphraseKdf")
m.toString
s=t.f
r=t.N
q=t.X
m=A.DW(s.a(m).G(0,r,q))
p=a.h(0,"recoveryKdf")
p.toString
p=A.DW(s.a(p).G(0,r,q))
o=a.h(0,"byPassphrase")
o.toString
o=A.Eh(s.a(o).G(0,r,q))
n=a.h(0,"byRecovery")
n.toString
return new A.o7(m,p,o,A.Eh(s.a(n).G(0,r,q)))},
vD(a,b){return A.L9(a,b)},
L9(a,b){var s=0,r=A.J(t.c),q,p=2,o=[],n,m,l
var $async$vD=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.r($.Hj().br(new A.eD(a.b,new A.d2(a.c),a.a),$.HW(),b),$async$vD)
case 7:n=d
q=new A.bp(new A.bs(n,!1),null)
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
if(A.av(l) instanceof A.iW)throw A.k(new A.hu())
else throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$vD,r)},
Ab(a,b){var s=0,r=A.J(t.c),q,p,o,n,m
var $async$Ab=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:p=a.a
o=p.a
if(o!=="argon2id")A.f(A.x(o,"algorithm","unsupported"))
$.b6()
n=A
m=a.c
s=3
return A.r(new A.i3(p.d,p.b,p.c,32).dd(p.e,new A.bp(new A.bs(B.F.O(b),!1),null)),$async$Ab)
case 3:q=n.vD(m,d)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$Ab,r)},
hu:function hu(){},
tW:function tW(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w8(a,b){var s,r,q,p=a.aD.a.h(0,b),o=p==null?null:p.b
if(o!=null)return o
p=a.gK().gT()
s=A.o(p)
r=s.i("n<h.E>")
q=A.B(new A.n(p,s.i("j(h.E)").a(new A.w9(b)),r),r.i("h.E"))
if(q.length===0||B.a.M(q,new A.wa()))return"SGD"
return B.a.ga0(q).e},
w9:function w9(a){this.a=a},
wa:function wa(){},
ky:function ky(){},
IR(a){var s,r=t.N,q=t.S,p=t.p_,o=t.h,n=new A.h6(A.a3(r),new A.mh(A.v(r,t.B),A.v(r,t.Dm),A.a3(r),A.v(r,t.W)),A.c([],t.M),new A.af(A.v(r,t.G),t.rE),new A.af(A.v(r,t.R),t.AJ),A.v(r,r),new A.af(A.v(r,t.b),t.zs),new A.af(A.v(r,t.rv),t.DF),new A.af(A.v(r,t.p0),t.hl),A.v(t.g5,t.xr),A.a3(r),A.c([],t.zA),new A.af(A.v(r,t.to),t.n7),A.v(r,r),A.c([],t.yT),A.v(q,t.EL),A.v(r,r),A.v(r,t.ca),A.v(r,t.zc),A.v(r,t.c5),new A.ue(A.c([],t.e3),A.v(r,t.xt),A.a3(r)),A.c([],t.n),A.c([],t.Ec),A.c([],t.ew),A.v(r,t.A9),A.c([],t.sv),A.v(r,t.ch),A.v(r,t.Ap),A.a3(r),A.c([],t.ey),A.v(r,t.pp),new A.af(A.v(r,t.o),t.F4),new A.tZ(A.a3(p)),new A.j2(A.a3(r),t.ur),A.c([],t.xz),new A.af(A.v(r,t.y6),t.BK),A.v(r,q),new A.af(A.v(t.Dt,t.AD),t.dB),A.c([],t.aV),new A.af(A.v(r,t.d6),t.l4),A.a3(r),A.v(r,o),A.a3(r),A.a3(r),A.v(r,t.nX),A.a3(r),new A.ui(A.v(r,t.d),A.c([],t.lt),A.v(t.d3,t.cZ),A.v(o,t.y),A.v(p,t.fK),A.v(r,t.mg),A.v(r,t.jF)),new A.tE(A.v(r,t.l9),A.a3(r),A.a3(r),A.v(r,t.ud),A.c([],t.os)),new A.p2(A.v(t.P,t.Cu)),A.a3(r),new A.n3(A.v(r,t.Cv),A.v(r,t.tD),A.v(r,t.eX),A.v(r,t.a),A.v(r,t.w5),A.v(r,t.xM),A.v(r,t.aB),A.v(r,t.Ba),A.a3(r),A.v(r,t.DV),A.v(r,t.Bf),A.a3(r)))
r=a.a
q=A.o(r).i("M<2>")
r=A.B(new A.M(r,q),q.i("h.E"))
q=r.length
s=0
for(;s<r.length;r.length===q||(0,A.l)(r),++s)n.eP(r[s])
return n},
on(a,b){return B.b.l(a,b)<0?a+"|"+b:b+"|"+a},
E0(a,b,c){var s=b===B.M||b===B.Q
return a.lE(b!==B.y,b!==B.o,!s,c==null,b,c)},
E_(a,b){var s,r,q,p
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
C5(a){var s=a.d
return(s==null||s===B.L)&&a.ch==null&&a.ay==null&&a.cx==null},
IQ(a,b){var s,r,q,p
if(a.length===b.length){s=A.c([],t.sj)
for(r=0;r<a.length;++r){q=a[r]
if(!(r<b.length))return A.a(b,r)
p=b[r]
s.push(p.a===q.a&&p.b===q.b&&p.c===q.c)}s=B.a.b5(s,new A.ov())}else s=!1
return s},
n0:function n0(){},
E:function E(){},
nG:function nG(){},
bu:function bu(){},
tM:function tM(){},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
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
_.m0=c3
_.m1=c4
_.m2=c5
_.dZ=c6
_.e_=c7
_.c_=c8
_.a7=c9
_.hg=d0
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
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a,b,c,d){var _=this
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
CX(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=a1*12+a0-1,g=t.S,f=A.v(g,t.Fu)
for(s=A.B9(a,b),r=s.length,q=t.bD,p=0;p<s.length;s.length===r||(0,A.l)(s),++p){o=s[p]
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
B.a.m(n,o)}k=A.v(g,t.C)
for(g=a.bq(),s=J.Q(g.a),g=new A.N(s,g.b,g.$ti.i("N<1>")),r=t.A;g.n();){q=s.gt()
if(q.b===b){n=q.x
n=n.a*12+n.b-1
m=k.h(0,n)
if(m==null){m=A.c([],r)
k.j(0,n,m)
n=m}else n=m
B.a.m(n,q)}}g=A.c([],t.aH)
for(j=h-c+1;j<=h;++j){s=B.d.C(j,12)
r=B.d.R(j,12)+1
q=k.h(0,j)
if(q==null)q=B.ab
i=A.ay(s,r+1,1).aw(-864e8)
q=A.FS(q,b,d,new A.z(s,r,1),new A.z(A.b0(i),A.b4(i),A.au(i)))
n=f.h(0,j)
if(n==null)n=B.jX
m=k.h(0,j)
g.push(new A.hb(s,r,q,A.Gc(a,n,m==null?B.ab:m,b,d,e,r,s)))}return g},
Ga(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=new A.z(f,e,1),k=new A.z(f,e+1,1).aC(-1),j=new A.zQ(l,k),i=A.c([],t.bD)
for(s=A.B9(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.b
o=o==null?null:o.x
if(j.$1(o==null?p.a.x:o))i.push(p)}s=A.c([],t.A)
for(r=a.bq(),o=J.Q(r.a),r=new A.N(o,r.b,r.$ti.i("N<1>"));r.n();){n=o.gt()
if(n.b===b&&j.$1(n.x))s.push(n)}r=t.N
o=A.kY(c,r)
for(n=i.length,q=0;q<i.length;i.length===n||(0,A.l)(i),++q)o.m(0,i[q].a.f.b)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.l)(s),++q)o.m(0,s[q].f.b)
r=A.v(r,t.wy)
for(o=A.e8(o,o.r,A.o(o).c),n=o.$ti.c;o.n();){m=o.d
if(m==null)m=n.a(m)
r.j(0,m,new A.hb(f,e,A.FS(s,b,m,l,k),A.Gc(a,i,s,b,m,d,e,f)))}return r},
Gb(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new A.z(a9,a7,1),a=new A.z(a9,a7+1,1).aC(-1),a0=A.c([],t.Dy),a1=a5.gK().gT(),a2=A.o(a1),a3=a2.i("n<h.E>"),a4=A.B(new A.n(a1,a2.i("j(h.E)").a(new A.zR(a6,a)),a3),a3.i("h.E"))
B.a.D(a4,new A.zS())
for(a1=a4.length,a2=a5.RG,a3=t.lA,s=a5.fx,r=t.v,q=t.hy,p=0;p<a4.length;a4.length===a1||(0,A.l)(a4),++p){o=a4[p]
n=A.c([],q)
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
if(g.a===j)n.push(new A.p(g.b,g.c))}f=A.D0(a5,o)
if(f!=null)n.push(new A.p(f,a))
g=o.w
g=g.l(0,b)>0?g:b
for(;g.l(0,a)<=0;g=A.ay(g.a,g.b,g.c).aw(864e8),g=new A.z(A.b0(g),A.b4(g),A.au(g)))if(!B.a.M(n,new A.zT(g))){B.a.m(a0,new A.jV())
break}}e=a8.l(0,a)>0
d=A.a5(a5.ry,t.N,t.S).h(0,""+a9+"-"+B.b.ac(B.d.k(a7),2,"0"))
if(!e)c=B.b6
else if(a0.length===0)c=B.e8
else{a1=d!=null?B.e9:B.b6
c=a1}return new A.pc(c,e,a0,d)},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zQ:function zQ(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
jV:function jV(){},
pc:function pc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zR:function zR(a,b){this.a=a
this.b=b},
zS:function zS(){},
zT:function zT(a){this.a=a},
Gv(a,b){var s,r,q
A:{s=B.n===a
if(s){r=B.m===b
q=b}else{q=null
r=!1}if(!r)if(B.w===a)r=B.k===(s?q:b)
else r=!1
else r=!0
break A}return!r},
bP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){if(b.a.a.ga8(0)<0)A.f(A.x(b,"amount","is stored positive (LED-12)"))
return new A.V(j,d,a,a1,h,b,n,c,i,r,p,e,l,f,g,k,o,a0,s,q,m,a2)},
bg:function bg(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c,d){var _=this
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
jL(a){if(a.CW!=null)return B.e0
if(B.ed.u(0,a.y.a))return B.am
return null},
iQ:function iQ(a,b){this.a=a
this.b=b},
In(a){var s,r,q,p,o,n,m,l,k=t.yq.a(a.h(0,"flags")),j=k==null?null:k.G(0,t.N,t.X)
if(j==null)j=B.kR
k=t.d
s=A.v(t.N,k)
for(r=j.gbs(),r=r.gA(r),q=t.ns,p=t.rK;r.n();){o={}
n=r.gt()
o.a=null
m=n.a
o.a=n.b
l=A.aN(new A.n(B.dJ,q.a(new A.ni(o)),p),k)
if(l==null)throw A.k(A.y("category "+m+" has an unknown flag",o.a,null))
s.j(0,m,l)}return new A.k9(s)},
B9(a,b){var s,r,q,p,o,n,m=A.v(t.N,t.W)
for(s=a.bq(),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
m.j(0,q.a,q)}p=A.c([],t.bD)
for(s=new A.a1(m,m.r,m.e,m.$ti.i("a1<2>"));s.n();){r=s.d
if(r.b===b){q=r.ch
q=q==null?null:B.b.am(q,"cancel:")
q=q===!0}else q=!0
if(q)continue
q=r.d
if(q===B.n&&r.e===B.k)B.a.m(p,new A.d9(r,null,!1))
else{q=q===B.G
if(q&&r.e===B.m){o=r.ay
n=m.h(0,o)
if(n!=null)B.a.m(p,new A.d9(r,n,!1))
else if(q&&r.e===B.m&&o==null&&r.Q!=null)B.a.m(p,new A.d9(r,null,!0))}}}return p},
Lh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h="currency",g="is not a supported currency",f=A.v(t.T,t.B)
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
if((n.b<=0?0:Math.max(n.gv().b,0))>k)A.f(A.y(r+A.i(k)+" decimal places",n.k(0),i))
n=l}l=p.c||p.b!=null
o=o.f
if(l){l=o.b
j=$.L()
k=B.e.h(0,l)
if(k==null)A.f(A.x(l,h,g))
if((j.b<=0?0:Math.max(j.gv().b,0))>k)A.f(A.y(l+" allows "+A.i(k)+" decimal places",j.k(0),i))
o=o.a
o=j.B(0,new A.P(o.a.S(0),o.b))
j=new A.q(o,l)
k=B.e.h(0,l)
if(k==null)A.f(A.x(l,h,g))
if((o.b<=0?0:Math.max(o.gv().b,0))>k)A.f(A.y(l+" allows "+A.i(k)+" decimal places",o.k(0),i))
o=j}l=o.b
j=n.b
if(l!==j)A.f(A.a6(j,l))
o=n.a.B(0,o.a)
k=B.e.h(0,j)
if(k==null)A.f(A.x(j,h,g))
if((o.b<=0?0:Math.max(o.gv().b,0))>k)A.f(A.y(j+" allows "+A.i(k)+" decimal places",o.k(0),i))
f.j(0,m,new A.q(o,j))}s=A.c([],t.Dz)
for(r=new A.ab(f,f.$ti.i("ab<1,2>")).gA(0);r.n();){o=r.d
s.push(new A.dq(o.a,o.b))}B.a.D(s,new A.vF())
return s},
Lb(a,b){var s,r,q,p,o,n,m,l,k,j=null,i="currency",h="is not a supported currency",g=t.N,f=t.B,e=A.v(g,f)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r){q=a[r]
p=q.a.f
o=p.b
if(o===b)continue
n=e.h(0,o)
if(n==null){n=$.L()
m=new A.q(n,o)
l=B.e.h(0,o)
if(l==null)A.f(A.x(o,i,h))
if((n.b<=0?0:Math.max(n.gv().b,0))>l)A.f(A.y(o+" allows "+A.i(l)+" decimal places",n.k(0),j))
n=m}if(q.c||q.b!=null){m=$.L()
l=B.e.h(0,o)
if(l==null)A.f(A.x(o,i,h))
if((m.b<=0?0:Math.max(m.gv().b,0))>l)A.f(A.y(o+" allows "+A.i(l)+" decimal places",m.k(0),j))
p=p.a
p=m.B(0,new A.P(p.a.S(0),p.b))
m=new A.q(p,o)
l=B.e.h(0,o)
if(l==null)A.f(A.x(o,i,h))
if((p.b<=0?0:Math.max(p.gv().b,0))>l)A.f(A.y(o+" allows "+A.i(l)+" decimal places",p.k(0),j))
p=m}m=p.b
k=n.b
if(m!==k)A.f(A.a6(k,m))
p=n.a.B(0,p.a)
l=B.e.h(0,k)
if(l==null)A.f(A.x(k,i,h))
if((p.b<=0?0:Math.max(p.gv().b,0))>l)A.f(A.y(k+" allows "+A.i(l)+" decimal places",p.k(0),j))
e.j(0,o,new A.q(p,k))}g=A.v(g,f)
f=e.$ti.i("at<1>")
f=A.B(new A.at(e,f),f.i("h.E"))
B.a.ba(f)
s=f.length
r=0
for(;r<f.length;f.length===s||(0,A.l)(f),++r){o=f[r]
p=e.h(0,o)
p.toString
g.j(0,o,p)}return g},
Gc(c4,c5,c6,c7,c8,c9,d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6="currency",b7="is not a supported currency",b8=new A.z(d1,d0,1),b9=A.au(A.ay(d1,d0+1,0)),c0=new A.z(d1,d0,b9),c1=t.N,c2=A.a5(c4.d,c1,t.G),c3=t.sw.a(c4.e_.a)
if(c3.a===0)s=c9
else{c1=A.kW(c9.a,c1,t.d)
c1.a1(0,c3)
s=new A.k9(c1)}c1=A.F(c5)
c3=c1.i("n<1>")
r=A.B(new A.n(c5,c1.i("j(1)").a(new A.zU(b8,c0)),c3),c3.i("h.E"))
c1=A.F(r)
c3=c1.i("n<1>")
q=A.B(new A.n(r,c1.i("j(1)").a(new A.zV(c8)),c3),c3.i("h.E"))
p=A.a2($.L(),c8)
c1=t.B
o=A.v(t.d,c1)
n=A.ix(b9,p,!1,c1)
for(c1=q.length,c3=t.Ez,m=p,l=m,k=l,j=k,i=0,h=0;h<q.length;q.length===c1||(0,A.l)(q),++h){g=q[h]
f=!g.c
e=!f||g.b!=null
d=g.a
c=d.f
if(e){e=c.b
b=k.b
if(e!==b)A.f(A.a6(b,e))
e=k.a.B(0,c.a)
k=new A.q(e,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",e.k(0),b5))}else{e=c.b
b=j.b
if(e!==b)A.f(A.a6(b,e))
a0=c.a
a1=j.a.B(0,a0)
j=new A.q(a1,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((a1.b<=0?0:Math.max(a1.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",a1.k(0),b5))
if(A.jL(d)===B.am){b=l.b
if(e!==b)A.f(A.a6(b,e))
e=l.a.B(0,a0)
l=new A.q(e,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",e.k(0),b5));++i}}a2=d.Q
if(a2==null){e=g.b
a2=e==null?b5:e.Q}if(a2==null){if(!f||g.b!=null){e=c.b
b=$.L()
a=B.e.h(0,e)
if(a==null)A.f(A.x(e,b6,b7))
if((b.b<=0?0:Math.max(b.gv().b,0))>a)A.f(A.y(e+" allows "+A.i(a)+" decimal places",b.k(0),b5))
a0=c.a
a0=b.B(0,new A.P(a0.a.S(0),a0.b))
b=new A.q(a0,e)
a=B.e.h(0,e)
if(a==null)A.f(A.x(e,b6,b7))
if((a0.b<=0?0:Math.max(a0.gv().b,0))>a)A.f(A.y(e+" allows "+A.i(a)+" decimal places",a0.k(0),b5))
e=b}else e=c
b=e.b
a0=m.b
if(b!==a0)A.f(A.a6(a0,b))
e=m.a.B(0,e.a)
m=new A.q(e,a0)
a=B.e.h(0,a0)
if(a==null)A.f(A.x(a0,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.y(a0+" allows "+A.i(a)+" decimal places",e.k(0),b5))}else{a3=s.jE(a2,c3.a(c2))
if(a3===B.b9)a3=B.aE
e=o.h(0,a3)
if(e==null)e=p
if(!f||g.b!=null){b=c.b
a0=$.L()
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((a0.b<=0?0:Math.max(a0.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",a0.k(0),b5))
a1=c.a
a1=a0.B(0,new A.P(a1.a.S(0),a1.b))
a0=new A.q(a1,b)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((a1.b<=0?0:Math.max(a1.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",a1.k(0),b5))
b=a0}else b=c
a0=b.b
a1=e.b
if(a0!==a1)A.f(A.a6(a1,a0))
e=e.a.B(0,b.a)
a=B.e.h(0,a1)
if(a==null)A.f(A.x(a1,b6,b7))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.y(a1+" allows "+A.i(a)+" decimal places",e.k(0),b5))
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
if((b.b<=0?0:Math.max(b.gv().b,0))>a)A.f(A.y(f+" allows "+A.i(a)+" decimal places",b.k(0),b5))
c=c.a
c=b.B(0,new A.P(c.a.S(0),c.b))
b=new A.q(c,f)
a=B.e.h(0,f)
if(a==null)A.f(A.x(f,b6,b7))
if((c.b<=0?0:Math.max(c.gv().b,0))>a)A.f(A.y(f+" allows "+A.i(a)+" decimal places",c.k(0),b5))
f=b}else f=c
c=f.b
b=d.b
if(c!==b)A.f(A.a6(b,c))
f=d.a.B(0,f.a)
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,b6,b7))
if((f.b<=0?0:Math.max(f.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",f.k(0),b5))
B.a.j(n,e,new A.q(f,b))}a4=A.c([],t.g)
for(a5=p,h=0;h<b9;++h){a6=n[h]
c1=a6.b
c3=a5.b
if(c1!==c3)A.f(A.a6(c3,c1))
c1=a5.a.B(0,a6.a)
a5=new A.q(c1,c3)
a=B.e.h(0,c3)
if(a==null)A.f(A.x(c3,b6,b7))
if((c1.b<=0?0:Math.max(c1.gv().b,0))>a)A.f(A.y(c3+" allows "+A.i(a)+" decimal places",c1.k(0),b5))
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
break A}if(B.G===a9)if(b4)c3=b3
else{b3=B.m===(b1?b2:b0)
c3=b3}else c3=!1
if(c3){c3=a8.ay==null&&a8.Q==null
break A}c3=!1
break A}if(c3)++a7}return new A.pd(j.a9(0,k),k,A.Lh(q,c2,c8),o,m,l,i,a7,A.Lb(r,c8))},
bt:function bt(a,b){this.a=a
this.b=b},
k9:function k9(a){this.a=a},
ni:function ni(a){this.a=a},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a,b){this.a=a
this.b=b},
vF:function vF(){},
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
zU:function zU(a,b){this.a=a
this.b=b},
zV:function zV(a){this.a=a},
Nl(a){var s,r,q,p,o=A.o(a).i("at<1>"),n=A.B(new A.at(a,o),o.i("h.E"))
B.a.D(n,new A.AZ(a))
o=A.v(t.N,t.B)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.l)(n),++r){q=n[r]
p=a.h(0,q)
p.toString
o.j(0,q,p)}return o},
FS(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="currency",e="is not a supported currency",d=$.L(),c=A.a2(d,a2),b=A.v(t.N,t.B),a=A.a2(d,a2)
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
if(l!==k)A.f(A.a6(k,l))
m=m.a
j=c.a.B(0,m)
c=new A.q(j,k)
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,f,e))
if((j.b<=0?0:Math.max(j.gv().b,0))>i)A.f(A.y(k+" allows "+A.i(i)+" decimal places",j.k(0),g))
if(A.jL(n)===B.am){k=a.b
if(l!==k)A.f(A.a6(k,l))
j=a.a.B(0,m)
a=new A.q(j,k)
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,f,e))
if((j.b<=0?0:Math.max(j.gv().b,0))>i)A.f(A.y(k+" allows "+A.i(i)+" decimal places",j.k(0),g));++p}h=n.Q
if(h==null)++r
else{k=b.h(0,h)
if(k==null){k=$.L()
j=new A.q(k,a2)
i=B.e.h(0,a2)
if(i==null)A.f(A.x(a2,f,e))
if((k.b<=0?0:Math.max(k.gv().b,0))>i)A.f(A.y(s+A.i(i)+" decimal places",k.k(0),g))
k=j}j=k.b
if(l!==j)A.f(A.a6(j,l))
m=k.a.B(0,m)
i=B.e.h(0,j)
if(i==null)A.f(A.x(j,f,e))
if((m.b<=0?0:Math.max(m.gv().b,0))>i)A.f(A.y(j+" allows "+A.i(i)+" decimal places",m.k(0),g))
b.j(0,h,new A.q(m,j))}break
default:break}}A.Nl(b)
return new A.nU(c,p)},
nU:function nU(a,b){this.a=a
this.c=b},
AZ:function AZ(a){this.a=a},
af:function af(a,b){this.a=a
this.$ti=b},
j2:function j2(a,b){this.a=a
this.$ti=b},
Gi(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
if(a1.d!==B.o)return a
for(s=A.aC(a0.fx,t.v),r=s.length,q=a1.a,p=a,o=0;o<r;++o){n=s[o]
if(n.b===q)m=p==null||n.d.l(0,p.d)>0
else m=!1
if(m)p=n}if(p==null||p.Q.length===0)return a
for(s=a0.bI(q),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=p.c,m=p.d,l=a,k=l;s.n();){j=r.gt()
i=j.w
if(i.l(0,q)<0||i.l(0,m)>0)continue
h=$.Dg()
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
s=A.c([],t.Ev)
for(r=p.Q,q=r.length,i=d-e,o=0;h=r.length,o<h;r.length===q||(0,A.l)(r),++o){c=r[o]
if(c.e===i)s.push(c)}if(s.length===1)b=B.a.gaQ(s)
else b=h===1?B.a.gaQ(r):a
return b==null?a:new A.pk(b,m,d,k.f)},
LN(a,b){var s,r,q,p,o,n,m,l,k,j=null
if(b.d!==B.o)return B.jZ
s=A.v(t.S,t.Fb)
for(r=a.bI(b.a),q=J.Q(r.a),r=new A.N(q,r.b,r.$ti.i("N<1>"));r.n();){p=q.gt()
o=$.Dg()
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
B.a.D(r,new A.w7())
return r},
CH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.v(d,t.qD)
for(s=A.aC(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
n=c.h(0,o)
if(n==null||p.d.l(0,n.a)>0)c.j(0,o,new A.jj(p.d,p.Q))}m=A.c([],t.sA)
d=A.a3(d)
for(s=a.gK().gT(),s=s.gA(s);s.n();){l=A.Gi(a,s.gt())
if(l!=null)d.m(0,l.a.bj(""))}for(s=new A.ab(c,c.$ti.i("ab<1,2>")).gA(0),r=t.b;s.n();){o=s.d
k=o.a
j=o.b
i=a.gK().h(0,k)
if(i!=null){o=i.d
o=o!==B.y&&o!==B.o}else o=!0
if(o)continue
for(o=J.Q(j.b),h=j.a,g=i.a;o.n();){f=o.gt()
if(d.u(0,f.bj("")))continue
e=A.C0(a.cc(g),r)
e=e==null?null:e.a
B.a.m(m,new A.cw(i,f,h,e==null?g:e))}}B.a.D(m,new A.xN())
return m},
G0(a,b){var s=a.gK().gT(),r=A.o(s)
return A.aN(new A.n(s,r.i("j(h.E)").a(new A.zk(b)),r.i("n<h.E>")),t.b)},
CG(a,b){var s=A.CH(a),r=A.F(s)
return A.aN(new A.n(s,r.i("j(1)").a(new A.xM(b)),r.i("n<1>")),t.eY)},
M5(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.c([],t.M)
for(s=A.CH(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.b
n=o.c
m=n.a.l(0,$.L())
if(m!==0&&A.G0(a,o.bj(p.d))==null){m=o.bj(p.d)
l=p.a
k=o.a===B.ci?"personal loan":"instalment plan"
j=o.b.k(0)
i=p.c.k(0)
n=n.k(0)
o=o.e
o=o==null?"":", "+A.i(o)+" instalments left"
h.push(new A.W("card-loan:"+m,B.c8,l.a,l.c+" "+k+" of "+j+" is on the "+l.b+" statement to "+i+": "+n+" outstanding"+o+". Add it as a loan so each statement keeps its figures."))}}return h},
G_(a,b){var s,r,q,p,o,n,m=A.c([],t.Q)
for(s=a.gK().gT(),s=s.gA(s),r=b.a,q=r.c,p=r.e,r=r.r;s.n();){o=s.gt()
n=!1
if(o.d===B.o)if(o.CW==null)if(o.c===q)if(o.e===p)if(o.r===r){n=o.as
n=(n==null?null:n.x)==null}if(n)m.push(o)}B.a.D(m,new A.zj())
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
w7:function w7(){},
xN:function xN(){},
zk:function zk(a){this.a=a},
xM:function xM(a){this.a=a},
zj:function zj(){},
MU(a){var s,r,q,p,o,n=A.a3(t.N)
for(s=B.b.bR((a.c+" "+a.b).toLowerCase(),A.D("[^a-z0-9]+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(p.length>=3){o=A.D("^[0-9]+$",!0,!1)
o=!o.b.test(p)&&!B.mm.u(0,p)}else o=!1
if(o)n.m(0,p)}return n},
G1(d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3=null,d4="statement",d5=d8.as,d6=d5==null
if((d6?d3:d5.x)==null)s=d3
else{r=d5.x
r.toString
s=A.CG(d7,r)}r=s==null
q=r?A.Gi(d7,d8):d3
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
f=A.c([],t.F)
if(i!=null&&k!=null&&j!=null){e=i.a
d=i.b
while(f.length<j){d6=d+1
if(k<=A.au(A.ay(e,d6,0))){c=new A.z(e,d,k)
if(c.l(0,i)>0){B.a.m(f,c)
if(c.l(0,d9)>0)break}}b=d===12?new A.p(e+1,1):new A.p(e,d6)
e=b.a
d=b.b}}d6=A.c([],t.A)
m=g==null
if(!m)for(a=d7.bq(),a0=J.Q(a.a),a=new A.N(a0,a.b,a.$ti.i("N<1>"));a.n();){a1=a0.gt()
if(a1.c===g&&a1.e===B.k)d6.push(a1)}B.a.D(d6,new A.zl())
a2=A.MU(d8)
a3=A.a3(t.N)
a=A.c([],t.n)
for(a0=A.aC(d7.fx,t.v),a1=a0.length,a4=0;a4<a1;++a4){a5=a0[a4]
if(a5.b===g)a.push(a5)}a0=t.lI
a6=A.c([],a0)
for(a1=A.bO(f,0,t.h),a7=J.Q(a1.a),a8=a1.b,a1=new A.as(a7,a8,A.o(a1).i("as<1>")),a9="loan:"+d8.a+":",b0=d7.a7.a,b1=j==null,b2=l==null;a1.n();){b3={}
b4=a1.c
b4=b4>=0?new A.p(a8+b4,a7.gt()):A.f(A.ak())
b3.a=null
b3.a=b4.b
b5=b2?0:l
b6=b5-(b1?0:j)+b4.a+1
b7=d3
if(h!=null)for(b4=[!0,!1],b5=h.a,b8=h.b,a4=0;a4<2;++a4){b9=b4[a4]
for(c0=d6.length,c1=0;c1<d6.length;d6.length===c0||(0,A.l)(d6),++c1){d=d6[c1]
if(a3.u(0,d.a)||d.f.b!==b8)continue
if(Math.abs(b3.a.aa(d.x))>5)continue
c2=!1
if(b9){c3=d.f
if(b8===c3.b)c3=b5.l(0,c3.a)===0
else c3=c2
c2=c3}else if(d.f.a.l(0,b5)<0){if(d.d!==B.b3){c3=d.z
if(c3==null)c3=""
c3=B.a.M(B.b.bR(c3.toLowerCase(),A.D("[^a-z0-9]+",!0,!1)),a2.geT(a2))}else c3=!0
c2=c3}if(c2){b7=d
break}}if(b7!=null)break}if(b7!=null){a3.m(0,b7.a)
b4=b7.f
b5=h.a
b8=b4.b
c0=h.b
if(b8!==c0)A.f(A.a6(c0,b8))
b4=b4.a
b4=b5.B(0,new A.P(b4.a.S(0),b4.b))
c4=new A.q(b4,c0)
c5=B.e.h(0,c0)
if(c5==null)A.f(A.x(c0,"currency","is not a supported currency"))
if((b4.b<=0?0:Math.max(b4.gv().b,0))>c5)A.f(A.y(c0+" allows "+A.i(c5)+" decimal places",b4.k(0),d3))
b5=b3.a
b8=$.L()
c0=b4.l(0,b8)
c0=c0===0?B.ay:B.bz
b4=b4.l(0,b8)
B.a.m(a6,new A.dK(b6,b5,h,c0,b4===0?d3:c4))
continue}b4=b3.a.k(0)
b5=b0.h(0,B.bH)
b4=b5==null?d3:b5.h(0,a9+b4)
c6=d9.aa(b3.a)
if(b4!=null)c7=B.aN
else if(c6>3)c7=B.cU
else{if(c6>0)b4=B.cV
else if(c6===0)b4=B.cW
else b4=B.a.M(a,new A.zm(b3))?B.bA:B.cX
c7=b4}B.a.m(a6,new A.dK(b6,b3.a,h,c7,d3))}d6=A.a3(t.S)
for(a=a6.length,a4=0;a4<a6.length;a6.length===a||(0,A.l)(a6),++a4)d6.m(0,a6[a4].a)
a=A.c([],a0)
for(a0=A.LN(d7,d8),a1=a0.length,a4=0;a4<a0.length;a0.length===a1||(0,A.l)(a0),++a4){c8=a0[a4]
a7=c8.a
if(!d6.u(0,a7))a.push(new A.dK(a7,c8.c,c8.d,B.ay,d3))}B.a.mj(a6,0,a)
c9=A.CD(d7,d8,d9,A.FX(d7,d8.r,d9))
if(r)d0=c9==null||o.l(0,c9.c)>=0
else d0=!1
if(d0)d1=p.c
else if(c9==null)d1=d3
else{d6=c9.b
r=d6.a
a0=r.a
if(a0.a)a0=a0.S(0)
d6=A.a2(new A.P(a0,r.b),d6.b)
d1=d6}d6=A.by(a6,a.length,d3,t.pt)
d2=d6.im(0,d6.$ti.i("j(a4.E)").a(new A.zn()))
d6=b2||b1?d3:l-j+d2.gq(0)
if(d0)r=o
else r=c9==null?d3:c9.c
if(d0)a=d4
else if(c9==null)a=""
else a=c9.d===B.co?"you said":d4
a0=A.c([],t.s)
if(h==null)a0.push("instalment amount")
if(m)a0.push("paying account")
if(d1==null)a0.push("outstanding balance")
return new A.p7(d6,l,a6,d1,r,a,a0)},
cm:function cm(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d,e){var _=this
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
zl:function zl(){},
zm:function zm(a){this.a=a},
zn:function zn(){},
CU(a,b){var s,r,q,p,o,n,m,l,k=a.as
if(k==null)throw A.k(A.x(a.a,"loan","has no loan terms"))
s=k.d
r=k.f
q=s==null
p=!q
o=!p||r==null?0:A.F6(s,r,b)
if(o>0&&k.e!=null){n=k.e
n.toString
Math.max(0,n-o)}m=k.e
l=!p||r==null?0:A.F6(s,r,b.aC(-1))
p=k.a
if(q)q=B.cC
else if(m===0)q=B.eD
else q=m!=null&&m-l<=0?new A.iJ(o):A.L7(s,b)
return new A.p8(p,q)},
Fi(a,b){return new A.de(A.L6(a,b),t.dU)},
L6(a,b){return function(){var s=a,r=b
var q=0,p=1,o=[],n,m,l,k,j,i
return function $async$Fi(c,d,e){if(d===1){o.push(e)
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
F6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=A.Fi(b,c),r=s.$ti,s=new A.eb(s.a(),r.i("eb<1>")),q=b.a,p=b.b,r=r.c,o=c.a,n=c.b,m=0;s.n();){l=s.b
if(l==null)l=r.a(l)
k=l.a
j=l.b
if(a<=A.au(A.ay(k,j+1,0))){i=new A.z(k,j,a)
if(i.l(0,b)>0&&i.l(0,c)<=0)++m}else{if(!(new A.p(k,j).$s===new A.p(q,p).$s&&k===q&&j===p))l=!(new A.p(k,j).$s===new A.p(o,n).$s&&k===o&&j===n)
else l=!1
if(l)++m}}return m},
L7(a,b){var s,r,q,p=b.a,o=b.b
for(;;){s=o+1
if(a>A.au(A.ay(p,s,0)))return new A.fP(p,o)
r=new A.z(p,o,a)
if(r.l(0,b)>=0)return new A.el(r)
q=o===12?new A.p(p+1,1):new A.p(p,s)
p=q.a
o=q.b}},
ex:function ex(){},
el:function el(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
iK:function iK(){},
iJ:function iJ(a){this.a=a},
ib:function ib(){},
p8:function p8(a,b){this.a=a
this.w=b},
C9(a){var s,r,q,p,o,n,m,l=null,k="instalment",j=t.c_.a(a.h(0,"principal")),i=A.m(a.h(0,"pendingAsOf"))
if(a.h(0,"type")==null)s=l
else{s=a.h(0,"type")
s.toString
s=A.ag(B.bN,A.b(s),t.gd)}if(j==null)r=l
else{r=j.h(0,"amount")
r.toString
r=A.ad(A.b(r))
q=j.h(0,"currency")
q.toString
q=A.a2(r,A.b(q))
r=q}q=A.aG(a.h(0,"instalmentCount"))
p=A.aG(a.h(0,"paymentDay"))
o=A.aG(a.h(0,"pendingInstalments"))
n=i==null?l:A.aw(i)
if(a.h(0,k)==null)m=l
else{m=a.h(0,k)
m.toString
m=A.aO(t.f.a(m).G(0,t.N,t.X))}return new A.h8(s,r,q,p,o,n,m,A.m(a.h(0,"payingAccountId")),A.m(a.h(0,"cardLoan")))},
G2(a,b){var s,r,q,p,o,n=a.b,m=n!=null
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
dL:function dL(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
MV(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.zo()
if(B.a.M(A.c([d,a0,a2],t.s),A.Fv())||A.Fz(a3)||A.Fz(c))return B.m1
p=new A.zq(f)
for(o=[new A.p(d,"Instalments"),new A.p(a0,"Payment day"),new A.p(a2,"Pending instalments")],n=0;n<3;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null&&p.$1(l)==null)return new A.p(g,k+" is a whole number")}s=new A.zp(f,b)
r=null
q=null
for(o=[new A.p(a3,"Loan amount"),new A.p(c,"Instalment")],n=0;n<2;++n){m=o[n]
l=m.a
k=m.b
if(f.$1(l)!=null){m=f.$1(l)
m.toString
m=A.Gn(m)==null}else m=!1
if(m)return new A.p(g,k+" is an amount: digits, commas and one point")}try{r=f.$1(a3)==null?g:s.$1(a3)}catch(j){if(A.av(j) instanceof A.b8)return new A.p(g,"Loan amount has more decimal places than "+b+" allows")
else throw j}try{q=f.$1(c)==null?g:s.$1(c)}catch(j){if(A.av(j) instanceof A.b8)return new A.p(g,"Instalment has more decimal places than "+b+" allows")
else throw j}i=new A.h8(a4,r,p.$1(d),p.$1(a0),p.$1(a2),a1,q,e,a)
h=A.G2(i,b)
return h==null?new A.p(i,g):new A.p(g,h)},
zo:function zo(){},
zq:function zq(a){this.a=a},
zp:function zp(a,b){this.a=a
this.b=b},
El(a){var s,r,q,p,o,n,m,l,k=a.h(0,"kind")
k.toString
k=A.ag(B.jM,A.b(k),t.iL)
s=a.h(0,"started")
s.toString
s=A.aw(A.b(s))
r=a.h(0,"outstanding")
r.toString
q=t.f
p=t.N
o=t.X
r=A.aO(q.a(r).G(0,p,o))
if(a.h(0,"ends")==null)n=null
else{n=a.h(0,"ends")
n.toString
n=A.aw(A.b(n))}m=A.aG(a.h(0,"remaining"))
if(a.h(0,"amount")==null)q=null
else{l=a.h(0,"amount")
l.toString
o=A.aO(q.a(l).G(0,p,o))
q=o}return new A.ho(k,s,r,n,m,q,A.m(a.h(0,"reference")))},
ho:function ho(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ft:function ft(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b){this.a=a
this.b=b},
aE(a,b){var s,r=a.F()
a.F()
s=r.aw(288e8)
return new A.z(A.b0(s),A.b4(s),A.au(s))},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
CP(a,b){var s
if(b!=="INR"||a.length<=3)return A.hP(a,A.D("\\B(?=(\\d{3})+(?!\\d))",!0,!1),t.tj.a(t.r.a(new A.z6())),null)
s=a.length-3
return A.hP(B.b.X(a,0,s),A.D("\\B(?=(\\d{2})+(?!\\d))",!0,!1),t.tj.a(t.r.a(new A.z7())),null)+","+B.b.ad(a,s)},
z6:function z6(){},
z7:function z7(){},
nJ:function nJ(){},
a6(a,b){return new A.kg(a,b)},
a2(a,b){var s=A.et(b)
if(a.gee()>s)A.f(A.y(b+" allows "+s+" decimal places",a.k(0),null))
return new A.q(a,b)},
aO(a){var s,r=a.h(0,"amount")
r.toString
r=A.ad(A.b(r))
s=a.h(0,"currency")
s.toString
return A.a2(r,A.b(s))},
et(a){var s=B.e.h(0,a)
if(s==null)throw A.k(A.x(a,"currency","is not a supported currency"))
return s},
kg:function kg(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b
this.c=$},
kF:function kF(a){this.a=a},
ai:function ai(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Na(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=" or ",b0=b4.b2(),b1=b0.$ti,b2=b1.i("n<h.E>"),b3=A.B(new A.n(b0,b1.i("j(h.E)").a(new A.Ao()),b2),b2.i("h.E"))
B.a.D(b3,new A.Af())
b0=A.F(b3)
b1=b0.i("j(1)")
b0=b0.i("n<1>")
b2=b0.i("h.E")
s=A.B(new A.n(b3,b1.a(new A.Ag(b4)),b0),b2)
r=A.B(new A.n(b3,b1.a(new A.Ah(b4)),b0),b2)
b0=t.C
q=A.v(t.B,b0)
for(b1=r.length,p=0;p<r.length;r.length===b1||(0,A.l)(r),++p){o=r[p]
J.bU(q.aI(o.f,new A.Ai()),o)}b1=t.N
n=A.v(b1,b0)
m=A.v(b1,b0)
for(b2=s.length,l=t.tx,k=t.BA,j=t.fx,i=t.yL,h=i.i("h.E"),g=t.q,f=t.A,p=0;e=s.length,p<e;s.length===b2||(0,A.l)(s),++p){d=s[p]
e=A.c([],f)
c=q.h(0,d.f)
c=J.Q(c==null?B.ab:c)
b=d.w
while(c.n()){a=c.gt()
a0=a.w
if(b.aa(a0)>=0&&b.aa(a0)>=0&&b.aa(a0)<=5)e.push(a)}if(e.length===0)continue
c=A.c([d.z],g)
for(b=d.a,a=b4.e5(b),a0=J.Q(a.a),a=new A.N(a0,a.b,a.$ti.i("N<1>"));a.n();)c.push(a0.gt().z)
a1=A.B(new A.n(e,j.a(new A.Aj(b4,new A.ah(c,l.a(new A.Ak()),k))),i),h)
if(a1.length===0)m.j(0,b,e)
else n.j(0,b,a1)}a2=A.v(b1,b0)
for(p=0;p<s.length;s.length===e||(0,A.l)(s),++p){d=s[p]
b0=n.h(0,d.a)
if(b0==null)b0=B.ab
b2=b0.length
a3=0
for(;a3<b0.length;b0.length===b2||(0,A.l)(b0),++a3)J.bU(a2.aI(b0[a3].a,new A.Al()),d)}a4=new A.Ae(b4)
a5=A.c([],t.nt)
a6=A.c([],t.M)
for(b0=s.length,p=0;p<s.length;s.length===b0||(0,A.l)(s),++p){d=s[p]
b2=d.a
a7=m.h(0,b2)
if(a7!=null){l=d.f.k(0)
k=A.i(a4.$1(d))
j=d.w.k(0)
i=A.F(a7)
i=new A.ah(a7,i.i("e(1)").a(a4),i.i("ah<1,e>")).Y(0,a9)
h=a7.length===1?"that card's bank":"their banks"
B.a.m(a6,new A.W("card-bill?:"+b2,B.P,b2,l+" left "+k+" on "+j+": it may pay "+i+", but nothing names "+h+"."))
continue}a8=n.h(0,b2)
if(a8==null)continue
if(a8.length>1){l=A.F(a8)
B.a.m(a6,new A.W("card-bill?:"+b2,B.P,b2,d.f.k(0)+" left "+A.i(a4.$1(d))+" on "+d.w.k(0)+": it may pay "+new A.ah(a8,l.i("e(1)").a(a4),l.i("ah<1,e>")).Y(0,a9)+"."))}else{b2=a2.h(0,B.a.gaQ(a8).a)
b2.toString
if(J.aD(b2)===1){B.a.gaQ(a8)
B.a.m(a5,new A.k8())}}}for(b0=r.length,p=0;p<r.length;r.length===b0||(0,A.l)(r),++p){o=r[p]
b2=o.a
a8=a2.h(0,b2)
if(a8==null||J.aD(a8)<2)continue
B.a.m(a6,new A.W("card-bill?:"+b2,B.P,b2,o.f.k(0)+" paid to "+A.i(a4.$1(o))+" on "+o.w.k(0)+" may come from "+J.Dp(a8,new A.Am(a4),b1).Y(0,a9)+"."))}B.a.D(a6,new A.An())
return new A.nf(a6)},
ne:function ne(){},
k8:function k8(){},
nf:function nf(a){this.b=a},
Ao:function Ao(){},
Af:function Af(){},
Ag:function Ag(a){this.a=a},
Ah:function Ah(a){this.a=a},
Ai:function Ai(){},
Ak:function Ak(){},
Aj:function Aj(a,b){this.a=a
this.b=b},
Ad:function Ad(a){this.a=a},
Al:function Al(){},
Ae:function Ae(a){this.a=a},
Am:function Am(a){this.a=a},
An:function An(){},
D0(a,b){var s,r,q,p,o,n,m,l,k,j=A.c([],t.F)
for(s=A.aC(a.RG,t.lA),r=s.length,q=b.a,p=0;p<r;++p){o=s[p]
if(o.a===q)j.push(o.c)}if(j.length===0)return null
s=A.c([],t.n)
for(r=A.aC(a.fx,t.v),n=r.length,p=0;p<n;++p){m=r[p]
if(m.b===q)s.push(m)}B.a.D(s,new A.AW())
if(s.length!==0){r=B.a.gaq(s).f.a.l(0,$.L())
r=r!==0}else r=!1
if(r)return null
l=B.a.cS(j,new A.AX())
k=(s.length!==0&&B.a.gaq(s).d.l(0,l)>0?B.a.gaq(s).d:l).aC(1)
if(a.bI(q).M(0,new A.AY(k)))return null
return k},
NJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.w
g=g.l(0,c)>0?g:c
s=b.CW
r=s!=null&&s.l(0,d)<0?s:d
if(g.l(0,r)>0)return!0
q=A.c([],t.hy)
for(p=A.aC(a.fx,t.v),o=p.length,n=b.a,m=0;m<o;++m){l=p[m]
if(l.b===n&&l.r!=null)q.push(new A.p(l.c,l.d))}for(p=A.aC(a.RG,t.lA),o=p.length,m=0;m<o;++m){k=p[m]
if(k.a===n)q.push(new A.p(k.b,k.c))}j=A.D0(a,b)
if(j!=null)q.push(new A.p(j,r))
B.a.D(q,new A.Bj())
for(p=q.length,i=g,m=0;m<q.length;q.length===p||(0,A.l)(q),++m){o=q[m]
h=o.b
if(o.a.l(0,i)>0)break
if(h.l(0,i)>=0){k=A.ay(h.a,h.b,h.c).aw(864e8)
i=new A.z(A.b0(k),A.b4(k),A.au(k))}if(i.l(0,r)>0)return!0}return i.l(0,r)>0},
N3(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=A.c([],t.lz),a3=a7.gK().gT(),a4=A.o(a3),a5=a4.i("n<h.E>"),a6=A.B(new A.n(a3,a4.i("j(h.E)").a(new A.zC(a7)),a5),a5.i("h.E"))
B.a.D(a6,new A.zD())
for(a3=a6.length,a4=a7.RG,a5=t.lA,s=a7.fx,r=t.v,q=t.hy,p=0;p<a6.length;a6.length===a3||(0,A.l)(a6),++p){o=a6[p]
n=new A.zF(a7,o)
m=A.c([],q)
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
if(e.a===i&&e.c.l(0,h)>=0)m.push(new A.p(e.b,e.c))}d=A.D0(a7,o)
if(d!=null){k=d.l(0,a9)<=0
c=d}else{c=null
k=!1}if(k)m.push(new A.p(c,a9))
B.a.D(m,new A.zE())
for(k=m.length,g=0;g<m.length;m.length===k||(0,A.l)(m),++g){j=m[g]
b=j.a
a=j.b
if(b.l(0,h)>0){e=A.ay(b.a,b.b,b.c).aw(-864e8)
a0=new A.z(A.b0(e),A.b4(e),A.au(e))
B.a.m(a2,new A.iA(i,h,a0,n.$2(h,a0)))}e=A.ay(a.a,a.b,a.c).aw(864e8)
a1=new A.z(A.b0(e),A.b4(e),A.au(e))
if(a1.l(0,h)>0)h=a1}if(o.CW==null&&h.aa(a9)>45)B.a.m(a2,new A.iA(i,h,null,n.$2(h,a9)))}return a2},
N2(a,b){var s,r,q,p,o,n,m,l=A.c([],t.M)
for(s=A.N3(a,B.eG,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.a
n=p.b.k(0)
m=a.gK().h(0,o)
m.toString
l.push(new A.W("missing-statement:"+o+":"+n,B.c1,o,A.KB(a,m,p,b)))}return l},
KB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="No statement for ",h=A.c([],t.n)
for(s=A.aC(a.fx,t.v),r=s.length,q=b.a,p=b.w,o=0;o<r;++o){n=s[o]
if(n.b===q&&n.d.l(0,p)>=0)h.push(n)}m=B.a.M(h,new A.vu(c))?"between two that were read":"before the first one read"
l=c.c
if(l!=null)k=i+b.b+" covers "+c.b.k(0)+" to "+l.k(0)+", "+m+"."
else{h=h.length===0&&c.b.J(0,p)
s=c.b
r=i+b.b
k=h?r+" has been read since its history start, "+s.k(0)+".":r+" covers the "+s.aa(d)+" days from "+s.k(0)+"."}j=c.d
A:{if(0===j){h=""
break A}if(1===j){h=" 1 alert in that time waits for it."
break A}h=" "+j+" alerts in that time wait for it."
break A}return k+h+" Add it from Statements, or say the bank sent none."},
N1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.n)
for(s=A.aC(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)f.push(p)}if(f.length<2)return B.k_
s=A.c([],t.hy)
for(r=f.length,q=0;q<f.length;f.length===r||(0,A.l)(f),++q){p=f[q]
s.push(new A.p(p.c,p.d))}for(r=A.aC(a.RG,t.lA),o=r.length,q=0;q<o;++q){n=r[q]
if(n.a===b)s.push(new A.p(n.b,n.c))}B.a.D(s,new A.zx())
r=A.a3(t.l1)
for(o=f.length,q=0;q<f.length;f.length===o||(0,A.l)(f),++q){m=f[q].d
r.m(0,new A.hy(m.b,m.a))}l=new A.zA()
k=new A.zB()
j=A.B(r,r.$ti.c)
B.a.D(j,new A.zy(l))
i=new A.zz(s)
f=A.c([],t.l7)
s=l.$1(B.a.ga0(j))
if(typeof s!=="number")return s.B()
h=s+1
for(;;){s=l.$1(B.a.gaq(j))
if(typeof s!=="number")return A.CQ(s)
if(!(h<s))break
g=k.$1(h)
s=r.u(0,g)
if(!s){s=g.b
o=g.a
n=A.ay(s,o+1,1).aw(-864e8)
if(!i.$2(new A.z(s,o,1),new A.z(A.b0(n),A.b4(n),A.au(n))))f.push(g)}++h}return f},
u6:function u6(){},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AW:function AW(){},
AX:function AX(){},
AY:function AY(a){this.a=a},
Bj:function Bj(){},
zC:function zC(a){this.a=a},
zD:function zD(){},
zF:function zF(a,b){this.a=a
this.b=b},
zG:function zG(a,b){this.a=a
this.b=b},
zE:function zE(){},
vu:function vu(a){this.a=a},
zx:function zx(){},
zA:function zA(){},
zB:function zB(){},
zy:function zy(a){this.a=a},
zz:function zz(a){this.a=a},
N6(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="currency",a7="is not a supported currency",a8=A.c([],t.fB),a9=A.v(t.N,t.C)
for(s=b0.b2(),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
J.bU(a9.aI(q.c,new A.zL()),q)}for(s=new A.a1(a9,a9.r,a9.e,a9.$ti.i("a1<2>"));s.n();)J.mR(s.d,new A.zM())
p=new A.zO()
for(s=A.aC(b0.fx,t.v),r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
m=b0.gK().h(0,q)
if(m==null||n.d.l(0,m.w)<0)continue
l=n.f
k=l.b
j=$.L()
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
g=j.b<=0
if((g?0:Math.max(j.gv().b,0))>h)A.f(A.y(k+" allows "+A.i(h)+" decimal places",j.k(0),a5))
f=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((g?0:Math.max(j.gv().b,0))>h)A.f(A.y(k+" allows "+A.i(h)+" decimal places",j.k(0),a5))
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
if((a3.b<=0?0:Math.max(a3.gv().b,0))>h)A.f(A.y(b+A.i(h)+" decimal places",a3.k(0),a5))
a4=a2.a
a4=a3.B(0,new A.P(a4.a.S(0),a4.b))
a2=new A.q(a4,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((a4.b<=0?0:Math.max(a4.gv().b,0))>h)A.f(A.y(b+A.i(h)+" decimal places",a4.k(0),a5))}a3=a1.d
if(a3!=null)a3=(a3===B.n||a3===B.w)&&a1.Q==null
else a3=!0
if(a3){++a
a3=a2.b
a4=f.b
if(a3!==a4)A.f(A.a6(a4,a3))
a3=f.a.B(0,a2.a)
f=new A.q(a3,a4)
h=B.e.h(0,a4)
if(h==null)A.f(A.x(a4,a6,a7))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>h)A.f(A.y(a4+" allows "+A.i(h)+" decimal places",a3.k(0),a5))}else{a3=a2.b
a4=i.b
if(a3!==a4)A.f(A.a6(a4,a3))
a3=i.a.B(0,a2.a)
i=new A.q(a3,a4)
h=B.e.h(0,a4)
if(h==null)A.f(A.x(a4,a6,a7))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>h)A.f(A.y(a4+" allows "+A.i(h)+" decimal places",a3.k(0),a5))}}++d}g=n.e
a3=g.b
if(a3!==k)A.f(A.a6(k,a3))
g=g.a
g=l.a.B(0,new A.P(g.a.S(0),g.b))
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a6,a7))
if((g.b<=0?0:Math.max(g.gv().b,0))>h)A.f(A.y(b+A.i(h)+" decimal places",g.k(0),a5))
B.a.m(a8,new A.dM(q,n.a,j,c,new A.q(g,k),i,a,a0))}s=t.wg
r=A.v(s,t.S)
for(s=A.bO(a8,0,s),q=J.Q(s.a),l=s.b,s=new A.as(q,l,A.o(s).i("as<1>"));s.n();){j=s.c
j=j>=0?new A.p(l+j,q.gt()):A.f(A.ak())
r.j(0,j.b,j.a)}B.a.D(a8,new A.zN(r))
return a8},
N5(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="currency",b="is not a supported currency",a=A.c([],t.M)
for(s=A.N6(a0),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=!1
if(p.r===0)if(p.x===0){o=p.f
n=p.e
m=n.b
l=o.b
if(m!==l)A.f(A.a6(l,m))
n=n.a
n=o.a.B(0,new A.P(n.a.S(0),n.b))
k=B.e.h(0,l)
if(k==null)A.f(A.x(l,c,b))
if((n.b<=0?0:Math.max(n.gv().b,0))>k)A.f(A.y(l+" allows "+A.i(k)+" decimal places",n.k(0),d))
o=n.l(0,$.L())
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
if(f!==e)A.f(A.a6(e,f))
h=h.a
h=j.a.B(0,new A.P(h.a.S(0),h.b))
k=B.e.h(0,e)
if(k==null)A.f(A.x(e,c,b))
j=h.b
f=j<=0
if((f?0:Math.max(h.gv().b,0))>k)A.f(A.y(e+" allows "+A.i(k)+" decimal places",h.k(0),d))
h=h.a
j=new A.P(h.a?h.S(0):h,j)
k=B.e.h(0,e)
if(k==null)A.f(A.x(e,c,b))
if((f?0:Math.max(j.gv().b,0))>k)A.f(A.y(e+" allows "+A.i(k)+" decimal places",j.k(0),d))
a.push(new A.W("month-check:"+o,B.b7,o,"The transactions filed on "+n+" from "+m+" to "+l+" come to "+i+", but the statement moved "+g+" (off by "+new A.q(j,e).k(0)+"). A transaction is missing, extra or has the wrong amount."))}}return a},
dM:function dM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
zL:function zL(){},
zM:function zM(){},
zO:function zO(){},
zN:function zN(a){this.a=a},
Mz(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6="currency",b7="is not a supported currency",b8=t.A,b9=A.c([],b8),c0=A.c([],b8)
for(s=c1.b2(),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
p=q.d
if(p==null&&q.e===B.m&&q.ay==null)B.a.m(b9,q)
if(p===B.a0){o=q.ch
o=o==null?null:B.b.am(o,"forbook:")
n=o===!0}else n=!1
if((p===B.n||n)&&q.e===B.k)B.a.m(c0,q)}B.a.D(b9,new A.yq())
s=A.a3(t.p_)
for(r=b9.length,m=0;m<b9.length;b9.length===r||(0,A.l)(b9),++m){l=b9[m]
s.m(0,new A.p(l.c,l.f.b))}k=A.v(t.ER,t.C)
for(r=c0.length,m=0;m<c0.length;c0.length===r||(0,A.l)(c0),++m){j=c0[m]
q=j.c
p=j.f.b
if(!s.u(0,new A.p(q,p)))continue
o=j.z
J.bU(k.aI(new A.bA(q,p,A.cP(o==null?"":o)),new A.yr()),j)}for(r=new A.a1(k,k.r,k.e,k.$ti.i("a1<2>"));r.n();)J.mR(r.d,new A.ys())
i=new A.e5(c1.b.c,t.iB)
r=t.N
q=A.v(r,t.B)
for(p=c0.length,m=0;m<c0.length;c0.length===p||(0,A.l)(c0),++m){j=c0[m]
if(j.d===B.a0&&s.u(0,new A.p(j.c,j.f.b))){o=j.f.b
h=$.L()
g=B.e.h(0,o)
if(g==null)A.f(A.x(o,b6,b7))
if((h.b<=0?0:Math.max(h.gv().b,0))>g)A.f(A.y(o+" allows "+A.i(g)+" decimal places",h.k(0),null))
q.j(0,j.a,new A.q(h,o))}}if(q.a!==0)for(s=c1.b2(),p=J.Q(s.a),s=new A.N(p,s.b,s.$ti.i("N<1>"));s.n();){o=p.gt()
f=o.ay
if(o.d===B.a_&&f!=null&&q.E(f)){h=q.h(0,f)
o=o.f
e=h.a
d=o.b
h=h.b
if(d!==h)A.f(A.a6(h,d))
o=e.B(0,o.a)
g=B.e.h(0,h)
if(g==null)A.f(A.x(h,b6,b7))
if((o.b<=0?0:Math.max(o.gv().b,0))>g)A.f(A.y(h+" allows "+A.i(g)+" decimal places",o.k(0),null))
q.j(0,f,new A.q(o,h))}}c=new A.yy(q,i)
s=t.S
b=A.v(r,s)
a=A.v(r,s)
a0=new A.yx(A.v(r,s))
a1=A.c([],t.sx)
a2=A.c([],t.M)
for(s=b9.length,r=t.fx,p=t.yL,o=p.i("h.E"),m=0;m<b9.length;b9.length===s||(0,A.l)(b9),++m){l=b9[m]
h=l.z
a3=A.cP(h==null?"":h)
if(a3.length===0)continue
e=l.f
a4=e.gbx()
a5=new A.yw(a,a0,q,i,b)
a6=k.h(0,new A.bA(l.c,e.b,a3))
if(a6==null)a6=B.ab
d=J.an(a6)
a7=d.gq(a6)
for(a8=l.w,a9=0;a9<a7;){b0=B.d.an(a9+a7,1)
if(d.h(a6,b0).w.aa(a8)>90)a9=b0+1
else a7=b0}b1=A.c([],b8)
b2=a9
for(;;){if(!(b2<d.gq(a6)&&d.h(a6,b2).w.aa(a8)>=0))break
b3=a5.$1(d.h(a6,b2))
if(typeof b3!=="number")return b3.nb()
if(b3>=a4)b1.push(d.h(a6,b2));++b2}B.a.D(b1,new A.yt())
if(b1.length>1){b4=A.B(new A.n(b1,r.a(new A.yu(a0,a4)),p),o)
b5=b4.length!==0?b4:b1}else b5=b1
d=b5.length
if(d===0)continue
if(d>1){d=l.a
b1=A.F(b5)
B.a.m(a2,new A.W("refund?:"+d,B.P,d,e.k(0)+" back from "+A.i(h)+" on "+a8.k(0)+" may refund the purchase of "+new A.ah(b5,b1.i("e(1)").a(new A.yv()),b1.i("ah<1,e>")).Y(0," or of ")+"."))
continue}j=B.a.gaQ(b5)
if(j.d===B.n)if(J.Y(a0.$1(j),a4))if(j.w.aa(a8)<=7){h=c.$1(j).a.l(0,$.L())
if(h===0)b.h(0,j.a)}h=j.a
e=b.h(0,h)
b.j(0,h,(e==null?0:e)+a4)
B.a.m(a1,new A.lk())}return new A.tJ(a2)},
tI:function tI(){},
lk:function lk(){},
tJ:function tJ(a){this.b=a},
yq:function yq(){},
yr:function yr(){},
ys:function ys(){},
yy:function yy(a,b){this.a=a
this.b=b},
yx:function yx(a){this.a=a},
yw:function yw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yt:function yt(){},
yu:function yu(a,b){this.a=a
this.b=b},
yv:function yv(){},
MA(c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=c7.b2(),c6=A.B(c5,c5.$ti.i("h.E"))
B.a.D(c6,new A.yA())
s=A.v(t.bY,t.L)
for(r=0;r<c6.length;++r){c5=c6[r]
J.bU(s.aI(new A.bA(c5.c,c5.e,c5.f),new A.yB()),r)}q=A.c([],t.Dg)
for(c5=new A.a1(s,s.r,s.e,s.$ti.i("a1<2>"));c5.n();){p=c5.d
for(o=J.an(p),n=0;n<o.gq(p);n=m)for(m=n+1,l=m;l<o.gq(p);++l){k=o.h(p,n)
if(!(k>=0&&k<c6.length))return A.a(c6,k)
k=c6[k]
j=o.h(p,l)
if(!(j>=0&&j<c6.length))return A.a(c6,j)
i=A.Ld(c7,k,c6[j],B.eF)
if(i!=null)B.a.m(q,new A.bA(o.h(p,n),o.h(p,l),i))}}B.a.D(q,new A.yC())
c5=A.c([],t.hK)
for(p=q.length,h=0;h<q.length;q.length===p||(0,A.l)(q),++h){o=q[h]
r=o.a
g=o.b
k=c6.length
if(!(r>=0&&r<k))return A.a(c6,r)
j=c6[r]
if(!(g>=0&&g<k))return A.a(c6,g)
c5.push(new A.bA(j,c6[g],o.c))}p=t.N
f=A.v(p,p)
e=new A.yK(f)
for(o=c5.length,h=0;k=c5.length,h<k;c5.length===o||(0,A.l)(c5),++h){k=c5[h]
if(k.c!==B.ba)continue
d=e.$1(k.a.a)
c=e.$1(k.b.a)
if(d!==c){k=d<c?-1:1
k=k<0?c:d
j=d<c?-1:1
f.j(0,k,j<0?d:c)}}b=A.v(p,t.C)
for(h=0;h<c5.length;c5.length===k||(0,A.l)(c5),++h){o=c5[h]
if(o.c!==B.ba)continue
for(o=[o.a,o.b],a=0;a<2;++a){a0=o[a]
a1=b.aI(e.$1(a0.a),new A.yD())
j=J.an(a1)
if(!j.u(a1,a0))j.m(a1,a0)}}a2=A.c([],t.st)
a3=A.c([],t.M)
a4=A.a3(p)
for(o=new A.a1(b,b.r,b.e,b.$ti.i("a1<2>")),k=t.W,j=t.A;o.n();){a5=o.d
a6=A.a3(p)
for(a7=J.aX(a5),a8=a7.gA(a5);a8.n();)a6.m(0,a8.gt().a)
a8=A.c([],j)
for(a9=a7.gA(a5);a9.n();){b0=a9.gt()
for(b1=a7.gA(a5),b2=b0.a,b3=b0.y,b4=b3.a,b3=b3.b;b1.n();){b5=b1.gt()
b6=b5.a
if(b2===b6)b6=0
else b6=b2<b6?-1:1
if(b6<0){b5=b5.y
b5=b4===b5.a&&b3!==b5.b}else b5=!1
if(b5)a8.push(b0)}}a8=a8.length
b7=B.a.M(c5,new A.yE(a6))
b8=a7.bN(a5,A.Nx()).gq(0)
a9=a7.bN(a5,new A.yF(c7))
b9=A.B(a9,a9.$ti.i("h.E"))
c0=b9.length!==0&&a7.M(a5,new A.yG(b9))
c1=a7.M(a5,new A.yH(a5,c7))
if(a8!==0||b7||b8>1||b9.length>1||c0||c1){a4.a1(0,a6)
continue}if(b9.length!==0)c2=B.a.gaQ(b9)
else{a6=A.B(a5,k)
B.a.D(a6,A.Ny())
c2=B.a.ga0(a6)}for(a5=a7.gA(a5),a6=c2.a;a5.n();){a7=a5.gt().a
if(a7!==a6)B.a.m(a2,new A.dT(a6,a7))}}for(p=c5.length,h=0;h<c5.length;c5.length===p||(0,A.l)(c5),++h){o=c5[h]
c3=o.a
c4=o.b
if(o.c===B.cp||a4.u(0,c3.a)){o=c3.a
B.a.m(a3,new A.W("same-event?:"+o+":"+c4.a,B.v,o,c3.f.k(0)+" on "+c3.w.k(0)+" by "+c3.y.a+" and "+c4.y.a+" may be one payment."))}}B.a.D(a2,new A.yI())
B.a.D(a3,new A.yJ())
return new A.tV(a3)},
Ld(a,b,c,d){var s,r,q,p,o,n=null
if(b.c!==c.c||b.e!==c.e||!b.f.J(0,c.f))return n
if(a.dZ.u(0,A.on(b.a,c.a)))return n
s=b.y
r=c.y
q=s.b===r.b
if(!q&&s.a===r.a)return n
if(q)return B.ba
p=b.r
o=c.r
if(p!=null&&o!=null&&Math.abs(B.d.C(p.dX(o).a,6e7))<=120)return B.ba
if(Math.abs(b.w.aa(c.w))<=1)return B.cp
return n},
L1(a){t.W.a(a)
return a.CW!=null||a.y.d},
Lg(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=b.CW!=null||b.y.d?1:0
s=q-(a.CW!=null||a.y.d?1:0)
if(s!==0)return s
r=a.y.c.l(0,b.y.c)
return r!==0?r:B.b.l(a.a,b.a)},
tU:function tU(){},
dT:function dT(a,b){this.a=a
this.b=b},
tV:function tV(a){this.b=a},
bR:function bR(a,b){this.a=a
this.b=b},
yA:function yA(){},
yB:function yB(){},
yC:function yC(){},
yK:function yK(a){this.a=a},
yD:function yD(){},
yE:function yE(a){this.a=a},
yF:function yF(a){this.a=a},
yG:function yG(a){this.a=a},
yH:function yH(a,b){this.a=a
this.b=b},
yz:function yz(a,b){this.a=a
this.b=b},
yI:function yI(){},
yJ:function yJ(){},
Gr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.c([],t.g0)
for(s=a.gK().gT(),s=s.gA(s),r=a.fx,q=t.v,p=t.n;s.n();){o=s.gt()
n=o.ay
if(n==null||n.a!==B.an)continue
m=A.c([],p)
l=A.d1(r,!1,q)
l.$flags=3
k=l
j=k.length
i=o.a
o=o.w
h=0
for(;h<j;++h){g=k[h]
if(g.b===i&&g.d.l(0,o)>=0)m.push(g)}B.a.D(m,new A.Ba())
k=!0
if(m.length!==0){j=B.a.ga0(m)
f=n.b
f.toString
if(j.c.a<=f){k=B.a.ga0(m).c
k=o.a===k.a&&o.b===k.b&&o.c===k.c}}if(k)continue
k=n.b
k.toString
B.a.m(e,new A.dV(i,o,k,B.a.ga0(m)))}B.a.D(e,new A.Bb())
return e},
NC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.M)
for(s=A.Gr(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.a
n=p.d
m=a.gK().h(0,o).b
l=p.b
k=l.k(0)
j=n.c
i=j.k(0)
h=n.d.k(0)
l=j.l(0,l)>0?" No statement covers the days before it.":""
g.push(new A.W("start-from:"+o+":"+n.a,B.c5,o,m+"'s history starts "+k+", from its Drive year folder "+p.c+", not from a statement. The first statement read covers "+i+" to "+h+"."+l))}return g},
dV:function dV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ba:function Ba(){},
Bb:function Bb(){},
Nb(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="; pair it by hand.",a7=b1.$ti,a8=a7.i("n<h.E>"),a9=a8.i("n<h.E>"),b0=A.B(new A.n(new A.n(b1,a7.i("j(h.E)").a(new A.Aq(b4)),a8),a8.i("j(h.E)").a(new A.Ar()),a9),a9.i("h.E"))
B.a.D(b0,new A.As())
a7=A.F(b0)
a8=a7.i("j(1)")
a7=a7.i("n<1>")
a9=a7.i("h.E")
s=A.B(new A.n(b0,a8.a(new A.At()),a7),a9)
r=A.B(new A.n(b0,a8.a(new A.Au()),a7),a9)
q=new A.Ay()
p=new A.Aw(b3,q)
o=new A.Ax()
a7=t.N
a8=t.C
a9=A.v(a7,a8)
for(n=s.length,m=t.A,l=0;l<s.length;s.length===n||(0,A.l)(s),++l){k=s[l]
j=A.c([],m)
i=k.w
h=o.$2(r,i)
for(;;){g=r.length
if(h<g){if(!(h>=0))return A.a(r,h)
g=i.aa(r[h].w)<=5}else g=!1
if(!g)break
if(!(h>=0&&h<r.length))return A.a(r,h)
if(p.$2(k,r[h])){if(!(h<r.length))return A.a(r,h)
j.push(r[h])}++h}a9.j(0,k.a,j)}a8=A.v(a7,a8)
for(n=r.length,l=0;l<r.length;r.length===n||(0,A.l)(r),++l){f=r[l]
j=A.c([],m)
i=f.w
e=A.ay(i.a,i.b,i.c).aw(-432e9)
h=o.$2(s,new A.z(A.b0(e),A.b4(e),A.au(e)))
for(;;){g=s.length
if(h<g){if(!(h>=0))return A.a(s,h)
g=s[h].w.l(0,i)<=0}else g=!1
if(!g)break
if(!(h>=0&&h<s.length))return A.a(s,h)
if(p.$2(s[h],f)){if(!(h<s.length))return A.a(s,h)
j.push(s[h])}++h}a8.j(0,f.a,j)}n=t.wF
d=A.c([],n)
c=A.c([],n)
b=A.a3(a7)
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
B.a.m(j,new A.lH(n,m))}a=new A.Ap(b2)
a0=A.c([],t.M)
for(a7=b0.length,l=0;l<b0.length;b0.length===a7||(0,A.l)(b0),++l){a1=b0[l]
n=a1.a
if(b.u(0,n)||!q.$1(a1))continue
a2=a1.e===B.k
if(a2){m=a9.h(0,n)
m.toString
b1=m}else{m=a8.h(0,n)
m.toString
b1=m}if(b1.length!==0){m=A.F(b1)
a3=new A.ah(b1,m.i("e(1)").a(new A.Av(a)),m.i("ah<1,e>")).Y(0," or ")
a4=b1.length===1?", which another transaction also fits":""
m=a1.f
j=a1.w
m=a2?m.k(0)+" left "+A.i(a.$1(a1))+" on "+j.k(0)+": it may have reached "+a3+a4+a6:m.k(0)+" reached "+A.i(a.$1(a1))+" on "+j.k(0)+": it may have come from "+a3+a4+a6
B.a.m(a0,new A.W("transfer?:"+n,B.P,n,m))
continue}m=a1.w
a5=m.aa(b5)
if(a5<=5)continue
j=""+a5
i=a1.f
m=a2?i.k(0)+" left "+A.i(a.$1(a1))+" on "+m.k(0)+"; the other side has not arrived after "+j+" days.":i.k(0)+" reached "+A.i(a.$1(a1))+" on "+m.k(0)+"; the side it came from has not arrived after "+j+" days."
B.a.m(a0,new A.W("in-transit:"+n,B.c9,n,m))}return new A.uh(c,a0)},
MB(a,b){var s=a.gK().gT(),r=A.o(s),q=r.i("j(h.E)").a(new A.yL()),p=a.b2(),o=p.$ti,n=o.i("j(h.E)").a(new A.yM()),m=t.N,l=A.a3(m)
for(s=s.gA(s),r=new A.N(s,q,r.i("N<h.E>"));r.n();)l.m(0,s.gt().a)
s=A.v(m,m)
for(r=a.gK().gT(),r=r.gA(r);r.n();){q=r.gt()
s.j(0,q.a,q.b)}return A.Nb(new A.n(p,n,o.i("n<h.E>")),s,B.eH,l,b)},
ug:function ug(){},
lH:function lH(a,b){this.a=a
this.b=b},
uh:function uh(a,b){this.b=a
this.c=b},
Aq:function Aq(a){this.a=a},
Ar:function Ar(){},
As:function As(){},
At:function At(){},
Au:function Au(){},
Ay:function Ay(){},
Aw:function Aw(a,b){this.a=a
this.b=b},
Ax:function Ax(){},
Ap:function Ap(a){this.a=a},
Av:function Av(a){this.a=a},
yL:function yL(){},
yM:function yM(){},
N8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=b==="personal"
if(f)s="personal"
else{r=a.a7.a6(B.aU,b)
s=r==null?null:A.m(r.c.h(0,"country"))}r=A.c([],t.I)
q=B.kJ.h(0,s)
if(q!=null)B.a.a1(r,q)
q=a.aD.e
p=A.o(q).i("M<2>")
o=p.i("n<h.E>")
n=A.B(new A.n(new A.M(q,p),p.i("j(h.E)").a(new A.A6(b)),o),o.i("h.E"))
B.a.D(n,new A.A7())
m=f?"personal-tax:":"compliance:"
for(f=n.length,q=m.length,l=0;l<n.length;n.length===f||(0,A.l)(n),++l){k=n[l]
p=k.f
p.toString
if(!B.b.am(p,m))continue
j=B.b.ad(p,q)
if(!B.a.M(r,new A.A8(j)))B.a.m(r,new A.p(j,k.c))}f=A.c([],t.cp)
for(q=r.length,p=A.F(n),o=p.i("j(1)"),p=p.i("n<1>"),i=t.w5,l=0;l<r.length;r.length===q||(0,A.l)(r),++l){h={}
g=r[l]
h.a=null
j=g.a
h.a=j
f.push(new A.l7(j,g.b,A.aN(new A.n(n,o.a(new A.A9(h,m,c)),p),i),A.C0(new A.n(n,o.a(new A.Aa(h,m,c)),p),i)))}return f},
Mb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.M),f=a.gcE(),e=A.o(f).i("ab<1,2>"),d=e.i("c3<h.E,e>"),c=A.B(new A.c3(new A.n(new A.ab(f,e),e.i("j(h.E)").a(new A.xV()),e.i("n<h.E>")),e.i("e(h.E)").a(new A.xW()),d),d.i("h.E"))
B.a.ba(c)
for(f=c.length,e=a.aD.a,d=t.s,s=a.a7.a,r=0;r<c.length;c.length===f||(0,A.l)(c),++r){q=c[r]
p=s.h(0,B.aU)
o=p==null?null:p.h(0,q)
if(o==null)continue
p=A.c([],d)
n=o.c
if(A.ax(n.h(0,"incorporated"))==null)p.push("its incorporation date")
if(A.m(n.h(0,"last4"))==null)p.push("its registration number")
n=e.h(0,q)
if((n==null?null:n.c)==null)p.push("its financial year end")
if(p.length!==0){n=q.length
if(n===0)n=q
else{if(0>=n)return A.a(q,0)
n=q[0].toUpperCase()+B.b.ad(q,1)}B.a.m(g,new A.W("company-setup:"+q,B.ad,q,n+" still needs "+B.a.Y(p,", ")+". Nothing is reminded until it is entered."))}for(p=A.N8(a,q,b),n=p.length,m=q.length,l=m===0,k="company-date:"+q+":",j=0;j<p.length;p.length===n||(0,A.l)(p),++j){i=p[j]
if(i.c==null&&i.d!=null){if(l)h=q
else{if(0>=m)return A.a(q,0)
h=q[0].toUpperCase()+B.b.ad(q,1)}B.a.m(g,new A.W(k+i.a,B.ad,q,h+"'s "+i.b+" date "+i.d.d.k(0)+" has passed and no new date is entered. Add the next one from the notice or the accountant."))}}}return g},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A6:function A6(a){this.a=a},
A7:function A7(){},
A8:function A8(a){this.a=a},
A9:function A9(a,b,c){this.a=a
this.b=b
this.c=c},
Aa:function Aa(a,b,c){this.a=a
this.b=b
this.c=c},
xV:function xV(){},
xW:function xW(){},
BX(a){var s=a.h(0,"name")
s.toString
return new A.nE(A.b(s),A.m(a.h(0,"driveFileId")),A.m(a.h(0,"localId")))},
ax(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Hx().aj(a):m
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
n=A.ay(q,p,o)
return A.b0(n)===q&&A.b4(n)===p&&A.au(n)===o?new A.z(q,p,o):m},
bM:function bM(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
bD:function bD(a,b,c){this.c=a
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
ep:function ep(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
KD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=b.b.toLowerCase()
A:{q=b.c
if(B.j===q||B.a2===q){if(typeof c!="string"||B.b.I(c).length===0)return A.i(e)+" is words"
p=q===B.j?80:300
if(c.length>p||B.b.u(c,"\n"))return A.i(e)+" is one line of at most "+p+" characters"
if($.eZ().aM(0,c).gq(0)>=9||A.zs(c)!==c)return A.i(e)+" looks like it holds a full number; only the last 4 characters are kept"
break A}if(B.r===q){if(A.ax(c)==null)return A.i(e)+" is written YYYY-MM-DD and is a real day"
break A}if(B.aM===q){if(typeof c=="string"){o=$.HU()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is written HH:MM"
break A}if(B.aq===q){if(typeof c=="string"){o=$.HH()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is written YYYY-MM"
break A}if(B.u===q){s=null
try{s=A.aO(t.f.a(c).G(0,t.N,t.X))}catch(n){o=A.i(e)
return o+" is an amount"}if(!B.e.E(s.b))return"currency "+s.b+" is not supported"
if(s.a.l(0,$.L())<=0)return A.i(e)+" is more than zero"
break A}if(B.ax===q){r=typeof c=="string"?A.dt(c):f
if(r==null||r.l(0,$.L())<=0)return A.i(e)+" is a number more than zero"
break A}if(B.I===q){o=!0
if(A.cu(c)){m=b.r
if(!(m!=null&&c<m)){o=b.w
o=o!=null&&c>o}}if(o){o=A.i(e)
m=b.r
m=m==null?"":", "+A.i(m)+" to "+A.i(b.w)
return o+" is a whole number"+m}break A}if(B.N===q){o=b.e
if(!B.a.u(o,c))return A.i(e)+" is one of "+B.a.Y(o,", ")
break A}if(B.ar===q){if(typeof c=="string")o=c!=="me"&&!A.a5(a.p3,t.N,t.o).E(c)
else o=!0
if(o)return"no member "+A.i(c)
break A}if(B.bs===q){if(t.j.b(c)){o=J.an(c)
o=o.ga4(c)||o.ea(c).a!==o.gq(c)}else o=!0
if(o)return A.i(e)+" names each person once"
for(o=J.Q(c),m=a.p3,l=t.N,k=t.o;o.n();){j=o.gt()
if(typeof j=="string")i=j!=="me"&&!A.a5(m,l,k).E(j)
else i=!0
if(i)return"no member "+A.i(j)}break A}if(B.a3===q){if(typeof c!="string"||!a.gK().E(c))return"no account "+A.i(c)
break A}if(B.af===q){h=typeof c=="string"?a.aG(c):f
if(h==null)return"no book "+A.i(c)
o=b.x
if(o.length!==0&&!B.a.u(o,h)){m=A.F(o)
return A.i(e)+" is a "+new A.ah(o,m.i("e(1)").a(new A.vv()),m.i("ah<1,e>")).Y(0," or ")+" book"}break A}if(B.C===q){if(typeof c=="string"){o=b.f
o.toString
o=a.a7.a6(A.ag(B.ac,o,t.P),c)==null}else o=!0
if(o)return"no "+A.i(b.f)+" "+A.i(c)
break A}if(B.aJ===q){if(typeof c!="string"||!A.a5(a.c_.d,t.N,t.ud).E(c))return"no policy "+A.i(c)
break A}if(B.bt===q){if(typeof c!="string"||a.c_.gbD().h(0,c)==null)return"no document "+A.i(c)
break A}if(B.ao===q){if(typeof c!="string"||a.b.a.h(0,c)==null)return"no transaction "+A.i(c)
break A}if(B.bu===q){if(typeof c!="string"||!a.aD.c.E(c))return"no invoice "+A.i(c)
break A}if(B.aK===q){r=null
try{r=A.BX(t.f.a(c).G(0,t.N,t.X))}catch(n){o=A.i(e)
return o+" is a file"}o=r.a
if($.eZ().aM(0,o).gq(0)>=9||A.zs(o)!==o)return"the file name looks like it holds a full number"
break A}if(B.a8===q){if(typeof c=="string"){o=$.HB()
o=!o.b.test(c)}else o=!0
if(o)return u.M
break A}if(B.Z===q){if(!A.ed(c))return A.i(e)+" is yes or no"
break A}if(B.ap===q){if(typeof c!="string"||B.b.I(c).length===0)return A.i(e)+" is words"
g=A.c(c.split("\n"),t.s)
if(g.length>4||B.a.M(g,new A.vw()))return A.i(e)+" is at most 4 lines of 80 characters"
if(A.Lx(c))return A.i(e)+" looks like it holds an account, PAN or GSTIN; those are kept apart"
break A}if(B.aL===q){r=typeof c=="string"?A.dt(c):f
if(r==null||r.l(0,$.L())<0||r.l(0,new A.P(A.aB(100),0))>0||r.gee()>2)return A.i(e)+" is a percentage from 0 to 100, at most 2 decimals"
break A}if(B.bv===q){if(typeof c=="string"){o=$.I0()
o=!o.b.test(c)}else o=!0
if(o)return A.i(e)+" is 11 characters like ABCD0123456"}}return f},
CT(a,b){var s,r,q,p,o,n,m,l=b.b
if(B.b.I(l).length===0||l.length>120)return"a record needs an id"
for(l=b.c,s=l.gah(),s=s.gA(s),r=b.a;s.n();){q=s.gt()
if(r.m_(q)==null)return r.c.toLowerCase()+" has no field "+q}for(s=r.d,q=s.length,p=0;p<q;++p){o=s[p]
n=l.h(0,o.a)
if(n==null){if(o.d)return r.c.toLowerCase()+" needs "+o.b.toLowerCase()
continue}m=A.KD(a,o,n)
if(m!=null)return m}return A.L4(a,b)},
mz(a){var s,r,q,p,o=A.a3(t.N)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r){q=a[r]
p=q==null?null:q.b
if(p!=null)o.m(0,p)}return o.a>1?"the amounts are in one currency":null},
L4(d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2="invoiceId",c3="medisave",c4="currency",c5="is not a supported currency",c6="bookId",c7="amount",c8="accountId",c9="propertyId",d0="the year of the next number is written like 26/27",d1="tenancyId",d2="unitPrice",d3="a mark is named by what it marks"
A:{s=d5.a
if(B.aA===s){r=A.m(d5.c.h(0,"loanAccountId"))
if(r!=null){q=d4.gK().h(0,r)
q=(q==null?c1:q.d)!==B.o}else q=!1
if(q)return"the loan is one of your loans"
break A}if(B.at===s){q=d5.c
p=A.ax(q.h(0,"starts"))
q=A.ax(q.h(0,"ends"))
if(p!=null&&q!=null&&q.l(0,p)<0)return"a lease ends after it starts"
o=A.mz(A.c([d5.av("rent"),d5.av("deposit")],t.dr))
if(o!=null)return o
break A}if(B.di===s){if(d5.b!==A.m(d5.c.h(0,c2)))return"an invoice has one document record, named by the invoice"
break A}if(B.df===s){q=d5.c
p=A.ax(q.h(0,"departs"))
q=A.ax(q.h(0,"returns"))
if(p!=null&&q!=null&&q.l(0,p)<0)return"a trip comes back after it leaves"
break A}if(B.dn===s){q=d5.c
if(d5.b!==A.i(A.m(q.h(0,"tripId")))+":"+A.i(A.m(q.h(0,"movementId"))))return"a trip line is named by its trip and line"
n=d5.av("sgd")
q=n==null
if(!q&&n.b!=="SGD")return"the SGD amount is in SGD"
if(q!==(d5.dc("rate")==null))return"an SGD amount comes with its rate (LED-09)"
break A}if(B.dk===s){q=d5.av("total")
q.toString
m=d5.av(c3)
l=d5.av("insurance")
k=A.mz(A.c([q,m,l],t.dr))
if(k!=null)return k
j=A.a2($.L(),q.b)
for(p=[m,l],i=0;i<2;++i){h=p[i]
if(h!=null){g=h.b
f=j.b
if(g!==f)A.f(A.a6(f,g))
g=j.a.B(0,h.a)
j=new A.q(g,f)
e=B.e.h(0,f)
if(e==null)A.f(A.x(f,c4,c5))
if((g.b<=0?0:Math.max(g.gv().b,0))>e)A.f(A.y(f+" allows "+A.i(e)+" decimal places",g.k(0),c1))}}if(j.a.l(0,q.a)>0)return"MediSave and insurance are not more than the bill"
break A}if(B.bI===s){d=A.mz(A.c([d5.av("claimed"),d5.av("paid")],t.dr))
if(d!=null)return d
q=d5.c
if(A.m(q.h(0,"status"))==="paid"&&d5.av("paid")==null)return"a paid claim says what was paid"
c=A.m(q.h(0,"creditMovementId"))
if(c!=null){q=d4.b.a
if(q.h(0,c).e!==B.m)return"a claim credit is money coming in"
if(q.h(0,c).d===B.w)return"a claim payout is a claim credit, never income"
q=d4.a7.aY(B.bI)
p=A.F(q)
if(!new A.n(q,p.i("j(1)").a(new A.vz(d5,c)),p.i("n<1>")).ga4(0))return"that transaction is the payout of another claim"}break A}if(B.dj===s){q=d5.c
p=A.m(q.h(0,"personId"))
p.toString
if(p==="me")return"the helper is a household member"
b=A.m(q.h(0,"permitId"))
if(b!=null){a=d4.c_.gbD().h(0,b)
if(a.b!==B.cI||a.c!==p)return"the permit is her work permit"}if(B.a.M(A.c(["renewalDate","medicalDue","contractEnds"],t.s),new A.vA(d5))&&A.m(q.h(0,"source"))==null)return"each date comes from the permit, policy or MOM notice: say which"
break A}if(B.aU===s){if(d5.b!==A.m(d5.c.h(0,c6)))return"a company has one record, named by its book"
break A}if(B.bL===s){q=A.c([],t.dr)
for(p=d5.c,g=t.f,f=t.N,a0=t.X,i=0;i<7;++i){a1=B.jg[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).G(0,f,a0)
a3=a2.h(0,c7)
a3.toString
a3=A.ad(A.b(a3))
a2=a2.h(0,c4)
a2.toString
A.b(a2)
a4=new A.q(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.f(A.x(a2,c4,c5))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>e)A.f(A.y(a2+" allows "+A.i(e)+" decimal places",a3.k(0),c1))
a2=a4}else a2=c1
q.push(a2)}a5=A.mz(q)
if(a5!=null)return a5
a6=A.m(p.h(0,c8))
if(a6!=null&&!d4.gK().h(0,a6).gaR())return"the pay goes into a savings or current account"
break A}if(B.dg===s||B.dl===s){for(q=["employee","employer","amount"],p=d5.c,g=t.f,f=t.N,a0=t.X,i=0;i<3;++i){a1=q[i]
if(g.b(p.h(0,a1))){a2=p.h(0,a1)
a2.toString
a2=g.a(a2).G(0,f,a0)
a3=a2.h(0,c7)
a3.toString
a3=A.ad(A.b(a3))
a2=a2.h(0,c4)
a2.toString
A.b(a2)
a7=new A.q(a3,a2)
e=B.e.h(0,a2)
if(e==null)A.f(A.x(a2,c4,c5))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>e)A.f(A.y(a2+" allows "+A.i(e)+" decimal places",a3.k(0),c1))}else a7=c1
if(a7!=null)a2=a7.b!=="SGD"
else a2=!1
if(a2)return"CPF is in SGD"}break A}if(B.aV===s){q=d5.c
if(d5.b!==A.i(A.m(q.h(0,"policyId")))+":"+A.i(A.m(q.h(0,"dueOn"))))return"a premium is named by its policy and due date"
if(d5.av("cash")==null&&d5.av(c3)==null)return"say what was paid"
a8=A.mz(A.c([d5.av("cash"),d5.av(c3)],t.dr))
if(a8!=null)return a8
break A}if(B.dq===s){q=d5.c
p=A.ax(q.h(0,"anchor"))
p.toString
g=A.m(q.h(0,"offset"))
g.toString
a9=A.Nr(p,g)
if(a9==null)return'the offset is like "1 month before", "2 weeks after" or "on the day"'
if(!a9.J(0,A.ax(q.h(0,"date"))))return"the date is worked out from the anchor and the offset"
b0=A.m(q.h(0,"repeat"))
b1=A.aG(q.h(0,"every"))
b2=A.ax(q.h(0,"until"))
if(b0==null)p=b1!=null||b2!=null||A.aG(q.h(0,"times"))!=null
else p=!1
if(p)return"say how it repeats before when it ends"
p=b0==="every-n-months"||b0==="every-n-weeks"
if(p!==(b1!=null))return"every how many is said only for every N months or weeks"
p=b2!=null
if(p&&A.aG(q.h(0,"times"))!=null)return"it ends on one of a date or a number of times"
if(p&&b2.l(0,a9)<0)return"until is on or after the first date"
break A}if(B.bK===s||B.dp===s||B.dm===s||B.dh===s)break A
if(B.aT===s){if(d5.b!==A.m(d5.c.h(0,c9)))return"a property has one issuer record, named by the property"
break A}if(B.a9===s){q=d5.c
b3=A.m(q.h(0,"startYear"))
p=b3!=null
if(p){g=$.Hs()
g=!g.b.test(b3)}else g=!1
if(g)return d0
if(p&&B.d.R(A.X(B.b.X(b3,0,2),c1,c1)+1,100)!==A.X(B.b.ad(b3,3),c1,c1))return d0
q=A.m(q.h(0,"pattern"))
q.toString
return A.NA(q)}if(B.aR===s){q=d5.c
if(d5.b!==A.m(q.h(0,d1)))return"a tenancy has one invoicing record, named by the tenancy"
p=A.m(q.h(0,d1))
p.toString
p=d4.a7.a6(B.at,p)
if((p==null?c1:A.m(p.c.h(0,"role")))!=="landlord")return"invoices are made for a tenancy where you are the landlord"
a6=d4.gK().h(0,A.m(q.h(0,c8)))
if(!a6.gaR()||a6.e!=="INR")return"rent is paid into a rupee savings or current account"
break A}if(B.bJ===s){if(d5.av(c7).b!=="INR")return"an invoice line is in rupees"
break A}if(B.ai===s||B.ak===s||B.a6===s||B.aj===s)break A
if(B.ah===s){q=d5.b
p=d5.c
if(q!==A.m(p.h(0,c6)))return"a company has one issuer record, named by its book"
if(d4.aG(q)!=="company")return"invoices are issued by a company book"
a6=d4.gK().h(0,A.m(p.h(0,c8)))
if(a6==null||!a6.gaR()||a6.e!=="SGD"||a6.r!==q)return"the company's invoices are paid into one of its Singapore dollar bank accounts"
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
if(d5.av(d2).a.a.ga8(0)<0)return"a unit price is not below zero"
if(d5.dc("quantity").gee()>4)return"a quantity has at most 4 decimals"
break A}if(B.bH===s){q=d5.c
r=d4.gK().h(0,A.m(q.h(0,"loanId")))
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
Lx(a){var s=a.toUpperCase(),r=A.D("[A-Z]{5}\\d{4}[A-Z]",!0,!1)
if(r.b.test(s))return!0
r=A.D("\\d(?:[\\s.\\-]*\\d){10,}",!0,!1)
return r.b.test(s)},
NA(a){var s,r,q,p,o=A.D("\\{(n+)\\}",!0,!1).aM(0,a),n=A.B(o,A.o(o).i("h.E"))
if(n.length!==1)return"the pattern holds the number once, as {nnn}"
o=$.Dj()
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
s=A.fI(2026,s).length}if(q.length+o+s>16)return"an invoice number is at most 16 characters"
return null},
Nc(a){var s,r,q,p,o=B.b.I(a).toLowerCase()
if(o==="on the day"||o==="on the date")return new A.ea(0,0)
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
B:{if("day"===r){r=new A.ea(p*q,0)
break B}if("week"===r){r=new A.ea(p*7*q,0)
break B}if("month"===r){r=new A.ea(0,p*q)
break B}r=new A.ea(0,p*12*q)
break B}return r},
Nr(a,b){var s=A.Nc(b)
if(s==null)return null
return A.Gd(a,s.b).aC(s.a)},
Gd(a,b){var s=a.a*12+(a.b-1)+b,r=B.d.C(s,12),q=B.d.R(s,12)+1,p=A.au(A.ay(r,q+1,0)),o=a.c
return new A.z(r,q,o>p?p:o)},
LC(a,b,c){var s,r,q,p,o,n,m,l,k="a credit note is made once by Issue credit note and never changed",j=c.e,i=t.P,h=A.aN(new A.n(B.ac,t.Ab.a(new A.vZ(j)),t.rx),i)
if(h==null)return"no record kind "+A.i(J.ar(j,"kind"))
r=J.ar(j,"id")
if(typeof r!="string")return"a record needs an id"
if(h===B.ai)return"a rent invoice is made once by Make invoice and never changed"
if(h===B.ak)return k
if(h===B.a6)return"a company invoice is made once by Issue invoice and never changed"
if(h===B.aj)return k
if(c.d==="life.remove"){if(b.a6(h,r)==null)return"no "+h.c.toLowerCase()+" "+r
if(b.n2(h,r).length!==0)return"another record uses it; remove that first"
b.a.h(0,h).Z(0,r)
return null}s=null
try{q=j
p=q.h(0,"kind")
p.toString
i=A.ag(B.ac,A.b(p),i)
p=q.h(0,"id")
p.toString
A.b(p)
q=q.h(0,"fields")
q.toString
o=t.N
n=t.X
s=new A.b2(i,p,A.a5(t.f.a(q).G(0,o,n),o,n))}catch(m){return"a record is its kind, id and fields"}l=A.CT(a,s)
if(l!=null)return l
i=b.a
q=i.h(0,h)
if(q==null){q=A.v(t.N,t.u)
i.j(0,h,q)
i=q}else i=q
i.j(0,r,s)
return null},
aK:function aK(a,b){this.a=a
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
aa:function aa(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
p4:function p4(a){this.a=a},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a){this.a=a},
p3:function p3(){},
vv:function vv(){},
vw:function vw(){},
vz:function vz(a,b){this.a=a
this.b=b},
vA:function vA(a){this.a=a},
vZ:function vZ(a){this.a=a},
Nd(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="currency",a0="is not a supported currency",a1=t.N,a2=A.a3(a1),a3=A.c([],t.uE),a4=a5.a7.aY(B.bL)
B.a.D(a4,new A.AB())
for(s=a4.length,r=t.W,q=t.f,p=t.X,o=0;o<a4.length;a4.length===s||(0,A.l)(a4),++o){n=a4[o]
m=n.c
l=A.m(m.h(0,"accountId"))
if(q.b(m.h(0,"net"))){k=m.h(0,"net")
k.toString
k=q.a(k).G(0,a1,p)
j=k.h(0,"amount")
j.toString
j=A.ad(A.b(j))
k=k.h(0,a)
k.toString
A.b(k)
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,a,a0))
if((j.b<=0?0:Math.max(j.gv().b,0))>h)A.f(A.y(k+" allows "+A.i(h)+" decimal places",j.k(0),b))
k=i}else k=b
k.toString
j=A.ax(m.h(0,"payDate"))
j.toString
if(l==null){B.a.m(a3,new A.fo(n,B.le,b))
continue}i=a5.bq()
g=i.$ti
f=g.i("n<h.E>")
e=A.B(new A.n(i,g.i("j(h.E)").a(new A.AH(l,a2,j)),f),f.i("h.E"))
B.a.D(e,new A.AC(j))
i=A.F(e)
g=i.i("j(1)")
i=i.i("n<1>")
d=A.aN(new A.n(e,g.a(new A.AD(k)),i),r)
if(d!=null){a2.m(0,d.a)
B.a.m(a3,new A.fo(n,B.lc,b))
continue}c=A.aN(new A.n(e,g.a(new A.AE(k,B.a.m7(B.b.bR(A.m(m.h(0,"employer")).toUpperCase(),A.D("[^A-Z0-9]+",!0,!1)),new A.AF(),new A.AG()))),i),r)
if(c!=null){a2.m(0,c.a)
m=c.f
j=k.b
i=m.b
if(j!==i)A.f(A.a6(i,j))
k=k.a
k=m.a.B(0,new A.P(k.a.S(0),k.b))
h=B.e.h(0,i)
if(h==null)A.f(A.x(i,a,a0))
if((k.b<=0?0:Math.max(k.gv().b,0))>h)A.f(A.y(i+" allows "+A.i(h)+" decimal places",k.k(0),b))
B.a.m(a3,new A.fo(n,B.dX,new A.q(k,i)))}else B.a.m(a3,new A.fo(n,a6.aa(j)<-5?B.dY:B.ld,b))}return a3},
Ne(a,b){var s,r,q,p,o,n,m,l=A.c([],t.M)
for(s=A.Nd(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.b
n=o===B.dX
if(n||o===B.dY){o=p.a
m=o.b
o=o.c
o=n?"The "+A.i(A.m(o.h(0,"period")))+" salary credit differs from the payslip's net pay by "+A.i(p.d)+".":"No salary credit for the "+A.i(A.m(o.h(0,"period")))+" payslip was seen by 5 days after its pay date."
l.push(new A.W("payslip:"+m,B.ad,m,o))}}return l},
ez:function ez(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.d=c},
AB:function AB(){},
AH:function AH(a,b,c){this.a=a
this.b=b
this.c=c},
AC:function AC(a){this.a=a},
AD:function AD(a){this.a=a},
AF:function AF(){},
AG:function AG(){},
AE:function AE(a,b){this.a=a
this.b=b},
Ni(a,b){var s,r,q,p,o,n,m,l,k=a.ax,j=a.as
if(k==null||j==null||a.Q==null)return B.dG
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
default:s=null}r=A.c([],t.F)
for(q=s===0,p=a.z,o=p!=null,n=0;n<400;++n){m=A.Gd(k,s*n)
if(m.l(0,b)<=0)l=o&&m.l(0,p)>0
else l=!0
if(l)break
B.a.m(r,m)
if(q)break}return r},
Lc(a,b,c,d){var s,r,q,p,o,n,m,l,k=b.gh8(),j=b.ch
if(k==null||j==null)return null
for(s=a.bq(),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=k.b,p=k.a,o=b.b;s.n();){n=r.gt()
m=!0
if(n.c===j)if(n.e===B.k){m=n.f
l=!1
if(q===m.b)m=p.l(0,m.a)===0
else m=l
m=!m||d.u(0,n.a)}if(m)continue
if(Math.abs(c.aa(n.x))>7||!A.NY(o,n.z))continue
return n}return null},
Nj(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.c([],t.tJ),a=t.N,a0=A.a3(a)
for(s=a1.a7,r=s.aY(B.aV),q=r.length,p=0;p<r.length;r.length===q||(0,A.l)(r),++p){o=A.m(r[p].c.h(0,"movementId"))
if(o!=null)a0.m(0,o)}r=a1.c_.d
q=t.ud
o=A.a5(r,a,q).gah()
n=A.B(o,A.o(o).i("h.E"))
B.a.ba(n)
for(o=n.length,s=s.a,p=0;p<n.length;n.length===o||(0,A.l)(n),++p){m=n[p]
l=A.a5(r,a,q).h(0,m)
l.toString
for(k=A.Ni(l,a3),j=k.length,i=l.a+":",h=0;h<k.length;k.length===j||(0,A.l)(k),++h){g=k[h]
if(g.l(0,a2)<0)continue
f=g.k(0)
e=s.h(0,B.aV)
d=e==null?null:e.h(0,i+f)
c=d==null?A.Lc(a1,l,g,a0):null
if(c!=null)a0.m(0,c.a)
B.a.m(b,new A.dN(l,g,d,c))}}B.a.D(b,new A.AP())
return b},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AP:function AP(){},
KK(a){var s
A.m(a)
if(a!=null)s=$.eZ().aM(0,a).gq(0)>=9||A.zs(a)!==a
else s=!1
return s},
F4(a,b,c,d,e){var s,r,q,p
if(b!=="me"&&!A.a5(a.p3,t.N,t.o).E(b))return"no member "+b
if(c!=null){s=$.HC()
s=!s.b.test(c)}else s=!1
if(s)return u.M
s=A.B(d,t.T)
s.push(e==null?null:e.a)
if(B.a.M(s,A.Np()))return"an entry looks like it holds a full number; only the last 4 characters are kept"
for(s=d.length,r=0;r<s;++r){q=d[r]
if(q!=null)p=q.length>80||B.b.u(q,"\n")
else p=!1
if(p)return"an entry is one line of at most 80 characters"}return null},
LD(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="id",b5="personId",b6="file",b7="a date is written YYYY-MM-DD and is a real day",b8="sumAssured",b9="frequency",c0="medisave",c1=c4.e
switch(c4.d){case"document.set":r={}
r.a=null
try{q=c1
p=q.h(0,b4)
p.toString
A.b(p)
o=q.h(0,"kind")
o.toString
o=A.ag(B.kk,A.b(o),t.il)
n=q.h(0,b5)
n.toString
A.b(n)
m=A.ax(q.h(0,"addedOn"))
m.toString
l=A.m(q.h(0,"label"))
k=A.m(q.h(0,"country"))
j=A.m(q.h(0,"last4"))
i=A.ax(q.h(0,"issued"))
h=A.ax(q.h(0,"expires"))
if(q.h(0,b6)==null)g=b3
else{g=q.h(0,b6)
g.toString
g=A.BX(t.f.a(g).G(0,t.N,t.X))}r.a=new A.cW(p,o,n,m,l,k,j,i,h,g,A.m(q.h(0,"replaces")),A.m(q.h(0,"fromProposal")))}catch(f){return"a document needs its kind, person and dates written YYYY-MM-DD"}for(q=["issued","expires"],e=0;e<2;++e){d=q[e]
if(J.ar(c1,d)!=null&&A.ax(J.ar(c1,d))==null)return b7}q=r.a
c=A.F4(c2,q.c,q.r,A.c([q.e,q.f],t.q),r.a.y)
if(c!=null)return c
q=r.a
if(q.b===B.br){p=q.e
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
if(b!=null){a=c3.gbD().h(0,b)
if(a==null||b===r.a.a)return"no document "+b+" to renew"
q=a.b
p=r.a
if(q!==p.b||a.c!==p.c)return"a renewal is the same kind for the same person"
q=c3.gbD()
p=A.o(q).i("M<2>")
if(!new A.n(new A.M(q,p),p.i("j(h.E)").a(new A.w_(r,b)),p.i("n<h.E>")).ga4(0))return"that document was renewed already"}q=r.a
c3.a.j(0,q.a,q)
c3.b.Z(0,r.a.a)
break
case"document.remove":a0=J.ar(c1,b4)
if(typeof a0!="string"||!c3.gbD().E(a0))return"no document "+A.i(a0)
c3.b.m(0,a0)
break
case"document.retrieve":a0=J.ar(c1,"recordId")
a1=A.aN(new A.n(B.kc,t.rt.a(new A.w0(c1)),t.vL),t.hn)
if(typeof J.ar(c1,"atUtc")=="string"){q=J.ar(c1,"atUtc")
q.toString
a2=A.DK(A.b(q))}else a2=b3
if(typeof a0!="string"||a1==null||a2==null||c1.gah().M(0,new A.w1()))return"a retrieval holds only which record, what and when"
if(!c3.a.E(a0)&&!c3.d.E(a0)&&c2.a7.lb(a0)==null)return"no record "+a0
a2.F()
B.a.m(c3.e,new A.lp())
break
case"document.source":a0=J.ar(c1,b4)
a3=J.ar(c1,"gone")
if(typeof a0!="string"||!A.ed(a3)||!c3.a.E(a0))return"a source mark is a record and yes or no"
q=c3.c
if(a3)q.m(0,a0)
else q.Z(0,a0)
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
n=A.ag(B.kB,A.b(n),t.gv)
m=q.h(0,b5)
m.toString
A.b(m)
l=A.m(q.h(0,"plan"))
k=A.m(q.h(0,"ownerId"))
j=A.m(q.h(0,"last4"))
if(q.h(0,b8)==null)i=b3
else{i=q.h(0,b8)
i.toString
i=A.aO(t.f.a(i).G(0,t.N,t.X))}h=A.m(q.h(0,"riders"))
g=A.ax(q.h(0,"starts"))
a4=A.ax(q.h(0,"ends"))
if(q.h(0,"premium")==null)a5=b3
else{a5=q.h(0,"premium")
a5.toString
a5=A.aO(t.f.a(a5).G(0,t.N,t.X))}if(q.h(0,b9)==null)a6=b3
else{a6=q.h(0,b9)
a6.toString
a6=A.ag(B.jf,A.b(a6),t.C5)}a7=A.m(q.h(0,"paymentMethod"))
a8=A.ax(q.h(0,"nextDue"))
if(q.h(0,b6)==null)a9=b3
else{a9=q.h(0,b6)
a9.toString
a9=A.BX(t.f.a(a9).G(0,t.N,t.X))}b0=A.m(q.h(0,"accountId"))
if(q.h(0,c0)==null)q=b3
else{q=q.h(0,c0)
q.toString
q=A.aO(t.f.a(q).G(0,t.N,t.X))}s=new A.ep(p,o,n,m,l,k,j,i,h,g,a4,a5,a6,a7,a8,a9,b0,q)}catch(f){return"a policy needs its insurer, type, person and dates written YYYY-MM-DD"}for(q=["starts","ends","nextDue"],e=0;e<3;++e){d=q[e]
if(J.ar(c1,d)!=null&&A.ax(J.ar(c1,d))==null)return b7}if(B.b.I(s.b).length===0)return"a policy needs its insurer"
c=A.F4(c2,s.d,s.r,A.c([s.b,s.e,s.x,s.at],t.q),s.ay)
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
if(s.ch!=null&&!c2.gK().E(s.ch))return"no account "+A.i(s.ch)
b2=s.CW
if(b2!=null){if(s.Q==null||b2.b!==s.Q.b)return"the MediSave part is part of the premium"
q=b2.a
if(q.l(0,$.L())<=0||q.l(0,s.Q.a)>0)return"the MediSave part is more than zero and not more than the premium"}c3.d.j(0,s.a,s)
break
case"policy.remove":if(c3.d.Z(0,J.ar(c1,b4))==null)return"no policy "+A.i(J.ar(c1,b4))
break
default:return"not a record operation"}return b3},
AI(a,b){var s
if(b==="me")s="Me"
else{s=A.a5(a.p3,t.N,t.o).h(0,b)
s=s==null?null:s.b
if(s==null)s="someone removed"}return s},
cp:function cp(a,b){this.a=a
this.b=b},
lp:function lp(){},
tE:function tE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tF:function tF(a){this.a=a},
tG:function tG(){},
w_:function w_(a,b){this.a=a
this.b=b},
w0:function w0(a){this.a=a},
w1:function w1(){},
FK(a,b,c){var s=a.gK().h(0,b),r=s==null?null:s.r
s=r==null||a.aG(r)!=="member"
return s},
FW(a){var s,r,q,p,o,n,m,l,k=A.v(t.N,t.ok)
for(s=A.CF(a,null),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
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
B.a.D(s,new A.zh())
return s},
Gy(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=b.aC(c),g=A.c([],t.DO)
for(s=A.FW(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=p.f
n=!1
if(o!=null){m=p.b
if(A.FK(a,m,i)){m=a.gK().h(0,m)
m=m==null?i:m.CW!=null
if(m!==!0)if(o.l(0,h)<=0)if(B.ee.u(0,p.dA(b)))n=o.l(0,b)>=0||p.dA(b)===B.aF}}if(n)g.push(new A.da(p.b,o,p))}s=a.gK().gT()
r=A.o(s)
o=r.i("n<h.E>")
l=A.B(new A.n(s,r.i("j(h.E)").a(new A.Bx(a,i)),o),o.i("h.E"))
B.a.D(l,new A.By())
for(s=l.length,q=0;q<l.length;l.length===s||(0,A.l)(l),++q){k=l[q]
j=A.CU(k,b).w
if(j instanceof A.el&&j.a.l(0,h)<=0)B.a.m(g,new A.da(k.a,j.a,i))}B.a.D(g,new A.Bz())
return g},
zh:function zh(){},
da:function da(a,b,c){this.c=a
this.d=b
this.e=c},
Bx:function Bx(a,b){this.a=a
this.b=b},
By:function By(){},
Bz:function Bz(){},
FI(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="invoiceId",a=A.c([],t.au)
for(s=a0.a7.aY(B.ak),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q].c
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
k=A.ax(p.h(0,"invoiceDate"))
k.toString
j=A.ax(p.h(0,"date"))
j.toString
i=p.h(0,"seriesId")
i.toString
A.b(i)
h=p.h(0,"seq")
h.toString
A.O(h)
g=p.h(0,"number")
g.toString
A.b(g)
f=p.h(0,"reason")
f.toString
A.b(f)
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
a.push(new A.ci(o,n,m,l,k,j,i,h,g,f,e,d,c,A.O(p)))}}B.a.D(a,new A.xY())
return a},
Mm(a,b){return b.gfc()-B.a.a5(A.FI(a,"rental:"+b.a+":"+(""+b.c+"-"+B.b.ac(B.d.k(b.d),2,"0"))),0,new A.xZ(),t.S)},
Mt(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.s),f=a.a7,e=b.b,d=f.a6(B.aA,e),c=d==null?null:A.m(d.c.h(0,"creditSeriesId"))
if(c==null||f.a6(B.a9,c)==null)B.a.m(g,"The property's credit note series")
d=B.b.I(a1)
if(d.length===0)B.a.m(g,"Why it is credited")
s=b.e
if(a0.l(0,s)<0)B.a.m(g,"A date on or after the invoice")
r=e+":"+(""+a0.a+"-"+B.b.ac(B.d.k(a0.b),2,"0"))
if(f.a6(B.aS,"gstr1-filed:"+r)!=null||f.a6(B.aS,"gst-filed:"+r)!=null)B.a.m(g,"A date in a month whose GSTR-1 is not filed yet")
q=A.Mm(a,b)
if(a2<=0||a2>q)B.a.m(g,"An amount above 0 and at most the "+A.eW(q).k(0)+" not credited yet")
if(g.length!==0)return new A.p(null,g)
c.toString
f=f.a6(B.a9,c)
f.toString
p=b.a
o=b.d
n="rental:"+p+":"
m=""+b.c+"-"
l=A.FI(a,n+(m+B.b.ac(B.d.k(o),2,"0")))
k=A.A2(a,c,a0)
o=B.b.ac(B.d.k(o),2,"0")
f=A.m(f.c.h(0,"pattern"))
f.toString
f=A.yU(f,k,A.fI(A.jH(a0),"{fy}"),null)
j=a2===q
i=j?b.geR()-B.a.a5(l,0,new A.yg(),t.S):A.jK(a2,new A.P(A.aB(9),0))
h=j?b.geg()-B.a.a5(l,0,new A.yh(),t.S):A.jK(a2,new A.P(A.aB(9),0))
j=j?b.z-B.a.a5(l,0,new A.yi(),t.S):A.jK(a2,b.y)
return new A.p(new A.ci(n+(m+o),p,e,b.w,s,a0,c,k,f,d,a2,i,h,j),B.c)},
LE(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a8.e,a3=a2.h(0,"invoiceId"),a4=A.cc(a2.h(0,"date")),a5=a2.h(0,"taxable"),a6=a2.h(0,"reason")
if(typeof a3!="string"||a4==null||!A.cu(a5)||typeof a6!="string")return"a credit note names its invoice, date, amount and reason"
s=a7.a7
r=s.a6(B.ai,a3)
if(r==null)return"no invoice "+a3
q=A.Mt(a7,A.Ef(r),a4,a6,a5)
p=q.a
if(p==null)return"not credited: "+B.a.Y(q.b,", ").toLowerCase()
o=p.x
if(o!==a2.h(0,"number")||p.gdn()!==a2.h(0,"total"))return"the credit note changed since it was shown; make it again"
n=p.r
m=p.f
l=A.fI(A.jH(m),"{fy}")
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
s.e8(new A.b2(B.ak,"credit:"+n+":"+l+":"+k,A.S(["invoiceId",j,"tenancyId",i,"propertyId",h,"invoiceNumber",g,"invoiceDate",f,"date",m,"seriesId",n,"seq",k,"number",o,"reason",e,"taxable",d,"cgst",c,"sgst",b,"tds",a],t.N,t.X)))
e=a7.aD.c
a0=e.h(0,a3)
s=a0==null
a1=s?null:a0.y
if(!s&&a1!=null){s=a0.a
o=a0.c
n=a0.e
m=a0.f.a9(0,A.eW(p.gdn()))
l=a0.w
e.j(0,a3,new A.eq(s,a0.b,o,a0.d,n,m,a0.r,l,a0.x,new A.iS(a1.a.a9(0,A.eW(d)),a1.b.a9(0,A.eW(c+b)),a1.c.a9(0,A.eW(a)))))}return null},
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
xY:function xY(){},
xZ:function xZ(){},
yg:function yg(){},
yh:function yh(){},
yi:function yi(){},
eW(a){var s=a<0?"-":"",r=Math.abs(a)
return A.a2(A.ad(s+B.d.C(r,100)+"."+B.b.ac(""+B.d.R(r,100),2,"0")),"INR")},
jK(a,b){return B.d.C(a*b.a_(0,new A.P(A.aB(100),0)).aZ().b_(0)+5000,1e4)},
jH(a){var s=a.a
return a.b>=4?s:s-1},
fI(a,b){var s,r=new A.yX(),q=B.b.u(b,"-")?"-":"/"
A:{if("{yyyy-yyyy}"===b||"{yyyy/yyyy}"===b){s=""+a+q+(a+1)
break A}if("{yyyy-yy}"===b||"{yyyy/yy}"===b){s=""+a+q+A.i(r.$1(a+1))
break A}s=A.i(r.$1(a))+q+A.i(r.$1(a+1))
break A}return s},
yU(a,b,c,d){var s=null,r=2000+A.X(B.b.X(c,0,2),s,s),q=d==null?r:d,p=t.r,o=t.tj
return A.hP(A.hP(A.ao(a,"{yyyy}",""+q),A.D("\\{(n+)\\}",!0,!1),o.a(p.a(new A.yV(b))),s),$.Dj(),o.a(p.a(new A.yW(r))),s)},
IH(a,b,c){return new A.dE(a,b,c,A.jK(c,new A.P(A.aB(9),0)),A.jK(c,new A.P(A.aB(9),0)))},
Ee(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){return new A.tN(a1,p,a3,m,f,r,q,n,l,a0,s,a2,k,d,o,j,i,h,a,e,b,g,c)},
Ef(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a5.c,a4=a3.h(0,"month")
a4.toString
s=A.X(B.b.X(A.b(a4),0,4),a2,a2)
a4=a3.h(0,"month")
a4.toString
r=A.X(B.b.ad(A.b(a4),5),a2,a2)
a4=a3.h(0,"tenancyId")
a4.toString
A.b(a4)
q=a3.h(0,"propertyId")
q.toString
A.b(q)
p=A.ax(a3.h(0,"date"))
p.toString
o=a3.h(0,"seriesId")
o.toString
A.b(o)
n=a3.h(0,"seq")
n.toString
A.O(n)
m=a3.h(0,"number")
m.toString
A.b(m)
l=A.c([],t.t7)
k=a3.h(0,"lines")
k.toString
k=J.dh(t.j.a(k),t.mE)
j=k.$ti
k=new A.ac(k,k.gq(0),j.i("ac<R.E>"))
i=t.N
h=t.X
j=j.i("R.E")
while(k.n()){g=k.d
g=(g==null?j.a(g):g).G(0,i,h)
f=g.h(0,"description")
f.toString
A.b(f)
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
l.push(new A.dE(f,e,d,c,A.O(g)))}k=a3.h(0,"tdsPercent")
k.toString
k=A.ad(A.b(k))
j=a3.h(0,"tds")
j.toString
A.O(j)
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
return A.Ee(b,a0,A.m(a3.h(0,"accountNote")),g,a,p,a1,c,d,e,h,l,r,m,f,q,n,o,j,k,a4,i,s)},
FV(a,b,c,d){var s=a.a7.a6(B.ai,"rental:"+b+":"+(""+c+"-"+B.b.ac(B.d.k(d),2,"0")))
return s==null?null:A.Ef(s)},
A2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a7,h=i.a6(B.a9,b).c,g=J.Y(h.h(0,"yearly"),!0),f=A.m(h.h(0,"pattern"))
f.toString
s=new A.A5(B.b.u(f,"{yyyy}"))
r=s.$1(c)
f=t.Z
q=A.c([],f)
for(p=0;p<4;++p)for(o=i.aY(B.ki[p]),n=o.length,m=0;m<o.length;o.length===n||(0,A.l)(o),++m){l=o[m]
if(A.m(l.c.h(0,"seriesId"))===b)q.push(l)}if(g){i=A.c([],f)
for(f=q.length,p=0;p<q.length;q.length===f||(0,A.l)(q),++p){l=q[p]
o=A.ax(l.c.h(0,"date"))
o.toString
if(J.Y(s.$1(o),r))i.push(l)}k=i}else k=q
if(k.length!==0){i=A.F(k)
return new A.ah(k,i.i("d(1)").a(new A.A3()),i.i("ah<1,d>")).cS(0,new A.A4())+1}if(q.length!==0)return 1
j=A.m(h.h(0,"startYear"))
if(g&&j!=null&&j!==r)i=1
else{i=A.aG(h.h(0,"startNumber"))
i.toString}return i},
MP(a,b){var s,r,q,p,o,n=a.a7,m=n.a6(B.at,b)
if(m==null)return B.ke
s=n.a6(B.aR,b)
r=m.c
q=A.m(r.h(0,"propertyId"))
q.toString
p=n.a6(B.aA,q)
o=m.av("rent")
q=A.c([],t.s)
if(A.m(r.h(0,"role"))!=="landlord")q.push("You are not the landlord of this tenancy")
r=o==null
if(r)q.push("The tenancy's rent")
if(!r&&o.b!=="INR")q.push("The rent in rupees")
if(s==null)q.push("The invoicing details")
r=p==null
if((r?null:A.m(p.c.h(0,"bookId")))==null)q.push("The property's book")
if(!r&&n.a6(B.aT,p.b)==null)q.push("The invoice issuer")
return q},
Mu(b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=" for the month of ",b0="description",b1="amount",b2="currency",b3=A.FV(b4,b5,b6,b7)
if(b3!=null)return new A.p(b3,B.c)
s=A.MP(b4,b5)
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
j=A.c([],t.Z)
for(h=r.aY(B.bJ),g=h.length,f=0;f<h.length;h.length===g||(0,A.l)(h),++f){e=h[f]
if(A.m(e.c.h(0,"tenancyId"))===b5)j.push(e)}h=A.m(l.h(0,"service"))
g=A.aG(l.h(0,"sac"))
if(g==null)g=997212
q=A.c([A.IH(A.i(h)+a9+i,g,q.av("rent").gbx())],t.t7)
for(h=j.length,g=t.f,d=k==="2",c=t.N,b=t.X,f=0;f<j.length;j.length===h||(0,A.l)(j),++f){a=j[f].c
a0=d?A.i(A.m(a.h(0,b0)))+" "+i:A.i(A.m(a.h(0,b0)))+a9+i
a1=A.aG(a.h(0,"sac"))
a1.toString
if(g.b(a.h(0,b1))){a=a.h(0,b1)
a.toString
a=g.a(a).G(0,c,b)
a2=a.h(0,b1)
a2.toString
a2=A.ad(A.b(a2))
a=a.h(0,b2)
a.toString
A.b(a)
a3=new A.q(a2,a)
a4=B.e.h(0,a)
if(a4==null)A.f(A.x(a,b2,"is not a supported currency"))
if((a2.b<=0?0:Math.max(a2.gv().b,0))>a4)A.f(A.y(a+" allows "+A.i(a4)+" decimal places",a2.k(0),a8))
a=a3}else a=a8
a=a.gbx()
q.push(new A.dE(a0,a1,a,B.d.C(a*new A.P(A.aB(9).a_(0,A.aB(100)),0).aZ().b_(0)+5000,1e4),B.d.C(a*new A.P(A.aB(9).a_(0,A.aB(100)),0).aZ().b_(0)+5000,1e4)))}j=A.m(l.h(0,"seriesId"))
j.toString
a5=A.A2(b4,j,b8)
a6=p.dc("tdsPercent")
if(a6==null)a6=$.HZ()
a7=B.a.a5(q,0,new A.yk(),t.S)
p=b4.gK().h(0,A.m(l.h(0,"accountId")))
p.toString
r=A.m(r.a6(B.a9,j).c.h(0,"pattern"))
r.toString
r=A.yU(r,a5,A.fI(A.jH(b8),"{fy}"),a8)
h=A.jK(a7,a6)
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
a=B.b.ad(a,a.length-4)
a0=A.m(l.h(0,"ifsc"))
a0.toString
l=k==="3"?a8:A.m(l.h(0,"accountNote"))
return new A.p(A.Ee(p.a,a,l,d,p.c,b8,a0,m,b,k,g,q,b7,r,c,n,a5,j,h,a6,b5,o,b6),B.c)},
LF(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a="personal",a0="prop.income",a1=a7.e,a2=a1.h(0,"tenancyId"),a3=a1.h(0,"month"),a4=A.cc(a1.h(0,"date")),a5=typeof a3=="string"?A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1).aj(a3):b
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
if(A.FV(a6,a2,q,p)!=null)return"that month is already invoiced"
o=A.Mu(a6,a2,q,p,a4)
n=o.a
if(n==null)return"not invoiced: "+B.a.Y(o.b,", ").toLowerCase()
s=n.w
if(s!==a1.h(0,"number")||n.gdn()!==a1.h(0,"total"))return"the invoice changed since it was shown; make it again"
r=a6.a7
m=r.a6(B.at,a2)
m.toString
l=A.m(r.a6(B.aA,n.b).c.h(0,"bookId"))
l.toString
k=A.c([],t.s)
for(j=t.N,i=A.a5(a6.d,j,t.G).gT(),i=i.gA(i),h=a6.f,g=l==="personal";i.n();){f=i.gt()
e=f.b
d=h.h(0,l)
if(d==null)d=g?a:b
c=!1
if(e===(d==="member"?a:d)){e=f.a
if(!(e==="income"||B.b.bG(e,".income"))){e=f.d
if(e!=null)e=e==="income"||B.b.bG(e,".income")
else e=c}else e=!0}else e=c
if(e)k.push(f.a)}B.a.ba(k)
i=n.a
h=n.c
g=n.d
i="rental:"+i+":"
h=""+h+"-"
r.e8(new A.b2(B.ai,i+(h+B.b.ac(B.d.k(g),2,"0")),n.fd()))
r=B.b.ac(B.d.k(g),2,"0")
g=B.b.ac(B.d.k(g),2,"0")
m=A.m(m.c.h(0,"otherParty"))
m.toString
f=n.e
e=A.eW(n.gdn())
k=B.a.u(k,a0)?a0:A.aN(k,j)
a6.aD.c.j(0,i+(h+r),new A.eq(i+(h+g),l,m,s,f,e,k,"owner",b,new A.iS(A.eW(n.gfc()),A.eW(n.geR()+n.geg()),A.eW(n.z))))
return b},
yX:function yX(){},
yV:function yV(a){this.a=a},
yW:function yW(a){this.a=a},
dE:function dE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tN:function tN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
tQ:function tQ(){},
tO:function tO(){},
tP:function tP(){},
A5:function A5(a){this.a=a},
A3:function A3(){},
A4:function A4(){},
yk:function yk(){},
IO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.h(0,"bookId")
h.toString
A.b(h)
s=a.h(0,"period")
s.toString
A.b(s)
r=a.h(0,"version")
r.toString
A.O(r)
q=a.h(0,"title")
q.toString
A.b(q)
q=A.c([],t.D6)
p=a.h(0,"rows")
p.toString
o=t.j
p=J.Q(o.a(p))
n=t.N
while(p.n()){m=p.gt()
m.toString
l=J.dh(o.a(m),n)
k=l.a
j=J.an(k)
i=l.$ti.y[1]
q.push(new A.iT(i.a(j.h(k,0)),i.a(j.h(k,1)),i.a(j.h(k,2))))}return new A.fg(h,s,r,q)},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=d},
N4(a){var s=a.d,r=A.a2($.L(),s.a.b),q=new A.zI(s,r),p=new A.zK(B.dQ,r)
return new A.pb(a.c.a,B.dQ.gT().a5(0,r,new A.zJ(),t.B),J.I1(q.$1(B.aE),q.$1(B.b9)).a9(0,p.$1(B.aE)).a9(0,p.$1(B.b9)),J.I2(q.$1(B.cb),p.$1(B.cb)),s.f.a9(0,p.$1(null)))},
pb:function pb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zI:function zI(a,b){this.a=a
this.b=b},
zK:function zK(a,b){this.a=a
this.b=b},
zJ:function zJ(){},
FX(a,b,c){var s,r,q,p,o,n=t.AD,m=A.v(t.N,n)
for(s=a.to.a,n=A.aC(new A.M(s,A.o(s).i("M<2>")),n),s=n.length,r=0;r<s;++r){q=n[r]
if(q.d!==b||q.f.l(0,c)>0)continue
p=q.a
o=m.h(0,p)
if(o==null||q.f.l(0,o.f)>0)m.j(0,p,q)}return m},
CD(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h="currency",g="is not a supported currency"
for(s=A.aC(a.fx,t.v),r=s.length,q=b.b,p=b.a,o=b.w,n=null,m=0;m<r;++m){l=s[m]
if(l.b===p){k=l.d
k=k.l(0,c)>0||k.l(0,o)<0}else k=!0
if(k)continue
if(n!=null&&l.d.l(0,n.c)<=0)continue
k=l.r!=null?B.na:B.nb
n=new A.bz(q,l.f,l.d,k,b)}if(b.d===B.o)for(s=d.gT(),s=s.gA(s);s.n();){r=s.gt()
if(r.r!==p)continue
if(n!=null&&r.f.l(0,n.c)<=0)continue
o=r.e
k=o.b
j=$.L()
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,h,g))
if((j.b<=0?0:Math.max(j.gv().b,0))>i)A.f(A.y(k+" allows "+A.i(i)+" decimal places",j.k(0),null))
o=o.a
o=j.B(0,new A.P(o.a.S(0),o.b))
i=B.e.h(0,k)
if(i==null)A.f(A.x(k,h,g))
if((o.b<=0?0:Math.max(o.gv().b,0))>i)A.f(A.y(k+" allows "+A.i(i)+" decimal places",o.k(0),null))
n=new A.bz(q,new A.q(o,k),r.f,B.co,b)}return n},
Ge(a,b,c,d){var s,r,q,p,o,n=A.FX(a,b,d),m=A.c([],t.oc),l=A.c([],t.Q),k=a.gK().gT(),j=A.o(k),i=j.i("n<h.E>"),h=A.B(new A.n(k,j.i("j(h.E)").a(new A.zW(b,d)),i),i.i("h.E"))
B.a.D(h,new A.zX())
for(k=h.length,s=0;s<h.length;h.length===k||(0,A.l)(h),++s){r=h[s]
q=r.d===B.x?null:A.CD(a,r,d,n)
if(q==null)B.a.m(l,r)
else B.a.m(m,q)}for(k=new A.a1(n,n.r,n.e,A.o(n).i("a1<2>"));k.n();){j=k.d
if(j.c!==B.cn)i=j.e.a.l(0,$.L())===0
else i=!0
if(i)continue
B.a.m(m,new A.bz(B.b.I(j.b),j.e,j.f,B.co,null))}p=new A.zY(m)
k=A.a3(t.N)
for(j=m.length,s=0;s<m.length;m.length===j||(0,A.l)(m),++s)k.m(0,m[s].b.b)
k.Z(0,c)
j=p.$1(c)
i=A.c([],t.C7)
k=A.B(k,k.$ti.c)
B.a.ba(k)
o=k.length
s=0
for(;s<k.length;k.length===o||(0,A.l)(k),++s)i.push(p.$1(k[s]))
return new A.l4(j,i,l)},
Gf(a,b,c,d,e,f,g){var s,r,q,p=g*12+e-1,o=A.c([],t.sp)
for(s=p-c+1;s<=p;++s){r=A.ay(B.d.C(s,12),B.d.R(s,12)+1+1,1).aw(-864e8)
q=new A.z(A.b0(r),A.b4(r),A.au(r))
o.push(A.Ge(a,b,d,q.l(0,f)>0?f:q))}return o},
ht:function ht(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
uq:function uq(){},
ur:function ur(){},
l4:function l4(a,b,c){this.b=a
this.c=b
this.d=c},
zW:function zW(a,b){this.a=a
this.b=b},
zX:function zX(){},
zY:function zY(a){this.a=a},
zZ:function zZ(){},
A_:function A_(a){this.a=a},
A0:function A0(){},
A1:function A1(){},
NE(a,b,c,d,e){var s,r,q,p,o,n,m=B.b.I(a.b)
if(B.b.I(a.a).length===0)return"a value needs its holding"
s=m.length
if(s===0)return"give the value a name"
if(s>60)return"the name is at most 60 characters"
if($.eZ().aM(0,m).gq(0)>=9)return"the name looks like it holds a full account number; leave the number out"
s=a.d
if(!c.a.E(s))return"no book "+s
r=a.e
q=r.b
if(!B.e.E(q))return"currency "+q+" is not supported"
if(r.a.l(0,$.L())<0)return"a value is zero or more"
if(a.f.l(0,e)>0)return"the as of date cannot be in the future"
p=a.r
r=a.c
if(r===B.cn){o=p==null?null:b.a.h(0,p)
if(o==null||o.d!==B.o)return"a loan balance is for one of your loans"
n=o.e
if(n!==q)return"the loan balance must be in "+n
if(o.r!==s)return"the loan is in another book"}else if(p!=null)return"only a loan balance names an account"
if(d!=null)s=d.c!==r||d.e.b!==q||d.r!=p
else s=!1
if(s)return"this holding is a "+d.c.b+" in "+d.e.b+"; add a new one instead"
return null},
cL:function cL(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
NP(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=t.xG,a0=A.a3(a)
for(s=a2.length,r=0;r<a2.length;a2.length===s||(0,A.l)(a2),++r){q=a2[r]
a0.m(0,new A.bA(q.a,q.b,q.c))}p=A.v(a,t.W)
for(a=a1.b2(),s=J.Q(a.a),a=new A.N(s,a.b,a.$ti.i("N<1>"));a.n();){o=s.gt()
if(o.Q!=null){n=o.d
n=n!==B.n&&n!==B.w}else n=!0
if(n)continue
n=o.b
m=o.z
l=new A.bA(n,A.cP(m==null?"":m),o.e)
if(!a0.u(0,l))continue
k=p.h(0,l)
j=k==null?1:o.x.l(0,k.x)
if(j<=0)if(j===0){n=o.a
m=k.a
if(n===m)n=0
else n=n<m?-1:1
n=n>0}else n=!1
else n=!0
if(n)p.j(0,l,o)}a=A.c([],t.qt)
for(a0=a2.length,s=a1.e,o=t.N,n=t.R,m=a1.b.a,r=0;r<a2.length;a2.length===a0||(0,A.l)(a2),++r){q=a2[r]
i=A.a3(o)
for(h=q.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.l)(h),++f){e=m.h(0,h[f])
e=e==null?b:e.c
if(e!=null)i.m(0,e)}i=A.NZ(q,i,A.a5(s,o,n).gT())
if(i==null){d=p.h(0,new A.bA(q.a,q.b,q.c))
A:{if(d!=null){i=B.a.M(h,new A.Bk(a1))
c=d}else{c=b
i=!1}if(i){i=c.d
i.toString
h=c.Q
h.toString
h=new A.ik(i,h,b)
i=h
break A}i=b
break A}}a.push(i)}return a},
NZ(a,b,c){var s,r,q,p
if(b.a===0)return null
s=A.o(c)
r=s.i("n<h.E>")
q=A.B(new A.n(c,s.i("j(h.E)").a(new A.BF(a,b)),r),r.i("h.E"))
B.a.D(q,new A.BG())
if(q.length===0||!B.a.b5(q,new A.BH(q)))return null
p=B.a.ga0(q)
return new A.ik(p.d,p.e,p.a)},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
Bk:function Bk(a){this.a=a},
BF:function BF(a,b){this.a=a
this.b=b},
BE:function BE(a,b){this.a=a
this.b=b},
BG:function BG(){},
BH:function BH(a){this.a=a},
NW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.v(t.xG,t.C)
for(s=a.f2(b),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
p=q.d
if(p!=null)p=(p===B.n||p===B.w)&&q.Q==null
else p=!0
if(!p)continue
p=q.z
o=A.cP(p==null?"":p)
if(o.length===0)continue
J.bU(f.aI(new A.bA(o,q.f.b,q.e),new A.Bu()),q)}for(s=f.$ti,r=new A.a1(f,f.r,f.e,s.i("a1<2>"));r.n();)J.mR(r.d,new A.Bv())
r=A.c([],t.wp)
for(s=new A.ab(f,s.i("ab<1,2>")).gA(0),q=t.B,p=t.s;s.n();){n=s.d
m=n.a
l=m.b
k=n.b
n=J.aX(k)
j=n.ga0(k).z
j.toString
j=B.b.I(j)
i=A.c([],p)
for(h=n.gA(k);h.n();)i.push(h.gt().a)
h=$.L()
g=B.e.h(0,l)
if(g==null)A.f(A.x(l,"currency","is not a supported currency"))
if((h.b<=0?0:Math.max(h.gv().b,0))>g)A.f(A.y(l+" allows "+A.i(g)+" decimal places",h.k(0),null))
r.push(new A.cF(b,m.a,m.c,j,i,n.a5(k,new A.q(h,l),new A.Bw(),q)))}B.a.D(r,A.Nu())
return r},
Mc(a,b){var s,r,q,p=t.t5
p.a(a)
p.a(b)
s=B.d.l(b.e.length,a.e.length)
if(s!==0)return s
r=B.b.l(a.b,b.b)
if(r!==0)return r
q=B.b.l(a.f.b,b.f.b)
return q!==0?q:B.d.l(b.c.a,a.c.a)},
FD(a0,a1,a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="categoryId",a={}
a.a=a7
s=new A.xB(a,a4,a5)
r=t.Y
q=A.c([],r)
for(p=a1.e,o=p.length,n=a0.b.a,m="bulk:"+a2,l=m+":",k=t.N,j=t.X,i=a8.b,h="bulk."+a2,g=0;g<p.length;p.length===o||(0,A.l)(p),++g){f=p[g]
e=n.h(0,f)
d=!1
if(e!=null){d=e.d
if(d!=null)d=(d===B.n||d===B.w)&&e.Q==null
else d=!0}else e=null
if(d){d=e.dx
c=A.v(k,j)
c.j(0,"movementId",f)
c.j(0,"type",i)
c.j(0,b,a3)
c.j(0,"baseVersion",d)
if(a6)c.j(0,"ruleId",h)
else c.j(0,"actionId",a2)
q.push(s.$3(l+f+":v"+d,"movement.classify",c))}}if(a6){p=A.v(k,j)
p.j(0,"id",h)
p.j(0,"bookId",a1.a)
p.j(0,"pattern",a1.b)
p.j(0,"accountAlias",null)
p.j(0,"direction",a1.c.b)
p.j(0,"type",i)
p.j(0,b,a3)
B.a.a1(q,A.c([s.$3(m+":rule","rule.propose",p),s.$3(m+":confirm","rule.confirm",A.S(["id",h],k,j))],r))}return q},
M4(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.Y)
for(s=b.e,r=s.length,q=a.b.a,p="bulk:"+c+":",o=t.N,n=t.X,m=f,l=0;l<s.length;s.length===r||(0,A.l)(s),++l){k=s[l]
j=q.h(0,k)
if(j!=null)i=j.d==null
else{j=null
i=!1}if(i){i=j.dx
h=m+1
g.push(new A.ai(p+k+":v"+i,d,m,"movement.markTransfer",A.S(["movementId",k,"baseVersion",i],o,n),e))
m=h}}return g},
cF:function cF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Bu:function Bu(){},
Bv:function Bv(){},
Bw:function Bw(){},
xB:function xB(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b){this.a=a
this.b=b},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ns(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=288e8,a6=t.N,a7=t.k,a8=A.v(a6,a7),a9=new A.B1(b1),b0=new A.B_(a8)
B.a.a2(A.aC(b1.c,a7),b0)
for(a7=b1.gme(),s=a7.length,r=t.s,q=0;q<s;++q){p=a7[q]
o=A.Kq(b1,p)
if(o!=null){n=o.a
m=p.CW
if(m==null){m=p.w
l=m.F()
m.F()
k=l.aw(a5)
l=new A.z(A.b0(k),A.b4(k),A.au(k))
m=l}m=A.Mk(b1,n,m)
n=m}else n=!1
if(n)continue
n=A.c([],r)
m=p.r
if(m!=null)n.push(m.k(0))
m=p.y
if(m!=null)n.push(m)
j=B.a.Y(n,", ")
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
if(n){m=b1.gK().gT()
l=A.o(m)
e=new A.n(m,l.i("j(h.E)").a(new A.B2(p)),l.i("n<h.E>")).gq(0)>1}else e=!1
m=p.a
l=j.length===0?"":" ("+j+")"
if(e)n=": two accounts are called "+f+"; change one alias."
else if(n)n=" for that account to be added."
else if(g)n=": it shows only part of the number, so pick its account."
else n=i!=null?" for one account of that bank and currency ending in those digits.":": it does not say which account; the statement shows it."
b0.$1(new A.W("held:"+m,B.aD,m,"A message for "+f+l+" waits"+n))}for(a7=b1.gir(),s=a7.length,q=0;q<s;++q){p=a7[q]
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
m=" on "+new A.z(A.b0(k),A.b4(k),A.au(k)).k(0)}b0.$1(new A.W("suspect:"+r,B.c2,r,"A message from "+n+m+" may not be from the bank: "+A.i(p.ax)+". Check it in the bank app, not through anything in the message. Nothing from it was recorded."))}for(a7=A.aC(b1.ok,t.pL),s=a7.length,q=0;q<s;++q){c=a7[q]
o=c.c
if(o==null)o="an account it does not name"
r=c.f
b=r==null?"":" on "+r.k(0)
r=c.a
n=c.r
m=n?B.c7:B.c3
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
if((h.b<=0?0:Math.max(h.gv().b,0))>a0)A.f(A.y(l+" allows "+A.i(a0)+" decimal places",h.k(0),null))
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
m="You reported "+j+" to the bank on "+new A.z(A.b0(k),A.b4(k),A.au(k)).k(0)+". It counts as spending until the reversal arrives and is linked."}b0.$1(new A.W("flag:"+n,B.c4,n,m))}B.a.a2(A.NG(b1),b0)
B.a.a2(A.NH(b1),b0)
B.a.a2(A.MA(b1).b,b0)
B.a.a2(A.Mz(b1).b,b0)
B.a.a2(A.Na(b1).b,b0)
a2=A.MB(b1,b2)
B.a.a2(a2.c,b0)
for(a7=a2.b,s=a7.length,q=0;q<a7.length;a7.length===s||(0,A.l)(a7),++q){a3=a7[q]
n=r.h(0,a3.a)
n.toString
m=r.h(0,a3.b)
l=n.a
b0.$1(new A.W("transfer?:"+l+":"+m.a,B.P,l,n.f.k(0)+" left "+A.i(a9.$1(n.c))+" on "+n.w.k(0)+" and "+m.f.k(0)+" reached "+A.i(a9.$1(m.c))+" on "+m.w.k(0)+": if this is a move between your own accounts, pair them."))}B.a.a2(A.Nw(b1),b0)
B.a.a2(A.Mp(b1),b0)
B.a.a2(A.MQ(b1),b0)
B.a.a2(A.N5(b1),b0)
B.a.a2(A.NC(b1),b0)
a7=A.a3(a6)
for(s=A.Gr(b1),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){a4=s[q]
a7.m(0,"missing-statement:"+a4.a+":"+a4.b.k(0))}s=A.N2(b1,b2)
r=A.F(s)
new A.n(s,r.i("j(1)").a(new A.B3(a7)),r.i("n<1>")).a2(0,b0)
B.a.a2(A.No(b1),b0)
B.a.a2(A.Mb(b1,b2),b0)
B.a.a2(A.Ne(b1,b2),b0)
B.a.a2(A.N0(b1),b0)
B.a.a2(A.M5(b1),b0)
r=a8.$ti.i("M<2>")
a7=r.i("n<h.E>")
a6=A.B(new A.n(new A.M(a8,r),r.i("j(h.E)").a(new A.B4(b1,A.a5(b1.y1,a6,t.h),b2)),a7),a7.i("h.E"))
B.a.D(a6,new A.B5())
return a6},
B1:function B1(a){this.a=a},
B_:function B_(a){this.a=a},
B0:function B0(a){this.a=a},
B2:function B2(a){this.a=a},
B3:function B3(a){this.a=a},
B4:function B4(a,b,c){this.a=a
this.b=b
this.c=c},
B5:function B5(){},
FZ(a,b,c){var s,r=null
A:{s=A.Gv(a,b)
if(!s){s=b===B.m?"money coming in is never an expense: file it as income or link it as a refund (INC-03)":"money going out is never income (INC-03)"
break A}if(B.G===a&&b!==B.m){s="a refund is money coming back"
break A}if(B.L===a){if(c==null)s=r
else s=c.gaR()||c.d===B.a7
s=s!==!0}else s=!1
if(s){s="a transfer is on a bank account"
break A}if(B.X===a){if(b===B.k){s=c==null?r:c.gaR()
s=s===!0}else s=(c==null?r:c.d)===B.y
s=!s}else s=!1
if(s){s="a card bill payment is a bank debit or a card credit"
break A}s=r
break A}return s},
N7(a){var s
t.W.a(a)
s=a.d
if(s!=null)s=(s===B.n||s===B.w)&&a.Q==null
else s=!0
return s},
cP(a){var s,r=$.vC.h(0,a)
if(r!=null)return r
if($.vC.a>=2e4)$.vC.ao(0)
s=$.HT()
s=B.b.I(A.ao(a.toUpperCase(),s," "))
$.vC.j(0,a,s)
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
CW(a,b,c,d,e){var s=J.mT(b,new A.zu(a,d,c,e)),r=A.B(s,s.$ti.i("h.E"))
B.a.D(r,new A.zv())
if(r.length===0)return new A.hd()
return B.a.b5(r,new A.zw(B.a.ga0(r)))?new A.iM(B.a.ga0(r)):new A.hi(r)},
M6(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.c([],t.Y)
for(s=a0.b2(),r=s.$ti,r.i("j(h.E)").a(A.jM()),s=s.gA(0),r=new A.N(s,A.jM(),r.i("N<h.E>")),q=t.N,p=t.X,o=a0.r.a,n=a0.e,m=t.R,l=a3;r.n();){k=s.gt()
j=A.a5(n,q,m).gT()
i=k.z
if(i==null)h=new A.hd()
else{g=A.cP(i)
f=k.b
h=A.CW(g,j,k.c,f,k.e)}if(!(h instanceof A.iM))continue
j=h.a
g=j.d
f=k.e
if(A.FZ(g,f,o.h(0,k.c))!=null)continue
if(!A.Nv(j,k))continue
e=j.y
if(e!=null){if(f!==B.k||k.b===e)continue
g=j.a
f=k.a
k=k.dx
d=l+1
B.a.m(a,new A.ai("rule:"+g+":"+f+":v"+k,a1,l,"movement.forBook",A.S(["movementId",f,"baseVersion",k,"bookId",e,"categoryId",j.e,"ruleId",g],q,p),a2))
l=d
continue}f=j.a
c=k.a
k=k.dx
d=l+1
b=A.v(q,p)
b.j(0,"movementId",c)
b.j(0,"type",g.b)
b.j(0,"categoryId",j.e)
b.j(0,"baseVersion",k)
b.j(0,"ruleId",f)
j=j.x
if(j!=null)b.j(0,"memberId",j)
B.a.m(a,new A.ai("rule:"+f+":"+c+":v"+k,a1,l,"movement.classify",b,a2))
l=d}return a},
Nw(a){var s,r,q,p,o,n,m,l,k=A.c([],t.kz)
for(s=A.a5(a.e,t.N,t.R).gT(),s=s.gA(s);s.n();){r=s.gt()
if(r.f)k.push(r)}if(k.length<2)return B.jY
q=new A.B7(A.v(t.Cw,t.cT),k)
k=A.c([],t.M)
for(s=a.b2(),r=s.$ti,r.i("j(h.E)").a(A.jM()),s=s.gA(0),r=new A.N(s,A.jM(),r.i("N<h.E>"));r.n();){p=s.gt()
o=q.$1(p)
if(o instanceof A.hi){n=o.a
m=p.a
l=A.F(n)
k.push(new A.W("rules-disagree:"+m,B.c0,m,"Rules "+new A.ah(n,l.i("e(1)").a(new A.B6()),l.i("ah<1,e>")).Y(0," and ")+" disagree about "+A.i(p.z)+"; choose one or change a rule."))}}return k},
Nv(a,b){var s,r=b.z,q=r==null?null:A.ND(r,b.e)
if(q!=null&&q!==a.d)return!1
s=a.Q
if(!a.z&&s!=null&&b.y.c.hl(s))return!1
return!0},
cH:function cH(){},
hd:function hd(){},
iM:function iM(a){this.a=a},
hi:function hi(a){this.a=a},
zu:function zu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zv:function zv(){},
zw:function zw(a){this.a=a},
B7:function B7(a,b){this.a=a
this.b=b},
B8:function B8(a,b,c){this.a=a
this.b=b
this.c=c},
B6:function B6(){},
ND(a,b){var s,r,q=A.D("[^A-Za-z0-9]+",!0,!1),p=A.cP(A.ao(a,q," "))
q=new A.Bc(p)
if(!q.$1(B.jA)){s=A.D("(?:^| )"+A.hN("FUNDS TRANSFER")+"(?: |$)",!0,!1)
if(s.b.test(p)){s=A.D("(?:^| )"+A.hN("OWN")+"(?: |$)",!0,!1)
s=s.b.test(p)}else s=!1}else s=!0
if(s)return B.L
if(q.$1(B.kr))return B.X
r=b===B.m
if(r&&q.$1(B.kt))return B.G
if(!r&&q.$1(B.ky))return B.n
if(r){q=A.D("(?:^| )"+A.hN("INTEREST")+"(?: |$)",!0,!1)
q=q.b.test(p)}else q=!1
if(q)return B.w
return null},
Bc:function Bc(a){this.a=a},
Bd:function Bd(a){this.a=a},
If(a){var s=new A.n_(a)
s.$1("backupKeepManual")
s.$1("backupKeepDaily")
s.$1("passphraseIntervalDays")
return new A.mZ(s.$1("staleBalanceDays"))},
mZ:function mZ(a){this.d=a},
n_:function n_(a){this.a=a},
Jf(a){var s,r,q,p,o,n,m=a.h(0,"id")
m.toString
A.b(m)
s=a.h(0,"title")
s.toString
A.b(s)
r=A.c([],t.EP)
q=a.h(0,"items")
q.toString
q=J.dh(t.j.a(q),t.J)
p=q.$ti
q=new A.ac(q,q.gq(0),p.i("ac<R.E>"))
p=p.i("R.E")
while(q.n()){o=q.d
if(o==null)o=p.a(o)
n=o.h(0,"id")
n.toString
A.b(n)
o=o.h(0,"text")
o.toString
r.push(new A.lt(n,A.b(o)))}q=a.h(0,"check")
q.toString
A.b(q)
return new A.lu(m,s,r)},
lt:function lt(a,b){this.a=a
this.b=b},
lu:function lu(a,b,c){this.a=a
this.b=b
this.c=c},
tZ:function tZ(a){this.a=a},
Gg(a){var s,r=B.b.I(a).toUpperCase(),q=A.D("[ -]",!0,!1),p=A.ao(r,q,"")
q=$.HL()
if(q.b.test(p))return p
s=B.b.f8(B.b.f8(r,$.Hp(),""),$.Hq(),"")
q=$.Hk()
return q.b.test(s)?s:null},
Jg(a){var s=t.c5,r=A.B(a,s)
B.a.D(r,new A.u3())
return new A.u2(A.aC(r,s))},
NB(a,b,c,d,e,f){var s,r=t.N,q=t.X,p=A.v(r,q)
p.j(0,"id",a.a)
p.j(0,"kind",a.b.b)
s=a.c
if(s!=null)p.j(0,"institution",s)
r=A.kW(p,r,q)
if(f)r.j(0,"removed",!0)
return new A.ai(d,c,b,"sms.sender",r,e.F())},
c7:function c7(a,b,c){this.c=a
this.a=b
this.b=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
u2:function u2(a){this.a=a},
u3:function u3(){},
l8:function l8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
NH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.N,c=A.v(d,t.C)
for(s=a.b2(),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.n();){q=r.gt()
if(q.CW==null)J.bU(c.aI(q.c,new A.Bf()),q)}d=A.v(d,t.sO)
for(s=new A.ab(c,c.$ti.i("ab<1,2>")).gA(0),r=t.W,q=t.qM;s.n();){p=s.d
o=p.a
n=p.b
p=A.c([],q)
for(m=A.bO(n,0,r),l=J.Q(m.a),k=m.b,m=new A.as(l,k,A.o(m).i("as<1>"));m.n();){j=m.c
j=j>=0?new A.p(k+j,l.gt()):A.f(A.ak())
p.push(new A.p(j.a,j.b))}B.a.D(p,new A.Bg())
d.j(0,o,p)}i=new A.Bh(d)
d=A.c([],t.M)
for(s=A.aC(a.fx,t.v),r=s.length,h=0;h<r;++h){g=s[h]
for(q=g.d,p=i.$3(g.b,g.c,q),m=p.$ti,p=new A.eb(p.a(),m.i("eb<1>")),l="unmatched:"+g.a+":",m=m.c;p.n();){k=p.b
if(k==null)k=m.a(k)
j=k.a
f=k.f.k(0)
e=k.z
e=e==null?"":" at "+e
d.push(new A.W(l+j,B.aD,j,"An alert for "+f+e+" on "+k.w.k(0)+" is not on the statement to "+q.k(0)+". It may post on the next one; otherwise check it in the bank app."))}}return d},
NG(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.M)
for(s=a.id,s=A.aC(new A.M(s,A.o(s).i("M<2>")),t.A9),r=s.length,q=0;q<r;++q){p=s[q]
o=p.r
n=!1
if(o!=null){n=o.a
n=!(n==="read"||n==="alreadyRead")
m=o}else m=null
if(n){n=p.a
l=m.a==="totalsMismatch"?B.b7:B.b8
k=p.b
j=a.gK().h(0,k)
j=j==null?null:j.b
i.push(new A.W("statement-file:"+n,l,n,A.KC(p,m,j==null?k:j)))}}return i},
KC(a,b,c){var s,r=b.a
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
u5:function u5(a,b){this.a=a
this.c=b},
dY:function dY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Bf:function Bf(){},
Bg:function Bg(){},
Bh:function Bh(a){this.a=a},
Bi:function Bi(){},
o3(a){var s=0,r=A.J(t.nm),q,p,o,n,m,l
var $async$o3=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:l=a.h(0,"deviceId")
l.toString
A.b(l)
p=a.h(0,"keys")
p.toString
s=3
return A.r(A.fU(t.f.a(p).G(0,t.N,t.X)),$async$o3)
case 3:p=c
o=a.h(0,"primary")
o.toString
o=B.B.O(A.b(o))
n=a.h(0,"name")
n.toString
A.b(n)
m=a.h(0,"kind")
m.toString
q=new A.iq(l,p,o,n,A.b(m))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$o3,r)},
En(a,b){var s=t.Y
return new A.u9(a,b,A.v(t.S,t.c),A.c([],s),A.c([],s))},
cK(a,b,c,d,e){return A.Jo(a,b,c,d,e)},
Jo(a7,a8,a9,b0,b1){var s=0,r=A.J(t.nm),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$cK=A.K(function(b2,b3){if(b2===1){o.push(b3)
s=p}for(;;)switch(s){case 0:a5=J
s=3
return A.r(a7.bk(),$async$cK)
case 3:a2=a5.mT(b3,$.GU().ghi())
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
return A.r(a7.c1(l),$async$cK)
case 11:b=a5.a(b3)
k=f.a(B.z.bi(new A.eP(!1).cv(b,0,null,!0),null)).G(0,e,d)
s=12
return A.r(A.Ab(A.DX(k),b1),$async$cK)
case 12:m=b3
s=6
break
p=2
s=10
break
case 8:p=7
a4=o.pop()
b=A.av(a4)
if(b instanceof A.hu){s=5
break}else if(b instanceof A.b8){s=5
break}else if(h.b(b)){s=5
break}else throw a4
s=10
break
case 7:s=2
break
case 10:case 5:a3.length===a2||(0,A.l)(a3),++c
s=4
break
case 6:if(m==null)throw A.k(new A.hu())
j=null
i=null
p=13
s=17
return A.r(A.mL(m),$async$cK)
case 17:s=16
return A.r(b3.bu(),$async$cK)
case 16:j=b3.a
s=18
return A.r(A.mx(m,"santhiq/sync/join/v1"),$async$cK)
case 18:i=b3
n.push(15)
s=14
break
case 13:n=[2]
case 14:p=2
a2=m
a2.b.dW()
a2.ei()
s=n.pop()
break
case 15:s=19
return A.r(A.fV(),$async$cK)
case 19:a0=b3
a1="dev"+A.KJ(A.NR(8))
a2=A.S(["formatVersion",1,"deviceId",a1],e,d)
h=t.D.i("bf.S")
g=h.a(a0.c)
g=B.K.gaH().O(g)
h=h.a(a0.d)
e=B.F.O(B.z.bd(A.S(["deviceId",a1,"name",a9,"kind",a8,"x25519",g,"ed25519",B.K.gaH().O(h),"createdAtUtc",b0.F().dl()],e,e),null))
a5=a7
a6="j-"+a1+".sqj"
s=21
return A.r(A.hQ(a2,i,B.mB,e,a0.b),$async$cK)
case 21:s=20
return A.r(a5.c2(a6,b3),$async$cK)
case 20:q=new A.iq(a1,a0,j,a9,a8)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cK,r)},
l6:function l6(){},
cU:function cU(){},
iq:function iq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fv:function fv(a,b){this.a=a
this.b=b},
u9:function u9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.w=_.r=0},
ub:function ub(){},
ua:function ua(){},
uc:function uc(){},
f1(a){return new A.hW(a)},
hQ(a,b,c,d,e){var s=0,r=A.J(t.p),q,p,o,n,m,l,k,j
var $async$hQ=A.K(function(f,g){if(f===1)return A.G(g,r)
for(;;)switch(s){case 0:m=B.F.O("SANTHIQ-SYNC "+c.b+" 1\n"+B.z.bd(a,null)+"\n")
s=3
return A.r($.Dc().bF(d,m,b),$async$hQ)
case 3:l=g
k=t.eE
j=new A.hw(A.c([],k))
j.m(0,l.c)
j.m(0,l.b.a)
j.m(0,l.a)
p=j.fb()
j=$.Dd()
o=A.B(m,t.S)
B.a.a1(o,p)
s=4
return A.r(j.aU(0,o,e),$async$hQ)
case 4:n=g
k=new A.hw(A.c([],k))
k.m(0,m)
j=t.D.i("bf.S").a(n.a)
k.m(0,B.F.O(B.K.gaH().O(j)+"\n"))
k.m(0,p)
q=k.fb()
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hQ,r)},
D_(a,b){var s,r,q,p,o,n,m,l=B.i.bH(a,10),k=l
if(typeof k!=="number")return k.fi()
if(k<0||B.R.hf(A.fx(a,0,l),!0)!=="SANTHIQ-SYNC "+b.b+" 1")throw A.k(A.f1("not a "+b.b+" file"))
k=l
if(typeof k!=="number")return k.B()
s=B.i.ce(a,10,k+1)
k=s
if(typeof k!=="number")return k.fi()
if(k<0)o=-1
else{k=s
if(typeof k!=="number")return k.B()
o=B.i.ce(a,10,k+1)}r=o
k=r
if(typeof k!=="number")return k.fi()
if(k<0)throw A.k(A.f1("the file is incomplete"))
try{k=l
if(typeof k!=="number")return k.B()
q=t.f.a(B.z.bi(B.R.cb(A.fx(a,k+1,s)),null)).G(0,t.N,t.X)
if(!J.Y(J.ar(q,"formatVersion"),1))throw A.k(B.f9)
k=s
if(typeof k!=="number")return k.B()
p=B.B.O(B.R.cb(A.fx(a,k+1,r)))
k=s
if(typeof k!=="number")return k.B()
k=A.fx(a,0,k+1)
n=r
if(typeof n!=="number")return n.B()
n=A.fx(a,n+1,null)
return new A.ud(q,k,p,n)}catch(m){k=A.f1("the header cannot be read")
throw A.k(k)}},
mI(a,b){var s=0,r=A.J(t.c),q,p,o,n,m
var $async$mI=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.r($.HX().b3(a,new A.bE(b,B.U)),$async$mI)
case 3:o=d
s=4
return A.r(a.bu(),$async$mI)
case 4:n=d.a
m=$.b6().cp()
m=$.b6().cM(m)
m=$.b6().cL(m,32)
p=A.B(b,t.S)
B.a.a1(p,n)
q=m.aX(B.F.O("santhiq/sync/grant/v1"),p,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mI,r)},
dZ:function dZ(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a},
ud:function ud(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mx(a,b){var s=0,r=A.J(t.c),q,p,o
var $async$mx=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:p=$.Ht()
o=$.b6().cp()
o=$.b6().cM(o)
s=3
return A.r($.b6().cL(o,32).aX(B.F.O("santhiq/sync/v1"),B.A,a),$async$mx)
case 3:o=d
q=p.aX(B.F.O(b),B.A,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mx,r)},
mL(a){var s=0,r=A.J(t.gZ),q,p
var $async$mL=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=$.b6().cH()
s=4
return A.r(A.mx(a,"santhiq/sync/sign/v1"),$async$mL)
case 4:s=3
return A.r(c.cI(),$async$mL)
case 3:q=p.aP(c)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mL,r)},
NR(a){var s,r=$.jN(),q=A.c([],t.t)
for(s=0;s<a;++s)q.push(r.cQ(256))
return q},
KJ(a){var s,r,q=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q.push(B.b.ac(B.d.bL(a[r],16),2,"0"))
return B.a.cg(q)},
fV(){var s=0,r=A.J(t.rU),q,p,o,n,m,l,k
var $async$fV=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=3
return A.r($.b6().dq().aS(),$async$fV)
case 3:p=b
s=4
return A.r($.b6().cH().aS(),$async$fV)
case 4:o=b
n=A
m=p
l=o
s=5
return A.r(p.bu(),$async$fV)
case 5:k=b.a
s=6
return A.r(o.bu(),$async$fV)
case 6:q=new n.ia(m,l,k,b.a)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$fV,r)},
fU(a){var s=0,r=A.J(t.rU),q,p,o,n,m,l,k,j,i
var $async$fU=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=$.b6().dq()
m=a.h(0,"x25519")
m.toString
s=3
return A.r(n.aP(B.B.O(A.b(m))),$async$fU)
case 3:p=c
m=$.b6().cH()
n=a.h(0,"ed25519")
n.toString
s=4
return A.r(m.aP(B.B.O(A.b(n))),$async$fU)
case 4:o=c
l=A
k=p
j=o
s=5
return A.r(p.bu(),$async$fU)
case 5:i=c.a
s=6
return A.r(o.bu(),$async$fU)
case 6:q=new l.ia(k,j,i,c.a)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$fU,r)},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Je(a){var s,r,q,p,o=null,n=$.GY().aj(a)
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
p=new A.iX(a,r,q,s)
return s<q?o:p},
Me(a,b,c){var s,r,q,p,o,n=A.v(t.S,t.aA)
for(s=J.Q(a);s.n();){r=A.Je(s.gt())
if(r==null||r.b!==b)continue
q=r.c
p=n.h(0,q)
if(p==null||r.d>p.d)n.j(0,q,r)}o=A.c([],t.EA)
for(r=n.h(0,c);r!=null;r=n.h(0,r.d+1))B.a.m(o,r)
return o},
iu:function iu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lD:function lD(a,b){this.a=a
this.b=b},
ue:function ue(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.f=null
_.r=0},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FF(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="currency",c="is not a supported currency",b=new A.z(a5,a4,1),a=new A.z(a5,a4,A.au(A.ay(a5,a4+1,0))),a0=A.v(t.T,t.B)
for(s=A.B9(a1,a2),r=s.length,q=a1.d,p=t.N,o=t.G,n=a3+" allows ",m=0;m<s.length;s.length===r||(0,A.l)(s),++m){l=s[m]
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
if((k.b<=0?0:Math.max(k.gv().b,0))>f)A.f(A.y(n+A.i(f)+" decimal places",k.k(0),e))
k=h}j=l.c||!j
i=i.f
if(j){j=i.b
h=$.L()
f=B.e.h(0,j)
if(f==null)A.f(A.x(j,d,c))
if((h.b<=0?0:Math.max(h.gv().b,0))>f)A.f(A.y(j+" allows "+A.i(f)+" decimal places",h.k(0),e))
i=i.a
i=h.B(0,new A.P(i.a.S(0),i.b))
h=new A.q(i,j)
f=B.e.h(0,j)
if(f==null)A.f(A.x(j,d,c))
if((i.b<=0?0:Math.max(i.gv().b,0))>f)A.f(A.y(j+" allows "+A.i(f)+" decimal places",i.k(0),e))
j=h}else j=i
i=j.b
h=k.b
if(i!==h)A.f(A.a6(h,i))
k=k.a.B(0,j.a)
f=B.e.h(0,h)
if(f==null)A.f(A.x(h,d,c))
if((k.b<=0?0:Math.max(k.gv().b,0))>f)A.f(A.y(h+" allows "+A.i(f)+" decimal places",k.k(0),e))
a0.j(0,g,new A.q(k,h))}return a0},
G8(a,b,c){var s=a*12+b-1-c
return new A.p(B.d.C(s,12),B.d.R(s,12)+1)},
G9(a,b,c,d){var s,r,q,p,o=new A.z(d,c,1),n=new A.z(d,c,A.au(A.ay(d,c+1,0))),m=A.c([],t.Q)
for(s=a.gK().gT(),s=s.gA(s);s.n();){r=s.gt()
q=!1
if(r.r===b){p=r.d
if(p!==B.o&&p!==B.x)if(r.w.l(0,n)<=0){q=r.CW
q=q==null?null:q.l(0,o)<0
q=q!==!0}}if(q)m.push(r)}if(m.length===0)return!1
return B.a.b5(m,new A.zP(a,o,n))},
Nk(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=A.c([],t.kY)
for(s=3;s>=1;--s)a4.push(new A.AS(a8,s,a5,a6,a7).$0())
r=new A.n(a4,t.jb.a(new A.AT()),t.yF).gq(0)
if(r===0)return B.kP
q=A.a3(t.T)
for(p=a4.length,o=0;o<a4.length;a4.length===p||(0,A.l)(a4),++o)for(n=a4[o].a[3].gah(),n=n.gA(n);n.n();)q.m(0,A.m(n.gt()))
m=A.v(t.N,t.la)
for(q=new A.fl(A.e8(q,q.r,q.$ti.c),t.kx),p=t.nn,n=t.dN,l=t.B,k=t.xj,j=a7+" allows ";q.n();){i=q.b
if(i==null)i=A.f(A.ak())
h=$.L()
g=new A.q(h,a7)
f=B.e.h(0,a7)
if(f==null)A.f(A.x(a7,a2,a3))
if((h.b<=0?0:Math.max(h.gv().b,0))>f)A.f(A.y(j+A.i(f)+" decimal places",h.k(0),null))
h=A.c([],k)
for(e=a4.length,o=0;o<a4.length;a4.length===e||(0,A.l)(a4),++o){d=a4[o].a
c=d[0]
b=d[1]
a=d[2]
d=d[3].h(0,i)
h.push(new A.jl([a,b,d==null?g:d,c]))}e=new A.n(h,p.a(new A.AU()),n).a5(0,g,new A.AV(),l).a
if(e.l(0,$.L())<=0)continue
d=A.aB(r)
e=e.gbV()
d=new A.P(d,0).gbV()
d=A.bZ(e.a.a_(0,d.b),e.b.a_(0,d.a))
e=d.b
a0=$.hS()
a1=e.l(0,a0)
if(a1===0){if(e.c===0)A.f(B.Y)
e=d.a.bB(e)}else{d=d.a
if(d.l(0,$.hR())<0){if(e.c===0)A.f(B.Y)
e=d.bB(e)}else{if(e.c===0)A.f(B.Y)
e=d.bB(e).B(0,a0)}}if(B.e.h(0,a7)==null)A.f(A.x(a7,a2,a3))
m.j(0,i,new A.i_(new A.q(new A.P(e,0),a7),h,r))}return m},
LQ(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="currency",a7="is not a supported currency",a8=b1.e_.la(b2,b6,b4),a9=A.FF(b1,b2,b3,b4,b6),b0=b5.a===b6&&b5.b===b4
if(b0){s=A.G8(b6,b4,1)
r=s.a
q=s.b
p=new A.z(r,q,1)
o=new A.z(r,q,A.au(A.ay(r,q+1,0)))
n=A.v(t.T,t.B)
for(m=A.B9(b1,b2),l=m.length,k=b1.d,j=t.N,i=t.G,h=b5.c,g=b3+" allows ",f=0;f<m.length;m.length===l||(0,A.l)(m),++f){e=m[f]
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
if((d.b<=0?0:Math.max(d.gv().b,0))>a2)A.f(A.y(g+A.i(a2)+" decimal places",d.k(0),a5))
d=a0}c=e.c||!c
a=a.f
if(c){c=a.b
a0=$.L()
a2=B.e.h(0,c)
if(a2==null)A.f(A.x(c,a6,a7))
if((a0.b<=0?0:Math.max(a0.gv().b,0))>a2)A.f(A.y(c+" allows "+A.i(a2)+" decimal places",a0.k(0),a5))
a=a.a
a=a0.B(0,new A.P(a.a.S(0),a.b))
a0=new A.q(a,c)
a2=B.e.h(0,c)
if(a2==null)A.f(A.x(c,a6,a7))
if((a.b<=0?0:Math.max(a.gv().b,0))>a2)A.f(A.y(c+" allows "+A.i(a2)+" decimal places",a.k(0),a5))
c=a0}else c=a
a=c.b
a0=d.b
if(a!==a0)A.f(A.a6(a0,a))
d=d.a.B(0,c.a)
a2=B.e.h(0,a0)
if(a2==null)A.f(A.x(a0,a6,a7))
if((d.b<=0?0:Math.max(d.gv().b,0))>a2)A.f(A.y(a0+" allows "+A.i(a2)+" decimal places",d.k(0),a5))
n.j(0,a1,new A.q(d,a0))}}else n=B.kQ
m=A.c([],t.cs)
for(l=new A.ab(a8,A.o(a8).i("ab<1,2>")).gA(0),k=b3+" allows ";l.n();){j=l.d
a3=j.a
a4=j.b
if(a4.b===b3){j=a9.h(0,a3)
if(j==null){j=$.L()
i=new A.q(j,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((j.b<=0?0:Math.max(j.gv().b,0))>a2)A.f(A.y(k+A.i(a2)+" decimal places",j.k(0),a5))
j=i}if(b0){i=a9.h(0,a3)
if(i==null){i=$.L()
h=new A.q(i,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((i.b<=0?0:Math.max(i.gv().b,0))>a2)A.f(A.y(k+A.i(a2)+" decimal places",i.k(0),a5))
i=h}h=n.h(0,a3)
if(h==null){h=$.L()
g=new A.q(h,b3)
a2=B.e.h(0,b3)
if(a2==null)A.f(A.x(b3,a6,a7))
if((h.b<=0?0:Math.max(h.gv().b,0))>a2)A.f(A.y(k+A.i(a2)+" decimal places",h.k(0),a5))
h=g}g=h.b
d=i.b
if(g!==d)A.f(A.a6(d,g))
i=i.a.B(0,h.a)
h=new A.q(i,d)
a2=B.e.h(0,d)
if(a2==null)A.f(A.x(d,a6,a7))
if((i.b<=0?0:Math.max(i.gv().b,0))>a2)A.f(A.y(d+" allows "+A.i(a2)+" decimal places",i.k(0),a5))
i=h}else i=a5
m.push(new A.bC(a3,a4,j,i))}}B.a.D(m,new A.wd(b1))
return new A.n7(m,b3)},
Fj(a,b){var s=A.a5(a.d,t.N,t.G).h(0,b)
s=s==null?null:s.c
return s==null?b:s},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
zP:function zP(a,b,c){this.a=a
this.b=b
this.c=c},
AS:function AS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
AT:function AT(){},
AU:function AU(){},
AV:function AV(){},
bC:function bC(a,b,c,d){var _=this
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
wd:function wd(a){this.a=a},
MG(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=A.c([],t.Ew)
for(s=a.e_.f,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>")),r=b.a*12+b.b;s.n();){q=s.d
p=q.e
o=p==null?j:a.gK().h(0,p)
n=o==null?j:A.CD(a,o,b,B.kO)
p=q.d
m=b.l(0,p)>0?0:p.a*12+p.b-r
l=n==null
k=l?j:n.b
l=l?j:n.c
B.a.m(i,new A.dB(q,k,l,m===0&&b.l(0,p)<=0?1:m))}B.a.D(i,new A.z5())
return i},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z5:function z5(){},
Gj(a){var s,r,q=null,p=typeof a=="string"?$.HN().aj(a):q
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
Jc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="capSpend",f="currency",e="minSpend",d=a.h(0,"accountId")
d.toString
A.b(d)
s=a.h(0,"unit")
s.toString
A.ag(B.ja,A.b(s),t.cy)
s=A.c([],t.j2)
r=a.h(0,"rates")
r.toString
r=J.Q(t.j.a(r))
q=t.f
p=t.N
o=t.X
while(r.n()){n=q.a(r.gt()).G(0,p,o)
m=A.m(n.h(0,"categoryId"))
l=n.h(0,"rate")
l.toString
l=A.ad(A.b(l))
if(n.h(0,g)==null)k=null
else{k=n.h(0,g)
k.toString
k=q.a(k).G(0,p,o)
j=k.h(0,"amount")
j.toString
j=A.ad(A.b(j))
k=k.h(0,f)
k.toString
A.b(k)
i=new A.q(j,k)
h=B.e.h(0,k)
if(h==null)A.f(A.x(k,f,"is not a supported currency"))
if((j.b<=0?0:Math.max(j.gv().b,0))>h)A.f(A.y(k+" allows "+A.i(h)+" decimal places",j.k(0),null))
k=i}if(n.h(0,"capEarn")==null)n=null
else{n=n.h(0,"capEarn")
n.toString
n=A.ad(A.b(n))}s.push(new A.fq(m,l,k,n))}if(a.h(0,e)!=null){r=a.h(0,e)
r.toString
A.aO(q.a(r).G(0,p,o))}return new A.lq(d,s)},
LG(b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="categoryId",b0="bookId",b1=b5.e,b2=new A.w2(b3)
switch(b5.d){case"category.flag":s=A.aN(new A.n(B.dJ,t.ns.a(new A.w3(b1)),t.rK),t.d)
r=b2.$1(b1.h(0,a9))
if(r==null||s==null||A.hL(r))return"a flag is for a spending category"
b4.a.j(0,r.a,s)
break
case"budget.set":q=b1.h(0,b0)
p=A.Gj(b1.h(0,"from"))
r=b2.$1(b1.h(0,a9))
if(typeof q!="string"||b3.aG(q)==null||p==null)return"a budget needs a book and a month"
if(r==null||r.d!=null||A.hL(r)||r.b!==b3.bX(q))return"a budget is for a top-level spending category of the book's kind"
if(b1.h(0,"amount")==null)o=null
else{n=b1.h(0,"amount")
n.toString
o=A.aO(t.f.a(n).G(0,t.N,t.X))}if(o!=null&&o.a.l(0,$.L())<=0)return"a budget is more than zero"
B.a.m(b4.b,new A.k7(q,r.a,o,p.a,p.b))
break
case"period.note":q=b1.h(0,b0)
m=b1.h(0,"period")
l=b1.h(0,"text")
k=b1.h(0,a9)
if(typeof q!="string"||b3.aG(q)==null||A.Gj(m)==null||typeof l!="string")return"a note needs a book, a month and its text"
if(k!=null&&b2.$1(k)==null)return"no category "+A.i(k)
j=B.b.I(l)
n=j.length
if(n>120||B.b.u(j,"\n"))return"a note is one line of at most 120 characters"
i=new A.bA(q,A.b(m),A.m(k))
h=b4.c
if(n===0)h.Z(0,i)
else h.j(0,i,new A.le())
break
case"officeDay.mark":g=A.F5(b1.h(0,"date"))
f=b1.h(0,"office")
if(g==null||!A.ed(f))return"an office day mark is a date and yes or no"
b4.d.j(0,g,f)
break
case"recurring.mark":q=b1.h(0,b0)
e=b1.h(0,"payeeKey")
d=A.aN(new A.n(B.jQ,t.AH.a(new A.w4(b1)),t.o_),t.fK)
if(typeof q!="string"||typeof e!="string"||e.length===0||d==null)return"a recurring mark is a book, a payee and what it is"
b4.e.j(0,new A.p(q,e),d)
break
case"goal.set":c=b1.h(0,"id")
b=b1.h(0,"name")
a=A.F5(b1.h(0,"by"))
a0=b1.h(0,"accountId")
if(typeof c!="string"||typeof b!="string"||B.b.I(b).length===0||a==null||!t.f.b(b1.h(0,"target")))return"a goal needs a name, a target and a date"
n=b1.h(0,"target")
n.toString
a1=A.aO(t.f.a(n).G(0,t.N,t.X))
if(a1.a.l(0,$.L())<=0)return"a target is more than zero"
if(a0!=null){a2=b3.gK().h(0,a0)
if(a2==null||a2.e!==a1.b||a2.d===B.o)return"a goal's account holds savings in the target's currency"}b4.f.j(0,c,new A.iV(c,B.b.I(b),a1,a,A.m(a0)))
break
case"goal.remove":if(b4.f.Z(0,b1.h(0,"id"))==null)return"no goal "+A.i(b1.h(0,"id"))
break
case"reward.rules":a3=A.Jc(b1)
n=a3.a
a2=b3.gK().h(0,n)
if(a2==null||a2.d!==B.y)return"reward rules are for a card"
h=a3.c
a4=h.length
if(a4===0){b4.r.Z(0,n)
return null}for(a5=0;a5<h.length;h.length===a4||(0,A.l)(h),++a5){a6=h[a5]
if(a6.b.l(0,$.L())>=0){a7=a6.a
a7=a7!=null&&b2.$1(a7)==null}else a7=!0
if(a7)return"a reward rate is zero or more, for a known category"}a4=A.F(h)
if(new A.n(h,a4.i("j(1)").a(new A.w5()),a4.i("n<1>")).gq(0)<=1){a4=A.a3(t.T)
for(a7=h.length,a5=0;a8=h.length,a5<a8;h.length===a7||(0,A.l)(h),++a5)a4.m(0,h[a5].a)
h=a4.a!==a8}else h=!0
if(h)return"one rate per category"
b4.r.j(0,n,a3)
break
default:return"not a trend operation"}return null},
F5(a){var s,r,q,p,o,n,m=null,l=typeof a=="string"?$.Hz().aj(a):m
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
n=A.ay(q,p,o)
return A.b0(n)===q&&A.b4(n)===p&&A.au(n)===o?new A.z(q,p,o):m},
k7:function k7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
le:function le(){},
co:function co(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eC:function eC(a,b){this.a=a
this.b=b},
fq:function fq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lq:function lq(a,b){this.a=a
this.c=b},
ui:function ui(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
w2:function w2(a){this.a=a},
w3:function w3(a){this.a=a},
w4:function w4(a){this.a=a},
w5:function w5(){},
Ie(a,b,c,d){var s=new A.dj(a,b)
s.it(a,b,c,d)
return s},
CE(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aE(a2.F(),B.q),b=A.v(t.N,t.S)
for(s=A.aC(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q].b
o=b.h(0,p)
b.j(0,p,(o==null?0:o)+1)}n=new A.wg(a,a2,a3,a1,c,b)
s=a.gK().gT()
r=A.o(s)
p=r.i("n<h.E>")
m=A.B(new A.n(s,r.i("j(h.E)").a(new A.we(a0)),p),p.i("h.E"))
B.a.D(m,new A.wf())
A.fF(a0,a)
s=A.c([],t.zM)
for(r=A.fG(a,a0,B.c),p=r.length,o=t.kd,l=t.eF,q=0;q<r.length;r.length===p||(0,A.l)(r),++q){k=r[q]
j=A.c([],l)
for(i=0;i<3;++i){h=B.jb[i]
g=A.c([],o)
for(f=m.length,e=0;e<m.length;m.length===f||(0,A.l)(m),++e){d=m[e]
if(d.e===k&&A.Lv(d)===h)g.push(n.$1(d))}f=g.length
if(f!==0)j.push(A.Ie(h,g,k,a1))}s.push(new A.dQ(k,j))}return new A.mX(s)},
M1(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aE(a1.F(),B.q),d=a.aW(b),c=A.c([],t.n)
for(s=A.aC(a.fx,t.v),r=s.length,q=0;q<r;++q){p=s[q]
if(a.aW(p.b)===d)c.push(p)}B.a.D(c,new A.xt())
s=A.c([],t.CL)
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
h=A.aM(p.e,a0)
g=A.aM(p.f,a0)
f=p.r==null?"Recorded, not reconciled":"Reconciled"
s.push(new A.lA(""+n.c+" "+m+l+" to "+(""+k.c+" "+j+i),h,g,f))}return s},
aY:function aY(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dQ:function dQ(a,b){this.a=a
this.b=b},
mX:function mX(a){this.b=a},
wg:function wg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
we:function we(a){this.a=a},
wf:function wf(){},
xt:function xt(){},
C_(a){var s,r,q={}
for(s=new A.ab(a,A.o(a).i("ab<1,2>")).gA(0);s.n();){r=s.d
q[r.a]=r.b}return q},
kH:function kH(){},
nY:function nY(a){this.a=a},
nZ:function nZ(a,b){this.a=a
this.b=b},
o_:function o_(a){this.a=a},
nW:function nW(a,b){this.a=a
this.b=b},
nX:function nX(a){this.a=a},
ee(a,b,c){var s=A.w(A.w(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
b.a2(0,new A.vI(s))
if(c!=null)s.textContent=c
return s},
Fn(a){var s,r,q
if(a<=0)return B.m5
s=a/4
r=Math.pow(10,B.O.m8(Math.log(s)/2.302585092994046))
q=new A.ah(A.c([1,2,5,10],t.t),t.oe.a(new A.vJ(r)),t.FC).m6(0,new A.vK(s))
return new A.p(B.O.h9(a/q)*q,q)},
M8(a){var s=Math.abs(a),r=new A.xQ()
if(s>=1e6)return A.i(r.$1(a/1e6))+"M"
if(s>=1000)return A.i(r.$1(a/1000))+"k"
return r.$1(a)},
F2(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i={}
i.a=null
s=-b
r=A.Fn(Math.max(c,s))
i.a=r.a
q=r.b
p=b<0?-A.Fn(s).a:0
o=new A.vl(i,p)
for(s=q/2,n=t.N,m=t.K,l=p;l<=i.a+s;l+=q){k=o.$1(l)
j=o.$1(l)
a.append(A.ee("line",A.S(["x1",64,"x2",948,"y1",k,"y2",j,"class",l===0?"zero":"grid"],n,m),null))
k=o.$1(l)
if(typeof k!=="number")return k.B()
a.append(A.ee("text",A.S(["x",56,"y",k+4,"text-anchor","end","class","tick"],n,m),d+A.M8(l)))}return o},
Fh(a,b,c){var s,r,q,p,o,n
for(s=t.N,r=A.bO(b,0,s),q=J.Q(r.a),p=r.b,r=new A.as(q,p,A.o(r).i("as<1>")),o=t.K;r.n();){n=r.c
n=n>=0?new A.p(p+n,q.gt()):A.f(A.ak())
a.append(A.ee("text",A.S(["x",c.$1(n.a),"y",252,"text-anchor","middle","class","tick"],s,o),n.b))}},
F9(a){return A.ee("svg",A.S(["viewBox","0 0 960 260","class","chart","role","img","aria-label",a],t.N,t.K),null)},
MH(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.F9(b1),b0=A.c([],t.zp)
for(s=0;s<2;++s)B.a.a1(b0,b3[s].b)
r=t.pR
q=A.F2(a9,Math.min(0,B.a.a5(b0,0,B.cx,r)),B.a.a5(b0,0,B.cy,r),b5)
p=884/b2.length
o=Math.min(28,(p*0.7-2)/2)
n=new A.z8(p)
for(b0=t.jg,r=t.N,m=t.K,l=o/2,k=(o*2+2)/2,j=o+2,i=0;i<b2.length;++i)for(h=A.bO(b3,0,b0),g=J.Q(h.a),f=h.b,h=new A.as(g,f,A.o(h).i("as<1>"));h.n();){e=h.c
e=e>=0?new A.p(f+e,g.gt()):A.f(A.ak())
d=e.a
c=e.b
e=n.$1(i)
if(typeof e!=="number")return e.a9()
b=e-k+d*j
a=J.ar(c.b,i)
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
e=a3}e=A.ee("path",A.S(["d",e,"class","series-"+(d+1)],r,m),null)
if(!(i<b2.length))return A.a(b2,i)
e.append(A.ee("title",A.v(r,m),b4.$3(b2[i],c.a,a)))
a9.append(e)}A.Fh(a9,b2,n)
return a9},
FY(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.F9(a),e=A.c([],t.zp)
for(s=c.length,r=0;r<c.length;c.length===s||(0,A.l)(c),++r){q=c[r]
if(q!=null)e.push(q)}s=t.pR
p=A.F2(f,Math.min(0,B.a.a5(e,0,B.cx,s)),B.a.a5(e,0,B.cy,s),a1)
o=new A.zi(884/b.length)
for(e=t.u6,s=A.bO(c,0,e),n=J.Q(s.a),m=s.b,s=new A.as(n,m,A.o(s).i("as<1>")),l="",k=!1;s.n();k=!i){j=s.c
j=j>=0?new A.p(m+j,n.gt()):A.f(A.ak())
q=j.b
i=q==null
if(i)continue
h=k?"L":"M"
l+=h+A.i(o.$1(j.a))+" "+A.i(p.$1(q))+" "}if(l.length!==0)f.append(A.ee("path",A.S(["d",l,"class","line series-1"],t.N,t.K),null))
for(e=A.bO(c,0,e),s=J.Q(e.a),n=e.b,e=new A.as(s,n,A.o(e).i("as<1>")),m=t.N,j=t.K,i=!d;e.n();){h=e.c
h=h>=0?new A.p(n+h,s.gt()):A.f(A.ak())
g=h.a
q=h.b
if(q==null)continue
if(!i||g===0)f.append(A.ee("circle",A.S(["cx",o.$1(g),"cy",p.$1(q),"r",4,"class","dot series-1"],m,j),null))
h=A.ee("circle",A.S(["cx",o.$1(g),"cy",p.$1(q),"r",12,"class","hit"],m,j),null)
if(!(g>=0&&g<b.length))return A.a(b,g)
h.append(A.ee("title",A.v(m,j),a0.$2(b[g],q)))
f.append(h)}A.Fh(f,b,o)
return f},
vI:function vI(a){this.a=a},
vJ:function vJ(a){this.a=a},
vK:function vK(a){this.a=a},
xQ:function xQ(){},
vl:function vl(a,b){this.a=a
this.b=b},
z8:function z8(a){this.a=a},
zi:function zi(a){this.a=a},
Ll(){var s,r,q
try{s=A.m(A.w(A.w(v.G.window).localStorage).getItem("santhiq-theme"))
if(B.a.u(B.bQ,s)){r=s
r.toString}else r="system"
return r}catch(q){return"system"}},
Fs(a){var s,r=v.G,q=A.aS(A.w(r.document).documentElement),p=a==="system"
if(p){if(q!=null)q.removeAttribute("data-theme")}else if(q!=null)q.setAttribute("data-theme",a)
try{if(p)A.w(A.w(r.window).localStorage).removeItem("santhiq-theme")
else A.w(A.w(r.window).localStorage).setItem("santhiq-theme",a)}catch(s){}},
Cz(a){var s,r=v.G,q=A.w(A.w(r.document).createElementNS("http://www.w3.org/2000/svg","svg"))
q.setAttribute("viewBox","0 0 24 24")
q.setAttribute("class","icon")
q.setAttribute("aria-hidden","true")
r=A.w(A.w(r.document).createElementNS("http://www.w3.org/2000/svg","path"))
s=B.kL.h(0,a)
if(s==null)s=""
r.setAttribute("d",s)
q.append(r)
return q},
hG(a,b,c,d){return A.LP(a,b,c,t.yz.a(d))},
LP(a,b,c,d){var s=0,r=A.J(t.l3),q,p,o,n,m,l,k,j,i
var $async$hG=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:k=v.G
j=A.w(new k.Headers())
d.a2(0,new A.wc(j))
p=A.w(k.window)
o=b.gdO()
n=c==null?null:c
s=3
return A.r(A.bI(A.w(p.fetch(o,{method:a,headers:j,body:n,referrerPolicy:"no-referrer",credentials:"omit",cache:"no-store",signal:A.w(k.AbortSignal.timeout(6e4))})),t.m),$async$hG)
case 3:m=f
i=A
s=4
return A.r(A.bI(A.w(m.arrayBuffer()),t.i),$async$hG)
case 4:l=i.iH(f,0,null)
q=new A.hf(A.O(m.status),l)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hG,r)},
MI(){var s,r,q=v.G,p=A.b(A.w(A.w(q.window).location).hash)
if(!B.b.u(p,"access_token=")&&!B.b.u(p,"error="))return!1
s=A.w(new q.BroadcastChannel("santhiq-sign-in"))
s.postMessage(B.b.ad(p,1))
s.close()
A.w(A.w(q.window).history).replaceState(null,"",A.b(A.w(A.w(q.window).location).pathname))
r=A.aS(A.w(q.document).body)
r.toString
r.textContent="Signed in. This window can be closed."
A.w(q.window).close()
return!0},
L8(){var s,r=$.jN(),q=A.c([],t.s)
for(s=0;s<16;++s)q.push(B.b.ac(B.d.bL(r.cQ(256),16),2,"0"))
return B.a.cg(q)},
J2(a){var s,r=A.w(new v.G.BroadcastChannel("santhiq-sign-in"))
A.cO(!1,"isUtc",t.y)
s=t.N
s=new A.lc(a,r,new A.a8(0,0,!1),A.Ll(),B.cq,A.a3(s),B.mH,A.v(s,s),A.v(s,t.sF))
s.iv(a)
return s},
bc:function bc(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
wc:function wc(a){this.a=a},
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
rQ:function rQ(a){this.a=a},
rR:function rR(a){this.a=a},
rS:function rS(a){this.a=a},
rT:function rT(a){this.a=a},
pp:function pp(a,b){this.a=a
this.b=b},
pv:function pv(a){this.a=a},
rU:function rU(a,b){this.a=a
this.b=b},
rV:function rV(a,b){this.a=a
this.b=b},
rW:function rW(a,b){this.a=a
this.b=b},
rX:function rX(a){this.a=a},
rY:function rY(a){this.a=a},
rZ:function rZ(a,b){this.a=a
this.b=b},
t_:function t_(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
qp:function qp(a){this.a=a},
qs:function qs(a){this.a=a},
qt:function qt(a,b){this.a=a
this.b=b},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
pq:function pq(a,b){this.a=a
this.b=b},
pr:function pr(a){this.a=a},
ps:function ps(a){this.a=a},
pt:function pt(a){this.a=a},
pu:function pu(a,b){this.a=a
this.b=b},
pw:function pw(a,b){this.a=a
this.b=b},
qk:function qk(){},
ql:function ql(){},
qm:function qm(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
this.b=b},
qn:function qn(a){this.a=a},
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
rD:function rD(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.a=a
this.b=b},
rF:function rF(){},
rz:function rz(a){this.a=a},
rA:function rA(){},
rC:function rC(){},
rB:function rB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rx:function rx(){},
ry:function ry(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
rw:function rw(a){this.a=a},
rG:function rG(a,b){this.a=a
this.b=b},
rn:function rn(a,b){this.a=a
this.b=b},
rc:function rc(a){this.a=a},
qZ:function qZ(a){this.a=a},
r_:function r_(){},
r0:function r0(){},
rb:function rb(a,b){this.a=a
this.b=b},
r3:function r3(a,b){this.a=a
this.b=b},
r4:function r4(a,b){this.a=a
this.b=b},
qY:function qY(a){this.a=a},
r5:function r5(a,b){this.a=a
this.b=b},
qX:function qX(a){this.a=a},
qU:function qU(a){this.a=a},
r6:function r6(a,b){this.a=a
this.b=b},
qW:function qW(a){this.a=a},
qT:function qT(a){this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
qV:function qV(a){this.a=a},
r9:function r9(a,b){this.a=a
this.b=b},
ra:function ra(a,b){this.a=a
this.b=b},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a,b){this.a=a
this.b=b},
pU:function pU(a,b){this.a=a
this.b=b},
q8:function q8(a,b){this.a=a
this.b=b},
q9:function q9(a,b){this.a=a
this.b=b},
pW:function pW(a){this.a=a},
pX:function pX(a,b){this.a=a
this.b=b},
q0:function q0(a,b){this.a=a
this.b=b},
q1:function q1(a,b){this.a=a
this.b=b},
q2:function q2(a,b){this.a=a
this.b=b},
q3:function q3(a,b){this.a=a
this.b=b},
q4:function q4(a){this.a=a},
q5:function q5(a,b,c){this.a=a
this.b=b
this.c=c},
pT:function pT(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a,b){this.a=a
this.b=b},
q7:function q7(a){this.a=a},
pY:function pY(a){this.a=a},
pZ:function pZ(a){this.a=a},
q_:function q_(a,b){this.a=a
this.b=b},
pS:function pS(a,b){this.a=a
this.b=b},
qR:function qR(a,b){this.a=a
this.b=b},
qS:function qS(){},
qw:function qw(a){this.a=a},
qx:function qx(a){this.a=a},
pO:function pO(a,b){this.a=a
this.b=b},
pR:function pR(a){this.a=a},
pP:function pP(a){this.a=a},
pQ:function pQ(a){this.a=a},
qd:function qd(){},
qe:function qe(a){this.a=a},
qf:function qf(a,b){this.a=a
this.b=b},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
qc:function qc(a,b){this.a=a
this.b=b},
rv:function rv(a){this.a=a},
rp:function rp(){},
rq:function rq(a){this.a=a},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rt:function rt(a){this.a=a},
ru:function ru(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ro:function ro(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qF:function qF(a){this.a=a},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(){},
qB:function qB(){},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b){this.a=a
this.b=b},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a,b){this.a=a
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
qJ:function qJ(){},
qK:function qK(){},
qL:function qL(a,b){this.a=a
this.b=b},
qI:function qI(a,b){this.a=a
this.b=b},
qM:function qM(a){this.a=a},
qN:function qN(a){this.a=a},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
rO:function rO(a){this.a=a},
rP:function rP(a,b){this.a=a
this.b=b},
rJ:function rJ(a){this.a=a},
rK:function rK(){},
rL:function rL(a){this.a=a},
rM:function rM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rI:function rI(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rH:function rH(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(a){this.a=a},
pN:function pN(a,b){this.a=a
this.b=b},
pL:function pL(){},
pD:function pD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
pB:function pB(a,b){this.a=a
this.b=b},
pF:function pF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a,b){this.a=a
this.b=b},
pH:function pH(a){this.a=a},
pI:function pI(){},
pJ:function pJ(a){this.a=a},
pK:function pK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
py:function py(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rl:function rl(a,b){this.a=a
this.b=b},
rm:function rm(a,b,c){this.a=a
this.b=b
this.c=c},
rf:function rf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(a){this.a=a},
rh:function rh(){},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rd:function rd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
px:function px(a){this.a=a},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
LR(c1,c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="currency",b2="is not a supported currency",b3=new A.wj(c3),b4=new A.wk(c1),b5=A.aE(c4.F(),B.q),b6=A.w8(c1,c2),b7=b5.a,b8=b5.b,b9=A.LQ(c1,c2,b6,b8,b5,b7),c0=A.a3(t.N)
for(s=b9.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q)c0.m(0,s[q].a)
p=A.Nk(c1,c2,b6,b5)
o=b9.gmH();--b8
if(!(b8>=0&&b8<12))return A.a(B.V,b8)
b8=B.V[b8]
r=A.c([],t.gI)
for(n=s.length,q=0;q<s.length;s.length===n||(0,A.l)(s),++q){m=s[q]
l=m.a
k=b4.$1(l)
j=m.b
i=b3.$1(j)
h=m.c
g=b3.$1(h)
f=j.a
e=h.b
j=j.b
if(e!==j)A.f(A.a6(j,e))
h=h.a
e=f.B(0,new A.P(h.a.S(0),h.b))
d=B.e.h(0,j)
if(d==null)A.f(A.x(j,b1,b2))
if((e.b<=0?0:Math.max(e.gv().b,0))>d)A.f(A.y(j+" allows "+A.i(d)+" decimal places",e.k(0),b0))
j=b3.$1(new A.q(e,j))
e=m.d
c=e==null
b=c?"":b3.$1(e)
h=h.l(0,f)
f=!c&&e.a.l(0,f)>0
r.push(new A.dn(l,k,i,g,j,b,h>0,f))}B.a.D(r,new A.wh())
if(s.length===0)s=""
else{s=A.i(b3.$1(b9.gl8()))
n=A.i(b3.$1(b9.gi5()))
l=o==null?"":", heading for "+A.i(b3.$1(o))
k=b9.ghu()===0?"":"; "+b9.ghu()+" over"
k="Budgets "+s+", spent "+n+l+k
s=k}n=b5.c
l=A.La(n)
k=A.c([],t.EQ)
for(j=p.gbs(),j=j.gA(j);j.n();){i=j.gt()
a=i.a
a0=i.b
if(!c0.u(0,a)){i=b4.$1(a)
h=a0.a
g=b3.$1(h)
h=h.gbx()
f=a0.c
e=f===1?"":"s"
k.push(new A.dO(a,i,g,h,"From "+f+" complete month"+e+" of "+a0.b.length))}}B.a.D(k,new A.wi())
c0=A.c([],t.jw)
for(j=A.MG(c1,b5),i=j.length,q=0;q<j.length;j.length===i||(0,A.l)(j),++q){a1=j[q]
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
if(a5!==a6)A.f(A.a6(a6,a5))
a5=a2.a
a5=g.a.B(0,new A.P(a5.a.S(0),a5.b))
a7=new A.q(a5,a6)
d=B.e.h(0,a6)
if(d==null)A.f(A.x(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>d)A.f(A.y(a6+" allows "+A.i(d)+" decimal places",a5.k(0),b0))
a5=a7}if(a5==null)a5=""
else{if(a3)a5=b0
else{a5=a2.b
a6=g.b
if(a5!==a6)A.f(A.a6(a6,a5))
a5=a2.a
a5=g.a.B(0,new A.P(a5.a.S(0),a5.b))
a7=new A.q(a5,a6)
d=B.e.h(0,a6)
if(d==null)A.f(A.x(a6,b1,b2))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>d)A.f(A.y(a6+" allows "+A.i(d)+" decimal places",a5.k(0),b0))
a5=a7}a5.toString
a5=b3.$1(a5)}if(a1.ghw()==null)a6=""
else{a6=a1.ghw()
a6.toString
a6=b3.$1(a6)}if(a3)a7=b0
else{a7=a2.b
a8=g.b
if(a7!==a8)A.f(A.a6(a8,a7))
a7=a2.a
a7=g.a.B(0,new A.P(a7.a.S(0),a7.b))
a9=new A.q(a7,a8)
d=B.e.h(0,a8)
if(d==null)A.f(A.x(a8,b1,b2))
if((a7.b<=0?0:Math.max(a7.gv().b,0))>d)A.f(A.y(a8+" allows "+A.i(d)+" decimal places",a7.k(0),b0))
a7=a9}if(a7!=null){if(a3)g=b0
else{a3=a2.b
a7=g.b
if(a3!==a7)A.f(A.a6(a7,a3))
a2=a2.a
a2=g.a.B(0,new A.P(a2.a.S(0),a2.b))
g=new A.q(a2,a7)
d=B.e.h(0,a7)
if(d==null)A.f(A.x(a7,b1,b2))
if((a2.b<=0?0:Math.max(a2.gv().b,0))>d)A.f(A.y(a7+" allows "+A.i(d)+" decimal places",a2.k(0),b0))}g=g.a.l(0,$.L())<=0}else g=!1
if(g)g="Reached"
else{g=a1.d
if(g===0)g="Date passed"
else{a2=g===1?"":"s"
a2=""+g+" month"+a2+" left"
g=a2}}c0.push(new A.kz(h,f,""+e.c+" "+c+b,a4,a5,a6,g))}return new A.nd("Spent counts filed transactions only; ones still to file in Review are not in it. Heading for is spent so far plus what was spent after the "+n+l+" last month.",b8+" "+b7,b6,r,s,k,c0)},
La(a){var s,r="th"
if(!(a>=11&&a<=13)){s=B.d.R(a,10)
A:{if(1===s){r="st"
break A}if(2===s){r="nd"
break A}if(3===s){r="rd"
break A}break A}}return r},
dn:function dn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
dO:function dO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kz:function kz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nd:function nd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wj:function wj(a){this.a=a},
wk:function wk(a){this.a=a},
wh:function wh(){},
wi:function wi(){},
l5:function l5(){},
fY:function fY(a,b,c){var _=this
_.a=a
_.b=b
_.d=null
_.e=c},
nF:function nF(a){this.a=a},
LT(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="currency",a3="is not a supported currency",a4=new A.wm(b5),a5=A.aE(b6.F(),B.q),a6=A.Ge(b2,b3,b7,a5),a7=a5.a,a8=a5.b,a9=A.CX(b2,b3,12,b7,b4,a8,a7),b0=A.Gf(b2,b3,12,b7,a8,a5,a7),b1=new A.wn(a5,a4)
a7=a6.b
a8=a7.b
s=A.F(a8)
a8=A.B(new A.ah(a8,s.i("db(1)").a(b1),s.i("ah<1,db>")),t.q9)
s=a7.c
r=A.F(s)
B.a.a1(a8,new A.ah(s,r.i("db(1)").a(b1),r.i("ah<1,db>")))
r=a4.$1(a7.gdQ())
s=a4.$1(a7.gdU())
a7=a4.$1(a7.gdQ().a9(0,a7.gdU()))
q=A.a3(t.N)
for(p=a6.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.l)(p),++n)q.m(0,p[n].a)
p=A.c([],t.s)
for(o=a6.d,m=o.length,n=0;n<o.length;o.length===m||(0,A.l)(o),++n){l=o[n]
if(l.e===b7)p.push(A.ca(l))}o=A.c([],t.Fn)
m=A.bO(a9,0,t.wy)
m=A.B(m,A.o(m).i("h.E"))
k=A.F(m).i("aP<1>")
m=new A.aP(m,k)
m=new A.ac(m,m.gq(0),k.i("ac<a4.E>"))
k=k.i("a4.E")
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
if(c!==b)A.f(A.a6(b,c))
e=e.a
e=g.a.B(0,new A.P(e.a.S(0),e.b))
a=B.e.h(0,b)
if(a==null)A.f(A.x(b,a2,a3))
if((e.b<=0?0:Math.max(e.gv().b,0))>a)A.f(A.y(b+" allows "+A.i(a)+" decimal places",e.k(0),null))
g=a4.$1(new A.q(e,b))
if(b5)e=""
else{e=A.Gp(h)
if(e==null)e=""}if(!(i>=0&&i<b0.length))return A.a(b0,i)
c=b0[i].b
if(c.b.length===0&&c.c.length===0)c=""
else{b=c.gdQ()
c=c.gdU()
a0=c.b
a1=b.b
if(a0!==a1)A.f(A.a6(a1,a0))
c=c.a
c=b.a.B(0,new A.P(c.a.S(0),c.b))
a=B.e.h(0,a1)
if(a==null)A.f(A.x(a1,a2,a3))
if((c.b<=0?0:Math.max(c.gv().b,0))>a)A.f(A.y(a1+" allows "+A.i(a)+" decimal places",c.k(0),null))
c=a4.$1(new A.q(c,a1))}o.push(new A.l_(j+" "+h.a,f,d,g,e,c))}return new A.im(b7,a8,r,s,a7,q,p,o)},
LS(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i=A.aE(a0.F(),B.q),h=i.a,g=i.b,f=A.CX(a,b,12,a1,c,g,h),e=A.Gf(a,b,12,a1,g,i,h),d=new A.wl()
h=A.c([],t.s)
for(g=f.length,s=0;s<f.length;f.length===g||(0,A.l)(f),++s){r=f[s]
q=r.b-1
if(!(q>=0&&q<12))return A.a(B.l,q)
h.push(B.l[q]+" "+B.d.R(r.a,100))}g=t.zp
q=A.c([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.l)(f),++s)q.push(d.$1(f[s].c.a))
g=A.c([],g)
for(p=f.length,s=0;s<f.length;f.length===p||(0,A.l)(f),++s)g.push(d.$1(f[s].d.a))
p=A.c([],t.wG)
for(o=e.length,s=0;s<e.length;e.length===o||(0,A.l)(e),++s){n=e[s].b
if(n.b.length===0&&n.c.length===0)n=null
else{m=n.gdQ()
n=n.gdU()
l=n.b
k=m.b
if(l!==k)A.f(A.a6(k,l))
n=n.a
n=m.a.B(0,new A.P(n.a.S(0),n.b))
j=B.e.h(0,k)
if(j==null)A.f(A.x(k,"currency","is not a supported currency"))
if((n.b<=0?0:Math.max(n.gv().b,0))>j)A.f(A.y(k+" allows "+A.i(j)+" decimal places",n.k(0),null))
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
im:function im(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wm:function wm(a){this.a=a},
wn:function wn(a,b){this.a=a
this.b=b},
o0:function o0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wl:function wl(){},
vt(a){var s=a.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return""+a.c+" "+B.l[s]+" "+a.a},
LU(a,b,c,d){var s,r,q,p,o,n=new A.ws(c),m=a.a7,l=m.a6(B.ah,b),k=l==null,j=k?null:J.Y(l.c.h(0,"gstRegistered"),!0),i=j===!0,h=new A.wr(a)
k=k?null:A.m(l.c.h(0,"name"))
j=A.c([],t.Z)
for(m=m.aY(B.a4),s=m.length,r=0;r<m.length;m.length===s||(0,A.l)(m),++r){q=m[r]
if(A.m(q.c.h(0,"bookId"))===b)j.push(q)}B.a.D(j,new A.wo())
m=A.c([],t.eO)
for(s=A.MO(a,b),p=s.length,r=0;r<s.length;s.length===p||(0,A.l)(s),++r)m.push(new A.wp(a,s[r],h,c,n,i).$0())
s=A.c([],t.p9)
for(p=A.Ma(a,b),o=p.length,r=0;r<p.length;p.length===o||(0,A.l)(p),++r)s.push(new A.wq(a,p[r],n,d).$0())
return new A.o1(k,i,j,m,s)},
kr:function kr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fX:function fX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1:function h1(a,b,c,d,e,f,g){var _=this
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
ws:function ws(a){this.a=a},
wr:function wr(a){this.a=a},
wo:function wo(){},
wp:function wp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wq:function wq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
LV(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aE(a3.F(),B.q),d=new A.wB(e,a2,a1,new A.wz(a1)),c=new A.wy(a1),b=new A.wx(e),a=a1.c_,a0=a.gt()
a=A.a5(a.d,t.N,t.ud).gT()
s=A.B(a,A.o(a).i("h.E"))
B.a.D(s,new A.wu())
a=A.c([],t.AM)
if(a0.length!==0){r=A.c([],t.tZ)
for(q=a0.length,p=t.s,o=0;o<a0.length;a0.length===q||(0,A.l)(a0),++o){n=a0[o]
m=A.Kz(n)
l=c.$1(n.c)
k=n.f
if(k==null)k=""
j=n.r
j=j==null?"":"\u2022\u2022"+j
i=b.$1(n.w)
h=b.$1(n.x)
r.push(A.c([m,l,k,j,i,h,n.y==null?"":"Attached"],p))}a.push(new A.dJ("Documents",B.jI,r,null,B.dI))}if(s.length!==0){r=A.c([],t.tZ)
for(q=s.length,p=t.s,o=0;o<s.length;s.length===q||(0,A.l)(s),++o){g=s[o]
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
i+=h==null?"":" "+h.c}r.push(A.c([m,l,k,j,i,b.$1(g.y),b.$1(g.z)],p))}a.push(new A.dJ("Insurance policies",B.jT,r,null,B.dI))}for(r=t.Ab.a(new A.wv()),q=B.a.gA(B.ac),r=new A.N(q,r,t.m5),p=a1.a7;r.n();){m=q.gt()
f=p.aY(m)
l={}
l.a=null
l.a=f
k=f.length
if(k!==0)a.push(new A.ww(l,m,d).$0())}return A.Lu(a)},
Lu(a){var s,r,q=A.c([],t.AM)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.l)(a),++r)q.push(new A.vN(a[r]).$0())
return q},
Kz(a){var s=a.e
if(s!=null&&B.b.u(s.toLowerCase(),a.b.c.toLowerCase()))return s
return a.gcl()},
dJ:function dJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wz:function wz(a){this.a=a},
wA:function wA(a){this.a=a},
wB:function wB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wy:function wy(a){this.a=a},
wx:function wx(a){this.a=a},
wu:function wu(){},
wv:function wv(){},
ww:function ww(a,b,c){this.a=a
this.b=b
this.c=c},
wt:function wt(a){this.a=a},
vN:function vN(a){this.a=a},
vM:function vM(a){this.a=a},
LW(a,b,c,d){var s,r=new A.wG(c),q=A.fG(a,b,B.c),p=a.gK().gT(),o=A.o(p),n=o.i("n<h.E>"),m=A.B(new A.n(p,o.i("j(h.E)").a(new A.wD(b)),n),n.i("h.E"))
B.a.D(m,new A.wE(q,new A.wH()))
p=A.c([],t.q0)
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.l)(m),++s)p.push(new A.wF(a,m[s],d,r).$0())
return p},
kJ:function kJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wG:function wG(a){this.a=a},
wH:function wH(){},
wD:function wD(a){this.a=a},
wE:function wE(a,b){this.a=a
this.b=b},
wF:function wF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wC:function wC(a){this.a=a},
aM(a,b){var s,r,q,p,o,n,m,l,k,j=a.b,i=B.kK.h(0,j)
if(i==null)i=j+" "
if(b)return i+"\u2022\u2022\u2022\u2022\u2022"
s=a.a
r=s.a
q=r.a?r.S(0):r
p=new A.P(q,s.b).k(0)
o=B.b.bH(p,".")
s=o<0
n=s?p:B.b.X(p,0,o)
m=j==="JPY"?0:2
l=B.b.mF(s?"":B.b.ad(p,o+1),m,"0")
k=A.CP(n,j)
j=r.ga8(0)<0?"-":""
s=m>0?"."+l:""
return j+i+k+s},
cv(a,b){var s,r=a.b-1
if(!(r>=0&&r<12))return A.a(B.l,r)
r=B.l[r]
s=a.a
s=s===b.a?"":" "+s
return""+a.c+" "+r+s},
G7(a){var s=a.F().aw(288e8),r=new A.zH(),q=A.b4(s)-1
if(!(q>=0&&q<12))return A.a(B.l,q)
return""+A.au(s)+" "+B.l[q]+" "+A.b0(s)+", "+A.i(r.$1(A.Cb(s)))+":"+A.i(r.$1(A.Cc(s)))+" SGT"},
zH:function zH(){},
fF(a,b){var s,r
if(a==="personal")return"Personal"
s=null
if(b.aG(a)==="member"){r=A.a5(b.p3,t.N,t.o).h(0,a)
r=r==null?null:r.b
s=r}if(s!=null)return s
r=a.length
if(r===0)r=a
else{if(0>=r)return A.a(a,0)
r=a[0].toUpperCase()+B.b.ad(a,1)}return r},
LX(d3,d4,d5,d6,d7,d8,d9,e0,e1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=null,c9=" no statement has posted yet.",d0=new A.wK(d7),d1=A.aE(d9.F(),B.q),d2=d8-1
if(!(d2>=0&&d2<12))return A.a(B.V,d2)
s=B.V[d2]+" "+e1
r=A.Gb(d3,d4,d8,d1,e1)
q=A.w8(d3,d4)
p=A.CE(d3,d4,d7,d9,e0)
d2=t.s
o=A.Ga(d3,d4,A.fG(d3,d4,A.c([q],d2)),d6,d8,e1)
n=o.h(0,q).d.x
m=r.a
A:{if(B.e8===m){l="Final: every checked account is reconciled for the month."
break A}if(B.e9===m){l="Finalised on the phone with "+A.i(r.d)+" items open."
break A}k=B.b6===m
if(k&&!r.b){l="Draft: the month has not ended."
break A}if(k){l="Draft: "+r.c.length+" statements are not reconciled yet."
break A}l=c8}l=A.c([l],d2)
j=n>0
if(j){i=n===1?"":"s"
l.push(""+n+" transaction"+i+" of the month wait in Review and are not counted.")}h=A.c([],t.cM)
for(i=A.fG(d3,d4,new A.at(o,A.o(o).i("at<1>"))),g=i.length,f=t.jL,e=!r.b,d="No spending filed for "+s+" yet.",c=d3.d,b=t.N,a=t.G,a0=p.b,a1=A.F(a0),a2=a1.i("j(1)"),a3=a1.i("n<1>"),a4=a3.i("h<dj>(h.E)"),a5=n===1,a6=""+n+" transaction",a7=0;a7<i.length;i.length===g||(0,A.l)(i),++a7){a8=i[a7]
a9=o.h(0,a8)
b0=a9.d
b1=A.Nz(a9,d7)
b2=a2.a(new A.wI(a8))
b3=a4.a(new A.wJ())
b4=a9.c
b5=b4.a
b6=d0.$1(b5)
b7=b0.a
b8=d0.$1(b7)
b9=b0.c
b9=b9.a.a.ga8(0)===0?c8:"after "+A.i(d0.$1(b9))+" of refunds"
c0=b7.b
c1=b5.b
if(c0!==c1)A.f(A.a6(c1,c0))
b7=b7.a
b7=b5.a.B(0,new A.P(b7.a.S(0),b7.b))
c2=B.e.h(0,c1)
if(c2==null)A.f(A.x(c1,"currency","is not a supported currency"))
if((b7.b<=0?0:Math.max(b7.gv().b,0))>c2)A.f(A.y(c1+" allows "+A.i(c2)+" decimal places",b7.k(0),c8))
b5=A.c([new A.em("Money in",b6,c8),new A.em("Spent",b8,b9),new A.em("Saved",d0.$1(new A.q(b7,c1)),b1)],f)
b6=A.c([],f)
for(b7=b0.d,b8=b7.length,c3=0;b9=b7.length,c3<b9;b7.length===b8||(0,A.l)(b7),++c3){c4=b7[c3]
b9=c4.a
if(b9==null)b9="No category yet"
else{c0=A.a5(c,b,a).h(0,b9)
c0=c0==null?c8:c0.c
b9=A.hH(c0==null?b9:c0)}b6.push(new A.em(b9,d0.$1(c4.b),c8))}if(b9!==0)b7=c8
else{b7=A.c([d],d2)
if(j)b7.push(a6+(a5?"":"s")+" of the month wait in Review.")
if(e)b7.push("Statements for the month come after it ends.")
b7=B.a.Y(b7," ")}b8=A.c([],d2)
b9=b0.w
if(b9>0){c0=A.i(d0.$1(b0.r))
c1=b9===1?"":"s"
b8.push("Spent includes "+c0+" from "+b9+" alert"+c1+c9)}b4=b4.c
if(b4>0){b9=b4===1?"":"s"
b8.push("Money in includes "+b4+" alert"+b9+c9)}b4=A.c([],f)
for(b9=a3.i("@<h.E>").a3(a1.i("dj")),b3=new A.f9(new A.n(a0,b2,a3).gA(0),b3,B.bo,b9.i("f9<1,2>")),b9=b9.y[1];b3.n();){b2=b3.d
if(b2==null)b2=b9.a(b2)
c0=b2.a
c1=b2.gf4()
c5=b2.c
c5===$&&A.mN()
if(c5==null)c5="No balance yet"
c6=b2.d
c6===$&&A.mN()
b2=c6===b2.gf4()?c8:""+(b2.gf4()-c6)+" with no balance yet, not in the total"
b4.push(new A.em(c0.c+" ("+c1+")",c5,b2))}B.a.m(h,new A.ll(a8,b5,b6,b7,b8))}A.fF(d4,d3)
if(d5!=null)A.G7(d5)
d2=A.c([],t.nK)
for(j=a0.length,a7=0;a7<a0.length;a0.length===j||(0,A.l)(a0),++a7)for(i=a0[a7].b,g=i.length,c3=0;c3<i.length;i.length===g||(0,A.l)(i),++c3)for(f=i[c3].b,e=f.length,c7=0;c7<f.length;f.length===e||(0,A.l)(f),++c7)if(f[c7].as!=null)d2.push(new A.jY())
return new A.pe(s,l,h)},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jY:function jY(){},
pe:function pe(a,b,c){this.b=a
this.d=b
this.e=c},
wK:function wK(a){this.a=a},
wI:function wI(a){this.a=a},
wJ:function wJ(){},
LY(f4,f5,f6,f7,f8,f9,g0,g1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=null,e0="currency",e1="is not a supported currency",e2="From the latest statements",e3=" with no balance yet",e4="s",e5=A.aE(f9.F(),B.q),e6=new A.x1(f7),e7=A.CE(f4,f5,f7,f9,g0),e8=A.Ga(f4,f5,A.fG(f4,f5,B.c),f6,f8,g1),e9=g1===e5.a&&f8===e5.b,f0=A.Gl(f4,f5,e5,f7),f1=f5==="personal",f2=f1?A.MC(f4,e5,g0):d9,f3=A.c([],t.be)
for(s=A.fG(f4,f5,new A.at(e8,A.o(e8).i("at<1>"))),r=s.length,q=t.k1,p=t.B,o=f8-1,n=g1,m=f2==null,l=t.g,k=A.F(f0),j=k.i("j(1)"),k=k.i("n<1>"),i=k.i("h.E"),h=t.kd,g=e7.b,f=A.F(g),e=f.i("j(1)"),f=f.i("N<1>"),d=t.i6,c=t.bL,b=t.zp,a=0;a<s.length;s.length===r||(0,A.l)(s),++a){a0=s[a]
a1=A.v(d,c)
for(a2=e.a(new A.wM(a0)),a3=B.a.gA(g),a2=new A.N(a3,a2,f);a2.n();)for(a4=a3.gt().b,a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.l)(a4),++a6){a7=a4[a6]
a1.j(0,a7.a,a7)}a8=new A.xb(a0)
a9=new A.x2()
b0=new A.x_()
b1=new A.x4()
a2=a1.h(0,B.be)
b2=a2==null?d9:a2.b
if(b2==null)b2=B.jV
a2=A.c([],h)
a3=a1.h(0,B.bd)
a3=a3==null?d9:a3.b
if(a3!=null)B.a.a1(a2,a3)
a1=a1.h(0,B.bf)
a1=a1==null?d9:a1.b
if(a1!=null)B.a.a1(a2,a1)
b3=b1.$1(b2)
b4=b1.$1(a2)
a1=$.L()
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((a1.b<=0?0:Math.max(a1.gv().b,0))>b5)A.f(A.y(a0+" allows "+A.i(b5)+" decimal places",a1.k(0),d9))
a3=p.a(a8.$1(a2))
a4=a3.b
if(a4!==a0)A.f(A.a6(a0,a4))
a3=a3.a
a3=a1.B(0,new A.P(a3.a.S(0),a3.b))
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((a3.b<=0?0:Math.max(a3.gv().b,0))>b5)A.f(A.y(a0+" allows "+A.i(b5)+" decimal places",a3.k(0),d9))
b6=e8.h(0,a0)
a1=b6==null
if(a1)b7=d9
else{a4=b6.c.a
a5=b6.d.a
b8=a5.b
b9=a4.b
if(b8!==b9)A.f(A.a6(b9,b8))
a5=a5.a
a5=a4.a.B(0,new A.P(a5.a.S(0),a5.b))
b7=new A.q(a5,b9)
b5=B.e.h(0,b9)
if(b5==null)A.f(A.x(b9,e0,e1))
if((a5.b<=0?0:Math.max(a5.gv().b,0))>b5)A.f(A.y(b9+" allows "+A.i(b5)+" decimal places",a5.k(0),d9))}c0=A.B(new A.n(f0,j.a(new A.wN(a0)),k),i)
a4=A.c([],l)
for(a5=A.KA(f4,f5,e5),b8=a5.length,a6=0;a6<a5.length;a5.length===b8||(0,A.l)(a5),++a6){c1=a5[a6]
if(c1.b===a0)a4.push(c1)}a5=A.F(c0)
b8=a5.i("j(1)")
a5=a5.i("n<1>")
c2=new A.n(c0,b8.a(new A.wO()),a5).gq(0)
c3=new A.wL(e5)
b9=m?d9:B.a.M(f2.c,new A.wS(a0))
if(b9===!0){b9=A.c([],b)
for(c4=f2.lg(a0),c5=c4.length,a6=0;a6<c4.length;c4.length===c5||(0,A.l)(c4),++a6)b9.push(c4[a6].a.cm(0))
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
a2=e2+c7+a2}a3=a3.a.ga8(0)>0?B.fE:B.aO
c7=b7==null
c8=c7?d9:e6.$1(b7)
if(!(o>=0&&o<12))return A.a(B.V,o)
c9=B.V[o]
d0=e9?", in progress":""
a1=a1?d9:b6.d.x
a1=(a1==null?0:a1)>0?"; "+b6.d.x+" transactions still to file":""
if(c7||b7.a.a.ga8(0)===0)c7=B.aO
else c7=b7.a.a.ga8(0)>0?B.fD:B.d0
if(c0.length===0){a4=$.L()
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((a4.b<=0?0:Math.max(a4.gv().b,0))>b5)A.f(A.y(a0+" allows "+A.i(b5)+" decimal places",a4.k(0),d9))
a4=e6.$1(new A.q(a4,a0))}else{d1=$.L()
b5=B.e.h(0,a0)
if(b5==null)A.f(A.x(a0,e0,e1))
if((d1.b<=0?0:Math.max(d1.gv().b,0))>b5)A.f(A.y(a0+" allows "+A.i(b5)+" decimal places",d1.k(0),d9))
a4=e6.$1(B.a.a5(a4,new A.q(d1,a0),new A.wT(),p))}d1=c0.length
if(d1===0)a5="No card bill or loan instalment due"
else{d2=d1===1?"":e4
a5=B.a.M(c0,new A.wU())?", "+new A.n(c0,b8.a(new A.wV()),a5).gq(0)+" overdue":""
if(c2===0)b8=""
else{b8=c2===1?"":e4
b8="; "+c2+" amount"+b8+" not known, not in the total"}b8=""+d1+" payment"+d2+a5+b8
a5=b8}b8=B.a.M(c0,new A.wW())?B.d0:B.aO
b8=A.c([new A.fh("Cash in bank accounts",b9,c4,B.aO),new A.fh("Owed on cards and loans",c5,a2,a3),new A.fh("Money in less spent",c8,c9+" "+n+d0+a1,c7),new A.fh("Payments due in 30 days",a4,a5,b8)],q)
if(c6==null)a1=f1?"No forecast: no bank account here has a balance yet.":d9
else a1="Known payments and income only, from each account's latest statement"+(f2.mg(a0)?"; some accounts have no balance or an out-of-date one, so it is incomplete":"")+"."
B.a.m(f3,new A.lm(a0,b8,c6,a1))}f1=A.c([],h)
for(s=g.length,a=0;a<g.length;g.length===s||(0,A.l)(g),++a)for(r=g[a].b,q=r.length,a6=0;a6<r.length;r.length===q||(0,A.l)(r),++a6){p=r[a6].b
n=A.F(p)
B.a.a1(f1,new A.n(p,n.i("j(1)").a(new A.wX()),n.i("n<1>")))}d3=A.B(new A.n(f0,j.a(new A.wY()),k),i)
s=t.vu
r=t.gF
q=r.i("h.E")
d4=A.B(new A.n(f1,s.a(new A.wZ()),r),q)
d5=A.B(new A.n(f1,s.a(new A.wP()),r),q)
d6=A.B(new A.n(f1,s.a(new A.wQ(d5)),r),q)
d7=A.B(new A.n(f1,s.a(new A.wR(d5)),r),q)
f1=A.c([],t.oT)
s=d3.length
if(s!==0){r=s===1?"":e4
q=A.c([],t.I)
for(p=d3.length,a=0;a<d3.length;d3.length===p||(0,A.l)(d3),++a){c1=d3[a]
q.push(new A.p(c1.b,c1.c+" due "+c1.a))}f1.push(new A.d_(B.by,""+s+" payment"+r+" overdue","Check the bank app; the app pays nothing itself.",q))}s=d6.length
if(s!==0){r=s===1?" needs":"s need"
q=new A.x5().$1(d6)
q.toString
q=A.cv(q,e5)
p=A.c([],t.I)
for(n=d6.length,a=0;a<d6.length;d6.length===n||(0,A.l)(d6),++a){d8=d6[a]
p.push(new A.p(d8.b,d8.r))}f1.push(new A.d_(B.cQ,""+s+" account"+r+" a newer statement","Oldest latest statement "+q+". Add the statements on the phone.",p))}s=d4.length
if(s!==0){r=s===1?" has":"s have"
q=A.c([],t.I)
for(p=d4.length,a=0;a<d4.length;d4.length===p||(0,A.l)(d4),++a){d8=d4[a]
q.push(new A.p(d8.b,d8.d))}f1.push(new A.d_(B.cQ,""+s+" account"+r+" no statement yet","Add a first statement on the phone, or mark the account closed if it is.",q))}s=d5.length
if(s!==0){r=s===1?"":e4
q=A.c([],t.I)
for(p=d5.length,a=0;a<d5.length;d5.length===p||(0,A.l)(d5),++a){d8=d5[a]
q.push(new A.p(d8.b,d8.r))}f1.push(new A.d_(B.cR,""+s+" account"+r+" with no statement for over a year","Probably closed: mark them closed on the phone so they stop counting as out of date.",q))}s=d7.length
if(s!==0){r=s===1?"":e4
q=A.c([],t.I)
for(p=d7.length,a=0;a<d7.length;d7.length===p||(0,A.l)(d7),++a){d8=d7[a]
n=d8.y
m=n.length
l=m===1?"":e4
q.push(new A.p(d8.b,""+m+" month"+l+", from "+B.a.ga0(n)))}f1.push(new A.d_(B.cR,"Statement gaps on "+s+" account"+r,"Earlier months with no statement. Matters only for complete history.",q))}if(!(o>=0&&o<12))return A.a(B.V,o)
return new A.pj(e9,f3,f1,f0)},
Gl(a,b,c,d){var s,r,q,p,o,n,m,l=A.c([],t.m1)
for(s=A.Gy(a,c,30),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=a.gK().h(0,p.c)
n={}
n.a=null
if(o!=null){n.a=o
m=o.r===b}else m=!1
if(m)l.push(new A.AA(n,a,p,d,c).$0())}return l},
KA(a,b,c){var s,r,q,p,o,n=A.c([],t.g)
for(s=A.Gy(a,c,30),r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
o=a.gK().h(0,p.c)
if((o==null?null:o.r)===b){o=A.F0(a,p)
if(o!=null)n.push(o)}}return n},
F0(a,b){var s,r,q=b.e
if(q!=null){s=q.w
if(s==null)s=q.d
if(s==null)r=null
else if(s.a.a.ga8(0)<0){r=s.b
r=A.a2($.L(),r).a9(0,s)}else r=s
return r}r=a.gK().h(0,b.c)
if(r==null)r=null
else{r=r.as
r=r==null?null:r.r}return r},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a,b){this.a=a
this.b=b},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a,b){this.a=a
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
x1:function x1(a){this.a=a},
wM:function wM(a){this.a=a},
xb:function xb(a){this.a=a},
xc:function xc(){},
xd:function xd(){},
x2:function x2(){},
x3:function x3(){},
x_:function x_(){},
x0:function x0(){},
x4:function x4(){},
x8:function x8(){},
x9:function x9(){},
xa:function xa(){},
wN:function wN(a){this.a=a},
wO:function wO(){},
wL:function wL(a){this.a=a},
wS:function wS(a){this.a=a},
wT:function wT(){},
wU:function wU(){},
wV:function wV(){},
wW:function wW(){},
wX:function wX(){},
wY:function wY(){},
wZ:function wZ(){},
wP:function wP(){},
wQ:function wQ(a){this.a=a},
wR:function wR(a){this.a=a},
x5:function x5(){},
x6:function x6(){},
x7:function x7(){},
AA:function AA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nT(a,b){return new A.kA(a,b)},
NU(a){return new A.Bt(a,B.f0)},
hf:function hf(a,b){this.a=a
this.b=b},
hk:function hk(){},
kA:function kA(a,b){this.a=a
this.b=b},
kB:function kB(){},
Bt:function Bt(a,b){this.a=a
this.b=b},
Bs:function Bs(){},
J4(a){t.k2.a(a)
return B.ca.u(0,a.c)&&a.a!=="fromEvent"},
J3(a){return B.a.b5(a.d,new A.t9())},
jG(a){var s
A:{if(a instanceof A.hu){s="That passphrase did not open SanthIQ's key. Type it again."
break A}if(a instanceof A.l6){s="Sync is not on yet. On the phone: Settings, Devices, turn sync on, then try again."
break A}if(a instanceof A.l5){s="SanthIQ/Sync was not found in this account. Turn sync on on the phone; if it is on, the page may not be allowed to see the phone's files (see the setup guide, W1)."
break A}if(a instanceof A.hk){s="Google's sign-in ended (it lasts about an hour). Sign in again; nothing is lost."
break A}if(a instanceof A.kA){s="Google answered with an error (HTTP "+a.a+"). Try again in a minute."
break A}if(a instanceof A.kB){s="Google took too long to answer. Check the connection and try again; nothing is lost."
break A}if(a instanceof A.b8||t.bs.b(a)){s="Something in the sync folder could not be read."
break A}s="Could not reach Google. Check the connection and try again."
break A}return s},
Nm(a,b){var s,r,q,p=t.f,o=t.N,n=t.X,m=p.a(B.z.bi(a,null)).G(0,o,n),l=m.h(0,"clientId")
l.toString
A.b(l)
s=m.h(0,"categoryFlags")
s.toString
s=A.In(p.a(s).G(0,o,n))
r=m.h(0,"settings")
r.toString
n=A.If(p.a(r).G(0,o,n))
o=A.c([],t.mt)
r=m.h(0,"setupSteps")
r.toString
r=p.a(r).h(0,"steps")
r.toString
r=J.dh(t.j.a(r),t.J)
p=r.$ti
r=new A.ac(r,r.gq(0),p.i("ac<R.E>"))
p=p.i("R.E")
while(r.n()){q=r.d
o.push(A.Jf(q==null?p.a(q):q))}return new A.t0(l,b,s,n.d,o)},
CO(a){var s=A.B(a.e,t.N)
B.a.ba(s)
return B.b.X(A.vx(B.aH.O(B.F.O(a.b+"\n"+B.a.Y(s,"\n"))).a),0,16)},
t0:function t0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ey:function ey(a,b){this.a=a
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
t2:function t2(a){this.a=a},
t1:function t1(a){this.a=a},
tm:function tm(){},
tn:function tn(){},
tg:function tg(a,b){this.a=a
this.b=b},
tk:function tk(){},
tl:function tl(){},
tf:function tf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t5:function t5(a,b){this.a=a
this.b=b},
te:function te(){},
td:function td(){},
tc:function tc(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a,b){this.a=a
this.b=b},
tj:function tj(){},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
t6:function t6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
th:function th(a,b){this.a=a
this.b=b},
tz:function tz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t3:function t3(){},
tw:function tw(){},
tx:function tx(a,b,c){this.a=a
this.b=b
this.c=c},
ts:function ts(a){this.a=a},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
ty:function ty(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t7:function t7(a){this.a=a},
to:function to(a){this.a=a},
t9:function t9(){},
tu:function tu(a){this.a=a},
tt:function tt(a,b){this.a=a
this.b=b},
tp:function tp(a){this.a=a},
tq:function tq(a){this.a=a},
t4:function t4(a){this.a=a},
tb:function tb(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
ef(a){var s
A:{if("SGD"===a){s="Singapore"
break A}if("INR"===a){s="India"
break A}s="Other"
break A}return s},
Nq(a,b){A.b(a)
A.b(b)
return A.vE(a)!==A.vE(b)?A.vE(a)-A.vE(b):B.b.l(a,b)},
vE(a){var s
A:{if("SGD"===a){s=0
break A}if("INR"===a){s=1
break A}s=2
break A}return s},
fG(a,b,c){var s,r,q=A.a3(t.N)
for(s=a.gK().gT(),s=s.gA(s);s.n();){r=s.gt()
if(r.r===b&&r.d!==B.x)q.m(0,r.e)}q.a1(0,c)
if(q.a===0)q.m(0,A.w8(a,b))
q=A.B(q,q.$ti.c)
B.a.D(q,A.Go())
return q},
Lv(a){var s,r=a.d
A:{if(B.y===r){s=B.bd
break A}if(B.o===r){s=B.bf
break A}s=B.be
break A}return s},
G3(a){var s=a.as
switch(s==null?null:s.a){case B.bS:s="Home loan"
break
case B.b1:s="Personal loan"
break
case B.bT:s="Commercial loan"
break
case B.bU:s="Other loan"
break
case null:case void 0:s="Loan, type not set"
break
default:s=null}return s},
Fx(a,b){var s,r=a.aa(b)
if(r<=0)s="today"
else s=r===1?"yesterday":""+r+" days ago"
return s},
LK(a,b,c,d){var s
if(a==null)return"No statement yet"
if(a.aa(d)>365){s=a.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return"No statement since "+B.l[s]+" "+a.a+": if it is closed, mark it closed on the phone"}s=A.c([],t.s)
if(c)s.push("Out of date: statement to "+A.cv(a,d)+", "+A.Fx(a,d))
if(b.length!==0)s.push("Statements missing: "+B.a.Y(b,", "))
return s.length===0?null:B.a.Y(s,". ")},
hH(a){if(a.toUpperCase()!==a||a.toLowerCase()===a)return a
return new A.ah(A.c(a.split(" "),t.s),t.ff.a(new A.yd()),t.zK).Y(0," ")},
Gp(a){var s,r=A.N4(a),q=r.gfk(),p=r.a,o=p.a
q=o.a.ga8(0)<=0?null:A.Ed(q.a.gbV().ds(0,o.gbV()),4)
s=q==null?null:q.a_(0,new A.P(A.aB(100),0)).c9(0,B.bc).aZ().k(0)+"%"
if(s==null)return null
return r.gfk().B(0,p).a.a.ga8(0)<0?"not shown":s},
Nz(a,b){var s,r=A.Gp(a)
A:{if(r==null){s=null
break A}if("not shown"===r){s="savings rate not shown: spent is over twice the money in recorded"
break A}s=b?"savings rate hidden":"savings rate "+r
break A}return s},
Az(a){var s,r,q,p,o,n,m,l=null,k=B.b.I(a).toLowerCase(),j=A.D("^(\\d{4})-(\\d{1,2})-(\\d{1,2})$",!0,!1).aj(k)
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
p=B.kN.h(0,r)
if(3>=s.length)return A.a(s,3)
s=s[3]
s.toString
q=A.X(s,l,l)}else{o=l
p=o
q=p}}}if(q==null||p==null||o==null||p<1||p>12||o<1||o>A.au(A.ay(q,p+1,0)))return l
return new A.z(q,p,o)},
mD(a){return a==null?"":""+a.c+"/"+a.b+"/"+a.a},
eh:function eh(a,b,c){this.c=a
this.a=b
this.b=c},
yd:function yd(){},
Nt(a){var s
A:{if(B.b8===a){s="Could not be read"
break A}if(B.aD===a){s="Waiting for its account"
break A}if(B.v===a||B.P===a){s="Possible match to check"
break A}if(B.c9===a){s="Money in transit"
break A}if(B.b7===a){s="Statement doesn't add up"
break A}if(B.H===a){s="Changed in two places"
break A}if(B.ae===a){s="Books disagree"
break A}if(B.c0===a){s="Rules disagree"
break A}if(B.f===a||B.h===a){s="Change not applied"
break A}if(B.ea===a||B.eb===a){s="Needs a category"
break A}if(B.c1===a){s="Statement missing"
break A}if(B.c2===a){s="May not be from the bank"
break A}if(B.c3===a){s="Payment reminder"
break A}if(B.c4===a){s="Charge not recognised"
break A}if(B.c5===a){s="History start to check"
break A}if(B.ad===a){s="Document to check"
break A}if(B.c6===a){s="Invoice to check"
break A}if(B.c7===a){s="Payment failed"
break A}if(B.c8===a){s="Loan on a card statement"
break A}s=null}return s},
Nf(a,b,c){var s,r=A.hP(a,$.HA(),t.tj.a(t.r.a(new A.AJ(c))),null)
if(b){s=$.Hl()
s=A.ao(r,s,"\u2022\u2022\u2022\u2022\u2022")}else s=r
return s},
LZ(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aE(a9.F(),B.q),a2=A.NW(a6,a7),a3=A.NP(a6,a2),a4=t.N,a5=A.v(a4,t.Bz)
for(s=A.Ns(a6,a1),r=s.length,q=t.M,p=0;p<s.length;s.length===r||(0,A.l)(s),++p){o=s[p]
n=A.Nt(o.b)
m=a5.h(0,n)
if(m==null){m=A.c([],q)
a5.j(0,n,m)
n=m}else n=m
J.bU(n,o)}s=A.c([],t.kW)
for(r=A.bO(a2,0,t.t5),q=J.Q(r.a),n=r.b,r=new A.as(q,n,A.o(r).i("as<1>")),m=t.s,l=a6.d,k=t.G;r.n();){j=r.c
j=j>=0?new A.p(n+j,q.gt()):A.f(A.ak())
o=j.a
i=j.b
j=i.d
if(j.length===0)j="(no payee)"
h=i.c===B.k?"Money out":"Money in"
g=i.e.length
f=A.aM(i.f,a8)
if(!(o>=0&&o<a3.length))return A.a(a3,o)
e=a3[o]
A:{if(e==null){d=null
break A}d=B.aB.h(0,e.a)
d.toString
d=A.c([d],m)
c=e.b
if(c!=null){b=A.a5(l,a4,k).h(0,c)
b=b==null?null:b.c
d.push(A.hH(b==null?c:b))}d=B.a.Y(d,", ")
break A}s.push(new A.ij(j,i,e,d,h,g,f))}a4=B.a.a5(a2,0,new A.xe(),t.S)
r=A.c([],t.qH)
for(q=new A.ab(a5,a5.$ti.i("ab<1,2>")).gA(0);q.n();){n=q.d
a=n.a
a0=n.b
n=A.c([],m)
for(l=J.aX(a0),k=l.bg(a0,100),j=k.$ti,k=new A.ac(k,k.gq(0),j.i("ac<a4.E>")),j=j.i("a4.E");k.n();){h=k.d
n.push(A.Nf((h==null?j.a(h):h).d,a8,a1))}l=l.gq(a0)
r.push(new A.dR(a,n,l))}B.a.D(r,new A.xf())
return new A.tR(s,a4,r)},
ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
tR:function tR(a,b,c){this.a=a
this.b=b
this.c=c},
AJ:function AJ(a){this.a=a},
xe:function xe(){},
xf:function xf(){},
M_(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="currency",a4="is not a supported currency",a5=b2.e,a6=t.N,a7=t.R,a8=A.a5(a5,a6,a7).gT(),a9=A.o(a8),b0=a9.i("n<h.E>"),b1=A.B(new A.n(a8,a9.i("j(h.E)").a(new A.xg(b3)),b0),b0.i("h.E"))
B.a.D(b1,new A.xh())
s=A.v(a6,t.S)
r=A.v(a6,t.xC)
q=A.v(t.xG,t.C)
for(a8=b2.f2(b3),a9=a8.$ti,a9.i("j(h.E)").a(A.jM()),a8=a8.gA(0),a9=new A.N(a8,A.jM(),a9.i("N<h.E>")),b0=t.A;a9.n();){p=a8.gt()
o=p.z
o=new A.bA(A.cP(o==null?"":o),p.c,p.e)
n=q.h(0,o)
if(n==null){n=A.c([],b0)
q.j(0,o,n)
o=n}else o=n
J.bU(o,p)}for(a8=new A.ab(q,q.$ti.i("ab<1,2>")).gA(0),a9=t.s;a8.n();){b0=a8.d
m=b0.a
l=m.a
k=m.b
j=m.c
i=b0.b
for(b0=b1.length,p=J.an(i),h=0;h<b1.length;b1.length===b0||(0,A.l)(b1),++h){g=b1[h]
if(g.f1(l,k,b3,j)){o=g.a
n=s.h(0,o)
if(n==null)n=0
s.j(0,o,n+p.gq(i))}}f=A.CW(l,A.a5(a5,a6,a7).gT(),k,b3,j)
if(f instanceof A.hi){e=f.a
for(b0=p.gA(i);b0.n();){p=b0.gt()
d=p.z
if(d==null)d=""
c=r.h(0,d)
if(c==null){o=p.f.b
n=$.L()
b=B.e.h(0,o)
if(b==null)A.f(A.x(o,a3,a4))
if((n.b<=0?0:Math.max(n.gv().b,0))>b)A.f(A.y(o+" allows "+A.i(b)+" decimal places",n.k(0),null))
c=new A.bA(0,new A.q(n,o),A.a3(a6))}a=c.b
a0=c.c
o=a.b
p=p.f
n=p.b
if(o===n){if(n!==o)A.f(A.a6(o,n))
p=a.a.B(0,p.a)
n=new A.q(p,o)
b=B.e.h(0,o)
if(b==null)A.f(A.x(o,a3,a4))
if((p.b<=0?0:Math.max(p.gv().b,0))>b)A.f(A.y(o+" allows "+A.i(b)+" decimal places",p.k(0),null))
p=n}else p=a
o=A.c([],a9)
for(n=e.length,h=0;h<e.length;e.length===n||(0,A.l)(e),++h){g=e[h]
o.push('"'+g.c+'" as '+A.F8(b2,g))}a0.a1(0,o)
r.j(0,d,new A.bA(c.a+1,p,a0))}}}a1=new A.xl(b2,s)
a5=t.vV
a6=A.c([],a5)
for(a7=A.F(b1),a8=a7.i("j(1)"),a9=a8.a(new A.xi()),b0=B.a.gA(b1),a7=a7.i("N<1>"),a9=new A.N(b0,a9,a7);a9.n();)a6.push(a1.$1(b0.gt()))
a5=A.c([],a5)
for(a8=a8.a(new A.xj()),a9=B.a.gA(b1),a7=new A.N(a9,a8,a7);a7.n();)a5.push(a1.$1(a9.gt()))
a7=A.c([],t.yk)
for(a8=new A.ab(r,r.$ti.i("ab<1,2>")).gA(0);a8.n();){a2=a8.d
a9=a2.a
b0=a2.b
p=A.aM(b0.b,b4)
o=b0.c
o=A.B(o,A.o(o).c)
B.a.ba(o)
a7.push(new A.cx(a9,b0.a,p,o))}B.a.D(a7,new A.xk())
return new A.tT(a6,a5,a7)},
F8(a,b){var s,r,q=B.aB.h(0,b.d)
q.toString
q=A.c([q],t.s)
s=b.e
if(s!=null){r=A.a5(a.d,t.N,t.G).h(0,s)
r=r==null?null:r.c
q.push(A.hH(r==null?s:r))}return B.a.Y(q,", ")},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tT:function tT(a,b,c){this.a=a
this.b=b
this.c=c},
xg:function xg(a){this.a=a},
xh:function xh(){},
xl:function xl(a,b){this.a=a
this.b=b},
xi:function xi(){},
xj:function xj(){},
xk:function xk(){},
Nn(a,b){var s,r,q,p,o="access_token",n="error"
if(a.length===0)return new A.iI()
s=null
try{s=A.Ju(a)}catch(r){return new A.eF("The answer from Google could not be read.")}if(!s.E(o)&&!s.E(n))return new A.iI()
if(b==null||J.ar(s,"state")!==b)return new A.eF("That sign-in was not started from this tab. Sign in again.")
if(J.ar(s,n)!=null)return new A.eF(J.ar(s,n)==="access_denied"?"Sign-in was cancelled.":"Google refused the sign-in.")
q=J.ar(s,o)
if(q==null||q.length===0)return new A.eF("Google sent no token.")
p=J.ar(s,"scope")
if(!B.a.u(A.c((p==null?"":p).split(" "),t.s),B.a.ga0(B.dD)))return new A.eF("Access to SanthIQ's own Drive files was not allowed, so the page cannot read them.")
p=J.ar(s,"expires_in")
p=A.li(p==null?"":p,null)
return new A.hl(q,A.BY(0,0,0,p==null?3600:p))},
G4(a){var s,r,q,p=B.b.I(a).toLowerCase(),o=B.b.eZ(p,"@")
if(o<1)return"\u2022\u2022\u2022"
s=B.b.X(p,0,o)
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
r=r>1?s[r-1]:""
return q+"\u2022\u2022\u2022"+r+B.b.ad(p,o)},
xO(a,b){var s=0,r=A.J(t.eM),q,p,o,n,m,l
var $async$xO=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:m=t.N
s=3
return A.r(a.$3$headers("GET",A.jA("https","openidconnect.googleapis.com","/v1/userinfo",null),A.S(["authorization","Bearer "+b],m,m)),$async$xO)
case 3:l=d
m=l.a
if(m===401)throw A.k(new A.hk())
if(m!==200)throw A.k(A.nT(m,"account check"))
p=t.f.a(B.z.bi(B.R.cb(l.b),null))
o=p.h(0,"email")
if(typeof o!="string"||o.length===0)throw A.k(A.nT(m,"account check"))
n=p.h(0,"hd")
if(typeof n=="string"&&n.length!==0){q=new A.iN(A.G4(o))
s=1
break}q=new A.iO(A.vx(B.aH.O(B.F.O(B.b.I(o).toLowerCase())).a),A.G4(o))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$xO,r)},
Lw(a,b){var s=b.cy
if(s==null)return"The phone has not recorded SanthIQ's Google account yet."
if(s.a!==a.a)return"This is not SanthIQ's Google account ("+s.b+"). Sign in with that account."
return null},
LO(a,b){var s,r,q,p,o=new A.wb(a)
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
u1:function u1(){},
iI:function iI(){},
hl:function hl(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a},
he:function he(){},
iO:function iO(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a},
wb:function wb(a){this.a=a},
M0(a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.a2($.L(),a5),b=A.CX(a0,a1,12,a5,a2,a4,a6),a=A.v(t.T,t.r9)
for(s=A.bO(b,0,t.wy),r=J.Q(s.a),q=s.b,s=new A.as(r,q,A.o(s).i("as<1>")),p=t.B;s.n();){o=s.c
o=o>=0?new A.p(q+o,r.gt()):A.f(A.ak())
n=o.a
for(o=o.b.d.d,m=o.length,l=0;l<o.length;o.length===m||(0,A.l)(o),++l){k=o[l]
j=k.a
i=a.h(0,j)
if(i==null){i=A.ix(b.length,c,!1,p)
a.j(0,j,i)
j=i}else j=i
J.Dk(j,n,k.b)}}h=new A.xp(c,new A.xo(a3),a5)
s=a.$ti.i("ab<1,2>")
g=A.B(new A.ab(a,s),s.i("h.E"))
B.a.D(g,new A.xm(new A.xr(c)))
f=new A.xn(b)
s=t.s
r=A.c([],s)
for(n=b.length-1;n>=0;--n)r.push(f.$1(n))
q=A.c([],t.vk)
for(p=g.length,o=a0.d,m=t.N,j=t.G,l=0;l<g.length;g.length===p||(0,A.l)(g),++l){e=g[l]
i=e.a
if(i==null)i="No category yet"
else{d=A.a5(o,m,j).h(0,i)
d=d==null?null:d.c
i=A.hH(d==null?i:d)}q.push(h.$2(i,e.b))}p=A.c([],t.g)
for(o=b.length,l=0;l<b.length;b.length===o||(0,A.l)(b),++l)p.push(b[l].d.a)
p=h.$2("Spent, after refunds",p)
o=A.c([],s)
for(j=A.F(b).i("aP<1>"),i=new A.aP(b,j),i=new A.ac(i,i.gq(0),j.i("ac<a4.E>")),j=j.i("a4.E");i.n();){d=i.d
d=(d==null?j.a(d):d).d.x
o.push(d===0?"":""+d)}s=A.c(["Each month in "+a5+", as the phone counts it; a refund lowers its category."],s)
m=A.a3(m)
for(j=b.length,l=0;l<b.length;b.length===j||(0,A.l)(b),++l)for(i=b[l].d.y,i=new A.cB(i,i.r,i.e,A.o(i).i("cB<1>"));i.n();)m.m(0,A.b(i.d))
return new A.iZ(a5,r,q,p,o,s,m)},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xo:function xo(a){this.a=a},
xp:function xp(a,b,c){this.a=a
this.b=b
this.c=c},
xq:function xq(){},
xr:function xr(a){this.a=a},
xs:function xs(){},
xm:function xm(a){this.a=a},
xn:function xn(a){this.a=a},
M2(b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="currency",b5="is not a supported currency",b6=A.aE(c2.F(),B.q),b7=B.b.I(c0.e).toLowerCase(),b8=A.c([],t.A)
for(s=b9.my(c0.b,c0.a),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=b7.length!==0,p=c0.r,o=p!=null,n=c0.f.a,m=c0.d,l=m!=null,k=c0.c,j=k!=null;s.n();){i=r.gt()
if(j&&i.w.l(0,k)<0)continue
if(l&&i.w.l(0,m)>0)continue
h=!0
switch(n){case 0:break
case 1:g=i.d
if(g!=null)h=(g===B.n||g===B.w)&&i.Q==null
break
case 2:h=A.jL(i)===B.am
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
if(!B.b.u(g.toLowerCase(),b7)){h=i.db
if(h==null)h=""
h=!B.b.u(h.toLowerCase(),b7)}}if(h)continue
B.a.m(b8,i)}s=new A.xw()
r=new A.xv(s)
switch(c0.w.a){case 0:s=new A.xx(s)
break
case 1:break
case 2:s=new A.xy(r)
break
case 3:s=r
break
default:s=b3}B.a.D(b8,s)
s=t.N
r=t.B
f=A.v(s,r)
e=A.v(s,r)
for(r=b8.length,d=0;q=b8.length,d<q;b8.length===r||(0,A.l)(b8),++d){c=b8[d]
b=c.e===B.m?f:e
q=c.f
p=q.b
o=b.h(0,p)
if(o==null){o=$.L()
n=new A.q(o,p)
a=B.e.h(0,p)
if(a==null)A.f(A.x(p,b4,b5))
if((o.b<=0?0:Math.max(o.gv().b,0))>a)A.f(A.y(p+" allows "+A.i(a)+" decimal places",o.k(0),b3))
o=n}n=o.b
if(p!==n)A.f(A.a6(n,p))
q=o.a.B(0,q.a)
a=B.e.h(0,n)
if(a==null)A.f(A.x(n,b4,b5))
if((q.b<=0?0:Math.max(q.gv().b,0))>a)A.f(A.y(n+" allows "+A.i(a)+" decimal places",q.k(0),b3))
b.j(0,p,new A.q(q,n))}a0=q===0?1:B.d.C(q+100-1,100)
a1=B.d.lf(c0.x,0,a0-1)
a2=new A.xu(b9)
r=b8.length
q=A.c([],t.s)
p=A.kY(new A.at(f,f.$ti.i("at<1>")),s)
p.a1(0,new A.at(e,e.$ti.i("at<1>")))
p=A.B(p,A.o(p).c)
B.a.D(p,A.Go())
o=p.length
d=0
for(;d<p.length;p.length===o||(0,A.l)(p),++d){a3=p[d]
n=A.ef(a3)
m=f.h(0,a3)
if(m==null){m=$.L()
l=new A.q(m,a3)
a=B.e.h(0,a3)
if(a==null)A.f(A.x(a3,b4,b5))
if((m.b<=0?0:Math.max(m.gv().b,0))>a)A.f(A.y(a3+" allows "+A.i(a)+" decimal places",m.k(0),b3))
m=l}m=A.aM(m,c1)
l=e.h(0,a3)
if(l==null){l=$.L()
k=new A.q(l,a3)
a=B.e.h(0,a3)
if(a==null)A.f(A.x(a3,b4,b5))
if((l.b<=0?0:Math.max(l.gv().b,0))>a)A.f(A.y(a3+" allows "+A.i(a)+" decimal places",l.k(0),b3))
l=k}q.push(n+" ("+a3+"): "+m+" in, "+A.aM(l,c1)+" out")}p=A.c([],t.nS)
for(o=A.by(b8,a1*100,b3,t.W).bg(0,100),n=o.$ti,o=new A.ac(o,o.gq(0),n.i("ac<a4.E>")),m=b6.a,n=n.i("a4.E"),l=b9.d,k=t.G;o.n();){j=o.d
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
a7=j.e===B.k?"-":""
a8=A.aM(j.f,c1)
a9=j.d
b0=a9==null
if(b0)b1="Not filed yet"
else{b1=B.aB.h(0,a9)
b1.toString}b2=j.Q
if(b2!=null){a9=A.a5(l,s,k).h(0,b2)
a9=a9==null?b3:a9.c
a9=A.hH(a9==null?b2:a9)}else{if(!b0)a9=a9===B.n||a9===B.w
else a9=!1
a9=a9?"No category yet":""}b0=A.jL(j)===B.am?"Alert, not posted":""
j=j.db
if(j==null)j=""
p.push(new A.lI(i,""+h.c+" "+g+a4,a5,a6,a7+a8,b1,a9,b0,j))}return new A.uj(p,r,a1,a0,q)},
Gq(a){var s
A:{if("sms"===a){s="SMS alert"
break A}if("email"===a){s="Email alert"
break A}if("statement"===a){s="Statement transaction"
break A}if("manual"===a){s="Entered by you"
break A}if("operation"===a){s="Made in SanthIQ"
break A}s="Other source ("+a+")"
break A}return s},
M3(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.b.a,c=d.h(0,b)
if(c==null)return e
s=A.aE(a1.F(),B.q)
r=new A.xz(a0)
q=t.s
p=A.c([],q)
for(o=c.c,n=a.hq(o,!0),m=J.Q(n.a),n=new A.N(m,n.b,n.$ti.i("N<1>")),l=c.a,k=s.a;n.n();){j=m.gt()
if(j.cx===l){i=A.Gq(j.y.a)
j=j.w
h=j.b-1
if(!(h>=0&&h<12))return A.a(B.l,h)
h=B.l[h]
g=j.a
g=g===k?"":" "+g
p.push(i+", "+(""+j.c+" "+h+g))}}q=A.c([],q)
for(n=a.bI(o),m=J.Q(n.a),n=new A.N(m,n.b,n.$ti.i("N<1>"));n.n();){j=m.gt()
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
n=A.cv(d,s)
m=c.x
d=m.J(0,d)?"":" ("+A.cv(m,s)+", Singapore date)"
o=new A.xA(a).$1(o)
m=c.z
if(m==null)m=""
k=c.e===B.k?"Money out":"Money in"
j=A.i(r.$1(c.f))
i=c.d
if(i==null)i="To file"
else{i=B.aB.h(0,i)
i.toString}i=A.c([new A.p("Date",n+d),new A.p("Account",o),new A.p("Payee",m),new A.p("Amount",k+", "+j),new A.p("Filed as",i)],t.I)
d=c.Q
if(d!=null){o=A.a5(a.d,t.N,t.G).h(0,d)
o=o==null?e:o.c
i.push(new A.p("Category",A.hH(o==null?d:o)))}d=c.as
if(d!=null)i.push(new A.p("For",A.AI(a,d)))
switch(A.jL(c)){case B.e0:d="Posted: a statement shows it"
break
case B.am:d="From an alert, no statement has posted it yet"
break
case null:case void 0:d=c.y.d?"Verified":"Not verified"
break
default:d=e}i.push(new A.p("State",d))
i.push(new A.p("Came from",A.Gq(c.y.a)))
if(p.length!==0)i.push(new A.p("The same payment, also as",B.a.Y(p,"; ")))
if(f!=null){d=f.z
if(d==null)d=""
i.push(new A.p("Refund of",d+" "+A.i(r.$1(f.f))+" on "+A.cv(f.w,s)))}if(q.length!==0)i.push(new A.p("Refunded",B.a.Y(q,"; ")))
if(A.a5(a.rx,t.N,t.y6).E(l))i.push(B.lA)
d=c.db
i.push(new A.p("Note",d==null?"":d))
return i},
e1:function e1(a,b,c){this.c=a
this.a=b
this.b=c},
e0:function e0(a,b,c){this.c=a
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
lI:function lI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
uj:function uj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xw:function xw(){},
xv:function xv(a){this.a=a},
xx:function xx(a){this.a=a},
xy:function xy(a){this.a=a},
xu:function xu(a){this.a=a},
xz:function xz(a){this.a=a},
xA:function xA(a){this.a=a},
Gw(a){return v.mangledGlobalNames[a]},
mC(a){var s,r=$.bm()
for(s=a.length-1;s>=0;--s)r=r.b1(0,8).B(0,A.aB(a[s]))
return r},
LL(a,b){var s,r,q
for(s=a,r=0;r<32;++r){q=$.Hm()
s.toString
q=q.dr(0,s).b_(0)
b.$flags&2&&A.C(b)
if(!(r<32))return A.a(b,r)
b[r]=q
s=s.c4(0,8)}if(!J.Y(s,$.bm()))throw A.k(A.x(a,null,null))
return b},
w6(a){switch(B.d.R(a.length,4)){case 1:return B.B.O(a+"===")
case 2:return B.B.O(a+"==")
case 3:return B.B.O(a+"=")
default:return B.B.O(a)}},
mB(a){var s,r,q
t.D.i("bf.S").a(a)
s=B.eo.gaH().O(a)
r=s.length
for(;q=r-1,B.b.c5(s,"=",q);r=q);return B.b.X(s,0,r)},
y9(a,b,c){var s=0,r=A.J(t.l2),q
var $async$y9=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.decrypt(a,b,c)),t.i),$async$y9)
case 3:q=e
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$y9,r)},
mE(a,b,c){var s=0,r=A.J(t.p),q,p
var $async$mE=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.deriveBits(a,b,c)),t.i),$async$mE)
case 3:q=p.iH(e,0,null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mE,r)},
yb(a,b){var s=0,r=A.J(t.l2),q
var $async$yb=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.digest(a,b)),t.i),$async$yb)
case 3:q=d
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$yb,r)},
yl(a,b,c){var s=0,r=A.J(t.l2),q
var $async$yl=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.encrypt(a,b,c)),t.i),$async$yl)
case 3:q=e
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$yl,r)},
mG(a){var s=0,r=A.J(t.m),q,p
var $async$mG=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.exportKey("jwk",a)),t.X),$async$mG)
case 3:q=p.w(c)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mG,r)},
mH(a,b,c){var s=0,r=A.J(t.m),q,p
var $async$mH=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.generateKey(a,b,c)),t.X),$async$mH)
case 3:q=p.w(e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mH,r)},
jI(a,b,c,d){var s=0,r=A.J(t.m),q,p
var $async$jI=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.r(A.bI(A.FE(v.G.crypto.subtle,"importKey",["jwk",a,b,c,d],p),p),$async$jI)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$jI,r)},
hJ(a,b,c,d){var s=0,r=A.J(t.m),q,p
var $async$hJ=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:p=t.m
s=3
return A.r(A.bI(A.FE(v.G.crypto.subtle,"importKey",["raw",a,b,c,d],p),p),$async$hJ)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hJ,r)},
bG(a){if(t.p.b(a))return a
return new Uint8Array(A.aJ(a))},
mM(a,b,c){var s=0,r=A.J(t.p),q,p
var $async$mM=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.sign(a,b,c)),t.i),$async$mM)
case 3:q=p.iH(e,0,null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$mM,r)},
BD(a,b,c,d){var s=0,r=A.J(t.y),q
var $async$BD=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:s=3
return A.r(A.bI(A.w(v.G.crypto.subtle.verify(a,b,c,d)),t.y),$async$BD)
case 3:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$BD,r)},
k4(a,b,c,d,e,f){var s=0,r=A.J(t.m),q,p,o,n,m
var $async$k4=A.K(function(g,h){if(g===1)return A.G(h,r)
for(;;)switch(s){case 0:s=3
return A.r(a.cI(),$async$k4)
case 3:n=h
m=J.aD(n)
if(m!==e)throw A.k(A.Il(m,e))
p=A.bG(n)
o=A.c([],t.s)
if(c)o.push("encrypt")
if(b)o.push("decrypt")
q=A.hJ(p,f,!1,o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$k4,r)},
Il(a,b){return new A.ce(!1,null,null,"Secret key is "+a*8+" bits, expected "+b*8+" bits.")},
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
D2(a){var s,r
try{s=J.eU(a)
if(s.gaz(a)===$.HV())s.aO(a,0,s.gq(a),0)}catch(r){}},
xC(a,b){var s,r=a.length,q=r-1,p=a.$flags|0
for(;;){if(!(b!==0&&q>=0))break
if(!(q>=0))return A.a(a,q)
s=a[q]+b
p&2&&A.C(a)
a[q]=s&255
b=s/256|0;--q}},
CK(a,b){var s,r,q,p,o,n,m=$.eg()
if(m){v.G.window.crypto.getRandomValues(a)
return}b=$.GS()
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
ca(a){var s,r,q,p=a.d
if(p===B.x)return"Cash ("+a.e+")"
s=A.D("(\\d{4})$",!0,!1).aj(a.b)
if(s==null)r=null
else{s=s.b
if(1>=s.length)return A.a(s,1)
r=s[1]}q=a.dy
A:{if(B.bg===q){p="SRS"
break A}if(q instanceof A.dk){p=q.c+" "+A.i(B.dP.h(0,p))
break A}if(q==null){p=B.dP.h(0,p)
break A}p=null}s=r==null?"":" \u2022\u2022"+r
return a.c+" "+A.i(p)+s},
N0(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.c([],t.M)
for(s=a1.a7.aY(B.bK),r=s.length,q=a1.c_,p=q.d,o=t.N,n=t.ud,m=0;m<s.length;s.length===r||(0,A.l)(s),++m){l=s[m]
k=l.c
j=A.m(k.h(0,"recordId"))
i=A.ax(k.h(0,"date"))
if(j==null||i==null)continue
h=q.gbD().h(0,j)
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
Gn(a){var s=B.b.I(a),r=A.D("^\\d[\\d,]*(\\.\\d+)?$",!0,!1)
if(!r.b.test(s)||B.b.u(s,",."))return null
if(B.b.bG(B.a.ga0(s.split(".")),","))return null
return A.ad(A.ao(s,",",""))},
Fz(a){var s,r,q=B.b.I(a),p=A.D("\\D",!0,!1),o=A.ao(q,p,"")
p=B.a.ga0(q.split("."))
s=A.D("\\D",!0,!1)
r=A.ao(p,s,"")
return!B.b.u(q,",")&&!B.b.u(q,".")&&o.length>=9||r.length>=13},
aw(a){var s,r,q=t.wL,p=A.B(new A.ah(A.c(a.split("-"),t.s),t.aY.a(A.Mi()),q),q.i("a4.E"))
q=p.length
if(0>=q)return A.a(p,0)
s=p[0]
if(1>=q)return A.a(p,1)
r=p[1]
if(2>=q)return A.a(p,2)
return new A.z(s,r,p[2])},
Gh(a){var s,r,q=A.CY(a)
if(q==null)return null
if(B.b.u(q,"\n")||B.b.u(q,"\r"))return"A note is one line."
if(q.length>200)return"A note is at most 200 characters."
s=$.Dh()
r=A.D("[\\s-]",!0,!1)
r=A.ao(q,r,"")
if(s.b.test(r))return"A note may not hold a full number (9 or more digits in a row)."
return null},
CY(a){var s=a==null?null:B.b.I(a)
return s==null||s.length===0?null:s},
No(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="someone removed",f=A.c([],t.M)
for(s=a.c_,r=s.gt(),q=r.length,p=a.p3,o=t.N,n=t.o,m=0;m<r.length;r.length===q||(0,A.l)(r),++m){l=r[m]
if(l.b.d===!0&&l.x==null){k=l.a
j=l.gcl()
i=l.c
if(i==="me")i="Me"
else{i=A.a5(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-expiry:"+k,B.ad,k,j+" for "+i+" has no expiry date. Add it from the document so its reminders can start."))}}for(r=A.Ej(s.c,o).a,r=A.e8(r,r.r,A.o(r).c),q=r.$ti.c;r.n();){k=r.d
if(k==null)k=q.a(k)
h=s.gbD().h(0,k)
if(h!=null){j=h.gcl()
i=h.c
if(i==="me")i="Me"
else{i=A.a5(p,o,n).h(0,i)
i=i==null?null:i.b
if(i==null)i=g}f.push(new A.W("document-source:"+k,B.ad,k,"The file of "+j+" for "+i+" was deleted from SanthIQ/Documents. The copy on this phone is kept."))}}return f},
hK(a){var s,r,q,p=a.toUpperCase()
for(s=0;s<8;++s){r=B.jP[s]
q=r.b
r=A.D(r.a,!0,!1)
if(r.b.test(p))return q}return B.b.I(a)},
hO(a,b,c,d,e,f,g){var s=0,r=A.J(t.p),q,p,o,n,m,l,k,j,i,h
var $async$hO=A.K(function(a0,a1){if(a0===1)return A.G(a1,r)
for(;;)switch(s){case 0:m=$.HY()
s=3
return A.r(m.aS(),$async$hO)
case 3:l=a1
s=4
return A.r(l.bu(),$async$hO)
case 4:k=a1.a
s=5
return A.r(m.b3(l,b),$async$hO)
case 5:j=a1
t.D.i("bf.S").a(k)
m=t.N
p=A.S(["formatVersion",1,"deviceId",c,"n",d,"ephemeral",B.K.gaH().O(k)],m,t.X)
m=B.F.O(B.z.bd(A.S(["deviceId",c,"kind","statementPassword","accountId",a,"value",g,"createdAtUtc",e.F().dl()],m,m),null))
o=$.b6().cp()
o=$.b6().cM(o)
o=$.b6().cL(o,32)
n=A.B(k,t.S)
B.a.a1(n,b.a)
i=A
h=p
s=6
return A.r(o.aX(B.F.O("santhiq/sync/secret/v1"),n,j),$async$hO)
case 6:q=i.hQ(h,a1,B.mG,m,f)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$hO,r)},
jJ(){var s=0,r=A.J(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$jJ=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(A.MI()){s=1
break}j=v.G
i=A.aS(A.w(j.document).querySelector("#app"))
i.toString
n=i
p=4
s=7
return A.r(A.bI(A.w(A.w(j.window).fetch("config.json",{cache:"no-store"})),t.m),$async$jJ)
case 7:m=b
if(!A.cN(m.ok)){j=A.aq("config.json: HTTP "+A.i(A.CM(m,"status",t.S)))
throw A.k(j)}i=t.N
s=8
return A.r(A.bI(A.w(m.text()),i),$async$jJ)
case 8:h=b
g=A.b(A.w(A.w(j.window).location).pathname)
l=A.Nm(h,A.b(A.w(A.w(j.window).location).origin)+B.b.X(g,0,B.b.eZ(g,"/")+1))
k=new A.ld(A.NU(A.N9()),A.Mh(),l,new A.kH(),B.bW,A.a3(i))
s=9
return A.r(k.ck(),$async$jJ)
case 9:A.J2(k).ae()
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
return A.I($async$jJ,r)}},B={}
var w=[A,J,B]
var $={}
A.C3.prototype={}
J.kN.prototype={
J(a,b){return a===b},
gP(a){return A.c6(a)},
k(a){return"Instance of '"+A.lh(a)+"'"},
gaz(a){return A.dg(A.CA(this))}}
J.kP.prototype={
k(a){return String(a)},
gP(a){return a?519018:218159},
gaz(a){return A.dg(t.y)},
$iaz:1,
$ij:1}
J.h2.prototype={
J(a,b){return null==b},
k(a){return"null"},
gP(a){return 0},
$iaz:1,
$ibh:1}
J.ip.prototype={$ia9:1}
J.es.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.lf.prototype={}
J.eL.prototype={}
J.dI.prototype={
k(a){var s=a[$.GB()]
if(s==null)s=a[$.D3()]
if(s==null)return this.io(a)
return"JavaScript function for "+J.hU(s)},
$idx:1}
J.h3.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.h4.prototype={
gP(a){return 0},
k(a){return String(a)}}
J.u.prototype={
dR(a,b){return new A.dp(a,A.F(a).i("@<1>").a3(b).i("dp<1,2>"))},
m(a,b){A.F(a).c.a(b)
a.$flags&1&&A.C(a,29)
a.push(b)},
mi(a,b,c){var s
A.F(a).c.a(c)
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.k(A.tB(b,null))
a.splice(b,0,c)},
mj(a,b,c){var s,r
A.F(a).i("h<1>").a(c)
a.$flags&1&&A.C(a,"insertAll",2)
A.Cd(b,0,a.length,"index")
if(!t.he.b(c))c=J.Ic(c)
s=J.aD(c)
a.length=a.length+s
r=b+s
this.aJ(a,r,a.length,a,b)
this.b8(a,b,r,c)},
bN(a,b){var s=A.F(a)
return new A.n(a,s.i("j(1)").a(b),s.i("n<1>"))},
a1(a,b){var s
A.F(a).i("h<1>").a(b)
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.iK(a,b)
return}for(s=J.Q(b);s.n();)a.push(s.gt())},
iK(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.k(A.aH(a))
for(r=0;r<s;++r)a.push(b[r])},
ao(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
a2(a,b){var s,r
A.F(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.k(A.aH(a))}},
cN(a,b,c){var s=A.F(a)
return new A.ah(a,s.a3(c).i("1(2)").a(b),s.i("@<1>").a3(c).i("ah<1,2>"))},
Y(a,b){var s,r=A.ix(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.j(r,s,A.i(a[s]))
return r.join(b)},
cg(a){return this.Y(a,"")},
bg(a,b){return A.by(a,0,A.cO(b,"count",t.S),A.F(a).c)},
b9(a,b){return A.by(a,b,null,A.F(a).c)},
cS(a,b){var s,r,q
A.F(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.k(A.ak())
if(0>=s)return A.a(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.k(A.aH(a))}return r},
a5(a,b,c,d){var s,r,q
d.a(b)
A.F(a).a3(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.k(A.aH(a))}return r},
m7(a,b,c){var s,r,q,p=A.F(a)
p.i("j(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.k(A.aH(a))}p=c.$0()
return p},
mr(a,b,c){var s,r,q,p=A.F(a)
p.i("j(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=s-1;r>=0;--r){q=a[r]
if(b.$1(q))return q
if(s!==a.length)throw A.k(A.aH(a))}if(c!=null)return c.$0()
throw A.k(A.ak())},
ag(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
aK(a,b,c){if(b<0||b>a.length)throw A.k(A.aL(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.k(A.aL(c,b,a.length,"end",null))
if(b===c)return A.c([],A.F(a))
return A.c(a.slice(b,c),A.F(a))},
dB(a,b){return this.aK(a,b,null)},
dt(a,b,c){A.bQ(b,c,a.length)
return A.by(a,b,c,A.F(a).c)},
ga0(a){if(a.length>0)return a[0]
throw A.k(A.ak())},
gaq(a){var s=a.length
if(s>0)return a[s-1]
throw A.k(A.ak())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.a(a,0)
return a[0]}if(s===0)throw A.k(A.ak())
throw A.k(A.DQ())},
aJ(a,b,c,d,e){var s,r,q,p,o
A.F(a).i("h<1>").a(d)
a.$flags&2&&A.C(a,5)
A.bQ(b,c,a.length)
s=c-b
if(s===0)return
A.ba(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.hT(d,e).cU(0,!1)
q=0}p=J.an(r)
if(q+s>p.gq(r))throw A.k(A.DP())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
b8(a,b,c,d){return this.aJ(a,b,c,d,0)},
aO(a,b,c,d){var s
A.F(a).i("1?").a(d)
a.$flags&2&&A.C(a,"fillRange")
A.bQ(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
M(a,b){var s,r
A.F(a).i("j(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.k(A.aH(a))}return!1},
b5(a,b){var s,r
A.F(a).i("j(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.k(A.aH(a))}return!0},
ghE(a){return new A.aP(a,A.F(a).i("aP<1>"))},
D(a,b){var s,r,q,p,o,n=A.F(a)
n.i("d(1,1)?").a(b)
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.KQ()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.b7()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fH(b,2))
if(p>0)this.kj(a,p)},
ba(a){return this.D(a,null)},
kj(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bH(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.Y(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.Y(a[s],b))return!0
return!1},
ga4(a){return a.length===0},
gap(a){return a.length!==0},
k(a){return A.C1(a,"[","]")},
cU(a,b){var s=A.c(a.slice(0),A.F(a))
return s},
hI(a){return this.cU(a,!0)},
ea(a){return A.C8(a,A.F(a).c)},
gA(a){return new J.f0(a,a.length,A.F(a).i("f0<1>"))},
gP(a){return A.c6(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.k(A.aL(b,0,null,"newLength",null))
if(b>a.length)A.F(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.k(A.ya(a,b))
return a[b]},
j(a,b,c){A.F(a).c.a(c)
a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.k(A.ya(a,b))
a[b]=c},
eW(a,b){var s
A.F(a).i("j(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaz(a){return A.dg(A.F(a))},
$ibv:1,
$iT:1,
$ih:1,
$iA:1}
J.kO.prototype={
n_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.lh(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.o2.prototype={}
J.f0.prototype={
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
J.fe.prototype={
l(a,b){var s
A.vi(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdh(b)
if(this.gdh(a)===s)return 0
if(this.gdh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdh(a){return a===0?1/a<0:a<0},
b_(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.k(A.aA(""+a+".toInt()"))},
h9(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.k(A.aA(""+a+".ceil()"))},
m8(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.k(A.aA(""+a+".floor()"))},
f9(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.k(A.aA(""+a+".round()"))},
mS(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
lf(a,b,c){if(B.d.l(b,c)>0)throw A.k(A.eT(b))
if(this.l(a,b)<0)return b
if(this.l(a,c)>0)return c
return a},
bz(a,b){var s
if(b>20)throw A.k(A.aL(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gdh(a))return"-"+s
return s},
bL(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.k(A.aL(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.f(A.aA("Unexpected toString result: "+s))
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
R(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aA(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fW(a,b)},
C(a,b){return(a|0)===a?a/b|0:this.fW(a,b)},
fW(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.k(A.aA("Result of truncating division is "+A.i(s)+": "+A.i(a)+" ~/ "+b))},
b1(a,b){if(b<0)throw A.k(A.eT(b))
return b>31?0:a<<b>>>0},
kC(a,b){return b>31?0:a<<b>>>0},
c4(a,b){var s
if(b<0)throw A.k(A.eT(b))
if(a>0)s=this.eI(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
an(a,b){var s
if(a>0)s=this.eI(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dM(a,b){if(0>b)throw A.k(A.eT(b))
return this.eI(a,b)},
eI(a,b){return b>31?0:a>>>b},
b7(a,b){return a>b},
gaz(a){return A.dg(t.x)},
$iaZ:1,
$iU:1,
$ibH:1}
J.io.prototype={
gbW(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.C(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaz(a){return A.dg(t.S)},
$iaz:1,
$id:1}
J.kQ.prototype={
gaz(a){return A.dg(t.pR)},
$iaz:1}
J.dH.prototype={
d7(a,b,c){var s=b.length
if(c>s)throw A.k(A.aL(c,0,s,null,null))
return new A.mp(b,a,c)},
aM(a,b){return this.d7(a,b,0)},
hp(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.k(A.aL(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.a(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.hp(c,a)},
bG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ad(a,r-s)},
f8(a,b,c){A.Cd(0,0,a.length,"startIndex")
return A.Gt(a,b,c,0)},
bR(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.er){s=b.e
s=!(s==null?b.e=b.j9():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.jc(a,b)}},
hD(a,b,c,d){var s=A.bQ(b,c,a.length)
return A.D1(a,b,s,d)},
jc(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.Dl(b,a),s=s.gA(s),r=0,q=1;s.n();){p=s.gt()
o=p.gdz()
n=p.gcd()
q=n-o
if(q===0&&r===o)continue
B.a.m(m,this.X(a,r,o))
r=n}if(r<a.length||q>0)B.a.m(m,this.ad(a,r))
return m},
c5(a,b,c){var s
t.cL.a(b)
if(c<0||c>a.length)throw A.k(A.aL(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.I9(b,a,c)!=null},
am(a,b){return this.c5(a,b,0)},
X(a,b,c){return a.substring(b,A.bQ(b,c,a.length))},
ad(a,b){return this.X(a,b,null)},
I(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.IM(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.IN(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.k(B.eE)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ac(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a_(c,s)+a},
mF(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.a_(c,s)},
ce(a,b,c){var s=a.length
if(c>s)throw A.k(A.aL(c,0,s,null,null))
s=a.indexOf(b,c)
return s},
bH(a,b){return this.ce(a,b,0)},
eZ(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
u(a,b){return A.NK(a,b,0)},
l(a,b){var s
A.b(b)
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
$ibv:1,
$iaz:1,
$iaZ:1,
$ifm:1,
$ie:1}
A.jb.prototype={
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
m|=B.d.an(m,1)
m|=m>>>2
m|=m>>>4
m|=m>>>8
n=((m|m>>>16)>>>0)+1}l=new Uint8Array(n)
B.i.b8(l,0,o,p)
i.b=l
p=l}if(t.p.b(b))B.i.b8(p,i.a,q,b)
else for(k=0;k<r;++k){p=i.b
o=i.a+k
j=s.h(b,k)
p.$flags&2&&A.C(p)
if(!(o>=0&&o<p.length))return A.a(p,o)
p[o]=j}i.a=q},
hG(){var s=this
if(s.a===0)return $.jO()
return new Uint8Array(A.aJ(J.bq(B.i.gab(s.b),s.b.byteOffset,s.a)))},
gq(a){return this.a},
$iBR:1}
A.hw.prototype={
m(a,b){var s
t.L.a(b)
s=t.p.b(b)?b:new Uint8Array(A.aJ(b))
B.a.m(this.b,s)
this.a=this.a+s.length},
fb(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.jO()
s=l.b
r=s.length
if(r===1){if(0>=r)return A.a(s,0)
q=s[0]
l.a=0
B.a.ao(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.l)(s),++o,p=m){n=s[o]
m=p+n.length
B.i.b8(q,p,m,n)}l.a=0
B.a.ao(s)
return q},
hG(){var s,r,q,p,o,n,m=this.a
if(m===0)return $.jO()
s=new Uint8Array(m)
for(m=this.b,r=m.length,q=0,p=0;p<m.length;m.length===r||(0,A.l)(m),++p,q=n){o=m[p]
n=q+o.length
B.i.b8(s,q,n,o)}return s},
gq(a){return this.a},
$iBR:1}
A.eM.prototype={
gA(a){return new A.i1(J.Q(this.gbc()),A.o(this).i("i1<1,2>"))},
gq(a){return J.aD(this.gbc())},
ga4(a){return J.jT(this.gbc())},
gap(a){return J.Do(this.gbc())},
b9(a,b){var s=A.o(this)
return A.fO(J.hT(this.gbc(),b),s.c,s.y[1])},
bg(a,b){var s=A.o(this)
return A.fO(J.mS(this.gbc(),b),s.c,s.y[1])},
ag(a,b){return A.o(this).y[1].a(J.jS(this.gbc(),b))},
ga0(a){return A.o(this).y[1].a(J.BN(this.gbc()))},
gaq(a){return A.o(this).y[1].a(J.BO(this.gbc()))},
u(a,b){return J.Dn(this.gbc(),b)},
k(a){return J.hU(this.gbc())}}
A.i1.prototype={
n(){return this.a.n()},
gt(){return this.$ti.y[1].a(this.a.gt())},
$ial:1}
A.f3.prototype={
gbc(){return this.a}}
A.jc.prototype={$iT:1}
A.ja.prototype={
h(a,b){return this.$ti.y[1].a(J.ar(this.a,b))},
j(a,b,c){var s=this.$ti
J.Dk(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.Ia(this.a,b)},
m(a,b){var s=this.$ti
J.bU(this.a,s.c.a(s.y[1].a(b)))},
D(a,b){var s
this.$ti.i("d(2,2)?").a(b)
s=b==null?null:new A.uF(this,b)
J.mR(this.a,s)},
dt(a,b,c){var s=this.$ti
return A.fO(J.I8(this.a,b,c),s.c,s.y[1])},
aJ(a,b,c,d,e){var s=this.$ti
J.Ib(this.a,b,c,A.fO(s.i("h<2>").a(d),s.y[1],s.c),e)},
b8(a,b,c,d){return this.aJ(0,b,c,d,0)},
aO(a,b,c,d){var s=this.$ti
J.I5(this.a,b,c,s.c.a(s.i("2?").a(d)))},
$iT:1,
$iA:1}
A.uF.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("d(1,1)")}}
A.dp.prototype={
dR(a,b){return new A.dp(this.a,this.$ti.i("@<1>").a3(b).i("dp<1,2>"))},
gbc(){return this.a}}
A.f4.prototype={
G(a,b,c){return new A.f4(this.a,this.$ti.i("@<1,2>").a3(b).a3(c).i("f4<1,2,3,4>"))},
E(a){return this.a.E(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
Z(a,b){return this.$ti.i("4?").a(this.a.Z(0,b))},
a2(a,b){this.a.a2(0,new A.nh(this,this.$ti.i("~(3,4)").a(b)))},
gah(){var s=this.$ti
return A.fO(this.a.gah(),s.c,s.y[2])},
gT(){var s=this.$ti
return A.fO(this.a.gT(),s.y[1],s.y[3])},
gq(a){var s=this.a
return s.gq(s)},
ga4(a){var s=this.a
return s.ga4(s)},
gap(a){var s=this.a
return s.gap(s)},
gbs(){return this.a.gbs().cN(0,new A.ng(this),this.$ti.i("ap<3,4>"))}}
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
A.fj.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.kd.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.tY.prototype={}
A.T.prototype={}
A.a4.prototype={
gA(a){var s=this
return new A.ac(s,s.gq(s),A.o(s).i("ac<a4.E>"))},
ga4(a){return this.gq(this)===0},
ga0(a){if(this.gq(this)===0)throw A.k(A.ak())
return this.ag(0,0)},
gaq(a){var s=this
if(s.gq(s)===0)throw A.k(A.ak())
return s.ag(0,s.gq(s)-1)},
u(a,b){var s,r=this,q=r.gq(r)
for(s=0;s<q;++s){if(J.Y(r.ag(0,s),b))return!0
if(q!==r.gq(r))throw A.k(A.aH(r))}return!1},
M(a,b){var s,r,q=this
A.o(q).i("j(a4.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.ag(0,r)))return!0
if(s!==q.gq(q))throw A.k(A.aH(q))}return!1},
m6(a,b){var s,r,q,p=this
A.o(p).i("j(a4.E)").a(b)
s=p.gq(p)
for(r=0;r<s;++r){q=p.ag(0,r)
if(b.$1(q))return q
if(s!==p.gq(p))throw A.k(A.aH(p))}throw A.k(A.ak())},
Y(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.i(p.ag(0,0))
if(o!==p.gq(p))throw A.k(A.aH(p))
for(r=s,q=1;q<o;++q){r=r+b+A.i(p.ag(0,q))
if(o!==p.gq(p))throw A.k(A.aH(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.i(p.ag(0,q))
if(o!==p.gq(p))throw A.k(A.aH(p))}return r.charCodeAt(0)==0?r:r}},
cg(a){return this.Y(0,"")},
cN(a,b,c){var s=A.o(this)
return new A.ah(this,s.a3(c).i("1(a4.E)").a(b),s.i("@<a4.E>").a3(c).i("ah<1,2>"))},
cS(a,b){var s,r,q,p=this
A.o(p).i("a4.E(a4.E,a4.E)").a(b)
s=p.gq(p)
if(s===0)throw A.k(A.ak())
r=p.ag(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.ag(0,q))
if(s!==p.gq(p))throw A.k(A.aH(p))}return r},
a5(a,b,c,d){var s,r,q,p=this
d.a(b)
A.o(p).a3(d).i("1(1,a4.E)").a(c)
s=p.gq(p)
for(r=b,q=0;q<s;++q){r=c.$2(r,p.ag(0,q))
if(s!==p.gq(p))throw A.k(A.aH(p))}return r},
b9(a,b){return A.by(this,b,null,A.o(this).i("a4.E"))},
bg(a,b){return A.by(this,0,A.cO(b,"count",t.S),A.o(this).i("a4.E"))}}
A.fu.prototype={
iw(a,b,c,d){var s,r=this.b
A.ba(r,"start")
s=this.c
if(s!=null){A.ba(s,"end")
if(r>s)throw A.k(A.aL(r,0,s,"start",null))}},
gjv(){var s=J.aD(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkG(){var s=J.aD(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aD(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ag(a,b){var s=this,r=s.gkG()+b
if(b<0||r>=s.gjv())throw A.k(A.nV(b,s.gq(0),s,"index"))
return J.jS(s.a,r)},
b9(a,b){var s,r,q=this
A.ba(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ig(q.$ti.i("ig<1>"))
return A.by(q.a,s,r,q.$ti.c)},
bg(a,b){var s,r,q,p=this
A.ba(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.by(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.by(p.a,r,q,p.$ti.c)}},
cU(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.an(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.DT(0,n):J.DS(0,n)}r=A.ix(s,m.ag(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.j(r,q,m.ag(n,o+q))
if(m.gq(n)<l)throw A.k(A.aH(p))}return r}}
A.ac.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.an(q),o=p.gq(q)
if(r.b!==o)throw A.k(A.aH(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ag(q,s);++r.c
return!0},
$ial:1}
A.c3.prototype={
gA(a){return new A.iz(J.Q(this.a),this.b,A.o(this).i("iz<1,2>"))},
gq(a){return J.aD(this.a)},
ga4(a){return J.jT(this.a)},
ga0(a){return this.b.$1(J.BN(this.a))},
gaq(a){return this.b.$1(J.BO(this.a))},
ag(a,b){return this.b.$1(J.jS(this.a,b))}}
A.id.prototype={$iT:1}
A.iz.prototype={
n(){var s=this,r=s.b
if(r.n()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ial:1}
A.ah.prototype={
gq(a){return J.aD(this.a)},
ag(a,b){return this.b.$1(J.jS(this.a,b))}}
A.n.prototype={
gA(a){return new A.N(J.Q(this.a),this.b,this.$ti.i("N<1>"))}}
A.N.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$ial:1}
A.f8.prototype={
gA(a){return new A.f9(J.Q(this.a),this.b,B.bo,this.$ti.i("f9<1,2>"))}}
A.f9.prototype={
gt(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
n(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.n();){q.d=null
if(s.n()){q.c=null
p=J.Q(r.$1(s.gt()))
q.c=p}else return!1}q.d=q.c.gt()
return!0},
$ial:1}
A.fw.prototype={
gA(a){var s=this.a
return new A.j1(s.gA(s),this.b,A.o(this).i("j1<1>"))}}
A.ie.prototype={
gq(a){var s=this.a,r=s.gq(s)
s=this.b
if(B.d.b7(r,s))return s
return r},
$iT:1}
A.j1.prototype={
n(){if(--this.b>=0)return this.a.n()
this.b=-1
return!1},
gt(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gt()},
$ial:1}
A.dU.prototype={
b9(a,b){A.ei(b,"count",t.S)
A.ba(b,"count")
return new A.dU(this.a,this.b+b,A.o(this).i("dU<1>"))},
gA(a){var s=this.a
return new A.iY(s.gA(s),this.b,A.o(this).i("iY<1>"))}}
A.fZ.prototype={
gq(a){var s=this.a,r=s.gq(s)-this.b
if(r>=0)return r
return 0},
b9(a,b){A.ei(b,"count",t.S)
A.ba(b,"count")
return new A.fZ(this.a,this.b+b,this.$ti)},
$iT:1}
A.iY.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gt(){return this.a.gt()},
$ial:1}
A.ig.prototype={
gA(a){return B.bo},
ga4(a){return!0},
gq(a){return 0},
ga0(a){throw A.k(A.ak())},
gaq(a){throw A.k(A.ak())},
ag(a,b){throw A.k(A.aL(b,0,0,"index",null))},
u(a,b){return!1},
b9(a,b){A.ba(b,"count")
return this},
bg(a,b){A.ba(b,"count")
return this}}
A.ih.prototype={
n(){return!1},
gt(){throw A.k(A.ak())},
$ial:1}
A.j7.prototype={
gA(a){return new A.j8(J.Q(this.a),this.$ti.i("j8<1>"))}}
A.j8.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gt()))return!0
return!1},
gt(){return this.$ti.c.a(this.a.gt())},
$ial:1}
A.pg.prototype={
gew(){var s,r,q
for(s=this.a,s=A.e8(s,s.r,A.o(s).c),r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null)return q}return null},
ga4(a){return this.gew()==null},
gap(a){return this.gew()!=null},
ga0(a){var s=this.gew()
return s==null?A.f(A.ak()):s},
gA(a){var s=this.a
return new A.fl(A.e8(s,s.r,A.o(s).c),this.$ti.i("fl<1>"))}}
A.fl.prototype={
n(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.c;s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gt(){var s=this.b
return s==null?A.f(A.ak()):s},
$ial:1}
A.dC.prototype={
gq(a){return J.aD(this.a)},
ga4(a){return J.jT(this.a)},
gap(a){return J.Do(this.a)},
ga0(a){return new A.p(this.b,J.BN(this.a))},
ag(a,b){return new A.p(b+this.b,J.jS(this.a,b))},
u(a,b){return!1},
bg(a,b){A.ei(b,"count",t.S)
A.ba(b,"count")
return new A.dC(J.mS(this.a,b),this.b,A.o(this).i("dC<1>"))},
b9(a,b){A.ei(b,"count",t.S)
A.ba(b,"count")
return new A.dC(J.hT(this.a,b),b+this.b,A.o(this).i("dC<1>"))},
gA(a){return new A.as(J.Q(this.a),this.b,A.o(this).i("as<1>"))}}
A.f7.prototype={
gaq(a){var s,r=this.a,q=J.an(r),p=q.gq(r)
if(p<=0)throw A.k(A.ak())
s=q.gaq(r)
if(p!==q.gq(r))throw A.k(A.aH(this))
return new A.p(p-1+this.b,s)},
u(a,b){return!1},
bg(a,b){A.ei(b,"count",t.S)
A.ba(b,"count")
return new A.f7(J.mS(this.a,b),this.b,this.$ti)},
b9(a,b){A.ei(b,"count",t.S)
A.ba(b,"count")
return new A.f7(J.hT(this.a,b),this.b+b,this.$ti)},
$iT:1}
A.as.prototype={
n(){if(++this.c>=0&&this.a.n())return!0
this.c=-2
return!1},
gt(){var s=this.c
return s>=0?new A.p(this.b+s,this.a.gt()):A.f(A.ak())},
$ial:1}
A.aU.prototype={
sq(a,b){throw A.k(A.aA("Cannot change the length of a fixed-length list"))},
m(a,b){A.aT(a).i("aU.E").a(b)
throw A.k(A.aA("Cannot add to a fixed-length list"))}}
A.cs.prototype={
j(a,b,c){A.o(this).i("cs.E").a(c)
throw A.k(A.aA("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.k(A.aA("Cannot change the length of an unmodifiable list"))},
m(a,b){A.o(this).i("cs.E").a(b)
throw A.k(A.aA("Cannot add to an unmodifiable list"))},
D(a,b){A.o(this).i("d(cs.E,cs.E)?").a(b)
throw A.k(A.aA("Cannot modify an unmodifiable list"))},
aJ(a,b,c,d,e){A.o(this).i("h<cs.E>").a(d)
throw A.k(A.aA("Cannot modify an unmodifiable list"))},
b8(a,b,c,d){return this.aJ(0,b,c,d,0)},
aO(a,b,c,d){A.o(this).i("cs.E?").a(d)
throw A.k(A.aA("Cannot modify an unmodifiable list"))}}
A.hr.prototype={}
A.aP.prototype={
gq(a){return J.aD(this.a)},
ag(a,b){var s=this.a,r=J.an(s)
return r.ag(s,r.gq(s)-1-b)}}
A.jC.prototype={}
A.p.prototype={$r:"+(1,2)",$s:1}
A.ea.prototype={$r:"+days,months(1,2)",$s:2}
A.jj.prototype={$r:"+end,loans(1,2)",$s:3}
A.hy.prototype={$r:"+month,year(1,2)",$s:4}
A.bA.prototype={$r:"+(1,2,3)",$s:5}
A.jk.prototype={$r:"+accountId,from,to(1,2,3)",$s:6}
A.eN.prototype={$r:"+(1,2,3,4)",$s:8}
A.jl.prototype={$r:"+complete,month,spent,year(1,2,3,4)",$s:9}
A.jm.prototype={$r:"+(1,2,3,4,5)",$s:10}
A.jn.prototype={$r:"+date,eventId,hash,n,removed(1,2,3,4,5)",$s:11}
A.jo.prototype={$r:"+instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type(1,2,3,4,5,6,7,8)",$s:12}
A.i2.prototype={}
A.fQ.prototype={
G(a,b,c){var s=A.o(this)
return A.E2(this,s.c,s.y[1],b,c)},
ga4(a){return this.gq(this)===0},
gap(a){return this.gq(this)!==0},
k(a){return A.Ca(this)},
j(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.DB()},
Z(a,b){A.DB()},
gbs(){return new A.de(this.lX(),A.o(this).i("de<ap<1,2>>"))},
lX(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gbs(a,b,c){if(b===1){p.push(c)
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
A.b_.prototype={
gq(a){return this.b.length},
gfL(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
E(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.E(b))return null
return this.b[this.a[b]]},
a2(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfL()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gah(){return new A.fA(this.gfL(),this.$ti.i("fA<1>"))},
gT(){return new A.fA(this.b,this.$ti.i("fA<2>"))}}
A.fA.prototype={
gq(a){return this.a.length},
ga4(a){return 0===this.a.length},
gap(a){return 0!==this.a.length},
gA(a){var s=this.a
return new A.e7(s,s.length,this.$ti.i("e7<1>"))}}
A.e7.prototype={
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
if(r==null){r=new A.ff(s.$ti.i("ff<1,2>"))
A.FL(s.a,r)
s.$map=r}return r},
E(a){return this.bS().E(a)},
h(a,b){return this.bS().h(0,b)},
a2(a,b){this.$ti.i("~(1,2)").a(b)
this.bS().a2(0,b)},
gah(){var s=this.bS()
return new A.at(s,A.o(s).i("at<1>"))},
gT(){var s=this.bS()
return new A.M(s,A.o(s).i("M<2>"))},
gq(a){return this.bS().a}}
A.fR.prototype={
m(a,b){A.o(this).c.a(b)
A.DC()},
a1(a,b){A.o(this).i("h<1>").a(b)
A.DC()}}
A.cR.prototype={
gq(a){return this.b},
ga4(a){return this.b===0},
gap(a){return this.b!==0},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.e7(s,s.length,r.$ti.i("e7<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cZ.prototype={
gq(a){return this.a.length},
ga4(a){return this.a.length===0},
gap(a){return this.a.length!==0},
gA(a){var s=this.a
return new A.e7(s,s.length,this.$ti.i("e7<1>"))},
bS(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.ff(o.$ti.i("ff<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
n.j(0,p,p)}o.$map=n}return n},
u(a,b){return this.bS().E(b)}}
A.kK.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.fb&&this.a.J(0,b.a)&&A.CN(this)===A.CN(b)},
gP(a){return A.bx(this.a,A.CN(this),B.t,B.t)},
k(a){var s=B.a.Y([A.dg(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.fb.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.MN(A.xP(this.a),this.$ti)}}
A.iU.prototype={}
A.uk.prototype={
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
A.iL.prototype={
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
A.ii.prototype={}
A.jq.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ieG:1}
A.bL.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Gx(r==null?"unknown":r)+"'"},
$idx:1,
gna(){return this},
$C:"$1",
$R:1,
$D:null}
A.kb.prototype={$C:"$0",$R:0}
A.kc.prototype={$C:"$2",$R:2}
A.lF.prototype={}
A.lC.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Gx(s)+"'"}}
A.fM.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fM))return!1
return this.$_target===b.$_target&&this.a===b.a},
gP(a){return(A.CZ(this.a)^A.c6(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lh(this.a)+"'")}}
A.lr.prototype={
k(a){return"RuntimeError: "+this.a}}
A.cA.prototype={
gq(a){return this.a},
ga4(a){return this.a===0},
gap(a){return this.a!==0},
gah(){return new A.at(this,A.o(this).i("at<1>"))},
gT(){return new A.M(this,A.o(this).i("M<2>"))},
gbs(){return new A.ab(this,A.o(this).i("ab<1,2>"))},
E(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mk(a)},
mk(a){var s=this.d
if(s==null)return!1
return this.dg(this.fH(s,a),a)>=0},
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
return q}else return this.ml(b)},
ml(a){var s,r,q=this.d
if(q==null)return null
s=this.fH(q,a)
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fq(s==null?q.b=q.eA():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fq(r==null?q.c=q.eA():r,b,c)}else q.mn(b,c)},
mn(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.eA()
r=o.e3(a)
q=s[r]
if(q==null)s[r]=[o.eB(a,b)]
else{p=o.dg(q,a)
if(p>=0)q[p].b=b
else q.push(o.eB(a,b))}},
aI(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.E(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
Z(a,b){var s=this
if(typeof b=="string")return s.fR(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fR(s.c,b)
else return s.mm(b)},
mm(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.e3(a)
r=n[s]
q=o.dg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.h_(p)
if(r.length===0)delete n[s]
return p.b},
ao(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ez()}},
a2(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.k(A.aH(q))
s=s.c}},
fq(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.eB(b,c)
else s.b=c},
fR(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.h_(s)
delete a[b]
return s.b},
ez(){this.r=this.r+1&1073741823},
eB(a,b){var s=this,r=A.o(s),q=new A.p5(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.ez()
return q},
h_(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ez()},
e3(a){return J.c_(a)&1073741823},
fH(a,b){return a[this.e3(b)]},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
k(a){return A.Ca(this)},
eA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iC6:1}
A.o4.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.j(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.p5.prototype={}
A.at.prototype={
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gA(a){var s=this.a
return new A.cB(s,s.r,s.e,this.$ti.i("cB<1>"))},
u(a,b){return this.a.E(b)}}
A.cB.prototype={
gt(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aH(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ial:1}
A.M.prototype={
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gA(a){var s=this.a
return new A.a1(s,s.r,s.e,this.$ti.i("a1<1>"))}}
A.a1.prototype={
gt(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aH(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ial:1}
A.ab.prototype={
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gA(a){var s=this.a
return new A.iv(s,s.r,s.e,this.$ti.i("iv<1,2>"))}}
A.iv.prototype={
gt(){var s=this.d
s.toString
return s},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.aH(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.ap(s.a,s.b,r.$ti.i("ap<1,2>"))
r.c=s.c
return!0}},
$ial:1}
A.ff.prototype={
e3(a){return A.Md(a)&1073741823},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1}}
A.za.prototype={
$1(a){return this.a(a)},
$S:68}
A.zb.prototype={
$2(a,b){return this.a(a,b)},
$S:249}
A.zc.prototype={
$1(a){return this.a(A.b(a))},
$S:80}
A.bj.prototype={
k(a){return this.fZ(!1)},
fZ(a){var s,r,q,p,o,n=this.jy(),m=this.dI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.E9(o):l+A.i(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jy(){var s,r=this.$s
while($.v3.length<=r)B.a.m($.v3,null)
s=$.v3[r]
if(s==null){s=this.j8()
B.a.j($.v3,r,s)}return s},
j8(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.DR(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.j(j,q,r[s])}}return A.aC(j,k)}}
A.e9.prototype={
dI(){return[this.a,this.b]},
J(a,b){if(b==null)return!1
return b instanceof A.e9&&this.$s===b.$s&&J.Y(this.a,b.a)&&J.Y(this.b,b.b)},
gP(a){return A.bx(this.$s,this.a,this.b,B.t)}}
A.fD.prototype={
dI(){return[this.a,this.b,this.c]},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.fD&&s.$s===b.$s&&J.Y(s.a,b.a)&&J.Y(s.b,b.b)&&J.Y(s.c,b.c)},
gP(a){var s=this
return A.bx(s.$s,s.a,s.b,s.c)}}
A.dd.prototype={
dI(){return this.a},
J(a,b){if(b==null)return!1
return b instanceof A.dd&&this.$s===b.$s&&A.JV(this.a,b.a)},
gP(a){return A.bx(this.$s,A.E4(this.a),B.t,B.t)}}
A.er.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfN(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.C2(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gk0(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.C2(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
j9(){var s,r=this.a
if(!B.b.u(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
aj(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hx(s)},
mb(a){A.b(a)
return this.b.test(a)},
d7(a,b,c){var s=b.length
if(c>s)throw A.k(A.aL(c,0,s,null,null))
return new A.lO(this,b,c)},
aM(a,b){return this.d7(0,b,0)},
fG(a,b){var s,r=this.gfN()
if(r==null)r=A.df(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hx(s)},
jw(a,b){var s,r=this.gk0()
if(r==null)r=A.df(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hx(s)},
hp(a,b,c){if(c<0||c>b.length)throw A.k(A.aL(c,0,b.length,null,null))
return this.jw(b,c)},
$ifm:1,
$itK:1}
A.hx.prototype={
gdz(){return this.b.index},
gcd(){var s=this.b
return s.index+s[0].length},
du(a){var s=this.b
if(!(a<s.length))return A.a(s,a)
return s[a]},
h(a,b){var s=this.b
if(!(b<s.length))return A.a(s,b)
return s[b]},
$icD:1,
$iiR:1}
A.lO.prototype={
gA(a){return new A.fy(this.a,this.b,this.c)}}
A.fy.prototype={
gt(){var s=this.d
return s==null?t.ez.a(s):s},
n(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fG(l,s)
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
A.hp.prototype={
gcd(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.k(A.tB(b,null))
return this.c},
du(a){if(a!==0)A.f(A.tB(a,null))
return this.c},
$icD:1,
gdz(){return this.a}}
A.mp.prototype={
gA(a){return new A.mq(this.a,this.b,this.c)},
ga0(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hp(r,s)
throw A.k(A.ak())}}
A.mq.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hp(s,o)
q.c=r===q.c?r+1:r
return!0},
gt(){var s=this.d
s.toString
return s},
$ial:1}
A.lW.prototype={
cz(){var s=this.b
if(s===this)throw A.k(new A.fj("Local '"+this.a+"' has not been initialized."))
return s},
bh(){var s=this.b
if(s===this)throw A.k(A.DZ(this.a))
return s}}
A.ev.prototype={
gaz(a){return B.mQ},
cD(a,b,c){A.jD(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
h4(a){return this.cD(a,0,null)},
eQ(a,b,c){A.jD(a,b,c)
if(c==null)c=B.d.C(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
dP(a,b,c){A.jD(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
h3(a){return this.dP(a,0,null)},
$iaz:1,
$iev:1,
$ii0:1}
A.hc.prototype={$ihc:1}
A.iD.prototype={
gab(a){if(((a.$flags|0)&2)!==0)return new A.mt(a.buffer)
else return a.buffer},
jP(a,b,c,d){var s=A.aL(b,0,c,d,null)
throw A.k(s)},
fw(a,b,c,d){if(b>>>0!==b||b>c)this.jP(a,b,c,d)}}
A.mt.prototype={
cD(a,b,c){var s=A.iH(this.a,b,c)
s.$flags=3
return s},
h4(a){return this.cD(0,0,null)},
eQ(a,b,c){var s=A.J_(this.a,b,c)
s.$flags=3
return s},
dP(a,b,c){var s=A.IV(this.a,b,c)
s.$flags=3
return s},
h3(a){return this.dP(0,0,null)},
$ii0:1}
A.iB.prototype={
gaz(a){return B.mR},
$iaz:1,
$iDx:1}
A.bw.prototype={
gq(a){return a.length},
fV(a,b,c,d,e){var s,r,q=a.length
this.fw(a,b,q,"start")
this.fw(a,c,q,"end")
if(b>c)throw A.k(A.aL(b,0,c,null,null))
s=c-b
if(e<0)throw A.k(A.b1(e,null))
r=d.length
if(r-e<s)throw A.k(A.aq("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibv:1,
$ic2:1}
A.ew.prototype={
h(a,b){A.ec(b,a,a.length)
return a[b]},
j(a,b,c){A.Cx(c)
a.$flags&2&&A.C(a)
A.ec(b,a,a.length)
a[b]=c},
aJ(a,b,c,d,e){t.oJ.a(d)
a.$flags&2&&A.C(a,5)
if(t.Eg.b(d)){this.fV(a,b,c,d,e)
return}this.fl(a,b,c,d,e)},
b8(a,b,c,d){return this.aJ(a,b,c,d,0)},
$iT:1,
$ih:1,
$iA:1}
A.c4.prototype={
j(a,b,c){A.O(c)
a.$flags&2&&A.C(a)
A.ec(b,a,a.length)
a[b]=c},
aJ(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.C(a,5)
if(t.Ag.b(d)){this.fV(a,b,c,d,e)
return}this.fl(a,b,c,d,e)},
b8(a,b,c,d){return this.aJ(a,b,c,d,0)},
$iT:1,
$ih:1,
$iA:1}
A.l0.prototype={
gaz(a){return B.mS},
aK(a,b,c){return new Float32Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1}
A.l1.prototype={
gaz(a){return B.mT},
aK(a,b,c){return new Float64Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1}
A.l2.prototype={
gaz(a){return B.mU},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Int16Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1}
A.iC.prototype={
gaz(a){return B.mV},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Int32Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1,
$ikL:1}
A.l3.prototype={
gaz(a){return B.mW},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Int8Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1}
A.iE.prototype={
gaz(a){return B.n0},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint16Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1,
$iCj:1}
A.iF.prototype={
gaz(a){return B.n1},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint32Array(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1,
$ium:1}
A.iG.prototype={
gaz(a){return B.n2},
gq(a){return a.length},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.eQ(b,c,a.length)))},
$iaz:1}
A.fk.prototype={
gaz(a){return B.ei},
gq(a){return a.length},
h(a,b){A.ec(b,a,a.length)
return a[b]},
aK(a,b,c){return new Uint8Array(a.subarray(b,A.eQ(b,c,a.length)))},
dB(a,b){return this.aK(a,b,null)},
$iaz:1,
$ifk:1,
$ie4:1}
A.jf.prototype={}
A.jg.prototype={}
A.jh.prototype={}
A.ji.prototype={}
A.cG.prototype={
i(a){return A.jv(v.typeUniverse,this,a)},
a3(a){return A.EQ(v.typeUniverse,this,a)}}
A.ma.prototype={}
A.ms.prototype={
k(a){return A.bS(this.a,null)}}
A.m9.prototype={
k(a){return this.a}}
A.hA.prototype={$ie2:1}
A.uu.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:69}
A.ut.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:263}
A.uv.prototype={
$0(){this.a.$0()},
$S:27}
A.uw.prototype={
$0(){this.a.$0()},
$S:27}
A.jr.prototype={
iy(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.fH(new A.v7(this,b),0),a)
else throw A.k(A.aA("`setTimeout()` not found."))},
iz(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.fH(new A.v6(this,a,Date.now(),b),0),a)
else throw A.k(A.aA("Periodic timer."))},
h7(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.k(A.aA("Canceling a timer."))},
$ilG:1}
A.v7.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.v6.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.d.aA(s,o)}q.c=p
r.d.$1(q)},
$S:27}
A.lP.prototype={
cG(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bn(a)
else{s=r.a
if(q.i("b9<1>").b(a))s.fv(a)
else s.eo(a)}},
eS(a,b){var s=this.a
if(this.b)s.d0(new A.bV(a,b))
else s.ej(new A.bV(a,b))}}
A.vj.prototype={
$1(a){return this.a.$2(0,a)},
$S:33}
A.vk.prototype={
$2(a,b){this.a.$2(1,new A.ii(a,t.l.a(b)))},
$S:244}
A.vQ.prototype={
$2(a,b){this.a(A.O(a),b)},
$S:238}
A.eb.prototype={
gt(){var s=this.b
return s==null?this.$ti.c.a(s):s},
km(a,b){var s,r,q
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
o.d=null}q=o.km(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.EK
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
o.a=A.EK
throw n
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=1
continue}throw A.k(A.aq("sync*"))}return!1},
nc(a){var s,r,q=this
if(a instanceof A.de){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.Q(a)
return 2}},
$ial:1}
A.de.prototype={
gA(a){return new A.eb(this.a(),this.$ti.i("eb<1>"))}}
A.bV.prototype={
k(a){return A.i(this.a)},
$iaF:1,
gcq(){return this.b}}
A.nQ.prototype={
$0(){this.c.a(null)
this.b.fC(null)},
$S:0}
A.lX.prototype={
eS(a,b){var s=this.a
if((s.a&30)!==0)throw A.k(A.aq("Future already completed"))
s.ej(A.KP(a,b))},
dS(a){return this.eS(a,null)}}
A.cM.prototype={
cG(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.k(A.aq("Future already completed"))
s.bn(r.i("1/").a(a))},
lh(){return this.cG(null)}}
A.e6.prototype={
mu(a){if((this.c&15)!==6)return!0
return this.b.b.fa(t.bl.a(this.d),a.a,t.y,t.K)},
ma(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mT(q,m,a.b,o,n,t.l)
else p=l.fa(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.av(s))){if((r.c&1)!==0)throw A.k(A.b1("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.k(A.b1("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.am.prototype={
e9(a,b,c){var s,r,q,p=this.$ti
p.a3(c).i("1/(2)").a(a)
s=$.aj
if(s===B.W){if(b!=null&&!t.nW.b(b)&&!t.h_.b(b))throw A.k(A.x(b,"onError",u.w))}else{c.i("@<0/>").a3(p.c).i("1(2)").a(a)
if(b!=null)b=A.Lj(b,s)}r=new A.am(s,c.i("am<0>"))
q=b==null?1:3
this.dD(new A.e6(r,q,a,b,p.i("@<1>").a3(c).i("e6<1,2>")))
return r},
mW(a,b){return this.e9(a,null,b)},
fY(a,b,c){var s,r=this.$ti
r.a3(c).i("1/(2)").a(a)
s=new A.am($.aj,c.i("am<0>"))
this.dD(new A.e6(s,19,a,b,r.i("@<1>").a3(c).i("e6<1,2>")))
return s},
kA(a){this.a=this.a&1|16
this.c=a},
dG(a){this.a=a.a&30|this.a&1
this.c=a.c},
dD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.f7.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dD(a)
return}r.dG(s)}A.my(null,null,r.b,t.O.a(new A.uK(r,a)))}},
fP(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.f7.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.fP(a)
return}m.dG(n)}l.a=m.dK(a)
A.my(null,null,m.b,t.O.a(new A.uP(l,m)))}},
d5(){var s=t.f7.a(this.c)
this.c=null
return this.dK(s)},
dK(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fC(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("b9<1>").b(a))A.uN(a,r,!0)
else{s=r.d5()
q.c.a(a)
r.a=8
r.c=a
A.fz(r,s)}},
eo(a){var s,r=this
r.$ti.c.a(a)
s=r.d5()
r.a=8
r.c=a
A.fz(r,s)},
j7(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.d5()
q.dG(a)
A.fz(q,r)},
d0(a){var s=this.d5()
this.kA(a)
A.fz(this,s)},
bn(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("b9<1>").b(a)){this.fv(a)
return}this.iO(a)},
iO(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.my(null,null,s.b,t.O.a(new A.uM(s,a)))},
fv(a){A.uN(this.$ti.i("b9<1>").a(a),this,!1)
return},
ej(a){this.a^=2
A.my(null,null,this.b,t.O.a(new A.uL(this,a)))},
mX(a,b){var s,r,q=this,p={},o=q.$ti
o.i("1/()?").a(b)
if((q.a&24)!==0){p=new A.am($.aj,o)
p.bn(q)
return p}s=$.aj
r=new A.am(s,o)
p.a=null
p.a=A.Ep(a,new A.uV(q,r,s,o.i("1/()").a(b)))
q.e9(new A.uW(p,q,r),new A.uX(p,r),t.aU)
return r},
$ib9:1}
A.uK.prototype={
$0(){A.fz(this.a,this.b)},
$S:0}
A.uP.prototype={
$0(){A.fz(this.b,this.a.a)},
$S:0}
A.uO.prototype={
$0(){A.uN(this.a.a,this.b,!0)},
$S:0}
A.uM.prototype={
$0(){this.a.eo(this.b)},
$S:0}
A.uL.prototype={
$0(){this.a.d0(this.b)},
$S:0}
A.uS.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.hF(t.pF.a(q.d),t.z)}catch(p){s=A.av(p)
r=A.eV(p)
if(k.c&&t.Fq.a(k.b.a.c).a===s){q=k.a
q.c=t.Fq.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.n1(q)
n=k.a
n.c=new A.bV(q,o)
q=n}q.b=!0
return}if(j instanceof A.am&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.Fq.a(j.c)
q.b=!0}return}if(j instanceof A.am){m=k.b.a
l=new A.am(m.b,m.$ti)
j.e9(new A.uT(l,m),new A.uU(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uT.prototype={
$1(a){this.a.j7(this.b)},
$S:69}
A.uU.prototype={
$2(a,b){A.df(a)
t.l.a(b)
this.a.d0(new A.bV(a,b))},
$S:61}
A.uR.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fa(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.av(l)
r=A.eV(l)
q=s
p=r
if(p==null)p=A.n1(q)
o=this.a
o.c=new A.bV(q,p)
o.b=!0}},
$S:0}
A.uQ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.Fq.a(l.a.a.c)
p=l.b
if(p.a.mu(s)&&p.a.e!=null){p.c=p.a.ma(s)
p.b=!1}}catch(o){r=A.av(o)
q=A.eV(o)
p=t.Fq.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.n1(p)
m=l.b
m.c=new A.bV(p,n)
p=m}p.b=!0}},
$S:0}
A.uV.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.fC(n.c.hF(n.d,n.a.$ti.i("1/")))}catch(q){s=A.av(q)
r=A.eV(q)
p=s
o=r
if(o==null)o=A.n1(p)
n.b.d0(new A.bV(p,o))}},
$S:0}
A.uW.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.h7()
this.c.eo(a)}},
$S(){return this.b.$ti.i("bh(1)")}}
A.uX.prototype={
$2(a,b){var s
A.df(a)
t.l.a(b)
s=this.a.a
if(s.b!=null){s.h7()
this.b.d0(new A.bV(a,b))}},
$S:61}
A.lQ.prototype={}
A.mo.prototype={}
A.jB.prototype={$iEv:1}
A.mi.prototype={
mU(a){var s,r,q
t.O.a(a)
try{if(B.W===$.aj){a.$0()
return}A.Fk(null,null,this,a,t.H)}catch(q){s=A.av(q)
r=A.eV(q)
A.vG(A.df(s),t.l.a(r))}},
mV(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.W===$.aj){a.$1(b)
return}A.Fl(null,null,this,a,b,t.H,c)}catch(q){s=A.av(q)
r=A.eV(q)
A.vG(A.df(s),t.l.a(r))}},
h5(a){return new A.v4(this,t.O.a(a))},
l6(a,b){return new A.v5(this,b.i("~(0)").a(a),b)},
hF(a,b){b.i("0()").a(a)
if($.aj===B.W)return a.$0()
return A.Fk(null,null,this,a,b)},
fa(a,b,c,d){c.i("@<0>").a3(d).i("1(2)").a(a)
d.a(b)
if($.aj===B.W)return a.$1(b)
return A.Fl(null,null,this,a,b,c,d)},
mT(a,b,c,d,e,f){d.i("@<0>").a3(e).a3(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aj===B.W)return a.$2(b,c)
return A.Lk(null,null,this,a,b,c,d,e,f)},
hB(a,b,c,d){return b.i("@<0>").a3(c).a3(d).i("1(2,3)").a(a)}}
A.v4.prototype={
$0(){return this.a.mU(this.b)},
$S:0}
A.v5.prototype={
$1(a){var s=this.c
return this.a.mV(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.vH.prototype={
$0(){A.Iz(this.a,this.b)},
$S:0}
A.dc.prototype={
gA(a){var s=this,r=new A.fB(s,s.r,A.o(s).i("fB<1>"))
r.c=s.e
return r},
gq(a){return this.a},
ga4(a){return this.a===0},
gap(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.ja(b)},
ja(a){var s=this.d
if(s==null)return!1
return this.ev(s[this.ep(a)],a)>=0},
ga0(a){var s=this.e
if(s==null)throw A.k(A.aq("No elements"))
return A.o(this).c.a(s.a)},
gaq(a){var s=this.f
if(s==null)throw A.k(A.aq("No elements"))
return A.o(this).c.a(s.a)},
m(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fz(s==null?q.b=A.Cq():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fz(r==null?q.c=A.Cq():r,b)}else return q.iJ(b)},
iJ(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.Cq()
r=p.ep(a)
q=s[r]
if(q==null)s[r]=[p.en(a)]
else{if(p.ev(q,a)>=0)return!1
q.push(p.en(a))}return!0},
Z(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fA(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fA(s.c,b)
else return s.ki(b)},
ki(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ep(a)
r=n[s]
q=o.ev(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fB(p)
return!0},
ao(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.em()}},
fz(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.en(b)
return!0},
fA(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fB(s)
delete a[b]
return!0},
em(){this.r=this.r+1&1073741823},
en(a){var s,r=this,q=new A.mf(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.em()
return q},
fB(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.em()},
ep(a){return J.c_(a)&1073741823},
ev(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
$iE1:1}
A.mf.prototype={}
A.fB.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.k(A.aH(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ial:1}
A.p6.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:204}
A.R.prototype={
gA(a){return new A.ac(a,this.gq(a),A.aT(a).i("ac<R.E>"))},
ag(a,b){return this.h(a,b)},
ga4(a){return this.gq(a)===0},
gap(a){return!this.ga4(a)},
ga0(a){if(this.gq(a)===0)throw A.k(A.ak())
return this.h(a,0)},
gaq(a){if(this.gq(a)===0)throw A.k(A.ak())
return this.h(a,this.gq(a)-1)},
u(a,b){var s,r=this.gq(a)
for(s=0;s<r;++s){if(J.Y(this.h(a,s),b))return!0
if(r!==this.gq(a))throw A.k(A.aH(a))}return!1},
b5(a,b){var s,r
A.aT(a).i("j(R.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.k(A.aH(a))}return!0},
M(a,b){var s,r
A.aT(a).i("j(R.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.k(A.aH(a))}return!1},
Y(a,b){var s
if(this.gq(a)===0)return""
s=A.Cg("",a,b)
return s.charCodeAt(0)==0?s:s},
bN(a,b){var s=A.aT(a)
return new A.n(a,s.i("j(R.E)").a(b),s.i("n<R.E>"))},
cN(a,b,c){var s=A.aT(a)
return new A.ah(a,s.a3(c).i("1(R.E)").a(b),s.i("@<R.E>").a3(c).i("ah<1,2>"))},
a5(a,b,c,d){var s,r,q
d.a(b)
A.aT(a).a3(d).i("1(1,R.E)").a(c)
s=this.gq(a)
for(r=b,q=0;q<s;++q){r=c.$2(r,this.h(a,q))
if(s!==this.gq(a))throw A.k(A.aH(a))}return r},
b9(a,b){return A.by(a,b,null,A.aT(a).i("R.E"))},
bg(a,b){return A.by(a,0,A.cO(b,"count",t.S),A.aT(a).i("R.E"))},
ea(a){var s,r=A.C7(A.aT(a).i("R.E"))
for(s=0;s<this.gq(a);++s)r.m(0,this.h(a,s))
return r},
m(a,b){var s
A.aT(a).i("R.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.j(a,s,b)},
dR(a,b){return new A.dp(a,A.aT(a).i("@<R.E>").a3(b).i("dp<1,2>"))},
D(a,b){var s,r=A.aT(a)
r.i("d(R.E,R.E)?").a(b)
s=b==null?A.M7():b
A.lx(a,0,this.gq(a)-1,s,r.i("R.E"))},
aK(a,b,c){var s,r=this.gq(a)
A.bQ(b,c,r)
s=A.B(this.dt(a,b,c),A.aT(a).i("R.E"))
return s},
dt(a,b,c){A.bQ(b,c,this.gq(a))
return A.by(a,b,c,A.aT(a).i("R.E"))},
aO(a,b,c,d){var s
A.aT(a).i("R.E?").a(d)
A.bQ(b,c,this.gq(a))
for(s=b;s<c;++s)this.j(a,s,d)},
aJ(a,b,c,d,e){var s,r,q,p,o
A.aT(a).i("h<R.E>").a(d)
A.bQ(b,c,this.gq(a))
s=c-b
if(s===0)return
A.ba(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.hT(d,e).cU(0,!1)
r=0}p=J.an(q)
if(r+s>p.gq(q))throw A.k(A.DP())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
b8(a,b,c,d){return this.aJ(a,b,c,d,0)},
ce(a,b,c){var s
if(c<0)c=0
for(s=c;s<this.gq(a);++s)if(J.Y(this.h(a,s),b))return s
return-1},
bH(a,b){return this.ce(a,b,0)},
b0(a,b,c){var s,r
A.aT(a).i("h<R.E>").a(c)
if(t.j.b(c))this.b8(a,b,b+J.aD(c),c)
else for(s=J.Q(c);s.n();b=r){r=b+1
this.j(a,b,s.gt())}},
ghE(a){return new A.aP(a,A.aT(a).i("aP<R.E>"))},
k(a){return A.C1(a,"[","]")},
$iT:1,
$ih:1,
$iA:1}
A.a7.prototype={
G(a,b,c){var s=A.o(this)
return A.E2(this,s.i("a7.K"),s.i("a7.V"),b,c)},
a2(a,b){var s,r,q,p=A.o(this)
p.i("~(a7.K,a7.V)").a(b)
for(s=this.gah(),s=s.gA(s),p=p.i("a7.V");s.n();){r=s.gt()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
aI(a,b){var s,r=this,q=A.o(r)
q.i("a7.K").a(a)
q.i("a7.V()").a(b)
if(r.E(a)){s=r.h(0,a)
return s==null?q.i("a7.V").a(s):s}q=b.$0()
r.j(0,a,q)
return q},
n0(a,b,c){var s,r=this,q=A.o(r)
q.i("a7.K").a(a)
q.i("a7.V(a7.V)").a(b)
q.i("a7.V()?").a(c)
if(r.E(a)){s=r.h(0,a)
q=b.$1(s==null?q.i("a7.V").a(s):s)
r.j(0,a,q)
return q}if(c!=null){q=c.$0()
r.j(0,a,q)
return q}throw A.k(A.x(a,"key","Key not in map."))},
gbs(){return this.gah().cN(0,new A.p9(this),A.o(this).i("ap<a7.K,a7.V>"))},
mQ(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("j(a7.K,a7.V)").a(b)
s=A.c([],m.i("u<a7.K>"))
for(r=n.gah(),r=r.gA(r),m=m.i("a7.V");r.n();){q=r.gt()
p=n.h(0,q)
if(b.$2(q,p==null?m.a(p):p))B.a.m(s,q)}for(m=s.length,o=0;o<s.length;s.length===m||(0,A.l)(s),++o)n.Z(0,s[o])},
E(a){return this.gah().u(0,a)},
gq(a){var s=this.gah()
return s.gq(s)},
ga4(a){var s=this.gah()
return s.ga4(s)},
gap(a){var s=this.gah()
return s.gap(s)},
gT(){return new A.jd(this,A.o(this).i("jd<a7.K,a7.V>"))},
k(a){return A.Ca(this)},
$iae:1}
A.p9.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a7.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a7.V").a(s)
return new A.ap(a,s,r.i("ap<a7.K,a7.V>"))},
$S(){return A.o(this.a).i("ap<a7.K,a7.V>(a7.K)")}}
A.pa.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
r.a=(r.a+=s)+": "
s=A.i(b)
r.a+=s},
$S:60}
A.jd.prototype={
gq(a){var s=this.a
return s.gq(s)},
ga4(a){var s=this.a
return s.ga4(s)},
gap(a){var s=this.a
return s.gap(s)},
ga0(a){var s=this.a,r=s.gah()
r=s.h(0,r.ga0(r))
return r==null?this.$ti.y[1].a(r):r},
gaq(a){var s=this.a,r=s.gah()
r=s.h(0,r.gaq(r))
return r==null?this.$ti.y[1].a(r):r},
gA(a){var s=this.a,r=s.gah()
return new A.je(r.gA(r),s,this.$ti.i("je<1,2>"))}}
A.je.prototype={
n(){var s=this,r=s.a
if(r.n()){s.c=s.b.h(0,r.gt())
return!0}s.c=null
return!1},
gt(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ial:1}
A.jw.prototype={
j(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.k(A.aA("Cannot modify unmodifiable map"))}}
A.h9.prototype={
G(a,b,c){return this.a.G(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.o(this)
this.a.j(0,s.c.a(b),s.y[1].a(c))},
E(a){return this.a.E(a)},
a2(a,b){this.a.a2(0,A.o(this).i("~(1,2)").a(b))},
ga4(a){var s=this.a
return s.ga4(s)},
gq(a){var s=this.a
return s.gq(s)},
gah(){return this.a.gah()},
k(a){return this.a.k(0)},
gT(){return this.a.gT()},
gbs(){return this.a.gbs()},
$iae:1}
A.e5.prototype={
G(a,b,c){return new A.e5(this.a.G(0,b,c),b.i("@<0>").a3(c).i("e5<1,2>"))}}
A.cI.prototype={
ga4(a){return this.gq(this)===0},
gap(a){return this.gq(this)!==0},
a1(a,b){var s
for(s=J.Q(A.o(this).i("h<1>").a(b));s.n();)this.m(0,s.gt())},
lj(a){var s
for(s=a.gA(a);s.n();)if(!this.u(0,s.gt()))return!1
return!0},
gaQ(a){var s,r=this
if(r.gq(r)>1)throw A.k(A.DQ())
s=r.gA(r)
if(!s.n())throw A.k(A.ak())
return s.gt()},
k(a){return A.C1(this,"{","}")},
b5(a,b){var s
A.o(this).i("j(1)").a(b)
for(s=this.gA(this);s.n();)if(!b.$1(s.gt()))return!1
return!0},
bg(a,b){return A.Eo(this,b,A.o(this).c)},
b9(a,b){return A.Ek(this,b,A.o(this).c)},
ga0(a){var s=this.gA(this)
if(!s.n())throw A.k(A.ak())
return s.gt()},
gaq(a){var s,r=this.gA(this)
if(!r.n())throw A.k(A.ak())
do s=r.gt()
while(r.n())
return s},
ag(a,b){var s,r
A.ba(b,"index")
s=this.gA(this)
for(r=b;s.n();){if(r===0)return s.gt();--r}throw A.k(A.nV(b,b-r,this,"index"))},
$iT:1,
$ih:1,
$id6:1}
A.jp.prototype={}
A.mu.prototype={
m(a,b){this.$ti.c.a(b)
return A.ER()},
a1(a,b){this.$ti.i("h<1>").a(b)
return A.ER()}}
A.j4.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gA(a){var s=this.a
return A.e8(s,s.r,A.o(s).c)}}
A.hB.prototype={}
A.jx.prototype={}
A.md.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kb(b):s}},
gq(a){return this.b==null?this.c.a:this.cu().length},
ga4(a){return this.gq(0)===0},
gap(a){return this.gq(0)>0},
gah(){if(this.b==null){var s=this.c
return new A.at(s,A.o(s).i("at<1>"))}return new A.me(this)},
gT(){var s,r=this
if(r.b==null){s=r.c
return new A.M(s,A.o(s).i("M<2>"))}return A.E3(r.cu(),new A.uZ(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
A.b(b)
if(q.b==null)q.c.j(0,b,c)
else if(q.E(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.h0().j(0,b,c)},
E(a){if(this.b==null)return this.c.E(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
Z(a,b){if(this.b!=null&&!this.E(b))return null
return this.h0().Z(0,b)},
a2(a,b){var s,r,q,p,o=this
t.m2.a(b)
if(o.b==null)return o.c.a2(0,b)
s=o.cu()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.vr(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.k(A.aH(o))}},
cu(){var s=t.jS.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
h0(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.v(t.N,t.z)
r=n.cu()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)B.a.m(r,"")
else B.a.ao(r)
n.a=n.b=null
return n.c=s},
kb(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.vr(this.a[a])
return this.b[a]=s}}
A.uZ.prototype={
$1(a){return this.a.h(0,A.b(a))},
$S:80}
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
s=new J.f0(s,s.length,A.F(s).i("f0<1>"))}return s},
u(a,b){return this.a.E(b)}}
A.ve.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:56}
A.vd.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:56}
A.fL.prototype={
gaH(){return this.a}}
A.hX.prototype={
O(a){var s,r
t.L.a(a)
s=J.an(a)
if(s.ga4(a))return""
r=this.a?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
s=new A.uy(r).lT(a,0,s.gq(a),!0)
s.toString
return A.j0(s,0,null)}}
A.uy.prototype={
lT(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.d.C(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.JC(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.jZ.prototype={
O(a){var s,r,q,p
A.b(a)
s=A.bQ(0,null,a.length)
if(0===s)return new Uint8Array(0)
r=new A.ux()
q=r.lF(a,0,s)
q.toString
p=r.a
if(p<-1)A.f(A.y("Missing padding character",a,s))
if(p>0)A.f(A.y("Invalid length, must be multiple of four",a,s))
r.a=-1
return q}}
A.ux.prototype={
lF(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Ew(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Jz(a,b,c,q)
r.a=A.JB(a,b,c,s,0,r.a)
return s}}
A.be.prototype={
af(a,b,c,d){this.m(0,J.BP(t.L.a(a),b,c))
if(d)this.au()},
$ib5:1}
A.bf.prototype={}
A.b7.prototype={
cY(a){A.o(this).i("b5<b7.T>").a(a)
throw A.k(A.aA("This converter does not support chunked conversions: "+this.k(0)))}}
A.ku.prototype={}
A.ir.prototype={
k(a){var s=A.kw(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kT.prototype={
k(a){return"Cyclic error in JSON stringify"}}
A.kS.prototype={
bi(a,b){var s=A.Le(a,this.glH().a)
return s},
bd(a,b){var s=A.JM(a,this.gaH().b,null)
return s},
gaH(){return B.fC},
glH(){return B.fB}}
A.kV.prototype={}
A.kU.prototype={}
A.v0.prototype={
hS(a){var s,r,q,p,o,n,m=a.length
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
el(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.k(new A.kT(a,null))}B.a.m(s,a)},
ed(a){var s,r,q,p,o=this
if(o.hR(a))return
o.el(a)
try{s=o.b.$1(a)
if(!o.hR(s)){q=A.DV(a,null,o.gfO())
throw A.k(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.av(p)
q=A.DV(a,r,o.gfO())
throw A.k(q)}},
hR(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.O.k(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hS(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.el(a)
q.n7(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.el(a)
r=q.n8(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
n7(a){var s,r,q=this.c
q.a+="["
s=J.an(a)
if(s.gap(a)){this.ed(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.ed(s.h(a,r))}}q.a+="]"},
n8(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga4(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.ix(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a2(0,new A.v1(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hS(A.b(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.ed(r[n])}p.a+="}"
return!0}}
A.v1.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.j(s,r.a++,a)
B.a.j(s,r.a++,b)},
$S:60}
A.v_.prototype={
gfO(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lM.prototype={
hf(a,b){t.L.a(a)
return(b===!0?B.n4:B.n3).O(a)},
cb(a){return this.hf(a,null)}}
A.lN.prototype={
O(a){var s,r,q,p,o
A.b(a)
s=a.length
r=A.bQ(0,null,s)
if(r===0)return new Uint8Array(0)
q=new Uint8Array(r*3)
p=new A.vf(q)
if(p.jB(a,0,r)!==r){o=r-1
if(!(o>=0&&o<s))return A.a(a,o)
p.eN()}return B.i.aK(q,0,p.b)}}
A.vf.prototype={
eN(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
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
l_(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.eN()
return!1}},
jB(a,b,c){var s,r,q,p,o,n,m,l,k=this
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
if(k.l_(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eN()}else if(n<=2047){m=k.b
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
A.j6.prototype={
O(a){return new A.eP(this.a).cv(t.L.a(a),0,null,!0)}}
A.eP.prototype={
cv(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.bQ(b,c,J.aD(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Ko(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Kn(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.er(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Kp(o)
l.b=0
throw A.k(A.y(m,a,p+l.c))}return n},
er(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.C(b+c,2)
r=q.er(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.er(a,s,c,d)}return q.lG(a,b,c,d)},
lG(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bF(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.j0(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aW(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.aR.prototype={
S(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bi(p,r)
return new A.aR(p===0?!1:s,r,p)},
jd(a){var s,r,q,p,o,n,m,l=this.c
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
je(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.bm()
s=j-a
if(s<=0)return k.a?$.Db():$.bm()
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
if(r[o]!==0)return l.a9(0,$.bJ())}return l},
b1(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.k(A.b1("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.d.C(b,16)
if(B.d.R(b,16)===0)return n.jd(r)
q=s+r+1
p=new Uint16Array(q)
A.ED(n.b,s,b,p)
s=n.a
o=A.bi(q,p)
return new A.aR(o===0?!1:s,p,o)},
c4(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.k(A.b1("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.d.C(b,16)
q=B.d.R(b,16)
if(q===0)return j.je(r)
p=s-r
if(p<=0)return j.a?$.Db():$.bm()
o=j.b
n=new Uint16Array(p)
A.JJ(o,s,b,n)
s=j.a
m=A.bi(p,n)
l=new A.aR(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.d.b1(1,q)-1)!==0)return l.a9(0,$.bJ())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.a9(0,$.bJ())}}return l},
l(a,b){var s,r
t.nx.a(b)
s=this.a
if(s===b.a){r=A.lS(this.b,this.c,b.b,b.c)
return s?0-r:r}return s?-1:1},
cs(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.cs(p,b)
if(o===0)return $.bm()
if(n===0)return p.a===b?p:p.S(0)
s=o+1
r=new Uint16Array(s)
A.JE(p.b,o,a.b,n,r)
q=A.bi(s,r)
return new A.aR(q===0?!1:b,r,q)},
bm(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.bm()
s=a.c
if(s===0)return p.a===b?p:p.S(0)
r=new Uint16Array(o)
A.lR(p.b,o,a.b,s,r)
q=A.bi(o,r)
return new A.aR(q===0?!1:b,r,q)},
fn(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
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
fm(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
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
fo(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
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
dr(a,b){var s,r,q,p=this
t.nx.a(b)
if(p.c===0||b.c===0)return $.bm()
s=p.a
if(s===b.a){if(s){s=$.bJ()
return p.bm(s,!0).fo(b.bm(s,!0),!0).cs(s,!0)}return p.fn(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.fm(r.bm($.bJ(),!1),!1)},
hU(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.bJ()
return p.bm(s,!0).fn(b.bm(s,!0),!0).cs(s,!0)}return p.fo(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.bJ()
return r.bm(s,!0).fm(q,!0).cs(s,!0)},
B(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.cs(b,r)
if(A.lS(q.b,p,b.b,s)>=0)return q.bm(b,r)
return b.bm(q,!r)},
a9(a,b){var s,r,q=this,p=q.c
if(p===0)return b.S(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.cs(b,r)
if(A.lS(q.b,p,b.b,s)>=0)return q.bm(b,r)
return b.bm(q,!r)},
a_(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.bm()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.Cp(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.bi(s,p)
return new A.aR(m===0?!1:o,p,m)},
bB(a){var s,r,q,p
if(this.c<a.c)return $.bm()
this.fF(a)
s=$.Cl.bh()-$.j9.bh()
r=A.Cn($.Ck.bh(),$.j9.bh(),$.Cl.bh(),s)
q=A.bi(s,r)
p=new A.aR(!1,r,q)
return this.a!==a.a&&q>0?p.S(0):p},
cA(a){var s,r,q,p=this
if(p.c<a.c)return p
p.fF(a)
s=A.Cn($.Ck.bh(),0,$.j9.bh(),$.j9.bh())
r=A.bi($.j9.bh(),s)
q=new A.aR(!1,s,r)
if($.Cm.bh()>0)q=q.c4(0,$.Cm.bh())
return p.a&&q.c>0?q.S(0):q},
fF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EA&&a.c===$.EC&&c.b===$.Ez&&a.b===$.EB)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.d.gbW(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.Ey(s,r,p,o)
m=new Uint16Array(b+5)
l=A.Ey(c.b,b,p,m)}else{m=A.Cn(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.Co(o,n,j,i)
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
for(q=m.length;j>0;){d=A.JF(k,m,e);--j
A.Cp(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.Co(f,n,j,i)
A.lR(m,g,i,h,m)
while(--d,m[e]<d)A.lR(m,g,i,h,m)}--e}$.Ez=c.b
$.EA=b
$.EB=s
$.EC=r
$.Ck.b=m
$.Cl.b=g
$.j9.b=n
$.Cm.b=p},
gP(a){var s,r,q,p,o=new A.uA(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.uB().$1(s)},
J(a,b){if(b==null)return!1
return b instanceof A.aR&&this.l(0,b)===0},
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
return this.bB(b)},
mJ(a,b){if(b.c===0)throw A.k(B.Y)
return this.cA(b)},
R(a,b){var s
if(b.c===0)throw A.k(B.Y)
s=this.cA(b)
if(s.a)s=b.a?s.a9(0,b):s.B(0,b)
return s},
ga8(a){if(this.c===0)return 0
return this.a?-1:1},
aT(a){var s,r
if(a<0)throw A.k(A.b1("Exponent must not be negative: "+a,null))
if(a===0)return $.bJ()
s=$.bJ()
for(r=this;a!==0;){if((a&1)===1)s=s.a_(0,r)
a=B.d.an(a,1)
if(a!==0)r=r.a_(0,r)}return s},
mv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b.a)throw A.k(A.b1("exponent must be positive: "+b.k(0),null))
if(c.l(0,$.bm())<=0)throw A.k(A.b1("modulus must be strictly positive: "+c.k(0),null))
if(b.c===0)return $.bJ()
s=c.c
r=2*s+4
q=b.gbW(0)
if(q<=0)return $.bJ()
p=c.b
o=s-1
if(!(o>=0&&o<p.length))return A.a(p,o)
n=new A.uz(c,c.b1(0,16-B.d.gbW(p[o])))
m=new Uint16Array(r)
l=new Uint16Array(r)
k=new Uint16Array(s)
j=n.ha(this,k)
for(i=j-1;i>=0;--i){if(!(i<s))return A.a(k,i)
p=k[i]
if(!(i<r))return A.a(m,i)
m[i]=p}for(h=q-2,g=j;h>=0;--h){f=n.i6(m,g,l)
if(b.dr(0,$.bJ().b1(0,h)).c!==0)g=n.fQ(m,A.JG(l,f,k,j,m))
else{g=f
e=l
l=m
m=e}}p=A.bi(g,m)
return new A.aR(!1,m,p)},
b_(a){var s,r,q,p
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
s[7]=(s[7]|B.d.an(o,4))>>>0
j.a=j.b=0
j.c=i
n=new A.uD(j,k)
i=n.$1(5)
if(typeof i!=="number")return i.dr()
s[6]=s[6]|i&15
for(m=5;m>=0;--m)B.i.j(s,m,n.$1(8))
l=new A.uE(s)
if(J.Y(n.$1(1),1))if((s[0]&1)===1)l.$0()
else if(j.b!==0)l.$0()
else for(m=j.c;m>=0;--m){if(!(m<q))return A.a(r,m)
if(r[m]!==0){l.$0()
break}}return J.jQ(B.i.gab(s)).getFloat64(0,!0)},
k(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.d.k(m[0])}s=A.c([],t.s)
m=n.a
r=m?n.S(0):n
while(r.c>1){q=$.Da()
if(q.c===0)A.f(B.Y)
p=r.cA(q).k(0)
B.a.m(s,p)
o=p.length
if(o===1)B.a.m(s,"000")
if(o===2)B.a.m(s,"00")
if(o===3)B.a.m(s,"0")
r=r.bB(q)}q=r.b
if(0>=q.length)return A.a(q,0)
B.a.m(s,B.d.k(q[0]))
if(m)B.a.m(s,"-")
return new A.aP(s,t.q6).cg(0)},
eM(a){if(a<10)return 48+a
return 97+a-10},
bL(a,b){var s,r,q,p,o,n,m,l=this
if(b<2||b>36)throw A.k(A.aL(b,2,36,null,null))
s=l.c
if(s===0)return"0"
if(s===1){s=l.b
if(0>=s.length)return A.a(s,0)
r=B.d.bL(s[0],b)
if(l.a)return"-"+r
return r}if(b===16)return l.kR()
q=A.hv(b)
p=A.c([],t.t)
s=l.a
o=s?l.S(0):l
for(n=q.c===0;o.c!==0;){if(n)A.f(B.Y)
m=o.cA(q).b_(0)
o=o.bB(q)
B.a.m(p,l.eM(m))}r=A.j0(new A.aP(p,t.gb),0,null)
if(s)return"-"+r
return r},
kR(){var s,r,q,p,o,n,m,l=this,k=A.c([],t.t)
for(s=l.c-1,r=l.b,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p]
for(n=0;n<4;++n){B.a.m(k,l.eM(o&15))
o=o>>>4}}if(!(s>=0&&s<q))return A.a(r,s)
m=r[s]
while(m!==0){B.a.m(k,l.eM(m&15))
m=m>>>4}if(l.a)B.a.m(k,45)
return A.j0(new A.aP(k,t.gb),0,null)},
$ihY:1,
$iaZ:1}
A.uA.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:36}
A.uB.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:40}
A.uD.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=this.b,q=r.c-1,r=r.b,p=r.length;o=s.a,o<a;){o=s.c
if(o<0){s.c=o-1
n=0
m=16}else{if(!(o<p))return A.a(r,o)
n=r[o]
m=o===q?B.d.gbW(n):16;--s.c}s.b=B.d.b1(s.b,m)+n
s.a+=m}r=s.b
o-=a
l=B.d.c4(r,o)
s.b=r-B.d.b1(l,o)
s.a=o
return l},
$S:40}
A.uE.prototype={
$0(){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=1,p=0;p<8;++p){if(q===0)break
o=s[p]+q
r&2&&A.C(s)
s[p]=o&255
q=o>>>8}},
$S:0}
A.uz.prototype={
ha(a,b){var s,r,q,p,o,n,m=a.a
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
fQ(a,b){var s
if(b<this.a.c)return b
s=A.bi(b,a)
return this.ha(new A.aR(!1,a,s).cA(this.b),a)},
i6(a,b,c){var s,r,q,p,o,n=A.bi(b,a),m=new A.aR(!1,a,n),l=m.a_(0,m)
for(s=l.c,n=l.b,r=n.length,q=c.$flags|0,p=0;p<s;++p){if(!(p<r))return A.a(n,p)
o=n[p]
q&2&&A.C(c)
if(!(p<c.length))return A.a(c,p)
c[p]=o}for(n=2*b;s<n;++s){q&2&&A.C(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}return this.fQ(c,n)}}
A.vc.prototype={
$2(a,b){var s,r
A.b(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.Q(t.tY.a(b)),r=this.a;s.n();){b=s.gt()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.m(b)}},
$S:86}
A.nz.prototype={
$0(){var s=this
return A.f(A.b1("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:88}
A.a8.prototype={
aw(a){var s=1000,r=B.d.R(a,s),q=B.d.C(a-r,s),p=this.b+r,o=B.d.R(p,s),n=this.c
return new A.a8(A.DJ(this.a+B.d.C(p-o,s)+q,o,n),o,n)},
dX(a){return A.BY(0,this.b-a.b,this.a-a.a,0)},
J(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gP(a){return A.bx(this.a,this.b,B.t,B.t)},
hl(a){var s=this.a,r=a.a
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
return new A.a8(s.a,s.b,!0)},
k(a){var s=this,r=A.DI(A.b0(s)),q=A.ds(A.b4(s)),p=A.ds(A.au(s)),o=A.ds(A.Cb(s)),n=A.ds(A.Cc(s)),m=A.ds(A.E8(s)),l=A.nA(A.E7(s)),k=s.b,j=k===0?"":A.nA(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
dl(){var s=this,r=A.b0(s)>=-9999&&A.b0(s)<=9999?A.DI(A.b0(s)):A.Iw(A.b0(s)),q=A.ds(A.b4(s)),p=A.ds(A.au(s)),o=A.ds(A.Cb(s)),n=A.ds(A.Cc(s)),m=A.ds(A.E8(s)),l=A.nA(A.E7(s)),k=s.b,j=k===0?"":A.nA(k)
k=r+"-"+q
if(s.c)return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+"T"+o+":"+n+":"+m+"."+l+j},
$iaZ:1}
A.nB.prototype={
$1(a){if(a==null)return 0
return A.X(a,null,null)},
$S:85}
A.nC.prototype={
$1(a){var s,r,q
if(a==null)return 0
for(s=a.length,r=0,q=0;q<6;++q){r*=10
if(q<s){if(!(q<s))return A.a(a,q)
r+=a.charCodeAt(q)^48}}return r},
$S:85}
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
$iaZ:1}
A.m8.prototype={
k(a){return this.U()},
$iZ:1}
A.aF.prototype={
gcq(){return A.J5(this)}}
A.jW.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.kw(s)
return"Assertion failed"}}
A.e2.prototype={}
A.ce.prototype={
geu(){return"Invalid argument"+(!this.a?"(s)":"")},
ges(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.i(p),n=s.geu()+q+o
if(!s.a)return n
return n+s.ges()+": "+A.kw(s.geX())},
geX(){return this.b}}
A.hg.prototype={
geX(){return A.Cy(this.b)},
geu(){return"RangeError"},
ges(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.kG.prototype={
geX(){return A.O(this.b)},
geu(){return"RangeError"},
ges(){if(A.O(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.j5.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.lJ.prototype={
k(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dW.prototype={
k(a){return"Bad state: "+this.a}}
A.ke.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.kw(s)+"."}}
A.l9.prototype={
k(a){return"Out of Memory"},
gcq(){return null},
$iaF:1}
A.j_.prototype={
k(a){return"Stack Overflow"},
gcq(){return null},
$iaF:1}
A.uJ.prototype={
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
k=""}return g+l+B.b.X(e,i,j)+k+"\n"+B.b.a_(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.i(f)+")"):g}}
A.kM.prototype={
gcq(){return null},
k(a){return"IntegerDivisionByZeroException"},
$iaF:1}
A.h.prototype={
dR(a,b){return A.fO(this,A.o(this).i("h.E"),b)},
cN(a,b,c){var s=A.o(this)
return A.E3(this,s.a3(c).i("1(h.E)").a(b),s.i("h.E"),c)},
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
if(!s.n())throw A.k(A.ak())
r=s.gt()
while(s.n())r=b.$2(r,s.gt())
return r},
a5(a,b,c,d){var s,r
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
hI(a){return this.cU(0,!0)},
ea(a){return A.kY(this,A.o(this).i("h.E"))},
gq(a){var s,r=this.gA(this)
for(s=0;r.n();)++s
return s},
ga4(a){return!this.gA(this).n()},
gap(a){return!this.ga4(this)},
bg(a,b){return A.Eo(this,b,A.o(this).i("h.E"))},
b9(a,b){return A.Ek(this,b,A.o(this).i("h.E"))},
ga0(a){var s=this.gA(this)
if(!s.n())throw A.k(A.ak())
return s.gt()},
gaq(a){var s,r=this.gA(this)
if(!r.n())throw A.k(A.ak())
do s=r.gt()
while(r.n())
return s},
ag(a,b){var s,r
A.ba(b,"index")
s=this.gA(this)
for(r=b;s.n();){if(r===0)return s.gt();--r}throw A.k(A.nV(b,b-r,this,"index"))},
k(a){return A.II(this,"(",")")}}
A.ap.prototype={
k(a){return"MapEntry("+A.i(this.a)+": "+A.i(this.b)+")"}}
A.bh.prototype={
gP(a){return A.a0.prototype.gP.call(this,0)},
k(a){return"null"}}
A.a0.prototype={$ia0:1,
J(a,b){return this===b},
gP(a){return A.c6(this)},
k(a){return"Instance of '"+A.lh(this)+"'"},
gaz(a){return A.bd(this)},
toString(){return this.k(this)}}
A.mr.prototype={
k(a){return""},
$ieG:1}
A.bF.prototype={
gq(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iJm:1}
A.up.prototype={
$2(a,b){var s,r,q,p
t.yz.a(a)
A.b(b)
s=B.b.bH(b,"=")
if(s===-1){if(b!=="")a.j(0,A.Cv(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.X(b,0,s)
q=B.b.ad(b,s+1)
p=this.a
a.j(0,A.Cv(r,0,r.length,p,!0),A.Cv(q,0,q.length,p,!0))}return a},
$S:145}
A.uo.prototype={
$2(a,b){throw A.k(A.y("Illegal IPv6 address, "+a,this.a,b))},
$S:150}
A.jy.prototype={
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
r.y!==$&&A.fK()
r.y=s
q=s}return q},
ghj(){var s=this.c
if(s==null)return""
if(B.b.am(s,"[")&&!B.b.c5(s,"v",1))return B.b.X(s,1,s.length-1)
return s},
ghz(){var s=this.d
return s==null?A.ES(this.a):s},
k(a){return this.gdO()},
J(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(n===b)return!0
s=!1
if(b instanceof A.jy)if(n.a===b.a)if(n.c!=null===(b.c!=null))if(n.b===b.b)if(n.ghj()===b.ghj())if(n.ghz()===b.ghz())if(n.e===b.e){r=n.f
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
$iun:1}
A.v9.prototype={
$1(a){return A.Cw(64,A.b(a),B.R,!1)},
$S:11}
A.vb.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.Cw(1,a,B.R,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.Cw(1,b,B.R,!0)
s.a+=r}},
$S:183}
A.va.prototype={
$2(a,b){var s,r
A.b(a)
if(b==null||typeof b=="string")this.a.$2(a,A.m(b))
else for(s=J.Q(t.tY.a(b)),r=this.a;s.n();)r.$2(a,A.b(s.gt()))},
$S:86}
A.kx.prototype={
k(a){return"Expando:null"}}
A.ph.prototype={
k(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.AQ.prototype={
$1(a){return this.a.cG(this.b.i("0/?").a(a))},
$S:33}
A.AR.prototype={
$1(a){if(a==null)return this.a.dS(new A.ph(a===undefined))
return this.a.dS(a)},
$S:33}
A.mc.prototype={
ix(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.k(A.aA("No source of cryptographically secure random numbers available."))},
cQ(a){var s,r,q,p,o,n,m,l,k=null
if(a<=0||a>4294967296)throw A.k(new A.hg(k,k,!1,k,k,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.O(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bq(B.aC.gab(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}},
$iJ8:1}
A.kv.prototype={}
A.kp.prototype={}
A.kZ.prototype={
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
aE(a){var s,r,q
this.$ti.i("A<1>?").a(a)
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
gP(a){return A.E4(this.a)},
k(a){return A.vx(this.a)}}
A.kq.prototype={
m(a,b){if(this.a!=null)throw A.k(A.aq("add may only be called once."))
this.a=b},
au(){if(this.a==null)throw A.k(A.aq("add must be called once."))},
$ib5:1}
A.h_.prototype={
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
r.fp(b,0,s.gq(b))},
af(a,b,c,d){var s=this
t.L.a(a)
if(s.w)throw A.k(A.aq("Hash.addSlice() called after close()."))
A.bQ(b,c,J.aD(a))
if(b<c){s.r=s.r+(c-b)
s.fp(a,b,c)}if(d)s.au()},
fp(a,b,c){var s,r,q,p,o,n=this
t.L.a(a)
s=n.e
r=n.d
q=r.length
for(p=b;;s=0){o=s+c-p
if(o<q){B.i.aJ(r,s,o,a,p)
n.e=o
return}B.i.aJ(r,s,q,a,p)
p+=q-s
n.eE()}},
eE(){var s,r=this,q=r.f,p=r.c,o=B.a1===r.b,n=q.$flags|0,m=q.length,l=0
do{s=p.getUint32(l*4,o)
n&2&&A.C(q)
if(!(l<m))return A.a(q,l)
q[l]=s;++l}while(l<m)
r.hK(q)},
au(){var s,r,q,p,o,n,m,l,k,j=this
if(j.w)return
j.w=!0
if(j.r>1125899906842623)A.f(A.aA("Hashing is unsupported for messages with more than 2^53 bits."))
s=j.d
r=j.e
q=j.e=r+1
s.$flags&2&&A.C(s)
p=s.length
if(!(r>=0&&r<p))return A.a(s,r)
s[r]=128
if(q>p-j.x){B.i.aO(s,q,p,0)
j.eE()
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
r.setUint32(p,m,q)}j.eE()
j.e=0
s=j.a
s.m(0,new A.cj(j.iY()))
s.au()},
iY(){var s,r,q,p,o,n,m
if(this.b===$.eY())return J.I4(B.E.gab(this.geV()))
s=this.geV()
r=s.byteLength
q=new Uint8Array(r)
p=J.jQ(B.i.gab(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.C(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.mj.prototype={
cY(a){var s,r,q,p
t.uC.a(a)
s=new Uint32Array(A.aJ(A.c([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)))
r=new Uint32Array(64)
q=new Uint8Array(64)
p=new Uint32Array(16)
return new A.mk(s,r,a,B.aw,J.jQ(B.i.gab(q)),q,p,8)}}
A.ml.prototype={
hK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a.length
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
geV(){return this.y}}
A.mm.prototype={
cY(a){var s,r,q,p,o
t.uC.a(a)
s=new Uint32Array(A.aJ(A.c([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],t.t)))
r=new Uint32Array(160)
q=new Uint32Array(38)
p=new Uint8Array(128)
o=new Uint32Array(32)
return new A.lv(s,r,q,a,B.aw,J.jQ(B.i.gab(p)),p,o,16)},
gl7(){return 128}}
A.mn.prototype={
geV(){return J.mQ(B.E.gab(this.y),0,this.glQ())},
hK(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
B.E.b8(r,12,28,q)
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
i=$.HJ()
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
glQ(){return 16}}
A.k1.prototype={
br(a,b,c){return this.lI(a,t.L.a(b),c)},
lI(a0,a1,a2){var s=0,r=A.J(t.L),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$br=A.K(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:c=a0.b.a
b=c.length
if(b!==16)throw A.k(A.x(a0,"secretBox","Expected MAC length 16, actually "+b))
s=3
return A.r(A.k4(a2,!0,!1,!1,n.c,"AES-GCM"),$async$br)
case 3:m=a4
f=a0.a
l=c
c=f.length
e=J.aD(l)
k=new Uint8Array(c+e)
J.Dq(k,0,f)
J.Dq(k,c,l)
p=5
s=8
return A.r(A.y9({name:"AES-GCM",iv:A.bG(a0.c),additionalData:A.bG(a1),tagLength:J.aD(l)*8},m,A.bG(k)),$async$br)
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
i=A.av(a)
h=A.w(i)
if("name" in h){g=A.b(h.name)
if(J.Y(g,"OperationError"))throw A.k(A.Ei())}throw a
s=7
break
case 4:s=2
break
case 7:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$br,r)},
bF(a,b,c){var s=t.L
return this.lU(s.a(a),s.a(b),c)},
lU(a,b,c){var s=0,r=A.J(t.yX),q,p=this,o,n,m,l,k
var $async$bF=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=p.hs()
s=3
return A.r(A.k4(c,!1,!0,!1,p.c,"AES-GCM"),$async$bF)
case 3:n=e
s=4
return A.r(A.yl({name:"AES-GCM",iv:A.bG(o),additionalData:A.bG(b),tagLength:128},n,A.bG(a)),$async$bF)
case 4:m=e
l=a.length
k=J.hI(m)
q=new A.eD(k.cD(m,0,l),new A.d2(k.cD(m,l,null)),o)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bF,r)},
gco(){return this.c},
gci(){return this.d}}
A.n4.prototype={
gfK(){return!1},
eO(a,b){var s=this.ie(a,b),r=$.eg()
if(r&&b!==24)return new A.k1(b,a,null)
return s},
cH(){var s=this.ig(),r=$.eg()
if(r&&!this.gfK())return new A.k2(s,null)
return s},
cL(a,b){var s=$.eg()
if(s)if(A.Dw(a.gbe())!=null)return new A.n5(a,b)
return this.ih(a,b)},
cM(a){var s=$.eg()
if(s)return B.eu
return this.ii(a)},
cp(){var s=$.eg()
if(s)return B.cz
return this.ij()},
eh(){var s=$.eg()
if(s)return B.ew
return this.ik()},
dq(){var s=$.eg()
if(s&&!this.gfK())return B.ev
return this.il()}}
A.k2.prototype={
aS(){var s=0,r=A.J(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aS=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.uG()
p=4
s=7
return A.r(A.mH($.BI(),!0,A.c(["sign","verify"],t.s)),$async$aS)
case 7:m=b
e=g
s=8
return A.r(A.mG(A.w(m.privateKey)),$async$aS)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.av(f)
k=n.b
if(k!=null){q=k.aS()
s=1
break}throw A.k(A.aq(A.bd(n).k(0)+".newKeyPair(...) failed: "+A.i(l)))
s=6
break
case 3:s=2
break
case 6:i=A.m(g.cz().d)
i.toString
i=A.w6(i)
h=A.m(g.cz().x)
h.toString
q=new A.d8(new A.bs(i,!1),new A.bE(A.w6(h),B.T),B.T)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aS,r)},
aP(a){t.L.a(a)
B.T.cF(a)
return A.DE(null).aP(a)},
aU(a,b,c){return this.i1(0,t.L.a(b),c)},
i1(a,b,c){var s=0,r=A.J(t.bu),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$aU=A.K(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:p=4
m=c.bu()
s=7
return A.r(c.b6(),$async$aU)
case 7:l=a1
g={crv:"Ed25519",d:A.mB(l.gaN()),kty:"OKP",x:A.mB(l.f.a)}
f=$.BI()
s=8
return A.r(A.jI(g,f,!1,A.c(["sign"],t.s)),$async$aU)
case 8:k=a1
s=9
return A.r(A.mM(f,k,A.bG(b)),$async$aU)
case 9:j=a1
s=10
return A.r(m,$async$aU)
case 10:f=a1
q=new A.fr(j,f)
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
i=A.av(d)
h=n.b
if(h!=null){q=h.aU(0,b,c)
s=1
break}throw A.k(A.aq(A.bd(n).k(0)+".sign(...) failed: "+A.i(i)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aU,r)},
bM(a,b){return this.n3(t.L.a(a),b)},
n3(a,b){var s=0,r=A.J(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bM=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=b.a
f=g.length
if(f!==64)A.f(A.aq("Ed25519 signature must be 64 bytes (got "+f+" bytes)"))
m=b.b
B.T.da(m.a)
p=4
f=A.bG(m.a)
i=$.BI()
s=7
return A.r(A.hJ(f,i,!0,A.c(["verify"],t.s)),$async$bM)
case 7:l=d
g=A.BD(i,l,A.bG(g),A.bG(a))
q=g
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
k=A.av(e)
j=n.b
if(j!=null){q=j.bM(a,b)
s=1
break}throw A.k(A.aq(A.bd(n).k(0)+".verify(...) failed: "+A.i(k)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bM,r)}}
A.fN.prototype={
aE(a){return this.mc(t.L.a(a))},
mc(a){var s=0,r=A.J(t.yO),q,p=this,o,n
var $async$aE=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=J
s=3
return A.r(A.yb(p.ghL(),A.bG(a)),$async$aE)
case 3:q=new o.en(n.bq(c,0,null))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aE,r)}}
A.k5.prototype={
ghL(){return"SHA-256"}}
A.k6.prototype={
ghL(){return"SHA-512"}}
A.lU.prototype={}
A.lV.prototype={}
A.n5.prototype={
aX(a,b,c){var s=t.L
s.a(b)
return this.lL(s.a(a),b,c)},
lL(a,b,c){var s=0,r=A.J(t.A0),q,p=this,o,n,m,l,k
var $async$aX=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:n=p.a
m=A.Dw(n.gbe())
if(m==null)throw A.k(A.aA("The hash algorithm "+n.gbe().k(0)+" is not supported by Web Crypto API."))
s=3
return A.r(p.d4(c),$async$aX)
case 3:o=e
l=A
k=A
s=4
return A.r(A.mE({name:"HKDF",hash:m,salt:A.bG(b),info:A.bG(a)},o,8*p.b),$async$aX)
case 4:q=new l.bp(new k.bs(e,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aX,r)},
d4(a){var s=0,r=A.J(t.m),q,p,o
var $async$d4=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=A
o=A
s=4
return A.r(a.cI(),$async$d4)
case 4:s=3
return A.r(p.hJ(o.bG(c),"HKDF",!1,A.c(["deriveBits"],t.s)),$async$d4)
case 3:q=c
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d4,r)},
gdf(){return this.a},
ge6(){return this.b}}
A.k3.prototype={
b4(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.lc(a,s.a(b),c,d)},
h6(a,b,c){return this.b4(a,B.A,b,c)},
lc(a,b,c,d){var s=0,r=A.J(t.Ep),q,p=this,o,n
var $async$b4=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.r(p.d2(d),$async$b4)
case 4:s=3
return A.r(n.mM("HMAC",f,A.bG(a)),$async$b4)
case 3:q=new o.d2(f)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b4,r)},
d2(a){var s=0,r=A.J(t.m),q,p=this,o,n
var $async$d2=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=4
return A.r(a.cI(),$async$d2)
case 4:s=3
return A.r(o.hJ(n.bG(c),{name:"HMAC",hash:p.b},!1,A.c(["sign"],t.s)),$async$d2)
case 3:q=c
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d2,r)},
gbe(){return this.a}}
A.n6.prototype={
aS(){var s=0,r=A.J(t.gZ),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aS=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=A.uG()
p=4
s=7
return A.r(A.mH($.BJ(),!0,A.c(["deriveBits"],t.s)),$async$aS)
case 7:m=b
e=g
s=8
return A.r(A.mG(A.w(m.privateKey)),$async$aS)
case 8:e.b=b
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.av(f)
k=B.cH
if(k!=null){q=k.aS()
s=1
break}throw A.k(A.aq(A.bd(n).k(0)+".newKeyPair(...) failed: "+A.i(l)))
s=6
break
case 3:s=2
break
case 6:i=A.m(g.cz().d)
i.toString
i=new Uint8Array(A.aJ(A.w6(i)))
h=A.m(g.cz().x)
h.toString
q=new A.d8(new A.bs(i,!1),new A.bE(new Uint8Array(A.aJ(A.w6(h))),B.U),B.T)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$aS,r)},
aP(a){t.L.a(a)
B.U.cF(a)
return new A.i9(null).aP(a)},
b3(a,b){return this.i0(a,b)},
i0(a2,a3){var s=0,r=A.J(t.c),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b3=A.K(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:c=a3
B.U.da(c.a)
m=A.uG()
p=4
s=7
return A.r(a2.b6(),$async$b3)
case 7:l=a5
B.T.cF(l.gaN())
a1=m
s=8
return A.r(A.jI({crv:"X25519",d:A.mB(l.gaN()),kty:"OKP",x:A.mB(l.f.a)},$.BJ(),!1,A.c(["deriveBits"],t.s)),$async$b3)
case 8:a1.b=a5
p=2
s=6
break
case 4:p=3
b=o.pop()
k=A.av(b)
j=B.cH
if(j!=null){q=j.b3(a2,a3)
s=1
break}throw A.k(A.aq(A.bd(n).k(0)+".sharedSecretKey(...) failed to construct JS private key: "+A.i(k)))
s=6
break
case 3:s=2
break
case 6:i=A.uG()
p=10
a1=i
s=13
return A.r(A.jI({crv:"X25519",kty:"OKP",x:A.mB(c.a)},$.BJ(),!1,A.c([],t.s)),$async$b3)
case 13:a1.b=a5
p=2
s=12
break
case 10:p=9
a=o.pop()
h=A.av(a)
d=A.aq(A.bd(n).k(0)+".sharedSecretKey(...) failed to construct JS public key: "+A.i(h))
throw A.k(d)
s=12
break
case 9:s=2
break
case 12:p=15
s=18
return A.r(A.mE({name:"X25519",public:i.cz()},m.cz(),256),$async$b3)
case 18:g=a5
q=new A.bp(new A.bs(g,!1),null)
s=1
break
p=2
s=17
break
case 15:p=14
a0=o.pop()
f=A.av(a0)
d=A.aq(A.bd(n).k(0)+".sharedSecretKey(...) failed: "+A.i(f))
throw A.k(d)
s=17
break
case 14:s=2
break
case 17:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$b3,r)}}
A.f_.prototype={
gP(a){return A.bx(B.mO,this.gco(),this.gci(),B.t)},
J(a,b){if(b==null)return!1
return b instanceof A.f_&&this.gco()===b.gco()&&this.gci()===b.gci()},
k(a){var s=this
if(s.gci()===12)return A.bd(s).k(0)+".with"+s.gco()*8+"bits()"
return A.bd(s).k(0)+".with"+s.gco()*8+"bits(nonceLength: "+s.gci()+")"}}
A.hV.prototype={
gP(a){var s=this
return(s.a^s.b^s.c^s.d)>>>0},
J(a,b){var s=this
if(b==null)return!1
return b instanceof A.i3&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d},
k(a){var s=this
return A.bd(s).k(0)+"(\n  parallelism: "+s.a+",\n  memory: "+s.b+",\n  iterations: "+s.c+",\n  hashLength: "+s.d+",\n)"}}
A.hZ.prototype={
gd9(){return 64},
gP(a){return A.c6(B.mP)},
J(a,b){if(b==null)return!1
return b instanceof A.f5},
k(a){var s=this.a
if(s===64)return"Blake2b()"
return"Blake2b(hashLengthInBytes: "+s+")"},
dm(){return new A.f5(this.a)},
$id3:1,
ge0(){return this.a}}
A.ic.prototype={
aS(){var s=new Uint8Array(32)
A.CK(s,this.a)
return this.aP(s)},
k(a){return A.bd(this).k(0)+"()"}}
A.kE.prototype={
gP(a){var s=this.gdf(),r=A.c6(B.eh)
s=s.gbe()
return(11*((r^s.gP(s))>>>0)^this.ge6())>>>0},
J(a,b){var s,r
if(b==null)return!1
if(b instanceof A.kE){s=this.gdf()
r=b.gdf()
s=s.gbe().J(0,r.gbe())
s=s&&this.ge6()===b.ge6()}else s=!1
return s},
k(a){return A.bd(this).k(0)+"("+this.gdf().k(0)+")"}}
A.eo.prototype={
gP(a){var s=A.c6(B.eh),r=this.gbe()
return(s^r.gP(r))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.eo&&this.gbe().J(0,b.gbe())},
k(a){var s=this,r=s.gbe()
if(r instanceof A.eE)return A.bd(s).k(0)+".sha256()"
if(r instanceof A.d7)return A.bd(s).k(0)+".sha512()"
return A.bd(s).k(0)+"("+r.k(0)+")"}}
A.u_.prototype={}
A.eE.prototype={
gd9(){return 64},
gP(a){return A.c6(B.mZ)},
ge0(){return 32},
J(a,b){if(b==null)return!1
return b instanceof A.eE},
dm(){return B.bn}}
A.u0.prototype={}
A.d7.prototype={
gd9(){return 128},
gP(a){return A.c6(B.n_)},
ge0(){return 64},
J(a,b){if(b==null)return!1
return b instanceof A.d7},
dm(){return B.cB}}
A.us.prototype={
aS(){var s=new Uint8Array(32)
A.CK(s,this.a)
return this.aP(s)},
k(a){return A.bd(this).k(0)+"()"}}
A.nj.prototype={
hs(){var s=this.gci(),r=new Uint8Array(s)
A.CK(r,this.a)
return r}}
A.np.prototype={}
A.en.prototype={
gP(a){return B.S.aE(this.a)},
J(a,b){if(b==null)return!1
return b instanceof A.en&&B.S.bt(this.a,b.a)},
k(a){return"Hash(["+B.i.Y(this.a,",")+"])"}}
A.cy.prototype={
cP(){var s=$.jO()
return new A.mb(new A.jb(s))},
k(a){return A.bd(this).k(0)+"()"}}
A.kD.prototype={
m(a,b){t.L.a(b)
this.af(b,0,b.length,!1)}}
A.mb.prototype={
af(a,b,c,d){t.L.a(a)
if(this.c)throw A.k(A.aq("Sink is closed"))
if(b!==0||c!==J.aD(a))a=J.BP(a,b,c)
this.b.m(0,a)
if(d)this.c=!0},
au(){this.c=!0}}
A.o5.prototype={}
A.o8.prototype={
aP(a){t.L.a(a)
throw A.k(A.aA(u.V))}}
A.h5.prototype={}
A.is.prototype={
k(a){return A.bd(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.lj.prototype={
k(a){return A.bd(this).k(0)+"(..., type: "+this.b.k(0)+")"}}
A.it.prototype={
cF(a){var s=J.aD(t.L.a(a))
if(s!==32)throw A.k(A.x(s,"length","Algorithm "+this.a+" expects a private key with 32 bytes, but got: "+s+" bytes"))},
da(a){var s=t.L.a(a).length
if(s!==32)throw A.k(A.x(s,"length","Algorithm "+this.a+" expects a public key with 32 bytes, but got: "+s+" bytes"))},
k(a){return"KeyPairType."+this.a}}
A.d2.prototype={
gP(a){return B.S.aE(this.a)},
J(a,b){if(b==null)return!1
return b instanceof A.d2&&B.S.bt(this.a,b.a)},
k(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.i.Y(s,",")+"])"}}
A.iW.prototype={
k(a){return A.bd(this).k(0)+": SecretBox has wrong message authentication code (MAC)"}}
A.d3.prototype={
bJ(a,b,c){var s=t.L
s.a(b)
return this.mC(s.a(a),b,c)},
hr(a){return this.bJ(B.A,B.A,a)},
mC(a,b,c){var s=0,r=A.J(t.sd),q,p=this,o,n
var $async$bJ=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=$.jO()
n=new Uint8Array(A.aJ(c.gaN()))
q=new A.mg(p,new A.bp(new A.bs(n,!0),c.c),b,a,new A.jb(o))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bJ,r)},
k(a){return A.bd(this).k(0)+"()"}}
A.cC.prototype={
m(a,b){t.L.a(b)
this.af(b,0,b.length,!1)},
au(){if(this.gcf())return
this.af(B.A,0,0,!0)}}
A.mg.prototype={
gcf(){return this.f!=null},
gf0(){throw A.k(A.j3(null))},
af(a,b,c,d){t.L.a(a)
if(this.f!=null)throw A.k(A.aq("Sink is closed"))
if(b!==0||c!==J.aD(a))a=J.BP(a,b,c)
this.e.m(0,a)
if(d)this.au()},
au(){var s,r,q,p,o,n=this
if(n.f!=null)return
s=n.b
r=n.a.b4(n.e.hG(),n.d,n.c,s)
q=t.pF.a(new A.v2(s))
p=r.$ti
o=$.aj
r.dD(new A.e6(new A.am(o,p),8,q,null,p.i("e6<1,1>")))
n.f=r},
f_(){var s=this.f
if(s==null)throw A.k(A.aq("Sink is not closed"))
return s},
ho(){throw A.k(A.aA(this.k(0)+" does not support macSync()"))}}
A.v2.prototype={
$0(){var s=this.a
s.b.dW()
s.ei()},
$S:27}
A.mw.prototype={}
A.eD.prototype={
gP(a){return(B.S.aE(this.b.a)^B.S.aE(this.c)^B.S.aE(this.a))>>>0},
J(a,b){var s
if(b==null)return!1
if(b instanceof A.eD){s=B.S.bt(this.b.a,b.b.a)
s=s&&B.S.bt(this.c,b.c)&&B.S.bt(this.a,b.a)}else s=!1
return s},
k(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.i.Y(this.c,",")+"],\n  mac: "+this.b.k(0)+",\n)"}}
A.hj.prototype={
dW(){},
cI(){return this.b6().mW(new A.tX(),t.L)}}
A.tX.prototype={
$1(a){return t.A0.a(a).gaN()},
$S:192}
A.bp.prototype={
gaN(){var s=this.b
if(s.a==null)throw A.k(A.aq("Secret key has been destroyed: "+this.k(0)))
return s},
gP(a){var s=A.c6(B.mY)
return(s^(this.b.a==null?0:B.S.aE(this.gaN())))>>>0},
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
if(s==null)throw A.k(A.aA("The bytes have been destroyed"))
return J.aD(s)},
sq(a,b){throw A.k(A.aA("The bytes are unmodifiable."))},
h(a,b){var s=this.a
if(s==null)throw A.k(A.aq("The bytes have been destroyed"))
return J.ar(s,b)},
j(a,b,c){A.O(c)
throw A.k(A.aA("The bytes are unmodifiable."))},
dW(){var s=this.a
if(s!=null){this.a=null
if(this.b)A.D2(s)}}}
A.fr.prototype={
gP(a){return(B.aG.aE(this.a)^this.b.gP(0))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.fr&&B.aG.bt(this.a,b.a)&&this.b.J(0,b.b)},
k(a){return"Signature(["+B.i.Y(this.a,", ")+"], publicKey: "+this.b.k(0)+")"}}
A.lw.prototype={
aP(a){t.L.a(a)
throw A.k(A.aA(u.V))}}
A.d8.prototype={
gaN(){var s=this.d
if(s.a==null)throw A.k(A.aq(this.k(0)+" has been destroyed."))
return s},
gP(a){return(this.f.gP(0)^A.c6(this.b))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.d8&&this.f.J(0,b.f)&&this.b===b.b},
b6(){var s=0,r=A.J(t.jC),q,p=this
var $async$b6=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.k(A.aq("Private key has been destroyed"))
q=p
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b6,r)},
dY(){var s=0,r=A.J(t.L),q,p=this
var $async$dY=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:if(p.d.a==null)throw A.k(A.aq("Private key has been destroyed"))
q=p.gaN()
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dY,r)},
bu(){var s=0,r=A.J(t.qC),q,p=this
var $async$bu=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:q=p.f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bu,r)},
k(a){var s=this.f.k(0)
return"SimpleKeyPairData(..., publicKey: "+s+")"},
$iCf:1}
A.bE.prototype={
gP(a){return(B.aG.aE(this.a)^A.c6(this.b))>>>0},
J(a,b){if(b==null)return!1
return b instanceof A.bE&&this.b===b.b&&B.aG.bt(this.a,b.a)},
l(a,b){var s,r,q,p=this.a,o=t.qC.a(b).a,n=p.length,m=o.length,l=n<=m?n:m
for(s=0;s<l;++s){if(!(s<n))return A.a(p,s)
r=p[s]
if(!(s<m))return A.a(o,s)
q=B.d.l(r,o[s])
if(q!==0)return q}return B.d.l(n,m)},
k(a){return"SimplePublicKey(["+B.i.Y(this.a,",")+"], type: "+this.b.k(0)+")"},
$iaZ:1}
A.la.prototype={
m(a,b){this.a=new A.en(b.a)},
au(){},
$ib5:1}
A.pl.prototype={
gd9(){return this.ge1().gl7()},
aE(a){t.L.a(a)
return A.aV(new A.en(this.ge1().O(a).a),t.yO)},
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
A.bQ(b,c,J.aD(a))
s.d=s.d+(c-b)
s.b.af(a,b,c,d)
if(d)s.au()},
au(){var s=this
if(s.e)return
s.e=!0
s.b.au()
B.i.b0(s.f,0,s.c.a.a)},
cT(){var s=this,r=s.c
r.a=null
s.b=s.a.cY(r)
s.e=!1
s.d=0},
gbv(){return this.f}}
A.kh.prototype={
br(a,b,c){return this.lJ(a,t.L.a(b),c)},
lJ(a,b,c){var s=0,r=A.J(t.L),q,p=this,o,n
var $async$br=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.r(c.b6(),$async$br)
case 3:q=p.lK(o,n,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$br,r)},
lK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(b)
s=c.gaN().gq(0)
r=this.d
if(s!==r)throw A.k(A.x(c,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
q=A.Fw(c)
p=new Uint32Array(4)
A.mA(p,0,p,0,q)
p[0]=A.bT(p[0])
p[1]=A.bT(p[1])
p[2]=A.bT(p[2])
p[3]=A.bT(p[3])
o=A.DD(p,a.c)
n=J.mQ(B.i.gab(o),0,null)
m=a.a
l=B.S.bt(B.cA.ft(m,b,q,p,n).a,a.b.a)
if(!l)throw A.k(A.Ei())
A.xC(o,1)
l=m.length
k=B.d.C(l+31,16)*4
j=new Uint32Array(k)
for(i=0;i<k;i+=4){A.mA(j,i,n,0,q)
A.xC(o,1)}h=J.bq(B.E.gab(j),j.byteOffset,l)
for(k=h.length,g=h.$flags|0,i=0;i<l;++i){if(!(i<k))return A.a(h,i)
f=h[i]
e=m[i]
g&2&&A.C(h)
h[i]=f^e}return h},
bF(a,b,c){var s=t.L
return this.lV(s.a(a),s.a(b),c)},
lV(a,b,c){var s=0,r=A.J(t.yX),q,p=this,o,n
var $async$bF=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.r(c.b6(),$async$bF)
case 3:q=p.lW(o,n,null,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bF,r)},
lW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(b)
s=d.gaN().gq(0)
r=this.d
if(s!==r)throw A.k(A.x(d,"secretKeyData","Expected "+r+" bytes, got "+s+" bytes"))
c=this.hs()
q=A.Fw(d)
p=new Uint32Array(4)
A.mA(p,0,p,0,q)
p[0]=A.bT(p[0])
p[1]=A.bT(p[1])
p[2]=A.bT(p[2])
p[3]=A.bT(p[3])
o=A.DD(p,c)
n=J.mQ(B.i.gab(o),0,null)
m=new Uint32Array(A.aJ(n))
A.xC(o,1)
e=a.length
l=(B.d.C(e+15,16)+1)*4
k=new Uint32Array(l)
for(j=0;j<l;j+=4){A.mA(k,j,n,0,q)
A.xC(o,1)}i=J.bq(B.E.gab(k),k.byteOffset,e)
for(l=i.length,h=i.$flags|0,j=0;j<e;++j){if(!(j<l))return A.a(i,j)
g=i[j]
f=a[j]
h&2&&A.C(i)
i[j]=g^f}return new A.eD(i,B.cA.ft(i,b,q,p,m),c)},
gci(){return this.c},
gco(){return this.d}}
A.km.prototype={
b4(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
s.a(b)
throw A.k(A.aA("AES-GCM MAC algorithm can NOT be called separately."))},
f3(a,b,c){var s=t.L
s.a(b)
s.a(a)
throw A.k(A.j3(null))},
k(a){return"DartGcm()"},
ft(a,b,c,d,e){var s,r,q,p,o,n=4294967296,m=t.L
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
A.ki(s,d,J.bq(B.aC.gab(p),0,null))
o=new Uint32Array(4)
A.mA(o,0,e,0,c)
s[0]=(s[0]^o[0])>>>0
s[1]=(s[1]^o[1])>>>0
s[2]=(s[2]^o[2])>>>0
s[3]=(s[3]^o[3])>>>0
return new A.d2(J.bq(B.E.gab(s),0,null))}}
A.lY.prototype={}
A.m0.prototype={}
A.nq.prototype={}
A.i3.prototype={
gP(a){return(A.hV.prototype.gP.call(this,0)^B.fy.gP(null))>>>0},
J(a,b){var s
if(b==null)return!1
if(b instanceof A.i3)s=this.ib(0,b)
else s=!1
return s},
dd(a,b){var s=B.A,r=B.A
return this.lM(t.L.a(a),b)},
lM(a3,a4){var s=0,r=A.J(t.c),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$dd=A.K(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:j=B.A
i=B.A
h=m.b
g=m.a
f=m.c
e=m.d
d=new Uint32Array(256)
c=new Uint32Array(256)
b=new A.nr(g,h,f,e,B.bq,19,null,d,c,new Uint32Array(256))
b.iu(null,e,f,null,h,null,B.bq,g,19)
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
q=new A.bp(new A.bs(k,!1),null)
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.ec()
s=n.pop()
break
case 5:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$dd,r)}}
A.fT.prototype={
U(){return"DartArgon2Mode."+this.b}}
A.kj.prototype={
gd8(){var s,r=this,q=r.at
if(q===$){s=new A.nt(r).$0()
r.at!==$&&A.fK()
r.at=s
q=s}return q},
iu(a,b,c,d,e,f,g,h,i){var s,r,q=this,p=null
if($.eY()!==B.a1)A.f(A.j3("The platform should be little-endian."))
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
return this.lO(s.a(a),b,c,d)},
lO(a,b,c,d){var s=0,r=A.J(t.L),q,p=this,o,n,m,l,k
var $async$dV=A.K(function(e,f){if(e===1)return A.G(f,r)
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
A.ns(o,A.ns(o,A.ns(o,A.ns(o,24,d),b),c),a)
n=J.bq(B.aC.gab(o),o.byteOffset,o.byteLength)
m=B.cG.md(n).a
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
de(a){return this.lP(a)},
lP(a){var s=0,r=A.J(t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$de=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=m.as
h=new A.cM(new A.am($.aj,t.hR),t.th)
g=h.a
m.as=g
s=i!=null?3:4
break
case 3:s=5
return A.r(i,$async$de)
case 5:case 4:m.fg()
m.ay=!0
p=6
m.mh(a)
s=9
return A.r(m.e4(),$async$de)
case 9:l=m.jH()
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
h.lh()
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
if(p==null)p=q.ax=q.iM()
s=B.d.aA(q.gd8(),q.a)
r=b*s+c*B.d.C(s,4)+a
if(!(r>=0&&r<p.length))return A.a(p,r)
return p[r]},
mh(a){var s,r,q,p,o,n,m,l=this
if(a.length!==64)throw A.k(A.b1(null,null))
s=l.bP(3,0,0)
r=J.bq(B.E.gab(s),s.byteOffset,72)
B.i.b0(r,0,a)
q=J.jR(B.i.gab(r),r.byteOffset,r.byteLength)
for(p=l.a,o=q.$flags|0,n=0;n<p;++n){o&2&&A.C(q,11)
q.setUint32(68,n,!0)
q.setUint32(64,0,!0)
m=l.bP(0,n,0)
l.fe(r,J.bq(B.E.gab(m),m.byteOffset,m.byteLength))
q.setUint32(64,1,!0)
m=l.bP(1,n,0)
l.fe(r,J.bq(B.E.gab(m),m.byteOffset,m.byteLength))}B.i.aO(r,0,r.length,0)},
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
hx(a,b,c,d,e,f,g,h,i){var s=this,r=b+2,q=c+2,p=d+2,o=e+2,n=f+2,m=g+2,l=h+2,k=i+2
s.bO(a,b,d,f,h)
s.bO(a,r,p,n,l)
s.bO(a,c,e,g,i)
s.bO(a,q,o,m,k)
s.bO(a,b,p,g,k)
s.bO(a,r,e,m,h)
s.bO(a,c,o,f,l)
s.bO(a,q,d,n,i)},
f6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this.Q
for(s=a.length,r=b.length,q=h.$flags|0,p=0;p<256;++p){if(!(p<s))return A.a(a,p)
o=a[p]
if(!(p<r))return A.a(b,p)
n=b[p]
q&2&&A.C(h)
if(!(p<256))return A.a(h,p)
h[p]=(o^n)>>>0}for(p=0;p<8;++p){m=p*32
this.hx(h,m,m+4,m+8,m+12,m+16,m+20,m+24,m+28)}for(p=0;p<8;++p){l=p*4
this.hx(h,l,32+l,64+l,96+l,128+l,160+l,192+l,224+l)}if(c)for(q=d.length,o=d.$flags|0,p=0;p<256;++p){if(!(p<q))return A.a(d,p)
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
o=c4>0,n=p.e,m=t.z,l=c6-1,k=c6<2,j=p.y,i=c6===0,h=p.z,g=h.$flags|0,f=p.c,e=n.a,d=!i,c=(c6+1)%4*c1,b=3*c1,a=n===B.bq,a0=b-1,a1=c6*c1,a2=a1-1,a3=c3
case 3:if(!(a3<c1)){s=5
break}s=B.d.R(a3,500)===0&&a3>0?6:7
break
case 6:s=8
return A.r(A.IC(B.eZ,m),$async$e7)
case 8:case 7:a4=a3===0
a5=a4?B.d.R(l,4):c6
a6=a3-1
a7=p.bP(B.d.R(a6,c1),c5,a5)
if(a)a8=k&&c2?B.cF:B.eO
else a8=n
if(a8===B.cF){a9=B.d.R(a3,128)
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
a5=$.GC()
p.f6(h,a5,!1,j)
p.f6(j,a5,!1,j)}a5=2*a9
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
b7=B.d.R(b4+b3-1-B.d.R(B.d.an(b3,16)*(b5>>>16)+b6>>>0,b3),c0)
b4=B.d.aA(b7,c1)
p.f6(a7,p.bP(B.d.R(b7,c1),b2,b4),o,p.bP(a3,c5,c6))
case 4:++a3
s=3
break
case 5:case 1:return A.H(q,r)}})
return A.I($async$e7,r)},
ec(){if(this.ay)return
this.ax=null},
fe(a,b){var s,r,q=b.length,p=B.cG.hC(Math.min(q,64)),o=A.n2(p.a),n=t.L,m=n.a(A.c([q&255,q>>>8&255,q>>>16&255,q>>>24&255],t.t))
o.af(m,0,m.length,!1)
n.a(a)
o.af(a,0,a.length,!1)
o.au()
if(q<=64){B.i.b0(b,0,o.gbv())
return}m=o.gbv()
new Uint8Array(A.aJ(m))
B.i.b0(b,0,A.by(m,0,A.cO(32,"count",t.S),A.aT(m).i("R.E")))
s=q-32
a=new Uint8Array(A.aJ(m))
o.d3(null)
for(r=32;s>64;){n.a(a)
o.af(a,0,a.length,!1)
o.au()
B.i.b0(b,r,m)
r+=32
s-=32
B.i.b0(a,0,m)
o.d3(null)}if(B.d.R(q,64)!==0)o=A.n2(p.hC(s).a)
n.a(a)
o.af(a,0,a.length,!1)
o.au()
B.i.b0(b,r,o.gbv())},
iM(){var s,r,q=this.fg(),p=this.gd8(),o=J.DR(p,t.Dd)
for(s=J.hI(q),r=0;r<p;++r)o[r]=s.eQ(q,1024*r,256)
return o},
jH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=h-1
h=B.d.C(B.d.aA(i.gd8(),h),4)-1
s=i.bP(h,g,3)
for(r=s.length,q=0;q<g;++q){p=i.bP(h,q,3)
for(o=p.length,n=s.$flags|0,m=0;m<256;++m){if(!(m<r))return A.a(s,m)
l=s[m]
if(!(m<o))return A.a(p,m)
k=p[m]
n&2&&A.C(s)
s[m]=(l^k)>>>0}}j=new Uint8Array(i.d)
i.fe(J.bq(B.E.gab(s),s.byteOffset,s.byteLength),j)
return j}}
A.nt.prototype={
$0(){var s=this.a,r=4*s.a
return r*B.d.aA(s.b,r)},
$S:65}
A.nr.prototype={
fg(){var s,r=this,q=r.ch
if(q!=null)return q
r.ec()
s=r.gd8()
return r.ch=B.E.gab(new Uint32Array(256*s))},
ec(){if(this.ay)return
this.ch=null
this.ic()}}
A.f5.prototype={
dm(){return this},
hC(a){if(a===this.a)return this
return new A.f5(a)},
f3(a,b,c){var s,r=t.L
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
A.k_.prototype={
gbv(){var s,r=this,q=r.b
if(q===$){s=J.bq(B.E.gab(r.a),0,r.w)
r.b!==$&&A.fK()
r.b=s
q=s}return q},
gfs(){var s,r=this,q=r.d
if(q===$){s=J.bq(B.E.gab(r.c),0,null)
r.d!==$&&A.fK()
r.d=s
q=s}return q},
gcf(){return this.f},
gq(a){return this.e},
gf0(){return this.gbv()},
af(a,b,c,d){var s,r,q,p,o,n,m=this
t.L.a(a)
if(m.f)throw A.k(A.aq("Already closed"))
s=m.gfs()
r=m.e
for(q=J.an(a),p=b;p<c;++p){o=B.d.R(r,128)
if(o===0&&r>0){m.e=r
m.fD(!1)}n=q.h(a,p)
s.$flags&2&&A.C(s)
if(!(o<s.length))return A.a(s,o)
s[o]=n;++r}m.e=r
if(d)m.au()},
au(){var s,r,q,p=this
if(p.f)return
p.f=!0
s=p.e
if(s===0||B.d.R(s,128)!==0)for(r=B.d.R(s,128);r<128;++r){q=p.gfs()
q.$flags&2&&A.C(q)
if(!(r<q.length))return A.a(q,r)
q[r]=0}p.fD(!0)},
cT(){this.d3(null)},
fD(a){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.r,h=k.c
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
A.f2(i,0,8,16,24,h,s,B.p[q])
q=m+2
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+3
if(!(s<192))return A.a(B.p,s)
A.f2(i,2,10,18,26,h,q,B.p[s])
s=m+4
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+5
if(!(q<192))return A.a(B.p,q)
A.f2(i,4,12,20,28,h,s,B.p[q])
q=m+6
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+7
if(!(s<192))return A.a(B.p,s)
A.f2(i,6,14,22,30,h,q,B.p[s])
s=m+8
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+9
if(!(q<192))return A.a(B.p,q)
A.f2(i,0,10,20,30,h,s,B.p[q])
q=m+10
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+11
if(!(s<192))return A.a(B.p,s)
A.f2(i,2,12,22,24,h,q,B.p[s])
s=m+12
if(!(s<192))return A.a(B.p,s)
s=B.p[s]
q=m+13
if(!(q<192))return A.a(B.p,q)
A.f2(i,4,14,16,26,h,s,B.p[q])
q=m+14
if(!(q<192))return A.a(B.p,q)
q=B.p[q]
s=m+15
if(!(s<192))return A.a(B.p,s)
A.f2(i,6,8,18,28,h,q,B.p[s])}for(s=j.$flags|0,r=0;r<16;++r){q=j[r]
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
B.E.b0(s,0,B.dL)
r=s[0]
q=a==null
p=q?0:a.gq(0)<<8
s.$flags&2&&A.C(s)
s[0]=(r^16842752^p^n.w)>>>0
if(!q){o=a.gq(0)
if(o>64)throw A.k(A.b1(null,null))
r=t.L
r.a(a)
n.af(a,0,a.gq(0),!1)
q=B.d.R(o,128)
r=r.a(new Uint8Array(128-q))
n.af(r,0,r.length,!1)}},
$icC:1}
A.lT.prototype={}
A.i4.prototype={
eO(a,b){if($.eY()!==B.a1)A.f(A.aq("BigEndian systems are unsupported"))
return new A.kh(a,b,this.a)},
cH(){return A.DE(this.a)},
cL(a,b){return new A.nv(a,b)},
cM(a){if(a instanceof A.i8)return B.eP
return new A.i6(a)},
cp(){return B.bn},
eh(){return B.cB},
dq(){return new A.i9(this.a)}}
A.i5.prototype={
md(a){var s
t.L.a(a)
s=this.cP()
s.af(a,0,a.length,!0)
if(!s.gcf())A.f(A.aq("Not closed"))
return new A.en(new Uint8Array(A.aJ(s.gbv())))}}
A.f6.prototype={
m(a,b){t.L.a(b)
this.af(b,0,J.aD(b),!1)},
au(){this.af(B.A,0,0,!0)}}
A.nw.prototype={
b3(a,b){var s=0,r=A.J(t.c),q,p,o,n,m,l
var $async$b3=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:s=3
return A.r(a.b6(),$async$b3)
case 3:m=d
l=m.b
l=l!==B.U
if(l)A.f(A.x(m,"keyPairData",null))
l=b.b!==B.U
if(l)A.f(A.x(b,"remotePublicKey",null))
p=A.BV(m.gaN())
o=b.a
B.U.cF(p)
B.U.da(o)
n=new Uint8Array(32)
A.DH(n,p,new Uint8Array(A.aJ(o)))
q=new A.bp(new A.bs(n,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b3,r)}}
A.i7.prototype={
b4(a,b,c,d){var s=t.L
s.a(a)
s.a(c)
return this.ld(a,s.a(b),c,d)},
h6(a,b,c){return this.b4(a,B.A,b,c)},
ld(a,b,c,d){var s=0,r=A.J(t.Ep),q,p=this,o
var $async$b4=A.K(function(e,f){if(e===1)return A.G(f,r)
for(;;)switch(s){case 0:s=3
return A.r(p.bJ(b,c,d),$async$b4)
case 3:o=f
o.af(a,0,J.aD(a),!0)
s=4
return A.r(o.f_(),$async$b4)
case 4:q=f
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$b4,r)},
bJ(a,b,c){var s=t.L
s.a(b)
return this.mB(s.a(a),b,c)},
hr(a){return this.bJ(B.A,B.A,a)},
mB(a,b,c){var s=0,r=A.J(t.kk),q,p=this,o,n
var $async$bJ=A.K(function(d,e){if(d===1)return A.G(e,r)
for(;;)switch(s){case 0:o=a
n=b
s=3
return A.r(c.b6(),$async$bJ)
case 3:q=p.f3(o,n,e)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bJ,r)}}
A.cT.prototype={
f_(){return A.aV(this.ho(),t.Ep)},
ho(){if(!this.gcf())throw A.k(A.aq("Sink is not closed"))
return new A.d2(new Uint8Array(A.aJ(this.gf0())))},
$ibe:1,
$ib5:1,
$icC:1}
A.kk.prototype={
aP(a){return this.mz(t.L.a(a))},
mz(a){var s=0,r=A.J(t.gZ),q,p=this,o,n,m
var $async$aP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:if(J.aD(a)!==32)throw A.k(A.b1("Seed must have 32 bytes",null))
o=A
n=A
m=new A.bs(new Uint8Array(A.aJ(a)),!1)
s=3
return A.r(p.dJ(a),$async$aP)
case 3:q=o.aV(new n.d8(m,c,B.T),t.jC)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aP,r)},
aU(a,b,c){return this.i2(0,t.L.a(b),c)},
i2(a,a0,a1){var s=0,r=A.J(t.bu),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$aU=A.K(function(a2,a3){if(a2===1)return A.G(a3,r)
for(;;)switch(s){case 0:c=t.jC
s=3
return A.r(a1.b6(),$async$aU)
case 3:d=c.a(a3).gaN()
B.T.cF(d)
o=p.b
s=4
return A.r(o.aE(d),$async$aU)
case 4:n=a3.a
m=B.i.aK(n,0,32)
A.DG(m)
l=new Int32Array(16)
l=new A.aI(l)
l.dw(new Uint8Array(A.aJ(m)))
k=$.BK()
j=A.BU(A.kl(l,k))
B.T.da(j)
l=t.uw
i=new A.ln()
h=t.L
c=A
b=h
s=5
return A.r(o.aE(A.BS(A.c([B.i.dB(n,32),a0],l))),$async$aU)
case 5:n=c.mC(b.a(a3.a))
g=$.D8()
i.a=n.R(0,g)
f=A.BU(A.kl(i.hJ(),k))
c=A
b=h
s=6
return A.r(o.aE(A.BS(A.c([f,j,a0],l))),$async$aU)
case 6:h=c.mC(b.a(a3.a)).R(0,g).a_(0,A.mC(h.a(m)).R(0,g)).R(0,g)
l=i.a
l.toString
g=h.B(0,l).R(0,g)
e=A.LL(g,new Uint8Array(32))
o=A.B(f,t.S)
B.a.a1(o,e)
q=new A.fr(new Uint8Array(A.aJ(o)),new A.bE(j,B.T))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aU,r)},
bM(a,b){return this.n4(t.L.a(a),b)},
n4(a,b){var s=0,r=A.J(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$bM=A.K(function(a0,a1){if(a0===1)return A.G(a1,r)
for(;;)switch(s){case 0:g=b.b.a
f=b.a
B.T.da(g)
o=f.length
if(o!==64)A.f(A.aq("Ed25519 signature must be 64 bytes (got "+o+" bytes)"))
n=A.DF(g)
if(n==null){q=!1
s=1
break}m=B.i.aK(f,0,32)
l=A.DF(m)
if(l==null){q=!1
s=1
break}k=A.mC(B.i.dB(f,32))
o=$.D8()
if(k.l(0,o)>=0){q=!1
s=1
break}j=new A.ln()
e=j
d=A
c=t.L
s=3
return A.r(p.b.aE(A.BS(A.c([m,g,a],t.uw))),$async$bM)
case 3:e.a=d.mC(c.a(a1.a)).R(0,o)
o=new Int32Array(16)
o=new A.aI(o)
o.c3(k)
i=A.kl(o,$.BK())
h=A.kt()
A.BT(h,A.kl(j.hJ(),n),l,null)
q=i.lY(h)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bM,r)},
dJ(a){return this.kd(t.L.a(a))},
kd(a){var s=0,r=A.J(t.qC),q,p=this,o,n,m,l,k
var $async$dJ=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:m=Uint8Array
l=A
k=B.i
s=3
return A.r(p.b.aE(a),$async$dJ)
case 3:n=new m(l.aJ(k.aK(c.a,0,32)))
A.DG(n)
o=new Int32Array(16)
o=new A.aI(o)
o.dw(n)
q=new A.bE(A.BU(A.kl(o,$.BK())),B.T)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$dJ,r)}}
A.nu.prototype={
$2(a,b){return A.O(a)+J.aD(t.L.a(b))},
$S:196}
A.dv.prototype={
lY(a){var s,r,q,p,o=new Int32Array(16),n=new A.aI(o)
o=new Int32Array(16)
s=new A.aI(o)
o=this.a
r=a.c
n.ak(o,r)
q=this.c
p=a.a
s.ak(q,p)
n.bl(n,s)
if(!n.gdi())return!1
n.ak(o,r)
s.ak(q,p)
n.bl(n,s)
return n.gdi()}}
A.nH.prototype={
$0(){var s,r,q=null,p=new Int32Array(16),o=new A.aI(p)
o.c3(A.uC("46316835694926478169428394003475163141307993866256225615783033603165251855960",q))
p=new Int32Array(16)
s=new A.aI(p)
s.c3(A.uC("15112221349535400772501151409588531511454012693041857206046113283949847762202",q))
p=new Int32Array(16)
r=new A.aI(p)
r.ak(s,o)
return new A.dv(s,o,$.D7(),r)},
$S:217}
A.aI.prototype={
gdi(){return B.b4.b5(this.a,new A.tL())},
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
this.ey()},
hm(a){var s,r,q,p,o,n=this.a,m=a.a
for(s=n.length,r=m.length,q=15;q>=0;--q){if(!(q<s))return A.a(n,q)
p=n[q]
if(!(q<r))return A.a(m,q)
o=m[q]
if(p<o)return!1
if(p>o)return!0}return!0},
ak(a,b){A.cb(this.a,a.a,b.a)
this.ey()},
hv(a){this.c3(A.uC(a,null))},
f5(a,b){this.c3(a.aZ().mv(0,b.aZ(),$.GP()))},
c3(a){var s,r,q=this.a
if(a.a)throw A.k(A.b1("Negative",null))
for(s=0;s<16;++s){r=$.HE().dr(0,a).b_(0)
q.$flags&2&&A.C(q)
if(!(s<q.length))return A.a(q,s)
q[s]=r
a=a.c4(0,16)}},
dw(a){var s,r,q=J.jR(B.i.gab(a),a.byteOffset,32),p=this.a
for(s=0;s<16;++s){r=q.getUint16(2*s,!0)
p.$flags&2&&A.C(p)
if(!(s<p.length))return A.a(p,s)
p[s]=r}},
bl(a,b){var s,r,q,p,o,n,m,l,k=a.a,j=b.a,i=this.a,h=$.mO().a
for(s=h.length,r=k.length,q=j.length,p=i.$flags|0,o=0,n=0;n<16;++n){if(!(n<s))return A.a(h,n)
m=h[n]
if(!(n<r))return A.a(k,n)
l=k[n]
if(!(n<q))return A.a(j,n)
o=m+m+l-j[n]+B.d.an(o,16)
p&2&&A.C(i)
if(!(n<i.length))return A.a(i,n)
i[n]=o&65535}if(15>=i.length)return A.a(i,15)
s=i[15]
r=B.d.an(o,16)
p&2&&A.C(i)
i[15]=(s|r<<16)>>>0
this.ey()},
aZ(){var s,r,q,p="Invalid integer: ",o=this.a,n=$.bm()
for(s=o.length,r=0;r<16;++r){if(!(r<s))return A.a(o,r)
q=o[r]
if(q<0)throw A.k(A.aq(p+A.i(o)))
if(q>=65536)throw A.k(A.aq(p+A.i(o)))
n=n.hU(0,A.aB(q).b1(0,r*16))}return n},
hH(a){var s,r,q,p,o=this.a,n=J.jR(B.i.gab(a),a.byteOffset,32)
for(s=o.length,r=n.$flags|0,q=0;q<16;++q){if(!(q<s))return A.a(o,q)
p=o[q]
r&2&&A.C(n,10)
n.setUint16(2*q,p&65535,!0)}return a},
k(a){return"0x"+this.aZ().bL(0,16)},
ey(){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=s.$flags|0;this.hm($.mO());){if(0>=r)return A.a(s,0)
p=s[0]-65517
q&2&&A.C(s)
s[0]=p&65535
for(o=s.$flags|0,n=1;n<15;++n,p=m){if(!(n<r))return A.a(s,n)
m=s[n]-65535-(B.d.an(p,16)&1)
o&2&&A.C(s)
s[n]=m&65535}if(15>=r)return A.a(s,15)
l=s[15]
k=B.d.an(p,16)
o&2&&A.C(s)
s[15]=l-32767-(k&1)}}}
A.tL.prototype={
$1(a){return A.O(a)===0},
$S:223}
A.ln.prototype={
hJ(){var s,r=new Int32Array(16)
r=new A.aI(r)
s=this.a
s.toString
r.c3(s)
return r},
k(a){return"0x"+this.a.bL(0,16)}}
A.nv.prototype={
aX(a,b,c){var s=t.L
s.a(b)
return this.lN(s.a(a),b,c)},
lN(a3,a4,a5){var s=0,r=A.J(t.A0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$aX=A.K(function(a6,a7){if(a6===1)return A.G(a7,r)
for(;;)switch(s){case 0:f=p.a
a0=A
a1=A
a2=f
s=4
return A.r(a5.cI(),$async$aX)
case 4:s=3
return A.r(a2.h6(a7,a4,new A.bp(new A.bs(a4,!1),null)),$async$aX)
case 3:e=new a0.bp(new a1.bs(a7.a,!1),null)
d=f.gbe().ge0()
c=p.b
b=B.d.aA(c,d)
a=new Uint8Array(c)
o=t.t,n=J.an(a3),m=B.A,l=0
case 5:if(!(l<=b)){s=7
break}s=8
return A.r(f.hr(e),$async$aX)
case 8:k=a7
k.m(0,m)
if(n.gap(a3))k.m(0,a3)
k.m(0,A.c([1+l&255],o))
k.au()
s=9
return A.r(k.f_(),$async$aX)
case 9:m=a7.a
j=l*d
if(j+m.length<=c)B.i.b0(a,j,m)
else{i=c-j
h=A.aT(m)
g=new A.fu(m,0,i,h.i("fu<R.E>"))
g.iw(m,0,i,h.i("R.E"))
B.i.b0(a,j,g)}case 6:++l
s=5
break
case 7:q=new A.bp(new A.bs(a,!1),null)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aX,r)},
gdf(){return this.a},
ge6(){return this.b}}
A.i6.prototype={
f3(a,b,c){var s,r,q,p,o,n,m,l,k=t.L
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
n=new Uint8Array(A.aJ(p.gbv()))
p.cT()}A.EF(q,n,54)
p.af(q,0,r,!1)
B.i.aO(q,0,r,0)
o.cT()
A.EF(q,n,92)
o.af(q,0,r,!1)
B.i.aO(q,0,r,0)
if(l)A.D2(n)
return new A.m1(s,q,p,o)},
gbe(){return this.a}}
A.m1.prototype={
gcf(){return this.e},
gf0(){return this.d.gbv()},
af(a,b,c,d){var s,r,q=this
t.L.a(a)
if(q.e)throw A.k(A.aq("Sink is closed"))
s=q.c
s.af(a,b,c,d)
if(d){q.e=!0
r=s.gbv()
q.d.af(r,0,r.length,!0)}}}
A.m2.prototype={}
A.mv.prototype={}
A.i8.prototype={
cP(){var s=new Uint32Array(8),r=J.bq(B.E.gab(s),0,32),q=new DataView(new ArrayBuffer(64))
q=new A.m3(B.jR,q,new Uint32Array(64),s,r)
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
m.iL(a,b,c)
if(d){m.f=!0
s=m.b
r=m.r
s.$flags&2&&A.C(s,9)
s.setUint8(r,128);++r
if(r>56){for(;r<64;++r)s.setUint8(r,0)
m.eD()
r=0}for(;r<56;++r)s.setUint8(r,0)
q=8*m.w
s.setUint32(56,B.d.C(q,l),!1)
s.setUint32(60,B.d.R(q,l),!1)
m.eD()
p=m.e
if($.eY()!==B.aw)for(o=p.$flags|0,r=0;r<8;++r){n=p[r]
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
iL(a,b,c){var s,r,q,p,o,n,m=this
t.L.a(a)
s=J.an(a)
A.bQ(b,c,s.gq(a))
r=c-b
if(r===0)return
m.w+=r
q=m.b
p=m.r
for(o=q.$flags|0;b<c;++b){n=s.h(a,b)
o&2&&A.C(q,9)
q.setUint8(p,n);++p
if(p===64){m.eD()
p=0}}m.r=p},
eD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.d,a5=a3.c
if(a5===$){s=J.mQ(B.aC.gab(a3.b),0,null)
a3.c!==$&&A.fK()
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
for(a=i,p=0;p<64;++p,b=c,c=d,d=e,e=a1,f=g,g=h,h=a,a=a2){a0=b+(((e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25))>>>0)+((e&d^(4294967295^e)&c)>>>0)+B.J[p]+a4[p]>>>0
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
gbv(){return this.x}}
A.m4.prototype={}
A.kn.prototype={
ge1(){return B.eI}}
A.m5.prototype={}
A.m6.prototype={}
A.i9.prototype={
aP(a){return this.mA(t.L.a(a))},
mA(a){var s=0,r=A.J(t.gZ),q,p,o,n
var $async$aP=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:B.U.cF(a)
p=A.BV(a)
o=A.BV(p)
n=new Uint8Array(32)
A.DH(n,o,$.GE())
q=new A.d8(new A.bs(p,!1),new A.bE(n,B.U),B.U)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$aP,r)}}
A.ny.prototype={
$0(){var s=new Uint8Array(32)
s[0]=9
return s},
$S:247}
A.nx.prototype={
$0(){var s=new Int32Array(16)
s[0]=56129
s[1]=1
return s},
$S:253}
A.m7.prototype={}
A.uI.prototype={
bt(a,b){var s,r,q,p=t.L
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
r=(r^B.d.kC(p,o)^B.d.c4(p,16-o))>>>0}return r}}
A.P.prototype={
gbV(){var s,r,q,p=this,o=p.c
if(o===$){s=p.b
r=p.a
q=s>0?A.bZ(r,$.cQ().aT(s)):A.bZ(r.a_(0,$.cQ().aT(Math.abs(s))),null)
p.c!==$&&A.fK()
o=p.c=q}return o},
J(a,b){if(b==null)return!1
return b instanceof A.P&&this.l(0,b)===0},
gP(a){var s=this.gv()
return A.bx(s.a,s.b,B.t,B.t)},
k(a){var s=this.gv(),r=s.a,q=(r.a?r.S(0):r).k(0),p=s.b
if(p<=0)q+=B.b.a_("0",-p)
else{r=q.length
if(r<=p)q="0."+B.b.a_("0",p-r)+q
else{r-=p
q=B.b.X(q,0,r)+"."+B.b.ad(q,r)}}return this.a.a?"-"+q:q},
N(){return this.k(0)},
l(a,b){var s=A.DL(this,t.k5.a(b))
return s.a.a.l(0,s.b.a)},
B(a,b){var s=A.DL(this,b),r=s.a
return new A.P(r.a.B(0,s.b.a),r.b)},
a_(a,b){return new A.P(this.a.a_(0,b.a),this.b+b.b)},
c9(a,b){var s,r,q,p,o,n=this.b
if(a>=n)return this
s=$.cQ().aT(n-a)
n=this.a
r=n.aA(0,s)
q=n.mJ(0,s)
p=q.l(0,$.bm())
if(p!==0){o=n.a
if(b===B.bb){if(o)r=r.a9(0,$.jP())}else if(b===B.ej){if(!o)r=r.B(0,$.jP())}else if(b===B.bc){n=q.a?q.S(0):q
if(n.a_(0,$.Df()).l(0,s)>=0)r=r.B(0,o?$.jP().S(0):$.jP())}}return new A.P(r,a)},
aZ(){var s,r=this
A:{s=r.b
if(s>0){s=r.a.aA(0,$.cQ().aT(s))
break A}if(s<0){s=r.a.a_(0,$.cQ().aT(-s))
break A}s=r.a
break A}return s},
cm(a){var s,r=this
A:{s=r.b
if(s>0){s=$.cQ().aT(s)
s=r.a.cm(0)/s.cm(0)
break A}if(s<0){s=r.a.a_(0,$.cQ().aT(-s)).cm(0)
break A}s=r.a.cm(0)
break A}return s},
gee(){return this.b<=0?0:Math.max(this.gv().b,0)},
bz(a,b){var s,r,q,p
if(b===0)return this.c9(0,B.bc).aZ().k(0)
s=this.c9(b,B.bc)
r=s.aZ()
if(r.a)r=r.S(0)
q=$.GH()
p=s.a
if(p.a)p=p.S(0)
p=q.B(0,new A.P(p,s.b)).B(0,new A.P(r.S(0),0))
q=s.l(0,$.L())<0?"-":""
return q+r.k(0)+"."+B.b.ad(new A.P(p.a,p.b-b).k(0),1)},
gv(){var s,r=this,q=r.d
if(q===$){s=new A.nD(r).$0()
r.d!==$&&A.fK()
r.d=s
q=s}return q},
$iaZ:1}
A.nD.prototype={
$0(){var s,r=this.a,q=$.L(),p=r.l(0,q)
if(p===0)return q
for(;;){q=r.a
p=$.cQ()
s=q.R(0,p).l(0,$.De())
if(s===0){if(p.c===0)A.f(B.Y)
r=new A.P(q.bB(p),r.b-1)}else break}return r},
$S:267}
A.tC.prototype={
$1(a){return a.a.aA(0,a.b)},
$S:264}
A.hz.prototype={
U(){return"_Rounding."+this.b}}
A.cE.prototype={
gP(a){return A.bx(this.a,this.b,B.t,B.t)},
J(a,b){var s,r
if(b==null)return!1
s=!1
if(b instanceof A.cE){r=this.a.l(0,b.a)
if(r===0)s=this.b.l(0,b.b)===0}return s},
k(a){var s,r=this.a,q=r.l(0,$.hR())
if(q===0)return"0"
q=this.b
s=q.l(0,$.hS())
if(s===0)return r.k(0)
else return r.k(0)+"/"+q.k(0)},
l(a,b){t.Fx.a(b)
return this.a.a_(0,b.b).l(0,b.a.a_(0,this.b))},
a_(a,b){return A.bZ(this.a.a_(0,b.a),this.b.a_(0,b.b))},
R(a,b){var s,r,q,p,o=this.ds(0,b)
o=A.bZ(o.a.aA(0,o.b),null).a_(0,b)
s=this.a
r=o.b
q=this.b
p=A.bZ(s.a_(0,r).a9(0,o.a.a_(0,q)),q.a_(0,r))
o=$.HO()
if(p.J(0,o))return o
r=$.hR()
if(s.l(0,r)<0){o=b.a
o=o.l(0,r)<0?A.bZ(o.S(0),b.b):b}s=o.b
r=p.b
return A.bZ(p.a.a_(0,s).B(0,o.a.a_(0,r)),r.a_(0,s))},
ds(a,b){return A.bZ(this.a.a_(0,b.b),this.b.a_(0,b.a))},
f9(a){var s=this.a,r=$.hR(),q=s.l(0,r)<0?A.bZ(s.S(0),this.b):this,p=$.HP(),o=q.a_(0,p),n=q.a.aA(0,q.b)
if(o.R(0,p).l(0,$.HQ())>=0)n=n.B(0,$.hS())
return s.l(0,r)<0?n.S(0):n},
aT(a){var s=this.a,r=this.b
return B.d.gdh(a)?A.bZ(r,s).aT(-a):A.bZ(s.aT(a),r.aT(a))},
$iaZ:1}
A.cd.prototype={
U(){return"AccountKind."+this.b}}
A.dk.prototype={
U(){return"AccountSubtype."+this.b}}
A.br.prototype={
gaR(){var s=this.d
return s===B.M||s===B.Q||s===B.x},
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
return A.jU(f.z,f.Q,d,s,f.r,h,l,f.e,m,b,f.a,j,f.c,c,q,i,p,g,f.db,f.dx,f.cx,f.cy,r,a,n,o,k)},
hb(a){var s=null
return this.bY(s,s,s,!1,!1,a,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
hc(a){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,a,s,s,s,s,s,s,s,s)},
ln(a){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,a,s,s,s,s,s,s,s,s,s,s,s,s,s)},
lB(a,b,c){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,a,s,s,s,s,s,s,s,s,b,c,s,s)},
ly(a,b){var s=null
return this.bY(s,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,a,b,s,s)},
lu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=null
return this.bY(a,b,c,!1,d,!1,e,f,g,h,i,j,!1,s,s,k,l,s,m,n,o,p,q,s,s,r,s)},
lE(a,b,c,d,e,f){var s=null
return this.bY(s,s,s,a,!1,!1,!1,b,!1,c,!1,!1,d,s,s,s,s,e,s,s,s,s,s,s,s,s,f)},
ll(a){var s=null
return this.bY(a,s,s,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
hP(a,b){return this.kZ(a,b,!1,this.w,this.ay)},
hO(a,b,c){var s=c==null,r=s?null:c.a
return this.kY(r,s?null:c.b,!0,a,b)},
n6(a,b){return this.hO(a,b,null)},
h2(a,b,c,d,e,f,g){var s=this,r=!e,q=r?c:s.cx,p=r?d:s.cy,o=e?a:s.db,n=e?b:s.dx
return A.jU(s.z,s.Q,s.b,s.x,s.r,s.fy,s.CW,s.e,s.ch,s.f,s.a,s.fr,s.c,s.d,s.as,s.fx,s.at,s.go,o,n,q,p,s.y,f,g,s.ax,s.dy)},
kY(a,b,c,d,e){return this.h2(a,b,null,null,c,d,e)},
kZ(a,b,c,d,e){return this.h2(null,null,a,b,c,d,e)},
N(){var s,r=this,q=A.v(t.N,t.X)
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
A.vR.prototype={
$1(a){var s
A.m(a)
if(a!=null){s=$.HD()
s=s.b.test(a)}else s=!1
return s},
$S:59}
A.c8.prototype={
cj(a){var s=this
return new A.c8(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q)}}
A.mW.prototype={}
A.z9.prototype={
$1(a){t.W.a(a)
return B.ed.u(0,a.y.a)&&a.w.l(0,this.a)>=0},
$S:1}
A.Be.prototype={
$2(a,b){var s=t.h
return s.a(a).l(0,s.a(b))},
$S:67}
A.Bl.prototype={
$1(a){var s
t.v.a(a)
s=this.a
return a.b===s.a&&a.d.l(0,s.w)>=0},
$S:9}
A.Bm.prototype={
$2(a,b){var s=t.v
return s.a(a).d.l(0,s.a(b).d)},
$S:21}
A.Bn.prototype={
$1(a){t.v.a(a)
return a.b===this.a.a&&a.r!=null},
$S:9}
A.Bo.prototype={
$1(a){return t.W.a(a).x.l(0,this.a.w)>=0},
$S:1}
A.Bp.prototype={
$1(a){return t.W.a(a).w.l(0,this.a)>0},
$S:1}
A.cn.prototype={}
A.BA.prototype={
$1(a){return A.O(a)+1},
$S:40}
A.BB.prototype={
$0(){return 1},
$S:65}
A.BC.prototype={
$2(a,b){var s=t.dK
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:246}
A.eH.prototype={
U(){return"StartFromKind."+this.b}}
A.hn.prototype={
N(){var s,r=this,q=A.v(t.N,t.X)
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
gP(a){return A.bx(this.a,this.b,B.t,B.t)}}
A.eJ.prototype={
U(){return"StatementSource."+this.b}}
A.fs.prototype={
U(){return"StatementFormat."+this.b}}
A.dX.prototype={
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
return A.bx(s.a,s.b,s.c,s.d)},
k(a){return"StatementSetup("+this.N().k(0)+")"}}
A.dw.prototype={
U(){return"FactPart."+this.b}}
A.kf.prototype={
N(){var s=this,r=s.f,q=t.N
return A.S(["id",s.a,"subject",s.b,"field",s.c,"value",s.d,"type",s.e,"source",A.S(["file",r.a,"location",r.b,"span",r.c],q,t.K),"fileDate",s.r.k(0),"confirmedOn",s.w.k(0)],q,t.X)}}
A.yo.prototype={
$1(a){return t.eG.a(a).b===this.a.e},
$S:245}
A.yp.prototype={
$1(a){A.b(a)
return $.eZ().aM(0,a).gq(0)>=9||A.zs(a)!==a},
$S:6}
A.vy.prototype={
$1(a){var s,r
A.b(a)
s=A.D("[A-Za-z0-9]",!0,!1)
if(s.b.test(a)){s=this.a
r=s.a
if(r>0){s.a=r-1
return a}return"X"}return a},
$S:11}
A.vB.prototype={
$1(a){var s,r=a.du(0)
r.toString
s=A.D("\\D",!0,!1)
if(!(A.ao(r,s,"").length<6))r=A.Ff(r)
return r},
$S:15}
A.zt.prototype={
$1(a){var s=a.du(0)
s.toString
return A.Ff(s)},
$S:15}
A.tA.prototype={}
A.cg.prototype={
dA(a){var s,r,q,p=this,o=p.z
if(o!=null)return o===B.bh?B.cw:B.bl
if(!p.x)return B.cv
s=p.w
r=s!=null
if(r&&s.a.a.ga8(0)===0)return B.bk
q=p.f
if(p.Q&&q!=null&&q.aa(a)>2*p.as)return B.bm
if(r&&q!=null&&a.l(0,q)>0)return B.aF
return p.r.a.a.ga8(0)>0?B.bj:B.bi}}
A.cf.prototype={
U(){return"BillStatus."+this.b}}
A.ej.prototype={
U(){return"BillMark."+this.b}}
A.xD.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.y){s=this.a
s=s==null||a.a===s}else s=!1
return s},
$S:2}
A.xE.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.xF.prototype={
$1(a){return t.v.a(a).b===this.a.a},
$S:9}
A.xG.prototype={
$2(a,b){var s=t.v
return s.a(a).d.l(0,s.a(b).d)},
$S:21}
A.xH.prototype={
$1(a){t.W.a(a)
return a.d===B.X&&a.e===B.m},
$S:1}
A.xI.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.xJ.prototype={
$1(a){t.dh.a(a)
return a.b===this.a.a&&this.b.i9(a)==null},
$S:22}
A.xL.prototype={
$1(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(p.l(0,a)>0)return p}return null},
$S:235}
A.xK.prototype={
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
$S:75}
A.vL.prototype={
$2(a,b){return t.B.a(a).B(0,t.W.a(b).f)},
$S:77}
A.vp.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.y){s=A.D("[^A-Z0-9]",!0,!1)
s=A.ao(a.c.toUpperCase(),s,"")===this.a}else s=!1
return s},
$S:2}
A.vq.prototype={
$1(a){var s,r,q,p=this
t.W.a(a)
if(a.d!==B.X||a.e!==B.k)return!1
if(a.ch!=null||a.cx!=null)return!1
s=p.a
r=s.gK().h(0,a.c)
r=r==null?null:r.gaR()
if(r!==!0)return!1
r=p.b
q=A.F(r)
if(new A.n(r,q.i("j(1)").a(new A.vm(a)),q.i("n<1>")).gq(0)!==1||p.c.e!==a.f.b)return!1
r=A.c([a.z],t.q)
for(s=s.e5(a.a),q=J.Q(s.a),s=new A.N(q,s.b,s.$ti.i("N<1>"));s.n();)r.push(q.gt().z)
return new A.ah(r,t.tx.a(new A.vn()),t.BA).M(0,new A.vo(p.d))},
$S:1}
A.vm.prototype={
$1(a){return t.b.a(a).e===this.a.f.b},
$S:2}
A.vn.prototype={
$1(a){var s,r
A.m(a)
s=a==null?"":a
r=A.D("[^A-Z0-9]",!0,!1)
return A.ao(s.toUpperCase(),r,"")},
$S:34}
A.vo.prototype={
$1(a){return B.b.u(A.b(a),this.a)},
$S:6}
A.cJ.prototype={
cj(a){var s=this
return new A.cJ(s.a,a,s.c,s.d,s.e,s.f,s.r,s.w)}}
A.u8.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.a2(A.ad(A.b(s)),this.b)}return s},
$S:89}
A.u7.prototype={
$1(a){var s=this.a
if(s.h(0,a)==null)s=null
else{s=s.h(0,a)
s.toString
s=A.aw(A.b(s))}return s},
$S:90}
A.k0.prototype={}
A.eK.prototype={
U(){return"SubscriptionKind."+this.b}}
A.ek.prototype={
U(){return"BillingCycle."+this.b}}
A.hq.prototype={}
A.iS.prototype={
glZ(){return this.a.B(0,this.b).a9(0,this.c)},
N(){return A.S(["rent",this.a.N(),"gst",this.b.N(),"tds",this.c.N()],t.N,t.X)}}
A.eq.prototype={}
A.cX.prototype={}
A.lo.prototype={}
A.bX.prototype={
U(){return"IndiaTaxKind."+this.b}}
A.kI.prototype={}
A.ly.prototype={}
A.lz.prototype={}
A.n3.prototype={
eY(a){var s,r
for(s=this.d,s=new A.ab(s,A.o(s).i("ab<1,2>")).gA(0);s.n();){r=s.d
if(J.Dn(r.b,a))return r.a}return null}}
A.vW.prototype={
$1(a){return typeof a=="string"&&this.a.aG(a)!=null},
$S:28}
A.vX.prototype={
$1(a){t.B.a(a)
return a.b!==this.a||a.a.a.ga8(0)<0},
$S:233}
A.vY.prototype={
$1(a){return t.nq.a(a).b===this.a.h(0,"kind")},
$S:221}
A.bW.prototype={}
A.xR.prototype={
$2(a,b){var s,r=t.o4
r.a(a)
r.a(b)
s=a.e.l(0,b.e)
return s!==0?s:B.d.l(a.r,b.r)},
$S:220}
A.y_.prototype={
$1(a){return t.o4.a(a).y===this.a},
$S:206}
A.y0.prototype={
$2(a,b){return A.O(a)+t.o4.a(b).x},
$S:205}
A.ch.prototype={
N(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"description",r.a)
q.j(0,"quantity",r.b.k(0))
q.j(0,"unitPrice",r.c)
q.j(0,"amount",r.d)
s=r.e
if(s!=null)q.j(0,"gst",s)
return q}}
A.dr.prototype={
gfh(){var s,r,q=this
if(q.cx==="SGD"||q.y==null||q.cy==null)s=null
else{s=A.aB(q.z)
r=q.cy
r.toString
r=new A.P(s,0).a_(0,r).B(0,A.ad("0.5")).c9(0,B.bb).aZ().b_(0)
s=r}return s},
gcZ(){return B.a.a5(this.x,0,new A.nm(),t.S)},
gi7(){var s=this.x,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.nk()),r.i("n<1>")).a5(0,0,new A.nl(),t.S)},
gn9(){var s=this.x,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.nn()),r.i("n<1>")).a5(0,0,new A.no(),t.S)},
fd(){var s,r,q,p,o=this,n=A.v(t.N,t.X)
n.j(0,"draftId",o.a)
n.j(0,"bookId",o.b)
n.j(0,"customerId",o.c)
n.j(0,"date",o.d.k(0))
n.j(0,"due",o.e.k(0))
n.j(0,"seriesId",o.f)
n.j(0,"seq",o.r)
n.j(0,"number",o.w)
s=A.c([],t.bk)
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
$S:29}
A.nk.prototype={
$1(a){return t.E.a(a).e==="standard"},
$S:35}
A.nl.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:29}
A.nn.prototype={
$1(a){return t.E.a(a).e==="zero-rated"},
$S:35}
A.no.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:29}
A.yj.prototype={
$2(a,b){var s=t.u
return B.b.l(s.a(a).b,s.a(b).b)},
$S:23}
A.ze.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.ax(a.c.h(0,"date"))
r.toString
s=A.ax(b.c.h(0,"date"))
s.toString
return r.l(0,s)},
$S:23}
A.xU.prototype={
$2(a,b){var s,r=t.nl
r.a(a)
r.a(b)
s=b.d.l(0,a.d)
return s!==0?s:B.d.l(b.r,a.r)},
$S:202}
A.xS.prototype={
$1(a){var s=A.m(t.u.a(a).c.h(0,"gst"))
return(s==null?"standard":s)==="standard"},
$S:24}
A.xT.prototype={
$1(a){return t.u.a(a).av("unitPrice").b!==this.a},
$S:24}
A.ye.prototype={
$1(a){return t.E.a(a).e==="standard"},
$S:35}
A.yf.prototype={
$2(a,b){return A.O(a)+t.E.a(b).d},
$S:29}
A.fS.prototype={
k(a){return"CrossBookDiscrepancy("+this.a+": "+this.b+")"}}
A.y5.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.y6.prototype={
$2(a,b){A.b(a)
return!J.Dm(t.C.a(b),new A.y4())},
$S:194}
A.y4.prototype={
$1(a){var s
t.W.a(a)
s=!0
if(a.at==null)if(a.ax==null){s=a.d
s=s===B.a0||s===B.a_}return s},
$S:1}
A.y7.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i
A.b(a)
t.C.a(b)
s=J.aX(b)
r=s.bN(b,new A.y1())
q=A.B(r,r.$ti.i("h.E"))
r=s.bN(b,new A.y2())
p=A.B(r,r.$ti.i("h.E"))
s=s.bN(b,new A.y3())
o=A.B(s,s.$ti.i("h.E"))
s=q.length
if(s!==1||p.length!==1){B.a.m(this.a,new A.fS(a,""+s+" advance(s) and "+p.length+" expense(s); expected one of each"))
return}s=B.a.gaQ(q).f
if(!s.J(0,B.a.gaQ(p).f)){B.a.m(this.a,new A.fS(a,"advance "+s.k(0)+" but expense "+B.a.gaQ(p).f.k(0)))
return}n=A.a2($.L(),s.b)
for(r=o.length,m=0;m<o.length;o.length===r||(0,A.l)(o),++m){l=o[m].f
k=l.b
j=n.b
if(k!==j)A.f(A.a6(j,k))
l=n.a.B(0,l.a)
n=new A.q(l,j)
i=B.e.h(0,j)
if(i==null)A.f(A.x(j,"currency","is not a supported currency"))
if((l.b<=0?0:Math.max(l.gv().b,0))>i)A.f(A.y(j+" allows "+A.i(i)+" decimal places",l.k(0),null))}if(s.a9(0,n).a.a.ga8(0)<0)B.a.m(this.a,new A.fS(a,"settled "+n.k(0)+" against an advance of "+s.k(0)))},
$S:193}
A.y1.prototype={
$1(a){return t.W.a(a).d===B.a0},
$S:1}
A.y2.prototype={
$1(a){return t.W.a(a).d===B.n},
$S:1}
A.y3.prototype={
$1(a){return t.W.a(a).d===B.a_},
$S:1}
A.dF.prototype={
U(){return"InvoiceState."+this.b}}
A.dG.prototype={}
A.zf.prototype={
$1(a){return t.W.a(a).ax!=null},
$S:1}
A.zg.prototype={
$2(a,b){var s=t.qn
s.a(a)
return s.a(b).a.e.l(0,a.a.e)},
$S:187}
A.vO.prototype={
$1(a){return A.b(a).length>=2},
$S:6}
A.vs.prototype={
$1(a){return A.m(t.u.a(a).c.h(0,"invoiceId"))===this.a},
$S:24}
A.y8.prototype={
$1(a){t.W.a(a)
return a.d===B.a0&&a.ch!=null},
$S:1}
A.bK.prototype={}
A.cY.prototype={
U(){return"ForecastSource."+this.b}}
A.bn.prototype={
gi3(){var s=this.f
return this.r===B.m?s:A.a2($.L(),s.b).a9(0,s)}}
A.bN.prototype={}
A.nI.prototype={}
A.di.prototype={
is(b4,b5,b6,b7,b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="currency",b2="is not a supported currency",b3=a9.c
if(b3==null)return
for(s=[!0,!1],r=a9.x,q=a9.b,p=a9.a.e,o=q.a,n=q.b,m=q.c,l=t.g,k=a9.f,j=k.b,k=k.a,i=b3.b,h=j!==i,b3=b3.a,g=i+" allows ",f=0;f<2;++f){e=s[f]
d=A.c([],l)
if(h)A.f(A.a6(i,j))
c=b3.B(0,k)
b=new A.q(c,i)
a=B.e.h(0,i)
if(a==null)A.f(A.x(i,b1,b2))
if((c.b<=0?0:Math.max(c.gv().b,0))>a)A.f(A.y(g+A.i(a)+" decimal places",c.k(0),b0))
for(c=!e,a0=0;a0<31;++a0){a1=A.ay(o,n,m).aw(864e8*a0)
a2=new A.z(A.b0(a1),A.b4(a1),A.au(a1))
for(a3=r.length,a4=0;a4<r.length;r.length===a3||(0,A.l)(r),++a4){a5=r[a4]
if(a5.x)a6=c&&a5.b===B.cK||a5.f.b!==p
else a6=!0
if(a6)continue
a6=a5.e
if((a6.l(0,q)<0?q:a6).J(0,a2)){a6=a5.f
if(!(a5.r===B.m)){a7=a6.b
a8=$.L()
a=B.e.h(0,a7)
if(a==null)A.f(A.x(a7,b1,b2))
if((a8.b<=0?0:Math.max(a8.gv().b,0))>a)A.f(A.y(a7+" allows "+A.i(a)+" decimal places",a8.k(0),b0))
a6=a6.a
a6=a8.B(0,new A.P(a6.a.S(0),a6.b))
a8=new A.q(a6,a7)
a=B.e.h(0,a7)
if(a==null)A.f(A.x(a7,b1,b2))
if((a6.b<=0?0:Math.max(a6.gv().b,0))>a)A.f(A.y(a7+" allows "+A.i(a)+" decimal places",a6.k(0),b0))
a6=a8}a7=a6.b
a8=b.b
if(a7!==a8)A.f(A.a6(a8,a7))
a6=b.a.B(0,a6.a)
b=new A.q(a6,a8)
a=B.e.h(0,a8)
if(a==null)A.f(A.x(a8,b1,b2))
if((a6.b<=0?0:Math.max(a6.gv().b,0))>a)A.f(A.y(a8+" allows "+A.i(a)+" decimal places",a6.k(0),b0))}}B.a.m(d,b)}if(e)a9.y=d}}}
A.nK.prototype={
lg(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g="currency",f="is not a supported currency",e=this.c,d=A.F(e),c=d.i("n<1>"),b=A.B(new A.n(e,d.i("j(1)").a(new A.nL(a)),c),c.i("h.E"))
e=A.c([],t.g)
for(d=t.B,c=this.d,s=A.F(c),r=s.i("j(1)"),s=s.i("n<1>"),q=a+" allows ",p=0;p<31;++p){o=$.L()
n=B.e.h(0,a)
if(n==null)A.f(A.x(a,g,f))
m=o.b<=0
if((m?0:Math.max(o.gv().b,0))>n)A.f(A.y(q+A.i(n)+" decimal places",o.k(0),h))
l=B.a.a5(b,new A.q(o,a),new A.nM(p),d)
k=r.a(new A.nN(this,a,p))
n=B.e.h(0,a)
if(n==null)A.f(A.x(a,g,f))
if((m?0:Math.max(o.gv().b,0))>n)A.f(A.y(q+A.i(n)+" decimal places",o.k(0),h))
k=new A.n(c,k,s).a5(0,new A.q(o,a),new A.nO(),d)
j=k.b
i=l.b
if(j!==i)A.f(A.a6(i,j))
l=l.a.B(0,k.a)
n=B.e.h(0,i)
if(n==null)A.f(A.x(i,g,f))
if((l.b<=0?0:Math.max(l.gv().b,0))>n)A.f(A.y(i+" allows "+A.i(n)+" decimal places",l.k(0),h))
k=new A.q(o,a)
n=B.e.h(0,a)
if(n==null)A.f(A.x(a,g,f))
if((m?0:Math.max(o.gv().b,0))>n)A.f(A.y(q+A.i(n)+" decimal places",o.k(0),h))
o=k
m=o.b
if(m!==i)A.f(A.a6(i,m))
o=o.a
o=l.B(0,new A.P(o.a.S(0),o.b))
n=B.e.h(0,i)
if(n==null)A.f(A.x(i,g,f))
if((o.b<=0?0:Math.max(o.gv().b,0))>n)A.f(A.y(i+" allows "+A.i(n)+" decimal places",o.k(0),h))
e.push(new A.q(o,i))}return e},
mg(a){return B.a.M(this.c,new A.nP(a))}}
A.nL.prototype={
$1(a){t.ov.a(a)
return a.a.e===this.a&&a.y.length!==0},
$S:37}
A.nM.prototype={
$2(a,b){var s,r
t.B.a(a)
s=t.ov.a(b).y
r=this.a
if(!(r<s.length))return A.a(s,r)
return a.B(0,s[r])},
$S:185}
A.nN.prototype={
$1(a){var s,r
t.Fj.a(a)
s=!1
if(a.x)if(a.f.b===this.b){s=this.a.a
r=a.e
if(r.l(0,s)<0)r=s
s=r.l(0,s.aC(this.c))<=0}return s},
$S:180}
A.nO.prototype={
$2(a,b){return t.B.a(a).B(0,t.Fj.a(b).gi3())},
$S:173}
A.nP.prototype={
$1(a){var s
t.ov.a(a)
if(a.a.e===this.a)s=a.c==null||a.w
else s=!1
return s},
$S:37}
A.lg.prototype={}
A.AK.prototype={
$1(a){return B.b.l(t.AB.a(a).x,this.a)<=0},
$S:38}
A.AL.prototype={
$0(){return B.a.ga0(this.a)},
$S:165}
A.AM.prototype={
$1(a){return A.b(a).length!==0},
$S:6}
A.AN.prototype={
$1(a){var s,r,q,p=this
t.W.a(a)
if(a.c!==p.a.d||a.e!==p.b||p.c.u(0,a.a))return!1
s=p.d.aa(a.w)
if(s<-5||s>5)return!1
r=a.z
if(r==null)r=""
r=B.b.bR(r.toUpperCase(),A.D("[^A-Z0-9]+",!0,!1))
q=A.C8(r,A.F(r).c)
r=p.f
return r.length!==0&&B.a.b5(r,q.geT(q))},
$S:1}
A.AO.prototype={
$2(a,b){var s=t.W
s.a(a)
s.a(b)
s=this.a
return B.d.l(Math.abs(s.aa(a.w)),Math.abs(s.aa(b.w)))},
$S:7}
A.yN.prototype={
$1(a){var s
t.b.a(a)
if(a.r==="personal"){s=a.d
s=s===B.M||s===B.Q}else s=!1
return s},
$S:2}
A.yO.prototype={
$2(a,b){var s,r=t.b
r.a(a)
r.a(b)
r=a.e==="SGD"?0:1
s=B.d.l(r,b.e==="SGD"?0:1)
return s!==0?s:B.b.l(a.b,b.b)},
$S:8}
A.yP.prototype={
$0(){return A.c([],t.F)},
$S:164}
A.yT.prototype={
$2(a,b){var s=this.a.h(0,a),r=s==null?null:s.d
return r!=null&&b.l(0,r)>0},
$S:162}
A.yQ.prototype={
$1(a){t.b.a(a)
return a.d===B.o&&a.as!=null},
$S:2}
A.yR.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.yS.prototype={
$2(a,b){var s,r,q=t.Fj
q.a(a)
q.a(b)
q=this.a
s=a.e
if(s.l(0,q)<0)s=q
r=b.e
return s.l(0,r.l(0,q)<0?q:r)},
$S:155}
A.ym.prototype={
$1(a){return t.b.a(a).w.l(0,B.a.ga0(this.a).a)>0},
$S:2}
A.yn.prototype={
$1(a){var s
t.sH.a(a)
s=this.a.x
return s.l(0,a.a)>=0&&s.l(0,a.b)<=0},
$S:76}
A.eA.prototype={
U(){return"PlannedKind."+this.b}}
A.bo.prototype={
N(){var s,r=this,q=A.v(t.N,t.X)
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
A.iP.prototype={}
A.eB.prototype={
U(){return"PlannedOutcomeKind."+this.b}}
A.c1.prototype={
N(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"id",r.a)
q.j(0,"payee",r.b)
q.j(0,"fromAccountId",r.c)
q.j(0,"dayOfMonth",r.d)
s=r.e
q.j(0,"typicalAmount",s==null?null:s.N())
s=r.f
if(s!=null)q.j(0,"categoryId",s)
return q}}
A.dz.prototype={
U(){return"GiroOutcomeKind."+this.b}}
A.il.prototype={}
A.nR.prototype={}
A.dA.prototype={
U(){return"GiroStatus."+this.b}}
A.fa.prototype={
U(){return"GiroAmountFrom."+this.b}}
A.dy.prototype={}
A.nS.prototype={}
A.vP.prototype={
$1(a){return A.b(a).length!==0},
$S:6}
A.z_.prototype={
$2(a,b){var s=t.rv
return B.b.l(s.a(a).a,s.a(b).a)},
$S:154}
A.z0.prototype={
$1(a){t.W.a(a)
return a.c===this.a.c&&a.e===B.k},
$S:1}
A.z1.prototype={
$1(a){var s,r
t.W.a(a)
s=A.c([a.z],t.q)
r=this.b.h(0,a.a)
if(r!=null)B.a.a1(s,r)
return A.Lf(this.a,s)},
$S:1}
A.z2.prototype={
$1(a){var s
t.W.a(a)
if(this.b.u(0,a.a))return!1
s=this.a.a.aa(a.w)
return s>=-5&&s<=5},
$S:1}
A.z3.prototype={
$2(a,b){var s,r,q=t.W
q.a(a)
q.a(b)
q=this.a
s=Math.abs(q.a.aa(a.w))
r=Math.abs(q.a.aa(b.w))
return s!==r?B.d.l(s,r):B.b.l(a.a,b.a)},
$S:7}
A.z4.prototype={
$2(a,b){var s,r=t.vS
r.a(a)
r.a(b)
s=a.d.l(0,b.d)
return s!==0?s:B.b.l(a.a.a,b.a.a)},
$S:151}
A.lE.prototype={
N(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"ya",r.a)
q.j(0,"assessed",r.b.N())
s=r.c
if(s!=null)q.j(0,"giroId",s)
s=r.d
if(s!=null)q.j(0,"firstMonth",s)
s=r.e
if(s!=null)q.j(0,"instalments",s)
return q}}
A.Bq.prototype={
$1(a){return a!=null},
$S:28}
A.Br.prototype={
$1(a){return a==null},
$S:28}
A.tH.prototype={}
A.mY.prototype={}
A.vT.prototype={
$1(a){return t.p0.a(a).d},
$S:79}
A.vU.prototype={
$1(a){var s=this.a.hk(t.b.a(a).c)
s=s==null?null:s.a
return s===this.b.a},
$S:2}
A.vV.prototype={
$1(a){t.b.a(a)
return B.a.M(A.aC(this.a.fx,t.v),new A.vS(a))},
$S:2}
A.vS.prototype={
$1(a){var s
t.v.a(a)
s=this.a
return a.b===s.a&&a.r!=null&&a.d.l(0,s.w)>=0},
$S:9}
A.dl.prototype={
U(){return"AlertChannel."+this.b}}
A.cS.prototype={
U(){return"CoverageLevel."+this.b}}
A.fc.prototype={
N(){var s=this
return A.S(["code",s.a,"name",s.b,"country",s.c,"first",s.d,"caveats",s.e,"offersCsv",s.f],t.N,t.X)}}
A.ka.prototype={}
A.fn.prototype={}
A.cz.prototype={
U(){return"IntakeStatus."+this.b}}
A.fd.prototype={}
A.vh.prototype={
$1(a){return t.b.a(a).a===this.a.aW(this.b)},
$S:2}
A.xX.prototype={
$1(a){t.v.a(a)
return this.a.aW(a.b)===this.b&&a.d.l(0,this.c)>=0},
$S:9}
A.dD.prototype={
U(){return"IntakeChannel."+this.b}}
A.o6.prototype={
N(){var s=this,r=t.D.i("bf.S").a(s.e)
return A.S(["algorithm",s.a,"memoryKiB",s.b,"iterations",s.c,"parallelism",s.d,"salt",B.K.gaH().O(r)],t.N,t.X)}}
A.hu.prototype={
k(a){return"WrongSecret"}}
A.tW.prototype={
N(){var s,r=t.D.i("bf.S"),q=r.a(this.a)
q=B.K.gaH().O(q)
s=r.a(this.b)
s=B.K.gaH().O(s)
r=r.a(this.c)
return A.S(["nonce",q,"cipherText",s,"mac",B.K.gaH().O(r)],t.N,t.X)}}
A.o7.prototype={
N(){var s=this
return A.S(["passphraseKdf",s.a.N(),"recoveryKdf",s.b.N(),"byPassphrase",s.c.N(),"byRecovery",s.d.N()],t.N,t.X)}}
A.w9.prototype={
$1(a){return t.b.a(a).r===this.a},
$S:2}
A.wa.prototype={
$1(a){return t.b.a(a).e==="SGD"},
$S:2}
A.ky.prototype={}
A.n0.prototype={}
A.E.prototype={}
A.nG.prototype={}
A.bu.prototype={}
A.tM.prototype={}
A.h6.prototype={
hk(a){var s=this.x.a,r=s.h(0,a)
if(r==null)r=s.h(0,A.hK(a))
if(r==null){r=A.o(s).i("M<2>")
r=A.aN(new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.oF(a)),r.i("n<h.E>")),t.p0)
s=r}else s=r
return s},
ghy(){var s,r,q,p,o,n=A.v(t.N,t.to)
for(s=this.as.a,s=new A.ab(s,A.o(s).i("ab<1,2>")).gA(0),r=t.AB;s.n();){q=s.d
p=q.a
o=A.d1(q.b,!1,r)
o.$flags=3
n.j(0,p,o)}return n},
gK(){var s,r,q,p
if(this.gkk()===0)s=A.a5(this.r,t.N,t.b)
else{s=t.z
s=A.v(s,s)
for(r=this.r.a,r=new A.ab(r,A.o(r).i("ab<1,2>")).gA(0);r.n();){q=r.d
p=q.b
if(p.cx==null)s.j(0,q.a,p)}s=A.a5(s,t.N,t.b)}return s},
gkk(){var s=this.r.a,r=A.o(s).i("M<2>")
return new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.os()),r.i("n<h.E>")).gq(0)},
aW(a){var s,r,q,p,o=A.kX([a],t.N)
for(s=this.r.a,r=a;;r=p){q=s.h(0,r)
p=q==null?null:q.cx
if(p==null||!o.m(0,p))return r}},
cc(a){var s,r,q,p=A.c([],t.Q)
for(s=this.r.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d
if(r.cx!=null){q=r.a
q=q!==a&&this.aW(q)===a}else q=!1
if(q)p.push(r)}B.a.D(p,new A.oD())
return p},
gme(){var s=this.go,r=A.F(s)
return A.aC(new A.n(s,r.i("j(1)").a(new A.oE(this)),r.i("n<1>")),t.Ap)},
gir(){var s=this.k3,r=A.o(s).i("M<2>")
return A.aC(new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.p1(this)),r.i("n<h.E>")),t.Ap)},
i9(a){var s,r,q,p,o,n,m,l,k,j=a.d
if(j==null)j=a.c
for(s=this.fx,r=A.F(s),q=r.i("j(1)").a(new A.p0(a)),s=B.a.gA(s),r=new A.N(s,q,r.i("N<1>")),p=null;r.n();){o=s.gt()
q=o.d
n=q.aa(j)
if(n<-3||n>20)continue
if(p==null){p=o
continue}m=p.d
l=Math.abs(m.aa(j))
k=Math.abs(n)
if(k>=l)q=k===l&&q.l(0,m)>0
else q=!0
if(q)p=o}return p},
bq(){var s=this.b.a,r=A.o(s).i("M<2>")
return new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.oC(this)),r.i("n<h.E>"))},
gcE(){var s="personal",r=t.N
r=A.v(r,r)
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
s=new A.M(s,A.o(s).i("M<2>"))}else s=s.mD(a)
return J.mT(s,new A.oN(c,b,a))},
bI(a){return this.cO(a,null,!1)},
b2(){return this.cO(null,null,!1)},
f2(a){return this.cO(null,a,!1)},
hq(a,b){return this.cO(a,null,b)},
my(a,b){return this.cO(a,b,!1)},
mx(a){return this.cO(null,null,a)},
e5(a){var s=this.b.a,r=A.o(s).i("M<2>")
return new A.n(new A.M(s,r),r.i("j(h.E)").a(new A.oM(a)),r.i("n<h.E>"))},
eP(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.a,a6=a7.a
if(a5.u(0,a6))return new A.nG()
s=null
try{r=null
o=a7.d
q=o
A:{if("movement.record"===q){r=a3.ke(a7)
break A}if("movement.categorise"===q){r=a3.j3(a7)
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
h=A.a2(A.ad(j),i)
i=n.h(0,"occurredAtUtc")
i.toString
g=A.c0(A.b(i)).F()
i=n.h(0,"bankDate")
i.toString
f=A.aw(A.b(i))
i=n.h(0,"homeDate")
i.toString
e=A.aw(A.b(i))
d=new A.dP("operation",a6,a7.f,!1)
i=n.h(0,"accountId")
i.toString
i=A.bP(A.b(i),h,f,l,a4,k,a4,B.k,e,m+":advance",a4,a4,a4,g,m,A.m(n.h(0,"payee")),a4,d,a4,a4,B.a0,1)
j=A.m(n.h(0,"payee"))
r=a3.dC(a7,A.c([i,A.bP("owed-to:"+l,h,f,k,A.m(n.h(0,"categoryId")),l,a4,B.k,e,m+":expense",a4,a4,a4,g,m,j,a4,d,a4,a4,B.n,1)],t.A))
break A}if("advance.settle"===q){r=a3.kB(a7)
break A}if("movement.verify"===q){r=a3.kX(a7)
break A}if("movement.sameEvent"===q){r=a3.kw(a7)
break A}if("movement.separate"===q){r=a3.kz(a7)
break A}if("payment.cardBill"===q){r=a3.j1(a7)
break A}if("movement.refund"===q){r=a3.kf(a7)
break A}if("movement.transfer"===q){r=a3.kS(a7)
break A}if("movement.markTransfer"===q){r=a3.jX(a7)
break A}if("movement.unmarkTransfer"===q){r=a3.kV(a7)
break A}if("movement.flag"===q){r=a3.jC(a7)
break A}if("movement.flagClear"===q){r=a3.jD(a7)
break A}if("intake.hold"===q){r=a3.jM(a7)
break A}if("intake.failed"===q){n=a7.e
m=n.h(0,"eventKey")
m.toString
A.b(m)
l=n.h(0,"receivedAtUtc")
l.toString
c=A.aE(A.c0(A.b(l)).F(),B.q)
B.a.m(a3.c,new A.W("intake-failed:"+m,B.b8,m,"A message from "+A.i(n.h(0,"sender"))+" on "+c.k(0)+" could not be read: "+A.i(n.h(0,"reason"))+"."))
r=new A.E()
break A}if("intake.suspect"===q){r=a3.jO(a7)
break A}if("intake.reminder"===q){r=a3.jN(a7)
break A}if("intake.suspectResolve"===q){r=a3.kO(a7)
break A}if("category.add"===q){r=a3.j4(a7)
break A}if("category.rename"===q){r=a3.j5(a7)
break A}if("rule.propose"===q){r=a3.ks(a7)
break A}if("rule.confirm"===q){r=a3.kq(a7)
break A}if("rule.remove"===q){r=a3.kt(a7)
break A}if("rule.edit"===q){r=a3.kr(a7)
break A}if("movement.classify"===q){r=a3.j6(a7)
break A}if("movement.unfile"===q){r=a3.kU(a7)
break A}if("rule.unconfirm"===q){r=a3.ku(a7)
break A}if("filing.target"===q){r=a3.jA(a7)
break A}if("member.add"===q){r=a3.jY(a7)
break A}if("member.rename"===q){r=a3.jZ(a7)
break A}if("movement.attribute"===q){r=a3.iP(a7)
break A}if("movement.note"===q){r=a3.k5(a7)
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
if(A.cN(k))j.m(0,new A.p(m,l))
else j.Z(0,new A.p(m,l))
r=new A.E()
break A}if("book.add"===q){r=a3.iR(a7)
break A}if("account.add"===q){r=a3.iA(a7)
break A}if("account.edit"===q){r=a3.iC(a7)
break A}if("account.setStart"===q){r=a3.iI(a7)
break A}if("account.linkFolder"===q){r=a3.iF(a7)
break A}if("account.close"===q){r=a3.iB(a7)
break A}if("card.replace"===q){r=a3.j2(a7)
break A}if("account.moveBook"===q){r=a3.iG(a7)
break A}if("account.remove"===q){r=a3.iH(a7)
break A}if("giro.add"===q){r=a3.jI(a7)
break A}if("institution.profile"===q){m=a7.e
l=m.h(0,"code")
l.toString
A.b(l)
k=m.h(0,"name")
k.toString
A.b(k)
j=A.m(m.h(0,"country"))
i=A.hC(m.h(0,"first"))
b=t.jS.a(m.h(0,"caveats"))
if(b==null)b=B.b_
a3.x.j(0,l,new A.fc(l,k,j,i===!0,J.dh(b,t.N),A.hC(m.h(0,"offersCsv"))))
r=new A.E()
break A}if("coverage.record"===q){r=a3.jb(a7)
break A}if("institution.enable"===q){r=a3.jL(a7)
break A}if("giro.edit"===q){r=a3.jJ(a7)
break A}if("fact.confirm"===q){r=a3.jx(a7)
break A}if("statement.record"===q){r=a3.kN(a7)
break A}if("statement.loans"===q){r=a3.kK(a7)
break A}if("statement.notice"===q){r=a3.kL(a7)
break A}if("statement.noticeConfirm"===q){r=a3.kM(a7)
break A}if("statement.file"===q){r=a3.kH(a7)
break A}if("statement.fileResult"===q){r=a3.kJ(a7)
break A}if("secret.audit"===q){r=a3.kx(a7)
break A}if("review.add"===q){r=a3.kn(a7)
break A}if("review.dismiss"===q){r=a3.ko(a7)
break A}if("review.snooze"===q){r=a3.kp(a7)
break A}if("month.close"===q){r=a3.k_(a7)
break A}if("statement.fileAccount"===q){r=a3.kI(a7)
break A}if("statement.last4Pick"===q){r=a3.jS(a7)
break A}if("statement.last4Forget"===q){r=a3.jR(a7)
break A}if("keys.envelope"===q){m=a7.e.h(0,"envelope")
m.toString
A.DX(t.f.a(m).G(0,t.N,t.X))
r=new A.E()
break A}if("google.account"===q){m=a7.e
a=m.h(0,"emailSha256")
if(typeof a=="string"){l=$.GM()
l=!l.b.test(a)}else l=!0
if(l)A.f(B.fa)
m=A.m(m.h(0,"masked"))
a3.cy=new A.tH(a,m==null?"":m)
r=new A.E()
break A}if("keys.backupPublic"===q){m=a7.e.h(0,"x25519")
m.toString
a0=B.B.O(A.b(m))
m=a0.length
if(m!==32)A.f(A.y("an X25519 public key has 32 bytes, not "+m,a4,a4))
a3.db=new A.bE(a0,B.U)
r=new A.E()
break A}if("mail.sender"===q){r=a3.jW(a7)
break A}if("bill.mark"===q){r=a3.iQ(a7)
break A}if("reminder.sent"===q){r=a3.kg(a7)
break A}if("reminders.switch"===q){r=a3.kh(a7)
break A}if("value.record"===q){r=a3.kW(a7)
break A}if("report.keep"===q){r=a3.kl(a7)
break A}if("brief.settings"===q){r=a3.iW(a7)
break A}if("brief.sent"===q){r=a3.iV(a7)
break A}if("calendar.own"===q){r=a3.j_(a7)
break A}if("calendar.event"===q){r=a3.iZ(a7)
break A}if("calendar.sync"===q){r=a3.j0(a7)
break A}if("giro.outcome"===q){r=a3.jK(a7)
break A}if("planned.set"===q){r=a3.k9(a7)
break A}if("planned.end"===q){r=a3.k7(a7)
break A}if("tax.assessment"===q){r=a3.kP(a7)
break A}if("planned.outcome"===q){r=a3.k8(a7)
break A}if("category.flag"===q||"budget.set"===q||"period.note"===q||"officeDay.mark"===q||"recurring.mark"===q||"goal.set"===q||"goal.remove"===q||"reward.rules"===q){a1=A.LG(a3,a3.e_,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("document.set"===q||"document.remove"===q||"document.retrieve"===q||"document.source"===q||"policy.set"===q||"policy.remove"===q){a1=A.LD(a3,a3.c_,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("movement.forBook"===q){r=a3.ex(a7)
break A}if("movement.forBookClear"===q){r=a3.jF(a7)
break A}if("payment.byPerson"===q){r=a3.iX(a7)
break A}if("invoice.link"===q){r=a3.jQ(a7)
break A}if("book.settings"===q||"invoice.record"===q||"subscription.set"===q||"subscription.remove"===q||"date.entered"===q||"remittance.confirm"===q||"indiaTax.entry"===q||"account.sourceOnly"===q||"loan.joint"===q||"statement.sourceRead"===q||"book.owedMentioned"===q){a1=A.Lz(a3,a3.aD,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("life.set"===q||"life.remove"===q){r=a3.jV(a7)
break A}if("rental.issue"===q){a1=A.LF(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("rental.credit"===q){a1=A.LE(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("company.invoice.issue"===q){a1=A.LB(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("company.credit"===q){a1=A.LA(a3,a7)
r=a1==null?new A.E():a3.p(a7,B.h,a1)
break A}if("sms.sender"===q){r=a3.kF(a7)
break A}if("sync.switch"===q||"sync.epoch"===q||"sync.device"===q||"sync.primary"===q){a1=a3.fr.eP(a7)
r=a1==null?new A.E():a3.p(a7,B.h,"sync: "+a1)
break A}if("life.proposalReject"===q){r=a3.kc(a7)
break A}r=a3.p(a7,B.f,"unknown operation type "+o)
break A}s=r}catch(a2){p=A.av(a2)
s=a3.p(a7,B.h,"could not apply "+a7.d+": "+A.i(p))}a5.m(0,a6)
return s},
dC(a,b){var s,r,q,p,o,n,m,l,k=this
t.C.a(b)
s=A.F(b)
r=s.i("c3<1,e>")
q=A.B(new A.c3(new A.n(b,s.i("j(1)").a(new A.oa(k)),s.i("n<1>")),s.i("e(1)").a(new A.ob()),r),r.i("h.E"))
if(q.length!==0)return k.p(a,B.v,"movement "+B.a.Y(q,", ")+" already exists")
for(s=b.length,r=k.b,p=0;p<b.length;b.length===s||(0,A.l)(b),++p){o=b[p]
n=o.a
m=o.c
l=k.bU("m:"+n,m)
r.j(0,n,l===m?o:o.cj(l))}return new A.E()},
ke(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="occurredAtUtc",a9=b0.e.h(0,"movement")
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
A.b(q)
r=a9.h(0,"bookId")
r.toString
A.b(r)
p=a9.h(0,"accountId")
p.toString
A.b(p)
s=n==null?null:A.ag(B.au,n,t.v_)
l=a9.h(0,"direction")
l.toString
l=A.ag(B.bM,A.b(l),t.g7)
k=a9.h(0,"amount")
k.toString
A.b(k)
j=a9.h(0,"currency")
j.toString
A.b(j)
j=A.a2(A.ad(k),j)
if(a9.h(0,a8)==null)k=null
else{k=a9.h(0,a8)
k.toString
k=A.c0(A.b(k)).F()}i=a9.h(0,"bankDate")
i.toString
i=A.aw(A.b(i))
h=a9.h(0,"homeDate")
h.toString
h=A.aw(A.b(h))
g=A.m(a9.h(0,"payee"))
f=A.m(a9.h(0,"categoryId"))
e=A.m(a9.h(0,"memberId"))
d=A.m(a9.h(0,"counterpartyBookId"))
c=A.m(a9.h(0,"counterpartyPerson"))
b=A.m(a9.h(0,"linkedMovementId"))
a=A.m(a9.h(0,"pairId"))
a0=A.m(a9.h(0,"statementLineRef"))
a1=A.m(a9.h(0,"sameEventAs"))
a2=m==null?null:A.ag(B.j7,m,t.fN)
a9=A.m(a9.h(0,"notes"))
a3=o.h(0,"channel")
a3.toString
A.b(a3)
a4=o.h(0,"sourceId")
a4.toString
A.b(a4)
a5=o.h(0,"importedAtUtc")
a5.toString
a5=A.c0(A.b(a5)).F()
a6=o.h(0,"verified")
a6.toString
a7=A.bP(p,j,i,r,f,d,c,l,h,q,b,e,a9,k,a,g,a2,new A.dP(a3,a4,a5,A.cN(a6)),a1,a0,s,1)
a9=a7.db
if(A.Gh(a9)!=null){a9.toString
s=$.Dh()
r=A.D("[\\s-]",!0,!1)
a9=A.ao(a9,r,"")
return this.p(b0,B.h,s.b.test(a9)?"a movement's note may not hold a full number":"a movement's note must be one line of at most 200 characters")}return this.dC(b0,A.c([a7],t.A))},
k5(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a9.e,a8=a7.h(0,"movementId")
a8.toString
A.b(a8)
s=A.m(a7.h(0,"notes"))
r=a6.b
q=r.a.h(0,a8)
if(q==null)return a6.p(a9,B.f,"no movement "+a8+" to note")
p=q.cx
if(p!=null)return a6.p(a9,B.f,a8+" is another message about "+p+"; note the payment it belongs to")
o=A.Gh(s)
if(o!=null)return a6.p(a9,B.h,"note not saved on "+a8+": "+o)
n=A.CY(s)
m=q.dx
l=a7.h(0,"baseVersion")
l.toString
if(m!==A.O(l)){r=new A.om()
B.a.m(a6.c,new A.W("conflict:"+a9.a,B.H,a8,"Changed on two devices: kept "+A.i(r.$1(q.db))+", the other device wrote "+A.i(r.$1(n))+"."))
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
r.j(0,a8,A.bP(j,g,e,k,a,a1,a2,h,d,l,a3,a0,n,f,a4,b,q.cy,c,p,a5,i,m).eU(m+1))
return new A.E()},
j3(a){var s,r,q,p,o=a.e,n=o.h(0,"movementId")
n.toString
A.b(n)
s=o.h(0,"categoryId")
s.toString
A.b(s)
o=o.h(0,"baseVersion")
o.toString
A.O(o)
r=this.b
q=r.a.h(0,n)
if(q==null)return this.p(a,B.f,"no movement "+n+" to categorise")
p=q.dx
if(p!==o){B.a.m(this.c,new A.W("conflict:"+a.a,B.H,n,"Changed on two devices: kept "+A.i(q.Q)+", the other device chose "+s+"."))
return new A.bu()}r.j(0,n,q.lw(s,p+1))
return new A.E()},
kB(a){var s,r,q,p,o,n,m,l,k=null,j=a.e,i=j.h(0,"pairId")
i.toString
A.b(i)
s=this.b.a.h(0,i+":advance")
if(s==null)return this.p(a,B.ae,"no advance "+i+" to settle")
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
n=A.a2(A.ad(o),n)
o=j.h(0,"occurredAtUtc")
o.toString
o=A.c0(A.b(o)).F()
m=j.h(0,"bankDate")
m.toString
m=A.aw(A.b(m))
l=j.h(0,"homeDate")
l.toString
l=A.aw(A.b(l))
return this.dC(a,A.c([A.bP(p,n,m,q,k,s.at,k,B.m,l,i+":settlement:"+r,s.a,k,k,o,i,k,k,new A.dP("operation",r,a.f,!1),k,k,B.a_,1)],t.A))},
kX(a){var s,r,q,p,o,n,m,l,k,j=a.e,i=j.h(0,"movementId")
i.toString
A.b(i)
s=this.b
r=s.a
q=r.h(0,i)
if(q==null)return this.p(a,B.aD,"no movement "+i+" to verify")
p=j.h(0,"postedAmount")
p.toString
A.b(p)
o=j.h(0,"currency")
o.toString
A.b(o)
n=A.a2(A.ad(p),o)
m=q.ch
if(m==null)l=null
else{p=q.a
o=m+":advance"
if(p===o){p=m+":expense"
l=p}else{p=p===m+":expense"?o:null
l=p}}k=l==null?this.jG(q):r.h(0,l)
r=q.y
p=j.h(0,"statementLineRef")
p.toString
s.j(0,i,q.lC(n,new A.dP(r.a,r.b,r.c,!0),A.b(p),q.dx+1))
if(k!=null)s.j(0,k.a,k.lv(n,k.dx+1))
return new A.E()},
j4(a){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,"id")
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
if(o.E(k))return this.p(a,B.v,"category "+k+" already exists")
n=q==null
m=n?null:o.h(0,q)
if(!n)o=m==null||m.b!==s
else o=!1
if(o)return this.p(a,B.f,"category "+k+" needs an existing "+s+" parent "+q)
p.j(0,k,new A.bK(k,s,r,q))
return new A.E()},
j5(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.b(o)
s=this.d
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no category "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.b.I(A.b(p))
if(q.length===0)return this.p(a,B.f,"category "+o+" needs a name")
s.j(0,o,new A.bK(r.a,r.b,q,r.d))
return new A.E()},
ks(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a.e,c=d.h(0,"id")
c.toString
A.b(c)
s=A.m(d.h(0,"categoryId"))
r=f.e
if(r.a.E(c))return f.p(a,B.v,"rule "+c+" already exists")
q=d.h(0,"bookId")
q.toString
A.b(q)
p=d.h(0,"pattern")
p.toString
A.b(p)
if(A.cP(p).length===0)return f.p(a,B.f,"rule "+c+" has an empty pattern")
o=A.m(d.h(0,"forBookId"))
n=o==null
if(!n)m=f.aG(o)==null||o===q||!J.Y(d.h(0,"type"),"expense")
else m=!1
if(m)return f.p(a,B.f,"rule "+c+" files expenses for another book that exists")
l=A.m(d.h(0,"direction"))
m=d.h(0,"type")
m.toString
k=A.ag(B.au,A.b(m),t.v_)
m=l==null
j=m?e:A.ag(B.bM,l,t.g7)
i=f.fT(c,k,s,j,n?q:o)
if(i!=null)return f.p(a,B.f,i)
h=A.m(d.h(0,"memberId"))
if(h!=null&&!f.p3.a.E(h))return f.p(a,B.f,"rule "+c+" names unknown member "+h)
g=d.h(0,"accountAlias")
A:{if(typeof g=="string"){n=f.bU("r:"+c,g)
break A}n=e
break A}m=m?e:A.ag(B.bM,l,t.g7)
j=A.hC(d.h(0,"appliesToNew"))
r.j(0,c,new A.bb(c,q,p,k,s,!1,n,m,h,o,j!==!1,e))
return new A.E()},
fT(a,b,c,d,e){var s,r
if(!B.a.u(B.jq,b))return"rule "+a+" cannot file transactions as "+b.b
s=b===B.G
if(s&&d===B.k)return"rule "+a+" files refunds, which are money coming in"
if(!(b===B.n||b===B.w||s))return c==null?null:"rule "+a+" files "+b.b+", which has no category"
if(c==null)return"rule "+a+" files "+b.b+" and needs a category"
r=this.d.a.h(0,c)
if(r==null)return"rule "+a+" names unknown category "+c
if(r.b!==this.bX(e))return"rule "+a+" files "+c+", which does not belong to book "+e
if(s&&A.hL(r))return"rule "+a+" files refunds under "+c+", which is not spending"
return null},
iA(a){var s,r,q,p,o=this,n=a.e.h(0,"account")
n.toString
s=A.BQ(t.f.a(n).G(0,t.N,t.X))
n=o.r
r=s.a
if(n.a.E(r))return o.p(a,B.v,"account "+r+" already exists")
q=s.r
if(o.aG(q)==null)return o.p(a,B.f,"no book "+q)
p=A.eS(s)
if(p!=null)return o.p(a,B.h,"account not added: "+p)
n.j(0,r,s)
return new A.E()},
kF(a){var s,r,q,p,o,n=null
try{r=a.e
q=A.m(r.h(0,"id"))
p=A.Gg(q==null?"":q)
if(p==null)A.f(B.f8)
q=r.h(0,"kind")
q.toString
n=new A.cq(p,A.ag(B.bO,A.b(q),t.in),A.m(r.h(0,"institution")))}catch(o){r=A.av(o)
if(r instanceof A.b8){s=r
return this.p(a,B.h,"SMS sender not recorded: "+s.a)}else throw o}r=this.dy
if(J.Y(a.e.h(0,"removed"),!0))r.Z(0,n.a)
else r.j(0,n.a,n)
return new A.E()},
jW(a){var s,r,q,p,o,n,m=null
try{r=a.e
q=A.m(r.h(0,"address"))
p=B.b.I(q==null?"":q).toLowerCase()
q=$.Hi()
if(!q.b.test(p)){q=$.Hr()
q=q.b.test(p)}else q=!0
o=q?p:null
if(o==null)A.f(B.fb)
q=r.h(0,"kind")
q.toString
m=new A.iy(o,A.ag(B.ko,A.b(q),t.qo),A.m(r.h(0,"institution")))}catch(n){r=A.av(n)
if(r instanceof A.b8){s=r
return this.p(a,B.h,"mail sender not recorded: "+s.a)}else throw n}r=this.dx
if(J.Y(a.e.h(0,"removed"),!0))r.Z(0,m.a)
else r.j(0,m.a,m)
return new A.E()},
kN(a){var s,r,q,p=this,o=A.Jl(a.e),n=p.r,m=o.b,l=n.a
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
if(m)n.j(0,r,l.hb(!0))
return new A.E()},
kL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.Jk(a.e),c=d.b
if(!e.r.a.E(c))return e.p(a,B.f,"notice "+d.a+" is for an unregistered account")
s=e.fy
if(B.a.M(s,new A.oy(d)))return e.p(a,B.v,"notice "+d.a+" is already recorded")
r=e.bU("n:"+d.a,c)
q=r===c?d:d.cj(r)
p=B.a.eW(s,new A.oz(q))
if(p>=0){if(!(p<s.length))return A.a(s,p)
o=s[p]
c=A.c([],t.s)
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
if(c.length!==0)return e.p(a,B.v,"notice "+q.a+" disagrees with notice "+o.a+" on "+B.a.Y(c,", "))
c=m?q.d:n
n=k?q.e:l
m=i?q.f:j
l=g?q.r:h
B.a.j(s,p,new A.cJ(o.a,o.b,o.c,c,n,m,l,o.w))
return new A.E()}B.a.m(s,q)
return new A.E()},
kM(a){var s,r,q,p,o=a.e.h(0,"noticeId")
o.toString
A.b(o)
s=this.fy
r=B.a.eW(s,new A.ox(o))
if(r<0)return this.p(a,B.f,"no notice "+o+" to confirm")
if(!(r<s.length))return A.a(s,r)
q=s[r]
p=q.d
if(!(p!=null&&q.e!=null&&q.r!=null))return this.p(a,B.f,"notice "+o+": cannot confirm figures the notice does not give (statement date, balance and due date)")
B.a.j(s,r,new A.cJ(q.a,q.b,q.c,p,q.e,q.f,q.r,!0))
return new A.E()},
jb(a){var s,r,q,p,o="institution",n="threshold",m=a.e,l=A.m(m.h(0,o)),k=A.Mj(m,l!=null&&this.x.a.E(l))
if(k!=null)return this.p(a,B.h,"coverage not recorded: "+k)
s=m.h(0,o)
s.toString
A.b(s)
r=m.h(0,"channel")
r.toString
r=A.ag(B.jt,A.b(r),t.dd)
q=m.h(0,"level")
q.toString
A.ag(B.jH,A.b(q),t.w0)
if(m.h(0,n)!=null){q=m.h(0,n)
q.toString
A.aO(t.f.a(q).G(0,t.N,t.X))}A.hC(m.h(0,"recurringAlerts"))
A.hC(m.h(0,"refundsAlert"))
m=m.h(0,"checkedOn")
m.toString
m=A.aw(A.b(m))
q=this.y
p=q.h(0,new A.p(s,r))
if(p==null||m.l(0,p.r)>=0)q.j(0,new A.p(s,r),new A.ka(s,r,m))
return new A.E()},
jL(a){var s,r,q=this,p=a.e.h(0,"institution")
p.toString
A.b(p)
s=q.x.a.h(0,p)
if(s==null)return q.p(a,B.f,"no profile for "+p)
if(!s.d){r=A.Ly(q)
if(!r.a)return q.p(a,B.h,"alerts from "+s.b+" wait until a full statement cycle reconciles at "+B.a.Y(r.b," and "))}q.z.m(0,p)
return new A.E()},
jI(a){var s,r,q,p,o=this,n=a.e.h(0,"giro")
n.toString
s=A.DN(t.f.a(n).G(0,t.N,t.X))
n=s.c
r=o.r.a.h(0,n)
if(r==null)return o.p(a,B.f,"no account "+n+" for a GIRO")
n=o.w
q=s.a
if(n.a.E(q))return o.p(a,B.v,"GIRO "+q+" already exists")
p=A.FO(s,r)
if(p!=null)return o.p(a,B.h,"GIRO not added: "+p)
n.j(0,q,s)
return new A.E()},
jJ(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="dayOfMonth",g="typicalAmount",f="categoryId",e=a.e,d=e.h(0,"id")
d.toString
A.b(d)
s=i.w
r=s.a.h(0,d)
if(r==null)return i.p(a,B.f,"no GIRO "+d+" to change")
q=r.a
p=r.b
o=r.c
n=e.E(h)?A.aG(e.h(0,h)):r.d
if(e.E(g))if(e.h(0,g)==null)m=null
else{m=e.h(0,g)
m.toString
m=A.aO(t.J.a(m))}else m=r.e
l=e.E(f)?A.m(e.h(0,f)):r.f
k=new A.c1(q,p,o,n,m,l)
if(l!=null){q=i.d.a.h(0,l)
q=q==null?null:q.b
q=q!=i.bX(i.r.a.h(0,o).r)}else q=!1
if(q)return i.p(a,B.f,"GIRO not changed: no category "+l+" in its book")
q=i.r.a.h(0,o)
q.toString
j=A.FO(k,q)
if(j!=null)return i.p(a,B.h,"GIRO not changed: "+j)
s.j(0,d,k)
return new A.E()},
jK(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"giroId")
k.toString
A.b(k)
s=l.h(0,"month")
s.toString
A.b(s)
r=l.h(0,"outcome")
r.toString
r=A.ag(B.kD,A.b(r),t.jf)
q=J.Y(l.h(0,"source"),"notice")
p=A.m(l.h(0,"movementId"))
o=m.w.a.h(0,k)
if(o==null)return m.p(a,B.f,"no GIRO "+k)
if(A.mK(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q&&r!==B.bx)return m.p(a,B.h,"a notice can only say a GIRO failed")
if(p!=null){n=m.b.a.h(0,p)
if(r!==B.bw||n==null||n.c!==o.c||n.e!==B.k||n.cx!=null)return m.p(a,B.f,"not a deduction from the GIRO's account: "+p)}B.a.m(m.Q,new A.il(k,s,r,q,p))
return new A.E()},
k9(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.e,f=g.h(0,"id")
f.toString
A.b(f)
s=g.h(0,"kind")
s.toString
s=A.ag(B.jL,A.b(s),t.mZ)
r=g.h(0,"name")
r.toString
A.b(r)
q=g.h(0,"accountId")
q.toString
A.b(q)
p=A.m(g.h(0,"toAccountId"))
o=g.h(0,"dayOfMonth")
o.toString
A.O(o)
if(g.h(0,"amount")==null)n=null
else{n=g.h(0,"amount")
n.toString
n=A.aO(t.f.a(n).G(0,t.N,t.X))}m=A.m(g.h(0,"words"))
l=g.h(0,"fromMonth")
l.toString
A.b(l)
g=g.h(0,"version")
g.toString
A.O(g)
k=new A.bo(f,s,r,q,p,o,n,m,l,g)
j=A.Nh(k,h.r)
if(j!=null)return h.p(a,B.h,"not planned: "+j)
q=h.as
i=q.a.h(0,f)
if(i==null)i=A.c([],t.rA)
p=J.an(i)
if(g!==p.gq(i)+1){B.a.m(h.c,new A.W("conflict:"+a.a,B.H,f,"Changed on two devices: "+r+" was changed since; check it again."))
return new A.bu()}if(p.gap(i))g=p.gaq(i).b!==s||B.b.l(p.gaq(i).x,l)>0
else g=!1
if(g)return h.p(a,B.h,"a new version keeps its kind and starts no earlier")
g=A.B(i,t.AB)
g.push(k)
q.j(0,f,g)
return new A.E()},
k7(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.b(q)
r=r.h(0,"fromMonth")
r.toString
A.b(r)
if(!s.as.a.E(q))return s.p(a,B.f,"nothing planned as "+q)
if(A.mK(r)==null)return s.p(a,B.h,"month is YYYY-MM")
s.at.j(0,q,r)
return new A.E()},
k8(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"id")
k.toString
A.b(k)
s=l.h(0,"month")
s.toString
A.b(s)
r=l.h(0,"outcome")
r.toString
r=A.ag(B.kf,A.b(r),t.t_)
q=A.m(l.h(0,"movementId"))
l=m.as.a.h(0,k)
p=l==null?null:J.BO(l)
if(p==null)return m.p(a,B.f,"nothing planned as "+k)
if(A.mK(s)==null)return m.p(a,B.h,"month is YYYY-MM")
if(q!=null){o=m.b.a.h(0,q)
n=p.b===B.b5?B.m:B.k
if(r!==B.c_||o==null||o.c!==p.d||o.e!==n||o.cx!=null)return m.p(a,B.f,"not a transaction of "+p.c+": "+q)}B.a.m(m.ax,new A.iP(k,s,r,q))
return new A.E()},
kP(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"ya")
l.toString
A.O(l)
s=m.h(0,"assessed")
s.toString
s=A.aO(t.f.a(s).G(0,t.N,t.X))
r=A.m(m.h(0,"giroId"))
q=new A.lE(l,s,r,A.m(m.h(0,"firstMonth")),A.aG(m.h(0,"instalments")))
m=r==null
p=m?null:n.w.a.h(0,r)
if(!m&&p==null)return n.p(a,B.f,"no GIRO "+r)
o=A.NS(q,p==null?null:n.r.a.h(0,p.c))
if(o!=null)return n.p(a,B.h,"not recorded: "+o)
n.ay.j(0,l,q)
return new A.E()},
jx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.e,f=g.h(0,"source")
f.toString
s=t.f
r=t.N
q=t.X
p=s.a(f).G(0,r,q)
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
q=s.a(j).G(0,r,q)
r=p.h(0,"span")
r.toString
A.b(r)
j=g.h(0,"fileDate")
j.toString
j=A.aw(A.b(j))
g=g.h(0,"confirmedOn")
g.toString
i=new A.kf(f,o,n,m,l,new A.tA(k,q,r),j,A.aw(A.b(g)))
h=A.Mx(i)
if(h!=null)return this.p(a,B.h,"fact not kept: "+h)
this.CW.j(0,f,i)
return new A.E()},
iC(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="loan",a6="minimumBalance",a7="statement",a8="ifsc",a9="micr",b0="branch",b1="numberShown",b2=b4.e,b3=b2.h(0,"id")
b3.toString
A.b(b3)
s=a3.r
r=s.a.h(0,b3)
if(r==null)return a3.p(b4,B.f,"no account "+b3+" to change")
if(b2.E("kind"))return a3.iE(b4,r)
q=A.m(b2.h(0,"alias"))
p=A.m(b2.h(0,"holder"))
o=A.aG(b2.h(0,"staleAfterDays"))
n=A.aG(b2.h(0,"billingCycleDay"))
if(b2.h(0,a5)==null)m=a4
else{m=b2.h(0,a5)
m.toString
m=A.C9(t.J.a(m))}l=b2.E(a5)&&b2.h(0,a5)==null
if(b2.h(0,a6)==null)k=a4
else{k=b2.h(0,a6)
k.toString
k=A.aO(t.J.a(k))}j=b2.E(a6)&&b2.h(0,a6)==null
if(b2.h(0,a7)==null)i=a4
else{i=b2.h(0,a7)
i.toString
i=A.Em(t.J.a(i))}h=b2.E(a7)&&b2.h(0,a7)==null
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
a=A.ao(a.toUpperCase(),"*","X")}a1=r.lu(q,n,c,b,f,l,d,j,b2.E(b1)&&b2.h(0,b1)==null,h,p,g,m,e,k,a,o,i)
a2=A.eS(a1)
if(a2!=null)return a3.p(b4,B.h,"account not changed: "+a2)
s.j(0,b3,a1)
return new A.E()},
iE(a,b){var s,r,q,p=this,o=a.e,n=A.BZ(B.dM,t.jN).h(0,o.h(0,"kind")),m=o.h(0,"subtype")
A:{if(typeof m=="string"){s=A.BZ(B.dA,t.vi).h(0,m)
break A}s=null
break A}if(n!=null)r=o.h(0,"subtype")!=null&&s==null
else r=!0
if(r)return p.p(a,B.h,"an account type names a kind and its subtype")
if(b.d.b!==o.h(0,"baseKind"))return p.d_(a,b.a,b.b+"'s type")
r=b.a
q=p.mq(r,n,s)
if(q!=null)return p.p(a,B.h,"type not changed: "+q)
p.r.j(0,r,A.E0(b,n,s))
return new A.E()},
mq(a,b,c){var s,r,q,p,o,n,m=this,l="money owed",k="money held",j=m.r.a,i=j.h(0,a)
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
return"its "+j+" read as "+n+"; as "+s+" the balances would turn around"}if(b!==B.M&&b!==B.Q){s=m.w.a
if(new A.M(s,A.o(s).i("M<2>")).M(0,new A.oI(a)))return"a GIRO is paid from it"
if(new A.M(j,A.o(j).i("M<2>")).M(0,new A.oJ(a)))return"a loan is paid from it"
j=m.as.a
s=A.o(j).i("M<2>")
if(new A.f8(new A.M(j,s),s.i("h<bo>(h.E)").a(new A.oK()),s.i("f8<h.E,bo>")).M(0,new A.oL(a)))return"a planned item uses it"}return A.eS(A.E0(i,b,c))},
d_(a,b,c){B.a.m(this.c,new A.W("conflict:"+a.a,B.H,b,"Changed on two devices: "+c+" was changed since; check it again."))
return new A.bu()},
iI(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.b(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to change")
q=i.h(0,"startDate")
q.toString
p=A.aw(A.b(q))
q=i.h(0,"startFrom")
q.toString
o=A.u4(t.f.a(q).G(0,t.N,t.X))
q=r.w
n=i.h(0,"baseStartDate")
n.toString
if(!q.J(0,A.aw(A.b(n))))return j.d_(a,h,r.b+"'s history start")
switch(o.a.a){case 0:return j.p(a,B.h,"a folder year is taken only at import")
case 1:q=j.fx
n=A.F(q)
m=A.aN(new A.n(q,n.i("j(1)").a(new A.o9(o,h)),n.i("n<1>")),t.v)
if(m==null||!m.c.J(0,p))return j.p(a,B.h,"start not changed: not a statement of "+r.b+"'s")
break
case 2:break}l=r.ly(p,o).n6(p,o)
k=A.eS(l)
if(k!=null)return j.p(a,B.h,"start not changed: "+k)
s.j(0,h,l)
if(r.db!=null||j.cc(h).length!==0)j.eG(B.ml)
return new A.E()},
iB(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"id")
h.toString
A.b(h)
s=j.r
r=s.a.h(0,h)
if(r==null)return j.p(a,B.f,"no account "+h+" to close")
if(r.cx!=null)return j.p(a,B.f,r.b+" was replaced by a newer card")
if(!J.Y(i.h(0,"closed"),!0)){if(r.CW==null)return j.p(a,B.f,r.b+" is not closed")
s.j(0,h,r.hb(!0))
return new A.E()}if(r.CW!=null)return j.p(a,B.f,r.b+" is already closed")
if(r.d===B.x)return j.p(a,B.h,"a cash wallet is never closed")
for(q=j.fx,p=q.length,o=null,n=0;n<q.length;q.length===p||(0,A.l)(q),++n){m=q[n]
if(m.b===h)l=o==null||m.d.l(0,o)>0
else l=!1
if(l)o=m.d}if(o==null)return j.p(a,B.h,r.b+" has no statement to close after")
q=i.h(0,"after")
q.toString
k=A.aw(A.b(q))
if(!k.J(0,o))return j.d_(a,h,r.b+"'s latest statement")
s.j(0,h,r.ln(k))
return new A.E()},
j2(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"old")
if(typeof j!="string")return l.p(a,B.h,"a card replacement names the old card")
s=l.r
r=s.a
q=r.h(0,j)
if(q==null)return l.p(a,B.f,"no account "+j)
if(J.Y(k.h(0,"undo"),!0)){if(q.cx==null)return l.p(a,B.f,q.b+" is not replaced")
p=l.aW(j)
s.j(0,j,q.hP(null,null))
l.eG(A.kX([p],t.N))
return new A.E()}o=k.h(0,"new")
n=k.h(0,"from")
if(typeof o!="string"||typeof n!="string")return l.p(a,B.h,"a card replacement names the newer card and the date")
m=r.h(0,o)
A:{if(m==null){r="no account "+o
break A}r=q.cx
if(r!=null){r=q.b+" is already replaced"
break A}if(o===j){r="a card cannot replace itself"
break A}r=A.E_(q.d,m.d)
if(!r){r="only a card or a bank account of the same type is replaced"
break A}if(A.hK(q.c)!==A.hK(m.c)&&!J.Y(k.h(0,"moved"),!0)){r="the accounts are of different banks"
break A}r=q.e!==m.e||q.r!==m.r
if(r){r="the accounts differ in currency or book"
break A}r=l.aW(o)
if(r===j){r=m.b+" was itself replaced by "+q.b
break A}r=null
break A}if(r!=null)return l.p(a,B.h,"card not replaced: "+r)
s.j(0,j,q.hP(o,A.aw(n)))
l.eG(A.kX([j],t.N))
return new A.E()},
eG(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null
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
q=$.GJ()
p=q.a
h=p.get(c4)
if(h!=null&&k<h.a[0]){o=h.a
o=q.$ti.i("1?").a(new A.eN([k,o[1],o[2],o[3]]))
p.set(c4,o)}}}for(r=c4.fy,k=0;k<r.length;++k){g=r[k]
q=g.a
f=s.$2("n:"+q,g.b)
if(f!=null)B.a.j(r,k,new A.cJ(q,f,g.c,g.d,g.e,g.f,g.r,g.w))}r=c4.id
q=A.o(r).i("M<2>")
q=A.B(new A.M(r,q),q.i("h.E"))
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.l)(q),++n){e=q[n]
o=e.a
d=s.$2("f:"+o,e.b)
if(d!=null)r.j(0,o,new A.dY(o,d,e.c,e.d,e.e,e.f,e.r))}r=c4.k2
q=A.o(r).i("ab<1,2>")
q=A.B(new A.ab(r,q),q.i("h.E"))
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
a5=r.a(new A.bb(a3,a1.b,a1.c,a1.d,a1.e,a1.f,a4,a1.w,a1.x,a1.y,a1.z,a1.Q))
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
b0=A.iw(a0,a3)
b0.a1(0,a9)
b0.j(0,"fromAccountId",a8)
b0=A.DN(b0)
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
b7=A.iw(a0,a3)
b7.a1(0,b6)
b7.j(0,"payingAccountId",b5)
b7=b1.hc(A.C9(b7))
b0.a(b3)
r.a(b7)
q.j(0,b3,b7)}}for(a3=c4.RG,k=0;k<a3.length;++k){b8=a3[k]
b9=s.$2("d:"+k,b8.a)
if(b9!=null)B.a.j(a3,k,new A.fW(b9,b8.b,b8.c))}a0=A.v(a0,t.aa)
for(p=new A.a1(q,q.r,q.e,p.i("a1<2>"));p.n();){a3=p.d
if(a3.cx==null){a7=a3.a
a9=a3.db
a0.j(0,a7,a9==null?new A.p(a3.w,a3.ay):new A.p(a9,a3.dx))}}for(p=o.i("j(h.E)").a(new A.oq()),a3=new A.M(q,o).gA(0),p=new A.N(a3,p,o.i("N<h.E>"));p.n();){a7=a3.gt()
c0=c4.aW(a7.a)
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
a7=B.z.bd(a7==null?c5:a7.N(),c5)
b3=b1.ay
if(a7===B.z.bd(b3==null?c5:b3.N(),c5)){a7=c1.a
a5=a5===(a7.a===a3.a&&a7.b===a3.b&&a7.c===a3.c)}else a5=a9}else a5=a9
if(a5)continue
a5=c1.a
a5=a5.a===a3.a&&a5.b===a3.b&&a5.c===a3.c?c5:c1
a5=b1.hO(a3,c3.b,a5)
a3=b0.a(b1.a)
r.a(a5)
q.j(0,a3,a5)}},
iG(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a9.e,a6=a5.h(0,"id"),a7=a5.h(0,"from"),a8=a5.h(0,"to")
if(typeof a6!="string"||typeof a7!="string"||typeof a8!="string")return a4.p(a9,B.h,"a move names the account and both books")
s=a4.r
r=s.a
q=r.h(0,a6)
if(q==null)return a4.p(a9,B.f,"no account "+a6)
if(q.r!==a7)return a4.d_(a9,a6,q.b+"'s book")
p=a4.mw(a6,a8)
if(p!=null)return a4.p(a9,B.h,"account not moved: "+p)
o=t.N
n=A.kX([a6],o)
for(m=a4.cc(a6),l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k)n.m(0,m[k].a)
for(m=A.e8(n,n.r,n.$ti.c),l=t.X,s=s.$ti,j=s.i("af.K"),s=s.i("af.V"),i=m.$ti.c;m.n();){h=m.d
if(h==null)h=i.a(h)
g=r.h(0,h).N()
f=A.iw(o,l)
f.a1(0,g)
f.j(0,"bookId",a8)
f=A.BQ(f)
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
s.j(0,g,e.mf(a8))
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
j=s.a(new A.bb(i,a8,a2.c,a2.d,a2.e,a2.f,j,a2.w,a2.x,a2.y,a2.z,a2.Q))
r.j(0,i,j)}}return new A.E()},
mw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r.a.h(0,a)
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
q=A.a3(q)
for(o=h.b.a,n=A.o(o).i("a1<2>"),l=new A.a1(o,o.r,o.e,n);l.n();){k=l.d
if(k.d===B.a_&&k.ay!=null){k=k.ay
k.toString
q.m(0,k)}}for(o=new A.a1(o,o.r,o.e,n),j=0;o.n();){n=o.d
if(!p.u(0,n.c))continue
l=n.b
if(l===b)return"transactions of "+g.b+" are already in that book"
if(l!==s)continue
if(h.eC(n.Q,r))++j
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
if(n==null&&h.eC(o.e,r))return"a rule files its transactions under categories that book does not use"}for(s=h.w.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){q=s.d
if(p.u(0,q.c)&&h.eC(q.f,r))return"a GIRO from it is filed under categories that book does not use"}return null},
iH(a){var s,r,q,p=this,o=a.e,n=o.h(0,"id")
if(typeof n!="string")return p.p(a,B.h,"a removal names the account")
if(J.Y(o.h(0,"undo"),!0)){s=o.h(0,"account")
s.toString
r=A.BQ(t.f.a(s).G(0,t.N,t.X))
if(r.a!==n||p.r.a.E(n))return p.p(a,B.v,"account "+n+" is here")
s=r.r
if(p.aG(s)==null)return p.p(a,B.f,"no book "+s)
q=A.eS(r)
if(q!=null)return p.p(a,B.h,"account not put back: "+q)
p.r.j(0,n,r)
return new A.E()}q=p.mK(n)
if(q!=null)return p.p(a,B.h,"account not removed: "+q)
p.r.Z(0,n)
return new A.E()},
mK(a){var s,r,q,p,o,n=this,m=n.r.a,l=m.h(0,a)
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
if(new A.f8(new A.M(m,s),s.i("h<bo>(h.E)").a(new A.oV()),s.i("f8<h.E,bo>")).M(0,new A.oW(a)))return"a planned item uses it"
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
eC(a,b){var s,r=this.d.a.h(0,a)
A:{if(r!=null){s=r.b!==b
break A}s=!1
break A}return s},
bU(a,b){var s,r,q=this.ch
q.Z(0,a)
s=this.r.a.h(0,b)
if((s==null?null:s.cx!=null)!==!0)return b
r=this.aW(b)
q.j(0,a,b)
return r},
iF(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="startDate",c="startFrom",b=a0.e,a=b.h(0,"id")
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
m=A.DM(p.a(q).G(0,o,n))
q=r.ch
q=q==null?e:q.a
if(q==A.m(b.h(0,"baseFolderId"))){q=r.w
l=b.h(0,"baseStartDate")
l.toString
l=!q.J(0,A.aw(A.b(l)))
q=l}else q=!0
if(q)return f.d_(a0,a,r.b+"'s Drive folder")
if(b.h(0,d)==null)k=e
else{q=b.h(0,d)
q.toString
k=A.aw(A.b(q))}if(b.h(0,c)==null)j=e
else{q=b.h(0,c)
q.toString
j=A.u4(p.a(q).G(0,o,n))}q=r.ay
i=(q==null?e:q.a)===B.an
if(i!==(k!=null)||i!==(j!=null))return f.p(a0,B.h,"folder not linked: a start moves with the link only when it is from a folder year")
if(j!=null)q=j.a!==B.an||j.c!==m.b
else q=!1
if(q)return f.p(a0,B.h,"folder not linked: the start must name the new folder")
h=r.lB(m,k,j)
g=A.eS(h)
if(g!=null)return f.p(a0,B.h,"folder not linked: "+g)
s.j(0,a,h)
return new A.E()},
iR(a){var s=this,r=a.e,q=r.h(0,"id")
q.toString
A.b(q)
if(s.aG(q)!=null)return s.p(a,B.v,"book "+q+" already exists")
r=r.h(0,"kind")
r.toString
A.b(r)
if(r==="member"&&!s.p3.a.E(q))return s.p(a,B.f,"no household member "+q+" for a book")
s.f.j(0,q,r)
return new A.E()},
kq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.e.h(0,"id")
f.toString
A.b(f)
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
return new A.E()},
kr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="memberId",c=a.e,b=c.h(0,"id")
b.toString
A.b(b)
s=e.e
r=s.a.h(0,b)
if(r==null)return e.p(a,B.f,"no rule "+b+" to change")
q=c.h(0,"pattern")
q.toString
p=B.b.I(A.b(q))
o=A.m(c.h(0,"categoryId"))
if(A.cP(p).length===0)return e.p(a,B.f,"rule "+b+" needs a payee to match")
q=c.h(0,"type")
q.toString
n=A.ag(B.au,A.b(q),t.v_)
q=r.y
m=q==null
if(!m&&n!==B.n)return e.p(a,B.f,"rule "+b+" files expenses for another book")
l=r.w
k=e.fT(b,n,o,l,m?r.b:q)
if(k!=null)return e.p(a,B.f,k)
j=c.E(d)?A.m(c.h(0,d)):r.x
if(j!=null&&!e.p3.a.E(j))return e.p(a,B.f,"rule "+b+" names unknown member "+j)
m=A.hC(c.h(0,"appliesToNew"))
i=r.a
h=r.b
g=r.f
f=r.r
if(m==null)m=r.z
s.j(0,b,new A.bb(i,h,p,n,o,g,f,l,j,q,m,r.Q))
return new A.E()},
kt(a){var s=a.e.h(0,"id")
s.toString
A.b(s)
if(this.e.Z(0,s)==null)return this.p(a,B.f,"no rule "+s+" to remove")
this.ch.Z(0,"r:"+s)
return new A.E()},
j6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="memberId",e="actionId",d=a.e,c=d.h(0,"movementId")
c.toString
A.b(c)
s=g.b
r=s.a.h(0,c)
if(r==null)return g.p(a,B.f,"no movement "+c+" to classify")
q=d.h(0,"type")
q.toString
p=A.ag(B.au,A.b(q),t.v_)
o=A.m(d.h(0,"categoryId"))
q=o==null
if(q)n=p===B.n||p===B.w||p===B.G
else n=!1
if(n)return g.p(a,B.h,"filing "+c+" as "+p.b+" needs a category")
n=!q
if(n&&!g.d.a.E(o))return g.p(a,B.f,"unknown category "+o)
if(n&&g.d.a.h(0,o).b!==g.bX(r.b))return g.p(a,B.f,o+" does not belong to book "+r.b)
if(g.fE(r))return g.p(a,B.ae,c+" is paid for another book; undo that first (DUP-13)")
m=A.FZ(p,r.e,g.r.a.h(0,r.c))
if(m!=null)return g.p(a,B.f,m)
if(!(p===B.n||p===B.w||p===B.G))n=r.ch!=null||r.ay!=null||r.cx!=null
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
B.a.m(g.c,new A.W("conflict:"+a.a,B.H,c,"Changed since it was filed elsewhere: kept "+A.i(s)+", the other change chose "+q+"."))
return new A.bu()}i=l?r.hN(k):r
s.j(0,c,i.hM(o,i.as,p,n+1))
h=A.m(d.h(0,"ruleId"))
if(h==null)h=typeof d.h(0,e)=="string"?"action:"+A.i(d.h(0,e)):null
s=g.p1
if(h==null)s.Z(0,c)
else{a.f.F()
s.j(0,c,new A.ky())}return new A.E()},
kU(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"movementId")
j.toString
A.b(j)
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
if(o!==A.O(n)){B.a.m(l.c,new A.W("conflict:"+a.a,B.H,j,"Changed since it was filed; "+j+" was left as it is."))
return new A.bu()}m=A.m(k.h(0,"type"))
n=m==null?null:A.ag(B.au,m,t.v_)
s.j(0,j,r.hM(q,p,n,o+1))
l.p1.Z(0,j)
return new A.E()},
ku(a){var s,r,q=a.e.h(0,"id")
q.toString
A.b(q)
s=this.e
r=s.a.h(0,q)
if(r==null)return this.p(a,B.f,"no rule "+q+" to take back")
s.j(0,q,new A.bb(r.a,r.b,r.c,r.d,r.e,!1,r.r,r.w,r.x,r.y,r.z,null))
return new A.E()},
jA(a){var s=a.e.h(0,"count")
if(!A.cu(s)||s<0)return this.p(a,B.h,"a target is a whole number of transactions, 0 or more")
return new A.E()},
jY(a){var s,r=a.e,q=r.h(0,"id")
q.toString
A.b(q)
r=r.h(0,"name")
r.toString
s=B.b.I(A.b(r))
r=this.p3
if(r.a.E(q))return this.p(a,B.v,"member "+q+" already exists")
if(s.length===0)return this.p(a,B.f,"member "+q+" needs a name")
r.j(0,q,new A.ha(q,s))
return new A.E()},
jZ(a){var s,r,q,p=a.e,o=p.h(0,"id")
o.toString
A.b(o)
s=this.p3
r=s.a.h(0,o)
if(r==null)return this.p(a,B.f,"no member "+o+" to rename")
p=p.h(0,"name")
p.toString
q=B.b.I(A.b(p))
if(q.length===0)return this.p(a,B.f,"member "+o+" needs a name")
s.j(0,o,new A.ha(r.a,q))
return new A.E()},
iP(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"movementId")
k.toString
A.b(k)
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
B.a.m(m.c,new A.W("conflict:"+a.a,B.H,k,"Changed on two devices: kept "+r+", the other device chose "+p+"."))
return new A.bu()}r.j(0,k,q.hN(s).eU(o+1))
return new A.E()},
kw(a){var s,r,q,p,o,n=this,m=a.e,l=m.h(0,"primaryId")
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
break A}r=q.f.J(0,p.f)
if(!r){r="the amounts differ"
break A}r=q.cx!=null||p.cx!=null
if(r){r="one of them is already linked"
break A}r=n.e5(m).ga4(0)
if(!r){r=m+" already has messages linked to it"
break A}r=!0
if(p.ch==null)if(p.ay==null){r=n.hA(p).a.l(0,$.L())
r=r!==0}if(r){r=m+" is already paired, linked or refunded"
break A}r=p.CW
if(r!=null){r=m+" is verified by a statement line"
break A}if(p.y.d&&!q.y.d){r=m+" is verified and "+l+" is not"
break A}r=n.dZ.u(0,A.on(l,m))
if(r){r="the owner said they are different payments"
break A}r=null
break A}if(r!=null)return n.p(a,B.v,m+" not linked to "+l+": "+r)
s.j(0,m,p.hQ(l))
return new A.E()},
kz(a){var s,r,q=a.e,p=q.h(0,"primaryId")
p.toString
A.b(p)
q=q.h(0,"duplicateId")
q.toString
A.b(q)
s=this.b
r=s.a.h(0,q)
if(r==null||r.cx!==p)return this.p(a,B.f,q+" is not linked to "+p)
s.j(0,q,r.hQ(null))
this.dZ.m(0,A.on(p,q))
return new A.E()},
j1(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"outflowId")
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
if(q===A.O(n)){n=o.dx
m=i.h(0,"inflowVersion")
m.toString
m=n!==A.O(m)
n=m}else n=!0
if(n){B.a.m(j.c,new A.W("conflict:"+a.a,B.H,h,"Changed since the card bill payment was proposed; "+h+" and "+s+" were left as they are."))
return new A.bu()}l=new A.oe()
A:{n=j.r.a
m=n.h(0,p.c)
m=m==null?null:m.gaR()
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
hA(a){var s=this.b.c.h(0,a.a)
return s==null?A.a2($.L(),a.f.b):s},
i_(a){var s,r,q,p,o,n,m,l=A.a2($.L(),a.f.b)
for(s=this.f2(a.b),r=J.Q(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=a.a;s.n();){p=r.gt()
if(p.d===B.a_&&p.ay===q){p=p.f
o=p.b
n=l.b
if(o!==n)A.f(A.a6(n,o))
p=l.a.B(0,p.a)
l=new A.q(p,n)
m=B.e.h(0,n)
if(m==null)A.f(A.x(n,"currency","is not a supported currency"))
if((p.b<=0?0:Math.max(p.gv().b,0))>m)A.f(A.y(n+" allows "+A.i(m)+" decimal places",p.k(0),null))}}return l},
kf(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a3.e,a2=a1.h(0,"refundId")
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
if(n===A.O(m)){m=o.dx
l=a1.h(0,"sourceVersion")
l.toString
l=m!==A.O(l)
m=l}else m=!0
if(m){B.a.m(a.c,new A.W("conflict:"+a3.a,B.H,a2,"Changed since the refund was proposed; "+a2+" and "+s+" were left as they are."))
return new A.bu()}m=a1.h(0,"cancellation")
m.toString
A.cN(m)
l=o.d
if(l===B.a0){k=o.ch
k=k==null?a0:B.b.am(k,"forbook:")
j=k===!0}else j=!1
i=j?a.i_(o):a.hA(o)
A:{k=p.e
if(k!==B.m){l=a2+" is not money coming back"
break A}k=p.d
k=k!=null&&k!==B.G
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
r.j(0,a2,p.ff(a0,l,m,B.a_,n+1))
r.j(0,a2,q.h(0,a2).lp(s))
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
r.j(0,a2,A.bP(q,n,k,l,d,c,a0,B.m,h,a2,s,a0,a0,m,a0,e,a0,new A.dP("operation",a3.a,a3.f,f.d),a0,a0,B.G,1))
return new A.E()}b=m?"cancel:"+s:a0
r.j(0,a2,p.lD(s,b,B.G,n+1))
if(m)r.j(0,s,o.lx(b,o.dx+1))
return new A.E()},
kS(a){var s,r,q,p,o,n,m,l,k,j=this,i=" is not on a bank account",h=a.e,g=h.h(0,"outflowId")
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
if(q===A.O(n)){n=o.dx
m=h.h(0,"inflowVersion")
m.toString
m=n!==A.O(m)
n=m}else n=!0
if(n){B.a.m(j.c,new A.W("conflict:"+a.a,B.H,g,"Changed since the transfer was proposed; "+g+" and "+s+" were left as they are."))
return new A.bu()}l=new A.oB(j)
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
break A}n=!A.C5(p)||!A.C5(o)
if(n){n=u.y
break A}n=null
break A}if(n!=null)return j.p(a,B.P,"not a transfer: "+n)
k="transfer:"+g
r.j(0,g,p.dT(k,B.L,q+1))
r.j(0,s,o.dT(k,B.L,o.dx+1))
return new A.E()},
jX(a){var s,r,q,p=this,o=a.e,n=o.h(0,"movementId")
n.toString
A.b(n)
s=p.b
r=s.a.h(0,n)
if(r==null)return p.p(a,B.f,"no movement "+n+" to mark as a transfer")
q=r.dx
o=o.h(0,"baseVersion")
o.toString
if(q!==A.O(o)){B.a.m(p.c,new A.W("conflict:"+a.a,B.H,n,"Changed since it was marked as a transfer elsewhere; "+n+" was left as it is."))
return new A.bu()}A:{o=p.r.a.h(0,r.c)
if(o==null)o=null
else o=o.gaR()||o.d===B.a7
o=o!==!0
if(o){o=n+" is not on a bank account"
break A}o=r.d
if(o!=null){o=n+" is already filed as "+o.b
break A}o=A.C5(r)
if(!o){o=n+" is already paired or linked"
break A}o=null
break A}if(o!=null)return p.p(a,B.P,"not marked as a transfer: "+o)
s.j(0,n,r.lz(B.L,q+1))
return new A.E()},
kV(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a5.e,a4=a3.h(0,"movementId")
a4.toString
A.b(a4)
s=a2.b
r=s.a.h(0,a4)
if(r==null)return a2.p(a5,B.f,"no movement "+a4+" to unmark")
q=r.dx
a3=a3.h(0,"baseVersion")
a3.toString
if(q!==A.O(a3)){B.a.m(a2.c,new A.W("conflict:"+a5.a,B.H,a4,"Changed since it was put back to file elsewhere; "+a4+" was left as it is."))
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
s.j(0,a4,A.bP(o,m,k,p,g,e,d,n,j,a3,c,f,r.db,l,b,h,a1,i,a0,a,null,q).eU(q+1))
return new A.E()},
jC(a){var s,r,q=this,p=a.e.h(0,"movementId")
p.toString
A.b(p)
s=q.b.a.h(0,p)
if(s==null)return q.p(a,B.f,"no movement "+p+" to flag")
r=s.cx
if(r!=null)return q.p(a,B.f,p+" is another message about "+r+"; flag that one")
q.rx.aI(p,new A.of(p,a))
return new A.E()},
jD(a){var s,r,q,p=a.e,o=p.h(0,"movementId")
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
if(p&&q)return new A.E()
if(p)return this.p(a,B.f,"no open flag on "+o)
if(q)s.Z(0,o)
else if(r.d==null)s.j(0,o,new A.eu(o,r.b,r.c,a.f))
return new A.E()},
jM(a){var s,r=a.e.h(0,"event")
r.toString
s=A.DO(t.f.a(r).G(0,t.N,t.X))
r=this.go
if(B.a.M(r,new A.oh(s)))return this.p(a,B.v,"message "+s.a+" is already held")
B.a.m(r,s)
return new A.E()},
jO(a){var s,r,q=a.e.h(0,"event")
q.toString
s=A.DO(t.f.a(q).G(0,t.N,t.X))
q=this.k3
r=s.a
if(q.E(r))return this.p(a,B.v,"message "+r+" is already held as suspicious")
q.j(0,r,s)
return new A.E()},
kO(a){var s=this,r=a.e.h(0,"eventKey")
r.toString
A.b(r)
if(!s.k3.E(r)||s.k4.u(0,r))return s.p(a,B.f,"no suspicious message "+r+" waiting to be checked")
s.k4.m(0,r)
return new A.E()},
jN(a){var s,r,q,p,o,n,m=a.e,l=m.h(0,"eventKey")
l.toString
A.b(l)
s=this.ok
if(B.a.M(s,new A.oi(l)))return this.p(a,B.v,"reminder "+l+" is already listed")
r=A.m(m.h(0,"amount"))
q=m.h(0,"sender")
q.toString
A.b(q)
p=A.m(m.h(0,"accountAlias"))
if(r==null)o=null
else{o=m.h(0,"currency")
o.toString
A.b(o)
o=A.a2(A.ad(r),o)}n=m.h(0,"receivedAtUtc")
n.toString
A.aE(A.c0(A.b(n)).F(),B.q)
if(m.h(0,"dueOn")==null)n=null
else{n=m.h(0,"dueOn")
n.toString
n=A.aw(A.b(n))}B.a.m(s,new A.fn(l,q,p,o,n,J.Y(m.h(0,"failed"),!0)))
return new A.E()},
kH(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"fileId")
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
q=B.O.b_(A.vi(q))
p=k.h(0,"receivedAtUtc")
p.toString
p=A.c0(A.b(p)).F()
o=k.h(0,"source")
o.toString
n=new A.dY(j,s,r,q,p,A.b(o),null)
q=l.id
if(q.E(j))return l.p(a,B.v,"statement file "+j+" is already kept")
p=A.D("\\d{9,}",!0,!1)
if(p.b.test(r))return l.p(a,B.h,"a statement file name may not hold a full number")
if(!l.r.a.E(s))return l.p(a,B.f,"statement file "+j+" is for an unregistered account")
m=l.bU("f:"+j,s)
q.j(0,j,m===s?n:n.hh(m))
return new A.E()},
kJ(a){var s,r,q,p,o=a.e,n=o.h(0,"fileId")
n.toString
A.b(n)
s=this.id
r=s.h(0,n)
if(r==null)return this.p(a,B.f,"no statement file "+n)
q=o.h(0,"attempt")
q.toString
B.O.b_(A.vi(q))
q=o.h(0,"outcome")
q.toString
A.b(q)
p=A.m(o.h(0,"reason"))
A.m(o.h(0,"statementId"))
A.m(o.h(0,"readers"))
A.m(o.h(0,"reader"))
s.j(0,n,new A.dY(r.a,r.b,r.c,r.d,r.e,r.f,new A.u5(q,p)))
return new A.E()},
kn(a){var s,r,q,p,o=a.e,n=o.h(0,"id")
n.toString
A.b(n)
s=this.c
if(B.a.M(s,new A.ou(n)))return new A.E()
r=o.h(0,"reason")
r.toString
r=A.ag(B.kg,A.b(r),t.CW)
q=o.h(0,"subjectId")
q.toString
A.b(q)
p=o.h(0,"explanation")
p.toString
B.a.m(s,new A.W(n,r,q,A.b(p)))
return new A.E()},
ko(a){var s,r,q,p,o,n,m,l=this,k=a.e,j=k.h(0,"itemId")
j.toString
A.b(j)
if(!B.a.M(B.jn,B.b.gi8(j)))return l.p(a,B.f,"only a missing statement or a reminder can be dismissed")
if(B.b.am(j,"missing-statement:")){s=k.h(0,"reason")
if(s!=null&&!J.Y(s,"noActivity"))return l.p(a,B.h,"a missing statement is dismissed for no activity only")
r=B.b.ad(j,18)
q=B.b.eZ(r,":")
p=A.aw(B.b.ad(r,q+1))
o=A.m(k.h(0,"through"))
n=A.aE(a.f,B.q)
if(o==null)m=n.l(0,p)<0?p:n
else m=A.aw(o)
if(q<=0||m.l(0,p)<0)return l.p(a,B.h,"no stretch "+j+" up to "+m.k(0)+" to dismiss")
k=l.RG
B.a.m(k,new A.fW(l.bU("d:"+k.length,B.b.X(r,0,q)),p,m))}l.R8.m(0,j)
return new A.E()},
kp(a){var s=a.e,r=s.h(0,"itemId"),q=s.h(0,"until")
if(typeof r!="string"||!B.b.am(r,"missing-statement:")||typeof q!="string")return this.p(a,B.h,"only a missing statement is snoozed, to a day")
this.y1.j(0,r,A.aw(q))
return new A.E()},
kg(a){var s=a.a
if(!B.b.am(s,"reminder:"))return this.p(a,B.h,"not a reminder key")
this.xr.m(0,s)
return new A.E()},
iW(a){var s=a.e,r=s.h(0,"on"),q=s.h(0,"hour"),p=s.h(0,"minute")
if(!A.ed(r)||!A.cu(q)||!A.cu(p)||q<0||q>23||p<0||p>59)return this.p(a,B.h,"a brief time is on or off, an hour and a minute")
return new A.E()},
iV(a){var s=a.e.h(0,"date")
if(typeof s!="string"||a.a!=="brief:"+s)return this.p(a,B.h,"not a brief key")
this.m0.m(0,s)
return new A.E()},
j_(a){var s=a.e.h(0,"calendarId")
if(typeof s!="string"||s.length===0)return this.p(a,B.h,"no calendar id")
return new A.E()},
iZ(a){var s=a.a
if(!B.b.am(s,"calendar-event:"))return this.p(a,B.h,"not a calendar event key")
this.m1.m(0,s)
return new A.E()},
j0(a){var s,r,q=a.e,p=q.h(0,"subjectId"),o=q.h(0,"eventId"),n=q.h(0,"hash"),m=q.h(0,"n"),l=q.h(0,"removed"),k=A.ax(q.h(0,"date"))
if(typeof p!="string"||typeof o!="string"||typeof n!="string"||!A.cu(m)||!A.ed(l)||k==null)return this.p(a,B.h,"a calendar write names its subject, event, date and count")
if(a.a!=="calendar-sync:"+p+":"+A.i(m))return this.p(a,B.h,"not a calendar key")
s=this.m2
r=s.h(0,p)
r=r==null?null:r.a[3]
if((r==null?0:r)>=m)return new A.E()
s.j(0,p,new A.jn([k,o,n,m,l]))
return new A.E()},
kh(a){if(!A.ed(a.e.h(0,"on")))return this.p(a,B.h,"the reminders switch is on or off")
return new A.E()},
iQ(a){var s,r,q,p,o,n,m=this,l=a.e,k=l.h(0,"billId")
k.toString
A.b(k)
s=A.m(l.h(0,"mark"))
l=s==null
r=l?null:A.BZ(B.jh,t.d6).h(0,s)
if(!l&&r==null)return m.p(a,B.h,"no bill mark "+s)
q=A.CF(m,null)
p=A.F(q)
o=A.aN(new A.n(q,p.i("j(1)").a(new A.oc(k)),p.i("n<1>")),t.ok)
if(o==null)return m.p(a,B.f,"no bill "+k)
n=o.dA(A.aE(a.f,B.q))
if(!A.LM(n,r)){l=l?"clear":s
return m.p(a,B.f,"a "+n.b+" bill cannot be marked "+l)}l=m.x2
if(r==null)l.Z(0,k)
else l.j(0,k,r)
return new A.E()},
k_(a){var s,r,q,p,o=this,n=null,m=a.e,l=m.h(0,"month")
l.toString
A.b(l)
m=m.h(0,"openItems")
m.toString
A.O(m)
s=$.D4().aj(l)
if(s==null||m<0)return o.p(a,B.h,"no month "+l+" to close")
r=s.b
if(1>=r.length)return A.a(r,1)
q=r[1]
q.toString
q=A.X(q,n,n)
if(2>=r.length)return A.a(r,2)
r=r[2]
r.toString
p=new A.z(q,A.X(r,n,n)+1,1).aC(-1)
if(A.aE(a.f,B.q).l(0,p)<=0)return o.p(a,B.f,"a month closes only after it ends")
r=o.ry
if(r.E(l))return o.p(a,B.v,l+" is already closed")
r.j(0,l,m)
return new A.E()},
kW(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.e,h=i.h(0,"holdingId")
h.toString
A.b(h)
s=i.h(0,"name")
s.toString
A.b(s)
r=i.h(0,"kind")
r.toString
r=A.ag(B.k8,A.b(r),t.xN)
q=i.h(0,"bookId")
q.toString
A.b(q)
p=i.h(0,"value")
p.toString
p=A.aO(t.f.a(p).G(0,t.N,t.X))
o=i.h(0,"asOf")
o.toString
o=A.aw(A.b(o))
n=new A.eI(h,s,r,q,p,o,A.m(i.h(0,"accountId")))
for(i=j.to,s=i.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>")),m=null;s.n();){l=s.d
if(l.a===h)r=m==null||l.f.l(0,m.f)>0
else r=!1
if(r)m=l}s=j.gcE()
k=A.NE(n,j.r,new A.at(s,A.o(s).i("at<1>")),m,A.aE(a.f,B.q))
if(k!=null)return j.p(a,B.h,k)
i.j(0,new A.p(h,o),n)
return new A.E()},
kl(a){var s,r,q,p,o,n=this,m=null,l=A.aE(a.f,B.q),k=A.IO(a.e,l),j=k.b,i=$.D4().aj(j),h=i!=null
if(h){s=i.b
if(1>=s.length)return A.a(s,1)
r=s[1]
r.toString
r=A.X(r,m,m)
if(2>=s.length)return A.a(s,2)
s=s[2]
s.toString
q=new A.z(r,A.X(s,m,m)+1,1).aC(-1)}else{s=$.GK()
q=s.b.test(j)?new A.z(A.X(j,m,m),13,1).aC(-1):m}if(q==null||n.aG(k.a)==null||k.e.length===0)return n.p(a,B.h,"no report "+k.a+" "+j+" to keep")
if(l.l(0,q)<=0)return n.p(a,B.f,"a report is kept once its period ends")
if(h){h=q.a
h=A.Gb(n,k.a,q.b,l,h).a===B.b6}else h=!1
if(h)return n.p(a,B.f,"a month is kept once it is final or finalised")
h=n.x1
s=A.F(h)
p=A.C0(new A.n(h,s.i("j(1)").a(new A.ot(k)),s.i("n<1>")),t.io)
s=k.c
r=p==null
o=r?m:p.c
if(s!==(o==null?0:o)+1)return n.p(a,B.v,"version "+s+" of "+j+" is out of turn")
if(!r&&A.IQ(p.e,k.e))return n.p(a,B.v,j+" has not changed since version "+p.c)
B.a.m(h,k)
return new A.E()},
kI(a){var s,r,q,p=this,o=a.e,n=o.h(0,"fileId")
n.toString
A.b(n)
o=o.h(0,"accountId")
o.toString
A.b(o)
s=p.id
r=s.h(0,n)
if(r==null)return p.p(a,B.f,"no statement file "+n)
if(!p.r.a.E(o))return p.p(a,B.f,"no account "+o)
q=r.r
if(q==null)q=null
else{q=q.a
q=q==="read"||q==="alreadyRead"}if(q===!0)return p.p(a,B.v,"statement file "+n+" is already read for "+r.b)
s.j(0,n,r.hh(p.bU("f:"+n,o)))
return new A.E()},
jS(a){var s,r,q,p,o,n,m,l=this,k={},j=a.e
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
if(n)m=B.bP
else{p=p.h(0,l.aW(q))
p.toString
p=A.c([p],t.Q)
B.a.a1(p,l.cc(l.aW(q)))
m=p}if(n||!B.a.M(m,new A.ol(k,o)))return l.p(a,B.f,"no account "+q+" of "+k.a+" ending in "+o)
p=l.k2
p.Z(0,k.a+"|"+r)
k=k.a
p.j(0,k+"|"+r,new A.d0(k,r,l.bU("p:"+k+"|"+r,q),a.a))
return new A.E()},
jR(a){var s=a.e.h(0,"pickKey"),r=this.k2,q=A.o(r).i("ab<1,2>"),p=A.aN(new A.n(new A.ab(r,q),q.i("j(h.E)").a(new A.ok(s)),q.i("n<h.E>")),t.ub)
if(p==null)return this.p(a,B.v,"no remembered pick "+A.i(s))
q=p.a
r.Z(0,q)
this.ch.Z(0,"p:"+q)
return new A.E()},
kx(a){var s,r=a.e
if(!B.mj.lj(r.gah())||!B.mi.u(0,r.h(0,"action")))return this.p(a,B.h,"a secret audit may hold only which secret, what and when")
s=r.h(0,"secretId")
s.toString
A.b(s)
s=r.h(0,"action")
s.toString
A.b(s)
s=r.h(0,"atUtc")
s.toString
A.c0(A.b(s)).F()
B.a.m(this.k1,new A.ls())
return new A.E()},
jV(a){var s,r,q=this,p="fromEvent",o=A.LC(q,q.a7,a)
if(o!=null)return q.p(a,B.h,o)
s=a.e.h(0,"fields")
if(a.d==="life.set"&&t.f.b(s)&&typeof s.h(0,p)=="string"){r=s.h(0,p)
r.toString
q.hg.m(0,A.b(r))}return new A.E()},
kK(a){var s,r,q,p,o,n,m,l,k=this,j=a.e,i=j.h(0,"statementId"),h=j.h(0,"loans"),g=typeof i=="string"?B.a.eW(k.fx,new A.ow(i)):-1
if(g<0||!t.j.b(h))return k.p(a,B.h,"no statement "+A.i(i)+" to give its loans")
s=null
try{r=A.c([],t.Ev)
for(j=J.Q(h),p=t.f,o=t.N,n=t.X;j.n();){q=j.gt()
m=q
m.toString
J.bU(r,A.El(p.a(m).G(0,o,n)))}s=r}catch(l){r=k.p(a,B.h,"the loans of "+A.i(i)+" do not read")
return r}r=k.fx
if(!(g>=0&&g<r.length))return A.a(r,g)
j=r[g]
B.a.j(r,g,new A.c8(j.a,j.b,j.c,j.d,j.e,j.f,j.r,j.w,j.x,j.y,j.z,t.nd.a(s)))
return new A.E()},
kc(a){var s,r=a.e.h(0,"keys")
if(t.j.b(r)){s=J.an(r)
s=s.ga4(r)||s.M(r,new A.oo())}else s=!0
if(s)return this.p(a,B.h,"a rejected proposal names its events by their hashes")
this.hg.a1(0,J.dh(r,t.N))
return new A.E()},
fE(a){var s,r=a.d,q=!0
if(!(r===B.a0&&a.at!=null))if(!(r===B.b2&&a.at!=null))if(!(r===B.w&&a.ch!=null&&a.at!=null))if(!(r===B.n&&a.ch!=null&&a.at!=null)){if(r===B.a_){s=a.ch
s=s==null?null:B.b.am(s,"forbook:")
s=s===!0}else s=!1
if(!s)r=r===B.G&&a.at!=null||B.b.am(a.c,"owed-to-person:")
else r=q}else r=q
else r=q
else r=q
else r=q
return r},
jG(a){var s,r,q=a.ch
if(q==null||!B.b.am(q,"forbook:"))return null
if(a.a===B.b.ad(q,8)){s=this.b.a
r=s.h(0,q+":expense")
s=r==null?s.h(0,q+":income"):r}else s=null
return s},
ex(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=a2.e,a1=a0.h(0,"movementId")
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
m=n===B.m
if(q.cx==null){l=q.c
l=B.b.am(l,"owed-to")||B.b.am(l,"held-by")}else l=!0
if(l)return b.p(a2,B.f,"only money paid out of or into an account is for another book")
if(b.aG(p)==null||p===q.b)return b.p(a2,B.f,"pick another book than "+q.b)
if(o==null||o.b!==b.bX(p)||A.hL(o)!==m)return b.p(a2,B.f,m?"money received is filed under an income category of "+p+"'s":u.s+p+"'s")
l=q.d
if(l!=null)k=l!==(m?B.w:B.n)
else k=!1
if(k)return b.p(a2,B.f,a1+" is already filed as "+l.b+"; put it back first")
l=q.dx
k=a0.h(0,"baseVersion")
k.toString
if(l!==A.O(k)){B.a.m(b.c,new A.W("conflict:"+a2.a,B.H,a1,"Changed since it was marked as paid for "+p+"; "+a1+" was left as it is."))
return new A.bu()}j="forbook:"+a1
k=m?"income":"expense"
i=j+":"+k
if(r.E(i))return b.p(a2,B.v,"movement "+i+" already exists")
r=m?B.b2:B.a0
s.j(0,a1,q.ff(a,p,j,r,l+1))
r=q.b
l=m?"held-by:"+r:"owed-to:"+r
k=m?B.w:B.n
h=q.f
g=q.r
f=q.w
e=q.x
d=q.y
c=q.z
s.j(0,i,A.bP(l,h,f,p,o.a,r,a,n,e,i,a,a,a,g,j,c,a,new A.dP("operation",a2.a,a2.f,d.d),a,a,k,1))
b.p1.Z(0,a1)
return new A.E()},
jF(a){var s,r,q,p,o,n,m=this,l=null,k=a.e,j=k.h(0,"movementId")
j.toString
A.b(j)
s=m.b
r=s.a
q=r.h(0,j)
p=q==null
o=p?l:q.ch
if(p||o==null||o!=="forbook:"+j)return m.p(a,B.f,j+" is not paid for another book")
if(new A.M(r,A.o(r).i("M<2>")).M(0,new A.og(j)))return m.p(a,B.ae,"the advance on "+j+" has a settlement; it stays")
r=m.aD
p=o+":expense"
if(r.eY(p)!=null||r.eY(o+":income")!=null)return m.p(a,B.ae,"an invoice counts "+j+"'s other side; it stays")
r=q.dx
n=k.h(0,"baseVersion")
n.toString
if(r!==A.O(n)){B.a.m(m.c,new A.W("conflict:"+a.a,B.H,j,"Changed since; "+j+" was left paid for "+A.i(q.at)+"."))
return new A.bu()}s.Z(0,p)
s.Z(0,o+":income")
s.j(0,j,q.ff(l,l,l,l,r+1))
return new A.E()},
iX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=a.e,b=c.h(0,"id")
b.toString
A.b(b)
s=c.h(0,"bookId")
s.toString
A.b(s)
r=c.h(0,"memberId")
r.toString
A.b(r)
q=e.d.a.h(0,c.h(0,"categoryId"))
p=A.cc(c.h(0,"date"))
if(e.aG(s)==null||s==="personal")return e.p(a,B.f,"a person's payment is for a company or the property")
if(!e.p3.a.E(r))return e.p(a,B.f,"no household member "+r)
if(q==null||q.b!==e.bX(s)||A.hL(q))return e.p(a,B.f,u.s+s+"'s")
if(p==null)return e.p(a,B.h,"a payment needs its date")
o=c.h(0,"amount")
o.toString
A.b(o)
n=c.h(0,"currency")
n.toString
A.b(n)
m=A.a2(A.ad(o),n)
if(m.a.a.ga8(0)<=0)return e.p(a,B.h,"an amount is more than zero")
l=A.m(c.h(0,"invoiceId"))
o=l!=null
if(o){n=e.aD.c.h(0,l)
n=(n==null?d:n.b)!==s}else n=!1
if(n)return e.p(a,B.f,"invoice "+l+" is not in "+s+"'s book")
if(c.h(0,"sgd")!=null){n=c.h(0,"sgd")
n.toString
k=A.a2(A.ad(A.b(n)),"SGD")
j=A.dt(A.i(c.h(0,"rate")))
i=A.cc(c.h(0,"rateDate"))
if(j==null||j.l(0,$.L())<=0||i==null||k.a.a.ga8(0)<=0||m.b==="SGD")return e.p(a,B.h,"an SGD amount comes with its rate and date (LED-09)")
h=new A.lz()}else h=d
g="person:"+b
b=A.m(c.h(0,"payee"))
b=b==null?d:B.b.I(b)
f=e.dC(a,A.c([A.bP("owed-to-person:"+r,m,p,s,q.a,d,r,B.k,p,g,d,d,d,d,d,b,d,new A.dP("manual",a.a,a.f,!1),d,d,B.n,1)],t.A))
if(f instanceof A.E){if(h!=null)e.aD.y.j(0,g,h)
if(o)J.bU(e.aD.d.aI(l,new A.od()),g)}return f},
jQ(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="invoiceId",f="baseVersion",e="movement.forBook",d=a0.e,c=h.aD,b=c.c.h(0,d.h(0,g)),a=d.h(0,"movementId")
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
l=r?B.m:B.k
if(q.e!==l)return h.p(a0,B.f,r?"rent comes in":"a bill is paid out")
k=r?B.w:B.n
j=b.r
r=!1
if(j!=null)if(!h.fE(q)){r=q.d
r=r==null||r===k}if(r){r=q.dx
o=d.h(0,f)
o.toString
if(r!==A.O(o)){B.a.m(h.c,new A.W("conflict:"+a0.a,B.H,a,"Changed since; "+a+" was not linked to invoice "+b.a+"."))
return new A.bu()}s.j(0,a,q.lA(j,k,r+1))
h.p1.Z(0,a)}else{s=q.d
if(s!=null&&s!==k)return h.p(a0,B.f,a+" is filed as "+s.b)}n=a}else if(m!=null&&m.b===p)n=m.a
else{s=b.y!=null
if(s)r=q.e!==B.m||b.r==null
else r=!1
if(r)return h.p(a0,B.f,"rent is money received, filed as the property's income")
else{j=b.r
if(s){i=h.ex(new A.ai(a0.a,a0.b,a0.c,e,A.S(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.E))return i
n=o+":income"}else{if(j==null)return h.p(a0,B.f,"give invoice "+b.a+" a category first")
i=h.ex(new A.ai(a0.a,a0.b,a0.c,e,A.S(["movementId",a,"baseVersion",d.h(0,f),"bookId",p,"categoryId",j],t.N,t.X),a0.f))
if(!(i instanceof A.E))return i}}}if(c.eY(n)!=null)return h.p(a0,B.v,a+" is already linked to an invoice")
J.bU(c.d.aI(b.a,new A.oj()),n)
return new A.E()},
p(a,b,c){var s=a.a
B.a.m(this.c,new A.W("rejected:"+s,b,s,c))
return new A.tM()}}
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
$S:79}
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
$1(a){return!this.a.b.a.E("mv-"+B.b.X(A.vx(B.aH.O(B.F.O(t.Ap.a(a).a)).a),0,20))},
$S:39}
A.p1.prototype={
$1(a){return!this.a.k4.u(0,t.Ap.a(a).a)},
$S:39}
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
$S:19}
A.om.prototype={
$1(a){return a==null?"no note":'the note "'+a+'"'},
$S:34}
A.oA.prototype={
$1(a){return t.v.a(a).a===this.a.a},
$S:9}
A.oy.prototype={
$1(a){return t.dh.a(a).a===this.a.a},
$S:22}
A.oz.prototype={
$1(a){var s,r,q
t.dh.a(a)
s=this.a
if(a.b===s.b){r=a.d
if(r==null)r=a.c
q=s.d
s=Math.abs(r.aa(q==null?s.c:q))<=20}else s=!1
return s},
$S:22}
A.ox.prototype={
$1(a){return t.dh.a(a).a===this.a},
$S:22}
A.oG.prototype={
$1(a){return!A.E_(t.b.a(a).d,this.a)},
$S:2}
A.oH.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:9}
A.oI.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:103}
A.oJ.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.oK.prototype={
$1(a){return t.to.a(a)},
$S:83}
A.oL.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:38}
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
p=s.aW(q)
if(p===q)r.Z(0,a)
else r.j(0,a,q)
return p===b?null:p},
$S:144}
A.op.prototype={
$1(a){return this.a.u(0,t.W.a(a).c)},
$S:1}
A.oq.prototype={
$1(a){return t.b.a(a).cx!=null},
$S:2}
A.p_.prototype={
$2(a,b){var s=a===1?"":"s"
return""+a+" "+b+s},
$S:143}
A.oO.prototype={
$1(a){return t.v.a(a).b===this.a},
$S:9}
A.oP.prototype={
$1(a){return t.W.a(a).c===this.a},
$S:1}
A.oQ.prototype={
$1(a){return t.dh.a(a).b===this.a},
$S:22}
A.oS.prototype={
$1(a){return t.R.a(a).r===this.a},
$S:17}
A.oT.prototype={
$1(a){return t.rv.a(a).c===this.a},
$S:103}
A.oU.prototype={
$1(a){var s=t.b.a(a).as
s=s==null?null:s.w
return s===this.a},
$S:2}
A.oV.prototype={
$1(a){return t.to.a(a)},
$S:83}
A.oW.prototype={
$1(a){var s
t.AB.a(a)
s=this.a
return a.d===s||a.e===s},
$S:38}
A.oX.prototype={
$1(a){return t.A9.a(a).b===this.a},
$S:138}
A.oY.prototype={
$1(a){return t.ch.a(a).c===this.a},
$S:136}
A.oZ.prototype={
$1(a){return t.AD.a(a).r===this.a},
$S:135}
A.oR.prototype={
$1(a){return t.tD.a(a).z===this.a},
$S:134}
A.oe.prototype={
$1(a){var s=a.d
return(s==null||s===B.X)&&a.ch==null&&a.cx==null},
$S:1}
A.oB.prototype={
$1(a){var s=this.a.r.a.h(0,a.c)
if(s==null)s=null
else s=s.gaR()||s.d===B.a7
return s===!0},
$S:1}
A.of.prototype={
$0(){var s=this.b
return new A.eu(this.a,s.f,s.a,null)},
$S:122}
A.oh.prototype={
$1(a){return t.Ap.a(a).a===this.a.a},
$S:39}
A.oi.prototype={
$1(a){return t.pL.a(a).a===this.a},
$S:119}
A.ou.prototype={
$1(a){return t.k.a(a).a===this.a},
$S:41}
A.oc.prototype={
$1(a){return t.ok.a(a).a===this.a},
$S:114}
A.ot.prototype={
$1(a){var s
t.io.a(a)
s=this.a
return a.a===s.a&&a.b===s.b},
$S:112}
A.ov.prototype={
$1(a){return A.cN(a)},
$S:111}
A.ol.prototype={
$1(a){t.b.a(a)
return A.hK(a.c)===this.a.a&&B.b.bG(a.b,this.b)},
$S:2}
A.ok.prototype={
$1(a){return t.ub.a(a).b.d===this.a},
$S:109}
A.ow.prototype={
$1(a){return t.v.a(a).a===this.a},
$S:9}
A.oo.prototype={
$1(a){var s
if(typeof a=="string"){s=$.I_()
s=!s.b.test(a)}else s=!0
return s},
$S:108}
A.og.prototype={
$1(a){t.W.a(a)
return a.d===B.a_&&a.ay===this.a},
$S:1}
A.od.prototype={
$0(){return A.c([],t.s)},
$S:99}
A.oj.prototype={
$0(){return A.c([],t.s)},
$S:99}
A.fW.prototype={}
A.eu.prototype={}
A.ls.prototype={}
A.mh.prototype={
mD(a){var s,r,q,p=this
if(p.e.Z(0,a)){s=A.v(t.N,t.W)
for(r=p.a,r=new A.a1(r,r.r,r.e,A.o(r).i("a1<2>"));r.n();){q=r.d
if(q.c===a)s.j(0,q.a,q)}p.d.j(0,a,s)}s=p.d.h(0,a)
s=s==null?null:new A.M(s,A.o(s).i("M<2>"))
return s==null?B.ab:s},
fI(a,b){var s,r,q,p
if(a!=null)s=b==null||a.c!==b.c
else s=!1
if(s){s=this.d
r=a.c
q=s.h(0,r)
p=q==null
if(!p)q.Z(0,a.a)
if(!p&&q.a===0)s.Z(0,r)
if(b!=null)this.e.m(0,b.c)}if(b!=null){s=this.d
r=b.c
p=s.h(0,r)
if(p==null){p=A.v(t.N,t.W)
s.j(0,r,p)
s=p}else s=p
s.j(0,b.a,b)}},
eq(a,b){var s,r,q,p,o=a==null?null:a.ay
if(o==null||a.d!==B.G||a.cx!=null)return
s=this.c
r=s.h(0,o)
if(b)s.j(0,o,r==null?a.f:r.B(0,a.f))
else{q=r.a9(0,a.f)
p=q.a.l(0,$.L())
if(p===0)s.Z(0,o)
else s.j(0,o,q)}},
j(a,b,c){var s,r=this
A.b(b)
t.W.a(c)
s=r.a.h(0,b)
r.eq(s,!1)
r.ip(0,b,c)
r.eq(c,!0)
r.fI(s,c)},
Z(a,b){var s=this,r=s.a.h(0,b)
s.eq(r,!1)
s.fI(r,null)
return s.iq(0,b)}}
A.hb.prototype={}
A.zQ.prototype={
$1(a){return a.l(0,this.a)>=0&&a.l(0,this.b)<=0},
$S:106}
A.hh.prototype={
U(){return"ReportState."+this.b}}
A.jV.prototype={}
A.pc.prototype={}
A.zR.prototype={
$1(a){var s
t.b.a(a)
if(a.r===this.a){s=a.d
s=s!==B.o&&s!==B.x&&a.w.l(0,this.b)<=0}else s=!1
return s},
$S:2}
A.zS.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.zT.prototype={
$1(a){var s
t.sH.a(a)
s=this.a
return s.l(0,a.a)>=0&&s.l(0,a.b)<=0},
$S:76}
A.bg.prototype={
U(){return"MovementType."+this.b}}
A.bY.prototype={
U(){return"PaymentMethod."+this.b}}
A.cV.prototype={
U(){return"Direction."+this.b}}
A.dP.prototype={}
A.V.prototype={
bp(a,b,c,d,e,f,g,h){var s=this,r=g==null?s.d:g,q=a==null?s.f:a,p=e==null?s.y:e,o=b==null?s.Q:b,n=c==null?s.ay:c,m=d==null?s.ch:d,l=f==null?s.CW:f,k=h==null?s.dx:h
return A.bP(s.c,q,s.w,s.b,o,s.at,s.ax,s.e,s.x,s.a,n,s.as,s.db,s.r,m,s.z,s.cy,p,s.cx,l,r,k)},
lA(a,b,c){var s=null
return this.bp(s,a,s,s,s,s,b,c)},
eU(a){var s=null
return this.bp(s,s,s,s,s,s,s,a)},
lz(a,b){var s=null
return this.bp(s,s,s,s,s,s,a,b)},
dT(a,b,c){var s=null
return this.bp(s,s,s,a,s,s,b,c)},
lp(a){var s=null
return this.bp(s,s,a,s,s,s,s,s)},
lD(a,b,c,d){var s=null
return this.bp(s,s,a,b,s,s,c,d)},
lx(a,b){var s=null
return this.bp(s,s,s,a,s,s,s,b)},
lC(a,b,c,d){var s=null
return this.bp(a,s,s,s,b,c,s,d)},
lv(a,b){var s=null
return this.bp(a,s,s,s,s,s,s,b)},
lw(a,b){var s=null
return this.bp(s,a,s,s,s,s,s,b)},
cj(a){var s=this
return A.bP(a,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
e2(a,b,c){var s=this,r=b==null?s.c:b,q=c==null?s.at:c
return A.bP(r,s.f,s.w,a,s.Q,q,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
mf(a){return this.e2(a,null,null)},
hN(a){var s=this
return A.bP(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,a,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,s.d,s.dx)},
hM(a,b,c,d){var s=this
return A.bP(s.c,s.f,s.w,s.b,a,s.at,s.ax,s.e,s.x,s.a,s.ay,b,s.db,s.r,s.ch,s.z,s.cy,s.y,s.cx,s.CW,c,d)},
hQ(a){var s=this
return A.bP(s.c,s.f,s.w,s.b,s.Q,s.at,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,s.ch,s.z,s.cy,s.y,a,s.CW,s.d,s.dx+1)},
ff(a,b,c,d,e){var s=this
return A.bP(s.c,s.f,s.w,s.b,a,b,s.ax,s.e,s.x,s.a,s.ay,s.as,s.db,s.r,c,s.z,s.cy,s.y,s.cx,s.CW,d,e)}}
A.iQ.prototype={
U(){return"PostingStatus."+this.b}}
A.bt.prototype={
U(){return"SpendFlag."+this.b}}
A.k9.prototype={
jE(a,b){var s,r,q,p
t.Ez.a(b)
s=this.a
r=s.h(0,a)
if(r!=null)return r
q=b.h(0,a)
p=q==null?null:q.d
s=p==null?null:s.h(0,p)
return s==null?B.aE:s}}
A.ni.prototype={
$1(a){return t.d.a(a).b===this.a.a},
$S:101}
A.d9.prototype={
ghe(){var s=this.b
s=s==null?null:s.x
return s==null?this.a.x:s}}
A.dq.prototype={}
A.vF.prototype={
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
A.pd.prototype={}
A.zU.prototype={
$1(a){t.qp.a(a)
return a.ghe().l(0,this.a)>=0&&a.ghe().l(0,this.b)<=0},
$S:82}
A.zV.prototype={
$1(a){return t.qp.a(a).a.f.b===this.a},
$S:82}
A.nU.prototype={}
A.AZ.prototype={
$2(a,b){var s,r
A.b(a)
A.b(b)
s=this.a
r=s.h(0,b).a.l(0,s.h(0,a).a)
return r!==0?r:B.b.l(a,b)},
$S:42}
A.af.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){var s=A.o(this)
s.i("af.K").a(b)
s.i("af.V").a(c)
this.a.j(0,b,c)},
Z(a,b){var s=this.a
s.E(b)
return s.Z(0,b)},
gah(){var s=this.a
return new A.at(s,A.o(s).i("at<1>"))},
gT(){var s=this.a
return new A.M(s,A.o(s).i("M<2>"))},
gbs(){var s=this.a
return new A.ab(s,A.o(s).i("ab<1,2>"))},
gq(a){return this.a.a},
ga4(a){return this.a.a===0},
gap(a){return this.a.a!==0},
E(a){return this.a.E(a)},
a2(a,b){return this.a.a2(0,A.o(this).i("~(af.K,af.V)").a(b))}}
A.j2.prototype={
m(a,b){var s=this.a.m(0,this.$ti.c.a(b))
return s},
u(a,b){return this.a.u(0,b)},
gA(a){var s=this.a
return A.e8(s,s.r,A.o(s).c)},
gq(a){return this.a.a}}
A.cw.prototype={}
A.pk.prototype={}
A.dm.prototype={}
A.w7.prototype={
$2(a,b){var s=t.Fb
return B.d.l(s.a(a).a,s.a(b).a)},
$S:105}
A.xN.prototype={
$2(a,b){var s,r=t.eY
r.a(a)
r.a(b)
s=B.b.l(a.a.b,b.a.b)
return s!==0?s:a.b.b.l(0,b.b.b)},
$S:100}
A.zk.prototype={
$1(a){var s
t.b.a(a)
if(a.d===B.o){s=a.as
s=s==null?null:s.x
s=s===this.a}else s=!1
return s},
$S:2}
A.xM.prototype={
$1(a){t.eY.a(a)
return a.b.bj(a.d)===this.a},
$S:107}
A.zj.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.cm.prototype={
U(){return"InstalmentStatus."+this.b}}
A.dK.prototype={}
A.p7.prototype={}
A.zl.prototype={
$2(a,b){var s=t.W
return s.a(a).x.l(0,s.a(b).x)},
$S:7}
A.zm.prototype={
$1(a){var s
t.v.a(a)
s=this.a
return s.a.l(0,a.c)>=0&&s.a.l(0,a.d)<=0},
$S:9}
A.zn.prototype={
$1(a){var s=t.pt.a(a).d
return s===B.ay||s===B.aN},
$S:98}
A.ex.prototype={}
A.el.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.el&&b.a.J(0,this.a)},
gP(a){var s=this.a
return A.bx(s.a,s.b,s.c,B.t)},
k(a){return"DueOn("+this.a.k(0)+")"}}
A.fP.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.fP&&b.a===this.a&&b.b===this.b},
gP(a){return A.bx(this.a,this.b,B.t,B.t)},
k(a){return"CheckWithLender("+this.a+"-"+this.b+")"}}
A.iK.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iK},
gP(a){return 0}}
A.iJ.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iJ&&b.a===this.a},
gP(a){return A.bx(2,this.a,B.t,B.t)},
k(a){return"NoneLeftIfPaid("+this.a+")"}}
A.ib.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.ib},
gP(a){return 1}}
A.p8.prototype={}
A.dL.prototype={
U(){return"LoanType."+this.b}}
A.h8.prototype={
N(){var s=this,r=null,q=t.N,p=A.v(q,t.X),o=s.a
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
A.zo.prototype={
$1(a){var s=B.b.I(a)
return s.length===0?null:s},
$S:97}
A.zq.prototype={
$1(a){var s=this.a
if(s.$1(a)==null)s=null
else{s=s.$1(a)
s.toString
s=A.li(s,null)}return s},
$S:110}
A.zp.prototype={
$1(a){var s=this.a.$1(a)
s.toString
s=A.Gn(s)
s.toString
return A.a2(s,this.b)},
$S:89}
A.ho.prototype={
bj(a){var s,r=this,q=r.b.k(0),p=r.f
p=p==null?null:p.a
p=A.i(p==null?"":p)
s=r.r
if(s==null)s=""
return a+":"+r.a.b+":"+q+":"+p+":"+s},
N(){var s,r=this,q=A.v(t.N,t.X)
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
A.ft.prototype={
U(){return"StatementLoanKind."+this.b}}
A.d4.prototype={
U(){return"MailSenderKind."+this.b}}
A.iy.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.iy&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)},
k(a){return"MailSender("+this.a+", "+this.b.b+")"}}
A.ha.prototype={}
A.z.prototype={
aC(a){var s=A.ay(this.a,this.b,this.c).aw(A.BY(a,0,0,0).a)
return new A.z(A.b0(s),A.b4(s),A.au(s))},
gdH(){var s,r,q,p=this.b
if(p<1||p>12)return null
s=this.a
if(p<=2)--s
r=B.d.C(s>=0?s:s-399,400)
q=s-r*400
p=B.d.C(153*B.d.R(p+9,12)+2,5)
return r*146097+(q*365+B.d.C(q,4)-B.d.C(q,100)+(p+this.c-1))-719468},
aa(a){var s=this,r=s.gdH(),q=a.gdH()
return r!=null&&q!=null?q-r:B.d.C(A.ay(a.a,a.b,a.c).dX(A.ay(s.a,s.b,s.c)).a,864e8)},
l(a,b){var s,r,q=this
t.h.a(b)
s=q.gdH()
r=b.gdH()
return s!=null&&r!=null?B.d.l(s,r):A.ay(q.a,q.b,q.c).l(0,A.ay(b.a,b.b,b.c))},
J(a,b){if(b==null)return!1
return b instanceof A.z&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)},
k(a){return""+this.a+"-"+B.b.ac(B.d.k(this.b),2,"0")+"-"+B.b.ac(B.d.k(this.c),2,"0")},
$iaZ:1}
A.z6.prototype={
$1(a){return","},
$S:15}
A.z7.prototype={
$1(a){return","},
$S:15}
A.nJ.prototype={}
A.kg.prototype={
k(a){return"CurrencyMismatch: "+this.a+" and "+this.b+" cannot be combined"}}
A.q.prototype={
N(){var s=this.b
return A.S(["amount",this.a.bz(0,A.et(s)),"currency",s],t.N,t.X)},
gbx(){var s,r,q=this,p=q.c
if(p===$){s=q.a
r=new A.P(s.a,s.b-A.et(q.b)).aZ().b_(0)
q.c!==$&&A.fK()
q.c=r
p=r}return p},
B(a,b){return A.a2(this.a.B(0,this.fU(b).a),this.b)},
a9(a,b){var s=this.fU(b).a
return A.a2(this.a.B(0,new A.P(s.a.S(0),s.b)),this.b)},
fU(a){var s=a.b,r=this.b
if(s!==r)throw A.k(new A.kg(r,s))
return a},
J(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.q)if(b.b===this.b)s=b.a.l(0,this.a)===0
return s},
gP(a){return A.bx(this.b,this.a,B.t,B.t)},
k(a){var s=this.b
return s+" "+this.a.bz(0,A.et(s))}}
A.kF.prototype={
l5(a){var s,r
t._.a(a)
s=this.a
r=a.a
if(s.E(r))return!1
s.j(0,r,a)
return!0}}
A.ai.prototype={}
A.ne.prototype={}
A.k8.prototype={}
A.nf.prototype={}
A.Ao.prototype={
$1(a){var s
t.W.a(a)
s=a.d
return(s==null||s===B.X)&&a.ch==null},
$S:1}
A.Af.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.Ag.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.k){s=this.a.gK().h(0,a.c)
s=s==null?null:s.gaR()
s=s===!0}else s=!1
return s},
$S:1}
A.Ah.prototype={
$1(a){var s
t.W.a(a)
if(a.e===B.m){s=this.a.gK().h(0,a.c)
s=(s==null?null:s.d)===B.y}else s=!1
return s},
$S:1}
A.Ai.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.Ak.prototype={
$1(a){var s,r
A.m(a)
s=a==null?"":a
r=A.D("[^A-Z0-9]",!0,!1)
return A.ao(s.toUpperCase(),r,"")},
$S:34}
A.Aj.prototype={
$1(a){var s,r,q
t.W.a(a)
s=this.a.gK().h(0,a.c).c
r=A.D("[^A-Z0-9]",!0,!1)
q=A.ao(s.toUpperCase(),r,"")
return q.length!==0&&this.b.M(0,new A.Ad(q))},
$S:1}
A.Ad.prototype={
$1(a){return B.b.u(A.b(a),this.a)},
$S:6}
A.Al.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.Ae.prototype={
$1(a){t.W.a(a)
return this.a.gK().h(0,a.c).b},
$S:19}
A.Am.prototype={
$1(a){t.W.a(a)
return A.i(this.a.$1(a))+" on "+a.w.k(0)},
$S:19}
A.An.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:54}
A.u6.prototype={}
A.iA.prototype={}
A.AW.prototype={
$2(a,b){var s=t.v
return s.a(a).d.l(0,s.a(b).d)},
$S:21}
A.AX.prototype={
$2(a,b){var s=t.h
s.a(a)
s.a(b)
return a.l(0,b)>0?a:b},
$S:113}
A.AY.prototype={
$1(a){return t.W.a(a).w.l(0,this.a)>=0},
$S:1}
A.Bj.prototype={
$2(a,b){var s=t.sH
return s.a(a).a.l(0,s.a(b).a)},
$S:53}
A.zC.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s!==B.o&&s!==B.x&&!this.a.aD.w.E(a.a)},
$S:2}
A.zD.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.zF.prototype={
$2(a,b){var s=this.a.bI(this.b.a),r=s.$ti
return new A.n(s,r.i("j(h.E)").a(new A.zG(a,b)),r.i("n<h.E>")).gq(0)},
$S:67}
A.zG.prototype={
$1(a){var s
t.W.a(a)
if(a.CW==null){s=a.w
s=s.l(0,this.a)>=0&&s.l(0,this.b)<=0}else s=!1
return s},
$S:1}
A.zE.prototype={
$2(a,b){var s=t.sH
return s.a(a).a.l(0,s.a(b).a)},
$S:53}
A.vu.prototype={
$1(a){return t.v.a(a).d.l(0,this.a.b)<0},
$S:9}
A.zx.prototype={
$2(a,b){var s=t.sH
return s.a(a).a.l(0,s.a(b).a)},
$S:53}
A.zA.prototype={
$1(a){return a.b*12+a.a-1},
$S:115}
A.zB.prototype={
$1(a){var s=B.d.C(a,12)
return new A.hy(B.d.R(a,12)+1,s)},
$S:116}
A.zy.prototype={
$2(a,b){var s=t.l1
s.a(a)
s.a(b)
s=this.a
return J.BM(s.$1(a),s.$1(b))},
$S:117}
A.zz.prototype={
$2(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=s.length,q=a,p=0;p<s.length;s.length===r||(0,A.l)(s),++p){o=s[p]
n=o.b
if(o.a.l(0,q)>0)break
if(n.l(0,q)>=0){m=A.ay(n.a,n.b,n.c).aw(864e8)
q=new A.z(A.b0(m),A.b4(m),A.au(m))}if(q.l(0,b)>0)return!0}return!1},
$S:118}
A.dM.prototype={}
A.zL.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.zM.prototype={
$2(a,b){var s=t.W
return s.a(a).w.l(0,s.a(b).w)},
$S:7}
A.zO.prototype={
$2(a,b){var s,r,q,p
t.C.a(a)
s=J.an(a)
r=s.gq(a)
for(q=0;q<r;){p=B.d.an(q+r,1)
if(s.h(a,p).w.l(0,b)<0)q=p+1
else r=p}return q},
$S:92}
A.zN.prototype={
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
A.tI.prototype={}
A.lk.prototype={}
A.tJ.prototype={}
A.yq.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yr.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.ys.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.yy.prototype={
$1(a){var s=a.a,r=this.a.h(0,s)
s=r==null?this.b.a.h(0,s):r
return s==null?A.a2($.L(),a.f.b):s},
$S:121}
A.yx.prototype={
$1(a){var s=a.a,r=this.a,q=r.h(0,s)
if(q==null){q=a.f.gbx()
r.j(0,s,q)
s=q}else s=q
return s},
$S:91}
A.yw.prototype={
$1(a){var s,r=this,q=a.a,p=r.a,o=p.h(0,q)
if(o==null){o=r.b.$1(a)
s=r.c.h(0,q)
if(s==null)s=r.d.a.h(0,q)
s=s==null?null:s.gbx()
if(s==null)s=0
if(typeof o!=="number")return o.a9()
s=o-s
p.j(0,q,s)
p=s}else p=o
q=r.e.h(0,q)
return p-(q==null?0:q)},
$S:91}
A.yt.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yu.prototype={
$1(a){return J.Y(this.a.$1(t.W.a(a)),this.b)},
$S:1}
A.yv.prototype={
$1(a){return t.W.a(a).w.k(0)},
$S:19}
A.tU.prototype={}
A.dT.prototype={}
A.tV.prototype={}
A.bR.prototype={
U(){return"_Pair."+this.b}}
A.yA.prototype={
$2(a,b){var s=t.W
return B.b.l(s.a(a).a,s.a(b).a)},
$S:7}
A.yB.prototype={
$0(){return A.c([],t.t)},
$S:123}
A.yC.prototype={
$2(a,b){var s,r=t.Ei
r.a(a)
r.a(b)
r=a.a
s=b.a
return r!==s?B.d.l(r,s):B.d.l(a.b,b.b)},
$S:124}
A.yK.prototype={
$1(a){var s,r=this.a,q=a
for(;;){if(!(r.h(0,q)!=null&&r.h(0,q)!==q))break
s=r.h(0,q)
s.toString
q=s}return q},
$S:11}
A.yD.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.yE.prototype={
$1(a){var s
t.ct.a(a)
if(a.c===B.cp){s=this.a
s=s.u(0,a.a.a)!==s.u(0,a.b.a)}else s=!1
return s},
$S:125}
A.yF.prototype={
$1(a){return!this.a.e5(t.W.a(a).a).ga4(0)},
$S:1}
A.yG.prototype={
$1(a){t.W.a(a)
return(a.CW!=null||a.y.d)&&!B.a.u(this.a,a)},
$S:1}
A.yH.prototype={
$1(a){return J.Dm(this.a,new A.yz(t.W.a(a),this.b))},
$S:1}
A.yz.prototype={
$1(a){var s=this.a.a,r=t.W.a(a).a
return s!==r&&this.b.dZ.u(0,A.on(s,r))},
$S:1}
A.yI.prototype={
$2(a,b){var s,r=t.kG
r.a(a)
r.a(b)
s=B.b.l(a.a,b.a)
return s!==0?s:B.b.l(a.b,b.b)},
$S:126}
A.yJ.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:54}
A.dV.prototype={}
A.Ba.prototype={
$2(a,b){var s,r=t.v
r.a(a)
r.a(b)
s=a.c.l(0,b.c)
return s!==0?s:B.b.l(a.a,b.a)},
$S:21}
A.Bb.prototype={
$2(a,b){var s=t.sN
return B.b.l(s.a(a).a,s.a(b).a)},
$S:127}
A.ug.prototype={}
A.lH.prototype={}
A.uh.prototype={}
A.Aq.prototype={
$1(a){return this.a.u(0,t.W.a(a).c)},
$S:1}
A.Ar.prototype={
$1(a){var s=t.W.a(a).d
return s==null||s===B.L},
$S:1}
A.As.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.At.prototype={
$1(a){return t.W.a(a).e===B.k},
$S:1}
A.Au.prototype={
$1(a){return t.W.a(a).e===B.m},
$S:1}
A.Ay.prototype={
$1(a){return a.d===B.L},
$S:1}
A.Aw.prototype={
$2(a,b){var s,r,q
if(b.c===a.c||b.b!==a.b)return!1
s=a.w.aa(b.w)
if(s<0||s>5)return!1
r=a.f
q=b.f
if(r.b===q.b)r=r.J(0,q)
else{r=this.b
r=r.$1(a)&&r.$1(b)}return r},
$S:128}
A.Ax.prototype={
$2(a,b){var s,r,q
t.C.a(a)
s=a.length
for(r=0;r<s;){q=r+s>>>1
if(!(q<a.length))return A.a(a,q)
if(a[q].w.l(0,b)<0)r=q+1
else s=q}return r},
$S:92}
A.Ap.prototype={
$1(a){var s=a.c,r=this.a.h(0,s)
return r==null?s:r},
$S:19}
A.Av.prototype={
$1(a){t.W.a(a)
return A.i(this.a.$1(a))+" on "+a.w.k(0)},
$S:19}
A.yL.prototype={
$1(a){t.b.a(a)
return a.gaR()||a.d===B.a7},
$S:2}
A.yM.prototype={
$1(a){t.W.a(a)
return a.ch==null&&a.ay==null},
$S:1}
A.l7.prototype={}
A.A6.prototype={
$1(a){t.w5.a(a)
return a.b===this.a&&a.f!=null},
$S:52}
A.A7.prototype={
$2(a,b){var s=t.w5
return s.a(a).d.l(0,s.a(b).d)},
$S:130}
A.A8.prototype={
$1(a){return t.p_.a(a).a===this.a},
$S:131}
A.A9.prototype={
$1(a){t.w5.a(a)
return a.f===this.b+this.a.a&&a.d.l(0,this.c)>=0},
$S:52}
A.Aa.prototype={
$1(a){t.w5.a(a)
return a.f===this.b+this.a.a&&a.d.l(0,this.c)<0},
$S:52}
A.xV.prototype={
$1(a){return t.AT.a(a).b==="company"},
$S:132}
A.xW.prototype={
$1(a){return t.AT.a(a).a},
$S:133}
A.bM.prototype={
U(){return"DocumentKind."+this.b}}
A.bD.prototype={
U(){return"PolicyType."+this.b}}
A.d5.prototype={
U(){return"PremiumFrequency."+this.b}}
A.nE.prototype={
N(){return A.S(["name",this.a,"driveFileId",this.b,"localId",this.c],t.N,t.X)}}
A.cW.prototype={
gcl(){var s,r=this.e
if(r==null||r.length===0)r=this.b.c
else{s=this.b
r=s===B.br?r:s.c+" ("+r+")"}return r},
N(){var s,r,q=this,p=q.d.k(0),o=q.w
o=o==null?null:o.k(0)
s=q.x
s=s==null?null:s.k(0)
r=q.y
r=r==null?null:r.N()
return A.S(["id",q.a,"kind",q.b.b,"personId",q.c,"addedOn",p,"label",q.e,"country",q.f,"last4",q.r,"issued",o,"expires",s,"file",r,"replaces",q.z,"fromProposal",q.Q],t.N,t.X)}}
A.ep.prototype={
gh8(){var s=this.Q,r=this.CW
if(s==null)return null
return r==null||r.b!==s.b?s:s.a9(0,r)},
gcl(){var s=this.e,r=s==null||s.length===0,q=this.b
return r?this.c.c+", "+q:s+", "+q},
N(){var s,r=this,q=null,p=A.v(t.N,t.X)
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
A.aK.prototype={
U(){return"FieldType."+this.b}}
A.t.prototype={}
A.aa.prototype={
U(){return"LifeKind."+this.b},
m_(a){var s=this.d,r=A.F(s)
return A.aN(new A.n(s,r.i("j(1)").a(new A.p4(a)),r.i("n<1>")),t.k2)}}
A.p4.prototype={
$1(a){return t.k2.a(a).a===this.a},
$S:32}
A.b2.prototype={
av(a){var s=this.c,r=t.f
if(r.b(s.h(0,a))){s=s.h(0,a)
s.toString
s=A.aO(r.a(s).G(0,t.N,t.X))}else s=null
return s},
dc(a){var s=this.c
if(typeof s.h(0,a)=="string"){s=s.h(0,a)
s.toString
s=A.dt(A.b(s))}else s=null
return s},
N(){return A.S(["kind",this.a.b,"id",this.b,"fields",this.c],t.N,t.X)}}
A.p2.prototype={
aY(a){var s,r=this.a.h(0,a)
if(r==null)r=null
else{s=A.o(r).i("M<2>")
r=A.B(new A.M(r,s),s.i("h.E"))}if(r==null)r=A.c([],t.Z)
B.a.D(r,new A.p3())
return r},
a6(a,b){var s=this.a.h(0,a)
return s==null?null:s.h(0,b)},
e8(a){var s=this.a,r=a.a,q=s.h(0,r)
if(q==null){q=A.v(t.N,t.u)
s.j(0,r,q)
s=q}else s=q
s.j(0,a.b,a)
return a},
lR(a,b){var s=this.a.h(0,a)
return s==null?null:s.Z(0,b)},
lb(a){var s,r
for(s=this.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d.h(0,a)
if(r!=null)return r}return null},
n2(a,b){var s,r,q,p,o,n,m,l,k,j=A.c([],t.Z)
for(s=this.a,s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>")),r=a.b;s.n();)for(q=s.d.gT(),q=q.gA(q);q.n();){p=q.gt()
for(o=p.a.d,n=o.length,m=p.c,l=0;l<n;++l){k=o[l]
if(k.c===B.C&&k.f===r&&J.Y(m.h(0,k.a),b))j.push(p)}}return j}}
A.p3.prototype={
$2(a,b){var s=t.u
return B.b.l(s.a(a).b,s.a(b).b)},
$S:23}
A.vv.prototype={
$1(a){A.b(a)
return a==="member"?"household member":a},
$S:11}
A.vw.prototype={
$1(a){return A.b(a).length>80},
$S:6}
A.vz.prototype={
$1(a){t.u.a(a)
return a.b!==this.a.b&&A.m(a.c.h(0,"creditMovementId"))===this.b},
$S:24}
A.vA.prototype={
$1(a){return this.a.c.h(0,A.b(a))!=null},
$S:6}
A.vZ.prototype={
$1(a){return t.P.a(a).b===this.a.h(0,"kind")},
$S:51}
A.ez.prototype={
U(){return"PayslipMatchState."+this.b}}
A.fo.prototype={}
A.AB.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.ax(a.c.h(0,"payDate"))
r.toString
s=A.ax(b.c.h(0,"payDate"))
s.toString
return r.l(0,s)},
$S:23}
A.AH.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(a.c===this.a)if(a.e===B.m)if(!this.b.u(0,a.a)){s=this.c
r=a.x
s=s.aa(r)>=-3&&s.aa(r)<=5}return s},
$S:1}
A.AC.prototype={
$2(a,b){var s=t.W
s.a(a)
s.a(b)
s=this.a
return B.d.l(Math.abs(s.aa(a.x)),Math.abs(s.aa(b.x)))},
$S:7}
A.AD.prototype={
$1(a){return t.W.a(a).f.J(0,this.a)},
$S:1}
A.AF.prototype={
$1(a){return A.b(a).length>1},
$S:6}
A.AG.prototype={
$0(){return""},
$S:25}
A.AE.prototype={
$1(a){var s,r
t.W.a(a)
s=!1
if(a.f.b===this.a.b){r=this.b
if(r.length!==0){s=a.z
if(s==null)s=""
r=B.b.u(s.toUpperCase(),r)
s=r}}return s},
$S:1}
A.dN.prototype={}
A.AP.prototype={
$2(a,b){var s=t.tW
return s.a(a).b.l(0,s.a(b).b)},
$S:137}
A.cp.prototype={
U(){return"RetrievalAction."+this.b}}
A.lp.prototype={}
A.tE.prototype={
gbD(){var s,r,q,p,o=A.v(t.N,t.l9)
for(s=this.a,s=new A.ab(s,A.o(s).i("ab<1,2>")).gA(0),r=this.b;s.n();){q=s.d
p=q.a
if(!r.u(0,p))o.j(0,p,q.b)}return o},
gmR(){var s,r,q=A.a3(t.N)
for(s=this.gbD(),s=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));s.n();){r=s.d.z
if(r!=null)q.m(0,r)}return q},
gt(){var s=this.gmR(),r=this.gbD(),q=A.o(r).i("M<2>"),p=q.i("n<h.E>")
r=A.B(new A.n(new A.M(r,q),q.i("j(h.E)").a(new A.tF(s)),p),p.i("h.E"))
B.a.D(r,new A.tG())
return r}}
A.tF.prototype={
$1(a){return!this.a.u(0,t.l9.a(a).a)},
$S:87}
A.tG.prototype={
$2(a,b){var s,r=t.l9
r.a(a)
r.a(b)
s=B.d.l(a.b.a,b.b.a)
return s!==0?s:B.b.l(a.c,b.c)},
$S:139}
A.w_.prototype={
$1(a){t.l9.a(a)
return a.z===this.b&&a.a!==this.a.a.a},
$S:87}
A.w0.prototype={
$1(a){return t.hn.a(a).b===this.a.h(0,"action")},
$S:140}
A.w1.prototype={
$1(a){return!B.mk.u(0,A.b(a))},
$S:6}
A.zh.prototype={
$2(a,b){var s=t.ok
return B.b.l(s.a(a).b,s.a(b).b)},
$S:75}
A.da.prototype={}
A.Bx.prototype={
$1(a){t.b.a(a)
return a.d===B.o&&a.as!=null&&a.CW==null&&A.FK(this.a,a.a,this.b)},
$S:2}
A.By.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).a,s.a(b).a)},
$S:8}
A.Bz.prototype={
$2(a,b){var s=t.tB
return s.a(a).d.l(0,s.a(b).d)},
$S:141}
A.ci.prototype={
gdn(){return this.z+this.Q+this.as}}
A.xY.prototype={
$2(a,b){var s,r=t.eV
r.a(a)
r.a(b)
s=a.f.l(0,b.f)
return s!==0?s:B.d.l(a.w,b.w)},
$S:142}
A.xZ.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).z},
$S:30}
A.yg.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).Q},
$S:30}
A.yh.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).as},
$S:30}
A.yi.prototype={
$2(a,b){return A.O(a)+t.eV.a(b).at},
$S:30}
A.yX.prototype={
$1(a){return B.b.ac(""+B.d.R(a,100),2,"0")},
$S:50}
A.yV.prototype={
$1(a){return B.b.ac(""+this.a,a.du(1).length,"0")},
$S:15}
A.yW.prototype={
$1(a){var s=a.h(0,0)
s.toString
return A.fI(this.a,s)},
$S:15}
A.dE.prototype={
N(){var s=this
return A.S(["description",s.a,"sac",s.b,"taxable",s.c,"cgst",s.d,"sgst",s.e],t.N,t.X)}}
A.tN.prototype={
gfc(){return B.a.a5(this.x,0,new A.tQ(),t.S)},
geR(){return B.a.a5(this.x,0,new A.tO(),t.S)},
geg(){return B.a.a5(this.x,0,new A.tP(),t.S)},
gdn(){return this.gfc()+this.geR()+this.geg()},
fd(){var s,r,q,p,o,n=this,m=t.N,l=t.X,k=A.v(m,l)
k.j(0,"tenancyId",n.a)
k.j(0,"propertyId",n.b)
k.j(0,"month",""+n.c+"-"+B.b.ac(B.d.k(n.d),2,"0"))
k.j(0,"date",n.e.k(0))
k.j(0,"seriesId",n.f)
k.j(0,"seq",n.r)
k.j(0,"number",n.w)
s=A.c([],t.bk)
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
A.tQ.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).c},
$S:31}
A.tO.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).d},
$S:31}
A.tP.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).e},
$S:31}
A.A5.prototype={
$1(a){return this.a?""+a.a:A.fI(A.jH(a),"{fy}")},
$S:146}
A.A3.prototype={
$1(a){var s=A.aG(t.u.a(a).c.h(0,"seq"))
s.toString
return s},
$S:147}
A.A4.prototype={
$2(a,b){A.O(a)
A.O(b)
return a>b?a:b},
$S:36}
A.yk.prototype={
$2(a,b){return A.O(a)+t.mp.a(b).c},
$S:31}
A.iT.prototype={
N(){return A.c([this.a,this.b,this.c],t.s)},
J(a,b){if(b==null)return!1
return b instanceof A.iT&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)},
k(a){return this.a+" | "+this.b+" | "+this.c}}
A.fg.prototype={}
A.pb.prototype={
gfk(){var s=this
return s.a.a9(0,s.b).a9(0,s.c).a9(0,s.d).a9(0,s.e)}}
A.zI.prototype={
$1(a){var s=this.a.e.h(0,a)
return s==null?this.b:s},
$S:148}
A.zK.prototype={
$1(a){this.a.h(0,a)
return this.b},
$S:149}
A.zJ.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:26}
A.ht.prototype={
U(){return"WorthSource."+this.b}}
A.bz.prototype={
gcX(){var s=this.b
return s.a.a.ga8(0)<0?A.a2($.L(),s.b).a9(0,s):s}}
A.hs.prototype={
gdQ(){return B.a.a5(this.b,A.a2($.L(),this.a),new A.uq(),t.B)},
gdU(){return B.a.a5(this.c,A.a2($.L(),this.a),new A.ur(),t.B)}}
A.uq.prototype={
$2(a,b){return t.B.a(a).B(0,t.w.a(b).gcX())},
$S:78}
A.ur.prototype={
$2(a,b){return t.B.a(a).B(0,t.w.a(b).gcX())},
$S:78}
A.l4.prototype={}
A.zW.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.w.l(0,this.b)<=0},
$S:2}
A.zX.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.zY.prototype={
$1(a){var s,r=new A.zZ(),q=this.a,p=A.F(q),o=p.i("n<1>"),n=new A.n(q,p.i("j(1)").a(new A.A_(a)),o)
p=o.i("j(h.E)")
o=o.i("n<h.E>")
q=o.i("h.E")
s=A.B(new A.n(n,p.a(new A.A0()),o),q)
B.a.D(s,r)
q=A.B(new A.n(n,p.a(new A.A1()),o),q)
B.a.D(q,r)
return new A.hs(a,s,q)},
$S:152}
A.zZ.prototype={
$2(a,b){var s,r=t.w
r.a(a)
r.a(b)
s=b.gcX().a.l(0,a.gcX().a)
return s!==0?s:B.b.l(a.a,b.a)},
$S:153}
A.A_.prototype={
$1(a){return t.w.a(a).b.b===this.a},
$S:49}
A.A0.prototype={
$1(a){return t.w.a(a).b.a.a.ga8(0)>=0},
$S:49}
A.A1.prototype={
$1(a){return t.w.a(a).b.a.a.ga8(0)<0},
$S:49}
A.cL.prototype={
U(){return"ValueKind."+this.b}}
A.eI.prototype={}
A.ik.prototype={}
A.Bk.prototype={
$1(a){return this.a.b.a.h(0,A.b(a))!=null},
$S:6}
A.BF.prototype={
$1(a){var s,r,q
t.R.a(a)
s=!1
if(!a.f){r=this.a
if(a.b===r.a){s=a.d
q=r.c
if(A.Gv(s,q))s=s!==B.G||q===B.m
else s=!1
s=s&&this.b.b5(0,new A.BE(a,r))}}return s},
$S:17}
A.BE.prototype={
$1(a){var s=this.b
return this.a.f1(s.b,A.b(a),s.a,s.c)},
$S:6}
A.BG.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).a,s.a(b).a)},
$S:48}
A.BH.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===B.a.ga0(s).d&&a.e==B.a.ga0(s).e},
$S:17}
A.cF.prototype={}
A.Bu.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.Bv.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.x.l(0,b.x)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.Bw.prototype={
$2(a,b){return t.B.a(a).B(0,t.W.a(b).f)},
$S:77}
A.xB.prototype={
$3(a,b,c){t.J.a(c)
return new A.ai(a,this.b,this.a.a++,b,c,this.c)},
$S:156}
A.aQ.prototype={
U(){return"ReviewReason."+this.b}}
A.W.prototype={
k(a){return"ReviewItem("+this.b.k(0)+", "+this.c+": "+this.d+")"}}
A.B1.prototype={
$1(a){var s=this.a.gK().h(0,a)
s=s==null?null:s.b
return s==null?a:s},
$S:11}
A.B_.prototype={
$1(a){t.k.a(a)
return this.a.aI(a.a,new A.B0(a))},
$S:157}
A.B0.prototype={
$0(){return this.a},
$S:158}
A.B2.prototype={
$1(a){return t.b.a(a).b===this.a.f},
$S:2}
A.B3.prototype={
$1(a){return!this.a.u(0,t.k.a(a).a)},
$S:41}
A.B4.prototype={
$1(a){var s=t.k.a(a).a
if(!A.Ej(this.a.R8,t.N).a.u(0,s)){s=this.b.h(0,s)
s=s==null?null:s.l(0,this.c)>0
s=s!==!0}else s=!1
return s},
$S:41}
A.B5.prototype={
$2(a,b){var s=t.k
return B.b.l(s.a(a).a,s.a(b).a)},
$S:54}
A.bb.prototype={
f1(a,b,c,d){var s,r,q=this
if(c!==q.b)return!1
s=q.r
if(s!=null&&b!==s)return!1
s=q.w
if(s!=null&&d!==s)return!1
s=q.c
if($.tS.a>2000)$.tS.ao(0)
r=$.tS.h(0,s)
if(r==null){r=A.D("(?<![A-Z0-9])"+A.hN(A.cP(s))+"(?![A-Z0-9])",!0,!1)
$.tS.j(0,s,r)
s=r}else s=r
return s.b.test(a)}}
A.cH.prototype={}
A.hd.prototype={}
A.iM.prototype={}
A.hi.prototype={}
A.zu.prototype={
$1(a){var s=this
t.R.a(a)
return a.f&&a.f1(s.a,s.c,s.b,s.d)},
$S:17}
A.zv.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).a,s.a(b).a)},
$S:48}
A.zw.prototype={
$1(a){var s
t.R.a(a)
s=this.a
return a.d===s.d&&a.e==s.e&&a.x==s.x&&a.y==s.y},
$S:17}
A.B7.prototype={
$1(a){var s,r=a.z
if(r==null)return new A.hd()
s=A.cP(r)
return this.a.aI(new A.eN([s,a.b,a.c,a.e]),new A.B8(s,this.b,a))},
$S:159}
A.B8.prototype={
$0(){var s=this.c
return A.CW(this.a,this.b,s.c,s.b,s.e)},
$S:160}
A.B6.prototype={
$1(a){t.R.a(a)
return a.a+" ("+A.i(a.e)+")"},
$S:161}
A.Bc.prototype={
$1(a){return B.a.M(t.a.a(a),new A.Bd(this.a))},
$S:74}
A.Bd.prototype={
$1(a){var s=A.D("(?:^| )"+A.hN(A.b(a))+"(?: |$)",!0,!1)
return s.b.test(this.a)},
$S:6}
A.mZ.prototype={}
A.n_.prototype={
$1(a){var s=this.a.h(0,a)
if(!A.cu(s)||s<1)throw A.k(A.y(a+" must be a whole number of at least 1",s,null))
return s},
$S:163}
A.lt.prototype={}
A.lu.prototype={}
A.tZ.prototype={}
A.c7.prototype={
U(){return"SmsSenderKind."+this.b}}
A.cq.prototype={
mY(){var s,r=A.v(t.N,t.X)
r.j(0,"id",this.a)
r.j(0,"kind",this.b.b)
s=this.c
if(s!=null)r.j(0,"institution",s)
return r},
J(a,b){if(b==null)return!1
return b instanceof A.cq&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gP(a){return A.bx(this.a,this.b,this.c,B.t)}}
A.u2.prototype={}
A.u3.prototype={
$2(a,b){var s=t.c5
return B.b.l(s.a(a).a,s.a(b).a)},
$S:73}
A.l8.prototype={
N(){var s=this
return A.S(["lineId",s.a,"field",s.b,"ocr",s.c,"owner",s.d],t.N,t.X)}}
A.d0.prototype={}
A.u5.prototype={}
A.dY.prototype={
hh(a){var s=this
return new A.dY(s.a,a,s.c,s.d,s.e,s.f,s.r)}}
A.Bf.prototype={
$0(){return A.c([],t.A)},
$S:16}
A.Bg.prototype={
$2(a,b){var s,r=t.uB
r.a(a)
r.a(b)
s=a.b.w.l(0,b.b.w)
return s!==0?s:B.d.l(a.a,b.a)},
$S:72}
A.Bh.prototype={
hT(a,b,c){var s=this
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
else l=j}i=A.c([],t.qM)
h=k
for(;;){g=e.length
if(h<g){if(!(h>=0)){A.a(e,h)
o=1
break A}g=e[h].b.w.l(0,p)<=0}else g=!1
if(!g)break
if(!(h>=0&&h<e.length)){A.a(e,h)
o=1
break A}i.push(e[h]);++h}B.a.D(i,new A.Bi())
g=i.length,f=0
case 3:if(!(f<i.length)){o=5
break}o=6
return d.b=i[f].b,1
case 6:case 4:i.length===g||(0,A.l)(i),++f
o=3
break
case 5:case 1:return 0
case 2:return d.c=m.at(-1),3}}}},
$3(a,b,c){return new A.de(this.hT(a,b,c),t.wE)},
$S:166}
A.Bi.prototype={
$2(a,b){var s=t.uB
return B.d.l(s.a(a).a,s.a(b).a)},
$S:72}
A.l6.prototype={
k(a){return"NothingToJoin"}}
A.cU.prototype={
k(a){return"DeviceRemoved"}}
A.iq.prototype={
by(){var s=0,r=A.J(t.J),q,p=this,o,n
var $async$by=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:s=3
return A.r(p.b.by(),$async$by)
case 3:o=b
n=t.D.i("bf.S").a(p.c)
q=A.S(["deviceId",p.a,"keys",o,"primary",B.K.gaH().O(n),"name",p.d,"kind",p.e],t.N,t.X)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$by,r)}}
A.fv.prototype={
U(){return"SyncAccess."+this.b}}
A.u9.prototype={
bE(){var s=0,r=A.J(t.aT),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bE=A.K(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)A:switch(s){case 0:b1=n.a
s=3
return A.r(b1.bk(),$async$bE)
case 3:b2=b7
b3=A.c([],t.wt)
for(g=J.Q(b2),f=n.b,e=f.a;g.n();){d=g.gt()
c=$.GV().aj(d)
if(c!=null){b=c.b
if(1>=b.length){q=A.a(b,1)
s=1
break A}b=b[1]===e}else b=!1
if(b){b=c.b
if(2>=b.length){q=A.a(b,2)
s=1
break A}b=b[2]
b.toString
B.a.m(b3,new A.p(A.X(b,null,null),d))}}B.a.D(b3,new A.ub())
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
return A.r(b1.c1(l),$async$bE)
case 11:k=b5.D_(b7,B.mC)
if(!J.Y(k.a.h(0,"deviceId"),e)||!J.Y(k.a.h(0,"epoch"),m)){s=5
break}s=12
return A.r(k.cV(a4),$async$bE)
case 12:a6=k.a.h(0,"ephemeral")
a6.toString
s=13
return A.r(A.mI(f,B.B.O(A.b(a6))),$async$bE)
case 13:j=b7
b5=a0
s=14
return A.r(k.cR(j),$async$bE)
case 14:a6=b5.a(b7)
i=a1.a(B.z.bi(new A.eP(!1).cv(a6,0,null,!0),null)).G(0,a2,a3)
if(!J.Y(J.ar(i,"deviceId"),e)){s=5
break}a6=J.ar(i,"epochs")
a6.toString
a6=J.dh(d.a(a6),b)
a7=a6.$ti
a6=new A.ac(a6,a6.gq(0),a7.i("ac<R.E>"))
a7=a7.i("R.E")
while(a6.n()){a8=a6.d
h=a8==null?a7.a(a8):a8
a8=J.ar(h,"epoch")
a8.toString
A.O(a8)
a9=J.ar(h,"key")
a9.toString
a.j(0,a8,new A.bp(new A.bs(B.B.O(A.b(a9)),!1),null))}q=B.cj
s=1
break
p=2
s=10
break
case 8:p=7
b4=o.pop()
if(A.av(b4) instanceof A.hW){s=5
break}else throw b4
s=10
break
case 7:s=2
break
case 10:case 5:b3.length===g||(0,A.l)(b3),++a5
s=4
break
case 6:q=a.a===0?B.ef:B.eg
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bE,r)},
gjT(){var s=this.c
return new A.at(s,A.o(s).i("at<1>")).cS(0,new A.ua())},
bf(){var s=0,r=A.J(t.tU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$bf=A.K(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:c1=n.c
s=c1.a===0?3:4
break
case 3:case 5:s=10
return A.r(n.bE(),$async$bf)
case 10:switch(c5){case B.ef:s=7
break
case B.eg:s=8
break
case B.cj:s=9
break
default:s=6
break}break
case 7:q=B.dH
s=1
break
case 8:throw A.k(new A.cU())
case 9:s=6
break
case 6:case 4:h=n.a
s=11
return A.r(h.bk(),$async$bf)
case 11:g=c5
f=J.mT(g,$.GW().ghi())
e=A.B(f,f.$ti.i("h.E"))
B.a.D(e,new A.uc())
m=null
f=e.length,d=t.L,c=t.f,b=t.N,a=t.X,a0=n.b.c,a1=0
case 12:if(!(a1<e.length)){s=14
break}l=e[a1]
p=16
c3=A
s=19
return A.r(h.c1(l),$async$bf)
case 19:k=c3.D_(c5,B.mD)
s=20
return A.r(k.cV(a0),$async$bf)
case 20:j=A.aG(k.a.h(0,"epoch"))
i=c1.h(0,j)
s=i==null?21:22
break
case 21:s=23
return A.r(n.bE(),$async$bf)
case 23:if(c5!==B.cj){a2=new A.cU()
throw A.k(a2)}a3=c1.h(0,j)
if(a3==null)a3=A.f(new A.cU())
i=a3
case 22:c3=d
s=24
return A.r(k.cR(i),$async$bf)
case 24:a2=c3.a(c5)
m=c.a(B.z.bi(new A.eP(!1).cv(a2,0,null,!0),null)).G(0,b,a)
s=14
break
p=2
s=18
break
case 16:p=15
c2=o.pop()
if(A.av(c2) instanceof A.hW){s=13
break}else throw c2
s=18
break
case 15:s=2
break
case 18:case 13:e.length===f||(0,A.l)(e),++a1
s=12
break
case 14:if(m==null){q=A.aC(n.e,t._)
s=1
break}m.h(0,"primary")
f=m.h(0,"generation")
f.toString
A.O(f)
if(f!==n.d){B.a.ao(n.e)
n.d=f}a2=n.e,f=A.Me(g,f,a2.length),a5=f.length,a6=t.j,a7=t.mE,a8=t.Y,a1=0
case 25:if(!(a1<f.length)){s=27
break}a9=f[a1]
c3=A
s=28
return A.r(h.c1(a9.a),$async$bf)
case 28:k=c3.D_(c5,B.mE)
s=29
return A.r(k.cV(a0),$async$bf)
case 29:b0=k.a
if(!J.Y(b0.h(0,"generation"),a9.b)||!J.Y(b0.h(0,"first"),a9.c)||!J.Y(b0.h(0,"last"),a9.d))throw A.k(A.f1("a segment is not what its name says"))
i=c1.h(0,b0.h(0,"epoch"))
c3=d
s=30
return A.r(k.cR(i==null?A.f(new A.cU()):i),$async$bf)
case 30:b1=c3.a(c5)
b2=c.a(B.z.bi(new A.eP(!1).cv(b1,0,null,!0),null)).G(0,b,a)
b1=A.c([],a8)
b3=b2.h(0,"ops")
b3.toString
b3=J.dh(a6.a(b3),a7)
b4=b3.$ti
b3=new A.ac(b3,b3.gq(0),b4.i("ac<R.E>"))
b4=b4.i("R.E")
while(b3.n()){b5=b3.d
b5=(b5==null?b4.a(b5):b5).G(0,b,a)
b6=b5.h(0,"key")
b6.toString
A.b(b6)
b7=b5.h(0,"deviceId")
b7.toString
A.b(b7)
b8=b5.h(0,"clock")
b8.toString
A.O(b8)
b9=b5.h(0,"type")
b9.toString
A.b(b9)
c0=b5.h(0,"payload")
c0.toString
c0=c.a(c0).G(0,b,a)
b5=b5.h(0,"createdAtUtc")
b5.toString
b1.push(new A.ai(b6,b7,b8,b9,c0,A.c0(A.b(b5)).F()))}if(b1.length!==a9.d-a9.c+1)throw A.k(A.f1("a segment is short"))
B.a.a1(a2,b1)
case 26:f.length===a5||(0,A.l)(f),++a1
s=25
break
case 27:q=A.aC(a2,t._)
s=1
break
case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bf,r)},
ht(){var s,r,q,p,o=A.B(this.e,t._)
B.a.a1(o,this.f)
s=o.length
r=0
q=0
for(;q<s;++q){p=o[q].c
if(p>r)r=p}return r+1},
c6(a){return this.ia(t.tU.a(a))},
ia(a0){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c6=A.K(function(a1,a2){if(a1===1)return A.G(a2,r)
for(;;)switch(s){case 0:c=p.c
if(c.a===0)throw A.k(new A.cU())
b=o=p.a
a=J
s=3
return A.r(o.bk(),$async$c6)
case 3:b,n=a.Q(a2),m=p.b,l=m.a
case 4:if(!n.n()){s=5
break}k=n.gt()
j=$.GZ().aj(k)
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
g=p.gjT()
k=B.b.ac(B.d.k(n),10,"0")
i=t.N
h=t.X
n=A.S(["formatVersion",1,"deviceId",l,"n",n,"epoch",g],i,h)
f=A.c([],t.bk)
for(e=J.Q(a0);e.n();){d=e.gt()
f.push(A.S(["key",d.a,"deviceId",d.b,"clock",d.c,"type",d.d,"payload",d.e,"createdAtUtc",d.f.F().dl()],i,h))}i=B.F.O(B.z.bd(A.S(["ops",f],i,t.vG),null))
c=c.h(0,g)
c.toString
b=o
a="o-"+l+"-"+k+".sqo"
s=7
return A.r(A.hQ(n,c,B.mF,i,m.b.b),$async$c6)
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
return A.r(o.bk(),$async$cr)
case 3:g,n=f.Q(a0),m=p.b,l=m.a
case 4:if(!n.n()){s=5
break}k=n.gt()
j=$.GX().aj(k)
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
return A.r(A.hO(a,b,l,n,c,m.b.b,d),$async$cr)
case 7:s=6
return A.r(g.c2(f,a0),$async$cr)
case 6:case 1:return A.H(q,r)}})
return A.I($async$cr,r)},
gcW(){var s,r,q,p,o,n=A.a3(t.N)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q)n.m(0,s[q].a)
s=A.c([],t.Y)
for(r=this.f,p=r.length,q=0;q<r.length;r.length===p||(0,A.l)(r),++q){o=r[q]
if(!n.u(0,o.a))s.push(o)}return s},
cJ(){var s,r,q,p,o
for(s=this.c,r=new A.a1(s,s.r,s.e,A.o(s).i("a1<2>"));r.n();){q=r.d
p=q.b
o=p.a
if(o!=null){p.a=null
if(p.b)A.D2(o)}q.ei()}s.ao(0)
B.a.ao(this.e)
B.a.ao(this.f)}}
A.ub.prototype={
$2(a,b){var s=t.jr
s.a(a)
return B.d.l(s.a(b).a,a.a)},
$S:167}
A.ua.prototype={
$2(a,b){A.O(a)
A.O(b)
return a>b?a:b},
$S:36}
A.uc.prototype={
$2(a,b){A.b(a)
return B.b.l(A.b(b),a)},
$S:42}
A.dZ.prototype={
U(){return"SyncFileKind."+this.b}}
A.hW.prototype={
k(a){return"BadSyncFile: "+this.a}}
A.ud.prototype={
cV(a){return this.n5(t.L.a(a))},
n5(a){var s=0,r=A.J(t.H),q=this,p,o
var $async$cV=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:p=$.Dd()
o=A.B(q.b,t.S)
B.a.a1(o,q.d)
s=2
return A.r(p.bM(o,new A.fr(q.c,new A.bE(a,B.T))),$async$cV)
case 2:if(!c)throw A.k(A.f1("the signature does not match"))
return A.H(null,r)}})
return A.I($async$cV,r)},
cR(a){return this.mE(a)},
mE(a){var s=0,r=A.J(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cR=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:h=n.d
if(h.length<28)throw A.k(A.f1("the file is incomplete"))
p=4
l=$.Dc()
k=A.fx(h,28,null)
j=A.fx(h,0,12)
s=7
return A.r(l.br(new A.eD(k,new A.d2(A.fx(h,12,28)),j),n.b,a),$async$cR)
case 7:m=c
h=t.p.b(m)?m:new Uint8Array(A.aJ(m))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
if(A.av(g) instanceof A.iW)throw A.k(A.f1("the file does not open with this key or was changed"))
else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$cR,r)}}
A.ia.prototype={
by(){var s=0,r=A.J(t.J),q,p=this,o,n,m
var $async$by=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:o=t.D.i("bf.S")
m=o
s=3
return A.r(p.a.dY(),$async$by)
case 3:n=m.a(b)
n=B.K.gaH().O(n)
m=o
s=4
return A.r(p.b.dY(),$async$by)
case 4:o=m.a(b)
q=A.S(["x25519",n,"ed25519",B.K.gaH().O(o)],t.N,t.X)
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$by,r)}}
A.iu.prototype={
N(){var s=this,r=t.D.i("bf.S"),q=r.a(s.d)
q=B.K.gaH().O(q)
r=r.a(s.e)
return A.S(["id",s.a,"name",s.b,"kind",s.c,"x25519",q,"ed25519",B.K.gaH().O(r),"approvedAtUtc",s.f.F().dl()],t.N,t.X)}}
A.lD.prototype={}
A.ue.prototype={
eP(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="deviceId",g=a.e
switch(a.d){case"sync.switch":s=g.h(0,"on")
s.toString
A.cN(s)
return i
case"sync.epoch":s=g.h(0,"generation")
s.toString
A.O(s)
r=g.h(0,"epoch")
r.toString
A.O(r)
q=j.b
p=q.length===0?i:B.a.gaq(q)
o=p==null
n=o?i:p.b
if(r!==(n==null?0:n)+1){s=o?i:p.b
if(s==null)s=0
return"epoch "+r+" does not follow "+s}if(!o&&s<p.a)return"generation "+s+" is older"
o=g.h(0,"salt")
o.toString
B.B.O(A.b(o))
B.a.m(q,new A.lD(s,r));++j.e
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
l=A.c0(A.b(r)).F()
switch(g.h(0,"action")){case"approve":r=j.c
if(r.E(s)||j.d.u(0,s))return"device "+s+" was already answered"
q=g.h(0,"name")
q.toString
A.b(q)
o=g.h(0,"kind")
o.toString
A.b(o)
n=g.h(0,"x25519")
n.toString
n=B.B.O(A.b(n))
k=g.h(0,"ed25519")
k.toString
r.j(0,s,new A.iu(s,q,o,n,B.B.O(A.b(k)),l,i))
break
case"refuse":if(j.c.E(s))return"device "+s+" is approved; remove it instead"
j.d.m(0,s)
break
case"remove":r=j.c
m=r.h(0,s)
if(m==null||m.r!=null)return"no approved device "+s
r.j(0,s,new A.iu(m.a,m.b,m.c,m.d,m.e,m.f,l))
break
default:return"unknown device action "+A.i(g.h(0,"action"))}++j.e
return i}return"not a sync operation"}}
A.iX.prototype={}
A.i_.prototype={}
A.zP.prototype={
$1(a){return A.NJ(this.a,t.b.a(a),this.b,this.c)},
$S:2}
A.AS.prototype={
$0(){var s,r=this,q=r.a,p=A.G8(q.a,q.b,r.b),o=p.a,n=p.b
q=r.c
s=r.d
return new A.eN([o,n,A.G9(q,s,n,o),A.FF(q,s,r.e,n,o)])},
$S:168}
A.AT.prototype={
$1(a){return t.nr.a(a).a[2]},
$S:169}
A.AU.prototype={
$1(a){return t.hf.a(a).a[0]},
$S:170}
A.AV.prototype={
$2(a,b){return t.B.a(a).B(0,t.hf.a(b).a[2])},
$S:171}
A.bC.prototype={}
A.n7.prototype={
eK(a){t.aD.a(a)
return B.a.a5(this.a,A.a2($.L(),this.b),new A.n8(a),t.B)},
gl8(){return this.eK(new A.n9())},
gi5(){return this.eK(new A.nc())},
gmH(){var s=this.a
return s.length===0||B.a.ga0(s).d==null?null:this.eK(new A.nb())},
ghu(){var s=this.a,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.na()),r.i("n<1>")).gq(0)}}
A.n8.prototype={
$2(a,b){return t.B.a(a).B(0,this.a.$1(t.ta.a(b)))},
$S:172}
A.n9.prototype={
$1(a){return a.b},
$S:47}
A.nc.prototype={
$1(a){return a.c},
$S:47}
A.nb.prototype={
$1(a){var s=a.d
s.toString
return s},
$S:47}
A.na.prototype={
$1(a){t.ta.a(a)
return a.c.a.l(0,a.b.a)>0},
$S:174}
A.wd.prototype={
$2(a,b){var s=t.ta
s.a(a)
s.a(b)
s=this.a
return B.b.l(A.Fj(s,a.a),A.Fj(s,b.a))},
$S:175}
A.dB.prototype={
gdk(){var s=this.b
return s==null?null:this.a.c.a9(0,s)},
gmI(){return this.gdk()!=null&&this.gdk().a.l(0,$.L())<=0},
ghw(){var s,r,q=this
if(q.gdk()==null||q.gmI()||q.d===0)s=null
else{s=q.gdk().a
r=A.aB(q.d)
r=A.a2(A.Ed(s.gbV().ds(0,new A.P(r,0).gbV()),10).c9(2,B.ej),q.gdk().b)
s=r}return s}}
A.z5.prototype={
$2(a,b){var s=t.AK
return s.a(a).a.d.l(0,s.a(b).a.d)},
$S:176}
A.k7.prototype={}
A.le.prototype={}
A.co.prototype={
U(){return"RecurringMark."+this.b}}
A.iV.prototype={}
A.eC.prototype={
U(){return"RewardUnit."+this.b}}
A.fq.prototype={
N(){var s,r=this,q=r.b.k(0),p=r.c
p=p==null?null:p.N()
s=r.d
s=s==null?null:s.k(0)
return A.S(["categoryId",r.a,"rate",q,"capSpend",p,"capEarn",s],t.N,t.X)}}
A.lq.prototype={}
A.ui.prototype={
l9(a,b,c,d){var s,r,q,p,o,n=c*12+d
for(s=this.b,r=s.length,q=null,p=0;p<r;++p){o=s[p]
if(o.a!==a||o.b!==b||o.d*12+o.e>n)continue
if(q==null||o.d*12+o.e>=q.d*12+q.e)q=o}return q==null?null:q.c},
la(a,b,c){var s,r,q,p,o,n=t.N,m=A.v(n,t.B)
n=A.a3(n)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(p.a===a)n.m(0,p.b)}n=A.e8(n,n.r,n.$ti.c)
s=n.$ti.c
while(n.n()){r=n.d
if(r==null)r=s.a(r)
o=this.l9(a,r,b,c)
if(o!=null)m.j(0,r,o)}return m}}
A.w2.prototype={
$1(a){return typeof a=="string"?A.a5(this.a.d,t.N,t.G).h(0,a):null},
$S:177}
A.w3.prototype={
$1(a){return t.d.a(a).b===this.a.h(0,"flag")},
$S:101}
A.w4.prototype={
$1(a){return t.fK.a(a).b===this.a.h(0,"as")},
$S:268}
A.w5.prototype={
$1(a){return t.fC.a(a).a==null},
$S:179}
A.aY.prototype={}
A.lA.prototype={}
A.dj.prototype={
it(a,b,c,d){var s,r,q,p,o,n=this,m=A.c([],t.g)
for(s=n.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.l)(s),++q){p=s[q]
if(!p.Q&&p.at!=null){o=p.at
o.toString
m.push(o)}}s=m.length
n.d!==$&&A.Gu()
n.d=s
m=s===0?null:A.aM(B.a.a5(m,A.a2($.L(),c),new A.mU(),t.B),d)
n.c!==$&&A.Gu()
n.c=m},
gf4(){var s=this.b,r=A.F(s)
return new A.n(s,r.i("j(1)").a(new A.mV()),r.i("n<1>")).gq(0)}}
A.mU.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:26}
A.mV.prototype={
$1(a){return!t.V.a(a).Q},
$S:12}
A.dQ.prototype={}
A.mX.prototype={}
A.wg.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=A.NQ(f,a,g.c,g.b.F()),d=e.c,c=A.c([],t.s)
for(s=a.a,f=A.N1(f,s),r=f.length,q=0;q<f.length;f.length===r||(0,A.l)(f),++q){p=f[q]
o=p.a-1
if(!(o>=0&&o<12))return A.a(B.l,o)
c.push(B.l[o]+" "+p.b)}f=A.ca(a)
r=a.d
if(r===B.o)r=A.G3(a)
else{r=B.kS.h(0,r)
r.toString}o=e.b
n=o==null?null:A.aM(o,g.d)
m=d==null
if(m)l="No statement yet"
else{l=g.e
l="Statement to "+A.cv(d,l)+", "+A.Fx(d,l)}m=!m
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
m=A.LK(d,c,m,g.e)}return new A.aY(s,f,a.c,r,n,l,k,j,c,i,h,m,o,d)},
$S:181}
A.we.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d!==B.x},
$S:2}
A.wf.prototype={
$2(a,b){var s=t.b
s.a(a)
s.a(b)
s=a.CW!=null
if(s!==(b.CW!=null))s=s?1:-1
else s=B.b.l(a.b,b.b)
return s},
$S:8}
A.xt.prototype={
$2(a,b){var s=t.v
s.a(a)
return s.a(b).d.l(0,a.d)},
$S:21}
A.kH.prototype={
k6(){var s=new A.am($.aj,t.oX),r=new A.cM(s,t.Ck),q=A.w(A.w(A.w(v.G.window).indexedDB).open("santhiq-page",1))
q.onupgradeneeded=A.bk(new A.nY(q))
q.onsuccess=A.bk(new A.nZ(r,q))
q.onerror=A.bk(new A.o_(r))
return s},
ct(a){var s=new A.am($.aj,t.nR),r=new A.cM(s,t.le)
a.onsuccess=A.bk(new A.nW(r,a))
a.onerror=A.bk(new A.nX(r))
return s},
bT(a){var s=0,r=A.J(t.m),q,p=this,o,n
var $async$bT=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:o=A
n=A
s=3
return A.r(p.k6(),$async$bT)
case 3:q=o.w(n.w(c.transaction("keep",a)).objectStore("keep"))
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bT,r)},
bC(){var s=0,r=A.J(t.m),q,p=this,o,n,m
var $async$bC=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:m=A
s=4
return A.r(p.bT("readonly"),$async$bC)
case 4:s=3
return A.r(p.ct(m.w(b.get("wrap"))),$async$bC)
case 3:n=b
if(n!=null){q=A.w(n)
s=1
break}s=5
return A.r(A.bI(A.w(A.w(A.w(A.w(v.G.window).crypto).subtle).generateKey($.GI(),!1,A.c(["encrypt","decrypt"],t.s))),t.X),$async$bC)
case 5:o=b
o.toString
A.w(o)
m=A
s=7
return A.r(p.bT("readwrite"),$async$bC)
case 7:s=6
return A.r(p.ct(m.w(b.put(o,"wrap"))),$async$bC)
case 6:q=o
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bC,r)},
c0(){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b
var $async$c0=A.K(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:p=4
e=A
s=8
return A.r(n.bT("readonly"),$async$c0)
case 8:s=7
return A.r(n.ct(e.w(a0.get("data"))),$async$c0)
case 7:m=a0
if(m==null){q=null
s=1
break}l=A.c(A.b(m).split("."),t.s)
k=B.B.O(J.ar(l,0))
j=B.B.O(J.ar(l,1))
e=A
d=A
c=A.w(A.w(A.w(v.G.window).crypto).subtle)
b=A.C_(A.S(["name","AES-GCM","iv",k],t.N,t.K))
s=10
return A.r(n.bC(),$async$c0)
case 10:s=9
return A.r(e.bI(d.w(c.decrypt(b,a0,j)),t.X),$async$c0)
case 9:i=a0
h=i
h.toString
h=B.R.cb(A.iH(t.i.a(h),0,null))
q=h
s=1
break
p=2
s=6
break
case 4:p=3
f=o.pop()
s=11
return A.r(n.ao(0),$async$c0)
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
A.w(A.w(A.w(m.window).crypto).getRandomValues(n))
l=A
k=A
j=A.w(A.w(A.w(m.window).crypto).subtle)
i=A.C_(A.S(["name","AES-GCM","iv",n],t.N,t.K))
s=3
return A.r(q.bC(),$async$cn)
case 3:s=2
return A.r(l.bI(k.w(j.encrypt(i,c,B.F.O(a))),t.X),$async$cn)
case 2:p=c
m=t.D.i("bf.S")
m.a(n)
o=B.K.gaH().O(n)
p.toString
m=m.a(A.iH(t.i.a(p),0,null))
m=B.K.gaH().O(m)
l=A
s=5
return A.r(q.bT("readwrite"),$async$cn)
case 5:s=4
return A.r(q.ct(l.w(c.put(o+"."+m,"data"))),$async$cn)
case 4:return A.H(null,r)}})
return A.I($async$cn,r)},
ao(a){var s=0,r=A.J(t.H),q=1,p=[],o=this,n,m,l
var $async$ao=A.K(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.r(o.bT("readwrite"),$async$ao)
case 6:n=c
s=7
return A.r(o.ct(A.w(n.delete("data"))),$async$ao)
case 7:s=8
return A.r(o.ct(A.w(n.delete("wrap"))),$async$ao)
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
return A.I($async$ao,r)},
$iIk:1}
A.nY.prototype={
$1(a){A.w(a)
return A.w(A.w(this.a.result).createObjectStore("keep"))},
$S:182}
A.nZ.prototype={
$1(a){A.w(a)
return this.a.cG(A.w(this.b.result))},
$S:13}
A.o_.prototype={
$1(a){A.w(a)
return this.a.dS(new A.dW(u.p))},
$S:13}
A.nW.prototype={
$1(a){A.w(a)
return this.a.cG(this.b.result)},
$S:13}
A.nX.prototype={
$1(a){A.w(a)
return this.a.dS(new A.dW(u.p))},
$S:13}
A.vI.prototype={
$2(a,b){return this.a.setAttribute(A.b(a),A.i(A.df(b)))},
$S:184}
A.vJ.prototype={
$1(a){return A.O(a)*this.a},
$S:46}
A.vK.prototype={
$1(a){return A.Cx(a)>=this.a},
$S:186}
A.xQ.prototype={
$1(a){return a===B.O.mS(a)?B.O.bz(a,0):B.O.bz(a,1)},
$S:66}
A.vl.prototype={
$1(a){var s=this.a.a
return 12+(s-a)/(s-this.b)*220},
$S:188}
A.z8.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:46}
A.zi.prototype={
$1(a){var s=this.a
return 64+s*a+s/2},
$S:46}
A.bc.prototype={
U(){return"_View."+this.b}}
A.wc.prototype={
$2(a,b){return this.a.append(A.b(a),A.b(b))},
$S:189}
A.lc.prototype={
iv(a){var s=this,r=v.G,q=A.aN(new A.n(B.dO,t.aX.a(new A.rQ(B.b.f8(A.b(A.w(A.w(r.window).location).hash),"#",""))),t.i0),t.sn)
s.ax=q==null?B.cq:q
A.Fs(s.x)
s.b.onmessage=A.bk(new A.rR(s))
A.w(r.window).addEventListener("pagehide",A.bk(new A.rS(s)))
A.Jq(B.f_,new A.rT(s))},
gca(){var s=this.as
return s===$?this.as=A.aE(new A.a8(Date.now(),0,!1).F(),B.q).a:s},
gc8(){var s=this.at
return s===$?this.at=A.aE(new A.a8(Date.now(),0,!1).F(),B.q).b:s},
iN(a){var s,r,q,p=this,o=a.data
if(o!=null)s=!(typeof o==="string")
else s=!0
if(s)return
r=A.Nn(A.b(o),p.c)
q=p.c=null
A:{if(r instanceof A.iI)return
s=r instanceof A.eF
if(s)q=r.a
if(s){p.a.ay=q
p.ae()
break A}if(r instanceof A.hl)p.ai(t.U.a(new A.pp(p,r)))}},
kE(){var s,r,q,p=A.L8()
this.c=p
s=this.a
r=s.c
q=A.jA("https","accounts.google.com","/o/oauth2/v2/auth",A.S(["client_id",r.a,"redirect_uri",r.b,"response_type","token","scope",B.a.Y(B.dD," "),"state",p,"include_granted_scopes","false","prompt","select_account"],t.N,t.z))
if(A.aS(A.w(v.G.window).open(q.gdO(),"santhiq-sign-in","popup,width=500,height=650"))==null){s.ay="The sign-in window was blocked. Allow pop-ups for this page and try again."
this.ae()}},
ai(a){return this.kv(t.U.a(a))},
kv(a){var s=0,r=A.J(t.H),q,p=2,o=[],n=[],m=this
var $async$ai=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(m.e){s=1
break}m.e=!0
m.ae()
p=3
s=6
return A.r(a.$0(),$async$ai)
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
return A.I($async$ai,r)},
ka(){var s,r,q,p=this
if(p.e)return
s=p.a
r=s.cx
if(r!==B.bY)q=r===B.av&&new A.a8(Date.now(),0,!1).dX(p.f).a>12e7
else q=!0
if(!q)return
p.f=new A.a8(Date.now(),0,!1)
p.ai(t.U.a(s.gf7()))},
H(a,b,c){var s=A.w(A.w(v.G.document).createElement(a))
if(c!=null)s.textContent=c
if(b!=null)s.className=b
return s},
V(a){return this.H(a,null,null)},
L(a,b){return this.H(a,null,b)},
W(a,b){return this.H(a,b,null)},
dF(a,b,c,d){var s,r
t.O.a(b)
s=this.H("button",c,a)
s.type="button"
r=d||this.e
s.disabled=r
s.addEventListener("click",A.bk(new A.pv(b)))
return s},
aV(a,b,c){return this.dF(a,b,c,!1)},
ar(a,b){return this.dF(a,b,null,!1)},
ek(a,b,c){return this.dF(a,b,null,c)},
ae(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="div",a9="p",b0=A.aS(A.w(v.G.document).querySelector("#app"))
b0.toString
b0.textContent=""
s=a7.V("header")
s.append(a7.L("h1","SanthIQ"))
r=a7.a
q=r.z
p=q==null?null:q.b
if(p!=null)s.append(a7.H("span","quiet",p))
if(r.cx===B.av){o=!r.ch
q=o?"Hide amounts":"Show amounts"
n=a7.aV(q,new A.rU(a7,o),"eye")
n.setAttribute("aria-pressed",""+o)
n.prepend(A.Cz(o?"eye":"eye-off"))
m=a7.W(a8,"mode")
m.setAttribute("role","group")
for(q=[B.lO,B.m4],l=0;l<2;++l){k={}
j=q[l]
i=k.a=null
h=j.a
k.a=h
if(h===r.CW)i="on"
i=a7.aV(j.b,new A.rV(k,a7),i)
i.setAttribute("aria-pressed",""+(k.a===r.CW))
m.append(i)}s.append(n)
s.append(m)}g=B.bQ[B.d.R(B.a.bH(B.bQ,a7.x)+1,3)]
f=a7.x
A:{if("light"===f){q="Light"
break A}if("dark"===f){q="Dark"
break A}q="System theme"
break A}q=a7.aV(q,new A.rW(a7,g),"theme")
q.title="Colour theme; click for "+(g==="system"?"the system's":g)
e=a7.x
B:{if("light"===e){k="sun"
break B}if("dark"===e){k="moon"
break B}k="monitor"
break B}q.prepend(A.Cz(k))
s.append(q)
b0.append(s)
if(r.cx===B.av&&r.CW){q=a7.W(a8,"editing")
q.append(a7.L("span","Changes allowed: what you send from this page goes to the phone on its next sync."))
q.append(a7.ar("Stop allowing changes",new A.rX(a7)))
b0.append(q)}d=r.ay
if(d!=null)b0.append(a7.H(a9,"problem",d))
c=a7.r
if(c!=null)b0.append(a7.H(a9,"said",c))
if(a7.e)b0.append(a7.H(a9,"quiet","Working\u2026"))
switch(r.cx.a){case 0:b0.append(a7.L(a9,r.f!=null?"This browser is approved. Sign in to Google to open SanthIQ.":"SanthIQ for this computer. Once the phone approves this browser it stays approved until you remove it on the phone or press Forget this browser."))
b0.append(a7.aV("Sign in with SanthIQ's Google account",a7.gkD(),"primary"))
break
case 1:a7.jk(b0)
break
case 2:b0.append(a7.L("h2","Waiting for the phone"))
b0.append(a7.L(a9,"On the phone: Settings, Devices. Check the code matches, then Approve."))
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
j=B.b.X(a,0,3)+" "+B.b.ad(a,3)
r=j}b0.append(a7.H(a9,"code",r==null?"":r))
b0.append(a7.ar("Look again now",new A.rY(a7)))
break
case 3:a0=a7.W("nav","side")
a0.setAttribute("aria-label","Views")
for(q=a7.ay,a1=a0,a2=null,l=0;l<12;++l){a3=B.dO[l]
a4=a3.d
if(a4!==a2){a1=a7.W(a8,a4==="Settings"?"side-box bottom":"side-box")
a0.append(a1)
if(a4.length!==0){a5=q.u(0,a4)&&a7.ax.d!==a4
k=a7.aV((a5?"\u25b8":"\u25be")+" "+a4,new A.rZ(a7,a4),"side-group")
k.setAttribute("aria-expanded",""+!a5)
a1.append(k)
if(a5){a2=a4
continue}}a2=a4}else if(q.u(0,a4)&&a7.ax.d!==a4)continue
k=a3===a7.ax?"tab on":"tab"
k=a7.aV(a3.c,new A.t_(a7,a3),k)
k.prepend(A.Cz(a3.e))
j=a3===a7.ax?"page":"false"
k.setAttribute("aria-current",j)
a1.append(k)}a6=a7.W(a8,"content")
q=a7.W(a8,"shell")
q.append(a0)
q.append(a6)
b0.append(q)
switch(a7.ax.a){case 0:a7.jn(a6)
break
case 1:a7.jf(a6)
break
case 3:a7.jm(a6)
break
case 2:a7.ju(a6)
break
case 4:a7.jj(a6)
break
case 5:a7.jt(a6)
break
case 6:a7.jh(a6)
break
case 8:a7.jp(a6)
break
case 9:a7.jq(a6)
break
case 7:a7.ji(a6)
break
case 10:a7.jl(a6)
break
case 11:a7.jg(a6)
a7.js(a6)
a7.jr(a6)
if(r.CW)a7.jo(a6)
break}break
case 4:b0.append(a7.L(a9,"This browser was removed on the phone."))
break}},
jk(a){var s,r=this,q=r.V("form"),p=A.w(A.w(v.G.document).createElement("input"))
p.type="password"
p.autocomplete="off"
p.id="passphrase"
p.required=!0
s=r.L("label","SanthIQ's passphrase")
s.setAttribute("for","passphrase")
q.append(s)
q.append(p)
s=r.H("button","primary","Ask the phone to let this browser in")
s.type="submit"
s.disabled=r.e
q.append(s)
q.append(r.H("p","quiet","The passphrase opens the key in this tab for a moment to seal the request, and is then dropped. It is never sent or kept."))
q.addEventListener("submit",A.bk(new A.qb(r,p)))
a.append(r.L("h2","Join"))
a.append(q)},
jn(c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="p",b6="quiet",b7="section",b8="quiet small",b9=b4.a,c0=b9.at
c0.toString
s=b4.gca()
r=b4.gc8()-1
if(!(r>=0&&r<12))return A.a(B.V,r)
c1.append(b4.iS(B.V[r]+" "+s))
q=new A.a8(Date.now(),0,!1).F()
s=b4.w
r=b4.gca()
p=b4.gc8()
o=b9.c
n=o.c
o=o.d
m=A.LY(c0,s,n,b9.ch,p,q,o,r)
c1.append(b4.H(b5,b6,b4.iU(c0,b4.w)))
for(s=m.c,r=s.length,p=t.s,l=0;l<s.length;s.length===r||(0,A.l)(s),++l){k=s[l]
j=b4.W(b7,"region-overview")
i=k.a
j.append(b4.L("h2",A.ef(i)+" ("+i+")"))
h=b4.W("div","kpis")
for(g=k.b,f=0;f<4;++f){e=g[f]
d=b4.W("div","kpi "+e.d.b)
d.append(b4.H("span","kpi-label",e.a))
c=e.b
b=c==null
if(b)c="Not known yet"
d.append(b4.H("strong",b?"kpi-value none":"kpi-value",c))
d.append(b4.L("small",e.c))
h.append(d)}j.append(h)
a=k.c
if(a!=null){j.append(b4.L("h3","Cash forecast, next 31 days"))
if(b9.ch)j.append(b4.H(b5,b6,"The forecast shows once amounts are shown."))
else{g=new A.a8(Date.now(),0,!1).F()
d=g.F()
g.F()
a0=d.aw(288e8)
d=A.b0(a0)
g=A.b4(a0)
c=A.au(a0)
b=A.c([],p)
for(a1=0;a1<a.length;++a1){if(a1===0)a2="Today"
else if(B.d.R(a1,7)===0){a2=864e8*a1
a2=""+A.au(A.ay(d,g,c).aw(a2))+"/"+A.b4(A.ay(d,g,c).aw(a2))}else a2=""
b.push(a2)}g=$.L()
a3=B.e.h(0,i)
if(a3==null)A.f(A.x(i,"currency","is not a supported currency"))
if((g.b<=0?0:Math.max(g.gv().b,0))>a3)A.f(A.y(i+" allows "+A.i(a3)+" decimal places",g.k(0),null))
i=A.aM(new A.q(g,i),!1)
g=A.D("[\\d.,]",!0,!1)
j.append(A.FY("Cash forecast",b,a,!1,new A.qp(k),A.ao(i,g,"")))}}i=k.d
if(i!=null)j.append(b4.H(b5,b8,i))
c1.append(j)}a4=b4.W(b7,"health")
s=m.d
a4.append(b4.L("h2",s.length===0?"Financial health: nothing needs you":"Financial health"))
a5=new A.qs(b4)
for(r=t.S,i=A.F(s).c,g=A.by(s,0,A.cO(3,"count",r),i),d=g.$ti,g=new A.ac(g,g.gq(0),d.i("ac<a4.E>")),d=d.i("a4.E");g.n();){c=g.d
a4.append(a5.$1(c==null?d.a(c):c))}if(s.length>3){a6=b4.W("details","more")
a6.append(b4.L("summary","Show "+(s.length-3)+" more"))
for(s=A.by(s,3,null,i),i=s.$ti,s=new A.ac(s,s.gq(0),i.i("ac<a4.E>")),i=i.i("a4.E");s.n();){g=s.d
a6.append(a5.$1(g==null?i.a(g):g))}a4.append(a6)}c1.append(a4)
a7=b4.V(b7)
a7.append(b4.L("h2","Payments due in the next 30 days"))
s=m.e
if(s.length===0)a7.append(b4.H(b5,b6,"No card bill or loan instalment is due."))
else{a8=b4.aF(A.c(["Due","Account","What","Amount"],p),B.aa)
for(s=A.by(s,0,A.cO(6,"count",r),A.F(s).c),r=s.$ti,s=new A.ac(s,s.gq(0),r.i("ac<a4.E>")),r=r.i("a4.E");s.n();){i=s.d
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
g.append(b4.bA(i,d?"attention":null,B.aa))}a7.append(a8)
a7.append(b4.ar("All payments due",new A.qq(b4)))}c1.append(a7)
s=b4.w
r=b4.gca()
p=b4.gc8()
a9=A.LX(c0,s,b9.ax,n,b9.ch,p,q,o,r)
b0=b4.W("details","card month-detail")
b0.append(b4.L("summary",a9.b+" in detail: money in, spent and by category"))
b1=b4.W("ul","notes")
for(b9=a9.d,c0=b9.length,l=0;l<b9.length;b9.length===c0||(0,A.l)(b9),++l)b1.append(b4.L("li",b9[l]))
b0.append(b1)
for(b9=a9.e,c0=b9.length,s=m.b,l=0;l<b9.length;b9.length===c0||(0,A.l)(b9),++l){k=b9[l]
r=k.a
b0.append(b4.L("h3",A.ef(r)+" ("+r+")"))
for(r=k.b,f=0;f<3;++f){b2=r[f]
b0.append(b4.fS(b2.a,b2.b,b2.c))}for(r=k.e,p=r.length,f=0;f<r.length;r.length===p||(0,A.l)(r),++f)b0.append(b4.H(b5,b8,r[f]))
r=k.d
if(r!=null){b0.append(b4.H(b5,b6,r))
if(s)b0.append(b4.ar("See the last complete month",new A.qr(b4)))}for(r=k.c,p=r.length,f=0;f<r.length;r.length===p||(0,A.l)(r),++f){b3=r[f]
b0.append(b4.fS(b3.a,b3.b,b3.c))}}c1.append(b0)},
iU(a,b){var s,r=a.aG(b)
if(r==null)r="personal"
A:{if("company"===r){s="a company book: its own accounts and invoices"
break A}if("property"===r){s="the property book: rent, its costs and taxes"
break A}if("member"===r){s="a household member's own book"
break A}s="your personal book"
break A}return A.fF(b,a)+" is "+s+". Books are kept apart and never added together, and Singapore and India figures are never added to each other."},
eH(){var s=this.a.at.gcE(),r=A.o(s).i("at<1>"),q=A.B(new A.at(s,r),r.i("h.E"))
if(!B.a.u(q,this.w))this.w=q.length===0?"personal":B.a.ga0(q)
return q},
dE(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="span"
t.a.a(a2)
s=a.a
r=s.at
r.toString
q=a.eH()
p=a.W("nav","books")
for(o=q.length,n=r.f,m=0;m<q.length;q.length===o||(0,A.l)(q),++m){l=q[m]
k=n.h(0,l)
if(k==null)k=l==="personal"?"personal":null
A:{if("company"===k){j="Company"
break A}if("property"===k){j="Property"
break A}if("member"===k){j="Member"
break A}j=null
break A}i=A.fF(l,r)
h=l===a.w?"tab book on":"tab book"
g=a.aV(i,new A.pq(a,l),h)
if(j!=null)g.append(a.H("small","book-kind",j))
p.append(g)}f=s.ax
p.append(a.W(a0,"grow"))
s=a.H(a0,"quiet",f==null?"Nothing published yet":"As of "+A.G7(f))
s.setAttribute("title","Changes made on the phone since show after its next sync.")
p.append(s)
p.append(a.ar("Get the latest",new A.pr(a)))
e=a.W("div","bars")
e.append(p)
s=a1==null
if(!s||a2.length>1){d=a.W("nav","sub")
s=!s
if(s){c=a.gca()===A.aE(new A.a8(Date.now(),0,!1).F(),B.q).a&&a.gc8()===A.aE(new A.a8(Date.now(),0,!1).F(),B.q).b
r=a.aV("\u2039",new A.ps(a),"step")
r.setAttribute("aria-label","Earlier")
d.append(r)
d.append(a.L("strong",a1))
r=a.dF("\u203a",new A.pt(a),"step",c)
r.setAttribute("aria-label","Later")
d.append(r)}if(a2.length>1){if(s)d.append(a.W(a0,"gap"))
for(s=a2.length,m=0;m<a2.length;a2.length===s||(0,A.l)(a2),++m){b=a2[m]
r=A.ef(b)
o=b===a.y?"tab on":"tab"
d.append(a.aV(r+" ("+b+")",new A.pu(a,b),o))}}e.append(d)}return e},
iT(a){return this.dE(null,a)},
c7(){return this.dE(null,B.c)},
iS(a){return this.dE(a,B.c)},
aF(a,b){var s,r,q,p,o,n,m,l=this
t.a.a(a)
t.L.a(b)
s=l.V("table")
r=l.V("tr")
for(q=A.bO(a,0,t.N),p=J.Q(q.a),o=q.b,q=new A.as(p,o,A.o(q).i("as<1>"));q.n();){n=q.c
n=n>=0?new A.p(o+n,p.gt()):A.f(A.ak())
m=B.a.u(b,n.a)?"amount":null
r.append(l.H("th",m,n.b))}q=l.V("thead")
q.append(r)
s.append(q)
s.append(l.V("tbody"))
return s},
dN(a){return this.aF(a,B.A)},
bA(a,b,c){var s,r,q,p,o,n
t.a.a(a)
t.L.a(c)
s=this.W("tr",b)
for(r=A.bO(a,0,t.N),q=J.Q(r.a),p=r.b,r=new A.as(q,p,A.o(r).i("as<1>"));r.n();){o=r.c
o=o>=0?new A.p(p+o,q.gt()):A.f(A.ak())
n=B.a.u(c,o.a)?"amount":null
s.append(this.H("td",n,o.b))}return s},
fu(a){return this.bA(a,null,B.A)},
bb(a,b){return this.bA(a,null,b)},
jf(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a,b4=b3.at
b4.toString
b5.append(b2.c7())
s=b2.w
r=new A.a8(Date.now(),0,!1).F()
for(s=A.CE(b4,s,b3.ch,r,b3.c.d).b,r=s.length,q=t.s,p=b4.r.a,o=0;o<s.length;s.length===r||(0,A.l)(s),++o){n=s[o]
m=b2.V("section")
l=n.a
m.append(b2.L("h2",A.ef(l)+" ("+l+")"))
for(l=n.b,k=l.length,j=0;j<l.length;l.length===k||(0,A.l)(l),++j){i=l[j]
h=i.b
m.append(b2.L("h3",i.a.c+" ("+h.length+")"))
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
g=e}m.append(b2.H("p","total-line","Total: "+A.i(g)))}c=b2.aF(B.k6,B.dy)
c.className="accounts"
g=A.aS(c.querySelector("tbody"))
g.toString
for(f=h.length,b=0;b<h.length;h.length===f||(0,A.l)(h),++b){a=h[b]
e=a.as
d=e==null
a0=d?"":"\u26a0 "
a1=a.Q?" (closed)":""
a2=a.f
if(a2==null)a2="No balance yet"
a3=a.y
a3=a3.length===0?"None":B.a.Y(a3,", ")
a4=a.x
if(a4==null)a4="None"
a4=A.c([a0+a.b+a1,a.c,a.d,a2,a.r,""+a.z,a3,a4],q)
a3=A.c([],q)
a0=a.a
if(a0===b2.ch)a3.push("open")
a3.push("click")
d=!d
if(d)a3.push("attention")
a5=b2.bA(a4,B.a.Y(a3," "),B.dy)
if(d){d=A.D("^Out of date: statement to [^.]*",!0,!1)
a6=A.Gt(e,d,"Out of date",0)
e=A.aS(A.w(a5.children).item(4))
e.toString
e.append(b2.H("div","warn small",a6))}a5.addEventListener("click",A.bk(new A.pw(b2,a)))
g.append(a5)
if(a0!==b2.ch)continue
e=new A.a8(Date.now(),0,!1).F()
a7=A.M1(b4,a0,b3.ch,e)
a8=b2.aF(A.c(["Statement period","Opening","Closing","State"],q),B.aW)
for(e=a7.length,a9=0;a9<a7.length;a7.length===e||(0,A.l)(a7),++a9){b0=a7[a9]
d=A.aS(a8.querySelector("tbody"))
d.toString
d.append(b2.bb(A.c([b0.a,b0.b,b0.c,b0.d],q),B.aW))}b1=b2.W("td","inner")
b1.setAttribute("colspan","8")
e=a7.length===0?b2.H("p","quiet","No statement recorded yet."):a8
b1.append(e)
if(b3.CW){e=p.h(0,a0)
e.toString
b1.append(b2.iD(e))}e=b2.V("tr")
e.append(b1)
g.append(e)}m.append(c)}b5.append(m)}},
jm(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="section",b2="h2",b3="p",b4="quiet",b5=b0.a,b6=b5.at
b6.toString
b7.append(b0.c7())
s=A.aE(new A.a8(Date.now(),0,!1).F(),B.q)
r=A.LW(b6,b0.w,b5.ch,s)
q=A.Gl(b6,b0.w,s,b5.ch)
p=b0.V(b1)
p.append(b0.L(b2,"Payments due in the next 30 days"))
if(q.length===0)p.append(b0.H(b3,b4,"No card bill or loan instalment is due."))
else{o=t.s
n=b0.aF(A.c(["Due","Account","What","Amount"],o),B.aa)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.l)(q),++l){k=q[l]
j=A.aS(n.querySelector("tbody"))
j.toString
i=k.r
h=k.a
if(i)h+=", overdue"
g=k.e
if(g==null)g="Not known"
g=A.c([h,k.b,k.c,g],o)
j.append(b0.bA(g,i?"attention":null,B.aa))}p.append(n)
p.append(b0.H(b3,"quiet small","A card bill is what is still to pay on its latest statement; a loan, its instalment as you gave it. The app pays nothing itself."))}b7.append(p)
if(r.length===0)b7.append(b0.H(b3,b4,"No loans in this book yet."))
for(o=r.length,m=t.s,f=null,l=0;l<r.length;r.length===o||(0,A.l)(r),++l){e=r[l]
j=e.a
d=j.e
if(d!==f){b7.append(b0.H(b2,"region",A.ef(d)+" ("+d+")"))
f=d}c=b0.W(b1,"loan")
i=A.G3(j)
h=j.CW!=null?" (closed)":""
c.append(b0.L(b2,e.b+" \xb7 "+i+h))
h=A.c([],m)
i=e.c
if(i.length!==0)h.push(i)
h.push(e.d)
c.append(b0.H(b3,"lead",B.a.Y(h,". ")))
c.append(b0.H(b3,b4,e.e+". Outstanding: "+e.f+"."))
i=e.r
h=A.F(i)
g=h.i("n<1>")
b=A.B(new A.n(i,h.i("j(1)").a(new A.qk()),g),g.i("h.E"))
if(b.length!==0)c.append(b0.H(b3,"todo","To do: add the "+B.a.Y(b," and ")+" so it can be checked and forecast."))
i=e.w
if(i.length!==0){a=b0.aF(A.c(["Instalment","Amount","Status","Still due"],m),B.du)
for(h=i.length,a0=0;a0<i.length;i.length===h||(0,A.l)(i),++a0){a1=i[a0]
g=A.aS(a.querySelector("tbody"))
g.toString
g.append(b0.bb(A.c([a1.a,a1.b,a1.c,a1.d],m),B.du))}c.append(a)}if(b5.CW&&!b5.ch)c.append(b0.fM(j))
if(b5.CW&&b5.ch)c.append(b0.H(b3,b4,"Tick Show amounts to update its details."))
b7.append(c)}o=A.c([],t.sA)
for(m=A.CH(b6),j=m.length,l=0;l<m.length;m.length===j||(0,A.l)(m),++l){a2=m[l]
if(a2.a.r===b0.w){i=a2.b
h=i.c.a.l(0,$.L())
i=h!==0&&A.G0(b6,i.bj(a2.d))==null}else i=!1
if(i)o.push(a2)}B.a.D(o,new A.ql())
if(o.length!==0){c=b0.V(b1)
c.append(b0.L(b2,"On card statements, not added yet ("+o.length+")"))
for(m=o.length,j=t.I,l=0;l<o.length;o.length===m||(0,A.l)(o),++l){a2=o[l]
a3=b0.V(b3)
i=a2.a
h=A.ef(i.e)
g=a2.b
a4=g.a===B.ci?"personal loan":"instalment plan"
a5=g.b.k(0)
a6=A.aM(g.c,b5.ch)
g=g.e
g=g==null?"":", "+A.i(g)+" instalments left"
a3.append(b0.L("span",h+", "+(i.c+" "+a4+" of "+a5)+": "+a6+" outstanding"+g+" (statement to "+a2.c.k(0)+"). "))
if(b5.CW){a3.append(b0.ar("Add this loan",new A.qm(b0,a2)))
a7=A.G_(b6,a2)
if(a7.length!==0){a8={}
a8.a=B.a.ga0(a7).a
i=A.c([],j)
for(h=a7.length,a0=0;a0<a7.length;a7.length===h||(0,A.l)(a7),++a0){a9=a7[a0]
i.push(new A.p(a9.a,A.ca(a9)))}a3.append(b0.aL(i,a8.a,new A.qn(a8)))
a3.append(b0.ar("It's this loan I have",new A.qo(a8,b0,a2)))}}c.append(a3)}b7.append(c)}if(b5.CW){b5=b0.V(b1)
b5.append(b0.fM(null))
b7.append(b5)}},
fM(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6="text",a7="17/11/2026",a8=a4.a,a9=a8.at
a9.toString
s=b0==null
r=s?a5:b0.as
if(r==null)r=B.bR
q=a4.W("form","edit")
q.append(a4.L("h3",s?"Add a loan":"Update loan details"))
p=new A.rD(a4,q)
o=new A.rE(a4,q)
n=a8.gmt()
if(s){a8=A.c([],t.I)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.l)(n),++l){k=n[l].a
a8.push(new A.p(k,k))}m=A.aN(n,t.hS)
m=m==null?a5:m.a
j=o.$3("Bank",a8,m==null?"":m)}else j=a5
i=s?p.$3("Last 4 digits",a6,""):a5
h=s?o.$3("Currency",B.jE,"SGD"):a5
g=s?p.$4$placeholder("Track from",a6,A.mD(A.aE(new A.a8(Date.now(),0,!1).F(),B.q)),a7):a5
a8=t.I
s=A.c([B.e7],a8)
for(l=0;l<4;++l){m=B.bN[l].b
if(0>=m.length)return A.a(m,0)
s.push(new A.p(m,m[0].toUpperCase()+B.b.ad(m,1)))}m=r.a
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
a9=a9.gK().gT()
s=A.o(a9)
m=s.i("n<h.E>")
a1=A.B(new A.n(a9,s.i("j(h.E)").a(new A.rz(r)),m),m.i("h.E"))
B.a.D(a1,new A.rA())
a8=A.c([B.e7],a8)
for(a9=a1.length,l=0;l<a1.length;a1.length===a9||(0,A.l)(a1),++l){a2=a1[l]
a8.push(new A.p(a2.a,A.ca(a2)))}a9=r.w
a3=o.$3("Paid from",a8,a9==null?"":a9)
a8=a4.H("button","primary","Send to the phone")
a8.type="submit"
a8.disabled=a4.e
q.append(a8)
q.addEventListener("submit",A.bk(new A.rB(a4,a,g,f,e,d,c,b,new A.rC(),a0,a3,b0,n,j,i,h)))
return q},
aL(a,b,c){var s,r,q,p,o,n,m
t.DX.a(a)
t.ma.a(c)
s=v.G
r=A.w(A.w(s.document).createElement("select"))
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.l)(a),++p){o=a[p]
n=o.a
m=A.w(A.w(s.document).createElement("option"))
m.value=n
m.textContent=o.b
m.selected=n===b
r.append(m)}r.addEventListener("change",A.bk(new A.rG(c,r)))
return r},
bo(a,b,c,d){var s
t.ma.a(c)
s=A.w(A.w(v.G.document).createElement("input"))
s.type=a
s.value=b
if(d!=null)s.placeholder=d
s.addEventListener("change",A.bk(new A.rn(c,s)))
return s},
fJ(a,b,c){return this.bo(a,b,c,null)},
al(a,b){var s=this.W("label","field")
s.append(this.L("span",a))
s.append(b)
return s},
ju(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="dd/mm/yyyy",a6=a3.a,a7=a6.at
a7.toString
a8.append(a3.c7())
s=a3.cx
r=a3.w
if(s.a!==r)a3.cx=new A.cr(r,a4,a4,a4,"",B.cl,a4,B.ck,0)
q=new A.rc(a3)
s=a7.gK().gT()
r=A.o(s)
p=r.i("n<h.E>")
o=A.B(new A.n(s,r.i("j(h.E)").a(new A.qZ(a3)),p),p.i("h.E"))
B.a.D(o,new A.r_())
s=A.a5(a7.d,t.N,t.G).gT()
n=A.B(s,A.o(s).i("h.E"))
B.a.D(n,new A.r0())
m=new A.rb(a3,q)
l=a3.W("div","filters")
l.append(a3.al("Words",a3.bo("search",a3.cx.e,new A.r3(a3,q),"Payee or note")))
s=t.I
r=A.c([B.lZ],s)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.l)(o),++k){j=o[k]
r.push(new A.p(j.a,A.ca(j)))}p=a3.cx.b
if(p==null)p=""
l.append(a3.al("Account",a3.aL(r,p,new A.r4(a3,q))))
l.append(a3.al("From",a3.bo("text",A.mD(a3.cx.c),new A.r5(a3,m),a5)))
l.append(a3.al("To",a3.bo("text",A.mD(a3.cx.d),new A.r6(a3,m),a5)))
p=A.c([],s)
for(k=0;k<4;++k){i=B.dK[k]
p.push(new A.p(i.b,i.c))}l.append(a3.al("Show",a3.aL(p,a3.cx.f.b,new A.r7(a3,q))))
r=A.c([B.lC,B.lR],s)
for(p=n.length,k=0;k<n.length;n.length===p||(0,A.l)(n),++k){h=n[k]
r.push(new A.p(h.a,h.c))}p=a3.cx.r
if(p==null)p=""
l.append(a3.al("Category",a3.aL(r,p,new A.r8(a3,q))))
s=A.c([],s)
for(k=0;k<4;++k){i=B.dN[k]
s.push(new A.p(i.b,i.c))}l.append(a3.al("Order",a3.aL(s,a3.cx.w.b,new A.r9(a3,q))))
s=a3.cx
r=new A.a8(Date.now(),0,!1).F()
g=A.M2(a7,s,a6.ch,r)
f=a3.W("ul","notes")
for(a6=g.e,s=a6.length,k=0;k<a6.length;a6.length===s||(0,A.l)(a6),++k)f.append(a3.L("li",a6[k]))
e=a3.V("section")
e.append(l)
a6=g.b
s=A.CP(""+a6,"SGD")
a6=a6===1?"":"s"
e.append(a3.H("p","quiet",s+" transaction"+a6))
e.append(f)
a6=t.s
d=a3.aF(A.c(["Date","Account","Payee","Amount","Type","Category","State","Note"],a6),B.aa)
d.className="tx"
for(s=g.a,r=s.length,k=0;k<s.length;s.length===r||(0,A.l)(s),++k){c=s[k]
p=A.c([c.b,c.c,c.d,c.e,c.f,c.r,c.w,c.x],a6)
b=c.a
a=a3.bA(p,b===a3.CW?"open click":"click",B.aa)
a.addEventListener("click",A.bk(new A.ra(a3,c)))
a0=A.aS(d.querySelector("tbody"))
a0.append(a)
if(b===a3.CW){a1=a3.W("td","inner")
a1.setAttribute("colspan","8")
p=a3.V("tr")
a1.append(a3.kT(a7,b))
p.append(a1)
a0.append(p)}}a2=a3.V("nav")
a6=g.c
a2.append(a3.ek("\u2039 Newer",new A.r1(a3,q,g),a6===0))
a7=g.d
a2.append(a3.H("span","quiet","Page "+(a6+1)+" of "+a7))
a2.append(a3.ek("Older \u203a",new A.r2(a3,q,g),a6>=a7-1))
e.append(d)
e.append(a2)
a8.append(e)},
jj(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="p",a9="quiet",b0="section",b1="h2",b2="attention",b3="customer",b4="date",b5="edit-grid",b6="currency",b7="td",b8="text",b9="paymentDays",c0=a7.a,c1=c0.at
c1.toString
s=t.s
r=A.c([],s)
for(q=c1.gcE(),q=new A.cB(q,q.r,q.e,A.o(q).i("cB<1>")),p=c1.f;q.n();){o=q.d
n=p.h(0,o)
if(n==null)n=o==="personal"?"personal":null
if(n==="company")r.push(o)}if(r.length!==0&&!B.a.u(r,a7.w))a7.w=B.a.ga0(r)
c2.append(a7.c7())
if(!B.a.u(r,a7.w)){c2.append(a7.H(a8,a9,"Invoices are made for a company book; this book is not one."))
return}r=a7.w
q=A.aE(new A.a8(Date.now(),0,!1).F(),B.q)
m=A.LU(c1,r,c0.ch,q)
l=c0.CW
c0=m.a
if(c0==null){c0=a7.V(b0)
c0.append(a7.H(a8,"warn","Set up who issues "+A.fF(a7.w,c1)+"'s invoices on the phone first (Books, "+A.fF(a7.w,c1)+", Make sales invoices): the UEN and the account number are kept there."))
c2.append(c0)}else{c1=m.b?"tax invoices with GST at 9%":"plain invoices, not GST registered"
c2.append(a7.H(a8,a9,c0+": "+c1+". Drafts made here are issued, numbered and made into PDFs on the phone."))}k=a7.V(b0)
c0=m.e
k.append(a7.L(b1,"Issued ("+c0.length+")"))
if(c0.length===0)k.append(a7.H(a8,a9,"None issued yet."))
if(c0.length!==0){c1=A.c(["Number","Customer","Date","Due"],s)
r=m.b
if(r)c1.push("GST")
c1.push("Total")
c1.push("Credit notes")
c1.push("State")
j=a7.aF(c1,r?B.dB:B.dz)
for(c1=c0.length,i=0;i<c0.length;c0.length===c1||(0,A.l)(c0),++i){h=c0[i]
q=h.a
q=A.c([q.w,q.Q,h.b,h.c],s)
if(r)q.push(h.e)
q.push(h.d)
p=h.f
q.push(p.length===0?"None":p)
p=h.r
q.push(p)
o=r?B.dB:B.dz
g=a7.bA(q,p==="Overdue"?b2:null,o)
A.aS(j.querySelector("tbody")).append(g)}k.append(j)}c2.append(k)
f=a7.V(b0)
c0=m.d
f.append(a7.L(b1,"Drafts ("+c0.length+")"))
if(c0.length===0)f.append(a7.H(a8,a9,"No draft."))
for(c1=c0.length,r=m.b,i=0;i<c0.length;c0.length===c1||(0,A.l)(c0),++i){e=c0[i]
d=a7.W("div","draft")
d.append(a7.L("h3",e.b+" \xb7 "+e.c))
q=e.e
p=q==null
q=p?"Missing: "+B.a.Y(e.f,", ").toLowerCase()+".":"If issued now: "+q
d.append(a7.H(a8,p?"warn":a9,q))
q=A.c(["Description","Qty","Unit price","Amount"],s)
if(r)q.push("GST")
j=a7.aF(q,B.ds)
for(q=e.d,p=q.length,c=0;c<q.length;q.length===p||(0,A.l)(q),++c){b=q[c]
o=A.aS(j.querySelector("tbody"))
o.toString
n=A.c([b.a,b.b,b.c,b.d],s)
if(r)n.push(b.e)
o.append(a7.bb(n,B.ds))}d.append(j)
if(l)d.append(a7.ar("Remove this draft",new A.pV(a7,e)))
f.append(d)}c2.append(f)
if(l&&m.c.length!==0){a=a7.cy
a0=new A.q8(a7,a)
if(a.h(0,b3)==null)a.j(0,b3,B.a.ga0(m.c).b)
if(a.h(0,b4)==null)a.j(0,b4,A.mD(A.aE(new A.a8(Date.now(),0,!1).F(),B.q)))
a1=a7.W("div",b5)
c0=A.c([],t.I)
for(c1=m.c,q=c1.length,i=0;i<c1.length;c1.length===q||(0,A.l)(c1),++i){a2=c1[i]
p=A.m(a2.c.h(0,"name"))
p.toString
c0.push(new A.p(a2.b,p))}c1=a.h(0,b3)
c1.toString
a1.append(a7.al("Customer",a7.aL(c0,c1,new A.pW(a))))
a1.append(a0.$3$placeholder(b4,"Invoice date","dd/mm/yyyy"))
a1.append(a0.$3$placeholder("reference","Customer reference (optional)","Like a PO number"))
a1.append(a0.$3$wide("note","Note (optional)",!0))
c1=a.h(0,b6)
c0=c1==null?"SGD":c1
a1.append(a7.al("Currency",a7.aL(B.ji,c0,new A.pX(a7,a))))
a1.append(a0.$3$placeholder("rate","S$ for 1 unit (not SGD, with GST)","Like 1.3412"))
c0=a.h(0,b6)
c0=A.c(["Description","Quantity","Unit price, "+(c0==null?"SGD":c0)],s)
if(r)c0.push("GST")
a3=a7.dN(c0)
for(a4=0;a4<a7.db;++a4){g=a7.V("tr")
c0=a7.V(b7)
c1=""+a4
q=a.h(0,"d"+c1)
if(q==null)q=""
q=a7.bo(b8,q,new A.q0(a4,a),"What was supplied")
q.className="wide"
c0.append(q)
g.append(c0)
c0=a7.V(b7)
q=a.h(0,"q"+c1)
if(q==null)q=""
c0.append(a7.bo(b8,q,new A.q1(a4,a),"Like 1"))
g.append(c0)
c0=a7.V(b7)
q=a.h(0,"p"+c1)
if(q==null)q=""
c0.append(a7.bo(b8,q,new A.q2(a4,a),"Like 1200.00"))
g.append(c0)
if(r){c0=a7.V(b7)
c1=a.h(0,"g"+c1)
if(c1==null)c1="standard"
c0.append(a7.aL(B.jp,c1,new A.q3(a4,a)))
g.append(c0)}A.aS(a3.querySelector("tbody")).append(g)}c0=a7.V(b0)
c0.append(a7.L(b1,"New invoice draft"))
c0.append(a1)
c0.append(a3)
c1=a7.V("nav")
c1.append(a7.ar("Add a row",new A.q4(a7)))
c1.append(a7.aV("Send the draft to the phone",new A.q5(a7,a,m),"primary"))
c0.append(c1)
c2.append(c0)}else if(l)c2.append(a7.H(a8,a9,"Add a customer below to start a draft."))
a5=a7.V(b0)
c0=m.c
a5.append(a7.L(b1,"Customers ("+c0.length+")"))
j=a7.dN(A.c(["Name","Address","Attention","Pays in"],s))
for(c1=c0.length,i=0;r=c0.length,i<r;c0.length===c1||(0,A.l)(c0),++i){a2=c0[i]
r=A.aS(j.querySelector("tbody"))
r.toString
q=a2.c
p=A.m(q.h(0,"name"))
p.toString
o=A.m(q.h(0,"address"))
o.toString
o=A.ao(o,"\n",", ")
n=A.m(q.h(0,b2))
if(n==null)n=""
r.append(a7.fu(A.c([p,o,n,A.aG(q.h(0,b9))==null?"The usual days":A.i(A.aG(q.h(0,b9)))+" days"],s)))}if(r!==0)a5.append(j)
if(l){c0=t.N
a2=A.v(c0,c0)
a6=A.w(A.w(v.G.document).createElement("textarea"))
a6.rows=3
a6.placeholder="Street, unit, postcode"
a6.addEventListener("change",A.bk(new A.q6(a6,a2)))
a5.append(a7.L("h3","Add a customer"))
c0=a7.W("div",b5)
c0.append(a7.al("Name",a7.fJ(b8,"",new A.q7(a2))))
c0.append(a7.al("Address",a6))
c0.append(a7.al("Attention (optional)",a7.fJ(b8,"",new A.pY(a2))))
c0.append(a7.al("Pays in, days (optional)",a7.bo(b8,"",new A.pZ(a2),"Like 30")))
a5.append(c0)
a5.append(a7.ar("Send the customer to the phone",new A.q_(a7,a2)))}c2.append(a5)},
jt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a.at
e.toString
s=new A.qR(f,e)
f.eH()
r=s.$0()
q=A.fG(e,f.w,r.r)
if(!B.a.u(q,f.y)){f.y=B.a.ga0(q)
r=s.$0()}e=f.gca()
p=f.gc8()-1
if(!(p>=0&&p<12))return A.a(B.V,p)
a.append(f.dE("Twelve months to "+(B.V[p]+" "+e),q))
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
for(p=r.c,k=p.length,j=0;j<p.length;p.length===k||(0,A.l)(p),++j){i=p[j]
h=A.c([i.a],n)
B.a.a1(h,i.b)
h.push(i.c)
h.push(i.d)
m.append(f.bb(h,e))}p=r.d
k=A.c([p.a],n)
B.a.a1(k,p.b)
k.push(p.c)
k.push(p.d)
m.append(f.bA(k,"total",e))
p=r.e
if(B.a.M(p,new A.qS())){n=A.c(["Not filed yet, not counted (transactions)"],n)
B.a.a1(n,p)
n.push("")
n.push("")
m.append(f.bA(n,"aside",e))}g=f.W("ul","notes")
for(e=r.f,j=0;j<1;++j)g.append(f.L("li",e[j]))
e=f.V("section")
p=r.a
e.append(f.L("h2","Spending by category, "+(A.ef(p)+" ("+p+")")))
e.append(l)
e.append(g)
a.append(e)},
jp(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="quiet"
a3.append(a1.c7())
s=a1.a
r=s.at
r.toString
q=a1.w
p=new A.a8(Date.now(),0,!1).F()
o=A.LZ(r,q,s.ch,p)
n=a1.V("section")
p=o.b
q=A.CP(""+p,"SGD")
r=p===1?"":"s"
p=o.a
m=p.length
l=m===1?"":"s"
n.append(a1.L("h2","To file: "+q+" transaction"+r+" from "+m+" payee"+l))
n.append(a1.H("p",a2,s.CW?"Filing a payee files all its transactions and saves the rule; the phone applies it on its next sync.":"Turn on Allow changes to file payees from here."))
if(p.length!==0){k=s.CW
j=a1.bo("search",a1.z,new A.qw(a1),"Search payees")
i=B.b.I(a1.z).toLowerCase()
s=A.c([],t.kW)
for(r=p.length,q=i.length!==0,h=0;h<p.length;p.length===r||(0,A.l)(p),++h){g=p[h]
if(!q||B.b.u(g.a.toLowerCase(),i))s.push(g)}n.append(a1.al("Payee",j))
r=t.s
q=A.c(["Payee","Direction","Transactions","Total"],r)
if(k)q.push("File as")
f=a1.aF(q,B.dx)
for(q=A.by(s,0,A.cO(a1.Q,"count",t.S),t.xH),p=q.$ti,q=new A.ac(q,q.gq(0),p.i("ac<a4.E>")),p=p.i("a4.E");q.n();){m=q.d
if(m==null)m=p.a(m)
e=a1.bb(A.c([m.a,m.e,""+m.f,m.r],r),B.dx)
if(k){l=a1.V("td")
l.append(a1.jz(m))
e.append(l)}A.aS(f.querySelector("tbody")).append(e)}n.append(f)
if(s.length===0)n.append(a1.H("p",a2,"No payee to file matches the search."))
if(s.length>a1.Q){r=a1.V("nav")
r.append(a1.H("span",a2,"Showing "+a1.Q+" of "+s.length+" payees."))
r.append(a1.ar("Show 25 more",new A.qx(a1)))
n.append(r)}}d=a1.V("section")
d.append(a1.L("h2","Other items, all books"))
s=o.c
if(s.length===0)d.append(a1.H("p",a2,"Nothing else waits."))
for(r=s.length,h=0;h<s.length;s.length===r||(0,A.l)(s),++h){c=s[h]
b=a1.V("details")
q=c.c
b.append(a1.L("summary",c.a+" ("+q+")"))
a=a1.W("ul","items")
for(p=c.b,m=p.length,a0=0;l=p.length,a0<l;p.length===m||(0,A.l)(p),++a0)a.append(a1.L("li",p[a0]))
if(q>l)a.append(a1.H("li",a2,"And "+(q-l)+" more; the phone's Review lists them all."))
b.append(a)
d.append(b)}a3.append(n)
a3.append(d)},
ji(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="section",a2="Money in",a3=a0.a,a4=a3.at
a4.toString
a0.eH()
s=new A.pO(a0,a4)
r=s.$0()
q=A.fG(a4,a0.w,r.f)
if(!B.a.u(q,a0.y)){a0.y=B.a.ga0(q)
r=s.$0()}a5.append(a0.iT(q))
p=a0.V(a1)
a4=r.a
p.append(a0.L("h2","Net worth today, "+(A.ef(a4)+" ("+a4+")")))
p.append(a0.dL("Holdings",r.c,null,!0))
p.append(a0.dL("Debts",r.d,null,!0))
p.append(a0.dL("Net worth",r.e,"In "+a4+"; each figure from its latest statement or value.",!0))
o=t.s
n=a0.aF(A.c(["Holding or debt","As of","Amount"],o),B.dw)
for(m=r.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k){j=m[k]
i=A.aS(n.querySelector("tbody"))
i.toString
h=j.d?" (debt)":""
i.append(a0.bb(A.c([j.a+h,j.b,j.c],o),B.dw))}p.append(n)
g=a0.W("ul","notes")
m=r.r
if(m.length!==0)g.append(a0.L("li","No balance yet, left out: "+B.a.Y(m,", ")+"."))
p.append(g)
f=a0.aF(A.c(["Month","Money in","Spent","Saved","Savings rate","Net worth at month end"],o),B.dE)
for(m=r.w,l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k){e=m[k]
i=A.aS(f.querySelector("tbody"))
i.toString
i.append(a0.bb(A.c([e.a,e.b,e.c,e.d,e.e,e.f],o),B.dE))}d=a0.V(a1)
d.append(a0.L("h2","Charts"))
if(a3.ch)d.append(a0.H("p","quiet","The charts show once Show amounts is ticked."))
else{o=a3.at
o.toString
c=A.LS(o,a0.w,a3.c.c,new A.a8(Date.now(),0,!1).F(),a4)
a3=c.a
o=A.aM(A.a2($.L(),a3),!1)
m=A.D("[\\d.,]",!0,!1)
b=A.ao(o,m,"")
o=new A.pR(c)
a=a0.W("div","legend")
a.append(a0.H("span","key series-1",a2))
a.append(a0.H("span","key series-2","Spent"))
d.append(a0.L("h3","Money in and spent, by month ("+a3+")"))
d.append(a)
m=c.b
d.append(A.MH("Money in and spent by month",m,A.c([new A.p(a2,c.c),new A.p("Spent",c.d)],t.AW),new A.pP(o),b))
d.append(a0.L("h3","Net worth at each month end ("+a3+")"))
d.append(A.FY("Net worth at each month end",m,c.e,!0,new A.pQ(o),b))
d.append(a0.H("p","quiet","Hover a bar or a point for its amount; the table below has every figure."))}a5.append(p)
a5.append(d)
a3=a0.V(a1)
a3.append(a0.L("h2","The last twelve months, "+(A.ef(a4)+" ("+a4+")")))
a3.append(f)
a5.append(a3)},
jl(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a,a2=a1.at
a2.toString
s=new A.a8(Date.now(),0,!1).F()
r=A.LV(a2,a1.ch,s)
q=a1.CW
if(q){p={}
a1=A.c([],t.nB)
for(o=0;o<32;++o){n=B.ac[o]
if(A.J3(n)&&!B.ec.u(0,n))a1.push(n)}B.a.D(a1,new A.qd())
p.a=B.a.ga0(a1).b
a2=a0.V("section")
s=a0.W("div","filing")
m=A.c([],t.I)
for(l=a1.length,o=0;o<a1.length;a1.length===l||(0,A.l)(a1),++o){n=a1[o]
m.push(new A.p(n.b,n.c))}s.append(a0.aL(m,p.a,new A.qe(p)))
s.append(a0.ar("Add a record",new A.qf(p,a0)))
a2.append(s)
a2.append(a0.H("p","quiet","Documents, policies and records with files or several people are added on the phone."))
a3.append(a2)
k=a0.dx
if(t.wD.b(k))a3.append(a0.jU(k.a,k.b))}if(r.length===0)a3.append(a0.H("p","quiet","No records yet."))
for(a1=r.length,a2=t.a,s=t.N,o=0;o<r.length;r.length===a1||(0,A.l)(r),++o){j=r[o]
i=a0.W("details","card")
i.setAttribute("open","")
m=j.c
i.append(a0.L("summary",j.a+" ("+m.length+")"))
h=q&&j.d!=null
l=A.B(j.b,s)
if(h)l.push("")
g=a0.dN(l)
for(m=A.bO(m,0,a2),l=J.Q(m.a),f=m.b,m=new A.as(l,f,A.o(m).i("as<1>")),e=j.e;m.n();){d=m.c
d=d>=0?new A.p(f+d,l.gt()):A.f(A.ak())
c=d.a
b=a0.fu(d.b)
if(h){if(!(c>=0&&c<e.length))return A.a(e,c)
a=e[c]
d=a0.W("td","filing")
d.append(a0.ar("Edit",new A.qg(a0,j,a)))
d.append(a0.ar("Remove",new A.qh(a0,j,a)))
b.append(d)}A.aS(g.querySelector("tbody")).append(b)}i.append(g)
a3.append(i)}},
jU(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="personal",b2=b0.a.at
b2.toString
s=b0.W("form","edit")
r=t.N
q=A.v(r,t.j3)
p=new A.rv(b4)
for(o=b3.d,n=A.F(o),n.i("j(1)").a(A.Ac()),o=B.a.gA(o),n=new A.N(o,A.Ac(),n.i("N<1>")),m=v.G,l=t.I,k=b2.a7,j=t.P,i=t.eT,h=b2.f,g=b2.p3,f=t.o;n.n();){e=o.gt()
d=e.d
c=e.b
c=d?c:c+" (optional)"
b=p.$1(e)
a=e.c
A:{if(B.N===a){d=A.c([],l)
for(a0=e.e,a1=a0.length,a2=0;a2<a1;++a2){a3=a0[a2]
d.push(new A.p(a3,A.ao(a3,"-"," ")))}break A}if(B.ar===a){d=A.c([B.lY],l)
for(a0=A.a5(g,r,f).gT(),a0=a0.gA(a0);a0.n();){a1=a0.gt()
d.push(new A.p(a1.a,a1.b))}break A}if(B.a3===a){d=A.c([],l)
a0=b2.gK().gT()
a0=A.B(a0,A.o(a0).i("h.E"))
B.a.D(a0,new A.rp())
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.l)(a0),++a2){a4=a0[a2]
d.push(new A.p(a4.a,A.ca(a4)))}break A}if(B.af===a){d=A.c([],l)
for(a0=A.v(r,r),a0.j(0,b1,b1),a0.a1(0,h),a0=new A.cB(a0,a0.r,a0.e,a0.$ti.i("cB<1>"));a0.n();){a1=a0.d
d.push(new A.p(a1,A.fF(a1,b2)))}break A}if(B.C===a){d=A.c([],l)
a0=e.f
a0.toString
a0=k.aY(A.ag(B.ac,a0,j))
a1=a0.length
a2=0
for(;a2<a0.length;a0.length===a1||(0,A.l)(a0),++a2){a5=a0[a2]
a6=a5.b
a7=A.aN(new A.j7(a5.c.gT(),i),r)
d.push(new A.p(a6,a7==null?a6:a7))}break A}if(B.Z===a){d=A.c([B.lx,B.m8],l)
break A}d=null
break A}if(d!=null){a0={}
a0.a=b
if(a!==B.Z){a1=A.c([B.e3],l)
B.a.a1(a1,d)
a8=a1}else a8=d
d=b0.aL(a8,b,new A.rq(a0))
a1=b0.W("label","field")
a1.append(b0.L("span",c))
a1.append(d)
s.append(a1)
q.j(0,e.a,new A.rr(a0))}else{a9=A.w(A.w(m.document).createElement("input"))
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
d.append(b0.L("span",c))
d.append(a9)
s.append(d)
q.j(0,e.a,new A.rs(a9))}}b2=b4==null
r=b0.H("button","primary",b2?"Add to the phone":"Send the change")
r.type="submit"
r.disabled=b0.e
s.append(r)
s.append(b0.ar("Cancel",new A.rt(b0)))
s.addEventListener("submit",A.bk(new A.ru(b0,b3,q,b4)))
r=b0.V("section")
o=b3.c
r.append(b0.L("h2",b2?"New: "+o:"Change: "+o))
r.append(s)
return r},
jq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c="section",b="quiet"
a.append(d.c7())
s=d.a
r=s.at
r.toString
q=A.M_(r,d.w,s.ch)
p=s.CW
o=new A.qF(d)
s=q.c
if(s.length!==0){n=B.a.a5(s,0,new A.qA(),t.S)
m=d.V(c)
r=n===1?"":"s"
m.append(d.L("h2","Rules that disagree: "+n+" transaction"+r))
m.append(d.H("p",b,"Two confirmed rules match these payees with different filings, so their transactions wait. Remove or narrow one rule, or file the payee in Review."))
r=t.s
l=d.aF(A.c(["Payee","Transactions","Total","Rules"],r),B.aW)
for(k=s.length,j=0;j<s.length;s.length===k||(0,A.l)(s),++j){i=s[j]
h=A.aS(l.querySelector("tbody"))
h.toString
h.append(d.bb(A.c([i.a,""+i.b,i.c,B.a.Y(i.d,"; ")],r),B.aW))}m.append(l)
a.append(m)}if(p&&B.a.M(q.b,new A.qB())){s=d.V(c)
s.append(d.aV("File waiting transactions by the confirmed rules",new A.qC(d,o),"primary"))
s.append(d.H("p",b,"Only transactions exactly one confirmed rule matches are filed."))
a.append(s)}for(s=[new A.p("Proposed, waiting for you",q.a),new A.p("Confirmed",q.b)],r=t.s,j=0;j<2;++j){k=s[j]
g=k.b
h=J.an(g)
if(h.ga4(g))continue
m=d.V(c)
m.append(d.L("h2",k.a+" ("+h.gq(g)+")"))
m.append(d.H("p",b,h.ga0(g).d?"The phone files the transactions these match the next time Review is opened there.":"Once confirmed, a rule files the transactions it matches."))
k=A.c(["Payee words","Files as","Limited to","Matching, not filed yet"],r)
if(p)k.push("")
l=d.aF(k,B.aa)
for(k=h.gA(g);k.n();){h=k.gt()
f=d.bb(A.c([h.a.c,h.b,h.e,""+h.c],r),B.aa)
if(p){e=d.W("td","filing")
if(!h.d)e.append(d.aV("Confirm",new A.qD(d,o,h),"primary"))
e.append(d.ar("Remove",new A.qE(d,o,h)))
f.append(e)}A.aS(l.querySelector("tbody")).append(f)}m.append(l)
a.append(m)}},
iD(a){var s,r,q,p,o=this,n=o.W("form","edit"),m=new A.po(o,n),l=m.$2("Alias",a.b),k=a.fr,j=m.$3$placeholder("IFSC",k==null?"":k,"India only")
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
n.append(o.L("small","The customer ID is changed on the phone only."))
n.addEventListener("submit",A.bk(new A.pn(o,a,l,j,s,r,q,p)))
return n},
jr(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a,a1=a0.at,a2=a1.dy,a3=A.Jg(new A.M(a2,A.o(a2).i("M<2>"))).a,a4=a.V("section")
a2=a3.length
a4.append(a.L("h2","Bank SMS senders ("+a2+" ids)"))
a4.append(a.H("p","quiet","Only SMS from these senders are kept. Turning Bank SMS on and off stays on the phone."))
s=a0.CW
r=A.v(t.z9,t.zo)
for(a0=t.mu,q=0;q<a2;++q){p=a3[q]
o=p.c
if(o==null)o="No institution"
o=new A.p(o,p.b)
n=r.h(0,o)
if(n==null){n=A.c([],a0)
r.j(0,o,n)
o=n}else o=n
B.a.m(o,p)}a0=r.$ti.i("at<1>")
m=A.B(new A.at(r,a0),a0.i("h.E"))
B.a.D(m,new A.qJ())
a0=t.s
l=a.dN(A.c(["Institution","Sends","Sender ids"],a0))
for(a2=m.length,q=0;q<m.length;m.length===a2||(0,A.l)(m),++q){k=m[q]
j=a.V("td")
o=r.h(0,k)
o.toString
B.a.D(o,new A.qK())
n=o.length
i=0
for(;i<o.length;o.length===n||(0,A.l)(o),++i){p=o[i]
h=a.W("span","chip")
g=p.a
h.append(a.L("span",g))
if(s){f=a.aV("\xd7",new A.qL(a,p),"chip-remove")
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
c=A.w(A.w(v.G.document).createElement("input"))
c.type="text"
c.placeholder="Like DBSBANK, or several: DBSBANK, DBS"
e.a="bank"
e.b=""
a0=A.c([],a0)
for(a2=A.a5(a1.x,t.N,t.p0).gT(),a2=a2.gA(a2);a2.n();)a0.push(a2.gt().b)
B.a.ba(a0)
d.append(a.al("Sender ids of one bank, as the phone shows them",c))
a2=t.I
o=A.c([],a2)
for(q=0;q<3;++q){k=B.bO[q]
o.push(new A.p(k.b,k.c))}d.append(a.al("Sends",a.aL(o,e.a,new A.qM(e))))
a2=A.c([B.e3],a2)
for(o=a0.length,q=0;q<a0.length;a0.length===o||(0,A.l)(a0),++q){b=a0[q]
a2.push(new A.p(b,b))}d.append(a.al("Institution",a.aL(a2,"",new A.qN(e))))
a0=a.H("button","primary","Add the senders")
a0.type="submit"
a0.disabled=a.e
d.append(a0)
d.addEventListener("submit",A.bk(new A.qO(e,a,c)))
a4.append(d)}a5.append(a4)},
kT(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.W("div","details"),d=new A.a8(Date.now(),0,!1).F(),c=f.a,b=A.M3(a,a0,c.ch,d)
if(b==null){e.append(f.H("p","quiet","This transaction is no longer in the ledger."))
return e}s=f.V("dl")
for(d=b.length,r=0;r<b.length;b.length===d||(0,A.l)(b),++r){q=b[r]
p=q.b
if(p.length===0)continue
s.append(f.L("dt",q.a))
s.append(f.L("dd",p))}e.append(s)
d=a.b.a.h(0,a0)
d.toString
if(!c.CW)return e
o=new A.rO(f)
n=f.W("div","filing")
c=d.d
if(c===B.n||c===B.w){m={}
l=a.gcE().h(0,d.b)
c=A.a5(a.d,t.N,t.G).gT()
q=A.o(c)
k=q.i("n<h.E>")
j=A.B(new A.n(c,q.i("j(h.E)").a(new A.rJ(l)),k),k.i("h.E"))
B.a.D(j,new A.rK())
i=d.Q
m.a=i==null?"":i
c=A.c([B.e2],t.I)
for(q=j.length,r=0;r<j.length;j.length===q||(0,A.l)(j),++r){h=j[r]
c.push(new A.p(h.a,h.c))}n.append(f.aL(c,m.a,new A.rL(m)))
n.append(f.ar("Change category",new A.rM(m,f,o,d)))}g=A.w(A.w(v.G.document).createElement("input"))
g.type="text"
c=d.db
if(c==null)c=""
g.value=c
g.placeholder="A note"
n.append(g)
n.append(f.ar("Save the note",new A.rN(f,o,d,g)))
e.append(n)
return e},
jh(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="section",b2="quiet",b3="text"
b4.append(b0.c7())
s=b0.a
r=s.at
r.toString
q=b0.w
p=new A.a8(Date.now(),0,!1).F()
o=A.LR(r,q,s.ch,p)
n=s.CW
m=new A.pM(b0)
l=new A.pL()
k=b0.V(b1)
s=o.c
k.append(b0.L("h2","Budgets, "+o.b+" ("+s+")"))
q=o.e
if(q.length!==0){k.append(b0.H("p",b2,q))
k.append(b0.H("p","quiet small",o.a))}q=o.d
if(q.length===0)k.append(b0.H("p",b2,"No budget is set for this book."))
if(q.length!==0){p=t.s
j=A.c(["Category","Budget","Spent","Left","Heading for"],p)
if(n)j.push("Change")
i=b0.aF(j,B.dt)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.l)(q),++h){g=q[h]
f=g.r?" (over)":""
e=g.w?" (over)":""
d=b0.bb(A.c([g.b+f,g.c,g.d,g.e,g.f+e],p),B.dt)
if(n){c=l.$2$placeholder(b3,"New amount")
f=b0.W("td","filing")
f.append(c)
f.append(b0.ar("Set",new A.pD(b0,m,g,c)))
f.append(b0.ar("Remove",new A.pE(b0,m,g)))
d.append(f)}A.aS(i.querySelector("tbody")).append(d)}k.append(i)}b4.append(k)
q=o.f
if(q.length!==0){b=b0.V(b1)
b.append(b0.L("h2","Proposed budgets"))
b.append(b0.H("p",b2,"From the complete months among the last three; a month without its statements is left out."))
p=t.s
j=A.c(["Category","Proposed","Based on"],p)
if(n)j.push("")
i=b0.aF(j,B.dr)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.l)(q),++h){a=q[h]
d=b0.bb(A.c([a.b,a.c,a.e],p),B.dr)
if(n){a0=B.O.bz(a.d/100,2)
f=b0.V("td")
f.append(b0.ar("Set this budget",new A.pF(b0,m,a,a0)))
d.append(f)}A.aS(i.querySelector("tbody")).append(d)}b.append(i)
b4.append(b)}a1=b0.V(b1)
q=o.r
a1.append(b0.L("h2","Savings goals ("+q.length+")"))
if(q.length===0)a1.append(b0.H("p",b2,"No goal yet."))
if(q.length!==0){p=t.s
j=A.c(["Goal","Target","By","Saved","Left","A month","State"],p)
if(n)j.push("")
i=b0.aF(j,B.dv)
for(j=q.length,h=0;h<q.length;q.length===j||(0,A.l)(q),++h){a2=q[h]
d=b0.bb(A.c([a2.a.b,a2.b,a2.c,a2.d,a2.e,a2.f,a2.r],p),B.dv)
if(n){f=b0.V("td")
f.append(b0.ar("Remove",new A.pG(b0,m,a2)))
d.append(f)}A.aS(i.querySelector("tbody")).append(d)}a1.append(i)}if(n){a3={}
a4=l.$2$placeholder(b3,"Like Emergency fund")
a5=l.$2$placeholder(b3,"Like 10000")
a6=l.$1("date")
a3.a=""
r=r.gK().gT()
q=A.o(r)
p=q.i("n<h.E>")
a7=A.B(new A.n(r,q.i("j(h.E)").a(new A.pH(b0)),p),p.i("h.E"))
B.a.D(a7,new A.pI())
a8=b0.W("form","edit")
a8.append(b0.al("Goal",a4))
a8.append(b0.al("Target ("+s+")",a5))
a8.append(b0.al("By",a6))
s=A.c([B.lM],t.I)
for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,A.l)(a7),++h){a9=a7[h]
s.push(new A.p(a9.a,A.ca(a9)))}a8.append(b0.al("Counted on",b0.aL(s,"",new A.pJ(a3))))
s=b0.H("button","primary","Add the goal")
s.type="submit"
s.disabled=b0.e
a8.append(s)
a8.addEventListener("submit",A.bk(new A.pK(a3,b0,m,a4,a5,o,a6)))
a1.append(a8)}b4.append(a1)},
jz(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={},d=a2.b,c=d.c,b=d.b+"|"+c.b,a=f.W("div","filing"),a0=f.a,a1=a0.cy
if(a0.gcW().length===0)a1.ao(0)
if(a1.u(0,b)){a.append(f.H("span","quiet","Sent, waiting for the phone"))
return a}s=new A.rl(f,a2)
r=a2.c
q={}
q.a=null
if(r!=null){q.a=r
a.append(f.aV("File as "+A.i(a2.d),new A.rf(q,f,s,d),"primary"))}p=c===B.k?B.jw:B.kz
e.a=e.b=null
o=f.dy.h(0,b)
if(o==null)o=new A.p(B.a.ga0(p),null)
n=e.b=o.a
e.a=o.b
m=a0.at.gcE().h(0,f.w)
c=A.a5(a0.at.d,t.N,t.G).gT()
a0=A.o(c)
a1=a0.i("n<h.E>")
l=A.B(new A.n(c,a0.i("j(h.E)").a(new A.rg(m)),a1),a1.i("h.E"))
B.a.D(l,new A.rh())
k=n===B.n||n===B.w
c=t.I
a0=A.c([],c)
for(a1=p.length,j=0;j<a1;++j){i=p[j]
h=B.aB.h(0,i)
h.toString
a0.push(new A.p(i.b,h))}a.append(f.aL(a0,e.b.b,new A.ri(e,f,b)))
if(k){c=A.c([B.e2],c)
for(a0=l.length,j=0;j<l.length;l.length===a0||(0,A.l)(l),++j){g=l[j]
c.push(new A.p(g.a,g.c))}a0=e.a
if(a0==null)a0=""
a.append(f.aL(c,a0,new A.rj(e,f,b)))}c=k&&e.a==null
a.append(f.ek("File",new A.rk(e,f,s,d,k),c))
return a},
eJ(a){var s,r=this,q=r.gca()*12+r.gc8()-1+a,p=B.d.C(q,12),o=B.d.R(q,12)+1
if(p<=A.aE(new A.a8(Date.now(),0,!1).F(),B.q).a)s=p===A.aE(new A.a8(Date.now(),0,!1).F(),B.q).a&&o>A.aE(new A.a8(Date.now(),0,!1).F(),B.q).b
else s=!0
if(s)return
r.as=p
r.at=o
r.ae()},
dL(a,b,c,d){var s=this,r=s.W("div",d?"row figure":"row")
r.append(s.L("span",a))
r.append(s.H("span","amount",b))
if(c!=null&&c.length!==0)r.append(s.L("small",c))
return r},
fS(a,b,c){return this.dL(a,b,c,!1)},
jg(a){var s=this,r=s.V("section")
r.append(s.L("h2","This browser"))
r.append(s.H("p","quiet","Approved on the phone and kept joined until you forget it here or remove it on the phone (Settings, Devices). Each change you send is checked by the phone before it keeps it."))
r.append(s.aV("Forget this browser",new A.px(s),"danger"))
a.append(r)},
js(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.V("section")
e.append(f.L("h2","Setup checklist"))
s=f.a
if(!s.CW)e.append(f.H("p","quiet","Read-only. Turn on Allow changes to tick items here."))
for(r=s.c.e,q=r.length,p=v.G,o=0;o<r.length;r.length===q||(0,A.l)(r),++o){n=r[o]
e.append(f.L("h3",n.b))
for(m=n.c,l=m.length,k=0;k<m.length;m.length===l||(0,A.l)(m),++k){j=m[k]
i=A.w(A.w(p.document).createElement("input"))
i.type="checkbox"
i.checked=s.hn(n,j)
h=!s.CW||f.e
i.disabled=h
i.addEventListener("change",A.bk(new A.qQ(f,n,j)))
g=f.W("label","tick")
g.append(i)
g.append(A.w(A.w(p.document).createTextNode(" "+j.b)))
if(s.mo(n,j))g.append(f.L("small"," waiting for the phone"))
e.append(g)}}a.append(e)},
jo(a){var s,r,q,p,o,n=this,m=n.a.gmG(),l=n.V("form"),k=v.G,j=A.w(A.w(k.document).createElement("select"))
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.l)(m),++r){q=m[r]
p=A.w(A.w(k.document).createElement("option"))
p.value=q.a
p.textContent=q.b
j.append(p)}o=A.w(A.w(k.document).createElement("input"))
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
l.addEventListener("submit",A.bk(new A.qv(n,o,j)))
k=n.V("section")
k.append(n.L("h2","Statement password"))
k.append(n.H("p","quiet","Sealed in this browser to the phone's backup key, so only the phone opens it. It is never shown here."))
k.append(l)
a.append(k)}}
A.rQ.prototype={
$1(a){return t.sn.a(a).b===this.a},
$S:190}
A.rR.prototype={
$1(a){return this.a.iN(A.w(a))},
$S:13}
A.rS.prototype={
$1(a){A.w(a)
return this.a.a.cJ()},
$S:13}
A.rT.prototype={
$1(a){t.hz.a(a)
return this.a.ka()},
$S:191}
A.pp.prototype={
$0(){return this.a.a.bQ(this.b)},
$S:5}
A.pv.prototype={
$1(a){A.w(a)
return this.a.$0()},
$S:13}
A.rU.prototype={
$0(){var s=this.a
s.a.ch=this.b
s.ae()},
$S:0}
A.rV.prototype={
$0(){var s=this.a,r=s.a,q=this.b,p=q.a
if(r===p.CW)return
if(r&&!A.cN(A.w(v.G.window).confirm("Allow changes from this tab? What you send goes to the phone, which checks each change before it keeps it.")))return
p.CW=s.a
q.ae()},
$S:0}
A.rW.prototype={
$0(){var s=this.a,r=this.b
s.x=r
A.Fs(r)
s.ae()},
$S:0}
A.rX.prototype={
$0(){var s=this.a
s.a.CW=!1
s.ae()},
$S:0}
A.rY.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.gf7()))
return null},
$S:0}
A.rZ.prototype={
$0(){var s=this.a,r=s.ay,q=this.b
if(r.u(0,q))r.Z(0,q)
else r.m(0,q)
s.ae()},
$S:0}
A.t_.prototype={
$0(){var s=this.a
s.ax=this.b
s.ae()},
$S:0}
A.qb.prototype={
$1(a){var s,r
A.w(a).preventDefault()
s=this.b
r=A.b(s.value)
s.value=""
s=this.a
s.ai(t.U.a(new A.qa(s,r)))},
$S:14}
A.qa.prototype={
$0(){var s=v.G
return this.a.a.dj(0,this.b,A.LO(A.b(A.w(A.w(s.window).navigator).userAgent),A.b(A.w(A.w(s.window).location).hostname)))},
$S:5}
A.qp.prototype={
$2(a,b){return A.aM(A.a2(A.ad(B.O.bz(b,2)),this.a.a),!1)},
$S:64}
A.qs.prototype={
$1(a){var s,r,q,p=this.a,o=a.a,n=o.b,m=p.W("details","health-group "+n),l=p.V("summary")
switch(o.a){case 0:s="Critical"
break
case 1:s="Action required"
break
case 2:s="For information"
break
default:s=null}l.append(p.H("span","badge "+n,s))
l.append(p.L("strong",a.b))
m.append(l)
m.append(p.H("p","quiet",a.c))
r=p.W("ul","items")
for(n=a.d,l=n.length,q=0;q<n.length;n.length===l||(0,A.l)(n),++q){s=n[q]
r.append(p.L("li",s.a+": "+s.b))}m.append(r)
o=o===B.by?"Open Loans & debt":"Open Accounts"
m.append(p.ar(o,new A.qt(p,a)))
return m},
$S:195}
A.qt.prototype={
$0(){var s=this.a
s.ax=this.b.a===B.by?B.cr:B.ek
s.ae()
return null},
$S:0}
A.qq.prototype={
$0(){var s=this.a
s.ax=B.cr
s.ae()
return null},
$S:0}
A.qr.prototype={
$0(){return this.a.eJ(-1)},
$S:0}
A.pq.prototype={
$0(){var s=this.a
s.w=this.b
s.ae()},
$S:0}
A.pr.prototype={
$0(){var s=this.a
s.ai(t.U.a(s.a.gf7()))
return null},
$S:0}
A.ps.prototype={
$0(){return this.a.eJ(-1)},
$S:0}
A.pt.prototype={
$0(){return this.a.eJ(1)},
$S:0}
A.pu.prototype={
$0(){var s=this.a
s.y=this.b
s.ae()},
$S:0}
A.pw.prototype={
$1(a){var s,r
A.w(a)
s=this.a
r=this.b.a
s.ch=s.ch===r?null:r
s.ae()},
$S:14}
A.qk.prototype={
$1(a){return A.b(a)!=="outstanding balance"},
$S:6}
A.ql.prototype={
$2(a,b){var s=t.eY,r=s.a(a).a.e
s=B.b.l(r,s.a(b).a.e)
return s*(r==="SGD"?-1:1)},
$S:100}
A.qm.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.qj(s,this.b)))
return null},
$S:0}
A.qj.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.r(p.a.l1(o.b.bj(o.d)),$async$$0)
case 2:o=b
p.r=o==null?u.F:o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qn.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qo.prototype={
$0(){var s=this.b
s.ai(t.U.a(new A.qi(this.a,s,this.c)))
return null},
$S:0}
A.qi.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.b
o=q.c
s=2
return A.r(p.a.ms(o.b.bj(o.d),q.a.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The loan follows this statement row after the phone's next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rD.prototype={
$4$placeholder(a,b,c,d){var s=A.w(A.w(v.G.document).createElement("input"))
s.type=b
s.value=c
if(d!=null)s.placeholder=d
this.b.append(this.a.al(a,s))
return s},
$3(a,b,c){return this.$4$placeholder(a,b,c,null)},
$S:197}
A.rE.prototype={
$3(a,b,c){var s=this.a,r=s.aL(t.DX.a(b),c,new A.rF())
this.b.append(s.al(a,r))
return r},
$S:198}
A.rF.prototype={
$1(a){},
$S:3}
A.rz.prototype={
$1(a){var s
t.b.a(a)
s=a.d
return s===B.M||s===B.Q||a.a===this.a.w},
$S:2}
A.rA.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.rC.prototype={
$1(a){return A.Az(a)},
$S:90}
A.rB.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.w(a).preventDefault()
s=h.b
r=A.c([s],t.sL)
q=h.c
if(q!=null)r.push(q)
if(B.a.M(r,new A.rx())){s=h.a
s.r="Not sent: enter dates like 17/11/2026."
s.ae()
return}r=h.d
r=A.b(r.value).length===0?null:A.ag(B.bN,A.b(r.value),t.gd)
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
i.ai(t.U.a(new A.ry(i,h.Q,new A.jo([k,o,j,n,s,m,p,r]),h.as,h.at,l,q,h.ax,h.ay)))},
$S:14}
A.rx.prototype={
$1(a){A.w(a)
return B.b.I(A.b(a.value)).length!==0&&A.Az(A.b(a.value))==null},
$S:199}
A.ry.prototype={
$0(){var s=0,r=A.J(t.H),q,p=this,o,n,m,l,k
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:k=p.b
s=k!=null?3:4
break
case 3:o=p.a
s=5
return A.r(o.a.n1(k,p.c),$async$$0)
case 5:n=b
o.r=n==null?"Sent. The phone changes "+k.b+" on its next sync.":n
s=1
break
case 4:k=p.d
o=A.F(k)
m=A.aN(new A.n(k,o.i("j(1)").a(new A.rw(p.e)),o.i("n<1>")),t.hS)
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
return A.r(o.a.l3(m,o.w,n,k,l,p.c),$async$$0)
case 9:k=b
if(k==null)k=u.F
case 7:o.r=k
case 1:return A.H(q,r)}})
return A.I($async$$0,r)},
$S:5}
A.rw.prototype={
$1(a){return t.hS.a(a).a===A.b(this.a.value)},
$S:200}
A.rG.prototype={
$1(a){A.w(a)
return this.a.$1(A.b(this.b.value))},
$S:13}
A.rn.prototype={
$1(a){A.w(a)
return this.a.$1(A.b(this.b.value))},
$S:13}
A.rc.prototype={
$1(a){var s=this.a
s.cx=a
s.ae()},
$S:201}
A.qZ.prototype={
$1(a){return t.b.a(a).r===this.a.w},
$S:2}
A.r_.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.r0.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:45}
A.rb.prototype={
$2(a,b){var s,r
t.oo.a(b)
s=A.Az(a)
if(B.b.I(a).length!==0&&s==null){r=this.a
r.r="Enter dates like 17/11/2026."
r.ae()
return}this.b.$1(b.$1(s))},
$S:203}
A.r3.prototype={
$1(a){return this.b.$1(this.a.cx.ls(a))},
$S:3}
A.r4.prototype={
$1(a){return this.b.$1(this.a.cx.lk(new A.qY(a)))},
$S:3}
A.qY.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:58}
A.r5.prototype={
$1(a){return this.b.$2(a,new A.qX(this.a))},
$S:3}
A.qX.prototype={
$1(a){return this.a.cx.lo(new A.qU(a))},
$S:57}
A.qU.prototype={
$0(){return this.a},
$S:102}
A.r6.prototype={
$1(a){return this.b.$2(a,new A.qW(this.a))},
$S:3}
A.qW.prototype={
$1(a){return this.a.cx.lt(new A.qT(a))},
$S:57}
A.qT.prototype={
$0(){return this.a},
$S:102}
A.r7.prototype={
$1(a){return this.b.$1(this.a.cx.lr(A.ag(B.dK,a,t.qx)))},
$S:3}
A.r8.prototype={
$1(a){return this.b.$1(this.a.cx.lm(new A.qV(a)))},
$S:3}
A.qV.prototype={
$0(){var s=this.a
return s.length===0?null:s},
$S:58}
A.r9.prototype={
$1(a){return this.b.$1(this.a.cx.lq(A.ag(B.dN,a,t.ib)))},
$S:3}
A.ra.prototype={
$1(a){var s,r
A.w(a)
s=this.a
r=this.b.a
s.CW=s.CW===r?null:r
s.ae()},
$S:14}
A.r1.prototype={
$0(){return this.b.$1(this.a.cx.hd(this.c.c-1))},
$S:0}
A.r2.prototype={
$0(){return this.b.$1(this.a.cx.hd(this.c.c+1))},
$S:0}
A.pV.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pU(s,this.b)))
return null},
$S:0}
A.pU.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.r(p.a.mM(q.b.a),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The phone removes the draft on its next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.q8.prototype={
$4$placeholder$wide(a,b,c,d){var s,r=this.a,q=this.b,p=q.h(0,a)
if(p==null)p=""
s=r.bo("text",p,new A.q9(a,q),c)
if(d)s.className="wide"
return r.al(b,s)},
$2(a,b){return this.$4$placeholder$wide(a,b,"",!1)},
$3$placeholder(a,b,c){return this.$4$placeholder$wide(a,b,c,!1)},
$3$wide(a,b,c){return this.$4$placeholder$wide(a,b,"",c)},
$S:207}
A.q9.prototype={
$1(a){this.b.j(0,this.a,a)
return a},
$S:3}
A.pW.prototype={
$1(a){this.a.j(0,"customer",a)
return a},
$S:3}
A.pX.prototype={
$1(a){this.b.j(0,"currency",a)
this.a.ae()},
$S:3}
A.q0.prototype={
$1(a){this.b.j(0,"d"+this.a,a)
return a},
$S:3}
A.q1.prototype={
$1(a){this.b.j(0,"q"+this.a,a)
return a},
$S:3}
A.q2.prototype={
$1(a){this.b.j(0,"p"+this.a,a)
return a},
$S:3}
A.q3.prototype={
$1(a){this.b.j(0,"g"+this.a,a)
return a},
$S:3}
A.q4.prototype={
$0(){var s=this.a;++s.db
s.ae()},
$S:0}
A.q5.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pT(s,this.b,this.c)))
return null},
$S:0}
A.pT.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$0=A.K(function(a1,a2){if(a1===1)return A.G(a2,r)
for(;;)switch(s){case 0:c=q.a
b=c.w
a=q.b
a0=a.h(0,"customer")
a0.toString
p=a.h(0,"date")
p=A.Az(p==null?"":p)
o=a.h(0,"reference")
if(o==null)o=""
n=a.h(0,"note")
if(n==null)n=""
m=a.h(0,"currency")
if(m==null)m="SGD"
l=a.h(0,"currency")
if((l==null?"SGD":l)==="SGD")l=""
else{l=a.h(0,"rate")
if(l==null)l=""}k=A.c([],t.sG)
for(j=q.c.b,i=0;i<c.db;++i){h=""+i
g=a.h(0,"d"+h)
if(g==null)g=""
f=a.h(0,"q"+h)
if(f==null)f=""
e=a.h(0,"p"+h)
if(e==null)e=""
if(j){h=a.h(0,"g"+h)
if(h==null)h="standard"}else h=null
k.push(new A.eN([g,f,e,h]))}s=2
return A.r(c.a.hV(b,m,a0,p,k,n,o,l),$async$$0)
case 2:d=a2
b=d==null
c.r=b?"Sent. The draft shows on the phone after its next sync; issue it there.":d
if(b){a.ao(0)
c.db=3}return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.q6.prototype={
$1(a){var s
A.w(a)
s=B.b.I(A.b(this.a.value))
this.b.j(0,"address",s)
return s},
$S:208}
A.q7.prototype={
$1(a){this.a.j(0,"name",a)
return a},
$S:3}
A.pY.prototype={
$1(a){this.a.j(0,"attention",a)
return a},
$S:3}
A.pZ.prototype={
$1(a){this.a.j(0,"paymentDays",a)
return a},
$S:3}
A.q_.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.pS(s,this.b)))
return null},
$S:0}
A.pS.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=t.N
o=A.kW(q.b,o,o)
o.j(0,"bookId",p.w)
s=2
return A.r(p.a.hW(B.a4,o),$async$$0)
case 2:o=b
p.r=o==null?"Sent. The customer shows after the phone's next sync.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qR.prototype={
$0(){var s=this.a,r=s.w,q=s.gca(),p=s.gc8(),o=s.a
return A.M0(this.b,r,o.c.c,o.ch,p,s.y,q)},
$S:209}
A.qS.prototype={
$1(a){return A.b(a).length!==0},
$S:6}
A.qw.prototype={
$1(a){var s=this.a
s.z=a
s.Q=25
s.ae()},
$S:3}
A.qx.prototype={
$0(){var s=this.a
s.Q+=25
s.ae()},
$S:0}
A.pO.prototype={
$0(){var s=this.a,r=s.w,q=s.a,p=new A.a8(Date.now(),0,!1).F()
return A.LT(this.b,r,q.c.c,q.ch,p,s.y)},
$S:210}
A.pR.prototype={
$1(a){return A.aM(A.a2(A.ad(B.O.bz(a,2)),this.a.a),!1)},
$S:66}
A.pP.prototype={
$3(a,b,c){return a+" \xb7 "+b+" "+A.i(this.a.$1(c))},
$S:211}
A.pQ.prototype={
$2(a,b){return a+" \xb7 "+A.i(this.a.$1(b))},
$S:64}
A.qd.prototype={
$2(a,b){var s=t.P
return B.b.l(s.a(a).c,s.a(b).c)},
$S:212}
A.qe.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qf.prototype={
$0(){var s=this.b
s.dx=new A.p(A.ag(B.ac,this.a.a,t.P),null)
s.ae()},
$S:0}
A.qg.prototype={
$0(){var s=this.a,r=this.b.d
r.toString
s.dx=new A.p(r,this.c)
s.ae()},
$S:0}
A.qh.prototype={
$0(){if(!A.cN(A.w(v.G.window).confirm("Remove this "+this.b.a.toLowerCase()+" record on the phone?")))return
var s=this.a
s.ai(t.U.a(new A.qc(s,this.c)))},
$S:0}
A.qc.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.r(p.a.mN(q.b),$async$$0)
case 2:o=b
p.r=o==null?u.m:o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rv.prototype={
$1(a){var s,r=this.a,q=r==null?null:r.c.h(0,a.a)
A:{if(q==null){r=""
break A}if(t.f.b(q)){r=a.c===B.u
s=q}else{s=null
r=!1}if(r){r=A.i(s.h(0,"amount"))+" "+A.i(s.h(0,"currency"))
break A}if(!0===q){r="yes"
break A}r=A.i(q)
break A}return r},
$S:213}
A.rp.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.rq.prototype={
$1(a){return this.a.a=a},
$S:3}
A.rr.prototype={
$0(){return this.a.a},
$S:25}
A.rs.prototype={
$0(){return A.b(this.a.value)},
$S:25}
A.rt.prototype={
$0(){var s=this.a
s.dx=null
s.ae()},
$S:0}
A.ru.prototype={
$1(a){var s,r=this
A.w(a).preventDefault()
s=r.a
s.ai(t.U.a(new A.ro(s,r.b,r.c,r.d)))},
$S:14}
A.ro.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:m=q.a
l=t.N
l=A.v(l,l)
for(p=q.c,p=new A.ab(p,A.o(p).i("ab<1,2>")).gA(0);p.n();){o=p.d
l.j(0,o.a,o.b.$0())}s=2
return A.r(m.a.fj(q.b,l,q.d),$async$$0)
case 2:n=b
l=n==null
m.r=l?"Sent. The phone keeps it on its next sync.":n
if(l)m.dx=null
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qF.prototype={
$2(a,b){var s=this.a
s.ai(t.U.a(new A.qG(s,t.AI.a(a),b)))
return null},
$S:214}
A.qG.prototype={
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
A.qA.prototype={
$2(a,b){return A.O(a)+t.CU.a(b).b},
$S:215}
A.qB.prototype={
$1(a){return t.di.a(a).c>0},
$S:216}
A.qC.prototype={
$0(){return this.b.$2(this.a.a.gm3(),"Sent. The phone files them on its next sync.")},
$S:0}
A.qD.prototype={
$0(){return this.b.$2(new A.qz(this.a,this.c),"Sent. The phone confirms it on its next sync.")},
$S:0}
A.qz.prototype={
$0(){return this.a.a.li(this.b.a)},
$S:10}
A.qE.prototype={
$0(){return this.b.$2(new A.qy(this.a,this.c),u.m)},
$S:0}
A.qy.prototype={
$0(){return this.a.a.mO(this.b.a)},
$S:10}
A.po.prototype={
$3$placeholder(a,b,c){var s=A.w(A.w(v.G.document).createElement("input"))
s.type="text"
s.value=b
if(c!=null)s.placeholder=c
this.b.append(this.a.al(a,s))
return s},
$2(a,b){return this.$3$placeholder(a,b,null)},
$S:218}
A.pn.prototype={
$1(a){var s,r=this
A.w(a).preventDefault()
s=r.a
s.ai(t.U.a(new A.pm(s,r.b,r.c,r.d,r.e,r.f,r.r,r.w)))},
$S:14}
A.pm.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m,l
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
n=A.b(q.c.value)
m=A.b(q.d.value)
l=A.b(q.e.value)
s=2
return A.r(p.a.lS(o,n,A.b(q.f.value),m,l,A.b(q.r.value),A.b(q.w.value)),$async$$0)
case 2:l=b
p.r=l==null?"Sent. The phone changes "+o.b+" on its next sync.":l
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qJ.prototype={
$2(a,b){var s=t.z9
return B.b.l(s.a(a).a,s.a(b).a)},
$S:219}
A.qK.prototype={
$2(a,b){var s=t.c5
return B.b.l(s.a(a).a,s.a(b).a)},
$S:73}
A.qL.prototype={
$0(){var s=this.a
s.ai(t.U.a(new A.qI(s,this.b)))
return null},
$S:0}
A.qI.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=q.b
s=2
return A.r(p.a.mP(o),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone removes "+o.a+" on its next sync.":n
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qM.prototype={
$1(a){return this.a.a=a},
$S:3}
A.qN.prototype={
$1(a){return this.a.b=a},
$S:3}
A.qO.prototype={
$1(a){var s
A.w(a).preventDefault()
s=this.b
s.ai(t.U.a(new A.qH(this.a,s,this.c)))},
$S:14}
A.qH.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o,n,m
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.b
o=A.b(q.c.value)
n=q.a
m=A.ag(B.bO,n.a,t.in)
n=n.b
if(n.length===0)n=null
s=2
return A.r(p.a.hY(o,m,n),$async$$0)
case 2:n=b
p.r=n==null?"Sent. The phone keeps those senders' SMS after its next sync and opening.":n
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.rO.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.rP(s,t.AI.a(a))))
return null},
$S:44}
A.rP.prototype={
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
A.rJ.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:95}
A.rK.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:45}
A.rL.prototype={
$1(a){return this.a.a=a},
$S:3}
A.rM.prototype={
$0(){var s=this,r=s.a
if(r.a.length!==0)s.c.$1(new A.rI(r,s.b,s.d))},
$S:0}
A.rI.prototype={
$0(){return this.b.a.le(this.c,this.a.a)},
$S:10}
A.rN.prototype={
$0(){var s=this
return s.b.$1(new A.rH(s.a,s.c,s.d))},
$S:0}
A.rH.prototype={
$0(){return this.a.a.hX(this.b,A.b(this.c.value))},
$S:10}
A.pM.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.pN(s,t.AI.a(a))))
return null},
$S:44}
A.pN.prototype={
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
A.pL.prototype={
$3$placeholder$value(a,b,c){var s=A.w(A.w(v.G.document).createElement("input"))
s.type=a
s.placeholder=b
s.value=c
return s},
$1(a){return this.$3$placeholder$value(a,"","")},
$2$placeholder(a,b){return this.$3$placeholder$value(a,b,"")},
$S:222}
A.pD.prototype={
$0(){var s=this
return s.b.$1(new A.pC(s.a,s.c,s.d))},
$S:0}
A.pC.prototype={
$0(){var s=this.a
return s.a.ef(s.w,this.b.a,A.b(this.c.value))},
$S:10}
A.pE.prototype={
$0(){return this.b.$1(new A.pB(this.a,this.c))},
$S:0}
A.pB.prototype={
$0(){var s=this.a
return s.a.ef(s.w,this.b.a,null)},
$S:10}
A.pF.prototype={
$0(){var s=this
return s.b.$1(new A.pA(s.a,s.c,s.d))},
$S:0}
A.pA.prototype={
$0(){var s=this.a
return s.a.ef(s.w,this.b.a,this.c)},
$S:10}
A.pG.prototype={
$0(){return this.b.$1(new A.pz(this.a,this.c))},
$S:0}
A.pz.prototype={
$0(){return this.a.a.mL(this.b.a)},
$S:10}
A.pH.prototype={
$1(a){var s
t.b.a(a)
if(a.r===this.a.w){s=a.d
s=!(s===B.y||s===B.o)}else s=!1
return s},
$S:2}
A.pI.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.pJ.prototype={
$1(a){return this.a.a=a},
$S:3}
A.pK.prototype={
$1(a){var s=this
A.w(a).preventDefault()
s.c.$1(new A.py(s.a,s.b,s.d,s.e,s.f,s.r))},
$S:14}
A.py.prototype={
$0(){var s=this,r=A.b(s.c.value),q=A.b(s.d.value),p=A.b(s.f.value),o=s.a.a
if(o.length===0)o=null
return s.b.a.l2(r,q,s.e.c,p,o)},
$S:10}
A.rl.prototype={
$1(a){var s=this.a
s.ai(t.U.a(new A.rm(s,t.AI.a(a),this.b)))
return null},
$S:44}
A.rm.prototype={
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
A.rf.prototype={
$0(){var s=this
return s.c.$1(new A.re(s.a,s.b,s.d))},
$S:0}
A.re.prototype={
$0(){return this.b.a.l0(this.c,this.a.a)},
$S:10}
A.rg.prototype={
$1(a){var s
t.G.a(a)
s=this.a
return s==null||a.b===s},
$S:95}
A.rh.prototype={
$2(a,b){var s=t.G
return B.b.l(s.a(a).c,s.a(b).c)},
$S:45}
A.ri.prototype={
$1(a){var s=this.b
s.dy.j(0,this.c,new A.p(A.ag(B.au,a,t.v_),this.a.a))
s.ae()},
$S:3}
A.rj.prototype={
$1(a){var s=this.b,r=this.a.b,q=a.length===0?null:a
s.dy.j(0,this.c,new A.p(r,q))
s.ae()},
$S:3}
A.rk.prototype={
$0(){var s=this
return s.c.$1(new A.rd(s.a,s.b,s.d,s.e))},
$S:0}
A.rd.prototype={
$0(){var s=this,r=s.a,q=r.b
r=s.d?r.a:null
return s.b.a.m5(s.c,q,r)},
$S:10}
A.px.prototype={
$0(){if(!A.cN(A.w(v.G.window).confirm("Forget this browser? The next visit needs the passphrase and the phone again.")))return
var s=this.a
s.ai(t.U.a(s.a.gm9()))},
$S:0}
A.qQ.prototype={
$1(a){var s
A.w(a)
s=this.a
s.ai(t.U.a(new A.qP(s,this.b,this.c)))
return null},
$S:13}
A.qP.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
o=p
s=2
return A.r(p.a.eb(q.b,q.c),$async$$0)
case 2:o.r=b
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.qv.prototype={
$1(a){var s,r
A.w(a).preventDefault()
s=this.b
r=A.b(s.value)
s.value=""
s=this.a
s.ai(t.U.a(new A.qu(s,this.c,r)))},
$S:14}
A.qu.prototype={
$0(){var s=0,r=A.J(t.H),q=this,p,o
var $async$$0=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.r(p.a.dv(A.b(q.b.value),q.c),$async$$0)
case 2:o=b
p.r=o==null?"Sealed and sent. The phone keeps it on its next sync; this page cannot show it.":o
return A.H(null,r)}})
return A.I($async$$0,r)},
$S:5}
A.dn.prototype={}
A.dO.prototype={}
A.kz.prototype={}
A.nd.prototype={}
A.wj.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wk.prototype={
$1(a){var s=A.a5(this.a.d,t.N,t.G).h(0,a)
s=s==null?null:s.c
return A.hH(s==null?a:s)},
$S:11}
A.wh.prototype={
$2(a,b){var s=t.kc
return B.b.l(s.a(a).b,s.a(b).b)},
$S:224}
A.wi.prototype={
$2(a,b){var s=t.y3
return B.b.l(s.a(a).b,s.a(b).b)},
$S:225}
A.l5.prototype={
k(a){return"NoSyncFolder"}}
A.fY.prototype={
cw(a,b){var s=0,r=A.J(t.l3),q,p=this,o,n
var $async$cw=A.K(function(c,d){if(c===1)return A.G(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.r(p.a.$3$headers("GET",a,A.S(["authorization","Bearer "+A.i(p.b.$0())],o,o)),$async$cw)
case 3:n=d
o=n.a
if(o===401)throw A.k(new A.hk())
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
return A.r(p.cw(A.jA("https","www.googleapis.com","/drive/v3/files",A.S(["q","name = '"+A.ao(e,"'","\\'")+"' and '"+h+"' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false","fields","files(id)","orderBy","createdTime","pageSize","1"],j,i)),"folder search"),$async$d1)
case 6:e=b.a(a0.b)
d=k.a(m.a(B.z.bi(new A.eP(!1).cv(e,0,null,!0),null)).h(0,"files"))
if(d==null)d=B.b_
e=J.an(d)
if(e.ga4(d))throw A.k(new A.l5())
e=m.a(e.ga0(d)).h(0,"id")
e.toString
A.b(e)
case 4:++g,h=e
s=3
break
case 5:q=p.d=h
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$d1,r)},
bk(){var s=0,r=A.J(t.a),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bk=A.K(function(a2,a3){if(a2===1)return A.G(a3,r)
for(;;)switch(s){case 0:s=3
return A.r(p.d1(),$async$bk)
case 3:c=a3
b=p.e
b.ao(0)
o=t.N
n=t.z
m="'"+c+"' in parents and mimeType != 'application/vnd.google-apps.folder' and trashed = false"
l=t.J
k=t.jS
j=t.f
i=null
case 4:h=A.v(o,n)
h.j(0,"q",m)
h.j(0,"fields","nextPageToken, files(id, name)")
h.j(0,"orderBy","createdTime")
h.j(0,"pageSize","1000")
if(i!=null)h.j(0,"pageToken",i)
a=j
a0=B.z
a1=B.R
s=7
return A.r(p.cw(A.jA("https","www.googleapis.com","/drive/v3/files",h),"list"),$async$bk)
case 7:g=a.a(a0.bi(a1.cb(a3.b),null))
h=k.a(g.h(0,"files"))
h=J.dh(h==null?B.b_:h,l)
f=h.$ti
h=new A.ac(h,h.gq(0),f.i("ac<R.E>"))
f=f.i("R.E")
while(h.n()){e=h.d
if(e==null)e=f.a(e)
d=e.h(0,"name")
d.toString
b.aI(A.b(d),new A.nF(e))}i=A.m(g.h(0,"nextPageToken"))
case 5:if(i!=null){s=4
break}case 6:o=A.o(b).i("at<1>")
b=A.B(new A.at(b,o),o.i("h.E"))
q=b
s=1
break
case 1:return A.H(q,r)}})
return A.I($async$bk,r)},
c1(a){var s=0,r=A.J(t.p),q,p=this,o,n
var $async$c1=A.K(function(b,c){if(b===1)return A.G(c,r)
for(;;)switch(s){case 0:n=p.e
s=!n.E(a)?3:4
break
case 3:s=5
return A.r(p.bk(),$async$c1)
case 5:case 4:o=n.h(0,a)
if(o==null)o=A.f(A.aq("no file "+a))
s=6
return A.r(p.cw(A.jA("https","www.googleapis.com","/drive/v3/files/"+o,A.S(["alt","media"],t.N,t.z)),"download"),$async$c1)
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
return A.r(p.bk(),$async$c2)
case 5:case 4:if(j.E(a)){s=1
break}s=6
return A.r(p.d1(),$async$c2)
case 6:o=d
n=new A.hw(A.c([],t.eE))
m=t.N
n.m(0,B.F.O("--santhiq-page-boundary-7f3a\r\ncontent-type: application/json; charset=UTF-8\r\n\r\n"+B.z.bd(A.S(["name",a,"parents",A.c([o],t.s)],m,t.K),null)+"\r\n--santhiq-page-boundary-7f3a\r\ncontent-type: application/octet-stream\r\n\r\n"))
n.m(0,b)
n.m(0,B.F.O("\r\n--santhiq-page-boundary-7f3a--\r\n"))
l=A.jA("https","www.googleapis.com","/upload/drive/v3/files",A.S(["uploadType","multipart","fields","id"],m,t.z))
m=A.kW(A.S(["authorization","Bearer "+A.i(p.b.$0())],m,m),m,m)
m.j(0,"content-type","multipart/related; boundary=santhiq-page-boundary-7f3a")
s=7
return A.r(p.a.$4$body$headers("POST",l,n.fb(),m),$async$c2)
case 7:k=d
m=k.a
if(m===401)throw A.k(new A.hk())
if(m!==200)throw A.k(A.nT(m,"upload"))
m=t.f.a(B.z.bi(B.R.cb(k.b),null)).h(0,"id")
m.toString
j.j(0,a,A.b(m))
case 1:return A.H(q,r)}})
return A.I($async$c2,r)},
$iJp:1}
A.nF.prototype={
$0(){var s=this.a.h(0,"id")
s.toString
return A.b(s)},
$S:25}
A.db.prototype={}
A.l_.prototype={}
A.im.prototype={}
A.wm.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wn.prototype={
$1(a){var s,r,q
t.w.a(a)
s=a.e
r=s==null
q=r?a.a:A.ca(s)
s=(r?null:s.d)===B.o&&a.b.a.a.ga8(0)>=0?" (a credit on a loan: check its statement)":""
return new A.db(q+s,A.cv(a.c,this.a),this.b.$1(a.gcX()),a.b.a.a.ga8(0)<0)},
$S:226}
A.o0.prototype={}
A.wl.prototype={
$1(a){return a.a.cm(0)},
$S:227}
A.kr.prototype={}
A.fX.prototype={}
A.h1.prototype={}
A.o1.prototype={}
A.ws.prototype={
$2(a,b){return A.aM(A.a2(new A.P(A.aB(a),0- -A.et(b)),b),this.a)},
$1(a){return this.$2(a,"SGD")},
$S:228}
A.wr.prototype={
$1(a){var s=this.a.a7.a6(B.a4,a)
s=s==null?null:A.m(s.c.h(0,"name"))
return s==null?"A customer no longer kept":s},
$S:11}
A.wo.prototype={
$2(a,b){var s,r=t.u
r.a(a)
r.a(b)
r=A.m(a.c.h(0,"name"))
r.toString
s=A.m(b.c.h(0,"name"))
s.toString
return B.b.l(r,s)},
$S:23}
A.wp.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="quantity",a1="unitPrice",a2="amount",a3="currency",a4="is not a supported currency",a5=b.a,a6=b.b,a7=a6.b,a8=A.FJ(a5,a7),a9=a8.a,b0=a6.c,b1=A.m(b0.h(0,"customerId"))
b1.toString
b1=b.c.$1(b1)
b0=A.ax(b0.h(0,"date"))
b0.toString
b0=A.vt(b0)
s=A.c([],t.CP)
for(a5=A.mF(a5,a7),a7=a5.length,r=b.f,q=t.f,p=b.d,o=b.e,n=t.N,m=t.X,l=0;l<a5.length;a5.length===a7||(0,A.l)(a5),++l){k=a5[l].c
j=A.m(k.h(0,"description"))
j.toString
if(typeof k.h(0,a0)=="string"){i=k.h(0,a0)
i.toString
i=A.dt(A.b(i))}else i=a
i=A.i(i)
if(q.b(k.h(0,a1))){h=k.h(0,a1)
h.toString
h=q.a(h).G(0,n,m)
g=h.h(0,a2)
g.toString
g=A.ad(A.b(g))
h=h.h(0,a3)
h.toString
A.b(h)
f=new A.q(g,h)
e=B.e.h(0,h)
if(e==null)A.f(A.x(h,a3,a4))
if((g.b<=0?0:Math.max(g.gv().b,0))>e)A.f(A.y(h+" allows "+A.i(e)+" decimal places",g.k(0),a))
h=f}else h=a
h.toString
h=A.aM(h,p)
if(typeof k.h(0,a0)=="string"){g=k.h(0,a0)
g.toString
g=A.dt(A.b(g))}else g=a
g.toString
if(q.b(k.h(0,a1))){f=k.h(0,a1)
f.toString
f=q.a(f).G(0,n,m)
d=f.h(0,a2)
d.toString
d=A.ad(A.b(d))
f=f.h(0,a3)
f.toString
A.b(f)
c=new A.q(d,f)
e=B.e.h(0,f)
if(e==null)A.f(A.x(f,a3,a4))
if((d.b<=0?0:Math.max(d.gv().b,0))>e)A.f(A.y(f+" allows "+A.i(e)+" decimal places",d.k(0),a))
f=c}else f=a
g=new A.P(g.a.a_(0,A.aB(f.gbx())),g.b).B(0,A.ad("0.5")).c9(0,B.bb).aZ().b_(0)
if(q.b(k.h(0,a1))){f=k.h(0,a1)
f.toString
f=q.a(f).G(0,n,m)
d=f.h(0,a2)
d.toString
d=A.ad(A.b(d))
f=f.h(0,a3)
f.toString
A.b(f)
c=new A.q(d,f)
e=B.e.h(0,f)
if(e==null)A.f(A.x(f,a3,a4))
if((d.b<=0?0:Math.max(d.gv().b,0))>e)A.f(A.y(f+" allows "+A.i(e)+" decimal places",d.k(0),a))
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
if(a9.gfh()==null)q=""
else{q=a9.gfh()
q.toString
q=" ("+A.i(o.$1(q))+" at "+A.i(a9.cy)+")"}q=a5+" \xb7 "+a7+r+q+" \xb7 due "+A.vt(a9.e)
a5=q}return new A.fX(a6,b1,b0,s,a5,a8.b)},
$S:229}
A.wq.prototype={
$0(){var s,r,q,p=this,o=p.a,n=p.b,m="company-invoice:"+n.a,l=o.aD.c.h(0,m),k=l==null?null:A.FT(o,l).d,j=A.vt(n.d),i=n.e,h=A.vt(i),g=p.c,f=n.z,e=n.cx,d=g.$2(n.gcZ()+f,e)
f=n.y!=null?g.$2(f,e):""
s=A.c([],t.s)
for(o=A.FH(o,m),m=o.length,r=0;r<o.length;o.length===m||(0,A.l)(o),++r){q=o[r]
s.push(q.w+" "+A.i(g.$2(q.x+q.Q,e)))}o=B.a.Y(s,", ")
if(k===B.bC)m="Paid"
else if(k===B.bB)m="Part paid"
else m=p.d.l(0,i)>0?"Overdue":"Open"
return new A.h1(n,j,h,d,f,o,m)},
$S:230}
A.dJ.prototype={}
A.wz.prototype={
$2(a,b){var s,r,q,p,o,n=A.aN(new A.n(B.ac,t.Ab.a(new A.wA(a)),t.rx),t.P),m=n==null?null:this.a.a7.a6(n,b)
if(m==null)return b
for(s=n.d,r=s.length,q=m.c,p=0;p<r;++p){o=s[p]
if(o.c===B.j&&A.m(q.h(0,o.a))!=null){s=A.m(q.h(0,o.a))
s.toString
return s}}return b},
$S:231}
A.wA.prototype={
$1(a){return t.P.a(a).b===this.a},
$S:51}
A.wB.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c,i=b.a,h=j.h(0,i)
if(h==null)return""
s=b.c
if(B.r===s){r=A.ax(j.h(0,i))
return r==null?A.i(h):A.cv(r,k.a)}if(B.u===s){q=a.av(i)
return q==null?"":A.aM(q,k.b)}if(B.a3===s){j=k.c.r.a.h(0,A.i(h))
return j==null?A.i(h):A.ca(j)}if(B.af===s)return A.fF(A.i(h),k.c)
if(B.ar===s)return A.AI(k.c,A.i(h))
if(B.bs===s){j=A.c([],t.s)
for(i=J.Q(t.j.a(h)),p=t.N,o=t.o,n=k.c;i.n();){m=A.i(i.gt())
if(m==="me")m="Me"
else{m=A.a5(n.p3,p,o).h(0,m)
m=m==null?null:m.b
if(m==null)m="someone removed"}j.push(m)}return B.a.Y(j,", ")}if(B.C===s)return k.d.$2(b.f,A.i(h))
if(B.Z===s)return J.Y(h,!0)?"Yes":""
if(B.a8===s)return"\u2022\u2022"+A.i(h)
if(B.N===s){j=A.i(h)
l=A.ao(j,"-"," ")
j=l.length
if(j===0)j=""
else{if(0>=j)return A.a(l,0)
j=l[0].toUpperCase()+B.b.ad(l,1)}return j}if(B.aK===s||B.bt===s||B.ao===s||B.bu===s||B.aJ===s)return"Attached"
if(B.a2===s||B.ap===s){j=A.i(h)
l=A.ao(j,"\n",", ")
return l.length>80?B.b.X(l,0,79)+"\u2026":l}if(B.aL===s)return A.i(h)+"%"
return A.i(h)},
$S:232}
A.wy.prototype={
$1(a){return A.AI(this.a,a)},
$S:11}
A.wx.prototype={
$1(a){return a==null?"":A.cv(a,this.a)},
$S:94}
A.wu.prototype={
$2(a,b){var s=t.ud
s.a(a)
s.a(b)
return B.b.l(a.gcl(),b.gcl())},
$S:234}
A.wv.prototype={
$1(a){return!B.ec.u(0,t.P.a(a))},
$S:51}
A.ww.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.c([],t.e)
for(s=this.b,r=s.d,q=r.length,p=this.a,o=0;o<q;++o){n=r[o]
if(B.a.M(p.a,new A.wt(n)))e.push(n)}r=t.s
q=A.c([],r)
for(m=e.length,o=0;o<e.length;e.length===m||(0,A.l)(e),++o)q.push(e[o].b)
m=A.c([],t.tZ)
for(l=p.a,k=l.length,j=this.c,o=0;o<l.length;l.length===k||(0,A.l)(l),++o){i=l[o]
h=A.c([],r)
for(g=e.length,f=0;f<e.length;e.length===g||(0,A.l)(e),++f)h.push(j.$2(i,e[f]))
m.push(h)}return new A.dJ(s.c,q,m,s,p.a)},
$S:70}
A.wt.prototype={
$1(a){return t.u.a(a).c.h(0,this.a.a)!=null},
$S:24}
A.vN.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.c([],t.t)
for(s=this.a,r=s.b,q=s.c,p=0;p<r.length;++p)if(B.a.M(q,new A.vM(p)))g.push(p)
o=t.s
n=A.c([],o)
for(m=g.length,l=0;l<g.length;g.length===m||(0,A.l)(g),++l){p=g[l]
if(!(p<r.length))return A.a(r,p)
n.push(r[p])}r=A.c([],t.tZ)
for(m=q.length,l=0;l<q.length;q.length===m||(0,A.l)(q),++l){k=q[l]
j=A.c([],o)
for(i=g.length,h=0;h<g.length;g.length===i||(0,A.l)(g),++h){p=g[h]
if(!(p<k.length))return A.a(k,p)
j.push(k[p])}r.push(j)}return new A.dJ(s.a,n,r,s.d,s.e)},
$S:70}
A.vM.prototype={
$1(a){return J.ar(t.a.a(a),this.a).length!==0},
$S:74}
A.kJ.prototype={}
A.h7.prototype={}
A.wG.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wH.prototype={
$1(a){var s=a.as
switch(s==null?null:s.a){case B.bS:s=0
break
case B.b1:s=1
break
case B.bT:s=2
break
case B.bU:s=3
break
case null:case void 0:s=4
break
default:s=null}return s},
$S:236}
A.wD.prototype={
$1(a){t.b.a(a)
return a.r===this.a&&a.d===B.o},
$S:2}
A.wE.prototype={
$2(a,b){var s,r,q,p=t.b
p.a(a)
p.a(b)
p=this.a
s=B.a.bH(p,a.e)-B.a.bH(p,b.e)
if(s!==0)return s
p=a.CW!=null
if(p!==(b.CW!=null))return p?1:-1
p=this.b
r=p.$1(a)
p=p.$1(b)
if(typeof r!=="number")return r.a9()
if(typeof p!=="number")return A.CQ(p)
q=r-p
return q!==0?q:B.b.l(a.b,b.b)},
$S:8}
A.wF.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a,a2=a.b,a3=a.c,a4=A.G1(a1,a2,a3),a5=a4.c,a6=A.F(a5),a7=A.aN(new A.n(a5,a6.i("j(1)").a(new A.wC(a3)),a6.i("n<1>")),t.pt),a8=a7==null?a0:a7.b
if(a8==null){s=a2.as==null?B.cC:A.CU(a2,a3).w
A:{if(s instanceof A.el){r=s.a
q=r
break A}q=a0
break A}a8=q}q=a2.as
p=q==null
o=p?a0:q.r
n=p?a0:q.w
q=n==null
m=q?a0:a1.gK().h(0,n)
a1=A.ca(a2)
p=a4.a
p=p==null||a4.b==null?"":A.i(p)+" of "+A.i(a4.b)+" instalments paid"
if(a8==null)l="Next due unknown: add the payment day"
else{l=A.cv(a8,a3)
l="Next due "+l+" \xb7 "+A.i(o==null?"amount not set":a.d.$1(o))}if(q)q="Not in the forecast: no paying account"
else q="In the forecast from "+(m==null?n:A.ca(m))
k=a4.d
if(k==null)k="Not known yet"
else{k=A.i(a.d.$1(k))
j=a4.e
j=j==null?"":", "+A.cv(j,a3)
j=k+" ("+a4.f+j+")"
k=j}j=A.c([],t.DA)
for(a6=a6.i("aP<1>"),a5=new A.aP(a5,a6),a5=new A.ac(a5,a5.gq(0),a6.i("ac<a4.E>")),i=a.d,a6=a6.i("a4.E");a5.n();){h=a5.d
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
b=B.kT.h(0,h.d)
b.toString
h=h.r
h=h==null?"":A.i(i.$1(h))+" still due"
j.push(new A.kJ("No. "+g+" \xb7 "+(""+f.c+" "+e+d),c,b,h))}return new A.h7(a2,a1,p,l,q,k,a4.r,j)},
$S:237}
A.wC.prototype={
$1(a){return t.pt.a(a).b.l(0,this.a)>=0},
$S:98}
A.zH.prototype={
$1(a){return B.b.ac(B.d.k(a),2,"0")},
$S:50}
A.em.prototype={}
A.ll.prototype={}
A.jY.prototype={}
A.pe.prototype={}
A.wK.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wI.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:96}
A.wJ.prototype={
$1(a){return t.iJ.a(a).b},
$S:239}
A.fh.prototype={}
A.fi.prototype={
U(){return"KpiTone."+this.b}}
A.lm.prototype={}
A.h0.prototype={
U(){return"HealthLevel."+this.b}}
A.d_.prototype={}
A.du.prototype={}
A.pj.prototype={}
A.x1.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.wM.prototype={
$1(a){return t.iJ.a(a).a===this.a},
$S:96}
A.xb.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.n(a,s.i("j(1)").a(new A.xc()),s.i("n<1>")).a5(0,A.a2($.L(),this.a),new A.xd(),t.B)},
$S:240}
A.xc.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at!=null},
$S:12}
A.xd.prototype={
$2(a,b){var s
t.B.a(a)
s=t.V.a(b).at
s.toString
return a.B(0,s)},
$S:241}
A.x2.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.n(a,s.i("j(1)").a(new A.x3()),s.i("n<1>")).gq(0)},
$S:242}
A.x3.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at==null},
$S:12}
A.x_.prototype={
$1(a){return B.a.M(t.Ft.a(a),new A.x0())},
$S:243}
A.x0.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.at!=null},
$S:12}
A.x4.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.c3(new A.n(a,s.i("j(1)").a(new A.x8()),s.i("n<1>")),s.i("z(1)").a(new A.x9()),s.i("c3<1,z>")).a5(0,null,new A.xa(),t.tF)},
$S:84}
A.x8.prototype={
$1(a){t.V.a(a)
return!a.Q&&a.ax!=null},
$S:12}
A.x9.prototype={
$1(a){var s=t.V.a(a).ax
s.toString
return s},
$S:93}
A.xa.prototype={
$2(a,b){t.tF.a(a)
t.h.a(b)
return a==null||b.l(0,a)<0?b:a},
$S:81}
A.wN.prototype={
$1(a){return t.xw.a(a).f===this.a},
$S:20}
A.wO.prototype={
$1(a){return t.xw.a(a).e==null},
$S:20}
A.wL.prototype={
$1(a){return a==null?"":", oldest statement "+A.cv(a,this.a)},
$S:94}
A.wS.prototype={
$1(a){t.ov.a(a)
return a.a.e===this.a&&a.y.length!==0},
$S:37}
A.wT.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:26}
A.wU.prototype={
$1(a){return t.xw.a(a).r},
$S:20}
A.wV.prototype={
$1(a){return t.xw.a(a).r},
$S:20}
A.wW.prototype={
$1(a){return t.xw.a(a).r},
$S:20}
A.wX.prototype={
$1(a){return!t.V.a(a).Q},
$S:12}
A.wY.prototype={
$1(a){return t.xw.a(a).r},
$S:20}
A.wZ.prototype={
$1(a){return t.V.a(a).ax==null},
$S:12}
A.wP.prototype={
$1(a){var s=t.V.a(a).as
s=s==null?null:B.b.am(s,"No statement since")
return s===!0},
$S:12}
A.wQ.prototype={
$1(a){t.V.a(a)
return a.w&&!B.a.u(this.a,a)},
$S:12}
A.wR.prototype={
$1(a){t.V.a(a)
return a.y.length!==0&&!B.a.u(this.a,a)},
$S:12}
A.x5.prototype={
$1(a){var s
t.Ft.a(a)
s=A.F(a)
return new A.ah(a,s.i("z(1)").a(new A.x6()),s.i("ah<1,z>")).a5(0,null,new A.x7(),t.tF)},
$S:84}
A.x6.prototype={
$1(a){var s=t.V.a(a).ax
s.toString
return s},
$S:93}
A.x7.prototype={
$2(a,b){t.tF.a(a)
t.h.a(b)
return a==null||b.l(0,a)<0?b:a},
$S:81}
A.AA.prototype={
$0(){var s,r,q,p=this,o=p.c,n=A.F0(p.b,o),m=o.d,l=m.b-1
if(!(l>=0&&l<12))return A.a(B.l,l)
l=B.l[l]
s=p.a
r=A.ca(s.a)
o=o.e==null?"Loan instalment":"Card bill"
q=n==null?null:A.aM(n,p.d)
return new A.du(""+m.c+" "+l+" "+m.a,r,o,q,s.a.e,m.l(0,p.e)<0)},
$S:248}
A.hf.prototype={}
A.hk.prototype={
k(a){return"SignInExpired"}}
A.kA.prototype={
k(a){return"Google "+this.b+" failed: HTTP "+this.a}}
A.kB.prototype={
k(a){return"GoogleTookTooLong"}}
A.Bt.prototype={
$4$body$headers(a,b,c,d){return this.a.$4$body$headers(A.b(a),t.ya.a(b),t.F5.a(c),t.yz.a(d)).mX(this.b,new A.Bs())},
$2(a,b){return this.$4$body$headers(a,b,null,B.dR)},
$3$headers(a,b,c){return this.$4$body$headers(a,b,null,c)},
$S:71}
A.Bs.prototype={
$0(){return A.f(new A.kB())},
$S:88}
A.t0.prototype={}
A.ey.prototype={
U(){return"PageStage."+this.b}}
A.ld.prototype={
geL(){var s=this.Q
if(s==null)s=this.Q=new A.t2(this).$0()
return s},
ck(){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$ck=A.K(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.e.c0()
s=3
return A.r(t.uo.b(h)?h:A.JK(A.m(h),t.T),$async$ck)
case 3:g=b
if(g==null){s=1
break}p=5
m=t.J.a(B.z.bi(g,null))
h=J.ar(m,"ticket")
h.toString
s=8
return A.r(A.o3(t.f.a(h).G(0,t.N,t.X)),$async$ck)
case 8:n.f=b
h=J.ar(m,"account")
h.toString
n.r=A.b(h)
l=A.m(J.ar(m,"token"))
h=A.m(J.ar(m,"tokenUntil"))
k=A.DK(h==null?"":h)
h=k
j=h==null?null:h.dX(n.b.$0().F())
s=l!=null&&j!=null&&j.a>12e7?9:10
break
case 9:s=11
return A.r(n.bQ(new A.hl(l,j)),$async$ck)
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
return A.r(l.b.by(),$async$cB)
case 3:o=b
n=k.a
m=p.y
s=4
return A.r(p.e.cn(B.z.bd(A.S(["ticket",o,"account",n,"token",m,"tokenUntil",j==null?null:j.dl()],t.N,t.X),null)),$async$cB)
case 4:p.x=!0
case 1:return A.H(q,r)}})
return A.I($async$cB,r)},
cK(){var s=0,r=A.J(t.H),q=this,p
var $async$cK=A.K(function(a,b){if(a===1)return A.G(b,r)
for(;;)switch(s){case 0:p=q.e.ao(0)
s=2
return A.r(p,$async$cK)
case 2:q.r=q.f=null
q.cJ()
return A.H(null,r)}})
return A.I($async$cK,r)},
bQ(a){return this.i4(t.gc.a(a))},
i4(a){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bQ=A.K(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ay=null
m=null
p=4
s=7
return A.r(A.xO(n.a,a.a),$async$bQ)
case 7:m=c
p=2
s=6
break
case 4:p=3
f=o.pop()
l=A.av(f)
n.ay=A.jG(l)
s=1
break
s=6
break
case 3:s=2
break
case 6:j=m
i=j instanceof A.iN
h=i?j.a:null
if(i){n.ay=A.i(h)+" is a work or school account. Sign in with SanthIQ's own Google account."
s=1
break}s=j instanceof A.iO?8:9
break
case 8:i=n.z
if(i!=null&&i.a!==m.a){n.cJ()
n.ay="That is another account than the one this tab was using, so the page started again."
s=1
break}n.y=a.a
n.w=n.b.$0().F().aw(a.b.a)
n.z=m
i=n.cx
if(i===B.bW)i=n.cx=B.bX
g=n.f
s=i===B.bX&&g!=null?10:11
break
case 10:s=n.r!==m.a?12:14
break
case 12:i=n.e.ao(0)
s=15
return A.r(i,$async$bQ)
case 15:n.f=null
s=13
break
case 14:n.as=A.En(n.geL(),g)
n.cx=B.bY
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
dj(a,b,c){return this.mp(0,b,c)},
mp(a,b,c){var s=0,r=A.J(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$dj=A.K(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.ay=null
if(n.cx!==B.bX){s=1
break}p=4
s=7
return A.r(A.cK(n.geL(),"browser",c,n.b.$0(),b),$async$dj)
case 7:m=e
n.as=A.En(n.geL(),m)
n.cx=B.bY
s=8
return A.r(n.bK(),$async$dj)
case 8:p=2
s=6
break
case 4:p=3
j=o.pop()
l=A.av(j)
n.ay=A.jG(l)
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
if(f==null||n.cx===B.dV){s=1
break}p=4
s=7
return A.r(f.bf(),$async$bK)
case 7:m=b
if(J.jT(m)){if(f.b===n.f)throw A.k(new A.cU())
s=1
break}i=new A.kF(A.v(t.N,t._))
B.a.a2(f.e,i.gl4())
l=A.IR(i)
h=n.z
h.toString
k=A.Lw(h,l)
s=k!=null?8:9
break
case 8:s=10
return A.r(n.cK(),$async$bK)
case 10:n.ay=k
s=1
break
case 9:n.at=l
n.ax=J.Dp(m,new A.tm(),t.zG).cS(0,new A.tn())
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
h=A.av(e)
s=h instanceof A.cU?14:16
break
case 14:f.cJ()
n.at=null
n.cx=B.dV
h=n.e.ao(0)
s=17
return A.r(h,$async$bK)
case 17:n.f=null
n.ay="The phone removed this browser. Close the tab; a new visit can ask to join again."
s=15
break
case 16:j=h
n.ay=A.jG(j)
case 15:s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$bK,r)},
gcW(){var s=this.as
s=s==null?null:s.gcW()
return s==null?B.dH:s},
hn(a,b){var s,r,q,p,o,n
for(s=this.gcW(),r=A.F(s).i("aP<1>"),s=new A.aP(s,r),s=new A.ac(s,s.gq(0),r.i("ac<a4.E>")),r=r.i("a4.E"),q=a.a,p=b.a;s.n();){o=s.d
if(o==null)o=r.a(o)
if(o.d==="setup.tick"){n=o.e
n=J.Y(n.h(0,"stepId"),q)&&J.Y(n.h(0,"itemId"),p)}else n=!1
if(n)return J.Y(o.e.h(0,"ticked"),!0)}s=this.at
s=s==null?null:s.p4.a.u(0,new A.p(q,p))
return s===!0},
mo(a,b){return B.a.M(this.gcW(),new A.tg(a,b))},
eb(a,b){return this.mZ(a,b)},
mZ(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$eb=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:f=n.eF()
if(f!=null){q=f
s=1
break}i=n.as
i.toString
m=i
l=m.b.a
k=m.ht()
p=4
i=a.a
h=b.a
s=7
return A.r(m.c6(A.c([new A.ai("setup:"+i+":"+h+":"+A.i(l)+":"+A.i(k),l,k,"setup.tick",A.S(["stepId",i,"itemId",h,"ticked",!n.hn(a,b)],t.N,t.X),n.b.$0().F())],t.Y)),$async$eb)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.av(e)
i=A.jG(j)
q=i
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.H(q,r)
case 2:return A.G(o.at(-1),r)}})
return A.I($async$eb,r)},
gmG(){var s,r,q=this.at
if(q==null)q=null
else{q=q.gK().gT()
s=A.o(q)
r=s.i("n<h.E>")
q=A.B(new A.n(q,s.i("j(h.E)").a(new A.tk()),r),r.i("h.E"))}if(q==null)q=A.c([],t.Q)
B.a.D(q,new A.tl())
return q},
dv(a,b){return this.hZ(a,b)},
hZ(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$dv=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.eF()
if(h!=null){q=h
s=1
break}k=n.at
m=k.db
if(m==null){q="The phone has not published its backup key yet, so a password cannot be sealed for it."
s=1
break}if(!k.gK().E(a)){q="Pick an account first."
s=1
break}if(b.length===0){q="Type the password first."
s=1
break}p=4
j=n.as
j.toString
s=7
return A.r(j.cr(a,new A.bE(m.a,B.U),n.b.$0().F(),b),$async$dv)
case 7:q=null
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.av(g)
j=A.jG(l)
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
m5(a,b,c){return this.cC(new A.tf(b,a,c,!0),a)},
l0(a,b){return this.cC(new A.t5(a,b),a)},
m4(){return this.aB(new A.te())},
lS(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new A.td(),d=e.$1(a2)
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
n=A.FC(p.h(0,"branch"),d,o,p.h(0,"numberShown"))
if(n!=null)return A.aV("Not sent: "+n+".",q)
m=e.$1(a3)==null?f:A.li(B.b.I(a3),f)
if(e.$1(a3)!=null)d=m==null||m<1
else d=!1
if(d)return A.aV("Not sent: the stale window is a whole number of days, at least 1.",q)
l=e.$1(b)
if(l==null)return A.aV("Not sent: an account needs its alias.",q)
k=A.S(["ifsc",a.fr,"micr",a.fx,"branch",a.fy,"numberShown",a.go],r,q)
d=A.v(r,t.X)
if(l!==a.b)d.j(0,"alias",l)
for(r=new A.ab(p,A.o(p).i("ab<1,2>")).gA(0);r.n();){j=r.d
o=j.a
i=k.h(0,o)
h=j.b
if(i!=h)d.j(0,o,h)}if(m!=null&&m!==a.y)d.j(0,"staleAfterDays",m)
g=A.eS(a.ll(l))
if(g!=null)return A.aV("Not sent: "+g+".",q)
return this.aB(new A.tc(this,d,a))},
gmt(){var s,r,q=A.v(t.N,t.hS),p=this.at
p=p==null?null:p.gK().gT()
p=J.Q(p==null?B.bP:p)
while(p.n()){s=p.gt()
r=B.a.ga0(s.b.split("-"))
if(r.length!==0&&s.d!==B.x)q.aI(s.c,new A.ti(s,r))}p=q.$ti.i("M<2>")
p=A.B(new A.M(q,p),p.i("h.E"))
B.a.D(p,new A.tj())
return p},
l3(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=this,k=null,j=l.kQ(f,c),i=j.b
if(i!=null)return A.aV("Not sent: "+i+".",t.T)
s=$.jN()
r=A.c([],t.s)
for(q=0;q<4;++q)r.push(B.b.ac(B.d.bL(s.cQ(256),16),2,"0"))
p="acct-"+B.a.cg(r)
r=B.b.I(d)
o=l.at
o=o==null?k:o.gK().gT()
o=A.NX(o==null?B.bP:o)
if(o==null)o=""
n=A.jU(k,k,a.b+"-LOAN-"+r,k,b,k,k,c,k,o,p,k,a.a,B.o,j.a,k,k,k,k,k,k,k,k,e,k,k,k)
m=A.eS(n)
if(m!=null)return A.aV("Not sent: "+m+".",t.T)
return l.aB(new A.t8(l,p,n))},
l1(a){var s,r,q=this.at,p=q==null?null:A.CG(q,a)
if(p==null)return A.aV("Not sent: the card statement no longer lists that loan.",t.T)
s=$.jN()
q=A.c([],t.s)
for(r=0;r<4;++r)q.push(B.b.ac(B.d.bL(s.cQ(256),16),2,"0"))
return this.aB(new A.t6(this,a,p,"acct-"+B.a.cg(q)))},
ms(a,b){var s,r,q=this.at
q.toString
s=A.CG(q,a)
r=q.gK().h(0,b)
if(s==null||r==null||!B.a.u(A.G_(q,s),r))return A.aV("Not sent: that loan cannot follow this statement row.",t.T)
return this.aB(new A.th(s,r))},
n1(a,b){var s,r,q,p,o,n,m,l=null,k={}
k.a=null
s=a.as
r=s==null
q=r?l:s.x
p=this.fX(b,a.e,q)
o=k.a=p.a
n=p.b
if(n!=null)return A.aV("Not sent: "+n+".",t.T)
m=A.eS(a.hc(o))
if(m!=null)return A.aV("Not sent: "+m+".",t.T)
q=B.z.bd(o.N(),l)
s=r?l:s.N()
return this.aB(new A.tz(k,this,q===B.z.bd(s==null?B.bR.N():s,l),a))},
fX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.a,h=i[2]
if(h!=null){s=this.at
r=s==null?null:s.gK().h(0,h)
if(c!=null)q=(r==null?null:r.d)===B.y
else q=!1
if(r!=null){s=r.d
s=s!==B.M&&s!==B.Q&&!q}else s=!0
if(s)return B.lP}s=i[7]
p=i[6]
o=i[1]
n=i[3]
m=i[5]
l=i[4]
k=A.MV(c,b,i[0],o,h,n,l,m,p,s)
j=k.b
if(j==null)i=null
else{i=A.D("^[A-Z](?=[a-z])",!0,!1)
s=t.r.a(new A.t3())
A.Cd(0,0,j.length,"startIndex")
i=A.NN(j,i,s,0)}return new A.p(k.a,i)},
kQ(a,b){return this.fX(a,b,null)},
hY(a,b,c){var s,r,q="Enter the sender as the phone shows it, like DBS, or a number.",p=B.b.bR(a,A.D("[,\\s]+",!0,!1)),o=A.F(p),n=o.i("n<1>"),m=A.B(new A.n(p,o.i("j(1)").a(new A.tw()),n),n.i("h.E")),l=A.a3(t.N)
for(p=m.length,s=0;s<m.length;m.length===p||(0,A.l)(m),++s){r=A.Gg(m[s])
if(r==null){p=new A.am($.aj,t.gH)
p.bn(q)
return p}l.m(0,r)}if(l.a===0)return A.aV(q,t.T)
return this.aB(new A.tx(l,b,c))},
mP(a){return this.aB(new A.ts(a))},
le(a,b){if(b===a.Q)return A.aV(u.z,t.T)
return this.aB(new A.ta(this,a,b))},
hX(a,b){var s=B.b.I(b)
if(s.length===0)s=null
if(s==a.db)return A.aV(u.z,t.T)
return this.aB(new A.tv(this,a,s))},
ef(a,b,c){var s,r,q={}
q.a=null
if(c!=null){s=B.b.I(A.ao(c,",",""))
r=A.D("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!r.b.test(s)||A.a2(A.ad(s),"SGD").a.a.ga8(0)<=0)return A.aV("Not sent: a budget is an amount above zero, like 450 or 1200.50.",t.T)
r=this.at
r.toString
r=A.w8(r,a)
q.a=A.a2(A.ad(s),r)}return this.aB(new A.ty(q,a,b,A.aE(this.b.$0().F(),B.q)))},
l2(a,b,c,d,e){var s,r,q,p,o,n,m=null,l=B.b.I(A.ao(b,",","")),k=B.b.I(a)
if(k.length===0)return A.aV("Not sent: a goal needs its name.",t.T)
s=A.D("^\\d+(\\.\\d{1,2})?$",!0,!1)
if(!s.b.test(l)||A.a2(A.ad(l),"SGD").a.a.ga8(0)<=0)return A.aV("Not sent: the target is an amount above zero.",t.T)
r=A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1).aj(B.b.I(d))
if(r==null)return A.aV("Not sent: pick the date to reach it by.",t.T)
s=this.b.$0().F()
q=A.a2(A.ad(l),c)
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
return this.aB(new A.t7(new A.iV("goal-"+(1000*s.a+s.b),k,q,new A.z(o,n,A.X(p,m,m)),e)))},
mL(a){return this.aB(new A.to(a))},
fj(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1="currency",a2="is not a supported currency"
t.yz.a(a4)
s=t.N
r=t.X
q=A.v(s,r)
for(p=a3.d,o=p.length,n=a5==null,m=0;m<o;++m){l=p[m]
if(!(B.ca.u(0,l.c)&&l.a!=="fromEvent"))k=(n?a0:a5.c.h(0,l.a))!=null
else k=!1
if(k){k=l.a
q.j(0,k,a5.c.h(0,k))}}for(o=A.F(p),o.i("j(1)").a(A.Ac()),p=B.a.gA(p),o=new A.N(p,A.Ac(),o.i("N<1>"));o.n();){k=p.gt()
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
r=new A.am($.aj,t.gH)
r.bn("Not sent: "+s.toLowerCase()+" is an amount, like 1200.50 or 500 INR.")
return r}k=g.b
if(1>=k.length)return A.a(k,1)
k=k[1]
k.toString
k=A.ad(A.ao(k,",",""))
d=B.e.h(0,e)
if(d==null)A.f(A.x(e,a1,a2))
if((k.b<=0?0:Math.max(k.gv().b,0))>d)A.f(A.y(e+" allows "+A.i(d)+" decimal places",k.k(0),a0))
d=B.e.h(0,e)
if(d==null)A.f(A.x(e,a1,a2))
q.j(0,j,A.S(["amount",k.bz(0,d),"currency",e],s,r))
break
case 7:c=A.li(h,a0)
if(c==null){s=k.b
r=new A.am($.aj,t.gH)
r.bn("Not sent: "+s.toLowerCase()+" is a whole number.")
return r}q.j(0,j,c)
break
case 20:if(h==="yes")q.j(0,j,!0)
break
case 23:q.j(0,j,h.toUpperCase())
break
default:q.j(0,j,h)}}s=n?a0:a5.b
if(s==null){s=this.b.$0().F()
s="web-"+(1000*s.a+s.b)}b=new A.b2(a3,s,q)
s=this.at
s.toString
a=A.CT(s,b)
if(a!=null)return A.aV("Not sent: "+a+".",t.T)
if(!n&&B.z.bd(a5.c,a0)===B.z.bd(q,a0))return A.aV(u.z,t.T)
return this.aB(new A.tu(b))},
hW(a,b){return this.fj(a,b,null)},
hV(a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="currency",a6="is not a supported currency"
t.BU.a(b1)
if(b0==null)return A.aV("Not sent: enter the invoice date, like 17/11/2026.",t.T)
s=this.b.$0().F()
r="web-"+(1000*s.a+s.b)
s=t.N
q=t.X
p=A.v(s,q)
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
n=new A.b2(B.a5,r,p)
p=this.at
p.toString
m=A.CT(p,n)
if(m!=null)return A.aV("Not sent: "+m+".",t.T)
l=A.c([],t.Z)
for(p=A.bO(b1,0,t.jm),o=J.Q(p.a),k=p.b,p=new A.as(o,k,A.o(p).i("as<1>")),j=r+"-",i=a8+" allows ";p.n();){h=p.c
h=h>=0?new A.p(k+h,o.gt()):A.f(A.ak())
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
if(a){s=new A.am($.aj,t.gH)
s.bn("Not sent: line "+(g+1)+" needs a description.")
return s}a=!0
if(a0!=null)if(a0.l(0,$.L())>0)a=(a0.b<=0?0:Math.max(a0.gv().b,0))>4
if(a){s=new A.am($.aj,t.gH)
s.bn("Not sent: line "+(g+1)+"'s quantity is a number above zero, at most 4 decimals.")
return s}if(a3==null){s=new A.am($.aj,t.gH)
s.bn("Not sent: line "+(g+1)+"'s unit price is an amount in "+a8+", like 1200.50.")
return s}a=B.b.ac(""+g,3,"0")
a1=A.v(s,q)
a1.j(0,"draftId",r)
a1.j(0,"description",h)
a1.j(0,"quantity",a0.k(0))
h=A.ad(a3)
a4=B.e.h(0,a8)
if(a4==null)A.f(A.x(a8,a5,a6))
if((h.b<=0?0:Math.max(h.gv().b,0))>a4)A.f(A.y(i+A.i(a4)+" decimal places",h.k(0),null))
a4=B.e.h(0,a8)
if(a4==null)A.f(A.x(a8,a5,a6))
a1.j(0,"unitPrice",A.S(["amount",h.bz(0,a4),"currency",a8],s,q))
if(b!=null)a1.j(0,"gst",b)
B.a.m(l,new A.b2(B.as,j+a,a1))}if(l.length===0)return A.aV("Not sent: an invoice needs at least one line.",t.T)
return this.aB(new A.tt(n,l))},
mM(a){return this.aB(new A.tp(a))},
mN(a){return this.aB(new A.tq(a))},
h1(a){var s=this.gcW(),r=A.F(s)
return a.dx+new A.n(s,r.i("j(1)").a(new A.t4(a)),r.i("n<1>")).gq(0)},
li(a){return this.aB(new A.tb(this,a))},
mO(a){return this.aB(new A.tr(this,a))},
cC(a,b){return this.ky(t.iX.a(a),b)},
aB(a){return this.cC(a,null)},
ky(a,b){var s=0,r=A.J(t.T),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cC=A.K(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=n.eF()
if(h!=null){q=h
s=1
break}j=n.as
j.toString
m=j
j=n.at
j.toString
l=a.$4(j,m.b.a,m.ht(),n.b.$0().F())
if(J.jT(l)){q=u.z
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
k=A.av(g)
j=A.jG(k)
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
eF(){if(this.cx!==B.av)return"The page is not joined yet."
if(!this.CW)return"The page is read-only. Allow changes first."
return null},
cJ(){var s=this,r=s.as
if(r!=null)r.cJ()
s.Q=s.z=s.y=s.ax=s.at=s.as=null
s.CW=s.x=!1
s.ch=!0
s.cx=B.bW}}
A.t2.prototype={
$0(){var s=this.a,r=t.N
return new A.fY(s.a,new A.t1(s),A.v(r,r))},
$S:250}
A.t1.prototype={
$0(){var s=this.a.y
return s==null?"":s},
$S:25}
A.tm.prototype={
$1(a){return t._.a(a).f},
$S:251}
A.tn.prototype={
$2(a,b){var s=t.zG
s.a(a)
s.a(b)
return a.hl(b)?a:b},
$S:252}
A.tg.prototype={
$1(a){var s
t._.a(a)
if(a.d==="setup.tick"){s=a.e
s=J.Y(s.h(0,"stepId"),this.a.a)&&J.Y(s.h(0,"itemId"),this.b.a)}else s=!1
return s},
$S:55}
A.tk.prototype={
$1(a){return t.b.a(a).d!==B.x},
$S:2}
A.tl.prototype={
$2(a,b){var s=t.b
return B.b.l(s.a(a).b,s.a(b).b)},
$S:8}
A.tf.prototype={
$4(a,b,c,d){var s=this,r=s.a,q=s.b
return r===B.L?A.M4(a,q,A.CO(q),b,d,c):A.FD(a,q,A.CO(q),s.c,b,d,s.d,c,r)},
$S:4}
A.t5.prototype={
$4(a,b,c,d){var s=this.a,r=this.b,q=A.CO(s),p=r.c,o=p==null,n=A.FD(a,s,q,r.b,b,d,o,c,r.a)
s=A.B(n,t._)
if(!o)s.push(new A.ai("bulk:"+q+":confirm:"+p,b,c+n.length,"rule.confirm",A.S(["id",p],t.N,t.X),d))
return s},
$S:4}
A.te.prototype={
$4(a,b,c,d){return A.M6(a,b,d,c)},
$S:4}
A.td.prototype={
$1(a){var s=B.b.I(a)
return s.length===0?null:s},
$S:97}
A.tc.prototype={
$4(a,b,c,d){var s,r,q=A.c([],t.Y),p=this.b
if(p.a!==0){s=this.c.a
r=A.v(t.N,t.X)
r.j(0,"id",s)
r.a1(0,p)
q.push(new A.ai("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.J.a(r),d))}return q},
$S:4}
A.ti.prototype={
$0(){return new A.cn(this.a.c,this.b)},
$S:254}
A.tj.prototype={
$2(a,b){var s=t.hS
return B.b.l(s.a(a).a,s.a(b).a)},
$S:255}
A.t8.prototype={
$4(a,b,c,d){return A.c([new A.ai("account:"+b+":"+this.b,b,c,"account.add",t.J.a(A.S(["account",this.c.N()],t.N,t.X)),d)],t.Y)},
$S:4}
A.t6.prototype={
$4(a,b,c,d){var s,r,q,p=null,o=this.c,n=o.a,m=n.b,l=B.a.ga0(m.split("-"))
m=B.b.ad(m,m.length-4)
s=o.b
r=s.e
q=r==null?p:o.c
return A.c([new A.ai("card-loan:"+this.b,b,c,"account.add",t.J.a(A.S(["account",A.jU(p,p,l+"-LOAN-"+m,p,n.r,p,p,n.e,p,n.f,this.d,p,n.c,B.o,new A.h8(B.b1,s.f,p,p,r,q,p,n.a,s.bj(o.d)),p,p,p,p,p,p,p,p,s.b,p,p,p).N()],t.N,t.X)),d)],t.Y)},
$S:4}
A.th.prototype={
$4(a,b,c,d){var s,r,q,p,o,n=this.a,m=this.b,l=m.as
if(l==null)l=B.bR
m=m.a
s=n.b
n=n.d
r=s.bj(n)
q=t.N
p=t.X
o=A.kW(l.N(),q,p)
o.j(0,"cardLoan",s.bj(n))
return A.c([new A.ai("card-loan-link:"+m+":"+r,b,c,"account.edit",A.S(["id",m,"loan",o],q,p),d.F())],t.Y)},
$S:4}
A.tz.prototype={
$4(a,b,c,d){var s,r=A.c([],t.Y)
if(!this.c){s=this.d.a
r.push(new A.ai("account-edit:"+b+":"+s+":"+c,b,c,"account.edit",t.J.a(A.S(["id",s,"loan",this.a.a.N()],t.N,t.X)),d))}return r},
$S:4}
A.t3.prototype={
$1(a){var s=a.b
if(0>=s.length)return A.a(s,0)
return s[0].toLowerCase()},
$S:15}
A.tw.prototype={
$1(a){return A.b(a).length!==0},
$S:6}
A.tx.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=this.a,s=A.e8(s,s.r,A.o(s).c),r=this.b,q=this.c,p=c,o=t.N,n=t.X,m=s.$ti.c;s.n();){l=s.d
if(l==null)l=m.a(l)
k=new A.cq(l,r,q).mY()
j=A.iw(o,n)
j.a1(0,k)
i.push(new A.ai("sms-sender:"+l+":"+b+":"+p,b,c,"sms.sender",j,d.F()))}return i},
$S:4}
A.ts.prototype={
$4(a,b,c,d){var s=this.a
return A.c([A.NB(s,c,b,"sms-sender:"+s.a+":"+b+":"+c,d,!0)],t.Y)},
$S:4}
A.ta.prototype={
$4(a,b,c,d){var s=this.b,r=s.a
return A.c([new A.ai("categorise:"+r+":"+b+":"+c,b,c,"movement.categorise",t.J.a(A.S(["movementId",r,"categoryId",this.c,"baseVersion",this.a.h1(s)],t.N,t.X)),d)],t.Y)},
$S:4}
A.tv.prototype={
$4(a,b,c,d){var s,r=this.b,q=r.a
r=this.a.h1(r)
s=A.CY(this.c)
return A.c([new A.ai("note:"+q+":"+b+":"+c,b,c,"movement.note",A.S(["movementId",q,"notes",s,"baseVersion",r],t.N,t.X),d.F())],t.Y)},
$S:4}
A.ty.prototype={
$4(a,b,c,d){var s=this,r=s.b,q=s.c,p=s.a.a,o=s.d
p=p==null?null:p.N()
return A.c([new A.ai("budget:"+r+":"+q+":"+b+":"+c,b,c,"budget.set",A.S(["bookId",r,"categoryId",q,"amount",p,"from",""+o.a+"-"+B.b.ac(B.d.k(o.b),2,"0")],t.N,t.X),d.F())],t.Y)},
$S:4}
A.t7.prototype={
$4(a,b,c,d){var s=this.a,r=s.a
return A.c([new A.ai("goal:"+r+":"+b+":"+c,b,c,"goal.set",A.S(["id",r,"name",s.b,"target",s.c.N(),"by",s.d.k(0),"accountId",s.e],t.N,t.X),d.F())],t.Y)},
$S:4}
A.to.prototype={
$4(a,b,c,d){var s=this.a.a
return A.c([new A.ai("goal-remove:"+s+":"+b+":"+c,b,c,"goal.remove",A.S(["id",s],t.N,t.X),d.F())],t.Y)},
$S:4}
A.t9.prototype={
$1(a){var s
t.k2.a(a)
if(a.d)s=B.ca.u(0,a.c)&&a.a!=="fromEvent"
else s=!0
return s},
$S:32}
A.tu.prototype={
$4(a,b,c,d){var s=this.a
return A.c([new A.ai("life:"+s.a.b+":"+s.b+":"+b+":"+c,b,c,"life.set",s.N(),d.F())],t.Y)},
$S:4}
A.tt.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Y)
for(s=A.c([this.a],t.Z),B.a.a1(s,this.b),s=A.bO(s,0,t.u),r=J.Q(s.a),q=s.b,s=new A.as(r,q,A.o(s).i("as<1>")),p=c,o=t.N,n=t.X;s.n();){m=s.c
m=m>=0?new A.p(q+m,r.gt()):A.f(A.ak())
l=m.b
k=l.a.b
j=l.b
i.push(new A.ai("life:"+k+":"+j+":"+b+":"+p+":"+m.a,b,c,"life.set",A.S(["kind",k,"id",j,"fields",l.c],o,n),d.F()))}return i},
$S:4}
A.tp.prototype={
$4(a,b,c,d){var s,r,q,p,o,n,m,l=A.c([],t.Y),k=this.a,j=t.u,i=A.B(A.mF(a,k.b),j)
i.push(k)
k=A.bO(i,0,j)
j=J.Q(k.a)
i=k.b
k=new A.as(j,i,A.o(k).i("as<1>"))
s=c
r=t.N
q=t.X
while(k.n()){p=k.c
p=p>=0?new A.p(i+p,j.gt()):A.f(A.ak())
o=p.b
n=o.a.b
m=o.b
l.push(new A.ai("life-remove:"+n+":"+m+":"+b+":"+s+":"+p.a,b,c,"life.remove",A.S(["kind",n,"id",m],r,q),d.F()))}return l},
$S:4}
A.tq.prototype={
$4(a,b,c,d){var s=this.a,r=s.b
s=s.a.b
return A.c([new A.ai("life-remove:"+s+":"+r+":"+b+":"+c,b,c,"life.remove",A.S(["kind",s,"id",r],t.N,t.X),d.F())],t.Y)},
$S:4}
A.t4.prototype={
$1(a){var s
t._.a(a)
s=a.d
return(s==="movement.categorise"||s==="movement.note")&&J.Y(a.e.h(0,"movementId"),this.a.a)},
$S:55}
A.tb.prototype={
$4(a,b,c,d){var s=this.b.a
return A.c([new A.ai("rule-confirm:"+s,b,c,"rule.confirm",t.J.a(A.S(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.tr.prototype={
$4(a,b,c,d){var s=this.b.a
return A.c([new A.ai("rule-remove:"+s,b,c,"rule.remove",t.J.a(A.S(["id",s],t.N,t.X)),d)],t.Y)},
$S:4}
A.eh.prototype={
U(){return"AccountGroup."+this.b}}
A.yd.prototype={
$1(a){A.b(a)
return a.length<=1?a:a[0]+B.b.ad(a,1).toLowerCase()},
$S:11}
A.ij.prototype={}
A.dR.prototype={}
A.tR.prototype={}
A.AJ.prototype={
$1(a){var s,r,q=null,p=a.h(0,1)
p.toString
p=A.X(p,q,q)
s=a.h(0,2)
s.toString
s=A.X(s,q,q)
r=a.h(0,3)
r.toString
return A.cv(new A.z(p,s,A.X(r,q,q)),this.a)},
$S:15}
A.xe.prototype={
$2(a,b){return A.O(a)+t.t5.a(b).e.length},
$S:256}
A.xf.prototype={
$2(a,b){var s=t.dw
s.a(a)
return B.d.l(s.a(b).c,a.c)},
$S:257}
A.dS.prototype={}
A.cx.prototype={}
A.tT.prototype={}
A.xg.prototype={
$1(a){return t.R.a(a).b===this.a},
$S:17}
A.xh.prototype={
$2(a,b){var s=t.R
return B.b.l(s.a(a).c,s.a(b).c)},
$S:48}
A.xl.prototype={
$1(a){var s,r,q=this.a,p=A.F8(q,a),o=this.b.h(0,a.a)
if(o==null)o=0
s=A.c([],t.s)
r=a.w
if(r!=null)s.push(r===B.k?"Money out only":"Money in only")
r=a.r
if(r!=null)s.push("On "+r)
r=a.x
if(r!=null)s.push("For "+A.AI(q,r))
q=a.y
if(q!=null)s.push("Files into "+q)
return new A.dS(a,p,o,a.f,B.a.Y(s,", "))},
$S:258}
A.xi.prototype={
$1(a){return!t.R.a(a).f},
$S:17}
A.xj.prototype={
$1(a){return t.R.a(a).f},
$S:17}
A.xk.prototype={
$2(a,b){var s=t.CU
s.a(a)
return B.d.l(s.a(b).b,a.b)},
$S:259}
A.u1.prototype={}
A.iI.prototype={}
A.hl.prototype={}
A.eF.prototype={}
A.he.prototype={}
A.iO.prototype={}
A.iN.prototype={}
A.wb.prototype={
$1(a){return B.b.u(this.a,a)},
$S:6}
A.hm.prototype={}
A.iZ.prototype={}
A.xo.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.xp.prototype={
$2(a,b){var s,r,q,p,o,n,m
t.r9.a(b)
s=J.aX(b)
r=s.a5(b,this.a,new A.xq(),t.B)
q=A.c([],t.s)
for(p=s.ghE(b),o=p.$ti,p=new A.ac(p,p.gq(0),o.i("ac<a4.E>")),n=this.b,o=o.i("a4.E");p.n();){m=p.d
if(m==null)m=o.a(m)
q.push(m.a.a.ga8(0)===0?"":n.$1(m))}p=this.c
return new A.hm(a,q,n.$1(r),n.$1(A.a2(new A.P(A.aB(B.O.f9(r.gbx()/s.gq(b))),0- -A.et(p)),p)))},
$S:260}
A.xq.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:26}
A.xr.prototype={
$1(a){return J.I6(t.r9.a(a),this.a,new A.xs(),t.B)},
$S:261}
A.xs.prototype={
$2(a,b){var s=t.B
return s.a(a).B(0,s.a(b))},
$S:26}
A.xm.prototype={
$2(a,b){var s=t.nF
s.a(a)
s.a(b)
if(a.a==null)s=1
else if(b.a==null)s=-1
else{s=this.a
s=s.$1(b.b).a.l(0,s.$1(a.b).a)}return s},
$S:262}
A.xn.prototype={
$1(a){var s,r=this.a
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=r.b-1
if(!(s>=0&&s<12))return A.a(B.l,s)
return B.l[s]+" "+r.a},
$S:50}
A.e1.prototype={
U(){return"TxState."+this.b}}
A.e0.prototype={
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
hd(a){var s=null
return this.bZ(s,s,s,a,s,s,s,s)},
lq(a){var s=null
return this.bZ(s,s,s,s,a,s,s,s)},
lm(a){var s=null
return this.bZ(s,a,s,s,s,s,s,s)},
lr(a){var s=null
return this.bZ(s,s,s,s,s,a,s,s)},
lt(a){var s=null
return this.bZ(s,s,s,s,s,s,s,a)},
lo(a){var s=null
return this.bZ(s,s,a,s,s,s,s,s)},
lk(a){var s=null
return this.bZ(a,s,s,s,s,s,s,s)},
ls(a){var s=null
return this.bZ(s,s,s,s,s,s,a,s)}}
A.lI.prototype={}
A.uj.prototype={}
A.xw.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.w.l(0,b.w)
return s!==0?s:B.b.l(a.a,b.a)},
$S:7}
A.xv.prototype={
$2(a,b){var s,r=t.W
r.a(a)
r.a(b)
s=a.f.a.l(0,b.f.a)
return s!==0?s:this.a.$2(b,a)},
$S:7}
A.xx.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:7}
A.xy.prototype={
$2(a,b){var s=t.W
s.a(a)
return this.a.$2(s.a(b),a)},
$S:7}
A.xu.prototype={
$1(a){var s=this.a.r.a.h(0,a)
return s==null?a:A.ca(s)},
$S:11}
A.xz.prototype={
$1(a){return A.aM(a,this.a)},
$S:18}
A.xA.prototype={
$1(a){var s=this.a.r.a.h(0,a)
A:{if(s!=null){s=A.ca(s)
break A}s=a
break A}return s},
$S:11};(function aliases(){var s=J.es.prototype
s.io=s.k
s=A.R.prototype
s.fl=s.aJ
s=A.h.prototype
s.im=s.bN
s=A.hV.prototype
s.ib=s.J
s=A.hj.prototype
s.ei=s.dW
s=A.kj.prototype
s.ic=s.ec
s=A.i4.prototype
s.ie=s.eO
s.ig=s.cH
s.ih=s.cL
s.ii=s.cM
s.ij=s.cp
s.ik=s.eh
s.il=s.dq
s=A.af.prototype
s.ip=s.j
s.iq=s.Z})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers._instance_1i,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_0u
s(J,"KQ","IK",63)
r(J.dH.prototype,"gi8",1,1,null,["$2","$1"],["c5","am"],129,0,0)
q(A.er.prototype,"ghi","mb",6)
p(A,"LH","Jw",43)
p(A,"LI","Jx",43)
p(A,"LJ","Jy",43)
o(A,"FA","Lp",0)
s(A,"M7","IT",63)
n(A.dc.prototype,"geT","u",28)
p(A,"Mg","Kx",68)
m(A,"Mi",1,null,["$3$onError$radix","$1"],["X",function(a){return A.X(a,null,null)}],265,0)
o(A,"Mh","Iu",266)
m(A,"N_",2,null,["$1$2","$2"],["G6",function(a,b){return A.G6(a,b,t.x)}],62,0)
m(A,"MZ",2,null,["$1$2","$2"],["G5",function(a,b){return A.G5(a,b,t.x)}],62,0)
p(A,"Fv","MW",6)
q(A.kF.prototype,"gl4","l5",55)
p(A,"Nx","L1",1)
s(A,"Ny","Lg",7)
p(A,"Np","KK",59)
s(A,"Nu","Mc",178)
p(A,"jM","N7",1)
m(A,"N9",2,null,["$4$body$headers","$2","$3$headers"],["hG",function(a,b){return A.hG(a,b,null,B.dR)},function(a,b,c){return A.hG(a,b,null,c)}],71,0)
l(A.lc.prototype,"gkD","kE",0)
p(A,"Ac","J4",32)
var k
l(k=A.ld.prototype,"gm9","cK",5)
l(k,"gf7","bK",5)
l(k,"gm3","m4",10)
s(A,"Go","Nq",42)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a0,null)
q(A.a0,[A.C3,J.kN,A.iU,J.f0,A.jb,A.hw,A.h,A.i1,A.bL,A.a7,A.aF,A.R,A.tY,A.ac,A.iz,A.N,A.f9,A.j1,A.iY,A.ih,A.j8,A.fl,A.as,A.aU,A.cs,A.bj,A.h9,A.fQ,A.e7,A.cI,A.uk,A.pi,A.ii,A.jq,A.p5,A.cB,A.a1,A.iv,A.er,A.hx,A.fy,A.hp,A.mq,A.lW,A.mt,A.cG,A.ma,A.ms,A.jr,A.lP,A.eb,A.bV,A.lX,A.e6,A.am,A.lQ,A.mo,A.jB,A.mf,A.fB,A.je,A.jw,A.mu,A.bf,A.b7,A.uy,A.ux,A.be,A.v0,A.vf,A.eP,A.aR,A.uz,A.a8,A.ck,A.m8,A.l9,A.j_,A.uJ,A.b8,A.kM,A.ap,A.bh,A.mr,A.bF,A.jy,A.kx,A.ph,A.mc,A.kv,A.kp,A.kZ,A.cj,A.kq,A.nj,A.np,A.lw,A.fN,A.cy,A.o5,A.d3,A.o8,A.en,A.h5,A.lj,A.it,A.d2,A.iW,A.eD,A.hj,A.fr,A.la,A.pl,A.nq,A.kj,A.i5,A.nw,A.i7,A.cT,A.dv,A.aI,A.ln,A.uI,A.P,A.cE,A.br,A.c8,A.mW,A.cn,A.hn,A.ks,A.lB,A.kf,A.tA,A.cg,A.cJ,A.k0,A.hq,A.iS,A.eq,A.cX,A.lo,A.kI,A.ly,A.lz,A.n3,A.bW,A.ch,A.dr,A.fS,A.dG,A.bK,A.bn,A.bN,A.nI,A.di,A.nK,A.lg,A.bo,A.iP,A.c1,A.il,A.nR,A.dy,A.nS,A.lE,A.tH,A.mY,A.fc,A.ka,A.fn,A.fd,A.o6,A.hu,A.tW,A.o7,A.ky,A.n0,A.h6,A.fW,A.eu,A.ls,A.hb,A.jV,A.pc,A.dP,A.V,A.k9,A.d9,A.dq,A.pd,A.nU,A.cw,A.pk,A.dm,A.dK,A.p7,A.ex,A.p8,A.h8,A.ho,A.iy,A.ha,A.z,A.nJ,A.kg,A.q,A.kF,A.ai,A.ne,A.k8,A.nf,A.u6,A.iA,A.dM,A.tI,A.lk,A.tJ,A.tU,A.dT,A.tV,A.dV,A.ug,A.lH,A.uh,A.l7,A.nE,A.cW,A.ep,A.t,A.b2,A.p2,A.fo,A.dN,A.lp,A.tE,A.da,A.ci,A.dE,A.tN,A.iT,A.fg,A.pb,A.bz,A.hs,A.l4,A.eI,A.ik,A.cF,A.W,A.bb,A.cH,A.mZ,A.lt,A.lu,A.tZ,A.cq,A.u2,A.l8,A.d0,A.u5,A.dY,A.l6,A.cU,A.iq,A.u9,A.hW,A.ud,A.ia,A.iu,A.lD,A.ue,A.iX,A.i_,A.bC,A.n7,A.dB,A.k7,A.le,A.iV,A.fq,A.lq,A.ui,A.aY,A.lA,A.dj,A.dQ,A.mX,A.kH,A.lc,A.dn,A.dO,A.kz,A.nd,A.l5,A.fY,A.db,A.l_,A.im,A.o0,A.kr,A.fX,A.h1,A.o1,A.dJ,A.kJ,A.h7,A.em,A.ll,A.jY,A.pe,A.fh,A.lm,A.d_,A.du,A.pj,A.hf,A.hk,A.kA,A.kB,A.t0,A.ld,A.ij,A.dR,A.tR,A.dS,A.cx,A.tT,A.u1,A.he,A.hm,A.iZ,A.cr,A.lI,A.uj])
q(J.kN,[J.kP,J.h2,J.ip,J.h3,J.h4,J.fe,J.dH])
q(J.ip,[J.es,J.u,A.ev,A.iD])
q(J.es,[J.lf,J.eL,J.dI])
r(J.kO,A.iU)
r(J.o2,J.u)
q(J.fe,[J.io,J.kQ])
q(A.h,[A.eM,A.T,A.c3,A.n,A.f8,A.fw,A.dU,A.j7,A.pg,A.dC,A.fA,A.lO,A.mp,A.de])
q(A.eM,[A.f3,A.jC])
r(A.jc,A.f3)
r(A.ja,A.jC)
q(A.bL,[A.kc,A.ng,A.kK,A.kb,A.lF,A.za,A.zc,A.uu,A.ut,A.vj,A.uT,A.uW,A.v5,A.p9,A.uZ,A.uB,A.uD,A.nB,A.nC,A.v9,A.AQ,A.AR,A.tX,A.tL,A.tC,A.vR,A.z9,A.Bl,A.Bn,A.Bo,A.Bp,A.BA,A.yo,A.yp,A.vy,A.vB,A.zt,A.xD,A.xF,A.xH,A.xJ,A.xL,A.vp,A.vq,A.vm,A.vn,A.vo,A.u8,A.u7,A.vW,A.vX,A.vY,A.y_,A.nk,A.nn,A.xS,A.xT,A.ye,A.y4,A.y1,A.y2,A.y3,A.zf,A.vO,A.vs,A.y8,A.nL,A.nN,A.nP,A.AK,A.AM,A.AN,A.yN,A.yQ,A.ym,A.yn,A.vP,A.z0,A.z1,A.z2,A.Bq,A.Br,A.vT,A.vU,A.vV,A.vS,A.vh,A.xX,A.w9,A.wa,A.oF,A.os,A.oE,A.p1,A.p0,A.oC,A.oN,A.oM,A.oa,A.ob,A.om,A.oA,A.oy,A.oz,A.ox,A.oG,A.oH,A.oI,A.oJ,A.oK,A.oL,A.o9,A.op,A.oq,A.oO,A.oP,A.oQ,A.oS,A.oT,A.oU,A.oV,A.oW,A.oX,A.oY,A.oZ,A.oR,A.oe,A.oB,A.oh,A.oi,A.ou,A.oc,A.ot,A.ov,A.ol,A.ok,A.ow,A.oo,A.og,A.zQ,A.zR,A.zT,A.ni,A.zU,A.zV,A.zk,A.xM,A.zm,A.zn,A.zo,A.zq,A.zp,A.z6,A.z7,A.Ao,A.Ag,A.Ah,A.Ak,A.Aj,A.Ad,A.Ae,A.Am,A.AY,A.zC,A.zG,A.vu,A.zA,A.zB,A.yy,A.yx,A.yw,A.yu,A.yv,A.yK,A.yE,A.yF,A.yG,A.yH,A.yz,A.Aq,A.Ar,A.At,A.Au,A.Ay,A.Ap,A.Av,A.yL,A.yM,A.A6,A.A8,A.A9,A.Aa,A.xV,A.xW,A.p4,A.vv,A.vw,A.vz,A.vA,A.vZ,A.AH,A.AD,A.AF,A.AE,A.tF,A.w_,A.w0,A.w1,A.Bx,A.yX,A.yV,A.yW,A.A5,A.A3,A.zI,A.zK,A.zW,A.zY,A.A_,A.A0,A.A1,A.Bk,A.BF,A.BE,A.BH,A.xB,A.B1,A.B_,A.B2,A.B3,A.B4,A.zu,A.zw,A.B7,A.B6,A.Bc,A.Bd,A.n_,A.Bh,A.zP,A.AT,A.AU,A.n9,A.nc,A.nb,A.na,A.w2,A.w3,A.w4,A.w5,A.mV,A.wg,A.we,A.nY,A.nZ,A.o_,A.nW,A.nX,A.vJ,A.vK,A.xQ,A.vl,A.z8,A.zi,A.rQ,A.rR,A.rS,A.rT,A.pv,A.qb,A.qs,A.pw,A.qk,A.qn,A.rD,A.rE,A.rF,A.rz,A.rC,A.rB,A.rx,A.rw,A.rG,A.rn,A.rc,A.qZ,A.r3,A.r4,A.r5,A.qX,A.r6,A.qW,A.r7,A.r8,A.r9,A.ra,A.q8,A.q9,A.pW,A.pX,A.q0,A.q1,A.q2,A.q3,A.q6,A.q7,A.pY,A.pZ,A.qS,A.qw,A.pR,A.pP,A.qe,A.rv,A.rq,A.ru,A.qB,A.po,A.pn,A.qM,A.qN,A.qO,A.rO,A.rJ,A.rL,A.pM,A.pL,A.pH,A.pJ,A.pK,A.rl,A.rg,A.ri,A.rj,A.qQ,A.qv,A.wj,A.wk,A.wm,A.wn,A.wl,A.ws,A.wr,A.wA,A.wy,A.wx,A.wv,A.wt,A.vM,A.wG,A.wH,A.wD,A.wC,A.zH,A.wK,A.wI,A.wJ,A.x1,A.wM,A.xb,A.xc,A.x2,A.x3,A.x_,A.x0,A.x4,A.x8,A.x9,A.wN,A.wO,A.wL,A.wS,A.wU,A.wV,A.wW,A.wX,A.wY,A.wZ,A.wP,A.wQ,A.wR,A.x5,A.x6,A.Bt,A.tm,A.tg,A.tk,A.tf,A.t5,A.te,A.td,A.tc,A.t8,A.t6,A.th,A.tz,A.t3,A.tw,A.tx,A.ts,A.ta,A.tv,A.ty,A.t7,A.to,A.t9,A.tu,A.tt,A.tp,A.tq,A.t4,A.tb,A.tr,A.yd,A.AJ,A.xg,A.xl,A.xi,A.xj,A.wb,A.xo,A.xr,A.xn,A.xu,A.xz,A.xA])
q(A.kc,[A.uF,A.nh,A.o4,A.zb,A.vk,A.vQ,A.uU,A.uX,A.p6,A.pa,A.v1,A.uA,A.vc,A.up,A.uo,A.vb,A.va,A.nu,A.Be,A.Bm,A.BC,A.xE,A.xG,A.xI,A.xK,A.vL,A.xR,A.y0,A.nm,A.nl,A.no,A.yj,A.ze,A.xU,A.yf,A.y6,A.y7,A.zg,A.nM,A.nO,A.AO,A.yO,A.yT,A.yR,A.yS,A.z_,A.z3,A.z4,A.oD,A.or,A.p_,A.zS,A.vF,A.AZ,A.w7,A.xN,A.zj,A.zl,A.Af,A.An,A.AW,A.AX,A.Bj,A.zD,A.zF,A.zE,A.zx,A.zy,A.zz,A.zM,A.zO,A.zN,A.yq,A.ys,A.yt,A.yA,A.yC,A.yI,A.yJ,A.Ba,A.Bb,A.As,A.Aw,A.Ax,A.A7,A.p3,A.AB,A.AC,A.AP,A.tG,A.zh,A.By,A.Bz,A.xY,A.xZ,A.yg,A.yh,A.yi,A.tQ,A.tO,A.tP,A.A4,A.yk,A.zJ,A.uq,A.ur,A.zX,A.zZ,A.BG,A.Bv,A.Bw,A.B5,A.zv,A.u3,A.Bg,A.Bi,A.ub,A.ua,A.uc,A.AV,A.n8,A.wd,A.z5,A.mU,A.wf,A.xt,A.vI,A.wc,A.qp,A.ql,A.rA,A.r_,A.r0,A.rb,A.pQ,A.qd,A.rp,A.qF,A.qA,A.qJ,A.qK,A.rK,A.pI,A.rh,A.wh,A.wi,A.wo,A.wz,A.wB,A.wu,A.wE,A.xd,A.xa,A.wT,A.x7,A.tn,A.tl,A.tj,A.xe,A.xf,A.xh,A.xk,A.xp,A.xq,A.xs,A.xm,A.xw,A.xv,A.xx,A.xy])
r(A.dp,A.ja)
q(A.a7,[A.f4,A.cA,A.md,A.af])
q(A.aF,[A.fj,A.e2,A.kR,A.lK,A.lr,A.m9,A.ir,A.jW,A.ce,A.j5,A.lJ,A.dW,A.ke])
q(A.R,[A.hr,A.bs])
r(A.kd,A.hr)
q(A.T,[A.a4,A.ig,A.at,A.M,A.ab,A.jd])
q(A.a4,[A.fu,A.ah,A.aP,A.me])
r(A.id,A.c3)
r(A.ie,A.fw)
r(A.fZ,A.dU)
r(A.f7,A.dC)
q(A.bj,[A.e9,A.fD,A.dd])
q(A.e9,[A.p,A.ea,A.jj,A.hy])
q(A.fD,[A.bA,A.jk])
q(A.dd,[A.eN,A.jl,A.jm,A.jn,A.jo])
r(A.hB,A.h9)
r(A.e5,A.hB)
r(A.i2,A.e5)
q(A.fQ,[A.b_,A.cl])
q(A.cI,[A.fR,A.jp,A.jx,A.j2])
q(A.fR,[A.cR,A.cZ])
r(A.fb,A.kK)
r(A.iL,A.e2)
q(A.lF,[A.lC,A.fM])
r(A.ff,A.cA)
r(A.hc,A.ev)
q(A.iD,[A.iB,A.bw])
q(A.bw,[A.jf,A.jh])
r(A.jg,A.jf)
r(A.ew,A.jg)
r(A.ji,A.jh)
r(A.c4,A.ji)
q(A.ew,[A.l0,A.l1])
q(A.c4,[A.l2,A.iC,A.l3,A.iE,A.iF,A.iG,A.fk])
r(A.hA,A.m9)
q(A.kb,[A.uv,A.uw,A.v7,A.v6,A.nQ,A.uK,A.uP,A.uO,A.uM,A.uL,A.uS,A.uR,A.uQ,A.uV,A.v4,A.vH,A.ve,A.vd,A.uE,A.nz,A.v2,A.nt,A.nH,A.ny,A.nx,A.nD,A.BB,A.y5,A.AL,A.yP,A.of,A.od,A.oj,A.Ai,A.Al,A.zL,A.yr,A.yB,A.yD,A.AG,A.Bu,A.B0,A.B8,A.Bf,A.AS,A.pp,A.rU,A.rV,A.rW,A.rX,A.rY,A.rZ,A.t_,A.qa,A.qt,A.qq,A.qr,A.pq,A.pr,A.ps,A.pt,A.pu,A.qm,A.qj,A.qo,A.qi,A.ry,A.qY,A.qU,A.qT,A.qV,A.r1,A.r2,A.pV,A.pU,A.q4,A.q5,A.pT,A.q_,A.pS,A.qR,A.qx,A.pO,A.qf,A.qg,A.qh,A.qc,A.rr,A.rs,A.rt,A.ro,A.qG,A.qC,A.qD,A.qz,A.qE,A.qy,A.pm,A.qL,A.qI,A.qH,A.rP,A.rM,A.rI,A.rN,A.rH,A.pN,A.pD,A.pC,A.pE,A.pB,A.pF,A.pA,A.pG,A.pz,A.py,A.rm,A.rf,A.re,A.rk,A.rd,A.px,A.qP,A.qu,A.nF,A.wp,A.wq,A.ww,A.vN,A.wF,A.AA,A.Bs,A.t2,A.t1,A.ti])
r(A.cM,A.lX)
r(A.mi,A.jB)
r(A.dc,A.jp)
r(A.j4,A.jx)
q(A.bf,[A.fL,A.ku,A.kS])
q(A.b7,[A.hX,A.jZ,A.kV,A.kU,A.lN,A.j6,A.h_])
r(A.kT,A.ir)
r(A.v_,A.v0)
r(A.lM,A.ku)
q(A.ce,[A.hg,A.kG])
q(A.be,[A.kC,A.kD,A.cC])
q(A.h_,[A.mj,A.mm])
q(A.kC,[A.ml,A.mn])
r(A.mk,A.ml)
r(A.lv,A.mn)
r(A.f_,A.nj)
q(A.f_,[A.k1,A.lY])
r(A.i4,A.np)
r(A.n4,A.i4)
r(A.ic,A.lw)
q(A.ic,[A.k2,A.kk])
q(A.cy,[A.eE,A.d7,A.hZ,A.u_,A.u0])
q(A.eE,[A.lU,A.m4])
r(A.k5,A.lU)
q(A.d7,[A.lV,A.m5])
r(A.k6,A.lV)
q(A.o5,[A.kE,A.hV])
q(A.kE,[A.n5,A.nv])
q(A.d3,[A.eo,A.m0])
q(A.eo,[A.k3,A.m2])
r(A.us,A.o8)
q(A.us,[A.n6,A.m7])
q(A.kD,[A.mb,A.f6])
r(A.is,A.h5)
q(A.cC,[A.mw,A.mv])
r(A.mg,A.mw)
r(A.bp,A.hj)
r(A.d8,A.is)
r(A.bE,A.lj)
q(A.f6,[A.lb,A.lT,A.m3])
r(A.kh,A.lY)
r(A.km,A.m0)
r(A.i3,A.hV)
q(A.m8,[A.fT,A.hz,A.cd,A.dk,A.eH,A.eJ,A.fs,A.dX,A.dw,A.cf,A.ej,A.eK,A.ek,A.bX,A.dF,A.cY,A.eA,A.eB,A.dz,A.dA,A.fa,A.dl,A.cS,A.cz,A.dD,A.hh,A.bg,A.bY,A.cV,A.iQ,A.bt,A.cm,A.dL,A.ft,A.d4,A.bR,A.bM,A.bD,A.d5,A.aK,A.aa,A.ez,A.cp,A.ht,A.cL,A.aQ,A.c7,A.fv,A.dZ,A.co,A.eC,A.bc,A.fi,A.h0,A.ey,A.eh,A.e1,A.e0])
r(A.nr,A.kj)
r(A.lZ,A.hZ)
r(A.m_,A.lZ)
r(A.f5,A.m_)
r(A.k_,A.lT)
r(A.i6,A.m2)
r(A.m1,A.mv)
r(A.i8,A.m4)
r(A.m6,A.m5)
r(A.kn,A.m6)
r(A.i9,A.m7)
q(A.n0,[A.E,A.nG,A.bu,A.tM])
r(A.mh,A.af)
q(A.ex,[A.el,A.fP,A.iK,A.iJ,A.ib])
q(A.cH,[A.hd,A.iM,A.hi])
q(A.u1,[A.iI,A.hl,A.eF])
q(A.he,[A.iO,A.iN])
s(A.hr,A.cs)
s(A.jC,A.R)
s(A.jf,A.R)
s(A.jg,A.aU)
s(A.jh,A.R)
s(A.ji,A.aU)
s(A.hB,A.jw)
s(A.jx,A.mu)
s(A.lU,A.fN)
s(A.lV,A.fN)
s(A.mw,A.cT)
s(A.lY,A.nq)
s(A.m0,A.i7)
s(A.lZ,A.i5)
s(A.m_,A.i7)
s(A.lT,A.cT)
s(A.m2,A.i7)
s(A.mv,A.cT)
s(A.m4,A.i5)
s(A.m5,A.i5)
s(A.m6,A.pl)
s(A.m7,A.nw)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",U:"double",bH:"num",e:"String",j:"bool",bh:"Null",A:"List",a0:"Object",ae:"Map",a9:"JSObject"},mangledNames:{},types:["~()","j(V)","j(br)","~(e)","A<ai>(h6,e,d,a8)","b9<~>()","j(e)","d(V,V)","d(br,br)","j(c8)","b9<e?>()","e(e)","j(aY)","~(a9)","bh(a9)","e(cD)","A<V>()","j(bb)","e(q)","e(V)","j(du)","d(c8,c8)","j(cJ)","d(b2,b2)","j(b2)","e()","q(q,q)","bh()","j(a0?)","d(d,ch)","d(d,ci)","d(d,dE)","j(t)","~(@)","e(e?)","j(ch)","d(d,d)","j(di)","j(bo)","j(fd)","d(d)","j(W)","d(e,e)","~(~())","~(b9<e?>())","d(bK,bK)","U(d)","q(bC)","d(bb,bb)","j(bz)","e(d)","j(aa)","j(cX)","d(+(z,z),+(z,z))","d(W,W)","j(ai)","@()","cr(z?)","e?()","j(e?)","~(a0?,a0?)","bh(a0,eG)","0^(0^,0^)<bH>","d(@,@)","e(e,U)","d()","e(U)","d(z,z)","@(@)","bh(@)","dJ()","b9<hf>(e,un{body:e4?,headers:ae<e,e>})","d(+(d,V),+(d,V))","d(cq,cq)","j(A<e>)","d(cg,cg)","j(+(z,z))","q(q,V)","q(q,bz)","j(fc)","@(e)","z(z?,z)","j(d9)","A<bo>(A<bo>)","z?(A<aY>)","d(e?)","~(e,@)","j(cW)","0&()","q?(e)","z?(e)","d(V)","d(A<V>,z)","z(aY)","e(z?)","j(bK)","j(dQ)","e?(e)","j(dK)","A<e>()","d(cw,cw)","j(bt)","z?()","j(c1)","d(dq,dq)","d(dm,dm)","j(z)","j(cw)","j(@)","j(ap<e,d0>)","d?(e)","j(j)","j(fg)","z(z,z)","j(cg)","d(+month,year(d,d))","+month,year(d,d)(d)","d(+month,year(d,d),+month,year(d,d))","j(z,z)","j(fn)","d(dM,dM)","q(V)","eu()","A<d>()","d(+(d,d,bR),+(d,d,bR))","j(+(V,V,bR))","d(dT,dT)","d(dV,dV)","j(V,V)","j(fm[d])","d(cX,cX)","j(+(e,e))","j(ap<e,e>)","e(ap<e,e>)","j(hq)","j(eI)","j(d0)","d(dN,dN)","j(dY)","d(cW,cW)","j(cp)","d(da,da)","d(ci,ci)","e(d,e)","e?(e,e)","ae<e,e>(ae<e,e>,e)","e(z)","d(b2)","q(bt)","q(bt?)","0&(e,d?)","d(dy,dy)","hs(e)","d(bz,bz)","d(c1,c1)","d(bn,bn)","ai(e,e,ae<e,a0?>)","~(W)","W()","cH(V)","cH()","e(bb)","j(e,z)","d(e)","A<z>()","bo()","h<V>(e,z,z)","d(+(d,e),+(d,e))","+(d,d,j,ae<e?,q>)()","j(+(d,d,j,ae<e?,q>))","j(+complete,month,spent,year(j,d,q,d))","q(q,+complete,month,spent,year(j,d,q,d))","q(q,bC)","q(q,bn)","j(bC)","d(bC,bC)","d(dB,dB)","bK?(a0?)","d(cF,cF)","j(fq)","j(bn)","aY(br)","a9(a9)","~(e,e?)","~(e,a0)","q(q,di)","j(U)","d(dG,dG)","U(U)","~(e,e)","j(bc)","~(lG)","A<d>(bp)","~(e,A<V>)","j(e,A<V>)","a9(d_)","d(d,A<d>)","a9(e,e,e{placeholder:e?})","a9(e,A<+(e,e)>,e)","j(a9)","j(cn)","~(cr)","d(dr,dr)","~(e,cr(z?))","~(@,@)","d(d,bW)","j(bW)","a9(e,e{placeholder:e,wide:j})","e(a9)","iZ()","im()","e(e,e,U)","d(aa,aa)","e(t)","~(b9<e?>(),e)","d(d,cx)","j(dS)","dv()","a9(e,e{placeholder:e?})","d(+(e,c7),+(e,c7))","d(bW,bW)","j(bX)","a9(e{placeholder:e,value:e})","j(d)","d(dn,dn)","d(dO,dO)","db(bz)","U(q)","e(d[e])","fX()","h1()","e(e?,e)","e(b2,t)","j(q)","d(ep,ep)","z?(z)","d(br)","h7()","~(d,@)","A<dj>(dQ)","q(A<aY>)","q(q,aY)","d(A<aY>)","j(A<aY>)","bh(@,eG)","j(dw)","d(ap<e,d>,ap<e,d>)","e4()","du()","@(@,e)","fY()","a8(ai)","a8(a8,a8)","kL()","cn()","d(cn,cn)","d(d,cF)","d(dR,dR)","dS(bb)","d(cx,cx)","hm(e,A<q>)","q(A<q>)","d(ap<e?,A<q>>,ap<e?,A<q>>)","bh(~())","hY(cE)","d(e{onError:d(e)?,radix:d?})","a8()","P()","j(co)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.p&&a.b(c.a)&&b.b(c.b),"2;days,months":(a,b)=>c=>c instanceof A.ea&&a.b(c.a)&&b.b(c.b),"2;end,loans":(a,b)=>c=>c instanceof A.jj&&a.b(c.a)&&b.b(c.b),"2;month,year":(a,b)=>c=>c instanceof A.hy&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bA&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;accountId,from,to":(a,b,c)=>d=>d instanceof A.jk&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eN&&A.mJ(a,b.a),"4;complete,month,spent,year":a=>b=>b instanceof A.jl&&A.mJ(a,b.a),"5;":a=>b=>b instanceof A.jm&&A.mJ(a,b.a),"5;date,eventId,hash,n,removed":a=>b=>b instanceof A.jn&&A.mJ(a,b.a),"8;instalment,instalmentCount,payingAccountId,paymentDay,pendingAsOf,pendingInstalments,principal,type":a=>b=>b instanceof A.jo&&A.mJ(a,b.a)}}
A.K4(v.typeUniverse,JSON.parse('{"dI":"es","lf":"es","eL":"es","Oj":"ev","kP":{"j":[],"az":[]},"h2":{"bh":[],"az":[]},"ip":{"a9":[]},"es":{"a9":[]},"u":{"A":["1"],"T":["1"],"a9":[],"h":["1"],"bv":["1"]},"kO":{"iU":[]},"o2":{"u":["1"],"A":["1"],"T":["1"],"a9":[],"h":["1"],"bv":["1"]},"f0":{"al":["1"]},"fe":{"U":[],"bH":[],"aZ":["bH"]},"io":{"U":[],"d":[],"bH":[],"aZ":["bH"],"az":[]},"kQ":{"U":[],"bH":[],"aZ":["bH"],"az":[]},"dH":{"e":[],"aZ":["e"],"fm":[],"bv":["@"],"az":[]},"jb":{"BR":[]},"hw":{"BR":[]},"eM":{"h":["2"]},"i1":{"al":["2"]},"f3":{"eM":["1","2"],"h":["2"],"h.E":"2"},"jc":{"f3":["1","2"],"eM":["1","2"],"T":["2"],"h":["2"],"h.E":"2"},"ja":{"R":["2"],"A":["2"],"eM":["1","2"],"T":["2"],"h":["2"]},"dp":{"ja":["1","2"],"R":["2"],"A":["2"],"eM":["1","2"],"T":["2"],"h":["2"],"R.E":"2","h.E":"2"},"f4":{"a7":["3","4"],"ae":["3","4"],"a7.K":"3","a7.V":"4"},"fj":{"aF":[]},"kd":{"R":["d"],"cs":["d"],"A":["d"],"T":["d"],"h":["d"],"R.E":"d","cs.E":"d"},"T":{"h":["1"]},"a4":{"T":["1"],"h":["1"]},"fu":{"a4":["1"],"T":["1"],"h":["1"],"h.E":"1","a4.E":"1"},"ac":{"al":["1"]},"c3":{"h":["2"],"h.E":"2"},"id":{"c3":["1","2"],"T":["2"],"h":["2"],"h.E":"2"},"iz":{"al":["2"]},"ah":{"a4":["2"],"T":["2"],"h":["2"],"h.E":"2","a4.E":"2"},"n":{"h":["1"],"h.E":"1"},"N":{"al":["1"]},"f8":{"h":["2"],"h.E":"2"},"f9":{"al":["2"]},"fw":{"h":["1"],"h.E":"1"},"ie":{"fw":["1"],"T":["1"],"h":["1"],"h.E":"1"},"j1":{"al":["1"]},"dU":{"h":["1"],"h.E":"1"},"fZ":{"dU":["1"],"T":["1"],"h":["1"],"h.E":"1"},"iY":{"al":["1"]},"ig":{"T":["1"],"h":["1"],"h.E":"1"},"ih":{"al":["1"]},"j7":{"h":["1"],"h.E":"1"},"j8":{"al":["1"]},"pg":{"h":["1"],"h.E":"1"},"fl":{"al":["1"]},"dC":{"h":["+(d,1)"],"h.E":"+(d,1)"},"f7":{"dC":["1"],"T":["+(d,1)"],"h":["+(d,1)"],"h.E":"+(d,1)"},"as":{"al":["+(d,1)"]},"hr":{"R":["1"],"cs":["1"],"A":["1"],"T":["1"],"h":["1"]},"aP":{"a4":["1"],"T":["1"],"h":["1"],"h.E":"1","a4.E":"1"},"p":{"e9":[],"bj":[]},"ea":{"e9":[],"bj":[]},"jj":{"e9":[],"bj":[]},"hy":{"e9":[],"bj":[]},"bA":{"fD":[],"bj":[]},"jk":{"fD":[],"bj":[]},"eN":{"dd":[],"bj":[]},"jl":{"dd":[],"bj":[]},"jm":{"dd":[],"bj":[]},"jn":{"dd":[],"bj":[]},"jo":{"dd":[],"bj":[]},"i2":{"e5":["1","2"],"hB":["1","2"],"h9":["1","2"],"jw":["1","2"],"ae":["1","2"]},"fQ":{"ae":["1","2"]},"b_":{"fQ":["1","2"],"ae":["1","2"]},"fA":{"h":["1"],"h.E":"1"},"e7":{"al":["1"]},"cl":{"fQ":["1","2"],"ae":["1","2"]},"fR":{"cI":["1"],"d6":["1"],"T":["1"],"h":["1"]},"cR":{"fR":["1"],"cI":["1"],"d6":["1"],"T":["1"],"h":["1"]},"cZ":{"fR":["1"],"cI":["1"],"d6":["1"],"T":["1"],"h":["1"]},"kK":{"bL":[],"dx":[]},"fb":{"bL":[],"dx":[]},"iL":{"e2":[],"aF":[]},"kR":{"aF":[]},"lK":{"aF":[]},"jq":{"eG":[]},"bL":{"dx":[]},"kb":{"bL":[],"dx":[]},"kc":{"bL":[],"dx":[]},"lF":{"bL":[],"dx":[]},"lC":{"bL":[],"dx":[]},"fM":{"bL":[],"dx":[]},"lr":{"aF":[]},"cA":{"a7":["1","2"],"C6":["1","2"],"ae":["1","2"],"a7.K":"1","a7.V":"2"},"at":{"T":["1"],"h":["1"],"h.E":"1"},"cB":{"al":["1"]},"M":{"T":["1"],"h":["1"],"h.E":"1"},"a1":{"al":["1"]},"ab":{"T":["ap<1,2>"],"h":["ap<1,2>"],"h.E":"ap<1,2>"},"iv":{"al":["ap<1,2>"]},"ff":{"cA":["1","2"],"a7":["1","2"],"C6":["1","2"],"ae":["1","2"],"a7.K":"1","a7.V":"2"},"e9":{"bj":[]},"fD":{"bj":[]},"dd":{"bj":[]},"er":{"tK":[],"fm":[]},"hx":{"iR":[],"cD":[]},"lO":{"h":["iR"],"h.E":"iR"},"fy":{"al":["iR"]},"hp":{"cD":[]},"mp":{"h":["cD"],"h.E":"cD"},"mq":{"al":["cD"]},"hc":{"ev":[],"a9":[],"i0":[],"az":[]},"ev":{"a9":[],"i0":[],"az":[]},"iD":{"a9":[]},"mt":{"i0":[]},"iB":{"Dx":[],"a9":[],"az":[]},"bw":{"c2":["1"],"a9":[],"bv":["1"]},"ew":{"R":["U"],"bw":["U"],"A":["U"],"c2":["U"],"T":["U"],"a9":[],"bv":["U"],"h":["U"],"aU":["U"]},"c4":{"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"]},"l0":{"ew":[],"R":["U"],"bw":["U"],"A":["U"],"c2":["U"],"T":["U"],"a9":[],"bv":["U"],"h":["U"],"aU":["U"],"az":[],"R.E":"U","aU.E":"U"},"l1":{"ew":[],"R":["U"],"bw":["U"],"A":["U"],"c2":["U"],"T":["U"],"a9":[],"bv":["U"],"h":["U"],"aU":["U"],"az":[],"R.E":"U","aU.E":"U"},"l2":{"c4":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"iC":{"c4":[],"kL":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"l3":{"c4":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"iE":{"c4":[],"Cj":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"iF":{"c4":[],"um":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"iG":{"c4":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"fk":{"c4":[],"e4":[],"R":["d"],"bw":["d"],"A":["d"],"c2":["d"],"T":["d"],"a9":[],"bv":["d"],"h":["d"],"aU":["d"],"az":[],"R.E":"d","aU.E":"d"},"m9":{"aF":[]},"hA":{"e2":[],"aF":[]},"jr":{"lG":[]},"eb":{"al":["1"]},"de":{"h":["1"],"h.E":"1"},"bV":{"aF":[]},"cM":{"lX":["1"]},"am":{"b9":["1"]},"jB":{"Ev":[]},"mi":{"jB":[],"Ev":[]},"dc":{"cI":["1"],"E1":["1"],"d6":["1"],"T":["1"],"h":["1"]},"fB":{"al":["1"]},"R":{"A":["1"],"T":["1"],"h":["1"]},"a7":{"ae":["1","2"]},"jd":{"T":["2"],"h":["2"],"h.E":"2"},"je":{"al":["2"]},"h9":{"ae":["1","2"]},"e5":{"hB":["1","2"],"h9":["1","2"],"jw":["1","2"],"ae":["1","2"]},"cI":{"d6":["1"],"T":["1"],"h":["1"]},"jp":{"cI":["1"],"d6":["1"],"T":["1"],"h":["1"]},"j4":{"cI":["1"],"mu":["1"],"d6":["1"],"T":["1"],"h":["1"]},"md":{"a7":["e","@"],"ae":["e","@"],"a7.K":"e","a7.V":"@"},"me":{"a4":["e"],"T":["e"],"h":["e"],"h.E":"e","a4.E":"e"},"fL":{"bf":["A<d>","e"],"bf.S":"A<d>"},"hX":{"b7":["A<d>","e"],"b7.T":"e"},"jZ":{"b7":["e","A<d>"],"b7.T":"A<d>"},"be":{"b5":["A<d>"]},"ku":{"bf":["e","A<d>"]},"ir":{"aF":[]},"kT":{"aF":[]},"kS":{"bf":["a0?","e"],"bf.S":"a0?"},"kV":{"b7":["a0?","e"],"b7.T":"e"},"kU":{"b7":["e","a0?"],"b7.T":"a0?"},"lM":{"bf":["e","A<d>"],"bf.S":"e"},"lN":{"b7":["e","A<d>"],"b7.T":"A<d>"},"j6":{"b7":["A<d>","e"],"b7.T":"e"},"hY":{"aZ":["hY"]},"a8":{"aZ":["a8"]},"U":{"bH":[],"aZ":["bH"]},"ck":{"aZ":["ck"]},"d":{"bH":[],"aZ":["bH"]},"A":{"T":["1"],"h":["1"]},"bH":{"aZ":["bH"]},"tK":{"fm":[]},"iR":{"cD":[]},"d6":{"T":["1"],"h":["1"]},"e":{"aZ":["e"],"fm":[]},"aR":{"hY":[],"aZ":["hY"]},"m8":{"Z":[]},"jW":{"aF":[]},"e2":{"aF":[]},"ce":{"aF":[]},"hg":{"aF":[]},"kG":{"aF":[]},"j5":{"aF":[]},"lJ":{"aF":[]},"dW":{"aF":[]},"ke":{"aF":[]},"l9":{"aF":[]},"j_":{"aF":[]},"kM":{"aF":[]},"mr":{"eG":[]},"bF":{"Jm":[]},"jy":{"un":[]},"mc":{"J8":[]},"IG":{"A":["d"],"T":["d"],"h":["d"]},"e4":{"A":["d"],"T":["d"],"h":["d"]},"Jr":{"A":["d"],"T":["d"],"h":["d"]},"IF":{"A":["d"],"T":["d"],"h":["d"]},"Cj":{"A":["d"],"T":["d"],"h":["d"]},"kL":{"A":["d"],"T":["d"],"h":["d"]},"um":{"A":["d"],"T":["d"],"h":["d"]},"IA":{"A":["U"],"T":["U"],"h":["U"]},"IB":{"A":["U"],"T":["U"],"h":["U"]},"kq":{"b5":["cj"]},"h_":{"b7":["A<d>","cj"]},"kC":{"be":[],"b5":["A<d>"]},"mj":{"h_":[],"b7":["A<d>","cj"],"b7.T":"cj"},"ml":{"be":[],"b5":["A<d>"]},"mk":{"be":[],"b5":["A<d>"]},"mm":{"h_":[],"b7":["A<d>","cj"],"b7.T":"cj"},"mn":{"be":[],"b5":["A<d>"]},"lv":{"be":[],"b5":["A<d>"]},"k1":{"f_":[]},"k2":{"ic":[]},"k5":{"fN":[],"cy":[]},"k6":{"d7":[],"fN":[],"cy":[]},"k3":{"eo":[],"d3":[]},"hZ":{"cy":[],"d3":[]},"eo":{"d3":[]},"eE":{"cy":[]},"d7":{"cy":[]},"kD":{"be":[],"b5":["A<d>"]},"mb":{"be":[],"b5":["A<d>"]},"is":{"h5":[]},"cC":{"be":[],"b5":["A<d>"]},"mg":{"cT":[],"cC":[],"be":[],"b5":["A<d>"]},"bp":{"hj":[]},"bs":{"R":["d"],"A":["d"],"T":["d"],"h":["d"],"R.E":"d"},"Cf":{"h5":[]},"d8":{"is":[],"Cf":[],"h5":[]},"bE":{"lj":[],"aZ":["bE"]},"la":{"b5":["cj"]},"lb":{"f6":[],"be":[],"b5":["A<d>"]},"kh":{"f_":[]},"km":{"d3":[]},"fT":{"Z":[]},"f5":{"cy":[],"d3":[]},"k_":{"f6":[],"cT":[],"cC":[],"be":[],"b5":["A<d>"]},"f6":{"be":[],"b5":["A<d>"]},"cT":{"cC":[],"be":[],"b5":["A<d>"]},"kk":{"ic":[]},"i6":{"eo":[],"d3":[]},"m1":{"cT":[],"cC":[],"be":[],"b5":["A<d>"]},"i8":{"cy":[]},"m3":{"f6":[],"be":[],"b5":["A<d>"]},"kn":{"d7":[],"cy":[]},"P":{"aZ":["P"]},"hz":{"Z":[]},"cE":{"aZ":["cE"]},"cd":{"Z":[]},"dk":{"Z":[]},"eH":{"Z":[]},"eJ":{"Z":[]},"fs":{"Z":[]},"dX":{"Z":[]},"dw":{"Z":[]},"cf":{"Z":[]},"ej":{"Z":[]},"eK":{"Z":[]},"ek":{"Z":[]},"bX":{"Z":[]},"dF":{"Z":[]},"cY":{"Z":[]},"eA":{"Z":[]},"eB":{"Z":[]},"dz":{"Z":[]},"dA":{"Z":[]},"fa":{"Z":[]},"dl":{"Z":[]},"cS":{"Z":[]},"cz":{"Z":[]},"dD":{"Z":[]},"mh":{"af":["e","V"],"a7":["e","V"],"ae":["e","V"],"a7.K":"e","a7.V":"V","af.K":"e","af.V":"V"},"hh":{"Z":[]},"bg":{"Z":[]},"bY":{"Z":[]},"cV":{"Z":[]},"iQ":{"Z":[]},"bt":{"Z":[]},"af":{"a7":["1","2"],"ae":["1","2"],"a7.K":"1","a7.V":"2","af.K":"1","af.V":"2"},"j2":{"cI":["1"],"d6":["1"],"T":["1"],"h":["1"]},"cm":{"Z":[]},"el":{"ex":[]},"fP":{"ex":[]},"iK":{"ex":[]},"iJ":{"ex":[]},"ib":{"ex":[]},"dL":{"Z":[]},"ft":{"Z":[]},"d4":{"Z":[]},"z":{"aZ":["z"]},"bR":{"Z":[]},"bM":{"Z":[]},"bD":{"Z":[]},"d5":{"Z":[]},"aK":{"Z":[]},"aa":{"Z":[]},"ez":{"Z":[]},"cp":{"Z":[]},"ht":{"Z":[]},"cL":{"Z":[]},"aQ":{"Z":[]},"hd":{"cH":[]},"iM":{"cH":[]},"hi":{"cH":[]},"c7":{"Z":[]},"fv":{"Z":[]},"dZ":{"Z":[]},"co":{"Z":[]},"eC":{"Z":[]},"kH":{"Ik":[]},"bc":{"Z":[]},"fY":{"Jp":[]},"fi":{"Z":[]},"h0":{"Z":[]},"ey":{"Z":[]},"eh":{"Z":[]},"iO":{"he":[]},"iN":{"he":[]},"e1":{"Z":[]},"e0":{"Z":[]}}'))
A.K3(v.typeUniverse,JSON.parse('{"hr":1,"jC":2,"bw":1,"jp":1,"jx":1,"lw":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",z:"Nothing to change: it is already as asked.",F:"Sent. The phone adds the loan on its next sync.",L:"Sent. The phone applies it on its next sync.",m:"Sent. The phone removes it on its next sync.",p:"This browser cannot keep the page joined.",V:"newKeyPairFromSeed() is unsupported by this algorithm",y:"one of them is already filed, paired or linked",M:"only the last 4 characters of a number are kept",s:"the expense is filed under a spending category of "}
var t=(function rtii(){var s=A.a_
return{b:s("br"),ov:s("di"),i6:s("eh"),bL:s("dj"),jN:s("cd"),V:s("aY"),vi:s("dk"),dd:s("dl"),Fq:s("bV"),D:s("fL"),d6:s("ej"),Fb:s("dm"),e4:s("ek"),Cv:s("k0"),ta:s("bC"),la:s("i_"),kc:s("dn"),l2:s("i0"),h:s("z"),ok:s("cg"),eY:s("cw"),G:s("bK"),zC:s("dq"),xr:s("ka"),o4:s("bW"),nl:s("dr"),E:s("ch"),hO:s("aZ<@>"),ca:s("kf"),hD:s("b_<e,e>"),hq:s("b_<e,d>"),iF:s("cR<e>"),w0:s("cS"),eV:s("ci"),kk:s("cT"),zG:s("a8"),k5:s("P"),rU:s("ia"),g7:s("cV"),CU:s("cx"),lA:s("fW"),il:s("bM"),l9:s("cW"),xw:s("du"),eP:s("ck"),he:s("T<@>"),w5:s("cX"),yt:s("aF"),eG:s("dw"),xH:s("ij"),pp:s("ky"),Fj:s("bn"),BO:s("dx"),uo:s("b9<e?>"),AI:s("b9<e?>()"),U:s("b9<~>()"),ip:s("cl<cd,e>"),pA:s("cZ<cf>"),rv:s("c1"),vS:s("dy"),cE:s("il"),jf:s("dz"),AK:s("dB"),yO:s("en"),aB:s("kI"),nq:s("bX"),wR:s("fb<U>"),hS:s("cn"),p0:s("fc"),ud:s("ep"),lj:s("dD"),Ap:s("fd"),gy:s("cz"),eX:s("eq"),mp:s("dE"),qn:s("dG"),oJ:s("h<U>"),tY:s("h<@>"),uI:s("h<d>"),Q:s("u<br>"),uD:s("u<di>"),eF:s("u<dj>"),kd:s("u<aY>"),Dy:s("u<jV>"),nK:s("u<jY>"),lt:s("u<k7>"),cs:s("u<bC>"),gI:s("u<dn>"),F:s("u<z>"),eR:s("u<cg>"),nt:s("u<k8>"),sA:s("u<cw>"),Dz:s("u<dq>"),mH:s("u<bW>"),h5:s("u<dr>"),Aq:s("u<ch>"),au:s("u<ci>"),xI:s("u<fS>"),yk:s("u<cx>"),xz:s("u<fW>"),CP:s("u<kr>"),eO:s("u<fX>"),m1:s("u<du>"),jL:s("u<em>"),kW:s("u<ij>"),ic:s("u<bN>"),dZ:s("u<bn>"),y0:s("u<c1>"),lN:s("u<dy>"),zA:s("u<il>"),Ew:s("u<dB>"),jw:s("u<kz>"),oT:s("u<d_>"),DA:s("u<kJ>"),ew:s("u<fd>"),t7:s("u<dE>"),aW:s("u<dG>"),p9:s("u<h1>"),sL:s("u<a9>"),aV:s("u<fg>"),k1:s("u<fh>"),e:s("u<t>"),nB:s("u<aa>"),Z:s("u<b2>"),AM:s("u<dJ>"),tZ:s("u<A<e>>"),uw:s("u<A<d>>"),lI:s("u<dK>"),q0:s("u<h7>"),bk:s("u<ae<e,a0?>>"),lz:s("u<iA>"),g:s("u<q>"),fB:s("u<dM>"),aH:s("u<hb>"),Fn:s("u<l_>"),A:s("u<V>"),dQ:s("u<bg>"),sp:s("u<l4>"),cp:s("u<l7>"),Dk:s("u<l8>"),Y:s("u<ai>"),ey:s("u<fn>"),uE:s("u<fo>"),rA:s("u<bo>"),ev:s("u<lg>"),yT:s("u<iP>"),tJ:s("u<dN>"),EQ:s("u<dO>"),hy:s("u<+(z,z)>"),AW:s("u<+(e,A<U>)>"),I:s("u<+(e,e)>"),qM:s("u<+(d,V)>"),wt:s("u<+(d,e)>"),l7:s("u<+month,year(d,d)>"),hK:s("u<+(V,V,bR)>"),Dg:s("u<+(d,d,bR)>"),sG:s("u<+(e,e,e,e?)>"),xj:s("u<+complete,month,spent,year(j,d,q,d)>"),kY:s("u<+(d,d,j,ae<e?,q>)>"),Ai:s("u<+(d,d,z,j,V?)>"),sx:s("u<lk>"),zM:s("u<dQ>"),cM:s("u<ll>"),be:s("u<lm>"),D6:s("u<iT>"),os:s("u<lp>"),wp:s("u<cF>"),M:s("u<W>"),qH:s("u<dR>"),j2:s("u<fq>"),kz:s("u<bb>"),vV:s("u<dS>"),st:s("u<dT>"),sv:s("u<ls>"),EA:s("u<iX>"),EP:s("u<lt>"),mt:s("u<lu>"),mu:s("u<cq>"),bD:s("u<d9>"),vk:s("u<hm>"),g0:s("u<dV>"),Ev:s("u<ho>"),Ec:s("u<cJ>"),n:s("u<c8>"),CL:s("u<lA>"),s:s("u<e>"),e3:s("u<lD>"),wF:s("u<lH>"),nS:s("u<lI>"),eE:s("u<e4>"),DO:s("u<da>"),oc:s("u<bz>"),C7:s("u<hs>"),sj:s("u<j>"),zp:s("u<U>"),zz:s("u<@>"),t:s("u<d>"),qt:s("u<ik?>"),dr:s("u<q?>"),q:s("u<e?>"),wG:s("u<U?>"),rw:s("bv<@>"),Be:s("h2"),m:s("a9"),g9:s("dI"),Eh:s("c2<@>"),nm:s("iq"),io:s("fg"),pj:s("it<d8,bE>"),ch:s("d0"),k2:s("t"),P:s("aa"),u:s("b2"),xt:s("iu"),Ft:s("A<aY>"),aF:s("A<z>"),vG:s("A<ae<e,a0?>>"),r9:s("A<q>"),C:s("A<V>"),tU:s("A<ai>"),iX:s("A<ai>(h6,e,d,a8)"),to:s("A<bo>"),DX:s("A<+(e,e)>"),sO:s("A<+(d,V)>"),BU:s("A<+(e,e,e,e?)>"),Bz:s("A<W>"),zo:s("A<cq>"),Fu:s("A<d9>"),nd:s("A<ho>"),a:s("A<e>"),j:s("A<@>"),L:s("A<d>"),iP:s("A<e?>"),pt:s("dK"),gd:s("dL"),Ep:s("d2"),sd:s("cC"),zc:s("iy"),qo:s("d4"),ub:s("ap<e,d0>"),AT:s("ap<e,e>"),dK:s("ap<e,d>"),nF:s("ap<e?,A<q>>"),Ez:s("ae<e,bK>"),Cu:s("ae<e,b2>"),Dm:s("ae<e,V>"),sw:s("ae<e,bt>"),yz:s("ae<e,e>"),f:s("ae<@,@>"),J:s("ae<e,a0?>"),mE:s("ae<a0?,a0?>"),zK:s("ah<e,e>"),wL:s("ah<e,d>"),FC:s("ah<d,U>"),BA:s("ah<e?,e>"),lQ:s("cD"),o:s("ha"),B:s("q"),aD:s("q(bC)"),wg:s("dM"),wy:s("hb"),W:s("V"),y6:s("eu"),v_:s("bg"),i:s("hc"),Eg:s("ew"),Ag:s("c4"),iT:s("fk"),kx:s("fl<e>"),aU:s("bh"),K:s("a0"),_:s("ai"),eM:s("he"),l3:s("hf"),cL:s("fm"),fN:s("bY"),pL:s("fn"),cZ:s("le"),AB:s("bo"),mZ:s("eA"),cl:s("iP"),t_:s("eB"),gv:s("bD"),tW:s("dN"),C5:s("d5"),y3:s("dO"),Fx:s("cE"),op:s("Om"),ep:s("+()"),sH:s("+(z,z)"),aa:s("+(z,hn?)"),qD:s("+end,loans(z,A<ho>)"),sF:s("+(bg,e?)"),g5:s("+(e,dl)"),Dt:s("+(e,z)"),jg:s("+(e,A<U>)"),z9:s("+(e,c7)"),p_:s("+(e,e)"),uB:s("+(d,V)"),jr:s("+(d,e)"),l1:s("+month,year(d,d)"),wD:s("+(a0?,a0?)"),ct:s("+(V,V,bR)"),Bf:s("+accountId,from,to(e,z,z)"),bY:s("+(e,cV,q)"),xG:s("+(e,e,cV)"),ER:s("+(e,e,e)"),d3:s("+(e,e,e?)"),xC:s("+(d,q,d6<e>)"),Ei:s("+(d,d,bR)"),Cw:s("+(e,e,e,cV)"),jm:s("+(e,e,e,e?)"),hf:s("+complete,month,spent,year(j,d,q,d)"),nr:s("+(d,d,j,ae<e?,q>)"),nX:s("+date,eventId,hash,n,removed(z,e,e,d,j)"),fK:s("co"),ez:s("iR"),iJ:s("dQ"),xM:s("lo"),hn:s("cp"),q6:s("aP<e>"),gb:s("aP<d>"),t5:s("cF"),k:s("W"),dw:s("dR"),CW:s("aQ"),fC:s("fq"),jF:s("lq"),cy:s("eC"),R:s("bb"),cT:s("cH"),di:s("dS"),kG:s("dT"),mg:s("iV"),yX:s("eD"),c:s("hj"),A0:s("bp"),aA:s("iX"),dO:s("d6<e>"),bu:s("fr"),gc:s("hl"),gZ:s("Cf"),jC:s("d8"),qC:s("bE"),uC:s("b5<cj>"),c5:s("cq"),in:s("c7"),Ba:s("ly"),d:s("bt"),qp:s("d9"),l:s("eG"),sN:s("dV"),qe:s("eH"),DV:s("lz"),AD:s("eI"),Bu:s("dX"),A9:s("dY"),nT:s("fs"),iL:s("ft"),dh:s("cJ"),v:s("c8"),u4:s("eJ"),N:s("e"),j3:s("e()"),r:s("e(cD)"),ff:s("e(e)"),tx:s("e(e?)"),tD:s("hq"),lG:s("eK"),aT:s("fv"),EL:s("lE"),hz:s("lG"),zs:s("af<e,br>"),l4:s("af<e,ej>"),rE:s("af<e,bK>"),DF:s("af<e,c1>"),hl:s("af<e,fc>"),F4:s("af<e,ha>"),BK:s("af<e,eu>"),AJ:s("af<e,bb>"),dB:s("af<+(e,z),eI>"),n7:s("af<e,A<bo>>"),ur:s("j2<e>"),sg:s("az"),oo:s("cr(z?)"),ib:s("e0"),qx:s("e1"),bs:s("e2"),Dd:s("um"),p:s("e4"),qF:s("eL"),iB:s("e5<e,q>"),tB:s("da"),ya:s("un"),xN:s("cL"),qK:s("n<br>"),gF:s("n<aY>"),rb:s("n<ch>"),km:s("n<bX>"),rx:s("n<aa>"),yL:s("n<V>"),dN:s("n<+complete,month,spent,year(j,d,q,d)>"),yF:s("n<+(d,d,j,ae<e?,q>)>"),o_:s("n<co>"),vL:s("n<cp>"),rK:s("n<bt>"),i0:s("n<bc>"),m5:s("N<aa>"),eT:s("j7<e>"),w:s("bz"),q9:s("db"),Ck:s("cM<a9>"),th:s("cM<@>"),le:s("cM<a0?>"),nx:s("aR"),oX:s("am<a9>"),hR:s("am<@>"),nR:s("am<a0?>"),gH:s("am<e?>"),wE:s("de<V>"),dU:s("de<+(d,d)>"),sn:s("bc"),y:s("j"),cP:s("j(br)"),vu:s("j(aY)"),qB:s("j(ch)"),wx:s("j(bX)"),Ab:s("j(aa)"),fx:s("j(V)"),bl:s("j(a0)"),nn:s("j(+complete,month,spent,year(j,d,q,d))"),jb:s("j(+(d,d,j,ae<e?,q>))"),AH:s("j(co)"),rt:s("j(cp)"),ns:s("j(bt)"),aX:s("j(bc)"),pR:s("U"),oe:s("U(d)"),z:s("@"),pF:s("@()"),h_:s("@(a0)"),nW:s("@(a0,eG)"),S:s("d"),aY:s("d(e)"),tF:s("z?"),eZ:s("b9<bh>?"),uh:s("a9?"),jS:s("A<@>?"),ks:s("A<d>?"),yq:s("ae<@,@>?"),c_:s("ae<e,a0?>?"),X:s("a0?"),T:s("e?"),tj:s("e(cD)?"),F5:s("e4?"),f7:s("e6<@,@>?"),Af:s("mf?"),k7:s("j?"),u6:s("U?"),lo:s("d?"),lF:s("d(e)?"),ht:s("z?()?"),b0:s("e?()?"),s7:s("bH?"),x:s("bH"),H:s("~"),O:s("~()"),ma:s("~(e)"),m2:s("~(e,@)"),uH:s("~(lG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.fw=J.kN.prototype
B.a=J.u.prototype
B.d=J.io.prototype
B.fy=J.h2.prototype
B.O=J.fe.prototype
B.b=J.dH.prototype
B.fz=J.dI.prototype
B.fA=J.ip.prototype
B.aC=A.iB.prototype
B.b4=A.iC.prototype
B.kU=A.iE.prototype
B.E=A.iF.prototype
B.i=A.fk.prototype
B.dZ=J.lf.prototype
B.cm=J.eL.prototype
B.bd=new A.eh("Cards",1,"cards")
B.be=new A.eh("Bank accounts",0,"bank")
B.bf=new A.eh("Loans",2,"loans")
B.M=new A.cd(0,"savings")
B.Q=new A.cd(1,"current")
B.y=new A.cd(2,"creditCard")
B.o=new A.cd(3,"loan")
B.x=new A.cd(4,"cash")
B.a7=new A.cd(5,"retirement")
B.cs=new A.dk("NRE",0,"nre")
B.ct=new A.dk("NRO",1,"nro")
B.bg=new A.dk("SRS",2,"srs")
B.ep=new A.hX(!1)
B.K=new A.fL(B.ep)
B.eq=new A.hX(!0)
B.eo=new A.fL(B.eq)
B.bh=new A.ej(0,"disputed")
B.cu=new A.ej(1,"cancelled")
B.cv=new A.cf(0,"unverified")
B.bi=new A.cf(1,"open")
B.bj=new A.cf(2,"partiallyPaid")
B.bk=new A.cf(3,"paid")
B.aF=new A.cf(4,"overdue")
B.cw=new A.cf(5,"disputed")
B.bl=new A.cf(6,"cancelled")
B.bm=new A.cf(7,"paymentNotKnown")
B.cz=new A.k5()
B.eu=new A.k3(B.cz,"SHA-256")
B.cH=new A.i9(null)
B.ev=new A.n6(null)
B.cy=new A.fb(A.MZ(),t.wR)
B.cx=new A.fb(A.N_(),t.wR)
B.B=new A.jZ()
B.ew=new A.k6()
B.nl=new A.ne()
B.cA=new A.km()
B.bn=new A.i8()
B.cB=new A.kn()
B.nm=new A.kp(A.a_("kp<0&>"))
B.cC=new A.ib()
B.bo=new A.ih(A.a_("ih<0&>"))
B.aw=new A.kv()
B.a1=new A.kv()
B.no=new A.ck(288e8)
B.q=new A.nJ()
B.np=s([3,1],t.t)
B.bp=new A.nR()
B.Y=new A.kM()
B.cD=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ex=function() {
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
B.eC=function(getTagFallback) {
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
B.ey=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eB=function(hooks) {
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
B.eA=function(hooks) {
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
B.ez=function(hooks) {
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
B.cE=function(hooks) { return hooks; }

B.z=new A.kS()
B.aG=new A.kZ(A.a_("kZ<d>"))
B.eD=new A.iK()
B.eE=new A.l9()
B.nn=new A.tI()
B.eF=new A.tU()
B.t=new A.tY()
B.eG=new A.u6()
B.eH=new A.ug()
B.R=new A.lM()
B.F=new A.lN()
B.S=new A.uI()
B.W=new A.mi()
B.aH=new A.mj()
B.eI=new A.mm()
B.aI=new A.mr()
B.eO=new A.fT(0,"argon2d")
B.cF=new A.fT(1,"argon2i")
B.bq=new A.fT(2,"argon2id")
B.cG=new A.f5(64)
B.eP=new A.i6(B.bn)
B.m=new A.cV(0,"inflow")
B.k=new A.cV(1,"outflow")
B.nu=s(["document"],t.s)
B.br=new A.bM("Document",null,9,"other")
B.nJ=s(["work","permit","wp"],t.s)
B.cI=new A.bM("Work permit",!0,4,"workPermit")
B.eY=new A.ck(0)
B.eZ=new A.ck(1)
B.f_=new A.ck(2e7)
B.f0=new A.ck(6e7)
B.j=new A.aK(0,"text")
B.a2=new A.aK(1,"long")
B.bs=new A.aK(10,"people")
B.a3=new A.aK(11,"account")
B.af=new A.aK(12,"book")
B.C=new A.aK(13,"ref")
B.aJ=new A.aK(14,"policy")
B.bt=new A.aK(15,"document")
B.ao=new A.aK(16,"movement")
B.bu=new A.aK(17,"invoice")
B.aK=new A.aK(18,"file")
B.a8=new A.aK(19,"last4")
B.r=new A.aK(2,"date")
B.Z=new A.aK(20,"flag")
B.ap=new A.aK(21,"address")
B.aL=new A.aK(22,"percent")
B.bv=new A.aK(23,"ifsc")
B.aM=new A.aK(3,"time")
B.aq=new A.aK(4,"month")
B.u=new A.aK(5,"money")
B.ax=new A.aK(6,"decimal")
B.I=new A.aK(7,"integer")
B.N=new A.aK(8,"choice")
B.ar=new A.aK(9,"person")
B.f3=new A.cY(0,"giro")
B.f4=new A.cY(1,"cardBill")
B.cJ=new A.cY(2,"loan")
B.f5=new A.cY(3,"income")
B.f6=new A.cY(4,"payment")
B.cK=new A.cY(5,"move")
B.f7=new A.cY(6,"premium")
B.f8=new A.b8("not a sender id",null,null)
B.f9=new A.b8("format",null,null)
B.fa=new A.b8("emailSha256 is not a SHA-256",null,null)
B.fb=new A.b8("not a sender address",null,null)
B.fc=new A.fa(0,"deducted")
B.fd=new A.fa(1,"owner")
B.fe=new A.fa(2,"lastTime")
B.ff=new A.fa(3,"unknown")
B.bw=new A.dz(0,"paid")
B.bx=new A.dz(1,"failed")
B.cL=new A.dz(2,"none")
B.cM=new A.dz(3,"clear")
B.fg=new A.dA(0,"planned")
B.cN=new A.dA(1,"seen")
B.cO=new A.dA(2,"paidOwner")
B.fh=new A.dA(3,"failed")
B.fi=new A.dA(4,"unconfirmed")
B.cP=new A.dA(5,"none")
B.by=new A.h0(0,"critical")
B.cQ=new A.h0(1,"action")
B.cR=new A.h0(2,"info")
B.cS=new A.bX(3,"document")
B.cT=new A.bX(4,"tdsCertificate")
B.cU=new A.cm(0,"scheduled")
B.cV=new A.cm(1,"dueSoon")
B.cW=new A.cm(2,"dueToday")
B.cX=new A.cm(3,"awaitingStatement")
B.ay=new A.cm(4,"paid")
B.bz=new A.cm(5,"partlyPaid")
B.bA=new A.cm(6,"overdue")
B.aN=new A.cm(7,"confirmedByYou")
B.cY=new A.dF(0,"unplaced")
B.fx=new A.dF(1,"unpaid")
B.bB=new A.dF(2,"partlyPaid")
B.bC=new A.dF(3,"paid")
B.cZ=new A.dF(4,"overpaid")
B.d_=new A.dF(5,"mismatch")
B.fB=new A.kU(null)
B.fC=new A.kV(null)
B.T=new A.it("ed25519",t.pj)
B.U=new A.it("x25519",t.pj)
B.aO=new A.fi(0,"plain")
B.fD=new A.fi(1,"good")
B.fE=new A.fi(2,"warn")
B.d0=new A.fi(3,"bad")
B.c=s([],t.s)
B.dF=s(["company"],t.s)
B.aQ=new A.t("bookId","Company",B.af,!0,B.c,null,null,null,B.dF,null)
B.d7=new A.t("name","Name on the invoice",B.j,!0,B.c,null,null,null,B.c,null)
B.d6=new A.t("address","Address",B.ap,!0,B.c,null,null,null,B.c,null)
B.iY=new A.t("uenLast4","UEN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.ix=new A.t("gstRegistered","GST registered",B.Z,!1,B.c,null,null,null,B.c,null)
B.fH=new A.t("gstRegLast4","GST registration number, last 4",B.a8,!1,B.c,null,null,null,B.c,null)
B.aP=new A.t("seriesId","Invoice series",B.C,!0,B.c,"rentSeries",null,null,B.c,null)
B.hO=new A.t("creditSeriesId","Credit note series",B.C,!1,B.c,"rentSeries",null,null,B.c,"The invoice series when left empty")
B.iQ=new A.t("accountId","Paid into",B.a3,!0,B.c,null,null,null,B.c,null)
B.hs=new A.t("paymentDays","Payment due after (days)",B.I,!1,B.c,null,0,365,B.c,"30 when left empty")
B.fS=new A.t("payNow","Print a PayNow QR (to the UEN)",B.Z,!1,B.c,null,null,null,B.c,null)
B.iO=new A.t("footer","Note on every invoice",B.a2,!1,B.c,null,null,null,B.c,null)
B.jO=s([B.aQ,B.d7,B.d6,B.iY,B.ix,B.fH,B.aP,B.hO,B.iQ,B.hs,B.fS,B.iO],t.e)
B.ah=new A.aa("Company invoice issuer",B.jO,24,"companyIssuer")
B.h1=new A.t("destination","Destination",B.j,!0,B.c,null,null,null,B.c,null)
B.iy=new A.t("departs","Leaving on",B.r,!0,B.c,null,null,null,B.c,null)
B.hd=new A.t("returns","Back on",B.r,!0,B.c,null,null,null,B.c,null)
B.fQ=new A.t("travellers","Travellers",B.bs,!0,B.c,null,null,null,B.c,null)
B.d1=new A.t("fromEvent","From the calendar",B.j,!1,B.c,null,null,null,B.c,null)
B.ag=new A.t("file","Document",B.aK,!1,B.c,null,null,null,B.c,null)
B.k7=s([B.h1,B.iy,B.hd,B.fQ,B.d1,B.ag],t.e)
B.df=new A.aa("Trip",B.k7,3,"trip")
B.iP=new A.t("loanId","Loan",B.a3,!0,B.c,null,null,null,B.c,null)
B.h6=new A.t("due","Due",B.r,!0,B.c,null,null,null,B.c,null)
B.dd=new A.t("on","On",B.r,!0,B.c,null,null,null,B.c,null)
B.k5=s([B.iP,B.h6,B.dd],t.e)
B.bH=new A.aa("Instalment you paid",B.k5,31,"loanInstalmentConfirm")
B.hF=new A.t("name","Name",B.j,!0,B.c,null,null,null,B.c,null)
B.ik=new A.t("attention","Attention",B.j,!1,B.c,null,null,null,B.c,null)
B.iE=new A.t("paymentDays","Payment due after (days)",B.I,!1,B.c,null,0,365,B.c,null)
B.jF=s([B.aQ,B.hF,B.d6,B.ik,B.iE],t.e)
B.a4=new A.aa("Customer",B.jF,25,"customer")
B.i0=new A.t("year","Year",B.I,!0,B.c,null,2000,2100,B.c,null)
B.hY=new A.t("employee","Employee share",B.u,!0,B.c,null,null,null,B.c,null)
B.hZ=new A.t("employer","Employer share",B.u,!0,B.c,null,null,null,B.c,null)
B.hk=new A.t("source","From",B.j,!0,B.c,null,null,null,B.c,"The CPF statement")
B.j5=s([B.i0,B.hY,B.hZ,B.hk],t.e)
B.dg=new A.aa("CPF contributions",B.j5,11,"cpfYear")
B.d2=new A.t("customerId","Customer",B.C,!0,B.c,"customer",null,null,B.c,null)
B.bD=new A.t("date","Invoice date",B.r,!0,B.c,null,null,null,B.c,null)
B.hK=new A.t("reference","Customer reference",B.j,!1,B.c,null,null,null,B.c,"Like a PO number")
B.d3=new A.t("note","Note",B.a2,!1,B.c,null,null,null,B.c,null)
B.hv=new A.t("currency","Currency",B.j,!1,B.c,null,null,null,B.c,"SGD when left empty; like USD")
B.fL=new A.t("sgdRate","S$ for 1 unit of it",B.ax,!1,B.c,null,null,null,B.c,"For a tax invoice not in SGD, like 1.3412")
B.kw=s([B.aQ,B.d2,B.bD,B.hK,B.d3,B.hv,B.fL],t.e)
B.a5=new A.aa("Invoice draft",B.kw,26,"invoiceDraft")
B.d8=new A.t("title","What",B.j,!0,B.c,null,null,null,B.c,null)
B.az=new A.t("date","Date",B.r,!0,B.c,null,null,null,B.c,null)
B.bF=new A.t("time","Time",B.aM,!1,B.c,null,null,null,B.c,"HH:MM")
B.kh=s(["on-the-day","1-day-before","2-days-before","1-week-before"],t.s)
B.fO=new A.t("remind","Remind me",B.N,!1,B.kh,null,null,null,B.c,null)
B.jU=s([B.d8,B.az,B.bF,B.d3,B.fO],t.e)
B.dh=new A.aa("Event",B.jU,17,"event")
B.iV=new A.t("invoiceId","Invoice",B.bu,!0,B.c,null,null,null,B.c,null)
B.hx=new A.t("file","Document",B.aK,!0,B.c,null,null,null,B.c,null)
B.kA=s([B.iV,B.hx],t.e)
B.di=new A.aa("Invoice document",B.kA,2,"invoiceFile")
B.fT=new A.t("personId","Helper",B.ar,!0,B.c,null,null,null,B.c,null)
B.he=new A.t("permitId","Work permit",B.bt,!1,B.c,null,null,null,B.c,null)
B.hw=new A.t("renewalDate","Permit renewal",B.r,!1,B.c,null,null,null,B.c,null)
B.hT=new A.t("medicalDue","Medical examination due",B.r,!1,B.c,null,null,null,B.c,null)
B.h7=new A.t("contractEnds","Contract ends",B.r,!1,B.c,null,null,null,B.c,null)
B.id=new A.t("source","Dates from",B.j,!1,B.c,null,null,null,B.c,"The permit, policy or MOM notice")
B.k2=s([B.fT,B.he,B.hw,B.hT,B.h7,B.id],t.e)
B.dj=new A.aa("Helper",B.k2,8,"helper")
B.bE=new A.t("tenancyId","Tenancy",B.C,!0,B.c,"tenancy",null,null,B.c,null)
B.is=new A.t("legalName","Tenant's legal name",B.j,!0,B.c,null,null,null,B.c,null)
B.i5=new A.t("address","Tenant's address",B.ap,!0,B.c,null,null,null,B.c,null)
B.iI=new A.t("gstinLast4","Tenant's GSTIN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.iG=new A.t("placeOfSupply","Place of supply",B.j,!0,B.c,null,null,null,B.c,'Like "Tamil Nadu (33)"')
B.hG=new A.t("service","Service name",B.j,!0,B.c,null,null,null,B.c,'Like "Rent of Example Plaza"')
B.fV=new A.t("sac","SAC",B.I,!1,B.c,null,99e4,999999,B.c,"997212 when left empty")
B.ir=new A.t("tdsPercent","TDS the tenant deducts (%)",B.aL,!1,B.c,null,null,null,B.c,"10 when left empty")
B.jJ=s(["1","2","3"],t.s)
B.i1=new A.t("layout","Layout",B.N,!0,B.jJ,null,null,null,B.c,null)
B.iU=new A.t("accountId","Rent paid into",B.a3,!0,B.c,null,null,null,B.c,null)
B.ih=new A.t("ifsc","IFSC",B.bv,!0,B.c,null,null,null,B.c,null)
B.iC=new A.t("accountNote","After the account number",B.j,!1,B.c,null,null,null,B.c,"Like NRO")
B.hI=new A.t("invoiceDay","Invoices dated on day",B.I,!1,B.c,null,1,31,B.c,null)
B.j0=new A.t("datedMonthBefore","Dated in the month before",B.Z,!1,B.c,null,null,null,B.c,null)
B.fJ=new A.t("workingDay","Moved to the nearest working day",B.Z,!1,B.c,null,null,null,B.c,null)
B.k1=s([B.bE,B.is,B.i5,B.iI,B.iG,B.hG,B.fV,B.ir,B.i1,B.aP,B.iU,B.ih,B.iC,B.hI,B.j0,B.fJ],t.e)
B.aR=new A.aa("Invoicing details",B.k1,20,"tenancyBilling")
B.fR=new A.t("draftId","Draft",B.C,!0,B.c,"invoiceDraft",null,null,B.c,null)
B.hp=new A.t("description","Description",B.a2,!0,B.c,null,null,null,B.c,null)
B.iR=new A.t("quantity","Quantity",B.ax,!0,B.c,null,null,null,B.c,null)
B.hn=new A.t("unitPrice","Unit price",B.u,!0,B.c,null,null,null,B.c,null)
B.jD=s(["standard","zero-rated"],t.s)
B.iq=new A.t("gst","GST",B.N,!1,B.jD,null,null,null,B.c,"Standard when left empty")
B.jr=s([B.fR,B.hp,B.iR,B.hn,B.iq],t.e)
B.as=new A.aa("Invoice line",B.jr,27,"invoiceDraftLine")
B.bG=new A.t("personId","For",B.ar,!0,B.c,null,null,null,B.c,null)
B.fU=new A.t("provider","Clinic or hospital",B.j,!0,B.c,null,null,null,B.c,null)
B.hB=new A.t("total","Bill total",B.u,!0,B.c,null,null,null,B.c,null)
B.dc=new A.t("medisave","Paid by MediSave",B.u,!1,B.c,null,null,null,B.c,null)
B.iN=new A.t("insurance","Paid by insurance",B.u,!1,B.c,null,null,null,B.c,null)
B.iB=new A.t("movementId","Card or cash transaction",B.ao,!1,B.c,null,null,null,B.c,null)
B.iH=new A.t("policyId","Policy",B.aJ,!1,B.c,null,null,null,B.c,null)
B.j8=s([B.bG,B.az,B.fU,B.hB,B.dc,B.iN,B.iB,B.iH,B.ag],t.e)
B.dk=new A.aa("Medical bill",B.j8,6,"medicalBill")
B.ic=new A.t("pattern","Number pattern",B.j,!0,B.c,null,null,null,B.c,"Like INV-{nnn}-{fy}")
B.hE=new A.t("startNumber","Next number",B.I,!0,B.c,null,1,999999,B.c,null)
B.j_=new A.t("yearly","Start again at 1 each April",B.Z,!1,B.c,null,null,null,B.c,null)
B.ib=new A.t("startYear","Year of the next number",B.j,!1,B.c,null,null,null,B.c,"Like 26/27")
B.kp=s([B.ic,B.hE,B.j_,B.ib],t.e)
B.a9=new A.aa("Invoice series",B.kp,19,"rentSeries")
B.kj=s(["oa","sa","ra","ma"],t.s)
B.fX=new A.t("account","CPF account",B.N,!0,B.kj,null,null,null,B.c,null)
B.ha=new A.t("amount","Amount",B.u,!0,B.c,null,null,null,B.c,null)
B.h0=new A.t("purpose","For",B.j,!0,B.c,null,null,null,B.c,null)
B.jz=s([B.fX,B.ha,B.az,B.h0],t.e)
B.dl=new A.aa("Paid from CPF",B.jz,12,"cpfUse")
B.kn=s(["sent","gst-filed","gst-paid","gstr1-filed","gstr3b-paid","gst-itc","tds-certificate"],t.s)
B.h2=new A.t("what","What",B.N,!0,B.kn,null,null,null,B.c,null)
B.h9=new A.t("invoiceId","Invoice",B.C,!1,B.c,"rentInvoice",null,null,B.c,null)
B.ip=new A.t("tenancyId","Tenancy",B.C,!1,B.c,"tenancy",null,null,B.c,null)
B.h_=new A.t("quarter","Quarter",B.j,!1,B.c,null,null,null,B.c,null)
B.j1=new A.t("propertyId","Property",B.C,!1,B.c,"property",null,null,B.c,null)
B.iF=new A.t("month","Month",B.aq,!1,B.c,null,null,null,B.c,null)
B.hX=new A.t("reference","Reference",B.j,!1,B.c,null,null,null,B.c,null)
B.ii=new A.t("amount","Input tax credit",B.u,!1,B.c,null,null,null,B.c,null)
B.jv=s([B.h2,B.h9,B.ip,B.h_,B.j1,B.iF,B.dd,B.hX,B.ii],t.e)
B.aS=new A.aa("Rental mark",B.jv,30,"rentalMark")
B.da=new A.t("policyId","Policy",B.aJ,!0,B.c,null,null,null,B.c,null)
B.iK=new A.t("billId","Bill",B.C,!1,B.c,"medicalBill",null,null,B.c,null)
B.i8=new A.t("claimed","Claimed",B.u,!0,B.c,null,null,null,B.c,null)
B.iu=new A.t("submitted","Submitted on",B.r,!1,B.c,null,null,null,B.c,null)
B.ks=s(["preparing","submitted","approved","rejected","paid"],t.s)
B.iz=new A.t("status","Status",B.N,!0,B.ks,null,null,null,B.c,null)
B.il=new A.t("paid","Paid out",B.u,!1,B.c,null,null,null,B.c,null)
B.ia=new A.t("creditMovementId","Claim credit transaction",B.ao,!1,B.c,null,null,null,B.c,null)
B.j6=s([B.da,B.bG,B.iK,B.i8,B.iu,B.iz,B.il,B.ia,B.ag],t.e)
B.bI=new A.aa("Claim",B.j6,7,"claim")
B.hN=new A.t("name","Name",B.j,!0,B.c,null,null,null,B.c,'Like "Chennai shop"')
B.jB=s(["SG","IN"],t.s)
B.d5=new A.t("country","Country",B.N,!0,B.jB,null,null,null,B.c,null)
B.k4=s(["home","commercial","land","other"],t.s)
B.fK=new A.t("type","Type",B.N,!0,B.k4,null,null,null,B.c,null)
B.iD=new A.t("share","Your share (%)",B.I,!1,B.c,null,1,100,B.c,null)
B.i3=new A.t("purchased","Bought on",B.r,!1,B.c,null,null,null,B.c,null)
B.iZ=new A.t("loanAccountId","Loan",B.a3,!1,B.c,null,null,null,B.c,null)
B.kl=s(["property","member"],t.s)
B.iW=new A.t("bookId","Book",B.af,!1,B.c,null,null,null,B.kl,null)
B.hQ=new A.t("gstr1Day","GSTR-1 due day",B.I,!1,B.c,null,1,28,B.c,null)
B.hj=new A.t("gstr3bDay","GSTR-3B due day",B.I,!1,B.c,null,1,28,B.c,null)
B.hy=new A.t("creditSeriesId","Credit note series",B.C,!1,B.c,"rentSeries",null,null,B.c,null)
B.jo=s([B.hN,B.d5,B.fK,B.iD,B.i3,B.iZ,B.iW,B.hQ,B.hj,B.hy,B.ag],t.e)
B.aA=new A.aa("Property",B.jo,0,"property")
B.d9=new A.t("propertyId","Property",B.C,!0,B.c,"property",null,null,B.c,null)
B.hA=new A.t("address","Address and phone",B.ap,!0,B.c,null,null,null,B.c,null)
B.fF=new A.t("gstinLast4","GSTIN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.iJ=new A.t("panLast4","PAN, last 4",B.a8,!0,B.c,null,null,null,B.c,null)
B.kC=s([B.d9,B.d7,B.hA,B.fF,B.iJ],t.e)
B.aT=new A.aa("Invoice issuer",B.kC,18,"rentIssuer")
B.h3=new A.t("month","For the month",B.aq,!0,B.c,null,null,null,B.c,null)
B.js=s([B.bE,B.aP,B.h3,B.bD],t.e)
B.ai=new A.aa("Rent invoice",B.js,22,"rentInvoice")
B.hi=new A.t("invoiceId","Invoice",B.C,!0,B.c,"companyInvoice",null,null,B.c,null)
B.de=new A.t("seriesId","Credit note series",B.C,!0,B.c,"rentSeries",null,null,B.c,null)
B.d4=new A.t("date","Credit note date",B.r,!0,B.c,null,null,null,B.c,null)
B.jm=s([B.hi,B.de,B.d4],t.e)
B.aj=new A.aa("Company credit note",B.jm,29,"companyCredit")
B.ho=new A.t("bookId","Book",B.af,!0,B.c,null,null,null,B.dF,null)
B.iM=new A.t("incorporated","Incorporated on",B.r,!1,B.c,null,null,null,B.c,null)
B.fN=new A.t("last4","Registration number, last 4",B.a8,!1,B.c,null,null,null,B.c,null)
B.h5=new A.t("directors","Directors",B.j,!1,B.c,null,null,null,B.c,null)
B.jC=s([B.ho,B.d5,B.iM,B.fN,B.h5,B.ag],t.e)
B.aU=new A.aa("Company",B.jC,9,"company")
B.hf=new A.t("source","Proposed from",B.j,!0,B.c,null,null,null,B.c,null)
B.k9=s([B.d8,B.az,B.bF,B.hf],t.e)
B.dm=new A.aa("Plan item",B.k9,16,"planItem")
B.hL=new A.t("description","Description",B.j,!0,B.c,null,null,null,B.c,'Like "Common area maintenance"')
B.fI=new A.t("sac","SAC",B.I,!0,B.c,null,99e4,999999,B.c,null)
B.h4=new A.t("amount","Amount before GST",B.u,!0,B.c,null,null,null,B.c,null)
B.jx=s([B.bE,B.hL,B.fI,B.h4],t.e)
B.bJ=new A.aa("Extra invoice line",B.jx,21,"tenancyLine")
B.iw=new A.t("invoiceId","Invoice",B.C,!0,B.c,"rentInvoice",null,null,B.c,null)
B.je=s([B.iw,B.de,B.d4],t.e)
B.ak=new A.aa("Credit note",B.je,23,"rentCredit")
B.it=new A.t("tripId","Trip",B.C,!0,B.c,"trip",null,null,B.c,null)
B.h8=new A.t("movementId","Transaction",B.ao,!0,B.c,null,null,null,B.c,null)
B.hW=new A.t("attached","On the trip",B.Z,!0,B.c,null,null,null,B.c,null)
B.fP=new A.t("sgd","In SGD",B.u,!1,B.c,null,null,null,B.c,null)
B.iT=new A.t("rate","Rate",B.ax,!1,B.c,null,null,null,B.c,null)
B.kv=s([B.it,B.h8,B.hW,B.fP,B.iT],t.e)
B.dn=new A.aa("Trip line",B.kv,4,"tripLine")
B.hz=new A.t("title","What",B.j,!0,B.c,null,null,null,B.c,'Like "Dentist"')
B.hV=new A.t("place","Where",B.j,!1,B.c,null,null,null,B.c,null)
B.jc=s([B.bG,B.hz,B.az,B.bF,B.hV,B.d1],t.e)
B.dp=new A.aa("Appointment",B.jc,5,"appointment")
B.jS=s([B.aQ,B.d2,B.aP,B.bD],t.e)
B.a6=new A.aa("Company invoice",B.jS,28,"companyInvoice")
B.kb=s(["landlord","tenant"],t.s)
B.fG=new A.t("role","You are the",B.N,!0,B.kb,null,null,null,B.c,null)
B.i6=new A.t("otherParty","Other party",B.j,!0,B.c,null,null,null,B.c,null)
B.hM=new A.t("rent","Rent",B.u,!1,B.c,null,null,null,B.c,null)
B.ig=new A.t("dueDay","Rent due on day",B.I,!1,B.c,null,1,31,B.c,null)
B.fM=new A.t("deposit","Deposit",B.u,!1,B.c,null,null,null,B.c,null)
B.im=new A.t("starts","Lease starts",B.r,!1,B.c,null,null,null,B.c,null)
B.i_=new A.t("ends","Lease ends",B.r,!1,B.c,null,null,null,B.c,null)
B.jj=s([B.d9,B.fG,B.i6,B.hM,B.ig,B.fM,B.im,B.i_,B.ag],t.e)
B.at=new A.aa("Tenancy",B.jj,1,"tenancy")
B.i4=new A.t("title","Remind me to",B.j,!0,B.c,null,null,null,B.c,null)
B.fW=new A.t("anchor","From the date",B.r,!0,B.c,null,null,null,B.c,null)
B.hg=new A.t("offset","When",B.j,!0,B.c,null,null,null,B.c,'Like "1 month before"')
B.ht=new A.t("date","On",B.r,!0,B.c,null,null,null,B.c,null)
B.hl=new A.t("source","Source",B.a2,!0,B.c,null,null,null,B.c,null)
B.db=new A.t("confirmedOn","Confirmed on",B.r,!0,B.c,null,null,null,B.c,null)
B.km=s(["yearly","monthly","every-n-months","every-n-weeks"],t.s)
B.i2=new A.t("repeat","Repeats",B.N,!1,B.km,null,null,null,B.c,null)
B.i9=new A.t("every","Every how many months or weeks",B.I,!1,B.c,null,2,99,B.c,null)
B.fY=new A.t("until","Until",B.r,!1,B.c,null,null,null,B.c,null)
B.hJ=new A.t("times","How many times in all",B.I,!1,B.c,null,2,999,B.c,null)
B.k0=s([B.i4,B.fW,B.hg,B.ht,B.hl,B.db,B.i2,B.i9,B.fY,B.hJ],t.e)
B.dq=new A.aa("Reminder",B.k0,15,"ownReminder")
B.hH=new A.t("text","Fact",B.a2,!0,B.c,null,null,null,B.c,null)
B.ij=new A.t("sourceFile","From",B.j,!0,B.c,null,null,null,B.c,null)
B.iX=new A.t("span","Quote",B.a2,!1,B.c,null,null,null,B.c,null)
B.hq=new A.t("page","Page",B.I,!1,B.c,null,1,9999,B.c,null)
B.iv=new A.t("fileDate","File dated",B.r,!1,B.c,null,null,null,B.c,null)
B.iS=new A.t("asOf","True as of",B.r,!1,B.c,null,null,null,B.c,null)
B.iL=new A.t("driveFileId","Drive file",B.j,!1,B.c,null,null,null,B.c,null)
B.i7=new A.t("version","Copy",B.j,!1,B.c,null,null,null,B.c,null)
B.io=new A.t("date","Date it names",B.r,!1,B.c,null,null,null,B.c,null)
B.hc=new A.t("recordId","About",B.j,!1,B.c,null,null,null,B.c,null)
B.ku=s([B.hH,B.ij,B.iX,B.hq,B.iv,B.iS,B.db,B.iL,B.i7,B.io,B.hc],t.e)
B.bK=new A.aa("Memory",B.ku,14,"memory")
B.hS=new A.t("dueOn","Due on",B.r,!0,B.c,null,null,null,B.c,null)
B.hr=new A.t("cash","Paid in cash or card",B.u,!1,B.c,null,null,null,B.c,null)
B.hh=new A.t("movementId","Transaction",B.ao,!1,B.c,null,null,null,B.c,null)
B.k3=s([B.da,B.hS,B.hr,B.dc,B.hh],t.e)
B.aV=new A.aa("Premium paid",B.k3,13,"premiumPaid")
B.iA=new A.t("employer","Employer",B.j,!0,B.c,null,null,null,B.c,null)
B.hP=new A.t("period","Pay period",B.aq,!0,B.c,null,null,null,B.c,"YYYY-MM")
B.hU=new A.t("payDate","Pay date",B.r,!0,B.c,null,null,null,B.c,null)
B.hu=new A.t("gross","Gross pay",B.u,!1,B.c,null,null,null,B.c,null)
B.fZ=new A.t("allowances","Allowances",B.u,!1,B.c,null,null,null,B.c,null)
B.hm=new A.t("bonus","Bonus",B.u,!1,B.c,null,null,null,B.c,null)
B.hC=new A.t("employeeCpf","Employee CPF",B.u,!1,B.c,null,null,null,B.c,null)
B.hD=new A.t("employerCpf","Employer CPF",B.u,!1,B.c,null,null,null,B.c,null)
B.ie=new A.t("otherDeductions","Other deductions",B.u,!1,B.c,null,null,null,B.c,null)
B.hR=new A.t("net","Net pay",B.u,!0,B.c,null,null,null,B.c,null)
B.hb=new A.t("accountId","Paid into",B.a3,!1,B.c,null,null,null,B.c,null)
B.j2=new A.t("reader","Read by",B.j,!1,B.c,null,null,null,B.c,null)
B.kx=s([B.iA,B.hP,B.hU,B.hu,B.fZ,B.hm,B.hC,B.hD,B.ie,B.hR,B.hb,B.j2,B.ag],t.e)
B.bL=new A.aa("Payslip",B.kx,10,"payslip")
B.dr=s([1],t.t)
B.ce=new A.dX(0,"monthly")
B.cf=new A.dX(1,"quarterly")
B.cg=new A.dX(2,"halfYearly")
B.ch=new A.dX(3,"yearly")
B.j3=s([B.ce,B.cf,B.cg,B.ch],A.a_("u<dX>"))
B.aW=s([1,2],t.t)
B.ds=s([1,2,3],t.t)
B.dt=s([1,2,3,4],t.t)
B.du=s([1,3],t.t)
B.dv=s([1,3,4,5],t.t)
B.dw=s([2],t.t)
B.l=s(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.s)
B.dx=s([2,3],t.t)
B.aa=s([3],t.t)
B.dy=s([3,5],t.t)
B.dz=s([4],t.t)
B.dA=s([B.cs,B.ct,B.bg],A.a_("u<dk>"))
B.dB=s([4,5],t.t)
B.l4=new A.bY(0,"cardTap")
B.l5=new A.bY(1,"cardOnline")
B.l6=new A.bY(2,"payLah")
B.l7=new A.bY(3,"payNow")
B.dW=new A.bY(4,"giro")
B.l8=new A.bY(5,"transfer")
B.l9=new A.bY(6,"axs")
B.la=new A.bY(7,"cash")
B.lb=new A.bY(8,"other")
B.j7=s([B.l4,B.l5,B.l6,B.l7,B.dW,B.l8,B.l9,B.la,B.lb],A.a_("u<bY>"))
B.V=s(["January","February","March","April","May","June","July","August","September","October","November","December"],t.s)
B.dC=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.my=new A.eK(0,"subscription")
B.mz=new A.eK(1,"domain")
B.mA=new A.eK(2,"certification")
B.j9=s([B.my,B.mz,B.mA],A.a_("u<eK>"))
B.mf=new A.eC(0,"cashback")
B.mg=new A.eC(1,"miles")
B.mh=new A.eC(2,"points")
B.ja=s([B.mf,B.mg,B.mh],A.a_("u<eC>"))
B.jb=s([B.be,B.bd,B.bf],A.a_("u<eh>"))
B.fq=new A.cz(0,"pending")
B.fr=new A.cz(1,"parsed")
B.fs=new A.cz(2,"pendingReview")
B.ft=new A.cz(3,"verified")
B.fu=new A.cz(4,"rejected")
B.fv=new A.cz(5,"failed")
B.jd=s([B.fq,B.fr,B.fs,B.ft,B.fu,B.fv],A.a_("u<cz>"))
B.ls=new A.d5("a month",0,"monthly")
B.lu=new A.d5("a quarter",1,"quarterly")
B.lw=new A.d5("a half-year",2,"halfYearly")
B.lt=new A.d5("a year",3,"yearly")
B.lv=new A.d5("once",4,"single")
B.jf=s([B.ls,B.lu,B.lw,B.lt,B.lv],A.a_("u<d5>"))
B.jg=s(["gross","allowances","bonus","employeeCpf","employerCpf","otherDeductions","net"],t.s)
B.jh=s([B.bh,B.cu],A.a_("u<ej>"))
B.e4=new A.p("SGD","SGD")
B.e5=new A.p("USD","USD")
B.lF=new A.p("EUR","EUR")
B.lH=new A.p("GBP","GBP")
B.lD=new A.p("AUD","AUD")
B.e1=new A.p("INR","INR")
B.ji=s([B.e4,B.e5,B.lF,B.lH,B.lD,B.e1],t.I)
B.bM=s([B.m,B.k],A.a_("u<cV>"))
B.f1=new A.dw(0,"identity")
B.f2=new A.dw(1,"helper")
B.jk=s([B.f1,B.f2],A.a_("u<dw>"))
B.ms=new A.fs(0,"pdf")
B.mt=new A.fs(1,"csv")
B.jl=s([B.ms,B.mt],A.a_("u<fs>"))
B.b1=new A.dL(0,"personal")
B.bS=new A.dL(1,"home")
B.bT=new A.dL(2,"commercial")
B.bU=new A.dL(3,"other")
B.bN=s([B.b1,B.bS,B.bT,B.bU],A.a_("u<dL>"))
B.aX=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.J=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.jn=s(["missing-statement:","reminder:"],t.s)
B.m0=new A.p("standard","Standard-rated 9%")
B.lI=new A.p("zero-rated","Zero-rated")
B.jp=s([B.m0,B.lI],t.I)
B.dD=s(["https://www.googleapis.com/auth/drive.file","openid","email"],t.s)
B.n=new A.bg(0,"expense")
B.w=new A.bg(1,"income")
B.L=new A.bg(2,"ownAccountTransfer")
B.X=new A.bg(3,"cardBillPayment")
B.G=new A.bg(6,"refundOrReversal")
B.jq=s([B.n,B.w,B.L,B.X,B.G],t.dQ)
B.el=new A.dl(0,"email")
B.em=new A.dl(1,"sms")
B.en=new A.dl(2,"push")
B.jt=s([B.el,B.em,B.en],A.a_("u<dl>"))
B.er=new A.ek(0,"monthly")
B.es=new A.ek(1,"yearly")
B.et=new A.ek(2,"none")
B.ju=s([B.er,B.es,B.et],A.a_("u<ek>"))
B.b3=new A.bg(4,"loanInstalment")
B.jw=s([B.n,B.L,B.X,B.b3],t.dQ)
B.aY=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.jA=s(["TRANSFER TO OWN","OWN ACCOUNT","OWN A C"],t.s)
B.jE=s([B.e4,B.e1,B.e5],t.I)
B.D=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.fm=new A.dD(0,"sms")
B.fn=new A.dD(1,"email")
B.fo=new A.dD(2,"statement")
B.fp=new A.dD(3,"manual")
B.jG=s([B.fm,B.fn,B.fo,B.fp],A.a_("u<dD>"))
B.mp=new A.c7("Bank alerts",0,"bank")
B.mo=new A.c7("Agency",1,"agency")
B.mq=new A.c7("Other",2,"other")
B.bO=s([B.mp,B.mo,B.mq],A.a_("u<c7>"))
B.eJ=new A.cS(0,"full")
B.eK=new A.cS(1,"aboveThreshold")
B.eL=new A.cS(2,"pushOnly")
B.eM=new A.cS(3,"statementOnly")
B.eN=new A.cS(4,"unknown")
B.jH=s([B.eJ,B.eK,B.eL,B.eM,B.eN],A.a_("u<cS>"))
B.aZ=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.jI=s(["Document","For","Country","Number","Issued","Expires","File"],t.s)
B.dE=s([1,2,3,4,5],t.t)
B.mv=new A.eJ(0,"email")
B.mw=new A.eJ(1,"drive")
B.mx=new A.eJ(2,"bankApp")
B.jK=s([B.mv,B.mw,B.mx],A.a_("u<eJ>"))
B.b5=new A.eA(0,"income")
B.lf=new A.eA(1,"payment")
B.bZ=new A.eA(2,"move")
B.jL=s([B.b5,B.lf,B.bZ],A.a_("u<eA>"))
B.ci=new A.ft(0,"personalLoan")
B.mu=new A.ft(1,"instalmentPlan")
B.jM=s([B.ci,B.mu],A.a_("u<ft>"))
B.fj=new A.bX(0,"tdsDeducted")
B.fk=new A.bX(1,"homeLoanInterest")
B.fl=new A.bX(2,"homeLoanPrincipal")
B.jN=s([B.fj,B.fk,B.fl,B.cS,B.cT],A.a_("u<bX>"))
B.lB=new A.p("\\b(DBS|POSB)\\b","DBS")
B.m2=new A.p("\\bUOB\\b|UNITED OVERSEAS","UOB")
B.m6=new A.p("\\bOCBC\\b","OCBC")
B.lJ=new A.p("\\bICICI\\b","ICICI")
B.m7=new A.p("\\bAXIS\\b","Axis")
B.lW=new A.p("\\bCITI(BANK)?\\b","Citibank")
B.lz=new A.p("\\bAMEX\\b|AMERICAN EXPRESS","American Express")
B.lV=new A.p("\\bHSBC\\b","HSBC")
B.jP=s([B.lB,B.m2,B.m6,B.lJ,B.m7,B.lW,B.lz,B.lV],t.I)
B.m9=new A.co(0,"subscription")
B.ma=new A.co(1,"commitment")
B.mb=new A.co(2,"notRecurring")
B.jQ=s([B.m9,B.ma,B.mb],A.a_("u<co>"))
B.jR=s([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t)
B.p=s([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3],t.t)
B.jT=s(["Policy","For","Number","Sum assured","Premium","Starts","Renews or ends"],t.s)
B.bP=s([],t.Q)
B.jV=s([],t.kd)
B.jZ=s([],A.a_("u<dm>"))
B.dG=s([],t.F)
B.dI=s([],t.Z)
B.jW=s([],t.g)
B.ab=s([],t.A)
B.dH=s([],t.Y)
B.jY=s([],t.M)
B.jX=s([],t.bD)
B.A=s([],t.t)
B.b_=s([],t.zz)
B.k_=s([],t.l7)
B.b9=new A.bt(0,"committed")
B.aE=new A.bt(1,"essential")
B.cb=new A.bt(2,"optional")
B.dJ=s([B.b9,B.aE,B.cb],A.a_("u<bt>"))
B.cl=new A.e1("All",0,"all")
B.mN=new A.e1("To file",1,"toFile")
B.mL=new A.e1("From alerts, not posted",2,"pending")
B.mM=new A.e1("Filed",3,"filed")
B.dK=s([B.cl,B.mN,B.mL,B.mM],A.a_("u<e1>"))
B.dL=s([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],t.t)
B.k6=s(["Account","Bank","Kind","Balance","As of","Statements","Missing months","Alerts"],t.s)
B.n5=new A.cL(0,"property")
B.n6=new A.cL(1,"cpf")
B.n7=new A.cL(2,"retirement")
B.n8=new A.cL(3,"investment")
B.n9=new A.cL(4,"other")
B.cn=new A.cL(5,"loan")
B.k8=s([B.n5,B.n6,B.n7,B.n8,B.n9,B.cn],A.a_("u<cL>"))
B.ka=s(["No such draft"],t.s)
B.mc=new A.cp(0,"open")
B.md=new A.cp(1,"share")
B.me=new A.cp(2,"number")
B.kc=s([B.mc,B.md,B.me],A.a_("u<cp>"))
B.ke=s(["No such tenancy"],t.s)
B.dM=s([B.M,B.Q,B.y,B.o,B.x,B.a7],A.a_("u<cd>"))
B.c_=new A.eB(0,"paid")
B.lg=new A.eB(1,"none")
B.e_=new A.eB(2,"clear")
B.kf=s([B.c_,B.lg,B.e_],A.a_("u<eB>"))
B.ea=new A.aQ(0,"uncategorised")
B.eb=new A.aQ(1,"unclassified")
B.aD=new A.aQ(2,"unmatchedAlert")
B.v=new A.aQ(3,"uncertainDuplicate")
B.c9=new A.aQ(4,"inTransit")
B.b7=new A.aQ(5,"statementTotalsMismatch")
B.H=new A.aQ(6,"editConflict")
B.ae=new A.aQ(7,"crossBookMismatch")
B.b8=new A.aQ(8,"parseFailed")
B.f=new A.aQ(9,"unknownOperation")
B.h=new A.aQ(10,"malformedOperation")
B.c0=new A.aQ(11,"rulesDisagree")
B.P=new A.aQ(12,"uncertainPairing")
B.c1=new A.aQ(13,"missingStatement")
B.c2=new A.aQ(14,"suspiciousMessage")
B.c3=new A.aQ(15,"paymentReminder")
B.c4=new A.aQ(16,"suspectedUnauthorised")
B.c5=new A.aQ(17,"historyStartFromFolder")
B.ad=new A.aQ(18,"documentCheck")
B.c6=new A.aQ(19,"invoiceToCheck")
B.c7=new A.aQ(20,"paymentFailed")
B.c8=new A.aQ(21,"loanOnStatement")
B.kg=s([B.ea,B.eb,B.aD,B.v,B.c9,B.b7,B.H,B.ae,B.b8,B.f,B.h,B.c0,B.P,B.c1,B.c2,B.c3,B.c4,B.c5,B.ad,B.c6,B.c7,B.c8],A.a_("u<aQ>"))
B.b0=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.ck=new A.e0("Newest first",0,"newest")
B.mJ=new A.e0("Oldest first",1,"oldest")
B.mK=new A.e0("Largest first",2,"largest")
B.mI=new A.e0("Smallest first",3,"smallest")
B.dN=s([B.ck,B.mJ,B.mK,B.mI],A.a_("u<e0>"))
B.ki=s([B.ai,B.ak,B.a6,B.aj],t.nB)
B.nC=s(["passport"],t.s)
B.eT=new A.bM("Passport",!0,0,"passport")
B.nq=s(["pr","visa","reentry","re-entry","permanent","resident"],t.s)
B.eU=new A.bM("PR visa",!0,1,"prVisa")
B.nA=s(["nric","ic","identity","card"],t.s)
B.eR=new A.bM("NRIC",!1,2,"nric")
B.nw=s(["fin","card"],t.s)
B.eW=new A.bM("FIN card",!0,3,"fin")
B.nv=s(["driving","licence","license","dl"],t.s)
B.eV=new A.bM("Driving licence",!0,5,"drivingLicence")
B.ns=s(["aadhaar","aadhar"],t.s)
B.eQ=new A.bM("Aadhaar",!1,6,"aadhaar")
B.nB=s(["pan","card"],t.s)
B.eS=new A.bM("PAN",!1,7,"pan")
B.nt=s(["birth","certificate"],t.s)
B.eX=new A.bM("Birth certificate",!1,8,"birthCertificate")
B.kk=s([B.eT,B.eU,B.eR,B.eW,B.cI,B.eV,B.eQ,B.eS,B.eX,B.br],A.a_("u<bM>"))
B.kE=new A.d4(0,"alerts")
B.kF=new A.d4(1,"statements")
B.kG=new A.d4(2,"biller")
B.kH=new A.d4(3,"agency")
B.kI=new A.d4(4,"owner")
B.ko=s([B.kE,B.kF,B.kG,B.kH,B.kI],A.a_("u<d4>"))
B.an=new A.eH(0,"folderYear")
B.cc=new A.eH(1,"statement")
B.cd=new A.eH(2,"owner")
B.kq=s([B.an,B.cc,B.cd],A.a_("u<eH>"))
B.kr=s(["PAYMENT AT AXS","CARD PAYMENT","CC PAYMENT"],t.s)
B.ac=s([B.aA,B.at,B.di,B.df,B.dn,B.dp,B.dk,B.bI,B.dj,B.aU,B.bL,B.dg,B.dl,B.aV,B.bK,B.dq,B.dm,B.dh,B.aT,B.a9,B.aR,B.bJ,B.ai,B.ak,B.ah,B.a4,B.a5,B.as,B.a6,B.aj,B.aS,B.bH],t.nB)
B.bQ=s(["system","light","dark"],t.s)
B.kt=s(["REVERSAL","REV","REVERSED","REFUND","CASHBACK"],t.s)
B.ky=s(["INTEREST CHARGE","ANNUAL FEE","LATE FEE","SERVICE TAX"],t.s)
B.dT=new A.bg(5,"loanDisbursement")
B.bV=new A.bg(7,"reimbursementOrClaimCredit")
B.dU=new A.bg(8,"depositHeldOrOwed")
B.a0=new A.bg(9,"advance")
B.a_=new A.bg(10,"settlementOfAdvance")
B.b2=new A.bg(11,"liabilityHeld")
B.dS=new A.bg(12,"taxWithheld")
B.au=s([B.n,B.w,B.L,B.X,B.b3,B.dT,B.G,B.bV,B.dU,B.a0,B.a_,B.b2,B.dS],t.dQ)
B.kz=s([B.w,B.L,B.G,B.bV],t.dQ)
B.cq=new A.bc("Overview","","home",0,"overview")
B.ek=new A.bc("Accounts","Money","bank",1,"accounts")
B.ng=new A.bc("Transactions","Money","list",2,"transactions")
B.cr=new A.bc("Loans & debt","Money","loan",3,"loans")
B.ne=new A.bc("Invoices","Money","receipt",4,"invoices")
B.nc=new A.bc("Spending","Planning","pie",5,"spending")
B.nk=new A.bc("Budgets & goals","Planning","target",6,"budgets")
B.nd=new A.bc("Insights","Planning","chart",7,"insights")
B.ni=new A.bc("Review queue","Tasks","inbox",8,"review")
B.nf=new A.bc("Filing rules","Tasks","filter",9,"rules")
B.nh=new A.bc("Life admin","Settings","heart",10,"life")
B.nj=new A.bc("Settings","Settings","gear",11,"setup")
B.dO=s([B.cq,B.ek,B.ng,B.cr,B.ne,B.nc,B.nk,B.nd,B.ni,B.nf,B.nh,B.nj],A.a_("u<bc>"))
B.nr=s(["hospitalisation","hospitalization","shield","medical","health"],t.s)
B.lj=new A.bD("Hospitalisation",0,"hospitalisation")
B.ny=s(["medical","health"],t.s)
B.lk=new A.bD("Medical",1,"medical")
B.nG=s(["term","life"],t.s)
B.lh=new A.bD("Term life",2,"termLife")
B.nI=s(["whole","life"],t.s)
B.lp=new A.bD("Whole life",3,"wholeLife")
B.nE=s(["retirement","annuity"],t.s)
B.ln=new A.bD("Retirement",4,"retirement")
B.nD=s(["personal","accident","pa"],t.s)
B.lq=new A.bD("Personal accident",5,"personalAccident")
B.nH=s(["travel"],t.s)
B.lo=new A.bD("Travel",6,"travel")
B.nx=s(["home","house","fire"],t.s)
B.li=new A.bD("Home",7,"home")
B.nz=s(["motor","car"],t.s)
B.ll=new A.bD("Motor",8,"motor")
B.lm=new A.bD("Other",9,"other")
B.nF=s(["security","bond"],t.s)
B.lr=new A.bD("Security bond",10,"securityBond")
B.kB=s([B.lj,B.lk,B.lh,B.lp,B.ln,B.lq,B.lo,B.li,B.ll,B.lm,B.lr],A.a_("u<bD>"))
B.kD=s([B.bw,B.bx,B.cL,B.cM],A.a_("u<dz>"))
B.bR=new A.h8(null,null,null,null,null,null,null,null,null)
B.dP=new A.cl([B.M,"savings",B.Q,"current",B.y,"card",B.o,"loan",B.a7,"retirement"],t.ip)
B.kY={SG:0,IN:1,personal:2}
B.lX=new A.p("acra-annual-return","ACRA annual return")
B.lG=new A.p("eci","Estimated chargeable income (ECI)")
B.lQ=new A.p("form-c","Form C-S or C")
B.lT=new A.p("cpf","Employee CPF")
B.lU=new A.p("ir8a","IR8A")
B.e6=new A.p("gst","GST, if registered")
B.kd=s([B.lX,B.lG,B.lQ,B.lT,B.lU,B.e6],t.I)
B.lN=new A.p("roc","ROC filings")
B.lE=new A.p("itr","Income tax return (ITR)")
B.ly=new A.p("advance-tax","Advance tax")
B.m3=new A.p("tds","TDS")
B.m_=new A.p("pf-esi","PF and ESI, if applicable")
B.jy=s([B.lN,B.lE,B.ly,B.m3,B.e6,B.m_],t.I)
B.lL=new A.p("iras-opens","IRAS filing opens")
B.lS=new A.p("iras-due","IRAS filing due")
B.lK=new A.p("noa","Notice of assessment")
B.j4=s([B.lL,B.lS,B.lK],t.I)
B.kJ=new A.b_(B.kY,[B.kd,B.jy,B.j4],A.a_("b_<e,A<+(e,e)>>"))
B.kX={SGD:0,INR:1,USD:2}
B.kK=new A.b_(B.kX,["S$","\u20b9","US$"],t.hD)
B.l_={home:0,bank:1,list:2,loan:3,receipt:4,pie:5,target:6,chart:7,inbox:8,filter:9,heart:10,gear:11,eye:12,"eye-off":13,sun:14,moon:15,monitor:16}
B.kL=new A.b_(B.l_,["M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10","M3 9l9-5 9 5M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18","M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1","M3 6h18v12H3zM3 10h18M7 15h4","M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6","M12 3a9 9 0 1 0 9 9h-9z M14 3.5A8 8 0 0 1 20.5 10H14z","M12 3a9 9 0 1 0 .01 0M12 7a5 5 0 1 0 .01 0M12 11a1 1 0 1 0 .01 0","M4 20V10M10 20V4M16 20v-7M22 20H2","M3 13l3-8h12l3 8v6H3zM3 13h5l1 2h6l1-2h5","M3 5h18l-7 8v6l-4-2v-4z","M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z","M12 9a3 3 0 1 0 .01 0M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2","M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0","M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3 3.6M6.6 6.6C3.8 8.4 2 12 2 12s4 7 10 7a10 10 0 0 0 4.4-1","M12 8a4 4 0 1 0 .01 0M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4","M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z","M3 4h18v12H3zM8 20h8M12 16v4"],t.hD)
B.kM=new A.cl([16,10,24,12,32,14],A.a_("cl<d,d>"))
B.kV={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}
B.kN=new A.b_(B.kV,[1,2,3,4,5,6,7,8,9,10,11,12],t.hq)
B.kZ={SGD:0,INR:1,USD:2,EUR:3,GBP:4,AUD:5,MYR:6,JPY:7}
B.e=new A.b_(B.kZ,[2,2,2,2,2,2,2,0],t.hq)
B.al={}
B.kP=new A.b_(B.al,[],A.a_("b_<e,i_>"))
B.kO=new A.b_(B.al,[],A.a_("b_<e,eI>"))
B.dR=new A.b_(B.al,[],t.hD)
B.kR=new A.b_(B.al,[],A.a_("b_<e,a0?>"))
B.dQ=new A.b_(B.al,[],A.a_("b_<bt?,q>"))
B.kQ=new A.b_(B.al,[],A.a_("b_<e?,q>"))
B.kS=new A.cl([B.M,"Savings",B.Q,"Current",B.y,"Credit card",B.o,"Loan",B.x,"Cash",B.a7,"Retirement"],t.ip)
B.aB=new A.cl([B.n,"Expense",B.w,"Income",B.L,"Own-account transfer",B.X,"Card bill payment",B.b3,"Loan instalment",B.dT,"Loan disbursement",B.G,"Refund or reversal",B.bV,"Reimbursement or claim credit",B.dU,"Deposit held or owed",B.a0,"Advance",B.a_,"Settlement of an advance",B.b2,"Liability held",B.dS,"Tax withheld"],A.a_("cl<bg,e>"))
B.kT=new A.cl([B.cU,"Scheduled",B.cV,"Due soon",B.cW,"Due today",B.cX,"Waiting",B.ay,"Paid",B.bz,"Part paid",B.bA,"Overdue",B.aN,"Confirmed by you"],A.a_("cl<cm,e>"))
B.bW=new A.ey(0,"signedOut")
B.bX=new A.ey(1,"signedIn")
B.bY=new A.ey(2,"waiting")
B.av=new A.ey(3,"reading")
B.dV=new A.ey(4,"removed")
B.lc=new A.ez(0,"matched")
B.dX=new A.ez(1,"different")
B.dY=new A.ez(2,"missing")
B.ld=new A.ez(3,"waiting")
B.le=new A.ez(4,"noAccount")
B.am=new A.iQ(0,"pending")
B.e0=new A.iQ(1,"posted")
B.lx=new A.p("","No")
B.lA=new A.p("Flag","You do not recognise this charge")
B.lC=new A.p("","Any")
B.e2=new A.p("","Category\u2026")
B.e3=new A.p("","None")
B.lM=new A.p("","No account (saved not tracked)")
B.lO=new A.p(!1,"Read-only")
B.lP=new A.p(null,"the paying account is a savings or current account")
B.lR=new A.p("-","No category")
B.e7=new A.p("","Not set")
B.lY=new A.p("me","Me")
B.lZ=new A.p("","All accounts")
B.m1=new A.p(null,"Enter only the last 4 digits. SanthIQ never stores a full card or account number.")
B.m4=new A.p(!0,"Editing")
B.m5=new A.p(1,0.25)
B.m8=new A.p("yes","Yes")
B.b6=new A.hh(0,"draft")
B.e8=new A.hh(1,"reconciled")
B.e9=new A.hh(2,"finalised")
B.kW={set:0,use:1,show:2,clear:3}
B.mi=new A.cR(B.kW,4,t.iF)
B.ec=new A.cZ([B.ah,B.a4,B.a5,B.as,B.a6,B.aj],A.a_("cZ<aa>"))
B.l2={sms:0,email:1}
B.ed=new A.cR(B.l2,2,t.iF)
B.l3={secretId:0,action:1,atUtc:2}
B.mj=new A.cR(B.l3,3,t.iF)
B.l1={recordId:0,action:1,atUtc:2}
B.mk=new A.cR(B.l1,3,t.iF)
B.ca=new A.cZ([B.j,B.a2,B.r,B.aM,B.aq,B.u,B.ax,B.I,B.N,B.ar,B.a3,B.af,B.C,B.Z,B.ap,B.aL,B.bv],A.a_("cZ<aK>"))
B.ml=new A.cR(B.al,0,t.iF)
B.l0={bank:0,loan:1,loans:2,card:3,savings:4,account:5,the:6,and:7,ltd:8,limited:9,berhad:10}
B.mm=new A.cR(B.l0,11,t.iF)
B.ee=new A.cZ([B.bi,B.bj,B.aF],t.pA)
B.mn=new A.cZ([B.bi,B.bj,B.aF,B.bk,B.bm],t.pA)
B.mr=new A.hn(B.cd,null,null,null)
B.ef=new A.fv(0,"waiting")
B.cj=new A.fv(1,"approved")
B.eg=new A.fv(2,"removed")
B.mB=new A.dZ(0,"join")
B.mC=new A.dZ(1,"grant")
B.mD=new A.dZ(2,"roster")
B.mE=new A.dZ(3,"segment")
B.mF=new A.dZ(4,"submission")
B.mG=new A.dZ(5,"secret")
B.mH=new A.cr("personal",null,null,null,"",B.cl,null,B.ck,0)
B.mO=A.bB("f_")
B.mP=A.bB("hZ")
B.mQ=A.bB("i0")
B.mR=A.bB("Dx")
B.mS=A.bB("IA")
B.mT=A.bB("IB")
B.eh=A.bB("eo")
B.mU=A.bB("IF")
B.mV=A.bB("kL")
B.mW=A.bB("IG")
B.mX=A.bB("a0")
B.mY=A.bB("bp")
B.mZ=A.bB("eE")
B.n_=A.bB("d7")
B.n0=A.bB("Cj")
B.n1=A.bB("um")
B.n2=A.bB("Jr")
B.ei=A.bB("e4")
B.n3=new A.j6(!1)
B.n4=new A.j6(!0)
B.na=new A.ht(0,"reconciled")
B.nb=new A.ht(1,"recorded")
B.co=new A.ht(2,"stated")
B.ba=new A.bR(0,"certain")
B.cp=new A.bR(1,"uncertain")
B.bb=new A.hz(1,"floor")
B.ej=new A.hz(2,"ceil")
B.bc=new A.hz(3,"halfUp")})();(function staticFields(){$.uY=null
$.c9=A.c([],A.a_("u<a0>"))
$.E6=null
$.Du=null
$.Dt=null
$.FN=null
$.Fy=null
$.Gm=null
$.yc=null
$.zd=null
$.CR=null
$.v3=A.c([],A.a_("u<A<a0>?>"))
$.hD=null
$.jE=null
$.jF=null
$.CB=!1
$.aj=B.W
$.Ez=null
$.EA=null
$.EB=null
$.EC=null
$.Ck=A.uH("_lastQuoRemDigits")
$.Cl=A.uH("_lastQuoRemUsed")
$.j9=A.uH("_lastRemUsed")
$.Cm=A.uH("_lastRem_nsh")
$.tS=A.v(t.N,A.a_("tK"))
$.vC=function(){var s=t.N
return A.v(s,s)}()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"O5","GB",()=>A.yY("_$dart_dartClosure"))
s($,"O4","D3",()=>A.yY("_$dart_dartClosure_dartJSInterop"))
s($,"P0","jO",()=>A.pf(0))
s($,"PT","HS",()=>A.c([new J.kO()],A.a_("u<iU>")))
s($,"OH","H_",()=>A.e3(A.ul({
toString:function(){return"$receiver$"}})))
s($,"OI","H0",()=>A.e3(A.ul({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"OJ","H1",()=>A.e3(A.ul(null)))
s($,"OK","H2",()=>A.e3(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ON","H5",()=>A.e3(A.ul(void 0)))
s($,"OO","H6",()=>A.e3(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"OM","H4",()=>A.e3(A.Er(null)))
s($,"OL","H3",()=>A.e3(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"OQ","H8",()=>A.e3(A.Er(void 0)))
s($,"OP","H7",()=>A.e3(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"OR","D9",()=>A.Jv())
s($,"P5","Hh",()=>A.pf(4096))
s($,"P3","Hf",()=>new A.ve().$0())
s($,"P4","Hg",()=>new A.vd().$0())
s($,"OT","Ha",()=>A.IW(A.aJ(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"OS","H9",()=>A.pf(0))
s($,"P_","bm",()=>A.hv(0))
s($,"OY","bJ",()=>A.hv(1))
s($,"OZ","BL",()=>A.hv(2))
s($,"OW","Db",()=>$.bJ().S(0))
s($,"OU","Da",()=>A.hv(1e4))
r($,"OX","Hc",()=>A.D("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"OV","Hb",()=>A.pf(8))
s($,"P1","Hd",()=>A.D("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"P2","He",()=>typeof URLSearchParams=="function")
s($,"O9","GF",()=>A.D("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:[.,](\\d+))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1))
s($,"Pk","mP",()=>A.CZ(B.mX))
s($,"Ok","jN",()=>{var q=new A.mc(A.IU(8))
q.ix()
return q})
s($,"Oe","eY",()=>A.Im(B.kU.gab(A.IX(A.aJ(A.c([1],t.t)))),0,null).getInt8(0)===1?B.a1:B.aw)
s($,"PJ","HJ",()=>A.IZ(A.c([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],t.t)))
s($,"Pb","Hm",()=>A.aB(255))
s($,"Q4","eg",()=>A.CM(A.Fb(A.Gs(),"crypto"),"subtle",t.K)!=null&&A.IL(A.CM(A.Fb(A.Gs(),"window"),"isSecureContext",t.y)))
s($,"O_","Gz",()=>A.Ij()?new A.n4(null):A.It(null))
s($,"O0","BI",()=>({name:A.Ch("Ed25519")}))
s($,"O1","BJ",()=>({name:A.Ch("X25519")}))
s($,"O3","GA",()=>$.Gz())
r($,"O2","b6",()=>$.GA())
s($,"Oy","GS",()=>$.GT())
s($,"Oz","GT",()=>A.J9())
s($,"O6","GC",()=>A.IY(256))
s($,"PE","HE",()=>A.aB(65535))
s($,"Od","BK",()=>new A.nH().$0())
s($,"Ow","GR",()=>{var q=A.fp(null),p=q.a
p.$flags&2&&A.C(p)
if(0>=p.length)return A.a(p,0)
p[0]=0
return q})
s($,"Ou","D7",()=>{var q=A.fp(null),p=q.a
p.$flags&2&&A.C(p)
if(0>=p.length)return A.a(p,0)
p[0]=1
return q})
s($,"Ov","GQ",()=>{var q=A.fp(null),p=q.a
p.$flags&2&&A.C(p)
if(0>=p.length)return A.a(p,0)
p[0]=2
return q})
s($,"Os","GO",()=>{var q=A.fp(null)
q.hv("19681161376707505956807079304988542015446066515923890162744021073123829784752")
return q})
s($,"Oo","D5",()=>{var q=A.fp(null)
q.hv("37095705934669439343138083508754565189542113879843219016388785533085940283555")
return q})
s($,"Or","GN",()=>{var q,p=A.fp(null),o=p.a
o.$flags&2&&A.C(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65534
B.b4.aO(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=4095
return p})
s($,"Op","mO",()=>{var q,p=A.fp(null),o=p.a
o.$flags&2&&A.C(o)
q=o.length
if(0>=q)return A.a(o,0)
o[0]=65517
B.b4.aO(o,1,15,65535)
if(15>=q)return A.a(o,15)
o[15]=32767
return p})
s($,"Oq","D6",()=>{var q,p=A.fp(null),o=p.a
B.b4.b0(o,0,$.mO().a)
if(0>=o.length)return A.a(o,0)
q=o[0]
o.$flags&2&&A.C(o)
o[0]=q-2
return p})
s($,"Ot","GP",()=>$.BL().aT(255).a9(0,A.aB(19)))
s($,"Ox","D8",()=>A.Ig("7237005577332262213973186563042994240857116359379907606001950938285454250989"))
s($,"O8","GE",()=>new A.ny().$0())
s($,"O7","GD",()=>new A.nx().$0())
s($,"PW","HV",()=>{A.J0(B.A)
return B.ei})
s($,"Pm","De",()=>$.bm())
s($,"Po","jP",()=>$.bJ())
s($,"Pr","Df",()=>$.BL())
s($,"Ps","Hu",()=>A.aB(5))
s($,"Pp","cQ",()=>A.aB(10))
s($,"PP","Di",()=>A.tD(10))
s($,"Oa","GG",()=>A.D("^([+-]?\\d*)(?:\\.(\\d*))?(?:[eE]([+-]?\\d+))?$",!0,!1))
s($,"Oc","L",()=>A.BW(0))
s($,"Ob","GH",()=>A.BW(1))
s($,"PO","HO",()=>$.GL())
s($,"PR","HQ",()=>A.tD(5))
s($,"PQ","HP",()=>A.tD(10))
s($,"Pn","hR",()=>$.bm())
s($,"Pq","hS",()=>$.bJ())
s($,"Ol","GL",()=>A.tD(0))
s($,"PF","HF",()=>A.D("^[A-Z][A-Z0-9]*(-[A-Z0-9]+)*-[0-9]{4}$",!0,!1))
s($,"Pc","Hn",()=>A.D("^CASH-[A-Z]{3}$",!0,!1))
s($,"Pd","eZ",()=>A.D("\\p{Nd}",!0,!0))
s($,"PD","HD",()=>A.D("\\d{9,}",!0,!1))
s($,"Pu","Hw",()=>A.D("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"PG","HG",()=>A.D("^\\d{9}$",!0,!1))
s($,"PM","HM",()=>A.D("^[0-9X]{4,20}$",!0,!1))
s($,"Pt","Hv",()=>A.c([A.D("\\b[A-Z]\\d{7}[A-Z]\\b",!0,!1),A.D("\\b[A-Z]{5}\\d{4}[A-Z]\\b",!0,!1),A.D("\\b[A-Z]\\d{7,8}(?!\\d)",!0,!1)],A.a_("u<tK>")))
s($,"Pe","Ho",()=>A.D("\\d(?:[\\s.\\-\\u001F]*\\d)*",!0,!1))
s($,"PS","HR",()=>A.D("(?<!\\d)\\d{4}-\\d{2}-\\d{2}(?!\\d)|(?<![\\d.])\\d{1,2}([./-])\\d{1,2}\\1\\d{4}(?!\\d)|(?<!\\d)\\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec),? \\d{4}(?!\\d)|(?<![\\d.])\\d{1,9}\\.\\d{1,2}(?![\\d]|\\.\\d)|(?:S\\$|SGD|INR|Rs\\.?|\\$|\u20b9) ?\\d{1,8}(?!\\d|[\\s.\\-\\u001F]+\\d)",!0,!1))
s($,"Pw","Hy",()=>A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"PI","HI",()=>A.D("^(\\d{4})-(\\d{2})$",!0,!1))
s($,"PK","HK",()=>A.D("[^A-Z0-9]+",!0,!1))
s($,"On","GM",()=>A.D("^[0-9a-f]{64}$",!0,!1))
s($,"P7","Hj",()=>A.Dr())
s($,"PX","HW",()=>B.F.O("santhiq/master/v1"))
s($,"Og","GJ",()=>new A.kx(new WeakMap(),A.a_("kx<+(d,d,d,d)>")))
s($,"Oh","D4",()=>A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"Oi","GK",()=>A.D("^\\d{4}$",!0,!1))
s($,"PC","Dh",()=>A.D("\\d{9,}",!0,!1))
s($,"Pv","Dg",()=>A.D("INSTALM\\s+(\\d{1,3})/(\\d{1,3})",!0,!1))
s($,"P6","Hi",()=>A.D("^[^@\\s]+@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"Ph","Hr",()=>A.D("^@[a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,}$",!0,!1))
s($,"Px","Hx",()=>A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Q1","I_",()=>A.D("^event-[a-p]{32}$",!0,!1))
s($,"PV","HU",()=>A.D("^([01]\\d|2[0-3]):[0-5]\\d$",!0,!1))
s($,"PH","HH",()=>A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"PA","HB",()=>A.D("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Q3","I0",()=>A.D("^[A-Z]{4}0[A-Z0-9]{6}$",!0,!1))
s($,"Pj","Hs",()=>A.D("^\\d{2}/\\d{2}$",!0,!1))
s($,"PB","HC",()=>A.D("^[A-Za-z0-9]{1,4}$",!0,!1))
s($,"Q_","HZ",()=>A.BW(10))
s($,"Q2","Dj",()=>A.D("\\{(?:fy|yy[/-]yy|yyyy[/-]yy|yyyy[/-]yyyy)\\}",!0,!1))
s($,"PU","HT",()=>A.D("\\s+",!0,!1))
s($,"PL","HL",()=>A.D("^\\+?[0-9]{3,15}$",!0,!1))
s($,"P9","Hk",()=>A.D("^[A-Z0-9][A-Z0-9 ._&-]{0,14}$",!0,!1))
s($,"Pf","Hp",()=>A.D("^[A-Z]{2}-(?=[A-Z0-9]{3})",!0,!1))
s($,"Pg","Hq",()=>A.D("(?<=[A-Z0-9]{3})-[A-Z]$",!0,!1))
s($,"P8","Dc",()=>A.Dr())
s($,"Pi","Dd",()=>A.Ix())
s($,"PY","HX",()=>A.Eu())
s($,"Pl","Ht",()=>A.ID(A.IE(),32))
s($,"PZ","HY",()=>A.Eu())
s($,"OB","GU",()=>A.D("^e-[0-9a-f]{16}\\.sqe$",!0,!1))
s($,"OC","GV",()=>A.D("^g-(dev[0-9a-f]{16})-(\\d{6})\\.sqg$",!0,!1))
s($,"OD","GW",()=>A.D("^r-(\\d{8})\\.sqr$",!0,!1))
s($,"OF","GY",()=>A.D("^s-(\\d{4})-(\\d{10})-(\\d{10})\\.sqs$",!0,!1))
s($,"OG","GZ",()=>A.D("^o-(dev[0-9a-f]{16})-(\\d{10})\\.sqo$",!0,!1))
s($,"OE","GX",()=>A.D("^x-(dev[0-9a-f]{16})-(\\d{10})\\.sqx$",!0,!1))
s($,"PN","HN",()=>A.D("^(\\d{4})-(0[1-9]|1[0-2])$",!0,!1))
s($,"Py","Hz",()=>A.D("^(\\d{4})-(\\d{2})-(\\d{2})$",!0,!1))
s($,"Of","GI",()=>A.C_(A.S(["name",A.Ch("AES-GCM"),"length",A.J1(256)],t.N,t.K)))
s($,"Pz","HA",()=>A.D("\\b(\\d{4})-(\\d{2})-(\\d{2})\\b",!0,!1))
s($,"Pa","Hl",()=>A.D("(?:SGD|INR|USD|S\\$|\u20b9|US\\$)\\s?-?[\\d,]+(?:\\.\\d+)?",!0,!1))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ev,ArrayBuffer:A.hc,ArrayBufferView:A.iD,DataView:A.iB,Float32Array:A.l0,Float64Array:A.l1,Int16Array:A.l2,Int32Array:A.iC,Int8Array:A.l3,Uint16Array:A.iE,Uint32Array:A.iF,Uint8ClampedArray:A.iG,CanvasPixelArray:A.iG,Uint8Array:A.fk})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bw.$nativeSuperclassTag="ArrayBufferView"
A.jf.$nativeSuperclassTag="ArrayBufferView"
A.jg.$nativeSuperclassTag="ArrayBufferView"
A.ew.$nativeSuperclassTag="ArrayBufferView"
A.jh.$nativeSuperclassTag="ArrayBufferView"
A.ji.$nativeSuperclassTag="ArrayBufferView"
A.c4.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jJ
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()