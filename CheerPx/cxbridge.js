"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var bM=Math.imul;var bN=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function ao(){o.a0=nullArray;o.a0o=0;o.a1=nullArray;o.a1o=0;o.a2.a0=nullArray;o.a2.a0o=0;}function bg(){var a=null;a=bf;onmessage=a;postMessage({type:0, buffer: null, asyncPtrOffset: 0});}function bf(s){var q=0,u=-0.,i=null,j=0,a=null,b=0,e=null,f=0,g=null,m=null,n=0,c=0,k=0;i=s.data;switch((i.type)|0){case 33:b=o.a0o;a=o.a0;f=o.a1o;e=o.a1;if(a===e&&b===f){i=i.arg1;b=o.a1o;a=o.a1;f=o.a2.a0o;e=o.a2.a0;if(b<f){af(a[b],i,1);o.a1=a;o.a1o=b+1|0;break;}g={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:g={a0:null}}};n=o.a0o;m=o.a0;c=(bM(n,32));q=(bM(b,32))-c>>5;k=q+1|0;if(k>>>0>134217727)throw new Error("Abort called");c=(bM(f,32))-c|0;if(c>>5>>>0<67108863){c>>=4;c=c>>>0<k>>>0?k|0:c|0;}else{c=134217727;}a=g.a3;a.a0=nullArray;a.a0o=0;a.a1.a0=o.a2;if((c|0)!==0){if(c>>>0>134217727)throw new Error("Abort called");e=bK((c<<5)/32|0);}else{e=nullArray;}g.a0=e[0];g.a1=e;g.a1o=0+q|0;a.a0=e;a.a0o=0+c|0;af(e[q],i,1);g.a2=e;g.a2o=(0+q|0)+1|0;a2(g);j=g.a1o;i=g.a1;b=g.a2o;a=g.a2;if(a!==i||b!==j){c=0;while(1){k=c-1|0;e=a[(b+c|0)+ -1|0].a3;H(e,e.a1.a0[0]);if(a!==i||(b+k|0)!==j){c=k;continue;}break;}}break;}postMessage({type:34, tid: -1, value: (e[f+ -1|0].i5|0)});break;case 35:c=i.tid;j=o.a0o;i=o.a0;a={type:'socket'};i=i[j+(c-1|0)|0].a4;i.send(JSON.stringify(a));break;case 36:a=i.arg1;u=+a.length;c=i.tid;f=o.a0o;e=o.a0;aY(e[f+(c-1|0)|0],i.arg0,a,2,~~(u+ -2));break;case 37:c=i.tid;b=o.a0o;a=o.a0;i={type:'accept', fd:(i.arg0)};a=a[b+(c-1|0)|0].a4;a.send(JSON.stringify(i));break;case 52:c=i.tid;b=o.a0o;a=o.a0;aW(a[b+(c-1|0)|0],i.value);break;case 79:c=i.tid;b=o.a0o;a=o.a0;g=i.path;e=i.args;m=i.env;k=i.stdout;g={type:'exec',path:g,args:e,stdout:k,stderr:(i.stderr),env:m};a=a[b+(c-1|0)|0].a4;a.send(JSON.stringify(g));break;case 43:case 15:postMessage({type:34, tid:(i.tid), value: 1});break;default:a="UNHANDLED CORE MESSAGE:";i=String(i.type);console.log(a,i);}}function v(a,b){var c=null,g=0,e=null;c=String();if((a[b]&255)===0)return String(c);g=0;while(1){e=String.fromCharCode(a[b+g|0]<<24>>24);c=c.concat(e);g=g+1|0;if((a[b+g|0]&255)!==0)continue;break;}return String(c);}function aW(s,q){var E=null,i=null,m=null,k=null,l=0,u=null,e=null,c=null,a=null,b=0,g=0;e=[0];e[0]=q;E=[null];i=new MessageChannel();E[0]=i;c={a0:null,i1:0};aL(c,s,e,0,E,0);e=i.port1;c=[{a0:null,i1:0}];c[0].a0=s;c[0].i1=q;c=b3(aJ,c[0]);e.onmessage=c;e=i.port2;c={type:34, tid:(s.i5|0), value: e};postMessage(c,new Array(e));m=s.a3;c=m.a1;a=c.a0[0];if(a!==null){e=c;a=a;while(1){if(a.a4.i0>>>0<q>>>0){a=a.a1[0];}else{e=a;a=a.a0[0];}if(a!==null){a=a;continue;}break;}if(e!==c){a=e.a4;if(a.i0>>>0<=q>>>0){a=a.a1;l=a.a0o;k=a.a0;b=a.a1o;a=a.a1;if(k!==a||l!==b){g=0;while(1){c=k[l+g|0];u=i.port1;u.postMessage(c,new Array(c.buffer));g=g+1|0;if(k!==a||(l+g|0)!==b)continue;break;}}a={a0:null};aC(a,m,e);}}}}function aC(i,g,e){var a=null,c=null,d=0;a=e.a1[0];if(a!==null){if(a.a0[0]!==null){while(1){a=a.a0[0];if(a.a0[0]!==null)continue;break;}a=a;}else{a=a;}}else{a=e.a2;if(a.a0[0]!==e){while(1){c=a.a2;if(c.a0[0]!==a){a=c;continue;}break;}a=c;}}i.a0=a;if(g.a0===e)g.a0=a;g.i2=(g.i2|0)-1|0;ay(g.a1.a0[0],e);a=e.a4.a1;d=a.a0o;c=a.a0;if(c!==nullArray||d!==0){a.a1=c;a.a1o=d;}}function ay(s,q){var u=0,g=null,i=null,e=null,m=0,c=null,a=null,k=null;if(q.a0[0]!==null){g=q.a1[0];if(g!==null){if(g.a0[0]!==null){while(1){g=g.a0[0];if(g.a0[0]!==null)continue;break;}i=g;}else{i=g;}}else{i=q;g=q;}}else{i=q;g=q;}e=i.a0[0];a:{if(e===null){e=g.a1[0];if(e===null){e=null;m=1;break a;}}e.a2=g.a2;m=0;}c=g.a2;a=c.a0[0];if(a===g){c.a0[0]=e;if(g===s){c=e;a=null;}else{a=c.a1[0];c=s;}}else{c.a1[0]=e;c=s;}u=g.i3|0;if(g!==q){k=q.a2;g.a2=k;if(q.a2.a0[0]===q)k.a0[0]=g;else k.a1[0]=g;k=q.a0[0];i.a0[0]=k;k.a2=i;k=q.a1[0];g.a1[0]=k;if(k!==null)k.a2=i;g.i3=q.i3|0;c=(c===q?g:c);}a:if((u&255)!==0?(c!==null?1:0)|0:0|0)if(m)while(1){e=a.a2;m=a.i3|0;{if(e.a0[0]===a){if((m&255)===0){a.i3=1;e.i3=0;i=a.a1[0];e.a0[0]=i;if(i!==null)i.a2=e;a.a2=e.a2;i=e.a2;if(i.a0[0]===e)i.a0[0]=a;else i.a1[0]=a;a.a1[0]=e;e.a2=a;c=(c===e?a:c);a=e.a0[0];}e=a.a0[0];m=e===null?1:0;b:{c:{d:{if(!(m))if((e.i3&255)===0)break d;i=a.a1[0];if(i!==null)if((i.i3&255)===0){if(m)break c;break d;}a.i3=0;e=a.a2;if((e.i3&255)!==0?(c===e?1:0)|0:1|0){e.i3=1;break a;}i=e.a2;a=i.a0[0];if(a!==e)continue;a=i.a1[0];continue;}if((e.i3&255)===0){c=a;break b;}}c=a.a1[0];c.i3=1;a.i3=0;e=c.a0[0];a.a1[0]=e;if(e!==null)e.a2=a;c.a2=a.a2;e=a.a2;if(e.a0[0]===a)e.a0[0]=c;else e.a1[0]=c;c.a0[0]=a;a.a2=c;a=c;c=c;}e=a.a2;a.i3=e.i3|0;e.i3=1;c.a0[0].i3=1;c=e.a0[0];a=c.a1[0];e.a0[0]=a;if(a!==null)a.a2=e;c.a2=e.a2;a=e.a2;if(a.a0[0]===e)a.a0[0]=c;else a.a1[0]=c;c.a1[0]=e;e.a2=c;break a;}if((m&255)===0){a.i3=1;e.i3=0;i=e.a1[0];g=i.a0[0];e.a1[0]=g;if(g!==null)g.a2=e;i.a2=e.a2;g=e.a2;if(g.a0[0]===e)g.a0[0]=i;else g.a1[0]=i;i.a0[0]=e;e.a2=i;e=a.a0[0];c=(c===e?a:c);a=e.a1[0];}e=a.a0[0];b:{if(e!==null)if((e.i3&255)===0)break b;i=a.a1[0];if(i!==null)if((i.i3&255)===0)break b;a.i3=0;e=a.a2;if(c!==e){if((e.i3&255)!==0){i=e.a2;a=i.a0[0];if(a!==e)continue;a=i.a1[0];continue;}c=e;}c.i3=1;break a;}c=a.a1[0];b:{if(c!==null)if((c.i3&255)===0)break b;e.i3=1;a.i3=0;c=e.a1[0];a.a0[0]=c;if(c!==null)c.a2=a;e.a2=a.a2;c=a.a2;if(c.a0[0]===a)c.a0[0]=e;else c.a1[0]=e;e.a1[0]=a;a.a2=e;a=e;}e=a.a2;a.i3=e.i3|0;e.i3=1;a.a1[0].i3=1;a=e.a1[0];c=a.a0[0];e.a1[0]=c;if(c!==null)c.a2=e;a.a2=e.a2;c=e.a2;if(c.a0[0]===e)c.a0[0]=a;else c.a1[0]=a;a.a0[0]=e;e.a2=a;break a;}continue;}else e.i3=1;}function aJ(e,c){var i=null,g=null,a=null;i=e.a0;a={type:'write', fd:(e.i1|0)};g=i.a4;g.send(JSON.stringify(a));a=c.data;i.a4.send(a);}function aL(E,u,s,t,q,r){var k=null,i=0,m=0,g=null,a=null,e=null,f=0,c=null;k={a0:[null],a1:[null],a2:null,i3:0,a4:{i0:0,a1:null}};i=s[t]|0;g=k.a4;g.i0=i;g.a1=q[r];g=u.a1;a=g.a0[0];a:if(a!==null){a=a;f=0;e=g.a0;while(1){m=a.a4.i0|0;if(i>>>0<m>>>0){c=a.a0[0];if(c===null){f=0;e=a.a0;a=a;break a;}f=0;e=a.a0;}else{if(m>>>0>=i>>>0){a=a;break a;}c=a.a1[0];if(c===null){f=0;e=a.a1;a=a;break a;}f=0;e=a.a1;}a=c;continue;}}else{a=g;f=0;e=g.a0;}c=e[f];if(c!==null){E.a0=c;E.i1=0;}else{k.a0[0]=null;k.a1[0]=null;k.a2=a;e[f]=k;a=u.a0.a0[0];if(a!==null)u.a0=a;S(g.a0[0],e[f]);u.i2=(u.i2|0)+1|0;E.a0=k;E.i1=1;}}function S(k,i){var m=0,c=null,e=null,a=null,g=null;m=i===k?1:0;i.i3=m?1:0;a:if(!(m)){c=i;while(1){e=c.a2;if((e.i3&255)===0){a=e.a2;g=a.a0[0];b:{if(g===e){g=a.a1[0];if(g!==null)if((g.i3&255)===0){e.i3=1;a.i3=a===k?1:0;g.i3=1;break b;}if(e.a0[0]!==c){c=e.a1[0];a=c.a0[0];e.a1[0]=a;if(a!==null)a.a2=e;c.a2=e.a2;a=e.a2;if(a.a0[0]===e)a.a0[0]=c;else a.a1[0]=c;c.a0[0]=e;e.a2=c;c=e;}c=c.a2;c.i3=1;c=c.a2;c.i3=0;e=c.a0[0];a=e.a1[0];c.a0[0]=a;if(a!==null)a.a2=c;e.a2=c.a2;a=c.a2;if(a.a0[0]===c)a.a0[0]=e;else a.a1[0]=e;e.a1[0]=c;c.a2=e;break a;}if(g!==null)if((g.i3&255)===0){e.i3=1;a.i3=a===k?1:0;g.i3=1;break b;}if(e.a0[0]===c){a=c.a1[0];e.a0[0]=a;if(a!==null)a.a2=e;c.a2=e.a2;a=e.a2;if(a.a0[0]===e)a.a0[0]=c;else a.a1[0]=c;c.a1[0]=e;e.a2=c;c=e;}c=c.a2;c.i3=1;c=c.a2;c.i3=0;e=c.a1[0];a=e.a0[0];c.a1[0]=a;if(a!==null)a.a2=c;e.a2=c.a2;a=c.a2;if(a.a0[0]===c)a.a0[0]=e;else a.a1[0]=e;e.a0[0]=c;c.a2=e;break a;}if(a!==k){c=a;continue;}}break;}}}function aY(m,k,i,j,g){var a=null,e=0,c=null;a=String();if((g|0)!==0){e=0;while(1){c=String.fromCharCode(i[j+e|0]<<24>>24);a=a.concat(c);e=e+1|0;if((e|0)!==(g|0))continue;break;}}a={type:'bind',fd:k,addr:a};c=m.a4;c.send(JSON.stringify(a));postMessage({type:34, tid:(m.i5|0), value: k});}function H(c,a){var g=null,e=null,f=0;if(a!==null){H(c,a.a0[0]);H(c,a.a1[0]);g=a.a4.a1;f=g.a0o;e=g.a0;if(e!==nullArray||f!==0){g.a1=e;g.a1o=f;}}}function a2(i){var e=null,f=0,a=null,b=0,c=null,d=0,g=0;f=o.a0o;e=o.a0;b=o.a1o;a=o.a1;if(a!==e||b!==f){g=0;while(1){d=i.a1o;c=i.a1;g=g-1|0;a1(c[d+ -1|0],a[b+g|0]);d=i.a1o;c=i.a1;i.a1=c;i.a1o=d+ -1|0;if(a!==e||(b+g|0)!==f)continue;break;}}f=o.a0o;e=o.a0;b=i.a1o;a=i.a1;o.a0=a;o.a0o=b;i.a1=e;i.a1o=f;b=o.a1o;a=o.a1;d=i.a2o;c=i.a2;o.a1=c;o.a1o=d;i.a2=a;i.a2o=b;b=o.a2.a0o;a=o.a2.a0;d=i.a3.a0o;c=i.a3.a0;o.a2.a0=c;o.a2.a0o=d;i.a3.a0=a;i.a3.a0o=b;i.a0=e[f];}function a1(m,k){var i=null,g=null,c=null,a=null,e=0;m.a0=k.a0;c=k.a1;a=m.a1;a.a0[0]=c.a0[0];e=k.i2|0;m.i2=e;if((e|0)!==0){a.a0[0].a2=a;k.a0=c;c.a0[0]=null;k.i2=0;}else m.a0=a;c=k.a3;a=m.a3;a.a0=c.a0;i=c.a1;g=a.a1;g.a0[0]=i.a0[0];e=c.i2|0;a.i2=e;if((e|0)!==0){g.a0[0].a2=g;c.a0=i;i.a0[0]=null;c.i2=0;}else a.a0=g;m.a4=k.a4;m.i5=k.i5|0;}function af(k,i,g){var c=null,a=null,e=null;c=k.a1;c.a0[0]=null;k.i2=0;k.a0=c;c=k.a3;a=c.a1;a.a0[0]=null;c.i2=0;c.a0=a;k.i5=g;k.a4=new WebSocket(i);c=k.a4;a="arraybuffer";c.binaryType=a;c=k.a4;a="open";e=[{a0:null}];e[0].a0=k;e=b3(a9,e[0]);c.addEventListener(a,e);c=k.a4;a="message";e=[{a0:null}];e[0].a0=k;e=b3(a6,e[0]);c.addEventListener(a,e);}function a6(g,e){var c=null,a=null,i=null;c=g.a0;a=e.data;if(((a instanceof ArrayBuffer|0)&1)!==0)a5(c,a);else{i=JSON.parse(a);a3(c,i);}}function a3(k,i){var a=null,g=null,e=null,c=0;e=i.type;a="socket";a:{if(((e.localeCompare(a))|0)!==0){e=i.type;g="accept";c=e.localeCompare(g);if((c|0)!==0)break a;}c=k.i5|0;postMessage({type:34, tid:c, value: (i.fd)});}}function a5(bi,E){var u=null,i=null,bj=null,bk=0,s=0,q=0,m=null,k=null,a=0,e=null,c=null,d=0,g=null,h=0;m=new Uint8Array(E);k=new DataView(E);a=~~ +k.getUint16(0);if((a&65535)<2){if((a&65535)!==0){m=[0];a=~~ +k.getUint16(2);m[0]=a;k=new Uint8Array(E,4);e=bi.a1;c=e.a0[0];a:{if(c!==null){g=c;c=e;while(1){if(g.a4.i0>>>0<a>>>0){g=g.a1[0];}else{c=g;g=g.a0[0];}if(g!==null){g=g;continue;}break;}if(c!==e){e=c.a4;if(e.i0>>>0<=a>>>0){e=e.a1.port1;e.postMessage(k,new Array(E));break a;}}}e={a0:null,i1:0};c={a0:nullArray};c.a0=m;ap(e,bi.a3,a,c);g=e.a0;e=g.a4.a1;d=e.a1o;c=e.a1;u=e.a2;h=u.a0o;g=u.a0;if(d<h){c[d]=k;e.a1=c;e.a1o=d+1|0;}else{i={a0:null,a1:nullArray,a1o:0,a2:nullArray,a2o:0,a3:{a0:nullArray,a0o:0,a1:i={a0:null}}};bk=e.a0o;bj=e.a0;a=(bM(bk,4));s=(bM(d,4))-a>>2;q=s+1|0;if(q>>>0>1073741823)throw new Error("Abort called");a=(bM(h,4))-a|0;if(a>>2>>>0<536870911){a>>=1;a=a>>>0<q>>>0?q|0:a|0;}else{a=1073741823;}c=i.a3;c.a0=nullArray;c.a0o=0;c.a1.a0=u;if((a|0)!==0){if(a>>>0>1073741823)throw new Error("Abort called");g=b5([],0,(a<<2)/4|0,null);}else{g=nullArray;}i.a0=g[0];i.a1=g;i.a1o=0+s|0;c.a0=g;c.a0o=0+a|0;g[s]=k;i.a2=g;i.a2o=(0+s|0)+1|0;aN(e,i);}}}else{a=~~ +k.getUint32(2);k=ar(m,6,a);m={type:80,path:k,data:m.subarray((+(a+6>>>0)))};postMessage(m,new Array(E));}}else if((a&65534)===2){+m.length;m={type:53,arg1:m.subarray(2)};postMessage(m,new Array(E));}}function aN(q,m){var g=0,k=0,i=0,c=null,d=0,a=null,b=0,e=0;d=q.a0o;c=q.a0;b=q.a1o;a=q.a1;g=(bM(b,4))-(bM(d,4))|0;b=m.a1o;a=m.a1;k=-(g>>2)|0;m.a1=a;m.a1o=b+k|0;if((g|0)>0)if(g>>>0>=4){e=k;i=0;while(1){a[b+e|0]=c[d+i|0];e=e+1|0;if(a!==a||((b+k|0)+(g>>>2)|0)!==(b+e|0)){i=i+1|0;continue;}break;}}d=q.a0o;c=q.a0;b=m.a1o;a=m.a1;q.a0=a;q.a0o=b;m.a1=c;m.a1o=d;d=q.a1o;c=q.a1;b=m.a2o;a=m.a2;q.a1=a;q.a1o=b;m.a2=c;m.a2o=d;d=q.a2.a0o;c=q.a2.a0;b=m.a3.a0o;a=m.a3.a0;q.a2.a0=a;q.a2.a0o=b;m.a3.a0=c;m.a3.a0o=d;d=m.a1o;c=m.a1;m.a0=c[d];}function ap(E,u,s,q){var m=null,k=null,c=null,g=null,h=0,i=0,a=null,e=null;k=u.a1;c=k.a0[0];a:if(c!==null){c=c;h=0;g=k.a0;while(1){i=c.a4.i0|0;if(i>>>0>s>>>0){a=c.a0[0];if(a===null){h=0;g=c.a0;c=c;break a;}h=0;g=c.a0;}else{if(i>>>0>=s>>>0){c=c;break a;}a=c.a1[0];if(a===null){h=0;g=c.a1;c=c;break a;}h=0;g=c.a1;}c=a;continue;}}else{c=k;h=0;g=k.a0;}a=g[h];if(a!==null){k=a;i=0;}else{a={a0:[null],a1:[null],a2:null,i3:0,a4:{i0:0,a1:a={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}}}};e=q.a0;m=a.a4;m.i0=e[0]|0;e=m.a1;e.a0=nullArray;e.a0o=0;e.a1=nullArray;e.a1o=0;e.a2.a0=nullArray;e.a2.a0o=0;a.a0[0]=null;a.a1[0]=null;a.a2=c;g[h]=a;e=u.a0.a0[0];if(e!==null)u.a0=e;S(k.a0[0],g[h]);u.i2=(u.i2|0)+1|0;k=a;i=1;}E.a0=k;E.i1=i;}function ar(s,t,q){var i=0,a=null,k=0,m=0,e=0,g=0,c=null;a=String();if((q|0)===0)return a;m=q;k=0;while(1){i=s[t+k|0]|0;if((i&255)!==0){g=i&255;if(i<<24>-16777216){e=g;}else if((i&255)<192){e=(g&63)+(e<<6)|0;}else if((i&255)<224){e=g&31;}else if((i&255)<240){e=g&15;}else{e=g&7;}m=m-1|0;k=k+1|0;a:{if((m|0)!==0)if((s[t+k|0]&192)===128)break a;if(e>>>0<65536){c=String.fromCharCode(e);a=a.concat(c);}else{g=e-65536|0;c=String.fromCharCode((g>>>10)+55296|0);a=a.concat(c);c=String.fromCharCode((e&1023)+56320|0);a=a.concat(c);e=g;}}if((m|0)!==0)continue;return a;}break;}return a;}function a9(a){postMessage({type:34, tid: -1, value: (a.a0.i5|0)});}var o={a0:nullArray,a0o:0,a1:nullArray,a1o:0,a2:{a0:nullArray,a0o:0}};var an=new Uint8Array([85,78,72,65,78,68,76,69,68,32,67,79,82,69,32,77,69,83,83,65,71,69,58,0]);var am=new Uint8Array([97,114,114,97,121,98,117,102,102,101,114,0]);var al=new Uint8Array([111,112,101,110,0]);var ak=new Uint8Array([109,101,115,115,97,103,101,0]);var aj=new Uint8Array([115,111,99,107,101,116,0]);var ai=new Uint8Array([97,99,99,101,112,116,0]);function bK(e){var r=[];for(var i=0;i<e;i++)r[i]={a0:null,a1:{a0:[null]},i2:0,a3:r[i]={a0:null,a1:{a0:[null]},i2:0},a4:null,i5:0};return r;}function b5(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}function b3(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}function b4(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}ao();bg();