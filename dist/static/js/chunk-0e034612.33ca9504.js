(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e034612"],{"4fdb":function(t,e,l){"use strict";var a=l("aadb"),i=l.n(a);i.a},aadb:function(t,e,l){},e51a:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"container"},[l("div",{attrs:{id:"modify_header"}},[l("button",{on:{click:t.back}},[t._v("<<返回")]),t._v(" "),l("p",[t._v("编辑试题")])]),t._v(" "),l("hr"),t._v(" "),l("div",[l("div",{staticStyle:{float:"left",margin:"0 auto",width:"100%",height:"80px"}},[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"10%",float:"left",height:"100%"}},[t._v("知识点ID")]),t._v(" "),l("div",{staticStyle:{width:"20%",float:"left",height:"100%"}},[l("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容","trigger-on-focus":!1},on:{select:t.handleSelect},model:{value:t.state2,callback:function(e){t.state2=e},expression:"state2"}}),t._v(" "),l("div",{staticClass:"sub-title"},[t._v("输入后匹配输入建议")])],1),t._v(" "),l("el-button",{staticStyle:{float:"left",height:"100%"},attrs:{type:"text"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("搜索")]),t._v(" "),l("el-dialog",{attrs:{title:"搜索知识点",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("el-form",{attrs:{model:t.form}},[l("el-form-item",{attrs:{label:"知识点名称","label-width":t.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),l("button",[t._v("搜索")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{border:"true",data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary",plain:!0},on:{click:t.openKonwledge}},[t._v("确 定")]),t._v(" "),l("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")])],1)],1)],1),t._v(" "),l("div",{staticStyle:{float:"left",margin:"0 auto",width:"100%",height:"80px"}},[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"10%",float:"left",height:"100%"}},[t._v("题干")]),t._v(" "),l("div",{staticStyle:{width:"20%",float:"left",height:"100%"}},[l("el-autocomplete",{attrs:{type:"textarea",rows:2,"fetch-suggestions":t.querySearch,placeholder:"请输入内容","trigger-on-focus":!1},on:{select:t.handleSelect},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t._v(" "),l("div",{staticClass:"sub-title"},[t._v("请输入题干")])],1),t._v(" "),l("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("编辑")]),t._v(" "),l("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"70%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("div",{staticClass:"edit_container"},[l("quill-editor",{ref:"myQuillEditor",staticClass:"editer",attrs:{options:t.editorOption},on:{ready:function(e){return t.onEditorReady(e)}},model:{value:t.infoForm.a_content,callback:function(e){t.$set(t.infoForm,"a_content",e)},expression:"infoForm.a_content"}})],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary",plain:!0},on:{click:t.openQuestion}},[t._v("确 定")])],1)])],1),t._v(" "),l("div",{staticStyle:{float:"left",margin:"0 auto",width:"100%",height:"80px"}},[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"8%",float:"left",height:"100%"}},[t._v("题目类型")]),t._v(" "),l("el-select",{staticStyle:{width:"15%",float:"left",height:"100%"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"8%",float:"left",height:"100%"}},[t._v("题目难度")]),t._v(" "),l("el-select",{staticStyle:{width:"15%",float:"left",height:"100%"},model:{value:t.question_value,callback:function(e){t.question_value=e},expression:"question_value"}},t._l(t.question_options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),l("p",{staticStyle:{width:"20%",float:"left",height:"100%"}},[t._v("\n          数字越大表示难度越大\n        ")])],1),t._v(" "),l("div",[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"97%",float:"left",height:"100%"}},[t._v("\n          单选/判断/多选需设置2~6个选项\n        ")]),t._v(" "),l("el-radio-group",{attrs:{id:"options1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[l("el-radio",{staticStyle:{width:"100%",float:"left",height:"100%"},attrs:{label:3}},[l("div",{staticStyle:{"margin-left":"50px"}},[l("input",{attrs:{type:"text"}}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("删除")])]),t._v(" "),l("el-upload",{staticClass:"upload-demo",staticStyle:{width:"80px",padding:"0","margin-left":"50px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"on-change":t.handleChangePic,"list-type":"picture"}},[l("div",{staticClass:"el-upload__tip",staticStyle:{height:"50px",width:"100px",position:"absolute",left:"-20px",top:"60px","padding-left":"320px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n                JPG或PNG格式;\n                "),l("br"),t._v("分辨率为120*120; "),l("br"),t._v("大小不超过500k;\n              ")]),t._v(" "),l("el-button",{staticStyle:{position:"absolute",left:"420px",top:"60px"},attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),l("el-radio",{attrs:{label:6}},[t._v("备选项")]),t._v(" "),l("el-radio",{attrs:{label:9}},[t._v("备选项")])],1),t._v(" "),l("el-radio-group",{attrs:{id:"options1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[l("el-radio",{staticStyle:{width:"100%",float:"left",height:"100%"},attrs:{label:3}},[l("div",{staticStyle:{"margin-left":"50px"}},[l("input",{attrs:{type:"text"}}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("删除")])]),t._v(" "),l("el-upload",{staticClass:"upload-demo",staticStyle:{width:"80px",padding:"0","margin-left":"50px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"on-change":t.handleChangePic,"list-type":"picture"}},[l("div",{staticClass:"el-upload__tip",staticStyle:{height:"50px",width:"100px",position:"absolute",left:"-20px",top:"60px","padding-left":"320px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n                JPG或PNG格式;\n                "),l("br"),t._v("分辨率为120*120; "),l("br"),t._v("大小不超过500k;\n              ")]),t._v(" "),l("el-button",{staticStyle:{position:"absolute",left:"420px",top:"60px"},attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),l("el-radio",{attrs:{label:6}},[t._v("备选项")]),t._v(" "),l("el-radio",{attrs:{label:9}},[t._v("备选项")])],1),t._v(" "),l("el-radio-group",{attrs:{id:"options1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[l("el-radio",{staticStyle:{width:"100%",float:"left",height:"100%"},attrs:{label:3}},[l("div",{staticStyle:{"margin-left":"50px"}},[l("input",{attrs:{type:"text"}}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("删除")])]),t._v(" "),l("el-upload",{staticClass:"upload-demo",staticStyle:{width:"80px",padding:"0","margin-left":"50px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"on-change":t.handleChangePic,"list-type":"picture"}},[l("div",{staticClass:"el-upload__tip",staticStyle:{height:"50px",width:"100px",position:"absolute",left:"-20px",top:"60px","padding-left":"320px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n                JPG或PNG格式;\n                "),l("br"),t._v("分辨率为120*120; "),l("br"),t._v("大小不超过500k;\n              ")]),t._v(" "),l("el-button",{staticStyle:{position:"absolute",left:"420px",top:"60px"},attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),l("el-radio",{attrs:{label:6}},[t._v("备选项")]),t._v(" "),l("el-radio",{attrs:{label:9}},[t._v("备选项")])],1),t._v(" "),l("el-radio-group",{attrs:{id:"options1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[l("el-radio",{staticStyle:{width:"100%",float:"left",height:"100%"},attrs:{label:3}},[l("div",{staticStyle:{"margin-left":"50px"}},[l("input",{attrs:{type:"text"}}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("删除")])]),t._v(" "),l("el-upload",{staticClass:"upload-demo",staticStyle:{width:"80px",padding:"0","margin-left":"50px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"on-change":t.handleChangePic,"list-type":"picture"}},[l("div",{staticClass:"el-upload__tip",staticStyle:{height:"50px",width:"100px",position:"absolute",left:"-20px",top:"60px","padding-left":"320px"},attrs:{slot:"tip"},slot:"tip"},[t._v("\n                JPG或PNG格式;\n                "),l("br"),t._v("分辨率为120*120; "),l("br"),t._v("大小不超过500k;\n              ")]),t._v(" "),l("el-button",{staticStyle:{position:"absolute",left:"420px",top:"60px"},attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),l("el-radio",{attrs:{label:6}},[t._v("备选项")]),t._v(" "),l("el-radio",{attrs:{label:9}},[t._v("备选项")])],1),t._v(" "),l("div",{staticStyle:{float:"left",margin:"0 auto",width:"100%",height:"80px"}},[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"10%",float:"left",height:"100%"}},[t._v("答案解析")]),t._v(" "),l("div",{staticStyle:{width:"50%",float:"left",height:"100%"}},[l("el-autocomplete",{staticStyle:{width:"95%"},attrs:{type:"textarea",rows:2,"fetch-suggestions":t.querySearch,placeholder:"请输入内容","trigger-on-focus":!1},on:{select:t.handleSelect},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t._v(" "),l("div",{staticClass:"sub-title"},[t._v("请输入答案解析")])],1),t._v(" "),l("a",{staticStyle:{width:"8%",float:"left",height:"100%"},attrs:{href:"#"}},[t._v("编辑")])]),t._v(" "),l("div",{staticStyle:{float:"left",margin:"0 auto",width:"100%",height:"80px"}},[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"10%",float:"left",height:"100%"}},[t._v("来源")]),t._v(" "),l("el-radio",{attrs:{label:"1"},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[t._v("子衿教育")]),t._v(" "),l("el-radio",{attrs:{label:"2"},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[t._v("快获")])],1),t._v(" "),l("div",{staticStyle:{float:"left",margin:"0 auto",width:"100%",height:"80px"}},[l("p",{staticStyle:{width:"3%",float:"left",height:"100%"}},[t._v("*")]),t._v(" "),l("p",{staticStyle:{width:"10%",float:"left",height:"100%"}},[t._v("状态")]),t._v(" "),l("el-radio",{attrs:{label:"1"},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[t._v("启用")]),t._v(" "),l("el-radio",{attrs:{label:"2"},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[t._v("禁用")])],1),t._v(" "),l("button",[t._v("确定")]),t._v(" "),l("button",[t._v("取消")])],1)])])])},i=[],o=(l("ac6a"),l("953d")),s=(l("a7539"),l("8096"),l("14e1"),{components:{quillEditor:o["quillEditor"]},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},methods:{onEditorReady:function(t){},handleRemove:function(t,e){console.log(t,e)},openKonwledge:function(){this.dialogFormVisible=!1,this.dialogVisible=!1,this.$message({message:"知识点设置成功~",center:!0})},openQuestion:function(){this.dialogVisible=!1,this.$message({message:"题干编辑成功~",center:!0})},handlePreview:function(t){console.log(t)},back:function(){this.$router.push("/test_manage")},handleChangePic:function(t,e){e.length>1&&e.splice(0,1)},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))}},data:function(){return{infoForm:{a_title:"",a_source:"",a_content:"",editorOption:{}},radio1:"1",radio2:"1",radio:3,options:[{value:"选项1",label:"全部"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",question_options:[{value:"选项1",label:"全部"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],question_value:"",fileList:[{url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-08",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-06",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-07",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],multipleSelection:[],dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",dialogVisible:!1}}}),n=s,r=(l("4fdb"),l("2877")),d=Object(r["a"])(n,a,i,!1,null,"0f369822",null);e["default"]=d.exports}}]);