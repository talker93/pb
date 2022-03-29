import{i as se,B as ie,S as q,E as j,y as le,C as R,q as F,I as Y,l as re,p as de}from"./vendor.e711fc39.js";const ue=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(t){if(t.ep)return;t.ep=!0;const c=n(t);fetch(t.href,c)}};ue();const pe={apiKey:"AIzaSyBLAS9TSpc8v-273koNVal1Tt1jes7lAQQ",authDomain:"webcodec-64053.firebaseapp.com",projectId:"webcodec-64053",storageBucket:"webcodec-64053.appspot.com",messagingSenderId:"499852745372",appId:"1:499852745372:web:c5d05223a82e7e26c86b59",measurementId:"G-TY670YZV22"};se(pe);const ge={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},l=new RTCPeerConnection(ge);let N=null,K=null;const me=Date.now();let W=0;qe(l);const Q=document.getElementById("webcamButton"),P=document.getElementById("webcamVideo"),V=document.getElementById("callButton"),X=document.getElementById("callInput"),G=document.getElementById("answerButton"),ee=document.getElementById("remoteVideo"),fe=document.getElementById("hangupButton"),ae=document.getElementById("callMessage");let r,b,u=!1;Nexus.colors.accent="#2596be";Nexus.colors.fill="#333";var ve=new Nexus.Toggle("#muteMo",{state:!0});ve.on("change",function(o){document.getElementById("muteMonitor").click()});var he=new Nexus.Toggle("#muteMy");he.on("change",function(o){document.getElementById("muteMe").click()});var be=new Nexus.Select("audioSourceSelect",{size:[200,20],options:["Default - MacBook Pro Microphone","iPhone"]});be.colorize("fill","#eee");var we=new Nexus.Select("audioOutputSelect",{size:[200,20],options:["Defalut - MacBook Pro Speakers (Built-in)"]});we.colorize("fill","#eee");var ne=new Nexus.TextButton("#startDevices",{size:[150,50],state:!1,text:"Init",alternateText:"Activated"});ne.colorize("fill","#eee");ne.on("change",function(o){Q.click()});var x=new Nexus.Dial("#comp_threshold",{size:[50,50],interaction:"radial",mode:"relative",min:-100,max:0,step:1,value:-24}),D=new Nexus.Dial("#comp_knee",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:40,step:1,value:30}),B=new Nexus.Dial("#comp_ratio",{size:[50,50],interaction:"radial",mode:"relative",min:1,max:20,step:1,value:12}),I=new Nexus.Dial("#comp_attack",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:1,step:.01,value:.003}),y=new Nexus.Dial("#comp_release",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:1,step:.05,value:.25}),E=new Nexus.Toggle("#comp_bypass");new Nexus.Dial("#reverb",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:20,step:1,value:10});new Nexus.Toggle("#rev_bypass");var O=new Nexus.Toggle("#eq_bypass"),k=new Nexus.Select("eq_type",{size:[200,20],options:["lowshelf","highshelf"]}),S=new Nexus.Slider("eq_freq",{size:[120,20],mode:"relative",min:20,max:2e4,step:100,value:1e3}),T=new Nexus.Dial("#eq1",{size:[50,50],interaction:"radial",mode:"relative",min:-20,max:40,step:0,value:10}),_=new Nexus.Dial("#eq2",{size:[50,50],interaction:"radial",mode:"relative",min:-20,max:40,step:0,value:10}),z=new Nexus.Dial("#eq3",{size:[50,50],interaction:"radial",mode:"relative",min:-20,max:40,step:0,value:10}),M=new Nexus.Toggle("#gain_bypass"),w=new Nexus.Dial("#gain",{size:[50,50],interaction:"radial",mode:"relative",min:0,max:20,step:1,value:2}),J=new Nexus.Toggle("#pan_bypass"),C=new Nexus.Dial("#pan",{size:[50,50],interaction:"radial",mode:"relative",min:-1,max:1,step:.1,value:0}),e={comp:{attack:I.value,bypass:E.state,knee:D.value,ratio:B.value,release:y.value,threshold:x.value},eq:{low:T.value,mid:_.value,high:z.value,bypass:O.state,freq:S.value,type:k.value},pan:{bypass:J.state,pan:C.value},gain:{bypass:M.state,gain:w.value},whatChanged:"none"};const ye=document.getElementById("remoteVideo"),A=document.getElementById("audioSource"),L=document.getElementById("audioOutput"),$=[A,L];function ke(o){const s=$.map(n=>n.value);$.forEach(n=>{for(;n.firstChild;)n.removeChild(n.firstChild)});for(let n=0;n!==o.length;++n){const i=o[n],t=document.createElement("option");t.value=i.deviceId,i.kind==="audioinput"?(t.text=i.label||`microphone ${A.length+1}`,A.appendChild(t)):i.kind==="audiooutput"&&(t.text=i.label||`speaker ${L.length+1}`,L.appendChild(t))}$.forEach((n,i)=>{Array.prototype.slice.call(n.childNodes).some(t=>t.value===s[i])&&(n.value=s[i])})}navigator.mediaDevices.enumerateDevices().then(ke).catch(console.log("media query success"));function Se(){const o=L.value;ye.setSinkId(o).then(console.log("success"))}function te(){return{audio:{deviceId:A.value,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1,latency:0,sampleRate:48e3,sampleSize:16,volume:1},video:!1}}var oe=te();A.addEventListener("change",function(){oe=te()});L.onchange=Se;Q.onclick=async()=>{N=await navigator.mediaDevices.getUserMedia(oe),K=new MediaStream,N.getTracks().forEach(o=>{l.addTrack(o,N)}),l.ontrack=o=>{o.streams[0].getTracks().forEach(s=>{K.addTrack(s)})},ee.srcObject=K,P.play(),ee.play(),V.disabled=!1,G.disabled=!1,Q.disabled=!0,Ce()};const H=document.getElementById("muteMonitor");H.checked==!0?P.muted=!0:P.muted=!1;H.addEventListener("change",function(){H.checked==!0?(P.muted=!0,console.log("monitor muted")):(P.muted=!1,console.log("monitor unmuted"))});const U=document.getElementById("muteMe");U.checked=!1;U.addEventListener("change",function(){U.checked==!0?(N.getTracks()[0].enabled=!1,console.log("muted me")):(N.getTracks()[0].enabled=!0,console.log("unmuted me"))});const h=ie();V.onclick=async()=>{r=l.createDataChannel("sendDataChannel"),r.onopen=a=>{console.log("send channel opened")},r.onclose=a=>{console.log("send channel closed")},l.ondatachannel=a=>{b=a.channel,b.onmessage=async d=>{switch(u=!0,e=JSON.parse(d.data),e.whatChanged){case"comp.threshold":await(x.value=e.comp.threshold),u=!1;break;case"comp.release":await(y.value=e.comp.release),u=!1;break;case"comp.attack":await(I.value=e.comp.attack);break;case"comp.knee":await(D.value=e.comp.knee);break;case"comp.ratio":await(B.value=e.comp.ratio);break;case"comp.reduction":await(comp_recduction.value=e.comp.reduction);break;case"eq.type":await(k.value=e.eq.type);break;case"eq.freq":await(S.value=e.eq.freq);break;case"eq.low":await(T.value=e.eq.low);break;case"eq.mid":await(_.value=e.eq.mid);break;case"eq.high":await(z.value=e.eq.high);break;case"pan.pan":await(C.value=e.pan.pan);break;case"gain.gain":await(w.value=e.gain.gain);break;case"comp.bypass":await(E.state=e.comp.bypass);break;case"eq.bypass":await(O.state=e.eq.bypass);break;case"gain.bypass":await(M.state=e.gain.bypass);break;case"pan.bypass":await(J.state=e.pan.bypass);break;default:console.log("invalid exchanged value");break}},b.onopen=d=>{console.log("receive channel opened"),g()},b.onclose=d=>{console.log("receive channel closed"),g()}};let o=document.createTextNode("You created a call.");ae.appendChild(o),V.disabled=!0,G.disabled=!0;const s=q(h,"calls1"),n=await j(s,{});X.value=n.id;const i=q(h,"calls1",n.id,"offerCandidates"),t=q(h,"calls1",n.id,"answerCandidates");l.onicecandidate=a=>{a.candidate&&j(i,a.candidate.toJSON()),console.log("PA updated candidates in database"),g()};const c=await l.createOffer().then(console.log("PA created offer"));g(),c.sdp=c.sdp.replace("useinbandfec=1","useinbandfec=1; stereo=1; maxaveragebitrate=510000"),await l.setLocalDescription(c).then(console.log("PA set local desc")),g();const m={sdp:c.sdp,type:c.type};await le(R(h,"calls1",n.id),{offer:m}).then(console.log("PA updated offer in database")),g();const f=F(R(h,"calls1",n.id));Y(f,a=>{const d=a.data();if(!l.currentRemoteDescription&&(d==null?void 0:d.answer)){const v=new RTCSessionDescription(d.answer);l.setRemoteDescription(v),console.log("PA set remote desc",v),g()}});const p=F(t);Y(p,a=>{a.docChanges().forEach(d=>{d.type==="added"&&(new RTCIceCandidate(d.doc.data()),l.addIceCandidate(candi),console.log("PA added ICE Candi: ",candi),g())})}),fe.disabled=!1};G.onclick=async()=>{r=l.createDataChannel("sendDataChannel2"),r.onopen=d=>{console.log("send channel opened")},r.onclose=d=>{console.log("send channel closed")},l.ondatachannel=d=>{b=d.channel,b.onmessage=async v=>{switch(u=!0,e=JSON.parse(v.data),e.whatChanged){case"comp.threshold":await(x.value=e.comp.threshold),u=!1;break;case"comp.release":await(y.value=e.comp.release),u=!1;break;case"comp.attack":await(I.value=e.comp.attack);break;case"comp.knee":await(D.value=e.comp.knee);break;case"comp.ratio":await(B.value=e.comp.ratio);break;case"comp.reduction":await(comp_recduction.value=e.comp.reduction);break;case"eq.type":await(k.value=e.eq.type);break;case"eq.freq":await(S.value=e.eq.freq);break;case"eq.low":await(T.value=e.eq.low);break;case"eq.mid":await(_.value=e.eq.mid);break;case"eq.high":await(z.value=e.eq.high);break;case"pan.pan":await(C.value=e.pan.pan);break;case"gain.gain":await(w.value=e.gain.gain);break;case"comp.bypass":await(E.state=e.comp.bypass);break;case"eq.bypass":await(O.state=e.eq.bypass);break;case"gain.bypass":await(M.state=e.gain.bypass);break;case"pan.bypass":await(J.state=e.pan.bypass);break;default:console.log("invalid exchanged value");break}},b.onopen=v=>{console.log("receive channel opened"),g()},b.onclose=v=>{console.log("receive channel closed"),g()}};let o=document.createTextNode("You answered a call!");ae.appendChild(o),V.disabled=!0,G.disabled=!0;const s=X.value,n=q(h,"calls1"),i=q(h,"calls1",s,"answerCandidates"),t=q(h,"calls1",s,"offerCandidates");l.onicecandidate=d=>{d.candidate&&j(i,d.candidate.toJSON()),console.log("PB updated candidate in database"),g()};const m=(await re(R(n,s))).data().offer;await l.setRemoteDescription(new RTCSessionDescription(m)),console.log("PB set remote desc"),g();const f=await l.createAnswer();f.sdp=f.sdp.replace("useinbandfec=1","useinbandfec=1; stereo=1; maxaveragebitrate=510000"),await l.setLocalDescription(f),console.log("PB set local desc"),g();const p={type:f.type,sdp:f.sdp};await de(R(h,"calls1",s),{answer:p}),console.log("PB updated answer in database"),g();const a=F(t);Y(a,d=>{d.docChanges().forEach(v=>{if(v.type==="added"){let ce=v.doc.data(),Z=new RTCIceCandidate(ce);l.addIceCandidate(Z),console.log("PB added ICE Candi: ",Z),g()}})})};async function Ce(){console.log("button has been pushed");var o=new AudioContext,s=o.createMediaStreamSource(N),n=o.createBiquadFilter();n.type=k.value,n.frequency.value=S.value,n.gain.value=w.value;var i=o.createStereoPanner();i.pan.value=C.value;var t=o.createGain();t.gain.value=w.value;var c=o.createDynamicsCompressor();c.release.value=y.value,s.connect(c),c.connect(n),n.connect(t),t.connect(i),i.connect(o.destination),x.on("change",function(p){if(c.threshold.value=x.value,e.comp.threshold=x.value,e.whatChanged="comp.threshold",!u){const a=JSON.stringify(e);try{r.send(a)}catch(d){console.error(d),console.log("datachannel ready state",r.readyState),console.log("ice gathering state",l.iceGatheringState),console.log("ice connection state",l.iceConnectionState),console.log("connection state",l.connectionState)}finally{console.log("sent"),console.log("datachannel ready state",r.readyState),console.log("ice gathering state",l.iceGatheringState),console.log("ice connection state",l.iceConnectionState),console.log("connection state",l.connectionState)}console.log("threshold: ",e.comp.threshold)}}),y.on("change",function(p){if(c.release.value=y.value,e.comp.release=y.value,e.whatChanged="comp.release",!u){const a=JSON.stringify(e);r.send(a)}}),I.on("change",function(p){if(c.attack.value=I.value,e.comp.attack=I.value,e.whatChanged="comp.attack",!u){const a=JSON.stringify(e);r.send(a)}}),D.on("change",function(p){if(c.knee.value=D.value,e.comp.knee=D.value,e.whatChanged="comp.knee",!u){const a=JSON.stringify(e);r.send(a)}}),B.on("change",function(p){if(c.ratio.value=B.value,e.comp.ratio=B.value,e.whatChanged="comp.ratio",!u){const a=JSON.stringify(e);r.send(a)}}),k.on("change",function(p){if(n.type=k.value,e.eq.type=k.value,e.whatChanged="eq.type",!u){const a=JSON.stringify(e);r.send(a)}}),S.on("change",function(p){if(n.frequency.value=S.value,e.eq.freq=S.value,e.whatChanged="eq.freq",!u){const a=JSON.stringify(e);r.send(a)}}),T.on("change",function(p){if(n.gain.value=T.value,e.eq.low=T.value,e.whatChanged="eq.low",!u){const a=JSON.stringify(e);r.send(a)}}),_.on("change",function(p){if(n.gain.value=_.value,e.eq.mid=_.value,e.whatChanged="eq.mid",!u){const a=JSON.stringify(e);r.send(a)}}),z.on("change",function(p){if(n.gain.value=z.value,e.eq.high=z.value,e.whatChanged="eq.high",!u){const a=JSON.stringify(e);r.send(a)}}),C.on("change",function(p){if(i.pan.value=C.value,e.pan.pan=C.value,e.whatChanged="pan.pan",!u){const a=JSON.stringify(e);r.send(a)}}),w.on("change",function(p){if(t.gain.value=w.value,e.gain.gain=w.value,e.whatChanged="gain.gain",!u){const a=JSON.stringify(e);r.send(a)}}),E.on("change",function(p){if(E.state==!0?(c.disconnect(),s.connect(n)):(s.disconnect(n),s.connect(c),c.connect(n)),e.comp.bypass=E.state,e.whatChanged="comp.bypass",!u){const a=JSON.stringify(e);r.send(a)}}),O.on("change",function(p){if(O.state==!0?(n.disconnect(),c.connect(t)):(c.disconnect(t),c.connect(n),n.connect(t)),e.eq.bypass=O.state,e.whatChanged="eq.bypass",!u){const a=JSON.stringify(e);r.send(a)}}),M.on("change",function(p){if(M.state==!0?(t.disconnect(),n.connect(i)):(n.disconnect(i),n.connect(t),t.connect(i)),e.gain.bypass=M.state,e.whatChanged="gain.bypass",!u){const a=JSON.stringify(e);r.send(a)}}),J.on("change",function(p){if(J.state==!0?(i.disconnect(),t.connect(o.destination)):(t.disconnect(o.destination),t.connect(i),i.connect(o.destination)),e.pan.bypass=J.state,e.whatChanged="pan.bypass",!u){const a=JSON.stringify(e);r.send(a)}});var m=new Nexus.Oscilloscope("#oScope");m.connect(s);var f=new Nexus.Spectrogram("#spec");f.connect(s)}function qe(o){o.onicegatheringstatechange=s=>{console.log("iceGatheringState: ",o.iceGatheringState),g()},o.oniceconnectionstatechange=s=>{console.log("iceConnectionState: ",o.iceConnectionState),g()},o.onconnectionstatechange=s=>{console.log("connectionState: ",o.connectionState),g()}}function g(){W=Math.floor((Date.now()-me)/100),console.log("time elapsed: ",W)}
