(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{186:function(t,e,n){var r=n(192);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(27).default)("639e1468",r,!0,{})},191:function(t,e,n){"use strict";var r=n(186);n.n(r).a},192:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".container{min-height:100vh;align-items:center;overflow:hidden}.container,.container>.card-wrap{display:flex;flex-direction:column;text-align:center;justify-content:space-around}.container>.card-wrap{height:60vh;width:100vw;overflow:visible}.container>.card-wrap,.container>.card-wrap .card{position:relative;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.container>.card-wrap .card{margin:0 auto;height:100%;width:60%;border:2px solid #35495e;overflow:hidden;border-radius:12px}.container>.card-wrap .card .title{position:absolute;width:100%;top:20%;font-weight:100;font-size:8vh;letter-spacing:1px}.container>.card-wrap .card .question-text,.container>.card-wrap .card .title>div{color:#35495e}.container>.card-wrap .card .question-content{display:flex;margin:0 auto;flex-direction:column;justify-content:space-around;position:absolute;width:100%;height:20%;top:60%;text-align:center;font-size:3vh}.container>.card-wrap .card .question-content .question-input>input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-bottom:1px solid #000;outline:none;padding:8px;font-size:2vh}.button-slot{width:100%;text-align:center;line-height:60px;background-color:#35495e;color:#fff;cursor:pointer}.content-slot .footer-wraper{padding:0 10vw;display:flex;flex-wrap:wrap;justify-content:space-between}.content-slot .footer-wraper .footer-left,.content-slot .footer-wraper .footer-right{min-width:320px}.content-slot .footer-wraper .footer-title{color:#fff;font-size:22px;margin-bottom:8px}.content-slot .footer-wraper .footer-content{color:#fff;font-size:14px;margin-bottom:8px}.content-slot .copyright{color:#fbfcfd;position:absolute;width:100vw;padding:10px 10vw;font-size:10px;bottom:0;background-color:#2c3c4e}.blurIn{-webkit-animation:1s forwards;animation:1s forwards;-webkit-animation-name:blurIn;animation-name:blurIn;-webkit-filter:blur(5px);filter:blur(5px);opacity:.5}@-webkit-keyframes blurIn{to{opacity:1;-webkit-filter:blur(0);filter:blur(0)}}@keyframes blurIn{to{opacity:1;-webkit-filter:blur(0);filter:blur(0)}}.cardIn{-webkit-animation:1s forwards;animation:1s forwards;-webkit-animation-name:cardIn;animation-name:cardIn}@-webkit-keyframes cardIn{0%{-webkit-transform:translate3d(0,300px,0) rotate(15deg);transform:translate3d(0,300px,0) rotate(15deg);opacity:0}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes cardIn{0%{-webkit-transform:translate3d(0,300px,0) rotate(15deg);transform:translate3d(0,300px,0) rotate(15deg);opacity:0}to{-webkit-transform:none;transform:none;opacity:1}}",""])},193:function(t,e,n){"use strict";n.r(e);n(51);var r=n(7),i=n.n(r),o=n(69),a={head:function(){return{title:"Nazo_Game"}},asyncData:function(){var t=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.req.__answer_bundle__);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),transition:"test",components:{nazoFooter:o.a},data:function(){return{viewStyleObj:{},textArray:[],qImage:"",levelNum:void 0,questionInput:void 0,thisLevelPerson:void 0,nextLevelPerson:void 0,inputValue:"",hint:"",provider:"",footerHeight:void 0}},validate:function(t){return t.store.state.validate},created:function(){},mounted:function(){var t=this,e=document.querySelector(".content-slot").getBoundingClientRect().height;if(this.footerHeight=e+120,18===this.levelNum)document.addEventListener("keydown",function(t){90==t.keyCode&&t.ctrlKey&&(window.location.href="./brainfuck")});else if(1005===this.levelNum)setTimeout(function(){document.title="answer: awesome"},3e3);else if(4000===this.levelNum)console.log("answer: level-five");else if(2200==this.levelNum)window.addEventListener("resize",function(t){t.target.innerWidth<320?document.querySelector(".question-text").innerHTML="TOBORRM":document.querySelector(".question-text").innerHTML="width: 320px;"});else if(2500===this.levelNum){var n=document.querySelector(".question-text").innerHTML;window.innerWidth<950?document.querySelector(".question-text").innerHTML="答题框被你无情的挤爆了。请在更大的屏幕上观看。":document.querySelector(".question-text").innerHTML=n,window.addEventListener("resize",function(t){t.target.innerWidth<950?document.querySelector(".question-text").innerHTML="答题框被你无情的挤爆了。请在更大的屏幕上观看。":document.querySelector(".question-text").innerHTML=n})}else 4800===this.levelNum&&(this.textArray[0]=Date.parse(new Date),window.setInterval(function(){t.textArray[0]=Date.parse(new Date),t.$forceUpdate()},1e3),this.textArray[1]="空格用_代替")},computed:{questionTextStyleObj:function(){var t={};return 2500===this.levelNum&&(t.fontSize="1vh"),t},cardStyleObj:function(){var t={};return 9000===this.levelNum&&(t.backgroundColor="#66CCFF"),t}},methods:{inputHandler:function(t){1===this.levelNum?"2"===this.inputValue&&(location.href="./1.answer:2"):2===this.levelNum&&"4t-4s"===this.inputValue&&(location.href="./ggdl")},statusChangeHandler:function(t){this.viewStyleObjFunction(t),this.$forceUpdate()},viewStyleObjFunction:function(t){var e={};if(t){var n=window.innerHeight-300,r=this.$refs["card-wrap"].getBoundingClientRect().bottom;e.transform=n<r?"translate3d(0, -".concat(r-n-50,"px, 0)"):"translate3d(0, 0, 0)"}else e.transform="translate3d(0, 0, 0)";this.viewStyleObj=e}}},s=(n(191),n(15)),l=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"container"},[n("div",{ref:"card-wrap",staticClass:"card-wrap",style:t.viewStyleObj},[n("div",{staticClass:"card cardIn",style:t.cardStyleObj},[n("div",{staticClass:"title"},[n("div",[t._v("Level "+t._s(t.levelNum))])]),t._v(" "),n("div",{staticClass:"question-content"},[t.qImage?n("div",{staticClass:"question-image"},[n("img",{staticStyle:{"max-width":"150px"},attrs:{src:t.qImage}})]):t._e(),t._v(" "),t._l(t.textArray,function(e,r){return t.textArray&&t.textArray.length?n("div",{key:r,staticClass:"question-text",style:t.questionTextStyleObj},[t._v(t._s(e)+"\n          ")]):t._e()}),t._v(" "),t.questionInput?n("div",{staticClass:"question-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.inputHandler]}})]):t._e()],2)])])]),t._v(" "),n("nazo-footer",{attrs:{height:t.footerHeight,"footer-background":"#3e464c"},on:{status:function(e){t.statusChangeHandler(e)}}},[n("div",{staticClass:"button-slot",attrs:{slot:"button-slot"},slot:"button-slot"},[t._v("详细信息")]),t._v(" "),n("div",{staticClass:"content-slot",attrs:{slot:"content-slot"},slot:"content-slot"},[n("div",{staticClass:"footer-wraper"},[n("div",{staticClass:"footer-left"},[n("div",{staticClass:"footer-title"},[t._v("统计信息")]),t._v(" "),n("div",{staticClass:"footer-content"},[n("div",[t._v("共有 "+t._s(t.thisLevelPerson)+" 名挑战者来到了这个关卡。")]),t._v(" "),void 0!==t.nextLevelPerson?n("div",[t._v("目前已有 "+t._s(t.nextLevelPerson)+" 名挑战者通过了这个关卡。")]):t._e(),t._v(" "),void 0!==t.nextLevelPerson?n("div",[t._v("通过率为 "+t._s(0===t.nextLevelPerson?0:(t.nextLevelPerson/t.thisLevelPerson*100).toFixed())+"%")]):t._e()])]),t._v(" "),n("div",{staticClass:"footer-right"},[n("div",{staticClass:"footer-title"},[t._v("本题信息")]),t._v(" "),n("div",{staticClass:"footer-content"},[t._v("\n            提示："+t._s(t.hint?t.hint:"没有提示")),n("br"),t._v("\n            创意人："+t._s(t.provider)),n("br")])])]),t._v(" "),n("div",{staticClass:"copyright"},[t._v("\n    版本 2.0.0 。版权所有 © 2022 庚默。保留所有权利。关注知乎@绝零之冰，获得更新进度\n  ")])])])],1)},[],!1,null,null,null);l.options.__file="_nazo.vue";e.default=l.exports}}]);
