(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(t,e,n){var a=n(190);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(27).default)("5d65c562",a,!0,{})},189:function(t,e,n){"use strict";var a=n(185);n.n(a).a},190:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,'.container{min-height:100vh;display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:space-around;overflow:hidden}.container .xmas{position:absolute}.container>.view{height:50vh;width:100vw;display:flex;position:relative;flex-direction:column;justify-content:space-around;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.container>.view .title{color:#35495e;width:100%;top:30vh;font-weight:100;font-size:8vh;letter-spacing:1px}.container>.view .title:after{content:"\\4E09\\5468\\5E74!";font-size:12px;position:absolute;color:#fff;background-color:#35495e;padding:4px;border-radius:4px}.container>.view .buttons{margin:0 auto;display:flex;top:60vh;text-align:center}.container>.view .buttons>.button{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0;font-size:26px;height:80px;width:120px;line-height:80px;margin:10px auto;color:#35495e;cursor:pointer}.container>.view .buttons>.button:first-of-type{-webkit-animation-delay:1s;animation-delay:1s}.container>.view .buttons>.button:nth-of-type(2){-webkit-animation-delay:1.5s;animation-delay:1.5s}.container>.view .buttons>.button:nth-of-type(3){-webkit-animation-delay:2s;animation-delay:2s}.container>.view .buttons>.button:nth-of-type(4){-webkit-animation-delay:2.5s;animation-delay:2.5s}.card-rules-wrapper{position:absolute;width:60vw;height:50vh;top:25vh;left:20vw;border:2px solid #35495e;border-radius:10px;background:#fff;text-align:center;overflow-y:auto}.card-rules-wrapper::-webkit-scrollbar{display:none}.card-rules-wrapper .close-button{padding:0 8px;text-align:right;cursor:pointer}.card-rules-wrapper .card-rules{position:relative;padding:10px 16px 16px}.card-rules-wrapper .card-rules .rule{font-size:2.5vh;line-height:200%}.card-rules-wrapper .card-rules .rule:last-of-type,.card-rules-wrapper .card-rules .rule:nth-last-of-type(2){color:red;font-weight:900}@media screen and (max-width:580px){.title:after{display:none}}.button-slot{width:100%;text-align:center;line-height:60px;background-color:#35495e;color:#fff;cursor:pointer}.content-slot .footer-wraper{padding:0 10vw;display:flex;flex-wrap:wrap;justify-content:space-between}.content-slot .footer-wraper .footer-left,.content-slot .footer-wraper .footer-right{min-width:320px}.content-slot .footer-wraper .footer-title{color:#fff;font-size:22px;margin-bottom:8px}.content-slot .footer-wraper .footer-content{color:#fff;font-size:14px;margin-bottom:8px}.content-slot .copyright{color:#fff;position:absolute;width:100vw;padding:10px 10vw;font-size:10px;bottom:0;background-color:#2c3c4e}.blurIn{-webkit-animation:1s forwards;animation:1s forwards;-webkit-animation-name:blurIn;animation-name:blurIn;-webkit-filter:blur(5px);filter:blur(5px);opacity:.5}@-webkit-keyframes blurIn{to{opacity:1;-webkit-filter:blur(0);filter:blur(0)}}@keyframes blurIn{to{opacity:1;-webkit-filter:blur(0);filter:blur(0)}}.zoomIn{-webkit-animation:1s forwards;animation:1s forwards;-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomIn{0%{-webkit-transform:scale(3);transform:scale(3);opacity:0}}@keyframes zoomIn{0%{-webkit-transform:scale(3);transform:scale(3);opacity:0}}.zoomInSmall{-webkit-animation:1s forwards;animation:1s forwards;-webkit-animation-name:zoomInSmall;animation-name:zoomInSmall}@-webkit-keyframes zoomInSmall{to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes zoomInSmall{to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-active{opacity:0}@media screen and (max-width:500px){.container>.view .buttons{margin:0}}',""])},194:function(t,e,n){"use strict";n.r(e);n(51);var a=n(7),o=n.n(a),r=n(69),i=n(95),s=n.n(i);s.a.defaults.withCredentials=!0;var l=n(103),c={head:function(){return{title:"Nazo_Game",meta:[{name:"keywords",content:"Nazo_Game"},{name:"17-answer",content:"undo"}]}},asyncData:function(){var t=o()(regeneratorRuntime.mark(function t(e){var n,a,o,r,i,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 2:if(e.req.cookies.get("nazoid")){t.next=6;break}return e.req&&e.req.cookies.set("nazoid",l("ozan"+l("nazo0")	,{maxAge:864e10})),t.next=6,s.a.post("http://localhost:8888/add");case 6:return t.prev=6,t.next=9,s.a.get("http://localhost:8888/getinfo");case 9:return n=t.sent,a=n.data,o=a.totalPerson,r=a.lastUpdate,i=a.totalLevel,e.req.cookies.get("nazoid")?c=e.req&&e.req.cookies.get("id"):(e.req&&e.req.cookies.set("id",o,{maxAge:864e10}),c=o),t.abrupt("return",{totalPerson:o,lastUpdate:r,totalLevel:i,id:c});case 15:t.prev=15,t.t0=t.catch(6);case 17:case"end":return t.stop()}},t,this,[[6,15]])}));return function(e){return t.apply(this,arguments)}}(),components:{nazoFooter:r.a},data:function(){return{viewStyleObj:{},totalPerson:void 0,lastUpdate:void 0,totalLevel:void 0,id:void 0,footerHeight:void 0,rulesOn:!1}},mounted:function(){var t=document.querySelector(".content-slot").getBoundingClientRect().height;this.footerHeight=t+120},computed:{},methods:{clickHandler:function(t){"continue"===t?this.getContinueLevel():"rules"===t?this.rulesOn=!0:"start"===t?location.href="./1.answer:":"report"===t?location.href="http://nazoreport.one-story.cn":this.rulesOn=!1},getContinueLevel:function(){var t=o()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("/continue");case 3:"nope"===(e=t.sent).data.answer||(location.href="./"+e.data.answer),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),statusChangeHandler:function(t){this.viewStyleObjFunction(t),this.$forceUpdate()},viewStyleObjFunction:function(t){var e={};if(t){var n=window.innerHeight-300,a=this.$refs.view.getBoundingClientRect().bottom;e.transform=n<a?"translate3d(0, -".concat(a-n,"px, 0)"):"translate3d(0, 0, 0)"}else e.transform="translate3d(0, 0, 0)";this.viewStyleObj=e}}},u=(n(189),n(15)),d=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"container"},[n("div",{ref:"view",staticClass:"view",style:t.viewStyleObj},[n("div",{staticClass:"title zoomIn"},[t._v("\n        Mait Game\n      ")]),t._v(" "),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button zoomInSmall continue",on:{click:function(e){t.clickHandler("continue")}}},[t._v("继续")]),t._v(" "),n("div",{staticClass:"button zoomInSmall start",on:{click:function(e){t.clickHandler("start")}}},[t._v("开始")]),t._v(" "),n("div",{staticClass:"button zoomInSmall rules",on:{click:function(e){t.clickHandler("rules")}}},[t._v("规则")]),t._v(" "),n("div",{staticClass:"button zoomInSmall report",on:{click:function(e){t.clickHandler("report")}}},[t._v("报告")])])])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.rulesOn,expression:"rulesOn"}],staticClass:"card-rules-wrapper"},[n("div",{staticClass:"close-button",on:{click:function(e){t.clickHandler("closeRules")}}},[t._v("×")]),t._v(" "),n("div",{staticClass:"card-rules"},[n("div",{staticClass:"rule"},[t._v("为确保您的游戏体验 请使用PC进行游戏(Chrome最佳) ")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("谜题是各类数学题，  ")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("难度单调不减, ")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("遇到特殊函数，您也可以上网检索。  ")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("答案大小写并"),n("b",[t._v("没有那么敏感")]),t._v("，请安心食用")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("如果您有任何不同的解法，欢迎到知乎给@绝零之冰 私信.")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("为了您和他人的游戏体验")]),t._v(" "),n("div",{staticClass:"rule"},[t._v("请不要将答案或解题思路透露到任何平台上。")])])])]),t._v(" "),n("nazo-footer",{attrs:{height:t.footerHeight,"footer-background":"#3e464c"},on:{status:function(e){t.statusChangeHandler(e)}}},[n("div",{staticClass:"button-slot",attrs:{slot:"button-slot"},slot:"button-slot"},[t._v("\n      详细信息\n    ")]),t._v(" "),n("div",{staticClass:"content-slot",attrs:{slot:"content-slot"},slot:"content-slot"},[n("div",{staticClass:"footer-wraper"},[n("div",{staticClass:"“footer-left”"},[n("div",{staticClass:"footer-title"},[t._v("统计信息")]),t._v(" "),n("div",{staticClass:"footer-content"},[t._v("\n            您是目前 "+t._s(t.totalPerson)+" 位中"),n("br"),t._v("\n            第 "+t._s(t.id)+" 位进入游戏的挑战者。 "),n("br"),t._v("\n            上次更新于 "+t._s(t.lastUpdate)+"。"),n("br"),t._v("\n            目前共有 "+t._s(t.totalLevel)+" 关。"),n("br")])]),t._v(" "),n("div",{staticClass:"footer-right"},[n("div",{staticClass:"footer-title"},[t._v("特殊贡献者")]),t._v(" "),n("div",{staticClass:"footer-content"},[t._v("\n            Nazo_Game/Cherry / "),n("br"),t._v("\n             屏幕面前的您\n          ")])])]),t._v(" "),n("div",{staticClass:"copyright"},[t._v("\n        版本 1.0.0 。版权所有 © 2022 庚默。保留所有权利。关注知乎@绝零之冰，获得更新进度\n      ")])])])],1)},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports}}]);
