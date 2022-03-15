(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{236:function(e,t,c){},237:function(e,t,c){},377:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(37),r=c.n(a),i=(c(236),c(9)),o=(c(237),c(238),c(3)),l=c(391),j=c(380),d=c(1);var b=function(e){var t=e.setShowLogin,c=e.setUser,s=e.setErrors,a=e.setIsLoading,r=e.errors,b=e.isLoading,u=Object(n.useState)({username:"",password:""}),h=Object(i.a)(u,2),O=h[0],x=h[1];return Object(d.jsx)("div",{className:"loginForm ",children:Object(d.jsxs)(l.a,{className:"rounded p-4 p-sm-3 ",children:[Object(d.jsx)("h2",{className:"titleCard",children:"LOGIN"}),Object(d.jsx)(l.a.Group,{className:"mb-3 shadow",controlId:"formBasicUsername",children:Object(d.jsx)(l.a.Control,{type:"text",placeholder:"Enter Username",onChange:function(e){return x(Object(o.a)(Object(o.a)({},O),{},{username:e.target.value}))}})}),Object(d.jsx)(l.a.Group,{className:"mb-3 shadow",controlId:"formBasicPassword",children:Object(d.jsx)(l.a.Control,{type:"password",placeholder:"Enter Password",onChange:function(e){return x(Object(o.a)(Object(o.a)({},O),{},{password:e.target.value}))}})}),Object(d.jsx)(l.a.Group,{className:"mb-3 checky",controlId:"formBasicCheckBox",children:Object(d.jsx)(l.a.Check,{type:"checkbox",label:"Remember Me"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)(j.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){a(!1),e.ok?e.json().then((function(e){return c(e)})):e.json().then((function(e){return s(e.errors)}))}))}(e)},className:"loginButton",children:b?"Loading...":"Login"})}),Object(d.jsx)(l.a.Group,{className:"errors rounded",controlId:"formBasicErrors",children:r.map((function(e){return Object(d.jsxs)("p",{className:"signErrors",children:["\u2716\ufe0f ",e,"\u2716\ufe0f"]},e)}))}),Object(d.jsxs)("button",{className:"astext",onClick:function(){return t(!1)},children:[Object(d.jsx)("span",{className:"astext",children:"Don't have account yet?"})," ",Object(d.jsx)("span",{className:"asTextBold",children:"Sign up!"})]})]})})};var u=function(e){var t=e.setUser,c=e.setIsLoading,s=e.setErrors,a=e.errors,r=e.isLoading,b=Object(n.useState)({username:"",password:"",password_confirmation:""}),u=Object(i.a)(b,2),h=u[0],O=u[1];return Object(d.jsx)("div",{className:"loginForm",children:Object(d.jsxs)(l.a,{className:"rounded p-4 p-sm-3 ",children:[Object(d.jsx)("h2",{className:"titleCard",children:"Register"}),Object(d.jsx)(l.a.Group,{className:"mb-3 shadow",controlId:"formBasicUsername",children:Object(d.jsx)(l.a.Control,{type:"text",placeholder:"Enter Username",onChange:function(e){return O(Object(o.a)(Object(o.a)({},h),{},{username:e.target.value}))}})}),Object(d.jsx)(l.a.Group,{className:"mb-3 shadow",controlId:"formBasicPassword",children:Object(d.jsx)(l.a.Control,{type:"password",id:"password",placeholder:"Enter Password",onChange:function(e){return O(Object(o.a)(Object(o.a)({},h),{},{password:e.target.value}))}})}),Object(d.jsx)(l.a.Group,{className:"mb-3 shadow",controlId:"formBasicPasswordConfirmation",children:Object(d.jsx)(l.a.Control,{type:"password",placeholder:"Re-Enter Password",id:"password_confirmation",onChange:function(e){return O(Object(o.a)(Object(o.a)({},h),{},{password_confirmation:e.target.value}))}})}),Object(d.jsx)(l.a.Group,{className:"mb-3 checky",controlId:"formBasicCheckBox",children:Object(d.jsx)(l.a.Check,{type:"checkbox",label:"Remember Me"})}),Object(d.jsx)(j.a,{className:"mb-3 loginButton",variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),c(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){c(!1),e.ok?e.json().then((function(e){return t(e)})):e.json().then((function(e){return s(e.errors)}))}))}(e)},children:r?"Loading...":"Sign Up"}),Object(d.jsx)(l.a.Group,{className:"mb-3 rounded",controlId:"formBasicErrors",children:a.map((function(e){return Object(d.jsxs)("p",{className:"signErrors",children:["\u2716\ufe0f ",e,"\u2716\ufe0f"]},e)}))})]})})},h=c(392),O=c(381);var x=function(e){var t=e.setUser,c=(e.handleLogoutClick,Object(n.useState)(!0)),s=Object(i.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),j=l[0],x=l[1],m=Object(n.useState)([]),p=Object(i.a)(m,2),g=p[0],f=p[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(h.a,{className:"color-nav  justify-content-start",expand:"lg",children:Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(h.a.Brand,{href:"/",children:[Object(d.jsx)("img",{alt:"",src:"/images/logoWhite.png",width:"20",className:"d-inline-block align-top logo"}),Object(d.jsx)("span",{className:"navTitle",children:"Pain Point"})]}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav"})]})}),a?Object(d.jsxs)("div",{children:[Object(d.jsx)("video",{autoPlay:!0,loop:!0,id:"video-background",muted:!0,children:Object(d.jsx)("source",{src:"/videos/runningVid.mp4",type:"video/mp4"})}),Object(d.jsx)("div",{className:"App-headerColor",children:Object(d.jsx)(b,{setUser:t,setShowLogin:r,setIsLoading:x,setErrors:f,errors:g,isLoading:j})})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("video",{autoPlay:!0,loop:!0,id:"video-background",muted:!0,children:Object(d.jsx)("source",{src:"/videos/runningVid.mp4",type:"video/mp4"})}),Object(d.jsx)("div",{className:"App-headerColor",children:Object(d.jsx)(u,{setUser:t,setIsLoading:x,setErrors:f,errors:g,isLoading:j})})]})]})},m=c(16),p=c(390),g=c(205),f=c.n(g);var v=function(e){var t=e.setRegionSelected,c=e.regionSelected,s=e.buttonValue,a=e.setButtonValue,r=Object(m.f)(),o=Object(n.useState)([]),l=Object(i.a)(o,2),j=l[0],b=l[1];function u(e){localStorage.clear(),t({name:e.target.id,advanced:s,muscle_group_id:j.find((function(t){return t.region===e.target.id})).id}),localStorage.setItem("muscle_group_id",j.find((function(t){return t.region===e.target.id})).id),r("/routines/")}return Object(n.useEffect)((function(){localStorage.clear(),fetch("/muscle_groups").then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),Object(d.jsxs)("div",{className:"App-header",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"BodyTitle",children:"Point to your pain"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"grow",src:"/images/back.png",alt:"back region",id:"back",onClick:function(e){u(e)}}),Object(d.jsx)("img",{className:"grow",src:"/images/neck.png",alt:"neck region",id:"neck",onClick:function(e){return u(e)}})]}),Object(d.jsx)("img",{className:"grow",src:"/images/knee.png",alt:"knee region",id:"knee",onClick:function(e){return u(e)}}),Object(d.jsx)("img",{className:"grow",src:"/images/shoulder.png",alt:"shoulder region",id:"shoulder",onClick:function(e){return u(e)}})]}),Object(d.jsx)("div",{className:"switchButton",children:Object(d.jsx)(f.a,{checked:!1,onlabel:"Advanced exercises",onstyle:"danger",offlabel:"Novice exercises",offstyle:"success",style:"w-50 mx-3",onChange:function(){console.log(s),console.log(c),a(!s)}})}),Object(d.jsx)("div",{id:"footer",children:Object(d.jsx)("h6",{children:Object(d.jsx)("a",{href:"https://www.vecteezy.com/free-vector/body-pain",children:"Body Pain Vectors by Vecteezy"})})})]})},S=c(382),y=c(202),N=function(e){var t=e.embedId;return Object(d.jsx)("div",{className:"video-responsive",children:Object(d.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})};var k=function(e){var t=e.exercise,c=(Object(m.f)(),Object(n.useState)({routine_id:parseInt(localStorage.getItem("routineNumber")),exercise_id:t.id,reps:0,tband:"",sets:0,RPE:1})),s=Object(i.a)(c,2),a=s[0],r=s[1],b=Object(n.useState)(!1),u=Object(i.a)(b,2),h=u[0],O=u[1],x=Object(n.useState)(!1),p=Object(i.a)(x,2),g=p[0],f=p[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)(N,{embedId:t.videoEmbed}),Object(d.jsx)("div",{id:"extraControl",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h2",{className:"card-title",children:t.name}),Object(d.jsx)("div",{id:"cardSizing",children:Object(d.jsx)("p",{className:"card-text",children:t.description})}),Object(d.jsxs)("p",{className:"pSmallPrint",children:["Recommended sets: ",Object(d.jsx)("br",{}),t.recreps," reps for ",t.recsets," sets"]}),h?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"card-text",children:"Based on the Recommended sets, how did you do?"}),Object(d.jsxs)(l.a,{id:"alternateGradient",children:[Object(d.jsxs)(S.a,{className:"mb-3",children:[Object(d.jsxs)(l.a.Group,{as:y.a,controlId:"formGridSets",children:[Object(d.jsx)(l.a.Label,{children:"Completed Recommended Sets "}),Object(d.jsx)(l.a.Control,{type:"number",placeholder:"Enter Sets",onChange:function(e){e.preventDefault(),r(Object(o.a)(Object(o.a)({},a),{},{sets:parseInt(e.target.value)}))}})]}),Object(d.jsxs)(l.a.Group,{as:y.a,controlId:"formGridReps",children:[Object(d.jsx)(l.a.Label,{children:"# of reps of incomplete set"}),Object(d.jsx)(l.a.Control,{type:"number",placeholder:"Enter Reps",onChange:function(e){e.preventDefault(),r(Object(o.a)(Object(o.a)({},a),{},{reps:parseInt(e.target.value)}))}})]})]}),Object(d.jsxs)(S.a,{className:"mb-3",children:[Object(d.jsxs)(l.a.Group,{as:y.a,controlId:"formGridTband",children:[Object(d.jsx)(l.a.Label,{children:"TheraBand Used?"}),Object(d.jsxs)(l.a.Select,{defaultValue:"None",onChange:function(e){e.preventDefault(),r(Object(o.a)(Object(o.a)({},a),{},{tband:e.target.value}))},children:[Object(d.jsx)("option",{children:"None"}),Object(d.jsx)("option",{children:"Yellow"}),Object(d.jsx)("option",{children:"Red"}),Object(d.jsx)("option",{children:"Green"}),Object(d.jsx)("option",{children:"Blue"}),Object(d.jsx)("option",{children:"Black"}),Object(d.jsx)("option",{children:"Silver"}),Object(d.jsx)("option",{children:"Gold"})]})]}),Object(d.jsxs)(l.a.Group,{as:y.a,controlId:"formGridRPE",children:[Object(d.jsx)(l.a.Label,{children:"Rate of Perceived Exertion"}),Object(d.jsxs)(l.a.Select,{defaultValue:"RPE",onChange:function(e){e.preventDefault(),r(Object(o.a)(Object(o.a)({},a),{},{RPE:parseInt(e.target.value)}))},children:[Object(d.jsx)("option",{children:"1"}),Object(d.jsx)("option",{children:"2"}),Object(d.jsx)("option",{children:"3"}),Object(d.jsx)("option",{children:"4"}),Object(d.jsx)("option",{children:"5"}),Object(d.jsx)("option",{children:"6"}),Object(d.jsx)("option",{children:"7"}),Object(d.jsx)("option",{children:"8"}),Object(d.jsx)("option",{children:"9"}),Object(d.jsx)("option",{children:"10"})]})]})]}),g?"Submitted \u2714\ufe0f":Object(d.jsx)(j.a,{variant:"primary",onClick:function(e){e.preventDefault(),f(!0),fetch("/set_stats",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("exerciseEntered",!0),console.log(e)}))},children:"Submit"})]})]}):Object(d.jsx)(j.a,{variant:"primary",onClick:function(){O(!0),f(!1)},children:"Start Exercise"})]})})]})})},C=c(128),w=c.n(C),I=c(394),B=c(227);var E=function(e){var t=e.regionSelected,c=e.setRegionSelected,s=Object(n.useState)([]),a=Object(i.a)(s,2),r=a[0],l=a[1],b="true"===localStorage.getItem("advancedBackup"),u=Object(n.useState)(!1),h=Object(i.a)(u,2),x=h[0],p=h[1],g=Object(m.f)();Object(n.useEffect)((function(){return fetch("/exercises").then((function(e){return e.json()})).then((function(e){console.log(e),l(e)}))}),[]),Object(n.useEffect)((function(){return c(Object(o.a)(Object(o.a)({},t),{},{name:localStorage.getItem("region")}))}),[]);var f=r.filter((function(e){return(t.name===e.muscle_group.region||t.regionBackup===e.muscle_group.region)&&b===e.advanced})).map((function(e){return Object(d.jsx)(y.a,{lg:6,className:"pb-3 routineCard",children:Object(d.jsx)(k,{exercise:e,regionSelected:t},w()())})}));function v(e){return Object(d.jsxs)(I.a,Object(o.a)(Object(o.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(I.a.Header,{closeButton:!0}),Object(d.jsxs)(I.a.Body,{children:[Object(d.jsx)("h4",{style:{color:"red"},children:"Error"}),Object(d.jsx)("p",{children:"Must fill out and submit at least one exercise for this session."})]}),Object(d.jsx)(I.a.Footer,{children:Object(d.jsx)(j.a,{onClick:e.onHide,children:"Close"})})]}))}return Object(d.jsxs)("div",{className:"exerciseContainer",children:[Object(d.jsx)("section",{id:"features",children:Object(d.jsxs)("div",{class:"row",children:[Object(d.jsxs)("div",{class:"col-md-4 col-12",children:[Object(d.jsx)("i",{className:"fas fa-heart icon-format"}),Object(d.jsx)("h3",{class:"feature-title",children:"Rate of Perceived exertion should be kept below 8"}),Object(d.jsx)("p",{children:"RPE\u2014or the Rate of Perceived Exertion\u2014is a scale used to identify the intensity of your exercise based on how hard you feel (or perceive) your effort to be. Its subjective so don't go over what YOU consider an 8 while completing these exercises."})]}),Object(d.jsxs)("div",{class:"col-md-4 col-12",children:[Object(d.jsx)(B.a,{icon:"fa-solid fa-circle-radiation"}),Object(d.jsx)("i",{class:"fas fa-check-circle icon-format"}),Object(d.jsx)("h3",{class:"feature-title",children:'Don\'t "push" through pain'}),Object(d.jsx)("p",{children:"Exercise should be mostly pain free and comfortable"})]}),Object(d.jsxs)("div",{class:"col-md-4 col-12",children:[Object(d.jsx)("i",{class:"fas fa-bullseye icon-format"}),Object(d.jsx)("h3",{class:"feature-title",children:"Stretch minimum is 30 second hold for 3 sets"}),Object(d.jsx)("p",{children:"Studies show that for stretching to be effective,stretch must be held at least 30 seconds, three times daily"})]})]})}),Object(d.jsx)("h1",{className:"exerciseTitle",children:"Routine"}),Object(d.jsx)(O.a,{className:"exerciseContainer",children:Object(d.jsx)(S.a,{children:f})}),Object(d.jsx)(j.a,{className:"resultsButton",variant:"danger",onClick:function(e){e.preventDefault(),localStorage.getItem("exerciseEntered")?g("/results"):p(!0)},children:"See Your Results"}),Object(d.jsx)(v,{show:x,onHide:function(){return p(!1)}})]})},P=c(90),R=c.n(P),_=c(206),L=c(384),T=c(395),D=c(218),F=c(86),G=c(106),U=c(397),K=c(388),V=c(133),A=c(134),H=c(108),z=c(224),J=c(223),M=c(389),W=c(132),Y=c(383),q=c(396);var Q=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(n.useState)([]),b=Object(i.a)(j,2),u=b[0],h=b[1],x=Object(n.useState)([]),m=Object(i.a)(x,2),p=m[0],g=m[1],f=Object(n.useState)([]),v=Object(i.a)(f,2),N=v[0],k=v[1];function C(){if(c.length>0){var e=c[c.length-1].date.split("-");return e[2]+"-"+e[1]+"-"+e[0]}}function w(){var e=0;if(c.length>1)return c.map((function(t,c){e+=t.exercises.length})),(e/c.length).toFixed(2)}function I(){return c.length>0?((c[c.length-1].pain-parseInt(localStorage.getItem("initialPain")))/parseInt(localStorage.getItem("initialPain"))*100).toFixed(2):Object(d.jsx)(Y.a,{animation:"border",variant:"primary"})}Object(n.useEffect)((function(){return fetch("/routines").then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return e.muscle_group.id===parseInt(localStorage.getItem("muscle_group_id"))}));localStorage.setItem("initialPain",t[0].pain),function(e){P.apply(this,arguments)}(t),function(e){var t=e.map((function(e,t){return{session:t+1,pain:e.pain}}));g(t)}(t),function(e){var t=e.filter((function(e){return"neck"===e.muscle_group.region})),c=e.filter((function(e){return"back"===e.muscle_group.region})),n=e.filter((function(e){return"shoulder"===e.muscle_group.region})),s=e.filter((function(e){return"knee"===e.muscle_group.region}));h([{region:"Neck",sessions:t.length+1},{region:"Shoulder",sessions:n.length+1},{region:"Back",sessions:c.length+1},{region:"Knee",sessions:s.length+1}])}(e),function(e){console.log({regionChosenFilter:e});var t=0,c=0,n=e.map((function(e,n){e.set_stats.map((function(e){t+=e.sets,c+=(e.reps+20*e.sets)/(e.sets+1)}));var s=c/e.set_stats.length,a=t/e.set_stats.length;return console.log({avgRepsPerSet:s,avgTotalSets:a},n+1),c=0,t=0,{session:n+1,avgRepsPerSet:s,avgTotalSets:a}}));k(n)}(t),s(e),I(),w(),C()}))}),[]);var B=["#0088FE","#00C49F","#FFBB28","#FF8042"],E=Math.PI/180;function P(){return(P=Object(_.a)(R.a.mark((function e(t){var c,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=0,n=t.map((function(e,t){e.set_stats.map((function(e){return c+=e.RPE}));var n=c/e.set_stats.length;return c=0,{session:t+1,avgRPE:n}})),l(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"exerciseContainer",children:Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(S.a,{className:"pt-5",children:[Object(d.jsx)(y.a,{lg:6,className:"",children:Object(d.jsxs)(q.a,{children:[Object(d.jsx)("h2",{className:"card-title",children:"Regions Trained "}),u.length>0?Object(d.jsx)(L.a,{width:"100%",height:400,children:Object(d.jsxs)(T.a,{width:400,height:400,children:[Object(d.jsx)(D.a,{data:u,cx:"50%",cy:"50%",labelLine:!1,label:function(e){var t=e.cx,c=e.cy,n=e.midAngle,s=e.innerRadius,a=e.outerRadius,r=e.percent,i=(e.index,s+.5*(a-s)),o=t+i*Math.cos(-n*E),l=c+i*Math.sin(-n*E);return Object(d.jsx)("text",{x:o,y:l,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:80,fill:"#8884d8",dataKey:"sessions",children:o.map((function(e,t){return Object(d.jsx)(F.a,{fill:B[t%B.length]},"cell-".concat(t))}))}),Object(d.jsx)(G.a,{})]})}):Object(d.jsx)(Y.a,{animation:"border",variant:"primary"}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("span",{className:"neck",children:"Neck"})," ",Object(d.jsx)("span",{className:"shoulder",children:"Shoulder"})," ",Object(d.jsx)("span",{className:"back",children:"Back"})," ",Object(d.jsx)("span",{className:"knee",children:"Knee"}),"  "]})]})}),Object(d.jsxs)(y.a,{children:[Object(d.jsx)(y.a,{children:Object(d.jsxs)(q.a,{className:"mb-3 me-3 ms-3 p-2 ",children:[Object(d.jsxs)("h2",{className:"card-title",children:[" ",c.length>0?C():Object(d.jsx)(Y.a,{animation:"border",variant:"primary"})]}),Object(d.jsxs)("h3",{children:["Region Selected: ",localStorage.getItem("region")]})]})}),Object(d.jsx)(y.a,{children:Object(d.jsxs)(q.a,{className:"m-3 p-2",children:[Object(d.jsxs)("h3",{children:["Initial Pain Level:","  ",parseInt(localStorage.getItem("initialPain"))]}),c.length>0?Object(d.jsxs)("h3",{children:["Current Pain Level:",c[c.length-1].pain]}):Object(d.jsx)(Y.a,{animation:"border",variant:"primary"}),Object(d.jsx)("br",{}),I()>1?Object(d.jsxs)("h3",{className:"badResult",children:[I()," % increase in pain"]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("h3",{className:"goodResult",children:[Object(d.jsx)("i",{className:"fas fa-thumbs-up icon-format"}),I(),"% decrease in pain"]})})]})}),Object(d.jsx)(y.a,{children:Object(d.jsxs)(q.a,{className:"m-3 p-2",children:[Object(d.jsxs)("h3",{children:[c.length>0?c.length:Object(d.jsx)(Y.a,{animation:"border",variant:"primary"})," ","Total Sessions"," "]}),Object(d.jsxs)("h3",{children:["Average Exercises per Session: ",w()]})]})})]})]}),Object(d.jsxs)(S.a,{className:"pt-4 pb-3",children:[Object(d.jsxs)("h2",{className:"card-title",children:["Session Stats",Object(d.jsx)("hr",{})]}),Object(d.jsx)(y.a,{className:"p-1",children:Object(d.jsxs)(q.a,{children:[Object(d.jsx)("h2",{className:"card-title",children:"Pain Level "}),Object(d.jsx)(L.a,{width:"100%",height:400,children:Object(d.jsxs)(U.a,{width:500,height:400,data:p,margin:{top:20,right:20,bottom:20,left:20},children:[Object(d.jsx)(K.a,{stroke:"#f5f5f5"}),Object(d.jsx)(V.a,{dataKey:"session",scale:"band"}),Object(d.jsx)(A.a,{domain:[1,10]}),Object(d.jsx)(H.a,{}),Object(d.jsx)(G.a,{}),Object(d.jsx)(z.a,{dataKey:"pain",barSize:20,fill:"#413ea0"}),Object(d.jsx)(J.a,{type:"monotone",dataKey:"pain",stroke:"#ff7300"})]})})]})}),Object(d.jsx)(y.a,{className:"p-1",children:Object(d.jsxs)(q.a,{children:[Object(d.jsx)("h2",{className:"card-title",children:"RPE Average "}),o.length>0?Object(d.jsx)(L.a,{width:"100%",height:400,children:Object(d.jsxs)(M.a,{data:o,children:[Object(d.jsx)("defs",{children:Object(d.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(d.jsx)("stop",{offset:"0%",stopColor:"#2451B7",stopOpacity:.4}),Object(d.jsx)("stop",{offset:"75%",stopColor:"#2451B7",stopOpacity:.05})]})}),Object(d.jsx)(W.a,{dataKey:"avgRPE",stroke:"#2451B7",fill:"url(#color)"}),Object(d.jsx)(V.a,{dataKey:"session"}),Object(d.jsx)(A.a,{dataKey:"avgRPE",domain:[1,10]}),Object(d.jsx)(H.a,{}),Object(d.jsx)(K.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(d.jsx)(G.a,{})]})}):Object(d.jsx)(Y.a,{animation:"border",variant:"primary"})]})}),Object(d.jsx)(y.a,{className:"p-1",children:Object(d.jsxs)(q.a,{children:[Object(d.jsx)("h2",{className:"card-title",children:" Reps and Sets "}),Object(d.jsx)(L.a,{width:"100%",height:400,children:Object(d.jsxs)(M.a,{width:500,height:400,data:N,margin:{top:20,right:20,bottom:20,left:20},children:[Object(d.jsx)(K.a,{strokeDasharray:"3 3"}),Object(d.jsx)(V.a,{dataKey:"name"}),Object(d.jsx)(A.a,{}),Object(d.jsx)(H.a,{}),Object(d.jsx)(W.a,{type:"monotone",dataKey:"avgTotalSets",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),Object(d.jsx)(W.a,{type:"monotone",dataKey:"avgRepsPerSet",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),Object(d.jsx)(G.a,{})]})})]})})]})]})})};var X=function(e){var t=e.routine,c=e.setRoutines,n=e.routines;return console.log({routine:t}),Object(d.jsx)("div",{className:"routineBorderCard",children:Object(d.jsxs)(q.a,{children:[Object(d.jsxs)(q.a.Header,{className:"routineCardHeader",children:["Session: ",t.routine," - ",t.muscle_group.region]}),Object(d.jsxs)(q.a.Body,{children:[Object(d.jsx)(q.a.Title,{children:t.date}),Object(d.jsx)(j.a,{variant:"danger",onClick:function(e){fetch("/routines/".concat(t.id),{method:"DELETE"}).then((function(){return c(n.filter((function(e){return e.id!==t.id})))}))},children:"Delete"})]})]})})};var Z=function(e){var t=e.regionSelected,c=e.setRegionSelected,s=Object(m.f)(),a=Object(n.useState)([]),r=Object(i.a)(a,2),b=r[0],u=r[1],h=Object(n.useState)(new Date),x=Object(i.a)(h,2),p=x[0],g=(x[1],Object(n.useState)({routine:1,date:p.toLocaleDateString(),muscle_group_id:0,pain:0})),f=Object(i.a)(g,2),v=(f[0],f[1],localStorage.getItem("region")),N=localStorage.getItem("advancedBackup"),k=Object(n.useState)(v||t.name),C=Object(i.a)(k,2),I=C[0],B=(C[1],Object(n.useState)(N||t.advanced)),E=Object(i.a)(B,2),P=E[0],R=(E[1],Object(n.useState)(!1)),_=Object(i.a)(R,2),L=_[0],T=_[1],D=Object(n.useState)(0),F=Object(i.a)(D,2),G=F[0],U=F[1];Object(n.useEffect)((function(){fetch("/routines/").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.filter((function(e){return e.muscle_group.region===I}));console.log({filteredRoutines:t}),u(t)}))}),[I,t.name]),Object(n.useEffect)((function(){localStorage.setItem("region",v||t.name),localStorage.setItem("advancedBackup",N||t.advanced),c(Object(o.a)(Object(o.a)({},t),{},{regionBackup:I,advancedBackup:P}))}),[I]);var K=b.map((function(e){return Object(d.jsx)(y.a,{lg:6,className:"pb-3 routineCard",children:Object(d.jsx)(X,{routine:e,routines:b,setRoutines:u},w()())})}));return Object(d.jsx)("div",{className:"App-header",children:Object(d.jsx)(O.a,{className:"pt-5",children:Object(d.jsxs)(S.a,{children:[Object(d.jsxs)(y.a,{children:[L?"Submitted \u2714\ufe0f":Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{className:"routineForm",children:[Object(d.jsx)(l.a.Label,{className:"formLabelPain",children:"Select Current Pain level"}),Object(d.jsxs)(l.a.Select,{DefaultValue:"0",placeholder:"Enter Pain level",onChange:function(e){e.preventDefault(),U(parseInt(e.target.value))},children:[Object(d.jsx)("option",{children:"0"}),Object(d.jsx)("option",{children:"1"}),Object(d.jsx)("option",{children:"2"}),Object(d.jsx)("option",{children:"3"}),Object(d.jsx)("option",{children:"4"}),Object(d.jsx)("option",{children:"5"}),Object(d.jsx)("option",{children:"6"}),Object(d.jsx)("option",{children:"7"}),Object(d.jsx)("option",{children:"8"}),Object(d.jsx)("option",{children:"9"}),Object(d.jsx)("option",{children:"10"})]}),Object(d.jsx)(j.a,{className:"routineButtonHidden",variant:"primary",onClick:function(e){e.preventDefault(),T(!0)},children:"Submit"})]})}),Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{lg:12,className:"pt-5",children:Object(d.jsx)(j.a,{className:"routineButton",onClick:function(){b.length<1?fetch("/routines",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:p.toLocaleDateString(),routine:1,muscle_group_id:localStorage.getItem("muscle_group_id"),pain:G})}).then((function(e){return e.json()})).then((function(e){console.log({postReturnData:e}),localStorage.setItem("routineNumber",e.id)})):fetch("/routines",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:p.toLocaleDateString(),routine:b.length+1,muscle_group_id:b[0].muscle_group.id,pain:G})}).then((function(e){return e.json()})).then((function(e){console.log({postReturnData:e}),localStorage.setItem("routineNumber",e.id),localStorage.setItem("muscle_group_id",b[0].muscle_group.id)})),s("/exercises")},variant:"success",children:"Start New Exercise Session"})})}),Object(d.jsx)(y.a,{className:"pt-5",children:Object(d.jsx)(j.a,{className:"routineButton1",onClick:function(){return s("/results")},variant:"warning",children:"Go to Results Page"})})]}),Object(d.jsx)(y.a,{className:"pt-1 ",children:Object(d.jsx)(S.a,{children:K})})]})})})};var $=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],a=function(){return s(!1)},r=Object(m.f)();return Object(n.useEffect)((function(){return s(!0)}),[]),Object(d.jsxs)("div",{className:"splash App-headerColor",children:[Object(d.jsx)("video",{autoPlay:!0,loop:!0,id:"video-background",muted:!0,children:Object(d.jsx)("source",{src:"/videos/runningVid.mp4",type:"video/mp4"})}),Object(d.jsx)("div",{className:"splashCard",children:Object(d.jsxs)("div",{className:"splashCardText",children:[Object(d.jsxs)("h1",{children:["Welcome",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})," Pain Point is a website dedicated to solving those common pesky injuries before they start!"]}),Object(d.jsxs)(j.a,{variant:"outline-dark",size:"lg",className:"splashBTN",onClick:function(){return r("/bodyDiagram")},children:["Enter"," "]})]})}),Object(d.jsxs)(I.a,{show:c,onHide:a,backdrop:"static",keyboard:!1,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(I.a.Header,{closeButton:!0,children:Object(d.jsx)(I.a.Title,{style:{color:"red"},children:"Warning!"})}),Object(d.jsxs)(I.a.Body,{children:["This website is meant to be educational! These exercises are meant to be preventative in nature only and do not serve as a prescription.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Please consult with your doctor or physical therapist before undertaking any exercise."]}),Object(d.jsx)(I.a.Footer,{children:Object(d.jsx)(j.a,{variant:"primary",onClick:a,children:"Understood"})})]})]})};var ee=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1],j=Object(n.useState)({name:"",advanced:o,regionBackup:"",muscle_group_id:0}),b=Object(i.a)(j,2),u=b[0],g=b[1],f=Object(m.f)();return Object(n.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return s(e)}))}))}),[]),c?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h.a,{className:"color-nav",expand:"lg",children:Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(h.a.Brand,{href:"/bodydiagram",children:[Object(d.jsx)("img",{alt:"",src:"/images/logoWhite.png",width:"20",className:"d-inline-block align-top logo"}),Object(d.jsx)("span",{className:"navTitle",children:"Pain Point"})]}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(p.a,{className:"me-auto ",children:[Object(d.jsx)(p.a.Link,{href:"/bodydiagram",children:Object(d.jsx)("span",{className:"navLink",children:"Home"})}),Object(d.jsx)(p.a.Link,{onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&(s(null),localStorage.clear(),f("/"))}))},className:"navLink",children:Object(d.jsx)("span",{className:"navLink",children:"Logout"})})]})})]})}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/",element:Object(d.jsx)($,{})}),Object(d.jsx)(m.a,{path:"/bodyDiagram",element:Object(d.jsx)(v,{setRegionSelected:g,buttonValue:o,setButtonValue:l,regionSelected:u})}),Object(d.jsx)(m.a,{path:"/exercises",element:Object(d.jsx)(E,{regionSelected:u,setRegionSelected:g})}),Object(d.jsx)(m.a,{path:"/routines/",element:Object(d.jsx)(Z,{regionSelected:u,setRegionSelected:g})}),Object(d.jsx)(m.a,{path:"/results",element:Object(d.jsx)(Q,{})})]})]}):Object(d.jsx)(x,{setUser:s})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,398)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},ce=c(60);r.a.render(Object(d.jsx)(ce.a,{children:Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[377,1,2]]]);
//# sourceMappingURL=main.d3cb0b2d.chunk.js.map