(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/code-scanner-pwa/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0423":function(e){e.exports=JSON.parse('{"message":"こんにちは i18n !!"}')},"49f8":function(e,t,a){var n={"./en.json":"edd4","./fr.json":"f693","./ja.json":"0423"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="49f8"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("AppBar"),a("v-main",[e.supported?[a("Camera",{ref:"camera",staticClass:"mt-6",on:{ready:e.startDetection}}),a("div",{staticClass:"d-flex justify-center mt-16"},[a("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{width:"2",indeterminate:""}})],1),a("DetectionResult",{ref:"results",on:{close:e.startCamera}})]:a("div",{staticClass:"pa-4 font-weight-black"},[e._v(e._s(e.$t("bad_browser")))])],2)],1)},i=[],s=a("2909"),c=a("1da1"),l=(a("96cf"),a("d3b7"),a("caad"),a("2532"),a("d81d"),a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-title",[e._v("Code Scanner")]),a("v-spacer"),a("Locale")],1)}),u=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",r,!1),n),[a("v-icon",[e._v("mdi-translate")]),a("v-icon",{attrs:{"x-small":""}},[e._v("mdi-chevron-down")])],1)]}}])},[a("v-list",[a("v-list-item-group",{model:{value:e.locale,callback:function(t){e.locale=t},expression:"locale"}},e._l(e.availableLocales,(function(t){var n=t.locale,r=t.language;return a("v-list-item",{key:n,attrs:{value:n}},[a("v-list-item-title",[e._v(e._s(r))])],1)})),1)],1)],1)},f=[],p=(a("159b"),a("ddb0"),a("ac1f"),a("466d"),a("a925"));r["a"].use(p["a"]);var v="lang",m="en";function h(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];t[r]=e(a)}})),t}var b=null===(n=navigator.language.match(/[a-z]+/))||void 0===n?void 0:n[0],g=localStorage.getItem(v)||Object({NODE_ENV:"production",BASE_URL:"/code-scanner-pwa/"}).VUE_APP_I18N_LOCALE||b;function w(e){localStorage.setItem(v,e)}var _=new p["a"]({locale:g||m,fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/code-scanner-pwa/"}).VUE_APP_I18N_FALLBACK_LOCALE||m,messages:h()}),O={computed:{locale:{get:function(){return this.$i18n.locale},set:function(e){this.$i18n.locale=e,w(e)}}},created:function(){this.availableLocales=[{locale:"en",language:"English"},{locale:"fr",language:"Français"},{locale:"ja",language:"日本語"}]}},y=O,V=a("2877"),E=a("6544"),S=a.n(E),j=a("8336"),k=a("132d"),A=a("8860"),x=a("da13"),C=a("1baa"),R=a("5d23"),D=a("e449"),N=Object(V["a"])(y,d,f,!1,null,null,null),T=N.exports;S()(N,{VBtn:j["a"],VIcon:k["a"],VList:A["a"],VListItem:x["a"],VListItemGroup:C["a"],VListItemTitle:R["c"],VMenu:D["a"]});var I={components:{Locale:T}},P=I,L=a("40dc"),$=a("bb78"),M=a("2fa4"),U=Object(V["a"])(P,l,u,!1,null,null,null),B=U.exports;S()(U,{VAppBar:L["a"],VAppBarTitle:$["a"],VSpacer:M["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.cameraPermission!==e.PERMISSIONS.GRANTED,expression:"cameraPermission !== PERMISSIONS.GRANTED"}],staticClass:"font-weight-black message"},[e._v(e._s(e.$t("camera_not_allowed")))]),a("video",{ref:"video",attrs:{id:"video",autoplay:""},on:{loadeddata:e.onVideoStateChange}})])},H=[],G=(a("dca8"),Object.freeze({GRANTED:"granted",DENIED:"denied",PROMPT:"prompt"})),q=Object.freeze({HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4}),z={data:function(){return{cameraPermission:null,started:!1}},watch:{cameraPermission:function(e){e!==G.DENIED&&this.started&&this.createVideoStream()},started:function(e){e&&this.cameraPermission!==G.DENIED&&this.createVideoStream()}},created:function(){this.videoStream=null,this.PERMISSIONS=G},mounted:function(){this.listenPermissions()},methods:{listenPermissions:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.permissions.query({name:"camera"});case 2:a=t.sent,e.cameraPermission=a.state,a.onchange=function(t){if("change"===t.type){var a=t.target.state;e.cameraPermission=a}};case 5:case"end":return t.stop()}}),t)})))()},createVideoStream:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.creatingStream&&!e.videoStream){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e.creatingStream=!0,t.next=6,navigator.mediaDevices.getUserMedia({video:!0});case 6:e.videoStream=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),e.videoStream=null;case 12:return t.prev=12,e.creatingStream=!1,e.$refs.video.srcObject=e.videoStream,t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[2,9,12,16]])})))()},stopVideoStream:function(){var e,t,a=null!==(e=null===(t=this.videoStream)||void 0===t?void 0:t.getTracks())&&void 0!==e?e:[];a.forEach((function(e){e.stop()})),this.videoStream=null,this.$refs.video.srcObject=null},start:function(){this.started&&this.$refs.video.paused?this.$refs.video.play():this.started=!0},pause:function(){this.$refs.video.pause()},stop:function(){this.started=!1,this.stopVideoStream()},onVideoStateChange:function(){this.$refs.video.readyState===q.HAVE_ENOUGH_DATA&&this.$emit("ready",this.$refs.video)}}},J=z,W=(a("bd45"),Object(V["a"])(J,F,H,!1,null,"0591259c",null)),K=W.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",flat:""}},[a("v-toolbar-title",[e._v(e._s(e.results.length)+" codes found")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.visible=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-list",{staticClass:"overflow-y-auto"},e._l(e.results,(function(t,n){var r=t.rawValue,o=t.format;return a("div",{key:"result-"+n},[a("ResultListItem",{attrs:{rawValue:r,format:o},on:{copy:function(t){e.copySnackbar=!0}}}),a("v-divider")],1)})),0)],1),a("v-snackbar",{attrs:{timeout:"2000"},model:{value:e.copySnackbar,callback:function(t){e.copySnackbar=t},expression:"copySnackbar"}},[a("span",[e._v("Text copied")])])],1)},Q=[],X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.rawValue))]),a("v-list-item-subtitle",[e._v(e._s(e.format))])],1),a("v-list-item-action",[a("div",[e.isURL?a("v-btn",{attrs:{href:e.rawValue,target:"_blank",icon:""}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-open-in-new")])],1):e._e(),a("v-btn",{staticClass:"ml-2",attrs:{icon:""},on:{click:e.copyToClipboard}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-content-copy")])],1)],1)])],1)},Y=[],ee=(a("07ac"),a("d4ec")),te=a("bee2"),ae=a("d5e4"),ne=a("9bd1"),re=a("5364"),oe=(a("3ca3"),a("10d1"),Object.freeze({AZTEC:"aztec",CODE_128:"code_128",CODE_39:"code_39",CODE_93:"code_93",CODABAR:"codabar",DATA_MATRIX:"data_matrix",EAN_13:"ean_13",EAN_8:"ean_8",ITF:"itf",PDF417:"pdf417",QR_CODE:"qr_code",UPC_A:"upc_a",UPC_E:"upc_e",UNKNOWN:"unknown"})),ie=new WeakMap,se=new WeakMap,ce=new WeakMap,le=new WeakMap,ue=function(){function e(){var t=this;Object(ee["a"])(this,e),Object(ae["a"])(this,ie,{writable:!0,value:void 0}),Object(ae["a"])(this,se,{writable:!0,value:void 0}),Object(ae["a"])(this,ce,{writable:!0,value:void 0}),Object(ae["a"])(this,le,{writable:!0,value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=ne["a"],e.t1=t,e.t2=se,e.next=5,window.BarcodeDetector.getSupportedFormats();case 5:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),Object(ne["a"])(t,ie,new window.BarcodeDetector({formats:Object(re["a"])(t,se)}));case 8:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}()}),Object(ne["a"])(this,ce,Object(re["a"])(this,le).call(this))}return Object(te["a"])(e,[{key:"isReady",get:function(){return Object(re["a"])(this,ce)}},{key:"supportedFormats",get:function(){return Object(re["a"])(this,se)}},{key:"detect",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){if(Object(re["a"])(a,ie)){var n=function n(){Object(re["a"])(a,ie).detect(t).then((function(t){t.length>0?e(t):requestAnimationFrame(n)})).catch((function(e){console.log("Error",e.message)}))};n()}else e([])})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}],[{key:"supported",get:function(){return"BarcodeDetector"in window}}]),e}(),de={props:{rawValue:{type:String,required:!0},format:{type:String,required:!0,validator:function(e){return Object.values(oe).includes(e)}}},computed:{isURL:function(){return this.rawValue.match(/^https?:\/\/.+$/)}},methods:{copyToClipboard:function(){navigator.clipboard.writeText(this.rawValue),this.$emit("copy")}}},fe=de,pe=a("1800"),ve=Object(V["a"])(fe,X,Y,!1,null,null,null),me=ve.exports;S()(ve,{VBtn:j["a"],VIcon:k["a"],VListItem:x["a"],VListItemAction:pe["a"],VListItemContent:R["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"]});var he={components:{ResultListItem:me},data:function(){return{visible:!1,results:[],copySnackbar:!1}},watch:{visible:function(e){e||(this.results=[],this.$emit("close"))}},methods:{show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];0!==e.length&&(this.results=e,this.visible=!0)}}},be=he,ge=a("b0af"),we=a("169a"),_e=a("ce7e"),Oe=a("2db4"),ye=a("71d9"),Ve=a("2a7f"),Ee=Object(V["a"])(be,Z,Q,!1,null,null,null),Se=Ee.exports;S()(Ee,{VBtn:j["a"],VCard:ge["a"],VDialog:we["a"],VDivider:_e["a"],VIcon:k["a"],VList:A["a"],VSnackbar:Oe["a"],VSpacer:M["a"],VToolbar:ye["a"],VToolbarTitle:Ve["a"]});var je={name:"App",components:{AppBar:B,Camera:K,DetectionResult:Se},data:function(){return{detectorIsReady:!1,loading:!0}},created:function(){var e=this;this.supported=ue.supported,this.supported&&(this.detector=new ue,this.detector.isReady.then((function(){e.detectorIsReady=!0})))},mounted:function(){this.supported&&this.startCamera()},methods:{startCamera:function(){this.loading=!0,this.$refs.camera.start()},stopCamera:function(){this.$refs.camera.stop()},startDetection:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.detector.isReady;case 2:return t.loading=!1,a.next=5,t.detector.detect(e);case 5:n=a.sent.reduce((function(e,t){return e.map((function(e){return e.rawValue})).includes(t.rawValue)?e:[].concat(Object(s["a"])(e),[t])}),[]),n.length>0&&(t.$refs.results.show(n),t.stopCamera());case 7:case"end":return a.stop()}}),a)})))()}}},ke=je,Ae=a("7496"),xe=a("f6c4"),Ce=a("490a"),Re=Object(V["a"])(ke,o,i,!1,null,null,null),De=Re.exports;S()(Re,{VApp:Ae["a"],VMain:xe["a"],VProgressCircular:Ce["a"]});var Ne=a("9483");Object(Ne["a"])("".concat("/code-scanner-pwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Te=a("f309");r["a"].use(Te["a"]);var Ie=new Te["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({i18n:_,vuetify:Ie,render:function(e){return e(De)}}).$mount("#app")},bd45:function(e,t,a){"use strict";a("c7f1")},c7f1:function(e,t,a){},edd4:function(e){e.exports=JSON.parse('{"bad_browser":"Oops! This application is supported by Chromium based browsers only.","camera_not_allowed":"Please allow access to your camera to use this application."}')},f693:function(e){e.exports=JSON.parse('{"message":"bonjour i18n !!"}')}});
//# sourceMappingURL=app.473932aa.js.map