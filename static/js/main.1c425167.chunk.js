(this["webpackJsonpventurus-4tech-2021"]=this["webpackJsonpventurus-4tech-2021"]||[]).push([[0],{85:function(n,t,e){},86:function(n,t,e){},97:function(n,t,e){"use strict";e.r(t);var r=e(5),c=e(0),i=e.n(c),a=e(18),o=e.n(a),u=(e(85),e(86),e(7)),s=e(52),d=e(31),l=e(8),j=e(55),f=e.n(j),b=e(33);function h(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 5rem;\n    background: #FFFFFF;\n    box-shadow: 5px 5px 10px #A9C4DA;\n    border-radius: 5px;"]);return h=function(){return n},n}function x(){var n=Object(u.a)(["\n    font-size: 30px;\n    "]);return x=function(){return n},n}function p(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 25%;\n    padding-left: 1rem"]);return p=function(){return n},n}var g=function(n){var t=n.initialUrgency,e=n.onChangePriority,i=[{urgency:"low",color:"#71A1FF",selected:!1},{urgency:"average",color:"#F8BD26",selected:!1},{urgency:"high",color:"#FF7171",selected:!1}].map((function(n){return n.urgency===t.urgency?Object(b.a)(Object(b.a)({},n),{},{selected:!0}):n})),a=Object(c.useState)(i),o=Object(d.a)(a,2),u=o[0],s=o[1],j=l.a.div(p()),f=l.a.div(x()),g=l.a.div(h());return Object(r.jsxs)(j,{children:[Object(r.jsx)(f,{children:" Is It Urgent? "}),Object(r.jsx)(g,{children:u.map((function(n,t){return n.selected?Object(r.jsx)("div",{style:{backgroundColor:n.color,width:"calc(2.5rem + 5px)",height:"calc(2.5rem + 5px)",border:"5px solid #5BF326",borderRadius:"3px",cursor:"pointer"}},t):Object(r.jsx)("div",{style:{backgroundColor:n.color,width:"2.5rem",height:"2.5rem",cursor:"pointer"},onClick:function(){return function(n){var t=u.map((function(t){return t.urgency===n?Object(b.a)(Object(b.a)({},t),{},{selected:!0}):Object(b.a)(Object(b.a)({},t),{},{selected:!1})}));s(t),e(t.find((function(n){return!0===n.selected})))}(n.urgency)}},t)}))})]})};function O(){var n=Object(u.a)(["\n    background: #FFFFFF;\n    box-shadow: 5px 5px 10px #A9C4DA;\n    border-radius: 5px;\n    border: 0;\n    height: 5rem;\n    outline: none;"]);return O=function(){return n},n}function v(){var n=Object(u.a)(["\n    font-size: 30px;\n    "]);return v=function(){return n},n}function m(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 35%;"]);return m=function(){return n},n}var y=function(n){var t=n.initialWhatToDo,e=n.onChangeWhatToDo,c=l.a.div(m()),i=l.a.div(v()),a=l.a.input(O());return Object(r.jsxs)(c,{children:[Object(r.jsx)(i,{children:" What to do? "}),Object(r.jsx)(a,{defaultValue:t,onChange:function(n){return e(n.target.value)},type:"text"})]})},w=e(102),D=e(104),k=e(105),T=[{idx:1,avatarSource:e.p+"static/media/avatar1.00d92f05.png"},{idx:2,avatarSource:e.p+"static/media/avatar2.92e24b05.png"},{idx:3,avatarSource:e.p+"static/media/avatar3.72ef8f65.png"},{idx:4,avatarSource:e.p+"static/media/avatar4.30d46c24.png"}];function F(){var n=Object(u.a)(["\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;"]);return F=function(){return n},n}function C(){var n=Object(u.a)(["    \n    width: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;"]);return C=function(){return n},n}function S(){var n=Object(u.a)(["\n    display: flex;\n    height: 5rem;\n    background: #FFFFFF;\n    box-shadow: 5px 5px 10px #A9C4DA;\n    border-radius: 5px;"]);return S=function(){return n},n}function A(){var n=Object(u.a)(["\n    font-size: 30px;\n    "]);return A=function(){return n},n}function W(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 30%;\n    padding-left: 1rem;"]);return W=function(){return n},n}var I=function(n){var t=n.initialSelectedWho,e=n.onChangeSelectedWho,i=Object(c.useState)(t),a=Object(d.a)(i,2),o=a[0],u=a[1],s=l.a.div(W()),j=l.a.div(A()),f=l.a.div(S()),b=l.a.div(C()),h=l.a.div(F()),x=function(n){return n===o?{border:"5px solid #5BF326",boxSizing:"border-box",cursor:"pointer",height:"calc(3rem + 5px)",width:"calc(3rem + 5px)",margin:"0 0.3rem"}:{cursor:"pointer",height:"3rem",width:"3rem",margin:"0 0.3rem"}};return Object(r.jsxs)(s,{children:[Object(r.jsx)(j,{children:" Who "}),Object(r.jsxs)(f,{children:[Object(r.jsx)(b,{onClick:function(){if(1===o)return u(4);u(o-1)},children:Object(r.jsx)(D.a,{})}),Object(r.jsx)(h,{children:T.map((function(n,t){return Object(r.jsx)(w.a,{style:x(n.idx),onClick:function(){u(n.idx),e(n.idx)},icon:Object(r.jsx)("img",{src:n.avatarSource,alt:"Avatar ".concat(n.idx)})},t)}))}),Object(r.jsx)(b,{onClick:function(){if(4===o)return u(1);u(o+1)},children:Object(r.jsx)(k.a,{})})]})]})},z=e(106),B=e(100);function L(){var n=Object(u.a)(["\n    height: 5rem;\n    background: rgba(61, 188, 147, 0.51);\n    box-shadow: 5px 5px 10px #A9C4DA;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px"]);return L=function(){return n},n}function P(){var n=Object(u.a)(["\n    font-size: 30px;\n    "]);return P=function(){return n},n}function E(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 10%;\n    padding-left: 1rem"]);return E=function(){return n},n}var U=function(n){var t=n.loading,e=n.saveTask,c=l.a.div(E()),i=l.a.div(P()),a=l.a.div(L());return Object(r.jsxs)(c,{children:[Object(r.jsx)(i,{children:" Save? "}),Object(r.jsx)(B.a,{spinning:t,children:Object(r.jsxs)(a,{onClick:e,children:[" ",Object(r.jsx)(z.a,{})," "]})})]})};function J(){var n=Object(u.a)(["\n    grid-column: 2 / 5;\n    grid-row: 2;\n    display: flex;\n    user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    -o-user-select: none;\n    "]);return J=function(){return n},n}var N=function(n){var t=n.loading,e=n.submitNewTask,c={taskId:f()(),status:"To Do",whatToDo:"So, what are you up to?",selectedWho:1,priority:{urgency:"low",color:"#71A1FF",selected:!0},createdAt:""},i=l.a.div(J());return Object(r.jsxs)(i,{children:[Object(r.jsx)(y,{initialWhatToDo:c.whatToDo,onChangeWhatToDo:function(n){c.whatToDo=n}}),Object(r.jsx)(I,{initialSelectedWho:c.selectedWho,onChangeSelectedWho:function(n){c.selectedWho=n}}),Object(r.jsx)(g,{initialUrgency:c.priority,onChangePriority:function(n){c.priority=n}}),Object(r.jsx)(U,{loading:t,saveTask:function(){c.createdAt=(new Date).getTime(),console.log(c),e(c)}})]})},M=e(103),R=e(101);function V(){var n=Object(u.a)([" \n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    "]);return V=function(){return n},n}function q(){var n=Object(u.a)(["\n        display: flex;\n        align-items: center;\n        "]);return q=function(){return n},n}function G(){var n=Object(u.a)(["\n        display: inline-block;\n        height: 1rem;\n        width: 1rem;\n        background-color: ",";\n        margin-left: 1rem;\n        "]);return G=function(){return n},n}var H=function(n){var t=n.taskId,e=n.changeTaskStatus,c=n.status,i=n.whatToDo,a=n.who,o=n.priority,u=l.a.div(V());return Object(r.jsxs)(R.a,{size:"small",title:function(){var n=l.a.span(G(),o.color),t=l.a.span(q());return Object(r.jsxs)(t,{children:[" Priority ",Object(r.jsx)(n,{})," "]})}(),extra:function(){var n=Object(r.jsx)(M.a,{style:{cursor:"pointer"},color:"volcano",onClick:function(){return e(t,"To Do")},children:" To Do "}),i=Object(r.jsx)(M.a,{style:{cursor:"pointer"},color:"magenta",onClick:function(){return e(t,"Doing")},children:" Doing "}),a=Object(r.jsx)(M.a,{style:{cursor:"pointer"},color:"green",onClick:function(){return e(t,"Done")},children:" Done "});switch(c){case"To Do":return[i,a];default:return;case"Doing":return[n,a];case"Done":return[n,i]}}(),style:{marginBottom:"2rem"},children:[Object(r.jsx)("div",{children:i}),Object(r.jsxs)(u,{children:[Object(r.jsxs)("span",{children:[" Created at ",(new Date).toLocaleDateString()," "]}),Object(r.jsx)(w.a,{src:Object(r.jsx)("img",{src:T.find((function(n){return n.idx===a})).avatarSource,alt:"Avatar ".concat(a)})})]})]})};function K(){var n=Object(u.a)(["\n        display: flex;"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n        padding: 0 1%;\n        width: calc(100% / 3);\n        display: flex;\n        justify-content: flex-start;\n        align-itens: center;\n        flex-direction: column"]);return Q=function(){return n},n}function X(){var n=Object(u.a)(["\n    border: 0.1rem solid #6D6A6A;\n    background-color: #606A6A;\n    margin-bottom: 2rem;"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 30px;"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 2rem;"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n    grid-column: 2 / 5;\n    grid-row: 3;"]);return $=function(){return n},n}var _=function(n){var t=n.loading,e=n.taskList,c=n.setTaskList,i=l.a.div($()),a=l.a.div(Z()),o=l.a.div(Y()),u=l.a.div(X()),d=function(n,t){var r=Object(s.a)(e);r.find((function(t){return t.taskId===n})).status=t,c(r)};return Object(r.jsxs)(i,{children:[Object(r.jsxs)(a,{children:[Object(r.jsx)(o,{children:" To Do "}),Object(r.jsx)(o,{children:" Doing "}),Object(r.jsx)(o,{children:" Done "})]}),Object(r.jsx)(u,{}),Object(r.jsx)(B.a,{spinning:t,children:function(){var n=l.a.div(Q()),t=l.a.div(K());return Object(r.jsxs)(t,{children:[Object(r.jsxs)(n,{children:[" ",e.filter((function(n){return"To Do"===n.status})).map((function(n,t){return Object(r.jsx)(H,{taskId:n.taskId,changeTaskStatus:d,status:n.status,whatToDo:n.whatToDo,who:n.selectedWho,priority:n.priority},"To Do ".concat(t))}))," "]}),Object(r.jsxs)(n,{children:[" ",e.filter((function(n){return"Doing"===n.status})).map((function(n,t){return Object(r.jsx)(H,{taskId:n.taskId,changeTaskStatus:d,status:n.status,whatToDo:n.whatToDo,who:n.selectedWho,priority:n.priority},"Doing ".concat(t))}))]}),Object(r.jsxs)(n,{children:[" ",e.filter((function(n){return"Done"===n.status})).map((function(n,t){return Object(r.jsx)(H,{taskId:n.taskId,changeTaskStatus:d,status:n.status,whatToDo:n.whatToDo,who:n.selectedWho,priority:n.priority},"Done ".concat(t))}))," "]})]})}()})]})};function nn(){var n=Object(u.a)(["\n        overflow-y: auto;\n        width: 100vw;\n        height: 100vh;\n        display: grid;\n        grid-template-columns: 8em 1fr 1fr 1fr 8em;\n        grid-template-rows: 1rem 9rem 1fr;\n        background-image: linear-gradient(to bottom right, #E7F0FD, #ACEEBB);\n    "]);return nn=function(){return n},n}var tn=function(){var n=Object(c.useState)([]),t=Object(d.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(!1),o=Object(d.a)(a,2),u=o[0],j=o[1],f=l.a.div(nn());return Object(r.jsxs)(f,{children:[Object(r.jsx)(N,{loading:u,submitNewTask:function(n){var t=Object(s.a)(e);t.push(n);var r=t.sort((function(n,t){return n.createdAt-t.createdAt}));j(!0),setTimeout((function(){j(!1),i(r)}),3e3)}}),Object(r.jsx)(_,{loading:u,taskList:e,setTaskList:i})]})};var en=function(){return Object(r.jsx)(tn,{})},rn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,107)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(en,{})}),document.getElementById("root")),rn()}},[[97,1,2]]]);
//# sourceMappingURL=main.1c425167.chunk.js.map