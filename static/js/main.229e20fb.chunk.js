(this["webpackJsonpreh-1meeting"]=this["webpackJsonpreh-1meeting"]||[]).push([[0],{11:function(e,t){t.main_config={APP_URL:"https://api-reh-1meeting-forward.herokuapp.com",TOKEN_APP:"d7073ee6cc586814598f5e91c398ccf0a2976b91927b9d55190fa12ac95acd0a85d7eff3050bb94e05c3263b7b3d7faad64b5f1ab4c8d972379551ad0789aeaf"}},164:function(e,t,a){e.exports=a(334)},172:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},224:function(e,t){},226:function(e,t){},240:function(e,t){},242:function(e,t){},270:function(e,t){},272:function(e,t){},273:function(e,t){},279:function(e,t){},281:function(e,t){},299:function(e,t){},301:function(e,t){},313:function(e,t){},316:function(e,t){},333:function(e){e.exports=JSON.parse('{"name":"reh-1meeting","version":"1.5.0","private":true,"// If You want to install mdbreact from our GitLab repository, please replace \'4.27.0\' with gitURL provided here ->":"git+https://oauth2:<YOUR-TOKEN-GOES-HERE>@git.mdbootstrap.com/mdb/react/re-pro.git","dependencies":{"@line/liff":"^2.7.1","axios":"^0.21.1","jsonwebtoken":"^8.5.1","mdbreact":"4.27.0","react":"^16.12.0","react-dom":"^16.12.0","react-router-dom":"^5.1.2","react-scripts":"3.4.0","react-select":"^3.2.0","sweetalert2":"^10.13.0"},"scripts":{"start":"react-scripts start","predeploy":"npm run build","deploy":"gh-pages -d build","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject"},"devDependencies":{"gh-pages":"^3.1.0","renamer":"^1.0.0","rimraf":"^2.6.2"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"],"homepage":"http://sgukz.github.io/reh-1meeting-app/"}')},334:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(29),c=a.n(r),s=(a(169),a(170),a(171),a(172),a(3)),o=a(24),i=a(47),m=a.n(i),d=a(57),h=a.n(d),p=a(9),u=a(37),g=a.n(u),E=a(58),f=a(6),N=a(22),b=a.n(N),v=a(18),x=a.n(v),y=a(11),C=a.n(y),O=(a(216),(new Date).getTime());function S(e,t){var a=e.split(" "),n=a[0].split("-"),l=a[1].split(":"),r="".concat(n[2]," ").concat({"01":"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","02":"\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","03":"\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","04":"\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","05":"\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","06":"\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","07":"\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","08":"\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","09":"\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19",10:"\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21",11:"\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",12:"\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"}[n[1]]," ").concat(parseInt(n[0])+543),c="".concat(l[0],":").concat(l[1],"\u0e19.");return 1===t?r:2===t?c:r+" "+c}var j=e=>{var t=Object(p.f)(),a=Object(n.useState)(""),r=Object(f.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),m=Object(f.a)(i,2),d=m[0],h=m[1],u=Object(n.useState)(""),N=Object(f.a)(u,2),v=N[0],y=N[1],j=Object(n.useState)(""),_=Object(f.a)(j,2),w=_[0],P=_[1],k=Object(n.useState)(""),I=Object(f.a)(k,2),A=I[0],T=I[1],z=Object(n.useState)(""),B=Object(f.a)(z,2),D=B[0],F=B[1],R=Object(n.useState)(""),L=Object(f.a)(R,2),U=L[0],J=L[1],q=Object(n.useState)(""),K=Object(f.a)(q,2),H=K[0],M=K[1],W=Object(n.useState)(""),Q=Object(f.a)(W,2),G=Q[0],Y=Q[1],Z=Object(n.useState)(""),$=Object(f.a)(Z,2),V=$[0],X=$[1],ee=Object(n.useState)(!1),te=Object(f.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(""),re=Object(f.a)(le,2),ce=re[0],se=re[1],oe=Object(n.useState)(""),ie=Object(f.a)(oe,2),me=ie[0],de=ie[1],he=Object(n.useState)(0),pe=Object(f.a)(he,2),ue=pe[0],ge=pe[1],Ee=function(){var e=Object(E.a)(g.a.mark((function e(a){var n,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(C.a.main_config.APP_URL,"/user"),l={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)},e.next=4,b.a.post(n,{userid:a},{headers:l}).then(e=>{e.data.data.length>0?localStorage.setItem("user",JSON.stringify(e.data.data[0].data_info)):(localStorage.removeItem("user"),localStorage.removeItem("userid"),t.push("/reh-1meeting-app/register"))}).catch(e=>{console.log(e)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(()=>{(()=>{var e=localStorage.getItem("profile-line"),t=JSON.parse(e);o(t.userId),Ee(t.userId)})();var t=e.location.search.split("="),a=t.length>0?t[1]:"";""!==a&&((e=>{var t=e,a="".concat(C.a.main_config.APP_URL,"/getMeetingByDocno/").concat(t),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.get(a,{headers:n}).then(e=>{if(200===e.data.code){var t=new Date(e.data.data[0].start_date).getTime(),a=new Date(e.data.data[0].end_date).getTime();(t-O)/1e3>1800&&ge(1),O>a&&ge(2),h(e.data.data[0].docno),y(S(e.data.data[0].start_date,1)),P(S(e.data.data[0].start_date,2)),T(S(e.data.data[0].end_date,1)),F(S(e.data.data[0].end_date,2)),J(e.data.data[0].meeting_host_name),M(e.data.data[0].meeting_name),Y(e.data.data[0].human_amount),X(e.data.total[0].total_meeting),ne(!0),localStorage.setItem("isMeeting","true")}else 400===e.data.code&&localStorage.setItem("isMeeting","false")}).catch(e=>{console.log(e)})})(a),(e=>{var t="".concat(C.a.main_config.APP_URL,"/getCheckInCheckOut/").concat(c,"/").concat(e),a={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.get(t,{headers:a}).then(e=>{200===e.data.code&&(se(null!==e.data.data[0].check_in_date?S(e.data.data[0].check_in_date,3):""),de(null!==e.data.data[0].check_out_date?S(e.data.data[0].check_out_date,3):""))}).catch(e=>{console.log(e)})})(a))}),l.a.createElement("div",null,l.a.createElement(s.g,{color:"red lighten-5",className:"sectionPage",style:{height:100}}),l.a.createElement("div",{className:"mt-3 mb-5"},l.a.createElement(s.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(s.h,null,l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"10",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(s.d,null,l.a.createElement(s.e,{className:ae?"hidden":""},l.a.createElement("h6",{className:"h6-responsive mb-4 text-center"},l.a.createElement("strong",{className:"font-weight-bold text-primary"},"\u0e01\u0e23\u0e38\u0e13\u0e32 Scan QR Code \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21"))),l.a.createElement("div",{className:ae?"":"hidden"},l.a.createElement(s.e,{md:"12"},l.a.createElement("blockquote",{className:"blockquote bq-primary"},l.a.createElement("p",{className:"bq-title",style:{fontSize:"16px"}},H),l.a.createElement("strong",{style:{fontSize:"16px"}},"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d ",U),l.a.createElement("div",null,l.a.createElement("strong",{style:{fontSize:"14px"}},v===A?"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+v:"\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+v+" - "+A)),l.a.createElement("div",null,l.a.createElement("small",{style:{fontSize:"14px"}},"\u0e40\u0e27\u0e25\u0e32 ",w," - ",D)),l.a.createElement("div",null,l.a.createElement("small",{style:{fontSize:"14px"}},"\u0e40\u0e02\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e41\u0e25\u0e49\u0e27 ",V,"/",G," \u0e04\u0e19")))),l.a.createElement(s.e,{className:"text-center"},l.a.createElement("div",null,l.a.createElement("span",{className:0===ue?"hidden":1===ue?"text-primary":"text-danger"},1===ue?"\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e40\u0e02\u0e49\u0e32\u0e2b\u0e49\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19 30 \u0e19\u0e32\u0e17\u0e35":"\u0e08\u0e1a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e41\u0e25\u0e49\u0e27")),l.a.createElement("div",null,l.a.createElement("span",{className:"text-success"},""!==ce?"\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e40\u0e21\u0e37\u0e48\u0e2d "+ce:"")),l.a.createElement("div",{className:"mt-3"},l.a.createElement("span",{className:"text-danger"},""!==me?"\u0e40\u0e0a\u0e47\u0e04\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e40\u0e21\u0e37\u0e48\u0e2d "+me:"")),l.a.createElement("div",{className:1===ue||2===ue?"hidden":""},l.a.createElement(s.c,{gradient:"blue",size:"sm",className:""!==ce?"hidden":"",onClick:()=>((e,t)=>{var a="".concat(C.a.main_config.APP_URL,"/saveCheckIn"),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(a,{userid:e,docno:t},{headers:n}).then(e=>{200===e.data.code?x.a.fire({title:"\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e40\u0e02\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e40\u0e27\u0e25\u0e32 ".concat(S(e.data.check_date[0].check_in_date,3)),showDenyButton:!1,showCancelButton:!1,showCloseButton:!1,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07"}).then(e=>{e.isConfirmed&&window.location.reload()}):400===e.data.code&&x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.msg,icon:"error"})}).catch(e=>{console.log(e)})})(c,d)},"Check-in"),l.a.createElement(s.c,{size:"sm",color:"danger",className:""!==me?"hidden":"",onClick:()=>((e,t)=>{var a="".concat(C.a.main_config.APP_URL,"/saveCheckOut"),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(a,{userid:e,docno:t},{headers:n}).then(e=>{200===e.data.code?x.a.fire({title:"\u0e40\u0e0a\u0e47\u0e04\u0e40\u0e2d\u0e49\u0e32\u0e17\u0e4c\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e40\u0e27\u0e25\u0e32 ".concat(S(e.data.check_date[0].check_out_date,3)),showDenyButton:!1,showCancelButton:!1,showCloseButton:!1,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07"}).then(e=>{e.isConfirmed&&window.location.reload()}):400===e.data.code&&x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.msg,icon:"error"})}).catch(e=>{console.log(e)})})(c,d)},"Check-out"))))))))),l.a.createElement("div",{className:ae?"footer hidden":"footer"},l.a.createElement(s.e,{className:"text-center"},l.a.createElement(s.c,{floating:"true",gradient:"blue",rounded:!0,color:"danger",onClick:()=>window.location="https://line.me/R/nv/QRCodeReader"},l.a.createElement(s.i,{icon:"qrcode",size:"4x"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"ml-2",style:{paddingBottom:"15px"}},"SCAN QR Code"))))))},_=(a(217),a(218));class w extends n.Component{constructor(e){super(e),this.state={userid:"",pname:"",fname:"",lname:"",idcard:"",email:"",position:"",department:"",government:"",phone:"",isChange:!1,displayName:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).displayName:"",urlPicture:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).pictureUrl:h.a},this.handleChange=this.handleChange.bind(this),this.submitHandler=this.submitHandler.bind(this),this.LoadDataUser=this.LoadDataUser.bind(this)}handleChange(e){var t=e.target.name,a=e.target.value;this.setState({[t]:a})}submitHandler(e){e.preventDefault(),e.target.className+=" was-validated";var t=this.state,a=t.userid,n=t.pname,l=t.fname,r=t.lname,c={userid:a,idcard:t.idcard,pname:n,fname:l,lname:r,email:t.email,position:t.position,department:t.department,government:t.government,phone:t.phone},s="".concat(C.a.main_config.APP_URL,"/user/update"),o={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(s,c,{headers:o}).then(e=>{200===e.data.code?(localStorage.setItem("user",JSON.stringify(e.data.data.token)),localStorage.setItem("userid",JSON.stringify(e.data.data.userid)),x.a.fire({title:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48...",icon:"success",showConfirmButton:!1}),setTimeout(()=>{window.location.reload()},1e3)):400===e.data.code?x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.msg,icon:"warning"}):x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.error,icon:"error"})})}LoadDataUser(){var e=localStorage.getItem("user");if(e){var t=_.verify(JSON.parse(e),C.a.main_config.TOKEN_APP);this.setState({userid:t.userid,pname:t.pname,fname:t.fname,lname:t.lname,idcard:t.idcard,email:t.email,position:t.position,department:t.department,government:t.government,phone:t.phone})}else this.props.history.push("/reh-1meeting-app/register")}componentDidMount(){this.LoadDataUser()}render(){return l.a.createElement("div",null,l.a.createElement(s.g,{color:"red lighten-5",className:"sectionPage",style:{height:100}}),l.a.createElement("div",{className:"mt-3 mb-5"},l.a.createElement(s.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(s.h,null,l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"10",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(s.d,null,l.a.createElement(s.e,{className:"text-center"},l.a.createElement("img",{src:this.state.urlPicture,width:"150",height:"150",alt:"",className:"rounded-circle"})),l.a.createElement(s.e,{md:"12"},l.a.createElement("h4",{className:"font-weight-bold mt-2 mb-4 text-center"},this.state.displayName),l.a.createElement("h5",{className:"text-primary"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27"),l.a.createElement("form",{className:"needs-validation",onSubmit:this.submitHandler},l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"pname",className:"grey-text"},"\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.pname),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.pname,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"pname",required:!0})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"fname",className:"grey-text"},"\u0e0a\u0e37\u0e48\u0e2d ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.fname),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.fname,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"fname",required:!0})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"lname",className:"grey-text"},"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.lname),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.lname,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"lname",required:!0}))),l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"," ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.idcard),l.a.createElement("input",{onChange:this.handleChange,type:"number",value:this.state.idcard,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"idcard"})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e2d\u0e35\u0e40\u0e21\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.email),l.a.createElement("input",{onChange:this.handleChange,type:"email",value:this.state.email,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"email"})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"position",className:"grey-text"},"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.position),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.position,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"position"}))),l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"department",className:"grey-text"},"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.department),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.department,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"department"})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"main_company",className:"grey-text"},"\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e32\u0e0a\u0e01\u0e32\u0e23 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.government),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.government,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"government"})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"phone_number",className:"grey-text"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.phone),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.phone,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"phone"}))),!0===this.state.isChange?l.a.createElement(s.c,{gradient:"blue",type:"submit"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e01\u0e49\u0e44\u0e02"):l.a.createElement("strong",{onClick:()=>this.setState({isChange:!0}),className:"btn btn-outline-success"},"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))))))))))}}var P=w,k=()=>{var e=Object(p.f)(),t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(f.a)(o,2),m=i[0],d=i[1],h=Object(n.useState)(""),u=Object(f.a)(h,2),N=u[0],v=u[1],y=Object(n.useState)(""),O=Object(f.a)(y,2),S=O[0],j=O[1],_=Object(n.useState)(""),w=Object(f.a)(_,2),P=w[0],k=w[1],I=Object(n.useState)(""),A=Object(f.a)(I,2),T=A[0],z=A[1],B=Object(n.useState)(""),D=Object(f.a)(B,2),F=D[0],R=D[1],L=Object(n.useState)(""),U=Object(f.a)(L,2),J=U[0],q=U[1],K=Object(n.useState)("\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e23\u0e49\u0e2d\u0e22\u0e40\u0e2d\u0e47\u0e14"),H=Object(f.a)(K,2),M=H[0],W=H[1],Q=Object(n.useState)(""),G=Object(f.a)(Q,2),Y=G[0],Z=G[1],$=function(){var t=Object(E.a)(g.a.mark((function t(a){var n,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(C.a.main_config.APP_URL,"/user"),l={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)},t.next=4,b.a.post(n,{userid:a},{headers:l}).then(t=>{t.data.data.length>0&&(localStorage.setItem("user",JSON.stringify(t.data.data[0].data_info)),e.push("/reh-1meeting-app"))}).catch(e=>{console.log(e)});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)(()=>{(()=>{var e=localStorage.getItem("profile-line"),t=JSON.parse(e);c(t.userId),$(t.userId)})()}),l.a.createElement("div",null,l.a.createElement(s.g,{color:"red lighten-5",className:"sectionPage",style:{height:100}}),l.a.createElement("div",{className:"mt-3 mb-5"},l.a.createElement(s.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(s.h,null,l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"10",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(s.d,null,l.a.createElement(s.e,{md:"12"},l.a.createElement("h5",{className:"text-primary"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48"),l.a.createElement("form",{className:"needs-validation",onSubmit:t=>{t.preventDefault(),t.target.className+=" was-validated";var a={userid:r,idcard:P,pname:m,fname:N,lname:S,email:T,position:F,department:J,government:M,phone:Y},n="".concat(C.a.main_config.APP_URL,"/user/register"),l={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(n,a,{headers:l}).then(t=>{200===t.data.code?(localStorage.setItem("user",JSON.stringify(t.data.data.token)),x.a.fire({title:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48...",icon:"success"}),e.push("/reh-1meeting-app")):400===t.data.code?x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:t.data.msg,icon:"warning"}):x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:t.data.error,icon:"error"})})}},l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"pname",className:"grey-text"},"\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>d(e.target.value),type:"text",value:m,className:"form-control",name:"pname",required:!0})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"fname",className:"grey-text"},"\u0e0a\u0e37\u0e48\u0e2d ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>v(e.target.value),type:"text",value:N,className:"form-control",name:"fname",required:!0})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"lname",className:"grey-text"},"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>j(e.target.value),type:"text",value:S,className:"form-control",required:!0}))),l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"," ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>k(e.target.value),type:"number",value:P,className:"form-control"})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e2d\u0e35\u0e40\u0e21\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>z(e.target.value),type:"email",value:T,className:"form-control"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e08\u0e23\u0e34\u0e07")),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"position",className:"grey-text"},"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>R(e.target.value),type:"text",value:F,className:"form-control"}))),l.a.createElement(s.t,null,l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"department",className:"grey-text"},"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>q(e.target.value),type:"text",value:J,className:"form-control"})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"main_company",className:"grey-text"},"\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e32\u0e0a\u0e01\u0e32\u0e23 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>W(e.target.value),type:"text",value:M,className:"form-control",readOnly:!0})),l.a.createElement(s.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"phone_number",className:"grey-text"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"),l.a.createElement("input",{onChange:e=>Z(e.target.value),type:"text",value:Y,className:"form-control"}))),l.a.createElement(s.c,{gradient:"blue",type:"submit"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"))))))))))};class I extends l.a.Component{render(){return l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:j}),l.a.createElement(p.a,{exact:!0,path:"/reh-1meeting-app",component:j}),l.a.createElement(p.a,{exact:!0,path:"/reh-1meeting-app/profile",component:P}),l.a.createElement(p.a,{exact:!0,path:"/reh-1meeting-app/register",component:k}),l.a.createElement(p.a,{render:function(){return l.a.createElement("h1",null,"Page Not Found")}}))}}var A=I,T=a(333).version;class z extends n.Component{constructor(...e){super(...e),this.state={collapseID:"",displayName:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).displayName:"",urlPicture:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).pictureUrl:h.a},this.toggleCollapse=e=>()=>this.setState(t=>({collapseID:t.collapseID!==e?e:""})),this.closeCollapse=e=>()=>{var t=this.state.collapseID;window.scrollTo(0,0),t===e&&this.setState({collapseID:""})}}componentDidMount(){m.a.init({liffId:"1655384297-05KyLy7Z"},()=>{m.a.getProfile().then(e=>{localStorage.setItem("profile-line",JSON.stringify(e))})},e=>alert(e.message))}render(){var e=l.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.toggleCollapse("mainNavbarCollapse")}),t=this.state.collapseID;return l.a.createElement(o.a,null,l.a.createElement("div",{className:"flyout"},l.a.createElement(s.n,{color:"red accent-3",dark:!0,expand:"md",fixed:"top",scrolling:!0},l.a.createElement(s.o,{href:"/reh-1meeting-app",className:"py-0 font-weight-bold"},l.a.createElement("strong",{className:"align-middle"},"REH 1Meeting"),"\xa0",l.a.createElement("strong",{style:{fontSize:"12px"}},"v."+T)),l.a.createElement(s.q,{onClick:this.toggleCollapse("mainNavbarCollapse")}),l.a.createElement(s.f,{id:"mainNavbarCollapse",isOpen:t,navbar:!0},l.a.createElement(s.p,{right:!0},l.a.createElement(s.l,null,l.a.createElement(s.m,{exact:!0,to:"/reh-1meeting-app/meeting-history",onClick:this.closeCollapse("mainNavbarCollapse")},l.a.createElement("strong",null,"\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e40\u0e02\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21"))),l.a.createElement(s.l,null,l.a.createElement(s.m,{exact:!0,to:"/reh-1meeting-app/profile",onClick:this.closeCollapse("mainNavbarCollapse")},l.a.createElement("strong",null,this.state.displayName)))))),t&&e,l.a.createElement("main",{style:{marginTop:"4rem"}},l.a.createElement("div",{className:"mt-2 mr-2",style:{textAlign:"right"}},l.a.createElement(o.b,{to:"/reh-1meeting-app/profile",style:{fontSize:"14px",cursor:"pointer"}},l.a.createElement("img",{src:this.state.urlPicture,width:"45",height:"45",alt:"",className:"rounded-circle mr-1"}),this.state.displayName)),l.a.createElement(A,null))))}}var B=z,D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/reh-1meeting-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{var e="".concat("/reh-1meeting-app","/service-worker.js");D?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):F(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):F(e)})}}()},57:function(e,t,a){e.exports=a.p+"static/media/default-image.440b9b23.jpg"}},[[164,1,2]]]);
//# sourceMappingURL=main.229e20fb.chunk.js.map