(this["webpackJsonppeer-rewards"]=this["webpackJsonppeer-rewards"]||[]).push([[0],{172:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);a(172);var n=a(0),r=a.n(n),o=a(45),i=a.n(o),c=a(361),s=Object(n.createContext)({}),l=Object(n.createContext)({}),d=a(351),u=Object(d.a)({root:{display:"flex",flexDirection:"column"}}),m=Object(d.a)({root:{marginTop:40},iconContainer:{position:"relative"},iconPosition:{position:"absolute",right:90,top:27,zIndex:999,"@media (max-width: 650px)":{right:5,top:60}},input:{textAlign:"center",color:"red"},itemContainer:{borderRadius:20,backgroundColor:"#f5f5f5"},tabsContainer:{marginLeft:120},noMyRewards:{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Circular Std,sans-serif",fontSize:20}}),b=Object(d.a)({root:{padding:"10px 40px 30px 30px",height:400,overflowY:"auto",margin:0,listStyle:"none","&::-webkit-scrollbar":{width:9},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#911b91",borderRadius:10,outline:"1px solid #911b91"}}}),j=Object(d.a)({root:{display:"flex",marginTop:30},feedContainer:{display:"flex",flexDirection:"column",marginLeft:15},userContainer:{display:"flex",flexDirection:"column",marginBottom:15},feedInfo:{maxWidth:750},dateStyle:{width:120},dateMoment:{fontSize:13,cursor:"pointer"}}),p=Object(d.a)({avatar:{margin:"0 20px 20px 20px"},employeeContainer:{display:"flex",marginTop:50,marginLeft:100,alignItems:"center",fontFamily:"Circular Std,sans-serif",fontSize:18,"@media (max-width: 580px)":{marginLeft:20}},avatarContainer:{display:"flex",flexDirection:"column",alignItems:"center"},infoContainer:{display:"flex","@media (max-width: 705px)":{flexDirection:"column",justifyContent:"center"}},rewardsContainer:{marginLeft:80,"@media (max-width: 705px)":{marginLeft:80,marginBottom:10}},moneyFontSize:{fontSize:24,color:"#911b91","@media (max-width: 705px)":{fontSize:20}},cashContainer:{marginLeft:150,"@media (max-width: 705px)":{marginLeft:80}},textPosition:{marginBottom:10}}),h=Object(d.a)({root:{width:"85%",alignSelf:"center"}}),x=Object(d.a)({appBarContainer:{display:"flex",alignItems:"center"},appBarText:{color:"#000a34",flexGrow:1,textAlign:"justify",fontWeight:"bold",fontSize:26,letterSpacing:.3,fontFamily:"Circular Std,sans-serif",marginLeft:20,"@media (max-width: 580px)":{fontSize:16}}}),f=Object(d.a)({root:{padding:20},buttonContainer:{marginTop:40,display:"flex",width:"100%",alignItems:"center",justifyContent:"center"}}),O=Object(d.a)({root:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},paper:{display:"flex",height:400,maxWidth:500,flexDirection:"column",justifyContent:"center",padding:"50px 50px 50px 50px"},text:{marginBottom:40,fontFamily:"Circular Std,sans-serif",fontSize:20,textAlign:"center"},buttonContainer:{alignSelf:"center"}}),y=Object(d.a)({root:{marginTop:10,color:"tomato"}}),g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:3},v={backgroundColor:"#f8f8f8",border:"2px solid #696969"},w={backgroundColor:"#f5f5f5"},C={width:86,height:86},E={width:56,height:56},R={width:"100%"},S={color:"#911b91"},k={flexGrow:1},N={mr:2},T=a(364),D=a(83),L=a.n(D),A=a(16),z=a(144),B=a(360),P=a(353),W=a(2),I=Object(P.a)("button")("\n  background-color: #ffc126;\n  padding: 15px 40px 15px 40px;\n  border-radius: 10px;\n  color: #000a34;\n  font-weight: bold;\n  font-family: Circular Std,sans-serif;\n  font-size: 14px;\n  transition: all 200ms ease;\n  cursor: pointer;\n  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);\n  border: none;\n  width: 135px;\n\n  &:hover {\n    background-color: #ffdb80;\n  }\n\n  &.".concat(z.a.active," {\n    background-color: #ffc126;\n  }\n\n  &.").concat(z.a.focusVisible," {\n    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);\n    outline: none;\n  }\n\n  &.").concat(z.a.disabled," {\n    opacity: 0.5;\n    cursor: not-allowed;\n    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);\n  }\n")),M=function(e){return Object(W.jsx)(B.a,Object(A.a)(Object(A.a)({},e),{},{component:I}))},G=function(){var e=Object(n.useContext)(l).successLogin,t=Object(n.useContext)(s).getError,a=O();return Object(W.jsx)("div",{className:a.root,children:Object(W.jsxs)(T.a,{elevation:3,className:a.paper,children:[Object(W.jsx)("div",{className:a.text,children:"Welcome to the Peer and Reward application. To continue using the application please login."}),Object(W.jsx)("div",{className:a.buttonContainer,children:Object(W.jsx)(L.a,{clientId:"303818038429-a4mt3mp8co7ads27mjourkfoi93ret8b.apps.googleusercontent.com",buttonText:"login",onSuccess:e,onFailure:function(e){t(e.details)},cookiePolicy:"single_host_origin",isSignedIn:!1,render:function(e){return Object(W.jsx)(M,{onClick:e.onClick,children:"Sign In"})}})})]})})},F=function(){var e=p(),t=Object(n.useContext)(s),a=t.state,r=t.setEmployee,o=Object(n.useContext)(l).state;Object(n.useEffect)((function(){r()}),[r]);var i=a.employees.find((function(e){var t;return e.name===(null===(t=o.user)||void 0===t?void 0:t.name)}));return i?Object(W.jsxs)("div",{className:e.employeeContainer,children:[Object(W.jsxs)("div",{className:e.avatarContainer,children:[Object(W.jsx)(c.a,{className:e.avatar,alt:i.name,sx:C,src:i.avatar}),Object(W.jsx)("div",{"data-testid":"employeeName",children:i.name})]}),Object(W.jsxs)("div",{className:e.infoContainer,children:[Object(W.jsxs)("div",{className:e.rewardsContainer,children:[Object(W.jsx)("div",{className:e.textPosition,children:"My Rewards"}),Object(W.jsxs)("div",{"data-testid":"myReward",className:e.moneyFontSize,children:["$",i.myReward]})]}),Object(W.jsxs)("div",{className:e.cashContainer,children:[Object(W.jsx)("div",{className:e.textPosition,children:"Give"}),Object(W.jsxs)("div",{"data-testid":"give",className:e.moneyFontSize,children:["$",i.give]})]})]})]}):Object(W.jsx)(G,{})},_=a(9),U=a(152),V=a.n(U),Y=a(371),J=function(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}},K=a(365),q=a(146),H=a.n(q),Q=r.a.memo((function(e){var t=e.from,a=e.to,n=e.why,r=e.date,o=e.employees,i=j(),s=o.find((function(e){return e.name===t}));return s?Object(W.jsxs)("div",{className:i.root,children:[Object(W.jsx)(c.a,{alt:s.name,sx:E,src:s.avatar}),Object(W.jsxs)("div",{className:i.feedContainer,children:[Object(W.jsxs)("div",{className:i.userContainer,children:[Object(W.jsxs)("div",{children:[t," rewarded by ",a]}),Object(W.jsx)(K.a,{title:r.toDateString(),children:Object(W.jsx)("span",{className:i.dateStyle,children:Object(W.jsx)(H.a,{className:i.dateMoment,fromNow:!0,children:r})})})]}),Object(W.jsx)("div",{className:i.feedInfo,children:n})]})]}):null})),Z=a(358),$=a(362),X=a(345),ee=a(366),te=a(356),ae=a(352),ne=a(363),re=a(369),oe=a(367),ie=a(154),ce=a(72),se=function(e){var t=e.children,a=y();return Object(W.jsx)("div",{className:a.root,children:t})},le=r.a.memo((function(e){var t,a=e.open,r=e.handleClose,o=e.addRewardToEmployee,i=e.autocompleteData,c=e.amount,s=f(),l=Object(ie.a)({initialValues:{toEmployee:"",amount:"",why:""},onSubmit:function(e){o(e.toEmployee,+e.amount,e.why),c<+e.amount||(e.toEmployee="",e.amount="",e.why="",r())},validationSchema:(t=i,ce.b().shape({toEmployee:ce.c().required("Enter name").oneOf(t),amount:ce.a().min(1,"Minimum amount of currency 1 $").required("Enter amount"),why:ce.c().min(2,"The minimum number of characters is 3!").required("Write text")}))});return Object(W.jsx)(Z.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:a,onClose:r,closeAfterTransition:!0,BackdropComponent:$.a,BackdropProps:{timeout:1e3},children:Object(W.jsx)(X.a,{in:a,children:Object(W.jsx)(ee.a,{sx:g,children:Object(W.jsxs)("form",{className:s.root,onSubmit:l.handleSubmit,children:[Object(W.jsx)(oe.a,{id:"transition-modal-description",sx:{mt:2},children:"To"}),Object(W.jsx)(te.a,{disablePortal:!0,color:"purple",fullWidth:!0,onChange:function(e,t){l.setFieldValue("toEmployee",t)},renderInput:function(e){return Object(n.createElement)(ae.a,Object(A.a)(Object(A.a)({},e),{},{key:(new Date).getDate(),id:"toEmployee",name:"toEmployee",type:"text",color:"secondary",onChange:l.handleChange,value:l.values.toEmployee,fullWidth:!0,error:!!l.errors.toEmployee}))},options:i}),l.touched.toEmployee&&l.errors.toEmployee&&Object(W.jsx)(se,{children:"Enter correct employee"}),Object(W.jsx)(oe.a,{id:"transition-modal-description",sx:{mt:2},children:"Reward"}),Object(W.jsx)(ne.a,{id:"amount",name:"amount",type:"number",color:"secondary",onChange:l.handleChange,value:l.values.amount,fullWidth:!0,startAdornment:Object(W.jsx)(re.a,{position:"start",children:"$"}),inputProps:{"data-testid":"amount"},error:!!l.errors.amount}),l.touched.amount&&l.errors.amount&&Object(W.jsx)(se,{children:l.errors.amount}),Object(W.jsx)(oe.a,{id:"transition-modal-description",sx:{mt:2},children:"Why?"}),Object(W.jsx)(ae.a,{id:"why",name:"why",multiline:!0,onChange:l.handleChange,value:l.values.why,placeholder:"Why?",rows:4,color:"secondary",fullWidth:!0,inputProps:{"data-testid":"why"},error:!!l.errors.why}),l.touched.why&&l.errors.why&&Object(W.jsx)(se,{children:l.errors.why}),Object(W.jsx)("div",{className:s.buttonContainer,children:Object(W.jsx)(M,{type:"submit",children:"Reward"})})]})})})})})),de=r.a.memo((function(e){var t=e.children,a=e.value,n=e.index,r=b();return Object(W.jsx)(oe.a,{className:r.root,component:"div",role:"tabpanel",hidden:a!==n,id:"action-tabpanel-".concat(n),"aria-labelledby":"action-tab-".concat(n),children:t})})),ue=a(5),me=a(370),be=a(355),je=Object(ue.a)((function(e){return Object(W.jsx)(be.a,Object(A.a)(Object(A.a)({},e),{},{TabIndicatorProps:{children:Object(W.jsx)("span",{className:"MuiTabs-indicatorSpan"})}}))}))({marginLeft:120,"& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"#911b91"},"& .MuiTabs-indicatorSpan":{maxWidth:40,width:"100%"},"@media (max-width: 580px)":{marginLeft:20}}),pe=Object(ue.a)((function(e){return Object(W.jsx)(me.a,Object(A.a)({disableRipple:!0},e))}))((function(e){var t=e.theme;return{textTransform:"none",fontWeight:"bold",fontSize:t.typography.pxToRem(15),marginRight:t.spacing(1),fontFamily:"Circular Std,sans-serif",color:"#000a34",backgroundColor:"#fff",border:"2px solid black",borderRadius:10,padding:"5px 20px 5px 20px",boxShadow:"0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)",marginBottom:5,width:140,"&.Mui-selected":{backgroundColor:"#ffc126",color:"#000a34",transition:"all 200ms ease",cursor:"pointer",border:"none"},"&.Mui-focusVisible":{backgroundColor:"red"}}})),he=r.a.memo((function(e){var t=e.open,a=e.value,n=e.state,r=e.addRewardToEmployee,o=e.myRewards,i=e.autocompleteData,c=e.currentEmployee,s=e.handleOpen,l=e.handleClose,d=e.handleChange,u=m();return Object(W.jsxs)("div",{className:u.root,children:[Object(W.jsx)("div",{className:u.iconContainer,children:Object(W.jsx)("div",{className:u.iconPosition,children:Object(W.jsx)(Y.a,{size:"large",style:v,children:Object(W.jsx)(V.a,{"data-testid":"modalIcon",color:"inherit",fontSize:"large",onClick:s})})})}),Object(W.jsxs)(je,{value:a,onChange:d,"aria-label":"feed",children:[Object(W.jsx)(pe,Object(A.a)({label:"Feed"},J(0))),Object(W.jsx)(pe,Object(A.a)({label:"My Rewards"},J(1)))]}),Object(W.jsx)("hr",{}),Object(W.jsxs)("div",{className:u.itemContainer,children:[Object(W.jsx)(de,{value:a,index:0,children:n.rewardsData.map((function(e,t){return Object(W.jsx)(Q,Object(A.a)({employees:n.employees},e),e.from+t)}))}),Object(W.jsx)(de,{value:a,index:1,children:o.length?o.map((function(e,t){return Object(W.jsx)(Q,{from:e.from,to:e.to,why:e.why,date:e.date,employees:n.employees},e.from+t)})):Object(W.jsx)("div",{className:u.noMyRewards,children:"No rewards sent"})})]}),Object(W.jsx)(le,{"data-testid":"modalOpen",open:t,handleClose:l,amount:c.myReward,addRewardToEmployee:r,autocompleteData:i})]})})),xe=function(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(_.a)(o,2),c=i[0],d=i[1],u=Object(n.useContext)(s),m=u.state,b=u.addRewardToEmployee,j=u.myRewards,p=u.autocompleteData,h=Object(n.useContext)(l).state,x=m.employees.find((function(e){var t;return e.name===(null===(t=h.user)||void 0===t?void 0:t.name)}));return x?Object(W.jsx)(he,{value:a,open:c,myRewards:j,addRewardToEmployee:b,autocompleteData:p,handleClose:function(){return d(!1)},state:m,currentEmployee:x,handleChange:function(e,t){r(t)},handleOpen:function(){return d(!0)}}):Object(W.jsx)("div",{children:"Something went wrong!"})},fe=a(153),Oe=a.n(fe),ye=a(372),ge=a(373),ve=a(368),we=function(){var e=x(),t=Object(n.useContext)(l),a=t.state,r=t.successLogout,o=Object(n.useContext)(s).deleteEmployee;return Object(W.jsx)(ee.a,{sx:k,children:Object(W.jsx)(ye.a,{position:"static",style:w,children:Object(W.jsxs)(ge.a,{children:[Object(W.jsx)(ve.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:N,children:Object(W.jsx)(Oe.a,{style:S})}),Object(W.jsx)("div",{className:e.appBarText,children:"Peer and Rewards"}),a.auth.isAuth?Object(W.jsx)(D.GoogleLogout,{onLogoutSuccess:function(){r(),o()},render:function(e){return Object(W.jsx)(M,{onClick:e.onClick,children:"Logout"})},clientId:"303818038429-a4mt3mp8co7ads27mjourkfoi93ret8b.apps.googleusercontent.com"}):null]})})})},Ce=function(e){var t=e.children,a=Object(n.useContext)(l).state,r=h();return a.auth.isAuth?Object(W.jsx)("div",{className:r.root,children:t}):Object(W.jsx)(G,{})},Ee=a(359),Re=a(357),Se=r.a.forwardRef((function(e,t){return Object(W.jsx)(Re.a,Object(A.a)({elevation:6,ref:t,variant:"filled"},e))})),ke=function(e){var t=e.handleClose,a=Object(n.useContext)(s).state;return Object(W.jsx)(Ee.a,{"data-testid":"snack-bar",open:!!a.errors,autoHideDuration:6e3,onClose:t,anchorOrigin:{horizontal:"center",vertical:"bottom"},children:Object(W.jsx)(Se,{onClose:t,severity:"warning",sx:R,children:a.errors})})},Ne=function(e){return{type:"SET_ERROR",payload:{error:e}}},Te=a(14),De={employees:[{name:"James William",myReward:250,give:100,avatar:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{name:"David Greene",myReward:300,give:150,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthZcF6C12-eMC0JrJdv4CWO40-emM4BBFlw&usqp=CAU"},{name:"John Chen",myReward:200,give:150,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AGnMFzOLvv-du52tYrZXv32ChA-0yr0urA&usqp=CAU"},{name:"Alex Brown",myReward:400,give:30,avatar:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"},{name:"Rajesh Kumar",myReward:5030,give:430,avatar:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"}],rewardsData:[{from:"David Greene",to:"Rajesh Kuma",why:"Big thanks for your help in helping on the outage today!!",date:new Date(2021,9,6)},{from:"Alex Brown",to:"Rajesh Kumar",why:"Thanks for your help in creating the product overview deck. Your help to show cases those scenarios really helped in closing the loop on the story",date:new Date(2021,8,14)},{from:"James William",to:"Rajesh Kumar",why:"Thanks for your help",date:new Date(2021,1,14)}],errors:null},Le={auth:{isAuth:!1},user:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REWARDS":return Object(A.a)(Object(A.a)({},e),{},{employees:Object(Te.a)(t.payload.employee),rewardsData:[{from:t.payload.from,to:t.payload.to,why:t.payload.why,date:new Date}].concat(Object(Te.a)(e.rewardsData))});case"SET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{errors:t.payload.error});case"RESET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{errors:null});case"ADD_EMPLOYEE":return Object(A.a)(Object(A.a)({},e),{},{employees:[].concat(Object(Te.a)(e.employees),[{name:t.payload.name,myReward:250,give:0,avatar:t.payload.avatar}])});case"DELETE_EMPLOYEE":return Object(A.a)(Object(A.a)({},e),{},{employees:e.employees.filter((function(e){return e.name!==t.payload.name}))})}return e},ze=function(e){var t,a=e.children,r=Object(n.useContext)(l).state,o=Object(n.useReducer)(Ae,De),i=Object(_.a)(o,2),c=i[0],d=i[1],u=Object(n.useRef)("");!u.current&&(null===(t=r.user)||void 0===t?void 0:t.name)&&(u.current=r.user.name);var m=c.rewardsData.filter((function(e){return e.from===u.current})),b=[];c.employees.map((function(e){if(e.name!==u.current)return b.push(e.name)}));var j=Object(n.useCallback)((function(e,t,a){d({type:"RESET_ERROR"});var n=c.employees.find((function(e){return e.name===u.current})),r=c.employees.find((function(t){return t.name===e})),o=[];if(c.employees.filter((function(t){t.name!==u.current&&t.name!==e&&o.push(t)})),n&&r&&o){if(n.myReward<t)return d(Ne("You have exceeded your balance"));n.myReward=n.myReward-t,n.give=n.give+t,r.myReward=r.myReward+t;var i=[].concat(o,[n,r]);return d(function(e,t,a,n){return{type:"ADD_REWARDS",payload:{employee:e,from:t,to:a,why:n}}}(i,u.current,e,a))}}),[c.employees,d]),p=Object(n.useCallback)((function(e,t){"clickaway"!==t&&d({type:"RESET_ERROR"})}),[d]),h=Object(n.useCallback)((function(e){d(Ne(e))}),[d]),x=Object(n.useCallback)((function(){var e,t;r.user&&d((e=r.user.name,t=r.user.imageUrl,{type:"ADD_EMPLOYEE",payload:{name:e,avatar:t}}))}),[d,r]),f=Object(n.useCallback)((function(){d({type:"DELETE_EMPLOYEE",payload:{name:u.current}}),u.current=""}),[d,u]);return Object(W.jsxs)(s.Provider,{value:{state:c,addRewardToEmployee:j,setEmployee:x,deleteEmployee:f,myRewards:m,autocompleteData:b,getError:h},children:[a,Object(W.jsx)(ke,{handleClose:p})]})},Be=function(e,t){switch(t.type){case"LOGIN":return Object(A.a)(Object(A.a)({},e),{},{auth:{isAuth:!0}});case"LOGOUT":return Object(A.a)(Object(A.a)({},e),{},{auth:{isAuth:!1}});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:{email:t.payload.email,name:t.payload.name,imageUrl:t.payload.imageUrl,myRewards:250,give:0}});case"DELETE_USER":return Object(A.a)(Object(A.a)({},e),{},{user:null})}return e},Pe=function(e){var t=e.children,a=Object(n.useReducer)(Be,Le),r=Object(_.a)(a,2),o=r[0],i=r[1],c=Object(n.useCallback)((function(e){var t,a,n;"profileObj"in e&&(i((t=e.profileObj.name,a=e.profileObj.email,n=e.profileObj.imageUrl,{type:"SET_USER",payload:{name:t,email:a,imageUrl:n}})),i({type:"LOGIN"}))}),[i]),s=Object(n.useCallback)((function(){i({type:"LOGOUT"})}),[i]);return Object(W.jsx)(l.Provider,{value:{state:o,successLogin:c,successLogout:s},children:t})},We=function(){var e=u();return Object(n.useEffect)((function(){document.title="Peer Rewards"}),[]),Object(W.jsx)("div",{className:e.root,children:Object(W.jsx)(Pe,{children:Object(W.jsxs)(ze,{children:[Object(W.jsx)(we,{}),Object(W.jsxs)(Ce,{children:[Object(W.jsx)(F,{}),Object(W.jsx)(xe,{})]})]})})})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,374)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(We,{})}),document.getElementById("root")),Ie()}},[[282,1,2]]]);
//# sourceMappingURL=main.f8f5d505.chunk.js.map