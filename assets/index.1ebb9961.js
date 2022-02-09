import{i as A,B as N,S as f,E as v,y as V,C as w,q as b,I as C,l as x,p as z}from"./vendor.e711fc39.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};F();const G={apiKey:"AIzaSyB7Jkv647eebeqifG6mAHv40fUyfdDRB8k",authDomain:"fireship-demos-ce28a.firebaseapp.com",databaseURL:"https://fireship-demos-ce28a-default-rtdb.firebaseio.com",projectId:"fireship-demos-ce28a",storageBucket:"fireship-demos-ce28a.appspot.com",messagingSenderId:"710932691797",appId:"1:710932691797:web:5838b9fd459ba264af4ddc",measurementId:"G-FNWH5RC87G"};A(G);const P={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},c=new RTCPeerConnection(P);let m=null,I=null;const D=document.getElementById("webcamButton"),p=document.getElementById("webcamVideo"),k=document.getElementById("callButton"),R=document.getElementById("callInput"),q=document.getElementById("answerButton"),L=document.getElementById("remoteVideo"),j=document.getElementById("hangupButton"),J=document.getElementById("testButton"),U=document.getElementById("remoteVideo"),g=document.getElementById("audioSource"),h=document.getElementById("audioOutput"),B=[g,h];function H(a){const t=B.map(n=>n.value);B.forEach(n=>{for(;n.firstChild;)n.removeChild(n.firstChild)});for(let n=0;n!==a.length;++n){const o=a[n],e=document.createElement("option");e.value=o.deviceId,o.kind==="audioinput"?(e.text=o.label||`microphone ${g.length+1}`,g.appendChild(e)):o.kind==="audiooutput"&&(e.text=o.label||`speaker ${h.length+1}`,h.appendChild(e))}B.forEach((n,o)=>{Array.prototype.slice.call(n.childNodes).some(e=>e.value===t[o])&&(n.value=t[o])})}navigator.mediaDevices.enumerateDevices().then(H).catch(console.log("media query success"));function K(){const a=h.value;U.setSinkId(a).then(console.log("success"))}function T(){return{audio:{deviceId:g.value,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1,latency:0,sampleRate:48e3,sampleSize:16,volume:1},video:!1}}var M=T();g.addEventListener("change",function(){M=T()});h.onchange=K;D.onclick=async()=>{m=await navigator.mediaDevices.getUserMedia(M),I=new MediaStream,m.getTracks().forEach(a=>{console.log("case1"),c.addTrack(a,m)}),c.ontrack=a=>{console.log("case2"),a.streams[0].getTracks().forEach(t=>{console.log(t),I.addTrack(t)})},L.srcObject=I,p.play(),L.play(),k.disabled=!1,q.disabled=!1,D.disabled=!0};const E=document.getElementById("muteMonitor");E.checked==!0?p.muted=!0:p.muted=!1;E.addEventListener("change",function(){E.checked==!0?(p.muted=!0,console.log("monitor muted")):(p.muted=!1,console.log("monitor unmuted"))});const S=document.getElementById("muteMe");S.checked=!1;S.addEventListener("change",function(){S.checked==!0?(m.getTracks()[0].enabled=!1,console.log("muted me")):(m.getTracks()[0].enabled=!0,console.log("unmuted me"))});const l=N();k.onclick=async()=>{const a=f(l,"calls1"),t=await v(a,{});R.value=t.id;const n=f(l,"calls1",t.id,"offerCandidates"),o=f(l,"calls1",t.id,"answerCandidates");c.onicecandidate=r=>{r.candidate&&v(n,r.candidate.toJSON())};const e=await c.createOffer();e.sdp=e.sdp.replace("useinbandfec=1","useinbandfec=1; stereo=1; maxaveragebitrate=510000"),await c.setLocalDescription(e),console.log("offerdescription from pa",e);const s={sdp:e.sdp,type:e.type};await V(w(l,"calls1",t.id),{offer:s}),console.log("offer from pa",s);const i=b(w(l,"calls1",t.id));C(i,r=>{const d=r.data();if(!c.currentRemoteDescription&&(d==null?void 0:d.answer)){const u=new RTCSessionDescription(d.answer);c.setRemoteDescription(u),console.log("answerdescription from pa",u)}});const y=b(o);C(y,r=>{r.docChanges().forEach(d=>{if(d.type==="added"){const u=new RTCIceCandidate(d.doc.data());c.addIceCandidate(u),console.log("candidate from pa",u)}})}),j.disabled=!1};q.onclick=async()=>{const a=R.value,t=f(l,"calls1"),n=f(l,"calls1",a,"answerCandidates"),o=f(l,"calls1",a,"offerCandidates");c.onicecandidate=d=>{d.candidate&&v(n,d.candidate.toJSON())};const e=(await x(w(t,a))).data();console.log(e);const s=e.offer;await c.setRemoteDescription(new RTCSessionDescription(s));const i=await c.createAnswer();i.sdp=i.sdp.replace("useinbandfec=1","useinbandfec=1; stereo=1; maxaveragebitrate=510000"),await c.setLocalDescription(i),console.log("answerDescription from pb",i);const y={type:i.type,sdp:i.sdp};await z(w(l,"calls1",a),{answer:y}),console.log("answer from pb",y);const r=b(o);C(r,d=>{d.docChanges().forEach(u=>{if(u.type==="added"){let O=u.doc.data();c.addIceCandidate(new RTCIceCandidate(O))}})})};J.onclick=async()=>{console.log("button has been pushed");var a=document.getElementById("gain");p.muted=!0;var t=new AudioContext,n=t.createMediaStreamSource(m),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=1e3,o.gain.value=a.value,n.connect(o),o.connect(t.destination),console.log(t.destination),console.log(m)};
