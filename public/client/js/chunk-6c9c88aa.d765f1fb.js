(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c9c88aa"],{"0673":function(e,t,s){},a481:function(e,t,s){"use strict";var r=s("cb7c"),i=s("4bf8"),a=s("9def"),n=s("4588"),o=s("0390"),c=s("5f1b"),l=Math.max,u=Math.min,p=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};s("214f")("replace",2,(function(e,t,s,h){return[function(r,i){var a=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,a,i):s.call(String(a),r,i)},function(e,t){var i=h(s,e,this,t);if(i.done)return i.value;var p=r(e),d=String(this),v="function"===typeof t;v||(t=String(t));var m=p.global;if(m){var b=p.unicode;p.lastIndex=0}var w=[];while(1){var k=c(p,d);if(null===k)break;if(w.push(k),!m)break;var y=String(k[0]);""===y&&(p.lastIndex=o(d,a(p.lastIndex),b))}for(var O="",T=0,j=0;j<w.length;j++){k=w[j];for(var q=String(k[0]),x=l(u(n(k.index),d.length),0),S=[],_=1;_<k.length;_++)S.push(f(k[_]));var P=k.groups;if(v){var C=[q].concat(S,x,d);void 0!==P&&C.push(P);var $=String(t.apply(void 0,C))}else $=g(q,d,x,S,P,t);x>=T&&(O+=d.slice(T,x)+$,T=x+q.length)}return O+d.slice(T)}];function g(e,t,r,a,n,o){var c=r+e.length,l=a.length,u=v;return void 0!==n&&(n=i(n),u=d),s.call(o,u,(function(s,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":o=n[i.slice(1,-1)];break;default:var u=+i;if(0===u)return s;if(u>l){var d=p(u/10);return 0===d?s:d<=l?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):s}o=a[u-1]}return void 0===o?"":o}))}}))},ede1:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e.isShowHeader?s("mt-header",{attrs:{fixed:"",title:"创建工单"}},[s("div",{attrs:{slot:"left"},slot:"left"},[s("mt-button",{attrs:{icon:"back"},on:{click:function(t){return e.$router.go(-1)}}})],1)]):e._e(),s("div",{staticClass:"content",class:{"hide-header":!e.isShowHeader}},[s("div",{staticClass:"field-line arrow-right",on:{click:function(t){e.isShowTypesPicker=!0}}},[s("span",[e._v("类型:")]),s("span",[e._v(e._s(e.selectTyped||"选择工单分类"))])]),s("div",{staticClass:"field-line algin-left"},[s("span",[e._v("标题:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.request.title,expression:"request.title"}],attrs:{type:"text",placeholder:"请输入工单标题~"},domProps:{value:e.request.title},on:{input:function(t){t.target.composing||e.$set(e.request,"title",t.target.value)}}})]),s("div",{staticClass:"field-line algin-left"},[s("span",[e._v("手机:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.request.phone,expression:"request.phone"}],attrs:{type:"number",placeholder:"请输入您的手机~"},domProps:{value:e.request.phone},on:{input:function(t){t.target.composing||e.$set(e.request,"phone",t.target.value)}}})]),s("div",{staticClass:"tip"},[e._v("必填，预留手机号方便客服联系到您~")]),s("div",{staticClass:"field-line algin-left"},[s("span",[e._v("邮箱:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.request.email,expression:"request.email"}],attrs:{type:"email",placeholder:"请输入您的电子邮箱~"},domProps:{value:e.request.email},on:{input:function(t){t.target.composing||e.$set(e.request,"email",t.target.value)}}})]),s("div",{staticClass:"tip"},[e._v("非必填，预留邮箱后若工单回复后会通过邮箱通知您~")]),s("div",{staticClass:"field-line textarea"},[s("span",[e._v("内容:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.request.content,expression:"request.content"}],attrs:{placeholder:"请输入您的工单内容~"},domProps:{value:e.request.content},on:{input:function(t){t.target.composing||e.$set(e.request,"content",t.target.value)}}})]),s("div",{staticClass:"field-line arrow-right file"},[s("span",[e._v("附件:")]),s("span",{class:{ed:""!=e.source}},[e._v(e._s(e.source?"已上传附件，重新上传可替换~":"上传附件"))]),s("input",{attrs:{type:"file"},on:{change:e.uploadFile}})]),s("span",{staticClass:"sub-btn",on:{click:function(t){return e.submit()}}},[e._v("提交")])]),e.isShowTypesPicker?s("div",{staticClass:"types-sheet"},[s("div",{staticClass:"picker-box"},[s("div",{staticClass:"title"},[s("span",[e._v("选择工单类型")]),s("span",{staticClass:"sub-btn",on:{click:function(t){e.isShowTypesPicker=!1}}},[e._v("确定")])]),s("mt-picker",{attrs:{slots:e.types},on:{change:e.onValuesChange}})],1)]):e._e()],1)},i=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("a481"),s("bd86")),n=s("2f62"),o=s("76a0"),c=s("bc3a"),l=s.n(c);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d={name:"workorder_create",components:{},data:function(){return{isSubmit:!1,request:{tid:0,title:"",content:"",phone:"",email:""},selectTyped:"",source:"",isShowTypesPicker:!1}},computed:p({},Object(n["b"])(["isShowHeader","workorders","userInfo","workorderTypes","uploadToken","workorderTypes"]),{types:function(){for(var e=[],t=[{flex:1,values:[],className:"workorder-create-picker",textAlign:"center"}],s=0;s<this.workorderTypes.length;s++)e.push(this.workorderTypes[s].title);return t[0].values=e,t}}),mounted:function(){},methods:{onValuesChange:function(e,t){this.selectTyped=t[0];for(var s=0;s<this.workorderTypes.length;s++)if(t[0]==this.workorderTypes[s].title){this.request.tid=this.workorderTypes[s].id;break}console.log(e)},uploadFile:function(e){var t=e.target,s=t.files[0];this.isShowUploadLoading=!0;var r=this;this.$uploadFile({file:s,mode:this.uploadToken.mode,percent:function(){},success:function(e){var t;r.isShowUploadLoading=!1;var s=r.uploadToken.host+"/"+e,i=e.substr(e.lastIndexOf(".")+1);-1!="jpg,jpeg,png,JPG,JPEG,PNG".indexOf(i)?t="<br><img style='max-width:60%' preview='1' src='"+s+"' />":(t="<br><img style='width:20px;height:30px;top:3px; right:3px;position: relative;' preview='1' src='http://qiniu.cmp520.com/fj.png' />",t+="<a target='_blank' href='"+s+"'>下载附件</a>"),r.source=t,Object(o["Toast"])({message:"上传成功~"})},fail:function(e){r.isShowUploadLoading=!1,e.response&&e.response.data&&Object(o["Toast"])({message:e.response.data.message})}})},submit:function(){var e=this;0!=this.request.tid?""!=this.request.title.trim()?""!=this.request.content.trim()?this.isSubmit||(this.isSubmit=!0,this.request.content+=this.source,l.a.post("/public/workorder/create",this.request).then((function(t){e.isSubmit=!1,Object(o["Toast"])({message:"工单创建成功~"}),setTimeout((function(){return e.$router.replace("/workorder/detail/"+t.data.data)}),500)})).catch((function(t){e.isSubmit=!1,Object(o["Toast"])({message:t.response.data.message}),console.log(t)}))):Object(o["Toast"])({message:"工单内容不能为空！"}):Object(o["Toast"])({message:"工单标题不能为空！"}):Object(o["Toast"])({message:"请选择工单类型！"})}}},v=d,f=(s("fb2c"),s("2877")),h=Object(f["a"])(v,r,i,!1,null,"43d71195",null);t["default"]=h.exports},fb2c:function(e,t,s){"use strict";var r=s("0673"),i=s.n(r);i.a}}]);
//# sourceMappingURL=chunk-6c9c88aa.d765f1fb.js.map