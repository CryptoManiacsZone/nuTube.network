(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VuTa:function(n,e,l){"use strict";l.r(e);var t=l("keVe"),i=function(){return function(){}}(),u=l("fYis"),o=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),r=t.lb({encapsulation:0,styles:[[".spinner[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;width:35%;height:35%;min-height:200px;min-width:200px;margin:auto;display:block;vertical-align:middle}"]],data:{}});function s(n){return t.Bb(0,[(n()(),t.nb(0,0,null,null,0,"img",[["alt","Loading..."],["class","spinner"],["src","assets/loading-spinner.svg"]],null,null,null,null,null))],null,null)}var a=l("bb6g"),c=l("1ob4"),d=l("6CUI"),h=l.n(d),b=l("ixZW"),p=l("JLJU"),g=l("4w17"),v=function(){function n(n,e,l,t,i){this.navigationService=n,this.route=e,this.web3Service=l,this.raidenService=t,this.zone=i,this.loading=!1,this.receiving=!1,this.tokenAddress="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",this.paymentBuffer=0}return Object.defineProperty(n.prototype,"mainVideoEl",{set:function(n){this.videoPlayer=n.nativeElement},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.navigationService.showBackButton=!0,this.id=this.route.snapshot.paramMap.get("id"),this.connect()},n.prototype.connect=function(){return a.b(this,void 0,void 0,function(){var n,e,l,t,i,u,o,r,s=this;return a.e(this,function(a){switch(a.label){case 0:return this.loading=!0,[4,this.web3Service.signMessage(this.id)];case 1:n=a.sent(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.raidenService.createChannel(this.tokenAddress,this.id,100)];case 3:return l=a.sent(),console.log("createResult",l),[3,5];case 4:return e=a.sent(),console.log(e),409!==e.status&&"maniacs"!==this.id?[2]:[3,5];case 5:return a.trys.push([5,7,,8]),[4,this.raidenService.pay(this.tokenAddress,this.id,1)];case 6:return l=a.sent(),console.log("createResult",l),[3,8];case 7:return t=a.sent(),console.log(t),[3,8];case 8:return this.peer=new h.a,this.peer.on("open",function(){console.log("PeerID:",s.peer.id)}),this.peer.on("error",function(n){s.loading=!0,alert(n),console.error(n),window.location.reload()}),i=function(){var n=new(window.AudioContext||window.webkitAudioContext||!1),e=n.createOscillator(),l=e.connect(n.createMediaStreamDestination());e.start();var t=l.stream.getAudioTracks()[0];return Object.assign(t,{enabled:!1})}(),u=function(n){var e=n.width,l=n.height,t=Object.assign(document.createElement("canvas"),{width:e,height:l});t.getContext("2d").fillRect(0,0,e,l);var i=t.captureStream().getVideoTracks()[0];return Object.assign(i,{enabled:!1})}({width:1280,height:720}),o=new MediaStream([i,u]),r=this.peer.call("NUTUBE_NETWORK_"+this.id,o,{metadata:n}),console.log("call",r),this.initStatus(r.peer,r.peerConnection),r.on("stream",function(n){console.log("remoteStream",n),s.receiving=!0,s.videoPlayer.srcObject=n,s.videoPlayer.play(),s.remoteStream=n,s.loading=!1}),r.on("error",function(n){s.loading=!0,alert(n),console.log("Error",n),window.location.reload()}),[2]}})})},n.prototype.initStatus=function(n,e){return a.b(this,void 0,void 0,function(){var n=this;return a.e(this,function(l){return g(e,function(e){return a.b(n,void 0,void 0,function(){var n,l,t=this;return a.e(this,function(i){switch(i.label){case 0:if(console.log("result.video",e.video),this.paymentBuffer+=e.video.bytesReceived-this.bytesReceived,this.zone.run(function(){return a.b(t,void 0,void 0,function(){return a.e(this,function(n){return this.bytesReceived=e.video.bytesReceived,[2]})})}),!(this.paymentBuffer>1048576))return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.raidenService.pay(this.tokenAddress,this.id,1)];case 2:return n=i.sent(),console.log("payResult",n),this.paymentBuffer=0,[3,4];case 3:return l=i.sent(),console.log(l),[3,4];case 4:return[2]}})})},2e3),[2]})})},n}(),f=l("X+PR"),w=t.lb({encapsulation:0,styles:[[""]],data:{}});function m(n){return t.Bb(0,[t.yb(402653184,1,{mainVideoEl:0}),(n()(),t.nb(1,0,null,null,19,"div",[["class","container mt-4"]],null,null,null,null,null)),(n()(),t.nb(2,0,null,null,1,"button",[["class","btn btn-info float-right"]],null,null,null,null,null)),(n()(),t.Ab(-1,null,["RELAY"])),(n()(),t.nb(4,0,null,null,3,"h4",[],null,null,null,null,null)),(n()(),t.nb(5,0,null,null,1,"span",[["class","badge badge-danger text-blink"]],null,null,null,null,null)),(n()(),t.Ab(-1,null,["LIVE!"])),(n()(),t.Ab(-1,null,[" Crypto Maniacs @ ETHCapeTown"])),(n()(),t.nb(8,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.nb(9,0,null,null,1,"app-loading-spinner",[],[[8,"hidden",0]],null,null,s,r)),t.mb(10,114688,null,0,o,[],null,null),(n()(),t.nb(11,0,[[1,0],["videoPlayer",1]],null,1,"video",[["controls",""],["height","420"],["width","100%"]],[[8,"hidden",0]],null,null,null,null)),(n()(),t.Ab(-1,null,[" Your browser does not support the video tag. "])),(n()(),t.nb(13,0,null,null,7,"div",[["class","text-center"]],[[8,"hidden",0]],null,null,null,null)),(n()(),t.nb(14,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.nb(15,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t.Ab(-1,null,["Price: 1$ / GB"])),(n()(),t.nb(17,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t.Ab(18,null,["Received: "," MB"])),(n()(),t.nb(19,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t.Ab(20,null,["Costs: "," $"]))],function(n,e){n(e,10,0)},function(n,e){var l=e.component;n(e,9,0,l.receiving&&!l.loading),n(e,11,0,!l.receiving&&l.loading),n(e,13,0,!l.receiving&&l.loading),n(e,18,0,(l.bytesReceived/1024/1024).toFixed(2)),n(e,20,0,(1/1073741824*l.bytesReceived).toFixed(8))})}function y(n){return t.Bb(0,[(n()(),t.nb(0,0,null,null,1,"app-view",[],null,null,null,m,w)),t.mb(1,114688,null,0,v,[c.a,f.a,b.a,p.a,t.z],null,null)],function(n,e){n(e,1,0)},null)}var A=t.jb("app-view",v,y,{},{},[]),k=l("TOqr"),S=function(){return function(){}}();l.d(e,"ViewModuleNgFactory",function(){return C});var C=t.kb(i,[],function(n){return t.tb([t.ub(512,t.j,t.ab,[[8,[u.a,A]],[3,t.j],t.x]),t.ub(4608,k.i,k.h,[t.u,[2,k.o]]),t.ub(1073742336,k.b,k.b,[]),t.ub(1073742336,f.n,f.n,[[2,f.t],[2,f.k]]),t.ub(1073742336,S,S,[]),t.ub(1073742336,i,i,[]),t.ub(1024,f.i,function(){return[[{path:"",component:v}]]},[])])})}}]);