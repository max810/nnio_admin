(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],m=0,p=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/nnio_admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"0d61":function(t,e,a){"use strict";a.d(e,"a",function(){return s});a("ac6a");var r=a("d225"),n=a("b0b4"),i=a("85ee"),s=function(){function t(e,a){Object(r["a"])(this,t),this.type=e,this.value=a,this.values=JSON.parse(JSON.stringify(i["a"])),this.values[e]=a}return Object(n["a"])(t,[{key:"activeValue",get:function(){return this.values[this.type]},set:function(t){this.values[this.type]=t}}]),t}()},"176d":function(t,e,a){"use strict";var r=a("6161"),n=a.n(r);n.a},"1ef2":function(t,e,a){"use strict";a.d(e,"a",function(){return l});var r=a("d225"),n=a("b0b4"),i=a("308d"),s=a("6bb5"),o=a("4e2b"),c=a("0d61"),l=function(t){function e(t,a,n){var o;return Object(r["a"])(this,e),o=Object(i["a"])(this,Object(s["a"])(e).call(this,a,n)),o.name=t,o.type=a,o.value=n,o}return Object(o["a"])(e,t),Object(n["a"])(e,null,[{key:"createDefault",value:function(){return new e("","string","")}}]),e}(c["a"])},2434:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-bordered"},[t._l(t.params,function(e){return a("tr",[a("td",{staticClass:"fit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"param.name"}],attrs:{type:"text",pattern:"[a-zA-Z0-9]"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]),a("td",[a("div",{staticClass:"form-check form-check-inline"},[a("label",[t._v("\n          Type:\n          "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"param.type"}],on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(e,"type",a.target.multiple?r:r[0])}}},t._l(t.JSONTypes,function(e){return a("option",[t._v("\n              "+t._s(e)+"\n            ")])}),0)]),a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.required,expression:"param.required"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.required)?t._i(e.required,null)>-1:e.required},on:{change:function(a){var r=e.required,n=a.target,i=!!n.checked;if(Array.isArray(r)){var s=null,o=t._i(r,s);n.checked?o<0&&t.$set(e,"required",r.concat([s])):o>-1&&t.$set(e,"required",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(e,"required",i)}}}),t._v("\n          Required\n        ")])]),a("div",[a("a",{attrs:{"data-toggle":"collapse",href:"#"+t.baseId+"-"+e.name+"-additional-constraints",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[t._v("\n          Additional constraints\n        ")]),a("div",{staticClass:"collapse",attrs:{id:t.baseId+"-"+e.name+"-additional-constraints"}},[a("div",{staticClass:"card card-body"},[a("constraints",{attrs:{param:e,baseId:"constraints-"+t.baseId.toString()}})],1)])])]),a("td",[a("close-button",{on:{click:function(a){return t.deleteParam(e)}}})],1)])}),a("tr",[a("td",[a("button",{on:{click:t.addParam}},[t._v("\n        Add param\n      ")])])])],2)},n=[],i=a("d225"),s=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),m=a("60a3"),p=a("4331"),d=a("85ee"),v=a("4833"),f=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.JSONTypes=d["b"],t.name="params-list",t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"deleteParam",value:function(t){this.params.splice(this.params.indexOf(t),1)}},{key:"addParam",value:function(t){this.params.push(p["a"].createDefault())}},{key:"beforeCreate",value:function(){this.$options.components?this.$options.components.Constraints=a("275d").default:console.log("FAILED FAILED FAILED IMPORT CONSTRAINTS")}}]),e}(m["c"]);u["a"]([Object(m["b"])(Array)],f.prototype,"params",void 0),u["a"]([Object(m["b"])(String)],f.prototype,"baseId",void 0),f=u["a"]([Object(m["a"])({components:{CloseButton:v["a"]}})],f);var b=f,y=b,h=(a("2e39"),a("2877")),O=Object(h["a"])(y,r,n,!1,null,"461cc736",null);e["a"]=O.exports},"275d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",[a("tr",[a("td",[a("label",[a("input",{attrs:{type:"radio"},domProps:{checked:!t.param.isOneOf},on:{click:function(e){t.param.isOneOf=!1}}}),t._v("\n          Constraints\n        ")])]),a("td",[a("label",[a("input",{attrs:{type:"radio"},domProps:{checked:t.param.isOneOf},on:{click:function(e){t.param.isOneOf=!0}}}),t._v("\n          One of\n        ")])])])]),t.param.isOneOf?a("div",[["object","array"].includes(t.param.type)?a("div",[t._l(t.param.activeOneOfs,function(e){return a("params-values-list",{attrs:{params:e,baseId:"oneOfs-"+t.baseId.toString(),withNames:"array"!==t.param.type}})}),a("button",{on:{click:t.addNewOneOfObject}},[t._v("\n        Add oneOfs item\n      ")])],2):a("atomic-one-ofs",{attrs:{items:t.param.activeOneOfs,itemsType:t.param.type}})],1):a("div",["object"!==t.param.type?a("atomic-constraints",{attrs:{param:t.param}}):a("params-list",{attrs:{params:t.param.activeConstraints,baseId:t.baseId}}),"array"===t.param.type?a("div",{staticClass:"container"},[t._v("\n      Constraints for array items:\n      "),a("constraints",{attrs:{param:t.param.activeConstraints.itemsConstraints,baseId:"items-"+t.baseId}})],1):t._e()],1)])},n=[],i=a("d225"),s=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),m=a("60a3"),p=a("4331"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[["number","integer"].includes(t.param.type)?a("table",{staticClass:"table atomic"},[a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.param.activeConstraints.minimum,expression:"param.activeConstraints.minimum",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.param.activeConstraints.minimum},on:{input:function(e){e.target.composing||t.$set(t.param.activeConstraints,"minimum",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._m(0),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.param.activeConstraints.maximum,expression:"param.activeConstraints.maximum",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.param.activeConstraints.maximum},on:{input:function(e){e.target.composing||t.$set(t.param.activeConstraints,"maximum",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]):["string","boolean"].includes(t.param.type)?a("table",{staticClass:"table"}):["array"].includes(t.param.type)?a("table",{staticClass:"table"},[a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.param.activeConstraints.minItems,expression:"param.activeConstraints.minItems",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:t.param.activeConstraints.minItems},on:{input:function(e){e.target.composing||t.$set(t.param.activeConstraints,"minItems",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._m(1),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.param.activeConstraints.maxItems,expression:"param.activeConstraints.maxItems",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:t.param.activeConstraints.maxItems},on:{input:function(e){e.target.composing||t.$set(t.param.activeConstraints,"maxItems",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("tr",[a("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"2"}},[t._v("\n        Type of items\n      ")]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.param.activeConstraints.itemsConstraints.type,expression:"param.activeConstraints.itemsConstraints.type"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.param.activeConstraints.itemsConstraints,"type",e.target.multiple?a:a[0])}}},[a("option"),t._l(t.JSONTypes,function(e){return a("option",[t._v("\n            "+t._s(e)+"\n          ")])})],2)])])]):t._e()])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticStyle:{"min-width":"150px","text-align":"center"}},[a("label",[t._v("<= Value <=")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticStyle:{"min-width":"150px","text-align":"center"}},[a("label",[t._v("<= # of items <=")])])}],f=a("85ee"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.JSONTypes=f["b"],t}return Object(l["a"])(e,t),e}(m["c"]);u["a"]([Object(m["b"])(p["a"])],b.prototype,"param",void 0),b=u["a"]([Object(m["a"])({})],b);var y=b,h=y,O=a("2877"),g=Object(O["a"])(h,d,v,!1,null,"cb57c5ca",null),j=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-bordered"},[t._l(t.params,function(e){return a("tr",[t.withNames?a("td",{staticClass:"fit"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"param.name"}],attrs:{type:"text",pattern:"[a-zA-Z0-9]"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]):t._e(),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"param.type"}],on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(e,"type",a.target.multiple?r:r[0])}}},t._l(t.JSONTypes,function(e){return a("option",[t._v("\n          "+t._s(e)+"\n        ")])}),0),a("br"),["array","object"].includes(e.type)?a("params-values-list",{attrs:{withNames:"array"!==e.type,params:e.activeValue,baseId:"inner-"+t.baseId}}):a("atomic-param-value-input",{attrs:{param:e,paramType:e.type}})],1),a("td",[a("close-button",{on:{click:function(a){return t.deleteLayerParamValue(e)}}})],1)])}),a("tr",[a("td",[a("button",{on:{click:t.addNewParam}},[t.withNames?a("span",[t._v("Add param value")]):a("span",[t._v("Add item")])])])])],2)},_=[],w=a("1ef2"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return["number","integer"].includes(t.paramType)?a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.param.activeValue,expression:"param.activeValue",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.param.activeValue},on:{input:function(e){e.target.composing||t.$set(t.param,"activeValue",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}):["string"].includes(t.paramType)?a("input",{directives:[{name:"model",rawName:"v-model",value:t.param.activeValue,expression:"param.activeValue"}],attrs:{type:"text"},domProps:{value:t.param.activeValue},on:{input:function(e){e.target.composing||t.$set(t.param,"activeValue",e.target.value)}}}):["boolean"].includes(t.paramType)?a("select",{directives:[{name:"model",rawName:"v-model",value:t.param.activeValue,expression:"param.activeValue"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.param,"activeValue",e.target.multiple?a:a[0])}}},[a("option"),a("option",[t._v("true")]),a("option",[t._v("false")])]):t._e()},S=[],k=a("0d61"),I=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.JSONTypes=f["b"],t}return Object(l["a"])(e,t),e}(m["c"]);u["a"]([Object(m["b"])(k["a"])],I.prototype,"param",void 0),u["a"]([Object(m["b"])(String)],I.prototype,"paramType",void 0),I=u["a"]([Object(m["a"])({})],I);var N=I,T=N,$=Object(O["a"])(T,x,S,!1,null,"f205ac9a",null),P=$.exports,A=a("4833"),E=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.JSONTypes=f["b"],t.name="params-values-list",t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"beforeCreate",value:function(){this.$options.components?this.$options.components.Constraints=a("275d").default:console.log("FAILED FAILED FAILED IMPORT CONSTRAINTS")}},{key:"addNewParam",value:function(t){this.params.push(w["a"].createDefault())}},{key:"deleteLayerParamValue",value:function(t){this.params.splice(this.params.indexOf(t),1)}}]),e}(m["c"]);u["a"]([Object(m["b"])(Array)],E.prototype,"params",void 0),u["a"]([Object(m["b"])(String)],E.prototype,"baseId",void 0),u["a"]([Object(m["b"])({type:Boolean,default:!1})],E.prototype,"withNames",void 0),E=u["a"]([Object(m["a"])({components:{CloseButton:A["a"],AtomicParamValueInput:P}})],E);var L=E,D=L,q=(a("176d"),Object(O["a"])(D,C,_,!1,null,"62bdcce2",null)),V=q.exports,J=a("2434"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table atomic"},[t._l(t.items,function(e){return a("tr",[a("td",[a("atomic-param-value-input",{attrs:{param:e,paramType:t.itemsType}})],1),a("td",[a("close-button",{on:{click:function(a){return t.deleteEntry(e)}}})],1)])}),a("tr",[a("td",[a("button",{on:{click:t.addOneOf}},[t._v("Add atomic oneOf item")])])])],2)},U=[],M=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.JSONTypes=f["b"],t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"addOneOf",value:function(t){var e=this.itemsType;this.items.push(new k["a"](e,f["a"][e]))}},{key:"deleteEntry",value:function(t){this.items.splice(this.items.indexOf(t),1)}}]),e}(m["c"]);u["a"]([Object(m["b"])(Array)],M.prototype,"items",void 0),u["a"]([Object(m["b"])(String)],M.prototype,"itemsType",void 0),M=u["a"]([Object(m["a"])({components:{CloseButton:A["a"],AtomicParamValueInput:P}})],M);var F=M,B=F,z=Object(O["a"])(B,R,U,!1,null,"a70e07ea",null),G=z.exports,H=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.name="constraints",t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"addNewOneOfObject",value:function(t){this.param.activeOneOfs.push([])}}]),e}(m["c"]);u["a"]([Object(m["b"])(p["a"])],H.prototype,"param",void 0),u["a"]([Object(m["b"])(String)],H.prototype,"baseId",void 0),H=u["a"]([Object(m["a"])({components:{AtomicOneOfs:G,ParamsValuesList:V,AtomicConstraints:j,ParamsList:J["a"]},name:"constraints"})],H);var Z=H,K=Z,W=Object(O["a"])(K,r,n,!1,null,"76d9aee8",null);e["default"]=W.exports},"2e39":function(t,e,a){"use strict";var r=a("2fd1"),n=a.n(r);n.a},"2fd1":function(t,e,a){},3257:function(t,e,a){"use strict";var r=a("ce78"),n=a.n(r);n.a},4331:function(t,e,a){"use strict";a.d(e,"a",function(){return s});a("ac4d"),a("8a81"),a("ac6a");var r=a("d225"),n=a("b0b4"),i=a("85ee"),s=function(){function t(e,a,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];Object(r["a"])(this,t),this.name=e,this.type=a,this.required=n,this.oneOfs={};var c=!0,l=!1,u=void 0;try{for(var m,p=i["b"][Symbol.iterator]();!(c=(m=p.next()).done);c=!0){var d=m.value;this.oneOfs[d]=[]}}catch(v){l=!0,u=v}finally{try{c||null==p.return||p.return()}finally{if(l)throw u}}this.oneOfs[a]=o||[],this.additionalConstraints=t.getDefaultConstraints(),this.additionalConstraints[a]=s||t.getDefaultConstraints()[a],this.isOneOf=o&&o.length>0}return Object(n["a"])(t,[{key:"activeOneOfs",get:function(){return this.oneOfs[this.type]}},{key:"activeConstraints",get:function(){return"array"===this.type&&null===this.additionalConstraints["array"].itemsConstraints&&(this.additionalConstraints["array"].itemsConstraints=new t("itemsConstraints","number",!1)),this.additionalConstraints[this.type]}}],[{key:"createDefault",value:function(){return new t("","string",!1)}},{key:"getDefaultConstraints",value:function(){return{number:{maximum:null,minimum:null},integer:{maximum:null,minimum:null},array:{minItems:null,maxItems:null,itemsConstraints:null},boolean:{},string:{},object:[]}}}]),t}()},4833:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.clicked}},[a("span",{staticStyle:{"font-size":"36px"},attrs:{"aria-hidden":"true"}},[t._v("×")])])},n=[],i=a("d225"),s=a("b0b4"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("9ab4"),m=a("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"clicked",value:function(t){this.$emit("click")}}]),e}(m["c"]);p=u["a"]([Object(m["a"])({})],p);var d=p,v=d,f=a("2877"),b=Object(f["a"])(v,r,n,!1,null,"86f1f3a8",null);e["a"]=b.exports},6161:function(t,e,a){},"64a9":function(t,e,a){},"85ee":function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"b",function(){return i}),a.d(e,"a",function(){return s});var r="https://nnio-project-dev.herokuapp.com",n={login:r+"/user/login",getLayersSchemas:r+"/admin/layers_schemas",saveLayersSchemas:r+"/admin/save_layers_schemas"},i=["string","integer","number","array","boolean","object"],s={string:"",integer:0,number:0,array:[],boolean:!1,object:[]}},bbed:function(t,e){},cd49:function(t,e,a){"use strict";a.r(e);a("6b54"),a("cadf"),a("551c"),a("f751"),a("097d");var r,n,i=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("\n    |\n    "),a("router-link",{attrs:{to:"/login"}},[t._v("LOGIN")]),t._v("\n    |\n    "),a("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN")])],1),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark"},[a("div",{staticClass:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"}),a("div",{staticClass:"mx-auto order-0"},[a("a",{staticClass:"navbar-brand mx-auto",attrs:{href:"#"}},[t._v("NNIO Admin Dashboard ")])]),a("div",{staticClass:"navbar-collapse collapse w-100 order-3 dual-collapse2"})])}],c=a("d225"),l=a("308d"),u=a("6bb5"),m=a("4e2b"),p=a("60a3"),d=(r=Object(p["a"])({}),r(n=function(t){function e(){return Object(c["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(i["default"]))||n),v=d,f=(a("034f"),a("2877")),b=Object(f["a"])(v,s,o,!1,null,null,null),y=b.exports,h=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"},[a("form",{attrs:{id:"login-form",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("h2",{staticClass:"text-center"},[t._v("Log in")]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"username",placeholder:"Email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password",required:"required"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(1)]),a("span",{style:t.loginErrorStyle,attrs:{id:"login-error"}},[t._v("Wrong email or password. Try again.")])]),a("div",{staticClass:"col-sm"})]),a("span",{attrs:{id:"err-msg"}},[t._v(t._s(t.msg))])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"first-row"}},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Log in")])])}],j=(a("96cf"),a("3b8d")),C=a("b0b4"),_=a("9ab4"),w=a("bc3a"),x=a.n(w),S=a("85ee"),k=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.email="",t.password="",t.loginSuccessfull=!0,t}return Object(m["a"])(e,t),Object(C["a"])(e,[{key:"submit",value:function(t){var e=this;this.loginSuccessfull=!0;var a=new FormData;a.append("username",this.email),a.append("password",this.password),x.a.post(S["c"].login,a).then(function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(a){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("LOGIN STATUS: ".concat(a.status,", ").concat(a.statusText)),r=a.data,n="string"==typeof r?JSON.parse(r)["access_token"]:r["access_token"],localStorage.setItem("jwt",n),t.next=6,e.$router.push({name:"admin"});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){console.log("LOGIN ERROR: ".concat(t)),console.log({err:t}),e.loginSuccessfull=!1})}},{key:"loginErrorStyle",get:function(){return{visibility:this.loginSuccessfull?"hidden":"visible"}}}]),e}(p["c"]);_["a"]([Object(p["b"])(String)],k.prototype,"msg",void 0),k=_["a"]([Object(p["a"])({})],k);var I=k,N=I,T=(a("3257"),Object(f["a"])(N,O,g,!1,null,"f9b2814a",null)),$=T.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"list-group",attrs:{id:"list-tab",role:"tablist"}},[t._l(t.layerSchemas,function(e){return a("a",{key:e.layerType,staticClass:"list-group-item list-group-item-action",attrs:{id:"list-"+e.layerType+"-list","data-toggle":"list",href:"#list-"+e.layerType,role:"tab","aria-controls":e.layerType}},[t._v(t._s(e.layerType))])}),a("div",{staticClass:"list-group-item"},[a("button",{staticClass:"btn btn-primary",staticStyle:{width:"100%",height:"100%"},on:{click:t.addLayerSchema}},[t._v("+\n          ")])]),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"list-group-item"},[a("button",{staticClass:"btn btn-success",staticStyle:{width:"100%",height:"100%"},on:{click:t.saveSchemas}},[t._v("Save\n          ")])])],2)]),a("div",{staticClass:"col-10"},[a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},t._l(t.layerSchemas,function(e){return a("div",{staticClass:"tab-pane fade show",attrs:{id:"list-"+e.layerType,role:"tabpanel","aria-labelledby":"list-"+e.layerType+"-list"}},[t._v("\n          Rename layer: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.layerType,expression:"lSchema.layerType"}],domProps:{value:e.layerType},on:{input:function(a){a.target.composing||t.$set(e,"layerType",a.target.value)}}}),a("close-button",{on:{click:function(e){return t.deleteLayerSchema(t.param)}}}),a("br"),a("br"),a("params-list",{attrs:{params:e.layerParams,baseId:e.layerType}})],1)}),0)])])])},A=[],E=function(){function t(e,a){Object(c["a"])(this,t),this.layerType=e,this.layerParams=a}return Object(C["a"])(t,null,[{key:"createDefault",value:function(){return new t("NewLayer",[])}}]),t}(),L=a("275d"),D=a("2434"),q=a("4833"),V=(a("456d"),a("7618")),J=(a("6762"),a("2fdb"),a("ac4d"),a("8a81"),a("768b")),R=(a("ac6a"),a("ffc1"),a("4331")),U=a("1ef2");function M(t){var e,a=[];e="string"==typeof t?JSON.parse(t):t;for(var r=0,n=Object.entries(e);r<n.length;r++){for(var i=Object(J["a"])(n[r],2),s=i[0],o=i[1],c=o.properties.params.properties||{},l=o.properties.params.required,u=[],m=0,p=Object.entries(c);m<p.length;m++){var d=Object(J["a"])(p[m],2),v=d[0],f=d[1],b=B(v,f,l);u.push(b)}var y=new E(s,u);a.push(y)}return window.SCHEMA=a,a}function F(t,e){var a=t.enum||[];if("object"!==e&&"array"!==e)return a.map(function(t){return new U["a"]("",e,t)});var r=[],n=!0,i=!1,s=void 0;try{for(var o,c=a[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){for(var l=o.value,u=[],m=0,p=Object.entries(l);m<p.length;m++){var d=Object(J["a"])(p[m],2),v=d[0],f=d[1];u.push(z(f,v))}r.push(u)}}catch(b){i=!0,s=b}finally{try{n||null==c.return||c.return()}finally{if(i)throw s}}return r}function B(t,e,a){var r=e,n=t,i=r["type"],s=(a||[]).includes(n),o=F(r,i),c=o&&o.length>0?R["a"].getDefaultConstraints()[i]:G(r);return new R["a"](n,i,s,c,o)}function z(t,e){var a=Array.isArray(t)?"array":Object(V["a"])(t),r=t;if("object"===a||"array"===a){for(var n=[],i=0,s=Object.entries(t);i<s.length;i++){var o=Object(J["a"])(s[i],2),c=o[0],l=o[1];n.push(z(l,c))}r=n}return new U["a"](e,a,r)}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.type;switch(e){case"string":case"boolean":return R["a"].getDefaultConstraints()[e];case"number":case"integer":return{maximum:"undefined"===typeof t.maximum?null:t.maximum,minimum:"undefined"===typeof t.minimum?null:t.minimum};case"array":var a=t.items||{};return{maxItems:"undefined"===typeof t.maxItems?null:t.maxItems,minItems:"undefined"===typeof t.minItems?null:t.minItems,itemsConstraints:B("itemsConstraints",a,["itemsConstraints"])};case"object":for(var r=[],n=0,i=Object.keys(t.properties);n<i.length;n++){var s=i[n],o=t.properties[s];r.push(B(s,o,t.required))}return r}}a("7f7f");function H(t){var e={},a=!0,r=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,c={},l=[],u=!0,m=!1,p=void 0;try{for(var d,v=o.layerParams[Symbol.iterator]();!(u=(d=v.next()).done);u=!0){var f=d.value;c[f.name]=Z(f),f.required&&l.push(f.name)}}catch(b){m=!0,p=b}finally{try{u||null==v.return||v.return()}finally{if(m)throw p}}e[o.layerType]={$schema:"http://json-schema.org/draft-04/schema#",type:"object",properties:{name:{type:"string"},type:{type:"string"},inputs:{type:"array",items:{type:"string"}},params:{type:"object",properties:c,required:l},required:["name","type","inputs","params"]}}}}catch(b){r=!0,n=b}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}return e}function Z(t){var e={type:t.type};if(t.isOneOf)if("array"===t.type)e["enum"]=t.activeOneOfs.map(function(t){return t.map(function(t){return K(t)})});else if("object"===t.type){e["enum"]=[];var a=!0,r=!1,n=void 0;try{for(var i,s=t.activeOneOfs[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,c={},l=!0,u=!1,m=void 0;try{for(var p,d=o[Symbol.iterator]();!(l=(p=d.next()).done);l=!0){var v=p.value;c[v.name]=K(v)}}catch(N){u=!0,m=N}finally{try{l||null==d.return||d.return()}finally{if(u)throw m}}e["enum"].push(c)}}catch(N){r=!0,n=N}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}}else e["enum"]=t.activeOneOfs.map(function(t){return K(t)});else if(["array","object"].includes(t.type))if("array"==t.type){for(var f=0,b=Object.entries(t.activeConstraints);f<b.length;f++){var y=Object(J["a"])(b[f],2);k=y[0],I=y[1];"itemsConstraints"!==k&&null!==I&&(e[k]=I)}e["items"]=Z(t.activeConstraints.itemsConstraints)}else{e["properties"]={};var h=!0,O=!1,g=void 0;try{for(var j,C=t.activeConstraints[Symbol.iterator]();!(h=(j=C.next()).done);h=!0){var _=j.value;e["properties"][_.name]=Z(_)}}catch(N){O=!0,g=N}finally{try{h||null==C.return||C.return()}finally{if(O)throw g}}e["required"]=t.activeConstraints.filter(function(t){return t.required}).map(function(t){return t.name})}else for(var w=0,x=Object.entries(t.activeConstraints);w<x.length;w++){var S=Object(J["a"])(x[w],2),k=S[0],I=S[1];null!==I&&(e[k]=I)}return e}function K(t){if("object"===t.type){var e={},a=!0,r=!1,n=void 0;try{for(var i,s=t.activeValue[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value;e[o.name]=K(o)}}catch(c){r=!0,n=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}return e}return"array"===t.type?t.activeValue.map(function(t){return K(t)}):t.activeValue}var W=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.layerSchemas=[],t.JSONTypes=S["b"],t}return Object(m["a"])(e,t),Object(C["a"])(e,[{key:"saveSchemas",value:function(){console.log("OK!");var t=H(this.layerSchemas);window.RESULTS=t,x.a.post(S["c"].saveLayersSchemas,t).then(function(t){console.log(t)},function(t){console.log(t)})}},{key:"deleteLayerSchema",value:function(t){this.layerSchemas.splice(this.layerSchemas.indexOf(t),1)}},{key:"addLayerSchema",value:function(t){this.layerSchemas.push(E.createDefault())}},{key:"mounted",value:function(){var t=this;console.log("MOUNTED!"),x.a.get(S["c"].getLayersSchemas).then(function(e){console.log(e),t.layerSchemas=M(e.data)},function(e){401==e.status&&t.$router.push({name:"login",params:{msg:"LOGIN EXPIRED"}})})}}]),e}(p["c"]);W=_["a"]([Object(p["a"])({components:{ParamsList:D["a"],Constraints:L["default"],CloseButton:q["a"]}})],W);var X=W,Y=X,Q=a("bbed"),tt=a.n(Q),et=Object(f["a"])(Y,P,A,!1,null,null,null);"function"===typeof tt.a&&tt()(et);var at=et.exports;i["default"].use(h["a"]);var rt=new h["a"]({routes:[{path:"/admin",name:"admin",component:at,beforeEnter:function(t,e,a){return localStorage.getItem("jwt")?a():a({name:"login",params:{msg:"YOU NEED TO LOGIN FIRST!"}})}},{path:"/login",props:!0,name:"login",component:$}]}),nt=a("5f5b");a("4989"),a("f9e3"),a("2dd8");x.a.interceptors.request.use(function(t){var e=localStorage.getItem("jwt");return e&&(t.headers["Authorization"]="Bearer "+e),t}),i["default"].filter("capitalize",function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}),i["default"].use(nt["a"]);var it=new i["default"]({router:rt,render:function(t){return t(y)}}).$mount("#app");window.vm=it,console.log(it)},ce78:function(t,e,a){}});
//# sourceMappingURL=app.12662826.js.map